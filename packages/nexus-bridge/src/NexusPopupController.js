import nexusPopupApplet from './NexusPopupApplet'

const singleton = Symbol('singleton')
const singletonEnforcer = Symbol('singletonEnforcer')

export default class NexusPopupController {
  static get instance() {
    if (!this[singleton]) {
      this[singleton] = new NexusPopupController(singletonEnforcer)
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
    popupPM.Init() // to avoid double PR creation, still avoid GetRenderer as Oracle told us
    popupPM.Setup() // to create PR

    this.consts = window.SiebelJS.Dependency('window.SiebelApp.Constants')
    this.isPopupHidden = false
    this.resolvePromise = null
    this.popupApplet = null // it could be removed in the next version
    this.assocApplet = null // it could be removed in the next version

    console.log('[NB] Popup controller started')

    if (!window.SiebelAppFacade.NexusProcessNewPopup) {
      window.SiebelAppFacade.NexusProcessNewPopup =
        window.SiebelApp.S_App.ProcessNewPopup
      window.SiebelApp.S_App.ProcessNewPopup = ps => {
        if (this.isPopupHidden) {
          return this.processNewPopup(ps)
          // this.isPopupHidden = false; // in order to do not affect the next call // it is redundant
        }
        return window.SiebelAppFacade.NexusProcessNewPopup.call(
          window.SiebelApp.S_App,
          ps
        )
      }
    }

    // resolve popup promise
    window.SiebelApp.S_App.GetPopupPM().AddMethod(
      'OnLoadPopupContent',
      this.onLoadPopupContent,
      { sequence: false, scope: this }
    )

    // resolve view promise
    this.viewLoadedResolve = null
    if (!window.SiebelAppFacade.nexusViewLoaded) {
      window.SiebelAppFacade.nexusViewLoaded =
        window.SiebelApp.contentUpdater.viewLoaded
      window.SiebelApp.contentUpdater.viewLoaded = (...args) => {
        const ret = window.SiebelAppFacade.nexusViewLoaded.call(
          window.SiebelApp.contentUpdater,
          ...args
        )
        if (typeof this.viewLoadedResolve === 'function') {
          this.viewLoadedResolve(true)
          // TODO: Check view name and "error loading the content"
          this.viewLoadedResolve = null
        }
        return ret
      }
    }
  }

  onLoadPopupContent() {
    if (typeof this.resolvePromise !== 'function') {
      return
    }

    const {
      applet,
      assocApplet,
      appletName,
      assocAppletName
    } = NexusPopupController.IsPopupOpen()

    if (!applet) {
      this.resolvePromise = null
      throw new Error(
        '[NB] Opened Popup Applet is not found in OnLoadPopupContent'
      )
    }

    if (!window.SiebelAppFacade.NB) {
      console.warn(
        '[NB]The `window.SiebelAppFacade.NB` is empty. Please check if the PR files are deployed.'
      )
    } else {
      // ORW - keep or remove?
      Object.values(window.SiebelAppFacade.NB).forEach(nexus => {
        if (nexus.isPopup) {
          if (assocApplet && nexus.isMvgAssoc) {
            this.assocApplet = nexus
          } else {
            this.popupApplet = nexus
          }
        }
      })
    }

    this.resolvePromise({
      appletName,
      applet,
      assocAppletName,
      assocApplet,
      nexusPopupApplet: this.popupApplet,
      nexusAssocApplet: this.assocApplet
    })
    this.resolvePromise = null
  }

  gotoView(ctx, func, viewName, appletName, id) {
    return new Promise(resolve => {
      this.viewLoadedResolve = resolve
      return func.call(ctx, viewName, appletName, id)
    })
  }

  _createNexusInstance(pm) {
    return new nexusPopupApplet(Object.assign({}, this.settings, { pm }))
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

  closePopupApplet(nb) {
    if (!nb || !nb.pm) {
      if (!this.popupApplet || !this.popupApplet.pm) {
        throw new Error(
          '[NB]The popup applet was not opened by NB and "nb" is not provided'
        )
      }
      nb = this.popupApplet
    }
    // TODO: should be be checked, ensure that CanInvokeMethod does not call server
    if (!nb.pm.ExecuteMethod('CanInvokeMethod', 'CloseApplet')) {
      throw new Error('[NB]The method CloseApplet is not allowed')
    }
    const ret = nb.pm.ExecuteMethod('InvokeMethod', 'CloseApplet')
    // it could be better if we don't have a Siebel Applet on the view
    // do reinit here on closing?
    this.popupApplet = null
    this.assocApplet = null
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
    const { isOpen } = NexusPopupController.IsPopupOpen()
    if (isOpen && closeIfOpen) {
      // this code will close the applet even if this applet was originated by another applet
      console.log(
        '[NB] Closing already opened popup applet in checkOpenedPopup'
      )
      // maybe do not close if the applet to be opened if the same as already opened?
      return this.closePopupApplet()
    }
    return isOpen
  }

  _openAssocApplet(hide, newRecordFunc, cb) {
    this.checkOpenedPopup(true)
    this.isPopupHidden = !!hide

    newRecordFunc() // make async of invokeMethod?

    if (hide) {
      let ret = new Promise(resolve => {
        this.resolvePromise = resolve
      })
      if (typeof cb === 'function') {
        ret = ret.then(cb)
      }
      return ret
    }

    return true
  }

  showPopupApplet(hide, cb, nb, methodName) {
    // TODO: maybe use the properties set on promise resolving?
    this.checkOpenedPopup(true)
    this.isPopupHidden = !!hide

    nb.pm.ExecuteMethod('InvokeMethod', methodName)
    // can call EditField if EditPopup?

    if (hide) {
      // we will populate the instances only when applet should be hidden
      let ret = new Promise(resolve => {
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
