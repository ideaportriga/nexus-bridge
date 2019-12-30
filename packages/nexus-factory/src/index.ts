import Nexus from '@ideaportriga/nexus-bridge'
import { NexusBridge, NexusConfig } from './types'

declare const window: any

const memo: Record<string, NexusBridge> = {}

const memoizeOnce = (appletName: string, key: string) => {
  if (!memo[key]) {
    console.log(`[NF] Nexus instance created: ${appletName}`)

    const applet = window.SiebelApp.S_App.GetActiveView().GetApplet(appletName)
    if (!applet) {
      throw new Error(`[NF] Applet not found: ${appletName}`)
    }
    const pm = applet.GetPModel()
    const isPopup = pm.Get('IsPopup')
    if (isPopup) {
      memo[key] = Nexus.CreatePopupNB({
        pm,
        convertDates: true
      })
    } else {
      memo[key] = new Nexus({
        pm,
        convertDates: true
      })
    }
  }
}

const createPopup = (config: NexusConfig) => {
  for (const key in config) {
    memoizeOnce(config[key], key)
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

const NexusFactory = (config: string | NexusConfig): NexusBridge | null => {
  // init factory
  if (typeof config === 'object') {
    for (const key in memo) {
      console.log(`[NF] Nexus instance deleted: ${memo[key].appletName}`)

      delete memo[key]
    }

    for (const key in config) {
      memoizeOnce(config[key], key)
    }
  }

  // get applet
  if (typeof config === 'string') {
    const key = config || 'default'

    return memo[key]
  }

  return null
}

export { createPopup, clearPopup, NexusFactory }
