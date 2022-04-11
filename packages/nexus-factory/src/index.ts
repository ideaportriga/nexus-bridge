import Nexus from '@ideaportriga/nexus-bridge'
import { NexusBridge, NexusConfig } from './types'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const window: any

const memo: Record<string, NexusBridge> = {}

const memoizeOnce = (appletName: string, key: string, settings: Object | null) => {
  if (!memo[key]) {
    console.log(`[NF] Nexus instance created: ${key} - ${appletName}`)

    const applet = window.SiebelApp.S_App.GetActiveView().GetApplet(appletName)
    if (!applet) {
      throw new Error(`[NF] Applet not found: ${appletName}`)
    }
    const pm = applet.GetPModel()
    const isPopup = pm.Get('IsPopup')
    const nexusInitSettings = {
      ...settings,
      pm,
      convertDates: true,
    }
    if (isPopup) {
      memo[key] = Nexus.CreatePopupNB(nexusInitSettings)
    } else {
      memo[key] = new Nexus(nexusInitSettings)
    }
  }

  return memo[key]
}

const createPopup = (config: NexusConfig, settings: Object | null) => {
  for (const key in config) {
    memoizeOnce(config[key], key, settings)
  }
}

const clearPopup = (config: string[]) => {
  for (const key of config) {
    if (!memo[key]) {
      throw new Error(`[NF] '${key}' is not found among NB instances`)
    }
    console.log(`[NF] Nexus instance deleted: ${memo[key].appletName}`)

    delete memo[key]
  }
}

const NexusFactory = (config: string | NexusConfig, settings: Object | null): NexusBridge | null => {
  // init factory
  if (typeof config === 'object') {
    for (const key in memo) {
      console.log(`[NF] Nexus instance deleted: ${memo[key].appletName}`)

      delete memo[key]
    }

    for (const key in config) {
      memoizeOnce(config[key], key, settings)
    }
  }

  // get applet
  if (typeof config === 'string') {
    const key = config

    return memo[key]
  }

  return null
}

export { createPopup, clearPopup, memoizeOnce, NexusFactory }
