const memo = {}

const n19Factory = (key = "default", appletName) => {
  memo[key] = memo[key] || new window.SiebelAppFacade.N19Helper({ appletName, convertDates: true })

  return memo[key]
}

export default n19Factory
