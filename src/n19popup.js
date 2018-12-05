class N19popup { // eslint-disable-line no-unused-vars
  constructor(applet) {
    this.applet = applet;

    this.consts = SiebelJS.Dependency('SiebelApp.Constants');
    this.utils = SiebelJS.Dependency('SiebelApp.Utils');

    console.log(`${this.constructor.name} started...`); // eslint-disable-line no-console
  }

  addSweSP(n) {
    let ret = n;
    if (ret.indexOf('.swe?') !== -1 && ret.indexOf(this.consts.get('SWE_SHOW_POPUP_STR')) === -1) {
      ret = this.utils.AppendArgsToURL(ret, this.consts.get('SWE_SHOW_POPUP_STR'), this.consts.get('SWE_NUMERIC_TRUE'));
    }
    return ret;
  }

  pmProcessNewPopup(ps, hide) {
    const popupPM = SiebelApp.S_App.GetPopupPM();

    popupPM.SetProperty('isPopupPick', false);
    popupPM.SetProperty('isPopupMVGAssoc', false);
    popupPM.SetProperty('isPopupMVGSelected', false);
    popupPM.SetProperty('isPopupAssoc', false);
    popupPM.SetProperty('currPopups', []);
    popupPM.SetProperty('isSIPopup', ps.GetProperty(this.consts.get('SWE_IS_SI_POPUP')));
    popupPM.SetProperty('isPrevPopupVisible', !1);

    // if (popupPM.Get('state') === this.consts.get('POPUP_STATE_UNLOADED')) {
    if (!popupPM.GetRenderer()) {
      popupPM.Setup();
    }
    // }

    let url = ps.GetProperty('URL');
    // url = this.addSweSP(url);
    url = SiebelApp.S_App.GetPageURL() + url.split('start.swe')[1];

    const activeView = SiebelApp.S_App.GetActiveView();
    if (activeView) {
      const activeApplet = activeView.GetActiveApplet();
      if (activeApplet) {
        activeView.SetActiveAppletBeforePopup(activeApplet);
      }
    }

    if (hide) {
      popupPM.AddProperty('state', 'visible'); // todo: we need to restore the value?
    } else {
      // todo: we never get here?
      popupPM.ExecuteMethod('SetPopupVisible', !0);
    }

    popupPM.SetProperty('url', url);
  }

  processNewPopup(ps, hide) {
    SiebelApp.S_App.SetShowNewPage(!0);
    SiebelApp.S_App.GetPopupPM().SetProperty('CanProcessLayout', !1);
    // SiebelApp.S_App.GetPopupPM().ExecuteMethod('ProcessNewPopup', ps);
    this.pmProcessNewPopup(ps, hide);
    return 'refreshpopup';
  }
}

export default N19popup;
