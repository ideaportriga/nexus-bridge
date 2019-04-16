import N19popupApplet from './n19popupApplet';

const singleton = Symbol('singleton');
const singletonEnforcer = Symbol('singletonEnforcer');

export default class N19popupController {
  static get instance() {
    if (!this[singleton]) {
      this[singleton] = new N19popupController(singletonEnforcer);
    }
    return this[singleton];
  }

  constructor(enforcer) {
    if (enforcer !== singletonEnforcer) {
      throw new Error('Instantiation failed: use Singleton.getInstance() instead of new.');
    }

    this.consts = SiebelJS.Dependency('SiebelApp.Constants');
    this.isPopupHidden = false;
    this.resolvePromise = null;
    this.popupAppletN19 = null; // it could be removed in the next version
    this.assocAppletN19 = null; // it could be removed in the next version

    console.log('popup controller started...'); // eslint-disable-line no-console

    this.N19resizeAvailable = SiebelApp.MvgBeautifier.resizeAvailable;
    SiebelApp.MvgBeautifier.resizeAvailable = () => {
      try {
        this.N19resizeAvailable.call(SiebelApp.MvgBeautifier);
      } catch (e) {
        console.log(`resizeAvailable Error: ${e.name} ${e.message}`); // eslint-disable-line no-console
      }
    };

    // it will be a singleton, so there is no cleanup
    this.N19processNewPopup = SiebelApp.S_App.ProcessNewPopup;
    SiebelApp.S_App.ProcessNewPopup = (ps) => {
      let ret;
      if (this.isPopupHidden) {
        ret = this.processNewPopup(ps);
        this.isPopupHidden = false; // in order to do not affect the next call
      } else {
        ret = this.N19processNewPopup.call(SiebelApp.S_App, ps);
      }
      return ret;
    };

    // we could use pm.AttachPostProxyExecuteBinding for 'EditField', pm exists, but GetRenderer returns null
    // open until we get rid of GetRenderer (Oracle review)
    // other option - resolve it in SiebelApp.contentUpdater.viewLoaded
    SiebelApp.S_App.GetPopupPM().AttachPMBinding('OnLoadPopupContent', () => {
      if (typeof this.resolvePromise === 'function') {
        const { appletName, applet, assocApplet } = N19popupController.IsPopupOpen();
        if (!appletName) {
          throw new Error('Open Applet Name is not found in OnLoadPopupContent resolving Promise');
        }
        this.popupAppletN19 = this._createNexusInstance(applet.GetPModel());
        const obj = { appletName, popupAppletN19: this.popupAppletN19 };

        if (assocApplet) { // shuttle
          this.assocAppletN19 = this._createNexusInstance(assocApplet.GetPModel());
          obj.assocAppletN19 = this.assocAppletN19;
          obj.availableRecordSet = this.assocAppletN19.getControlsRecordSet();
          obj.selectedRecordSet = this.popupAppletN19.getControlsRecordSet();
        } else { // assoc only OR pick
          obj.availableRecordSet = this.popupAppletN19.getControlsRecordSet();
        }

        this.resolvePromise(obj);
        this.resolvePromise = null;
      }
    });
  }

  _createNexusInstance(pm) {
    const obj = { pm };
    return new N19popupApplet(Object.assign({}, this.settings, obj));
  }

  canOpenPopup() {
    return typeof this.resolvePromise !== 'function';
  }

  processNewPopup(ps) {
    const popupPM = SiebelApp.S_App.GetPopupPM();

    if (!popupPM.GetRenderer()) {
      popupPM.Setup(); // to create PR
    }

    // this property is added using AttachPMBinding into the Init PR (called by PM Setup)
    // it is the reason why we have reinit procedure where Setup PM is called
    popupPM.AddProperty('state', this.consts.get('POPUP_STATE_VISIBLE'));

    let url = ps.GetProperty('URL');
    url = SiebelApp.S_App.GetPageURL() + url.split('start.swe')[1];
    popupPM.SetProperty('url', url);

    return 'refreshpopup';
  }

  closePopupApplet(applet) {
    // TODO: check canInvokeMethod?
    let ret;
    if (applet) {
      const isPopupApplet = typeof applet.GetPopupAppletName === 'function';
      const isPickApplet = typeof applet.GetPickAppletName === 'function';
      if (!isPopupApplet && !isPickApplet) {
        throw new Error('This applet is neither pick nor popup');
      }
      ret = applet.GetPModel().ExecuteMethod('InvokeMethod', 'CloseApplet');
    } else {
      ret = this.popupAppletN19.applet.GetPModel().ExecuteMethod('InvokeMethod', 'CloseApplet');
    }
    // it could be better if we don't have a Siebel Applet on the view
    // do reinit here on closing?
    this.popupAppletN19 = null;
    this.assocAppletN19 = null;
    return ret;
  }

  static IsPopupOpen() { // safer to keep this method, even when we set some properties on resolve?
    const currPopups = SiebelApp.S_App.GetPopupPM().Get('currPopups');
    if (0 === currPopups.length) {
      return { isOpen: false };
    }
    if (1 === currPopups.length) {
      return { isOpen: true, appletName: currPopups[0].GetName(), applet: currPopups[0] };
    }
    if (2 === currPopups.length) {
      // is this always a shuttle when we have more one applet
      // OpenUI assumes that 0 is mvg, so do I
      return {
        isOpen: true, appletName: currPopups[0].GetName(), applet: currPopups[0], assocApplet: currPopups[1],
      };
    }
    throw new Error('should not be here...');
  }

  checkOpenedPopup(closeIfOpen) {
    const { isOpen, appletName, applet } = N19popupController.IsPopupOpen();
    if (isOpen && closeIfOpen) {
      // this code will close the applet even if this applet was originated by another applet
      console.log(`closing ${appletName} in showPopupApplet...`); // eslint-disable-line no-console
      // maybe do not close if the applet to be opened if the same as already opened?
      return this.closePopupApplet(applet);
    }
    return {
      isOpen,
      appletName,
    };
  }

  _openAssocApplet(newRecordFunc, cb) {
    this.checkOpenedPopup(true);
    this.isPopupHidden = true;

    newRecordFunc(); // make async of invokeMethod?

    let ret = new Promise((resolve) => { this.resolvePromise = resolve; });
    if (typeof cb === 'function') {
      ret = ret.then(cb);
    }
    return ret;
  }

  showPopupApplet(hide, cb, n19) {
    // TODO: maybe use the properties set on promise resolving?
    this.checkOpenedPopup(true);

    this.isPopupHidden = !!hide;

    n19.pm.ExecuteMethod('InvokeMethod', 'EditPopup'); // can call EditField?

    if (hide) { // we will populate the instances only when applet should be hidden
      let ret = new Promise((resolve) => { this.resolvePromise = resolve; });
      if (typeof cb === 'function') {
        ret = ret.then(cb);
      }
      return ret;
    }

    return true;
  }
}
