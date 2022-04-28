import NexusBaseApplet from './NexusBaseApplet'
import NexusPopupController from './NexusPopupController'
import NexusPopupApplet from './NexusPopupApplet'

export default class Nexus extends NexusBaseApplet {
  constructor(settings) {
    super(settings)

    // get the NexusPopupController singleton instance
    this.nexusPopupController = NexusPopupController.instance
    this.nexusPopupController.settings = Object.assign(
      this.nexusPopupController.settings || {},
      settings
    )
  }

  closePopupApplet(nb) {
    return this.nexusPopupController.closePopupApplet(nb)
  }

  showPopupApplet(method, hide, cb, ps) {
    if (!this.nexusPopupController.canOpenPopup()) {
      throw new Error(
        '[NB] Cannot open popup, another popup is openning and exists resolve func' 
      )
    }
    return this.nexusPopupController.showPopupApplet(hide, cb, this, method, ps)
  }

  _showEditPopup(controlName, hide, cb) {
    this._setActiveControl(controlName)
    return this.showPopupApplet('EditPopup', hide, cb)
  }

  changeRecords(hide, cb) {
    this.showPopupApplet('ChangeRecords', hide, cb)
  }

  showExportApplet(hide, cb) {
    if (!this.nexusPopupController.canOpenPopup()) {
      throw new Error(
        '[NB] Cannot open popup, another popup is openning and exists resolve func' 
      )
    }
    return this.nexusPopupController.showExportApplet(hide, cb, this)
    // return this.showPopupApplet('ExportQuery', hide, cb)
  }

  showMvgApplet(name, hide, cb) {
    const control = this._getControl(name)
    if (!control) {
      throw new Error(
        `[NB] Cannot find a control by name ${name} to show Mvg applet.`
      )
    }
    const uiType = control.GetUIType()
    if (uiType !== this.consts.get('SWE_CTRL_MVG')) {
      throw new Error(
        `Control ${name} is not of supported type ${uiType} to show Mvg applet`
      )
    }
    if (this.pm.Get('IsInQueryMode')) {
      throw new Error('[NB] Mvg applet cannot be opened in query mode')
    }
    return this._showEditPopup(name, hide, cb)
  }

  showPickApplet(name, hide, cb) {
    const control = this._getControl(name)
    if (!control) {
      throw new Error(
        `[NB] Cannot find a control by name ${name} to show Pick applet.`
      )
    }
    const uiType = control.GetUIType()
    if (uiType !== this.consts.get('SWE_CTRL_PICK')) {
      throw new Error(
        `Control ${name} is not of supported type ${uiType} to show Pick applet`
      )
    }
    return this._showEditPopup(name, hide, cb)
  }

  showPopup(name, hide, cb) {
    const control = this._getControl(name)
    if (!control) {
      throw new Error(
        `[NB] Cannot find a control by name ${name} to show Popup applet.`
      )
    }
    const uiType = control.GetUIType()
    if (uiType !== 'Button') {
      throw new Error(
        `Control ${name} is not of supported type ${uiType} to show Popup applet`
      )
    }
    if (control.GetMethodName() !== 'ShowPopup') {
      throw new Error(
        `Control ${name} method is not ShowPopup`
      )
    }
    const ps = control.GetMethodPropSet() // TODO: check if the SWETA property exists?

    this._setActiveControl(name)

    return this.showPopupApplet('ShowPopup', hide, cb, ps)
  }

  _newAssocRecord() {
    return new Promise((resolve) =>
      this.pm.ExecuteMethod('InvokeMethod', 'NewRecord', null, {
        async: true,
        cb: resolve
      })
    )
  }

  openAssocApplet(hide, cb) {
    // this method should be available for child business component in M:M relationship
    if (!this.nexusPopupController.canOpenPopup()) {
      throw new Error(
        '[NB] Cannot open popup (currently exists resolve function)'
      )
    }
    if (!this.canInvokeMethod('NewRecord')) {
      throw new Error('[NB] NewRecord is not available') // also when in query mode
    }
    return this.nexusPopupController._openAssocApplet(
      hide,
      this._newAssocRecord.bind(this),
      cb
    )
  }

  drilldown(controlName) {
    if (this.isListApplet) {
      // TODO: check isLink of control?
      // index is not effective, and drilldown anyway happens on the selected record
      const index = this.getSelection()

      // return this.pm.ExecuteMethod('OnDrillDown', controlName, index);
      return this.pm.OnControlEvent(
        this.consts.get('PHYEVENT_DRILLDOWN_LIST'),
        controlName,
        index
      )
    }
    // else lets assume it is form applet
    const control = this._getControl(controlName)
    if (!control) {
      throw new Error(`[NB] Control ${controlName} is not found`)
    }
    return this.pm.OnControlEvent(
      this.consts.get('PHYEVENT_DRILLDOWN_FORM'),
      control
    )
    // const ps = control.GetMethodPropSet();
    // return this.pm.ExecuteMethod('InvokeMethod', 'DrillDown', ps);
  }

  drilldownPromised(controlName) {
    return new Promise((resolve) => {
      this.nexusPopupController.viewLoadedResolve = resolve
      this.drilldown(controlName)
    })
  }

  static GotoView(viewName, appletName, id) {
    if (appletName && id) {
      let SWECmd = `GotoView&SWEView=${viewName}&SWEApplet0=${appletName}`
      SWECmd += `&SWEBU=1&SWEKeepContext=FALSE&SWERowId0=${id}`
      SWECmd = encodeURI(SWECmd)
      return window.SiebelApp.S_App.GotoView(viewName, '', SWECmd, '')
    } else {
      return window.SiebelApp.S_App.GotoView(viewName)
    }
  }

  gotoView(viewName, appletName, id) {
    // id = typeof id === 'undefined' ? (this.getCurrentRecord(true) || {}).Id : id
    return Nexus.GotoView(viewName, appletName, id)
  }

  gotoViewPromised(targetViewName, appletName, id) {
    return this.nexusPopupController.gotoView(
      this,
      this.gotoView,
      targetViewName,
      appletName,
      id
    )
  }

  static GotoViewPromised(targetViewName, appletName, id) {
    return NexusPopupController.instance.gotoView(
      null,
      Nexus.GotoView,
      targetViewName,
      appletName,
      id
    )
  }

  reInitPopup() {
    this.nexusPopupController.reInitPopupPM()
  }

  static ReInitPopup() {
    NexusPopupController.instance.reInitPopupPM()
  }

  static CreatePopupNB(settings) {
    if (!settings.pm || !settings.pm.Get('IsPopup')) {
      throw new Error('[NB] No pm or the given pm is not popup applet PM')
    }

    const popupPM = window.SiebelApp.S_App.GetPopupPM()
    const isShuttle = popupPM.Get('isPopupMVGAssoc')
    const mvgAssoc = popupPM.Get('MVGAssocAppletObject')

    settings.isMvgAssoc =
      isShuttle && mvgAssoc && settings.pm.Get('GetName') === mvgAssoc.GetName()
    settings.isPopup = true
    return new NexusPopupApplet(settings)
  }
}
