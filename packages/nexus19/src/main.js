import N19baseApplet from './n19baseApplet';
import N19popupController from './n19popupController';

export default class Nexus19 extends N19baseApplet {
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
    this.n19popupController.settings = settings; // assign creation settings
  }

  closePopupApplet() {
    return this.n19popupController.closePopupApplet();
  }

  _showPopupApplet(name, hide, cb) {
    if (!this.n19popupController.canOpenPopup()) {
      throw new Error('Cannot open popup (currently exists resolve function)!');
    }
    this._setActiveControl(name);
    return this.n19popupController.showPopupApplet(hide, cb, this, 'EditPopup');
  }

  changeRecords(hide, cb) {
    if (!this.n19popupController.canOpenPopup()) {
      throw new Error('Cannot open popup (currently exists resolve function)!');
    }
    return this.n19popupController.showPopupApplet(hide, cb, this, 'ChangeRecords');
  }

  showMvgApplet(name, hide, cb) {
    // TODO: check if name is correct?
    if (this.pm.Get('IsInQueryMode')) {
      throw new Error('Mvg applet cannot be opened in query mode');
    }
    return this._showPopupApplet(name, hide, cb);
  }

  showPickApplet(name, hide, cb) {
    // TODO: check if name is correct?
    return this._showPopupApplet(name, hide, cb);
  }

  _newAssocRecord() {
    return new Promise(resolve => this.pm.ExecuteMethod('InvokeMethod', 'NewRecord', null, {
      async: true,
      cb: resolve,
    }));
  }

  openAssocApplet(hide, cb) { // this method should be available for child business component in M:M relationship
    // TODO: check if applet provides such capabilities?
    if (!this.n19popupController.canOpenPopup()) {
      throw new Error('Cannot open popup (currently exists resolve function)!');
    }
    if (!this.canInvokeMethod('NewRecord')) {
      throw new Error('NewRecord is not available!'); // also when in query mode
    }
    return this.n19popupController._openAssocApplet(hide, this._newAssocRecord.bind(this), cb);
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

  pickRecordById(controlName, rowId) {
    // TODO: check if the control allows picking?
    return this.showPickApplet(controlName, true)
      .then(obj => new Promise(resolve => setTimeout(() => resolve(obj), 0)))
      .then((obj) => {
        const found = obj.popupAppletN19.queryByIdSync(rowId);
        if (found !== 1) {
          throw new Error(`The record ${rowId} is not found (${found})`);
        }
        return obj.popupAppletN19.pickRecord();
      });
  }

  assocRecordsById(controlName, arr, closeApplet) {
    // TODO: check if the control allows mvg?
    return this.showMvgApplet(controlName, true)
      .then(obj => new Promise(resolve => setTimeout(() => resolve(obj), 0)))
      .then(obj => new Promise((resolve) => {
        const found = obj.assocAppletN19.queryByIdSync(arr);
        if (found !== arr.length) {
          // should we throw an error?
          // eslint-disable-next-line no-console
          console.warn(`The amount of found records(${found}) does not match to input array length(${arr.length})`);
        }
        if (found > 0) { // we have something to add
          obj.popupAppletN19.addAllRecords();
        }
        if (closeApplet) {
          this.closePopupApplet();
          resolve(found);
        } else {
          obj.found = found; // eslint-disable-line no-param-reassign
          resolve(obj);
        }
      }));
  }
}

SiebelAppFacade.N19Helper = Nexus19;
