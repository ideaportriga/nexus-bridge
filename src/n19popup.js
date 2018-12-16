const singleton = Symbol('singleton');
const singletonEnforcer = Symbol('singletonEnforcer');

class N19popup {
  static get instance() {
    if (!this[singleton]) {
      this[singleton] = new N19popup(singletonEnforcer);
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

    // it will be a singleton, so there is no cleanup
    this.N19processNewPopup = SiebelApp.S_App.ProcessNewPopup; // todo : remove it from SiebelAppFacade
    SiebelApp.S_App.ProcessNewPopup = (ps) => {
      let ret;
      if (this.isPopupHidden) {
        ret = this.processNewPopup(ps);
      } else {
        ret = this.N19processNewPopup.call(SiebelApp.S_App, ps);
      }
      return ret;
    };

    this.N19viewLoaded = SiebelApp.contentUpdater.viewLoaded;
    SiebelApp.contentUpdater.viewLoaded = (...args) => {
      const ret = this.N19viewLoaded.call(SiebelApp.contentUpdater, ...args);
      if (typeof this.resolvePromise === 'function') {
        const { appletName } = this.isPopupOpen(); // todo: use here the properties set on promiseResolving?
        if (!appletName) {
          throw new Error('Open Applet Name is not found in resolvePromise');
        }
        const applet = this.getPopupApplet(appletName);
        const pm = applet.GetPModel();
        // todo: avoid this circularity
        this.popupAppletN19 = new SiebelAppFacade.N19Helper({ pm, isPopup: true }); // todo : split N19Helper into 2 classes
        const obj = { appletName, popupAppletN19: this.popupAppletN19 };
        // check if we have assoc
        // we assume it is always assoc applet, but what about opening popup on the top of another - not tested it
        const assocApplet = applet.GetPopupApplet();
        if (assocApplet) {
          this.assocAppletN19 = new SiebelAppFacade.N19Helper({
            pm: assocApplet.GetPModel(),
            isPopup: true,
          });
          obj.assocAppletN19 = this.assocAppletN19;
        }
        this.resolvePromise(obj);
        this.resolvePromise = null;
      }
      return ret;
    };
  }

  canOpenPopup() {
    return typeof this.resolvePromise !== 'function';
  }

  processNewPopup(ps) {
    SiebelApp.S_App.SetShowNewPage(!0);
    const popupPM = SiebelApp.S_App.GetPopupPM();

    popupPM.SetProperty('CanProcessLayout', !1);
    popupPM.SetProperty('isPopupPick', false);
    popupPM.SetProperty('isPopupMVGAssoc', false);
    popupPM.SetProperty('isPopupMVGSelected', false);
    popupPM.SetProperty('isPopupAssoc', false);
    popupPM.SetProperty('currPopups', []);
    popupPM.SetProperty('isSIPopup', ps.GetProperty(this.consts.get('SWE_IS_SI_POPUP')));
    popupPM.SetProperty('isPrevPopupVisible', !1);

    if (!popupPM.GetRenderer()) {
      popupPM.Setup();
    }

    const activeView = SiebelApp.S_App.GetActiveView();
    if (activeView) {
      const activeApplet = activeView.GetActiveApplet();
      if (activeApplet) {
        activeView.SetActiveAppletBeforePopup(activeApplet);
      }
    }

    popupPM.AddProperty('state', 'visible'); // todo: we need also to restore the PM

    let url = ps.GetProperty('URL');
    url = SiebelApp.S_App.GetPageURL() + url.split('start.swe')[1];
    popupPM.SetProperty('url', url);

    return 'refreshpopup';
  }

  reInitPopup() {
    const popupPM = SiebelApp.S_App.GetPopupPM();
    popupPM.Init();
    popupPM.Setup();
  }

  // todo: change the approach, use the class internal variables
  closePopupApplet(applet) {
    // todo : check canInvokeMethod
    let ret;
    if (applet) {
      const isPopupApplet = typeof applet.GetPopupAppletName === 'function';
      const isPickApplet = typeof applet.GetPickAppletName === 'function';
      if (!isPopupApplet && !isPickApplet) {
        throw new Error('This applet is neither pick nor popup');
      }
      ret = applet.GetPModel().ExecuteMethod('InvokeMethod', 'CloseApplet');
    } else {
      // todo: !!! >> change this approach
      ret = this.popupAppletN19.applet.GetPModel().ExecuteMethod('InvokeMethod', 'CloseApplet');
    }
    // it could be better if we don't have a Siebel Applet on the view
    // in this case, we would not need to reInitPopup
    if (this.isPopupHidden) {
      this.reInitPopup();
    }
    this.popupAppletN19 = null;
    this.assocAppletN19 = null;
    return ret;
  }

  isPopupOpen() { // todo: when we set some properties on resolve, do we need this method now
    // todo: here reuse the properties that set when the Promise resolved
    const currPopups = SiebelApp.S_App.GetPopupPM().Get('currPopups');
    if (0 === currPopups.length) {
      return { isOpen: false };
    }
    if (1 === currPopups.length) {
      return { isOpen: true, appletName: currPopups[0].GetName(), controlName: currPopups[0].GetPopupControl() };
    }
    if (2 === currPopups.length) {
      // this is a shuttle or
      // maybe we opened a popup applet on the top of pick applet - TODO: // test it
      //      test it  - maybe we need to close the several applets
      for (let i = 0; i < currPopups.length; i += 1) {
        if (typeof currPopups[1].GetPopupAppletName === 'function') {
          return { isOpen: true, appletName: currPopups[i].GetName(), controlName: currPopups[i].GetPopupControl() };
        }
      }
      throw new Error('Mvg applet is not found...');
    }
    // todo: test if we can get to here
    //    maybe when we open a new applet on top of the shuttle applet
    throw new Error('should not be here...');
  }

  getPopupAppletPM(appletName) {
    const applet = this.getPopupApplet(appletName);
    return applet.GetPModel();
  }

  getPopupApplet(appletName) {
    const applet = SiebelApp.S_App.GetActiveView().GetAppletMap()[appletName];
    if (!applet) {
      throw new Error(`The ${appletName} is not found in applet map`);
    }
    return applet;
  }

  showPopupApplet(hide, cb, pm) {
    const { isOpen, appletName } = this.isPopupOpen(); // todo: use the properties set on promise resolving?
    if (isOpen) {
      // this code will close the applet even if this applet was originated by another applet
      console.log(`closing ${appletName} in _showPopupApplet...`); // eslint-disable-line no-console
      // maybe do not close if the applet to be opened if the same as already opened?
      this.closePopupApplet(this.getPopupApplet(appletName));
      // todo: check if got it successfully closed?
    }
    this.isPopupHidden = !!hide; // todo: do we need to keep the show the applet

    pm.ExecuteMethod('InvokeMethod', 'EditPopup', null, false); // seems we can also to call EditField

    // eslint-disable-next-line no-return-assign
    let ret = new Promise(resolve => this.resolvePromise = resolve); // eslint-disable-line no-param-assign
    if (typeof cb === 'function') {
      ret = ret.then(cb);
    }
    return ret;
  }
}

export default N19popup;
