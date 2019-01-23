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
/* harmony import */ var _n19baseApplet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./n19baseApplet */ "./src/n19baseApplet.js");
/* harmony import */ var _n19popupController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./n19popupController */ "./src/n19popupController.js");



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

    _this = _possibleConstructorReturn(this, _getPrototypeOf(_class).call(this, settings));
    console.log('Nexus main class started....', _this.pm.Get('GetName')); // eslint-disable-line no-console
    // get the n19popupController singleton instance

    _this.n19popupController = _n19popupController__WEBPACK_IMPORTED_MODULE_3__["default"].instance;
    return _this;
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
}(_n19baseApplet__WEBPACK_IMPORTED_MODULE_2__["default"]);

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
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ "./node_modules/core-js/modules/es6.object.assign.js");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es7_object_entries__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es7.object.entries */ "./node_modules/core-js/modules/es7.object.entries.js");
/* harmony import */ var core_js_modules_es7_object_entries__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_object_entries__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es6.promise */ "./node_modules/core-js/modules/es6.promise.js");
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_8__);
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
          _this.lov[arr[3]] = arr.splice(5).filter(function (el) {
            return el !== '';
          });
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
          obj.lovs = obj.staticLOV.reduce(function (accumulator, currentValue) {
            // normalized
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
        }

        if (this.getNumRows() < index + 1) {
          return false;
        }

        if (this.getRowListRowCount() < index + 1) {
          return false;
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
    key: "getDynamicLOV",
    value: function getDynamicLOV(controlName) {
      var control = this._getControl(controlName);

      var controlInputName = control.GetInputName();
      this.lov[controlInputName] = {};
      var ps = SiebelApp.S_App.NewPropertySet();
      ps.SetProperty('SWEField', controlInputName);
      ps.SetProperty('SWEJI', false);
      this.applet.SetActiveControl(null); // to preve UpdatePick

      this.applet.InvokeMethod('GetQuickPickInfo', ps);
      return this.lov[controlInputName];
    }
  }, {
    key: "getStaticLOV",
    value: function getStaticLOV(controlName) {
      var control = this._getControl(controlName);

      var ret = [];

      if ('1' === control.IsStaticBounded()) {
        var arr = N19baseApplet.GetStaticLOV(control.GetRadioGroupPropSet().childArray);

        for (var i = 0; i < arr.length; i += 1) {
          ret.push(arr[i].DisplayName);
        }

        ret.sort();
      }

      return ret;
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
      var index = this.getSelection(); // todo: check if record exists

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
      if (this.getSelection() < 0) {
        return 0;
      }

      var bc = this.applet.GetBusComp();

      if (bc.IsInsertPending()) {
        return 1;
      }

      if (bc.IsCommitPending()) {
        return 2;
      }

      if (bc.IsInQueryState()) {
        return 3;
      }

      if (!this.canInvokeMethod('WriteRecord')) {
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

      var obj = {};

      if (_controls.state > 0) {
        var index = this.getSelection();
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
      }

      return true;
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
    key: "queryByIdSync",
    value: function queryByIdSync(rowId) {
      this.applet.InvokeMethod('NewQuery');
      this.applet.GetBusComp().SetFieldValue('Id', rowId);
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

          var _psOutputs$GetChildBy = psOutputs.GetChildByType('ResultSet'),
              childArray = _psOutputs$GetChildBy.childArray;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYW4taW5zdGFuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NsYXNzb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY29mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NvbGxlY3Rpb24tc3Ryb25nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NvbGxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jcmVhdGUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY3R4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2RlZmluZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2VudW0ta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19leHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZmFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZml4LXJlLXdrcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19mbGFncy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19mb3Itb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2hhcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19oaWRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2h0bWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faW5oZXJpdC1pZi1yZXF1aXJlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pbnZva2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pcy1hcnJheS1pdGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2lzLWFycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pcy1yZWdleHAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlci1jYWxsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXItZGV0ZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXItc3RlcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyYXRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fbGlicmFyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19tZXRhLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX21pY3JvdGFzay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZHAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWRwcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZ29wZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZ29wbi1leHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdvcG4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdwby5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3Qta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtcGllLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1zYXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LXRvLWFycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3BlcmZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fcHJvbWlzZS1yZXNvbHZlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fcmVkZWZpbmUtYWxsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3JlZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NldC1wcm90by5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zZXQtc3BlY2llcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zaGFyZWQta2V5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NoYXJlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zcGVjaWVzLWNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3N0cmluZy1hdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190YXNrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWFic29sdXRlLWluZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8taW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1sZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL191aWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdXNlci1hZ2VudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL192YWxpZGF0ZS1jb2xsZWN0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3drcy1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fd2tzLWV4dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL193a3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuZnJvbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5mdW5jdGlvbi5uYW1lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnByb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLmZsYWdzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5zcGxpdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAudG8tc3RyaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcub2JqZWN0LmVudHJpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcuc3ltYm9sLmFzeW5jLWl0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbjE5YmFzZUFwcGxldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbjE5cG9wdXBBcHBsZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL24xOXBvcHVwQ29udHJvbGxlci5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiaXQiLCJUeXBlRXJyb3IiLCJVTlNDT1BBQkxFUyIsInJlcXVpcmUiLCJBcnJheVByb3RvIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJ1bmRlZmluZWQiLCJrZXkiLCJDb25zdHJ1Y3RvciIsIm5hbWUiLCJmb3JiaWRkZW5GaWVsZCIsImlzT2JqZWN0IiwidG9JT2JqZWN0IiwidG9MZW5ndGgiLCJ0b0Fic29sdXRlSW5kZXgiLCJJU19JTkNMVURFUyIsIiR0aGlzIiwiZWwiLCJmcm9tSW5kZXgiLCJPIiwibGVuZ3RoIiwiaW5kZXgiLCJ2YWx1ZSIsImNvZiIsIlRBRyIsIkFSRyIsImFyZ3VtZW50cyIsInRyeUdldCIsImUiLCJUIiwiQiIsIk9iamVjdCIsImNhbGxlZSIsInRvU3RyaW5nIiwiY2FsbCIsInNsaWNlIiwiZFAiLCJmIiwiY3JlYXRlIiwicmVkZWZpbmVBbGwiLCJjdHgiLCJhbkluc3RhbmNlIiwiZm9yT2YiLCIkaXRlckRlZmluZSIsInN0ZXAiLCJzZXRTcGVjaWVzIiwiREVTQ1JJUFRPUlMiLCJmYXN0S2V5IiwidmFsaWRhdGUiLCJTSVpFIiwiZ2V0RW50cnkiLCJ0aGF0IiwiZW50cnkiLCJfaSIsIl9mIiwibiIsImsiLCJnZXRDb25zdHJ1Y3RvciIsIndyYXBwZXIiLCJOQU1FIiwiSVNfTUFQIiwiQURERVIiLCJDIiwiaXRlcmFibGUiLCJfdCIsIl9sIiwiY2xlYXIiLCJkYXRhIiwiciIsInAiLCJpIiwibmV4dCIsInByZXYiLCJmb3JFYWNoIiwiY2FsbGJhY2tmbiIsInYiLCJoYXMiLCJnZXQiLCJkZWYiLCJzZXRTdHJvbmciLCJpdGVyYXRlZCIsImtpbmQiLCJfayIsImdsb2JhbCIsIiRleHBvcnQiLCJyZWRlZmluZSIsIm1ldGEiLCJmYWlscyIsIiRpdGVyRGV0ZWN0Iiwic2V0VG9TdHJpbmdUYWciLCJpbmhlcml0SWZSZXF1aXJlZCIsIm1ldGhvZHMiLCJjb21tb24iLCJJU19XRUFLIiwiQmFzZSIsInByb3RvIiwiZml4TWV0aG9kIiwiS0VZIiwiZm4iLCJhIiwiYWRkIiwic2V0IiwiYiIsImVudHJpZXMiLCJORUVEIiwiaW5zdGFuY2UiLCJIQVNOVF9DSEFJTklORyIsIlRIUk9XU19PTl9QUklNSVRJVkVTIiwiQUNDRVBUX0lURVJBQkxFUyIsIml0ZXIiLCJCVUdHWV9aRVJPIiwiJGluc3RhbmNlIiwidGFyZ2V0IiwiY29uc3RydWN0b3IiLCJHIiwiVyIsIkYiLCJjb3JlIiwidmVyc2lvbiIsIl9fZSIsIiRkZWZpbmVQcm9wZXJ0eSIsImNyZWF0ZURlc2MiLCJvYmplY3QiLCJhRnVuY3Rpb24iLCJjIiwiYXBwbHkiLCJkZWZpbmVQcm9wZXJ0eSIsImRvY3VtZW50IiwiaXMiLCJjcmVhdGVFbGVtZW50Iiwic3BsaXQiLCJnZXRLZXlzIiwiZ09QUyIsInBJRSIsInJlc3VsdCIsImdldFN5bWJvbHMiLCJzeW1ib2xzIiwiaXNFbnVtIiwicHVzaCIsImhpZGUiLCJQUk9UT1RZUEUiLCJ0eXBlIiwic291cmNlIiwiSVNfRk9SQ0VEIiwiSVNfR0xPQkFMIiwiSVNfU1RBVElDIiwiUyIsIklTX1BST1RPIiwiUCIsIklTX0JJTkQiLCJleHBQcm90byIsIm93biIsIm91dCIsImV4cCIsIkZ1bmN0aW9uIiwiVSIsIlIiLCJleGVjIiwiZGVmaW5lZCIsIndrcyIsIlNZTUJPTCIsImZucyIsInN0cmZuIiwicnhmbiIsIlN0cmluZyIsIlJlZ0V4cCIsInN0cmluZyIsImFyZyIsImFuT2JqZWN0IiwiaWdub3JlQ2FzZSIsIm11bHRpbGluZSIsInVuaWNvZGUiLCJzdGlja3kiLCJpc0FycmF5SXRlciIsImdldEl0ZXJGbiIsIkJSRUFLIiwiUkVUVVJOIiwiSVRFUkFUT1IiLCJpdGVyRm4iLCJpdGVyYXRvciIsImRvbmUiLCJ3aW5kb3ciLCJNYXRoIiwic2VsZiIsIl9fZyIsImhhc093blByb3BlcnR5IiwiZG9jdW1lbnRFbGVtZW50Iiwic2V0UHJvdG90eXBlT2YiLCJhcmdzIiwidW4iLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsIkl0ZXJhdG9ycyIsImlzQXJyYXkiLCJNQVRDSCIsImlzUmVnRXhwIiwicmV0IiwiZGVzY3JpcHRvciIsIkl0ZXJhdG9yUHJvdG90eXBlIiwiTElCUkFSWSIsIiRpdGVyQ3JlYXRlIiwiZ2V0UHJvdG90eXBlT2YiLCJCVUdHWSIsImtleXMiLCJGRl9JVEVSQVRPUiIsIktFWVMiLCJWQUxVRVMiLCJyZXR1cm5UaGlzIiwiREVGQVVMVCIsIklTX1NFVCIsIkZPUkNFRCIsImdldE1ldGhvZCIsInZhbHVlcyIsIkRFRl9WQUxVRVMiLCJWQUxVRVNfQlVHIiwiJG5hdGl2ZSIsIiRkZWZhdWx0IiwiJGVudHJpZXMiLCIkYW55TmF0aXZlIiwiU0FGRV9DTE9TSU5HIiwicml0ZXIiLCJmcm9tIiwic2tpcENsb3NpbmciLCJzYWZlIiwiYXJyIiwiTUVUQSIsInNldERlc2MiLCJpZCIsImlzRXh0ZW5zaWJsZSIsIkZSRUVaRSIsInByZXZlbnRFeHRlbnNpb25zIiwic2V0TWV0YSIsInciLCJnZXRXZWFrIiwib25GcmVlemUiLCJtYWNyb3Rhc2siLCJPYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJXZWJLaXRNdXRhdGlvbk9ic2VydmVyIiwicHJvY2VzcyIsIlByb21pc2UiLCJpc05vZGUiLCJoZWFkIiwibGFzdCIsIm5vdGlmeSIsImZsdXNoIiwicGFyZW50IiwiZG9tYWluIiwiZXhpdCIsImVudGVyIiwibmV4dFRpY2siLCJuYXZpZ2F0b3IiLCJzdGFuZGFsb25lIiwidG9nZ2xlIiwibm9kZSIsImNyZWF0ZVRleHROb2RlIiwib2JzZXJ2ZSIsImNoYXJhY3RlckRhdGEiLCJyZXNvbHZlIiwicHJvbWlzZSIsInRoZW4iLCJ0YXNrIiwiUHJvbWlzZUNhcGFiaWxpdHkiLCJyZWplY3QiLCIkJHJlc29sdmUiLCIkJHJlamVjdCIsInRvT2JqZWN0IiwiSU9iamVjdCIsIiRhc3NpZ24iLCJhc3NpZ24iLCJBIiwiU3ltYm9sIiwiSyIsImpvaW4iLCJhTGVuIiwiY29uY2F0IiwiaiIsImRQcyIsImVudW1CdWdLZXlzIiwiSUVfUFJPVE8iLCJFbXB0eSIsImNyZWF0ZURpY3QiLCJpZnJhbWUiLCJsdCIsImd0IiwiaWZyYW1lRG9jdW1lbnQiLCJzdHlsZSIsImRpc3BsYXkiLCJhcHBlbmRDaGlsZCIsInNyYyIsImNvbnRlbnRXaW5kb3ciLCJvcGVuIiwid3JpdGUiLCJjbG9zZSIsIlByb3BlcnRpZXMiLCJJRThfRE9NX0RFRklORSIsInRvUHJpbWl0aXZlIiwiQXR0cmlidXRlcyIsImRlZmluZVByb3BlcnRpZXMiLCJnT1BEIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiZ09QTiIsIndpbmRvd05hbWVzIiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsImdldFdpbmRvd05hbWVzIiwiJGtleXMiLCJoaWRkZW5LZXlzIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwiT2JqZWN0UHJvdG8iLCJhcnJheUluZGV4T2YiLCJuYW1lcyIsImlzRW50cmllcyIsIm5ld1Byb21pc2VDYXBhYmlsaXR5IiwieCIsInByb21pc2VDYXBhYmlsaXR5IiwiYml0bWFwIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiU1JDIiwiVE9fU1RSSU5HIiwiJHRvU3RyaW5nIiwiVFBMIiwiaW5zcGVjdFNvdXJjZSIsInZhbCIsImlzRnVuY3Rpb24iLCJjaGVjayIsInRlc3QiLCJidWdneSIsIl9fcHJvdG9fXyIsIlNQRUNJRVMiLCJ0YWciLCJzdGF0Iiwic2hhcmVkIiwidWlkIiwiU0hBUkVEIiwic3RvcmUiLCJtb2RlIiwiY29weXJpZ2h0IiwiRCIsInRvSW50ZWdlciIsInBvcyIsInMiLCJsIiwiY2hhckNvZGVBdCIsImNoYXJBdCIsImludm9rZSIsImh0bWwiLCJjZWwiLCJzZXRUYXNrIiwic2V0SW1tZWRpYXRlIiwiY2xlYXJUYXNrIiwiY2xlYXJJbW1lZGlhdGUiLCJNZXNzYWdlQ2hhbm5lbCIsIkRpc3BhdGNoIiwiY291bnRlciIsInF1ZXVlIiwiT05SRUFEWVNUQVRFQ0hBTkdFIiwiZGVmZXIiLCJjaGFubmVsIiwicG9ydCIsInJ1biIsImxpc3RlbmVyIiwiZXZlbnQiLCJub3ciLCJwb3J0MiIsInBvcnQxIiwib25tZXNzYWdlIiwicG9zdE1lc3NhZ2UiLCJhZGRFdmVudExpc3RlbmVyIiwiaW1wb3J0U2NyaXB0cyIsInJlbW92ZUNoaWxkIiwic2V0VGltZW91dCIsIm1heCIsIm1pbiIsImNlaWwiLCJmbG9vciIsImlzTmFOIiwidmFsdWVPZiIsInB4IiwicmFuZG9tIiwidXNlckFnZW50IiwiVFlQRSIsIndrc0V4dCIsIiRTeW1ib2wiLCJVU0VfU1lNQk9MIiwiJGV4cG9ydHMiLCJjbGFzc29mIiwiZ2V0SXRlcmF0b3JNZXRob2QiLCJjcmVhdGVQcm9wZXJ0eSIsImFycmF5TGlrZSIsIm1hcGZuIiwibWFwcGluZyIsImFkZFRvVW5zY29wYWJsZXMiLCJBcmd1bWVudHMiLCJGUHJvdG8iLCJuYW1lUkUiLCJtYXRjaCIsInN0cm9uZyIsIk1BUCIsIk1hcCIsInNwZWNpZXNDb25zdHJ1Y3RvciIsIm1pY3JvdGFzayIsIm5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlIiwicGVyZm9ybSIsInByb21pc2VSZXNvbHZlIiwiUFJPTUlTRSIsInZlcnNpb25zIiwidjgiLCIkUHJvbWlzZSIsImVtcHR5IiwiSW50ZXJuYWwiLCJuZXdHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkiLCJPd25Qcm9taXNlQ2FwYWJpbGl0eSIsIldyYXBwZXIiLCJVU0VfTkFUSVZFIiwiRmFrZVByb21pc2UiLCJQcm9taXNlUmVqZWN0aW9uRXZlbnQiLCJpbmRleE9mIiwiaXNUaGVuYWJsZSIsImlzUmVqZWN0IiwiX24iLCJjaGFpbiIsIl9jIiwiX3YiLCJvayIsIl9zIiwicmVhY3Rpb24iLCJoYW5kbGVyIiwiZmFpbCIsImV4aXRlZCIsIl9oIiwib25IYW5kbGVVbmhhbmRsZWQiLCJvblVuaGFuZGxlZCIsInVuaGFuZGxlZCIsImlzVW5oYW5kbGVkIiwiY29uc29sZSIsImVtaXQiLCJvbnVuaGFuZGxlZHJlamVjdGlvbiIsInJlYXNvbiIsImVycm9yIiwiX2EiLCJvbnJlamVjdGlvbmhhbmRsZWQiLCIkcmVqZWN0IiwiX2QiLCJfdyIsIiRyZXNvbHZlIiwiZXhlY3V0b3IiLCJlcnIiLCJvbkZ1bGZpbGxlZCIsIm9uUmVqZWN0ZWQiLCJjYXBhYmlsaXR5IiwiYWxsIiwicmVtYWluaW5nIiwiJGluZGV4IiwiYWxyZWFkeUNhbGxlZCIsInJhY2UiLCJmbGFncyIsIlNQTElUIiwiJHNwbGl0IiwiX3NwbGl0IiwiJHB1c2giLCIkU1BMSVQiLCJMRU5HVEgiLCJMQVNUX0lOREVYIiwiTlBDRyIsInNlcGFyYXRvciIsImxpbWl0Iiwib3V0cHV0IiwibGFzdExhc3RJbmRleCIsInNwbGl0TGltaXQiLCJzZXBhcmF0b3JDb3B5Iiwic2VwYXJhdG9yMiIsImxhc3RJbmRleCIsImxhc3RMZW5ndGgiLCJyZXBsYWNlIiwiJGZsYWdzIiwiZGVmaW5lIiwiJGF0IiwicG9pbnQiLCIkZmFpbHMiLCJ3a3NEZWZpbmUiLCJlbnVtS2V5cyIsIl9jcmVhdGUiLCJnT1BORXh0IiwiJEdPUEQiLCIkRFAiLCIkSlNPTiIsIkpTT04iLCJfc3RyaW5naWZ5Iiwic3RyaW5naWZ5IiwiSElEREVOIiwiVE9fUFJJTUlUSVZFIiwiU3ltYm9sUmVnaXN0cnkiLCJBbGxTeW1ib2xzIiwiT1BTeW1ib2xzIiwiUU9iamVjdCIsInNldHRlciIsImZpbmRDaGlsZCIsInNldFN5bWJvbERlc2MiLCJwcm90b0Rlc2MiLCJ3cmFwIiwic3ltIiwiaXNTeW1ib2wiLCIkZGVmaW5lUHJvcGVydGllcyIsIiRjcmVhdGUiLCIkcHJvcGVydHlJc0VudW1lcmFibGUiLCJFIiwiJGdldE93blByb3BlcnR5RGVzY3JpcHRvciIsIiRnZXRPd25Qcm9wZXJ0eU5hbWVzIiwiJGdldE93blByb3BlcnR5U3ltYm9scyIsIklTX09QIiwiJHNldCIsImVzNlN5bWJvbHMiLCJ3ZWxsS25vd25TeW1ib2xzIiwia2V5Rm9yIiwidXNlU2V0dGVyIiwidXNlU2ltcGxlIiwicmVwbGFjZXIiLCIkcmVwbGFjZXIiLCIkaXRlcmF0b3JzIiwiVE9fU1RSSU5HX1RBRyIsIkFycmF5VmFsdWVzIiwiRE9NSXRlcmFibGVzIiwiQ1NTUnVsZUxpc3QiLCJDU1NTdHlsZURlY2xhcmF0aW9uIiwiQ1NTVmFsdWVMaXN0IiwiQ2xpZW50UmVjdExpc3QiLCJET01SZWN0TGlzdCIsIkRPTVN0cmluZ0xpc3QiLCJET01Ub2tlbkxpc3QiLCJEYXRhVHJhbnNmZXJJdGVtTGlzdCIsIkZpbGVMaXN0IiwiSFRNTEFsbENvbGxlY3Rpb24iLCJIVE1MQ29sbGVjdGlvbiIsIkhUTUxGb3JtRWxlbWVudCIsIkhUTUxTZWxlY3RFbGVtZW50IiwiTWVkaWFMaXN0IiwiTWltZVR5cGVBcnJheSIsIk5hbWVkTm9kZU1hcCIsIk5vZGVMaXN0IiwiUGFpbnRSZXF1ZXN0TGlzdCIsIlBsdWdpbiIsIlBsdWdpbkFycmF5IiwiU1ZHTGVuZ3RoTGlzdCIsIlNWR051bWJlckxpc3QiLCJTVkdQYXRoU2VnTGlzdCIsIlNWR1BvaW50TGlzdCIsIlNWR1N0cmluZ0xpc3QiLCJTVkdUcmFuc2Zvcm1MaXN0IiwiU291cmNlQnVmZmVyTGlzdCIsIlN0eWxlU2hlZXRMaXN0IiwiVGV4dFRyYWNrQ3VlTGlzdCIsIlRleHRUcmFja0xpc3QiLCJUb3VjaExpc3QiLCJjb2xsZWN0aW9ucyIsImV4cGxpY2l0IiwiQ29sbGVjdGlvbiIsIlNpZWJlbEFwcEZhY2FkZSIsIk4xOUhlbHBlciIsInNldHRpbmdzIiwibG9nIiwicG0iLCJHZXQiLCJuMTlwb3B1cENvbnRyb2xsZXIiLCJOMTlwb3B1cENvbnRyb2xsZXIiLCJjbG9zZVBvcHVwQXBwbGV0IiwiY2IiLCJFcnJvciIsImNhbk9wZW5Qb3B1cCIsInZpZXciLCJTZXRBY3RpdmVBcHBsZXRJbnRlcm5hbCIsImFwcGxldCIsIl9zZXRBY3RpdmVDb250cm9sIiwic2hvd1BvcHVwQXBwbGV0IiwiX3Nob3dQb3B1cEFwcGxldCIsImNvbnRyb2xOYW1lIiwiaXNMaXN0QXBwbGV0IiwiZ2V0U2VsZWN0aW9uIiwiRXhlY3V0ZU1ldGhvZCIsInRhcmdldFZpZXdOYW1lIiwidGFyZ2V0QXBwbGV0TmFtZSIsInJvd0lkIiwiZ2V0Q3VycmVudFJlY29yZCIsIklkIiwiU1dFQ21kIiwiZW5jb2RlVVJJIiwiU2llYmVsQXBwIiwiU19BcHAiLCJHb3RvVmlldyIsInBvcHVwUE0iLCJHZXRQb3B1cFBNIiwiSW5pdCIsIlNldHVwIiwiTjE5YmFzZUFwcGxldCIsImNvbnN0cyIsIlNpZWJlbEpTIiwiRGVwZW5kZW5jeSIsIkdldEFjdGl2ZVZpZXciLCJhcHBsZXROYW1lIiwiR2V0QXBwbGV0TWFwIiwiR2V0TGlzdE9mQ29sdW1ucyIsInJlcXVpcmVkIiwibG92IiwidG9rZW4iLCJzdWJzY3JpYmVycyIsImJjSWQiLCJHZXRCQ0lkIiwiQXR0YWNoTm90aWZpY2F0aW9uSGFuZGxlciIsInByb3BTZXQiLCJHZXRQcm9wZXJ0eSIsImZ1bmMiLCJhcHBsZXRJZCIsImFwcGxldElucHV0cyIsImdldEVsZW1lbnRCeUlkIiwicXVlcnlTZWxlY3RvckFsbCIsImF0dHJpYnV0ZXMiLCJub2RlVmFsdWUiLCJ2aWV3TmFtZSIsIkdldE5hbWUiLCJDQ0ZNaXNjVXRpbF9TdHJpbmdUb0FycmF5Iiwic3BsaWNlIiwiZmlsdGVyIiwiR2V0Q29udHJvbCIsIkdldENvbnRyb2xzIiwiaW5wdXROYW1lIiwiU2V0QWN0aXZlQ29udHJvbCIsIl9nZXRDb250cm9sIiwiY29udHJvbFVpVHlwZSIsIm1ldGhvZCIsImNhbkludm9rZU1ldGhvZCIsImNvbnRyb2xzIiwiYXBwbGV0Q29udHJvbHMiLCJfcmV0dXJuQ29udHJvbHMiLCJjb250cm9sIiwiR2V0VUlUeXBlIiwiX2lzU2tpcENvbnRyb2wiLCJjb250cm9sSW5wdXROYW1lIiwiR2V0SW5wdXROYW1lIiwib2JqIiwibGFiZWwiLCJHZXREaXNwbGF5TmFtZSIsInVpVHlwZSIsIl9pc1JlcXVpcmVkIiwiYm91bmRlZFBpY2siLCJJc0JvdW5kZWRQaWNrIiwic3RhdGljUGljayIsIklzU3RhdGljQm91bmRlZCIsImlzUG9zdENoYW5nZXMiLCJJc1Bvc3RDaGFuZ2VzIiwibWF4U2l6ZSIsIkdldE1heFNpemUiLCJmaWVsZE5hbWUiLCJHZXRGaWVsZE5hbWUiLCJpc0xpbmsiLCJyZWFkT25seSIsIkdldFJlbmRlcmVyIiwiR2V0Q29sdW1uSGVscGVyIiwiR2V0QWN0dWFsQ29udHJvbE5hbWUiLCJzdGF0aWNMT1YiLCJHZXRTdGF0aWNMT1YiLCJHZXRSYWRpb0dyb3VwUHJvcFNldCIsImNoaWxkQXJyYXkiLCJsb3ZzIiwicmVkdWNlIiwiYWNjdW11bGF0b3IiLCJjdXJyZW50VmFsdWUiLCJsaWMiLCJGaWVsZFZhbHVlIiwiRGlzcGxheU5hbWUiLCJfbmF2aWdhdGUiLCJnZXROdW1Sb3dzIiwiZ2V0Um93TGlzdFJvd0NvdW50IiwicG9zaXRpb25PblJvdyIsIl9uZXdSZWNvcmQiLCJhc3luYyIsImNiZXJyIiwiX3dyaXRlUmVjb3JkIiwiY2F0Y2giLCJfZ2V0VmFsdWVGb3JDb250cm9sIiwiT25Db250cm9sRXZlbnQiLCJwcyIsIk5ld1Byb3BlcnR5U2V0IiwiU2V0UHJvcGVydHkiLCJJbnZva2VNZXRob2QiLCJzb3J0IiwiX2NvbnRyb2xzIiwicmF3IiwiYmMiLCJHZXRCdXNDb21wIiwiSXNJbnNlcnRQZW5kaW5nIiwiSXNDb21taXRQZW5kaW5nIiwiSXNJblF1ZXJ5U3RhdGUiLCJfbWV0aG9kcyIsInN0YXRlIiwiY2FsY3VsYXRlQ3VycmVudFJlY29yZFN0YXRlIiwiZ2V0UmVjb3JkU2V0IiwiZ2V0UmF3UmVjb3JkU2V0IiwiX2dldENvbnRyb2xWYWx1ZSIsInJlYWRvbmx5IiwiU2V0RmllbGRWYWx1ZSIsIl9xdWVyeUJ5SWQiLCJfbmV3UXVlcnkiLCJhaSIsInNjb3BlIiwibWFzayIsInNlbGZidXN5IiwicHNPdXRwdXQiLCJwc0lucHV0IiwiX2dldENvbnRyb2xJbnB1dE5hbWVGb3JJZFF1ZXJ5IiwiQ2xvbmUiLCJDYWxsU2VydmVyQXBwbGV0IiwicGFyYW1zIiwiX3F1ZXJ5IiwiaWRzIiwiZmllbGRzIiwidXNlQWN0aXZlQk8iLCJfZ2V0TVZGIiwicHNJbnB1dHMiLCJHZXRBY3RpdmVCdXNPYmoiLCJTZXRUeXBlIiwiX2dldEZpZWxkTmFtZUZvckNvbnRyb2wiLCJBZGRDaGlsZCIsImJzIiwiR2V0U2VydmljZSIsImVycmNiIiwibWV0aG9kTmFtZSIsIklucHV0cyIsInBzT3V0cHV0cyIsImJvb2xPYmplY3QiLCJEYXR1bUJvb2xPYmplY3QiLCJHZXRDaGlsZEJ5VHlwZSIsIkdldFR5cGUiLCJtYXAiLCJyZWMiLCJwcmltYXJ5IiwicHJvcEFycmF5IiwiU2V0QXNTdHJpbmciLCJHZXRWYWx1ZSIsImFtb3VudCIsInNpemUiLCJ0ZW1wIiwibmV4dFJlY29yZFNldCIsImhhc05leHQiLCJmaWVsZFRvQ29udHJvbE1hcCIsImZpZWxkIiwiZ2V0RmllbGRUb0NvbnRyb2xNYXAiLCJhY2MiLCJzZXJ2aWNlIiwiaW5Qcm9wU2V0IiwiTjE5cG9wdXBBcHBsZXQiLCJyZXNpemUiLCJHZXRTZWxlY3RlZFJvdyIsInNpbmdsZXRvbiIsInNpbmdsZXRvbkVuZm9yY2VyIiwiZW5mb3JjZXIiLCJpc1BvcHVwSGlkZGVuIiwicmVzb2x2ZVByb21pc2UiLCJwb3B1cEFwcGxldE4xOSIsImFzc29jQXBwbGV0TjE5IiwiTjE5cHJvY2Vzc05ld1BvcHVwIiwiUHJvY2Vzc05ld1BvcHVwIiwicHJvY2Vzc05ld1BvcHVwIiwiTjE5dmlld0xvYWRlZCIsImNvbnRlbnRVcGRhdGVyIiwidmlld0xvYWRlZCIsIklzUG9wdXBPcGVuIiwiR2V0UG9wdXBBcHBsZXQiLCJHZXRQTW9kZWwiLCJhc3NvY0FwcGxldCIsIlNldFNob3dOZXdQYWdlIiwiYWN0aXZlVmlldyIsImFjdGl2ZUFwcGxldCIsIkdldEFjdGl2ZUFwcGxldCIsIlNldEFjdGl2ZUFwcGxldEJlZm9yZVBvcHVwIiwiQWRkUHJvcGVydHkiLCJ1cmwiLCJHZXRQYWdlVVJMIiwiaXNQb3B1cEFwcGxldCIsIkdldFBvcHVwQXBwbGV0TmFtZSIsImlzUGlja0FwcGxldCIsIkdldFBpY2tBcHBsZXROYW1lIiwiaXNPcGVuIiwiY3VyclBvcHVwcyIsIkdldFBvcHVwQ29udHJvbCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBQSxNQUFNLENBQUNDLE9BQVAsR0FBaUIsVUFBVUMsRUFBVixFQUFjO0FBQzdCLE1BQUksT0FBT0EsRUFBUCxJQUFhLFVBQWpCLEVBQTZCLE1BQU1DLFNBQVMsQ0FBQ0QsRUFBRSxHQUFHLHFCQUFOLENBQWY7QUFDN0IsU0FBT0EsRUFBUDtBQUNELENBSEQsQzs7Ozs7Ozs7Ozs7QUNBQTtBQUNBLElBQUlFLFdBQVcsR0FBR0MsbUJBQU8sQ0FBQyxzREFBRCxDQUFQLENBQWtCLGFBQWxCLENBQWxCOztBQUNBLElBQUlDLFVBQVUsR0FBR0MsS0FBSyxDQUFDQyxTQUF2QjtBQUNBLElBQUlGLFVBQVUsQ0FBQ0YsV0FBRCxDQUFWLElBQTJCSyxTQUEvQixFQUEwQ0osbUJBQU8sQ0FBQyx3REFBRCxDQUFQLENBQW1CQyxVQUFuQixFQUErQkYsV0FBL0IsRUFBNEMsRUFBNUM7O0FBQzFDSixNQUFNLENBQUNDLE9BQVAsR0FBaUIsVUFBVVMsR0FBVixFQUFlO0FBQzlCSixZQUFVLENBQUNGLFdBQUQsQ0FBVixDQUF3Qk0sR0FBeEIsSUFBK0IsSUFBL0I7QUFDRCxDQUZELEM7Ozs7Ozs7Ozs7O0FDSkFWLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixVQUFVQyxFQUFWLEVBQWNTLFdBQWQsRUFBMkJDLElBQTNCLEVBQWlDQyxjQUFqQyxFQUFpRDtBQUNoRSxNQUFJLEVBQUVYLEVBQUUsWUFBWVMsV0FBaEIsS0FBaUNFLGNBQWMsS0FBS0osU0FBbkIsSUFBZ0NJLGNBQWMsSUFBSVgsRUFBdkYsRUFBNEY7QUFDMUYsVUFBTUMsU0FBUyxDQUFDUyxJQUFJLEdBQUcseUJBQVIsQ0FBZjtBQUNEOztBQUFDLFNBQU9WLEVBQVA7QUFDSCxDQUpELEM7Ozs7Ozs7Ozs7O0FDQUEsSUFBSVksUUFBUSxHQUFHVCxtQkFBTyxDQUFDLGtFQUFELENBQXRCOztBQUNBTCxNQUFNLENBQUNDLE9BQVAsR0FBaUIsVUFBVUMsRUFBVixFQUFjO0FBQzdCLE1BQUksQ0FBQ1ksUUFBUSxDQUFDWixFQUFELENBQWIsRUFBbUIsTUFBTUMsU0FBUyxDQUFDRCxFQUFFLEdBQUcsb0JBQU4sQ0FBZjtBQUNuQixTQUFPQSxFQUFQO0FBQ0QsQ0FIRCxDOzs7Ozs7Ozs7OztBQ0RBO0FBQ0E7QUFDQSxJQUFJYSxTQUFTLEdBQUdWLG1CQUFPLENBQUMsb0VBQUQsQ0FBdkI7O0FBQ0EsSUFBSVcsUUFBUSxHQUFHWCxtQkFBTyxDQUFDLGtFQUFELENBQXRCOztBQUNBLElBQUlZLGVBQWUsR0FBR1osbUJBQU8sQ0FBQyxrRkFBRCxDQUE3Qjs7QUFDQUwsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLFVBQVVpQixXQUFWLEVBQXVCO0FBQ3RDLFNBQU8sVUFBVUMsS0FBVixFQUFpQkMsRUFBakIsRUFBcUJDLFNBQXJCLEVBQWdDO0FBQ3JDLFFBQUlDLENBQUMsR0FBR1AsU0FBUyxDQUFDSSxLQUFELENBQWpCO0FBQ0EsUUFBSUksTUFBTSxHQUFHUCxRQUFRLENBQUNNLENBQUMsQ0FBQ0MsTUFBSCxDQUFyQjtBQUNBLFFBQUlDLEtBQUssR0FBR1AsZUFBZSxDQUFDSSxTQUFELEVBQVlFLE1BQVosQ0FBM0I7QUFDQSxRQUFJRSxLQUFKLENBSnFDLENBS3JDO0FBQ0E7O0FBQ0EsUUFBSVAsV0FBVyxJQUFJRSxFQUFFLElBQUlBLEVBQXpCLEVBQTZCLE9BQU9HLE1BQU0sR0FBR0MsS0FBaEIsRUFBdUI7QUFDbERDLFdBQUssR0FBR0gsQ0FBQyxDQUFDRSxLQUFLLEVBQU4sQ0FBVCxDQURrRCxDQUVsRDs7QUFDQSxVQUFJQyxLQUFLLElBQUlBLEtBQWIsRUFBb0IsT0FBTyxJQUFQLENBSDhCLENBSXBEO0FBQ0MsS0FMRCxNQUtPLE9BQU1GLE1BQU0sR0FBR0MsS0FBZixFQUFzQkEsS0FBSyxFQUEzQixFQUErQixJQUFJTixXQUFXLElBQUlNLEtBQUssSUFBSUYsQ0FBNUIsRUFBK0I7QUFDbkUsVUFBSUEsQ0FBQyxDQUFDRSxLQUFELENBQUQsS0FBYUosRUFBakIsRUFBcUIsT0FBT0YsV0FBVyxJQUFJTSxLQUFmLElBQXdCLENBQS9CO0FBQ3RCO0FBQUMsV0FBTyxDQUFDTixXQUFELElBQWdCLENBQUMsQ0FBeEI7QUFDSCxHQWZEO0FBZ0JELENBakJELEM7Ozs7Ozs7Ozs7O0FDTEE7QUFDQSxJQUFJUSxHQUFHLEdBQUdyQixtQkFBTyxDQUFDLHNEQUFELENBQWpCOztBQUNBLElBQUlzQixHQUFHLEdBQUd0QixtQkFBTyxDQUFDLHNEQUFELENBQVAsQ0FBa0IsYUFBbEIsQ0FBVixDLENBQ0E7OztBQUNBLElBQUl1QixHQUFHLEdBQUdGLEdBQUcsQ0FBQyxZQUFZO0FBQUUsU0FBT0csU0FBUDtBQUFtQixDQUFqQyxFQUFELENBQUgsSUFBNEMsV0FBdEQsQyxDQUVBOztBQUNBLElBQUlDLE1BQU0sR0FBRyxVQUFVNUIsRUFBVixFQUFjUSxHQUFkLEVBQW1CO0FBQzlCLE1BQUk7QUFDRixXQUFPUixFQUFFLENBQUNRLEdBQUQsQ0FBVDtBQUNELEdBRkQsQ0FFRSxPQUFPcUIsQ0FBUCxFQUFVO0FBQUU7QUFBYTtBQUM1QixDQUpEOztBQU1BL0IsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLFVBQVVDLEVBQVYsRUFBYztBQUM3QixNQUFJb0IsQ0FBSixFQUFPVSxDQUFQLEVBQVVDLENBQVY7QUFDQSxTQUFPL0IsRUFBRSxLQUFLTyxTQUFQLEdBQW1CLFdBQW5CLEdBQWlDUCxFQUFFLEtBQUssSUFBUCxHQUFjLE1BQWQsQ0FDdEM7QUFEc0MsSUFFcEMsUUFBUThCLENBQUMsR0FBR0YsTUFBTSxDQUFDUixDQUFDLEdBQUdZLE1BQU0sQ0FBQ2hDLEVBQUQsQ0FBWCxFQUFpQnlCLEdBQWpCLENBQWxCLEtBQTRDLFFBQTVDLEdBQXVESyxDQUF2RCxDQUNGO0FBREUsSUFFQUosR0FBRyxHQUFHRixHQUFHLENBQUNKLENBQUQsQ0FBTixDQUNMO0FBREssSUFFSCxDQUFDVyxDQUFDLEdBQUdQLEdBQUcsQ0FBQ0osQ0FBRCxDQUFSLEtBQWdCLFFBQWhCLElBQTRCLE9BQU9BLENBQUMsQ0FBQ2EsTUFBVCxJQUFtQixVQUEvQyxHQUE0RCxXQUE1RCxHQUEwRUYsQ0FOOUU7QUFPRCxDQVRELEM7Ozs7Ozs7Ozs7O0FDYkEsSUFBSUcsUUFBUSxHQUFHLEdBQUdBLFFBQWxCOztBQUVBcEMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLFVBQVVDLEVBQVYsRUFBYztBQUM3QixTQUFPa0MsUUFBUSxDQUFDQyxJQUFULENBQWNuQyxFQUFkLEVBQWtCb0MsS0FBbEIsQ0FBd0IsQ0FBeEIsRUFBMkIsQ0FBQyxDQUE1QixDQUFQO0FBQ0QsQ0FGRCxDOzs7Ozs7Ozs7Ozs7QUNGYTs7QUFDYixJQUFJQyxFQUFFLEdBQUdsQyxtQkFBTyxDQUFDLGtFQUFELENBQVAsQ0FBd0JtQyxDQUFqQzs7QUFDQSxJQUFJQyxNQUFNLEdBQUdwQyxtQkFBTyxDQUFDLDBFQUFELENBQXBCOztBQUNBLElBQUlxQyxXQUFXLEdBQUdyQyxtQkFBTyxDQUFDLHdFQUFELENBQXpCOztBQUNBLElBQUlzQyxHQUFHLEdBQUd0QyxtQkFBTyxDQUFDLHNEQUFELENBQWpCOztBQUNBLElBQUl1QyxVQUFVLEdBQUd2QyxtQkFBTyxDQUFDLHNFQUFELENBQXhCOztBQUNBLElBQUl3QyxLQUFLLEdBQUd4QyxtQkFBTyxDQUFDLDREQUFELENBQW5COztBQUNBLElBQUl5QyxXQUFXLEdBQUd6QyxtQkFBTyxDQUFDLHNFQUFELENBQXpCOztBQUNBLElBQUkwQyxJQUFJLEdBQUcxQyxtQkFBTyxDQUFDLGtFQUFELENBQWxCOztBQUNBLElBQUkyQyxVQUFVLEdBQUczQyxtQkFBTyxDQUFDLHNFQUFELENBQXhCOztBQUNBLElBQUk0QyxXQUFXLEdBQUc1QyxtQkFBTyxDQUFDLHNFQUFELENBQXpCOztBQUNBLElBQUk2QyxPQUFPLEdBQUc3QyxtQkFBTyxDQUFDLHdEQUFELENBQVAsQ0FBbUI2QyxPQUFqQzs7QUFDQSxJQUFJQyxRQUFRLEdBQUc5QyxtQkFBTyxDQUFDLHNGQUFELENBQXRCOztBQUNBLElBQUkrQyxJQUFJLEdBQUdILFdBQVcsR0FBRyxJQUFILEdBQVUsTUFBaEM7O0FBRUEsSUFBSUksUUFBUSxHQUFHLFVBQVVDLElBQVYsRUFBZ0I1QyxHQUFoQixFQUFxQjtBQUNsQztBQUNBLE1BQUljLEtBQUssR0FBRzBCLE9BQU8sQ0FBQ3hDLEdBQUQsQ0FBbkI7QUFDQSxNQUFJNkMsS0FBSjtBQUNBLE1BQUkvQixLQUFLLEtBQUssR0FBZCxFQUFtQixPQUFPOEIsSUFBSSxDQUFDRSxFQUFMLENBQVFoQyxLQUFSLENBQVAsQ0FKZSxDQUtsQzs7QUFDQSxPQUFLK0IsS0FBSyxHQUFHRCxJQUFJLENBQUNHLEVBQWxCLEVBQXNCRixLQUF0QixFQUE2QkEsS0FBSyxHQUFHQSxLQUFLLENBQUNHLENBQTNDLEVBQThDO0FBQzVDLFFBQUlILEtBQUssQ0FBQ0ksQ0FBTixJQUFXakQsR0FBZixFQUFvQixPQUFPNkMsS0FBUDtBQUNyQjtBQUNGLENBVEQ7O0FBV0F2RCxNQUFNLENBQUNDLE9BQVAsR0FBaUI7QUFDZjJELGdCQUFjLEVBQUUsVUFBVUMsT0FBVixFQUFtQkMsSUFBbkIsRUFBeUJDLE1BQXpCLEVBQWlDQyxLQUFqQyxFQUF3QztBQUN0RCxRQUFJQyxDQUFDLEdBQUdKLE9BQU8sQ0FBQyxVQUFVUCxJQUFWLEVBQWdCWSxRQUFoQixFQUEwQjtBQUN4Q3RCLGdCQUFVLENBQUNVLElBQUQsRUFBT1csQ0FBUCxFQUFVSCxJQUFWLEVBQWdCLElBQWhCLENBQVY7QUFDQVIsVUFBSSxDQUFDYSxFQUFMLEdBQVVMLElBQVYsQ0FGd0MsQ0FFaEI7O0FBQ3hCUixVQUFJLENBQUNFLEVBQUwsR0FBVWYsTUFBTSxDQUFDLElBQUQsQ0FBaEIsQ0FId0MsQ0FHaEI7O0FBQ3hCYSxVQUFJLENBQUNHLEVBQUwsR0FBVWhELFNBQVYsQ0FKd0MsQ0FJaEI7O0FBQ3hCNkMsVUFBSSxDQUFDYyxFQUFMLEdBQVUzRCxTQUFWLENBTHdDLENBS2hCOztBQUN4QjZDLFVBQUksQ0FBQ0YsSUFBRCxDQUFKLEdBQWEsQ0FBYixDQU53QyxDQU1oQjs7QUFDeEIsVUFBSWMsUUFBUSxJQUFJekQsU0FBaEIsRUFBMkJvQyxLQUFLLENBQUNxQixRQUFELEVBQVdILE1BQVgsRUFBbUJULElBQUksQ0FBQ1UsS0FBRCxDQUF2QixFQUFnQ1YsSUFBaEMsQ0FBTDtBQUM1QixLQVJjLENBQWY7QUFTQVosZUFBVyxDQUFDdUIsQ0FBQyxDQUFDekQsU0FBSCxFQUFjO0FBQ3ZCO0FBQ0E7QUFDQTZELFdBQUssRUFBRSxTQUFTQSxLQUFULEdBQWlCO0FBQ3RCLGFBQUssSUFBSWYsSUFBSSxHQUFHSCxRQUFRLENBQUMsSUFBRCxFQUFPVyxJQUFQLENBQW5CLEVBQWlDUSxJQUFJLEdBQUdoQixJQUFJLENBQUNFLEVBQTdDLEVBQWlERCxLQUFLLEdBQUdELElBQUksQ0FBQ0csRUFBbkUsRUFBdUVGLEtBQXZFLEVBQThFQSxLQUFLLEdBQUdBLEtBQUssQ0FBQ0csQ0FBNUYsRUFBK0Y7QUFDN0ZILGVBQUssQ0FBQ2dCLENBQU4sR0FBVSxJQUFWO0FBQ0EsY0FBSWhCLEtBQUssQ0FBQ2lCLENBQVYsRUFBYWpCLEtBQUssQ0FBQ2lCLENBQU4sR0FBVWpCLEtBQUssQ0FBQ2lCLENBQU4sQ0FBUWQsQ0FBUixHQUFZakQsU0FBdEI7QUFDYixpQkFBTzZELElBQUksQ0FBQ2YsS0FBSyxDQUFDa0IsQ0FBUCxDQUFYO0FBQ0Q7O0FBQ0RuQixZQUFJLENBQUNHLEVBQUwsR0FBVUgsSUFBSSxDQUFDYyxFQUFMLEdBQVUzRCxTQUFwQjtBQUNBNkMsWUFBSSxDQUFDRixJQUFELENBQUosR0FBYSxDQUFiO0FBQ0QsT0FYc0I7QUFZdkI7QUFDQTtBQUNBLGdCQUFVLFVBQVUxQyxHQUFWLEVBQWU7QUFDdkIsWUFBSTRDLElBQUksR0FBR0gsUUFBUSxDQUFDLElBQUQsRUFBT1csSUFBUCxDQUFuQjtBQUNBLFlBQUlQLEtBQUssR0FBR0YsUUFBUSxDQUFDQyxJQUFELEVBQU81QyxHQUFQLENBQXBCOztBQUNBLFlBQUk2QyxLQUFKLEVBQVc7QUFDVCxjQUFJbUIsSUFBSSxHQUFHbkIsS0FBSyxDQUFDRyxDQUFqQjtBQUNBLGNBQUlpQixJQUFJLEdBQUdwQixLQUFLLENBQUNpQixDQUFqQjtBQUNBLGlCQUFPbEIsSUFBSSxDQUFDRSxFQUFMLENBQVFELEtBQUssQ0FBQ2tCLENBQWQsQ0FBUDtBQUNBbEIsZUFBSyxDQUFDZ0IsQ0FBTixHQUFVLElBQVY7QUFDQSxjQUFJSSxJQUFKLEVBQVVBLElBQUksQ0FBQ2pCLENBQUwsR0FBU2dCLElBQVQ7QUFDVixjQUFJQSxJQUFKLEVBQVVBLElBQUksQ0FBQ0YsQ0FBTCxHQUFTRyxJQUFUO0FBQ1YsY0FBSXJCLElBQUksQ0FBQ0csRUFBTCxJQUFXRixLQUFmLEVBQXNCRCxJQUFJLENBQUNHLEVBQUwsR0FBVWlCLElBQVY7QUFDdEIsY0FBSXBCLElBQUksQ0FBQ2MsRUFBTCxJQUFXYixLQUFmLEVBQXNCRCxJQUFJLENBQUNjLEVBQUwsR0FBVU8sSUFBVjtBQUN0QnJCLGNBQUksQ0FBQ0YsSUFBRCxDQUFKO0FBQ0Q7O0FBQUMsZUFBTyxDQUFDLENBQUNHLEtBQVQ7QUFDSCxPQTVCc0I7QUE2QnZCO0FBQ0E7QUFDQXFCLGFBQU8sRUFBRSxTQUFTQSxPQUFULENBQWlCQztBQUFXO0FBQTVCLFFBQXNEO0FBQzdEMUIsZ0JBQVEsQ0FBQyxJQUFELEVBQU9XLElBQVAsQ0FBUjtBQUNBLFlBQUl0QixDQUFDLEdBQUdHLEdBQUcsQ0FBQ2tDLFVBQUQsRUFBYWhELFNBQVMsQ0FBQ04sTUFBVixHQUFtQixDQUFuQixHQUF1Qk0sU0FBUyxDQUFDLENBQUQsQ0FBaEMsR0FBc0NwQixTQUFuRCxFQUE4RCxDQUE5RCxDQUFYO0FBQ0EsWUFBSThDLEtBQUo7O0FBQ0EsZUFBT0EsS0FBSyxHQUFHQSxLQUFLLEdBQUdBLEtBQUssQ0FBQ0csQ0FBVCxHQUFhLEtBQUtELEVBQXRDLEVBQTBDO0FBQ3hDakIsV0FBQyxDQUFDZSxLQUFLLENBQUN1QixDQUFQLEVBQVV2QixLQUFLLENBQUNJLENBQWhCLEVBQW1CLElBQW5CLENBQUQsQ0FEd0MsQ0FFeEM7O0FBQ0EsaUJBQU9KLEtBQUssSUFBSUEsS0FBSyxDQUFDZ0IsQ0FBdEIsRUFBeUJoQixLQUFLLEdBQUdBLEtBQUssQ0FBQ2lCLENBQWQ7QUFDMUI7QUFDRixPQXhDc0I7QUF5Q3ZCO0FBQ0E7QUFDQU8sU0FBRyxFQUFFLFNBQVNBLEdBQVQsQ0FBYXJFLEdBQWIsRUFBa0I7QUFDckIsZUFBTyxDQUFDLENBQUMyQyxRQUFRLENBQUNGLFFBQVEsQ0FBQyxJQUFELEVBQU9XLElBQVAsQ0FBVCxFQUF1QnBELEdBQXZCLENBQWpCO0FBQ0Q7QUE3Q3NCLEtBQWQsQ0FBWDtBQStDQSxRQUFJdUMsV0FBSixFQUFpQlYsRUFBRSxDQUFDMEIsQ0FBQyxDQUFDekQsU0FBSCxFQUFjLE1BQWQsRUFBc0I7QUFDdkN3RSxTQUFHLEVBQUUsWUFBWTtBQUNmLGVBQU83QixRQUFRLENBQUMsSUFBRCxFQUFPVyxJQUFQLENBQVIsQ0FBcUJWLElBQXJCLENBQVA7QUFDRDtBQUhzQyxLQUF0QixDQUFGO0FBS2pCLFdBQU9hLENBQVA7QUFDRCxHQWhFYztBQWlFZmdCLEtBQUcsRUFBRSxVQUFVM0IsSUFBVixFQUFnQjVDLEdBQWhCLEVBQXFCZSxLQUFyQixFQUE0QjtBQUMvQixRQUFJOEIsS0FBSyxHQUFHRixRQUFRLENBQUNDLElBQUQsRUFBTzVDLEdBQVAsQ0FBcEI7QUFDQSxRQUFJaUUsSUFBSixFQUFVbkQsS0FBVixDQUYrQixDQUcvQjs7QUFDQSxRQUFJK0IsS0FBSixFQUFXO0FBQ1RBLFdBQUssQ0FBQ3VCLENBQU4sR0FBVXJELEtBQVYsQ0FEUyxDQUVYO0FBQ0MsS0FIRCxNQUdPO0FBQ0w2QixVQUFJLENBQUNjLEVBQUwsR0FBVWIsS0FBSyxHQUFHO0FBQ2hCa0IsU0FBQyxFQUFFakQsS0FBSyxHQUFHMEIsT0FBTyxDQUFDeEMsR0FBRCxFQUFNLElBQU4sQ0FERjtBQUNlO0FBQy9CaUQsU0FBQyxFQUFFakQsR0FGYTtBQUVlO0FBQy9Cb0UsU0FBQyxFQUFFckQsS0FIYTtBQUdlO0FBQy9CK0MsU0FBQyxFQUFFRyxJQUFJLEdBQUdyQixJQUFJLENBQUNjLEVBSkM7QUFJZTtBQUMvQlYsU0FBQyxFQUFFakQsU0FMYTtBQUtlO0FBQy9COEQsU0FBQyxFQUFFLEtBTmEsQ0FNZTs7QUFOZixPQUFsQjtBQVFBLFVBQUksQ0FBQ2pCLElBQUksQ0FBQ0csRUFBVixFQUFjSCxJQUFJLENBQUNHLEVBQUwsR0FBVUYsS0FBVjtBQUNkLFVBQUlvQixJQUFKLEVBQVVBLElBQUksQ0FBQ2pCLENBQUwsR0FBU0gsS0FBVDtBQUNWRCxVQUFJLENBQUNGLElBQUQsQ0FBSixHQVhLLENBWUw7O0FBQ0EsVUFBSTVCLEtBQUssS0FBSyxHQUFkLEVBQW1COEIsSUFBSSxDQUFDRSxFQUFMLENBQVFoQyxLQUFSLElBQWlCK0IsS0FBakI7QUFDcEI7O0FBQUMsV0FBT0QsSUFBUDtBQUNILEdBdkZjO0FBd0ZmRCxVQUFRLEVBQUVBLFFBeEZLO0FBeUZmNkIsV0FBUyxFQUFFLFVBQVVqQixDQUFWLEVBQWFILElBQWIsRUFBbUJDLE1BQW5CLEVBQTJCO0FBQ3BDO0FBQ0E7QUFDQWpCLGVBQVcsQ0FBQ21CLENBQUQsRUFBSUgsSUFBSixFQUFVLFVBQVVxQixRQUFWLEVBQW9CQyxJQUFwQixFQUEwQjtBQUM3QyxXQUFLakIsRUFBTCxHQUFVaEIsUUFBUSxDQUFDZ0MsUUFBRCxFQUFXckIsSUFBWCxDQUFsQixDQUQ2QyxDQUNUOztBQUNwQyxXQUFLdUIsRUFBTCxHQUFVRCxJQUFWLENBRjZDLENBRVQ7O0FBQ3BDLFdBQUtoQixFQUFMLEdBQVUzRCxTQUFWLENBSDZDLENBR1Q7QUFDckMsS0FKVSxFQUlSLFlBQVk7QUFDYixVQUFJNkMsSUFBSSxHQUFHLElBQVg7QUFDQSxVQUFJOEIsSUFBSSxHQUFHOUIsSUFBSSxDQUFDK0IsRUFBaEI7QUFDQSxVQUFJOUIsS0FBSyxHQUFHRCxJQUFJLENBQUNjLEVBQWpCLENBSGEsQ0FJYjs7QUFDQSxhQUFPYixLQUFLLElBQUlBLEtBQUssQ0FBQ2dCLENBQXRCLEVBQXlCaEIsS0FBSyxHQUFHQSxLQUFLLENBQUNpQixDQUFkLENBTFosQ0FNYjs7O0FBQ0EsVUFBSSxDQUFDbEIsSUFBSSxDQUFDYSxFQUFOLElBQVksRUFBRWIsSUFBSSxDQUFDYyxFQUFMLEdBQVViLEtBQUssR0FBR0EsS0FBSyxHQUFHQSxLQUFLLENBQUNHLENBQVQsR0FBYUosSUFBSSxDQUFDYSxFQUFMLENBQVFWLEVBQTlDLENBQWhCLEVBQW1FO0FBQ2pFO0FBQ0FILFlBQUksQ0FBQ2EsRUFBTCxHQUFVMUQsU0FBVjtBQUNBLGVBQU9zQyxJQUFJLENBQUMsQ0FBRCxDQUFYO0FBQ0QsT0FYWSxDQVliOzs7QUFDQSxVQUFJcUMsSUFBSSxJQUFJLE1BQVosRUFBb0IsT0FBT3JDLElBQUksQ0FBQyxDQUFELEVBQUlRLEtBQUssQ0FBQ0ksQ0FBVixDQUFYO0FBQ3BCLFVBQUl5QixJQUFJLElBQUksUUFBWixFQUFzQixPQUFPckMsSUFBSSxDQUFDLENBQUQsRUFBSVEsS0FBSyxDQUFDdUIsQ0FBVixDQUFYO0FBQ3RCLGFBQU8vQixJQUFJLENBQUMsQ0FBRCxFQUFJLENBQUNRLEtBQUssQ0FBQ0ksQ0FBUCxFQUFVSixLQUFLLENBQUN1QixDQUFoQixDQUFKLENBQVg7QUFDRCxLQXBCVSxFQW9CUmYsTUFBTSxHQUFHLFNBQUgsR0FBZSxRQXBCYixFQW9CdUIsQ0FBQ0EsTUFwQnhCLEVBb0JnQyxJQXBCaEMsQ0FBWCxDQUhvQyxDQXlCcEM7O0FBQ0FmLGNBQVUsQ0FBQ2MsSUFBRCxDQUFWO0FBQ0Q7QUFwSGMsQ0FBakIsQzs7Ozs7Ozs7Ozs7O0FDMUJhOztBQUNiLElBQUl3QixNQUFNLEdBQUdqRixtQkFBTyxDQUFDLDREQUFELENBQXBCOztBQUNBLElBQUlrRixPQUFPLEdBQUdsRixtQkFBTyxDQUFDLDREQUFELENBQXJCOztBQUNBLElBQUltRixRQUFRLEdBQUduRixtQkFBTyxDQUFDLGdFQUFELENBQXRCOztBQUNBLElBQUlxQyxXQUFXLEdBQUdyQyxtQkFBTyxDQUFDLHdFQUFELENBQXpCOztBQUNBLElBQUlvRixJQUFJLEdBQUdwRixtQkFBTyxDQUFDLHdEQUFELENBQWxCOztBQUNBLElBQUl3QyxLQUFLLEdBQUd4QyxtQkFBTyxDQUFDLDREQUFELENBQW5COztBQUNBLElBQUl1QyxVQUFVLEdBQUd2QyxtQkFBTyxDQUFDLHNFQUFELENBQXhCOztBQUNBLElBQUlTLFFBQVEsR0FBR1QsbUJBQU8sQ0FBQyxrRUFBRCxDQUF0Qjs7QUFDQSxJQUFJcUYsS0FBSyxHQUFHckYsbUJBQU8sQ0FBQywwREFBRCxDQUFuQjs7QUFDQSxJQUFJc0YsV0FBVyxHQUFHdEYsbUJBQU8sQ0FBQyxzRUFBRCxDQUF6Qjs7QUFDQSxJQUFJdUYsY0FBYyxHQUFHdkYsbUJBQU8sQ0FBQyxrRkFBRCxDQUE1Qjs7QUFDQSxJQUFJd0YsaUJBQWlCLEdBQUd4RixtQkFBTyxDQUFDLHNGQUFELENBQS9COztBQUVBTCxNQUFNLENBQUNDLE9BQVAsR0FBaUIsVUFBVTZELElBQVYsRUFBZ0JELE9BQWhCLEVBQXlCaUMsT0FBekIsRUFBa0NDLE1BQWxDLEVBQTBDaEMsTUFBMUMsRUFBa0RpQyxPQUFsRCxFQUEyRDtBQUMxRSxNQUFJQyxJQUFJLEdBQUdYLE1BQU0sQ0FBQ3hCLElBQUQsQ0FBakI7QUFDQSxNQUFJRyxDQUFDLEdBQUdnQyxJQUFSO0FBQ0EsTUFBSWpDLEtBQUssR0FBR0QsTUFBTSxHQUFHLEtBQUgsR0FBVyxLQUE3QjtBQUNBLE1BQUltQyxLQUFLLEdBQUdqQyxDQUFDLElBQUlBLENBQUMsQ0FBQ3pELFNBQW5CO0FBQ0EsTUFBSWMsQ0FBQyxHQUFHLEVBQVI7O0FBQ0EsTUFBSTZFLFNBQVMsR0FBRyxVQUFVQyxHQUFWLEVBQWU7QUFDN0IsUUFBSUMsRUFBRSxHQUFHSCxLQUFLLENBQUNFLEdBQUQsQ0FBZDtBQUNBWixZQUFRLENBQUNVLEtBQUQsRUFBUUUsR0FBUixFQUNOQSxHQUFHLElBQUksUUFBUCxHQUFrQixVQUFVRSxDQUFWLEVBQWE7QUFDN0IsYUFBT04sT0FBTyxJQUFJLENBQUNsRixRQUFRLENBQUN3RixDQUFELENBQXBCLEdBQTBCLEtBQTFCLEdBQWtDRCxFQUFFLENBQUNoRSxJQUFILENBQVEsSUFBUixFQUFjaUUsQ0FBQyxLQUFLLENBQU4sR0FBVSxDQUFWLEdBQWNBLENBQTVCLENBQXpDO0FBQ0QsS0FGRCxHQUVJRixHQUFHLElBQUksS0FBUCxHQUFlLFNBQVNyQixHQUFULENBQWF1QixDQUFiLEVBQWdCO0FBQ2pDLGFBQU9OLE9BQU8sSUFBSSxDQUFDbEYsUUFBUSxDQUFDd0YsQ0FBRCxDQUFwQixHQUEwQixLQUExQixHQUFrQ0QsRUFBRSxDQUFDaEUsSUFBSCxDQUFRLElBQVIsRUFBY2lFLENBQUMsS0FBSyxDQUFOLEdBQVUsQ0FBVixHQUFjQSxDQUE1QixDQUF6QztBQUNELEtBRkcsR0FFQUYsR0FBRyxJQUFJLEtBQVAsR0FBZSxTQUFTcEIsR0FBVCxDQUFhc0IsQ0FBYixFQUFnQjtBQUNqQyxhQUFPTixPQUFPLElBQUksQ0FBQ2xGLFFBQVEsQ0FBQ3dGLENBQUQsQ0FBcEIsR0FBMEI3RixTQUExQixHQUFzQzRGLEVBQUUsQ0FBQ2hFLElBQUgsQ0FBUSxJQUFSLEVBQWNpRSxDQUFDLEtBQUssQ0FBTixHQUFVLENBQVYsR0FBY0EsQ0FBNUIsQ0FBN0M7QUFDRCxLQUZHLEdBRUFGLEdBQUcsSUFBSSxLQUFQLEdBQWUsU0FBU0csR0FBVCxDQUFhRCxDQUFiLEVBQWdCO0FBQUVELFFBQUUsQ0FBQ2hFLElBQUgsQ0FBUSxJQUFSLEVBQWNpRSxDQUFDLEtBQUssQ0FBTixHQUFVLENBQVYsR0FBY0EsQ0FBNUI7QUFBZ0MsYUFBTyxJQUFQO0FBQWMsS0FBL0UsR0FDQSxTQUFTRSxHQUFULENBQWFGLENBQWIsRUFBZ0JHLENBQWhCLEVBQW1CO0FBQUVKLFFBQUUsQ0FBQ2hFLElBQUgsQ0FBUSxJQUFSLEVBQWNpRSxDQUFDLEtBQUssQ0FBTixHQUFVLENBQVYsR0FBY0EsQ0FBNUIsRUFBK0JHLENBQS9CO0FBQW1DLGFBQU8sSUFBUDtBQUFjLEtBUnBFLENBQVI7QUFVRCxHQVpEOztBQWFBLE1BQUksT0FBT3hDLENBQVAsSUFBWSxVQUFaLElBQTBCLEVBQUUrQixPQUFPLElBQUlFLEtBQUssQ0FBQ3RCLE9BQU4sSUFBaUIsQ0FBQ2MsS0FBSyxDQUFDLFlBQVk7QUFDN0UsUUFBSXpCLENBQUosR0FBUXlDLE9BQVIsR0FBa0JoQyxJQUFsQjtBQUNELEdBRmlFLENBQXBDLENBQTlCLEVBRUs7QUFDSDtBQUNBVCxLQUFDLEdBQUc4QixNQUFNLENBQUNuQyxjQUFQLENBQXNCQyxPQUF0QixFQUErQkMsSUFBL0IsRUFBcUNDLE1BQXJDLEVBQTZDQyxLQUE3QyxDQUFKO0FBQ0F0QixlQUFXLENBQUN1QixDQUFDLENBQUN6RCxTQUFILEVBQWNzRixPQUFkLENBQVg7QUFDQUwsUUFBSSxDQUFDa0IsSUFBTCxHQUFZLElBQVo7QUFDRCxHQVBELE1BT087QUFDTCxRQUFJQyxRQUFRLEdBQUcsSUFBSTNDLENBQUosRUFBZixDQURLLENBRUw7O0FBQ0EsUUFBSTRDLGNBQWMsR0FBR0QsUUFBUSxDQUFDNUMsS0FBRCxDQUFSLENBQWdCZ0MsT0FBTyxHQUFHLEVBQUgsR0FBUSxDQUFDLENBQWhDLEVBQW1DLENBQW5DLEtBQXlDWSxRQUE5RCxDQUhLLENBSUw7O0FBQ0EsUUFBSUUsb0JBQW9CLEdBQUdwQixLQUFLLENBQUMsWUFBWTtBQUFFa0IsY0FBUSxDQUFDN0IsR0FBVCxDQUFhLENBQWI7QUFBa0IsS0FBakMsQ0FBaEMsQ0FMSyxDQU1MOztBQUNBLFFBQUlnQyxnQkFBZ0IsR0FBR3BCLFdBQVcsQ0FBQyxVQUFVcUIsSUFBVixFQUFnQjtBQUFFLFVBQUkvQyxDQUFKLENBQU0rQyxJQUFOO0FBQWMsS0FBakMsQ0FBbEMsQ0FQSyxDQU9pRTtBQUN0RTs7QUFDQSxRQUFJQyxVQUFVLEdBQUcsQ0FBQ2pCLE9BQUQsSUFBWU4sS0FBSyxDQUFDLFlBQVk7QUFDN0M7QUFDQSxVQUFJd0IsU0FBUyxHQUFHLElBQUlqRCxDQUFKLEVBQWhCO0FBQ0EsVUFBSXpDLEtBQUssR0FBRyxDQUFaOztBQUNBLGFBQU9BLEtBQUssRUFBWixFQUFnQjBGLFNBQVMsQ0FBQ2xELEtBQUQsQ0FBVCxDQUFpQnhDLEtBQWpCLEVBQXdCQSxLQUF4Qjs7QUFDaEIsYUFBTyxDQUFDMEYsU0FBUyxDQUFDbkMsR0FBVixDQUFjLENBQUMsQ0FBZixDQUFSO0FBQ0QsS0FOaUMsQ0FBbEM7O0FBT0EsUUFBSSxDQUFDZ0MsZ0JBQUwsRUFBdUI7QUFDckI5QyxPQUFDLEdBQUdKLE9BQU8sQ0FBQyxVQUFVc0QsTUFBVixFQUFrQmpELFFBQWxCLEVBQTRCO0FBQ3RDdEIsa0JBQVUsQ0FBQ3VFLE1BQUQsRUFBU2xELENBQVQsRUFBWUgsSUFBWixDQUFWO0FBQ0EsWUFBSVIsSUFBSSxHQUFHdUMsaUJBQWlCLENBQUMsSUFBSUksSUFBSixFQUFELEVBQWFrQixNQUFiLEVBQXFCbEQsQ0FBckIsQ0FBNUI7QUFDQSxZQUFJQyxRQUFRLElBQUl6RCxTQUFoQixFQUEyQm9DLEtBQUssQ0FBQ3FCLFFBQUQsRUFBV0gsTUFBWCxFQUFtQlQsSUFBSSxDQUFDVSxLQUFELENBQXZCLEVBQWdDVixJQUFoQyxDQUFMO0FBQzNCLGVBQU9BLElBQVA7QUFDRCxPQUxVLENBQVg7QUFNQVcsT0FBQyxDQUFDekQsU0FBRixHQUFjMEYsS0FBZDtBQUNBQSxXQUFLLENBQUNrQixXQUFOLEdBQW9CbkQsQ0FBcEI7QUFDRDs7QUFDRCxRQUFJNkMsb0JBQW9CLElBQUlHLFVBQTVCLEVBQXdDO0FBQ3RDZCxlQUFTLENBQUMsUUFBRCxDQUFUO0FBQ0FBLGVBQVMsQ0FBQyxLQUFELENBQVQ7QUFDQXBDLFlBQU0sSUFBSW9DLFNBQVMsQ0FBQyxLQUFELENBQW5CO0FBQ0Q7O0FBQ0QsUUFBSWMsVUFBVSxJQUFJSixjQUFsQixFQUFrQ1YsU0FBUyxDQUFDbkMsS0FBRCxDQUFULENBL0I3QixDQWdDTDs7QUFDQSxRQUFJZ0MsT0FBTyxJQUFJRSxLQUFLLENBQUM3QixLQUFyQixFQUE0QixPQUFPNkIsS0FBSyxDQUFDN0IsS0FBYjtBQUM3Qjs7QUFFRHVCLGdCQUFjLENBQUMzQixDQUFELEVBQUlILElBQUosQ0FBZDtBQUVBeEMsR0FBQyxDQUFDd0MsSUFBRCxDQUFELEdBQVVHLENBQVY7QUFDQXNCLFNBQU8sQ0FBQ0EsT0FBTyxDQUFDOEIsQ0FBUixHQUFZOUIsT0FBTyxDQUFDK0IsQ0FBcEIsR0FBd0IvQixPQUFPLENBQUNnQyxDQUFSLElBQWF0RCxDQUFDLElBQUlnQyxJQUFsQixDQUF6QixFQUFrRDNFLENBQWxELENBQVA7QUFFQSxNQUFJLENBQUMwRSxPQUFMLEVBQWNELE1BQU0sQ0FBQ2IsU0FBUCxDQUFpQmpCLENBQWpCLEVBQW9CSCxJQUFwQixFQUEwQkMsTUFBMUI7QUFFZCxTQUFPRSxDQUFQO0FBQ0QsQ0F0RUQsQzs7Ozs7Ozs7Ozs7QUNkQSxJQUFJdUQsSUFBSSxHQUFHeEgsTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0FBQUV3SCxTQUFPLEVBQUU7QUFBWCxDQUE1QjtBQUNBLElBQUksT0FBT0MsR0FBUCxJQUFjLFFBQWxCLEVBQTRCQSxHQUFHLEdBQUdGLElBQU4sQyxDQUFZLCtCOzs7Ozs7Ozs7Ozs7QUNEM0I7O0FBQ2IsSUFBSUcsZUFBZSxHQUFHdEgsbUJBQU8sQ0FBQyxrRUFBRCxDQUE3Qjs7QUFDQSxJQUFJdUgsVUFBVSxHQUFHdkgsbUJBQU8sQ0FBQywwRUFBRCxDQUF4Qjs7QUFFQUwsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLFVBQVU0SCxNQUFWLEVBQWtCckcsS0FBbEIsRUFBeUJDLEtBQXpCLEVBQWdDO0FBQy9DLE1BQUlELEtBQUssSUFBSXFHLE1BQWIsRUFBcUJGLGVBQWUsQ0FBQ25GLENBQWhCLENBQWtCcUYsTUFBbEIsRUFBMEJyRyxLQUExQixFQUFpQ29HLFVBQVUsQ0FBQyxDQUFELEVBQUluRyxLQUFKLENBQTNDLEVBQXJCLEtBQ0tvRyxNQUFNLENBQUNyRyxLQUFELENBQU4sR0FBZ0JDLEtBQWhCO0FBQ04sQ0FIRCxDOzs7Ozs7Ozs7OztBQ0pBO0FBQ0EsSUFBSXFHLFNBQVMsR0FBR3pILG1CQUFPLENBQUMsb0VBQUQsQ0FBdkI7O0FBQ0FMLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixVQUFVb0csRUFBVixFQUFjL0MsSUFBZCxFQUFvQi9CLE1BQXBCLEVBQTRCO0FBQzNDdUcsV0FBUyxDQUFDekIsRUFBRCxDQUFUO0FBQ0EsTUFBSS9DLElBQUksS0FBSzdDLFNBQWIsRUFBd0IsT0FBTzRGLEVBQVA7O0FBQ3hCLFVBQVE5RSxNQUFSO0FBQ0UsU0FBSyxDQUFMO0FBQVEsYUFBTyxVQUFVK0UsQ0FBVixFQUFhO0FBQzFCLGVBQU9ELEVBQUUsQ0FBQ2hFLElBQUgsQ0FBUWlCLElBQVIsRUFBY2dELENBQWQsQ0FBUDtBQUNELE9BRk87O0FBR1IsU0FBSyxDQUFMO0FBQVEsYUFBTyxVQUFVQSxDQUFWLEVBQWFHLENBQWIsRUFBZ0I7QUFDN0IsZUFBT0osRUFBRSxDQUFDaEUsSUFBSCxDQUFRaUIsSUFBUixFQUFjZ0QsQ0FBZCxFQUFpQkcsQ0FBakIsQ0FBUDtBQUNELE9BRk87O0FBR1IsU0FBSyxDQUFMO0FBQVEsYUFBTyxVQUFVSCxDQUFWLEVBQWFHLENBQWIsRUFBZ0JzQixDQUFoQixFQUFtQjtBQUNoQyxlQUFPMUIsRUFBRSxDQUFDaEUsSUFBSCxDQUFRaUIsSUFBUixFQUFjZ0QsQ0FBZCxFQUFpQkcsQ0FBakIsRUFBb0JzQixDQUFwQixDQUFQO0FBQ0QsT0FGTztBQVBWOztBQVdBLFNBQU87QUFBVTtBQUFlO0FBQzlCLFdBQU8xQixFQUFFLENBQUMyQixLQUFILENBQVMxRSxJQUFULEVBQWV6QixTQUFmLENBQVA7QUFDRCxHQUZEO0FBR0QsQ0FqQkQsQzs7Ozs7Ozs7Ozs7QUNGQTtBQUNBN0IsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLFVBQVVDLEVBQVYsRUFBYztBQUM3QixNQUFJQSxFQUFFLElBQUlPLFNBQVYsRUFBcUIsTUFBTU4sU0FBUyxDQUFDLDJCQUEyQkQsRUFBNUIsQ0FBZjtBQUNyQixTQUFPQSxFQUFQO0FBQ0QsQ0FIRCxDOzs7Ozs7Ozs7OztBQ0RBO0FBQ0FGLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixDQUFDSSxtQkFBTyxDQUFDLDBEQUFELENBQVAsQ0FBb0IsWUFBWTtBQUNoRCxTQUFPNkIsTUFBTSxDQUFDK0YsY0FBUCxDQUFzQixFQUF0QixFQUEwQixHQUExQixFQUErQjtBQUFFakQsT0FBRyxFQUFFLFlBQVk7QUFBRSxhQUFPLENBQVA7QUFBVztBQUFoQyxHQUEvQixFQUFtRXNCLENBQW5FLElBQXdFLENBQS9FO0FBQ0QsQ0FGaUIsQ0FBbEIsQzs7Ozs7Ozs7Ozs7QUNEQSxJQUFJeEYsUUFBUSxHQUFHVCxtQkFBTyxDQUFDLGtFQUFELENBQXRCOztBQUNBLElBQUk2SCxRQUFRLEdBQUc3SCxtQkFBTyxDQUFDLDREQUFELENBQVAsQ0FBcUI2SCxRQUFwQyxDLENBQ0E7OztBQUNBLElBQUlDLEVBQUUsR0FBR3JILFFBQVEsQ0FBQ29ILFFBQUQsQ0FBUixJQUFzQnBILFFBQVEsQ0FBQ29ILFFBQVEsQ0FBQ0UsYUFBVixDQUF2Qzs7QUFDQXBJLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixVQUFVQyxFQUFWLEVBQWM7QUFDN0IsU0FBT2lJLEVBQUUsR0FBR0QsUUFBUSxDQUFDRSxhQUFULENBQXVCbEksRUFBdkIsQ0FBSCxHQUFnQyxFQUF6QztBQUNELENBRkQsQzs7Ozs7Ozs7Ozs7QUNKQTtBQUNBRixNQUFNLENBQUNDLE9BQVAsR0FDRSwrRkFEZSxDQUVmb0ksS0FGZSxDQUVULEdBRlMsQ0FBakIsQzs7Ozs7Ozs7Ozs7QUNEQTtBQUNBLElBQUlDLE9BQU8sR0FBR2pJLG1CQUFPLENBQUMsc0VBQUQsQ0FBckI7O0FBQ0EsSUFBSWtJLElBQUksR0FBR2xJLG1CQUFPLENBQUMsc0VBQUQsQ0FBbEI7O0FBQ0EsSUFBSW1JLEdBQUcsR0FBR25JLG1CQUFPLENBQUMsb0VBQUQsQ0FBakI7O0FBQ0FMLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixVQUFVQyxFQUFWLEVBQWM7QUFDN0IsTUFBSXVJLE1BQU0sR0FBR0gsT0FBTyxDQUFDcEksRUFBRCxDQUFwQjtBQUNBLE1BQUl3SSxVQUFVLEdBQUdILElBQUksQ0FBQy9GLENBQXRCOztBQUNBLE1BQUlrRyxVQUFKLEVBQWdCO0FBQ2QsUUFBSUMsT0FBTyxHQUFHRCxVQUFVLENBQUN4SSxFQUFELENBQXhCO0FBQ0EsUUFBSTBJLE1BQU0sR0FBR0osR0FBRyxDQUFDaEcsQ0FBakI7QUFDQSxRQUFJaUMsQ0FBQyxHQUFHLENBQVI7QUFDQSxRQUFJL0QsR0FBSjs7QUFDQSxXQUFPaUksT0FBTyxDQUFDcEgsTUFBUixHQUFpQmtELENBQXhCLEVBQTJCLElBQUltRSxNQUFNLENBQUN2RyxJQUFQLENBQVluQyxFQUFaLEVBQWdCUSxHQUFHLEdBQUdpSSxPQUFPLENBQUNsRSxDQUFDLEVBQUYsQ0FBN0IsQ0FBSixFQUF5Q2dFLE1BQU0sQ0FBQ0ksSUFBUCxDQUFZbkksR0FBWjtBQUNyRTs7QUFBQyxTQUFPK0gsTUFBUDtBQUNILENBVkQsQzs7Ozs7Ozs7Ozs7QUNKQSxJQUFJbkQsTUFBTSxHQUFHakYsbUJBQU8sQ0FBQyw0REFBRCxDQUFwQjs7QUFDQSxJQUFJbUgsSUFBSSxHQUFHbkgsbUJBQU8sQ0FBQyx3REFBRCxDQUFsQjs7QUFDQSxJQUFJeUksSUFBSSxHQUFHekksbUJBQU8sQ0FBQyx3REFBRCxDQUFsQjs7QUFDQSxJQUFJbUYsUUFBUSxHQUFHbkYsbUJBQU8sQ0FBQyxnRUFBRCxDQUF0Qjs7QUFDQSxJQUFJc0MsR0FBRyxHQUFHdEMsbUJBQU8sQ0FBQyxzREFBRCxDQUFqQjs7QUFDQSxJQUFJMEksU0FBUyxHQUFHLFdBQWhCOztBQUVBLElBQUl4RCxPQUFPLEdBQUcsVUFBVXlELElBQVYsRUFBZ0JwSSxJQUFoQixFQUFzQnFJLE1BQXRCLEVBQThCO0FBQzFDLE1BQUlDLFNBQVMsR0FBR0YsSUFBSSxHQUFHekQsT0FBTyxDQUFDZ0MsQ0FBL0I7QUFDQSxNQUFJNEIsU0FBUyxHQUFHSCxJQUFJLEdBQUd6RCxPQUFPLENBQUM4QixDQUEvQjtBQUNBLE1BQUkrQixTQUFTLEdBQUdKLElBQUksR0FBR3pELE9BQU8sQ0FBQzhELENBQS9CO0FBQ0EsTUFBSUMsUUFBUSxHQUFHTixJQUFJLEdBQUd6RCxPQUFPLENBQUNnRSxDQUE5QjtBQUNBLE1BQUlDLE9BQU8sR0FBR1IsSUFBSSxHQUFHekQsT0FBTyxDQUFDdEQsQ0FBN0I7QUFDQSxNQUFJa0YsTUFBTSxHQUFHZ0MsU0FBUyxHQUFHN0QsTUFBSCxHQUFZOEQsU0FBUyxHQUFHOUQsTUFBTSxDQUFDMUUsSUFBRCxDQUFOLEtBQWlCMEUsTUFBTSxDQUFDMUUsSUFBRCxDQUFOLEdBQWUsRUFBaEMsQ0FBSCxHQUF5QyxDQUFDMEUsTUFBTSxDQUFDMUUsSUFBRCxDQUFOLElBQWdCLEVBQWpCLEVBQXFCbUksU0FBckIsQ0FBcEY7QUFDQSxNQUFJOUksT0FBTyxHQUFHa0osU0FBUyxHQUFHM0IsSUFBSCxHQUFVQSxJQUFJLENBQUM1RyxJQUFELENBQUosS0FBZTRHLElBQUksQ0FBQzVHLElBQUQsQ0FBSixHQUFhLEVBQTVCLENBQWpDO0FBQ0EsTUFBSTZJLFFBQVEsR0FBR3hKLE9BQU8sQ0FBQzhJLFNBQUQsQ0FBUCxLQUF1QjlJLE9BQU8sQ0FBQzhJLFNBQUQsQ0FBUCxHQUFxQixFQUE1QyxDQUFmO0FBQ0EsTUFBSXJJLEdBQUosRUFBU2dKLEdBQVQsRUFBY0MsR0FBZCxFQUFtQkMsR0FBbkI7QUFDQSxNQUFJVCxTQUFKLEVBQWVGLE1BQU0sR0FBR3JJLElBQVQ7O0FBQ2YsT0FBS0YsR0FBTCxJQUFZdUksTUFBWixFQUFvQjtBQUNsQjtBQUNBUyxPQUFHLEdBQUcsQ0FBQ1IsU0FBRCxJQUFjL0IsTUFBZCxJQUF3QkEsTUFBTSxDQUFDekcsR0FBRCxDQUFOLEtBQWdCRCxTQUE5QyxDQUZrQixDQUdsQjs7QUFDQWtKLE9BQUcsR0FBRyxDQUFDRCxHQUFHLEdBQUd2QyxNQUFILEdBQVk4QixNQUFoQixFQUF3QnZJLEdBQXhCLENBQU4sQ0FKa0IsQ0FLbEI7O0FBQ0FrSixPQUFHLEdBQUdKLE9BQU8sSUFBSUUsR0FBWCxHQUFpQi9HLEdBQUcsQ0FBQ2dILEdBQUQsRUFBTXJFLE1BQU4sQ0FBcEIsR0FBb0NnRSxRQUFRLElBQUksT0FBT0ssR0FBUCxJQUFjLFVBQTFCLEdBQXVDaEgsR0FBRyxDQUFDa0gsUUFBUSxDQUFDeEgsSUFBVixFQUFnQnNILEdBQWhCLENBQTFDLEdBQWlFQSxHQUEzRyxDQU5rQixDQU9sQjs7QUFDQSxRQUFJeEMsTUFBSixFQUFZM0IsUUFBUSxDQUFDMkIsTUFBRCxFQUFTekcsR0FBVCxFQUFjaUosR0FBZCxFQUFtQlgsSUFBSSxHQUFHekQsT0FBTyxDQUFDdUUsQ0FBbEMsQ0FBUixDQVJNLENBU2xCOztBQUNBLFFBQUk3SixPQUFPLENBQUNTLEdBQUQsQ0FBUCxJQUFnQmlKLEdBQXBCLEVBQXlCYixJQUFJLENBQUM3SSxPQUFELEVBQVVTLEdBQVYsRUFBZWtKLEdBQWYsQ0FBSjtBQUN6QixRQUFJTixRQUFRLElBQUlHLFFBQVEsQ0FBQy9JLEdBQUQsQ0FBUixJQUFpQmlKLEdBQWpDLEVBQXNDRixRQUFRLENBQUMvSSxHQUFELENBQVIsR0FBZ0JpSixHQUFoQjtBQUN2QztBQUNGLENBeEJEOztBQXlCQXJFLE1BQU0sQ0FBQ2tDLElBQVAsR0FBY0EsSUFBZCxDLENBQ0E7O0FBQ0FqQyxPQUFPLENBQUNnQyxDQUFSLEdBQVksQ0FBWixDLENBQWlCOztBQUNqQmhDLE9BQU8sQ0FBQzhCLENBQVIsR0FBWSxDQUFaLEMsQ0FBaUI7O0FBQ2pCOUIsT0FBTyxDQUFDOEQsQ0FBUixHQUFZLENBQVosQyxDQUFpQjs7QUFDakI5RCxPQUFPLENBQUNnRSxDQUFSLEdBQVksQ0FBWixDLENBQWlCOztBQUNqQmhFLE9BQU8sQ0FBQ3RELENBQVIsR0FBWSxFQUFaLEMsQ0FBaUI7O0FBQ2pCc0QsT0FBTyxDQUFDK0IsQ0FBUixHQUFZLEVBQVosQyxDQUFpQjs7QUFDakIvQixPQUFPLENBQUN1RSxDQUFSLEdBQVksRUFBWixDLENBQWlCOztBQUNqQnZFLE9BQU8sQ0FBQ3dFLENBQVIsR0FBWSxHQUFaLEMsQ0FBaUI7O0FBQ2pCL0osTUFBTSxDQUFDQyxPQUFQLEdBQWlCc0YsT0FBakIsQzs7Ozs7Ozs7Ozs7QUMxQ0F2RixNQUFNLENBQUNDLE9BQVAsR0FBaUIsVUFBVStKLElBQVYsRUFBZ0I7QUFDL0IsTUFBSTtBQUNGLFdBQU8sQ0FBQyxDQUFDQSxJQUFJLEVBQWI7QUFDRCxHQUZELENBRUUsT0FBT2pJLENBQVAsRUFBVTtBQUNWLFdBQU8sSUFBUDtBQUNEO0FBQ0YsQ0FORCxDOzs7Ozs7Ozs7Ozs7QUNBYTs7QUFDYixJQUFJK0csSUFBSSxHQUFHekksbUJBQU8sQ0FBQyx3REFBRCxDQUFsQjs7QUFDQSxJQUFJbUYsUUFBUSxHQUFHbkYsbUJBQU8sQ0FBQyxnRUFBRCxDQUF0Qjs7QUFDQSxJQUFJcUYsS0FBSyxHQUFHckYsbUJBQU8sQ0FBQywwREFBRCxDQUFuQjs7QUFDQSxJQUFJNEosT0FBTyxHQUFHNUosbUJBQU8sQ0FBQyw4REFBRCxDQUFyQjs7QUFDQSxJQUFJNkosR0FBRyxHQUFHN0osbUJBQU8sQ0FBQyxzREFBRCxDQUFqQjs7QUFFQUwsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLFVBQVVtRyxHQUFWLEVBQWU3RSxNQUFmLEVBQXVCeUksSUFBdkIsRUFBNkI7QUFDNUMsTUFBSUcsTUFBTSxHQUFHRCxHQUFHLENBQUM5RCxHQUFELENBQWhCO0FBQ0EsTUFBSWdFLEdBQUcsR0FBR0osSUFBSSxDQUFDQyxPQUFELEVBQVVFLE1BQVYsRUFBa0IsR0FBRy9ELEdBQUgsQ0FBbEIsQ0FBZDtBQUNBLE1BQUlpRSxLQUFLLEdBQUdELEdBQUcsQ0FBQyxDQUFELENBQWY7QUFDQSxNQUFJRSxJQUFJLEdBQUdGLEdBQUcsQ0FBQyxDQUFELENBQWQ7O0FBQ0EsTUFBSTFFLEtBQUssQ0FBQyxZQUFZO0FBQ3BCLFFBQUlwRSxDQUFDLEdBQUcsRUFBUjs7QUFDQUEsS0FBQyxDQUFDNkksTUFBRCxDQUFELEdBQVksWUFBWTtBQUFFLGFBQU8sQ0FBUDtBQUFXLEtBQXJDOztBQUNBLFdBQU8sR0FBRy9ELEdBQUgsRUFBUTlFLENBQVIsS0FBYyxDQUFyQjtBQUNELEdBSlEsQ0FBVCxFQUlJO0FBQ0ZrRSxZQUFRLENBQUMrRSxNQUFNLENBQUMvSixTQUFSLEVBQW1CNEYsR0FBbkIsRUFBd0JpRSxLQUF4QixDQUFSO0FBQ0F2QixRQUFJLENBQUMwQixNQUFNLENBQUNoSyxTQUFSLEVBQW1CMkosTUFBbkIsRUFBMkI1SSxNQUFNLElBQUksQ0FBVixDQUM3QjtBQUNBO0FBRjZCLE1BRzNCLFVBQVVrSixNQUFWLEVBQWtCQyxHQUFsQixFQUF1QjtBQUFFLGFBQU9KLElBQUksQ0FBQ2pJLElBQUwsQ0FBVW9JLE1BQVYsRUFBa0IsSUFBbEIsRUFBd0JDLEdBQXhCLENBQVA7QUFBc0MsS0FIcEMsQ0FJN0I7QUFDQTtBQUw2QixNQU0zQixVQUFVRCxNQUFWLEVBQWtCO0FBQUUsYUFBT0gsSUFBSSxDQUFDakksSUFBTCxDQUFVb0ksTUFBVixFQUFrQixJQUFsQixDQUFQO0FBQWlDLEtBTnJELENBQUo7QUFRRDtBQUNGLENBcEJELEM7Ozs7Ozs7Ozs7OztDQ05BOztBQUNBLElBQUlFLFFBQVEsR0FBR3RLLG1CQUFPLENBQUMsa0VBQUQsQ0FBdEI7O0FBQ0FMLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixZQUFZO0FBQzNCLE1BQUlxRCxJQUFJLEdBQUdxSCxRQUFRLENBQUMsSUFBRCxDQUFuQjtBQUNBLE1BQUlsQyxNQUFNLEdBQUcsRUFBYjtBQUNBLE1BQUluRixJQUFJLENBQUNnQyxNQUFULEVBQWlCbUQsTUFBTSxJQUFJLEdBQVY7QUFDakIsTUFBSW5GLElBQUksQ0FBQ3NILFVBQVQsRUFBcUJuQyxNQUFNLElBQUksR0FBVjtBQUNyQixNQUFJbkYsSUFBSSxDQUFDdUgsU0FBVCxFQUFvQnBDLE1BQU0sSUFBSSxHQUFWO0FBQ3BCLE1BQUluRixJQUFJLENBQUN3SCxPQUFULEVBQWtCckMsTUFBTSxJQUFJLEdBQVY7QUFDbEIsTUFBSW5GLElBQUksQ0FBQ3lILE1BQVQsRUFBaUJ0QyxNQUFNLElBQUksR0FBVjtBQUNqQixTQUFPQSxNQUFQO0FBQ0QsQ0FURCxDOzs7Ozs7Ozs7OztBQ0hBLElBQUk5RixHQUFHLEdBQUd0QyxtQkFBTyxDQUFDLHNEQUFELENBQWpCOztBQUNBLElBQUlnQyxJQUFJLEdBQUdoQyxtQkFBTyxDQUFDLGtFQUFELENBQWxCOztBQUNBLElBQUkySyxXQUFXLEdBQUczSyxtQkFBTyxDQUFDLDBFQUFELENBQXpCOztBQUNBLElBQUlzSyxRQUFRLEdBQUd0SyxtQkFBTyxDQUFDLGtFQUFELENBQXRCOztBQUNBLElBQUlXLFFBQVEsR0FBR1gsbUJBQU8sQ0FBQyxrRUFBRCxDQUF0Qjs7QUFDQSxJQUFJNEssU0FBUyxHQUFHNUssbUJBQU8sQ0FBQyw4RkFBRCxDQUF2Qjs7QUFDQSxJQUFJNkssS0FBSyxHQUFHLEVBQVo7QUFDQSxJQUFJQyxNQUFNLEdBQUcsRUFBYjs7QUFDQSxJQUFJbEwsT0FBTyxHQUFHRCxNQUFNLENBQUNDLE9BQVAsR0FBaUIsVUFBVWlFLFFBQVYsRUFBb0J3QyxPQUFwQixFQUE2QkwsRUFBN0IsRUFBaUMvQyxJQUFqQyxFQUF1QzhILFFBQXZDLEVBQWlEO0FBQzlFLE1BQUlDLE1BQU0sR0FBR0QsUUFBUSxHQUFHLFlBQVk7QUFBRSxXQUFPbEgsUUFBUDtBQUFrQixHQUFuQyxHQUFzQytHLFNBQVMsQ0FBQy9HLFFBQUQsQ0FBcEU7QUFDQSxNQUFJMUIsQ0FBQyxHQUFHRyxHQUFHLENBQUMwRCxFQUFELEVBQUsvQyxJQUFMLEVBQVdvRCxPQUFPLEdBQUcsQ0FBSCxHQUFPLENBQXpCLENBQVg7QUFDQSxNQUFJbEYsS0FBSyxHQUFHLENBQVo7QUFDQSxNQUFJRCxNQUFKLEVBQVl3QixJQUFaLEVBQWtCdUksUUFBbEIsRUFBNEI3QyxNQUE1QjtBQUNBLE1BQUksT0FBTzRDLE1BQVAsSUFBaUIsVUFBckIsRUFBaUMsTUFBTWxMLFNBQVMsQ0FBQytELFFBQVEsR0FBRyxtQkFBWixDQUFmLENBTDZDLENBTTlFOztBQUNBLE1BQUk4RyxXQUFXLENBQUNLLE1BQUQsQ0FBZixFQUF5QixLQUFLOUosTUFBTSxHQUFHUCxRQUFRLENBQUNrRCxRQUFRLENBQUMzQyxNQUFWLENBQXRCLEVBQXlDQSxNQUFNLEdBQUdDLEtBQWxELEVBQXlEQSxLQUFLLEVBQTlELEVBQWtFO0FBQ3pGaUgsVUFBTSxHQUFHL0IsT0FBTyxHQUFHbEUsQ0FBQyxDQUFDbUksUUFBUSxDQUFDNUgsSUFBSSxHQUFHbUIsUUFBUSxDQUFDMUMsS0FBRCxDQUFoQixDQUFSLENBQWlDLENBQWpDLENBQUQsRUFBc0N1QixJQUFJLENBQUMsQ0FBRCxDQUExQyxDQUFKLEdBQXFEUCxDQUFDLENBQUMwQixRQUFRLENBQUMxQyxLQUFELENBQVQsQ0FBdEU7QUFDQSxRQUFJaUgsTUFBTSxLQUFLeUMsS0FBWCxJQUFvQnpDLE1BQU0sS0FBSzBDLE1BQW5DLEVBQTJDLE9BQU8xQyxNQUFQO0FBQzVDLEdBSEQsTUFHTyxLQUFLNkMsUUFBUSxHQUFHRCxNQUFNLENBQUNoSixJQUFQLENBQVk2QixRQUFaLENBQWhCLEVBQXVDLENBQUMsQ0FBQ25CLElBQUksR0FBR3VJLFFBQVEsQ0FBQzVHLElBQVQsRUFBUixFQUF5QjZHLElBQWpFLEdBQXdFO0FBQzdFOUMsVUFBTSxHQUFHcEcsSUFBSSxDQUFDaUosUUFBRCxFQUFXOUksQ0FBWCxFQUFjTyxJQUFJLENBQUN0QixLQUFuQixFQUEwQmlGLE9BQTFCLENBQWI7QUFDQSxRQUFJK0IsTUFBTSxLQUFLeUMsS0FBWCxJQUFvQnpDLE1BQU0sS0FBSzBDLE1BQW5DLEVBQTJDLE9BQU8xQyxNQUFQO0FBQzVDO0FBQ0YsQ0FkRDs7QUFlQXhJLE9BQU8sQ0FBQ2lMLEtBQVIsR0FBZ0JBLEtBQWhCO0FBQ0FqTCxPQUFPLENBQUNrTCxNQUFSLEdBQWlCQSxNQUFqQixDOzs7Ozs7Ozs7OztBQ3hCQTtBQUNBLElBQUk3RixNQUFNLEdBQUd0RixNQUFNLENBQUNDLE9BQVAsR0FBaUIsT0FBT3VMLE1BQVAsSUFBaUIsV0FBakIsSUFBZ0NBLE1BQU0sQ0FBQ0MsSUFBUCxJQUFlQSxJQUEvQyxHQUMxQkQsTUFEMEIsR0FDakIsT0FBT0UsSUFBUCxJQUFlLFdBQWYsSUFBOEJBLElBQUksQ0FBQ0QsSUFBTCxJQUFhQSxJQUEzQyxHQUFrREMsSUFBbEQsQ0FDWDtBQURXLEVBRVQ3QixRQUFRLENBQUMsYUFBRCxDQUFSLEVBSEo7QUFJQSxJQUFJLE9BQU84QixHQUFQLElBQWMsUUFBbEIsRUFBNEJBLEdBQUcsR0FBR3JHLE1BQU4sQyxDQUFjLCtCOzs7Ozs7Ozs7OztBQ0wxQyxJQUFJc0csY0FBYyxHQUFHLEdBQUdBLGNBQXhCOztBQUNBNUwsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLFVBQVVDLEVBQVYsRUFBY1EsR0FBZCxFQUFtQjtBQUNsQyxTQUFPa0wsY0FBYyxDQUFDdkosSUFBZixDQUFvQm5DLEVBQXBCLEVBQXdCUSxHQUF4QixDQUFQO0FBQ0QsQ0FGRCxDOzs7Ozs7Ozs7OztBQ0RBLElBQUk2QixFQUFFLEdBQUdsQyxtQkFBTyxDQUFDLGtFQUFELENBQWhCOztBQUNBLElBQUl1SCxVQUFVLEdBQUd2SCxtQkFBTyxDQUFDLDBFQUFELENBQXhCOztBQUNBTCxNQUFNLENBQUNDLE9BQVAsR0FBaUJJLG1CQUFPLENBQUMsc0VBQUQsQ0FBUCxHQUE0QixVQUFVd0gsTUFBVixFQUFrQm5ILEdBQWxCLEVBQXVCZSxLQUF2QixFQUE4QjtBQUN6RSxTQUFPYyxFQUFFLENBQUNDLENBQUgsQ0FBS3FGLE1BQUwsRUFBYW5ILEdBQWIsRUFBa0JrSCxVQUFVLENBQUMsQ0FBRCxFQUFJbkcsS0FBSixDQUE1QixDQUFQO0FBQ0QsQ0FGZ0IsR0FFYixVQUFVb0csTUFBVixFQUFrQm5ILEdBQWxCLEVBQXVCZSxLQUF2QixFQUE4QjtBQUNoQ29HLFFBQU0sQ0FBQ25ILEdBQUQsQ0FBTixHQUFjZSxLQUFkO0FBQ0EsU0FBT29HLE1BQVA7QUFDRCxDQUxELEM7Ozs7Ozs7Ozs7O0FDRkEsSUFBSUssUUFBUSxHQUFHN0gsbUJBQU8sQ0FBQyw0REFBRCxDQUFQLENBQXFCNkgsUUFBcEM7O0FBQ0FsSSxNQUFNLENBQUNDLE9BQVAsR0FBaUJpSSxRQUFRLElBQUlBLFFBQVEsQ0FBQzJELGVBQXRDLEM7Ozs7Ozs7Ozs7O0FDREE3TCxNQUFNLENBQUNDLE9BQVAsR0FBaUIsQ0FBQ0ksbUJBQU8sQ0FBQyxzRUFBRCxDQUFSLElBQThCLENBQUNBLG1CQUFPLENBQUMsMERBQUQsQ0FBUCxDQUFvQixZQUFZO0FBQzlFLFNBQU82QixNQUFNLENBQUMrRixjQUFQLENBQXNCNUgsbUJBQU8sQ0FBQyxvRUFBRCxDQUFQLENBQXlCLEtBQXpCLENBQXRCLEVBQXVELEdBQXZELEVBQTREO0FBQUUyRSxPQUFHLEVBQUUsWUFBWTtBQUFFLGFBQU8sQ0FBUDtBQUFXO0FBQWhDLEdBQTVELEVBQWdHc0IsQ0FBaEcsSUFBcUcsQ0FBNUc7QUFDRCxDQUYrQyxDQUFoRCxDOzs7Ozs7Ozs7OztBQ0FBLElBQUl4RixRQUFRLEdBQUdULG1CQUFPLENBQUMsa0VBQUQsQ0FBdEI7O0FBQ0EsSUFBSXlMLGNBQWMsR0FBR3pMLG1CQUFPLENBQUMsa0VBQUQsQ0FBUCxDQUF3Qm1HLEdBQTdDOztBQUNBeEcsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLFVBQVVxRCxJQUFWLEVBQWdCNkQsTUFBaEIsRUFBd0JsRCxDQUF4QixFQUEyQjtBQUMxQyxNQUFJb0YsQ0FBQyxHQUFHbEMsTUFBTSxDQUFDQyxXQUFmO0FBQ0EsTUFBSW1DLENBQUo7O0FBQ0EsTUFBSUYsQ0FBQyxLQUFLcEYsQ0FBTixJQUFXLE9BQU9vRixDQUFQLElBQVksVUFBdkIsSUFBcUMsQ0FBQ0UsQ0FBQyxHQUFHRixDQUFDLENBQUM3SSxTQUFQLE1BQXNCeUQsQ0FBQyxDQUFDekQsU0FBN0QsSUFBMEVNLFFBQVEsQ0FBQ3lJLENBQUQsQ0FBbEYsSUFBeUZ1QyxjQUE3RixFQUE2RztBQUMzR0Esa0JBQWMsQ0FBQ3hJLElBQUQsRUFBT2lHLENBQVAsQ0FBZDtBQUNEOztBQUFDLFNBQU9qRyxJQUFQO0FBQ0gsQ0FORCxDOzs7Ozs7Ozs7OztBQ0ZBO0FBQ0F0RCxNQUFNLENBQUNDLE9BQVAsR0FBaUIsVUFBVW9HLEVBQVYsRUFBYzBGLElBQWQsRUFBb0J6SSxJQUFwQixFQUEwQjtBQUN6QyxNQUFJMEksRUFBRSxHQUFHMUksSUFBSSxLQUFLN0MsU0FBbEI7O0FBQ0EsVUFBUXNMLElBQUksQ0FBQ3hLLE1BQWI7QUFDRSxTQUFLLENBQUw7QUFBUSxhQUFPeUssRUFBRSxHQUFHM0YsRUFBRSxFQUFMLEdBQ0dBLEVBQUUsQ0FBQ2hFLElBQUgsQ0FBUWlCLElBQVIsQ0FEWjs7QUFFUixTQUFLLENBQUw7QUFBUSxhQUFPMEksRUFBRSxHQUFHM0YsRUFBRSxDQUFDMEYsSUFBSSxDQUFDLENBQUQsQ0FBTCxDQUFMLEdBQ0cxRixFQUFFLENBQUNoRSxJQUFILENBQVFpQixJQUFSLEVBQWN5SSxJQUFJLENBQUMsQ0FBRCxDQUFsQixDQURaOztBQUVSLFNBQUssQ0FBTDtBQUFRLGFBQU9DLEVBQUUsR0FBRzNGLEVBQUUsQ0FBQzBGLElBQUksQ0FBQyxDQUFELENBQUwsRUFBVUEsSUFBSSxDQUFDLENBQUQsQ0FBZCxDQUFMLEdBQ0cxRixFQUFFLENBQUNoRSxJQUFILENBQVFpQixJQUFSLEVBQWN5SSxJQUFJLENBQUMsQ0FBRCxDQUFsQixFQUF1QkEsSUFBSSxDQUFDLENBQUQsQ0FBM0IsQ0FEWjs7QUFFUixTQUFLLENBQUw7QUFBUSxhQUFPQyxFQUFFLEdBQUczRixFQUFFLENBQUMwRixJQUFJLENBQUMsQ0FBRCxDQUFMLEVBQVVBLElBQUksQ0FBQyxDQUFELENBQWQsRUFBbUJBLElBQUksQ0FBQyxDQUFELENBQXZCLENBQUwsR0FDRzFGLEVBQUUsQ0FBQ2hFLElBQUgsQ0FBUWlCLElBQVIsRUFBY3lJLElBQUksQ0FBQyxDQUFELENBQWxCLEVBQXVCQSxJQUFJLENBQUMsQ0FBRCxDQUEzQixFQUFnQ0EsSUFBSSxDQUFDLENBQUQsQ0FBcEMsQ0FEWjs7QUFFUixTQUFLLENBQUw7QUFBUSxhQUFPQyxFQUFFLEdBQUczRixFQUFFLENBQUMwRixJQUFJLENBQUMsQ0FBRCxDQUFMLEVBQVVBLElBQUksQ0FBQyxDQUFELENBQWQsRUFBbUJBLElBQUksQ0FBQyxDQUFELENBQXZCLEVBQTRCQSxJQUFJLENBQUMsQ0FBRCxDQUFoQyxDQUFMLEdBQ0cxRixFQUFFLENBQUNoRSxJQUFILENBQVFpQixJQUFSLEVBQWN5SSxJQUFJLENBQUMsQ0FBRCxDQUFsQixFQUF1QkEsSUFBSSxDQUFDLENBQUQsQ0FBM0IsRUFBZ0NBLElBQUksQ0FBQyxDQUFELENBQXBDLEVBQXlDQSxJQUFJLENBQUMsQ0FBRCxDQUE3QyxDQURaO0FBVFY7O0FBV0UsU0FBTzFGLEVBQUUsQ0FBQzJCLEtBQUgsQ0FBUzFFLElBQVQsRUFBZXlJLElBQWYsQ0FBUDtBQUNILENBZEQsQzs7Ozs7Ozs7Ozs7QUNEQTtBQUNBLElBQUlySyxHQUFHLEdBQUdyQixtQkFBTyxDQUFDLHNEQUFELENBQWpCLEMsQ0FDQTs7O0FBQ0FMLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQmlDLE1BQU0sQ0FBQyxHQUFELENBQU4sQ0FBWStKLG9CQUFaLENBQWlDLENBQWpDLElBQXNDL0osTUFBdEMsR0FBK0MsVUFBVWhDLEVBQVYsRUFBYztBQUM1RSxTQUFPd0IsR0FBRyxDQUFDeEIsRUFBRCxDQUFILElBQVcsUUFBWCxHQUFzQkEsRUFBRSxDQUFDbUksS0FBSCxDQUFTLEVBQVQsQ0FBdEIsR0FBcUNuRyxNQUFNLENBQUNoQyxFQUFELENBQWxEO0FBQ0QsQ0FGRCxDOzs7Ozs7Ozs7OztBQ0hBO0FBQ0EsSUFBSWdNLFNBQVMsR0FBRzdMLG1CQUFPLENBQUMsa0VBQUQsQ0FBdkI7O0FBQ0EsSUFBSStLLFFBQVEsR0FBRy9LLG1CQUFPLENBQUMsc0RBQUQsQ0FBUCxDQUFrQixVQUFsQixDQUFmOztBQUNBLElBQUlDLFVBQVUsR0FBR0MsS0FBSyxDQUFDQyxTQUF2Qjs7QUFFQVIsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLFVBQVVDLEVBQVYsRUFBYztBQUM3QixTQUFPQSxFQUFFLEtBQUtPLFNBQVAsS0FBcUJ5TCxTQUFTLENBQUMzTCxLQUFWLEtBQW9CTCxFQUFwQixJQUEwQkksVUFBVSxDQUFDOEssUUFBRCxDQUFWLEtBQXlCbEwsRUFBeEUsQ0FBUDtBQUNELENBRkQsQzs7Ozs7Ozs7Ozs7QUNMQTtBQUNBLElBQUl3QixHQUFHLEdBQUdyQixtQkFBTyxDQUFDLHNEQUFELENBQWpCOztBQUNBTCxNQUFNLENBQUNDLE9BQVAsR0FBaUJNLEtBQUssQ0FBQzRMLE9BQU4sSUFBaUIsU0FBU0EsT0FBVCxDQUFpQnpCLEdBQWpCLEVBQXNCO0FBQ3RELFNBQU9oSixHQUFHLENBQUNnSixHQUFELENBQUgsSUFBWSxPQUFuQjtBQUNELENBRkQsQzs7Ozs7Ozs7Ozs7QUNGQTFLLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixVQUFVQyxFQUFWLEVBQWM7QUFDN0IsU0FBTyxPQUFPQSxFQUFQLEtBQWMsUUFBZCxHQUF5QkEsRUFBRSxLQUFLLElBQWhDLEdBQXVDLE9BQU9BLEVBQVAsS0FBYyxVQUE1RDtBQUNELENBRkQsQzs7Ozs7Ozs7Ozs7QUNBQTtBQUNBLElBQUlZLFFBQVEsR0FBR1QsbUJBQU8sQ0FBQyxrRUFBRCxDQUF0Qjs7QUFDQSxJQUFJcUIsR0FBRyxHQUFHckIsbUJBQU8sQ0FBQyxzREFBRCxDQUFqQjs7QUFDQSxJQUFJK0wsS0FBSyxHQUFHL0wsbUJBQU8sQ0FBQyxzREFBRCxDQUFQLENBQWtCLE9BQWxCLENBQVo7O0FBQ0FMLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixVQUFVQyxFQUFWLEVBQWM7QUFDN0IsTUFBSW1NLFFBQUo7QUFDQSxTQUFPdkwsUUFBUSxDQUFDWixFQUFELENBQVIsS0FBaUIsQ0FBQ21NLFFBQVEsR0FBR25NLEVBQUUsQ0FBQ2tNLEtBQUQsQ0FBZCxNQUEyQjNMLFNBQTNCLEdBQXVDLENBQUMsQ0FBQzRMLFFBQXpDLEdBQW9EM0ssR0FBRyxDQUFDeEIsRUFBRCxDQUFILElBQVcsUUFBaEYsQ0FBUDtBQUNELENBSEQsQzs7Ozs7Ozs7Ozs7QUNKQTtBQUNBLElBQUl5SyxRQUFRLEdBQUd0SyxtQkFBTyxDQUFDLGtFQUFELENBQXRCOztBQUNBTCxNQUFNLENBQUNDLE9BQVAsR0FBaUIsVUFBVXFMLFFBQVYsRUFBb0JqRixFQUFwQixFQUF3QjVFLEtBQXhCLEVBQStCaUYsT0FBL0IsRUFBd0M7QUFDdkQsTUFBSTtBQUNGLFdBQU9BLE9BQU8sR0FBR0wsRUFBRSxDQUFDc0UsUUFBUSxDQUFDbEosS0FBRCxDQUFSLENBQWdCLENBQWhCLENBQUQsRUFBcUJBLEtBQUssQ0FBQyxDQUFELENBQTFCLENBQUwsR0FBc0M0RSxFQUFFLENBQUM1RSxLQUFELENBQXRELENBREUsQ0FFSjtBQUNDLEdBSEQsQ0FHRSxPQUFPTSxDQUFQLEVBQVU7QUFDVixRQUFJdUssR0FBRyxHQUFHaEIsUUFBUSxDQUFDLFFBQUQsQ0FBbEI7QUFDQSxRQUFJZ0IsR0FBRyxLQUFLN0wsU0FBWixFQUF1QmtLLFFBQVEsQ0FBQzJCLEdBQUcsQ0FBQ2pLLElBQUosQ0FBU2lKLFFBQVQsQ0FBRCxDQUFSO0FBQ3ZCLFVBQU12SixDQUFOO0FBQ0Q7QUFDRixDQVRELEM7Ozs7Ozs7Ozs7OztBQ0ZhOztBQUNiLElBQUlVLE1BQU0sR0FBR3BDLG1CQUFPLENBQUMsMEVBQUQsQ0FBcEI7O0FBQ0EsSUFBSWtNLFVBQVUsR0FBR2xNLG1CQUFPLENBQUMsMEVBQUQsQ0FBeEI7O0FBQ0EsSUFBSXVGLGNBQWMsR0FBR3ZGLG1CQUFPLENBQUMsa0ZBQUQsQ0FBNUI7O0FBQ0EsSUFBSW1NLGlCQUFpQixHQUFHLEVBQXhCLEMsQ0FFQTs7QUFDQW5NLG1CQUFPLENBQUMsd0RBQUQsQ0FBUCxDQUFtQm1NLGlCQUFuQixFQUFzQ25NLG1CQUFPLENBQUMsc0RBQUQsQ0FBUCxDQUFrQixVQUFsQixDQUF0QyxFQUFxRSxZQUFZO0FBQUUsU0FBTyxJQUFQO0FBQWMsQ0FBakc7O0FBRUFMLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixVQUFVVSxXQUFWLEVBQXVCbUQsSUFBdkIsRUFBNkJZLElBQTdCLEVBQW1DO0FBQ2xEL0QsYUFBVyxDQUFDSCxTQUFaLEdBQXdCaUMsTUFBTSxDQUFDK0osaUJBQUQsRUFBb0I7QUFBRTlILFFBQUksRUFBRTZILFVBQVUsQ0FBQyxDQUFELEVBQUk3SCxJQUFKO0FBQWxCLEdBQXBCLENBQTlCO0FBQ0FrQixnQkFBYyxDQUFDakYsV0FBRCxFQUFjbUQsSUFBSSxHQUFHLFdBQXJCLENBQWQ7QUFDRCxDQUhELEM7Ozs7Ozs7Ozs7OztBQ1RhOztBQUNiLElBQUkySSxPQUFPLEdBQUdwTSxtQkFBTyxDQUFDLDhEQUFELENBQXJCOztBQUNBLElBQUlrRixPQUFPLEdBQUdsRixtQkFBTyxDQUFDLDREQUFELENBQXJCOztBQUNBLElBQUltRixRQUFRLEdBQUduRixtQkFBTyxDQUFDLGdFQUFELENBQXRCOztBQUNBLElBQUl5SSxJQUFJLEdBQUd6SSxtQkFBTyxDQUFDLHdEQUFELENBQWxCOztBQUNBLElBQUk2TCxTQUFTLEdBQUc3TCxtQkFBTyxDQUFDLGtFQUFELENBQXZCOztBQUNBLElBQUlxTSxXQUFXLEdBQUdyTSxtQkFBTyxDQUFDLHNFQUFELENBQXpCOztBQUNBLElBQUl1RixjQUFjLEdBQUd2RixtQkFBTyxDQUFDLGtGQUFELENBQTVCOztBQUNBLElBQUlzTSxjQUFjLEdBQUd0TSxtQkFBTyxDQUFDLG9FQUFELENBQTVCOztBQUNBLElBQUkrSyxRQUFRLEdBQUcvSyxtQkFBTyxDQUFDLHNEQUFELENBQVAsQ0FBa0IsVUFBbEIsQ0FBZjs7QUFDQSxJQUFJdU0sS0FBSyxHQUFHLEVBQUUsR0FBR0MsSUFBSCxJQUFXLFVBQVUsR0FBR0EsSUFBSCxFQUF2QixDQUFaLEMsQ0FBK0M7O0FBQy9DLElBQUlDLFdBQVcsR0FBRyxZQUFsQjtBQUNBLElBQUlDLElBQUksR0FBRyxNQUFYO0FBQ0EsSUFBSUMsTUFBTSxHQUFHLFFBQWI7O0FBRUEsSUFBSUMsVUFBVSxHQUFHLFlBQVk7QUFBRSxTQUFPLElBQVA7QUFBYyxDQUE3Qzs7QUFFQWpOLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixVQUFVZ0csSUFBVixFQUFnQm5DLElBQWhCLEVBQXNCbkQsV0FBdEIsRUFBbUMrRCxJQUFuQyxFQUF5Q3dJLE9BQXpDLEVBQWtEQyxNQUFsRCxFQUEwREMsTUFBMUQsRUFBa0U7QUFDakZWLGFBQVcsQ0FBQy9MLFdBQUQsRUFBY21ELElBQWQsRUFBb0JZLElBQXBCLENBQVg7O0FBQ0EsTUFBSTJJLFNBQVMsR0FBRyxVQUFVakksSUFBVixFQUFnQjtBQUM5QixRQUFJLENBQUN3SCxLQUFELElBQVV4SCxJQUFJLElBQUljLEtBQXRCLEVBQTZCLE9BQU9BLEtBQUssQ0FBQ2QsSUFBRCxDQUFaOztBQUM3QixZQUFRQSxJQUFSO0FBQ0UsV0FBSzJILElBQUw7QUFBVyxlQUFPLFNBQVNGLElBQVQsR0FBZ0I7QUFBRSxpQkFBTyxJQUFJbE0sV0FBSixDQUFnQixJQUFoQixFQUFzQnlFLElBQXRCLENBQVA7QUFBcUMsU0FBOUQ7O0FBQ1gsV0FBSzRILE1BQUw7QUFBYSxlQUFPLFNBQVNNLE1BQVQsR0FBa0I7QUFBRSxpQkFBTyxJQUFJM00sV0FBSixDQUFnQixJQUFoQixFQUFzQnlFLElBQXRCLENBQVA7QUFBcUMsU0FBaEU7QUFGZjs7QUFHRSxXQUFPLFNBQVNzQixPQUFULEdBQW1CO0FBQUUsYUFBTyxJQUFJL0YsV0FBSixDQUFnQixJQUFoQixFQUFzQnlFLElBQXRCLENBQVA7QUFBcUMsS0FBakU7QUFDSCxHQU5EOztBQU9BLE1BQUl6RCxHQUFHLEdBQUdtQyxJQUFJLEdBQUcsV0FBakI7QUFDQSxNQUFJeUosVUFBVSxHQUFHTCxPQUFPLElBQUlGLE1BQTVCO0FBQ0EsTUFBSVEsVUFBVSxHQUFHLEtBQWpCO0FBQ0EsTUFBSXRILEtBQUssR0FBR0QsSUFBSSxDQUFDekYsU0FBakI7QUFDQSxNQUFJaU4sT0FBTyxHQUFHdkgsS0FBSyxDQUFDa0YsUUFBRCxDQUFMLElBQW1CbEYsS0FBSyxDQUFDNEcsV0FBRCxDQUF4QixJQUF5Q0ksT0FBTyxJQUFJaEgsS0FBSyxDQUFDZ0gsT0FBRCxDQUF2RTtBQUNBLE1BQUlRLFFBQVEsR0FBR0QsT0FBTyxJQUFJSixTQUFTLENBQUNILE9BQUQsQ0FBbkM7QUFDQSxNQUFJUyxRQUFRLEdBQUdULE9BQU8sR0FBRyxDQUFDSyxVQUFELEdBQWNHLFFBQWQsR0FBeUJMLFNBQVMsQ0FBQyxTQUFELENBQXJDLEdBQW1ENU0sU0FBekU7QUFDQSxNQUFJbU4sVUFBVSxHQUFHOUosSUFBSSxJQUFJLE9BQVIsR0FBa0JvQyxLQUFLLENBQUNRLE9BQU4sSUFBaUIrRyxPQUFuQyxHQUE2Q0EsT0FBOUQ7QUFDQSxNQUFJM0gsT0FBSixFQUFhcEYsR0FBYixFQUFrQjhMLGlCQUFsQixDQWpCaUYsQ0FrQmpGOztBQUNBLE1BQUlvQixVQUFKLEVBQWdCO0FBQ2RwQixxQkFBaUIsR0FBR0csY0FBYyxDQUFDaUIsVUFBVSxDQUFDdkwsSUFBWCxDQUFnQixJQUFJNEQsSUFBSixFQUFoQixDQUFELENBQWxDOztBQUNBLFFBQUl1RyxpQkFBaUIsS0FBS3RLLE1BQU0sQ0FBQzFCLFNBQTdCLElBQTBDZ00saUJBQWlCLENBQUM5SCxJQUFoRSxFQUFzRTtBQUNwRTtBQUNBa0Isb0JBQWMsQ0FBQzRHLGlCQUFELEVBQW9CN0ssR0FBcEIsRUFBeUIsSUFBekIsQ0FBZCxDQUZvRSxDQUdwRTs7QUFDQSxVQUFJLENBQUM4SyxPQUFELElBQVksT0FBT0QsaUJBQWlCLENBQUNwQixRQUFELENBQXhCLElBQXNDLFVBQXRELEVBQWtFdEMsSUFBSSxDQUFDMEQsaUJBQUQsRUFBb0JwQixRQUFwQixFQUE4QjZCLFVBQTlCLENBQUo7QUFDbkU7QUFDRixHQTNCZ0YsQ0E0QmpGOzs7QUFDQSxNQUFJTSxVQUFVLElBQUlFLE9BQWQsSUFBeUJBLE9BQU8sQ0FBQzdNLElBQVIsS0FBaUJvTSxNQUE5QyxFQUFzRDtBQUNwRFEsY0FBVSxHQUFHLElBQWI7O0FBQ0FFLFlBQVEsR0FBRyxTQUFTSixNQUFULEdBQWtCO0FBQUUsYUFBT0csT0FBTyxDQUFDcEwsSUFBUixDQUFhLElBQWIsQ0FBUDtBQUE0QixLQUEzRDtBQUNELEdBaENnRixDQWlDakY7OztBQUNBLE1BQUksQ0FBQyxDQUFDb0ssT0FBRCxJQUFZVyxNQUFiLE1BQXlCUixLQUFLLElBQUlZLFVBQVQsSUFBdUIsQ0FBQ3RILEtBQUssQ0FBQ2tGLFFBQUQsQ0FBdEQsQ0FBSixFQUF1RTtBQUNyRXRDLFFBQUksQ0FBQzVDLEtBQUQsRUFBUWtGLFFBQVIsRUFBa0JzQyxRQUFsQixDQUFKO0FBQ0QsR0FwQ2dGLENBcUNqRjs7O0FBQ0F4QixXQUFTLENBQUNwSSxJQUFELENBQVQsR0FBa0I0SixRQUFsQjtBQUNBeEIsV0FBUyxDQUFDdkssR0FBRCxDQUFULEdBQWlCc0wsVUFBakI7O0FBQ0EsTUFBSUMsT0FBSixFQUFhO0FBQ1hwSCxXQUFPLEdBQUc7QUFDUndILFlBQU0sRUFBRUMsVUFBVSxHQUFHRyxRQUFILEdBQWNMLFNBQVMsQ0FBQ0wsTUFBRCxDQURqQztBQUVSSCxVQUFJLEVBQUVNLE1BQU0sR0FBR08sUUFBSCxHQUFjTCxTQUFTLENBQUNOLElBQUQsQ0FGM0I7QUFHUnJHLGFBQU8sRUFBRWlIO0FBSEQsS0FBVjtBQUtBLFFBQUlQLE1BQUosRUFBWSxLQUFLMU0sR0FBTCxJQUFZb0YsT0FBWixFQUFxQjtBQUMvQixVQUFJLEVBQUVwRixHQUFHLElBQUl3RixLQUFULENBQUosRUFBcUJWLFFBQVEsQ0FBQ1UsS0FBRCxFQUFReEYsR0FBUixFQUFhb0YsT0FBTyxDQUFDcEYsR0FBRCxDQUFwQixDQUFSO0FBQ3RCLEtBRkQsTUFFTzZFLE9BQU8sQ0FBQ0EsT0FBTyxDQUFDZ0UsQ0FBUixHQUFZaEUsT0FBTyxDQUFDZ0MsQ0FBUixJQUFhcUYsS0FBSyxJQUFJWSxVQUF0QixDQUFiLEVBQWdEMUosSUFBaEQsRUFBc0RnQyxPQUF0RCxDQUFQO0FBQ1I7O0FBQ0QsU0FBT0EsT0FBUDtBQUNELENBbkRELEM7Ozs7Ozs7Ozs7O0FDakJBLElBQUlzRixRQUFRLEdBQUcvSyxtQkFBTyxDQUFDLHNEQUFELENBQVAsQ0FBa0IsVUFBbEIsQ0FBZjs7QUFDQSxJQUFJd04sWUFBWSxHQUFHLEtBQW5COztBQUVBLElBQUk7QUFDRixNQUFJQyxLQUFLLEdBQUcsQ0FBQyxDQUFELEVBQUkxQyxRQUFKLEdBQVo7O0FBQ0EwQyxPQUFLLENBQUMsUUFBRCxDQUFMLEdBQWtCLFlBQVk7QUFBRUQsZ0JBQVksR0FBRyxJQUFmO0FBQXNCLEdBQXRELENBRkUsQ0FHRjs7O0FBQ0F0TixPQUFLLENBQUN3TixJQUFOLENBQVdELEtBQVgsRUFBa0IsWUFBWTtBQUFFLFVBQU0sQ0FBTjtBQUFVLEdBQTFDO0FBQ0QsQ0FMRCxDQUtFLE9BQU8vTCxDQUFQLEVBQVU7QUFBRTtBQUFhOztBQUUzQi9CLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixVQUFVK0osSUFBVixFQUFnQmdFLFdBQWhCLEVBQTZCO0FBQzVDLE1BQUksQ0FBQ0EsV0FBRCxJQUFnQixDQUFDSCxZQUFyQixFQUFtQyxPQUFPLEtBQVA7QUFDbkMsTUFBSUksSUFBSSxHQUFHLEtBQVg7O0FBQ0EsTUFBSTtBQUNGLFFBQUlDLEdBQUcsR0FBRyxDQUFDLENBQUQsQ0FBVjtBQUNBLFFBQUlsSCxJQUFJLEdBQUdrSCxHQUFHLENBQUM5QyxRQUFELENBQUgsRUFBWDs7QUFDQXBFLFFBQUksQ0FBQ3RDLElBQUwsR0FBWSxZQUFZO0FBQUUsYUFBTztBQUFFNkcsWUFBSSxFQUFFMEMsSUFBSSxHQUFHO0FBQWYsT0FBUDtBQUErQixLQUF6RDs7QUFDQUMsT0FBRyxDQUFDOUMsUUFBRCxDQUFILEdBQWdCLFlBQVk7QUFBRSxhQUFPcEUsSUFBUDtBQUFjLEtBQTVDOztBQUNBZ0QsUUFBSSxDQUFDa0UsR0FBRCxDQUFKO0FBQ0QsR0FORCxDQU1FLE9BQU9uTSxDQUFQLEVBQVU7QUFBRTtBQUFhOztBQUMzQixTQUFPa00sSUFBUDtBQUNELENBWEQsQzs7Ozs7Ozs7Ozs7QUNWQWpPLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixVQUFVc0wsSUFBVixFQUFnQjlKLEtBQWhCLEVBQXVCO0FBQ3RDLFNBQU87QUFBRUEsU0FBSyxFQUFFQSxLQUFUO0FBQWdCOEosUUFBSSxFQUFFLENBQUMsQ0FBQ0E7QUFBeEIsR0FBUDtBQUNELENBRkQsQzs7Ozs7Ozs7Ozs7QUNBQXZMLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixFQUFqQixDOzs7Ozs7Ozs7OztBQ0FBRCxNQUFNLENBQUNDLE9BQVAsR0FBaUIsS0FBakIsQzs7Ozs7Ozs7Ozs7QUNBQSxJQUFJa08sSUFBSSxHQUFHOU4sbUJBQU8sQ0FBQyxzREFBRCxDQUFQLENBQWtCLE1BQWxCLENBQVg7O0FBQ0EsSUFBSVMsUUFBUSxHQUFHVCxtQkFBTyxDQUFDLGtFQUFELENBQXRCOztBQUNBLElBQUkwRSxHQUFHLEdBQUcxRSxtQkFBTyxDQUFDLHNEQUFELENBQWpCOztBQUNBLElBQUkrTixPQUFPLEdBQUcvTixtQkFBTyxDQUFDLGtFQUFELENBQVAsQ0FBd0JtQyxDQUF0Qzs7QUFDQSxJQUFJNkwsRUFBRSxHQUFHLENBQVQ7O0FBQ0EsSUFBSUMsWUFBWSxHQUFHcE0sTUFBTSxDQUFDb00sWUFBUCxJQUF1QixZQUFZO0FBQ3BELFNBQU8sSUFBUDtBQUNELENBRkQ7O0FBR0EsSUFBSUMsTUFBTSxHQUFHLENBQUNsTyxtQkFBTyxDQUFDLDBEQUFELENBQVAsQ0FBb0IsWUFBWTtBQUM1QyxTQUFPaU8sWUFBWSxDQUFDcE0sTUFBTSxDQUFDc00saUJBQVAsQ0FBeUIsRUFBekIsQ0FBRCxDQUFuQjtBQUNELENBRmEsQ0FBZDs7QUFHQSxJQUFJQyxPQUFPLEdBQUcsVUFBVXZPLEVBQVYsRUFBYztBQUMxQmtPLFNBQU8sQ0FBQ2xPLEVBQUQsRUFBS2lPLElBQUwsRUFBVztBQUFFMU0sU0FBSyxFQUFFO0FBQ3pCZ0QsT0FBQyxFQUFFLE1BQU0sRUFBRTRKLEVBRGM7QUFDVjtBQUNmSyxPQUFDLEVBQUUsRUFGc0IsQ0FFVjs7QUFGVTtBQUFULEdBQVgsQ0FBUDtBQUlELENBTEQ7O0FBTUEsSUFBSXhMLE9BQU8sR0FBRyxVQUFVaEQsRUFBVixFQUFjdUMsTUFBZCxFQUFzQjtBQUNsQztBQUNBLE1BQUksQ0FBQzNCLFFBQVEsQ0FBQ1osRUFBRCxDQUFiLEVBQW1CLE9BQU8sT0FBT0EsRUFBUCxJQUFhLFFBQWIsR0FBd0JBLEVBQXhCLEdBQTZCLENBQUMsT0FBT0EsRUFBUCxJQUFhLFFBQWIsR0FBd0IsR0FBeEIsR0FBOEIsR0FBL0IsSUFBc0NBLEVBQTFFOztBQUNuQixNQUFJLENBQUM2RSxHQUFHLENBQUM3RSxFQUFELEVBQUtpTyxJQUFMLENBQVIsRUFBb0I7QUFDbEI7QUFDQSxRQUFJLENBQUNHLFlBQVksQ0FBQ3BPLEVBQUQsQ0FBakIsRUFBdUIsT0FBTyxHQUFQLENBRkwsQ0FHbEI7O0FBQ0EsUUFBSSxDQUFDdUMsTUFBTCxFQUFhLE9BQU8sR0FBUCxDQUpLLENBS2xCOztBQUNBZ00sV0FBTyxDQUFDdk8sRUFBRCxDQUFQLENBTmtCLENBT3BCO0FBQ0M7O0FBQUMsU0FBT0EsRUFBRSxDQUFDaU8sSUFBRCxDQUFGLENBQVMxSixDQUFoQjtBQUNILENBWkQ7O0FBYUEsSUFBSWtLLE9BQU8sR0FBRyxVQUFVek8sRUFBVixFQUFjdUMsTUFBZCxFQUFzQjtBQUNsQyxNQUFJLENBQUNzQyxHQUFHLENBQUM3RSxFQUFELEVBQUtpTyxJQUFMLENBQVIsRUFBb0I7QUFDbEI7QUFDQSxRQUFJLENBQUNHLFlBQVksQ0FBQ3BPLEVBQUQsQ0FBakIsRUFBdUIsT0FBTyxJQUFQLENBRkwsQ0FHbEI7O0FBQ0EsUUFBSSxDQUFDdUMsTUFBTCxFQUFhLE9BQU8sS0FBUCxDQUpLLENBS2xCOztBQUNBZ00sV0FBTyxDQUFDdk8sRUFBRCxDQUFQLENBTmtCLENBT3BCO0FBQ0M7O0FBQUMsU0FBT0EsRUFBRSxDQUFDaU8sSUFBRCxDQUFGLENBQVNPLENBQWhCO0FBQ0gsQ0FWRCxDLENBV0E7OztBQUNBLElBQUlFLFFBQVEsR0FBRyxVQUFVMU8sRUFBVixFQUFjO0FBQzNCLE1BQUlxTyxNQUFNLElBQUk5SSxJQUFJLENBQUNrQixJQUFmLElBQXVCMkgsWUFBWSxDQUFDcE8sRUFBRCxDQUFuQyxJQUEyQyxDQUFDNkUsR0FBRyxDQUFDN0UsRUFBRCxFQUFLaU8sSUFBTCxDQUFuRCxFQUErRE0sT0FBTyxDQUFDdk8sRUFBRCxDQUFQO0FBQy9ELFNBQU9BLEVBQVA7QUFDRCxDQUhEOztBQUlBLElBQUl1RixJQUFJLEdBQUd6RixNQUFNLENBQUNDLE9BQVAsR0FBaUI7QUFDMUJtRyxLQUFHLEVBQUUrSCxJQURxQjtBQUUxQnhILE1BQUksRUFBRSxLQUZvQjtBQUcxQnpELFNBQU8sRUFBRUEsT0FIaUI7QUFJMUJ5TCxTQUFPLEVBQUVBLE9BSmlCO0FBSzFCQyxVQUFRLEVBQUVBO0FBTGdCLENBQTVCLEM7Ozs7Ozs7Ozs7O0FDOUNBLElBQUl0SixNQUFNLEdBQUdqRixtQkFBTyxDQUFDLDREQUFELENBQXBCOztBQUNBLElBQUl3TyxTQUFTLEdBQUd4TyxtQkFBTyxDQUFDLHdEQUFELENBQVAsQ0FBbUJtRyxHQUFuQzs7QUFDQSxJQUFJc0ksUUFBUSxHQUFHeEosTUFBTSxDQUFDeUosZ0JBQVAsSUFBMkJ6SixNQUFNLENBQUMwSixzQkFBakQ7QUFDQSxJQUFJQyxPQUFPLEdBQUczSixNQUFNLENBQUMySixPQUFyQjtBQUNBLElBQUlDLE9BQU8sR0FBRzVKLE1BQU0sQ0FBQzRKLE9BQXJCO0FBQ0EsSUFBSUMsTUFBTSxHQUFHOU8sbUJBQU8sQ0FBQyxzREFBRCxDQUFQLENBQWtCNE8sT0FBbEIsS0FBOEIsU0FBM0M7O0FBRUFqUCxNQUFNLENBQUNDLE9BQVAsR0FBaUIsWUFBWTtBQUMzQixNQUFJbVAsSUFBSixFQUFVQyxJQUFWLEVBQWdCQyxNQUFoQjs7QUFFQSxNQUFJQyxLQUFLLEdBQUcsWUFBWTtBQUN0QixRQUFJQyxNQUFKLEVBQVluSixFQUFaO0FBQ0EsUUFBSThJLE1BQU0sS0FBS0ssTUFBTSxHQUFHUCxPQUFPLENBQUNRLE1BQXRCLENBQVYsRUFBeUNELE1BQU0sQ0FBQ0UsSUFBUDs7QUFDekMsV0FBT04sSUFBUCxFQUFhO0FBQ1gvSSxRQUFFLEdBQUcrSSxJQUFJLENBQUMvSSxFQUFWO0FBQ0ErSSxVQUFJLEdBQUdBLElBQUksQ0FBQzFLLElBQVo7O0FBQ0EsVUFBSTtBQUNGMkIsVUFBRTtBQUNILE9BRkQsQ0FFRSxPQUFPdEUsQ0FBUCxFQUFVO0FBQ1YsWUFBSXFOLElBQUosRUFBVUUsTUFBTSxHQUFoQixLQUNLRCxJQUFJLEdBQUc1TyxTQUFQO0FBQ0wsY0FBTXNCLENBQU47QUFDRDtBQUNGOztBQUFDc04sUUFBSSxHQUFHNU8sU0FBUDtBQUNGLFFBQUkrTyxNQUFKLEVBQVlBLE1BQU0sQ0FBQ0csS0FBUDtBQUNiLEdBZkQsQ0FIMkIsQ0FvQjNCOzs7QUFDQSxNQUFJUixNQUFKLEVBQVk7QUFDVkcsVUFBTSxHQUFHLFlBQVk7QUFDbkJMLGFBQU8sQ0FBQ1csUUFBUixDQUFpQkwsS0FBakI7QUFDRCxLQUZELENBRFUsQ0FJWjs7QUFDQyxHQUxELE1BS08sSUFBSVQsUUFBUSxJQUFJLEVBQUV4SixNQUFNLENBQUN1SyxTQUFQLElBQW9CdkssTUFBTSxDQUFDdUssU0FBUCxDQUFpQkMsVUFBdkMsQ0FBaEIsRUFBb0U7QUFDekUsUUFBSUMsTUFBTSxHQUFHLElBQWI7QUFDQSxRQUFJQyxJQUFJLEdBQUc5SCxRQUFRLENBQUMrSCxjQUFULENBQXdCLEVBQXhCLENBQVg7QUFDQSxRQUFJbkIsUUFBSixDQUFhUyxLQUFiLEVBQW9CVyxPQUFwQixDQUE0QkYsSUFBNUIsRUFBa0M7QUFBRUcsbUJBQWEsRUFBRTtBQUFqQixLQUFsQyxFQUh5RSxDQUdiOztBQUM1RGIsVUFBTSxHQUFHLFlBQVk7QUFDbkJVLFVBQUksQ0FBQzFMLElBQUwsR0FBWXlMLE1BQU0sR0FBRyxDQUFDQSxNQUF0QjtBQUNELEtBRkQsQ0FKeUUsQ0FPM0U7O0FBQ0MsR0FSTSxNQVFBLElBQUliLE9BQU8sSUFBSUEsT0FBTyxDQUFDa0IsT0FBdkIsRUFBZ0M7QUFDckM7QUFDQSxRQUFJQyxPQUFPLEdBQUduQixPQUFPLENBQUNrQixPQUFSLENBQWdCM1AsU0FBaEIsQ0FBZDs7QUFDQTZPLFVBQU0sR0FBRyxZQUFZO0FBQ25CZSxhQUFPLENBQUNDLElBQVIsQ0FBYWYsS0FBYjtBQUNELEtBRkQsQ0FIcUMsQ0FNdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNDLEdBWk0sTUFZQTtBQUNMRCxVQUFNLEdBQUcsWUFBWTtBQUNuQjtBQUNBVCxlQUFTLENBQUN4TSxJQUFWLENBQWVpRCxNQUFmLEVBQXVCaUssS0FBdkI7QUFDRCxLQUhEO0FBSUQ7O0FBRUQsU0FBTyxVQUFVbEosRUFBVixFQUFjO0FBQ25CLFFBQUlrSyxJQUFJLEdBQUc7QUFBRWxLLFFBQUUsRUFBRUEsRUFBTjtBQUFVM0IsVUFBSSxFQUFFakU7QUFBaEIsS0FBWDtBQUNBLFFBQUk0TyxJQUFKLEVBQVVBLElBQUksQ0FBQzNLLElBQUwsR0FBWTZMLElBQVo7O0FBQ1YsUUFBSSxDQUFDbkIsSUFBTCxFQUFXO0FBQ1RBLFVBQUksR0FBR21CLElBQVA7QUFDQWpCLFlBQU07QUFDUDs7QUFBQ0QsUUFBSSxHQUFHa0IsSUFBUDtBQUNILEdBUEQ7QUFRRCxDQTdERCxDOzs7Ozs7Ozs7Ozs7Q0NOQTs7QUFDQSxJQUFJekksU0FBUyxHQUFHekgsbUJBQU8sQ0FBQyxvRUFBRCxDQUF2Qjs7QUFFQSxTQUFTbVEsaUJBQVQsQ0FBMkJ2TSxDQUEzQixFQUE4QjtBQUM1QixNQUFJbU0sT0FBSixFQUFhSyxNQUFiO0FBQ0EsT0FBS0osT0FBTCxHQUFlLElBQUlwTSxDQUFKLENBQU0sVUFBVXlNLFNBQVYsRUFBcUJDLFFBQXJCLEVBQStCO0FBQ2xELFFBQUlQLE9BQU8sS0FBSzNQLFNBQVosSUFBeUJnUSxNQUFNLEtBQUtoUSxTQUF4QyxFQUFtRCxNQUFNTixTQUFTLENBQUMseUJBQUQsQ0FBZjtBQUNuRGlRLFdBQU8sR0FBR00sU0FBVjtBQUNBRCxVQUFNLEdBQUdFLFFBQVQ7QUFDRCxHQUpjLENBQWY7QUFLQSxPQUFLUCxPQUFMLEdBQWV0SSxTQUFTLENBQUNzSSxPQUFELENBQXhCO0FBQ0EsT0FBS0ssTUFBTCxHQUFjM0ksU0FBUyxDQUFDMkksTUFBRCxDQUF2QjtBQUNEOztBQUVEelEsTUFBTSxDQUFDQyxPQUFQLENBQWV1QyxDQUFmLEdBQW1CLFVBQVV5QixDQUFWLEVBQWE7QUFDOUIsU0FBTyxJQUFJdU0saUJBQUosQ0FBc0J2TSxDQUF0QixDQUFQO0FBQ0QsQ0FGRCxDOzs7Ozs7Ozs7Ozs7Q0NkQTs7QUFDQSxJQUFJcUUsT0FBTyxHQUFHakksbUJBQU8sQ0FBQyxzRUFBRCxDQUFyQjs7QUFDQSxJQUFJa0ksSUFBSSxHQUFHbEksbUJBQU8sQ0FBQyxzRUFBRCxDQUFsQjs7QUFDQSxJQUFJbUksR0FBRyxHQUFHbkksbUJBQU8sQ0FBQyxvRUFBRCxDQUFqQjs7QUFDQSxJQUFJdVEsUUFBUSxHQUFHdlEsbUJBQU8sQ0FBQyxrRUFBRCxDQUF0Qjs7QUFDQSxJQUFJd1EsT0FBTyxHQUFHeFEsbUJBQU8sQ0FBQyw4REFBRCxDQUFyQjs7QUFDQSxJQUFJeVEsT0FBTyxHQUFHNU8sTUFBTSxDQUFDNk8sTUFBckIsQyxDQUVBOztBQUNBL1EsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLENBQUM2USxPQUFELElBQVl6USxtQkFBTyxDQUFDLDBEQUFELENBQVAsQ0FBb0IsWUFBWTtBQUMzRCxNQUFJMlEsQ0FBQyxHQUFHLEVBQVI7QUFDQSxNQUFJL08sQ0FBQyxHQUFHLEVBQVIsQ0FGMkQsQ0FHM0Q7O0FBQ0EsTUFBSW9ILENBQUMsR0FBRzRILE1BQU0sRUFBZDtBQUNBLE1BQUlDLENBQUMsR0FBRyxzQkFBUjtBQUNBRixHQUFDLENBQUMzSCxDQUFELENBQUQsR0FBTyxDQUFQO0FBQ0E2SCxHQUFDLENBQUM3SSxLQUFGLENBQVEsRUFBUixFQUFZekQsT0FBWixDQUFvQixVQUFVakIsQ0FBVixFQUFhO0FBQUUxQixLQUFDLENBQUMwQixDQUFELENBQUQsR0FBT0EsQ0FBUDtBQUFXLEdBQTlDO0FBQ0EsU0FBT21OLE9BQU8sQ0FBQyxFQUFELEVBQUtFLENBQUwsQ0FBUCxDQUFlM0gsQ0FBZixLQUFxQixDQUFyQixJQUEwQm5ILE1BQU0sQ0FBQzJLLElBQVAsQ0FBWWlFLE9BQU8sQ0FBQyxFQUFELEVBQUs3TyxDQUFMLENBQW5CLEVBQTRCa1AsSUFBNUIsQ0FBaUMsRUFBakMsS0FBd0NELENBQXpFO0FBQ0QsQ0FUNEIsQ0FBWixHQVNaLFNBQVNILE1BQVQsQ0FBZ0I1SixNQUFoQixFQUF3QjhCLE1BQXhCLEVBQWdDO0FBQUU7QUFDckMsTUFBSWpILENBQUMsR0FBRzRPLFFBQVEsQ0FBQ3pKLE1BQUQsQ0FBaEI7QUFDQSxNQUFJaUssSUFBSSxHQUFHdlAsU0FBUyxDQUFDTixNQUFyQjtBQUNBLE1BQUlDLEtBQUssR0FBRyxDQUFaO0FBQ0EsTUFBSWtILFVBQVUsR0FBR0gsSUFBSSxDQUFDL0YsQ0FBdEI7QUFDQSxNQUFJb0csTUFBTSxHQUFHSixHQUFHLENBQUNoRyxDQUFqQjs7QUFDQSxTQUFPNE8sSUFBSSxHQUFHNVAsS0FBZCxFQUFxQjtBQUNuQixRQUFJNkgsQ0FBQyxHQUFHd0gsT0FBTyxDQUFDaFAsU0FBUyxDQUFDTCxLQUFLLEVBQU4sQ0FBVixDQUFmO0FBQ0EsUUFBSXFMLElBQUksR0FBR25FLFVBQVUsR0FBR0osT0FBTyxDQUFDZSxDQUFELENBQVAsQ0FBV2dJLE1BQVgsQ0FBa0IzSSxVQUFVLENBQUNXLENBQUQsQ0FBNUIsQ0FBSCxHQUFzQ2YsT0FBTyxDQUFDZSxDQUFELENBQWxFO0FBQ0EsUUFBSTlILE1BQU0sR0FBR3NMLElBQUksQ0FBQ3RMLE1BQWxCO0FBQ0EsUUFBSStQLENBQUMsR0FBRyxDQUFSO0FBQ0EsUUFBSTVRLEdBQUo7O0FBQ0EsV0FBT2EsTUFBTSxHQUFHK1AsQ0FBaEIsRUFBbUIsSUFBSTFJLE1BQU0sQ0FBQ3ZHLElBQVAsQ0FBWWdILENBQVosRUFBZTNJLEdBQUcsR0FBR21NLElBQUksQ0FBQ3lFLENBQUMsRUFBRixDQUF6QixDQUFKLEVBQXFDdFAsQ0FBQyxDQUFDdEIsR0FBRCxDQUFELEdBQVMySSxDQUFDLENBQUMzSSxHQUFELENBQVY7QUFDekQ7O0FBQUMsU0FBT3NCLENBQVA7QUFDSCxDQXZCZ0IsR0F1QmI4TyxPQXZCSixDOzs7Ozs7Ozs7OztBQ1ZBO0FBQ0EsSUFBSW5HLFFBQVEsR0FBR3RLLG1CQUFPLENBQUMsa0VBQUQsQ0FBdEI7O0FBQ0EsSUFBSWtSLEdBQUcsR0FBR2xSLG1CQUFPLENBQUMsb0VBQUQsQ0FBakI7O0FBQ0EsSUFBSW1SLFdBQVcsR0FBR25SLG1CQUFPLENBQUMsMEVBQUQsQ0FBekI7O0FBQ0EsSUFBSW9SLFFBQVEsR0FBR3BSLG1CQUFPLENBQUMsb0VBQUQsQ0FBUCxDQUF5QixVQUF6QixDQUFmOztBQUNBLElBQUlxUixLQUFLLEdBQUcsWUFBWTtBQUFFO0FBQWEsQ0FBdkM7O0FBQ0EsSUFBSTNJLFNBQVMsR0FBRyxXQUFoQixDLENBRUE7O0FBQ0EsSUFBSTRJLFVBQVUsR0FBRyxZQUFZO0FBQzNCO0FBQ0EsTUFBSUMsTUFBTSxHQUFHdlIsbUJBQU8sQ0FBQyxvRUFBRCxDQUFQLENBQXlCLFFBQXpCLENBQWI7O0FBQ0EsTUFBSW9FLENBQUMsR0FBRytNLFdBQVcsQ0FBQ2pRLE1BQXBCO0FBQ0EsTUFBSXNRLEVBQUUsR0FBRyxHQUFUO0FBQ0EsTUFBSUMsRUFBRSxHQUFHLEdBQVQ7QUFDQSxNQUFJQyxjQUFKO0FBQ0FILFFBQU0sQ0FBQ0ksS0FBUCxDQUFhQyxPQUFiLEdBQXVCLE1BQXZCOztBQUNBNVIscUJBQU8sQ0FBQyx3REFBRCxDQUFQLENBQW1CNlIsV0FBbkIsQ0FBK0JOLE1BQS9COztBQUNBQSxRQUFNLENBQUNPLEdBQVAsR0FBYSxhQUFiLENBVDJCLENBU0M7QUFDNUI7QUFDQTs7QUFDQUosZ0JBQWMsR0FBR0gsTUFBTSxDQUFDUSxhQUFQLENBQXFCbEssUUFBdEM7QUFDQTZKLGdCQUFjLENBQUNNLElBQWY7QUFDQU4sZ0JBQWMsQ0FBQ08sS0FBZixDQUFxQlQsRUFBRSxHQUFHLFFBQUwsR0FBZ0JDLEVBQWhCLEdBQXFCLG1CQUFyQixHQUEyQ0QsRUFBM0MsR0FBZ0QsU0FBaEQsR0FBNERDLEVBQWpGO0FBQ0FDLGdCQUFjLENBQUNRLEtBQWY7QUFDQVosWUFBVSxHQUFHSSxjQUFjLENBQUN4SyxDQUE1Qjs7QUFDQSxTQUFPOUMsQ0FBQyxFQUFSLEVBQVksT0FBT2tOLFVBQVUsQ0FBQzVJLFNBQUQsQ0FBVixDQUFzQnlJLFdBQVcsQ0FBQy9NLENBQUQsQ0FBakMsQ0FBUDs7QUFDWixTQUFPa04sVUFBVSxFQUFqQjtBQUNELENBbkJEOztBQXFCQTNSLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQmlDLE1BQU0sQ0FBQ08sTUFBUCxJQUFpQixTQUFTQSxNQUFULENBQWdCbkIsQ0FBaEIsRUFBbUJrUixVQUFuQixFQUErQjtBQUMvRCxNQUFJL0osTUFBSjs7QUFDQSxNQUFJbkgsQ0FBQyxLQUFLLElBQVYsRUFBZ0I7QUFDZG9RLFNBQUssQ0FBQzNJLFNBQUQsQ0FBTCxHQUFtQjRCLFFBQVEsQ0FBQ3JKLENBQUQsQ0FBM0I7QUFDQW1ILFVBQU0sR0FBRyxJQUFJaUosS0FBSixFQUFUO0FBQ0FBLFNBQUssQ0FBQzNJLFNBQUQsQ0FBTCxHQUFtQixJQUFuQixDQUhjLENBSWQ7O0FBQ0FOLFVBQU0sQ0FBQ2dKLFFBQUQsQ0FBTixHQUFtQm5RLENBQW5CO0FBQ0QsR0FORCxNQU1PbUgsTUFBTSxHQUFHa0osVUFBVSxFQUFuQjs7QUFDUCxTQUFPYSxVQUFVLEtBQUsvUixTQUFmLEdBQTJCZ0ksTUFBM0IsR0FBb0M4SSxHQUFHLENBQUM5SSxNQUFELEVBQVMrSixVQUFULENBQTlDO0FBQ0QsQ0FWRCxDOzs7Ozs7Ozs7OztBQzlCQSxJQUFJN0gsUUFBUSxHQUFHdEssbUJBQU8sQ0FBQyxrRUFBRCxDQUF0Qjs7QUFDQSxJQUFJb1MsY0FBYyxHQUFHcFMsbUJBQU8sQ0FBQyw0RUFBRCxDQUE1Qjs7QUFDQSxJQUFJcVMsV0FBVyxHQUFHclMsbUJBQU8sQ0FBQyx3RUFBRCxDQUF6Qjs7QUFDQSxJQUFJa0MsRUFBRSxHQUFHTCxNQUFNLENBQUMrRixjQUFoQjtBQUVBaEksT0FBTyxDQUFDdUMsQ0FBUixHQUFZbkMsbUJBQU8sQ0FBQyxzRUFBRCxDQUFQLEdBQTRCNkIsTUFBTSxDQUFDK0YsY0FBbkMsR0FBb0QsU0FBU0EsY0FBVCxDQUF3QjNHLENBQXhCLEVBQTJCaUksQ0FBM0IsRUFBOEJvSixVQUE5QixFQUEwQztBQUN4R2hJLFVBQVEsQ0FBQ3JKLENBQUQsQ0FBUjtBQUNBaUksR0FBQyxHQUFHbUosV0FBVyxDQUFDbkosQ0FBRCxFQUFJLElBQUosQ0FBZjtBQUNBb0IsVUFBUSxDQUFDZ0ksVUFBRCxDQUFSO0FBQ0EsTUFBSUYsY0FBSixFQUFvQixJQUFJO0FBQ3RCLFdBQU9sUSxFQUFFLENBQUNqQixDQUFELEVBQUlpSSxDQUFKLEVBQU9vSixVQUFQLENBQVQ7QUFDRCxHQUZtQixDQUVsQixPQUFPNVEsQ0FBUCxFQUFVO0FBQUU7QUFBYTtBQUMzQixNQUFJLFNBQVM0USxVQUFULElBQXVCLFNBQVNBLFVBQXBDLEVBQWdELE1BQU14UyxTQUFTLENBQUMsMEJBQUQsQ0FBZjtBQUNoRCxNQUFJLFdBQVd3UyxVQUFmLEVBQTJCclIsQ0FBQyxDQUFDaUksQ0FBRCxDQUFELEdBQU9vSixVQUFVLENBQUNsUixLQUFsQjtBQUMzQixTQUFPSCxDQUFQO0FBQ0QsQ0FWRCxDOzs7Ozs7Ozs7OztBQ0xBLElBQUlpQixFQUFFLEdBQUdsQyxtQkFBTyxDQUFDLGtFQUFELENBQWhCOztBQUNBLElBQUlzSyxRQUFRLEdBQUd0SyxtQkFBTyxDQUFDLGtFQUFELENBQXRCOztBQUNBLElBQUlpSSxPQUFPLEdBQUdqSSxtQkFBTyxDQUFDLHNFQUFELENBQXJCOztBQUVBTCxNQUFNLENBQUNDLE9BQVAsR0FBaUJJLG1CQUFPLENBQUMsc0VBQUQsQ0FBUCxHQUE0QjZCLE1BQU0sQ0FBQzBRLGdCQUFuQyxHQUFzRCxTQUFTQSxnQkFBVCxDQUEwQnRSLENBQTFCLEVBQTZCa1IsVUFBN0IsRUFBeUM7QUFDOUc3SCxVQUFRLENBQUNySixDQUFELENBQVI7QUFDQSxNQUFJdUwsSUFBSSxHQUFHdkUsT0FBTyxDQUFDa0ssVUFBRCxDQUFsQjtBQUNBLE1BQUlqUixNQUFNLEdBQUdzTCxJQUFJLENBQUN0TCxNQUFsQjtBQUNBLE1BQUlrRCxDQUFDLEdBQUcsQ0FBUjtBQUNBLE1BQUk4RSxDQUFKOztBQUNBLFNBQU9oSSxNQUFNLEdBQUdrRCxDQUFoQixFQUFtQmxDLEVBQUUsQ0FBQ0MsQ0FBSCxDQUFLbEIsQ0FBTCxFQUFRaUksQ0FBQyxHQUFHc0QsSUFBSSxDQUFDcEksQ0FBQyxFQUFGLENBQWhCLEVBQXVCK04sVUFBVSxDQUFDakosQ0FBRCxDQUFqQzs7QUFDbkIsU0FBT2pJLENBQVA7QUFDRCxDQVJELEM7Ozs7Ozs7Ozs7O0FDSkEsSUFBSWtILEdBQUcsR0FBR25JLG1CQUFPLENBQUMsb0VBQUQsQ0FBakI7O0FBQ0EsSUFBSXVILFVBQVUsR0FBR3ZILG1CQUFPLENBQUMsMEVBQUQsQ0FBeEI7O0FBQ0EsSUFBSVUsU0FBUyxHQUFHVixtQkFBTyxDQUFDLG9FQUFELENBQXZCOztBQUNBLElBQUlxUyxXQUFXLEdBQUdyUyxtQkFBTyxDQUFDLHdFQUFELENBQXpCOztBQUNBLElBQUkwRSxHQUFHLEdBQUcxRSxtQkFBTyxDQUFDLHNEQUFELENBQWpCOztBQUNBLElBQUlvUyxjQUFjLEdBQUdwUyxtQkFBTyxDQUFDLDRFQUFELENBQTVCOztBQUNBLElBQUl3UyxJQUFJLEdBQUczUSxNQUFNLENBQUM0USx3QkFBbEI7QUFFQTdTLE9BQU8sQ0FBQ3VDLENBQVIsR0FBWW5DLG1CQUFPLENBQUMsc0VBQUQsQ0FBUCxHQUE0QndTLElBQTVCLEdBQW1DLFNBQVNDLHdCQUFULENBQWtDeFIsQ0FBbEMsRUFBcUNpSSxDQUFyQyxFQUF3QztBQUNyRmpJLEdBQUMsR0FBR1AsU0FBUyxDQUFDTyxDQUFELENBQWI7QUFDQWlJLEdBQUMsR0FBR21KLFdBQVcsQ0FBQ25KLENBQUQsRUFBSSxJQUFKLENBQWY7QUFDQSxNQUFJa0osY0FBSixFQUFvQixJQUFJO0FBQ3RCLFdBQU9JLElBQUksQ0FBQ3ZSLENBQUQsRUFBSWlJLENBQUosQ0FBWDtBQUNELEdBRm1CLENBRWxCLE9BQU94SCxDQUFQLEVBQVU7QUFBRTtBQUFhO0FBQzNCLE1BQUlnRCxHQUFHLENBQUN6RCxDQUFELEVBQUlpSSxDQUFKLENBQVAsRUFBZSxPQUFPM0IsVUFBVSxDQUFDLENBQUNZLEdBQUcsQ0FBQ2hHLENBQUosQ0FBTUgsSUFBTixDQUFXZixDQUFYLEVBQWNpSSxDQUFkLENBQUYsRUFBb0JqSSxDQUFDLENBQUNpSSxDQUFELENBQXJCLENBQWpCO0FBQ2hCLENBUEQsQzs7Ozs7Ozs7Ozs7QUNSQTtBQUNBLElBQUl4SSxTQUFTLEdBQUdWLG1CQUFPLENBQUMsb0VBQUQsQ0FBdkI7O0FBQ0EsSUFBSTBTLElBQUksR0FBRzFTLG1CQUFPLENBQUMsc0VBQUQsQ0FBUCxDQUEwQm1DLENBQXJDOztBQUNBLElBQUlKLFFBQVEsR0FBRyxHQUFHQSxRQUFsQjtBQUVBLElBQUk0USxXQUFXLEdBQUcsT0FBT3hILE1BQVAsSUFBaUIsUUFBakIsSUFBNkJBLE1BQTdCLElBQXVDdEosTUFBTSxDQUFDK1EsbUJBQTlDLEdBQ2QvUSxNQUFNLENBQUMrUSxtQkFBUCxDQUEyQnpILE1BQTNCLENBRGMsR0FDdUIsRUFEekM7O0FBR0EsSUFBSTBILGNBQWMsR0FBRyxVQUFVaFQsRUFBVixFQUFjO0FBQ2pDLE1BQUk7QUFDRixXQUFPNlMsSUFBSSxDQUFDN1MsRUFBRCxDQUFYO0FBQ0QsR0FGRCxDQUVFLE9BQU82QixDQUFQLEVBQVU7QUFDVixXQUFPaVIsV0FBVyxDQUFDMVEsS0FBWixFQUFQO0FBQ0Q7QUFDRixDQU5EOztBQVFBdEMsTUFBTSxDQUFDQyxPQUFQLENBQWV1QyxDQUFmLEdBQW1CLFNBQVN5USxtQkFBVCxDQUE2Qi9TLEVBQTdCLEVBQWlDO0FBQ2xELFNBQU84UyxXQUFXLElBQUk1USxRQUFRLENBQUNDLElBQVQsQ0FBY25DLEVBQWQsS0FBcUIsaUJBQXBDLEdBQXdEZ1QsY0FBYyxDQUFDaFQsRUFBRCxDQUF0RSxHQUE2RTZTLElBQUksQ0FBQ2hTLFNBQVMsQ0FBQ2IsRUFBRCxDQUFWLENBQXhGO0FBQ0QsQ0FGRCxDOzs7Ozs7Ozs7OztBQ2hCQTtBQUNBLElBQUlpVCxLQUFLLEdBQUc5UyxtQkFBTyxDQUFDLHdGQUFELENBQW5COztBQUNBLElBQUkrUyxVQUFVLEdBQUcvUyxtQkFBTyxDQUFDLDBFQUFELENBQVAsQ0FBNEJnUixNQUE1QixDQUFtQyxRQUFuQyxFQUE2QyxXQUE3QyxDQUFqQjs7QUFFQXBSLE9BQU8sQ0FBQ3VDLENBQVIsR0FBWU4sTUFBTSxDQUFDK1EsbUJBQVAsSUFBOEIsU0FBU0EsbUJBQVQsQ0FBNkIzUixDQUE3QixFQUFnQztBQUN4RSxTQUFPNlIsS0FBSyxDQUFDN1IsQ0FBRCxFQUFJOFIsVUFBSixDQUFaO0FBQ0QsQ0FGRCxDOzs7Ozs7Ozs7OztBQ0pBblQsT0FBTyxDQUFDdUMsQ0FBUixHQUFZTixNQUFNLENBQUNtUixxQkFBbkIsQzs7Ozs7Ozs7Ozs7QUNBQTtBQUNBLElBQUl0TyxHQUFHLEdBQUcxRSxtQkFBTyxDQUFDLHNEQUFELENBQWpCOztBQUNBLElBQUl1USxRQUFRLEdBQUd2USxtQkFBTyxDQUFDLGtFQUFELENBQXRCOztBQUNBLElBQUlvUixRQUFRLEdBQUdwUixtQkFBTyxDQUFDLG9FQUFELENBQVAsQ0FBeUIsVUFBekIsQ0FBZjs7QUFDQSxJQUFJaVQsV0FBVyxHQUFHcFIsTUFBTSxDQUFDMUIsU0FBekI7O0FBRUFSLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQmlDLE1BQU0sQ0FBQ3lLLGNBQVAsSUFBeUIsVUFBVXJMLENBQVYsRUFBYTtBQUNyREEsR0FBQyxHQUFHc1AsUUFBUSxDQUFDdFAsQ0FBRCxDQUFaO0FBQ0EsTUFBSXlELEdBQUcsQ0FBQ3pELENBQUQsRUFBSW1RLFFBQUosQ0FBUCxFQUFzQixPQUFPblEsQ0FBQyxDQUFDbVEsUUFBRCxDQUFSOztBQUN0QixNQUFJLE9BQU9uUSxDQUFDLENBQUM4RixXQUFULElBQXdCLFVBQXhCLElBQXNDOUYsQ0FBQyxZQUFZQSxDQUFDLENBQUM4RixXQUF6RCxFQUFzRTtBQUNwRSxXQUFPOUYsQ0FBQyxDQUFDOEYsV0FBRixDQUFjNUcsU0FBckI7QUFDRDs7QUFBQyxTQUFPYyxDQUFDLFlBQVlZLE1BQWIsR0FBc0JvUixXQUF0QixHQUFvQyxJQUEzQztBQUNILENBTkQsQzs7Ozs7Ozs7Ozs7QUNOQSxJQUFJdk8sR0FBRyxHQUFHMUUsbUJBQU8sQ0FBQyxzREFBRCxDQUFqQjs7QUFDQSxJQUFJVSxTQUFTLEdBQUdWLG1CQUFPLENBQUMsb0VBQUQsQ0FBdkI7O0FBQ0EsSUFBSWtULFlBQVksR0FBR2xULG1CQUFPLENBQUMsNEVBQUQsQ0FBUCxDQUE2QixLQUE3QixDQUFuQjs7QUFDQSxJQUFJb1IsUUFBUSxHQUFHcFIsbUJBQU8sQ0FBQyxvRUFBRCxDQUFQLENBQXlCLFVBQXpCLENBQWY7O0FBRUFMLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixVQUFVNEgsTUFBVixFQUFrQjJMLEtBQWxCLEVBQXlCO0FBQ3hDLE1BQUlsUyxDQUFDLEdBQUdQLFNBQVMsQ0FBQzhHLE1BQUQsQ0FBakI7QUFDQSxNQUFJcEQsQ0FBQyxHQUFHLENBQVI7QUFDQSxNQUFJZ0UsTUFBTSxHQUFHLEVBQWI7QUFDQSxNQUFJL0gsR0FBSjs7QUFDQSxPQUFLQSxHQUFMLElBQVlZLENBQVosRUFBZSxJQUFJWixHQUFHLElBQUkrUSxRQUFYLEVBQXFCMU0sR0FBRyxDQUFDekQsQ0FBRCxFQUFJWixHQUFKLENBQUgsSUFBZStILE1BQU0sQ0FBQ0ksSUFBUCxDQUFZbkksR0FBWixDQUFmLENBTEksQ0FNeEM7OztBQUNBLFNBQU84UyxLQUFLLENBQUNqUyxNQUFOLEdBQWVrRCxDQUF0QixFQUF5QixJQUFJTSxHQUFHLENBQUN6RCxDQUFELEVBQUlaLEdBQUcsR0FBRzhTLEtBQUssQ0FBQy9PLENBQUMsRUFBRixDQUFmLENBQVAsRUFBOEI7QUFDckQsS0FBQzhPLFlBQVksQ0FBQzlLLE1BQUQsRUFBUy9ILEdBQVQsQ0FBYixJQUE4QitILE1BQU0sQ0FBQ0ksSUFBUCxDQUFZbkksR0FBWixDQUE5QjtBQUNEOztBQUNELFNBQU8rSCxNQUFQO0FBQ0QsQ0FYRCxDOzs7Ozs7Ozs7OztBQ0xBO0FBQ0EsSUFBSTBLLEtBQUssR0FBRzlTLG1CQUFPLENBQUMsd0ZBQUQsQ0FBbkI7O0FBQ0EsSUFBSW1SLFdBQVcsR0FBR25SLG1CQUFPLENBQUMsMEVBQUQsQ0FBekI7O0FBRUFMLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQmlDLE1BQU0sQ0FBQzJLLElBQVAsSUFBZSxTQUFTQSxJQUFULENBQWN2TCxDQUFkLEVBQWlCO0FBQy9DLFNBQU82UixLQUFLLENBQUM3UixDQUFELEVBQUlrUSxXQUFKLENBQVo7QUFDRCxDQUZELEM7Ozs7Ozs7Ozs7O0FDSkF2UixPQUFPLENBQUN1QyxDQUFSLEdBQVksR0FBR3lKLG9CQUFmLEM7Ozs7Ozs7Ozs7O0FDQUE7QUFDQSxJQUFJMUcsT0FBTyxHQUFHbEYsbUJBQU8sQ0FBQyw0REFBRCxDQUFyQjs7QUFDQSxJQUFJbUgsSUFBSSxHQUFHbkgsbUJBQU8sQ0FBQyx3REFBRCxDQUFsQjs7QUFDQSxJQUFJcUYsS0FBSyxHQUFHckYsbUJBQU8sQ0FBQywwREFBRCxDQUFuQjs7QUFDQUwsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLFVBQVVtRyxHQUFWLEVBQWU0RCxJQUFmLEVBQXFCO0FBQ3BDLE1BQUkzRCxFQUFFLEdBQUcsQ0FBQ21CLElBQUksQ0FBQ3RGLE1BQUwsSUFBZSxFQUFoQixFQUFvQmtFLEdBQXBCLEtBQTRCbEUsTUFBTSxDQUFDa0UsR0FBRCxDQUEzQztBQUNBLE1BQUl3RCxHQUFHLEdBQUcsRUFBVjtBQUNBQSxLQUFHLENBQUN4RCxHQUFELENBQUgsR0FBVzRELElBQUksQ0FBQzNELEVBQUQsQ0FBZjtBQUNBZCxTQUFPLENBQUNBLE9BQU8sQ0FBQzhELENBQVIsR0FBWTlELE9BQU8sQ0FBQ2dDLENBQVIsR0FBWTdCLEtBQUssQ0FBQyxZQUFZO0FBQUVXLE1BQUUsQ0FBQyxDQUFELENBQUY7QUFBUSxHQUF2QixDQUE5QixFQUF3RCxRQUF4RCxFQUFrRXVELEdBQWxFLENBQVA7QUFDRCxDQUxELEM7Ozs7Ozs7Ozs7O0FDSkEsSUFBSXRCLE9BQU8sR0FBR2pJLG1CQUFPLENBQUMsc0VBQUQsQ0FBckI7O0FBQ0EsSUFBSVUsU0FBUyxHQUFHVixtQkFBTyxDQUFDLG9FQUFELENBQXZCOztBQUNBLElBQUl1SSxNQUFNLEdBQUd2SSxtQkFBTyxDQUFDLG9FQUFELENBQVAsQ0FBeUJtQyxDQUF0Qzs7QUFDQXhDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixVQUFVd1QsU0FBVixFQUFxQjtBQUNwQyxTQUFPLFVBQVV2VCxFQUFWLEVBQWM7QUFDbkIsUUFBSW9CLENBQUMsR0FBR1AsU0FBUyxDQUFDYixFQUFELENBQWpCO0FBQ0EsUUFBSTJNLElBQUksR0FBR3ZFLE9BQU8sQ0FBQ2hILENBQUQsQ0FBbEI7QUFDQSxRQUFJQyxNQUFNLEdBQUdzTCxJQUFJLENBQUN0TCxNQUFsQjtBQUNBLFFBQUlrRCxDQUFDLEdBQUcsQ0FBUjtBQUNBLFFBQUlnRSxNQUFNLEdBQUcsRUFBYjtBQUNBLFFBQUkvSCxHQUFKOztBQUNBLFdBQU9hLE1BQU0sR0FBR2tELENBQWhCLEVBQW1CLElBQUltRSxNQUFNLENBQUN2RyxJQUFQLENBQVlmLENBQVosRUFBZVosR0FBRyxHQUFHbU0sSUFBSSxDQUFDcEksQ0FBQyxFQUFGLENBQXpCLENBQUosRUFBcUM7QUFDdERnRSxZQUFNLENBQUNJLElBQVAsQ0FBWTRLLFNBQVMsR0FBRyxDQUFDL1MsR0FBRCxFQUFNWSxDQUFDLENBQUNaLEdBQUQsQ0FBUCxDQUFILEdBQW1CWSxDQUFDLENBQUNaLEdBQUQsQ0FBekM7QUFDRDs7QUFBQyxXQUFPK0gsTUFBUDtBQUNILEdBVkQ7QUFXRCxDQVpELEM7Ozs7Ozs7Ozs7O0FDSEF6SSxNQUFNLENBQUNDLE9BQVAsR0FBaUIsVUFBVStKLElBQVYsRUFBZ0I7QUFDL0IsTUFBSTtBQUNGLFdBQU87QUFBRWpJLE9BQUMsRUFBRSxLQUFMO0FBQVkrQyxPQUFDLEVBQUVrRixJQUFJO0FBQW5CLEtBQVA7QUFDRCxHQUZELENBRUUsT0FBT2pJLENBQVAsRUFBVTtBQUNWLFdBQU87QUFBRUEsT0FBQyxFQUFFLElBQUw7QUFBVytDLE9BQUMsRUFBRS9DO0FBQWQsS0FBUDtBQUNEO0FBQ0YsQ0FORCxDOzs7Ozs7Ozs7OztBQ0FBLElBQUk0SSxRQUFRLEdBQUd0SyxtQkFBTyxDQUFDLGtFQUFELENBQXRCOztBQUNBLElBQUlTLFFBQVEsR0FBR1QsbUJBQU8sQ0FBQyxrRUFBRCxDQUF0Qjs7QUFDQSxJQUFJcVQsb0JBQW9CLEdBQUdyVCxtQkFBTyxDQUFDLDRGQUFELENBQWxDOztBQUVBTCxNQUFNLENBQUNDLE9BQVAsR0FBaUIsVUFBVWdFLENBQVYsRUFBYTBQLENBQWIsRUFBZ0I7QUFDL0JoSixVQUFRLENBQUMxRyxDQUFELENBQVI7QUFDQSxNQUFJbkQsUUFBUSxDQUFDNlMsQ0FBRCxDQUFSLElBQWVBLENBQUMsQ0FBQ3ZNLFdBQUYsS0FBa0JuRCxDQUFyQyxFQUF3QyxPQUFPMFAsQ0FBUDtBQUN4QyxNQUFJQyxpQkFBaUIsR0FBR0Ysb0JBQW9CLENBQUNsUixDQUFyQixDQUF1QnlCLENBQXZCLENBQXhCO0FBQ0EsTUFBSW1NLE9BQU8sR0FBR3dELGlCQUFpQixDQUFDeEQsT0FBaEM7QUFDQUEsU0FBTyxDQUFDdUQsQ0FBRCxDQUFQO0FBQ0EsU0FBT0MsaUJBQWlCLENBQUN2RCxPQUF6QjtBQUNELENBUEQsQzs7Ozs7Ozs7Ozs7QUNKQXJRLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixVQUFVNFQsTUFBVixFQUFrQnBTLEtBQWxCLEVBQXlCO0FBQ3hDLFNBQU87QUFDTHFTLGNBQVUsRUFBRSxFQUFFRCxNQUFNLEdBQUcsQ0FBWCxDQURQO0FBRUxFLGdCQUFZLEVBQUUsRUFBRUYsTUFBTSxHQUFHLENBQVgsQ0FGVDtBQUdMRyxZQUFRLEVBQUUsRUFBRUgsTUFBTSxHQUFHLENBQVgsQ0FITDtBQUlMcFMsU0FBSyxFQUFFQTtBQUpGLEdBQVA7QUFNRCxDQVBELEM7Ozs7Ozs7Ozs7O0FDQUEsSUFBSStELFFBQVEsR0FBR25GLG1CQUFPLENBQUMsZ0VBQUQsQ0FBdEI7O0FBQ0FMLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixVQUFVa0gsTUFBVixFQUFrQmdMLEdBQWxCLEVBQXVCbEUsSUFBdkIsRUFBNkI7QUFDNUMsT0FBSyxJQUFJdk4sR0FBVCxJQUFnQnlSLEdBQWhCLEVBQXFCM00sUUFBUSxDQUFDMkIsTUFBRCxFQUFTekcsR0FBVCxFQUFjeVIsR0FBRyxDQUFDelIsR0FBRCxDQUFqQixFQUF3QnVOLElBQXhCLENBQVI7O0FBQ3JCLFNBQU85RyxNQUFQO0FBQ0QsQ0FIRCxDOzs7Ozs7Ozs7OztBQ0RBLElBQUk3QixNQUFNLEdBQUdqRixtQkFBTyxDQUFDLDREQUFELENBQXBCOztBQUNBLElBQUl5SSxJQUFJLEdBQUd6SSxtQkFBTyxDQUFDLHdEQUFELENBQWxCOztBQUNBLElBQUkwRSxHQUFHLEdBQUcxRSxtQkFBTyxDQUFDLHNEQUFELENBQWpCOztBQUNBLElBQUk0VCxHQUFHLEdBQUc1VCxtQkFBTyxDQUFDLHNEQUFELENBQVAsQ0FBa0IsS0FBbEIsQ0FBVjs7QUFDQSxJQUFJNlQsU0FBUyxHQUFHLFVBQWhCO0FBQ0EsSUFBSUMsU0FBUyxHQUFHdEssUUFBUSxDQUFDcUssU0FBRCxDQUF4QjtBQUNBLElBQUlFLEdBQUcsR0FBRyxDQUFDLEtBQUtELFNBQU4sRUFBaUI5TCxLQUFqQixDQUF1QjZMLFNBQXZCLENBQVY7O0FBRUE3VCxtQkFBTyxDQUFDLHdEQUFELENBQVAsQ0FBbUJnVSxhQUFuQixHQUFtQyxVQUFVblUsRUFBVixFQUFjO0FBQy9DLFNBQU9pVSxTQUFTLENBQUM5UixJQUFWLENBQWVuQyxFQUFmLENBQVA7QUFDRCxDQUZEOztBQUlBLENBQUNGLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixVQUFVcUIsQ0FBVixFQUFhWixHQUFiLEVBQWtCNFQsR0FBbEIsRUFBdUJyRyxJQUF2QixFQUE2QjtBQUM3QyxNQUFJc0csVUFBVSxHQUFHLE9BQU9ELEdBQVAsSUFBYyxVQUEvQjtBQUNBLE1BQUlDLFVBQUosRUFBZ0J4UCxHQUFHLENBQUN1UCxHQUFELEVBQU0sTUFBTixDQUFILElBQW9CeEwsSUFBSSxDQUFDd0wsR0FBRCxFQUFNLE1BQU4sRUFBYzVULEdBQWQsQ0FBeEI7QUFDaEIsTUFBSVksQ0FBQyxDQUFDWixHQUFELENBQUQsS0FBVzRULEdBQWYsRUFBb0I7QUFDcEIsTUFBSUMsVUFBSixFQUFnQnhQLEdBQUcsQ0FBQ3VQLEdBQUQsRUFBTUwsR0FBTixDQUFILElBQWlCbkwsSUFBSSxDQUFDd0wsR0FBRCxFQUFNTCxHQUFOLEVBQVczUyxDQUFDLENBQUNaLEdBQUQsQ0FBRCxHQUFTLEtBQUtZLENBQUMsQ0FBQ1osR0FBRCxDQUFmLEdBQXVCMFQsR0FBRyxDQUFDakQsSUFBSixDQUFTNUcsTUFBTSxDQUFDN0osR0FBRCxDQUFmLENBQWxDLENBQXJCOztBQUNoQixNQUFJWSxDQUFDLEtBQUtnRSxNQUFWLEVBQWtCO0FBQ2hCaEUsS0FBQyxDQUFDWixHQUFELENBQUQsR0FBUzRULEdBQVQ7QUFDRCxHQUZELE1BRU8sSUFBSSxDQUFDckcsSUFBTCxFQUFXO0FBQ2hCLFdBQU8zTSxDQUFDLENBQUNaLEdBQUQsQ0FBUjtBQUNBb0ksUUFBSSxDQUFDeEgsQ0FBRCxFQUFJWixHQUFKLEVBQVM0VCxHQUFULENBQUo7QUFDRCxHQUhNLE1BR0EsSUFBSWhULENBQUMsQ0FBQ1osR0FBRCxDQUFMLEVBQVk7QUFDakJZLEtBQUMsQ0FBQ1osR0FBRCxDQUFELEdBQVM0VCxHQUFUO0FBQ0QsR0FGTSxNQUVBO0FBQ0x4TCxRQUFJLENBQUN4SCxDQUFELEVBQUlaLEdBQUosRUFBUzRULEdBQVQsQ0FBSjtBQUNELEdBZDRDLENBZS9DOztBQUNDLENBaEJELEVBZ0JHekssUUFBUSxDQUFDckosU0FoQlosRUFnQnVCMFQsU0FoQnZCLEVBZ0JrQyxTQUFTOVIsUUFBVCxHQUFvQjtBQUNwRCxTQUFPLE9BQU8sSUFBUCxJQUFlLFVBQWYsSUFBNkIsS0FBSzZSLEdBQUwsQ0FBN0IsSUFBMENFLFNBQVMsQ0FBQzlSLElBQVYsQ0FBZSxJQUFmLENBQWpEO0FBQ0QsQ0FsQkQsRTs7Ozs7Ozs7Ozs7QUNaQTs7QUFDQTtBQUNBLElBQUl2QixRQUFRLEdBQUdULG1CQUFPLENBQUMsa0VBQUQsQ0FBdEI7O0FBQ0EsSUFBSXNLLFFBQVEsR0FBR3RLLG1CQUFPLENBQUMsa0VBQUQsQ0FBdEI7O0FBQ0EsSUFBSW1VLEtBQUssR0FBRyxVQUFVbFQsQ0FBVixFQUFhNEUsS0FBYixFQUFvQjtBQUM5QnlFLFVBQVEsQ0FBQ3JKLENBQUQsQ0FBUjtBQUNBLE1BQUksQ0FBQ1IsUUFBUSxDQUFDb0YsS0FBRCxDQUFULElBQW9CQSxLQUFLLEtBQUssSUFBbEMsRUFBd0MsTUFBTS9GLFNBQVMsQ0FBQytGLEtBQUssR0FBRywyQkFBVCxDQUFmO0FBQ3pDLENBSEQ7O0FBSUFsRyxNQUFNLENBQUNDLE9BQVAsR0FBaUI7QUFDZnVHLEtBQUcsRUFBRXRFLE1BQU0sQ0FBQzRKLGNBQVAsS0FBMEIsZUFBZSxFQUFmLEdBQW9CO0FBQ2pELFlBQVUySSxJQUFWLEVBQWdCQyxLQUFoQixFQUF1QmxPLEdBQXZCLEVBQTRCO0FBQzFCLFFBQUk7QUFDRkEsU0FBRyxHQUFHbkcsbUJBQU8sQ0FBQyxzREFBRCxDQUFQLENBQWtCd0osUUFBUSxDQUFDeEgsSUFBM0IsRUFBaUNoQyxtQkFBTyxDQUFDLHNFQUFELENBQVAsQ0FBMEJtQyxDQUExQixDQUE0Qk4sTUFBTSxDQUFDMUIsU0FBbkMsRUFBOEMsV0FBOUMsRUFBMkRnRyxHQUE1RixFQUFpRyxDQUFqRyxDQUFOO0FBQ0FBLFNBQUcsQ0FBQ2lPLElBQUQsRUFBTyxFQUFQLENBQUg7QUFDQUMsV0FBSyxHQUFHLEVBQUVELElBQUksWUFBWWxVLEtBQWxCLENBQVI7QUFDRCxLQUpELENBSUUsT0FBT3dCLENBQVAsRUFBVTtBQUFFMlMsV0FBSyxHQUFHLElBQVI7QUFBZTs7QUFDN0IsV0FBTyxTQUFTNUksY0FBVCxDQUF3QnhLLENBQXhCLEVBQTJCNEUsS0FBM0IsRUFBa0M7QUFDdkNzTyxXQUFLLENBQUNsVCxDQUFELEVBQUk0RSxLQUFKLENBQUw7QUFDQSxVQUFJd08sS0FBSixFQUFXcFQsQ0FBQyxDQUFDcVQsU0FBRixHQUFjek8sS0FBZCxDQUFYLEtBQ0tNLEdBQUcsQ0FBQ2xGLENBQUQsRUFBSTRFLEtBQUosQ0FBSDtBQUNMLGFBQU81RSxDQUFQO0FBQ0QsS0FMRDtBQU1ELEdBWkQsQ0FZRSxFQVpGLEVBWU0sS0FaTixDQUQ2QixHQWFkYixTQWJaLENBRFU7QUFlZitULE9BQUssRUFBRUE7QUFmUSxDQUFqQixDOzs7Ozs7Ozs7Ozs7QUNSYTs7QUFDYixJQUFJbFAsTUFBTSxHQUFHakYsbUJBQU8sQ0FBQyw0REFBRCxDQUFwQjs7QUFDQSxJQUFJa0MsRUFBRSxHQUFHbEMsbUJBQU8sQ0FBQyxrRUFBRCxDQUFoQjs7QUFDQSxJQUFJNEMsV0FBVyxHQUFHNUMsbUJBQU8sQ0FBQyxzRUFBRCxDQUF6Qjs7QUFDQSxJQUFJdVUsT0FBTyxHQUFHdlUsbUJBQU8sQ0FBQyxzREFBRCxDQUFQLENBQWtCLFNBQWxCLENBQWQ7O0FBRUFMLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixVQUFVbUcsR0FBVixFQUFlO0FBQzlCLE1BQUluQyxDQUFDLEdBQUdxQixNQUFNLENBQUNjLEdBQUQsQ0FBZDtBQUNBLE1BQUluRCxXQUFXLElBQUlnQixDQUFmLElBQW9CLENBQUNBLENBQUMsQ0FBQzJRLE9BQUQsQ0FBMUIsRUFBcUNyUyxFQUFFLENBQUNDLENBQUgsQ0FBS3lCLENBQUwsRUFBUTJRLE9BQVIsRUFBaUI7QUFDcERiLGdCQUFZLEVBQUUsSUFEc0M7QUFFcEQvTyxPQUFHLEVBQUUsWUFBWTtBQUFFLGFBQU8sSUFBUDtBQUFjO0FBRm1CLEdBQWpCO0FBSXRDLENBTkQsQzs7Ozs7Ozs7Ozs7QUNOQSxJQUFJQyxHQUFHLEdBQUc1RSxtQkFBTyxDQUFDLGtFQUFELENBQVAsQ0FBd0JtQyxDQUFsQzs7QUFDQSxJQUFJdUMsR0FBRyxHQUFHMUUsbUJBQU8sQ0FBQyxzREFBRCxDQUFqQjs7QUFDQSxJQUFJc0IsR0FBRyxHQUFHdEIsbUJBQU8sQ0FBQyxzREFBRCxDQUFQLENBQWtCLGFBQWxCLENBQVY7O0FBRUFMLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixVQUFVQyxFQUFWLEVBQWMyVSxHQUFkLEVBQW1CQyxJQUFuQixFQUF5QjtBQUN4QyxNQUFJNVUsRUFBRSxJQUFJLENBQUM2RSxHQUFHLENBQUM3RSxFQUFFLEdBQUc0VSxJQUFJLEdBQUc1VSxFQUFILEdBQVFBLEVBQUUsQ0FBQ00sU0FBckIsRUFBZ0NtQixHQUFoQyxDQUFkLEVBQW9Ec0QsR0FBRyxDQUFDL0UsRUFBRCxFQUFLeUIsR0FBTCxFQUFVO0FBQUVvUyxnQkFBWSxFQUFFLElBQWhCO0FBQXNCdFMsU0FBSyxFQUFFb1Q7QUFBN0IsR0FBVixDQUFIO0FBQ3JELENBRkQsQzs7Ozs7Ozs7Ozs7QUNKQSxJQUFJRSxNQUFNLEdBQUcxVSxtQkFBTyxDQUFDLDREQUFELENBQVAsQ0FBcUIsTUFBckIsQ0FBYjs7QUFDQSxJQUFJMlUsR0FBRyxHQUFHM1UsbUJBQU8sQ0FBQyxzREFBRCxDQUFqQjs7QUFDQUwsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLFVBQVVTLEdBQVYsRUFBZTtBQUM5QixTQUFPcVUsTUFBTSxDQUFDclUsR0FBRCxDQUFOLEtBQWdCcVUsTUFBTSxDQUFDclUsR0FBRCxDQUFOLEdBQWNzVSxHQUFHLENBQUN0VSxHQUFELENBQWpDLENBQVA7QUFDRCxDQUZELEM7Ozs7Ozs7Ozs7O0FDRkEsSUFBSThHLElBQUksR0FBR25ILG1CQUFPLENBQUMsd0RBQUQsQ0FBbEI7O0FBQ0EsSUFBSWlGLE1BQU0sR0FBR2pGLG1CQUFPLENBQUMsNERBQUQsQ0FBcEI7O0FBQ0EsSUFBSTRVLE1BQU0sR0FBRyxvQkFBYjtBQUNBLElBQUlDLEtBQUssR0FBRzVQLE1BQU0sQ0FBQzJQLE1BQUQsQ0FBTixLQUFtQjNQLE1BQU0sQ0FBQzJQLE1BQUQsQ0FBTixHQUFpQixFQUFwQyxDQUFaO0FBRUEsQ0FBQ2pWLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixVQUFVUyxHQUFWLEVBQWVlLEtBQWYsRUFBc0I7QUFDdEMsU0FBT3lULEtBQUssQ0FBQ3hVLEdBQUQsQ0FBTCxLQUFld1UsS0FBSyxDQUFDeFUsR0FBRCxDQUFMLEdBQWFlLEtBQUssS0FBS2hCLFNBQVYsR0FBc0JnQixLQUF0QixHQUE4QixFQUExRCxDQUFQO0FBQ0QsQ0FGRCxFQUVHLFVBRkgsRUFFZSxFQUZmLEVBRW1Cb0gsSUFGbkIsQ0FFd0I7QUFDdEJwQixTQUFPLEVBQUVELElBQUksQ0FBQ0MsT0FEUTtBQUV0QjBOLE1BQUksRUFBRTlVLG1CQUFPLENBQUMsOERBQUQsQ0FBUCxHQUF3QixNQUF4QixHQUFpQyxRQUZqQjtBQUd0QitVLFdBQVMsRUFBRTtBQUhXLENBRnhCLEU7Ozs7Ozs7Ozs7O0FDTEE7QUFDQSxJQUFJekssUUFBUSxHQUFHdEssbUJBQU8sQ0FBQyxrRUFBRCxDQUF0Qjs7QUFDQSxJQUFJeUgsU0FBUyxHQUFHekgsbUJBQU8sQ0FBQyxvRUFBRCxDQUF2Qjs7QUFDQSxJQUFJdVUsT0FBTyxHQUFHdlUsbUJBQU8sQ0FBQyxzREFBRCxDQUFQLENBQWtCLFNBQWxCLENBQWQ7O0FBQ0FMLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixVQUFVcUIsQ0FBVixFQUFhK1QsQ0FBYixFQUFnQjtBQUMvQixNQUFJcFIsQ0FBQyxHQUFHMEcsUUFBUSxDQUFDckosQ0FBRCxDQUFSLENBQVk4RixXQUFwQjtBQUNBLE1BQUlpQyxDQUFKO0FBQ0EsU0FBT3BGLENBQUMsS0FBS3hELFNBQU4sSUFBbUIsQ0FBQzRJLENBQUMsR0FBR3NCLFFBQVEsQ0FBQzFHLENBQUQsQ0FBUixDQUFZMlEsT0FBWixDQUFMLEtBQThCblUsU0FBakQsR0FBNkQ0VSxDQUE3RCxHQUFpRXZOLFNBQVMsQ0FBQ3VCLENBQUQsQ0FBakY7QUFDRCxDQUpELEM7Ozs7Ozs7Ozs7O0FDSkEsSUFBSWlNLFNBQVMsR0FBR2pWLG1CQUFPLENBQUMsb0VBQUQsQ0FBdkI7O0FBQ0EsSUFBSTRKLE9BQU8sR0FBRzVKLG1CQUFPLENBQUMsOERBQUQsQ0FBckIsQyxDQUNBO0FBQ0E7OztBQUNBTCxNQUFNLENBQUNDLE9BQVAsR0FBaUIsVUFBVWlVLFNBQVYsRUFBcUI7QUFDcEMsU0FBTyxVQUFVNVEsSUFBVixFQUFnQmlTLEdBQWhCLEVBQXFCO0FBQzFCLFFBQUlDLENBQUMsR0FBR2pMLE1BQU0sQ0FBQ04sT0FBTyxDQUFDM0csSUFBRCxDQUFSLENBQWQ7QUFDQSxRQUFJbUIsQ0FBQyxHQUFHNlEsU0FBUyxDQUFDQyxHQUFELENBQWpCO0FBQ0EsUUFBSUUsQ0FBQyxHQUFHRCxDQUFDLENBQUNqVSxNQUFWO0FBQ0EsUUFBSStFLENBQUosRUFBT0csQ0FBUDtBQUNBLFFBQUloQyxDQUFDLEdBQUcsQ0FBSixJQUFTQSxDQUFDLElBQUlnUixDQUFsQixFQUFxQixPQUFPdkIsU0FBUyxHQUFHLEVBQUgsR0FBUXpULFNBQXhCO0FBQ3JCNkYsS0FBQyxHQUFHa1AsQ0FBQyxDQUFDRSxVQUFGLENBQWFqUixDQUFiLENBQUo7QUFDQSxXQUFPNkIsQ0FBQyxHQUFHLE1BQUosSUFBY0EsQ0FBQyxHQUFHLE1BQWxCLElBQTRCN0IsQ0FBQyxHQUFHLENBQUosS0FBVWdSLENBQXRDLElBQTJDLENBQUNoUCxDQUFDLEdBQUcrTyxDQUFDLENBQUNFLFVBQUYsQ0FBYWpSLENBQUMsR0FBRyxDQUFqQixDQUFMLElBQTRCLE1BQXZFLElBQWlGZ0MsQ0FBQyxHQUFHLE1BQXJGLEdBQ0h5TixTQUFTLEdBQUdzQixDQUFDLENBQUNHLE1BQUYsQ0FBU2xSLENBQVQsQ0FBSCxHQUFpQjZCLENBRHZCLEdBRUg0TixTQUFTLEdBQUdzQixDQUFDLENBQUNsVCxLQUFGLENBQVFtQyxDQUFSLEVBQVdBLENBQUMsR0FBRyxDQUFmLENBQUgsR0FBdUIsQ0FBQzZCLENBQUMsR0FBRyxNQUFKLElBQWMsRUFBZixLQUFzQkcsQ0FBQyxHQUFHLE1BQTFCLElBQW9DLE9BRnhFO0FBR0QsR0FWRDtBQVdELENBWkQsQzs7Ozs7Ozs7Ozs7QUNKQSxJQUFJOUQsR0FBRyxHQUFHdEMsbUJBQU8sQ0FBQyxzREFBRCxDQUFqQjs7QUFDQSxJQUFJdVYsTUFBTSxHQUFHdlYsbUJBQU8sQ0FBQyw0REFBRCxDQUFwQjs7QUFDQSxJQUFJd1YsSUFBSSxHQUFHeFYsbUJBQU8sQ0FBQyx3REFBRCxDQUFsQjs7QUFDQSxJQUFJeVYsR0FBRyxHQUFHelYsbUJBQU8sQ0FBQyxvRUFBRCxDQUFqQjs7QUFDQSxJQUFJaUYsTUFBTSxHQUFHakYsbUJBQU8sQ0FBQyw0REFBRCxDQUFwQjs7QUFDQSxJQUFJNE8sT0FBTyxHQUFHM0osTUFBTSxDQUFDMkosT0FBckI7QUFDQSxJQUFJOEcsT0FBTyxHQUFHelEsTUFBTSxDQUFDMFEsWUFBckI7QUFDQSxJQUFJQyxTQUFTLEdBQUczUSxNQUFNLENBQUM0USxjQUF2QjtBQUNBLElBQUlDLGNBQWMsR0FBRzdRLE1BQU0sQ0FBQzZRLGNBQTVCO0FBQ0EsSUFBSUMsUUFBUSxHQUFHOVEsTUFBTSxDQUFDOFEsUUFBdEI7QUFDQSxJQUFJQyxPQUFPLEdBQUcsQ0FBZDtBQUNBLElBQUlDLEtBQUssR0FBRyxFQUFaO0FBQ0EsSUFBSUMsa0JBQWtCLEdBQUcsb0JBQXpCO0FBQ0EsSUFBSUMsS0FBSixFQUFXQyxPQUFYLEVBQW9CQyxJQUFwQjs7QUFDQSxJQUFJQyxHQUFHLEdBQUcsWUFBWTtBQUNwQixNQUFJdEksRUFBRSxHQUFHLENBQUMsSUFBVixDQURvQixDQUVwQjs7QUFDQSxNQUFJaUksS0FBSyxDQUFDMUssY0FBTixDQUFxQnlDLEVBQXJCLENBQUosRUFBOEI7QUFDNUIsUUFBSWhJLEVBQUUsR0FBR2lRLEtBQUssQ0FBQ2pJLEVBQUQsQ0FBZDtBQUNBLFdBQU9pSSxLQUFLLENBQUNqSSxFQUFELENBQVo7QUFDQWhJLE1BQUU7QUFDSDtBQUNGLENBUkQ7O0FBU0EsSUFBSXVRLFFBQVEsR0FBRyxVQUFVQyxLQUFWLEVBQWlCO0FBQzlCRixLQUFHLENBQUN0VSxJQUFKLENBQVN3VSxLQUFLLENBQUN2UyxJQUFmO0FBQ0QsQ0FGRCxDLENBR0E7OztBQUNBLElBQUksQ0FBQ3lSLE9BQUQsSUFBWSxDQUFDRSxTQUFqQixFQUE0QjtBQUMxQkYsU0FBTyxHQUFHLFNBQVNDLFlBQVQsQ0FBc0IzUCxFQUF0QixFQUEwQjtBQUNsQyxRQUFJMEYsSUFBSSxHQUFHLEVBQVg7QUFDQSxRQUFJdEgsQ0FBQyxHQUFHLENBQVI7O0FBQ0EsV0FBTzVDLFNBQVMsQ0FBQ04sTUFBVixHQUFtQmtELENBQTFCLEVBQTZCc0gsSUFBSSxDQUFDbEQsSUFBTCxDQUFVaEgsU0FBUyxDQUFDNEMsQ0FBQyxFQUFGLENBQW5COztBQUM3QjZSLFNBQUssQ0FBQyxFQUFFRCxPQUFILENBQUwsR0FBbUIsWUFBWTtBQUM3QjtBQUNBVCxZQUFNLENBQUMsT0FBT3ZQLEVBQVAsSUFBYSxVQUFiLEdBQTBCQSxFQUExQixHQUErQndELFFBQVEsQ0FBQ3hELEVBQUQsQ0FBeEMsRUFBOEMwRixJQUE5QyxDQUFOO0FBQ0QsS0FIRDs7QUFJQXlLLFNBQUssQ0FBQ0gsT0FBRCxDQUFMO0FBQ0EsV0FBT0EsT0FBUDtBQUNELEdBVkQ7O0FBV0FKLFdBQVMsR0FBRyxTQUFTQyxjQUFULENBQXdCN0gsRUFBeEIsRUFBNEI7QUFDdEMsV0FBT2lJLEtBQUssQ0FBQ2pJLEVBQUQsQ0FBWjtBQUNELEdBRkQsQ0FaMEIsQ0FlMUI7OztBQUNBLE1BQUloTyxtQkFBTyxDQUFDLHNEQUFELENBQVAsQ0FBa0I0TyxPQUFsQixLQUE4QixTQUFsQyxFQUE2QztBQUMzQ3VILFNBQUssR0FBRyxVQUFVbkksRUFBVixFQUFjO0FBQ3BCWSxhQUFPLENBQUNXLFFBQVIsQ0FBaUJqTixHQUFHLENBQUNnVSxHQUFELEVBQU10SSxFQUFOLEVBQVUsQ0FBVixDQUFwQjtBQUNELEtBRkQsQ0FEMkMsQ0FJN0M7O0FBQ0MsR0FMRCxNQUtPLElBQUkrSCxRQUFRLElBQUlBLFFBQVEsQ0FBQ1UsR0FBekIsRUFBOEI7QUFDbkNOLFNBQUssR0FBRyxVQUFVbkksRUFBVixFQUFjO0FBQ3BCK0gsY0FBUSxDQUFDVSxHQUFULENBQWFuVSxHQUFHLENBQUNnVSxHQUFELEVBQU10SSxFQUFOLEVBQVUsQ0FBVixDQUFoQjtBQUNELEtBRkQsQ0FEbUMsQ0FJckM7O0FBQ0MsR0FMTSxNQUtBLElBQUk4SCxjQUFKLEVBQW9CO0FBQ3pCTSxXQUFPLEdBQUcsSUFBSU4sY0FBSixFQUFWO0FBQ0FPLFFBQUksR0FBR0QsT0FBTyxDQUFDTSxLQUFmO0FBQ0FOLFdBQU8sQ0FBQ08sS0FBUixDQUFjQyxTQUFkLEdBQTBCTCxRQUExQjtBQUNBSixTQUFLLEdBQUc3VCxHQUFHLENBQUMrVCxJQUFJLENBQUNRLFdBQU4sRUFBbUJSLElBQW5CLEVBQXlCLENBQXpCLENBQVgsQ0FKeUIsQ0FLM0I7QUFDQTtBQUNDLEdBUE0sTUFPQSxJQUFJcFIsTUFBTSxDQUFDNlIsZ0JBQVAsSUFBMkIsT0FBT0QsV0FBUCxJQUFzQixVQUFqRCxJQUErRCxDQUFDNVIsTUFBTSxDQUFDOFIsYUFBM0UsRUFBMEY7QUFDL0ZaLFNBQUssR0FBRyxVQUFVbkksRUFBVixFQUFjO0FBQ3BCL0ksWUFBTSxDQUFDNFIsV0FBUCxDQUFtQjdJLEVBQUUsR0FBRyxFQUF4QixFQUE0QixHQUE1QjtBQUNELEtBRkQ7O0FBR0EvSSxVQUFNLENBQUM2UixnQkFBUCxDQUF3QixTQUF4QixFQUFtQ1AsUUFBbkMsRUFBNkMsS0FBN0MsRUFKK0YsQ0FLakc7QUFDQyxHQU5NLE1BTUEsSUFBSUwsa0JBQWtCLElBQUlULEdBQUcsQ0FBQyxRQUFELENBQTdCLEVBQXlDO0FBQzlDVSxTQUFLLEdBQUcsVUFBVW5JLEVBQVYsRUFBYztBQUNwQndILFVBQUksQ0FBQzNELFdBQUwsQ0FBaUI0RCxHQUFHLENBQUMsUUFBRCxDQUFwQixFQUFnQ1Msa0JBQWhDLElBQXNELFlBQVk7QUFDaEVWLFlBQUksQ0FBQ3dCLFdBQUwsQ0FBaUIsSUFBakI7QUFDQVYsV0FBRyxDQUFDdFUsSUFBSixDQUFTZ00sRUFBVDtBQUNELE9BSEQ7QUFJRCxLQUxELENBRDhDLENBT2hEOztBQUNDLEdBUk0sTUFRQTtBQUNMbUksU0FBSyxHQUFHLFVBQVVuSSxFQUFWLEVBQWM7QUFDcEJpSixnQkFBVSxDQUFDM1UsR0FBRyxDQUFDZ1UsR0FBRCxFQUFNdEksRUFBTixFQUFVLENBQVYsQ0FBSixFQUFrQixDQUFsQixDQUFWO0FBQ0QsS0FGRDtBQUdEO0FBQ0Y7O0FBQ0RyTyxNQUFNLENBQUNDLE9BQVAsR0FBaUI7QUFDZnVHLEtBQUcsRUFBRXVQLE9BRFU7QUFFZjFSLE9BQUssRUFBRTRSO0FBRlEsQ0FBakIsQzs7Ozs7Ozs7Ozs7QUNoRkEsSUFBSVgsU0FBUyxHQUFHalYsbUJBQU8sQ0FBQyxvRUFBRCxDQUF2Qjs7QUFDQSxJQUFJa1gsR0FBRyxHQUFHOUwsSUFBSSxDQUFDOEwsR0FBZjtBQUNBLElBQUlDLEdBQUcsR0FBRy9MLElBQUksQ0FBQytMLEdBQWY7O0FBQ0F4WCxNQUFNLENBQUNDLE9BQVAsR0FBaUIsVUFBVXVCLEtBQVYsRUFBaUJELE1BQWpCLEVBQXlCO0FBQ3hDQyxPQUFLLEdBQUc4VCxTQUFTLENBQUM5VCxLQUFELENBQWpCO0FBQ0EsU0FBT0EsS0FBSyxHQUFHLENBQVIsR0FBWStWLEdBQUcsQ0FBQy9WLEtBQUssR0FBR0QsTUFBVCxFQUFpQixDQUFqQixDQUFmLEdBQXFDaVcsR0FBRyxDQUFDaFcsS0FBRCxFQUFRRCxNQUFSLENBQS9DO0FBQ0QsQ0FIRCxDOzs7Ozs7Ozs7OztBQ0hBO0FBQ0EsSUFBSWtXLElBQUksR0FBR2hNLElBQUksQ0FBQ2dNLElBQWhCO0FBQ0EsSUFBSUMsS0FBSyxHQUFHak0sSUFBSSxDQUFDaU0sS0FBakI7O0FBQ0ExWCxNQUFNLENBQUNDLE9BQVAsR0FBaUIsVUFBVUMsRUFBVixFQUFjO0FBQzdCLFNBQU95WCxLQUFLLENBQUN6WCxFQUFFLEdBQUcsQ0FBQ0EsRUFBUCxDQUFMLEdBQWtCLENBQWxCLEdBQXNCLENBQUNBLEVBQUUsR0FBRyxDQUFMLEdBQVN3WCxLQUFULEdBQWlCRCxJQUFsQixFQUF3QnZYLEVBQXhCLENBQTdCO0FBQ0QsQ0FGRCxDOzs7Ozs7Ozs7OztBQ0hBO0FBQ0EsSUFBSTJRLE9BQU8sR0FBR3hRLG1CQUFPLENBQUMsOERBQUQsQ0FBckI7O0FBQ0EsSUFBSTRKLE9BQU8sR0FBRzVKLG1CQUFPLENBQUMsOERBQUQsQ0FBckI7O0FBQ0FMLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixVQUFVQyxFQUFWLEVBQWM7QUFDN0IsU0FBTzJRLE9BQU8sQ0FBQzVHLE9BQU8sQ0FBQy9KLEVBQUQsQ0FBUixDQUFkO0FBQ0QsQ0FGRCxDOzs7Ozs7Ozs7OztBQ0hBO0FBQ0EsSUFBSW9WLFNBQVMsR0FBR2pWLG1CQUFPLENBQUMsb0VBQUQsQ0FBdkI7O0FBQ0EsSUFBSW1YLEdBQUcsR0FBRy9MLElBQUksQ0FBQytMLEdBQWY7O0FBQ0F4WCxNQUFNLENBQUNDLE9BQVAsR0FBaUIsVUFBVUMsRUFBVixFQUFjO0FBQzdCLFNBQU9BLEVBQUUsR0FBRyxDQUFMLEdBQVNzWCxHQUFHLENBQUNsQyxTQUFTLENBQUNwVixFQUFELENBQVYsRUFBZ0IsZ0JBQWhCLENBQVosR0FBZ0QsQ0FBdkQsQ0FENkIsQ0FDNkI7QUFDM0QsQ0FGRCxDOzs7Ozs7Ozs7OztBQ0hBO0FBQ0EsSUFBSStKLE9BQU8sR0FBRzVKLG1CQUFPLENBQUMsOERBQUQsQ0FBckI7O0FBQ0FMLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixVQUFVQyxFQUFWLEVBQWM7QUFDN0IsU0FBT2dDLE1BQU0sQ0FBQytILE9BQU8sQ0FBQy9KLEVBQUQsQ0FBUixDQUFiO0FBQ0QsQ0FGRCxDOzs7Ozs7Ozs7OztBQ0ZBO0FBQ0EsSUFBSVksUUFBUSxHQUFHVCxtQkFBTyxDQUFDLGtFQUFELENBQXRCLEMsQ0FDQTtBQUNBOzs7QUFDQUwsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLFVBQVVDLEVBQVYsRUFBY21KLENBQWQsRUFBaUI7QUFDaEMsTUFBSSxDQUFDdkksUUFBUSxDQUFDWixFQUFELENBQWIsRUFBbUIsT0FBT0EsRUFBUDtBQUNuQixNQUFJbUcsRUFBSixFQUFRaU8sR0FBUjtBQUNBLE1BQUlqTCxDQUFDLElBQUksUUFBUWhELEVBQUUsR0FBR25HLEVBQUUsQ0FBQ2tDLFFBQWhCLEtBQTZCLFVBQWxDLElBQWdELENBQUN0QixRQUFRLENBQUN3VCxHQUFHLEdBQUdqTyxFQUFFLENBQUNoRSxJQUFILENBQVFuQyxFQUFSLENBQVAsQ0FBN0QsRUFBa0YsT0FBT29VLEdBQVA7QUFDbEYsTUFBSSxRQUFRak8sRUFBRSxHQUFHbkcsRUFBRSxDQUFDMFgsT0FBaEIsS0FBNEIsVUFBNUIsSUFBMEMsQ0FBQzlXLFFBQVEsQ0FBQ3dULEdBQUcsR0FBR2pPLEVBQUUsQ0FBQ2hFLElBQUgsQ0FBUW5DLEVBQVIsQ0FBUCxDQUF2RCxFQUE0RSxPQUFPb1UsR0FBUDtBQUM1RSxNQUFJLENBQUNqTCxDQUFELElBQU0sUUFBUWhELEVBQUUsR0FBR25HLEVBQUUsQ0FBQ2tDLFFBQWhCLEtBQTZCLFVBQW5DLElBQWlELENBQUN0QixRQUFRLENBQUN3VCxHQUFHLEdBQUdqTyxFQUFFLENBQUNoRSxJQUFILENBQVFuQyxFQUFSLENBQVAsQ0FBOUQsRUFBbUYsT0FBT29VLEdBQVA7QUFDbkYsUUFBTW5VLFNBQVMsQ0FBQyx5Q0FBRCxDQUFmO0FBQ0QsQ0FQRCxDOzs7Ozs7Ozs7OztBQ0pBLElBQUlrTyxFQUFFLEdBQUcsQ0FBVDtBQUNBLElBQUl3SixFQUFFLEdBQUdwTSxJQUFJLENBQUNxTSxNQUFMLEVBQVQ7O0FBQ0E5WCxNQUFNLENBQUNDLE9BQVAsR0FBaUIsVUFBVVMsR0FBVixFQUFlO0FBQzlCLFNBQU8sVUFBVTJRLE1BQVYsQ0FBaUIzUSxHQUFHLEtBQUtELFNBQVIsR0FBb0IsRUFBcEIsR0FBeUJDLEdBQTFDLEVBQStDLElBQS9DLEVBQXFELENBQUMsRUFBRTJOLEVBQUYsR0FBT3dKLEVBQVIsRUFBWXpWLFFBQVosQ0FBcUIsRUFBckIsQ0FBckQsQ0FBUDtBQUNELENBRkQsQzs7Ozs7Ozs7Ozs7QUNGQSxJQUFJa0QsTUFBTSxHQUFHakYsbUJBQU8sQ0FBQyw0REFBRCxDQUFwQjs7QUFDQSxJQUFJd1AsU0FBUyxHQUFHdkssTUFBTSxDQUFDdUssU0FBdkI7QUFFQTdQLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjRQLFNBQVMsSUFBSUEsU0FBUyxDQUFDa0ksU0FBdkIsSUFBb0MsRUFBckQsQzs7Ozs7Ozs7Ozs7QUNIQSxJQUFJalgsUUFBUSxHQUFHVCxtQkFBTyxDQUFDLGtFQUFELENBQXRCOztBQUNBTCxNQUFNLENBQUNDLE9BQVAsR0FBaUIsVUFBVUMsRUFBVixFQUFjOFgsSUFBZCxFQUFvQjtBQUNuQyxNQUFJLENBQUNsWCxRQUFRLENBQUNaLEVBQUQsQ0FBVCxJQUFpQkEsRUFBRSxDQUFDaUUsRUFBSCxLQUFVNlQsSUFBL0IsRUFBcUMsTUFBTTdYLFNBQVMsQ0FBQyw0QkFBNEI2WCxJQUE1QixHQUFtQyxZQUFwQyxDQUFmO0FBQ3JDLFNBQU85WCxFQUFQO0FBQ0QsQ0FIRCxDOzs7Ozs7Ozs7OztBQ0RBLElBQUlvRixNQUFNLEdBQUdqRixtQkFBTyxDQUFDLDREQUFELENBQXBCOztBQUNBLElBQUltSCxJQUFJLEdBQUduSCxtQkFBTyxDQUFDLHdEQUFELENBQWxCOztBQUNBLElBQUlvTSxPQUFPLEdBQUdwTSxtQkFBTyxDQUFDLDhEQUFELENBQXJCOztBQUNBLElBQUk0WCxNQUFNLEdBQUc1WCxtQkFBTyxDQUFDLDhEQUFELENBQXBCOztBQUNBLElBQUk0SCxjQUFjLEdBQUc1SCxtQkFBTyxDQUFDLGtFQUFELENBQVAsQ0FBd0JtQyxDQUE3Qzs7QUFDQXhDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixVQUFVVyxJQUFWLEVBQWdCO0FBQy9CLE1BQUlzWCxPQUFPLEdBQUcxUSxJQUFJLENBQUN5SixNQUFMLEtBQWdCekosSUFBSSxDQUFDeUosTUFBTCxHQUFjeEUsT0FBTyxHQUFHLEVBQUgsR0FBUW5ILE1BQU0sQ0FBQzJMLE1BQVAsSUFBaUIsRUFBOUQsQ0FBZDtBQUNBLE1BQUlyUSxJQUFJLENBQUMrVSxNQUFMLENBQVksQ0FBWixLQUFrQixHQUFsQixJQUF5QixFQUFFL1UsSUFBSSxJQUFJc1gsT0FBVixDQUE3QixFQUFpRGpRLGNBQWMsQ0FBQ2lRLE9BQUQsRUFBVXRYLElBQVYsRUFBZ0I7QUFBRWEsU0FBSyxFQUFFd1csTUFBTSxDQUFDelYsQ0FBUCxDQUFTNUIsSUFBVDtBQUFULEdBQWhCLENBQWQ7QUFDbEQsQ0FIRCxDOzs7Ozs7Ozs7OztBQ0xBWCxPQUFPLENBQUN1QyxDQUFSLEdBQVluQyxtQkFBTyxDQUFDLHNEQUFELENBQW5CLEM7Ozs7Ozs7Ozs7O0FDQUEsSUFBSTZVLEtBQUssR0FBRzdVLG1CQUFPLENBQUMsNERBQUQsQ0FBUCxDQUFxQixLQUFyQixDQUFaOztBQUNBLElBQUkyVSxHQUFHLEdBQUczVSxtQkFBTyxDQUFDLHNEQUFELENBQWpCOztBQUNBLElBQUk0USxNQUFNLEdBQUc1USxtQkFBTyxDQUFDLDREQUFELENBQVAsQ0FBcUI0USxNQUFsQzs7QUFDQSxJQUFJa0gsVUFBVSxHQUFHLE9BQU9sSCxNQUFQLElBQWlCLFVBQWxDOztBQUVBLElBQUltSCxRQUFRLEdBQUdwWSxNQUFNLENBQUNDLE9BQVAsR0FBaUIsVUFBVVcsSUFBVixFQUFnQjtBQUM5QyxTQUFPc1UsS0FBSyxDQUFDdFUsSUFBRCxDQUFMLEtBQWdCc1UsS0FBSyxDQUFDdFUsSUFBRCxDQUFMLEdBQ3JCdVgsVUFBVSxJQUFJbEgsTUFBTSxDQUFDclEsSUFBRCxDQUFwQixJQUE4QixDQUFDdVgsVUFBVSxHQUFHbEgsTUFBSCxHQUFZK0QsR0FBdkIsRUFBNEIsWUFBWXBVLElBQXhDLENBRHpCLENBQVA7QUFFRCxDQUhEOztBQUtBd1gsUUFBUSxDQUFDbEQsS0FBVCxHQUFpQkEsS0FBakIsQzs7Ozs7Ozs7Ozs7QUNWQSxJQUFJbUQsT0FBTyxHQUFHaFksbUJBQU8sQ0FBQyw4REFBRCxDQUFyQjs7QUFDQSxJQUFJK0ssUUFBUSxHQUFHL0ssbUJBQU8sQ0FBQyxzREFBRCxDQUFQLENBQWtCLFVBQWxCLENBQWY7O0FBQ0EsSUFBSTZMLFNBQVMsR0FBRzdMLG1CQUFPLENBQUMsa0VBQUQsQ0FBdkI7O0FBQ0FMLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQkksbUJBQU8sQ0FBQyx3REFBRCxDQUFQLENBQW1CaVksaUJBQW5CLEdBQXVDLFVBQVVwWSxFQUFWLEVBQWM7QUFDcEUsTUFBSUEsRUFBRSxJQUFJTyxTQUFWLEVBQXFCLE9BQU9QLEVBQUUsQ0FBQ2tMLFFBQUQsQ0FBRixJQUN2QmxMLEVBQUUsQ0FBQyxZQUFELENBRHFCLElBRXZCZ00sU0FBUyxDQUFDbU0sT0FBTyxDQUFDblksRUFBRCxDQUFSLENBRk87QUFHdEIsQ0FKRCxDOzs7Ozs7Ozs7Ozs7QUNIYTs7QUFDYixJQUFJeUMsR0FBRyxHQUFHdEMsbUJBQU8sQ0FBQyxzREFBRCxDQUFqQjs7QUFDQSxJQUFJa0YsT0FBTyxHQUFHbEYsbUJBQU8sQ0FBQyw0REFBRCxDQUFyQjs7QUFDQSxJQUFJdVEsUUFBUSxHQUFHdlEsbUJBQU8sQ0FBQyxrRUFBRCxDQUF0Qjs7QUFDQSxJQUFJZ0MsSUFBSSxHQUFHaEMsbUJBQU8sQ0FBQyxrRUFBRCxDQUFsQjs7QUFDQSxJQUFJMkssV0FBVyxHQUFHM0ssbUJBQU8sQ0FBQywwRUFBRCxDQUF6Qjs7QUFDQSxJQUFJVyxRQUFRLEdBQUdYLG1CQUFPLENBQUMsa0VBQUQsQ0FBdEI7O0FBQ0EsSUFBSWtZLGNBQWMsR0FBR2xZLG1CQUFPLENBQUMsOEVBQUQsQ0FBNUI7O0FBQ0EsSUFBSTRLLFNBQVMsR0FBRzVLLG1CQUFPLENBQUMsOEZBQUQsQ0FBdkI7O0FBRUFrRixPQUFPLENBQUNBLE9BQU8sQ0FBQzhELENBQVIsR0FBWTlELE9BQU8sQ0FBQ2dDLENBQVIsR0FBWSxDQUFDbEgsbUJBQU8sQ0FBQyxzRUFBRCxDQUFQLENBQTBCLFVBQVUyRyxJQUFWLEVBQWdCO0FBQUV6RyxPQUFLLENBQUN3TixJQUFOLENBQVcvRyxJQUFYO0FBQW1CLENBQS9ELENBQTFCLEVBQTRGLE9BQTVGLEVBQXFHO0FBQzFHO0FBQ0ErRyxNQUFJLEVBQUUsU0FBU0EsSUFBVCxDQUFjeUs7QUFBVTtBQUF4QixJQUF3RTtBQUM1RSxRQUFJbFgsQ0FBQyxHQUFHc1AsUUFBUSxDQUFDNEgsU0FBRCxDQUFoQjtBQUNBLFFBQUl2VSxDQUFDLEdBQUcsT0FBTyxJQUFQLElBQWUsVUFBZixHQUE0QixJQUE1QixHQUFtQzFELEtBQTNDO0FBQ0EsUUFBSTZRLElBQUksR0FBR3ZQLFNBQVMsQ0FBQ04sTUFBckI7QUFDQSxRQUFJa1gsS0FBSyxHQUFHckgsSUFBSSxHQUFHLENBQVAsR0FBV3ZQLFNBQVMsQ0FBQyxDQUFELENBQXBCLEdBQTBCcEIsU0FBdEM7QUFDQSxRQUFJaVksT0FBTyxHQUFHRCxLQUFLLEtBQUtoWSxTQUF4QjtBQUNBLFFBQUllLEtBQUssR0FBRyxDQUFaO0FBQ0EsUUFBSTZKLE1BQU0sR0FBR0osU0FBUyxDQUFDM0osQ0FBRCxDQUF0QjtBQUNBLFFBQUlDLE1BQUosRUFBWWtILE1BQVosRUFBb0IxRixJQUFwQixFQUEwQnVJLFFBQTFCO0FBQ0EsUUFBSW9OLE9BQUosRUFBYUQsS0FBSyxHQUFHOVYsR0FBRyxDQUFDOFYsS0FBRCxFQUFRckgsSUFBSSxHQUFHLENBQVAsR0FBV3ZQLFNBQVMsQ0FBQyxDQUFELENBQXBCLEdBQTBCcEIsU0FBbEMsRUFBNkMsQ0FBN0MsQ0FBWCxDQVQrRCxDQVU1RTs7QUFDQSxRQUFJNEssTUFBTSxJQUFJNUssU0FBVixJQUF1QixFQUFFd0QsQ0FBQyxJQUFJMUQsS0FBTCxJQUFjeUssV0FBVyxDQUFDSyxNQUFELENBQTNCLENBQTNCLEVBQWlFO0FBQy9ELFdBQUtDLFFBQVEsR0FBR0QsTUFBTSxDQUFDaEosSUFBUCxDQUFZZixDQUFaLENBQVgsRUFBMkJtSCxNQUFNLEdBQUcsSUFBSXhFLENBQUosRUFBekMsRUFBa0QsQ0FBQyxDQUFDbEIsSUFBSSxHQUFHdUksUUFBUSxDQUFDNUcsSUFBVCxFQUFSLEVBQXlCNkcsSUFBNUUsRUFBa0YvSixLQUFLLEVBQXZGLEVBQTJGO0FBQ3pGK1csc0JBQWMsQ0FBQzlQLE1BQUQsRUFBU2pILEtBQVQsRUFBZ0JrWCxPQUFPLEdBQUdyVyxJQUFJLENBQUNpSixRQUFELEVBQVdtTixLQUFYLEVBQWtCLENBQUMxVixJQUFJLENBQUN0QixLQUFOLEVBQWFELEtBQWIsQ0FBbEIsRUFBdUMsSUFBdkMsQ0FBUCxHQUFzRHVCLElBQUksQ0FBQ3RCLEtBQWxGLENBQWQ7QUFDRDtBQUNGLEtBSkQsTUFJTztBQUNMRixZQUFNLEdBQUdQLFFBQVEsQ0FBQ00sQ0FBQyxDQUFDQyxNQUFILENBQWpCOztBQUNBLFdBQUtrSCxNQUFNLEdBQUcsSUFBSXhFLENBQUosQ0FBTTFDLE1BQU4sQ0FBZCxFQUE2QkEsTUFBTSxHQUFHQyxLQUF0QyxFQUE2Q0EsS0FBSyxFQUFsRCxFQUFzRDtBQUNwRCtXLHNCQUFjLENBQUM5UCxNQUFELEVBQVNqSCxLQUFULEVBQWdCa1gsT0FBTyxHQUFHRCxLQUFLLENBQUNuWCxDQUFDLENBQUNFLEtBQUQsQ0FBRixFQUFXQSxLQUFYLENBQVIsR0FBNEJGLENBQUMsQ0FBQ0UsS0FBRCxDQUFwRCxDQUFkO0FBQ0Q7QUFDRjs7QUFDRGlILFVBQU0sQ0FBQ2xILE1BQVAsR0FBZ0JDLEtBQWhCO0FBQ0EsV0FBT2lILE1BQVA7QUFDRDtBQXpCeUcsQ0FBckcsQ0FBUCxDOzs7Ozs7Ozs7Ozs7QUNWYTs7QUFDYixJQUFJa1EsZ0JBQWdCLEdBQUd0WSxtQkFBTyxDQUFDLG9GQUFELENBQTlCOztBQUNBLElBQUkwQyxJQUFJLEdBQUcxQyxtQkFBTyxDQUFDLGtFQUFELENBQWxCOztBQUNBLElBQUk2TCxTQUFTLEdBQUc3TCxtQkFBTyxDQUFDLGtFQUFELENBQXZCOztBQUNBLElBQUlVLFNBQVMsR0FBR1YsbUJBQU8sQ0FBQyxvRUFBRCxDQUF2QixDLENBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUNBTCxNQUFNLENBQUNDLE9BQVAsR0FBaUJJLG1CQUFPLENBQUMsc0VBQUQsQ0FBUCxDQUEwQkUsS0FBMUIsRUFBaUMsT0FBakMsRUFBMEMsVUFBVTRFLFFBQVYsRUFBb0JDLElBQXBCLEVBQTBCO0FBQ25GLE9BQUtqQixFQUFMLEdBQVVwRCxTQUFTLENBQUNvRSxRQUFELENBQW5CLENBRG1GLENBQ3BEOztBQUMvQixPQUFLM0IsRUFBTCxHQUFVLENBQVYsQ0FGbUYsQ0FFcEQ7O0FBQy9CLE9BQUs2QixFQUFMLEdBQVVELElBQVYsQ0FIbUYsQ0FHcEQ7QUFDakM7QUFDQyxDQUxnQixFQUtkLFlBQVk7QUFDYixNQUFJOUQsQ0FBQyxHQUFHLEtBQUs2QyxFQUFiO0FBQ0EsTUFBSWlCLElBQUksR0FBRyxLQUFLQyxFQUFoQjtBQUNBLE1BQUk3RCxLQUFLLEdBQUcsS0FBS2dDLEVBQUwsRUFBWjs7QUFDQSxNQUFJLENBQUNsQyxDQUFELElBQU1FLEtBQUssSUFBSUYsQ0FBQyxDQUFDQyxNQUFyQixFQUE2QjtBQUMzQixTQUFLNEMsRUFBTCxHQUFVMUQsU0FBVjtBQUNBLFdBQU9zQyxJQUFJLENBQUMsQ0FBRCxDQUFYO0FBQ0Q7O0FBQ0QsTUFBSXFDLElBQUksSUFBSSxNQUFaLEVBQW9CLE9BQU9yQyxJQUFJLENBQUMsQ0FBRCxFQUFJdkIsS0FBSixDQUFYO0FBQ3BCLE1BQUk0RCxJQUFJLElBQUksUUFBWixFQUFzQixPQUFPckMsSUFBSSxDQUFDLENBQUQsRUFBSXpCLENBQUMsQ0FBQ0UsS0FBRCxDQUFMLENBQVg7QUFDdEIsU0FBT3VCLElBQUksQ0FBQyxDQUFELEVBQUksQ0FBQ3ZCLEtBQUQsRUFBUUYsQ0FBQyxDQUFDRSxLQUFELENBQVQsQ0FBSixDQUFYO0FBQ0QsQ0FoQmdCLEVBZ0JkLFFBaEJjLENBQWpCLEMsQ0FrQkE7O0FBQ0EwSyxTQUFTLENBQUMwTSxTQUFWLEdBQXNCMU0sU0FBUyxDQUFDM0wsS0FBaEM7QUFFQW9ZLGdCQUFnQixDQUFDLE1BQUQsQ0FBaEI7QUFDQUEsZ0JBQWdCLENBQUMsUUFBRCxDQUFoQjtBQUNBQSxnQkFBZ0IsQ0FBQyxTQUFELENBQWhCLEM7Ozs7Ozs7Ozs7O0FDakNBLElBQUlwVyxFQUFFLEdBQUdsQyxtQkFBTyxDQUFDLGtFQUFELENBQVAsQ0FBd0JtQyxDQUFqQzs7QUFDQSxJQUFJcVcsTUFBTSxHQUFHaFAsUUFBUSxDQUFDckosU0FBdEI7QUFDQSxJQUFJc1ksTUFBTSxHQUFHLHVCQUFiO0FBQ0EsSUFBSWhWLElBQUksR0FBRyxNQUFYLEMsQ0FFQTs7QUFDQUEsSUFBSSxJQUFJK1UsTUFBUixJQUFrQnhZLG1CQUFPLENBQUMsc0VBQUQsQ0FBUCxJQUE2QmtDLEVBQUUsQ0FBQ3NXLE1BQUQsRUFBUy9VLElBQVQsRUFBZTtBQUM5RGlRLGNBQVksRUFBRSxJQURnRDtBQUU5RC9PLEtBQUcsRUFBRSxZQUFZO0FBQ2YsUUFBSTtBQUNGLGFBQU8sQ0FBQyxLQUFLLElBQU4sRUFBWStULEtBQVosQ0FBa0JELE1BQWxCLEVBQTBCLENBQTFCLENBQVA7QUFDRCxLQUZELENBRUUsT0FBTy9XLENBQVAsRUFBVTtBQUNWLGFBQU8sRUFBUDtBQUNEO0FBQ0Y7QUFSNkQsQ0FBZixDQUFqRCxDOzs7Ozs7Ozs7Ozs7QUNOYTs7QUFDYixJQUFJaVgsTUFBTSxHQUFHM1ksbUJBQU8sQ0FBQyxrRkFBRCxDQUFwQjs7QUFDQSxJQUFJOEMsUUFBUSxHQUFHOUMsbUJBQU8sQ0FBQyxzRkFBRCxDQUF0Qjs7QUFDQSxJQUFJNFksR0FBRyxHQUFHLEtBQVYsQyxDQUVBOztBQUNBalosTUFBTSxDQUFDQyxPQUFQLEdBQWlCSSxtQkFBTyxDQUFDLG9FQUFELENBQVAsQ0FBeUI0WSxHQUF6QixFQUE4QixVQUFValUsR0FBVixFQUFlO0FBQzVELFNBQU8sU0FBU2tVLEdBQVQsR0FBZTtBQUFFLFdBQU9sVSxHQUFHLENBQUMsSUFBRCxFQUFPbkQsU0FBUyxDQUFDTixNQUFWLEdBQW1CLENBQW5CLEdBQXVCTSxTQUFTLENBQUMsQ0FBRCxDQUFoQyxHQUFzQ3BCLFNBQTdDLENBQVY7QUFBb0UsR0FBNUY7QUFDRCxDQUZnQixFQUVkO0FBQ0Q7QUFDQXVFLEtBQUcsRUFBRSxTQUFTQSxHQUFULENBQWF0RSxHQUFiLEVBQWtCO0FBQ3JCLFFBQUk2QyxLQUFLLEdBQUd5VixNQUFNLENBQUMzVixRQUFQLENBQWdCRixRQUFRLENBQUMsSUFBRCxFQUFPOFYsR0FBUCxDQUF4QixFQUFxQ3ZZLEdBQXJDLENBQVo7QUFDQSxXQUFPNkMsS0FBSyxJQUFJQSxLQUFLLENBQUN1QixDQUF0QjtBQUNELEdBTEE7QUFNRDtBQUNBMEIsS0FBRyxFQUFFLFNBQVNBLEdBQVQsQ0FBYTlGLEdBQWIsRUFBa0JlLEtBQWxCLEVBQXlCO0FBQzVCLFdBQU91WCxNQUFNLENBQUMvVCxHQUFQLENBQVc5QixRQUFRLENBQUMsSUFBRCxFQUFPOFYsR0FBUCxDQUFuQixFQUFnQ3ZZLEdBQUcsS0FBSyxDQUFSLEdBQVksQ0FBWixHQUFnQkEsR0FBaEQsRUFBcURlLEtBQXJELENBQVA7QUFDRDtBQVRBLENBRmMsRUFZZHVYLE1BWmMsRUFZTixJQVpNLENBQWpCLEM7Ozs7Ozs7Ozs7O0FDTkE7QUFDQSxJQUFJelQsT0FBTyxHQUFHbEYsbUJBQU8sQ0FBQyw0REFBRCxDQUFyQjs7QUFFQWtGLE9BQU8sQ0FBQ0EsT0FBTyxDQUFDOEQsQ0FBUixHQUFZOUQsT0FBTyxDQUFDZ0MsQ0FBckIsRUFBd0IsUUFBeEIsRUFBa0M7QUFBRXdKLFFBQU0sRUFBRTFRLG1CQUFPLENBQUMsMEVBQUQ7QUFBakIsQ0FBbEMsQ0FBUCxDOzs7Ozs7Ozs7OztBQ0hBO0FBQ0EsSUFBSXVRLFFBQVEsR0FBR3ZRLG1CQUFPLENBQUMsa0VBQUQsQ0FBdEI7O0FBQ0EsSUFBSThTLEtBQUssR0FBRzlTLG1CQUFPLENBQUMsc0VBQUQsQ0FBbkI7O0FBRUFBLG1CQUFPLENBQUMsb0VBQUQsQ0FBUCxDQUF5QixNQUF6QixFQUFpQyxZQUFZO0FBQzNDLFNBQU8sU0FBU3dNLElBQVQsQ0FBYzNNLEVBQWQsRUFBa0I7QUFDdkIsV0FBT2lULEtBQUssQ0FBQ3ZDLFFBQVEsQ0FBQzFRLEVBQUQsQ0FBVCxDQUFaO0FBQ0QsR0FGRDtBQUdELENBSkQsRTs7Ozs7Ozs7Ozs7O0FDSmE7O0FBQ2IsSUFBSXVNLE9BQU8sR0FBR3BNLG1CQUFPLENBQUMsOERBQUQsQ0FBckI7O0FBQ0EsSUFBSWlGLE1BQU0sR0FBR2pGLG1CQUFPLENBQUMsNERBQUQsQ0FBcEI7O0FBQ0EsSUFBSXNDLEdBQUcsR0FBR3RDLG1CQUFPLENBQUMsc0RBQUQsQ0FBakI7O0FBQ0EsSUFBSWdZLE9BQU8sR0FBR2hZLG1CQUFPLENBQUMsOERBQUQsQ0FBckI7O0FBQ0EsSUFBSWtGLE9BQU8sR0FBR2xGLG1CQUFPLENBQUMsNERBQUQsQ0FBckI7O0FBQ0EsSUFBSVMsUUFBUSxHQUFHVCxtQkFBTyxDQUFDLGtFQUFELENBQXRCOztBQUNBLElBQUl5SCxTQUFTLEdBQUd6SCxtQkFBTyxDQUFDLG9FQUFELENBQXZCOztBQUNBLElBQUl1QyxVQUFVLEdBQUd2QyxtQkFBTyxDQUFDLHNFQUFELENBQXhCOztBQUNBLElBQUl3QyxLQUFLLEdBQUd4QyxtQkFBTyxDQUFDLDREQUFELENBQW5COztBQUNBLElBQUk4WSxrQkFBa0IsR0FBRzlZLG1CQUFPLENBQUMsc0ZBQUQsQ0FBaEM7O0FBQ0EsSUFBSWtRLElBQUksR0FBR2xRLG1CQUFPLENBQUMsd0RBQUQsQ0FBUCxDQUFtQm1HLEdBQTlCOztBQUNBLElBQUk0UyxTQUFTLEdBQUcvWSxtQkFBTyxDQUFDLGtFQUFELENBQVAsRUFBaEI7O0FBQ0EsSUFBSWdaLDBCQUEwQixHQUFHaFosbUJBQU8sQ0FBQyw0RkFBRCxDQUF4Qzs7QUFDQSxJQUFJaVosT0FBTyxHQUFHalosbUJBQU8sQ0FBQyw4REFBRCxDQUFyQjs7QUFDQSxJQUFJMFgsU0FBUyxHQUFHMVgsbUJBQU8sQ0FBQyxvRUFBRCxDQUF2Qjs7QUFDQSxJQUFJa1osY0FBYyxHQUFHbFosbUJBQU8sQ0FBQyw4RUFBRCxDQUE1Qjs7QUFDQSxJQUFJbVosT0FBTyxHQUFHLFNBQWQ7QUFDQSxJQUFJclosU0FBUyxHQUFHbUYsTUFBTSxDQUFDbkYsU0FBdkI7QUFDQSxJQUFJOE8sT0FBTyxHQUFHM0osTUFBTSxDQUFDMkosT0FBckI7QUFDQSxJQUFJd0ssUUFBUSxHQUFHeEssT0FBTyxJQUFJQSxPQUFPLENBQUN3SyxRQUFsQztBQUNBLElBQUlDLEVBQUUsR0FBR0QsUUFBUSxJQUFJQSxRQUFRLENBQUNDLEVBQXJCLElBQTJCLEVBQXBDO0FBQ0EsSUFBSUMsUUFBUSxHQUFHclUsTUFBTSxDQUFDa1UsT0FBRCxDQUFyQjtBQUNBLElBQUlySyxNQUFNLEdBQUdrSixPQUFPLENBQUNwSixPQUFELENBQVAsSUFBb0IsU0FBakM7O0FBQ0EsSUFBSTJLLEtBQUssR0FBRyxZQUFZO0FBQUU7QUFBYSxDQUF2Qzs7QUFDQSxJQUFJQyxRQUFKLEVBQWNDLDJCQUFkLEVBQTJDQyxvQkFBM0MsRUFBaUVDLE9BQWpFO0FBQ0EsSUFBSXRHLG9CQUFvQixHQUFHb0csMkJBQTJCLEdBQUdULDBCQUEwQixDQUFDN1csQ0FBcEY7QUFFQSxJQUFJeVgsVUFBVSxHQUFHLENBQUMsQ0FBQyxZQUFZO0FBQzdCLE1BQUk7QUFDRjtBQUNBLFFBQUk1SixPQUFPLEdBQUdzSixRQUFRLENBQUN2SixPQUFULENBQWlCLENBQWpCLENBQWQ7O0FBQ0EsUUFBSThKLFdBQVcsR0FBRyxDQUFDN0osT0FBTyxDQUFDakosV0FBUixHQUFzQixFQUF2QixFQUEyQi9HLG1CQUFPLENBQUMsc0RBQUQsQ0FBUCxDQUFrQixTQUFsQixDQUEzQixJQUEyRCxVQUFVMkosSUFBVixFQUFnQjtBQUMzRkEsVUFBSSxDQUFDNFAsS0FBRCxFQUFRQSxLQUFSLENBQUo7QUFDRCxLQUZELENBSEUsQ0FNRjs7O0FBQ0EsV0FBTyxDQUFDekssTUFBTSxJQUFJLE9BQU9nTCxxQkFBUCxJQUFnQyxVQUEzQyxLQUNGOUosT0FBTyxDQUFDQyxJQUFSLENBQWFzSixLQUFiLGFBQStCTSxXQUQ3QixDQUVMO0FBQ0E7QUFDQTtBQUpLLE9BS0ZSLEVBQUUsQ0FBQ1UsT0FBSCxDQUFXLEtBQVgsTUFBc0IsQ0FMcEIsSUFNRnJDLFNBQVMsQ0FBQ3FDLE9BQVYsQ0FBa0IsV0FBbEIsTUFBbUMsQ0FBQyxDQU56QztBQU9ELEdBZEQsQ0FjRSxPQUFPclksQ0FBUCxFQUFVO0FBQUU7QUFBYTtBQUM1QixDQWhCa0IsRUFBbkIsQyxDQWtCQTs7QUFDQSxJQUFJc1ksVUFBVSxHQUFHLFVBQVVuYSxFQUFWLEVBQWM7QUFDN0IsTUFBSW9RLElBQUo7QUFDQSxTQUFPeFAsUUFBUSxDQUFDWixFQUFELENBQVIsSUFBZ0IsUUFBUW9RLElBQUksR0FBR3BRLEVBQUUsQ0FBQ29RLElBQWxCLEtBQTJCLFVBQTNDLEdBQXdEQSxJQUF4RCxHQUErRCxLQUF0RTtBQUNELENBSEQ7O0FBSUEsSUFBSWhCLE1BQU0sR0FBRyxVQUFVZSxPQUFWLEVBQW1CaUssUUFBbkIsRUFBNkI7QUFDeEMsTUFBSWpLLE9BQU8sQ0FBQ2tLLEVBQVosRUFBZ0I7QUFDaEJsSyxTQUFPLENBQUNrSyxFQUFSLEdBQWEsSUFBYjtBQUNBLE1BQUlDLEtBQUssR0FBR25LLE9BQU8sQ0FBQ29LLEVBQXBCO0FBQ0FyQixXQUFTLENBQUMsWUFBWTtBQUNwQixRQUFJM1gsS0FBSyxHQUFHNE8sT0FBTyxDQUFDcUssRUFBcEI7QUFDQSxRQUFJQyxFQUFFLEdBQUd0SyxPQUFPLENBQUN1SyxFQUFSLElBQWMsQ0FBdkI7QUFDQSxRQUFJblcsQ0FBQyxHQUFHLENBQVI7O0FBQ0EsUUFBSWtTLEdBQUcsR0FBRyxVQUFVa0UsUUFBVixFQUFvQjtBQUM1QixVQUFJQyxPQUFPLEdBQUdILEVBQUUsR0FBR0UsUUFBUSxDQUFDRixFQUFaLEdBQWlCRSxRQUFRLENBQUNFLElBQTFDO0FBQ0EsVUFBSTNLLE9BQU8sR0FBR3lLLFFBQVEsQ0FBQ3pLLE9BQXZCO0FBQ0EsVUFBSUssTUFBTSxHQUFHb0ssUUFBUSxDQUFDcEssTUFBdEI7QUFDQSxVQUFJaEIsTUFBTSxHQUFHb0wsUUFBUSxDQUFDcEwsTUFBdEI7QUFDQSxVQUFJaEgsTUFBSixFQUFZNkgsSUFBWixFQUFrQjBLLE1BQWxCOztBQUNBLFVBQUk7QUFDRixZQUFJRixPQUFKLEVBQWE7QUFDWCxjQUFJLENBQUNILEVBQUwsRUFBUztBQUNQLGdCQUFJdEssT0FBTyxDQUFDNEssRUFBUixJQUFjLENBQWxCLEVBQXFCQyxpQkFBaUIsQ0FBQzdLLE9BQUQsQ0FBakI7QUFDckJBLG1CQUFPLENBQUM0SyxFQUFSLEdBQWEsQ0FBYjtBQUNEOztBQUNELGNBQUlILE9BQU8sS0FBSyxJQUFoQixFQUFzQnJTLE1BQU0sR0FBR2hILEtBQVQsQ0FBdEIsS0FDSztBQUNILGdCQUFJZ08sTUFBSixFQUFZQSxNQUFNLENBQUNFLEtBQVA7QUFDWmxILGtCQUFNLEdBQUdxUyxPQUFPLENBQUNyWixLQUFELENBQWhCLENBRkcsQ0FFc0I7O0FBQ3pCLGdCQUFJZ08sTUFBSixFQUFZO0FBQ1ZBLG9CQUFNLENBQUNDLElBQVA7QUFDQXNMLG9CQUFNLEdBQUcsSUFBVDtBQUNEO0FBQ0Y7O0FBQ0QsY0FBSXZTLE1BQU0sS0FBS29TLFFBQVEsQ0FBQ3hLLE9BQXhCLEVBQWlDO0FBQy9CSSxrQkFBTSxDQUFDdFEsU0FBUyxDQUFDLHFCQUFELENBQVYsQ0FBTjtBQUNELFdBRkQsTUFFTyxJQUFJbVEsSUFBSSxHQUFHK0osVUFBVSxDQUFDNVIsTUFBRCxDQUFyQixFQUErQjtBQUNwQzZILGdCQUFJLENBQUNqTyxJQUFMLENBQVVvRyxNQUFWLEVBQWtCMkgsT0FBbEIsRUFBMkJLLE1BQTNCO0FBQ0QsV0FGTSxNQUVBTCxPQUFPLENBQUMzSCxNQUFELENBQVA7QUFDUixTQW5CRCxNQW1CT2dJLE1BQU0sQ0FBQ2hQLEtBQUQsQ0FBTjtBQUNSLE9BckJELENBcUJFLE9BQU9NLENBQVAsRUFBVTtBQUNWLFlBQUkwTixNQUFNLElBQUksQ0FBQ3VMLE1BQWYsRUFBdUJ2TCxNQUFNLENBQUNDLElBQVA7QUFDdkJlLGNBQU0sQ0FBQzFPLENBQUQsQ0FBTjtBQUNEO0FBQ0YsS0EvQkQ7O0FBZ0NBLFdBQU95WSxLQUFLLENBQUNqWixNQUFOLEdBQWVrRCxDQUF0QixFQUF5QmtTLEdBQUcsQ0FBQzZELEtBQUssQ0FBQy9WLENBQUMsRUFBRixDQUFOLENBQUgsQ0FwQ0wsQ0FvQ3NCOzs7QUFDMUM0TCxXQUFPLENBQUNvSyxFQUFSLEdBQWEsRUFBYjtBQUNBcEssV0FBTyxDQUFDa0ssRUFBUixHQUFhLEtBQWI7QUFDQSxRQUFJRCxRQUFRLElBQUksQ0FBQ2pLLE9BQU8sQ0FBQzRLLEVBQXpCLEVBQTZCRSxXQUFXLENBQUM5SyxPQUFELENBQVg7QUFDOUIsR0F4Q1EsQ0FBVDtBQXlDRCxDQTdDRDs7QUE4Q0EsSUFBSThLLFdBQVcsR0FBRyxVQUFVOUssT0FBVixFQUFtQjtBQUNuQ0UsTUFBSSxDQUFDbE8sSUFBTCxDQUFVaUQsTUFBVixFQUFrQixZQUFZO0FBQzVCLFFBQUk3RCxLQUFLLEdBQUc0TyxPQUFPLENBQUNxSyxFQUFwQjtBQUNBLFFBQUlVLFNBQVMsR0FBR0MsV0FBVyxDQUFDaEwsT0FBRCxDQUEzQjtBQUNBLFFBQUk1SCxNQUFKLEVBQVlxUyxPQUFaLEVBQXFCUSxPQUFyQjs7QUFDQSxRQUFJRixTQUFKLEVBQWU7QUFDYjNTLFlBQU0sR0FBRzZRLE9BQU8sQ0FBQyxZQUFZO0FBQzNCLFlBQUluSyxNQUFKLEVBQVk7QUFDVkYsaUJBQU8sQ0FBQ3NNLElBQVIsQ0FBYSxvQkFBYixFQUFtQzlaLEtBQW5DLEVBQTBDNE8sT0FBMUM7QUFDRCxTQUZELE1BRU8sSUFBSXlLLE9BQU8sR0FBR3hWLE1BQU0sQ0FBQ2tXLG9CQUFyQixFQUEyQztBQUNoRFYsaUJBQU8sQ0FBQztBQUFFekssbUJBQU8sRUFBRUEsT0FBWDtBQUFvQm9MLGtCQUFNLEVBQUVoYTtBQUE1QixXQUFELENBQVA7QUFDRCxTQUZNLE1BRUEsSUFBSSxDQUFDNlosT0FBTyxHQUFHaFcsTUFBTSxDQUFDZ1csT0FBbEIsS0FBOEJBLE9BQU8sQ0FBQ0ksS0FBMUMsRUFBaUQ7QUFDdERKLGlCQUFPLENBQUNJLEtBQVIsQ0FBYyw2QkFBZCxFQUE2Q2phLEtBQTdDO0FBQ0Q7QUFDRixPQVJlLENBQWhCLENBRGEsQ0FVYjs7QUFDQTRPLGFBQU8sQ0FBQzRLLEVBQVIsR0FBYTlMLE1BQU0sSUFBSWtNLFdBQVcsQ0FBQ2hMLE9BQUQsQ0FBckIsR0FBaUMsQ0FBakMsR0FBcUMsQ0FBbEQ7QUFDRDs7QUFBQ0EsV0FBTyxDQUFDc0wsRUFBUixHQUFhbGIsU0FBYjtBQUNGLFFBQUkyYSxTQUFTLElBQUkzUyxNQUFNLENBQUMxRyxDQUF4QixFQUEyQixNQUFNMEcsTUFBTSxDQUFDM0QsQ0FBYjtBQUM1QixHQWxCRDtBQW1CRCxDQXBCRDs7QUFxQkEsSUFBSXVXLFdBQVcsR0FBRyxVQUFVaEwsT0FBVixFQUFtQjtBQUNuQyxTQUFPQSxPQUFPLENBQUM0SyxFQUFSLEtBQWUsQ0FBZixJQUFvQixDQUFDNUssT0FBTyxDQUFDc0wsRUFBUixJQUFjdEwsT0FBTyxDQUFDb0ssRUFBdkIsRUFBMkJsWixNQUEzQixLQUFzQyxDQUFqRTtBQUNELENBRkQ7O0FBR0EsSUFBSTJaLGlCQUFpQixHQUFHLFVBQVU3SyxPQUFWLEVBQW1CO0FBQ3pDRSxNQUFJLENBQUNsTyxJQUFMLENBQVVpRCxNQUFWLEVBQWtCLFlBQVk7QUFDNUIsUUFBSXdWLE9BQUo7O0FBQ0EsUUFBSTNMLE1BQUosRUFBWTtBQUNWRixhQUFPLENBQUNzTSxJQUFSLENBQWEsa0JBQWIsRUFBaUNsTCxPQUFqQztBQUNELEtBRkQsTUFFTyxJQUFJeUssT0FBTyxHQUFHeFYsTUFBTSxDQUFDc1csa0JBQXJCLEVBQXlDO0FBQzlDZCxhQUFPLENBQUM7QUFBRXpLLGVBQU8sRUFBRUEsT0FBWDtBQUFvQm9MLGNBQU0sRUFBRXBMLE9BQU8sQ0FBQ3FLO0FBQXBDLE9BQUQsQ0FBUDtBQUNEO0FBQ0YsR0FQRDtBQVFELENBVEQ7O0FBVUEsSUFBSW1CLE9BQU8sR0FBRyxVQUFVcGEsS0FBVixFQUFpQjtBQUM3QixNQUFJNE8sT0FBTyxHQUFHLElBQWQ7QUFDQSxNQUFJQSxPQUFPLENBQUN5TCxFQUFaLEVBQWdCO0FBQ2hCekwsU0FBTyxDQUFDeUwsRUFBUixHQUFhLElBQWI7QUFDQXpMLFNBQU8sR0FBR0EsT0FBTyxDQUFDMEwsRUFBUixJQUFjMUwsT0FBeEIsQ0FKNkIsQ0FJSTs7QUFDakNBLFNBQU8sQ0FBQ3FLLEVBQVIsR0FBYWpaLEtBQWI7QUFDQTRPLFNBQU8sQ0FBQ3VLLEVBQVIsR0FBYSxDQUFiO0FBQ0EsTUFBSSxDQUFDdkssT0FBTyxDQUFDc0wsRUFBYixFQUFpQnRMLE9BQU8sQ0FBQ3NMLEVBQVIsR0FBYXRMLE9BQU8sQ0FBQ29LLEVBQVIsQ0FBV25ZLEtBQVgsRUFBYjtBQUNqQmdOLFFBQU0sQ0FBQ2UsT0FBRCxFQUFVLElBQVYsQ0FBTjtBQUNELENBVEQ7O0FBVUEsSUFBSTJMLFFBQVEsR0FBRyxVQUFVdmEsS0FBVixFQUFpQjtBQUM5QixNQUFJNE8sT0FBTyxHQUFHLElBQWQ7QUFDQSxNQUFJQyxJQUFKO0FBQ0EsTUFBSUQsT0FBTyxDQUFDeUwsRUFBWixFQUFnQjtBQUNoQnpMLFNBQU8sQ0FBQ3lMLEVBQVIsR0FBYSxJQUFiO0FBQ0F6TCxTQUFPLEdBQUdBLE9BQU8sQ0FBQzBMLEVBQVIsSUFBYzFMLE9BQXhCLENBTDhCLENBS0c7O0FBQ2pDLE1BQUk7QUFDRixRQUFJQSxPQUFPLEtBQUs1TyxLQUFoQixFQUF1QixNQUFNdEIsU0FBUyxDQUFDLGtDQUFELENBQWY7O0FBQ3ZCLFFBQUltUSxJQUFJLEdBQUcrSixVQUFVLENBQUM1WSxLQUFELENBQXJCLEVBQThCO0FBQzVCMlgsZUFBUyxDQUFDLFlBQVk7QUFDcEIsWUFBSXZWLE9BQU8sR0FBRztBQUFFa1ksWUFBRSxFQUFFMUwsT0FBTjtBQUFleUwsWUFBRSxFQUFFO0FBQW5CLFNBQWQsQ0FEb0IsQ0FDc0I7O0FBQzFDLFlBQUk7QUFDRnhMLGNBQUksQ0FBQ2pPLElBQUwsQ0FBVVosS0FBVixFQUFpQmtCLEdBQUcsQ0FBQ3FaLFFBQUQsRUFBV25ZLE9BQVgsRUFBb0IsQ0FBcEIsQ0FBcEIsRUFBNENsQixHQUFHLENBQUNrWixPQUFELEVBQVVoWSxPQUFWLEVBQW1CLENBQW5CLENBQS9DO0FBQ0QsU0FGRCxDQUVFLE9BQU85QixDQUFQLEVBQVU7QUFDVjhaLGlCQUFPLENBQUN4WixJQUFSLENBQWF3QixPQUFiLEVBQXNCOUIsQ0FBdEI7QUFDRDtBQUNGLE9BUFEsQ0FBVDtBQVFELEtBVEQsTUFTTztBQUNMc08sYUFBTyxDQUFDcUssRUFBUixHQUFhalosS0FBYjtBQUNBNE8sYUFBTyxDQUFDdUssRUFBUixHQUFhLENBQWI7QUFDQXRMLFlBQU0sQ0FBQ2UsT0FBRCxFQUFVLEtBQVYsQ0FBTjtBQUNEO0FBQ0YsR0FoQkQsQ0FnQkUsT0FBT3RPLENBQVAsRUFBVTtBQUNWOFosV0FBTyxDQUFDeFosSUFBUixDQUFhO0FBQUUwWixRQUFFLEVBQUUxTCxPQUFOO0FBQWV5TCxRQUFFLEVBQUU7QUFBbkIsS0FBYixFQUF5Qy9aLENBQXpDLEVBRFUsQ0FDbUM7QUFDOUM7QUFDRixDQXpCRCxDLENBMkJBOzs7QUFDQSxJQUFJLENBQUNrWSxVQUFMLEVBQWlCO0FBQ2Y7QUFDQU4sVUFBUSxHQUFHLFNBQVN6SyxPQUFULENBQWlCK00sUUFBakIsRUFBMkI7QUFDcENyWixjQUFVLENBQUMsSUFBRCxFQUFPK1csUUFBUCxFQUFpQkgsT0FBakIsRUFBMEIsSUFBMUIsQ0FBVjtBQUNBMVIsYUFBUyxDQUFDbVUsUUFBRCxDQUFUO0FBQ0FwQyxZQUFRLENBQUN4WCxJQUFULENBQWMsSUFBZDs7QUFDQSxRQUFJO0FBQ0Y0WixjQUFRLENBQUN0WixHQUFHLENBQUNxWixRQUFELEVBQVcsSUFBWCxFQUFpQixDQUFqQixDQUFKLEVBQXlCclosR0FBRyxDQUFDa1osT0FBRCxFQUFVLElBQVYsRUFBZ0IsQ0FBaEIsQ0FBNUIsQ0FBUjtBQUNELEtBRkQsQ0FFRSxPQUFPSyxHQUFQLEVBQVk7QUFDWkwsYUFBTyxDQUFDeFosSUFBUixDQUFhLElBQWIsRUFBbUI2WixHQUFuQjtBQUNEO0FBQ0YsR0FURCxDQUZlLENBWWY7OztBQUNBckMsVUFBUSxHQUFHLFNBQVMzSyxPQUFULENBQWlCK00sUUFBakIsRUFBMkI7QUFDcEMsU0FBS3hCLEVBQUwsR0FBVSxFQUFWLENBRG9DLENBQ1Y7O0FBQzFCLFNBQUtrQixFQUFMLEdBQVVsYixTQUFWLENBRm9DLENBRVY7O0FBQzFCLFNBQUttYSxFQUFMLEdBQVUsQ0FBVixDQUhvQyxDQUdWOztBQUMxQixTQUFLa0IsRUFBTCxHQUFVLEtBQVYsQ0FKb0MsQ0FJVjs7QUFDMUIsU0FBS3BCLEVBQUwsR0FBVWphLFNBQVYsQ0FMb0MsQ0FLVjs7QUFDMUIsU0FBS3dhLEVBQUwsR0FBVSxDQUFWLENBTm9DLENBTVY7O0FBQzFCLFNBQUtWLEVBQUwsR0FBVSxLQUFWLENBUG9DLENBT1Y7QUFDM0IsR0FSRDs7QUFTQVYsVUFBUSxDQUFDclosU0FBVCxHQUFxQkgsbUJBQU8sQ0FBQyx3RUFBRCxDQUFQLENBQTJCc1osUUFBUSxDQUFDblosU0FBcEMsRUFBK0M7QUFDbEU7QUFDQThQLFFBQUksRUFBRSxTQUFTQSxJQUFULENBQWM2TCxXQUFkLEVBQTJCQyxVQUEzQixFQUF1QztBQUMzQyxVQUFJdkIsUUFBUSxHQUFHbkgsb0JBQW9CLENBQUN5RixrQkFBa0IsQ0FBQyxJQUFELEVBQU9RLFFBQVAsQ0FBbkIsQ0FBbkM7QUFDQWtCLGNBQVEsQ0FBQ0YsRUFBVCxHQUFjLE9BQU93QixXQUFQLElBQXNCLFVBQXRCLEdBQW1DQSxXQUFuQyxHQUFpRCxJQUEvRDtBQUNBdEIsY0FBUSxDQUFDRSxJQUFULEdBQWdCLE9BQU9xQixVQUFQLElBQXFCLFVBQXJCLElBQW1DQSxVQUFuRDtBQUNBdkIsY0FBUSxDQUFDcEwsTUFBVCxHQUFrQk4sTUFBTSxHQUFHRixPQUFPLENBQUNRLE1BQVgsR0FBb0JoUCxTQUE1Qzs7QUFDQSxXQUFLZ2EsRUFBTCxDQUFRNVIsSUFBUixDQUFhZ1MsUUFBYjs7QUFDQSxVQUFJLEtBQUtjLEVBQVQsRUFBYSxLQUFLQSxFQUFMLENBQVE5UyxJQUFSLENBQWFnUyxRQUFiO0FBQ2IsVUFBSSxLQUFLRCxFQUFULEVBQWF0TCxNQUFNLENBQUMsSUFBRCxFQUFPLEtBQVAsQ0FBTjtBQUNiLGFBQU91TCxRQUFRLENBQUN4SyxPQUFoQjtBQUNELEtBWGlFO0FBWWxFO0FBQ0EsYUFBUyxVQUFVK0wsVUFBVixFQUFzQjtBQUM3QixhQUFPLEtBQUs5TCxJQUFMLENBQVU3UCxTQUFWLEVBQXFCMmIsVUFBckIsQ0FBUDtBQUNEO0FBZmlFLEdBQS9DLENBQXJCOztBQWlCQXJDLHNCQUFvQixHQUFHLFlBQVk7QUFDakMsUUFBSTFKLE9BQU8sR0FBRyxJQUFJd0osUUFBSixFQUFkO0FBQ0EsU0FBS3hKLE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUtELE9BQUwsR0FBZXpOLEdBQUcsQ0FBQ3FaLFFBQUQsRUFBVzNMLE9BQVgsRUFBb0IsQ0FBcEIsQ0FBbEI7QUFDQSxTQUFLSSxNQUFMLEdBQWM5TixHQUFHLENBQUNrWixPQUFELEVBQVV4TCxPQUFWLEVBQW1CLENBQW5CLENBQWpCO0FBQ0QsR0FMRDs7QUFNQWdKLDRCQUEwQixDQUFDN1csQ0FBM0IsR0FBK0JrUixvQkFBb0IsR0FBRyxVQUFVelAsQ0FBVixFQUFhO0FBQ2pFLFdBQU9BLENBQUMsS0FBSzBWLFFBQU4sSUFBa0IxVixDQUFDLEtBQUsrVixPQUF4QixHQUNILElBQUlELG9CQUFKLENBQXlCOVYsQ0FBekIsQ0FERyxHQUVINlYsMkJBQTJCLENBQUM3VixDQUFELENBRi9CO0FBR0QsR0FKRDtBQUtEOztBQUVEc0IsT0FBTyxDQUFDQSxPQUFPLENBQUM4QixDQUFSLEdBQVk5QixPQUFPLENBQUMrQixDQUFwQixHQUF3Qi9CLE9BQU8sQ0FBQ2dDLENBQVIsR0FBWSxDQUFDMFMsVUFBdEMsRUFBa0Q7QUFBRS9LLFNBQU8sRUFBRXlLO0FBQVgsQ0FBbEQsQ0FBUDs7QUFDQXRaLG1CQUFPLENBQUMsa0ZBQUQsQ0FBUCxDQUFnQ3NaLFFBQWhDLEVBQTBDSCxPQUExQzs7QUFDQW5aLG1CQUFPLENBQUMsc0VBQUQsQ0FBUCxDQUEwQm1aLE9BQTFCOztBQUNBUSxPQUFPLEdBQUczWixtQkFBTyxDQUFDLHdEQUFELENBQVAsQ0FBbUJtWixPQUFuQixDQUFWLEMsQ0FFQTs7QUFDQWpVLE9BQU8sQ0FBQ0EsT0FBTyxDQUFDOEQsQ0FBUixHQUFZOUQsT0FBTyxDQUFDZ0MsQ0FBUixHQUFZLENBQUMwUyxVQUExQixFQUFzQ1QsT0FBdEMsRUFBK0M7QUFDcEQ7QUFDQS9JLFFBQU0sRUFBRSxTQUFTQSxNQUFULENBQWdCbE0sQ0FBaEIsRUFBbUI7QUFDekIsUUFBSThYLFVBQVUsR0FBRzNJLG9CQUFvQixDQUFDLElBQUQsQ0FBckM7QUFDQSxRQUFJL0MsUUFBUSxHQUFHMEwsVUFBVSxDQUFDNUwsTUFBMUI7QUFDQUUsWUFBUSxDQUFDcE0sQ0FBRCxDQUFSO0FBQ0EsV0FBTzhYLFVBQVUsQ0FBQ2hNLE9BQWxCO0FBQ0Q7QUFQbUQsQ0FBL0MsQ0FBUDtBQVNBOUssT0FBTyxDQUFDQSxPQUFPLENBQUM4RCxDQUFSLEdBQVk5RCxPQUFPLENBQUNnQyxDQUFSLElBQWFrRixPQUFPLElBQUksQ0FBQ3dOLFVBQXpCLENBQWIsRUFBbURULE9BQW5ELEVBQTREO0FBQ2pFO0FBQ0FwSixTQUFPLEVBQUUsU0FBU0EsT0FBVCxDQUFpQnVELENBQWpCLEVBQW9CO0FBQzNCLFdBQU80RixjQUFjLENBQUM5TSxPQUFPLElBQUksU0FBU3VOLE9BQXBCLEdBQThCTCxRQUE5QixHQUF5QyxJQUExQyxFQUFnRGhHLENBQWhELENBQXJCO0FBQ0Q7QUFKZ0UsQ0FBNUQsQ0FBUDtBQU1BcE8sT0FBTyxDQUFDQSxPQUFPLENBQUM4RCxDQUFSLEdBQVk5RCxPQUFPLENBQUNnQyxDQUFSLEdBQVksRUFBRTBTLFVBQVUsSUFBSTVaLG1CQUFPLENBQUMsc0VBQUQsQ0FBUCxDQUEwQixVQUFVMkcsSUFBVixFQUFnQjtBQUN4RjJTLFVBQVEsQ0FBQzJDLEdBQVQsQ0FBYXRWLElBQWIsRUFBbUIsT0FBbkIsRUFBNEI0UyxLQUE1QjtBQUNELENBRitDLENBQWhCLENBQXpCLEVBRUZKLE9BRkUsRUFFTztBQUNaO0FBQ0E4QyxLQUFHLEVBQUUsU0FBU0EsR0FBVCxDQUFhcFksUUFBYixFQUF1QjtBQUMxQixRQUFJRCxDQUFDLEdBQUcsSUFBUjtBQUNBLFFBQUlvWSxVQUFVLEdBQUczSSxvQkFBb0IsQ0FBQ3pQLENBQUQsQ0FBckM7QUFDQSxRQUFJbU0sT0FBTyxHQUFHaU0sVUFBVSxDQUFDak0sT0FBekI7QUFDQSxRQUFJSyxNQUFNLEdBQUc0TCxVQUFVLENBQUM1TCxNQUF4QjtBQUNBLFFBQUloSSxNQUFNLEdBQUc2USxPQUFPLENBQUMsWUFBWTtBQUMvQixVQUFJaE0sTUFBTSxHQUFHLEVBQWI7QUFDQSxVQUFJOUwsS0FBSyxHQUFHLENBQVo7QUFDQSxVQUFJK2EsU0FBUyxHQUFHLENBQWhCO0FBQ0ExWixXQUFLLENBQUNxQixRQUFELEVBQVcsS0FBWCxFQUFrQixVQUFVbU0sT0FBVixFQUFtQjtBQUN4QyxZQUFJbU0sTUFBTSxHQUFHaGIsS0FBSyxFQUFsQjtBQUNBLFlBQUlpYixhQUFhLEdBQUcsS0FBcEI7QUFDQW5QLGNBQU0sQ0FBQ3pFLElBQVAsQ0FBWXBJLFNBQVo7QUFDQThiLGlCQUFTO0FBQ1R0WSxTQUFDLENBQUNtTSxPQUFGLENBQVVDLE9BQVYsRUFBbUJDLElBQW5CLENBQXdCLFVBQVU3TyxLQUFWLEVBQWlCO0FBQ3ZDLGNBQUlnYixhQUFKLEVBQW1CO0FBQ25CQSx1QkFBYSxHQUFHLElBQWhCO0FBQ0FuUCxnQkFBTSxDQUFDa1AsTUFBRCxDQUFOLEdBQWlCL2EsS0FBakI7QUFDQSxZQUFFOGEsU0FBRixJQUFlbk0sT0FBTyxDQUFDOUMsTUFBRCxDQUF0QjtBQUNELFNBTEQsRUFLR21ELE1BTEg7QUFNRCxPQVhJLENBQUw7QUFZQSxRQUFFOEwsU0FBRixJQUFlbk0sT0FBTyxDQUFDOUMsTUFBRCxDQUF0QjtBQUNELEtBakJtQixDQUFwQjtBQWtCQSxRQUFJN0UsTUFBTSxDQUFDMUcsQ0FBWCxFQUFjME8sTUFBTSxDQUFDaEksTUFBTSxDQUFDM0QsQ0FBUixDQUFOO0FBQ2QsV0FBT3VYLFVBQVUsQ0FBQ2hNLE9BQWxCO0FBQ0QsR0EzQlc7QUE0Qlo7QUFDQXFNLE1BQUksRUFBRSxTQUFTQSxJQUFULENBQWN4WSxRQUFkLEVBQXdCO0FBQzVCLFFBQUlELENBQUMsR0FBRyxJQUFSO0FBQ0EsUUFBSW9ZLFVBQVUsR0FBRzNJLG9CQUFvQixDQUFDelAsQ0FBRCxDQUFyQztBQUNBLFFBQUl3TSxNQUFNLEdBQUc0TCxVQUFVLENBQUM1TCxNQUF4QjtBQUNBLFFBQUloSSxNQUFNLEdBQUc2USxPQUFPLENBQUMsWUFBWTtBQUMvQnpXLFdBQUssQ0FBQ3FCLFFBQUQsRUFBVyxLQUFYLEVBQWtCLFVBQVVtTSxPQUFWLEVBQW1CO0FBQ3hDcE0sU0FBQyxDQUFDbU0sT0FBRixDQUFVQyxPQUFWLEVBQW1CQyxJQUFuQixDQUF3QitMLFVBQVUsQ0FBQ2pNLE9BQW5DLEVBQTRDSyxNQUE1QztBQUNELE9BRkksQ0FBTDtBQUdELEtBSm1CLENBQXBCO0FBS0EsUUFBSWhJLE1BQU0sQ0FBQzFHLENBQVgsRUFBYzBPLE1BQU0sQ0FBQ2hJLE1BQU0sQ0FBQzNELENBQVIsQ0FBTjtBQUNkLFdBQU91WCxVQUFVLENBQUNoTSxPQUFsQjtBQUNEO0FBeENXLENBRlAsQ0FBUCxDOzs7Ozs7Ozs7OztBQ2xQQTtBQUNBLElBQUloUSxtQkFBTyxDQUFDLHNFQUFELENBQVAsSUFBNkIsS0FBS3NjLEtBQUwsSUFBYyxHQUEvQyxFQUFvRHRjLG1CQUFPLENBQUMsa0VBQUQsQ0FBUCxDQUF3Qm1DLENBQXhCLENBQTBCZ0ksTUFBTSxDQUFDaEssU0FBakMsRUFBNEMsT0FBNUMsRUFBcUQ7QUFDdkd1VCxjQUFZLEVBQUUsSUFEeUY7QUFFdkcvTyxLQUFHLEVBQUUzRSxtQkFBTyxDQUFDLDBEQUFEO0FBRjJGLENBQXJELEU7Ozs7Ozs7Ozs7O0FDRHBEO0FBQ0FBLG1CQUFPLENBQUMsb0VBQUQsQ0FBUCxDQUF5QixPQUF6QixFQUFrQyxDQUFsQyxFQUFxQyxVQUFVNEosT0FBVixFQUFtQjJTLEtBQW5CLEVBQTBCQyxNQUExQixFQUFrQztBQUNyRTs7QUFDQSxNQUFJeFEsUUFBUSxHQUFHaE0sbUJBQU8sQ0FBQyxrRUFBRCxDQUF0Qjs7QUFDQSxNQUFJeWMsTUFBTSxHQUFHRCxNQUFiO0FBQ0EsTUFBSUUsS0FBSyxHQUFHLEdBQUdsVSxJQUFmO0FBQ0EsTUFBSW1VLE1BQU0sR0FBRyxPQUFiO0FBQ0EsTUFBSUMsTUFBTSxHQUFHLFFBQWI7QUFDQSxNQUFJQyxVQUFVLEdBQUcsV0FBakI7O0FBQ0EsTUFDRSxPQUFPRixNQUFQLEVBQWUsTUFBZixFQUF1QixDQUF2QixLQUE2QixHQUE3QixJQUNBLE9BQU9BLE1BQVAsRUFBZSxNQUFmLEVBQXVCLENBQUMsQ0FBeEIsRUFBMkJDLE1BQTNCLEtBQXNDLENBRHRDLElBRUEsS0FBS0QsTUFBTCxFQUFhLFNBQWIsRUFBd0JDLE1BQXhCLEtBQW1DLENBRm5DLElBR0EsSUFBSUQsTUFBSixFQUFZLFVBQVosRUFBd0JDLE1BQXhCLEtBQW1DLENBSG5DLElBSUEsSUFBSUQsTUFBSixFQUFZLE1BQVosRUFBb0JDLE1BQXBCLElBQThCLENBSjlCLElBS0EsR0FBR0QsTUFBSCxFQUFXLElBQVgsRUFBaUJDLE1BQWpCLENBTkYsRUFPRTtBQUNBLFFBQUlFLElBQUksR0FBRyxPQUFPblQsSUFBUCxDQUFZLEVBQVosRUFBZ0IsQ0FBaEIsTUFBdUJ2SixTQUFsQyxDQURBLENBQzZDO0FBQzdDOztBQUNBb2MsVUFBTSxHQUFHLFVBQVVPLFNBQVYsRUFBcUJDLEtBQXJCLEVBQTRCO0FBQ25DLFVBQUk1UyxNQUFNLEdBQUdGLE1BQU0sQ0FBQyxJQUFELENBQW5CO0FBQ0EsVUFBSTZTLFNBQVMsS0FBSzNjLFNBQWQsSUFBMkI0YyxLQUFLLEtBQUssQ0FBekMsRUFBNEMsT0FBTyxFQUFQLENBRlQsQ0FHbkM7O0FBQ0EsVUFBSSxDQUFDaFIsUUFBUSxDQUFDK1EsU0FBRCxDQUFiLEVBQTBCLE9BQU9OLE1BQU0sQ0FBQ3phLElBQVAsQ0FBWW9JLE1BQVosRUFBb0IyUyxTQUFwQixFQUErQkMsS0FBL0IsQ0FBUDtBQUMxQixVQUFJQyxNQUFNLEdBQUcsRUFBYjtBQUNBLFVBQUlYLEtBQUssR0FBRyxDQUFDUyxTQUFTLENBQUN4UyxVQUFWLEdBQXVCLEdBQXZCLEdBQTZCLEVBQTlCLEtBQ0N3UyxTQUFTLENBQUN2UyxTQUFWLEdBQXNCLEdBQXRCLEdBQTRCLEVBRDdCLEtBRUN1UyxTQUFTLENBQUN0UyxPQUFWLEdBQW9CLEdBQXBCLEdBQTBCLEVBRjNCLEtBR0NzUyxTQUFTLENBQUNyUyxNQUFWLEdBQW1CLEdBQW5CLEdBQXlCLEVBSDFCLENBQVo7QUFJQSxVQUFJd1MsYUFBYSxHQUFHLENBQXBCO0FBQ0EsVUFBSUMsVUFBVSxHQUFHSCxLQUFLLEtBQUs1YyxTQUFWLEdBQXNCLFVBQXRCLEdBQW1DNGMsS0FBSyxLQUFLLENBQTlELENBWG1DLENBWW5DOztBQUNBLFVBQUlJLGFBQWEsR0FBRyxJQUFJalQsTUFBSixDQUFXNFMsU0FBUyxDQUFDblUsTUFBckIsRUFBNkIwVCxLQUFLLEdBQUcsR0FBckMsQ0FBcEI7QUFDQSxVQUFJZSxVQUFKLEVBQWdCM0UsS0FBaEIsRUFBdUI0RSxTQUF2QixFQUFrQ0MsVUFBbEMsRUFBOENuWixDQUE5QyxDQWRtQyxDQWVuQzs7QUFDQSxVQUFJLENBQUMwWSxJQUFMLEVBQVdPLFVBQVUsR0FBRyxJQUFJbFQsTUFBSixDQUFXLE1BQU1pVCxhQUFhLENBQUN4VSxNQUFwQixHQUE2QixVQUF4QyxFQUFvRDBULEtBQXBELENBQWI7O0FBQ1gsYUFBTzVELEtBQUssR0FBRzBFLGFBQWEsQ0FBQ3pULElBQWQsQ0FBbUJTLE1BQW5CLENBQWYsRUFBMkM7QUFDekM7QUFDQWtULGlCQUFTLEdBQUc1RSxLQUFLLENBQUN2WCxLQUFOLEdBQWN1WCxLQUFLLENBQUMsQ0FBRCxDQUFMLENBQVNrRSxNQUFULENBQTFCOztBQUNBLFlBQUlVLFNBQVMsR0FBR0osYUFBaEIsRUFBK0I7QUFDN0JELGdCQUFNLENBQUN6VSxJQUFQLENBQVk0QixNQUFNLENBQUNuSSxLQUFQLENBQWFpYixhQUFiLEVBQTRCeEUsS0FBSyxDQUFDdlgsS0FBbEMsQ0FBWixFQUQ2QixDQUU3QjtBQUNBOztBQUNBLGNBQUksQ0FBQzJiLElBQUQsSUFBU3BFLEtBQUssQ0FBQ2tFLE1BQUQsQ0FBTCxHQUFnQixDQUE3QixFQUFnQ2xFLEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBUzhFLE9BQVQsQ0FBaUJILFVBQWpCLEVBQTZCLFlBQVk7QUFDdkUsaUJBQUtqWixDQUFDLEdBQUcsQ0FBVCxFQUFZQSxDQUFDLEdBQUc1QyxTQUFTLENBQUNvYixNQUFELENBQVQsR0FBb0IsQ0FBcEMsRUFBdUN4WSxDQUFDLEVBQXhDLEVBQTRDLElBQUk1QyxTQUFTLENBQUM0QyxDQUFELENBQVQsS0FBaUJoRSxTQUFyQixFQUFnQ3NZLEtBQUssQ0FBQ3RVLENBQUQsQ0FBTCxHQUFXaEUsU0FBWDtBQUM3RSxXQUYrQjtBQUdoQyxjQUFJc1ksS0FBSyxDQUFDa0UsTUFBRCxDQUFMLEdBQWdCLENBQWhCLElBQXFCbEUsS0FBSyxDQUFDdlgsS0FBTixHQUFjaUosTUFBTSxDQUFDd1MsTUFBRCxDQUE3QyxFQUF1REYsS0FBSyxDQUFDL1UsS0FBTixDQUFZc1YsTUFBWixFQUFvQnZFLEtBQUssQ0FBQ3pXLEtBQU4sQ0FBWSxDQUFaLENBQXBCO0FBQ3ZEc2Isb0JBQVUsR0FBRzdFLEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBU2tFLE1BQVQsQ0FBYjtBQUNBTSx1QkFBYSxHQUFHSSxTQUFoQjtBQUNBLGNBQUlMLE1BQU0sQ0FBQ0wsTUFBRCxDQUFOLElBQWtCTyxVQUF0QixFQUFrQztBQUNuQzs7QUFDRCxZQUFJQyxhQUFhLENBQUNQLFVBQUQsQ0FBYixLQUE4Qm5FLEtBQUssQ0FBQ3ZYLEtBQXhDLEVBQStDaWMsYUFBYSxDQUFDUCxVQUFELENBQWIsR0FmTixDQWVtQztBQUM3RTs7QUFDRCxVQUFJSyxhQUFhLEtBQUs5UyxNQUFNLENBQUN3UyxNQUFELENBQTVCLEVBQXNDO0FBQ3BDLFlBQUlXLFVBQVUsSUFBSSxDQUFDSCxhQUFhLENBQUNoSixJQUFkLENBQW1CLEVBQW5CLENBQW5CLEVBQTJDNkksTUFBTSxDQUFDelUsSUFBUCxDQUFZLEVBQVo7QUFDNUMsT0FGRCxNQUVPeVUsTUFBTSxDQUFDelUsSUFBUCxDQUFZNEIsTUFBTSxDQUFDbkksS0FBUCxDQUFhaWIsYUFBYixDQUFaOztBQUNQLGFBQU9ELE1BQU0sQ0FBQ0wsTUFBRCxDQUFOLEdBQWlCTyxVQUFqQixHQUE4QkYsTUFBTSxDQUFDaGIsS0FBUCxDQUFhLENBQWIsRUFBZ0JrYixVQUFoQixDQUE5QixHQUE0REYsTUFBbkU7QUFDRCxLQXRDRCxDQUhBLENBMENGOztBQUNDLEdBbERELE1Ba0RPLElBQUksSUFBSU4sTUFBSixFQUFZdmMsU0FBWixFQUF1QixDQUF2QixFQUEwQndjLE1BQTFCLENBQUosRUFBdUM7QUFDNUNKLFVBQU0sR0FBRyxVQUFVTyxTQUFWLEVBQXFCQyxLQUFyQixFQUE0QjtBQUNuQyxhQUFPRCxTQUFTLEtBQUszYyxTQUFkLElBQTJCNGMsS0FBSyxLQUFLLENBQXJDLEdBQXlDLEVBQXpDLEdBQThDUCxNQUFNLENBQUN6YSxJQUFQLENBQVksSUFBWixFQUFrQithLFNBQWxCLEVBQTZCQyxLQUE3QixDQUFyRDtBQUNELEtBRkQ7QUFHRCxHQTlEb0UsQ0ErRHJFOzs7QUFDQSxTQUFPLENBQUMsU0FBU2hWLEtBQVQsQ0FBZStVLFNBQWYsRUFBMEJDLEtBQTFCLEVBQWlDO0FBQ3ZDLFFBQUkvYixDQUFDLEdBQUcySSxPQUFPLENBQUMsSUFBRCxDQUFmO0FBQ0EsUUFBSTVELEVBQUUsR0FBRytXLFNBQVMsSUFBSTNjLFNBQWIsR0FBeUJBLFNBQXpCLEdBQXFDMmMsU0FBUyxDQUFDUixLQUFELENBQXZEO0FBQ0EsV0FBT3ZXLEVBQUUsS0FBSzVGLFNBQVAsR0FBbUI0RixFQUFFLENBQUNoRSxJQUFILENBQVErYSxTQUFSLEVBQW1COWIsQ0FBbkIsRUFBc0IrYixLQUF0QixDQUFuQixHQUFrRFIsTUFBTSxDQUFDeGEsSUFBUCxDQUFZa0ksTUFBTSxDQUFDakosQ0FBRCxDQUFsQixFQUF1QjhiLFNBQXZCLEVBQWtDQyxLQUFsQyxDQUF6RDtBQUNELEdBSk0sRUFJSlIsTUFKSSxDQUFQO0FBS0QsQ0FyRUQsRTs7Ozs7Ozs7Ozs7O0FDRGE7O0FBQ2J4YyxtQkFBTyxDQUFDLDhFQUFELENBQVA7O0FBQ0EsSUFBSXNLLFFBQVEsR0FBR3RLLG1CQUFPLENBQUMsa0VBQUQsQ0FBdEI7O0FBQ0EsSUFBSXlkLE1BQU0sR0FBR3pkLG1CQUFPLENBQUMsMERBQUQsQ0FBcEI7O0FBQ0EsSUFBSTRDLFdBQVcsR0FBRzVDLG1CQUFPLENBQUMsc0VBQUQsQ0FBekI7O0FBQ0EsSUFBSTZULFNBQVMsR0FBRyxVQUFoQjtBQUNBLElBQUlDLFNBQVMsR0FBRyxJQUFJRCxTQUFKLENBQWhCOztBQUVBLElBQUk2SixNQUFNLEdBQUcsVUFBVTFYLEVBQVYsRUFBYztBQUN6QmhHLHFCQUFPLENBQUMsZ0VBQUQsQ0FBUCxDQUF1Qm1LLE1BQU0sQ0FBQ2hLLFNBQTlCLEVBQXlDMFQsU0FBekMsRUFBb0Q3TixFQUFwRCxFQUF3RCxJQUF4RDtBQUNELENBRkQsQyxDQUlBOzs7QUFDQSxJQUFJaEcsbUJBQU8sQ0FBQywwREFBRCxDQUFQLENBQW9CLFlBQVk7QUFBRSxTQUFPOFQsU0FBUyxDQUFDOVIsSUFBVixDQUFlO0FBQUU0RyxVQUFNLEVBQUUsR0FBVjtBQUFlMFQsU0FBSyxFQUFFO0FBQXRCLEdBQWYsS0FBK0MsTUFBdEQ7QUFBK0QsQ0FBakcsQ0FBSixFQUF3RztBQUN0R29CLFFBQU0sQ0FBQyxTQUFTM2IsUUFBVCxHQUFvQjtBQUN6QixRQUFJMkgsQ0FBQyxHQUFHWSxRQUFRLENBQUMsSUFBRCxDQUFoQjtBQUNBLFdBQU8sSUFBSTBHLE1BQUosQ0FBV3RILENBQUMsQ0FBQ2QsTUFBYixFQUFxQixHQUFyQixFQUNMLFdBQVdjLENBQVgsR0FBZUEsQ0FBQyxDQUFDNFMsS0FBakIsR0FBeUIsQ0FBQzFaLFdBQUQsSUFBZ0I4RyxDQUFDLFlBQVlTLE1BQTdCLEdBQXNDc1QsTUFBTSxDQUFDemIsSUFBUCxDQUFZMEgsQ0FBWixDQUF0QyxHQUF1RHRKLFNBRDNFLENBQVA7QUFFRCxHQUpLLENBQU4sQ0FEc0csQ0FNeEc7QUFDQyxDQVBELE1BT08sSUFBSTBULFNBQVMsQ0FBQ3ZULElBQVYsSUFBa0JzVCxTQUF0QixFQUFpQztBQUN0QzZKLFFBQU0sQ0FBQyxTQUFTM2IsUUFBVCxHQUFvQjtBQUN6QixXQUFPK1IsU0FBUyxDQUFDOVIsSUFBVixDQUFlLElBQWYsQ0FBUDtBQUNELEdBRkssQ0FBTjtBQUdELEM7Ozs7Ozs7Ozs7OztBQ3hCWTs7QUFDYixJQUFJMmIsR0FBRyxHQUFHM2QsbUJBQU8sQ0FBQyxrRUFBRCxDQUFQLENBQXdCLElBQXhCLENBQVYsQyxDQUVBOzs7QUFDQUEsbUJBQU8sQ0FBQyxzRUFBRCxDQUFQLENBQTBCa0ssTUFBMUIsRUFBa0MsUUFBbEMsRUFBNEMsVUFBVXBGLFFBQVYsRUFBb0I7QUFDOUQsT0FBS2hCLEVBQUwsR0FBVW9HLE1BQU0sQ0FBQ3BGLFFBQUQsQ0FBaEIsQ0FEOEQsQ0FDbEM7O0FBQzVCLE9BQUszQixFQUFMLEdBQVUsQ0FBVixDQUY4RCxDQUVsQztBQUM5QjtBQUNDLENBSkQsRUFJRyxZQUFZO0FBQ2IsTUFBSWxDLENBQUMsR0FBRyxLQUFLNkMsRUFBYjtBQUNBLE1BQUkzQyxLQUFLLEdBQUcsS0FBS2dDLEVBQWpCO0FBQ0EsTUFBSXlhLEtBQUo7QUFDQSxNQUFJemMsS0FBSyxJQUFJRixDQUFDLENBQUNDLE1BQWYsRUFBdUIsT0FBTztBQUFFRSxTQUFLLEVBQUVoQixTQUFUO0FBQW9COEssUUFBSSxFQUFFO0FBQTFCLEdBQVA7QUFDdkIwUyxPQUFLLEdBQUdELEdBQUcsQ0FBQzFjLENBQUQsRUFBSUUsS0FBSixDQUFYO0FBQ0EsT0FBS2dDLEVBQUwsSUFBV3lhLEtBQUssQ0FBQzFjLE1BQWpCO0FBQ0EsU0FBTztBQUFFRSxTQUFLLEVBQUV3YyxLQUFUO0FBQWdCMVMsUUFBSSxFQUFFO0FBQXRCLEdBQVA7QUFDRCxDQVpELEU7Ozs7Ozs7Ozs7OztDQ0hBOztBQUNBLElBQUlqRyxNQUFNLEdBQUdqRixtQkFBTyxDQUFDLDREQUFELENBQXBCOztBQUNBLElBQUkwRSxHQUFHLEdBQUcxRSxtQkFBTyxDQUFDLHNEQUFELENBQWpCOztBQUNBLElBQUk0QyxXQUFXLEdBQUc1QyxtQkFBTyxDQUFDLHNFQUFELENBQXpCOztBQUNBLElBQUlrRixPQUFPLEdBQUdsRixtQkFBTyxDQUFDLDREQUFELENBQXJCOztBQUNBLElBQUltRixRQUFRLEdBQUduRixtQkFBTyxDQUFDLGdFQUFELENBQXRCOztBQUNBLElBQUk4TixJQUFJLEdBQUc5TixtQkFBTyxDQUFDLHdEQUFELENBQVAsQ0FBbUIrRixHQUE5Qjs7QUFDQSxJQUFJOFgsTUFBTSxHQUFHN2QsbUJBQU8sQ0FBQywwREFBRCxDQUFwQjs7QUFDQSxJQUFJMFUsTUFBTSxHQUFHMVUsbUJBQU8sQ0FBQyw0REFBRCxDQUFwQjs7QUFDQSxJQUFJdUYsY0FBYyxHQUFHdkYsbUJBQU8sQ0FBQyxrRkFBRCxDQUE1Qjs7QUFDQSxJQUFJMlUsR0FBRyxHQUFHM1UsbUJBQU8sQ0FBQyxzREFBRCxDQUFqQjs7QUFDQSxJQUFJNkosR0FBRyxHQUFHN0osbUJBQU8sQ0FBQyxzREFBRCxDQUFqQjs7QUFDQSxJQUFJNFgsTUFBTSxHQUFHNVgsbUJBQU8sQ0FBQyw4REFBRCxDQUFwQjs7QUFDQSxJQUFJOGQsU0FBUyxHQUFHOWQsbUJBQU8sQ0FBQyxvRUFBRCxDQUF2Qjs7QUFDQSxJQUFJK2QsUUFBUSxHQUFHL2QsbUJBQU8sQ0FBQyxrRUFBRCxDQUF0Qjs7QUFDQSxJQUFJOEwsT0FBTyxHQUFHOUwsbUJBQU8sQ0FBQyxnRUFBRCxDQUFyQjs7QUFDQSxJQUFJc0ssUUFBUSxHQUFHdEssbUJBQU8sQ0FBQyxrRUFBRCxDQUF0Qjs7QUFDQSxJQUFJUyxRQUFRLEdBQUdULG1CQUFPLENBQUMsa0VBQUQsQ0FBdEI7O0FBQ0EsSUFBSVUsU0FBUyxHQUFHVixtQkFBTyxDQUFDLG9FQUFELENBQXZCOztBQUNBLElBQUlxUyxXQUFXLEdBQUdyUyxtQkFBTyxDQUFDLHdFQUFELENBQXpCOztBQUNBLElBQUl1SCxVQUFVLEdBQUd2SCxtQkFBTyxDQUFDLDBFQUFELENBQXhCOztBQUNBLElBQUlnZSxPQUFPLEdBQUdoZSxtQkFBTyxDQUFDLDBFQUFELENBQXJCOztBQUNBLElBQUlpZSxPQUFPLEdBQUdqZSxtQkFBTyxDQUFDLDhFQUFELENBQXJCOztBQUNBLElBQUlrZSxLQUFLLEdBQUdsZSxtQkFBTyxDQUFDLHNFQUFELENBQW5COztBQUNBLElBQUltZSxHQUFHLEdBQUduZSxtQkFBTyxDQUFDLGtFQUFELENBQWpCOztBQUNBLElBQUk4UyxLQUFLLEdBQUc5UyxtQkFBTyxDQUFDLHNFQUFELENBQW5COztBQUNBLElBQUl3UyxJQUFJLEdBQUcwTCxLQUFLLENBQUMvYixDQUFqQjtBQUNBLElBQUlELEVBQUUsR0FBR2ljLEdBQUcsQ0FBQ2hjLENBQWI7QUFDQSxJQUFJdVEsSUFBSSxHQUFHdUwsT0FBTyxDQUFDOWIsQ0FBbkI7QUFDQSxJQUFJMFYsT0FBTyxHQUFHNVMsTUFBTSxDQUFDMkwsTUFBckI7QUFDQSxJQUFJd04sS0FBSyxHQUFHblosTUFBTSxDQUFDb1osSUFBbkI7O0FBQ0EsSUFBSUMsVUFBVSxHQUFHRixLQUFLLElBQUlBLEtBQUssQ0FBQ0csU0FBaEM7O0FBQ0EsSUFBSTdWLFNBQVMsR0FBRyxXQUFoQjtBQUNBLElBQUk4VixNQUFNLEdBQUczVSxHQUFHLENBQUMsU0FBRCxDQUFoQjtBQUNBLElBQUk0VSxZQUFZLEdBQUc1VSxHQUFHLENBQUMsYUFBRCxDQUF0QjtBQUNBLElBQUl0QixNQUFNLEdBQUcsR0FBR3FELG9CQUFoQjtBQUNBLElBQUk4UyxjQUFjLEdBQUdoSyxNQUFNLENBQUMsaUJBQUQsQ0FBM0I7QUFDQSxJQUFJaUssVUFBVSxHQUFHakssTUFBTSxDQUFDLFNBQUQsQ0FBdkI7QUFDQSxJQUFJa0ssU0FBUyxHQUFHbEssTUFBTSxDQUFDLFlBQUQsQ0FBdEI7QUFDQSxJQUFJekIsV0FBVyxHQUFHcFIsTUFBTSxDQUFDNkcsU0FBRCxDQUF4QjtBQUNBLElBQUlrUixVQUFVLEdBQUcsT0FBTy9CLE9BQVAsSUFBa0IsVUFBbkM7QUFDQSxJQUFJZ0gsT0FBTyxHQUFHNVosTUFBTSxDQUFDNFosT0FBckIsQyxDQUNBOztBQUNBLElBQUlDLE1BQU0sR0FBRyxDQUFDRCxPQUFELElBQVksQ0FBQ0EsT0FBTyxDQUFDblcsU0FBRCxDQUFwQixJQUFtQyxDQUFDbVcsT0FBTyxDQUFDblcsU0FBRCxDQUFQLENBQW1CcVcsU0FBcEUsQyxDQUVBOztBQUNBLElBQUlDLGFBQWEsR0FBR3BjLFdBQVcsSUFBSWliLE1BQU0sQ0FBQyxZQUFZO0FBQ3BELFNBQU9HLE9BQU8sQ0FBQzliLEVBQUUsQ0FBQyxFQUFELEVBQUssR0FBTCxFQUFVO0FBQ3pCeUMsT0FBRyxFQUFFLFlBQVk7QUFBRSxhQUFPekMsRUFBRSxDQUFDLElBQUQsRUFBTyxHQUFQLEVBQVk7QUFBRWQsYUFBSyxFQUFFO0FBQVQsT0FBWixDQUFGLENBQTRCNkUsQ0FBbkM7QUFBdUM7QUFEakMsR0FBVixDQUFILENBQVAsQ0FFSEEsQ0FGRyxJQUVFLENBRlQ7QUFHRCxDQUp3QyxDQUFyQixHQUlmLFVBQVVwRyxFQUFWLEVBQWNRLEdBQWQsRUFBbUIyVSxDQUFuQixFQUFzQjtBQUN6QixNQUFJaUssU0FBUyxHQUFHek0sSUFBSSxDQUFDUyxXQUFELEVBQWM1UyxHQUFkLENBQXBCO0FBQ0EsTUFBSTRlLFNBQUosRUFBZSxPQUFPaE0sV0FBVyxDQUFDNVMsR0FBRCxDQUFsQjtBQUNmNkIsSUFBRSxDQUFDckMsRUFBRCxFQUFLUSxHQUFMLEVBQVUyVSxDQUFWLENBQUY7QUFDQSxNQUFJaUssU0FBUyxJQUFJcGYsRUFBRSxLQUFLb1QsV0FBeEIsRUFBcUMvUSxFQUFFLENBQUMrUSxXQUFELEVBQWM1UyxHQUFkLEVBQW1CNGUsU0FBbkIsQ0FBRjtBQUN0QyxDQVRtQixHQVNoQi9jLEVBVEo7O0FBV0EsSUFBSWdkLElBQUksR0FBRyxVQUFVMUssR0FBVixFQUFlO0FBQ3hCLE1BQUkySyxHQUFHLEdBQUdSLFVBQVUsQ0FBQ25LLEdBQUQsQ0FBVixHQUFrQndKLE9BQU8sQ0FBQ25HLE9BQU8sQ0FBQ25QLFNBQUQsQ0FBUixDQUFuQzs7QUFDQXlXLEtBQUcsQ0FBQ25hLEVBQUosR0FBU3dQLEdBQVQ7QUFDQSxTQUFPMkssR0FBUDtBQUNELENBSkQ7O0FBTUEsSUFBSUMsUUFBUSxHQUFHeEYsVUFBVSxJQUFJLE9BQU8vQixPQUFPLENBQUM1TSxRQUFmLElBQTJCLFFBQXpDLEdBQW9ELFVBQVVwTCxFQUFWLEVBQWM7QUFDL0UsU0FBTyxPQUFPQSxFQUFQLElBQWEsUUFBcEI7QUFDRCxDQUZjLEdBRVgsVUFBVUEsRUFBVixFQUFjO0FBQ2hCLFNBQU9BLEVBQUUsWUFBWWdZLE9BQXJCO0FBQ0QsQ0FKRDs7QUFNQSxJQUFJdlEsZUFBZSxHQUFHLFNBQVNNLGNBQVQsQ0FBd0IvSCxFQUF4QixFQUE0QlEsR0FBNUIsRUFBaUMyVSxDQUFqQyxFQUFvQztBQUN4RCxNQUFJblYsRUFBRSxLQUFLb1QsV0FBWCxFQUF3QjNMLGVBQWUsQ0FBQ3NYLFNBQUQsRUFBWXZlLEdBQVosRUFBaUIyVSxDQUFqQixDQUFmO0FBQ3hCMUssVUFBUSxDQUFDekssRUFBRCxDQUFSO0FBQ0FRLEtBQUcsR0FBR2dTLFdBQVcsQ0FBQ2hTLEdBQUQsRUFBTSxJQUFOLENBQWpCO0FBQ0FpSyxVQUFRLENBQUMwSyxDQUFELENBQVI7O0FBQ0EsTUFBSXRRLEdBQUcsQ0FBQ2lhLFVBQUQsRUFBYXRlLEdBQWIsQ0FBUCxFQUEwQjtBQUN4QixRQUFJLENBQUMyVSxDQUFDLENBQUN2QixVQUFQLEVBQW1CO0FBQ2pCLFVBQUksQ0FBQy9PLEdBQUcsQ0FBQzdFLEVBQUQsRUFBSzJlLE1BQUwsQ0FBUixFQUFzQnRjLEVBQUUsQ0FBQ3JDLEVBQUQsRUFBSzJlLE1BQUwsRUFBYWpYLFVBQVUsQ0FBQyxDQUFELEVBQUksRUFBSixDQUF2QixDQUFGO0FBQ3RCMUgsUUFBRSxDQUFDMmUsTUFBRCxDQUFGLENBQVduZSxHQUFYLElBQWtCLElBQWxCO0FBQ0QsS0FIRCxNQUdPO0FBQ0wsVUFBSXFFLEdBQUcsQ0FBQzdFLEVBQUQsRUFBSzJlLE1BQUwsQ0FBSCxJQUFtQjNlLEVBQUUsQ0FBQzJlLE1BQUQsQ0FBRixDQUFXbmUsR0FBWCxDQUF2QixFQUF3Q1IsRUFBRSxDQUFDMmUsTUFBRCxDQUFGLENBQVduZSxHQUFYLElBQWtCLEtBQWxCO0FBQ3hDMlUsT0FBQyxHQUFHZ0osT0FBTyxDQUFDaEosQ0FBRCxFQUFJO0FBQUV2QixrQkFBVSxFQUFFbE0sVUFBVSxDQUFDLENBQUQsRUFBSSxLQUFKO0FBQXhCLE9BQUosQ0FBWDtBQUNEOztBQUFDLFdBQU95WCxhQUFhLENBQUNuZixFQUFELEVBQUtRLEdBQUwsRUFBVTJVLENBQVYsQ0FBcEI7QUFDSDs7QUFBQyxTQUFPOVMsRUFBRSxDQUFDckMsRUFBRCxFQUFLUSxHQUFMLEVBQVUyVSxDQUFWLENBQVQ7QUFDSCxDQWREOztBQWVBLElBQUlxSyxpQkFBaUIsR0FBRyxTQUFTOU0sZ0JBQVQsQ0FBMEIxUyxFQUExQixFQUE4QnFKLENBQTlCLEVBQWlDO0FBQ3ZEb0IsVUFBUSxDQUFDekssRUFBRCxDQUFSO0FBQ0EsTUFBSTJNLElBQUksR0FBR3VSLFFBQVEsQ0FBQzdVLENBQUMsR0FBR3hJLFNBQVMsQ0FBQ3dJLENBQUQsQ0FBZCxDQUFuQjtBQUNBLE1BQUk5RSxDQUFDLEdBQUcsQ0FBUjtBQUNBLE1BQUlnUixDQUFDLEdBQUc1SSxJQUFJLENBQUN0TCxNQUFiO0FBQ0EsTUFBSWIsR0FBSjs7QUFDQSxTQUFPK1UsQ0FBQyxHQUFHaFIsQ0FBWCxFQUFja0QsZUFBZSxDQUFDekgsRUFBRCxFQUFLUSxHQUFHLEdBQUdtTSxJQUFJLENBQUNwSSxDQUFDLEVBQUYsQ0FBZixFQUFzQjhFLENBQUMsQ0FBQzdJLEdBQUQsQ0FBdkIsQ0FBZjs7QUFDZCxTQUFPUixFQUFQO0FBQ0QsQ0FSRDs7QUFTQSxJQUFJeWYsT0FBTyxHQUFHLFNBQVNsZCxNQUFULENBQWdCdkMsRUFBaEIsRUFBb0JxSixDQUFwQixFQUF1QjtBQUNuQyxTQUFPQSxDQUFDLEtBQUs5SSxTQUFOLEdBQWtCNGQsT0FBTyxDQUFDbmUsRUFBRCxDQUF6QixHQUFnQ3dmLGlCQUFpQixDQUFDckIsT0FBTyxDQUFDbmUsRUFBRCxDQUFSLEVBQWNxSixDQUFkLENBQXhEO0FBQ0QsQ0FGRDs7QUFHQSxJQUFJcVcscUJBQXFCLEdBQUcsU0FBUzNULG9CQUFULENBQThCdkwsR0FBOUIsRUFBbUM7QUFDN0QsTUFBSW1mLENBQUMsR0FBR2pYLE1BQU0sQ0FBQ3ZHLElBQVAsQ0FBWSxJQUFaLEVBQWtCM0IsR0FBRyxHQUFHZ1MsV0FBVyxDQUFDaFMsR0FBRCxFQUFNLElBQU4sQ0FBbkMsQ0FBUjtBQUNBLE1BQUksU0FBUzRTLFdBQVQsSUFBd0J2TyxHQUFHLENBQUNpYSxVQUFELEVBQWF0ZSxHQUFiLENBQTNCLElBQWdELENBQUNxRSxHQUFHLENBQUNrYSxTQUFELEVBQVl2ZSxHQUFaLENBQXhELEVBQTBFLE9BQU8sS0FBUDtBQUMxRSxTQUFPbWYsQ0FBQyxJQUFJLENBQUM5YSxHQUFHLENBQUMsSUFBRCxFQUFPckUsR0FBUCxDQUFULElBQXdCLENBQUNxRSxHQUFHLENBQUNpYSxVQUFELEVBQWF0ZSxHQUFiLENBQTVCLElBQWlEcUUsR0FBRyxDQUFDLElBQUQsRUFBTzhaLE1BQVAsQ0FBSCxJQUFxQixLQUFLQSxNQUFMLEVBQWFuZSxHQUFiLENBQXRFLEdBQTBGbWYsQ0FBMUYsR0FBOEYsSUFBckc7QUFDRCxDQUpEOztBQUtBLElBQUlDLHlCQUF5QixHQUFHLFNBQVNoTix3QkFBVCxDQUFrQzVTLEVBQWxDLEVBQXNDUSxHQUF0QyxFQUEyQztBQUN6RVIsSUFBRSxHQUFHYSxTQUFTLENBQUNiLEVBQUQsQ0FBZDtBQUNBUSxLQUFHLEdBQUdnUyxXQUFXLENBQUNoUyxHQUFELEVBQU0sSUFBTixDQUFqQjtBQUNBLE1BQUlSLEVBQUUsS0FBS29ULFdBQVAsSUFBc0J2TyxHQUFHLENBQUNpYSxVQUFELEVBQWF0ZSxHQUFiLENBQXpCLElBQThDLENBQUNxRSxHQUFHLENBQUNrYSxTQUFELEVBQVl2ZSxHQUFaLENBQXRELEVBQXdFO0FBQ3hFLE1BQUkyVSxDQUFDLEdBQUd4QyxJQUFJLENBQUMzUyxFQUFELEVBQUtRLEdBQUwsQ0FBWjtBQUNBLE1BQUkyVSxDQUFDLElBQUl0USxHQUFHLENBQUNpYSxVQUFELEVBQWF0ZSxHQUFiLENBQVIsSUFBNkIsRUFBRXFFLEdBQUcsQ0FBQzdFLEVBQUQsRUFBSzJlLE1BQUwsQ0FBSCxJQUFtQjNlLEVBQUUsQ0FBQzJlLE1BQUQsQ0FBRixDQUFXbmUsR0FBWCxDQUFyQixDQUFqQyxFQUF3RTJVLENBQUMsQ0FBQ3ZCLFVBQUYsR0FBZSxJQUFmO0FBQ3hFLFNBQU91QixDQUFQO0FBQ0QsQ0FQRDs7QUFRQSxJQUFJMEssb0JBQW9CLEdBQUcsU0FBUzlNLG1CQUFULENBQTZCL1MsRUFBN0IsRUFBaUM7QUFDMUQsTUFBSXNULEtBQUssR0FBR1QsSUFBSSxDQUFDaFMsU0FBUyxDQUFDYixFQUFELENBQVYsQ0FBaEI7QUFDQSxNQUFJdUksTUFBTSxHQUFHLEVBQWI7QUFDQSxNQUFJaEUsQ0FBQyxHQUFHLENBQVI7QUFDQSxNQUFJL0QsR0FBSjs7QUFDQSxTQUFPOFMsS0FBSyxDQUFDalMsTUFBTixHQUFla0QsQ0FBdEIsRUFBeUI7QUFDdkIsUUFBSSxDQUFDTSxHQUFHLENBQUNpYSxVQUFELEVBQWF0ZSxHQUFHLEdBQUc4UyxLQUFLLENBQUMvTyxDQUFDLEVBQUYsQ0FBeEIsQ0FBSixJQUFzQy9ELEdBQUcsSUFBSW1lLE1BQTdDLElBQXVEbmUsR0FBRyxJQUFJeU4sSUFBbEUsRUFBd0UxRixNQUFNLENBQUNJLElBQVAsQ0FBWW5JLEdBQVo7QUFDekU7O0FBQUMsU0FBTytILE1BQVA7QUFDSCxDQVJEOztBQVNBLElBQUl1WCxzQkFBc0IsR0FBRyxTQUFTM00scUJBQVQsQ0FBK0JuVCxFQUEvQixFQUFtQztBQUM5RCxNQUFJK2YsS0FBSyxHQUFHL2YsRUFBRSxLQUFLb1QsV0FBbkI7QUFDQSxNQUFJRSxLQUFLLEdBQUdULElBQUksQ0FBQ2tOLEtBQUssR0FBR2hCLFNBQUgsR0FBZWxlLFNBQVMsQ0FBQ2IsRUFBRCxDQUE5QixDQUFoQjtBQUNBLE1BQUl1SSxNQUFNLEdBQUcsRUFBYjtBQUNBLE1BQUloRSxDQUFDLEdBQUcsQ0FBUjtBQUNBLE1BQUkvRCxHQUFKOztBQUNBLFNBQU84UyxLQUFLLENBQUNqUyxNQUFOLEdBQWVrRCxDQUF0QixFQUF5QjtBQUN2QixRQUFJTSxHQUFHLENBQUNpYSxVQUFELEVBQWF0ZSxHQUFHLEdBQUc4UyxLQUFLLENBQUMvTyxDQUFDLEVBQUYsQ0FBeEIsQ0FBSCxLQUFzQ3diLEtBQUssR0FBR2xiLEdBQUcsQ0FBQ3VPLFdBQUQsRUFBYzVTLEdBQWQsQ0FBTixHQUEyQixJQUF0RSxDQUFKLEVBQWlGK0gsTUFBTSxDQUFDSSxJQUFQLENBQVltVyxVQUFVLENBQUN0ZSxHQUFELENBQXRCO0FBQ2xGOztBQUFDLFNBQU8rSCxNQUFQO0FBQ0gsQ0FURCxDLENBV0E7OztBQUNBLElBQUksQ0FBQ3dSLFVBQUwsRUFBaUI7QUFDZi9CLFNBQU8sR0FBRyxTQUFTakgsTUFBVCxHQUFrQjtBQUMxQixRQUFJLGdCQUFnQmlILE9BQXBCLEVBQTZCLE1BQU0vWCxTQUFTLENBQUMsOEJBQUQsQ0FBZjtBQUM3QixRQUFJMFUsR0FBRyxHQUFHRyxHQUFHLENBQUNuVCxTQUFTLENBQUNOLE1BQVYsR0FBbUIsQ0FBbkIsR0FBdUJNLFNBQVMsQ0FBQyxDQUFELENBQWhDLEdBQXNDcEIsU0FBdkMsQ0FBYjs7QUFDQSxRQUFJeWYsSUFBSSxHQUFHLFVBQVV6ZSxLQUFWLEVBQWlCO0FBQzFCLFVBQUksU0FBUzZSLFdBQWIsRUFBMEI0TSxJQUFJLENBQUM3ZCxJQUFMLENBQVU0YyxTQUFWLEVBQXFCeGQsS0FBckI7QUFDMUIsVUFBSXNELEdBQUcsQ0FBQyxJQUFELEVBQU84WixNQUFQLENBQUgsSUFBcUI5WixHQUFHLENBQUMsS0FBSzhaLE1BQUwsQ0FBRCxFQUFlaEssR0FBZixDQUE1QixFQUFpRCxLQUFLZ0ssTUFBTCxFQUFhaEssR0FBYixJQUFvQixLQUFwQjtBQUNqRHdLLG1CQUFhLENBQUMsSUFBRCxFQUFPeEssR0FBUCxFQUFZak4sVUFBVSxDQUFDLENBQUQsRUFBSW5HLEtBQUosQ0FBdEIsQ0FBYjtBQUNELEtBSkQ7O0FBS0EsUUFBSXdCLFdBQVcsSUFBSWtjLE1BQW5CLEVBQTJCRSxhQUFhLENBQUMvTCxXQUFELEVBQWN1QixHQUFkLEVBQW1CO0FBQUVkLGtCQUFZLEVBQUUsSUFBaEI7QUFBc0J2TixTQUFHLEVBQUUwWjtBQUEzQixLQUFuQixDQUFiO0FBQzNCLFdBQU9YLElBQUksQ0FBQzFLLEdBQUQsQ0FBWDtBQUNELEdBVkQ7O0FBV0FyUCxVQUFRLENBQUMwUyxPQUFPLENBQUNuUCxTQUFELENBQVIsRUFBcUIsVUFBckIsRUFBaUMsU0FBUzNHLFFBQVQsR0FBb0I7QUFDM0QsV0FBTyxLQUFLaUQsRUFBWjtBQUNELEdBRk8sQ0FBUjtBQUlBa1osT0FBSyxDQUFDL2IsQ0FBTixHQUFVc2QseUJBQVY7QUFDQXRCLEtBQUcsQ0FBQ2hjLENBQUosR0FBUW1GLGVBQVI7QUFDQXRILHFCQUFPLENBQUMsc0VBQUQsQ0FBUCxDQUEwQm1DLENBQTFCLEdBQThCOGIsT0FBTyxDQUFDOWIsQ0FBUixHQUFZdWQsb0JBQTFDO0FBQ0ExZixxQkFBTyxDQUFDLG9FQUFELENBQVAsQ0FBeUJtQyxDQUF6QixHQUE2Qm9kLHFCQUE3QjtBQUNBdmYscUJBQU8sQ0FBQyxzRUFBRCxDQUFQLENBQTBCbUMsQ0FBMUIsR0FBOEJ3ZCxzQkFBOUI7O0FBRUEsTUFBSS9jLFdBQVcsSUFBSSxDQUFDNUMsbUJBQU8sQ0FBQyw4REFBRCxDQUEzQixFQUEyQztBQUN6Q21GLFlBQVEsQ0FBQzhOLFdBQUQsRUFBYyxzQkFBZCxFQUFzQ3NNLHFCQUF0QyxFQUE2RCxJQUE3RCxDQUFSO0FBQ0Q7O0FBRUQzSCxRQUFNLENBQUN6VixDQUFQLEdBQVcsVUFBVTVCLElBQVYsRUFBZ0I7QUFDekIsV0FBTzJlLElBQUksQ0FBQ3JWLEdBQUcsQ0FBQ3RKLElBQUQsQ0FBSixDQUFYO0FBQ0QsR0FGRDtBQUdEOztBQUVEMkUsT0FBTyxDQUFDQSxPQUFPLENBQUM4QixDQUFSLEdBQVk5QixPQUFPLENBQUMrQixDQUFwQixHQUF3Qi9CLE9BQU8sQ0FBQ2dDLENBQVIsR0FBWSxDQUFDMFMsVUFBdEMsRUFBa0Q7QUFBRWhKLFFBQU0sRUFBRWlIO0FBQVYsQ0FBbEQsQ0FBUDs7QUFFQSxLQUFLLElBQUlpSSxVQUFVLEdBQ2pCO0FBQ0EsZ0hBRm9CLENBR3BCOVgsS0FIb0IsQ0FHZCxHQUhjLENBQWpCLEVBR1NpSixDQUFDLEdBQUcsQ0FIbEIsRUFHcUI2TyxVQUFVLENBQUM1ZSxNQUFYLEdBQW9CK1AsQ0FIekMsR0FHNENwSCxHQUFHLENBQUNpVyxVQUFVLENBQUM3TyxDQUFDLEVBQUYsQ0FBWCxDQUFIOztBQUU1QyxLQUFLLElBQUk4TyxnQkFBZ0IsR0FBR2pOLEtBQUssQ0FBQ2pKLEdBQUcsQ0FBQ2dMLEtBQUwsQ0FBNUIsRUFBeUN2UixDQUFDLEdBQUcsQ0FBbEQsRUFBcUR5YyxnQkFBZ0IsQ0FBQzdlLE1BQWpCLEdBQTBCb0MsQ0FBL0UsR0FBbUZ3YSxTQUFTLENBQUNpQyxnQkFBZ0IsQ0FBQ3pjLENBQUMsRUFBRixDQUFqQixDQUFUOztBQUVuRjRCLE9BQU8sQ0FBQ0EsT0FBTyxDQUFDOEQsQ0FBUixHQUFZOUQsT0FBTyxDQUFDZ0MsQ0FBUixHQUFZLENBQUMwUyxVQUExQixFQUFzQyxRQUF0QyxFQUFnRDtBQUNyRDtBQUNBLFNBQU8sVUFBVXZaLEdBQVYsRUFBZTtBQUNwQixXQUFPcUUsR0FBRyxDQUFDZ2EsY0FBRCxFQUFpQnJlLEdBQUcsSUFBSSxFQUF4QixDQUFILEdBQ0hxZSxjQUFjLENBQUNyZSxHQUFELENBRFgsR0FFSHFlLGNBQWMsQ0FBQ3JlLEdBQUQsQ0FBZCxHQUFzQndYLE9BQU8sQ0FBQ3hYLEdBQUQsQ0FGakM7QUFHRCxHQU5vRDtBQU9yRDtBQUNBMmYsUUFBTSxFQUFFLFNBQVNBLE1BQVQsQ0FBZ0JiLEdBQWhCLEVBQXFCO0FBQzNCLFFBQUksQ0FBQ0MsUUFBUSxDQUFDRCxHQUFELENBQWIsRUFBb0IsTUFBTXJmLFNBQVMsQ0FBQ3FmLEdBQUcsR0FBRyxtQkFBUCxDQUFmOztBQUNwQixTQUFLLElBQUk5ZSxHQUFULElBQWdCcWUsY0FBaEIsRUFBZ0MsSUFBSUEsY0FBYyxDQUFDcmUsR0FBRCxDQUFkLEtBQXdCOGUsR0FBNUIsRUFBaUMsT0FBTzllLEdBQVA7QUFDbEUsR0FYb0Q7QUFZckQ0ZixXQUFTLEVBQUUsWUFBWTtBQUFFbkIsVUFBTSxHQUFHLElBQVQ7QUFBZ0IsR0FaWTtBQWFyRG9CLFdBQVMsRUFBRSxZQUFZO0FBQUVwQixVQUFNLEdBQUcsS0FBVDtBQUFpQjtBQWJXLENBQWhELENBQVA7QUFnQkE1WixPQUFPLENBQUNBLE9BQU8sQ0FBQzhELENBQVIsR0FBWTlELE9BQU8sQ0FBQ2dDLENBQVIsR0FBWSxDQUFDMFMsVUFBMUIsRUFBc0MsUUFBdEMsRUFBZ0Q7QUFDckQ7QUFDQXhYLFFBQU0sRUFBRWtkLE9BRjZDO0FBR3JEO0FBQ0ExWCxnQkFBYyxFQUFFTixlQUpxQztBQUtyRDtBQUNBaUwsa0JBQWdCLEVBQUU4TSxpQkFObUM7QUFPckQ7QUFDQTVNLDBCQUF3QixFQUFFZ04seUJBUjJCO0FBU3JEO0FBQ0E3TSxxQkFBbUIsRUFBRThNLG9CQVZnQztBQVdyRDtBQUNBMU0sdUJBQXFCLEVBQUUyTTtBQVo4QixDQUFoRCxDQUFQLEMsQ0FlQTs7QUFDQXZCLEtBQUssSUFBSWxaLE9BQU8sQ0FBQ0EsT0FBTyxDQUFDOEQsQ0FBUixHQUFZOUQsT0FBTyxDQUFDZ0MsQ0FBUixJQUFhLENBQUMwUyxVQUFELElBQWVpRSxNQUFNLENBQUMsWUFBWTtBQUMxRSxNQUFJN1UsQ0FBQyxHQUFHNk8sT0FBTyxFQUFmLENBRDBFLENBRTFFO0FBQ0E7QUFDQTs7QUFDQSxTQUFPeUcsVUFBVSxDQUFDLENBQUN0VixDQUFELENBQUQsQ0FBVixJQUFtQixRQUFuQixJQUErQnNWLFVBQVUsQ0FBQztBQUFFclksS0FBQyxFQUFFK0M7QUFBTCxHQUFELENBQVYsSUFBd0IsSUFBdkQsSUFBK0RzVixVQUFVLENBQUN6YyxNQUFNLENBQUNtSCxDQUFELENBQVAsQ0FBVixJQUF5QixJQUEvRjtBQUNELENBTjhELENBQWxDLENBQWIsRUFNWCxNQU5XLEVBTUg7QUFDWHVWLFdBQVMsRUFBRSxTQUFTQSxTQUFULENBQW1CMWUsRUFBbkIsRUFBdUI7QUFDaEMsUUFBSTZMLElBQUksR0FBRyxDQUFDN0wsRUFBRCxDQUFYO0FBQ0EsUUFBSXVFLENBQUMsR0FBRyxDQUFSO0FBQ0EsUUFBSStiLFFBQUosRUFBY0MsU0FBZDs7QUFDQSxXQUFPNWUsU0FBUyxDQUFDTixNQUFWLEdBQW1Ca0QsQ0FBMUIsRUFBNkJzSCxJQUFJLENBQUNsRCxJQUFMLENBQVVoSCxTQUFTLENBQUM0QyxDQUFDLEVBQUYsQ0FBbkI7O0FBQzdCZ2MsYUFBUyxHQUFHRCxRQUFRLEdBQUd6VSxJQUFJLENBQUMsQ0FBRCxDQUEzQjtBQUNBLFFBQUksQ0FBQ2pMLFFBQVEsQ0FBQzBmLFFBQUQsQ0FBVCxJQUF1QnRnQixFQUFFLEtBQUtPLFNBQTlCLElBQTJDZ2YsUUFBUSxDQUFDdmYsRUFBRCxDQUF2RCxFQUE2RCxPQU43QixDQU1xQzs7QUFDckUsUUFBSSxDQUFDaU0sT0FBTyxDQUFDcVUsUUFBRCxDQUFaLEVBQXdCQSxRQUFRLEdBQUcsVUFBVTlmLEdBQVYsRUFBZWUsS0FBZixFQUFzQjtBQUN2RCxVQUFJLE9BQU9nZixTQUFQLElBQW9CLFVBQXhCLEVBQW9DaGYsS0FBSyxHQUFHZ2YsU0FBUyxDQUFDcGUsSUFBVixDQUFlLElBQWYsRUFBcUIzQixHQUFyQixFQUEwQmUsS0FBMUIsQ0FBUjtBQUNwQyxVQUFJLENBQUNnZSxRQUFRLENBQUNoZSxLQUFELENBQWIsRUFBc0IsT0FBT0EsS0FBUDtBQUN2QixLQUh1QjtBQUl4QnNLLFFBQUksQ0FBQyxDQUFELENBQUosR0FBVXlVLFFBQVY7QUFDQSxXQUFPN0IsVUFBVSxDQUFDM1csS0FBWCxDQUFpQnlXLEtBQWpCLEVBQXdCMVMsSUFBeEIsQ0FBUDtBQUNEO0FBZFUsQ0FORyxDQUFoQixDLENBdUJBOztBQUNBbU0sT0FBTyxDQUFDblAsU0FBRCxDQUFQLENBQW1CK1YsWUFBbkIsS0FBb0N6ZSxtQkFBTyxDQUFDLHdEQUFELENBQVAsQ0FBbUI2WCxPQUFPLENBQUNuUCxTQUFELENBQTFCLEVBQXVDK1YsWUFBdkMsRUFBcUQ1RyxPQUFPLENBQUNuUCxTQUFELENBQVAsQ0FBbUI2TyxPQUF4RSxDQUFwQyxDLENBQ0E7O0FBQ0FoUyxjQUFjLENBQUNzUyxPQUFELEVBQVUsUUFBVixDQUFkLEMsQ0FDQTs7QUFDQXRTLGNBQWMsQ0FBQzZGLElBQUQsRUFBTyxNQUFQLEVBQWUsSUFBZixDQUFkLEMsQ0FDQTs7QUFDQTdGLGNBQWMsQ0FBQ04sTUFBTSxDQUFDb1osSUFBUixFQUFjLE1BQWQsRUFBc0IsSUFBdEIsQ0FBZCxDOzs7Ozs7Ozs7OztBQ3pPQTtBQUNBLElBQUluWixPQUFPLEdBQUdsRixtQkFBTyxDQUFDLDREQUFELENBQXJCOztBQUNBLElBQUlzTixRQUFRLEdBQUd0TixtQkFBTyxDQUFDLDhFQUFELENBQVAsQ0FBOEIsSUFBOUIsQ0FBZjs7QUFFQWtGLE9BQU8sQ0FBQ0EsT0FBTyxDQUFDOEQsQ0FBVCxFQUFZLFFBQVosRUFBc0I7QUFDM0IzQyxTQUFPLEVBQUUsU0FBU0EsT0FBVCxDQUFpQnhHLEVBQWpCLEVBQXFCO0FBQzVCLFdBQU95TixRQUFRLENBQUN6TixFQUFELENBQWY7QUFDRDtBQUgwQixDQUF0QixDQUFQLEM7Ozs7Ozs7Ozs7O0FDSkFHLG1CQUFPLENBQUMsb0VBQUQsQ0FBUCxDQUF5QixlQUF6QixFOzs7Ozs7Ozs7OztBQ0FBLElBQUlxZ0IsVUFBVSxHQUFHcmdCLG1CQUFPLENBQUMsa0ZBQUQsQ0FBeEI7O0FBQ0EsSUFBSWlJLE9BQU8sR0FBR2pJLG1CQUFPLENBQUMsc0VBQUQsQ0FBckI7O0FBQ0EsSUFBSW1GLFFBQVEsR0FBR25GLG1CQUFPLENBQUMsZ0VBQUQsQ0FBdEI7O0FBQ0EsSUFBSWlGLE1BQU0sR0FBR2pGLG1CQUFPLENBQUMsNERBQUQsQ0FBcEI7O0FBQ0EsSUFBSXlJLElBQUksR0FBR3pJLG1CQUFPLENBQUMsd0RBQUQsQ0FBbEI7O0FBQ0EsSUFBSTZMLFNBQVMsR0FBRzdMLG1CQUFPLENBQUMsa0VBQUQsQ0FBdkI7O0FBQ0EsSUFBSTZKLEdBQUcsR0FBRzdKLG1CQUFPLENBQUMsc0RBQUQsQ0FBakI7O0FBQ0EsSUFBSStLLFFBQVEsR0FBR2xCLEdBQUcsQ0FBQyxVQUFELENBQWxCO0FBQ0EsSUFBSXlXLGFBQWEsR0FBR3pXLEdBQUcsQ0FBQyxhQUFELENBQXZCO0FBQ0EsSUFBSTBXLFdBQVcsR0FBRzFVLFNBQVMsQ0FBQzNMLEtBQTVCO0FBRUEsSUFBSXNnQixZQUFZLEdBQUc7QUFDakJDLGFBQVcsRUFBRSxJQURJO0FBQ0U7QUFDbkJDLHFCQUFtQixFQUFFLEtBRko7QUFHakJDLGNBQVksRUFBRSxLQUhHO0FBSWpCQyxnQkFBYyxFQUFFLEtBSkM7QUFLakJDLGFBQVcsRUFBRSxLQUxJO0FBTWpCQyxlQUFhLEVBQUUsS0FORTtBQU9qQkMsY0FBWSxFQUFFLElBUEc7QUFRakJDLHNCQUFvQixFQUFFLEtBUkw7QUFTakJDLFVBQVEsRUFBRSxLQVRPO0FBVWpCQyxtQkFBaUIsRUFBRSxLQVZGO0FBV2pCQyxnQkFBYyxFQUFFLEtBWEM7QUFZakJDLGlCQUFlLEVBQUUsS0FaQTtBQWFqQkMsbUJBQWlCLEVBQUUsS0FiRjtBQWNqQkMsV0FBUyxFQUFFLElBZE07QUFjQTtBQUNqQkMsZUFBYSxFQUFFLEtBZkU7QUFnQmpCQyxjQUFZLEVBQUUsS0FoQkc7QUFpQmpCQyxVQUFRLEVBQUUsSUFqQk87QUFrQmpCQyxrQkFBZ0IsRUFBRSxLQWxCRDtBQW1CakJDLFFBQU0sRUFBRSxLQW5CUztBQW9CakJDLGFBQVcsRUFBRSxLQXBCSTtBQXFCakJDLGVBQWEsRUFBRSxLQXJCRTtBQXNCakJDLGVBQWEsRUFBRSxLQXRCRTtBQXVCakJDLGdCQUFjLEVBQUUsS0F2QkM7QUF3QmpCQyxjQUFZLEVBQUUsS0F4Qkc7QUF5QmpCQyxlQUFhLEVBQUUsS0F6QkU7QUEwQmpCQyxrQkFBZ0IsRUFBRSxLQTFCRDtBQTJCakJDLGtCQUFnQixFQUFFLEtBM0JEO0FBNEJqQkMsZ0JBQWMsRUFBRSxJQTVCQztBQTRCSztBQUN0QkMsa0JBQWdCLEVBQUUsS0E3QkQ7QUE4QmpCQyxlQUFhLEVBQUUsS0E5QkU7QUErQmpCQyxXQUFTLEVBQUU7QUEvQk0sQ0FBbkI7O0FBa0NBLEtBQUssSUFBSUMsV0FBVyxHQUFHdmEsT0FBTyxDQUFDdVksWUFBRCxDQUF6QixFQUF5Q3BjLENBQUMsR0FBRyxDQUFsRCxFQUFxREEsQ0FBQyxHQUFHb2UsV0FBVyxDQUFDdGhCLE1BQXJFLEVBQTZFa0QsQ0FBQyxFQUE5RSxFQUFrRjtBQUNoRixNQUFJWCxJQUFJLEdBQUcrZSxXQUFXLENBQUNwZSxDQUFELENBQXRCO0FBQ0EsTUFBSXFlLFFBQVEsR0FBR2pDLFlBQVksQ0FBQy9jLElBQUQsQ0FBM0I7QUFDQSxNQUFJaWYsVUFBVSxHQUFHemQsTUFBTSxDQUFDeEIsSUFBRCxDQUF2QjtBQUNBLE1BQUlvQyxLQUFLLEdBQUc2YyxVQUFVLElBQUlBLFVBQVUsQ0FBQ3ZpQixTQUFyQztBQUNBLE1BQUlFLEdBQUo7O0FBQ0EsTUFBSXdGLEtBQUosRUFBVztBQUNULFFBQUksQ0FBQ0EsS0FBSyxDQUFDa0YsUUFBRCxDQUFWLEVBQXNCdEMsSUFBSSxDQUFDNUMsS0FBRCxFQUFRa0YsUUFBUixFQUFrQndWLFdBQWxCLENBQUo7QUFDdEIsUUFBSSxDQUFDMWEsS0FBSyxDQUFDeWEsYUFBRCxDQUFWLEVBQTJCN1gsSUFBSSxDQUFDNUMsS0FBRCxFQUFReWEsYUFBUixFQUF1QjdjLElBQXZCLENBQUo7QUFDM0JvSSxhQUFTLENBQUNwSSxJQUFELENBQVQsR0FBa0I4YyxXQUFsQjtBQUNBLFFBQUlrQyxRQUFKLEVBQWMsS0FBS3BpQixHQUFMLElBQVlnZ0IsVUFBWixFQUF3QixJQUFJLENBQUN4YSxLQUFLLENBQUN4RixHQUFELENBQVYsRUFBaUI4RSxRQUFRLENBQUNVLEtBQUQsRUFBUXhGLEdBQVIsRUFBYWdnQixVQUFVLENBQUNoZ0IsR0FBRCxDQUF2QixFQUE4QixJQUE5QixDQUFSO0FBQ3hEO0FBQ0YsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pERDtBQUNBOztBQUVBc2lCLGVBQWUsQ0FBQ0MsU0FBaEI7QUFBQTtBQUFBO0FBQUE7O0FBQ0Usa0JBQVlDLFFBQVosRUFBc0I7QUFBQTs7QUFBQTs7QUFDcEIsZ0ZBQU1BLFFBQU47QUFDQTVILFdBQU8sQ0FBQzZILEdBQVIsQ0FBWSw4QkFBWixFQUE0QyxNQUFLQyxFQUFMLENBQVFDLEdBQVIsQ0FBWSxTQUFaLENBQTVDLEVBRm9CLENBRWlEO0FBQ3JFOztBQUNBLFVBQUtDLGtCQUFMLEdBQTBCQywyREFBa0IsQ0FBQzNjLFFBQTdDO0FBSm9CO0FBS3JCOztBQU5IO0FBQUE7QUFBQSx1Q0FRcUI7QUFDakIsYUFBTyxLQUFLMGMsa0JBQUwsQ0FBd0JFLGdCQUF4QixFQUFQO0FBQ0Q7QUFWSDtBQUFBO0FBQUEscUNBWW1CNWlCLElBWm5CLEVBWXlCa0ksSUFaekIsRUFZK0IyYSxFQVovQixFQVltQztBQUMvQixVQUFJLENBQUMsS0FBS0gsa0JBQVYsRUFBOEI7QUFDNUI7QUFDQSxjQUFNLElBQUlJLEtBQUosQ0FBVSxrREFBVixDQUFOO0FBQ0Q7O0FBQ0QsVUFBSSxDQUFDLEtBQUtKLGtCQUFMLENBQXdCSyxZQUF4QixFQUFMLEVBQTZDO0FBQzNDLGNBQU0sSUFBSUQsS0FBSixDQUFVLG9CQUFWLENBQU4sQ0FEMkMsQ0FFM0M7QUFDRDs7QUFDRCxXQUFLRSxJQUFMLENBQVVDLHVCQUFWLENBQWtDLEtBQUtDLE1BQXZDLEVBVCtCLENBU2lCOztBQUNoRCxXQUFLQyxpQkFBTCxDQUF1Qm5qQixJQUF2Qjs7QUFDQSxhQUFPLEtBQUswaUIsa0JBQUwsQ0FBd0JVLGVBQXhCLENBQXdDbGIsSUFBeEMsRUFBOEMyYSxFQUE5QyxFQUFrRCxLQUFLTCxFQUF2RCxDQUFQO0FBQ0Q7QUF4Qkg7QUFBQTtBQUFBLGtDQTBCZ0J4aUIsSUExQmhCLEVBMEJzQmtJLElBMUJ0QixFQTBCNEIyYSxFQTFCNUIsRUEwQmdDO0FBQzVCLGFBQU8sS0FBS1EsZ0JBQUwsQ0FBc0JyakIsSUFBdEIsRUFBNEJrSSxJQUE1QixFQUFrQzJhLEVBQWxDLENBQVA7QUFDRDtBQTVCSDtBQUFBO0FBQUEsbUNBOEJpQjdpQixJQTlCakIsRUE4QnVCa0ksSUE5QnZCLEVBOEI2QjJhLEVBOUI3QixFQThCaUM7QUFDN0IsYUFBTyxLQUFLUSxnQkFBTCxDQUFzQnJqQixJQUF0QixFQUE0QmtJLElBQTVCLEVBQWtDMmEsRUFBbEMsQ0FBUDtBQUNEO0FBaENIO0FBQUE7QUFBQSw4QkFrQ1lTLFdBbENaLEVBa0N5QjtBQUNyQjtBQUNBO0FBQ0EsVUFBSSxDQUFDLEtBQUtDLFlBQVYsRUFBd0I7QUFDdEIsZUFBTyxLQUFQO0FBQ0Q7O0FBQ0QsVUFBTTNpQixLQUFLLEdBQUcsS0FBSzRpQixZQUFMLEVBQWQ7QUFDQSxhQUFPLEtBQUtoQixFQUFMLENBQVFpQixhQUFSLENBQXNCLGFBQXRCLEVBQXFDSCxXQUFyQyxFQUFrRDFpQixLQUFsRCxDQUFQO0FBQ0Q7QUExQ0g7QUFBQTtBQUFBLDZCQTRDVzhpQixjQTVDWCxFQTRDMkJDLGdCQTVDM0IsRUE0QzZDbFcsRUE1QzdDLEVBNENpRDtBQUM3QztBQUNBLFVBQU1tVyxLQUFLLEdBQUcsT0FBT25XLEVBQVAsS0FBYyxXQUFkLEdBQTRCLEtBQUtvVyxnQkFBTCxDQUFzQixJQUF0QixFQUE0QkMsRUFBeEQsR0FBNkRyVyxFQUEzRTtBQUNBLFVBQUlzVyxNQUFNLDhCQUF1QkwsY0FBdkIseUJBQW9EQyxnQkFBcEQsQ0FBVjtBQUNBSSxZQUFNLHNEQUErQ0gsS0FBL0MsQ0FBTjtBQUNBRyxZQUFNLEdBQUdDLFNBQVMsQ0FBQ0QsTUFBRCxDQUFsQjtBQUNBRSxlQUFTLENBQUNDLEtBQVYsQ0FBZ0JDLFFBQWhCLENBQXlCVCxjQUF6QixFQUF5QyxFQUF6QyxFQUE2Q0ssTUFBN0MsRUFBcUQsRUFBckQ7QUFDRDtBQW5ESDtBQUFBO0FBQUEsa0NBcUR1QjtBQUNuQixVQUFNSyxPQUFPLEdBQUdILFNBQVMsQ0FBQ0MsS0FBVixDQUFnQkcsVUFBaEIsRUFBaEI7QUFDQUQsYUFBTyxDQUFDRSxJQUFSO0FBQ0FGLGFBQU8sQ0FBQ0csS0FBUjtBQUNEO0FBekRIOztBQUFBO0FBQUEsRUFBMENDLHNEQUExQyxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNIcUJBLGE7OztBQUNuQix5QkFBWWxDLFFBQVosRUFBc0I7QUFBQTs7QUFBQTs7QUFDcEIsU0FBS21DLE1BQUwsR0FBY0MsUUFBUSxDQUFDQyxVQUFULENBQW9CLHFCQUFwQixDQUFkO0FBQ0EsU0FBS25DLEVBQUwsR0FBVUYsUUFBUSxDQUFDRSxFQUFuQjtBQUNBLFNBQUtRLElBQUwsR0FBWWlCLFNBQVMsQ0FBQ0MsS0FBVixDQUFnQlUsYUFBaEIsRUFBWjtBQUNBLFNBQUtDLFVBQUwsR0FBa0IsS0FBS3JDLEVBQUwsQ0FBUUMsR0FBUixDQUFZLFNBQVosQ0FBbEI7QUFDQSxTQUFLUyxNQUFMLEdBQWMsS0FBS0YsSUFBTCxDQUFVOEIsWUFBVixHQUF5QixLQUFLRCxVQUE5QixDQUFkO0FBQ0EsU0FBS3RCLFlBQUwsR0FBb0IsT0FBTyxLQUFLTCxNQUFMLENBQVk2QixnQkFBbkIsS0FBd0MsVUFBNUQ7QUFDQSxTQUFLQyxRQUFMLEdBQWdCLEVBQWhCLENBUG9CLENBT0E7O0FBQ3BCLFNBQUtDLEdBQUwsR0FBVyxFQUFYO0FBRUEsU0FBS0MsS0FBTCxHQUFhLENBQWI7QUFDQSxTQUFLQyxXQUFMLEdBQW1CLEVBQW5CO0FBQ0EsUUFBTUMsSUFBSSxHQUFHLEtBQUtsQyxNQUFMLENBQVltQyxPQUFaLEVBQWI7QUFDQSxTQUFLN0MsRUFBTCxDQUFROEMseUJBQVIsQ0FBa0MsS0FBS2IsTUFBTCxDQUFZcmdCLEdBQVosQ0FBZ0Isc0JBQWhCLENBQWxDLEVBQTJFLFVBQUNtaEIsT0FBRCxFQUFhO0FBQ3RGLFVBQUlILElBQUksS0FBS0csT0FBTyxDQUFDQyxXQUFSLENBQW9CLElBQXBCLENBQWIsRUFBd0M7QUFDdEMsYUFBSyxJQUFJM2hCLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBSSxDQUFDc2hCLFdBQUwsQ0FBaUJ4a0IsTUFBckMsRUFBNkNrRCxDQUFDLElBQUksQ0FBbEQsRUFBcUQ7QUFDbkQ7QUFDQSxlQUFJLENBQUNzaEIsV0FBTCxDQUFpQnRoQixDQUFqQixFQUFvQjRoQixJQUFwQjtBQUNEO0FBQ0Y7QUFDRixLQVBELEVBYm9CLENBc0JwQjs7QUFDQSxRQUFJLENBQUMsS0FBS2xDLFlBQVYsRUFBd0I7QUFDdEIsVUFBTW1DLFFBQVEsZUFBUSxLQUFLbEQsRUFBTCxDQUFRQyxHQUFSLENBQVksV0FBWixDQUFSLFNBQWQ7QUFDQSxVQUFNa0QsWUFBWSxHQUFHcmUsUUFBUSxDQUFDc2UsY0FBVCxDQUF3QkYsUUFBeEIsRUFBa0NHLGdCQUFsQyxDQUFtRCxPQUFuRCxDQUFyQjs7QUFDQSxXQUFLLElBQUloaUIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRzhoQixZQUFZLENBQUNobEIsTUFBakMsRUFBeUNrRCxDQUFDLElBQUksQ0FBOUMsRUFBaUQ7QUFDL0MsWUFBSThoQixZQUFZLENBQUM5aEIsQ0FBRCxDQUFaLENBQWdCaWlCLFVBQWhCLENBQTJCLGVBQTNCLENBQUosRUFBaUQ7QUFDL0MsZUFBS2QsUUFBTCxDQUFjL2MsSUFBZCxDQUFtQjBkLFlBQVksQ0FBQzloQixDQUFELENBQVosQ0FBZ0JpaUIsVUFBaEIsQ0FBMkI5bEIsSUFBM0IsQ0FBZ0MrbEIsU0FBbkQ7QUFDRDtBQUNGO0FBQ0YsS0EvQm1CLENBaUNwQjs7O0FBQ0EsUUFBTWxCLFVBQVUsR0FBRyxLQUFLckMsRUFBTCxDQUFRQyxHQUFSLENBQVksU0FBWixDQUFuQjtBQUNBLFNBQUtELEVBQUwsQ0FBUThDLHlCQUFSLENBQWtDLEtBQUtiLE1BQUwsQ0FBWXJnQixHQUFaLENBQWdCLDBCQUFoQixDQUFsQyxFQUErRSxVQUFDbWhCLE9BQUQsRUFBYTtBQUMxRixVQUFNUyxRQUFRLEdBQUcvQixTQUFTLENBQUNDLEtBQVYsQ0FBZ0JVLGFBQWhCLEdBQWdDcUIsT0FBaEMsRUFBakI7QUFDQSxVQUFNN2QsSUFBSSxHQUFHbWQsT0FBTyxDQUFDQyxXQUFSLENBQW9CLEtBQUksQ0FBQ2YsTUFBTCxDQUFZcmdCLEdBQVosQ0FBZ0Isb0JBQWhCLENBQXBCLENBQWI7O0FBQ0EsVUFBSWdFLElBQUksS0FBSyxrQkFBYixFQUFpQztBQUMvQixZQUFNa0YsR0FBRyxHQUFHLEVBQVo7QUFDQTRZLGlDQUF5QixDQUFDWCxPQUFPLENBQUNDLFdBQVIsQ0FBb0IsS0FBSSxDQUFDZixNQUFMLENBQVlyZ0IsR0FBWixDQUFnQixxQkFBaEIsQ0FBcEIsQ0FBRCxFQUE4RGtKLEdBQTlELENBQXpCOztBQUNBLFlBQUkwWSxRQUFRLEtBQUsxWSxHQUFHLENBQUMsQ0FBRCxDQUFoQixJQUF1QnVYLFVBQVUsS0FBS3ZYLEdBQUcsQ0FBQyxDQUFELENBQTdDLEVBQWtEO0FBQ2hELGVBQUksQ0FBQzJYLEdBQUwsQ0FBUzNYLEdBQUcsQ0FBQyxDQUFELENBQVosSUFBbUJBLEdBQUcsQ0FBQzZZLE1BQUosQ0FBVyxDQUFYLEVBQWNDLE1BQWQsQ0FBcUIsVUFBQTVsQixFQUFFO0FBQUEsbUJBQUlBLEVBQUUsS0FBSyxFQUFYO0FBQUEsV0FBdkIsQ0FBbkI7QUFDRDtBQUNGO0FBQ0YsS0FWRDtBQVdEOzs7OzhCQUVTaWxCLEksRUFBTTtBQUNkLFVBQUksT0FBT0EsSUFBUCxLQUFnQixVQUFwQixFQUFnQztBQUM5QixjQUFNLElBQUkzQyxLQUFKLENBQVUsd0JBQVYsQ0FBTjtBQUNEOztBQUNELFdBQUtvQyxLQUFMLElBQWMsQ0FBZDtBQUNBLFdBQUtDLFdBQUwsQ0FBaUJsZCxJQUFqQixDQUFzQjtBQUFFaWQsYUFBSyxFQUFFLEtBQUtBLEtBQWQ7QUFBcUJPLFlBQUksRUFBSkE7QUFBckIsT0FBdEI7QUFDQSxhQUFPLEtBQUtQLEtBQVo7QUFDRDs7O2dDQUVXQSxLLEVBQU87QUFDakIsV0FBSyxJQUFJcmhCLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS3NoQixXQUFMLENBQWlCeGtCLE1BQXJDLEVBQTZDa0QsQ0FBQyxJQUFJLENBQWxELEVBQXFEO0FBQ25ELFlBQUlxaEIsS0FBSyxLQUFLLEtBQUtDLFdBQUwsQ0FBaUJ0aEIsQ0FBakIsRUFBb0JxaEIsS0FBbEMsRUFBeUM7QUFDdkMsaUJBQU8sS0FBS0MsV0FBTCxDQUFpQmdCLE1BQWpCLENBQXdCdGlCLENBQXhCLEVBQTJCLENBQTNCLENBQVA7QUFDRDtBQUNGOztBQUNELGFBQU8sS0FBUDtBQUNEOzs7Z0NBRVc3RCxJLEVBQU07QUFDaEIsYUFBTyxLQUFLa2pCLE1BQUwsQ0FBWW1ELFVBQVosQ0FBdUJybUIsSUFBdkIsQ0FBUDtBQUNEOzs7c0NBRWlCO0FBQ2hCLFVBQUksS0FBS3VqQixZQUFULEVBQXVCO0FBQ3JCLGVBQU8sS0FBS0wsTUFBTCxDQUFZNkIsZ0JBQVosRUFBUCxDQURxQixDQUNrQjtBQUN4Qzs7QUFDRCxhQUFPLEtBQUs3QixNQUFMLENBQVlvRCxXQUFaLEVBQVAsQ0FKZ0IsQ0FJa0I7QUFDbkMsSyxDQUVEOzs7O21DQUNlbGUsSSxFQUFNO0FBQ25CO0FBQ0E7QUFDQSxhQUFRQSxJQUFJLEtBQUssS0FBS3FjLE1BQUwsQ0FBWXJnQixHQUFaLENBQWdCLHFCQUFoQixDQUFWLElBQ0RnRSxJQUFJLEtBQUssS0FBS3FjLE1BQUwsQ0FBWXJnQixHQUFaLENBQWdCLGVBQWhCLENBRFIsSUFFRGdFLElBQUksS0FBSyxLQUFLcWMsTUFBTCxDQUFZcmdCLEdBQVosQ0FBZ0Isb0JBQWhCLENBRlIsSUFHRGdFLElBQUksS0FBSyxNQUhmLENBSG1CLENBTUs7QUFDekI7OztnQ0FFV21lLFMsRUFBVztBQUNyQjtBQUNBLGFBQU8sS0FBS3ZCLFFBQUwsQ0FBY3hMLE9BQWQsQ0FBc0IrTSxTQUF0QixJQUFtQyxDQUFDLENBQTNDO0FBQ0Q7OztzQ0FVaUJ2bUIsSSxFQUFNO0FBQ3RCLGFBQU8sS0FBS2tqQixNQUFMLENBQVlzRCxnQkFBWixDQUE2QixLQUFLQyxXQUFMLENBQWlCem1CLElBQWpCLENBQTdCLENBQVA7QUFDRDs7O3dDQUVtQjBtQixhLEVBQWU3bEIsSyxFQUFPO0FBQ3hDO0FBQ0EsVUFBSSxLQUFLNGpCLE1BQUwsQ0FBWXJnQixHQUFaLENBQWdCLG1CQUFoQixNQUF5Q3NpQixhQUE3QyxFQUE0RDtBQUMxRDtBQUNBO0FBQ0E3bEIsYUFBSyxHQUFHQSxLQUFLLEdBQUcsR0FBSCxHQUFTLEdBQXRCLENBSDBELENBRy9CO0FBQzVCOztBQUNELGFBQU9BLEtBQVA7QUFDRDs7O29DQUVlOGxCLE0sRUFBUTtBQUN0QixhQUFPLEtBQUtuRSxFQUFMLENBQVFpQixhQUFSLENBQXNCLGlCQUF0QixFQUF5Q2tELE1BQXpDLENBQVA7QUFDRDs7O2lDQUVZQSxNLEVBQVE7QUFDbkIsVUFBSSxDQUFDLEtBQUtDLGVBQUwsQ0FBcUJELE1BQXJCLENBQUwsRUFBbUM7QUFDakMsZUFBTyxLQUFQO0FBQ0Q7O0FBQ0QsYUFBTyxLQUFLbkUsRUFBTCxDQUFRaUIsYUFBUixDQUFzQixjQUF0QixFQUFzQ2tELE1BQXRDLENBQVA7QUFDRDs7O2tDQUVhO0FBQ1osVUFBTUUsUUFBUSxHQUFHLEVBQWpCOztBQUNBLFVBQU1DLGNBQWMsR0FBRyxLQUFLQyxlQUFMLEVBQXZCOztBQUNBLFVBQU16WixHQUFHLEdBQUdoTSxNQUFNLENBQUMySyxJQUFQLENBQVk2YSxjQUFaLENBQVo7O0FBQ0EsV0FBSyxJQUFJampCLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUd5SixHQUFHLENBQUMzTSxNQUF4QixFQUFnQ2tELENBQUMsSUFBSSxDQUFyQyxFQUF3QztBQUN0QyxZQUFNbWpCLE9BQU8sR0FBR0YsY0FBYyxDQUFDeFosR0FBRyxDQUFDekosQ0FBRCxDQUFKLENBQTlCO0FBQ0EsWUFBTTZpQixhQUFhLEdBQUdNLE9BQU8sQ0FBQ0MsU0FBUixFQUF0Qjs7QUFDQSxZQUFJLEtBQUtDLGNBQUwsQ0FBb0JSLGFBQXBCLENBQUosRUFBd0M7QUFDdEMsbUJBRHNDLENBQzVCO0FBQ1g7O0FBQ0QsWUFBTXBELFdBQVcsR0FBRzBELE9BQU8sQ0FBQ2YsT0FBUixFQUFwQjtBQUNBLFlBQU1rQixnQkFBZ0IsR0FBR0gsT0FBTyxDQUFDSSxZQUFSLEVBQXpCO0FBQ0EsWUFBTUMsR0FBRyxHQUFHO0FBQ1ZybkIsY0FBSSxFQUFFc2pCLFdBREk7QUFFVmdFLGVBQUssRUFBRU4sT0FBTyxDQUFDTyxjQUFSLEVBRkc7QUFHVkMsZ0JBQU0sRUFBRWQsYUFIRTtBQUlWMUIsa0JBQVEsRUFBRSxLQUFLeUMsV0FBTCxDQUFpQk4sZ0JBQWpCLENBSkE7QUFLVk8scUJBQVcsRUFBRVYsT0FBTyxDQUFDVyxhQUFSLE9BQTRCLEdBTC9CO0FBTVZDLG9CQUFVLEVBQUVaLE9BQU8sQ0FBQ2EsZUFBUixPQUE4QixHQU5oQztBQU9WO0FBQ0F0QixtQkFBUyxFQUFFWSxnQkFSRDtBQVNWVyx1QkFBYSxFQUFFZCxPQUFPLENBQUNlLGFBQVIsRUFUTDtBQVVWQyxpQkFBTyxFQUFFaEIsT0FBTyxDQUFDaUIsVUFBUixFQVZDO0FBV1Y7QUFDQUMsbUJBQVMsRUFBRWxCLE9BQU8sQ0FBQ21CLFlBQVIsRUFaRDtBQWFWQyxnQkFBTSxFQUFFLEtBQUs1RixFQUFMLENBQVFpQixhQUFSLENBQXNCLGFBQXRCLEVBQXFDSCxXQUFyQztBQWJFLFNBQVo7O0FBZUEsWUFBSSxLQUFLQyxZQUFULEVBQXVCO0FBQ3JCOEQsYUFBRyxDQUFDZ0IsUUFBSixHQUFlLENBQUMsS0FBSzdGLEVBQUwsQ0FBUWlCLGFBQVIsQ0FBc0IsV0FBdEIsRUFDZCxLQUFLakIsRUFBTCxDQUFROEYsV0FBUixHQUFzQkMsZUFBdEIsR0FBd0NDLG9CQUF4QyxDQUE2RGxGLFdBQTdELENBRGMsQ0FBaEI7QUFFRCxTQUhELE1BR087QUFDTCtELGFBQUcsQ0FBQ2dCLFFBQUosR0FBZSxDQUFDLEtBQUs3RixFQUFMLENBQVFpQixhQUFSLENBQXNCLFdBQXRCLEVBQW1DSCxXQUFuQyxDQUFoQjtBQUNELFNBNUJxQyxDQTZCdEM7OztBQUNBLFlBQUkrRCxHQUFHLENBQUNPLFVBQVIsRUFBb0I7QUFDbEJQLGFBQUcsQ0FBQ29CLFNBQUosR0FBZ0JqRSxhQUFhLENBQUNrRSxZQUFkLENBQTJCMUIsT0FBTyxDQUFDMkIsb0JBQVIsR0FBK0JDLFVBQTFELENBQWhCO0FBQ0F2QixhQUFHLENBQUN3QixJQUFKLEdBQVd4QixHQUFHLENBQUNvQixTQUFKLENBQWNLLE1BQWQsQ0FBcUIsVUFBQ0MsV0FBRCxFQUFjQyxZQUFkLEVBQStCO0FBQUU7QUFDL0RELHVCQUFXLENBQUM5Z0IsSUFBWixDQUFpQjtBQUFFZ2hCLGlCQUFHLEVBQUVELFlBQVksQ0FBQ0UsVUFBcEI7QUFBZ0N4VixpQkFBRyxFQUFFc1YsWUFBWSxDQUFDRztBQUFsRCxhQUFqQjtBQUNBLG1CQUFPSixXQUFQO0FBQ0QsV0FIVSxFQUdSLEVBSFEsQ0FBWDtBQUlEOztBQUNEbEMsZ0JBQVEsQ0FBQ3ZELFdBQUQsQ0FBUixHQUF3QitELEdBQXhCO0FBQ0Q7O0FBQ0QsYUFBT1IsUUFBUDtBQUNEOzs7bUNBRWM7QUFDYixhQUFPLEtBQUtyRSxFQUFMLENBQVFDLEdBQVIsQ0FBWSxjQUFaLENBQVA7QUFDRDs7O3NDQUVpQjtBQUNoQixhQUFPLEtBQUtELEVBQUwsQ0FBUUMsR0FBUixDQUFZLGlCQUFaLENBQVA7QUFDRDs7O3lDQUVvQjtBQUNuQjtBQUNBLGFBQU8sS0FBS0QsRUFBTCxDQUFRQyxHQUFSLENBQVksb0JBQVosQ0FBUDtBQUNEOzs7aUNBRVk7QUFDWDtBQUNBLGFBQU8sS0FBS0QsRUFBTCxDQUFRQyxHQUFSLENBQVksWUFBWixDQUFQO0FBQ0Q7OzttQ0FFYztBQUNiLGFBQU8sS0FBS0QsRUFBTCxDQUFRQyxHQUFSLENBQVksY0FBWixDQUFQO0FBQ0Q7Ozs4QkFFU2tFLE0sRUFBUTtBQUNoQixVQUFJLENBQUMsS0FBS0MsZUFBTCxDQUFxQkQsTUFBckIsQ0FBTCxFQUFtQztBQUNqQyxlQUFPLEtBQVA7QUFDRDs7QUFDRCxVQUFNamIsR0FBRyxHQUFHLEtBQUs4VyxFQUFMLENBQVFpQixhQUFSLENBQXNCLGNBQXRCLEVBQXNDa0QsTUFBdEMsRUFBOEMsSUFBOUMsRUFBb0QsS0FBcEQsQ0FBWjtBQUNBLGFBQU9qYixHQUFQO0FBQ0Q7OztpQ0FFWTtBQUNYLGFBQU8sS0FBSzBkLFNBQUwsQ0FBZSxLQUFLN0YsWUFBTCxHQUFvQixVQUFwQixHQUFpQyxhQUFoRCxDQUFQO0FBQ0Q7OztvQ0FFZTtBQUNkLFVBQUksQ0FBQyxLQUFLQSxZQUFWLEVBQXdCO0FBQ3RCLGVBQU8sS0FBUDtBQUNEOztBQUNELGFBQU8sS0FBSzZGLFNBQUwsQ0FBZSxhQUFmLENBQVA7QUFDRDs7O2tDQUVheG9CLEssRUFBTztBQUNuQixVQUFJLEtBQUsyaUIsWUFBVCxFQUF1QjtBQUNyQixZQUFJLENBQUMsS0FBS2YsRUFBTCxDQUFRaUIsYUFBUixDQUFzQixpQkFBdEIsRUFBeUMsZUFBekMsQ0FBTCxFQUFnRTtBQUM5RCxpQkFBTyxLQUFQO0FBQ0Q7O0FBQ0QsWUFBSTdpQixLQUFLLEdBQUcsQ0FBWixFQUFlO0FBQ2IsaUJBQU8sS0FBUDtBQUNEOztBQUNELFlBQUksS0FBS3lvQixVQUFMLEtBQW9Cem9CLEtBQUssR0FBRyxDQUFoQyxFQUFtQztBQUNqQyxpQkFBTyxLQUFQO0FBQ0Q7O0FBQ0QsWUFBSSxLQUFLMG9CLGtCQUFMLEtBQTRCMW9CLEtBQUssR0FBRyxDQUF4QyxFQUEyQztBQUN6QyxpQkFBTyxLQUFQO0FBQ0QsU0Fab0IsQ0FhckI7QUFDQTtBQUNBOzs7QUFDQSxlQUFPLEtBQUs0aEIsRUFBTCxDQUFRaUIsYUFBUixDQUFzQixpQkFBdEIsRUFBeUM3aUIsS0FBekMsRUFBZ0QsS0FBaEQsRUFBdUQsS0FBdkQsQ0FBUDtBQUNEOztBQUNELGFBQU8sS0FBUDtBQUNEOzs7aUNBRVk7QUFDWCxVQUFJLEtBQUsyaUIsWUFBVCxFQUF1QjtBQUNyQixlQUFPLEtBQUtnRyxhQUFMLENBQW1CLEtBQUsvRyxFQUFMLENBQVFDLEdBQVIsQ0FBWSxjQUFaLElBQThCLENBQWpELENBQVA7QUFDRDs7QUFDRCxhQUFPLEtBQUsyRyxTQUFMLENBQWUsaUJBQWYsQ0FBUDtBQUNEOzs7b0NBRWU7QUFDZCxVQUFJLENBQUMsS0FBSzdGLFlBQVYsRUFBd0I7QUFDdEIsZUFBTyxLQUFQO0FBQ0Q7O0FBQ0QsYUFBTyxLQUFLNkYsU0FBTCxDQUFlLGlCQUFmLENBQVA7QUFDRDs7OzhCQUVTdkcsRSxFQUFJO0FBQUE7O0FBQ1o7QUFDQSxVQUFNcFQsT0FBTyxHQUFHLElBQUluQixPQUFKLENBQVksVUFBQWtCLE9BQU87QUFBQSxlQUFJLE1BQUksQ0FBQ2dhLFVBQUwsQ0FBZ0JoYSxPQUFoQixDQUFKO0FBQUEsT0FBbkIsQ0FBaEI7QUFDQSxhQUFPLE9BQU9xVCxFQUFQLEtBQWMsVUFBZCxHQUEyQnBULE9BQU8sQ0FBQ0MsSUFBUixDQUFhbVQsRUFBYixDQUEzQixHQUE4Q3BULE9BQXJEO0FBQ0Q7OzsrQkFFVW9ULEUsRUFBSTtBQUNiLGFBQU8sS0FBS0wsRUFBTCxDQUFRaUIsYUFBUixDQUFzQixjQUF0QixFQUFzQyxXQUF0QyxFQUFtRCxJQUFuRCxFQUF5RDtBQUM5RGdHLGFBQUssRUFBRSxJQUR1RDtBQUU5RDVHLFVBQUUsRUFBRkE7QUFGOEQsT0FBekQsQ0FBUDtBQUlEOzs7b0NBRWU7QUFDZCxhQUFPLEtBQUtMLEVBQUwsQ0FBUWlCLGFBQVIsQ0FBc0IsY0FBdEIsRUFBc0MsV0FBdEMsRUFBbUQsSUFBbkQsRUFBeUQsS0FBekQsQ0FBUDtBQUNEOzs7Z0NBRVdaLEUsRUFBSTZHLEssRUFBTztBQUFBOztBQUNyQixVQUFJamEsT0FBTyxHQUFHLElBQUluQixPQUFKLENBQVksVUFBQ2tCLE9BQUQsRUFBVUssTUFBVjtBQUFBLGVBQXFCLE1BQUksQ0FBQzhaLFlBQUwsQ0FBa0IsWUFBYTtBQUFBLDRDQUFUeGUsSUFBUztBQUFUQSxnQkFBUztBQUFBOztBQUM1RTtBQUNBLGNBQUlBLElBQUksQ0FBQyxDQUFELENBQUosQ0FBUXFhLFdBQVIsQ0FBb0IsUUFBcEIsTUFBa0MsV0FBdEMsRUFBbUQ7QUFDakRoVyxtQkFBTztBQUNSLFdBRkQsTUFFTztBQUNMSyxrQkFBTTtBQUNQO0FBQ0YsU0FQOEMsQ0FBckI7QUFBQSxPQUFaLENBQWQ7QUFRQUosYUFBTyxHQUFHLE9BQU9vVCxFQUFQLEtBQWMsVUFBZCxHQUEyQnBULE9BQU8sQ0FBQ0MsSUFBUixDQUFhbVQsRUFBYixDQUEzQixHQUE4Q3BULE9BQXhEO0FBQ0FBLGFBQU8sR0FBRyxPQUFPaWEsS0FBUCxLQUFpQixVQUFqQixHQUE4QmphLE9BQU8sQ0FBQ21hLEtBQVIsQ0FBY0YsS0FBZCxDQUE5QixHQUFxRGphLE9BQS9EO0FBQ0EsYUFBT0EsT0FBUDtBQUNEOzs7aUNBRVlvVCxFLEVBQUk7QUFDZixhQUFPLEtBQUtMLEVBQUwsQ0FBUWlCLGFBQVIsQ0FBc0IsY0FBdEIsRUFBc0MsYUFBdEMsRUFBcUQsSUFBckQsRUFBMkQ7QUFDaEVnRyxhQUFLLEVBQUUsSUFEeUQ7QUFFaEU1RyxVQUFFLEVBQUZBO0FBRmdFLE9BQTNELENBQVA7QUFJRDs7O3NDQUVpQjtBQUNoQixhQUFPLEtBQUtMLEVBQUwsQ0FBUWlCLGFBQVIsQ0FBc0IsY0FBdEIsRUFBc0MsYUFBdEMsRUFBcUQsSUFBckQsRUFBMkQsS0FBM0QsQ0FBUDtBQUNEOzs7dUNBRWtCO0FBQ2pCLGFBQU8sS0FBS2pCLEVBQUwsQ0FBUWlCLGFBQVIsQ0FBc0IsY0FBdEIsRUFBc0MsY0FBdEMsRUFBc0QsSUFBdEQsRUFBNEQsS0FBNUQsQ0FBUDtBQUNEOzs7cUNBRWdCO0FBQ2YsYUFBTyxLQUFLakIsRUFBTCxDQUFRaUIsYUFBUixDQUFzQixjQUF0QixFQUFzQyxZQUF0QyxFQUFvRCxJQUFwRCxFQUEwRCxLQUExRCxDQUFQO0FBQ0Q7OztvQ0FFZXpqQixJLEVBQU1hLEssRUFBTztBQUMzQjtBQUNBLFVBQU1tbUIsT0FBTyxHQUFHLEtBQUtQLFdBQUwsQ0FBaUJ6bUIsSUFBakIsQ0FBaEIsQ0FGMkIsQ0FHM0I7OztBQUNBYSxXQUFLLEdBQUcsS0FBS2dwQixtQkFBTCxDQUF5QjdDLE9BQU8sQ0FBQ0MsU0FBUixFQUF6QixFQUE4Q3BtQixLQUE5QyxDQUFSLENBSjJCLENBSW1DO0FBQzlEO0FBQ0E7O0FBQ0EsV0FBSzJoQixFQUFMLENBQVFzSCxjQUFSLENBQXVCLEtBQUtyRixNQUFMLENBQVlyZ0IsR0FBWixDQUFnQix3QkFBaEIsQ0FBdkIsRUFBa0U0aUIsT0FBbEU7QUFDQSxVQUFNdGIsR0FBRyxHQUFHLEtBQUs4VyxFQUFMLENBQVFzSCxjQUFSLENBQXVCLEtBQUtyRixNQUFMLENBQVlyZ0IsR0FBWixDQUFnQix1QkFBaEIsQ0FBdkIsRUFBaUU0aUIsT0FBakUsRUFBMEVubUIsS0FBMUUsQ0FBWjs7QUFDQSxVQUFJLENBQUM2SyxHQUFMLEVBQVU7QUFDUmdQLGVBQU8sQ0FBQzZILEdBQVIsaUJBQXFCMWhCLEtBQXJCLDhCQUE4Q21tQixPQUFPLENBQUNmLE9BQVIsRUFBOUMsR0FEUSxDQUM0RDtBQUNyRTs7QUFDRCxhQUFPdmEsR0FBUDtBQUNEOzs7a0NBRWE0WCxXLEVBQWE7QUFDekIsVUFBTTBELE9BQU8sR0FBRyxLQUFLUCxXQUFMLENBQWlCbkQsV0FBakIsQ0FBaEI7O0FBQ0EsVUFBTTZELGdCQUFnQixHQUFHSCxPQUFPLENBQUNJLFlBQVIsRUFBekI7QUFDQSxXQUFLbkMsR0FBTCxDQUFTa0MsZ0JBQVQsSUFBNkIsRUFBN0I7QUFDQSxVQUFNNEMsRUFBRSxHQUFHOUYsU0FBUyxDQUFDQyxLQUFWLENBQWdCOEYsY0FBaEIsRUFBWDtBQUNBRCxRQUFFLENBQUNFLFdBQUgsQ0FBZSxVQUFmLEVBQTJCOUMsZ0JBQTNCO0FBQ0E0QyxRQUFFLENBQUNFLFdBQUgsQ0FBZSxPQUFmLEVBQXdCLEtBQXhCO0FBQ0EsV0FBSy9HLE1BQUwsQ0FBWXNELGdCQUFaLENBQTZCLElBQTdCLEVBUHlCLENBT1c7O0FBQ3BDLFdBQUt0RCxNQUFMLENBQVlnSCxZQUFaLENBQXlCLGtCQUF6QixFQUE2Q0gsRUFBN0M7QUFDQSxhQUFPLEtBQUs5RSxHQUFMLENBQVNrQyxnQkFBVCxDQUFQO0FBQ0Q7OztpQ0FFWTdELFcsRUFBYTtBQUN4QixVQUFNMEQsT0FBTyxHQUFHLEtBQUtQLFdBQUwsQ0FBaUJuRCxXQUFqQixDQUFoQjs7QUFDQSxVQUFNNVgsR0FBRyxHQUFHLEVBQVo7O0FBQ0EsVUFBSSxRQUFRc2IsT0FBTyxDQUFDYSxlQUFSLEVBQVosRUFBdUM7QUFDckMsWUFBTXZhLEdBQUcsR0FBR2tYLGFBQWEsQ0FBQ2tFLFlBQWQsQ0FBMkIxQixPQUFPLENBQUMyQixvQkFBUixHQUErQkMsVUFBMUQsQ0FBWjs7QUFDQSxhQUFLLElBQUkva0IsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR3lKLEdBQUcsQ0FBQzNNLE1BQXhCLEVBQWdDa0QsQ0FBQyxJQUFJLENBQXJDLEVBQXdDO0FBQ3RDNkgsYUFBRyxDQUFDekQsSUFBSixDQUFTcUYsR0FBRyxDQUFDekosQ0FBRCxDQUFILENBQU9zbEIsV0FBaEI7QUFDRDs7QUFDRHpkLFdBQUcsQ0FBQ3llLElBQUo7QUFDRDs7QUFDRCxhQUFPemUsR0FBUDtBQUNEOzs7cUNBRWdCZ2IsYSxFQUFlN2xCLEssRUFBTztBQUNyQztBQUNBLFVBQUk2SyxHQUFHLEdBQUc3SyxLQUFWOztBQUNBLFVBQUksS0FBSzRqQixNQUFMLENBQVlyZ0IsR0FBWixDQUFnQixtQkFBaEIsTUFBeUNzaUIsYUFBN0MsRUFBNEQ7QUFDMUQ7QUFDQTtBQUNBLGdCQUFRN2xCLEtBQVI7QUFDRSxlQUFLLEdBQUw7QUFDRTZLLGVBQUcsR0FBRyxJQUFOO0FBQ0E7O0FBQ0YsZUFBSyxHQUFMO0FBQ0VBLGVBQUcsR0FBRyxLQUFOO0FBQ0E7O0FBQ0Y7QUFDRUEsZUFBRyxHQUFHLElBQU47QUFSSjtBQVVEOztBQUNELGFBQU9BLEdBQVA7QUFDRCxLLENBRUQ7QUFDQTs7OzswQ0FDc0IwZSxTLEVBQVc7QUFDL0IsVUFBTTFlLEdBQUcsR0FBRyxFQUFaOztBQUNBLFVBQU1vYixjQUFjLEdBQUcsS0FBS0MsZUFBTCxFQUF2Qjs7QUFDQSxVQUFNelosR0FBRyxHQUFHaE0sTUFBTSxDQUFDMkssSUFBUCxDQUFZbWUsU0FBWixDQUFaOztBQUNBLFdBQUssSUFBSXZtQixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHeUosR0FBRyxDQUFDM00sTUFBeEIsRUFBZ0NrRCxDQUFDLElBQUksQ0FBckMsRUFBd0M7QUFDdEMsWUFBTW1qQixPQUFPLEdBQUdGLGNBQWMsQ0FBQ3haLEdBQUcsQ0FBQ3pKLENBQUQsQ0FBSixDQUE5QjtBQUNBNkgsV0FBRyxDQUFDc2IsT0FBTyxDQUFDbUIsWUFBUixFQUFELENBQUgsR0FBOEI7QUFDNUJub0IsY0FBSSxFQUFFZ25CLE9BQU8sQ0FBQ2YsT0FBUixFQURzQjtBQUU1QjZCLHVCQUFhLEVBQUVkLE9BQU8sQ0FBQ2UsYUFBUixFQUZhO0FBRzVCUCxnQkFBTSxFQUFFUixPQUFPLENBQUNDLFNBQVI7QUFIb0IsU0FBOUI7QUFLRDs7QUFDRCxhQUFPdmIsR0FBUDtBQUNEOzs7cUNBRWdCMmUsRyxFQUFLO0FBQ3BCLFVBQU16cEIsS0FBSyxHQUFHLEtBQUs0aUIsWUFBTCxFQUFkLENBRG9CLENBRXBCOztBQUNBLFVBQUk2RyxHQUFKLEVBQVM7QUFDUCxlQUFPLEtBQUs3SCxFQUFMLENBQVFDLEdBQVIsQ0FBWSxpQkFBWixFQUErQjdoQixLQUEvQixDQUFQO0FBQ0Q7O0FBQ0QsYUFBTyxLQUFLNGhCLEVBQUwsQ0FBUUMsR0FBUixDQUFZLGNBQVosRUFBNEI3aEIsS0FBNUIsQ0FBUDtBQUNEOzs7a0RBRTZCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsVUFBSSxLQUFLNGlCLFlBQUwsS0FBc0IsQ0FBMUIsRUFBNkI7QUFDM0IsZUFBTyxDQUFQO0FBQ0Q7O0FBQ0QsVUFBTThHLEVBQUUsR0FBRyxLQUFLcEgsTUFBTCxDQUFZcUgsVUFBWixFQUFYOztBQUNBLFVBQUlELEVBQUUsQ0FBQ0UsZUFBSCxFQUFKLEVBQTBCO0FBQ3hCLGVBQU8sQ0FBUDtBQUNEOztBQUNELFVBQUlGLEVBQUUsQ0FBQ0csZUFBSCxFQUFKLEVBQTBCO0FBQ3hCLGVBQU8sQ0FBUDtBQUNEOztBQUNELFVBQUlILEVBQUUsQ0FBQ0ksY0FBSCxFQUFKLEVBQXlCO0FBQ3ZCLGVBQU8sQ0FBUDtBQUNEOztBQUNELFVBQUksQ0FBQyxLQUFLOUQsZUFBTCxDQUFxQixhQUFyQixDQUFMLEVBQTBDO0FBQ3hDLGVBQU8sQ0FBUDtBQUNEOztBQUVELGFBQU8sQ0FBUCxDQTFCNEIsQ0EwQmxCO0FBQ1g7OzswQ0FFcUJ3RCxTLEVBQVdPLFEsRUFBVTtBQUN6QyxVQUFJLENBQUNQLFNBQUwsRUFBZ0I7QUFDZCxlQUFPLEtBQVA7QUFDRDs7QUFDREEsZUFBUyxDQUFDUSxLQUFWLEdBQWtCLEtBQUtDLDJCQUFMLEVBQWxCLENBSnlDLENBSWE7O0FBQ3RELFVBQUl4RCxHQUFHLEdBQUcsRUFBVjs7QUFDQSxVQUFJK0MsU0FBUyxDQUFDUSxLQUFWLEdBQWtCLENBQXRCLEVBQXlCO0FBQ3ZCLFlBQU1ocUIsS0FBSyxHQUFHLEtBQUs0aUIsWUFBTCxFQUFkO0FBQ0E2RCxXQUFHLEdBQUcsS0FBS3lELFlBQUwsR0FBb0JscUIsS0FBcEIsQ0FBTjtBQUNBd3BCLGlCQUFTLENBQUMzYyxFQUFWLEdBQWUsS0FBS3NkLGVBQUwsR0FBdUJucUIsS0FBdkIsRUFBOEJrakIsRUFBN0MsQ0FIdUIsQ0FHMEI7QUFDbEQ7O0FBQ0QsVUFBSXhXLEdBQUcsR0FBR2hNLE1BQU0sQ0FBQzJLLElBQVAsQ0FBWW1lLFNBQVosQ0FBVjs7QUFDQSxVQUFNdEQsY0FBYyxHQUFHLEtBQUtDLGVBQUwsRUFBdkIsQ0FaeUMsQ0FhekM7OztBQUNBLFdBQUssSUFBSWxqQixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHeUosR0FBRyxDQUFDM00sTUFBeEIsRUFBZ0NrRCxDQUFDLElBQUksQ0FBckMsRUFBd0M7QUFDdEMsWUFBTW1qQixPQUFPLEdBQUdGLGNBQWMsQ0FBQ3haLEdBQUcsQ0FBQ3pKLENBQUQsQ0FBSixDQUE5Qjs7QUFDQSxZQUFJLE9BQU9takIsT0FBUCxLQUFtQixXQUF2QixFQUFvQztBQUNsQyxjQUFNMUQsV0FBVyxHQUFHMEQsT0FBTyxDQUFDZixPQUFSLEVBQXBCO0FBQ0EsY0FBTWlDLFNBQVMsR0FBR2xCLE9BQU8sQ0FBQ21CLFlBQVIsRUFBbEI7O0FBQ0EsY0FBSWlDLFNBQVMsQ0FBQ1EsS0FBVixHQUFrQixDQUF0QixFQUF5QjtBQUN2QlIscUJBQVMsQ0FBQzljLEdBQUcsQ0FBQ3pKLENBQUQsQ0FBSixDQUFULEdBQW9CO0FBQUU7QUFDcEJoRCxtQkFBSyxFQUFFLEtBQUttcUIsZ0JBQUwsQ0FBc0JoRSxPQUFPLENBQUNDLFNBQVIsRUFBdEIsRUFBMkNJLEdBQUcsQ0FBQ2EsU0FBRCxDQUE5QyxDQURXO0FBRWxCK0Msc0JBQVEsRUFBRSxDQUFDLEtBQUt6SSxFQUFMLENBQVFpQixhQUFSLENBQXNCLFdBQXRCLEVBQW1DSCxXQUFuQyxDQUZPO0FBR2xCOEUsb0JBQU0sRUFBRSxLQUFLNUYsRUFBTCxDQUFRaUIsYUFBUixDQUFzQixhQUF0QixFQUFxQ0gsV0FBckMsQ0FIVTtBQUlsQmdFLG1CQUFLLEVBQUVOLE9BQU8sQ0FBQ08sY0FBUixFQUpXO0FBS2xCTywyQkFBYSxFQUFFZCxPQUFPLENBQUNlLGFBQVIsRUFMRztBQU1sQi9DLHNCQUFRLEVBQUUsS0FBS3lDLFdBQUwsQ0FBaUJULE9BQU8sQ0FBQ0ksWUFBUixFQUFqQixDQU5RO0FBT2xCWSxxQkFBTyxFQUFFaEIsT0FBTyxDQUFDaUIsVUFBUixFQVBTO0FBUWxCQyx1QkFBUyxFQUFUQTtBQVJrQixhQUFwQjtBQVVELFdBWEQsTUFXTztBQUFFO0FBQ1BrQyxxQkFBUyxDQUFDOWMsR0FBRyxDQUFDekosQ0FBRCxDQUFKLENBQVQsR0FBb0I7QUFBRTtBQUNwQmhELG1CQUFLLEVBQUUsRUFEVztBQUVsQm9xQixzQkFBUSxFQUFFLElBRlE7QUFHbEI3QyxvQkFBTSxFQUFFLEtBSFU7QUFJbEJkLG1CQUFLLEVBQUVOLE9BQU8sQ0FBQ08sY0FBUixFQUpXO0FBS2xCTywyQkFBYSxFQUFFZCxPQUFPLENBQUNlLGFBQVIsRUFMRztBQU1sQi9DLHNCQUFRLEVBQUUsS0FBS3lDLFdBQUwsQ0FBaUJULE9BQU8sQ0FBQ0ksWUFBUixFQUFqQixDQU5RO0FBT2xCWSxxQkFBTyxFQUFFaEIsT0FBTyxDQUFDaUIsVUFBUixFQVBTO0FBUWxCQyx1QkFBUyxFQUFUQTtBQVJrQixhQUFwQjtBQVVEO0FBQ0Y7QUFDRixPQTNDd0MsQ0E0Q3pDOzs7QUFDQSxVQUFJeUMsUUFBSixFQUFjO0FBQ1pyZCxXQUFHLEdBQUdoTSxNQUFNLENBQUMySyxJQUFQLENBQVkwZSxRQUFaLENBQU47O0FBQ0EsYUFBSyxJQUFJOW1CLEVBQUMsR0FBRyxDQUFiLEVBQWdCQSxFQUFDLEdBQUd5SixHQUFHLENBQUMzTSxNQUF4QixFQUFnQ2tELEVBQUMsSUFBSSxDQUFyQyxFQUF3QztBQUN0QzhtQixrQkFBUSxDQUFDcmQsR0FBRyxDQUFDekosRUFBRCxDQUFKLENBQVIsR0FBbUIsS0FBSytpQixlQUFMLENBQXFCdFosR0FBRyxDQUFDekosRUFBRCxDQUF4QixDQUFuQixDQURzQyxDQUNXO0FBQ2xEO0FBQ0Y7O0FBQ0QsYUFBTyxJQUFQO0FBQ0Q7OztxREFFZ0M7QUFDL0IsVUFBTWlqQixjQUFjLEdBQUcsS0FBS0MsZUFBTCxFQUF2Qjs7QUFDQSxVQUFNelosR0FBRyxHQUFHaE0sTUFBTSxDQUFDMkssSUFBUCxDQUFZNmEsY0FBWixDQUFaOztBQUNBLFdBQUssSUFBSWpqQixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHeUosR0FBRyxDQUFDM00sTUFBeEIsRUFBZ0NrRCxDQUFDLElBQUksQ0FBckMsRUFBd0M7QUFDdEMsWUFBTW1qQixPQUFPLEdBQUdGLGNBQWMsQ0FBQ3haLEdBQUcsQ0FBQ3pKLENBQUQsQ0FBSixDQUE5QjtBQUNBLFlBQU02aUIsYUFBYSxHQUFHTSxPQUFPLENBQUNDLFNBQVIsRUFBdEI7O0FBQ0EsWUFBSSxDQUFDLEtBQUtDLGNBQUwsQ0FBb0JSLGFBQXBCLENBQUwsRUFBeUM7QUFDdkM7QUFDQTtBQUNBLGNBQUlBLGFBQWEsS0FBSyxLQUFLakMsTUFBTCxDQUFZcmdCLEdBQVosQ0FBZ0IsbUJBQWhCLENBQXRCLEVBQTREO0FBQzFELG1CQUFPNGlCLE9BQU8sQ0FBQ0ksWUFBUixFQUFQO0FBQ0Q7QUFDRjtBQUNGOztBQUNELFlBQU0sSUFBSXRFLEtBQUosQ0FBVSxpQ0FBVixDQUFOO0FBQ0Q7OztnQ0FFVztBQUNWLGFBQU8sS0FBS04sRUFBTCxDQUFRaUIsYUFBUixDQUFzQixjQUF0QixFQUFzQyxVQUF0QyxFQUFrRCxJQUFsRCxFQUF3RCxLQUF4RCxDQUFQO0FBQ0Q7OztrQ0FFYUcsSyxFQUFPO0FBQ25CLFdBQUtWLE1BQUwsQ0FBWWdILFlBQVosQ0FBeUIsVUFBekI7QUFDQSxXQUFLaEgsTUFBTCxDQUFZcUgsVUFBWixHQUF5QlcsYUFBekIsQ0FBdUMsSUFBdkMsRUFBNkN0SCxLQUE3QztBQUNBLFdBQUtWLE1BQUwsQ0FBWWdILFlBQVosQ0FBeUIsY0FBekI7QUFDQSxhQUFPLEtBQUtZLFlBQUwsR0FBb0JucUIsTUFBM0I7QUFDRDs7OzhCQUVTaWpCLEssRUFBT2YsRSxFQUFJO0FBQUE7O0FBQ25CLFVBQU1wVCxPQUFPLEdBQUcsSUFBSW5CLE9BQUosQ0FBWSxVQUFBa0IsT0FBTztBQUFBLGVBQUksTUFBSSxDQUFDMmIsVUFBTCxDQUFnQnZILEtBQWhCLEVBQXVCcFUsT0FBdkIsQ0FBSjtBQUFBLE9BQW5CLENBQWhCO0FBQ0EsVUFBTTlELEdBQUcsR0FBRytELE9BQU8sQ0FBQ0MsSUFBUixDQUFhO0FBQUEsZUFBTSxNQUFJLENBQUNvYixZQUFMLEdBQW9CbnFCLE1BQTFCO0FBQUEsT0FBYixDQUFaO0FBQ0EsYUFBTyxPQUFPa2lCLEVBQVAsS0FBYyxVQUFkLEdBQTJCblgsR0FBRyxDQUFDZ0UsSUFBSixDQUFTbVQsRUFBVCxDQUEzQixHQUEwQ25YLEdBQWpEO0FBQ0Q7OzsrQkFFVWtZLEssRUFBT2YsRSxFQUFJO0FBQ3BCO0FBQ0EsV0FBS3VJLFNBQUw7O0FBRUEsVUFBTXpFLE1BQU0sR0FBRyxjQUFmO0FBQ0EsVUFBTTBFLEVBQUUsR0FBRztBQUNUQyxhQUFLLEVBQUUsSUFERTtBQUVUN0IsYUFBSyxFQUFFLElBRkU7QUFHVDhCLFlBQUksRUFBRSxLQUhHO0FBSVRDLGdCQUFRLEVBQUUsS0FKRDtBQUtUcmdCLFlBQUksRUFBRTtBQUxHLE9BQVg7O0FBT0EsVUFBSSxPQUFPMFgsRUFBUCxLQUFjLFVBQWxCLEVBQThCO0FBQzVCd0ksVUFBRSxDQUFDeEksRUFBSCxHQUFRQSxFQUFSO0FBQ0Q7O0FBRUQsVUFBTTRJLFFBQVEsR0FBR3hILFNBQVMsQ0FBQ0MsS0FBVixDQUFnQjhGLGNBQWhCLEVBQWpCO0FBQ0EsVUFBTTBCLE9BQU8sR0FBR3pILFNBQVMsQ0FBQ0MsS0FBVixDQUFnQjhGLGNBQWhCLEVBQWhCO0FBQ0EwQixhQUFPLENBQUN6QixXQUFSLENBQW9CLEtBQUswQiw4QkFBTCxFQUFwQixpQkFBa0UvSCxLQUFsRTtBQUVBeUgsUUFBRSxDQUFDbGdCLElBQUgsQ0FBUWxELElBQVIsQ0FBYTBlLE1BQWI7QUFDQTBFLFFBQUUsQ0FBQ2xnQixJQUFILENBQVFsRCxJQUFSLENBQWF5akIsT0FBTyxDQUFDRSxLQUFSLEVBQWI7QUFFQSxhQUFPLEtBQUsxSSxNQUFMLENBQVkySSxnQkFBWixDQUE2QmxGLE1BQTdCLEVBQXFDK0UsT0FBckMsRUFBOENELFFBQTlDLEVBQXdESixFQUF4RCxDQUFQO0FBQ0Q7OzswQkFFS1MsTSxFQUFRakosRSxFQUFJO0FBQUE7O0FBQ2hCLFVBQU1wVCxPQUFPLEdBQUcsSUFBSW5CLE9BQUosQ0FBWSxVQUFBa0IsT0FBTztBQUFBLGVBQUksTUFBSSxDQUFDdWMsTUFBTCxDQUFZRCxNQUFaLEVBQW9CdGMsT0FBcEIsQ0FBSjtBQUFBLE9BQW5CLENBQWhCO0FBQ0EsVUFBTTlELEdBQUcsR0FBRytELE9BQU8sQ0FBQ0MsSUFBUixDQUFhO0FBQUEsZUFBTSxNQUFJLENBQUNvYixZQUFMLEdBQW9CbnFCLE1BQTFCO0FBQUEsT0FBYixDQUFaO0FBQ0EsYUFBTyxPQUFPa2lCLEVBQVAsS0FBYyxVQUFkLEdBQTJCblgsR0FBRyxDQUFDZ0UsSUFBSixDQUFTbVQsRUFBVCxDQUEzQixHQUEwQ25YLEdBQWpEO0FBQ0Q7OzsyQkFFTW9nQixNLEVBQVFqSixFLEVBQUk7QUFDakI7QUFDQSxXQUFLdUksU0FBTDs7QUFFQSxVQUFNekUsTUFBTSxHQUFHLGNBQWY7QUFDQSxVQUFNMEUsRUFBRSxHQUFHO0FBQ1RDLGFBQUssRUFBRSxJQURFO0FBRVQ3QixhQUFLLEVBQUUsSUFGRTtBQUdUOEIsWUFBSSxFQUFFLEtBSEc7QUFJVEMsZ0JBQVEsRUFBRSxLQUpEO0FBS1RyZ0IsWUFBSSxFQUFFO0FBTEcsT0FBWDs7QUFPQSxVQUFJLE9BQU8wWCxFQUFQLEtBQWMsVUFBbEIsRUFBOEI7QUFDNUJ3SSxVQUFFLENBQUN4SSxFQUFILEdBQVFBLEVBQVI7QUFDRDs7QUFFRCxVQUFNNEksUUFBUSxHQUFHeEgsU0FBUyxDQUFDQyxLQUFWLENBQWdCOEYsY0FBaEIsRUFBakI7QUFDQSxVQUFNMEIsT0FBTyxHQUFHekgsU0FBUyxDQUFDQyxLQUFWLENBQWdCOEYsY0FBaEIsRUFBaEI7QUFDQSxVQUFNMWMsR0FBRyxHQUFHaE0sTUFBTSxDQUFDMkssSUFBUCxDQUFZNmYsTUFBWixDQUFaOztBQUNBLFVBQU0xQixTQUFTLEdBQUcsS0FBS3JELGVBQUwsRUFBbEI7O0FBQ0EsV0FBSyxJQUFJbGpCLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUd5SixHQUFHLENBQUMzTSxNQUF4QixFQUFnQ2tELENBQUMsSUFBSSxDQUFyQyxFQUF3QztBQUN0QyxZQUFNbWpCLE9BQU8sR0FBR29ELFNBQVMsQ0FBQzljLEdBQUcsQ0FBQ3pKLENBQUQsQ0FBSixDQUF6QjtBQUNBNm5CLGVBQU8sQ0FBQ3pCLFdBQVIsQ0FBb0JqRCxPQUFPLENBQUNJLFlBQVIsRUFBcEIsRUFBNEMsS0FBS3lDLG1CQUFMLENBQXlCN0MsT0FBTyxDQUFDQyxTQUFSLEVBQXpCLEVBQThDNkUsTUFBTSxDQUFDeGUsR0FBRyxDQUFDekosQ0FBRCxDQUFKLENBQXBELENBQTVDO0FBQ0Q7O0FBQ0R3bkIsUUFBRSxDQUFDbGdCLElBQUgsQ0FBUWxELElBQVIsQ0FBYTBlLE1BQWI7QUFDQTBFLFFBQUUsQ0FBQ2xnQixJQUFILENBQVFsRCxJQUFSLENBQWF5akIsT0FBTyxDQUFDRSxLQUFSLEVBQWI7QUFFQSxhQUFPLEtBQUsxSSxNQUFMLENBQVkySSxnQkFBWixDQUE2QmxGLE1BQTdCLEVBQXFDK0UsT0FBckMsRUFBOENELFFBQTlDLEVBQXdESixFQUF4RCxDQUFQO0FBQ0Q7OzsyQkFvQk1XLEcsRUFBS0MsTSxFQUFRQyxXLEVBQWE7QUFBQTs7QUFDL0IsYUFBTyxJQUFJNWQsT0FBSixDQUFZLFVBQUNrQixPQUFELEVBQVVLLE1BQVY7QUFBQSxlQUFxQixNQUFJLENBQUNzYyxPQUFMLENBQWFILEdBQWIsRUFBa0JDLE1BQWxCLEVBQTBCQyxXQUExQixFQUF1QzFjLE9BQXZDLEVBQWdESyxNQUFoRCxDQUFyQjtBQUFBLE9BQVosQ0FBUDtBQUNEOzs7NENBRXVCeVQsVyxFQUFhO0FBQ25DLFVBQU0wRCxPQUFPLEdBQUcsS0FBS1AsV0FBTCxDQUFpQm5ELFdBQWpCLENBQWhCLENBRG1DLENBRW5DOzs7QUFDQSxVQUFJMEQsT0FBSixFQUFhO0FBQ1gsZUFBT0EsT0FBTyxDQUFDbUIsWUFBUixFQUFQO0FBQ0Q7O0FBQ0QsYUFBTzdFLFdBQVA7QUFDRDs7OzRCQUVPMEksRyxFQUFLQyxNLEVBQVFDLFcsRUFBYTFjLE8sRUFBU0ssTSxFQUFRO0FBQ2pELFVBQU12QyxHQUFHLEdBQUdoTSxNQUFNLENBQUN3RSxPQUFQLENBQWVtbUIsTUFBZixDQUFaO0FBQ0EsVUFBTUcsUUFBUSxHQUFHbkksU0FBUyxDQUFDQyxLQUFWLENBQWdCOEYsY0FBaEIsRUFBakI7QUFDQW9DLGNBQVEsQ0FBQ25DLFdBQVQsQ0FBcUIsSUFBckIsRUFBMkJoRyxTQUFTLENBQUNDLEtBQVYsQ0FBZ0JtSSxlQUFoQixHQUFrQ3BHLE9BQWxDLEVBQTNCO0FBQ0FtRyxjQUFRLENBQUNuQyxXQUFULENBQXFCLElBQXJCLEVBQTJCLEtBQUt6SCxFQUFMLENBQVFDLEdBQVIsQ0FBWSxZQUFaLEVBQTBCd0QsT0FBMUIsRUFBM0I7QUFDQW1HLGNBQVEsQ0FBQ25DLFdBQVQsQ0FBcUIsYUFBckIsRUFBb0NpQyxXQUFXLEdBQUcsR0FBSCxHQUFTLEdBQXhEO0FBQ0FFLGNBQVEsQ0FBQ25DLFdBQVQsQ0FBcUIsSUFBckIsRUFBMkIrQixHQUFHLENBQUN6YixJQUFKLENBQVMsR0FBVCxDQUEzQjs7QUFDQSxXQUFLLElBQUkxTSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHeUosR0FBRyxDQUFDM00sTUFBeEIsRUFBZ0NrRCxDQUFDLElBQUksQ0FBckMsRUFBd0M7QUFDdEMsWUFBTWttQixFQUFFLEdBQUc5RixTQUFTLENBQUNDLEtBQVYsQ0FBZ0I4RixjQUFoQixFQUFYO0FBQ0FELFVBQUUsQ0FBQ3VDLE9BQUgsQ0FBVyxLQUFLQyx1QkFBTCxDQUE2QmpmLEdBQUcsQ0FBQ3pKLENBQUQsQ0FBSCxDQUFPLENBQVAsQ0FBN0IsQ0FBWDtBQUNBa21CLFVBQUUsQ0FBQ0UsV0FBSCxDQUFlLFFBQWYsRUFBeUIzYyxHQUFHLENBQUN6SixDQUFELENBQUgsQ0FBTyxDQUFQLEVBQVUwTSxJQUFWLENBQWUsR0FBZixDQUF6QjtBQUNBNmIsZ0JBQVEsQ0FBQ0ksUUFBVCxDQUFrQnpDLEVBQUUsQ0FBQzZCLEtBQUgsRUFBbEI7QUFDRDs7QUFDRCxVQUFNYSxFQUFFLEdBQUd4SSxTQUFTLENBQUNDLEtBQVYsQ0FBZ0J3SSxVQUFoQixDQUEyQixRQUEzQixDQUFYO0FBQ0EsVUFBTXJCLEVBQUUsR0FBRztBQUNUNUIsYUFBSyxFQUFFLElBREU7QUFFVCtCLGdCQUFRLEVBQUUsSUFGRDtBQUdURixhQUFLLEVBQUUsSUFIRTtBQUlUcUIsYUFBSyxFQUFFO0FBQUEsaUJBQU05YyxNQUFNLEVBQVo7QUFBQSxTQUpFO0FBS1RnVCxVQUFFLEVBQUUsWUFBQytKLFVBQUQsRUFBYUMsTUFBYixFQUFxQkMsU0FBckIsRUFBbUM7QUFDckMsY0FBTUMsVUFBVSxHQUFHLElBQUk5SSxTQUFTLENBQUNDLEtBQVYsQ0FBZ0I4SSxlQUFwQixFQUFuQjs7QUFEcUMsc0NBRWRGLFNBQVMsQ0FBQ0csY0FBVixDQUF5QixXQUF6QixDQUZjO0FBQUEsY0FFN0JyRSxVQUY2Qix5QkFFN0JBLFVBRjZCOztBQUdyQyxjQUFNbGQsR0FBRyxHQUFHLEVBQVo7O0FBQ0EsZUFBSyxJQUFJN0gsR0FBQyxHQUFHLENBQWIsRUFBZ0JBLEdBQUMsR0FBRytrQixVQUFVLENBQUNqb0IsTUFBL0IsRUFBdUNrRCxHQUFDLElBQUksQ0FBNUMsRUFBK0M7QUFDN0M2SCxlQUFHLENBQUNrZCxVQUFVLENBQUMva0IsR0FBRCxDQUFWLENBQWNxcEIsT0FBZCxFQUFELENBQUgsR0FBK0IsRUFBL0I7O0FBQ0EsaUJBQUssSUFBSXhjLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdrWSxVQUFVLENBQUMva0IsR0FBRCxDQUFWLENBQWMra0IsVUFBZCxDQUF5QmpvQixNQUE3QyxFQUFxRCtQLENBQUMsSUFBSSxDQUExRCxFQUE2RDtBQUMzRCxrQkFBTWxRLEVBQUUsR0FBR29vQixVQUFVLENBQUMva0IsR0FBRCxDQUFWLENBQWMra0IsVUFBZCxDQUF5QmxZLENBQXpCLENBQVg7QUFDQWhGLGlCQUFHLENBQUNrZCxVQUFVLENBQUMva0IsR0FBRCxDQUFWLENBQWNxcEIsT0FBZCxFQUFELENBQUgsQ0FBNkIxc0IsRUFBRSxDQUFDMHNCLE9BQUgsRUFBN0IsSUFBNkMxc0IsRUFBRSxDQUFDb29CLFVBQUgsQ0FBY3VFLEdBQWQsQ0FBa0IsVUFBQ0MsR0FBRCxFQUFTO0FBQ3RFLG9CQUFNQyxPQUFPLEdBQUdELEdBQUcsQ0FBQ0UsU0FBSixDQUFjLG1CQUFkLENBQWhCO0FBQ0FQLDBCQUFVLENBQUNRLFdBQVgsQ0FBdUJGLE9BQXZCO0FBQ0FELG1CQUFHLENBQUNFLFNBQUosQ0FBYyxtQkFBZCxJQUFxQ1AsVUFBVSxDQUFDUyxRQUFYLEVBQXJDLENBSHNFLENBR1Y7O0FBQzVELHVCQUFPbHNCLE1BQU0sQ0FBQzZPLE1BQVAsQ0FBYyxFQUFkLEVBQWtCaWQsR0FBRyxDQUFDRSxTQUF0QixDQUFQO0FBQ0QsZUFMNEMsQ0FBN0M7QUFNRDtBQUNGOztBQUNEOWQsaUJBQU8sQ0FBQzlELEdBQUQsQ0FBUDtBQUNEO0FBdEJRLE9BQVg7QUF3QkEsYUFBTytnQixFQUFFLENBQUN2QyxZQUFILENBQWdCLGlCQUFoQixFQUFtQ2tDLFFBQW5DLEVBQTZDZixFQUE3QyxDQUFQO0FBQ0Q7Ozs2QkFFUXJyQixJLEVBQU1hLEssRUFBTztBQUNwQjtBQUNBO0FBQ0EsVUFBTTZxQixPQUFPLEdBQUd6SCxTQUFTLENBQUNDLEtBQVYsQ0FBZ0I4RixjQUFoQixFQUFoQjtBQUNBMEIsYUFBTyxDQUFDekIsV0FBUixDQUFvQixLQUFwQixFQUEyQmpxQixJQUEzQjtBQUNBMHJCLGFBQU8sQ0FBQ3pCLFdBQVIsQ0FBb0JqcUIsSUFBcEIsRUFBMEJhLEtBQTFCO0FBQ0EsV0FBSzJoQixFQUFMLENBQVFzSCxjQUFSLENBQ0UsS0FBS3JGLE1BQUwsQ0FBWXJnQixHQUFaLENBQWdCLHlCQUFoQixDQURGLEVBRUUsS0FBS29lLEVBQUwsQ0FBUUMsR0FBUixDQUFZLEtBQUtnQyxNQUFMLENBQVlyZ0IsR0FBWixDQUFnQiwyQkFBaEIsQ0FBWixDQUZGLEVBR0VzbkIsT0FIRjtBQUtBLGFBQU8sS0FBS2xKLEVBQUwsQ0FBUXlILFdBQVIsQ0FBb0JqcUIsSUFBcEIsRUFBMEJhLEtBQTFCLENBQVA7QUFDRDs7OzZCQUVRYixJLEVBQU07QUFDYixhQUFPLEtBQUt3aUIsRUFBTCxDQUFRQyxHQUFSLENBQVl6aUIsSUFBWixDQUFQO0FBQ0Q7OztrQ0FFYXl0QixNLEVBQVE7QUFBRTtBQUN0QixVQUFNL3BCLElBQUksR0FBRyxJQUFJNFUsR0FBSixFQUFiOztBQUVBLGFBQU81VSxJQUFJLENBQUNncUIsSUFBTCxHQUFZRCxNQUFuQixFQUEyQjtBQUN6QixZQUFNRSxJQUFJLEdBQUcsS0FBSzVDLGVBQUwsRUFBYixDQUR5QixDQUd6Qjs7QUFDQSxhQUFLLElBQUlsbkIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRzhwQixJQUFJLENBQUNodEIsTUFBekIsRUFBaUNrRCxDQUFDLElBQUksQ0FBdEMsRUFBeUM7QUFDdkNILGNBQUksQ0FBQ2tDLEdBQUwsQ0FBUytuQixJQUFJLENBQUM5cEIsQ0FBRCxDQUFKLENBQVFpZ0IsRUFBakIsRUFBcUI2SixJQUFJLENBQUM5cEIsQ0FBRCxDQUF6QjtBQUNELFNBTndCLENBUXpCOzs7QUFDQSxZQUFJLENBQUMsS0FBSytpQixlQUFMLENBQXFCLGFBQXJCLENBQUwsRUFBMEM7QUFDeEM7QUFDRDs7QUFFRCxhQUFLZ0gsYUFBTDtBQUNEOztBQUVELGFBQU87QUFDTGxxQixZQUFJLHFCQUFNQSxJQUFJLENBQUNnSixNQUFMLEVBQU4sQ0FEQztBQUVMbWhCLGVBQU8sRUFBRSxLQUFLakgsZUFBTCxDQUFxQixhQUFyQjtBQUZKLE9BQVA7QUFJRDs7O21DQUVjNW1CLEksRUFBTWEsSyxFQUFPO0FBQzFCLFdBQUtxaUIsTUFBTCxDQUFZcUgsVUFBWixHQUF5QlcsYUFBekIsQ0FBdUNsckIsSUFBdkMsRUFBNkNhLEtBQTdDO0FBQ0EsYUFBTyxLQUFLcWlCLE1BQUwsQ0FBWWdILFlBQVosQ0FBeUIsYUFBekIsQ0FBUDtBQUNEOzs7MkNBRXNCO0FBQ3JCLFdBQUs0RCxpQkFBTCxHQUF5QjtBQUFFaEssVUFBRSxFQUFFO0FBQU4sT0FBekI7O0FBQ0EsVUFBTWdELGNBQWMsR0FBRyxLQUFLQyxlQUFMLEVBQXZCOztBQUNBLFVBQU16WixHQUFHLEdBQUdoTSxNQUFNLENBQUMySyxJQUFQLENBQVk2YSxjQUFaLENBQVo7O0FBQ0EsV0FBSyxJQUFJampCLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUd5SixHQUFHLENBQUMzTSxNQUF4QixFQUFnQ2tELENBQUMsSUFBSSxDQUFyQyxFQUF3QztBQUN0QyxZQUFNbWpCLE9BQU8sR0FBR0YsY0FBYyxDQUFDeFosR0FBRyxDQUFDekosQ0FBRCxDQUFKLENBQTlCO0FBQ0EsWUFBTWtxQixLQUFLLEdBQUcvRyxPQUFPLENBQUNtQixZQUFSLEVBQWQ7O0FBQ0EsWUFBSTRGLEtBQUosRUFBVztBQUNULGVBQUtELGlCQUFMLENBQXVCQyxLQUF2QixJQUFnQ3pnQixHQUFHLENBQUN6SixDQUFELENBQW5DO0FBQ0Q7QUFDRjs7QUFDRCxhQUFPLEtBQUtpcUIsaUJBQVo7QUFDRDs7OzJDQUVzQjtBQUFBOztBQUNyQixVQUFJLENBQUMsS0FBS0EsaUJBQVYsRUFBNkI7QUFDM0IsYUFBS0Usb0JBQUw7QUFDRCxPQUhvQixDQUlyQjs7O0FBQ0EsVUFBTXRpQixHQUFHLEdBQUcsS0FBS29mLFlBQUwsR0FBb0JwcEIsS0FBcEIsRUFBWjs7QUFMcUIsaUNBT1ptQyxDQVBZO0FBUW5CNkgsV0FBRyxDQUFDN0gsQ0FBRCxDQUFILEdBQVN2QyxNQUFNLENBQUMySyxJQUFQLENBQVlQLEdBQUcsQ0FBQzdILENBQUQsQ0FBZixFQUFvQnVpQixNQUFwQixDQUEyQixVQUFBNWxCLEVBQUU7QUFBQSxpQkFBSSxNQUFJLENBQUNzdEIsaUJBQUwsQ0FBdUJ0dEIsRUFBdkIsQ0FBSjtBQUFBLFNBQTdCLEVBQTZEc29CLE1BQTdELENBQW9FLFVBQUNtRixHQUFELEVBQU16dEIsRUFBTjtBQUFBLG1DQUN4RXl0QixHQUR3RSxzQkFFckUsTUFBSSxDQUFDSCxpQkFBTCxDQUF1QnR0QixFQUF2QixDQUZxRSxFQUV4Q2tMLEdBQUcsQ0FBQzdILENBQUQsQ0FBSCxDQUFPckQsRUFBUCxDQUZ3QztBQUFBLFNBQXBFLEVBR0wsRUFISyxDQUFUO0FBUm1COztBQU9yQixXQUFLLElBQUlxRCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHNkgsR0FBRyxDQUFDL0ssTUFBeEIsRUFBZ0NrRCxDQUFDLElBQUksQ0FBckMsRUFBd0M7QUFBQSxjQUEvQkEsQ0FBK0I7QUFLdkM7O0FBRUQsYUFBTzZILEdBQVA7QUFDRDs7O2lDQTVtQm1CNEIsRyxFQUFLO0FBQ3ZCLFVBQU01QixHQUFHLEdBQUcsRUFBWjs7QUFDQSxXQUFLLElBQUk3SCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHeUosR0FBRyxDQUFDM00sTUFBeEIsRUFBZ0NrRCxDQUFDLElBQUksQ0FBckMsRUFBd0M7QUFDdEM2SCxXQUFHLENBQUN6RCxJQUFKLENBQVNxRixHQUFHLENBQUN6SixDQUFELENBQUgsQ0FBT3lwQixTQUFoQjtBQUNEOztBQUNELGFBQU81aEIsR0FBUDtBQUNEOzs7NEJBaWRjMUwsSSxFQUFNO0FBQ25CLFVBQU1rdUIsT0FBTyxHQUFHakssU0FBUyxDQUFDQyxLQUFWLENBQWdCd0ksVUFBaEIsQ0FBMkIsUUFBM0IsQ0FBaEI7O0FBQ0EsVUFBSXdCLE9BQUosRUFBYTtBQUNYLFlBQU1DLFNBQVMsR0FBR2xLLFNBQVMsQ0FBQ0MsS0FBVixDQUFnQjhGLGNBQWhCLEVBQWxCO0FBQ0FtRSxpQkFBUyxDQUFDbEUsV0FBVixDQUFzQixNQUF0QixFQUE4QmpxQixJQUE5QjtBQUNBa3VCLGVBQU8sQ0FBQ2hFLFlBQVIsQ0FBcUIsU0FBckIsRUFBZ0NpRSxTQUFoQyxFQUEyQyxFQUEzQztBQUNEO0FBQ0Y7Ozs0QkFFY251QixJLEVBQU07QUFDbkIsVUFBTWt1QixPQUFPLEdBQUdqSyxTQUFTLENBQUNDLEtBQVYsQ0FBZ0J3SSxVQUFoQixDQUEyQixRQUEzQixDQUFoQjs7QUFDQSxVQUFJd0IsT0FBSixFQUFhO0FBQ1gsWUFBTUMsU0FBUyxHQUFHbEssU0FBUyxDQUFDQyxLQUFWLENBQWdCOEYsY0FBaEIsRUFBbEI7QUFDQW1FLGlCQUFTLENBQUNsRSxXQUFWLENBQXNCLE1BQXRCLEVBQThCanFCLElBQTlCO0FBQ0FrdUIsZUFBTyxDQUFDaEUsWUFBUixDQUFxQixTQUFyQixFQUFnQ2lFLFNBQWhDLEVBQTJDLEVBQTNDO0FBQ0Q7QUFDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BrQkg7O0lBRXFCQyxjOzs7OztBQUNuQiwwQkFBWTlMLFFBQVosRUFBc0I7QUFBQTs7QUFBQTs7QUFDcEIsd0ZBQU1BLFFBQU47QUFDQTVILFdBQU8sQ0FBQzZILEdBQVIsV0FBZSxNQUFLL2IsV0FBTCxDQUFpQnhHLElBQWhDLGtCQUZvQixDQUVnQzs7QUFFcEQsUUFBSSxNQUFLdWpCLFlBQVQsRUFBdUI7QUFDckIsWUFBS2YsRUFBTCxDQUFROEYsV0FBUixHQUFzQitGLE1BQXRCLEdBQStCO0FBQUEsZUFBTSxDQUFOO0FBQUEsT0FBL0I7O0FBQ0EsWUFBSzdMLEVBQUwsQ0FBUThGLFdBQVIsR0FBc0JnRyxjQUF0QixHQUF1QztBQUFBLGVBQU0sQ0FBTjtBQUFBLE9BQXZDO0FBQ0Q7O0FBUG1CO0FBUXJCOzs7O2lDQUVZO0FBQ1g7QUFDQSxhQUFPLEtBQUs5TCxFQUFMLENBQVFpQixhQUFSLENBQXNCLGNBQXRCLEVBQXNDLFlBQXRDLENBQVA7QUFDRDs7O2tDQUVhWixFLEVBQUk7QUFDaEI7QUFDQTtBQUNBO0FBQ0EsVUFBTW5YLEdBQUcsR0FBRyxLQUFLOFcsRUFBTCxDQUFRaUIsYUFBUixDQUFzQixjQUF0QixFQUFzQyxlQUF0QyxDQUFaOztBQUNBLFVBQUksT0FBT1osRUFBUCxLQUFjLFVBQWxCLEVBQThCO0FBQzVCQSxVQUFFO0FBQ0g7O0FBQ0QsYUFBT25YLEdBQVA7QUFDRDs7OytCQUVVbVgsRSxFQUFJO0FBQ2I7QUFDQSxVQUFNblgsR0FBRyxHQUFHLEtBQUs4VyxFQUFMLENBQVFpQixhQUFSLENBQXNCLGNBQXRCLEVBQXNDLFlBQXRDLENBQVo7O0FBQ0EsVUFBSSxPQUFPWixFQUFQLEtBQWMsVUFBbEIsRUFBOEI7QUFDNUJBLFVBQUU7QUFDSDs7QUFDRCxhQUFPblgsR0FBUDtBQUNEOzs7bUNBRWM7QUFBRTtBQUNmLFVBQUksS0FBSzZYLFlBQVQsRUFBdUI7QUFDckIsWUFBSSxLQUFLQyxZQUFMLE9BQXdCLENBQTVCLEVBQStCO0FBQzdCLGlCQUFPLEtBQUsrRixhQUFMLENBQW1CLENBQW5CLENBQVA7QUFDRDs7QUFDRCxlQUFPLElBQVA7QUFDRDs7QUFDRCxhQUFPLEtBQVA7QUFDRDs7OztFQTVDeUMvRSxzRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRjVDO0FBRUEsSUFBTStKLFNBQVMsR0FBR2xlLE1BQU0sQ0FBQyxXQUFELENBQXhCO0FBQ0EsSUFBTW1lLGlCQUFpQixHQUFHbmUsTUFBTSxDQUFDLG1CQUFELENBQWhDOztJQUVxQnNTLGtCOzs7Ozt3QkFDRztBQUNwQixVQUFJLENBQUMsS0FBSzRMLFNBQUwsQ0FBTCxFQUFzQjtBQUNwQixhQUFLQSxTQUFMLElBQWtCLElBQUk1TCxrQkFBSixDQUF1QjZMLGlCQUF2QixDQUFsQjtBQUNEOztBQUNELGFBQU8sS0FBS0QsU0FBTCxDQUFQO0FBQ0Q7OztBQUVELDhCQUFZRSxRQUFaLEVBQXNCO0FBQUE7O0FBQUE7O0FBQ3BCLFFBQUlBLFFBQVEsS0FBS0QsaUJBQWpCLEVBQW9DO0FBQ2xDLFlBQU0sSUFBSTFMLEtBQUosQ0FBVSxtRUFBVixDQUFOO0FBQ0Q7O0FBQ0QsU0FBSzJCLE1BQUwsR0FBY0MsUUFBUSxDQUFDQyxVQUFULENBQW9CLHFCQUFwQixDQUFkO0FBQ0EsU0FBSytKLGFBQUwsR0FBcUIsS0FBckI7QUFDQSxTQUFLQyxjQUFMLEdBQXNCLElBQXRCO0FBQ0EsU0FBS0MsY0FBTCxHQUFzQixJQUF0QjtBQUNBLFNBQUtDLGNBQUwsR0FBc0IsSUFBdEI7QUFFQW5VLFdBQU8sQ0FBQzZILEdBQVIsV0FBZSxLQUFLL2IsV0FBTCxDQUFpQnhHLElBQWhDLGtCQVZvQixDQVVnQztBQUVwRDs7QUFDQSxTQUFLOHVCLGtCQUFMLEdBQTBCN0ssU0FBUyxDQUFDQyxLQUFWLENBQWdCNkssZUFBMUM7O0FBQ0E5SyxhQUFTLENBQUNDLEtBQVYsQ0FBZ0I2SyxlQUFoQixHQUFrQyxVQUFDaEYsRUFBRCxFQUFRO0FBQ3hDLFVBQUlyZSxHQUFKOztBQUNBLFVBQUksS0FBSSxDQUFDZ2pCLGFBQVQsRUFBd0I7QUFDdEJoakIsV0FBRyxHQUFHLEtBQUksQ0FBQ3NqQixlQUFMLENBQXFCakYsRUFBckIsQ0FBTjtBQUNELE9BRkQsTUFFTztBQUNMcmUsV0FBRyxHQUFHLEtBQUksQ0FBQ29qQixrQkFBTCxDQUF3QnJ0QixJQUF4QixDQUE2QndpQixTQUFTLENBQUNDLEtBQXZDLEVBQThDNkYsRUFBOUMsQ0FBTjtBQUNEOztBQUNELGFBQU9yZSxHQUFQO0FBQ0QsS0FSRDs7QUFVQSxTQUFLdWpCLGFBQUwsR0FBcUJoTCxTQUFTLENBQUNpTCxjQUFWLENBQXlCQyxVQUE5Qzs7QUFDQWxMLGFBQVMsQ0FBQ2lMLGNBQVYsQ0FBeUJDLFVBQXpCLEdBQXNDLFlBQWE7QUFBQTs7QUFBQSx3Q0FBVGhrQixJQUFTO0FBQVRBLFlBQVM7QUFBQTs7QUFDakQsVUFBTU8sR0FBRyxHQUFHLDRCQUFJLENBQUN1akIsYUFBTCxFQUFtQnh0QixJQUFuQiw2QkFBd0J3aUIsU0FBUyxDQUFDaUwsY0FBbEMsU0FBcUQvakIsSUFBckQsRUFBWjs7QUFDQSxVQUFJLE9BQU8sS0FBSSxDQUFDd2pCLGNBQVosS0FBK0IsVUFBbkMsRUFBK0M7QUFDN0M7QUFENkMsb0NBRXRCaE0sa0JBQWtCLENBQUN5TSxXQUFuQixFQUZzQjtBQUFBLFlBRXJDdkssVUFGcUMseUJBRXJDQSxVQUZxQzs7QUFHN0MsWUFBSSxDQUFDQSxVQUFMLEVBQWlCO0FBQ2YsZ0JBQU0sSUFBSS9CLEtBQUosQ0FBVSxpREFBVixDQUFOO0FBQ0Q7O0FBQ0QsWUFBTUksTUFBTSxHQUFHUCxrQkFBa0IsQ0FBQzBNLGNBQW5CLENBQWtDeEssVUFBbEMsQ0FBZjtBQUNBLFlBQU1yQyxFQUFFLEdBQUdVLE1BQU0sQ0FBQ29NLFNBQVAsRUFBWCxDQVA2QyxDQVE3Qzs7QUFDQSxhQUFJLENBQUNWLGNBQUwsR0FBc0IsSUFBSVIsdURBQUosQ0FBbUI7QUFBRTVMLFlBQUUsRUFBRkE7QUFBRixTQUFuQixDQUF0QixDQVQ2QyxDQVNLOztBQUNsRCxZQUFNNkUsR0FBRyxHQUFHO0FBQUV4QyxvQkFBVSxFQUFWQSxVQUFGO0FBQWMrSix3QkFBYyxFQUFFLEtBQUksQ0FBQ0E7QUFBbkMsU0FBWixDQVY2QyxDQVc3QztBQUNBOztBQUNBLFlBQU1XLFdBQVcsR0FBR3JNLE1BQU0sQ0FBQ21NLGNBQVAsRUFBcEI7O0FBQ0EsWUFBSUUsV0FBSixFQUFpQjtBQUNmLGVBQUksQ0FBQ1YsY0FBTCxHQUFzQixJQUFJVCx1REFBSixDQUFtQjtBQUFFNUwsY0FBRSxFQUFFK00sV0FBVyxDQUFDRCxTQUFaO0FBQU4sV0FBbkIsQ0FBdEI7QUFDQWpJLGFBQUcsQ0FBQ3dILGNBQUosR0FBcUIsS0FBSSxDQUFDQSxjQUExQjtBQUNEOztBQUNELGFBQUksQ0FBQ0YsY0FBTCxDQUFvQnRILEdBQXBCOztBQUNBLGFBQUksQ0FBQ3NILGNBQUwsR0FBc0IsSUFBdEI7QUFDRDs7QUFDRCxhQUFPampCLEdBQVA7QUFDRCxLQXhCRDtBQXlCRDs7OzttQ0FFYztBQUNiLGFBQU8sT0FBTyxLQUFLaWpCLGNBQVosS0FBK0IsVUFBdEM7QUFDRDs7O29DQUVlNUUsRSxFQUFJO0FBQ2xCOUYsZUFBUyxDQUFDQyxLQUFWLENBQWdCc0wsY0FBaEIsQ0FBK0IsQ0FBQyxDQUFoQztBQUNBLFVBQU1wTCxPQUFPLEdBQUdILFNBQVMsQ0FBQ0MsS0FBVixDQUFnQkcsVUFBaEIsRUFBaEI7QUFFQUQsYUFBTyxDQUFDNkYsV0FBUixDQUFvQixrQkFBcEIsRUFBd0MsQ0FBQyxDQUF6QztBQUNBN0YsYUFBTyxDQUFDNkYsV0FBUixDQUFvQixhQUFwQixFQUFtQyxLQUFuQztBQUNBN0YsYUFBTyxDQUFDNkYsV0FBUixDQUFvQixpQkFBcEIsRUFBdUMsS0FBdkM7QUFDQTdGLGFBQU8sQ0FBQzZGLFdBQVIsQ0FBb0Isb0JBQXBCLEVBQTBDLEtBQTFDO0FBQ0E3RixhQUFPLENBQUM2RixXQUFSLENBQW9CLGNBQXBCLEVBQW9DLEtBQXBDO0FBQ0E3RixhQUFPLENBQUM2RixXQUFSLENBQW9CLFlBQXBCLEVBQWtDLEVBQWxDO0FBQ0E3RixhQUFPLENBQUM2RixXQUFSLENBQW9CLFdBQXBCLEVBQWlDRixFQUFFLENBQUN2RSxXQUFILENBQWUsS0FBS2YsTUFBTCxDQUFZcmdCLEdBQVosQ0FBZ0IsaUJBQWhCLENBQWYsQ0FBakM7QUFDQWdnQixhQUFPLENBQUM2RixXQUFSLENBQW9CLG9CQUFwQixFQUEwQyxDQUFDLENBQTNDOztBQUVBLFVBQUksQ0FBQzdGLE9BQU8sQ0FBQ2tFLFdBQVIsRUFBTCxFQUE0QjtBQUMxQmxFLGVBQU8sQ0FBQ0csS0FBUjtBQUNEOztBQUVELFVBQU1rTCxVQUFVLEdBQUd4TCxTQUFTLENBQUNDLEtBQVYsQ0FBZ0JVLGFBQWhCLEVBQW5COztBQUNBLFVBQUk2SyxVQUFKLEVBQWdCO0FBQ2QsWUFBTUMsWUFBWSxHQUFHRCxVQUFVLENBQUNFLGVBQVgsRUFBckI7O0FBQ0EsWUFBSUQsWUFBSixFQUFrQjtBQUNoQkQsb0JBQVUsQ0FBQ0csMEJBQVgsQ0FBc0NGLFlBQXRDO0FBQ0Q7QUFDRjs7QUFFRHRMLGFBQU8sQ0FBQ3lMLFdBQVIsQ0FBb0IsT0FBcEIsRUFBNkIsU0FBN0IsRUF6QmtCLENBeUJ1Qjs7QUFFekMsVUFBSUMsR0FBRyxHQUFHL0YsRUFBRSxDQUFDdkUsV0FBSCxDQUFlLEtBQWYsQ0FBVjtBQUNBc0ssU0FBRyxHQUFHN0wsU0FBUyxDQUFDQyxLQUFWLENBQWdCNkwsVUFBaEIsS0FBK0JELEdBQUcsQ0FBQ3JvQixLQUFKLENBQVUsV0FBVixFQUF1QixDQUF2QixDQUFyQztBQUNBMmMsYUFBTyxDQUFDNkYsV0FBUixDQUFvQixLQUFwQixFQUEyQjZGLEdBQTNCO0FBRUEsYUFBTyxjQUFQO0FBQ0QsSyxDQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztxQ0FDaUI1TSxNLEVBQVE7QUFDdkI7QUFDQSxVQUFJeFgsR0FBSjs7QUFDQSxVQUFJd1gsTUFBSixFQUFZO0FBQ1YsWUFBTThNLGFBQWEsR0FBRyxPQUFPOU0sTUFBTSxDQUFDK00sa0JBQWQsS0FBcUMsVUFBM0Q7QUFDQSxZQUFNQyxZQUFZLEdBQUcsT0FBT2hOLE1BQU0sQ0FBQ2lOLGlCQUFkLEtBQW9DLFVBQXpEOztBQUNBLFlBQUksQ0FBQ0gsYUFBRCxJQUFrQixDQUFDRSxZQUF2QixFQUFxQztBQUNuQyxnQkFBTSxJQUFJcE4sS0FBSixDQUFVLHVDQUFWLENBQU47QUFDRDs7QUFDRHBYLFdBQUcsR0FBR3dYLE1BQU0sQ0FBQ29NLFNBQVAsR0FBbUI3TCxhQUFuQixDQUFpQyxjQUFqQyxFQUFpRCxhQUFqRCxDQUFOO0FBQ0QsT0FQRCxNQU9PO0FBQ0w7QUFDQS9YLFdBQUcsR0FBRyxLQUFLa2pCLGNBQUwsQ0FBb0IxTCxNQUFwQixDQUEyQm9NLFNBQTNCLEdBQXVDN0wsYUFBdkMsQ0FBcUQsY0FBckQsRUFBcUUsYUFBckUsQ0FBTjtBQUNELE9BYnNCLENBY3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLFdBQUttTCxjQUFMLEdBQXNCLElBQXRCO0FBQ0EsV0FBS0MsY0FBTCxHQUFzQixJQUF0QjtBQUNBLGFBQU9uakIsR0FBUDtBQUNEOzs7b0NBd0NleEQsSSxFQUFNMmEsRSxFQUFJTCxFLEVBQUk7QUFBQTs7QUFDNUI7QUFENEIsbUNBRUdHLGtCQUFrQixDQUFDeU0sV0FBbkIsRUFGSDtBQUFBLFVBRXBCZ0IsTUFGb0IsMEJBRXBCQSxNQUZvQjtBQUFBLFVBRVp2TCxVQUZZLDBCQUVaQSxVQUZZOztBQUc1QixVQUFJdUwsTUFBSixFQUFZO0FBQ1Y7QUFDQTFWLGVBQU8sQ0FBQzZILEdBQVIsbUJBQXVCc0MsVUFBdkIsNkJBRlUsQ0FFa0Q7QUFDNUQ7O0FBQ0EsYUFBS2pDLGdCQUFMLENBQXNCRCxrQkFBa0IsQ0FBQzBNLGNBQW5CLENBQWtDeEssVUFBbEMsQ0FBdEIsRUFKVSxDQUtWO0FBQ0Q7O0FBQ0QsV0FBSzZKLGFBQUwsR0FBcUIsQ0FBQyxDQUFDeG1CLElBQXZCLENBVjRCLENBVUM7O0FBRTdCc2EsUUFBRSxDQUFDaUIsYUFBSCxDQUFpQixjQUFqQixFQUFpQyxXQUFqQyxFQUE4QyxJQUE5QyxFQUFvRCxLQUFwRCxFQVo0QixDQVlnQzs7QUFFNUQsVUFBSS9YLEdBQUcsR0FBRyxJQUFWOztBQUVBLFVBQUl4RCxJQUFKLEVBQVU7QUFBRTtBQUNWO0FBQ0F3RCxXQUFHLEdBQUcsSUFBSTRDLE9BQUosQ0FBWSxVQUFBa0IsT0FBTztBQUFBLGlCQUFJLE1BQUksQ0FBQ21mLGNBQUwsR0FBc0JuZixPQUExQjtBQUFBLFNBQW5CLENBQU4sQ0FGUSxDQUVxRDs7QUFDN0QsWUFBSSxPQUFPcVQsRUFBUCxLQUFjLFVBQWxCLEVBQThCO0FBQzVCblgsYUFBRyxHQUFHQSxHQUFHLENBQUNnRSxJQUFKLENBQVNtVCxFQUFULENBQU47QUFDRDtBQUNGOztBQUVELGFBQU9uWCxHQUFQO0FBQ0Q7OztrQ0EvRG9CO0FBQUU7QUFDckI7QUFDQSxVQUFNMmtCLFVBQVUsR0FBR3BNLFNBQVMsQ0FBQ0MsS0FBVixDQUFnQkcsVUFBaEIsR0FBNkI1QixHQUE3QixDQUFpQyxZQUFqQyxDQUFuQjs7QUFDQSxVQUFJLE1BQU00TixVQUFVLENBQUMxdkIsTUFBckIsRUFBNkI7QUFDM0IsZUFBTztBQUFFeXZCLGdCQUFNLEVBQUU7QUFBVixTQUFQO0FBQ0Q7O0FBQ0QsVUFBSSxNQUFNQyxVQUFVLENBQUMxdkIsTUFBckIsRUFBNkI7QUFDM0IsZUFBTztBQUFFeXZCLGdCQUFNLEVBQUUsSUFBVjtBQUFnQnZMLG9CQUFVLEVBQUV3TCxVQUFVLENBQUMsQ0FBRCxDQUFWLENBQWNwSyxPQUFkLEVBQTVCO0FBQXFEM0MscUJBQVcsRUFBRStNLFVBQVUsQ0FBQyxDQUFELENBQVYsQ0FBY0MsZUFBZDtBQUFsRSxTQUFQO0FBQ0Q7O0FBQ0QsVUFBSSxNQUFNRCxVQUFVLENBQUMxdkIsTUFBckIsRUFBNkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsYUFBSyxJQUFJa0QsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR3dzQixVQUFVLENBQUMxdkIsTUFBL0IsRUFBdUNrRCxDQUFDLElBQUksQ0FBNUMsRUFBK0M7QUFDN0MsY0FBSSxPQUFPd3NCLFVBQVUsQ0FBQyxDQUFELENBQVYsQ0FBY0osa0JBQXJCLEtBQTRDLFVBQWhELEVBQTREO0FBQzFELG1CQUFPO0FBQUVHLG9CQUFNLEVBQUUsSUFBVjtBQUFnQnZMLHdCQUFVLEVBQUV3TCxVQUFVLENBQUN4c0IsQ0FBRCxDQUFWLENBQWNvaUIsT0FBZCxFQUE1QjtBQUFxRDNDLHlCQUFXLEVBQUUrTSxVQUFVLENBQUN4c0IsQ0FBRCxDQUFWLENBQWN5c0IsZUFBZDtBQUFsRSxhQUFQO0FBQ0Q7QUFDRjs7QUFDRCxjQUFNLElBQUl4TixLQUFKLENBQVUsNEJBQVYsQ0FBTjtBQUNELE9BbkJrQixDQW9CbkI7QUFDQTs7O0FBQ0EsWUFBTSxJQUFJQSxLQUFKLENBQVUsdUJBQVYsQ0FBTjtBQUNELEssQ0FFRDtBQUNBO0FBQ0E7QUFDQTs7OzttQ0FFc0IrQixVLEVBQVk7QUFDaEMsVUFBTTNCLE1BQU0sR0FBR2UsU0FBUyxDQUFDQyxLQUFWLENBQWdCVSxhQUFoQixHQUFnQ0UsWUFBaEMsR0FBK0NELFVBQS9DLENBQWY7O0FBQ0EsVUFBSSxDQUFDM0IsTUFBTCxFQUFhO0FBQ1gsY0FBTSxJQUFJSixLQUFKLGVBQWlCK0IsVUFBakIsaUNBQU47QUFDRDs7QUFDRCxhQUFPM0IsTUFBUDtBQUNEIiwiZmlsZSI6Ik4xOUhlbHBlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICh0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJykgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsIi8vIDIyLjEuMy4zMSBBcnJheS5wcm90b3R5cGVbQEB1bnNjb3BhYmxlc11cbnZhciBVTlNDT1BBQkxFUyA9IHJlcXVpcmUoJy4vX3drcycpKCd1bnNjb3BhYmxlcycpO1xudmFyIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5pZiAoQXJyYXlQcm90b1tVTlNDT1BBQkxFU10gPT0gdW5kZWZpbmVkKSByZXF1aXJlKCcuL19oaWRlJykoQXJyYXlQcm90bywgVU5TQ09QQUJMRVMsIHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICBBcnJheVByb3RvW1VOU0NPUEFCTEVTXVtrZXldID0gdHJ1ZTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgQ29uc3RydWN0b3IsIG5hbWUsIGZvcmJpZGRlbkZpZWxkKSB7XG4gIGlmICghKGl0IGluc3RhbmNlb2YgQ29uc3RydWN0b3IpIHx8IChmb3JiaWRkZW5GaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZvcmJpZGRlbkZpZWxkIGluIGl0KSkge1xuICAgIHRocm93IFR5cGVFcnJvcihuYW1lICsgJzogaW5jb3JyZWN0IGludm9jYXRpb24hJyk7XG4gIH0gcmV0dXJuIGl0O1xufTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsIi8vIGZhbHNlIC0+IEFycmF5I2luZGV4T2Zcbi8vIHRydWUgIC0+IEFycmF5I2luY2x1ZGVzXG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi9fdG8tYWJzb2x1dGUtaW5kZXgnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKElTX0lOQ0xVREVTKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIGVsLCBmcm9tSW5kZXgpIHtcbiAgICB2YXIgTyA9IHRvSU9iamVjdCgkdGhpcyk7XG4gICAgdmFyIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICB2YXIgaW5kZXggPSB0b0Fic29sdXRlSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpO1xuICAgIHZhciB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgIGlmIChJU19JTkNMVURFUyAmJiBlbCAhPSBlbCkgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSB7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgICBpZiAodmFsdWUgIT0gdmFsdWUpIHJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I2luZGV4T2YgaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIGlmIChJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKSB7XG4gICAgICBpZiAoT1tpbmRleF0gPT09IGVsKSByZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59O1xuIiwiLy8gZ2V0dGluZyB0YWcgZnJvbSAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbnZhciBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcbi8vIEVTMyB3cm9uZyBoZXJlXG52YXIgQVJHID0gY29mKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA9PSAnQXJndW1lbnRzJztcblxuLy8gZmFsbGJhY2sgZm9yIElFMTEgU2NyaXB0IEFjY2VzcyBEZW5pZWQgZXJyb3JcbnZhciB0cnlHZXQgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICB0cnkge1xuICAgIHJldHVybiBpdFtrZXldO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBPLCBULCBCO1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDogaXQgPT09IG51bGwgPyAnTnVsbCdcbiAgICAvLyBAQHRvU3RyaW5nVGFnIGNhc2VcbiAgICA6IHR5cGVvZiAoVCA9IHRyeUdldChPID0gT2JqZWN0KGl0KSwgVEFHKSkgPT0gJ3N0cmluZycgPyBUXG4gICAgLy8gYnVpbHRpblRhZyBjYXNlXG4gICAgOiBBUkcgPyBjb2YoTylcbiAgICAvLyBFUzMgYXJndW1lbnRzIGZhbGxiYWNrXG4gICAgOiAoQiA9IGNvZihPKSkgPT0gJ09iamVjdCcgJiYgdHlwZW9mIE8uY2FsbGVlID09ICdmdW5jdGlvbicgPyAnQXJndW1lbnRzJyA6IEI7XG59O1xuIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJyk7XG52YXIgcmVkZWZpbmVBbGwgPSByZXF1aXJlKCcuL19yZWRlZmluZS1hbGwnKTtcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBhbkluc3RhbmNlID0gcmVxdWlyZSgnLi9fYW4taW5zdGFuY2UnKTtcbnZhciBmb3JPZiA9IHJlcXVpcmUoJy4vX2Zvci1vZicpO1xudmFyICRpdGVyRGVmaW5lID0gcmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKTtcbnZhciBzdGVwID0gcmVxdWlyZSgnLi9faXRlci1zdGVwJyk7XG52YXIgc2V0U3BlY2llcyA9IHJlcXVpcmUoJy4vX3NldC1zcGVjaWVzJyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpO1xudmFyIGZhc3RLZXkgPSByZXF1aXJlKCcuL19tZXRhJykuZmFzdEtleTtcbnZhciB2YWxpZGF0ZSA9IHJlcXVpcmUoJy4vX3ZhbGlkYXRlLWNvbGxlY3Rpb24nKTtcbnZhciBTSVpFID0gREVTQ1JJUFRPUlMgPyAnX3MnIDogJ3NpemUnO1xuXG52YXIgZ2V0RW50cnkgPSBmdW5jdGlvbiAodGhhdCwga2V5KSB7XG4gIC8vIGZhc3QgY2FzZVxuICB2YXIgaW5kZXggPSBmYXN0S2V5KGtleSk7XG4gIHZhciBlbnRyeTtcbiAgaWYgKGluZGV4ICE9PSAnRicpIHJldHVybiB0aGF0Ll9pW2luZGV4XTtcbiAgLy8gZnJvemVuIG9iamVjdCBjYXNlXG4gIGZvciAoZW50cnkgPSB0aGF0Ll9mOyBlbnRyeTsgZW50cnkgPSBlbnRyeS5uKSB7XG4gICAgaWYgKGVudHJ5LmsgPT0ga2V5KSByZXR1cm4gZW50cnk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBnZXRDb25zdHJ1Y3RvcjogZnVuY3Rpb24gKHdyYXBwZXIsIE5BTUUsIElTX01BUCwgQURERVIpIHtcbiAgICB2YXIgQyA9IHdyYXBwZXIoZnVuY3Rpb24gKHRoYXQsIGl0ZXJhYmxlKSB7XG4gICAgICBhbkluc3RhbmNlKHRoYXQsIEMsIE5BTUUsICdfaScpO1xuICAgICAgdGhhdC5fdCA9IE5BTUU7ICAgICAgICAgLy8gY29sbGVjdGlvbiB0eXBlXG4gICAgICB0aGF0Ll9pID0gY3JlYXRlKG51bGwpOyAvLyBpbmRleFxuICAgICAgdGhhdC5fZiA9IHVuZGVmaW5lZDsgICAgLy8gZmlyc3QgZW50cnlcbiAgICAgIHRoYXQuX2wgPSB1bmRlZmluZWQ7ICAgIC8vIGxhc3QgZW50cnlcbiAgICAgIHRoYXRbU0laRV0gPSAwOyAgICAgICAgIC8vIHNpemVcbiAgICAgIGlmIChpdGVyYWJsZSAhPSB1bmRlZmluZWQpIGZvck9mKGl0ZXJhYmxlLCBJU19NQVAsIHRoYXRbQURERVJdLCB0aGF0KTtcbiAgICB9KTtcbiAgICByZWRlZmluZUFsbChDLnByb3RvdHlwZSwge1xuICAgICAgLy8gMjMuMS4zLjEgTWFwLnByb3RvdHlwZS5jbGVhcigpXG4gICAgICAvLyAyMy4yLjMuMiBTZXQucHJvdG90eXBlLmNsZWFyKClcbiAgICAgIGNsZWFyOiBmdW5jdGlvbiBjbGVhcigpIHtcbiAgICAgICAgZm9yICh2YXIgdGhhdCA9IHZhbGlkYXRlKHRoaXMsIE5BTUUpLCBkYXRhID0gdGhhdC5faSwgZW50cnkgPSB0aGF0Ll9mOyBlbnRyeTsgZW50cnkgPSBlbnRyeS5uKSB7XG4gICAgICAgICAgZW50cnkuciA9IHRydWU7XG4gICAgICAgICAgaWYgKGVudHJ5LnApIGVudHJ5LnAgPSBlbnRyeS5wLm4gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgZGVsZXRlIGRhdGFbZW50cnkuaV07XG4gICAgICAgIH1cbiAgICAgICAgdGhhdC5fZiA9IHRoYXQuX2wgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoYXRbU0laRV0gPSAwO1xuICAgICAgfSxcbiAgICAgIC8vIDIzLjEuMy4zIE1hcC5wcm90b3R5cGUuZGVsZXRlKGtleSlcbiAgICAgIC8vIDIzLjIuMy40IFNldC5wcm90b3R5cGUuZGVsZXRlKHZhbHVlKVxuICAgICAgJ2RlbGV0ZSc6IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdmFyIHRoYXQgPSB2YWxpZGF0ZSh0aGlzLCBOQU1FKTtcbiAgICAgICAgdmFyIGVudHJ5ID0gZ2V0RW50cnkodGhhdCwga2V5KTtcbiAgICAgICAgaWYgKGVudHJ5KSB7XG4gICAgICAgICAgdmFyIG5leHQgPSBlbnRyeS5uO1xuICAgICAgICAgIHZhciBwcmV2ID0gZW50cnkucDtcbiAgICAgICAgICBkZWxldGUgdGhhdC5faVtlbnRyeS5pXTtcbiAgICAgICAgICBlbnRyeS5yID0gdHJ1ZTtcbiAgICAgICAgICBpZiAocHJldikgcHJldi5uID0gbmV4dDtcbiAgICAgICAgICBpZiAobmV4dCkgbmV4dC5wID0gcHJldjtcbiAgICAgICAgICBpZiAodGhhdC5fZiA9PSBlbnRyeSkgdGhhdC5fZiA9IG5leHQ7XG4gICAgICAgICAgaWYgKHRoYXQuX2wgPT0gZW50cnkpIHRoYXQuX2wgPSBwcmV2O1xuICAgICAgICAgIHRoYXRbU0laRV0tLTtcbiAgICAgICAgfSByZXR1cm4gISFlbnRyeTtcbiAgICAgIH0sXG4gICAgICAvLyAyMy4yLjMuNiBTZXQucHJvdG90eXBlLmZvckVhY2goY2FsbGJhY2tmbiwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbiAgICAgIC8vIDIzLjEuMy41IE1hcC5wcm90b3R5cGUuZm9yRWFjaChjYWxsYmFja2ZuLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxuICAgICAgZm9yRWFjaDogZnVuY3Rpb24gZm9yRWFjaChjYWxsYmFja2ZuIC8qICwgdGhhdCA9IHVuZGVmaW5lZCAqLykge1xuICAgICAgICB2YWxpZGF0ZSh0aGlzLCBOQU1FKTtcbiAgICAgICAgdmFyIGYgPSBjdHgoY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQsIDMpO1xuICAgICAgICB2YXIgZW50cnk7XG4gICAgICAgIHdoaWxlIChlbnRyeSA9IGVudHJ5ID8gZW50cnkubiA6IHRoaXMuX2YpIHtcbiAgICAgICAgICBmKGVudHJ5LnYsIGVudHJ5LmssIHRoaXMpO1xuICAgICAgICAgIC8vIHJldmVydCB0byB0aGUgbGFzdCBleGlzdGluZyBlbnRyeVxuICAgICAgICAgIHdoaWxlIChlbnRyeSAmJiBlbnRyeS5yKSBlbnRyeSA9IGVudHJ5LnA7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvLyAyMy4xLjMuNyBNYXAucHJvdG90eXBlLmhhcyhrZXkpXG4gICAgICAvLyAyMy4yLjMuNyBTZXQucHJvdG90eXBlLmhhcyh2YWx1ZSlcbiAgICAgIGhhczogZnVuY3Rpb24gaGFzKGtleSkge1xuICAgICAgICByZXR1cm4gISFnZXRFbnRyeSh2YWxpZGF0ZSh0aGlzLCBOQU1FKSwga2V5KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoREVTQ1JJUFRPUlMpIGRQKEMucHJvdG90eXBlLCAnc2l6ZScsIHtcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdmFsaWRhdGUodGhpcywgTkFNRSlbU0laRV07XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIEM7XG4gIH0sXG4gIGRlZjogZnVuY3Rpb24gKHRoYXQsIGtleSwgdmFsdWUpIHtcbiAgICB2YXIgZW50cnkgPSBnZXRFbnRyeSh0aGF0LCBrZXkpO1xuICAgIHZhciBwcmV2LCBpbmRleDtcbiAgICAvLyBjaGFuZ2UgZXhpc3RpbmcgZW50cnlcbiAgICBpZiAoZW50cnkpIHtcbiAgICAgIGVudHJ5LnYgPSB2YWx1ZTtcbiAgICAvLyBjcmVhdGUgbmV3IGVudHJ5XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoYXQuX2wgPSBlbnRyeSA9IHtcbiAgICAgICAgaTogaW5kZXggPSBmYXN0S2V5KGtleSwgdHJ1ZSksIC8vIDwtIGluZGV4XG4gICAgICAgIGs6IGtleSwgICAgICAgICAgICAgICAgICAgICAgICAvLyA8LSBrZXlcbiAgICAgICAgdjogdmFsdWUsICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIHZhbHVlXG4gICAgICAgIHA6IHByZXYgPSB0aGF0Ll9sLCAgICAgICAgICAgICAvLyA8LSBwcmV2aW91cyBlbnRyeVxuICAgICAgICBuOiB1bmRlZmluZWQsICAgICAgICAgICAgICAgICAgLy8gPC0gbmV4dCBlbnRyeVxuICAgICAgICByOiBmYWxzZSAgICAgICAgICAgICAgICAgICAgICAgLy8gPC0gcmVtb3ZlZFxuICAgICAgfTtcbiAgICAgIGlmICghdGhhdC5fZikgdGhhdC5fZiA9IGVudHJ5O1xuICAgICAgaWYgKHByZXYpIHByZXYubiA9IGVudHJ5O1xuICAgICAgdGhhdFtTSVpFXSsrO1xuICAgICAgLy8gYWRkIHRvIGluZGV4XG4gICAgICBpZiAoaW5kZXggIT09ICdGJykgdGhhdC5faVtpbmRleF0gPSBlbnRyeTtcbiAgICB9IHJldHVybiB0aGF0O1xuICB9LFxuICBnZXRFbnRyeTogZ2V0RW50cnksXG4gIHNldFN0cm9uZzogZnVuY3Rpb24gKEMsIE5BTUUsIElTX01BUCkge1xuICAgIC8vIGFkZCAua2V5cywgLnZhbHVlcywgLmVudHJpZXMsIFtAQGl0ZXJhdG9yXVxuICAgIC8vIDIzLjEuMy40LCAyMy4xLjMuOCwgMjMuMS4zLjExLCAyMy4xLjMuMTIsIDIzLjIuMy41LCAyMy4yLjMuOCwgMjMuMi4zLjEwLCAyMy4yLjMuMTFcbiAgICAkaXRlckRlZmluZShDLCBOQU1FLCBmdW5jdGlvbiAoaXRlcmF0ZWQsIGtpbmQpIHtcbiAgICAgIHRoaXMuX3QgPSB2YWxpZGF0ZShpdGVyYXRlZCwgTkFNRSk7IC8vIHRhcmdldFxuICAgICAgdGhpcy5fayA9IGtpbmQ7ICAgICAgICAgICAgICAgICAgICAgLy8ga2luZFxuICAgICAgdGhpcy5fbCA9IHVuZGVmaW5lZDsgICAgICAgICAgICAgICAgLy8gcHJldmlvdXNcbiAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgICB2YXIga2luZCA9IHRoYXQuX2s7XG4gICAgICB2YXIgZW50cnkgPSB0aGF0Ll9sO1xuICAgICAgLy8gcmV2ZXJ0IHRvIHRoZSBsYXN0IGV4aXN0aW5nIGVudHJ5XG4gICAgICB3aGlsZSAoZW50cnkgJiYgZW50cnkucikgZW50cnkgPSBlbnRyeS5wO1xuICAgICAgLy8gZ2V0IG5leHQgZW50cnlcbiAgICAgIGlmICghdGhhdC5fdCB8fCAhKHRoYXQuX2wgPSBlbnRyeSA9IGVudHJ5ID8gZW50cnkubiA6IHRoYXQuX3QuX2YpKSB7XG4gICAgICAgIC8vIG9yIGZpbmlzaCB0aGUgaXRlcmF0aW9uXG4gICAgICAgIHRoYXQuX3QgPSB1bmRlZmluZWQ7XG4gICAgICAgIHJldHVybiBzdGVwKDEpO1xuICAgICAgfVxuICAgICAgLy8gcmV0dXJuIHN0ZXAgYnkga2luZFxuICAgICAgaWYgKGtpbmQgPT0gJ2tleXMnKSByZXR1cm4gc3RlcCgwLCBlbnRyeS5rKTtcbiAgICAgIGlmIChraW5kID09ICd2YWx1ZXMnKSByZXR1cm4gc3RlcCgwLCBlbnRyeS52KTtcbiAgICAgIHJldHVybiBzdGVwKDAsIFtlbnRyeS5rLCBlbnRyeS52XSk7XG4gICAgfSwgSVNfTUFQID8gJ2VudHJpZXMnIDogJ3ZhbHVlcycsICFJU19NQVAsIHRydWUpO1xuXG4gICAgLy8gYWRkIFtAQHNwZWNpZXNdLCAyMy4xLjIuMiwgMjMuMi4yLjJcbiAgICBzZXRTcGVjaWVzKE5BTUUpO1xuICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgcmVkZWZpbmVBbGwgPSByZXF1aXJlKCcuL19yZWRlZmluZS1hbGwnKTtcbnZhciBtZXRhID0gcmVxdWlyZSgnLi9fbWV0YScpO1xudmFyIGZvck9mID0gcmVxdWlyZSgnLi9fZm9yLW9mJyk7XG52YXIgYW5JbnN0YW5jZSA9IHJlcXVpcmUoJy4vX2FuLWluc3RhbmNlJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG52YXIgJGl0ZXJEZXRlY3QgPSByZXF1aXJlKCcuL19pdGVyLWRldGVjdCcpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBpbmhlcml0SWZSZXF1aXJlZCA9IHJlcXVpcmUoJy4vX2luaGVyaXQtaWYtcmVxdWlyZWQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTkFNRSwgd3JhcHBlciwgbWV0aG9kcywgY29tbW9uLCBJU19NQVAsIElTX1dFQUspIHtcbiAgdmFyIEJhc2UgPSBnbG9iYWxbTkFNRV07XG4gIHZhciBDID0gQmFzZTtcbiAgdmFyIEFEREVSID0gSVNfTUFQID8gJ3NldCcgOiAnYWRkJztcbiAgdmFyIHByb3RvID0gQyAmJiBDLnByb3RvdHlwZTtcbiAgdmFyIE8gPSB7fTtcbiAgdmFyIGZpeE1ldGhvZCA9IGZ1bmN0aW9uIChLRVkpIHtcbiAgICB2YXIgZm4gPSBwcm90b1tLRVldO1xuICAgIHJlZGVmaW5lKHByb3RvLCBLRVksXG4gICAgICBLRVkgPT0gJ2RlbGV0ZScgPyBmdW5jdGlvbiAoYSkge1xuICAgICAgICByZXR1cm4gSVNfV0VBSyAmJiAhaXNPYmplY3QoYSkgPyBmYWxzZSA6IGZuLmNhbGwodGhpcywgYSA9PT0gMCA/IDAgOiBhKTtcbiAgICAgIH0gOiBLRVkgPT0gJ2hhcycgPyBmdW5jdGlvbiBoYXMoYSkge1xuICAgICAgICByZXR1cm4gSVNfV0VBSyAmJiAhaXNPYmplY3QoYSkgPyBmYWxzZSA6IGZuLmNhbGwodGhpcywgYSA9PT0gMCA/IDAgOiBhKTtcbiAgICAgIH0gOiBLRVkgPT0gJ2dldCcgPyBmdW5jdGlvbiBnZXQoYSkge1xuICAgICAgICByZXR1cm4gSVNfV0VBSyAmJiAhaXNPYmplY3QoYSkgPyB1bmRlZmluZWQgOiBmbi5jYWxsKHRoaXMsIGEgPT09IDAgPyAwIDogYSk7XG4gICAgICB9IDogS0VZID09ICdhZGQnID8gZnVuY3Rpb24gYWRkKGEpIHsgZm4uY2FsbCh0aGlzLCBhID09PSAwID8gMCA6IGEpOyByZXR1cm4gdGhpczsgfVxuICAgICAgICA6IGZ1bmN0aW9uIHNldChhLCBiKSB7IGZuLmNhbGwodGhpcywgYSA9PT0gMCA/IDAgOiBhLCBiKTsgcmV0dXJuIHRoaXM7IH1cbiAgICApO1xuICB9O1xuICBpZiAodHlwZW9mIEMgIT0gJ2Z1bmN0aW9uJyB8fCAhKElTX1dFQUsgfHwgcHJvdG8uZm9yRWFjaCAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIG5ldyBDKCkuZW50cmllcygpLm5leHQoKTtcbiAgfSkpKSB7XG4gICAgLy8gY3JlYXRlIGNvbGxlY3Rpb24gY29uc3RydWN0b3JcbiAgICBDID0gY29tbW9uLmdldENvbnN0cnVjdG9yKHdyYXBwZXIsIE5BTUUsIElTX01BUCwgQURERVIpO1xuICAgIHJlZGVmaW5lQWxsKEMucHJvdG90eXBlLCBtZXRob2RzKTtcbiAgICBtZXRhLk5FRUQgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHZhciBpbnN0YW5jZSA9IG5ldyBDKCk7XG4gICAgLy8gZWFybHkgaW1wbGVtZW50YXRpb25zIG5vdCBzdXBwb3J0cyBjaGFpbmluZ1xuICAgIHZhciBIQVNOVF9DSEFJTklORyA9IGluc3RhbmNlW0FEREVSXShJU19XRUFLID8ge30gOiAtMCwgMSkgIT0gaW5zdGFuY2U7XG4gICAgLy8gVjggfiAgQ2hyb21pdW0gNDAtIHdlYWstY29sbGVjdGlvbnMgdGhyb3dzIG9uIHByaW1pdGl2ZXMsIGJ1dCBzaG91bGQgcmV0dXJuIGZhbHNlXG4gICAgdmFyIFRIUk9XU19PTl9QUklNSVRJVkVTID0gZmFpbHMoZnVuY3Rpb24gKCkgeyBpbnN0YW5jZS5oYXMoMSk7IH0pO1xuICAgIC8vIG1vc3QgZWFybHkgaW1wbGVtZW50YXRpb25zIGRvZXNuJ3Qgc3VwcG9ydHMgaXRlcmFibGVzLCBtb3N0IG1vZGVybiAtIG5vdCBjbG9zZSBpdCBjb3JyZWN0bHlcbiAgICB2YXIgQUNDRVBUX0lURVJBQkxFUyA9ICRpdGVyRGV0ZWN0KGZ1bmN0aW9uIChpdGVyKSB7IG5ldyBDKGl0ZXIpOyB9KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXdcbiAgICAvLyBmb3IgZWFybHkgaW1wbGVtZW50YXRpb25zIC0wIGFuZCArMCBub3QgdGhlIHNhbWVcbiAgICB2YXIgQlVHR1lfWkVSTyA9ICFJU19XRUFLICYmIGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIFY4IH4gQ2hyb21pdW0gNDItIGZhaWxzIG9ubHkgd2l0aCA1KyBlbGVtZW50c1xuICAgICAgdmFyICRpbnN0YW5jZSA9IG5ldyBDKCk7XG4gICAgICB2YXIgaW5kZXggPSA1O1xuICAgICAgd2hpbGUgKGluZGV4LS0pICRpbnN0YW5jZVtBRERFUl0oaW5kZXgsIGluZGV4KTtcbiAgICAgIHJldHVybiAhJGluc3RhbmNlLmhhcygtMCk7XG4gICAgfSk7XG4gICAgaWYgKCFBQ0NFUFRfSVRFUkFCTEVTKSB7XG4gICAgICBDID0gd3JhcHBlcihmdW5jdGlvbiAodGFyZ2V0LCBpdGVyYWJsZSkge1xuICAgICAgICBhbkluc3RhbmNlKHRhcmdldCwgQywgTkFNRSk7XG4gICAgICAgIHZhciB0aGF0ID0gaW5oZXJpdElmUmVxdWlyZWQobmV3IEJhc2UoKSwgdGFyZ2V0LCBDKTtcbiAgICAgICAgaWYgKGl0ZXJhYmxlICE9IHVuZGVmaW5lZCkgZm9yT2YoaXRlcmFibGUsIElTX01BUCwgdGhhdFtBRERFUl0sIHRoYXQpO1xuICAgICAgICByZXR1cm4gdGhhdDtcbiAgICAgIH0pO1xuICAgICAgQy5wcm90b3R5cGUgPSBwcm90bztcbiAgICAgIHByb3RvLmNvbnN0cnVjdG9yID0gQztcbiAgICB9XG4gICAgaWYgKFRIUk9XU19PTl9QUklNSVRJVkVTIHx8IEJVR0dZX1pFUk8pIHtcbiAgICAgIGZpeE1ldGhvZCgnZGVsZXRlJyk7XG4gICAgICBmaXhNZXRob2QoJ2hhcycpO1xuICAgICAgSVNfTUFQICYmIGZpeE1ldGhvZCgnZ2V0Jyk7XG4gICAgfVxuICAgIGlmIChCVUdHWV9aRVJPIHx8IEhBU05UX0NIQUlOSU5HKSBmaXhNZXRob2QoQURERVIpO1xuICAgIC8vIHdlYWsgY29sbGVjdGlvbnMgc2hvdWxkIG5vdCBjb250YWlucyAuY2xlYXIgbWV0aG9kXG4gICAgaWYgKElTX1dFQUsgJiYgcHJvdG8uY2xlYXIpIGRlbGV0ZSBwcm90by5jbGVhcjtcbiAgfVxuXG4gIHNldFRvU3RyaW5nVGFnKEMsIE5BTUUpO1xuXG4gIE9bTkFNRV0gPSBDO1xuICAkZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqIChDICE9IEJhc2UpLCBPKTtcblxuICBpZiAoIUlTX1dFQUspIGNvbW1vbi5zZXRTdHJvbmcoQywgTkFNRSwgSVNfTUFQKTtcblxuICByZXR1cm4gQztcbn07XG4iLCJ2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0geyB2ZXJzaW9uOiAnMi41LjcnIH07XG5pZiAodHlwZW9mIF9fZSA9PSAnbnVtYmVyJykgX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgaW5kZXgsIHZhbHVlKSB7XG4gIGlmIChpbmRleCBpbiBvYmplY3QpICRkZWZpbmVQcm9wZXJ0eS5mKG9iamVjdCwgaW5kZXgsIGNyZWF0ZURlc2MoMCwgdmFsdWUpKTtcbiAgZWxzZSBvYmplY3RbaW5kZXhdID0gdmFsdWU7XG59O1xuIiwiLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4sIHRoYXQsIGxlbmd0aCkge1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZiAodGhhdCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gZm47XG4gIHN3aXRjaCAobGVuZ3RoKSB7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24gKGEpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uICgvKiAuLi5hcmdzICovKSB7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuIiwiLy8gNy4yLjEgUmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudClcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCA9PSB1bmRlZmluZWQpIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsIi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudDtcbi8vIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnIGluIG9sZCBJRVxudmFyIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG4iLCIvLyBJRSA4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgJ2NvbnN0cnVjdG9yLGhhc093blByb3BlcnR5LGlzUHJvdG90eXBlT2YscHJvcGVydHlJc0VudW1lcmFibGUsdG9Mb2NhbGVTdHJpbmcsdG9TdHJpbmcsdmFsdWVPZidcbikuc3BsaXQoJywnKTtcbiIsIi8vIGFsbCBlbnVtZXJhYmxlIG9iamVjdCBrZXlzLCBpbmNsdWRlcyBzeW1ib2xzXG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG52YXIgZ09QUyA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJyk7XG52YXIgcElFID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIHJlc3VsdCA9IGdldEtleXMoaXQpO1xuICB2YXIgZ2V0U3ltYm9scyA9IGdPUFMuZjtcbiAgaWYgKGdldFN5bWJvbHMpIHtcbiAgICB2YXIgc3ltYm9scyA9IGdldFN5bWJvbHMoaXQpO1xuICAgIHZhciBpc0VudW0gPSBwSUUuZjtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIGtleTtcbiAgICB3aGlsZSAoc3ltYm9scy5sZW5ndGggPiBpKSBpZiAoaXNFbnVtLmNhbGwoaXQsIGtleSA9IHN5bWJvbHNbaSsrXSkpIHJlc3VsdC5wdXNoKGtleSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbiAodHlwZSwgbmFtZSwgc291cmNlKSB7XG4gIHZhciBJU19GT1JDRUQgPSB0eXBlICYgJGV4cG9ydC5GO1xuICB2YXIgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuRztcbiAgdmFyIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlM7XG4gIHZhciBJU19QUk9UTyA9IHR5cGUgJiAkZXhwb3J0LlA7XG4gIHZhciBJU19CSU5EID0gdHlwZSAmICRleHBvcnQuQjtcbiAgdmFyIHRhcmdldCA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSB8fCAoZ2xvYmFsW25hbWVdID0ge30pIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXTtcbiAgdmFyIGV4cG9ydHMgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KTtcbiAgdmFyIGV4cFByb3RvID0gZXhwb3J0c1tQUk9UT1RZUEVdIHx8IChleHBvcnRzW1BST1RPVFlQRV0gPSB7fSk7XG4gIHZhciBrZXksIG93biwgb3V0LCBleHA7XG4gIGlmIChJU19HTE9CQUwpIHNvdXJjZSA9IG5hbWU7XG4gIGZvciAoa2V5IGluIHNvdXJjZSkge1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSAob3duID8gdGFyZ2V0IDogc291cmNlKVtrZXldO1xuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgZXhwID0gSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXh0ZW5kIGdsb2JhbFxuICAgIGlmICh0YXJnZXQpIHJlZGVmaW5lKHRhcmdldCwga2V5LCBvdXQsIHR5cGUgJiAkZXhwb3J0LlUpO1xuICAgIC8vIGV4cG9ydFxuICAgIGlmIChleHBvcnRzW2tleV0gIT0gb3V0KSBoaWRlKGV4cG9ydHMsIGtleSwgZXhwKTtcbiAgICBpZiAoSVNfUFJPVE8gJiYgZXhwUHJvdG9ba2V5XSAhPSBvdXQpIGV4cFByb3RvW2tleV0gPSBvdXQ7XG4gIH1cbn07XG5nbG9iYWwuY29yZSA9IGNvcmU7XG4vLyB0eXBlIGJpdG1hcFxuJGV4cG9ydC5GID0gMTsgICAvLyBmb3JjZWRcbiRleHBvcnQuRyA9IDI7ICAgLy8gZ2xvYmFsXG4kZXhwb3J0LlMgPSA0OyAgIC8vIHN0YXRpY1xuJGV4cG9ydC5QID0gODsgICAvLyBwcm90b1xuJGV4cG9ydC5CID0gMTY7ICAvLyBiaW5kXG4kZXhwb3J0LlcgPSAzMjsgIC8vIHdyYXBcbiRleHBvcnQuVSA9IDY0OyAgLy8gc2FmZVxuJGV4cG9ydC5SID0gMTI4OyAvLyByZWFsIHByb3RvIG1ldGhvZCBmb3IgYGxpYnJhcnlgXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG52YXIgd2tzID0gcmVxdWlyZSgnLi9fd2tzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEtFWSwgbGVuZ3RoLCBleGVjKSB7XG4gIHZhciBTWU1CT0wgPSB3a3MoS0VZKTtcbiAgdmFyIGZucyA9IGV4ZWMoZGVmaW5lZCwgU1lNQk9MLCAnJ1tLRVldKTtcbiAgdmFyIHN0cmZuID0gZm5zWzBdO1xuICB2YXIgcnhmbiA9IGZuc1sxXTtcbiAgaWYgKGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgTyA9IHt9O1xuICAgIE9bU1lNQk9MXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH07XG4gICAgcmV0dXJuICcnW0tFWV0oTykgIT0gNztcbiAgfSkpIHtcbiAgICByZWRlZmluZShTdHJpbmcucHJvdG90eXBlLCBLRVksIHN0cmZuKTtcbiAgICBoaWRlKFJlZ0V4cC5wcm90b3R5cGUsIFNZTUJPTCwgbGVuZ3RoID09IDJcbiAgICAgIC8vIDIxLjIuNS44IFJlZ0V4cC5wcm90b3R5cGVbQEByZXBsYWNlXShzdHJpbmcsIHJlcGxhY2VWYWx1ZSlcbiAgICAgIC8vIDIxLjIuNS4xMSBSZWdFeHAucHJvdG90eXBlW0BAc3BsaXRdKHN0cmluZywgbGltaXQpXG4gICAgICA/IGZ1bmN0aW9uIChzdHJpbmcsIGFyZykgeyByZXR1cm4gcnhmbi5jYWxsKHN0cmluZywgdGhpcywgYXJnKTsgfVxuICAgICAgLy8gMjEuMi41LjYgUmVnRXhwLnByb3RvdHlwZVtAQG1hdGNoXShzdHJpbmcpXG4gICAgICAvLyAyMS4yLjUuOSBSZWdFeHAucHJvdG90eXBlW0BAc2VhcmNoXShzdHJpbmcpXG4gICAgICA6IGZ1bmN0aW9uIChzdHJpbmcpIHsgcmV0dXJuIHJ4Zm4uY2FsbChzdHJpbmcsIHRoaXMpOyB9XG4gICAgKTtcbiAgfVxufTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIDIxLjIuNS4zIGdldCBSZWdFeHAucHJvdG90eXBlLmZsYWdzXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuICB2YXIgdGhhdCA9IGFuT2JqZWN0KHRoaXMpO1xuICB2YXIgcmVzdWx0ID0gJyc7XG4gIGlmICh0aGF0Lmdsb2JhbCkgcmVzdWx0ICs9ICdnJztcbiAgaWYgKHRoYXQuaWdub3JlQ2FzZSkgcmVzdWx0ICs9ICdpJztcbiAgaWYgKHRoYXQubXVsdGlsaW5lKSByZXN1bHQgKz0gJ20nO1xuICBpZiAodGhhdC51bmljb2RlKSByZXN1bHQgKz0gJ3UnO1xuICBpZiAodGhhdC5zdGlja3kpIHJlc3VsdCArPSAneSc7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwidmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuL19pdGVyLWNhbGwnKTtcbnZhciBpc0FycmF5SXRlciA9IHJlcXVpcmUoJy4vX2lzLWFycmF5LWl0ZXInKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgZ2V0SXRlckZuID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcbnZhciBCUkVBSyA9IHt9O1xudmFyIFJFVFVSTiA9IHt9O1xudmFyIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYWJsZSwgZW50cmllcywgZm4sIHRoYXQsIElURVJBVE9SKSB7XG4gIHZhciBpdGVyRm4gPSBJVEVSQVRPUiA/IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGl0ZXJhYmxlOyB9IDogZ2V0SXRlckZuKGl0ZXJhYmxlKTtcbiAgdmFyIGYgPSBjdHgoZm4sIHRoYXQsIGVudHJpZXMgPyAyIDogMSk7XG4gIHZhciBpbmRleCA9IDA7XG4gIHZhciBsZW5ndGgsIHN0ZXAsIGl0ZXJhdG9yLCByZXN1bHQ7XG4gIGlmICh0eXBlb2YgaXRlckZuICE9ICdmdW5jdGlvbicpIHRocm93IFR5cGVFcnJvcihpdGVyYWJsZSArICcgaXMgbm90IGl0ZXJhYmxlIScpO1xuICAvLyBmYXN0IGNhc2UgZm9yIGFycmF5cyB3aXRoIGRlZmF1bHQgaXRlcmF0b3JcbiAgaWYgKGlzQXJyYXlJdGVyKGl0ZXJGbikpIGZvciAobGVuZ3RoID0gdG9MZW5ndGgoaXRlcmFibGUubGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcbiAgICByZXN1bHQgPSBlbnRyaWVzID8gZihhbk9iamVjdChzdGVwID0gaXRlcmFibGVbaW5kZXhdKVswXSwgc3RlcFsxXSkgOiBmKGl0ZXJhYmxlW2luZGV4XSk7XG4gICAgaWYgKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pIHJldHVybiByZXN1bHQ7XG4gIH0gZWxzZSBmb3IgKGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoaXRlcmFibGUpOyAhKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7KSB7XG4gICAgcmVzdWx0ID0gY2FsbChpdGVyYXRvciwgZiwgc3RlcC52YWx1ZSwgZW50cmllcyk7XG4gICAgaWYgKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pIHJldHVybiByZXN1bHQ7XG4gIH1cbn07XG5leHBvcnRzLkJSRUFLID0gQlJFQUs7XG5leHBvcnRzLlJFVFVSTiA9IFJFVFVSTjtcbiIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGZcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbmlmICh0eXBlb2YgX19nID09ICdudW1iZXInKSBfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiIsInZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07XG4iLCJ2YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICByZXR1cm4gZFAuZihvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG4iLCJ2YXIgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudDtcbm1vZHVsZS5leHBvcnRzID0gZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuIiwibW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdkaXYnKSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG59KTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fc2V0LXByb3RvJykuc2V0O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodGhhdCwgdGFyZ2V0LCBDKSB7XG4gIHZhciBTID0gdGFyZ2V0LmNvbnN0cnVjdG9yO1xuICB2YXIgUDtcbiAgaWYgKFMgIT09IEMgJiYgdHlwZW9mIFMgPT0gJ2Z1bmN0aW9uJyAmJiAoUCA9IFMucHJvdG90eXBlKSAhPT0gQy5wcm90b3R5cGUgJiYgaXNPYmplY3QoUCkgJiYgc2V0UHJvdG90eXBlT2YpIHtcbiAgICBzZXRQcm90b3R5cGVPZih0aGF0LCBQKTtcbiAgfSByZXR1cm4gdGhhdDtcbn07XG4iLCIvLyBmYXN0IGFwcGx5LCBodHRwOi8vanNwZXJmLmxua2l0LmNvbS9mYXN0LWFwcGx5LzVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZuLCBhcmdzLCB0aGF0KSB7XG4gIHZhciB1biA9IHRoYXQgPT09IHVuZGVmaW5lZDtcbiAgc3dpdGNoIChhcmdzLmxlbmd0aCkge1xuICAgIGNhc2UgMDogcmV0dXJuIHVuID8gZm4oKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0KTtcbiAgICBjYXNlIDE6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0pO1xuICAgIGNhc2UgMjogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgY2FzZSAzOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgICBjYXNlIDQ6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pO1xuICB9IHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmdzKTtcbn07XG4iLCIvLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKSA/IE9iamVjdCA6IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gY29mKGl0KSA9PSAnU3RyaW5nJyA/IGl0LnNwbGl0KCcnKSA6IE9iamVjdChpdCk7XG59O1xuIiwiLy8gY2hlY2sgb24gZGVmYXVsdCBBcnJheSBpdGVyYXRvclxudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ICE9PSB1bmRlZmluZWQgJiYgKEl0ZXJhdG9ycy5BcnJheSA9PT0gaXQgfHwgQXJyYXlQcm90b1tJVEVSQVRPUl0gPT09IGl0KTtcbn07XG4iLCIvLyA3LjIuMiBJc0FycmF5KGFyZ3VtZW50KVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIGlzQXJyYXkoYXJnKSB7XG4gIHJldHVybiBjb2YoYXJnKSA9PSAnQXJyYXknO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59O1xuIiwiLy8gNy4yLjggSXNSZWdFeHAoYXJndW1lbnQpXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbnZhciBNQVRDSCA9IHJlcXVpcmUoJy4vX3drcycpKCdtYXRjaCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIGlzUmVnRXhwO1xuICByZXR1cm4gaXNPYmplY3QoaXQpICYmICgoaXNSZWdFeHAgPSBpdFtNQVRDSF0pICE9PSB1bmRlZmluZWQgPyAhIWlzUmVnRXhwIDogY29mKGl0KSA9PSAnUmVnRXhwJyk7XG59O1xuIiwiLy8gY2FsbCBzb21ldGhpbmcgb24gaXRlcmF0b3Igc3RlcCB3aXRoIHNhZmUgY2xvc2luZyBvbiBlcnJvclxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYXRvciwgZm4sIHZhbHVlLCBlbnRyaWVzKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGVudHJpZXMgPyBmbihhbk9iamVjdCh2YWx1ZSlbMF0sIHZhbHVlWzFdKSA6IGZuKHZhbHVlKTtcbiAgLy8gNy40LjYgSXRlcmF0b3JDbG9zZShpdGVyYXRvciwgY29tcGxldGlvbilcbiAgfSBjYXRjaCAoZSkge1xuICAgIHZhciByZXQgPSBpdGVyYXRvclsncmV0dXJuJ107XG4gICAgaWYgKHJldCAhPT0gdW5kZWZpbmVkKSBhbk9iamVjdChyZXQuY2FsbChpdGVyYXRvcikpO1xuICAgIHRocm93IGU7XG4gIH1cbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpO1xudmFyIGRlc2NyaXB0b3IgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG5cbi8vIDI1LjEuMi4xLjEgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19oaWRlJykoSXRlcmF0b3JQcm90b3R5cGUsIHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpLCBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpIHtcbiAgQ29uc3RydWN0b3IucHJvdG90eXBlID0gY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlLCB7IG5leHQ6IGRlc2NyaXB0b3IoMSwgbmV4dCkgfSk7XG4gIHNldFRvU3RyaW5nVGFnKENvbnN0cnVjdG9yLCBOQU1FICsgJyBJdGVyYXRvcicpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZID0gcmVxdWlyZSgnLi9fbGlicmFyeScpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciAkaXRlckNyZWF0ZSA9IHJlcXVpcmUoJy4vX2l0ZXItY3JlYXRlJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpO1xudmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgQlVHR1kgPSAhKFtdLmtleXMgJiYgJ25leHQnIGluIFtdLmtleXMoKSk7IC8vIFNhZmFyaSBoYXMgYnVnZ3kgaXRlcmF0b3JzIHcvbyBgbmV4dGBcbnZhciBGRl9JVEVSQVRPUiA9ICdAQGl0ZXJhdG9yJztcbnZhciBLRVlTID0gJ2tleXMnO1xudmFyIFZBTFVFUyA9ICd2YWx1ZXMnO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEJhc2UsIE5BTUUsIENvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFRCkge1xuICAkaXRlckNyZWF0ZShDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCk7XG4gIHZhciBnZXRNZXRob2QgPSBmdW5jdGlvbiAoa2luZCkge1xuICAgIGlmICghQlVHR1kgJiYga2luZCBpbiBwcm90bykgcmV0dXJuIHByb3RvW2tpbmRdO1xuICAgIHN3aXRjaCAoa2luZCkge1xuICAgICAgY2FzZSBLRVlTOiByZXR1cm4gZnVuY3Rpb24ga2V5cygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICAgIGNhc2UgVkFMVUVTOiByZXR1cm4gZnVuY3Rpb24gdmFsdWVzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgIH0gcmV0dXJuIGZ1bmN0aW9uIGVudHJpZXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gIH07XG4gIHZhciBUQUcgPSBOQU1FICsgJyBJdGVyYXRvcic7XG4gIHZhciBERUZfVkFMVUVTID0gREVGQVVMVCA9PSBWQUxVRVM7XG4gIHZhciBWQUxVRVNfQlVHID0gZmFsc2U7XG4gIHZhciBwcm90byA9IEJhc2UucHJvdG90eXBlO1xuICB2YXIgJG5hdGl2ZSA9IHByb3RvW0lURVJBVE9SXSB8fCBwcm90b1tGRl9JVEVSQVRPUl0gfHwgREVGQVVMVCAmJiBwcm90b1tERUZBVUxUXTtcbiAgdmFyICRkZWZhdWx0ID0gJG5hdGl2ZSB8fCBnZXRNZXRob2QoREVGQVVMVCk7XG4gIHZhciAkZW50cmllcyA9IERFRkFVTFQgPyAhREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKCdlbnRyaWVzJykgOiB1bmRlZmluZWQ7XG4gIHZhciAkYW55TmF0aXZlID0gTkFNRSA9PSAnQXJyYXknID8gcHJvdG8uZW50cmllcyB8fCAkbmF0aXZlIDogJG5hdGl2ZTtcbiAgdmFyIG1ldGhvZHMsIGtleSwgSXRlcmF0b3JQcm90b3R5cGU7XG4gIC8vIEZpeCBuYXRpdmVcbiAgaWYgKCRhbnlOYXRpdmUpIHtcbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mKCRhbnlOYXRpdmUuY2FsbChuZXcgQmFzZSgpKSk7XG4gICAgaWYgKEl0ZXJhdG9yUHJvdG90eXBlICE9PSBPYmplY3QucHJvdG90eXBlICYmIEl0ZXJhdG9yUHJvdG90eXBlLm5leHQpIHtcbiAgICAgIC8vIFNldCBAQHRvU3RyaW5nVGFnIHRvIG5hdGl2ZSBpdGVyYXRvcnNcbiAgICAgIHNldFRvU3RyaW5nVGFnKEl0ZXJhdG9yUHJvdG90eXBlLCBUQUcsIHRydWUpO1xuICAgICAgLy8gZml4IGZvciBzb21lIG9sZCBlbmdpbmVzXG4gICAgICBpZiAoIUxJQlJBUlkgJiYgdHlwZW9mIEl0ZXJhdG9yUHJvdG90eXBlW0lURVJBVE9SXSAhPSAnZnVuY3Rpb24nKSBoaWRlKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG4gICAgfVxuICB9XG4gIC8vIGZpeCBBcnJheSN7dmFsdWVzLCBAQGl0ZXJhdG9yfS5uYW1lIGluIFY4IC8gRkZcbiAgaWYgKERFRl9WQUxVRVMgJiYgJG5hdGl2ZSAmJiAkbmF0aXZlLm5hbWUgIT09IFZBTFVFUykge1xuICAgIFZBTFVFU19CVUcgPSB0cnVlO1xuICAgICRkZWZhdWx0ID0gZnVuY3Rpb24gdmFsdWVzKCkgeyByZXR1cm4gJG5hdGl2ZS5jYWxsKHRoaXMpOyB9O1xuICB9XG4gIC8vIERlZmluZSBpdGVyYXRvclxuICBpZiAoKCFMSUJSQVJZIHx8IEZPUkNFRCkgJiYgKEJVR0dZIHx8IFZBTFVFU19CVUcgfHwgIXByb3RvW0lURVJBVE9SXSkpIHtcbiAgICBoaWRlKHByb3RvLCBJVEVSQVRPUiwgJGRlZmF1bHQpO1xuICB9XG4gIC8vIFBsdWcgZm9yIGxpYnJhcnlcbiAgSXRlcmF0b3JzW05BTUVdID0gJGRlZmF1bHQ7XG4gIEl0ZXJhdG9yc1tUQUddID0gcmV0dXJuVGhpcztcbiAgaWYgKERFRkFVTFQpIHtcbiAgICBtZXRob2RzID0ge1xuICAgICAgdmFsdWVzOiBERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoVkFMVUVTKSxcbiAgICAgIGtleXM6IElTX1NFVCA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKEtFWVMpLFxuICAgICAgZW50cmllczogJGVudHJpZXNcbiAgICB9O1xuICAgIGlmIChGT1JDRUQpIGZvciAoa2V5IGluIG1ldGhvZHMpIHtcbiAgICAgIGlmICghKGtleSBpbiBwcm90bykpIHJlZGVmaW5lKHByb3RvLCBrZXksIG1ldGhvZHNba2V5XSk7XG4gICAgfSBlbHNlICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKEJVR0dZIHx8IFZBTFVFU19CVUcpLCBOQU1FLCBtZXRob2RzKTtcbiAgfVxuICByZXR1cm4gbWV0aG9kcztcbn07XG4iLCJ2YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBTQUZFX0NMT1NJTkcgPSBmYWxzZTtcblxudHJ5IHtcbiAgdmFyIHJpdGVyID0gWzddW0lURVJBVE9SXSgpO1xuICByaXRlclsncmV0dXJuJ10gPSBmdW5jdGlvbiAoKSB7IFNBRkVfQ0xPU0lORyA9IHRydWU7IH07XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby10aHJvdy1saXRlcmFsXG4gIEFycmF5LmZyb20ocml0ZXIsIGZ1bmN0aW9uICgpIHsgdGhyb3cgMjsgfSk7XG59IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYywgc2tpcENsb3NpbmcpIHtcbiAgaWYgKCFza2lwQ2xvc2luZyAmJiAhU0FGRV9DTE9TSU5HKSByZXR1cm4gZmFsc2U7XG4gIHZhciBzYWZlID0gZmFsc2U7XG4gIHRyeSB7XG4gICAgdmFyIGFyciA9IFs3XTtcbiAgICB2YXIgaXRlciA9IGFycltJVEVSQVRPUl0oKTtcbiAgICBpdGVyLm5leHQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB7IGRvbmU6IHNhZmUgPSB0cnVlIH07IH07XG4gICAgYXJyW0lURVJBVE9SXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGl0ZXI7IH07XG4gICAgZXhlYyhhcnIpO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgcmV0dXJuIHNhZmU7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZG9uZSwgdmFsdWUpIHtcbiAgcmV0dXJuIHsgdmFsdWU6IHZhbHVlLCBkb25lOiAhIWRvbmUgfTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmYWxzZTtcbiIsInZhciBNRVRBID0gcmVxdWlyZSgnLi9fdWlkJykoJ21ldGEnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHNldERlc2MgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xudmFyIGlkID0gMDtcbnZhciBpc0V4dGVuc2libGUgPSBPYmplY3QuaXNFeHRlbnNpYmxlIHx8IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRydWU7XG59O1xudmFyIEZSRUVaRSA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGlzRXh0ZW5zaWJsZShPYmplY3QucHJldmVudEV4dGVuc2lvbnMoe30pKTtcbn0pO1xudmFyIHNldE1ldGEgPSBmdW5jdGlvbiAoaXQpIHtcbiAgc2V0RGVzYyhpdCwgTUVUQSwgeyB2YWx1ZToge1xuICAgIGk6ICdPJyArICsraWQsIC8vIG9iamVjdCBJRFxuICAgIHc6IHt9ICAgICAgICAgIC8vIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH0gfSk7XG59O1xudmFyIGZhc3RLZXkgPSBmdW5jdGlvbiAoaXQsIGNyZWF0ZSkge1xuICAvLyByZXR1cm4gcHJpbWl0aXZlIHdpdGggcHJlZml4XG4gIGlmICghaXNPYmplY3QoaXQpKSByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnID8gaXQgOiAodHlwZW9mIGl0ID09ICdzdHJpbmcnID8gJ1MnIDogJ1AnKSArIGl0O1xuICBpZiAoIWhhcyhpdCwgTUVUQSkpIHtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmICghaXNFeHRlbnNpYmxlKGl0KSkgcmV0dXJuICdGJztcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmICghY3JlYXRlKSByZXR1cm4gJ0UnO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBvYmplY3QgSURcbiAgfSByZXR1cm4gaXRbTUVUQV0uaTtcbn07XG52YXIgZ2V0V2VhayA9IGZ1bmN0aW9uIChpdCwgY3JlYXRlKSB7XG4gIGlmICghaGFzKGl0LCBNRVRBKSkge1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYgKCFpc0V4dGVuc2libGUoaXQpKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmICghY3JlYXRlKSByZXR1cm4gZmFsc2U7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIGhhc2ggd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfSByZXR1cm4gaXRbTUVUQV0udztcbn07XG4vLyBhZGQgbWV0YWRhdGEgb24gZnJlZXplLWZhbWlseSBtZXRob2RzIGNhbGxpbmdcbnZhciBvbkZyZWV6ZSA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoRlJFRVpFICYmIG1ldGEuTkVFRCAmJiBpc0V4dGVuc2libGUoaXQpICYmICFoYXMoaXQsIE1FVEEpKSBzZXRNZXRhKGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciBtZXRhID0gbW9kdWxlLmV4cG9ydHMgPSB7XG4gIEtFWTogTUVUQSxcbiAgTkVFRDogZmFsc2UsXG4gIGZhc3RLZXk6IGZhc3RLZXksXG4gIGdldFdlYWs6IGdldFdlYWssXG4gIG9uRnJlZXplOiBvbkZyZWV6ZVxufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBtYWNyb3Rhc2sgPSByZXF1aXJlKCcuL190YXNrJykuc2V0O1xudmFyIE9ic2VydmVyID0gZ2xvYmFsLk11dGF0aW9uT2JzZXJ2ZXIgfHwgZ2xvYmFsLldlYktpdE11dGF0aW9uT2JzZXJ2ZXI7XG52YXIgcHJvY2VzcyA9IGdsb2JhbC5wcm9jZXNzO1xudmFyIFByb21pc2UgPSBnbG9iYWwuUHJvbWlzZTtcbnZhciBpc05vZGUgPSByZXF1aXJlKCcuL19jb2YnKShwcm9jZXNzKSA9PSAncHJvY2Vzcyc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuICB2YXIgaGVhZCwgbGFzdCwgbm90aWZ5O1xuXG4gIHZhciBmbHVzaCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcGFyZW50LCBmbjtcbiAgICBpZiAoaXNOb2RlICYmIChwYXJlbnQgPSBwcm9jZXNzLmRvbWFpbikpIHBhcmVudC5leGl0KCk7XG4gICAgd2hpbGUgKGhlYWQpIHtcbiAgICAgIGZuID0gaGVhZC5mbjtcbiAgICAgIGhlYWQgPSBoZWFkLm5leHQ7XG4gICAgICB0cnkge1xuICAgICAgICBmbigpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZiAoaGVhZCkgbm90aWZ5KCk7XG4gICAgICAgIGVsc2UgbGFzdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9IGxhc3QgPSB1bmRlZmluZWQ7XG4gICAgaWYgKHBhcmVudCkgcGFyZW50LmVudGVyKCk7XG4gIH07XG5cbiAgLy8gTm9kZS5qc1xuICBpZiAoaXNOb2RlKSB7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhmbHVzaCk7XG4gICAgfTtcbiAgLy8gYnJvd3NlcnMgd2l0aCBNdXRhdGlvbk9ic2VydmVyLCBleGNlcHQgaU9TIFNhZmFyaSAtIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy8zMzlcbiAgfSBlbHNlIGlmIChPYnNlcnZlciAmJiAhKGdsb2JhbC5uYXZpZ2F0b3IgJiYgZ2xvYmFsLm5hdmlnYXRvci5zdGFuZGFsb25lKSkge1xuICAgIHZhciB0b2dnbGUgPSB0cnVlO1xuICAgIHZhciBub2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuICAgIG5ldyBPYnNlcnZlcihmbHVzaCkub2JzZXJ2ZShub2RlLCB7IGNoYXJhY3RlckRhdGE6IHRydWUgfSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgbm9kZS5kYXRhID0gdG9nZ2xlID0gIXRvZ2dsZTtcbiAgICB9O1xuICAvLyBlbnZpcm9ubWVudHMgd2l0aCBtYXliZSBub24tY29tcGxldGVseSBjb3JyZWN0LCBidXQgZXhpc3RlbnQgUHJvbWlzZVxuICB9IGVsc2UgaWYgKFByb21pc2UgJiYgUHJvbWlzZS5yZXNvbHZlKSB7XG4gICAgLy8gUHJvbWlzZS5yZXNvbHZlIHdpdGhvdXQgYW4gYXJndW1lbnQgdGhyb3dzIGFuIGVycm9yIGluIExHIFdlYk9TIDJcbiAgICB2YXIgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSh1bmRlZmluZWQpO1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHByb21pc2UudGhlbihmbHVzaCk7XG4gICAgfTtcbiAgLy8gZm9yIG90aGVyIGVudmlyb25tZW50cyAtIG1hY3JvdGFzayBiYXNlZCBvbjpcbiAgLy8gLSBzZXRJbW1lZGlhdGVcbiAgLy8gLSBNZXNzYWdlQ2hhbm5lbFxuICAvLyAtIHdpbmRvdy5wb3N0TWVzc2FnXG4gIC8vIC0gb25yZWFkeXN0YXRlY2hhbmdlXG4gIC8vIC0gc2V0VGltZW91dFxuICB9IGVsc2Uge1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIHN0cmFuZ2UgSUUgKyB3ZWJwYWNrIGRldiBzZXJ2ZXIgYnVnIC0gdXNlIC5jYWxsKGdsb2JhbClcbiAgICAgIG1hY3JvdGFzay5jYWxsKGdsb2JhbCwgZmx1c2gpO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKGZuKSB7XG4gICAgdmFyIHRhc2sgPSB7IGZuOiBmbiwgbmV4dDogdW5kZWZpbmVkIH07XG4gICAgaWYgKGxhc3QpIGxhc3QubmV4dCA9IHRhc2s7XG4gICAgaWYgKCFoZWFkKSB7XG4gICAgICBoZWFkID0gdGFzaztcbiAgICAgIG5vdGlmeSgpO1xuICAgIH0gbGFzdCA9IHRhc2s7XG4gIH07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMjUuNC4xLjUgTmV3UHJvbWlzZUNhcGFiaWxpdHkoQylcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5cbmZ1bmN0aW9uIFByb21pc2VDYXBhYmlsaXR5KEMpIHtcbiAgdmFyIHJlc29sdmUsIHJlamVjdDtcbiAgdGhpcy5wcm9taXNlID0gbmV3IEMoZnVuY3Rpb24gKCQkcmVzb2x2ZSwgJCRyZWplY3QpIHtcbiAgICBpZiAocmVzb2x2ZSAhPT0gdW5kZWZpbmVkIHx8IHJlamVjdCAhPT0gdW5kZWZpbmVkKSB0aHJvdyBUeXBlRXJyb3IoJ0JhZCBQcm9taXNlIGNvbnN0cnVjdG9yJyk7XG4gICAgcmVzb2x2ZSA9ICQkcmVzb2x2ZTtcbiAgICByZWplY3QgPSAkJHJlamVjdDtcbiAgfSk7XG4gIHRoaXMucmVzb2x2ZSA9IGFGdW5jdGlvbihyZXNvbHZlKTtcbiAgdGhpcy5yZWplY3QgPSBhRnVuY3Rpb24ocmVqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMuZiA9IGZ1bmN0aW9uIChDKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZUNhcGFiaWxpdHkoQyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMTkuMS4yLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSwgLi4uKVxudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xudmFyIGdPUFMgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpO1xudmFyIHBJRSA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0Jyk7XG52YXIgJGFzc2lnbiA9IE9iamVjdC5hc3NpZ247XG5cbi8vIHNob3VsZCB3b3JrIHdpdGggc3ltYm9scyBhbmQgc2hvdWxkIGhhdmUgZGV0ZXJtaW5pc3RpYyBwcm9wZXJ0eSBvcmRlciAoVjggYnVnKVxubW9kdWxlLmV4cG9ydHMgPSAhJGFzc2lnbiB8fCByZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgdmFyIEEgPSB7fTtcbiAgdmFyIEIgPSB7fTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBTID0gU3ltYm9sKCk7XG4gIHZhciBLID0gJ2FiY2RlZmdoaWprbG1ub3BxcnN0JztcbiAgQVtTXSA9IDc7XG4gIEsuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGspIHsgQltrXSA9IGs7IH0pO1xuICByZXR1cm4gJGFzc2lnbih7fSwgQSlbU10gIT0gNyB8fCBPYmplY3Qua2V5cygkYXNzaWduKHt9LCBCKSkuam9pbignJykgIT0gSztcbn0pID8gZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgc291cmNlKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgdmFyIFQgPSB0b09iamVjdCh0YXJnZXQpO1xuICB2YXIgYUxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gIHZhciBpbmRleCA9IDE7XG4gIHZhciBnZXRTeW1ib2xzID0gZ09QUy5mO1xuICB2YXIgaXNFbnVtID0gcElFLmY7XG4gIHdoaWxlIChhTGVuID4gaW5kZXgpIHtcbiAgICB2YXIgUyA9IElPYmplY3QoYXJndW1lbnRzW2luZGV4KytdKTtcbiAgICB2YXIga2V5cyA9IGdldFN5bWJvbHMgPyBnZXRLZXlzKFMpLmNvbmNhdChnZXRTeW1ib2xzKFMpKSA6IGdldEtleXMoUyk7XG4gICAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICAgIHZhciBqID0gMDtcbiAgICB2YXIga2V5O1xuICAgIHdoaWxlIChsZW5ndGggPiBqKSBpZiAoaXNFbnVtLmNhbGwoUywga2V5ID0ga2V5c1tqKytdKSkgVFtrZXldID0gU1trZXldO1xuICB9IHJldHVybiBUO1xufSA6ICRhc3NpZ247XG4iLCIvLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGRQcyA9IHJlcXVpcmUoJy4vX29iamVjdC1kcHMnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcbnZhciBFbXB0eSA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIGlmcmFtZSBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxudmFyIGNyZWF0ZURpY3QgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIFRocmFzaCwgd2FzdGUgYW5kIHNvZG9teTogSUUgR0MgYnVnXG4gIHZhciBpZnJhbWUgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2lmcmFtZScpO1xuICB2YXIgaSA9IGVudW1CdWdLZXlzLmxlbmd0aDtcbiAgdmFyIGx0ID0gJzwnO1xuICB2YXIgZ3QgPSAnPic7XG4gIHZhciBpZnJhbWVEb2N1bWVudDtcbiAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIHJlcXVpcmUoJy4vX2h0bWwnKS5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICBpZnJhbWUuc3JjID0gJ2phdmFzY3JpcHQ6JzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zY3JpcHQtdXJsXG4gIC8vIGNyZWF0ZURpY3QgPSBpZnJhbWUuY29udGVudFdpbmRvdy5PYmplY3Q7XG4gIC8vIGh0bWwucmVtb3ZlQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lRG9jdW1lbnQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgaWZyYW1lRG9jdW1lbnQub3BlbigpO1xuICBpZnJhbWVEb2N1bWVudC53cml0ZShsdCArICdzY3JpcHQnICsgZ3QgKyAnZG9jdW1lbnQuRj1PYmplY3QnICsgbHQgKyAnL3NjcmlwdCcgKyBndCk7XG4gIGlmcmFtZURvY3VtZW50LmNsb3NlKCk7XG4gIGNyZWF0ZURpY3QgPSBpZnJhbWVEb2N1bWVudC5GO1xuICB3aGlsZSAoaS0tKSBkZWxldGUgY3JlYXRlRGljdFtQUk9UT1RZUEVdW2VudW1CdWdLZXlzW2ldXTtcbiAgcmV0dXJuIGNyZWF0ZURpY3QoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcykge1xuICB2YXIgcmVzdWx0O1xuICBpZiAoTyAhPT0gbnVsbCkge1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBhbk9iamVjdChPKTtcbiAgICByZXN1bHQgPSBuZXcgRW1wdHkoKTtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gbnVsbDtcbiAgICAvLyBhZGQgXCJfX3Byb3RvX19cIiBmb3IgT2JqZWN0LmdldFByb3RvdHlwZU9mIHBvbHlmaWxsXG4gICAgcmVzdWx0W0lFX1BST1RPXSA9IE87XG4gIH0gZWxzZSByZXN1bHQgPSBjcmVhdGVEaWN0KCk7XG4gIHJldHVybiBQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiBkUHMocmVzdWx0LCBQcm9wZXJ0aWVzKTtcbn07XG4iLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBkUCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gZFAoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKSB0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIScpO1xuICBpZiAoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKSBPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBrZXlzID0gZ2V0S2V5cyhQcm9wZXJ0aWVzKTtcbiAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICB2YXIgaSA9IDA7XG4gIHZhciBQO1xuICB3aGlsZSAobGVuZ3RoID4gaSkgZFAuZihPLCBQID0ga2V5c1tpKytdLCBQcm9wZXJ0aWVzW1BdKTtcbiAgcmV0dXJuIE87XG59O1xuIiwidmFyIHBJRSA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKTtcbnZhciBnT1BEID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGdPUEQgOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCkge1xuICBPID0gdG9JT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gZ09QRChPLCBQKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIGlmIChoYXMoTywgUCkpIHJldHVybiBjcmVhdGVEZXNjKCFwSUUuZi5jYWxsKE8sIFApLCBPW1BdKTtcbn07XG4iLCIvLyBmYWxsYmFjayBmb3IgSUUxMSBidWdneSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB3aXRoIGlmcmFtZSBhbmQgd2luZG93XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIGdPUE4gPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmY7XG52YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxudmFyIHdpbmRvd05hbWVzID0gdHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiB3aW5kb3cgJiYgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNcbiAgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh3aW5kb3cpIDogW107XG5cbnZhciBnZXRXaW5kb3dOYW1lcyA9IGZ1bmN0aW9uIChpdCkge1xuICB0cnkge1xuICAgIHJldHVybiBnT1BOKGl0KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB3aW5kb3dOYW1lcy5zbGljZSgpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5mID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCkge1xuICByZXR1cm4gd2luZG93TmFtZXMgJiYgdG9TdHJpbmcuY2FsbChpdCkgPT0gJ1tvYmplY3QgV2luZG93XScgPyBnZXRXaW5kb3dOYW1lcyhpdCkgOiBnT1BOKHRvSU9iamVjdChpdCkpO1xufTtcbiIsIi8vIDE5LjEuMi43IC8gMTUuMi4zLjQgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKS5jb25jYXQoJ2xlbmd0aCcsICdwcm90b3R5cGUnKTtcblxuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhPKSB7XG4gIHJldHVybiAka2V5cyhPLCBoaWRkZW5LZXlzKTtcbn07XG4iLCJleHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuIiwiLy8gMTkuMS4yLjkgLyAxNS4yLjMuMiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xudmFyIE9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gKE8pIHtcbiAgTyA9IHRvT2JqZWN0KE8pO1xuICBpZiAoaGFzKE8sIElFX1BST1RPKSkgcmV0dXJuIE9bSUVfUFJPVE9dO1xuICBpZiAodHlwZW9mIE8uY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBPIGluc3RhbmNlb2YgTy5jb25zdHJ1Y3Rvcikge1xuICAgIHJldHVybiBPLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgfSByZXR1cm4gTyBpbnN0YW5jZW9mIE9iamVjdCA/IE9iamVjdFByb3RvIDogbnVsbDtcbn07XG4iLCJ2YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIGFycmF5SW5kZXhPZiA9IHJlcXVpcmUoJy4vX2FycmF5LWluY2x1ZGVzJykoZmFsc2UpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIG5hbWVzKSB7XG4gIHZhciBPID0gdG9JT2JqZWN0KG9iamVjdCk7XG4gIHZhciBpID0gMDtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIga2V5O1xuICBmb3IgKGtleSBpbiBPKSBpZiAoa2V5ICE9IElFX1BST1RPKSBoYXMoTywga2V5KSAmJiByZXN1bHQucHVzaChrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSBpZiAoaGFzKE8sIGtleSA9IG5hbWVzW2krK10pKSB7XG4gICAgfmFycmF5SW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcmVzdWx0LnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsIi8vIDE5LjEuMi4xNCAvIDE1LjIuMy4xNCBPYmplY3Qua2V5cyhPKVxudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzKE8pIHtcbiAgcmV0dXJuICRrZXlzKE8sIGVudW1CdWdLZXlzKTtcbn07XG4iLCJleHBvcnRzLmYgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiIsIi8vIG1vc3QgT2JqZWN0IG1ldGhvZHMgYnkgRVM2IHNob3VsZCBhY2NlcHQgcHJpbWl0aXZlc1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEtFWSwgZXhlYykge1xuICB2YXIgZm4gPSAoY29yZS5PYmplY3QgfHwge30pW0tFWV0gfHwgT2JqZWN0W0tFWV07XG4gIHZhciBleHAgPSB7fTtcbiAgZXhwW0tFWV0gPSBleGVjKGZuKTtcbiAgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiBmYWlscyhmdW5jdGlvbiAoKSB7IGZuKDEpOyB9KSwgJ09iamVjdCcsIGV4cCk7XG59O1xuIiwidmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciBpc0VudW0gPSByZXF1aXJlKCcuL19vYmplY3QtcGllJykuZjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGlzRW50cmllcykge1xuICByZXR1cm4gZnVuY3Rpb24gKGl0KSB7XG4gICAgdmFyIE8gPSB0b0lPYmplY3QoaXQpO1xuICAgIHZhciBrZXlzID0gZ2V0S2V5cyhPKTtcbiAgICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIga2V5O1xuICAgIHdoaWxlIChsZW5ndGggPiBpKSBpZiAoaXNFbnVtLmNhbGwoTywga2V5ID0ga2V5c1tpKytdKSkge1xuICAgICAgcmVzdWx0LnB1c2goaXNFbnRyaWVzID8gW2tleSwgT1trZXldXSA6IE9ba2V5XSk7XG4gICAgfSByZXR1cm4gcmVzdWx0O1xuICB9O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4geyBlOiBmYWxzZSwgdjogZXhlYygpIH07XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4geyBlOiB0cnVlLCB2OiBlIH07XG4gIH1cbn07XG4iLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gcmVxdWlyZSgnLi9fbmV3LXByb21pc2UtY2FwYWJpbGl0eScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChDLCB4KSB7XG4gIGFuT2JqZWN0KEMpO1xuICBpZiAoaXNPYmplY3QoeCkgJiYgeC5jb25zdHJ1Y3RvciA9PT0gQykgcmV0dXJuIHg7XG4gIHZhciBwcm9taXNlQ2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5LmYoQyk7XG4gIHZhciByZXNvbHZlID0gcHJvbWlzZUNhcGFiaWxpdHkucmVzb2x2ZTtcbiAgcmVzb2x2ZSh4KTtcbiAgcmV0dXJuIHByb21pc2VDYXBhYmlsaXR5LnByb21pc2U7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYml0bWFwLCB2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGU6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlOiB2YWx1ZVxuICB9O1xufTtcbiIsInZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0YXJnZXQsIHNyYywgc2FmZSkge1xuICBmb3IgKHZhciBrZXkgaW4gc3JjKSByZWRlZmluZSh0YXJnZXQsIGtleSwgc3JjW2tleV0sIHNhZmUpO1xuICByZXR1cm4gdGFyZ2V0O1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIFNSQyA9IHJlcXVpcmUoJy4vX3VpZCcpKCdzcmMnKTtcbnZhciBUT19TVFJJTkcgPSAndG9TdHJpbmcnO1xudmFyICR0b1N0cmluZyA9IEZ1bmN0aW9uW1RPX1NUUklOR107XG52YXIgVFBMID0gKCcnICsgJHRvU3RyaW5nKS5zcGxpdChUT19TVFJJTkcpO1xuXG5yZXF1aXJlKCcuL19jb3JlJykuaW5zcGVjdFNvdXJjZSA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gJHRvU3RyaW5nLmNhbGwoaXQpO1xufTtcblxuKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE8sIGtleSwgdmFsLCBzYWZlKSB7XG4gIHZhciBpc0Z1bmN0aW9uID0gdHlwZW9mIHZhbCA9PSAnZnVuY3Rpb24nO1xuICBpZiAoaXNGdW5jdGlvbikgaGFzKHZhbCwgJ25hbWUnKSB8fCBoaWRlKHZhbCwgJ25hbWUnLCBrZXkpO1xuICBpZiAoT1trZXldID09PSB2YWwpIHJldHVybjtcbiAgaWYgKGlzRnVuY3Rpb24pIGhhcyh2YWwsIFNSQykgfHwgaGlkZSh2YWwsIFNSQywgT1trZXldID8gJycgKyBPW2tleV0gOiBUUEwuam9pbihTdHJpbmcoa2V5KSkpO1xuICBpZiAoTyA9PT0gZ2xvYmFsKSB7XG4gICAgT1trZXldID0gdmFsO1xuICB9IGVsc2UgaWYgKCFzYWZlKSB7XG4gICAgZGVsZXRlIE9ba2V5XTtcbiAgICBoaWRlKE8sIGtleSwgdmFsKTtcbiAgfSBlbHNlIGlmIChPW2tleV0pIHtcbiAgICBPW2tleV0gPSB2YWw7XG4gIH0gZWxzZSB7XG4gICAgaGlkZShPLCBrZXksIHZhbCk7XG4gIH1cbi8vIGFkZCBmYWtlIEZ1bmN0aW9uI3RvU3RyaW5nIGZvciBjb3JyZWN0IHdvcmsgd3JhcHBlZCBtZXRob2RzIC8gY29uc3RydWN0b3JzIHdpdGggbWV0aG9kcyBsaWtlIExvRGFzaCBpc05hdGl2ZVxufSkoRnVuY3Rpb24ucHJvdG90eXBlLCBUT19TVFJJTkcsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyAmJiB0aGlzW1NSQ10gfHwgJHRvU3RyaW5nLmNhbGwodGhpcyk7XG59KTtcbiIsIi8vIFdvcmtzIHdpdGggX19wcm90b19fIG9ubHkuIE9sZCB2OCBjYW4ndCB3b3JrIHdpdGggbnVsbCBwcm90byBvYmplY3RzLlxuLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgY2hlY2sgPSBmdW5jdGlvbiAoTywgcHJvdG8pIHtcbiAgYW5PYmplY3QoTyk7XG4gIGlmICghaXNPYmplY3QocHJvdG8pICYmIHByb3RvICE9PSBudWxsKSB0aHJvdyBUeXBlRXJyb3IocHJvdG8gKyBcIjogY2FuJ3Qgc2V0IGFzIHByb3RvdHlwZSFcIik7XG59O1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8ICgnX19wcm90b19fJyBpbiB7fSA/IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICBmdW5jdGlvbiAodGVzdCwgYnVnZ3ksIHNldCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgc2V0ID0gcmVxdWlyZSgnLi9fY3R4JykoRnVuY3Rpb24uY2FsbCwgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKS5mKE9iamVjdC5wcm90b3R5cGUsICdfX3Byb3RvX18nKS5zZXQsIDIpO1xuICAgICAgICBzZXQodGVzdCwgW10pO1xuICAgICAgICBidWdneSA9ICEodGVzdCBpbnN0YW5jZW9mIEFycmF5KTtcbiAgICAgIH0gY2F0Y2ggKGUpIHsgYnVnZ3kgPSB0cnVlOyB9XG4gICAgICByZXR1cm4gZnVuY3Rpb24gc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pIHtcbiAgICAgICAgY2hlY2soTywgcHJvdG8pO1xuICAgICAgICBpZiAoYnVnZ3kpIE8uX19wcm90b19fID0gcHJvdG87XG4gICAgICAgIGVsc2Ugc2V0KE8sIHByb3RvKTtcbiAgICAgICAgcmV0dXJuIE87XG4gICAgICB9O1xuICAgIH0oe30sIGZhbHNlKSA6IHVuZGVmaW5lZCksXG4gIGNoZWNrOiBjaGVja1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcbnZhciBTUEVDSUVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoS0VZKSB7XG4gIHZhciBDID0gZ2xvYmFsW0tFWV07XG4gIGlmIChERVNDUklQVE9SUyAmJiBDICYmICFDW1NQRUNJRVNdKSBkUC5mKEMsIFNQRUNJRVMsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9XG4gIH0pO1xufTtcbiIsInZhciBkZWYgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgdGFnLCBzdGF0KSB7XG4gIGlmIChpdCAmJiAhaGFzKGl0ID0gc3RhdCA/IGl0IDogaXQucHJvdG90eXBlLCBUQUcpKSBkZWYoaXQsIFRBRywgeyBjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiB0YWcgfSk7XG59O1xuIiwidmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCdrZXlzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIHNoYXJlZFtrZXldIHx8IChzaGFyZWRba2V5XSA9IHVpZChrZXkpKTtcbn07XG4iLCJ2YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJztcbnZhciBzdG9yZSA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcblxuKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB2YWx1ZSAhPT0gdW5kZWZpbmVkID8gdmFsdWUgOiB7fSk7XG59KSgndmVyc2lvbnMnLCBbXSkucHVzaCh7XG4gIHZlcnNpb246IGNvcmUudmVyc2lvbixcbiAgbW9kZTogcmVxdWlyZSgnLi9fbGlicmFyeScpID8gJ3B1cmUnIDogJ2dsb2JhbCcsXG4gIGNvcHlyaWdodDogJ8KpIDIwMTggRGVuaXMgUHVzaGthcmV2ICh6bG9pcm9jay5ydSknXG59KTtcbiIsIi8vIDcuMy4yMCBTcGVjaWVzQ29uc3RydWN0b3IoTywgZGVmYXVsdENvbnN0cnVjdG9yKVxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xudmFyIFNQRUNJRVMgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywgRCkge1xuICB2YXIgQyA9IGFuT2JqZWN0KE8pLmNvbnN0cnVjdG9yO1xuICB2YXIgUztcbiAgcmV0dXJuIEMgPT09IHVuZGVmaW5lZCB8fCAoUyA9IGFuT2JqZWN0KEMpW1NQRUNJRVNdKSA9PSB1bmRlZmluZWQgPyBEIDogYUZ1bmN0aW9uKFMpO1xufTtcbiIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbi8vIHRydWUgIC0+IFN0cmluZyNhdFxuLy8gZmFsc2UgLT4gU3RyaW5nI2NvZGVQb2ludEF0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChUT19TVFJJTkcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0aGF0LCBwb3MpIHtcbiAgICB2YXIgcyA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKTtcbiAgICB2YXIgaSA9IHRvSW50ZWdlcihwb3MpO1xuICAgIHZhciBsID0gcy5sZW5ndGg7XG4gICAgdmFyIGEsIGI7XG4gICAgaWYgKGkgPCAwIHx8IGkgPj0gbCkgcmV0dXJuIFRPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgIGEgPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgcmV0dXJuIGEgPCAweGQ4MDAgfHwgYSA+IDB4ZGJmZiB8fCBpICsgMSA9PT0gbCB8fCAoYiA9IHMuY2hhckNvZGVBdChpICsgMSkpIDwgMHhkYzAwIHx8IGIgPiAweGRmZmZcbiAgICAgID8gVE9fU1RSSU5HID8gcy5jaGFyQXQoaSkgOiBhXG4gICAgICA6IFRPX1NUUklORyA/IHMuc2xpY2UoaSwgaSArIDIpIDogKGEgLSAweGQ4MDAgPDwgMTApICsgKGIgLSAweGRjMDApICsgMHgxMDAwMDtcbiAgfTtcbn07XG4iLCJ2YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgaW52b2tlID0gcmVxdWlyZSgnLi9faW52b2tlJyk7XG52YXIgaHRtbCA9IHJlcXVpcmUoJy4vX2h0bWwnKTtcbnZhciBjZWwgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgcHJvY2VzcyA9IGdsb2JhbC5wcm9jZXNzO1xudmFyIHNldFRhc2sgPSBnbG9iYWwuc2V0SW1tZWRpYXRlO1xudmFyIGNsZWFyVGFzayA9IGdsb2JhbC5jbGVhckltbWVkaWF0ZTtcbnZhciBNZXNzYWdlQ2hhbm5lbCA9IGdsb2JhbC5NZXNzYWdlQ2hhbm5lbDtcbnZhciBEaXNwYXRjaCA9IGdsb2JhbC5EaXNwYXRjaDtcbnZhciBjb3VudGVyID0gMDtcbnZhciBxdWV1ZSA9IHt9O1xudmFyIE9OUkVBRFlTVEFURUNIQU5HRSA9ICdvbnJlYWR5c3RhdGVjaGFuZ2UnO1xudmFyIGRlZmVyLCBjaGFubmVsLCBwb3J0O1xudmFyIHJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGlkID0gK3RoaXM7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbiAgaWYgKHF1ZXVlLmhhc093blByb3BlcnR5KGlkKSkge1xuICAgIHZhciBmbiA9IHF1ZXVlW2lkXTtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICAgIGZuKCk7XG4gIH1cbn07XG52YXIgbGlzdGVuZXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgcnVuLmNhbGwoZXZlbnQuZGF0YSk7XG59O1xuLy8gTm9kZS5qcyAwLjkrICYgSUUxMCsgaGFzIHNldEltbWVkaWF0ZSwgb3RoZXJ3aXNlOlxuaWYgKCFzZXRUYXNrIHx8ICFjbGVhclRhc2spIHtcbiAgc2V0VGFzayA9IGZ1bmN0aW9uIHNldEltbWVkaWF0ZShmbikge1xuICAgIHZhciBhcmdzID0gW107XG4gICAgdmFyIGkgPSAxO1xuICAgIHdoaWxlIChhcmd1bWVudHMubGVuZ3RoID4gaSkgYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcbiAgICBxdWV1ZVsrK2NvdW50ZXJdID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gICAgICBpbnZva2UodHlwZW9mIGZuID09ICdmdW5jdGlvbicgPyBmbiA6IEZ1bmN0aW9uKGZuKSwgYXJncyk7XG4gICAgfTtcbiAgICBkZWZlcihjb3VudGVyKTtcbiAgICByZXR1cm4gY291bnRlcjtcbiAgfTtcbiAgY2xlYXJUYXNrID0gZnVuY3Rpb24gY2xlYXJJbW1lZGlhdGUoaWQpIHtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICB9O1xuICAvLyBOb2RlLmpzIDAuOC1cbiAgaWYgKHJlcXVpcmUoJy4vX2NvZicpKHByb2Nlc3MpID09ICdwcm9jZXNzJykge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGN0eChydW4sIGlkLCAxKSk7XG4gICAgfTtcbiAgLy8gU3BoZXJlIChKUyBnYW1lIGVuZ2luZSkgRGlzcGF0Y2ggQVBJXG4gIH0gZWxzZSBpZiAoRGlzcGF0Y2ggJiYgRGlzcGF0Y2gubm93KSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIERpc3BhdGNoLm5vdyhjdHgocnVuLCBpZCwgMSkpO1xuICAgIH07XG4gIC8vIEJyb3dzZXJzIHdpdGggTWVzc2FnZUNoYW5uZWwsIGluY2x1ZGVzIFdlYldvcmtlcnNcbiAgfSBlbHNlIGlmIChNZXNzYWdlQ2hhbm5lbCkge1xuICAgIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgICBwb3J0ID0gY2hhbm5lbC5wb3J0MjtcbiAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGxpc3RlbmVyO1xuICAgIGRlZmVyID0gY3R4KHBvcnQucG9zdE1lc3NhZ2UsIHBvcnQsIDEpO1xuICAvLyBCcm93c2VycyB3aXRoIHBvc3RNZXNzYWdlLCBza2lwIFdlYldvcmtlcnNcbiAgLy8gSUU4IGhhcyBwb3N0TWVzc2FnZSwgYnV0IGl0J3Mgc3luYyAmIHR5cGVvZiBpdHMgcG9zdE1lc3NhZ2UgaXMgJ29iamVjdCdcbiAgfSBlbHNlIGlmIChnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lciAmJiB0eXBlb2YgcG9zdE1lc3NhZ2UgPT0gJ2Z1bmN0aW9uJyAmJiAhZ2xvYmFsLmltcG9ydFNjcmlwdHMpIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKGlkICsgJycsICcqJyk7XG4gICAgfTtcbiAgICBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGxpc3RlbmVyLCBmYWxzZSk7XG4gIC8vIElFOC1cbiAgfSBlbHNlIGlmIChPTlJFQURZU1RBVEVDSEFOR0UgaW4gY2VsKCdzY3JpcHQnKSkge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBodG1sLmFwcGVuZENoaWxkKGNlbCgnc2NyaXB0JykpW09OUkVBRFlTVEFURUNIQU5HRV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGh0bWwucmVtb3ZlQ2hpbGQodGhpcyk7XG4gICAgICAgIHJ1bi5jYWxsKGlkKTtcbiAgICAgIH07XG4gICAgfTtcbiAgLy8gUmVzdCBvbGQgYnJvd3NlcnNcbiAgfSBlbHNlIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgc2V0VGltZW91dChjdHgocnVuLCBpZCwgMSksIDApO1xuICAgIH07XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IHNldFRhc2ssXG4gIGNsZWFyOiBjbGVhclRhc2tcbn07XG4iLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIG1heCA9IE1hdGgubWF4O1xudmFyIG1pbiA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5kZXgsIGxlbmd0aCkge1xuICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbmRleCA8IDAgPyBtYXgoaW5kZXggKyBsZW5ndGgsIDApIDogbWluKGluZGV4LCBsZW5ndGgpO1xufTtcbiIsIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgPSBNYXRoLmNlaWw7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59O1xuIiwiLy8gdG8gaW5kZXhlZCBvYmplY3QsIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIElPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcbiIsIi8vIDcuMS4xNSBUb0xlbmd0aFxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuIiwiLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG4iLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgUykge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYgKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICh0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG4iLCJ2YXIgaWQgPSAwO1xudmFyIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBuYXZpZ2F0b3IgPSBnbG9iYWwubmF2aWdhdG9yO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5hdmlnYXRvciAmJiBuYXZpZ2F0b3IudXNlckFnZW50IHx8ICcnO1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgVFlQRSkge1xuICBpZiAoIWlzT2JqZWN0KGl0KSB8fCBpdC5fdCAhPT0gVFlQRSkgdGhyb3cgVHlwZUVycm9yKCdJbmNvbXBhdGlibGUgcmVjZWl2ZXIsICcgKyBUWVBFICsgJyByZXF1aXJlZCEnKTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIExJQlJBUlkgPSByZXF1aXJlKCcuL19saWJyYXJ5Jyk7XG52YXIgd2tzRXh0ID0gcmVxdWlyZSgnLi9fd2tzLWV4dCcpO1xudmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgdmFyICRTeW1ib2wgPSBjb3JlLlN5bWJvbCB8fCAoY29yZS5TeW1ib2wgPSBMSUJSQVJZID8ge30gOiBnbG9iYWwuU3ltYm9sIHx8IHt9KTtcbiAgaWYgKG5hbWUuY2hhckF0KDApICE9ICdfJyAmJiAhKG5hbWUgaW4gJFN5bWJvbCkpIGRlZmluZVByb3BlcnR5KCRTeW1ib2wsIG5hbWUsIHsgdmFsdWU6IHdrc0V4dC5mKG5hbWUpIH0pO1xufTtcbiIsImV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX3drcycpO1xuIiwidmFyIHN0b3JlID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ3drcycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xudmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLlN5bWJvbDtcbnZhciBVU0VfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xuXG52YXIgJGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPVxuICAgIFVTRV9TWU1CT0wgJiYgU3ltYm9sW25hbWVdIHx8IChVU0VfU1lNQk9MID8gU3ltYm9sIDogdWlkKSgnU3ltYm9sLicgKyBuYW1lKSk7XG59O1xuXG4kZXhwb3J0cy5zdG9yZSA9IHN0b3JlO1xuIiwidmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL19jbGFzc29mJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmdldEl0ZXJhdG9yTWV0aG9kID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCAhPSB1bmRlZmluZWQpIHJldHVybiBpdFtJVEVSQVRPUl1cbiAgICB8fCBpdFsnQEBpdGVyYXRvciddXG4gICAgfHwgSXRlcmF0b3JzW2NsYXNzb2YoaXQpXTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4vX2l0ZXItY2FsbCcpO1xudmFyIGlzQXJyYXlJdGVyID0gcmVxdWlyZSgnLi9faXMtYXJyYXktaXRlcicpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgY3JlYXRlUHJvcGVydHkgPSByZXF1aXJlKCcuL19jcmVhdGUtcHJvcGVydHknKTtcbnZhciBnZXRJdGVyRm4gPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFyZXF1aXJlKCcuL19pdGVyLWRldGVjdCcpKGZ1bmN0aW9uIChpdGVyKSB7IEFycmF5LmZyb20oaXRlcik7IH0pLCAnQXJyYXknLCB7XG4gIC8vIDIyLjEuMi4xIEFycmF5LmZyb20oYXJyYXlMaWtlLCBtYXBmbiA9IHVuZGVmaW5lZCwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbiAgZnJvbTogZnVuY3Rpb24gZnJvbShhcnJheUxpa2UgLyogLCBtYXBmbiA9IHVuZGVmaW5lZCwgdGhpc0FyZyA9IHVuZGVmaW5lZCAqLykge1xuICAgIHZhciBPID0gdG9PYmplY3QoYXJyYXlMaWtlKTtcbiAgICB2YXIgQyA9IHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgPyB0aGlzIDogQXJyYXk7XG4gICAgdmFyIGFMZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIHZhciBtYXBmbiA9IGFMZW4gPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkO1xuICAgIHZhciBtYXBwaW5nID0gbWFwZm4gIT09IHVuZGVmaW5lZDtcbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIHZhciBpdGVyRm4gPSBnZXRJdGVyRm4oTyk7XG4gICAgdmFyIGxlbmd0aCwgcmVzdWx0LCBzdGVwLCBpdGVyYXRvcjtcbiAgICBpZiAobWFwcGluZykgbWFwZm4gPSBjdHgobWFwZm4sIGFMZW4gPiAyID8gYXJndW1lbnRzWzJdIDogdW5kZWZpbmVkLCAyKTtcbiAgICAvLyBpZiBvYmplY3QgaXNuJ3QgaXRlcmFibGUgb3IgaXQncyBhcnJheSB3aXRoIGRlZmF1bHQgaXRlcmF0b3IgLSB1c2Ugc2ltcGxlIGNhc2VcbiAgICBpZiAoaXRlckZuICE9IHVuZGVmaW5lZCAmJiAhKEMgPT0gQXJyYXkgJiYgaXNBcnJheUl0ZXIoaXRlckZuKSkpIHtcbiAgICAgIGZvciAoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChPKSwgcmVzdWx0ID0gbmV3IEMoKTsgIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOyBpbmRleCsrKSB7XG4gICAgICAgIGNyZWF0ZVByb3BlcnR5KHJlc3VsdCwgaW5kZXgsIG1hcHBpbmcgPyBjYWxsKGl0ZXJhdG9yLCBtYXBmbiwgW3N0ZXAudmFsdWUsIGluZGV4XSwgdHJ1ZSkgOiBzdGVwLnZhbHVlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgICAgZm9yIChyZXN1bHQgPSBuZXcgQyhsZW5ndGgpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuICAgICAgICBjcmVhdGVQcm9wZXJ0eShyZXN1bHQsIGluZGV4LCBtYXBwaW5nID8gbWFwZm4oT1tpbmRleF0sIGluZGV4KSA6IE9baW5kZXhdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmVzdWx0Lmxlbmd0aCA9IGluZGV4O1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuL19hZGQtdG8tdW5zY29wYWJsZXMnKTtcbnZhciBzdGVwID0gcmVxdWlyZSgnLi9faXRlci1zdGVwJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xuXG4vLyAyMi4xLjMuNCBBcnJheS5wcm90b3R5cGUuZW50cmllcygpXG4vLyAyMi4xLjMuMTMgQXJyYXkucHJvdG90eXBlLmtleXMoKVxuLy8gMjIuMS4zLjI5IEFycmF5LnByb3RvdHlwZS52YWx1ZXMoKVxuLy8gMjIuMS4zLjMwIEFycmF5LnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoQXJyYXksICdBcnJheScsIGZ1bmN0aW9uIChpdGVyYXRlZCwga2luZCkge1xuICB0aGlzLl90ID0gdG9JT2JqZWN0KGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4gIHRoaXMuX2sgPSBraW5kOyAgICAgICAgICAgICAgICAvLyBraW5kXG4vLyAyMi4xLjUuMi4xICVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uICgpIHtcbiAgdmFyIE8gPSB0aGlzLl90O1xuICB2YXIga2luZCA9IHRoaXMuX2s7XG4gIHZhciBpbmRleCA9IHRoaXMuX2krKztcbiAgaWYgKCFPIHx8IGluZGV4ID49IE8ubGVuZ3RoKSB7XG4gICAgdGhpcy5fdCA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc3RlcCgxKTtcbiAgfVxuICBpZiAoa2luZCA9PSAna2V5cycpIHJldHVybiBzdGVwKDAsIGluZGV4KTtcbiAgaWYgKGtpbmQgPT0gJ3ZhbHVlcycpIHJldHVybiBzdGVwKDAsIE9baW5kZXhdKTtcbiAgcmV0dXJuIHN0ZXAoMCwgW2luZGV4LCBPW2luZGV4XV0pO1xufSwgJ3ZhbHVlcycpO1xuXG4vLyBhcmd1bWVudHNMaXN0W0BAaXRlcmF0b3JdIGlzICVBcnJheVByb3RvX3ZhbHVlcyUgKDkuNC40LjYsIDkuNC40LjcpXG5JdGVyYXRvcnMuQXJndW1lbnRzID0gSXRlcmF0b3JzLkFycmF5O1xuXG5hZGRUb1Vuc2NvcGFibGVzKCdrZXlzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCd2YWx1ZXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ2VudHJpZXMnKTtcbiIsInZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgRlByb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlO1xudmFyIG5hbWVSRSA9IC9eXFxzKmZ1bmN0aW9uIChbXiAoXSopLztcbnZhciBOQU1FID0gJ25hbWUnO1xuXG4vLyAxOS4yLjQuMiBuYW1lXG5OQU1FIGluIEZQcm90byB8fCByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmIGRQKEZQcm90bywgTkFNRSwge1xuICBjb25maWd1cmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gKCcnICsgdGhpcykubWF0Y2gobmFtZVJFKVsxXTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBzdHJvbmcgPSByZXF1aXJlKCcuL19jb2xsZWN0aW9uLXN0cm9uZycpO1xudmFyIHZhbGlkYXRlID0gcmVxdWlyZSgnLi9fdmFsaWRhdGUtY29sbGVjdGlvbicpO1xudmFyIE1BUCA9ICdNYXAnO1xuXG4vLyAyMy4xIE1hcCBPYmplY3RzXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvbGxlY3Rpb24nKShNQVAsIGZ1bmN0aW9uIChnZXQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIE1hcCgpIHsgcmV0dXJuIGdldCh0aGlzLCBhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCk7IH07XG59LCB7XG4gIC8vIDIzLjEuMy42IE1hcC5wcm90b3R5cGUuZ2V0KGtleSlcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoa2V5KSB7XG4gICAgdmFyIGVudHJ5ID0gc3Ryb25nLmdldEVudHJ5KHZhbGlkYXRlKHRoaXMsIE1BUCksIGtleSk7XG4gICAgcmV0dXJuIGVudHJ5ICYmIGVudHJ5LnY7XG4gIH0sXG4gIC8vIDIzLjEuMy45IE1hcC5wcm90b3R5cGUuc2V0KGtleSwgdmFsdWUpXG4gIHNldDogZnVuY3Rpb24gc2V0KGtleSwgdmFsdWUpIHtcbiAgICByZXR1cm4gc3Ryb25nLmRlZih2YWxpZGF0ZSh0aGlzLCBNQVApLCBrZXkgPT09IDAgPyAwIDoga2V5LCB2YWx1ZSk7XG4gIH1cbn0sIHN0cm9uZywgdHJ1ZSk7XG4iLCIvLyAxOS4xLjMuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYsICdPYmplY3QnLCB7IGFzc2lnbjogcmVxdWlyZSgnLi9fb2JqZWN0LWFzc2lnbicpIH0pO1xuIiwiLy8gMTkuMS4yLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgna2V5cycsIGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGtleXMoaXQpIHtcbiAgICByZXR1cm4gJGtleXModG9PYmplY3QoaXQpKTtcbiAgfTtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgPSByZXF1aXJlKCcuL19saWJyYXJ5Jyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG52YXIgYW5JbnN0YW5jZSA9IHJlcXVpcmUoJy4vX2FuLWluc3RhbmNlJyk7XG52YXIgZm9yT2YgPSByZXF1aXJlKCcuL19mb3Itb2YnKTtcbnZhciBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuL19zcGVjaWVzLWNvbnN0cnVjdG9yJyk7XG52YXIgdGFzayA9IHJlcXVpcmUoJy4vX3Rhc2snKS5zZXQ7XG52YXIgbWljcm90YXNrID0gcmVxdWlyZSgnLi9fbWljcm90YXNrJykoKTtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eU1vZHVsZSA9IHJlcXVpcmUoJy4vX25ldy1wcm9taXNlLWNhcGFiaWxpdHknKTtcbnZhciBwZXJmb3JtID0gcmVxdWlyZSgnLi9fcGVyZm9ybScpO1xudmFyIHVzZXJBZ2VudCA9IHJlcXVpcmUoJy4vX3VzZXItYWdlbnQnKTtcbnZhciBwcm9taXNlUmVzb2x2ZSA9IHJlcXVpcmUoJy4vX3Byb21pc2UtcmVzb2x2ZScpO1xudmFyIFBST01JU0UgPSAnUHJvbWlzZSc7XG52YXIgVHlwZUVycm9yID0gZ2xvYmFsLlR5cGVFcnJvcjtcbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgdmVyc2lvbnMgPSBwcm9jZXNzICYmIHByb2Nlc3MudmVyc2lvbnM7XG52YXIgdjggPSB2ZXJzaW9ucyAmJiB2ZXJzaW9ucy52OCB8fCAnJztcbnZhciAkUHJvbWlzZSA9IGdsb2JhbFtQUk9NSVNFXTtcbnZhciBpc05vZGUgPSBjbGFzc29mKHByb2Nlc3MpID09ICdwcm9jZXNzJztcbnZhciBlbXB0eSA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcbnZhciBJbnRlcm5hbCwgbmV3R2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5LCBPd25Qcm9taXNlQ2FwYWJpbGl0eSwgV3JhcHBlcjtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IG5ld0dlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlLmY7XG5cbnZhciBVU0VfTkFUSVZFID0gISFmdW5jdGlvbiAoKSB7XG4gIHRyeSB7XG4gICAgLy8gY29ycmVjdCBzdWJjbGFzc2luZyB3aXRoIEBAc3BlY2llcyBzdXBwb3J0XG4gICAgdmFyIHByb21pc2UgPSAkUHJvbWlzZS5yZXNvbHZlKDEpO1xuICAgIHZhciBGYWtlUHJvbWlzZSA9IChwcm9taXNlLmNvbnN0cnVjdG9yID0ge30pW3JlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyldID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgICAgIGV4ZWMoZW1wdHksIGVtcHR5KTtcbiAgICB9O1xuICAgIC8vIHVuaGFuZGxlZCByZWplY3Rpb25zIHRyYWNraW5nIHN1cHBvcnQsIE5vZGVKUyBQcm9taXNlIHdpdGhvdXQgaXQgZmFpbHMgQEBzcGVjaWVzIHRlc3RcbiAgICByZXR1cm4gKGlzTm9kZSB8fCB0eXBlb2YgUHJvbWlzZVJlamVjdGlvbkV2ZW50ID09ICdmdW5jdGlvbicpXG4gICAgICAmJiBwcm9taXNlLnRoZW4oZW1wdHkpIGluc3RhbmNlb2YgRmFrZVByb21pc2VcbiAgICAgIC8vIHY4IDYuNiAoTm9kZSAxMCBhbmQgQ2hyb21lIDY2KSBoYXZlIGEgYnVnIHdpdGggcmVzb2x2aW5nIGN1c3RvbSB0aGVuYWJsZXNcbiAgICAgIC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTgzMDU2NVxuICAgICAgLy8gd2UgY2FuJ3QgZGV0ZWN0IGl0IHN5bmNocm9ub3VzbHksIHNvIGp1c3QgY2hlY2sgdmVyc2lvbnNcbiAgICAgICYmIHY4LmluZGV4T2YoJzYuNicpICE9PSAwXG4gICAgICAmJiB1c2VyQWdlbnQuaW5kZXhPZignQ2hyb21lLzY2JykgPT09IC0xO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbn0oKTtcblxuLy8gaGVscGVyc1xudmFyIGlzVGhlbmFibGUgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIHRoZW47XG4gIHJldHVybiBpc09iamVjdChpdCkgJiYgdHlwZW9mICh0aGVuID0gaXQudGhlbikgPT0gJ2Z1bmN0aW9uJyA/IHRoZW4gOiBmYWxzZTtcbn07XG52YXIgbm90aWZ5ID0gZnVuY3Rpb24gKHByb21pc2UsIGlzUmVqZWN0KSB7XG4gIGlmIChwcm9taXNlLl9uKSByZXR1cm47XG4gIHByb21pc2UuX24gPSB0cnVlO1xuICB2YXIgY2hhaW4gPSBwcm9taXNlLl9jO1xuICBtaWNyb3Rhc2soZnVuY3Rpb24gKCkge1xuICAgIHZhciB2YWx1ZSA9IHByb21pc2UuX3Y7XG4gICAgdmFyIG9rID0gcHJvbWlzZS5fcyA9PSAxO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgcnVuID0gZnVuY3Rpb24gKHJlYWN0aW9uKSB7XG4gICAgICB2YXIgaGFuZGxlciA9IG9rID8gcmVhY3Rpb24ub2sgOiByZWFjdGlvbi5mYWlsO1xuICAgICAgdmFyIHJlc29sdmUgPSByZWFjdGlvbi5yZXNvbHZlO1xuICAgICAgdmFyIHJlamVjdCA9IHJlYWN0aW9uLnJlamVjdDtcbiAgICAgIHZhciBkb21haW4gPSByZWFjdGlvbi5kb21haW47XG4gICAgICB2YXIgcmVzdWx0LCB0aGVuLCBleGl0ZWQ7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoaGFuZGxlcikge1xuICAgICAgICAgIGlmICghb2spIHtcbiAgICAgICAgICAgIGlmIChwcm9taXNlLl9oID09IDIpIG9uSGFuZGxlVW5oYW5kbGVkKHByb21pc2UpO1xuICAgICAgICAgICAgcHJvbWlzZS5faCA9IDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChoYW5kbGVyID09PSB0cnVlKSByZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChkb21haW4pIGRvbWFpbi5lbnRlcigpO1xuICAgICAgICAgICAgcmVzdWx0ID0gaGFuZGxlcih2YWx1ZSk7IC8vIG1heSB0aHJvd1xuICAgICAgICAgICAgaWYgKGRvbWFpbikge1xuICAgICAgICAgICAgICBkb21haW4uZXhpdCgpO1xuICAgICAgICAgICAgICBleGl0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocmVzdWx0ID09PSByZWFjdGlvbi5wcm9taXNlKSB7XG4gICAgICAgICAgICByZWplY3QoVHlwZUVycm9yKCdQcm9taXNlLWNoYWluIGN5Y2xlJykpO1xuICAgICAgICAgIH0gZWxzZSBpZiAodGhlbiA9IGlzVGhlbmFibGUocmVzdWx0KSkge1xuICAgICAgICAgICAgdGhlbi5jYWxsKHJlc3VsdCwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9IGVsc2UgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9IGVsc2UgcmVqZWN0KHZhbHVlKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaWYgKGRvbWFpbiAmJiAhZXhpdGVkKSBkb21haW4uZXhpdCgpO1xuICAgICAgICByZWplY3QoZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB3aGlsZSAoY2hhaW4ubGVuZ3RoID4gaSkgcnVuKGNoYWluW2krK10pOyAvLyB2YXJpYWJsZSBsZW5ndGggLSBjYW4ndCB1c2UgZm9yRWFjaFxuICAgIHByb21pc2UuX2MgPSBbXTtcbiAgICBwcm9taXNlLl9uID0gZmFsc2U7XG4gICAgaWYgKGlzUmVqZWN0ICYmICFwcm9taXNlLl9oKSBvblVuaGFuZGxlZChwcm9taXNlKTtcbiAgfSk7XG59O1xudmFyIG9uVW5oYW5kbGVkID0gZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciB2YWx1ZSA9IHByb21pc2UuX3Y7XG4gICAgdmFyIHVuaGFuZGxlZCA9IGlzVW5oYW5kbGVkKHByb21pc2UpO1xuICAgIHZhciByZXN1bHQsIGhhbmRsZXIsIGNvbnNvbGU7XG4gICAgaWYgKHVuaGFuZGxlZCkge1xuICAgICAgcmVzdWx0ID0gcGVyZm9ybShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChpc05vZGUpIHtcbiAgICAgICAgICBwcm9jZXNzLmVtaXQoJ3VuaGFuZGxlZFJlamVjdGlvbicsIHZhbHVlLCBwcm9taXNlKTtcbiAgICAgICAgfSBlbHNlIGlmIChoYW5kbGVyID0gZ2xvYmFsLm9udW5oYW5kbGVkcmVqZWN0aW9uKSB7XG4gICAgICAgICAgaGFuZGxlcih7IHByb21pc2U6IHByb21pc2UsIHJlYXNvbjogdmFsdWUgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoKGNvbnNvbGUgPSBnbG9iYWwuY29uc29sZSkgJiYgY29uc29sZS5lcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuaGFuZGxlZCBwcm9taXNlIHJlamVjdGlvbicsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICAvLyBCcm93c2VycyBzaG91bGQgbm90IHRyaWdnZXIgYHJlamVjdGlvbkhhbmRsZWRgIGV2ZW50IGlmIGl0IHdhcyBoYW5kbGVkIGhlcmUsIE5vZGVKUyAtIHNob3VsZFxuICAgICAgcHJvbWlzZS5faCA9IGlzTm9kZSB8fCBpc1VuaGFuZGxlZChwcm9taXNlKSA/IDIgOiAxO1xuICAgIH0gcHJvbWlzZS5fYSA9IHVuZGVmaW5lZDtcbiAgICBpZiAodW5oYW5kbGVkICYmIHJlc3VsdC5lKSB0aHJvdyByZXN1bHQudjtcbiAgfSk7XG59O1xudmFyIGlzVW5oYW5kbGVkID0gZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgcmV0dXJuIHByb21pc2UuX2ggIT09IDEgJiYgKHByb21pc2UuX2EgfHwgcHJvbWlzZS5fYykubGVuZ3RoID09PSAwO1xufTtcbnZhciBvbkhhbmRsZVVuaGFuZGxlZCA9IGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gIHRhc2suY2FsbChnbG9iYWwsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaGFuZGxlcjtcbiAgICBpZiAoaXNOb2RlKSB7XG4gICAgICBwcm9jZXNzLmVtaXQoJ3JlamVjdGlvbkhhbmRsZWQnLCBwcm9taXNlKTtcbiAgICB9IGVsc2UgaWYgKGhhbmRsZXIgPSBnbG9iYWwub25yZWplY3Rpb25oYW5kbGVkKSB7XG4gICAgICBoYW5kbGVyKHsgcHJvbWlzZTogcHJvbWlzZSwgcmVhc29uOiBwcm9taXNlLl92IH0pO1xuICAgIH1cbiAgfSk7XG59O1xudmFyICRyZWplY3QgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgdmFyIHByb21pc2UgPSB0aGlzO1xuICBpZiAocHJvbWlzZS5fZCkgcmV0dXJuO1xuICBwcm9taXNlLl9kID0gdHJ1ZTtcbiAgcHJvbWlzZSA9IHByb21pc2UuX3cgfHwgcHJvbWlzZTsgLy8gdW53cmFwXG4gIHByb21pc2UuX3YgPSB2YWx1ZTtcbiAgcHJvbWlzZS5fcyA9IDI7XG4gIGlmICghcHJvbWlzZS5fYSkgcHJvbWlzZS5fYSA9IHByb21pc2UuX2Muc2xpY2UoKTtcbiAgbm90aWZ5KHByb21pc2UsIHRydWUpO1xufTtcbnZhciAkcmVzb2x2ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICB2YXIgcHJvbWlzZSA9IHRoaXM7XG4gIHZhciB0aGVuO1xuICBpZiAocHJvbWlzZS5fZCkgcmV0dXJuO1xuICBwcm9taXNlLl9kID0gdHJ1ZTtcbiAgcHJvbWlzZSA9IHByb21pc2UuX3cgfHwgcHJvbWlzZTsgLy8gdW53cmFwXG4gIHRyeSB7XG4gICAgaWYgKHByb21pc2UgPT09IHZhbHVlKSB0aHJvdyBUeXBlRXJyb3IoXCJQcm9taXNlIGNhbid0IGJlIHJlc29sdmVkIGl0c2VsZlwiKTtcbiAgICBpZiAodGhlbiA9IGlzVGhlbmFibGUodmFsdWUpKSB7XG4gICAgICBtaWNyb3Rhc2soZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgd3JhcHBlciA9IHsgX3c6IHByb21pc2UsIF9kOiBmYWxzZSB9OyAvLyB3cmFwXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhlbi5jYWxsKHZhbHVlLCBjdHgoJHJlc29sdmUsIHdyYXBwZXIsIDEpLCBjdHgoJHJlamVjdCwgd3JhcHBlciwgMSkpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgJHJlamVjdC5jYWxsKHdyYXBwZXIsIGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvbWlzZS5fdiA9IHZhbHVlO1xuICAgICAgcHJvbWlzZS5fcyA9IDE7XG4gICAgICBub3RpZnkocHJvbWlzZSwgZmFsc2UpO1xuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgICRyZWplY3QuY2FsbCh7IF93OiBwcm9taXNlLCBfZDogZmFsc2UgfSwgZSk7IC8vIHdyYXBcbiAgfVxufTtcblxuLy8gY29uc3RydWN0b3IgcG9seWZpbGxcbmlmICghVVNFX05BVElWRSkge1xuICAvLyAyNS40LjMuMSBQcm9taXNlKGV4ZWN1dG9yKVxuICAkUHJvbWlzZSA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3IpIHtcbiAgICBhbkluc3RhbmNlKHRoaXMsICRQcm9taXNlLCBQUk9NSVNFLCAnX2gnKTtcbiAgICBhRnVuY3Rpb24oZXhlY3V0b3IpO1xuICAgIEludGVybmFsLmNhbGwodGhpcyk7XG4gICAgdHJ5IHtcbiAgICAgIGV4ZWN1dG9yKGN0eCgkcmVzb2x2ZSwgdGhpcywgMSksIGN0eCgkcmVqZWN0LCB0aGlzLCAxKSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAkcmVqZWN0LmNhbGwodGhpcywgZXJyKTtcbiAgICB9XG4gIH07XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuICBJbnRlcm5hbCA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3IpIHtcbiAgICB0aGlzLl9jID0gW107ICAgICAgICAgICAgIC8vIDwtIGF3YWl0aW5nIHJlYWN0aW9uc1xuICAgIHRoaXMuX2EgPSB1bmRlZmluZWQ7ICAgICAgLy8gPC0gY2hlY2tlZCBpbiBpc1VuaGFuZGxlZCByZWFjdGlvbnNcbiAgICB0aGlzLl9zID0gMDsgICAgICAgICAgICAgIC8vIDwtIHN0YXRlXG4gICAgdGhpcy5fZCA9IGZhbHNlOyAgICAgICAgICAvLyA8LSBkb25lXG4gICAgdGhpcy5fdiA9IHVuZGVmaW5lZDsgICAgICAvLyA8LSB2YWx1ZVxuICAgIHRoaXMuX2ggPSAwOyAgICAgICAgICAgICAgLy8gPC0gcmVqZWN0aW9uIHN0YXRlLCAwIC0gZGVmYXVsdCwgMSAtIGhhbmRsZWQsIDIgLSB1bmhhbmRsZWRcbiAgICB0aGlzLl9uID0gZmFsc2U7ICAgICAgICAgIC8vIDwtIG5vdGlmeVxuICB9O1xuICBJbnRlcm5hbC5wcm90b3R5cGUgPSByZXF1aXJlKCcuL19yZWRlZmluZS1hbGwnKSgkUHJvbWlzZS5wcm90b3R5cGUsIHtcbiAgICAvLyAyNS40LjUuMyBQcm9taXNlLnByb3RvdHlwZS50aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKVxuICAgIHRoZW46IGZ1bmN0aW9uIHRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpIHtcbiAgICAgIHZhciByZWFjdGlvbiA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHNwZWNpZXNDb25zdHJ1Y3Rvcih0aGlzLCAkUHJvbWlzZSkpO1xuICAgICAgcmVhY3Rpb24ub2sgPSB0eXBlb2Ygb25GdWxmaWxsZWQgPT0gJ2Z1bmN0aW9uJyA/IG9uRnVsZmlsbGVkIDogdHJ1ZTtcbiAgICAgIHJlYWN0aW9uLmZhaWwgPSB0eXBlb2Ygb25SZWplY3RlZCA9PSAnZnVuY3Rpb24nICYmIG9uUmVqZWN0ZWQ7XG4gICAgICByZWFjdGlvbi5kb21haW4gPSBpc05vZGUgPyBwcm9jZXNzLmRvbWFpbiA6IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2MucHVzaChyZWFjdGlvbik7XG4gICAgICBpZiAodGhpcy5fYSkgdGhpcy5fYS5wdXNoKHJlYWN0aW9uKTtcbiAgICAgIGlmICh0aGlzLl9zKSBub3RpZnkodGhpcywgZmFsc2UpO1xuICAgICAgcmV0dXJuIHJlYWN0aW9uLnByb21pc2U7XG4gICAgfSxcbiAgICAvLyAyNS40LjUuMSBQcm9taXNlLnByb3RvdHlwZS5jYXRjaChvblJlamVjdGVkKVxuICAgICdjYXRjaCc6IGZ1bmN0aW9uIChvblJlamVjdGVkKSB7XG4gICAgICByZXR1cm4gdGhpcy50aGVuKHVuZGVmaW5lZCwgb25SZWplY3RlZCk7XG4gICAgfVxuICB9KTtcbiAgT3duUHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHByb21pc2UgPSBuZXcgSW50ZXJuYWwoKTtcbiAgICB0aGlzLnByb21pc2UgPSBwcm9taXNlO1xuICAgIHRoaXMucmVzb2x2ZSA9IGN0eCgkcmVzb2x2ZSwgcHJvbWlzZSwgMSk7XG4gICAgdGhpcy5yZWplY3QgPSBjdHgoJHJlamVjdCwgcHJvbWlzZSwgMSk7XG4gIH07XG4gIG5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlLmYgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uIChDKSB7XG4gICAgcmV0dXJuIEMgPT09ICRQcm9taXNlIHx8IEMgPT09IFdyYXBwZXJcbiAgICAgID8gbmV3IE93blByb21pc2VDYXBhYmlsaXR5KEMpXG4gICAgICA6IG5ld0dlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eShDKTtcbiAgfTtcbn1cblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgeyBQcm9taXNlOiAkUHJvbWlzZSB9KTtcbnJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJykoJFByb21pc2UsIFBST01JU0UpO1xucmVxdWlyZSgnLi9fc2V0LXNwZWNpZXMnKShQUk9NSVNFKTtcbldyYXBwZXIgPSByZXF1aXJlKCcuL19jb3JlJylbUFJPTUlTRV07XG5cbi8vIHN0YXRpY3NcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjUgUHJvbWlzZS5yZWplY3QocilcbiAgcmVqZWN0OiBmdW5jdGlvbiByZWplY3Qocikge1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkodGhpcyk7XG4gICAgdmFyICQkcmVqZWN0ID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgJCRyZWplY3Qocik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIChMSUJSQVJZIHx8ICFVU0VfTkFUSVZFKSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuNiBQcm9taXNlLnJlc29sdmUoeClcbiAgcmVzb2x2ZTogZnVuY3Rpb24gcmVzb2x2ZSh4KSB7XG4gICAgcmV0dXJuIHByb21pc2VSZXNvbHZlKExJQlJBUlkgJiYgdGhpcyA9PT0gV3JhcHBlciA/ICRQcm9taXNlIDogdGhpcywgeCk7XG4gIH1cbn0pO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhKFVTRV9OQVRJVkUgJiYgcmVxdWlyZSgnLi9faXRlci1kZXRlY3QnKShmdW5jdGlvbiAoaXRlcikge1xuICAkUHJvbWlzZS5hbGwoaXRlcilbJ2NhdGNoJ10oZW1wdHkpO1xufSkpLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC4xIFByb21pc2UuYWxsKGl0ZXJhYmxlKVxuICBhbGw6IGZ1bmN0aW9uIGFsbChpdGVyYWJsZSkge1xuICAgIHZhciBDID0gdGhpcztcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KEMpO1xuICAgIHZhciByZXNvbHZlID0gY2FwYWJpbGl0eS5yZXNvbHZlO1xuICAgIHZhciByZWplY3QgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICB2YXIgcmVzdWx0ID0gcGVyZm9ybShmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgdmFsdWVzID0gW107XG4gICAgICB2YXIgaW5kZXggPSAwO1xuICAgICAgdmFyIHJlbWFpbmluZyA9IDE7XG4gICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gICAgICAgIHZhciAkaW5kZXggPSBpbmRleCsrO1xuICAgICAgICB2YXIgYWxyZWFkeUNhbGxlZCA9IGZhbHNlO1xuICAgICAgICB2YWx1ZXMucHVzaCh1bmRlZmluZWQpO1xuICAgICAgICByZW1haW5pbmcrKztcbiAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgaWYgKGFscmVhZHlDYWxsZWQpIHJldHVybjtcbiAgICAgICAgICBhbHJlYWR5Q2FsbGVkID0gdHJ1ZTtcbiAgICAgICAgICB2YWx1ZXNbJGluZGV4XSA9IHZhbHVlO1xuICAgICAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcbiAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgIH0pO1xuICAgIGlmIChyZXN1bHQuZSkgcmVqZWN0KHJlc3VsdC52KTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9LFxuICAvLyAyNS40LjQuNCBQcm9taXNlLnJhY2UoaXRlcmFibGUpXG4gIHJhY2U6IGZ1bmN0aW9uIHJhY2UoaXRlcmFibGUpIHtcbiAgICB2YXIgQyA9IHRoaXM7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKTtcbiAgICB2YXIgcmVqZWN0ID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIHJlc3VsdCA9IHBlcmZvcm0oZnVuY3Rpb24gKCkge1xuICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBmdW5jdGlvbiAocHJvbWlzZSkge1xuICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihjYXBhYmlsaXR5LnJlc29sdmUsIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBpZiAocmVzdWx0LmUpIHJlamVjdChyZXN1bHQudik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG4iLCIvLyAyMS4yLjUuMyBnZXQgUmVnRXhwLnByb3RvdHlwZS5mbGFncygpXG5pZiAocmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAvLi9nLmZsYWdzICE9ICdnJykgcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZihSZWdFeHAucHJvdG90eXBlLCAnZmxhZ3MnLCB7XG4gIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgZ2V0OiByZXF1aXJlKCcuL19mbGFncycpXG59KTtcbiIsIi8vIEBAc3BsaXQgbG9naWNcbnJlcXVpcmUoJy4vX2ZpeC1yZS13a3MnKSgnc3BsaXQnLCAyLCBmdW5jdGlvbiAoZGVmaW5lZCwgU1BMSVQsICRzcGxpdCkge1xuICAndXNlIHN0cmljdCc7XG4gIHZhciBpc1JlZ0V4cCA9IHJlcXVpcmUoJy4vX2lzLXJlZ2V4cCcpO1xuICB2YXIgX3NwbGl0ID0gJHNwbGl0O1xuICB2YXIgJHB1c2ggPSBbXS5wdXNoO1xuICB2YXIgJFNQTElUID0gJ3NwbGl0JztcbiAgdmFyIExFTkdUSCA9ICdsZW5ndGgnO1xuICB2YXIgTEFTVF9JTkRFWCA9ICdsYXN0SW5kZXgnO1xuICBpZiAoXG4gICAgJ2FiYmMnWyRTUExJVF0oLyhiKSovKVsxXSA9PSAnYycgfHxcbiAgICAndGVzdCdbJFNQTElUXSgvKD86KS8sIC0xKVtMRU5HVEhdICE9IDQgfHxcbiAgICAnYWInWyRTUExJVF0oLyg/OmFiKSovKVtMRU5HVEhdICE9IDIgfHxcbiAgICAnLidbJFNQTElUXSgvKC4/KSguPykvKVtMRU5HVEhdICE9IDQgfHxcbiAgICAnLidbJFNQTElUXSgvKCkoKS8pW0xFTkdUSF0gPiAxIHx8XG4gICAgJydbJFNQTElUXSgvLj8vKVtMRU5HVEhdXG4gICkge1xuICAgIHZhciBOUENHID0gLygpPz8vLmV4ZWMoJycpWzFdID09PSB1bmRlZmluZWQ7IC8vIG5vbnBhcnRpY2lwYXRpbmcgY2FwdHVyaW5nIGdyb3VwXG4gICAgLy8gYmFzZWQgb24gZXM1LXNoaW0gaW1wbGVtZW50YXRpb24sIG5lZWQgdG8gcmV3b3JrIGl0XG4gICAgJHNwbGl0ID0gZnVuY3Rpb24gKHNlcGFyYXRvciwgbGltaXQpIHtcbiAgICAgIHZhciBzdHJpbmcgPSBTdHJpbmcodGhpcyk7XG4gICAgICBpZiAoc2VwYXJhdG9yID09PSB1bmRlZmluZWQgJiYgbGltaXQgPT09IDApIHJldHVybiBbXTtcbiAgICAgIC8vIElmIGBzZXBhcmF0b3JgIGlzIG5vdCBhIHJlZ2V4LCB1c2UgbmF0aXZlIHNwbGl0XG4gICAgICBpZiAoIWlzUmVnRXhwKHNlcGFyYXRvcikpIHJldHVybiBfc3BsaXQuY2FsbChzdHJpbmcsIHNlcGFyYXRvciwgbGltaXQpO1xuICAgICAgdmFyIG91dHB1dCA9IFtdO1xuICAgICAgdmFyIGZsYWdzID0gKHNlcGFyYXRvci5pZ25vcmVDYXNlID8gJ2knIDogJycpICtcbiAgICAgICAgICAgICAgICAgIChzZXBhcmF0b3IubXVsdGlsaW5lID8gJ20nIDogJycpICtcbiAgICAgICAgICAgICAgICAgIChzZXBhcmF0b3IudW5pY29kZSA/ICd1JyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAoc2VwYXJhdG9yLnN0aWNreSA/ICd5JyA6ICcnKTtcbiAgICAgIHZhciBsYXN0TGFzdEluZGV4ID0gMDtcbiAgICAgIHZhciBzcGxpdExpbWl0ID0gbGltaXQgPT09IHVuZGVmaW5lZCA/IDQyOTQ5NjcyOTUgOiBsaW1pdCA+Pj4gMDtcbiAgICAgIC8vIE1ha2UgYGdsb2JhbGAgYW5kIGF2b2lkIGBsYXN0SW5kZXhgIGlzc3VlcyBieSB3b3JraW5nIHdpdGggYSBjb3B5XG4gICAgICB2YXIgc2VwYXJhdG9yQ29weSA9IG5ldyBSZWdFeHAoc2VwYXJhdG9yLnNvdXJjZSwgZmxhZ3MgKyAnZycpO1xuICAgICAgdmFyIHNlcGFyYXRvcjIsIG1hdGNoLCBsYXN0SW5kZXgsIGxhc3RMZW5ndGgsIGk7XG4gICAgICAvLyBEb2Vzbid0IG5lZWQgZmxhZ3MgZ3ksIGJ1dCB0aGV5IGRvbid0IGh1cnRcbiAgICAgIGlmICghTlBDRykgc2VwYXJhdG9yMiA9IG5ldyBSZWdFeHAoJ14nICsgc2VwYXJhdG9yQ29weS5zb3VyY2UgKyAnJCg/IVxcXFxzKScsIGZsYWdzKTtcbiAgICAgIHdoaWxlIChtYXRjaCA9IHNlcGFyYXRvckNvcHkuZXhlYyhzdHJpbmcpKSB7XG4gICAgICAgIC8vIGBzZXBhcmF0b3JDb3B5Lmxhc3RJbmRleGAgaXMgbm90IHJlbGlhYmxlIGNyb3NzLWJyb3dzZXJcbiAgICAgICAgbGFzdEluZGV4ID0gbWF0Y2guaW5kZXggKyBtYXRjaFswXVtMRU5HVEhdO1xuICAgICAgICBpZiAobGFzdEluZGV4ID4gbGFzdExhc3RJbmRleCkge1xuICAgICAgICAgIG91dHB1dC5wdXNoKHN0cmluZy5zbGljZShsYXN0TGFzdEluZGV4LCBtYXRjaC5pbmRleCkpO1xuICAgICAgICAgIC8vIEZpeCBicm93c2VycyB3aG9zZSBgZXhlY2AgbWV0aG9kcyBkb24ndCBjb25zaXN0ZW50bHkgcmV0dXJuIGB1bmRlZmluZWRgIGZvciBOUENHXG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWxvb3AtZnVuY1xuICAgICAgICAgIGlmICghTlBDRyAmJiBtYXRjaFtMRU5HVEhdID4gMSkgbWF0Y2hbMF0ucmVwbGFjZShzZXBhcmF0b3IyLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBmb3IgKGkgPSAxOyBpIDwgYXJndW1lbnRzW0xFTkdUSF0gLSAyOyBpKyspIGlmIChhcmd1bWVudHNbaV0gPT09IHVuZGVmaW5lZCkgbWF0Y2hbaV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaWYgKG1hdGNoW0xFTkdUSF0gPiAxICYmIG1hdGNoLmluZGV4IDwgc3RyaW5nW0xFTkdUSF0pICRwdXNoLmFwcGx5KG91dHB1dCwgbWF0Y2guc2xpY2UoMSkpO1xuICAgICAgICAgIGxhc3RMZW5ndGggPSBtYXRjaFswXVtMRU5HVEhdO1xuICAgICAgICAgIGxhc3RMYXN0SW5kZXggPSBsYXN0SW5kZXg7XG4gICAgICAgICAgaWYgKG91dHB1dFtMRU5HVEhdID49IHNwbGl0TGltaXQpIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzZXBhcmF0b3JDb3B5W0xBU1RfSU5ERVhdID09PSBtYXRjaC5pbmRleCkgc2VwYXJhdG9yQ29weVtMQVNUX0lOREVYXSsrOyAvLyBBdm9pZCBhbiBpbmZpbml0ZSBsb29wXG4gICAgICB9XG4gICAgICBpZiAobGFzdExhc3RJbmRleCA9PT0gc3RyaW5nW0xFTkdUSF0pIHtcbiAgICAgICAgaWYgKGxhc3RMZW5ndGggfHwgIXNlcGFyYXRvckNvcHkudGVzdCgnJykpIG91dHB1dC5wdXNoKCcnKTtcbiAgICAgIH0gZWxzZSBvdXRwdXQucHVzaChzdHJpbmcuc2xpY2UobGFzdExhc3RJbmRleCkpO1xuICAgICAgcmV0dXJuIG91dHB1dFtMRU5HVEhdID4gc3BsaXRMaW1pdCA/IG91dHB1dC5zbGljZSgwLCBzcGxpdExpbWl0KSA6IG91dHB1dDtcbiAgICB9O1xuICAvLyBDaGFrcmEsIFY4XG4gIH0gZWxzZSBpZiAoJzAnWyRTUExJVF0odW5kZWZpbmVkLCAwKVtMRU5HVEhdKSB7XG4gICAgJHNwbGl0ID0gZnVuY3Rpb24gKHNlcGFyYXRvciwgbGltaXQpIHtcbiAgICAgIHJldHVybiBzZXBhcmF0b3IgPT09IHVuZGVmaW5lZCAmJiBsaW1pdCA9PT0gMCA/IFtdIDogX3NwbGl0LmNhbGwodGhpcywgc2VwYXJhdG9yLCBsaW1pdCk7XG4gICAgfTtcbiAgfVxuICAvLyAyMS4xLjMuMTcgU3RyaW5nLnByb3RvdHlwZS5zcGxpdChzZXBhcmF0b3IsIGxpbWl0KVxuICByZXR1cm4gW2Z1bmN0aW9uIHNwbGl0KHNlcGFyYXRvciwgbGltaXQpIHtcbiAgICB2YXIgTyA9IGRlZmluZWQodGhpcyk7XG4gICAgdmFyIGZuID0gc2VwYXJhdG9yID09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IHNlcGFyYXRvcltTUExJVF07XG4gICAgcmV0dXJuIGZuICE9PSB1bmRlZmluZWQgPyBmbi5jYWxsKHNlcGFyYXRvciwgTywgbGltaXQpIDogJHNwbGl0LmNhbGwoU3RyaW5nKE8pLCBzZXBhcmF0b3IsIGxpbWl0KTtcbiAgfSwgJHNwbGl0XTtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xucmVxdWlyZSgnLi9lczYucmVnZXhwLmZsYWdzJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciAkZmxhZ3MgPSByZXF1aXJlKCcuL19mbGFncycpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcbnZhciBUT19TVFJJTkcgPSAndG9TdHJpbmcnO1xudmFyICR0b1N0cmluZyA9IC8uL1tUT19TVFJJTkddO1xuXG52YXIgZGVmaW5lID0gZnVuY3Rpb24gKGZuKSB7XG4gIHJlcXVpcmUoJy4vX3JlZGVmaW5lJykoUmVnRXhwLnByb3RvdHlwZSwgVE9fU1RSSU5HLCBmbiwgdHJ1ZSk7XG59O1xuXG4vLyAyMS4yLjUuMTQgUmVnRXhwLnByb3RvdHlwZS50b1N0cmluZygpXG5pZiAocmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7IHJldHVybiAkdG9TdHJpbmcuY2FsbCh7IHNvdXJjZTogJ2EnLCBmbGFnczogJ2InIH0pICE9ICcvYS9iJzsgfSkpIHtcbiAgZGVmaW5lKGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHZhciBSID0gYW5PYmplY3QodGhpcyk7XG4gICAgcmV0dXJuICcvJy5jb25jYXQoUi5zb3VyY2UsICcvJyxcbiAgICAgICdmbGFncycgaW4gUiA/IFIuZmxhZ3MgOiAhREVTQ1JJUFRPUlMgJiYgUiBpbnN0YW5jZW9mIFJlZ0V4cCA/ICRmbGFncy5jYWxsKFIpIDogdW5kZWZpbmVkKTtcbiAgfSk7XG4vLyBGRjQ0LSBSZWdFeHAjdG9TdHJpbmcgaGFzIGEgd3JvbmcgbmFtZVxufSBlbHNlIGlmICgkdG9TdHJpbmcubmFtZSAhPSBUT19TVFJJTkcpIHtcbiAgZGVmaW5lKGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiAkdG9TdHJpbmcuY2FsbCh0aGlzKTtcbiAgfSk7XG59XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJGF0ID0gcmVxdWlyZSgnLi9fc3RyaW5nLWF0JykodHJ1ZSk7XG5cbi8vIDIxLjEuMy4yNyBTdHJpbmcucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoU3RyaW5nLCAnU3RyaW5nJywgZnVuY3Rpb24gKGl0ZXJhdGVkKSB7XG4gIHRoaXMuX3QgPSBTdHJpbmcoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbi8vIDIxLjEuNS4yLjEgJVN0cmluZ0l0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uICgpIHtcbiAgdmFyIE8gPSB0aGlzLl90O1xuICB2YXIgaW5kZXggPSB0aGlzLl9pO1xuICB2YXIgcG9pbnQ7XG4gIGlmIChpbmRleCA+PSBPLmxlbmd0aCkgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICBwb2ludCA9ICRhdChPLCBpbmRleCk7XG4gIHRoaXMuX2kgKz0gcG9pbnQubGVuZ3RoO1xuICByZXR1cm4geyB2YWx1ZTogcG9pbnQsIGRvbmU6IGZhbHNlIH07XG59KTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIEVDTUFTY3JpcHQgNiBzeW1ib2xzIHNoaW1cbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBNRVRBID0gcmVxdWlyZSgnLi9fbWV0YScpLktFWTtcbnZhciAkZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbnZhciB3a3MgPSByZXF1aXJlKCcuL193a3MnKTtcbnZhciB3a3NFeHQgPSByZXF1aXJlKCcuL193a3MtZXh0Jyk7XG52YXIgd2tzRGVmaW5lID0gcmVxdWlyZSgnLi9fd2tzLWRlZmluZScpO1xudmFyIGVudW1LZXlzID0gcmVxdWlyZSgnLi9fZW51bS1rZXlzJyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4vX2lzLWFycmF5Jyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgX2NyZWF0ZSA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKTtcbnZhciBnT1BORXh0ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4tZXh0Jyk7XG52YXIgJEdPUEQgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpO1xudmFyICREUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciBnT1BEID0gJEdPUEQuZjtcbnZhciBkUCA9ICREUC5mO1xudmFyIGdPUE4gPSBnT1BORXh0LmY7XG52YXIgJFN5bWJvbCA9IGdsb2JhbC5TeW1ib2w7XG52YXIgJEpTT04gPSBnbG9iYWwuSlNPTjtcbnZhciBfc3RyaW5naWZ5ID0gJEpTT04gJiYgJEpTT04uc3RyaW5naWZ5O1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xudmFyIEhJRERFTiA9IHdrcygnX2hpZGRlbicpO1xudmFyIFRPX1BSSU1JVElWRSA9IHdrcygndG9QcmltaXRpdmUnKTtcbnZhciBpc0VudW0gPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbnZhciBTeW1ib2xSZWdpc3RyeSA9IHNoYXJlZCgnc3ltYm9sLXJlZ2lzdHJ5Jyk7XG52YXIgQWxsU3ltYm9scyA9IHNoYXJlZCgnc3ltYm9scycpO1xudmFyIE9QU3ltYm9scyA9IHNoYXJlZCgnb3Atc3ltYm9scycpO1xudmFyIE9iamVjdFByb3RvID0gT2JqZWN0W1BST1RPVFlQRV07XG52YXIgVVNFX05BVElWRSA9IHR5cGVvZiAkU3ltYm9sID09ICdmdW5jdGlvbic7XG52YXIgUU9iamVjdCA9IGdsb2JhbC5RT2JqZWN0O1xuLy8gRG9uJ3QgdXNlIHNldHRlcnMgaW4gUXQgU2NyaXB0LCBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMTczXG52YXIgc2V0dGVyID0gIVFPYmplY3QgfHwgIVFPYmplY3RbUFJPVE9UWVBFXSB8fCAhUU9iamVjdFtQUk9UT1RZUEVdLmZpbmRDaGlsZDtcblxuLy8gZmFsbGJhY2sgZm9yIG9sZCBBbmRyb2lkLCBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9Njg3XG52YXIgc2V0U3ltYm9sRGVzYyA9IERFU0NSSVBUT1JTICYmICRmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBfY3JlYXRlKGRQKHt9LCAnYScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRQKHRoaXMsICdhJywgeyB2YWx1ZTogNyB9KS5hOyB9XG4gIH0pKS5hICE9IDc7XG59KSA/IGZ1bmN0aW9uIChpdCwga2V5LCBEKSB7XG4gIHZhciBwcm90b0Rlc2MgPSBnT1BEKE9iamVjdFByb3RvLCBrZXkpO1xuICBpZiAocHJvdG9EZXNjKSBkZWxldGUgT2JqZWN0UHJvdG9ba2V5XTtcbiAgZFAoaXQsIGtleSwgRCk7XG4gIGlmIChwcm90b0Rlc2MgJiYgaXQgIT09IE9iamVjdFByb3RvKSBkUChPYmplY3RQcm90bywga2V5LCBwcm90b0Rlc2MpO1xufSA6IGRQO1xuXG52YXIgd3JhcCA9IGZ1bmN0aW9uICh0YWcpIHtcbiAgdmFyIHN5bSA9IEFsbFN5bWJvbHNbdGFnXSA9IF9jcmVhdGUoJFN5bWJvbFtQUk9UT1RZUEVdKTtcbiAgc3ltLl9rID0gdGFnO1xuICByZXR1cm4gc3ltO1xufTtcblxudmFyIGlzU3ltYm9sID0gVVNFX05BVElWRSAmJiB0eXBlb2YgJFN5bWJvbC5pdGVyYXRvciA9PSAnc3ltYm9sJyA/IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnO1xufSA6IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgaW5zdGFuY2VvZiAkU3ltYm9sO1xufTtcblxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIEQpIHtcbiAgaWYgKGl0ID09PSBPYmplY3RQcm90bykgJGRlZmluZVByb3BlcnR5KE9QU3ltYm9scywga2V5LCBEKTtcbiAgYW5PYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBhbk9iamVjdChEKTtcbiAgaWYgKGhhcyhBbGxTeW1ib2xzLCBrZXkpKSB7XG4gICAgaWYgKCFELmVudW1lcmFibGUpIHtcbiAgICAgIGlmICghaGFzKGl0LCBISURERU4pKSBkUChpdCwgSElEREVOLCBjcmVhdGVEZXNjKDEsIHt9KSk7XG4gICAgICBpdFtISURERU5dW2tleV0gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSkgaXRbSElEREVOXVtrZXldID0gZmFsc2U7XG4gICAgICBEID0gX2NyZWF0ZShELCB7IGVudW1lcmFibGU6IGNyZWF0ZURlc2MoMCwgZmFsc2UpIH0pO1xuICAgIH0gcmV0dXJuIHNldFN5bWJvbERlc2MoaXQsIGtleSwgRCk7XG4gIH0gcmV0dXJuIGRQKGl0LCBrZXksIEQpO1xufTtcbnZhciAkZGVmaW5lUHJvcGVydGllcyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoaXQsIFApIHtcbiAgYW5PYmplY3QoaXQpO1xuICB2YXIga2V5cyA9IGVudW1LZXlzKFAgPSB0b0lPYmplY3QoUCkpO1xuICB2YXIgaSA9IDA7XG4gIHZhciBsID0ga2V5cy5sZW5ndGg7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChsID4gaSkgJGRlZmluZVByb3BlcnR5KGl0LCBrZXkgPSBrZXlzW2krK10sIFBba2V5XSk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgJGNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpdCwgUCkge1xuICByZXR1cm4gUCA9PT0gdW5kZWZpbmVkID8gX2NyZWF0ZShpdCkgOiAkZGVmaW5lUHJvcGVydGllcyhfY3JlYXRlKGl0KSwgUCk7XG59O1xudmFyICRwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKGtleSkge1xuICB2YXIgRSA9IGlzRW51bS5jYWxsKHRoaXMsIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSkpO1xuICBpZiAodGhpcyA9PT0gT2JqZWN0UHJvdG8gJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPUFN5bWJvbHMsIGtleSkpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIEUgfHwgIWhhcyh0aGlzLCBrZXkpIHx8ICFoYXMoQWxsU3ltYm9scywga2V5KSB8fCBoYXModGhpcywgSElEREVOKSAmJiB0aGlzW0hJRERFTl1ba2V5XSA/IEUgOiB0cnVlO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpIHtcbiAgaXQgPSB0b0lPYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBpZiAoaXQgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKSByZXR1cm47XG4gIHZhciBEID0gZ09QRChpdCwga2V5KTtcbiAgaWYgKEQgJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIShoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKSkgRC5lbnVtZXJhYmxlID0gdHJ1ZTtcbiAgcmV0dXJuIEQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eU5hbWVzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCkge1xuICB2YXIgbmFtZXMgPSBnT1BOKHRvSU9iamVjdChpdCkpO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBpID0gMDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIHtcbiAgICBpZiAoIWhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiBrZXkgIT0gSElEREVOICYmIGtleSAhPSBNRVRBKSByZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoaXQpIHtcbiAgdmFyIElTX09QID0gaXQgPT09IE9iamVjdFByb3RvO1xuICB2YXIgbmFtZXMgPSBnT1BOKElTX09QID8gT1BTeW1ib2xzIDogdG9JT2JqZWN0KGl0KSk7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGkgPSAwO1xuICB2YXIga2V5O1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkge1xuICAgIGlmIChoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYgKElTX09QID8gaGFzKE9iamVjdFByb3RvLCBrZXkpIDogdHJ1ZSkpIHJlc3VsdC5wdXNoKEFsbFN5bWJvbHNba2V5XSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8vIDE5LjQuMS4xIFN5bWJvbChbZGVzY3JpcHRpb25dKVxuaWYgKCFVU0VfTkFUSVZFKSB7XG4gICRTeW1ib2wgPSBmdW5jdGlvbiBTeW1ib2woKSB7XG4gICAgaWYgKHRoaXMgaW5zdGFuY2VvZiAkU3ltYm9sKSB0aHJvdyBUeXBlRXJyb3IoJ1N5bWJvbCBpcyBub3QgYSBjb25zdHJ1Y3RvciEnKTtcbiAgICB2YXIgdGFnID0gdWlkKGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTtcbiAgICB2YXIgJHNldCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgaWYgKHRoaXMgPT09IE9iamVjdFByb3RvKSAkc2V0LmNhbGwoT1BTeW1ib2xzLCB2YWx1ZSk7XG4gICAgICBpZiAoaGFzKHRoaXMsIEhJRERFTikgJiYgaGFzKHRoaXNbSElEREVOXSwgdGFnKSkgdGhpc1tISURERU5dW3RhZ10gPSBmYWxzZTtcbiAgICAgIHNldFN5bWJvbERlc2ModGhpcywgdGFnLCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG4gICAgfTtcbiAgICBpZiAoREVTQ1JJUFRPUlMgJiYgc2V0dGVyKSBzZXRTeW1ib2xEZXNjKE9iamVjdFByb3RvLCB0YWcsIHsgY29uZmlndXJhYmxlOiB0cnVlLCBzZXQ6ICRzZXQgfSk7XG4gICAgcmV0dXJuIHdyYXAodGFnKTtcbiAgfTtcbiAgcmVkZWZpbmUoJFN5bWJvbFtQUk9UT1RZUEVdLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5faztcbiAgfSk7XG5cbiAgJEdPUEQuZiA9ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG4gICREUC5mID0gJGRlZmluZVByb3BlcnR5O1xuICByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmYgPSBnT1BORXh0LmYgPSAkZ2V0T3duUHJvcGVydHlOYW1lcztcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpLmYgPSAkcHJvcGVydHlJc0VudW1lcmFibGU7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJykuZiA9ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbiAgaWYgKERFU0NSSVBUT1JTICYmICFyZXF1aXJlKCcuL19saWJyYXJ5JykpIHtcbiAgICByZWRlZmluZShPYmplY3RQcm90bywgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJywgJHByb3BlcnR5SXNFbnVtZXJhYmxlLCB0cnVlKTtcbiAgfVxuXG4gIHdrc0V4dC5mID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICByZXR1cm4gd3JhcCh3a3MobmFtZSkpO1xuICB9O1xufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7IFN5bWJvbDogJFN5bWJvbCB9KTtcblxuZm9yICh2YXIgZXM2U3ltYm9scyA9IChcbiAgLy8gMTkuNC4yLjIsIDE5LjQuMi4zLCAxOS40LjIuNCwgMTkuNC4yLjYsIDE5LjQuMi44LCAxOS40LjIuOSwgMTkuNC4yLjEwLCAxOS40LjIuMTEsIDE5LjQuMi4xMiwgMTkuNC4yLjEzLCAxOS40LjIuMTRcbiAgJ2hhc0luc3RhbmNlLGlzQ29uY2F0U3ByZWFkYWJsZSxpdGVyYXRvcixtYXRjaCxyZXBsYWNlLHNlYXJjaCxzcGVjaWVzLHNwbGl0LHRvUHJpbWl0aXZlLHRvU3RyaW5nVGFnLHVuc2NvcGFibGVzJ1xuKS5zcGxpdCgnLCcpLCBqID0gMDsgZXM2U3ltYm9scy5sZW5ndGggPiBqOyl3a3MoZXM2U3ltYm9sc1tqKytdKTtcblxuZm9yICh2YXIgd2VsbEtub3duU3ltYm9scyA9ICRrZXlzKHdrcy5zdG9yZSksIGsgPSAwOyB3ZWxsS25vd25TeW1ib2xzLmxlbmd0aCA+IGs7KSB3a3NEZWZpbmUod2VsbEtub3duU3ltYm9sc1trKytdKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ1N5bWJvbCcsIHtcbiAgLy8gMTkuNC4yLjEgU3ltYm9sLmZvcihrZXkpXG4gICdmb3InOiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIGhhcyhTeW1ib2xSZWdpc3RyeSwga2V5ICs9ICcnKVxuICAgICAgPyBTeW1ib2xSZWdpc3RyeVtrZXldXG4gICAgICA6IFN5bWJvbFJlZ2lzdHJ5W2tleV0gPSAkU3ltYm9sKGtleSk7XG4gIH0sXG4gIC8vIDE5LjQuMi41IFN5bWJvbC5rZXlGb3Ioc3ltKVxuICBrZXlGb3I6IGZ1bmN0aW9uIGtleUZvcihzeW0pIHtcbiAgICBpZiAoIWlzU3ltYm9sKHN5bSkpIHRocm93IFR5cGVFcnJvcihzeW0gKyAnIGlzIG5vdCBhIHN5bWJvbCEnKTtcbiAgICBmb3IgKHZhciBrZXkgaW4gU3ltYm9sUmVnaXN0cnkpIGlmIChTeW1ib2xSZWdpc3RyeVtrZXldID09PSBzeW0pIHJldHVybiBrZXk7XG4gIH0sXG4gIHVzZVNldHRlcjogZnVuY3Rpb24gKCkgeyBzZXR0ZXIgPSB0cnVlOyB9LFxuICB1c2VTaW1wbGU6IGZ1bmN0aW9uICgpIHsgc2V0dGVyID0gZmFsc2U7IH1cbn0pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnT2JqZWN0Jywge1xuICAvLyAxOS4xLjIuMiBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG4gIGNyZWF0ZTogJGNyZWF0ZSxcbiAgLy8gMTkuMS4yLjQgT2JqZWN0LmRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpXG4gIGRlZmluZVByb3BlcnR5OiAkZGVmaW5lUHJvcGVydHksXG4gIC8vIDE5LjEuMi4zIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpXG4gIGRlZmluZVByb3BlcnRpZXM6ICRkZWZpbmVQcm9wZXJ0aWVzLFxuICAvLyAxOS4xLjIuNiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApXG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvcjogJGdldE93blByb3BlcnR5RGVzY3JpcHRvcixcbiAgLy8gMTkuMS4yLjcgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbiAgZ2V0T3duUHJvcGVydHlOYW1lczogJGdldE93blByb3BlcnR5TmFtZXMsXG4gIC8vIDE5LjEuMi44IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoTylcbiAgZ2V0T3duUHJvcGVydHlTeW1ib2xzOiAkZ2V0T3duUHJvcGVydHlTeW1ib2xzXG59KTtcblxuLy8gMjQuMy4yIEpTT04uc3RyaW5naWZ5KHZhbHVlIFssIHJlcGxhY2VyIFssIHNwYWNlXV0pXG4kSlNPTiAmJiAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICghVVNFX05BVElWRSB8fCAkZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgUyA9ICRTeW1ib2woKTtcbiAgLy8gTVMgRWRnZSBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMge31cbiAgLy8gV2ViS2l0IGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyBudWxsXG4gIC8vIFY4IHRocm93cyBvbiBib3hlZCBzeW1ib2xzXG4gIHJldHVybiBfc3RyaW5naWZ5KFtTXSkgIT0gJ1tudWxsXScgfHwgX3N0cmluZ2lmeSh7IGE6IFMgfSkgIT0gJ3t9JyB8fCBfc3RyaW5naWZ5KE9iamVjdChTKSkgIT0gJ3t9Jztcbn0pKSwgJ0pTT04nLCB7XG4gIHN0cmluZ2lmeTogZnVuY3Rpb24gc3RyaW5naWZ5KGl0KSB7XG4gICAgdmFyIGFyZ3MgPSBbaXRdO1xuICAgIHZhciBpID0gMTtcbiAgICB2YXIgcmVwbGFjZXIsICRyZXBsYWNlcjtcbiAgICB3aGlsZSAoYXJndW1lbnRzLmxlbmd0aCA+IGkpIGFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgJHJlcGxhY2VyID0gcmVwbGFjZXIgPSBhcmdzWzFdO1xuICAgIGlmICghaXNPYmplY3QocmVwbGFjZXIpICYmIGl0ID09PSB1bmRlZmluZWQgfHwgaXNTeW1ib2woaXQpKSByZXR1cm47IC8vIElFOCByZXR1cm5zIHN0cmluZyBvbiB1bmRlZmluZWRcbiAgICBpZiAoIWlzQXJyYXkocmVwbGFjZXIpKSByZXBsYWNlciA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICBpZiAodHlwZW9mICRyZXBsYWNlciA9PSAnZnVuY3Rpb24nKSB2YWx1ZSA9ICRyZXBsYWNlci5jYWxsKHRoaXMsIGtleSwgdmFsdWUpO1xuICAgICAgaWYgKCFpc1N5bWJvbCh2YWx1ZSkpIHJldHVybiB2YWx1ZTtcbiAgICB9O1xuICAgIGFyZ3NbMV0gPSByZXBsYWNlcjtcbiAgICByZXR1cm4gX3N0cmluZ2lmeS5hcHBseSgkSlNPTiwgYXJncyk7XG4gIH1cbn0pO1xuXG4vLyAxOS40LjMuNCBTeW1ib2wucHJvdG90eXBlW0BAdG9QcmltaXRpdmVdKGhpbnQpXG4kU3ltYm9sW1BST1RPVFlQRV1bVE9fUFJJTUlUSVZFXSB8fCByZXF1aXJlKCcuL19oaWRlJykoJFN5bWJvbFtQUk9UT1RZUEVdLCBUT19QUklNSVRJVkUsICRTeW1ib2xbUFJPVE9UWVBFXS52YWx1ZU9mKTtcbi8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKCRTeW1ib2wsICdTeW1ib2wnKTtcbi8vIDIwLjIuMS45IE1hdGhbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKE1hdGgsICdNYXRoJywgdHJ1ZSk7XG4vLyAyNC4zLjMgSlNPTltAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoZ2xvYmFsLkpTT04sICdKU09OJywgdHJ1ZSk7XG4iLCIvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1vYmplY3QtdmFsdWVzLWVudHJpZXNcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgJGVudHJpZXMgPSByZXF1aXJlKCcuL19vYmplY3QtdG8tYXJyYXknKSh0cnVlKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdPYmplY3QnLCB7XG4gIGVudHJpZXM6IGZ1bmN0aW9uIGVudHJpZXMoaXQpIHtcbiAgICByZXR1cm4gJGVudHJpZXMoaXQpO1xuICB9XG59KTtcbiIsInJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKSgnYXN5bmNJdGVyYXRvcicpO1xuIiwidmFyICRpdGVyYXRvcnMgPSByZXF1aXJlKCcuL2VzNi5hcnJheS5pdGVyYXRvcicpO1xudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyIHdrcyA9IHJlcXVpcmUoJy4vX3drcycpO1xudmFyIElURVJBVE9SID0gd2tzKCdpdGVyYXRvcicpO1xudmFyIFRPX1NUUklOR19UQUcgPSB3a3MoJ3RvU3RyaW5nVGFnJyk7XG52YXIgQXJyYXlWYWx1ZXMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbnZhciBET01JdGVyYWJsZXMgPSB7XG4gIENTU1J1bGVMaXN0OiB0cnVlLCAvLyBUT0RPOiBOb3Qgc3BlYyBjb21wbGlhbnQsIHNob3VsZCBiZSBmYWxzZS5cbiAgQ1NTU3R5bGVEZWNsYXJhdGlvbjogZmFsc2UsXG4gIENTU1ZhbHVlTGlzdDogZmFsc2UsXG4gIENsaWVudFJlY3RMaXN0OiBmYWxzZSxcbiAgRE9NUmVjdExpc3Q6IGZhbHNlLFxuICBET01TdHJpbmdMaXN0OiBmYWxzZSxcbiAgRE9NVG9rZW5MaXN0OiB0cnVlLFxuICBEYXRhVHJhbnNmZXJJdGVtTGlzdDogZmFsc2UsXG4gIEZpbGVMaXN0OiBmYWxzZSxcbiAgSFRNTEFsbENvbGxlY3Rpb246IGZhbHNlLFxuICBIVE1MQ29sbGVjdGlvbjogZmFsc2UsXG4gIEhUTUxGb3JtRWxlbWVudDogZmFsc2UsXG4gIEhUTUxTZWxlY3RFbGVtZW50OiBmYWxzZSxcbiAgTWVkaWFMaXN0OiB0cnVlLCAvLyBUT0RPOiBOb3Qgc3BlYyBjb21wbGlhbnQsIHNob3VsZCBiZSBmYWxzZS5cbiAgTWltZVR5cGVBcnJheTogZmFsc2UsXG4gIE5hbWVkTm9kZU1hcDogZmFsc2UsXG4gIE5vZGVMaXN0OiB0cnVlLFxuICBQYWludFJlcXVlc3RMaXN0OiBmYWxzZSxcbiAgUGx1Z2luOiBmYWxzZSxcbiAgUGx1Z2luQXJyYXk6IGZhbHNlLFxuICBTVkdMZW5ndGhMaXN0OiBmYWxzZSxcbiAgU1ZHTnVtYmVyTGlzdDogZmFsc2UsXG4gIFNWR1BhdGhTZWdMaXN0OiBmYWxzZSxcbiAgU1ZHUG9pbnRMaXN0OiBmYWxzZSxcbiAgU1ZHU3RyaW5nTGlzdDogZmFsc2UsXG4gIFNWR1RyYW5zZm9ybUxpc3Q6IGZhbHNlLFxuICBTb3VyY2VCdWZmZXJMaXN0OiBmYWxzZSxcbiAgU3R5bGVTaGVldExpc3Q6IHRydWUsIC8vIFRPRE86IE5vdCBzcGVjIGNvbXBsaWFudCwgc2hvdWxkIGJlIGZhbHNlLlxuICBUZXh0VHJhY2tDdWVMaXN0OiBmYWxzZSxcbiAgVGV4dFRyYWNrTGlzdDogZmFsc2UsXG4gIFRvdWNoTGlzdDogZmFsc2Vcbn07XG5cbmZvciAodmFyIGNvbGxlY3Rpb25zID0gZ2V0S2V5cyhET01JdGVyYWJsZXMpLCBpID0gMDsgaSA8IGNvbGxlY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gIHZhciBOQU1FID0gY29sbGVjdGlvbnNbaV07XG4gIHZhciBleHBsaWNpdCA9IERPTUl0ZXJhYmxlc1tOQU1FXTtcbiAgdmFyIENvbGxlY3Rpb24gPSBnbG9iYWxbTkFNRV07XG4gIHZhciBwcm90byA9IENvbGxlY3Rpb24gJiYgQ29sbGVjdGlvbi5wcm90b3R5cGU7XG4gIHZhciBrZXk7XG4gIGlmIChwcm90bykge1xuICAgIGlmICghcHJvdG9bSVRFUkFUT1JdKSBoaWRlKHByb3RvLCBJVEVSQVRPUiwgQXJyYXlWYWx1ZXMpO1xuICAgIGlmICghcHJvdG9bVE9fU1RSSU5HX1RBR10pIGhpZGUocHJvdG8sIFRPX1NUUklOR19UQUcsIE5BTUUpO1xuICAgIEl0ZXJhdG9yc1tOQU1FXSA9IEFycmF5VmFsdWVzO1xuICAgIGlmIChleHBsaWNpdCkgZm9yIChrZXkgaW4gJGl0ZXJhdG9ycykgaWYgKCFwcm90b1trZXldKSByZWRlZmluZShwcm90bywga2V5LCAkaXRlcmF0b3JzW2tleV0sIHRydWUpO1xuICB9XG59XG4iLCJpbXBvcnQgTjE5YmFzZUFwcGxldCBmcm9tICcuL24xOWJhc2VBcHBsZXQnO1xuaW1wb3J0IE4xOXBvcHVwQ29udHJvbGxlciBmcm9tICcuL24xOXBvcHVwQ29udHJvbGxlcic7XG5cblNpZWJlbEFwcEZhY2FkZS5OMTlIZWxwZXIgPSBjbGFzcyBleHRlbmRzIE4xOWJhc2VBcHBsZXQge1xuICBjb25zdHJ1Y3RvcihzZXR0aW5ncykge1xuICAgIHN1cGVyKHNldHRpbmdzKTtcbiAgICBjb25zb2xlLmxvZygnTmV4dXMgbWFpbiBjbGFzcyBzdGFydGVkLi4uLicsIHRoaXMucG0uR2V0KCdHZXROYW1lJykpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICAvLyBnZXQgdGhlIG4xOXBvcHVwQ29udHJvbGxlciBzaW5nbGV0b24gaW5zdGFuY2VcbiAgICB0aGlzLm4xOXBvcHVwQ29udHJvbGxlciA9IE4xOXBvcHVwQ29udHJvbGxlci5pbnN0YW5jZTtcbiAgfVxuXG4gIGNsb3NlUG9wdXBBcHBsZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMubjE5cG9wdXBDb250cm9sbGVyLmNsb3NlUG9wdXBBcHBsZXQoKTtcbiAgfVxuXG4gIF9zaG93UG9wdXBBcHBsZXQobmFtZSwgaGlkZSwgY2IpIHtcbiAgICBpZiAoIXRoaXMubjE5cG9wdXBDb250cm9sbGVyKSB7XG4gICAgICAvLyBpdCBpcyBhIHBvcHVwIGFwcGxldFxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdPcGVubmluZyBwb3B1cCBvbiB0aGUgcG9wdXAgaXMgbm90IHN1cHBvcnRlZCBub3cnKTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLm4xOXBvcHVwQ29udHJvbGxlci5jYW5PcGVuUG9wdXAoKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3Qgb3BlbiBwb3B1cCEnKTtcbiAgICAgIC8vIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy52aWV3LlNldEFjdGl2ZUFwcGxldEludGVybmFsKHRoaXMuYXBwbGV0KTsgLy8gb3IgU2V0QWN0aXZlQXBwbGV0XG4gICAgdGhpcy5fc2V0QWN0aXZlQ29udHJvbChuYW1lKTtcbiAgICByZXR1cm4gdGhpcy5uMTlwb3B1cENvbnRyb2xsZXIuc2hvd1BvcHVwQXBwbGV0KGhpZGUsIGNiLCB0aGlzLnBtKTtcbiAgfVxuXG4gIHNob3dNdmdBcHBsZXQobmFtZSwgaGlkZSwgY2IpIHtcbiAgICByZXR1cm4gdGhpcy5fc2hvd1BvcHVwQXBwbGV0KG5hbWUsIGhpZGUsIGNiKTtcbiAgfVxuXG4gIHNob3dQaWNrQXBwbGV0KG5hbWUsIGhpZGUsIGNiKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Nob3dQb3B1cEFwcGxldChuYW1lLCBoaWRlLCBjYik7XG4gIH1cblxuICBkcmlsbGRvd24oY29udHJvbE5hbWUpIHtcbiAgICAvLyB0b2RvOiBjaGVjayBpc0xpbmsgb2YgY29udHJvbD9cbiAgICAvLyBpbmRleCBpcyBub3QgZWZmZWN0aXZlLCBhbmQgZHJpbGxkb3duIGFueXdheSBoYXBwZW5zIG9uIGxhc3Qgc2VsZWN0ZWQgcmVjb3JkXG4gICAgaWYgKCF0aGlzLmlzTGlzdEFwcGxldCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCBpbmRleCA9IHRoaXMuZ2V0U2VsZWN0aW9uKCk7XG4gICAgcmV0dXJuIHRoaXMucG0uRXhlY3V0ZU1ldGhvZCgnT25EcmlsbERvd24nLCBjb250cm9sTmFtZSwgaW5kZXgpO1xuICB9XG5cbiAgZ290b1ZpZXcodGFyZ2V0Vmlld05hbWUsIHRhcmdldEFwcGxldE5hbWUsIGlkKSB7XG4gICAgLy8gdG9kbzogZ2V0IHRoZSBhcHBsZXQgbmFtZSBmcm9tIHRoZSB2aWV3IGRlZmluaXRpb24/XG4gICAgY29uc3Qgcm93SWQgPSB0eXBlb2YgaWQgPT09ICd1bmRlZmluZWQnID8gdGhpcy5nZXRDdXJyZW50UmVjb3JkKHRydWUpLklkIDogaWQ7XG4gICAgbGV0IFNXRUNtZCA9IGBHb3RvVmlldyZTV0VWaWV3PSR7dGFyZ2V0Vmlld05hbWV9JlNXRUFwcGxldDA9JHt0YXJnZXRBcHBsZXROYW1lfWA7XG4gICAgU1dFQ21kICs9IGAmU1dFQlU9MSZTV0VLZWVwQ29udGV4dD1GQUxTRSZTV0VSb3dJZDA9JHtyb3dJZH1gO1xuICAgIFNXRUNtZCA9IGVuY29kZVVSSShTV0VDbWQpO1xuICAgIFNpZWJlbEFwcC5TX0FwcC5Hb3RvVmlldyh0YXJnZXRWaWV3TmFtZSwgJycsIFNXRUNtZCwgJycpO1xuICB9XG5cbiAgc3RhdGljIFJlSW5pdFBvcHVwKCkge1xuICAgIGNvbnN0IHBvcHVwUE0gPSBTaWViZWxBcHAuU19BcHAuR2V0UG9wdXBQTSgpO1xuICAgIHBvcHVwUE0uSW5pdCgpO1xuICAgIHBvcHVwUE0uU2V0dXAoKTtcbiAgfVxufTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE4xOWJhc2VBcHBsZXQge1xuICBjb25zdHJ1Y3RvcihzZXR0aW5ncykge1xuICAgIHRoaXMuY29uc3RzID0gU2llYmVsSlMuRGVwZW5kZW5jeSgnU2llYmVsQXBwLkNvbnN0YW50cycpO1xuICAgIHRoaXMucG0gPSBzZXR0aW5ncy5wbTtcbiAgICB0aGlzLnZpZXcgPSBTaWViZWxBcHAuU19BcHAuR2V0QWN0aXZlVmlldygpO1xuICAgIHRoaXMuYXBwbGV0TmFtZSA9IHRoaXMucG0uR2V0KCdHZXROYW1lJyk7XG4gICAgdGhpcy5hcHBsZXQgPSB0aGlzLnZpZXcuR2V0QXBwbGV0TWFwKClbdGhpcy5hcHBsZXROYW1lXTtcbiAgICB0aGlzLmlzTGlzdEFwcGxldCA9IHR5cGVvZiB0aGlzLmFwcGxldC5HZXRMaXN0T2ZDb2x1bW5zID09PSAnZnVuY3Rpb24nO1xuICAgIHRoaXMucmVxdWlyZWQgPSBbXTsgLy8gd2lsbCBiZSBlbXB0eSBmb3IgdGhlIGxpc3QgYXBwbGV0XG4gICAgdGhpcy5sb3YgPSB7fTtcblxuICAgIHRoaXMudG9rZW4gPSAwO1xuICAgIHRoaXMuc3Vic2NyaWJlcnMgPSBbXTtcbiAgICBjb25zdCBiY0lkID0gdGhpcy5hcHBsZXQuR2V0QkNJZCgpO1xuICAgIHRoaXMucG0uQXR0YWNoTm90aWZpY2F0aW9uSGFuZGxlcih0aGlzLmNvbnN0cy5nZXQoJ1NXRV9QUk9QX0JDX05PVElfRU5EJyksIChwcm9wU2V0KSA9PiB7XG4gICAgICBpZiAoYmNJZCA9PT0gcHJvcFNldC5HZXRQcm9wZXJ0eSgnYmMnKSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3Vic2NyaWJlcnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAvLyB3ZSBhc3N1bWUgdGhhdCB0aGUgZnVuY3Rpb24gZG9lcyBub3QgdGhyb3cgYW4gZXJyb3JcbiAgICAgICAgICB0aGlzLnN1YnNjcmliZXJzW2ldLmZ1bmMoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gcG9wdWxhdGUgdGhlIHJlcXVpcmVkIGFycmF5IGZvciBmb3JtIGFwcGxldHNcbiAgICBpZiAoIXRoaXMuaXNMaXN0QXBwbGV0KSB7XG4gICAgICBjb25zdCBhcHBsZXRJZCA9IGBzXyR7dGhpcy5wbS5HZXQoJ0dldEZ1bGxJZCcpfV9kaXZgO1xuICAgICAgY29uc3QgYXBwbGV0SW5wdXRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYXBwbGV0SWQpLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0Jyk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFwcGxldElucHV0cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAoYXBwbGV0SW5wdXRzW2ldLmF0dHJpYnV0ZXNbJ2FyaWEtcmVxdWlyZWQnXSkge1xuICAgICAgICAgIHRoaXMucmVxdWlyZWQucHVzaChhcHBsZXRJbnB1dHNbaV0uYXR0cmlidXRlcy5uYW1lLm5vZGVWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBsaXN0ZW5lciB0byBnZXQgZHluYW1pYyBMT1ZzXG4gICAgY29uc3QgYXBwbGV0TmFtZSA9IHRoaXMucG0uR2V0KCdHZXROYW1lJyk7XG4gICAgdGhpcy5wbS5BdHRhY2hOb3RpZmljYXRpb25IYW5kbGVyKHRoaXMuY29uc3RzLmdldCgnU1dFX1BST1BfQkNfTk9USV9HRU5FUklDJyksIChwcm9wU2V0KSA9PiB7XG4gICAgICBjb25zdCB2aWV3TmFtZSA9IFNpZWJlbEFwcC5TX0FwcC5HZXRBY3RpdmVWaWV3KCkuR2V0TmFtZSgpO1xuICAgICAgY29uc3QgdHlwZSA9IHByb3BTZXQuR2V0UHJvcGVydHkodGhpcy5jb25zdHMuZ2V0KCdTV0VfUFJPUF9OT1RJX1RZUEUnKSk7XG4gICAgICBpZiAodHlwZSA9PT0gJ0dldFF1aWNrUGlja0luZm8nKSB7XG4gICAgICAgIGNvbnN0IGFyciA9IFtdO1xuICAgICAgICBDQ0ZNaXNjVXRpbF9TdHJpbmdUb0FycmF5KHByb3BTZXQuR2V0UHJvcGVydHkodGhpcy5jb25zdHMuZ2V0KCdTV0VfUFJPUF9BUkdTX0FSUkFZJykpLCBhcnIpO1xuICAgICAgICBpZiAodmlld05hbWUgPT09IGFyclsxXSAmJiBhcHBsZXROYW1lID09PSBhcnJbMl0pIHtcbiAgICAgICAgICB0aGlzLmxvdlthcnJbM11dID0gYXJyLnNwbGljZSg1KS5maWx0ZXIoZWwgPT4gZWwgIT09ICcnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc3Vic2NyaWJlKGZ1bmMpIHtcbiAgICBpZiAodHlwZW9mIGZ1bmMgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignZnVuYyBpcyBub3QgYSBmdW5jdGlvbicpO1xuICAgIH1cbiAgICB0aGlzLnRva2VuICs9IDE7XG4gICAgdGhpcy5zdWJzY3JpYmVycy5wdXNoKHsgdG9rZW46IHRoaXMudG9rZW4sIGZ1bmMgfSk7XG4gICAgcmV0dXJuIHRoaXMudG9rZW47XG4gIH1cblxuICB1bnN1YnNjcmliZSh0b2tlbikge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zdWJzY3JpYmVycy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKHRva2VuID09PSB0aGlzLnN1YnNjcmliZXJzW2ldLnRva2VuKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN1YnNjcmliZXJzLnNwbGljZShpLCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgX2dldENvbnRyb2wobmFtZSkge1xuICAgIHJldHVybiB0aGlzLmFwcGxldC5HZXRDb250cm9sKG5hbWUpO1xuICB9XG5cbiAgX3JldHVybkNvbnRyb2xzKCkge1xuICAgIGlmICh0aGlzLmlzTGlzdEFwcGxldCkge1xuICAgICAgcmV0dXJuIHRoaXMuYXBwbGV0LkdldExpc3RPZkNvbHVtbnMoKTsgLy8gcG0uR2V0KCdHZXRMaXN0T2ZDb2x1bW5zJylcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuYXBwbGV0LkdldENvbnRyb2xzKCk7IC8vIHBtLkdldCgnR2V0Q29udHJvbHMnKTtcbiAgfVxuXG4gIC8vIGNhbGxlZCBpbnRvIHRoZSBnZXRDb250cm9scyB0byByZWR1Y2UgdGhlIGFtb3VudCBvZiB0aGUgcmV0dXJuZWQgY29udHJvbHNcbiAgX2lzU2tpcENvbnRyb2wodHlwZSkge1xuICAgIC8vIGh0dHBzOi8vZG9jcy5vcmFjbGUuY29tL2NkL0U3NDg5MF8wMS9ib29rcy9Db25maWdPcGVuVUkvYXBwZW5kaXhfYV9hcGkwMDIuaHRtXG4gICAgLy8gbWF5YmUgd2UgbmVlZCB0byBleGNsdWRlIG1vcmUgdHlwZXNcbiAgICByZXR1cm4gKHR5cGUgPT09IHRoaXMuY29uc3RzLmdldCgnU1dFX1BTVF9CVVRUT05fQ1RSTCcpKVxuICAgICAgfHwgKHR5cGUgPT09IHRoaXMuY29uc3RzLmdldCgnU1dFX0NUUkxfTElOSycpKVxuICAgICAgfHwgKHR5cGUgPT09IHRoaXMuY29uc3RzLmdldCgnU1dFX0NUUkxfUExBSU5URVhUJykpXG4gICAgICB8fCAodHlwZSA9PT0gJ251bGwnKTsgLy8gR2V0VWlUeXBlIHJldHVybnMgc3RyaW5nXG4gIH1cblxuICBfaXNSZXF1aXJlZChpbnB1dE5hbWUpIHtcbiAgICAvLyByZXF1aXJlZCBpcyBlbXB0eSBmb3IgbGlzdCBhcHBsZXRzLCBob3BlZnVsbHkgZm9yIG5vd1xuICAgIHJldHVybiB0aGlzLnJlcXVpcmVkLmluZGV4T2YoaW5wdXROYW1lKSA+IC0xO1xuICB9XG5cbiAgc3RhdGljIEdldFN0YXRpY0xPVihhcnIpIHtcbiAgICBjb25zdCByZXQgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgcmV0LnB1c2goYXJyW2ldLnByb3BBcnJheSk7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICBfc2V0QWN0aXZlQ29udHJvbChuYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuYXBwbGV0LlNldEFjdGl2ZUNvbnRyb2wodGhpcy5fZ2V0Q29udHJvbChuYW1lKSk7XG4gIH1cblxuICBfZ2V0VmFsdWVGb3JDb250cm9sKGNvbnRyb2xVaVR5cGUsIHZhbHVlKSB7XG4gICAgLy8gVE9ETzogRGF0ZVRpbWUsIG51bWJlcnMsIGFuZCBwaG9uZXM/XG4gICAgaWYgKHRoaXMuY29uc3RzLmdldCgnU1dFX0NUUkxfQ0hFQ0tCT1gnKSA9PT0gY29udHJvbFVpVHlwZSkge1xuICAgICAgLy8gY29udmVydCB0cnVlL2ZhbHNlID0+IFkvTlxuICAgICAgLy8gZG8gd2Ugd2FudCB0byBzdXBwb3J0IHNldHRpbmcgdG8gbnVsbFxuICAgICAgdmFsdWUgPSB2YWx1ZSA/ICdZJyA6ICdOJzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBjYW5JbnZva2VNZXRob2QobWV0aG9kKSB7XG4gICAgcmV0dXJuIHRoaXMucG0uRXhlY3V0ZU1ldGhvZCgnQ2FuSW52b2tlTWV0aG9kJywgbWV0aG9kKTtcbiAgfVxuXG4gIGludm9rZU1ldGhvZChtZXRob2QpIHtcbiAgICBpZiAoIXRoaXMuY2FuSW52b2tlTWV0aG9kKG1ldGhvZCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucG0uRXhlY3V0ZU1ldGhvZCgnSW52b2tlTWV0aG9kJywgbWV0aG9kKTtcbiAgfVxuXG4gIGdldENvbnRyb2xzKCkge1xuICAgIGNvbnN0IGNvbnRyb2xzID0ge307XG4gICAgY29uc3QgYXBwbGV0Q29udHJvbHMgPSB0aGlzLl9yZXR1cm5Db250cm9scygpO1xuICAgIGNvbnN0IGFyciA9IE9iamVjdC5rZXlzKGFwcGxldENvbnRyb2xzKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgY29udHJvbCA9IGFwcGxldENvbnRyb2xzW2FycltpXV07XG4gICAgICBjb25zdCBjb250cm9sVWlUeXBlID0gY29udHJvbC5HZXRVSVR5cGUoKTtcbiAgICAgIGlmICh0aGlzLl9pc1NraXBDb250cm9sKGNvbnRyb2xVaVR5cGUpKSB7XG4gICAgICAgIGNvbnRpbnVlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnRpbnVlXG4gICAgICB9XG4gICAgICBjb25zdCBjb250cm9sTmFtZSA9IGNvbnRyb2wuR2V0TmFtZSgpO1xuICAgICAgY29uc3QgY29udHJvbElucHV0TmFtZSA9IGNvbnRyb2wuR2V0SW5wdXROYW1lKCk7XG4gICAgICBjb25zdCBvYmogPSB7XG4gICAgICAgIG5hbWU6IGNvbnRyb2xOYW1lLFxuICAgICAgICBsYWJlbDogY29udHJvbC5HZXREaXNwbGF5TmFtZSgpLFxuICAgICAgICB1aVR5cGU6IGNvbnRyb2xVaVR5cGUsXG4gICAgICAgIHJlcXVpcmVkOiB0aGlzLl9pc1JlcXVpcmVkKGNvbnRyb2xJbnB1dE5hbWUpLFxuICAgICAgICBib3VuZGVkUGljazogY29udHJvbC5Jc0JvdW5kZWRQaWNrKCkgPT09ICcxJyxcbiAgICAgICAgc3RhdGljUGljazogY29udHJvbC5Jc1N0YXRpY0JvdW5kZWQoKSA9PT0gJzEnLFxuICAgICAgICAvLyBwaWNrQXBwbGV0OiBjb250cm9sLkdldFBpY2tBcHBsZXQoKSwgLy8gY29uZnVzaW5nIGFuZCBub3QgY29uc2lzdGVudCAtIHNlZSB3aWtpXG4gICAgICAgIGlucHV0TmFtZTogY29udHJvbElucHV0TmFtZSxcbiAgICAgICAgaXNQb3N0Q2hhbmdlczogY29udHJvbC5Jc1Bvc3RDaGFuZ2VzKCksXG4gICAgICAgIG1heFNpemU6IGNvbnRyb2wuR2V0TWF4U2l6ZSgpLFxuICAgICAgICAvLyBtYXhDaGFyczogY29udHJvbC5HZXRNYXhDaGFycygpLCAvLyBpdCBpcyBhbHdheXMgMFxuICAgICAgICBmaWVsZE5hbWU6IGNvbnRyb2wuR2V0RmllbGROYW1lKCksXG4gICAgICAgIGlzTGluazogdGhpcy5wbS5FeGVjdXRlTWV0aG9kKCdDYW5OYXZpZ2F0ZScsIGNvbnRyb2xOYW1lKSxcbiAgICAgIH07XG4gICAgICBpZiAodGhpcy5pc0xpc3RBcHBsZXQpIHtcbiAgICAgICAgb2JqLnJlYWRPbmx5ID0gIXRoaXMucG0uRXhlY3V0ZU1ldGhvZCgnQ2FuVXBkYXRlJyxcbiAgICAgICAgICB0aGlzLnBtLkdldFJlbmRlcmVyKCkuR2V0Q29sdW1uSGVscGVyKCkuR2V0QWN0dWFsQ29udHJvbE5hbWUoY29udHJvbE5hbWUpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9iai5yZWFkT25seSA9ICF0aGlzLnBtLkV4ZWN1dGVNZXRob2QoJ0NhblVwZGF0ZScsIGNvbnRyb2xOYW1lKTtcbiAgICAgIH1cbiAgICAgIC8vIGFkZCB2YWx1ZXMgdG8gYmUgZGlzcGxheWVkIGluIHRoZSBzdGF0aWMgcGljayBsaXN0XG4gICAgICBpZiAob2JqLnN0YXRpY1BpY2spIHtcbiAgICAgICAgb2JqLnN0YXRpY0xPViA9IE4xOWJhc2VBcHBsZXQuR2V0U3RhdGljTE9WKGNvbnRyb2wuR2V0UmFkaW9Hcm91cFByb3BTZXQoKS5jaGlsZEFycmF5KTtcbiAgICAgICAgb2JqLmxvdnMgPSBvYmouc3RhdGljTE9WLnJlZHVjZSgoYWNjdW11bGF0b3IsIGN1cnJlbnRWYWx1ZSkgPT4geyAvLyBub3JtYWxpemVkXG4gICAgICAgICAgYWNjdW11bGF0b3IucHVzaCh7IGxpYzogY3VycmVudFZhbHVlLkZpZWxkVmFsdWUsIHZhbDogY3VycmVudFZhbHVlLkRpc3BsYXlOYW1lIH0pO1xuICAgICAgICAgIHJldHVybiBhY2N1bXVsYXRvcjtcbiAgICAgICAgfSwgW10pO1xuICAgICAgfVxuICAgICAgY29udHJvbHNbY29udHJvbE5hbWVdID0gb2JqO1xuICAgIH1cbiAgICByZXR1cm4gY29udHJvbHM7XG4gIH1cblxuICBnZXRSZWNvcmRTZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMucG0uR2V0KCdHZXRSZWNvcmRTZXQnKTtcbiAgfVxuXG4gIGdldFJhd1JlY29yZFNldCgpIHtcbiAgICByZXR1cm4gdGhpcy5wbS5HZXQoJ0dldFJhd1JlY29yZFNldCcpO1xuICB9XG5cbiAgZ2V0Um93TGlzdFJvd0NvdW50KCkge1xuICAgIC8vIGhvdyBtdWNoIGFwcGxldCBjYW4gZGlzcGxheSAoc3BlY2lmaWVkIGluIFNpZWJlbCBUb29scykgLSAxMC8yMFxuICAgIHJldHVybiB0aGlzLnBtLkdldCgnR2V0Um93TGlzdFJvd0NvdW50Jyk7XG4gIH1cblxuICBnZXROdW1Sb3dzKCkge1xuICAgIC8vIGN1cnJlbnRseSBmZXRjaGVkIGZyb20gc2VydmVyP1xuICAgIHJldHVybiB0aGlzLnBtLkdldCgnR2V0TnVtUm93cycpO1xuICB9XG5cbiAgZ2V0U2VsZWN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnBtLkdldCgnR2V0U2VsZWN0aW9uJyk7XG4gIH1cblxuICBfbmF2aWdhdGUobWV0aG9kKSB7XG4gICAgaWYgKCF0aGlzLmNhbkludm9rZU1ldGhvZChtZXRob2QpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IHJldCA9IHRoaXMucG0uRXhlY3V0ZU1ldGhvZCgnSW52b2tlTWV0aG9kJywgbWV0aG9kLCBudWxsLCBmYWxzZSk7XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIG5leHRSZWNvcmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hdmlnYXRlKHRoaXMuaXNMaXN0QXBwbGV0ID8gJ0dvdG9OZXh0JyA6ICdHb3RvTmV4dFNldCcpO1xuICB9XG5cbiAgbmV4dFJlY29yZFNldCgpIHtcbiAgICBpZiAoIXRoaXMuaXNMaXN0QXBwbGV0KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9uYXZpZ2F0ZSgnR290b05leHRTZXQnKTtcbiAgfVxuXG4gIHBvc2l0aW9uT25Sb3coaW5kZXgpIHtcbiAgICBpZiAodGhpcy5pc0xpc3RBcHBsZXQpIHtcbiAgICAgIGlmICghdGhpcy5wbS5FeGVjdXRlTWV0aG9kKCdDYW5JbnZva2VNZXRob2QnLCAnUG9zaXRpb25PblJvdycpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChpbmRleCA8IDApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuZ2V0TnVtUm93cygpIDwgaW5kZXggKyAxKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmdldFJvd0xpc3RSb3dDb3VudCgpIDwgaW5kZXggKyAxKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIC8vIHRvZG8gOiBpZiB3ZSBnb3QgdG8gdGhpcyBwb2ludFxuICAgICAgLy8gIHNob3VsZCB3ZSBjaGVjayBhcHBsZXQuR2V0QWN0aXZlQ29udHJvbCAoYXBwbGV0LnByb3RvdHlwZS5JbnZva2VNZXRob2QpXG4gICAgICAvLyAgYW5kIG51bGxpZnkgaXQgaWYgYWN0aXZlP1xuICAgICAgcmV0dXJuIHRoaXMucG0uRXhlY3V0ZU1ldGhvZCgnSGFuZGxlUm93U2VsZWN0JywgaW5kZXgsIGZhbHNlLCBmYWxzZSk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHByZXZSZWNvcmQoKSB7XG4gICAgaWYgKHRoaXMuaXNMaXN0QXBwbGV0KSB7XG4gICAgICByZXR1cm4gdGhpcy5wb3NpdGlvbk9uUm93KHRoaXMucG0uR2V0KCdHZXRTZWxlY3Rpb24nKSAtIDEpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fbmF2aWdhdGUoJ0dvdG9QcmV2aW91c1NldCcpO1xuICB9XG5cbiAgcHJldlJlY29yZFNldCgpIHtcbiAgICBpZiAoIXRoaXMuaXNMaXN0QXBwbGV0KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9uYXZpZ2F0ZSgnR290b1ByZXZpb3VzU2V0Jyk7XG4gIH1cblxuICBuZXdSZWNvcmQoY2IpIHtcbiAgICAvLyB0b2RvOiBzaG91bGQgaXQgYmUgdGhlIHNhbWUgYXMgV3JpdGVSZWNvcmQ/XG4gICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gdGhpcy5fbmV3UmVjb3JkKHJlc29sdmUpKTtcbiAgICByZXR1cm4gdHlwZW9mIGNiID09PSAnZnVuY3Rpb24nID8gcHJvbWlzZS50aGVuKGNiKSA6IHByb21pc2U7XG4gIH1cblxuICBfbmV3UmVjb3JkKGNiKSB7XG4gICAgcmV0dXJuIHRoaXMucG0uRXhlY3V0ZU1ldGhvZCgnSW52b2tlTWV0aG9kJywgJ05ld1JlY29yZCcsIG51bGwsIHtcbiAgICAgIGFzeW5jOiB0cnVlLFxuICAgICAgY2IsXG4gICAgfSk7XG4gIH1cblxuICBuZXdSZWNvcmRTeW5jKCkge1xuICAgIHJldHVybiB0aGlzLnBtLkV4ZWN1dGVNZXRob2QoJ0ludm9rZU1ldGhvZCcsICdOZXdSZWNvcmQnLCBudWxsLCBmYWxzZSk7XG4gIH1cblxuICB3cml0ZVJlY29yZChjYiwgY2JlcnIpIHtcbiAgICBsZXQgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHRoaXMuX3dyaXRlUmVjb3JkKCguLi5hcmdzKSA9PiB7XG4gICAgICAvLyBkbyB3ZSBhbHdheXMgaGF2ZSB0aHJlZSBpbnB1dCBhcmd1bWVudHMsIGFuZCB0aGUgdGhpcmQgYXJndW1lbnQgaXNcbiAgICAgIGlmIChhcmdzWzJdLkdldFByb3BlcnR5KCdTdGF0dXMnKSA9PT0gJ0NvbXBsZXRlZCcpIHtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVqZWN0KCk7XG4gICAgICB9XG4gICAgfSkpO1xuICAgIHByb21pc2UgPSB0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicgPyBwcm9taXNlLnRoZW4oY2IpIDogcHJvbWlzZTtcbiAgICBwcm9taXNlID0gdHlwZW9mIGNiZXJyID09PSAnZnVuY3Rpb24nID8gcHJvbWlzZS5jYXRjaChjYmVycikgOiBwcm9taXNlO1xuICAgIHJldHVybiBwcm9taXNlO1xuICB9XG5cbiAgX3dyaXRlUmVjb3JkKGNiKSB7XG4gICAgcmV0dXJuIHRoaXMucG0uRXhlY3V0ZU1ldGhvZCgnSW52b2tlTWV0aG9kJywgJ1dyaXRlUmVjb3JkJywgbnVsbCwge1xuICAgICAgYXN5bmM6IHRydWUsXG4gICAgICBjYixcbiAgICB9KTtcbiAgfVxuXG4gIHdyaXRlUmVjb3JkU3luYygpIHtcbiAgICByZXR1cm4gdGhpcy5wbS5FeGVjdXRlTWV0aG9kKCdJbnZva2VNZXRob2QnLCAnV3JpdGVSZWNvcmQnLCBudWxsLCBmYWxzZSk7XG4gIH1cblxuICBkZWxldGVSZWNvcmRTeW5jKCkge1xuICAgIHJldHVybiB0aGlzLnBtLkV4ZWN1dGVNZXRob2QoJ0ludm9rZU1ldGhvZCcsICdEZWxldGVSZWNvcmQnLCBudWxsLCBmYWxzZSk7XG4gIH1cblxuICB1bmRvUmVjb3JkU3luYygpIHtcbiAgICByZXR1cm4gdGhpcy5wbS5FeGVjdXRlTWV0aG9kKCdJbnZva2VNZXRob2QnLCAnVW5kb1JlY29yZCcsIG51bGwsIGZhbHNlKTtcbiAgfVxuXG4gIHNldENvbnRyb2xWYWx1ZShuYW1lLCB2YWx1ZSkge1xuICAgIC8vIFRPRE86IElmIHZhbHVlIGlzIG51bGwsIG5vdGhpbmcgaGFwcGVucywgc2hvdWxkIHdlIGNvbnZlcnQgbnVsbCB0byAnJz9cbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5fZ2V0Q29udHJvbChuYW1lKTtcbiAgICAvLyBUT0RPOiBDaGVjayBpZiBjb250cm9sIGlzIGZvdW5kXG4gICAgdmFsdWUgPSB0aGlzLl9nZXRWYWx1ZUZvckNvbnRyb2woY29udHJvbC5HZXRVSVR5cGUoKSwgdmFsdWUpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgLy8gbWF5YmUgY2hlY2sgaWYgdHlwZW9mIGFwcGxldC5TZXRDb250cm9sVmFsdWVCeU5hbWUgaXMgZnVuY3Rpb24gYW5kIHVzZSBpdCB3aGVuIGF2YWlsYWJsZT8gLSBub3QgZXhpc3RzIGluIDE0LnhcbiAgICAvLyBUT0RPOiBzaG91bGQgd2UgdXNlIFNldENlbGxWYWx1ZSBmb3IgbGlzdCBhcHBsZXRzP1xuICAgIHRoaXMucG0uT25Db250cm9sRXZlbnQodGhpcy5jb25zdHMuZ2V0KCdQSFlFVkVOVF9DT05UUk9MX0ZPQ1VTJyksIGNvbnRyb2wpO1xuICAgIGNvbnN0IHJldCA9IHRoaXMucG0uT25Db250cm9sRXZlbnQodGhpcy5jb25zdHMuZ2V0KCdQSFlFVkVOVF9DT05UUk9MX0JMVVInKSwgY29udHJvbCwgdmFsdWUpO1xuICAgIGlmICghcmV0KSB7XG4gICAgICBjb25zb2xlLmxvZyhgVmFsdWUgJHt2YWx1ZX0gd2FzIG5vdCBzZXQgZm9yICR7Y29udHJvbC5HZXROYW1lKCl9YCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgZ2V0RHluYW1pY0xPVihjb250cm9sTmFtZSkge1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLl9nZXRDb250cm9sKGNvbnRyb2xOYW1lKTtcbiAgICBjb25zdCBjb250cm9sSW5wdXROYW1lID0gY29udHJvbC5HZXRJbnB1dE5hbWUoKTtcbiAgICB0aGlzLmxvdltjb250cm9sSW5wdXROYW1lXSA9IHt9O1xuICAgIGNvbnN0IHBzID0gU2llYmVsQXBwLlNfQXBwLk5ld1Byb3BlcnR5U2V0KCk7XG4gICAgcHMuU2V0UHJvcGVydHkoJ1NXRUZpZWxkJywgY29udHJvbElucHV0TmFtZSk7XG4gICAgcHMuU2V0UHJvcGVydHkoJ1NXRUpJJywgZmFsc2UpO1xuICAgIHRoaXMuYXBwbGV0LlNldEFjdGl2ZUNvbnRyb2wobnVsbCk7IC8vIHRvIHByZXZlIFVwZGF0ZVBpY2tcbiAgICB0aGlzLmFwcGxldC5JbnZva2VNZXRob2QoJ0dldFF1aWNrUGlja0luZm8nLCBwcyk7XG4gICAgcmV0dXJuIHRoaXMubG92W2NvbnRyb2xJbnB1dE5hbWVdO1xuICB9XG5cbiAgZ2V0U3RhdGljTE9WKGNvbnRyb2xOYW1lKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuX2dldENvbnRyb2woY29udHJvbE5hbWUpO1xuICAgIGNvbnN0IHJldCA9IFtdO1xuICAgIGlmICgnMScgPT09IGNvbnRyb2wuSXNTdGF0aWNCb3VuZGVkKCkpIHtcbiAgICAgIGNvbnN0IGFyciA9IE4xOWJhc2VBcHBsZXQuR2V0U3RhdGljTE9WKGNvbnRyb2wuR2V0UmFkaW9Hcm91cFByb3BTZXQoKS5jaGlsZEFycmF5KTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHJldC5wdXNoKGFycltpXS5EaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgICByZXQuc29ydCgpO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgX2dldENvbnRyb2xWYWx1ZShjb250cm9sVWlUeXBlLCB2YWx1ZSkge1xuICAgIC8vIHRvZG86IHdoYXQgYWJvdXQgZGF0ZXRpbWU/XG4gICAgbGV0IHJldCA9IHZhbHVlO1xuICAgIGlmICh0aGlzLmNvbnN0cy5nZXQoJ1NXRV9DVFJMX0NIRUNLQk9YJykgPT09IGNvbnRyb2xVaVR5cGUpIHtcbiAgICAgIC8vIGNvbnZlcnQgWS9OL251bGwgLT4gdHJ1ZS9mYWxzZS9udWxsXG4gICAgICAvLyBkbyB3ZSBuZWVkIHRvIHNlbmQgbnVsbD9cbiAgICAgIHN3aXRjaCAodmFsdWUpIHtcbiAgICAgICAgY2FzZSAnWSc6XG4gICAgICAgICAgcmV0ID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnTic6XG4gICAgICAgICAgcmV0ID0gZmFsc2U7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIC8vIHRoaXMgaXMgYSB0ZW1wIG1ldGhvZCB0byBzdXBwb3J0IHRoZSBkZW1vIHdoZXJlXG4gIC8vIFNpZWJlbCBhbmQgY3VzdG9tIHJlbmRlcmVkIGFwcGxldCBjb2V4aXN0XG4gIF9nZXRGaWVsZFRvQ29udHJvbE1hcChfY29udHJvbHMpIHtcbiAgICBjb25zdCByZXQgPSB7fTtcbiAgICBjb25zdCBhcHBsZXRDb250cm9scyA9IHRoaXMuX3JldHVybkNvbnRyb2xzKCk7XG4gICAgY29uc3QgYXJyID0gT2JqZWN0LmtleXMoX2NvbnRyb2xzKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgY29udHJvbCA9IGFwcGxldENvbnRyb2xzW2FycltpXV07XG4gICAgICByZXRbY29udHJvbC5HZXRGaWVsZE5hbWUoKV0gPSB7XG4gICAgICAgIG5hbWU6IGNvbnRyb2wuR2V0TmFtZSgpLFxuICAgICAgICBpc1Bvc3RDaGFuZ2VzOiBjb250cm9sLklzUG9zdENoYW5nZXMoKSxcbiAgICAgICAgdWlUeXBlOiBjb250cm9sLkdldFVJVHlwZSgpLFxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIGdldEN1cnJlbnRSZWNvcmQocmF3KSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmdldFNlbGVjdGlvbigpO1xuICAgIC8vIHRvZG86IGNoZWNrIGlmIHJlY29yZCBleGlzdHNcbiAgICBpZiAocmF3KSB7XG4gICAgICByZXR1cm4gdGhpcy5wbS5HZXQoJ0dldFJhd1JlY29yZFNldCcpW2luZGV4XTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucG0uR2V0KCdHZXRSZWNvcmRTZXQnKVtpbmRleF07XG4gIH1cblxuICBjYWxjdWxhdGVDdXJyZW50UmVjb3JkU3RhdGUoKSB7XG4gICAgLy8gdG9kbzogZG8gd2UgbmVlZCB0byBkZWxldGUgcGVuZGluZ1xuICAgIC8vIDAgLSBObyByZWNvcmRzIGRpc3BsYXllZFxuICAgIC8vIDEgLSBSZWNvcmQgaXMgYmVpbmcgY3JlYXRlZFxuICAgIC8vIDIgLSBSZWNvcmQgaXMgYmVpbmcgZWRpdGVkXG4gICAgLy8gMyAtIElzIGluIHF1ZXJ5IG1vZGVcbiAgICAvLyA0IC0gUmVjb3JkIGlzIGRpc3BsYXllZCxcbiAgICAvLyA1IC0gUmVjb3JkIGlzIHJlYWQtb25seVxuXG4gICAgaWYgKHRoaXMuZ2V0U2VsZWN0aW9uKCkgPCAwKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgY29uc3QgYmMgPSB0aGlzLmFwcGxldC5HZXRCdXNDb21wKCk7XG4gICAgaWYgKGJjLklzSW5zZXJ0UGVuZGluZygpKSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9XG4gICAgaWYgKGJjLklzQ29tbWl0UGVuZGluZygpKSB7XG4gICAgICByZXR1cm4gMjtcbiAgICB9XG4gICAgaWYgKGJjLklzSW5RdWVyeVN0YXRlKCkpIHtcbiAgICAgIHJldHVybiAzO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuY2FuSW52b2tlTWV0aG9kKCdXcml0ZVJlY29yZCcpKSB7XG4gICAgICByZXR1cm4gNTtcbiAgICB9XG5cbiAgICByZXR1cm4gNDsgLy8gdGhpcyBpcyBhIGRlZmF1bHQgZmFsbGJhY2s7XG4gIH1cblxuICBnZXRDdXJyZW50UmVjb3JkTW9kZWwoX2NvbnRyb2xzLCBfbWV0aG9kcykge1xuICAgIGlmICghX2NvbnRyb2xzKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIF9jb250cm9scy5zdGF0ZSA9IHRoaXMuY2FsY3VsYXRlQ3VycmVudFJlY29yZFN0YXRlKCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBsZXQgb2JqID0ge307XG4gICAgaWYgKF9jb250cm9scy5zdGF0ZSA+IDApIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5nZXRTZWxlY3Rpb24oKTtcbiAgICAgIG9iaiA9IHRoaXMuZ2V0UmVjb3JkU2V0KClbaW5kZXhdO1xuICAgICAgX2NvbnRyb2xzLmlkID0gdGhpcy5nZXRSYXdSZWNvcmRTZXQoKVtpbmRleF0uSWQ7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB9XG4gICAgbGV0IGFyciA9IE9iamVjdC5rZXlzKF9jb250cm9scyk7XG4gICAgY29uc3QgYXBwbGV0Q29udHJvbHMgPSB0aGlzLl9yZXR1cm5Db250cm9scygpO1xuICAgIC8vIHBvcHVsYXRlIGNvbnRyb2xzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGNvbnRyb2wgPSBhcHBsZXRDb250cm9sc1thcnJbaV1dO1xuICAgICAgaWYgKHR5cGVvZiBjb250cm9sICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zdCBjb250cm9sTmFtZSA9IGNvbnRyb2wuR2V0TmFtZSgpO1xuICAgICAgICBjb25zdCBmaWVsZE5hbWUgPSBjb250cm9sLkdldEZpZWxkTmFtZSgpO1xuICAgICAgICBpZiAoX2NvbnRyb2xzLnN0YXRlID4gMCkge1xuICAgICAgICAgIF9jb250cm9sc1thcnJbaV1dID0geyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICAgICAgICB2YWx1ZTogdGhpcy5fZ2V0Q29udHJvbFZhbHVlKGNvbnRyb2wuR2V0VUlUeXBlKCksIG9ialtmaWVsZE5hbWVdKSxcbiAgICAgICAgICAgIHJlYWRvbmx5OiAhdGhpcy5wbS5FeGVjdXRlTWV0aG9kKCdDYW5VcGRhdGUnLCBjb250cm9sTmFtZSksXG4gICAgICAgICAgICBpc0xpbms6IHRoaXMucG0uRXhlY3V0ZU1ldGhvZCgnQ2FuTmF2aWdhdGUnLCBjb250cm9sTmFtZSksXG4gICAgICAgICAgICBsYWJlbDogY29udHJvbC5HZXREaXNwbGF5TmFtZSgpLFxuICAgICAgICAgICAgaXNQb3N0Q2hhbmdlczogY29udHJvbC5Jc1Bvc3RDaGFuZ2VzKCksXG4gICAgICAgICAgICByZXF1aXJlZDogdGhpcy5faXNSZXF1aXJlZChjb250cm9sLkdldElucHV0TmFtZSgpKSxcbiAgICAgICAgICAgIG1heFNpemU6IGNvbnRyb2wuR2V0TWF4U2l6ZSgpLFxuICAgICAgICAgICAgZmllbGROYW1lLFxuICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7IC8vIG5vIHJlY29yZCBkaXNwbGF5ZWRcbiAgICAgICAgICBfY29udHJvbHNbYXJyW2ldXSA9IHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICAgICAgdmFsdWU6ICcnLFxuICAgICAgICAgICAgcmVhZG9ubHk6IHRydWUsXG4gICAgICAgICAgICBpc0xpbms6IGZhbHNlLFxuICAgICAgICAgICAgbGFiZWw6IGNvbnRyb2wuR2V0RGlzcGxheU5hbWUoKSxcbiAgICAgICAgICAgIGlzUG9zdENoYW5nZXM6IGNvbnRyb2wuSXNQb3N0Q2hhbmdlcygpLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRoaXMuX2lzUmVxdWlyZWQoY29udHJvbC5HZXRJbnB1dE5hbWUoKSksXG4gICAgICAgICAgICBtYXhTaXplOiBjb250cm9sLkdldE1heFNpemUoKSxcbiAgICAgICAgICAgIGZpZWxkTmFtZSxcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC8vIHBvcHVsYXRlIG1ldGhvZHNcbiAgICBpZiAoX21ldGhvZHMpIHtcbiAgICAgIGFyciA9IE9iamVjdC5rZXlzKF9tZXRob2RzKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIF9tZXRob2RzW2FycltpXV0gPSB0aGlzLmNhbkludm9rZU1ldGhvZChhcnJbaV0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgX2dldENvbnRyb2xJbnB1dE5hbWVGb3JJZFF1ZXJ5KCkge1xuICAgIGNvbnN0IGFwcGxldENvbnRyb2xzID0gdGhpcy5fcmV0dXJuQ29udHJvbHMoKTtcbiAgICBjb25zdCBhcnIgPSBPYmplY3Qua2V5cyhhcHBsZXRDb250cm9scyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGNvbnRyb2wgPSBhcHBsZXRDb250cm9sc1thcnJbaV1dO1xuICAgICAgY29uc3QgY29udHJvbFVpVHlwZSA9IGNvbnRyb2wuR2V0VUlUeXBlKCk7XG4gICAgICBpZiAoIXRoaXMuX2lzU2tpcENvbnRyb2woY29udHJvbFVpVHlwZSkpIHtcbiAgICAgICAgLy8gc2tpcHBpbmcgYWxzbyBKQ2hlY2tib3hcbiAgICAgICAgLy8gdG9kbzogY2hlY2sgZG8gd2UgbmVlZCB0byBza2lwIGFsc28gZGF0ZT9cbiAgICAgICAgaWYgKGNvbnRyb2xVaVR5cGUgIT09IHRoaXMuY29uc3RzLmdldCgnU1dFX0NUUkxfQ0hFQ0tCT1gnKSkge1xuICAgICAgICAgIHJldHVybiBjb250cm9sLkdldElucHV0TmFtZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcignY2Fubm90IGZpbmQgYSBjb250cm9sIGZvciBxdWVyeScpO1xuICB9XG5cbiAgX25ld1F1ZXJ5KCkge1xuICAgIHJldHVybiB0aGlzLnBtLkV4ZWN1dGVNZXRob2QoJ0ludm9rZU1ldGhvZCcsICdOZXdRdWVyeScsIG51bGwsIGZhbHNlKTtcbiAgfVxuXG4gIHF1ZXJ5QnlJZFN5bmMocm93SWQpIHtcbiAgICB0aGlzLmFwcGxldC5JbnZva2VNZXRob2QoJ05ld1F1ZXJ5Jyk7XG4gICAgdGhpcy5hcHBsZXQuR2V0QnVzQ29tcCgpLlNldEZpZWxkVmFsdWUoJ0lkJywgcm93SWQpO1xuICAgIHRoaXMuYXBwbGV0Lkludm9rZU1ldGhvZCgnRXhlY3V0ZVF1ZXJ5Jyk7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UmVjb3JkU2V0KCkubGVuZ3RoO1xuICB9XG5cbiAgcXVlcnlCeUlkKHJvd0lkLCBjYikge1xuICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHRoaXMuX3F1ZXJ5QnlJZChyb3dJZCwgcmVzb2x2ZSkpO1xuICAgIGNvbnN0IHJldCA9IHByb21pc2UudGhlbigoKSA9PiB0aGlzLmdldFJlY29yZFNldCgpLmxlbmd0aCk7XG4gICAgcmV0dXJuIHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJyA/IHJldC50aGVuKGNiKSA6IHJldDtcbiAgfVxuXG4gIF9xdWVyeUJ5SWQocm93SWQsIGNiKSB7XG4gICAgLy8gbWF5YmUgY2hlY2sgaWYgaXQgaXMgYWxyZWFkeSBpbiBxdWVyeSBtb2RlIC8gY2FuY2VsIHRoZSBxdWVyeVxuICAgIHRoaXMuX25ld1F1ZXJ5KCk7XG5cbiAgICBjb25zdCBtZXRob2QgPSAnRXhlY3V0ZVF1ZXJ5JztcbiAgICBjb25zdCBhaSA9IHtcbiAgICAgIHNjb3BlOiB0aGlzLFxuICAgICAgYXN5bmM6IHRydWUsXG4gICAgICBtYXNrOiBmYWxzZSxcbiAgICAgIHNlbGZidXN5OiBmYWxzZSxcbiAgICAgIGFyZ3M6IFtdLFxuICAgIH07XG4gICAgaWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYWkuY2IgPSBjYjtcbiAgICB9XG5cbiAgICBjb25zdCBwc091dHB1dCA9IFNpZWJlbEFwcC5TX0FwcC5OZXdQcm9wZXJ0eVNldCgpO1xuICAgIGNvbnN0IHBzSW5wdXQgPSBTaWViZWxBcHAuU19BcHAuTmV3UHJvcGVydHlTZXQoKTtcbiAgICBwc0lucHV0LlNldFByb3BlcnR5KHRoaXMuX2dldENvbnRyb2xJbnB1dE5hbWVGb3JJZFF1ZXJ5KCksIGBJZD1cIiR7cm93SWR9XCJgKTtcblxuICAgIGFpLmFyZ3MucHVzaChtZXRob2QpO1xuICAgIGFpLmFyZ3MucHVzaChwc0lucHV0LkNsb25lKCkpO1xuXG4gICAgcmV0dXJuIHRoaXMuYXBwbGV0LkNhbGxTZXJ2ZXJBcHBsZXQobWV0aG9kLCBwc0lucHV0LCBwc091dHB1dCwgYWkpO1xuICB9XG5cbiAgcXVlcnkocGFyYW1zLCBjYikge1xuICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHRoaXMuX3F1ZXJ5KHBhcmFtcywgcmVzb2x2ZSkpO1xuICAgIGNvbnN0IHJldCA9IHByb21pc2UudGhlbigoKSA9PiB0aGlzLmdldFJlY29yZFNldCgpLmxlbmd0aCk7XG4gICAgcmV0dXJuIHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJyA/IHJldC50aGVuKGNiKSA6IHJldDtcbiAgfVxuXG4gIF9xdWVyeShwYXJhbXMsIGNiKSB7XG4gICAgLy8gbWF5YmUgY2hlY2sgaWYgaXQgaXMgYWxyZWFkeSBpbiBxdWVyeSBtb2RlIC8gY2FuY2VsIHRoZSBxdWVyeVxuICAgIHRoaXMuX25ld1F1ZXJ5KCk7XG5cbiAgICBjb25zdCBtZXRob2QgPSAnRXhlY3V0ZVF1ZXJ5JztcbiAgICBjb25zdCBhaSA9IHtcbiAgICAgIHNjb3BlOiB0aGlzLFxuICAgICAgYXN5bmM6IHRydWUsXG4gICAgICBtYXNrOiBmYWxzZSxcbiAgICAgIHNlbGZidXN5OiBmYWxzZSxcbiAgICAgIGFyZ3M6IFtdLFxuICAgIH07XG4gICAgaWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYWkuY2IgPSBjYjtcbiAgICB9XG5cbiAgICBjb25zdCBwc091dHB1dCA9IFNpZWJlbEFwcC5TX0FwcC5OZXdQcm9wZXJ0eVNldCgpO1xuICAgIGNvbnN0IHBzSW5wdXQgPSBTaWViZWxBcHAuU19BcHAuTmV3UHJvcGVydHlTZXQoKTtcbiAgICBjb25zdCBhcnIgPSBPYmplY3Qua2V5cyhwYXJhbXMpO1xuICAgIGNvbnN0IF9jb250cm9scyA9IHRoaXMuX3JldHVybkNvbnRyb2xzKCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGNvbnRyb2wgPSBfY29udHJvbHNbYXJyW2ldXTtcbiAgICAgIHBzSW5wdXQuU2V0UHJvcGVydHkoY29udHJvbC5HZXRJbnB1dE5hbWUoKSwgdGhpcy5fZ2V0VmFsdWVGb3JDb250cm9sKGNvbnRyb2wuR2V0VUlUeXBlKCksIHBhcmFtc1thcnJbaV1dKSk7XG4gICAgfVxuICAgIGFpLmFyZ3MucHVzaChtZXRob2QpO1xuICAgIGFpLmFyZ3MucHVzaChwc0lucHV0LkNsb25lKCkpO1xuXG4gICAgcmV0dXJuIHRoaXMuYXBwbGV0LkNhbGxTZXJ2ZXJBcHBsZXQobWV0aG9kLCBwc0lucHV0LCBwc091dHB1dCwgYWkpO1xuICB9XG5cbiAgc3RhdGljIFJlcXVlcnkobmFtZSkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSBTaWViZWxBcHAuU19BcHAuR2V0U2VydmljZSgnTjE5IEJTJyk7XG4gICAgaWYgKHNlcnZpY2UpIHtcbiAgICAgIGNvbnN0IGluUHJvcFNldCA9IFNpZWJlbEFwcC5TX0FwcC5OZXdQcm9wZXJ0eVNldCgpO1xuICAgICAgaW5Qcm9wU2V0LlNldFByb3BlcnR5KCduYW1lJywgbmFtZSk7XG4gICAgICBzZXJ2aWNlLkludm9rZU1ldGhvZCgnUmVxdWVyeScsIGluUHJvcFNldCwge30pO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBSZWZyZXNoKG5hbWUpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gU2llYmVsQXBwLlNfQXBwLkdldFNlcnZpY2UoJ04xOSBCUycpO1xuICAgIGlmIChzZXJ2aWNlKSB7XG4gICAgICBjb25zdCBpblByb3BTZXQgPSBTaWViZWxBcHAuU19BcHAuTmV3UHJvcGVydHlTZXQoKTtcbiAgICAgIGluUHJvcFNldC5TZXRQcm9wZXJ0eSgnbmFtZScsIG5hbWUpO1xuICAgICAgc2VydmljZS5JbnZva2VNZXRob2QoJ1JlZnJlc2gnLCBpblByb3BTZXQsIHt9KTtcbiAgICB9XG4gIH1cblxuICBnZXRNVkYoaWRzLCBmaWVsZHMsIHVzZUFjdGl2ZUJPKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHRoaXMuX2dldE1WRihpZHMsIGZpZWxkcywgdXNlQWN0aXZlQk8sIHJlc29sdmUsIHJlamVjdCkpO1xuICB9XG5cbiAgX2dldEZpZWxkTmFtZUZvckNvbnRyb2woY29udHJvbE5hbWUpIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5fZ2V0Q29udHJvbChjb250cm9sTmFtZSk7XG4gICAgLy8gaWYgbm90IGZvdW5kLCB0aGUgaW5wdXQgdmFsdWUgaXMgcmV0dXJuZWRcbiAgICBpZiAoY29udHJvbCkge1xuICAgICAgcmV0dXJuIGNvbnRyb2wuR2V0RmllbGROYW1lKCk7XG4gICAgfVxuICAgIHJldHVybiBjb250cm9sTmFtZTtcbiAgfVxuXG4gIF9nZXRNVkYoaWRzLCBmaWVsZHMsIHVzZUFjdGl2ZUJPLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICBjb25zdCBhcnIgPSBPYmplY3QuZW50cmllcyhmaWVsZHMpO1xuICAgIGNvbnN0IHBzSW5wdXRzID0gU2llYmVsQXBwLlNfQXBwLk5ld1Byb3BlcnR5U2V0KCk7XG4gICAgcHNJbnB1dHMuU2V0UHJvcGVydHkoJ0JPJywgU2llYmVsQXBwLlNfQXBwLkdldEFjdGl2ZUJ1c09iaigpLkdldE5hbWUoKSk7XG4gICAgcHNJbnB1dHMuU2V0UHJvcGVydHkoJ0JDJywgdGhpcy5wbS5HZXQoJ0dldEJ1c0NvbXAnKS5HZXROYW1lKCkpO1xuICAgIHBzSW5wdXRzLlNldFByb3BlcnR5KCdVc2VBY3RpdmVCTycsIHVzZUFjdGl2ZUJPID8gJ1knIDogJ04nKTtcbiAgICBwc0lucHV0cy5TZXRQcm9wZXJ0eSgnSUQnLCBpZHMuam9pbignLCcpKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgcHMgPSBTaWViZWxBcHAuU19BcHAuTmV3UHJvcGVydHlTZXQoKTtcbiAgICAgIHBzLlNldFR5cGUodGhpcy5fZ2V0RmllbGROYW1lRm9yQ29udHJvbChhcnJbaV1bMF0pKTtcbiAgICAgIHBzLlNldFByb3BlcnR5KCdGaWVsZHMnLCBhcnJbaV1bMV0uam9pbignLCcpKTtcbiAgICAgIHBzSW5wdXRzLkFkZENoaWxkKHBzLkNsb25lKCkpO1xuICAgIH1cbiAgICBjb25zdCBicyA9IFNpZWJlbEFwcC5TX0FwcC5HZXRTZXJ2aWNlKCdOMTkgQlMnKTtcbiAgICBjb25zdCBhaSA9IHtcbiAgICAgIGFzeW5jOiB0cnVlLFxuICAgICAgc2VsZmJ1c3k6IHRydWUsXG4gICAgICBzY29wZTogdGhpcyxcbiAgICAgIGVycmNiOiAoKSA9PiByZWplY3QoKSxcbiAgICAgIGNiOiAobWV0aG9kTmFtZSwgSW5wdXRzLCBwc091dHB1dHMpID0+IHtcbiAgICAgICAgY29uc3QgYm9vbE9iamVjdCA9IG5ldyBTaWViZWxBcHAuU19BcHAuRGF0dW1Cb29sT2JqZWN0KCk7XG4gICAgICAgIGNvbnN0IHsgY2hpbGRBcnJheSB9ID0gcHNPdXRwdXRzLkdldENoaWxkQnlUeXBlKCdSZXN1bHRTZXQnKTtcbiAgICAgICAgY29uc3QgcmV0ID0ge307XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRBcnJheS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIHJldFtjaGlsZEFycmF5W2ldLkdldFR5cGUoKV0gPSB7fTtcbiAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNoaWxkQXJyYXlbaV0uY2hpbGRBcnJheS5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICAgICAgY29uc3QgZWwgPSBjaGlsZEFycmF5W2ldLmNoaWxkQXJyYXlbal07XG4gICAgICAgICAgICByZXRbY2hpbGRBcnJheVtpXS5HZXRUeXBlKCldW2VsLkdldFR5cGUoKV0gPSBlbC5jaGlsZEFycmF5Lm1hcCgocmVjKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHByaW1hcnkgPSByZWMucHJvcEFycmF5WydTU0EgUHJpbWFyeSBGaWVsZCddO1xuICAgICAgICAgICAgICBib29sT2JqZWN0LlNldEFzU3RyaW5nKHByaW1hcnkpO1xuICAgICAgICAgICAgICByZWMucHJvcEFycmF5WydTU0EgUHJpbWFyeSBGaWVsZCddID0gYm9vbE9iamVjdC5HZXRWYWx1ZSgpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCByZWMucHJvcEFycmF5KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXNvbHZlKHJldCk7XG4gICAgICB9LFxuICAgIH07XG4gICAgcmV0dXJuIGJzLkludm9rZU1ldGhvZCgnUmV0dXJuTVZHRmllbGRzJywgcHNJbnB1dHMsIGFpKTtcbiAgfVxuXG4gIHNhdmVQcmVmKG5hbWUsIHZhbHVlKSB7XG4gICAgLy8gdmFsdWUgaXMgYSBzdHJpbmdcbiAgICAvLyB2YWx1ZSBpcyBib3VuZCB0byBhcHBsZXQgYW5kIHZpZXdcbiAgICBjb25zdCBwc0lucHV0ID0gU2llYmVsQXBwLlNfQXBwLk5ld1Byb3BlcnR5U2V0KCk7XG4gICAgcHNJbnB1dC5TZXRQcm9wZXJ0eSgnS2V5JywgbmFtZSk7XG4gICAgcHNJbnB1dC5TZXRQcm9wZXJ0eShuYW1lLCB2YWx1ZSk7XG4gICAgdGhpcy5wbS5PbkNvbnRyb2xFdmVudChcbiAgICAgIHRoaXMuY29uc3RzLmdldCgnUEhZRVZFTlRfSU5WT0tFX0NPTlRST0wnKSxcbiAgICAgIHRoaXMucG0uR2V0KHRoaXMuY29uc3RzLmdldCgnU1dFX01USERfVVBEQVRFX1VTRVJfUFJFRicpKSxcbiAgICAgIHBzSW5wdXQsXG4gICAgKTtcbiAgICByZXR1cm4gdGhpcy5wbS5TZXRQcm9wZXJ0eShuYW1lLCB2YWx1ZSk7XG4gIH1cblxuICByZWFkUHJlZihuYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMucG0uR2V0KG5hbWUpO1xuICB9XG5cbiAgX3JldHJpZXZlRGF0YShhbW91bnQpIHsgLy8gdGVtcCBtZXRob2Q/XG4gICAgY29uc3QgZGF0YSA9IG5ldyBNYXAoKTtcblxuICAgIHdoaWxlIChkYXRhLnNpemUgPCBhbW91bnQpIHtcbiAgICAgIGNvbnN0IHRlbXAgPSB0aGlzLmdldFJhd1JlY29yZFNldCgpO1xuXG4gICAgICAvLyBhdm9pZCB0aGUgZHVwbGljYXRlc1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZW1wLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGRhdGEuc2V0KHRlbXBbaV0uSWQsIHRlbXBbaV0pO1xuICAgICAgfVxuXG4gICAgICAvLyB3ZSBhcmUgdXNpbmcgY2FuSW52b2tlTWV0aG9kLCBhcyBpbiAxNi4wMCBuZXh0UmVjb3JkU2V0IGFsd2F5cyByZXR1cm5zIHVuZGVmaW5lZFxuICAgICAgaWYgKCF0aGlzLmNhbkludm9rZU1ldGhvZCgnR290b05leHRTZXQnKSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgdGhpcy5uZXh0UmVjb3JkU2V0KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGE6IFsuLi5kYXRhLnZhbHVlcygpXSxcbiAgICAgIGhhc05leHQ6IHRoaXMuY2FuSW52b2tlTWV0aG9kKCdHb3RvTmV4dFNldCcpLFxuICAgIH07XG4gIH1cblxuICBfc2V0RmllbGRWYWx1ZShuYW1lLCB2YWx1ZSkge1xuICAgIHRoaXMuYXBwbGV0LkdldEJ1c0NvbXAoKS5TZXRGaWVsZFZhbHVlKG5hbWUsIHZhbHVlKTtcbiAgICByZXR1cm4gdGhpcy5hcHBsZXQuSW52b2tlTWV0aG9kKCdXcml0ZVJlY29yZCcpO1xuICB9XG5cbiAgZ2V0RmllbGRUb0NvbnRyb2xNYXAoKSB7XG4gICAgdGhpcy5maWVsZFRvQ29udHJvbE1hcCA9IHsgSWQ6ICdJZCcgfTtcbiAgICBjb25zdCBhcHBsZXRDb250cm9scyA9IHRoaXMuX3JldHVybkNvbnRyb2xzKCk7XG4gICAgY29uc3QgYXJyID0gT2JqZWN0LmtleXMoYXBwbGV0Q29udHJvbHMpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBjb250cm9sID0gYXBwbGV0Q29udHJvbHNbYXJyW2ldXTtcbiAgICAgIGNvbnN0IGZpZWxkID0gY29udHJvbC5HZXRGaWVsZE5hbWUoKTtcbiAgICAgIGlmIChmaWVsZCkge1xuICAgICAgICB0aGlzLmZpZWxkVG9Db250cm9sTWFwW2ZpZWxkXSA9IGFycltpXTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZmllbGRUb0NvbnRyb2xNYXA7XG4gIH1cblxuICBnZXRDb250cm9sc1JlY29yZFNldCgpIHtcbiAgICBpZiAoIXRoaXMuZmllbGRUb0NvbnRyb2xNYXApIHtcbiAgICAgIHRoaXMuZ2V0RmllbGRUb0NvbnRyb2xNYXAoKTtcbiAgICB9XG4gICAgLy8gdXNlZCBzbGljZSB0byBhdm9pZCBtb2RpZmljYXRpb24gb2YgdGhlIHJlY29yZCBzZXRcbiAgICBjb25zdCByZXQgPSB0aGlzLmdldFJlY29yZFNldCgpLnNsaWNlKCk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJldC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgcmV0W2ldID0gT2JqZWN0LmtleXMocmV0W2ldKS5maWx0ZXIoZWwgPT4gdGhpcy5maWVsZFRvQ29udHJvbE1hcFtlbF0pLnJlZHVjZSgoYWNjLCBlbCkgPT4gKHtcbiAgICAgICAgLi4uYWNjLFxuICAgICAgICAuLi57IFt0aGlzLmZpZWxkVG9Db250cm9sTWFwW2VsXV06IHJldFtpXVtlbF0gfSxcbiAgICAgIH0pLCB7fSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJldDtcbiAgfVxufVxuIiwiaW1wb3J0IE4xOWJhc2VBcHBsZXQgZnJvbSAnLi9uMTliYXNlQXBwbGV0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTjE5cG9wdXBBcHBsZXQgZXh0ZW5kcyBOMTliYXNlQXBwbGV0IHtcbiAgY29uc3RydWN0b3Ioc2V0dGluZ3MpIHtcbiAgICBzdXBlcihzZXR0aW5ncyk7XG4gICAgY29uc29sZS5sb2coYCR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfSBzdGFydGVkLi4uYCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuXG4gICAgaWYgKHRoaXMuaXNMaXN0QXBwbGV0KSB7XG4gICAgICB0aGlzLnBtLkdldFJlbmRlcmVyKCkucmVzaXplID0gKCkgPT4gMDtcbiAgICAgIHRoaXMucG0uR2V0UmVuZGVyZXIoKS5HZXRTZWxlY3RlZFJvdyA9ICgpID0+IDA7XG4gICAgfVxuICB9XG5cbiAgcGlja1JlY29yZCgpIHtcbiAgICAvLyB0b2RvIDogY2hlY2sgQ2FuSW5va2VNZXRob2QgYW5kL29yIGlzIGl0IHBpY2tcbiAgICByZXR1cm4gdGhpcy5wbS5FeGVjdXRlTWV0aG9kKCdJbnZva2VNZXRob2QnLCAnUGlja1JlY29yZCcpO1xuICB9XG5cbiAgZGVsZXRlUmVjb3JkcyhjYikge1xuICAgIC8vIG1ldGhvZCBpcyBub3QgYWxsb3dlZCB0byBkZWxldGUgdGhlIHByaW1hcnlcbiAgICAvLyAgaW4gdGhpcyBjYXNlIGl0IHJldHVybnMgXCJNZXRob2QgRGVsZXRlUmVjb3JkcyBpcyBub3QgYWxsb3dlZCBoZXJlXCIgU0JMLVVJRi0wMDM0OFxuICAgIC8vIHRvZG86IGNoZWNrIGNhbkludm9rZU1ldGhvZCBhbmQvb3IgaXMgaXQgTVZHXG4gICAgY29uc3QgcmV0ID0gdGhpcy5wbS5FeGVjdXRlTWV0aG9kKCdJbnZva2VNZXRob2QnLCAnRGVsZXRlUmVjb3JkcycpO1xuICAgIGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNiKCk7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICBhZGRSZWNvcmRzKGNiKSB7XG4gICAgLy8gdG9kbzogY2hlY2sgY2FuSW52b2tlTWV0aG9kIGFuZC9vciBpcyBpdCBNVkcuIGFuZCBpZiB3ZSBoYXZlIGEgcmVjb3JkIGluIGFzc29jP1xuICAgIGNvbnN0IHJldCA9IHRoaXMucG0uRXhlY3V0ZU1ldGhvZCgnSW52b2tlTWV0aG9kJywgJ0FkZFJlY29yZHMnKTtcbiAgICBpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjYigpO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgX2ZpcnN0UmVjb3JkKCkgeyAvLyB0ZW1wIG1ldGhvZCwgYXNzdW1lcyB0aGF0IG5vIHNjcm9sbGluZyBoYXBwZW5lZFxuICAgIGlmICh0aGlzLmlzTGlzdEFwcGxldCkge1xuICAgICAgaWYgKHRoaXMuZ2V0U2VsZWN0aW9uKCkgIT09IDApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb25PblJvdygwKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiIsImltcG9ydCBOMTlwb3B1cEFwcGxldCBmcm9tICcuL24xOXBvcHVwQXBwbGV0JztcblxuY29uc3Qgc2luZ2xldG9uID0gU3ltYm9sKCdzaW5nbGV0b24nKTtcbmNvbnN0IHNpbmdsZXRvbkVuZm9yY2VyID0gU3ltYm9sKCdzaW5nbGV0b25FbmZvcmNlcicpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOMTlwb3B1cENvbnRyb2xsZXIge1xuICBzdGF0aWMgZ2V0IGluc3RhbmNlKCkge1xuICAgIGlmICghdGhpc1tzaW5nbGV0b25dKSB7XG4gICAgICB0aGlzW3NpbmdsZXRvbl0gPSBuZXcgTjE5cG9wdXBDb250cm9sbGVyKHNpbmdsZXRvbkVuZm9yY2VyKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXNbc2luZ2xldG9uXTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGVuZm9yY2VyKSB7XG4gICAgaWYgKGVuZm9yY2VyICE9PSBzaW5nbGV0b25FbmZvcmNlcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnN0YW50aWF0aW9uIGZhaWxlZDogdXNlIFNpbmdsZXRvbi5nZXRJbnN0YW5jZSgpIGluc3RlYWQgb2YgbmV3LicpO1xuICAgIH1cbiAgICB0aGlzLmNvbnN0cyA9IFNpZWJlbEpTLkRlcGVuZGVuY3koJ1NpZWJlbEFwcC5Db25zdGFudHMnKTtcbiAgICB0aGlzLmlzUG9wdXBIaWRkZW4gPSBmYWxzZTtcbiAgICB0aGlzLnJlc29sdmVQcm9taXNlID0gbnVsbDtcbiAgICB0aGlzLnBvcHVwQXBwbGV0TjE5ID0gbnVsbDtcbiAgICB0aGlzLmFzc29jQXBwbGV0TjE5ID0gbnVsbDtcblxuICAgIGNvbnNvbGUubG9nKGAke3RoaXMuY29uc3RydWN0b3IubmFtZX0gc3RhcnRlZC4uLmApOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcblxuICAgIC8vIGl0IHdpbGwgYmUgYSBzaW5nbGV0b24sIHNvIHRoZXJlIGlzIG5vIGNsZWFudXBcbiAgICB0aGlzLk4xOXByb2Nlc3NOZXdQb3B1cCA9IFNpZWJlbEFwcC5TX0FwcC5Qcm9jZXNzTmV3UG9wdXA7XG4gICAgU2llYmVsQXBwLlNfQXBwLlByb2Nlc3NOZXdQb3B1cCA9IChwcykgPT4ge1xuICAgICAgbGV0IHJldDtcbiAgICAgIGlmICh0aGlzLmlzUG9wdXBIaWRkZW4pIHtcbiAgICAgICAgcmV0ID0gdGhpcy5wcm9jZXNzTmV3UG9wdXAocHMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0ID0gdGhpcy5OMTlwcm9jZXNzTmV3UG9wdXAuY2FsbChTaWViZWxBcHAuU19BcHAsIHBzKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXQ7XG4gICAgfTtcblxuICAgIHRoaXMuTjE5dmlld0xvYWRlZCA9IFNpZWJlbEFwcC5jb250ZW50VXBkYXRlci52aWV3TG9hZGVkO1xuICAgIFNpZWJlbEFwcC5jb250ZW50VXBkYXRlci52aWV3TG9hZGVkID0gKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IHJldCA9IHRoaXMuTjE5dmlld0xvYWRlZC5jYWxsKFNpZWJlbEFwcC5jb250ZW50VXBkYXRlciwgLi4uYXJncyk7XG4gICAgICBpZiAodHlwZW9mIHRoaXMucmVzb2x2ZVByb21pc2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gdG9kbzogdXNlIGhlcmUgdGhlIHByb3BlcnRpZXMgc2V0IG9uIHByb21pc2VSZXNvbHZpbmc/XG4gICAgICAgIGNvbnN0IHsgYXBwbGV0TmFtZSB9ID0gTjE5cG9wdXBDb250cm9sbGVyLklzUG9wdXBPcGVuKCk7XG4gICAgICAgIGlmICghYXBwbGV0TmFtZSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignT3BlbiBBcHBsZXQgTmFtZSBpcyBub3QgZm91bmQgaW4gcmVzb2x2ZVByb21pc2UnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhcHBsZXQgPSBOMTlwb3B1cENvbnRyb2xsZXIuR2V0UG9wdXBBcHBsZXQoYXBwbGV0TmFtZSk7XG4gICAgICAgIGNvbnN0IHBtID0gYXBwbGV0LkdldFBNb2RlbCgpO1xuICAgICAgICAvLyB0b2RvOiBhdm9pZCB0aGlzIGNpcmN1bGFyaXR5XG4gICAgICAgIHRoaXMucG9wdXBBcHBsZXROMTkgPSBuZXcgTjE5cG9wdXBBcHBsZXQoeyBwbSB9KTsgLy8gdG9kbyA6IHNwbGl0IE4xOUhlbHBlciBpbnRvIDIgY2xhc3Nlc1xuICAgICAgICBjb25zdCBvYmogPSB7IGFwcGxldE5hbWUsIHBvcHVwQXBwbGV0TjE5OiB0aGlzLnBvcHVwQXBwbGV0TjE5IH07XG4gICAgICAgIC8vIGNoZWNrIGlmIHdlIGhhdmUgYXNzb2NcbiAgICAgICAgLy8gd2UgYXNzdW1lIGl0IGlzIGFsd2F5cyBhc3NvYyBhcHBsZXQsIGJ1dCB3aGF0IGFib3V0IG9wZW5pbmcgcG9wdXAgb24gdGhlIHRvcCBvZiBhbm90aGVyIC0gbm90IHRlc3RlZCBpdFxuICAgICAgICBjb25zdCBhc3NvY0FwcGxldCA9IGFwcGxldC5HZXRQb3B1cEFwcGxldCgpO1xuICAgICAgICBpZiAoYXNzb2NBcHBsZXQpIHtcbiAgICAgICAgICB0aGlzLmFzc29jQXBwbGV0TjE5ID0gbmV3IE4xOXBvcHVwQXBwbGV0KHsgcG06IGFzc29jQXBwbGV0LkdldFBNb2RlbCgpIH0pO1xuICAgICAgICAgIG9iai5hc3NvY0FwcGxldE4xOSA9IHRoaXMuYXNzb2NBcHBsZXROMTk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZXNvbHZlUHJvbWlzZShvYmopO1xuICAgICAgICB0aGlzLnJlc29sdmVQcm9taXNlID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXQ7XG4gICAgfTtcbiAgfVxuXG4gIGNhbk9wZW5Qb3B1cCgpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMucmVzb2x2ZVByb21pc2UgIT09ICdmdW5jdGlvbic7XG4gIH1cblxuICBwcm9jZXNzTmV3UG9wdXAocHMpIHtcbiAgICBTaWViZWxBcHAuU19BcHAuU2V0U2hvd05ld1BhZ2UoITApO1xuICAgIGNvbnN0IHBvcHVwUE0gPSBTaWViZWxBcHAuU19BcHAuR2V0UG9wdXBQTSgpO1xuXG4gICAgcG9wdXBQTS5TZXRQcm9wZXJ0eSgnQ2FuUHJvY2Vzc0xheW91dCcsICExKTtcbiAgICBwb3B1cFBNLlNldFByb3BlcnR5KCdpc1BvcHVwUGljaycsIGZhbHNlKTtcbiAgICBwb3B1cFBNLlNldFByb3BlcnR5KCdpc1BvcHVwTVZHQXNzb2MnLCBmYWxzZSk7XG4gICAgcG9wdXBQTS5TZXRQcm9wZXJ0eSgnaXNQb3B1cE1WR1NlbGVjdGVkJywgZmFsc2UpO1xuICAgIHBvcHVwUE0uU2V0UHJvcGVydHkoJ2lzUG9wdXBBc3NvYycsIGZhbHNlKTtcbiAgICBwb3B1cFBNLlNldFByb3BlcnR5KCdjdXJyUG9wdXBzJywgW10pO1xuICAgIHBvcHVwUE0uU2V0UHJvcGVydHkoJ2lzU0lQb3B1cCcsIHBzLkdldFByb3BlcnR5KHRoaXMuY29uc3RzLmdldCgnU1dFX0lTX1NJX1BPUFVQJykpKTtcbiAgICBwb3B1cFBNLlNldFByb3BlcnR5KCdpc1ByZXZQb3B1cFZpc2libGUnLCAhMSk7XG5cbiAgICBpZiAoIXBvcHVwUE0uR2V0UmVuZGVyZXIoKSkge1xuICAgICAgcG9wdXBQTS5TZXR1cCgpO1xuICAgIH1cblxuICAgIGNvbnN0IGFjdGl2ZVZpZXcgPSBTaWViZWxBcHAuU19BcHAuR2V0QWN0aXZlVmlldygpO1xuICAgIGlmIChhY3RpdmVWaWV3KSB7XG4gICAgICBjb25zdCBhY3RpdmVBcHBsZXQgPSBhY3RpdmVWaWV3LkdldEFjdGl2ZUFwcGxldCgpO1xuICAgICAgaWYgKGFjdGl2ZUFwcGxldCkge1xuICAgICAgICBhY3RpdmVWaWV3LlNldEFjdGl2ZUFwcGxldEJlZm9yZVBvcHVwKGFjdGl2ZUFwcGxldCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcG9wdXBQTS5BZGRQcm9wZXJ0eSgnc3RhdGUnLCAndmlzaWJsZScpOyAvLyB0b2RvOiB3ZSBuZWVkIGFsc28gdG8gcmVzdG9yZSB0aGUgUE1cblxuICAgIGxldCB1cmwgPSBwcy5HZXRQcm9wZXJ0eSgnVVJMJyk7XG4gICAgdXJsID0gU2llYmVsQXBwLlNfQXBwLkdldFBhZ2VVUkwoKSArIHVybC5zcGxpdCgnc3RhcnQuc3dlJylbMV07XG4gICAgcG9wdXBQTS5TZXRQcm9wZXJ0eSgndXJsJywgdXJsKTtcblxuICAgIHJldHVybiAncmVmcmVzaHBvcHVwJztcbiAgfVxuXG4gIC8vIHN0YXRpYyBSZUluaXRQb3B1cCgpIHtcbiAgLy8gICBjb25zdCBwb3B1cFBNID0gU2llYmVsQXBwLlNfQXBwLkdldFBvcHVwUE0oKTtcbiAgLy8gICBwb3B1cFBNLkluaXQoKTtcbiAgLy8gICBwb3B1cFBNLlNldHVwKCk7XG4gIC8vIH1cblxuICAvLyB0b2RvOiBjaGFuZ2UgdGhlIGFwcHJvYWNoLCB1c2UgdGhlIGNsYXNzIGludGVybmFsIHZhcmlhYmxlc1xuICBjbG9zZVBvcHVwQXBwbGV0KGFwcGxldCkge1xuICAgIC8vIHRvZG8gOiBjaGVjayBjYW5JbnZva2VNZXRob2RcbiAgICBsZXQgcmV0O1xuICAgIGlmIChhcHBsZXQpIHtcbiAgICAgIGNvbnN0IGlzUG9wdXBBcHBsZXQgPSB0eXBlb2YgYXBwbGV0LkdldFBvcHVwQXBwbGV0TmFtZSA9PT0gJ2Z1bmN0aW9uJztcbiAgICAgIGNvbnN0IGlzUGlja0FwcGxldCA9IHR5cGVvZiBhcHBsZXQuR2V0UGlja0FwcGxldE5hbWUgPT09ICdmdW5jdGlvbic7XG4gICAgICBpZiAoIWlzUG9wdXBBcHBsZXQgJiYgIWlzUGlja0FwcGxldCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoaXMgYXBwbGV0IGlzIG5laXRoZXIgcGljayBub3IgcG9wdXAnKTtcbiAgICAgIH1cbiAgICAgIHJldCA9IGFwcGxldC5HZXRQTW9kZWwoKS5FeGVjdXRlTWV0aG9kKCdJbnZva2VNZXRob2QnLCAnQ2xvc2VBcHBsZXQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gdG9kbzogISEhID4+IGNoYW5nZSB0aGlzIGFwcHJvYWNoXG4gICAgICByZXQgPSB0aGlzLnBvcHVwQXBwbGV0TjE5LmFwcGxldC5HZXRQTW9kZWwoKS5FeGVjdXRlTWV0aG9kKCdJbnZva2VNZXRob2QnLCAnQ2xvc2VBcHBsZXQnKTtcbiAgICB9XG4gICAgLy8gaXQgY291bGQgYmUgYmV0dGVyIGlmIHdlIGRvbid0IGhhdmUgYSBTaWViZWwgQXBwbGV0IG9uIHRoZSB2aWV3XG4gICAgLy8gaW4gdGhpcyBjYXNlLCB3ZSB3b3VsZCBub3QgbmVlZCB0byByZUluaXRQb3B1cFxuICAgIC8vIGlmICh0aGlzLmlzUG9wdXBIaWRkZW4pIHtcbiAgICAvLyAgTjE5cG9wdXBDb250cm9sbGVyLlJlSW5pdFBvcHVwKCk7XG4gICAgLy8gfVxuICAgIHRoaXMucG9wdXBBcHBsZXROMTkgPSBudWxsO1xuICAgIHRoaXMuYXNzb2NBcHBsZXROMTkgPSBudWxsO1xuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICBzdGF0aWMgSXNQb3B1cE9wZW4oKSB7IC8vIHRvZG86IHdoZW4gd2Ugc2V0IHNvbWUgcHJvcGVydGllcyBvbiByZXNvbHZlLCBkbyB3ZSBuZWVkIHRoaXMgbWV0aG9kIG5vd1xuICAgIC8vIHRvZG86IGhlcmUgcmV1c2UgdGhlIHByb3BlcnRpZXMgdGhhdCBzZXQgd2hlbiB0aGUgUHJvbWlzZSByZXNvbHZlZFxuICAgIGNvbnN0IGN1cnJQb3B1cHMgPSBTaWViZWxBcHAuU19BcHAuR2V0UG9wdXBQTSgpLkdldCgnY3VyclBvcHVwcycpO1xuICAgIGlmICgwID09PSBjdXJyUG9wdXBzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHsgaXNPcGVuOiBmYWxzZSB9O1xuICAgIH1cbiAgICBpZiAoMSA9PT0gY3VyclBvcHVwcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB7IGlzT3BlbjogdHJ1ZSwgYXBwbGV0TmFtZTogY3VyclBvcHVwc1swXS5HZXROYW1lKCksIGNvbnRyb2xOYW1lOiBjdXJyUG9wdXBzWzBdLkdldFBvcHVwQ29udHJvbCgpIH07XG4gICAgfVxuICAgIGlmICgyID09PSBjdXJyUG9wdXBzLmxlbmd0aCkge1xuICAgICAgLy8gdGhpcyBpcyBhIHNodXR0bGUgb3JcbiAgICAgIC8vIG1heWJlIHdlIG9wZW5lZCBhIHBvcHVwIGFwcGxldCBvbiB0aGUgdG9wIG9mIHBpY2sgYXBwbGV0IC0gVE9ETzogLy8gdGVzdCBpdFxuICAgICAgLy8gICAgICB0ZXN0IGl0ICAtIG1heWJlIHdlIG5lZWQgdG8gY2xvc2UgdGhlIHNldmVyYWwgYXBwbGV0c1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyUG9wdXBzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY3VyclBvcHVwc1sxXS5HZXRQb3B1cEFwcGxldE5hbWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICByZXR1cm4geyBpc09wZW46IHRydWUsIGFwcGxldE5hbWU6IGN1cnJQb3B1cHNbaV0uR2V0TmFtZSgpLCBjb250cm9sTmFtZTogY3VyclBvcHVwc1tpXS5HZXRQb3B1cENvbnRyb2woKSB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ012ZyBhcHBsZXQgaXMgbm90IGZvdW5kLi4uJyk7XG4gICAgfVxuICAgIC8vIHRvZG86IHRlc3QgaWYgd2UgY2FuIGdldCB0byBoZXJlXG4gICAgLy8gICAgbWF5YmUgd2hlbiB3ZSBvcGVuIGEgbmV3IGFwcGxldCBvbiB0b3Agb2YgdGhlIHNodXR0bGUgYXBwbGV0XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzaG91bGQgbm90IGJlIGhlcmUuLi4nKTtcbiAgfVxuXG4gIC8vIHN0YXRpYyBnZXRQb3B1cEFwcGxldFBNKGFwcGxldE5hbWUpIHtcbiAgLy8gICBjb25zdCBhcHBsZXQgPSBOMTlwb3B1cENvbnRyb2xsZXIuR2V0UG9wdXBBcHBsZXQoYXBwbGV0TmFtZSk7XG4gIC8vICAgcmV0dXJuIGFwcGxldC5HZXRQTW9kZWwoKTtcbiAgLy8gfVxuXG4gIHN0YXRpYyBHZXRQb3B1cEFwcGxldChhcHBsZXROYW1lKSB7XG4gICAgY29uc3QgYXBwbGV0ID0gU2llYmVsQXBwLlNfQXBwLkdldEFjdGl2ZVZpZXcoKS5HZXRBcHBsZXRNYXAoKVthcHBsZXROYW1lXTtcbiAgICBpZiAoIWFwcGxldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgJHthcHBsZXROYW1lfSBpcyBub3QgZm91bmQgaW4gYXBwbGV0IG1hcGApO1xuICAgIH1cbiAgICByZXR1cm4gYXBwbGV0O1xuICB9XG5cbiAgc2hvd1BvcHVwQXBwbGV0KGhpZGUsIGNiLCBwbSkge1xuICAgIC8vIHRvZG86IHVzZSB0aGUgcHJvcGVydGllcyBzZXQgb24gcHJvbWlzZSByZXNvbHZpbmc/XG4gICAgY29uc3QgeyBpc09wZW4sIGFwcGxldE5hbWUgfSA9IE4xOXBvcHVwQ29udHJvbGxlci5Jc1BvcHVwT3BlbigpO1xuICAgIGlmIChpc09wZW4pIHtcbiAgICAgIC8vIHRoaXMgY29kZSB3aWxsIGNsb3NlIHRoZSBhcHBsZXQgZXZlbiBpZiB0aGlzIGFwcGxldCB3YXMgb3JpZ2luYXRlZCBieSBhbm90aGVyIGFwcGxldFxuICAgICAgY29uc29sZS5sb2coYGNsb3NpbmcgJHthcHBsZXROYW1lfSBpbiBzaG93UG9wdXBBcHBsZXQuLi5gKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgICAvLyBtYXliZSBkbyBub3QgY2xvc2UgaWYgdGhlIGFwcGxldCB0byBiZSBvcGVuZWQgaWYgdGhlIHNhbWUgYXMgYWxyZWFkeSBvcGVuZWQ/XG4gICAgICB0aGlzLmNsb3NlUG9wdXBBcHBsZXQoTjE5cG9wdXBDb250cm9sbGVyLkdldFBvcHVwQXBwbGV0KGFwcGxldE5hbWUpKTtcbiAgICAgIC8vIHRvZG86IGNoZWNrIGlmIGdvdCBpdCBzdWNjZXNzZnVsbHkgY2xvc2VkP1xuICAgIH1cbiAgICB0aGlzLmlzUG9wdXBIaWRkZW4gPSAhIWhpZGU7IC8vIHRvZG86IGRvIHdlIG5lZWQgdG8ga2VlcCB0aGUgc2hvdyB0aGUgYXBwbGV0XG5cbiAgICBwbS5FeGVjdXRlTWV0aG9kKCdJbnZva2VNZXRob2QnLCAnRWRpdFBvcHVwJywgbnVsbCwgZmFsc2UpOyAvLyBzZWVtcyB3ZSBjYW4gYWxzbyB0byBjYWxsIEVkaXRGaWVsZFxuXG4gICAgbGV0IHJldCA9IHRydWU7XG5cbiAgICBpZiAoaGlkZSkgeyAvLyB3ZSB3aWxsIHBvcHVsYXRlIHRoZSBpbnN0YW5jZXMgb25seSB3aGVuIGFwcGxldCBzaG91bGQgYmUgaGlkZGVuXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmV0dXJuLWFzc2lnblxuICAgICAgcmV0ID0gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB0aGlzLnJlc29sdmVQcm9taXNlID0gcmVzb2x2ZSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcGFyYW0tYXNzaWduXG4gICAgICBpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldCA9IHJldC50aGVuKGNiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmV0O1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9