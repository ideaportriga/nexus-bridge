import Nexus from '@ipr/nexus-bridge'

declare const window: any

interface NexusConfig {
  [key: string]: string
}

interface NexusBridge {
  [key: string]: any
}

const memo: any = {}

const NexusFactory = (config: string | NexusConfig): null | NexusBridge => {
  if (config !== null && typeof config === 'object') {
    for (const key in memo) {
      console.log(`[NF] Nexus instance deleted: ${memo[key].appletName}`)
      delete memo[key]
    }

    for (const key in config) {
      const appletName = config[key]
      const pm = window.SiebelApp.S_App.GetActiveView()
        .GetApplet(appletName)
        .GetPModel()

      memo[key] = new Nexus({
        pm,
        convertDates: true
      })

      console.log(`[NF] Nexus instance created: ${memo[key].appletName}`)
    }

    return null
  }

  if (typeof config === 'string' && config.length !== 0) {
    const key = config

    return memo[key]
  }

  return null
}

export default NexusFactory
