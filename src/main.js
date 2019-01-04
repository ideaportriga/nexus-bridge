import N19baseApplet from './n19baseApplet';
import N19popupController from './n19popupController';

SiebelAppFacade.N19Helper = class extends N19baseApplet {
  constructor(settings) {
    super(settings);
    console.log('Nexus main class started....', this.appletName); // eslint-disable-line no-console
    // get the n19popupController singleton instance
    this.n19popupController = N19popupController.instance;
  }

  closePopupApplet() {
    return this.n19popupController.closePopupApplet();
  }

  _showPopupApplet(name, hide, cb) {
    if (!this.n19popupController) {
      // it is a popup applet
      throw new Error('Openning popup on the popup is not supported now');
    }
    if (!this.n19popupController.canOpenPopup()) {
      throw new Error('Cannot open popup!');
      // return false;
    }
    this.view.SetActiveAppletInternal(this.applet); // or SetActiveApplet
    this._setActiveControl(name);
    return this.n19popupController.showPopupApplet(hide, cb, this.pm);
  }

  showMvgApplet(name, hide, cb) {
    return this._showPopupApplet(name, hide, cb);
  }

  showPickApplet(name, hide, cb) {
    return this._showPopupApplet(name, hide, cb);
  }

  drilldown(controlName) {
    // todo: check isLink of control?
    // index is not effective, and drilldown anyway happens on last selected record
    if (!this.isListApplet) {
      return false;
    }
    const index = this.getSelection();
    return this.pm.ExecuteMethod('OnDrillDown', controlName, index);
  }

  gotoView(targetViewName, targetAppletName, id) {
    // todo: get the applet name from the view definition?
    const rowId = typeof id === 'undefined' ? this.getCurrentRecord(true).Id : id;
    let SWECmd = `GotoView&SWEView=${targetViewName}&SWEApplet0=${targetAppletName}`;
    SWECmd += `&SWEBU=1&SWEKeepContext=FALSE&SWERowId0=${rowId}`;
    SWECmd = encodeURI(SWECmd);
    SiebelApp.S_App.GotoView(targetViewName, '', SWECmd, '');
  }

  static ReInitPopup() {
    const popupPM = SiebelApp.S_App.GetPopupPM();
    popupPM.Init();
    popupPM.Setup();
  }
};
