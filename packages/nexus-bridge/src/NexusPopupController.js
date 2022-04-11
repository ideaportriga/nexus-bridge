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

    this.consts = window.SiebelJS.Dependency('window.SiebelApp.Constants')
    this.isPopupHidden = false
    this.resolvePromise = null
    this.popupApplet = null // it could be removed in the next version
    this.assocApplet = null // it could be removed in the next version

    const popupPM = window.SiebelApp.S_App.GetPopupPM()
    // We have to check if PR was not created before to avoid double bindings.
    // Unloaded state check is not sufficient because standalone popups create
    // PR but the state remain unchanged (unloaded by default).
    if (
      popupPM.Get('state') === this.consts.get('POPUP_STATE_UNLOADED') &&
      !popupPM.GetRenderer()
    ) {
      popupPM.Setup() // this creates and initializes PR
    }

    console.log('[NB] Popup controller started')

    if (!window.SiebelAppFacade.NexusProcessNewPopup) {
      window.SiebelAppFacade.NexusProcessNewPopup =
        window.SiebelApp.S_App.ProcessNewPopup
      window.SiebelApp.S_App.ProcessNewPopup = (ps) => {
        if (this.isPopupHidden) {
          this.isPopupHidden = false
          return this.processNewPopup(ps)
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

    // resolve/reject view promise
    this.viewLoadedResolve = null
    this.viewLoadedReject = null
    this.targetViewName = null
    if (!window.SiebelAppFacade.siebelViewLoaded) {
      // TODO: use SiebelApp.contentUpdater.AddCallBack or use refreshview
      window.SiebelAppFacade.siebelViewLoaded =
        window.SiebelApp.contentUpdater.viewLoaded
      window.SiebelApp.contentUpdater.viewLoaded = (...args) => {
        const ret = window.SiebelAppFacade.siebelViewLoaded.call(
          window.SiebelApp.contentUpdater,
          ...args
        )

        const nexusResolveViewNavigation = () => {
          // sometimes the view is not fully initialized after Siebel viewLoaded executed
          if (typeof window.SiebelApp.S_App.GetActiveView().GetName === 'function') {
            if (typeof this.viewLoadedResolve === 'function') {
              const viewName = window.SiebelApp.S_App.GetActiveView().GetName()
              const isCorrectViewName = viewName === this.targetViewName 
              if (isCorrectViewName) {
                this.viewLoadedResolve(true)
              } else if (this.targetViewName && typeof this.viewLoadedReject === 'function') {
                this.viewLoadedReject(`The ${viewName} does not match target ${this.targetViewName} `)
              } else {
                // this is drilldown as this.targetViewName is not defined
                this.viewLoadedResolve(true)
              }
            }
            this.viewLoadedResolve = null
            this.viewLoadedReject = null
            this.targetViewName = null
          } else {
            console.warn(
              `[NB] GetName of ActiveView is not a function in viewLoaded... ${this.targetViewName}`
            )
            setTimeout(() => nexusResolveViewNavigation(), 100)
          }
        }

        nexusResolveViewNavigation()

        return ret
      }
    }

    window.SiebelAppFacade._NBPopupController = this
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
      Object.values(window.SiebelAppFacade.NB).forEach((nexus) => {
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
    return new Promise((resolve, reject) => {
      this.viewLoadedResolve = resolve
      this.viewLoadedReject = reject
      this.targetViewName = viewName
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

    // Clear the currPopups property in order to fill it with nested popup's applets
    popupPM.SetProperty('currPopups', [])

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

  showPopupApplet(hide, cb, nb, methodName, ps) {
    // TODO: maybe use the properties set on promise resolving?
    this.isPopupHidden = !!hide

    // This is a quite common situation when invoked method fails due to some server or
    // validation errors, so popup won't even open in this case.
    const result = nb.pm.ExecuteMethod('InvokeMethod', methodName, ps)

    // can call EditField if EditPopup?

    if (hide) {
      if (false === result) {
        return Promise.reject()
      }

      // we will populate the instances only when applet should be hidden
      let ret = new Promise((resolve) => {
        this.resolvePromise = resolve
      })
      if (typeof cb === 'function') {
        ret = ret.then(cb)
      }
      return ret
    }

    return result
  }

  reInitPopupPM() {
    this.isPopupHidden = false

    const popupPM = window.SiebelApp.S_App.GetPopupPM()

    // First of first we have to delete all props/methods ever created by PM
    // and (that's important!) all bindings attached to them by PR.
    popupPM.EndLife()
    // Props/methods of particular PM are stored inside of BasePM in private
    // variables shared between many PMs. As PM.EndLife just deletes specific
    // key in these variables we have to call PM.constructor to reinitialize
    // these variables with empty prop/method sets for current PM.
    popupPM.constructor({ GetName: () => 'PopupPxy' })
    // Now we can safely allow PM to recreate own props and methods.
    popupPM.Init()
    // Create PR (here new bindings attached to just added PM props/methods)
    popupPM.Setup()

    // This tweak clears all visible/hidden remains inside DOM container that
    // were created by previous PR, and eliminates weird glitches in popups
    // opened by fresh PR first time.
    // Also it "hides" standard (unhidden) popup if it was opened and active
    // just before reInitPopupPM call. It's useful if this popup itself
    // caused navigation to another view.
    popupPM.SetProperty('state', this.consts.get('POPUP_STATE_HIDDEN'))

    // As all PM's method bindings previously were removed we have to readd
    // our handler for OnLoadPopupContent method again.
    popupPM.AddMethod('OnLoadPopupContent', this.onLoadPopupContent, {
      sequence: false,
      scope: this
    })
  }
}
