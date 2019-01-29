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
    this.applet = this.view.GetAppletMap()[this.appletName];
    this.isListApplet = typeof this.applet.GetListOfColumns === 'function';
    this.required = []; // will be empty for the list applet

    this.lov = {};
    this.token = 0;
    this.subscribers = [];
    var bcId = this.applet.GetBCId();
    this.pm.AttachNotificationHandler(this.consts.get('SWE_PROP_BC_NOTI_END'), function (propSet) {
      if (bcId === propSet.GetProperty('bc')) {
        for (var i = 0; i < _this.subscribers.length; i += 1) {
          // we assume that the function does not throw an error
          _this.subscribers[i].func();
        }
      }
    }); // populate the required array for form applets

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
    value: function unsubscribe(token) {
      for (var i = 0; i < this.subscribers.length; i += 1) {
        if (token === this.subscribers[i].token) {
          return this.subscribers.splice(i, 1);
        }
      }

      return false;
    }
  }, {
    key: "_getControl",
    value: function _getControl(name) {
      return this.applet.GetControl(name);
    }
  }, {
    key: "_returnControls",
    value: function _returnControls() {
      if (this.isListApplet) {
        return this.applet.GetListOfColumns(); // pm.Get('GetListOfColumns')
      }

      return this.applet.GetControls(); // pm.Get('GetControls');
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
      return this.applet.SetActiveControl(this._getControl(name));
    }
  }, {
    key: "_getValueForControl",
    value: function _getValueForControl(controlUiType, value) {
      // TODO: DateTime, numbers, and phones?
      if (this.consts.get('SWE_CTRL_CHECKBOX') === controlUiType) {
        // convert true/false => Y/N
        // do we want to support setting to null
        value = value ? 'Y' : 'N'; // eslint-disable-line no-param-reassign
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
          isLink: this.pm.ExecuteMethod('CanNavigate', controlName)
        };

        if (this.isListApplet) {
          obj.readOnly = !this.pm.ExecuteMethod('CanUpdate', this.pm.GetRenderer().GetColumnHelper().GetActualControlName(controlName));
        } else {
          obj.readOnly = !this.pm.ExecuteMethod('CanUpdate', controlName);
        } // add values to be displayed in the static pick list


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
        //  should we check applet.GetActiveControl (applet.prototype.InvokeMethod)
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
      this.applet.SetActiveControl(null); // to prevent UpdatePick

      this.applet.InvokeMethod('GetQuickPickInfo', ps);
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
      var bc = this.applet.GetBusComp();

      if (bc.IsInQueryState()) {
        // if no records and the entered the query mode,
        // selection is -1, therefore we need to check query mode first
        return 3;
      }

      if (this.getSelection() < 0) {
        return 0;
      }

      if (bc.IsInsertPending()) {
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
    key: "getCurrentRecordModel",
    value: function getCurrentRecordModel(_controls, _methods) {
      if (!_controls) {
        return false;
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
      this.applet.InvokeMethod('NewQuery');
      this.applet.GetBusComp().SetFieldValue('Id', expr);
      this.applet.InvokeMethod('ExecuteQuery');
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

      this.applet.InvokeMethod('NewQuery');
      this.applet.GetBusComp().SetFieldValue('Id', expr);
      this.applet.InvokeMethod('ExecuteQuery');
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
          var boolObject = new SiebelApp.S_App.DatumBoolObject();

          var _ref = psOutputs.GetChildByType('ResultSet') || {},
              childArray = _ref.childArray; // to be protectedd when no results?


          var ret = {};

          for (var _i2 = 0; _i2 < childArray.length; _i2 += 1) {
            ret[childArray[_i2].GetType()] = {};

            for (var j = 0; j < childArray[_i2].childArray.length; j += 1) {
              var el = childArray[_i2].childArray[j];
              ret[childArray[_i2].GetType()][el.GetType()] = el.childArray.map(function (rec) {
                var primary = rec.propArray['SSA Primary Field'];
                boolObject.SetAsString(primary);
                rec.propArray['SSA Primary Field'] = boolObject.GetValue(); // eslint-disable-line no-param-reassign

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
      this.applet.GetBusComp().SetFieldValue(name, value);
      return this.applet.InvokeMethod('WriteRecord');
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
      var _this7 = this;

      if (!this.fieldToControlMap) {
        this.getFieldToControlMap();
      } // used slice to avoid modification of the record set


      var ret = this.getRecordSet().slice();

      var _loop = function _loop(i) {
        ret[i] = Object.keys(ret[i]).filter(function (el) {
          return _this7.fieldToControlMap[el];
        }).reduce(function (acc, el) {
          return _objectSpread({}, acc, _defineProperty({}, _this7.fieldToControlMap[el], ret[i][el]));
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

      pm.ExecuteMethod('InvokeMethod', 'EditPopup', null, false); // seems we can also to call EditField

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYW4taW5zdGFuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NsYXNzb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY29mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NvbGxlY3Rpb24tc3Ryb25nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NvbGxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jcmVhdGUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY3R4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2RlZmluZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2VudW0ta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19leHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZmFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZml4LXJlLXdrcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19mbGFncy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19mb3Itb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2hhcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19oaWRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2h0bWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faW5oZXJpdC1pZi1yZXF1aXJlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pbnZva2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pcy1hcnJheS1pdGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2lzLWFycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pcy1yZWdleHAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlci1jYWxsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXItZGV0ZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXItc3RlcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyYXRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fbGlicmFyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19tZXRhLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX21pY3JvdGFzay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZHAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWRwcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZ29wZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZ29wbi1leHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdvcG4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdwby5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3Qta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtcGllLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1zYXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LXRvLWFycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3BlcmZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fcHJvbWlzZS1yZXNvbHZlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fcmVkZWZpbmUtYWxsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3JlZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NldC1wcm90by5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zZXQtc3BlY2llcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zaGFyZWQta2V5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NoYXJlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zcGVjaWVzLWNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3N0cmluZy1hdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190YXNrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWFic29sdXRlLWluZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8taW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1sZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL191aWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdXNlci1hZ2VudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL192YWxpZGF0ZS1jb2xsZWN0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3drcy1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fd2tzLWV4dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL193a3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuZnJvbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5mdW5jdGlvbi5uYW1lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnByb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLmZsYWdzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5zcGxpdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAudG8tc3RyaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcub2JqZWN0LmVudHJpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcuc3ltYm9sLmFzeW5jLWl0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbjE5YmFzZUFwcGxldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbjE5cG9wdXBBcHBsZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL24xOXBvcHVwQ29udHJvbGxlci5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiaXQiLCJUeXBlRXJyb3IiLCJVTlNDT1BBQkxFUyIsInJlcXVpcmUiLCJBcnJheVByb3RvIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJ1bmRlZmluZWQiLCJrZXkiLCJDb25zdHJ1Y3RvciIsIm5hbWUiLCJmb3JiaWRkZW5GaWVsZCIsImlzT2JqZWN0IiwidG9JT2JqZWN0IiwidG9MZW5ndGgiLCJ0b0Fic29sdXRlSW5kZXgiLCJJU19JTkNMVURFUyIsIiR0aGlzIiwiZWwiLCJmcm9tSW5kZXgiLCJPIiwibGVuZ3RoIiwiaW5kZXgiLCJ2YWx1ZSIsImNvZiIsIlRBRyIsIkFSRyIsImFyZ3VtZW50cyIsInRyeUdldCIsImUiLCJUIiwiQiIsIk9iamVjdCIsImNhbGxlZSIsInRvU3RyaW5nIiwiY2FsbCIsInNsaWNlIiwiZFAiLCJmIiwiY3JlYXRlIiwicmVkZWZpbmVBbGwiLCJjdHgiLCJhbkluc3RhbmNlIiwiZm9yT2YiLCIkaXRlckRlZmluZSIsInN0ZXAiLCJzZXRTcGVjaWVzIiwiREVTQ1JJUFRPUlMiLCJmYXN0S2V5IiwidmFsaWRhdGUiLCJTSVpFIiwiZ2V0RW50cnkiLCJ0aGF0IiwiZW50cnkiLCJfaSIsIl9mIiwibiIsImsiLCJnZXRDb25zdHJ1Y3RvciIsIndyYXBwZXIiLCJOQU1FIiwiSVNfTUFQIiwiQURERVIiLCJDIiwiaXRlcmFibGUiLCJfdCIsIl9sIiwiY2xlYXIiLCJkYXRhIiwiciIsInAiLCJpIiwibmV4dCIsInByZXYiLCJmb3JFYWNoIiwiY2FsbGJhY2tmbiIsInYiLCJoYXMiLCJnZXQiLCJkZWYiLCJzZXRTdHJvbmciLCJpdGVyYXRlZCIsImtpbmQiLCJfayIsImdsb2JhbCIsIiRleHBvcnQiLCJyZWRlZmluZSIsIm1ldGEiLCJmYWlscyIsIiRpdGVyRGV0ZWN0Iiwic2V0VG9TdHJpbmdUYWciLCJpbmhlcml0SWZSZXF1aXJlZCIsIm1ldGhvZHMiLCJjb21tb24iLCJJU19XRUFLIiwiQmFzZSIsInByb3RvIiwiZml4TWV0aG9kIiwiS0VZIiwiZm4iLCJhIiwiYWRkIiwic2V0IiwiYiIsImVudHJpZXMiLCJORUVEIiwiaW5zdGFuY2UiLCJIQVNOVF9DSEFJTklORyIsIlRIUk9XU19PTl9QUklNSVRJVkVTIiwiQUNDRVBUX0lURVJBQkxFUyIsIml0ZXIiLCJCVUdHWV9aRVJPIiwiJGluc3RhbmNlIiwidGFyZ2V0IiwiY29uc3RydWN0b3IiLCJHIiwiVyIsIkYiLCJjb3JlIiwidmVyc2lvbiIsIl9fZSIsIiRkZWZpbmVQcm9wZXJ0eSIsImNyZWF0ZURlc2MiLCJvYmplY3QiLCJhRnVuY3Rpb24iLCJjIiwiYXBwbHkiLCJkZWZpbmVQcm9wZXJ0eSIsImRvY3VtZW50IiwiaXMiLCJjcmVhdGVFbGVtZW50Iiwic3BsaXQiLCJnZXRLZXlzIiwiZ09QUyIsInBJRSIsInJlc3VsdCIsImdldFN5bWJvbHMiLCJzeW1ib2xzIiwiaXNFbnVtIiwicHVzaCIsImhpZGUiLCJQUk9UT1RZUEUiLCJ0eXBlIiwic291cmNlIiwiSVNfRk9SQ0VEIiwiSVNfR0xPQkFMIiwiSVNfU1RBVElDIiwiUyIsIklTX1BST1RPIiwiUCIsIklTX0JJTkQiLCJleHBQcm90byIsIm93biIsIm91dCIsImV4cCIsIkZ1bmN0aW9uIiwiVSIsIlIiLCJleGVjIiwiZGVmaW5lZCIsIndrcyIsIlNZTUJPTCIsImZucyIsInN0cmZuIiwicnhmbiIsIlN0cmluZyIsIlJlZ0V4cCIsInN0cmluZyIsImFyZyIsImFuT2JqZWN0IiwiaWdub3JlQ2FzZSIsIm11bHRpbGluZSIsInVuaWNvZGUiLCJzdGlja3kiLCJpc0FycmF5SXRlciIsImdldEl0ZXJGbiIsIkJSRUFLIiwiUkVUVVJOIiwiSVRFUkFUT1IiLCJpdGVyRm4iLCJpdGVyYXRvciIsImRvbmUiLCJ3aW5kb3ciLCJNYXRoIiwic2VsZiIsIl9fZyIsImhhc093blByb3BlcnR5IiwiZG9jdW1lbnRFbGVtZW50Iiwic2V0UHJvdG90eXBlT2YiLCJhcmdzIiwidW4iLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsIkl0ZXJhdG9ycyIsImlzQXJyYXkiLCJNQVRDSCIsImlzUmVnRXhwIiwicmV0IiwiZGVzY3JpcHRvciIsIkl0ZXJhdG9yUHJvdG90eXBlIiwiTElCUkFSWSIsIiRpdGVyQ3JlYXRlIiwiZ2V0UHJvdG90eXBlT2YiLCJCVUdHWSIsImtleXMiLCJGRl9JVEVSQVRPUiIsIktFWVMiLCJWQUxVRVMiLCJyZXR1cm5UaGlzIiwiREVGQVVMVCIsIklTX1NFVCIsIkZPUkNFRCIsImdldE1ldGhvZCIsInZhbHVlcyIsIkRFRl9WQUxVRVMiLCJWQUxVRVNfQlVHIiwiJG5hdGl2ZSIsIiRkZWZhdWx0IiwiJGVudHJpZXMiLCIkYW55TmF0aXZlIiwiU0FGRV9DTE9TSU5HIiwicml0ZXIiLCJmcm9tIiwic2tpcENsb3NpbmciLCJzYWZlIiwiYXJyIiwiTUVUQSIsInNldERlc2MiLCJpZCIsImlzRXh0ZW5zaWJsZSIsIkZSRUVaRSIsInByZXZlbnRFeHRlbnNpb25zIiwic2V0TWV0YSIsInciLCJnZXRXZWFrIiwib25GcmVlemUiLCJtYWNyb3Rhc2siLCJPYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJXZWJLaXRNdXRhdGlvbk9ic2VydmVyIiwicHJvY2VzcyIsIlByb21pc2UiLCJpc05vZGUiLCJoZWFkIiwibGFzdCIsIm5vdGlmeSIsImZsdXNoIiwicGFyZW50IiwiZG9tYWluIiwiZXhpdCIsImVudGVyIiwibmV4dFRpY2siLCJuYXZpZ2F0b3IiLCJzdGFuZGFsb25lIiwidG9nZ2xlIiwibm9kZSIsImNyZWF0ZVRleHROb2RlIiwib2JzZXJ2ZSIsImNoYXJhY3RlckRhdGEiLCJyZXNvbHZlIiwicHJvbWlzZSIsInRoZW4iLCJ0YXNrIiwiUHJvbWlzZUNhcGFiaWxpdHkiLCJyZWplY3QiLCIkJHJlc29sdmUiLCIkJHJlamVjdCIsInRvT2JqZWN0IiwiSU9iamVjdCIsIiRhc3NpZ24iLCJhc3NpZ24iLCJBIiwiU3ltYm9sIiwiSyIsImpvaW4iLCJhTGVuIiwiY29uY2F0IiwiaiIsImRQcyIsImVudW1CdWdLZXlzIiwiSUVfUFJPVE8iLCJFbXB0eSIsImNyZWF0ZURpY3QiLCJpZnJhbWUiLCJsdCIsImd0IiwiaWZyYW1lRG9jdW1lbnQiLCJzdHlsZSIsImRpc3BsYXkiLCJhcHBlbmRDaGlsZCIsInNyYyIsImNvbnRlbnRXaW5kb3ciLCJvcGVuIiwid3JpdGUiLCJjbG9zZSIsIlByb3BlcnRpZXMiLCJJRThfRE9NX0RFRklORSIsInRvUHJpbWl0aXZlIiwiQXR0cmlidXRlcyIsImRlZmluZVByb3BlcnRpZXMiLCJnT1BEIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiZ09QTiIsIndpbmRvd05hbWVzIiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsImdldFdpbmRvd05hbWVzIiwiJGtleXMiLCJoaWRkZW5LZXlzIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwiT2JqZWN0UHJvdG8iLCJhcnJheUluZGV4T2YiLCJuYW1lcyIsImlzRW50cmllcyIsIm5ld1Byb21pc2VDYXBhYmlsaXR5IiwieCIsInByb21pc2VDYXBhYmlsaXR5IiwiYml0bWFwIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiU1JDIiwiVE9fU1RSSU5HIiwiJHRvU3RyaW5nIiwiVFBMIiwiaW5zcGVjdFNvdXJjZSIsInZhbCIsImlzRnVuY3Rpb24iLCJjaGVjayIsInRlc3QiLCJidWdneSIsIl9fcHJvdG9fXyIsIlNQRUNJRVMiLCJ0YWciLCJzdGF0Iiwic2hhcmVkIiwidWlkIiwiU0hBUkVEIiwic3RvcmUiLCJtb2RlIiwiY29weXJpZ2h0IiwiRCIsInRvSW50ZWdlciIsInBvcyIsInMiLCJsIiwiY2hhckNvZGVBdCIsImNoYXJBdCIsImludm9rZSIsImh0bWwiLCJjZWwiLCJzZXRUYXNrIiwic2V0SW1tZWRpYXRlIiwiY2xlYXJUYXNrIiwiY2xlYXJJbW1lZGlhdGUiLCJNZXNzYWdlQ2hhbm5lbCIsIkRpc3BhdGNoIiwiY291bnRlciIsInF1ZXVlIiwiT05SRUFEWVNUQVRFQ0hBTkdFIiwiZGVmZXIiLCJjaGFubmVsIiwicG9ydCIsInJ1biIsImxpc3RlbmVyIiwiZXZlbnQiLCJub3ciLCJwb3J0MiIsInBvcnQxIiwib25tZXNzYWdlIiwicG9zdE1lc3NhZ2UiLCJhZGRFdmVudExpc3RlbmVyIiwiaW1wb3J0U2NyaXB0cyIsInJlbW92ZUNoaWxkIiwic2V0VGltZW91dCIsIm1heCIsIm1pbiIsImNlaWwiLCJmbG9vciIsImlzTmFOIiwidmFsdWVPZiIsInB4IiwicmFuZG9tIiwidXNlckFnZW50IiwiVFlQRSIsIndrc0V4dCIsIiRTeW1ib2wiLCJVU0VfU1lNQk9MIiwiJGV4cG9ydHMiLCJjbGFzc29mIiwiZ2V0SXRlcmF0b3JNZXRob2QiLCJjcmVhdGVQcm9wZXJ0eSIsImFycmF5TGlrZSIsIm1hcGZuIiwibWFwcGluZyIsImFkZFRvVW5zY29wYWJsZXMiLCJBcmd1bWVudHMiLCJGUHJvdG8iLCJuYW1lUkUiLCJtYXRjaCIsInN0cm9uZyIsIk1BUCIsIk1hcCIsInNwZWNpZXNDb25zdHJ1Y3RvciIsIm1pY3JvdGFzayIsIm5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlIiwicGVyZm9ybSIsInByb21pc2VSZXNvbHZlIiwiUFJPTUlTRSIsInZlcnNpb25zIiwidjgiLCIkUHJvbWlzZSIsImVtcHR5IiwiSW50ZXJuYWwiLCJuZXdHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkiLCJPd25Qcm9taXNlQ2FwYWJpbGl0eSIsIldyYXBwZXIiLCJVU0VfTkFUSVZFIiwiRmFrZVByb21pc2UiLCJQcm9taXNlUmVqZWN0aW9uRXZlbnQiLCJpbmRleE9mIiwiaXNUaGVuYWJsZSIsImlzUmVqZWN0IiwiX24iLCJjaGFpbiIsIl9jIiwiX3YiLCJvayIsIl9zIiwicmVhY3Rpb24iLCJoYW5kbGVyIiwiZmFpbCIsImV4aXRlZCIsIl9oIiwib25IYW5kbGVVbmhhbmRsZWQiLCJvblVuaGFuZGxlZCIsInVuaGFuZGxlZCIsImlzVW5oYW5kbGVkIiwiY29uc29sZSIsImVtaXQiLCJvbnVuaGFuZGxlZHJlamVjdGlvbiIsInJlYXNvbiIsImVycm9yIiwiX2EiLCJvbnJlamVjdGlvbmhhbmRsZWQiLCIkcmVqZWN0IiwiX2QiLCJfdyIsIiRyZXNvbHZlIiwiZXhlY3V0b3IiLCJlcnIiLCJvbkZ1bGZpbGxlZCIsIm9uUmVqZWN0ZWQiLCJjYXBhYmlsaXR5IiwiYWxsIiwicmVtYWluaW5nIiwiJGluZGV4IiwiYWxyZWFkeUNhbGxlZCIsInJhY2UiLCJmbGFncyIsIlNQTElUIiwiJHNwbGl0IiwiX3NwbGl0IiwiJHB1c2giLCIkU1BMSVQiLCJMRU5HVEgiLCJMQVNUX0lOREVYIiwiTlBDRyIsInNlcGFyYXRvciIsImxpbWl0Iiwib3V0cHV0IiwibGFzdExhc3RJbmRleCIsInNwbGl0TGltaXQiLCJzZXBhcmF0b3JDb3B5Iiwic2VwYXJhdG9yMiIsImxhc3RJbmRleCIsImxhc3RMZW5ndGgiLCJyZXBsYWNlIiwiJGZsYWdzIiwiZGVmaW5lIiwiJGF0IiwicG9pbnQiLCIkZmFpbHMiLCJ3a3NEZWZpbmUiLCJlbnVtS2V5cyIsIl9jcmVhdGUiLCJnT1BORXh0IiwiJEdPUEQiLCIkRFAiLCIkSlNPTiIsIkpTT04iLCJfc3RyaW5naWZ5Iiwic3RyaW5naWZ5IiwiSElEREVOIiwiVE9fUFJJTUlUSVZFIiwiU3ltYm9sUmVnaXN0cnkiLCJBbGxTeW1ib2xzIiwiT1BTeW1ib2xzIiwiUU9iamVjdCIsInNldHRlciIsImZpbmRDaGlsZCIsInNldFN5bWJvbERlc2MiLCJwcm90b0Rlc2MiLCJ3cmFwIiwic3ltIiwiaXNTeW1ib2wiLCIkZGVmaW5lUHJvcGVydGllcyIsIiRjcmVhdGUiLCIkcHJvcGVydHlJc0VudW1lcmFibGUiLCJFIiwiJGdldE93blByb3BlcnR5RGVzY3JpcHRvciIsIiRnZXRPd25Qcm9wZXJ0eU5hbWVzIiwiJGdldE93blByb3BlcnR5U3ltYm9scyIsIklTX09QIiwiJHNldCIsImVzNlN5bWJvbHMiLCJ3ZWxsS25vd25TeW1ib2xzIiwia2V5Rm9yIiwidXNlU2V0dGVyIiwidXNlU2ltcGxlIiwicmVwbGFjZXIiLCIkcmVwbGFjZXIiLCIkaXRlcmF0b3JzIiwiVE9fU1RSSU5HX1RBRyIsIkFycmF5VmFsdWVzIiwiRE9NSXRlcmFibGVzIiwiQ1NTUnVsZUxpc3QiLCJDU1NTdHlsZURlY2xhcmF0aW9uIiwiQ1NTVmFsdWVMaXN0IiwiQ2xpZW50UmVjdExpc3QiLCJET01SZWN0TGlzdCIsIkRPTVN0cmluZ0xpc3QiLCJET01Ub2tlbkxpc3QiLCJEYXRhVHJhbnNmZXJJdGVtTGlzdCIsIkZpbGVMaXN0IiwiSFRNTEFsbENvbGxlY3Rpb24iLCJIVE1MQ29sbGVjdGlvbiIsIkhUTUxGb3JtRWxlbWVudCIsIkhUTUxTZWxlY3RFbGVtZW50IiwiTWVkaWFMaXN0IiwiTWltZVR5cGVBcnJheSIsIk5hbWVkTm9kZU1hcCIsIk5vZGVMaXN0IiwiUGFpbnRSZXF1ZXN0TGlzdCIsIlBsdWdpbiIsIlBsdWdpbkFycmF5IiwiU1ZHTGVuZ3RoTGlzdCIsIlNWR051bWJlckxpc3QiLCJTVkdQYXRoU2VnTGlzdCIsIlNWR1BvaW50TGlzdCIsIlNWR1N0cmluZ0xpc3QiLCJTVkdUcmFuc2Zvcm1MaXN0IiwiU291cmNlQnVmZmVyTGlzdCIsIlN0eWxlU2hlZXRMaXN0IiwiVGV4dFRyYWNrQ3VlTGlzdCIsIlRleHRUcmFja0xpc3QiLCJUb3VjaExpc3QiLCJjb2xsZWN0aW9ucyIsImV4cGxpY2l0IiwiQ29sbGVjdGlvbiIsIlNpZWJlbEFwcEZhY2FkZSIsIk4xOUhlbHBlciIsInNldHRpbmdzIiwiYXBwbGV0TmFtZSIsImFwcGxldCIsIlNpZWJlbEFwcCIsIlNfQXBwIiwiR2V0QWN0aXZlVmlldyIsIkdldEFwcGxldCIsIkVycm9yIiwicG0iLCJHZXRQTW9kZWwiLCJsb2ciLCJuMTlwb3B1cENvbnRyb2xsZXIiLCJOMTlwb3B1cENvbnRyb2xsZXIiLCJjbG9zZVBvcHVwQXBwbGV0IiwiY2IiLCJjYW5PcGVuUG9wdXAiLCJ2aWV3IiwiU2V0QWN0aXZlQXBwbGV0SW50ZXJuYWwiLCJfc2V0QWN0aXZlQ29udHJvbCIsInNob3dQb3B1cEFwcGxldCIsIl9zaG93UG9wdXBBcHBsZXQiLCJjb250cm9sTmFtZSIsImlzTGlzdEFwcGxldCIsImdldFNlbGVjdGlvbiIsIkV4ZWN1dGVNZXRob2QiLCJ0YXJnZXRWaWV3TmFtZSIsInRhcmdldEFwcGxldE5hbWUiLCJyb3dJZCIsImdldEN1cnJlbnRSZWNvcmQiLCJJZCIsIlNXRUNtZCIsImVuY29kZVVSSSIsIkdvdG9WaWV3IiwicG9wdXBQTSIsIkdldFBvcHVwUE0iLCJJbml0IiwiU2V0dXAiLCJOMTliYXNlQXBwbGV0IiwiY29uc3RzIiwiU2llYmVsSlMiLCJEZXBlbmRlbmN5IiwiR2V0IiwiR2V0QXBwbGV0TWFwIiwiR2V0TGlzdE9mQ29sdW1ucyIsInJlcXVpcmVkIiwibG92IiwidG9rZW4iLCJzdWJzY3JpYmVycyIsImJjSWQiLCJHZXRCQ0lkIiwiQXR0YWNoTm90aWZpY2F0aW9uSGFuZGxlciIsInByb3BTZXQiLCJHZXRQcm9wZXJ0eSIsImZ1bmMiLCJhcHBsZXRJZCIsImFwcGxldElucHV0cyIsImdldEVsZW1lbnRCeUlkIiwicXVlcnlTZWxlY3RvckFsbCIsImF0dHJpYnV0ZXMiLCJub2RlVmFsdWUiLCJ2aWV3TmFtZSIsIkdldE5hbWUiLCJDQ0ZNaXNjVXRpbF9TdHJpbmdUb0FycmF5Iiwid2FybiIsInNwbGljZSIsImZpbHRlciIsIkdldENvbnRyb2wiLCJHZXRDb250cm9scyIsImlucHV0TmFtZSIsIlNldEFjdGl2ZUNvbnRyb2wiLCJfZ2V0Q29udHJvbCIsImNvbnRyb2xVaVR5cGUiLCJtZXRob2QiLCJjYW5JbnZva2VNZXRob2QiLCJjb250cm9scyIsImFwcGxldENvbnRyb2xzIiwiX3JldHVybkNvbnRyb2xzIiwiY29udHJvbCIsIkdldFVJVHlwZSIsIl9pc1NraXBDb250cm9sIiwiY29udHJvbElucHV0TmFtZSIsIkdldElucHV0TmFtZSIsIm9iaiIsImxhYmVsIiwiR2V0RGlzcGxheU5hbWUiLCJ1aVR5cGUiLCJfaXNSZXF1aXJlZCIsImJvdW5kZWRQaWNrIiwiSXNCb3VuZGVkUGljayIsInN0YXRpY1BpY2siLCJJc1N0YXRpY0JvdW5kZWQiLCJpc1Bvc3RDaGFuZ2VzIiwiSXNQb3N0Q2hhbmdlcyIsIm1heFNpemUiLCJHZXRNYXhTaXplIiwiZmllbGROYW1lIiwiR2V0RmllbGROYW1lIiwiaXNMaW5rIiwicmVhZE9ubHkiLCJHZXRSZW5kZXJlciIsIkdldENvbHVtbkhlbHBlciIsIkdldEFjdHVhbENvbnRyb2xOYW1lIiwic3RhdGljTE9WIiwiR2V0U3RhdGljTE9WIiwiR2V0UmFkaW9Hcm91cFByb3BTZXQiLCJjaGlsZEFycmF5IiwibG92cyIsInJlZHVjZSIsImFjYyIsImxpYyIsIkZpZWxkVmFsdWUiLCJEaXNwbGF5TmFtZSIsImFkZFJlY29yZEluZGV4IiwibWFwIiwiX2luZHgiLCJfbmF2aWdhdGUiLCJnZXRSb3dMaXN0Um93Q291bnQiLCJwb3NpdGlvbk9uUm93IiwiX25ld1JlY29yZCIsImFzeW5jIiwiY2JlcnIiLCJfd3JpdGVSZWNvcmQiLCJjYXRjaCIsIl9nZXRWYWx1ZUZvckNvbnRyb2wiLCJPbkNvbnRyb2xFdmVudCIsImlzU3RhdGljIiwiaXNTdGF0aWNQaWNrIiwiX3ZhbGlkYXRlUGlja0NvbnRyb2wiLCJwcyIsIk5ld1Byb3BlcnR5U2V0IiwiU2V0UHJvcGVydHkiLCJJbnZva2VNZXRob2QiLCJzb3J0IiwiX2NvbnRyb2xzIiwicmF3IiwiYmMiLCJHZXRCdXNDb21wIiwiSXNJblF1ZXJ5U3RhdGUiLCJJc0luc2VydFBlbmRpbmciLCJJc0NvbW1pdFBlbmRpbmciLCJfbWV0aG9kcyIsInN0YXRlIiwiY2FsY3VsYXRlQ3VycmVudFJlY29yZFN0YXRlIiwiZ2V0UmVjb3JkU2V0IiwiZ2V0UmF3UmVjb3JkU2V0IiwiX2dldENvbnRyb2xWYWx1ZSIsInJlYWRvbmx5IiwiZXhwciIsIlNldEZpZWxkVmFsdWUiLCJfcXVlcnlCeUlkIiwiX25ld1F1ZXJ5IiwiYWkiLCJzY29wZSIsIm1hc2siLCJzZWxmYnVzeSIsInBzT3V0cHV0IiwicHNJbnB1dCIsIl9nZXRDb250cm9sSW5wdXROYW1lRm9ySWRRdWVyeSIsIkNsb25lIiwiQ2FsbFNlcnZlckFwcGxldCIsInBhcmFtcyIsIl9xdWVyeSIsImlkcyIsImZpZWxkcyIsInVzZUFjdGl2ZUJPIiwiX2dldE1WRiIsInBzSW5wdXRzIiwiR2V0QWN0aXZlQnVzT2JqIiwiU2V0VHlwZSIsIl9nZXRGaWVsZE5hbWVGb3JDb250cm9sIiwiQWRkQ2hpbGQiLCJicyIsIkdldFNlcnZpY2UiLCJlcnJjYiIsIm1ldGhvZE5hbWUiLCJJbnB1dHMiLCJwc091dHB1dHMiLCJib29sT2JqZWN0IiwiRGF0dW1Cb29sT2JqZWN0IiwiR2V0Q2hpbGRCeVR5cGUiLCJHZXRUeXBlIiwicmVjIiwicHJpbWFyeSIsInByb3BBcnJheSIsIlNldEFzU3RyaW5nIiwiR2V0VmFsdWUiLCJhbW91bnQiLCJzaXplIiwidGVtcCIsIm5leHRSZWNvcmRTZXQiLCJoYXNOZXh0IiwiZmllbGRUb0NvbnRyb2xNYXAiLCJmaWVsZCIsImdldEZpZWxkVG9Db250cm9sTWFwIiwic2VydmljZSIsImluUHJvcFNldCIsIk4xOXBvcHVwQXBwbGV0IiwicmVzaXplIiwiR2V0U2VsZWN0ZWRSb3ciLCJzaW5nbGV0b24iLCJzaW5nbGV0b25FbmZvcmNlciIsImVuZm9yY2VyIiwiaXNQb3B1cEhpZGRlbiIsInJlc29sdmVQcm9taXNlIiwicG9wdXBBcHBsZXROMTkiLCJhc3NvY0FwcGxldE4xOSIsIk4xOXByb2Nlc3NOZXdQb3B1cCIsIlByb2Nlc3NOZXdQb3B1cCIsInByb2Nlc3NOZXdQb3B1cCIsIk4xOXZpZXdMb2FkZWQiLCJjb250ZW50VXBkYXRlciIsInZpZXdMb2FkZWQiLCJJc1BvcHVwT3BlbiIsIkdldFBvcHVwQXBwbGV0IiwiYXNzb2NBcHBsZXQiLCJTZXRTaG93TmV3UGFnZSIsImFjdGl2ZVZpZXciLCJhY3RpdmVBcHBsZXQiLCJHZXRBY3RpdmVBcHBsZXQiLCJTZXRBY3RpdmVBcHBsZXRCZWZvcmVQb3B1cCIsIkFkZFByb3BlcnR5IiwidXJsIiwiR2V0UGFnZVVSTCIsImlzUG9wdXBBcHBsZXQiLCJHZXRQb3B1cEFwcGxldE5hbWUiLCJpc1BpY2tBcHBsZXQiLCJHZXRQaWNrQXBwbGV0TmFtZSIsImlzT3BlbiIsImN1cnJQb3B1cHMiLCJHZXRQb3B1cENvbnRyb2wiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7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Y0osa0JBQXJCLEtBQTRDLFVBQWhELEVBQTREO0FBQzFELG1CQUFPO0FBQUVHLG9CQUFNLEVBQUUsSUFBVjtBQUFnQmxPLHdCQUFVLEVBQUVtTyxVQUFVLENBQUM3c0IsQ0FBRCxDQUFWLENBQWNzaUIsT0FBZCxFQUE1QjtBQUFxRHhDLHlCQUFXLEVBQUUrTSxVQUFVLENBQUM3c0IsQ0FBRCxDQUFWLENBQWM4c0IsZUFBZDtBQUFsRSxhQUFQO0FBQ0Q7QUFDRjs7QUFDRCxjQUFNLElBQUk5TixLQUFKLENBQVUsNEJBQVYsQ0FBTjtBQUNELE9BbkJrQixDQW9CbkI7QUFDQTs7O0FBQ0EsWUFBTSxJQUFJQSxLQUFKLENBQVUsdUJBQVYsQ0FBTjtBQUNELEssQ0FFRDtBQUNBO0FBQ0E7QUFDQTs7OzttQ0FFc0JOLFUsRUFBWTtBQUNoQyxVQUFNQyxNQUFNLEdBQUdDLFNBQVMsQ0FBQ0MsS0FBVixDQUFnQkMsYUFBaEIsR0FBZ0NxQyxZQUFoQyxHQUErQ3pDLFVBQS9DLENBQWY7O0FBQ0EsVUFBSSxDQUFDQyxNQUFMLEVBQWE7QUFDWCxjQUFNLElBQUlLLEtBQUosZUFBaUJOLFVBQWpCLGlDQUFOO0FBQ0Q7O0FBQ0QsYUFBT0MsTUFBUDtBQUNEIiwiZmlsZSI6Ik4xOUhlbHBlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICh0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJykgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsIi8vIDIyLjEuMy4zMSBBcnJheS5wcm90b3R5cGVbQEB1bnNjb3BhYmxlc11cbnZhciBVTlNDT1BBQkxFUyA9IHJlcXVpcmUoJy4vX3drcycpKCd1bnNjb3BhYmxlcycpO1xudmFyIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5pZiAoQXJyYXlQcm90b1tVTlNDT1BBQkxFU10gPT0gdW5kZWZpbmVkKSByZXF1aXJlKCcuL19oaWRlJykoQXJyYXlQcm90bywgVU5TQ09QQUJMRVMsIHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICBBcnJheVByb3RvW1VOU0NPUEFCTEVTXVtrZXldID0gdHJ1ZTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgQ29uc3RydWN0b3IsIG5hbWUsIGZvcmJpZGRlbkZpZWxkKSB7XG4gIGlmICghKGl0IGluc3RhbmNlb2YgQ29uc3RydWN0b3IpIHx8IChmb3JiaWRkZW5GaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZvcmJpZGRlbkZpZWxkIGluIGl0KSkge1xuICAgIHRocm93IFR5cGVFcnJvcihuYW1lICsgJzogaW5jb3JyZWN0IGludm9jYXRpb24hJyk7XG4gIH0gcmV0dXJuIGl0O1xufTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsIi8vIGZhbHNlIC0+IEFycmF5I2luZGV4T2Zcbi8vIHRydWUgIC0+IEFycmF5I2luY2x1ZGVzXG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi9fdG8tYWJzb2x1dGUtaW5kZXgnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKElTX0lOQ0xVREVTKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIGVsLCBmcm9tSW5kZXgpIHtcbiAgICB2YXIgTyA9IHRvSU9iamVjdCgkdGhpcyk7XG4gICAgdmFyIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICB2YXIgaW5kZXggPSB0b0Fic29sdXRlSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpO1xuICAgIHZhciB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgIGlmIChJU19JTkNMVURFUyAmJiBlbCAhPSBlbCkgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSB7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgICBpZiAodmFsdWUgIT0gdmFsdWUpIHJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I2luZGV4T2YgaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIGlmIChJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKSB7XG4gICAgICBpZiAoT1tpbmRleF0gPT09IGVsKSByZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59O1xuIiwiLy8gZ2V0dGluZyB0YWcgZnJvbSAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbnZhciBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcbi8vIEVTMyB3cm9uZyBoZXJlXG52YXIgQVJHID0gY29mKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA9PSAnQXJndW1lbnRzJztcblxuLy8gZmFsbGJhY2sgZm9yIElFMTEgU2NyaXB0IEFjY2VzcyBEZW5pZWQgZXJyb3JcbnZhciB0cnlHZXQgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICB0cnkge1xuICAgIHJldHVybiBpdFtrZXldO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBPLCBULCBCO1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDogaXQgPT09IG51bGwgPyAnTnVsbCdcbiAgICAvLyBAQHRvU3RyaW5nVGFnIGNhc2VcbiAgICA6IHR5cGVvZiAoVCA9IHRyeUdldChPID0gT2JqZWN0KGl0KSwgVEFHKSkgPT0gJ3N0cmluZycgPyBUXG4gICAgLy8gYnVpbHRpblRhZyBjYXNlXG4gICAgOiBBUkcgPyBjb2YoTylcbiAgICAvLyBFUzMgYXJndW1lbnRzIGZhbGxiYWNrXG4gICAgOiAoQiA9IGNvZihPKSkgPT0gJ09iamVjdCcgJiYgdHlwZW9mIE8uY2FsbGVlID09ICdmdW5jdGlvbicgPyAnQXJndW1lbnRzJyA6IEI7XG59O1xuIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJyk7XG52YXIgcmVkZWZpbmVBbGwgPSByZXF1aXJlKCcuL19yZWRlZmluZS1hbGwnKTtcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBhbkluc3RhbmNlID0gcmVxdWlyZSgnLi9fYW4taW5zdGFuY2UnKTtcbnZhciBmb3JPZiA9IHJlcXVpcmUoJy4vX2Zvci1vZicpO1xudmFyICRpdGVyRGVmaW5lID0gcmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKTtcbnZhciBzdGVwID0gcmVxdWlyZSgnLi9faXRlci1zdGVwJyk7XG52YXIgc2V0U3BlY2llcyA9IHJlcXVpcmUoJy4vX3NldC1zcGVjaWVzJyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpO1xudmFyIGZhc3RLZXkgPSByZXF1aXJlKCcuL19tZXRhJykuZmFzdEtleTtcbnZhciB2YWxpZGF0ZSA9IHJlcXVpcmUoJy4vX3ZhbGlkYXRlLWNvbGxlY3Rpb24nKTtcbnZhciBTSVpFID0gREVTQ1JJUFRPUlMgPyAnX3MnIDogJ3NpemUnO1xuXG52YXIgZ2V0RW50cnkgPSBmdW5jdGlvbiAodGhhdCwga2V5KSB7XG4gIC8vIGZhc3QgY2FzZVxuICB2YXIgaW5kZXggPSBmYXN0S2V5KGtleSk7XG4gIHZhciBlbnRyeTtcbiAgaWYgKGluZGV4ICE9PSAnRicpIHJldHVybiB0aGF0Ll9pW2luZGV4XTtcbiAgLy8gZnJvemVuIG9iamVjdCBjYXNlXG4gIGZvciAoZW50cnkgPSB0aGF0Ll9mOyBlbnRyeTsgZW50cnkgPSBlbnRyeS5uKSB7XG4gICAgaWYgKGVudHJ5LmsgPT0ga2V5KSByZXR1cm4gZW50cnk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBnZXRDb25zdHJ1Y3RvcjogZnVuY3Rpb24gKHdyYXBwZXIsIE5BTUUsIElTX01BUCwgQURERVIpIHtcbiAgICB2YXIgQyA9IHdyYXBwZXIoZnVuY3Rpb24gKHRoYXQsIGl0ZXJhYmxlKSB7XG4gICAgICBhbkluc3RhbmNlKHRoYXQsIEMsIE5BTUUsICdfaScpO1xuICAgICAgdGhhdC5fdCA9IE5BTUU7ICAgICAgICAgLy8gY29sbGVjdGlvbiB0eXBlXG4gICAgICB0aGF0Ll9pID0gY3JlYXRlKG51bGwpOyAvLyBpbmRleFxuICAgICAgdGhhdC5fZiA9IHVuZGVmaW5lZDsgICAgLy8gZmlyc3QgZW50cnlcbiAgICAgIHRoYXQuX2wgPSB1bmRlZmluZWQ7ICAgIC8vIGxhc3QgZW50cnlcbiAgICAgIHRoYXRbU0laRV0gPSAwOyAgICAgICAgIC8vIHNpemVcbiAgICAgIGlmIChpdGVyYWJsZSAhPSB1bmRlZmluZWQpIGZvck9mKGl0ZXJhYmxlLCBJU19NQVAsIHRoYXRbQURERVJdLCB0aGF0KTtcbiAgICB9KTtcbiAgICByZWRlZmluZUFsbChDLnByb3RvdHlwZSwge1xuICAgICAgLy8gMjMuMS4zLjEgTWFwLnByb3RvdHlwZS5jbGVhcigpXG4gICAgICAvLyAyMy4yLjMuMiBTZXQucHJvdG90eXBlLmNsZWFyKClcbiAgICAgIGNsZWFyOiBmdW5jdGlvbiBjbGVhcigpIHtcbiAgICAgICAgZm9yICh2YXIgdGhhdCA9IHZhbGlkYXRlKHRoaXMsIE5BTUUpLCBkYXRhID0gdGhhdC5faSwgZW50cnkgPSB0aGF0Ll9mOyBlbnRyeTsgZW50cnkgPSBlbnRyeS5uKSB7XG4gICAgICAgICAgZW50cnkuciA9IHRydWU7XG4gICAgICAgICAgaWYgKGVudHJ5LnApIGVudHJ5LnAgPSBlbnRyeS5wLm4gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgZGVsZXRlIGRhdGFbZW50cnkuaV07XG4gICAgICAgIH1cbiAgICAgICAgdGhhdC5fZiA9IHRoYXQuX2wgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoYXRbU0laRV0gPSAwO1xuICAgICAgfSxcbiAgICAgIC8vIDIzLjEuMy4zIE1hcC5wcm90b3R5cGUuZGVsZXRlKGtleSlcbiAgICAgIC8vIDIzLjIuMy40IFNldC5wcm90b3R5cGUuZGVsZXRlKHZhbHVlKVxuICAgICAgJ2RlbGV0ZSc6IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdmFyIHRoYXQgPSB2YWxpZGF0ZSh0aGlzLCBOQU1FKTtcbiAgICAgICAgdmFyIGVudHJ5ID0gZ2V0RW50cnkodGhhdCwga2V5KTtcbiAgICAgICAgaWYgKGVudHJ5KSB7XG4gICAgICAgICAgdmFyIG5leHQgPSBlbnRyeS5uO1xuICAgICAgICAgIHZhciBwcmV2ID0gZW50cnkucDtcbiAgICAgICAgICBkZWxldGUgdGhhdC5faVtlbnRyeS5pXTtcbiAgICAgICAgICBlbnRyeS5yID0gdHJ1ZTtcbiAgICAgICAgICBpZiAocHJldikgcHJldi5uID0gbmV4dDtcbiAgICAgICAgICBpZiAobmV4dCkgbmV4dC5wID0gcHJldjtcbiAgICAgICAgICBpZiAodGhhdC5fZiA9PSBlbnRyeSkgdGhhdC5fZiA9IG5leHQ7XG4gICAgICAgICAgaWYgKHRoYXQuX2wgPT0gZW50cnkpIHRoYXQuX2wgPSBwcmV2O1xuICAgICAgICAgIHRoYXRbU0laRV0tLTtcbiAgICAgICAgfSByZXR1cm4gISFlbnRyeTtcbiAgICAgIH0sXG4gICAgICAvLyAyMy4yLjMuNiBTZXQucHJvdG90eXBlLmZvckVhY2goY2FsbGJhY2tmbiwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbiAgICAgIC8vIDIzLjEuMy41IE1hcC5wcm90b3R5cGUuZm9yRWFjaChjYWxsYmFja2ZuLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxuICAgICAgZm9yRWFjaDogZnVuY3Rpb24gZm9yRWFjaChjYWxsYmFja2ZuIC8qICwgdGhhdCA9IHVuZGVmaW5lZCAqLykge1xuICAgICAgICB2YWxpZGF0ZSh0aGlzLCBOQU1FKTtcbiAgICAgICAgdmFyIGYgPSBjdHgoY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQsIDMpO1xuICAgICAgICB2YXIgZW50cnk7XG4gICAgICAgIHdoaWxlIChlbnRyeSA9IGVudHJ5ID8gZW50cnkubiA6IHRoaXMuX2YpIHtcbiAgICAgICAgICBmKGVudHJ5LnYsIGVudHJ5LmssIHRoaXMpO1xuICAgICAgICAgIC8vIHJldmVydCB0byB0aGUgbGFzdCBleGlzdGluZyBlbnRyeVxuICAgICAgICAgIHdoaWxlIChlbnRyeSAmJiBlbnRyeS5yKSBlbnRyeSA9IGVudHJ5LnA7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvLyAyMy4xLjMuNyBNYXAucHJvdG90eXBlLmhhcyhrZXkpXG4gICAgICAvLyAyMy4yLjMuNyBTZXQucHJvdG90eXBlLmhhcyh2YWx1ZSlcbiAgICAgIGhhczogZnVuY3Rpb24gaGFzKGtleSkge1xuICAgICAgICByZXR1cm4gISFnZXRFbnRyeSh2YWxpZGF0ZSh0aGlzLCBOQU1FKSwga2V5KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoREVTQ1JJUFRPUlMpIGRQKEMucHJvdG90eXBlLCAnc2l6ZScsIHtcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdmFsaWRhdGUodGhpcywgTkFNRSlbU0laRV07XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIEM7XG4gIH0sXG4gIGRlZjogZnVuY3Rpb24gKHRoYXQsIGtleSwgdmFsdWUpIHtcbiAgICB2YXIgZW50cnkgPSBnZXRFbnRyeSh0aGF0LCBrZXkpO1xuICAgIHZhciBwcmV2LCBpbmRleDtcbiAgICAvLyBjaGFuZ2UgZXhpc3RpbmcgZW50cnlcbiAgICBpZiAoZW50cnkpIHtcbiAgICAgIGVudHJ5LnYgPSB2YWx1ZTtcbiAgICAvLyBjcmVhdGUgbmV3IGVudHJ5XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoYXQuX2wgPSBlbnRyeSA9IHtcbiAgICAgICAgaTogaW5kZXggPSBmYXN0S2V5KGtleSwgdHJ1ZSksIC8vIDwtIGluZGV4XG4gICAgICAgIGs6IGtleSwgICAgICAgICAgICAgICAgICAgICAgICAvLyA8LSBrZXlcbiAgICAgICAgdjogdmFsdWUsICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIHZhbHVlXG4gICAgICAgIHA6IHByZXYgPSB0aGF0Ll9sLCAgICAgICAgICAgICAvLyA8LSBwcmV2aW91cyBlbnRyeVxuICAgICAgICBuOiB1bmRlZmluZWQsICAgICAgICAgICAgICAgICAgLy8gPC0gbmV4dCBlbnRyeVxuICAgICAgICByOiBmYWxzZSAgICAgICAgICAgICAgICAgICAgICAgLy8gPC0gcmVtb3ZlZFxuICAgICAgfTtcbiAgICAgIGlmICghdGhhdC5fZikgdGhhdC5fZiA9IGVudHJ5O1xuICAgICAgaWYgKHByZXYpIHByZXYubiA9IGVudHJ5O1xuICAgICAgdGhhdFtTSVpFXSsrO1xuICAgICAgLy8gYWRkIHRvIGluZGV4XG4gICAgICBpZiAoaW5kZXggIT09ICdGJykgdGhhdC5faVtpbmRleF0gPSBlbnRyeTtcbiAgICB9IHJldHVybiB0aGF0O1xuICB9LFxuICBnZXRFbnRyeTogZ2V0RW50cnksXG4gIHNldFN0cm9uZzogZnVuY3Rpb24gKEMsIE5BTUUsIElTX01BUCkge1xuICAgIC8vIGFkZCAua2V5cywgLnZhbHVlcywgLmVudHJpZXMsIFtAQGl0ZXJhdG9yXVxuICAgIC8vIDIzLjEuMy40LCAyMy4xLjMuOCwgMjMuMS4zLjExLCAyMy4xLjMuMTIsIDIzLjIuMy41LCAyMy4yLjMuOCwgMjMuMi4zLjEwLCAyMy4yLjMuMTFcbiAgICAkaXRlckRlZmluZShDLCBOQU1FLCBmdW5jdGlvbiAoaXRlcmF0ZWQsIGtpbmQpIHtcbiAgICAgIHRoaXMuX3QgPSB2YWxpZGF0ZShpdGVyYXRlZCwgTkFNRSk7IC8vIHRhcmdldFxuICAgICAgdGhpcy5fayA9IGtpbmQ7ICAgICAgICAgICAgICAgICAgICAgLy8ga2luZFxuICAgICAgdGhpcy5fbCA9IHVuZGVmaW5lZDsgICAgICAgICAgICAgICAgLy8gcHJldmlvdXNcbiAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgICB2YXIga2luZCA9IHRoYXQuX2s7XG4gICAgICB2YXIgZW50cnkgPSB0aGF0Ll9sO1xuICAgICAgLy8gcmV2ZXJ0IHRvIHRoZSBsYXN0IGV4aXN0aW5nIGVudHJ5XG4gICAgICB3aGlsZSAoZW50cnkgJiYgZW50cnkucikgZW50cnkgPSBlbnRyeS5wO1xuICAgICAgLy8gZ2V0IG5leHQgZW50cnlcbiAgICAgIGlmICghdGhhdC5fdCB8fCAhKHRoYXQuX2wgPSBlbnRyeSA9IGVudHJ5ID8gZW50cnkubiA6IHRoYXQuX3QuX2YpKSB7XG4gICAgICAgIC8vIG9yIGZpbmlzaCB0aGUgaXRlcmF0aW9uXG4gICAgICAgIHRoYXQuX3QgPSB1bmRlZmluZWQ7XG4gICAgICAgIHJldHVybiBzdGVwKDEpO1xuICAgICAgfVxuICAgICAgLy8gcmV0dXJuIHN0ZXAgYnkga2luZFxuICAgICAgaWYgKGtpbmQgPT0gJ2tleXMnKSByZXR1cm4gc3RlcCgwLCBlbnRyeS5rKTtcbiAgICAgIGlmIChraW5kID09ICd2YWx1ZXMnKSByZXR1cm4gc3RlcCgwLCBlbnRyeS52KTtcbiAgICAgIHJldHVybiBzdGVwKDAsIFtlbnRyeS5rLCBlbnRyeS52XSk7XG4gICAgfSwgSVNfTUFQID8gJ2VudHJpZXMnIDogJ3ZhbHVlcycsICFJU19NQVAsIHRydWUpO1xuXG4gICAgLy8gYWRkIFtAQHNwZWNpZXNdLCAyMy4xLjIuMiwgMjMuMi4yLjJcbiAgICBzZXRTcGVjaWVzKE5BTUUpO1xuICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgcmVkZWZpbmVBbGwgPSByZXF1aXJlKCcuL19yZWRlZmluZS1hbGwnKTtcbnZhciBtZXRhID0gcmVxdWlyZSgnLi9fbWV0YScpO1xudmFyIGZvck9mID0gcmVxdWlyZSgnLi9fZm9yLW9mJyk7XG52YXIgYW5JbnN0YW5jZSA9IHJlcXVpcmUoJy4vX2FuLWluc3RhbmNlJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG52YXIgJGl0ZXJEZXRlY3QgPSByZXF1aXJlKCcuL19pdGVyLWRldGVjdCcpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBpbmhlcml0SWZSZXF1aXJlZCA9IHJlcXVpcmUoJy4vX2luaGVyaXQtaWYtcmVxdWlyZWQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTkFNRSwgd3JhcHBlciwgbWV0aG9kcywgY29tbW9uLCBJU19NQVAsIElTX1dFQUspIHtcbiAgdmFyIEJhc2UgPSBnbG9iYWxbTkFNRV07XG4gIHZhciBDID0gQmFzZTtcbiAgdmFyIEFEREVSID0gSVNfTUFQID8gJ3NldCcgOiAnYWRkJztcbiAgdmFyIHByb3RvID0gQyAmJiBDLnByb3RvdHlwZTtcbiAgdmFyIE8gPSB7fTtcbiAgdmFyIGZpeE1ldGhvZCA9IGZ1bmN0aW9uIChLRVkpIHtcbiAgICB2YXIgZm4gPSBwcm90b1tLRVldO1xuICAgIHJlZGVmaW5lKHByb3RvLCBLRVksXG4gICAgICBLRVkgPT0gJ2RlbGV0ZScgPyBmdW5jdGlvbiAoYSkge1xuICAgICAgICByZXR1cm4gSVNfV0VBSyAmJiAhaXNPYmplY3QoYSkgPyBmYWxzZSA6IGZuLmNhbGwodGhpcywgYSA9PT0gMCA/IDAgOiBhKTtcbiAgICAgIH0gOiBLRVkgPT0gJ2hhcycgPyBmdW5jdGlvbiBoYXMoYSkge1xuICAgICAgICByZXR1cm4gSVNfV0VBSyAmJiAhaXNPYmplY3QoYSkgPyBmYWxzZSA6IGZuLmNhbGwodGhpcywgYSA9PT0gMCA/IDAgOiBhKTtcbiAgICAgIH0gOiBLRVkgPT0gJ2dldCcgPyBmdW5jdGlvbiBnZXQoYSkge1xuICAgICAgICByZXR1cm4gSVNfV0VBSyAmJiAhaXNPYmplY3QoYSkgPyB1bmRlZmluZWQgOiBmbi5jYWxsKHRoaXMsIGEgPT09IDAgPyAwIDogYSk7XG4gICAgICB9IDogS0VZID09ICdhZGQnID8gZnVuY3Rpb24gYWRkKGEpIHsgZm4uY2FsbCh0aGlzLCBhID09PSAwID8gMCA6IGEpOyByZXR1cm4gdGhpczsgfVxuICAgICAgICA6IGZ1bmN0aW9uIHNldChhLCBiKSB7IGZuLmNhbGwodGhpcywgYSA9PT0gMCA/IDAgOiBhLCBiKTsgcmV0dXJuIHRoaXM7IH1cbiAgICApO1xuICB9O1xuICBpZiAodHlwZW9mIEMgIT0gJ2Z1bmN0aW9uJyB8fCAhKElTX1dFQUsgfHwgcHJvdG8uZm9yRWFjaCAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIG5ldyBDKCkuZW50cmllcygpLm5leHQoKTtcbiAgfSkpKSB7XG4gICAgLy8gY3JlYXRlIGNvbGxlY3Rpb24gY29uc3RydWN0b3JcbiAgICBDID0gY29tbW9uLmdldENvbnN0cnVjdG9yKHdyYXBwZXIsIE5BTUUsIElTX01BUCwgQURERVIpO1xuICAgIHJlZGVmaW5lQWxsKEMucHJvdG90eXBlLCBtZXRob2RzKTtcbiAgICBtZXRhLk5FRUQgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHZhciBpbnN0YW5jZSA9IG5ldyBDKCk7XG4gICAgLy8gZWFybHkgaW1wbGVtZW50YXRpb25zIG5vdCBzdXBwb3J0cyBjaGFpbmluZ1xuICAgIHZhciBIQVNOVF9DSEFJTklORyA9IGluc3RhbmNlW0FEREVSXShJU19XRUFLID8ge30gOiAtMCwgMSkgIT0gaW5zdGFuY2U7XG4gICAgLy8gVjggfiAgQ2hyb21pdW0gNDAtIHdlYWstY29sbGVjdGlvbnMgdGhyb3dzIG9uIHByaW1pdGl2ZXMsIGJ1dCBzaG91bGQgcmV0dXJuIGZhbHNlXG4gICAgdmFyIFRIUk9XU19PTl9QUklNSVRJVkVTID0gZmFpbHMoZnVuY3Rpb24gKCkgeyBpbnN0YW5jZS5oYXMoMSk7IH0pO1xuICAgIC8vIG1vc3QgZWFybHkgaW1wbGVtZW50YXRpb25zIGRvZXNuJ3Qgc3VwcG9ydHMgaXRlcmFibGVzLCBtb3N0IG1vZGVybiAtIG5vdCBjbG9zZSBpdCBjb3JyZWN0bHlcbiAgICB2YXIgQUNDRVBUX0lURVJBQkxFUyA9ICRpdGVyRGV0ZWN0KGZ1bmN0aW9uIChpdGVyKSB7IG5ldyBDKGl0ZXIpOyB9KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXdcbiAgICAvLyBmb3IgZWFybHkgaW1wbGVtZW50YXRpb25zIC0wIGFuZCArMCBub3QgdGhlIHNhbWVcbiAgICB2YXIgQlVHR1lfWkVSTyA9ICFJU19XRUFLICYmIGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIFY4IH4gQ2hyb21pdW0gNDItIGZhaWxzIG9ubHkgd2l0aCA1KyBlbGVtZW50c1xuICAgICAgdmFyICRpbnN0YW5jZSA9IG5ldyBDKCk7XG4gICAgICB2YXIgaW5kZXggPSA1O1xuICAgICAgd2hpbGUgKGluZGV4LS0pICRpbnN0YW5jZVtBRERFUl0oaW5kZXgsIGluZGV4KTtcbiAgICAgIHJldHVybiAhJGluc3RhbmNlLmhhcygtMCk7XG4gICAgfSk7XG4gICAgaWYgKCFBQ0NFUFRfSVRFUkFCTEVTKSB7XG4gICAgICBDID0gd3JhcHBlcihmdW5jdGlvbiAodGFyZ2V0LCBpdGVyYWJsZSkge1xuICAgICAgICBhbkluc3RhbmNlKHRhcmdldCwgQywgTkFNRSk7XG4gICAgICAgIHZhciB0aGF0ID0gaW5oZXJpdElmUmVxdWlyZWQobmV3IEJhc2UoKSwgdGFyZ2V0LCBDKTtcbiAgICAgICAgaWYgKGl0ZXJhYmxlICE9IHVuZGVmaW5lZCkgZm9yT2YoaXRlcmFibGUsIElTX01BUCwgdGhhdFtBRERFUl0sIHRoYXQpO1xuICAgICAgICByZXR1cm4gdGhhdDtcbiAgICAgIH0pO1xuICAgICAgQy5wcm90b3R5cGUgPSBwcm90bztcbiAgICAgIHByb3RvLmNvbnN0cnVjdG9yID0gQztcbiAgICB9XG4gICAgaWYgKFRIUk9XU19PTl9QUklNSVRJVkVTIHx8IEJVR0dZX1pFUk8pIHtcbiAgICAgIGZpeE1ldGhvZCgnZGVsZXRlJyk7XG4gICAgICBmaXhNZXRob2QoJ2hhcycpO1xuICAgICAgSVNfTUFQICYmIGZpeE1ldGhvZCgnZ2V0Jyk7XG4gICAgfVxuICAgIGlmIChCVUdHWV9aRVJPIHx8IEhBU05UX0NIQUlOSU5HKSBmaXhNZXRob2QoQURERVIpO1xuICAgIC8vIHdlYWsgY29sbGVjdGlvbnMgc2hvdWxkIG5vdCBjb250YWlucyAuY2xlYXIgbWV0aG9kXG4gICAgaWYgKElTX1dFQUsgJiYgcHJvdG8uY2xlYXIpIGRlbGV0ZSBwcm90by5jbGVhcjtcbiAgfVxuXG4gIHNldFRvU3RyaW5nVGFnKEMsIE5BTUUpO1xuXG4gIE9bTkFNRV0gPSBDO1xuICAkZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqIChDICE9IEJhc2UpLCBPKTtcblxuICBpZiAoIUlTX1dFQUspIGNvbW1vbi5zZXRTdHJvbmcoQywgTkFNRSwgSVNfTUFQKTtcblxuICByZXR1cm4gQztcbn07XG4iLCJ2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0geyB2ZXJzaW9uOiAnMi41LjcnIH07XG5pZiAodHlwZW9mIF9fZSA9PSAnbnVtYmVyJykgX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgaW5kZXgsIHZhbHVlKSB7XG4gIGlmIChpbmRleCBpbiBvYmplY3QpICRkZWZpbmVQcm9wZXJ0eS5mKG9iamVjdCwgaW5kZXgsIGNyZWF0ZURlc2MoMCwgdmFsdWUpKTtcbiAgZWxzZSBvYmplY3RbaW5kZXhdID0gdmFsdWU7XG59O1xuIiwiLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4sIHRoYXQsIGxlbmd0aCkge1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZiAodGhhdCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gZm47XG4gIHN3aXRjaCAobGVuZ3RoKSB7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24gKGEpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uICgvKiAuLi5hcmdzICovKSB7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuIiwiLy8gNy4yLjEgUmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudClcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCA9PSB1bmRlZmluZWQpIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsIi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudDtcbi8vIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnIGluIG9sZCBJRVxudmFyIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG4iLCIvLyBJRSA4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgJ2NvbnN0cnVjdG9yLGhhc093blByb3BlcnR5LGlzUHJvdG90eXBlT2YscHJvcGVydHlJc0VudW1lcmFibGUsdG9Mb2NhbGVTdHJpbmcsdG9TdHJpbmcsdmFsdWVPZidcbikuc3BsaXQoJywnKTtcbiIsIi8vIGFsbCBlbnVtZXJhYmxlIG9iamVjdCBrZXlzLCBpbmNsdWRlcyBzeW1ib2xzXG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG52YXIgZ09QUyA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJyk7XG52YXIgcElFID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIHJlc3VsdCA9IGdldEtleXMoaXQpO1xuICB2YXIgZ2V0U3ltYm9scyA9IGdPUFMuZjtcbiAgaWYgKGdldFN5bWJvbHMpIHtcbiAgICB2YXIgc3ltYm9scyA9IGdldFN5bWJvbHMoaXQpO1xuICAgIHZhciBpc0VudW0gPSBwSUUuZjtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIGtleTtcbiAgICB3aGlsZSAoc3ltYm9scy5sZW5ndGggPiBpKSBpZiAoaXNFbnVtLmNhbGwoaXQsIGtleSA9IHN5bWJvbHNbaSsrXSkpIHJlc3VsdC5wdXNoKGtleSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbiAodHlwZSwgbmFtZSwgc291cmNlKSB7XG4gIHZhciBJU19GT1JDRUQgPSB0eXBlICYgJGV4cG9ydC5GO1xuICB2YXIgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuRztcbiAgdmFyIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlM7XG4gIHZhciBJU19QUk9UTyA9IHR5cGUgJiAkZXhwb3J0LlA7XG4gIHZhciBJU19CSU5EID0gdHlwZSAmICRleHBvcnQuQjtcbiAgdmFyIHRhcmdldCA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSB8fCAoZ2xvYmFsW25hbWVdID0ge30pIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXTtcbiAgdmFyIGV4cG9ydHMgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KTtcbiAgdmFyIGV4cFByb3RvID0gZXhwb3J0c1tQUk9UT1RZUEVdIHx8IChleHBvcnRzW1BST1RPVFlQRV0gPSB7fSk7XG4gIHZhciBrZXksIG93biwgb3V0LCBleHA7XG4gIGlmIChJU19HTE9CQUwpIHNvdXJjZSA9IG5hbWU7XG4gIGZvciAoa2V5IGluIHNvdXJjZSkge1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSAob3duID8gdGFyZ2V0IDogc291cmNlKVtrZXldO1xuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgZXhwID0gSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXh0ZW5kIGdsb2JhbFxuICAgIGlmICh0YXJnZXQpIHJlZGVmaW5lKHRhcmdldCwga2V5LCBvdXQsIHR5cGUgJiAkZXhwb3J0LlUpO1xuICAgIC8vIGV4cG9ydFxuICAgIGlmIChleHBvcnRzW2tleV0gIT0gb3V0KSBoaWRlKGV4cG9ydHMsIGtleSwgZXhwKTtcbiAgICBpZiAoSVNfUFJPVE8gJiYgZXhwUHJvdG9ba2V5XSAhPSBvdXQpIGV4cFByb3RvW2tleV0gPSBvdXQ7XG4gIH1cbn07XG5nbG9iYWwuY29yZSA9IGNvcmU7XG4vLyB0eXBlIGJpdG1hcFxuJGV4cG9ydC5GID0gMTsgICAvLyBmb3JjZWRcbiRleHBvcnQuRyA9IDI7ICAgLy8gZ2xvYmFsXG4kZXhwb3J0LlMgPSA0OyAgIC8vIHN0YXRpY1xuJGV4cG9ydC5QID0gODsgICAvLyBwcm90b1xuJGV4cG9ydC5CID0gMTY7ICAvLyBiaW5kXG4kZXhwb3J0LlcgPSAzMjsgIC8vIHdyYXBcbiRleHBvcnQuVSA9IDY0OyAgLy8gc2FmZVxuJGV4cG9ydC5SID0gMTI4OyAvLyByZWFsIHByb3RvIG1ldGhvZCBmb3IgYGxpYnJhcnlgXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG52YXIgd2tzID0gcmVxdWlyZSgnLi9fd2tzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEtFWSwgbGVuZ3RoLCBleGVjKSB7XG4gIHZhciBTWU1CT0wgPSB3a3MoS0VZKTtcbiAgdmFyIGZucyA9IGV4ZWMoZGVmaW5lZCwgU1lNQk9MLCAnJ1tLRVldKTtcbiAgdmFyIHN0cmZuID0gZm5zWzBdO1xuICB2YXIgcnhmbiA9IGZuc1sxXTtcbiAgaWYgKGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgTyA9IHt9O1xuICAgIE9bU1lNQk9MXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH07XG4gICAgcmV0dXJuICcnW0tFWV0oTykgIT0gNztcbiAgfSkpIHtcbiAgICByZWRlZmluZShTdHJpbmcucHJvdG90eXBlLCBLRVksIHN0cmZuKTtcbiAgICBoaWRlKFJlZ0V4cC5wcm90b3R5cGUsIFNZTUJPTCwgbGVuZ3RoID09IDJcbiAgICAgIC8vIDIxLjIuNS44IFJlZ0V4cC5wcm90b3R5cGVbQEByZXBsYWNlXShzdHJpbmcsIHJlcGxhY2VWYWx1ZSlcbiAgICAgIC8vIDIxLjIuNS4xMSBSZWdFeHAucHJvdG90eXBlW0BAc3BsaXRdKHN0cmluZywgbGltaXQpXG4gICAgICA/IGZ1bmN0aW9uIChzdHJpbmcsIGFyZykgeyByZXR1cm4gcnhmbi5jYWxsKHN0cmluZywgdGhpcywgYXJnKTsgfVxuICAgICAgLy8gMjEuMi41LjYgUmVnRXhwLnByb3RvdHlwZVtAQG1hdGNoXShzdHJpbmcpXG4gICAgICAvLyAyMS4yLjUuOSBSZWdFeHAucHJvdG90eXBlW0BAc2VhcmNoXShzdHJpbmcpXG4gICAgICA6IGZ1bmN0aW9uIChzdHJpbmcpIHsgcmV0dXJuIHJ4Zm4uY2FsbChzdHJpbmcsIHRoaXMpOyB9XG4gICAgKTtcbiAgfVxufTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIDIxLjIuNS4zIGdldCBSZWdFeHAucHJvdG90eXBlLmZsYWdzXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuICB2YXIgdGhhdCA9IGFuT2JqZWN0KHRoaXMpO1xuICB2YXIgcmVzdWx0ID0gJyc7XG4gIGlmICh0aGF0Lmdsb2JhbCkgcmVzdWx0ICs9ICdnJztcbiAgaWYgKHRoYXQuaWdub3JlQ2FzZSkgcmVzdWx0ICs9ICdpJztcbiAgaWYgKHRoYXQubXVsdGlsaW5lKSByZXN1bHQgKz0gJ20nO1xuICBpZiAodGhhdC51bmljb2RlKSByZXN1bHQgKz0gJ3UnO1xuICBpZiAodGhhdC5zdGlja3kpIHJlc3VsdCArPSAneSc7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwidmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuL19pdGVyLWNhbGwnKTtcbnZhciBpc0FycmF5SXRlciA9IHJlcXVpcmUoJy4vX2lzLWFycmF5LWl0ZXInKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgZ2V0SXRlckZuID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcbnZhciBCUkVBSyA9IHt9O1xudmFyIFJFVFVSTiA9IHt9O1xudmFyIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYWJsZSwgZW50cmllcywgZm4sIHRoYXQsIElURVJBVE9SKSB7XG4gIHZhciBpdGVyRm4gPSBJVEVSQVRPUiA/IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGl0ZXJhYmxlOyB9IDogZ2V0SXRlckZuKGl0ZXJhYmxlKTtcbiAgdmFyIGYgPSBjdHgoZm4sIHRoYXQsIGVudHJpZXMgPyAyIDogMSk7XG4gIHZhciBpbmRleCA9IDA7XG4gIHZhciBsZW5ndGgsIHN0ZXAsIGl0ZXJhdG9yLCByZXN1bHQ7XG4gIGlmICh0eXBlb2YgaXRlckZuICE9ICdmdW5jdGlvbicpIHRocm93IFR5cGVFcnJvcihpdGVyYWJsZSArICcgaXMgbm90IGl0ZXJhYmxlIScpO1xuICAvLyBmYXN0IGNhc2UgZm9yIGFycmF5cyB3aXRoIGRlZmF1bHQgaXRlcmF0b3JcbiAgaWYgKGlzQXJyYXlJdGVyKGl0ZXJGbikpIGZvciAobGVuZ3RoID0gdG9MZW5ndGgoaXRlcmFibGUubGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcbiAgICByZXN1bHQgPSBlbnRyaWVzID8gZihhbk9iamVjdChzdGVwID0gaXRlcmFibGVbaW5kZXhdKVswXSwgc3RlcFsxXSkgOiBmKGl0ZXJhYmxlW2luZGV4XSk7XG4gICAgaWYgKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pIHJldHVybiByZXN1bHQ7XG4gIH0gZWxzZSBmb3IgKGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoaXRlcmFibGUpOyAhKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7KSB7XG4gICAgcmVzdWx0ID0gY2FsbChpdGVyYXRvciwgZiwgc3RlcC52YWx1ZSwgZW50cmllcyk7XG4gICAgaWYgKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pIHJldHVybiByZXN1bHQ7XG4gIH1cbn07XG5leHBvcnRzLkJSRUFLID0gQlJFQUs7XG5leHBvcnRzLlJFVFVSTiA9IFJFVFVSTjtcbiIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGZcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbmlmICh0eXBlb2YgX19nID09ICdudW1iZXInKSBfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiIsInZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07XG4iLCJ2YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICByZXR1cm4gZFAuZihvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG4iLCJ2YXIgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudDtcbm1vZHVsZS5leHBvcnRzID0gZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuIiwibW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdkaXYnKSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG59KTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fc2V0LXByb3RvJykuc2V0O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodGhhdCwgdGFyZ2V0LCBDKSB7XG4gIHZhciBTID0gdGFyZ2V0LmNvbnN0cnVjdG9yO1xuICB2YXIgUDtcbiAgaWYgKFMgIT09IEMgJiYgdHlwZW9mIFMgPT0gJ2Z1bmN0aW9uJyAmJiAoUCA9IFMucHJvdG90eXBlKSAhPT0gQy5wcm90b3R5cGUgJiYgaXNPYmplY3QoUCkgJiYgc2V0UHJvdG90eXBlT2YpIHtcbiAgICBzZXRQcm90b3R5cGVPZih0aGF0LCBQKTtcbiAgfSByZXR1cm4gdGhhdDtcbn07XG4iLCIvLyBmYXN0IGFwcGx5LCBodHRwOi8vanNwZXJmLmxua2l0LmNvbS9mYXN0LWFwcGx5LzVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZuLCBhcmdzLCB0aGF0KSB7XG4gIHZhciB1biA9IHRoYXQgPT09IHVuZGVmaW5lZDtcbiAgc3dpdGNoIChhcmdzLmxlbmd0aCkge1xuICAgIGNhc2UgMDogcmV0dXJuIHVuID8gZm4oKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0KTtcbiAgICBjYXNlIDE6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0pO1xuICAgIGNhc2UgMjogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgY2FzZSAzOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgICBjYXNlIDQ6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pO1xuICB9IHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmdzKTtcbn07XG4iLCIvLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKSA/IE9iamVjdCA6IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gY29mKGl0KSA9PSAnU3RyaW5nJyA/IGl0LnNwbGl0KCcnKSA6IE9iamVjdChpdCk7XG59O1xuIiwiLy8gY2hlY2sgb24gZGVmYXVsdCBBcnJheSBpdGVyYXRvclxudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ICE9PSB1bmRlZmluZWQgJiYgKEl0ZXJhdG9ycy5BcnJheSA9PT0gaXQgfHwgQXJyYXlQcm90b1tJVEVSQVRPUl0gPT09IGl0KTtcbn07XG4iLCIvLyA3LjIuMiBJc0FycmF5KGFyZ3VtZW50KVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIGlzQXJyYXkoYXJnKSB7XG4gIHJldHVybiBjb2YoYXJnKSA9PSAnQXJyYXknO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59O1xuIiwiLy8gNy4yLjggSXNSZWdFeHAoYXJndW1lbnQpXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbnZhciBNQVRDSCA9IHJlcXVpcmUoJy4vX3drcycpKCdtYXRjaCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIGlzUmVnRXhwO1xuICByZXR1cm4gaXNPYmplY3QoaXQpICYmICgoaXNSZWdFeHAgPSBpdFtNQVRDSF0pICE9PSB1bmRlZmluZWQgPyAhIWlzUmVnRXhwIDogY29mKGl0KSA9PSAnUmVnRXhwJyk7XG59O1xuIiwiLy8gY2FsbCBzb21ldGhpbmcgb24gaXRlcmF0b3Igc3RlcCB3aXRoIHNhZmUgY2xvc2luZyBvbiBlcnJvclxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYXRvciwgZm4sIHZhbHVlLCBlbnRyaWVzKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGVudHJpZXMgPyBmbihhbk9iamVjdCh2YWx1ZSlbMF0sIHZhbHVlWzFdKSA6IGZuKHZhbHVlKTtcbiAgLy8gNy40LjYgSXRlcmF0b3JDbG9zZShpdGVyYXRvciwgY29tcGxldGlvbilcbiAgfSBjYXRjaCAoZSkge1xuICAgIHZhciByZXQgPSBpdGVyYXRvclsncmV0dXJuJ107XG4gICAgaWYgKHJldCAhPT0gdW5kZWZpbmVkKSBhbk9iamVjdChyZXQuY2FsbChpdGVyYXRvcikpO1xuICAgIHRocm93IGU7XG4gIH1cbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpO1xudmFyIGRlc2NyaXB0b3IgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG5cbi8vIDI1LjEuMi4xLjEgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19oaWRlJykoSXRlcmF0b3JQcm90b3R5cGUsIHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpLCBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpIHtcbiAgQ29uc3RydWN0b3IucHJvdG90eXBlID0gY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlLCB7IG5leHQ6IGRlc2NyaXB0b3IoMSwgbmV4dCkgfSk7XG4gIHNldFRvU3RyaW5nVGFnKENvbnN0cnVjdG9yLCBOQU1FICsgJyBJdGVyYXRvcicpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZID0gcmVxdWlyZSgnLi9fbGlicmFyeScpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciAkaXRlckNyZWF0ZSA9IHJlcXVpcmUoJy4vX2l0ZXItY3JlYXRlJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpO1xudmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgQlVHR1kgPSAhKFtdLmtleXMgJiYgJ25leHQnIGluIFtdLmtleXMoKSk7IC8vIFNhZmFyaSBoYXMgYnVnZ3kgaXRlcmF0b3JzIHcvbyBgbmV4dGBcbnZhciBGRl9JVEVSQVRPUiA9ICdAQGl0ZXJhdG9yJztcbnZhciBLRVlTID0gJ2tleXMnO1xudmFyIFZBTFVFUyA9ICd2YWx1ZXMnO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEJhc2UsIE5BTUUsIENvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFRCkge1xuICAkaXRlckNyZWF0ZShDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCk7XG4gIHZhciBnZXRNZXRob2QgPSBmdW5jdGlvbiAoa2luZCkge1xuICAgIGlmICghQlVHR1kgJiYga2luZCBpbiBwcm90bykgcmV0dXJuIHByb3RvW2tpbmRdO1xuICAgIHN3aXRjaCAoa2luZCkge1xuICAgICAgY2FzZSBLRVlTOiByZXR1cm4gZnVuY3Rpb24ga2V5cygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICAgIGNhc2UgVkFMVUVTOiByZXR1cm4gZnVuY3Rpb24gdmFsdWVzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgIH0gcmV0dXJuIGZ1bmN0aW9uIGVudHJpZXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gIH07XG4gIHZhciBUQUcgPSBOQU1FICsgJyBJdGVyYXRvcic7XG4gIHZhciBERUZfVkFMVUVTID0gREVGQVVMVCA9PSBWQUxVRVM7XG4gIHZhciBWQUxVRVNfQlVHID0gZmFsc2U7XG4gIHZhciBwcm90byA9IEJhc2UucHJvdG90eXBlO1xuICB2YXIgJG5hdGl2ZSA9IHByb3RvW0lURVJBVE9SXSB8fCBwcm90b1tGRl9JVEVSQVRPUl0gfHwgREVGQVVMVCAmJiBwcm90b1tERUZBVUxUXTtcbiAgdmFyICRkZWZhdWx0ID0gJG5hdGl2ZSB8fCBnZXRNZXRob2QoREVGQVVMVCk7XG4gIHZhciAkZW50cmllcyA9IERFRkFVTFQgPyAhREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKCdlbnRyaWVzJykgOiB1bmRlZmluZWQ7XG4gIHZhciAkYW55TmF0aXZlID0gTkFNRSA9PSAnQXJyYXknID8gcHJvdG8uZW50cmllcyB8fCAkbmF0aXZlIDogJG5hdGl2ZTtcbiAgdmFyIG1ldGhvZHMsIGtleSwgSXRlcmF0b3JQcm90b3R5cGU7XG4gIC8vIEZpeCBuYXRpdmVcbiAgaWYgKCRhbnlOYXRpdmUpIHtcbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mKCRhbnlOYXRpdmUuY2FsbChuZXcgQmFzZSgpKSk7XG4gICAgaWYgKEl0ZXJhdG9yUHJvdG90eXBlICE9PSBPYmplY3QucHJvdG90eXBlICYmIEl0ZXJhdG9yUHJvdG90eXBlLm5leHQpIHtcbiAgICAgIC8vIFNldCBAQHRvU3RyaW5nVGFnIHRvIG5hdGl2ZSBpdGVyYXRvcnNcbiAgICAgIHNldFRvU3RyaW5nVGFnKEl0ZXJhdG9yUHJvdG90eXBlLCBUQUcsIHRydWUpO1xuICAgICAgLy8gZml4IGZvciBzb21lIG9sZCBlbmdpbmVzXG4gICAgICBpZiAoIUxJQlJBUlkgJiYgdHlwZW9mIEl0ZXJhdG9yUHJvdG90eXBlW0lURVJBVE9SXSAhPSAnZnVuY3Rpb24nKSBoaWRlKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG4gICAgfVxuICB9XG4gIC8vIGZpeCBBcnJheSN7dmFsdWVzLCBAQGl0ZXJhdG9yfS5uYW1lIGluIFY4IC8gRkZcbiAgaWYgKERFRl9WQUxVRVMgJiYgJG5hdGl2ZSAmJiAkbmF0aXZlLm5hbWUgIT09IFZBTFVFUykge1xuICAgIFZBTFVFU19CVUcgPSB0cnVlO1xuICAgICRkZWZhdWx0ID0gZnVuY3Rpb24gdmFsdWVzKCkgeyByZXR1cm4gJG5hdGl2ZS5jYWxsKHRoaXMpOyB9O1xuICB9XG4gIC8vIERlZmluZSBpdGVyYXRvclxuICBpZiAoKCFMSUJSQVJZIHx8IEZPUkNFRCkgJiYgKEJVR0dZIHx8IFZBTFVFU19CVUcgfHwgIXByb3RvW0lURVJBVE9SXSkpIHtcbiAgICBoaWRlKHByb3RvLCBJVEVSQVRPUiwgJGRlZmF1bHQpO1xuICB9XG4gIC8vIFBsdWcgZm9yIGxpYnJhcnlcbiAgSXRlcmF0b3JzW05BTUVdID0gJGRlZmF1bHQ7XG4gIEl0ZXJhdG9yc1tUQUddID0gcmV0dXJuVGhpcztcbiAgaWYgKERFRkFVTFQpIHtcbiAgICBtZXRob2RzID0ge1xuICAgICAgdmFsdWVzOiBERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoVkFMVUVTKSxcbiAgICAgIGtleXM6IElTX1NFVCA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKEtFWVMpLFxuICAgICAgZW50cmllczogJGVudHJpZXNcbiAgICB9O1xuICAgIGlmIChGT1JDRUQpIGZvciAoa2V5IGluIG1ldGhvZHMpIHtcbiAgICAgIGlmICghKGtleSBpbiBwcm90bykpIHJlZGVmaW5lKHByb3RvLCBrZXksIG1ldGhvZHNba2V5XSk7XG4gICAgfSBlbHNlICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKEJVR0dZIHx8IFZBTFVFU19CVUcpLCBOQU1FLCBtZXRob2RzKTtcbiAgfVxuICByZXR1cm4gbWV0aG9kcztcbn07XG4iLCJ2YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBTQUZFX0NMT1NJTkcgPSBmYWxzZTtcblxudHJ5IHtcbiAgdmFyIHJpdGVyID0gWzddW0lURVJBVE9SXSgpO1xuICByaXRlclsncmV0dXJuJ10gPSBmdW5jdGlvbiAoKSB7IFNBRkVfQ0xPU0lORyA9IHRydWU7IH07XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby10aHJvdy1saXRlcmFsXG4gIEFycmF5LmZyb20ocml0ZXIsIGZ1bmN0aW9uICgpIHsgdGhyb3cgMjsgfSk7XG59IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYywgc2tpcENsb3NpbmcpIHtcbiAgaWYgKCFza2lwQ2xvc2luZyAmJiAhU0FGRV9DTE9TSU5HKSByZXR1cm4gZmFsc2U7XG4gIHZhciBzYWZlID0gZmFsc2U7XG4gIHRyeSB7XG4gICAgdmFyIGFyciA9IFs3XTtcbiAgICB2YXIgaXRlciA9IGFycltJVEVSQVRPUl0oKTtcbiAgICBpdGVyLm5leHQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB7IGRvbmU6IHNhZmUgPSB0cnVlIH07IH07XG4gICAgYXJyW0lURVJBVE9SXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGl0ZXI7IH07XG4gICAgZXhlYyhhcnIpO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgcmV0dXJuIHNhZmU7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZG9uZSwgdmFsdWUpIHtcbiAgcmV0dXJuIHsgdmFsdWU6IHZhbHVlLCBkb25lOiAhIWRvbmUgfTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmYWxzZTtcbiIsInZhciBNRVRBID0gcmVxdWlyZSgnLi9fdWlkJykoJ21ldGEnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHNldERlc2MgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xudmFyIGlkID0gMDtcbnZhciBpc0V4dGVuc2libGUgPSBPYmplY3QuaXNFeHRlbnNpYmxlIHx8IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRydWU7XG59O1xudmFyIEZSRUVaRSA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGlzRXh0ZW5zaWJsZShPYmplY3QucHJldmVudEV4dGVuc2lvbnMoe30pKTtcbn0pO1xudmFyIHNldE1ldGEgPSBmdW5jdGlvbiAoaXQpIHtcbiAgc2V0RGVzYyhpdCwgTUVUQSwgeyB2YWx1ZToge1xuICAgIGk6ICdPJyArICsraWQsIC8vIG9iamVjdCBJRFxuICAgIHc6IHt9ICAgICAgICAgIC8vIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH0gfSk7XG59O1xudmFyIGZhc3RLZXkgPSBmdW5jdGlvbiAoaXQsIGNyZWF0ZSkge1xuICAvLyByZXR1cm4gcHJpbWl0aXZlIHdpdGggcHJlZml4XG4gIGlmICghaXNPYmplY3QoaXQpKSByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnID8gaXQgOiAodHlwZW9mIGl0ID09ICdzdHJpbmcnID8gJ1MnIDogJ1AnKSArIGl0O1xuICBpZiAoIWhhcyhpdCwgTUVUQSkpIHtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmICghaXNFeHRlbnNpYmxlKGl0KSkgcmV0dXJuICdGJztcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmICghY3JlYXRlKSByZXR1cm4gJ0UnO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBvYmplY3QgSURcbiAgfSByZXR1cm4gaXRbTUVUQV0uaTtcbn07XG52YXIgZ2V0V2VhayA9IGZ1bmN0aW9uIChpdCwgY3JlYXRlKSB7XG4gIGlmICghaGFzKGl0LCBNRVRBKSkge1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYgKCFpc0V4dGVuc2libGUoaXQpKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmICghY3JlYXRlKSByZXR1cm4gZmFsc2U7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIGhhc2ggd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfSByZXR1cm4gaXRbTUVUQV0udztcbn07XG4vLyBhZGQgbWV0YWRhdGEgb24gZnJlZXplLWZhbWlseSBtZXRob2RzIGNhbGxpbmdcbnZhciBvbkZyZWV6ZSA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoRlJFRVpFICYmIG1ldGEuTkVFRCAmJiBpc0V4dGVuc2libGUoaXQpICYmICFoYXMoaXQsIE1FVEEpKSBzZXRNZXRhKGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciBtZXRhID0gbW9kdWxlLmV4cG9ydHMgPSB7XG4gIEtFWTogTUVUQSxcbiAgTkVFRDogZmFsc2UsXG4gIGZhc3RLZXk6IGZhc3RLZXksXG4gIGdldFdlYWs6IGdldFdlYWssXG4gIG9uRnJlZXplOiBvbkZyZWV6ZVxufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBtYWNyb3Rhc2sgPSByZXF1aXJlKCcuL190YXNrJykuc2V0O1xudmFyIE9ic2VydmVyID0gZ2xvYmFsLk11dGF0aW9uT2JzZXJ2ZXIgfHwgZ2xvYmFsLldlYktpdE11dGF0aW9uT2JzZXJ2ZXI7XG52YXIgcHJvY2VzcyA9IGdsb2JhbC5wcm9jZXNzO1xudmFyIFByb21pc2UgPSBnbG9iYWwuUHJvbWlzZTtcbnZhciBpc05vZGUgPSByZXF1aXJlKCcuL19jb2YnKShwcm9jZXNzKSA9PSAncHJvY2Vzcyc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuICB2YXIgaGVhZCwgbGFzdCwgbm90aWZ5O1xuXG4gIHZhciBmbHVzaCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcGFyZW50LCBmbjtcbiAgICBpZiAoaXNOb2RlICYmIChwYXJlbnQgPSBwcm9jZXNzLmRvbWFpbikpIHBhcmVudC5leGl0KCk7XG4gICAgd2hpbGUgKGhlYWQpIHtcbiAgICAgIGZuID0gaGVhZC5mbjtcbiAgICAgIGhlYWQgPSBoZWFkLm5leHQ7XG4gICAgICB0cnkge1xuICAgICAgICBmbigpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZiAoaGVhZCkgbm90aWZ5KCk7XG4gICAgICAgIGVsc2UgbGFzdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9IGxhc3QgPSB1bmRlZmluZWQ7XG4gICAgaWYgKHBhcmVudCkgcGFyZW50LmVudGVyKCk7XG4gIH07XG5cbiAgLy8gTm9kZS5qc1xuICBpZiAoaXNOb2RlKSB7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhmbHVzaCk7XG4gICAgfTtcbiAgLy8gYnJvd3NlcnMgd2l0aCBNdXRhdGlvbk9ic2VydmVyLCBleGNlcHQgaU9TIFNhZmFyaSAtIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy8zMzlcbiAgfSBlbHNlIGlmIChPYnNlcnZlciAmJiAhKGdsb2JhbC5uYXZpZ2F0b3IgJiYgZ2xvYmFsLm5hdmlnYXRvci5zdGFuZGFsb25lKSkge1xuICAgIHZhciB0b2dnbGUgPSB0cnVlO1xuICAgIHZhciBub2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuICAgIG5ldyBPYnNlcnZlcihmbHVzaCkub2JzZXJ2ZShub2RlLCB7IGNoYXJhY3RlckRhdGE6IHRydWUgfSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgbm9kZS5kYXRhID0gdG9nZ2xlID0gIXRvZ2dsZTtcbiAgICB9O1xuICAvLyBlbnZpcm9ubWVudHMgd2l0aCBtYXliZSBub24tY29tcGxldGVseSBjb3JyZWN0LCBidXQgZXhpc3RlbnQgUHJvbWlzZVxuICB9IGVsc2UgaWYgKFByb21pc2UgJiYgUHJvbWlzZS5yZXNvbHZlKSB7XG4gICAgLy8gUHJvbWlzZS5yZXNvbHZlIHdpdGhvdXQgYW4gYXJndW1lbnQgdGhyb3dzIGFuIGVycm9yIGluIExHIFdlYk9TIDJcbiAgICB2YXIgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSh1bmRlZmluZWQpO1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHByb21pc2UudGhlbihmbHVzaCk7XG4gICAgfTtcbiAgLy8gZm9yIG90aGVyIGVudmlyb25tZW50cyAtIG1hY3JvdGFzayBiYXNlZCBvbjpcbiAgLy8gLSBzZXRJbW1lZGlhdGVcbiAgLy8gLSBNZXNzYWdlQ2hhbm5lbFxuICAvLyAtIHdpbmRvdy5wb3N0TWVzc2FnXG4gIC8vIC0gb25yZWFkeXN0YXRlY2hhbmdlXG4gIC8vIC0gc2V0VGltZW91dFxuICB9IGVsc2Uge1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIHN0cmFuZ2UgSUUgKyB3ZWJwYWNrIGRldiBzZXJ2ZXIgYnVnIC0gdXNlIC5jYWxsKGdsb2JhbClcbiAgICAgIG1hY3JvdGFzay5jYWxsKGdsb2JhbCwgZmx1c2gpO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKGZuKSB7XG4gICAgdmFyIHRhc2sgPSB7IGZuOiBmbiwgbmV4dDogdW5kZWZpbmVkIH07XG4gICAgaWYgKGxhc3QpIGxhc3QubmV4dCA9IHRhc2s7XG4gICAgaWYgKCFoZWFkKSB7XG4gICAgICBoZWFkID0gdGFzaztcbiAgICAgIG5vdGlmeSgpO1xuICAgIH0gbGFzdCA9IHRhc2s7XG4gIH07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMjUuNC4xLjUgTmV3UHJvbWlzZUNhcGFiaWxpdHkoQylcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5cbmZ1bmN0aW9uIFByb21pc2VDYXBhYmlsaXR5KEMpIHtcbiAgdmFyIHJlc29sdmUsIHJlamVjdDtcbiAgdGhpcy5wcm9taXNlID0gbmV3IEMoZnVuY3Rpb24gKCQkcmVzb2x2ZSwgJCRyZWplY3QpIHtcbiAgICBpZiAocmVzb2x2ZSAhPT0gdW5kZWZpbmVkIHx8IHJlamVjdCAhPT0gdW5kZWZpbmVkKSB0aHJvdyBUeXBlRXJyb3IoJ0JhZCBQcm9taXNlIGNvbnN0cnVjdG9yJyk7XG4gICAgcmVzb2x2ZSA9ICQkcmVzb2x2ZTtcbiAgICByZWplY3QgPSAkJHJlamVjdDtcbiAgfSk7XG4gIHRoaXMucmVzb2x2ZSA9IGFGdW5jdGlvbihyZXNvbHZlKTtcbiAgdGhpcy5yZWplY3QgPSBhRnVuY3Rpb24ocmVqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMuZiA9IGZ1bmN0aW9uIChDKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZUNhcGFiaWxpdHkoQyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMTkuMS4yLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSwgLi4uKVxudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xudmFyIGdPUFMgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpO1xudmFyIHBJRSA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0Jyk7XG52YXIgJGFzc2lnbiA9IE9iamVjdC5hc3NpZ247XG5cbi8vIHNob3VsZCB3b3JrIHdpdGggc3ltYm9scyBhbmQgc2hvdWxkIGhhdmUgZGV0ZXJtaW5pc3RpYyBwcm9wZXJ0eSBvcmRlciAoVjggYnVnKVxubW9kdWxlLmV4cG9ydHMgPSAhJGFzc2lnbiB8fCByZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgdmFyIEEgPSB7fTtcbiAgdmFyIEIgPSB7fTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBTID0gU3ltYm9sKCk7XG4gIHZhciBLID0gJ2FiY2RlZmdoaWprbG1ub3BxcnN0JztcbiAgQVtTXSA9IDc7XG4gIEsuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGspIHsgQltrXSA9IGs7IH0pO1xuICByZXR1cm4gJGFzc2lnbih7fSwgQSlbU10gIT0gNyB8fCBPYmplY3Qua2V5cygkYXNzaWduKHt9LCBCKSkuam9pbignJykgIT0gSztcbn0pID8gZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgc291cmNlKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgdmFyIFQgPSB0b09iamVjdCh0YXJnZXQpO1xuICB2YXIgYUxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gIHZhciBpbmRleCA9IDE7XG4gIHZhciBnZXRTeW1ib2xzID0gZ09QUy5mO1xuICB2YXIgaXNFbnVtID0gcElFLmY7XG4gIHdoaWxlIChhTGVuID4gaW5kZXgpIHtcbiAgICB2YXIgUyA9IElPYmplY3QoYXJndW1lbnRzW2luZGV4KytdKTtcbiAgICB2YXIga2V5cyA9IGdldFN5bWJvbHMgPyBnZXRLZXlzKFMpLmNvbmNhdChnZXRTeW1ib2xzKFMpKSA6IGdldEtleXMoUyk7XG4gICAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICAgIHZhciBqID0gMDtcbiAgICB2YXIga2V5O1xuICAgIHdoaWxlIChsZW5ndGggPiBqKSBpZiAoaXNFbnVtLmNhbGwoUywga2V5ID0ga2V5c1tqKytdKSkgVFtrZXldID0gU1trZXldO1xuICB9IHJldHVybiBUO1xufSA6ICRhc3NpZ247XG4iLCIvLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGRQcyA9IHJlcXVpcmUoJy4vX29iamVjdC1kcHMnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcbnZhciBFbXB0eSA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIGlmcmFtZSBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxudmFyIGNyZWF0ZURpY3QgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIFRocmFzaCwgd2FzdGUgYW5kIHNvZG9teTogSUUgR0MgYnVnXG4gIHZhciBpZnJhbWUgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2lmcmFtZScpO1xuICB2YXIgaSA9IGVudW1CdWdLZXlzLmxlbmd0aDtcbiAgdmFyIGx0ID0gJzwnO1xuICB2YXIgZ3QgPSAnPic7XG4gIHZhciBpZnJhbWVEb2N1bWVudDtcbiAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIHJlcXVpcmUoJy4vX2h0bWwnKS5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICBpZnJhbWUuc3JjID0gJ2phdmFzY3JpcHQ6JzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zY3JpcHQtdXJsXG4gIC8vIGNyZWF0ZURpY3QgPSBpZnJhbWUuY29udGVudFdpbmRvdy5PYmplY3Q7XG4gIC8vIGh0bWwucmVtb3ZlQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lRG9jdW1lbnQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgaWZyYW1lRG9jdW1lbnQub3BlbigpO1xuICBpZnJhbWVEb2N1bWVudC53cml0ZShsdCArICdzY3JpcHQnICsgZ3QgKyAnZG9jdW1lbnQuRj1PYmplY3QnICsgbHQgKyAnL3NjcmlwdCcgKyBndCk7XG4gIGlmcmFtZURvY3VtZW50LmNsb3NlKCk7XG4gIGNyZWF0ZURpY3QgPSBpZnJhbWVEb2N1bWVudC5GO1xuICB3aGlsZSAoaS0tKSBkZWxldGUgY3JlYXRlRGljdFtQUk9UT1RZUEVdW2VudW1CdWdLZXlzW2ldXTtcbiAgcmV0dXJuIGNyZWF0ZURpY3QoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcykge1xuICB2YXIgcmVzdWx0O1xuICBpZiAoTyAhPT0gbnVsbCkge1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBhbk9iamVjdChPKTtcbiAgICByZXN1bHQgPSBuZXcgRW1wdHkoKTtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gbnVsbDtcbiAgICAvLyBhZGQgXCJfX3Byb3RvX19cIiBmb3IgT2JqZWN0LmdldFByb3RvdHlwZU9mIHBvbHlmaWxsXG4gICAgcmVzdWx0W0lFX1BST1RPXSA9IE87XG4gIH0gZWxzZSByZXN1bHQgPSBjcmVhdGVEaWN0KCk7XG4gIHJldHVybiBQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiBkUHMocmVzdWx0LCBQcm9wZXJ0aWVzKTtcbn07XG4iLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBkUCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gZFAoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKSB0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIScpO1xuICBpZiAoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKSBPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBrZXlzID0gZ2V0S2V5cyhQcm9wZXJ0aWVzKTtcbiAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICB2YXIgaSA9IDA7XG4gIHZhciBQO1xuICB3aGlsZSAobGVuZ3RoID4gaSkgZFAuZihPLCBQID0ga2V5c1tpKytdLCBQcm9wZXJ0aWVzW1BdKTtcbiAgcmV0dXJuIE87XG59O1xuIiwidmFyIHBJRSA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKTtcbnZhciBnT1BEID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGdPUEQgOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCkge1xuICBPID0gdG9JT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gZ09QRChPLCBQKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIGlmIChoYXMoTywgUCkpIHJldHVybiBjcmVhdGVEZXNjKCFwSUUuZi5jYWxsKE8sIFApLCBPW1BdKTtcbn07XG4iLCIvLyBmYWxsYmFjayBmb3IgSUUxMSBidWdneSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB3aXRoIGlmcmFtZSBhbmQgd2luZG93XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIGdPUE4gPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmY7XG52YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxudmFyIHdpbmRvd05hbWVzID0gdHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiB3aW5kb3cgJiYgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNcbiAgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh3aW5kb3cpIDogW107XG5cbnZhciBnZXRXaW5kb3dOYW1lcyA9IGZ1bmN0aW9uIChpdCkge1xuICB0cnkge1xuICAgIHJldHVybiBnT1BOKGl0KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB3aW5kb3dOYW1lcy5zbGljZSgpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5mID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCkge1xuICByZXR1cm4gd2luZG93TmFtZXMgJiYgdG9TdHJpbmcuY2FsbChpdCkgPT0gJ1tvYmplY3QgV2luZG93XScgPyBnZXRXaW5kb3dOYW1lcyhpdCkgOiBnT1BOKHRvSU9iamVjdChpdCkpO1xufTtcbiIsIi8vIDE5LjEuMi43IC8gMTUuMi4zLjQgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKS5jb25jYXQoJ2xlbmd0aCcsICdwcm90b3R5cGUnKTtcblxuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhPKSB7XG4gIHJldHVybiAka2V5cyhPLCBoaWRkZW5LZXlzKTtcbn07XG4iLCJleHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuIiwiLy8gMTkuMS4yLjkgLyAxNS4yLjMuMiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xudmFyIE9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gKE8pIHtcbiAgTyA9IHRvT2JqZWN0KE8pO1xuICBpZiAoaGFzKE8sIElFX1BST1RPKSkgcmV0dXJuIE9bSUVfUFJPVE9dO1xuICBpZiAodHlwZW9mIE8uY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBPIGluc3RhbmNlb2YgTy5jb25zdHJ1Y3Rvcikge1xuICAgIHJldHVybiBPLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgfSByZXR1cm4gTyBpbnN0YW5jZW9mIE9iamVjdCA/IE9iamVjdFByb3RvIDogbnVsbDtcbn07XG4iLCJ2YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIGFycmF5SW5kZXhPZiA9IHJlcXVpcmUoJy4vX2FycmF5LWluY2x1ZGVzJykoZmFsc2UpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIG5hbWVzKSB7XG4gIHZhciBPID0gdG9JT2JqZWN0KG9iamVjdCk7XG4gIHZhciBpID0gMDtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIga2V5O1xuICBmb3IgKGtleSBpbiBPKSBpZiAoa2V5ICE9IElFX1BST1RPKSBoYXMoTywga2V5KSAmJiByZXN1bHQucHVzaChrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSBpZiAoaGFzKE8sIGtleSA9IG5hbWVzW2krK10pKSB7XG4gICAgfmFycmF5SW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcmVzdWx0LnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsIi8vIDE5LjEuMi4xNCAvIDE1LjIuMy4xNCBPYmplY3Qua2V5cyhPKVxudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzKE8pIHtcbiAgcmV0dXJuICRrZXlzKE8sIGVudW1CdWdLZXlzKTtcbn07XG4iLCJleHBvcnRzLmYgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiIsIi8vIG1vc3QgT2JqZWN0IG1ldGhvZHMgYnkgRVM2IHNob3VsZCBhY2NlcHQgcHJpbWl0aXZlc1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEtFWSwgZXhlYykge1xuICB2YXIgZm4gPSAoY29yZS5PYmplY3QgfHwge30pW0tFWV0gfHwgT2JqZWN0W0tFWV07XG4gIHZhciBleHAgPSB7fTtcbiAgZXhwW0tFWV0gPSBleGVjKGZuKTtcbiAgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiBmYWlscyhmdW5jdGlvbiAoKSB7IGZuKDEpOyB9KSwgJ09iamVjdCcsIGV4cCk7XG59O1xuIiwidmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciBpc0VudW0gPSByZXF1aXJlKCcuL19vYmplY3QtcGllJykuZjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGlzRW50cmllcykge1xuICByZXR1cm4gZnVuY3Rpb24gKGl0KSB7XG4gICAgdmFyIE8gPSB0b0lPYmplY3QoaXQpO1xuICAgIHZhciBrZXlzID0gZ2V0S2V5cyhPKTtcbiAgICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIga2V5O1xuICAgIHdoaWxlIChsZW5ndGggPiBpKSBpZiAoaXNFbnVtLmNhbGwoTywga2V5ID0ga2V5c1tpKytdKSkge1xuICAgICAgcmVzdWx0LnB1c2goaXNFbnRyaWVzID8gW2tleSwgT1trZXldXSA6IE9ba2V5XSk7XG4gICAgfSByZXR1cm4gcmVzdWx0O1xuICB9O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4geyBlOiBmYWxzZSwgdjogZXhlYygpIH07XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4geyBlOiB0cnVlLCB2OiBlIH07XG4gIH1cbn07XG4iLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gcmVxdWlyZSgnLi9fbmV3LXByb21pc2UtY2FwYWJpbGl0eScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChDLCB4KSB7XG4gIGFuT2JqZWN0KEMpO1xuICBpZiAoaXNPYmplY3QoeCkgJiYgeC5jb25zdHJ1Y3RvciA9PT0gQykgcmV0dXJuIHg7XG4gIHZhciBwcm9taXNlQ2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5LmYoQyk7XG4gIHZhciByZXNvbHZlID0gcHJvbWlzZUNhcGFiaWxpdHkucmVzb2x2ZTtcbiAgcmVzb2x2ZSh4KTtcbiAgcmV0dXJuIHByb21pc2VDYXBhYmlsaXR5LnByb21pc2U7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYml0bWFwLCB2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGU6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlOiB2YWx1ZVxuICB9O1xufTtcbiIsInZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0YXJnZXQsIHNyYywgc2FmZSkge1xuICBmb3IgKHZhciBrZXkgaW4gc3JjKSByZWRlZmluZSh0YXJnZXQsIGtleSwgc3JjW2tleV0sIHNhZmUpO1xuICByZXR1cm4gdGFyZ2V0O1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIFNSQyA9IHJlcXVpcmUoJy4vX3VpZCcpKCdzcmMnKTtcbnZhciBUT19TVFJJTkcgPSAndG9TdHJpbmcnO1xudmFyICR0b1N0cmluZyA9IEZ1bmN0aW9uW1RPX1NUUklOR107XG52YXIgVFBMID0gKCcnICsgJHRvU3RyaW5nKS5zcGxpdChUT19TVFJJTkcpO1xuXG5yZXF1aXJlKCcuL19jb3JlJykuaW5zcGVjdFNvdXJjZSA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gJHRvU3RyaW5nLmNhbGwoaXQpO1xufTtcblxuKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE8sIGtleSwgdmFsLCBzYWZlKSB7XG4gIHZhciBpc0Z1bmN0aW9uID0gdHlwZW9mIHZhbCA9PSAnZnVuY3Rpb24nO1xuICBpZiAoaXNGdW5jdGlvbikgaGFzKHZhbCwgJ25hbWUnKSB8fCBoaWRlKHZhbCwgJ25hbWUnLCBrZXkpO1xuICBpZiAoT1trZXldID09PSB2YWwpIHJldHVybjtcbiAgaWYgKGlzRnVuY3Rpb24pIGhhcyh2YWwsIFNSQykgfHwgaGlkZSh2YWwsIFNSQywgT1trZXldID8gJycgKyBPW2tleV0gOiBUUEwuam9pbihTdHJpbmcoa2V5KSkpO1xuICBpZiAoTyA9PT0gZ2xvYmFsKSB7XG4gICAgT1trZXldID0gdmFsO1xuICB9IGVsc2UgaWYgKCFzYWZlKSB7XG4gICAgZGVsZXRlIE9ba2V5XTtcbiAgICBoaWRlKE8sIGtleSwgdmFsKTtcbiAgfSBlbHNlIGlmIChPW2tleV0pIHtcbiAgICBPW2tleV0gPSB2YWw7XG4gIH0gZWxzZSB7XG4gICAgaGlkZShPLCBrZXksIHZhbCk7XG4gIH1cbi8vIGFkZCBmYWtlIEZ1bmN0aW9uI3RvU3RyaW5nIGZvciBjb3JyZWN0IHdvcmsgd3JhcHBlZCBtZXRob2RzIC8gY29uc3RydWN0b3JzIHdpdGggbWV0aG9kcyBsaWtlIExvRGFzaCBpc05hdGl2ZVxufSkoRnVuY3Rpb24ucHJvdG90eXBlLCBUT19TVFJJTkcsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyAmJiB0aGlzW1NSQ10gfHwgJHRvU3RyaW5nLmNhbGwodGhpcyk7XG59KTtcbiIsIi8vIFdvcmtzIHdpdGggX19wcm90b19fIG9ubHkuIE9sZCB2OCBjYW4ndCB3b3JrIHdpdGggbnVsbCBwcm90byBvYmplY3RzLlxuLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgY2hlY2sgPSBmdW5jdGlvbiAoTywgcHJvdG8pIHtcbiAgYW5PYmplY3QoTyk7XG4gIGlmICghaXNPYmplY3QocHJvdG8pICYmIHByb3RvICE9PSBudWxsKSB0aHJvdyBUeXBlRXJyb3IocHJvdG8gKyBcIjogY2FuJ3Qgc2V0IGFzIHByb3RvdHlwZSFcIik7XG59O1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8ICgnX19wcm90b19fJyBpbiB7fSA/IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICBmdW5jdGlvbiAodGVzdCwgYnVnZ3ksIHNldCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgc2V0ID0gcmVxdWlyZSgnLi9fY3R4JykoRnVuY3Rpb24uY2FsbCwgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKS5mKE9iamVjdC5wcm90b3R5cGUsICdfX3Byb3RvX18nKS5zZXQsIDIpO1xuICAgICAgICBzZXQodGVzdCwgW10pO1xuICAgICAgICBidWdneSA9ICEodGVzdCBpbnN0YW5jZW9mIEFycmF5KTtcbiAgICAgIH0gY2F0Y2ggKGUpIHsgYnVnZ3kgPSB0cnVlOyB9XG4gICAgICByZXR1cm4gZnVuY3Rpb24gc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pIHtcbiAgICAgICAgY2hlY2soTywgcHJvdG8pO1xuICAgICAgICBpZiAoYnVnZ3kpIE8uX19wcm90b19fID0gcHJvdG87XG4gICAgICAgIGVsc2Ugc2V0KE8sIHByb3RvKTtcbiAgICAgICAgcmV0dXJuIE87XG4gICAgICB9O1xuICAgIH0oe30sIGZhbHNlKSA6IHVuZGVmaW5lZCksXG4gIGNoZWNrOiBjaGVja1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcbnZhciBTUEVDSUVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoS0VZKSB7XG4gIHZhciBDID0gZ2xvYmFsW0tFWV07XG4gIGlmIChERVNDUklQVE9SUyAmJiBDICYmICFDW1NQRUNJRVNdKSBkUC5mKEMsIFNQRUNJRVMsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9XG4gIH0pO1xufTtcbiIsInZhciBkZWYgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgdGFnLCBzdGF0KSB7XG4gIGlmIChpdCAmJiAhaGFzKGl0ID0gc3RhdCA/IGl0IDogaXQucHJvdG90eXBlLCBUQUcpKSBkZWYoaXQsIFRBRywgeyBjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiB0YWcgfSk7XG59O1xuIiwidmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCdrZXlzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIHNoYXJlZFtrZXldIHx8IChzaGFyZWRba2V5XSA9IHVpZChrZXkpKTtcbn07XG4iLCJ2YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJztcbnZhciBzdG9yZSA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcblxuKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB2YWx1ZSAhPT0gdW5kZWZpbmVkID8gdmFsdWUgOiB7fSk7XG59KSgndmVyc2lvbnMnLCBbXSkucHVzaCh7XG4gIHZlcnNpb246IGNvcmUudmVyc2lvbixcbiAgbW9kZTogcmVxdWlyZSgnLi9fbGlicmFyeScpID8gJ3B1cmUnIDogJ2dsb2JhbCcsXG4gIGNvcHlyaWdodDogJ8KpIDIwMTggRGVuaXMgUHVzaGthcmV2ICh6bG9pcm9jay5ydSknXG59KTtcbiIsIi8vIDcuMy4yMCBTcGVjaWVzQ29uc3RydWN0b3IoTywgZGVmYXVsdENvbnN0cnVjdG9yKVxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xudmFyIFNQRUNJRVMgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywgRCkge1xuICB2YXIgQyA9IGFuT2JqZWN0KE8pLmNvbnN0cnVjdG9yO1xuICB2YXIgUztcbiAgcmV0dXJuIEMgPT09IHVuZGVmaW5lZCB8fCAoUyA9IGFuT2JqZWN0KEMpW1NQRUNJRVNdKSA9PSB1bmRlZmluZWQgPyBEIDogYUZ1bmN0aW9uKFMpO1xufTtcbiIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbi8vIHRydWUgIC0+IFN0cmluZyNhdFxuLy8gZmFsc2UgLT4gU3RyaW5nI2NvZGVQb2ludEF0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChUT19TVFJJTkcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0aGF0LCBwb3MpIHtcbiAgICB2YXIgcyA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKTtcbiAgICB2YXIgaSA9IHRvSW50ZWdlcihwb3MpO1xuICAgIHZhciBsID0gcy5sZW5ndGg7XG4gICAgdmFyIGEsIGI7XG4gICAgaWYgKGkgPCAwIHx8IGkgPj0gbCkgcmV0dXJuIFRPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgIGEgPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgcmV0dXJuIGEgPCAweGQ4MDAgfHwgYSA+IDB4ZGJmZiB8fCBpICsgMSA9PT0gbCB8fCAoYiA9IHMuY2hhckNvZGVBdChpICsgMSkpIDwgMHhkYzAwIHx8IGIgPiAweGRmZmZcbiAgICAgID8gVE9fU1RSSU5HID8gcy5jaGFyQXQoaSkgOiBhXG4gICAgICA6IFRPX1NUUklORyA/IHMuc2xpY2UoaSwgaSArIDIpIDogKGEgLSAweGQ4MDAgPDwgMTApICsgKGIgLSAweGRjMDApICsgMHgxMDAwMDtcbiAgfTtcbn07XG4iLCJ2YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgaW52b2tlID0gcmVxdWlyZSgnLi9faW52b2tlJyk7XG52YXIgaHRtbCA9IHJlcXVpcmUoJy4vX2h0bWwnKTtcbnZhciBjZWwgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgcHJvY2VzcyA9IGdsb2JhbC5wcm9jZXNzO1xudmFyIHNldFRhc2sgPSBnbG9iYWwuc2V0SW1tZWRpYXRlO1xudmFyIGNsZWFyVGFzayA9IGdsb2JhbC5jbGVhckltbWVkaWF0ZTtcbnZhciBNZXNzYWdlQ2hhbm5lbCA9IGdsb2JhbC5NZXNzYWdlQ2hhbm5lbDtcbnZhciBEaXNwYXRjaCA9IGdsb2JhbC5EaXNwYXRjaDtcbnZhciBjb3VudGVyID0gMDtcbnZhciBxdWV1ZSA9IHt9O1xudmFyIE9OUkVBRFlTVEFURUNIQU5HRSA9ICdvbnJlYWR5c3RhdGVjaGFuZ2UnO1xudmFyIGRlZmVyLCBjaGFubmVsLCBwb3J0O1xudmFyIHJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGlkID0gK3RoaXM7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbiAgaWYgKHF1ZXVlLmhhc093blByb3BlcnR5KGlkKSkge1xuICAgIHZhciBmbiA9IHF1ZXVlW2lkXTtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICAgIGZuKCk7XG4gIH1cbn07XG52YXIgbGlzdGVuZXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgcnVuLmNhbGwoZXZlbnQuZGF0YSk7XG59O1xuLy8gTm9kZS5qcyAwLjkrICYgSUUxMCsgaGFzIHNldEltbWVkaWF0ZSwgb3RoZXJ3aXNlOlxuaWYgKCFzZXRUYXNrIHx8ICFjbGVhclRhc2spIHtcbiAgc2V0VGFzayA9IGZ1bmN0aW9uIHNldEltbWVkaWF0ZShmbikge1xuICAgIHZhciBhcmdzID0gW107XG4gICAgdmFyIGkgPSAxO1xuICAgIHdoaWxlIChhcmd1bWVudHMubGVuZ3RoID4gaSkgYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcbiAgICBxdWV1ZVsrK2NvdW50ZXJdID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gICAgICBpbnZva2UodHlwZW9mIGZuID09ICdmdW5jdGlvbicgPyBmbiA6IEZ1bmN0aW9uKGZuKSwgYXJncyk7XG4gICAgfTtcbiAgICBkZWZlcihjb3VudGVyKTtcbiAgICByZXR1cm4gY291bnRlcjtcbiAgfTtcbiAgY2xlYXJUYXNrID0gZnVuY3Rpb24gY2xlYXJJbW1lZGlhdGUoaWQpIHtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICB9O1xuICAvLyBOb2RlLmpzIDAuOC1cbiAgaWYgKHJlcXVpcmUoJy4vX2NvZicpKHByb2Nlc3MpID09ICdwcm9jZXNzJykge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGN0eChydW4sIGlkLCAxKSk7XG4gICAgfTtcbiAgLy8gU3BoZXJlIChKUyBnYW1lIGVuZ2luZSkgRGlzcGF0Y2ggQVBJXG4gIH0gZWxzZSBpZiAoRGlzcGF0Y2ggJiYgRGlzcGF0Y2gubm93KSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIERpc3BhdGNoLm5vdyhjdHgocnVuLCBpZCwgMSkpO1xuICAgIH07XG4gIC8vIEJyb3dzZXJzIHdpdGggTWVzc2FnZUNoYW5uZWwsIGluY2x1ZGVzIFdlYldvcmtlcnNcbiAgfSBlbHNlIGlmIChNZXNzYWdlQ2hhbm5lbCkge1xuICAgIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgICBwb3J0ID0gY2hhbm5lbC5wb3J0MjtcbiAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGxpc3RlbmVyO1xuICAgIGRlZmVyID0gY3R4KHBvcnQucG9zdE1lc3NhZ2UsIHBvcnQsIDEpO1xuICAvLyBCcm93c2VycyB3aXRoIHBvc3RNZXNzYWdlLCBza2lwIFdlYldvcmtlcnNcbiAgLy8gSUU4IGhhcyBwb3N0TWVzc2FnZSwgYnV0IGl0J3Mgc3luYyAmIHR5cGVvZiBpdHMgcG9zdE1lc3NhZ2UgaXMgJ29iamVjdCdcbiAgfSBlbHNlIGlmIChnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lciAmJiB0eXBlb2YgcG9zdE1lc3NhZ2UgPT0gJ2Z1bmN0aW9uJyAmJiAhZ2xvYmFsLmltcG9ydFNjcmlwdHMpIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKGlkICsgJycsICcqJyk7XG4gICAgfTtcbiAgICBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGxpc3RlbmVyLCBmYWxzZSk7XG4gIC8vIElFOC1cbiAgfSBlbHNlIGlmIChPTlJFQURZU1RBVEVDSEFOR0UgaW4gY2VsKCdzY3JpcHQnKSkge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBodG1sLmFwcGVuZENoaWxkKGNlbCgnc2NyaXB0JykpW09OUkVBRFlTVEFURUNIQU5HRV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGh0bWwucmVtb3ZlQ2hpbGQodGhpcyk7XG4gICAgICAgIHJ1bi5jYWxsKGlkKTtcbiAgICAgIH07XG4gICAgfTtcbiAgLy8gUmVzdCBvbGQgYnJvd3NlcnNcbiAgfSBlbHNlIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgc2V0VGltZW91dChjdHgocnVuLCBpZCwgMSksIDApO1xuICAgIH07XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IHNldFRhc2ssXG4gIGNsZWFyOiBjbGVhclRhc2tcbn07XG4iLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIG1heCA9IE1hdGgubWF4O1xudmFyIG1pbiA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5kZXgsIGxlbmd0aCkge1xuICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbmRleCA8IDAgPyBtYXgoaW5kZXggKyBsZW5ndGgsIDApIDogbWluKGluZGV4LCBsZW5ndGgpO1xufTtcbiIsIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgPSBNYXRoLmNlaWw7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59O1xuIiwiLy8gdG8gaW5kZXhlZCBvYmplY3QsIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIElPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcbiIsIi8vIDcuMS4xNSBUb0xlbmd0aFxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuIiwiLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG4iLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgUykge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYgKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICh0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG4iLCJ2YXIgaWQgPSAwO1xudmFyIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBuYXZpZ2F0b3IgPSBnbG9iYWwubmF2aWdhdG9yO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5hdmlnYXRvciAmJiBuYXZpZ2F0b3IudXNlckFnZW50IHx8ICcnO1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgVFlQRSkge1xuICBpZiAoIWlzT2JqZWN0KGl0KSB8fCBpdC5fdCAhPT0gVFlQRSkgdGhyb3cgVHlwZUVycm9yKCdJbmNvbXBhdGlibGUgcmVjZWl2ZXIsICcgKyBUWVBFICsgJyByZXF1aXJlZCEnKTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIExJQlJBUlkgPSByZXF1aXJlKCcuL19saWJyYXJ5Jyk7XG52YXIgd2tzRXh0ID0gcmVxdWlyZSgnLi9fd2tzLWV4dCcpO1xudmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgdmFyICRTeW1ib2wgPSBjb3JlLlN5bWJvbCB8fCAoY29yZS5TeW1ib2wgPSBMSUJSQVJZID8ge30gOiBnbG9iYWwuU3ltYm9sIHx8IHt9KTtcbiAgaWYgKG5hbWUuY2hhckF0KDApICE9ICdfJyAmJiAhKG5hbWUgaW4gJFN5bWJvbCkpIGRlZmluZVByb3BlcnR5KCRTeW1ib2wsIG5hbWUsIHsgdmFsdWU6IHdrc0V4dC5mKG5hbWUpIH0pO1xufTtcbiIsImV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX3drcycpO1xuIiwidmFyIHN0b3JlID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ3drcycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xudmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLlN5bWJvbDtcbnZhciBVU0VfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xuXG52YXIgJGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPVxuICAgIFVTRV9TWU1CT0wgJiYgU3ltYm9sW25hbWVdIHx8IChVU0VfU1lNQk9MID8gU3ltYm9sIDogdWlkKSgnU3ltYm9sLicgKyBuYW1lKSk7XG59O1xuXG4kZXhwb3J0cy5zdG9yZSA9IHN0b3JlO1xuIiwidmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL19jbGFzc29mJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmdldEl0ZXJhdG9yTWV0aG9kID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCAhPSB1bmRlZmluZWQpIHJldHVybiBpdFtJVEVSQVRPUl1cbiAgICB8fCBpdFsnQEBpdGVyYXRvciddXG4gICAgfHwgSXRlcmF0b3JzW2NsYXNzb2YoaXQpXTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4vX2l0ZXItY2FsbCcpO1xudmFyIGlzQXJyYXlJdGVyID0gcmVxdWlyZSgnLi9faXMtYXJyYXktaXRlcicpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgY3JlYXRlUHJvcGVydHkgPSByZXF1aXJlKCcuL19jcmVhdGUtcHJvcGVydHknKTtcbnZhciBnZXRJdGVyRm4gPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFyZXF1aXJlKCcuL19pdGVyLWRldGVjdCcpKGZ1bmN0aW9uIChpdGVyKSB7IEFycmF5LmZyb20oaXRlcik7IH0pLCAnQXJyYXknLCB7XG4gIC8vIDIyLjEuMi4xIEFycmF5LmZyb20oYXJyYXlMaWtlLCBtYXBmbiA9IHVuZGVmaW5lZCwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbiAgZnJvbTogZnVuY3Rpb24gZnJvbShhcnJheUxpa2UgLyogLCBtYXBmbiA9IHVuZGVmaW5lZCwgdGhpc0FyZyA9IHVuZGVmaW5lZCAqLykge1xuICAgIHZhciBPID0gdG9PYmplY3QoYXJyYXlMaWtlKTtcbiAgICB2YXIgQyA9IHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgPyB0aGlzIDogQXJyYXk7XG4gICAgdmFyIGFMZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIHZhciBtYXBmbiA9IGFMZW4gPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkO1xuICAgIHZhciBtYXBwaW5nID0gbWFwZm4gIT09IHVuZGVmaW5lZDtcbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIHZhciBpdGVyRm4gPSBnZXRJdGVyRm4oTyk7XG4gICAgdmFyIGxlbmd0aCwgcmVzdWx0LCBzdGVwLCBpdGVyYXRvcjtcbiAgICBpZiAobWFwcGluZykgbWFwZm4gPSBjdHgobWFwZm4sIGFMZW4gPiAyID8gYXJndW1lbnRzWzJdIDogdW5kZWZpbmVkLCAyKTtcbiAgICAvLyBpZiBvYmplY3QgaXNuJ3QgaXRlcmFibGUgb3IgaXQncyBhcnJheSB3aXRoIGRlZmF1bHQgaXRlcmF0b3IgLSB1c2Ugc2ltcGxlIGNhc2VcbiAgICBpZiAoaXRlckZuICE9IHVuZGVmaW5lZCAmJiAhKEMgPT0gQXJyYXkgJiYgaXNBcnJheUl0ZXIoaXRlckZuKSkpIHtcbiAgICAgIGZvciAoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChPKSwgcmVzdWx0ID0gbmV3IEMoKTsgIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOyBpbmRleCsrKSB7XG4gICAgICAgIGNyZWF0ZVByb3BlcnR5KHJlc3VsdCwgaW5kZXgsIG1hcHBpbmcgPyBjYWxsKGl0ZXJhdG9yLCBtYXBmbiwgW3N0ZXAudmFsdWUsIGluZGV4XSwgdHJ1ZSkgOiBzdGVwLnZhbHVlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgICAgZm9yIChyZXN1bHQgPSBuZXcgQyhsZW5ndGgpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuICAgICAgICBjcmVhdGVQcm9wZXJ0eShyZXN1bHQsIGluZGV4LCBtYXBwaW5nID8gbWFwZm4oT1tpbmRleF0sIGluZGV4KSA6IE9baW5kZXhdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmVzdWx0Lmxlbmd0aCA9IGluZGV4O1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuL19hZGQtdG8tdW5zY29wYWJsZXMnKTtcbnZhciBzdGVwID0gcmVxdWlyZSgnLi9faXRlci1zdGVwJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xuXG4vLyAyMi4xLjMuNCBBcnJheS5wcm90b3R5cGUuZW50cmllcygpXG4vLyAyMi4xLjMuMTMgQXJyYXkucHJvdG90eXBlLmtleXMoKVxuLy8gMjIuMS4zLjI5IEFycmF5LnByb3RvdHlwZS52YWx1ZXMoKVxuLy8gMjIuMS4zLjMwIEFycmF5LnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoQXJyYXksICdBcnJheScsIGZ1bmN0aW9uIChpdGVyYXRlZCwga2luZCkge1xuICB0aGlzLl90ID0gdG9JT2JqZWN0KGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4gIHRoaXMuX2sgPSBraW5kOyAgICAgICAgICAgICAgICAvLyBraW5kXG4vLyAyMi4xLjUuMi4xICVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uICgpIHtcbiAgdmFyIE8gPSB0aGlzLl90O1xuICB2YXIga2luZCA9IHRoaXMuX2s7XG4gIHZhciBpbmRleCA9IHRoaXMuX2krKztcbiAgaWYgKCFPIHx8IGluZGV4ID49IE8ubGVuZ3RoKSB7XG4gICAgdGhpcy5fdCA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc3RlcCgxKTtcbiAgfVxuICBpZiAoa2luZCA9PSAna2V5cycpIHJldHVybiBzdGVwKDAsIGluZGV4KTtcbiAgaWYgKGtpbmQgPT0gJ3ZhbHVlcycpIHJldHVybiBzdGVwKDAsIE9baW5kZXhdKTtcbiAgcmV0dXJuIHN0ZXAoMCwgW2luZGV4LCBPW2luZGV4XV0pO1xufSwgJ3ZhbHVlcycpO1xuXG4vLyBhcmd1bWVudHNMaXN0W0BAaXRlcmF0b3JdIGlzICVBcnJheVByb3RvX3ZhbHVlcyUgKDkuNC40LjYsIDkuNC40LjcpXG5JdGVyYXRvcnMuQXJndW1lbnRzID0gSXRlcmF0b3JzLkFycmF5O1xuXG5hZGRUb1Vuc2NvcGFibGVzKCdrZXlzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCd2YWx1ZXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ2VudHJpZXMnKTtcbiIsInZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgRlByb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlO1xudmFyIG5hbWVSRSA9IC9eXFxzKmZ1bmN0aW9uIChbXiAoXSopLztcbnZhciBOQU1FID0gJ25hbWUnO1xuXG4vLyAxOS4yLjQuMiBuYW1lXG5OQU1FIGluIEZQcm90byB8fCByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmIGRQKEZQcm90bywgTkFNRSwge1xuICBjb25maWd1cmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gKCcnICsgdGhpcykubWF0Y2gobmFtZVJFKVsxXTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBzdHJvbmcgPSByZXF1aXJlKCcuL19jb2xsZWN0aW9uLXN0cm9uZycpO1xudmFyIHZhbGlkYXRlID0gcmVxdWlyZSgnLi9fdmFsaWRhdGUtY29sbGVjdGlvbicpO1xudmFyIE1BUCA9ICdNYXAnO1xuXG4vLyAyMy4xIE1hcCBPYmplY3RzXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvbGxlY3Rpb24nKShNQVAsIGZ1bmN0aW9uIChnZXQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIE1hcCgpIHsgcmV0dXJuIGdldCh0aGlzLCBhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCk7IH07XG59LCB7XG4gIC8vIDIzLjEuMy42IE1hcC5wcm90b3R5cGUuZ2V0KGtleSlcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoa2V5KSB7XG4gICAgdmFyIGVudHJ5ID0gc3Ryb25nLmdldEVudHJ5KHZhbGlkYXRlKHRoaXMsIE1BUCksIGtleSk7XG4gICAgcmV0dXJuIGVudHJ5ICYmIGVudHJ5LnY7XG4gIH0sXG4gIC8vIDIzLjEuMy45IE1hcC5wcm90b3R5cGUuc2V0KGtleSwgdmFsdWUpXG4gIHNldDogZnVuY3Rpb24gc2V0KGtleSwgdmFsdWUpIHtcbiAgICByZXR1cm4gc3Ryb25nLmRlZih2YWxpZGF0ZSh0aGlzLCBNQVApLCBrZXkgPT09IDAgPyAwIDoga2V5LCB2YWx1ZSk7XG4gIH1cbn0sIHN0cm9uZywgdHJ1ZSk7XG4iLCIvLyAxOS4xLjMuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYsICdPYmplY3QnLCB7IGFzc2lnbjogcmVxdWlyZSgnLi9fb2JqZWN0LWFzc2lnbicpIH0pO1xuIiwiLy8gMTkuMS4yLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgna2V5cycsIGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGtleXMoaXQpIHtcbiAgICByZXR1cm4gJGtleXModG9PYmplY3QoaXQpKTtcbiAgfTtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgPSByZXF1aXJlKCcuL19saWJyYXJ5Jyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG52YXIgYW5JbnN0YW5jZSA9IHJlcXVpcmUoJy4vX2FuLWluc3RhbmNlJyk7XG52YXIgZm9yT2YgPSByZXF1aXJlKCcuL19mb3Itb2YnKTtcbnZhciBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuL19zcGVjaWVzLWNvbnN0cnVjdG9yJyk7XG52YXIgdGFzayA9IHJlcXVpcmUoJy4vX3Rhc2snKS5zZXQ7XG52YXIgbWljcm90YXNrID0gcmVxdWlyZSgnLi9fbWljcm90YXNrJykoKTtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eU1vZHVsZSA9IHJlcXVpcmUoJy4vX25ldy1wcm9taXNlLWNhcGFiaWxpdHknKTtcbnZhciBwZXJmb3JtID0gcmVxdWlyZSgnLi9fcGVyZm9ybScpO1xudmFyIHVzZXJBZ2VudCA9IHJlcXVpcmUoJy4vX3VzZXItYWdlbnQnKTtcbnZhciBwcm9taXNlUmVzb2x2ZSA9IHJlcXVpcmUoJy4vX3Byb21pc2UtcmVzb2x2ZScpO1xudmFyIFBST01JU0UgPSAnUHJvbWlzZSc7XG52YXIgVHlwZUVycm9yID0gZ2xvYmFsLlR5cGVFcnJvcjtcbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgdmVyc2lvbnMgPSBwcm9jZXNzICYmIHByb2Nlc3MudmVyc2lvbnM7XG52YXIgdjggPSB2ZXJzaW9ucyAmJiB2ZXJzaW9ucy52OCB8fCAnJztcbnZhciAkUHJvbWlzZSA9IGdsb2JhbFtQUk9NSVNFXTtcbnZhciBpc05vZGUgPSBjbGFzc29mKHByb2Nlc3MpID09ICdwcm9jZXNzJztcbnZhciBlbXB0eSA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcbnZhciBJbnRlcm5hbCwgbmV3R2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5LCBPd25Qcm9taXNlQ2FwYWJpbGl0eSwgV3JhcHBlcjtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IG5ld0dlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlLmY7XG5cbnZhciBVU0VfTkFUSVZFID0gISFmdW5jdGlvbiAoKSB7XG4gIHRyeSB7XG4gICAgLy8gY29ycmVjdCBzdWJjbGFzc2luZyB3aXRoIEBAc3BlY2llcyBzdXBwb3J0XG4gICAgdmFyIHByb21pc2UgPSAkUHJvbWlzZS5yZXNvbHZlKDEpO1xuICAgIHZhciBGYWtlUHJvbWlzZSA9IChwcm9taXNlLmNvbnN0cnVjdG9yID0ge30pW3JlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyldID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgICAgIGV4ZWMoZW1wdHksIGVtcHR5KTtcbiAgICB9O1xuICAgIC8vIHVuaGFuZGxlZCByZWplY3Rpb25zIHRyYWNraW5nIHN1cHBvcnQsIE5vZGVKUyBQcm9taXNlIHdpdGhvdXQgaXQgZmFpbHMgQEBzcGVjaWVzIHRlc3RcbiAgICByZXR1cm4gKGlzTm9kZSB8fCB0eXBlb2YgUHJvbWlzZVJlamVjdGlvbkV2ZW50ID09ICdmdW5jdGlvbicpXG4gICAgICAmJiBwcm9taXNlLnRoZW4oZW1wdHkpIGluc3RhbmNlb2YgRmFrZVByb21pc2VcbiAgICAgIC8vIHY4IDYuNiAoTm9kZSAxMCBhbmQgQ2hyb21lIDY2KSBoYXZlIGEgYnVnIHdpdGggcmVzb2x2aW5nIGN1c3RvbSB0aGVuYWJsZXNcbiAgICAgIC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTgzMDU2NVxuICAgICAgLy8gd2UgY2FuJ3QgZGV0ZWN0IGl0IHN5bmNocm9ub3VzbHksIHNvIGp1c3QgY2hlY2sgdmVyc2lvbnNcbiAgICAgICYmIHY4LmluZGV4T2YoJzYuNicpICE9PSAwXG4gICAgICAmJiB1c2VyQWdlbnQuaW5kZXhPZignQ2hyb21lLzY2JykgPT09IC0xO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbn0oKTtcblxuLy8gaGVscGVyc1xudmFyIGlzVGhlbmFibGUgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIHRoZW47XG4gIHJldHVybiBpc09iamVjdChpdCkgJiYgdHlwZW9mICh0aGVuID0gaXQudGhlbikgPT0gJ2Z1bmN0aW9uJyA/IHRoZW4gOiBmYWxzZTtcbn07XG52YXIgbm90aWZ5ID0gZnVuY3Rpb24gKHByb21pc2UsIGlzUmVqZWN0KSB7XG4gIGlmIChwcm9taXNlLl9uKSByZXR1cm47XG4gIHByb21pc2UuX24gPSB0cnVlO1xuICB2YXIgY2hhaW4gPSBwcm9taXNlLl9jO1xuICBtaWNyb3Rhc2soZnVuY3Rpb24gKCkge1xuICAgIHZhciB2YWx1ZSA9IHByb21pc2UuX3Y7XG4gICAgdmFyIG9rID0gcHJvbWlzZS5fcyA9PSAxO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgcnVuID0gZnVuY3Rpb24gKHJlYWN0aW9uKSB7XG4gICAgICB2YXIgaGFuZGxlciA9IG9rID8gcmVhY3Rpb24ub2sgOiByZWFjdGlvbi5mYWlsO1xuICAgICAgdmFyIHJlc29sdmUgPSByZWFjdGlvbi5yZXNvbHZlO1xuICAgICAgdmFyIHJlamVjdCA9IHJlYWN0aW9uLnJlamVjdDtcbiAgICAgIHZhciBkb21haW4gPSByZWFjdGlvbi5kb21haW47XG4gICAgICB2YXIgcmVzdWx0LCB0aGVuLCBleGl0ZWQ7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoaGFuZGxlcikge1xuICAgICAgICAgIGlmICghb2spIHtcbiAgICAgICAgICAgIGlmIChwcm9taXNlLl9oID09IDIpIG9uSGFuZGxlVW5oYW5kbGVkKHByb21pc2UpO1xuICAgICAgICAgICAgcHJvbWlzZS5faCA9IDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChoYW5kbGVyID09PSB0cnVlKSByZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChkb21haW4pIGRvbWFpbi5lbnRlcigpO1xuICAgICAgICAgICAgcmVzdWx0ID0gaGFuZGxlcih2YWx1ZSk7IC8vIG1heSB0aHJvd1xuICAgICAgICAgICAgaWYgKGRvbWFpbikge1xuICAgICAgICAgICAgICBkb21haW4uZXhpdCgpO1xuICAgICAgICAgICAgICBleGl0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocmVzdWx0ID09PSByZWFjdGlvbi5wcm9taXNlKSB7XG4gICAgICAgICAgICByZWplY3QoVHlwZUVycm9yKCdQcm9taXNlLWNoYWluIGN5Y2xlJykpO1xuICAgICAgICAgIH0gZWxzZSBpZiAodGhlbiA9IGlzVGhlbmFibGUocmVzdWx0KSkge1xuICAgICAgICAgICAgdGhlbi5jYWxsKHJlc3VsdCwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9IGVsc2UgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9IGVsc2UgcmVqZWN0KHZhbHVlKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaWYgKGRvbWFpbiAmJiAhZXhpdGVkKSBkb21haW4uZXhpdCgpO1xuICAgICAgICByZWplY3QoZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB3aGlsZSAoY2hhaW4ubGVuZ3RoID4gaSkgcnVuKGNoYWluW2krK10pOyAvLyB2YXJpYWJsZSBsZW5ndGggLSBjYW4ndCB1c2UgZm9yRWFjaFxuICAgIHByb21pc2UuX2MgPSBbXTtcbiAgICBwcm9taXNlLl9uID0gZmFsc2U7XG4gICAgaWYgKGlzUmVqZWN0ICYmICFwcm9taXNlLl9oKSBvblVuaGFuZGxlZChwcm9taXNlKTtcbiAgfSk7XG59O1xudmFyIG9uVW5oYW5kbGVkID0gZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciB2YWx1ZSA9IHByb21pc2UuX3Y7XG4gICAgdmFyIHVuaGFuZGxlZCA9IGlzVW5oYW5kbGVkKHByb21pc2UpO1xuICAgIHZhciByZXN1bHQsIGhhbmRsZXIsIGNvbnNvbGU7XG4gICAgaWYgKHVuaGFuZGxlZCkge1xuICAgICAgcmVzdWx0ID0gcGVyZm9ybShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChpc05vZGUpIHtcbiAgICAgICAgICBwcm9jZXNzLmVtaXQoJ3VuaGFuZGxlZFJlamVjdGlvbicsIHZhbHVlLCBwcm9taXNlKTtcbiAgICAgICAgfSBlbHNlIGlmIChoYW5kbGVyID0gZ2xvYmFsLm9udW5oYW5kbGVkcmVqZWN0aW9uKSB7XG4gICAgICAgICAgaGFuZGxlcih7IHByb21pc2U6IHByb21pc2UsIHJlYXNvbjogdmFsdWUgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoKGNvbnNvbGUgPSBnbG9iYWwuY29uc29sZSkgJiYgY29uc29sZS5lcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuaGFuZGxlZCBwcm9taXNlIHJlamVjdGlvbicsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICAvLyBCcm93c2VycyBzaG91bGQgbm90IHRyaWdnZXIgYHJlamVjdGlvbkhhbmRsZWRgIGV2ZW50IGlmIGl0IHdhcyBoYW5kbGVkIGhlcmUsIE5vZGVKUyAtIHNob3VsZFxuICAgICAgcHJvbWlzZS5faCA9IGlzTm9kZSB8fCBpc1VuaGFuZGxlZChwcm9taXNlKSA/IDIgOiAxO1xuICAgIH0gcHJvbWlzZS5fYSA9IHVuZGVmaW5lZDtcbiAgICBpZiAodW5oYW5kbGVkICYmIHJlc3VsdC5lKSB0aHJvdyByZXN1bHQudjtcbiAgfSk7XG59O1xudmFyIGlzVW5oYW5kbGVkID0gZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgcmV0dXJuIHByb21pc2UuX2ggIT09IDEgJiYgKHByb21pc2UuX2EgfHwgcHJvbWlzZS5fYykubGVuZ3RoID09PSAwO1xufTtcbnZhciBvbkhhbmRsZVVuaGFuZGxlZCA9IGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gIHRhc2suY2FsbChnbG9iYWwsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaGFuZGxlcjtcbiAgICBpZiAoaXNOb2RlKSB7XG4gICAgICBwcm9jZXNzLmVtaXQoJ3JlamVjdGlvbkhhbmRsZWQnLCBwcm9taXNlKTtcbiAgICB9IGVsc2UgaWYgKGhhbmRsZXIgPSBnbG9iYWwub25yZWplY3Rpb25oYW5kbGVkKSB7XG4gICAgICBoYW5kbGVyKHsgcHJvbWlzZTogcHJvbWlzZSwgcmVhc29uOiBwcm9taXNlLl92IH0pO1xuICAgIH1cbiAgfSk7XG59O1xudmFyICRyZWplY3QgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgdmFyIHByb21pc2UgPSB0aGlzO1xuICBpZiAocHJvbWlzZS5fZCkgcmV0dXJuO1xuICBwcm9taXNlLl9kID0gdHJ1ZTtcbiAgcHJvbWlzZSA9IHByb21pc2UuX3cgfHwgcHJvbWlzZTsgLy8gdW53cmFwXG4gIHByb21pc2UuX3YgPSB2YWx1ZTtcbiAgcHJvbWlzZS5fcyA9IDI7XG4gIGlmICghcHJvbWlzZS5fYSkgcHJvbWlzZS5fYSA9IHByb21pc2UuX2Muc2xpY2UoKTtcbiAgbm90aWZ5KHByb21pc2UsIHRydWUpO1xufTtcbnZhciAkcmVzb2x2ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICB2YXIgcHJvbWlzZSA9IHRoaXM7XG4gIHZhciB0aGVuO1xuICBpZiAocHJvbWlzZS5fZCkgcmV0dXJuO1xuICBwcm9taXNlLl9kID0gdHJ1ZTtcbiAgcHJvbWlzZSA9IHByb21pc2UuX3cgfHwgcHJvbWlzZTsgLy8gdW53cmFwXG4gIHRyeSB7XG4gICAgaWYgKHByb21pc2UgPT09IHZhbHVlKSB0aHJvdyBUeXBlRXJyb3IoXCJQcm9taXNlIGNhbid0IGJlIHJlc29sdmVkIGl0c2VsZlwiKTtcbiAgICBpZiAodGhlbiA9IGlzVGhlbmFibGUodmFsdWUpKSB7XG4gICAgICBtaWNyb3Rhc2soZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgd3JhcHBlciA9IHsgX3c6IHByb21pc2UsIF9kOiBmYWxzZSB9OyAvLyB3cmFwXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhlbi5jYWxsKHZhbHVlLCBjdHgoJHJlc29sdmUsIHdyYXBwZXIsIDEpLCBjdHgoJHJlamVjdCwgd3JhcHBlciwgMSkpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgJHJlamVjdC5jYWxsKHdyYXBwZXIsIGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvbWlzZS5fdiA9IHZhbHVlO1xuICAgICAgcHJvbWlzZS5fcyA9IDE7XG4gICAgICBub3RpZnkocHJvbWlzZSwgZmFsc2UpO1xuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgICRyZWplY3QuY2FsbCh7IF93OiBwcm9taXNlLCBfZDogZmFsc2UgfSwgZSk7IC8vIHdyYXBcbiAgfVxufTtcblxuLy8gY29uc3RydWN0b3IgcG9seWZpbGxcbmlmICghVVNFX05BVElWRSkge1xuICAvLyAyNS40LjMuMSBQcm9taXNlKGV4ZWN1dG9yKVxuICAkUHJvbWlzZSA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3IpIHtcbiAgICBhbkluc3RhbmNlKHRoaXMsICRQcm9taXNlLCBQUk9NSVNFLCAnX2gnKTtcbiAgICBhRnVuY3Rpb24oZXhlY3V0b3IpO1xuICAgIEludGVybmFsLmNhbGwodGhpcyk7XG4gICAgdHJ5IHtcbiAgICAgIGV4ZWN1dG9yKGN0eCgkcmVzb2x2ZSwgdGhpcywgMSksIGN0eCgkcmVqZWN0LCB0aGlzLCAxKSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAkcmVqZWN0LmNhbGwodGhpcywgZXJyKTtcbiAgICB9XG4gIH07XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuICBJbnRlcm5hbCA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3IpIHtcbiAgICB0aGlzLl9jID0gW107ICAgICAgICAgICAgIC8vIDwtIGF3YWl0aW5nIHJlYWN0aW9uc1xuICAgIHRoaXMuX2EgPSB1bmRlZmluZWQ7ICAgICAgLy8gPC0gY2hlY2tlZCBpbiBpc1VuaGFuZGxlZCByZWFjdGlvbnNcbiAgICB0aGlzLl9zID0gMDsgICAgICAgICAgICAgIC8vIDwtIHN0YXRlXG4gICAgdGhpcy5fZCA9IGZhbHNlOyAgICAgICAgICAvLyA8LSBkb25lXG4gICAgdGhpcy5fdiA9IHVuZGVmaW5lZDsgICAgICAvLyA8LSB2YWx1ZVxuICAgIHRoaXMuX2ggPSAwOyAgICAgICAgICAgICAgLy8gPC0gcmVqZWN0aW9uIHN0YXRlLCAwIC0gZGVmYXVsdCwgMSAtIGhhbmRsZWQsIDIgLSB1bmhhbmRsZWRcbiAgICB0aGlzLl9uID0gZmFsc2U7ICAgICAgICAgIC8vIDwtIG5vdGlmeVxuICB9O1xuICBJbnRlcm5hbC5wcm90b3R5cGUgPSByZXF1aXJlKCcuL19yZWRlZmluZS1hbGwnKSgkUHJvbWlzZS5wcm90b3R5cGUsIHtcbiAgICAvLyAyNS40LjUuMyBQcm9taXNlLnByb3RvdHlwZS50aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKVxuICAgIHRoZW46IGZ1bmN0aW9uIHRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpIHtcbiAgICAgIHZhciByZWFjdGlvbiA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHNwZWNpZXNDb25zdHJ1Y3Rvcih0aGlzLCAkUHJvbWlzZSkpO1xuICAgICAgcmVhY3Rpb24ub2sgPSB0eXBlb2Ygb25GdWxmaWxsZWQgPT0gJ2Z1bmN0aW9uJyA/IG9uRnVsZmlsbGVkIDogdHJ1ZTtcbiAgICAgIHJlYWN0aW9uLmZhaWwgPSB0eXBlb2Ygb25SZWplY3RlZCA9PSAnZnVuY3Rpb24nICYmIG9uUmVqZWN0ZWQ7XG4gICAgICByZWFjdGlvbi5kb21haW4gPSBpc05vZGUgPyBwcm9jZXNzLmRvbWFpbiA6IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2MucHVzaChyZWFjdGlvbik7XG4gICAgICBpZiAodGhpcy5fYSkgdGhpcy5fYS5wdXNoKHJlYWN0aW9uKTtcbiAgICAgIGlmICh0aGlzLl9zKSBub3RpZnkodGhpcywgZmFsc2UpO1xuICAgICAgcmV0dXJuIHJlYWN0aW9uLnByb21pc2U7XG4gICAgfSxcbiAgICAvLyAyNS40LjUuMSBQcm9taXNlLnByb3RvdHlwZS5jYXRjaChvblJlamVjdGVkKVxuICAgICdjYXRjaCc6IGZ1bmN0aW9uIChvblJlamVjdGVkKSB7XG4gICAgICByZXR1cm4gdGhpcy50aGVuKHVuZGVmaW5lZCwgb25SZWplY3RlZCk7XG4gICAgfVxuICB9KTtcbiAgT3duUHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHByb21pc2UgPSBuZXcgSW50ZXJuYWwoKTtcbiAgICB0aGlzLnByb21pc2UgPSBwcm9taXNlO1xuICAgIHRoaXMucmVzb2x2ZSA9IGN0eCgkcmVzb2x2ZSwgcHJvbWlzZSwgMSk7XG4gICAgdGhpcy5yZWplY3QgPSBjdHgoJHJlamVjdCwgcHJvbWlzZSwgMSk7XG4gIH07XG4gIG5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlLmYgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uIChDKSB7XG4gICAgcmV0dXJuIEMgPT09ICRQcm9taXNlIHx8IEMgPT09IFdyYXBwZXJcbiAgICAgID8gbmV3IE93blByb21pc2VDYXBhYmlsaXR5KEMpXG4gICAgICA6IG5ld0dlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eShDKTtcbiAgfTtcbn1cblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgeyBQcm9taXNlOiAkUHJvbWlzZSB9KTtcbnJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJykoJFByb21pc2UsIFBST01JU0UpO1xucmVxdWlyZSgnLi9fc2V0LXNwZWNpZXMnKShQUk9NSVNFKTtcbldyYXBwZXIgPSByZXF1aXJlKCcuL19jb3JlJylbUFJPTUlTRV07XG5cbi8vIHN0YXRpY3NcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjUgUHJvbWlzZS5yZWplY3QocilcbiAgcmVqZWN0OiBmdW5jdGlvbiByZWplY3Qocikge1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkodGhpcyk7XG4gICAgdmFyICQkcmVqZWN0ID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgJCRyZWplY3Qocik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIChMSUJSQVJZIHx8ICFVU0VfTkFUSVZFKSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuNiBQcm9taXNlLnJlc29sdmUoeClcbiAgcmVzb2x2ZTogZnVuY3Rpb24gcmVzb2x2ZSh4KSB7XG4gICAgcmV0dXJuIHByb21pc2VSZXNvbHZlKExJQlJBUlkgJiYgdGhpcyA9PT0gV3JhcHBlciA/ICRQcm9taXNlIDogdGhpcywgeCk7XG4gIH1cbn0pO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhKFVTRV9OQVRJVkUgJiYgcmVxdWlyZSgnLi9faXRlci1kZXRlY3QnKShmdW5jdGlvbiAoaXRlcikge1xuICAkUHJvbWlzZS5hbGwoaXRlcilbJ2NhdGNoJ10oZW1wdHkpO1xufSkpLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC4xIFByb21pc2UuYWxsKGl0ZXJhYmxlKVxuICBhbGw6IGZ1bmN0aW9uIGFsbChpdGVyYWJsZSkge1xuICAgIHZhciBDID0gdGhpcztcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KEMpO1xuICAgIHZhciByZXNvbHZlID0gY2FwYWJpbGl0eS5yZXNvbHZlO1xuICAgIHZhciByZWplY3QgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICB2YXIgcmVzdWx0ID0gcGVyZm9ybShmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgdmFsdWVzID0gW107XG4gICAgICB2YXIgaW5kZXggPSAwO1xuICAgICAgdmFyIHJlbWFpbmluZyA9IDE7XG4gICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gICAgICAgIHZhciAkaW5kZXggPSBpbmRleCsrO1xuICAgICAgICB2YXIgYWxyZWFkeUNhbGxlZCA9IGZhbHNlO1xuICAgICAgICB2YWx1ZXMucHVzaCh1bmRlZmluZWQpO1xuICAgICAgICByZW1haW5pbmcrKztcbiAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgaWYgKGFscmVhZHlDYWxsZWQpIHJldHVybjtcbiAgICAgICAgICBhbHJlYWR5Q2FsbGVkID0gdHJ1ZTtcbiAgICAgICAgICB2YWx1ZXNbJGluZGV4XSA9IHZhbHVlO1xuICAgICAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcbiAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgIH0pO1xuICAgIGlmIChyZXN1bHQuZSkgcmVqZWN0KHJlc3VsdC52KTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9LFxuICAvLyAyNS40LjQuNCBQcm9taXNlLnJhY2UoaXRlcmFibGUpXG4gIHJhY2U6IGZ1bmN0aW9uIHJhY2UoaXRlcmFibGUpIHtcbiAgICB2YXIgQyA9IHRoaXM7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKTtcbiAgICB2YXIgcmVqZWN0ID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIHJlc3VsdCA9IHBlcmZvcm0oZnVuY3Rpb24gKCkge1xuICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBmdW5jdGlvbiAocHJvbWlzZSkge1xuICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihjYXBhYmlsaXR5LnJlc29sdmUsIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBpZiAocmVzdWx0LmUpIHJlamVjdChyZXN1bHQudik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG4iLCIvLyAyMS4yLjUuMyBnZXQgUmVnRXhwLnByb3RvdHlwZS5mbGFncygpXG5pZiAocmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAvLi9nLmZsYWdzICE9ICdnJykgcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZihSZWdFeHAucHJvdG90eXBlLCAnZmxhZ3MnLCB7XG4gIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgZ2V0OiByZXF1aXJlKCcuL19mbGFncycpXG59KTtcbiIsIi8vIEBAc3BsaXQgbG9naWNcbnJlcXVpcmUoJy4vX2ZpeC1yZS13a3MnKSgnc3BsaXQnLCAyLCBmdW5jdGlvbiAoZGVmaW5lZCwgU1BMSVQsICRzcGxpdCkge1xuICAndXNlIHN0cmljdCc7XG4gIHZhciBpc1JlZ0V4cCA9IHJlcXVpcmUoJy4vX2lzLXJlZ2V4cCcpO1xuICB2YXIgX3NwbGl0ID0gJHNwbGl0O1xuICB2YXIgJHB1c2ggPSBbXS5wdXNoO1xuICB2YXIgJFNQTElUID0gJ3NwbGl0JztcbiAgdmFyIExFTkdUSCA9ICdsZW5ndGgnO1xuICB2YXIgTEFTVF9JTkRFWCA9ICdsYXN0SW5kZXgnO1xuICBpZiAoXG4gICAgJ2FiYmMnWyRTUExJVF0oLyhiKSovKVsxXSA9PSAnYycgfHxcbiAgICAndGVzdCdbJFNQTElUXSgvKD86KS8sIC0xKVtMRU5HVEhdICE9IDQgfHxcbiAgICAnYWInWyRTUExJVF0oLyg/OmFiKSovKVtMRU5HVEhdICE9IDIgfHxcbiAgICAnLidbJFNQTElUXSgvKC4/KSguPykvKVtMRU5HVEhdICE9IDQgfHxcbiAgICAnLidbJFNQTElUXSgvKCkoKS8pW0xFTkdUSF0gPiAxIHx8XG4gICAgJydbJFNQTElUXSgvLj8vKVtMRU5HVEhdXG4gICkge1xuICAgIHZhciBOUENHID0gLygpPz8vLmV4ZWMoJycpWzFdID09PSB1bmRlZmluZWQ7IC8vIG5vbnBhcnRpY2lwYXRpbmcgY2FwdHVyaW5nIGdyb3VwXG4gICAgLy8gYmFzZWQgb24gZXM1LXNoaW0gaW1wbGVtZW50YXRpb24sIG5lZWQgdG8gcmV3b3JrIGl0XG4gICAgJHNwbGl0ID0gZnVuY3Rpb24gKHNlcGFyYXRvciwgbGltaXQpIHtcbiAgICAgIHZhciBzdHJpbmcgPSBTdHJpbmcodGhpcyk7XG4gICAgICBpZiAoc2VwYXJhdG9yID09PSB1bmRlZmluZWQgJiYgbGltaXQgPT09IDApIHJldHVybiBbXTtcbiAgICAgIC8vIElmIGBzZXBhcmF0b3JgIGlzIG5vdCBhIHJlZ2V4LCB1c2UgbmF0aXZlIHNwbGl0XG4gICAgICBpZiAoIWlzUmVnRXhwKHNlcGFyYXRvcikpIHJldHVybiBfc3BsaXQuY2FsbChzdHJpbmcsIHNlcGFyYXRvciwgbGltaXQpO1xuICAgICAgdmFyIG91dHB1dCA9IFtdO1xuICAgICAgdmFyIGZsYWdzID0gKHNlcGFyYXRvci5pZ25vcmVDYXNlID8gJ2knIDogJycpICtcbiAgICAgICAgICAgICAgICAgIChzZXBhcmF0b3IubXVsdGlsaW5lID8gJ20nIDogJycpICtcbiAgICAgICAgICAgICAgICAgIChzZXBhcmF0b3IudW5pY29kZSA/ICd1JyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAoc2VwYXJhdG9yLnN0aWNreSA/ICd5JyA6ICcnKTtcbiAgICAgIHZhciBsYXN0TGFzdEluZGV4ID0gMDtcbiAgICAgIHZhciBzcGxpdExpbWl0ID0gbGltaXQgPT09IHVuZGVmaW5lZCA/IDQyOTQ5NjcyOTUgOiBsaW1pdCA+Pj4gMDtcbiAgICAgIC8vIE1ha2UgYGdsb2JhbGAgYW5kIGF2b2lkIGBsYXN0SW5kZXhgIGlzc3VlcyBieSB3b3JraW5nIHdpdGggYSBjb3B5XG4gICAgICB2YXIgc2VwYXJhdG9yQ29weSA9IG5ldyBSZWdFeHAoc2VwYXJhdG9yLnNvdXJjZSwgZmxhZ3MgKyAnZycpO1xuICAgICAgdmFyIHNlcGFyYXRvcjIsIG1hdGNoLCBsYXN0SW5kZXgsIGxhc3RMZW5ndGgsIGk7XG4gICAgICAvLyBEb2Vzbid0IG5lZWQgZmxhZ3MgZ3ksIGJ1dCB0aGV5IGRvbid0IGh1cnRcbiAgICAgIGlmICghTlBDRykgc2VwYXJhdG9yMiA9IG5ldyBSZWdFeHAoJ14nICsgc2VwYXJhdG9yQ29weS5zb3VyY2UgKyAnJCg/IVxcXFxzKScsIGZsYWdzKTtcbiAgICAgIHdoaWxlIChtYXRjaCA9IHNlcGFyYXRvckNvcHkuZXhlYyhzdHJpbmcpKSB7XG4gICAgICAgIC8vIGBzZXBhcmF0b3JDb3B5Lmxhc3RJbmRleGAgaXMgbm90IHJlbGlhYmxlIGNyb3NzLWJyb3dzZXJcbiAgICAgICAgbGFzdEluZGV4ID0gbWF0Y2guaW5kZXggKyBtYXRjaFswXVtMRU5HVEhdO1xuICAgICAgICBpZiAobGFzdEluZGV4ID4gbGFzdExhc3RJbmRleCkge1xuICAgICAgICAgIG91dHB1dC5wdXNoKHN0cmluZy5zbGljZShsYXN0TGFzdEluZGV4LCBtYXRjaC5pbmRleCkpO1xuICAgICAgICAgIC8vIEZpeCBicm93c2VycyB3aG9zZSBgZXhlY2AgbWV0aG9kcyBkb24ndCBjb25zaXN0ZW50bHkgcmV0dXJuIGB1bmRlZmluZWRgIGZvciBOUENHXG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWxvb3AtZnVuY1xuICAgICAgICAgIGlmICghTlBDRyAmJiBtYXRjaFtMRU5HVEhdID4gMSkgbWF0Y2hbMF0ucmVwbGFjZShzZXBhcmF0b3IyLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBmb3IgKGkgPSAxOyBpIDwgYXJndW1lbnRzW0xFTkdUSF0gLSAyOyBpKyspIGlmIChhcmd1bWVudHNbaV0gPT09IHVuZGVmaW5lZCkgbWF0Y2hbaV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaWYgKG1hdGNoW0xFTkdUSF0gPiAxICYmIG1hdGNoLmluZGV4IDwgc3RyaW5nW0xFTkdUSF0pICRwdXNoLmFwcGx5KG91dHB1dCwgbWF0Y2guc2xpY2UoMSkpO1xuICAgICAgICAgIGxhc3RMZW5ndGggPSBtYXRjaFswXVtMRU5HVEhdO1xuICAgICAgICAgIGxhc3RMYXN0SW5kZXggPSBsYXN0SW5kZXg7XG4gICAgICAgICAgaWYgKG91dHB1dFtMRU5HVEhdID49IHNwbGl0TGltaXQpIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzZXBhcmF0b3JDb3B5W0xBU1RfSU5ERVhdID09PSBtYXRjaC5pbmRleCkgc2VwYXJhdG9yQ29weVtMQVNUX0lOREVYXSsrOyAvLyBBdm9pZCBhbiBpbmZpbml0ZSBsb29wXG4gICAgICB9XG4gICAgICBpZiAobGFzdExhc3RJbmRleCA9PT0gc3RyaW5nW0xFTkdUSF0pIHtcbiAgICAgICAgaWYgKGxhc3RMZW5ndGggfHwgIXNlcGFyYXRvckNvcHkudGVzdCgnJykpIG91dHB1dC5wdXNoKCcnKTtcbiAgICAgIH0gZWxzZSBvdXRwdXQucHVzaChzdHJpbmcuc2xpY2UobGFzdExhc3RJbmRleCkpO1xuICAgICAgcmV0dXJuIG91dHB1dFtMRU5HVEhdID4gc3BsaXRMaW1pdCA/IG91dHB1dC5zbGljZSgwLCBzcGxpdExpbWl0KSA6IG91dHB1dDtcbiAgICB9O1xuICAvLyBDaGFrcmEsIFY4XG4gIH0gZWxzZSBpZiAoJzAnWyRTUExJVF0odW5kZWZpbmVkLCAwKVtMRU5HVEhdKSB7XG4gICAgJHNwbGl0ID0gZnVuY3Rpb24gKHNlcGFyYXRvciwgbGltaXQpIHtcbiAgICAgIHJldHVybiBzZXBhcmF0b3IgPT09IHVuZGVmaW5lZCAmJiBsaW1pdCA9PT0gMCA/IFtdIDogX3NwbGl0LmNhbGwodGhpcywgc2VwYXJhdG9yLCBsaW1pdCk7XG4gICAgfTtcbiAgfVxuICAvLyAyMS4xLjMuMTcgU3RyaW5nLnByb3RvdHlwZS5zcGxpdChzZXBhcmF0b3IsIGxpbWl0KVxuICByZXR1cm4gW2Z1bmN0aW9uIHNwbGl0KHNlcGFyYXRvciwgbGltaXQpIHtcbiAgICB2YXIgTyA9IGRlZmluZWQodGhpcyk7XG4gICAgdmFyIGZuID0gc2VwYXJhdG9yID09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IHNlcGFyYXRvcltTUExJVF07XG4gICAgcmV0dXJuIGZuICE9PSB1bmRlZmluZWQgPyBmbi5jYWxsKHNlcGFyYXRvciwgTywgbGltaXQpIDogJHNwbGl0LmNhbGwoU3RyaW5nKE8pLCBzZXBhcmF0b3IsIGxpbWl0KTtcbiAgfSwgJHNwbGl0XTtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xucmVxdWlyZSgnLi9lczYucmVnZXhwLmZsYWdzJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciAkZmxhZ3MgPSByZXF1aXJlKCcuL19mbGFncycpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcbnZhciBUT19TVFJJTkcgPSAndG9TdHJpbmcnO1xudmFyICR0b1N0cmluZyA9IC8uL1tUT19TVFJJTkddO1xuXG52YXIgZGVmaW5lID0gZnVuY3Rpb24gKGZuKSB7XG4gIHJlcXVpcmUoJy4vX3JlZGVmaW5lJykoUmVnRXhwLnByb3RvdHlwZSwgVE9fU1RSSU5HLCBmbiwgdHJ1ZSk7XG59O1xuXG4vLyAyMS4yLjUuMTQgUmVnRXhwLnByb3RvdHlwZS50b1N0cmluZygpXG5pZiAocmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7IHJldHVybiAkdG9TdHJpbmcuY2FsbCh7IHNvdXJjZTogJ2EnLCBmbGFnczogJ2InIH0pICE9ICcvYS9iJzsgfSkpIHtcbiAgZGVmaW5lKGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHZhciBSID0gYW5PYmplY3QodGhpcyk7XG4gICAgcmV0dXJuICcvJy5jb25jYXQoUi5zb3VyY2UsICcvJyxcbiAgICAgICdmbGFncycgaW4gUiA/IFIuZmxhZ3MgOiAhREVTQ1JJUFRPUlMgJiYgUiBpbnN0YW5jZW9mIFJlZ0V4cCA/ICRmbGFncy5jYWxsKFIpIDogdW5kZWZpbmVkKTtcbiAgfSk7XG4vLyBGRjQ0LSBSZWdFeHAjdG9TdHJpbmcgaGFzIGEgd3JvbmcgbmFtZVxufSBlbHNlIGlmICgkdG9TdHJpbmcubmFtZSAhPSBUT19TVFJJTkcpIHtcbiAgZGVmaW5lKGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiAkdG9TdHJpbmcuY2FsbCh0aGlzKTtcbiAgfSk7XG59XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJGF0ID0gcmVxdWlyZSgnLi9fc3RyaW5nLWF0JykodHJ1ZSk7XG5cbi8vIDIxLjEuMy4yNyBTdHJpbmcucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoU3RyaW5nLCAnU3RyaW5nJywgZnVuY3Rpb24gKGl0ZXJhdGVkKSB7XG4gIHRoaXMuX3QgPSBTdHJpbmcoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbi8vIDIxLjEuNS4yLjEgJVN0cmluZ0l0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uICgpIHtcbiAgdmFyIE8gPSB0aGlzLl90O1xuICB2YXIgaW5kZXggPSB0aGlzLl9pO1xuICB2YXIgcG9pbnQ7XG4gIGlmIChpbmRleCA+PSBPLmxlbmd0aCkgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICBwb2ludCA9ICRhdChPLCBpbmRleCk7XG4gIHRoaXMuX2kgKz0gcG9pbnQubGVuZ3RoO1xuICByZXR1cm4geyB2YWx1ZTogcG9pbnQsIGRvbmU6IGZhbHNlIH07XG59KTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIEVDTUFTY3JpcHQgNiBzeW1ib2xzIHNoaW1cbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBNRVRBID0gcmVxdWlyZSgnLi9fbWV0YScpLktFWTtcbnZhciAkZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbnZhciB3a3MgPSByZXF1aXJlKCcuL193a3MnKTtcbnZhciB3a3NFeHQgPSByZXF1aXJlKCcuL193a3MtZXh0Jyk7XG52YXIgd2tzRGVmaW5lID0gcmVxdWlyZSgnLi9fd2tzLWRlZmluZScpO1xudmFyIGVudW1LZXlzID0gcmVxdWlyZSgnLi9fZW51bS1rZXlzJyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4vX2lzLWFycmF5Jyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgX2NyZWF0ZSA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKTtcbnZhciBnT1BORXh0ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4tZXh0Jyk7XG52YXIgJEdPUEQgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpO1xudmFyICREUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciBnT1BEID0gJEdPUEQuZjtcbnZhciBkUCA9ICREUC5mO1xudmFyIGdPUE4gPSBnT1BORXh0LmY7XG52YXIgJFN5bWJvbCA9IGdsb2JhbC5TeW1ib2w7XG52YXIgJEpTT04gPSBnbG9iYWwuSlNPTjtcbnZhciBfc3RyaW5naWZ5ID0gJEpTT04gJiYgJEpTT04uc3RyaW5naWZ5O1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xudmFyIEhJRERFTiA9IHdrcygnX2hpZGRlbicpO1xudmFyIFRPX1BSSU1JVElWRSA9IHdrcygndG9QcmltaXRpdmUnKTtcbnZhciBpc0VudW0gPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbnZhciBTeW1ib2xSZWdpc3RyeSA9IHNoYXJlZCgnc3ltYm9sLXJlZ2lzdHJ5Jyk7XG52YXIgQWxsU3ltYm9scyA9IHNoYXJlZCgnc3ltYm9scycpO1xudmFyIE9QU3ltYm9scyA9IHNoYXJlZCgnb3Atc3ltYm9scycpO1xudmFyIE9iamVjdFByb3RvID0gT2JqZWN0W1BST1RPVFlQRV07XG52YXIgVVNFX05BVElWRSA9IHR5cGVvZiAkU3ltYm9sID09ICdmdW5jdGlvbic7XG52YXIgUU9iamVjdCA9IGdsb2JhbC5RT2JqZWN0O1xuLy8gRG9uJ3QgdXNlIHNldHRlcnMgaW4gUXQgU2NyaXB0LCBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMTczXG52YXIgc2V0dGVyID0gIVFPYmplY3QgfHwgIVFPYmplY3RbUFJPVE9UWVBFXSB8fCAhUU9iamVjdFtQUk9UT1RZUEVdLmZpbmRDaGlsZDtcblxuLy8gZmFsbGJhY2sgZm9yIG9sZCBBbmRyb2lkLCBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9Njg3XG52YXIgc2V0U3ltYm9sRGVzYyA9IERFU0NSSVBUT1JTICYmICRmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBfY3JlYXRlKGRQKHt9LCAnYScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRQKHRoaXMsICdhJywgeyB2YWx1ZTogNyB9KS5hOyB9XG4gIH0pKS5hICE9IDc7XG59KSA/IGZ1bmN0aW9uIChpdCwga2V5LCBEKSB7XG4gIHZhciBwcm90b0Rlc2MgPSBnT1BEKE9iamVjdFByb3RvLCBrZXkpO1xuICBpZiAocHJvdG9EZXNjKSBkZWxldGUgT2JqZWN0UHJvdG9ba2V5XTtcbiAgZFAoaXQsIGtleSwgRCk7XG4gIGlmIChwcm90b0Rlc2MgJiYgaXQgIT09IE9iamVjdFByb3RvKSBkUChPYmplY3RQcm90bywga2V5LCBwcm90b0Rlc2MpO1xufSA6IGRQO1xuXG52YXIgd3JhcCA9IGZ1bmN0aW9uICh0YWcpIHtcbiAgdmFyIHN5bSA9IEFsbFN5bWJvbHNbdGFnXSA9IF9jcmVhdGUoJFN5bWJvbFtQUk9UT1RZUEVdKTtcbiAgc3ltLl9rID0gdGFnO1xuICByZXR1cm4gc3ltO1xufTtcblxudmFyIGlzU3ltYm9sID0gVVNFX05BVElWRSAmJiB0eXBlb2YgJFN5bWJvbC5pdGVyYXRvciA9PSAnc3ltYm9sJyA/IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnO1xufSA6IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgaW5zdGFuY2VvZiAkU3ltYm9sO1xufTtcblxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIEQpIHtcbiAgaWYgKGl0ID09PSBPYmplY3RQcm90bykgJGRlZmluZVByb3BlcnR5KE9QU3ltYm9scywga2V5LCBEKTtcbiAgYW5PYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBhbk9iamVjdChEKTtcbiAgaWYgKGhhcyhBbGxTeW1ib2xzLCBrZXkpKSB7XG4gICAgaWYgKCFELmVudW1lcmFibGUpIHtcbiAgICAgIGlmICghaGFzKGl0LCBISURERU4pKSBkUChpdCwgSElEREVOLCBjcmVhdGVEZXNjKDEsIHt9KSk7XG4gICAgICBpdFtISURERU5dW2tleV0gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSkgaXRbSElEREVOXVtrZXldID0gZmFsc2U7XG4gICAgICBEID0gX2NyZWF0ZShELCB7IGVudW1lcmFibGU6IGNyZWF0ZURlc2MoMCwgZmFsc2UpIH0pO1xuICAgIH0gcmV0dXJuIHNldFN5bWJvbERlc2MoaXQsIGtleSwgRCk7XG4gIH0gcmV0dXJuIGRQKGl0LCBrZXksIEQpO1xufTtcbnZhciAkZGVmaW5lUHJvcGVydGllcyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoaXQsIFApIHtcbiAgYW5PYmplY3QoaXQpO1xuICB2YXIga2V5cyA9IGVudW1LZXlzKFAgPSB0b0lPYmplY3QoUCkpO1xuICB2YXIgaSA9IDA7XG4gIHZhciBsID0ga2V5cy5sZW5ndGg7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChsID4gaSkgJGRlZmluZVByb3BlcnR5KGl0LCBrZXkgPSBrZXlzW2krK10sIFBba2V5XSk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgJGNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpdCwgUCkge1xuICByZXR1cm4gUCA9PT0gdW5kZWZpbmVkID8gX2NyZWF0ZShpdCkgOiAkZGVmaW5lUHJvcGVydGllcyhfY3JlYXRlKGl0KSwgUCk7XG59O1xudmFyICRwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKGtleSkge1xuICB2YXIgRSA9IGlzRW51bS5jYWxsKHRoaXMsIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSkpO1xuICBpZiAodGhpcyA9PT0gT2JqZWN0UHJvdG8gJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPUFN5bWJvbHMsIGtleSkpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIEUgfHwgIWhhcyh0aGlzLCBrZXkpIHx8ICFoYXMoQWxsU3ltYm9scywga2V5KSB8fCBoYXModGhpcywgSElEREVOKSAmJiB0aGlzW0hJRERFTl1ba2V5XSA/IEUgOiB0cnVlO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpIHtcbiAgaXQgPSB0b0lPYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBpZiAoaXQgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKSByZXR1cm47XG4gIHZhciBEID0gZ09QRChpdCwga2V5KTtcbiAgaWYgKEQgJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIShoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKSkgRC5lbnVtZXJhYmxlID0gdHJ1ZTtcbiAgcmV0dXJuIEQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eU5hbWVzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCkge1xuICB2YXIgbmFtZXMgPSBnT1BOKHRvSU9iamVjdChpdCkpO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBpID0gMDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIHtcbiAgICBpZiAoIWhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiBrZXkgIT0gSElEREVOICYmIGtleSAhPSBNRVRBKSByZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoaXQpIHtcbiAgdmFyIElTX09QID0gaXQgPT09IE9iamVjdFByb3RvO1xuICB2YXIgbmFtZXMgPSBnT1BOKElTX09QID8gT1BTeW1ib2xzIDogdG9JT2JqZWN0KGl0KSk7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGkgPSAwO1xuICB2YXIga2V5O1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkge1xuICAgIGlmIChoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYgKElTX09QID8gaGFzKE9iamVjdFByb3RvLCBrZXkpIDogdHJ1ZSkpIHJlc3VsdC5wdXNoKEFsbFN5bWJvbHNba2V5XSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8vIDE5LjQuMS4xIFN5bWJvbChbZGVzY3JpcHRpb25dKVxuaWYgKCFVU0VfTkFUSVZFKSB7XG4gICRTeW1ib2wgPSBmdW5jdGlvbiBTeW1ib2woKSB7XG4gICAgaWYgKHRoaXMgaW5zdGFuY2VvZiAkU3ltYm9sKSB0aHJvdyBUeXBlRXJyb3IoJ1N5bWJvbCBpcyBub3QgYSBjb25zdHJ1Y3RvciEnKTtcbiAgICB2YXIgdGFnID0gdWlkKGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTtcbiAgICB2YXIgJHNldCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgaWYgKHRoaXMgPT09IE9iamVjdFByb3RvKSAkc2V0LmNhbGwoT1BTeW1ib2xzLCB2YWx1ZSk7XG4gICAgICBpZiAoaGFzKHRoaXMsIEhJRERFTikgJiYgaGFzKHRoaXNbSElEREVOXSwgdGFnKSkgdGhpc1tISURERU5dW3RhZ10gPSBmYWxzZTtcbiAgICAgIHNldFN5bWJvbERlc2ModGhpcywgdGFnLCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG4gICAgfTtcbiAgICBpZiAoREVTQ1JJUFRPUlMgJiYgc2V0dGVyKSBzZXRTeW1ib2xEZXNjKE9iamVjdFByb3RvLCB0YWcsIHsgY29uZmlndXJhYmxlOiB0cnVlLCBzZXQ6ICRzZXQgfSk7XG4gICAgcmV0dXJuIHdyYXAodGFnKTtcbiAgfTtcbiAgcmVkZWZpbmUoJFN5bWJvbFtQUk9UT1RZUEVdLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5faztcbiAgfSk7XG5cbiAgJEdPUEQuZiA9ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG4gICREUC5mID0gJGRlZmluZVByb3BlcnR5O1xuICByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmYgPSBnT1BORXh0LmYgPSAkZ2V0T3duUHJvcGVydHlOYW1lcztcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpLmYgPSAkcHJvcGVydHlJc0VudW1lcmFibGU7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJykuZiA9ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbiAgaWYgKERFU0NSSVBUT1JTICYmICFyZXF1aXJlKCcuL19saWJyYXJ5JykpIHtcbiAgICByZWRlZmluZShPYmplY3RQcm90bywgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJywgJHByb3BlcnR5SXNFbnVtZXJhYmxlLCB0cnVlKTtcbiAgfVxuXG4gIHdrc0V4dC5mID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICByZXR1cm4gd3JhcCh3a3MobmFtZSkpO1xuICB9O1xufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7IFN5bWJvbDogJFN5bWJvbCB9KTtcblxuZm9yICh2YXIgZXM2U3ltYm9scyA9IChcbiAgLy8gMTkuNC4yLjIsIDE5LjQuMi4zLCAxOS40LjIuNCwgMTkuNC4yLjYsIDE5LjQuMi44LCAxOS40LjIuOSwgMTkuNC4yLjEwLCAxOS40LjIuMTEsIDE5LjQuMi4xMiwgMTkuNC4yLjEzLCAxOS40LjIuMTRcbiAgJ2hhc0luc3RhbmNlLGlzQ29uY2F0U3ByZWFkYWJsZSxpdGVyYXRvcixtYXRjaCxyZXBsYWNlLHNlYXJjaCxzcGVjaWVzLHNwbGl0LHRvUHJpbWl0aXZlLHRvU3RyaW5nVGFnLHVuc2NvcGFibGVzJ1xuKS5zcGxpdCgnLCcpLCBqID0gMDsgZXM2U3ltYm9scy5sZW5ndGggPiBqOyl3a3MoZXM2U3ltYm9sc1tqKytdKTtcblxuZm9yICh2YXIgd2VsbEtub3duU3ltYm9scyA9ICRrZXlzKHdrcy5zdG9yZSksIGsgPSAwOyB3ZWxsS25vd25TeW1ib2xzLmxlbmd0aCA+IGs7KSB3a3NEZWZpbmUod2VsbEtub3duU3ltYm9sc1trKytdKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ1N5bWJvbCcsIHtcbiAgLy8gMTkuNC4yLjEgU3ltYm9sLmZvcihrZXkpXG4gICdmb3InOiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIGhhcyhTeW1ib2xSZWdpc3RyeSwga2V5ICs9ICcnKVxuICAgICAgPyBTeW1ib2xSZWdpc3RyeVtrZXldXG4gICAgICA6IFN5bWJvbFJlZ2lzdHJ5W2tleV0gPSAkU3ltYm9sKGtleSk7XG4gIH0sXG4gIC8vIDE5LjQuMi41IFN5bWJvbC5rZXlGb3Ioc3ltKVxuICBrZXlGb3I6IGZ1bmN0aW9uIGtleUZvcihzeW0pIHtcbiAgICBpZiAoIWlzU3ltYm9sKHN5bSkpIHRocm93IFR5cGVFcnJvcihzeW0gKyAnIGlzIG5vdCBhIHN5bWJvbCEnKTtcbiAgICBmb3IgKHZhciBrZXkgaW4gU3ltYm9sUmVnaXN0cnkpIGlmIChTeW1ib2xSZWdpc3RyeVtrZXldID09PSBzeW0pIHJldHVybiBrZXk7XG4gIH0sXG4gIHVzZVNldHRlcjogZnVuY3Rpb24gKCkgeyBzZXR0ZXIgPSB0cnVlOyB9LFxuICB1c2VTaW1wbGU6IGZ1bmN0aW9uICgpIHsgc2V0dGVyID0gZmFsc2U7IH1cbn0pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnT2JqZWN0Jywge1xuICAvLyAxOS4xLjIuMiBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG4gIGNyZWF0ZTogJGNyZWF0ZSxcbiAgLy8gMTkuMS4yLjQgT2JqZWN0LmRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpXG4gIGRlZmluZVByb3BlcnR5OiAkZGVmaW5lUHJvcGVydHksXG4gIC8vIDE5LjEuMi4zIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpXG4gIGRlZmluZVByb3BlcnRpZXM6ICRkZWZpbmVQcm9wZXJ0aWVzLFxuICAvLyAxOS4xLjIuNiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApXG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvcjogJGdldE93blByb3BlcnR5RGVzY3JpcHRvcixcbiAgLy8gMTkuMS4yLjcgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbiAgZ2V0T3duUHJvcGVydHlOYW1lczogJGdldE93blByb3BlcnR5TmFtZXMsXG4gIC8vIDE5LjEuMi44IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoTylcbiAgZ2V0T3duUHJvcGVydHlTeW1ib2xzOiAkZ2V0T3duUHJvcGVydHlTeW1ib2xzXG59KTtcblxuLy8gMjQuMy4yIEpTT04uc3RyaW5naWZ5KHZhbHVlIFssIHJlcGxhY2VyIFssIHNwYWNlXV0pXG4kSlNPTiAmJiAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICghVVNFX05BVElWRSB8fCAkZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgUyA9ICRTeW1ib2woKTtcbiAgLy8gTVMgRWRnZSBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMge31cbiAgLy8gV2ViS2l0IGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyBudWxsXG4gIC8vIFY4IHRocm93cyBvbiBib3hlZCBzeW1ib2xzXG4gIHJldHVybiBfc3RyaW5naWZ5KFtTXSkgIT0gJ1tudWxsXScgfHwgX3N0cmluZ2lmeSh7IGE6IFMgfSkgIT0gJ3t9JyB8fCBfc3RyaW5naWZ5KE9iamVjdChTKSkgIT0gJ3t9Jztcbn0pKSwgJ0pTT04nLCB7XG4gIHN0cmluZ2lmeTogZnVuY3Rpb24gc3RyaW5naWZ5KGl0KSB7XG4gICAgdmFyIGFyZ3MgPSBbaXRdO1xuICAgIHZhciBpID0gMTtcbiAgICB2YXIgcmVwbGFjZXIsICRyZXBsYWNlcjtcbiAgICB3aGlsZSAoYXJndW1lbnRzLmxlbmd0aCA+IGkpIGFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgJHJlcGxhY2VyID0gcmVwbGFjZXIgPSBhcmdzWzFdO1xuICAgIGlmICghaXNPYmplY3QocmVwbGFjZXIpICYmIGl0ID09PSB1bmRlZmluZWQgfHwgaXNTeW1ib2woaXQpKSByZXR1cm47IC8vIElFOCByZXR1cm5zIHN0cmluZyBvbiB1bmRlZmluZWRcbiAgICBpZiAoIWlzQXJyYXkocmVwbGFjZXIpKSByZXBsYWNlciA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICBpZiAodHlwZW9mICRyZXBsYWNlciA9PSAnZnVuY3Rpb24nKSB2YWx1ZSA9ICRyZXBsYWNlci5jYWxsKHRoaXMsIGtleSwgdmFsdWUpO1xuICAgICAgaWYgKCFpc1N5bWJvbCh2YWx1ZSkpIHJldHVybiB2YWx1ZTtcbiAgICB9O1xuICAgIGFyZ3NbMV0gPSByZXBsYWNlcjtcbiAgICByZXR1cm4gX3N0cmluZ2lmeS5hcHBseSgkSlNPTiwgYXJncyk7XG4gIH1cbn0pO1xuXG4vLyAxOS40LjMuNCBTeW1ib2wucHJvdG90eXBlW0BAdG9QcmltaXRpdmVdKGhpbnQpXG4kU3ltYm9sW1BST1RPVFlQRV1bVE9fUFJJTUlUSVZFXSB8fCByZXF1aXJlKCcuL19oaWRlJykoJFN5bWJvbFtQUk9UT1RZUEVdLCBUT19QUklNSVRJVkUsICRTeW1ib2xbUFJPVE9UWVBFXS52YWx1ZU9mKTtcbi8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKCRTeW1ib2wsICdTeW1ib2wnKTtcbi8vIDIwLjIuMS45IE1hdGhbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKE1hdGgsICdNYXRoJywgdHJ1ZSk7XG4vLyAyNC4zLjMgSlNPTltAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoZ2xvYmFsLkpTT04sICdKU09OJywgdHJ1ZSk7XG4iLCIvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1vYmplY3QtdmFsdWVzLWVudHJpZXNcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgJGVudHJpZXMgPSByZXF1aXJlKCcuL19vYmplY3QtdG8tYXJyYXknKSh0cnVlKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdPYmplY3QnLCB7XG4gIGVudHJpZXM6IGZ1bmN0aW9uIGVudHJpZXMoaXQpIHtcbiAgICByZXR1cm4gJGVudHJpZXMoaXQpO1xuICB9XG59KTtcbiIsInJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKSgnYXN5bmNJdGVyYXRvcicpO1xuIiwidmFyICRpdGVyYXRvcnMgPSByZXF1aXJlKCcuL2VzNi5hcnJheS5pdGVyYXRvcicpO1xudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyIHdrcyA9IHJlcXVpcmUoJy4vX3drcycpO1xudmFyIElURVJBVE9SID0gd2tzKCdpdGVyYXRvcicpO1xudmFyIFRPX1NUUklOR19UQUcgPSB3a3MoJ3RvU3RyaW5nVGFnJyk7XG52YXIgQXJyYXlWYWx1ZXMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbnZhciBET01JdGVyYWJsZXMgPSB7XG4gIENTU1J1bGVMaXN0OiB0cnVlLCAvLyBUT0RPOiBOb3Qgc3BlYyBjb21wbGlhbnQsIHNob3VsZCBiZSBmYWxzZS5cbiAgQ1NTU3R5bGVEZWNsYXJhdGlvbjogZmFsc2UsXG4gIENTU1ZhbHVlTGlzdDogZmFsc2UsXG4gIENsaWVudFJlY3RMaXN0OiBmYWxzZSxcbiAgRE9NUmVjdExpc3Q6IGZhbHNlLFxuICBET01TdHJpbmdMaXN0OiBmYWxzZSxcbiAgRE9NVG9rZW5MaXN0OiB0cnVlLFxuICBEYXRhVHJhbnNmZXJJdGVtTGlzdDogZmFsc2UsXG4gIEZpbGVMaXN0OiBmYWxzZSxcbiAgSFRNTEFsbENvbGxlY3Rpb246IGZhbHNlLFxuICBIVE1MQ29sbGVjdGlvbjogZmFsc2UsXG4gIEhUTUxGb3JtRWxlbWVudDogZmFsc2UsXG4gIEhUTUxTZWxlY3RFbGVtZW50OiBmYWxzZSxcbiAgTWVkaWFMaXN0OiB0cnVlLCAvLyBUT0RPOiBOb3Qgc3BlYyBjb21wbGlhbnQsIHNob3VsZCBiZSBmYWxzZS5cbiAgTWltZVR5cGVBcnJheTogZmFsc2UsXG4gIE5hbWVkTm9kZU1hcDogZmFsc2UsXG4gIE5vZGVMaXN0OiB0cnVlLFxuICBQYWludFJlcXVlc3RMaXN0OiBmYWxzZSxcbiAgUGx1Z2luOiBmYWxzZSxcbiAgUGx1Z2luQXJyYXk6IGZhbHNlLFxuICBTVkdMZW5ndGhMaXN0OiBmYWxzZSxcbiAgU1ZHTnVtYmVyTGlzdDogZmFsc2UsXG4gIFNWR1BhdGhTZWdMaXN0OiBmYWxzZSxcbiAgU1ZHUG9pbnRMaXN0OiBmYWxzZSxcbiAgU1ZHU3RyaW5nTGlzdDogZmFsc2UsXG4gIFNWR1RyYW5zZm9ybUxpc3Q6IGZhbHNlLFxuICBTb3VyY2VCdWZmZXJMaXN0OiBmYWxzZSxcbiAgU3R5bGVTaGVldExpc3Q6IHRydWUsIC8vIFRPRE86IE5vdCBzcGVjIGNvbXBsaWFudCwgc2hvdWxkIGJlIGZhbHNlLlxuICBUZXh0VHJhY2tDdWVMaXN0OiBmYWxzZSxcbiAgVGV4dFRyYWNrTGlzdDogZmFsc2UsXG4gIFRvdWNoTGlzdDogZmFsc2Vcbn07XG5cbmZvciAodmFyIGNvbGxlY3Rpb25zID0gZ2V0S2V5cyhET01JdGVyYWJsZXMpLCBpID0gMDsgaSA8IGNvbGxlY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gIHZhciBOQU1FID0gY29sbGVjdGlvbnNbaV07XG4gIHZhciBleHBsaWNpdCA9IERPTUl0ZXJhYmxlc1tOQU1FXTtcbiAgdmFyIENvbGxlY3Rpb24gPSBnbG9iYWxbTkFNRV07XG4gIHZhciBwcm90byA9IENvbGxlY3Rpb24gJiYgQ29sbGVjdGlvbi5wcm90b3R5cGU7XG4gIHZhciBrZXk7XG4gIGlmIChwcm90bykge1xuICAgIGlmICghcHJvdG9bSVRFUkFUT1JdKSBoaWRlKHByb3RvLCBJVEVSQVRPUiwgQXJyYXlWYWx1ZXMpO1xuICAgIGlmICghcHJvdG9bVE9fU1RSSU5HX1RBR10pIGhpZGUocHJvdG8sIFRPX1NUUklOR19UQUcsIE5BTUUpO1xuICAgIEl0ZXJhdG9yc1tOQU1FXSA9IEFycmF5VmFsdWVzO1xuICAgIGlmIChleHBsaWNpdCkgZm9yIChrZXkgaW4gJGl0ZXJhdG9ycykgaWYgKCFwcm90b1trZXldKSByZWRlZmluZShwcm90bywga2V5LCAkaXRlcmF0b3JzW2tleV0sIHRydWUpO1xuICB9XG59XG4iLCJpbXBvcnQgTjE5YmFzZUFwcGxldCBmcm9tICcuL24xOWJhc2VBcHBsZXQnO1xuaW1wb3J0IE4xOXBvcHVwQ29udHJvbGxlciBmcm9tICcuL24xOXBvcHVwQ29udHJvbGxlcic7XG5cblNpZWJlbEFwcEZhY2FkZS5OMTlIZWxwZXIgPSBjbGFzcyBleHRlbmRzIE4xOWJhc2VBcHBsZXQge1xuICBjb25zdHJ1Y3RvcihzZXR0aW5ncykge1xuICAgIGNvbnN0IHsgYXBwbGV0TmFtZSB9ID0gc2V0dGluZ3M7XG4gICAgaWYgKGFwcGxldE5hbWUpIHtcbiAgICAgIGNvbnN0IGFwcGxldCA9IFNpZWJlbEFwcC5TX0FwcC5HZXRBY3RpdmVWaWV3KCkuR2V0QXBwbGV0KGFwcGxldE5hbWUpO1xuICAgICAgaWYgKCFhcHBsZXQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gZ2V0IHRoZSByZWZlcmVuY2UgdG8gdGhlIGFwcGxldCBieSB0aGUgJHthcHBsZXROYW1lfSBuYW1lYCk7XG4gICAgICB9XG4gICAgICBzdXBlcihPYmplY3QuYXNzaWduKHt9LCBzZXR0aW5ncywgeyBwbTogYXBwbGV0LkdldFBNb2RlbCgpIH0pKTtcbiAgICB9IGVsc2UgeyAvLyB0aGUgdXN1YWwgd2F5IGFzc3VtZWRcbiAgICAgIHN1cGVyKHNldHRpbmdzKTtcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZygnTmV4dXMgbWFpbiBjbGFzcyBzdGFydGVkLi4uLicsIHRoaXMuYXBwbGV0TmFtZSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgIC8vIGdldCB0aGUgbjE5cG9wdXBDb250cm9sbGVyIHNpbmdsZXRvbiBpbnN0YW5jZVxuICAgIHRoaXMubjE5cG9wdXBDb250cm9sbGVyID0gTjE5cG9wdXBDb250cm9sbGVyLmluc3RhbmNlO1xuICB9XG5cbiAgY2xvc2VQb3B1cEFwcGxldCgpIHtcbiAgICByZXR1cm4gdGhpcy5uMTlwb3B1cENvbnRyb2xsZXIuY2xvc2VQb3B1cEFwcGxldCgpO1xuICB9XG5cbiAgX3Nob3dQb3B1cEFwcGxldChuYW1lLCBoaWRlLCBjYikge1xuICAgIGlmICghdGhpcy5uMTlwb3B1cENvbnRyb2xsZXIpIHtcbiAgICAgIC8vIGl0IGlzIGEgcG9wdXAgYXBwbGV0XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ09wZW5uaW5nIHBvcHVwIG9uIHRoZSBwb3B1cCBpcyBub3Qgc3VwcG9ydGVkIG5vdycpO1xuICAgIH1cbiAgICBpZiAoIXRoaXMubjE5cG9wdXBDb250cm9sbGVyLmNhbk9wZW5Qb3B1cCgpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBvcGVuIHBvcHVwIScpO1xuICAgICAgLy8gcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLnZpZXcuU2V0QWN0aXZlQXBwbGV0SW50ZXJuYWwodGhpcy5hcHBsZXQpOyAvLyBvciBTZXRBY3RpdmVBcHBsZXRcbiAgICB0aGlzLl9zZXRBY3RpdmVDb250cm9sKG5hbWUpO1xuICAgIHJldHVybiB0aGlzLm4xOXBvcHVwQ29udHJvbGxlci5zaG93UG9wdXBBcHBsZXQoaGlkZSwgY2IsIHRoaXMucG0pO1xuICB9XG5cbiAgc2hvd012Z0FwcGxldChuYW1lLCBoaWRlLCBjYikge1xuICAgIHJldHVybiB0aGlzLl9zaG93UG9wdXBBcHBsZXQobmFtZSwgaGlkZSwgY2IpO1xuICB9XG5cbiAgc2hvd1BpY2tBcHBsZXQobmFtZSwgaGlkZSwgY2IpIHtcbiAgICByZXR1cm4gdGhpcy5fc2hvd1BvcHVwQXBwbGV0KG5hbWUsIGhpZGUsIGNiKTtcbiAgfVxuXG4gIGRyaWxsZG93bihjb250cm9sTmFtZSkge1xuICAgIC8vIHRvZG86IGNoZWNrIGlzTGluayBvZiBjb250cm9sP1xuICAgIC8vIGluZGV4IGlzIG5vdCBlZmZlY3RpdmUsIGFuZCBkcmlsbGRvd24gYW55d2F5IGhhcHBlbnMgb24gbGFzdCBzZWxlY3RlZCByZWNvcmRcbiAgICBpZiAoIXRoaXMuaXNMaXN0QXBwbGV0KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5nZXRTZWxlY3Rpb24oKTtcbiAgICByZXR1cm4gdGhpcy5wbS5FeGVjdXRlTWV0aG9kKCdPbkRyaWxsRG93bicsIGNvbnRyb2xOYW1lLCBpbmRleCk7XG4gIH1cblxuICBnb3RvVmlldyh0YXJnZXRWaWV3TmFtZSwgdGFyZ2V0QXBwbGV0TmFtZSwgaWQpIHtcbiAgICAvLyB0b2RvOiBnZXQgdGhlIGFwcGxldCBuYW1lIGZyb20gdGhlIHZpZXcgZGVmaW5pdGlvbj9cbiAgICBjb25zdCByb3dJZCA9IHR5cGVvZiBpZCA9PT0gJ3VuZGVmaW5lZCcgPyB0aGlzLmdldEN1cnJlbnRSZWNvcmQodHJ1ZSkuSWQgOiBpZDtcbiAgICBsZXQgU1dFQ21kID0gYEdvdG9WaWV3JlNXRVZpZXc9JHt0YXJnZXRWaWV3TmFtZX0mU1dFQXBwbGV0MD0ke3RhcmdldEFwcGxldE5hbWV9YDtcbiAgICBTV0VDbWQgKz0gYCZTV0VCVT0xJlNXRUtlZXBDb250ZXh0PUZBTFNFJlNXRVJvd0lkMD0ke3Jvd0lkfWA7XG4gICAgU1dFQ21kID0gZW5jb2RlVVJJKFNXRUNtZCk7XG4gICAgU2llYmVsQXBwLlNfQXBwLkdvdG9WaWV3KHRhcmdldFZpZXdOYW1lLCAnJywgU1dFQ21kLCAnJyk7XG4gIH1cblxuICBzdGF0aWMgUmVJbml0UG9wdXAoKSB7XG4gICAgY29uc3QgcG9wdXBQTSA9IFNpZWJlbEFwcC5TX0FwcC5HZXRQb3B1cFBNKCk7XG4gICAgcG9wdXBQTS5Jbml0KCk7XG4gICAgcG9wdXBQTS5TZXR1cCgpO1xuICB9XG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTjE5YmFzZUFwcGxldCB7XG4gIGNvbnN0cnVjdG9yKHNldHRpbmdzKSB7XG4gICAgdGhpcy5jb25zdHMgPSBTaWViZWxKUy5EZXBlbmRlbmN5KCdTaWViZWxBcHAuQ29uc3RhbnRzJyk7XG4gICAgdGhpcy5wbSA9IHNldHRpbmdzLnBtO1xuICAgIHRoaXMudmlldyA9IFNpZWJlbEFwcC5TX0FwcC5HZXRBY3RpdmVWaWV3KCk7XG4gICAgdGhpcy5hcHBsZXROYW1lID0gdGhpcy5wbS5HZXQoJ0dldE5hbWUnKTtcbiAgICB0aGlzLmFwcGxldCA9IHRoaXMudmlldy5HZXRBcHBsZXRNYXAoKVt0aGlzLmFwcGxldE5hbWVdO1xuICAgIHRoaXMuaXNMaXN0QXBwbGV0ID0gdHlwZW9mIHRoaXMuYXBwbGV0LkdldExpc3RPZkNvbHVtbnMgPT09ICdmdW5jdGlvbic7XG4gICAgdGhpcy5yZXF1aXJlZCA9IFtdOyAvLyB3aWxsIGJlIGVtcHR5IGZvciB0aGUgbGlzdCBhcHBsZXRcbiAgICB0aGlzLmxvdiA9IHt9O1xuXG4gICAgdGhpcy50b2tlbiA9IDA7XG4gICAgdGhpcy5zdWJzY3JpYmVycyA9IFtdO1xuICAgIGNvbnN0IGJjSWQgPSB0aGlzLmFwcGxldC5HZXRCQ0lkKCk7XG4gICAgdGhpcy5wbS5BdHRhY2hOb3RpZmljYXRpb25IYW5kbGVyKHRoaXMuY29uc3RzLmdldCgnU1dFX1BST1BfQkNfTk9USV9FTkQnKSwgKHByb3BTZXQpID0+IHtcbiAgICAgIGlmIChiY0lkID09PSBwcm9wU2V0LkdldFByb3BlcnR5KCdiYycpKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zdWJzY3JpYmVycy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIC8vIHdlIGFzc3VtZSB0aGF0IHRoZSBmdW5jdGlvbiBkb2VzIG5vdCB0aHJvdyBhbiBlcnJvclxuICAgICAgICAgIHRoaXMuc3Vic2NyaWJlcnNbaV0uZnVuYygpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBwb3B1bGF0ZSB0aGUgcmVxdWlyZWQgYXJyYXkgZm9yIGZvcm0gYXBwbGV0c1xuICAgIGlmICghdGhpcy5pc0xpc3RBcHBsZXQpIHtcbiAgICAgIGNvbnN0IGFwcGxldElkID0gYHNfJHt0aGlzLnBtLkdldCgnR2V0RnVsbElkJyl9X2RpdmA7XG4gICAgICBjb25zdCBhcHBsZXRJbnB1dHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChhcHBsZXRJZCkucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXBwbGV0SW5wdXRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmIChhcHBsZXRJbnB1dHNbaV0uYXR0cmlidXRlc1snYXJpYS1yZXF1aXJlZCddKSB7XG4gICAgICAgICAgdGhpcy5yZXF1aXJlZC5wdXNoKGFwcGxldElucHV0c1tpXS5hdHRyaWJ1dGVzLm5hbWUubm9kZVZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGxpc3RlbmVyIHRvIGdldCBkeW5hbWljIExPVnNcbiAgICBjb25zdCBhcHBsZXROYW1lID0gdGhpcy5wbS5HZXQoJ0dldE5hbWUnKTtcbiAgICB0aGlzLnBtLkF0dGFjaE5vdGlmaWNhdGlvbkhhbmRsZXIodGhpcy5jb25zdHMuZ2V0KCdTV0VfUFJPUF9CQ19OT1RJX0dFTkVSSUMnKSwgKHByb3BTZXQpID0+IHtcbiAgICAgIGNvbnN0IHZpZXdOYW1lID0gU2llYmVsQXBwLlNfQXBwLkdldEFjdGl2ZVZpZXcoKS5HZXROYW1lKCk7XG4gICAgICBjb25zdCB0eXBlID0gcHJvcFNldC5HZXRQcm9wZXJ0eSh0aGlzLmNvbnN0cy5nZXQoJ1NXRV9QUk9QX05PVElfVFlQRScpKTtcbiAgICAgIGlmICh0eXBlID09PSAnR2V0UXVpY2tQaWNrSW5mbycpIHtcbiAgICAgICAgY29uc3QgYXJyID0gW107XG4gICAgICAgIENDRk1pc2NVdGlsX1N0cmluZ1RvQXJyYXkocHJvcFNldC5HZXRQcm9wZXJ0eSh0aGlzLmNvbnN0cy5nZXQoJ1NXRV9QUk9QX0FSR1NfQVJSQVknKSksIGFycik7XG4gICAgICAgIGlmICh2aWV3TmFtZSA9PT0gYXJyWzFdICYmIGFwcGxldE5hbWUgPT09IGFyclsyXSkge1xuICAgICAgICAgIGlmICgnZmFsc2UnID09PSBhcnJbNF0pIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgUGlja2xpc3QgaXMgbm90IGFzc29jaWF0ZWQgd2l0aCB0aGUgY29udHJvbCAtICR7SlNPTi5zdHJpbmdpZnkoYXJyKX1gKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5sb3ZbYXJyWzNdXSA9IGFyci5zcGxpY2UoNSkuZmlsdGVyKGVsID0+IGVsICE9PSAnJyk7XG4gICAgICAgICAgLy8gdG9kbzogbWF5YmUgd2UgbmVlZCB0byByZXR1cm4gc29tZSBpbmRpY2F0aW9uIHdoZW4gZW1wdHkgdmFsdWUgaXMgYWxsb3dlZFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzdWJzY3JpYmUoZnVuYykge1xuICAgIGlmICh0eXBlb2YgZnVuYyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdmdW5jIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG4gICAgfVxuICAgIHRoaXMudG9rZW4gKz0gMTtcbiAgICB0aGlzLnN1YnNjcmliZXJzLnB1c2goeyB0b2tlbjogdGhpcy50b2tlbiwgZnVuYyB9KTtcbiAgICByZXR1cm4gdGhpcy50b2tlbjtcbiAgfVxuXG4gIHVuc3Vic2NyaWJlKHRva2VuKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnN1YnNjcmliZXJzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAodG9rZW4gPT09IHRoaXMuc3Vic2NyaWJlcnNbaV0udG9rZW4pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3Vic2NyaWJlcnMuc3BsaWNlKGksIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBfZ2V0Q29udHJvbChuYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuYXBwbGV0LkdldENvbnRyb2wobmFtZSk7XG4gIH1cblxuICBfcmV0dXJuQ29udHJvbHMoKSB7XG4gICAgaWYgKHRoaXMuaXNMaXN0QXBwbGV0KSB7XG4gICAgICByZXR1cm4gdGhpcy5hcHBsZXQuR2V0TGlzdE9mQ29sdW1ucygpOyAvLyBwbS5HZXQoJ0dldExpc3RPZkNvbHVtbnMnKVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5hcHBsZXQuR2V0Q29udHJvbHMoKTsgLy8gcG0uR2V0KCdHZXRDb250cm9scycpO1xuICB9XG5cbiAgLy8gY2FsbGVkIGludG8gdGhlIGdldENvbnRyb2xzIHRvIHJlZHVjZSB0aGUgYW1vdW50IG9mIHRoZSByZXR1cm5lZCBjb250cm9sc1xuICBfaXNTa2lwQ29udHJvbCh0eXBlKSB7XG4gICAgLy8gaHR0cHM6Ly9kb2NzLm9yYWNsZS5jb20vY2QvRTc0ODkwXzAxL2Jvb2tzL0NvbmZpZ09wZW5VSS9hcHBlbmRpeF9hX2FwaTAwMi5odG1cbiAgICAvLyBtYXliZSB3ZSBuZWVkIHRvIGV4Y2x1ZGUgbW9yZSB0eXBlc1xuICAgIHJldHVybiAodHlwZSA9PT0gdGhpcy5jb25zdHMuZ2V0KCdTV0VfUFNUX0JVVFRPTl9DVFJMJykpXG4gICAgICB8fCAodHlwZSA9PT0gdGhpcy5jb25zdHMuZ2V0KCdTV0VfQ1RSTF9MSU5LJykpXG4gICAgICB8fCAodHlwZSA9PT0gdGhpcy5jb25zdHMuZ2V0KCdTV0VfQ1RSTF9QTEFJTlRFWFQnKSlcbiAgICAgIHx8ICh0eXBlID09PSAnbnVsbCcpOyAvLyBHZXRVaVR5cGUgcmV0dXJucyBzdHJpbmdcbiAgfVxuXG4gIF9pc1JlcXVpcmVkKGlucHV0TmFtZSkge1xuICAgIC8vIHJlcXVpcmVkIGlzIGVtcHR5IGZvciBsaXN0IGFwcGxldHMsIGhvcGVmdWxseSBmb3Igbm93XG4gICAgcmV0dXJuIHRoaXMucmVxdWlyZWQuaW5kZXhPZihpbnB1dE5hbWUpID4gLTE7XG4gIH1cblxuICBzdGF0aWMgR2V0U3RhdGljTE9WKGFycikge1xuICAgIGNvbnN0IHJldCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICByZXQucHVzaChhcnJbaV0ucHJvcEFycmF5KTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIF9zZXRBY3RpdmVDb250cm9sKG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5hcHBsZXQuU2V0QWN0aXZlQ29udHJvbCh0aGlzLl9nZXRDb250cm9sKG5hbWUpKTtcbiAgfVxuXG4gIF9nZXRWYWx1ZUZvckNvbnRyb2woY29udHJvbFVpVHlwZSwgdmFsdWUpIHtcbiAgICAvLyBUT0RPOiBEYXRlVGltZSwgbnVtYmVycywgYW5kIHBob25lcz9cbiAgICBpZiAodGhpcy5jb25zdHMuZ2V0KCdTV0VfQ1RSTF9DSEVDS0JPWCcpID09PSBjb250cm9sVWlUeXBlKSB7XG4gICAgICAvLyBjb252ZXJ0IHRydWUvZmFsc2UgPT4gWS9OXG4gICAgICAvLyBkbyB3ZSB3YW50IHRvIHN1cHBvcnQgc2V0dGluZyB0byBudWxsXG4gICAgICB2YWx1ZSA9IHZhbHVlID8gJ1knIDogJ04nOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIGNhbkludm9rZU1ldGhvZChtZXRob2QpIHtcbiAgICByZXR1cm4gdGhpcy5wbS5FeGVjdXRlTWV0aG9kKCdDYW5JbnZva2VNZXRob2QnLCBtZXRob2QpO1xuICB9XG5cbiAgaW52b2tlTWV0aG9kKG1ldGhvZCkge1xuICAgIGlmICghdGhpcy5jYW5JbnZva2VNZXRob2QobWV0aG9kKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5wbS5FeGVjdXRlTWV0aG9kKCdJbnZva2VNZXRob2QnLCBtZXRob2QpO1xuICB9XG5cbiAgZ2V0Q29udHJvbHMoKSB7XG4gICAgY29uc3QgY29udHJvbHMgPSB7fTtcbiAgICBjb25zdCBhcHBsZXRDb250cm9scyA9IHRoaXMuX3JldHVybkNvbnRyb2xzKCk7XG4gICAgY29uc3QgYXJyID0gT2JqZWN0LmtleXMoYXBwbGV0Q29udHJvbHMpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBjb250cm9sID0gYXBwbGV0Q29udHJvbHNbYXJyW2ldXTtcbiAgICAgIGNvbnN0IGNvbnRyb2xVaVR5cGUgPSBjb250cm9sLkdldFVJVHlwZSgpO1xuICAgICAgaWYgKHRoaXMuX2lzU2tpcENvbnRyb2woY29udHJvbFVpVHlwZSkpIHtcbiAgICAgICAgY29udGludWU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29udGludWVcbiAgICAgIH1cbiAgICAgIGNvbnN0IGNvbnRyb2xOYW1lID0gY29udHJvbC5HZXROYW1lKCk7XG4gICAgICBjb25zdCBjb250cm9sSW5wdXROYW1lID0gY29udHJvbC5HZXRJbnB1dE5hbWUoKTtcbiAgICAgIGNvbnN0IG9iaiA9IHtcbiAgICAgICAgbmFtZTogY29udHJvbE5hbWUsXG4gICAgICAgIGxhYmVsOiBjb250cm9sLkdldERpc3BsYXlOYW1lKCksXG4gICAgICAgIHVpVHlwZTogY29udHJvbFVpVHlwZSxcbiAgICAgICAgcmVxdWlyZWQ6IHRoaXMuX2lzUmVxdWlyZWQoY29udHJvbElucHV0TmFtZSksXG4gICAgICAgIGJvdW5kZWRQaWNrOiBjb250cm9sLklzQm91bmRlZFBpY2soKSA9PT0gJzEnLFxuICAgICAgICBzdGF0aWNQaWNrOiBjb250cm9sLklzU3RhdGljQm91bmRlZCgpID09PSAnMScsXG4gICAgICAgIC8vIHBpY2tBcHBsZXQ6IGNvbnRyb2wuR2V0UGlja0FwcGxldCgpLCAvLyBjb25mdXNpbmcgYW5kIG5vdCBjb25zaXN0ZW50IC0gc2VlIHdpa2lcbiAgICAgICAgaW5wdXROYW1lOiBjb250cm9sSW5wdXROYW1lLFxuICAgICAgICBpc1Bvc3RDaGFuZ2VzOiBjb250cm9sLklzUG9zdENoYW5nZXMoKSxcbiAgICAgICAgbWF4U2l6ZTogY29udHJvbC5HZXRNYXhTaXplKCksXG4gICAgICAgIC8vIG1heENoYXJzOiBjb250cm9sLkdldE1heENoYXJzKCksIC8vIGl0IGlzIGFsd2F5cyAwXG4gICAgICAgIGZpZWxkTmFtZTogY29udHJvbC5HZXRGaWVsZE5hbWUoKSxcbiAgICAgICAgaXNMaW5rOiB0aGlzLnBtLkV4ZWN1dGVNZXRob2QoJ0Nhbk5hdmlnYXRlJywgY29udHJvbE5hbWUpLFxuICAgICAgfTtcbiAgICAgIGlmICh0aGlzLmlzTGlzdEFwcGxldCkge1xuICAgICAgICBvYmoucmVhZE9ubHkgPSAhdGhpcy5wbS5FeGVjdXRlTWV0aG9kKCdDYW5VcGRhdGUnLFxuICAgICAgICAgIHRoaXMucG0uR2V0UmVuZGVyZXIoKS5HZXRDb2x1bW5IZWxwZXIoKS5HZXRBY3R1YWxDb250cm9sTmFtZShjb250cm9sTmFtZSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb2JqLnJlYWRPbmx5ID0gIXRoaXMucG0uRXhlY3V0ZU1ldGhvZCgnQ2FuVXBkYXRlJywgY29udHJvbE5hbWUpO1xuICAgICAgfVxuICAgICAgLy8gYWRkIHZhbHVlcyB0byBiZSBkaXNwbGF5ZWQgaW4gdGhlIHN0YXRpYyBwaWNrIGxpc3RcbiAgICAgIGlmIChvYmouc3RhdGljUGljaykge1xuICAgICAgICBvYmouc3RhdGljTE9WID0gTjE5YmFzZUFwcGxldC5HZXRTdGF0aWNMT1YoY29udHJvbC5HZXRSYWRpb0dyb3VwUHJvcFNldCgpLmNoaWxkQXJyYXkpO1xuICAgICAgICBvYmoubG92cyA9IG9iai5zdGF0aWNMT1YucmVkdWNlKChhY2MsIGVsKSA9PiB7IC8vIG5vcm1hbGl6ZWRcbiAgICAgICAgICBhY2MucHVzaCh7IGxpYzogZWwuRmllbGRWYWx1ZSwgdmFsOiBlbC5EaXNwbGF5TmFtZSB9KTtcbiAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICB9LCBbXSk7XG4gICAgICB9XG4gICAgICBjb250cm9sc1tjb250cm9sTmFtZV0gPSBvYmo7XG4gICAgfVxuICAgIHJldHVybiBjb250cm9scztcbiAgfVxuXG4gIGdldFJlY29yZFNldChhZGRSZWNvcmRJbmRleCkge1xuICAgIGlmIChhZGRSZWNvcmRJbmRleCkge1xuICAgICAgcmV0dXJuIHRoaXMucG0uR2V0KCdHZXRSZWNvcmRTZXQnKS5tYXAoKGVsLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCByZXQgPSBPYmplY3QuYXNzaWduKHt9LCBlbCk7XG4gICAgICAgIHJldC5faW5keCA9IGluZGV4O1xuICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnBtLkdldCgnR2V0UmVjb3JkU2V0Jyk7XG4gIH1cblxuICBnZXRSYXdSZWNvcmRTZXQoYWRkUmVjb3JkSW5kZXgpIHtcbiAgICBpZiAoYWRkUmVjb3JkSW5kZXgpIHtcbiAgICAgIHJldHVybiB0aGlzLnBtLkdldCgnR2V0UmF3UmVjb3JkU2V0JykubWFwKChlbCwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgcmV0ID0gT2JqZWN0LmFzc2lnbih7fSwgZWwpO1xuICAgICAgICByZXQuX2luZHggPSBpbmRleDtcbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5wbS5HZXQoJ0dldFJhd1JlY29yZFNldCcpO1xuICB9XG5cbiAgZ2V0Um93TGlzdFJvd0NvdW50KCkge1xuICAgIC8vIGhvdyBtdWNoIGFwcGxldCBjYW4gZGlzcGxheSAoc3BlY2lmaWVkIGluIFNpZWJlbCBUb29scykgLSAxMC8yMFxuICAgIHJldHVybiB0aGlzLnBtLkdldCgnR2V0Um93TGlzdFJvd0NvdW50Jyk7XG4gIH1cblxuICBnZXROdW1Sb3dzKCkge1xuICAgIC8vIGN1cnJlbnRseSBmZXRjaGVkIGZyb20gc2VydmVyP1xuICAgIHJldHVybiB0aGlzLnBtLkdldCgnR2V0TnVtUm93cycpO1xuICB9XG5cbiAgZ2V0U2VsZWN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnBtLkdldCgnR2V0U2VsZWN0aW9uJyk7XG4gIH1cblxuICBfbmF2aWdhdGUobWV0aG9kKSB7XG4gICAgaWYgKCF0aGlzLmNhbkludm9rZU1ldGhvZChtZXRob2QpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IHJldCA9IHRoaXMucG0uRXhlY3V0ZU1ldGhvZCgnSW52b2tlTWV0aG9kJywgbWV0aG9kLCBudWxsLCBmYWxzZSk7XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIG5leHRSZWNvcmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hdmlnYXRlKHRoaXMuaXNMaXN0QXBwbGV0ID8gJ0dvdG9OZXh0JyA6ICdHb3RvTmV4dFNldCcpO1xuICB9XG5cbiAgbmV4dFJlY29yZFNldCgpIHtcbiAgICBpZiAoIXRoaXMuaXNMaXN0QXBwbGV0KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9uYXZpZ2F0ZSgnR290b05leHRTZXQnKTtcbiAgfVxuXG4gIHBvc2l0aW9uT25Sb3coaW5kZXgpIHtcbiAgICBpZiAodGhpcy5pc0xpc3RBcHBsZXQpIHtcbiAgICAgIGlmICghdGhpcy5wbS5FeGVjdXRlTWV0aG9kKCdDYW5JbnZva2VNZXRob2QnLCAnUG9zaXRpb25PblJvdycpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChpbmRleCA8IDApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgLy8gc2VlbXMgdGhpcyBjaGVjayBpcyByZWR1bmRhbnRcbiAgICAgIC8vIGlmICh0aGlzLmdldE51bVJvd3MoKSA8IGluZGV4ICsgMSkgeyAvL1xuICAgICAgLy8gICByZXR1cm4gZmFsc2U7XG4gICAgICAvLyB9XG4gICAgICBpZiAodGhpcy5nZXRSb3dMaXN0Um93Q291bnQoKSA8IGluZGV4ICsgMSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7aW5kZXh9IGlzIGVxdWFsL2hpZ2hlciB0aGFuIGFtb3VudCBvZiByZWNvcmRzIGluIHRoZSBhcHBsZXQgJHt0aGlzLmdldFJvd0xpc3RSb3dDb3VudCgpfWApO1xuICAgICAgfVxuICAgICAgLy8gdG9kbyA6IGlmIHdlIGdvdCB0byB0aGlzIHBvaW50XG4gICAgICAvLyAgc2hvdWxkIHdlIGNoZWNrIGFwcGxldC5HZXRBY3RpdmVDb250cm9sIChhcHBsZXQucHJvdG90eXBlLkludm9rZU1ldGhvZClcbiAgICAgIC8vICBhbmQgbnVsbGlmeSBpdCBpZiBhY3RpdmU/XG4gICAgICByZXR1cm4gdGhpcy5wbS5FeGVjdXRlTWV0aG9kKCdIYW5kbGVSb3dTZWxlY3QnLCBpbmRleCwgZmFsc2UsIGZhbHNlKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHJldlJlY29yZCgpIHtcbiAgICBpZiAodGhpcy5pc0xpc3RBcHBsZXQpIHtcbiAgICAgIHJldHVybiB0aGlzLnBvc2l0aW9uT25Sb3codGhpcy5wbS5HZXQoJ0dldFNlbGVjdGlvbicpIC0gMSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9uYXZpZ2F0ZSgnR290b1ByZXZpb3VzU2V0Jyk7XG4gIH1cblxuICBwcmV2UmVjb3JkU2V0KCkge1xuICAgIGlmICghdGhpcy5pc0xpc3RBcHBsZXQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX25hdmlnYXRlKCdHb3RvUHJldmlvdXNTZXQnKTtcbiAgfVxuXG4gIG5ld1JlY29yZChjYikge1xuICAgIC8vIHRvZG86IHNob3VsZCBpdCBiZSB0aGUgc2FtZSBhcyBXcml0ZVJlY29yZD9cbiAgICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB0aGlzLl9uZXdSZWNvcmQocmVzb2x2ZSkpO1xuICAgIHJldHVybiB0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicgPyBwcm9taXNlLnRoZW4oY2IpIDogcHJvbWlzZTtcbiAgfVxuXG4gIF9uZXdSZWNvcmQoY2IpIHtcbiAgICByZXR1cm4gdGhpcy5wbS5FeGVjdXRlTWV0aG9kKCdJbnZva2VNZXRob2QnLCAnTmV3UmVjb3JkJywgbnVsbCwge1xuICAgICAgYXN5bmM6IHRydWUsXG4gICAgICBjYixcbiAgICB9KTtcbiAgfVxuXG4gIG5ld1JlY29yZFN5bmMoKSB7XG4gICAgcmV0dXJuIHRoaXMucG0uRXhlY3V0ZU1ldGhvZCgnSW52b2tlTWV0aG9kJywgJ05ld1JlY29yZCcsIG51bGwsIGZhbHNlKTtcbiAgfVxuXG4gIHdyaXRlUmVjb3JkKGNiLCBjYmVycikge1xuICAgIGxldCBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4gdGhpcy5fd3JpdGVSZWNvcmQoKC4uLmFyZ3MpID0+IHtcbiAgICAgIC8vIGRvIHdlIGFsd2F5cyBoYXZlIHRocmVlIGlucHV0IGFyZ3VtZW50cywgYW5kIHRoZSB0aGlyZCBhcmd1bWVudCBpc1xuICAgICAgaWYgKGFyZ3NbMl0uR2V0UHJvcGVydHkoJ1N0YXR1cycpID09PSAnQ29tcGxldGVkJykge1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZWplY3QoKTtcbiAgICAgIH1cbiAgICB9KSk7XG4gICAgcHJvbWlzZSA9IHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJyA/IHByb21pc2UudGhlbihjYikgOiBwcm9taXNlO1xuICAgIHByb21pc2UgPSB0eXBlb2YgY2JlcnIgPT09ICdmdW5jdGlvbicgPyBwcm9taXNlLmNhdGNoKGNiZXJyKSA6IHByb21pc2U7XG4gICAgcmV0dXJuIHByb21pc2U7XG4gIH1cblxuICBfd3JpdGVSZWNvcmQoY2IpIHtcbiAgICByZXR1cm4gdGhpcy5wbS5FeGVjdXRlTWV0aG9kKCdJbnZva2VNZXRob2QnLCAnV3JpdGVSZWNvcmQnLCBudWxsLCB7XG4gICAgICBhc3luYzogdHJ1ZSxcbiAgICAgIGNiLFxuICAgIH0pO1xuICB9XG5cbiAgd3JpdGVSZWNvcmRTeW5jKCkge1xuICAgIHJldHVybiB0aGlzLnBtLkV4ZWN1dGVNZXRob2QoJ0ludm9rZU1ldGhvZCcsICdXcml0ZVJlY29yZCcsIG51bGwsIGZhbHNlKTtcbiAgfVxuXG4gIGRlbGV0ZVJlY29yZFN5bmMoKSB7XG4gICAgcmV0dXJuIHRoaXMucG0uRXhlY3V0ZU1ldGhvZCgnSW52b2tlTWV0aG9kJywgJ0RlbGV0ZVJlY29yZCcsIG51bGwsIGZhbHNlKTtcbiAgfVxuXG4gIHVuZG9SZWNvcmRTeW5jKCkge1xuICAgIHJldHVybiB0aGlzLnBtLkV4ZWN1dGVNZXRob2QoJ0ludm9rZU1ldGhvZCcsICdVbmRvUmVjb3JkJywgbnVsbCwgZmFsc2UpO1xuICB9XG5cbiAgc2V0Q29udHJvbFZhbHVlKG5hbWUsIHZhbHVlKSB7XG4gICAgLy8gVE9ETzogSWYgdmFsdWUgaXMgbnVsbCwgbm90aGluZyBoYXBwZW5zLCBzaG91bGQgd2UgY29udmVydCBudWxsIHRvICcnP1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLl9nZXRDb250cm9sKG5hbWUpO1xuICAgIC8vIFRPRE86IENoZWNrIGlmIGNvbnRyb2wgaXMgZm91bmRcbiAgICB2YWx1ZSA9IHRoaXMuX2dldFZhbHVlRm9yQ29udHJvbChjb250cm9sLkdldFVJVHlwZSgpLCB2YWx1ZSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAvLyBtYXliZSBjaGVjayBpZiB0eXBlb2YgYXBwbGV0LlNldENvbnRyb2xWYWx1ZUJ5TmFtZSBpcyBmdW5jdGlvbiBhbmQgdXNlIGl0IHdoZW4gYXZhaWxhYmxlPyAtIG5vdCBleGlzdHMgaW4gMTQueFxuICAgIC8vIFRPRE86IHNob3VsZCB3ZSB1c2UgU2V0Q2VsbFZhbHVlIGZvciBsaXN0IGFwcGxldHM/XG4gICAgdGhpcy5wbS5PbkNvbnRyb2xFdmVudCh0aGlzLmNvbnN0cy5nZXQoJ1BIWUVWRU5UX0NPTlRST0xfRk9DVVMnKSwgY29udHJvbCk7XG4gICAgY29uc3QgcmV0ID0gdGhpcy5wbS5PbkNvbnRyb2xFdmVudCh0aGlzLmNvbnN0cy5nZXQoJ1BIWUVWRU5UX0NPTlRST0xfQkxVUicpLCBjb250cm9sLCB2YWx1ZSk7XG4gICAgaWYgKCFyZXQpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBWYWx1ZSAke3ZhbHVlfSB3YXMgbm90IHNldCBmb3IgJHtjb250cm9sLkdldE5hbWUoKX1gKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICBfdmFsaWRhdGVQaWNrQ29udHJvbChjb250cm9sLCBpc1N0YXRpYykge1xuICAgIC8vIFBvc3NpYmxlIHJlc3VsdHM6XG4gICAgLy8gbm8gcGlja1xuICAgIC8vIHN0YXRpYyBwaWNrXG4gICAgLy8gZHluYW1pYyBwaWNrXG4gICAgLy8gcGlja1xuICAgIC8vIG12Z1xuICAgIC8vID9cblxuICAgIGNvbnN0IGlzU3RhdGljUGljayA9ICcxJyA9PT0gY29udHJvbC5Jc1N0YXRpY0JvdW5kZWQoKTtcbiAgICBjb25zdCB1aVR5cGUgPSBjb250cm9sLkdldFVJVHlwZSgpO1xuXG4gICAgaWYgKGlzU3RhdGljKSB7IC8vIGNhbGxlZCBnZXRTdGF0aWNMT1ZcbiAgICAgIC8vXG4gICAgICBpZiAoIWlzU3RhdGljUGljaykge1xuICAgICAgICBjb25zb2xlLndhcm4oYFtOMTldVGhlIGdldFN0YXRpY0xPViBjYWxsZWQgZm9yIG5vdCBzdGF0aWMgY29udHJvbCAtICR7dWlUeXBlfS4gVXNlIGdldER5bmFtaWNMT1Ygb3IgcGljay9tdmdgKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgeyAvLyBjYWxsZWQgZ2V0RHluYW1pY0xPVlxuICAgICAgaWYgKGlzU3RhdGljUGljaykge1xuICAgICAgICBjb25zb2xlLndhcm4oJ1tOMTldVGhlIGdldER5bmFtaWNMT1YgY2FsbGVkIGZvciBzdGF0aWMgY29udHJvbC4nKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmNvbnN0cy5nZXQoJ1NXRV9DVFJMX0NPTUJPQk9YJykgIT09IHVpVHlwZSkgeyAvLyB0aGUgY29udHJvbCBpcyBub3QgXCJKQ29tYm9Cb3hcIlxuICAgICAgICBzd2l0Y2ggKHVpVHlwZSkge1xuICAgICAgICAgIGNhc2UgdGhpcy5jb25zdHMuZ2V0KCdTV0VfQ1RSTF9QSUNLJyk6IC8vIFBpY2tcbiAgICAgICAgICBjYXNlIHRoaXMuY29uc3RzLmdldCgnU1dFX0NUUkxfTVZHJyk6IC8vIE1WR1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBbTjE5XVlvdSBuZWVkIHRvIHVzZSB0aGUgcG9wdXBzIGluc3RlYWQgb2YgZ2V0RHluYW1pY0xPViAtICR7dWlUeXBlfS5gKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYFtOMTldUHJvYmFibHkgZ2V0RHluYW1pY0xPViBpcyBub3QgZ29pbmcgdG8gd29yayBmb3IgdGhpcyBjb250cm9sIC0gJHt1aVR5cGV9LmApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0RHluYW1pY0xPVihjb250cm9sTmFtZSkge1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLl9nZXRDb250cm9sKGNvbnRyb2xOYW1lKTtcbiAgICB0aGlzLl92YWxpZGF0ZVBpY2tDb250cm9sKGNvbnRyb2wsIGZhbHNlKTtcbiAgICBjb25zdCBjb250cm9sSW5wdXROYW1lID0gY29udHJvbC5HZXRJbnB1dE5hbWUoKTtcbiAgICB0aGlzLmxvdltjb250cm9sSW5wdXROYW1lXSA9IHt9O1xuICAgIGNvbnN0IHBzID0gU2llYmVsQXBwLlNfQXBwLk5ld1Byb3BlcnR5U2V0KCk7XG4gICAgcHMuU2V0UHJvcGVydHkoJ1NXRUZpZWxkJywgY29udHJvbElucHV0TmFtZSk7XG4gICAgcHMuU2V0UHJvcGVydHkoJ1NXRUpJJywgZmFsc2UpO1xuICAgIHRoaXMuYXBwbGV0LlNldEFjdGl2ZUNvbnRyb2wobnVsbCk7IC8vIHRvIHByZXZlbnQgVXBkYXRlUGlja1xuICAgIHRoaXMuYXBwbGV0Lkludm9rZU1ldGhvZCgnR2V0UXVpY2tQaWNrSW5mbycsIHBzKTtcbiAgICByZXR1cm4gdGhpcy5sb3ZbY29udHJvbElucHV0TmFtZV07XG4gIH1cblxuICBnZXRTdGF0aWNMT1YoY29udHJvbE5hbWUpIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5fZ2V0Q29udHJvbChjb250cm9sTmFtZSk7XG4gICAgdGhpcy5fdmFsaWRhdGVQaWNrQ29udHJvbChjb250cm9sLCB0cnVlKTtcbiAgICBjb25zdCByZXQgPSBbXTtcbiAgICBjb25zdCBhcnIgPSBOMTliYXNlQXBwbGV0LkdldFN0YXRpY0xPVihjb250cm9sLkdldFJhZGlvR3JvdXBQcm9wU2V0KCkuY2hpbGRBcnJheSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIHJldC5wdXNoKGFycltpXS5EaXNwbGF5TmFtZSk7XG4gICAgfVxuICAgIHJldHVybiByZXQuc29ydCgpO1xuICB9XG5cbiAgX2dldENvbnRyb2xWYWx1ZShjb250cm9sVWlUeXBlLCB2YWx1ZSkge1xuICAgIC8vIHRvZG86IHdoYXQgYWJvdXQgZGF0ZXRpbWU/XG4gICAgbGV0IHJldCA9IHZhbHVlO1xuICAgIGlmICh0aGlzLmNvbnN0cy5nZXQoJ1NXRV9DVFJMX0NIRUNLQk9YJykgPT09IGNvbnRyb2xVaVR5cGUpIHtcbiAgICAgIC8vIGNvbnZlcnQgWS9OL251bGwgLT4gdHJ1ZS9mYWxzZS9udWxsXG4gICAgICAvLyBkbyB3ZSBuZWVkIHRvIHNlbmQgbnVsbD9cbiAgICAgIHN3aXRjaCAodmFsdWUpIHtcbiAgICAgICAgY2FzZSAnWSc6XG4gICAgICAgICAgcmV0ID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnTic6XG4gICAgICAgICAgcmV0ID0gZmFsc2U7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIC8vIHRoaXMgaXMgYSB0ZW1wIG1ldGhvZCB0byBzdXBwb3J0IHRoZSBkZW1vIHdoZXJlXG4gIC8vIFNpZWJlbCBhbmQgY3VzdG9tIHJlbmRlcmVkIGFwcGxldCBjb2V4aXN0XG4gIF9nZXRGaWVsZFRvQ29udHJvbE1hcChfY29udHJvbHMpIHtcbiAgICBjb25zdCByZXQgPSB7fTtcbiAgICBjb25zdCBhcHBsZXRDb250cm9scyA9IHRoaXMuX3JldHVybkNvbnRyb2xzKCk7XG4gICAgY29uc3QgYXJyID0gT2JqZWN0LmtleXMoX2NvbnRyb2xzKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgY29udHJvbCA9IGFwcGxldENvbnRyb2xzW2FycltpXV07XG4gICAgICByZXRbY29udHJvbC5HZXRGaWVsZE5hbWUoKV0gPSB7XG4gICAgICAgIG5hbWU6IGNvbnRyb2wuR2V0TmFtZSgpLFxuICAgICAgICBpc1Bvc3RDaGFuZ2VzOiBjb250cm9sLklzUG9zdENoYW5nZXMoKSxcbiAgICAgICAgdWlUeXBlOiBjb250cm9sLkdldFVJVHlwZSgpLFxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIGdldEN1cnJlbnRSZWNvcmQocmF3KSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmdldFNlbGVjdGlvbigpO1xuICAgIC8vIHRvZG86IGNoZWNrIGlmIHJlY29yZFxuICAgIC8vIHRvZG86IG1ha2UgYSBjb3B5IG9mIHJldHVybmVkIG9iamVjdCAodG8gYXZvaWQgdGhlIGFjY2lkZW50YWwgbW9kaWZpY2F0aW9uIG9mIHRoZSByZWNvcmRzZXQpXG4gICAgaWYgKHJhdykge1xuICAgICAgcmV0dXJuIHRoaXMucG0uR2V0KCdHZXRSYXdSZWNvcmRTZXQnKVtpbmRleF07XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnBtLkdldCgnR2V0UmVjb3JkU2V0JylbaW5kZXhdO1xuICB9XG5cbiAgY2FsY3VsYXRlQ3VycmVudFJlY29yZFN0YXRlKCkge1xuICAgIC8vIHRvZG86IGRvIHdlIG5lZWQgdG8gZGVsZXRlIHBlbmRpbmdcbiAgICAvLyAwIC0gTm8gcmVjb3JkcyBkaXNwbGF5ZWRcbiAgICAvLyAxIC0gUmVjb3JkIGlzIGJlaW5nIGNyZWF0ZWRcbiAgICAvLyAyIC0gUmVjb3JkIGlzIGJlaW5nIGVkaXRlZFxuICAgIC8vIDMgLSBJcyBpbiBxdWVyeSBtb2RlXG4gICAgLy8gNCAtIFJlY29yZCBpcyBkaXNwbGF5ZWQsXG4gICAgLy8gNSAtIFJlY29yZCBpcyByZWFkLW9ubHlcblxuICAgIGNvbnN0IGJjID0gdGhpcy5hcHBsZXQuR2V0QnVzQ29tcCgpO1xuXG4gICAgaWYgKGJjLklzSW5RdWVyeVN0YXRlKCkpIHtcbiAgICAgIC8vIGlmIG5vIHJlY29yZHMgYW5kIHRoZSBlbnRlcmVkIHRoZSBxdWVyeSBtb2RlLFxuICAgICAgLy8gc2VsZWN0aW9uIGlzIC0xLCB0aGVyZWZvcmUgd2UgbmVlZCB0byBjaGVjayBxdWVyeSBtb2RlIGZpcnN0XG4gICAgICByZXR1cm4gMztcbiAgICB9XG4gICAgaWYgKHRoaXMuZ2V0U2VsZWN0aW9uKCkgPCAwKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgaWYgKGJjLklzSW5zZXJ0UGVuZGluZygpKSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9XG4gICAgaWYgKGJjLklzQ29tbWl0UGVuZGluZygpKSB7XG4gICAgICByZXR1cm4gMjtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmNhbkludm9rZU1ldGhvZCgnV3JpdGVSZWNvcmQnKSkge1xuICAgICAgLy8gb3IgbWF5YmUgYmV0dGVyIHRvIHVzZSB0aGUgY2FuVXBkYXRlIHByb3BlcnR5IG9mIHRoZSBiY1xuICAgICAgcmV0dXJuIDU7XG4gICAgfVxuXG4gICAgcmV0dXJuIDQ7IC8vIHRoaXMgaXMgYSBkZWZhdWx0IGZhbGxiYWNrO1xuICB9XG5cbiAgZ2V0Q3VycmVudFJlY29yZE1vZGVsKF9jb250cm9scywgX21ldGhvZHMpIHtcbiAgICBpZiAoIV9jb250cm9scykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBfY29udHJvbHMuc3RhdGUgPSB0aGlzLmNhbGN1bGF0ZUN1cnJlbnRSZWNvcmRTdGF0ZSgpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgX2NvbnRyb2xzLmlkID0gJyc7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBsZXQgb2JqID0ge307XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmdldFNlbGVjdGlvbigpO1xuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICBvYmogPSB0aGlzLmdldFJlY29yZFNldCgpW2luZGV4XTtcbiAgICAgIF9jb250cm9scy5pZCA9IHRoaXMuZ2V0UmF3UmVjb3JkU2V0KClbaW5kZXhdLklkOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgfVxuICAgIGxldCBhcnIgPSBPYmplY3Qua2V5cyhfY29udHJvbHMpO1xuICAgIGNvbnN0IGFwcGxldENvbnRyb2xzID0gdGhpcy5fcmV0dXJuQ29udHJvbHMoKTtcbiAgICAvLyBwb3B1bGF0ZSBjb250cm9sc1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBjb250cm9sID0gYXBwbGV0Q29udHJvbHNbYXJyW2ldXTtcbiAgICAgIGlmICh0eXBlb2YgY29udHJvbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc3QgY29udHJvbE5hbWUgPSBjb250cm9sLkdldE5hbWUoKTtcbiAgICAgICAgY29uc3QgZmllbGROYW1lID0gY29udHJvbC5HZXRGaWVsZE5hbWUoKTtcbiAgICAgICAgaWYgKF9jb250cm9scy5zdGF0ZSA+IDApIHtcbiAgICAgICAgICBfY29udHJvbHNbYXJyW2ldXSA9IHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICAgICAgdmFsdWU6IHRoaXMuX2dldENvbnRyb2xWYWx1ZShjb250cm9sLkdldFVJVHlwZSgpLCBvYmpbZmllbGROYW1lXSksXG4gICAgICAgICAgICByZWFkb25seTogIXRoaXMucG0uRXhlY3V0ZU1ldGhvZCgnQ2FuVXBkYXRlJywgY29udHJvbE5hbWUpLFxuICAgICAgICAgICAgaXNMaW5rOiB0aGlzLnBtLkV4ZWN1dGVNZXRob2QoJ0Nhbk5hdmlnYXRlJywgY29udHJvbE5hbWUpLFxuICAgICAgICAgICAgbGFiZWw6IGNvbnRyb2wuR2V0RGlzcGxheU5hbWUoKSxcbiAgICAgICAgICAgIGlzUG9zdENoYW5nZXM6IGNvbnRyb2wuSXNQb3N0Q2hhbmdlcygpLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRoaXMuX2lzUmVxdWlyZWQoY29udHJvbC5HZXRJbnB1dE5hbWUoKSksXG4gICAgICAgICAgICBtYXhTaXplOiBjb250cm9sLkdldE1heFNpemUoKSxcbiAgICAgICAgICAgIGZpZWxkTmFtZSxcbiAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgeyAvLyBubyByZWNvcmQgZGlzcGxheWVkXG4gICAgICAgICAgX2NvbnRyb2xzW2FycltpXV0gPSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgICAgICAgIHZhbHVlOiAnJyxcbiAgICAgICAgICAgIHJlYWRvbmx5OiB0cnVlLFxuICAgICAgICAgICAgaXNMaW5rOiBmYWxzZSxcbiAgICAgICAgICAgIGxhYmVsOiBjb250cm9sLkdldERpc3BsYXlOYW1lKCksXG4gICAgICAgICAgICBpc1Bvc3RDaGFuZ2VzOiBjb250cm9sLklzUG9zdENoYW5nZXMoKSxcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0aGlzLl9pc1JlcXVpcmVkKGNvbnRyb2wuR2V0SW5wdXROYW1lKCkpLFxuICAgICAgICAgICAgbWF4U2l6ZTogY29udHJvbC5HZXRNYXhTaXplKCksXG4gICAgICAgICAgICBmaWVsZE5hbWUsXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAvLyBwb3B1bGF0ZSBtZXRob2RzXG4gICAgaWYgKF9tZXRob2RzKSB7XG4gICAgICBhcnIgPSBPYmplY3Qua2V5cyhfbWV0aG9kcyk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBfbWV0aG9kc1thcnJbaV1dID0gdGhpcy5jYW5JbnZva2VNZXRob2QoYXJyW2ldKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgfVxuICAgIH1cbiAgICAvLyByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4ge1xuICAgICAgY29udHJvbHM6IF9jb250cm9scyxcbiAgICAgIG1ldGhvZHM6IF9tZXRob2RzLFxuICAgIH07XG4gIH1cblxuICBfZ2V0Q29udHJvbElucHV0TmFtZUZvcklkUXVlcnkoKSB7XG4gICAgY29uc3QgYXBwbGV0Q29udHJvbHMgPSB0aGlzLl9yZXR1cm5Db250cm9scygpO1xuICAgIGNvbnN0IGFyciA9IE9iamVjdC5rZXlzKGFwcGxldENvbnRyb2xzKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgY29udHJvbCA9IGFwcGxldENvbnRyb2xzW2FycltpXV07XG4gICAgICBjb25zdCBjb250cm9sVWlUeXBlID0gY29udHJvbC5HZXRVSVR5cGUoKTtcbiAgICAgIGlmICghdGhpcy5faXNTa2lwQ29udHJvbChjb250cm9sVWlUeXBlKSkge1xuICAgICAgICAvLyBza2lwcGluZyBhbHNvIEpDaGVja2JveFxuICAgICAgICAvLyB0b2RvOiBjaGVjayBkbyB3ZSBuZWVkIHRvIHNraXAgYWxzbyBkYXRlP1xuICAgICAgICBpZiAoY29udHJvbFVpVHlwZSAhPT0gdGhpcy5jb25zdHMuZ2V0KCdTV0VfQ1RSTF9DSEVDS0JPWCcpKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRyb2wuR2V0SW5wdXROYW1lKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjYW5ub3QgZmluZCBhIGNvbnRyb2wgZm9yIHF1ZXJ5Jyk7XG4gIH1cblxuICBfbmV3UXVlcnkoKSB7XG4gICAgcmV0dXJuIHRoaXMucG0uRXhlY3V0ZU1ldGhvZCgnSW52b2tlTWV0aG9kJywgJ05ld1F1ZXJ5JywgbnVsbCwgZmFsc2UpO1xuICB9XG5cbiAgcXVlcnlCeVNlYXJjaEV4cHJTeW5jKGV4cHIpIHtcbiAgICB0aGlzLmFwcGxldC5JbnZva2VNZXRob2QoJ05ld1F1ZXJ5Jyk7XG4gICAgdGhpcy5hcHBsZXQuR2V0QnVzQ29tcCgpLlNldEZpZWxkVmFsdWUoJ0lkJywgZXhwcik7XG4gICAgdGhpcy5hcHBsZXQuSW52b2tlTWV0aG9kKCdFeGVjdXRlUXVlcnknKTtcbiAgICByZXR1cm4gdGhpcy5nZXRSZWNvcmRTZXQoKS5sZW5ndGg7XG4gIH1cblxuICBxdWVyeUJ5SWRTeW5jKHJvd0lkKSB7XG4gICAgbGV0IGV4cHIgPSByb3dJZDtcbiAgICBpZiAoQXJyYXkgPT09IHJvd0lkLmNvbnN0cnVjdG9yKSB7XG4gICAgICBleHByID0gcm93SWQubWFwKGVsID0+IGBJZD1cIiR7ZWx9XCJgKS5qb2luKCcgT1IgJyk7XG4gICAgICBjb25zb2xlLmxvZyhleHByKTtcbiAgICB9XG5cbiAgICB0aGlzLmFwcGxldC5JbnZva2VNZXRob2QoJ05ld1F1ZXJ5Jyk7XG4gICAgdGhpcy5hcHBsZXQuR2V0QnVzQ29tcCgpLlNldEZpZWxkVmFsdWUoJ0lkJywgZXhwcik7XG4gICAgdGhpcy5hcHBsZXQuSW52b2tlTWV0aG9kKCdFeGVjdXRlUXVlcnknKTtcbiAgICByZXR1cm4gdGhpcy5nZXRSZWNvcmRTZXQoKS5sZW5ndGg7XG4gIH1cblxuICBxdWVyeUJ5SWQocm93SWQsIGNiKSB7XG4gICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gdGhpcy5fcXVlcnlCeUlkKHJvd0lkLCByZXNvbHZlKSk7XG4gICAgY29uc3QgcmV0ID0gcHJvbWlzZS50aGVuKCgpID0+IHRoaXMuZ2V0UmVjb3JkU2V0KCkubGVuZ3RoKTtcbiAgICByZXR1cm4gdHlwZW9mIGNiID09PSAnZnVuY3Rpb24nID8gcmV0LnRoZW4oY2IpIDogcmV0O1xuICB9XG5cbiAgX3F1ZXJ5QnlJZChyb3dJZCwgY2IpIHtcbiAgICAvLyBtYXliZSBjaGVjayBpZiBpdCBpcyBhbHJlYWR5IGluIHF1ZXJ5IG1vZGUgLyBjYW5jZWwgdGhlIHF1ZXJ5XG4gICAgdGhpcy5fbmV3UXVlcnkoKTtcblxuICAgIGNvbnN0IG1ldGhvZCA9ICdFeGVjdXRlUXVlcnknO1xuICAgIGNvbnN0IGFpID0ge1xuICAgICAgc2NvcGU6IHRoaXMsXG4gICAgICBhc3luYzogdHJ1ZSxcbiAgICAgIG1hc2s6IGZhbHNlLFxuICAgICAgc2VsZmJ1c3k6IGZhbHNlLFxuICAgICAgYXJnczogW10sXG4gICAgfTtcbiAgICBpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBhaS5jYiA9IGNiO1xuICAgIH1cblxuICAgIGNvbnN0IHBzT3V0cHV0ID0gU2llYmVsQXBwLlNfQXBwLk5ld1Byb3BlcnR5U2V0KCk7XG4gICAgY29uc3QgcHNJbnB1dCA9IFNpZWJlbEFwcC5TX0FwcC5OZXdQcm9wZXJ0eVNldCgpO1xuICAgIHBzSW5wdXQuU2V0UHJvcGVydHkodGhpcy5fZ2V0Q29udHJvbElucHV0TmFtZUZvcklkUXVlcnkoKSwgYElkPVwiJHtyb3dJZH1cImApO1xuXG4gICAgYWkuYXJncy5wdXNoKG1ldGhvZCk7XG4gICAgYWkuYXJncy5wdXNoKHBzSW5wdXQuQ2xvbmUoKSk7XG5cbiAgICByZXR1cm4gdGhpcy5hcHBsZXQuQ2FsbFNlcnZlckFwcGxldChtZXRob2QsIHBzSW5wdXQsIHBzT3V0cHV0LCBhaSk7XG4gIH1cblxuICBxdWVyeShwYXJhbXMsIGNiKSB7XG4gICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gdGhpcy5fcXVlcnkocGFyYW1zLCByZXNvbHZlKSk7XG4gICAgY29uc3QgcmV0ID0gcHJvbWlzZS50aGVuKCgpID0+IHRoaXMuZ2V0UmVjb3JkU2V0KCkubGVuZ3RoKTtcbiAgICByZXR1cm4gdHlwZW9mIGNiID09PSAnZnVuY3Rpb24nID8gcmV0LnRoZW4oY2IpIDogcmV0O1xuICB9XG5cbiAgX3F1ZXJ5KHBhcmFtcywgY2IpIHtcbiAgICAvLyBUT0RPOiBjaGVjayBpZiBpdCBpcyBhbHJlYWR5IGluIHF1ZXJ5IG1vZGUgdG8gYXZvaWQgY2FsbGluZyB0aGUgbmV3IHF1ZXJ5IGFnYWluXG4gICAgLy8gb3IgbWF5YmUgYmV0dGVyIHRvIGNhbmNlbCB0aGUgZXhpc3RpbmcgcXVlcnk/XG4gICAgdGhpcy5fbmV3UXVlcnkoKTtcblxuICAgIGNvbnN0IG1ldGhvZCA9ICdFeGVjdXRlUXVlcnknO1xuICAgIGNvbnN0IGFpID0ge1xuICAgICAgc2NvcGU6IHRoaXMsXG4gICAgICBhc3luYzogdHJ1ZSxcbiAgICAgIG1hc2s6IGZhbHNlLFxuICAgICAgc2VsZmJ1c3k6IGZhbHNlLFxuICAgICAgYXJnczogW10sXG4gICAgfTtcbiAgICBpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBhaS5jYiA9IGNiO1xuICAgIH1cblxuICAgIGNvbnN0IHBzT3V0cHV0ID0gU2llYmVsQXBwLlNfQXBwLk5ld1Byb3BlcnR5U2V0KCk7XG4gICAgY29uc3QgcHNJbnB1dCA9IFNpZWJlbEFwcC5TX0FwcC5OZXdQcm9wZXJ0eVNldCgpO1xuICAgIGNvbnN0IGFyciA9IE9iamVjdC5rZXlzKHBhcmFtcyk7XG4gICAgY29uc3QgX2NvbnRyb2xzID0gdGhpcy5fcmV0dXJuQ29udHJvbHMoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgY29udHJvbCA9IF9jb250cm9sc1thcnJbaV1dO1xuICAgICAgcHNJbnB1dC5TZXRQcm9wZXJ0eShjb250cm9sLkdldElucHV0TmFtZSgpLCB0aGlzLl9nZXRWYWx1ZUZvckNvbnRyb2woY29udHJvbC5HZXRVSVR5cGUoKSwgcGFyYW1zW2FycltpXV0pKTtcbiAgICB9XG4gICAgYWkuYXJncy5wdXNoKG1ldGhvZCk7XG4gICAgYWkuYXJncy5wdXNoKHBzSW5wdXQuQ2xvbmUoKSk7XG5cbiAgICByZXR1cm4gdGhpcy5hcHBsZXQuQ2FsbFNlcnZlckFwcGxldChtZXRob2QsIHBzSW5wdXQsIHBzT3V0cHV0LCBhaSk7XG4gIH1cblxuICBzdGF0aWMgUmVxdWVyeShuYW1lKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IFNpZWJlbEFwcC5TX0FwcC5HZXRTZXJ2aWNlKCdOMTkgQlMnKTtcbiAgICBpZiAoc2VydmljZSkge1xuICAgICAgY29uc3QgaW5Qcm9wU2V0ID0gU2llYmVsQXBwLlNfQXBwLk5ld1Byb3BlcnR5U2V0KCk7XG4gICAgICBpblByb3BTZXQuU2V0UHJvcGVydHkoJ25hbWUnLCBuYW1lKTtcbiAgICAgIHNlcnZpY2UuSW52b2tlTWV0aG9kKCdSZXF1ZXJ5JywgaW5Qcm9wU2V0LCB7fSk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIFJlZnJlc2gobmFtZSkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSBTaWViZWxBcHAuU19BcHAuR2V0U2VydmljZSgnTjE5IEJTJyk7XG4gICAgaWYgKHNlcnZpY2UpIHtcbiAgICAgIGNvbnN0IGluUHJvcFNldCA9IFNpZWJlbEFwcC5TX0FwcC5OZXdQcm9wZXJ0eVNldCgpO1xuICAgICAgaW5Qcm9wU2V0LlNldFByb3BlcnR5KCduYW1lJywgbmFtZSk7XG4gICAgICBzZXJ2aWNlLkludm9rZU1ldGhvZCgnUmVmcmVzaCcsIGluUHJvcFNldCwge30pO1xuICAgIH1cbiAgfVxuXG4gIGdldE1WRihpZHMsIGZpZWxkcywgdXNlQWN0aXZlQk8pIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4gdGhpcy5fZ2V0TVZGKGlkcywgZmllbGRzLCB1c2VBY3RpdmVCTywgcmVzb2x2ZSwgcmVqZWN0KSk7XG4gIH1cblxuICBfZ2V0RmllbGROYW1lRm9yQ29udHJvbChjb250cm9sTmFtZSkge1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLl9nZXRDb250cm9sKGNvbnRyb2xOYW1lKTtcbiAgICAvLyBpZiBub3QgZm91bmQsIHRoZSBpbnB1dCB2YWx1ZSBpcyByZXR1cm5lZFxuICAgIGlmIChjb250cm9sKSB7XG4gICAgICByZXR1cm4gY29udHJvbC5HZXRGaWVsZE5hbWUoKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbnRyb2xOYW1lO1xuICB9XG5cbiAgX2dldE1WRihpZHMsIGZpZWxkcywgdXNlQWN0aXZlQk8sIHJlc29sdmUsIHJlamVjdCkge1xuICAgIGNvbnN0IGFyciA9IE9iamVjdC5lbnRyaWVzKGZpZWxkcyk7XG4gICAgY29uc3QgcHNJbnB1dHMgPSBTaWViZWxBcHAuU19BcHAuTmV3UHJvcGVydHlTZXQoKTtcbiAgICBwc0lucHV0cy5TZXRQcm9wZXJ0eSgnQk8nLCBTaWViZWxBcHAuU19BcHAuR2V0QWN0aXZlQnVzT2JqKCkuR2V0TmFtZSgpKTtcbiAgICBwc0lucHV0cy5TZXRQcm9wZXJ0eSgnQkMnLCB0aGlzLnBtLkdldCgnR2V0QnVzQ29tcCcpLkdldE5hbWUoKSk7XG4gICAgcHNJbnB1dHMuU2V0UHJvcGVydHkoJ1VzZUFjdGl2ZUJPJywgdXNlQWN0aXZlQk8gPyAnWScgOiAnTicpO1xuICAgIHBzSW5wdXRzLlNldFByb3BlcnR5KCdJRCcsIGlkcy5qb2luKCcsJykpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBwcyA9IFNpZWJlbEFwcC5TX0FwcC5OZXdQcm9wZXJ0eVNldCgpO1xuICAgICAgcHMuU2V0VHlwZSh0aGlzLl9nZXRGaWVsZE5hbWVGb3JDb250cm9sKGFycltpXVswXSkpO1xuICAgICAgcHMuU2V0UHJvcGVydHkoJ0ZpZWxkcycsIGFycltpXVsxXS5qb2luKCcsJykpO1xuICAgICAgcHNJbnB1dHMuQWRkQ2hpbGQocHMuQ2xvbmUoKSk7XG4gICAgfVxuICAgIGNvbnN0IGJzID0gU2llYmVsQXBwLlNfQXBwLkdldFNlcnZpY2UoJ04xOSBCUycpO1xuICAgIGNvbnN0IGFpID0ge1xuICAgICAgYXN5bmM6IHRydWUsXG4gICAgICBzZWxmYnVzeTogdHJ1ZSxcbiAgICAgIHNjb3BlOiB0aGlzLFxuICAgICAgZXJyY2I6ICgpID0+IHJlamVjdCgpLFxuICAgICAgY2I6IChtZXRob2ROYW1lLCBJbnB1dHMsIHBzT3V0cHV0cykgPT4ge1xuICAgICAgICBjb25zdCBib29sT2JqZWN0ID0gbmV3IFNpZWJlbEFwcC5TX0FwcC5EYXR1bUJvb2xPYmplY3QoKTtcbiAgICAgICAgY29uc3QgeyBjaGlsZEFycmF5IH0gPSBwc091dHB1dHMuR2V0Q2hpbGRCeVR5cGUoJ1Jlc3VsdFNldCcpIHx8IHt9OyAvLyB0byBiZSBwcm90ZWN0ZWRkIHdoZW4gbm8gcmVzdWx0cz9cbiAgICAgICAgY29uc3QgcmV0ID0ge307XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRBcnJheS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIHJldFtjaGlsZEFycmF5W2ldLkdldFR5cGUoKV0gPSB7fTtcbiAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNoaWxkQXJyYXlbaV0uY2hpbGRBcnJheS5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICAgICAgY29uc3QgZWwgPSBjaGlsZEFycmF5W2ldLmNoaWxkQXJyYXlbal07XG4gICAgICAgICAgICByZXRbY2hpbGRBcnJheVtpXS5HZXRUeXBlKCldW2VsLkdldFR5cGUoKV0gPSBlbC5jaGlsZEFycmF5Lm1hcCgocmVjKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHByaW1hcnkgPSByZWMucHJvcEFycmF5WydTU0EgUHJpbWFyeSBGaWVsZCddO1xuICAgICAgICAgICAgICBib29sT2JqZWN0LlNldEFzU3RyaW5nKHByaW1hcnkpO1xuICAgICAgICAgICAgICByZWMucHJvcEFycmF5WydTU0EgUHJpbWFyeSBGaWVsZCddID0gYm9vbE9iamVjdC5HZXRWYWx1ZSgpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCByZWMucHJvcEFycmF5KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXNvbHZlKHJldCk7XG4gICAgICB9LFxuICAgIH07XG4gICAgcmV0dXJuIGJzLkludm9rZU1ldGhvZCgnUmV0dXJuTVZHRmllbGRzJywgcHNJbnB1dHMsIGFpKTtcbiAgfVxuXG4gIHNhdmVQcmVmKG5hbWUsIHZhbHVlKSB7XG4gICAgLy8gdmFsdWUgaXMgYSBzdHJpbmdcbiAgICAvLyB2YWx1ZSBpcyBib3VuZCB0byBhcHBsZXQgYW5kIHZpZXdcbiAgICBjb25zdCBwc0lucHV0ID0gU2llYmVsQXBwLlNfQXBwLk5ld1Byb3BlcnR5U2V0KCk7XG4gICAgcHNJbnB1dC5TZXRQcm9wZXJ0eSgnS2V5JywgbmFtZSk7XG4gICAgcHNJbnB1dC5TZXRQcm9wZXJ0eShuYW1lLCB2YWx1ZSk7XG4gICAgdGhpcy5wbS5PbkNvbnRyb2xFdmVudChcbiAgICAgIHRoaXMuY29uc3RzLmdldCgnUEhZRVZFTlRfSU5WT0tFX0NPTlRST0wnKSxcbiAgICAgIHRoaXMucG0uR2V0KHRoaXMuY29uc3RzLmdldCgnU1dFX01USERfVVBEQVRFX1VTRVJfUFJFRicpKSxcbiAgICAgIHBzSW5wdXQsXG4gICAgKTtcbiAgICByZXR1cm4gdGhpcy5wbS5TZXRQcm9wZXJ0eShuYW1lLCB2YWx1ZSk7XG4gIH1cblxuICByZWFkUHJlZihuYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMucG0uR2V0KG5hbWUpO1xuICB9XG5cbiAgX3JldHJpZXZlRGF0YShhbW91bnQpIHsgLy8gdGVtcCBtZXRob2Q/XG4gICAgY29uc3QgZGF0YSA9IG5ldyBNYXAoKTtcblxuICAgIHdoaWxlIChkYXRhLnNpemUgPCBhbW91bnQpIHtcbiAgICAgIGNvbnN0IHRlbXAgPSB0aGlzLmdldFJhd1JlY29yZFNldCgpO1xuXG4gICAgICAvLyBhdm9pZCB0aGUgZHVwbGljYXRlc1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZW1wLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGRhdGEuc2V0KHRlbXBbaV0uSWQsIHRlbXBbaV0pO1xuICAgICAgfVxuXG4gICAgICAvLyB3ZSBhcmUgdXNpbmcgY2FuSW52b2tlTWV0aG9kLCBhcyBpbiAxNi4wMCBuZXh0UmVjb3JkU2V0IGFsd2F5cyByZXR1cm5zIHVuZGVmaW5lZFxuICAgICAgaWYgKCF0aGlzLmNhbkludm9rZU1ldGhvZCgnR290b05leHRTZXQnKSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgdGhpcy5uZXh0UmVjb3JkU2V0KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGE6IFsuLi5kYXRhLnZhbHVlcygpXSxcbiAgICAgIGhhc05leHQ6IHRoaXMuY2FuSW52b2tlTWV0aG9kKCdHb3RvTmV4dFNldCcpLFxuICAgIH07XG4gIH1cblxuICBfc2V0RmllbGRWYWx1ZShuYW1lLCB2YWx1ZSkge1xuICAgIHRoaXMuYXBwbGV0LkdldEJ1c0NvbXAoKS5TZXRGaWVsZFZhbHVlKG5hbWUsIHZhbHVlKTtcbiAgICByZXR1cm4gdGhpcy5hcHBsZXQuSW52b2tlTWV0aG9kKCdXcml0ZVJlY29yZCcpO1xuICB9XG5cbiAgZ2V0RmllbGRUb0NvbnRyb2xNYXAoKSB7XG4gICAgdGhpcy5maWVsZFRvQ29udHJvbE1hcCA9IHsgSWQ6ICdJZCcgfTtcbiAgICBjb25zdCBhcHBsZXRDb250cm9scyA9IHRoaXMuX3JldHVybkNvbnRyb2xzKCk7XG4gICAgY29uc3QgYXJyID0gT2JqZWN0LmtleXMoYXBwbGV0Q29udHJvbHMpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBjb250cm9sID0gYXBwbGV0Q29udHJvbHNbYXJyW2ldXTtcbiAgICAgIGNvbnN0IGZpZWxkID0gY29udHJvbC5HZXRGaWVsZE5hbWUoKTtcbiAgICAgIGlmIChmaWVsZCkge1xuICAgICAgICB0aGlzLmZpZWxkVG9Db250cm9sTWFwW2ZpZWxkXSA9IGFycltpXTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZmllbGRUb0NvbnRyb2xNYXA7XG4gIH1cblxuICBnZXRDb250cm9sc1JlY29yZFNldCgpIHtcbiAgICBpZiAoIXRoaXMuZmllbGRUb0NvbnRyb2xNYXApIHtcbiAgICAgIHRoaXMuZ2V0RmllbGRUb0NvbnRyb2xNYXAoKTtcbiAgICB9XG4gICAgLy8gdXNlZCBzbGljZSB0byBhdm9pZCBtb2RpZmljYXRpb24gb2YgdGhlIHJlY29yZCBzZXRcbiAgICBjb25zdCByZXQgPSB0aGlzLmdldFJlY29yZFNldCgpLnNsaWNlKCk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJldC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgcmV0W2ldID0gT2JqZWN0LmtleXMocmV0W2ldKS5maWx0ZXIoZWwgPT4gdGhpcy5maWVsZFRvQ29udHJvbE1hcFtlbF0pLnJlZHVjZSgoYWNjLCBlbCkgPT4gKHtcbiAgICAgICAgLi4uYWNjLFxuICAgICAgICAuLi57IFt0aGlzLmZpZWxkVG9Db250cm9sTWFwW2VsXV06IHJldFtpXVtlbF0gfSxcbiAgICAgIH0pLCB7fSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJldDtcbiAgfVxufVxuIiwiaW1wb3J0IE4xOWJhc2VBcHBsZXQgZnJvbSAnLi9uMTliYXNlQXBwbGV0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTjE5cG9wdXBBcHBsZXQgZXh0ZW5kcyBOMTliYXNlQXBwbGV0IHtcbiAgY29uc3RydWN0b3Ioc2V0dGluZ3MpIHtcbiAgICBzdXBlcihzZXR0aW5ncyk7XG4gICAgY29uc29sZS5sb2coYCR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfSBzdGFydGVkLi4uYCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuXG4gICAgaWYgKHRoaXMuaXNMaXN0QXBwbGV0KSB7XG4gICAgICB0aGlzLnBtLkdldFJlbmRlcmVyKCkucmVzaXplID0gKCkgPT4gMDtcbiAgICAgIHRoaXMucG0uR2V0UmVuZGVyZXIoKS5HZXRTZWxlY3RlZFJvdyA9ICgpID0+IDA7XG4gICAgfVxuICB9XG5cbiAgcGlja1JlY29yZCgpIHtcbiAgICAvLyB0b2RvIDogY2hlY2sgQ2FuSW5va2VNZXRob2QgYW5kL29yIGlzIGl0IHBpY2tcbiAgICByZXR1cm4gdGhpcy5wbS5FeGVjdXRlTWV0aG9kKCdJbnZva2VNZXRob2QnLCAnUGlja1JlY29yZCcpO1xuICB9XG5cbiAgZGVsZXRlUmVjb3JkcyhjYikge1xuICAgIC8vIG1ldGhvZCBpcyBub3QgYWxsb3dlZCB0byBkZWxldGUgdGhlIHByaW1hcnlcbiAgICAvLyAgaW4gdGhpcyBjYXNlIGl0IHJldHVybnMgXCJNZXRob2QgRGVsZXRlUmVjb3JkcyBpcyBub3QgYWxsb3dlZCBoZXJlXCIgU0JMLVVJRi0wMDM0OFxuICAgIC8vIHRvZG86IGNoZWNrIGNhbkludm9rZU1ldGhvZCBhbmQvb3IgaXMgaXQgTVZHXG4gICAgY29uc3QgcmV0ID0gdGhpcy5wbS5FeGVjdXRlTWV0aG9kKCdJbnZva2VNZXRob2QnLCAnRGVsZXRlUmVjb3JkcycpO1xuICAgIGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNiKCk7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICBhZGRSZWNvcmRzKGNiKSB7XG4gICAgLy8gdG9kbzogY2hlY2sgY2FuSW52b2tlTWV0aG9kIGFuZC9vciBpcyBpdCBNVkcuIGFuZCBpZiB3ZSBoYXZlIGEgcmVjb3JkIGluIGFzc29jP1xuICAgIGNvbnN0IHJldCA9IHRoaXMucG0uRXhlY3V0ZU1ldGhvZCgnSW52b2tlTWV0aG9kJywgJ0FkZFJlY29yZHMnKTtcbiAgICBpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjYigpO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgLy8gdG9kbzogZG8gd2UgbmVlZCBkZWxldGVBbGxSZWNvcmRzP1xuICBhZGRBbGxSZWNvcmRzKGNiKSB7XG4gICAgLy8gdG9kbzogY2hlY2sgY2FuSW52b2tlTWV0aG9kIGFuZC9vciBpcyBpdCBNVkcuIGFuZCBpZiB3ZSBoYXZlIGEgcmVjb3JkIGluIGFzc29jP1xuICAgIGNvbnN0IHJldCA9IHRoaXMucG0uRXhlY3V0ZU1ldGhvZCgnSW52b2tlTWV0aG9kJywgJ0FkZEFsbFJlY29yZHMnKTtcbiAgICBpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjYigpO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgX2ZpcnN0UmVjb3JkKCkgeyAvLyB0ZW1wIG1ldGhvZCwgYXNzdW1lcyB0aGF0IG5vIHNjcm9sbGluZyBoYXBwZW5lZFxuICAgIGlmICh0aGlzLmlzTGlzdEFwcGxldCkge1xuICAgICAgaWYgKHRoaXMuZ2V0U2VsZWN0aW9uKCkgIT09IDApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb25PblJvdygwKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiIsImltcG9ydCBOMTlwb3B1cEFwcGxldCBmcm9tICcuL24xOXBvcHVwQXBwbGV0JztcblxuY29uc3Qgc2luZ2xldG9uID0gU3ltYm9sKCdzaW5nbGV0b24nKTtcbmNvbnN0IHNpbmdsZXRvbkVuZm9yY2VyID0gU3ltYm9sKCdzaW5nbGV0b25FbmZvcmNlcicpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOMTlwb3B1cENvbnRyb2xsZXIge1xuICBzdGF0aWMgZ2V0IGluc3RhbmNlKCkge1xuICAgIGlmICghdGhpc1tzaW5nbGV0b25dKSB7XG4gICAgICB0aGlzW3NpbmdsZXRvbl0gPSBuZXcgTjE5cG9wdXBDb250cm9sbGVyKHNpbmdsZXRvbkVuZm9yY2VyKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXNbc2luZ2xldG9uXTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGVuZm9yY2VyKSB7XG4gICAgaWYgKGVuZm9yY2VyICE9PSBzaW5nbGV0b25FbmZvcmNlcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnN0YW50aWF0aW9uIGZhaWxlZDogdXNlIFNpbmdsZXRvbi5nZXRJbnN0YW5jZSgpIGluc3RlYWQgb2YgbmV3LicpO1xuICAgIH1cbiAgICB0aGlzLmNvbnN0cyA9IFNpZWJlbEpTLkRlcGVuZGVuY3koJ1NpZWJlbEFwcC5Db25zdGFudHMnKTtcbiAgICB0aGlzLmlzUG9wdXBIaWRkZW4gPSBmYWxzZTtcbiAgICB0aGlzLnJlc29sdmVQcm9taXNlID0gbnVsbDtcbiAgICB0aGlzLnBvcHVwQXBwbGV0TjE5ID0gbnVsbDtcbiAgICB0aGlzLmFzc29jQXBwbGV0TjE5ID0gbnVsbDtcblxuICAgIGNvbnNvbGUubG9nKGAke3RoaXMuY29uc3RydWN0b3IubmFtZX0gc3RhcnRlZC4uLmApOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcblxuICAgIC8vIGl0IHdpbGwgYmUgYSBzaW5nbGV0b24sIHNvIHRoZXJlIGlzIG5vIGNsZWFudXBcbiAgICB0aGlzLk4xOXByb2Nlc3NOZXdQb3B1cCA9IFNpZWJlbEFwcC5TX0FwcC5Qcm9jZXNzTmV3UG9wdXA7XG4gICAgU2llYmVsQXBwLlNfQXBwLlByb2Nlc3NOZXdQb3B1cCA9IChwcykgPT4ge1xuICAgICAgbGV0IHJldDtcbiAgICAgIGlmICh0aGlzLmlzUG9wdXBIaWRkZW4pIHtcbiAgICAgICAgcmV0ID0gdGhpcy5wcm9jZXNzTmV3UG9wdXAocHMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0ID0gdGhpcy5OMTlwcm9jZXNzTmV3UG9wdXAuY2FsbChTaWViZWxBcHAuU19BcHAsIHBzKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXQ7XG4gICAgfTtcblxuICAgIHRoaXMuTjE5dmlld0xvYWRlZCA9IFNpZWJlbEFwcC5jb250ZW50VXBkYXRlci52aWV3TG9hZGVkO1xuICAgIFNpZWJlbEFwcC5jb250ZW50VXBkYXRlci52aWV3TG9hZGVkID0gKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IHJldCA9IHRoaXMuTjE5dmlld0xvYWRlZC5jYWxsKFNpZWJlbEFwcC5jb250ZW50VXBkYXRlciwgLi4uYXJncyk7XG4gICAgICBpZiAodHlwZW9mIHRoaXMucmVzb2x2ZVByb21pc2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gdG9kbzogdXNlIGhlcmUgdGhlIHByb3BlcnRpZXMgc2V0IG9uIHByb21pc2VSZXNvbHZpbmc/XG4gICAgICAgIGNvbnN0IHsgYXBwbGV0TmFtZSB9ID0gTjE5cG9wdXBDb250cm9sbGVyLklzUG9wdXBPcGVuKCk7XG4gICAgICAgIGlmICghYXBwbGV0TmFtZSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignT3BlbiBBcHBsZXQgTmFtZSBpcyBub3QgZm91bmQgaW4gcmVzb2x2ZVByb21pc2UnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhcHBsZXQgPSBOMTlwb3B1cENvbnRyb2xsZXIuR2V0UG9wdXBBcHBsZXQoYXBwbGV0TmFtZSk7XG4gICAgICAgIGNvbnN0IHBtID0gYXBwbGV0LkdldFBNb2RlbCgpO1xuICAgICAgICAvLyB0b2RvOiBhdm9pZCB0aGlzIGNpcmN1bGFyaXR5XG4gICAgICAgIHRoaXMucG9wdXBBcHBsZXROMTkgPSBuZXcgTjE5cG9wdXBBcHBsZXQoeyBwbSB9KTsgLy8gdG9kbyA6IHNwbGl0IE4xOUhlbHBlciBpbnRvIDIgY2xhc3Nlc1xuICAgICAgICBjb25zdCBvYmogPSB7IGFwcGxldE5hbWUsIHBvcHVwQXBwbGV0TjE5OiB0aGlzLnBvcHVwQXBwbGV0TjE5IH07XG4gICAgICAgIC8vIGNoZWNrIGlmIHdlIGhhdmUgYXNzb2NcbiAgICAgICAgLy8gd2UgYXNzdW1lIGl0IGlzIGFsd2F5cyBhc3NvYyBhcHBsZXQsIGJ1dCB3aGF0IGFib3V0IG9wZW5pbmcgcG9wdXAgb24gdGhlIHRvcCBvZiBhbm90aGVyIC0gbm90IHRlc3RlZCBpdFxuICAgICAgICBjb25zdCBhc3NvY0FwcGxldCA9IGFwcGxldC5HZXRQb3B1cEFwcGxldCgpO1xuICAgICAgICBpZiAoYXNzb2NBcHBsZXQpIHtcbiAgICAgICAgICB0aGlzLmFzc29jQXBwbGV0TjE5ID0gbmV3IE4xOXBvcHVwQXBwbGV0KHsgcG06IGFzc29jQXBwbGV0LkdldFBNb2RlbCgpIH0pO1xuICAgICAgICAgIG9iai5hc3NvY0FwcGxldE4xOSA9IHRoaXMuYXNzb2NBcHBsZXROMTk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZXNvbHZlUHJvbWlzZShvYmopO1xuICAgICAgICB0aGlzLnJlc29sdmVQcm9taXNlID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXQ7XG4gICAgfTtcbiAgfVxuXG4gIGNhbk9wZW5Qb3B1cCgpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMucmVzb2x2ZVByb21pc2UgIT09ICdmdW5jdGlvbic7XG4gIH1cblxuICBwcm9jZXNzTmV3UG9wdXAocHMpIHtcbiAgICBTaWViZWxBcHAuU19BcHAuU2V0U2hvd05ld1BhZ2UoITApO1xuICAgIGNvbnN0IHBvcHVwUE0gPSBTaWViZWxBcHAuU19BcHAuR2V0UG9wdXBQTSgpO1xuXG4gICAgcG9wdXBQTS5TZXRQcm9wZXJ0eSgnQ2FuUHJvY2Vzc0xheW91dCcsICExKTtcbiAgICBwb3B1cFBNLlNldFByb3BlcnR5KCdpc1BvcHVwUGljaycsIGZhbHNlKTtcbiAgICBwb3B1cFBNLlNldFByb3BlcnR5KCdpc1BvcHVwTVZHQXNzb2MnLCBmYWxzZSk7XG4gICAgcG9wdXBQTS5TZXRQcm9wZXJ0eSgnaXNQb3B1cE1WR1NlbGVjdGVkJywgZmFsc2UpO1xuICAgIHBvcHVwUE0uU2V0UHJvcGVydHkoJ2lzUG9wdXBBc3NvYycsIGZhbHNlKTtcbiAgICBwb3B1cFBNLlNldFByb3BlcnR5KCdjdXJyUG9wdXBzJywgW10pO1xuICAgIHBvcHVwUE0uU2V0UHJvcGVydHkoJ2lzU0lQb3B1cCcsIHBzLkdldFByb3BlcnR5KHRoaXMuY29uc3RzLmdldCgnU1dFX0lTX1NJX1BPUFVQJykpKTtcbiAgICBwb3B1cFBNLlNldFByb3BlcnR5KCdpc1ByZXZQb3B1cFZpc2libGUnLCAhMSk7XG5cbiAgICBpZiAoIXBvcHVwUE0uR2V0UmVuZGVyZXIoKSkge1xuICAgICAgcG9wdXBQTS5TZXR1cCgpO1xuICAgIH1cblxuICAgIGNvbnN0IGFjdGl2ZVZpZXcgPSBTaWViZWxBcHAuU19BcHAuR2V0QWN0aXZlVmlldygpO1xuICAgIGlmIChhY3RpdmVWaWV3KSB7XG4gICAgICBjb25zdCBhY3RpdmVBcHBsZXQgPSBhY3RpdmVWaWV3LkdldEFjdGl2ZUFwcGxldCgpO1xuICAgICAgaWYgKGFjdGl2ZUFwcGxldCkge1xuICAgICAgICBhY3RpdmVWaWV3LlNldEFjdGl2ZUFwcGxldEJlZm9yZVBvcHVwKGFjdGl2ZUFwcGxldCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcG9wdXBQTS5BZGRQcm9wZXJ0eSgnc3RhdGUnLCAndmlzaWJsZScpOyAvLyB0b2RvOiB3ZSBuZWVkIGFsc28gdG8gcmVzdG9yZSB0aGUgUE1cblxuICAgIGxldCB1cmwgPSBwcy5HZXRQcm9wZXJ0eSgnVVJMJyk7XG4gICAgdXJsID0gU2llYmVsQXBwLlNfQXBwLkdldFBhZ2VVUkwoKSArIHVybC5zcGxpdCgnc3RhcnQuc3dlJylbMV07XG4gICAgcG9wdXBQTS5TZXRQcm9wZXJ0eSgndXJsJywgdXJsKTtcblxuICAgIHJldHVybiAncmVmcmVzaHBvcHVwJztcbiAgfVxuXG4gIC8vIHN0YXRpYyBSZUluaXRQb3B1cCgpIHtcbiAgLy8gICBjb25zdCBwb3B1cFBNID0gU2llYmVsQXBwLlNfQXBwLkdldFBvcHVwUE0oKTtcbiAgLy8gICBwb3B1cFBNLkluaXQoKTtcbiAgLy8gICBwb3B1cFBNLlNldHVwKCk7XG4gIC8vIH1cblxuICAvLyB0b2RvOiBjaGFuZ2UgdGhlIGFwcHJvYWNoLCB1c2UgdGhlIGNsYXNzIGludGVybmFsIHZhcmlhYmxlc1xuICBjbG9zZVBvcHVwQXBwbGV0KGFwcGxldCkge1xuICAgIC8vIHRvZG8gOiBjaGVjayBjYW5JbnZva2VNZXRob2RcbiAgICBsZXQgcmV0O1xuICAgIGlmIChhcHBsZXQpIHtcbiAgICAgIGNvbnN0IGlzUG9wdXBBcHBsZXQgPSB0eXBlb2YgYXBwbGV0LkdldFBvcHVwQXBwbGV0TmFtZSA9PT0gJ2Z1bmN0aW9uJztcbiAgICAgIGNvbnN0IGlzUGlja0FwcGxldCA9IHR5cGVvZiBhcHBsZXQuR2V0UGlja0FwcGxldE5hbWUgPT09ICdmdW5jdGlvbic7XG4gICAgICBpZiAoIWlzUG9wdXBBcHBsZXQgJiYgIWlzUGlja0FwcGxldCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoaXMgYXBwbGV0IGlzIG5laXRoZXIgcGljayBub3IgcG9wdXAnKTtcbiAgICAgIH1cbiAgICAgIHJldCA9IGFwcGxldC5HZXRQTW9kZWwoKS5FeGVjdXRlTWV0aG9kKCdJbnZva2VNZXRob2QnLCAnQ2xvc2VBcHBsZXQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gdG9kbzogISEhID4+IGNoYW5nZSB0aGlzIGFwcHJvYWNoXG4gICAgICByZXQgPSB0aGlzLnBvcHVwQXBwbGV0TjE5LmFwcGxldC5HZXRQTW9kZWwoKS5FeGVjdXRlTWV0aG9kKCdJbnZva2VNZXRob2QnLCAnQ2xvc2VBcHBsZXQnKTtcbiAgICB9XG4gICAgLy8gaXQgY291bGQgYmUgYmV0dGVyIGlmIHdlIGRvbid0IGhhdmUgYSBTaWViZWwgQXBwbGV0IG9uIHRoZSB2aWV3XG4gICAgLy8gaW4gdGhpcyBjYXNlLCB3ZSB3b3VsZCBub3QgbmVlZCB0byByZUluaXRQb3B1cFxuICAgIC8vIGlmICh0aGlzLmlzUG9wdXBIaWRkZW4pIHtcbiAgICAvLyAgTjE5cG9wdXBDb250cm9sbGVyLlJlSW5pdFBvcHVwKCk7XG4gICAgLy8gfVxuICAgIHRoaXMucG9wdXBBcHBsZXROMTkgPSBudWxsO1xuICAgIHRoaXMuYXNzb2NBcHBsZXROMTkgPSBudWxsO1xuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICBzdGF0aWMgSXNQb3B1cE9wZW4oKSB7IC8vIHRvZG86IHdoZW4gd2Ugc2V0IHNvbWUgcHJvcGVydGllcyBvbiByZXNvbHZlLCBkbyB3ZSBuZWVkIHRoaXMgbWV0aG9kIG5vd1xuICAgIC8vIHRvZG86IGhlcmUgcmV1c2UgdGhlIHByb3BlcnRpZXMgdGhhdCBzZXQgd2hlbiB0aGUgUHJvbWlzZSByZXNvbHZlZFxuICAgIGNvbnN0IGN1cnJQb3B1cHMgPSBTaWViZWxBcHAuU19BcHAuR2V0UG9wdXBQTSgpLkdldCgnY3VyclBvcHVwcycpO1xuICAgIGlmICgwID09PSBjdXJyUG9wdXBzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHsgaXNPcGVuOiBmYWxzZSB9O1xuICAgIH1cbiAgICBpZiAoMSA9PT0gY3VyclBvcHVwcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB7IGlzT3BlbjogdHJ1ZSwgYXBwbGV0TmFtZTogY3VyclBvcHVwc1swXS5HZXROYW1lKCksIGNvbnRyb2xOYW1lOiBjdXJyUG9wdXBzWzBdLkdldFBvcHVwQ29udHJvbCgpIH07XG4gICAgfVxuICAgIGlmICgyID09PSBjdXJyUG9wdXBzLmxlbmd0aCkge1xuICAgICAgLy8gdGhpcyBpcyBhIHNodXR0bGUgb3JcbiAgICAgIC8vIG1heWJlIHdlIG9wZW5lZCBhIHBvcHVwIGFwcGxldCBvbiB0aGUgdG9wIG9mIHBpY2sgYXBwbGV0IC0gVE9ETzogLy8gdGVzdCBpdFxuICAgICAgLy8gICAgICB0ZXN0IGl0ICAtIG1heWJlIHdlIG5lZWQgdG8gY2xvc2UgdGhlIHNldmVyYWwgYXBwbGV0c1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyUG9wdXBzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY3VyclBvcHVwc1sxXS5HZXRQb3B1cEFwcGxldE5hbWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICByZXR1cm4geyBpc09wZW46IHRydWUsIGFwcGxldE5hbWU6IGN1cnJQb3B1cHNbaV0uR2V0TmFtZSgpLCBjb250cm9sTmFtZTogY3VyclBvcHVwc1tpXS5HZXRQb3B1cENvbnRyb2woKSB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ012ZyBhcHBsZXQgaXMgbm90IGZvdW5kLi4uJyk7XG4gICAgfVxuICAgIC8vIHRvZG86IHRlc3QgaWYgd2UgY2FuIGdldCB0byBoZXJlXG4gICAgLy8gICAgbWF5YmUgd2hlbiB3ZSBvcGVuIGEgbmV3IGFwcGxldCBvbiB0b3Agb2YgdGhlIHNodXR0bGUgYXBwbGV0XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzaG91bGQgbm90IGJlIGhlcmUuLi4nKTtcbiAgfVxuXG4gIC8vIHN0YXRpYyBnZXRQb3B1cEFwcGxldFBNKGFwcGxldE5hbWUpIHtcbiAgLy8gICBjb25zdCBhcHBsZXQgPSBOMTlwb3B1cENvbnRyb2xsZXIuR2V0UG9wdXBBcHBsZXQoYXBwbGV0TmFtZSk7XG4gIC8vICAgcmV0dXJuIGFwcGxldC5HZXRQTW9kZWwoKTtcbiAgLy8gfVxuXG4gIHN0YXRpYyBHZXRQb3B1cEFwcGxldChhcHBsZXROYW1lKSB7XG4gICAgY29uc3QgYXBwbGV0ID0gU2llYmVsQXBwLlNfQXBwLkdldEFjdGl2ZVZpZXcoKS5HZXRBcHBsZXRNYXAoKVthcHBsZXROYW1lXTtcbiAgICBpZiAoIWFwcGxldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgJHthcHBsZXROYW1lfSBpcyBub3QgZm91bmQgaW4gYXBwbGV0IG1hcGApO1xuICAgIH1cbiAgICByZXR1cm4gYXBwbGV0O1xuICB9XG5cbiAgc2hvd1BvcHVwQXBwbGV0KGhpZGUsIGNiLCBwbSkge1xuICAgIC8vIHRvZG86IHVzZSB0aGUgcHJvcGVydGllcyBzZXQgb24gcHJvbWlzZSByZXNvbHZpbmc/XG4gICAgY29uc3QgeyBpc09wZW4sIGFwcGxldE5hbWUgfSA9IE4xOXBvcHVwQ29udHJvbGxlci5Jc1BvcHVwT3BlbigpO1xuICAgIGlmIChpc09wZW4pIHtcbiAgICAgIC8vIHRoaXMgY29kZSB3aWxsIGNsb3NlIHRoZSBhcHBsZXQgZXZlbiBpZiB0aGlzIGFwcGxldCB3YXMgb3JpZ2luYXRlZCBieSBhbm90aGVyIGFwcGxldFxuICAgICAgY29uc29sZS5sb2coYGNsb3NpbmcgJHthcHBsZXROYW1lfSBpbiBzaG93UG9wdXBBcHBsZXQuLi5gKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgICAvLyBtYXliZSBkbyBub3QgY2xvc2UgaWYgdGhlIGFwcGxldCB0byBiZSBvcGVuZWQgaWYgdGhlIHNhbWUgYXMgYWxyZWFkeSBvcGVuZWQ/XG4gICAgICB0aGlzLmNsb3NlUG9wdXBBcHBsZXQoTjE5cG9wdXBDb250cm9sbGVyLkdldFBvcHVwQXBwbGV0KGFwcGxldE5hbWUpKTtcbiAgICAgIC8vIHRvZG86IGNoZWNrIGlmIGdvdCBpdCBzdWNjZXNzZnVsbHkgY2xvc2VkP1xuICAgIH1cbiAgICB0aGlzLmlzUG9wdXBIaWRkZW4gPSAhIWhpZGU7IC8vIHRvZG86IGRvIHdlIG5lZWQgdG8ga2VlcCB0aGUgc2hvdyB0aGUgYXBwbGV0XG5cbiAgICBwbS5FeGVjdXRlTWV0aG9kKCdJbnZva2VNZXRob2QnLCAnRWRpdFBvcHVwJywgbnVsbCwgZmFsc2UpOyAvLyBzZWVtcyB3ZSBjYW4gYWxzbyB0byBjYWxsIEVkaXRGaWVsZFxuXG4gICAgbGV0IHJldCA9IHRydWU7XG5cbiAgICBpZiAoaGlkZSkgeyAvLyB3ZSB3aWxsIHBvcHVsYXRlIHRoZSBpbnN0YW5jZXMgb25seSB3aGVuIGFwcGxldCBzaG91bGQgYmUgaGlkZGVuXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmV0dXJuLWFzc2lnblxuICAgICAgcmV0ID0gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB0aGlzLnJlc29sdmVQcm9taXNlID0gcmVzb2x2ZSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcGFyYW0tYXNzaWduXG4gICAgICBpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldCA9IHJldC50aGVuKGNiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmV0O1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9