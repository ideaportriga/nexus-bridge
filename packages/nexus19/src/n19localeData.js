const singleton = Symbol('singleton');
const singletonEnforcer = Symbol('singletonEnforcer');

export default class N19localeData {
  static get instance() {
    if (!this[singleton]) {
      this[singleton] = new N19localeData(singletonEnforcer);
    }
    return this[singleton];
  }

  constructor(enforcer) {
    if (enforcer !== singletonEnforcer) {
      throw new Error('Instantiation failed: get locale data singleton instance instead of new.');
    }
    this.consts = SiebelJS.Dependency('SiebelApp.Constants');
    this.loadLocaleData();
  }

  loadLocaleData() {
    const localeObject = SiebelApp.S_App.LocaleObject;

    this.dateTimeFormat = localeObject.GetProfile(this.consts.get('LOCAL_DATETIME_FORMAT'));
    this.firstDayOfWeek = localeObject.GetWeekStartDay();
    this.dateFormat = localeObject.GetProfile(this.consts.get('LOCAL_DATE_FORMAT'));
    this.is24hoursFormat = !/p$/.test(this.dateTimeFormat);
    this.localCountryPhoneCode = localeObject.GetProfile(this.consts.get('LOCAL_PHONE_COUNTRY'));
    this.currencyDecimal = localeObject.GetDispCurrencyDecimal();
    this.currencySeparator = localeObject.GetDispCurrencySeparator();
    this.numberDecimal = localeObject.GetDispNumberDecimal();
    this.numberSeparator = localeObject.GetDispNumberSeparator();

    this.months = [];
    this.shortMonths = [];
    const months = localeObject.GetData('Month', localeObject.m_spMonthPS);
    for (let i = 1; i <= 12; i += 1) {
      this.months.push(months.GetProperty(`${i}:0`));
      this.shortMonths.push(months.GetProperty(`${i}:1`));
    }

    const weekDays = localeObject.GetData('DayOfWeek', localeObject.m_spDayOfWeekPS);
    this.weekDays = [];
    this.weekDays3 = [];
    this.weekDays1 = [];
    for (let i = 0; i < 7; i += 1) {
      this.weekDays.push(weekDays.GetProperty(`${i}:0`));
      this.weekDays3.push(weekDays.GetProperty(`${i}:1`));
      this.weekDays1.push(weekDays.GetProperty(`${i}:2`));
    }
  }
}
