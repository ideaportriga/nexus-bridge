const memo = {};

const n19Factory = config => {
  if (config !== null && typeof config === "object") {
    for (const key in memo) {
      console.log(`N19Helper instance deleted...`, memo[key].appletName);
      delete memo[key];
    }

    for (const key in config) {
      const appletName = config[key];
      memo[key] = new window.SiebelAppFacade.N19Helper({
        appletName,
        convertDates: true
      });
      console.log(`N19Helper instance created...`, memo[key].appletName);
    }

    return memo;
  }

  if (typeof config === "string" && config.length !== 0) {
    const key = config;

    return memo[key];
  }

  return null;
};

export default n19Factory;
