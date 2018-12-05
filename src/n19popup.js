class N19popup {
  constructor() {
    this.consts = SiebelJS.Dependency('SiebelApp.Constants');
    console.log(`${this.constructor.name} started...`); // eslint-disable-line no-console
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
}

export default N19popup;
