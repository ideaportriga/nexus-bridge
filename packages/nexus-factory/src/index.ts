import Nexus from '@ideaportriga/nexus-bridge'
import {NexusConfig, NexusBridge} from './types'

declare const window: any

const memo: any = {}

const NexusFactory = (config: string | NexusConfig): null | NexusBridge => {
  if (config !== null && typeof config === 'object') {
    for (const key in memo) {
      console.log(`[NF] Nexus instance deleted: ${memo[key].appletName}`)
      delete memo[key]
    }

    for (const key in config) {
      const appletName = config[key]
      const applet = window.SiebelApp.S_App.GetActiveView().GetApplet(appletName)
      if (!applet) {
        throw new Error(`[NF] Applet ${appletName} is not found`)
      }
      const pm = applet.GetPModel()

      const isPopup = pm.Get('IsPopup')
      if (isPopup) { // this is a popup applet PM
        const popupPM = window.SiebelApp.S_App.GetPopupPM()
        const isShuttle = popupPM.Get('isPopupMVGAssoc')
        const assocApplet = popupPM.Get('MVGAssocAppletObject') // if assoc exists
        const isMvgAssoc = isShuttle && assocApplet ? appletName === assocApplet.GetName() : false; // it is assoc

        memo[key] = Nexus.CreatePopupNB({
          pm,
          isPopup,
          isMvgAssoc,
          convertDates: true
        })
      } else {
        memo[key] = new Nexus({
          pm,
          convertDates: true
        })
      }

      console.log(`[NF] Nexus instance created: ${memo[key].appletName}`)
    }

    return memo
  }

  if (typeof config === 'string' && config.length !== 0) {
    const key = config

    return memo[key]
  }

  return null
}

export {NexusConfig, NexusBridge, NexusFactory}
