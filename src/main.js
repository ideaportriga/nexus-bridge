import N19baseApplet from './n19baseApplet';
import N19popupController from './n19popupController';

SiebelAppFacade.N19Helper = class extends N19baseApplet {
  constructor(settings) {
    const { appletName } = settings;
    if (appletName) {
      const applet = SiebelApp.S_App.GetActiveView().GetApplet(appletName);
      if (!applet) {
        throw new Error(`Failed to get the reference to the applet by the ${appletName} name`);
      }
      super(Object.assign({}, settings, { pm: applet.GetPModel() }));
    } else {
      super(settings);
    }

    console.log('Nexus main class started....', this.appletName); // eslint-disable-line no-console
    // get the n19popupController singleton instance
    this.n19popupController = N19popupController.instance;
  }

  closePopupApplet() {
    return this.n19popupController.closePopupApplet();
  }

  _showPopupApplet(name, hide, cb) {
    if (!this.n19popupController) {
      // it is a popup - probably should never happen?
      throw new Error('Openning popup on the popup is not supported now');
    }
    if (!this.n19popupController.canOpenPopup()) {
      throw new Error('Cannot open popup (currently exists resolve function)!');
      // return false;
    }
    this.view.SetActiveAppletInternal(this.applet); // or SetActiveApplet
    this._setActiveControl(name);
    this.notifications.skipNewFieldDataNotifications = true; // to skip while the popup is openning
    return this.n19popupController.showPopupApplet(hide, cb, this);
  }

  showMvgApplet(name, hide, cb) {
    // TODO: check if name is correct?
    return this._showPopupApplet(name, hide, cb);
  }

  showPickApplet(name, hide, cb) {
    // TODO: check if name is correct?
    return this._showPopupApplet(name, hide, cb);
  }

  openAssocApplet(cb) { // this method should be available for child business component in M:M relationship
    // TODO: check if applet provides such capabilities?
    if (!this.n19popupController.canOpenPopup()) {
      throw new Error('Cannot open popup (currently exists resolve function)!');
    }
    return this.n19popupController._openAssocApplet(this.newRecord.bind(this), cb);
  }

  drilldown(controlName) {
    // TODO: check isLink of control?
    // index is not effective, and drilldown anyway happens on the selected record
    if (!this.isListApplet) {
      return false;
    }
    const index = this.getSelection();
    return this.pm.ExecuteMethod('OnDrillDown', controlName, index);
  }

  gotoView(targetViewName, targetAppletName, id) {
    // TODO: get the applet name from the view definition?
    const rowId = typeof id === 'undefined' ? this.getCurrentRecord(true).Id : id;
    let SWECmd = `GotoView&SWEView=${targetViewName}&SWEApplet0=${targetAppletName}`;
    SWECmd += `&SWEBU=1&SWEKeepContext=FALSE&SWERowId0=${rowId}`;
    SWECmd = encodeURI(SWECmd);
    SiebelApp.S_App.GotoView(targetViewName, '', SWECmd, '');
  }

  reInitPopup() { // do we need to keep also static ReInitPopup
    this.n19popupController.isPopupHidden = false;

    const popupPM = SiebelApp.S_App.GetPopupPM();
    popupPM.Init();
    popupPM.Setup();
  }

  static ReInitPopup() { // could be removed in the next version
    const popupPM = SiebelApp.S_App.GetPopupPM();
    popupPM.Init();
    popupPM.Setup();
  }
};
