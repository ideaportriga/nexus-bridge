var NexusBridge = (function () {
  'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(source, true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(source).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    }
  }

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  var N19notifications =
  /*#__PURE__*/
  function () {
    function N19notifications(pm, consts, fieldToControlMap) {
      var _this = this;

      _classCallCheck(this, N19notifications);

      var receivedNotifications = [];
      this.token = 0;
      this.subscribers = [];
      pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_BEGIN'), function () {
        receivedNotifications = [];
      });
      pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_NEW_ACTIVE_ROW'), function () {
        receivedNotifications.push('SWE_PROP_BC_NOTI_NEW_ACTIVE_ROW');
      });
      pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_STATE_CHANGED'), function (propSet) {
        var states = ['cp', 'n'];

        if (!states.includes(propSet.GetProperty('state'))) {
          receivedNotifications.push('SWE_PROP_BC_NOTI_STATE_CHANGED');
        }
      }); // or SWE_PROP_BC_NOTI_NEW_FIELD_DATA?

      pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_NEW_DATA_WS'), function (propSet) {
        var fieldName = propSet.GetProperty(consts.get('SWE_PROP_NOTI_FIELD'));
        var control = fieldToControlMap[fieldName];

        if (control && control.uiType !== consts.get('SWE_CTRL_MVG') // && control.uiType !== consts.get('SWE_CTRL_PICK')
        ) {
            receivedNotifications.push('SWE_PROP_BC_NOTI_NEW_DATA_WS');
          }
      });
      pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_DELETE_RECORD'), function () {
        receivedNotifications.push('SWE_PROP_BC_NOTI_DELETE_RECORD');
      });
      pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_NEW_RECORD'), function () {
        receivedNotifications.push('SWE_PROP_BC_NOTI_NEW_RECORD');
      });
      pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_END'), function () {
        if (receivedNotifications.length > 0) {
          // we assume that the function does not throw an error, so no error handling here
          _this.subscribers.forEach(function (el) {
            return el.func();
          });
        }
      });
    }

    _createClass(N19notifications, [{
      key: "subscribe",
      value: function subscribe(func) {
        if (typeof func !== 'function') {
          throw new Error('[NB] func is not a function');
        }

        var functionName = func.name;

        if (functionName) {
          // named function, unsubscrie first, and only then subscribe
          this.unsubscribe(functionName);
          this.subscribers.push({
            token: functionName,
            func: func
          });
          return functionName;
        } // function is anonymous, just subscribe


        this.token += 1;
        this.subscribers.push({
          token: this.token,
          func: func
        });
        return this.token;
      }
    }, {
      key: "subIndexOf",
      value: function subIndexOf(subToken) {
        return this.subscribers.findIndex(function (el) {
          return el.token === subToken;
        });
      }
    }, {
      key: "unsubscribe",
      value: function unsubscribe(subToken) {
        var i = this.subIndexOf(subToken);

        if (i > -1) {
          this.subscribers.splice(i, 1);
        }

        return i;
      }
    }]);

    return N19notifications;
  }();

  var singleton = Symbol('singleton');
  var singletonEnforcer = Symbol('singletonEnforcer');

  var N19localeData =
  /*#__PURE__*/
  function () {
    _createClass(N19localeData, null, [{
      key: "instance",
      get: function get() {
        if (!this[singleton]) {
          this[singleton] = new N19localeData(singletonEnforcer);
        }

        return this[singleton];
      }
    }]);

    function N19localeData(enforcer) {
      _classCallCheck(this, N19localeData);

      if (enforcer !== singletonEnforcer) {
        throw new Error('[NB] Instantiation failed: get locale data singleton instance instead of new.');
      }

      this.consts = window.SiebelJS.Dependency('window.SiebelApp.Constants');
      this.loadLocaleData();
    }

    _createClass(N19localeData, [{
      key: "loadLocaleData",
      value: function loadLocaleData() {
        var localeObject = window.SiebelApp.S_App.LocaleObject;
        this.dateTimeFormat = localeObject.GetProfile(this.consts.get('LOCAL_DATETIME_FORMAT'));
        this.firstDayOfWeek = localeObject.GetWeekStartDay();
        this.dateFormat = localeObject.GetProfile(this.consts.get('LOCAL_DATE_FORMAT'));
        this.is24hoursFormat = !/p$/.test(this.dateTimeFormat);
        this.localCountryPhoneCode = localeObject.GetProfile(this.consts.get('LOCAL_PHONE_COUNTRY'));
        this.currencyDecimal = localeObject.GetDispCurrencyDecimal();
        this.currencySeparator = localeObject.GetDispCurrencySeparator();
        this.numberDecimal = localeObject.GetDispNumberDecimal();
        this.numberSeparator = localeObject.GetDispNumberSeparator();
        this.months = Array.from({
          length: 12
        }, function (el, i) {
          return localeObject.GetMonth(i + 1, false);
        });
        this.shortMonths = Array.from({
          length: 12
        }, function (el, i) {
          return localeObject.GetMonth(i + 1, true);
        });
        this.weekDays = Array.from({
          length: 7
        }, function (el, i) {
          return localeObject.GetDayOfWeek(i, 0);
        });
        this.weekDays3 = Array.from({
          length: 7
        }, function (el, i) {
          return localeObject.GetDayOfWeek(i, 1);
        });
        this.weekDays1 = Array.from({
          length: 7
        }, function (el, i) {
          return localeObject.GetDayOfWeek(i, 2);
        });
      }
    }]);

    return N19localeData;
  }();

  var N19baseApplet =
  /*#__PURE__*/
  function () {
    function N19baseApplet(settings) {
      var _this = this;

      _classCallCheck(this, N19baseApplet);

      this.consts = window.SiebelJS.Dependency('window.SiebelApp.Constants');
      this.pm = settings.pm;
      this.convertDates = settings.convertDates;
      this.returnRawNumbers = settings.returnRawNumbers;
      this.returnRawCurrencies = settings.returnRawCurrencies;
      this.isMvgAssoc = settings.isMvgAssoc;
      this.isPopup = settings.isPopup;
      this.view = window.SiebelApp.S_App.GetActiveView();
      this.appletName = this.pm.Get('GetName');
      this.isListApplet = typeof this.pm.Get('GetListOfColumns') !== 'undefined';
      this.required = []; // will be empty for the list applet

      this.lov = {};
      this.boolObject = new window.SiebelApp.S_App.DatumBoolObject();
      this.localeData = N19localeData.instance; // get the instance of locale data object

      this.fieldToControlMap = this._getFieldToControlMap();
      this.notifications = new N19notifications(this.pm, this.consts, this.fieldToControlMap); // populate the required array for form applets

      if (!this.isListApplet) {
        var appletId = "s_".concat(this.pm.Get('GetFullId'), "_div");
        var applet = document.getElementById(appletId);

        if (applet) {
          var appletInputs = applet.querySelectorAll('input');
          appletInputs.forEach(function (el) {
            if (el.attributes['aria-required']) {
              _this.required.push(el.attributes.name.nodeValue);
            }
          });
        } else {
          console.warn("[NB] Cannot get required controls from HTML. HTML was already removed?/".concat(this.appletName));
        }
      } // listener to get dynamic LOVs


      this.pm.AttachPMBinding('UpdateQuickPickInfo', function (inputName, b, arr, i) {
        if (i === 6) {
          // this is a normal flow, could it be 5 as in Bookshelf stated?
          if (_this.appletName === arr[2]) {
            if ('false' === arr[4]) {
              console.warn("[NB] Picklist is not associated with the control ".concat(inputName, " - ").concat(JSON.stringify(arr)));
            }

            _this.lov[inputName] = arr.slice().splice(i);
          }
        } else if (i === 0) {
          // this is a misconfiguration, when getting dynamic LOV is called second+ time?
          console.warn("[NB] It seems the control/list column ".concat(inputName, " is incorrectly configured in the Tools."));
          _this.lov[inputName] = arr;
        }
      }, {
        scope: this
      });
      this.isTreeApplet = window.SiebelAppFacade.ExplorerPresentationModel === this.pm.constructor;

      if (this.isTreeApplet) {
        console.warn("[NB] This is a tree applet ".concat(this.appletName, ". Please use list or form applets instead."));
      }
    }

    _createClass(N19baseApplet, [{
      key: "subscribe",
      value: function subscribe(func) {
        // eslint-disable-line class-methods-use-this
        // TODO: accept also context for function, or the caller binds the context to the function?
        return this.notifications.subscribe(func);
      }
    }, {
      key: "unsubscribe",
      value: function unsubscribe(token) {
        // eslint-disable-line class-methods-use-this
        return this.notifications.unsubscribe(token);
      }
    }, {
      key: "_getControl",
      value: function _getControl(name) {
        return this.pm.ExecuteMethod('GetControl', name);
      }
    }, {
      key: "_returnControls",
      value: function _returnControls() {
        // if (this.isListApplet) { // commented to return buttons for list applet
        //  return this.pm.Get('GetListOfColumns');
        // }
        return this.pm.Get('GetControls');
      } // called into the getControls to reduce the amount of the returned controls

    }, {
      key: "_isSkipControl",
      value: function _isSkipControl(type) {
        // https://docs.oracle.com/cd/E74890_01/books/ConfigOpenUI/appendix_a_api002.htm
        // maybe we need to exclude more types
        return type === this.consts.get('SWE_CTRL_LINK') || // || (type === this.consts.get('SWE_PST_BUTTON_CTRL'))
        // || (type === this.consts.get('SWE_CTRL_PLAINTEXT')) // KC IM
        type === 'null'; // GetUiType returns string
      }
    }, {
      key: "_isRequired",
      value: function _isRequired(inputName) {
        // required is empty for list applets
        // it would be very good to use IsRequired and RequiredControl PM prop
        return this.required.indexOf(inputName) > -1;
      }
    }, {
      key: "_setActiveControl",
      value: function _setActiveControl(name) {
        if (name) {
          return this.pm.ExecuteMethod('SetActiveControl', this._getControl(name));
        }

        return this.pm.ExecuteMethod('SetActiveControl', null);
      }
    }, {
      key: "_isDateTimeControl",
      value: function _isDateTimeControl(uiType) {
        return this.consts.get('SWE_CTRL_DATE_TZ_PICK') === uiType || this.consts.get('SWE_CTRL_DATE_TIME_PICK') === uiType || this.consts.get('SWE_CTRL_DATE_PICK') === uiType;
      }
    }, {
      key: "_getSiebelValue",
      value: function _getSiebelValue(value, uiType, displayFormat) {
        if (this.consts.get('SWE_CTRL_CHECKBOX') === uiType) {
          // convert true/false => Y/N // null is not handled (the same as in standard Open UI)
          // value = value ? 'Y' : 'N';
          this.boolObject.SetValue(value);
          return this.boolObject.GetAsString();
        }

        if (this.convertDates && displayFormat && this._isDateTimeControl(uiType)) {
          // TODO: check if a valid date is inputted?
          var date = value.toLocaleString('en-US', {
            hour12: false
          }).split(',').join('');
          return window.SiebelApp.S_App.LocaleObject.GetStringFromDateTime(date, 'M/D/YYYY HH:mm:ss', displayFormat);
        }

        return "".concat(value); // to implicitly convert to string? Number for currencies/numbers
      }
    }, {
      key: "canInvokeMethod",
      value: function canInvokeMethod(method) {
        // TODO: could be dangerous, check GetCanInvokeByName first?
        return this.pm.ExecuteMethod('CanInvokeMethod', method);
      }
    }, {
      key: "invokeMethod",
      value: function invokeMethod(method) {
        if (!this.canInvokeMethod(method)) {
          return false;
        }

        return this.pm.ExecuteMethod('InvokeMethod', method);
      }
    }, {
      key: "_getCurrencyCodeField",
      value: function _getCurrencyCodeField(control) {
        // eslint-disable-line class-methods-use-this
        var fieldNumber = control.GetCurrField();

        if (!fieldNumber) {
          throw new Error("[NB] Not found currency field for ".concat(control.GetFieldName()));
        } // check if 0 exists?


        return window.SiebelApp.S_App.LookupStringCache(fieldNumber).split('|')[0];
      }
    }, {
      key: "getControls",
      value: function getControls() {
        var _this2 = this;

        var controls = {};

        var appletControls = this._returnControls();

        var arr = Object.entries(appletControls);
        arr.forEach(function (controlEntry) {
          var control = controlEntry[1];
          var uiType = control.GetUIType();

          if (!_this2._isSkipControl(uiType)) {
            var name = controlEntry[0];
            var inputName = control.GetInputName();
            var fieldName = control.GetFieldName();

            var displayFormat = control.GetDisplayFormat() || _this2.getControlDisplayFormat(uiType);

            var staticPick = control.IsStaticBounded() === '1';

            var dataType = _this2.pm.ExecuteMethod('GetFieldDataType', fieldName);

            var iconMap = control.GetIconMap();
            var obj = {
              name: name,
              label: control.GetDisplayName(),
              uiType: uiType,
              required: _this2._isRequired(inputName),
              boundedPick: control.IsBoundedPick() === '1',
              staticPick: staticPick,
              inputName: inputName,
              isPostChanges: control.IsPostChanges(),
              maxSize: control.GetMaxSize(),
              fieldName: fieldName,
              isLink: _this2.pm.ExecuteMethod('CanNavigate', name),
              readonly: !_this2.pm.ExecuteMethod('CanUpdate', name),
              displayFormat: displayFormat,
              dataType: dataType,
              isLOV: staticPick || _this2.consts.get('SWE_CTRL_COMBOBOX') === uiType,
              currencyCodeField: 'currency' === dataType ? _this2._getCurrencyCodeField(control) : '',
              popupType: control.GetPopupType(),
              // always correlate to uiType?
              props: N19baseApplet.GetPropSet(control),
              isSortable: control.IsSortable(),
              iconMap: iconMap ? window.SiebelApp.S_App.GetIconMap()[window.SiebelApp.S_App.LookupStringCache(iconMap)] : null,
              methodName: control.GetMethodName()
            };
            Object.defineProperty(obj, 'readOnly', {
              get: function get() {
                console.warn('[NB] The readOnly property will be removed; use readonly instead of it.');
                return obj.readonly;
              }
            });

            if (obj.staticPick) {
              // add values to be displayed in the static picklist - 2 properties are deprecated
              Object.defineProperty(obj, 'staticLOV', {
                // TODO: to be removed
                enumerable: true,
                get: function get() {
                  console.warn('[NB] The staticLOV property will be removed; use options instead of it.');
                  return control.GetRadioGroupPropSet().childArray.map(function (el) {
                    return el.propArray;
                  });
                }
              });
              Object.defineProperty(obj, 'lovs', {
                // TODO: to be removed
                enumerable: true,
                get: function get() {
                  console.warn('[NB] The lovs property will be removed; use options instead of it.');
                  return control.GetRadioGroupPropSet().childArray.map(function (el) {
                    return {
                      lic: el.propArray.FieldValue,
                      val: el.propArray.DisplayName
                    };
                  });
                }
              });
              obj.options = N19baseApplet.GetControlStaticLOV(control);
            }

            controls[name] = obj;
          }
        });
        return controls;
      }
    }, {
      key: "getRecordSet",
      value: function getRecordSet(addRecordIndex) {
        var _this3 = this;

        // TODO: convert the values?
        var rawRecordSet = this.getRawRecordSet(); // just fallback if record set does not have Id

        var recordSet = this.pm.Get('GetRecordSet').map(function (el, index) {
          var ret = Object.assign({}, el); // clone

          if (addRecordIndex) {
            ret._indx = index;
          } // when in query mode, recordSet has 1 record, and rawRecordSet has 0 records.


          if (!_this3.pm.Get('IsInQueryMode')) {
            // not adding Id in Query Mode
            ret.Id = ret.Id || rawRecordSet[index].Id; // add Id if missing
          }

          return ret;
        }); // assumes it is form applet for which GetRecordSet returns not formatted values,
        // so we need to get the formatted values

        if (!this.isListApplet && !this.pm.Get('IsInQueryMode')) {
          var controls = this._returnControls();

          recordSet.forEach(function (record, index) {
            var fields = Object.keys(record);
            fields.forEach(function (field) {
              if (_this3.fieldToControlMap[field]) {
                var controlName = _this3.fieldToControlMap[field].name;
                var control = controls[controlName];

                var value = _this3.pm.ExecuteMethod('GetFormattedFieldValue', control);

                recordSet[index][field] = value;
              }
            });
          });
        }

        return recordSet;
      }
    }, {
      key: "getRawRecordSet",
      value: function getRawRecordSet(addRecordIndex) {
        // TODO: convert the values?
        return this.pm.Get('GetRawRecordSet').map(function (el, index) {
          var ret = Object.assign({}, el);

          if (addRecordIndex) {
            ret._indx = index;
          }

          return ret;
        });
      }
    }, {
      key: "getRowListRowCount",
      value: function getRowListRowCount() {
        // how much applet can display (specified in Siebel Tools) - 10/20
        return this.pm.Get('GetRowListRowCount');
      }
    }, {
      key: "getNumRows",
      value: function getNumRows() {
        // currently fetched from server?
        return this.pm.Get('GetNumRows');
      }
    }, {
      key: "getSelection",
      value: function getSelection() {
        return this.pm.Get('GetSelection');
      }
    }, {
      key: "_navigate",
      value: function _navigate(method) {
        if (!this.canInvokeMethod(method)) {
          return false;
        }

        var ret = this.pm.ExecuteMethod('InvokeMethod', method);
        return ret;
      }
    }, {
      key: "nextRecord",
      value: function nextRecord() {
        return this._navigate(this.isListApplet ? 'GotoNext' : 'GotoNextSet');
      }
    }, {
      key: "nextRecordSet",
      value: function nextRecordSet() {
        if (!this.isListApplet) {
          return false;
        }

        return this._navigate('GotoNextSet');
      }
    }, {
      key: "positionOnRow",
      value: function positionOnRow(index, keys, skipIfAlreadyPositioned) {
        // TODO: check IsInQueryMode?, as it still could be invoked in query mode (and even works)
        if (!this.isListApplet) {
          throw new Error('[NB] Method PositionOnRow is allowed only for list applets');
        } // if (!this.pm.ExecuteMethod('CanInvokeMethod', 'PositionOnRow')) {
        //   throw new Error('[NB] Method PositionOnRow can not be invoked now.')
        // }


        if (Number(index) < 0) {
          throw new Error("[NB] Incorrect index given for positionOnRow - ".concat(index));
        }

        if (this.getRowListRowCount() < Number(index) + 1) {
          throw new Error("[NB] ".concat(index, " is equal/higher than allowed amount of records - ").concat(this.getRowListRowCount(), "."));
        }

        if (this.getNumRows() < Number(index) + 1) {
          throw new Error("[NB] ".concat(index, " is equal/higher than displayed amount of records - ").concat(this.getNumRows(), "."));
        }

        if (skipIfAlreadyPositioned) {
          // check if already on the same row
          if (Number(index) === this.getSelection()) {
            return true; // do not call the server
          }
        } // TODO: if we got here, should we check GetActiveControl (applet.prototype.InvokeMethod)
        // and nullify it if active? otherwise if there is an active control, the navigation doesn't happen


        var _ref = keys || {},
            ctrlKey = _ref.ctrlKey,
            shiftKey = _ref.shiftKey; // ret will be false if already positioned and !skipIfAlreadyPositioned (no server communications)


        var ret = this.pm.ExecuteMethod('HandleRowSelect', index, ctrlKey, shiftKey); // Positioning not happened, TODO: Temp solution? just to check if it is going to happen again (combo)

        if (index !== this.getSelection()) {
          throw new Error("positioning not happened - ".concat(index, "/").concat(this.getSelection()));
        }

        return ret;
      }
    }, {
      key: "prevRecord",
      value: function prevRecord() {
        if (this.isListApplet) {
          // return this.positionOnRow(this.pm.Get('GetSelection') - 1)
          return this._navigate('GotoPrevious');
        }

        return this._navigate('GotoPreviousSet');
      }
    }, {
      key: "prevRecordSet",
      value: function prevRecordSet() {
        if (!this.isListApplet) {
          return false;
        }

        return this._navigate('GotoPreviousSet');
      }
    }, {
      key: "newRecord",
      value: function newRecord(cb) {
        var _this4 = this;

        var promise = new Promise(function (resolve) {
          return _this4._newRecord(resolve);
        });
        return typeof cb === 'function' ? promise.then(cb) : promise;
      }
    }, {
      key: "_newRecord",
      value: function _newRecord(cb) {
        // 20190312 - changed from NewRecord to CreateRecord, #31
        return this.pm.ExecuteMethod('InvokeMethod', 'CreateRecord', null, {
          async: true,
          cb: cb
        });
      }
    }, {
      key: "newRecordSync",
      value: function newRecordSync() {
        // 20190312 - changed from NewRecord to CreateRecord, #
        // if there is some configuration (e.g. server script) that works for NewRecord, it will not be invoked
        // workaround call the NewRecord explicitly
        return this.pm.ExecuteMethod('InvokeMethod', 'CreateRecord');
      }
    }, {
      key: "writeRecord",
      value: function writeRecord(cb, cberr) {
        var _this5 = this;

        var promise = new Promise(function (resolve, reject) {
          return _this5._writeRecord(function () {
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            if (args[2].GetProperty('Status') === 'Completed') {
              resolve();
            } else {
              reject();
            }
          });
        });
        promise = typeof cb === 'function' ? promise.then(cb) : promise;
        promise = typeof cberr === 'function' ? promise["catch"](cberr) : promise;
        return promise;
      }
    }, {
      key: "_writeRecord",
      value: function _writeRecord(cb) {
        return this.pm.ExecuteMethod('InvokeMethod', 'WriteRecord', null, {
          async: true,
          // selfbusy: true,
          cb: cb
        });
      }
    }, {
      key: "writeRecordSync",
      value: function writeRecordSync() {
        return this.pm.ExecuteMethod('InvokeMethod', 'WriteRecord');
      }
    }, {
      key: "deleteRecordSync",
      value: function deleteRecordSync(skipConfirmDialog) {
        if (skipConfirmDialog) {
          this.N19Confirm = window.SiebelApp.Utils.Confirm;

          window.SiebelApp.Utils.Confirm = function () {};
        } // do we need to try..catch and restore the function in catch ?


        var ret = this.pm.ExecuteMethod('InvokeMethod', 'DeleteRecord');

        if (skipConfirmDialog) {
          window.SiebelApp.Utils.Confirm = this.N19Confirm;
        }

        return ret;
      }
    }, {
      key: "undoRecordSync",
      value: function undoRecordSync() {
        return this.pm.ExecuteMethod('InvokeMethod', 'UndoRecord');
      }
    }, {
      key: "setControlValue",
      value: function setControlValue(name, value) {
        // TODO: If value is null, nothing happens, should we convert null to ''?
        var control = this._getControl(name);

        if (!control) {
          throw new Error("[NB] Cannot find a control by name ".concat(name, " to set ").concat(value, "."));
        }

        var uiType = control.GetUIType();
        var displayFormat = control.GetDisplayFormat() || this.getControlDisplayFormat(uiType); // eslint-disable-next-line no-param-reassign

        value = this._getSiebelValue(value, uiType, displayFormat); // TODO: should we use SetCellValue for list applets?

        var ret = this._setControlValueInternal(control, value);

        if (!ret) {
          console.log("[NB] Value ".concat(value, " was not set for ").concat(name, " control"));
        }

        return ret;
      } // experimental method, still safer to use setContolVaue
      // not described in wiki
      // could be removed in the next version

    }, {
      key: "_setControlValue",
      value: function _setControlValue(name, value) {
        var _this6 = this;

        var control = this._getControl(name);

        if (!control) {
          throw new Error("[NB] Cannot find a control by name ".concat(name, " to set ").concat(value, "."));
        }

        var uiType = control.GetUIType();
        var isPostChanges = control.IsPostChanges();
        var displayFormat = control.GetDisplayFormat() || this.getControlDisplayFormat(uiType); // eslint-disable-next-line no-param-reassign

        value = this._getSiebelValue(value, uiType, displayFormat);

        var ret = this._setControlValueInternal(control, value);

        if (!ret) {
          console.log("Value ".concat(value, " was not set for ").concat(name, " control"));
          return ret;
        }

        ret = this.getCurrentRecordModel(); // TODO: do we need to check the state, or can we assume that we always have a record?

        if (!isPostChanges) {
          Object.keys(ret.controls).forEach(function (con) {
            if (ret.controls[con].name && !ret.controls[con].isPostChanges) {
              // TODO: NB+ HERE ENSURE WE ALWAYS RETURN THE NOT FORMATTED WHEN NEEDED!!!
              var setValue = _this6.pm.ExecuteMethod('GetFormattedFieldValue', _this6._getControl(con));

              ret.controls[con].value = _this6._getJSValue(setValue, ret.controls[con]);
            }
          });
        }

        return ret;
      }
    }, {
      key: "_setControlValueInternal",
      value: function _setControlValueInternal(control, value) {
        // should it be PHYEVENT_COLUMN_FOCUS/PHYEVENT_COLUMN_BLUR for list applet
        this.pm.OnControlEvent(this.consts.get('PHYEVENT_CONTROL_FOCUS'), control);
        return this.pm.OnControlEvent(this.consts.get('PHYEVENT_CONTROL_BLUR'), control, value);
      }
    }, {
      key: "_validatePickControl",
      value: function _validatePickControl(control, staticPick) {
        // Possible results:
        // no pick
        // static pick
        // dynamic pick
        // pick
        // mvg
        // ?
        var isStaticPick = this.isStatic(control);
        var uiType = control.GetUIType();

        if (staticPick) {
          // static
          if (!isStaticPick) {
            console.warn("[NB]It seems the getStaticLOV called for not static control ".concat(control.GetName(), " - ").concat(uiType, "."));
          }
        } else {
          // dynamic
          if (isStaticPick) {
            console.warn("[NB]It seems the getDynamicLOV called for static control ".concat(control.GetName(), "."));
          }

          if (this.consts.get('SWE_CTRL_COMBOBOX') !== uiType) {
            // the control is not "JComboBox"
            switch (uiType) {
              case this.consts.get('SWE_CTRL_PICK'): // Pick

              case this.consts.get('SWE_CTRL_MVG'):
                // MVG
                console.warn("[NB]You need to use the popups instead of getDynamicLOV - ".concat(uiType, "/").concat(control.GetName(), "."));
                break;

              default:
                console.warn("[NB]Maybe getDynamicLOV won't work for this control - ".concat(uiType, "/").concat(control.GetName(), "."));
            }
          }
        }
      }
    }, {
      key: "isStatic",
      value: function isStatic(control) {
        // eslint-disable-line class-methods-use-this
        return '1' === control.IsStaticBounded();
      }
    }, {
      key: "isDynamic",
      value: function isDynamic(control) {
        return !this.isStatic(control) && this.consts.get('SWE_CTRL_COMBOBOX') === control.GetUIType();
      }
    }, {
      key: "_getControlDynamicLOV",
      value: function _getControlDynamicLOV(control) {
        var controlInputName = control.GetInputName();
        this.lov[controlInputName] = {};
        var ps = window.SiebelApp.S_App.NewPropertySet();
        ps.SetProperty('SWEField', controlInputName);
        ps.SetProperty('SWEJI', false);

        this._setActiveControl(null); // to prevent UpdatePick


        this.pm.ExecuteMethod('InvokeMethod', 'GetQuickPickInfo', ps);
        return this.lov[controlInputName];
      }
    }, {
      key: "getLOV",
      value: function getLOV(controlName) {
        var control = this._getControl(controlName);

        if (this.isStatic(control)) {
          return N19baseApplet.GetControlStaticLOV(control);
        }

        if (!this.isDynamic(control)) {
          // Take the dynamic path in the hope that it will work
          console.warn("[NB]It seems ".concat(controlName, " is not properly configured in the Tools or not a picklist."));
        }

        return this._getControlDynamicLOV(control);
      }
    }, {
      key: "getDynamicLOV",
      value: function getDynamicLOV(controlName) {
        var control = this._getControl(controlName);

        this._validatePickControl(control, false);

        return this._getControlDynamicLOV(control);
      }
    }, {
      key: "getStaticLOV",
      value: function getStaticLOV(controlName) {
        var control = this._getControl(controlName);

        this._validatePickControl(control, true);

        return N19baseApplet.GetControlStaticLOV(control);
      }
    }, {
      key: "_getJSValue",
      value: function _getJSValue(value, _ref2) {
        var uiType = _ref2.uiType,
            dataType = _ref2.dataType,
            displayFormat = _ref2.displayFormat,
            currencyCode = _ref2.currencyCode;

        if (this.consts.get('SWE_CTRL_CHECKBOX') === uiType) {
          // convert Y/N/null -> true/false // null comes as false?
          this.boolObject.SetAsString(value);
          return this.boolObject.GetValue();
        }

        if (this.convertDates && displayFormat && this._isDateTimeControl(uiType)) {
          if (value === '') {
            return null;
          } // assuming that form applet returns not formatted values


          var ISO = window.SiebelApp.S_App.LocaleObject.GetStringFromDateTime(value, displayFormat, this.consts.get('ISO8601_DATETIME_FORMAT'));

          if (ISO === '') {
            throw new Error("[NB] ISO value is empty after converting ".concat(value, "/").concat(displayFormat));
          }

          return new Date(ISO);
        }

        if (this.returnRawNumbers && 'number' === dataType) {
          // it is already not formatted on form applet, so only for list applet
          return window.SiebelApp.S_App.LocaleObject.FormattedToString(dataType, value, displayFormat);
        }

        if (this.returnRawCurrencies && 'currency' === dataType && currencyCode) {
          // it is already not formatted on form applet, so only for list applet
          window.SiebelApp.S_App.LocaleObject.SetCurrencyCode(currencyCode); // TODO: do we need to restore the m_sCurrencyCode?

          return window.SiebelApp.S_App.LocaleObject.FormattedToString(dataType, value, displayFormat);
        }

        return value;
      }
    }, {
      key: "getCurrentRecord",
      value: function getCurrentRecord(raw) {
        // TODO: need conversion?
        // TODO: check if there is a record
        var index = this.getSelection(); // TODO: make a copy of returned object?

        if (raw) {
          return this.getRawRecordSet()[index];
        }

        return this.getRecordSet()[index];
      }
    }, {
      key: "calculateCurrentRecordState",
      value: function calculateCurrentRecordState() {
        // 0 - No records displayed
        // 1 - Record is being created
        // 2 - Record is being edited
        // 3 - Is in query mode
        // 4 - Record is displayed,
        // 5 - Record is read-only
        var bc = this.pm.Get('GetBusComp');

        if (this.pm.Get('IsInQueryMode')) {
          // if no records and the entered the query mode,
          // selection is -1, therefore we need to check query mode first
          return 3;
        }

        if (this.getSelection() < 0) {
          return 0;
        }

        if (bc.IsInsertPending()) {
          // or insertPending property
          return 1;
        }

        if (bc.IsCommitPending()) {
          // bc.commitPending or this.pm.GetStateUIMap().CommitPending
          return 2;
        }

        if (!this.canInvokeMethod('WriteRecord')) {
          // or use the canUpdate property of the BC?
          return 5;
        }

        return 4; // this is a default fallback;
      }
    }, {
      key: "_getMethods",
      value: function _getMethods() {
        var methods = {};
        var appletControls = this.pm.Get('GetControls'); // even for list applet

        var arr = Object.entries(appletControls);
        arr.forEach(function (controlEntry) {
          var controlMethod = controlEntry[1].GetMethodName();

          if (typeof controlMethod !== 'undefined' && controlMethod !== '') {
            methods[controlMethod] = {};
          }
        });
        return methods;
      }
    }, {
      key: "getControlDisplayFormat",
      value: function getControlDisplayFormat(uiType) {
        switch (uiType) {
          case this.consts.get('SWE_CTRL_DATE_TZ_PICK'):
          case this.consts.get('SWE_CTRL_DATE_TIME_PICK'):
            return this.localeData.dateTimeFormat;

          case this.consts.get('SWE_CTRL_DATE_PICK'):
            return this.localeData.dateFormat;

          default:
            return '';
        }
      }
    }, {
      key: "getCurrentRecordModel",
      value: function getCurrentRecordModel(_controls, _methods) {
        var _this7 = this;

        if (!_controls) {
          _controls = this.getControls(); // eslint-disable-line no-param-reassign
        }

        _controls.state = this.calculateCurrentRecordState(); // eslint-disable-line no-param-reassign

        _controls.id = ''; // eslint-disable-line no-param-reassign

        var obj = {};
        var index = this.getSelection();
        var rawRecordSet = this.getRawRecordSet();

        if (index > -1) {
          // added _controls.state !== 3; we don't need id in query mode
          obj = this.getRecordSet()[index];
          _controls.id = rawRecordSet[index].Id; // eslint-disable-line no-param-reassign
        }

        var appletControls = this._returnControls(); // populate controls


        Object.keys(_controls).forEach(function (controlName) {
          var ret = {};
          var control = appletControls[controlName];

          if (typeof control !== 'undefined') {
            // just if somebody sends incorrect name of the control
            var fieldName = control.GetFieldName();
            var uiType = control.GetUIType();

            var displayFormat = control.GetDisplayFormat() || _this7.getControlDisplayFormat(uiType);

            var staticPick = control.IsStaticBounded() === '1';

            var dataType = _this7.pm.ExecuteMethod('GetFieldDataType', fieldName);

            var iconMap = control.GetIconMap();
            var currencyCodeField = '';
            var currencyCode = '';

            if ('currency' === dataType) {
              currencyCodeField = _this7._getCurrencyCodeField(control);

              if (currencyCodeField && index > -1 && rawRecordSet[index]) {
                currencyCode = rawRecordSet[index][currencyCodeField];
              }
            }

            if (_controls.id && _controls.state !== 3) {
              ret = {
                value: _this7._getJSValue(obj[fieldName], {
                  uiType: uiType,
                  dataType: dataType,
                  displayFormat: displayFormat,
                  currencyCode: currencyCode
                }),
                readonly: !_this7.pm.ExecuteMethod('CanUpdate', controlName),
                isLink: _this7.pm.ExecuteMethod('CanNavigate', controlName)
              };
            } else {
              // no record displayed or in query mode
              ret = {
                value: '',
                readonly: _controls.state !== 3,
                // should be edittable in query mode
                isLink: false
              };
            }

            _controls[controlName] = Object.assign(ret, {
              // eslint-disable-line no-param-reassign
              uiType: uiType,
              label: control.GetDisplayName(),
              isPostChanges: control.IsPostChanges(),
              required: _this7._isRequired(control.GetInputName()),
              maxSize: control.GetMaxSize(),
              fieldName: fieldName,
              displayFormat: displayFormat,
              isLOV: staticPick || _this7.consts.get('SWE_CTRL_COMBOBOX') === uiType,
              dataType: dataType,
              currencyCodeField: currencyCodeField,
              currencyCode: currencyCode,
              name: controlName,
              iconMap: iconMap ? window.SiebelApp.S_App.GetIconMap()[window.SiebelApp.S_App.LookupStringCache(iconMap)] : null
            });
          }
        });

        if (!_controls.Id) {
          _controls.Id = {
            // eslint-disable-line no-param-reassign
            value: _controls.state !== 3 ? _controls.id : ''
          };
        } // populate methods


        if (!_methods) {
          // Is it better to use applet.GetCanInvokeArray?
          _methods = this._getMethods(); // eslint-disable-line no-param-reassign
        } // eslint-disable-next-line no-param-reassign


        Object.keys(_methods).forEach(function (methodName) {
          _methods[methodName] = _this7.canInvokeMethod(methodName);
        });
        return {
          controls: _controls,
          methods: _methods
        };
      }
    }, {
      key: "_findControlToEnterSearchExpr",
      value: function _findControlToEnterSearchExpr() {
        var _this8 = this;

        var appletControls = this._returnControls();

        var arr = Object.values(appletControls);
        var found = arr.find(function (control) {
          var controlUiType = control.GetUIType();
          var controlName = control.GetName();

          if (!_this8._isSkipControl(controlUiType)) {
            // skipping also checkbox, plaintext, button, and label
            var ret = controlUiType !== _this8.consts.get('SWE_CTRL_CHECKBOX') && controlUiType !== _this8.consts.get('SWE_PST_BUTTON_CTRL') && controlUiType !== _this8.consts.get('SWE_CTRL_PLAINTEXT') && controlUiType !== _this8.consts.get('SWE_CTRL_LABEL'); // maybe it would be better for list applets take only columns as it was before?


            ret = ret && !['PopupQueryCombobox', 'PopupQuerySrchspec', 'QueryComboBox', 'QuerySrchSpec'].includes(controlName);
            return ret;
          }

          return false;
        });
        return found;
      }
    }, {
      key: "_newQuery",
      value: function _newQuery() {
        return this.pm.ExecuteMethod('InvokeMethod', 'NewQuery');
      }
    }, {
      key: "queryBySearchExprSync",
      value: function queryBySearchExprSync(expr) {
        this._newQuery(); // check or optionally skip?


        var control = this._findControlToEnterSearchExpr();

        this._setControlValueInternal(control, expr);

        this.pm.ExecuteMethod('InvokeMethod', 'ExecuteQuery');
        return this.getRecordSet().length;
      }
    }, {
      key: "queryByIdSync",
      value: function queryByIdSync(rowId) {
        var expr;

        if (Array.isArray(rowId)) {
          expr = rowId.map(function (el) {
            return "Id=\"".concat(el, "\"");
          }).join(' OR ');
        } else {
          expr = "Id=\"".concat(rowId, "\"");
        }

        return this.queryBySearchExprSync(expr);
      }
    }, {
      key: "queryById",
      value: function queryById(rowId, cb) {
        var _this9 = this;

        var promise = new Promise(function (resolve) {
          return _this9._queryById(rowId, resolve);
        });
        var ret = promise.then(function () {
          return _this9.getRecordSet().length;
        });
        return typeof cb === 'function' ? ret.then(cb) : ret;
      }
    }, {
      key: "_queryById",
      value: function _queryById(rowId, cb) {
        this._newQuery(); // check or optionally skip?


        var ai = {
          scope: this,
          async: true,
          selfbusy: true
        };

        if (typeof cb === 'function') {
          ai.cb = cb;
        }

        var control = this._findControlToEnterSearchExpr();

        this._setControlValueInternal(control, "Id=\"".concat(rowId, "\""));

        return this.pm.ExecuteMethod('InvokeMethod', 'ExecuteQuery', null, ai);
      }
    }, {
      key: "query",
      value: function query(params, cb) {
        var _this10 = this;

        var promise = new Promise(function (resolve) {
          return _this10._query(params, resolve);
        });
        var ret = promise.then(function () {
          return _this10.getRecordSet().length;
        });
        return typeof cb === 'function' ? ret.then(cb) : ret;
      }
    }, {
      key: "_query",
      value: function _query(params, cb) {
        var _this11 = this;

        // TODO: check if it is already in query mode to avoid calling the new query again
        // or accept the input parameter to skip calling the new query?
        // or maybe better to cancel the existing query?
        this._newQuery();

        var ai = {
          scope: this,
          async: true,
          selfbusy: true
        };

        if (typeof cb === 'function') {
          ai.cb = cb;
        }

        var _controls = this._returnControls();

        var arr = Object.keys(params);
        arr.forEach(function (controlName) {
          var control = _controls[controlName];

          if (control) {
            _this11._setControlValueInternal(control, _this11._getSiebelValue(params[controlName], control.GetUIType()));
          } else {
            console.error("[NB] The control \"".concat(controlName, "\" is not found"));
          }
        });
        return this.pm.ExecuteMethod('InvokeMethod', 'ExecuteQuery', null, ai);
      }
    }, {
      key: "getMVF",
      value: function getMVF(ids, fields, useActiveBO) {
        var _this12 = this;

        return new Promise(function (resolve, reject) {
          return _this12._getMVF(ids, fields, useActiveBO, resolve, reject);
        });
      }
    }, {
      key: "_getFieldNameForControl",
      value: function _getFieldNameForControl(controlName) {
        var control = this._getControl(controlName); // if not found, the input value is returned


        if (control) {
          return control.GetFieldName();
        }

        return controlName; // fallback - just in case we got the field name
      }
    }, {
      key: "_getMVF",
      value: function _getMVF(ids, fields, useActiveBO, resolve, reject) {
        var _this13 = this;

        var arr = Object.entries(fields);
        var psInputs = window.SiebelApp.S_App.NewPropertySet();
        psInputs.SetProperty('BO', window.SiebelApp.S_App.GetActiveBusObj().GetName());
        psInputs.SetProperty('BC', this.pm.Get('GetBusComp').GetName());
        psInputs.SetProperty('UseActiveBO', useActiveBO ? 'Y' : 'N');
        psInputs.SetProperty('ID', ids.join(','));
        arr.forEach(function (el) {
          var ps = window.SiebelApp.S_App.NewPropertySet();
          ps.SetType(_this13._getFieldNameForControl(el[0]));
          ps.SetProperty('Fields', el[1].join(','));
          psInputs.AddChild(ps.Clone());
        });
        var bs = window.SiebelApp.S_App.GetService('N19 BS');
        var ai = {
          async: true,
          selfbusy: true,
          scope: this,
          errcb: function errcb() {
            reject();
          },
          cb: function cb(methodName, Inputs, psOutputs) {
            var ret = {};

            var _ref3 = psOutputs.GetChildByType('ResultSet') || {},
                childArray = _ref3.childArray;

            (childArray || []).forEach(function (child) {
              ret[child.GetType()] = {};
              child.childArray.forEach(function (grandChild) {
                ret[child.GetType()][grandChild.GetType()] = grandChild.childArray.map(function (rec) {
                  var primary = rec.propArray['SSA Primary Field'];

                  _this13.boolObject.SetAsString(primary);

                  rec.propArray['SSA Primary Field'] = _this13.boolObject.GetValue(); // eslint-disable-line no-param-reassign

                  return Object.assign({}, rec.propArray);
                });
              });
            });
            resolve(ret);
          }
        };
        return bs.InvokeMethod('ReturnMVGFields', psInputs, ai);
      }
    }, {
      key: "savePref",
      value: function savePref(name, value) {
        // value is a string, and bound to applet and view
        var psInput = window.SiebelApp.S_App.NewPropertySet();
        psInput.SetProperty('Key', name);
        psInput.SetProperty(name, value);
        this.pm.OnControlEvent(this.consts.get('PHYEVENT_INVOKE_CONTROL'), this.pm.Get(this.consts.get('SWE_MTHD_UPDATE_USER_PREF')), psInput);
        return this.pm.SetProperty(name, value);
      }
    }, {
      key: "readPref",
      value: function readPref(name) {
        return this.pm.Get(name);
      }
    }, {
      key: "_retrieveData",
      value: function _retrieveData(amount) {
        // could be removed in the next version
        // it starts from the current position
        if (!this.isListApplet) {
          return false;
        }

        var data = new Map();
        var allRecords = amount === 0;

        while (data.size < amount || allRecords) {
          var arr = this.getRawRecordSet(); // avoid the duplicates

          arr.forEach(function (el) {
            return data.set(el.Id, el);
          }); // we are using canInvokeMethod, as in 16.0 nextRecordSet always returns undefined

          if (!this.canInvokeMethod('GotoNextSet')) {
            break;
          }

          this.nextRecordSet();
        }

        return {
          data: _toConsumableArray(data.values()),
          hasNext: this.canInvokeMethod('GotoNextSet')
        };
      } // this is also called from the the demo where Siebel and custom rendered applet coexist

    }, {
      key: "_getFieldToControlMap",
      value: function _getFieldToControlMap(_controls) {
        var _this14 = this;

        // list applet has the GetColumnsByFieldName that could be used for that purpose
        var ret = {};

        var appletControls = this._returnControls();

        var arr = Object.keys(_controls || appletControls);
        arr.forEach(function (controlName) {
          var control = appletControls[controlName];

          if (typeof control !== 'undefined') {
            // just in case somebody gave the incorrect control name
            var fieldName = control.GetFieldName();

            if (fieldName) {
              var uiType = control.GetUIType();

              var dataType = _this14.pm.ExecuteMethod('GetFieldDataType', fieldName);

              ret[fieldName] = {
                name: controlName,
                isPostChanges: control.IsPostChanges(),
                uiType: uiType,
                displayFormat: control.GetDisplayFormat() || _this14.getControlDisplayFormat(uiType),
                dataType: dataType,
                currencyCodeField: 'currency' === dataType ? _this14._getCurrencyCodeField(control) : ''
              };
            }
          }
        });
        return ret;
      }
    }, {
      key: "getControlsRecordSet",
      value: function getControlsRecordSet(addRecordIndex) {
        var _this15 = this;

        // used slice to avoid modification of the record set
        var ret = this.getRecordSet(addRecordIndex);
        var rawRecordSet = this.getRawRecordSet(); // TODO: Analyze IsInQueryMode before applying?

        var _loop = function _loop(i, len) {
          var obj = {
            Id: ret[i].Id
          };

          if (addRecordIndex) {
            obj._indx = ret[i]._indx;
          }

          ret[i] = Object.assign(obj, Object.keys(ret[i]).filter(function (el) {
            return _this15.fieldToControlMap[el];
          }).reduce(function (acc, el) {
            return _objectSpread2({}, acc, {}, _defineProperty({}, _this15.fieldToControlMap[el].name, _this15._getJSValue(ret[i][el], {
              uiType: _this15.fieldToControlMap[el].uiType,
              dataType: _this15.fieldToControlMap[el].dataType,
              displayFormat: _this15.fieldToControlMap[el].displayFormat,
              currencyCode: rawRecordSet[i] && rawRecordSet[i][_this15.fieldToControlMap[el].currencyCodeField]
            })));
          }, {}));
        };

        for (var i = 0, len = ret.length; i < len; i += 1) {
          _loop(i);
        }

        return ret;
      }
    }, {
      key: "sort",
      value: function sort(controlName, isAscending) {
        // TODO: check if dataset is sortable? e.g. not in query or in insert mode?
        // TODO: check if we can sort by this control?
        if (this.isListApplet) {
          var sortOrder = isAscending ? this.consts.get('SORT_ASCENDING') : this.consts.get('SORT_DESCENDING');
          this.pm.ExecuteMethod('OnClickSort', controlName, sortOrder);
          return true;
        }

        return false;
      }
    }, {
      key: "getPaginationInfo",
      value: function getPaginationInfo() {
        var start = this.pm.ExecuteMethod('GetWSStartRowNum');
        var end = this.pm.Get('GetWSEndRowNum'); // 0 in query mode

        var hasMore = this.pm.Get('IsInQueryMode') ? false : !this.pm.Get('IsNumRowsKnown');
        return {
          start: start,
          end: end,
          total: this.getNumRows(),
          hasMore: hasMore,
          current: this.getSelection() + start
        };
      }
    }], [{
      key: "GetPropSet",
      value: function GetPropSet(control) {
        var ret = [];
        var propSet = control.GetPMPropSet();

        if (propSet && propSet.propArray) {
          var propArray = propSet.propArray;
          Object.keys(propArray).forEach(function (prop) {
            return ret.push({
              prop: prop,
              val: propArray[prop]
            });
          });
        }

        return ret;
      }
    }, {
      key: "GetControlStaticLOV",
      value: function GetControlStaticLOV(control) {
        return control.GetRadioGroupPropSet().childArray.map(function (el) {
          return el.propArray.DisplayName;
        }).sort();
      }
    }, {
      key: "Requery",
      value: function Requery(name) {
        var service = window.SiebelApp.S_App.GetService('N19 BS');

        if (service) {
          var inPropSet = window.SiebelApp.S_App.NewPropertySet();
          inPropSet.SetProperty('name', name);
          service.InvokeMethod('Requery', inPropSet, {});
        }
      }
    }, {
      key: "Refresh",
      value: function Refresh(name) {
        var service = window.SiebelApp.S_App.GetService('N19 BS');

        if (service) {
          var inPropSet = window.SiebelApp.S_App.NewPropertySet();
          inPropSet.SetProperty('name', name);
          service.InvokeMethod('Refresh', inPropSet, {});
        }
      }
    }]);

    return N19baseApplet;
  }();

  var N19popupApplet =
  /*#__PURE__*/
  function (_N19baseApplet) {
    _inherits(N19popupApplet, _N19baseApplet);

    function N19popupApplet(settings) {
      var _this;

      _classCallCheck(this, N19popupApplet);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(N19popupApplet).call(this, settings));
      console.log('[NB] Popup applet started');
      return _this;
    }

    _createClass(N19popupApplet, [{
      key: "pickRecord",
      value: function pickRecord() {
        return this.pm.ExecuteMethod('InvokeMethod', 'PickRecord');
      }
    }, {
      key: "deleteRecords",
      value: function deleteRecords(cb) {
        // method is not allowed to delete the primary for visibility MVG
        //  in this case it returns "Method DeleteRecords is not allowed here" SBL-UIF-00348
        var ret = this.pm.ExecuteMethod('InvokeMethod', 'DeleteRecords');

        if (typeof cb === 'function') {
          cb();
        }

        return ret;
      }
    }, {
      key: "deleteAllRecords",
      value: function deleteAllRecords(cb) {
        // method is not deleting the primary for visibility MVG(!) and still returns true
        var ret = this.pm.ExecuteMethod('InvokeMethod', 'DeleteAllRecords');

        if (typeof cb === 'function') {
          cb();
        }

        return ret;
      }
    }, {
      key: "addRecords",
      value: function addRecords(cb) {
        var ret = this.pm.ExecuteMethod('InvokeMethod', 'AddRecords');

        if (typeof cb === 'function') {
          cb();
        }

        return ret;
      }
    }, {
      key: "addAllRecords",
      value: function addAllRecords(cb) {
        var ret = this.pm.ExecuteMethod('InvokeMethod', 'AddAllRecords');

        if (typeof cb === 'function') {
          cb();
        }

        return ret;
      }
    }, {
      key: "_firstRecord",
      value: function _firstRecord() {
        // temp method, assumes that no scrolling happened
        if (this.isListApplet) {
          if (this.getSelection() !== 0) {
            return this.positionOnRow(0);
          }

          return true;
        }

        return false;
      }
    }]);

    return N19popupApplet;
  }(N19baseApplet);

  var singleton$1 = Symbol('singleton');
  var singletonEnforcer$1 = Symbol('singletonEnforcer');

  var N19popupController =
  /*#__PURE__*/
  function () {
    _createClass(N19popupController, null, [{
      key: "instance",
      get: function get() {
        if (!this[singleton$1]) {
          this[singleton$1] = new N19popupController(singletonEnforcer$1);
        }

        return this[singleton$1];
      }
    }]);

    function N19popupController(enforcer) {
      var _this = this;

      _classCallCheck(this, N19popupController);

      if (enforcer !== singletonEnforcer$1) {
        throw new Error('[NB] Instantiation failed: get popup controller instance instead of new');
      }

      var popupPM = window.SiebelApp.S_App.GetPopupPM();
      popupPM.Setup(); // to create PR

      this.consts = window.SiebelJS.Dependency('window.SiebelApp.Constants');
      this.isPopupHidden = false;
      this.resolvePromise = null;
      this.popupAppletN19 = null; // it could be removed in the next version

      this.assocAppletN19 = null; // it could be removed in the next version

      console.log('[NB] Popup controller started'); // it will be a singleton, so there is no cleanup

      this.N19processNewPopup = window.SiebelApp.S_App.ProcessNewPopup;

      window.SiebelApp.S_App.ProcessNewPopup = function (ps) {
        var ret;

        if (_this.isPopupHidden) {
          ret = _this.processNewPopup(ps); // this.isPopupHidden = false; // in order to do not affect the next call // it is redundant
        } else {
          ret = _this.N19processNewPopup.call(window.SiebelApp.S_App, ps);
        }

        return ret;
      };

      window.SiebelApp.S_App.GetPopupPM().AddMethod('OnLoadPopupContent', function () {
        if (typeof _this.resolvePromise === 'function') {
          var _N19popupController$I = N19popupController.IsPopupOpen(),
              applet = _N19popupController$I.applet,
              assocApplet = _N19popupController$I.assocApplet,
              appletName = _N19popupController$I.appletName,
              assocAppletName = _N19popupController$I.assocAppletName;

          if (!applet) {
            _this.resolvePromise = null; // how do we do error handling

            throw new Error('[NB] Open Popup Applet is not found in OnLoadPopupContent resolving Promise');
          }

          if (!window.SiebelAppFacade.NB) {
            console.warn('[NB] The `window.SiebelAppFacade.NB` is empty. Please check the PR files deployed');
          } else {
            var arr = Object.values(window.SiebelAppFacade.NB);

            for (var i = 0; i < arr.length; i += 1) {
              if (arr[i].isPopup) {
                // this is popup
                if (assocApplet && arr[i].isMvgAssoc) {
                  _this.assocAppletN19 = arr[i];
                } else {
                  _this.popupAppletN19 = arr[i];
                }
              }
            }
          }

          var obj = {
            appletName: appletName,
            applet: applet,
            assocAppletName: assocAppletName,
            assocApplet: assocApplet,
            popupAppletN19: _this.popupAppletN19,
            assocAppletN19: _this.assocAppletN19
          };

          _this.resolvePromise(obj);

          _this.resolvePromise = null;
        }
      }, {
        sequence: false
      });
      this.viewLoadedResolve = null;
      this.N19viewLoaded = window.SiebelApp.contentUpdater.viewLoaded;

      window.SiebelApp.contentUpdater.viewLoaded = function () {
        var _this$N19viewLoaded;

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        var ret = (_this$N19viewLoaded = _this.N19viewLoaded).call.apply(_this$N19viewLoaded, [window.SiebelApp.contentUpdater].concat(args));

        if (typeof _this.viewLoadedResolve === 'function') {
          _this.viewLoadedResolve(true); // TODO: Check view name to be safe??


          _this.viewLoadedResolve = null;
        }

        return ret;
      };
    }

    _createClass(N19popupController, [{
      key: "gotoView",
      value: function gotoView(viewName, appletName, id) {
        var _this2 = this;

        return new Promise(function (resolve) {
          _this2.viewLoadedResolve = resolve;

          if (appletName && id) {
            var SWECmd = "GotoView&SWEView=".concat(viewName, "&SWEApplet0=").concat(appletName);
            SWECmd += "&SWEBU=1&SWEKeepContext=FALSE&SWERowId0=".concat(id);
            SWECmd = encodeURI(SWECmd);
            window.SiebelApp.S_App.GotoView(viewName, '', SWECmd, '');
          } else {
            window.SiebelApp.S_App.GotoView(viewName);
          }
        });
      }
    }, {
      key: "_createNexusInstance",
      value: function _createNexusInstance(pm) {
        return new N19popupApplet(Object.assign({}, this.settings, {
          pm: pm
        }));
      }
    }, {
      key: "canOpenPopup",
      value: function canOpenPopup() {
        return typeof this.resolvePromise !== 'function';
      }
    }, {
      key: "processNewPopup",
      value: function processNewPopup(ps) {
        var popupPM = window.SiebelApp.S_App.GetPopupPM(); // this property is added using AttachPMBinding into the Init PR (called by PM Setup)

        popupPM.AddProperty('state', this.consts.get('POPUP_STATE_VISIBLE'));
        var url = ps.GetProperty('URL');

        if (url.indexOf('start.swe') > -1) {
          // pre 17
          url = window.SiebelApp.S_App.GetPageURL() + url.split('start.swe')[1];
        } else {
          // assuming 17+
          url = window.SiebelApp.S_App.GetPageURL() + url.split(window.SiebelApp.S_App.GetAppExtension())[1];
        }

        popupPM.SetProperty('url', url);
        return 'refreshpopup';
      }
    }, {
      key: "closePopupApplet",
      value: function closePopupApplet() {
        if (!this.popupAppletN19 || !this.popupAppletN19.pm) {
          throw new Error('[NB] The popup applet was not opened by NB');
        }

        if (!this.popupAppletN19.pm.ExecuteMethod('CanInvokeMethod', 'CloseApplet')) {
          throw new Error('[NB] The method CloseApplet is not allowed');
        }

        var ret = this.popupAppletN19.pm.ExecuteMethod('InvokeMethod', 'CloseApplet'); // it could be better if we don't have a Siebel Applet on the view
        // do reinit here on closing?

        this.popupAppletN19 = null;
        this.assocAppletN19 = null;
        return ret;
      }
    }, {
      key: "checkOpenedPopup",
      value: function checkOpenedPopup(closeIfOpen) {
        var _N19popupController$I2 = N19popupController.IsPopupOpen(),
            isOpen = _N19popupController$I2.isOpen;

        if (isOpen && closeIfOpen) {
          // this code will close the applet even if this applet was originated by another applet
          console.log('[NB] Closing already opened popup applet in checkOpenedPopup'); // maybe do not close if the applet to be opened if the same as already opened?

          return this.closePopupApplet();
        }

        return isOpen;
      }
    }, {
      key: "_openAssocApplet",
      value: function _openAssocApplet(hide, newRecordFunc, cb) {
        var _this3 = this;

        this.checkOpenedPopup(true);
        this.isPopupHidden = !!hide;
        newRecordFunc(); // make async of invokeMethod?

        if (hide) {
          var ret = new Promise(function (resolve) {
            _this3.resolvePromise = resolve;
          });

          if (typeof cb === 'function') {
            ret = ret.then(cb);
          }

          return ret;
        }

        return true;
      }
    }, {
      key: "showPopupApplet",
      value: function showPopupApplet(hide, cb, n19, methodName) {
        var _this4 = this;

        // TODO: maybe use the properties set on promise resolving?
        this.checkOpenedPopup(true);
        this.isPopupHidden = !!hide;
        n19.pm.ExecuteMethod('InvokeMethod', methodName); // can call EditField if EditPopup?

        if (hide) {
          // we will populate the instances only when applet should be hidden
          var ret = new Promise(function (resolve) {
            _this4.resolvePromise = resolve;
          });

          if (typeof cb === 'function') {
            ret = ret.then(cb);
          }

          return ret;
        }

        return true;
      }
    }], [{
      key: "IsPopupOpen",
      value: function IsPopupOpen() {
        // safer to keep this method, even when we set some properties on resolve?
        var currPopups = window.SiebelApp.S_App.GetPopupPM().Get('currPopups');

        if (0 === currPopups.length) {
          return {
            isOpen: false
          };
        }

        if (1 === currPopups.length) {
          return {
            isOpen: true,
            applet: currPopups[0],
            appletName: currPopups[0].GetName()
          };
        }

        if (2 === currPopups.length) {
          // is this always a shuttle when we have more one applet
          // OpenUI assumes that 0 is mvg, so do I
          return {
            isOpen: true,
            applet: currPopups[0],
            appletName: currPopups[0].GetName(),
            assocApplet: currPopups[1],
            assocAppletName: currPopups[1].GetName()
          };
        }

        throw new Error('[NB] Should never have been here');
      }
    }]);

    return N19popupController;
  }();

  var Nexus =
  /*#__PURE__*/
  function (_N19baseApplet) {
    _inherits(Nexus, _N19baseApplet);

    function Nexus(settings) {
      var _this;

      _classCallCheck(this, Nexus);

      var pm = settings.pm;

      if (!pm) {
        throw new Error('[NB] Nexus initialisation failed. Please provide the `pm`');
      }

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Nexus).call(this, settings)); // get the n19popupController singleton instance

      _this.n19popupController = N19popupController.instance;
      _this.n19popupController.settings = Object.assign(_this.n19popupController.settings || {}, settings);
      return _this;
    }

    _createClass(Nexus, [{
      key: "closePopupApplet",
      value: function closePopupApplet() {
        return this.n19popupController.closePopupApplet();
      }
    }, {
      key: "_showPopupApplet",
      value: function _showPopupApplet(name, hide, cb) {
        if (!this.n19popupController.canOpenPopup()) {
          throw new Error('[NB] Cannot open popup (currently exists resolve function)');
        }

        this._setActiveControl(name);

        return this.n19popupController.showPopupApplet(hide, cb, this, 'EditPopup');
      }
    }, {
      key: "changeRecords",
      value: function changeRecords(hide, cb) {
        if (!this.n19popupController.canOpenPopup()) {
          throw new Error('[NB] Cannot open popup (currently exists resolve function)');
        }

        return this.n19popupController.showPopupApplet(hide, cb, this, 'ChangeRecords');
      }
    }, {
      key: "showMvgApplet",
      value: function showMvgApplet(name, hide, cb) {
        if (this.pm.Get('IsInQueryMode')) {
          throw new Error('[NB] Mvg applet cannot be opened in query mode');
        }

        return this._showPopupApplet(name, hide, cb);
      }
    }, {
      key: "showPickApplet",
      value: function showPickApplet(name, hide, cb) {
        return this._showPopupApplet(name, hide, cb);
      }
    }, {
      key: "_newAssocRecord",
      value: function _newAssocRecord() {
        var _this2 = this;

        return new Promise(function (resolve) {
          return _this2.pm.ExecuteMethod('InvokeMethod', 'NewRecord', null, {
            async: true,
            cb: resolve
          });
        });
      }
    }, {
      key: "openAssocApplet",
      value: function openAssocApplet(hide, cb) {
        // this method should be available for child business component in M:M relationship
        if (!this.n19popupController.canOpenPopup()) {
          throw new Error('[NB] Cannot open popup (currently exists resolve function)');
        }

        if (!this.canInvokeMethod('NewRecord')) {
          throw new Error('[NB] NewRecord is not available'); // also when in query mode
        }

        return this.n19popupController._openAssocApplet(hide, this._newAssocRecord.bind(this), cb);
      }
    }, {
      key: "drilldown",
      value: function drilldown(controlName) {
        if (this.isListApplet) {
          // TODO: check isLink of control?
          // index is not effective, and drilldown anyway happens on the selected record
          var index = this.getSelection(); // return this.pm.ExecuteMethod('OnDrillDown', controlName, index);

          return this.pm.OnControlEvent(this.consts.get('PHYEVENT_DRILLDOWN_LIST'), controlName, index);
        } // else lets assume it is form applet


        var control = this._getControl(controlName);

        if (!control) {
          throw new Error("[NB] Control ".concat(controlName, " is not found"));
        }

        return this.pm.OnControlEvent(this.consts.get('PHYEVENT_DRILLDOWN_FORM'), control); // const ps = control.GetMethodPropSet();
        // return this.pm.ExecuteMethod('InvokeMethod', 'DrillDown', ps);
      }
    }, {
      key: "drilldownPromised",
      value: function drilldownPromised(controlName) {
        var _this3 = this;

        return new Promise(function (resolve) {
          _this3.n19popupController.viewLoadedResolve = resolve;

          _this3.drilldown(controlName);
        });
      }
    }, {
      key: "gotoView",
      value: function gotoView(targetViewName, targetAppletName, id) {
        // TODO: check if current record exists this.getCurrentRecord
        var rowId = typeof id === 'undefined' ? this.getCurrentRecord(true).Id : id;
        var SWECmd = "GotoView&SWEView=".concat(targetViewName, "&SWEApplet0=").concat(targetAppletName);
        SWECmd += "&SWEBU=1&SWEKeepContext=FALSE&SWERowId0=".concat(rowId);
        SWECmd = encodeURI(SWECmd);
        return window.SiebelApp.S_App.GotoView(targetViewName, '', SWECmd, '');
      }
    }, {
      key: "gotoViewPromised",
      value: function gotoViewPromised(targetViewName, appletName, id) {
        return this.n19popupController.gotoView(targetViewName, appletName, id);
      }
    }, {
      key: "reInitPopup",
      value: function reInitPopup() {
        // do we need to keep also static ReInitPopup
        this.n19popupController.isPopupHidden = false;
        var popupPM = window.SiebelApp.S_App.GetPopupPM();
        popupPM.Init();
        popupPM.Setup();
      }
    }, {
      key: "pickRecordById",
      value: function pickRecordById(controlName, rowId) {
        return this.showPickApplet(controlName, true).then(function (obj) {
          return new Promise(function (resolve) {
            return setTimeout(function () {
              return resolve(obj);
            }, 0);
          });
        }).then(function (obj) {
          var found = obj.popupAppletN19.queryByIdSync(rowId);

          if (found !== 1) {
            throw new Error("[NB] The record ".concat(rowId, " is not found (").concat(found, ")"));
          }

          return obj.popupAppletN19.pickRecord();
        });
      }
    }, {
      key: "assocRecordsById",
      value: function assocRecordsById(controlName, arr, closeApplet) {
        var _this4 = this;

        return this.showMvgApplet(controlName, true).then(function (obj) {
          return new Promise(function (resolve) {
            return setTimeout(function () {
              return resolve(obj);
            }, 0);
          });
        }).then(function (obj) {
          return new Promise(function (resolve) {
            var found = obj.assocAppletN19.queryByIdSync(arr);

            if (found !== arr.length) {
              // TODO: throw an error?
              console.warn("[NB] The amount of found records(".concat(found, ") does not match to input array length(").concat(arr.length, ")"));
            }

            if (found > 0) {
              obj.popupAppletN19.addAllRecords();
            }

            if (closeApplet) {
              _this4.closePopupApplet();

              resolve(found);
            } else {
              obj.found = found;
              resolve(obj);
            }
          });
        });
      }
    }], [{
      key: "ReInitPopup",
      value: function ReInitPopup() {
        // could be removed in the next version
        var popupPM = window.SiebelApp.S_App.GetPopupPM();
        popupPM.Init();
        popupPM.Setup();
      }
    }, {
      key: "CreatePopupNB",
      value: function CreatePopupNB(settings) {
        return new N19popupApplet(settings);
      }
    }]);

    return Nexus;
  }(N19baseApplet);

  return Nexus;

}());
