'use strict';

class N19notifications {
  constructor(pm, consts, fieldToControlMap) {
    let receivedNotifications = [];
    this.token = 0;
    this.subscribers = [];

    pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_BEGIN'), () => {
      receivedNotifications = [];
    });

    pm.AttachNotificationHandler(
      consts.get('SWE_PROP_BC_NOTI_NEW_ACTIVE_ROW'),
      () => {
        receivedNotifications.push('SWE_PROP_BC_NOTI_NEW_ACTIVE_ROW');
      }
    );

    pm.AttachNotificationHandler(
      consts.get('SWE_PROP_BC_NOTI_STATE_CHANGED'),
      propSet => {
        const states = ['cp', 'n'];
        if (!states.includes(propSet.GetProperty('state'))) {
          receivedNotifications.push('SWE_PROP_BC_NOTI_STATE_CHANGED');
        }
      }
    );

    // or SWE_PROP_BC_NOTI_NEW_FIELD_DATA?
    pm.AttachNotificationHandler(
      consts.get('SWE_PROP_BC_NOTI_NEW_DATA_WS'),
      propSet => {
        const fieldName = propSet.GetProperty(consts.get('SWE_PROP_NOTI_FIELD'));
        const control = fieldToControlMap[fieldName];
        if (
          control &&
          control.uiType !== consts.get('SWE_CTRL_MVG')
          // && control.uiType !== consts.get('SWE_CTRL_PICK')
        ) {
          receivedNotifications.push('SWE_PROP_BC_NOTI_NEW_DATA_WS');
        }
      }
    );

    pm.AttachNotificationHandler(
      consts.get('SWE_PROP_BC_NOTI_DELETE_RECORD'),
      () => {
        receivedNotifications.push('SWE_PROP_BC_NOTI_DELETE_RECORD');
      }
    );

    pm.AttachNotificationHandler(
      consts.get('SWE_PROP_BC_NOTI_NEW_RECORD'),
      () => {
        receivedNotifications.push('SWE_PROP_BC_NOTI_NEW_RECORD');
      }
    );

    pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_END'), () => {
      if (receivedNotifications.length > 0) {
        // we assume that the function does not throw an error, so no error handling here
        this.subscribers.forEach(el => el.func());
      }
    });
  }

  subscribe(func) {
    if (typeof func !== 'function') {
      throw new Error('[NB] func is not a function')
    }
    const functionName = func.name;
    if (functionName) {
      // named function, unsubscrie first, and only then subscribe
      this.unsubscribe(functionName);
      this.subscribers.push({ token: functionName, func });
      return functionName
    }
    // function is anonymous, just subscribe
    this.token += 1;
    this.subscribers.push({ token: this.token, func });
    return this.token
  }

  subIndexOf(subToken) {
    return this.subscribers.findIndex(el => el.token === subToken)
  }

  unsubscribe(subToken) {
    const i = this.subIndexOf(subToken);
    if (i > -1) {
      this.subscribers.splice(i, 1);
    }
    return i
  }
}

const singleton = Symbol('singleton');
const singletonEnforcer = Symbol('singletonEnforcer');

class N19localeData {
  static get instance() {
    if (!this[singleton]) {
      this[singleton] = new N19localeData(singletonEnforcer);
    }
    return this[singleton]
  }

  constructor(enforcer) {
    if (enforcer !== singletonEnforcer) {
      throw new Error(
        '[NB] Instantiation failed: get locale data singleton instance instead of new.'
      )
    }
    this.consts = window.SiebelJS.Dependency('window.SiebelApp.Constants');
    this.loadLocaleData();
  }

  loadLocaleData() {
    const localeObject = window.SiebelApp.S_App.LocaleObject;

    this.dateTimeFormat = localeObject.GetProfile(
      this.consts.get('LOCAL_DATETIME_FORMAT')
    );
    this.firstDayOfWeek = localeObject.GetWeekStartDay();
    this.dateFormat = localeObject.GetProfile(
      this.consts.get('LOCAL_DATE_FORMAT')
    );
    this.is24hoursFormat = !/p$/.test(this.dateTimeFormat);
    this.localCountryPhoneCode = localeObject.GetProfile(
      this.consts.get('LOCAL_PHONE_COUNTRY')
    );
    this.currencyDecimal = localeObject.GetDispCurrencyDecimal();
    this.currencySeparator = localeObject.GetDispCurrencySeparator();
    this.numberDecimal = localeObject.GetDispNumberDecimal();
    this.numberSeparator = localeObject.GetDispNumberSeparator();

    this.months = Array.from({ length: 12 }, (el, i) =>
      localeObject.GetMonth(i + 1, false)
    );
    this.shortMonths = Array.from({ length: 12 }, (el, i) =>
      localeObject.GetMonth(i + 1, true)
    );

    this.weekDays = Array.from({ length: 7 }, (el, i) =>
      localeObject.GetDayOfWeek(i, 0)
    );
    this.weekDays3 = Array.from({ length: 7 }, (el, i) =>
      localeObject.GetDayOfWeek(i, 1)
    );
    this.weekDays1 = Array.from({ length: 7 }, (el, i) =>
      localeObject.GetDayOfWeek(i, 2)
    );
  }
}

class N19baseApplet {
  constructor(settings) {
    this.consts = window.SiebelJS.Dependency('window.SiebelApp.Constants')
    ;({
      pm: this.pm,
      convertDates: this.convertDates,
      returnRawNumbers: this.returnRawNumbers,
      returnRawCurrencies: this.returnRawCurrencies,
      isMvgAssoc: this.isMvgAssoc,
      isPopup: this.isPopup
    } = settings);

    this.pm = settings.pm;
    this.convertDates = settings.convertDates;
    this.returnRawNumbers = settings.returnRawNumbers;
    this.returnRawCurrencies = settings.returnRawCurrencies;

    this.view = window.SiebelApp.S_App.GetActiveView();
    this.appletName = this.pm.Get('GetName');
    this.isListApplet = typeof this.pm.Get('GetListOfColumns') !== 'undefined';
    this.required = []; // will be empty for the list applet
    this.lov = {};
    this.boolObject = new window.SiebelApp.S_App.DatumBoolObject();

    this.localeData = N19localeData.instance; // get the instance of locale data object

    this.fieldToControlMap = this._getFieldToControlMap();
    this.notifications = new N19notifications(
      this.pm,
      this.consts,
      this.fieldToControlMap
    );

    // populate the required array for form applets
    if (!this.isListApplet) {
      const appletId = `s_${this.pm.Get('GetFullId')}_div`;
      const applet = document.getElementById(appletId);
      if (applet) {
        const appletInputs = applet.querySelectorAll('input');
        appletInputs.forEach(el => {
          if (el.attributes['aria-required']) {
            this.required.push(el.attributes.name.nodeValue);
          }
        });
      } else {
        console.warn(
          `[NB] Cannot get required controls from HTML. HTML was already removed?/${this.appletName}`
        );
      }
    }

    // listener to get dynamic LOVs
    this.pm.AttachPMBinding(
      'UpdateQuickPickInfo',
      (inputName, b, arr, i) => {
        if (i === 6) {
          // this is a normal flow, could it be 5 as in Bookshelf stated?
          if (this.appletName === arr[2]) {
            if ('false' === arr[4]) {
              console.warn(
                `[NB] Picklist is not associated with the control ${inputName} - ${JSON.stringify(
                  arr
                )}`
              );
            }
            this.lov[inputName] = arr.slice().splice(i);
          }
        } else if (i === 0) {
          // this is a misconfiguration, when getting dynamic LOV is called second+ time?

          console.warn(
            `[NB] It seems the control/list column ${inputName} is incorrectly configured in the Tools.`
          );
          this.lov[inputName] = arr;
        }
      },
      { scope: this }
    );

    this.isTreeApplet =
      window.SiebelAppFacade.ExplorerPresentationModel === this.pm.constructor;
    if (this.isTreeApplet) {
      console.warn(
        `[NB] This is a tree applet ${this.appletName}. Please use list or form applets instead.`
      );
    }
  }

  subscribe(func) {
    // eslint-disable-line class-methods-use-this
    // TODO: accept also context for function, or the caller binds the context to the function?
    return this.notifications.subscribe(func)
  }

  unsubscribe(token) {
    // eslint-disable-line class-methods-use-this
    return this.notifications.unsubscribe(token)
  }

  _getControl(name) {
    return this.pm.ExecuteMethod('GetControl', name)
  }

  _returnControls() {
    // if (this.isListApplet) { // commented to return buttons for list applet
    //  return this.pm.Get('GetListOfColumns');
    // }
    return this.pm.Get('GetControls')
  }

  // called into the getControls to reduce the amount of the returned controls
  _isSkipControl(type) {
    // https://docs.oracle.com/cd/E74890_01/books/ConfigOpenUI/appendix_a_api002.htm
    // maybe we need to exclude more types
    return (
      type === this.consts.get('SWE_CTRL_LINK') ||
      // || (type === this.consts.get('SWE_PST_BUTTON_CTRL'))
      // || (type === this.consts.get('SWE_CTRL_PLAINTEXT')) // KC IM
      type === 'null'
    ) // GetUiType returns string
  }

  _isRequired(inputName) {
    // required is empty for list applets
    // it would be very good to use IsRequired and RequiredControl PM prop
    return this.required.indexOf(inputName) > -1
  }

  _setActiveControl(name) {
    if (name) {
      return this.pm.ExecuteMethod('SetActiveControl', this._getControl(name))
    }
    return this.pm.ExecuteMethod('SetActiveControl', null)
  }

  _isDateTimeControl(uiType) {
    return (
      this.consts.get('SWE_CTRL_DATE_TZ_PICK') === uiType ||
      this.consts.get('SWE_CTRL_DATE_TIME_PICK') === uiType ||
      this.consts.get('SWE_CTRL_DATE_PICK') === uiType
    )
  }

  _getSiebelValue(value, uiType, displayFormat) {
    if (this.consts.get('SWE_CTRL_CHECKBOX') === uiType) {
      // convert true/false => Y/N // null is not handled (the same as in standard Open UI)
      // value = value ? 'Y' : 'N';
      this.boolObject.SetValue(value);
      return this.boolObject.GetAsString()
    }
    if (this.convertDates && displayFormat && this._isDateTimeControl(uiType)) {
      // TODO: check if a valid date is inputted?
      const date = value
        .toLocaleString('en-US', { hour12: false })
        .split(',')
        .join('');
      return window.SiebelApp.S_App.LocaleObject.GetStringFromDateTime(
        date,
        'M/D/YYYY HH:mm:ss',
        displayFormat
      )
    }
    return `${value}` // to implicitly convert to string? Number for currencies/numbers
  }

  canInvokeMethod(method) {
    return this.pm.ExecuteMethod('CanInvokeMethod', method)
  }

  invokeMethod(method) {
    if (!this.canInvokeMethod(method)) {
      return false
    }
    return this.pm.ExecuteMethod('InvokeMethod', method)
  }

  _getCurrencyCodeField(control) {
    // eslint-disable-line class-methods-use-this
    const fieldNumber = control.GetCurrField();
    if (!fieldNumber) {
      throw new Error(
        `[NB] Not found currency field for ${control.GetFieldName()}`
      )
    }
    // check if 0 exists?
    return window.SiebelApp.S_App.LookupStringCache(fieldNumber).split('|')[0]
  }

  static GetPropSet(control) {
    const ret = [];
    const propSet = control.GetPMPropSet();
    if (propSet && propSet.propArray) {
      const { propArray } = propSet;
      Object.keys(propArray).forEach(prop =>
        ret.push({ prop, val: propArray[prop] })
      );
    }
    return ret
  }

  static GetControlStaticLOV(control) {
    return control
      .GetRadioGroupPropSet()
      .childArray.map(el => el.propArray.DisplayName)
      .sort()
  }

  getControls() {
    const controls = {};
    const appletControls = this._returnControls();
    const arr = Object.entries(appletControls);
    arr.forEach(controlEntry => {
      const control = controlEntry[1];
      const uiType = control.GetUIType();
      if (!this._isSkipControl(uiType)) {
        const name = controlEntry[0];
        const inputName = control.GetInputName();
        const fieldName = control.GetFieldName();
        const displayFormat =
          control.GetDisplayFormat() || this.getControlDisplayFormat(uiType);
        const staticPick = control.IsStaticBounded() === '1';
        const dataType = this.pm.ExecuteMethod('GetFieldDataType', fieldName);
        const iconMap = control.GetIconMap();
        const obj = {
          name,
          label: control.GetDisplayName(),
          uiType,
          required: this._isRequired(inputName),
          boundedPick: control.IsBoundedPick() === '1',
          staticPick,
          inputName,
          isPostChanges: control.IsPostChanges(),
          maxSize: control.GetMaxSize(),
          fieldName,
          isLink: this.pm.ExecuteMethod('CanNavigate', name),
          readonly: !this.pm.ExecuteMethod('CanUpdate', name),
          displayFormat,
          dataType,
          isLOV: staticPick || this.consts.get('SWE_CTRL_COMBOBOX') === uiType,
          currencyCodeField:
            'currency' === dataType ? this._getCurrencyCodeField(control) : '',
          popupType: control.GetPopupType(), // always correlate to uiType?
          props: N19baseApplet.GetPropSet(control),
          isSortable: control.IsSortable(),
          iconMap: iconMap
            ? window.SiebelApp.S_App.GetIconMap()[
                window.SiebelApp.S_App.LookupStringCache(iconMap)
              ]
            : null,
          methodName: control.GetMethodName()
        };
        Object.defineProperty(obj, 'readOnly', {
          get: () => {
            console.warn(
              '[NB] The readOnly property will be removed; use readonly instead of it.'
            );
            return obj.readonly
          }
        });
        if (obj.staticPick) {
          // add values to be displayed in the static picklist - 2 properties are deprecated
          Object.defineProperty(obj, 'staticLOV', {
            // TODO: to be removed
            enumerable: true,
            get: () => {
              console.warn(
                '[NB] The staticLOV property will be removed; use options instead of it.'
              );
              return control
                .GetRadioGroupPropSet()
                .childArray.map(el => el.propArray)
            }
          });
          Object.defineProperty(obj, 'lovs', {
            // TODO: to be removed
            enumerable: true,
            get: () => {
              console.warn(
                '[NB] The lovs property will be removed; use options instead of it.'
              );
              return control.GetRadioGroupPropSet().childArray.map(el => ({
                lic: el.propArray.FieldValue,
                val: el.propArray.DisplayName
              }))
            }
          });
          obj.options = N19baseApplet.GetControlStaticLOV(control);
        }
        controls[name] = obj;
      }
    });
    return controls
  }

  getRecordSet(addRecordIndex) {
    // TODO: convert the values?

    const rawRecordSet = this.getRawRecordSet(); // just fallback if record set does not have Id

    const recordSet = this.pm.Get('GetRecordSet').map((el, index) => {
      const ret = Object.assign({}, el); // clone
      if (addRecordIndex) {
        ret._indx = index;
      }
      // when in query mode, recordSet has 1 record, and rawRecordSet has 0 records.
      if (!this.pm.Get('IsInQueryMode')) {
        // not adding Id in Query Mode
        ret.Id = ret.Id || rawRecordSet[index].Id; // add Id if missing
      }
      return ret
    });

    // assumes it is form applet for which GetRecordSet returns not formatted values,
    // so we need to get the formatted values
    if (!this.isListApplet && !this.pm.Get('IsInQueryMode')) {
      const controls = this._returnControls();
      recordSet.forEach((record, index) => {
        const fields = Object.keys(record);
        fields.forEach(field => {
          if (this.fieldToControlMap[field]) {
            const controlName = this.fieldToControlMap[field].name;
            const control = controls[controlName];
            const value = this.pm.ExecuteMethod(
              'GetFormattedFieldValue',
              control
            );
            recordSet[index][field] = value;
          }
        });
      });
    }
    return recordSet
  }

  getRawRecordSet(addRecordIndex) {
    // TODO: convert the values?
    return this.pm.Get('GetRawRecordSet').map((el, index) => {
      const ret = Object.assign({}, el);
      if (addRecordIndex) {
        ret._indx = index;
      }
      return ret
    })
  }

  getRowListRowCount() {
    // how much applet can display (specified in Siebel Tools) - 10/20
    return this.pm.Get('GetRowListRowCount')
  }

  getNumRows() {
    // currently fetched from server?
    return this.pm.Get('GetNumRows')
  }

  getSelection() {
    return this.pm.Get('GetSelection')
  }

  _navigate(method) {
    if (!this.canInvokeMethod(method)) {
      return false
    }
    const ret = this.pm.ExecuteMethod('InvokeMethod', method);
    return ret
  }

  nextRecord() {
    return this._navigate(this.isListApplet ? 'GotoNext' : 'GotoNextSet')
  }

  nextRecordSet() {
    if (!this.isListApplet) {
      return false
    }
    return this._navigate('GotoNextSet')
  }

  positionOnRow(index, keys, skipIfAlreadyPositioned) {
    // TODO: check IsInQueryMode?, as it still could be invoked in query mode (and even works)
    if (!this.isListApplet) {
      throw new Error(
        '[NB] Method PositionOnRow is allowed only for list applets'
      )
    }
    if (!this.pm.ExecuteMethod('CanInvokeMethod', 'PositionOnRow')) {
      throw new Error('[NB] Method PositionOnRow can not be invoked now.')
    }
    if (Number(index) < 0) {
      throw new Error(`[NB] Incorrect index given for positionOnRow - ${index}`)
    }
    if (this.getRowListRowCount() < Number(index) + 1) {
      throw new Error(
        `[NB] ${index} is equal/higher than allowed amount of records - ${this.getRowListRowCount()}.`
      )
    }
    if (this.getNumRows() < Number(index) + 1) {
      throw new Error(
        `[NB] ${index} is equal/higher than displayed amount of records - ${this.getNumRows()}.`
      )
    }
    if (skipIfAlreadyPositioned) {
      // check if already on the same row
      if (Number(index) === this.getSelection()) {
        return true // do not call the server
      }
    }
    // TODO: if we got here, should we check GetActiveControl (applet.prototype.InvokeMethod)
    // and nullify it if active? otherwise if there is an active control, the navigation doesn't happen
    const { ctrlKey, shiftKey } = keys || {};
    // ret will be false if already positioned and !skipIfAlreadyPositioned (no server communications)
    const ret = this.pm.ExecuteMethod(
      'HandleRowSelect',
      index,
      ctrlKey,
      shiftKey
    );
    // Positioning not happened, TODO: Temp solution? just to check if it is going to happen again (combo)
    if (index !== this.getSelection()) {
      throw new Error(
        `positioning not happened - ${index}/${this.getSelection()}`
      )
    }
    return ret
  }

  prevRecord() {
    if (this.isListApplet) {
      return this.positionOnRow(this.pm.Get('GetSelection') - 1)
    }
    return this._navigate('GotoPreviousSet')
  }

  prevRecordSet() {
    if (!this.isListApplet) {
      return false
    }
    return this._navigate('GotoPreviousSet')
  }

  newRecord(cb) {
    const promise = new Promise(resolve => this._newRecord(resolve));
    return typeof cb === 'function' ? promise.then(cb) : promise
  }

  _newRecord(cb) {
    // 20190312 - changed from NewRecord to CreateRecord, #31
    return this.pm.ExecuteMethod('InvokeMethod', 'CreateRecord', null, {
      async: true,
      cb
    })
  }

  newRecordSync() {
    // 20190312 - changed from NewRecord to CreateRecord, #
    // if there is some configuration (e.g. server script) that works for NewRecord, it will not be invoked
    // workaround call the NewRecord explicitly
    return this.pm.ExecuteMethod('InvokeMethod', 'CreateRecord')
  }

  writeRecord(cb, cberr) {
    let promise = new Promise((resolve, reject) =>
      this._writeRecord((...args) => {
        if (args[2].GetProperty('Status') === 'Completed') {
          resolve();
        } else {
          reject();
        }
      })
    );
    promise = typeof cb === 'function' ? promise.then(cb) : promise;
    promise = typeof cberr === 'function' ? promise.catch(cberr) : promise;
    return promise
  }

  _writeRecord(cb) {
    return this.pm.ExecuteMethod('InvokeMethod', 'WriteRecord', null, {
      async: true,
      // selfbusy: true,
      cb
    })
  }

  writeRecordSync() {
    return this.pm.ExecuteMethod('InvokeMethod', 'WriteRecord')
  }

  deleteRecordSync(skipConfirmDialog) {
    if (skipConfirmDialog) {
      this.N19Confirm = window.SiebelApp.Utils.Confirm;
      window.SiebelApp.Utils.Confirm = () => {};
    }
    // do we need to try..catch and restore the function in catch ?
    const ret = this.pm.ExecuteMethod('InvokeMethod', 'DeleteRecord');
    if (skipConfirmDialog) {
      window.SiebelApp.Utils.Confirm = this.N19Confirm;
    }
    return ret
  }

  undoRecordSync() {
    return this.pm.ExecuteMethod('InvokeMethod', 'UndoRecord')
  }

  setControlValue(name, value) {
    // TODO: If value is null, nothing happens, should we convert null to ''?
    const control = this._getControl(name);
    if (!control) {
      throw new Error(
        `[NB] Cannot find a control by name ${name} to set ${value}.`
      )
    }
    const uiType = control.GetUIType();
    const displayFormat =
      control.GetDisplayFormat() || this.getControlDisplayFormat(uiType);
    // eslint-disable-next-line no-param-reassign
    value = this._getSiebelValue(value, uiType, displayFormat);
    // TODO: should we use SetCellValue for list applets?
    const ret = this._setControlValueInternal(control, value);
    if (!ret) {
      console.log(`[NB] Value ${value} was not set for ${name} control`);
    }
    return ret
  }

  // experimental method, still safer to use setContolVaue
  // not described in wiki
  // could be removed in the next version
  _setControlValue(name, value) {
    const control = this._getControl(name);
    if (!control) {
      throw new Error(
        `[NB] Cannot find a control by name ${name} to set ${value}.`
      )
    }
    const uiType = control.GetUIType();
    const isPostChanges = control.IsPostChanges();
    const displayFormat =
      control.GetDisplayFormat() || this.getControlDisplayFormat(uiType);
    // eslint-disable-next-line no-param-reassign
    value = this._getSiebelValue(value, uiType, displayFormat);
    let ret = this._setControlValueInternal(control, value);
    if (!ret) {
      console.log(`Value ${value} was not set for ${name} control`);
      return ret
    }
    ret = this.getCurrentRecordModel();
    // TODO: do we need to check the state, or can we assume that we always have a record?
    if (!isPostChanges) {
      Object.keys(ret.controls).forEach(con => {
        if (ret.controls[con].name && !ret.controls[con].isPostChanges) {
          // TODO: NB+ HERE ENSURE WE ALWAYS RETURN THE NOT FORMATTED WHEN NEEDED!!!
          const setValue = this.pm.ExecuteMethod(
            'GetFormattedFieldValue',
            this._getControl(con)
          );
          ret.controls[con].value = this._getJSValue(
            setValue,
            ret.controls[con]
          );
        }
      });
    }
    return ret
  }

  _setControlValueInternal(control, value) {
    // should it be PHYEVENT_COLUMN_FOCUS/PHYEVENT_COLUMN_BLUR for list applet
    this.pm.OnControlEvent(this.consts.get('PHYEVENT_CONTROL_FOCUS'), control);
    return this.pm.OnControlEvent(
      this.consts.get('PHYEVENT_CONTROL_BLUR'),
      control,
      value
    )
  }

  _validatePickControl(control, staticPick) {
    // Possible results:
    // no pick
    // static pick
    // dynamic pick
    // pick
    // mvg
    // ?

    const isStaticPick = this.isStatic(control);
    const uiType = control.GetUIType();

    if (staticPick) {
      // static
      if (!isStaticPick) {
        console.warn(
          `[NB]It seems the getStaticLOV called for not static control ${control.GetName()} - ${uiType}.`
        );
      }
    } else {
      // dynamic
      if (isStaticPick) {
        console.warn(
          `[NB]It seems the getDynamicLOV called for static control ${control.GetName()}.`
        );
      }
      if (this.consts.get('SWE_CTRL_COMBOBOX') !== uiType) {
        // the control is not "JComboBox"
        switch (uiType) {
          case this.consts.get('SWE_CTRL_PICK'): // Pick
          case this.consts.get('SWE_CTRL_MVG'): // MVG
            console.warn(
              `[NB]You need to use the popups instead of getDynamicLOV - ${uiType}/${control.GetName()}.`
            );
            break
          default:
            console.warn(
              `[NB]Maybe getDynamicLOV won't work for this control - ${uiType}/${control.GetName()}.`
            );
        }
      }
    }
  }

  isStatic(control) {
    // eslint-disable-line class-methods-use-this
    return '1' === control.IsStaticBounded()
  }

  isDynamic(control) {
    return (
      !this.isStatic(control) &&
      this.consts.get('SWE_CTRL_COMBOBOX') === control.GetUIType()
    )
  }

  _getControlDynamicLOV(control) {
    const controlInputName = control.GetInputName();
    this.lov[controlInputName] = {};
    const ps = window.SiebelApp.S_App.NewPropertySet();
    ps.SetProperty('SWEField', controlInputName);
    ps.SetProperty('SWEJI', false);
    this._setActiveControl(null); // to prevent UpdatePick
    this.pm.ExecuteMethod('InvokeMethod', 'GetQuickPickInfo', ps);
    return this.lov[controlInputName]
  }

  getLOV(controlName) {
    const control = this._getControl(controlName);
    if (this.isStatic(control)) {
      return N19baseApplet.GetControlStaticLOV(control)
    }
    if (!this.isDynamic(control)) {
      // Take the dynamic path in the hope that it will work

      console.warn(
        `[NB]It seems ${controlName} is not properly configured in the Tools or not a picklist.`
      );
    }
    return this._getControlDynamicLOV(control)
  }

  getDynamicLOV(controlName) {
    const control = this._getControl(controlName);
    this._validatePickControl(control, false);
    return this._getControlDynamicLOV(control)
  }

  getStaticLOV(controlName) {
    const control = this._getControl(controlName);
    this._validatePickControl(control, true);
    return N19baseApplet.GetControlStaticLOV(control)
  }

  _getJSValue(value, { uiType, dataType, displayFormat, currencyCode }) {
    if (this.consts.get('SWE_CTRL_CHECKBOX') === uiType) {
      // convert Y/N/null -> true/false // null comes as false?
      this.boolObject.SetAsString(value);
      return this.boolObject.GetValue()
    }
    if (this.convertDates && displayFormat && this._isDateTimeControl(uiType)) {
      if (value === '') {
        return null
      }
      // assuming that form applet returns not formatted values
      const ISO = window.SiebelApp.S_App.LocaleObject.GetStringFromDateTime(
        value,
        displayFormat,
        this.consts.get('ISO8601_DATETIME_FORMAT')
      );
      if (ISO === '') {
        throw new Error(
          `[NB] ISO value is empty after converting ${value}/${displayFormat}`
        )
      }
      return new Date(ISO)
    }
    if (this.returnRawNumbers && 'number' === dataType) {
      // it is already not formatted on form applet, so only for list applet
      return window.SiebelApp.S_App.LocaleObject.FormattedToString(
        dataType,
        value,
        displayFormat
      )
    }
    if (this.returnRawCurrencies && 'currency' === dataType && currencyCode) {
      // it is already not formatted on form applet, so only for list applet
      window.SiebelApp.S_App.LocaleObject.SetCurrencyCode(currencyCode); // TODO: do we need to restore the m_sCurrencyCode?
      return window.SiebelApp.S_App.LocaleObject.FormattedToString(
        dataType,
        value,
        displayFormat
      )
    }
    return value
  }

  getCurrentRecord(raw) {
    // TODO: need conversion?
    // TODO: check if there is a record
    const index = this.getSelection();
    // TODO: make a copy of returned object?
    if (raw) {
      return this.getRawRecordSet()[index]
    }
    return this.getRecordSet()[index]
  }

  calculateCurrentRecordState() {
    // 0 - No records displayed
    // 1 - Record is being created
    // 2 - Record is being edited
    // 3 - Is in query mode
    // 4 - Record is displayed,
    // 5 - Record is read-only

    const bc = this.pm.Get('GetBusComp');

    if (this.pm.Get('IsInQueryMode')) {
      // if no records and the entered the query mode,
      // selection is -1, therefore we need to check query mode first
      return 3
    }
    if (this.getSelection() < 0) {
      return 0
    }
    if (bc.IsInsertPending()) {
      // or insertPending property
      return 1
    }
    if (bc.IsCommitPending()) {
      // bc.commitPending or this.pm.GetStateUIMap().CommitPending
      return 2
    }
    if (!this.canInvokeMethod('WriteRecord')) {
      // or use the canUpdate property of the BC?
      return 5
    }

    return 4 // this is a default fallback;
  }

  _getMethods() {
    const methods = {};
    const appletControls = this.pm.Get('GetControls'); // even for list applet
    const arr = Object.entries(appletControls);
    arr.forEach(controlEntry => {
      const controlMethod = controlEntry[1].GetMethodName();
      if (typeof controlMethod !== 'undefined' && controlMethod !== '') {
        methods[controlMethod] = {};
      }
    });
    return methods
  }

  getControlDisplayFormat(uiType) {
    switch (uiType) {
      case this.consts.get('SWE_CTRL_DATE_TZ_PICK'):
      case this.consts.get('SWE_CTRL_DATE_TIME_PICK'):
        return this.localeData.dateTimeFormat
      case this.consts.get('SWE_CTRL_DATE_PICK'):
        return this.localeData.dateFormat
      default:
        return ''
    }
  }

  getCurrentRecordModel(_controls, _methods) {
    if (!_controls) {
      _controls = this.getControls(); // eslint-disable-line no-param-reassign
    }
    _controls.state = this.calculateCurrentRecordState(); // eslint-disable-line no-param-reassign
    _controls.id = ''; // eslint-disable-line no-param-reassign
    let obj = {};
    const index = this.getSelection();
    const rawRecordSet = this.getRawRecordSet();
    if (index > -1) {
      // added _controls.state !== 3; we don't need id in query mode
      obj = this.getRecordSet()[index];
      _controls.id = rawRecordSet[index].Id; // eslint-disable-line no-param-reassign
    }
    const appletControls = this._returnControls();
    // populate controls
    Object.keys(_controls).forEach(controlName => {
      let ret = {};
      const control = appletControls[controlName];
      if (typeof control !== 'undefined') {
        // just if somebody sends incorrect name of the control
        const fieldName = control.GetFieldName();
        const uiType = control.GetUIType();
        const displayFormat =
          control.GetDisplayFormat() || this.getControlDisplayFormat(uiType);
        const staticPick = control.IsStaticBounded() === '1';
        const dataType = this.pm.ExecuteMethod('GetFieldDataType', fieldName);
        const iconMap = control.GetIconMap();
        let currencyCodeField = '';
        let currencyCode = '';
        if ('currency' === dataType) {
          currencyCodeField = this._getCurrencyCodeField(control);
          if (currencyCodeField && index > -1 && rawRecordSet[index]) {
            currencyCode = rawRecordSet[index][currencyCodeField];
          }
        }
        if (_controls.id && _controls.state !== 3) {
          ret = {
            value: this._getJSValue(obj[fieldName], {
              uiType,
              dataType,
              displayFormat,
              currencyCode
            }),
            readonly: !this.pm.ExecuteMethod('CanUpdate', controlName),
            isLink: this.pm.ExecuteMethod('CanNavigate', controlName)
          };
        } else {
          // no record displayed or in query mode
          ret = {
            value: '',
            readonly: _controls.state !== 3, // should be edittable in query mode
            isLink: false
          };
        }
        _controls[controlName] = Object.assign(ret, {
          // eslint-disable-line no-param-reassign
          uiType,
          label: control.GetDisplayName(),
          isPostChanges: control.IsPostChanges(),
          required: this._isRequired(control.GetInputName()),
          maxSize: control.GetMaxSize(),
          fieldName,
          displayFormat,
          isLOV: staticPick || this.consts.get('SWE_CTRL_COMBOBOX') === uiType,
          dataType,
          currencyCodeField,
          currencyCode,
          name: controlName,
          iconMap: iconMap
            ? window.SiebelApp.S_App.GetIconMap()[
                window.SiebelApp.S_App.LookupStringCache(iconMap)
              ]
            : null
        });
      }
    });
    if (!_controls.Id) {
      _controls.Id = {
        // eslint-disable-line no-param-reassign
        value: _controls.state !== 3 ? _controls.id : ''
      };
    }
    // populate methods
    if (!_methods) {
      // Is it better to use applet.GetCanInvokeArray?
      _methods = this._getMethods(); // eslint-disable-line no-param-reassign
    }
    // eslint-disable-next-line no-param-reassign
    Object.keys(_methods).forEach(methodName => {
      _methods[methodName] = this.canInvokeMethod(methodName);
    });
    return {
      controls: _controls,
      methods: _methods
    }
  }

  _findControlToEnterSearchExpr() {
    const appletControls = this._returnControls();
    const arr = Object.values(appletControls);
    const found = arr.find(control => {
      const controlUiType = control.GetUIType();
      const controlName = control.GetName();
      if (!this._isSkipControl(controlUiType)) {
        // skipping also checkbox, plaintext, button, and label
        let ret =
          controlUiType !== this.consts.get('SWE_CTRL_CHECKBOX') &&
          controlUiType !== this.consts.get('SWE_PST_BUTTON_CTRL') &&
          controlUiType !== this.consts.get('SWE_CTRL_PLAINTEXT') &&
          controlUiType !== this.consts.get('SWE_CTRL_LABEL');

        // maybe it would be better for list applets take only columns as it was before?
        ret =
          ret &&
          ![
            'PopupQueryCombobox',
            'PopupQuerySrchspec',
            'QueryComboBox',
            'QuerySrchSpec'
          ].includes(controlName);
        return ret
      }
      return false
    });
    return found
  }

  _newQuery() {
    return this.pm.ExecuteMethod('InvokeMethod', 'NewQuery')
  }

  queryBySearchExprSync(expr) {
    this._newQuery(); // check or optionally skip?
    const control = this._findControlToEnterSearchExpr();
    this._setControlValueInternal(control, expr);
    this.pm.ExecuteMethod('InvokeMethod', 'ExecuteQuery');
    return this.getRecordSet().length
  }

  queryByIdSync(rowId) {
    let expr;
    if (Array.isArray(rowId)) {
      expr = rowId.map(el => `Id="${el}"`).join(' OR ');
    } else {
      expr = `Id="${rowId}"`;
    }
    return this.queryBySearchExprSync(expr)
  }

  queryById(rowId, cb) {
    const promise = new Promise(resolve => this._queryById(rowId, resolve));
    const ret = promise.then(() => this.getRecordSet().length);
    return typeof cb === 'function' ? ret.then(cb) : ret
  }

  _queryById(rowId, cb) {
    this._newQuery(); // check or optionally skip?

    const ai = {
      scope: this,
      async: true,
      selfbusy: true
    };
    if (typeof cb === 'function') {
      ai.cb = cb;
    }

    const control = this._findControlToEnterSearchExpr();
    this._setControlValueInternal(control, `Id="${rowId}"`);
    return this.pm.ExecuteMethod('InvokeMethod', 'ExecuteQuery', null, ai)
  }

  query(params, cb) {
    const promise = new Promise(resolve => this._query(params, resolve));
    const ret = promise.then(() => this.getRecordSet().length);
    return typeof cb === 'function' ? ret.then(cb) : ret
  }

  _query(params, cb) {
    // TODO: check if it is already in query mode to avoid calling the new query again
    // or accept the input parameter to skip calling the new query?
    // or maybe better to cancel the existing query?
    this._newQuery();

    const ai = {
      scope: this,
      async: true,
      selfbusy: true
    };
    if (typeof cb === 'function') {
      ai.cb = cb;
    }

    const _controls = this._returnControls();
    const arr = Object.keys(params);
    arr.forEach(controlName => {
      const control = _controls[controlName];
      if (control) {
        this._setControlValueInternal(
          control,
          this._getSiebelValue(params[controlName], control.GetUIType())
        );
      } else {
        console.error(`[NB] The control "${controlName}" is not found`);
      }
    });

    return this.pm.ExecuteMethod('InvokeMethod', 'ExecuteQuery', null, ai)
  }

  static Requery(name) {
    const service = window.SiebelApp.S_App.GetService('N19 BS');
    if (service) {
      const inPropSet = window.SiebelApp.S_App.NewPropertySet();
      inPropSet.SetProperty('name', name);
      service.InvokeMethod('Requery', inPropSet, {});
    }
  }

  static Refresh(name) {
    const service = window.SiebelApp.S_App.GetService('N19 BS');
    if (service) {
      const inPropSet = window.SiebelApp.S_App.NewPropertySet();
      inPropSet.SetProperty('name', name);
      service.InvokeMethod('Refresh', inPropSet, {});
    }
  }

  getMVF(ids, fields, useActiveBO) {
    return new Promise((resolve, reject) =>
      this._getMVF(ids, fields, useActiveBO, resolve, reject)
    )
  }

  _getFieldNameForControl(controlName) {
    const control = this._getControl(controlName);
    // if not found, the input value is returned
    if (control) {
      return control.GetFieldName()
    }
    return controlName // fallback - just in case we got the field name
  }

  _getMVF(ids, fields, useActiveBO, resolve, reject) {
    const arr = Object.entries(fields);
    const psInputs = window.SiebelApp.S_App.NewPropertySet();
    psInputs.SetProperty(
      'BO',
      window.SiebelApp.S_App.GetActiveBusObj().GetName()
    );
    psInputs.SetProperty('BC', this.pm.Get('GetBusComp').GetName());
    psInputs.SetProperty('UseActiveBO', useActiveBO ? 'Y' : 'N');
    psInputs.SetProperty('ID', ids.join(','));
    arr.forEach(el => {
      const ps = window.SiebelApp.S_App.NewPropertySet();
      ps.SetType(this._getFieldNameForControl(el[0]));
      ps.SetProperty('Fields', el[1].join(','));
      psInputs.AddChild(ps.Clone());
    });
    const bs = window.SiebelApp.S_App.GetService('N19 BS');
    const ai = {
      async: true,
      selfbusy: true,
      scope: this,
      errcb: () => {
        reject();
      },
      cb: (methodName, Inputs, psOutputs) => {
        const ret = {};
        const { childArray } = psOutputs.GetChildByType('ResultSet') || {} // to be safe when no results
        ;(childArray || []).forEach(child => {
          ret[child.GetType()] = {};
          child.childArray.forEach(grandChild => {
            ret[child.GetType()][
              grandChild.GetType()
            ] = grandChild.childArray.map(rec => {
              const primary = rec.propArray['SSA Primary Field'];
              this.boolObject.SetAsString(primary);
              rec.propArray['SSA Primary Field'] = this.boolObject.GetValue(); // eslint-disable-line no-param-reassign
              return Object.assign({}, rec.propArray)
            });
          });
        });
        resolve(ret);
      }
    };
    return bs.InvokeMethod('ReturnMVGFields', psInputs, ai)
  }

  savePref(name, value) {
    // value is a string, and bound to applet and view
    const psInput = window.SiebelApp.S_App.NewPropertySet();
    psInput.SetProperty('Key', name);
    psInput.SetProperty(name, value);
    this.pm.OnControlEvent(
      this.consts.get('PHYEVENT_INVOKE_CONTROL'),
      this.pm.Get(this.consts.get('SWE_MTHD_UPDATE_USER_PREF')),
      psInput
    );
    return this.pm.SetProperty(name, value)
  }

  readPref(name) {
    return this.pm.Get(name)
  }

  _retrieveData(amount) {
    // could be removed in the next version
    // it starts from the current position
    if (!this.isListApplet) {
      return false
    }

    const data = new Map();
    const allRecords = amount === 0;

    while (data.size < amount || allRecords) {
      const arr = this.getRawRecordSet();

      // avoid the duplicates
      arr.forEach(el => data.set(el.Id, el));

      // we are using canInvokeMethod, as in 16.0 nextRecordSet always returns undefined
      if (!this.canInvokeMethod('GotoNextSet')) {
        break
      }

      this.nextRecordSet();
    }

    return {
      data: [...data.values()],
      hasNext: this.canInvokeMethod('GotoNextSet')
    }
  }

  // this is also called from the the demo where Siebel and custom rendered applet coexist
  _getFieldToControlMap(_controls) {
    // list applet has the GetColumnsByFieldName that could be used for that purpose
    const ret = {};
    const appletControls = this._returnControls();
    const arr = Object.keys(_controls || appletControls);
    arr.forEach(controlName => {
      const control = appletControls[controlName];
      if (typeof control !== 'undefined') {
        // just in case somebody gave the incorrect control name
        const fieldName = control.GetFieldName();
        if (fieldName) {
          const uiType = control.GetUIType();
          const dataType = this.pm.ExecuteMethod('GetFieldDataType', fieldName);
          ret[fieldName] = {
            name: controlName,
            isPostChanges: control.IsPostChanges(),
            uiType,
            displayFormat:
              control.GetDisplayFormat() ||
              this.getControlDisplayFormat(uiType),
            dataType,
            currencyCodeField:
              'currency' === dataType ? this._getCurrencyCodeField(control) : ''
          };
        }
      }
    });
    return ret
  }

  getControlsRecordSet(addRecordIndex) {
    // used slice to avoid modification of the record set
    const ret = this.getRecordSet(addRecordIndex);
    const rawRecordSet = this.getRawRecordSet(); // TODO: Analyze IsInQueryMode before applying?

    for (let i = 0, len = ret.length; i < len; i += 1) {
      const obj = { Id: ret[i].Id };
      if (addRecordIndex) {
        obj._indx = ret[i]._indx;
      }
      ret[i] = Object.assign(
        obj,
        Object.keys(ret[i])
          .filter(el => this.fieldToControlMap[el])
          .reduce(
            (acc, el) => ({
              ...acc,
              ...{
                [this.fieldToControlMap[el].name]: this._getJSValue(
                  ret[i][el],
                  {
                    uiType: this.fieldToControlMap[el].uiType,
                    dataType: this.fieldToControlMap[el].dataType,
                    displayFormat: this.fieldToControlMap[el].displayFormat,
                    currencyCode:
                      rawRecordSet[i] &&
                      rawRecordSet[i][
                        this.fieldToControlMap[el].currencyCodeField
                      ]
                  }
                )
              }
            }),
            {}
          )
      );
    }

    return ret
  }

  sort(controlName, isAscending) {
    // TODO: check if dataset is sortable? e.g. not in query or in insert mode?
    // TODO: check if we can sort by this control?
    if (this.isListApplet) {
      const sortOrder = isAscending
        ? this.consts.get('SORT_ASCENDING')
        : this.consts.get('SORT_DESCENDING');
      this.pm.ExecuteMethod('OnClickSort', controlName, sortOrder);
      return true
    }
    return false
  }

  getPaginationInfo() {
    const start = this.pm.ExecuteMethod('GetWSStartRowNum');
    return {
      start,
      end: this.pm.Get('GetWSEndRowNum'),
      total: this.getNumRows(),
      hasMore: !this.pm.Get('IsNumRowsKnown'),
      current: this.getSelection() + start
    }
  }
}

class N19popupApplet extends N19baseApplet {
  constructor(settings) {
    super(settings);
    console.log('[NB] Popup applet started');
  }

  pickRecord() {
    return this.pm.ExecuteMethod('InvokeMethod', 'PickRecord')
  }

  deleteRecords(cb) {
    // method is not allowed to delete the primary for visibility MVG
    //  in this case it returns "Method DeleteRecords is not allowed here" SBL-UIF-00348
    const ret = this.pm.ExecuteMethod('InvokeMethod', 'DeleteRecords');
    if (typeof cb === 'function') {
      cb();
    }
    return ret
  }

  deleteAllRecords(cb) {
    // method is not deleting the primary for visibility MVG(!) and still returns true
    const ret = this.pm.ExecuteMethod('InvokeMethod', 'DeleteAllRecords');
    if (typeof cb === 'function') {
      cb();
    }
    return ret
  }

  addRecords(cb) {
    const ret = this.pm.ExecuteMethod('InvokeMethod', 'AddRecords');
    if (typeof cb === 'function') {
      cb();
    }
    return ret
  }

  addAllRecords(cb) {
    const ret = this.pm.ExecuteMethod('InvokeMethod', 'AddAllRecords');
    if (typeof cb === 'function') {
      cb();
    }
    return ret
  }

  _firstRecord() {
    // temp method, assumes that no scrolling happened
    if (this.isListApplet) {
      if (this.getSelection() !== 0) {
        return this.positionOnRow(0)
      }
      return true
    }
    return false
  }
}

const singleton$1 = Symbol('singleton');
const singletonEnforcer$1 = Symbol('singletonEnforcer');

class N19popupController {
  static get instance() {
    if (!this[singleton$1]) {
      this[singleton$1] = new N19popupController(singletonEnforcer$1);
    }
    return this[singleton$1]
  }

  constructor(enforcer) {
    if (enforcer !== singletonEnforcer$1) {
      throw new Error(
        '[NB] Instantiation failed: get popup controller instance instead of new'
      )
    }

    const popupPM = window.SiebelApp.S_App.GetPopupPM();
    popupPM.Setup(); // to create PR

    this.consts = window.SiebelJS.Dependency('window.SiebelApp.Constants');
    this.isPopupHidden = false;
    this.resolvePromise = null;
    this.popupAppletN19 = null; // it could be removed in the next version
    this.assocAppletN19 = null; // it could be removed in the next version

    console.log('[NB] Popup controller started');

    // it will be a singleton, so there is no cleanup
    this.N19processNewPopup = window.SiebelApp.S_App.ProcessNewPopup;
    window.SiebelApp.S_App.ProcessNewPopup = ps => {
      let ret;
      if (this.isPopupHidden) {
        ret = this.processNewPopup(ps);
        // this.isPopupHidden = false; // in order to do not affect the next call // it is redundant
      } else {
        ret = this.N19processNewPopup.call(window.SiebelApp.S_App, ps);
      }
      return ret
    };

    // TODO: REFACTORE IT
    window.SiebelApp.S_App.GetPopupPM().AddMethod(
      'OnLoadPopupContent',
      () => {
        if (typeof this.resolvePromise === 'function') {
          const { applet, assocApplet } = N19popupController.IsPopupOpen();
          if (!applet) {
            this.resolvePromise = null; // how do we do error handling
            throw new Error(
              '[NB] Open Popup Applet is not found in OnLoadPopupContent resolving Promise'
            )
          }

          const arr = Object.values(window.SiebelAppFacade.NB);
          for (let i = 0; i < arr.length; i += 1) {
            if (arr[i].isPopup) {
              // this is popup
              if (assocApplet && arr[i].isMvgAssoc) {
                this.assocAppletN19 = arr[i];
              } else {
                this.popupAppletN19 = arr[i];
              }
            }
          }

          // TODO: check if found in window.SiebelAppFacade.NB!!

          const obj = {
            appletName: this.popupAppletN19.appletName,
            popupAppletN19: this.popupAppletN19
          };

          if (assocApplet) {
            // shuttle
            obj.assocAppletN19 = this.assocAppletN19;

            obj.availableRecordSet = this.assocAppletN19.getControlsRecordSet();
            obj.selectedRecordSet = this.popupAppletN19.getControlsRecordSet();
          } else {
            // assoc only OR pick
            obj.availableRecordSet = this.popupAppletN19.getControlsRecordSet();
          }

          this.resolvePromise(obj);
          this.resolvePromise = null;
        }
      },
      { sequence: false }
    );

    this.viewLoadedResolve = null;
    this.N19viewLoaded = window.SiebelApp.contentUpdater.viewLoaded;
    window.SiebelApp.contentUpdater.viewLoaded = (...args) => {
      const ret = this.N19viewLoaded.call(
        window.SiebelApp.contentUpdater,
        ...args
      );
      if (typeof this.viewLoadedResolve === 'function') {
        this.viewLoadedResolve(true);
        // TODO: Check view name to be safe??
        this.viewLoadedResolve = null;
      }
      return ret
    };
  }

  gotoView(viewName, appletName, id) {
    return new Promise(resolve => {
      this.viewLoadedResolve = resolve;
      if (appletName && id) {
        let SWECmd = `GotoView&SWEView=${viewName}&SWEApplet0=${appletName}`;
        SWECmd += `&SWEBU=1&SWEKeepContext=FALSE&SWERowId0=${id}`;
        SWECmd = encodeURI(SWECmd);
        window.SiebelApp.S_App.GotoView(viewName, '', SWECmd, '');
      } else {
        window.SiebelApp.S_App.GotoView(viewName);
      }
    })
  }

  _createNexusInstance(pm) {
    return new N19popupApplet(Object.assign({}, this.settings, { pm }))
  }

  canOpenPopup() {
    return typeof this.resolvePromise !== 'function'
  }

  processNewPopup(ps) {
    const popupPM = window.SiebelApp.S_App.GetPopupPM();

    // this property is added using AttachPMBinding into the Init PR (called by PM Setup)
    popupPM.AddProperty('state', this.consts.get('POPUP_STATE_VISIBLE'));

    let url = ps.GetProperty('URL');
    if (url.indexOf('start.swe') > -1) {
      // pre 17
      url = window.SiebelApp.S_App.GetPageURL() + url.split('start.swe')[1];
    } else {
      // assuming 17+
      url =
        window.SiebelApp.S_App.GetPageURL() +
        url.split(window.SiebelApp.S_App.GetAppExtension())[1];
    }
    popupPM.SetProperty('url', url);

    return 'refreshpopup'
  }

  closePopupApplet() {
    if (!this.popupAppletN19 || !this.popupAppletN19.pm) {
      throw new Error('[NB] The popup applet was not opened by NB')
    }
    if (
      !this.popupAppletN19.pm.ExecuteMethod('CanInvokeMethod', 'CloseApplet')
    ) {
      throw new Error('[NB] The method CloseApplet is not allowed')
    }
    const ret = this.popupAppletN19.pm.ExecuteMethod(
      'InvokeMethod',
      'CloseApplet'
    );
    // it could be better if we don't have a Siebel Applet on the view
    // do reinit here on closing?
    this.popupAppletN19 = null;
    this.assocAppletN19 = null;
    return ret
  }

  static IsPopupOpen() {
    // safer to keep this method, even when we set some properties on resolve?
    const currPopups = window.SiebelApp.S_App.GetPopupPM().Get('currPopups');
    if (0 === currPopups.length) {
      return { isOpen: false }
    }
    if (1 === currPopups.length) {
      return { isOpen: true, applet: currPopups[0] }
    }
    if (2 === currPopups.length) {
      // is this always a shuttle when we have more one applet
      // OpenUI assumes that 0 is mvg, so do I
      return { isOpen: true, applet: currPopups[0], assocApplet: currPopups[1] }
    }
    throw new Error('[NB] Should never have been here')
  }

  checkOpenedPopup(closeIfOpen) {
    const { isOpen } = N19popupController.IsPopupOpen();
    if (isOpen && closeIfOpen) {
      // this code will close the applet even if this applet was originated by another applet
      console.log(
        '[NB] Closing already opened popup applet in checkOpenedPopup'
      );
      // maybe do not close if the applet to be opened if the same as already opened?
      return this.closePopupApplet()
    }
    return isOpen
  }

  _openAssocApplet(hide, newRecordFunc, cb) {
    this.checkOpenedPopup(true);
    this.isPopupHidden = !!hide;

    newRecordFunc(); // make async of invokeMethod?

    if (hide) {
      let ret = new Promise(resolve => {
        this.resolvePromise = resolve;
      });
      if (typeof cb === 'function') {
        ret = ret.then(cb);
      }
      return ret
    }

    return true
  }

  showPopupApplet(hide, cb, n19, methodName) {
    // TODO: maybe use the properties set on promise resolving?
    this.checkOpenedPopup(true);
    this.isPopupHidden = !!hide;

    n19.pm.ExecuteMethod('InvokeMethod', methodName);
    // can call EditField if EditPopup?

    if (hide) {
      // we will populate the instances only when applet should be hidden
      let ret = new Promise(resolve => {
        this.resolvePromise = resolve;
      });
      if (typeof cb === 'function') {
        ret = ret.then(cb);
      }
      return ret
    }

    return true
  }
}

/* eslint-disable no-undef */

class Nexus extends N19baseApplet {
  constructor(settings) {
    const { pm } = settings;
    if (!pm) {
      throw new Error('[NB] Nexus initialisation failed: provide the pm.')
    }

    super(settings);

    // get the n19popupController singleton instance
    this.n19popupController = N19popupController.instance;
    this.n19popupController.settings = settings;
  }

  closePopupApplet() {
    return this.n19popupController.closePopupApplet()
  }

  _showPopupApplet(name, hide, cb) {
    if (!this.n19popupController.canOpenPopup()) {
      throw new Error(
        '[NB] Cannot open popup (currently exists resolve function)'
      )
    }
    this._setActiveControl(name);
    return this.n19popupController.showPopupApplet(hide, cb, this, 'EditPopup')
  }

  changeRecords(hide, cb) {
    if (!this.n19popupController.canOpenPopup()) {
      throw new Error(
        '[NB] Cannot open popup (currently exists resolve function)'
      )
    }
    return this.n19popupController.showPopupApplet(
      hide,
      cb,
      this,
      'ChangeRecords'
    )
  }

  showMvgApplet(name, hide, cb) {
    if (this.pm.Get('IsInQueryMode')) {
      throw new Error('[NB] Mvg applet cannot be opened in query mode')
    }
    return this._showPopupApplet(name, hide, cb)
  }

  showPickApplet(name, hide, cb) {
    return this._showPopupApplet(name, hide, cb)
  }

  _newAssocRecord() {
    return new Promise(resolve =>
      this.pm.ExecuteMethod('InvokeMethod', 'NewRecord', null, {
        async: true,
        cb: resolve
      })
    )
  }

  openAssocApplet(hide, cb) {
    // this method should be available for child business component in M:M relationship
    if (!this.n19popupController.canOpenPopup()) {
      throw new Error(
        '[NB] Cannot open popup (currently exists resolve function)'
      )
    }
    if (!this.canInvokeMethod('NewRecord')) {
      throw new Error('[NB] NewRecord is not available') // also when in query mode
    }
    return this.n19popupController._openAssocApplet(
      hide,
      this._newAssocRecord.bind(this),
      cb
    )
  }

  drilldown(controlName) {
    if (this.isListApplet) {
      // TODO: check isLink of control?
      // index is not effective, and drilldown anyway happens on the selected record
      const index = this.getSelection();

      // return this.pm.ExecuteMethod('OnDrillDown', controlName, index);
      return this.pm.OnControlEvent(
        this.consts.get('PHYEVENT_DRILLDOWN_LIST'),
        controlName,
        index
      )
    }
    // else lets assume it is form applet
    const control = this._getControl(controlName);
    if (!control) {
      throw new Error(`[NB] Control ${controlName} is not found`)
    }
    return this.pm.OnControlEvent(
      this.consts.get('PHYEVENT_DRILLDOWN_FORM'),
      control
    )
    // const ps = control.GetMethodPropSet();
    // return this.pm.ExecuteMethod('InvokeMethod', 'DrillDown', ps);
  }

  drilldownPromised(controlName) {
    return new Promise(resolve => {
      this.n19popupController.viewLoadedResolve = resolve;
      this.drilldown(controlName);
    })
  }

  gotoView(targetViewName, targetAppletName, id) {
    // TODO: check if current record exists this.getCurrentRecord
    const rowId =
      typeof id === 'undefined' ? this.getCurrentRecord(true).Id : id;
    let SWECmd = `GotoView&SWEView=${targetViewName}&SWEApplet0=${targetAppletName}`;
    SWECmd += `&SWEBU=1&SWEKeepContext=FALSE&SWERowId0=${rowId}`;
    SWECmd = encodeURI(SWECmd);
    return window.SiebelApp.S_App.GotoView(targetViewName, '', SWECmd, '')
  }

  gotoViewPromised(targetViewName, appletName, id) {
    return this.n19popupController.gotoView(targetViewName, appletName, id)
  }

  reInitPopup() {
    // do we need to keep also static ReInitPopup
    this.n19popupController.isPopupHidden = false;

    const popupPM = window.SiebelApp.S_App.GetPopupPM();
    popupPM.Init();
    popupPM.Setup();
  }

  static ReInitPopup() {
    // could be removed in the next version
    const popupPM = window.SiebelApp.S_App.GetPopupPM();
    popupPM.Init();
    popupPM.Setup();
  }

  pickRecordById(controlName, rowId) {
    return this.showPickApplet(controlName, true)
      .then(obj => new Promise(resolve => setTimeout(() => resolve(obj), 0)))
      .then(obj => {
        const found = obj.popupAppletN19.queryByIdSync(rowId);
        if (found !== 1) {
          throw new Error(`[NB] The record ${rowId} is not found (${found})`)
        }
        return obj.popupAppletN19.pickRecord()
      })
  }

  assocRecordsById(controlName, arr, closeApplet) {
    return this.showMvgApplet(controlName, true)
      .then(obj => new Promise(resolve => setTimeout(() => resolve(obj), 0)))
      .then(
        obj =>
          new Promise(resolve => {
            const found = obj.assocAppletN19.queryByIdSync(arr);
            if (found !== arr.length) {
              // TODO: throw an error?
              console.warn(
                `[NB] The amount of found records(${found}) does not match to input array length(${arr.length})`
              );
            }
            if (found > 0) {
              obj.popupAppletN19.addAllRecords();
            }
            if (closeApplet) {
              this.closePopupApplet();
              resolve(found);
            } else {
              obj.found = found;
              resolve(obj);
            }
          })
      )
  }

  static CreatePopupNB(settings) {
    return new N19popupApplet(settings)
  }
}

module.exports = Nexus;
