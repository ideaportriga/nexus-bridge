/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _n19popup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./n19popup */ "./src/n19popup.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// for now only for form and list applets


SiebelAppFacade.N19Helper =
/*#__PURE__*/
function () {
  function _class(settings) {
    var _this = this;

    _classCallCheck(this, _class);

    this.consts = SiebelJS.Dependency('SiebelApp.Constants');
    this.pm = settings.pm;
    this.isPopup = settings.isPopup;
    this.appletName = this.pm.Get('GetName');
    this.view = SiebelApp.S_App.GetActiveView();
    this.viewName = this.view.GetName();
    this.applet = SiebelApp.S_App.GetActiveView().GetAppletMap()[this.appletName];
    this.isListApplet = typeof this.applet.GetListOfColumns === 'function';
    this.appletId = "s_".concat(this.pm.Get('GetFullId'), "_div");
    this.required = []; // will be empty for list applet

    this.lov = {}; // populate the required array for form applets

    if (!this.isListApplet) {
      var appletInputs = document.getElementById(this.appletId).querySelectorAll('input');

      for (var i = 0; i < appletInputs.length; i += 1) {
        if (appletInputs[i].attributes['aria-required']) {
          this.required.push(appletInputs[i].attributes.name.nodeValue);
        }
      }
    } // listener to get dynamic LOVs


    this.pm.AttachNotificationHandler(this.consts.get('SWE_PROP_BC_NOTI_GENERIC'), function (propSet) {
      var type = propSet.GetProperty(_this.consts.get('SWE_PROP_NOTI_TYPE'));

      if (type === 'GetQuickPickInfo') {
        var arr = [];
        CCFMiscUtil_StringToArray(propSet.GetProperty(_this.consts.get('SWE_PROP_ARGS_ARRAY')), arr);

        if (_this.viewName === arr[1] && _this.appletName === arr[2]) {
          _this.lov[arr[3]] = arr.splice(5).filter(function (el) {
            return el !== '';
          });
        }
      }
    }); // eslint-disable-next-line no-console

    console.log('N19Helper started....', this.appletName); // instantinate the n19popup

    this.n19popup = null;

    if (!this.isPopup) {
      if (!SiebelAppFacade.N19popup) {
        SiebelAppFacade.N19popup = new _n19popup__WEBPACK_IMPORTED_MODULE_0__["default"]();
      }

      this.n19popup = SiebelAppFacade.N19popup;
    }
  }

  _createClass(_class, [{
    key: "getApplet",
    value: function getApplet() {
      return this.applet;
    }
  }, {
    key: "_getControl",
    value: function _getControl(name) {
      return this.applet.GetControl(name);
    }
  }, {
    key: "returnControls",
    value: function returnControls() {
      if (this.isListApplet) {
        return this.applet.GetListOfColumns();
      }

      return this.applet.GetControls(); // the same - ? // return pm.Get('GetControls');
    }
  }, {
    key: "canInvokeMethod",
    value: function canInvokeMethod(method) {
      return this.pm.ExecuteMethod('CanInvokeMethod', method);
    } // called into the getControls to reduce the amount of the returned controls

  }, {
    key: "_isSkipControl",
    value: function _isSkipControl(type) {
      // https://docs.oracle.com/cd/E74890_01/books/ConfigOpenUI/appendix_a_api002.htm
      // maybe we need to exclude more types
      return type === this.consts.get('SWE_PST_BUTTON_CTRL') || type === this.consts.get('SWE_CTRL_LINK') || type === this.consts.get('SWE_CTRL_PLAINTEXT') || type === 'null'; // GetUiType returns string
    }
  }, {
    key: "_isRequired",
    value: function _isRequired(inputName) {
      // required is empty for list applets
      return this.required.indexOf(inputName) > -1;
    }
  }, {
    key: "_getStaticLOV",
    value: function _getStaticLOV(arr) {
      var ret = [];

      for (var i = 0; i < arr.length; i += 1) {
        ret.push(arr[i].propArray);
      }

      return ret;
    }
  }, {
    key: "_setActiveControl",
    value: function _setActiveControl(name) {
      return this.applet.SetActiveControl(this._getControl(name));
    }
  }, {
    key: "showPopupApplet",
    value: function showPopupApplet(name, hide, cb) {
      if (!this.n19popup) {
        // if not initialized it is a popup (isPopup was true in constructor)
        throw new Error('Openning popup on the popup is not supported now');
      }

      if (!this.n19popup.canOpenPopup()) {
        return false;
      }

      this.view.SetActiveAppletInternal(this.applet); // or SetActiveApplet
      // todo : check if control is valid

      this._setActiveControl(name);

      return this.n19popup.showPopupApplet(hide, cb, this.pm);
    }
  }, {
    key: "showMvgApplet",
    value: function showMvgApplet(name, hide, cb) {
      return this.showPopupApplet(name, hide, cb);
    }
  }, {
    key: "showPickApplet",
    value: function showPickApplet(name, hide, cb) {
      return this.showPopupApplet(name, hide, cb);
    }
  }, {
    key: "getControls",
    value: function getControls() {
      var controls = {};
      var appletControls = this.returnControls();
      var arr = Object.keys(appletControls);

      for (var i = 0; i < arr.length; i += 1) {
        var control = appletControls[arr[i]];
        var controlUiType = control.GetUIType();

        if (this._isSkipControl(controlUiType)) {
          continue; // eslint-disable-line no-continue
        }

        var controlName = control.GetName();
        var controlInputName = control.GetInputName();
        var obj = {
          name: controlName,
          label: control.GetDisplayName(),
          uiType: controlUiType,
          required: this._isRequired(controlInputName),
          boundedPick: control.IsBoundedPick() === '1',
          staticPick: control.IsStaticBounded() === '1',
          pickApplet: control.GetPickApplet(),
          inputName: controlInputName,
          isPostChanges: control.IsPostChanges(),
          maxSize: control.GetMaxSize(),
          maxChars: control.GetMaxChars(),
          fieldName: control.GetFieldName(),
          isLink: this.pm.ExecuteMethod('CanNavigate', controlName)
        };

        if (this.isListApplet) {
          // ?
          obj.readOnly = !this.pm.ExecuteMethod('CanUpdate', this.pm.GetRenderer().GetColumnHelper().GetActualControlName(controlName));
        } else {
          obj.readOnly = !this.pm.ExecuteMethod('CanUpdate', controlName);
        } // add values to be displayed in the static pick list


        if (obj.staticPick) {
          obj.staticLOV = this._getStaticLOV(control.GetRadioGroupPropSet().childArray);
          obj.lovs = obj.staticLOV.reduce(function (accumulator, currentValue) {
            accumulator.push({
              lic: currentValue.FieldValue,
              val: currentValue.DisplayName
            });
            return accumulator;
          }, []);
        }

        controls[controlName] = obj;
      }

      return controls;
    }
  }, {
    key: "getRecordSet",
    value: function getRecordSet() {
      return this.pm.Get('GetRecordSet');
    }
  }, {
    key: "getRawRecordSet",
    value: function getRawRecordSet() {
      return this.pm.Get('GetRawRecordSet');
    }
  }, {
    key: "getRowListRowCount",
    value: function getRowListRowCount() {
      // how much applet can display (specified in Siebel Tools)
      // 10/20
      return this.pm.Get('GetRowListRowCount');
    }
  }, {
    key: "getNumRows",
    value: function getNumRows() {
      // visible in applet
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
      } // const ps = SiebelApp.S_App.NewPropertySet();
      // ps.SetProperty('SWEApplet', this.appletName);
      // ps.SetProperty('SWEView', this.viewName);
      // const ret = this.applet.InvokeControlMethod(method, ps, {});
      // const ret = this.applet.InvokeMethod(method, ps, false); // false makes it synchronous


      var ret = this.pm.ExecuteMethod('InvokeMethod', method, null, false); // false makes it synchronous

      return ret;
    }
  }, {
    key: "nextRecord",
    value: function nextRecord() {
      // returns undefined for GotoNext when navigation was successful
      // return false if the last record achieved
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
    value: function positionOnRow(index) {
      if (this.isListApplet) {
        if (!this.pm.ExecuteMethod('CanInvokeMethod', 'PositionOnRow')) {
          return false;
        }

        if (this.getNumRows() < index + 1) {
          return false;
        }

        return this.pm.ExecuteMethod('HandleRowSelect', index, false, false);
      }

      return false;
    }
  }, {
    key: "prevRecord",
    value: function prevRecord() {
      if (this.isListApplet) {
        return this.positionOnRow(this.pm.Get('GetSelection') - 1);
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
    key: "_invokeCommandManager",
    value: function _invokeCommandManager(cmd, f) {
      this.view.SetActiveAppletInternal(this.applet); // maybe we don't need to set active applet if send the command as below
      // "*Browser Applet* *UndoRecord*Service Request Detail Applet* "

      var ai = {
        scope: {
          cb: function cb() {
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            // eslint-disable-line func-names
            console.log('response in callback', cmd, args); // eslint-disable-line no-console

            if (args[3]) {
              console.log(cmd, 'was successful'); // eslint-disable-line no-console

              if (typeof f === 'function') {
                f(cmd);
              }
            } else {
              console.log(cmd, 'WAS NOT successful'); // eslint-disable-line no-console
            }
          }
        }
      }; // todo: Do we always need to sent true

      return SiebelApp.CommandManager.GetInstance().InvokeCommand.call(null, cmd, true, ai);
    }
  }, {
    key: "newRecord",
    value: function newRecord(cb) {
      return this._invokeCommandManager('*Browser Applet* *NewRecord* * ', cb);
    }
  }, {
    key: "newRecordSync",
    value: function newRecordSync() {
      return this.pm.ExecuteMethod('InvokeMethod', 'NewRecord', null, false);
    }
  }, {
    key: "undoRecord",
    value: function undoRecord(cb) {
      return this._invokeCommandManager('*Browser Applet* *UndoRecord* * ', cb);
    }
  }, {
    key: "writeRecord",
    value: function writeRecord(cb) {
      return this._invokeCommandManager('*Browser Applet* *WriteRecord* * ', cb);
    }
  }, {
    key: "writeRecordSync",
    value: function writeRecordSync() {
      return this.pm.ExecuteMethod('InvokeMethod', 'WriteRecord', null, false);
    }
  }, {
    key: "deleteRecord",
    value: function deleteRecord(cb) {
      console.log(_typeof(cb)); // eslint-disable-line no-console

      return this.pm.ExecuteMethod('InvokeMethod', 'DeleteRecord', null, false); // return _invokeCommandManager('*Browser Applet* *DeleteRecord* * ', cb);
    }
  }, {
    key: "_getValueForControl",
    value: function _getValueForControl(controlUiType, value) {
      // from external system
      // TODO: DateTime, numbers, and phones
      if (this.consts.get('SWE_CTRL_CHECKBOX') === controlUiType) {
        // convert true/false => Y/N
        // do we want to support setting to null
        value = value ? 'Y' : 'N'; // eslint-disable-line no-param-reassign
      }

      return value;
    }
  }, {
    key: "setControlValue",
    value: function setControlValue(name, value) {
      // TODO: If value is null, nothing happens, should we convert null to ''?
      var control = this._getControl(name); // TODO: Check if control is found


      value = this._getValueForControl(control.GetUIType(), value); // eslint-disable-line no-param-reassign
      // TODO: should we use SetCellValue for list applets?

      this.pm.OnControlEvent(this.consts.get('PHYEVENT_CONTROL_FOCUS'), control);
      var ret = this.pm.OnControlEvent(this.consts.get('PHYEVENT_CONTROL_BLUR'), control, value);

      if (!ret) {
        console.log("Value ".concat(value, " was not set for ").concat(control.toString())); // eslint-disable-line no-console
        // todo: do we need to put back the old value
      }

      return ret;
    }
  }, {
    key: "getDynamicLOV",
    value: function getDynamicLOV(name) {
      var control = this._getControl(name);

      var controlInputName = control.GetInputName();
      this.lov[controlInputName] = {};
      var ps = SiebelApp.S_App.NewPropertySet();
      ps.SetProperty('SWEField', controlInputName);
      ps.SetProperty('SWEJI', false);
      this.applet.InvokeMethod('GetQuickPickInfo', ps); // is it possible to get something different than true

      return this.lov[controlInputName];
    }
  }, {
    key: "getStaticLOV",
    value: function getStaticLOV(name) {
      var control = this._getControl(name);

      var ret = [];

      if ('1' === control.IsStaticBounded()) {
        var arr = this._getStaticLOV(control.GetRadioGroupPropSet().childArray);

        for (var i = 0; i < arr.length; i += 1) {
          ret.push(arr[i].DisplayName);
        }

        ret.sort();
      }

      return ret;
    }
  }, {
    key: "getControlValue",
    value: function getControlValue(controlUiType, value) {
      // to be exposed externally
      // todo: datetime
      var ret = value;

      if (this.consts.get('SWE_CTRL_CHECKBOX') === controlUiType) {
        // convert Y/N/null -> true/false/null
        // do we need to send null?
        switch (value) {
          case 'Y':
            ret = true;
            break;

          case 'N':
            ret = false;
            break;

          default:
            ret = null;
        }
      }

      return ret;
    }
  }, {
    key: "getCurrentRecord",
    value: function getCurrentRecord(raw) {
      var index = this.getSelection(); // todo: check if record exists

      if (raw) {
        return this.pm.Get('GetRawRecordSet')[index];
      }

      return this.pm.Get('GetRecordSet')[index];
    } // todo : should we have a method that accepts a list of the fields?

  }, {
    key: "getCurrentRecordModel",
    value: function getCurrentRecordModel(_controls) {
      if (!_controls) {
        return false;
      }

      var arr = Object.keys(_controls);
      var index = this.getSelection();
      var appletControls = this.returnControls();
      _controls.isRecord = index > -1; // eslint-disable-line no-param-reassign

      var obj = {};

      if (_controls.isRecord) {
        obj = this.getRecordSet()[index];
      }

      for (var i = 0; i < arr.length; i += 1) {
        var control = appletControls[arr[i]];

        if (typeof control !== 'undefined') {
          var controlName = control.GetName();
          var controlInputName = control.GetInputName();
          var controlFieldName = control.GetFieldName();

          if (_controls.isRecord) {
            _controls[arr[i]] = {
              // eslint-disable-line no-param-reassign
              value: this.getControlValue(control.GetUIType(), obj[controlFieldName]),
              readonly: !this.pm.ExecuteMethod('CanUpdate', controlName),
              isLink: this.pm.ExecuteMethod('CanNavigate', controlName),
              label: control.GetDisplayName(),
              isPostChanges: control.IsPostChanges(),
              required: this._isRequired(controlInputName),
              maxSize: control.GetMaxSize()
            };
          } else {
            // no record
            _controls[arr[i]] = {
              // eslint-disable-line no-param-reassign
              value: '',
              // is it a right value
              readonly: true,
              isLink: false,
              label: control.GetDisplayName(),
              isPostChanges: control.IsPostChanges(),
              required: this._isRequired(controlInputName),
              maxSize: control.GetMaxSize()
            };
          }
        }
      } // todo: do we need to return true or better to return also the object?


      return true;
    }
  }, {
    key: "_getControlInputNameForIdQuery",
    value: function _getControlInputNameForIdQuery() {
      var appletControls = this.returnControls();
      var arr = Object.keys(appletControls);

      for (var i = 0; i < arr.length; i += 1) {
        var control = appletControls[arr[i]];
        var controlUiType = control.GetUIType();

        if (!this._isSkipControl(controlUiType)) {
          // skipping also JCheckbox
          // todo: do we need to skip also date?
          if (controlUiType !== this.consts.get('SWE_CTRL_CHECKBOX')) {
            return control.GetInputName();
          }
        }
      }

      throw new Error('cannot find a control for query');
    }
  }, {
    key: "_newQuery",
    value: function _newQuery() {
      return this.pm.ExecuteMethod('InvokeMethod', 'NewQuery', null, false);
    }
  }, {
    key: "queryById",
    value: function queryById(rowId, cb) {
      // maybe check if it is already in query mode
      this._newQuery(); // ?


      var method = 'ExecuteQuery';
      var ai = {
        scope: this,
        async: true,
        mask: false,
        selfbusy: false,
        args: []
      };

      if (typeof cb === 'function') {
        ai.cb = cb;
      }

      var psOutput = SiebelApp.S_App.NewPropertySet();
      var psInput = SiebelApp.S_App.NewPropertySet();
      psInput.SetProperty(this._getControlInputNameForIdQuery(), "Id=\"".concat(rowId, "\""));
      ai.args.push(method);
      ai.args.push(psInput.Clone());
      return this.applet.CallServerApplet(method, psInput, psOutput, ai);
    }
  }, {
    key: "query",
    value: function query(params, cb) {
      // maybe skip the new query if Object.keys(params).length is 0
      // maybe check if it is already in query mode
      this._newQuery();

      var method = 'ExecuteQuery';
      var ai = {
        scope: this,
        async: true,
        mask: false,
        selfbusy: false,
        args: []
      };

      if (typeof cb === 'function') {
        ai.cb = cb;
      }

      var psOutput = SiebelApp.S_App.NewPropertySet();
      var psInput = SiebelApp.S_App.NewPropertySet();
      var arr = Object.keys(params);

      var _controls = this.returnControls();

      for (var i = 0; i < arr.length; i += 1) {
        var control = _controls[arr[i]];
        psInput.SetProperty(control.GetInputName(), this._getValueForControl(control.GetUIType(), params[arr[i]]));
      }

      ai.args.push(method);
      ai.args.push(psInput.Clone());
      return this.applet.CallServerApplet(method, psInput, psOutput, ai);
    }
  }, {
    key: "getFieldToControlsMap",
    value: function getFieldToControlsMap(_controls) {
      var ret = {};
      var appletControls = this.returnControls();
      var arr = Object.keys(_controls);

      for (var i = 0; i < arr.length; i += 1) {
        var control = appletControls[arr[i]];
        ret[control.GetFieldName()] = {
          name: control.GetName(),
          isPostChanges: control.IsPostChanges(),
          uiType: control.GetUIType()
        };
      }

      return ret;
    }
  }, {
    key: "drilldown",
    value: function drilldown(name) {
      // todo: check isLink of control?
      // name is control name, not field
      // index is not effective, and drilldown anyway happens on last selected record
      if (!this.isListApplet) {
        return false;
      }

      var index = this.getSelection();
      return this.pm.ExecuteMethod('OnDrillDown', name, index);
    }
  }, {
    key: "gotoView",
    value: function gotoView(targetViewName, targetAppletName, id) {
      // todo: get the applet name from the view definition
      var rowId = typeof id === 'undefined' ? this.getCurrentRecord(true).Id : id;
      var SWECmd = "GotoView&SWEView=".concat(targetViewName, "&SWEApplet0=").concat(targetAppletName);
      SWECmd += "&SWEBU=1&SWEKeepContext=FALSE&SWERowId0=".concat(rowId);
      SWECmd = encodeURI(SWECmd);
      SiebelApp.S_App.GotoView(targetViewName, '', SWECmd, '');
    }
  }, {
    key: "insertPending",
    value: function insertPending() {
      return this.pm.Get('GetBusComp').insertPending;
    }
  }, {
    key: "requery",
    value: function requery(name) {
      var service = SiebelApp.S_App.GetService('N19 BS');

      if (service) {
        var inPropSet = SiebelApp.S_App.NewPropertySet();
        inPropSet.SetProperty('name', name);
        service.InvokeMethod('Requery', inPropSet, {});
      }
    }
  }, {
    key: "refresh",
    value: function refresh(name) {
      var service = SiebelApp.S_App.GetService('N19 BS');

      if (service) {
        var inPropSet = SiebelApp.S_App.NewPropertySet();
        inPropSet.SetProperty('name', name);
        service.InvokeMethod('Refresh', inPropSet, {});
      }
    }
  }, {
    key: "pickRecord",
    value: function pickRecord() {
      // todo : check if it a pick applet
      // todo : check CanInokeMethod
      return this.pm.ExecuteMethod('InvokeMethod', 'PickRecord');
    }
  }, {
    key: "deleteRecords",
    value: function deleteRecords(cb) {
      // method is not allowed to delete the primary
      //  in this case it returns "Method DeleteRecords is not allowed here" SBL-UIF-00348
      // todo: check canInvokeMethod ??
      // todo: check if it is a Mvg?
      var ret = this.pm.ExecuteMethod('InvokeMethod', 'DeleteRecords');

      if (typeof cb === 'function') {
        cb();
      }

      return ret;
    }
  }, {
    key: "addRecords",
    value: function addRecords(cb) {
      // check if the applet is MVG, canInvokeMethod
      var ret = this.pm.ExecuteMethod('InvokeMethod', 'AddRecords');

      if (typeof cb === 'function') {
        cb();
      }

      return ret;
    }
  }, {
    key: "_getActiveControlName",
    value: function _getActiveControlName() {
      var activeControl = this.pm.Get('GetActiveControl');
      return activeControl ? activeControl.GetName() : '';
    }
  }, {
    key: "_getViewTitle",
    value: function _getViewTitle() {
      return this.view.GetTitle(); // how GetViewSummary is different
    }
  }, {
    key: "_getAppletTitle",
    value: function _getAppletTitle() {
      return this.applet.GetAppletLabel(); // how GetAppletSummary is different
    }
  }, {
    key: "_clearQuery",
    value: function _clearQuery() {
      // todo : could we get it calling the query methods with empty object
      this.pm.ExecuteMethod('InvokeMethod', 'NewQuery', null, false);
      this.pm.ExecuteMethod('InvokeMethod', 'ExecuteQuery', null, false);
    }
  }, {
    key: "_isInQueryMode",
    value: function _isInQueryMode() {
      return this.pm.Get('IsInQueryMode');
    }
  }, {
    key: "_NotifyNewDataWS",
    value: function _NotifyNewDataWS(name) {
      // todo: we don't need this method if we don't have any Siebel applets
      return this.applet.NotifyNewDataWS(name);
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

  return _class;
}();

/***/ }),

/***/ "./src/n19popup.js":
/*!*************************!*\
  !*** ./src/n19popup.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var N19popup =
/*#__PURE__*/
function () {
  function N19popup() {
    var _this = this;

    _classCallCheck(this, N19popup);

    this.consts = SiebelJS.Dependency('SiebelApp.Constants');
    this.isPopupHidden = false;
    this.resolvePromise = null;
    this.popupAppletN19 = null;
    this.assocAppletN19 = null;
    console.log("".concat(this.constructor.name, " started...")); // eslint-disable-line no-console
    // it will be a singleton, so there is no cleanup

    this.N19processNewPopup = SiebelApp.S_App.ProcessNewPopup; // todo : remove it from SiebelAppFacade

    SiebelApp.S_App.ProcessNewPopup = function (ps) {
      var ret;

      if (_this.isPopupHidden) {
        ret = _this.processNewPopup(ps);
      } else {
        ret = _this.N19processNewPopup.call(SiebelApp.S_App, ps);
      }

      return ret;
    };

    this.N19viewLoaded = SiebelApp.contentUpdater.viewLoaded;

    SiebelApp.contentUpdater.viewLoaded = function () {
      var _this$N19viewLoaded;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var ret = (_this$N19viewLoaded = _this.N19viewLoaded).call.apply(_this$N19viewLoaded, [SiebelApp.contentUpdater].concat(args));

      if (typeof _this.resolvePromise === 'function') {
        var _this$isPopupOpen = _this.isPopupOpen(),
            appletName = _this$isPopupOpen.appletName; // todo: use here the properties set on promiseResolving?


        if (!appletName) {
          throw new Error('Open Applet Name is not found in resolvePromise');
        }

        var applet = _this.getPopupApplet(appletName);

        var pm = applet.GetPModel(); // todo: avoid this circularity

        _this.popupAppletN19 = new SiebelAppFacade.N19Helper({
          pm: pm,
          isPopup: true
        }); // todo : split N19Helper into 2 classes

        var obj = {
          appletName: appletName,
          popupAppletN19: _this.popupAppletN19
        }; // check if we have assoc
        // we assume it is always assoc applet, but what about opening popup on the top of another - not tested it

        var assocApplet = applet.GetPopupApplet();

        if (assocApplet) {
          _this.assocAppletN19 = new SiebelAppFacade.N19Helper({
            pm: assocApplet.GetPModel(),
            isPopup: true
          });
          obj.assocAppletN19 = _this.assocAppletN19;
        }

        _this.resolvePromise(obj);

        _this.resolvePromise = null;
      }

      return ret;
    };
  }

  _createClass(N19popup, [{
    key: "canOpenPopup",
    value: function canOpenPopup() {
      return typeof this.resolvePromise !== 'function';
    }
  }, {
    key: "processNewPopup",
    value: function processNewPopup(ps) {
      SiebelApp.S_App.SetShowNewPage(!0);
      var popupPM = SiebelApp.S_App.GetPopupPM();
      popupPM.SetProperty('CanProcessLayout', !1);
      popupPM.SetProperty('isPopupPick', false);
      popupPM.SetProperty('isPopupMVGAssoc', false);
      popupPM.SetProperty('isPopupMVGSelected', false);
      popupPM.SetProperty('isPopupAssoc', false);
      popupPM.SetProperty('currPopups', []);
      popupPM.SetProperty('isSIPopup', ps.GetProperty(this.consts.get('SWE_IS_SI_POPUP')));
      popupPM.SetProperty('isPrevPopupVisible', !1);

      if (!popupPM.GetRenderer()) {
        popupPM.Setup();
      }

      var activeView = SiebelApp.S_App.GetActiveView();

      if (activeView) {
        var activeApplet = activeView.GetActiveApplet();

        if (activeApplet) {
          activeView.SetActiveAppletBeforePopup(activeApplet);
        }
      }

      popupPM.AddProperty('state', 'visible'); // todo: we need also to restore the PM

      var url = ps.GetProperty('URL');
      url = SiebelApp.S_App.GetPageURL() + url.split('start.swe')[1];
      popupPM.SetProperty('url', url);
      return 'refreshpopup';
    }
  }, {
    key: "reInitPopup",
    value: function reInitPopup() {
      var popupPM = SiebelApp.S_App.GetPopupPM();
      popupPM.Init();
      popupPM.Setup();
    }
  }, {
    key: "closePopupApplet",
    value: function closePopupApplet(applet) {
      var isPopupApplet = typeof applet.GetPopupAppletName === 'function';
      var isPickApplet = typeof applet.GetPickAppletName === 'function';

      if (isPopupApplet || isPickApplet) {
        // todo : check canInvokeMethod
        var ret = applet.GetPModel().ExecuteMethod('InvokeMethod', 'CloseApplet'); // it could be better if we don't have a Siebel Applet on the view
        // in this case, we would not need to reInitPopup

        if (this.isPopupHidden) {
          this.reInitPopup();
        } //


        this.popupAppletN19 = null;
        this.assocAppletN19 = null;
        return ret;
      }

      throw new Error('This applet is neither pick nor popup');
    }
  }, {
    key: "isPopupOpen",
    value: function isPopupOpen() {
      // todo: when we set some properties on resolve, do we need this method now
      // todo: here reuse the properties that set when the Promise resolved
      var currPopups = SiebelApp.S_App.GetPopupPM().Get('currPopups');

      if (0 === currPopups.length) {
        return {
          isOpen: false
        };
      }

      if (1 === currPopups.length) {
        return {
          isOpen: true,
          appletName: currPopups[0].GetName(),
          controlName: currPopups[0].GetPopupControl()
        };
      }

      if (2 === currPopups.length) {
        // this is a shuttle or
        // maybe we opened a popup applet on the top of pick applet - TODO: // test it
        //      test it  - maybe we need to close the several applets
        for (var i = 0; i < currPopups.length; i += 1) {
          if (typeof currPopups[1].GetPopupAppletName === 'function') {
            return {
              isOpen: true,
              appletName: currPopups[i].GetName(),
              controlName: currPopups[i].GetPopupControl()
            };
          }
        }

        throw new Error('Mvg applet is not found...');
      } // todo: test if we can get to here
      //    maybe when we open a new applet on top of the shuttle applet


      throw new Error('should not be here...');
    }
  }, {
    key: "getPopupAppletPM",
    value: function getPopupAppletPM(appletName) {
      var applet = this.getPopupApplet(appletName);
      return applet.GetPModel();
    }
  }, {
    key: "getPopupApplet",
    value: function getPopupApplet(appletName) {
      var applet = SiebelApp.S_App.GetActiveView().GetAppletMap()[appletName];

      if (!applet) {
        throw new Error("The ".concat(appletName, " is not found in applet map"));
      }

      return applet;
    }
  }, {
    key: "showPopupApplet",
    value: function showPopupApplet(hide, cb, pm) {
      var _this2 = this;

      var _this$isPopupOpen2 = this.isPopupOpen(),
          isOpen = _this$isPopupOpen2.isOpen,
          appletName = _this$isPopupOpen2.appletName; // todo: use the properties set on promise resolving?


      if (isOpen) {
        // this code will close the applet even if this applet was originated by another applet
        console.log("closing ".concat(appletName, " in _showPopupApplet...")); // eslint-disable-line no-console
        // maybe do not close if the applet to be opened if the same as already opened?

        this.closePopupApplet(this.getPopupApplet(appletName)); // todo: check if got it successfully closed?
      }

      this.isPopupHidden = !!hide; // todo: do we need to keep the show the applet

      pm.ExecuteMethod('InvokeMethod', 'EditPopup', null, false); // seems we can also to call EditField
      // eslint-disable-next-line no-return-assign

      var ret = new Promise(function (resolve) {
        return _this2.resolvePromise = resolve;
      }); // eslint-disable-line no-param-assign

      if (typeof cb === 'function') {
        return ret.then(cb);
      }

      return ret;
    }
  }]);

  return N19popup;
}();

/* harmony default export */ __webpack_exports__["default"] = (N19popup);

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\apps\n19helper/src/index.js */"./src/index.js");


/***/ })

/******/ });
//# sourceMappingURL=N19Helper.js.map