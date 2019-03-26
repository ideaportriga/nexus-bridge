interface N19Config {
  [propName: string]: any
}

interface N19Helper {
  [propName: string]: any
}

const memo: any = {}

const n19Factory = (config: string | N19Config): null | N19Helper => {
  if (config !== null && typeof config === 'object') {
    for (let key in memo) {
      console.log(`N19Helper instance deleted: ${memo[key].appletName}`)
      delete memo[key]
    }

    for (let key in config) {
      const appletName = config[key]
      memo[key] = new (window as any).SiebelAppFacade.N19Helper({
        appletName,
        convertDates: true,
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
