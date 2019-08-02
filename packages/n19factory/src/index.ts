import Nexus19 from '../../nexus19/src/main'

interface N19Config {
  [propName: string]: any
}

interface N19Helper {
  [propName: string]: any
}

const memo: any = {}

const n19Factory = (config: string | N19Config): null | N19Helper => {
  if (config !== null && typeof config === 'object') {
    for (const key in memo) {
      console.log(`N19Helper instance deleted: ${memo[key].appletName}`)
      delete memo[key]
    }

    for (const key in config) {
      const appletName = config[key]
      memo[key] = new Nexus19({
        appletName,
        convertDates: true,
        returnRawNumbers: true,
        returnRawCurrencies: true,
      })
      console.log(`N19Helper instance created: ${memo[key].appletName}`)
    }

    return null
  }

  if (typeof config === 'string' && config.length !== 0) {
    const key = config

    return memo[key]
  }

  return null
}

export default n19Factory
