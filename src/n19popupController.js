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
    this.popupAppletN19 = null;
    this.assocAppletN19 = null;

    console.log(`${this.constructor.name} started...`); // eslint-disable-line no-console

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

    // we could use pm.AttachPostProxyExecuteBinding for 'EditField', but at this point GetRenderer returns null
    // but pm exists
    // open until we get rid of GetRenderer (Oracle review)
    // other option - OnLoadPopupContent?
    this.N19viewLoaded = SiebelApp.contentUpdater.viewLoaded;
    SiebelApp.contentUpdater.viewLoaded = (...args) => {
      const ret = this.N19viewLoaded.call(SiebelApp.contentUpdater, ...args);
      if (typeof this.resolvePromise === 'function') {
        // TODO: maybe use here the properties set on resolivng
        const { appletName } = N19popupController.IsPopupOpen();
        if (!appletName) {
          // console.warn('Open Applet Name is not found in viewLoaded resolving Promise');
          throw new Error('Open Applet Name is not found in viewLoaded resolving Promise');
        } else {
          const applet = N19popupController.GetPopupApplet(appletName);
          const pm = applet.GetPModel();
          this.popupAppletN19 = new N19popupApplet({ pm });
          const obj = { appletName, popupAppletN19: this.popupAppletN19 };
          // check if we have assoc - we assume it is always assoc applet?
          const assocApplet = applet.GetPopupApplet();
          if (assocApplet) {
            this.assocAppletN19 = new N19popupApplet({ pm: assocApplet.GetPModel() });
            obj.assocAppletN19 = this.assocAppletN19;
          }
          this.resolvePromise(obj);
          this.resolvePromise = null;
        }
      }
      return ret;
    };
  }

  canOpenPopup() {
    return typeof this.resolvePromise !== 'function';
  }

  processNewPopup(ps) {
    const popupPM = SiebelApp.S_App.GetPopupPM();

    if (!popupPM.GetRenderer()) {
      popupPM.Setup(); // to create PR
    }

    const activeView = SiebelApp.S_App.GetActiveView();
    const activeApplet = activeView.GetActiveApplet();
    if (activeApplet) {
      activeView.SetActiveAppletBeforePopup(activeApplet);
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
      return { isOpen: true, appletName: currPopups[0].GetName(), controlName: currPopups[0].GetPopupControl() };
    }
    if (2 === currPopups.length) {
      // is this always a shuttle when we have a sedond applet
      for (let i = 0, len = currPopups.length; i < len; i += 1) {
        if (typeof currPopups[1].GetPopupAppletName === 'function') {
          return { isOpen: true, appletName: currPopups[i].GetName(), controlName: currPopups[i].GetPopupControl() };
        }
      }
      throw new Error('Mvg applet is not found...');
    }
    throw new Error('should not be here...');
  }

  static GetPopupApplet(appletName) {
    const applet = SiebelApp.S_App.GetActiveView().GetApplet(appletName);
    if (!applet) {
      throw new Error(`The reference to ${appletName} is not instantiated.`);
    }
    return applet;
  }

  checkOpenedPopup(closeIfOpen) {
    const { isOpen, appletName } = N19popupController.IsPopupOpen();
    if (isOpen && closeIfOpen) {
      // this code will close the applet even if this applet was originated by another applet
      console.log(`closing ${appletName} in showPopupApplet...`); // eslint-disable-line no-console
      // maybe do not close if the applet to be opened if the same as already opened?
      return this.closePopupApplet(N19popupController.GetPopupApplet(appletName));
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
      ret = ret.then((result) => {
        n19.notifications.skipNewFieldDataNotifications = false; // eslint-disable-line no-param-reassign
        return result;
      });
      if (typeof cb === 'function') {
        ret = ret.then(cb);
      }
      return ret;
    }

    return true;
  }
}
