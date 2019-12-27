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
  if (!memo[key]) {
    const pm = getPM(appletName)
    const isPopup = pm.Get('IsPopup')
    if (isPopup) {
      memo[key] = createPopup(appletName)
    } else {
      memo[key] = createApplet(appletName)
    }
  }

  return memo[key]
}

const CreatePopup = (config: NexusConfig): NexusBridge => {
  const ret: Record<string, NexusBridge> = {}
  for (const key in config) {
    ret[key] = memoizeOnce(config[key], key)
    console.log(`[NF] Popup Nexus instance created: ${ret[key].appletName}`)
  }

  return ret
}

const ClearPopup = (config: string[]): void => {
  for (const key of config) {
    if (!memo[key]) {
      throw new Error(`[NF] '${key}' is not found among NB instances`)
    }
    console.log(`[NF] Nexus instance deleted: ${memo[key].appletName}`)
    delete memo[key]
  }
}

const NexusFactory = (config: string | NexusConfig): NexusBridge | null => {
  // init factory
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

  // get applet
  if (typeof config === 'string') {
    const key = config || 'default'

    return memo[key]
  }

  return memo
  // return null
}

export { memoizeOnce, NexusFactory, CreatePopup, ClearPopup }
