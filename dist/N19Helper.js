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

/***/ "./node_modules/core-js/modules/_a-function.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_a-function.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_add-to-unscopables.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_add-to-unscopables.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('unscopables');

var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(ArrayProto, UNSCOPABLES, {});

module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_an-instance.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_an-instance.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || forbiddenField !== undefined && forbiddenField in it) {
    throw TypeError(name + ': incorrect invocation!');
  }

  return it;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_an-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_an-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_array-includes.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-includes.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");

var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");

var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");

module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value; // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare

    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++]; // eslint-disable-next-line no-self-compare

      if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
    } else for (; length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    }
    return !IS_INCLUDES && -1;
  };
};

/***/ }),

/***/ "./node_modules/core-js/modules/_classof.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_classof.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");

var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag'); // ES3 wrong here


var ARG = cof(function () {
  return arguments;
}()) == 'Arguments'; // fallback for IE11 Script Access Denied error

var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) {
    /* empty */
  }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null' // @@toStringTag case
  : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T // builtinTag case
  : ARG ? cof(O) // ES3 arguments fallback
  : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_cof.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_cof.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_collection-strong.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_collection-strong.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");

var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");

var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");

var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");

var $iterDefine = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js");

var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/modules/_iter-step.js");

var setSpecies = __webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js");

var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");

var fastKey = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").fastKey;

var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");

var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index]; // frozen object case

  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME; // collection type

      that._i = create(null); // index

      that._f = undefined; // first entry

      that._l = undefined; // last entry

      that[SIZE] = 0; // size

      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }

        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);

        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        }

        return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn
      /* , that = undefined */
      ) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;

        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this); // revert to the last existing entry

          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index; // change existing entry

    if (entry) {
      entry.v = value; // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true),
        // <- index
        k: key,
        // <- key
        v: value,
        // <- value
        p: prev = that._l,
        // <- previous entry
        n: undefined,
        // <- next entry
        r: false // <- removed

      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++; // add to index

      if (index !== 'F') that._i[index] = entry;
    }

    return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target

      this._k = kind; // kind

      this._l = undefined; // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l; // revert to the last existing entry

      while (entry && entry.r) entry = entry.p; // get next entry


      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      } // return step by kind


      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true); // add [@@species], 23.1.2.2, 23.2.2.2

    setSpecies(NAME);
  }
};

/***/ }),

/***/ "./node_modules/core-js/modules/_collection.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_collection.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");

var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");

var meta = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js");

var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");

var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");

var $iterDetect = __webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/modules/_iter-detect.js");

var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");

var inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ "./node_modules/core-js/modules/_inherit-if-required.js");

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};

  var fixMethod = function (KEY) {
    var fn = proto[KEY];
    redefine(proto, KEY, KEY == 'delete' ? function (a) {
      return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
    } : KEY == 'has' ? function has(a) {
      return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
    } : KEY == 'get' ? function get(a) {
      return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
    } : KEY == 'add' ? function add(a) {
      fn.call(this, a === 0 ? 0 : a);
      return this;
    } : function set(a, b) {
      fn.call(this, a === 0 ? 0 : a, b);
      return this;
    });
  };

  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    var instance = new C(); // early implementations not supports chaining

    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance; // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false

    var THROWS_ON_PRIMITIVES = fails(function () {
      instance.has(1);
    }); // most early implementations doesn't supports iterables, most modern - not close it correctly

    var ACCEPT_ITERABLES = $iterDetect(function (iter) {
      new C(iter);
    }); // eslint-disable-line no-new
    // for early implementations -0 and +0 not the same

    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new C();
      var index = 5;

      while (index--) $instance[ADDER](index, index);

      return !$instance.has(-0);
    });

    if (!ACCEPT_ITERABLES) {
      C = wrapper(function (target, iterable) {
        anInstance(target, C, NAME);
        var that = inheritIfRequired(new Base(), target, C);
        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }

    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }

    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER); // weak collections should not contains .clear method

    if (IS_WEAK && proto.clear) delete proto.clear;
  }

  setToStringTag(C, NAME);
  O[NAME] = C;
  $export($export.G + $export.W + $export.F * (C != Base), O);
  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);
  return C;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_core.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_core.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = {
  version: '2.5.7'
};
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

/***/ }),

/***/ "./node_modules/core-js/modules/_create-property.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_create-property.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");

var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));else object[index] = value;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_ctx.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_ctx.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");

module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;

  switch (length) {
    case 1:
      return function (a) {
        return fn.call(that, a);
      };

    case 2:
      return function (a, b) {
        return fn.call(that, a, b);
      };

    case 3:
      return function (a, b, c) {
        return fn.call(that, a, b, c);
      };
  }

  return function ()
  /* ...args */
  {
    return fn.apply(that, arguments);
  };
};

/***/ }),

/***/ "./node_modules/core-js/modules/_defined.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_defined.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_descriptors.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_descriptors.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', {
    get: function () {
      return 7;
    }
  }).a != 7;
});

/***/ }),

/***/ "./node_modules/core-js/modules/_dom-create.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_dom-create.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document; // typeof document.createElement is 'object' in old IE


var is = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return is ? document.createElement(it) : {};
};

/***/ }),

/***/ "./node_modules/core-js/modules/_enum-bug-keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-bug-keys.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');

/***/ }),

/***/ "./node_modules/core-js/modules/_enum-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-keys.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");

module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;

  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;

    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  }

  return result;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_export.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_export.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");

var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");

var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");

var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;

  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined; // export native or passed

    out = (own ? target : source)[key]; // bind timers to global for call from export context

    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out; // extend global

    if (target) redefine(target, key, out, type & $export.U); // export

    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};

global.core = core; // type bitmap

$export.F = 1; // forced

$export.G = 2; // global

$export.S = 4; // static

$export.P = 8; // proto

$export.B = 16; // bind

$export.W = 32; // wrap

$export.U = 64; // safe

$export.R = 128; // real proto method for `library`

module.exports = $export;

/***/ }),

/***/ "./node_modules/core-js/modules/_fails.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

/***/ }),

/***/ "./node_modules/core-js/modules/_fix-re-wks.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_fix-re-wks.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");

var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");

var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");

var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");

var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);
  var fns = exec(defined, SYMBOL, ''[KEY]);
  var strfn = fns[0];
  var rxfn = fns[1];

  if (fails(function () {
    var O = {};

    O[SYMBOL] = function () {
      return 7;
    };

    return ''[KEY](O) != 7;
  })) {
    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2 // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
    // 21.2.5.11 RegExp.prototype[@@split](string, limit)
    ? function (string, arg) {
      return rxfn.call(string, this, arg);
    } // 21.2.5.6 RegExp.prototype[@@match](string)
    // 21.2.5.9 RegExp.prototype[@@search](string)
    : function (string) {
      return rxfn.call(string, this);
    });
  }
};

/***/ }),

/***/ "./node_modules/core-js/modules/_flags.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_flags.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // 21.2.5.3 get RegExp.prototype.flags

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_for-of.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_for-of.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");

var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/core-js/modules/_iter-call.js");

var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/modules/_is-array-iter.js");

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");

var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/modules/core.get-iterator-method.js");

var BREAK = {};
var RETURN = {};

var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () {
    return iterable;
  } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!'); // fast case for arrays with default iterator

  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};

exports.BREAK = BREAK;
exports.RETURN = RETURN;

/***/ }),

/***/ "./node_modules/core-js/modules/_global.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self // eslint-disable-next-line no-new-func
: Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

/***/ }),

/***/ "./node_modules/core-js/modules/_has.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_has.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_hide.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");

var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_html.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_html.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;

module.exports = document && document.documentElement;

/***/ }),

/***/ "./node_modules/core-js/modules/_ie8-dom-define.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('div'), 'a', {
    get: function () {
      return 7;
    }
  }).a != 7;
});

/***/ }),

/***/ "./node_modules/core-js/modules/_inherit-if-required.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_inherit-if-required.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

var setPrototypeOf = __webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/modules/_set-proto.js").set;

module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;

  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  }

  return that;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_invoke.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_invoke.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;

  switch (args.length) {
    case 0:
      return un ? fn() : fn.call(that);

    case 1:
      return un ? fn(args[0]) : fn.call(that, args[0]);

    case 2:
      return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);

    case 3:
      return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);

    case 4:
      return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
  }

  return fn.apply(that, args);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_iobject.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_iobject.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js"); // eslint-disable-next-line no-prototype-builtins


module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_is-array-iter.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array-iter.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");

var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');

var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_is-array.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");

module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};

/***/ }),

/***/ "./node_modules/core-js/modules/_is-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),

/***/ "./node_modules/core-js/modules/_is-regexp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-regexp.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");

var MATCH = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('match');

module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};

/***/ }),

/***/ "./node_modules/core-js/modules/_iter-call.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-call.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value); // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};

/***/ }),

/***/ "./node_modules/core-js/modules/_iter-create.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-create.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");

var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");

var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");

var IteratorPrototype = {}; // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()

__webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator'), function () {
  return this;
});

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, {
    next: descriptor(1, next)
  });
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ }),

/***/ "./node_modules/core-js/modules/_iter-define.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-define.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");

var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");

var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");

var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/modules/_iter-create.js");

var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");

var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");

var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');

var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`

var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () {
  return this;
};

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);

  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];

    switch (kind) {
      case KEYS:
        return function keys() {
          return new Constructor(this, kind);
        };

      case VALUES:
        return function values() {
          return new Constructor(this, kind);
        };
    }

    return function entries() {
      return new Constructor(this, kind);
    };
  };

  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype; // Fix native

  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));

    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true); // fix for some old engines

      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  } // fix Array#{values, @@iterator}.name in V8 / FF


  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;

    $default = function values() {
      return $native.call(this);
    };
  } // Define iterator


  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  } // Plug for library


  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;

  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }

  return methods;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_iter-detect.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-detect.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');

var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();

  riter['return'] = function () {
    SAFE_CLOSING = true;
  }; // eslint-disable-next-line no-throw-literal


  Array.from(riter, function () {
    throw 2;
  });
} catch (e) {
  /* empty */
}

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;

  try {
    var arr = [7];
    var iter = arr[ITERATOR]();

    iter.next = function () {
      return {
        done: safe = true
      };
    };

    arr[ITERATOR] = function () {
      return iter;
    };

    exec(arr);
  } catch (e) {
    /* empty */
  }

  return safe;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_iter-step.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-step.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return {
    value: value,
    done: !!done
  };
};

/***/ }),

/***/ "./node_modules/core-js/modules/_iterators.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iterators.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};

/***/ }),

/***/ "./node_modules/core-js/modules/_library.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_library.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;

/***/ }),

/***/ "./node_modules/core-js/modules/_meta.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_meta.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('meta');

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");

var setDesc = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;

var id = 0;

var isExtensible = Object.isExtensible || function () {
  return true;
};

var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});

var setMeta = function (it) {
  setDesc(it, META, {
    value: {
      i: 'O' + ++id,
      // object ID
      w: {} // weak collections IDs

    }
  });
};

var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;

  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F'; // not necessary to add metadata

    if (!create) return 'E'; // add missing metadata

    setMeta(it); // return object ID
  }

  return it[META].i;
};

var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true; // not necessary to add metadata

    if (!create) return false; // add missing metadata

    setMeta(it); // return hash weak collections IDs
  }

  return it[META].w;
}; // add metadata on freeze-family methods calling


var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};

var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};

/***/ }),

/***/ "./node_modules/core-js/modules/_microtask.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_microtask.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");

var macrotask = __webpack_require__(/*! ./_task */ "./node_modules/core-js/modules/_task.js").set;

var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js")(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();

    while (head) {
      fn = head.fn;
      head = head.next;

      try {
        fn();
      } catch (e) {
        if (head) notify();else last = undefined;
        throw e;
      }
    }

    last = undefined;
    if (parent) parent.enter();
  }; // Node.js


  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    }; // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339

  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, {
      characterData: true
    }); // eslint-disable-line no-new

    notify = function () {
      node.data = toggle = !toggle;
    }; // environments with maybe non-completely correct, but existent Promise

  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);

    notify = function () {
      promise.then(flush);
    }; // for other environments - macrotask based on:
    // - setImmediate
    // - MessageChannel
    // - window.postMessag
    // - onreadystatechange
    // - setTimeout

  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = {
      fn: fn,
      next: undefined
    };
    if (last) last.next = task;

    if (!head) {
      head = task;
      notify();
    }

    last = task;
  };
};

/***/ }),

/***/ "./node_modules/core-js/modules/_new-promise-capability.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/_new-promise-capability.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // 25.4.1.5 NewPromiseCapability(C)

var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_object-assign.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-assign.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // 19.1.2.1 Object.assign(target, source, ...)

var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");

var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");

var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");

var $assign = Object.assign; // should work with symbols and should have deterministic property order (V8 bug)

module.exports = !$assign || __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  var A = {};
  var B = {}; // eslint-disable-next-line no-undef

  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) {
    B[k] = k;
  });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) {
  // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;

  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;

    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  }

  return T;
} : $assign;

/***/ }),

/***/ "./node_modules/core-js/modules/_object-create.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-create.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/modules/_object-dps.js");

var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");

var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');

var Empty = function () {
  /* empty */
};

var PROTOTYPE = 'prototype'; // Create object with fake `null` prototype: use iframe Object with cleared prototype

var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('iframe');

  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';

  __webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js").appendChild(iframe);

  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);

  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;

  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];

  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;

  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null; // add "__proto__" for Object.getPrototypeOf polyfill

    result[IE_PROTO] = O;
  } else result = createDict();

  return Properties === undefined ? result : dPs(result, Properties);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_object-dp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");

var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");

var dP = Object.defineProperty;
exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) {
    /* empty */
  }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_object-dps.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dps.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;

  while (length > i) dP.f(O, P = keys[i++], Properties[P]);

  return O;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopd.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopd.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");

var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");

var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");

var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");

var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");

var gOPD = Object.getOwnPropertyDescriptor;
exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) {
    /* empty */
  }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopn-ext.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn-ext.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");

var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f;

var toString = {}.toString;
var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};

/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopn.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");

var hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_object-gops.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gops.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;

/***/ }),

/***/ "./node_modules/core-js/modules/_object-gpo.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gpo.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");

var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");

var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');

var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];

  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  }

  return O instanceof Object ? ObjectProto : null;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys-internal.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys-internal.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");

var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");

var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(false);

var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;

  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key); // Don't enum bug & hidden keys


  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }

  return result;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");

var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_object-pie.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-pie.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;

/***/ }),

/***/ "./node_modules/core-js/modules/_object-sap.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-sap.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");

var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");

module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () {
    fn(1);
  }), 'Object', exp);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_object-to-array.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-to-array.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");

var isEnum = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js").f;

module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;

    while (length > i) if (isEnum.call(O, key = keys[i++])) {
      result.push(isEntries ? [key, O[key]] : O[key]);
    }

    return result;
  };
};

/***/ }),

/***/ "./node_modules/core-js/modules/_perform.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_perform.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return {
      e: false,
      v: exec()
    };
  } catch (e) {
    return {
      e: true,
      v: e
    };
  }
};

/***/ }),

/***/ "./node_modules/core-js/modules/_promise-resolve.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_promise-resolve.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

var newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/core-js/modules/_new-promise-capability.js");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_property-desc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_property-desc.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

/***/ }),

/***/ "./node_modules/core-js/modules/_redefine-all.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine-all.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");

module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);

  return target;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_redefine.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");

var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");

var SRC = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('src');

var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));

  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  } // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative

})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});

/***/ }),

/***/ "./node_modules/core-js/modules/_set-proto.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_set-proto.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.

/* eslint-disable no-proto */
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};

module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
  function (test, buggy, set) {
    try {
      set = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js")(Function.call, __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f(Object.prototype, '__proto__').set, 2);
      set(test, []);
      buggy = !(test instanceof Array);
    } catch (e) {
      buggy = true;
    }

    return function setPrototypeOf(O, proto) {
      check(O, proto);
      if (buggy) O.__proto__ = proto;else set(O, proto);
      return O;
    };
  }({}, false) : undefined),
  check: check
};

/***/ }),

/***/ "./node_modules/core-js/modules/_set-species.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_set-species.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");

var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");

var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () {
      return this;
    }
  });
};

/***/ }),

/***/ "./node_modules/core-js/modules/_set-to-string-tag.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-to-string-tag.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");

var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, {
    configurable: true,
    value: tag
  });
};

/***/ }),

/***/ "./node_modules/core-js/modules/_shared-key.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_shared-key.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('keys');

var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");

module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),

/***/ "./node_modules/core-js/modules/_shared.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_shared.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});

/***/ }),

/***/ "./node_modules/core-js/modules/_species-constructor.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_species-constructor.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");

var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');

module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_string-at.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-at.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");

var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js"); // true  -> String#at
// false -> String#codePointAt


module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

/***/ }),

/***/ "./node_modules/core-js/modules/_task.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_task.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");

var invoke = __webpack_require__(/*! ./_invoke */ "./node_modules/core-js/modules/_invoke.js");

var html = __webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js");

var cel = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js");

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");

var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;

var run = function () {
  var id = +this; // eslint-disable-next-line no-prototype-builtins

  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};

var listener = function (event) {
  run.call(event.data);
}; // Node.js 0.9+ & IE10+ has setImmediate, otherwise:


if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;

    while (arguments.length > i) args.push(arguments[i++]);

    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };

    defer(counter);
    return counter;
  };

  clearTask = function clearImmediate(id) {
    delete queue[id];
  }; // Node.js 0.8-


  if (__webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js")(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    }; // Sphere (JS game engine) Dispatch API

  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    }; // Browsers with MessageChannel, includes WebWorkers

  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1); // Browsers with postMessage, skip WebWorkers
    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };

    global.addEventListener('message', listener, false); // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    }; // Rest old browsers

  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}

module.exports = {
  set: setTask,
  clear: clearTask
};

/***/ }),

/***/ "./node_modules/core-js/modules/_to-absolute-index.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_to-absolute-index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");

var max = Math.max;
var min = Math.min;

module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_to-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-integer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;

module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_to-iobject.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-iobject.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");

var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");

module.exports = function (it) {
  return IObject(defined(it));
};

/***/ }),

/***/ "./node_modules/core-js/modules/_to-length.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-length.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");

var min = Math.min;

module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),

/***/ "./node_modules/core-js/modules/_to-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");

module.exports = function (it) {
  return Object(defined(it));
};

/***/ }),

/***/ "./node_modules/core-js/modules/_to-primitive.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_to-primitive.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js"); // instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string


module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),

/***/ "./node_modules/core-js/modules/_uid.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_uid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();

module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),

/***/ "./node_modules/core-js/modules/_user-agent.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_user-agent.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");

var navigator = global.navigator;
module.exports = navigator && navigator.userAgent || '';

/***/ }),

/***/ "./node_modules/core-js/modules/_validate-collection.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_validate-collection.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_wks-define.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_wks-define.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");

var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/modules/_wks-ext.js");

var defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;

module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, {
    value: wksExt.f(name)
  });
};

/***/ }),

/***/ "./node_modules/core-js/modules/_wks-ext.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_wks-ext.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");

/***/ }),

/***/ "./node_modules/core-js/modules/_wks.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_wks.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('wks');

var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");

var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Symbol;

var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] = USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ }),

/***/ "./node_modules/core-js/modules/core.get-iterator-method.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/core.get-iterator-method.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");

var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');

var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");

module.exports = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
};

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.from.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.from.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");

var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/core-js/modules/_iter-call.js");

var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/modules/_is-array-iter.js");

var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");

var createProperty = __webpack_require__(/*! ./_create-property */ "./node_modules/core-js/modules/_create-property.js");

var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/modules/core.get-iterator-method.js");

$export($export.S + $export.F * !__webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/modules/_iter-detect.js")(function (iter) {
  Array.from(iter);
}), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike
  /* , mapfn = undefined, thisArg = undefined */
  ) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2); // if object isn't iterable or it's array with default iterator - use simple case

    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);

      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }

    result.length = index;
    return result;
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js");

var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/modules/_iter-step.js");

var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");

var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js"); // 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()


module.exports = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target

  this._i = 0; // next index

  this._k = kind; // kind
  // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;

  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }

  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values'); // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)

Iterators.Arguments = Iterators.Array;
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

/***/ }),

/***/ "./node_modules/core-js/modules/es6.function.name.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.function.name.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;

var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name'; // 19.2.4.2 name

NAME in FProto || __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.map.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/es6.map.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var strong = __webpack_require__(/*! ./_collection-strong */ "./node_modules/core-js/modules/_collection-strong.js");

var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");

var MAP = 'Map'; // 23.1 Map Objects

module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(MAP, function (get) {
  return function Map() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.assign.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.assign.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S + $export.F, 'Object', {
  assign: __webpack_require__(/*! ./_object-assign */ "./node_modules/core-js/modules/_object-assign.js")
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.keys.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.keys.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");

var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.promise.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/es6.promise.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");

var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");

var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");

var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/modules/_species-constructor.js");

var task = __webpack_require__(/*! ./_task */ "./node_modules/core-js/modules/_task.js").set;

var microtask = __webpack_require__(/*! ./_microtask */ "./node_modules/core-js/modules/_microtask.js")();

var newPromiseCapabilityModule = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/core-js/modules/_new-promise-capability.js");

var perform = __webpack_require__(/*! ./_perform */ "./node_modules/core-js/modules/_perform.js");

var userAgent = __webpack_require__(/*! ./_user-agent */ "./node_modules/core-js/modules/_user-agent.js");

var promiseResolve = __webpack_require__(/*! ./_promise-resolve */ "./node_modules/core-js/modules/_promise-resolve.js");

var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';

var empty = function () {
  /* empty */
};

var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;
var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);

    var FakePromise = (promise.constructor = {})[__webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species')] = function (exec) {
      exec(empty, empty);
    }; // unhandled rejections tracking support, NodeJS Promise without it fails @@species test


    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
    // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
    // we can't detect it synchronously, so just check versions
    && v8.indexOf('6.6') !== 0 && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) {
    /* empty */
  }
}(); // helpers

var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};

var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;

    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;

      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }

          if (handler === true) result = value;else {
            if (domain) domain.enter();
            result = handler(value); // may throw

            if (domain) {
              domain.exit();
              exited = true;
            }
          }

          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };

    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach


    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};

var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;

    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({
            promise: promise,
            reason: value
          });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      }); // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should

      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    }

    promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};

var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};

var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;

    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({
        promise: promise,
        reason: promise._v
      });
    }
  });
};

var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap

  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};

var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap

  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");

    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = {
          _w: promise,
          _d: false
        }; // wrap

        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({
      _w: promise,
      _d: false
    }, e); // wrap
  }
}; // constructor polyfill


if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);

    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  }; // eslint-disable-next-line no-unused-vars


  Internal = function Promise(executor) {
    this._c = []; // <- awaiting reactions

    this._a = undefined; // <- checked in isUnhandled reactions

    this._s = 0; // <- state

    this._d = false; // <- done

    this._v = undefined; // <- value

    this._h = 0; // <- rejection state, 0 - default, 1 - handled, 2 - unhandled

    this._n = false; // <- notify
  };

  Internal.prototype = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js")($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;

      this._c.push(reaction);

      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });

  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };

  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {
  Promise: $Promise
});

__webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js")($Promise, PROMISE);

__webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js")(PROMISE);

Wrapper = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js")[PROMISE]; // statics

$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/modules/_iter-detect.js")(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.flags.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.flags.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 21.2.5.3 get RegExp.prototype.flags()
if (__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && /./g.flags != 'g') __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js")
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.split.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.split.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// @@split logic
__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('split', 2, function (defined, SPLIT, $split) {
  'use strict';

  var isRegExp = __webpack_require__(/*! ./_is-regexp */ "./node_modules/core-js/modules/_is-regexp.js");

  var _split = $split;
  var $push = [].push;
  var $SPLIT = 'split';
  var LENGTH = 'length';
  var LAST_INDEX = 'lastIndex';

  if ('abbc'[$SPLIT](/(b)*/)[1] == 'c' || 'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 || 'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 || '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 || '.'[$SPLIT](/()()/)[LENGTH] > 1 || ''[$SPLIT](/.?/)[LENGTH]) {
    var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
    // based on es5-shim implementation, need to rework it

    $split = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return []; // If `separator` is not a regex, use native split

      if (!isRegExp(separator)) return _split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') + (separator.multiline ? 'm' : '') + (separator.unicode ? 'u' : '') + (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0; // Make `global` and avoid `lastIndex` issues by working with a copy

      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var separator2, match, lastIndex, lastLength, i; // Doesn't need flags gy, but they don't hurt

      if (!NPCG) separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);

      while (match = separatorCopy.exec(string)) {
        // `separatorCopy.lastIndex` is not reliable cross-browser
        lastIndex = match.index + match[0][LENGTH];

        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index)); // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
          // eslint-disable-next-line no-loop-func

          if (!NPCG && match[LENGTH] > 1) match[0].replace(separator2, function () {
            for (i = 1; i < arguments[LENGTH] - 2; i++) if (arguments[i] === undefined) match[i] = undefined;
          });
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }

        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }

      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));

      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    }; // Chakra, V8

  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    $split = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
    };
  } // 21.1.3.17 String.prototype.split(separator, limit)


  return [function split(separator, limit) {
    var O = defined(this);
    var fn = separator == undefined ? undefined : separator[SPLIT];
    return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
  }, $split];
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.to-string.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./es6.regexp.flags */ "./node_modules/core-js/modules/es6.regexp.flags.js");

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

var $flags = __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js");

var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");

var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function (fn) {
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(RegExp.prototype, TO_STRING, fn, true);
}; // 21.2.5.14 RegExp.prototype.toString()


if (__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return $toString.call({
    source: 'a',
    flags: 'b'
  }) != '/a/b';
})) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/', 'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  }); // FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.iterator.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.iterator.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/modules/_string-at.js")(true); // 21.1.3.27 String.prototype[@@iterator]()


__webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js")(String, 'String', function (iterated) {
  this._t = String(iterated); // target

  this._i = 0; // next index
  // 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return {
    value: undefined,
    done: true
  };
  point = $at(O, index);
  this._i += point.length;
  return {
    value: point,
    done: false
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.symbol.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/es6.symbol.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // ECMAScript 6 symbols shim

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");

var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");

var META = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").KEY;

var $fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js");

var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");

var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");

var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");

var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/modules/_wks-ext.js");

var wksDefine = __webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/modules/_wks-define.js");

var enumKeys = __webpack_require__(/*! ./_enum-keys */ "./node_modules/core-js/modules/_enum-keys.js");

var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js");

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");

var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");

var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");

var _create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");

var gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ "./node_modules/core-js/modules/_object-gopn-ext.js");

var $GOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");

var $DP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");

var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;

var _stringify = $JSON && $JSON.stringify;

var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject; // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173

var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild; // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687

var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () {
      return dP(this, 'a', {
        value: 7
      }).a;
    }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);

  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);

  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, {
        enumerable: createDesc(0, false)
      });
    }

    return setSymbolDesc(it, key, D);
  }

  return dP(it, key, D);
};

var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;

  while (l > i) $defineProperty(it, key = keys[i++], P[key]);

  return it;
};

var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};

var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};

var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;

  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  }

  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;

  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  }

  return result;
}; // 19.4.1.1 Symbol([description])


if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);

    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };

    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, {
      configurable: true,
      set: $set
    });
    return wrap(tag);
  };

  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });
  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js").f = $propertyIsEnumerable;
  __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js").f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {
  Symbol: $Symbol
});

for (var es6Symbols = // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(','), j = 0; es6Symbols.length > j;) wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '') ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');

    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () {
    setter = true;
  },
  useSimple: function () {
    setter = false;
  }
});
$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
}); // 24.3.2 JSON.stringify(value [, replacer [, space]])

$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol(); // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols

  return _stringify([S]) != '[null]' || _stringify({
    a: S
  }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;

    while (arguments.length > i) args.push(arguments[i++]);

    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined

    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
}); // 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)

$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf); // 19.4.3.5 Symbol.prototype[@@toStringTag]

setToStringTag($Symbol, 'Symbol'); // 20.2.1.9 Math[@@toStringTag]

setToStringTag(Math, 'Math', true); // 24.3.3 JSON[@@toStringTag]

setToStringTag(global.JSON, 'JSON', true);

/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.entries.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.entries.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var $entries = __webpack_require__(/*! ./_object-to-array */ "./node_modules/core-js/modules/_object-to-array.js")(true);

$export($export.S, 'Object', {
  entries: function entries(it) {
    return $entries(it);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es7.symbol.async-iterator.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.symbol.async-iterator.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/modules/_wks-define.js")('asyncIterator');

/***/ }),

/***/ "./node_modules/core-js/modules/web.dom.iterable.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom.iterable.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__(/*! ./es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");

var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");

var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");

var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");

var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");

var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;
var DOMIterables = {
  CSSRuleList: true,
  // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true,
  // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true,
  // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;

  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es7.symbol.async-iterator */ "./node_modules/core-js/modules/es7.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ "./node_modules/core-js/modules/es6.object.assign.js");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _n19baseApplet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./n19baseApplet */ "./src/n19baseApplet.js");
/* harmony import */ var _n19popupController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./n19popupController */ "./src/n19popupController.js");




function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




SiebelAppFacade.N19Helper =
/*#__PURE__*/
function (_N19baseApplet) {
  _inherits(_class, _N19baseApplet);

  function _class(settings) {
    var _this;

    _classCallCheck(this, _class);

    var appletName = settings.appletName;

    if (appletName) {
      var applet = SiebelApp.S_App.GetActiveView().GetApplet(appletName);

      if (!applet) {
        throw new Error("Failed to get the reference to the applet by the ".concat(appletName, " name"));
      }

      _this = _possibleConstructorReturn(this, _getPrototypeOf(_class).call(this, Object.assign({}, settings, {
        pm: applet.GetPModel()
      })));
    } else {
      // the usual way assumed
      _this = _possibleConstructorReturn(this, _getPrototypeOf(_class).call(this, settings));
    }

    console.log('Nexus main class started....', _this.appletName); // eslint-disable-line no-console
    // get the n19popupController singleton instance

    _this.n19popupController = _n19popupController__WEBPACK_IMPORTED_MODULE_4__["default"].instance;
    return _possibleConstructorReturn(_this);
  }

  _createClass(_class, [{
    key: "closePopupApplet",
    value: function closePopupApplet() {
      return this.n19popupController.closePopupApplet();
    }
  }, {
    key: "_showPopupApplet",
    value: function _showPopupApplet(name, hide, cb) {
      if (!this.n19popupController) {
        // it is a popup applet
        throw new Error('Openning popup on the popup is not supported now');
      }

      if (!this.n19popupController.canOpenPopup()) {
        throw new Error('Cannot open popup!'); // return false;
      }

      this.view.SetActiveAppletInternal(this.applet); // or SetActiveApplet

      this._setActiveControl(name);

      return this.n19popupController.showPopupApplet(hide, cb, this.pm);
    }
  }, {
    key: "showMvgApplet",
    value: function showMvgApplet(name, hide, cb) {
      return this._showPopupApplet(name, hide, cb);
    }
  }, {
    key: "showPickApplet",
    value: function showPickApplet(name, hide, cb) {
      return this._showPopupApplet(name, hide, cb);
    }
  }, {
    key: "drilldown",
    value: function drilldown(controlName) {
      // todo: check isLink of control?
      // index is not effective, and drilldown anyway happens on last selected record
      if (!this.isListApplet) {
        return false;
      }

      var index = this.getSelection();
      return this.pm.ExecuteMethod('OnDrillDown', controlName, index);
    }
  }, {
    key: "gotoView",
    value: function gotoView(targetViewName, targetAppletName, id) {
      // todo: get the applet name from the view definition?
      var rowId = typeof id === 'undefined' ? this.getCurrentRecord(true).Id : id;
      var SWECmd = "GotoView&SWEView=".concat(targetViewName, "&SWEApplet0=").concat(targetAppletName);
      SWECmd += "&SWEBU=1&SWEKeepContext=FALSE&SWERowId0=".concat(rowId);
      SWECmd = encodeURI(SWECmd);
      SiebelApp.S_App.GotoView(targetViewName, '', SWECmd, '');
    }
  }], [{
    key: "ReInitPopup",
    value: function ReInitPopup() {
      var popupPM = SiebelApp.S_App.GetPopupPM();
      popupPM.Init();
      popupPM.Setup();
    }
  }]);

  return _class;
}(_n19baseApplet__WEBPACK_IMPORTED_MODULE_3__["default"]);

/***/ }),

/***/ "./src/n19baseApplet.js":
/*!******************************!*\
  !*** ./src/n19baseApplet.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return N19baseApplet; });
/* harmony import */ var core_js_modules_es6_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.from */ "./node_modules/core-js/modules/es6.array.from.js");
/* harmony import */ var core_js_modules_es6_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.regexp.to-string */ "./node_modules/core-js/modules/es6.regexp.to-string.js");
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es7.symbol.async-iterator */ "./node_modules/core-js/modules/es7.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.string.iterator */ "./node_modules/core-js/modules/es6.string.iterator.js");
/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.map */ "./node_modules/core-js/modules/es6.map.js");
/* harmony import */ var core_js_modules_es6_map__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_map__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es7_object_entries__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es7.object.entries */ "./node_modules/core-js/modules/es7.object.entries.js");
/* harmony import */ var core_js_modules_es7_object_entries__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_object_entries__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es6.promise */ "./node_modules/core-js/modules/es6.promise.js");
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ "./node_modules/core-js/modules/es6.object.assign.js");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es6.object.keys */ "./node_modules/core-js/modules/es6.object.keys.js");
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _n19notifications__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./n19notifications */ "./src/n19notifications.js");














function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var N19baseApplet =
/*#__PURE__*/
function () {
  function N19baseApplet(settings) {
    var _this = this;

    _classCallCheck(this, N19baseApplet);

    this.consts = SiebelJS.Dependency('SiebelApp.Constants');
    this.pm = settings.pm;
    this.view = SiebelApp.S_App.GetActiveView();
    this.appletName = this.pm.Get('GetName');
    this.applet = this.view.GetApplet(this.appletName);
    this.isListApplet = typeof this.pm.Get('GetListOfColumns') !== 'undefined';
    this.required = []; // will be empty for the list applet

    this.lov = {};
    this.boolObject = new SiebelApp.S_App.DatumBoolObject();
    var bcId = this.applet.GetBCId();
    this.notifications = new _n19notifications__WEBPACK_IMPORTED_MODULE_13__["default"](this.pm, this.consts, bcId); // populate the required array for form applets

    if (!this.isListApplet) {
      var appletId = "s_".concat(this.pm.Get('GetFullId'), "_div");
      var appletInputs = document.getElementById(appletId).querySelectorAll('input');

      for (var i = 0; i < appletInputs.length; i += 1) {
        if (appletInputs[i].attributes['aria-required']) {
          this.required.push(appletInputs[i].attributes.name.nodeValue);
        }
      }
    } // listener to get dynamic LOVs


    var appletName = this.pm.Get('GetName');
    this.pm.AttachNotificationHandler(this.consts.get('SWE_PROP_BC_NOTI_GENERIC'), function (propSet) {
      var viewName = SiebelApp.S_App.GetActiveView().GetName();
      var type = propSet.GetProperty(_this.consts.get('SWE_PROP_NOTI_TYPE'));

      if (type === 'GetQuickPickInfo') {
        var arr = [];
        CCFMiscUtil_StringToArray(propSet.GetProperty(_this.consts.get('SWE_PROP_ARGS_ARRAY')), arr);

        if (viewName === arr[1] && appletName === arr[2]) {
          if ('false' === arr[4]) {
            console.warn("Picklist is not associated with the control - ".concat(JSON.stringify(arr)));
          }

          _this.lov[arr[3]] = arr.splice(5).filter(function (el) {
            return el !== '';
          }); // todo: maybe we need to return some indication when empty value is allowed
        }
      }
    });
  }

  _createClass(N19baseApplet, [{
    key: "subscribe",
    value: function subscribe(func) {
      // eslint-disable-line class-methods-use-this
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
      if (this.isListApplet) {
        return this.pm.Get('GetListOfColumns');
      }

      return this.pm.Get('GetControls');
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
      // required is empty for list applets, hopefully for now
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
    key: "_getValueForControl",
    value: function _getValueForControl(controlUiType, value) {
      // TODO: DateTime, numbers, and phones?
      if (this.consts.get('SWE_CTRL_CHECKBOX') === controlUiType) {
        // convert true/false => Y/N // what with null
        this.boolObject.SetValue(value);
        return this.boolObject.GetAsString(); // value = value ? 'Y' : 'N'; // eslint-disable-line no-param-reassign
      }

      return value;
    }
  }, {
    key: "canInvokeMethod",
    value: function canInvokeMethod(method) {
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
    key: "getControls",
    value: function getControls() {
      var controls = {};

      var appletControls = this._returnControls();

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
          // pickApplet: control.GetPickApplet(), // confusing and not consistent - see wiki
          inputName: controlInputName,
          isPostChanges: control.IsPostChanges(),
          maxSize: control.GetMaxSize(),
          // maxChars: control.GetMaxChars(), // it is always 0
          fieldName: control.GetFieldName(),
          isLink: this.pm.ExecuteMethod('CanNavigate', controlName),
          readOnly: !this.pm.ExecuteMethod('CanUpdate', controlName),
          // it will be removed
          readonly: !this.pm.ExecuteMethod('CanUpdate', controlName)
        }; // add values to be displayed in the static pick list

        if (obj.staticPick) {
          obj.staticLOV = N19baseApplet.GetStaticLOV(control.GetRadioGroupPropSet().childArray);
          obj.lovs = obj.staticLOV.reduce(function (acc, el) {
            // normalized
            acc.push({
              lic: el.FieldValue,
              val: el.DisplayName
            });
            return acc;
          }, []);
        }

        controls[controlName] = obj;
      }

      return controls;
    }
  }, {
    key: "getRecordSet",
    value: function getRecordSet(addRecordIndex) {
      if (addRecordIndex) {
        return this.pm.Get('GetRecordSet').map(function (el, index) {
          var ret = Object.assign({}, el);
          ret._indx = index;
          return ret;
        });
      }

      return this.pm.Get('GetRecordSet');
    }
  }, {
    key: "getRawRecordSet",
    value: function getRawRecordSet(addRecordIndex) {
      if (addRecordIndex) {
        return this.pm.Get('GetRawRecordSet').map(function (el, index) {
          var ret = Object.assign({}, el);
          ret._indx = index;
          return ret;
        });
      }

      return this.pm.Get('GetRawRecordSet');
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

      var ret = this.pm.ExecuteMethod('InvokeMethod', method, null, false);
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
    value: function positionOnRow(index) {
      if (this.isListApplet) {
        if (!this.pm.ExecuteMethod('CanInvokeMethod', 'PositionOnRow')) {
          return false;
        }

        if (index < 0) {
          return false;
        } // seems this check is redundant
        // if (this.getNumRows() < index + 1) { //
        //   return false;
        // }


        if (this.getRowListRowCount() < index + 1) {
          throw new Error("".concat(index, " is equal/higher than amount of records in the applet ").concat(this.getRowListRowCount()));
        } // todo : if we got to this point
        //  should we check GetActiveControl (applet.prototype.InvokeMethod)
        //  and nullify it if active?


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
    key: "newRecord",
    value: function newRecord(cb) {
      var _this2 = this;

      // todo: should it be the same as WriteRecord?
      var promise = new Promise(function (resolve) {
        return _this2._newRecord(resolve);
      });
      return typeof cb === 'function' ? promise.then(cb) : promise;
    }
  }, {
    key: "_newRecord",
    value: function _newRecord(cb) {
      return this.pm.ExecuteMethod('InvokeMethod', 'NewRecord', null, {
        async: true,
        cb: cb
      });
    }
  }, {
    key: "newRecordSync",
    value: function newRecordSync() {
      return this.pm.ExecuteMethod('InvokeMethod', 'NewRecord', null, false);
    }
  }, {
    key: "writeRecord",
    value: function writeRecord(cb, cberr) {
      var _this3 = this;

      var promise = new Promise(function (resolve, reject) {
        return _this3._writeRecord(function () {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          // do we always have three input arguments, and the third argument is
          if (args[2].GetProperty('Status') === 'Completed') {
            resolve();
          } else {
            reject();
          }
        });
      });
      promise = typeof cb === 'function' ? promise.then(cb) : promise;
      promise = typeof cberr === 'function' ? promise.catch(cberr) : promise;
      return promise;
    }
  }, {
    key: "_writeRecord",
    value: function _writeRecord(cb) {
      return this.pm.ExecuteMethod('InvokeMethod', 'WriteRecord', null, {
        async: true,
        cb: cb
      });
    }
  }, {
    key: "writeRecordSync",
    value: function writeRecordSync() {
      return this.pm.ExecuteMethod('InvokeMethod', 'WriteRecord', null, false);
    }
  }, {
    key: "deleteRecordSync",
    value: function deleteRecordSync() {
      return this.pm.ExecuteMethod('InvokeMethod', 'DeleteRecord', null, false);
    }
  }, {
    key: "undoRecordSync",
    value: function undoRecordSync() {
      return this.pm.ExecuteMethod('InvokeMethod', 'UndoRecord', null, false);
    }
  }, {
    key: "setControlValue",
    value: function setControlValue(name, value) {
      // TODO: If value is null, nothing happens, should we convert null to ''?
      var control = this._getControl(name); // TODO: Check if control is found


      value = this._getValueForControl(control.GetUIType(), value); // eslint-disable-line no-param-reassign
      // maybe check if typeof applet.SetControlValueByName is function and use it when available? - not exists in 14.x
      // TODO: should we use SetCellValue for list applets?

      this.pm.OnControlEvent(this.consts.get('PHYEVENT_CONTROL_FOCUS'), control);
      var ret = this.pm.OnControlEvent(this.consts.get('PHYEVENT_CONTROL_BLUR'), control, value);

      if (!ret) {
        console.log("Value ".concat(value, " was not set for ").concat(control.GetName())); // eslint-disable-line no-console
      }

      return ret;
    }
  }, {
    key: "_validatePickControl",
    value: function _validatePickControl(control, isStatic) {
      // Possible results:
      // no pick
      // static pick
      // dynamic pick
      // pick
      // mvg
      // ?
      var isStaticPick = '1' === control.IsStaticBounded();
      var uiType = control.GetUIType();

      if (isStatic) {
        // called getStaticLOV
        //
        if (!isStaticPick) {
          console.warn("[N19]The getStaticLOV called for not static control - ".concat(uiType, ". Use getDynamicLOV or pick/mvg"));
        }
      } else {
        // called getDynamicLOV
        if (isStaticPick) {
          console.warn('[N19]The getDynamicLOV called for static control.');
        }

        if (this.consts.get('SWE_CTRL_COMBOBOX') !== uiType) {
          // the control is not "JComboBox"
          switch (uiType) {
            case this.consts.get('SWE_CTRL_PICK'): // Pick

            case this.consts.get('SWE_CTRL_MVG'):
              // MVG
              console.warn("[N19]You need to use the popups instead of getDynamicLOV - ".concat(uiType, "."));
              break;

            default:
              console.warn("[N19]Probably getDynamicLOV is not going to work for this control - ".concat(uiType, "."));
          }
        }
      }
    }
  }, {
    key: "getDynamicLOV",
    value: function getDynamicLOV(controlName) {
      var control = this._getControl(controlName);

      this._validatePickControl(control, false);

      var controlInputName = control.GetInputName();
      this.lov[controlInputName] = {};
      var ps = SiebelApp.S_App.NewPropertySet();
      ps.SetProperty('SWEField', controlInputName);
      ps.SetProperty('SWEJI', false);

      this._setActiveControl(null); // to prevent UpdatePick


      this.pm.ExecuteMethod('InvokeMethod', 'GetQuickPickInfo', ps);
      return this.lov[controlInputName];
    }
  }, {
    key: "getStaticLOV",
    value: function getStaticLOV(controlName) {
      var control = this._getControl(controlName);

      this._validatePickControl(control, true);

      var ret = [];
      var arr = N19baseApplet.GetStaticLOV(control.GetRadioGroupPropSet().childArray);

      for (var i = 0; i < arr.length; i += 1) {
        ret.push(arr[i].DisplayName);
      }

      return ret.sort();
    }
  }, {
    key: "_getControlValue",
    value: function _getControlValue(controlUiType, value) {
      // todo: what about datetime?
      if (this.consts.get('SWE_CTRL_CHECKBOX') === controlUiType) {
        // convert Y/N/null -> true/false // what about null
        this.boolObject.SetAsString(value);
        return this.boolObject.GetValue();
      }

      return value;
    } // this is a temp method to support the demo where
    // Siebel and custom rendered applet coexist

  }, {
    key: "_getFieldToControlMap",
    value: function _getFieldToControlMap(_controls) {
      var ret = {};

      var appletControls = this._returnControls();

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
    key: "getCurrentRecord",
    value: function getCurrentRecord(raw) {
      var index = this.getSelection(); // todo: check if record
      // todo: make a copy of returned object (to avoid the accidental modification of the recordset)

      if (raw) {
        return this.pm.Get('GetRawRecordSet')[index];
      }

      return this.pm.Get('GetRecordSet')[index];
    }
  }, {
    key: "calculateCurrentRecordState",
    value: function calculateCurrentRecordState() {
      // todo: do we need to delete pending
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
        // seems insertPending gives more correct value
        return 1;
      }

      if (bc.IsCommitPending()) {
        return 2;
      }

      if (!this.canInvokeMethod('WriteRecord')) {
        // or maybe better to use the canUpdate property of the bc
        return 5;
      }

      return 4; // this is a default fallback;
    }
  }, {
    key: "_getMethods",
    value: function _getMethods() {
      var methods = {};
      var appletControls = this.pm.Get('GetControls'); // even fo list applet

      var arr = Object.keys(appletControls);

      for (var i = 0; i < arr.length; i += 1) {
        var controlMethod = appletControls[arr[i]].GetMethodName();

        if (typeof controlMethod !== 'undefined' && controlMethod !== '') {
          methods[controlMethod] = {};
        }
      }

      return methods;
    }
  }, {
    key: "getCurrentRecordModel",
    value: function getCurrentRecordModel(_controls, _methods) {
      if (!_controls) {
        _controls = this.getControls(); // eslint-disable-line no-param-reassign
      }

      if (!_methods) {
        _methods = this._getMethods(); // eslint-disable-line no-param-reassign
      }

      _controls.state = this.calculateCurrentRecordState(); // eslint-disable-line no-param-reassign

      _controls.id = ''; // eslint-disable-line no-param-reassign

      var obj = {};
      var index = this.getSelection();

      if (index > -1) {
        obj = this.getRecordSet()[index];
        _controls.id = this.getRawRecordSet()[index].Id; // eslint-disable-line no-param-reassign
      }

      var arr = Object.keys(_controls);

      var appletControls = this._returnControls(); // populate controls


      for (var i = 0; i < arr.length; i += 1) {
        var control = appletControls[arr[i]];

        if (typeof control !== 'undefined') {
          // just if somebody sends incorrect name of the control
          var controlName = control.GetName();
          var fieldName = control.GetFieldName();

          if (_controls.state > 0) {
            _controls[arr[i]] = {
              // eslint-disable-line no-param-reassign
              value: this._getControlValue(control.GetUIType(), obj[fieldName]),
              readonly: !this.pm.ExecuteMethod('CanUpdate', controlName),
              isLink: this.pm.ExecuteMethod('CanNavigate', controlName),
              label: control.GetDisplayName(),
              isPostChanges: control.IsPostChanges(),
              required: this._isRequired(control.GetInputName()),
              maxSize: control.GetMaxSize(),
              fieldName: fieldName
            };
          } else {
            // no record displayed
            _controls[arr[i]] = {
              // eslint-disable-line no-param-reassign
              value: '',
              readonly: true,
              isLink: false,
              label: control.GetDisplayName(),
              isPostChanges: control.IsPostChanges(),
              required: this._isRequired(control.GetInputName()),
              maxSize: control.GetMaxSize(),
              fieldName: fieldName
            };
          }
        }
      } // populate methods


      if (_methods) {
        arr = Object.keys(_methods);

        for (var _i = 0; _i < arr.length; _i += 1) {
          _methods[arr[_i]] = this.canInvokeMethod(arr[_i]); // eslint-disable-line no-param-reassign
        }
      } // return true;


      return {
        controls: _controls,
        methods: _methods
      };
    }
  }, {
    key: "_getControlInputNameForIdQuery",
    value: function _getControlInputNameForIdQuery() {
      var appletControls = this._returnControls();

      var arr = Object.keys(appletControls);

      for (var i = 0; i < arr.length; i += 1) {
        var control = appletControls[arr[i]];
        var controlUiType = control.GetUIType();

        if (!this._isSkipControl(controlUiType)) {
          // skipping also JCheckbox
          // todo: check do we need to skip also date?
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
    key: "queryBySearchExprSync",
    value: function queryBySearchExprSync(expr) {
      this.pm.ExecuteMethod('InvokeMethod', 'NewQuery');
      this.applet.GetBusComp().SetFieldValue('Id', expr);
      this.pm.ExecuteMethod('InvokeMethod', 'ExecuteQuery');
      return this.getRecordSet().length;
    }
  }, {
    key: "queryByIdSync",
    value: function queryByIdSync(rowId) {
      var expr = rowId;

      if (Array === rowId.constructor) {
        expr = rowId.map(function (el) {
          return "Id=\"".concat(el, "\"");
        }).join(' OR ');
        console.log(expr);
      }

      this.pm.ExecuteMethod('InvokeMethod', 'NewQuery');
      this.applet.GetBusComp().SetFieldValue('Id', expr);
      this.pm.ExecuteMethod('InvokeMethod', 'ExecuteQuery');
      return this.getRecordSet().length;
    }
  }, {
    key: "queryById",
    value: function queryById(rowId, cb) {
      var _this4 = this;

      var promise = new Promise(function (resolve) {
        return _this4._queryById(rowId, resolve);
      });
      var ret = promise.then(function () {
        return _this4.getRecordSet().length;
      });
      return typeof cb === 'function' ? ret.then(cb) : ret;
    }
  }, {
    key: "_queryById",
    value: function _queryById(rowId, cb) {
      // maybe check if it is already in query mode / cancel the query
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
      psInput.SetProperty(this._getControlInputNameForIdQuery(), "Id=\"".concat(rowId, "\""));
      ai.args.push(method);
      ai.args.push(psInput.Clone());
      return this.applet.CallServerApplet(method, psInput, psOutput, ai);
    }
  }, {
    key: "query",
    value: function query(params, cb) {
      var _this5 = this;

      var promise = new Promise(function (resolve) {
        return _this5._query(params, resolve);
      });
      var ret = promise.then(function () {
        return _this5.getRecordSet().length;
      });
      return typeof cb === 'function' ? ret.then(cb) : ret;
    }
  }, {
    key: "_query",
    value: function _query(params, cb) {
      // TODO: check if it is already in query mode to avoid calling the new query again
      // or maybe better to cancel the existing query?
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

      var _controls = this._returnControls();

      for (var i = 0; i < arr.length; i += 1) {
        var control = _controls[arr[i]];
        psInput.SetProperty(control.GetInputName(), this._getValueForControl(control.GetUIType(), params[arr[i]]));
      }

      ai.args.push(method);
      ai.args.push(psInput.Clone());
      return this.applet.CallServerApplet(method, psInput, psOutput, ai);
    }
  }, {
    key: "getMVF",
    value: function getMVF(ids, fields, useActiveBO) {
      var _this6 = this;

      return new Promise(function (resolve, reject) {
        return _this6._getMVF(ids, fields, useActiveBO, resolve, reject);
      });
    }
  }, {
    key: "_getFieldNameForControl",
    value: function _getFieldNameForControl(controlName) {
      var control = this._getControl(controlName); // if not found, the input value is returned


      if (control) {
        return control.GetFieldName();
      }

      return controlName;
    }
  }, {
    key: "_getMVF",
    value: function _getMVF(ids, fields, useActiveBO, resolve, reject) {
      var _this7 = this;

      var arr = Object.entries(fields);
      var psInputs = SiebelApp.S_App.NewPropertySet();
      psInputs.SetProperty('BO', SiebelApp.S_App.GetActiveBusObj().GetName());
      psInputs.SetProperty('BC', this.pm.Get('GetBusComp').GetName());
      psInputs.SetProperty('UseActiveBO', useActiveBO ? 'Y' : 'N');
      psInputs.SetProperty('ID', ids.join(','));

      for (var i = 0; i < arr.length; i += 1) {
        var ps = SiebelApp.S_App.NewPropertySet();
        ps.SetType(this._getFieldNameForControl(arr[i][0]));
        ps.SetProperty('Fields', arr[i][1].join(','));
        psInputs.AddChild(ps.Clone());
      }

      var bs = SiebelApp.S_App.GetService('N19 BS');
      var ai = {
        async: true,
        selfbusy: true,
        scope: this,
        errcb: function errcb() {
          return reject();
        },
        cb: function cb(methodName, Inputs, psOutputs) {
          var _ref = psOutputs.GetChildByType('ResultSet') || {},
              childArray = _ref.childArray; // to be protectedd when no results


          var ret = {};

          for (var _i2 = 0; _i2 < (childArray || []).length; _i2 += 1) {
            ret[childArray[_i2].GetType()] = {};

            for (var j = 0; j < childArray[_i2].childArray.length; j += 1) {
              var el = childArray[_i2].childArray[j];
              ret[childArray[_i2].GetType()][el.GetType()] = el.childArray.map(function (rec) {
                var primary = rec.propArray['SSA Primary Field'];

                _this7.boolObject.SetAsString(primary);

                rec.propArray['SSA Primary Field'] = _this7.boolObject.GetValue(); // eslint-disable-line no-param-reassign

                return Object.assign({}, rec.propArray);
              });
            }
          }

          resolve(ret);
        }
      };
      return bs.InvokeMethod('ReturnMVGFields', psInputs, ai);
    }
  }, {
    key: "savePref",
    value: function savePref(name, value) {
      // value is a string
      // value is bound to applet and view
      var psInput = SiebelApp.S_App.NewPropertySet();
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
      // temp method?
      var data = new Map();

      while (data.size < amount) {
        var temp = this.getRawRecordSet(); // avoid the duplicates

        for (var i = 0; i < temp.length; i += 1) {
          data.set(temp[i].Id, temp[i]);
        } // we are using canInvokeMethod, as in 16.00 nextRecordSet always returns undefined


        if (!this.canInvokeMethod('GotoNextSet')) {
          break;
        }

        this.nextRecordSet();
      }

      return {
        data: _toConsumableArray(data.values()),
        hasNext: this.canInvokeMethod('GotoNextSet')
      };
    }
  }, {
    key: "_setFieldValue",
    value: function _setFieldValue(name, value) {
      console.warn('_setFieldValue is temporary method, and it will be removed in the future');
      this.applet.SetControlValueByName(name, value);
      return this.pm.ExecuteMethod('InvokeMethod', 'WriteRecord'); // this.applet.GetBusComp().SetFieldValue(name, value);
      // return this.pm.ExecuteMethod('InvokeMethod', 'WriteRecord');
    }
  }, {
    key: "getFieldToControlMap",
    value: function getFieldToControlMap() {
      this.fieldToControlMap = {
        Id: 'Id'
      };

      var appletControls = this._returnControls();

      var arr = Object.keys(appletControls);

      for (var i = 0; i < arr.length; i += 1) {
        var control = appletControls[arr[i]];
        var field = control.GetFieldName();

        if (field) {
          this.fieldToControlMap[field] = arr[i];
        }
      }

      return this.fieldToControlMap;
    }
  }, {
    key: "getControlsRecordSet",
    value: function getControlsRecordSet() {
      var _this8 = this;

      if (!this.fieldToControlMap) {
        this.getFieldToControlMap();
      } // used slice to avoid modification of the record set


      var ret = this.getRecordSet().slice();

      var _loop = function _loop(i) {
        ret[i] = Object.keys(ret[i]).filter(function (el) {
          return _this8.fieldToControlMap[el];
        }).reduce(function (acc, el) {
          return _objectSpread({}, acc, _defineProperty({}, _this8.fieldToControlMap[el], ret[i][el]));
        }, {});
      };

      for (var i = 0; i < ret.length; i += 1) {
        _loop(i);
      }

      return ret;
    }
  }], [{
    key: "GetStaticLOV",
    value: function GetStaticLOV(arr) {
      var ret = [];

      for (var i = 0; i < arr.length; i += 1) {
        ret.push(arr[i].propArray);
      }

      return ret;
    }
  }, {
    key: "Requery",
    value: function Requery(name) {
      var service = SiebelApp.S_App.GetService('N19 BS');

      if (service) {
        var inPropSet = SiebelApp.S_App.NewPropertySet();
        inPropSet.SetProperty('name', name);
        service.InvokeMethod('Requery', inPropSet, {});
      }
    }
  }, {
    key: "Refresh",
    value: function Refresh(name) {
      var service = SiebelApp.S_App.GetService('N19 BS');

      if (service) {
        var inPropSet = SiebelApp.S_App.NewPropertySet();
        inPropSet.SetProperty('name', name);
        service.InvokeMethod('Refresh', inPropSet, {});
      }
    }
  }]);

  return N19baseApplet;
}();



/***/ }),

/***/ "./src/n19notifications.js":
/*!*********************************!*\
  !*** ./src/n19notifications.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return N19notifications; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var N19notifications =
/*#__PURE__*/
function () {
  function N19notifications(pm, consts, bcId) {
    var _this = this;

    _classCallCheck(this, N19notifications);

    var receivedNotifications = [];
    this.token = 0;
    this.subscribers = [];
    pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_BEGIN'), function (propSet) {
      if (bcId === propSet.GetProperty('bc')) {
        receivedNotifications = [];
      }
    });
    pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_NEW_ACTIVE_ROW'), function (propSet) {
      if (bcId === propSet.GetProperty('bc')) {
        receivedNotifications.push('SWE_PROP_BC_NOTI_NEW_ACTIVE_ROW');
      }
    });
    pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_STATE_CHANGED'), function (propSet) {
      if (bcId === propSet.GetProperty('bc')) {
        receivedNotifications.push('SWE_PROP_BC_NOTI_STATE_CHANGED');
      }
    });
    pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_DELETE_RECORD'), function (propSet) {
      if (bcId === propSet.GetProperty('bc')) {
        receivedNotifications.push('SWE_PROP_BC_NOTI_DELETE_RECORD');
      }
    });
    pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_NEW_RECORD'), function (propSet) {
      if (bcId === propSet.GetProperty('bc')) {
        receivedNotifications.push('SWE_PROP_BC_NOTI_NEW_RECORD');
      }
    });
    pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_END'), function (propSet) {
      if (bcId === propSet.GetProperty('bc')) {
        if (receivedNotifications.length > 0) {
          for (var i = 0; i < _this.subscribers.length; i += 1) {
            // we assume that the function does not throw an error
            _this.subscribers[i].func();
          }
        }
      }
    });
  }

  _createClass(N19notifications, [{
    key: "subscribe",
    value: function subscribe(func) {
      if (typeof func !== 'function') {
        throw new Error('func is not a function');
      }

      this.token += 1;
      this.subscribers.push({
        token: this.token,
        func: func
      });
      return this.token;
    }
  }, {
    key: "unsubscribe",
    value: function unsubscribe(subToken) {
      for (var i = 0; i < this.subscribers.length; i += 1) {
        if (subToken === this.subscribers[i].token) {
          return this.subscribers.splice(i, 1);
        }
      }

      return false;
    }
  }]);

  return N19notifications;
}();



/***/ }),

/***/ "./src/n19popupApplet.js":
/*!*******************************!*\
  !*** ./src/n19popupApplet.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return N19popupApplet; });
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es7.symbol.async-iterator */ "./node_modules/core-js/modules/es7.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _n19baseApplet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./n19baseApplet */ "./src/n19baseApplet.js");




function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var N19popupApplet =
/*#__PURE__*/
function (_N19baseApplet) {
  _inherits(N19popupApplet, _N19baseApplet);

  function N19popupApplet(settings) {
    var _this;

    _classCallCheck(this, N19popupApplet);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(N19popupApplet).call(this, settings));
    console.log("".concat(_this.constructor.name, " started...")); // eslint-disable-line no-console

    if (_this.isListApplet) {
      _this.pm.GetRenderer().resize = function () {
        return 0;
      };

      _this.pm.GetRenderer().GetSelectedRow = function () {
        return 0;
      };
    }

    return _this;
  }

  _createClass(N19popupApplet, [{
    key: "pickRecord",
    value: function pickRecord() {
      // todo : check CanInokeMethod and/or is it pick
      return this.pm.ExecuteMethod('InvokeMethod', 'PickRecord');
    }
  }, {
    key: "deleteRecords",
    value: function deleteRecords(cb) {
      // method is not allowed to delete the primary
      //  in this case it returns "Method DeleteRecords is not allowed here" SBL-UIF-00348
      // todo: check canInvokeMethod and/or is it MVG
      var ret = this.pm.ExecuteMethod('InvokeMethod', 'DeleteRecords');

      if (typeof cb === 'function') {
        cb();
      }

      return ret;
    }
  }, {
    key: "addRecords",
    value: function addRecords(cb) {
      // todo: check canInvokeMethod and/or is it MVG. and if we have a record in assoc?
      var ret = this.pm.ExecuteMethod('InvokeMethod', 'AddRecords');

      if (typeof cb === 'function') {
        cb();
      }

      return ret;
    } // todo: do we need deleteAllRecords?

  }, {
    key: "addAllRecords",
    value: function addAllRecords(cb) {
      // todo: check canInvokeMethod and/or is it MVG. and if we have a record in assoc?
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
}(_n19baseApplet__WEBPACK_IMPORTED_MODULE_3__["default"]);



/***/ }),

/***/ "./src/n19popupController.js":
/*!***********************************!*\
  !*** ./src/n19popupController.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return N19popupController; });
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.promise */ "./node_modules/core-js/modules/es6.promise.js");
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.regexp.split */ "./node_modules/core-js/modules/es6.regexp.split.js");
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es7.symbol.async-iterator */ "./node_modules/core-js/modules/es7.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _n19popupApplet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./n19popupApplet */ "./src/n19popupApplet.js");






function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var singleton = Symbol('singleton');
var singletonEnforcer = Symbol('singletonEnforcer');

var N19popupController =
/*#__PURE__*/
function () {
  _createClass(N19popupController, null, [{
    key: "instance",
    get: function get() {
      if (!this[singleton]) {
        this[singleton] = new N19popupController(singletonEnforcer);
      }

      return this[singleton];
    }
  }]);

  function N19popupController(enforcer) {
    var _this = this;

    _classCallCheck(this, N19popupController);

    if (enforcer !== singletonEnforcer) {
      throw new Error('Instantiation failed: use Singleton.getInstance() instead of new.');
    }

    this.consts = SiebelJS.Dependency('SiebelApp.Constants');
    this.isPopupHidden = false;
    this.resolvePromise = null;
    this.popupAppletN19 = null;
    this.assocAppletN19 = null;
    console.log("".concat(this.constructor.name, " started...")); // eslint-disable-line no-console
    // it will be a singleton, so there is no cleanup

    this.N19processNewPopup = SiebelApp.S_App.ProcessNewPopup;

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
        // todo: use here the properties set on promiseResolving?
        var _N19popupController$I = N19popupController.IsPopupOpen(),
            appletName = _N19popupController$I.appletName;

        if (!appletName) {
          throw new Error('Open Applet Name is not found in resolvePromise');
        }

        var applet = N19popupController.GetPopupApplet(appletName);
        var pm = applet.GetPModel(); // todo: avoid this circularity

        _this.popupAppletN19 = new _n19popupApplet__WEBPACK_IMPORTED_MODULE_5__["default"]({
          pm: pm
        }); // todo : split N19Helper into 2 classes

        var obj = {
          appletName: appletName,
          popupAppletN19: _this.popupAppletN19
        }; // check if we have assoc
        // we assume it is always assoc applet, but what about opening popup on the top of another - not tested it

        var assocApplet = applet.GetPopupApplet();

        if (assocApplet) {
          _this.assocAppletN19 = new _n19popupApplet__WEBPACK_IMPORTED_MODULE_5__["default"]({
            pm: assocApplet.GetPModel()
          });
          obj.assocAppletN19 = _this.assocAppletN19;
        }

        _this.resolvePromise(obj);

        _this.resolvePromise = null;
      }

      return ret;
    };
  }

  _createClass(N19popupController, [{
    key: "canOpenPopup",
    value: function canOpenPopup() {
      return typeof this.resolvePromise !== 'function';
    }
  }, {
    key: "processNewPopup",
    value: function processNewPopup(ps) {
      SiebelApp.S_App.SetShowNewPage(true);
      var popupPM = SiebelApp.S_App.GetPopupPM();
      popupPM.SetProperty('CanProcessLayout', false);
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
    } // static ReInitPopup() {
    //   const popupPM = SiebelApp.S_App.GetPopupPM();
    //   popupPM.Init();
    //   popupPM.Setup();
    // }
    // todo: change the approach, use the class internal variables

  }, {
    key: "closePopupApplet",
    value: function closePopupApplet(applet) {
      // todo : check canInvokeMethod
      var ret;

      if (applet) {
        var isPopupApplet = typeof applet.GetPopupAppletName === 'function';
        var isPickApplet = typeof applet.GetPickAppletName === 'function';

        if (!isPopupApplet && !isPickApplet) {
          throw new Error('This applet is neither pick nor popup');
        }

        ret = applet.GetPModel().ExecuteMethod('InvokeMethod', 'CloseApplet');
      } else {
        // todo: !!! >> change this approach
        ret = this.popupAppletN19.applet.GetPModel().ExecuteMethod('InvokeMethod', 'CloseApplet');
      } // it could be better if we don't have a Siebel Applet on the view
      // in this case, we would not need to reInitPopup
      // if (this.isPopupHidden) {
      //  N19popupController.ReInitPopup();
      // }


      this.popupAppletN19 = null;
      this.assocAppletN19 = null;
      return ret;
    }
  }, {
    key: "showPopupApplet",
    value: function showPopupApplet(hide, cb, pm) {
      var _this2 = this;

      // todo: use the properties set on promise resolving?
      var _N19popupController$I2 = N19popupController.IsPopupOpen(),
          isOpen = _N19popupController$I2.isOpen,
          appletName = _N19popupController$I2.appletName;

      if (isOpen) {
        // this code will close the applet even if this applet was originated by another applet
        console.log("closing ".concat(appletName, " in showPopupApplet...")); // eslint-disable-line no-console
        // maybe do not close if the applet to be opened if the same as already opened?

        this.closePopupApplet(N19popupController.GetPopupApplet(appletName)); // todo: check if got it successfully closed?
      }

      this.isPopupHidden = !!hide; // todo: do we need to keep the show the applet

      pm.ExecuteMethod('InvokeMethod', 'EditPopup'); // can call EditField?

      var ret = true;

      if (hide) {
        // we will populate the instances only when applet should be hidden
        // eslint-disable-next-line no-return-assign
        ret = new Promise(function (resolve) {
          return _this2.resolvePromise = resolve;
        }); // eslint-disable-line no-param-assign

        if (typeof cb === 'function') {
          ret = ret.then(cb);
        }
      }

      return ret;
    }
  }], [{
    key: "IsPopupOpen",
    value: function IsPopupOpen() {
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
    } // static getPopupAppletPM(appletName) {
    //   const applet = N19popupController.GetPopupApplet(appletName);
    //   return applet.GetPModel();
    // }

  }, {
    key: "GetPopupApplet",
    value: function GetPopupApplet(appletName) {
      var applet = SiebelApp.S_App.GetActiveView().GetAppletMap()[appletName];

      if (!applet) {
        throw new Error("The ".concat(appletName, " is not found in applet map"));
      }

      return applet;
    }
  }]);

  return N19popupController;
}();



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\apps\n19helper/src/main.js */"./src/main.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYW4taW5zdGFuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NsYXNzb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY29mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NvbGxlY3Rpb24tc3Ryb25nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NvbGxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jcmVhdGUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY3R4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2RlZmluZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2VudW0ta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19leHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZmFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZml4LXJlLXdrcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19mbGFncy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19mb3Itb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2hhcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19oaWRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2h0bWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faW5oZXJpdC1pZi1yZXF1aXJlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pbnZva2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pcy1hcnJheS1pdGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2lzLWFycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pcy1yZWdleHAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlci1jYWxsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXItZGV0ZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXItc3RlcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyYXRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fbGlicmFyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19tZXRhLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX21pY3JvdGFzay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZHAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWRwcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZ29wZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZ29wbi1leHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdvcG4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdwby5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3Qta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtcGllLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1zYXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LXRvLWFycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3BlcmZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fcHJvbWlzZS1yZXNvbHZlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fcmVkZWZpbmUtYWxsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3JlZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NldC1wcm90by5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zZXQtc3BlY2llcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zaGFyZWQta2V5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NoYXJlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zcGVjaWVzLWNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3N0cmluZy1hdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190YXNrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWFic29sdXRlLWluZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8taW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1sZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL191aWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdXNlci1hZ2VudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL192YWxpZGF0ZS1jb2xsZWN0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3drcy1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fd2tzLWV4dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL193a3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuZnJvbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5mdW5jdGlvbi5uYW1lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnByb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLmZsYWdzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5zcGxpdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAudG8tc3RyaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcub2JqZWN0LmVudHJpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcuc3ltYm9sLmFzeW5jLWl0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbjE5YmFzZUFwcGxldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbjE5bm90aWZpY2F0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbjE5cG9wdXBBcHBsZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL24xOXBvcHVwQ29udHJvbGxlci5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiaXQiLCJUeXBlRXJyb3IiLCJVTlNDT1BBQkxFUyIsInJlcXVpcmUiLCJBcnJheVByb3RvIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJ1bmRlZmluZWQiLCJrZXkiLCJDb25zdHJ1Y3RvciIsIm5hbWUiLCJmb3JiaWRkZW5GaWVsZCIsImlzT2JqZWN0IiwidG9JT2JqZWN0IiwidG9MZW5ndGgiLCJ0b0Fic29sdXRlSW5kZXgiLCJJU19JTkNMVURFUyIsIiR0aGlzIiwiZWwiLCJmcm9tSW5kZXgiLCJPIiwibGVuZ3RoIiwiaW5kZXgiLCJ2YWx1ZSIsImNvZiIsIlRBRyIsIkFSRyIsImFyZ3VtZW50cyIsInRyeUdldCIsImUiLCJUIiwiQiIsIk9iamVjdCIsImNhbGxlZSIsInRvU3RyaW5nIiwiY2FsbCIsInNsaWNlIiwiZFAiLCJmIiwiY3JlYXRlIiwicmVkZWZpbmVBbGwiLCJjdHgiLCJhbkluc3RhbmNlIiwiZm9yT2YiLCIkaXRlckRlZmluZSIsInN0ZXAiLCJzZXRTcGVjaWVzIiwiREVTQ1JJUFRPUlMiLCJmYXN0S2V5IiwidmFsaWRhdGUiLCJTSVpFIiwiZ2V0RW50cnkiLCJ0aGF0IiwiZW50cnkiLCJfaSIsIl9mIiwibiIsImsiLCJnZXRDb25zdHJ1Y3RvciIsIndyYXBwZXIiLCJOQU1FIiwiSVNfTUFQIiwiQURERVIiLCJDIiwiaXRlcmFibGUiLCJfdCIsIl9sIiwiY2xlYXIiLCJkYXRhIiwiciIsInAiLCJpIiwibmV4dCIsInByZXYiLCJmb3JFYWNoIiwiY2FsbGJhY2tmbiIsInYiLCJoYXMiLCJnZXQiLCJkZWYiLCJzZXRTdHJvbmciLCJpdGVyYXRlZCIsImtpbmQiLCJfayIsImdsb2JhbCIsIiRleHBvcnQiLCJyZWRlZmluZSIsIm1ldGEiLCJmYWlscyIsIiRpdGVyRGV0ZWN0Iiwic2V0VG9TdHJpbmdUYWciLCJpbmhlcml0SWZSZXF1aXJlZCIsIm1ldGhvZHMiLCJjb21tb24iLCJJU19XRUFLIiwiQmFzZSIsInByb3RvIiwiZml4TWV0aG9kIiwiS0VZIiwiZm4iLCJhIiwiYWRkIiwic2V0IiwiYiIsImVudHJpZXMiLCJORUVEIiwiaW5zdGFuY2UiLCJIQVNOVF9DSEFJTklORyIsIlRIUk9XU19PTl9QUklNSVRJVkVTIiwiQUNDRVBUX0lURVJBQkxFUyIsIml0ZXIiLCJCVUdHWV9aRVJPIiwiJGluc3RhbmNlIiwidGFyZ2V0IiwiY29uc3RydWN0b3IiLCJHIiwiVyIsIkYiLCJjb3JlIiwidmVyc2lvbiIsIl9fZSIsIiRkZWZpbmVQcm9wZXJ0eSIsImNyZWF0ZURlc2MiLCJvYmplY3QiLCJhRnVuY3Rpb24iLCJjIiwiYXBwbHkiLCJkZWZpbmVQcm9wZXJ0eSIsImRvY3VtZW50IiwiaXMiLCJjcmVhdGVFbGVtZW50Iiwic3BsaXQiLCJnZXRLZXlzIiwiZ09QUyIsInBJRSIsInJlc3VsdCIsImdldFN5bWJvbHMiLCJzeW1ib2xzIiwiaXNFbnVtIiwicHVzaCIsImhpZGUiLCJQUk9UT1RZUEUiLCJ0eXBlIiwic291cmNlIiwiSVNfRk9SQ0VEIiwiSVNfR0xPQkFMIiwiSVNfU1RBVElDIiwiUyIsIklTX1BST1RPIiwiUCIsIklTX0JJTkQiLCJleHBQcm90byIsIm93biIsIm91dCIsImV4cCIsIkZ1bmN0aW9uIiwiVSIsIlIiLCJleGVjIiwiZGVmaW5lZCIsIndrcyIsIlNZTUJPTCIsImZucyIsInN0cmZuIiwicnhmbiIsIlN0cmluZyIsIlJlZ0V4cCIsInN0cmluZyIsImFyZyIsImFuT2JqZWN0IiwiaWdub3JlQ2FzZSIsIm11bHRpbGluZSIsInVuaWNvZGUiLCJzdGlja3kiLCJpc0FycmF5SXRlciIsImdldEl0ZXJGbiIsIkJSRUFLIiwiUkVUVVJOIiwiSVRFUkFUT1IiLCJpdGVyRm4iLCJpdGVyYXRvciIsImRvbmUiLCJ3aW5kb3ciLCJNYXRoIiwic2VsZiIsIl9fZyIsImhhc093blByb3BlcnR5IiwiZG9jdW1lbnRFbGVtZW50Iiwic2V0UHJvdG90eXBlT2YiLCJhcmdzIiwidW4iLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsIkl0ZXJhdG9ycyIsImlzQXJyYXkiLCJNQVRDSCIsImlzUmVnRXhwIiwicmV0IiwiZGVzY3JpcHRvciIsIkl0ZXJhdG9yUHJvdG90eXBlIiwiTElCUkFSWSIsIiRpdGVyQ3JlYXRlIiwiZ2V0UHJvdG90eXBlT2YiLCJCVUdHWSIsImtleXMiLCJGRl9JVEVSQVRPUiIsIktFWVMiLCJWQUxVRVMiLCJyZXR1cm5UaGlzIiwiREVGQVVMVCIsIklTX1NFVCIsIkZPUkNFRCIsImdldE1ldGhvZCIsInZhbHVlcyIsIkRFRl9WQUxVRVMiLCJWQUxVRVNfQlVHIiwiJG5hdGl2ZSIsIiRkZWZhdWx0IiwiJGVudHJpZXMiLCIkYW55TmF0aXZlIiwiU0FGRV9DTE9TSU5HIiwicml0ZXIiLCJmcm9tIiwic2tpcENsb3NpbmciLCJzYWZlIiwiYXJyIiwiTUVUQSIsInNldERlc2MiLCJpZCIsImlzRXh0ZW5zaWJsZSIsIkZSRUVaRSIsInByZXZlbnRFeHRlbnNpb25zIiwic2V0TWV0YSIsInciLCJnZXRXZWFrIiwib25GcmVlemUiLCJtYWNyb3Rhc2siLCJPYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJXZWJLaXRNdXRhdGlvbk9ic2VydmVyIiwicHJvY2VzcyIsIlByb21pc2UiLCJpc05vZGUiLCJoZWFkIiwibGFzdCIsIm5vdGlmeSIsImZsdXNoIiwicGFyZW50IiwiZG9tYWluIiwiZXhpdCIsImVudGVyIiwibmV4dFRpY2siLCJuYXZpZ2F0b3IiLCJzdGFuZGFsb25lIiwidG9nZ2xlIiwibm9kZSIsImNyZWF0ZVRleHROb2RlIiwib2JzZXJ2ZSIsImNoYXJhY3RlckRhdGEiLCJyZXNvbHZlIiwicHJvbWlzZSIsInRoZW4iLCJ0YXNrIiwiUHJvbWlzZUNhcGFiaWxpdHkiLCJyZWplY3QiLCIkJHJlc29sdmUiLCIkJHJlamVjdCIsInRvT2JqZWN0IiwiSU9iamVjdCIsIiRhc3NpZ24iLCJhc3NpZ24iLCJBIiwiU3ltYm9sIiwiSyIsImpvaW4iLCJhTGVuIiwiY29uY2F0IiwiaiIsImRQcyIsImVudW1CdWdLZXlzIiwiSUVfUFJPVE8iLCJFbXB0eSIsImNyZWF0ZURpY3QiLCJpZnJhbWUiLCJsdCIsImd0IiwiaWZyYW1lRG9jdW1lbnQiLCJzdHlsZSIsImRpc3BsYXkiLCJhcHBlbmRDaGlsZCIsInNyYyIsImNvbnRlbnRXaW5kb3ciLCJvcGVuIiwid3JpdGUiLCJjbG9zZSIsIlByb3BlcnRpZXMiLCJJRThfRE9NX0RFRklORSIsInRvUHJpbWl0aXZlIiwiQXR0cmlidXRlcyIsImRlZmluZVByb3BlcnRpZXMiLCJnT1BEIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiZ09QTiIsIndpbmRvd05hbWVzIiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsImdldFdpbmRvd05hbWVzIiwiJGtleXMiLCJoaWRkZW5LZXlzIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwiT2JqZWN0UHJvdG8iLCJhcnJheUluZGV4T2YiLCJuYW1lcyIsImlzRW50cmllcyIsIm5ld1Byb21pc2VDYXBhYmlsaXR5IiwieCIsInByb21pc2VDYXBhYmlsaXR5IiwiYml0bWFwIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiU1JDIiwiVE9fU1RSSU5HIiwiJHRvU3RyaW5nIiwiVFBMIiwiaW5zcGVjdFNvdXJjZSIsInZhbCIsImlzRnVuY3Rpb24iLCJjaGVjayIsInRlc3QiLCJidWdneSIsIl9fcHJvdG9fXyIsIlNQRUNJRVMiLCJ0YWciLCJzdGF0Iiwic2hhcmVkIiwidWlkIiwiU0hBUkVEIiwic3RvcmUiLCJtb2RlIiwiY29weXJpZ2h0IiwiRCIsInRvSW50ZWdlciIsInBvcyIsInMiLCJsIiwiY2hhckNvZGVBdCIsImNoYXJBdCIsImludm9rZSIsImh0bWwiLCJjZWwiLCJzZXRUYXNrIiwic2V0SW1tZWRpYXRlIiwiY2xlYXJUYXNrIiwiY2xlYXJJbW1lZGlhdGUiLCJNZXNzYWdlQ2hhbm5lbCIsIkRpc3BhdGNoIiwiY291bnRlciIsInF1ZXVlIiwiT05SRUFEWVNUQVRFQ0hBTkdFIiwiZGVmZXIiLCJjaGFubmVsIiwicG9ydCIsInJ1biIsImxpc3RlbmVyIiwiZXZlbnQiLCJub3ciLCJwb3J0MiIsInBvcnQxIiwib25tZXNzYWdlIiwicG9zdE1lc3NhZ2UiLCJhZGRFdmVudExpc3RlbmVyIiwiaW1wb3J0U2NyaXB0cyIsInJlbW92ZUNoaWxkIiwic2V0VGltZW91dCIsIm1heCIsIm1pbiIsImNlaWwiLCJmbG9vciIsImlzTmFOIiwidmFsdWVPZiIsInB4IiwicmFuZG9tIiwidXNlckFnZW50IiwiVFlQRSIsIndrc0V4dCIsIiRTeW1ib2wiLCJVU0VfU1lNQk9MIiwiJGV4cG9ydHMiLCJjbGFzc29mIiwiZ2V0SXRlcmF0b3JNZXRob2QiLCJjcmVhdGVQcm9wZXJ0eSIsImFycmF5TGlrZSIsIm1hcGZuIiwibWFwcGluZyIsImFkZFRvVW5zY29wYWJsZXMiLCJBcmd1bWVudHMiLCJGUHJvdG8iLCJuYW1lUkUiLCJtYXRjaCIsInN0cm9uZyIsIk1BUCIsIk1hcCIsInNwZWNpZXNDb25zdHJ1Y3RvciIsIm1pY3JvdGFzayIsIm5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlIiwicGVyZm9ybSIsInByb21pc2VSZXNvbHZlIiwiUFJPTUlTRSIsInZlcnNpb25zIiwidjgiLCIkUHJvbWlzZSIsImVtcHR5IiwiSW50ZXJuYWwiLCJuZXdHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkiLCJPd25Qcm9taXNlQ2FwYWJpbGl0eSIsIldyYXBwZXIiLCJVU0VfTkFUSVZFIiwiRmFrZVByb21pc2UiLCJQcm9taXNlUmVqZWN0aW9uRXZlbnQiLCJpbmRleE9mIiwiaXNUaGVuYWJsZSIsImlzUmVqZWN0IiwiX24iLCJjaGFpbiIsIl9jIiwiX3YiLCJvayIsIl9zIiwicmVhY3Rpb24iLCJoYW5kbGVyIiwiZmFpbCIsImV4aXRlZCIsIl9oIiwib25IYW5kbGVVbmhhbmRsZWQiLCJvblVuaGFuZGxlZCIsInVuaGFuZGxlZCIsImlzVW5oYW5kbGVkIiwiY29uc29sZSIsImVtaXQiLCJvbnVuaGFuZGxlZHJlamVjdGlvbiIsInJlYXNvbiIsImVycm9yIiwiX2EiLCJvbnJlamVjdGlvbmhhbmRsZWQiLCIkcmVqZWN0IiwiX2QiLCJfdyIsIiRyZXNvbHZlIiwiZXhlY3V0b3IiLCJlcnIiLCJvbkZ1bGZpbGxlZCIsIm9uUmVqZWN0ZWQiLCJjYXBhYmlsaXR5IiwiYWxsIiwicmVtYWluaW5nIiwiJGluZGV4IiwiYWxyZWFkeUNhbGxlZCIsInJhY2UiLCJmbGFncyIsIlNQTElUIiwiJHNwbGl0IiwiX3NwbGl0IiwiJHB1c2giLCIkU1BMSVQiLCJMRU5HVEgiLCJMQVNUX0lOREVYIiwiTlBDRyIsInNlcGFyYXRvciIsImxpbWl0Iiwib3V0cHV0IiwibGFzdExhc3RJbmRleCIsInNwbGl0TGltaXQiLCJzZXBhcmF0b3JDb3B5Iiwic2VwYXJhdG9yMiIsImxhc3RJbmRleCIsImxhc3RMZW5ndGgiLCJyZXBsYWNlIiwiJGZsYWdzIiwiZGVmaW5lIiwiJGF0IiwicG9pbnQiLCIkZmFpbHMiLCJ3a3NEZWZpbmUiLCJlbnVtS2V5cyIsIl9jcmVhdGUiLCJnT1BORXh0IiwiJEdPUEQiLCIkRFAiLCIkSlNPTiIsIkpTT04iLCJfc3RyaW5naWZ5Iiwic3RyaW5naWZ5IiwiSElEREVOIiwiVE9fUFJJTUlUSVZFIiwiU3ltYm9sUmVnaXN0cnkiLCJBbGxTeW1ib2xzIiwiT1BTeW1ib2xzIiwiUU9iamVjdCIsInNldHRlciIsImZpbmRDaGlsZCIsInNldFN5bWJvbERlc2MiLCJwcm90b0Rlc2MiLCJ3cmFwIiwic3ltIiwiaXNTeW1ib2wiLCIkZGVmaW5lUHJvcGVydGllcyIsIiRjcmVhdGUiLCIkcHJvcGVydHlJc0VudW1lcmFibGUiLCJFIiwiJGdldE93blByb3BlcnR5RGVzY3JpcHRvciIsIiRnZXRPd25Qcm9wZXJ0eU5hbWVzIiwiJGdldE93blByb3BlcnR5U3ltYm9scyIsIklTX09QIiwiJHNldCIsImVzNlN5bWJvbHMiLCJ3ZWxsS25vd25TeW1ib2xzIiwia2V5Rm9yIiwidXNlU2V0dGVyIiwidXNlU2ltcGxlIiwicmVwbGFjZXIiLCIkcmVwbGFjZXIiLCIkaXRlcmF0b3JzIiwiVE9fU1RSSU5HX1RBRyIsIkFycmF5VmFsdWVzIiwiRE9NSXRlcmFibGVzIiwiQ1NTUnVsZUxpc3QiLCJDU1NTdHlsZURlY2xhcmF0aW9uIiwiQ1NTVmFsdWVMaXN0IiwiQ2xpZW50UmVjdExpc3QiLCJET01SZWN0TGlzdCIsIkRPTVN0cmluZ0xpc3QiLCJET01Ub2tlbkxpc3QiLCJEYXRhVHJhbnNmZXJJdGVtTGlzdCIsIkZpbGVMaXN0IiwiSFRNTEFsbENvbGxlY3Rpb24iLCJIVE1MQ29sbGVjdGlvbiIsIkhUTUxGb3JtRWxlbWVudCIsIkhUTUxTZWxlY3RFbGVtZW50IiwiTWVkaWFMaXN0IiwiTWltZVR5cGVBcnJheSIsIk5hbWVkTm9kZU1hcCIsIk5vZGVMaXN0IiwiUGFpbnRSZXF1ZXN0TGlzdCIsIlBsdWdpbiIsIlBsdWdpbkFycmF5IiwiU1ZHTGVuZ3RoTGlzdCIsIlNWR051bWJlckxpc3QiLCJTVkdQYXRoU2VnTGlzdCIsIlNWR1BvaW50TGlzdCIsIlNWR1N0cmluZ0xpc3QiLCJTVkdUcmFuc2Zvcm1MaXN0IiwiU291cmNlQnVmZmVyTGlzdCIsIlN0eWxlU2hlZXRMaXN0IiwiVGV4dFRyYWNrQ3VlTGlzdCIsIlRleHRUcmFja0xpc3QiLCJUb3VjaExpc3QiLCJjb2xsZWN0aW9ucyIsImV4cGxpY2l0IiwiQ29sbGVjdGlvbiIsIlNpZWJlbEFwcEZhY2FkZSIsIk4xOUhlbHBlciIsInNldHRpbmdzIiwiYXBwbGV0TmFtZSIsImFwcGxldCIsIlNpZWJlbEFwcCIsIlNfQXBwIiwiR2V0QWN0aXZlVmlldyIsIkdldEFwcGxldCIsIkVycm9yIiwicG0iLCJHZXRQTW9kZWwiLCJsb2ciLCJuMTlwb3B1cENvbnRyb2xsZXIiLCJOMTlwb3B1cENvbnRyb2xsZXIiLCJjbG9zZVBvcHVwQXBwbGV0IiwiY2IiLCJjYW5PcGVuUG9wdXAiLCJ2aWV3IiwiU2V0QWN0aXZlQXBwbGV0SW50ZXJuYWwiLCJfc2V0QWN0aXZlQ29udHJvbCIsInNob3dQb3B1cEFwcGxldCIsIl9zaG93UG9wdXBBcHBsZXQiLCJjb250cm9sTmFtZSIsImlzTGlzdEFwcGxldCIsImdldFNlbGVjdGlvbiIsIkV4ZWN1dGVNZXRob2QiLCJ0YXJnZXRWaWV3TmFtZSIsInRhcmdldEFwcGxldE5hbWUiLCJyb3dJZCIsImdldEN1cnJlbnRSZWNvcmQiLCJJZCIsIlNXRUNtZCIsImVuY29kZVVSSSIsIkdvdG9WaWV3IiwicG9wdXBQTSIsIkdldFBvcHVwUE0iLCJJbml0IiwiU2V0dXAiLCJOMTliYXNlQXBwbGV0IiwiY29uc3RzIiwiU2llYmVsSlMiLCJEZXBlbmRlbmN5IiwiR2V0IiwicmVxdWlyZWQiLCJsb3YiLCJib29sT2JqZWN0IiwiRGF0dW1Cb29sT2JqZWN0IiwiYmNJZCIsIkdldEJDSWQiLCJub3RpZmljYXRpb25zIiwiTjE5bm90aWZpY2F0aW9ucyIsImFwcGxldElkIiwiYXBwbGV0SW5wdXRzIiwiZ2V0RWxlbWVudEJ5SWQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYXR0cmlidXRlcyIsIm5vZGVWYWx1ZSIsIkF0dGFjaE5vdGlmaWNhdGlvbkhhbmRsZXIiLCJwcm9wU2V0Iiwidmlld05hbWUiLCJHZXROYW1lIiwiR2V0UHJvcGVydHkiLCJDQ0ZNaXNjVXRpbF9TdHJpbmdUb0FycmF5Iiwid2FybiIsInNwbGljZSIsImZpbHRlciIsImZ1bmMiLCJzdWJzY3JpYmUiLCJ0b2tlbiIsInVuc3Vic2NyaWJlIiwiaW5wdXROYW1lIiwiX2dldENvbnRyb2wiLCJjb250cm9sVWlUeXBlIiwiU2V0VmFsdWUiLCJHZXRBc1N0cmluZyIsIm1ldGhvZCIsImNhbkludm9rZU1ldGhvZCIsImNvbnRyb2xzIiwiYXBwbGV0Q29udHJvbHMiLCJfcmV0dXJuQ29udHJvbHMiLCJjb250cm9sIiwiR2V0VUlUeXBlIiwiX2lzU2tpcENvbnRyb2wiLCJjb250cm9sSW5wdXROYW1lIiwiR2V0SW5wdXROYW1lIiwib2JqIiwibGFiZWwiLCJHZXREaXNwbGF5TmFtZSIsInVpVHlwZSIsIl9pc1JlcXVpcmVkIiwiYm91bmRlZFBpY2siLCJJc0JvdW5kZWRQaWNrIiwic3RhdGljUGljayIsIklzU3RhdGljQm91bmRlZCIsImlzUG9zdENoYW5nZXMiLCJJc1Bvc3RDaGFuZ2VzIiwibWF4U2l6ZSIsIkdldE1heFNpemUiLCJmaWVsZE5hbWUiLCJHZXRGaWVsZE5hbWUiLCJpc0xpbmsiLCJyZWFkT25seSIsInJlYWRvbmx5Iiwic3RhdGljTE9WIiwiR2V0U3RhdGljTE9WIiwiR2V0UmFkaW9Hcm91cFByb3BTZXQiLCJjaGlsZEFycmF5IiwibG92cyIsInJlZHVjZSIsImFjYyIsImxpYyIsIkZpZWxkVmFsdWUiLCJEaXNwbGF5TmFtZSIsImFkZFJlY29yZEluZGV4IiwibWFwIiwiX2luZHgiLCJfbmF2aWdhdGUiLCJnZXRSb3dMaXN0Um93Q291bnQiLCJwb3NpdGlvbk9uUm93IiwiX25ld1JlY29yZCIsImFzeW5jIiwiY2JlcnIiLCJfd3JpdGVSZWNvcmQiLCJjYXRjaCIsIl9nZXRWYWx1ZUZvckNvbnRyb2wiLCJPbkNvbnRyb2xFdmVudCIsImlzU3RhdGljIiwiaXNTdGF0aWNQaWNrIiwiX3ZhbGlkYXRlUGlja0NvbnRyb2wiLCJwcyIsIk5ld1Byb3BlcnR5U2V0IiwiU2V0UHJvcGVydHkiLCJzb3J0IiwiU2V0QXNTdHJpbmciLCJHZXRWYWx1ZSIsIl9jb250cm9scyIsInJhdyIsImJjIiwiSXNJbnNlcnRQZW5kaW5nIiwiSXNDb21taXRQZW5kaW5nIiwiY29udHJvbE1ldGhvZCIsIkdldE1ldGhvZE5hbWUiLCJfbWV0aG9kcyIsImdldENvbnRyb2xzIiwiX2dldE1ldGhvZHMiLCJzdGF0ZSIsImNhbGN1bGF0ZUN1cnJlbnRSZWNvcmRTdGF0ZSIsImdldFJlY29yZFNldCIsImdldFJhd1JlY29yZFNldCIsIl9nZXRDb250cm9sVmFsdWUiLCJleHByIiwiR2V0QnVzQ29tcCIsIlNldEZpZWxkVmFsdWUiLCJfcXVlcnlCeUlkIiwiX25ld1F1ZXJ5IiwiYWkiLCJzY29wZSIsIm1hc2siLCJzZWxmYnVzeSIsInBzT3V0cHV0IiwicHNJbnB1dCIsIl9nZXRDb250cm9sSW5wdXROYW1lRm9ySWRRdWVyeSIsIkNsb25lIiwiQ2FsbFNlcnZlckFwcGxldCIsInBhcmFtcyIsIl9xdWVyeSIsImlkcyIsImZpZWxkcyIsInVzZUFjdGl2ZUJPIiwiX2dldE1WRiIsInBzSW5wdXRzIiwiR2V0QWN0aXZlQnVzT2JqIiwiU2V0VHlwZSIsIl9nZXRGaWVsZE5hbWVGb3JDb250cm9sIiwiQWRkQ2hpbGQiLCJicyIsIkdldFNlcnZpY2UiLCJlcnJjYiIsIm1ldGhvZE5hbWUiLCJJbnB1dHMiLCJwc091dHB1dHMiLCJHZXRDaGlsZEJ5VHlwZSIsIkdldFR5cGUiLCJyZWMiLCJwcmltYXJ5IiwicHJvcEFycmF5IiwiSW52b2tlTWV0aG9kIiwiYW1vdW50Iiwic2l6ZSIsInRlbXAiLCJuZXh0UmVjb3JkU2V0IiwiaGFzTmV4dCIsIlNldENvbnRyb2xWYWx1ZUJ5TmFtZSIsImZpZWxkVG9Db250cm9sTWFwIiwiZmllbGQiLCJnZXRGaWVsZFRvQ29udHJvbE1hcCIsInNlcnZpY2UiLCJpblByb3BTZXQiLCJyZWNlaXZlZE5vdGlmaWNhdGlvbnMiLCJzdWJzY3JpYmVycyIsInN1YlRva2VuIiwiTjE5cG9wdXBBcHBsZXQiLCJHZXRSZW5kZXJlciIsInJlc2l6ZSIsIkdldFNlbGVjdGVkUm93Iiwic2luZ2xldG9uIiwic2luZ2xldG9uRW5mb3JjZXIiLCJlbmZvcmNlciIsImlzUG9wdXBIaWRkZW4iLCJyZXNvbHZlUHJvbWlzZSIsInBvcHVwQXBwbGV0TjE5IiwiYXNzb2NBcHBsZXROMTkiLCJOMTlwcm9jZXNzTmV3UG9wdXAiLCJQcm9jZXNzTmV3UG9wdXAiLCJwcm9jZXNzTmV3UG9wdXAiLCJOMTl2aWV3TG9hZGVkIiwiY29udGVudFVwZGF0ZXIiLCJ2aWV3TG9hZGVkIiwiSXNQb3B1cE9wZW4iLCJHZXRQb3B1cEFwcGxldCIsImFzc29jQXBwbGV0IiwiU2V0U2hvd05ld1BhZ2UiLCJhY3RpdmVWaWV3IiwiYWN0aXZlQXBwbGV0IiwiR2V0QWN0aXZlQXBwbGV0IiwiU2V0QWN0aXZlQXBwbGV0QmVmb3JlUG9wdXAiLCJBZGRQcm9wZXJ0eSIsInVybCIsIkdldFBhZ2VVUkwiLCJpc1BvcHVwQXBwbGV0IiwiR2V0UG9wdXBBcHBsZXROYW1lIiwiaXNQaWNrQXBwbGV0IiwiR2V0UGlja0FwcGxldE5hbWUiLCJpc09wZW4iLCJjdXJyUG9wdXBzIiwiR2V0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U0FBUyxDQUFDQyxLQUFWLENBQWdCQyxhQUFoQixHQUFnQ3NPLFlBQWhDLEdBQStDMU8sVUFBL0MsQ0FBZjs7QUFDQSxVQUFJLENBQUNDLE1BQUwsRUFBYTtBQUNYLGNBQU0sSUFBSUssS0FBSixlQUFpQk4sVUFBakIsaUNBQU47QUFDRDs7QUFDRCxhQUFPQyxNQUFQO0FBQ0QiLCJmaWxlIjoiTjE5SGVscGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwiLy8gMjIuMS4zLjMxIEFycmF5LnByb3RvdHlwZVtAQHVuc2NvcGFibGVzXVxudmFyIFVOU0NPUEFCTEVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3Vuc2NvcGFibGVzJyk7XG52YXIgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcbmlmIChBcnJheVByb3RvW1VOU0NPUEFCTEVTXSA9PSB1bmRlZmluZWQpIHJlcXVpcmUoJy4vX2hpZGUnKShBcnJheVByb3RvLCBVTlNDT1BBQkxFUywge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIEFycmF5UHJvdG9bVU5TQ09QQUJMRVNdW2tleV0gPSB0cnVlO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBDb25zdHJ1Y3RvciwgbmFtZSwgZm9yYmlkZGVuRmllbGQpIHtcbiAgaWYgKCEoaXQgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikgfHwgKGZvcmJpZGRlbkZpZWxkICE9PSB1bmRlZmluZWQgJiYgZm9yYmlkZGVuRmllbGQgaW4gaXQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKG5hbWUgKyAnOiBpbmNvcnJlY3QgaW52b2NhdGlvbiEnKTtcbiAgfSByZXR1cm4gaXQ7XG59O1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwiLy8gZmFsc2UgLT4gQXJyYXkjaW5kZXhPZlxuLy8gdHJ1ZSAgLT4gQXJyYXkjaW5jbHVkZXNcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciB0b0Fic29sdXRlSW5kZXggPSByZXF1aXJlKCcuL190by1hYnNvbHV0ZS1pbmRleCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoSVNfSU5DTFVERVMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgZWwsIGZyb21JbmRleCkge1xuICAgIHZhciBPID0gdG9JT2JqZWN0KCR0aGlzKTtcbiAgICB2YXIgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgIHZhciBpbmRleCA9IHRvQWJzb2x1dGVJbmRleChmcm9tSW5kZXgsIGxlbmd0aCk7XG4gICAgdmFyIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgaWYgKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKSB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIHtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICAgIGlmICh2YWx1ZSAhPSB2YWx1ZSkgcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjaW5kZXhPZiBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykgaWYgKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pIHtcbiAgICAgIGlmIChPW2luZGV4XSA9PT0gZWwpIHJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07XG4iLCIvLyBnZXR0aW5nIHRhZyBmcm9tIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xudmFyIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuLy8gRVMzIHdyb25nIGhlcmVcbnZhciBBUkcgPSBjb2YoZnVuY3Rpb24gKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID09ICdBcmd1bWVudHMnO1xuXG4vLyBmYWxsYmFjayBmb3IgSUUxMSBTY3JpcHQgQWNjZXNzIERlbmllZCBlcnJvclxudmFyIHRyeUdldCA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIE8sIFQsIEI7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mIChUID0gdHJ5R2V0KE8gPSBPYmplY3QoaXQpLCBUQUcpKSA9PSAnc3RyaW5nJyA/IFRcbiAgICAvLyBidWlsdGluVGFnIGNhc2VcbiAgICA6IEFSRyA/IGNvZihPKVxuICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcbiAgICA6IChCID0gY29mKE8pKSA9PSAnT2JqZWN0JyAmJiB0eXBlb2YgTy5jYWxsZWUgPT0gJ2Z1bmN0aW9uJyA/ICdBcmd1bWVudHMnIDogQjtcbn07XG4iLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKTtcbnZhciByZWRlZmluZUFsbCA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lLWFsbCcpO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGFuSW5zdGFuY2UgPSByZXF1aXJlKCcuL19hbi1pbnN0YW5jZScpO1xudmFyIGZvck9mID0gcmVxdWlyZSgnLi9fZm9yLW9mJyk7XG52YXIgJGl0ZXJEZWZpbmUgPSByZXF1aXJlKCcuL19pdGVyLWRlZmluZScpO1xudmFyIHN0ZXAgPSByZXF1aXJlKCcuL19pdGVyLXN0ZXAnKTtcbnZhciBzZXRTcGVjaWVzID0gcmVxdWlyZSgnLi9fc2V0LXNwZWNpZXMnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyk7XG52YXIgZmFzdEtleSA9IHJlcXVpcmUoJy4vX21ldGEnKS5mYXN0S2V5O1xudmFyIHZhbGlkYXRlID0gcmVxdWlyZSgnLi9fdmFsaWRhdGUtY29sbGVjdGlvbicpO1xudmFyIFNJWkUgPSBERVNDUklQVE9SUyA/ICdfcycgOiAnc2l6ZSc7XG5cbnZhciBnZXRFbnRyeSA9IGZ1bmN0aW9uICh0aGF0LCBrZXkpIHtcbiAgLy8gZmFzdCBjYXNlXG4gIHZhciBpbmRleCA9IGZhc3RLZXkoa2V5KTtcbiAgdmFyIGVudHJ5O1xuICBpZiAoaW5kZXggIT09ICdGJykgcmV0dXJuIHRoYXQuX2lbaW5kZXhdO1xuICAvLyBmcm96ZW4gb2JqZWN0IGNhc2VcbiAgZm9yIChlbnRyeSA9IHRoYXQuX2Y7IGVudHJ5OyBlbnRyeSA9IGVudHJ5Lm4pIHtcbiAgICBpZiAoZW50cnkuayA9PSBrZXkpIHJldHVybiBlbnRyeTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGdldENvbnN0cnVjdG9yOiBmdW5jdGlvbiAod3JhcHBlciwgTkFNRSwgSVNfTUFQLCBBRERFUikge1xuICAgIHZhciBDID0gd3JhcHBlcihmdW5jdGlvbiAodGhhdCwgaXRlcmFibGUpIHtcbiAgICAgIGFuSW5zdGFuY2UodGhhdCwgQywgTkFNRSwgJ19pJyk7XG4gICAgICB0aGF0Ll90ID0gTkFNRTsgICAgICAgICAvLyBjb2xsZWN0aW9uIHR5cGVcbiAgICAgIHRoYXQuX2kgPSBjcmVhdGUobnVsbCk7IC8vIGluZGV4XG4gICAgICB0aGF0Ll9mID0gdW5kZWZpbmVkOyAgICAvLyBmaXJzdCBlbnRyeVxuICAgICAgdGhhdC5fbCA9IHVuZGVmaW5lZDsgICAgLy8gbGFzdCBlbnRyeVxuICAgICAgdGhhdFtTSVpFXSA9IDA7ICAgICAgICAgLy8gc2l6ZVxuICAgICAgaWYgKGl0ZXJhYmxlICE9IHVuZGVmaW5lZCkgZm9yT2YoaXRlcmFibGUsIElTX01BUCwgdGhhdFtBRERFUl0sIHRoYXQpO1xuICAgIH0pO1xuICAgIHJlZGVmaW5lQWxsKEMucHJvdG90eXBlLCB7XG4gICAgICAvLyAyMy4xLjMuMSBNYXAucHJvdG90eXBlLmNsZWFyKClcbiAgICAgIC8vIDIzLjIuMy4yIFNldC5wcm90b3R5cGUuY2xlYXIoKVxuICAgICAgY2xlYXI6IGZ1bmN0aW9uIGNsZWFyKCkge1xuICAgICAgICBmb3IgKHZhciB0aGF0ID0gdmFsaWRhdGUodGhpcywgTkFNRSksIGRhdGEgPSB0aGF0Ll9pLCBlbnRyeSA9IHRoYXQuX2Y7IGVudHJ5OyBlbnRyeSA9IGVudHJ5Lm4pIHtcbiAgICAgICAgICBlbnRyeS5yID0gdHJ1ZTtcbiAgICAgICAgICBpZiAoZW50cnkucCkgZW50cnkucCA9IGVudHJ5LnAubiA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBkZWxldGUgZGF0YVtlbnRyeS5pXTtcbiAgICAgICAgfVxuICAgICAgICB0aGF0Ll9mID0gdGhhdC5fbCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhhdFtTSVpFXSA9IDA7XG4gICAgICB9LFxuICAgICAgLy8gMjMuMS4zLjMgTWFwLnByb3RvdHlwZS5kZWxldGUoa2V5KVxuICAgICAgLy8gMjMuMi4zLjQgU2V0LnByb3RvdHlwZS5kZWxldGUodmFsdWUpXG4gICAgICAnZGVsZXRlJzogZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB2YXIgdGhhdCA9IHZhbGlkYXRlKHRoaXMsIE5BTUUpO1xuICAgICAgICB2YXIgZW50cnkgPSBnZXRFbnRyeSh0aGF0LCBrZXkpO1xuICAgICAgICBpZiAoZW50cnkpIHtcbiAgICAgICAgICB2YXIgbmV4dCA9IGVudHJ5Lm47XG4gICAgICAgICAgdmFyIHByZXYgPSBlbnRyeS5wO1xuICAgICAgICAgIGRlbGV0ZSB0aGF0Ll9pW2VudHJ5LmldO1xuICAgICAgICAgIGVudHJ5LnIgPSB0cnVlO1xuICAgICAgICAgIGlmIChwcmV2KSBwcmV2Lm4gPSBuZXh0O1xuICAgICAgICAgIGlmIChuZXh0KSBuZXh0LnAgPSBwcmV2O1xuICAgICAgICAgIGlmICh0aGF0Ll9mID09IGVudHJ5KSB0aGF0Ll9mID0gbmV4dDtcbiAgICAgICAgICBpZiAodGhhdC5fbCA9PSBlbnRyeSkgdGhhdC5fbCA9IHByZXY7XG4gICAgICAgICAgdGhhdFtTSVpFXS0tO1xuICAgICAgICB9IHJldHVybiAhIWVudHJ5O1xuICAgICAgfSxcbiAgICAgIC8vIDIzLjIuMy42IFNldC5wcm90b3R5cGUuZm9yRWFjaChjYWxsYmFja2ZuLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxuICAgICAgLy8gMjMuMS4zLjUgTWFwLnByb3RvdHlwZS5mb3JFYWNoKGNhbGxiYWNrZm4sIHRoaXNBcmcgPSB1bmRlZmluZWQpXG4gICAgICBmb3JFYWNoOiBmdW5jdGlvbiBmb3JFYWNoKGNhbGxiYWNrZm4gLyogLCB0aGF0ID0gdW5kZWZpbmVkICovKSB7XG4gICAgICAgIHZhbGlkYXRlKHRoaXMsIE5BTUUpO1xuICAgICAgICB2YXIgZiA9IGN0eChjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCwgMyk7XG4gICAgICAgIHZhciBlbnRyeTtcbiAgICAgICAgd2hpbGUgKGVudHJ5ID0gZW50cnkgPyBlbnRyeS5uIDogdGhpcy5fZikge1xuICAgICAgICAgIGYoZW50cnkudiwgZW50cnkuaywgdGhpcyk7XG4gICAgICAgICAgLy8gcmV2ZXJ0IHRvIHRoZSBsYXN0IGV4aXN0aW5nIGVudHJ5XG4gICAgICAgICAgd2hpbGUgKGVudHJ5ICYmIGVudHJ5LnIpIGVudHJ5ID0gZW50cnkucDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8vIDIzLjEuMy43IE1hcC5wcm90b3R5cGUuaGFzKGtleSlcbiAgICAgIC8vIDIzLjIuMy43IFNldC5wcm90b3R5cGUuaGFzKHZhbHVlKVxuICAgICAgaGFzOiBmdW5jdGlvbiBoYXMoa2V5KSB7XG4gICAgICAgIHJldHVybiAhIWdldEVudHJ5KHZhbGlkYXRlKHRoaXMsIE5BTUUpLCBrZXkpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChERVNDUklQVE9SUykgZFAoQy5wcm90b3R5cGUsICdzaXplJywge1xuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB2YWxpZGF0ZSh0aGlzLCBOQU1FKVtTSVpFXTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gQztcbiAgfSxcbiAgZGVmOiBmdW5jdGlvbiAodGhhdCwga2V5LCB2YWx1ZSkge1xuICAgIHZhciBlbnRyeSA9IGdldEVudHJ5KHRoYXQsIGtleSk7XG4gICAgdmFyIHByZXYsIGluZGV4O1xuICAgIC8vIGNoYW5nZSBleGlzdGluZyBlbnRyeVxuICAgIGlmIChlbnRyeSkge1xuICAgICAgZW50cnkudiA9IHZhbHVlO1xuICAgIC8vIGNyZWF0ZSBuZXcgZW50cnlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhhdC5fbCA9IGVudHJ5ID0ge1xuICAgICAgICBpOiBpbmRleCA9IGZhc3RLZXkoa2V5LCB0cnVlKSwgLy8gPC0gaW5kZXhcbiAgICAgICAgazoga2V5LCAgICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIGtleVxuICAgICAgICB2OiB2YWx1ZSwgICAgICAgICAgICAgICAgICAgICAgLy8gPC0gdmFsdWVcbiAgICAgICAgcDogcHJldiA9IHRoYXQuX2wsICAgICAgICAgICAgIC8vIDwtIHByZXZpb3VzIGVudHJ5XG4gICAgICAgIG46IHVuZGVmaW5lZCwgICAgICAgICAgICAgICAgICAvLyA8LSBuZXh0IGVudHJ5XG4gICAgICAgIHI6IGZhbHNlICAgICAgICAgICAgICAgICAgICAgICAvLyA8LSByZW1vdmVkXG4gICAgICB9O1xuICAgICAgaWYgKCF0aGF0Ll9mKSB0aGF0Ll9mID0gZW50cnk7XG4gICAgICBpZiAocHJldikgcHJldi5uID0gZW50cnk7XG4gICAgICB0aGF0W1NJWkVdKys7XG4gICAgICAvLyBhZGQgdG8gaW5kZXhcbiAgICAgIGlmIChpbmRleCAhPT0gJ0YnKSB0aGF0Ll9pW2luZGV4XSA9IGVudHJ5O1xuICAgIH0gcmV0dXJuIHRoYXQ7XG4gIH0sXG4gIGdldEVudHJ5OiBnZXRFbnRyeSxcbiAgc2V0U3Ryb25nOiBmdW5jdGlvbiAoQywgTkFNRSwgSVNfTUFQKSB7XG4gICAgLy8gYWRkIC5rZXlzLCAudmFsdWVzLCAuZW50cmllcywgW0BAaXRlcmF0b3JdXG4gICAgLy8gMjMuMS4zLjQsIDIzLjEuMy44LCAyMy4xLjMuMTEsIDIzLjEuMy4xMiwgMjMuMi4zLjUsIDIzLjIuMy44LCAyMy4yLjMuMTAsIDIzLjIuMy4xMVxuICAgICRpdGVyRGVmaW5lKEMsIE5BTUUsIGZ1bmN0aW9uIChpdGVyYXRlZCwga2luZCkge1xuICAgICAgdGhpcy5fdCA9IHZhbGlkYXRlKGl0ZXJhdGVkLCBOQU1FKTsgLy8gdGFyZ2V0XG4gICAgICB0aGlzLl9rID0ga2luZDsgICAgICAgICAgICAgICAgICAgICAvLyBraW5kXG4gICAgICB0aGlzLl9sID0gdW5kZWZpbmVkOyAgICAgICAgICAgICAgICAvLyBwcmV2aW91c1xuICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAgIHZhciBraW5kID0gdGhhdC5faztcbiAgICAgIHZhciBlbnRyeSA9IHRoYXQuX2w7XG4gICAgICAvLyByZXZlcnQgdG8gdGhlIGxhc3QgZXhpc3RpbmcgZW50cnlcbiAgICAgIHdoaWxlIChlbnRyeSAmJiBlbnRyeS5yKSBlbnRyeSA9IGVudHJ5LnA7XG4gICAgICAvLyBnZXQgbmV4dCBlbnRyeVxuICAgICAgaWYgKCF0aGF0Ll90IHx8ICEodGhhdC5fbCA9IGVudHJ5ID0gZW50cnkgPyBlbnRyeS5uIDogdGhhdC5fdC5fZikpIHtcbiAgICAgICAgLy8gb3IgZmluaXNoIHRoZSBpdGVyYXRpb25cbiAgICAgICAgdGhhdC5fdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgcmV0dXJuIHN0ZXAoMSk7XG4gICAgICB9XG4gICAgICAvLyByZXR1cm4gc3RlcCBieSBraW5kXG4gICAgICBpZiAoa2luZCA9PSAna2V5cycpIHJldHVybiBzdGVwKDAsIGVudHJ5LmspO1xuICAgICAgaWYgKGtpbmQgPT0gJ3ZhbHVlcycpIHJldHVybiBzdGVwKDAsIGVudHJ5LnYpO1xuICAgICAgcmV0dXJuIHN0ZXAoMCwgW2VudHJ5LmssIGVudHJ5LnZdKTtcbiAgICB9LCBJU19NQVAgPyAnZW50cmllcycgOiAndmFsdWVzJywgIUlTX01BUCwgdHJ1ZSk7XG5cbiAgICAvLyBhZGQgW0BAc3BlY2llc10sIDIzLjEuMi4yLCAyMy4yLjIuMlxuICAgIHNldFNwZWNpZXMoTkFNRSk7XG4gIH1cbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciByZWRlZmluZUFsbCA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lLWFsbCcpO1xudmFyIG1ldGEgPSByZXF1aXJlKCcuL19tZXRhJyk7XG52YXIgZm9yT2YgPSByZXF1aXJlKCcuL19mb3Itb2YnKTtcbnZhciBhbkluc3RhbmNlID0gcmVxdWlyZSgnLi9fYW4taW5zdGFuY2UnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbnZhciAkaXRlckRldGVjdCA9IHJlcXVpcmUoJy4vX2l0ZXItZGV0ZWN0Jyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIGluaGVyaXRJZlJlcXVpcmVkID0gcmVxdWlyZSgnLi9faW5oZXJpdC1pZi1yZXF1aXJlZCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChOQU1FLCB3cmFwcGVyLCBtZXRob2RzLCBjb21tb24sIElTX01BUCwgSVNfV0VBSykge1xuICB2YXIgQmFzZSA9IGdsb2JhbFtOQU1FXTtcbiAgdmFyIEMgPSBCYXNlO1xuICB2YXIgQURERVIgPSBJU19NQVAgPyAnc2V0JyA6ICdhZGQnO1xuICB2YXIgcHJvdG8gPSBDICYmIEMucHJvdG90eXBlO1xuICB2YXIgTyA9IHt9O1xuICB2YXIgZml4TWV0aG9kID0gZnVuY3Rpb24gKEtFWSkge1xuICAgIHZhciBmbiA9IHByb3RvW0tFWV07XG4gICAgcmVkZWZpbmUocHJvdG8sIEtFWSxcbiAgICAgIEtFWSA9PSAnZGVsZXRlJyA/IGZ1bmN0aW9uIChhKSB7XG4gICAgICAgIHJldHVybiBJU19XRUFLICYmICFpc09iamVjdChhKSA/IGZhbHNlIDogZm4uY2FsbCh0aGlzLCBhID09PSAwID8gMCA6IGEpO1xuICAgICAgfSA6IEtFWSA9PSAnaGFzJyA/IGZ1bmN0aW9uIGhhcyhhKSB7XG4gICAgICAgIHJldHVybiBJU19XRUFLICYmICFpc09iamVjdChhKSA/IGZhbHNlIDogZm4uY2FsbCh0aGlzLCBhID09PSAwID8gMCA6IGEpO1xuICAgICAgfSA6IEtFWSA9PSAnZ2V0JyA/IGZ1bmN0aW9uIGdldChhKSB7XG4gICAgICAgIHJldHVybiBJU19XRUFLICYmICFpc09iamVjdChhKSA/IHVuZGVmaW5lZCA6IGZuLmNhbGwodGhpcywgYSA9PT0gMCA/IDAgOiBhKTtcbiAgICAgIH0gOiBLRVkgPT0gJ2FkZCcgPyBmdW5jdGlvbiBhZGQoYSkgeyBmbi5jYWxsKHRoaXMsIGEgPT09IDAgPyAwIDogYSk7IHJldHVybiB0aGlzOyB9XG4gICAgICAgIDogZnVuY3Rpb24gc2V0KGEsIGIpIHsgZm4uY2FsbCh0aGlzLCBhID09PSAwID8gMCA6IGEsIGIpOyByZXR1cm4gdGhpczsgfVxuICAgICk7XG4gIH07XG4gIGlmICh0eXBlb2YgQyAhPSAnZnVuY3Rpb24nIHx8ICEoSVNfV0VBSyB8fCBwcm90by5mb3JFYWNoICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgbmV3IEMoKS5lbnRyaWVzKCkubmV4dCgpO1xuICB9KSkpIHtcbiAgICAvLyBjcmVhdGUgY29sbGVjdGlvbiBjb25zdHJ1Y3RvclxuICAgIEMgPSBjb21tb24uZ2V0Q29uc3RydWN0b3Iod3JhcHBlciwgTkFNRSwgSVNfTUFQLCBBRERFUik7XG4gICAgcmVkZWZpbmVBbGwoQy5wcm90b3R5cGUsIG1ldGhvZHMpO1xuICAgIG1ldGEuTkVFRCA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGluc3RhbmNlID0gbmV3IEMoKTtcbiAgICAvLyBlYXJseSBpbXBsZW1lbnRhdGlvbnMgbm90IHN1cHBvcnRzIGNoYWluaW5nXG4gICAgdmFyIEhBU05UX0NIQUlOSU5HID0gaW5zdGFuY2VbQURERVJdKElTX1dFQUsgPyB7fSA6IC0wLCAxKSAhPSBpbnN0YW5jZTtcbiAgICAvLyBWOCB+ICBDaHJvbWl1bSA0MC0gd2Vhay1jb2xsZWN0aW9ucyB0aHJvd3Mgb24gcHJpbWl0aXZlcywgYnV0IHNob3VsZCByZXR1cm4gZmFsc2VcbiAgICB2YXIgVEhST1dTX09OX1BSSU1JVElWRVMgPSBmYWlscyhmdW5jdGlvbiAoKSB7IGluc3RhbmNlLmhhcygxKTsgfSk7XG4gICAgLy8gbW9zdCBlYXJseSBpbXBsZW1lbnRhdGlvbnMgZG9lc24ndCBzdXBwb3J0cyBpdGVyYWJsZXMsIG1vc3QgbW9kZXJuIC0gbm90IGNsb3NlIGl0IGNvcnJlY3RseVxuICAgIHZhciBBQ0NFUFRfSVRFUkFCTEVTID0gJGl0ZXJEZXRlY3QoZnVuY3Rpb24gKGl0ZXIpIHsgbmV3IEMoaXRlcik7IH0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuICAgIC8vIGZvciBlYXJseSBpbXBsZW1lbnRhdGlvbnMgLTAgYW5kICswIG5vdCB0aGUgc2FtZVxuICAgIHZhciBCVUdHWV9aRVJPID0gIUlTX1dFQUsgJiYgZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgICAgLy8gVjggfiBDaHJvbWl1bSA0Mi0gZmFpbHMgb25seSB3aXRoIDUrIGVsZW1lbnRzXG4gICAgICB2YXIgJGluc3RhbmNlID0gbmV3IEMoKTtcbiAgICAgIHZhciBpbmRleCA9IDU7XG4gICAgICB3aGlsZSAoaW5kZXgtLSkgJGluc3RhbmNlW0FEREVSXShpbmRleCwgaW5kZXgpO1xuICAgICAgcmV0dXJuICEkaW5zdGFuY2UuaGFzKC0wKTtcbiAgICB9KTtcbiAgICBpZiAoIUFDQ0VQVF9JVEVSQUJMRVMpIHtcbiAgICAgIEMgPSB3cmFwcGVyKGZ1bmN0aW9uICh0YXJnZXQsIGl0ZXJhYmxlKSB7XG4gICAgICAgIGFuSW5zdGFuY2UodGFyZ2V0LCBDLCBOQU1FKTtcbiAgICAgICAgdmFyIHRoYXQgPSBpbmhlcml0SWZSZXF1aXJlZChuZXcgQmFzZSgpLCB0YXJnZXQsIEMpO1xuICAgICAgICBpZiAoaXRlcmFibGUgIT0gdW5kZWZpbmVkKSBmb3JPZihpdGVyYWJsZSwgSVNfTUFQLCB0aGF0W0FEREVSXSwgdGhhdCk7XG4gICAgICAgIHJldHVybiB0aGF0O1xuICAgICAgfSk7XG4gICAgICBDLnByb3RvdHlwZSA9IHByb3RvO1xuICAgICAgcHJvdG8uY29uc3RydWN0b3IgPSBDO1xuICAgIH1cbiAgICBpZiAoVEhST1dTX09OX1BSSU1JVElWRVMgfHwgQlVHR1lfWkVSTykge1xuICAgICAgZml4TWV0aG9kKCdkZWxldGUnKTtcbiAgICAgIGZpeE1ldGhvZCgnaGFzJyk7XG4gICAgICBJU19NQVAgJiYgZml4TWV0aG9kKCdnZXQnKTtcbiAgICB9XG4gICAgaWYgKEJVR0dZX1pFUk8gfHwgSEFTTlRfQ0hBSU5JTkcpIGZpeE1ldGhvZChBRERFUik7XG4gICAgLy8gd2VhayBjb2xsZWN0aW9ucyBzaG91bGQgbm90IGNvbnRhaW5zIC5jbGVhciBtZXRob2RcbiAgICBpZiAoSVNfV0VBSyAmJiBwcm90by5jbGVhcikgZGVsZXRlIHByb3RvLmNsZWFyO1xuICB9XG5cbiAgc2V0VG9TdHJpbmdUYWcoQywgTkFNRSk7XG5cbiAgT1tOQU1FXSA9IEM7XG4gICRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogKEMgIT0gQmFzZSksIE8pO1xuXG4gIGlmICghSVNfV0VBSykgY29tbW9uLnNldFN0cm9uZyhDLCBOQU1FLCBJU19NQVApO1xuXG4gIHJldHVybiBDO1xufTtcbiIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7IHZlcnNpb246ICcyLjUuNycgfTtcbmlmICh0eXBlb2YgX19lID09ICdudW1iZXInKSBfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4iLCIndXNlIHN0cmljdCc7XG52YXIgJGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBpbmRleCwgdmFsdWUpIHtcbiAgaWYgKGluZGV4IGluIG9iamVjdCkgJGRlZmluZVByb3BlcnR5LmYob2JqZWN0LCBpbmRleCwgY3JlYXRlRGVzYygwLCB2YWx1ZSkpO1xuICBlbHNlIG9iamVjdFtpbmRleF0gPSB2YWx1ZTtcbn07XG4iLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbiwgdGhhdCwgbGVuZ3RoKSB7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmICh0aGF0ID09PSB1bmRlZmluZWQpIHJldHVybiBmbjtcbiAgc3dpdGNoIChsZW5ndGgpIHtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbiAoYSkge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24gKC8qIC4uLmFyZ3MgKi8pIHtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG4iLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ID09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50O1xuLy8gdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCcgaW4gb2xkIElFXG52YXIgaXMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcbiIsIi8vIElFIDgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gKFxuICAnY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mJ1xuKS5zcGxpdCgnLCcpO1xuIiwiLy8gYWxsIGVudW1lcmFibGUgb2JqZWN0IGtleXMsIGluY2x1ZGVzIHN5bWJvbHNcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciBnT1BTID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKTtcbnZhciBwSUUgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgcmVzdWx0ID0gZ2V0S2V5cyhpdCk7XG4gIHZhciBnZXRTeW1ib2xzID0gZ09QUy5mO1xuICBpZiAoZ2V0U3ltYm9scykge1xuICAgIHZhciBzeW1ib2xzID0gZ2V0U3ltYm9scyhpdCk7XG4gICAgdmFyIGlzRW51bSA9IHBJRS5mO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIga2V5O1xuICAgIHdoaWxlIChzeW1ib2xzLmxlbmd0aCA+IGkpIGlmIChpc0VudW0uY2FsbChpdCwga2V5ID0gc3ltYm9sc1tpKytdKSkgcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG52YXIgJGV4cG9ydCA9IGZ1bmN0aW9uICh0eXBlLCBuYW1lLCBzb3VyY2UpIHtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkY7XG4gIHZhciBJU19HTE9CQUwgPSB0eXBlICYgJGV4cG9ydC5HO1xuICB2YXIgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuUztcbiAgdmFyIElTX1BST1RPID0gdHlwZSAmICRleHBvcnQuUDtcbiAgdmFyIElTX0JJTkQgPSB0eXBlICYgJGV4cG9ydC5CO1xuICB2YXIgdGFyZ2V0ID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIHx8IChnbG9iYWxbbmFtZV0gPSB7fSkgOiAoZ2xvYmFsW25hbWVdIHx8IHt9KVtQUk9UT1RZUEVdO1xuICB2YXIgZXhwb3J0cyA9IElTX0dMT0JBTCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pO1xuICB2YXIgZXhwUHJvdG8gPSBleHBvcnRzW1BST1RPVFlQRV0gfHwgKGV4cG9ydHNbUFJPVE9UWVBFXSA9IHt9KTtcbiAgdmFyIGtleSwgb3duLCBvdXQsIGV4cDtcbiAgaWYgKElTX0dMT0JBTCkgc291cmNlID0gbmFtZTtcbiAgZm9yIChrZXkgaW4gc291cmNlKSB7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYgdGFyZ2V0W2tleV0gIT09IHVuZGVmaW5lZDtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IChvd24gPyB0YXJnZXQgOiBzb3VyY2UpW2tleV07XG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICBleHAgPSBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHRlbmQgZ2xvYmFsXG4gICAgaWYgKHRhcmdldCkgcmVkZWZpbmUodGFyZ2V0LCBrZXksIG91dCwgdHlwZSAmICRleHBvcnQuVSk7XG4gICAgLy8gZXhwb3J0XG4gICAgaWYgKGV4cG9ydHNba2V5XSAhPSBvdXQpIGhpZGUoZXhwb3J0cywga2V5LCBleHApO1xuICAgIGlmIChJU19QUk9UTyAmJiBleHBQcm90b1trZXldICE9IG91dCkgZXhwUHJvdG9ba2V5XSA9IG91dDtcbiAgfVxufTtcbmdsb2JhbC5jb3JlID0gY29yZTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuJGV4cG9ydC5VID0gNjQ7ICAvLyBzYWZlXG4kZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbnZhciB3a3MgPSByZXF1aXJlKCcuL193a3MnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoS0VZLCBsZW5ndGgsIGV4ZWMpIHtcbiAgdmFyIFNZTUJPTCA9IHdrcyhLRVkpO1xuICB2YXIgZm5zID0gZXhlYyhkZWZpbmVkLCBTWU1CT0wsICcnW0tFWV0pO1xuICB2YXIgc3RyZm4gPSBmbnNbMF07XG4gIHZhciByeGZuID0gZm5zWzFdO1xuICBpZiAoZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIHZhciBPID0ge307XG4gICAgT1tTWU1CT0xdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfTtcbiAgICByZXR1cm4gJydbS0VZXShPKSAhPSA3O1xuICB9KSkge1xuICAgIHJlZGVmaW5lKFN0cmluZy5wcm90b3R5cGUsIEtFWSwgc3RyZm4pO1xuICAgIGhpZGUoUmVnRXhwLnByb3RvdHlwZSwgU1lNQk9MLCBsZW5ndGggPT0gMlxuICAgICAgLy8gMjEuMi41LjggUmVnRXhwLnByb3RvdHlwZVtAQHJlcGxhY2VdKHN0cmluZywgcmVwbGFjZVZhbHVlKVxuICAgICAgLy8gMjEuMi41LjExIFJlZ0V4cC5wcm90b3R5cGVbQEBzcGxpdF0oc3RyaW5nLCBsaW1pdClcbiAgICAgID8gZnVuY3Rpb24gKHN0cmluZywgYXJnKSB7IHJldHVybiByeGZuLmNhbGwoc3RyaW5nLCB0aGlzLCBhcmcpOyB9XG4gICAgICAvLyAyMS4yLjUuNiBSZWdFeHAucHJvdG90eXBlW0BAbWF0Y2hdKHN0cmluZylcbiAgICAgIC8vIDIxLjIuNS45IFJlZ0V4cC5wcm90b3R5cGVbQEBzZWFyY2hdKHN0cmluZylcbiAgICAgIDogZnVuY3Rpb24gKHN0cmluZykgeyByZXR1cm4gcnhmbi5jYWxsKHN0cmluZywgdGhpcyk7IH1cbiAgICApO1xuICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMjEuMi41LjMgZ2V0IFJlZ0V4cC5wcm90b3R5cGUuZmxhZ3NcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciB0aGF0ID0gYW5PYmplY3QodGhpcyk7XG4gIHZhciByZXN1bHQgPSAnJztcbiAgaWYgKHRoYXQuZ2xvYmFsKSByZXN1bHQgKz0gJ2cnO1xuICBpZiAodGhhdC5pZ25vcmVDYXNlKSByZXN1bHQgKz0gJ2knO1xuICBpZiAodGhhdC5tdWx0aWxpbmUpIHJlc3VsdCArPSAnbSc7XG4gIGlmICh0aGF0LnVuaWNvZGUpIHJlc3VsdCArPSAndSc7XG4gIGlmICh0aGF0LnN0aWNreSkgcmVzdWx0ICs9ICd5JztcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCJ2YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4vX2l0ZXItY2FsbCcpO1xudmFyIGlzQXJyYXlJdGVyID0gcmVxdWlyZSgnLi9faXMtYXJyYXktaXRlcicpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciBnZXRJdGVyRm4gPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xudmFyIEJSRUFLID0ge307XG52YXIgUkVUVVJOID0ge307XG52YXIgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXJhYmxlLCBlbnRyaWVzLCBmbiwgdGhhdCwgSVRFUkFUT1IpIHtcbiAgdmFyIGl0ZXJGbiA9IElURVJBVE9SID8gZnVuY3Rpb24gKCkgeyByZXR1cm4gaXRlcmFibGU7IH0gOiBnZXRJdGVyRm4oaXRlcmFibGUpO1xuICB2YXIgZiA9IGN0eChmbiwgdGhhdCwgZW50cmllcyA/IDIgOiAxKTtcbiAgdmFyIGluZGV4ID0gMDtcbiAgdmFyIGxlbmd0aCwgc3RlcCwgaXRlcmF0b3IsIHJlc3VsdDtcbiAgaWYgKHR5cGVvZiBpdGVyRm4gIT0gJ2Z1bmN0aW9uJykgdGhyb3cgVHlwZUVycm9yKGl0ZXJhYmxlICsgJyBpcyBub3QgaXRlcmFibGUhJyk7XG4gIC8vIGZhc3QgY2FzZSBmb3IgYXJyYXlzIHdpdGggZGVmYXVsdCBpdGVyYXRvclxuICBpZiAoaXNBcnJheUl0ZXIoaXRlckZuKSkgZm9yIChsZW5ndGggPSB0b0xlbmd0aChpdGVyYWJsZS5sZW5ndGgpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuICAgIHJlc3VsdCA9IGVudHJpZXMgPyBmKGFuT2JqZWN0KHN0ZXAgPSBpdGVyYWJsZVtpbmRleF0pWzBdLCBzdGVwWzFdKSA6IGYoaXRlcmFibGVbaW5kZXhdKTtcbiAgICBpZiAocmVzdWx0ID09PSBCUkVBSyB8fCByZXN1bHQgPT09IFJFVFVSTikgcmV0dXJuIHJlc3VsdDtcbiAgfSBlbHNlIGZvciAoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChpdGVyYWJsZSk7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTspIHtcbiAgICByZXN1bHQgPSBjYWxsKGl0ZXJhdG9yLCBmLCBzdGVwLnZhbHVlLCBlbnRyaWVzKTtcbiAgICBpZiAocmVzdWx0ID09PSBCUkVBSyB8fCByZXN1bHQgPT09IFJFVFVSTikgcmV0dXJuIHJlc3VsdDtcbiAgfVxufTtcbmV4cG9ydHMuQlJFQUsgPSBCUkVBSztcbmV4cG9ydHMuUkVUVVJOID0gUkVUVVJOO1xuIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYgKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpIF9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuIiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xufTtcbiIsInZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHJldHVybiBkUC5mKG9iamVjdCwga2V5LCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcbiIsInZhciBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50O1xubW9kdWxlLmV4cG9ydHMgPSBkb2N1bWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4iLCJtb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2RpdicpLCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19zZXQtcHJvdG8nKS5zZXQ7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0aGF0LCB0YXJnZXQsIEMpIHtcbiAgdmFyIFMgPSB0YXJnZXQuY29uc3RydWN0b3I7XG4gIHZhciBQO1xuICBpZiAoUyAhPT0gQyAmJiB0eXBlb2YgUyA9PSAnZnVuY3Rpb24nICYmIChQID0gUy5wcm90b3R5cGUpICE9PSBDLnByb3RvdHlwZSAmJiBpc09iamVjdChQKSAmJiBzZXRQcm90b3R5cGVPZikge1xuICAgIHNldFByb3RvdHlwZU9mKHRoYXQsIFApO1xuICB9IHJldHVybiB0aGF0O1xufTtcbiIsIi8vIGZhc3QgYXBwbHksIGh0dHA6Ly9qc3BlcmYubG5raXQuY29tL2Zhc3QtYXBwbHkvNVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4sIGFyZ3MsIHRoYXQpIHtcbiAgdmFyIHVuID0gdGhhdCA9PT0gdW5kZWZpbmVkO1xuICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XG4gICAgY2FzZSAwOiByZXR1cm4gdW4gPyBmbigpXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQpO1xuICAgIGNhc2UgMTogcmV0dXJuIHVuID8gZm4oYXJnc1swXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSk7XG4gICAgY2FzZSAyOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICBjYXNlIDM6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICAgIGNhc2UgNDogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSk7XG4gIH0gcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3MpO1xufTtcbiIsIi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbn07XG4iLCIvLyBjaGVjayBvbiBkZWZhdWx0IEFycmF5IGl0ZXJhdG9yXG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgIT09IHVuZGVmaW5lZCAmJiAoSXRlcmF0b3JzLkFycmF5ID09PSBpdCB8fCBBcnJheVByb3RvW0lURVJBVE9SXSA9PT0gaXQpO1xufTtcbiIsIi8vIDcuMi4yIElzQXJyYXkoYXJndW1lbnQpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gaXNBcnJheShhcmcpIHtcbiAgcmV0dXJuIGNvZihhcmcpID09ICdBcnJheSc7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG4iLCIvLyA3LjIuOCBJc1JlZ0V4cChhcmd1bWVudClcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xudmFyIE1BVENIID0gcmVxdWlyZSgnLi9fd2tzJykoJ21hdGNoJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgaXNSZWdFeHA7XG4gIHJldHVybiBpc09iamVjdChpdCkgJiYgKChpc1JlZ0V4cCA9IGl0W01BVENIXSkgIT09IHVuZGVmaW5lZCA/ICEhaXNSZWdFeHAgOiBjb2YoaXQpID09ICdSZWdFeHAnKTtcbn07XG4iLCIvLyBjYWxsIHNvbWV0aGluZyBvbiBpdGVyYXRvciBzdGVwIHdpdGggc2FmZSBjbG9zaW5nIG9uIGVycm9yXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXJhdG9yLCBmbiwgdmFsdWUsIGVudHJpZXMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZW50cmllcyA/IGZuKGFuT2JqZWN0KHZhbHVlKVswXSwgdmFsdWVbMV0pIDogZm4odmFsdWUpO1xuICAvLyA3LjQuNiBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBjb21wbGV0aW9uKVxuICB9IGNhdGNoIChlKSB7XG4gICAgdmFyIHJldCA9IGl0ZXJhdG9yWydyZXR1cm4nXTtcbiAgICBpZiAocmV0ICE9PSB1bmRlZmluZWQpIGFuT2JqZWN0KHJldC5jYWxsKGl0ZXJhdG9yKSk7XG4gICAgdGhyb3cgZTtcbiAgfVxufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJyk7XG52YXIgZGVzY3JpcHRvciA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcblxuLy8gMjUuMS4yLjEuMSAlSXRlcmF0b3JQcm90b3R5cGUlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2hpZGUnKShJdGVyYXRvclByb3RvdHlwZSwgcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyksIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCkge1xuICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBjcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUsIHsgbmV4dDogZGVzY3JpcHRvcigxLCBuZXh0KSB9KTtcbiAgc2V0VG9TdHJpbmdUYWcoQ29uc3RydWN0b3IsIE5BTUUgKyAnIEl0ZXJhdG9yJyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgPSByZXF1aXJlKCcuL19saWJyYXJ5Jyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyICRpdGVyQ3JlYXRlID0gcmVxdWlyZSgnLi9faXRlci1jcmVhdGUnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBCVUdHWSA9ICEoW10ua2V5cyAmJiAnbmV4dCcgaW4gW10ua2V5cygpKTsgLy8gU2FmYXJpIGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxudmFyIEZGX0lURVJBVE9SID0gJ0BAaXRlcmF0b3InO1xudmFyIEtFWVMgPSAna2V5cyc7XG52YXIgVkFMVUVTID0gJ3ZhbHVlcyc7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQmFzZSwgTkFNRSwgQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0VEKSB7XG4gICRpdGVyQ3JlYXRlKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcbiAgdmFyIGdldE1ldGhvZCA9IGZ1bmN0aW9uIChraW5kKSB7XG4gICAgaWYgKCFCVUdHWSAmJiBraW5kIGluIHByb3RvKSByZXR1cm4gcHJvdG9ba2luZF07XG4gICAgc3dpdGNoIChraW5kKSB7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgICAgY2FzZSBWQUxVRVM6IHJldHVybiBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgfSByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgfTtcbiAgdmFyIFRBRyA9IE5BTUUgKyAnIEl0ZXJhdG9yJztcbiAgdmFyIERFRl9WQUxVRVMgPSBERUZBVUxUID09IFZBTFVFUztcbiAgdmFyIFZBTFVFU19CVUcgPSBmYWxzZTtcbiAgdmFyIHByb3RvID0gQmFzZS5wcm90b3R5cGU7XG4gIHZhciAkbmF0aXZlID0gcHJvdG9bSVRFUkFUT1JdIHx8IHByb3RvW0ZGX0lURVJBVE9SXSB8fCBERUZBVUxUICYmIHByb3RvW0RFRkFVTFRdO1xuICB2YXIgJGRlZmF1bHQgPSAkbmF0aXZlIHx8IGdldE1ldGhvZChERUZBVUxUKTtcbiAgdmFyICRlbnRyaWVzID0gREVGQVVMVCA/ICFERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoJ2VudHJpZXMnKSA6IHVuZGVmaW5lZDtcbiAgdmFyICRhbnlOYXRpdmUgPSBOQU1FID09ICdBcnJheScgPyBwcm90by5lbnRyaWVzIHx8ICRuYXRpdmUgOiAkbmF0aXZlO1xuICB2YXIgbWV0aG9kcywga2V5LCBJdGVyYXRvclByb3RvdHlwZTtcbiAgLy8gRml4IG5hdGl2ZVxuICBpZiAoJGFueU5hdGl2ZSkge1xuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoJGFueU5hdGl2ZS5jYWxsKG5ldyBCYXNlKCkpKTtcbiAgICBpZiAoSXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUgJiYgSXRlcmF0b3JQcm90b3R5cGUubmV4dCkge1xuICAgICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgICAgc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JQcm90b3R5cGUsIFRBRywgdHJ1ZSk7XG4gICAgICAvLyBmaXggZm9yIHNvbWUgb2xkIGVuZ2luZXNcbiAgICAgIGlmICghTElCUkFSWSAmJiB0eXBlb2YgSXRlcmF0b3JQcm90b3R5cGVbSVRFUkFUT1JdICE9ICdmdW5jdGlvbicpIGhpZGUoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcbiAgICB9XG4gIH1cbiAgLy8gZml4IEFycmF5I3t2YWx1ZXMsIEBAaXRlcmF0b3J9Lm5hbWUgaW4gVjggLyBGRlxuICBpZiAoREVGX1ZBTFVFUyAmJiAkbmF0aXZlICYmICRuYXRpdmUubmFtZSAhPT0gVkFMVUVTKSB7XG4gICAgVkFMVUVTX0JVRyA9IHRydWU7XG4gICAgJGRlZmF1bHQgPSBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiAkbmF0aXZlLmNhbGwodGhpcyk7IH07XG4gIH1cbiAgLy8gRGVmaW5lIGl0ZXJhdG9yXG4gIGlmICgoIUxJQlJBUlkgfHwgRk9SQ0VEKSAmJiAoQlVHR1kgfHwgVkFMVUVTX0JVRyB8fCAhcHJvdG9bSVRFUkFUT1JdKSkge1xuICAgIGhpZGUocHJvdG8sIElURVJBVE9SLCAkZGVmYXVsdCk7XG4gIH1cbiAgLy8gUGx1ZyBmb3IgbGlicmFyeVxuICBJdGVyYXRvcnNbTkFNRV0gPSAkZGVmYXVsdDtcbiAgSXRlcmF0b3JzW1RBR10gPSByZXR1cm5UaGlzO1xuICBpZiAoREVGQVVMVCkge1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICB2YWx1ZXM6IERFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChWQUxVRVMpLFxuICAgICAga2V5czogSVNfU0VUID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiAkZW50cmllc1xuICAgIH07XG4gICAgaWYgKEZPUkNFRCkgZm9yIChrZXkgaW4gbWV0aG9kcykge1xuICAgICAgaWYgKCEoa2V5IGluIHByb3RvKSkgcmVkZWZpbmUocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcbiAgICB9IGVsc2UgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoQlVHR1kgfHwgVkFMVUVTX0JVRyksIE5BTUUsIG1ldGhvZHMpO1xuICB9XG4gIHJldHVybiBtZXRob2RzO1xufTtcbiIsInZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIFNBRkVfQ0xPU0lORyA9IGZhbHNlO1xuXG50cnkge1xuICB2YXIgcml0ZXIgPSBbN11bSVRFUkFUT1JdKCk7XG4gIHJpdGVyWydyZXR1cm4nXSA9IGZ1bmN0aW9uICgpIHsgU0FGRV9DTE9TSU5HID0gdHJ1ZTsgfTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXRocm93LWxpdGVyYWxcbiAgQXJyYXkuZnJvbShyaXRlciwgZnVuY3Rpb24gKCkgeyB0aHJvdyAyOyB9KTtcbn0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjLCBza2lwQ2xvc2luZykge1xuICBpZiAoIXNraXBDbG9zaW5nICYmICFTQUZFX0NMT1NJTkcpIHJldHVybiBmYWxzZTtcbiAgdmFyIHNhZmUgPSBmYWxzZTtcbiAgdHJ5IHtcbiAgICB2YXIgYXJyID0gWzddO1xuICAgIHZhciBpdGVyID0gYXJyW0lURVJBVE9SXSgpO1xuICAgIGl0ZXIubmV4dCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHsgZG9uZTogc2FmZSA9IHRydWUgfTsgfTtcbiAgICBhcnJbSVRFUkFUT1JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gaXRlcjsgfTtcbiAgICBleGVjKGFycik7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICByZXR1cm4gc2FmZTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkb25lLCB2YWx1ZSkge1xuICByZXR1cm4geyB2YWx1ZTogdmFsdWUsIGRvbmU6ICEhZG9uZSB9O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge307XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZhbHNlO1xuIiwidmFyIE1FVEEgPSByZXF1aXJlKCcuL191aWQnKSgnbWV0YScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgc2V0RGVzYyA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgaWQgPSAwO1xudmFyIGlzRXh0ZW5zaWJsZSA9IE9iamVjdC5pc0V4dGVuc2libGUgfHwgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdHJ1ZTtcbn07XG52YXIgRlJFRVpFID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gaXNFeHRlbnNpYmxlKE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucyh7fSkpO1xufSk7XG52YXIgc2V0TWV0YSA9IGZ1bmN0aW9uIChpdCkge1xuICBzZXREZXNjKGl0LCBNRVRBLCB7IHZhbHVlOiB7XG4gICAgaTogJ08nICsgKytpZCwgLy8gb2JqZWN0IElEXG4gICAgdzoge30gICAgICAgICAgLy8gd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfSB9KTtcbn07XG52YXIgZmFzdEtleSA9IGZ1bmN0aW9uIChpdCwgY3JlYXRlKSB7XG4gIC8vIHJldHVybiBwcmltaXRpdmUgd2l0aCBwcmVmaXhcbiAgaWYgKCFpc09iamVjdChpdCkpIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCcgPyBpdCA6ICh0eXBlb2YgaXQgPT0gJ3N0cmluZycgPyAnUycgOiAnUCcpICsgaXQ7XG4gIGlmICghaGFzKGl0LCBNRVRBKSkge1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYgKCFpc0V4dGVuc2libGUoaXQpKSByZXR1cm4gJ0YnO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYgKCFjcmVhdGUpIHJldHVybiAnRSc7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIG9iamVjdCBJRFxuICB9IHJldHVybiBpdFtNRVRBXS5pO1xufTtcbnZhciBnZXRXZWFrID0gZnVuY3Rpb24gKGl0LCBjcmVhdGUpIHtcbiAgaWYgKCFoYXMoaXQsIE1FVEEpKSB7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZiAoIWlzRXh0ZW5zaWJsZShpdCkpIHJldHVybiB0cnVlO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYgKCFjcmVhdGUpIHJldHVybiBmYWxzZTtcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gaGFzaCB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9IHJldHVybiBpdFtNRVRBXS53O1xufTtcbi8vIGFkZCBtZXRhZGF0YSBvbiBmcmVlemUtZmFtaWx5IG1ldGhvZHMgY2FsbGluZ1xudmFyIG9uRnJlZXplID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChGUkVFWkUgJiYgbWV0YS5ORUVEICYmIGlzRXh0ZW5zaWJsZShpdCkgJiYgIWhhcyhpdCwgTUVUQSkpIHNldE1ldGEoaXQpO1xuICByZXR1cm4gaXQ7XG59O1xudmFyIG1ldGEgPSBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgS0VZOiBNRVRBLFxuICBORUVEOiBmYWxzZSxcbiAgZmFzdEtleTogZmFzdEtleSxcbiAgZ2V0V2VhazogZ2V0V2VhayxcbiAgb25GcmVlemU6IG9uRnJlZXplXG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIG1hY3JvdGFzayA9IHJlcXVpcmUoJy4vX3Rhc2snKS5zZXQ7XG52YXIgT2JzZXJ2ZXIgPSBnbG9iYWwuTXV0YXRpb25PYnNlcnZlciB8fCBnbG9iYWwuV2ViS2l0TXV0YXRpb25PYnNlcnZlcjtcbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgUHJvbWlzZSA9IGdsb2JhbC5Qcm9taXNlO1xudmFyIGlzTm9kZSA9IHJlcXVpcmUoJy4vX2NvZicpKHByb2Nlc3MpID09ICdwcm9jZXNzJztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBoZWFkLCBsYXN0LCBub3RpZnk7XG5cbiAgdmFyIGZsdXNoID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBwYXJlbnQsIGZuO1xuICAgIGlmIChpc05vZGUgJiYgKHBhcmVudCA9IHByb2Nlc3MuZG9tYWluKSkgcGFyZW50LmV4aXQoKTtcbiAgICB3aGlsZSAoaGVhZCkge1xuICAgICAgZm4gPSBoZWFkLmZuO1xuICAgICAgaGVhZCA9IGhlYWQubmV4dDtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZuKCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGlmIChoZWFkKSBub3RpZnkoKTtcbiAgICAgICAgZWxzZSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH0gbGFzdCA9IHVuZGVmaW5lZDtcbiAgICBpZiAocGFyZW50KSBwYXJlbnQuZW50ZXIoKTtcbiAgfTtcblxuICAvLyBOb2RlLmpzXG4gIGlmIChpc05vZGUpIHtcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGZsdXNoKTtcbiAgICB9O1xuICAvLyBicm93c2VycyB3aXRoIE11dGF0aW9uT2JzZXJ2ZXIsIGV4Y2VwdCBpT1MgU2FmYXJpIC0gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzMzOVxuICB9IGVsc2UgaWYgKE9ic2VydmVyICYmICEoZ2xvYmFsLm5hdmlnYXRvciAmJiBnbG9iYWwubmF2aWdhdG9yLnN0YW5kYWxvbmUpKSB7XG4gICAgdmFyIHRvZ2dsZSA9IHRydWU7XG4gICAgdmFyIG5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gICAgbmV3IE9ic2VydmVyKGZsdXNoKS5vYnNlcnZlKG5vZGUsIHsgY2hhcmFjdGVyRGF0YTogdHJ1ZSB9KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXdcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBub2RlLmRhdGEgPSB0b2dnbGUgPSAhdG9nZ2xlO1xuICAgIH07XG4gIC8vIGVudmlyb25tZW50cyB3aXRoIG1heWJlIG5vbi1jb21wbGV0ZWx5IGNvcnJlY3QsIGJ1dCBleGlzdGVudCBQcm9taXNlXG4gIH0gZWxzZSBpZiAoUHJvbWlzZSAmJiBQcm9taXNlLnJlc29sdmUpIHtcbiAgICAvLyBQcm9taXNlLnJlc29sdmUgd2l0aG91dCBhbiBhcmd1bWVudCB0aHJvd3MgYW4gZXJyb3IgaW4gTEcgV2ViT1MgMlxuICAgIHZhciBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKHVuZGVmaW5lZCk7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcHJvbWlzZS50aGVuKGZsdXNoKTtcbiAgICB9O1xuICAvLyBmb3Igb3RoZXIgZW52aXJvbm1lbnRzIC0gbWFjcm90YXNrIGJhc2VkIG9uOlxuICAvLyAtIHNldEltbWVkaWF0ZVxuICAvLyAtIE1lc3NhZ2VDaGFubmVsXG4gIC8vIC0gd2luZG93LnBvc3RNZXNzYWdcbiAgLy8gLSBvbnJlYWR5c3RhdGVjaGFuZ2VcbiAgLy8gLSBzZXRUaW1lb3V0XG4gIH0gZWxzZSB7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gc3RyYW5nZSBJRSArIHdlYnBhY2sgZGV2IHNlcnZlciBidWcgLSB1c2UgLmNhbGwoZ2xvYmFsKVxuICAgICAgbWFjcm90YXNrLmNhbGwoZ2xvYmFsLCBmbHVzaCk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoZm4pIHtcbiAgICB2YXIgdGFzayA9IHsgZm46IGZuLCBuZXh0OiB1bmRlZmluZWQgfTtcbiAgICBpZiAobGFzdCkgbGFzdC5uZXh0ID0gdGFzaztcbiAgICBpZiAoIWhlYWQpIHtcbiAgICAgIGhlYWQgPSB0YXNrO1xuICAgICAgbm90aWZ5KCk7XG4gICAgfSBsYXN0ID0gdGFzaztcbiAgfTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG4vLyAyNS40LjEuNSBOZXdQcm9taXNlQ2FwYWJpbGl0eShDKVxudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcblxuZnVuY3Rpb24gUHJvbWlzZUNhcGFiaWxpdHkoQykge1xuICB2YXIgcmVzb2x2ZSwgcmVqZWN0O1xuICB0aGlzLnByb21pc2UgPSBuZXcgQyhmdW5jdGlvbiAoJCRyZXNvbHZlLCAkJHJlamVjdCkge1xuICAgIGlmIChyZXNvbHZlICE9PSB1bmRlZmluZWQgfHwgcmVqZWN0ICE9PSB1bmRlZmluZWQpIHRocm93IFR5cGVFcnJvcignQmFkIFByb21pc2UgY29uc3RydWN0b3InKTtcbiAgICByZXNvbHZlID0gJCRyZXNvbHZlO1xuICAgIHJlamVjdCA9ICQkcmVqZWN0O1xuICB9KTtcbiAgdGhpcy5yZXNvbHZlID0gYUZ1bmN0aW9uKHJlc29sdmUpO1xuICB0aGlzLnJlamVjdCA9IGFGdW5jdGlvbihyZWplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cy5mID0gZnVuY3Rpb24gKEMpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlQ2FwYWJpbGl0eShDKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG4vLyAxOS4xLjIuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlLCAuLi4pXG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG52YXIgZ09QUyA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJyk7XG52YXIgcElFID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKTtcbnZhciAkYXNzaWduID0gT2JqZWN0LmFzc2lnbjtcblxuLy8gc2hvdWxkIHdvcmsgd2l0aCBzeW1ib2xzIGFuZCBzaG91bGQgaGF2ZSBkZXRlcm1pbmlzdGljIHByb3BlcnR5IG9yZGVyIChWOCBidWcpXG5tb2R1bGUuZXhwb3J0cyA9ICEkYXNzaWduIHx8IHJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICB2YXIgQSA9IHt9O1xuICB2YXIgQiA9IHt9O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIFMgPSBTeW1ib2woKTtcbiAgdmFyIEsgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3QnO1xuICBBW1NdID0gNztcbiAgSy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAoaykgeyBCW2tdID0gazsgfSk7XG4gIHJldHVybiAkYXNzaWduKHt9LCBBKVtTXSAhPSA3IHx8IE9iamVjdC5rZXlzKCRhc3NpZ24oe30sIEIpKS5qb2luKCcnKSAhPSBLO1xufSkgPyBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCBzb3VyY2UpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICB2YXIgVCA9IHRvT2JqZWN0KHRhcmdldCk7XG4gIHZhciBhTGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgdmFyIGluZGV4ID0gMTtcbiAgdmFyIGdldFN5bWJvbHMgPSBnT1BTLmY7XG4gIHZhciBpc0VudW0gPSBwSUUuZjtcbiAgd2hpbGUgKGFMZW4gPiBpbmRleCkge1xuICAgIHZhciBTID0gSU9iamVjdChhcmd1bWVudHNbaW5kZXgrK10pO1xuICAgIHZhciBrZXlzID0gZ2V0U3ltYm9scyA/IGdldEtleXMoUykuY29uY2F0KGdldFN5bWJvbHMoUykpIDogZ2V0S2V5cyhTKTtcbiAgICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gICAgdmFyIGogPSAwO1xuICAgIHZhciBrZXk7XG4gICAgd2hpbGUgKGxlbmd0aCA+IGopIGlmIChpc0VudW0uY2FsbChTLCBrZXkgPSBrZXlzW2orK10pKSBUW2tleV0gPSBTW2tleV07XG4gIH0gcmV0dXJuIFQ7XG59IDogJGFzc2lnbjtcbiIsIi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgZFBzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwcycpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xudmFyIEVtcHR5ID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgY3JlYXRlRGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgdmFyIGlmcmFtZSA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnaWZyYW1lJyk7XG4gIHZhciBpID0gZW51bUJ1Z0tleXMubGVuZ3RoO1xuICB2YXIgbHQgPSAnPCc7XG4gIHZhciBndCA9ICc+JztcbiAgdmFyIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgcmVxdWlyZSgnLi9faHRtbCcpLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZS5zcmMgPSAnamF2YXNjcmlwdDonOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNjcmlwdC11cmxcbiAgLy8gY3JlYXRlRGljdCA9IGlmcmFtZS5jb250ZW50V2luZG93Lk9iamVjdDtcbiAgLy8gaHRtbC5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKGx0ICsgJ3NjcmlwdCcgKyBndCArICdkb2N1bWVudC5GPU9iamVjdCcgKyBsdCArICcvc2NyaXB0JyArIGd0KTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgY3JlYXRlRGljdCA9IGlmcmFtZURvY3VtZW50LkY7XG4gIHdoaWxlIChpLS0pIGRlbGV0ZSBjcmVhdGVEaWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbaV1dO1xuICByZXR1cm4gY3JlYXRlRGljdCgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmIChPICE9PSBudWxsKSB7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xuICAgIHJlc3VsdCA9IG5ldyBFbXB0eSgpO1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBudWxsO1xuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcbiAgfSBlbHNlIHJlc3VsdCA9IGNyZWF0ZURpY3QoKTtcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IGRQcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xufTtcbiIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGRQID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiBkUChPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIGlmICgnZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpIHRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhJyk7XG4gIGlmICgndmFsdWUnIGluIEF0dHJpYnV0ZXMpIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG4iLCJ2YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcykge1xuICBhbk9iamVjdChPKTtcbiAgdmFyIGtleXMgPSBnZXRLZXlzKFByb3BlcnRpZXMpO1xuICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIHZhciBpID0gMDtcbiAgdmFyIFA7XG4gIHdoaWxlIChsZW5ndGggPiBpKSBkUC5mKE8sIFAgPSBrZXlzW2krK10sIFByb3BlcnRpZXNbUF0pO1xuICByZXR1cm4gTztcbn07XG4iLCJ2YXIgcElFID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpO1xudmFyIGdPUEQgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZ09QRCA6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKSB7XG4gIE8gPSB0b0lPYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiBnT1BEKE8sIFApO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKGhhcyhPLCBQKSkgcmV0dXJuIGNyZWF0ZURlc2MoIXBJRS5mLmNhbGwoTywgUCksIE9bUF0pO1xufTtcbiIsIi8vIGZhbGxiYWNrIGZvciBJRTExIGJ1Z2d5IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHdpdGggaWZyYW1lIGFuZCB3aW5kb3dcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgZ09QTiA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZjtcbnZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG52YXIgd2luZG93TmFtZXMgPSB0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdyAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc1xuICA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHdpbmRvdykgOiBbXTtcblxudmFyIGdldFdpbmRvd05hbWVzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGdPUE4oaXQpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHdpbmRvd05hbWVzLnNsaWNlKCk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzLmYgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KSB7XG4gIHJldHVybiB3aW5kb3dOYW1lcyAmJiB0b1N0cmluZy5jYWxsKGl0KSA9PSAnW29iamVjdCBXaW5kb3ddJyA/IGdldFdpbmRvd05hbWVzKGl0KSA6IGdPUE4odG9JT2JqZWN0KGl0KSk7XG59O1xuIiwiLy8gMTkuMS4yLjcgLyAxNS4yLjMuNCBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpLmNvbmNhdCgnbGVuZ3RoJywgJ3Byb3RvdHlwZScpO1xuXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKE8pIHtcbiAgcmV0dXJuICRrZXlzKE8sIGhpZGRlbktleXMpO1xufTtcbiIsImV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG4iLCIvLyAxOS4xLjIuOSAvIDE1LjIuMy4yIE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG52YXIgT2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiAoTykge1xuICBPID0gdG9PYmplY3QoTyk7XG4gIGlmIChoYXMoTywgSUVfUFJPVE8pKSByZXR1cm4gT1tJRV9QUk9UT107XG4gIGlmICh0eXBlb2YgTy5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmIE8gaW5zdGFuY2VvZiBPLmNvbnN0cnVjdG9yKSB7XG4gICAgcmV0dXJuIE8uY29uc3RydWN0b3IucHJvdG90eXBlO1xuICB9IHJldHVybiBPIGluc3RhbmNlb2YgT2JqZWN0ID8gT2JqZWN0UHJvdG8gOiBudWxsO1xufTtcbiIsInZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgYXJyYXlJbmRleE9mID0gcmVxdWlyZSgnLi9fYXJyYXktaW5jbHVkZXMnKShmYWxzZSk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgbmFtZXMpIHtcbiAgdmFyIE8gPSB0b0lPYmplY3Qob2JqZWN0KTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBrZXk7XG4gIGZvciAoa2V5IGluIE8pIGlmIChrZXkgIT0gSUVfUFJPVE8pIGhhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIGlmIChoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpIHtcbiAgICB+YXJyYXlJbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwiLy8gMTkuMS4yLjE0IC8gMTUuMi4zLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTykge1xuICByZXR1cm4gJGtleXMoTywgZW51bUJ1Z0tleXMpO1xufTtcbiIsImV4cG9ydHMuZiA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuIiwiLy8gbW9zdCBPYmplY3QgbWV0aG9kcyBieSBFUzYgc2hvdWxkIGFjY2VwdCBwcmltaXRpdmVzXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoS0VZLCBleGVjKSB7XG4gIHZhciBmbiA9IChjb3JlLk9iamVjdCB8fCB7fSlbS0VZXSB8fCBPYmplY3RbS0VZXTtcbiAgdmFyIGV4cCA9IHt9O1xuICBleHBbS0VZXSA9IGV4ZWMoZm4pO1xuICAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIGZhaWxzKGZ1bmN0aW9uICgpIHsgZm4oMSk7IH0pLCAnT2JqZWN0JywgZXhwKTtcbn07XG4iLCJ2YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIGlzRW51bSA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKS5mO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXNFbnRyaWVzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoaXQpIHtcbiAgICB2YXIgTyA9IHRvSU9iamVjdChpdCk7XG4gICAgdmFyIGtleXMgPSBnZXRLZXlzKE8pO1xuICAgIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHZhciBrZXk7XG4gICAgd2hpbGUgKGxlbmd0aCA+IGkpIGlmIChpc0VudW0uY2FsbChPLCBrZXkgPSBrZXlzW2krK10pKSB7XG4gICAgICByZXN1bHQucHVzaChpc0VudHJpZXMgPyBba2V5LCBPW2tleV1dIDogT1trZXldKTtcbiAgICB9IHJldHVybiByZXN1bHQ7XG4gIH07XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiB7IGU6IGZhbHNlLCB2OiBleGVjKCkgfTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB7IGU6IHRydWUsIHY6IGUgfTtcbiAgfVxufTtcbiIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSByZXF1aXJlKCcuL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEMsIHgpIHtcbiAgYW5PYmplY3QoQyk7XG4gIGlmIChpc09iamVjdCh4KSAmJiB4LmNvbnN0cnVjdG9yID09PSBDKSByZXR1cm4geDtcbiAgdmFyIHByb21pc2VDYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkuZihDKTtcbiAgdmFyIHJlc29sdmUgPSBwcm9taXNlQ2FwYWJpbGl0eS5yZXNvbHZlO1xuICByZXNvbHZlKHgpO1xuICByZXR1cm4gcHJvbWlzZUNhcGFiaWxpdHkucHJvbWlzZTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChiaXRtYXAsIHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZTogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGU6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG59O1xuIiwidmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRhcmdldCwgc3JjLCBzYWZlKSB7XG4gIGZvciAodmFyIGtleSBpbiBzcmMpIHJlZGVmaW5lKHRhcmdldCwga2V5LCBzcmNba2V5XSwgc2FmZSk7XG4gIHJldHVybiB0YXJnZXQ7XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgU1JDID0gcmVxdWlyZSgnLi9fdWlkJykoJ3NyYycpO1xudmFyIFRPX1NUUklORyA9ICd0b1N0cmluZyc7XG52YXIgJHRvU3RyaW5nID0gRnVuY3Rpb25bVE9fU1RSSU5HXTtcbnZhciBUUEwgPSAoJycgKyAkdG9TdHJpbmcpLnNwbGl0KFRPX1NUUklORyk7XG5cbnJlcXVpcmUoJy4vX2NvcmUnKS5pbnNwZWN0U291cmNlID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiAkdG9TdHJpbmcuY2FsbChpdCk7XG59O1xuXG4obW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywga2V5LCB2YWwsIHNhZmUpIHtcbiAgdmFyIGlzRnVuY3Rpb24gPSB0eXBlb2YgdmFsID09ICdmdW5jdGlvbic7XG4gIGlmIChpc0Z1bmN0aW9uKSBoYXModmFsLCAnbmFtZScpIHx8IGhpZGUodmFsLCAnbmFtZScsIGtleSk7XG4gIGlmIChPW2tleV0gPT09IHZhbCkgcmV0dXJuO1xuICBpZiAoaXNGdW5jdGlvbikgaGFzKHZhbCwgU1JDKSB8fCBoaWRlKHZhbCwgU1JDLCBPW2tleV0gPyAnJyArIE9ba2V5XSA6IFRQTC5qb2luKFN0cmluZyhrZXkpKSk7XG4gIGlmIChPID09PSBnbG9iYWwpIHtcbiAgICBPW2tleV0gPSB2YWw7XG4gIH0gZWxzZSBpZiAoIXNhZmUpIHtcbiAgICBkZWxldGUgT1trZXldO1xuICAgIGhpZGUoTywga2V5LCB2YWwpO1xuICB9IGVsc2UgaWYgKE9ba2V5XSkge1xuICAgIE9ba2V5XSA9IHZhbDtcbiAgfSBlbHNlIHtcbiAgICBoaWRlKE8sIGtleSwgdmFsKTtcbiAgfVxuLy8gYWRkIGZha2UgRnVuY3Rpb24jdG9TdHJpbmcgZm9yIGNvcnJlY3Qgd29yayB3cmFwcGVkIG1ldGhvZHMgLyBjb25zdHJ1Y3RvcnMgd2l0aCBtZXRob2RzIGxpa2UgTG9EYXNoIGlzTmF0aXZlXG59KShGdW5jdGlvbi5wcm90b3R5cGUsIFRPX1NUUklORywgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gIHJldHVybiB0eXBlb2YgdGhpcyA9PSAnZnVuY3Rpb24nICYmIHRoaXNbU1JDXSB8fCAkdG9TdHJpbmcuY2FsbCh0aGlzKTtcbn0pO1xuIiwiLy8gV29ya3Mgd2l0aCBfX3Byb3RvX18gb25seS4gT2xkIHY4IGNhbid0IHdvcmsgd2l0aCBudWxsIHByb3RvIG9iamVjdHMuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90byAqL1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBjaGVjayA9IGZ1bmN0aW9uIChPLCBwcm90bykge1xuICBhbk9iamVjdChPKTtcbiAgaWYgKCFpc09iamVjdChwcm90bykgJiYgcHJvdG8gIT09IG51bGwpIHRocm93IFR5cGVFcnJvcihwcm90byArIFwiOiBjYW4ndCBzZXQgYXMgcHJvdG90eXBlIVwiKTtcbn07XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgKCdfX3Byb3RvX18nIGluIHt9ID8gLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgIGZ1bmN0aW9uICh0ZXN0LCBidWdneSwgc2V0KSB7XG4gICAgICB0cnkge1xuICAgICAgICBzZXQgPSByZXF1aXJlKCcuL19jdHgnKShGdW5jdGlvbi5jYWxsLCByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpLmYoT2JqZWN0LnByb3RvdHlwZSwgJ19fcHJvdG9fXycpLnNldCwgMik7XG4gICAgICAgIHNldCh0ZXN0LCBbXSk7XG4gICAgICAgIGJ1Z2d5ID0gISh0ZXN0IGluc3RhbmNlb2YgQXJyYXkpO1xuICAgICAgfSBjYXRjaCAoZSkgeyBidWdneSA9IHRydWU7IH1cbiAgICAgIHJldHVybiBmdW5jdGlvbiBzZXRQcm90b3R5cGVPZihPLCBwcm90bykge1xuICAgICAgICBjaGVjayhPLCBwcm90byk7XG4gICAgICAgIGlmIChidWdneSkgTy5fX3Byb3RvX18gPSBwcm90bztcbiAgICAgICAgZWxzZSBzZXQoTywgcHJvdG8pO1xuICAgICAgICByZXR1cm4gTztcbiAgICAgIH07XG4gICAgfSh7fSwgZmFsc2UpIDogdW5kZWZpbmVkKSxcbiAgY2hlY2s6IGNoZWNrXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpO1xudmFyIFNQRUNJRVMgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChLRVkpIHtcbiAgdmFyIEMgPSBnbG9iYWxbS0VZXTtcbiAgaWYgKERFU0NSSVBUT1JTICYmIEMgJiYgIUNbU1BFQ0lFU10pIGRQLmYoQywgU1BFQ0lFUywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH1cbiAgfSk7XG59O1xuIiwidmFyIGRlZiA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCB0YWcsIHN0YXQpIHtcbiAgaWYgKGl0ICYmICFoYXMoaXQgPSBzdGF0ID8gaXQgOiBpdC5wcm90b3R5cGUsIFRBRykpIGRlZihpdCwgVEFHLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHRhZyB9KTtcbn07XG4iLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ2tleXMnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gc2hhcmVkW2tleV0gfHwgKHNoYXJlZFtrZXldID0gdWlkKGtleSkpO1xufTtcbiIsInZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nO1xudmFyIHN0b3JlID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xuXG4obW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHZhbHVlICE9PSB1bmRlZmluZWQgPyB2YWx1ZSA6IHt9KTtcbn0pKCd2ZXJzaW9ucycsIFtdKS5wdXNoKHtcbiAgdmVyc2lvbjogY29yZS52ZXJzaW9uLFxuICBtb2RlOiByZXF1aXJlKCcuL19saWJyYXJ5JykgPyAncHVyZScgOiAnZ2xvYmFsJyxcbiAgY29weXJpZ2h0OiAnwqkgMjAxOCBEZW5pcyBQdXNoa2FyZXYgKHpsb2lyb2NrLnJ1KSdcbn0pO1xuIiwiLy8gNy4zLjIwIFNwZWNpZXNDb25zdHJ1Y3RvcihPLCBkZWZhdWx0Q29uc3RydWN0b3IpXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG52YXIgU1BFQ0lFUyA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBEKSB7XG4gIHZhciBDID0gYW5PYmplY3QoTykuY29uc3RydWN0b3I7XG4gIHZhciBTO1xuICByZXR1cm4gQyA9PT0gdW5kZWZpbmVkIHx8IChTID0gYW5PYmplY3QoQylbU1BFQ0lFU10pID09IHVuZGVmaW5lZCA/IEQgOiBhRnVuY3Rpb24oUyk7XG59O1xuIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xuLy8gdHJ1ZSAgLT4gU3RyaW5nI2F0XG4vLyBmYWxzZSAtPiBTdHJpbmcjY29kZVBvaW50QXRcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFRPX1NUUklORykge1xuICByZXR1cm4gZnVuY3Rpb24gKHRoYXQsIHBvcykge1xuICAgIHZhciBzID0gU3RyaW5nKGRlZmluZWQodGhhdCkpO1xuICAgIHZhciBpID0gdG9JbnRlZ2VyKHBvcyk7XG4gICAgdmFyIGwgPSBzLmxlbmd0aDtcbiAgICB2YXIgYSwgYjtcbiAgICBpZiAoaSA8IDAgfHwgaSA+PSBsKSByZXR1cm4gVE9fU1RSSU5HID8gJycgOiB1bmRlZmluZWQ7XG4gICAgYSA9IHMuY2hhckNvZGVBdChpKTtcbiAgICByZXR1cm4gYSA8IDB4ZDgwMCB8fCBhID4gMHhkYmZmIHx8IGkgKyAxID09PSBsIHx8IChiID0gcy5jaGFyQ29kZUF0KGkgKyAxKSkgPCAweGRjMDAgfHwgYiA+IDB4ZGZmZlxuICAgICAgPyBUT19TVFJJTkcgPyBzLmNoYXJBdChpKSA6IGFcbiAgICAgIDogVE9fU1RSSU5HID8gcy5zbGljZShpLCBpICsgMikgOiAoYSAtIDB4ZDgwMCA8PCAxMCkgKyAoYiAtIDB4ZGMwMCkgKyAweDEwMDAwO1xuICB9O1xufTtcbiIsInZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBpbnZva2UgPSByZXF1aXJlKCcuL19pbnZva2UnKTtcbnZhciBodG1sID0gcmVxdWlyZSgnLi9faHRtbCcpO1xudmFyIGNlbCA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgc2V0VGFzayA9IGdsb2JhbC5zZXRJbW1lZGlhdGU7XG52YXIgY2xlYXJUYXNrID0gZ2xvYmFsLmNsZWFySW1tZWRpYXRlO1xudmFyIE1lc3NhZ2VDaGFubmVsID0gZ2xvYmFsLk1lc3NhZ2VDaGFubmVsO1xudmFyIERpc3BhdGNoID0gZ2xvYmFsLkRpc3BhdGNoO1xudmFyIGNvdW50ZXIgPSAwO1xudmFyIHF1ZXVlID0ge307XG52YXIgT05SRUFEWVNUQVRFQ0hBTkdFID0gJ29ucmVhZHlzdGF0ZWNoYW5nZSc7XG52YXIgZGVmZXIsIGNoYW5uZWwsIHBvcnQ7XG52YXIgcnVuID0gZnVuY3Rpb24gKCkge1xuICB2YXIgaWQgPSArdGhpcztcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xuICBpZiAocXVldWUuaGFzT3duUHJvcGVydHkoaWQpKSB7XG4gICAgdmFyIGZuID0gcXVldWVbaWRdO1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gICAgZm4oKTtcbiAgfVxufTtcbnZhciBsaXN0ZW5lciA9IGZ1bmN0aW9uIChldmVudCkge1xuICBydW4uY2FsbChldmVudC5kYXRhKTtcbn07XG4vLyBOb2RlLmpzIDAuOSsgJiBJRTEwKyBoYXMgc2V0SW1tZWRpYXRlLCBvdGhlcndpc2U6XG5pZiAoIXNldFRhc2sgfHwgIWNsZWFyVGFzaykge1xuICBzZXRUYXNrID0gZnVuY3Rpb24gc2V0SW1tZWRpYXRlKGZuKSB7XG4gICAgdmFyIGFyZ3MgPSBbXTtcbiAgICB2YXIgaSA9IDE7XG4gICAgd2hpbGUgKGFyZ3VtZW50cy5sZW5ndGggPiBpKSBhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgIHF1ZXVlWysrY291bnRlcl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgICAgIGludm9rZSh0eXBlb2YgZm4gPT0gJ2Z1bmN0aW9uJyA/IGZuIDogRnVuY3Rpb24oZm4pLCBhcmdzKTtcbiAgICB9O1xuICAgIGRlZmVyKGNvdW50ZXIpO1xuICAgIHJldHVybiBjb3VudGVyO1xuICB9O1xuICBjbGVhclRhc2sgPSBmdW5jdGlvbiBjbGVhckltbWVkaWF0ZShpZCkge1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gIH07XG4gIC8vIE5vZGUuanMgMC44LVxuICBpZiAocmVxdWlyZSgnLi9fY29mJykocHJvY2VzcykgPT0gJ3Byb2Nlc3MnKSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soY3R4KHJ1biwgaWQsIDEpKTtcbiAgICB9O1xuICAvLyBTcGhlcmUgKEpTIGdhbWUgZW5naW5lKSBEaXNwYXRjaCBBUElcbiAgfSBlbHNlIGlmIChEaXNwYXRjaCAmJiBEaXNwYXRjaC5ub3cpIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgRGlzcGF0Y2gubm93KGN0eChydW4sIGlkLCAxKSk7XG4gICAgfTtcbiAgLy8gQnJvd3NlcnMgd2l0aCBNZXNzYWdlQ2hhbm5lbCwgaW5jbHVkZXMgV2ViV29ya2Vyc1xuICB9IGVsc2UgaWYgKE1lc3NhZ2VDaGFubmVsKSB7XG4gICAgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuICAgIHBvcnQgPSBjaGFubmVsLnBvcnQyO1xuICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gbGlzdGVuZXI7XG4gICAgZGVmZXIgPSBjdHgocG9ydC5wb3N0TWVzc2FnZSwgcG9ydCwgMSk7XG4gIC8vIEJyb3dzZXJzIHdpdGggcG9zdE1lc3NhZ2UsIHNraXAgV2ViV29ya2Vyc1xuICAvLyBJRTggaGFzIHBvc3RNZXNzYWdlLCBidXQgaXQncyBzeW5jICYgdHlwZW9mIGl0cyBwb3N0TWVzc2FnZSBpcyAnb2JqZWN0J1xuICB9IGVsc2UgaWYgKGdsb2JhbC5hZGRFdmVudExpc3RlbmVyICYmIHR5cGVvZiBwb3N0TWVzc2FnZSA9PSAnZnVuY3Rpb24nICYmICFnbG9iYWwuaW1wb3J0U2NyaXB0cykge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBnbG9iYWwucG9zdE1lc3NhZ2UoaWQgKyAnJywgJyonKTtcbiAgICB9O1xuICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgbGlzdGVuZXIsIGZhbHNlKTtcbiAgLy8gSUU4LVxuICB9IGVsc2UgaWYgKE9OUkVBRFlTVEFURUNIQU5HRSBpbiBjZWwoJ3NjcmlwdCcpKSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoY2VsKCdzY3JpcHQnKSlbT05SRUFEWVNUQVRFQ0hBTkdFXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaHRtbC5yZW1vdmVDaGlsZCh0aGlzKTtcbiAgICAgICAgcnVuLmNhbGwoaWQpO1xuICAgICAgfTtcbiAgICB9O1xuICAvLyBSZXN0IG9sZCBicm93c2Vyc1xuICB9IGVsc2Uge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBzZXRUaW1lb3V0KGN0eChydW4sIGlkLCAxKSwgMCk7XG4gICAgfTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogc2V0VGFzayxcbiAgY2xlYXI6IGNsZWFyVGFza1xufTtcbiIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgbWF4ID0gTWF0aC5tYXg7XG52YXIgbWluID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbmRleCwgbGVuZ3RoKSB7XG4gIGluZGV4ID0gdG9JbnRlZ2VyKGluZGV4KTtcbiAgcmV0dXJuIGluZGV4IDwgMCA/IG1heChpbmRleCArIGxlbmd0aCwgMCkgOiBtaW4oaW5kZXgsIGxlbmd0aCk7XG59O1xuIiwiLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCA9IE1hdGguY2VpbDtcbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXNOYU4oaXQgPSAraXQpID8gMCA6IChpdCA+IDAgPyBmbG9vciA6IGNlaWwpKGl0KTtcbn07XG4iLCIvLyB0byBpbmRleGVkIG9iamVjdCwgdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gSU9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuIiwiLy8gNy4xLjE1IFRvTGVuZ3RoXG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIG1pbiA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07XG4iLCIvLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcbiIsIi8vIDcuMS4xIFRvUHJpbWl0aXZlKGlucHV0IFssIFByZWZlcnJlZFR5cGVdKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBTKSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSByZXR1cm4gaXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZiAoUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKHR5cGVvZiAoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICghUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcbiIsInZhciBpZCA9IDA7XG52YXIgcHggPSBNYXRoLnJhbmRvbSgpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcHgpLnRvU3RyaW5nKDM2KSk7XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIG5hdmlnYXRvciA9IGdsb2JhbC5uYXZpZ2F0b3I7XG5cbm1vZHVsZS5leHBvcnRzID0gbmF2aWdhdG9yICYmIG5hdmlnYXRvci51c2VyQWdlbnQgfHwgJyc7XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBUWVBFKSB7XG4gIGlmICghaXNPYmplY3QoaXQpIHx8IGl0Ll90ICE9PSBUWVBFKSB0aHJvdyBUeXBlRXJyb3IoJ0luY29tcGF0aWJsZSByZWNlaXZlciwgJyArIFRZUEUgKyAnIHJlcXVpcmVkIScpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgTElCUkFSWSA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKTtcbnZhciB3a3NFeHQgPSByZXF1aXJlKCcuL193a3MtZXh0Jyk7XG52YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICB2YXIgJFN5bWJvbCA9IGNvcmUuU3ltYm9sIHx8IChjb3JlLlN5bWJvbCA9IExJQlJBUlkgPyB7fSA6IGdsb2JhbC5TeW1ib2wgfHwge30pO1xuICBpZiAobmFtZS5jaGFyQXQoMCkgIT0gJ18nICYmICEobmFtZSBpbiAkU3ltYm9sKSkgZGVmaW5lUHJvcGVydHkoJFN5bWJvbCwgbmFtZSwgeyB2YWx1ZTogd2tzRXh0LmYobmFtZSkgfSk7XG59O1xuIiwiZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fd2tzJyk7XG4iLCJ2YXIgc3RvcmUgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgnd2tzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG52YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuU3ltYm9sO1xudmFyIFVTRV9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09ICdmdW5jdGlvbic7XG5cbnZhciAkZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9XG4gICAgVVNFX1NZTUJPTCAmJiBTeW1ib2xbbmFtZV0gfHwgKFVTRV9TWU1CT0wgPyBTeW1ib2wgOiB1aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07XG5cbiRleHBvcnRzLnN0b3JlID0gc3RvcmU7XG4iLCJ2YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb3JlJykuZ2V0SXRlcmF0b3JNZXRob2QgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ICE9IHVuZGVmaW5lZCkgcmV0dXJuIGl0W0lURVJBVE9SXVxuICAgIHx8IGl0WydAQGl0ZXJhdG9yJ11cbiAgICB8fCBJdGVyYXRvcnNbY2xhc3NvZihpdCldO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciBjYWxsID0gcmVxdWlyZSgnLi9faXRlci1jYWxsJyk7XG52YXIgaXNBcnJheUl0ZXIgPSByZXF1aXJlKCcuL19pcy1hcnJheS1pdGVyJyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX2NyZWF0ZS1wcm9wZXJ0eScpO1xudmFyIGdldEl0ZXJGbiA9IHJlcXVpcmUoJy4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIXJlcXVpcmUoJy4vX2l0ZXItZGV0ZWN0JykoZnVuY3Rpb24gKGl0ZXIpIHsgQXJyYXkuZnJvbShpdGVyKTsgfSksICdBcnJheScsIHtcbiAgLy8gMjIuMS4yLjEgQXJyYXkuZnJvbShhcnJheUxpa2UsIG1hcGZuID0gdW5kZWZpbmVkLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxuICBmcm9tOiBmdW5jdGlvbiBmcm9tKGFycmF5TGlrZSAvKiAsIG1hcGZuID0gdW5kZWZpbmVkLCB0aGlzQXJnID0gdW5kZWZpbmVkICovKSB7XG4gICAgdmFyIE8gPSB0b09iamVjdChhcnJheUxpa2UpO1xuICAgIHZhciBDID0gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyA/IHRoaXMgOiBBcnJheTtcbiAgICB2YXIgYUxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgdmFyIG1hcGZuID0gYUxlbiA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQ7XG4gICAgdmFyIG1hcHBpbmcgPSBtYXBmbiAhPT0gdW5kZWZpbmVkO1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgdmFyIGl0ZXJGbiA9IGdldEl0ZXJGbihPKTtcbiAgICB2YXIgbGVuZ3RoLCByZXN1bHQsIHN0ZXAsIGl0ZXJhdG9yO1xuICAgIGlmIChtYXBwaW5nKSBtYXBmbiA9IGN0eChtYXBmbiwgYUxlbiA+IDIgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWQsIDIpO1xuICAgIC8vIGlmIG9iamVjdCBpc24ndCBpdGVyYWJsZSBvciBpdCdzIGFycmF5IHdpdGggZGVmYXVsdCBpdGVyYXRvciAtIHVzZSBzaW1wbGUgY2FzZVxuICAgIGlmIChpdGVyRm4gIT0gdW5kZWZpbmVkICYmICEoQyA9PSBBcnJheSAmJiBpc0FycmF5SXRlcihpdGVyRm4pKSkge1xuICAgICAgZm9yIChpdGVyYXRvciA9IGl0ZXJGbi5jYWxsKE8pLCByZXN1bHQgPSBuZXcgQygpOyAhKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7IGluZGV4KyspIHtcbiAgICAgICAgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBpbmRleCwgbWFwcGluZyA/IGNhbGwoaXRlcmF0b3IsIG1hcGZuLCBbc3RlcC52YWx1ZSwgaW5kZXhdLCB0cnVlKSA6IHN0ZXAudmFsdWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgICBmb3IgKHJlc3VsdCA9IG5ldyBDKGxlbmd0aCk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKSB7XG4gICAgICAgIGNyZWF0ZVByb3BlcnR5KHJlc3VsdCwgaW5kZXgsIG1hcHBpbmcgPyBtYXBmbihPW2luZGV4XSwgaW5kZXgpIDogT1tpbmRleF0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXN1bHQubGVuZ3RoID0gaW5kZXg7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4vX2FkZC10by11bnNjb3BhYmxlcycpO1xudmFyIHN0ZXAgPSByZXF1aXJlKCcuL19pdGVyLXN0ZXAnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG5cbi8vIDIyLjEuMy40IEFycmF5LnByb3RvdHlwZS5lbnRyaWVzKClcbi8vIDIyLjEuMy4xMyBBcnJheS5wcm90b3R5cGUua2V5cygpXG4vLyAyMi4xLjMuMjkgQXJyYXkucHJvdG90eXBlLnZhbHVlcygpXG4vLyAyMi4xLjMuMzAgQXJyYXkucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShBcnJheSwgJ0FycmF5JywgZnVuY3Rpb24gKGl0ZXJhdGVkLCBraW5kKSB7XG4gIHRoaXMuX3QgPSB0b0lPYmplY3QoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbiAgdGhpcy5fayA9IGtpbmQ7ICAgICAgICAgICAgICAgIC8vIGtpbmRcbi8vIDIyLjEuNS4yLjEgJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24gKCkge1xuICB2YXIgTyA9IHRoaXMuX3Q7XG4gIHZhciBraW5kID0gdGhpcy5faztcbiAgdmFyIGluZGV4ID0gdGhpcy5faSsrO1xuICBpZiAoIU8gfHwgaW5kZXggPj0gTy5sZW5ndGgpIHtcbiAgICB0aGlzLl90ID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiBzdGVwKDEpO1xuICB9XG4gIGlmIChraW5kID09ICdrZXlzJykgcmV0dXJuIHN0ZXAoMCwgaW5kZXgpO1xuICBpZiAoa2luZCA9PSAndmFsdWVzJykgcmV0dXJuIHN0ZXAoMCwgT1tpbmRleF0pO1xuICByZXR1cm4gc3RlcCgwLCBbaW5kZXgsIE9baW5kZXhdXSk7XG59LCAndmFsdWVzJyk7XG5cbi8vIGFyZ3VtZW50c0xpc3RbQEBpdGVyYXRvcl0gaXMgJUFycmF5UHJvdG9fdmFsdWVzJSAoOS40LjQuNiwgOS40LjQuNylcbkl0ZXJhdG9ycy5Bcmd1bWVudHMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbmFkZFRvVW5zY29wYWJsZXMoJ2tleXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ3ZhbHVlcycpO1xuYWRkVG9VbnNjb3BhYmxlcygnZW50cmllcycpO1xuIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBGUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGU7XG52YXIgbmFtZVJFID0gL15cXHMqZnVuY3Rpb24gKFteIChdKikvO1xudmFyIE5BTUUgPSAnbmFtZSc7XG5cbi8vIDE5LjIuNC4yIG5hbWVcbk5BTUUgaW4gRlByb3RvIHx8IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgZFAoRlByb3RvLCBOQU1FLCB7XG4gIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiAoJycgKyB0aGlzKS5tYXRjaChuYW1lUkUpWzFdO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHN0cm9uZyA9IHJlcXVpcmUoJy4vX2NvbGxlY3Rpb24tc3Ryb25nJyk7XG52YXIgdmFsaWRhdGUgPSByZXF1aXJlKCcuL192YWxpZGF0ZS1jb2xsZWN0aW9uJyk7XG52YXIgTUFQID0gJ01hcCc7XG5cbi8vIDIzLjEgTWFwIE9iamVjdHNcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29sbGVjdGlvbicpKE1BUCwgZnVuY3Rpb24gKGdldCkge1xuICByZXR1cm4gZnVuY3Rpb24gTWFwKCkgeyByZXR1cm4gZ2V0KHRoaXMsIGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTsgfTtcbn0sIHtcbiAgLy8gMjMuMS4zLjYgTWFwLnByb3RvdHlwZS5nZXQoa2V5KVxuICBnZXQ6IGZ1bmN0aW9uIGdldChrZXkpIHtcbiAgICB2YXIgZW50cnkgPSBzdHJvbmcuZ2V0RW50cnkodmFsaWRhdGUodGhpcywgTUFQKSwga2V5KTtcbiAgICByZXR1cm4gZW50cnkgJiYgZW50cnkudjtcbiAgfSxcbiAgLy8gMjMuMS4zLjkgTWFwLnByb3RvdHlwZS5zZXQoa2V5LCB2YWx1ZSlcbiAgc2V0OiBmdW5jdGlvbiBzZXQoa2V5LCB2YWx1ZSkge1xuICAgIHJldHVybiBzdHJvbmcuZGVmKHZhbGlkYXRlKHRoaXMsIE1BUCksIGtleSA9PT0gMCA/IDAgOiBrZXksIHZhbHVlKTtcbiAgfVxufSwgc3Ryb25nLCB0cnVlKTtcbiIsIi8vIDE5LjEuMy4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiwgJ09iamVjdCcsIHsgYXNzaWduOiByZXF1aXJlKCcuL19vYmplY3QtYXNzaWduJykgfSk7XG4iLCIvLyAxOS4xLjIuMTQgT2JqZWN0LmtleXMoTylcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxucmVxdWlyZSgnLi9fb2JqZWN0LXNhcCcpKCdrZXlzJywgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZnVuY3Rpb24ga2V5cyhpdCkge1xuICAgIHJldHVybiAka2V5cyh0b09iamVjdChpdCkpO1xuICB9O1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbnZhciBhbkluc3RhbmNlID0gcmVxdWlyZSgnLi9fYW4taW5zdGFuY2UnKTtcbnZhciBmb3JPZiA9IHJlcXVpcmUoJy4vX2Zvci1vZicpO1xudmFyIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4vX3NwZWNpZXMtY29uc3RydWN0b3InKTtcbnZhciB0YXNrID0gcmVxdWlyZSgnLi9fdGFzaycpLnNldDtcbnZhciBtaWNyb3Rhc2sgPSByZXF1aXJlKCcuL19taWNyb3Rhc2snKSgpO1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlID0gcmVxdWlyZSgnLi9fbmV3LXByb21pc2UtY2FwYWJpbGl0eScpO1xudmFyIHBlcmZvcm0gPSByZXF1aXJlKCcuL19wZXJmb3JtJyk7XG52YXIgdXNlckFnZW50ID0gcmVxdWlyZSgnLi9fdXNlci1hZ2VudCcpO1xudmFyIHByb21pc2VSZXNvbHZlID0gcmVxdWlyZSgnLi9fcHJvbWlzZS1yZXNvbHZlJyk7XG52YXIgUFJPTUlTRSA9ICdQcm9taXNlJztcbnZhciBUeXBlRXJyb3IgPSBnbG9iYWwuVHlwZUVycm9yO1xudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciB2ZXJzaW9ucyA9IHByb2Nlc3MgJiYgcHJvY2Vzcy52ZXJzaW9ucztcbnZhciB2OCA9IHZlcnNpb25zICYmIHZlcnNpb25zLnY4IHx8ICcnO1xudmFyICRQcm9taXNlID0gZ2xvYmFsW1BST01JU0VdO1xudmFyIGlzTm9kZSA9IGNsYXNzb2YocHJvY2VzcykgPT0gJ3Byb2Nlc3MnO1xudmFyIGVtcHR5ID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xudmFyIEludGVybmFsLCBuZXdHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHksIE93blByb21pc2VDYXBhYmlsaXR5LCBXcmFwcGVyO1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gbmV3R2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUuZjtcblxudmFyIFVTRV9OQVRJVkUgPSAhIWZ1bmN0aW9uICgpIHtcbiAgdHJ5IHtcbiAgICAvLyBjb3JyZWN0IHN1YmNsYXNzaW5nIHdpdGggQEBzcGVjaWVzIHN1cHBvcnRcbiAgICB2YXIgcHJvbWlzZSA9ICRQcm9taXNlLnJlc29sdmUoMSk7XG4gICAgdmFyIEZha2VQcm9taXNlID0gKHByb21pc2UuY29uc3RydWN0b3IgPSB7fSlbcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKV0gPSBmdW5jdGlvbiAoZXhlYykge1xuICAgICAgZXhlYyhlbXB0eSwgZW1wdHkpO1xuICAgIH07XG4gICAgLy8gdW5oYW5kbGVkIHJlamVjdGlvbnMgdHJhY2tpbmcgc3VwcG9ydCwgTm9kZUpTIFByb21pc2Ugd2l0aG91dCBpdCBmYWlscyBAQHNwZWNpZXMgdGVzdFxuICAgIHJldHVybiAoaXNOb2RlIHx8IHR5cGVvZiBQcm9taXNlUmVqZWN0aW9uRXZlbnQgPT0gJ2Z1bmN0aW9uJylcbiAgICAgICYmIHByb21pc2UudGhlbihlbXB0eSkgaW5zdGFuY2VvZiBGYWtlUHJvbWlzZVxuICAgICAgLy8gdjggNi42IChOb2RlIDEwIGFuZCBDaHJvbWUgNjYpIGhhdmUgYSBidWcgd2l0aCByZXNvbHZpbmcgY3VzdG9tIHRoZW5hYmxlc1xuICAgICAgLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9ODMwNTY1XG4gICAgICAvLyB3ZSBjYW4ndCBkZXRlY3QgaXQgc3luY2hyb25vdXNseSwgc28ganVzdCBjaGVjayB2ZXJzaW9uc1xuICAgICAgJiYgdjguaW5kZXhPZignNi42JykgIT09IDBcbiAgICAgICYmIHVzZXJBZ2VudC5pbmRleE9mKCdDaHJvbWUvNjYnKSA9PT0gLTE7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxufSgpO1xuXG4vLyBoZWxwZXJzXG52YXIgaXNUaGVuYWJsZSA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgdGhlbjtcbiAgcmV0dXJuIGlzT2JqZWN0KGl0KSAmJiB0eXBlb2YgKHRoZW4gPSBpdC50aGVuKSA9PSAnZnVuY3Rpb24nID8gdGhlbiA6IGZhbHNlO1xufTtcbnZhciBub3RpZnkgPSBmdW5jdGlvbiAocHJvbWlzZSwgaXNSZWplY3QpIHtcbiAgaWYgKHByb21pc2UuX24pIHJldHVybjtcbiAgcHJvbWlzZS5fbiA9IHRydWU7XG4gIHZhciBjaGFpbiA9IHByb21pc2UuX2M7XG4gIG1pY3JvdGFzayhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHZhbHVlID0gcHJvbWlzZS5fdjtcbiAgICB2YXIgb2sgPSBwcm9taXNlLl9zID09IDE7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBydW4gPSBmdW5jdGlvbiAocmVhY3Rpb24pIHtcbiAgICAgIHZhciBoYW5kbGVyID0gb2sgPyByZWFjdGlvbi5vayA6IHJlYWN0aW9uLmZhaWw7XG4gICAgICB2YXIgcmVzb2x2ZSA9IHJlYWN0aW9uLnJlc29sdmU7XG4gICAgICB2YXIgcmVqZWN0ID0gcmVhY3Rpb24ucmVqZWN0O1xuICAgICAgdmFyIGRvbWFpbiA9IHJlYWN0aW9uLmRvbWFpbjtcbiAgICAgIHZhciByZXN1bHQsIHRoZW4sIGV4aXRlZDtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICAgICAgaWYgKCFvaykge1xuICAgICAgICAgICAgaWYgKHByb21pc2UuX2ggPT0gMikgb25IYW5kbGVVbmhhbmRsZWQocHJvbWlzZSk7XG4gICAgICAgICAgICBwcm9taXNlLl9oID0gMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGhhbmRsZXIgPT09IHRydWUpIHJlc3VsdCA9IHZhbHVlO1xuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGRvbWFpbikgZG9tYWluLmVudGVyKCk7XG4gICAgICAgICAgICByZXN1bHQgPSBoYW5kbGVyKHZhbHVlKTsgLy8gbWF5IHRocm93XG4gICAgICAgICAgICBpZiAoZG9tYWluKSB7XG4gICAgICAgICAgICAgIGRvbWFpbi5leGl0KCk7XG4gICAgICAgICAgICAgIGV4aXRlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChyZXN1bHQgPT09IHJlYWN0aW9uLnByb21pc2UpIHtcbiAgICAgICAgICAgIHJlamVjdChUeXBlRXJyb3IoJ1Byb21pc2UtY2hhaW4gY3ljbGUnKSk7XG4gICAgICAgICAgfSBlbHNlIGlmICh0aGVuID0gaXNUaGVuYWJsZShyZXN1bHQpKSB7XG4gICAgICAgICAgICB0aGVuLmNhbGwocmVzdWx0LCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0gZWxzZSByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0gZWxzZSByZWplY3QodmFsdWUpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZiAoZG9tYWluICYmICFleGl0ZWQpIGRvbWFpbi5leGl0KCk7XG4gICAgICAgIHJlamVjdChlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHdoaWxlIChjaGFpbi5sZW5ndGggPiBpKSBydW4oY2hhaW5baSsrXSk7IC8vIHZhcmlhYmxlIGxlbmd0aCAtIGNhbid0IHVzZSBmb3JFYWNoXG4gICAgcHJvbWlzZS5fYyA9IFtdO1xuICAgIHByb21pc2UuX24gPSBmYWxzZTtcbiAgICBpZiAoaXNSZWplY3QgJiYgIXByb21pc2UuX2gpIG9uVW5oYW5kbGVkKHByb21pc2UpO1xuICB9KTtcbn07XG52YXIgb25VbmhhbmRsZWQgPSBmdW5jdGlvbiAocHJvbWlzZSkge1xuICB0YXNrLmNhbGwoZ2xvYmFsLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHZhbHVlID0gcHJvbWlzZS5fdjtcbiAgICB2YXIgdW5oYW5kbGVkID0gaXNVbmhhbmRsZWQocHJvbWlzZSk7XG4gICAgdmFyIHJlc3VsdCwgaGFuZGxlciwgY29uc29sZTtcbiAgICBpZiAodW5oYW5kbGVkKSB7XG4gICAgICByZXN1bHQgPSBwZXJmb3JtKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGlzTm9kZSkge1xuICAgICAgICAgIHByb2Nlc3MuZW1pdCgndW5oYW5kbGVkUmVqZWN0aW9uJywgdmFsdWUsIHByb21pc2UpO1xuICAgICAgICB9IGVsc2UgaWYgKGhhbmRsZXIgPSBnbG9iYWwub251bmhhbmRsZWRyZWplY3Rpb24pIHtcbiAgICAgICAgICBoYW5kbGVyKHsgcHJvbWlzZTogcHJvbWlzZSwgcmVhc29uOiB2YWx1ZSB9KTtcbiAgICAgICAgfSBlbHNlIGlmICgoY29uc29sZSA9IGdsb2JhbC5jb25zb2xlKSAmJiBjb25zb2xlLmVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignVW5oYW5kbGVkIHByb21pc2UgcmVqZWN0aW9uJywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIC8vIEJyb3dzZXJzIHNob3VsZCBub3QgdHJpZ2dlciBgcmVqZWN0aW9uSGFuZGxlZGAgZXZlbnQgaWYgaXQgd2FzIGhhbmRsZWQgaGVyZSwgTm9kZUpTIC0gc2hvdWxkXG4gICAgICBwcm9taXNlLl9oID0gaXNOb2RlIHx8IGlzVW5oYW5kbGVkKHByb21pc2UpID8gMiA6IDE7XG4gICAgfSBwcm9taXNlLl9hID0gdW5kZWZpbmVkO1xuICAgIGlmICh1bmhhbmRsZWQgJiYgcmVzdWx0LmUpIHRocm93IHJlc3VsdC52O1xuICB9KTtcbn07XG52YXIgaXNVbmhhbmRsZWQgPSBmdW5jdGlvbiAocHJvbWlzZSkge1xuICByZXR1cm4gcHJvbWlzZS5faCAhPT0gMSAmJiAocHJvbWlzZS5fYSB8fCBwcm9taXNlLl9jKS5sZW5ndGggPT09IDA7XG59O1xudmFyIG9uSGFuZGxlVW5oYW5kbGVkID0gZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBoYW5kbGVyO1xuICAgIGlmIChpc05vZGUpIHtcbiAgICAgIHByb2Nlc3MuZW1pdCgncmVqZWN0aW9uSGFuZGxlZCcsIHByb21pc2UpO1xuICAgIH0gZWxzZSBpZiAoaGFuZGxlciA9IGdsb2JhbC5vbnJlamVjdGlvbmhhbmRsZWQpIHtcbiAgICAgIGhhbmRsZXIoeyBwcm9taXNlOiBwcm9taXNlLCByZWFzb246IHByb21pc2UuX3YgfSk7XG4gICAgfVxuICB9KTtcbn07XG52YXIgJHJlamVjdCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICB2YXIgcHJvbWlzZSA9IHRoaXM7XG4gIGlmIChwcm9taXNlLl9kKSByZXR1cm47XG4gIHByb21pc2UuX2QgPSB0cnVlO1xuICBwcm9taXNlID0gcHJvbWlzZS5fdyB8fCBwcm9taXNlOyAvLyB1bndyYXBcbiAgcHJvbWlzZS5fdiA9IHZhbHVlO1xuICBwcm9taXNlLl9zID0gMjtcbiAgaWYgKCFwcm9taXNlLl9hKSBwcm9taXNlLl9hID0gcHJvbWlzZS5fYy5zbGljZSgpO1xuICBub3RpZnkocHJvbWlzZSwgdHJ1ZSk7XG59O1xudmFyICRyZXNvbHZlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHZhciBwcm9taXNlID0gdGhpcztcbiAgdmFyIHRoZW47XG4gIGlmIChwcm9taXNlLl9kKSByZXR1cm47XG4gIHByb21pc2UuX2QgPSB0cnVlO1xuICBwcm9taXNlID0gcHJvbWlzZS5fdyB8fCBwcm9taXNlOyAvLyB1bndyYXBcbiAgdHJ5IHtcbiAgICBpZiAocHJvbWlzZSA9PT0gdmFsdWUpIHRocm93IFR5cGVFcnJvcihcIlByb21pc2UgY2FuJ3QgYmUgcmVzb2x2ZWQgaXRzZWxmXCIpO1xuICAgIGlmICh0aGVuID0gaXNUaGVuYWJsZSh2YWx1ZSkpIHtcbiAgICAgIG1pY3JvdGFzayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB3cmFwcGVyID0geyBfdzogcHJvbWlzZSwgX2Q6IGZhbHNlIH07IC8vIHdyYXBcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0aGVuLmNhbGwodmFsdWUsIGN0eCgkcmVzb2x2ZSwgd3JhcHBlciwgMSksIGN0eCgkcmVqZWN0LCB3cmFwcGVyLCAxKSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAkcmVqZWN0LmNhbGwod3JhcHBlciwgZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9taXNlLl92ID0gdmFsdWU7XG4gICAgICBwcm9taXNlLl9zID0gMTtcbiAgICAgIG5vdGlmeShwcm9taXNlLCBmYWxzZSk7XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgJHJlamVjdC5jYWxsKHsgX3c6IHByb21pc2UsIF9kOiBmYWxzZSB9LCBlKTsgLy8gd3JhcFxuICB9XG59O1xuXG4vLyBjb25zdHJ1Y3RvciBwb2x5ZmlsbFxuaWYgKCFVU0VfTkFUSVZFKSB7XG4gIC8vIDI1LjQuMy4xIFByb21pc2UoZXhlY3V0b3IpXG4gICRQcm9taXNlID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcikge1xuICAgIGFuSW5zdGFuY2UodGhpcywgJFByb21pc2UsIFBST01JU0UsICdfaCcpO1xuICAgIGFGdW5jdGlvbihleGVjdXRvcik7XG4gICAgSW50ZXJuYWwuY2FsbCh0aGlzKTtcbiAgICB0cnkge1xuICAgICAgZXhlY3V0b3IoY3R4KCRyZXNvbHZlLCB0aGlzLCAxKSwgY3R4KCRyZWplY3QsIHRoaXMsIDEpKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICRyZWplY3QuY2FsbCh0aGlzLCBlcnIpO1xuICAgIH1cbiAgfTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gIEludGVybmFsID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcikge1xuICAgIHRoaXMuX2MgPSBbXTsgICAgICAgICAgICAgLy8gPC0gYXdhaXRpbmcgcmVhY3Rpb25zXG4gICAgdGhpcy5fYSA9IHVuZGVmaW5lZDsgICAgICAvLyA8LSBjaGVja2VkIGluIGlzVW5oYW5kbGVkIHJlYWN0aW9uc1xuICAgIHRoaXMuX3MgPSAwOyAgICAgICAgICAgICAgLy8gPC0gc3RhdGVcbiAgICB0aGlzLl9kID0gZmFsc2U7ICAgICAgICAgIC8vIDwtIGRvbmVcbiAgICB0aGlzLl92ID0gdW5kZWZpbmVkOyAgICAgIC8vIDwtIHZhbHVlXG4gICAgdGhpcy5faCA9IDA7ICAgICAgICAgICAgICAvLyA8LSByZWplY3Rpb24gc3RhdGUsIDAgLSBkZWZhdWx0LCAxIC0gaGFuZGxlZCwgMiAtIHVuaGFuZGxlZFxuICAgIHRoaXMuX24gPSBmYWxzZTsgICAgICAgICAgLy8gPC0gbm90aWZ5XG4gIH07XG4gIEludGVybmFsLnByb3RvdHlwZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lLWFsbCcpKCRQcm9taXNlLnByb3RvdHlwZSwge1xuICAgIC8vIDI1LjQuNS4zIFByb21pc2UucHJvdG90eXBlLnRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpXG4gICAgdGhlbjogZnVuY3Rpb24gdGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkge1xuICAgICAgdmFyIHJlYWN0aW9uID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoc3BlY2llc0NvbnN0cnVjdG9yKHRoaXMsICRQcm9taXNlKSk7XG4gICAgICByZWFjdGlvbi5vayA9IHR5cGVvZiBvbkZ1bGZpbGxlZCA9PSAnZnVuY3Rpb24nID8gb25GdWxmaWxsZWQgOiB0cnVlO1xuICAgICAgcmVhY3Rpb24uZmFpbCA9IHR5cGVvZiBvblJlamVjdGVkID09ICdmdW5jdGlvbicgJiYgb25SZWplY3RlZDtcbiAgICAgIHJlYWN0aW9uLmRvbWFpbiA9IGlzTm9kZSA/IHByb2Nlc3MuZG9tYWluIDogdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fYy5wdXNoKHJlYWN0aW9uKTtcbiAgICAgIGlmICh0aGlzLl9hKSB0aGlzLl9hLnB1c2gocmVhY3Rpb24pO1xuICAgICAgaWYgKHRoaXMuX3MpIG5vdGlmeSh0aGlzLCBmYWxzZSk7XG4gICAgICByZXR1cm4gcmVhY3Rpb24ucHJvbWlzZTtcbiAgICB9LFxuICAgIC8vIDI1LjQuNS4xIFByb21pc2UucHJvdG90eXBlLmNhdGNoKG9uUmVqZWN0ZWQpXG4gICAgJ2NhdGNoJzogZnVuY3Rpb24gKG9uUmVqZWN0ZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLnRoZW4odW5kZWZpbmVkLCBvblJlamVjdGVkKTtcbiAgICB9XG4gIH0pO1xuICBPd25Qcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBJbnRlcm5hbCgpO1xuICAgIHRoaXMucHJvbWlzZSA9IHByb21pc2U7XG4gICAgdGhpcy5yZXNvbHZlID0gY3R4KCRyZXNvbHZlLCBwcm9taXNlLCAxKTtcbiAgICB0aGlzLnJlamVjdCA9IGN0eCgkcmVqZWN0LCBwcm9taXNlLCAxKTtcbiAgfTtcbiAgbmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUuZiA9IG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24gKEMpIHtcbiAgICByZXR1cm4gQyA9PT0gJFByb21pc2UgfHwgQyA9PT0gV3JhcHBlclxuICAgICAgPyBuZXcgT3duUHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICAgIDogbmV3R2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5KEMpO1xuICB9O1xufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7IFByb21pc2U6ICRQcm9taXNlIH0pO1xucmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKSgkUHJvbWlzZSwgUFJPTUlTRSk7XG5yZXF1aXJlKCcuL19zZXQtc3BlY2llcycpKFBST01JU0UpO1xuV3JhcHBlciA9IHJlcXVpcmUoJy4vX2NvcmUnKVtQUk9NSVNFXTtcblxuLy8gc3RhdGljc1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuNSBQcm9taXNlLnJlamVjdChyKVxuICByZWplY3Q6IGZ1bmN0aW9uIHJlamVjdChyKSB7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSh0aGlzKTtcbiAgICB2YXIgJCRyZWplY3QgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICAkJHJlamVjdChyKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKExJQlJBUlkgfHwgIVVTRV9OQVRJVkUpLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC42IFByb21pc2UucmVzb2x2ZSh4KVxuICByZXNvbHZlOiBmdW5jdGlvbiByZXNvbHZlKHgpIHtcbiAgICByZXR1cm4gcHJvbWlzZVJlc29sdmUoTElCUkFSWSAmJiB0aGlzID09PSBXcmFwcGVyID8gJFByb21pc2UgOiB0aGlzLCB4KTtcbiAgfVxufSk7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICEoVVNFX05BVElWRSAmJiByZXF1aXJlKCcuL19pdGVyLWRldGVjdCcpKGZ1bmN0aW9uIChpdGVyKSB7XG4gICRQcm9taXNlLmFsbChpdGVyKVsnY2F0Y2gnXShlbXB0eSk7XG59KSksIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjEgUHJvbWlzZS5hbGwoaXRlcmFibGUpXG4gIGFsbDogZnVuY3Rpb24gYWxsKGl0ZXJhYmxlKSB7XG4gICAgdmFyIEMgPSB0aGlzO1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQyk7XG4gICAgdmFyIHJlc29sdmUgPSBjYXBhYmlsaXR5LnJlc29sdmU7XG4gICAgdmFyIHJlamVjdCA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciByZXN1bHQgPSBwZXJmb3JtKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciB2YWx1ZXMgPSBbXTtcbiAgICAgIHZhciBpbmRleCA9IDA7XG4gICAgICB2YXIgcmVtYWluaW5nID0gMTtcbiAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgICAgICAgdmFyICRpbmRleCA9IGluZGV4Kys7XG4gICAgICAgIHZhciBhbHJlYWR5Q2FsbGVkID0gZmFsc2U7XG4gICAgICAgIHZhbHVlcy5wdXNoKHVuZGVmaW5lZCk7XG4gICAgICAgIHJlbWFpbmluZysrO1xuICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICBpZiAoYWxyZWFkeUNhbGxlZCkgcmV0dXJuO1xuICAgICAgICAgIGFscmVhZHlDYWxsZWQgPSB0cnVlO1xuICAgICAgICAgIHZhbHVlc1skaW5kZXhdID0gdmFsdWU7XG4gICAgICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgfSk7XG4gICAgaWYgKHJlc3VsdC5lKSByZWplY3QocmVzdWx0LnYpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH0sXG4gIC8vIDI1LjQuNC40IFByb21pc2UucmFjZShpdGVyYWJsZSlcbiAgcmFjZTogZnVuY3Rpb24gcmFjZShpdGVyYWJsZSkge1xuICAgIHZhciBDID0gdGhpcztcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KEMpO1xuICAgIHZhciByZWplY3QgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICB2YXIgcmVzdWx0ID0gcGVyZm9ybShmdW5jdGlvbiAoKSB7XG4gICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gICAgICAgIEMucmVzb2x2ZShwcm9taXNlKS50aGVuKGNhcGFiaWxpdHkucmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGlmIChyZXN1bHQuZSkgcmVqZWN0KHJlc3VsdC52KTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbiIsIi8vIDIxLjIuNS4zIGdldCBSZWdFeHAucHJvdG90eXBlLmZsYWdzKClcbmlmIChyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmIC8uL2cuZmxhZ3MgIT0gJ2cnKSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mKFJlZ0V4cC5wcm90b3R5cGUsICdmbGFncycsIHtcbiAgY29uZmlndXJhYmxlOiB0cnVlLFxuICBnZXQ6IHJlcXVpcmUoJy4vX2ZsYWdzJylcbn0pO1xuIiwiLy8gQEBzcGxpdCBsb2dpY1xucmVxdWlyZSgnLi9fZml4LXJlLXdrcycpKCdzcGxpdCcsIDIsIGZ1bmN0aW9uIChkZWZpbmVkLCBTUExJVCwgJHNwbGl0KSB7XG4gICd1c2Ugc3RyaWN0JztcbiAgdmFyIGlzUmVnRXhwID0gcmVxdWlyZSgnLi9faXMtcmVnZXhwJyk7XG4gIHZhciBfc3BsaXQgPSAkc3BsaXQ7XG4gIHZhciAkcHVzaCA9IFtdLnB1c2g7XG4gIHZhciAkU1BMSVQgPSAnc3BsaXQnO1xuICB2YXIgTEVOR1RIID0gJ2xlbmd0aCc7XG4gIHZhciBMQVNUX0lOREVYID0gJ2xhc3RJbmRleCc7XG4gIGlmIChcbiAgICAnYWJiYydbJFNQTElUXSgvKGIpKi8pWzFdID09ICdjJyB8fFxuICAgICd0ZXN0J1skU1BMSVRdKC8oPzopLywgLTEpW0xFTkdUSF0gIT0gNCB8fFxuICAgICdhYidbJFNQTElUXSgvKD86YWIpKi8pW0xFTkdUSF0gIT0gMiB8fFxuICAgICcuJ1skU1BMSVRdKC8oLj8pKC4/KS8pW0xFTkdUSF0gIT0gNCB8fFxuICAgICcuJ1skU1BMSVRdKC8oKSgpLylbTEVOR1RIXSA+IDEgfHxcbiAgICAnJ1skU1BMSVRdKC8uPy8pW0xFTkdUSF1cbiAgKSB7XG4gICAgdmFyIE5QQ0cgPSAvKCk/Py8uZXhlYygnJylbMV0gPT09IHVuZGVmaW5lZDsgLy8gbm9ucGFydGljaXBhdGluZyBjYXB0dXJpbmcgZ3JvdXBcbiAgICAvLyBiYXNlZCBvbiBlczUtc2hpbSBpbXBsZW1lbnRhdGlvbiwgbmVlZCB0byByZXdvcmsgaXRcbiAgICAkc3BsaXQgPSBmdW5jdGlvbiAoc2VwYXJhdG9yLCBsaW1pdCkge1xuICAgICAgdmFyIHN0cmluZyA9IFN0cmluZyh0aGlzKTtcbiAgICAgIGlmIChzZXBhcmF0b3IgPT09IHVuZGVmaW5lZCAmJiBsaW1pdCA9PT0gMCkgcmV0dXJuIFtdO1xuICAgICAgLy8gSWYgYHNlcGFyYXRvcmAgaXMgbm90IGEgcmVnZXgsIHVzZSBuYXRpdmUgc3BsaXRcbiAgICAgIGlmICghaXNSZWdFeHAoc2VwYXJhdG9yKSkgcmV0dXJuIF9zcGxpdC5jYWxsKHN0cmluZywgc2VwYXJhdG9yLCBsaW1pdCk7XG4gICAgICB2YXIgb3V0cHV0ID0gW107XG4gICAgICB2YXIgZmxhZ3MgPSAoc2VwYXJhdG9yLmlnbm9yZUNhc2UgPyAnaScgOiAnJykgK1xuICAgICAgICAgICAgICAgICAgKHNlcGFyYXRvci5tdWx0aWxpbmUgPyAnbScgOiAnJykgK1xuICAgICAgICAgICAgICAgICAgKHNlcGFyYXRvci51bmljb2RlID8gJ3UnIDogJycpICtcbiAgICAgICAgICAgICAgICAgIChzZXBhcmF0b3Iuc3RpY2t5ID8gJ3knIDogJycpO1xuICAgICAgdmFyIGxhc3RMYXN0SW5kZXggPSAwO1xuICAgICAgdmFyIHNwbGl0TGltaXQgPSBsaW1pdCA9PT0gdW5kZWZpbmVkID8gNDI5NDk2NzI5NSA6IGxpbWl0ID4+PiAwO1xuICAgICAgLy8gTWFrZSBgZ2xvYmFsYCBhbmQgYXZvaWQgYGxhc3RJbmRleGAgaXNzdWVzIGJ5IHdvcmtpbmcgd2l0aCBhIGNvcHlcbiAgICAgIHZhciBzZXBhcmF0b3JDb3B5ID0gbmV3IFJlZ0V4cChzZXBhcmF0b3Iuc291cmNlLCBmbGFncyArICdnJyk7XG4gICAgICB2YXIgc2VwYXJhdG9yMiwgbWF0Y2gsIGxhc3RJbmRleCwgbGFzdExlbmd0aCwgaTtcbiAgICAgIC8vIERvZXNuJ3QgbmVlZCBmbGFncyBneSwgYnV0IHRoZXkgZG9uJ3QgaHVydFxuICAgICAgaWYgKCFOUENHKSBzZXBhcmF0b3IyID0gbmV3IFJlZ0V4cCgnXicgKyBzZXBhcmF0b3JDb3B5LnNvdXJjZSArICckKD8hXFxcXHMpJywgZmxhZ3MpO1xuICAgICAgd2hpbGUgKG1hdGNoID0gc2VwYXJhdG9yQ29weS5leGVjKHN0cmluZykpIHtcbiAgICAgICAgLy8gYHNlcGFyYXRvckNvcHkubGFzdEluZGV4YCBpcyBub3QgcmVsaWFibGUgY3Jvc3MtYnJvd3NlclxuICAgICAgICBsYXN0SW5kZXggPSBtYXRjaC5pbmRleCArIG1hdGNoWzBdW0xFTkdUSF07XG4gICAgICAgIGlmIChsYXN0SW5kZXggPiBsYXN0TGFzdEluZGV4KSB7XG4gICAgICAgICAgb3V0cHV0LnB1c2goc3RyaW5nLnNsaWNlKGxhc3RMYXN0SW5kZXgsIG1hdGNoLmluZGV4KSk7XG4gICAgICAgICAgLy8gRml4IGJyb3dzZXJzIHdob3NlIGBleGVjYCBtZXRob2RzIGRvbid0IGNvbnNpc3RlbnRseSByZXR1cm4gYHVuZGVmaW5lZGAgZm9yIE5QQ0dcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbG9vcC1mdW5jXG4gICAgICAgICAgaWYgKCFOUENHICYmIG1hdGNoW0xFTkdUSF0gPiAxKSBtYXRjaFswXS5yZXBsYWNlKHNlcGFyYXRvcjIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGZvciAoaSA9IDE7IGkgPCBhcmd1bWVudHNbTEVOR1RIXSAtIDI7IGkrKykgaWYgKGFyZ3VtZW50c1tpXSA9PT0gdW5kZWZpbmVkKSBtYXRjaFtpXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpZiAobWF0Y2hbTEVOR1RIXSA+IDEgJiYgbWF0Y2guaW5kZXggPCBzdHJpbmdbTEVOR1RIXSkgJHB1c2guYXBwbHkob3V0cHV0LCBtYXRjaC5zbGljZSgxKSk7XG4gICAgICAgICAgbGFzdExlbmd0aCA9IG1hdGNoWzBdW0xFTkdUSF07XG4gICAgICAgICAgbGFzdExhc3RJbmRleCA9IGxhc3RJbmRleDtcbiAgICAgICAgICBpZiAob3V0cHV0W0xFTkdUSF0gPj0gc3BsaXRMaW1pdCkgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNlcGFyYXRvckNvcHlbTEFTVF9JTkRFWF0gPT09IG1hdGNoLmluZGV4KSBzZXBhcmF0b3JDb3B5W0xBU1RfSU5ERVhdKys7IC8vIEF2b2lkIGFuIGluZmluaXRlIGxvb3BcbiAgICAgIH1cbiAgICAgIGlmIChsYXN0TGFzdEluZGV4ID09PSBzdHJpbmdbTEVOR1RIXSkge1xuICAgICAgICBpZiAobGFzdExlbmd0aCB8fCAhc2VwYXJhdG9yQ29weS50ZXN0KCcnKSkgb3V0cHV0LnB1c2goJycpO1xuICAgICAgfSBlbHNlIG91dHB1dC5wdXNoKHN0cmluZy5zbGljZShsYXN0TGFzdEluZGV4KSk7XG4gICAgICByZXR1cm4gb3V0cHV0W0xFTkdUSF0gPiBzcGxpdExpbWl0ID8gb3V0cHV0LnNsaWNlKDAsIHNwbGl0TGltaXQpIDogb3V0cHV0O1xuICAgIH07XG4gIC8vIENoYWtyYSwgVjhcbiAgfSBlbHNlIGlmICgnMCdbJFNQTElUXSh1bmRlZmluZWQsIDApW0xFTkdUSF0pIHtcbiAgICAkc3BsaXQgPSBmdW5jdGlvbiAoc2VwYXJhdG9yLCBsaW1pdCkge1xuICAgICAgcmV0dXJuIHNlcGFyYXRvciA9PT0gdW5kZWZpbmVkICYmIGxpbWl0ID09PSAwID8gW10gOiBfc3BsaXQuY2FsbCh0aGlzLCBzZXBhcmF0b3IsIGxpbWl0KTtcbiAgICB9O1xuICB9XG4gIC8vIDIxLjEuMy4xNyBTdHJpbmcucHJvdG90eXBlLnNwbGl0KHNlcGFyYXRvciwgbGltaXQpXG4gIHJldHVybiBbZnVuY3Rpb24gc3BsaXQoc2VwYXJhdG9yLCBsaW1pdCkge1xuICAgIHZhciBPID0gZGVmaW5lZCh0aGlzKTtcbiAgICB2YXIgZm4gPSBzZXBhcmF0b3IgPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogc2VwYXJhdG9yW1NQTElUXTtcbiAgICByZXR1cm4gZm4gIT09IHVuZGVmaW5lZCA/IGZuLmNhbGwoc2VwYXJhdG9yLCBPLCBsaW1pdCkgOiAkc3BsaXQuY2FsbChTdHJpbmcoTyksIHNlcGFyYXRvciwgbGltaXQpO1xuICB9LCAkc3BsaXRdO1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG5yZXF1aXJlKCcuL2VzNi5yZWdleHAuZmxhZ3MnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyICRmbGFncyA9IHJlcXVpcmUoJy4vX2ZsYWdzJyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpO1xudmFyIFRPX1NUUklORyA9ICd0b1N0cmluZyc7XG52YXIgJHRvU3RyaW5nID0gLy4vW1RPX1NUUklOR107XG5cbnZhciBkZWZpbmUgPSBmdW5jdGlvbiAoZm4pIHtcbiAgcmVxdWlyZSgnLi9fcmVkZWZpbmUnKShSZWdFeHAucHJvdG90eXBlLCBUT19TVFJJTkcsIGZuLCB0cnVlKTtcbn07XG5cbi8vIDIxLjIuNS4xNCBSZWdFeHAucHJvdG90eXBlLnRvU3RyaW5nKClcbmlmIChyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHsgcmV0dXJuICR0b1N0cmluZy5jYWxsKHsgc291cmNlOiAnYScsIGZsYWdzOiAnYicgfSkgIT0gJy9hL2InOyB9KSkge1xuICBkZWZpbmUoZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgdmFyIFIgPSBhbk9iamVjdCh0aGlzKTtcbiAgICByZXR1cm4gJy8nLmNvbmNhdChSLnNvdXJjZSwgJy8nLFxuICAgICAgJ2ZsYWdzJyBpbiBSID8gUi5mbGFncyA6ICFERVNDUklQVE9SUyAmJiBSIGluc3RhbmNlb2YgUmVnRXhwID8gJGZsYWdzLmNhbGwoUikgOiB1bmRlZmluZWQpO1xuICB9KTtcbi8vIEZGNDQtIFJlZ0V4cCN0b1N0cmluZyBoYXMgYSB3cm9uZyBuYW1lXG59IGVsc2UgaWYgKCR0b1N0cmluZy5uYW1lICE9IFRPX1NUUklORykge1xuICBkZWZpbmUoZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuICR0b1N0cmluZy5jYWxsKHRoaXMpO1xuICB9KTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkYXQgPSByZXF1aXJlKCcuL19zdHJpbmctYXQnKSh0cnVlKTtcblxuLy8gMjEuMS4zLjI3IFN0cmluZy5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShTdHJpbmcsICdTdHJpbmcnLCBmdW5jdGlvbiAoaXRlcmF0ZWQpIHtcbiAgdGhpcy5fdCA9IFN0cmluZyhpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuLy8gMjEuMS41LjIuMSAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24gKCkge1xuICB2YXIgTyA9IHRoaXMuX3Q7XG4gIHZhciBpbmRleCA9IHRoaXMuX2k7XG4gIHZhciBwb2ludDtcbiAgaWYgKGluZGV4ID49IE8ubGVuZ3RoKSByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIHBvaW50ID0gJGF0KE8sIGluZGV4KTtcbiAgdGhpcy5faSArPSBwb2ludC5sZW5ndGg7XG4gIHJldHVybiB7IHZhbHVlOiBwb2ludCwgZG9uZTogZmFsc2UgfTtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gRUNNQVNjcmlwdCA2IHN5bWJvbHMgc2hpbVxudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIE1FVEEgPSByZXF1aXJlKCcuL19tZXRhJykuS0VZO1xudmFyICRmYWlscyA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xudmFyIHdrcyA9IHJlcXVpcmUoJy4vX3drcycpO1xudmFyIHdrc0V4dCA9IHJlcXVpcmUoJy4vX3drcy1leHQnKTtcbnZhciB3a3NEZWZpbmUgPSByZXF1aXJlKCcuL193a3MtZGVmaW5lJyk7XG52YXIgZW51bUtleXMgPSByZXF1aXJlKCcuL19lbnVtLWtleXMnKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi9faXMtYXJyYXknKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciBfY3JlYXRlID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpO1xudmFyIGdPUE5FeHQgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbi1leHQnKTtcbnZhciAkR09QRCA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJyk7XG52YXIgJERQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xudmFyIGdPUEQgPSAkR09QRC5mO1xudmFyIGRQID0gJERQLmY7XG52YXIgZ09QTiA9IGdPUE5FeHQuZjtcbnZhciAkU3ltYm9sID0gZ2xvYmFsLlN5bWJvbDtcbnZhciAkSlNPTiA9IGdsb2JhbC5KU09OO1xudmFyIF9zdHJpbmdpZnkgPSAkSlNPTiAmJiAkSlNPTi5zdHJpbmdpZnk7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG52YXIgSElEREVOID0gd2tzKCdfaGlkZGVuJyk7XG52YXIgVE9fUFJJTUlUSVZFID0gd2tzKCd0b1ByaW1pdGl2ZScpO1xudmFyIGlzRW51bSA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xudmFyIFN5bWJvbFJlZ2lzdHJ5ID0gc2hhcmVkKCdzeW1ib2wtcmVnaXN0cnknKTtcbnZhciBBbGxTeW1ib2xzID0gc2hhcmVkKCdzeW1ib2xzJyk7XG52YXIgT1BTeW1ib2xzID0gc2hhcmVkKCdvcC1zeW1ib2xzJyk7XG52YXIgT2JqZWN0UHJvdG8gPSBPYmplY3RbUFJPVE9UWVBFXTtcbnZhciBVU0VfTkFUSVZFID0gdHlwZW9mICRTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcbnZhciBRT2JqZWN0ID0gZ2xvYmFsLlFPYmplY3Q7XG4vLyBEb24ndCB1c2Ugc2V0dGVycyBpbiBRdCBTY3JpcHQsIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy8xNzNcbnZhciBzZXR0ZXIgPSAhUU9iamVjdCB8fCAhUU9iamVjdFtQUk9UT1RZUEVdIHx8ICFRT2JqZWN0W1BST1RPVFlQRV0uZmluZENoaWxkO1xuXG4vLyBmYWxsYmFjayBmb3Igb2xkIEFuZHJvaWQsIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvdjgvaXNzdWVzL2RldGFpbD9pZD02ODdcbnZhciBzZXRTeW1ib2xEZXNjID0gREVTQ1JJUFRPUlMgJiYgJGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIF9jcmVhdGUoZFAoe30sICdhJywge1xuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZFAodGhpcywgJ2EnLCB7IHZhbHVlOiA3IH0pLmE7IH1cbiAgfSkpLmEgIT0gNztcbn0pID8gZnVuY3Rpb24gKGl0LCBrZXksIEQpIHtcbiAgdmFyIHByb3RvRGVzYyA9IGdPUEQoT2JqZWN0UHJvdG8sIGtleSk7XG4gIGlmIChwcm90b0Rlc2MpIGRlbGV0ZSBPYmplY3RQcm90b1trZXldO1xuICBkUChpdCwga2V5LCBEKTtcbiAgaWYgKHByb3RvRGVzYyAmJiBpdCAhPT0gT2JqZWN0UHJvdG8pIGRQKE9iamVjdFByb3RvLCBrZXksIHByb3RvRGVzYyk7XG59IDogZFA7XG5cbnZhciB3cmFwID0gZnVuY3Rpb24gKHRhZykge1xuICB2YXIgc3ltID0gQWxsU3ltYm9sc1t0YWddID0gX2NyZWF0ZSgkU3ltYm9sW1BST1RPVFlQRV0pO1xuICBzeW0uX2sgPSB0YWc7XG4gIHJldHVybiBzeW07XG59O1xuXG52YXIgaXNTeW1ib2wgPSBVU0VfTkFUSVZFICYmIHR5cGVvZiAkU3ltYm9sLml0ZXJhdG9yID09ICdzeW1ib2wnID8gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCc7XG59IDogZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCBpbnN0YW5jZW9mICRTeW1ib2w7XG59O1xuXG52YXIgJGRlZmluZVByb3BlcnR5ID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgRCkge1xuICBpZiAoaXQgPT09IE9iamVjdFByb3RvKSAkZGVmaW5lUHJvcGVydHkoT1BTeW1ib2xzLCBrZXksIEQpO1xuICBhbk9iamVjdChpdCk7XG4gIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEQpO1xuICBpZiAoaGFzKEFsbFN5bWJvbHMsIGtleSkpIHtcbiAgICBpZiAoIUQuZW51bWVyYWJsZSkge1xuICAgICAgaWYgKCFoYXMoaXQsIEhJRERFTikpIGRQKGl0LCBISURERU4sIGNyZWF0ZURlc2MoMSwge30pKTtcbiAgICAgIGl0W0hJRERFTl1ba2V5XSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKSBpdFtISURERU5dW2tleV0gPSBmYWxzZTtcbiAgICAgIEQgPSBfY3JlYXRlKEQsIHsgZW51bWVyYWJsZTogY3JlYXRlRGVzYygwLCBmYWxzZSkgfSk7XG4gICAgfSByZXR1cm4gc2V0U3ltYm9sRGVzYyhpdCwga2V5LCBEKTtcbiAgfSByZXR1cm4gZFAoaXQsIGtleSwgRCk7XG59O1xudmFyICRkZWZpbmVQcm9wZXJ0aWVzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhpdCwgUCkge1xuICBhbk9iamVjdChpdCk7XG4gIHZhciBrZXlzID0gZW51bUtleXMoUCA9IHRvSU9iamVjdChQKSk7XG4gIHZhciBpID0gMDtcbiAgdmFyIGwgPSBrZXlzLmxlbmd0aDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKGwgPiBpKSAkZGVmaW5lUHJvcGVydHkoaXQsIGtleSA9IGtleXNbaSsrXSwgUFtrZXldKTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciAkY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGl0LCBQKSB7XG4gIHJldHVybiBQID09PSB1bmRlZmluZWQgPyBfY3JlYXRlKGl0KSA6ICRkZWZpbmVQcm9wZXJ0aWVzKF9jcmVhdGUoaXQpLCBQKTtcbn07XG52YXIgJHByb3BlcnR5SXNFbnVtZXJhYmxlID0gZnVuY3Rpb24gcHJvcGVydHlJc0VudW1lcmFibGUoa2V5KSB7XG4gIHZhciBFID0gaXNFbnVtLmNhbGwodGhpcywga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKSk7XG4gIGlmICh0aGlzID09PSBPYmplY3RQcm90byAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9QU3ltYm9scywga2V5KSkgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gRSB8fCAhaGFzKHRoaXMsIGtleSkgfHwgIWhhcyhBbGxTeW1ib2xzLCBrZXkpIHx8IGhhcyh0aGlzLCBISURERU4pICYmIHRoaXNbSElEREVOXVtrZXldID8gRSA6IHRydWU7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSkge1xuICBpdCA9IHRvSU9iamVjdChpdCk7XG4gIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSk7XG4gIGlmIChpdCA9PT0gT2JqZWN0UHJvdG8gJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPUFN5bWJvbHMsIGtleSkpIHJldHVybjtcbiAgdmFyIEQgPSBnT1BEKGl0LCBrZXkpO1xuICBpZiAoRCAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0pKSBELmVudW1lcmFibGUgPSB0cnVlO1xuICByZXR1cm4gRDtcbn07XG52YXIgJGdldE93blByb3BlcnR5TmFtZXMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KSB7XG4gIHZhciBuYW1lcyA9IGdPUE4odG9JT2JqZWN0KGl0KSk7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGkgPSAwO1xuICB2YXIga2V5O1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkge1xuICAgIGlmICghaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIGtleSAhPSBISURERU4gJiYga2V5ICE9IE1FVEEpIHJlc3VsdC5wdXNoKGtleSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgJGdldE93blByb3BlcnR5U3ltYm9scyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5U3ltYm9scyhpdCkge1xuICB2YXIgSVNfT1AgPSBpdCA9PT0gT2JqZWN0UHJvdG87XG4gIHZhciBuYW1lcyA9IGdPUE4oSVNfT1AgPyBPUFN5bWJvbHMgOiB0b0lPYmplY3QoaXQpKTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgaSA9IDA7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSB7XG4gICAgaWYgKGhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiAoSVNfT1AgPyBoYXMoT2JqZWN0UHJvdG8sIGtleSkgOiB0cnVlKSkgcmVzdWx0LnB1c2goQWxsU3ltYm9sc1trZXldKTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcblxuLy8gMTkuNC4xLjEgU3ltYm9sKFtkZXNjcmlwdGlvbl0pXG5pZiAoIVVTRV9OQVRJVkUpIHtcbiAgJFN5bWJvbCA9IGZ1bmN0aW9uIFN5bWJvbCgpIHtcbiAgICBpZiAodGhpcyBpbnN0YW5jZW9mICRTeW1ib2wpIHRocm93IFR5cGVFcnJvcignU3ltYm9sIGlzIG5vdCBhIGNvbnN0cnVjdG9yIScpO1xuICAgIHZhciB0YWcgPSB1aWQoYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpO1xuICAgIHZhciAkc2V0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICBpZiAodGhpcyA9PT0gT2JqZWN0UHJvdG8pICRzZXQuY2FsbChPUFN5bWJvbHMsIHZhbHVlKTtcbiAgICAgIGlmIChoYXModGhpcywgSElEREVOKSAmJiBoYXModGhpc1tISURERU5dLCB0YWcpKSB0aGlzW0hJRERFTl1bdGFnXSA9IGZhbHNlO1xuICAgICAgc2V0U3ltYm9sRGVzYyh0aGlzLCB0YWcsIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbiAgICB9O1xuICAgIGlmIChERVNDUklQVE9SUyAmJiBzZXR0ZXIpIHNldFN5bWJvbERlc2MoT2JqZWN0UHJvdG8sIHRhZywgeyBjb25maWd1cmFibGU6IHRydWUsIHNldDogJHNldCB9KTtcbiAgICByZXR1cm4gd3JhcCh0YWcpO1xuICB9O1xuICByZWRlZmluZSgkU3ltYm9sW1BST1RPVFlQRV0sICd0b1N0cmluZycsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLl9rO1xuICB9KTtcblxuICAkR09QRC5mID0gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbiAgJERQLmYgPSAkZGVmaW5lUHJvcGVydHk7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZiA9IGdPUE5FeHQuZiA9ICRnZXRPd25Qcm9wZXJ0eU5hbWVzO1xuICByZXF1aXJlKCcuL19vYmplY3QtcGllJykuZiA9ICRwcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKS5mID0gJGdldE93blByb3BlcnR5U3ltYm9scztcblxuICBpZiAoREVTQ1JJUFRPUlMgJiYgIXJlcXVpcmUoJy4vX2xpYnJhcnknKSkge1xuICAgIHJlZGVmaW5lKE9iamVjdFByb3RvLCAncHJvcGVydHlJc0VudW1lcmFibGUnLCAkcHJvcGVydHlJc0VudW1lcmFibGUsIHRydWUpO1xuICB9XG5cbiAgd2tzRXh0LmYgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHJldHVybiB3cmFwKHdrcyhuYW1lKSk7XG4gIH07XG59XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIHsgU3ltYm9sOiAkU3ltYm9sIH0pO1xuXG5mb3IgKHZhciBlczZTeW1ib2xzID0gKFxuICAvLyAxOS40LjIuMiwgMTkuNC4yLjMsIDE5LjQuMi40LCAxOS40LjIuNiwgMTkuNC4yLjgsIDE5LjQuMi45LCAxOS40LjIuMTAsIDE5LjQuMi4xMSwgMTkuNC4yLjEyLCAxOS40LjIuMTMsIDE5LjQuMi4xNFxuICAnaGFzSW5zdGFuY2UsaXNDb25jYXRTcHJlYWRhYmxlLGl0ZXJhdG9yLG1hdGNoLHJlcGxhY2Usc2VhcmNoLHNwZWNpZXMsc3BsaXQsdG9QcmltaXRpdmUsdG9TdHJpbmdUYWcsdW5zY29wYWJsZXMnXG4pLnNwbGl0KCcsJyksIGogPSAwOyBlczZTeW1ib2xzLmxlbmd0aCA+IGo7KXdrcyhlczZTeW1ib2xzW2orK10pO1xuXG5mb3IgKHZhciB3ZWxsS25vd25TeW1ib2xzID0gJGtleXMod2tzLnN0b3JlKSwgayA9IDA7IHdlbGxLbm93blN5bWJvbHMubGVuZ3RoID4gazspIHdrc0RlZmluZSh3ZWxsS25vd25TeW1ib2xzW2srK10pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnU3ltYm9sJywge1xuICAvLyAxOS40LjIuMSBTeW1ib2wuZm9yKGtleSlcbiAgJ2Zvcic6IGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gaGFzKFN5bWJvbFJlZ2lzdHJ5LCBrZXkgKz0gJycpXG4gICAgICA/IFN5bWJvbFJlZ2lzdHJ5W2tleV1cbiAgICAgIDogU3ltYm9sUmVnaXN0cnlba2V5XSA9ICRTeW1ib2woa2V5KTtcbiAgfSxcbiAgLy8gMTkuNC4yLjUgU3ltYm9sLmtleUZvcihzeW0pXG4gIGtleUZvcjogZnVuY3Rpb24ga2V5Rm9yKHN5bSkge1xuICAgIGlmICghaXNTeW1ib2woc3ltKSkgdGhyb3cgVHlwZUVycm9yKHN5bSArICcgaXMgbm90IGEgc3ltYm9sIScpO1xuICAgIGZvciAodmFyIGtleSBpbiBTeW1ib2xSZWdpc3RyeSkgaWYgKFN5bWJvbFJlZ2lzdHJ5W2tleV0gPT09IHN5bSkgcmV0dXJuIGtleTtcbiAgfSxcbiAgdXNlU2V0dGVyOiBmdW5jdGlvbiAoKSB7IHNldHRlciA9IHRydWU7IH0sXG4gIHVzZVNpbXBsZTogZnVuY3Rpb24gKCkgeyBzZXR0ZXIgPSBmYWxzZTsgfVxufSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsICdPYmplY3QnLCB7XG4gIC8vIDE5LjEuMi4yIE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbiAgY3JlYXRlOiAkY3JlYXRlLFxuICAvLyAxOS4xLjIuNCBPYmplY3QuZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcylcbiAgZGVmaW5lUHJvcGVydHk6ICRkZWZpbmVQcm9wZXJ0eSxcbiAgLy8gMTkuMS4yLjMgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcylcbiAgZGVmaW5lUHJvcGVydGllczogJGRlZmluZVByb3BlcnRpZXMsXG4gIC8vIDE5LjEuMi42IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUClcbiAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLFxuICAvLyAxOS4xLjIuNyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxuICBnZXRPd25Qcm9wZXJ0eU5hbWVzOiAkZ2V0T3duUHJvcGVydHlOYW1lcyxcbiAgLy8gMTkuMS4yLjggT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhPKVxuICBnZXRPd25Qcm9wZXJ0eVN5bWJvbHM6ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHNcbn0pO1xuXG4vLyAyNC4zLjIgSlNPTi5zdHJpbmdpZnkodmFsdWUgWywgcmVwbGFjZXIgWywgc3BhY2VdXSlcbiRKU09OICYmICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKCFVU0VfTkFUSVZFIHx8ICRmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHZhciBTID0gJFN5bWJvbCgpO1xuICAvLyBNUyBFZGdlIGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyB7fVxuICAvLyBXZWJLaXQgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIG51bGxcbiAgLy8gVjggdGhyb3dzIG9uIGJveGVkIHN5bWJvbHNcbiAgcmV0dXJuIF9zdHJpbmdpZnkoW1NdKSAhPSAnW251bGxdJyB8fCBfc3RyaW5naWZ5KHsgYTogUyB9KSAhPSAne30nIHx8IF9zdHJpbmdpZnkoT2JqZWN0KFMpKSAhPSAne30nO1xufSkpLCAnSlNPTicsIHtcbiAgc3RyaW5naWZ5OiBmdW5jdGlvbiBzdHJpbmdpZnkoaXQpIHtcbiAgICB2YXIgYXJncyA9IFtpdF07XG4gICAgdmFyIGkgPSAxO1xuICAgIHZhciByZXBsYWNlciwgJHJlcGxhY2VyO1xuICAgIHdoaWxlIChhcmd1bWVudHMubGVuZ3RoID4gaSkgYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcbiAgICAkcmVwbGFjZXIgPSByZXBsYWNlciA9IGFyZ3NbMV07XG4gICAgaWYgKCFpc09iamVjdChyZXBsYWNlcikgJiYgaXQgPT09IHVuZGVmaW5lZCB8fCBpc1N5bWJvbChpdCkpIHJldHVybjsgLy8gSUU4IHJldHVybnMgc3RyaW5nIG9uIHVuZGVmaW5lZFxuICAgIGlmICghaXNBcnJheShyZXBsYWNlcikpIHJlcGxhY2VyID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgIGlmICh0eXBlb2YgJHJlcGxhY2VyID09ICdmdW5jdGlvbicpIHZhbHVlID0gJHJlcGxhY2VyLmNhbGwodGhpcywga2V5LCB2YWx1ZSk7XG4gICAgICBpZiAoIWlzU3ltYm9sKHZhbHVlKSkgcmV0dXJuIHZhbHVlO1xuICAgIH07XG4gICAgYXJnc1sxXSA9IHJlcGxhY2VyO1xuICAgIHJldHVybiBfc3RyaW5naWZ5LmFwcGx5KCRKU09OLCBhcmdzKTtcbiAgfVxufSk7XG5cbi8vIDE5LjQuMy40IFN5bWJvbC5wcm90b3R5cGVbQEB0b1ByaW1pdGl2ZV0oaGludClcbiRTeW1ib2xbUFJPVE9UWVBFXVtUT19QUklNSVRJVkVdIHx8IHJlcXVpcmUoJy4vX2hpZGUnKSgkU3ltYm9sW1BST1RPVFlQRV0sIFRPX1BSSU1JVElWRSwgJFN5bWJvbFtQUk9UT1RZUEVdLnZhbHVlT2YpO1xuLy8gMTkuNC4zLjUgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoJFN5bWJvbCwgJ1N5bWJvbCcpO1xuLy8gMjAuMi4xLjkgTWF0aFtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoTWF0aCwgJ01hdGgnLCB0cnVlKTtcbi8vIDI0LjMuMyBKU09OW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhnbG9iYWwuSlNPTiwgJ0pTT04nLCB0cnVlKTtcbiIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLW9iamVjdC12YWx1ZXMtZW50cmllc1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciAkZW50cmllcyA9IHJlcXVpcmUoJy4vX29iamVjdC10by1hcnJheScpKHRydWUpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHtcbiAgZW50cmllczogZnVuY3Rpb24gZW50cmllcyhpdCkge1xuICAgIHJldHVybiAkZW50cmllcyhpdCk7XG4gIH1cbn0pO1xuIiwicmVxdWlyZSgnLi9fd2tzLWRlZmluZScpKCdhc3luY0l0ZXJhdG9yJyk7XG4iLCJ2YXIgJGl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vZXM2LmFycmF5Lml0ZXJhdG9yJyk7XG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgd2tzID0gcmVxdWlyZSgnLi9fd2tzJyk7XG52YXIgSVRFUkFUT1IgPSB3a3MoJ2l0ZXJhdG9yJyk7XG52YXIgVE9fU1RSSU5HX1RBRyA9IHdrcygndG9TdHJpbmdUYWcnKTtcbnZhciBBcnJheVZhbHVlcyA9IEl0ZXJhdG9ycy5BcnJheTtcblxudmFyIERPTUl0ZXJhYmxlcyA9IHtcbiAgQ1NTUnVsZUxpc3Q6IHRydWUsIC8vIFRPRE86IE5vdCBzcGVjIGNvbXBsaWFudCwgc2hvdWxkIGJlIGZhbHNlLlxuICBDU1NTdHlsZURlY2xhcmF0aW9uOiBmYWxzZSxcbiAgQ1NTVmFsdWVMaXN0OiBmYWxzZSxcbiAgQ2xpZW50UmVjdExpc3Q6IGZhbHNlLFxuICBET01SZWN0TGlzdDogZmFsc2UsXG4gIERPTVN0cmluZ0xpc3Q6IGZhbHNlLFxuICBET01Ub2tlbkxpc3Q6IHRydWUsXG4gIERhdGFUcmFuc2Zlckl0ZW1MaXN0OiBmYWxzZSxcbiAgRmlsZUxpc3Q6IGZhbHNlLFxuICBIVE1MQWxsQ29sbGVjdGlvbjogZmFsc2UsXG4gIEhUTUxDb2xsZWN0aW9uOiBmYWxzZSxcbiAgSFRNTEZvcm1FbGVtZW50OiBmYWxzZSxcbiAgSFRNTFNlbGVjdEVsZW1lbnQ6IGZhbHNlLFxuICBNZWRpYUxpc3Q6IHRydWUsIC8vIFRPRE86IE5vdCBzcGVjIGNvbXBsaWFudCwgc2hvdWxkIGJlIGZhbHNlLlxuICBNaW1lVHlwZUFycmF5OiBmYWxzZSxcbiAgTmFtZWROb2RlTWFwOiBmYWxzZSxcbiAgTm9kZUxpc3Q6IHRydWUsXG4gIFBhaW50UmVxdWVzdExpc3Q6IGZhbHNlLFxuICBQbHVnaW46IGZhbHNlLFxuICBQbHVnaW5BcnJheTogZmFsc2UsXG4gIFNWR0xlbmd0aExpc3Q6IGZhbHNlLFxuICBTVkdOdW1iZXJMaXN0OiBmYWxzZSxcbiAgU1ZHUGF0aFNlZ0xpc3Q6IGZhbHNlLFxuICBTVkdQb2ludExpc3Q6IGZhbHNlLFxuICBTVkdTdHJpbmdMaXN0OiBmYWxzZSxcbiAgU1ZHVHJhbnNmb3JtTGlzdDogZmFsc2UsXG4gIFNvdXJjZUJ1ZmZlckxpc3Q6IGZhbHNlLFxuICBTdHlsZVNoZWV0TGlzdDogdHJ1ZSwgLy8gVE9ETzogTm90IHNwZWMgY29tcGxpYW50LCBzaG91bGQgYmUgZmFsc2UuXG4gIFRleHRUcmFja0N1ZUxpc3Q6IGZhbHNlLFxuICBUZXh0VHJhY2tMaXN0OiBmYWxzZSxcbiAgVG91Y2hMaXN0OiBmYWxzZVxufTtcblxuZm9yICh2YXIgY29sbGVjdGlvbnMgPSBnZXRLZXlzKERPTUl0ZXJhYmxlcyksIGkgPSAwOyBpIDwgY29sbGVjdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgdmFyIE5BTUUgPSBjb2xsZWN0aW9uc1tpXTtcbiAgdmFyIGV4cGxpY2l0ID0gRE9NSXRlcmFibGVzW05BTUVdO1xuICB2YXIgQ29sbGVjdGlvbiA9IGdsb2JhbFtOQU1FXTtcbiAgdmFyIHByb3RvID0gQ29sbGVjdGlvbiAmJiBDb2xsZWN0aW9uLnByb3RvdHlwZTtcbiAgdmFyIGtleTtcbiAgaWYgKHByb3RvKSB7XG4gICAgaWYgKCFwcm90b1tJVEVSQVRPUl0pIGhpZGUocHJvdG8sIElURVJBVE9SLCBBcnJheVZhbHVlcyk7XG4gICAgaWYgKCFwcm90b1tUT19TVFJJTkdfVEFHXSkgaGlkZShwcm90bywgVE9fU1RSSU5HX1RBRywgTkFNRSk7XG4gICAgSXRlcmF0b3JzW05BTUVdID0gQXJyYXlWYWx1ZXM7XG4gICAgaWYgKGV4cGxpY2l0KSBmb3IgKGtleSBpbiAkaXRlcmF0b3JzKSBpZiAoIXByb3RvW2tleV0pIHJlZGVmaW5lKHByb3RvLCBrZXksICRpdGVyYXRvcnNba2V5XSwgdHJ1ZSk7XG4gIH1cbn1cbiIsImltcG9ydCBOMTliYXNlQXBwbGV0IGZyb20gJy4vbjE5YmFzZUFwcGxldCc7XG5pbXBvcnQgTjE5cG9wdXBDb250cm9sbGVyIGZyb20gJy4vbjE5cG9wdXBDb250cm9sbGVyJztcblxuU2llYmVsQXBwRmFjYWRlLk4xOUhlbHBlciA9IGNsYXNzIGV4dGVuZHMgTjE5YmFzZUFwcGxldCB7XG4gIGNvbnN0cnVjdG9yKHNldHRpbmdzKSB7XG4gICAgY29uc3QgeyBhcHBsZXROYW1lIH0gPSBzZXR0aW5ncztcbiAgICBpZiAoYXBwbGV0TmFtZSkge1xuICAgICAgY29uc3QgYXBwbGV0ID0gU2llYmVsQXBwLlNfQXBwLkdldEFjdGl2ZVZpZXcoKS5HZXRBcHBsZXQoYXBwbGV0TmFtZSk7XG4gICAgICBpZiAoIWFwcGxldCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBnZXQgdGhlIHJlZmVyZW5jZSB0byB0aGUgYXBwbGV0IGJ5IHRoZSAke2FwcGxldE5hbWV9IG5hbWVgKTtcbiAgICAgIH1cbiAgICAgIHN1cGVyKE9iamVjdC5hc3NpZ24oe30sIHNldHRpbmdzLCB7IHBtOiBhcHBsZXQuR2V0UE1vZGVsKCkgfSkpO1xuICAgIH0gZWxzZSB7IC8vIHRoZSB1c3VhbCB3YXkgYXNzdW1lZFxuICAgICAgc3VwZXIoc2V0dGluZ3MpO1xuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKCdOZXh1cyBtYWluIGNsYXNzIHN0YXJ0ZWQuLi4uJywgdGhpcy5hcHBsZXROYW1lKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgLy8gZ2V0IHRoZSBuMTlwb3B1cENvbnRyb2xsZXIgc2luZ2xldG9uIGluc3RhbmNlXG4gICAgdGhpcy5uMTlwb3B1cENvbnRyb2xsZXIgPSBOMTlwb3B1cENvbnRyb2xsZXIuaW5zdGFuY2U7XG4gIH1cblxuICBjbG9zZVBvcHVwQXBwbGV0KCkge1xuICAgIHJldHVybiB0aGlzLm4xOXBvcHVwQ29udHJvbGxlci5jbG9zZVBvcHVwQXBwbGV0KCk7XG4gIH1cblxuICBfc2hvd1BvcHVwQXBwbGV0KG5hbWUsIGhpZGUsIGNiKSB7XG4gICAgaWYgKCF0aGlzLm4xOXBvcHVwQ29udHJvbGxlcikge1xuICAgICAgLy8gaXQgaXMgYSBwb3B1cCBhcHBsZXRcbiAgICAgIHRocm93IG5ldyBFcnJvcignT3Blbm5pbmcgcG9wdXAgb24gdGhlIHBvcHVwIGlzIG5vdCBzdXBwb3J0ZWQgbm93Jyk7XG4gICAgfVxuICAgIGlmICghdGhpcy5uMTlwb3B1cENvbnRyb2xsZXIuY2FuT3BlblBvcHVwKCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IG9wZW4gcG9wdXAhJyk7XG4gICAgICAvLyByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMudmlldy5TZXRBY3RpdmVBcHBsZXRJbnRlcm5hbCh0aGlzLmFwcGxldCk7IC8vIG9yIFNldEFjdGl2ZUFwcGxldFxuICAgIHRoaXMuX3NldEFjdGl2ZUNvbnRyb2wobmFtZSk7XG4gICAgcmV0dXJuIHRoaXMubjE5cG9wdXBDb250cm9sbGVyLnNob3dQb3B1cEFwcGxldChoaWRlLCBjYiwgdGhpcy5wbSk7XG4gIH1cblxuICBzaG93TXZnQXBwbGV0KG5hbWUsIGhpZGUsIGNiKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Nob3dQb3B1cEFwcGxldChuYW1lLCBoaWRlLCBjYik7XG4gIH1cblxuICBzaG93UGlja0FwcGxldChuYW1lLCBoaWRlLCBjYikge1xuICAgIHJldHVybiB0aGlzLl9zaG93UG9wdXBBcHBsZXQobmFtZSwgaGlkZSwgY2IpO1xuICB9XG5cbiAgZHJpbGxkb3duKGNvbnRyb2xOYW1lKSB7XG4gICAgLy8gdG9kbzogY2hlY2sgaXNMaW5rIG9mIGNvbnRyb2w/XG4gICAgLy8gaW5kZXggaXMgbm90IGVmZmVjdGl2ZSwgYW5kIGRyaWxsZG93biBhbnl3YXkgaGFwcGVucyBvbiBsYXN0IHNlbGVjdGVkIHJlY29yZFxuICAgIGlmICghdGhpcy5pc0xpc3RBcHBsZXQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmdldFNlbGVjdGlvbigpO1xuICAgIHJldHVybiB0aGlzLnBtLkV4ZWN1dGVNZXRob2QoJ09uRHJpbGxEb3duJywgY29udHJvbE5hbWUsIGluZGV4KTtcbiAgfVxuXG4gIGdvdG9WaWV3KHRhcmdldFZpZXdOYW1lLCB0YXJnZXRBcHBsZXROYW1lLCBpZCkge1xuICAgIC8vIHRvZG86IGdldCB0aGUgYXBwbGV0IG5hbWUgZnJvbSB0aGUgdmlldyBkZWZpbml0aW9uP1xuICAgIGNvbnN0IHJvd0lkID0gdHlwZW9mIGlkID09PSAndW5kZWZpbmVkJyA/IHRoaXMuZ2V0Q3VycmVudFJlY29yZCh0cnVlKS5JZCA6IGlkO1xuICAgIGxldCBTV0VDbWQgPSBgR290b1ZpZXcmU1dFVmlldz0ke3RhcmdldFZpZXdOYW1lfSZTV0VBcHBsZXQwPSR7dGFyZ2V0QXBwbGV0TmFtZX1gO1xuICAgIFNXRUNtZCArPSBgJlNXRUJVPTEmU1dFS2VlcENvbnRleHQ9RkFMU0UmU1dFUm93SWQwPSR7cm93SWR9YDtcbiAgICBTV0VDbWQgPSBlbmNvZGVVUkkoU1dFQ21kKTtcbiAgICBTaWViZWxBcHAuU19BcHAuR290b1ZpZXcodGFyZ2V0Vmlld05hbWUsICcnLCBTV0VDbWQsICcnKTtcbiAgfVxuXG4gIHN0YXRpYyBSZUluaXRQb3B1cCgpIHtcbiAgICBjb25zdCBwb3B1cFBNID0gU2llYmVsQXBwLlNfQXBwLkdldFBvcHVwUE0oKTtcbiAgICBwb3B1cFBNLkluaXQoKTtcbiAgICBwb3B1cFBNLlNldHVwKCk7XG4gIH1cbn07XG4iLCJpbXBvcnQgTjE5bm90aWZpY2F0aW9ucyBmcm9tICcuL24xOW5vdGlmaWNhdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOMTliYXNlQXBwbGV0IHtcbiAgY29uc3RydWN0b3Ioc2V0dGluZ3MpIHtcbiAgICB0aGlzLmNvbnN0cyA9IFNpZWJlbEpTLkRlcGVuZGVuY3koJ1NpZWJlbEFwcC5Db25zdGFudHMnKTtcbiAgICB0aGlzLnBtID0gc2V0dGluZ3MucG07XG4gICAgdGhpcy52aWV3ID0gU2llYmVsQXBwLlNfQXBwLkdldEFjdGl2ZVZpZXcoKTtcbiAgICB0aGlzLmFwcGxldE5hbWUgPSB0aGlzLnBtLkdldCgnR2V0TmFtZScpO1xuICAgIHRoaXMuYXBwbGV0ID0gdGhpcy52aWV3LkdldEFwcGxldCh0aGlzLmFwcGxldE5hbWUpO1xuICAgIHRoaXMuaXNMaXN0QXBwbGV0ID0gdHlwZW9mIHRoaXMucG0uR2V0KCdHZXRMaXN0T2ZDb2x1bW5zJykgIT09ICd1bmRlZmluZWQnO1xuICAgIHRoaXMucmVxdWlyZWQgPSBbXTsgLy8gd2lsbCBiZSBlbXB0eSBmb3IgdGhlIGxpc3QgYXBwbGV0XG4gICAgdGhpcy5sb3YgPSB7fTtcbiAgICB0aGlzLmJvb2xPYmplY3QgPSBuZXcgU2llYmVsQXBwLlNfQXBwLkRhdHVtQm9vbE9iamVjdCgpO1xuXG4gICAgY29uc3QgYmNJZCA9IHRoaXMuYXBwbGV0LkdldEJDSWQoKTtcbiAgICB0aGlzLm5vdGlmaWNhdGlvbnMgPSBuZXcgTjE5bm90aWZpY2F0aW9ucyh0aGlzLnBtLCB0aGlzLmNvbnN0cywgYmNJZCk7XG5cbiAgICAvLyBwb3B1bGF0ZSB0aGUgcmVxdWlyZWQgYXJyYXkgZm9yIGZvcm0gYXBwbGV0c1xuICAgIGlmICghdGhpcy5pc0xpc3RBcHBsZXQpIHtcbiAgICAgIGNvbnN0IGFwcGxldElkID0gYHNfJHt0aGlzLnBtLkdldCgnR2V0RnVsbElkJyl9X2RpdmA7XG4gICAgICBjb25zdCBhcHBsZXRJbnB1dHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChhcHBsZXRJZCkucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXBwbGV0SW5wdXRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmIChhcHBsZXRJbnB1dHNbaV0uYXR0cmlidXRlc1snYXJpYS1yZXF1aXJlZCddKSB7XG4gICAgICAgICAgdGhpcy5yZXF1aXJlZC5wdXNoKGFwcGxldElucHV0c1tpXS5hdHRyaWJ1dGVzLm5hbWUubm9kZVZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGxpc3RlbmVyIHRvIGdldCBkeW5hbWljIExPVnNcbiAgICBjb25zdCBhcHBsZXROYW1lID0gdGhpcy5wbS5HZXQoJ0dldE5hbWUnKTtcbiAgICB0aGlzLnBtLkF0dGFjaE5vdGlmaWNhdGlvbkhhbmRsZXIodGhpcy5jb25zdHMuZ2V0KCdTV0VfUFJPUF9CQ19OT1RJX0dFTkVSSUMnKSwgKHByb3BTZXQpID0+IHtcbiAgICAgIGNvbnN0IHZpZXdOYW1lID0gU2llYmVsQXBwLlNfQXBwLkdldEFjdGl2ZVZpZXcoKS5HZXROYW1lKCk7XG4gICAgICBjb25zdCB0eXBlID0gcHJvcFNldC5HZXRQcm9wZXJ0eSh0aGlzLmNvbnN0cy5nZXQoJ1NXRV9QUk9QX05PVElfVFlQRScpKTtcbiAgICAgIGlmICh0eXBlID09PSAnR2V0UXVpY2tQaWNrSW5mbycpIHtcbiAgICAgICAgY29uc3QgYXJyID0gW107XG4gICAgICAgIENDRk1pc2NVdGlsX1N0cmluZ1RvQXJyYXkocHJvcFNldC5HZXRQcm9wZXJ0eSh0aGlzLmNvbnN0cy5nZXQoJ1NXRV9QUk9QX0FSR1NfQVJSQVknKSksIGFycik7XG4gICAgICAgIGlmICh2aWV3TmFtZSA9PT0gYXJyWzFdICYmIGFwcGxldE5hbWUgPT09IGFyclsyXSkge1xuICAgICAgICAgIGlmICgnZmFsc2UnID09PSBhcnJbNF0pIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgUGlja2xpc3QgaXMgbm90IGFzc29jaWF0ZWQgd2l0aCB0aGUgY29udHJvbCAtICR7SlNPTi5zdHJpbmdpZnkoYXJyKX1gKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5sb3ZbYXJyWzNdXSA9IGFyci5zcGxpY2UoNSkuZmlsdGVyKGVsID0+IGVsICE9PSAnJyk7XG4gICAgICAgICAgLy8gdG9kbzogbWF5YmUgd2UgbmVlZCB0byByZXR1cm4gc29tZSBpbmRpY2F0aW9uIHdoZW4gZW1wdHkgdmFsdWUgaXMgYWxsb3dlZFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzdWJzY3JpYmUoZnVuYykgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZmljYXRpb25zLnN1YnNjcmliZShmdW5jKTtcbiAgfVxuXG4gIHVuc3Vic2NyaWJlKHRva2VuKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2xhc3MtbWV0aG9kcy11c2UtdGhpc1xuICAgIHJldHVybiB0aGlzLm5vdGlmaWNhdGlvbnMudW5zdWJzY3JpYmUodG9rZW4pO1xuICB9XG5cbiAgX2dldENvbnRyb2wobmFtZSkge1xuICAgIHJldHVybiB0aGlzLnBtLkV4ZWN1dGVNZXRob2QoJ0dldENvbnRyb2wnLCBuYW1lKTtcbiAgfVxuXG4gIF9yZXR1cm5Db250cm9scygpIHtcbiAgICBpZiAodGhpcy5pc0xpc3RBcHBsZXQpIHtcbiAgICAgIHJldHVybiB0aGlzLnBtLkdldCgnR2V0TGlzdE9mQ29sdW1ucycpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5wbS5HZXQoJ0dldENvbnRyb2xzJyk7XG4gIH1cblxuICAvLyBjYWxsZWQgaW50byB0aGUgZ2V0Q29udHJvbHMgdG8gcmVkdWNlIHRoZSBhbW91bnQgb2YgdGhlIHJldHVybmVkIGNvbnRyb2xzXG4gIF9pc1NraXBDb250cm9sKHR5cGUpIHtcbiAgICAvLyBodHRwczovL2RvY3Mub3JhY2xlLmNvbS9jZC9FNzQ4OTBfMDEvYm9va3MvQ29uZmlnT3BlblVJL2FwcGVuZGl4X2FfYXBpMDAyLmh0bVxuICAgIC8vIG1heWJlIHdlIG5lZWQgdG8gZXhjbHVkZSBtb3JlIHR5cGVzXG4gICAgcmV0dXJuICh0eXBlID09PSB0aGlzLmNvbnN0cy5nZXQoJ1NXRV9QU1RfQlVUVE9OX0NUUkwnKSlcbiAgICAgIHx8ICh0eXBlID09PSB0aGlzLmNvbnN0cy5nZXQoJ1NXRV9DVFJMX0xJTksnKSlcbiAgICAgIHx8ICh0eXBlID09PSB0aGlzLmNvbnN0cy5nZXQoJ1NXRV9DVFJMX1BMQUlOVEVYVCcpKVxuICAgICAgfHwgKHR5cGUgPT09ICdudWxsJyk7IC8vIEdldFVpVHlwZSByZXR1cm5zIHN0cmluZ1xuICB9XG5cbiAgX2lzUmVxdWlyZWQoaW5wdXROYW1lKSB7XG4gICAgLy8gcmVxdWlyZWQgaXMgZW1wdHkgZm9yIGxpc3QgYXBwbGV0cywgaG9wZWZ1bGx5IGZvciBub3dcbiAgICByZXR1cm4gdGhpcy5yZXF1aXJlZC5pbmRleE9mKGlucHV0TmFtZSkgPiAtMTtcbiAgfVxuXG4gIHN0YXRpYyBHZXRTdGF0aWNMT1YoYXJyKSB7XG4gICAgY29uc3QgcmV0ID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIHJldC5wdXNoKGFycltpXS5wcm9wQXJyYXkpO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgX3NldEFjdGl2ZUNvbnRyb2wobmFtZSkge1xuICAgIGlmIChuYW1lKSB7XG4gICAgICByZXR1cm4gdGhpcy5wbS5FeGVjdXRlTWV0aG9kKCdTZXRBY3RpdmVDb250cm9sJywgdGhpcy5fZ2V0Q29udHJvbChuYW1lKSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnBtLkV4ZWN1dGVNZXRob2QoJ1NldEFjdGl2ZUNvbnRyb2wnLCBudWxsKTtcbiAgfVxuXG4gIF9nZXRWYWx1ZUZvckNvbnRyb2woY29udHJvbFVpVHlwZSwgdmFsdWUpIHtcbiAgICAvLyBUT0RPOiBEYXRlVGltZSwgbnVtYmVycywgYW5kIHBob25lcz9cbiAgICBpZiAodGhpcy5jb25zdHMuZ2V0KCdTV0VfQ1RSTF9DSEVDS0JPWCcpID09PSBjb250cm9sVWlUeXBlKSB7XG4gICAgICAvLyBjb252ZXJ0IHRydWUvZmFsc2UgPT4gWS9OIC8vIHdoYXQgd2l0aCBudWxsXG4gICAgICB0aGlzLmJvb2xPYmplY3QuU2V0VmFsdWUodmFsdWUpO1xuICAgICAgcmV0dXJuIHRoaXMuYm9vbE9iamVjdC5HZXRBc1N0cmluZygpO1xuICAgICAgLy8gdmFsdWUgPSB2YWx1ZSA/ICdZJyA6ICdOJzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBjYW5JbnZva2VNZXRob2QobWV0aG9kKSB7XG4gICAgcmV0dXJuIHRoaXMucG0uRXhlY3V0ZU1ldGhvZCgnQ2FuSW52b2tlTWV0aG9kJywgbWV0aG9kKTtcbiAgfVxuXG4gIGludm9rZU1ldGhvZChtZXRob2QpIHtcbiAgICBpZiAoIXRoaXMuY2FuSW52b2tlTWV0aG9kKG1ldGhvZCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucG0uRXhlY3V0ZU1ldGhvZCgnSW52b2tlTWV0aG9kJywgbWV0aG9kKTtcbiAgfVxuXG4gIGdldENvbnRyb2xzKCkge1xuICAgIGNvbnN0IGNvbnRyb2xzID0ge307XG4gICAgY29uc3QgYXBwbGV0Q29udHJvbHMgPSB0aGlzLl9yZXR1cm5Db250cm9scygpO1xuICAgIGNvbnN0IGFyciA9IE9iamVjdC5rZXlzKGFwcGxldENvbnRyb2xzKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgY29udHJvbCA9IGFwcGxldENvbnRyb2xzW2FycltpXV07XG4gICAgICBjb25zdCBjb250cm9sVWlUeXBlID0gY29udHJvbC5HZXRVSVR5cGUoKTtcbiAgICAgIGlmICh0aGlzLl9pc1NraXBDb250cm9sKGNvbnRyb2xVaVR5cGUpKSB7XG4gICAgICAgIGNvbnRpbnVlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnRpbnVlXG4gICAgICB9XG4gICAgICBjb25zdCBjb250cm9sTmFtZSA9IGNvbnRyb2wuR2V0TmFtZSgpO1xuICAgICAgY29uc3QgY29udHJvbElucHV0TmFtZSA9IGNvbnRyb2wuR2V0SW5wdXROYW1lKCk7XG4gICAgICBjb25zdCBvYmogPSB7XG4gICAgICAgIG5hbWU6IGNvbnRyb2xOYW1lLFxuICAgICAgICBsYWJlbDogY29udHJvbC5HZXREaXNwbGF5TmFtZSgpLFxuICAgICAgICB1aVR5cGU6IGNvbnRyb2xVaVR5cGUsXG4gICAgICAgIHJlcXVpcmVkOiB0aGlzLl9pc1JlcXVpcmVkKGNvbnRyb2xJbnB1dE5hbWUpLFxuICAgICAgICBib3VuZGVkUGljazogY29udHJvbC5Jc0JvdW5kZWRQaWNrKCkgPT09ICcxJyxcbiAgICAgICAgc3RhdGljUGljazogY29udHJvbC5Jc1N0YXRpY0JvdW5kZWQoKSA9PT0gJzEnLFxuICAgICAgICAvLyBwaWNrQXBwbGV0OiBjb250cm9sLkdldFBpY2tBcHBsZXQoKSwgLy8gY29uZnVzaW5nIGFuZCBub3QgY29uc2lzdGVudCAtIHNlZSB3aWtpXG4gICAgICAgIGlucHV0TmFtZTogY29udHJvbElucHV0TmFtZSxcbiAgICAgICAgaXNQb3N0Q2hhbmdlczogY29udHJvbC5Jc1Bvc3RDaGFuZ2VzKCksXG4gICAgICAgIG1heFNpemU6IGNvbnRyb2wuR2V0TWF4U2l6ZSgpLFxuICAgICAgICAvLyBtYXhDaGFyczogY29udHJvbC5HZXRNYXhDaGFycygpLCAvLyBpdCBpcyBhbHdheXMgMFxuICAgICAgICBmaWVsZE5hbWU6IGNvbnRyb2wuR2V0RmllbGROYW1lKCksXG4gICAgICAgIGlzTGluazogdGhpcy5wbS5FeGVjdXRlTWV0aG9kKCdDYW5OYXZpZ2F0ZScsIGNvbnRyb2xOYW1lKSxcbiAgICAgICAgcmVhZE9ubHk6ICF0aGlzLnBtLkV4ZWN1dGVNZXRob2QoJ0NhblVwZGF0ZScsIGNvbnRyb2xOYW1lKSwgLy8gaXQgd2lsbCBiZSByZW1vdmVkXG4gICAgICAgIHJlYWRvbmx5OiAhdGhpcy5wbS5FeGVjdXRlTWV0aG9kKCdDYW5VcGRhdGUnLCBjb250cm9sTmFtZSksXG4gICAgICB9O1xuICAgICAgLy8gYWRkIHZhbHVlcyB0byBiZSBkaXNwbGF5ZWQgaW4gdGhlIHN0YXRpYyBwaWNrIGxpc3RcbiAgICAgIGlmIChvYmouc3RhdGljUGljaykge1xuICAgICAgICBvYmouc3RhdGljTE9WID0gTjE5YmFzZUFwcGxldC5HZXRTdGF0aWNMT1YoY29udHJvbC5HZXRSYWRpb0dyb3VwUHJvcFNldCgpLmNoaWxkQXJyYXkpO1xuICAgICAgICBvYmoubG92cyA9IG9iai5zdGF0aWNMT1YucmVkdWNlKChhY2MsIGVsKSA9PiB7IC8vIG5vcm1hbGl6ZWRcbiAgICAgICAgICBhY2MucHVzaCh7IGxpYzogZWwuRmllbGRWYWx1ZSwgdmFsOiBlbC5EaXNwbGF5TmFtZSB9KTtcbiAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICB9LCBbXSk7XG4gICAgICB9XG4gICAgICBjb250cm9sc1tjb250cm9sTmFtZV0gPSBvYmo7XG4gICAgfVxuICAgIHJldHVybiBjb250cm9scztcbiAgfVxuXG4gIGdldFJlY29yZFNldChhZGRSZWNvcmRJbmRleCkge1xuICAgIGlmIChhZGRSZWNvcmRJbmRleCkge1xuICAgICAgcmV0dXJuIHRoaXMucG0uR2V0KCdHZXRSZWNvcmRTZXQnKS5tYXAoKGVsLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCByZXQgPSBPYmplY3QuYXNzaWduKHt9LCBlbCk7XG4gICAgICAgIHJldC5faW5keCA9IGluZGV4O1xuICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnBtLkdldCgnR2V0UmVjb3JkU2V0Jyk7XG4gIH1cblxuICBnZXRSYXdSZWNvcmRTZXQoYWRkUmVjb3JkSW5kZXgpIHtcbiAgICBpZiAoYWRkUmVjb3JkSW5kZXgpIHtcbiAgICAgIHJldHVybiB0aGlzLnBtLkdldCgnR2V0UmF3UmVjb3JkU2V0JykubWFwKChlbCwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgcmV0ID0gT2JqZWN0LmFzc2lnbih7fSwgZWwpO1xuICAgICAgICByZXQuX2luZHggPSBpbmRleDtcbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5wbS5HZXQoJ0dldFJhd1JlY29yZFNldCcpO1xuICB9XG5cbiAgZ2V0Um93TGlzdFJvd0NvdW50KCkge1xuICAgIC8vIGhvdyBtdWNoIGFwcGxldCBjYW4gZGlzcGxheSAoc3BlY2lmaWVkIGluIFNpZWJlbCBUb29scykgLSAxMC8yMFxuICAgIHJldHVybiB0aGlzLnBtLkdldCgnR2V0Um93TGlzdFJvd0NvdW50Jyk7XG4gIH1cblxuICBnZXROdW1Sb3dzKCkge1xuICAgIC8vIGN1cnJlbnRseSBmZXRjaGVkIGZyb20gc2VydmVyP1xuICAgIHJldHVybiB0aGlzLnBtLkdldCgnR2V0TnVtUm93cycpO1xuICB9XG5cbiAgZ2V0U2VsZWN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnBtLkdldCgnR2V0U2VsZWN0aW9uJyk7XG4gIH1cblxuICBfbmF2aWdhdGUobWV0aG9kKSB7XG4gICAgaWYgKCF0aGlzLmNhbkludm9rZU1ldGhvZChtZXRob2QpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IHJldCA9IHRoaXMucG0uRXhlY3V0ZU1ldGhvZCgnSW52b2tlTWV0aG9kJywgbWV0aG9kLCBudWxsLCBmYWxzZSk7XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIG5leHRSZWNvcmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hdmlnYXRlKHRoaXMuaXNMaXN0QXBwbGV0ID8gJ0dvdG9OZXh0JyA6ICdHb3RvTmV4dFNldCcpO1xuICB9XG5cbiAgbmV4dFJlY29yZFNldCgpIHtcbiAgICBpZiAoIXRoaXMuaXNMaXN0QXBwbGV0KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9uYXZpZ2F0ZSgnR290b05leHRTZXQnKTtcbiAgfVxuXG4gIHBvc2l0aW9uT25Sb3coaW5kZXgpIHtcbiAgICBpZiAodGhpcy5pc0xpc3RBcHBsZXQpIHtcbiAgICAgIGlmICghdGhpcy5wbS5FeGVjdXRlTWV0aG9kKCdDYW5JbnZva2VNZXRob2QnLCAnUG9zaXRpb25PblJvdycpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChpbmRleCA8IDApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgLy8gc2VlbXMgdGhpcyBjaGVjayBpcyByZWR1bmRhbnRcbiAgICAgIC8vIGlmICh0aGlzLmdldE51bVJvd3MoKSA8IGluZGV4ICsgMSkgeyAvL1xuICAgICAgLy8gICByZXR1cm4gZmFsc2U7XG4gICAgICAvLyB9XG4gICAgICBpZiAodGhpcy5nZXRSb3dMaXN0Um93Q291bnQoKSA8IGluZGV4ICsgMSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7aW5kZXh9IGlzIGVxdWFsL2hpZ2hlciB0aGFuIGFtb3VudCBvZiByZWNvcmRzIGluIHRoZSBhcHBsZXQgJHt0aGlzLmdldFJvd0xpc3RSb3dDb3VudCgpfWApO1xuICAgICAgfVxuICAgICAgLy8gdG9kbyA6IGlmIHdlIGdvdCB0byB0aGlzIHBvaW50XG4gICAgICAvLyAgc2hvdWxkIHdlIGNoZWNrIEdldEFjdGl2ZUNvbnRyb2wgKGFwcGxldC5wcm90b3R5cGUuSW52b2tlTWV0aG9kKVxuICAgICAgLy8gIGFuZCBudWxsaWZ5IGl0IGlmIGFjdGl2ZT9cbiAgICAgIHJldHVybiB0aGlzLnBtLkV4ZWN1dGVNZXRob2QoJ0hhbmRsZVJvd1NlbGVjdCcsIGluZGV4LCBmYWxzZSwgZmFsc2UpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwcmV2UmVjb3JkKCkge1xuICAgIGlmICh0aGlzLmlzTGlzdEFwcGxldCkge1xuICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb25PblJvdyh0aGlzLnBtLkdldCgnR2V0U2VsZWN0aW9uJykgLSAxKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX25hdmlnYXRlKCdHb3RvUHJldmlvdXNTZXQnKTtcbiAgfVxuXG4gIHByZXZSZWNvcmRTZXQoKSB7XG4gICAgaWYgKCF0aGlzLmlzTGlzdEFwcGxldCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fbmF2aWdhdGUoJ0dvdG9QcmV2aW91c1NldCcpO1xuICB9XG5cbiAgbmV3UmVjb3JkKGNiKSB7XG4gICAgLy8gdG9kbzogc2hvdWxkIGl0IGJlIHRoZSBzYW1lIGFzIFdyaXRlUmVjb3JkP1xuICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHRoaXMuX25ld1JlY29yZChyZXNvbHZlKSk7XG4gICAgcmV0dXJuIHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJyA/IHByb21pc2UudGhlbihjYikgOiBwcm9taXNlO1xuICB9XG5cbiAgX25ld1JlY29yZChjYikge1xuICAgIHJldHVybiB0aGlzLnBtLkV4ZWN1dGVNZXRob2QoJ0ludm9rZU1ldGhvZCcsICdOZXdSZWNvcmQnLCBudWxsLCB7XG4gICAgICBhc3luYzogdHJ1ZSxcbiAgICAgIGNiLFxuICAgIH0pO1xuICB9XG5cbiAgbmV3UmVjb3JkU3luYygpIHtcbiAgICByZXR1cm4gdGhpcy5wbS5FeGVjdXRlTWV0aG9kKCdJbnZva2VNZXRob2QnLCAnTmV3UmVjb3JkJywgbnVsbCwgZmFsc2UpO1xuICB9XG5cbiAgd3JpdGVSZWNvcmQoY2IsIGNiZXJyKSB7XG4gICAgbGV0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB0aGlzLl93cml0ZVJlY29yZCgoLi4uYXJncykgPT4ge1xuICAgICAgLy8gZG8gd2UgYWx3YXlzIGhhdmUgdGhyZWUgaW5wdXQgYXJndW1lbnRzLCBhbmQgdGhlIHRoaXJkIGFyZ3VtZW50IGlzXG4gICAgICBpZiAoYXJnc1syXS5HZXRQcm9wZXJ0eSgnU3RhdHVzJykgPT09ICdDb21wbGV0ZWQnKSB7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlamVjdCgpO1xuICAgICAgfVxuICAgIH0pKTtcbiAgICBwcm9taXNlID0gdHlwZW9mIGNiID09PSAnZnVuY3Rpb24nID8gcHJvbWlzZS50aGVuKGNiKSA6IHByb21pc2U7XG4gICAgcHJvbWlzZSA9IHR5cGVvZiBjYmVyciA9PT0gJ2Z1bmN0aW9uJyA/IHByb21pc2UuY2F0Y2goY2JlcnIpIDogcHJvbWlzZTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfVxuXG4gIF93cml0ZVJlY29yZChjYikge1xuICAgIHJldHVybiB0aGlzLnBtLkV4ZWN1dGVNZXRob2QoJ0ludm9rZU1ldGhvZCcsICdXcml0ZVJlY29yZCcsIG51bGwsIHtcbiAgICAgIGFzeW5jOiB0cnVlLFxuICAgICAgY2IsXG4gICAgfSk7XG4gIH1cblxuICB3cml0ZVJlY29yZFN5bmMoKSB7XG4gICAgcmV0dXJuIHRoaXMucG0uRXhlY3V0ZU1ldGhvZCgnSW52b2tlTWV0aG9kJywgJ1dyaXRlUmVjb3JkJywgbnVsbCwgZmFsc2UpO1xuICB9XG5cbiAgZGVsZXRlUmVjb3JkU3luYygpIHtcbiAgICByZXR1cm4gdGhpcy5wbS5FeGVjdXRlTWV0aG9kKCdJbnZva2VNZXRob2QnLCAnRGVsZXRlUmVjb3JkJywgbnVsbCwgZmFsc2UpO1xuICB9XG5cbiAgdW5kb1JlY29yZFN5bmMoKSB7XG4gICAgcmV0dXJuIHRoaXMucG0uRXhlY3V0ZU1ldGhvZCgnSW52b2tlTWV0aG9kJywgJ1VuZG9SZWNvcmQnLCBudWxsLCBmYWxzZSk7XG4gIH1cblxuICBzZXRDb250cm9sVmFsdWUobmFtZSwgdmFsdWUpIHtcbiAgICAvLyBUT0RPOiBJZiB2YWx1ZSBpcyBudWxsLCBub3RoaW5nIGhhcHBlbnMsIHNob3VsZCB3ZSBjb252ZXJ0IG51bGwgdG8gJyc/XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuX2dldENvbnRyb2wobmFtZSk7XG4gICAgLy8gVE9ETzogQ2hlY2sgaWYgY29udHJvbCBpcyBmb3VuZFxuICAgIHZhbHVlID0gdGhpcy5fZ2V0VmFsdWVGb3JDb250cm9sKGNvbnRyb2wuR2V0VUlUeXBlKCksIHZhbHVlKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIC8vIG1heWJlIGNoZWNrIGlmIHR5cGVvZiBhcHBsZXQuU2V0Q29udHJvbFZhbHVlQnlOYW1lIGlzIGZ1bmN0aW9uIGFuZCB1c2UgaXQgd2hlbiBhdmFpbGFibGU/IC0gbm90IGV4aXN0cyBpbiAxNC54XG4gICAgLy8gVE9ETzogc2hvdWxkIHdlIHVzZSBTZXRDZWxsVmFsdWUgZm9yIGxpc3QgYXBwbGV0cz9cbiAgICB0aGlzLnBtLk9uQ29udHJvbEV2ZW50KHRoaXMuY29uc3RzLmdldCgnUEhZRVZFTlRfQ09OVFJPTF9GT0NVUycpLCBjb250cm9sKTtcbiAgICBjb25zdCByZXQgPSB0aGlzLnBtLk9uQ29udHJvbEV2ZW50KHRoaXMuY29uc3RzLmdldCgnUEhZRVZFTlRfQ09OVFJPTF9CTFVSJyksIGNvbnRyb2wsIHZhbHVlKTtcbiAgICBpZiAoIXJldCkge1xuICAgICAgY29uc29sZS5sb2coYFZhbHVlICR7dmFsdWV9IHdhcyBub3Qgc2V0IGZvciAke2NvbnRyb2wuR2V0TmFtZSgpfWApOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIF92YWxpZGF0ZVBpY2tDb250cm9sKGNvbnRyb2wsIGlzU3RhdGljKSB7XG4gICAgLy8gUG9zc2libGUgcmVzdWx0czpcbiAgICAvLyBubyBwaWNrXG4gICAgLy8gc3RhdGljIHBpY2tcbiAgICAvLyBkeW5hbWljIHBpY2tcbiAgICAvLyBwaWNrXG4gICAgLy8gbXZnXG4gICAgLy8gP1xuXG4gICAgY29uc3QgaXNTdGF0aWNQaWNrID0gJzEnID09PSBjb250cm9sLklzU3RhdGljQm91bmRlZCgpO1xuICAgIGNvbnN0IHVpVHlwZSA9IGNvbnRyb2wuR2V0VUlUeXBlKCk7XG5cbiAgICBpZiAoaXNTdGF0aWMpIHsgLy8gY2FsbGVkIGdldFN0YXRpY0xPVlxuICAgICAgLy9cbiAgICAgIGlmICghaXNTdGF0aWNQaWNrKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihgW04xOV1UaGUgZ2V0U3RhdGljTE9WIGNhbGxlZCBmb3Igbm90IHN0YXRpYyBjb250cm9sIC0gJHt1aVR5cGV9LiBVc2UgZ2V0RHluYW1pY0xPViBvciBwaWNrL212Z2ApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7IC8vIGNhbGxlZCBnZXREeW5hbWljTE9WXG4gICAgICBpZiAoaXNTdGF0aWNQaWNrKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignW04xOV1UaGUgZ2V0RHluYW1pY0xPViBjYWxsZWQgZm9yIHN0YXRpYyBjb250cm9sLicpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuY29uc3RzLmdldCgnU1dFX0NUUkxfQ09NQk9CT1gnKSAhPT0gdWlUeXBlKSB7IC8vIHRoZSBjb250cm9sIGlzIG5vdCBcIkpDb21ib0JveFwiXG4gICAgICAgIHN3aXRjaCAodWlUeXBlKSB7XG4gICAgICAgICAgY2FzZSB0aGlzLmNvbnN0cy5nZXQoJ1NXRV9DVFJMX1BJQ0snKTogLy8gUGlja1xuICAgICAgICAgIGNhc2UgdGhpcy5jb25zdHMuZ2V0KCdTV0VfQ1RSTF9NVkcnKTogLy8gTVZHXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYFtOMTldWW91IG5lZWQgdG8gdXNlIHRoZSBwb3B1cHMgaW5zdGVhZCBvZiBnZXREeW5hbWljTE9WIC0gJHt1aVR5cGV9LmApO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgW04xOV1Qcm9iYWJseSBnZXREeW5hbWljTE9WIGlzIG5vdCBnb2luZyB0byB3b3JrIGZvciB0aGlzIGNvbnRyb2wgLSAke3VpVHlwZX0uYCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXREeW5hbWljTE9WKGNvbnRyb2xOYW1lKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuX2dldENvbnRyb2woY29udHJvbE5hbWUpO1xuICAgIHRoaXMuX3ZhbGlkYXRlUGlja0NvbnRyb2woY29udHJvbCwgZmFsc2UpO1xuICAgIGNvbnN0IGNvbnRyb2xJbnB1dE5hbWUgPSBjb250cm9sLkdldElucHV0TmFtZSgpO1xuICAgIHRoaXMubG92W2NvbnRyb2xJbnB1dE5hbWVdID0ge307XG4gICAgY29uc3QgcHMgPSBTaWViZWxBcHAuU19BcHAuTmV3UHJvcGVydHlTZXQoKTtcbiAgICBwcy5TZXRQcm9wZXJ0eSgnU1dFRmllbGQnLCBjb250cm9sSW5wdXROYW1lKTtcbiAgICBwcy5TZXRQcm9wZXJ0eSgnU1dFSkknLCBmYWxzZSk7XG4gICAgdGhpcy5fc2V0QWN0aXZlQ29udHJvbChudWxsKTsgLy8gdG8gcHJldmVudCBVcGRhdGVQaWNrXG4gICAgdGhpcy5wbS5FeGVjdXRlTWV0aG9kKCdJbnZva2VNZXRob2QnLCAnR2V0UXVpY2tQaWNrSW5mbycsIHBzKTtcbiAgICByZXR1cm4gdGhpcy5sb3ZbY29udHJvbElucHV0TmFtZV07XG4gIH1cblxuICBnZXRTdGF0aWNMT1YoY29udHJvbE5hbWUpIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5fZ2V0Q29udHJvbChjb250cm9sTmFtZSk7XG4gICAgdGhpcy5fdmFsaWRhdGVQaWNrQ29udHJvbChjb250cm9sLCB0cnVlKTtcbiAgICBjb25zdCByZXQgPSBbXTtcbiAgICBjb25zdCBhcnIgPSBOMTliYXNlQXBwbGV0LkdldFN0YXRpY0xPVihjb250cm9sLkdldFJhZGlvR3JvdXBQcm9wU2V0KCkuY2hpbGRBcnJheSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIHJldC5wdXNoKGFycltpXS5EaXNwbGF5TmFtZSk7XG4gICAgfVxuICAgIHJldHVybiByZXQuc29ydCgpO1xuICB9XG5cbiAgX2dldENvbnRyb2xWYWx1ZShjb250cm9sVWlUeXBlLCB2YWx1ZSkge1xuICAgIC8vIHRvZG86IHdoYXQgYWJvdXQgZGF0ZXRpbWU/XG4gICAgaWYgKHRoaXMuY29uc3RzLmdldCgnU1dFX0NUUkxfQ0hFQ0tCT1gnKSA9PT0gY29udHJvbFVpVHlwZSkge1xuICAgICAgLy8gY29udmVydCBZL04vbnVsbCAtPiB0cnVlL2ZhbHNlIC8vIHdoYXQgYWJvdXQgbnVsbFxuICAgICAgdGhpcy5ib29sT2JqZWN0LlNldEFzU3RyaW5nKHZhbHVlKTtcbiAgICAgIHJldHVybiB0aGlzLmJvb2xPYmplY3QuR2V0VmFsdWUoKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgLy8gdGhpcyBpcyBhIHRlbXAgbWV0aG9kIHRvIHN1cHBvcnQgdGhlIGRlbW8gd2hlcmVcbiAgLy8gU2llYmVsIGFuZCBjdXN0b20gcmVuZGVyZWQgYXBwbGV0IGNvZXhpc3RcbiAgX2dldEZpZWxkVG9Db250cm9sTWFwKF9jb250cm9scykge1xuICAgIGNvbnN0IHJldCA9IHt9O1xuICAgIGNvbnN0IGFwcGxldENvbnRyb2xzID0gdGhpcy5fcmV0dXJuQ29udHJvbHMoKTtcbiAgICBjb25zdCBhcnIgPSBPYmplY3Qua2V5cyhfY29udHJvbHMpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBjb250cm9sID0gYXBwbGV0Q29udHJvbHNbYXJyW2ldXTtcbiAgICAgIHJldFtjb250cm9sLkdldEZpZWxkTmFtZSgpXSA9IHtcbiAgICAgICAgbmFtZTogY29udHJvbC5HZXROYW1lKCksXG4gICAgICAgIGlzUG9zdENoYW5nZXM6IGNvbnRyb2wuSXNQb3N0Q2hhbmdlcygpLFxuICAgICAgICB1aVR5cGU6IGNvbnRyb2wuR2V0VUlUeXBlKCksXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgZ2V0Q3VycmVudFJlY29yZChyYXcpIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuZ2V0U2VsZWN0aW9uKCk7XG4gICAgLy8gdG9kbzogY2hlY2sgaWYgcmVjb3JkXG4gICAgLy8gdG9kbzogbWFrZSBhIGNvcHkgb2YgcmV0dXJuZWQgb2JqZWN0ICh0byBhdm9pZCB0aGUgYWNjaWRlbnRhbCBtb2RpZmljYXRpb24gb2YgdGhlIHJlY29yZHNldClcbiAgICBpZiAocmF3KSB7XG4gICAgICByZXR1cm4gdGhpcy5wbS5HZXQoJ0dldFJhd1JlY29yZFNldCcpW2luZGV4XTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucG0uR2V0KCdHZXRSZWNvcmRTZXQnKVtpbmRleF07XG4gIH1cblxuICBjYWxjdWxhdGVDdXJyZW50UmVjb3JkU3RhdGUoKSB7XG4gICAgLy8gdG9kbzogZG8gd2UgbmVlZCB0byBkZWxldGUgcGVuZGluZ1xuICAgIC8vIDAgLSBObyByZWNvcmRzIGRpc3BsYXllZFxuICAgIC8vIDEgLSBSZWNvcmQgaXMgYmVpbmcgY3JlYXRlZFxuICAgIC8vIDIgLSBSZWNvcmQgaXMgYmVpbmcgZWRpdGVkXG4gICAgLy8gMyAtIElzIGluIHF1ZXJ5IG1vZGVcbiAgICAvLyA0IC0gUmVjb3JkIGlzIGRpc3BsYXllZCxcbiAgICAvLyA1IC0gUmVjb3JkIGlzIHJlYWQtb25seVxuXG4gICAgY29uc3QgYmMgPSB0aGlzLnBtLkdldCgnR2V0QnVzQ29tcCcpO1xuXG4gICAgaWYgKHRoaXMucG0uR2V0KCdJc0luUXVlcnlNb2RlJykpIHtcbiAgICAgIC8vIGlmIG5vIHJlY29yZHMgYW5kIHRoZSBlbnRlcmVkIHRoZSBxdWVyeSBtb2RlLFxuICAgICAgLy8gc2VsZWN0aW9uIGlzIC0xLCB0aGVyZWZvcmUgd2UgbmVlZCB0byBjaGVjayBxdWVyeSBtb2RlIGZpcnN0XG4gICAgICByZXR1cm4gMztcbiAgICB9XG4gICAgaWYgKHRoaXMuZ2V0U2VsZWN0aW9uKCkgPCAwKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgaWYgKGJjLklzSW5zZXJ0UGVuZGluZygpKSB7IC8vIHNlZW1zIGluc2VydFBlbmRpbmcgZ2l2ZXMgbW9yZSBjb3JyZWN0IHZhbHVlXG4gICAgICByZXR1cm4gMTtcbiAgICB9XG4gICAgaWYgKGJjLklzQ29tbWl0UGVuZGluZygpKSB7XG4gICAgICByZXR1cm4gMjtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmNhbkludm9rZU1ldGhvZCgnV3JpdGVSZWNvcmQnKSkge1xuICAgICAgLy8gb3IgbWF5YmUgYmV0dGVyIHRvIHVzZSB0aGUgY2FuVXBkYXRlIHByb3BlcnR5IG9mIHRoZSBiY1xuICAgICAgcmV0dXJuIDU7XG4gICAgfVxuXG4gICAgcmV0dXJuIDQ7IC8vIHRoaXMgaXMgYSBkZWZhdWx0IGZhbGxiYWNrO1xuICB9XG5cbiAgX2dldE1ldGhvZHMoKSB7XG4gICAgY29uc3QgbWV0aG9kcyA9IHt9O1xuICAgIGNvbnN0IGFwcGxldENvbnRyb2xzID0gdGhpcy5wbS5HZXQoJ0dldENvbnRyb2xzJyk7IC8vIGV2ZW4gZm8gbGlzdCBhcHBsZXRcbiAgICBjb25zdCBhcnIgPSBPYmplY3Qua2V5cyhhcHBsZXRDb250cm9scyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGNvbnRyb2xNZXRob2QgPSBhcHBsZXRDb250cm9sc1thcnJbaV1dLkdldE1ldGhvZE5hbWUoKTtcbiAgICAgIGlmICh0eXBlb2YgY29udHJvbE1ldGhvZCAhPT0gJ3VuZGVmaW5lZCcgJiYgY29udHJvbE1ldGhvZCAhPT0gJycpIHtcbiAgICAgICAgbWV0aG9kc1tjb250cm9sTWV0aG9kXSA9IHt9O1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWV0aG9kcztcbiAgfVxuXG4gIGdldEN1cnJlbnRSZWNvcmRNb2RlbChfY29udHJvbHMsIF9tZXRob2RzKSB7XG4gICAgaWYgKCFfY29udHJvbHMpIHtcbiAgICAgIF9jb250cm9scyA9IHRoaXMuZ2V0Q29udHJvbHMoKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIH1cbiAgICBpZiAoIV9tZXRob2RzKSB7XG4gICAgICBfbWV0aG9kcyA9IHRoaXMuX2dldE1ldGhvZHMoKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIH1cbiAgICBfY29udHJvbHMuc3RhdGUgPSB0aGlzLmNhbGN1bGF0ZUN1cnJlbnRSZWNvcmRTdGF0ZSgpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgX2NvbnRyb2xzLmlkID0gJyc7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBsZXQgb2JqID0ge307XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmdldFNlbGVjdGlvbigpO1xuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICBvYmogPSB0aGlzLmdldFJlY29yZFNldCgpW2luZGV4XTtcbiAgICAgIF9jb250cm9scy5pZCA9IHRoaXMuZ2V0UmF3UmVjb3JkU2V0KClbaW5kZXhdLklkOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgfVxuICAgIGxldCBhcnIgPSBPYmplY3Qua2V5cyhfY29udHJvbHMpO1xuICAgIGNvbnN0IGFwcGxldENvbnRyb2xzID0gdGhpcy5fcmV0dXJuQ29udHJvbHMoKTtcbiAgICAvLyBwb3B1bGF0ZSBjb250cm9sc1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBjb250cm9sID0gYXBwbGV0Q29udHJvbHNbYXJyW2ldXTtcbiAgICAgIGlmICh0eXBlb2YgY29udHJvbCAhPT0gJ3VuZGVmaW5lZCcpIHsgLy8ganVzdCBpZiBzb21lYm9keSBzZW5kcyBpbmNvcnJlY3QgbmFtZSBvZiB0aGUgY29udHJvbFxuICAgICAgICBjb25zdCBjb250cm9sTmFtZSA9IGNvbnRyb2wuR2V0TmFtZSgpO1xuICAgICAgICBjb25zdCBmaWVsZE5hbWUgPSBjb250cm9sLkdldEZpZWxkTmFtZSgpO1xuICAgICAgICBpZiAoX2NvbnRyb2xzLnN0YXRlID4gMCkge1xuICAgICAgICAgIF9jb250cm9sc1thcnJbaV1dID0geyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICAgICAgICB2YWx1ZTogdGhpcy5fZ2V0Q29udHJvbFZhbHVlKGNvbnRyb2wuR2V0VUlUeXBlKCksIG9ialtmaWVsZE5hbWVdKSxcbiAgICAgICAgICAgIHJlYWRvbmx5OiAhdGhpcy5wbS5FeGVjdXRlTWV0aG9kKCdDYW5VcGRhdGUnLCBjb250cm9sTmFtZSksXG4gICAgICAgICAgICBpc0xpbms6IHRoaXMucG0uRXhlY3V0ZU1ldGhvZCgnQ2FuTmF2aWdhdGUnLCBjb250cm9sTmFtZSksXG4gICAgICAgICAgICBsYWJlbDogY29udHJvbC5HZXREaXNwbGF5TmFtZSgpLFxuICAgICAgICAgICAgaXNQb3N0Q2hhbmdlczogY29udHJvbC5Jc1Bvc3RDaGFuZ2VzKCksXG4gICAgICAgICAgICByZXF1aXJlZDogdGhpcy5faXNSZXF1aXJlZChjb250cm9sLkdldElucHV0TmFtZSgpKSxcbiAgICAgICAgICAgIG1heFNpemU6IGNvbnRyb2wuR2V0TWF4U2l6ZSgpLFxuICAgICAgICAgICAgZmllbGROYW1lLFxuICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7IC8vIG5vIHJlY29yZCBkaXNwbGF5ZWRcbiAgICAgICAgICBfY29udHJvbHNbYXJyW2ldXSA9IHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICAgICAgdmFsdWU6ICcnLFxuICAgICAgICAgICAgcmVhZG9ubHk6IHRydWUsXG4gICAgICAgICAgICBpc0xpbms6IGZhbHNlLFxuICAgICAgICAgICAgbGFiZWw6IGNvbnRyb2wuR2V0RGlzcGxheU5hbWUoKSxcbiAgICAgICAgICAgIGlzUG9zdENoYW5nZXM6IGNvbnRyb2wuSXNQb3N0Q2hhbmdlcygpLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRoaXMuX2lzUmVxdWlyZWQoY29udHJvbC5HZXRJbnB1dE5hbWUoKSksXG4gICAgICAgICAgICBtYXhTaXplOiBjb250cm9sLkdldE1heFNpemUoKSxcbiAgICAgICAgICAgIGZpZWxkTmFtZSxcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC8vIHBvcHVsYXRlIG1ldGhvZHNcbiAgICBpZiAoX21ldGhvZHMpIHtcbiAgICAgIGFyciA9IE9iamVjdC5rZXlzKF9tZXRob2RzKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIF9tZXRob2RzW2FycltpXV0gPSB0aGlzLmNhbkludm9rZU1ldGhvZChhcnJbaV0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICB9XG4gICAgfVxuICAgIC8vIHJldHVybiB0cnVlO1xuICAgIHJldHVybiB7XG4gICAgICBjb250cm9sczogX2NvbnRyb2xzLFxuICAgICAgbWV0aG9kczogX21ldGhvZHMsXG4gICAgfTtcbiAgfVxuXG4gIF9nZXRDb250cm9sSW5wdXROYW1lRm9ySWRRdWVyeSgpIHtcbiAgICBjb25zdCBhcHBsZXRDb250cm9scyA9IHRoaXMuX3JldHVybkNvbnRyb2xzKCk7XG4gICAgY29uc3QgYXJyID0gT2JqZWN0LmtleXMoYXBwbGV0Q29udHJvbHMpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBjb250cm9sID0gYXBwbGV0Q29udHJvbHNbYXJyW2ldXTtcbiAgICAgIGNvbnN0IGNvbnRyb2xVaVR5cGUgPSBjb250cm9sLkdldFVJVHlwZSgpO1xuICAgICAgaWYgKCF0aGlzLl9pc1NraXBDb250cm9sKGNvbnRyb2xVaVR5cGUpKSB7XG4gICAgICAgIC8vIHNraXBwaW5nIGFsc28gSkNoZWNrYm94XG4gICAgICAgIC8vIHRvZG86IGNoZWNrIGRvIHdlIG5lZWQgdG8gc2tpcCBhbHNvIGRhdGU/XG4gICAgICAgIGlmIChjb250cm9sVWlUeXBlICE9PSB0aGlzLmNvbnN0cy5nZXQoJ1NXRV9DVFJMX0NIRUNLQk9YJykpIHtcbiAgICAgICAgICByZXR1cm4gY29udHJvbC5HZXRJbnB1dE5hbWUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2Nhbm5vdCBmaW5kIGEgY29udHJvbCBmb3IgcXVlcnknKTtcbiAgfVxuXG4gIF9uZXdRdWVyeSgpIHtcbiAgICByZXR1cm4gdGhpcy5wbS5FeGVjdXRlTWV0aG9kKCdJbnZva2VNZXRob2QnLCAnTmV3UXVlcnknLCBudWxsLCBmYWxzZSk7XG4gIH1cblxuICBxdWVyeUJ5U2VhcmNoRXhwclN5bmMoZXhwcikge1xuICAgIHRoaXMucG0uRXhlY3V0ZU1ldGhvZCgnSW52b2tlTWV0aG9kJywgJ05ld1F1ZXJ5Jyk7XG4gICAgdGhpcy5hcHBsZXQuR2V0QnVzQ29tcCgpLlNldEZpZWxkVmFsdWUoJ0lkJywgZXhwcik7XG4gICAgdGhpcy5wbS5FeGVjdXRlTWV0aG9kKCdJbnZva2VNZXRob2QnLCAnRXhlY3V0ZVF1ZXJ5Jyk7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UmVjb3JkU2V0KCkubGVuZ3RoO1xuICB9XG5cbiAgcXVlcnlCeUlkU3luYyhyb3dJZCkge1xuICAgIGxldCBleHByID0gcm93SWQ7XG4gICAgaWYgKEFycmF5ID09PSByb3dJZC5jb25zdHJ1Y3Rvcikge1xuICAgICAgZXhwciA9IHJvd0lkLm1hcChlbCA9PiBgSWQ9XCIke2VsfVwiYCkuam9pbignIE9SICcpO1xuICAgICAgY29uc29sZS5sb2coZXhwcik7XG4gICAgfVxuXG4gICAgdGhpcy5wbS5FeGVjdXRlTWV0aG9kKCdJbnZva2VNZXRob2QnLCAnTmV3UXVlcnknKTtcbiAgICB0aGlzLmFwcGxldC5HZXRCdXNDb21wKCkuU2V0RmllbGRWYWx1ZSgnSWQnLCBleHByKTtcbiAgICB0aGlzLnBtLkV4ZWN1dGVNZXRob2QoJ0ludm9rZU1ldGhvZCcsICdFeGVjdXRlUXVlcnknKTtcbiAgICByZXR1cm4gdGhpcy5nZXRSZWNvcmRTZXQoKS5sZW5ndGg7XG4gIH1cblxuICBxdWVyeUJ5SWQocm93SWQsIGNiKSB7XG4gICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gdGhpcy5fcXVlcnlCeUlkKHJvd0lkLCByZXNvbHZlKSk7XG4gICAgY29uc3QgcmV0ID0gcHJvbWlzZS50aGVuKCgpID0+IHRoaXMuZ2V0UmVjb3JkU2V0KCkubGVuZ3RoKTtcbiAgICByZXR1cm4gdHlwZW9mIGNiID09PSAnZnVuY3Rpb24nID8gcmV0LnRoZW4oY2IpIDogcmV0O1xuICB9XG5cbiAgX3F1ZXJ5QnlJZChyb3dJZCwgY2IpIHtcbiAgICAvLyBtYXliZSBjaGVjayBpZiBpdCBpcyBhbHJlYWR5IGluIHF1ZXJ5IG1vZGUgLyBjYW5jZWwgdGhlIHF1ZXJ5XG4gICAgdGhpcy5fbmV3UXVlcnkoKTtcblxuICAgIGNvbnN0IG1ldGhvZCA9ICdFeGVjdXRlUXVlcnknO1xuICAgIGNvbnN0IGFpID0ge1xuICAgICAgc2NvcGU6IHRoaXMsXG4gICAgICBhc3luYzogdHJ1ZSxcbiAgICAgIG1hc2s6IGZhbHNlLFxuICAgICAgc2VsZmJ1c3k6IGZhbHNlLFxuICAgICAgYXJnczogW10sXG4gICAgfTtcbiAgICBpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBhaS5jYiA9IGNiO1xuICAgIH1cblxuICAgIGNvbnN0IHBzT3V0cHV0ID0gU2llYmVsQXBwLlNfQXBwLk5ld1Byb3BlcnR5U2V0KCk7XG4gICAgY29uc3QgcHNJbnB1dCA9IFNpZWJlbEFwcC5TX0FwcC5OZXdQcm9wZXJ0eVNldCgpO1xuICAgIHBzSW5wdXQuU2V0UHJvcGVydHkodGhpcy5fZ2V0Q29udHJvbElucHV0TmFtZUZvcklkUXVlcnkoKSwgYElkPVwiJHtyb3dJZH1cImApO1xuXG4gICAgYWkuYXJncy5wdXNoKG1ldGhvZCk7XG4gICAgYWkuYXJncy5wdXNoKHBzSW5wdXQuQ2xvbmUoKSk7XG5cbiAgICByZXR1cm4gdGhpcy5hcHBsZXQuQ2FsbFNlcnZlckFwcGxldChtZXRob2QsIHBzSW5wdXQsIHBzT3V0cHV0LCBhaSk7XG4gIH1cblxuICBxdWVyeShwYXJhbXMsIGNiKSB7XG4gICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gdGhpcy5fcXVlcnkocGFyYW1zLCByZXNvbHZlKSk7XG4gICAgY29uc3QgcmV0ID0gcHJvbWlzZS50aGVuKCgpID0+IHRoaXMuZ2V0UmVjb3JkU2V0KCkubGVuZ3RoKTtcbiAgICByZXR1cm4gdHlwZW9mIGNiID09PSAnZnVuY3Rpb24nID8gcmV0LnRoZW4oY2IpIDogcmV0O1xuICB9XG5cbiAgX3F1ZXJ5KHBhcmFtcywgY2IpIHtcbiAgICAvLyBUT0RPOiBjaGVjayBpZiBpdCBpcyBhbHJlYWR5IGluIHF1ZXJ5IG1vZGUgdG8gYXZvaWQgY2FsbGluZyB0aGUgbmV3IHF1ZXJ5IGFnYWluXG4gICAgLy8gb3IgbWF5YmUgYmV0dGVyIHRvIGNhbmNlbCB0aGUgZXhpc3RpbmcgcXVlcnk/XG4gICAgdGhpcy5fbmV3UXVlcnkoKTtcblxuICAgIGNvbnN0IG1ldGhvZCA9ICdFeGVjdXRlUXVlcnknO1xuICAgIGNvbnN0IGFpID0ge1xuICAgICAgc2NvcGU6IHRoaXMsXG4gICAgICBhc3luYzogdHJ1ZSxcbiAgICAgIG1hc2s6IGZhbHNlLFxuICAgICAgc2VsZmJ1c3k6IGZhbHNlLFxuICAgICAgYXJnczogW10sXG4gICAgfTtcbiAgICBpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBhaS5jYiA9IGNiO1xuICAgIH1cblxuICAgIGNvbnN0IHBzT3V0cHV0ID0gU2llYmVsQXBwLlNfQXBwLk5ld1Byb3BlcnR5U2V0KCk7XG4gICAgY29uc3QgcHNJbnB1dCA9IFNpZWJlbEFwcC5TX0FwcC5OZXdQcm9wZXJ0eVNldCgpO1xuICAgIGNvbnN0IGFyciA9IE9iamVjdC5rZXlzKHBhcmFtcyk7XG4gICAgY29uc3QgX2NvbnRyb2xzID0gdGhpcy5fcmV0dXJuQ29udHJvbHMoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgY29udHJvbCA9IF9jb250cm9sc1thcnJbaV1dO1xuICAgICAgcHNJbnB1dC5TZXRQcm9wZXJ0eShjb250cm9sLkdldElucHV0TmFtZSgpLCB0aGlzLl9nZXRWYWx1ZUZvckNvbnRyb2woY29udHJvbC5HZXRVSVR5cGUoKSwgcGFyYW1zW2FycltpXV0pKTtcbiAgICB9XG4gICAgYWkuYXJncy5wdXNoKG1ldGhvZCk7XG4gICAgYWkuYXJncy5wdXNoKHBzSW5wdXQuQ2xvbmUoKSk7XG5cbiAgICByZXR1cm4gdGhpcy5hcHBsZXQuQ2FsbFNlcnZlckFwcGxldChtZXRob2QsIHBzSW5wdXQsIHBzT3V0cHV0LCBhaSk7XG4gIH1cblxuICBzdGF0aWMgUmVxdWVyeShuYW1lKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IFNpZWJlbEFwcC5TX0FwcC5HZXRTZXJ2aWNlKCdOMTkgQlMnKTtcbiAgICBpZiAoc2VydmljZSkge1xuICAgICAgY29uc3QgaW5Qcm9wU2V0ID0gU2llYmVsQXBwLlNfQXBwLk5ld1Byb3BlcnR5U2V0KCk7XG4gICAgICBpblByb3BTZXQuU2V0UHJvcGVydHkoJ25hbWUnLCBuYW1lKTtcbiAgICAgIHNlcnZpY2UuSW52b2tlTWV0aG9kKCdSZXF1ZXJ5JywgaW5Qcm9wU2V0LCB7fSk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIFJlZnJlc2gobmFtZSkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSBTaWViZWxBcHAuU19BcHAuR2V0U2VydmljZSgnTjE5IEJTJyk7XG4gICAgaWYgKHNlcnZpY2UpIHtcbiAgICAgIGNvbnN0IGluUHJvcFNldCA9IFNpZWJlbEFwcC5TX0FwcC5OZXdQcm9wZXJ0eVNldCgpO1xuICAgICAgaW5Qcm9wU2V0LlNldFByb3BlcnR5KCduYW1lJywgbmFtZSk7XG4gICAgICBzZXJ2aWNlLkludm9rZU1ldGhvZCgnUmVmcmVzaCcsIGluUHJvcFNldCwge30pO1xuICAgIH1cbiAgfVxuXG4gIGdldE1WRihpZHMsIGZpZWxkcywgdXNlQWN0aXZlQk8pIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4gdGhpcy5fZ2V0TVZGKGlkcywgZmllbGRzLCB1c2VBY3RpdmVCTywgcmVzb2x2ZSwgcmVqZWN0KSk7XG4gIH1cblxuICBfZ2V0RmllbGROYW1lRm9yQ29udHJvbChjb250cm9sTmFtZSkge1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLl9nZXRDb250cm9sKGNvbnRyb2xOYW1lKTtcbiAgICAvLyBpZiBub3QgZm91bmQsIHRoZSBpbnB1dCB2YWx1ZSBpcyByZXR1cm5lZFxuICAgIGlmIChjb250cm9sKSB7XG4gICAgICByZXR1cm4gY29udHJvbC5HZXRGaWVsZE5hbWUoKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbnRyb2xOYW1lO1xuICB9XG5cbiAgX2dldE1WRihpZHMsIGZpZWxkcywgdXNlQWN0aXZlQk8sIHJlc29sdmUsIHJlamVjdCkge1xuICAgIGNvbnN0IGFyciA9IE9iamVjdC5lbnRyaWVzKGZpZWxkcyk7XG4gICAgY29uc3QgcHNJbnB1dHMgPSBTaWViZWxBcHAuU19BcHAuTmV3UHJvcGVydHlTZXQoKTtcbiAgICBwc0lucHV0cy5TZXRQcm9wZXJ0eSgnQk8nLCBTaWViZWxBcHAuU19BcHAuR2V0QWN0aXZlQnVzT2JqKCkuR2V0TmFtZSgpKTtcbiAgICBwc0lucHV0cy5TZXRQcm9wZXJ0eSgnQkMnLCB0aGlzLnBtLkdldCgnR2V0QnVzQ29tcCcpLkdldE5hbWUoKSk7XG4gICAgcHNJbnB1dHMuU2V0UHJvcGVydHkoJ1VzZUFjdGl2ZUJPJywgdXNlQWN0aXZlQk8gPyAnWScgOiAnTicpO1xuICAgIHBzSW5wdXRzLlNldFByb3BlcnR5KCdJRCcsIGlkcy5qb2luKCcsJykpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBwcyA9IFNpZWJlbEFwcC5TX0FwcC5OZXdQcm9wZXJ0eVNldCgpO1xuICAgICAgcHMuU2V0VHlwZSh0aGlzLl9nZXRGaWVsZE5hbWVGb3JDb250cm9sKGFycltpXVswXSkpO1xuICAgICAgcHMuU2V0UHJvcGVydHkoJ0ZpZWxkcycsIGFycltpXVsxXS5qb2luKCcsJykpO1xuICAgICAgcHNJbnB1dHMuQWRkQ2hpbGQocHMuQ2xvbmUoKSk7XG4gICAgfVxuICAgIGNvbnN0IGJzID0gU2llYmVsQXBwLlNfQXBwLkdldFNlcnZpY2UoJ04xOSBCUycpO1xuICAgIGNvbnN0IGFpID0ge1xuICAgICAgYXN5bmM6IHRydWUsXG4gICAgICBzZWxmYnVzeTogdHJ1ZSxcbiAgICAgIHNjb3BlOiB0aGlzLFxuICAgICAgZXJyY2I6ICgpID0+IHJlamVjdCgpLFxuICAgICAgY2I6IChtZXRob2ROYW1lLCBJbnB1dHMsIHBzT3V0cHV0cykgPT4ge1xuICAgICAgICBjb25zdCB7IGNoaWxkQXJyYXkgfSA9IHBzT3V0cHV0cy5HZXRDaGlsZEJ5VHlwZSgnUmVzdWx0U2V0JykgfHwge307IC8vIHRvIGJlIHByb3RlY3RlZGQgd2hlbiBubyByZXN1bHRzXG4gICAgICAgIGNvbnN0IHJldCA9IHt9O1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IChjaGlsZEFycmF5IHx8IFtdKS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIHJldFtjaGlsZEFycmF5W2ldLkdldFR5cGUoKV0gPSB7fTtcbiAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNoaWxkQXJyYXlbaV0uY2hpbGRBcnJheS5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICAgICAgY29uc3QgZWwgPSBjaGlsZEFycmF5W2ldLmNoaWxkQXJyYXlbal07XG4gICAgICAgICAgICByZXRbY2hpbGRBcnJheVtpXS5HZXRUeXBlKCldW2VsLkdldFR5cGUoKV0gPSBlbC5jaGlsZEFycmF5Lm1hcCgocmVjKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHByaW1hcnkgPSByZWMucHJvcEFycmF5WydTU0EgUHJpbWFyeSBGaWVsZCddO1xuICAgICAgICAgICAgICB0aGlzLmJvb2xPYmplY3QuU2V0QXNTdHJpbmcocHJpbWFyeSk7XG4gICAgICAgICAgICAgIHJlYy5wcm9wQXJyYXlbJ1NTQSBQcmltYXJ5IEZpZWxkJ10gPSB0aGlzLmJvb2xPYmplY3QuR2V0VmFsdWUoKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgcmVjLnByb3BBcnJheSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzb2x2ZShyZXQpO1xuICAgICAgfSxcbiAgICB9O1xuICAgIHJldHVybiBicy5JbnZva2VNZXRob2QoJ1JldHVybk1WR0ZpZWxkcycsIHBzSW5wdXRzLCBhaSk7XG4gIH1cblxuICBzYXZlUHJlZihuYW1lLCB2YWx1ZSkge1xuICAgIC8vIHZhbHVlIGlzIGEgc3RyaW5nXG4gICAgLy8gdmFsdWUgaXMgYm91bmQgdG8gYXBwbGV0IGFuZCB2aWV3XG4gICAgY29uc3QgcHNJbnB1dCA9IFNpZWJlbEFwcC5TX0FwcC5OZXdQcm9wZXJ0eVNldCgpO1xuICAgIHBzSW5wdXQuU2V0UHJvcGVydHkoJ0tleScsIG5hbWUpO1xuICAgIHBzSW5wdXQuU2V0UHJvcGVydHkobmFtZSwgdmFsdWUpO1xuICAgIHRoaXMucG0uT25Db250cm9sRXZlbnQoXG4gICAgICB0aGlzLmNvbnN0cy5nZXQoJ1BIWUVWRU5UX0lOVk9LRV9DT05UUk9MJyksXG4gICAgICB0aGlzLnBtLkdldCh0aGlzLmNvbnN0cy5nZXQoJ1NXRV9NVEhEX1VQREFURV9VU0VSX1BSRUYnKSksXG4gICAgICBwc0lucHV0LFxuICAgICk7XG4gICAgcmV0dXJuIHRoaXMucG0uU2V0UHJvcGVydHkobmFtZSwgdmFsdWUpO1xuICB9XG5cbiAgcmVhZFByZWYobmFtZSkge1xuICAgIHJldHVybiB0aGlzLnBtLkdldChuYW1lKTtcbiAgfVxuXG4gIF9yZXRyaWV2ZURhdGEoYW1vdW50KSB7IC8vIHRlbXAgbWV0aG9kP1xuICAgIGNvbnN0IGRhdGEgPSBuZXcgTWFwKCk7XG5cbiAgICB3aGlsZSAoZGF0YS5zaXplIDwgYW1vdW50KSB7XG4gICAgICBjb25zdCB0ZW1wID0gdGhpcy5nZXRSYXdSZWNvcmRTZXQoKTtcblxuICAgICAgLy8gYXZvaWQgdGhlIGR1cGxpY2F0ZXNcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGVtcC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBkYXRhLnNldCh0ZW1wW2ldLklkLCB0ZW1wW2ldKTtcbiAgICAgIH1cblxuICAgICAgLy8gd2UgYXJlIHVzaW5nIGNhbkludm9rZU1ldGhvZCwgYXMgaW4gMTYuMDAgbmV4dFJlY29yZFNldCBhbHdheXMgcmV0dXJucyB1bmRlZmluZWRcbiAgICAgIGlmICghdGhpcy5jYW5JbnZva2VNZXRob2QoJ0dvdG9OZXh0U2V0JykpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIHRoaXMubmV4dFJlY29yZFNldCgpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBkYXRhOiBbLi4uZGF0YS52YWx1ZXMoKV0sXG4gICAgICBoYXNOZXh0OiB0aGlzLmNhbkludm9rZU1ldGhvZCgnR290b05leHRTZXQnKSxcbiAgICB9O1xuICB9XG5cbiAgX3NldEZpZWxkVmFsdWUobmFtZSwgdmFsdWUpIHtcbiAgICBjb25zb2xlLndhcm4oJ19zZXRGaWVsZFZhbHVlIGlzIHRlbXBvcmFyeSBtZXRob2QsIGFuZCBpdCB3aWxsIGJlIHJlbW92ZWQgaW4gdGhlIGZ1dHVyZScpO1xuICAgIHRoaXMuYXBwbGV0LlNldENvbnRyb2xWYWx1ZUJ5TmFtZShuYW1lLCB2YWx1ZSk7XG4gICAgcmV0dXJuIHRoaXMucG0uRXhlY3V0ZU1ldGhvZCgnSW52b2tlTWV0aG9kJywgJ1dyaXRlUmVjb3JkJyk7XG4gICAgLy8gdGhpcy5hcHBsZXQuR2V0QnVzQ29tcCgpLlNldEZpZWxkVmFsdWUobmFtZSwgdmFsdWUpO1xuICAgIC8vIHJldHVybiB0aGlzLnBtLkV4ZWN1dGVNZXRob2QoJ0ludm9rZU1ldGhvZCcsICdXcml0ZVJlY29yZCcpO1xuICB9XG5cbiAgZ2V0RmllbGRUb0NvbnRyb2xNYXAoKSB7XG4gICAgdGhpcy5maWVsZFRvQ29udHJvbE1hcCA9IHsgSWQ6ICdJZCcgfTtcbiAgICBjb25zdCBhcHBsZXRDb250cm9scyA9IHRoaXMuX3JldHVybkNvbnRyb2xzKCk7XG4gICAgY29uc3QgYXJyID0gT2JqZWN0LmtleXMoYXBwbGV0Q29udHJvbHMpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBjb250cm9sID0gYXBwbGV0Q29udHJvbHNbYXJyW2ldXTtcbiAgICAgIGNvbnN0IGZpZWxkID0gY29udHJvbC5HZXRGaWVsZE5hbWUoKTtcbiAgICAgIGlmIChmaWVsZCkge1xuICAgICAgICB0aGlzLmZpZWxkVG9Db250cm9sTWFwW2ZpZWxkXSA9IGFycltpXTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZmllbGRUb0NvbnRyb2xNYXA7XG4gIH1cblxuICBnZXRDb250cm9sc1JlY29yZFNldCgpIHtcbiAgICBpZiAoIXRoaXMuZmllbGRUb0NvbnRyb2xNYXApIHtcbiAgICAgIHRoaXMuZ2V0RmllbGRUb0NvbnRyb2xNYXAoKTtcbiAgICB9XG4gICAgLy8gdXNlZCBzbGljZSB0byBhdm9pZCBtb2RpZmljYXRpb24gb2YgdGhlIHJlY29yZCBzZXRcbiAgICBjb25zdCByZXQgPSB0aGlzLmdldFJlY29yZFNldCgpLnNsaWNlKCk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJldC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgcmV0W2ldID0gT2JqZWN0LmtleXMocmV0W2ldKS5maWx0ZXIoZWwgPT4gdGhpcy5maWVsZFRvQ29udHJvbE1hcFtlbF0pLnJlZHVjZSgoYWNjLCBlbCkgPT4gKHtcbiAgICAgICAgLi4uYWNjLFxuICAgICAgICAuLi57IFt0aGlzLmZpZWxkVG9Db250cm9sTWFwW2VsXV06IHJldFtpXVtlbF0gfSxcbiAgICAgIH0pLCB7fSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJldDtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTjE5bm90aWZpY2F0aW9ucyB7XG4gIGNvbnN0cnVjdG9yKHBtLCBjb25zdHMsIGJjSWQpIHtcbiAgICBsZXQgcmVjZWl2ZWROb3RpZmljYXRpb25zID0gW107XG4gICAgdGhpcy50b2tlbiA9IDA7XG4gICAgdGhpcy5zdWJzY3JpYmVycyA9IFtdO1xuICAgIHBtLkF0dGFjaE5vdGlmaWNhdGlvbkhhbmRsZXIoY29uc3RzLmdldCgnU1dFX1BST1BfQkNfTk9USV9CRUdJTicpLCAocHJvcFNldCkgPT4ge1xuICAgICAgaWYgKGJjSWQgPT09IHByb3BTZXQuR2V0UHJvcGVydHkoJ2JjJykpIHtcbiAgICAgICAgcmVjZWl2ZWROb3RpZmljYXRpb25zID0gW107XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBwbS5BdHRhY2hOb3RpZmljYXRpb25IYW5kbGVyKGNvbnN0cy5nZXQoJ1NXRV9QUk9QX0JDX05PVElfTkVXX0FDVElWRV9ST1cnKSwgKHByb3BTZXQpID0+IHtcbiAgICAgIGlmIChiY0lkID09PSBwcm9wU2V0LkdldFByb3BlcnR5KCdiYycpKSB7XG4gICAgICAgIHJlY2VpdmVkTm90aWZpY2F0aW9ucy5wdXNoKCdTV0VfUFJPUF9CQ19OT1RJX05FV19BQ1RJVkVfUk9XJyk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBwbS5BdHRhY2hOb3RpZmljYXRpb25IYW5kbGVyKGNvbnN0cy5nZXQoJ1NXRV9QUk9QX0JDX05PVElfU1RBVEVfQ0hBTkdFRCcpLCAocHJvcFNldCkgPT4ge1xuICAgICAgaWYgKGJjSWQgPT09IHByb3BTZXQuR2V0UHJvcGVydHkoJ2JjJykpIHtcbiAgICAgICAgcmVjZWl2ZWROb3RpZmljYXRpb25zLnB1c2goJ1NXRV9QUk9QX0JDX05PVElfU1RBVEVfQ0hBTkdFRCcpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcG0uQXR0YWNoTm90aWZpY2F0aW9uSGFuZGxlcihjb25zdHMuZ2V0KCdTV0VfUFJPUF9CQ19OT1RJX0RFTEVURV9SRUNPUkQnKSwgKHByb3BTZXQpID0+IHtcbiAgICAgIGlmIChiY0lkID09PSBwcm9wU2V0LkdldFByb3BlcnR5KCdiYycpKSB7XG4gICAgICAgIHJlY2VpdmVkTm90aWZpY2F0aW9ucy5wdXNoKCdTV0VfUFJPUF9CQ19OT1RJX0RFTEVURV9SRUNPUkQnKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHBtLkF0dGFjaE5vdGlmaWNhdGlvbkhhbmRsZXIoY29uc3RzLmdldCgnU1dFX1BST1BfQkNfTk9USV9ORVdfUkVDT1JEJyksIChwcm9wU2V0KSA9PiB7XG4gICAgICBpZiAoYmNJZCA9PT0gcHJvcFNldC5HZXRQcm9wZXJ0eSgnYmMnKSkge1xuICAgICAgICByZWNlaXZlZE5vdGlmaWNhdGlvbnMucHVzaCgnU1dFX1BST1BfQkNfTk9USV9ORVdfUkVDT1JEJyk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBwbS5BdHRhY2hOb3RpZmljYXRpb25IYW5kbGVyKGNvbnN0cy5nZXQoJ1NXRV9QUk9QX0JDX05PVElfRU5EJyksIChwcm9wU2V0KSA9PiB7XG4gICAgICBpZiAoYmNJZCA9PT0gcHJvcFNldC5HZXRQcm9wZXJ0eSgnYmMnKSkge1xuICAgICAgICBpZiAocmVjZWl2ZWROb3RpZmljYXRpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3Vic2NyaWJlcnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIC8vIHdlIGFzc3VtZSB0aGF0IHRoZSBmdW5jdGlvbiBkb2VzIG5vdCB0aHJvdyBhbiBlcnJvclxuICAgICAgICAgICAgdGhpcy5zdWJzY3JpYmVyc1tpXS5mdW5jKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzdWJzY3JpYmUoZnVuYykge1xuICAgIGlmICh0eXBlb2YgZnVuYyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdmdW5jIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG4gICAgfVxuICAgIHRoaXMudG9rZW4gKz0gMTtcbiAgICB0aGlzLnN1YnNjcmliZXJzLnB1c2goeyB0b2tlbjogdGhpcy50b2tlbiwgZnVuYyB9KTtcbiAgICByZXR1cm4gdGhpcy50b2tlbjtcbiAgfVxuXG4gIHVuc3Vic2NyaWJlKHN1YlRva2VuKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnN1YnNjcmliZXJzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAoc3ViVG9rZW4gPT09IHRoaXMuc3Vic2NyaWJlcnNbaV0udG9rZW4pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3Vic2NyaWJlcnMuc3BsaWNlKGksIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiIsImltcG9ydCBOMTliYXNlQXBwbGV0IGZyb20gJy4vbjE5YmFzZUFwcGxldCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE4xOXBvcHVwQXBwbGV0IGV4dGVuZHMgTjE5YmFzZUFwcGxldCB7XG4gIGNvbnN0cnVjdG9yKHNldHRpbmdzKSB7XG4gICAgc3VwZXIoc2V0dGluZ3MpO1xuICAgIGNvbnNvbGUubG9nKGAke3RoaXMuY29uc3RydWN0b3IubmFtZX0gc3RhcnRlZC4uLmApOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcblxuICAgIGlmICh0aGlzLmlzTGlzdEFwcGxldCkge1xuICAgICAgdGhpcy5wbS5HZXRSZW5kZXJlcigpLnJlc2l6ZSA9ICgpID0+IDA7XG4gICAgICB0aGlzLnBtLkdldFJlbmRlcmVyKCkuR2V0U2VsZWN0ZWRSb3cgPSAoKSA9PiAwO1xuICAgIH1cbiAgfVxuXG4gIHBpY2tSZWNvcmQoKSB7XG4gICAgLy8gdG9kbyA6IGNoZWNrIENhbklub2tlTWV0aG9kIGFuZC9vciBpcyBpdCBwaWNrXG4gICAgcmV0dXJuIHRoaXMucG0uRXhlY3V0ZU1ldGhvZCgnSW52b2tlTWV0aG9kJywgJ1BpY2tSZWNvcmQnKTtcbiAgfVxuXG4gIGRlbGV0ZVJlY29yZHMoY2IpIHtcbiAgICAvLyBtZXRob2QgaXMgbm90IGFsbG93ZWQgdG8gZGVsZXRlIHRoZSBwcmltYXJ5XG4gICAgLy8gIGluIHRoaXMgY2FzZSBpdCByZXR1cm5zIFwiTWV0aG9kIERlbGV0ZVJlY29yZHMgaXMgbm90IGFsbG93ZWQgaGVyZVwiIFNCTC1VSUYtMDAzNDhcbiAgICAvLyB0b2RvOiBjaGVjayBjYW5JbnZva2VNZXRob2QgYW5kL29yIGlzIGl0IE1WR1xuICAgIGNvbnN0IHJldCA9IHRoaXMucG0uRXhlY3V0ZU1ldGhvZCgnSW52b2tlTWV0aG9kJywgJ0RlbGV0ZVJlY29yZHMnKTtcbiAgICBpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjYigpO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgYWRkUmVjb3JkcyhjYikge1xuICAgIC8vIHRvZG86IGNoZWNrIGNhbkludm9rZU1ldGhvZCBhbmQvb3IgaXMgaXQgTVZHLiBhbmQgaWYgd2UgaGF2ZSBhIHJlY29yZCBpbiBhc3NvYz9cbiAgICBjb25zdCByZXQgPSB0aGlzLnBtLkV4ZWN1dGVNZXRob2QoJ0ludm9rZU1ldGhvZCcsICdBZGRSZWNvcmRzJyk7XG4gICAgaWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2IoKTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIC8vIHRvZG86IGRvIHdlIG5lZWQgZGVsZXRlQWxsUmVjb3Jkcz9cbiAgYWRkQWxsUmVjb3JkcyhjYikge1xuICAgIC8vIHRvZG86IGNoZWNrIGNhbkludm9rZU1ldGhvZCBhbmQvb3IgaXMgaXQgTVZHLiBhbmQgaWYgd2UgaGF2ZSBhIHJlY29yZCBpbiBhc3NvYz9cbiAgICBjb25zdCByZXQgPSB0aGlzLnBtLkV4ZWN1dGVNZXRob2QoJ0ludm9rZU1ldGhvZCcsICdBZGRBbGxSZWNvcmRzJyk7XG4gICAgaWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2IoKTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIF9maXJzdFJlY29yZCgpIHsgLy8gdGVtcCBtZXRob2QsIGFzc3VtZXMgdGhhdCBubyBzY3JvbGxpbmcgaGFwcGVuZWRcbiAgICBpZiAodGhpcy5pc0xpc3RBcHBsZXQpIHtcbiAgICAgIGlmICh0aGlzLmdldFNlbGVjdGlvbigpICE9PSAwKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBvc2l0aW9uT25Sb3coMCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iLCJpbXBvcnQgTjE5cG9wdXBBcHBsZXQgZnJvbSAnLi9uMTlwb3B1cEFwcGxldCc7XG5cbmNvbnN0IHNpbmdsZXRvbiA9IFN5bWJvbCgnc2luZ2xldG9uJyk7XG5jb25zdCBzaW5nbGV0b25FbmZvcmNlciA9IFN5bWJvbCgnc2luZ2xldG9uRW5mb3JjZXInKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTjE5cG9wdXBDb250cm9sbGVyIHtcbiAgc3RhdGljIGdldCBpbnN0YW5jZSgpIHtcbiAgICBpZiAoIXRoaXNbc2luZ2xldG9uXSkge1xuICAgICAgdGhpc1tzaW5nbGV0b25dID0gbmV3IE4xOXBvcHVwQ29udHJvbGxlcihzaW5nbGV0b25FbmZvcmNlcik7XG4gICAgfVxuICAgIHJldHVybiB0aGlzW3NpbmdsZXRvbl07XG4gIH1cblxuICBjb25zdHJ1Y3RvcihlbmZvcmNlcikge1xuICAgIGlmIChlbmZvcmNlciAhPT0gc2luZ2xldG9uRW5mb3JjZXIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW5zdGFudGlhdGlvbiBmYWlsZWQ6IHVzZSBTaW5nbGV0b24uZ2V0SW5zdGFuY2UoKSBpbnN0ZWFkIG9mIG5ldy4nKTtcbiAgICB9XG4gICAgdGhpcy5jb25zdHMgPSBTaWViZWxKUy5EZXBlbmRlbmN5KCdTaWViZWxBcHAuQ29uc3RhbnRzJyk7XG4gICAgdGhpcy5pc1BvcHVwSGlkZGVuID0gZmFsc2U7XG4gICAgdGhpcy5yZXNvbHZlUHJvbWlzZSA9IG51bGw7XG4gICAgdGhpcy5wb3B1cEFwcGxldE4xOSA9IG51bGw7XG4gICAgdGhpcy5hc3NvY0FwcGxldE4xOSA9IG51bGw7XG5cbiAgICBjb25zb2xlLmxvZyhgJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWV9IHN0YXJ0ZWQuLi5gKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG5cbiAgICAvLyBpdCB3aWxsIGJlIGEgc2luZ2xldG9uLCBzbyB0aGVyZSBpcyBubyBjbGVhbnVwXG4gICAgdGhpcy5OMTlwcm9jZXNzTmV3UG9wdXAgPSBTaWViZWxBcHAuU19BcHAuUHJvY2Vzc05ld1BvcHVwO1xuICAgIFNpZWJlbEFwcC5TX0FwcC5Qcm9jZXNzTmV3UG9wdXAgPSAocHMpID0+IHtcbiAgICAgIGxldCByZXQ7XG4gICAgICBpZiAodGhpcy5pc1BvcHVwSGlkZGVuKSB7XG4gICAgICAgIHJldCA9IHRoaXMucHJvY2Vzc05ld1BvcHVwKHBzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldCA9IHRoaXMuTjE5cHJvY2Vzc05ld1BvcHVwLmNhbGwoU2llYmVsQXBwLlNfQXBwLCBwcyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmV0O1xuICAgIH07XG5cbiAgICB0aGlzLk4xOXZpZXdMb2FkZWQgPSBTaWViZWxBcHAuY29udGVudFVwZGF0ZXIudmlld0xvYWRlZDtcbiAgICBTaWViZWxBcHAuY29udGVudFVwZGF0ZXIudmlld0xvYWRlZCA9ICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCByZXQgPSB0aGlzLk4xOXZpZXdMb2FkZWQuY2FsbChTaWViZWxBcHAuY29udGVudFVwZGF0ZXIsIC4uLmFyZ3MpO1xuICAgICAgaWYgKHR5cGVvZiB0aGlzLnJlc29sdmVQcm9taXNlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIC8vIHRvZG86IHVzZSBoZXJlIHRoZSBwcm9wZXJ0aWVzIHNldCBvbiBwcm9taXNlUmVzb2x2aW5nP1xuICAgICAgICBjb25zdCB7IGFwcGxldE5hbWUgfSA9IE4xOXBvcHVwQ29udHJvbGxlci5Jc1BvcHVwT3BlbigpO1xuICAgICAgICBpZiAoIWFwcGxldE5hbWUpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ09wZW4gQXBwbGV0IE5hbWUgaXMgbm90IGZvdW5kIGluIHJlc29sdmVQcm9taXNlJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYXBwbGV0ID0gTjE5cG9wdXBDb250cm9sbGVyLkdldFBvcHVwQXBwbGV0KGFwcGxldE5hbWUpO1xuICAgICAgICBjb25zdCBwbSA9IGFwcGxldC5HZXRQTW9kZWwoKTtcbiAgICAgICAgLy8gdG9kbzogYXZvaWQgdGhpcyBjaXJjdWxhcml0eVxuICAgICAgICB0aGlzLnBvcHVwQXBwbGV0TjE5ID0gbmV3IE4xOXBvcHVwQXBwbGV0KHsgcG0gfSk7IC8vIHRvZG8gOiBzcGxpdCBOMTlIZWxwZXIgaW50byAyIGNsYXNzZXNcbiAgICAgICAgY29uc3Qgb2JqID0geyBhcHBsZXROYW1lLCBwb3B1cEFwcGxldE4xOTogdGhpcy5wb3B1cEFwcGxldE4xOSB9O1xuICAgICAgICAvLyBjaGVjayBpZiB3ZSBoYXZlIGFzc29jXG4gICAgICAgIC8vIHdlIGFzc3VtZSBpdCBpcyBhbHdheXMgYXNzb2MgYXBwbGV0LCBidXQgd2hhdCBhYm91dCBvcGVuaW5nIHBvcHVwIG9uIHRoZSB0b3Agb2YgYW5vdGhlciAtIG5vdCB0ZXN0ZWQgaXRcbiAgICAgICAgY29uc3QgYXNzb2NBcHBsZXQgPSBhcHBsZXQuR2V0UG9wdXBBcHBsZXQoKTtcbiAgICAgICAgaWYgKGFzc29jQXBwbGV0KSB7XG4gICAgICAgICAgdGhpcy5hc3NvY0FwcGxldE4xOSA9IG5ldyBOMTlwb3B1cEFwcGxldCh7IHBtOiBhc3NvY0FwcGxldC5HZXRQTW9kZWwoKSB9KTtcbiAgICAgICAgICBvYmouYXNzb2NBcHBsZXROMTkgPSB0aGlzLmFzc29jQXBwbGV0TjE5O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVzb2x2ZVByb21pc2Uob2JqKTtcbiAgICAgICAgdGhpcy5yZXNvbHZlUHJvbWlzZSA9IG51bGw7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmV0O1xuICAgIH07XG4gIH1cblxuICBjYW5PcGVuUG9wdXAoKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB0aGlzLnJlc29sdmVQcm9taXNlICE9PSAnZnVuY3Rpb24nO1xuICB9XG5cbiAgcHJvY2Vzc05ld1BvcHVwKHBzKSB7XG4gICAgU2llYmVsQXBwLlNfQXBwLlNldFNob3dOZXdQYWdlKHRydWUpO1xuICAgIGNvbnN0IHBvcHVwUE0gPSBTaWViZWxBcHAuU19BcHAuR2V0UG9wdXBQTSgpO1xuXG4gICAgcG9wdXBQTS5TZXRQcm9wZXJ0eSgnQ2FuUHJvY2Vzc0xheW91dCcsIGZhbHNlKTtcbiAgICBwb3B1cFBNLlNldFByb3BlcnR5KCdpc1BvcHVwUGljaycsIGZhbHNlKTtcbiAgICBwb3B1cFBNLlNldFByb3BlcnR5KCdpc1BvcHVwTVZHQXNzb2MnLCBmYWxzZSk7XG4gICAgcG9wdXBQTS5TZXRQcm9wZXJ0eSgnaXNQb3B1cE1WR1NlbGVjdGVkJywgZmFsc2UpO1xuICAgIHBvcHVwUE0uU2V0UHJvcGVydHkoJ2lzUG9wdXBBc3NvYycsIGZhbHNlKTtcbiAgICBwb3B1cFBNLlNldFByb3BlcnR5KCdjdXJyUG9wdXBzJywgW10pO1xuICAgIHBvcHVwUE0uU2V0UHJvcGVydHkoJ2lzU0lQb3B1cCcsIHBzLkdldFByb3BlcnR5KHRoaXMuY29uc3RzLmdldCgnU1dFX0lTX1NJX1BPUFVQJykpKTtcbiAgICBwb3B1cFBNLlNldFByb3BlcnR5KCdpc1ByZXZQb3B1cFZpc2libGUnLCAhMSk7XG5cbiAgICBpZiAoIXBvcHVwUE0uR2V0UmVuZGVyZXIoKSkge1xuICAgICAgcG9wdXBQTS5TZXR1cCgpO1xuICAgIH1cblxuICAgIGNvbnN0IGFjdGl2ZVZpZXcgPSBTaWViZWxBcHAuU19BcHAuR2V0QWN0aXZlVmlldygpO1xuICAgIGlmIChhY3RpdmVWaWV3KSB7XG4gICAgICBjb25zdCBhY3RpdmVBcHBsZXQgPSBhY3RpdmVWaWV3LkdldEFjdGl2ZUFwcGxldCgpO1xuICAgICAgaWYgKGFjdGl2ZUFwcGxldCkge1xuICAgICAgICBhY3RpdmVWaWV3LlNldEFjdGl2ZUFwcGxldEJlZm9yZVBvcHVwKGFjdGl2ZUFwcGxldCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcG9wdXBQTS5BZGRQcm9wZXJ0eSgnc3RhdGUnLCAndmlzaWJsZScpOyAvLyB0b2RvOiB3ZSBuZWVkIGFsc28gdG8gcmVzdG9yZSB0aGUgUE1cblxuICAgIGxldCB1cmwgPSBwcy5HZXRQcm9wZXJ0eSgnVVJMJyk7XG4gICAgdXJsID0gU2llYmVsQXBwLlNfQXBwLkdldFBhZ2VVUkwoKSArIHVybC5zcGxpdCgnc3RhcnQuc3dlJylbMV07XG4gICAgcG9wdXBQTS5TZXRQcm9wZXJ0eSgndXJsJywgdXJsKTtcblxuICAgIHJldHVybiAncmVmcmVzaHBvcHVwJztcbiAgfVxuXG4gIC8vIHN0YXRpYyBSZUluaXRQb3B1cCgpIHtcbiAgLy8gICBjb25zdCBwb3B1cFBNID0gU2llYmVsQXBwLlNfQXBwLkdldFBvcHVwUE0oKTtcbiAgLy8gICBwb3B1cFBNLkluaXQoKTtcbiAgLy8gICBwb3B1cFBNLlNldHVwKCk7XG4gIC8vIH1cblxuICAvLyB0b2RvOiBjaGFuZ2UgdGhlIGFwcHJvYWNoLCB1c2UgdGhlIGNsYXNzIGludGVybmFsIHZhcmlhYmxlc1xuICBjbG9zZVBvcHVwQXBwbGV0KGFwcGxldCkge1xuICAgIC8vIHRvZG8gOiBjaGVjayBjYW5JbnZva2VNZXRob2RcbiAgICBsZXQgcmV0O1xuICAgIGlmIChhcHBsZXQpIHtcbiAgICAgIGNvbnN0IGlzUG9wdXBBcHBsZXQgPSB0eXBlb2YgYXBwbGV0LkdldFBvcHVwQXBwbGV0TmFtZSA9PT0gJ2Z1bmN0aW9uJztcbiAgICAgIGNvbnN0IGlzUGlja0FwcGxldCA9IHR5cGVvZiBhcHBsZXQuR2V0UGlja0FwcGxldE5hbWUgPT09ICdmdW5jdGlvbic7XG4gICAgICBpZiAoIWlzUG9wdXBBcHBsZXQgJiYgIWlzUGlja0FwcGxldCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoaXMgYXBwbGV0IGlzIG5laXRoZXIgcGljayBub3IgcG9wdXAnKTtcbiAgICAgIH1cbiAgICAgIHJldCA9IGFwcGxldC5HZXRQTW9kZWwoKS5FeGVjdXRlTWV0aG9kKCdJbnZva2VNZXRob2QnLCAnQ2xvc2VBcHBsZXQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gdG9kbzogISEhID4+IGNoYW5nZSB0aGlzIGFwcHJvYWNoXG4gICAgICByZXQgPSB0aGlzLnBvcHVwQXBwbGV0TjE5LmFwcGxldC5HZXRQTW9kZWwoKS5FeGVjdXRlTWV0aG9kKCdJbnZva2VNZXRob2QnLCAnQ2xvc2VBcHBsZXQnKTtcbiAgICB9XG4gICAgLy8gaXQgY291bGQgYmUgYmV0dGVyIGlmIHdlIGRvbid0IGhhdmUgYSBTaWViZWwgQXBwbGV0IG9uIHRoZSB2aWV3XG4gICAgLy8gaW4gdGhpcyBjYXNlLCB3ZSB3b3VsZCBub3QgbmVlZCB0byByZUluaXRQb3B1cFxuICAgIC8vIGlmICh0aGlzLmlzUG9wdXBIaWRkZW4pIHtcbiAgICAvLyAgTjE5cG9wdXBDb250cm9sbGVyLlJlSW5pdFBvcHVwKCk7XG4gICAgLy8gfVxuICAgIHRoaXMucG9wdXBBcHBsZXROMTkgPSBudWxsO1xuICAgIHRoaXMuYXNzb2NBcHBsZXROMTkgPSBudWxsO1xuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICBzdGF0aWMgSXNQb3B1cE9wZW4oKSB7IC8vIHRvZG86IHdoZW4gd2Ugc2V0IHNvbWUgcHJvcGVydGllcyBvbiByZXNvbHZlLCBkbyB3ZSBuZWVkIHRoaXMgbWV0aG9kIG5vd1xuICAgIC8vIHRvZG86IGhlcmUgcmV1c2UgdGhlIHByb3BlcnRpZXMgdGhhdCBzZXQgd2hlbiB0aGUgUHJvbWlzZSByZXNvbHZlZFxuICAgIGNvbnN0IGN1cnJQb3B1cHMgPSBTaWViZWxBcHAuU19BcHAuR2V0UG9wdXBQTSgpLkdldCgnY3VyclBvcHVwcycpO1xuICAgIGlmICgwID09PSBjdXJyUG9wdXBzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHsgaXNPcGVuOiBmYWxzZSB9O1xuICAgIH1cbiAgICBpZiAoMSA9PT0gY3VyclBvcHVwcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB7IGlzT3BlbjogdHJ1ZSwgYXBwbGV0TmFtZTogY3VyclBvcHVwc1swXS5HZXROYW1lKCksIGNvbnRyb2xOYW1lOiBjdXJyUG9wdXBzWzBdLkdldFBvcHVwQ29udHJvbCgpIH07XG4gICAgfVxuICAgIGlmICgyID09PSBjdXJyUG9wdXBzLmxlbmd0aCkge1xuICAgICAgLy8gdGhpcyBpcyBhIHNodXR0bGUgb3JcbiAgICAgIC8vIG1heWJlIHdlIG9wZW5lZCBhIHBvcHVwIGFwcGxldCBvbiB0aGUgdG9wIG9mIHBpY2sgYXBwbGV0IC0gVE9ETzogLy8gdGVzdCBpdFxuICAgICAgLy8gICAgICB0ZXN0IGl0ICAtIG1heWJlIHdlIG5lZWQgdG8gY2xvc2UgdGhlIHNldmVyYWwgYXBwbGV0c1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyUG9wdXBzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY3VyclBvcHVwc1sxXS5HZXRQb3B1cEFwcGxldE5hbWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICByZXR1cm4geyBpc09wZW46IHRydWUsIGFwcGxldE5hbWU6IGN1cnJQb3B1cHNbaV0uR2V0TmFtZSgpLCBjb250cm9sTmFtZTogY3VyclBvcHVwc1tpXS5HZXRQb3B1cENvbnRyb2woKSB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ012ZyBhcHBsZXQgaXMgbm90IGZvdW5kLi4uJyk7XG4gICAgfVxuICAgIC8vIHRvZG86IHRlc3QgaWYgd2UgY2FuIGdldCB0byBoZXJlXG4gICAgLy8gICAgbWF5YmUgd2hlbiB3ZSBvcGVuIGEgbmV3IGFwcGxldCBvbiB0b3Agb2YgdGhlIHNodXR0bGUgYXBwbGV0XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzaG91bGQgbm90IGJlIGhlcmUuLi4nKTtcbiAgfVxuXG4gIC8vIHN0YXRpYyBnZXRQb3B1cEFwcGxldFBNKGFwcGxldE5hbWUpIHtcbiAgLy8gICBjb25zdCBhcHBsZXQgPSBOMTlwb3B1cENvbnRyb2xsZXIuR2V0UG9wdXBBcHBsZXQoYXBwbGV0TmFtZSk7XG4gIC8vICAgcmV0dXJuIGFwcGxldC5HZXRQTW9kZWwoKTtcbiAgLy8gfVxuXG4gIHN0YXRpYyBHZXRQb3B1cEFwcGxldChhcHBsZXROYW1lKSB7XG4gICAgY29uc3QgYXBwbGV0ID0gU2llYmVsQXBwLlNfQXBwLkdldEFjdGl2ZVZpZXcoKS5HZXRBcHBsZXRNYXAoKVthcHBsZXROYW1lXTtcbiAgICBpZiAoIWFwcGxldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgJHthcHBsZXROYW1lfSBpcyBub3QgZm91bmQgaW4gYXBwbGV0IG1hcGApO1xuICAgIH1cbiAgICByZXR1cm4gYXBwbGV0O1xuICB9XG5cbiAgc2hvd1BvcHVwQXBwbGV0KGhpZGUsIGNiLCBwbSkge1xuICAgIC8vIHRvZG86IHVzZSB0aGUgcHJvcGVydGllcyBzZXQgb24gcHJvbWlzZSByZXNvbHZpbmc/XG4gICAgY29uc3QgeyBpc09wZW4sIGFwcGxldE5hbWUgfSA9IE4xOXBvcHVwQ29udHJvbGxlci5Jc1BvcHVwT3BlbigpO1xuICAgIGlmIChpc09wZW4pIHtcbiAgICAgIC8vIHRoaXMgY29kZSB3aWxsIGNsb3NlIHRoZSBhcHBsZXQgZXZlbiBpZiB0aGlzIGFwcGxldCB3YXMgb3JpZ2luYXRlZCBieSBhbm90aGVyIGFwcGxldFxuICAgICAgY29uc29sZS5sb2coYGNsb3NpbmcgJHthcHBsZXROYW1lfSBpbiBzaG93UG9wdXBBcHBsZXQuLi5gKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgICAvLyBtYXliZSBkbyBub3QgY2xvc2UgaWYgdGhlIGFwcGxldCB0byBiZSBvcGVuZWQgaWYgdGhlIHNhbWUgYXMgYWxyZWFkeSBvcGVuZWQ/XG4gICAgICB0aGlzLmNsb3NlUG9wdXBBcHBsZXQoTjE5cG9wdXBDb250cm9sbGVyLkdldFBvcHVwQXBwbGV0KGFwcGxldE5hbWUpKTtcbiAgICAgIC8vIHRvZG86IGNoZWNrIGlmIGdvdCBpdCBzdWNjZXNzZnVsbHkgY2xvc2VkP1xuICAgIH1cbiAgICB0aGlzLmlzUG9wdXBIaWRkZW4gPSAhIWhpZGU7IC8vIHRvZG86IGRvIHdlIG5lZWQgdG8ga2VlcCB0aGUgc2hvdyB0aGUgYXBwbGV0XG5cbiAgICBwbS5FeGVjdXRlTWV0aG9kKCdJbnZva2VNZXRob2QnLCAnRWRpdFBvcHVwJyk7IC8vIGNhbiBjYWxsIEVkaXRGaWVsZD9cblxuICAgIGxldCByZXQgPSB0cnVlO1xuXG4gICAgaWYgKGhpZGUpIHsgLy8gd2Ugd2lsbCBwb3B1bGF0ZSB0aGUgaW5zdGFuY2VzIG9ubHkgd2hlbiBhcHBsZXQgc2hvdWxkIGJlIGhpZGRlblxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJldHVybi1hc3NpZ25cbiAgICAgIHJldCA9IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gdGhpcy5yZXNvbHZlUHJvbWlzZSA9IHJlc29sdmUpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXBhcmFtLWFzc2lnblxuICAgICAgaWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXQgPSByZXQudGhlbihjYik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJldDtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==