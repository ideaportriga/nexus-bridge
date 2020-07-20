const singleton = Symbol('singleton')
const singletonEnforcer = Symbol('singletonEnforcer')

export default class NexusLocaleData {
  static get instance() {
    if (!this[singleton]) {
      this[singleton] = new NexusLocaleData(singletonEnforcer)
    }
    return this[singleton]
  }

  constructor(enforcer) {
    if (enforcer !== singletonEnforcer) {
      throw new Error(
        '[NB] Instantiation failed: get locale data singleton instance instead of new.'
      )
    }
    this.consts = window.SiebelJS.Dependency('window.SiebelApp.Constants')
    this.loadLocaleData()
  }

  loadLocaleData() {
    const localeObject = window.SiebelApp.S_App.LocaleObject

    this.dateTimeFormat = localeObject.GetProfile(
      this.consts.get('LOCAL_DATETIME_FORMAT')
    )
    if (typeof localeObject.GetWeekStartDay === "function") { // for ip13
      this.firstDayOfWeek = localeObject.GetWeekStartDay()
    }
    this.dateFormat = localeObject.GetProfile(
      this.consts.get('LOCAL_DATE_FORMAT')
    )
    this.is24hoursFormat = !/p$/.test(this.dateTimeFormat)
    this.localCountryPhoneCode = localeObject.GetProfile(
      this.consts.get('LOCAL_PHONE_COUNTRY')
    )
    this.currencyDecimal = localeObject.GetDispCurrencyDecimal()
    this.currencySeparator = localeObject.GetDispCurrencySeparator()
    this.numberDecimal = localeObject.GetDispNumberDecimal()
    this.numberSeparator = localeObject.GetDispNumberSeparator()

    this.months = Array.from({ length: 12 }, (el, i) =>
      localeObject.GetMonth(i + 1, false)
    )
    this.shortMonths = Array.from({ length: 12 }, (el, i) =>
      localeObject.GetMonth(i + 1, true)
    )

    this.weekDays = Array.from({ length: 7 }, (el, i) =>
      localeObject.GetDayOfWeek(i, 0)
    )
    this.weekDays3 = Array.from({ length: 7 }, (el, i) =>
      localeObject.GetDayOfWeek(i, 1)
    )
    this.weekDays1 = Array.from({ length: 7 }, (el, i) =>
      localeObject.GetDayOfWeek(i, 2)
    )
  }
}
