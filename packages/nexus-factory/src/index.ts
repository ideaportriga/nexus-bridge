import Nexus from '@ideaportriga/nexus-bridge'
import { NexusBridge, NexusConfig } from './types'

declare const window: any

const memo: Record<string, NexusBridge> = {}

const NexusPopup = (appletName: string, pm: any): NexusBridge => {
  const isPopup = pm.Get('IsPopup')

  // popup applet PM
  const popupPM = window.SiebelApp.S_App.GetPopupPM()

  // if assoc exists
  const assocApplet = popupPM.Get('MVGAssocAppletObject')
  const isShuttle = popupPM.Get('isPopupMVGAssoc')
  const isMvgAssoc =
    isShuttle && assocApplet ? appletName === assocApplet.GetName() : false

  return Nexus.CreatePopupNB({
    pm,
    isPopup,
    isMvgAssoc,
    convertDates: true
  })
}

const NexusFactory = (config: string | NexusConfig): null | NexusBridge => {
  if (typeof config === 'string') {
    const key = config || 'default'

    return memo[key]
  }

  if (typeof config === 'object') {
    for (const key in memo) {
      console.log(`[NF] Nexus instance deleted: ${memo[key].appletName}`)
      delete memo[key]
    }

    for (const key in config) {
      const appletName = config[key]
      const applet = window.SiebelApp.S_App.GetActiveView().GetApplet(
        appletName
      )
      if (!applet) {
        console.log(`[NF] Applet not found: ${appletName}`)
      }

      const pm = applet.GetPModel()
      const isPopup = pm.Get('IsPopup')
      if (isPopup) {
        memo[key] = NexusPopup(appletName, pm)
      } else {
        memo[key] = new Nexus({
          pm,
          convertDates: true
        })
      }

      console.log(`[NF] Nexus instance created: ${memo[key].appletName}`)
    }
  }

  return memo
}

export { NexusBridge, NexusConfig, NexusFactory, NexusPopup }
