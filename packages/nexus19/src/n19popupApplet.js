import N19baseApplet from './n19baseApplet';

export default class N19popupApplet extends N19baseApplet {
  constructor(settings) {
    super(settings);
    console.log(`${this.constructor.name} started...`); // eslint-disable-line no-console

    if (this.isListApplet) {
      this.pm.GetRenderer().resize = () => 0;
      this.pm.GetRenderer().GetSelectedRow = () => 0;
    }
  }

  pickRecord() {
    // TODO: check canInokeMethod?
    return this.pm.ExecuteMethod('InvokeMethod', 'PickRecord');
  }

  deleteRecords(cb) {
    // method is not allowed to delete the primary for visibility MVG
    //  in this case it returns "Method DeleteRecords is not allowed here" SBL-UIF-00348
    // TODO: check canInvokeMethod?
    const ret = this.pm.ExecuteMethod('InvokeMethod', 'DeleteRecords');
    if (typeof cb === 'function') {
      cb();
    }
    return ret;
  }

  deleteAllRecords(cb) {
    // method is not deleting the primary for visibility MVG(!) and still returns true
    // TODO: check canInvokeMethod?
    const ret = this.pm.ExecuteMethod('InvokeMethod', 'DeleteAllRecords');
    if (typeof cb === 'function') {
      cb();
    }
    return ret;
  }

  addRecords(cb) {
    // TODO: check canInvokeMethod?
    const ret = this.pm.ExecuteMethod('InvokeMethod', 'AddRecords');
    if (typeof cb === 'function') {
      cb();
    }
    return ret;
  }

  addAllRecords(cb) {
    // TODO: check canInvokeMethod?
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
