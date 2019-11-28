import N19popupApplet from './n19popupApplet'

const singleton = Symbol('singleton')
const singletonEnforcer = Symbol('singletonEnforcer')

export default class N19popupController {
  static get instance() {
    if (!this[singleton]) {
      this[singleton] = new N19popupController(singletonEnforcer)
    }
    return this[singleton]
  }

  constructor(enforcer) {
    if (enforcer !== singletonEnforcer) {
      throw new Error(
        '[NB] Instantiation failed: get popup controller instance instead of new'
      )
    }

    const popupPM = window.SiebelApp.S_App.GetPopupPM()
    popupPM.Setup() // to create PR

    this.consts = window.SiebelJS.Dependency('window.SiebelApp.Constants')
    this.isPopupHidden = false
    this.resolvePromise = null
    this.popupAppletN19 = null // it could be removed in the next version
    this.assocAppletN19 = null // it could be removed in the next version

    console.log('[NB] Popup controller started')

    // it will be a singleton, so there is no cleanup
    this.N19processNewPopup = window.SiebelApp.S_App.ProcessNewPopup
    window.SiebelApp.S_App.ProcessNewPopup = (ps) => {
      let ret
      if (this.isPopupHidden) {
        ret = this.processNewPopup(ps)
        // this.isPopupHidden = false; // in order to do not affect the next call // it is redundant
      } else {
        ret = this.N19processNewPopup.call(window.SiebelApp.S_App, ps)
      }
      return ret
    }

    window.SiebelApp.S_App.GetPopupPM().AddMethod(
      'OnLoadPopupContent',
      () => {
        if (typeof this.resolvePromise === 'function') {
          const {
            applet,
            assocApplet,
            appletName,
            assocAppletName
          } = N19popupController.IsPopupOpen()

          if (!applet) {
            this.resolvePromise = null // how do we do error handling
            throw new Error(
              '[NB] Open Popup Applet is not found in OnLoadPopupContent resolving Promise'
            )
          }

          if (!window.SiebelAppFacade.NB) {
            console.warn(
              '[NB] The `window.SiebelAppFacade.NB` is empty. Please check the PR files deployed'
            )
          } else {
            const arr = Object.values(window.SiebelAppFacade.NB)
            for (let i = 0; i < arr.length; i += 1) {
              if (arr[i].isPopup) {
                // this is popup
                if (assocApplet && arr[i].isMvgAssoc) {
                  this.assocAppletN19 = arr[i]
                } else {
                  this.popupAppletN19 = arr[i]
                }
              }
            }
          }

          const obj = {
            appletName,
            applet,
            assocAppletName,
            assocApplet,
            popupAppletN19: this.popupAppletN19,
            assocAppletN19: this.assocAppletN19
          }

          this.resolvePromise(obj)
          this.resolvePromise = null
        }
      },
      { sequence: false }
    )

    this.viewLoadedResolve = null
    this.N19viewLoaded = window.SiebelApp.contentUpdater.viewLoaded
    window.SiebelApp.contentUpdater.viewLoaded = (...args) => {
      const ret = this.N19viewLoaded.call(
        window.SiebelApp.contentUpdater,
        ...args
      )
      if (typeof this.viewLoadedResolve === 'function') {
        this.viewLoadedResolve(true)
        // TODO: Check view name to be safe??
        this.viewLoadedResolve = null
      }
      return ret
    }
  }

  gotoView(viewName, appletName, id) {
    return new Promise((resolve) => {
      this.viewLoadedResolve = resolve
      if (appletName && id) {
        let SWECmd = `GotoView&SWEView=${viewName}&SWEApplet0=${appletName}`
        SWECmd += `&SWEBU=1&SWEKeepContext=FALSE&SWERowId0=${id}`
        SWECmd = encodeURI(SWECmd)
        window.SiebelApp.S_App.GotoView(viewName, '', SWECmd, '')
      } else {
        window.SiebelApp.S_App.GotoView(viewName)
      }
    })
  }

  _createNexusInstance(pm) {
    return new N19popupApplet(Object.assign({}, this.settings, { pm }))
  }

  canOpenPopup() {
    return typeof this.resolvePromise !== 'function'
  }

  processNewPopup(ps) {
    const popupPM = window.SiebelApp.S_App.GetPopupPM()

    // this property is added using AttachPMBinding into the Init PR (called by PM Setup)
    popupPM.AddProperty('state', this.consts.get('POPUP_STATE_VISIBLE'))

    let url = ps.GetProperty('URL')
    if (url.indexOf('start.swe') > -1) {
      // pre 17
      url = window.SiebelApp.S_App.GetPageURL() + url.split('start.swe')[1]
    } else {
      // assuming 17+
      url =
        window.SiebelApp.S_App.GetPageURL() +
        url.split(window.SiebelApp.S_App.GetAppExtension())[1]
    }
    popupPM.SetProperty('url', url)

    return 'refreshpopup'
  }

  closePopupApplet() {
    if (!this.popupAppletN19 || !this.popupAppletN19.pm) {
      throw new Error('[NB] The popup applet was not opened by NB')
    }
    if (
      !this.popupAppletN19.pm.ExecuteMethod('CanInvokeMethod', 'CloseApplet')
    ) {
      throw new Error('[NB] The method CloseApplet is not allowed')
    }
    const ret = this.popupAppletN19.pm.ExecuteMethod(
      'InvokeMethod',
      'CloseApplet'
    )
    // it could be better if we don't have a Siebel Applet on the view
    // do reinit here on closing?
    this.popupAppletN19 = null
    this.assocAppletN19 = null
    return ret
  }

  static IsPopupOpen() {
    // safer to keep this method, even when we set some properties on resolve?
    const currPopups = window.SiebelApp.S_App.GetPopupPM().Get('currPopups')
    if (0 === currPopups.length) {
      return { isOpen: false }
    }
    if (1 === currPopups.length) {
      return {
        isOpen: true,
        applet: currPopups[0],
        appletName: currPopups[0].GetName()
      }
    }
    if (2 === currPopups.length) {
      // is this always a shuttle when we have more one applet
      // OpenUI assumes that 0 is mvg, so do I
      return {
        isOpen: true,
        applet: currPopups[0],
        appletName: currPopups[0].GetName(),
        assocApplet: currPopups[1],
        assocAppletName: currPopups[1].GetName()
      }
    }
    throw new Error('[NB] Should never have been here')
  }

  checkOpenedPopup(closeIfOpen) {
    const { isOpen } = N19popupController.IsPopupOpen()
    if (isOpen && closeIfOpen) {
      // this code will close the applet even if this applet was originated by another applet
      console.log(
        '[NB] Closing already opened popup applet in checkOpenedPopup'
      )
      // maybe do not close if the applet to be opened if the same as already opened?
      // return this.closePopupApplet()
    }
    return isOpen
  }

  _openAssocApplet(hide, newRecordFunc, cb) {
    this.checkOpenedPopup(true)
    this.isPopupHidden = !!hide

    newRecordFunc() // make async of invokeMethod?

    if (hide) {
      let ret = new Promise((resolve) => {
        this.resolvePromise = resolve
      })
      if (typeof cb === 'function') {
        ret = ret.then(cb)
      }
      return ret
    }

    return true
  }

  showPopupApplet(hide, cb, n19, methodName) {
    // TODO: maybe use the properties set on promise resolving?
    this.checkOpenedPopup(true)
    this.isPopupHidden = !!hide

    n19.pm.ExecuteMethod('InvokeMethod', methodName)
    // can call EditField if EditPopup?

    if (hide) {
      // we will populate the instances only when applet should be hidden
      let ret = new Promise((resolve) => {
        this.resolvePromise = resolve
      })
      if (typeof cb === 'function') {
        ret = ret.then(cb)
      }
      return ret
    }

    return true
  }
}
