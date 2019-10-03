import N19baseApplet from './n19baseApplet';

export default class N19popupApplet extends N19baseApplet {
  constructor(settings) {
    super(settings);
    console.log('popup applet started...'); // eslint-disable-line no-console
  }

  pickRecord() {
    return this.pm.ExecuteMethod('InvokeMethod', 'PickRecord');
  }

  deleteRecords(cb) {
    // method is not allowed to delete the primary for visibility MVG
    //  in this case it returns "Method DeleteRecords is not allowed here" SBL-UIF-00348
    const ret = this.pm.ExecuteMethod('InvokeMethod', 'DeleteRecords');
    if (typeof cb === 'function') {
      cb();
    }
    return ret;
  }

  deleteAllRecords(cb) {
    // method is not deleting the primary for visibility MVG(!) and still returns true
    const ret = this.pm.ExecuteMethod('InvokeMethod', 'DeleteAllRecords');
    if (typeof cb === 'function') {
      cb();
    }
    return ret;
  }

  addRecords(cb) {
    const ret = this.pm.ExecuteMethod('InvokeMethod', 'AddRecords');
    if (typeof cb === 'function') {
      cb();
    }
    return ret;
  }

  addAllRecords(cb) {
    const ret = this.pm.ExecuteMethod('InvokeMethod', 'AddAllRecords');
    if (typeof cb === 'function') {
      cb();
    }
    return ret;
  }

  _firstRecord() { // temp method, assumes that no scrolling happened
    if (this.isListApplet) {
      if (this.getSelection() !== 0) {
        return this.positionOnRow(0);
      }
      return true;
    }
    return false;
  }
}
