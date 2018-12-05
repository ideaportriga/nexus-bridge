class N19popup {
  constructor() {
    this.consts = SiebelJS.Dependency('SiebelApp.Constants');
    this.isPopupHidden = false;
    this.resolvePromise = null;

    console.log(`${this.constructor.name} started...`); // eslint-disable-line no-console

    // it will be a singleton, so there is no cleanup
    SiebelAppFacade.N19processNewPopup = SiebelApp.S_App.ProcessNewPopup;
    SiebelApp.S_App.ProcessNewPopup = (ps) => {
      let ret;
      if (this.isPopupHidden) {
        ret = this.processNewPopup(ps);
      } else {
        ret = SiebelAppFacade.N19processNewPopup.call(SiebelApp.S_App, ps);
      }
      return ret;
    };

    SiebelAppFacade.N19viewLoaded = SiebelApp.contentUpdater.viewLoaded;
    SiebelApp.contentUpdater.viewLoaded = (...args) => {
      const ret = SiebelAppFacade.N19viewLoaded.call(SiebelApp.contentUpdater, ...args);
      if (typeof this.resolvePromise === 'function') {
        const { appletName } = this.isPopupOpen();
        this.resolvePromise(appletName);
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

  closePopupApplet(applet) {
    const isPopupApplet = typeof applet.GetPopupAppletName === 'function';
    const isPickApplet = typeof applet.GetPickAppletName === 'function';

    if (isPopupApplet || isPickApplet) {
      // todo : check canInvokeMethod
      const ret = applet.GetPModel().ExecuteMethod('InvokeMethod', 'CloseApplet');
      // it could be better if we don't have a Siebel Applet on the view
      // in this case, we would not need to reInitPopup
      if (this.isPopupHidden) {
        this.reInitPopup();
      }
      return ret;
    }
    throw new Error('This applet is neither pick nor popup');
  }

  isPopupOpen() {
    // this code will close the applet even if this applet was originated by another applet
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
    throw new Error('how did I get here...');
  }

  showPopupApplet(hide, cb, pm) {
    const { isOpen, appletName } = this.isPopupOpen();
    if (isOpen) {
      console.log(`closing ${appletName} in _showPopupApplet...`); // eslint-disable-line no-console
      // maybe do not close if the applet to be opened if the same as already opened?
      this.closePopupApplet(SiebelAppFacade.N19[appletName].getApplet());
      // todo: check if got it successfully closed?
    }
    this.isPopupHidden = !!hide;

    pm.ExecuteMethod('InvokeMethod', 'EditPopup', null, false); // seems we can also to call EditField

    const ret = new Promise(resolve => this.resolvePromise = resolve); // eslint-disable-line no-param-assign
    if (typeof cb === 'function') {
      return ret.then(cb);
    }
    return ret;
  }
}

export default N19popup;
