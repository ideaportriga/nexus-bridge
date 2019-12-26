import Nexus from '@ideaportriga/nexus-bridge'
import { NexusBridge, NexusConfig } from './types'

declare const window: any

const memo: Record<string, NexusBridge> = {}

const createApplet = (appletName: string): NexusBridge => {
  const pm = getPM(appletName)

  return new Nexus({
    pm,
    convertDates: true
  })
}

const createPopup = (appletName: string): NexusBridge => {
  const pm = getPM(appletName)
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

const getPM = (appletName: string) => {
  const applet = window.SiebelApp.S_App.GetActiveView().GetApplet(appletName)
  if (!applet) {
    console.log(`[NF] Applet not found: ${appletName}`)
  }

  return applet.GetPModel()
}

const memoizeOnce = (appletName: string, key: string) => {
  const pm = getPM(appletName)
  const isPopup = pm.Get('IsPopup')
  if (isPopup) {
    memo[key] = createPopup(appletName)
  } else {
    memo[key] = createApplet(appletName)
  }
}

const NexusFactory = (config: string | NexusConfig): NexusBridge | null => {
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
      memoizeOnce(config[key], key)

      console.log(`[NF] Nexus instance created: ${memo[key].appletName}`)
    }
  }

  return null
}

export { createApplet, createPopup, NexusFactory }
