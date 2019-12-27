import N19baseApplet from './n19baseApplet'

export default class N19popupApplet extends N19baseApplet {
  constructor(settings) {
    super(settings)
    console.log('[NB] Popup applet started')
  }

  getPopupType() {
    // TODO: check state? hidden or visible
    // pick, mvgassoc, mvg, assoc, popup
    const pm = window.SiebelApp.S_App.GetPopupPM()

    if (pm.Get('isPopupPick')) {
      return 'pick'
    }
    const mvg = pm.Get('isPopupMVGSelected')
    if (mvg && pm.Get('isPopupMVGAssoc')) {
      // TODO: maybe better check
      // currPopups.length, MVGAssocAppletObject, MVGAssocParentAppletObject
      return 'mvgassoc'
    }
    if (mvg) {
      return 'mvg'
    }
    if (pm.Get('isPopupAssoc')) {
      return 'assoc'
    }
    return 'popup'
  }

  pickRecord() {
    return this.pm.ExecuteMethod('InvokeMethod', 'PickRecord')
  }

  deleteRecords(cb) {
    // method is not allowed to delete the primary for visibility MVG
    //  in this case it returns "Method DeleteRecords is not allowed here" SBL-UIF-00348
    const ret = this.pm.ExecuteMethod('InvokeMethod', 'DeleteRecords')
    if (typeof cb === 'function') {
      cb()
    }
    return ret
  }

  deleteAllRecords(cb) {
    // method is not deleting the primary for visibility MVG(!) and still returns true
    const ret = this.pm.ExecuteMethod('InvokeMethod', 'DeleteAllRecords')
    if (typeof cb === 'function') {
      cb()
    }
    return ret
  }

  addRecords(cb) {
    const ret = this.pm.ExecuteMethod('InvokeMethod', 'AddRecords')
    if (typeof cb === 'function') {
      cb()
    }
    return ret
  }

  addAllRecords(cb) {
    const ret = this.pm.ExecuteMethod('InvokeMethod', 'AddAllRecords')
    if (typeof cb === 'function') {
      cb()
    }
    return ret
  }

  _firstRecord() {
    // temp method, assumes that no scrolling happened
    if (this.isListApplet) {
      if (this.getSelection() !== 0) {
        return this.positionOnRow(0)
      }
      return true
    }
    return false
  }
}
