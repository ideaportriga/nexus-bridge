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
    // todo : check CanInokeMethod and/or is it pick
    return this.pm.ExecuteMethod('InvokeMethod', 'PickRecord');
  }

  deleteRecords(cb) {
    // method is not allowed to delete the primary
    //  in this case it returns "Method DeleteRecords is not allowed here" SBL-UIF-00348
    // todo: check canInvokeMethod and/or is it MVG
    const ret = this.pm.ExecuteMethod('InvokeMethod', 'DeleteRecords');
    if (typeof cb === 'function') {
      cb();
    }
    return ret;
  }

  addRecords(cb) {
    // todo: check canInvokeMethod and/or is it MVG. and if we have a record in assoc?
    const ret = this.pm.ExecuteMethod('InvokeMethod', 'AddRecords');
    if (typeof cb === 'function') {
      cb();
    }
    return ret;
  }

  // todo: do we need deleteAllRecords?
  addAllRecords(cb) {
    // todo: check canInvokeMethod and/or is it MVG. and if we have a record in assoc?
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
