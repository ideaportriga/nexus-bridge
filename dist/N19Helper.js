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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYW4taW5zdGFuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NsYXNzb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY29mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NvbGxlY3Rpb24tc3Ryb25nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NvbGxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jcmVhdGUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY3R4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2RlZmluZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2VudW0ta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19leHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZmFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZml4LXJlLXdrcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19mbGFncy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19mb3Itb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2hhcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19oaWRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2h0bWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faW5oZXJpdC1pZi1yZXF1aXJlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pbnZva2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pcy1hcnJheS1pdGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2lzLWFycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pcy1yZWdleHAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlci1jYWxsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXItZGV0ZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXItc3RlcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyYXRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fbGlicmFyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19tZXRhLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX21pY3JvdGFzay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZHAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWRwcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZ29wZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZ29wbi1leHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdvcG4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdwby5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3Qta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtcGllLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1zYXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LXRvLWFycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3BlcmZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fcHJvbWlzZS1yZXNvbHZlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fcmVkZWZpbmUtYWxsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3JlZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NldC1wcm90by5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zZXQtc3BlY2llcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zaGFyZWQta2V5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NoYXJlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zcGVjaWVzLWNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3N0cmluZy1hdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190YXNrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWFic29sdXRlLWluZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8taW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1sZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL191aWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdXNlci1hZ2VudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL192YWxpZGF0ZS1jb2xsZWN0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3drcy1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fd2tzLWV4dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL193a3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuZnJvbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5mdW5jdGlvbi5uYW1lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnByb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLmZsYWdzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5zcGxpdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAudG8tc3RyaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcub2JqZWN0LmVudHJpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcuc3ltYm9sLmFzeW5jLWl0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbjE5YmFzZUFwcGxldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbjE5cG9wdXBBcHBsZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL24xOXBvcHVwQ29udHJvbGxlci5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiaXQiLCJUeXBlRXJyb3IiLCJVTlNDT1BBQkxFUyIsInJlcXVpcmUiLCJBcnJheVByb3RvIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJ1bmRlZmluZWQiLCJrZXkiLCJDb25zdHJ1Y3RvciIsIm5hbWUiLCJmb3JiaWRkZW5GaWVsZCIsImlzT2JqZWN0IiwidG9JT2JqZWN0IiwidG9MZW5ndGgiLCJ0b0Fic29sdXRlSW5kZXgiLCJJU19JTkNMVURFUyIsIiR0aGlzIiwiZWwiLCJmcm9tSW5kZXgiLCJPIiwibGVuZ3RoIiwiaW5kZXgiLCJ2YWx1ZSIsImNvZiIsIlRBRyIsIkFSRyIsImFyZ3VtZW50cyIsInRyeUdldCIsImUiLCJUIiwiQiIsIk9iamVjdCIsImNhbGxlZSIsInRvU3RyaW5nIiwiY2FsbCIsInNsaWNlIiwiZFAiLCJmIiwiY3JlYXRlIiwicmVkZWZpbmVBbGwiLCJjdHgiLCJhbkluc3RhbmNlIiwiZm9yT2YiLCIkaXRlckRlZmluZSIsInN0ZXAiLCJzZXRTcGVjaWVzIiwiREVTQ1JJUFRPUlMiLCJmYXN0S2V5IiwidmFsaWRhdGUiLCJTSVpFIiwiZ2V0RW50cnkiLCJ0aGF0IiwiZW50cnkiLCJfaSIsIl9mIiwibiIsImsiLCJnZXRDb25zdHJ1Y3RvciIsIndyYXBwZXIiLCJOQU1FIiwiSVNfTUFQIiwiQURERVIiLCJDIiwiaXRlcmFibGUiLCJfdCIsIl9sIiwiY2xlYXIiLCJkYXRhIiwiciIsInAiLCJpIiwibmV4dCIsInByZXYiLCJmb3JFYWNoIiwiY2FsbGJhY2tmbiIsInYiLCJoYXMiLCJnZXQiLCJkZWYiLCJzZXRTdHJvbmciLCJpdGVyYXRlZCIsImtpbmQiLCJfayIsImdsb2JhbCIsIiRleHBvcnQiLCJyZWRlZmluZSIsIm1ldGEiLCJmYWlscyIsIiRpdGVyRGV0ZWN0Iiwic2V0VG9TdHJpbmdUYWciLCJpbmhlcml0SWZSZXF1aXJlZCIsIm1ldGhvZHMiLCJjb21tb24iLCJJU19XRUFLIiwiQmFzZSIsInByb3RvIiwiZml4TWV0aG9kIiwiS0VZIiwiZm4iLCJhIiwiYWRkIiwic2V0IiwiYiIsImVudHJpZXMiLCJORUVEIiwiaW5zdGFuY2UiLCJIQVNOVF9DSEFJTklORyIsIlRIUk9XU19PTl9QUklNSVRJVkVTIiwiQUNDRVBUX0lURVJBQkxFUyIsIml0ZXIiLCJCVUdHWV9aRVJPIiwiJGluc3RhbmNlIiwidGFyZ2V0IiwiY29uc3RydWN0b3IiLCJHIiwiVyIsIkYiLCJjb3JlIiwidmVyc2lvbiIsIl9fZSIsIiRkZWZpbmVQcm9wZXJ0eSIsImNyZWF0ZURlc2MiLCJvYmplY3QiLCJhRnVuY3Rpb24iLCJjIiwiYXBwbHkiLCJkZWZpbmVQcm9wZXJ0eSIsImRvY3VtZW50IiwiaXMiLCJjcmVhdGVFbGVtZW50Iiwic3BsaXQiLCJnZXRLZXlzIiwiZ09QUyIsInBJRSIsInJlc3VsdCIsImdldFN5bWJvbHMiLCJzeW1ib2xzIiwiaXNFbnVtIiwicHVzaCIsImhpZGUiLCJQUk9UT1RZUEUiLCJ0eXBlIiwic291cmNlIiwiSVNfRk9SQ0VEIiwiSVNfR0xPQkFMIiwiSVNfU1RBVElDIiwiUyIsIklTX1BST1RPIiwiUCIsIklTX0JJTkQiLCJleHBQcm90byIsIm93biIsIm91dCIsImV4cCIsIkZ1bmN0aW9uIiwiVSIsIlIiLCJleGVjIiwiZGVmaW5lZCIsIndrcyIsIlNZTUJPTCIsImZucyIsInN0cmZuIiwicnhmbiIsIlN0cmluZyIsIlJlZ0V4cCIsInN0cmluZyIsImFyZyIsImFuT2JqZWN0IiwiaWdub3JlQ2FzZSIsIm11bHRpbGluZSIsInVuaWNvZGUiLCJzdGlja3kiLCJpc0FycmF5SXRlciIsImdldEl0ZXJGbiIsIkJSRUFLIiwiUkVUVVJOIiwiSVRFUkFUT1IiLCJpdGVyRm4iLCJpdGVyYXRvciIsImRvbmUiLCJ3aW5kb3ciLCJNYXRoIiwic2VsZiIsIl9fZyIsImhhc093blByb3BlcnR5IiwiZG9jdW1lbnRFbGVtZW50Iiwic2V0UHJvdG90eXBlT2YiLCJhcmdzIiwidW4iLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsIkl0ZXJhdG9ycyIsImlzQXJyYXkiLCJNQVRDSCIsImlzUmVnRXhwIiwicmV0IiwiZGVzY3JpcHRvciIsIkl0ZXJhdG9yUHJvdG90eXBlIiwiTElCUkFSWSIsIiRpdGVyQ3JlYXRlIiwiZ2V0UHJvdG90eXBlT2YiLCJCVUdHWSIsImtleXMiLCJGRl9JVEVSQVRPUiIsIktFWVMiLCJWQUxVRVMiLCJyZXR1cm5UaGlzIiwiREVGQVVMVCIsIklTX1NFVCIsIkZPUkNFRCIsImdldE1ldGhvZCIsInZhbHVlcyIsIkRFRl9WQUxVRVMiLCJWQUxVRVNfQlVHIiwiJG5hdGl2ZSIsIiRkZWZhdWx0IiwiJGVudHJpZXMiLCIkYW55TmF0aXZlIiwiU0FGRV9DTE9TSU5HIiwicml0ZXIiLCJmcm9tIiwic2tpcENsb3NpbmciLCJzYWZlIiwiYXJyIiwiTUVUQSIsInNldERlc2MiLCJpZCIsImlzRXh0ZW5zaWJsZSIsIkZSRUVaRSIsInByZXZlbnRFeHRlbnNpb25zIiwic2V0TWV0YSIsInciLCJnZXRXZWFrIiwib25GcmVlemUiLCJtYWNyb3Rhc2siLCJPYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJXZWJLaXRNdXRhdGlvbk9ic2VydmVyIiwicHJvY2VzcyIsIlByb21pc2UiLCJpc05vZGUiLCJoZWFkIiwibGFzdCIsIm5vdGlmeSIsImZsdXNoIiwicGFyZW50IiwiZG9tYWluIiwiZXhpdCIsImVudGVyIiwibmV4dFRpY2siLCJuYXZpZ2F0b3IiLCJzdGFuZGFsb25lIiwidG9nZ2xlIiwibm9kZSIsImNyZWF0ZVRleHROb2RlIiwib2JzZXJ2ZSIsImNoYXJhY3RlckRhdGEiLCJyZXNvbHZlIiwicHJvbWlzZSIsInRoZW4iLCJ0YXNrIiwiUHJvbWlzZUNhcGFiaWxpdHkiLCJyZWplY3QiLCIkJHJlc29sdmUiLCIkJHJlamVjdCIsInRvT2JqZWN0IiwiSU9iamVjdCIsIiRhc3NpZ24iLCJhc3NpZ24iLCJBIiwiU3ltYm9sIiwiSyIsImpvaW4iLCJhTGVuIiwiY29uY2F0IiwiaiIsImRQcyIsImVudW1CdWdLZXlzIiwiSUVfUFJPVE8iLCJFbXB0eSIsImNyZWF0ZURpY3QiLCJpZnJhbWUiLCJsdCIsImd0IiwiaWZyYW1lRG9jdW1lbnQiLCJzdHlsZSIsImRpc3BsYXkiLCJhcHBlbmRDaGlsZCIsInNyYyIsImNvbnRlbnRXaW5kb3ciLCJvcGVuIiwid3JpdGUiLCJjbG9zZSIsIlByb3BlcnRpZXMiLCJJRThfRE9NX0RFRklORSIsInRvUHJpbWl0aXZlIiwiQXR0cmlidXRlcyIsImRlZmluZVByb3BlcnRpZXMiLCJnT1BEIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiZ09QTiIsIndpbmRvd05hbWVzIiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsImdldFdpbmRvd05hbWVzIiwiJGtleXMiLCJoaWRkZW5LZXlzIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwiT2JqZWN0UHJvdG8iLCJhcnJheUluZGV4T2YiLCJuYW1lcyIsImlzRW50cmllcyIsIm5ld1Byb21pc2VDYXBhYmlsaXR5IiwieCIsInByb21pc2VDYXBhYmlsaXR5IiwiYml0bWFwIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiU1JDIiwiVE9fU1RSSU5HIiwiJHRvU3RyaW5nIiwiVFBMIiwiaW5zcGVjdFNvdXJjZSIsInZhbCIsImlzRnVuY3Rpb24iLCJjaGVjayIsInRlc3QiLCJidWdneSIsIl9fcHJvdG9fXyIsIlNQRUNJRVMiLCJ0YWciLCJzdGF0Iiwic2hhcmVkIiwidWlkIiwiU0hBUkVEIiwic3RvcmUiLCJtb2RlIiwiY29weXJpZ2h0IiwiRCIsInRvSW50ZWdlciIsInBvcyIsInMiLCJsIiwiY2hhckNvZGVBdCIsImNoYXJBdCIsImludm9rZSIsImh0bWwiLCJjZWwiLCJzZXRUYXNrIiwic2V0SW1tZWRpYXRlIiwiY2xlYXJUYXNrIiwiY2xlYXJJbW1lZGlhdGUiLCJNZXNzYWdlQ2hhbm5lbCIsIkRpc3BhdGNoIiwiY291bnRlciIsInF1ZXVlIiwiT05SRUFEWVNUQVRFQ0hBTkdFIiwiZGVmZXIiLCJjaGFubmVsIiwicG9ydCIsInJ1biIsImxpc3RlbmVyIiwiZXZlbnQiLCJub3ciLCJwb3J0MiIsInBvcnQxIiwib25tZXNzYWdlIiwicG9zdE1lc3NhZ2UiLCJhZGRFdmVudExpc3RlbmVyIiwiaW1wb3J0U2NyaXB0cyIsInJlbW92ZUNoaWxkIiwic2V0VGltZW91dCIsIm1heCIsIm1pbiIsImNlaWwiLCJmbG9vciIsImlzTmFOIiwidmFsdWVPZiIsInB4IiwicmFuZG9tIiwidXNlckFnZW50IiwiVFlQRSIsIndrc0V4dCIsIiRTeW1ib2wiLCJVU0VfU1lNQk9MIiwiJGV4cG9ydHMiLCJjbGFzc29mIiwiZ2V0SXRlcmF0b3JNZXRob2QiLCJjcmVhdGVQcm9wZXJ0eSIsImFycmF5TGlrZSIsIm1hcGZuIiwibWFwcGluZyIsImFkZFRvVW5zY29wYWJsZXMiLCJBcmd1bWVudHMiLCJGUHJvdG8iLCJuYW1lUkUiLCJtYXRjaCIsInN0cm9uZyIsIk1BUCIsIk1hcCIsInNwZWNpZXNDb25zdHJ1Y3RvciIsIm1pY3JvdGFzayIsIm5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlIiwicGVyZm9ybSIsInByb21pc2VSZXNvbHZlIiwiUFJPTUlTRSIsInZlcnNpb25zIiwidjgiLCIkUHJvbWlzZSIsImVtcHR5IiwiSW50ZXJuYWwiLCJuZXdHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkiLCJPd25Qcm9taXNlQ2FwYWJpbGl0eSIsIldyYXBwZXIiLCJVU0VfTkFUSVZFIiwiRmFrZVByb21pc2UiLCJQcm9taXNlUmVqZWN0aW9uRXZlbnQiLCJpbmRleE9mIiwiaXNUaGVuYWJsZSIsImlzUmVqZWN0IiwiX24iLCJjaGFpbiIsIl9jIiwiX3YiLCJvayIsIl9zIiwicmVhY3Rpb24iLCJoYW5kbGVyIiwiZmFpbCIsImV4aXRlZCIsIl9oIiwib25IYW5kbGVVbmhhbmRsZWQiLCJvblVuaGFuZGxlZCIsInVuaGFuZGxlZCIsImlzVW5oYW5kbGVkIiwiY29uc29sZSIsImVtaXQiLCJvbnVuaGFuZGxlZHJlamVjdGlvbiIsInJlYXNvbiIsImVycm9yIiwiX2EiLCJvbnJlamVjdGlvbmhhbmRsZWQiLCIkcmVqZWN0IiwiX2QiLCJfdyIsIiRyZXNvbHZlIiwiZXhlY3V0b3IiLCJlcnIiLCJvbkZ1bGZpbGxlZCIsIm9uUmVqZWN0ZWQiLCJjYXBhYmlsaXR5IiwiYWxsIiwicmVtYWluaW5nIiwiJGluZGV4IiwiYWxyZWFkeUNhbGxlZCIsInJhY2UiLCJmbGFncyIsIlNQTElUIiwiJHNwbGl0IiwiX3NwbGl0IiwiJHB1c2giLCIkU1BMSVQiLCJMRU5HVEgiLCJMQVNUX0lOREVYIiwiTlBDRyIsInNlcGFyYXRvciIsImxpbWl0Iiwib3V0cHV0IiwibGFzdExhc3RJbmRleCIsInNwbGl0TGltaXQiLCJzZXBhcmF0b3JDb3B5Iiwic2VwYXJhdG9yMiIsImxhc3RJbmRleCIsImxhc3RMZW5ndGgiLCJyZXBsYWNlIiwiJGZsYWdzIiwiZGVmaW5lIiwiJGF0IiwicG9pbnQiLCIkZmFpbHMiLCJ3a3NEZWZpbmUiLCJlbnVtS2V5cyIsIl9jcmVhdGUiLCJnT1BORXh0IiwiJEdPUEQiLCIkRFAiLCIkSlNPTiIsIkpTT04iLCJfc3RyaW5naWZ5Iiwic3RyaW5naWZ5IiwiSElEREVOIiwiVE9fUFJJTUlUSVZFIiwiU3ltYm9sUmVnaXN0cnkiLCJBbGxTeW1ib2xzIiwiT1BTeW1ib2xzIiwiUU9iamVjdCIsInNldHRlciIsImZpbmRDaGlsZCIsInNldFN5bWJvbERlc2MiLCJwcm90b0Rlc2MiLCJ3cmFwIiwic3ltIiwiaXNTeW1ib2wiLCIkZGVmaW5lUHJvcGVydGllcyIsIiRjcmVhdGUiLCIkcHJvcGVydHlJc0VudW1lcmFibGUiLCJFIiwiJGdldE93blByb3BlcnR5RGVzY3JpcHRvciIsIiRnZXRPd25Qcm9wZXJ0eU5hbWVzIiwiJGdldE93blByb3BlcnR5U3ltYm9scyIsIklTX09QIiwiJHNldCIsImVzNlN5bWJvbHMiLCJ3ZWxsS25vd25TeW1ib2xzIiwia2V5Rm9yIiwidXNlU2V0dGVyIiwidXNlU2ltcGxlIiwicmVwbGFjZXIiLCIkcmVwbGFjZXIiLCIkaXRlcmF0b3JzIiwiVE9fU1RSSU5HX1RBRyIsIkFycmF5VmFsdWVzIiwiRE9NSXRlcmFibGVzIiwiQ1NTUnVsZUxpc3QiLCJDU1NTdHlsZURlY2xhcmF0aW9uIiwiQ1NTVmFsdWVMaXN0IiwiQ2xpZW50UmVjdExpc3QiLCJET01SZWN0TGlzdCIsIkRPTVN0cmluZ0xpc3QiLCJET01Ub2tlbkxpc3QiLCJEYXRhVHJhbnNmZXJJdGVtTGlzdCIsIkZpbGVMaXN0IiwiSFRNTEFsbENvbGxlY3Rpb24iLCJIVE1MQ29sbGVjdGlvbiIsIkhUTUxGb3JtRWxlbWVudCIsIkhUTUxTZWxlY3RFbGVtZW50IiwiTWVkaWFMaXN0IiwiTWltZVR5cGVBcnJheSIsIk5hbWVkTm9kZU1hcCIsIk5vZGVMaXN0IiwiUGFpbnRSZXF1ZXN0TGlzdCIsIlBsdWdpbiIsIlBsdWdpbkFycmF5IiwiU1ZHTGVuZ3RoTGlzdCIsIlNWR051bWJlckxpc3QiLCJTVkdQYXRoU2VnTGlzdCIsIlNWR1BvaW50TGlzdCIsIlNWR1N0cmluZ0xpc3QiLCJTVkdUcmFuc2Zvcm1MaXN0IiwiU291cmNlQnVmZmVyTGlzdCIsIlN0eWxlU2hlZXRMaXN0IiwiVGV4dFRyYWNrQ3VlTGlzdCIsIlRleHRUcmFja0xpc3QiLCJUb3VjaExpc3QiLCJjb2xsZWN0aW9ucyIsImV4cGxpY2l0IiwiQ29sbGVjdGlvbiIsIlNpZWJlbEFwcEZhY2FkZSIsIk4xOUhlbHBlciIsInNldHRpbmdzIiwiYXBwbGV0TmFtZSIsImFwcGxldCIsIlNpZWJlbEFwcCIsIlNfQXBwIiwiR2V0QWN0aXZlVmlldyIsIkdldEFwcGxldCIsIkVycm9yIiwicG0iLCJHZXRQTW9kZWwiLCJsb2ciLCJuMTlwb3B1cENvbnRyb2xsZXIiLCJOMTlwb3B1cENvbnRyb2xsZXIiLCJjbG9zZVBvcHVwQXBwbGV0IiwiY2IiLCJjYW5PcGVuUG9wdXAiLCJ2aWV3IiwiU2V0QWN0aXZlQXBwbGV0SW50ZXJuYWwiLCJfc2V0QWN0aXZlQ29udHJvbCIsInNob3dQb3B1cEFwcGxldCIsIl9zaG93UG9wdXBBcHBsZXQiLCJjb250cm9sTmFtZSIsImlzTGlzdEFwcGxldCIsImdldFNlbGVjdGlvbiIsIkV4ZWN1dGVNZXRob2QiLCJ0YXJnZXRWaWV3TmFtZSIsInRhcmdldEFwcGxldE5hbWUiLCJyb3dJZCIsImdldEN1cnJlbnRSZWNvcmQiLCJJZCIsIlNXRUNtZCIsImVuY29kZVVSSSIsIkdvdG9WaWV3IiwicG9wdXBQTSIsIkdldFBvcHVwUE0iLCJJbml0IiwiU2V0dXAiLCJOMTliYXNlQXBwbGV0IiwiY29uc3RzIiwiU2llYmVsSlMiLCJEZXBlbmRlbmN5IiwiR2V0IiwiR2V0QXBwbGV0TWFwIiwiR2V0TGlzdE9mQ29sdW1ucyIsInJlcXVpcmVkIiwibG92IiwidG9rZW4iLCJzdWJzY3JpYmVycyIsImJjSWQiLCJHZXRCQ0lkIiwiQXR0YWNoTm90aWZpY2F0aW9uSGFuZGxlciIsInByb3BTZXQiLCJHZXRQcm9wZXJ0eSIsImZ1bmMiLCJhcHBsZXRJZCIsImFwcGxldElucHV0cyIsImdldEVsZW1lbnRCeUlkIiwicXVlcnlTZWxlY3RvckFsbCIsImF0dHJpYnV0ZXMiLCJub2RlVmFsdWUiLCJ2aWV3TmFtZSIsIkdldE5hbWUiLCJDQ0ZNaXNjVXRpbF9TdHJpbmdUb0FycmF5Iiwic3BsaWNlIiwiZmlsdGVyIiwiR2V0Q29udHJvbCIsIkdldENvbnRyb2xzIiwiaW5wdXROYW1lIiwiU2V0QWN0aXZlQ29udHJvbCIsIl9nZXRDb250cm9sIiwiY29udHJvbFVpVHlwZSIsIm1ldGhvZCIsImNhbkludm9rZU1ldGhvZCIsImNvbnRyb2xzIiwiYXBwbGV0Q29udHJvbHMiLCJfcmV0dXJuQ29udHJvbHMiLCJjb250cm9sIiwiR2V0VUlUeXBlIiwiX2lzU2tpcENvbnRyb2wiLCJjb250cm9sSW5wdXROYW1lIiwiR2V0SW5wdXROYW1lIiwib2JqIiwibGFiZWwiLCJHZXREaXNwbGF5TmFtZSIsInVpVHlwZSIsIl9pc1JlcXVpcmVkIiwiYm91bmRlZFBpY2siLCJJc0JvdW5kZWRQaWNrIiwic3RhdGljUGljayIsIklzU3RhdGljQm91bmRlZCIsImlzUG9zdENoYW5nZXMiLCJJc1Bvc3RDaGFuZ2VzIiwibWF4U2l6ZSIsIkdldE1heFNpemUiLCJmaWVsZE5hbWUiLCJHZXRGaWVsZE5hbWUiLCJpc0xpbmsiLCJyZWFkT25seSIsIkdldFJlbmRlcmVyIiwiR2V0Q29sdW1uSGVscGVyIiwiR2V0QWN0dWFsQ29udHJvbE5hbWUiLCJzdGF0aWNMT1YiLCJHZXRTdGF0aWNMT1YiLCJHZXRSYWRpb0dyb3VwUHJvcFNldCIsImNoaWxkQXJyYXkiLCJsb3ZzIiwicmVkdWNlIiwiYWNjIiwibGljIiwiRmllbGRWYWx1ZSIsIkRpc3BsYXlOYW1lIiwiYWRkUmVjb3JkSW5kZXgiLCJtYXAiLCJfaW5keCIsIl9uYXZpZ2F0ZSIsImdldFJvd0xpc3RSb3dDb3VudCIsInBvc2l0aW9uT25Sb3ciLCJfbmV3UmVjb3JkIiwiYXN5bmMiLCJjYmVyciIsIl93cml0ZVJlY29yZCIsImNhdGNoIiwiX2dldFZhbHVlRm9yQ29udHJvbCIsIk9uQ29udHJvbEV2ZW50IiwicHMiLCJOZXdQcm9wZXJ0eVNldCIsIlNldFByb3BlcnR5IiwiSW52b2tlTWV0aG9kIiwic29ydCIsIl9jb250cm9scyIsInJhdyIsImJjIiwiR2V0QnVzQ29tcCIsIklzSW5RdWVyeVN0YXRlIiwiSXNJbnNlcnRQZW5kaW5nIiwiSXNDb21taXRQZW5kaW5nIiwiX21ldGhvZHMiLCJzdGF0ZSIsImNhbGN1bGF0ZUN1cnJlbnRSZWNvcmRTdGF0ZSIsImdldFJlY29yZFNldCIsImdldFJhd1JlY29yZFNldCIsIl9nZXRDb250cm9sVmFsdWUiLCJyZWFkb25seSIsImV4cHIiLCJTZXRGaWVsZFZhbHVlIiwiX3F1ZXJ5QnlJZCIsIl9uZXdRdWVyeSIsImFpIiwic2NvcGUiLCJtYXNrIiwic2VsZmJ1c3kiLCJwc091dHB1dCIsInBzSW5wdXQiLCJfZ2V0Q29udHJvbElucHV0TmFtZUZvcklkUXVlcnkiLCJDbG9uZSIsIkNhbGxTZXJ2ZXJBcHBsZXQiLCJwYXJhbXMiLCJfcXVlcnkiLCJpZHMiLCJmaWVsZHMiLCJ1c2VBY3RpdmVCTyIsIl9nZXRNVkYiLCJwc0lucHV0cyIsIkdldEFjdGl2ZUJ1c09iaiIsIlNldFR5cGUiLCJfZ2V0RmllbGROYW1lRm9yQ29udHJvbCIsIkFkZENoaWxkIiwiYnMiLCJHZXRTZXJ2aWNlIiwiZXJyY2IiLCJtZXRob2ROYW1lIiwiSW5wdXRzIiwicHNPdXRwdXRzIiwiYm9vbE9iamVjdCIsIkRhdHVtQm9vbE9iamVjdCIsIkdldENoaWxkQnlUeXBlIiwiR2V0VHlwZSIsInJlYyIsInByaW1hcnkiLCJwcm9wQXJyYXkiLCJTZXRBc1N0cmluZyIsIkdldFZhbHVlIiwiYW1vdW50Iiwic2l6ZSIsInRlbXAiLCJuZXh0UmVjb3JkU2V0IiwiaGFzTmV4dCIsImZpZWxkVG9Db250cm9sTWFwIiwiZmllbGQiLCJnZXRGaWVsZFRvQ29udHJvbE1hcCIsInNlcnZpY2UiLCJpblByb3BTZXQiLCJOMTlwb3B1cEFwcGxldCIsInJlc2l6ZSIsIkdldFNlbGVjdGVkUm93Iiwic2luZ2xldG9uIiwic2luZ2xldG9uRW5mb3JjZXIiLCJlbmZvcmNlciIsImlzUG9wdXBIaWRkZW4iLCJyZXNvbHZlUHJvbWlzZSIsInBvcHVwQXBwbGV0TjE5IiwiYXNzb2NBcHBsZXROMTkiLCJOMTlwcm9jZXNzTmV3UG9wdXAiLCJQcm9jZXNzTmV3UG9wdXAiLCJwcm9jZXNzTmV3UG9wdXAiLCJOMTl2aWV3TG9hZGVkIiwiY29udGVudFVwZGF0ZXIiLCJ2aWV3TG9hZGVkIiwiSXNQb3B1cE9wZW4iLCJHZXRQb3B1cEFwcGxldCIsImFzc29jQXBwbGV0IiwiU2V0U2hvd05ld1BhZ2UiLCJhY3RpdmVWaWV3IiwiYWN0aXZlQXBwbGV0IiwiR2V0QWN0aXZlQXBwbGV0IiwiU2V0QWN0aXZlQXBwbGV0QmVmb3JlUG9wdXAiLCJBZGRQcm9wZXJ0eSIsInVybCIsIkdldFBhZ2VVUkwiLCJpc1BvcHVwQXBwbGV0IiwiR2V0UG9wdXBBcHBsZXROYW1lIiwiaXNQaWNrQXBwbGV0IiwiR2V0UGlja0FwcGxldE5hbWUiLCJpc09wZW4iLCJjdXJyUG9wdXBzIiwiR2V0UG9wdXBDb250cm9sIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkFBLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixVQUFVQyxFQUFWLEVBQWM7QUFDN0IsTUFBSSxPQUFPQSxFQUFQLElBQWEsVUFBakIsRUFBNkIsTUFBTUMsU0FBUyxDQUFDRCxFQUFFLEdBQUcscUJBQU4sQ0FBZjtBQUM3QixTQUFPQSxFQUFQO0FBQ0QsQ0FIRCxDOzs7Ozs7Ozs7OztBQ0FBO0FBQ0EsSUFBSUUsV0FBVyxHQUFHQyxtQkFBTyxDQUFDLHNEQUFELENBQVAsQ0FBa0IsYUFBbEIsQ0FBbEI7O0FBQ0EsSUFBSUMsVUFBVSxHQUFHQyxLQUFLLENBQUNDLFNBQXZCO0FBQ0EsSUFBSUYsVUFBVSxDQUFDRixXQUFELENBQVYsSUFBMkJLLFNBQS9CLEVBQTBDSixtQkFBTyxDQUFDLHdEQUFELENBQVAsQ0FBbUJDLFVBQW5CLEVBQStCRixXQUEvQixFQUE0QyxFQUE1Qzs7QUFDMUNKLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixVQUFVUyxHQUFWLEVBQWU7QUFDOUJKLFlBQVUsQ0FBQ0YsV0FBRCxDQUFWLENBQXdCTSxHQUF4QixJQUErQixJQUEvQjtBQUNELENBRkQsQzs7Ozs7Ozs7Ozs7QUNKQVYsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLFVBQVVDLEVBQVYsRUFBY1MsV0FBZCxFQUEyQkMsSUFBM0IsRUFBaUNDLGNBQWpDLEVBQWlEO0FBQ2hFLE1BQUksRUFBRVgsRUFBRSxZQUFZUyxXQUFoQixLQUFpQ0UsY0FBYyxLQUFLSixTQUFuQixJQUFnQ0ksY0FBYyxJQUFJWCxFQUF2RixFQUE0RjtBQUMxRixVQUFNQyxTQUFTLENBQUNTLElBQUksR0FBRyx5QkFBUixDQUFmO0FBQ0Q7O0FBQUMsU0FBT1YsRUFBUDtBQUNILENBSkQsQzs7Ozs7Ozs7Ozs7QUNBQSxJQUFJWSxRQUFRLEdBQUdULG1CQUFPLENBQUMsa0VBQUQsQ0FBdEI7O0FBQ0FMLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixVQUFVQyxFQUFWLEVBQWM7QUFDN0IsTUFBSSxDQUFDWSxRQUFRLENBQUNaLEVBQUQsQ0FBYixFQUFtQixNQUFNQyxTQUFTLENBQUNELEVBQUUsR0FBRyxvQkFBTixDQUFmO0FBQ25CLFNBQU9BLEVBQVA7QUFDRCxDQUhELEM7Ozs7Ozs7Ozs7O0FDREE7QUFDQTtBQUNBLElBQUlhLFNBQVMsR0FBR1YsbUJBQU8sQ0FBQyxvRUFBRCxDQUF2Qjs7QUFDQSxJQUFJVyxRQUFRLEdBQUdYLG1CQUFPLENBQUMsa0VBQUQsQ0FBdEI7O0FBQ0EsSUFBSVksZUFBZSxHQUFHWixtQkFBTyxDQUFDLGtGQUFELENBQTdCOztBQUNBTCxNQUFNLENBQUNDLE9BQVAsR0FBaUIsVUFBVWlCLFdBQVYsRUFBdUI7QUFDdEMsU0FBTyxVQUFVQyxLQUFWLEVBQWlCQyxFQUFqQixFQUFxQkMsU0FBckIsRUFBZ0M7QUFDckMsUUFBSUMsQ0FBQyxHQUFHUCxTQUFTLENBQUNJLEtBQUQsQ0FBakI7QUFDQSxRQUFJSSxNQUFNLEdBQUdQLFFBQVEsQ0FBQ00sQ0FBQyxDQUFDQyxNQUFILENBQXJCO0FBQ0EsUUFBSUMsS0FBSyxHQUFHUCxlQUFlLENBQUNJLFNBQUQsRUFBWUUsTUFBWixDQUEzQjtBQUNBLFFBQUlFLEtBQUosQ0FKcUMsQ0FLckM7QUFDQTs7QUFDQSxRQUFJUCxXQUFXLElBQUlFLEVBQUUsSUFBSUEsRUFBekIsRUFBNkIsT0FBT0csTUFBTSxHQUFHQyxLQUFoQixFQUF1QjtBQUNsREMsV0FBSyxHQUFHSCxDQUFDLENBQUNFLEtBQUssRUFBTixDQUFULENBRGtELENBRWxEOztBQUNBLFVBQUlDLEtBQUssSUFBSUEsS0FBYixFQUFvQixPQUFPLElBQVAsQ0FIOEIsQ0FJcEQ7QUFDQyxLQUxELE1BS08sT0FBTUYsTUFBTSxHQUFHQyxLQUFmLEVBQXNCQSxLQUFLLEVBQTNCLEVBQStCLElBQUlOLFdBQVcsSUFBSU0sS0FBSyxJQUFJRixDQUE1QixFQUErQjtBQUNuRSxVQUFJQSxDQUFDLENBQUNFLEtBQUQsQ0FBRCxLQUFhSixFQUFqQixFQUFxQixPQUFPRixXQUFXLElBQUlNLEtBQWYsSUFBd0IsQ0FBL0I7QUFDdEI7QUFBQyxXQUFPLENBQUNOLFdBQUQsSUFBZ0IsQ0FBQyxDQUF4QjtBQUNILEdBZkQ7QUFnQkQsQ0FqQkQsQzs7Ozs7Ozs7Ozs7QUNMQTtBQUNBLElBQUlRLEdBQUcsR0FBR3JCLG1CQUFPLENBQUMsc0RBQUQsQ0FBakI7O0FBQ0EsSUFBSXNCLEdBQUcsR0FBR3RCLG1CQUFPLENBQUMsc0RBQUQsQ0FBUCxDQUFrQixhQUFsQixDQUFWLEMsQ0FDQTs7O0FBQ0EsSUFBSXVCLEdBQUcsR0FBR0YsR0FBRyxDQUFDLFlBQVk7QUFBRSxTQUFPRyxTQUFQO0FBQW1CLENBQWpDLEVBQUQsQ0FBSCxJQUE0QyxXQUF0RCxDLENBRUE7O0FBQ0EsSUFBSUMsTUFBTSxHQUFHLFVBQVU1QixFQUFWLEVBQWNRLEdBQWQsRUFBbUI7QUFDOUIsTUFBSTtBQUNGLFdBQU9SLEVBQUUsQ0FBQ1EsR0FBRCxDQUFUO0FBQ0QsR0FGRCxDQUVFLE9BQU9xQixDQUFQLEVBQVU7QUFBRTtBQUFhO0FBQzVCLENBSkQ7O0FBTUEvQixNQUFNLENBQUNDLE9BQVAsR0FBaUIsVUFBVUMsRUFBVixFQUFjO0FBQzdCLE1BQUlvQixDQUFKLEVBQU9VLENBQVAsRUFBVUMsQ0FBVjtBQUNBLFNBQU8vQixFQUFFLEtBQUtPLFNBQVAsR0FBbUIsV0FBbkIsR0FBaUNQLEVBQUUsS0FBSyxJQUFQLEdBQWMsTUFBZCxDQUN0QztBQURzQyxJQUVwQyxRQUFROEIsQ0FBQyxHQUFHRixNQUFNLENBQUNSLENBQUMsR0FBR1ksTUFBTSxDQUFDaEMsRUFBRCxDQUFYLEVBQWlCeUIsR0FBakIsQ0FBbEIsS0FBNEMsUUFBNUMsR0FBdURLLENBQXZELENBQ0Y7QUFERSxJQUVBSixHQUFHLEdBQUdGLEdBQUcsQ0FBQ0osQ0FBRCxDQUFOLENBQ0w7QUFESyxJQUVILENBQUNXLENBQUMsR0FBR1AsR0FBRyxDQUFDSixDQUFELENBQVIsS0FBZ0IsUUFBaEIsSUFBNEIsT0FBT0EsQ0FBQyxDQUFDYSxNQUFULElBQW1CLFVBQS9DLEdBQTRELFdBQTVELEdBQTBFRixDQU45RTtBQU9ELENBVEQsQzs7Ozs7Ozs7Ozs7QUNiQSxJQUFJRyxRQUFRLEdBQUcsR0FBR0EsUUFBbEI7O0FBRUFwQyxNQUFNLENBQUNDLE9BQVAsR0FBaUIsVUFBVUMsRUFBVixFQUFjO0FBQzdCLFNBQU9rQyxRQUFRLENBQUNDLElBQVQsQ0FBY25DLEVBQWQsRUFBa0JvQyxLQUFsQixDQUF3QixDQUF4QixFQUEyQixDQUFDLENBQTVCLENBQVA7QUFDRCxDQUZELEM7Ozs7Ozs7Ozs7OztBQ0ZhOztBQUNiLElBQUlDLEVBQUUsR0FBR2xDLG1CQUFPLENBQUMsa0VBQUQsQ0FBUCxDQUF3Qm1DLENBQWpDOztBQUNBLElBQUlDLE1BQU0sR0FBR3BDLG1CQUFPLENBQUMsMEVBQUQsQ0FBcEI7O0FBQ0EsSUFBSXFDLFdBQVcsR0FBR3JDLG1CQUFPLENBQUMsd0VBQUQsQ0FBekI7O0FBQ0EsSUFBSXNDLEdBQUcsR0FBR3RDLG1CQUFPLENBQUMsc0RBQUQsQ0FBakI7O0FBQ0EsSUFBSXVDLFVBQVUsR0FBR3ZDLG1CQUFPLENBQUMsc0VBQUQsQ0FBeEI7O0FBQ0EsSUFBSXdDLEtBQUssR0FBR3hDLG1CQUFPLENBQUMsNERBQUQsQ0FBbkI7O0FBQ0EsSUFBSXlDLFdBQVcsR0FBR3pDLG1CQUFPLENBQUMsc0VBQUQsQ0FBekI7O0FBQ0EsSUFBSTBDLElBQUksR0FBRzFDLG1CQUFPLENBQUMsa0VBQUQsQ0FBbEI7O0FBQ0EsSUFBSTJDLFVBQVUsR0FBRzNDLG1CQUFPLENBQUMsc0VBQUQsQ0FBeEI7O0FBQ0EsSUFBSTRDLFdBQVcsR0FBRzVDLG1CQUFPLENBQUMsc0VBQUQsQ0FBekI7O0FBQ0EsSUFBSTZDLE9BQU8sR0FBRzdDLG1CQUFPLENBQUMsd0RBQUQsQ0FBUCxDQUFtQjZDLE9BQWpDOztBQUNBLElBQUlDLFFBQVEsR0FBRzlDLG1CQUFPLENBQUMsc0ZBQUQsQ0FBdEI7O0FBQ0EsSUFBSStDLElBQUksR0FBR0gsV0FBVyxHQUFHLElBQUgsR0FBVSxNQUFoQzs7QUFFQSxJQUFJSSxRQUFRLEdBQUcsVUFBVUMsSUFBVixFQUFnQjVDLEdBQWhCLEVBQXFCO0FBQ2xDO0FBQ0EsTUFBSWMsS0FBSyxHQUFHMEIsT0FBTyxDQUFDeEMsR0FBRCxDQUFuQjtBQUNBLE1BQUk2QyxLQUFKO0FBQ0EsTUFBSS9CLEtBQUssS0FBSyxHQUFkLEVBQW1CLE9BQU84QixJQUFJLENBQUNFLEVBQUwsQ0FBUWhDLEtBQVIsQ0FBUCxDQUplLENBS2xDOztBQUNBLE9BQUsrQixLQUFLLEdBQUdELElBQUksQ0FBQ0csRUFBbEIsRUFBc0JGLEtBQXRCLEVBQTZCQSxLQUFLLEdBQUdBLEtBQUssQ0FBQ0csQ0FBM0MsRUFBOEM7QUFDNUMsUUFBSUgsS0FBSyxDQUFDSSxDQUFOLElBQVdqRCxHQUFmLEVBQW9CLE9BQU82QyxLQUFQO0FBQ3JCO0FBQ0YsQ0FURDs7QUFXQXZELE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjtBQUNmMkQsZ0JBQWMsRUFBRSxVQUFVQyxPQUFWLEVBQW1CQyxJQUFuQixFQUF5QkMsTUFBekIsRUFBaUNDLEtBQWpDLEVBQXdDO0FBQ3RELFFBQUlDLENBQUMsR0FBR0osT0FBTyxDQUFDLFVBQVVQLElBQVYsRUFBZ0JZLFFBQWhCLEVBQTBCO0FBQ3hDdEIsZ0JBQVUsQ0FBQ1UsSUFBRCxFQUFPVyxDQUFQLEVBQVVILElBQVYsRUFBZ0IsSUFBaEIsQ0FBVjtBQUNBUixVQUFJLENBQUNhLEVBQUwsR0FBVUwsSUFBVixDQUZ3QyxDQUVoQjs7QUFDeEJSLFVBQUksQ0FBQ0UsRUFBTCxHQUFVZixNQUFNLENBQUMsSUFBRCxDQUFoQixDQUh3QyxDQUdoQjs7QUFDeEJhLFVBQUksQ0FBQ0csRUFBTCxHQUFVaEQsU0FBVixDQUp3QyxDQUloQjs7QUFDeEI2QyxVQUFJLENBQUNjLEVBQUwsR0FBVTNELFNBQVYsQ0FMd0MsQ0FLaEI7O0FBQ3hCNkMsVUFBSSxDQUFDRixJQUFELENBQUosR0FBYSxDQUFiLENBTndDLENBTWhCOztBQUN4QixVQUFJYyxRQUFRLElBQUl6RCxTQUFoQixFQUEyQm9DLEtBQUssQ0FBQ3FCLFFBQUQsRUFBV0gsTUFBWCxFQUFtQlQsSUFBSSxDQUFDVSxLQUFELENBQXZCLEVBQWdDVixJQUFoQyxDQUFMO0FBQzVCLEtBUmMsQ0FBZjtBQVNBWixlQUFXLENBQUN1QixDQUFDLENBQUN6RCxTQUFILEVBQWM7QUFDdkI7QUFDQTtBQUNBNkQsV0FBSyxFQUFFLFNBQVNBLEtBQVQsR0FBaUI7QUFDdEIsYUFBSyxJQUFJZixJQUFJLEdBQUdILFFBQVEsQ0FBQyxJQUFELEVBQU9XLElBQVAsQ0FBbkIsRUFBaUNRLElBQUksR0FBR2hCLElBQUksQ0FBQ0UsRUFBN0MsRUFBaURELEtBQUssR0FBR0QsSUFBSSxDQUFDRyxFQUFuRSxFQUF1RUYsS0FBdkUsRUFBOEVBLEtBQUssR0FBR0EsS0FBSyxDQUFDRyxDQUE1RixFQUErRjtBQUM3RkgsZUFBSyxDQUFDZ0IsQ0FBTixHQUFVLElBQVY7QUFDQSxjQUFJaEIsS0FBSyxDQUFDaUIsQ0FBVixFQUFhakIsS0FBSyxDQUFDaUIsQ0FBTixHQUFVakIsS0FBSyxDQUFDaUIsQ0FBTixDQUFRZCxDQUFSLEdBQVlqRCxTQUF0QjtBQUNiLGlCQUFPNkQsSUFBSSxDQUFDZixLQUFLLENBQUNrQixDQUFQLENBQVg7QUFDRDs7QUFDRG5CLFlBQUksQ0FBQ0csRUFBTCxHQUFVSCxJQUFJLENBQUNjLEVBQUwsR0FBVTNELFNBQXBCO0FBQ0E2QyxZQUFJLENBQUNGLElBQUQsQ0FBSixHQUFhLENBQWI7QUFDRCxPQVhzQjtBQVl2QjtBQUNBO0FBQ0EsZ0JBQVUsVUFBVTFDLEdBQVYsRUFBZTtBQUN2QixZQUFJNEMsSUFBSSxHQUFHSCxRQUFRLENBQUMsSUFBRCxFQUFPVyxJQUFQLENBQW5CO0FBQ0EsWUFBSVAsS0FBSyxHQUFHRixRQUFRLENBQUNDLElBQUQsRUFBTzVDLEdBQVAsQ0FBcEI7O0FBQ0EsWUFBSTZDLEtBQUosRUFBVztBQUNULGNBQUltQixJQUFJLEdBQUduQixLQUFLLENBQUNHLENBQWpCO0FBQ0EsY0FBSWlCLElBQUksR0FBR3BCLEtBQUssQ0FBQ2lCLENBQWpCO0FBQ0EsaUJBQU9sQixJQUFJLENBQUNFLEVBQUwsQ0FBUUQsS0FBSyxDQUFDa0IsQ0FBZCxDQUFQO0FBQ0FsQixlQUFLLENBQUNnQixDQUFOLEdBQVUsSUFBVjtBQUNBLGNBQUlJLElBQUosRUFBVUEsSUFBSSxDQUFDakIsQ0FBTCxHQUFTZ0IsSUFBVDtBQUNWLGNBQUlBLElBQUosRUFBVUEsSUFBSSxDQUFDRixDQUFMLEdBQVNHLElBQVQ7QUFDVixjQUFJckIsSUFBSSxDQUFDRyxFQUFMLElBQVdGLEtBQWYsRUFBc0JELElBQUksQ0FBQ0csRUFBTCxHQUFVaUIsSUFBVjtBQUN0QixjQUFJcEIsSUFBSSxDQUFDYyxFQUFMLElBQVdiLEtBQWYsRUFBc0JELElBQUksQ0FBQ2MsRUFBTCxHQUFVTyxJQUFWO0FBQ3RCckIsY0FBSSxDQUFDRixJQUFELENBQUo7QUFDRDs7QUFBQyxlQUFPLENBQUMsQ0FBQ0csS0FBVDtBQUNILE9BNUJzQjtBQTZCdkI7QUFDQTtBQUNBcUIsYUFBTyxFQUFFLFNBQVNBLE9BQVQsQ0FBaUJDO0FBQVc7QUFBNUIsUUFBc0Q7QUFDN0QxQixnQkFBUSxDQUFDLElBQUQsRUFBT1csSUFBUCxDQUFSO0FBQ0EsWUFBSXRCLENBQUMsR0FBR0csR0FBRyxDQUFDa0MsVUFBRCxFQUFhaEQsU0FBUyxDQUFDTixNQUFWLEdBQW1CLENBQW5CLEdBQXVCTSxTQUFTLENBQUMsQ0FBRCxDQUFoQyxHQUFzQ3BCLFNBQW5ELEVBQThELENBQTlELENBQVg7QUFDQSxZQUFJOEMsS0FBSjs7QUFDQSxlQUFPQSxLQUFLLEdBQUdBLEtBQUssR0FBR0EsS0FBSyxDQUFDRyxDQUFULEdBQWEsS0FBS0QsRUFBdEMsRUFBMEM7QUFDeENqQixXQUFDLENBQUNlLEtBQUssQ0FBQ3VCLENBQVAsRUFBVXZCLEtBQUssQ0FBQ0ksQ0FBaEIsRUFBbUIsSUFBbkIsQ0FBRCxDQUR3QyxDQUV4Qzs7QUFDQSxpQkFBT0osS0FBSyxJQUFJQSxLQUFLLENBQUNnQixDQUF0QixFQUF5QmhCLEtBQUssR0FBR0EsS0FBSyxDQUFDaUIsQ0FBZDtBQUMxQjtBQUNGLE9BeENzQjtBQXlDdkI7QUFDQTtBQUNBTyxTQUFHLEVBQUUsU0FBU0EsR0FBVCxDQUFhckUsR0FBYixFQUFrQjtBQUNyQixlQUFPLENBQUMsQ0FBQzJDLFFBQVEsQ0FBQ0YsUUFBUSxDQUFDLElBQUQsRUFBT1csSUFBUCxDQUFULEVBQXVCcEQsR0FBdkIsQ0FBakI7QUFDRDtBQTdDc0IsS0FBZCxDQUFYO0FBK0NBLFFBQUl1QyxXQUFKLEVBQWlCVixFQUFFLENBQUMwQixDQUFDLENBQUN6RCxTQUFILEVBQWMsTUFBZCxFQUFzQjtBQUN2Q3dFLFNBQUcsRUFBRSxZQUFZO0FBQ2YsZUFBTzdCLFFBQVEsQ0FBQyxJQUFELEVBQU9XLElBQVAsQ0FBUixDQUFxQlYsSUFBckIsQ0FBUDtBQUNEO0FBSHNDLEtBQXRCLENBQUY7QUFLakIsV0FBT2EsQ0FBUDtBQUNELEdBaEVjO0FBaUVmZ0IsS0FBRyxFQUFFLFVBQVUzQixJQUFWLEVBQWdCNUMsR0FBaEIsRUFBcUJlLEtBQXJCLEVBQTRCO0FBQy9CLFFBQUk4QixLQUFLLEdBQUdGLFFBQVEsQ0FBQ0MsSUFBRCxFQUFPNUMsR0FBUCxDQUFwQjtBQUNBLFFBQUlpRSxJQUFKLEVBQVVuRCxLQUFWLENBRitCLENBRy9COztBQUNBLFFBQUkrQixLQUFKLEVBQVc7QUFDVEEsV0FBSyxDQUFDdUIsQ0FBTixHQUFVckQsS0FBVixDQURTLENBRVg7QUFDQyxLQUhELE1BR087QUFDTDZCLFVBQUksQ0FBQ2MsRUFBTCxHQUFVYixLQUFLLEdBQUc7QUFDaEJrQixTQUFDLEVBQUVqRCxLQUFLLEdBQUcwQixPQUFPLENBQUN4QyxHQUFELEVBQU0sSUFBTixDQURGO0FBQ2U7QUFDL0JpRCxTQUFDLEVBQUVqRCxHQUZhO0FBRWU7QUFDL0JvRSxTQUFDLEVBQUVyRCxLQUhhO0FBR2U7QUFDL0IrQyxTQUFDLEVBQUVHLElBQUksR0FBR3JCLElBQUksQ0FBQ2MsRUFKQztBQUllO0FBQy9CVixTQUFDLEVBQUVqRCxTQUxhO0FBS2U7QUFDL0I4RCxTQUFDLEVBQUUsS0FOYSxDQU1lOztBQU5mLE9BQWxCO0FBUUEsVUFBSSxDQUFDakIsSUFBSSxDQUFDRyxFQUFWLEVBQWNILElBQUksQ0FBQ0csRUFBTCxHQUFVRixLQUFWO0FBQ2QsVUFBSW9CLElBQUosRUFBVUEsSUFBSSxDQUFDakIsQ0FBTCxHQUFTSCxLQUFUO0FBQ1ZELFVBQUksQ0FBQ0YsSUFBRCxDQUFKLEdBWEssQ0FZTDs7QUFDQSxVQUFJNUIsS0FBSyxLQUFLLEdBQWQsRUFBbUI4QixJQUFJLENBQUNFLEVBQUwsQ0FBUWhDLEtBQVIsSUFBaUIrQixLQUFqQjtBQUNwQjs7QUFBQyxXQUFPRCxJQUFQO0FBQ0gsR0F2RmM7QUF3RmZELFVBQVEsRUFBRUEsUUF4Rks7QUF5RmY2QixXQUFTLEVBQUUsVUFBVWpCLENBQVYsRUFBYUgsSUFBYixFQUFtQkMsTUFBbkIsRUFBMkI7QUFDcEM7QUFDQTtBQUNBakIsZUFBVyxDQUFDbUIsQ0FBRCxFQUFJSCxJQUFKLEVBQVUsVUFBVXFCLFFBQVYsRUFBb0JDLElBQXBCLEVBQTBCO0FBQzdDLFdBQUtqQixFQUFMLEdBQVVoQixRQUFRLENBQUNnQyxRQUFELEVBQVdyQixJQUFYLENBQWxCLENBRDZDLENBQ1Q7O0FBQ3BDLFdBQUt1QixFQUFMLEdBQVVELElBQVYsQ0FGNkMsQ0FFVDs7QUFDcEMsV0FBS2hCLEVBQUwsR0FBVTNELFNBQVYsQ0FINkMsQ0FHVDtBQUNyQyxLQUpVLEVBSVIsWUFBWTtBQUNiLFVBQUk2QyxJQUFJLEdBQUcsSUFBWDtBQUNBLFVBQUk4QixJQUFJLEdBQUc5QixJQUFJLENBQUMrQixFQUFoQjtBQUNBLFVBQUk5QixLQUFLLEdBQUdELElBQUksQ0FBQ2MsRUFBakIsQ0FIYSxDQUliOztBQUNBLGFBQU9iLEtBQUssSUFBSUEsS0FBSyxDQUFDZ0IsQ0FBdEIsRUFBeUJoQixLQUFLLEdBQUdBLEtBQUssQ0FBQ2lCLENBQWQsQ0FMWixDQU1iOzs7QUFDQSxVQUFJLENBQUNsQixJQUFJLENBQUNhLEVBQU4sSUFBWSxFQUFFYixJQUFJLENBQUNjLEVBQUwsR0FBVWIsS0FBSyxHQUFHQSxLQUFLLEdBQUdBLEtBQUssQ0FBQ0csQ0FBVCxHQUFhSixJQUFJLENBQUNhLEVBQUwsQ0FBUVYsRUFBOUMsQ0FBaEIsRUFBbUU7QUFDakU7QUFDQUgsWUFBSSxDQUFDYSxFQUFMLEdBQVUxRCxTQUFWO0FBQ0EsZUFBT3NDLElBQUksQ0FBQyxDQUFELENBQVg7QUFDRCxPQVhZLENBWWI7OztBQUNBLFVBQUlxQyxJQUFJLElBQUksTUFBWixFQUFvQixPQUFPckMsSUFBSSxDQUFDLENBQUQsRUFBSVEsS0FBSyxDQUFDSSxDQUFWLENBQVg7QUFDcEIsVUFBSXlCLElBQUksSUFBSSxRQUFaLEVBQXNCLE9BQU9yQyxJQUFJLENBQUMsQ0FBRCxFQUFJUSxLQUFLLENBQUN1QixDQUFWLENBQVg7QUFDdEIsYUFBTy9CLElBQUksQ0FBQyxDQUFELEVBQUksQ0FBQ1EsS0FBSyxDQUFDSSxDQUFQLEVBQVVKLEtBQUssQ0FBQ3VCLENBQWhCLENBQUosQ0FBWDtBQUNELEtBcEJVLEVBb0JSZixNQUFNLEdBQUcsU0FBSCxHQUFlLFFBcEJiLEVBb0J1QixDQUFDQSxNQXBCeEIsRUFvQmdDLElBcEJoQyxDQUFYLENBSG9DLENBeUJwQzs7QUFDQWYsY0FBVSxDQUFDYyxJQUFELENBQVY7QUFDRDtBQXBIYyxDQUFqQixDOzs7Ozs7Ozs7Ozs7QUMxQmE7O0FBQ2IsSUFBSXdCLE1BQU0sR0FBR2pGLG1CQUFPLENBQUMsNERBQUQsQ0FBcEI7O0FBQ0EsSUFBSWtGLE9BQU8sR0FBR2xGLG1CQUFPLENBQUMsNERBQUQsQ0FBckI7O0FBQ0EsSUFBSW1GLFFBQVEsR0FBR25GLG1CQUFPLENBQUMsZ0VBQUQsQ0FBdEI7O0FBQ0EsSUFBSXFDLFdBQVcsR0FBR3JDLG1CQUFPLENBQUMsd0VBQUQsQ0FBekI7O0FBQ0EsSUFBSW9GLElBQUksR0FBR3BGLG1CQUFPLENBQUMsd0RBQUQsQ0FBbEI7O0FBQ0EsSUFBSXdDLEtBQUssR0FBR3hDLG1CQUFPLENBQUMsNERBQUQsQ0FBbkI7O0FBQ0EsSUFBSXVDLFVBQVUsR0FBR3ZDLG1CQUFPLENBQUMsc0VBQUQsQ0FBeEI7O0FBQ0EsSUFBSVMsUUFBUSxHQUFHVCxtQkFBTyxDQUFDLGtFQUFELENBQXRCOztBQUNBLElBQUlxRixLQUFLLEdBQUdyRixtQkFBTyxDQUFDLDBEQUFELENBQW5COztBQUNBLElBQUlzRixXQUFXLEdBQUd0RixtQkFBTyxDQUFDLHNFQUFELENBQXpCOztBQUNBLElBQUl1RixjQUFjLEdBQUd2RixtQkFBTyxDQUFDLGtGQUFELENBQTVCOztBQUNBLElBQUl3RixpQkFBaUIsR0FBR3hGLG1CQUFPLENBQUMsc0ZBQUQsQ0FBL0I7O0FBRUFMLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixVQUFVNkQsSUFBVixFQUFnQkQsT0FBaEIsRUFBeUJpQyxPQUF6QixFQUFrQ0MsTUFBbEMsRUFBMENoQyxNQUExQyxFQUFrRGlDLE9BQWxELEVBQTJEO0FBQzFFLE1BQUlDLElBQUksR0FBR1gsTUFBTSxDQUFDeEIsSUFBRCxDQUFqQjtBQUNBLE1BQUlHLENBQUMsR0FBR2dDLElBQVI7QUFDQSxNQUFJakMsS0FBSyxHQUFHRCxNQUFNLEdBQUcsS0FBSCxHQUFXLEtBQTdCO0FBQ0EsTUFBSW1DLEtBQUssR0FBR2pDLENBQUMsSUFBSUEsQ0FBQyxDQUFDekQsU0FBbkI7QUFDQSxNQUFJYyxDQUFDLEdBQUcsRUFBUjs7QUFDQSxNQUFJNkUsU0FBUyxHQUFHLFVBQVVDLEdBQVYsRUFBZTtBQUM3QixRQUFJQyxFQUFFLEdBQUdILEtBQUssQ0FBQ0UsR0FBRCxDQUFkO0FBQ0FaLFlBQVEsQ0FBQ1UsS0FBRCxFQUFRRSxHQUFSLEVBQ05BLEdBQUcsSUFBSSxRQUFQLEdBQWtCLFVBQVVFLENBQVYsRUFBYTtBQUM3QixhQUFPTixPQUFPLElBQUksQ0FBQ2xGLFFBQVEsQ0FBQ3dGLENBQUQsQ0FBcEIsR0FBMEIsS0FBMUIsR0FBa0NELEVBQUUsQ0FBQ2hFLElBQUgsQ0FBUSxJQUFSLEVBQWNpRSxDQUFDLEtBQUssQ0FBTixHQUFVLENBQVYsR0FBY0EsQ0FBNUIsQ0FBekM7QUFDRCxLQUZELEdBRUlGLEdBQUcsSUFBSSxLQUFQLEdBQWUsU0FBU3JCLEdBQVQsQ0FBYXVCLENBQWIsRUFBZ0I7QUFDakMsYUFBT04sT0FBTyxJQUFJLENBQUNsRixRQUFRLENBQUN3RixDQUFELENBQXBCLEdBQTBCLEtBQTFCLEdBQWtDRCxFQUFFLENBQUNoRSxJQUFILENBQVEsSUFBUixFQUFjaUUsQ0FBQyxLQUFLLENBQU4sR0FBVSxDQUFWLEdBQWNBLENBQTVCLENBQXpDO0FBQ0QsS0FGRyxHQUVBRixHQUFHLElBQUksS0FBUCxHQUFlLFNBQVNwQixHQUFULENBQWFzQixDQUFiLEVBQWdCO0FBQ2pDLGFBQU9OLE9BQU8sSUFBSSxDQUFDbEYsUUFBUSxDQUFDd0YsQ0FBRCxDQUFwQixHQUEwQjdGLFNBQTFCLEdBQXNDNEYsRUFBRSxDQUFDaEUsSUFBSCxDQUFRLElBQVIsRUFBY2lFLENBQUMsS0FBSyxDQUFOLEdBQVUsQ0FBVixHQUFjQSxDQUE1QixDQUE3QztBQUNELEtBRkcsR0FFQUYsR0FBRyxJQUFJLEtBQVAsR0FBZSxTQUFTRyxHQUFULENBQWFELENBQWIsRUFBZ0I7QUFBRUQsUUFBRSxDQUFDaEUsSUFBSCxDQUFRLElBQVIsRUFBY2lFLENBQUMsS0FBSyxDQUFOLEdBQVUsQ0FBVixHQUFjQSxDQUE1QjtBQUFnQyxhQUFPLElBQVA7QUFBYyxLQUEvRSxHQUNBLFNBQVNFLEdBQVQsQ0FBYUYsQ0FBYixFQUFnQkcsQ0FBaEIsRUFBbUI7QUFBRUosUUFBRSxDQUFDaEUsSUFBSCxDQUFRLElBQVIsRUFBY2lFLENBQUMsS0FBSyxDQUFOLEdBQVUsQ0FBVixHQUFjQSxDQUE1QixFQUErQkcsQ0FBL0I7QUFBbUMsYUFBTyxJQUFQO0FBQWMsS0FScEUsQ0FBUjtBQVVELEdBWkQ7O0FBYUEsTUFBSSxPQUFPeEMsQ0FBUCxJQUFZLFVBQVosSUFBMEIsRUFBRStCLE9BQU8sSUFBSUUsS0FBSyxDQUFDdEIsT0FBTixJQUFpQixDQUFDYyxLQUFLLENBQUMsWUFBWTtBQUM3RSxRQUFJekIsQ0FBSixHQUFReUMsT0FBUixHQUFrQmhDLElBQWxCO0FBQ0QsR0FGaUUsQ0FBcEMsQ0FBOUIsRUFFSztBQUNIO0FBQ0FULEtBQUMsR0FBRzhCLE1BQU0sQ0FBQ25DLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCQyxJQUEvQixFQUFxQ0MsTUFBckMsRUFBNkNDLEtBQTdDLENBQUo7QUFDQXRCLGVBQVcsQ0FBQ3VCLENBQUMsQ0FBQ3pELFNBQUgsRUFBY3NGLE9BQWQsQ0FBWDtBQUNBTCxRQUFJLENBQUNrQixJQUFMLEdBQVksSUFBWjtBQUNELEdBUEQsTUFPTztBQUNMLFFBQUlDLFFBQVEsR0FBRyxJQUFJM0MsQ0FBSixFQUFmLENBREssQ0FFTDs7QUFDQSxRQUFJNEMsY0FBYyxHQUFHRCxRQUFRLENBQUM1QyxLQUFELENBQVIsQ0FBZ0JnQyxPQUFPLEdBQUcsRUFBSCxHQUFRLENBQUMsQ0FBaEMsRUFBbUMsQ0FBbkMsS0FBeUNZLFFBQTlELENBSEssQ0FJTDs7QUFDQSxRQUFJRSxvQkFBb0IsR0FBR3BCLEtBQUssQ0FBQyxZQUFZO0FBQUVrQixjQUFRLENBQUM3QixHQUFULENBQWEsQ0FBYjtBQUFrQixLQUFqQyxDQUFoQyxDQUxLLENBTUw7O0FBQ0EsUUFBSWdDLGdCQUFnQixHQUFHcEIsV0FBVyxDQUFDLFVBQVVxQixJQUFWLEVBQWdCO0FBQUUsVUFBSS9DLENBQUosQ0FBTStDLElBQU47QUFBYyxLQUFqQyxDQUFsQyxDQVBLLENBT2lFO0FBQ3RFOztBQUNBLFFBQUlDLFVBQVUsR0FBRyxDQUFDakIsT0FBRCxJQUFZTixLQUFLLENBQUMsWUFBWTtBQUM3QztBQUNBLFVBQUl3QixTQUFTLEdBQUcsSUFBSWpELENBQUosRUFBaEI7QUFDQSxVQUFJekMsS0FBSyxHQUFHLENBQVo7O0FBQ0EsYUFBT0EsS0FBSyxFQUFaLEVBQWdCMEYsU0FBUyxDQUFDbEQsS0FBRCxDQUFULENBQWlCeEMsS0FBakIsRUFBd0JBLEtBQXhCOztBQUNoQixhQUFPLENBQUMwRixTQUFTLENBQUNuQyxHQUFWLENBQWMsQ0FBQyxDQUFmLENBQVI7QUFDRCxLQU5pQyxDQUFsQzs7QUFPQSxRQUFJLENBQUNnQyxnQkFBTCxFQUF1QjtBQUNyQjlDLE9BQUMsR0FBR0osT0FBTyxDQUFDLFVBQVVzRCxNQUFWLEVBQWtCakQsUUFBbEIsRUFBNEI7QUFDdEN0QixrQkFBVSxDQUFDdUUsTUFBRCxFQUFTbEQsQ0FBVCxFQUFZSCxJQUFaLENBQVY7QUFDQSxZQUFJUixJQUFJLEdBQUd1QyxpQkFBaUIsQ0FBQyxJQUFJSSxJQUFKLEVBQUQsRUFBYWtCLE1BQWIsRUFBcUJsRCxDQUFyQixDQUE1QjtBQUNBLFlBQUlDLFFBQVEsSUFBSXpELFNBQWhCLEVBQTJCb0MsS0FBSyxDQUFDcUIsUUFBRCxFQUFXSCxNQUFYLEVBQW1CVCxJQUFJLENBQUNVLEtBQUQsQ0FBdkIsRUFBZ0NWLElBQWhDLENBQUw7QUFDM0IsZUFBT0EsSUFBUDtBQUNELE9BTFUsQ0FBWDtBQU1BVyxPQUFDLENBQUN6RCxTQUFGLEdBQWMwRixLQUFkO0FBQ0FBLFdBQUssQ0FBQ2tCLFdBQU4sR0FBb0JuRCxDQUFwQjtBQUNEOztBQUNELFFBQUk2QyxvQkFBb0IsSUFBSUcsVUFBNUIsRUFBd0M7QUFDdENkLGVBQVMsQ0FBQyxRQUFELENBQVQ7QUFDQUEsZUFBUyxDQUFDLEtBQUQsQ0FBVDtBQUNBcEMsWUFBTSxJQUFJb0MsU0FBUyxDQUFDLEtBQUQsQ0FBbkI7QUFDRDs7QUFDRCxRQUFJYyxVQUFVLElBQUlKLGNBQWxCLEVBQWtDVixTQUFTLENBQUNuQyxLQUFELENBQVQsQ0EvQjdCLENBZ0NMOztBQUNBLFFBQUlnQyxPQUFPLElBQUlFLEtBQUssQ0FBQzdCLEtBQXJCLEVBQTRCLE9BQU82QixLQUFLLENBQUM3QixLQUFiO0FBQzdCOztBQUVEdUIsZ0JBQWMsQ0FBQzNCLENBQUQsRUFBSUgsSUFBSixDQUFkO0FBRUF4QyxHQUFDLENBQUN3QyxJQUFELENBQUQsR0FBVUcsQ0FBVjtBQUNBc0IsU0FBTyxDQUFDQSxPQUFPLENBQUM4QixDQUFSLEdBQVk5QixPQUFPLENBQUMrQixDQUFwQixHQUF3Qi9CLE9BQU8sQ0FBQ2dDLENBQVIsSUFBYXRELENBQUMsSUFBSWdDLElBQWxCLENBQXpCLEVBQWtEM0UsQ0FBbEQsQ0FBUDtBQUVBLE1BQUksQ0FBQzBFLE9BQUwsRUFBY0QsTUFBTSxDQUFDYixTQUFQLENBQWlCakIsQ0FBakIsRUFBb0JILElBQXBCLEVBQTBCQyxNQUExQjtBQUVkLFNBQU9FLENBQVA7QUFDRCxDQXRFRCxDOzs7Ozs7Ozs7OztBQ2RBLElBQUl1RCxJQUFJLEdBQUd4SCxNQUFNLENBQUNDLE9BQVAsR0FBaUI7QUFBRXdILFNBQU8sRUFBRTtBQUFYLENBQTVCO0FBQ0EsSUFBSSxPQUFPQyxHQUFQLElBQWMsUUFBbEIsRUFBNEJBLEdBQUcsR0FBR0YsSUFBTixDLENBQVksK0I7Ozs7Ozs7Ozs7OztBQ0QzQjs7QUFDYixJQUFJRyxlQUFlLEdBQUd0SCxtQkFBTyxDQUFDLGtFQUFELENBQTdCOztBQUNBLElBQUl1SCxVQUFVLEdBQUd2SCxtQkFBTyxDQUFDLDBFQUFELENBQXhCOztBQUVBTCxNQUFNLENBQUNDLE9BQVAsR0FBaUIsVUFBVTRILE1BQVYsRUFBa0JyRyxLQUFsQixFQUF5QkMsS0FBekIsRUFBZ0M7QUFDL0MsTUFBSUQsS0FBSyxJQUFJcUcsTUFBYixFQUFxQkYsZUFBZSxDQUFDbkYsQ0FBaEIsQ0FBa0JxRixNQUFsQixFQUEwQnJHLEtBQTFCLEVBQWlDb0csVUFBVSxDQUFDLENBQUQsRUFBSW5HLEtBQUosQ0FBM0MsRUFBckIsS0FDS29HLE1BQU0sQ0FBQ3JHLEtBQUQsQ0FBTixHQUFnQkMsS0FBaEI7QUFDTixDQUhELEM7Ozs7Ozs7Ozs7O0FDSkE7QUFDQSxJQUFJcUcsU0FBUyxHQUFHekgsbUJBQU8sQ0FBQyxvRUFBRCxDQUF2Qjs7QUFDQUwsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLFVBQVVvRyxFQUFWLEVBQWMvQyxJQUFkLEVBQW9CL0IsTUFBcEIsRUFBNEI7QUFDM0N1RyxXQUFTLENBQUN6QixFQUFELENBQVQ7QUFDQSxNQUFJL0MsSUFBSSxLQUFLN0MsU0FBYixFQUF3QixPQUFPNEYsRUFBUDs7QUFDeEIsVUFBUTlFLE1BQVI7QUFDRSxTQUFLLENBQUw7QUFBUSxhQUFPLFVBQVUrRSxDQUFWLEVBQWE7QUFDMUIsZUFBT0QsRUFBRSxDQUFDaEUsSUFBSCxDQUFRaUIsSUFBUixFQUFjZ0QsQ0FBZCxDQUFQO0FBQ0QsT0FGTzs7QUFHUixTQUFLLENBQUw7QUFBUSxhQUFPLFVBQVVBLENBQVYsRUFBYUcsQ0FBYixFQUFnQjtBQUM3QixlQUFPSixFQUFFLENBQUNoRSxJQUFILENBQVFpQixJQUFSLEVBQWNnRCxDQUFkLEVBQWlCRyxDQUFqQixDQUFQO0FBQ0QsT0FGTzs7QUFHUixTQUFLLENBQUw7QUFBUSxhQUFPLFVBQVVILENBQVYsRUFBYUcsQ0FBYixFQUFnQnNCLENBQWhCLEVBQW1CO0FBQ2hDLGVBQU8xQixFQUFFLENBQUNoRSxJQUFILENBQVFpQixJQUFSLEVBQWNnRCxDQUFkLEVBQWlCRyxDQUFqQixFQUFvQnNCLENBQXBCLENBQVA7QUFDRCxPQUZPO0FBUFY7O0FBV0EsU0FBTztBQUFVO0FBQWU7QUFDOUIsV0FBTzFCLEVBQUUsQ0FBQzJCLEtBQUgsQ0FBUzFFLElBQVQsRUFBZXpCLFNBQWYsQ0FBUDtBQUNELEdBRkQ7QUFHRCxDQWpCRCxDOzs7Ozs7Ozs7OztBQ0ZBO0FBQ0E3QixNQUFNLENBQUNDLE9BQVAsR0FBaUIsVUFBVUMsRUFBVixFQUFjO0FBQzdCLE1BQUlBLEVBQUUsSUFBSU8sU0FBVixFQUFxQixNQUFNTixTQUFTLENBQUMsMkJBQTJCRCxFQUE1QixDQUFmO0FBQ3JCLFNBQU9BLEVBQVA7QUFDRCxDQUhELEM7Ozs7Ozs7Ozs7O0FDREE7QUFDQUYsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLENBQUNJLG1CQUFPLENBQUMsMERBQUQsQ0FBUCxDQUFvQixZQUFZO0FBQ2hELFNBQU82QixNQUFNLENBQUMrRixjQUFQLENBQXNCLEVBQXRCLEVBQTBCLEdBQTFCLEVBQStCO0FBQUVqRCxPQUFHLEVBQUUsWUFBWTtBQUFFLGFBQU8sQ0FBUDtBQUFXO0FBQWhDLEdBQS9CLEVBQW1Fc0IsQ0FBbkUsSUFBd0UsQ0FBL0U7QUFDRCxDQUZpQixDQUFsQixDOzs7Ozs7Ozs7OztBQ0RBLElBQUl4RixRQUFRLEdBQUdULG1CQUFPLENBQUMsa0VBQUQsQ0FBdEI7O0FBQ0EsSUFBSTZILFFBQVEsR0FBRzdILG1CQUFPLENBQUMsNERBQUQsQ0FBUCxDQUFxQjZILFFBQXBDLEMsQ0FDQTs7O0FBQ0EsSUFBSUMsRUFBRSxHQUFHckgsUUFBUSxDQUFDb0gsUUFBRCxDQUFSLElBQXNCcEgsUUFBUSxDQUFDb0gsUUFBUSxDQUFDRSxhQUFWLENBQXZDOztBQUNBcEksTUFBTSxDQUFDQyxPQUFQLEdBQWlCLFVBQVVDLEVBQVYsRUFBYztBQUM3QixTQUFPaUksRUFBRSxHQUFHRCxRQUFRLENBQUNFLGFBQVQsQ0FBdUJsSSxFQUF2QixDQUFILEdBQWdDLEVBQXpDO0FBQ0QsQ0FGRCxDOzs7Ozs7Ozs7OztBQ0pBO0FBQ0FGLE1BQU0sQ0FBQ0MsT0FBUCxHQUNFLCtGQURlLENBRWZvSSxLQUZlLENBRVQsR0FGUyxDQUFqQixDOzs7Ozs7Ozs7OztBQ0RBO0FBQ0EsSUFBSUMsT0FBTyxHQUFHakksbUJBQU8sQ0FBQyxzRUFBRCxDQUFyQjs7QUFDQSxJQUFJa0ksSUFBSSxHQUFHbEksbUJBQU8sQ0FBQyxzRUFBRCxDQUFsQjs7QUFDQSxJQUFJbUksR0FBRyxHQUFHbkksbUJBQU8sQ0FBQyxvRUFBRCxDQUFqQjs7QUFDQUwsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLFVBQVVDLEVBQVYsRUFBYztBQUM3QixNQUFJdUksTUFBTSxHQUFHSCxPQUFPLENBQUNwSSxFQUFELENBQXBCO0FBQ0EsTUFBSXdJLFVBQVUsR0FBR0gsSUFBSSxDQUFDL0YsQ0FBdEI7O0FBQ0EsTUFBSWtHLFVBQUosRUFBZ0I7QUFDZCxRQUFJQyxPQUFPLEdBQUdELFVBQVUsQ0FBQ3hJLEVBQUQsQ0FBeEI7QUFDQSxRQUFJMEksTUFBTSxHQUFHSixHQUFHLENBQUNoRyxDQUFqQjtBQUNBLFFBQUlpQyxDQUFDLEdBQUcsQ0FBUjtBQUNBLFFBQUkvRCxHQUFKOztBQUNBLFdBQU9pSSxPQUFPLENBQUNwSCxNQUFSLEdBQWlCa0QsQ0FBeEIsRUFBMkIsSUFBSW1FLE1BQU0sQ0FBQ3ZHLElBQVAsQ0FBWW5DLEVBQVosRUFBZ0JRLEdBQUcsR0FBR2lJLE9BQU8sQ0FBQ2xFLENBQUMsRUFBRixDQUE3QixDQUFKLEVBQXlDZ0UsTUFBTSxDQUFDSSxJQUFQLENBQVluSSxHQUFaO0FBQ3JFOztBQUFDLFNBQU8rSCxNQUFQO0FBQ0gsQ0FWRCxDOzs7Ozs7Ozs7OztBQ0pBLElBQUluRCxNQUFNLEdBQUdqRixtQkFBTyxDQUFDLDREQUFELENBQXBCOztBQUNBLElBQUltSCxJQUFJLEdBQUduSCxtQkFBTyxDQUFDLHdEQUFELENBQWxCOztBQUNBLElBQUl5SSxJQUFJLEdBQUd6SSxtQkFBTyxDQUFDLHdEQUFELENBQWxCOztBQUNBLElBQUltRixRQUFRLEdBQUduRixtQkFBTyxDQUFDLGdFQUFELENBQXRCOztBQUNBLElBQUlzQyxHQUFHLEdBQUd0QyxtQkFBTyxDQUFDLHNEQUFELENBQWpCOztBQUNBLElBQUkwSSxTQUFTLEdBQUcsV0FBaEI7O0FBRUEsSUFBSXhELE9BQU8sR0FBRyxVQUFVeUQsSUFBVixFQUFnQnBJLElBQWhCLEVBQXNCcUksTUFBdEIsRUFBOEI7QUFDMUMsTUFBSUMsU0FBUyxHQUFHRixJQUFJLEdBQUd6RCxPQUFPLENBQUNnQyxDQUEvQjtBQUNBLE1BQUk0QixTQUFTLEdBQUdILElBQUksR0FBR3pELE9BQU8sQ0FBQzhCLENBQS9CO0FBQ0EsTUFBSStCLFNBQVMsR0FBR0osSUFBSSxHQUFHekQsT0FBTyxDQUFDOEQsQ0FBL0I7QUFDQSxNQUFJQyxRQUFRLEdBQUdOLElBQUksR0FBR3pELE9BQU8sQ0FBQ2dFLENBQTlCO0FBQ0EsTUFBSUMsT0FBTyxHQUFHUixJQUFJLEdBQUd6RCxPQUFPLENBQUN0RCxDQUE3QjtBQUNBLE1BQUlrRixNQUFNLEdBQUdnQyxTQUFTLEdBQUc3RCxNQUFILEdBQVk4RCxTQUFTLEdBQUc5RCxNQUFNLENBQUMxRSxJQUFELENBQU4sS0FBaUIwRSxNQUFNLENBQUMxRSxJQUFELENBQU4sR0FBZSxFQUFoQyxDQUFILEdBQXlDLENBQUMwRSxNQUFNLENBQUMxRSxJQUFELENBQU4sSUFBZ0IsRUFBakIsRUFBcUJtSSxTQUFyQixDQUFwRjtBQUNBLE1BQUk5SSxPQUFPLEdBQUdrSixTQUFTLEdBQUczQixJQUFILEdBQVVBLElBQUksQ0FBQzVHLElBQUQsQ0FBSixLQUFlNEcsSUFBSSxDQUFDNUcsSUFBRCxDQUFKLEdBQWEsRUFBNUIsQ0FBakM7QUFDQSxNQUFJNkksUUFBUSxHQUFHeEosT0FBTyxDQUFDOEksU0FBRCxDQUFQLEtBQXVCOUksT0FBTyxDQUFDOEksU0FBRCxDQUFQLEdBQXFCLEVBQTVDLENBQWY7QUFDQSxNQUFJckksR0FBSixFQUFTZ0osR0FBVCxFQUFjQyxHQUFkLEVBQW1CQyxHQUFuQjtBQUNBLE1BQUlULFNBQUosRUFBZUYsTUFBTSxHQUFHckksSUFBVDs7QUFDZixPQUFLRixHQUFMLElBQVl1SSxNQUFaLEVBQW9CO0FBQ2xCO0FBQ0FTLE9BQUcsR0FBRyxDQUFDUixTQUFELElBQWMvQixNQUFkLElBQXdCQSxNQUFNLENBQUN6RyxHQUFELENBQU4sS0FBZ0JELFNBQTlDLENBRmtCLENBR2xCOztBQUNBa0osT0FBRyxHQUFHLENBQUNELEdBQUcsR0FBR3ZDLE1BQUgsR0FBWThCLE1BQWhCLEVBQXdCdkksR0FBeEIsQ0FBTixDQUprQixDQUtsQjs7QUFDQWtKLE9BQUcsR0FBR0osT0FBTyxJQUFJRSxHQUFYLEdBQWlCL0csR0FBRyxDQUFDZ0gsR0FBRCxFQUFNckUsTUFBTixDQUFwQixHQUFvQ2dFLFFBQVEsSUFBSSxPQUFPSyxHQUFQLElBQWMsVUFBMUIsR0FBdUNoSCxHQUFHLENBQUNrSCxRQUFRLENBQUN4SCxJQUFWLEVBQWdCc0gsR0FBaEIsQ0FBMUMsR0FBaUVBLEdBQTNHLENBTmtCLENBT2xCOztBQUNBLFFBQUl4QyxNQUFKLEVBQVkzQixRQUFRLENBQUMyQixNQUFELEVBQVN6RyxHQUFULEVBQWNpSixHQUFkLEVBQW1CWCxJQUFJLEdBQUd6RCxPQUFPLENBQUN1RSxDQUFsQyxDQUFSLENBUk0sQ0FTbEI7O0FBQ0EsUUFBSTdKLE9BQU8sQ0FBQ1MsR0FBRCxDQUFQLElBQWdCaUosR0FBcEIsRUFBeUJiLElBQUksQ0FBQzdJLE9BQUQsRUFBVVMsR0FBVixFQUFla0osR0FBZixDQUFKO0FBQ3pCLFFBQUlOLFFBQVEsSUFBSUcsUUFBUSxDQUFDL0ksR0FBRCxDQUFSLElBQWlCaUosR0FBakMsRUFBc0NGLFFBQVEsQ0FBQy9JLEdBQUQsQ0FBUixHQUFnQmlKLEdBQWhCO0FBQ3ZDO0FBQ0YsQ0F4QkQ7O0FBeUJBckUsTUFBTSxDQUFDa0MsSUFBUCxHQUFjQSxJQUFkLEMsQ0FDQTs7QUFDQWpDLE9BQU8sQ0FBQ2dDLENBQVIsR0FBWSxDQUFaLEMsQ0FBaUI7O0FBQ2pCaEMsT0FBTyxDQUFDOEIsQ0FBUixHQUFZLENBQVosQyxDQUFpQjs7QUFDakI5QixPQUFPLENBQUM4RCxDQUFSLEdBQVksQ0FBWixDLENBQWlCOztBQUNqQjlELE9BQU8sQ0FBQ2dFLENBQVIsR0FBWSxDQUFaLEMsQ0FBaUI7O0FBQ2pCaEUsT0FBTyxDQUFDdEQsQ0FBUixHQUFZLEVBQVosQyxDQUFpQjs7QUFDakJzRCxPQUFPLENBQUMrQixDQUFSLEdBQVksRUFBWixDLENBQWlCOztBQUNqQi9CLE9BQU8sQ0FBQ3VFLENBQVIsR0FBWSxFQUFaLEMsQ0FBaUI7O0FBQ2pCdkUsT0FBTyxDQUFDd0UsQ0FBUixHQUFZLEdBQVosQyxDQUFpQjs7QUFDakIvSixNQUFNLENBQUNDLE9BQVAsR0FBaUJzRixPQUFqQixDOzs7Ozs7Ozs7OztBQzFDQXZGLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixVQUFVK0osSUFBVixFQUFnQjtBQUMvQixNQUFJO0FBQ0YsV0FBTyxDQUFDLENBQUNBLElBQUksRUFBYjtBQUNELEdBRkQsQ0FFRSxPQUFPakksQ0FBUCxFQUFVO0FBQ1YsV0FBTyxJQUFQO0FBQ0Q7QUFDRixDQU5ELEM7Ozs7Ozs7Ozs7OztBQ0FhOztBQUNiLElBQUkrRyxJQUFJLEdBQUd6SSxtQkFBTyxDQUFDLHdEQUFELENBQWxCOztBQUNBLElBQUltRixRQUFRLEdBQUduRixtQkFBTyxDQUFDLGdFQUFELENBQXRCOztBQUNBLElBQUlxRixLQUFLLEdBQUdyRixtQkFBTyxDQUFDLDBEQUFELENBQW5COztBQUNBLElBQUk0SixPQUFPLEdBQUc1SixtQkFBTyxDQUFDLDhEQUFELENBQXJCOztBQUNBLElBQUk2SixHQUFHLEdBQUc3SixtQkFBTyxDQUFDLHNEQUFELENBQWpCOztBQUVBTCxNQUFNLENBQUNDLE9BQVAsR0FBaUIsVUFBVW1HLEdBQVYsRUFBZTdFLE1BQWYsRUFBdUJ5SSxJQUF2QixFQUE2QjtBQUM1QyxNQUFJRyxNQUFNLEdBQUdELEdBQUcsQ0FBQzlELEdBQUQsQ0FBaEI7QUFDQSxNQUFJZ0UsR0FBRyxHQUFHSixJQUFJLENBQUNDLE9BQUQsRUFBVUUsTUFBVixFQUFrQixHQUFHL0QsR0FBSCxDQUFsQixDQUFkO0FBQ0EsTUFBSWlFLEtBQUssR0FBR0QsR0FBRyxDQUFDLENBQUQsQ0FBZjtBQUNBLE1BQUlFLElBQUksR0FBR0YsR0FBRyxDQUFDLENBQUQsQ0FBZDs7QUFDQSxNQUFJMUUsS0FBSyxDQUFDLFlBQVk7QUFDcEIsUUFBSXBFLENBQUMsR0FBRyxFQUFSOztBQUNBQSxLQUFDLENBQUM2SSxNQUFELENBQUQsR0FBWSxZQUFZO0FBQUUsYUFBTyxDQUFQO0FBQVcsS0FBckM7O0FBQ0EsV0FBTyxHQUFHL0QsR0FBSCxFQUFROUUsQ0FBUixLQUFjLENBQXJCO0FBQ0QsR0FKUSxDQUFULEVBSUk7QUFDRmtFLFlBQVEsQ0FBQytFLE1BQU0sQ0FBQy9KLFNBQVIsRUFBbUI0RixHQUFuQixFQUF3QmlFLEtBQXhCLENBQVI7QUFDQXZCLFFBQUksQ0FBQzBCLE1BQU0sQ0FBQ2hLLFNBQVIsRUFBbUIySixNQUFuQixFQUEyQjVJLE1BQU0sSUFBSSxDQUFWLENBQzdCO0FBQ0E7QUFGNkIsTUFHM0IsVUFBVWtKLE1BQVYsRUFBa0JDLEdBQWxCLEVBQXVCO0FBQUUsYUFBT0osSUFBSSxDQUFDakksSUFBTCxDQUFVb0ksTUFBVixFQUFrQixJQUFsQixFQUF3QkMsR0FBeEIsQ0FBUDtBQUFzQyxLQUhwQyxDQUk3QjtBQUNBO0FBTDZCLE1BTTNCLFVBQVVELE1BQVYsRUFBa0I7QUFBRSxhQUFPSCxJQUFJLENBQUNqSSxJQUFMLENBQVVvSSxNQUFWLEVBQWtCLElBQWxCLENBQVA7QUFBaUMsS0FOckQsQ0FBSjtBQVFEO0FBQ0YsQ0FwQkQsQzs7Ozs7Ozs7Ozs7O0NDTkE7O0FBQ0EsSUFBSUUsUUFBUSxHQUFHdEssbUJBQU8sQ0FBQyxrRUFBRCxDQUF0Qjs7QUFDQUwsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLFlBQVk7QUFDM0IsTUFBSXFELElBQUksR0FBR3FILFFBQVEsQ0FBQyxJQUFELENBQW5CO0FBQ0EsTUFBSWxDLE1BQU0sR0FBRyxFQUFiO0FBQ0EsTUFBSW5GLElBQUksQ0FBQ2dDLE1BQVQsRUFBaUJtRCxNQUFNLElBQUksR0FBVjtBQUNqQixNQUFJbkYsSUFBSSxDQUFDc0gsVUFBVCxFQUFxQm5DLE1BQU0sSUFBSSxHQUFWO0FBQ3JCLE1BQUluRixJQUFJLENBQUN1SCxTQUFULEVBQW9CcEMsTUFBTSxJQUFJLEdBQVY7QUFDcEIsTUFBSW5GLElBQUksQ0FBQ3dILE9BQVQsRUFBa0JyQyxNQUFNLElBQUksR0FBVjtBQUNsQixNQUFJbkYsSUFBSSxDQUFDeUgsTUFBVCxFQUFpQnRDLE1BQU0sSUFBSSxHQUFWO0FBQ2pCLFNBQU9BLE1BQVA7QUFDRCxDQVRELEM7Ozs7Ozs7Ozs7O0FDSEEsSUFBSTlGLEdBQUcsR0FBR3RDLG1CQUFPLENBQUMsc0RBQUQsQ0FBakI7O0FBQ0EsSUFBSWdDLElBQUksR0FBR2hDLG1CQUFPLENBQUMsa0VBQUQsQ0FBbEI7O0FBQ0EsSUFBSTJLLFdBQVcsR0FBRzNLLG1CQUFPLENBQUMsMEVBQUQsQ0FBekI7O0FBQ0EsSUFBSXNLLFFBQVEsR0FBR3RLLG1CQUFPLENBQUMsa0VBQUQsQ0FBdEI7O0FBQ0EsSUFBSVcsUUFBUSxHQUFHWCxtQkFBTyxDQUFDLGtFQUFELENBQXRCOztBQUNBLElBQUk0SyxTQUFTLEdBQUc1SyxtQkFBTyxDQUFDLDhGQUFELENBQXZCOztBQUNBLElBQUk2SyxLQUFLLEdBQUcsRUFBWjtBQUNBLElBQUlDLE1BQU0sR0FBRyxFQUFiOztBQUNBLElBQUlsTCxPQUFPLEdBQUdELE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixVQUFVaUUsUUFBVixFQUFvQndDLE9BQXBCLEVBQTZCTCxFQUE3QixFQUFpQy9DLElBQWpDLEVBQXVDOEgsUUFBdkMsRUFBaUQ7QUFDOUUsTUFBSUMsTUFBTSxHQUFHRCxRQUFRLEdBQUcsWUFBWTtBQUFFLFdBQU9sSCxRQUFQO0FBQWtCLEdBQW5DLEdBQXNDK0csU0FBUyxDQUFDL0csUUFBRCxDQUFwRTtBQUNBLE1BQUkxQixDQUFDLEdBQUdHLEdBQUcsQ0FBQzBELEVBQUQsRUFBSy9DLElBQUwsRUFBV29ELE9BQU8sR0FBRyxDQUFILEdBQU8sQ0FBekIsQ0FBWDtBQUNBLE1BQUlsRixLQUFLLEdBQUcsQ0FBWjtBQUNBLE1BQUlELE1BQUosRUFBWXdCLElBQVosRUFBa0J1SSxRQUFsQixFQUE0QjdDLE1BQTVCO0FBQ0EsTUFBSSxPQUFPNEMsTUFBUCxJQUFpQixVQUFyQixFQUFpQyxNQUFNbEwsU0FBUyxDQUFDK0QsUUFBUSxHQUFHLG1CQUFaLENBQWYsQ0FMNkMsQ0FNOUU7O0FBQ0EsTUFBSThHLFdBQVcsQ0FBQ0ssTUFBRCxDQUFmLEVBQXlCLEtBQUs5SixNQUFNLEdBQUdQLFFBQVEsQ0FBQ2tELFFBQVEsQ0FBQzNDLE1BQVYsQ0FBdEIsRUFBeUNBLE1BQU0sR0FBR0MsS0FBbEQsRUFBeURBLEtBQUssRUFBOUQsRUFBa0U7QUFDekZpSCxVQUFNLEdBQUcvQixPQUFPLEdBQUdsRSxDQUFDLENBQUNtSSxRQUFRLENBQUM1SCxJQUFJLEdBQUdtQixRQUFRLENBQUMxQyxLQUFELENBQWhCLENBQVIsQ0FBaUMsQ0FBakMsQ0FBRCxFQUFzQ3VCLElBQUksQ0FBQyxDQUFELENBQTFDLENBQUosR0FBcURQLENBQUMsQ0FBQzBCLFFBQVEsQ0FBQzFDLEtBQUQsQ0FBVCxDQUF0RTtBQUNBLFFBQUlpSCxNQUFNLEtBQUt5QyxLQUFYLElBQW9CekMsTUFBTSxLQUFLMEMsTUFBbkMsRUFBMkMsT0FBTzFDLE1BQVA7QUFDNUMsR0FIRCxNQUdPLEtBQUs2QyxRQUFRLEdBQUdELE1BQU0sQ0FBQ2hKLElBQVAsQ0FBWTZCLFFBQVosQ0FBaEIsRUFBdUMsQ0FBQyxDQUFDbkIsSUFBSSxHQUFHdUksUUFBUSxDQUFDNUcsSUFBVCxFQUFSLEVBQXlCNkcsSUFBakUsR0FBd0U7QUFDN0U5QyxVQUFNLEdBQUdwRyxJQUFJLENBQUNpSixRQUFELEVBQVc5SSxDQUFYLEVBQWNPLElBQUksQ0FBQ3RCLEtBQW5CLEVBQTBCaUYsT0FBMUIsQ0FBYjtBQUNBLFFBQUkrQixNQUFNLEtBQUt5QyxLQUFYLElBQW9CekMsTUFBTSxLQUFLMEMsTUFBbkMsRUFBMkMsT0FBTzFDLE1BQVA7QUFDNUM7QUFDRixDQWREOztBQWVBeEksT0FBTyxDQUFDaUwsS0FBUixHQUFnQkEsS0FBaEI7QUFDQWpMLE9BQU8sQ0FBQ2tMLE1BQVIsR0FBaUJBLE1BQWpCLEM7Ozs7Ozs7Ozs7O0FDeEJBO0FBQ0EsSUFBSTdGLE1BQU0sR0FBR3RGLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixPQUFPdUwsTUFBUCxJQUFpQixXQUFqQixJQUFnQ0EsTUFBTSxDQUFDQyxJQUFQLElBQWVBLElBQS9DLEdBQzFCRCxNQUQwQixHQUNqQixPQUFPRSxJQUFQLElBQWUsV0FBZixJQUE4QkEsSUFBSSxDQUFDRCxJQUFMLElBQWFBLElBQTNDLEdBQWtEQyxJQUFsRCxDQUNYO0FBRFcsRUFFVDdCLFFBQVEsQ0FBQyxhQUFELENBQVIsRUFISjtBQUlBLElBQUksT0FBTzhCLEdBQVAsSUFBYyxRQUFsQixFQUE0QkEsR0FBRyxHQUFHckcsTUFBTixDLENBQWMsK0I7Ozs7Ozs7Ozs7O0FDTDFDLElBQUlzRyxjQUFjLEdBQUcsR0FBR0EsY0FBeEI7O0FBQ0E1TCxNQUFNLENBQUNDLE9BQVAsR0FBaUIsVUFBVUMsRUFBVixFQUFjUSxHQUFkLEVBQW1CO0FBQ2xDLFNBQU9rTCxjQUFjLENBQUN2SixJQUFmLENBQW9CbkMsRUFBcEIsRUFBd0JRLEdBQXhCLENBQVA7QUFDRCxDQUZELEM7Ozs7Ozs7Ozs7O0FDREEsSUFBSTZCLEVBQUUsR0FBR2xDLG1CQUFPLENBQUMsa0VBQUQsQ0FBaEI7O0FBQ0EsSUFBSXVILFVBQVUsR0FBR3ZILG1CQUFPLENBQUMsMEVBQUQsQ0FBeEI7O0FBQ0FMLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQkksbUJBQU8sQ0FBQyxzRUFBRCxDQUFQLEdBQTRCLFVBQVV3SCxNQUFWLEVBQWtCbkgsR0FBbEIsRUFBdUJlLEtBQXZCLEVBQThCO0FBQ3pFLFNBQU9jLEVBQUUsQ0FBQ0MsQ0FBSCxDQUFLcUYsTUFBTCxFQUFhbkgsR0FBYixFQUFrQmtILFVBQVUsQ0FBQyxDQUFELEVBQUluRyxLQUFKLENBQTVCLENBQVA7QUFDRCxDQUZnQixHQUViLFVBQVVvRyxNQUFWLEVBQWtCbkgsR0FBbEIsRUFBdUJlLEtBQXZCLEVBQThCO0FBQ2hDb0csUUFBTSxDQUFDbkgsR0FBRCxDQUFOLEdBQWNlLEtBQWQ7QUFDQSxTQUFPb0csTUFBUDtBQUNELENBTEQsQzs7Ozs7Ozs7Ozs7QUNGQSxJQUFJSyxRQUFRLEdBQUc3SCxtQkFBTyxDQUFDLDREQUFELENBQVAsQ0FBcUI2SCxRQUFwQzs7QUFDQWxJLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQmlJLFFBQVEsSUFBSUEsUUFBUSxDQUFDMkQsZUFBdEMsQzs7Ozs7Ozs7Ozs7QUNEQTdMLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixDQUFDSSxtQkFBTyxDQUFDLHNFQUFELENBQVIsSUFBOEIsQ0FBQ0EsbUJBQU8sQ0FBQywwREFBRCxDQUFQLENBQW9CLFlBQVk7QUFDOUUsU0FBTzZCLE1BQU0sQ0FBQytGLGNBQVAsQ0FBc0I1SCxtQkFBTyxDQUFDLG9FQUFELENBQVAsQ0FBeUIsS0FBekIsQ0FBdEIsRUFBdUQsR0FBdkQsRUFBNEQ7QUFBRTJFLE9BQUcsRUFBRSxZQUFZO0FBQUUsYUFBTyxDQUFQO0FBQVc7QUFBaEMsR0FBNUQsRUFBZ0dzQixDQUFoRyxJQUFxRyxDQUE1RztBQUNELENBRitDLENBQWhELEM7Ozs7Ozs7Ozs7O0FDQUEsSUFBSXhGLFFBQVEsR0FBR1QsbUJBQU8sQ0FBQyxrRUFBRCxDQUF0Qjs7QUFDQSxJQUFJeUwsY0FBYyxHQUFHekwsbUJBQU8sQ0FBQyxrRUFBRCxDQUFQLENBQXdCbUcsR0FBN0M7O0FBQ0F4RyxNQUFNLENBQUNDLE9BQVAsR0FBaUIsVUFBVXFELElBQVYsRUFBZ0I2RCxNQUFoQixFQUF3QmxELENBQXhCLEVBQTJCO0FBQzFDLE1BQUlvRixDQUFDLEdBQUdsQyxNQUFNLENBQUNDLFdBQWY7QUFDQSxNQUFJbUMsQ0FBSjs7QUFDQSxNQUFJRixDQUFDLEtBQUtwRixDQUFOLElBQVcsT0FBT29GLENBQVAsSUFBWSxVQUF2QixJQUFxQyxDQUFDRSxDQUFDLEdBQUdGLENBQUMsQ0FBQzdJLFNBQVAsTUFBc0J5RCxDQUFDLENBQUN6RCxTQUE3RCxJQUEwRU0sUUFBUSxDQUFDeUksQ0FBRCxDQUFsRixJQUF5RnVDLGNBQTdGLEVBQTZHO0FBQzNHQSxrQkFBYyxDQUFDeEksSUFBRCxFQUFPaUcsQ0FBUCxDQUFkO0FBQ0Q7O0FBQUMsU0FBT2pHLElBQVA7QUFDSCxDQU5ELEM7Ozs7Ozs7Ozs7O0FDRkE7QUFDQXRELE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixVQUFVb0csRUFBVixFQUFjMEYsSUFBZCxFQUFvQnpJLElBQXBCLEVBQTBCO0FBQ3pDLE1BQUkwSSxFQUFFLEdBQUcxSSxJQUFJLEtBQUs3QyxTQUFsQjs7QUFDQSxVQUFRc0wsSUFBSSxDQUFDeEssTUFBYjtBQUNFLFNBQUssQ0FBTDtBQUFRLGFBQU95SyxFQUFFLEdBQUczRixFQUFFLEVBQUwsR0FDR0EsRUFBRSxDQUFDaEUsSUFBSCxDQUFRaUIsSUFBUixDQURaOztBQUVSLFNBQUssQ0FBTDtBQUFRLGFBQU8wSSxFQUFFLEdBQUczRixFQUFFLENBQUMwRixJQUFJLENBQUMsQ0FBRCxDQUFMLENBQUwsR0FDRzFGLEVBQUUsQ0FBQ2hFLElBQUgsQ0FBUWlCLElBQVIsRUFBY3lJLElBQUksQ0FBQyxDQUFELENBQWxCLENBRFo7O0FBRVIsU0FBSyxDQUFMO0FBQVEsYUFBT0MsRUFBRSxHQUFHM0YsRUFBRSxDQUFDMEYsSUFBSSxDQUFDLENBQUQsQ0FBTCxFQUFVQSxJQUFJLENBQUMsQ0FBRCxDQUFkLENBQUwsR0FDRzFGLEVBQUUsQ0FBQ2hFLElBQUgsQ0FBUWlCLElBQVIsRUFBY3lJLElBQUksQ0FBQyxDQUFELENBQWxCLEVBQXVCQSxJQUFJLENBQUMsQ0FBRCxDQUEzQixDQURaOztBQUVSLFNBQUssQ0FBTDtBQUFRLGFBQU9DLEVBQUUsR0FBRzNGLEVBQUUsQ0FBQzBGLElBQUksQ0FBQyxDQUFELENBQUwsRUFBVUEsSUFBSSxDQUFDLENBQUQsQ0FBZCxFQUFtQkEsSUFBSSxDQUFDLENBQUQsQ0FBdkIsQ0FBTCxHQUNHMUYsRUFBRSxDQUFDaEUsSUFBSCxDQUFRaUIsSUFBUixFQUFjeUksSUFBSSxDQUFDLENBQUQsQ0FBbEIsRUFBdUJBLElBQUksQ0FBQyxDQUFELENBQTNCLEVBQWdDQSxJQUFJLENBQUMsQ0FBRCxDQUFwQyxDQURaOztBQUVSLFNBQUssQ0FBTDtBQUFRLGFBQU9DLEVBQUUsR0FBRzNGLEVBQUUsQ0FBQzBGLElBQUksQ0FBQyxDQUFELENBQUwsRUFBVUEsSUFBSSxDQUFDLENBQUQsQ0FBZCxFQUFtQkEsSUFBSSxDQUFDLENBQUQsQ0FBdkIsRUFBNEJBLElBQUksQ0FBQyxDQUFELENBQWhDLENBQUwsR0FDRzFGLEVBQUUsQ0FBQ2hFLElBQUgsQ0FBUWlCLElBQVIsRUFBY3lJLElBQUksQ0FBQyxDQUFELENBQWxCLEVBQXVCQSxJQUFJLENBQUMsQ0FBRCxDQUEzQixFQUFnQ0EsSUFBSSxDQUFDLENBQUQsQ0FBcEMsRUFBeUNBLElBQUksQ0FBQyxDQUFELENBQTdDLENBRFo7QUFUVjs7QUFXRSxTQUFPMUYsRUFBRSxDQUFDMkIsS0FBSCxDQUFTMUUsSUFBVCxFQUFleUksSUFBZixDQUFQO0FBQ0gsQ0FkRCxDOzs7Ozs7Ozs7OztBQ0RBO0FBQ0EsSUFBSXJLLEdBQUcsR0FBR3JCLG1CQUFPLENBQUMsc0RBQUQsQ0FBakIsQyxDQUNBOzs7QUFDQUwsTUFBTSxDQUFDQyxPQUFQLEdBQWlCaUMsTUFBTSxDQUFDLEdBQUQsQ0FBTixDQUFZK0osb0JBQVosQ0FBaUMsQ0FBakMsSUFBc0MvSixNQUF0QyxHQUErQyxVQUFVaEMsRUFBVixFQUFjO0FBQzVFLFNBQU93QixHQUFHLENBQUN4QixFQUFELENBQUgsSUFBVyxRQUFYLEdBQXNCQSxFQUFFLENBQUNtSSxLQUFILENBQVMsRUFBVCxDQUF0QixHQUFxQ25HLE1BQU0sQ0FBQ2hDLEVBQUQsQ0FBbEQ7QUFDRCxDQUZELEM7Ozs7Ozs7Ozs7O0FDSEE7QUFDQSxJQUFJZ00sU0FBUyxHQUFHN0wsbUJBQU8sQ0FBQyxrRUFBRCxDQUF2Qjs7QUFDQSxJQUFJK0ssUUFBUSxHQUFHL0ssbUJBQU8sQ0FBQyxzREFBRCxDQUFQLENBQWtCLFVBQWxCLENBQWY7O0FBQ0EsSUFBSUMsVUFBVSxHQUFHQyxLQUFLLENBQUNDLFNBQXZCOztBQUVBUixNQUFNLENBQUNDLE9BQVAsR0FBaUIsVUFBVUMsRUFBVixFQUFjO0FBQzdCLFNBQU9BLEVBQUUsS0FBS08sU0FBUCxLQUFxQnlMLFNBQVMsQ0FBQzNMLEtBQVYsS0FBb0JMLEVBQXBCLElBQTBCSSxVQUFVLENBQUM4SyxRQUFELENBQVYsS0FBeUJsTCxFQUF4RSxDQUFQO0FBQ0QsQ0FGRCxDOzs7Ozs7Ozs7OztBQ0xBO0FBQ0EsSUFBSXdCLEdBQUcsR0FBR3JCLG1CQUFPLENBQUMsc0RBQUQsQ0FBakI7O0FBQ0FMLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQk0sS0FBSyxDQUFDNEwsT0FBTixJQUFpQixTQUFTQSxPQUFULENBQWlCekIsR0FBakIsRUFBc0I7QUFDdEQsU0FBT2hKLEdBQUcsQ0FBQ2dKLEdBQUQsQ0FBSCxJQUFZLE9BQW5CO0FBQ0QsQ0FGRCxDOzs7Ozs7Ozs7OztBQ0ZBMUssTUFBTSxDQUFDQyxPQUFQLEdBQWlCLFVBQVVDLEVBQVYsRUFBYztBQUM3QixTQUFPLE9BQU9BLEVBQVAsS0FBYyxRQUFkLEdBQXlCQSxFQUFFLEtBQUssSUFBaEMsR0FBdUMsT0FBT0EsRUFBUCxLQUFjLFVBQTVEO0FBQ0QsQ0FGRCxDOzs7Ozs7Ozs7OztBQ0FBO0FBQ0EsSUFBSVksUUFBUSxHQUFHVCxtQkFBTyxDQUFDLGtFQUFELENBQXRCOztBQUNBLElBQUlxQixHQUFHLEdBQUdyQixtQkFBTyxDQUFDLHNEQUFELENBQWpCOztBQUNBLElBQUkrTCxLQUFLLEdBQUcvTCxtQkFBTyxDQUFDLHNEQUFELENBQVAsQ0FBa0IsT0FBbEIsQ0FBWjs7QUFDQUwsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLFVBQVVDLEVBQVYsRUFBYztBQUM3QixNQUFJbU0sUUFBSjtBQUNBLFNBQU92TCxRQUFRLENBQUNaLEVBQUQsQ0FBUixLQUFpQixDQUFDbU0sUUFBUSxHQUFHbk0sRUFBRSxDQUFDa00sS0FBRCxDQUFkLE1BQTJCM0wsU0FBM0IsR0FBdUMsQ0FBQyxDQUFDNEwsUUFBekMsR0FBb0QzSyxHQUFHLENBQUN4QixFQUFELENBQUgsSUFBVyxRQUFoRixDQUFQO0FBQ0QsQ0FIRCxDOzs7Ozs7Ozs7OztBQ0pBO0FBQ0EsSUFBSXlLLFFBQVEsR0FBR3RLLG1CQUFPLENBQUMsa0VBQUQsQ0FBdEI7O0FBQ0FMLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixVQUFVcUwsUUFBVixFQUFvQmpGLEVBQXBCLEVBQXdCNUUsS0FBeEIsRUFBK0JpRixPQUEvQixFQUF3QztBQUN2RCxNQUFJO0FBQ0YsV0FBT0EsT0FBTyxHQUFHTCxFQUFFLENBQUNzRSxRQUFRLENBQUNsSixLQUFELENBQVIsQ0FBZ0IsQ0FBaEIsQ0FBRCxFQUFxQkEsS0FBSyxDQUFDLENBQUQsQ0FBMUIsQ0FBTCxHQUFzQzRFLEVBQUUsQ0FBQzVFLEtBQUQsQ0FBdEQsQ0FERSxDQUVKO0FBQ0MsR0FIRCxDQUdFLE9BQU9NLENBQVAsRUFBVTtBQUNWLFFBQUl1SyxHQUFHLEdBQUdoQixRQUFRLENBQUMsUUFBRCxDQUFsQjtBQUNBLFFBQUlnQixHQUFHLEtBQUs3TCxTQUFaLEVBQXVCa0ssUUFBUSxDQUFDMkIsR0FBRyxDQUFDakssSUFBSixDQUFTaUosUUFBVCxDQUFELENBQVI7QUFDdkIsVUFBTXZKLENBQU47QUFDRDtBQUNGLENBVEQsQzs7Ozs7Ozs7Ozs7O0FDRmE7O0FBQ2IsSUFBSVUsTUFBTSxHQUFHcEMsbUJBQU8sQ0FBQywwRUFBRCxDQUFwQjs7QUFDQSxJQUFJa00sVUFBVSxHQUFHbE0sbUJBQU8sQ0FBQywwRUFBRCxDQUF4Qjs7QUFDQSxJQUFJdUYsY0FBYyxHQUFHdkYsbUJBQU8sQ0FBQyxrRkFBRCxDQUE1Qjs7QUFDQSxJQUFJbU0saUJBQWlCLEdBQUcsRUFBeEIsQyxDQUVBOztBQUNBbk0sbUJBQU8sQ0FBQyx3REFBRCxDQUFQLENBQW1CbU0saUJBQW5CLEVBQXNDbk0sbUJBQU8sQ0FBQyxzREFBRCxDQUFQLENBQWtCLFVBQWxCLENBQXRDLEVBQXFFLFlBQVk7QUFBRSxTQUFPLElBQVA7QUFBYyxDQUFqRzs7QUFFQUwsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLFVBQVVVLFdBQVYsRUFBdUJtRCxJQUF2QixFQUE2QlksSUFBN0IsRUFBbUM7QUFDbEQvRCxhQUFXLENBQUNILFNBQVosR0FBd0JpQyxNQUFNLENBQUMrSixpQkFBRCxFQUFvQjtBQUFFOUgsUUFBSSxFQUFFNkgsVUFBVSxDQUFDLENBQUQsRUFBSTdILElBQUo7QUFBbEIsR0FBcEIsQ0FBOUI7QUFDQWtCLGdCQUFjLENBQUNqRixXQUFELEVBQWNtRCxJQUFJLEdBQUcsV0FBckIsQ0FBZDtBQUNELENBSEQsQzs7Ozs7Ozs7Ozs7O0FDVGE7O0FBQ2IsSUFBSTJJLE9BQU8sR0FBR3BNLG1CQUFPLENBQUMsOERBQUQsQ0FBckI7O0FBQ0EsSUFBSWtGLE9BQU8sR0FBR2xGLG1CQUFPLENBQUMsNERBQUQsQ0FBckI7O0FBQ0EsSUFBSW1GLFFBQVEsR0FBR25GLG1CQUFPLENBQUMsZ0VBQUQsQ0FBdEI7O0FBQ0EsSUFBSXlJLElBQUksR0FBR3pJLG1CQUFPLENBQUMsd0RBQUQsQ0FBbEI7O0FBQ0EsSUFBSTZMLFNBQVMsR0FBRzdMLG1CQUFPLENBQUMsa0VBQUQsQ0FBdkI7O0FBQ0EsSUFBSXFNLFdBQVcsR0FBR3JNLG1CQUFPLENBQUMsc0VBQUQsQ0FBekI7O0FBQ0EsSUFBSXVGLGNBQWMsR0FBR3ZGLG1CQUFPLENBQUMsa0ZBQUQsQ0FBNUI7O0FBQ0EsSUFBSXNNLGNBQWMsR0FBR3RNLG1CQUFPLENBQUMsb0VBQUQsQ0FBNUI7O0FBQ0EsSUFBSStLLFFBQVEsR0FBRy9LLG1CQUFPLENBQUMsc0RBQUQsQ0FBUCxDQUFrQixVQUFsQixDQUFmOztBQUNBLElBQUl1TSxLQUFLLEdBQUcsRUFBRSxHQUFHQyxJQUFILElBQVcsVUFBVSxHQUFHQSxJQUFILEVBQXZCLENBQVosQyxDQUErQzs7QUFDL0MsSUFBSUMsV0FBVyxHQUFHLFlBQWxCO0FBQ0EsSUFBSUMsSUFBSSxHQUFHLE1BQVg7QUFDQSxJQUFJQyxNQUFNLEdBQUcsUUFBYjs7QUFFQSxJQUFJQyxVQUFVLEdBQUcsWUFBWTtBQUFFLFNBQU8sSUFBUDtBQUFjLENBQTdDOztBQUVBak4sTUFBTSxDQUFDQyxPQUFQLEdBQWlCLFVBQVVnRyxJQUFWLEVBQWdCbkMsSUFBaEIsRUFBc0JuRCxXQUF0QixFQUFtQytELElBQW5DLEVBQXlDd0ksT0FBekMsRUFBa0RDLE1BQWxELEVBQTBEQyxNQUExRCxFQUFrRTtBQUNqRlYsYUFBVyxDQUFDL0wsV0FBRCxFQUFjbUQsSUFBZCxFQUFvQlksSUFBcEIsQ0FBWDs7QUFDQSxNQUFJMkksU0FBUyxHQUFHLFVBQVVqSSxJQUFWLEVBQWdCO0FBQzlCLFFBQUksQ0FBQ3dILEtBQUQsSUFBVXhILElBQUksSUFBSWMsS0FBdEIsRUFBNkIsT0FBT0EsS0FBSyxDQUFDZCxJQUFELENBQVo7O0FBQzdCLFlBQVFBLElBQVI7QUFDRSxXQUFLMkgsSUFBTDtBQUFXLGVBQU8sU0FBU0YsSUFBVCxHQUFnQjtBQUFFLGlCQUFPLElBQUlsTSxXQUFKLENBQWdCLElBQWhCLEVBQXNCeUUsSUFBdEIsQ0FBUDtBQUFxQyxTQUE5RDs7QUFDWCxXQUFLNEgsTUFBTDtBQUFhLGVBQU8sU0FBU00sTUFBVCxHQUFrQjtBQUFFLGlCQUFPLElBQUkzTSxXQUFKLENBQWdCLElBQWhCLEVBQXNCeUUsSUFBdEIsQ0FBUDtBQUFxQyxTQUFoRTtBQUZmOztBQUdFLFdBQU8sU0FBU3NCLE9BQVQsR0FBbUI7QUFBRSxhQUFPLElBQUkvRixXQUFKLENBQWdCLElBQWhCLEVBQXNCeUUsSUFBdEIsQ0FBUDtBQUFxQyxLQUFqRTtBQUNILEdBTkQ7O0FBT0EsTUFBSXpELEdBQUcsR0FBR21DLElBQUksR0FBRyxXQUFqQjtBQUNBLE1BQUl5SixVQUFVLEdBQUdMLE9BQU8sSUFBSUYsTUFBNUI7QUFDQSxNQUFJUSxVQUFVLEdBQUcsS0FBakI7QUFDQSxNQUFJdEgsS0FBSyxHQUFHRCxJQUFJLENBQUN6RixTQUFqQjtBQUNBLE1BQUlpTixPQUFPLEdBQUd2SCxLQUFLLENBQUNrRixRQUFELENBQUwsSUFBbUJsRixLQUFLLENBQUM0RyxXQUFELENBQXhCLElBQXlDSSxPQUFPLElBQUloSCxLQUFLLENBQUNnSCxPQUFELENBQXZFO0FBQ0EsTUFBSVEsUUFBUSxHQUFHRCxPQUFPLElBQUlKLFNBQVMsQ0FBQ0gsT0FBRCxDQUFuQztBQUNBLE1BQUlTLFFBQVEsR0FBR1QsT0FBTyxHQUFHLENBQUNLLFVBQUQsR0FBY0csUUFBZCxHQUF5QkwsU0FBUyxDQUFDLFNBQUQsQ0FBckMsR0FBbUQ1TSxTQUF6RTtBQUNBLE1BQUltTixVQUFVLEdBQUc5SixJQUFJLElBQUksT0FBUixHQUFrQm9DLEtBQUssQ0FBQ1EsT0FBTixJQUFpQitHLE9BQW5DLEdBQTZDQSxPQUE5RDtBQUNBLE1BQUkzSCxPQUFKLEVBQWFwRixHQUFiLEVBQWtCOEwsaUJBQWxCLENBakJpRixDQWtCakY7O0FBQ0EsTUFBSW9CLFVBQUosRUFBZ0I7QUFDZHBCLHFCQUFpQixHQUFHRyxjQUFjLENBQUNpQixVQUFVLENBQUN2TCxJQUFYLENBQWdCLElBQUk0RCxJQUFKLEVBQWhCLENBQUQsQ0FBbEM7O0FBQ0EsUUFBSXVHLGlCQUFpQixLQUFLdEssTUFBTSxDQUFDMUIsU0FBN0IsSUFBMENnTSxpQkFBaUIsQ0FBQzlILElBQWhFLEVBQXNFO0FBQ3BFO0FBQ0FrQixvQkFBYyxDQUFDNEcsaUJBQUQsRUFBb0I3SyxHQUFwQixFQUF5QixJQUF6QixDQUFkLENBRm9FLENBR3BFOztBQUNBLFVBQUksQ0FBQzhLLE9BQUQsSUFBWSxPQUFPRCxpQkFBaUIsQ0FBQ3BCLFFBQUQsQ0FBeEIsSUFBc0MsVUFBdEQsRUFBa0V0QyxJQUFJLENBQUMwRCxpQkFBRCxFQUFvQnBCLFFBQXBCLEVBQThCNkIsVUFBOUIsQ0FBSjtBQUNuRTtBQUNGLEdBM0JnRixDQTRCakY7OztBQUNBLE1BQUlNLFVBQVUsSUFBSUUsT0FBZCxJQUF5QkEsT0FBTyxDQUFDN00sSUFBUixLQUFpQm9NLE1BQTlDLEVBQXNEO0FBQ3BEUSxjQUFVLEdBQUcsSUFBYjs7QUFDQUUsWUFBUSxHQUFHLFNBQVNKLE1BQVQsR0FBa0I7QUFBRSxhQUFPRyxPQUFPLENBQUNwTCxJQUFSLENBQWEsSUFBYixDQUFQO0FBQTRCLEtBQTNEO0FBQ0QsR0FoQ2dGLENBaUNqRjs7O0FBQ0EsTUFBSSxDQUFDLENBQUNvSyxPQUFELElBQVlXLE1BQWIsTUFBeUJSLEtBQUssSUFBSVksVUFBVCxJQUF1QixDQUFDdEgsS0FBSyxDQUFDa0YsUUFBRCxDQUF0RCxDQUFKLEVBQXVFO0FBQ3JFdEMsUUFBSSxDQUFDNUMsS0FBRCxFQUFRa0YsUUFBUixFQUFrQnNDLFFBQWxCLENBQUo7QUFDRCxHQXBDZ0YsQ0FxQ2pGOzs7QUFDQXhCLFdBQVMsQ0FBQ3BJLElBQUQsQ0FBVCxHQUFrQjRKLFFBQWxCO0FBQ0F4QixXQUFTLENBQUN2SyxHQUFELENBQVQsR0FBaUJzTCxVQUFqQjs7QUFDQSxNQUFJQyxPQUFKLEVBQWE7QUFDWHBILFdBQU8sR0FBRztBQUNSd0gsWUFBTSxFQUFFQyxVQUFVLEdBQUdHLFFBQUgsR0FBY0wsU0FBUyxDQUFDTCxNQUFELENBRGpDO0FBRVJILFVBQUksRUFBRU0sTUFBTSxHQUFHTyxRQUFILEdBQWNMLFNBQVMsQ0FBQ04sSUFBRCxDQUYzQjtBQUdSckcsYUFBTyxFQUFFaUg7QUFIRCxLQUFWO0FBS0EsUUFBSVAsTUFBSixFQUFZLEtBQUsxTSxHQUFMLElBQVlvRixPQUFaLEVBQXFCO0FBQy9CLFVBQUksRUFBRXBGLEdBQUcsSUFBSXdGLEtBQVQsQ0FBSixFQUFxQlYsUUFBUSxDQUFDVSxLQUFELEVBQVF4RixHQUFSLEVBQWFvRixPQUFPLENBQUNwRixHQUFELENBQXBCLENBQVI7QUFDdEIsS0FGRCxNQUVPNkUsT0FBTyxDQUFDQSxPQUFPLENBQUNnRSxDQUFSLEdBQVloRSxPQUFPLENBQUNnQyxDQUFSLElBQWFxRixLQUFLLElBQUlZLFVBQXRCLENBQWIsRUFBZ0QxSixJQUFoRCxFQUFzRGdDLE9BQXRELENBQVA7QUFDUjs7QUFDRCxTQUFPQSxPQUFQO0FBQ0QsQ0FuREQsQzs7Ozs7Ozs7Ozs7QUNqQkEsSUFBSXNGLFFBQVEsR0FBRy9LLG1CQUFPLENBQUMsc0RBQUQsQ0FBUCxDQUFrQixVQUFsQixDQUFmOztBQUNBLElBQUl3TixZQUFZLEdBQUcsS0FBbkI7O0FBRUEsSUFBSTtBQUNGLE1BQUlDLEtBQUssR0FBRyxDQUFDLENBQUQsRUFBSTFDLFFBQUosR0FBWjs7QUFDQTBDLE9BQUssQ0FBQyxRQUFELENBQUwsR0FBa0IsWUFBWTtBQUFFRCxnQkFBWSxHQUFHLElBQWY7QUFBc0IsR0FBdEQsQ0FGRSxDQUdGOzs7QUFDQXROLE9BQUssQ0FBQ3dOLElBQU4sQ0FBV0QsS0FBWCxFQUFrQixZQUFZO0FBQUUsVUFBTSxDQUFOO0FBQVUsR0FBMUM7QUFDRCxDQUxELENBS0UsT0FBTy9MLENBQVAsRUFBVTtBQUFFO0FBQWE7O0FBRTNCL0IsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLFVBQVUrSixJQUFWLEVBQWdCZ0UsV0FBaEIsRUFBNkI7QUFDNUMsTUFBSSxDQUFDQSxXQUFELElBQWdCLENBQUNILFlBQXJCLEVBQW1DLE9BQU8sS0FBUDtBQUNuQyxNQUFJSSxJQUFJLEdBQUcsS0FBWDs7QUFDQSxNQUFJO0FBQ0YsUUFBSUMsR0FBRyxHQUFHLENBQUMsQ0FBRCxDQUFWO0FBQ0EsUUFBSWxILElBQUksR0FBR2tILEdBQUcsQ0FBQzlDLFFBQUQsQ0FBSCxFQUFYOztBQUNBcEUsUUFBSSxDQUFDdEMsSUFBTCxHQUFZLFlBQVk7QUFBRSxhQUFPO0FBQUU2RyxZQUFJLEVBQUUwQyxJQUFJLEdBQUc7QUFBZixPQUFQO0FBQStCLEtBQXpEOztBQUNBQyxPQUFHLENBQUM5QyxRQUFELENBQUgsR0FBZ0IsWUFBWTtBQUFFLGFBQU9wRSxJQUFQO0FBQWMsS0FBNUM7O0FBQ0FnRCxRQUFJLENBQUNrRSxHQUFELENBQUo7QUFDRCxHQU5ELENBTUUsT0FBT25NLENBQVAsRUFBVTtBQUFFO0FBQWE7O0FBQzNCLFNBQU9rTSxJQUFQO0FBQ0QsQ0FYRCxDOzs7Ozs7Ozs7OztBQ1ZBak8sTUFBTSxDQUFDQyxPQUFQLEdBQWlCLFVBQVVzTCxJQUFWLEVBQWdCOUosS0FBaEIsRUFBdUI7QUFDdEMsU0FBTztBQUFFQSxTQUFLLEVBQUVBLEtBQVQ7QUFBZ0I4SixRQUFJLEVBQUUsQ0FBQyxDQUFDQTtBQUF4QixHQUFQO0FBQ0QsQ0FGRCxDOzs7Ozs7Ozs7OztBQ0FBdkwsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLEVBQWpCLEM7Ozs7Ozs7Ozs7O0FDQUFELE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixLQUFqQixDOzs7Ozs7Ozs7OztBQ0FBLElBQUlrTyxJQUFJLEdBQUc5TixtQkFBTyxDQUFDLHNEQUFELENBQVAsQ0FBa0IsTUFBbEIsQ0FBWDs7QUFDQSxJQUFJUyxRQUFRLEdBQUdULG1CQUFPLENBQUMsa0VBQUQsQ0FBdEI7O0FBQ0EsSUFBSTBFLEdBQUcsR0FBRzFFLG1CQUFPLENBQUMsc0RBQUQsQ0FBakI7O0FBQ0EsSUFBSStOLE9BQU8sR0FBRy9OLG1CQUFPLENBQUMsa0VBQUQsQ0FBUCxDQUF3Qm1DLENBQXRDOztBQUNBLElBQUk2TCxFQUFFLEdBQUcsQ0FBVDs7QUFDQSxJQUFJQyxZQUFZLEdBQUdwTSxNQUFNLENBQUNvTSxZQUFQLElBQXVCLFlBQVk7QUFDcEQsU0FBTyxJQUFQO0FBQ0QsQ0FGRDs7QUFHQSxJQUFJQyxNQUFNLEdBQUcsQ0FBQ2xPLG1CQUFPLENBQUMsMERBQUQsQ0FBUCxDQUFvQixZQUFZO0FBQzVDLFNBQU9pTyxZQUFZLENBQUNwTSxNQUFNLENBQUNzTSxpQkFBUCxDQUF5QixFQUF6QixDQUFELENBQW5CO0FBQ0QsQ0FGYSxDQUFkOztBQUdBLElBQUlDLE9BQU8sR0FBRyxVQUFVdk8sRUFBVixFQUFjO0FBQzFCa08sU0FBTyxDQUFDbE8sRUFBRCxFQUFLaU8sSUFBTCxFQUFXO0FBQUUxTSxTQUFLLEVBQUU7QUFDekJnRCxPQUFDLEVBQUUsTUFBTSxFQUFFNEosRUFEYztBQUNWO0FBQ2ZLLE9BQUMsRUFBRSxFQUZzQixDQUVWOztBQUZVO0FBQVQsR0FBWCxDQUFQO0FBSUQsQ0FMRDs7QUFNQSxJQUFJeEwsT0FBTyxHQUFHLFVBQVVoRCxFQUFWLEVBQWN1QyxNQUFkLEVBQXNCO0FBQ2xDO0FBQ0EsTUFBSSxDQUFDM0IsUUFBUSxDQUFDWixFQUFELENBQWIsRUFBbUIsT0FBTyxPQUFPQSxFQUFQLElBQWEsUUFBYixHQUF3QkEsRUFBeEIsR0FBNkIsQ0FBQyxPQUFPQSxFQUFQLElBQWEsUUFBYixHQUF3QixHQUF4QixHQUE4QixHQUEvQixJQUFzQ0EsRUFBMUU7O0FBQ25CLE1BQUksQ0FBQzZFLEdBQUcsQ0FBQzdFLEVBQUQsRUFBS2lPLElBQUwsQ0FBUixFQUFvQjtBQUNsQjtBQUNBLFFBQUksQ0FBQ0csWUFBWSxDQUFDcE8sRUFBRCxDQUFqQixFQUF1QixPQUFPLEdBQVAsQ0FGTCxDQUdsQjs7QUFDQSxRQUFJLENBQUN1QyxNQUFMLEVBQWEsT0FBTyxHQUFQLENBSkssQ0FLbEI7O0FBQ0FnTSxXQUFPLENBQUN2TyxFQUFELENBQVAsQ0FOa0IsQ0FPcEI7QUFDQzs7QUFBQyxTQUFPQSxFQUFFLENBQUNpTyxJQUFELENBQUYsQ0FBUzFKLENBQWhCO0FBQ0gsQ0FaRDs7QUFhQSxJQUFJa0ssT0FBTyxHQUFHLFVBQVV6TyxFQUFWLEVBQWN1QyxNQUFkLEVBQXNCO0FBQ2xDLE1BQUksQ0FBQ3NDLEdBQUcsQ0FBQzdFLEVBQUQsRUFBS2lPLElBQUwsQ0FBUixFQUFvQjtBQUNsQjtBQUNBLFFBQUksQ0FBQ0csWUFBWSxDQUFDcE8sRUFBRCxDQUFqQixFQUF1QixPQUFPLElBQVAsQ0FGTCxDQUdsQjs7QUFDQSxRQUFJLENBQUN1QyxNQUFMLEVBQWEsT0FBTyxLQUFQLENBSkssQ0FLbEI7O0FBQ0FnTSxXQUFPLENBQUN2TyxFQUFELENBQVAsQ0FOa0IsQ0FPcEI7QUFDQzs7QUFBQyxTQUFPQSxFQUFFLENBQUNpTyxJQUFELENBQUYsQ0FBU08sQ0FBaEI7QUFDSCxDQVZELEMsQ0FXQTs7O0FBQ0EsSUFBSUUsUUFBUSxHQUFHLFVBQVUxTyxFQUFWLEVBQWM7QUFDM0IsTUFBSXFPLE1BQU0sSUFBSTlJLElBQUksQ0FBQ2tCLElBQWYsSUFBdUIySCxZQUFZLENBQUNwTyxFQUFELENBQW5DLElBQTJDLENBQUM2RSxHQUFHLENBQUM3RSxFQUFELEVBQUtpTyxJQUFMLENBQW5ELEVBQStETSxPQUFPLENBQUN2TyxFQUFELENBQVA7QUFDL0QsU0FBT0EsRUFBUDtBQUNELENBSEQ7O0FBSUEsSUFBSXVGLElBQUksR0FBR3pGLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjtBQUMxQm1HLEtBQUcsRUFBRStILElBRHFCO0FBRTFCeEgsTUFBSSxFQUFFLEtBRm9CO0FBRzFCekQsU0FBTyxFQUFFQSxPQUhpQjtBQUkxQnlMLFNBQU8sRUFBRUEsT0FKaUI7QUFLMUJDLFVBQVEsRUFBRUE7QUFMZ0IsQ0FBNUIsQzs7Ozs7Ozs7Ozs7QUM5Q0EsSUFBSXRKLE1BQU0sR0FBR2pGLG1CQUFPLENBQUMsNERBQUQsQ0FBcEI7O0FBQ0EsSUFBSXdPLFNBQVMsR0FBR3hPLG1CQUFPLENBQUMsd0RBQUQsQ0FBUCxDQUFtQm1HLEdBQW5DOztBQUNBLElBQUlzSSxRQUFRLEdBQUd4SixNQUFNLENBQUN5SixnQkFBUCxJQUEyQnpKLE1BQU0sQ0FBQzBKLHNCQUFqRDtBQUNBLElBQUlDLE9BQU8sR0FBRzNKLE1BQU0sQ0FBQzJKLE9BQXJCO0FBQ0EsSUFBSUMsT0FBTyxHQUFHNUosTUFBTSxDQUFDNEosT0FBckI7QUFDQSxJQUFJQyxNQUFNLEdBQUc5TyxtQkFBTyxDQUFDLHNEQUFELENBQVAsQ0FBa0I0TyxPQUFsQixLQUE4QixTQUEzQzs7QUFFQWpQLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixZQUFZO0FBQzNCLE1BQUltUCxJQUFKLEVBQVVDLElBQVYsRUFBZ0JDLE1BQWhCOztBQUVBLE1BQUlDLEtBQUssR0FBRyxZQUFZO0FBQ3RCLFFBQUlDLE1BQUosRUFBWW5KLEVBQVo7QUFDQSxRQUFJOEksTUFBTSxLQUFLSyxNQUFNLEdBQUdQLE9BQU8sQ0FBQ1EsTUFBdEIsQ0FBVixFQUF5Q0QsTUFBTSxDQUFDRSxJQUFQOztBQUN6QyxXQUFPTixJQUFQLEVBQWE7QUFDWC9JLFFBQUUsR0FBRytJLElBQUksQ0FBQy9JLEVBQVY7QUFDQStJLFVBQUksR0FBR0EsSUFBSSxDQUFDMUssSUFBWjs7QUFDQSxVQUFJO0FBQ0YyQixVQUFFO0FBQ0gsT0FGRCxDQUVFLE9BQU90RSxDQUFQLEVBQVU7QUFDVixZQUFJcU4sSUFBSixFQUFVRSxNQUFNLEdBQWhCLEtBQ0tELElBQUksR0FBRzVPLFNBQVA7QUFDTCxjQUFNc0IsQ0FBTjtBQUNEO0FBQ0Y7O0FBQUNzTixRQUFJLEdBQUc1TyxTQUFQO0FBQ0YsUUFBSStPLE1BQUosRUFBWUEsTUFBTSxDQUFDRyxLQUFQO0FBQ2IsR0FmRCxDQUgyQixDQW9CM0I7OztBQUNBLE1BQUlSLE1BQUosRUFBWTtBQUNWRyxVQUFNLEdBQUcsWUFBWTtBQUNuQkwsYUFBTyxDQUFDVyxRQUFSLENBQWlCTCxLQUFqQjtBQUNELEtBRkQsQ0FEVSxDQUlaOztBQUNDLEdBTEQsTUFLTyxJQUFJVCxRQUFRLElBQUksRUFBRXhKLE1BQU0sQ0FBQ3VLLFNBQVAsSUFBb0J2SyxNQUFNLENBQUN1SyxTQUFQLENBQWlCQyxVQUF2QyxDQUFoQixFQUFvRTtBQUN6RSxRQUFJQyxNQUFNLEdBQUcsSUFBYjtBQUNBLFFBQUlDLElBQUksR0FBRzlILFFBQVEsQ0FBQytILGNBQVQsQ0FBd0IsRUFBeEIsQ0FBWDtBQUNBLFFBQUluQixRQUFKLENBQWFTLEtBQWIsRUFBb0JXLE9BQXBCLENBQTRCRixJQUE1QixFQUFrQztBQUFFRyxtQkFBYSxFQUFFO0FBQWpCLEtBQWxDLEVBSHlFLENBR2I7O0FBQzVEYixVQUFNLEdBQUcsWUFBWTtBQUNuQlUsVUFBSSxDQUFDMUwsSUFBTCxHQUFZeUwsTUFBTSxHQUFHLENBQUNBLE1BQXRCO0FBQ0QsS0FGRCxDQUp5RSxDQU8zRTs7QUFDQyxHQVJNLE1BUUEsSUFBSWIsT0FBTyxJQUFJQSxPQUFPLENBQUNrQixPQUF2QixFQUFnQztBQUNyQztBQUNBLFFBQUlDLE9BQU8sR0FBR25CLE9BQU8sQ0FBQ2tCLE9BQVIsQ0FBZ0IzUCxTQUFoQixDQUFkOztBQUNBNk8sVUFBTSxHQUFHLFlBQVk7QUFDbkJlLGFBQU8sQ0FBQ0MsSUFBUixDQUFhZixLQUFiO0FBQ0QsS0FGRCxDQUhxQyxDQU12QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0MsR0FaTSxNQVlBO0FBQ0xELFVBQU0sR0FBRyxZQUFZO0FBQ25CO0FBQ0FULGVBQVMsQ0FBQ3hNLElBQVYsQ0FBZWlELE1BQWYsRUFBdUJpSyxLQUF2QjtBQUNELEtBSEQ7QUFJRDs7QUFFRCxTQUFPLFVBQVVsSixFQUFWLEVBQWM7QUFDbkIsUUFBSWtLLElBQUksR0FBRztBQUFFbEssUUFBRSxFQUFFQSxFQUFOO0FBQVUzQixVQUFJLEVBQUVqRTtBQUFoQixLQUFYO0FBQ0EsUUFBSTRPLElBQUosRUFBVUEsSUFBSSxDQUFDM0ssSUFBTCxHQUFZNkwsSUFBWjs7QUFDVixRQUFJLENBQUNuQixJQUFMLEVBQVc7QUFDVEEsVUFBSSxHQUFHbUIsSUFBUDtBQUNBakIsWUFBTTtBQUNQOztBQUFDRCxRQUFJLEdBQUdrQixJQUFQO0FBQ0gsR0FQRDtBQVFELENBN0RELEM7Ozs7Ozs7Ozs7OztDQ05BOztBQUNBLElBQUl6SSxTQUFTLEdBQUd6SCxtQkFBTyxDQUFDLG9FQUFELENBQXZCOztBQUVBLFNBQVNtUSxpQkFBVCxDQUEyQnZNLENBQTNCLEVBQThCO0FBQzVCLE1BQUltTSxPQUFKLEVBQWFLLE1BQWI7QUFDQSxPQUFLSixPQUFMLEdBQWUsSUFBSXBNLENBQUosQ0FBTSxVQUFVeU0sU0FBVixFQUFxQkMsUUFBckIsRUFBK0I7QUFDbEQsUUFBSVAsT0FBTyxLQUFLM1AsU0FBWixJQUF5QmdRLE1BQU0sS0FBS2hRLFNBQXhDLEVBQW1ELE1BQU1OLFNBQVMsQ0FBQyx5QkFBRCxDQUFmO0FBQ25EaVEsV0FBTyxHQUFHTSxTQUFWO0FBQ0FELFVBQU0sR0FBR0UsUUFBVDtBQUNELEdBSmMsQ0FBZjtBQUtBLE9BQUtQLE9BQUwsR0FBZXRJLFNBQVMsQ0FBQ3NJLE9BQUQsQ0FBeEI7QUFDQSxPQUFLSyxNQUFMLEdBQWMzSSxTQUFTLENBQUMySSxNQUFELENBQXZCO0FBQ0Q7O0FBRUR6USxNQUFNLENBQUNDLE9BQVAsQ0FBZXVDLENBQWYsR0FBbUIsVUFBVXlCLENBQVYsRUFBYTtBQUM5QixTQUFPLElBQUl1TSxpQkFBSixDQUFzQnZNLENBQXRCLENBQVA7QUFDRCxDQUZELEM7Ozs7Ozs7Ozs7OztDQ2RBOztBQUNBLElBQUlxRSxPQUFPLEdBQUdqSSxtQkFBTyxDQUFDLHNFQUFELENBQXJCOztBQUNBLElBQUlrSSxJQUFJLEdBQUdsSSxtQkFBTyxDQUFDLHNFQUFELENBQWxCOztBQUNBLElBQUltSSxHQUFHLEdBQUduSSxtQkFBTyxDQUFDLG9FQUFELENBQWpCOztBQUNBLElBQUl1USxRQUFRLEdBQUd2USxtQkFBTyxDQUFDLGtFQUFELENBQXRCOztBQUNBLElBQUl3USxPQUFPLEdBQUd4USxtQkFBTyxDQUFDLDhEQUFELENBQXJCOztBQUNBLElBQUl5USxPQUFPLEdBQUc1TyxNQUFNLENBQUM2TyxNQUFyQixDLENBRUE7O0FBQ0EvUSxNQUFNLENBQUNDLE9BQVAsR0FBaUIsQ0FBQzZRLE9BQUQsSUFBWXpRLG1CQUFPLENBQUMsMERBQUQsQ0FBUCxDQUFvQixZQUFZO0FBQzNELE1BQUkyUSxDQUFDLEdBQUcsRUFBUjtBQUNBLE1BQUkvTyxDQUFDLEdBQUcsRUFBUixDQUYyRCxDQUczRDs7QUFDQSxNQUFJb0gsQ0FBQyxHQUFHNEgsTUFBTSxFQUFkO0FBQ0EsTUFBSUMsQ0FBQyxHQUFHLHNCQUFSO0FBQ0FGLEdBQUMsQ0FBQzNILENBQUQsQ0FBRCxHQUFPLENBQVA7QUFDQTZILEdBQUMsQ0FBQzdJLEtBQUYsQ0FBUSxFQUFSLEVBQVl6RCxPQUFaLENBQW9CLFVBQVVqQixDQUFWLEVBQWE7QUFBRTFCLEtBQUMsQ0FBQzBCLENBQUQsQ0FBRCxHQUFPQSxDQUFQO0FBQVcsR0FBOUM7QUFDQSxTQUFPbU4sT0FBTyxDQUFDLEVBQUQsRUFBS0UsQ0FBTCxDQUFQLENBQWUzSCxDQUFmLEtBQXFCLENBQXJCLElBQTBCbkgsTUFBTSxDQUFDMkssSUFBUCxDQUFZaUUsT0FBTyxDQUFDLEVBQUQsRUFBSzdPLENBQUwsQ0FBbkIsRUFBNEJrUCxJQUE1QixDQUFpQyxFQUFqQyxLQUF3Q0QsQ0FBekU7QUFDRCxDQVQ0QixDQUFaLEdBU1osU0FBU0gsTUFBVCxDQUFnQjVKLE1BQWhCLEVBQXdCOEIsTUFBeEIsRUFBZ0M7QUFBRTtBQUNyQyxNQUFJakgsQ0FBQyxHQUFHNE8sUUFBUSxDQUFDekosTUFBRCxDQUFoQjtBQUNBLE1BQUlpSyxJQUFJLEdBQUd2UCxTQUFTLENBQUNOLE1BQXJCO0FBQ0EsTUFBSUMsS0FBSyxHQUFHLENBQVo7QUFDQSxNQUFJa0gsVUFBVSxHQUFHSCxJQUFJLENBQUMvRixDQUF0QjtBQUNBLE1BQUlvRyxNQUFNLEdBQUdKLEdBQUcsQ0FBQ2hHLENBQWpCOztBQUNBLFNBQU80TyxJQUFJLEdBQUc1UCxLQUFkLEVBQXFCO0FBQ25CLFFBQUk2SCxDQUFDLEdBQUd3SCxPQUFPLENBQUNoUCxTQUFTLENBQUNMLEtBQUssRUFBTixDQUFWLENBQWY7QUFDQSxRQUFJcUwsSUFBSSxHQUFHbkUsVUFBVSxHQUFHSixPQUFPLENBQUNlLENBQUQsQ0FBUCxDQUFXZ0ksTUFBWCxDQUFrQjNJLFVBQVUsQ0FBQ1csQ0FBRCxDQUE1QixDQUFILEdBQXNDZixPQUFPLENBQUNlLENBQUQsQ0FBbEU7QUFDQSxRQUFJOUgsTUFBTSxHQUFHc0wsSUFBSSxDQUFDdEwsTUFBbEI7QUFDQSxRQUFJK1AsQ0FBQyxHQUFHLENBQVI7QUFDQSxRQUFJNVEsR0FBSjs7QUFDQSxXQUFPYSxNQUFNLEdBQUcrUCxDQUFoQixFQUFtQixJQUFJMUksTUFBTSxDQUFDdkcsSUFBUCxDQUFZZ0gsQ0FBWixFQUFlM0ksR0FBRyxHQUFHbU0sSUFBSSxDQUFDeUUsQ0FBQyxFQUFGLENBQXpCLENBQUosRUFBcUN0UCxDQUFDLENBQUN0QixHQUFELENBQUQsR0FBUzJJLENBQUMsQ0FBQzNJLEdBQUQsQ0FBVjtBQUN6RDs7QUFBQyxTQUFPc0IsQ0FBUDtBQUNILENBdkJnQixHQXVCYjhPLE9BdkJKLEM7Ozs7Ozs7Ozs7O0FDVkE7QUFDQSxJQUFJbkcsUUFBUSxHQUFHdEssbUJBQU8sQ0FBQyxrRUFBRCxDQUF0Qjs7QUFDQSxJQUFJa1IsR0FBRyxHQUFHbFIsbUJBQU8sQ0FBQyxvRUFBRCxDQUFqQjs7QUFDQSxJQUFJbVIsV0FBVyxHQUFHblIsbUJBQU8sQ0FBQywwRUFBRCxDQUF6Qjs7QUFDQSxJQUFJb1IsUUFBUSxHQUFHcFIsbUJBQU8sQ0FBQyxvRUFBRCxDQUFQLENBQXlCLFVBQXpCLENBQWY7O0FBQ0EsSUFBSXFSLEtBQUssR0FBRyxZQUFZO0FBQUU7QUFBYSxDQUF2Qzs7QUFDQSxJQUFJM0ksU0FBUyxHQUFHLFdBQWhCLEMsQ0FFQTs7QUFDQSxJQUFJNEksVUFBVSxHQUFHLFlBQVk7QUFDM0I7QUFDQSxNQUFJQyxNQUFNLEdBQUd2UixtQkFBTyxDQUFDLG9FQUFELENBQVAsQ0FBeUIsUUFBekIsQ0FBYjs7QUFDQSxNQUFJb0UsQ0FBQyxHQUFHK00sV0FBVyxDQUFDalEsTUFBcEI7QUFDQSxNQUFJc1EsRUFBRSxHQUFHLEdBQVQ7QUFDQSxNQUFJQyxFQUFFLEdBQUcsR0FBVDtBQUNBLE1BQUlDLGNBQUo7QUFDQUgsUUFBTSxDQUFDSSxLQUFQLENBQWFDLE9BQWIsR0FBdUIsTUFBdkI7O0FBQ0E1UixxQkFBTyxDQUFDLHdEQUFELENBQVAsQ0FBbUI2UixXQUFuQixDQUErQk4sTUFBL0I7O0FBQ0FBLFFBQU0sQ0FBQ08sR0FBUCxHQUFhLGFBQWIsQ0FUMkIsQ0FTQztBQUM1QjtBQUNBOztBQUNBSixnQkFBYyxHQUFHSCxNQUFNLENBQUNRLGFBQVAsQ0FBcUJsSyxRQUF0QztBQUNBNkosZ0JBQWMsQ0FBQ00sSUFBZjtBQUNBTixnQkFBYyxDQUFDTyxLQUFmLENBQXFCVCxFQUFFLEdBQUcsUUFBTCxHQUFnQkMsRUFBaEIsR0FBcUIsbUJBQXJCLEdBQTJDRCxFQUEzQyxHQUFnRCxTQUFoRCxHQUE0REMsRUFBakY7QUFDQUMsZ0JBQWMsQ0FBQ1EsS0FBZjtBQUNBWixZQUFVLEdBQUdJLGNBQWMsQ0FBQ3hLLENBQTVCOztBQUNBLFNBQU85QyxDQUFDLEVBQVIsRUFBWSxPQUFPa04sVUFBVSxDQUFDNUksU0FBRCxDQUFWLENBQXNCeUksV0FBVyxDQUFDL00sQ0FBRCxDQUFqQyxDQUFQOztBQUNaLFNBQU9rTixVQUFVLEVBQWpCO0FBQ0QsQ0FuQkQ7O0FBcUJBM1IsTUFBTSxDQUFDQyxPQUFQLEdBQWlCaUMsTUFBTSxDQUFDTyxNQUFQLElBQWlCLFNBQVNBLE1BQVQsQ0FBZ0JuQixDQUFoQixFQUFtQmtSLFVBQW5CLEVBQStCO0FBQy9ELE1BQUkvSixNQUFKOztBQUNBLE1BQUluSCxDQUFDLEtBQUssSUFBVixFQUFnQjtBQUNkb1EsU0FBSyxDQUFDM0ksU0FBRCxDQUFMLEdBQW1CNEIsUUFBUSxDQUFDckosQ0FBRCxDQUEzQjtBQUNBbUgsVUFBTSxHQUFHLElBQUlpSixLQUFKLEVBQVQ7QUFDQUEsU0FBSyxDQUFDM0ksU0FBRCxDQUFMLEdBQW1CLElBQW5CLENBSGMsQ0FJZDs7QUFDQU4sVUFBTSxDQUFDZ0osUUFBRCxDQUFOLEdBQW1CblEsQ0FBbkI7QUFDRCxHQU5ELE1BTU9tSCxNQUFNLEdBQUdrSixVQUFVLEVBQW5COztBQUNQLFNBQU9hLFVBQVUsS0FBSy9SLFNBQWYsR0FBMkJnSSxNQUEzQixHQUFvQzhJLEdBQUcsQ0FBQzlJLE1BQUQsRUFBUytKLFVBQVQsQ0FBOUM7QUFDRCxDQVZELEM7Ozs7Ozs7Ozs7O0FDOUJBLElBQUk3SCxRQUFRLEdBQUd0SyxtQkFBTyxDQUFDLGtFQUFELENBQXRCOztBQUNBLElBQUlvUyxjQUFjLEdBQUdwUyxtQkFBTyxDQUFDLDRFQUFELENBQTVCOztBQUNBLElBQUlxUyxXQUFXLEdBQUdyUyxtQkFBTyxDQUFDLHdFQUFELENBQXpCOztBQUNBLElBQUlrQyxFQUFFLEdBQUdMLE1BQU0sQ0FBQytGLGNBQWhCO0FBRUFoSSxPQUFPLENBQUN1QyxDQUFSLEdBQVluQyxtQkFBTyxDQUFDLHNFQUFELENBQVAsR0FBNEI2QixNQUFNLENBQUMrRixjQUFuQyxHQUFvRCxTQUFTQSxjQUFULENBQXdCM0csQ0FBeEIsRUFBMkJpSSxDQUEzQixFQUE4Qm9KLFVBQTlCLEVBQTBDO0FBQ3hHaEksVUFBUSxDQUFDckosQ0FBRCxDQUFSO0FBQ0FpSSxHQUFDLEdBQUdtSixXQUFXLENBQUNuSixDQUFELEVBQUksSUFBSixDQUFmO0FBQ0FvQixVQUFRLENBQUNnSSxVQUFELENBQVI7QUFDQSxNQUFJRixjQUFKLEVBQW9CLElBQUk7QUFDdEIsV0FBT2xRLEVBQUUsQ0FBQ2pCLENBQUQsRUFBSWlJLENBQUosRUFBT29KLFVBQVAsQ0FBVDtBQUNELEdBRm1CLENBRWxCLE9BQU81USxDQUFQLEVBQVU7QUFBRTtBQUFhO0FBQzNCLE1BQUksU0FBUzRRLFVBQVQsSUFBdUIsU0FBU0EsVUFBcEMsRUFBZ0QsTUFBTXhTLFNBQVMsQ0FBQywwQkFBRCxDQUFmO0FBQ2hELE1BQUksV0FBV3dTLFVBQWYsRUFBMkJyUixDQUFDLENBQUNpSSxDQUFELENBQUQsR0FBT29KLFVBQVUsQ0FBQ2xSLEtBQWxCO0FBQzNCLFNBQU9ILENBQVA7QUFDRCxDQVZELEM7Ozs7Ozs7Ozs7O0FDTEEsSUFBSWlCLEVBQUUsR0FBR2xDLG1CQUFPLENBQUMsa0VBQUQsQ0FBaEI7O0FBQ0EsSUFBSXNLLFFBQVEsR0FBR3RLLG1CQUFPLENBQUMsa0VBQUQsQ0FBdEI7O0FBQ0EsSUFBSWlJLE9BQU8sR0FBR2pJLG1CQUFPLENBQUMsc0VBQUQsQ0FBckI7O0FBRUFMLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQkksbUJBQU8sQ0FBQyxzRUFBRCxDQUFQLEdBQTRCNkIsTUFBTSxDQUFDMFEsZ0JBQW5DLEdBQXNELFNBQVNBLGdCQUFULENBQTBCdFIsQ0FBMUIsRUFBNkJrUixVQUE3QixFQUF5QztBQUM5RzdILFVBQVEsQ0FBQ3JKLENBQUQsQ0FBUjtBQUNBLE1BQUl1TCxJQUFJLEdBQUd2RSxPQUFPLENBQUNrSyxVQUFELENBQWxCO0FBQ0EsTUFBSWpSLE1BQU0sR0FBR3NMLElBQUksQ0FBQ3RMLE1BQWxCO0FBQ0EsTUFBSWtELENBQUMsR0FBRyxDQUFSO0FBQ0EsTUFBSThFLENBQUo7O0FBQ0EsU0FBT2hJLE1BQU0sR0FBR2tELENBQWhCLEVBQW1CbEMsRUFBRSxDQUFDQyxDQUFILENBQUtsQixDQUFMLEVBQVFpSSxDQUFDLEdBQUdzRCxJQUFJLENBQUNwSSxDQUFDLEVBQUYsQ0FBaEIsRUFBdUIrTixVQUFVLENBQUNqSixDQUFELENBQWpDOztBQUNuQixTQUFPakksQ0FBUDtBQUNELENBUkQsQzs7Ozs7Ozs7Ozs7QUNKQSxJQUFJa0gsR0FBRyxHQUFHbkksbUJBQU8sQ0FBQyxvRUFBRCxDQUFqQjs7QUFDQSxJQUFJdUgsVUFBVSxHQUFHdkgsbUJBQU8sQ0FBQywwRUFBRCxDQUF4Qjs7QUFDQSxJQUFJVSxTQUFTLEdBQUdWLG1CQUFPLENBQUMsb0VBQUQsQ0FBdkI7O0FBQ0EsSUFBSXFTLFdBQVcsR0FBR3JTLG1CQUFPLENBQUMsd0VBQUQsQ0FBekI7O0FBQ0EsSUFBSTBFLEdBQUcsR0FBRzFFLG1CQUFPLENBQUMsc0RBQUQsQ0FBakI7O0FBQ0EsSUFBSW9TLGNBQWMsR0FBR3BTLG1CQUFPLENBQUMsNEVBQUQsQ0FBNUI7O0FBQ0EsSUFBSXdTLElBQUksR0FBRzNRLE1BQU0sQ0FBQzRRLHdCQUFsQjtBQUVBN1MsT0FBTyxDQUFDdUMsQ0FBUixHQUFZbkMsbUJBQU8sQ0FBQyxzRUFBRCxDQUFQLEdBQTRCd1MsSUFBNUIsR0FBbUMsU0FBU0Msd0JBQVQsQ0FBa0N4UixDQUFsQyxFQUFxQ2lJLENBQXJDLEVBQXdDO0FBQ3JGakksR0FBQyxHQUFHUCxTQUFTLENBQUNPLENBQUQsQ0FBYjtBQUNBaUksR0FBQyxHQUFHbUosV0FBVyxDQUFDbkosQ0FBRCxFQUFJLElBQUosQ0FBZjtBQUNBLE1BQUlrSixjQUFKLEVBQW9CLElBQUk7QUFDdEIsV0FBT0ksSUFBSSxDQUFDdlIsQ0FBRCxFQUFJaUksQ0FBSixDQUFYO0FBQ0QsR0FGbUIsQ0FFbEIsT0FBT3hILENBQVAsRUFBVTtBQUFFO0FBQWE7QUFDM0IsTUFBSWdELEdBQUcsQ0FBQ3pELENBQUQsRUFBSWlJLENBQUosQ0FBUCxFQUFlLE9BQU8zQixVQUFVLENBQUMsQ0FBQ1ksR0FBRyxDQUFDaEcsQ0FBSixDQUFNSCxJQUFOLENBQVdmLENBQVgsRUFBY2lJLENBQWQsQ0FBRixFQUFvQmpJLENBQUMsQ0FBQ2lJLENBQUQsQ0FBckIsQ0FBakI7QUFDaEIsQ0FQRCxDOzs7Ozs7Ozs7OztBQ1JBO0FBQ0EsSUFBSXhJLFNBQVMsR0FBR1YsbUJBQU8sQ0FBQyxvRUFBRCxDQUF2Qjs7QUFDQSxJQUFJMFMsSUFBSSxHQUFHMVMsbUJBQU8sQ0FBQyxzRUFBRCxDQUFQLENBQTBCbUMsQ0FBckM7O0FBQ0EsSUFBSUosUUFBUSxHQUFHLEdBQUdBLFFBQWxCO0FBRUEsSUFBSTRRLFdBQVcsR0FBRyxPQUFPeEgsTUFBUCxJQUFpQixRQUFqQixJQUE2QkEsTUFBN0IsSUFBdUN0SixNQUFNLENBQUMrUSxtQkFBOUMsR0FDZC9RLE1BQU0sQ0FBQytRLG1CQUFQLENBQTJCekgsTUFBM0IsQ0FEYyxHQUN1QixFQUR6Qzs7QUFHQSxJQUFJMEgsY0FBYyxHQUFHLFVBQVVoVCxFQUFWLEVBQWM7QUFDakMsTUFBSTtBQUNGLFdBQU82UyxJQUFJLENBQUM3UyxFQUFELENBQVg7QUFDRCxHQUZELENBRUUsT0FBTzZCLENBQVAsRUFBVTtBQUNWLFdBQU9pUixXQUFXLENBQUMxUSxLQUFaLEVBQVA7QUFDRDtBQUNGLENBTkQ7O0FBUUF0QyxNQUFNLENBQUNDLE9BQVAsQ0FBZXVDLENBQWYsR0FBbUIsU0FBU3lRLG1CQUFULENBQTZCL1MsRUFBN0IsRUFBaUM7QUFDbEQsU0FBTzhTLFdBQVcsSUFBSTVRLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjbkMsRUFBZCxLQUFxQixpQkFBcEMsR0FBd0RnVCxjQUFjLENBQUNoVCxFQUFELENBQXRFLEdBQTZFNlMsSUFBSSxDQUFDaFMsU0FBUyxDQUFDYixFQUFELENBQVYsQ0FBeEY7QUFDRCxDQUZELEM7Ozs7Ozs7Ozs7O0FDaEJBO0FBQ0EsSUFBSWlULEtBQUssR0FBRzlTLG1CQUFPLENBQUMsd0ZBQUQsQ0FBbkI7O0FBQ0EsSUFBSStTLFVBQVUsR0FBRy9TLG1CQUFPLENBQUMsMEVBQUQsQ0FBUCxDQUE0QmdSLE1BQTVCLENBQW1DLFFBQW5DLEVBQTZDLFdBQTdDLENBQWpCOztBQUVBcFIsT0FBTyxDQUFDdUMsQ0FBUixHQUFZTixNQUFNLENBQUMrUSxtQkFBUCxJQUE4QixTQUFTQSxtQkFBVCxDQUE2QjNSLENBQTdCLEVBQWdDO0FBQ3hFLFNBQU82UixLQUFLLENBQUM3UixDQUFELEVBQUk4UixVQUFKLENBQVo7QUFDRCxDQUZELEM7Ozs7Ozs7Ozs7O0FDSkFuVCxPQUFPLENBQUN1QyxDQUFSLEdBQVlOLE1BQU0sQ0FBQ21SLHFCQUFuQixDOzs7Ozs7Ozs7OztBQ0FBO0FBQ0EsSUFBSXRPLEdBQUcsR0FBRzFFLG1CQUFPLENBQUMsc0RBQUQsQ0FBakI7O0FBQ0EsSUFBSXVRLFFBQVEsR0FBR3ZRLG1CQUFPLENBQUMsa0VBQUQsQ0FBdEI7O0FBQ0EsSUFBSW9SLFFBQVEsR0FBR3BSLG1CQUFPLENBQUMsb0VBQUQsQ0FBUCxDQUF5QixVQUF6QixDQUFmOztBQUNBLElBQUlpVCxXQUFXLEdBQUdwUixNQUFNLENBQUMxQixTQUF6Qjs7QUFFQVIsTUFBTSxDQUFDQyxPQUFQLEdBQWlCaUMsTUFBTSxDQUFDeUssY0FBUCxJQUF5QixVQUFVckwsQ0FBVixFQUFhO0FBQ3JEQSxHQUFDLEdBQUdzUCxRQUFRLENBQUN0UCxDQUFELENBQVo7QUFDQSxNQUFJeUQsR0FBRyxDQUFDekQsQ0FBRCxFQUFJbVEsUUFBSixDQUFQLEVBQXNCLE9BQU9uUSxDQUFDLENBQUNtUSxRQUFELENBQVI7O0FBQ3RCLE1BQUksT0FBT25RLENBQUMsQ0FBQzhGLFdBQVQsSUFBd0IsVUFBeEIsSUFBc0M5RixDQUFDLFlBQVlBLENBQUMsQ0FBQzhGLFdBQXpELEVBQXNFO0FBQ3BFLFdBQU85RixDQUFDLENBQUM4RixXQUFGLENBQWM1RyxTQUFyQjtBQUNEOztBQUFDLFNBQU9jLENBQUMsWUFBWVksTUFBYixHQUFzQm9SLFdBQXRCLEdBQW9DLElBQTNDO0FBQ0gsQ0FORCxDOzs7Ozs7Ozs7OztBQ05BLElBQUl2TyxHQUFHLEdBQUcxRSxtQkFBTyxDQUFDLHNEQUFELENBQWpCOztBQUNBLElBQUlVLFNBQVMsR0FBR1YsbUJBQU8sQ0FBQyxvRUFBRCxDQUF2Qjs7QUFDQSxJQUFJa1QsWUFBWSxHQUFHbFQsbUJBQU8sQ0FBQyw0RUFBRCxDQUFQLENBQTZCLEtBQTdCLENBQW5COztBQUNBLElBQUlvUixRQUFRLEdBQUdwUixtQkFBTyxDQUFDLG9FQUFELENBQVAsQ0FBeUIsVUFBekIsQ0FBZjs7QUFFQUwsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLFVBQVU0SCxNQUFWLEVBQWtCMkwsS0FBbEIsRUFBeUI7QUFDeEMsTUFBSWxTLENBQUMsR0FBR1AsU0FBUyxDQUFDOEcsTUFBRCxDQUFqQjtBQUNBLE1BQUlwRCxDQUFDLEdBQUcsQ0FBUjtBQUNBLE1BQUlnRSxNQUFNLEdBQUcsRUFBYjtBQUNBLE1BQUkvSCxHQUFKOztBQUNBLE9BQUtBLEdBQUwsSUFBWVksQ0FBWixFQUFlLElBQUlaLEdBQUcsSUFBSStRLFFBQVgsRUFBcUIxTSxHQUFHLENBQUN6RCxDQUFELEVBQUlaLEdBQUosQ0FBSCxJQUFlK0gsTUFBTSxDQUFDSSxJQUFQLENBQVluSSxHQUFaLENBQWYsQ0FMSSxDQU14Qzs7O0FBQ0EsU0FBTzhTLEtBQUssQ0FBQ2pTLE1BQU4sR0FBZWtELENBQXRCLEVBQXlCLElBQUlNLEdBQUcsQ0FBQ3pELENBQUQsRUFBSVosR0FBRyxHQUFHOFMsS0FBSyxDQUFDL08sQ0FBQyxFQUFGLENBQWYsQ0FBUCxFQUE4QjtBQUNyRCxLQUFDOE8sWUFBWSxDQUFDOUssTUFBRCxFQUFTL0gsR0FBVCxDQUFiLElBQThCK0gsTUFBTSxDQUFDSSxJQUFQLENBQVluSSxHQUFaLENBQTlCO0FBQ0Q7O0FBQ0QsU0FBTytILE1BQVA7QUFDRCxDQVhELEM7Ozs7Ozs7Ozs7O0FDTEE7QUFDQSxJQUFJMEssS0FBSyxHQUFHOVMsbUJBQU8sQ0FBQyx3RkFBRCxDQUFuQjs7QUFDQSxJQUFJbVIsV0FBVyxHQUFHblIsbUJBQU8sQ0FBQywwRUFBRCxDQUF6Qjs7QUFFQUwsTUFBTSxDQUFDQyxPQUFQLEdBQWlCaUMsTUFBTSxDQUFDMkssSUFBUCxJQUFlLFNBQVNBLElBQVQsQ0FBY3ZMLENBQWQsRUFBaUI7QUFDL0MsU0FBTzZSLEtBQUssQ0FBQzdSLENBQUQsRUFBSWtRLFdBQUosQ0FBWjtBQUNELENBRkQsQzs7Ozs7Ozs7Ozs7QUNKQXZSLE9BQU8sQ0FBQ3VDLENBQVIsR0FBWSxHQUFHeUosb0JBQWYsQzs7Ozs7Ozs7Ozs7QUNBQTtBQUNBLElBQUkxRyxPQUFPLEdBQUdsRixtQkFBTyxDQUFDLDREQUFELENBQXJCOztBQUNBLElBQUltSCxJQUFJLEdBQUduSCxtQkFBTyxDQUFDLHdEQUFELENBQWxCOztBQUNBLElBQUlxRixLQUFLLEdBQUdyRixtQkFBTyxDQUFDLDBEQUFELENBQW5COztBQUNBTCxNQUFNLENBQUNDLE9BQVAsR0FBaUIsVUFBVW1HLEdBQVYsRUFBZTRELElBQWYsRUFBcUI7QUFDcEMsTUFBSTNELEVBQUUsR0FBRyxDQUFDbUIsSUFBSSxDQUFDdEYsTUFBTCxJQUFlLEVBQWhCLEVBQW9Ca0UsR0FBcEIsS0FBNEJsRSxNQUFNLENBQUNrRSxHQUFELENBQTNDO0FBQ0EsTUFBSXdELEdBQUcsR0FBRyxFQUFWO0FBQ0FBLEtBQUcsQ0FBQ3hELEdBQUQsQ0FBSCxHQUFXNEQsSUFBSSxDQUFDM0QsRUFBRCxDQUFmO0FBQ0FkLFNBQU8sQ0FBQ0EsT0FBTyxDQUFDOEQsQ0FBUixHQUFZOUQsT0FBTyxDQUFDZ0MsQ0FBUixHQUFZN0IsS0FBSyxDQUFDLFlBQVk7QUFBRVcsTUFBRSxDQUFDLENBQUQsQ0FBRjtBQUFRLEdBQXZCLENBQTlCLEVBQXdELFFBQXhELEVBQWtFdUQsR0FBbEUsQ0FBUDtBQUNELENBTEQsQzs7Ozs7Ozs7Ozs7QUNKQSxJQUFJdEIsT0FBTyxHQUFHakksbUJBQU8sQ0FBQyxzRUFBRCxDQUFyQjs7QUFDQSxJQUFJVSxTQUFTLEdBQUdWLG1CQUFPLENBQUMsb0VBQUQsQ0FBdkI7O0FBQ0EsSUFBSXVJLE1BQU0sR0FBR3ZJLG1CQUFPLENBQUMsb0VBQUQsQ0FBUCxDQUF5Qm1DLENBQXRDOztBQUNBeEMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLFVBQVV3VCxTQUFWLEVBQXFCO0FBQ3BDLFNBQU8sVUFBVXZULEVBQVYsRUFBYztBQUNuQixRQUFJb0IsQ0FBQyxHQUFHUCxTQUFTLENBQUNiLEVBQUQsQ0FBakI7QUFDQSxRQUFJMk0sSUFBSSxHQUFHdkUsT0FBTyxDQUFDaEgsQ0FBRCxDQUFsQjtBQUNBLFFBQUlDLE1BQU0sR0FBR3NMLElBQUksQ0FBQ3RMLE1BQWxCO0FBQ0EsUUFBSWtELENBQUMsR0FBRyxDQUFSO0FBQ0EsUUFBSWdFLE1BQU0sR0FBRyxFQUFiO0FBQ0EsUUFBSS9ILEdBQUo7O0FBQ0EsV0FBT2EsTUFBTSxHQUFHa0QsQ0FBaEIsRUFBbUIsSUFBSW1FLE1BQU0sQ0FBQ3ZHLElBQVAsQ0FBWWYsQ0FBWixFQUFlWixHQUFHLEdBQUdtTSxJQUFJLENBQUNwSSxDQUFDLEVBQUYsQ0FBekIsQ0FBSixFQUFxQztBQUN0RGdFLFlBQU0sQ0FBQ0ksSUFBUCxDQUFZNEssU0FBUyxHQUFHLENBQUMvUyxHQUFELEVBQU1ZLENBQUMsQ0FBQ1osR0FBRCxDQUFQLENBQUgsR0FBbUJZLENBQUMsQ0FBQ1osR0FBRCxDQUF6QztBQUNEOztBQUFDLFdBQU8rSCxNQUFQO0FBQ0gsR0FWRDtBQVdELENBWkQsQzs7Ozs7Ozs7Ozs7QUNIQXpJLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixVQUFVK0osSUFBVixFQUFnQjtBQUMvQixNQUFJO0FBQ0YsV0FBTztBQUFFakksT0FBQyxFQUFFLEtBQUw7QUFBWStDLE9BQUMsRUFBRWtGLElBQUk7QUFBbkIsS0FBUDtBQUNELEdBRkQsQ0FFRSxPQUFPakksQ0FBUCxFQUFVO0FBQ1YsV0FBTztBQUFFQSxPQUFDLEVBQUUsSUFBTDtBQUFXK0MsT0FBQyxFQUFFL0M7QUFBZCxLQUFQO0FBQ0Q7QUFDRixDQU5ELEM7Ozs7Ozs7Ozs7O0FDQUEsSUFBSTRJLFFBQVEsR0FBR3RLLG1CQUFPLENBQUMsa0VBQUQsQ0FBdEI7O0FBQ0EsSUFBSVMsUUFBUSxHQUFHVCxtQkFBTyxDQUFDLGtFQUFELENBQXRCOztBQUNBLElBQUlxVCxvQkFBb0IsR0FBR3JULG1CQUFPLENBQUMsNEZBQUQsQ0FBbEM7O0FBRUFMLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixVQUFVZ0UsQ0FBVixFQUFhMFAsQ0FBYixFQUFnQjtBQUMvQmhKLFVBQVEsQ0FBQzFHLENBQUQsQ0FBUjtBQUNBLE1BQUluRCxRQUFRLENBQUM2UyxDQUFELENBQVIsSUFBZUEsQ0FBQyxDQUFDdk0sV0FBRixLQUFrQm5ELENBQXJDLEVBQXdDLE9BQU8wUCxDQUFQO0FBQ3hDLE1BQUlDLGlCQUFpQixHQUFHRixvQkFBb0IsQ0FBQ2xSLENBQXJCLENBQXVCeUIsQ0FBdkIsQ0FBeEI7QUFDQSxNQUFJbU0sT0FBTyxHQUFHd0QsaUJBQWlCLENBQUN4RCxPQUFoQztBQUNBQSxTQUFPLENBQUN1RCxDQUFELENBQVA7QUFDQSxTQUFPQyxpQkFBaUIsQ0FBQ3ZELE9BQXpCO0FBQ0QsQ0FQRCxDOzs7Ozs7Ozs7OztBQ0pBclEsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLFVBQVU0VCxNQUFWLEVBQWtCcFMsS0FBbEIsRUFBeUI7QUFDeEMsU0FBTztBQUNMcVMsY0FBVSxFQUFFLEVBQUVELE1BQU0sR0FBRyxDQUFYLENBRFA7QUFFTEUsZ0JBQVksRUFBRSxFQUFFRixNQUFNLEdBQUcsQ0FBWCxDQUZUO0FBR0xHLFlBQVEsRUFBRSxFQUFFSCxNQUFNLEdBQUcsQ0FBWCxDQUhMO0FBSUxwUyxTQUFLLEVBQUVBO0FBSkYsR0FBUDtBQU1ELENBUEQsQzs7Ozs7Ozs7Ozs7QUNBQSxJQUFJK0QsUUFBUSxHQUFHbkYsbUJBQU8sQ0FBQyxnRUFBRCxDQUF0Qjs7QUFDQUwsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLFVBQVVrSCxNQUFWLEVBQWtCZ0wsR0FBbEIsRUFBdUJsRSxJQUF2QixFQUE2QjtBQUM1QyxPQUFLLElBQUl2TixHQUFULElBQWdCeVIsR0FBaEIsRUFBcUIzTSxRQUFRLENBQUMyQixNQUFELEVBQVN6RyxHQUFULEVBQWN5UixHQUFHLENBQUN6UixHQUFELENBQWpCLEVBQXdCdU4sSUFBeEIsQ0FBUjs7QUFDckIsU0FBTzlHLE1BQVA7QUFDRCxDQUhELEM7Ozs7Ozs7Ozs7O0FDREEsSUFBSTdCLE1BQU0sR0FBR2pGLG1CQUFPLENBQUMsNERBQUQsQ0FBcEI7O0FBQ0EsSUFBSXlJLElBQUksR0FBR3pJLG1CQUFPLENBQUMsd0RBQUQsQ0FBbEI7O0FBQ0EsSUFBSTBFLEdBQUcsR0FBRzFFLG1CQUFPLENBQUMsc0RBQUQsQ0FBakI7O0FBQ0EsSUFBSTRULEdBQUcsR0FBRzVULG1CQUFPLENBQUMsc0RBQUQsQ0FBUCxDQUFrQixLQUFsQixDQUFWOztBQUNBLElBQUk2VCxTQUFTLEdBQUcsVUFBaEI7QUFDQSxJQUFJQyxTQUFTLEdBQUd0SyxRQUFRLENBQUNxSyxTQUFELENBQXhCO0FBQ0EsSUFBSUUsR0FBRyxHQUFHLENBQUMsS0FBS0QsU0FBTixFQUFpQjlMLEtBQWpCLENBQXVCNkwsU0FBdkIsQ0FBVjs7QUFFQTdULG1CQUFPLENBQUMsd0RBQUQsQ0FBUCxDQUFtQmdVLGFBQW5CLEdBQW1DLFVBQVVuVSxFQUFWLEVBQWM7QUFDL0MsU0FBT2lVLFNBQVMsQ0FBQzlSLElBQVYsQ0FBZW5DLEVBQWYsQ0FBUDtBQUNELENBRkQ7O0FBSUEsQ0FBQ0YsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLFVBQVVxQixDQUFWLEVBQWFaLEdBQWIsRUFBa0I0VCxHQUFsQixFQUF1QnJHLElBQXZCLEVBQTZCO0FBQzdDLE1BQUlzRyxVQUFVLEdBQUcsT0FBT0QsR0FBUCxJQUFjLFVBQS9CO0FBQ0EsTUFBSUMsVUFBSixFQUFnQnhQLEdBQUcsQ0FBQ3VQLEdBQUQsRUFBTSxNQUFOLENBQUgsSUFBb0J4TCxJQUFJLENBQUN3TCxHQUFELEVBQU0sTUFBTixFQUFjNVQsR0FBZCxDQUF4QjtBQUNoQixNQUFJWSxDQUFDLENBQUNaLEdBQUQsQ0FBRCxLQUFXNFQsR0FBZixFQUFvQjtBQUNwQixNQUFJQyxVQUFKLEVBQWdCeFAsR0FBRyxDQUFDdVAsR0FBRCxFQUFNTCxHQUFOLENBQUgsSUFBaUJuTCxJQUFJLENBQUN3TCxHQUFELEVBQU1MLEdBQU4sRUFBVzNTLENBQUMsQ0FBQ1osR0FBRCxDQUFELEdBQVMsS0FBS1ksQ0FBQyxDQUFDWixHQUFELENBQWYsR0FBdUIwVCxHQUFHLENBQUNqRCxJQUFKLENBQVM1RyxNQUFNLENBQUM3SixHQUFELENBQWYsQ0FBbEMsQ0FBckI7O0FBQ2hCLE1BQUlZLENBQUMsS0FBS2dFLE1BQVYsRUFBa0I7QUFDaEJoRSxLQUFDLENBQUNaLEdBQUQsQ0FBRCxHQUFTNFQsR0FBVDtBQUNELEdBRkQsTUFFTyxJQUFJLENBQUNyRyxJQUFMLEVBQVc7QUFDaEIsV0FBTzNNLENBQUMsQ0FBQ1osR0FBRCxDQUFSO0FBQ0FvSSxRQUFJLENBQUN4SCxDQUFELEVBQUlaLEdBQUosRUFBUzRULEdBQVQsQ0FBSjtBQUNELEdBSE0sTUFHQSxJQUFJaFQsQ0FBQyxDQUFDWixHQUFELENBQUwsRUFBWTtBQUNqQlksS0FBQyxDQUFDWixHQUFELENBQUQsR0FBUzRULEdBQVQ7QUFDRCxHQUZNLE1BRUE7QUFDTHhMLFFBQUksQ0FBQ3hILENBQUQsRUFBSVosR0FBSixFQUFTNFQsR0FBVCxDQUFKO0FBQ0QsR0FkNEMsQ0FlL0M7O0FBQ0MsQ0FoQkQsRUFnQkd6SyxRQUFRLENBQUNySixTQWhCWixFQWdCdUIwVCxTQWhCdkIsRUFnQmtDLFNBQVM5UixRQUFULEdBQW9CO0FBQ3BELFNBQU8sT0FBTyxJQUFQLElBQWUsVUFBZixJQUE2QixLQUFLNlIsR0FBTCxDQUE3QixJQUEwQ0UsU0FBUyxDQUFDOVIsSUFBVixDQUFlLElBQWYsQ0FBakQ7QUFDRCxDQWxCRCxFOzs7Ozs7Ozs7OztBQ1pBOztBQUNBO0FBQ0EsSUFBSXZCLFFBQVEsR0FBR1QsbUJBQU8sQ0FBQyxrRUFBRCxDQUF0Qjs7QUFDQSxJQUFJc0ssUUFBUSxHQUFHdEssbUJBQU8sQ0FBQyxrRUFBRCxDQUF0Qjs7QUFDQSxJQUFJbVUsS0FBSyxHQUFHLFVBQVVsVCxDQUFWLEVBQWE0RSxLQUFiLEVBQW9CO0FBQzlCeUUsVUFBUSxDQUFDckosQ0FBRCxDQUFSO0FBQ0EsTUFBSSxDQUFDUixRQUFRLENBQUNvRixLQUFELENBQVQsSUFBb0JBLEtBQUssS0FBSyxJQUFsQyxFQUF3QyxNQUFNL0YsU0FBUyxDQUFDK0YsS0FBSyxHQUFHLDJCQUFULENBQWY7QUFDekMsQ0FIRDs7QUFJQWxHLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjtBQUNmdUcsS0FBRyxFQUFFdEUsTUFBTSxDQUFDNEosY0FBUCxLQUEwQixlQUFlLEVBQWYsR0FBb0I7QUFDakQsWUFBVTJJLElBQVYsRUFBZ0JDLEtBQWhCLEVBQXVCbE8sR0FBdkIsRUFBNEI7QUFDMUIsUUFBSTtBQUNGQSxTQUFHLEdBQUduRyxtQkFBTyxDQUFDLHNEQUFELENBQVAsQ0FBa0J3SixRQUFRLENBQUN4SCxJQUEzQixFQUFpQ2hDLG1CQUFPLENBQUMsc0VBQUQsQ0FBUCxDQUEwQm1DLENBQTFCLENBQTRCTixNQUFNLENBQUMxQixTQUFuQyxFQUE4QyxXQUE5QyxFQUEyRGdHLEdBQTVGLEVBQWlHLENBQWpHLENBQU47QUFDQUEsU0FBRyxDQUFDaU8sSUFBRCxFQUFPLEVBQVAsQ0FBSDtBQUNBQyxXQUFLLEdBQUcsRUFBRUQsSUFBSSxZQUFZbFUsS0FBbEIsQ0FBUjtBQUNELEtBSkQsQ0FJRSxPQUFPd0IsQ0FBUCxFQUFVO0FBQUUyUyxXQUFLLEdBQUcsSUFBUjtBQUFlOztBQUM3QixXQUFPLFNBQVM1SSxjQUFULENBQXdCeEssQ0FBeEIsRUFBMkI0RSxLQUEzQixFQUFrQztBQUN2Q3NPLFdBQUssQ0FBQ2xULENBQUQsRUFBSTRFLEtBQUosQ0FBTDtBQUNBLFVBQUl3TyxLQUFKLEVBQVdwVCxDQUFDLENBQUNxVCxTQUFGLEdBQWN6TyxLQUFkLENBQVgsS0FDS00sR0FBRyxDQUFDbEYsQ0FBRCxFQUFJNEUsS0FBSixDQUFIO0FBQ0wsYUFBTzVFLENBQVA7QUFDRCxLQUxEO0FBTUQsR0FaRCxDQVlFLEVBWkYsRUFZTSxLQVpOLENBRDZCLEdBYWRiLFNBYlosQ0FEVTtBQWVmK1QsT0FBSyxFQUFFQTtBQWZRLENBQWpCLEM7Ozs7Ozs7Ozs7OztBQ1JhOztBQUNiLElBQUlsUCxNQUFNLEdBQUdqRixtQkFBTyxDQUFDLDREQUFELENBQXBCOztBQUNBLElBQUlrQyxFQUFFLEdBQUdsQyxtQkFBTyxDQUFDLGtFQUFELENBQWhCOztBQUNBLElBQUk0QyxXQUFXLEdBQUc1QyxtQkFBTyxDQUFDLHNFQUFELENBQXpCOztBQUNBLElBQUl1VSxPQUFPLEdBQUd2VSxtQkFBTyxDQUFDLHNEQUFELENBQVAsQ0FBa0IsU0FBbEIsQ0FBZDs7QUFFQUwsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLFVBQVVtRyxHQUFWLEVBQWU7QUFDOUIsTUFBSW5DLENBQUMsR0FBR3FCLE1BQU0sQ0FBQ2MsR0FBRCxDQUFkO0FBQ0EsTUFBSW5ELFdBQVcsSUFBSWdCLENBQWYsSUFBb0IsQ0FBQ0EsQ0FBQyxDQUFDMlEsT0FBRCxDQUExQixFQUFxQ3JTLEVBQUUsQ0FBQ0MsQ0FBSCxDQUFLeUIsQ0FBTCxFQUFRMlEsT0FBUixFQUFpQjtBQUNwRGIsZ0JBQVksRUFBRSxJQURzQztBQUVwRC9PLE9BQUcsRUFBRSxZQUFZO0FBQUUsYUFBTyxJQUFQO0FBQWM7QUFGbUIsR0FBakI7QUFJdEMsQ0FORCxDOzs7Ozs7Ozs7OztBQ05BLElBQUlDLEdBQUcsR0FBRzVFLG1CQUFPLENBQUMsa0VBQUQsQ0FBUCxDQUF3Qm1DLENBQWxDOztBQUNBLElBQUl1QyxHQUFHLEdBQUcxRSxtQkFBTyxDQUFDLHNEQUFELENBQWpCOztBQUNBLElBQUlzQixHQUFHLEdBQUd0QixtQkFBTyxDQUFDLHNEQUFELENBQVAsQ0FBa0IsYUFBbEIsQ0FBVjs7QUFFQUwsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLFVBQVVDLEVBQVYsRUFBYzJVLEdBQWQsRUFBbUJDLElBQW5CLEVBQXlCO0FBQ3hDLE1BQUk1VSxFQUFFLElBQUksQ0FBQzZFLEdBQUcsQ0FBQzdFLEVBQUUsR0FBRzRVLElBQUksR0FBRzVVLEVBQUgsR0FBUUEsRUFBRSxDQUFDTSxTQUFyQixFQUFnQ21CLEdBQWhDLENBQWQsRUFBb0RzRCxHQUFHLENBQUMvRSxFQUFELEVBQUt5QixHQUFMLEVBQVU7QUFBRW9TLGdCQUFZLEVBQUUsSUFBaEI7QUFBc0J0UyxTQUFLLEVBQUVvVDtBQUE3QixHQUFWLENBQUg7QUFDckQsQ0FGRCxDOzs7Ozs7Ozs7OztBQ0pBLElBQUlFLE1BQU0sR0FBRzFVLG1CQUFPLENBQUMsNERBQUQsQ0FBUCxDQUFxQixNQUFyQixDQUFiOztBQUNBLElBQUkyVSxHQUFHLEdBQUczVSxtQkFBTyxDQUFDLHNEQUFELENBQWpCOztBQUNBTCxNQUFNLENBQUNDLE9BQVAsR0FBaUIsVUFBVVMsR0FBVixFQUFlO0FBQzlCLFNBQU9xVSxNQUFNLENBQUNyVSxHQUFELENBQU4sS0FBZ0JxVSxNQUFNLENBQUNyVSxHQUFELENBQU4sR0FBY3NVLEdBQUcsQ0FBQ3RVLEdBQUQsQ0FBakMsQ0FBUDtBQUNELENBRkQsQzs7Ozs7Ozs7Ozs7QUNGQSxJQUFJOEcsSUFBSSxHQUFHbkgsbUJBQU8sQ0FBQyx3REFBRCxDQUFsQjs7QUFDQSxJQUFJaUYsTUFBTSxHQUFHakYsbUJBQU8sQ0FBQyw0REFBRCxDQUFwQjs7QUFDQSxJQUFJNFUsTUFBTSxHQUFHLG9CQUFiO0FBQ0EsSUFBSUMsS0FBSyxHQUFHNVAsTUFBTSxDQUFDMlAsTUFBRCxDQUFOLEtBQW1CM1AsTUFBTSxDQUFDMlAsTUFBRCxDQUFOLEdBQWlCLEVBQXBDLENBQVo7QUFFQSxDQUFDalYsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLFVBQVVTLEdBQVYsRUFBZWUsS0FBZixFQUFzQjtBQUN0QyxTQUFPeVQsS0FBSyxDQUFDeFUsR0FBRCxDQUFMLEtBQWV3VSxLQUFLLENBQUN4VSxHQUFELENBQUwsR0FBYWUsS0FBSyxLQUFLaEIsU0FBVixHQUFzQmdCLEtBQXRCLEdBQThCLEVBQTFELENBQVA7QUFDRCxDQUZELEVBRUcsVUFGSCxFQUVlLEVBRmYsRUFFbUJvSCxJQUZuQixDQUV3QjtBQUN0QnBCLFNBQU8sRUFBRUQsSUFBSSxDQUFDQyxPQURRO0FBRXRCME4sTUFBSSxFQUFFOVUsbUJBQU8sQ0FBQyw4REFBRCxDQUFQLEdBQXdCLE1BQXhCLEdBQWlDLFFBRmpCO0FBR3RCK1UsV0FBUyxFQUFFO0FBSFcsQ0FGeEIsRTs7Ozs7Ozs7Ozs7QUNMQTtBQUNBLElBQUl6SyxRQUFRLEdBQUd0SyxtQkFBTyxDQUFDLGtFQUFELENBQXRCOztBQUNBLElBQUl5SCxTQUFTLEdBQUd6SCxtQkFBTyxDQUFDLG9FQUFELENBQXZCOztBQUNBLElBQUl1VSxPQUFPLEdBQUd2VSxtQkFBTyxDQUFDLHNEQUFELENBQVAsQ0FBa0IsU0FBbEIsQ0FBZDs7QUFDQUwsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLFVBQVVxQixDQUFWLEVBQWErVCxDQUFiLEVBQWdCO0FBQy9CLE1BQUlwUixDQUFDLEdBQUcwRyxRQUFRLENBQUNySixDQUFELENBQVIsQ0FBWThGLFdBQXBCO0FBQ0EsTUFBSWlDLENBQUo7QUFDQSxTQUFPcEYsQ0FBQyxLQUFLeEQsU0FBTixJQUFtQixDQUFDNEksQ0FBQyxHQUFHc0IsUUFBUSxDQUFDMUcsQ0FBRCxDQUFSLENBQVkyUSxPQUFaLENBQUwsS0FBOEJuVSxTQUFqRCxHQUE2RDRVLENBQTdELEdBQWlFdk4sU0FBUyxDQUFDdUIsQ0FBRCxDQUFqRjtBQUNELENBSkQsQzs7Ozs7Ozs7Ozs7QUNKQSxJQUFJaU0sU0FBUyxHQUFHalYsbUJBQU8sQ0FBQyxvRUFBRCxDQUF2Qjs7QUFDQSxJQUFJNEosT0FBTyxHQUFHNUosbUJBQU8sQ0FBQyw4REFBRCxDQUFyQixDLENBQ0E7QUFDQTs7O0FBQ0FMLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixVQUFVaVUsU0FBVixFQUFxQjtBQUNwQyxTQUFPLFVBQVU1USxJQUFWLEVBQWdCaVMsR0FBaEIsRUFBcUI7QUFDMUIsUUFBSUMsQ0FBQyxHQUFHakwsTUFBTSxDQUFDTixPQUFPLENBQUMzRyxJQUFELENBQVIsQ0FBZDtBQUNBLFFBQUltQixDQUFDLEdBQUc2USxTQUFTLENBQUNDLEdBQUQsQ0FBakI7QUFDQSxRQUFJRSxDQUFDLEdBQUdELENBQUMsQ0FBQ2pVLE1BQVY7QUFDQSxRQUFJK0UsQ0FBSixFQUFPRyxDQUFQO0FBQ0EsUUFBSWhDLENBQUMsR0FBRyxDQUFKLElBQVNBLENBQUMsSUFBSWdSLENBQWxCLEVBQXFCLE9BQU92QixTQUFTLEdBQUcsRUFBSCxHQUFRelQsU0FBeEI7QUFDckI2RixLQUFDLEdBQUdrUCxDQUFDLENBQUNFLFVBQUYsQ0FBYWpSLENBQWIsQ0FBSjtBQUNBLFdBQU82QixDQUFDLEdBQUcsTUFBSixJQUFjQSxDQUFDLEdBQUcsTUFBbEIsSUFBNEI3QixDQUFDLEdBQUcsQ0FBSixLQUFVZ1IsQ0FBdEMsSUFBMkMsQ0FBQ2hQLENBQUMsR0FBRytPLENBQUMsQ0FBQ0UsVUFBRixDQUFhalIsQ0FBQyxHQUFHLENBQWpCLENBQUwsSUFBNEIsTUFBdkUsSUFBaUZnQyxDQUFDLEdBQUcsTUFBckYsR0FDSHlOLFNBQVMsR0FBR3NCLENBQUMsQ0FBQ0csTUFBRixDQUFTbFIsQ0FBVCxDQUFILEdBQWlCNkIsQ0FEdkIsR0FFSDROLFNBQVMsR0FBR3NCLENBQUMsQ0FBQ2xULEtBQUYsQ0FBUW1DLENBQVIsRUFBV0EsQ0FBQyxHQUFHLENBQWYsQ0FBSCxHQUF1QixDQUFDNkIsQ0FBQyxHQUFHLE1BQUosSUFBYyxFQUFmLEtBQXNCRyxDQUFDLEdBQUcsTUFBMUIsSUFBb0MsT0FGeEU7QUFHRCxHQVZEO0FBV0QsQ0FaRCxDOzs7Ozs7Ozs7OztBQ0pBLElBQUk5RCxHQUFHLEdBQUd0QyxtQkFBTyxDQUFDLHNEQUFELENBQWpCOztBQUNBLElBQUl1VixNQUFNLEdBQUd2VixtQkFBTyxDQUFDLDREQUFELENBQXBCOztBQUNBLElBQUl3VixJQUFJLEdBQUd4VixtQkFBTyxDQUFDLHdEQUFELENBQWxCOztBQUNBLElBQUl5VixHQUFHLEdBQUd6VixtQkFBTyxDQUFDLG9FQUFELENBQWpCOztBQUNBLElBQUlpRixNQUFNLEdBQUdqRixtQkFBTyxDQUFDLDREQUFELENBQXBCOztBQUNBLElBQUk0TyxPQUFPLEdBQUczSixNQUFNLENBQUMySixPQUFyQjtBQUNBLElBQUk4RyxPQUFPLEdBQUd6USxNQUFNLENBQUMwUSxZQUFyQjtBQUNBLElBQUlDLFNBQVMsR0FBRzNRLE1BQU0sQ0FBQzRRLGNBQXZCO0FBQ0EsSUFBSUMsY0FBYyxHQUFHN1EsTUFBTSxDQUFDNlEsY0FBNUI7QUFDQSxJQUFJQyxRQUFRLEdBQUc5USxNQUFNLENBQUM4USxRQUF0QjtBQUNBLElBQUlDLE9BQU8sR0FBRyxDQUFkO0FBQ0EsSUFBSUMsS0FBSyxHQUFHLEVBQVo7QUFDQSxJQUFJQyxrQkFBa0IsR0FBRyxvQkFBekI7QUFDQSxJQUFJQyxLQUFKLEVBQVdDLE9BQVgsRUFBb0JDLElBQXBCOztBQUNBLElBQUlDLEdBQUcsR0FBRyxZQUFZO0FBQ3BCLE1BQUl0SSxFQUFFLEdBQUcsQ0FBQyxJQUFWLENBRG9CLENBRXBCOztBQUNBLE1BQUlpSSxLQUFLLENBQUMxSyxjQUFOLENBQXFCeUMsRUFBckIsQ0FBSixFQUE4QjtBQUM1QixRQUFJaEksRUFBRSxHQUFHaVEsS0FBSyxDQUFDakksRUFBRCxDQUFkO0FBQ0EsV0FBT2lJLEtBQUssQ0FBQ2pJLEVBQUQsQ0FBWjtBQUNBaEksTUFBRTtBQUNIO0FBQ0YsQ0FSRDs7QUFTQSxJQUFJdVEsUUFBUSxHQUFHLFVBQVVDLEtBQVYsRUFBaUI7QUFDOUJGLEtBQUcsQ0FBQ3RVLElBQUosQ0FBU3dVLEtBQUssQ0FBQ3ZTLElBQWY7QUFDRCxDQUZELEMsQ0FHQTs7O0FBQ0EsSUFBSSxDQUFDeVIsT0FBRCxJQUFZLENBQUNFLFNBQWpCLEVBQTRCO0FBQzFCRixTQUFPLEdBQUcsU0FBU0MsWUFBVCxDQUFzQjNQLEVBQXRCLEVBQTBCO0FBQ2xDLFFBQUkwRixJQUFJLEdBQUcsRUFBWDtBQUNBLFFBQUl0SCxDQUFDLEdBQUcsQ0FBUjs7QUFDQSxXQUFPNUMsU0FBUyxDQUFDTixNQUFWLEdBQW1Ca0QsQ0FBMUIsRUFBNkJzSCxJQUFJLENBQUNsRCxJQUFMLENBQVVoSCxTQUFTLENBQUM0QyxDQUFDLEVBQUYsQ0FBbkI7O0FBQzdCNlIsU0FBSyxDQUFDLEVBQUVELE9BQUgsQ0FBTCxHQUFtQixZQUFZO0FBQzdCO0FBQ0FULFlBQU0sQ0FBQyxPQUFPdlAsRUFBUCxJQUFhLFVBQWIsR0FBMEJBLEVBQTFCLEdBQStCd0QsUUFBUSxDQUFDeEQsRUFBRCxDQUF4QyxFQUE4QzBGLElBQTlDLENBQU47QUFDRCxLQUhEOztBQUlBeUssU0FBSyxDQUFDSCxPQUFELENBQUw7QUFDQSxXQUFPQSxPQUFQO0FBQ0QsR0FWRDs7QUFXQUosV0FBUyxHQUFHLFNBQVNDLGNBQVQsQ0FBd0I3SCxFQUF4QixFQUE0QjtBQUN0QyxXQUFPaUksS0FBSyxDQUFDakksRUFBRCxDQUFaO0FBQ0QsR0FGRCxDQVowQixDQWUxQjs7O0FBQ0EsTUFBSWhPLG1CQUFPLENBQUMsc0RBQUQsQ0FBUCxDQUFrQjRPLE9BQWxCLEtBQThCLFNBQWxDLEVBQTZDO0FBQzNDdUgsU0FBSyxHQUFHLFVBQVVuSSxFQUFWLEVBQWM7QUFDcEJZLGFBQU8sQ0FBQ1csUUFBUixDQUFpQmpOLEdBQUcsQ0FBQ2dVLEdBQUQsRUFBTXRJLEVBQU4sRUFBVSxDQUFWLENBQXBCO0FBQ0QsS0FGRCxDQUQyQyxDQUk3Qzs7QUFDQyxHQUxELE1BS08sSUFBSStILFFBQVEsSUFBSUEsUUFBUSxDQUFDVSxHQUF6QixFQUE4QjtBQUNuQ04sU0FBSyxHQUFHLFVBQVVuSSxFQUFWLEVBQWM7QUFDcEIrSCxjQUFRLENBQUNVLEdBQVQsQ0FBYW5VLEdBQUcsQ0FBQ2dVLEdBQUQsRUFBTXRJLEVBQU4sRUFBVSxDQUFWLENBQWhCO0FBQ0QsS0FGRCxDQURtQyxDQUlyQzs7QUFDQyxHQUxNLE1BS0EsSUFBSThILGNBQUosRUFBb0I7QUFDekJNLFdBQU8sR0FBRyxJQUFJTixjQUFKLEVBQVY7QUFDQU8sUUFBSSxHQUFHRCxPQUFPLENBQUNNLEtBQWY7QUFDQU4sV0FBTyxDQUFDTyxLQUFSLENBQWNDLFNBQWQsR0FBMEJMLFFBQTFCO0FBQ0FKLFNBQUssR0FBRzdULEdBQUcsQ0FBQytULElBQUksQ0FBQ1EsV0FBTixFQUFtQlIsSUFBbkIsRUFBeUIsQ0FBekIsQ0FBWCxDQUp5QixDQUszQjtBQUNBO0FBQ0MsR0FQTSxNQU9BLElBQUlwUixNQUFNLENBQUM2UixnQkFBUCxJQUEyQixPQUFPRCxXQUFQLElBQXNCLFVBQWpELElBQStELENBQUM1UixNQUFNLENBQUM4UixhQUEzRSxFQUEwRjtBQUMvRlosU0FBSyxHQUFHLFVBQVVuSSxFQUFWLEVBQWM7QUFDcEIvSSxZQUFNLENBQUM0UixXQUFQLENBQW1CN0ksRUFBRSxHQUFHLEVBQXhCLEVBQTRCLEdBQTVCO0FBQ0QsS0FGRDs7QUFHQS9JLFVBQU0sQ0FBQzZSLGdCQUFQLENBQXdCLFNBQXhCLEVBQW1DUCxRQUFuQyxFQUE2QyxLQUE3QyxFQUorRixDQUtqRztBQUNDLEdBTk0sTUFNQSxJQUFJTCxrQkFBa0IsSUFBSVQsR0FBRyxDQUFDLFFBQUQsQ0FBN0IsRUFBeUM7QUFDOUNVLFNBQUssR0FBRyxVQUFVbkksRUFBVixFQUFjO0FBQ3BCd0gsVUFBSSxDQUFDM0QsV0FBTCxDQUFpQjRELEdBQUcsQ0FBQyxRQUFELENBQXBCLEVBQWdDUyxrQkFBaEMsSUFBc0QsWUFBWTtBQUNoRVYsWUFBSSxDQUFDd0IsV0FBTCxDQUFpQixJQUFqQjtBQUNBVixXQUFHLENBQUN0VSxJQUFKLENBQVNnTSxFQUFUO0FBQ0QsT0FIRDtBQUlELEtBTEQsQ0FEOEMsQ0FPaEQ7O0FBQ0MsR0FSTSxNQVFBO0FBQ0xtSSxTQUFLLEdBQUcsVUFBVW5JLEVBQVYsRUFBYztBQUNwQmlKLGdCQUFVLENBQUMzVSxHQUFHLENBQUNnVSxHQUFELEVBQU10SSxFQUFOLEVBQVUsQ0FBVixDQUFKLEVBQWtCLENBQWxCLENBQVY7QUFDRCxLQUZEO0FBR0Q7QUFDRjs7QUFDRHJPLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjtBQUNmdUcsS0FBRyxFQUFFdVAsT0FEVTtBQUVmMVIsT0FBSyxFQUFFNFI7QUFGUSxDQUFqQixDOzs7Ozs7Ozs7OztBQ2hGQSxJQUFJWCxTQUFTLEdBQUdqVixtQkFBTyxDQUFDLG9FQUFELENBQXZCOztBQUNBLElBQUlrWCxHQUFHLEdBQUc5TCxJQUFJLENBQUM4TCxHQUFmO0FBQ0EsSUFBSUMsR0FBRyxHQUFHL0wsSUFBSSxDQUFDK0wsR0FBZjs7QUFDQXhYLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixVQUFVdUIsS0FBVixFQUFpQkQsTUFBakIsRUFBeUI7QUFDeENDLE9BQUssR0FBRzhULFNBQVMsQ0FBQzlULEtBQUQsQ0FBakI7QUFDQSxTQUFPQSxLQUFLLEdBQUcsQ0FBUixHQUFZK1YsR0FBRyxDQUFDL1YsS0FBSyxHQUFHRCxNQUFULEVBQWlCLENBQWpCLENBQWYsR0FBcUNpVyxHQUFHLENBQUNoVyxLQUFELEVBQVFELE1BQVIsQ0FBL0M7QUFDRCxDQUhELEM7Ozs7Ozs7Ozs7O0FDSEE7QUFDQSxJQUFJa1csSUFBSSxHQUFHaE0sSUFBSSxDQUFDZ00sSUFBaEI7QUFDQSxJQUFJQyxLQUFLLEdBQUdqTSxJQUFJLENBQUNpTSxLQUFqQjs7QUFDQTFYLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixVQUFVQyxFQUFWLEVBQWM7QUFDN0IsU0FBT3lYLEtBQUssQ0FBQ3pYLEVBQUUsR0FBRyxDQUFDQSxFQUFQLENBQUwsR0FBa0IsQ0FBbEIsR0FBc0IsQ0FBQ0EsRUFBRSxHQUFHLENBQUwsR0FBU3dYLEtBQVQsR0FBaUJELElBQWxCLEVBQXdCdlgsRUFBeEIsQ0FBN0I7QUFDRCxDQUZELEM7Ozs7Ozs7Ozs7O0FDSEE7QUFDQSxJQUFJMlEsT0FBTyxHQUFHeFEsbUJBQU8sQ0FBQyw4REFBRCxDQUFyQjs7QUFDQSxJQUFJNEosT0FBTyxHQUFHNUosbUJBQU8sQ0FBQyw4REFBRCxDQUFyQjs7QUFDQUwsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLFVBQVVDLEVBQVYsRUFBYztBQUM3QixTQUFPMlEsT0FBTyxDQUFDNUcsT0FBTyxDQUFDL0osRUFBRCxDQUFSLENBQWQ7QUFDRCxDQUZELEM7Ozs7Ozs7Ozs7O0FDSEE7QUFDQSxJQUFJb1YsU0FBUyxHQUFHalYsbUJBQU8sQ0FBQyxvRUFBRCxDQUF2Qjs7QUFDQSxJQUFJbVgsR0FBRyxHQUFHL0wsSUFBSSxDQUFDK0wsR0FBZjs7QUFDQXhYLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixVQUFVQyxFQUFWLEVBQWM7QUFDN0IsU0FBT0EsRUFBRSxHQUFHLENBQUwsR0FBU3NYLEdBQUcsQ0FBQ2xDLFNBQVMsQ0FBQ3BWLEVBQUQsQ0FBVixFQUFnQixnQkFBaEIsQ0FBWixHQUFnRCxDQUF2RCxDQUQ2QixDQUM2QjtBQUMzRCxDQUZELEM7Ozs7Ozs7Ozs7O0FDSEE7QUFDQSxJQUFJK0osT0FBTyxHQUFHNUosbUJBQU8sQ0FBQyw4REFBRCxDQUFyQjs7QUFDQUwsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLFVBQVVDLEVBQVYsRUFBYztBQUM3QixTQUFPZ0MsTUFBTSxDQUFDK0gsT0FBTyxDQUFDL0osRUFBRCxDQUFSLENBQWI7QUFDRCxDQUZELEM7Ozs7Ozs7Ozs7O0FDRkE7QUFDQSxJQUFJWSxRQUFRLEdBQUdULG1CQUFPLENBQUMsa0VBQUQsQ0FBdEIsQyxDQUNBO0FBQ0E7OztBQUNBTCxNQUFNLENBQUNDLE9BQVAsR0FBaUIsVUFBVUMsRUFBVixFQUFjbUosQ0FBZCxFQUFpQjtBQUNoQyxNQUFJLENBQUN2SSxRQUFRLENBQUNaLEVBQUQsQ0FBYixFQUFtQixPQUFPQSxFQUFQO0FBQ25CLE1BQUltRyxFQUFKLEVBQVFpTyxHQUFSO0FBQ0EsTUFBSWpMLENBQUMsSUFBSSxRQUFRaEQsRUFBRSxHQUFHbkcsRUFBRSxDQUFDa0MsUUFBaEIsS0FBNkIsVUFBbEMsSUFBZ0QsQ0FBQ3RCLFFBQVEsQ0FBQ3dULEdBQUcsR0FBR2pPLEVBQUUsQ0FBQ2hFLElBQUgsQ0FBUW5DLEVBQVIsQ0FBUCxDQUE3RCxFQUFrRixPQUFPb1UsR0FBUDtBQUNsRixNQUFJLFFBQVFqTyxFQUFFLEdBQUduRyxFQUFFLENBQUMwWCxPQUFoQixLQUE0QixVQUE1QixJQUEwQyxDQUFDOVcsUUFBUSxDQUFDd1QsR0FBRyxHQUFHak8sRUFBRSxDQUFDaEUsSUFBSCxDQUFRbkMsRUFBUixDQUFQLENBQXZELEVBQTRFLE9BQU9vVSxHQUFQO0FBQzVFLE1BQUksQ0FBQ2pMLENBQUQsSUFBTSxRQUFRaEQsRUFBRSxHQUFHbkcsRUFBRSxDQUFDa0MsUUFBaEIsS0FBNkIsVUFBbkMsSUFBaUQsQ0FBQ3RCLFFBQVEsQ0FBQ3dULEdBQUcsR0FBR2pPLEVBQUUsQ0FBQ2hFLElBQUgsQ0FBUW5DLEVBQVIsQ0FBUCxDQUE5RCxFQUFtRixPQUFPb1UsR0FBUDtBQUNuRixRQUFNblUsU0FBUyxDQUFDLHlDQUFELENBQWY7QUFDRCxDQVBELEM7Ozs7Ozs7Ozs7O0FDSkEsSUFBSWtPLEVBQUUsR0FBRyxDQUFUO0FBQ0EsSUFBSXdKLEVBQUUsR0FBR3BNLElBQUksQ0FBQ3FNLE1BQUwsRUFBVDs7QUFDQTlYLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixVQUFVUyxHQUFWLEVBQWU7QUFDOUIsU0FBTyxVQUFVMlEsTUFBVixDQUFpQjNRLEdBQUcsS0FBS0QsU0FBUixHQUFvQixFQUFwQixHQUF5QkMsR0FBMUMsRUFBK0MsSUFBL0MsRUFBcUQsQ0FBQyxFQUFFMk4sRUFBRixHQUFPd0osRUFBUixFQUFZelYsUUFBWixDQUFxQixFQUFyQixDQUFyRCxDQUFQO0FBQ0QsQ0FGRCxDOzs7Ozs7Ozs7OztBQ0ZBLElBQUlrRCxNQUFNLEdBQUdqRixtQkFBTyxDQUFDLDREQUFELENBQXBCOztBQUNBLElBQUl3UCxTQUFTLEdBQUd2SyxNQUFNLENBQUN1SyxTQUF2QjtBQUVBN1AsTUFBTSxDQUFDQyxPQUFQLEdBQWlCNFAsU0FBUyxJQUFJQSxTQUFTLENBQUNrSSxTQUF2QixJQUFvQyxFQUFyRCxDOzs7Ozs7Ozs7OztBQ0hBLElBQUlqWCxRQUFRLEdBQUdULG1CQUFPLENBQUMsa0VBQUQsQ0FBdEI7O0FBQ0FMLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixVQUFVQyxFQUFWLEVBQWM4WCxJQUFkLEVBQW9CO0FBQ25DLE1BQUksQ0FBQ2xYLFFBQVEsQ0FBQ1osRUFBRCxDQUFULElBQWlCQSxFQUFFLENBQUNpRSxFQUFILEtBQVU2VCxJQUEvQixFQUFxQyxNQUFNN1gsU0FBUyxDQUFDLDRCQUE0QjZYLElBQTVCLEdBQW1DLFlBQXBDLENBQWY7QUFDckMsU0FBTzlYLEVBQVA7QUFDRCxDQUhELEM7Ozs7Ozs7Ozs7O0FDREEsSUFBSW9GLE1BQU0sR0FBR2pGLG1CQUFPLENBQUMsNERBQUQsQ0FBcEI7O0FBQ0EsSUFBSW1ILElBQUksR0FBR25ILG1CQUFPLENBQUMsd0RBQUQsQ0FBbEI7O0FBQ0EsSUFBSW9NLE9BQU8sR0FBR3BNLG1CQUFPLENBQUMsOERBQUQsQ0FBckI7O0FBQ0EsSUFBSTRYLE1BQU0sR0FBRzVYLG1CQUFPLENBQUMsOERBQUQsQ0FBcEI7O0FBQ0EsSUFBSTRILGNBQWMsR0FBRzVILG1CQUFPLENBQUMsa0VBQUQsQ0FBUCxDQUF3Qm1DLENBQTdDOztBQUNBeEMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLFVBQVVXLElBQVYsRUFBZ0I7QUFDL0IsTUFBSXNYLE9BQU8sR0FBRzFRLElBQUksQ0FBQ3lKLE1BQUwsS0FBZ0J6SixJQUFJLENBQUN5SixNQUFMLEdBQWN4RSxPQUFPLEdBQUcsRUFBSCxHQUFRbkgsTUFBTSxDQUFDMkwsTUFBUCxJQUFpQixFQUE5RCxDQUFkO0FBQ0EsTUFBSXJRLElBQUksQ0FBQytVLE1BQUwsQ0FBWSxDQUFaLEtBQWtCLEdBQWxCLElBQXlCLEVBQUUvVSxJQUFJLElBQUlzWCxPQUFWLENBQTdCLEVBQWlEalEsY0FBYyxDQUFDaVEsT0FBRCxFQUFVdFgsSUFBVixFQUFnQjtBQUFFYSxTQUFLLEVBQUV3VyxNQUFNLENBQUN6VixDQUFQLENBQVM1QixJQUFUO0FBQVQsR0FBaEIsQ0FBZDtBQUNsRCxDQUhELEM7Ozs7Ozs7Ozs7O0FDTEFYLE9BQU8sQ0FBQ3VDLENBQVIsR0FBWW5DLG1CQUFPLENBQUMsc0RBQUQsQ0FBbkIsQzs7Ozs7Ozs7Ozs7QUNBQSxJQUFJNlUsS0FBSyxHQUFHN1UsbUJBQU8sQ0FBQyw0REFBRCxDQUFQLENBQXFCLEtBQXJCLENBQVo7O0FBQ0EsSUFBSTJVLEdBQUcsR0FBRzNVLG1CQUFPLENBQUMsc0RBQUQsQ0FBakI7O0FBQ0EsSUFBSTRRLE1BQU0sR0FBRzVRLG1CQUFPLENBQUMsNERBQUQsQ0FBUCxDQUFxQjRRLE1BQWxDOztBQUNBLElBQUlrSCxVQUFVLEdBQUcsT0FBT2xILE1BQVAsSUFBaUIsVUFBbEM7O0FBRUEsSUFBSW1ILFFBQVEsR0FBR3BZLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixVQUFVVyxJQUFWLEVBQWdCO0FBQzlDLFNBQU9zVSxLQUFLLENBQUN0VSxJQUFELENBQUwsS0FBZ0JzVSxLQUFLLENBQUN0VSxJQUFELENBQUwsR0FDckJ1WCxVQUFVLElBQUlsSCxNQUFNLENBQUNyUSxJQUFELENBQXBCLElBQThCLENBQUN1WCxVQUFVLEdBQUdsSCxNQUFILEdBQVkrRCxHQUF2QixFQUE0QixZQUFZcFUsSUFBeEMsQ0FEekIsQ0FBUDtBQUVELENBSEQ7O0FBS0F3WCxRQUFRLENBQUNsRCxLQUFULEdBQWlCQSxLQUFqQixDOzs7Ozs7Ozs7OztBQ1ZBLElBQUltRCxPQUFPLEdBQUdoWSxtQkFBTyxDQUFDLDhEQUFELENBQXJCOztBQUNBLElBQUkrSyxRQUFRLEdBQUcvSyxtQkFBTyxDQUFDLHNEQUFELENBQVAsQ0FBa0IsVUFBbEIsQ0FBZjs7QUFDQSxJQUFJNkwsU0FBUyxHQUFHN0wsbUJBQU8sQ0FBQyxrRUFBRCxDQUF2Qjs7QUFDQUwsTUFBTSxDQUFDQyxPQUFQLEdBQWlCSSxtQkFBTyxDQUFDLHdEQUFELENBQVAsQ0FBbUJpWSxpQkFBbkIsR0FBdUMsVUFBVXBZLEVBQVYsRUFBYztBQUNwRSxNQUFJQSxFQUFFLElBQUlPLFNBQVYsRUFBcUIsT0FBT1AsRUFBRSxDQUFDa0wsUUFBRCxDQUFGLElBQ3ZCbEwsRUFBRSxDQUFDLFlBQUQsQ0FEcUIsSUFFdkJnTSxTQUFTLENBQUNtTSxPQUFPLENBQUNuWSxFQUFELENBQVIsQ0FGTztBQUd0QixDQUpELEM7Ozs7Ozs7Ozs7OztBQ0hhOztBQUNiLElBQUl5QyxHQUFHLEdBQUd0QyxtQkFBTyxDQUFDLHNEQUFELENBQWpCOztBQUNBLElBQUlrRixPQUFPLEdBQUdsRixtQkFBTyxDQUFDLDREQUFELENBQXJCOztBQUNBLElBQUl1USxRQUFRLEdBQUd2USxtQkFBTyxDQUFDLGtFQUFELENBQXRCOztBQUNBLElBQUlnQyxJQUFJLEdBQUdoQyxtQkFBTyxDQUFDLGtFQUFELENBQWxCOztBQUNBLElBQUkySyxXQUFXLEdBQUczSyxtQkFBTyxDQUFDLDBFQUFELENBQXpCOztBQUNBLElBQUlXLFFBQVEsR0FBR1gsbUJBQU8sQ0FBQyxrRUFBRCxDQUF0Qjs7QUFDQSxJQUFJa1ksY0FBYyxHQUFHbFksbUJBQU8sQ0FBQyw4RUFBRCxDQUE1Qjs7QUFDQSxJQUFJNEssU0FBUyxHQUFHNUssbUJBQU8sQ0FBQyw4RkFBRCxDQUF2Qjs7QUFFQWtGLE9BQU8sQ0FBQ0EsT0FBTyxDQUFDOEQsQ0FBUixHQUFZOUQsT0FBTyxDQUFDZ0MsQ0FBUixHQUFZLENBQUNsSCxtQkFBTyxDQUFDLHNFQUFELENBQVAsQ0FBMEIsVUFBVTJHLElBQVYsRUFBZ0I7QUFBRXpHLE9BQUssQ0FBQ3dOLElBQU4sQ0FBVy9HLElBQVg7QUFBbUIsQ0FBL0QsQ0FBMUIsRUFBNEYsT0FBNUYsRUFBcUc7QUFDMUc7QUFDQStHLE1BQUksRUFBRSxTQUFTQSxJQUFULENBQWN5SztBQUFVO0FBQXhCLElBQXdFO0FBQzVFLFFBQUlsWCxDQUFDLEdBQUdzUCxRQUFRLENBQUM0SCxTQUFELENBQWhCO0FBQ0EsUUFBSXZVLENBQUMsR0FBRyxPQUFPLElBQVAsSUFBZSxVQUFmLEdBQTRCLElBQTVCLEdBQW1DMUQsS0FBM0M7QUFDQSxRQUFJNlEsSUFBSSxHQUFHdlAsU0FBUyxDQUFDTixNQUFyQjtBQUNBLFFBQUlrWCxLQUFLLEdBQUdySCxJQUFJLEdBQUcsQ0FBUCxHQUFXdlAsU0FBUyxDQUFDLENBQUQsQ0FBcEIsR0FBMEJwQixTQUF0QztBQUNBLFFBQUlpWSxPQUFPLEdBQUdELEtBQUssS0FBS2hZLFNBQXhCO0FBQ0EsUUFBSWUsS0FBSyxHQUFHLENBQVo7QUFDQSxRQUFJNkosTUFBTSxHQUFHSixTQUFTLENBQUMzSixDQUFELENBQXRCO0FBQ0EsUUFBSUMsTUFBSixFQUFZa0gsTUFBWixFQUFvQjFGLElBQXBCLEVBQTBCdUksUUFBMUI7QUFDQSxRQUFJb04sT0FBSixFQUFhRCxLQUFLLEdBQUc5VixHQUFHLENBQUM4VixLQUFELEVBQVFySCxJQUFJLEdBQUcsQ0FBUCxHQUFXdlAsU0FBUyxDQUFDLENBQUQsQ0FBcEIsR0FBMEJwQixTQUFsQyxFQUE2QyxDQUE3QyxDQUFYLENBVCtELENBVTVFOztBQUNBLFFBQUk0SyxNQUFNLElBQUk1SyxTQUFWLElBQXVCLEVBQUV3RCxDQUFDLElBQUkxRCxLQUFMLElBQWN5SyxXQUFXLENBQUNLLE1BQUQsQ0FBM0IsQ0FBM0IsRUFBaUU7QUFDL0QsV0FBS0MsUUFBUSxHQUFHRCxNQUFNLENBQUNoSixJQUFQLENBQVlmLENBQVosQ0FBWCxFQUEyQm1ILE1BQU0sR0FBRyxJQUFJeEUsQ0FBSixFQUF6QyxFQUFrRCxDQUFDLENBQUNsQixJQUFJLEdBQUd1SSxRQUFRLENBQUM1RyxJQUFULEVBQVIsRUFBeUI2RyxJQUE1RSxFQUFrRi9KLEtBQUssRUFBdkYsRUFBMkY7QUFDekYrVyxzQkFBYyxDQUFDOVAsTUFBRCxFQUFTakgsS0FBVCxFQUFnQmtYLE9BQU8sR0FBR3JXLElBQUksQ0FBQ2lKLFFBQUQsRUFBV21OLEtBQVgsRUFBa0IsQ0FBQzFWLElBQUksQ0FBQ3RCLEtBQU4sRUFBYUQsS0FBYixDQUFsQixFQUF1QyxJQUF2QyxDQUFQLEdBQXNEdUIsSUFBSSxDQUFDdEIsS0FBbEYsQ0FBZDtBQUNEO0FBQ0YsS0FKRCxNQUlPO0FBQ0xGLFlBQU0sR0FBR1AsUUFBUSxDQUFDTSxDQUFDLENBQUNDLE1BQUgsQ0FBakI7O0FBQ0EsV0FBS2tILE1BQU0sR0FBRyxJQUFJeEUsQ0FBSixDQUFNMUMsTUFBTixDQUFkLEVBQTZCQSxNQUFNLEdBQUdDLEtBQXRDLEVBQTZDQSxLQUFLLEVBQWxELEVBQXNEO0FBQ3BEK1csc0JBQWMsQ0FBQzlQLE1BQUQsRUFBU2pILEtBQVQsRUFBZ0JrWCxPQUFPLEdBQUdELEtBQUssQ0FBQ25YLENBQUMsQ0FBQ0UsS0FBRCxDQUFGLEVBQVdBLEtBQVgsQ0FBUixHQUE0QkYsQ0FBQyxDQUFDRSxLQUFELENBQXBELENBQWQ7QUFDRDtBQUNGOztBQUNEaUgsVUFBTSxDQUFDbEgsTUFBUCxHQUFnQkMsS0FBaEI7QUFDQSxXQUFPaUgsTUFBUDtBQUNEO0FBekJ5RyxDQUFyRyxDQUFQLEM7Ozs7Ozs7Ozs7OztBQ1ZhOztBQUNiLElBQUlrUSxnQkFBZ0IsR0FBR3RZLG1CQUFPLENBQUMsb0ZBQUQsQ0FBOUI7O0FBQ0EsSUFBSTBDLElBQUksR0FBRzFDLG1CQUFPLENBQUMsa0VBQUQsQ0FBbEI7O0FBQ0EsSUFBSTZMLFNBQVMsR0FBRzdMLG1CQUFPLENBQUMsa0VBQUQsQ0FBdkI7O0FBQ0EsSUFBSVUsU0FBUyxHQUFHVixtQkFBTyxDQUFDLG9FQUFELENBQXZCLEMsQ0FFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0FMLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQkksbUJBQU8sQ0FBQyxzRUFBRCxDQUFQLENBQTBCRSxLQUExQixFQUFpQyxPQUFqQyxFQUEwQyxVQUFVNEUsUUFBVixFQUFvQkMsSUFBcEIsRUFBMEI7QUFDbkYsT0FBS2pCLEVBQUwsR0FBVXBELFNBQVMsQ0FBQ29FLFFBQUQsQ0FBbkIsQ0FEbUYsQ0FDcEQ7O0FBQy9CLE9BQUszQixFQUFMLEdBQVUsQ0FBVixDQUZtRixDQUVwRDs7QUFDL0IsT0FBSzZCLEVBQUwsR0FBVUQsSUFBVixDQUhtRixDQUdwRDtBQUNqQztBQUNDLENBTGdCLEVBS2QsWUFBWTtBQUNiLE1BQUk5RCxDQUFDLEdBQUcsS0FBSzZDLEVBQWI7QUFDQSxNQUFJaUIsSUFBSSxHQUFHLEtBQUtDLEVBQWhCO0FBQ0EsTUFBSTdELEtBQUssR0FBRyxLQUFLZ0MsRUFBTCxFQUFaOztBQUNBLE1BQUksQ0FBQ2xDLENBQUQsSUFBTUUsS0FBSyxJQUFJRixDQUFDLENBQUNDLE1BQXJCLEVBQTZCO0FBQzNCLFNBQUs0QyxFQUFMLEdBQVUxRCxTQUFWO0FBQ0EsV0FBT3NDLElBQUksQ0FBQyxDQUFELENBQVg7QUFDRDs7QUFDRCxNQUFJcUMsSUFBSSxJQUFJLE1BQVosRUFBb0IsT0FBT3JDLElBQUksQ0FBQyxDQUFELEVBQUl2QixLQUFKLENBQVg7QUFDcEIsTUFBSTRELElBQUksSUFBSSxRQUFaLEVBQXNCLE9BQU9yQyxJQUFJLENBQUMsQ0FBRCxFQUFJekIsQ0FBQyxDQUFDRSxLQUFELENBQUwsQ0FBWDtBQUN0QixTQUFPdUIsSUFBSSxDQUFDLENBQUQsRUFBSSxDQUFDdkIsS0FBRCxFQUFRRixDQUFDLENBQUNFLEtBQUQsQ0FBVCxDQUFKLENBQVg7QUFDRCxDQWhCZ0IsRUFnQmQsUUFoQmMsQ0FBakIsQyxDQWtCQTs7QUFDQTBLLFNBQVMsQ0FBQzBNLFNBQVYsR0FBc0IxTSxTQUFTLENBQUMzTCxLQUFoQztBQUVBb1ksZ0JBQWdCLENBQUMsTUFBRCxDQUFoQjtBQUNBQSxnQkFBZ0IsQ0FBQyxRQUFELENBQWhCO0FBQ0FBLGdCQUFnQixDQUFDLFNBQUQsQ0FBaEIsQzs7Ozs7Ozs7Ozs7QUNqQ0EsSUFBSXBXLEVBQUUsR0FBR2xDLG1CQUFPLENBQUMsa0VBQUQsQ0FBUCxDQUF3Qm1DLENBQWpDOztBQUNBLElBQUlxVyxNQUFNLEdBQUdoUCxRQUFRLENBQUNySixTQUF0QjtBQUNBLElBQUlzWSxNQUFNLEdBQUcsdUJBQWI7QUFDQSxJQUFJaFYsSUFBSSxHQUFHLE1BQVgsQyxDQUVBOztBQUNBQSxJQUFJLElBQUkrVSxNQUFSLElBQWtCeFksbUJBQU8sQ0FBQyxzRUFBRCxDQUFQLElBQTZCa0MsRUFBRSxDQUFDc1csTUFBRCxFQUFTL1UsSUFBVCxFQUFlO0FBQzlEaVEsY0FBWSxFQUFFLElBRGdEO0FBRTlEL08sS0FBRyxFQUFFLFlBQVk7QUFDZixRQUFJO0FBQ0YsYUFBTyxDQUFDLEtBQUssSUFBTixFQUFZK1QsS0FBWixDQUFrQkQsTUFBbEIsRUFBMEIsQ0FBMUIsQ0FBUDtBQUNELEtBRkQsQ0FFRSxPQUFPL1csQ0FBUCxFQUFVO0FBQ1YsYUFBTyxFQUFQO0FBQ0Q7QUFDRjtBQVI2RCxDQUFmLENBQWpELEM7Ozs7Ozs7Ozs7OztBQ05hOztBQUNiLElBQUlpWCxNQUFNLEdBQUczWSxtQkFBTyxDQUFDLGtGQUFELENBQXBCOztBQUNBLElBQUk4QyxRQUFRLEdBQUc5QyxtQkFBTyxDQUFDLHNGQUFELENBQXRCOztBQUNBLElBQUk0WSxHQUFHLEdBQUcsS0FBVixDLENBRUE7O0FBQ0FqWixNQUFNLENBQUNDLE9BQVAsR0FBaUJJLG1CQUFPLENBQUMsb0VBQUQsQ0FBUCxDQUF5QjRZLEdBQXpCLEVBQThCLFVBQVVqVSxHQUFWLEVBQWU7QUFDNUQsU0FBTyxTQUFTa1UsR0FBVCxHQUFlO0FBQUUsV0FBT2xVLEdBQUcsQ0FBQyxJQUFELEVBQU9uRCxTQUFTLENBQUNOLE1BQVYsR0FBbUIsQ0FBbkIsR0FBdUJNLFNBQVMsQ0FBQyxDQUFELENBQWhDLEdBQXNDcEIsU0FBN0MsQ0FBVjtBQUFvRSxHQUE1RjtBQUNELENBRmdCLEVBRWQ7QUFDRDtBQUNBdUUsS0FBRyxFQUFFLFNBQVNBLEdBQVQsQ0FBYXRFLEdBQWIsRUFBa0I7QUFDckIsUUFBSTZDLEtBQUssR0FBR3lWLE1BQU0sQ0FBQzNWLFFBQVAsQ0FBZ0JGLFFBQVEsQ0FBQyxJQUFELEVBQU84VixHQUFQLENBQXhCLEVBQXFDdlksR0FBckMsQ0FBWjtBQUNBLFdBQU82QyxLQUFLLElBQUlBLEtBQUssQ0FBQ3VCLENBQXRCO0FBQ0QsR0FMQTtBQU1EO0FBQ0EwQixLQUFHLEVBQUUsU0FBU0EsR0FBVCxDQUFhOUYsR0FBYixFQUFrQmUsS0FBbEIsRUFBeUI7QUFDNUIsV0FBT3VYLE1BQU0sQ0FBQy9ULEdBQVAsQ0FBVzlCLFFBQVEsQ0FBQyxJQUFELEVBQU84VixHQUFQLENBQW5CLEVBQWdDdlksR0FBRyxLQUFLLENBQVIsR0FBWSxDQUFaLEdBQWdCQSxHQUFoRCxFQUFxRGUsS0FBckQsQ0FBUDtBQUNEO0FBVEEsQ0FGYyxFQVlkdVgsTUFaYyxFQVlOLElBWk0sQ0FBakIsQzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBLElBQUl6VCxPQUFPLEdBQUdsRixtQkFBTyxDQUFDLDREQUFELENBQXJCOztBQUVBa0YsT0FBTyxDQUFDQSxPQUFPLENBQUM4RCxDQUFSLEdBQVk5RCxPQUFPLENBQUNnQyxDQUFyQixFQUF3QixRQUF4QixFQUFrQztBQUFFd0osUUFBTSxFQUFFMVEsbUJBQU8sQ0FBQywwRUFBRDtBQUFqQixDQUFsQyxDQUFQLEM7Ozs7Ozs7Ozs7O0FDSEE7QUFDQSxJQUFJdVEsUUFBUSxHQUFHdlEsbUJBQU8sQ0FBQyxrRUFBRCxDQUF0Qjs7QUFDQSxJQUFJOFMsS0FBSyxHQUFHOVMsbUJBQU8sQ0FBQyxzRUFBRCxDQUFuQjs7QUFFQUEsbUJBQU8sQ0FBQyxvRUFBRCxDQUFQLENBQXlCLE1BQXpCLEVBQWlDLFlBQVk7QUFDM0MsU0FBTyxTQUFTd00sSUFBVCxDQUFjM00sRUFBZCxFQUFrQjtBQUN2QixXQUFPaVQsS0FBSyxDQUFDdkMsUUFBUSxDQUFDMVEsRUFBRCxDQUFULENBQVo7QUFDRCxHQUZEO0FBR0QsQ0FKRCxFOzs7Ozs7Ozs7Ozs7QUNKYTs7QUFDYixJQUFJdU0sT0FBTyxHQUFHcE0sbUJBQU8sQ0FBQyw4REFBRCxDQUFyQjs7QUFDQSxJQUFJaUYsTUFBTSxHQUFHakYsbUJBQU8sQ0FBQyw0REFBRCxDQUFwQjs7QUFDQSxJQUFJc0MsR0FBRyxHQUFHdEMsbUJBQU8sQ0FBQyxzREFBRCxDQUFqQjs7QUFDQSxJQUFJZ1ksT0FBTyxHQUFHaFksbUJBQU8sQ0FBQyw4REFBRCxDQUFyQjs7QUFDQSxJQUFJa0YsT0FBTyxHQUFHbEYsbUJBQU8sQ0FBQyw0REFBRCxDQUFyQjs7QUFDQSxJQUFJUyxRQUFRLEdBQUdULG1CQUFPLENBQUMsa0VBQUQsQ0FBdEI7O0FBQ0EsSUFBSXlILFNBQVMsR0FBR3pILG1CQUFPLENBQUMsb0VBQUQsQ0FBdkI7O0FBQ0EsSUFBSXVDLFVBQVUsR0FBR3ZDLG1CQUFPLENBQUMsc0VBQUQsQ0FBeEI7O0FBQ0EsSUFBSXdDLEtBQUssR0FBR3hDLG1CQUFPLENBQUMsNERBQUQsQ0FBbkI7O0FBQ0EsSUFBSThZLGtCQUFrQixHQUFHOVksbUJBQU8sQ0FBQyxzRkFBRCxDQUFoQzs7QUFDQSxJQUFJa1EsSUFBSSxHQUFHbFEsbUJBQU8sQ0FBQyx3REFBRCxDQUFQLENBQW1CbUcsR0FBOUI7O0FBQ0EsSUFBSTRTLFNBQVMsR0FBRy9ZLG1CQUFPLENBQUMsa0VBQUQsQ0FBUCxFQUFoQjs7QUFDQSxJQUFJZ1osMEJBQTBCLEdBQUdoWixtQkFBTyxDQUFDLDRGQUFELENBQXhDOztBQUNBLElBQUlpWixPQUFPLEdBQUdqWixtQkFBTyxDQUFDLDhEQUFELENBQXJCOztBQUNBLElBQUkwWCxTQUFTLEdBQUcxWCxtQkFBTyxDQUFDLG9FQUFELENBQXZCOztBQUNBLElBQUlrWixjQUFjLEdBQUdsWixtQkFBTyxDQUFDLDhFQUFELENBQTVCOztBQUNBLElBQUltWixPQUFPLEdBQUcsU0FBZDtBQUNBLElBQUlyWixTQUFTLEdBQUdtRixNQUFNLENBQUNuRixTQUF2QjtBQUNBLElBQUk4TyxPQUFPLEdBQUczSixNQUFNLENBQUMySixPQUFyQjtBQUNBLElBQUl3SyxRQUFRLEdBQUd4SyxPQUFPLElBQUlBLE9BQU8sQ0FBQ3dLLFFBQWxDO0FBQ0EsSUFBSUMsRUFBRSxHQUFHRCxRQUFRLElBQUlBLFFBQVEsQ0FBQ0MsRUFBckIsSUFBMkIsRUFBcEM7QUFDQSxJQUFJQyxRQUFRLEdBQUdyVSxNQUFNLENBQUNrVSxPQUFELENBQXJCO0FBQ0EsSUFBSXJLLE1BQU0sR0FBR2tKLE9BQU8sQ0FBQ3BKLE9BQUQsQ0FBUCxJQUFvQixTQUFqQzs7QUFDQSxJQUFJMkssS0FBSyxHQUFHLFlBQVk7QUFBRTtBQUFhLENBQXZDOztBQUNBLElBQUlDLFFBQUosRUFBY0MsMkJBQWQsRUFBMkNDLG9CQUEzQyxFQUFpRUMsT0FBakU7QUFDQSxJQUFJdEcsb0JBQW9CLEdBQUdvRywyQkFBMkIsR0FBR1QsMEJBQTBCLENBQUM3VyxDQUFwRjtBQUVBLElBQUl5WCxVQUFVLEdBQUcsQ0FBQyxDQUFDLFlBQVk7QUFDN0IsTUFBSTtBQUNGO0FBQ0EsUUFBSTVKLE9BQU8sR0FBR3NKLFFBQVEsQ0FBQ3ZKLE9BQVQsQ0FBaUIsQ0FBakIsQ0FBZDs7QUFDQSxRQUFJOEosV0FBVyxHQUFHLENBQUM3SixPQUFPLENBQUNqSixXQUFSLEdBQXNCLEVBQXZCLEVBQTJCL0csbUJBQU8sQ0FBQyxzREFBRCxDQUFQLENBQWtCLFNBQWxCLENBQTNCLElBQTJELFVBQVUySixJQUFWLEVBQWdCO0FBQzNGQSxVQUFJLENBQUM0UCxLQUFELEVBQVFBLEtBQVIsQ0FBSjtBQUNELEtBRkQsQ0FIRSxDQU1GOzs7QUFDQSxXQUFPLENBQUN6SyxNQUFNLElBQUksT0FBT2dMLHFCQUFQLElBQWdDLFVBQTNDLEtBQ0Y5SixPQUFPLENBQUNDLElBQVIsQ0FBYXNKLEtBQWIsYUFBK0JNLFdBRDdCLENBRUw7QUFDQTtBQUNBO0FBSkssT0FLRlIsRUFBRSxDQUFDVSxPQUFILENBQVcsS0FBWCxNQUFzQixDQUxwQixJQU1GckMsU0FBUyxDQUFDcUMsT0FBVixDQUFrQixXQUFsQixNQUFtQyxDQUFDLENBTnpDO0FBT0QsR0FkRCxDQWNFLE9BQU9yWSxDQUFQLEVBQVU7QUFBRTtBQUFhO0FBQzVCLENBaEJrQixFQUFuQixDLENBa0JBOztBQUNBLElBQUlzWSxVQUFVLEdBQUcsVUFBVW5hLEVBQVYsRUFBYztBQUM3QixNQUFJb1EsSUFBSjtBQUNBLFNBQU94UCxRQUFRLENBQUNaLEVBQUQsQ0FBUixJQUFnQixRQUFRb1EsSUFBSSxHQUFHcFEsRUFBRSxDQUFDb1EsSUFBbEIsS0FBMkIsVUFBM0MsR0FBd0RBLElBQXhELEdBQStELEtBQXRFO0FBQ0QsQ0FIRDs7QUFJQSxJQUFJaEIsTUFBTSxHQUFHLFVBQVVlLE9BQVYsRUFBbUJpSyxRQUFuQixFQUE2QjtBQUN4QyxNQUFJakssT0FBTyxDQUFDa0ssRUFBWixFQUFnQjtBQUNoQmxLLFNBQU8sQ0FBQ2tLLEVBQVIsR0FBYSxJQUFiO0FBQ0EsTUFBSUMsS0FBSyxHQUFHbkssT0FBTyxDQUFDb0ssRUFBcEI7QUFDQXJCLFdBQVMsQ0FBQyxZQUFZO0FBQ3BCLFFBQUkzWCxLQUFLLEdBQUc0TyxPQUFPLENBQUNxSyxFQUFwQjtBQUNBLFFBQUlDLEVBQUUsR0FBR3RLLE9BQU8sQ0FBQ3VLLEVBQVIsSUFBYyxDQUF2QjtBQUNBLFFBQUluVyxDQUFDLEdBQUcsQ0FBUjs7QUFDQSxRQUFJa1MsR0FBRyxHQUFHLFVBQVVrRSxRQUFWLEVBQW9CO0FBQzVCLFVBQUlDLE9BQU8sR0FBR0gsRUFBRSxHQUFHRSxRQUFRLENBQUNGLEVBQVosR0FBaUJFLFFBQVEsQ0FBQ0UsSUFBMUM7QUFDQSxVQUFJM0ssT0FBTyxHQUFHeUssUUFBUSxDQUFDekssT0FBdkI7QUFDQSxVQUFJSyxNQUFNLEdBQUdvSyxRQUFRLENBQUNwSyxNQUF0QjtBQUNBLFVBQUloQixNQUFNLEdBQUdvTCxRQUFRLENBQUNwTCxNQUF0QjtBQUNBLFVBQUloSCxNQUFKLEVBQVk2SCxJQUFaLEVBQWtCMEssTUFBbEI7O0FBQ0EsVUFBSTtBQUNGLFlBQUlGLE9BQUosRUFBYTtBQUNYLGNBQUksQ0FBQ0gsRUFBTCxFQUFTO0FBQ1AsZ0JBQUl0SyxPQUFPLENBQUM0SyxFQUFSLElBQWMsQ0FBbEIsRUFBcUJDLGlCQUFpQixDQUFDN0ssT0FBRCxDQUFqQjtBQUNyQkEsbUJBQU8sQ0FBQzRLLEVBQVIsR0FBYSxDQUFiO0FBQ0Q7O0FBQ0QsY0FBSUgsT0FBTyxLQUFLLElBQWhCLEVBQXNCclMsTUFBTSxHQUFHaEgsS0FBVCxDQUF0QixLQUNLO0FBQ0gsZ0JBQUlnTyxNQUFKLEVBQVlBLE1BQU0sQ0FBQ0UsS0FBUDtBQUNabEgsa0JBQU0sR0FBR3FTLE9BQU8sQ0FBQ3JaLEtBQUQsQ0FBaEIsQ0FGRyxDQUVzQjs7QUFDekIsZ0JBQUlnTyxNQUFKLEVBQVk7QUFDVkEsb0JBQU0sQ0FBQ0MsSUFBUDtBQUNBc0wsb0JBQU0sR0FBRyxJQUFUO0FBQ0Q7QUFDRjs7QUFDRCxjQUFJdlMsTUFBTSxLQUFLb1MsUUFBUSxDQUFDeEssT0FBeEIsRUFBaUM7QUFDL0JJLGtCQUFNLENBQUN0USxTQUFTLENBQUMscUJBQUQsQ0FBVixDQUFOO0FBQ0QsV0FGRCxNQUVPLElBQUltUSxJQUFJLEdBQUcrSixVQUFVLENBQUM1UixNQUFELENBQXJCLEVBQStCO0FBQ3BDNkgsZ0JBQUksQ0FBQ2pPLElBQUwsQ0FBVW9HLE1BQVYsRUFBa0IySCxPQUFsQixFQUEyQkssTUFBM0I7QUFDRCxXQUZNLE1BRUFMLE9BQU8sQ0FBQzNILE1BQUQsQ0FBUDtBQUNSLFNBbkJELE1BbUJPZ0ksTUFBTSxDQUFDaFAsS0FBRCxDQUFOO0FBQ1IsT0FyQkQsQ0FxQkUsT0FBT00sQ0FBUCxFQUFVO0FBQ1YsWUFBSTBOLE1BQU0sSUFBSSxDQUFDdUwsTUFBZixFQUF1QnZMLE1BQU0sQ0FBQ0MsSUFBUDtBQUN2QmUsY0FBTSxDQUFDMU8sQ0FBRCxDQUFOO0FBQ0Q7QUFDRixLQS9CRDs7QUFnQ0EsV0FBT3lZLEtBQUssQ0FBQ2paLE1BQU4sR0FBZWtELENBQXRCLEVBQXlCa1MsR0FBRyxDQUFDNkQsS0FBSyxDQUFDL1YsQ0FBQyxFQUFGLENBQU4sQ0FBSCxDQXBDTCxDQW9Dc0I7OztBQUMxQzRMLFdBQU8sQ0FBQ29LLEVBQVIsR0FBYSxFQUFiO0FBQ0FwSyxXQUFPLENBQUNrSyxFQUFSLEdBQWEsS0FBYjtBQUNBLFFBQUlELFFBQVEsSUFBSSxDQUFDakssT0FBTyxDQUFDNEssRUFBekIsRUFBNkJFLFdBQVcsQ0FBQzlLLE9BQUQsQ0FBWDtBQUM5QixHQXhDUSxDQUFUO0FBeUNELENBN0NEOztBQThDQSxJQUFJOEssV0FBVyxHQUFHLFVBQVU5SyxPQUFWLEVBQW1CO0FBQ25DRSxNQUFJLENBQUNsTyxJQUFMLENBQVVpRCxNQUFWLEVBQWtCLFlBQVk7QUFDNUIsUUFBSTdELEtBQUssR0FBRzRPLE9BQU8sQ0FBQ3FLLEVBQXBCO0FBQ0EsUUFBSVUsU0FBUyxHQUFHQyxXQUFXLENBQUNoTCxPQUFELENBQTNCO0FBQ0EsUUFBSTVILE1BQUosRUFBWXFTLE9BQVosRUFBcUJRLE9BQXJCOztBQUNBLFFBQUlGLFNBQUosRUFBZTtBQUNiM1MsWUFBTSxHQUFHNlEsT0FBTyxDQUFDLFlBQVk7QUFDM0IsWUFBSW5LLE1BQUosRUFBWTtBQUNWRixpQkFBTyxDQUFDc00sSUFBUixDQUFhLG9CQUFiLEVBQW1DOVosS0FBbkMsRUFBMEM0TyxPQUExQztBQUNELFNBRkQsTUFFTyxJQUFJeUssT0FBTyxHQUFHeFYsTUFBTSxDQUFDa1csb0JBQXJCLEVBQTJDO0FBQ2hEVixpQkFBTyxDQUFDO0FBQUV6SyxtQkFBTyxFQUFFQSxPQUFYO0FBQW9Cb0wsa0JBQU0sRUFBRWhhO0FBQTVCLFdBQUQsQ0FBUDtBQUNELFNBRk0sTUFFQSxJQUFJLENBQUM2WixPQUFPLEdBQUdoVyxNQUFNLENBQUNnVyxPQUFsQixLQUE4QkEsT0FBTyxDQUFDSSxLQUExQyxFQUFpRDtBQUN0REosaUJBQU8sQ0FBQ0ksS0FBUixDQUFjLDZCQUFkLEVBQTZDamEsS0FBN0M7QUFDRDtBQUNGLE9BUmUsQ0FBaEIsQ0FEYSxDQVViOztBQUNBNE8sYUFBTyxDQUFDNEssRUFBUixHQUFhOUwsTUFBTSxJQUFJa00sV0FBVyxDQUFDaEwsT0FBRCxDQUFyQixHQUFpQyxDQUFqQyxHQUFxQyxDQUFsRDtBQUNEOztBQUFDQSxXQUFPLENBQUNzTCxFQUFSLEdBQWFsYixTQUFiO0FBQ0YsUUFBSTJhLFNBQVMsSUFBSTNTLE1BQU0sQ0FBQzFHLENBQXhCLEVBQTJCLE1BQU0wRyxNQUFNLENBQUMzRCxDQUFiO0FBQzVCLEdBbEJEO0FBbUJELENBcEJEOztBQXFCQSxJQUFJdVcsV0FBVyxHQUFHLFVBQVVoTCxPQUFWLEVBQW1CO0FBQ25DLFNBQU9BLE9BQU8sQ0FBQzRLLEVBQVIsS0FBZSxDQUFmLElBQW9CLENBQUM1SyxPQUFPLENBQUNzTCxFQUFSLElBQWN0TCxPQUFPLENBQUNvSyxFQUF2QixFQUEyQmxaLE1BQTNCLEtBQXNDLENBQWpFO0FBQ0QsQ0FGRDs7QUFHQSxJQUFJMlosaUJBQWlCLEdBQUcsVUFBVTdLLE9BQVYsRUFBbUI7QUFDekNFLE1BQUksQ0FBQ2xPLElBQUwsQ0FBVWlELE1BQVYsRUFBa0IsWUFBWTtBQUM1QixRQUFJd1YsT0FBSjs7QUFDQSxRQUFJM0wsTUFBSixFQUFZO0FBQ1ZGLGFBQU8sQ0FBQ3NNLElBQVIsQ0FBYSxrQkFBYixFQUFpQ2xMLE9BQWpDO0FBQ0QsS0FGRCxNQUVPLElBQUl5SyxPQUFPLEdBQUd4VixNQUFNLENBQUNzVyxrQkFBckIsRUFBeUM7QUFDOUNkLGFBQU8sQ0FBQztBQUFFekssZUFBTyxFQUFFQSxPQUFYO0FBQW9Cb0wsY0FBTSxFQUFFcEwsT0FBTyxDQUFDcUs7QUFBcEMsT0FBRCxDQUFQO0FBQ0Q7QUFDRixHQVBEO0FBUUQsQ0FURDs7QUFVQSxJQUFJbUIsT0FBTyxHQUFHLFVBQVVwYSxLQUFWLEVBQWlCO0FBQzdCLE1BQUk0TyxPQUFPLEdBQUcsSUFBZDtBQUNBLE1BQUlBLE9BQU8sQ0FBQ3lMLEVBQVosRUFBZ0I7QUFDaEJ6TCxTQUFPLENBQUN5TCxFQUFSLEdBQWEsSUFBYjtBQUNBekwsU0FBTyxHQUFHQSxPQUFPLENBQUMwTCxFQUFSLElBQWMxTCxPQUF4QixDQUo2QixDQUlJOztBQUNqQ0EsU0FBTyxDQUFDcUssRUFBUixHQUFhalosS0FBYjtBQUNBNE8sU0FBTyxDQUFDdUssRUFBUixHQUFhLENBQWI7QUFDQSxNQUFJLENBQUN2SyxPQUFPLENBQUNzTCxFQUFiLEVBQWlCdEwsT0FBTyxDQUFDc0wsRUFBUixHQUFhdEwsT0FBTyxDQUFDb0ssRUFBUixDQUFXblksS0FBWCxFQUFiO0FBQ2pCZ04sUUFBTSxDQUFDZSxPQUFELEVBQVUsSUFBVixDQUFOO0FBQ0QsQ0FURDs7QUFVQSxJQUFJMkwsUUFBUSxHQUFHLFVBQVV2YSxLQUFWLEVBQWlCO0FBQzlCLE1BQUk0TyxPQUFPLEdBQUcsSUFBZDtBQUNBLE1BQUlDLElBQUo7QUFDQSxNQUFJRCxPQUFPLENBQUN5TCxFQUFaLEVBQWdCO0FBQ2hCekwsU0FBTyxDQUFDeUwsRUFBUixHQUFhLElBQWI7QUFDQXpMLFNBQU8sR0FBR0EsT0FBTyxDQUFDMEwsRUFBUixJQUFjMUwsT0FBeEIsQ0FMOEIsQ0FLRzs7QUFDakMsTUFBSTtBQUNGLFFBQUlBLE9BQU8sS0FBSzVPLEtBQWhCLEVBQXVCLE1BQU10QixTQUFTLENBQUMsa0NBQUQsQ0FBZjs7QUFDdkIsUUFBSW1RLElBQUksR0FBRytKLFVBQVUsQ0FBQzVZLEtBQUQsQ0FBckIsRUFBOEI7QUFDNUIyWCxlQUFTLENBQUMsWUFBWTtBQUNwQixZQUFJdlYsT0FBTyxHQUFHO0FBQUVrWSxZQUFFLEVBQUUxTCxPQUFOO0FBQWV5TCxZQUFFLEVBQUU7QUFBbkIsU0FBZCxDQURvQixDQUNzQjs7QUFDMUMsWUFBSTtBQUNGeEwsY0FBSSxDQUFDak8sSUFBTCxDQUFVWixLQUFWLEVBQWlCa0IsR0FBRyxDQUFDcVosUUFBRCxFQUFXblksT0FBWCxFQUFvQixDQUFwQixDQUFwQixFQUE0Q2xCLEdBQUcsQ0FBQ2taLE9BQUQsRUFBVWhZLE9BQVYsRUFBbUIsQ0FBbkIsQ0FBL0M7QUFDRCxTQUZELENBRUUsT0FBTzlCLENBQVAsRUFBVTtBQUNWOFosaUJBQU8sQ0FBQ3haLElBQVIsQ0FBYXdCLE9BQWIsRUFBc0I5QixDQUF0QjtBQUNEO0FBQ0YsT0FQUSxDQUFUO0FBUUQsS0FURCxNQVNPO0FBQ0xzTyxhQUFPLENBQUNxSyxFQUFSLEdBQWFqWixLQUFiO0FBQ0E0TyxhQUFPLENBQUN1SyxFQUFSLEdBQWEsQ0FBYjtBQUNBdEwsWUFBTSxDQUFDZSxPQUFELEVBQVUsS0FBVixDQUFOO0FBQ0Q7QUFDRixHQWhCRCxDQWdCRSxPQUFPdE8sQ0FBUCxFQUFVO0FBQ1Y4WixXQUFPLENBQUN4WixJQUFSLENBQWE7QUFBRTBaLFFBQUUsRUFBRTFMLE9BQU47QUFBZXlMLFFBQUUsRUFBRTtBQUFuQixLQUFiLEVBQXlDL1osQ0FBekMsRUFEVSxDQUNtQztBQUM5QztBQUNGLENBekJELEMsQ0EyQkE7OztBQUNBLElBQUksQ0FBQ2tZLFVBQUwsRUFBaUI7QUFDZjtBQUNBTixVQUFRLEdBQUcsU0FBU3pLLE9BQVQsQ0FBaUIrTSxRQUFqQixFQUEyQjtBQUNwQ3JaLGNBQVUsQ0FBQyxJQUFELEVBQU8rVyxRQUFQLEVBQWlCSCxPQUFqQixFQUEwQixJQUExQixDQUFWO0FBQ0ExUixhQUFTLENBQUNtVSxRQUFELENBQVQ7QUFDQXBDLFlBQVEsQ0FBQ3hYLElBQVQsQ0FBYyxJQUFkOztBQUNBLFFBQUk7QUFDRjRaLGNBQVEsQ0FBQ3RaLEdBQUcsQ0FBQ3FaLFFBQUQsRUFBVyxJQUFYLEVBQWlCLENBQWpCLENBQUosRUFBeUJyWixHQUFHLENBQUNrWixPQUFELEVBQVUsSUFBVixFQUFnQixDQUFoQixDQUE1QixDQUFSO0FBQ0QsS0FGRCxDQUVFLE9BQU9LLEdBQVAsRUFBWTtBQUNaTCxhQUFPLENBQUN4WixJQUFSLENBQWEsSUFBYixFQUFtQjZaLEdBQW5CO0FBQ0Q7QUFDRixHQVRELENBRmUsQ0FZZjs7O0FBQ0FyQyxVQUFRLEdBQUcsU0FBUzNLLE9BQVQsQ0FBaUIrTSxRQUFqQixFQUEyQjtBQUNwQyxTQUFLeEIsRUFBTCxHQUFVLEVBQVYsQ0FEb0MsQ0FDVjs7QUFDMUIsU0FBS2tCLEVBQUwsR0FBVWxiLFNBQVYsQ0FGb0MsQ0FFVjs7QUFDMUIsU0FBS21hLEVBQUwsR0FBVSxDQUFWLENBSG9DLENBR1Y7O0FBQzFCLFNBQUtrQixFQUFMLEdBQVUsS0FBVixDQUpvQyxDQUlWOztBQUMxQixTQUFLcEIsRUFBTCxHQUFVamEsU0FBVixDQUxvQyxDQUtWOztBQUMxQixTQUFLd2EsRUFBTCxHQUFVLENBQVYsQ0FOb0MsQ0FNVjs7QUFDMUIsU0FBS1YsRUFBTCxHQUFVLEtBQVYsQ0FQb0MsQ0FPVjtBQUMzQixHQVJEOztBQVNBVixVQUFRLENBQUNyWixTQUFULEdBQXFCSCxtQkFBTyxDQUFDLHdFQUFELENBQVAsQ0FBMkJzWixRQUFRLENBQUNuWixTQUFwQyxFQUErQztBQUNsRTtBQUNBOFAsUUFBSSxFQUFFLFNBQVNBLElBQVQsQ0FBYzZMLFdBQWQsRUFBMkJDLFVBQTNCLEVBQXVDO0FBQzNDLFVBQUl2QixRQUFRLEdBQUduSCxvQkFBb0IsQ0FBQ3lGLGtCQUFrQixDQUFDLElBQUQsRUFBT1EsUUFBUCxDQUFuQixDQUFuQztBQUNBa0IsY0FBUSxDQUFDRixFQUFULEdBQWMsT0FBT3dCLFdBQVAsSUFBc0IsVUFBdEIsR0FBbUNBLFdBQW5DLEdBQWlELElBQS9EO0FBQ0F0QixjQUFRLENBQUNFLElBQVQsR0FBZ0IsT0FBT3FCLFVBQVAsSUFBcUIsVUFBckIsSUFBbUNBLFVBQW5EO0FBQ0F2QixjQUFRLENBQUNwTCxNQUFULEdBQWtCTixNQUFNLEdBQUdGLE9BQU8sQ0FBQ1EsTUFBWCxHQUFvQmhQLFNBQTVDOztBQUNBLFdBQUtnYSxFQUFMLENBQVE1UixJQUFSLENBQWFnUyxRQUFiOztBQUNBLFVBQUksS0FBS2MsRUFBVCxFQUFhLEtBQUtBLEVBQUwsQ0FBUTlTLElBQVIsQ0FBYWdTLFFBQWI7QUFDYixVQUFJLEtBQUtELEVBQVQsRUFBYXRMLE1BQU0sQ0FBQyxJQUFELEVBQU8sS0FBUCxDQUFOO0FBQ2IsYUFBT3VMLFFBQVEsQ0FBQ3hLLE9BQWhCO0FBQ0QsS0FYaUU7QUFZbEU7QUFDQSxhQUFTLFVBQVUrTCxVQUFWLEVBQXNCO0FBQzdCLGFBQU8sS0FBSzlMLElBQUwsQ0FBVTdQLFNBQVYsRUFBcUIyYixVQUFyQixDQUFQO0FBQ0Q7QUFmaUUsR0FBL0MsQ0FBckI7O0FBaUJBckMsc0JBQW9CLEdBQUcsWUFBWTtBQUNqQyxRQUFJMUosT0FBTyxHQUFHLElBQUl3SixRQUFKLEVBQWQ7QUFDQSxTQUFLeEosT0FBTCxHQUFlQSxPQUFmO0FBQ0EsU0FBS0QsT0FBTCxHQUFlek4sR0FBRyxDQUFDcVosUUFBRCxFQUFXM0wsT0FBWCxFQUFvQixDQUFwQixDQUFsQjtBQUNBLFNBQUtJLE1BQUwsR0FBYzlOLEdBQUcsQ0FBQ2taLE9BQUQsRUFBVXhMLE9BQVYsRUFBbUIsQ0FBbkIsQ0FBakI7QUFDRCxHQUxEOztBQU1BZ0osNEJBQTBCLENBQUM3VyxDQUEzQixHQUErQmtSLG9CQUFvQixHQUFHLFVBQVV6UCxDQUFWLEVBQWE7QUFDakUsV0FBT0EsQ0FBQyxLQUFLMFYsUUFBTixJQUFrQjFWLENBQUMsS0FBSytWLE9BQXhCLEdBQ0gsSUFBSUQsb0JBQUosQ0FBeUI5VixDQUF6QixDQURHLEdBRUg2ViwyQkFBMkIsQ0FBQzdWLENBQUQsQ0FGL0I7QUFHRCxHQUpEO0FBS0Q7O0FBRURzQixPQUFPLENBQUNBLE9BQU8sQ0FBQzhCLENBQVIsR0FBWTlCLE9BQU8sQ0FBQytCLENBQXBCLEdBQXdCL0IsT0FBTyxDQUFDZ0MsQ0FBUixHQUFZLENBQUMwUyxVQUF0QyxFQUFrRDtBQUFFL0ssU0FBTyxFQUFFeUs7QUFBWCxDQUFsRCxDQUFQOztBQUNBdFosbUJBQU8sQ0FBQyxrRkFBRCxDQUFQLENBQWdDc1osUUFBaEMsRUFBMENILE9BQTFDOztBQUNBblosbUJBQU8sQ0FBQyxzRUFBRCxDQUFQLENBQTBCbVosT0FBMUI7O0FBQ0FRLE9BQU8sR0FBRzNaLG1CQUFPLENBQUMsd0RBQUQsQ0FBUCxDQUFtQm1aLE9BQW5CLENBQVYsQyxDQUVBOztBQUNBalUsT0FBTyxDQUFDQSxPQUFPLENBQUM4RCxDQUFSLEdBQVk5RCxPQUFPLENBQUNnQyxDQUFSLEdBQVksQ0FBQzBTLFVBQTFCLEVBQXNDVCxPQUF0QyxFQUErQztBQUNwRDtBQUNBL0ksUUFBTSxFQUFFLFNBQVNBLE1BQVQsQ0FBZ0JsTSxDQUFoQixFQUFtQjtBQUN6QixRQUFJOFgsVUFBVSxHQUFHM0ksb0JBQW9CLENBQUMsSUFBRCxDQUFyQztBQUNBLFFBQUkvQyxRQUFRLEdBQUcwTCxVQUFVLENBQUM1TCxNQUExQjtBQUNBRSxZQUFRLENBQUNwTSxDQUFELENBQVI7QUFDQSxXQUFPOFgsVUFBVSxDQUFDaE0sT0FBbEI7QUFDRDtBQVBtRCxDQUEvQyxDQUFQO0FBU0E5SyxPQUFPLENBQUNBLE9BQU8sQ0FBQzhELENBQVIsR0FBWTlELE9BQU8sQ0FBQ2dDLENBQVIsSUFBYWtGLE9BQU8sSUFBSSxDQUFDd04sVUFBekIsQ0FBYixFQUFtRFQsT0FBbkQsRUFBNEQ7QUFDakU7QUFDQXBKLFNBQU8sRUFBRSxTQUFTQSxPQUFULENBQWlCdUQsQ0FBakIsRUFBb0I7QUFDM0IsV0FBTzRGLGNBQWMsQ0FBQzlNLE9BQU8sSUFBSSxTQUFTdU4sT0FBcEIsR0FBOEJMLFFBQTlCLEdBQXlDLElBQTFDLEVBQWdEaEcsQ0FBaEQsQ0FBckI7QUFDRDtBQUpnRSxDQUE1RCxDQUFQO0FBTUFwTyxPQUFPLENBQUNBLE9BQU8sQ0FBQzhELENBQVIsR0FBWTlELE9BQU8sQ0FBQ2dDLENBQVIsR0FBWSxFQUFFMFMsVUFBVSxJQUFJNVosbUJBQU8sQ0FBQyxzRUFBRCxDQUFQLENBQTBCLFVBQVUyRyxJQUFWLEVBQWdCO0FBQ3hGMlMsVUFBUSxDQUFDMkMsR0FBVCxDQUFhdFYsSUFBYixFQUFtQixPQUFuQixFQUE0QjRTLEtBQTVCO0FBQ0QsQ0FGK0MsQ0FBaEIsQ0FBekIsRUFFRkosT0FGRSxFQUVPO0FBQ1o7QUFDQThDLEtBQUcsRUFBRSxTQUFTQSxHQUFULENBQWFwWSxRQUFiLEVBQXVCO0FBQzFCLFFBQUlELENBQUMsR0FBRyxJQUFSO0FBQ0EsUUFBSW9ZLFVBQVUsR0FBRzNJLG9CQUFvQixDQUFDelAsQ0FBRCxDQUFyQztBQUNBLFFBQUltTSxPQUFPLEdBQUdpTSxVQUFVLENBQUNqTSxPQUF6QjtBQUNBLFFBQUlLLE1BQU0sR0FBRzRMLFVBQVUsQ0FBQzVMLE1BQXhCO0FBQ0EsUUFBSWhJLE1BQU0sR0FBRzZRLE9BQU8sQ0FBQyxZQUFZO0FBQy9CLFVBQUloTSxNQUFNLEdBQUcsRUFBYjtBQUNBLFVBQUk5TCxLQUFLLEdBQUcsQ0FBWjtBQUNBLFVBQUkrYSxTQUFTLEdBQUcsQ0FBaEI7QUFDQTFaLFdBQUssQ0FBQ3FCLFFBQUQsRUFBVyxLQUFYLEVBQWtCLFVBQVVtTSxPQUFWLEVBQW1CO0FBQ3hDLFlBQUltTSxNQUFNLEdBQUdoYixLQUFLLEVBQWxCO0FBQ0EsWUFBSWliLGFBQWEsR0FBRyxLQUFwQjtBQUNBblAsY0FBTSxDQUFDekUsSUFBUCxDQUFZcEksU0FBWjtBQUNBOGIsaUJBQVM7QUFDVHRZLFNBQUMsQ0FBQ21NLE9BQUYsQ0FBVUMsT0FBVixFQUFtQkMsSUFBbkIsQ0FBd0IsVUFBVTdPLEtBQVYsRUFBaUI7QUFDdkMsY0FBSWdiLGFBQUosRUFBbUI7QUFDbkJBLHVCQUFhLEdBQUcsSUFBaEI7QUFDQW5QLGdCQUFNLENBQUNrUCxNQUFELENBQU4sR0FBaUIvYSxLQUFqQjtBQUNBLFlBQUU4YSxTQUFGLElBQWVuTSxPQUFPLENBQUM5QyxNQUFELENBQXRCO0FBQ0QsU0FMRCxFQUtHbUQsTUFMSDtBQU1ELE9BWEksQ0FBTDtBQVlBLFFBQUU4TCxTQUFGLElBQWVuTSxPQUFPLENBQUM5QyxNQUFELENBQXRCO0FBQ0QsS0FqQm1CLENBQXBCO0FBa0JBLFFBQUk3RSxNQUFNLENBQUMxRyxDQUFYLEVBQWMwTyxNQUFNLENBQUNoSSxNQUFNLENBQUMzRCxDQUFSLENBQU47QUFDZCxXQUFPdVgsVUFBVSxDQUFDaE0sT0FBbEI7QUFDRCxHQTNCVztBQTRCWjtBQUNBcU0sTUFBSSxFQUFFLFNBQVNBLElBQVQsQ0FBY3hZLFFBQWQsRUFBd0I7QUFDNUIsUUFBSUQsQ0FBQyxHQUFHLElBQVI7QUFDQSxRQUFJb1ksVUFBVSxHQUFHM0ksb0JBQW9CLENBQUN6UCxDQUFELENBQXJDO0FBQ0EsUUFBSXdNLE1BQU0sR0FBRzRMLFVBQVUsQ0FBQzVMLE1BQXhCO0FBQ0EsUUFBSWhJLE1BQU0sR0FBRzZRLE9BQU8sQ0FBQyxZQUFZO0FBQy9CelcsV0FBSyxDQUFDcUIsUUFBRCxFQUFXLEtBQVgsRUFBa0IsVUFBVW1NLE9BQVYsRUFBbUI7QUFDeENwTSxTQUFDLENBQUNtTSxPQUFGLENBQVVDLE9BQVYsRUFBbUJDLElBQW5CLENBQXdCK0wsVUFBVSxDQUFDak0sT0FBbkMsRUFBNENLLE1BQTVDO0FBQ0QsT0FGSSxDQUFMO0FBR0QsS0FKbUIsQ0FBcEI7QUFLQSxRQUFJaEksTUFBTSxDQUFDMUcsQ0FBWCxFQUFjME8sTUFBTSxDQUFDaEksTUFBTSxDQUFDM0QsQ0FBUixDQUFOO0FBQ2QsV0FBT3VYLFVBQVUsQ0FBQ2hNLE9BQWxCO0FBQ0Q7QUF4Q1csQ0FGUCxDQUFQLEM7Ozs7Ozs7Ozs7O0FDbFBBO0FBQ0EsSUFBSWhRLG1CQUFPLENBQUMsc0VBQUQsQ0FBUCxJQUE2QixLQUFLc2MsS0FBTCxJQUFjLEdBQS9DLEVBQW9EdGMsbUJBQU8sQ0FBQyxrRUFBRCxDQUFQLENBQXdCbUMsQ0FBeEIsQ0FBMEJnSSxNQUFNLENBQUNoSyxTQUFqQyxFQUE0QyxPQUE1QyxFQUFxRDtBQUN2R3VULGNBQVksRUFBRSxJQUR5RjtBQUV2Ry9PLEtBQUcsRUFBRTNFLG1CQUFPLENBQUMsMERBQUQ7QUFGMkYsQ0FBckQsRTs7Ozs7Ozs7Ozs7QUNEcEQ7QUFDQUEsbUJBQU8sQ0FBQyxvRUFBRCxDQUFQLENBQXlCLE9BQXpCLEVBQWtDLENBQWxDLEVBQXFDLFVBQVU0SixPQUFWLEVBQW1CMlMsS0FBbkIsRUFBMEJDLE1BQTFCLEVBQWtDO0FBQ3JFOztBQUNBLE1BQUl4USxRQUFRLEdBQUdoTSxtQkFBTyxDQUFDLGtFQUFELENBQXRCOztBQUNBLE1BQUl5YyxNQUFNLEdBQUdELE1BQWI7QUFDQSxNQUFJRSxLQUFLLEdBQUcsR0FBR2xVLElBQWY7QUFDQSxNQUFJbVUsTUFBTSxHQUFHLE9BQWI7QUFDQSxNQUFJQyxNQUFNLEdBQUcsUUFBYjtBQUNBLE1BQUlDLFVBQVUsR0FBRyxXQUFqQjs7QUFDQSxNQUNFLE9BQU9GLE1BQVAsRUFBZSxNQUFmLEVBQXVCLENBQXZCLEtBQTZCLEdBQTdCLElBQ0EsT0FBT0EsTUFBUCxFQUFlLE1BQWYsRUFBdUIsQ0FBQyxDQUF4QixFQUEyQkMsTUFBM0IsS0FBc0MsQ0FEdEMsSUFFQSxLQUFLRCxNQUFMLEVBQWEsU0FBYixFQUF3QkMsTUFBeEIsS0FBbUMsQ0FGbkMsSUFHQSxJQUFJRCxNQUFKLEVBQVksVUFBWixFQUF3QkMsTUFBeEIsS0FBbUMsQ0FIbkMsSUFJQSxJQUFJRCxNQUFKLEVBQVksTUFBWixFQUFvQkMsTUFBcEIsSUFBOEIsQ0FKOUIsSUFLQSxHQUFHRCxNQUFILEVBQVcsSUFBWCxFQUFpQkMsTUFBakIsQ0FORixFQU9FO0FBQ0EsUUFBSUUsSUFBSSxHQUFHLE9BQU9uVCxJQUFQLENBQVksRUFBWixFQUFnQixDQUFoQixNQUF1QnZKLFNBQWxDLENBREEsQ0FDNkM7QUFDN0M7O0FBQ0FvYyxVQUFNLEdBQUcsVUFBVU8sU0FBVixFQUFxQkMsS0FBckIsRUFBNEI7QUFDbkMsVUFBSTVTLE1BQU0sR0FBR0YsTUFBTSxDQUFDLElBQUQsQ0FBbkI7QUFDQSxVQUFJNlMsU0FBUyxLQUFLM2MsU0FBZCxJQUEyQjRjLEtBQUssS0FBSyxDQUF6QyxFQUE0QyxPQUFPLEVBQVAsQ0FGVCxDQUduQzs7QUFDQSxVQUFJLENBQUNoUixRQUFRLENBQUMrUSxTQUFELENBQWIsRUFBMEIsT0FBT04sTUFBTSxDQUFDemEsSUFBUCxDQUFZb0ksTUFBWixFQUFvQjJTLFNBQXBCLEVBQStCQyxLQUEvQixDQUFQO0FBQzFCLFVBQUlDLE1BQU0sR0FBRyxFQUFiO0FBQ0EsVUFBSVgsS0FBSyxHQUFHLENBQUNTLFNBQVMsQ0FBQ3hTLFVBQVYsR0FBdUIsR0FBdkIsR0FBNkIsRUFBOUIsS0FDQ3dTLFNBQVMsQ0FBQ3ZTLFNBQVYsR0FBc0IsR0FBdEIsR0FBNEIsRUFEN0IsS0FFQ3VTLFNBQVMsQ0FBQ3RTLE9BQVYsR0FBb0IsR0FBcEIsR0FBMEIsRUFGM0IsS0FHQ3NTLFNBQVMsQ0FBQ3JTLE1BQVYsR0FBbUIsR0FBbkIsR0FBeUIsRUFIMUIsQ0FBWjtBQUlBLFVBQUl3UyxhQUFhLEdBQUcsQ0FBcEI7QUFDQSxVQUFJQyxVQUFVLEdBQUdILEtBQUssS0FBSzVjLFNBQVYsR0FBc0IsVUFBdEIsR0FBbUM0YyxLQUFLLEtBQUssQ0FBOUQsQ0FYbUMsQ0FZbkM7O0FBQ0EsVUFBSUksYUFBYSxHQUFHLElBQUlqVCxNQUFKLENBQVc0UyxTQUFTLENBQUNuVSxNQUFyQixFQUE2QjBULEtBQUssR0FBRyxHQUFyQyxDQUFwQjtBQUNBLFVBQUllLFVBQUosRUFBZ0IzRSxLQUFoQixFQUF1QjRFLFNBQXZCLEVBQWtDQyxVQUFsQyxFQUE4Q25aLENBQTlDLENBZG1DLENBZW5DOztBQUNBLFVBQUksQ0FBQzBZLElBQUwsRUFBV08sVUFBVSxHQUFHLElBQUlsVCxNQUFKLENBQVcsTUFBTWlULGFBQWEsQ0FBQ3hVLE1BQXBCLEdBQTZCLFVBQXhDLEVBQW9EMFQsS0FBcEQsQ0FBYjs7QUFDWCxhQUFPNUQsS0FBSyxHQUFHMEUsYUFBYSxDQUFDelQsSUFBZCxDQUFtQlMsTUFBbkIsQ0FBZixFQUEyQztBQUN6QztBQUNBa1QsaUJBQVMsR0FBRzVFLEtBQUssQ0FBQ3ZYLEtBQU4sR0FBY3VYLEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBU2tFLE1BQVQsQ0FBMUI7O0FBQ0EsWUFBSVUsU0FBUyxHQUFHSixhQUFoQixFQUErQjtBQUM3QkQsZ0JBQU0sQ0FBQ3pVLElBQVAsQ0FBWTRCLE1BQU0sQ0FBQ25JLEtBQVAsQ0FBYWliLGFBQWIsRUFBNEJ4RSxLQUFLLENBQUN2WCxLQUFsQyxDQUFaLEVBRDZCLENBRTdCO0FBQ0E7O0FBQ0EsY0FBSSxDQUFDMmIsSUFBRCxJQUFTcEUsS0FBSyxDQUFDa0UsTUFBRCxDQUFMLEdBQWdCLENBQTdCLEVBQWdDbEUsS0FBSyxDQUFDLENBQUQsQ0FBTCxDQUFTOEUsT0FBVCxDQUFpQkgsVUFBakIsRUFBNkIsWUFBWTtBQUN2RSxpQkFBS2paLENBQUMsR0FBRyxDQUFULEVBQVlBLENBQUMsR0FBRzVDLFNBQVMsQ0FBQ29iLE1BQUQsQ0FBVCxHQUFvQixDQUFwQyxFQUF1Q3hZLENBQUMsRUFBeEMsRUFBNEMsSUFBSTVDLFNBQVMsQ0FBQzRDLENBQUQsQ0FBVCxLQUFpQmhFLFNBQXJCLEVBQWdDc1ksS0FBSyxDQUFDdFUsQ0FBRCxDQUFMLEdBQVdoRSxTQUFYO0FBQzdFLFdBRitCO0FBR2hDLGNBQUlzWSxLQUFLLENBQUNrRSxNQUFELENBQUwsR0FBZ0IsQ0FBaEIsSUFBcUJsRSxLQUFLLENBQUN2WCxLQUFOLEdBQWNpSixNQUFNLENBQUN3UyxNQUFELENBQTdDLEVBQXVERixLQUFLLENBQUMvVSxLQUFOLENBQVlzVixNQUFaLEVBQW9CdkUsS0FBSyxDQUFDelcsS0FBTixDQUFZLENBQVosQ0FBcEI7QUFDdkRzYixvQkFBVSxHQUFHN0UsS0FBSyxDQUFDLENBQUQsQ0FBTCxDQUFTa0UsTUFBVCxDQUFiO0FBQ0FNLHVCQUFhLEdBQUdJLFNBQWhCO0FBQ0EsY0FBSUwsTUFBTSxDQUFDTCxNQUFELENBQU4sSUFBa0JPLFVBQXRCLEVBQWtDO0FBQ25DOztBQUNELFlBQUlDLGFBQWEsQ0FBQ1AsVUFBRCxDQUFiLEtBQThCbkUsS0FBSyxDQUFDdlgsS0FBeEMsRUFBK0NpYyxhQUFhLENBQUNQLFVBQUQsQ0FBYixHQWZOLENBZW1DO0FBQzdFOztBQUNELFVBQUlLLGFBQWEsS0FBSzlTLE1BQU0sQ0FBQ3dTLE1BQUQsQ0FBNUIsRUFBc0M7QUFDcEMsWUFBSVcsVUFBVSxJQUFJLENBQUNILGFBQWEsQ0FBQ2hKLElBQWQsQ0FBbUIsRUFBbkIsQ0FBbkIsRUFBMkM2SSxNQUFNLENBQUN6VSxJQUFQLENBQVksRUFBWjtBQUM1QyxPQUZELE1BRU95VSxNQUFNLENBQUN6VSxJQUFQLENBQVk0QixNQUFNLENBQUNuSSxLQUFQLENBQWFpYixhQUFiLENBQVo7O0FBQ1AsYUFBT0QsTUFBTSxDQUFDTCxNQUFELENBQU4sR0FBaUJPLFVBQWpCLEdBQThCRixNQUFNLENBQUNoYixLQUFQLENBQWEsQ0FBYixFQUFnQmtiLFVBQWhCLENBQTlCLEdBQTRERixNQUFuRTtBQUNELEtBdENELENBSEEsQ0EwQ0Y7O0FBQ0MsR0FsREQsTUFrRE8sSUFBSSxJQUFJTixNQUFKLEVBQVl2YyxTQUFaLEVBQXVCLENBQXZCLEVBQTBCd2MsTUFBMUIsQ0FBSixFQUF1QztBQUM1Q0osVUFBTSxHQUFHLFVBQVVPLFNBQVYsRUFBcUJDLEtBQXJCLEVBQTRCO0FBQ25DLGFBQU9ELFNBQVMsS0FBSzNjLFNBQWQsSUFBMkI0YyxLQUFLLEtBQUssQ0FBckMsR0FBeUMsRUFBekMsR0FBOENQLE1BQU0sQ0FBQ3phLElBQVAsQ0FBWSxJQUFaLEVBQWtCK2EsU0FBbEIsRUFBNkJDLEtBQTdCLENBQXJEO0FBQ0QsS0FGRDtBQUdELEdBOURvRSxDQStEckU7OztBQUNBLFNBQU8sQ0FBQyxTQUFTaFYsS0FBVCxDQUFlK1UsU0FBZixFQUEwQkMsS0FBMUIsRUFBaUM7QUFDdkMsUUFBSS9iLENBQUMsR0FBRzJJLE9BQU8sQ0FBQyxJQUFELENBQWY7QUFDQSxRQUFJNUQsRUFBRSxHQUFHK1csU0FBUyxJQUFJM2MsU0FBYixHQUF5QkEsU0FBekIsR0FBcUMyYyxTQUFTLENBQUNSLEtBQUQsQ0FBdkQ7QUFDQSxXQUFPdlcsRUFBRSxLQUFLNUYsU0FBUCxHQUFtQjRGLEVBQUUsQ0FBQ2hFLElBQUgsQ0FBUSthLFNBQVIsRUFBbUI5YixDQUFuQixFQUFzQitiLEtBQXRCLENBQW5CLEdBQWtEUixNQUFNLENBQUN4YSxJQUFQLENBQVlrSSxNQUFNLENBQUNqSixDQUFELENBQWxCLEVBQXVCOGIsU0FBdkIsRUFBa0NDLEtBQWxDLENBQXpEO0FBQ0QsR0FKTSxFQUlKUixNQUpJLENBQVA7QUFLRCxDQXJFRCxFOzs7Ozs7Ozs7Ozs7QUNEYTs7QUFDYnhjLG1CQUFPLENBQUMsOEVBQUQsQ0FBUDs7QUFDQSxJQUFJc0ssUUFBUSxHQUFHdEssbUJBQU8sQ0FBQyxrRUFBRCxDQUF0Qjs7QUFDQSxJQUFJeWQsTUFBTSxHQUFHemQsbUJBQU8sQ0FBQywwREFBRCxDQUFwQjs7QUFDQSxJQUFJNEMsV0FBVyxHQUFHNUMsbUJBQU8sQ0FBQyxzRUFBRCxDQUF6Qjs7QUFDQSxJQUFJNlQsU0FBUyxHQUFHLFVBQWhCO0FBQ0EsSUFBSUMsU0FBUyxHQUFHLElBQUlELFNBQUosQ0FBaEI7O0FBRUEsSUFBSTZKLE1BQU0sR0FBRyxVQUFVMVgsRUFBVixFQUFjO0FBQ3pCaEcscUJBQU8sQ0FBQyxnRUFBRCxDQUFQLENBQXVCbUssTUFBTSxDQUFDaEssU0FBOUIsRUFBeUMwVCxTQUF6QyxFQUFvRDdOLEVBQXBELEVBQXdELElBQXhEO0FBQ0QsQ0FGRCxDLENBSUE7OztBQUNBLElBQUloRyxtQkFBTyxDQUFDLDBEQUFELENBQVAsQ0FBb0IsWUFBWTtBQUFFLFNBQU84VCxTQUFTLENBQUM5UixJQUFWLENBQWU7QUFBRTRHLFVBQU0sRUFBRSxHQUFWO0FBQWUwVCxTQUFLLEVBQUU7QUFBdEIsR0FBZixLQUErQyxNQUF0RDtBQUErRCxDQUFqRyxDQUFKLEVBQXdHO0FBQ3RHb0IsUUFBTSxDQUFDLFNBQVMzYixRQUFULEdBQW9CO0FBQ3pCLFFBQUkySCxDQUFDLEdBQUdZLFFBQVEsQ0FBQyxJQUFELENBQWhCO0FBQ0EsV0FBTyxJQUFJMEcsTUFBSixDQUFXdEgsQ0FBQyxDQUFDZCxNQUFiLEVBQXFCLEdBQXJCLEVBQ0wsV0FBV2MsQ0FBWCxHQUFlQSxDQUFDLENBQUM0UyxLQUFqQixHQUF5QixDQUFDMVosV0FBRCxJQUFnQjhHLENBQUMsWUFBWVMsTUFBN0IsR0FBc0NzVCxNQUFNLENBQUN6YixJQUFQLENBQVkwSCxDQUFaLENBQXRDLEdBQXVEdEosU0FEM0UsQ0FBUDtBQUVELEdBSkssQ0FBTixDQURzRyxDQU14RztBQUNDLENBUEQsTUFPTyxJQUFJMFQsU0FBUyxDQUFDdlQsSUFBVixJQUFrQnNULFNBQXRCLEVBQWlDO0FBQ3RDNkosUUFBTSxDQUFDLFNBQVMzYixRQUFULEdBQW9CO0FBQ3pCLFdBQU8rUixTQUFTLENBQUM5UixJQUFWLENBQWUsSUFBZixDQUFQO0FBQ0QsR0FGSyxDQUFOO0FBR0QsQzs7Ozs7Ozs7Ozs7O0FDeEJZOztBQUNiLElBQUkyYixHQUFHLEdBQUczZCxtQkFBTyxDQUFDLGtFQUFELENBQVAsQ0FBd0IsSUFBeEIsQ0FBVixDLENBRUE7OztBQUNBQSxtQkFBTyxDQUFDLHNFQUFELENBQVAsQ0FBMEJrSyxNQUExQixFQUFrQyxRQUFsQyxFQUE0QyxVQUFVcEYsUUFBVixFQUFvQjtBQUM5RCxPQUFLaEIsRUFBTCxHQUFVb0csTUFBTSxDQUFDcEYsUUFBRCxDQUFoQixDQUQ4RCxDQUNsQzs7QUFDNUIsT0FBSzNCLEVBQUwsR0FBVSxDQUFWLENBRjhELENBRWxDO0FBQzlCO0FBQ0MsQ0FKRCxFQUlHLFlBQVk7QUFDYixNQUFJbEMsQ0FBQyxHQUFHLEtBQUs2QyxFQUFiO0FBQ0EsTUFBSTNDLEtBQUssR0FBRyxLQUFLZ0MsRUFBakI7QUFDQSxNQUFJeWEsS0FBSjtBQUNBLE1BQUl6YyxLQUFLLElBQUlGLENBQUMsQ0FBQ0MsTUFBZixFQUF1QixPQUFPO0FBQUVFLFNBQUssRUFBRWhCLFNBQVQ7QUFBb0I4SyxRQUFJLEVBQUU7QUFBMUIsR0FBUDtBQUN2QjBTLE9BQUssR0FBR0QsR0FBRyxDQUFDMWMsQ0FBRCxFQUFJRSxLQUFKLENBQVg7QUFDQSxPQUFLZ0MsRUFBTCxJQUFXeWEsS0FBSyxDQUFDMWMsTUFBakI7QUFDQSxTQUFPO0FBQUVFLFNBQUssRUFBRXdjLEtBQVQ7QUFBZ0IxUyxRQUFJLEVBQUU7QUFBdEIsR0FBUDtBQUNELENBWkQsRTs7Ozs7Ozs7Ozs7O0NDSEE7O0FBQ0EsSUFBSWpHLE1BQU0sR0FBR2pGLG1CQUFPLENBQUMsNERBQUQsQ0FBcEI7O0FBQ0EsSUFBSTBFLEdBQUcsR0FBRzFFLG1CQUFPLENBQUMsc0RBQUQsQ0FBakI7O0FBQ0EsSUFBSTRDLFdBQVcsR0FBRzVDLG1CQUFPLENBQUMsc0VBQUQsQ0FBekI7O0FBQ0EsSUFBSWtGLE9BQU8sR0FBR2xGLG1CQUFPLENBQUMsNERBQUQsQ0FBckI7O0FBQ0EsSUFBSW1GLFFBQVEsR0FBR25GLG1CQUFPLENBQUMsZ0VBQUQsQ0FBdEI7O0FBQ0EsSUFBSThOLElBQUksR0FBRzlOLG1CQUFPLENBQUMsd0RBQUQsQ0FBUCxDQUFtQitGLEdBQTlCOztBQUNBLElBQUk4WCxNQUFNLEdBQUc3ZCxtQkFBTyxDQUFDLDBEQUFELENBQXBCOztBQUNBLElBQUkwVSxNQUFNLEdBQUcxVSxtQkFBTyxDQUFDLDREQUFELENBQXBCOztBQUNBLElBQUl1RixjQUFjLEdBQUd2RixtQkFBTyxDQUFDLGtGQUFELENBQTVCOztBQUNBLElBQUkyVSxHQUFHLEdBQUczVSxtQkFBTyxDQUFDLHNEQUFELENBQWpCOztBQUNBLElBQUk2SixHQUFHLEdBQUc3SixtQkFBTyxDQUFDLHNEQUFELENBQWpCOztBQUNBLElBQUk0WCxNQUFNLEdBQUc1WCxtQkFBTyxDQUFDLDhEQUFELENBQXBCOztBQUNBLElBQUk4ZCxTQUFTLEdBQUc5ZCxtQkFBTyxDQUFDLG9FQUFELENBQXZCOztBQUNBLElBQUkrZCxRQUFRLEdBQUcvZCxtQkFBTyxDQUFDLGtFQUFELENBQXRCOztBQUNBLElBQUk4TCxPQUFPLEdBQUc5TCxtQkFBTyxDQUFDLGdFQUFELENBQXJCOztBQUNBLElBQUlzSyxRQUFRLEdBQUd0SyxtQkFBTyxDQUFDLGtFQUFELENBQXRCOztBQUNBLElBQUlTLFFBQVEsR0FBR1QsbUJBQU8sQ0FBQyxrRUFBRCxDQUF0Qjs7QUFDQSxJQUFJVSxTQUFTLEdBQUdWLG1CQUFPLENBQUMsb0VBQUQsQ0FBdkI7O0FBQ0EsSUFBSXFTLFdBQVcsR0FBR3JTLG1CQUFPLENBQUMsd0VBQUQsQ0FBekI7O0FBQ0EsSUFBSXVILFVBQVUsR0FBR3ZILG1CQUFPLENBQUMsMEVBQUQsQ0FBeEI7O0FBQ0EsSUFBSWdlLE9BQU8sR0FBR2hlLG1CQUFPLENBQUMsMEVBQUQsQ0FBckI7O0FBQ0EsSUFBSWllLE9BQU8sR0FBR2plLG1CQUFPLENBQUMsOEVBQUQsQ0FBckI7O0FBQ0EsSUFBSWtlLEtBQUssR0FBR2xlLG1CQUFPLENBQUMsc0VBQUQsQ0FBbkI7O0FBQ0EsSUFBSW1lLEdBQUcsR0FBR25lLG1CQUFPLENBQUMsa0VBQUQsQ0FBakI7O0FBQ0EsSUFBSThTLEtBQUssR0FBRzlTLG1CQUFPLENBQUMsc0VBQUQsQ0FBbkI7O0FBQ0EsSUFBSXdTLElBQUksR0FBRzBMLEtBQUssQ0FBQy9iLENBQWpCO0FBQ0EsSUFBSUQsRUFBRSxHQUFHaWMsR0FBRyxDQUFDaGMsQ0FBYjtBQUNBLElBQUl1USxJQUFJLEdBQUd1TCxPQUFPLENBQUM5YixDQUFuQjtBQUNBLElBQUkwVixPQUFPLEdBQUc1UyxNQUFNLENBQUMyTCxNQUFyQjtBQUNBLElBQUl3TixLQUFLLEdBQUduWixNQUFNLENBQUNvWixJQUFuQjs7QUFDQSxJQUFJQyxVQUFVLEdBQUdGLEtBQUssSUFBSUEsS0FBSyxDQUFDRyxTQUFoQzs7QUFDQSxJQUFJN1YsU0FBUyxHQUFHLFdBQWhCO0FBQ0EsSUFBSThWLE1BQU0sR0FBRzNVLEdBQUcsQ0FBQyxTQUFELENBQWhCO0FBQ0EsSUFBSTRVLFlBQVksR0FBRzVVLEdBQUcsQ0FBQyxhQUFELENBQXRCO0FBQ0EsSUFBSXRCLE1BQU0sR0FBRyxHQUFHcUQsb0JBQWhCO0FBQ0EsSUFBSThTLGNBQWMsR0FBR2hLLE1BQU0sQ0FBQyxpQkFBRCxDQUEzQjtBQUNBLElBQUlpSyxVQUFVLEdBQUdqSyxNQUFNLENBQUMsU0FBRCxDQUF2QjtBQUNBLElBQUlrSyxTQUFTLEdBQUdsSyxNQUFNLENBQUMsWUFBRCxDQUF0QjtBQUNBLElBQUl6QixXQUFXLEdBQUdwUixNQUFNLENBQUM2RyxTQUFELENBQXhCO0FBQ0EsSUFBSWtSLFVBQVUsR0FBRyxPQUFPL0IsT0FBUCxJQUFrQixVQUFuQztBQUNBLElBQUlnSCxPQUFPLEdBQUc1WixNQUFNLENBQUM0WixPQUFyQixDLENBQ0E7O0FBQ0EsSUFBSUMsTUFBTSxHQUFHLENBQUNELE9BQUQsSUFBWSxDQUFDQSxPQUFPLENBQUNuVyxTQUFELENBQXBCLElBQW1DLENBQUNtVyxPQUFPLENBQUNuVyxTQUFELENBQVAsQ0FBbUJxVyxTQUFwRSxDLENBRUE7O0FBQ0EsSUFBSUMsYUFBYSxHQUFHcGMsV0FBVyxJQUFJaWIsTUFBTSxDQUFDLFlBQVk7QUFDcEQsU0FBT0csT0FBTyxDQUFDOWIsRUFBRSxDQUFDLEVBQUQsRUFBSyxHQUFMLEVBQVU7QUFDekJ5QyxPQUFHLEVBQUUsWUFBWTtBQUFFLGFBQU96QyxFQUFFLENBQUMsSUFBRCxFQUFPLEdBQVAsRUFBWTtBQUFFZCxhQUFLLEVBQUU7QUFBVCxPQUFaLENBQUYsQ0FBNEI2RSxDQUFuQztBQUF1QztBQURqQyxHQUFWLENBQUgsQ0FBUCxDQUVIQSxDQUZHLElBRUUsQ0FGVDtBQUdELENBSndDLENBQXJCLEdBSWYsVUFBVXBHLEVBQVYsRUFBY1EsR0FBZCxFQUFtQjJVLENBQW5CLEVBQXNCO0FBQ3pCLE1BQUlpSyxTQUFTLEdBQUd6TSxJQUFJLENBQUNTLFdBQUQsRUFBYzVTLEdBQWQsQ0FBcEI7QUFDQSxNQUFJNGUsU0FBSixFQUFlLE9BQU9oTSxXQUFXLENBQUM1UyxHQUFELENBQWxCO0FBQ2Y2QixJQUFFLENBQUNyQyxFQUFELEVBQUtRLEdBQUwsRUFBVTJVLENBQVYsQ0FBRjtBQUNBLE1BQUlpSyxTQUFTLElBQUlwZixFQUFFLEtBQUtvVCxXQUF4QixFQUFxQy9RLEVBQUUsQ0FBQytRLFdBQUQsRUFBYzVTLEdBQWQsRUFBbUI0ZSxTQUFuQixDQUFGO0FBQ3RDLENBVG1CLEdBU2hCL2MsRUFUSjs7QUFXQSxJQUFJZ2QsSUFBSSxHQUFHLFVBQVUxSyxHQUFWLEVBQWU7QUFDeEIsTUFBSTJLLEdBQUcsR0FBR1IsVUFBVSxDQUFDbkssR0FBRCxDQUFWLEdBQWtCd0osT0FBTyxDQUFDbkcsT0FBTyxDQUFDblAsU0FBRCxDQUFSLENBQW5DOztBQUNBeVcsS0FBRyxDQUFDbmEsRUFBSixHQUFTd1AsR0FBVDtBQUNBLFNBQU8ySyxHQUFQO0FBQ0QsQ0FKRDs7QUFNQSxJQUFJQyxRQUFRLEdBQUd4RixVQUFVLElBQUksT0FBTy9CLE9BQU8sQ0FBQzVNLFFBQWYsSUFBMkIsUUFBekMsR0FBb0QsVUFBVXBMLEVBQVYsRUFBYztBQUMvRSxTQUFPLE9BQU9BLEVBQVAsSUFBYSxRQUFwQjtBQUNELENBRmMsR0FFWCxVQUFVQSxFQUFWLEVBQWM7QUFDaEIsU0FBT0EsRUFBRSxZQUFZZ1ksT0FBckI7QUFDRCxDQUpEOztBQU1BLElBQUl2USxlQUFlLEdBQUcsU0FBU00sY0FBVCxDQUF3Qi9ILEVBQXhCLEVBQTRCUSxHQUE1QixFQUFpQzJVLENBQWpDLEVBQW9DO0FBQ3hELE1BQUluVixFQUFFLEtBQUtvVCxXQUFYLEVBQXdCM0wsZUFBZSxDQUFDc1gsU0FBRCxFQUFZdmUsR0FBWixFQUFpQjJVLENBQWpCLENBQWY7QUFDeEIxSyxVQUFRLENBQUN6SyxFQUFELENBQVI7QUFDQVEsS0FBRyxHQUFHZ1MsV0FBVyxDQUFDaFMsR0FBRCxFQUFNLElBQU4sQ0FBakI7QUFDQWlLLFVBQVEsQ0FBQzBLLENBQUQsQ0FBUjs7QUFDQSxNQUFJdFEsR0FBRyxDQUFDaWEsVUFBRCxFQUFhdGUsR0FBYixDQUFQLEVBQTBCO0FBQ3hCLFFBQUksQ0FBQzJVLENBQUMsQ0FBQ3ZCLFVBQVAsRUFBbUI7QUFDakIsVUFBSSxDQUFDL08sR0FBRyxDQUFDN0UsRUFBRCxFQUFLMmUsTUFBTCxDQUFSLEVBQXNCdGMsRUFBRSxDQUFDckMsRUFBRCxFQUFLMmUsTUFBTCxFQUFhalgsVUFBVSxDQUFDLENBQUQsRUFBSSxFQUFKLENBQXZCLENBQUY7QUFDdEIxSCxRQUFFLENBQUMyZSxNQUFELENBQUYsQ0FBV25lLEdBQVgsSUFBa0IsSUFBbEI7QUFDRCxLQUhELE1BR087QUFDTCxVQUFJcUUsR0FBRyxDQUFDN0UsRUFBRCxFQUFLMmUsTUFBTCxDQUFILElBQW1CM2UsRUFBRSxDQUFDMmUsTUFBRCxDQUFGLENBQVduZSxHQUFYLENBQXZCLEVBQXdDUixFQUFFLENBQUMyZSxNQUFELENBQUYsQ0FBV25lLEdBQVgsSUFBa0IsS0FBbEI7QUFDeEMyVSxPQUFDLEdBQUdnSixPQUFPLENBQUNoSixDQUFELEVBQUk7QUFBRXZCLGtCQUFVLEVBQUVsTSxVQUFVLENBQUMsQ0FBRCxFQUFJLEtBQUo7QUFBeEIsT0FBSixDQUFYO0FBQ0Q7O0FBQUMsV0FBT3lYLGFBQWEsQ0FBQ25mLEVBQUQsRUFBS1EsR0FBTCxFQUFVMlUsQ0FBVixDQUFwQjtBQUNIOztBQUFDLFNBQU85UyxFQUFFLENBQUNyQyxFQUFELEVBQUtRLEdBQUwsRUFBVTJVLENBQVYsQ0FBVDtBQUNILENBZEQ7O0FBZUEsSUFBSXFLLGlCQUFpQixHQUFHLFNBQVM5TSxnQkFBVCxDQUEwQjFTLEVBQTFCLEVBQThCcUosQ0FBOUIsRUFBaUM7QUFDdkRvQixVQUFRLENBQUN6SyxFQUFELENBQVI7QUFDQSxNQUFJMk0sSUFBSSxHQUFHdVIsUUFBUSxDQUFDN1UsQ0FBQyxHQUFHeEksU0FBUyxDQUFDd0ksQ0FBRCxDQUFkLENBQW5CO0FBQ0EsTUFBSTlFLENBQUMsR0FBRyxDQUFSO0FBQ0EsTUFBSWdSLENBQUMsR0FBRzVJLElBQUksQ0FBQ3RMLE1BQWI7QUFDQSxNQUFJYixHQUFKOztBQUNBLFNBQU8rVSxDQUFDLEdBQUdoUixDQUFYLEVBQWNrRCxlQUFlLENBQUN6SCxFQUFELEVBQUtRLEdBQUcsR0FBR21NLElBQUksQ0FBQ3BJLENBQUMsRUFBRixDQUFmLEVBQXNCOEUsQ0FBQyxDQUFDN0ksR0FBRCxDQUF2QixDQUFmOztBQUNkLFNBQU9SLEVBQVA7QUFDRCxDQVJEOztBQVNBLElBQUl5ZixPQUFPLEdBQUcsU0FBU2xkLE1BQVQsQ0FBZ0J2QyxFQUFoQixFQUFvQnFKLENBQXBCLEVBQXVCO0FBQ25DLFNBQU9BLENBQUMsS0FBSzlJLFNBQU4sR0FBa0I0ZCxPQUFPLENBQUNuZSxFQUFELENBQXpCLEdBQWdDd2YsaUJBQWlCLENBQUNyQixPQUFPLENBQUNuZSxFQUFELENBQVIsRUFBY3FKLENBQWQsQ0FBeEQ7QUFDRCxDQUZEOztBQUdBLElBQUlxVyxxQkFBcUIsR0FBRyxTQUFTM1Qsb0JBQVQsQ0FBOEJ2TCxHQUE5QixFQUFtQztBQUM3RCxNQUFJbWYsQ0FBQyxHQUFHalgsTUFBTSxDQUFDdkcsSUFBUCxDQUFZLElBQVosRUFBa0IzQixHQUFHLEdBQUdnUyxXQUFXLENBQUNoUyxHQUFELEVBQU0sSUFBTixDQUFuQyxDQUFSO0FBQ0EsTUFBSSxTQUFTNFMsV0FBVCxJQUF3QnZPLEdBQUcsQ0FBQ2lhLFVBQUQsRUFBYXRlLEdBQWIsQ0FBM0IsSUFBZ0QsQ0FBQ3FFLEdBQUcsQ0FBQ2thLFNBQUQsRUFBWXZlLEdBQVosQ0FBeEQsRUFBMEUsT0FBTyxLQUFQO0FBQzFFLFNBQU9tZixDQUFDLElBQUksQ0FBQzlhLEdBQUcsQ0FBQyxJQUFELEVBQU9yRSxHQUFQLENBQVQsSUFBd0IsQ0FBQ3FFLEdBQUcsQ0FBQ2lhLFVBQUQsRUFBYXRlLEdBQWIsQ0FBNUIsSUFBaURxRSxHQUFHLENBQUMsSUFBRCxFQUFPOFosTUFBUCxDQUFILElBQXFCLEtBQUtBLE1BQUwsRUFBYW5lLEdBQWIsQ0FBdEUsR0FBMEZtZixDQUExRixHQUE4RixJQUFyRztBQUNELENBSkQ7O0FBS0EsSUFBSUMseUJBQXlCLEdBQUcsU0FBU2hOLHdCQUFULENBQWtDNVMsRUFBbEMsRUFBc0NRLEdBQXRDLEVBQTJDO0FBQ3pFUixJQUFFLEdBQUdhLFNBQVMsQ0FBQ2IsRUFBRCxDQUFkO0FBQ0FRLEtBQUcsR0FBR2dTLFdBQVcsQ0FBQ2hTLEdBQUQsRUFBTSxJQUFOLENBQWpCO0FBQ0EsTUFBSVIsRUFBRSxLQUFLb1QsV0FBUCxJQUFzQnZPLEdBQUcsQ0FBQ2lhLFVBQUQsRUFBYXRlLEdBQWIsQ0FBekIsSUFBOEMsQ0FBQ3FFLEdBQUcsQ0FBQ2thLFNBQUQsRUFBWXZlLEdBQVosQ0FBdEQsRUFBd0U7QUFDeEUsTUFBSTJVLENBQUMsR0FBR3hDLElBQUksQ0FBQzNTLEVBQUQsRUFBS1EsR0FBTCxDQUFaO0FBQ0EsTUFBSTJVLENBQUMsSUFBSXRRLEdBQUcsQ0FBQ2lhLFVBQUQsRUFBYXRlLEdBQWIsQ0FBUixJQUE2QixFQUFFcUUsR0FBRyxDQUFDN0UsRUFBRCxFQUFLMmUsTUFBTCxDQUFILElBQW1CM2UsRUFBRSxDQUFDMmUsTUFBRCxDQUFGLENBQVduZSxHQUFYLENBQXJCLENBQWpDLEVBQXdFMlUsQ0FBQyxDQUFDdkIsVUFBRixHQUFlLElBQWY7QUFDeEUsU0FBT3VCLENBQVA7QUFDRCxDQVBEOztBQVFBLElBQUkwSyxvQkFBb0IsR0FBRyxTQUFTOU0sbUJBQVQsQ0FBNkIvUyxFQUE3QixFQUFpQztBQUMxRCxNQUFJc1QsS0FBSyxHQUFHVCxJQUFJLENBQUNoUyxTQUFTLENBQUNiLEVBQUQsQ0FBVixDQUFoQjtBQUNBLE1BQUl1SSxNQUFNLEdBQUcsRUFBYjtBQUNBLE1BQUloRSxDQUFDLEdBQUcsQ0FBUjtBQUNBLE1BQUkvRCxHQUFKOztBQUNBLFNBQU84UyxLQUFLLENBQUNqUyxNQUFOLEdBQWVrRCxDQUF0QixFQUF5QjtBQUN2QixRQUFJLENBQUNNLEdBQUcsQ0FBQ2lhLFVBQUQsRUFBYXRlLEdBQUcsR0FBRzhTLEtBQUssQ0FBQy9PLENBQUMsRUFBRixDQUF4QixDQUFKLElBQXNDL0QsR0FBRyxJQUFJbWUsTUFBN0MsSUFBdURuZSxHQUFHLElBQUl5TixJQUFsRSxFQUF3RTFGLE1BQU0sQ0FBQ0ksSUFBUCxDQUFZbkksR0FBWjtBQUN6RTs7QUFBQyxTQUFPK0gsTUFBUDtBQUNILENBUkQ7O0FBU0EsSUFBSXVYLHNCQUFzQixHQUFHLFNBQVMzTSxxQkFBVCxDQUErQm5ULEVBQS9CLEVBQW1DO0FBQzlELE1BQUkrZixLQUFLLEdBQUcvZixFQUFFLEtBQUtvVCxXQUFuQjtBQUNBLE1BQUlFLEtBQUssR0FBR1QsSUFBSSxDQUFDa04sS0FBSyxHQUFHaEIsU0FBSCxHQUFlbGUsU0FBUyxDQUFDYixFQUFELENBQTlCLENBQWhCO0FBQ0EsTUFBSXVJLE1BQU0sR0FBRyxFQUFiO0FBQ0EsTUFBSWhFLENBQUMsR0FBRyxDQUFSO0FBQ0EsTUFBSS9ELEdBQUo7O0FBQ0EsU0FBTzhTLEtBQUssQ0FBQ2pTLE1BQU4sR0FBZWtELENBQXRCLEVBQXlCO0FBQ3ZCLFFBQUlNLEdBQUcsQ0FBQ2lhLFVBQUQsRUFBYXRlLEdBQUcsR0FBRzhTLEtBQUssQ0FBQy9PLENBQUMsRUFBRixDQUF4QixDQUFILEtBQXNDd2IsS0FBSyxHQUFHbGIsR0FBRyxDQUFDdU8sV0FBRCxFQUFjNVMsR0FBZCxDQUFOLEdBQTJCLElBQXRFLENBQUosRUFBaUYrSCxNQUFNLENBQUNJLElBQVAsQ0FBWW1XLFVBQVUsQ0FBQ3RlLEdBQUQsQ0FBdEI7QUFDbEY7O0FBQUMsU0FBTytILE1BQVA7QUFDSCxDQVRELEMsQ0FXQTs7O0FBQ0EsSUFBSSxDQUFDd1IsVUFBTCxFQUFpQjtBQUNmL0IsU0FBTyxHQUFHLFNBQVNqSCxNQUFULEdBQWtCO0FBQzFCLFFBQUksZ0JBQWdCaUgsT0FBcEIsRUFBNkIsTUFBTS9YLFNBQVMsQ0FBQyw4QkFBRCxDQUFmO0FBQzdCLFFBQUkwVSxHQUFHLEdBQUdHLEdBQUcsQ0FBQ25ULFNBQVMsQ0FBQ04sTUFBVixHQUFtQixDQUFuQixHQUF1Qk0sU0FBUyxDQUFDLENBQUQsQ0FBaEMsR0FBc0NwQixTQUF2QyxDQUFiOztBQUNBLFFBQUl5ZixJQUFJLEdBQUcsVUFBVXplLEtBQVYsRUFBaUI7QUFDMUIsVUFBSSxTQUFTNlIsV0FBYixFQUEwQjRNLElBQUksQ0FBQzdkLElBQUwsQ0FBVTRjLFNBQVYsRUFBcUJ4ZCxLQUFyQjtBQUMxQixVQUFJc0QsR0FBRyxDQUFDLElBQUQsRUFBTzhaLE1BQVAsQ0FBSCxJQUFxQjlaLEdBQUcsQ0FBQyxLQUFLOFosTUFBTCxDQUFELEVBQWVoSyxHQUFmLENBQTVCLEVBQWlELEtBQUtnSyxNQUFMLEVBQWFoSyxHQUFiLElBQW9CLEtBQXBCO0FBQ2pEd0ssbUJBQWEsQ0FBQyxJQUFELEVBQU94SyxHQUFQLEVBQVlqTixVQUFVLENBQUMsQ0FBRCxFQUFJbkcsS0FBSixDQUF0QixDQUFiO0FBQ0QsS0FKRDs7QUFLQSxRQUFJd0IsV0FBVyxJQUFJa2MsTUFBbkIsRUFBMkJFLGFBQWEsQ0FBQy9MLFdBQUQsRUFBY3VCLEdBQWQsRUFBbUI7QUFBRWQsa0JBQVksRUFBRSxJQUFoQjtBQUFzQnZOLFNBQUcsRUFBRTBaO0FBQTNCLEtBQW5CLENBQWI7QUFDM0IsV0FBT1gsSUFBSSxDQUFDMUssR0FBRCxDQUFYO0FBQ0QsR0FWRDs7QUFXQXJQLFVBQVEsQ0FBQzBTLE9BQU8sQ0FBQ25QLFNBQUQsQ0FBUixFQUFxQixVQUFyQixFQUFpQyxTQUFTM0csUUFBVCxHQUFvQjtBQUMzRCxXQUFPLEtBQUtpRCxFQUFaO0FBQ0QsR0FGTyxDQUFSO0FBSUFrWixPQUFLLENBQUMvYixDQUFOLEdBQVVzZCx5QkFBVjtBQUNBdEIsS0FBRyxDQUFDaGMsQ0FBSixHQUFRbUYsZUFBUjtBQUNBdEgscUJBQU8sQ0FBQyxzRUFBRCxDQUFQLENBQTBCbUMsQ0FBMUIsR0FBOEI4YixPQUFPLENBQUM5YixDQUFSLEdBQVl1ZCxvQkFBMUM7QUFDQTFmLHFCQUFPLENBQUMsb0VBQUQsQ0FBUCxDQUF5Qm1DLENBQXpCLEdBQTZCb2QscUJBQTdCO0FBQ0F2ZixxQkFBTyxDQUFDLHNFQUFELENBQVAsQ0FBMEJtQyxDQUExQixHQUE4QndkLHNCQUE5Qjs7QUFFQSxNQUFJL2MsV0FBVyxJQUFJLENBQUM1QyxtQkFBTyxDQUFDLDhEQUFELENBQTNCLEVBQTJDO0FBQ3pDbUYsWUFBUSxDQUFDOE4sV0FBRCxFQUFjLHNCQUFkLEVBQXNDc00scUJBQXRDLEVBQTZELElBQTdELENBQVI7QUFDRDs7QUFFRDNILFFBQU0sQ0FBQ3pWLENBQVAsR0FBVyxVQUFVNUIsSUFBVixFQUFnQjtBQUN6QixXQUFPMmUsSUFBSSxDQUFDclYsR0FBRyxDQUFDdEosSUFBRCxDQUFKLENBQVg7QUFDRCxHQUZEO0FBR0Q7O0FBRUQyRSxPQUFPLENBQUNBLE9BQU8sQ0FBQzhCLENBQVIsR0FBWTlCLE9BQU8sQ0FBQytCLENBQXBCLEdBQXdCL0IsT0FBTyxDQUFDZ0MsQ0FBUixHQUFZLENBQUMwUyxVQUF0QyxFQUFrRDtBQUFFaEosUUFBTSxFQUFFaUg7QUFBVixDQUFsRCxDQUFQOztBQUVBLEtBQUssSUFBSWlJLFVBQVUsR0FDakI7QUFDQSxnSEFGb0IsQ0FHcEI5WCxLQUhvQixDQUdkLEdBSGMsQ0FBakIsRUFHU2lKLENBQUMsR0FBRyxDQUhsQixFQUdxQjZPLFVBQVUsQ0FBQzVlLE1BQVgsR0FBb0IrUCxDQUh6QyxHQUc0Q3BILEdBQUcsQ0FBQ2lXLFVBQVUsQ0FBQzdPLENBQUMsRUFBRixDQUFYLENBQUg7O0FBRTVDLEtBQUssSUFBSThPLGdCQUFnQixHQUFHak4sS0FBSyxDQUFDakosR0FBRyxDQUFDZ0wsS0FBTCxDQUE1QixFQUF5Q3ZSLENBQUMsR0FBRyxDQUFsRCxFQUFxRHljLGdCQUFnQixDQUFDN2UsTUFBakIsR0FBMEJvQyxDQUEvRSxHQUFtRndhLFNBQVMsQ0FBQ2lDLGdCQUFnQixDQUFDemMsQ0FBQyxFQUFGLENBQWpCLENBQVQ7O0FBRW5GNEIsT0FBTyxDQUFDQSxPQUFPLENBQUM4RCxDQUFSLEdBQVk5RCxPQUFPLENBQUNnQyxDQUFSLEdBQVksQ0FBQzBTLFVBQTFCLEVBQXNDLFFBQXRDLEVBQWdEO0FBQ3JEO0FBQ0EsU0FBTyxVQUFVdlosR0FBVixFQUFlO0FBQ3BCLFdBQU9xRSxHQUFHLENBQUNnYSxjQUFELEVBQWlCcmUsR0FBRyxJQUFJLEVBQXhCLENBQUgsR0FDSHFlLGNBQWMsQ0FBQ3JlLEdBQUQsQ0FEWCxHQUVIcWUsY0FBYyxDQUFDcmUsR0FBRCxDQUFkLEdBQXNCd1gsT0FBTyxDQUFDeFgsR0FBRCxDQUZqQztBQUdELEdBTm9EO0FBT3JEO0FBQ0EyZixRQUFNLEVBQUUsU0FBU0EsTUFBVCxDQUFnQmIsR0FBaEIsRUFBcUI7QUFDM0IsUUFBSSxDQUFDQyxRQUFRLENBQUNELEdBQUQsQ0FBYixFQUFvQixNQUFNcmYsU0FBUyxDQUFDcWYsR0FBRyxHQUFHLG1CQUFQLENBQWY7O0FBQ3BCLFNBQUssSUFBSTllLEdBQVQsSUFBZ0JxZSxjQUFoQixFQUFnQyxJQUFJQSxjQUFjLENBQUNyZSxHQUFELENBQWQsS0FBd0I4ZSxHQUE1QixFQUFpQyxPQUFPOWUsR0FBUDtBQUNsRSxHQVhvRDtBQVlyRDRmLFdBQVMsRUFBRSxZQUFZO0FBQUVuQixVQUFNLEdBQUcsSUFBVDtBQUFnQixHQVpZO0FBYXJEb0IsV0FBUyxFQUFFLFlBQVk7QUFBRXBCLFVBQU0sR0FBRyxLQUFUO0FBQWlCO0FBYlcsQ0FBaEQsQ0FBUDtBQWdCQTVaLE9BQU8sQ0FBQ0EsT0FBTyxDQUFDOEQsQ0FBUixHQUFZOUQsT0FBTyxDQUFDZ0MsQ0FBUixHQUFZLENBQUMwUyxVQUExQixFQUFzQyxRQUF0QyxFQUFnRDtBQUNyRDtBQUNBeFgsUUFBTSxFQUFFa2QsT0FGNkM7QUFHckQ7QUFDQTFYLGdCQUFjLEVBQUVOLGVBSnFDO0FBS3JEO0FBQ0FpTCxrQkFBZ0IsRUFBRThNLGlCQU5tQztBQU9yRDtBQUNBNU0sMEJBQXdCLEVBQUVnTix5QkFSMkI7QUFTckQ7QUFDQTdNLHFCQUFtQixFQUFFOE0sb0JBVmdDO0FBV3JEO0FBQ0ExTSx1QkFBcUIsRUFBRTJNO0FBWjhCLENBQWhELENBQVAsQyxDQWVBOztBQUNBdkIsS0FBSyxJQUFJbFosT0FBTyxDQUFDQSxPQUFPLENBQUM4RCxDQUFSLEdBQVk5RCxPQUFPLENBQUNnQyxDQUFSLElBQWEsQ0FBQzBTLFVBQUQsSUFBZWlFLE1BQU0sQ0FBQyxZQUFZO0FBQzFFLE1BQUk3VSxDQUFDLEdBQUc2TyxPQUFPLEVBQWYsQ0FEMEUsQ0FFMUU7QUFDQTtBQUNBOztBQUNBLFNBQU95RyxVQUFVLENBQUMsQ0FBQ3RWLENBQUQsQ0FBRCxDQUFWLElBQW1CLFFBQW5CLElBQStCc1YsVUFBVSxDQUFDO0FBQUVyWSxLQUFDLEVBQUUrQztBQUFMLEdBQUQsQ0FBVixJQUF3QixJQUF2RCxJQUErRHNWLFVBQVUsQ0FBQ3pjLE1BQU0sQ0FBQ21ILENBQUQsQ0FBUCxDQUFWLElBQXlCLElBQS9GO0FBQ0QsQ0FOOEQsQ0FBbEMsQ0FBYixFQU1YLE1BTlcsRUFNSDtBQUNYdVYsV0FBUyxFQUFFLFNBQVNBLFNBQVQsQ0FBbUIxZSxFQUFuQixFQUF1QjtBQUNoQyxRQUFJNkwsSUFBSSxHQUFHLENBQUM3TCxFQUFELENBQVg7QUFDQSxRQUFJdUUsQ0FBQyxHQUFHLENBQVI7QUFDQSxRQUFJK2IsUUFBSixFQUFjQyxTQUFkOztBQUNBLFdBQU81ZSxTQUFTLENBQUNOLE1BQVYsR0FBbUJrRCxDQUExQixFQUE2QnNILElBQUksQ0FBQ2xELElBQUwsQ0FBVWhILFNBQVMsQ0FBQzRDLENBQUMsRUFBRixDQUFuQjs7QUFDN0JnYyxhQUFTLEdBQUdELFFBQVEsR0FBR3pVLElBQUksQ0FBQyxDQUFELENBQTNCO0FBQ0EsUUFBSSxDQUFDakwsUUFBUSxDQUFDMGYsUUFBRCxDQUFULElBQXVCdGdCLEVBQUUsS0FBS08sU0FBOUIsSUFBMkNnZixRQUFRLENBQUN2ZixFQUFELENBQXZELEVBQTZELE9BTjdCLENBTXFDOztBQUNyRSxRQUFJLENBQUNpTSxPQUFPLENBQUNxVSxRQUFELENBQVosRUFBd0JBLFFBQVEsR0FBRyxVQUFVOWYsR0FBVixFQUFlZSxLQUFmLEVBQXNCO0FBQ3ZELFVBQUksT0FBT2dmLFNBQVAsSUFBb0IsVUFBeEIsRUFBb0NoZixLQUFLLEdBQUdnZixTQUFTLENBQUNwZSxJQUFWLENBQWUsSUFBZixFQUFxQjNCLEdBQXJCLEVBQTBCZSxLQUExQixDQUFSO0FBQ3BDLFVBQUksQ0FBQ2dlLFFBQVEsQ0FBQ2hlLEtBQUQsQ0FBYixFQUFzQixPQUFPQSxLQUFQO0FBQ3ZCLEtBSHVCO0FBSXhCc0ssUUFBSSxDQUFDLENBQUQsQ0FBSixHQUFVeVUsUUFBVjtBQUNBLFdBQU83QixVQUFVLENBQUMzVyxLQUFYLENBQWlCeVcsS0FBakIsRUFBd0IxUyxJQUF4QixDQUFQO0FBQ0Q7QUFkVSxDQU5HLENBQWhCLEMsQ0F1QkE7O0FBQ0FtTSxPQUFPLENBQUNuUCxTQUFELENBQVAsQ0FBbUIrVixZQUFuQixLQUFvQ3plLG1CQUFPLENBQUMsd0RBQUQsQ0FBUCxDQUFtQjZYLE9BQU8sQ0FBQ25QLFNBQUQsQ0FBMUIsRUFBdUMrVixZQUF2QyxFQUFxRDVHLE9BQU8sQ0FBQ25QLFNBQUQsQ0FBUCxDQUFtQjZPLE9BQXhFLENBQXBDLEMsQ0FDQTs7QUFDQWhTLGNBQWMsQ0FBQ3NTLE9BQUQsRUFBVSxRQUFWLENBQWQsQyxDQUNBOztBQUNBdFMsY0FBYyxDQUFDNkYsSUFBRCxFQUFPLE1BQVAsRUFBZSxJQUFmLENBQWQsQyxDQUNBOztBQUNBN0YsY0FBYyxDQUFDTixNQUFNLENBQUNvWixJQUFSLEVBQWMsTUFBZCxFQUFzQixJQUF0QixDQUFkLEM7Ozs7Ozs7Ozs7O0FDek9BO0FBQ0EsSUFBSW5aLE9BQU8sR0FBR2xGLG1CQUFPLENBQUMsNERBQUQsQ0FBckI7O0FBQ0EsSUFBSXNOLFFBQVEsR0FBR3ROLG1CQUFPLENBQUMsOEVBQUQsQ0FBUCxDQUE4QixJQUE5QixDQUFmOztBQUVBa0YsT0FBTyxDQUFDQSxPQUFPLENBQUM4RCxDQUFULEVBQVksUUFBWixFQUFzQjtBQUMzQjNDLFNBQU8sRUFBRSxTQUFTQSxPQUFULENBQWlCeEcsRUFBakIsRUFBcUI7QUFDNUIsV0FBT3lOLFFBQVEsQ0FBQ3pOLEVBQUQsQ0FBZjtBQUNEO0FBSDBCLENBQXRCLENBQVAsQzs7Ozs7Ozs7Ozs7QUNKQUcsbUJBQU8sQ0FBQyxvRUFBRCxDQUFQLENBQXlCLGVBQXpCLEU7Ozs7Ozs7Ozs7O0FDQUEsSUFBSXFnQixVQUFVLEdBQUdyZ0IsbUJBQU8sQ0FBQyxrRkFBRCxDQUF4Qjs7QUFDQSxJQUFJaUksT0FBTyxHQUFHakksbUJBQU8sQ0FBQyxzRUFBRCxDQUFyQjs7QUFDQSxJQUFJbUYsUUFBUSxHQUFHbkYsbUJBQU8sQ0FBQyxnRUFBRCxDQUF0Qjs7QUFDQSxJQUFJaUYsTUFBTSxHQUFHakYsbUJBQU8sQ0FBQyw0REFBRCxDQUFwQjs7QUFDQSxJQUFJeUksSUFBSSxHQUFHekksbUJBQU8sQ0FBQyx3REFBRCxDQUFsQjs7QUFDQSxJQUFJNkwsU0FBUyxHQUFHN0wsbUJBQU8sQ0FBQyxrRUFBRCxDQUF2Qjs7QUFDQSxJQUFJNkosR0FBRyxHQUFHN0osbUJBQU8sQ0FBQyxzREFBRCxDQUFqQjs7QUFDQSxJQUFJK0ssUUFBUSxHQUFHbEIsR0FBRyxDQUFDLFVBQUQsQ0FBbEI7QUFDQSxJQUFJeVcsYUFBYSxHQUFHelcsR0FBRyxDQUFDLGFBQUQsQ0FBdkI7QUFDQSxJQUFJMFcsV0FBVyxHQUFHMVUsU0FBUyxDQUFDM0wsS0FBNUI7QUFFQSxJQUFJc2dCLFlBQVksR0FBRztBQUNqQkMsYUFBVyxFQUFFLElBREk7QUFDRTtBQUNuQkMscUJBQW1CLEVBQUUsS0FGSjtBQUdqQkMsY0FBWSxFQUFFLEtBSEc7QUFJakJDLGdCQUFjLEVBQUUsS0FKQztBQUtqQkMsYUFBVyxFQUFFLEtBTEk7QUFNakJDLGVBQWEsRUFBRSxLQU5FO0FBT2pCQyxjQUFZLEVBQUUsSUFQRztBQVFqQkMsc0JBQW9CLEVBQUUsS0FSTDtBQVNqQkMsVUFBUSxFQUFFLEtBVE87QUFVakJDLG1CQUFpQixFQUFFLEtBVkY7QUFXakJDLGdCQUFjLEVBQUUsS0FYQztBQVlqQkMsaUJBQWUsRUFBRSxLQVpBO0FBYWpCQyxtQkFBaUIsRUFBRSxLQWJGO0FBY2pCQyxXQUFTLEVBQUUsSUFkTTtBQWNBO0FBQ2pCQyxlQUFhLEVBQUUsS0FmRTtBQWdCakJDLGNBQVksRUFBRSxLQWhCRztBQWlCakJDLFVBQVEsRUFBRSxJQWpCTztBQWtCakJDLGtCQUFnQixFQUFFLEtBbEJEO0FBbUJqQkMsUUFBTSxFQUFFLEtBbkJTO0FBb0JqQkMsYUFBVyxFQUFFLEtBcEJJO0FBcUJqQkMsZUFBYSxFQUFFLEtBckJFO0FBc0JqQkMsZUFBYSxFQUFFLEtBdEJFO0FBdUJqQkMsZ0JBQWMsRUFBRSxLQXZCQztBQXdCakJDLGNBQVksRUFBRSxLQXhCRztBQXlCakJDLGVBQWEsRUFBRSxLQXpCRTtBQTBCakJDLGtCQUFnQixFQUFFLEtBMUJEO0FBMkJqQkMsa0JBQWdCLEVBQUUsS0EzQkQ7QUE0QmpCQyxnQkFBYyxFQUFFLElBNUJDO0FBNEJLO0FBQ3RCQyxrQkFBZ0IsRUFBRSxLQTdCRDtBQThCakJDLGVBQWEsRUFBRSxLQTlCRTtBQStCakJDLFdBQVMsRUFBRTtBQS9CTSxDQUFuQjs7QUFrQ0EsS0FBSyxJQUFJQyxXQUFXLEdBQUd2YSxPQUFPLENBQUN1WSxZQUFELENBQXpCLEVBQXlDcGMsQ0FBQyxHQUFHLENBQWxELEVBQXFEQSxDQUFDLEdBQUdvZSxXQUFXLENBQUN0aEIsTUFBckUsRUFBNkVrRCxDQUFDLEVBQTlFLEVBQWtGO0FBQ2hGLE1BQUlYLElBQUksR0FBRytlLFdBQVcsQ0FBQ3BlLENBQUQsQ0FBdEI7QUFDQSxNQUFJcWUsUUFBUSxHQUFHakMsWUFBWSxDQUFDL2MsSUFBRCxDQUEzQjtBQUNBLE1BQUlpZixVQUFVLEdBQUd6ZCxNQUFNLENBQUN4QixJQUFELENBQXZCO0FBQ0EsTUFBSW9DLEtBQUssR0FBRzZjLFVBQVUsSUFBSUEsVUFBVSxDQUFDdmlCLFNBQXJDO0FBQ0EsTUFBSUUsR0FBSjs7QUFDQSxNQUFJd0YsS0FBSixFQUFXO0FBQ1QsUUFBSSxDQUFDQSxLQUFLLENBQUNrRixRQUFELENBQVYsRUFBc0J0QyxJQUFJLENBQUM1QyxLQUFELEVBQVFrRixRQUFSLEVBQWtCd1YsV0FBbEIsQ0FBSjtBQUN0QixRQUFJLENBQUMxYSxLQUFLLENBQUN5YSxhQUFELENBQVYsRUFBMkI3WCxJQUFJLENBQUM1QyxLQUFELEVBQVF5YSxhQUFSLEVBQXVCN2MsSUFBdkIsQ0FBSjtBQUMzQm9JLGFBQVMsQ0FBQ3BJLElBQUQsQ0FBVCxHQUFrQjhjLFdBQWxCO0FBQ0EsUUFBSWtDLFFBQUosRUFBYyxLQUFLcGlCLEdBQUwsSUFBWWdnQixVQUFaLEVBQXdCLElBQUksQ0FBQ3hhLEtBQUssQ0FBQ3hGLEdBQUQsQ0FBVixFQUFpQjhFLFFBQVEsQ0FBQ1UsS0FBRCxFQUFReEYsR0FBUixFQUFhZ2dCLFVBQVUsQ0FBQ2hnQixHQUFELENBQXZCLEVBQThCLElBQTlCLENBQVI7QUFDeEQ7QUFDRixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekREO0FBQ0E7O0FBRUFzaUIsZUFBZSxDQUFDQyxTQUFoQjtBQUFBO0FBQUE7QUFBQTs7QUFDRSxrQkFBWUMsUUFBWixFQUFzQjtBQUFBOztBQUFBOztBQUFBLFFBQ1pDLFVBRFksR0FDR0QsUUFESCxDQUNaQyxVQURZOztBQUVwQixRQUFJQSxVQUFKLEVBQWdCO0FBQ2QsVUFBTUMsTUFBTSxHQUFHQyxTQUFTLENBQUNDLEtBQVYsQ0FBZ0JDLGFBQWhCLEdBQWdDQyxTQUFoQyxDQUEwQ0wsVUFBMUMsQ0FBZjs7QUFDQSxVQUFJLENBQUNDLE1BQUwsRUFBYTtBQUNYLGNBQU0sSUFBSUssS0FBSiw0REFBOEROLFVBQTlELFdBQU47QUFDRDs7QUFDRCxrRkFBTWpoQixNQUFNLENBQUM2TyxNQUFQLENBQWMsRUFBZCxFQUFrQm1TLFFBQWxCLEVBQTRCO0FBQUVRLFVBQUUsRUFBRU4sTUFBTSxDQUFDTyxTQUFQO0FBQU4sT0FBNUIsQ0FBTjtBQUNELEtBTkQsTUFNTztBQUFFO0FBQ1Asa0ZBQU1ULFFBQU47QUFDRDs7QUFFRDVILFdBQU8sQ0FBQ3NJLEdBQVIsQ0FBWSw4QkFBWixFQUE0QyxNQUFLVCxVQUFqRCxFQVpvQixDQVkwQztBQUM5RDs7QUFDQSxVQUFLVSxrQkFBTCxHQUEwQkMsMkRBQWtCLENBQUNsZCxRQUE3QztBQWRvQjtBQWVyQjs7QUFoQkg7QUFBQTtBQUFBLHVDQWtCcUI7QUFDakIsYUFBTyxLQUFLaWQsa0JBQUwsQ0FBd0JFLGdCQUF4QixFQUFQO0FBQ0Q7QUFwQkg7QUFBQTtBQUFBLHFDQXNCbUJuakIsSUF0Qm5CLEVBc0J5QmtJLElBdEJ6QixFQXNCK0JrYixFQXRCL0IsRUFzQm1DO0FBQy9CLFVBQUksQ0FBQyxLQUFLSCxrQkFBVixFQUE4QjtBQUM1QjtBQUNBLGNBQU0sSUFBSUosS0FBSixDQUFVLGtEQUFWLENBQU47QUFDRDs7QUFDRCxVQUFJLENBQUMsS0FBS0ksa0JBQUwsQ0FBd0JJLFlBQXhCLEVBQUwsRUFBNkM7QUFDM0MsY0FBTSxJQUFJUixLQUFKLENBQVUsb0JBQVYsQ0FBTixDQUQyQyxDQUUzQztBQUNEOztBQUNELFdBQUtTLElBQUwsQ0FBVUMsdUJBQVYsQ0FBa0MsS0FBS2YsTUFBdkMsRUFUK0IsQ0FTaUI7O0FBQ2hELFdBQUtnQixpQkFBTCxDQUF1QnhqQixJQUF2Qjs7QUFDQSxhQUFPLEtBQUtpakIsa0JBQUwsQ0FBd0JRLGVBQXhCLENBQXdDdmIsSUFBeEMsRUFBOENrYixFQUE5QyxFQUFrRCxLQUFLTixFQUF2RCxDQUFQO0FBQ0Q7QUFsQ0g7QUFBQTtBQUFBLGtDQW9DZ0I5aUIsSUFwQ2hCLEVBb0NzQmtJLElBcEN0QixFQW9DNEJrYixFQXBDNUIsRUFvQ2dDO0FBQzVCLGFBQU8sS0FBS00sZ0JBQUwsQ0FBc0IxakIsSUFBdEIsRUFBNEJrSSxJQUE1QixFQUFrQ2tiLEVBQWxDLENBQVA7QUFDRDtBQXRDSDtBQUFBO0FBQUEsbUNBd0NpQnBqQixJQXhDakIsRUF3Q3VCa0ksSUF4Q3ZCLEVBd0M2QmtiLEVBeEM3QixFQXdDaUM7QUFDN0IsYUFBTyxLQUFLTSxnQkFBTCxDQUFzQjFqQixJQUF0QixFQUE0QmtJLElBQTVCLEVBQWtDa2IsRUFBbEMsQ0FBUDtBQUNEO0FBMUNIO0FBQUE7QUFBQSw4QkE0Q1lPLFdBNUNaLEVBNEN5QjtBQUNyQjtBQUNBO0FBQ0EsVUFBSSxDQUFDLEtBQUtDLFlBQVYsRUFBd0I7QUFDdEIsZUFBTyxLQUFQO0FBQ0Q7O0FBQ0QsVUFBTWhqQixLQUFLLEdBQUcsS0FBS2lqQixZQUFMLEVBQWQ7QUFDQSxhQUFPLEtBQUtmLEVBQUwsQ0FBUWdCLGFBQVIsQ0FBc0IsYUFBdEIsRUFBcUNILFdBQXJDLEVBQWtEL2lCLEtBQWxELENBQVA7QUFDRDtBQXBESDtBQUFBO0FBQUEsNkJBc0RXbWpCLGNBdERYLEVBc0QyQkMsZ0JBdEQzQixFQXNENkN2VyxFQXREN0MsRUFzRGlEO0FBQzdDO0FBQ0EsVUFBTXdXLEtBQUssR0FBRyxPQUFPeFcsRUFBUCxLQUFjLFdBQWQsR0FBNEIsS0FBS3lXLGdCQUFMLENBQXNCLElBQXRCLEVBQTRCQyxFQUF4RCxHQUE2RDFXLEVBQTNFO0FBQ0EsVUFBSTJXLE1BQU0sOEJBQXVCTCxjQUF2Qix5QkFBb0RDLGdCQUFwRCxDQUFWO0FBQ0FJLFlBQU0sc0RBQStDSCxLQUEvQyxDQUFOO0FBQ0FHLFlBQU0sR0FBR0MsU0FBUyxDQUFDRCxNQUFELENBQWxCO0FBQ0EzQixlQUFTLENBQUNDLEtBQVYsQ0FBZ0I0QixRQUFoQixDQUF5QlAsY0FBekIsRUFBeUMsRUFBekMsRUFBNkNLLE1BQTdDLEVBQXFELEVBQXJEO0FBQ0Q7QUE3REg7QUFBQTtBQUFBLGtDQStEdUI7QUFDbkIsVUFBTUcsT0FBTyxHQUFHOUIsU0FBUyxDQUFDQyxLQUFWLENBQWdCOEIsVUFBaEIsRUFBaEI7QUFDQUQsYUFBTyxDQUFDRSxJQUFSO0FBQ0FGLGFBQU8sQ0FBQ0csS0FBUjtBQUNEO0FBbkVIOztBQUFBO0FBQUEsRUFBMENDLHNEQUExQyxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNIcUJBLGE7OztBQUNuQix5QkFBWXJDLFFBQVosRUFBc0I7QUFBQTs7QUFBQTs7QUFDcEIsU0FBS3NDLE1BQUwsR0FBY0MsUUFBUSxDQUFDQyxVQUFULENBQW9CLHFCQUFwQixDQUFkO0FBQ0EsU0FBS2hDLEVBQUwsR0FBVVIsUUFBUSxDQUFDUSxFQUFuQjtBQUNBLFNBQUtRLElBQUwsR0FBWWIsU0FBUyxDQUFDQyxLQUFWLENBQWdCQyxhQUFoQixFQUFaO0FBQ0EsU0FBS0osVUFBTCxHQUFrQixLQUFLTyxFQUFMLENBQVFpQyxHQUFSLENBQVksU0FBWixDQUFsQjtBQUNBLFNBQUt2QyxNQUFMLEdBQWMsS0FBS2MsSUFBTCxDQUFVMEIsWUFBVixHQUF5QixLQUFLekMsVUFBOUIsQ0FBZDtBQUNBLFNBQUtxQixZQUFMLEdBQW9CLE9BQU8sS0FBS3BCLE1BQUwsQ0FBWXlDLGdCQUFuQixLQUF3QyxVQUE1RDtBQUNBLFNBQUtDLFFBQUwsR0FBZ0IsRUFBaEIsQ0FQb0IsQ0FPQTs7QUFDcEIsU0FBS0MsR0FBTCxHQUFXLEVBQVg7QUFFQSxTQUFLQyxLQUFMLEdBQWEsQ0FBYjtBQUNBLFNBQUtDLFdBQUwsR0FBbUIsRUFBbkI7QUFDQSxRQUFNQyxJQUFJLEdBQUcsS0FBSzlDLE1BQUwsQ0FBWStDLE9BQVosRUFBYjtBQUNBLFNBQUt6QyxFQUFMLENBQVEwQyx5QkFBUixDQUFrQyxLQUFLWixNQUFMLENBQVl4Z0IsR0FBWixDQUFnQixzQkFBaEIsQ0FBbEMsRUFBMkUsVUFBQ3FoQixPQUFELEVBQWE7QUFDdEYsVUFBSUgsSUFBSSxLQUFLRyxPQUFPLENBQUNDLFdBQVIsQ0FBb0IsSUFBcEIsQ0FBYixFQUF3QztBQUN0QyxhQUFLLElBQUk3aEIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFJLENBQUN3aEIsV0FBTCxDQUFpQjFrQixNQUFyQyxFQUE2Q2tELENBQUMsSUFBSSxDQUFsRCxFQUFxRDtBQUNuRDtBQUNBLGVBQUksQ0FBQ3doQixXQUFMLENBQWlCeGhCLENBQWpCLEVBQW9COGhCLElBQXBCO0FBQ0Q7QUFDRjtBQUNGLEtBUEQsRUFib0IsQ0FzQnBCOztBQUNBLFFBQUksQ0FBQyxLQUFLL0IsWUFBVixFQUF3QjtBQUN0QixVQUFNZ0MsUUFBUSxlQUFRLEtBQUs5QyxFQUFMLENBQVFpQyxHQUFSLENBQVksV0FBWixDQUFSLFNBQWQ7QUFDQSxVQUFNYyxZQUFZLEdBQUd2ZSxRQUFRLENBQUN3ZSxjQUFULENBQXdCRixRQUF4QixFQUFrQ0csZ0JBQWxDLENBQW1ELE9BQW5ELENBQXJCOztBQUNBLFdBQUssSUFBSWxpQixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHZ2lCLFlBQVksQ0FBQ2xsQixNQUFqQyxFQUF5Q2tELENBQUMsSUFBSSxDQUE5QyxFQUFpRDtBQUMvQyxZQUFJZ2lCLFlBQVksQ0FBQ2hpQixDQUFELENBQVosQ0FBZ0JtaUIsVUFBaEIsQ0FBMkIsZUFBM0IsQ0FBSixFQUFpRDtBQUMvQyxlQUFLZCxRQUFMLENBQWNqZCxJQUFkLENBQW1CNGQsWUFBWSxDQUFDaGlCLENBQUQsQ0FBWixDQUFnQm1pQixVQUFoQixDQUEyQmhtQixJQUEzQixDQUFnQ2ltQixTQUFuRDtBQUNEO0FBQ0Y7QUFDRixLQS9CbUIsQ0FpQ3BCOzs7QUFDQSxRQUFNMUQsVUFBVSxHQUFHLEtBQUtPLEVBQUwsQ0FBUWlDLEdBQVIsQ0FBWSxTQUFaLENBQW5CO0FBQ0EsU0FBS2pDLEVBQUwsQ0FBUTBDLHlCQUFSLENBQWtDLEtBQUtaLE1BQUwsQ0FBWXhnQixHQUFaLENBQWdCLDBCQUFoQixDQUFsQyxFQUErRSxVQUFDcWhCLE9BQUQsRUFBYTtBQUMxRixVQUFNUyxRQUFRLEdBQUd6RCxTQUFTLENBQUNDLEtBQVYsQ0FBZ0JDLGFBQWhCLEdBQWdDd0QsT0FBaEMsRUFBakI7QUFDQSxVQUFNL2QsSUFBSSxHQUFHcWQsT0FBTyxDQUFDQyxXQUFSLENBQW9CLEtBQUksQ0FBQ2QsTUFBTCxDQUFZeGdCLEdBQVosQ0FBZ0Isb0JBQWhCLENBQXBCLENBQWI7O0FBQ0EsVUFBSWdFLElBQUksS0FBSyxrQkFBYixFQUFpQztBQUMvQixZQUFNa0YsR0FBRyxHQUFHLEVBQVo7QUFDQThZLGlDQUF5QixDQUFDWCxPQUFPLENBQUNDLFdBQVIsQ0FBb0IsS0FBSSxDQUFDZCxNQUFMLENBQVl4Z0IsR0FBWixDQUFnQixxQkFBaEIsQ0FBcEIsQ0FBRCxFQUE4RGtKLEdBQTlELENBQXpCOztBQUNBLFlBQUk0WSxRQUFRLEtBQUs1WSxHQUFHLENBQUMsQ0FBRCxDQUFoQixJQUF1QmlWLFVBQVUsS0FBS2pWLEdBQUcsQ0FBQyxDQUFELENBQTdDLEVBQWtEO0FBQ2hELGVBQUksQ0FBQzZYLEdBQUwsQ0FBUzdYLEdBQUcsQ0FBQyxDQUFELENBQVosSUFBbUJBLEdBQUcsQ0FBQytZLE1BQUosQ0FBVyxDQUFYLEVBQWNDLE1BQWQsQ0FBcUIsVUFBQTlsQixFQUFFO0FBQUEsbUJBQUlBLEVBQUUsS0FBSyxFQUFYO0FBQUEsV0FBdkIsQ0FBbkI7QUFDRDtBQUNGO0FBQ0YsS0FWRDtBQVdEOzs7OzhCQUVTbWxCLEksRUFBTTtBQUNkLFVBQUksT0FBT0EsSUFBUCxLQUFnQixVQUFwQixFQUFnQztBQUM5QixjQUFNLElBQUk5QyxLQUFKLENBQVUsd0JBQVYsQ0FBTjtBQUNEOztBQUNELFdBQUt1QyxLQUFMLElBQWMsQ0FBZDtBQUNBLFdBQUtDLFdBQUwsQ0FBaUJwZCxJQUFqQixDQUFzQjtBQUFFbWQsYUFBSyxFQUFFLEtBQUtBLEtBQWQ7QUFBcUJPLFlBQUksRUFBSkE7QUFBckIsT0FBdEI7QUFDQSxhQUFPLEtBQUtQLEtBQVo7QUFDRDs7O2dDQUVXQSxLLEVBQU87QUFDakIsV0FBSyxJQUFJdmhCLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS3doQixXQUFMLENBQWlCMWtCLE1BQXJDLEVBQTZDa0QsQ0FBQyxJQUFJLENBQWxELEVBQXFEO0FBQ25ELFlBQUl1aEIsS0FBSyxLQUFLLEtBQUtDLFdBQUwsQ0FBaUJ4aEIsQ0FBakIsRUFBb0J1aEIsS0FBbEMsRUFBeUM7QUFDdkMsaUJBQU8sS0FBS0MsV0FBTCxDQUFpQmdCLE1BQWpCLENBQXdCeGlCLENBQXhCLEVBQTJCLENBQTNCLENBQVA7QUFDRDtBQUNGOztBQUNELGFBQU8sS0FBUDtBQUNEOzs7Z0NBRVc3RCxJLEVBQU07QUFDaEIsYUFBTyxLQUFLd2lCLE1BQUwsQ0FBWStELFVBQVosQ0FBdUJ2bUIsSUFBdkIsQ0FBUDtBQUNEOzs7c0NBRWlCO0FBQ2hCLFVBQUksS0FBSzRqQixZQUFULEVBQXVCO0FBQ3JCLGVBQU8sS0FBS3BCLE1BQUwsQ0FBWXlDLGdCQUFaLEVBQVAsQ0FEcUIsQ0FDa0I7QUFDeEM7O0FBQ0QsYUFBTyxLQUFLekMsTUFBTCxDQUFZZ0UsV0FBWixFQUFQLENBSmdCLENBSWtCO0FBQ25DLEssQ0FFRDs7OzttQ0FDZXBlLEksRUFBTTtBQUNuQjtBQUNBO0FBQ0EsYUFBUUEsSUFBSSxLQUFLLEtBQUt3YyxNQUFMLENBQVl4Z0IsR0FBWixDQUFnQixxQkFBaEIsQ0FBVixJQUNEZ0UsSUFBSSxLQUFLLEtBQUt3YyxNQUFMLENBQVl4Z0IsR0FBWixDQUFnQixlQUFoQixDQURSLElBRURnRSxJQUFJLEtBQUssS0FBS3djLE1BQUwsQ0FBWXhnQixHQUFaLENBQWdCLG9CQUFoQixDQUZSLElBR0RnRSxJQUFJLEtBQUssTUFIZixDQUhtQixDQU1LO0FBQ3pCOzs7Z0NBRVdxZSxTLEVBQVc7QUFDckI7QUFDQSxhQUFPLEtBQUt2QixRQUFMLENBQWMxTCxPQUFkLENBQXNCaU4sU0FBdEIsSUFBbUMsQ0FBQyxDQUEzQztBQUNEOzs7c0NBVWlCem1CLEksRUFBTTtBQUN0QixhQUFPLEtBQUt3aUIsTUFBTCxDQUFZa0UsZ0JBQVosQ0FBNkIsS0FBS0MsV0FBTCxDQUFpQjNtQixJQUFqQixDQUE3QixDQUFQO0FBQ0Q7Ozt3Q0FFbUI0bUIsYSxFQUFlL2xCLEssRUFBTztBQUN4QztBQUNBLFVBQUksS0FBSytqQixNQUFMLENBQVl4Z0IsR0FBWixDQUFnQixtQkFBaEIsTUFBeUN3aUIsYUFBN0MsRUFBNEQ7QUFDMUQ7QUFDQTtBQUNBL2xCLGFBQUssR0FBR0EsS0FBSyxHQUFHLEdBQUgsR0FBUyxHQUF0QixDQUgwRCxDQUcvQjtBQUM1Qjs7QUFDRCxhQUFPQSxLQUFQO0FBQ0Q7OztvQ0FFZWdtQixNLEVBQVE7QUFDdEIsYUFBTyxLQUFLL0QsRUFBTCxDQUFRZ0IsYUFBUixDQUFzQixpQkFBdEIsRUFBeUMrQyxNQUF6QyxDQUFQO0FBQ0Q7OztpQ0FFWUEsTSxFQUFRO0FBQ25CLFVBQUksQ0FBQyxLQUFLQyxlQUFMLENBQXFCRCxNQUFyQixDQUFMLEVBQW1DO0FBQ2pDLGVBQU8sS0FBUDtBQUNEOztBQUNELGFBQU8sS0FBSy9ELEVBQUwsQ0FBUWdCLGFBQVIsQ0FBc0IsY0FBdEIsRUFBc0MrQyxNQUF0QyxDQUFQO0FBQ0Q7OztrQ0FFYTtBQUNaLFVBQU1FLFFBQVEsR0FBRyxFQUFqQjs7QUFDQSxVQUFNQyxjQUFjLEdBQUcsS0FBS0MsZUFBTCxFQUF2Qjs7QUFDQSxVQUFNM1osR0FBRyxHQUFHaE0sTUFBTSxDQUFDMkssSUFBUCxDQUFZK2EsY0FBWixDQUFaOztBQUNBLFdBQUssSUFBSW5qQixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHeUosR0FBRyxDQUFDM00sTUFBeEIsRUFBZ0NrRCxDQUFDLElBQUksQ0FBckMsRUFBd0M7QUFDdEMsWUFBTXFqQixPQUFPLEdBQUdGLGNBQWMsQ0FBQzFaLEdBQUcsQ0FBQ3pKLENBQUQsQ0FBSixDQUE5QjtBQUNBLFlBQU0raUIsYUFBYSxHQUFHTSxPQUFPLENBQUNDLFNBQVIsRUFBdEI7O0FBQ0EsWUFBSSxLQUFLQyxjQUFMLENBQW9CUixhQUFwQixDQUFKLEVBQXdDO0FBQ3RDLG1CQURzQyxDQUM1QjtBQUNYOztBQUNELFlBQU1qRCxXQUFXLEdBQUd1RCxPQUFPLENBQUNmLE9BQVIsRUFBcEI7QUFDQSxZQUFNa0IsZ0JBQWdCLEdBQUdILE9BQU8sQ0FBQ0ksWUFBUixFQUF6QjtBQUNBLFlBQU1DLEdBQUcsR0FBRztBQUNWdm5CLGNBQUksRUFBRTJqQixXQURJO0FBRVY2RCxlQUFLLEVBQUVOLE9BQU8sQ0FBQ08sY0FBUixFQUZHO0FBR1ZDLGdCQUFNLEVBQUVkLGFBSEU7QUFJVjFCLGtCQUFRLEVBQUUsS0FBS3lDLFdBQUwsQ0FBaUJOLGdCQUFqQixDQUpBO0FBS1ZPLHFCQUFXLEVBQUVWLE9BQU8sQ0FBQ1csYUFBUixPQUE0QixHQUwvQjtBQU1WQyxvQkFBVSxFQUFFWixPQUFPLENBQUNhLGVBQVIsT0FBOEIsR0FOaEM7QUFPVjtBQUNBdEIsbUJBQVMsRUFBRVksZ0JBUkQ7QUFTVlcsdUJBQWEsRUFBRWQsT0FBTyxDQUFDZSxhQUFSLEVBVEw7QUFVVkMsaUJBQU8sRUFBRWhCLE9BQU8sQ0FBQ2lCLFVBQVIsRUFWQztBQVdWO0FBQ0FDLG1CQUFTLEVBQUVsQixPQUFPLENBQUNtQixZQUFSLEVBWkQ7QUFhVkMsZ0JBQU0sRUFBRSxLQUFLeEYsRUFBTCxDQUFRZ0IsYUFBUixDQUFzQixhQUF0QixFQUFxQ0gsV0FBckM7QUFiRSxTQUFaOztBQWVBLFlBQUksS0FBS0MsWUFBVCxFQUF1QjtBQUNyQjJELGFBQUcsQ0FBQ2dCLFFBQUosR0FBZSxDQUFDLEtBQUt6RixFQUFMLENBQVFnQixhQUFSLENBQXNCLFdBQXRCLEVBQ2QsS0FBS2hCLEVBQUwsQ0FBUTBGLFdBQVIsR0FBc0JDLGVBQXRCLEdBQXdDQyxvQkFBeEMsQ0FBNkQvRSxXQUE3RCxDQURjLENBQWhCO0FBRUQsU0FIRCxNQUdPO0FBQ0w0RCxhQUFHLENBQUNnQixRQUFKLEdBQWUsQ0FBQyxLQUFLekYsRUFBTCxDQUFRZ0IsYUFBUixDQUFzQixXQUF0QixFQUFtQ0gsV0FBbkMsQ0FBaEI7QUFDRCxTQTVCcUMsQ0E2QnRDOzs7QUFDQSxZQUFJNEQsR0FBRyxDQUFDTyxVQUFSLEVBQW9CO0FBQ2xCUCxhQUFHLENBQUNvQixTQUFKLEdBQWdCaEUsYUFBYSxDQUFDaUUsWUFBZCxDQUEyQjFCLE9BQU8sQ0FBQzJCLG9CQUFSLEdBQStCQyxVQUExRCxDQUFoQjtBQUNBdkIsYUFBRyxDQUFDd0IsSUFBSixHQUFXeEIsR0FBRyxDQUFDb0IsU0FBSixDQUFjSyxNQUFkLENBQXFCLFVBQUNDLEdBQUQsRUFBTXpvQixFQUFOLEVBQWE7QUFBRTtBQUM3Q3lvQixlQUFHLENBQUNoaEIsSUFBSixDQUFTO0FBQUVpaEIsaUJBQUcsRUFBRTFvQixFQUFFLENBQUMyb0IsVUFBVjtBQUFzQnpWLGlCQUFHLEVBQUVsVCxFQUFFLENBQUM0b0I7QUFBOUIsYUFBVDtBQUNBLG1CQUFPSCxHQUFQO0FBQ0QsV0FIVSxFQUdSLEVBSFEsQ0FBWDtBQUlEOztBQUNEbEMsZ0JBQVEsQ0FBQ3BELFdBQUQsQ0FBUixHQUF3QjRELEdBQXhCO0FBQ0Q7O0FBQ0QsYUFBT1IsUUFBUDtBQUNEOzs7aUNBRVlzQyxjLEVBQWdCO0FBQzNCLFVBQUlBLGNBQUosRUFBb0I7QUFDbEIsZUFBTyxLQUFLdkcsRUFBTCxDQUFRaUMsR0FBUixDQUFZLGNBQVosRUFBNEJ1RSxHQUE1QixDQUFnQyxVQUFDOW9CLEVBQUQsRUFBS0ksS0FBTCxFQUFlO0FBQ3BELGNBQU04SyxHQUFHLEdBQUdwSyxNQUFNLENBQUM2TyxNQUFQLENBQWMsRUFBZCxFQUFrQjNQLEVBQWxCLENBQVo7QUFDQWtMLGFBQUcsQ0FBQzZkLEtBQUosR0FBWTNvQixLQUFaO0FBQ0EsaUJBQU84SyxHQUFQO0FBQ0QsU0FKTSxDQUFQO0FBS0Q7O0FBQ0QsYUFBTyxLQUFLb1gsRUFBTCxDQUFRaUMsR0FBUixDQUFZLGNBQVosQ0FBUDtBQUNEOzs7b0NBRWVzRSxjLEVBQWdCO0FBQzlCLFVBQUlBLGNBQUosRUFBb0I7QUFDbEIsZUFBTyxLQUFLdkcsRUFBTCxDQUFRaUMsR0FBUixDQUFZLGlCQUFaLEVBQStCdUUsR0FBL0IsQ0FBbUMsVUFBQzlvQixFQUFELEVBQUtJLEtBQUwsRUFBZTtBQUN2RCxjQUFNOEssR0FBRyxHQUFHcEssTUFBTSxDQUFDNk8sTUFBUCxDQUFjLEVBQWQsRUFBa0IzUCxFQUFsQixDQUFaO0FBQ0FrTCxhQUFHLENBQUM2ZCxLQUFKLEdBQVkzb0IsS0FBWjtBQUNBLGlCQUFPOEssR0FBUDtBQUNELFNBSk0sQ0FBUDtBQUtEOztBQUNELGFBQU8sS0FBS29YLEVBQUwsQ0FBUWlDLEdBQVIsQ0FBWSxpQkFBWixDQUFQO0FBQ0Q7Ozt5Q0FFb0I7QUFDbkI7QUFDQSxhQUFPLEtBQUtqQyxFQUFMLENBQVFpQyxHQUFSLENBQVksb0JBQVosQ0FBUDtBQUNEOzs7aUNBRVk7QUFDWDtBQUNBLGFBQU8sS0FBS2pDLEVBQUwsQ0FBUWlDLEdBQVIsQ0FBWSxZQUFaLENBQVA7QUFDRDs7O21DQUVjO0FBQ2IsYUFBTyxLQUFLakMsRUFBTCxDQUFRaUMsR0FBUixDQUFZLGNBQVosQ0FBUDtBQUNEOzs7OEJBRVM4QixNLEVBQVE7QUFDaEIsVUFBSSxDQUFDLEtBQUtDLGVBQUwsQ0FBcUJELE1BQXJCLENBQUwsRUFBbUM7QUFDakMsZUFBTyxLQUFQO0FBQ0Q7O0FBQ0QsVUFBTW5iLEdBQUcsR0FBRyxLQUFLb1gsRUFBTCxDQUFRZ0IsYUFBUixDQUFzQixjQUF0QixFQUFzQytDLE1BQXRDLEVBQThDLElBQTlDLEVBQW9ELEtBQXBELENBQVo7QUFDQSxhQUFPbmIsR0FBUDtBQUNEOzs7aUNBRVk7QUFDWCxhQUFPLEtBQUs4ZCxTQUFMLENBQWUsS0FBSzVGLFlBQUwsR0FBb0IsVUFBcEIsR0FBaUMsYUFBaEQsQ0FBUDtBQUNEOzs7b0NBRWU7QUFDZCxVQUFJLENBQUMsS0FBS0EsWUFBVixFQUF3QjtBQUN0QixlQUFPLEtBQVA7QUFDRDs7QUFDRCxhQUFPLEtBQUs0RixTQUFMLENBQWUsYUFBZixDQUFQO0FBQ0Q7OztrQ0FFYTVvQixLLEVBQU87QUFDbkIsVUFBSSxLQUFLZ2pCLFlBQVQsRUFBdUI7QUFDckIsWUFBSSxDQUFDLEtBQUtkLEVBQUwsQ0FBUWdCLGFBQVIsQ0FBc0IsaUJBQXRCLEVBQXlDLGVBQXpDLENBQUwsRUFBZ0U7QUFDOUQsaUJBQU8sS0FBUDtBQUNEOztBQUNELFlBQUlsakIsS0FBSyxHQUFHLENBQVosRUFBZTtBQUNiLGlCQUFPLEtBQVA7QUFDRCxTQU5vQixDQU9yQjtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsWUFBSSxLQUFLNm9CLGtCQUFMLEtBQTRCN29CLEtBQUssR0FBRyxDQUF4QyxFQUEyQztBQUN6QyxnQkFBTSxJQUFJaWlCLEtBQUosV0FBYWppQixLQUFiLG1FQUEyRSxLQUFLNm9CLGtCQUFMLEVBQTNFLEVBQU47QUFDRCxTQWJvQixDQWNyQjtBQUNBO0FBQ0E7OztBQUNBLGVBQU8sS0FBSzNHLEVBQUwsQ0FBUWdCLGFBQVIsQ0FBc0IsaUJBQXRCLEVBQXlDbGpCLEtBQXpDLEVBQWdELEtBQWhELEVBQXVELEtBQXZELENBQVA7QUFDRDs7QUFDRCxhQUFPLEtBQVA7QUFDRDs7O2lDQUVZO0FBQ1gsVUFBSSxLQUFLZ2pCLFlBQVQsRUFBdUI7QUFDckIsZUFBTyxLQUFLOEYsYUFBTCxDQUFtQixLQUFLNUcsRUFBTCxDQUFRaUMsR0FBUixDQUFZLGNBQVosSUFBOEIsQ0FBakQsQ0FBUDtBQUNEOztBQUNELGFBQU8sS0FBS3lFLFNBQUwsQ0FBZSxpQkFBZixDQUFQO0FBQ0Q7OztvQ0FFZTtBQUNkLFVBQUksQ0FBQyxLQUFLNUYsWUFBVixFQUF3QjtBQUN0QixlQUFPLEtBQVA7QUFDRDs7QUFDRCxhQUFPLEtBQUs0RixTQUFMLENBQWUsaUJBQWYsQ0FBUDtBQUNEOzs7OEJBRVNwRyxFLEVBQUk7QUFBQTs7QUFDWjtBQUNBLFVBQU0zVCxPQUFPLEdBQUcsSUFBSW5CLE9BQUosQ0FBWSxVQUFBa0IsT0FBTztBQUFBLGVBQUksTUFBSSxDQUFDbWEsVUFBTCxDQUFnQm5hLE9BQWhCLENBQUo7QUFBQSxPQUFuQixDQUFoQjtBQUNBLGFBQU8sT0FBTzRULEVBQVAsS0FBYyxVQUFkLEdBQTJCM1QsT0FBTyxDQUFDQyxJQUFSLENBQWEwVCxFQUFiLENBQTNCLEdBQThDM1QsT0FBckQ7QUFDRDs7OytCQUVVMlQsRSxFQUFJO0FBQ2IsYUFBTyxLQUFLTixFQUFMLENBQVFnQixhQUFSLENBQXNCLGNBQXRCLEVBQXNDLFdBQXRDLEVBQW1ELElBQW5ELEVBQXlEO0FBQzlEOEYsYUFBSyxFQUFFLElBRHVEO0FBRTlEeEcsVUFBRSxFQUFGQTtBQUY4RCxPQUF6RCxDQUFQO0FBSUQ7OztvQ0FFZTtBQUNkLGFBQU8sS0FBS04sRUFBTCxDQUFRZ0IsYUFBUixDQUFzQixjQUF0QixFQUFzQyxXQUF0QyxFQUFtRCxJQUFuRCxFQUF5RCxLQUF6RCxDQUFQO0FBQ0Q7OztnQ0FFV1YsRSxFQUFJeUcsSyxFQUFPO0FBQUE7O0FBQ3JCLFVBQUlwYSxPQUFPLEdBQUcsSUFBSW5CLE9BQUosQ0FBWSxVQUFDa0IsT0FBRCxFQUFVSyxNQUFWO0FBQUEsZUFBcUIsTUFBSSxDQUFDaWEsWUFBTCxDQUFrQixZQUFhO0FBQUEsNENBQVQzZSxJQUFTO0FBQVRBLGdCQUFTO0FBQUE7O0FBQzVFO0FBQ0EsY0FBSUEsSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRdWEsV0FBUixDQUFvQixRQUFwQixNQUFrQyxXQUF0QyxFQUFtRDtBQUNqRGxXLG1CQUFPO0FBQ1IsV0FGRCxNQUVPO0FBQ0xLLGtCQUFNO0FBQ1A7QUFDRixTQVA4QyxDQUFyQjtBQUFBLE9BQVosQ0FBZDtBQVFBSixhQUFPLEdBQUcsT0FBTzJULEVBQVAsS0FBYyxVQUFkLEdBQTJCM1QsT0FBTyxDQUFDQyxJQUFSLENBQWEwVCxFQUFiLENBQTNCLEdBQThDM1QsT0FBeEQ7QUFDQUEsYUFBTyxHQUFHLE9BQU9vYSxLQUFQLEtBQWlCLFVBQWpCLEdBQThCcGEsT0FBTyxDQUFDc2EsS0FBUixDQUFjRixLQUFkLENBQTlCLEdBQXFEcGEsT0FBL0Q7QUFDQSxhQUFPQSxPQUFQO0FBQ0Q7OztpQ0FFWTJULEUsRUFBSTtBQUNmLGFBQU8sS0FBS04sRUFBTCxDQUFRZ0IsYUFBUixDQUFzQixjQUF0QixFQUFzQyxhQUF0QyxFQUFxRCxJQUFyRCxFQUEyRDtBQUNoRThGLGFBQUssRUFBRSxJQUR5RDtBQUVoRXhHLFVBQUUsRUFBRkE7QUFGZ0UsT0FBM0QsQ0FBUDtBQUlEOzs7c0NBRWlCO0FBQ2hCLGFBQU8sS0FBS04sRUFBTCxDQUFRZ0IsYUFBUixDQUFzQixjQUF0QixFQUFzQyxhQUF0QyxFQUFxRCxJQUFyRCxFQUEyRCxLQUEzRCxDQUFQO0FBQ0Q7Ozt1Q0FFa0I7QUFDakIsYUFBTyxLQUFLaEIsRUFBTCxDQUFRZ0IsYUFBUixDQUFzQixjQUF0QixFQUFzQyxjQUF0QyxFQUFzRCxJQUF0RCxFQUE0RCxLQUE1RCxDQUFQO0FBQ0Q7OztxQ0FFZ0I7QUFDZixhQUFPLEtBQUtoQixFQUFMLENBQVFnQixhQUFSLENBQXNCLGNBQXRCLEVBQXNDLFlBQXRDLEVBQW9ELElBQXBELEVBQTBELEtBQTFELENBQVA7QUFDRDs7O29DQUVlOWpCLEksRUFBTWEsSyxFQUFPO0FBQzNCO0FBQ0EsVUFBTXFtQixPQUFPLEdBQUcsS0FBS1AsV0FBTCxDQUFpQjNtQixJQUFqQixDQUFoQixDQUYyQixDQUczQjs7O0FBQ0FhLFdBQUssR0FBRyxLQUFLbXBCLG1CQUFMLENBQXlCOUMsT0FBTyxDQUFDQyxTQUFSLEVBQXpCLEVBQThDdG1CLEtBQTlDLENBQVIsQ0FKMkIsQ0FJbUM7QUFDOUQ7QUFDQTs7QUFDQSxXQUFLaWlCLEVBQUwsQ0FBUW1ILGNBQVIsQ0FBdUIsS0FBS3JGLE1BQUwsQ0FBWXhnQixHQUFaLENBQWdCLHdCQUFoQixDQUF2QixFQUFrRThpQixPQUFsRTtBQUNBLFVBQU14YixHQUFHLEdBQUcsS0FBS29YLEVBQUwsQ0FBUW1ILGNBQVIsQ0FBdUIsS0FBS3JGLE1BQUwsQ0FBWXhnQixHQUFaLENBQWdCLHVCQUFoQixDQUF2QixFQUFpRThpQixPQUFqRSxFQUEwRXJtQixLQUExRSxDQUFaOztBQUNBLFVBQUksQ0FBQzZLLEdBQUwsRUFBVTtBQUNSZ1AsZUFBTyxDQUFDc0ksR0FBUixpQkFBcUJuaUIsS0FBckIsOEJBQThDcW1CLE9BQU8sQ0FBQ2YsT0FBUixFQUE5QyxHQURRLENBQzREO0FBQ3JFOztBQUNELGFBQU96YSxHQUFQO0FBQ0Q7OztrQ0FFYWlZLFcsRUFBYTtBQUN6QixVQUFNdUQsT0FBTyxHQUFHLEtBQUtQLFdBQUwsQ0FBaUJoRCxXQUFqQixDQUFoQjs7QUFDQSxVQUFNMEQsZ0JBQWdCLEdBQUdILE9BQU8sQ0FBQ0ksWUFBUixFQUF6QjtBQUNBLFdBQUtuQyxHQUFMLENBQVNrQyxnQkFBVCxJQUE2QixFQUE3QjtBQUNBLFVBQU02QyxFQUFFLEdBQUd6SCxTQUFTLENBQUNDLEtBQVYsQ0FBZ0J5SCxjQUFoQixFQUFYO0FBQ0FELFFBQUUsQ0FBQ0UsV0FBSCxDQUFlLFVBQWYsRUFBMkIvQyxnQkFBM0I7QUFDQTZDLFFBQUUsQ0FBQ0UsV0FBSCxDQUFlLE9BQWYsRUFBd0IsS0FBeEI7QUFDQSxXQUFLNUgsTUFBTCxDQUFZa0UsZ0JBQVosQ0FBNkIsSUFBN0IsRUFQeUIsQ0FPVzs7QUFDcEMsV0FBS2xFLE1BQUwsQ0FBWTZILFlBQVosQ0FBeUIsa0JBQXpCLEVBQTZDSCxFQUE3QztBQUNBLGFBQU8sS0FBSy9FLEdBQUwsQ0FBU2tDLGdCQUFULENBQVA7QUFDRDs7O2lDQUVZMUQsVyxFQUFhO0FBQ3hCLFVBQU11RCxPQUFPLEdBQUcsS0FBS1AsV0FBTCxDQUFpQmhELFdBQWpCLENBQWhCOztBQUNBLFVBQU1qWSxHQUFHLEdBQUcsRUFBWjs7QUFDQSxVQUFJLFFBQVF3YixPQUFPLENBQUNhLGVBQVIsRUFBWixFQUF1QztBQUNyQyxZQUFNemEsR0FBRyxHQUFHcVgsYUFBYSxDQUFDaUUsWUFBZCxDQUEyQjFCLE9BQU8sQ0FBQzJCLG9CQUFSLEdBQStCQyxVQUExRCxDQUFaOztBQUNBLGFBQUssSUFBSWpsQixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHeUosR0FBRyxDQUFDM00sTUFBeEIsRUFBZ0NrRCxDQUFDLElBQUksQ0FBckMsRUFBd0M7QUFDdEM2SCxhQUFHLENBQUN6RCxJQUFKLENBQVNxRixHQUFHLENBQUN6SixDQUFELENBQUgsQ0FBT3VsQixXQUFoQjtBQUNEOztBQUNEMWQsV0FBRyxDQUFDNGUsSUFBSjtBQUNEOztBQUNELGFBQU81ZSxHQUFQO0FBQ0Q7OztxQ0FFZ0JrYixhLEVBQWUvbEIsSyxFQUFPO0FBQ3JDO0FBQ0EsVUFBSTZLLEdBQUcsR0FBRzdLLEtBQVY7O0FBQ0EsVUFBSSxLQUFLK2pCLE1BQUwsQ0FBWXhnQixHQUFaLENBQWdCLG1CQUFoQixNQUF5Q3dpQixhQUE3QyxFQUE0RDtBQUMxRDtBQUNBO0FBQ0EsZ0JBQVEvbEIsS0FBUjtBQUNFLGVBQUssR0FBTDtBQUNFNkssZUFBRyxHQUFHLElBQU47QUFDQTs7QUFDRixlQUFLLEdBQUw7QUFDRUEsZUFBRyxHQUFHLEtBQU47QUFDQTs7QUFDRjtBQUNFQSxlQUFHLEdBQUcsSUFBTjtBQVJKO0FBVUQ7O0FBQ0QsYUFBT0EsR0FBUDtBQUNELEssQ0FFRDtBQUNBOzs7OzBDQUNzQjZlLFMsRUFBVztBQUMvQixVQUFNN2UsR0FBRyxHQUFHLEVBQVo7O0FBQ0EsVUFBTXNiLGNBQWMsR0FBRyxLQUFLQyxlQUFMLEVBQXZCOztBQUNBLFVBQU0zWixHQUFHLEdBQUdoTSxNQUFNLENBQUMySyxJQUFQLENBQVlzZSxTQUFaLENBQVo7O0FBQ0EsV0FBSyxJQUFJMW1CLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUd5SixHQUFHLENBQUMzTSxNQUF4QixFQUFnQ2tELENBQUMsSUFBSSxDQUFyQyxFQUF3QztBQUN0QyxZQUFNcWpCLE9BQU8sR0FBR0YsY0FBYyxDQUFDMVosR0FBRyxDQUFDekosQ0FBRCxDQUFKLENBQTlCO0FBQ0E2SCxXQUFHLENBQUN3YixPQUFPLENBQUNtQixZQUFSLEVBQUQsQ0FBSCxHQUE4QjtBQUM1QnJvQixjQUFJLEVBQUVrbkIsT0FBTyxDQUFDZixPQUFSLEVBRHNCO0FBRTVCNkIsdUJBQWEsRUFBRWQsT0FBTyxDQUFDZSxhQUFSLEVBRmE7QUFHNUJQLGdCQUFNLEVBQUVSLE9BQU8sQ0FBQ0MsU0FBUjtBQUhvQixTQUE5QjtBQUtEOztBQUNELGFBQU96YixHQUFQO0FBQ0Q7OztxQ0FFZ0I4ZSxHLEVBQUs7QUFDcEIsVUFBTTVwQixLQUFLLEdBQUcsS0FBS2lqQixZQUFMLEVBQWQsQ0FEb0IsQ0FFcEI7QUFDQTs7QUFDQSxVQUFJMkcsR0FBSixFQUFTO0FBQ1AsZUFBTyxLQUFLMUgsRUFBTCxDQUFRaUMsR0FBUixDQUFZLGlCQUFaLEVBQStCbmtCLEtBQS9CLENBQVA7QUFDRDs7QUFDRCxhQUFPLEtBQUtraUIsRUFBTCxDQUFRaUMsR0FBUixDQUFZLGNBQVosRUFBNEJua0IsS0FBNUIsQ0FBUDtBQUNEOzs7a0RBRTZCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsVUFBTTZwQixFQUFFLEdBQUcsS0FBS2pJLE1BQUwsQ0FBWWtJLFVBQVosRUFBWDs7QUFFQSxVQUFJRCxFQUFFLENBQUNFLGNBQUgsRUFBSixFQUF5QjtBQUN2QjtBQUNBO0FBQ0EsZUFBTyxDQUFQO0FBQ0Q7O0FBQ0QsVUFBSSxLQUFLOUcsWUFBTCxLQUFzQixDQUExQixFQUE2QjtBQUMzQixlQUFPLENBQVA7QUFDRDs7QUFDRCxVQUFJNEcsRUFBRSxDQUFDRyxlQUFILEVBQUosRUFBMEI7QUFDeEIsZUFBTyxDQUFQO0FBQ0Q7O0FBQ0QsVUFBSUgsRUFBRSxDQUFDSSxlQUFILEVBQUosRUFBMEI7QUFDeEIsZUFBTyxDQUFQO0FBQ0Q7O0FBQ0QsVUFBSSxDQUFDLEtBQUsvRCxlQUFMLENBQXFCLGFBQXJCLENBQUwsRUFBMEM7QUFDeEM7QUFDQSxlQUFPLENBQVA7QUFDRDs7QUFFRCxhQUFPLENBQVAsQ0E5QjRCLENBOEJsQjtBQUNYOzs7MENBRXFCeUQsUyxFQUFXTyxRLEVBQVU7QUFDekMsVUFBSSxDQUFDUCxTQUFMLEVBQWdCO0FBQ2QsZUFBTyxLQUFQO0FBQ0Q7O0FBQ0RBLGVBQVMsQ0FBQ1EsS0FBVixHQUFrQixLQUFLQywyQkFBTCxFQUFsQixDQUp5QyxDQUlhOztBQUN0RFQsZUFBUyxDQUFDOWMsRUFBVixHQUFlLEVBQWYsQ0FMeUMsQ0FLdEI7O0FBQ25CLFVBQUk4WixHQUFHLEdBQUcsRUFBVjtBQUNBLFVBQU0zbUIsS0FBSyxHQUFHLEtBQUtpakIsWUFBTCxFQUFkOztBQUNBLFVBQUlqakIsS0FBSyxHQUFHLENBQUMsQ0FBYixFQUFnQjtBQUNkMm1CLFdBQUcsR0FBRyxLQUFLMEQsWUFBTCxHQUFvQnJxQixLQUFwQixDQUFOO0FBQ0EycEIsaUJBQVMsQ0FBQzljLEVBQVYsR0FBZSxLQUFLeWQsZUFBTCxHQUF1QnRxQixLQUF2QixFQUE4QnVqQixFQUE3QyxDQUZjLENBRW1DO0FBQ2xEOztBQUNELFVBQUk3VyxHQUFHLEdBQUdoTSxNQUFNLENBQUMySyxJQUFQLENBQVlzZSxTQUFaLENBQVY7O0FBQ0EsVUFBTXZELGNBQWMsR0FBRyxLQUFLQyxlQUFMLEVBQXZCLENBYnlDLENBY3pDOzs7QUFDQSxXQUFLLElBQUlwakIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR3lKLEdBQUcsQ0FBQzNNLE1BQXhCLEVBQWdDa0QsQ0FBQyxJQUFJLENBQXJDLEVBQXdDO0FBQ3RDLFlBQU1xakIsT0FBTyxHQUFHRixjQUFjLENBQUMxWixHQUFHLENBQUN6SixDQUFELENBQUosQ0FBOUI7O0FBQ0EsWUFBSSxPQUFPcWpCLE9BQVAsS0FBbUIsV0FBdkIsRUFBb0M7QUFDbEMsY0FBTXZELFdBQVcsR0FBR3VELE9BQU8sQ0FBQ2YsT0FBUixFQUFwQjtBQUNBLGNBQU1pQyxTQUFTLEdBQUdsQixPQUFPLENBQUNtQixZQUFSLEVBQWxCOztBQUNBLGNBQUlrQyxTQUFTLENBQUNRLEtBQVYsR0FBa0IsQ0FBdEIsRUFBeUI7QUFDdkJSLHFCQUFTLENBQUNqZCxHQUFHLENBQUN6SixDQUFELENBQUosQ0FBVCxHQUFvQjtBQUFFO0FBQ3BCaEQsbUJBQUssRUFBRSxLQUFLc3FCLGdCQUFMLENBQXNCakUsT0FBTyxDQUFDQyxTQUFSLEVBQXRCLEVBQTJDSSxHQUFHLENBQUNhLFNBQUQsQ0FBOUMsQ0FEVztBQUVsQmdELHNCQUFRLEVBQUUsQ0FBQyxLQUFLdEksRUFBTCxDQUFRZ0IsYUFBUixDQUFzQixXQUF0QixFQUFtQ0gsV0FBbkMsQ0FGTztBQUdsQjJFLG9CQUFNLEVBQUUsS0FBS3hGLEVBQUwsQ0FBUWdCLGFBQVIsQ0FBc0IsYUFBdEIsRUFBcUNILFdBQXJDLENBSFU7QUFJbEI2RCxtQkFBSyxFQUFFTixPQUFPLENBQUNPLGNBQVIsRUFKVztBQUtsQk8sMkJBQWEsRUFBRWQsT0FBTyxDQUFDZSxhQUFSLEVBTEc7QUFNbEIvQyxzQkFBUSxFQUFFLEtBQUt5QyxXQUFMLENBQWlCVCxPQUFPLENBQUNJLFlBQVIsRUFBakIsQ0FOUTtBQU9sQlkscUJBQU8sRUFBRWhCLE9BQU8sQ0FBQ2lCLFVBQVIsRUFQUztBQVFsQkMsdUJBQVMsRUFBVEE7QUFSa0IsYUFBcEI7QUFVRCxXQVhELE1BV087QUFBRTtBQUNQbUMscUJBQVMsQ0FBQ2pkLEdBQUcsQ0FBQ3pKLENBQUQsQ0FBSixDQUFULEdBQW9CO0FBQUU7QUFDcEJoRCxtQkFBSyxFQUFFLEVBRFc7QUFFbEJ1cUIsc0JBQVEsRUFBRSxJQUZRO0FBR2xCOUMsb0JBQU0sRUFBRSxLQUhVO0FBSWxCZCxtQkFBSyxFQUFFTixPQUFPLENBQUNPLGNBQVIsRUFKVztBQUtsQk8sMkJBQWEsRUFBRWQsT0FBTyxDQUFDZSxhQUFSLEVBTEc7QUFNbEIvQyxzQkFBUSxFQUFFLEtBQUt5QyxXQUFMLENBQWlCVCxPQUFPLENBQUNJLFlBQVIsRUFBakIsQ0FOUTtBQU9sQlkscUJBQU8sRUFBRWhCLE9BQU8sQ0FBQ2lCLFVBQVIsRUFQUztBQVFsQkMsdUJBQVMsRUFBVEE7QUFSa0IsYUFBcEI7QUFVRDtBQUNGO0FBQ0YsT0E1Q3dDLENBNkN6Qzs7O0FBQ0EsVUFBSTBDLFFBQUosRUFBYztBQUNaeGQsV0FBRyxHQUFHaE0sTUFBTSxDQUFDMkssSUFBUCxDQUFZNmUsUUFBWixDQUFOOztBQUNBLGFBQUssSUFBSWpuQixFQUFDLEdBQUcsQ0FBYixFQUFnQkEsRUFBQyxHQUFHeUosR0FBRyxDQUFDM00sTUFBeEIsRUFBZ0NrRCxFQUFDLElBQUksQ0FBckMsRUFBd0M7QUFDdENpbkIsa0JBQVEsQ0FBQ3hkLEdBQUcsQ0FBQ3pKLEVBQUQsQ0FBSixDQUFSLEdBQW1CLEtBQUtpakIsZUFBTCxDQUFxQnhaLEdBQUcsQ0FBQ3pKLEVBQUQsQ0FBeEIsQ0FBbkIsQ0FEc0MsQ0FDVztBQUNsRDtBQUNGLE9BbkR3QyxDQW9EekM7OztBQUNBLGFBQU87QUFDTGtqQixnQkFBUSxFQUFFd0QsU0FETDtBQUVMcmxCLGVBQU8sRUFBRTRsQjtBQUZKLE9BQVA7QUFJRDs7O3FEQUVnQztBQUMvQixVQUFNOUQsY0FBYyxHQUFHLEtBQUtDLGVBQUwsRUFBdkI7O0FBQ0EsVUFBTTNaLEdBQUcsR0FBR2hNLE1BQU0sQ0FBQzJLLElBQVAsQ0FBWSthLGNBQVosQ0FBWjs7QUFDQSxXQUFLLElBQUluakIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR3lKLEdBQUcsQ0FBQzNNLE1BQXhCLEVBQWdDa0QsQ0FBQyxJQUFJLENBQXJDLEVBQXdDO0FBQ3RDLFlBQU1xakIsT0FBTyxHQUFHRixjQUFjLENBQUMxWixHQUFHLENBQUN6SixDQUFELENBQUosQ0FBOUI7QUFDQSxZQUFNK2lCLGFBQWEsR0FBR00sT0FBTyxDQUFDQyxTQUFSLEVBQXRCOztBQUNBLFlBQUksQ0FBQyxLQUFLQyxjQUFMLENBQW9CUixhQUFwQixDQUFMLEVBQXlDO0FBQ3ZDO0FBQ0E7QUFDQSxjQUFJQSxhQUFhLEtBQUssS0FBS2hDLE1BQUwsQ0FBWXhnQixHQUFaLENBQWdCLG1CQUFoQixDQUF0QixFQUE0RDtBQUMxRCxtQkFBTzhpQixPQUFPLENBQUNJLFlBQVIsRUFBUDtBQUNEO0FBQ0Y7QUFDRjs7QUFDRCxZQUFNLElBQUl6RSxLQUFKLENBQVUsaUNBQVYsQ0FBTjtBQUNEOzs7Z0NBRVc7QUFDVixhQUFPLEtBQUtDLEVBQUwsQ0FBUWdCLGFBQVIsQ0FBc0IsY0FBdEIsRUFBc0MsVUFBdEMsRUFBa0QsSUFBbEQsRUFBd0QsS0FBeEQsQ0FBUDtBQUNEOzs7MENBRXFCdUgsSSxFQUFNO0FBQzFCLFdBQUs3SSxNQUFMLENBQVk2SCxZQUFaLENBQXlCLFVBQXpCO0FBQ0EsV0FBSzdILE1BQUwsQ0FBWWtJLFVBQVosR0FBeUJZLGFBQXpCLENBQXVDLElBQXZDLEVBQTZDRCxJQUE3QztBQUNBLFdBQUs3SSxNQUFMLENBQVk2SCxZQUFaLENBQXlCLGNBQXpCO0FBQ0EsYUFBTyxLQUFLWSxZQUFMLEdBQW9CdHFCLE1BQTNCO0FBQ0Q7OztrQ0FFYXNqQixLLEVBQU87QUFDbkIsVUFBSW9ILElBQUksR0FBR3BILEtBQVg7O0FBQ0EsVUFBSXRrQixLQUFLLEtBQUtza0IsS0FBSyxDQUFDemQsV0FBcEIsRUFBaUM7QUFDL0I2a0IsWUFBSSxHQUFHcEgsS0FBSyxDQUFDcUYsR0FBTixDQUFVLFVBQUE5b0IsRUFBRTtBQUFBLGdDQUFXQSxFQUFYO0FBQUEsU0FBWixFQUE4QitQLElBQTlCLENBQW1DLE1BQW5DLENBQVA7QUFDQW1LLGVBQU8sQ0FBQ3NJLEdBQVIsQ0FBWXFJLElBQVo7QUFDRDs7QUFFRCxXQUFLN0ksTUFBTCxDQUFZNkgsWUFBWixDQUF5QixVQUF6QjtBQUNBLFdBQUs3SCxNQUFMLENBQVlrSSxVQUFaLEdBQXlCWSxhQUF6QixDQUF1QyxJQUF2QyxFQUE2Q0QsSUFBN0M7QUFDQSxXQUFLN0ksTUFBTCxDQUFZNkgsWUFBWixDQUF5QixjQUF6QjtBQUNBLGFBQU8sS0FBS1ksWUFBTCxHQUFvQnRxQixNQUEzQjtBQUNEOzs7OEJBRVNzakIsSyxFQUFPYixFLEVBQUk7QUFBQTs7QUFDbkIsVUFBTTNULE9BQU8sR0FBRyxJQUFJbkIsT0FBSixDQUFZLFVBQUFrQixPQUFPO0FBQUEsZUFBSSxNQUFJLENBQUMrYixVQUFMLENBQWdCdEgsS0FBaEIsRUFBdUJ6VSxPQUF2QixDQUFKO0FBQUEsT0FBbkIsQ0FBaEI7QUFDQSxVQUFNOUQsR0FBRyxHQUFHK0QsT0FBTyxDQUFDQyxJQUFSLENBQWE7QUFBQSxlQUFNLE1BQUksQ0FBQ3ViLFlBQUwsR0FBb0J0cUIsTUFBMUI7QUFBQSxPQUFiLENBQVo7QUFDQSxhQUFPLE9BQU95aUIsRUFBUCxLQUFjLFVBQWQsR0FBMkIxWCxHQUFHLENBQUNnRSxJQUFKLENBQVMwVCxFQUFULENBQTNCLEdBQTBDMVgsR0FBakQ7QUFDRDs7OytCQUVVdVksSyxFQUFPYixFLEVBQUk7QUFDcEI7QUFDQSxXQUFLb0ksU0FBTDs7QUFFQSxVQUFNM0UsTUFBTSxHQUFHLGNBQWY7QUFDQSxVQUFNNEUsRUFBRSxHQUFHO0FBQ1RDLGFBQUssRUFBRSxJQURFO0FBRVQ5QixhQUFLLEVBQUUsSUFGRTtBQUdUK0IsWUFBSSxFQUFFLEtBSEc7QUFJVEMsZ0JBQVEsRUFBRSxLQUpEO0FBS1R6Z0IsWUFBSSxFQUFFO0FBTEcsT0FBWDs7QUFPQSxVQUFJLE9BQU9pWSxFQUFQLEtBQWMsVUFBbEIsRUFBOEI7QUFDNUJxSSxVQUFFLENBQUNySSxFQUFILEdBQVFBLEVBQVI7QUFDRDs7QUFFRCxVQUFNeUksUUFBUSxHQUFHcEosU0FBUyxDQUFDQyxLQUFWLENBQWdCeUgsY0FBaEIsRUFBakI7QUFDQSxVQUFNMkIsT0FBTyxHQUFHckosU0FBUyxDQUFDQyxLQUFWLENBQWdCeUgsY0FBaEIsRUFBaEI7QUFDQTJCLGFBQU8sQ0FBQzFCLFdBQVIsQ0FBb0IsS0FBSzJCLDhCQUFMLEVBQXBCLGlCQUFrRTlILEtBQWxFO0FBRUF3SCxRQUFFLENBQUN0Z0IsSUFBSCxDQUFRbEQsSUFBUixDQUFhNGUsTUFBYjtBQUNBNEUsUUFBRSxDQUFDdGdCLElBQUgsQ0FBUWxELElBQVIsQ0FBYTZqQixPQUFPLENBQUNFLEtBQVIsRUFBYjtBQUVBLGFBQU8sS0FBS3hKLE1BQUwsQ0FBWXlKLGdCQUFaLENBQTZCcEYsTUFBN0IsRUFBcUNpRixPQUFyQyxFQUE4Q0QsUUFBOUMsRUFBd0RKLEVBQXhELENBQVA7QUFDRDs7OzBCQUVLUyxNLEVBQVE5SSxFLEVBQUk7QUFBQTs7QUFDaEIsVUFBTTNULE9BQU8sR0FBRyxJQUFJbkIsT0FBSixDQUFZLFVBQUFrQixPQUFPO0FBQUEsZUFBSSxNQUFJLENBQUMyYyxNQUFMLENBQVlELE1BQVosRUFBb0IxYyxPQUFwQixDQUFKO0FBQUEsT0FBbkIsQ0FBaEI7QUFDQSxVQUFNOUQsR0FBRyxHQUFHK0QsT0FBTyxDQUFDQyxJQUFSLENBQWE7QUFBQSxlQUFNLE1BQUksQ0FBQ3ViLFlBQUwsR0FBb0J0cUIsTUFBMUI7QUFBQSxPQUFiLENBQVo7QUFDQSxhQUFPLE9BQU95aUIsRUFBUCxLQUFjLFVBQWQsR0FBMkIxWCxHQUFHLENBQUNnRSxJQUFKLENBQVMwVCxFQUFULENBQTNCLEdBQTBDMVgsR0FBakQ7QUFDRDs7OzJCQUVNd2dCLE0sRUFBUTlJLEUsRUFBSTtBQUNqQjtBQUNBO0FBQ0EsV0FBS29JLFNBQUw7O0FBRUEsVUFBTTNFLE1BQU0sR0FBRyxjQUFmO0FBQ0EsVUFBTTRFLEVBQUUsR0FBRztBQUNUQyxhQUFLLEVBQUUsSUFERTtBQUVUOUIsYUFBSyxFQUFFLElBRkU7QUFHVCtCLFlBQUksRUFBRSxLQUhHO0FBSVRDLGdCQUFRLEVBQUUsS0FKRDtBQUtUemdCLFlBQUksRUFBRTtBQUxHLE9BQVg7O0FBT0EsVUFBSSxPQUFPaVksRUFBUCxLQUFjLFVBQWxCLEVBQThCO0FBQzVCcUksVUFBRSxDQUFDckksRUFBSCxHQUFRQSxFQUFSO0FBQ0Q7O0FBRUQsVUFBTXlJLFFBQVEsR0FBR3BKLFNBQVMsQ0FBQ0MsS0FBVixDQUFnQnlILGNBQWhCLEVBQWpCO0FBQ0EsVUFBTTJCLE9BQU8sR0FBR3JKLFNBQVMsQ0FBQ0MsS0FBVixDQUFnQnlILGNBQWhCLEVBQWhCO0FBQ0EsVUFBTTdjLEdBQUcsR0FBR2hNLE1BQU0sQ0FBQzJLLElBQVAsQ0FBWWlnQixNQUFaLENBQVo7O0FBQ0EsVUFBTTNCLFNBQVMsR0FBRyxLQUFLdEQsZUFBTCxFQUFsQjs7QUFDQSxXQUFLLElBQUlwakIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR3lKLEdBQUcsQ0FBQzNNLE1BQXhCLEVBQWdDa0QsQ0FBQyxJQUFJLENBQXJDLEVBQXdDO0FBQ3RDLFlBQU1xakIsT0FBTyxHQUFHcUQsU0FBUyxDQUFDamQsR0FBRyxDQUFDekosQ0FBRCxDQUFKLENBQXpCO0FBQ0Fpb0IsZUFBTyxDQUFDMUIsV0FBUixDQUFvQmxELE9BQU8sQ0FBQ0ksWUFBUixFQUFwQixFQUE0QyxLQUFLMEMsbUJBQUwsQ0FBeUI5QyxPQUFPLENBQUNDLFNBQVIsRUFBekIsRUFBOEMrRSxNQUFNLENBQUM1ZSxHQUFHLENBQUN6SixDQUFELENBQUosQ0FBcEQsQ0FBNUM7QUFDRDs7QUFDRDRuQixRQUFFLENBQUN0Z0IsSUFBSCxDQUFRbEQsSUFBUixDQUFhNGUsTUFBYjtBQUNBNEUsUUFBRSxDQUFDdGdCLElBQUgsQ0FBUWxELElBQVIsQ0FBYTZqQixPQUFPLENBQUNFLEtBQVIsRUFBYjtBQUVBLGFBQU8sS0FBS3hKLE1BQUwsQ0FBWXlKLGdCQUFaLENBQTZCcEYsTUFBN0IsRUFBcUNpRixPQUFyQyxFQUE4Q0QsUUFBOUMsRUFBd0RKLEVBQXhELENBQVA7QUFDRDs7OzJCQW9CTVcsRyxFQUFLQyxNLEVBQVFDLFcsRUFBYTtBQUFBOztBQUMvQixhQUFPLElBQUloZSxPQUFKLENBQVksVUFBQ2tCLE9BQUQsRUFBVUssTUFBVjtBQUFBLGVBQXFCLE1BQUksQ0FBQzBjLE9BQUwsQ0FBYUgsR0FBYixFQUFrQkMsTUFBbEIsRUFBMEJDLFdBQTFCLEVBQXVDOWMsT0FBdkMsRUFBZ0RLLE1BQWhELENBQXJCO0FBQUEsT0FBWixDQUFQO0FBQ0Q7Ozs0Q0FFdUI4VCxXLEVBQWE7QUFDbkMsVUFBTXVELE9BQU8sR0FBRyxLQUFLUCxXQUFMLENBQWlCaEQsV0FBakIsQ0FBaEIsQ0FEbUMsQ0FFbkM7OztBQUNBLFVBQUl1RCxPQUFKLEVBQWE7QUFDWCxlQUFPQSxPQUFPLENBQUNtQixZQUFSLEVBQVA7QUFDRDs7QUFDRCxhQUFPMUUsV0FBUDtBQUNEOzs7NEJBRU95SSxHLEVBQUtDLE0sRUFBUUMsVyxFQUFhOWMsTyxFQUFTSyxNLEVBQVE7QUFDakQsVUFBTXZDLEdBQUcsR0FBR2hNLE1BQU0sQ0FBQ3dFLE9BQVAsQ0FBZXVtQixNQUFmLENBQVo7QUFDQSxVQUFNRyxRQUFRLEdBQUcvSixTQUFTLENBQUNDLEtBQVYsQ0FBZ0J5SCxjQUFoQixFQUFqQjtBQUNBcUMsY0FBUSxDQUFDcEMsV0FBVCxDQUFxQixJQUFyQixFQUEyQjNILFNBQVMsQ0FBQ0MsS0FBVixDQUFnQitKLGVBQWhCLEdBQWtDdEcsT0FBbEMsRUFBM0I7QUFDQXFHLGNBQVEsQ0FBQ3BDLFdBQVQsQ0FBcUIsSUFBckIsRUFBMkIsS0FBS3RILEVBQUwsQ0FBUWlDLEdBQVIsQ0FBWSxZQUFaLEVBQTBCb0IsT0FBMUIsRUFBM0I7QUFDQXFHLGNBQVEsQ0FBQ3BDLFdBQVQsQ0FBcUIsYUFBckIsRUFBb0NrQyxXQUFXLEdBQUcsR0FBSCxHQUFTLEdBQXhEO0FBQ0FFLGNBQVEsQ0FBQ3BDLFdBQVQsQ0FBcUIsSUFBckIsRUFBMkJnQyxHQUFHLENBQUM3YixJQUFKLENBQVMsR0FBVCxDQUEzQjs7QUFDQSxXQUFLLElBQUkxTSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHeUosR0FBRyxDQUFDM00sTUFBeEIsRUFBZ0NrRCxDQUFDLElBQUksQ0FBckMsRUFBd0M7QUFDdEMsWUFBTXFtQixFQUFFLEdBQUd6SCxTQUFTLENBQUNDLEtBQVYsQ0FBZ0J5SCxjQUFoQixFQUFYO0FBQ0FELFVBQUUsQ0FBQ3dDLE9BQUgsQ0FBVyxLQUFLQyx1QkFBTCxDQUE2QnJmLEdBQUcsQ0FBQ3pKLENBQUQsQ0FBSCxDQUFPLENBQVAsQ0FBN0IsQ0FBWDtBQUNBcW1CLFVBQUUsQ0FBQ0UsV0FBSCxDQUFlLFFBQWYsRUFBeUI5YyxHQUFHLENBQUN6SixDQUFELENBQUgsQ0FBTyxDQUFQLEVBQVUwTSxJQUFWLENBQWUsR0FBZixDQUF6QjtBQUNBaWMsZ0JBQVEsQ0FBQ0ksUUFBVCxDQUFrQjFDLEVBQUUsQ0FBQzhCLEtBQUgsRUFBbEI7QUFDRDs7QUFDRCxVQUFNYSxFQUFFLEdBQUdwSyxTQUFTLENBQUNDLEtBQVYsQ0FBZ0JvSyxVQUFoQixDQUEyQixRQUEzQixDQUFYO0FBQ0EsVUFBTXJCLEVBQUUsR0FBRztBQUNUN0IsYUFBSyxFQUFFLElBREU7QUFFVGdDLGdCQUFRLEVBQUUsSUFGRDtBQUdURixhQUFLLEVBQUUsSUFIRTtBQUlUcUIsYUFBSyxFQUFFO0FBQUEsaUJBQU1sZCxNQUFNLEVBQVo7QUFBQSxTQUpFO0FBS1R1VCxVQUFFLEVBQUUsWUFBQzRKLFVBQUQsRUFBYUMsTUFBYixFQUFxQkMsU0FBckIsRUFBbUM7QUFDckMsY0FBTUMsVUFBVSxHQUFHLElBQUkxSyxTQUFTLENBQUNDLEtBQVYsQ0FBZ0IwSyxlQUFwQixFQUFuQjs7QUFEcUMscUJBRWRGLFNBQVMsQ0FBQ0csY0FBVixDQUF5QixXQUF6QixLQUF5QyxFQUYzQjtBQUFBLGNBRTdCdkUsVUFGNkIsUUFFN0JBLFVBRjZCLEVBRStCOzs7QUFDcEUsY0FBTXBkLEdBQUcsR0FBRyxFQUFaOztBQUNBLGVBQUssSUFBSTdILEdBQUMsR0FBRyxDQUFiLEVBQWdCQSxHQUFDLEdBQUdpbEIsVUFBVSxDQUFDbm9CLE1BQS9CLEVBQXVDa0QsR0FBQyxJQUFJLENBQTVDLEVBQStDO0FBQzdDNkgsZUFBRyxDQUFDb2QsVUFBVSxDQUFDamxCLEdBQUQsQ0FBVixDQUFjeXBCLE9BQWQsRUFBRCxDQUFILEdBQStCLEVBQS9COztBQUNBLGlCQUFLLElBQUk1YyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHb1ksVUFBVSxDQUFDamxCLEdBQUQsQ0FBVixDQUFjaWxCLFVBQWQsQ0FBeUJub0IsTUFBN0MsRUFBcUQrUCxDQUFDLElBQUksQ0FBMUQsRUFBNkQ7QUFDM0Qsa0JBQU1sUSxFQUFFLEdBQUdzb0IsVUFBVSxDQUFDamxCLEdBQUQsQ0FBVixDQUFjaWxCLFVBQWQsQ0FBeUJwWSxDQUF6QixDQUFYO0FBQ0FoRixpQkFBRyxDQUFDb2QsVUFBVSxDQUFDamxCLEdBQUQsQ0FBVixDQUFjeXBCLE9BQWQsRUFBRCxDQUFILENBQTZCOXNCLEVBQUUsQ0FBQzhzQixPQUFILEVBQTdCLElBQTZDOXNCLEVBQUUsQ0FBQ3NvQixVQUFILENBQWNRLEdBQWQsQ0FBa0IsVUFBQ2lFLEdBQUQsRUFBUztBQUN0RSxvQkFBTUMsT0FBTyxHQUFHRCxHQUFHLENBQUNFLFNBQUosQ0FBYyxtQkFBZCxDQUFoQjtBQUNBTiwwQkFBVSxDQUFDTyxXQUFYLENBQXVCRixPQUF2QjtBQUNBRCxtQkFBRyxDQUFDRSxTQUFKLENBQWMsbUJBQWQsSUFBcUNOLFVBQVUsQ0FBQ1EsUUFBWCxFQUFyQyxDQUhzRSxDQUdWOztBQUM1RCx1QkFBT3JzQixNQUFNLENBQUM2TyxNQUFQLENBQWMsRUFBZCxFQUFrQm9kLEdBQUcsQ0FBQ0UsU0FBdEIsQ0FBUDtBQUNELGVBTDRDLENBQTdDO0FBTUQ7QUFDRjs7QUFDRGplLGlCQUFPLENBQUM5RCxHQUFELENBQVA7QUFDRDtBQXRCUSxPQUFYO0FBd0JBLGFBQU9taEIsRUFBRSxDQUFDeEMsWUFBSCxDQUFnQixpQkFBaEIsRUFBbUNtQyxRQUFuQyxFQUE2Q2YsRUFBN0MsQ0FBUDtBQUNEOzs7NkJBRVF6ckIsSSxFQUFNYSxLLEVBQU87QUFDcEI7QUFDQTtBQUNBLFVBQU1pckIsT0FBTyxHQUFHckosU0FBUyxDQUFDQyxLQUFWLENBQWdCeUgsY0FBaEIsRUFBaEI7QUFDQTJCLGFBQU8sQ0FBQzFCLFdBQVIsQ0FBb0IsS0FBcEIsRUFBMkJwcUIsSUFBM0I7QUFDQThyQixhQUFPLENBQUMxQixXQUFSLENBQW9CcHFCLElBQXBCLEVBQTBCYSxLQUExQjtBQUNBLFdBQUtpaUIsRUFBTCxDQUFRbUgsY0FBUixDQUNFLEtBQUtyRixNQUFMLENBQVl4Z0IsR0FBWixDQUFnQix5QkFBaEIsQ0FERixFQUVFLEtBQUswZSxFQUFMLENBQVFpQyxHQUFSLENBQVksS0FBS0gsTUFBTCxDQUFZeGdCLEdBQVosQ0FBZ0IsMkJBQWhCLENBQVosQ0FGRixFQUdFMG5CLE9BSEY7QUFLQSxhQUFPLEtBQUtoSixFQUFMLENBQVFzSCxXQUFSLENBQW9CcHFCLElBQXBCLEVBQTBCYSxLQUExQixDQUFQO0FBQ0Q7Ozs2QkFFUWIsSSxFQUFNO0FBQ2IsYUFBTyxLQUFLOGlCLEVBQUwsQ0FBUWlDLEdBQVIsQ0FBWS9rQixJQUFaLENBQVA7QUFDRDs7O2tDQUVhNHRCLE0sRUFBUTtBQUFFO0FBQ3RCLFVBQU1scUIsSUFBSSxHQUFHLElBQUk0VSxHQUFKLEVBQWI7O0FBRUEsYUFBTzVVLElBQUksQ0FBQ21xQixJQUFMLEdBQVlELE1BQW5CLEVBQTJCO0FBQ3pCLFlBQU1FLElBQUksR0FBRyxLQUFLNUMsZUFBTCxFQUFiLENBRHlCLENBR3pCOztBQUNBLGFBQUssSUFBSXJuQixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHaXFCLElBQUksQ0FBQ250QixNQUF6QixFQUFpQ2tELENBQUMsSUFBSSxDQUF0QyxFQUF5QztBQUN2Q0gsY0FBSSxDQUFDa0MsR0FBTCxDQUFTa29CLElBQUksQ0FBQ2pxQixDQUFELENBQUosQ0FBUXNnQixFQUFqQixFQUFxQjJKLElBQUksQ0FBQ2pxQixDQUFELENBQXpCO0FBQ0QsU0FOd0IsQ0FRekI7OztBQUNBLFlBQUksQ0FBQyxLQUFLaWpCLGVBQUwsQ0FBcUIsYUFBckIsQ0FBTCxFQUEwQztBQUN4QztBQUNEOztBQUVELGFBQUtpSCxhQUFMO0FBQ0Q7O0FBRUQsYUFBTztBQUNMcnFCLFlBQUkscUJBQU1BLElBQUksQ0FBQ2dKLE1BQUwsRUFBTixDQURDO0FBRUxzaEIsZUFBTyxFQUFFLEtBQUtsSCxlQUFMLENBQXFCLGFBQXJCO0FBRkosT0FBUDtBQUlEOzs7bUNBRWM5bUIsSSxFQUFNYSxLLEVBQU87QUFDMUIsV0FBSzJoQixNQUFMLENBQVlrSSxVQUFaLEdBQXlCWSxhQUF6QixDQUF1Q3RyQixJQUF2QyxFQUE2Q2EsS0FBN0M7QUFDQSxhQUFPLEtBQUsyaEIsTUFBTCxDQUFZNkgsWUFBWixDQUF5QixhQUF6QixDQUFQO0FBQ0Q7OzsyQ0FFc0I7QUFDckIsV0FBSzRELGlCQUFMLEdBQXlCO0FBQUU5SixVQUFFLEVBQUU7QUFBTixPQUF6Qjs7QUFDQSxVQUFNNkMsY0FBYyxHQUFHLEtBQUtDLGVBQUwsRUFBdkI7O0FBQ0EsVUFBTTNaLEdBQUcsR0FBR2hNLE1BQU0sQ0FBQzJLLElBQVAsQ0FBWSthLGNBQVosQ0FBWjs7QUFDQSxXQUFLLElBQUluakIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR3lKLEdBQUcsQ0FBQzNNLE1BQXhCLEVBQWdDa0QsQ0FBQyxJQUFJLENBQXJDLEVBQXdDO0FBQ3RDLFlBQU1xakIsT0FBTyxHQUFHRixjQUFjLENBQUMxWixHQUFHLENBQUN6SixDQUFELENBQUosQ0FBOUI7QUFDQSxZQUFNcXFCLEtBQUssR0FBR2hILE9BQU8sQ0FBQ21CLFlBQVIsRUFBZDs7QUFDQSxZQUFJNkYsS0FBSixFQUFXO0FBQ1QsZUFBS0QsaUJBQUwsQ0FBdUJDLEtBQXZCLElBQWdDNWdCLEdBQUcsQ0FBQ3pKLENBQUQsQ0FBbkM7QUFDRDtBQUNGOztBQUNELGFBQU8sS0FBS29xQixpQkFBWjtBQUNEOzs7MkNBRXNCO0FBQUE7O0FBQ3JCLFVBQUksQ0FBQyxLQUFLQSxpQkFBVixFQUE2QjtBQUMzQixhQUFLRSxvQkFBTDtBQUNELE9BSG9CLENBSXJCOzs7QUFDQSxVQUFNemlCLEdBQUcsR0FBRyxLQUFLdWYsWUFBTCxHQUFvQnZwQixLQUFwQixFQUFaOztBQUxxQixpQ0FPWm1DLENBUFk7QUFRbkI2SCxXQUFHLENBQUM3SCxDQUFELENBQUgsR0FBU3ZDLE1BQU0sQ0FBQzJLLElBQVAsQ0FBWVAsR0FBRyxDQUFDN0gsQ0FBRCxDQUFmLEVBQW9CeWlCLE1BQXBCLENBQTJCLFVBQUE5bEIsRUFBRTtBQUFBLGlCQUFJLE1BQUksQ0FBQ3l0QixpQkFBTCxDQUF1Qnp0QixFQUF2QixDQUFKO0FBQUEsU0FBN0IsRUFBNkR3b0IsTUFBN0QsQ0FBb0UsVUFBQ0MsR0FBRCxFQUFNem9CLEVBQU47QUFBQSxtQ0FDeEV5b0IsR0FEd0Usc0JBRXJFLE1BQUksQ0FBQ2dGLGlCQUFMLENBQXVCenRCLEVBQXZCLENBRnFFLEVBRXhDa0wsR0FBRyxDQUFDN0gsQ0FBRCxDQUFILENBQU9yRCxFQUFQLENBRndDO0FBQUEsU0FBcEUsRUFHTCxFQUhLLENBQVQ7QUFSbUI7O0FBT3JCLFdBQUssSUFBSXFELENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUc2SCxHQUFHLENBQUMvSyxNQUF4QixFQUFnQ2tELENBQUMsSUFBSSxDQUFyQyxFQUF3QztBQUFBLGNBQS9CQSxDQUErQjtBQUt2Qzs7QUFFRCxhQUFPNkgsR0FBUDtBQUNEOzs7aUNBbnBCbUI0QixHLEVBQUs7QUFDdkIsVUFBTTVCLEdBQUcsR0FBRyxFQUFaOztBQUNBLFdBQUssSUFBSTdILENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUd5SixHQUFHLENBQUMzTSxNQUF4QixFQUFnQ2tELENBQUMsSUFBSSxDQUFyQyxFQUF3QztBQUN0QzZILFdBQUcsQ0FBQ3pELElBQUosQ0FBU3FGLEdBQUcsQ0FBQ3pKLENBQUQsQ0FBSCxDQUFPNHBCLFNBQWhCO0FBQ0Q7O0FBQ0QsYUFBTy9oQixHQUFQO0FBQ0Q7Ozs0QkF3ZmMxTCxJLEVBQU07QUFDbkIsVUFBTW91QixPQUFPLEdBQUczTCxTQUFTLENBQUNDLEtBQVYsQ0FBZ0JvSyxVQUFoQixDQUEyQixRQUEzQixDQUFoQjs7QUFDQSxVQUFJc0IsT0FBSixFQUFhO0FBQ1gsWUFBTUMsU0FBUyxHQUFHNUwsU0FBUyxDQUFDQyxLQUFWLENBQWdCeUgsY0FBaEIsRUFBbEI7QUFDQWtFLGlCQUFTLENBQUNqRSxXQUFWLENBQXNCLE1BQXRCLEVBQThCcHFCLElBQTlCO0FBQ0FvdUIsZUFBTyxDQUFDL0QsWUFBUixDQUFxQixTQUFyQixFQUFnQ2dFLFNBQWhDLEVBQTJDLEVBQTNDO0FBQ0Q7QUFDRjs7OzRCQUVjcnVCLEksRUFBTTtBQUNuQixVQUFNb3VCLE9BQU8sR0FBRzNMLFNBQVMsQ0FBQ0MsS0FBVixDQUFnQm9LLFVBQWhCLENBQTJCLFFBQTNCLENBQWhCOztBQUNBLFVBQUlzQixPQUFKLEVBQWE7QUFDWCxZQUFNQyxTQUFTLEdBQUc1TCxTQUFTLENBQUNDLEtBQVYsQ0FBZ0J5SCxjQUFoQixFQUFsQjtBQUNBa0UsaUJBQVMsQ0FBQ2pFLFdBQVYsQ0FBc0IsTUFBdEIsRUFBOEJwcUIsSUFBOUI7QUFDQW91QixlQUFPLENBQUMvRCxZQUFSLENBQXFCLFNBQXJCLEVBQWdDZ0UsU0FBaEMsRUFBMkMsRUFBM0M7QUFDRDtBQUNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM21CSDs7SUFFcUJDLGM7Ozs7O0FBQ25CLDBCQUFZaE0sUUFBWixFQUFzQjtBQUFBOztBQUFBOztBQUNwQix3RkFBTUEsUUFBTjtBQUNBNUgsV0FBTyxDQUFDc0ksR0FBUixXQUFlLE1BQUt4YyxXQUFMLENBQWlCeEcsSUFBaEMsa0JBRm9CLENBRWdDOztBQUVwRCxRQUFJLE1BQUs0akIsWUFBVCxFQUF1QjtBQUNyQixZQUFLZCxFQUFMLENBQVEwRixXQUFSLEdBQXNCK0YsTUFBdEIsR0FBK0I7QUFBQSxlQUFNLENBQU47QUFBQSxPQUEvQjs7QUFDQSxZQUFLekwsRUFBTCxDQUFRMEYsV0FBUixHQUFzQmdHLGNBQXRCLEdBQXVDO0FBQUEsZUFBTSxDQUFOO0FBQUEsT0FBdkM7QUFDRDs7QUFQbUI7QUFRckI7Ozs7aUNBRVk7QUFDWDtBQUNBLGFBQU8sS0FBSzFMLEVBQUwsQ0FBUWdCLGFBQVIsQ0FBc0IsY0FBdEIsRUFBc0MsWUFBdEMsQ0FBUDtBQUNEOzs7a0NBRWFWLEUsRUFBSTtBQUNoQjtBQUNBO0FBQ0E7QUFDQSxVQUFNMVgsR0FBRyxHQUFHLEtBQUtvWCxFQUFMLENBQVFnQixhQUFSLENBQXNCLGNBQXRCLEVBQXNDLGVBQXRDLENBQVo7O0FBQ0EsVUFBSSxPQUFPVixFQUFQLEtBQWMsVUFBbEIsRUFBOEI7QUFDNUJBLFVBQUU7QUFDSDs7QUFDRCxhQUFPMVgsR0FBUDtBQUNEOzs7K0JBRVUwWCxFLEVBQUk7QUFDYjtBQUNBLFVBQU0xWCxHQUFHLEdBQUcsS0FBS29YLEVBQUwsQ0FBUWdCLGFBQVIsQ0FBc0IsY0FBdEIsRUFBc0MsWUFBdEMsQ0FBWjs7QUFDQSxVQUFJLE9BQU9WLEVBQVAsS0FBYyxVQUFsQixFQUE4QjtBQUM1QkEsVUFBRTtBQUNIOztBQUNELGFBQU8xWCxHQUFQO0FBQ0QsSyxDQUVEOzs7O2tDQUNjMFgsRSxFQUFJO0FBQ2hCO0FBQ0EsVUFBTTFYLEdBQUcsR0FBRyxLQUFLb1gsRUFBTCxDQUFRZ0IsYUFBUixDQUFzQixjQUF0QixFQUFzQyxlQUF0QyxDQUFaOztBQUNBLFVBQUksT0FBT1YsRUFBUCxLQUFjLFVBQWxCLEVBQThCO0FBQzVCQSxVQUFFO0FBQ0g7O0FBQ0QsYUFBTzFYLEdBQVA7QUFDRDs7O21DQUVjO0FBQUU7QUFDZixVQUFJLEtBQUtrWSxZQUFULEVBQXVCO0FBQ3JCLFlBQUksS0FBS0MsWUFBTCxPQUF3QixDQUE1QixFQUErQjtBQUM3QixpQkFBTyxLQUFLNkYsYUFBTCxDQUFtQixDQUFuQixDQUFQO0FBQ0Q7O0FBQ0QsZUFBTyxJQUFQO0FBQ0Q7O0FBQ0QsYUFBTyxLQUFQO0FBQ0Q7Ozs7RUF0RHlDL0Usc0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0Y1QztBQUVBLElBQU04SixTQUFTLEdBQUdwZSxNQUFNLENBQUMsV0FBRCxDQUF4QjtBQUNBLElBQU1xZSxpQkFBaUIsR0FBR3JlLE1BQU0sQ0FBQyxtQkFBRCxDQUFoQzs7SUFFcUI2UyxrQjs7Ozs7d0JBQ0c7QUFDcEIsVUFBSSxDQUFDLEtBQUt1TCxTQUFMLENBQUwsRUFBc0I7QUFDcEIsYUFBS0EsU0FBTCxJQUFrQixJQUFJdkwsa0JBQUosQ0FBdUJ3TCxpQkFBdkIsQ0FBbEI7QUFDRDs7QUFDRCxhQUFPLEtBQUtELFNBQUwsQ0FBUDtBQUNEOzs7QUFFRCw4QkFBWUUsUUFBWixFQUFzQjtBQUFBOztBQUFBOztBQUNwQixRQUFJQSxRQUFRLEtBQUtELGlCQUFqQixFQUFvQztBQUNsQyxZQUFNLElBQUk3TCxLQUFKLENBQVUsbUVBQVYsQ0FBTjtBQUNEOztBQUNELFNBQUsrQixNQUFMLEdBQWNDLFFBQVEsQ0FBQ0MsVUFBVCxDQUFvQixxQkFBcEIsQ0FBZDtBQUNBLFNBQUs4SixhQUFMLEdBQXFCLEtBQXJCO0FBQ0EsU0FBS0MsY0FBTCxHQUFzQixJQUF0QjtBQUNBLFNBQUtDLGNBQUwsR0FBc0IsSUFBdEI7QUFDQSxTQUFLQyxjQUFMLEdBQXNCLElBQXRCO0FBRUFyVSxXQUFPLENBQUNzSSxHQUFSLFdBQWUsS0FBS3hjLFdBQUwsQ0FBaUJ4RyxJQUFoQyxrQkFWb0IsQ0FVZ0M7QUFFcEQ7O0FBQ0EsU0FBS2d2QixrQkFBTCxHQUEwQnZNLFNBQVMsQ0FBQ0MsS0FBVixDQUFnQnVNLGVBQTFDOztBQUNBeE0sYUFBUyxDQUFDQyxLQUFWLENBQWdCdU0sZUFBaEIsR0FBa0MsVUFBQy9FLEVBQUQsRUFBUTtBQUN4QyxVQUFJeGUsR0FBSjs7QUFDQSxVQUFJLEtBQUksQ0FBQ2tqQixhQUFULEVBQXdCO0FBQ3RCbGpCLFdBQUcsR0FBRyxLQUFJLENBQUN3akIsZUFBTCxDQUFxQmhGLEVBQXJCLENBQU47QUFDRCxPQUZELE1BRU87QUFDTHhlLFdBQUcsR0FBRyxLQUFJLENBQUNzakIsa0JBQUwsQ0FBd0J2dEIsSUFBeEIsQ0FBNkJnaEIsU0FBUyxDQUFDQyxLQUF2QyxFQUE4Q3dILEVBQTlDLENBQU47QUFDRDs7QUFDRCxhQUFPeGUsR0FBUDtBQUNELEtBUkQ7O0FBVUEsU0FBS3lqQixhQUFMLEdBQXFCMU0sU0FBUyxDQUFDMk0sY0FBVixDQUF5QkMsVUFBOUM7O0FBQ0E1TSxhQUFTLENBQUMyTSxjQUFWLENBQXlCQyxVQUF6QixHQUFzQyxZQUFhO0FBQUE7O0FBQUEsd0NBQVRsa0IsSUFBUztBQUFUQSxZQUFTO0FBQUE7O0FBQ2pELFVBQU1PLEdBQUcsR0FBRyw0QkFBSSxDQUFDeWpCLGFBQUwsRUFBbUIxdEIsSUFBbkIsNkJBQXdCZ2hCLFNBQVMsQ0FBQzJNLGNBQWxDLFNBQXFEamtCLElBQXJELEVBQVo7O0FBQ0EsVUFBSSxPQUFPLEtBQUksQ0FBQzBqQixjQUFaLEtBQStCLFVBQW5DLEVBQStDO0FBQzdDO0FBRDZDLG9DQUV0QjNMLGtCQUFrQixDQUFDb00sV0FBbkIsRUFGc0I7QUFBQSxZQUVyQy9NLFVBRnFDLHlCQUVyQ0EsVUFGcUM7O0FBRzdDLFlBQUksQ0FBQ0EsVUFBTCxFQUFpQjtBQUNmLGdCQUFNLElBQUlNLEtBQUosQ0FBVSxpREFBVixDQUFOO0FBQ0Q7O0FBQ0QsWUFBTUwsTUFBTSxHQUFHVSxrQkFBa0IsQ0FBQ3FNLGNBQW5CLENBQWtDaE4sVUFBbEMsQ0FBZjtBQUNBLFlBQU1PLEVBQUUsR0FBR04sTUFBTSxDQUFDTyxTQUFQLEVBQVgsQ0FQNkMsQ0FRN0M7O0FBQ0EsYUFBSSxDQUFDK0wsY0FBTCxHQUFzQixJQUFJUix1REFBSixDQUFtQjtBQUFFeEwsWUFBRSxFQUFGQTtBQUFGLFNBQW5CLENBQXRCLENBVDZDLENBU0s7O0FBQ2xELFlBQU15RSxHQUFHLEdBQUc7QUFBRWhGLG9CQUFVLEVBQVZBLFVBQUY7QUFBY3VNLHdCQUFjLEVBQUUsS0FBSSxDQUFDQTtBQUFuQyxTQUFaLENBVjZDLENBVzdDO0FBQ0E7O0FBQ0EsWUFBTVUsV0FBVyxHQUFHaE4sTUFBTSxDQUFDK00sY0FBUCxFQUFwQjs7QUFDQSxZQUFJQyxXQUFKLEVBQWlCO0FBQ2YsZUFBSSxDQUFDVCxjQUFMLEdBQXNCLElBQUlULHVEQUFKLENBQW1CO0FBQUV4TCxjQUFFLEVBQUUwTSxXQUFXLENBQUN6TSxTQUFaO0FBQU4sV0FBbkIsQ0FBdEI7QUFDQXdFLGFBQUcsQ0FBQ3dILGNBQUosR0FBcUIsS0FBSSxDQUFDQSxjQUExQjtBQUNEOztBQUNELGFBQUksQ0FBQ0YsY0FBTCxDQUFvQnRILEdBQXBCOztBQUNBLGFBQUksQ0FBQ3NILGNBQUwsR0FBc0IsSUFBdEI7QUFDRDs7QUFDRCxhQUFPbmpCLEdBQVA7QUFDRCxLQXhCRDtBQXlCRDs7OzttQ0FFYztBQUNiLGFBQU8sT0FBTyxLQUFLbWpCLGNBQVosS0FBK0IsVUFBdEM7QUFDRDs7O29DQUVlM0UsRSxFQUFJO0FBQ2xCekgsZUFBUyxDQUFDQyxLQUFWLENBQWdCK00sY0FBaEIsQ0FBK0IsQ0FBQyxDQUFoQztBQUNBLFVBQU1sTCxPQUFPLEdBQUc5QixTQUFTLENBQUNDLEtBQVYsQ0FBZ0I4QixVQUFoQixFQUFoQjtBQUVBRCxhQUFPLENBQUM2RixXQUFSLENBQW9CLGtCQUFwQixFQUF3QyxDQUFDLENBQXpDO0FBQ0E3RixhQUFPLENBQUM2RixXQUFSLENBQW9CLGFBQXBCLEVBQW1DLEtBQW5DO0FBQ0E3RixhQUFPLENBQUM2RixXQUFSLENBQW9CLGlCQUFwQixFQUF1QyxLQUF2QztBQUNBN0YsYUFBTyxDQUFDNkYsV0FBUixDQUFvQixvQkFBcEIsRUFBMEMsS0FBMUM7QUFDQTdGLGFBQU8sQ0FBQzZGLFdBQVIsQ0FBb0IsY0FBcEIsRUFBb0MsS0FBcEM7QUFDQTdGLGFBQU8sQ0FBQzZGLFdBQVIsQ0FBb0IsWUFBcEIsRUFBa0MsRUFBbEM7QUFDQTdGLGFBQU8sQ0FBQzZGLFdBQVIsQ0FBb0IsV0FBcEIsRUFBaUNGLEVBQUUsQ0FBQ3hFLFdBQUgsQ0FBZSxLQUFLZCxNQUFMLENBQVl4Z0IsR0FBWixDQUFnQixpQkFBaEIsQ0FBZixDQUFqQztBQUNBbWdCLGFBQU8sQ0FBQzZGLFdBQVIsQ0FBb0Isb0JBQXBCLEVBQTBDLENBQUMsQ0FBM0M7O0FBRUEsVUFBSSxDQUFDN0YsT0FBTyxDQUFDaUUsV0FBUixFQUFMLEVBQTRCO0FBQzFCakUsZUFBTyxDQUFDRyxLQUFSO0FBQ0Q7O0FBRUQsVUFBTWdMLFVBQVUsR0FBR2pOLFNBQVMsQ0FBQ0MsS0FBVixDQUFnQkMsYUFBaEIsRUFBbkI7O0FBQ0EsVUFBSStNLFVBQUosRUFBZ0I7QUFDZCxZQUFNQyxZQUFZLEdBQUdELFVBQVUsQ0FBQ0UsZUFBWCxFQUFyQjs7QUFDQSxZQUFJRCxZQUFKLEVBQWtCO0FBQ2hCRCxvQkFBVSxDQUFDRywwQkFBWCxDQUFzQ0YsWUFBdEM7QUFDRDtBQUNGOztBQUVEcEwsYUFBTyxDQUFDdUwsV0FBUixDQUFvQixPQUFwQixFQUE2QixTQUE3QixFQXpCa0IsQ0F5QnVCOztBQUV6QyxVQUFJQyxHQUFHLEdBQUc3RixFQUFFLENBQUN4RSxXQUFILENBQWUsS0FBZixDQUFWO0FBQ0FxSyxTQUFHLEdBQUd0TixTQUFTLENBQUNDLEtBQVYsQ0FBZ0JzTixVQUFoQixLQUErQkQsR0FBRyxDQUFDdG9CLEtBQUosQ0FBVSxXQUFWLEVBQXVCLENBQXZCLENBQXJDO0FBQ0E4YyxhQUFPLENBQUM2RixXQUFSLENBQW9CLEtBQXBCLEVBQTJCMkYsR0FBM0I7QUFFQSxhQUFPLGNBQVA7QUFDRCxLLENBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O3FDQUNpQnZOLE0sRUFBUTtBQUN2QjtBQUNBLFVBQUk5VyxHQUFKOztBQUNBLFVBQUk4VyxNQUFKLEVBQVk7QUFDVixZQUFNeU4sYUFBYSxHQUFHLE9BQU96TixNQUFNLENBQUMwTixrQkFBZCxLQUFxQyxVQUEzRDtBQUNBLFlBQU1DLFlBQVksR0FBRyxPQUFPM04sTUFBTSxDQUFDNE4saUJBQWQsS0FBb0MsVUFBekQ7O0FBQ0EsWUFBSSxDQUFDSCxhQUFELElBQWtCLENBQUNFLFlBQXZCLEVBQXFDO0FBQ25DLGdCQUFNLElBQUl0TixLQUFKLENBQVUsdUNBQVYsQ0FBTjtBQUNEOztBQUNEblgsV0FBRyxHQUFHOFcsTUFBTSxDQUFDTyxTQUFQLEdBQW1CZSxhQUFuQixDQUFpQyxjQUFqQyxFQUFpRCxhQUFqRCxDQUFOO0FBQ0QsT0FQRCxNQU9PO0FBQ0w7QUFDQXBZLFdBQUcsR0FBRyxLQUFLb2pCLGNBQUwsQ0FBb0J0TSxNQUFwQixDQUEyQk8sU0FBM0IsR0FBdUNlLGFBQXZDLENBQXFELGNBQXJELEVBQXFFLGFBQXJFLENBQU47QUFDRCxPQWJzQixDQWN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxXQUFLZ0wsY0FBTCxHQUFzQixJQUF0QjtBQUNBLFdBQUtDLGNBQUwsR0FBc0IsSUFBdEI7QUFDQSxhQUFPcmpCLEdBQVA7QUFDRDs7O29DQXdDZXhELEksRUFBTWtiLEUsRUFBSU4sRSxFQUFJO0FBQUE7O0FBQzVCO0FBRDRCLG1DQUVHSSxrQkFBa0IsQ0FBQ29NLFdBQW5CLEVBRkg7QUFBQSxVQUVwQmUsTUFGb0IsMEJBRXBCQSxNQUZvQjtBQUFBLFVBRVo5TixVQUZZLDBCQUVaQSxVQUZZOztBQUc1QixVQUFJOE4sTUFBSixFQUFZO0FBQ1Y7QUFDQTNWLGVBQU8sQ0FBQ3NJLEdBQVIsbUJBQXVCVCxVQUF2Qiw2QkFGVSxDQUVrRDtBQUM1RDs7QUFDQSxhQUFLWSxnQkFBTCxDQUFzQkQsa0JBQWtCLENBQUNxTSxjQUFuQixDQUFrQ2hOLFVBQWxDLENBQXRCLEVBSlUsQ0FLVjtBQUNEOztBQUNELFdBQUtxTSxhQUFMLEdBQXFCLENBQUMsQ0FBQzFtQixJQUF2QixDQVY0QixDQVVDOztBQUU3QjRhLFFBQUUsQ0FBQ2dCLGFBQUgsQ0FBaUIsY0FBakIsRUFBaUMsV0FBakMsRUFBOEMsSUFBOUMsRUFBb0QsS0FBcEQsRUFaNEIsQ0FZZ0M7O0FBRTVELFVBQUlwWSxHQUFHLEdBQUcsSUFBVjs7QUFFQSxVQUFJeEQsSUFBSixFQUFVO0FBQUU7QUFDVjtBQUNBd0QsV0FBRyxHQUFHLElBQUk0QyxPQUFKLENBQVksVUFBQWtCLE9BQU87QUFBQSxpQkFBSSxNQUFJLENBQUNxZixjQUFMLEdBQXNCcmYsT0FBMUI7QUFBQSxTQUFuQixDQUFOLENBRlEsQ0FFcUQ7O0FBQzdELFlBQUksT0FBTzRULEVBQVAsS0FBYyxVQUFsQixFQUE4QjtBQUM1QjFYLGFBQUcsR0FBR0EsR0FBRyxDQUFDZ0UsSUFBSixDQUFTMFQsRUFBVCxDQUFOO0FBQ0Q7QUFDRjs7QUFFRCxhQUFPMVgsR0FBUDtBQUNEOzs7a0NBL0RvQjtBQUFFO0FBQ3JCO0FBQ0EsVUFBTTRrQixVQUFVLEdBQUc3TixTQUFTLENBQUNDLEtBQVYsQ0FBZ0I4QixVQUFoQixHQUE2Qk8sR0FBN0IsQ0FBaUMsWUFBakMsQ0FBbkI7O0FBQ0EsVUFBSSxNQUFNdUwsVUFBVSxDQUFDM3ZCLE1BQXJCLEVBQTZCO0FBQzNCLGVBQU87QUFBRTB2QixnQkFBTSxFQUFFO0FBQVYsU0FBUDtBQUNEOztBQUNELFVBQUksTUFBTUMsVUFBVSxDQUFDM3ZCLE1BQXJCLEVBQTZCO0FBQzNCLGVBQU87QUFBRTB2QixnQkFBTSxFQUFFLElBQVY7QUFBZ0I5TixvQkFBVSxFQUFFK04sVUFBVSxDQUFDLENBQUQsQ0FBVixDQUFjbkssT0FBZCxFQUE1QjtBQUFxRHhDLHFCQUFXLEVBQUUyTSxVQUFVLENBQUMsQ0FBRCxDQUFWLENBQWNDLGVBQWQ7QUFBbEUsU0FBUDtBQUNEOztBQUNELFVBQUksTUFBTUQsVUFBVSxDQUFDM3ZCLE1BQXJCLEVBQTZCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLGFBQUssSUFBSWtELENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUd5c0IsVUFBVSxDQUFDM3ZCLE1BQS9CLEVBQXVDa0QsQ0FBQyxJQUFJLENBQTVDLEVBQStDO0FBQzdDLGNBQUksT0FBT3lzQixVQUFVLENBQUMsQ0FBRCxDQUFWLENBQWNKLGtCQUFyQixLQUE0QyxVQUFoRCxFQUE0RDtBQUMxRCxtQkFBTztBQUFFRyxvQkFBTSxFQUFFLElBQVY7QUFBZ0I5Tix3QkFBVSxFQUFFK04sVUFBVSxDQUFDenNCLENBQUQsQ0FBVixDQUFjc2lCLE9BQWQsRUFBNUI7QUFBcUR4Qyx5QkFBVyxFQUFFMk0sVUFBVSxDQUFDenNCLENBQUQsQ0FBVixDQUFjMHNCLGVBQWQ7QUFBbEUsYUFBUDtBQUNEO0FBQ0Y7O0FBQ0QsY0FBTSxJQUFJMU4sS0FBSixDQUFVLDRCQUFWLENBQU47QUFDRCxPQW5Ca0IsQ0FvQm5CO0FBQ0E7OztBQUNBLFlBQU0sSUFBSUEsS0FBSixDQUFVLHVCQUFWLENBQU47QUFDRCxLLENBRUQ7QUFDQTtBQUNBO0FBQ0E7Ozs7bUNBRXNCTixVLEVBQVk7QUFDaEMsVUFBTUMsTUFBTSxHQUFHQyxTQUFTLENBQUNDLEtBQVYsQ0FBZ0JDLGFBQWhCLEdBQWdDcUMsWUFBaEMsR0FBK0N6QyxVQUEvQyxDQUFmOztBQUNBLFVBQUksQ0FBQ0MsTUFBTCxFQUFhO0FBQ1gsY0FBTSxJQUFJSyxLQUFKLGVBQWlCTixVQUFqQixpQ0FBTjtBQUNEOztBQUNELGFBQU9DLE1BQVA7QUFDRCIsImZpbGUiOiJOMTlIZWxwZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07XG4iLCIvLyAyMi4xLjMuMzEgQXJyYXkucHJvdG90eXBlW0BAdW5zY29wYWJsZXNdXG52YXIgVU5TQ09QQUJMRVMgPSByZXF1aXJlKCcuL193a3MnKSgndW5zY29wYWJsZXMnKTtcbnZhciBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuaWYgKEFycmF5UHJvdG9bVU5TQ09QQUJMRVNdID09IHVuZGVmaW5lZCkgcmVxdWlyZSgnLi9faGlkZScpKEFycmF5UHJvdG8sIFVOU0NPUEFCTEVTLCB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgQXJyYXlQcm90b1tVTlNDT1BBQkxFU11ba2V5XSA9IHRydWU7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIENvbnN0cnVjdG9yLCBuYW1lLCBmb3JiaWRkZW5GaWVsZCkge1xuICBpZiAoIShpdCBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSB8fCAoZm9yYmlkZGVuRmllbGQgIT09IHVuZGVmaW5lZCAmJiBmb3JiaWRkZW5GaWVsZCBpbiBpdCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IobmFtZSArICc6IGluY29ycmVjdCBpbnZvY2F0aW9uIScpO1xuICB9IHJldHVybiBpdDtcbn07XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07XG4iLCIvLyBmYWxzZSAtPiBBcnJheSNpbmRleE9mXG4vLyB0cnVlICAtPiBBcnJheSNpbmNsdWRlc1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIHRvQWJzb2x1dGVJbmRleCA9IHJlcXVpcmUoJy4vX3RvLWFic29sdXRlLWluZGV4Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChJU19JTkNMVURFUykge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBlbCwgZnJvbUluZGV4KSB7XG4gICAgdmFyIE8gPSB0b0lPYmplY3QoJHRoaXMpO1xuICAgIHZhciBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgdmFyIGluZGV4ID0gdG9BYnNvbHV0ZUluZGV4KGZyb21JbmRleCwgbGVuZ3RoKTtcbiAgICB2YXIgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICBpZiAoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpIHdoaWxlIChsZW5ndGggPiBpbmRleCkge1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgICAgaWYgKHZhbHVlICE9IHZhbHVlKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSNpbmRleE9mIGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSBpZiAoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTykge1xuICAgICAgaWYgKE9baW5kZXhdID09PSBlbCkgcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcbiIsIi8vIGdldHRpbmcgdGFnIGZyb20gMTkuMS4zLjYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZygpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG52YXIgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG4vLyBFUzMgd3JvbmcgaGVyZVxudmFyIEFSRyA9IGNvZihmdW5jdGlvbiAoKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ0FyZ3VtZW50cyc7XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIFNjcmlwdCBBY2Nlc3MgRGVuaWVkIGVycm9yXG52YXIgdHJ5R2V0ID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gaXRba2V5XTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgTywgVCwgQjtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgOiB0eXBlb2YgKFQgPSB0cnlHZXQoTyA9IE9iamVjdChpdCksIFRBRykpID09ICdzdHJpbmcnID8gVFxuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQVJHID8gY29mKE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKEIgPSBjb2YoTykpID09ICdPYmplY3QnICYmIHR5cGVvZiBPLmNhbGxlZSA9PSAnZnVuY3Rpb24nID8gJ0FyZ3VtZW50cycgOiBCO1xufTtcbiIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpO1xudmFyIHJlZGVmaW5lQWxsID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUtYWxsJyk7XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgYW5JbnN0YW5jZSA9IHJlcXVpcmUoJy4vX2FuLWluc3RhbmNlJyk7XG52YXIgZm9yT2YgPSByZXF1aXJlKCcuL19mb3Itb2YnKTtcbnZhciAkaXRlckRlZmluZSA9IHJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJyk7XG52YXIgc3RlcCA9IHJlcXVpcmUoJy4vX2l0ZXItc3RlcCcpO1xudmFyIHNldFNwZWNpZXMgPSByZXF1aXJlKCcuL19zZXQtc3BlY2llcycpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcbnZhciBmYXN0S2V5ID0gcmVxdWlyZSgnLi9fbWV0YScpLmZhc3RLZXk7XG52YXIgdmFsaWRhdGUgPSByZXF1aXJlKCcuL192YWxpZGF0ZS1jb2xsZWN0aW9uJyk7XG52YXIgU0laRSA9IERFU0NSSVBUT1JTID8gJ19zJyA6ICdzaXplJztcblxudmFyIGdldEVudHJ5ID0gZnVuY3Rpb24gKHRoYXQsIGtleSkge1xuICAvLyBmYXN0IGNhc2VcbiAgdmFyIGluZGV4ID0gZmFzdEtleShrZXkpO1xuICB2YXIgZW50cnk7XG4gIGlmIChpbmRleCAhPT0gJ0YnKSByZXR1cm4gdGhhdC5faVtpbmRleF07XG4gIC8vIGZyb3plbiBvYmplY3QgY2FzZVxuICBmb3IgKGVudHJ5ID0gdGhhdC5fZjsgZW50cnk7IGVudHJ5ID0gZW50cnkubikge1xuICAgIGlmIChlbnRyeS5rID09IGtleSkgcmV0dXJuIGVudHJ5O1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZ2V0Q29uc3RydWN0b3I6IGZ1bmN0aW9uICh3cmFwcGVyLCBOQU1FLCBJU19NQVAsIEFEREVSKSB7XG4gICAgdmFyIEMgPSB3cmFwcGVyKGZ1bmN0aW9uICh0aGF0LCBpdGVyYWJsZSkge1xuICAgICAgYW5JbnN0YW5jZSh0aGF0LCBDLCBOQU1FLCAnX2knKTtcbiAgICAgIHRoYXQuX3QgPSBOQU1FOyAgICAgICAgIC8vIGNvbGxlY3Rpb24gdHlwZVxuICAgICAgdGhhdC5faSA9IGNyZWF0ZShudWxsKTsgLy8gaW5kZXhcbiAgICAgIHRoYXQuX2YgPSB1bmRlZmluZWQ7ICAgIC8vIGZpcnN0IGVudHJ5XG4gICAgICB0aGF0Ll9sID0gdW5kZWZpbmVkOyAgICAvLyBsYXN0IGVudHJ5XG4gICAgICB0aGF0W1NJWkVdID0gMDsgICAgICAgICAvLyBzaXplXG4gICAgICBpZiAoaXRlcmFibGUgIT0gdW5kZWZpbmVkKSBmb3JPZihpdGVyYWJsZSwgSVNfTUFQLCB0aGF0W0FEREVSXSwgdGhhdCk7XG4gICAgfSk7XG4gICAgcmVkZWZpbmVBbGwoQy5wcm90b3R5cGUsIHtcbiAgICAgIC8vIDIzLjEuMy4xIE1hcC5wcm90b3R5cGUuY2xlYXIoKVxuICAgICAgLy8gMjMuMi4zLjIgU2V0LnByb3RvdHlwZS5jbGVhcigpXG4gICAgICBjbGVhcjogZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgICAgIGZvciAodmFyIHRoYXQgPSB2YWxpZGF0ZSh0aGlzLCBOQU1FKSwgZGF0YSA9IHRoYXQuX2ksIGVudHJ5ID0gdGhhdC5fZjsgZW50cnk7IGVudHJ5ID0gZW50cnkubikge1xuICAgICAgICAgIGVudHJ5LnIgPSB0cnVlO1xuICAgICAgICAgIGlmIChlbnRyeS5wKSBlbnRyeS5wID0gZW50cnkucC5uID0gdW5kZWZpbmVkO1xuICAgICAgICAgIGRlbGV0ZSBkYXRhW2VudHJ5LmldO1xuICAgICAgICB9XG4gICAgICAgIHRoYXQuX2YgPSB0aGF0Ll9sID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGF0W1NJWkVdID0gMDtcbiAgICAgIH0sXG4gICAgICAvLyAyMy4xLjMuMyBNYXAucHJvdG90eXBlLmRlbGV0ZShrZXkpXG4gICAgICAvLyAyMy4yLjMuNCBTZXQucHJvdG90eXBlLmRlbGV0ZSh2YWx1ZSlcbiAgICAgICdkZWxldGUnOiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciB0aGF0ID0gdmFsaWRhdGUodGhpcywgTkFNRSk7XG4gICAgICAgIHZhciBlbnRyeSA9IGdldEVudHJ5KHRoYXQsIGtleSk7XG4gICAgICAgIGlmIChlbnRyeSkge1xuICAgICAgICAgIHZhciBuZXh0ID0gZW50cnkubjtcbiAgICAgICAgICB2YXIgcHJldiA9IGVudHJ5LnA7XG4gICAgICAgICAgZGVsZXRlIHRoYXQuX2lbZW50cnkuaV07XG4gICAgICAgICAgZW50cnkuciA9IHRydWU7XG4gICAgICAgICAgaWYgKHByZXYpIHByZXYubiA9IG5leHQ7XG4gICAgICAgICAgaWYgKG5leHQpIG5leHQucCA9IHByZXY7XG4gICAgICAgICAgaWYgKHRoYXQuX2YgPT0gZW50cnkpIHRoYXQuX2YgPSBuZXh0O1xuICAgICAgICAgIGlmICh0aGF0Ll9sID09IGVudHJ5KSB0aGF0Ll9sID0gcHJldjtcbiAgICAgICAgICB0aGF0W1NJWkVdLS07XG4gICAgICAgIH0gcmV0dXJuICEhZW50cnk7XG4gICAgICB9LFxuICAgICAgLy8gMjMuMi4zLjYgU2V0LnByb3RvdHlwZS5mb3JFYWNoKGNhbGxiYWNrZm4sIHRoaXNBcmcgPSB1bmRlZmluZWQpXG4gICAgICAvLyAyMy4xLjMuNSBNYXAucHJvdG90eXBlLmZvckVhY2goY2FsbGJhY2tmbiwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbiAgICAgIGZvckVhY2g6IGZ1bmN0aW9uIGZvckVhY2goY2FsbGJhY2tmbiAvKiAsIHRoYXQgPSB1bmRlZmluZWQgKi8pIHtcbiAgICAgICAgdmFsaWRhdGUodGhpcywgTkFNRSk7XG4gICAgICAgIHZhciBmID0gY3R4KGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkLCAzKTtcbiAgICAgICAgdmFyIGVudHJ5O1xuICAgICAgICB3aGlsZSAoZW50cnkgPSBlbnRyeSA/IGVudHJ5Lm4gOiB0aGlzLl9mKSB7XG4gICAgICAgICAgZihlbnRyeS52LCBlbnRyeS5rLCB0aGlzKTtcbiAgICAgICAgICAvLyByZXZlcnQgdG8gdGhlIGxhc3QgZXhpc3RpbmcgZW50cnlcbiAgICAgICAgICB3aGlsZSAoZW50cnkgJiYgZW50cnkucikgZW50cnkgPSBlbnRyeS5wO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8gMjMuMS4zLjcgTWFwLnByb3RvdHlwZS5oYXMoa2V5KVxuICAgICAgLy8gMjMuMi4zLjcgU2V0LnByb3RvdHlwZS5oYXModmFsdWUpXG4gICAgICBoYXM6IGZ1bmN0aW9uIGhhcyhrZXkpIHtcbiAgICAgICAgcmV0dXJuICEhZ2V0RW50cnkodmFsaWRhdGUodGhpcywgTkFNRSksIGtleSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKERFU0NSSVBUT1JTKSBkUChDLnByb3RvdHlwZSwgJ3NpemUnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRlKHRoaXMsIE5BTUUpW1NJWkVdO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBDO1xuICB9LFxuICBkZWY6IGZ1bmN0aW9uICh0aGF0LCBrZXksIHZhbHVlKSB7XG4gICAgdmFyIGVudHJ5ID0gZ2V0RW50cnkodGhhdCwga2V5KTtcbiAgICB2YXIgcHJldiwgaW5kZXg7XG4gICAgLy8gY2hhbmdlIGV4aXN0aW5nIGVudHJ5XG4gICAgaWYgKGVudHJ5KSB7XG4gICAgICBlbnRyeS52ID0gdmFsdWU7XG4gICAgLy8gY3JlYXRlIG5ldyBlbnRyeVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGF0Ll9sID0gZW50cnkgPSB7XG4gICAgICAgIGk6IGluZGV4ID0gZmFzdEtleShrZXksIHRydWUpLCAvLyA8LSBpbmRleFxuICAgICAgICBrOiBrZXksICAgICAgICAgICAgICAgICAgICAgICAgLy8gPC0ga2V5XG4gICAgICAgIHY6IHZhbHVlLCAgICAgICAgICAgICAgICAgICAgICAvLyA8LSB2YWx1ZVxuICAgICAgICBwOiBwcmV2ID0gdGhhdC5fbCwgICAgICAgICAgICAgLy8gPC0gcHJldmlvdXMgZW50cnlcbiAgICAgICAgbjogdW5kZWZpbmVkLCAgICAgICAgICAgICAgICAgIC8vIDwtIG5leHQgZW50cnlcbiAgICAgICAgcjogZmFsc2UgICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIHJlbW92ZWRcbiAgICAgIH07XG4gICAgICBpZiAoIXRoYXQuX2YpIHRoYXQuX2YgPSBlbnRyeTtcbiAgICAgIGlmIChwcmV2KSBwcmV2Lm4gPSBlbnRyeTtcbiAgICAgIHRoYXRbU0laRV0rKztcbiAgICAgIC8vIGFkZCB0byBpbmRleFxuICAgICAgaWYgKGluZGV4ICE9PSAnRicpIHRoYXQuX2lbaW5kZXhdID0gZW50cnk7XG4gICAgfSByZXR1cm4gdGhhdDtcbiAgfSxcbiAgZ2V0RW50cnk6IGdldEVudHJ5LFxuICBzZXRTdHJvbmc6IGZ1bmN0aW9uIChDLCBOQU1FLCBJU19NQVApIHtcbiAgICAvLyBhZGQgLmtleXMsIC52YWx1ZXMsIC5lbnRyaWVzLCBbQEBpdGVyYXRvcl1cbiAgICAvLyAyMy4xLjMuNCwgMjMuMS4zLjgsIDIzLjEuMy4xMSwgMjMuMS4zLjEyLCAyMy4yLjMuNSwgMjMuMi4zLjgsIDIzLjIuMy4xMCwgMjMuMi4zLjExXG4gICAgJGl0ZXJEZWZpbmUoQywgTkFNRSwgZnVuY3Rpb24gKGl0ZXJhdGVkLCBraW5kKSB7XG4gICAgICB0aGlzLl90ID0gdmFsaWRhdGUoaXRlcmF0ZWQsIE5BTUUpOyAvLyB0YXJnZXRcbiAgICAgIHRoaXMuX2sgPSBraW5kOyAgICAgICAgICAgICAgICAgICAgIC8vIGtpbmRcbiAgICAgIHRoaXMuX2wgPSB1bmRlZmluZWQ7ICAgICAgICAgICAgICAgIC8vIHByZXZpb3VzXG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICAgdmFyIGtpbmQgPSB0aGF0Ll9rO1xuICAgICAgdmFyIGVudHJ5ID0gdGhhdC5fbDtcbiAgICAgIC8vIHJldmVydCB0byB0aGUgbGFzdCBleGlzdGluZyBlbnRyeVxuICAgICAgd2hpbGUgKGVudHJ5ICYmIGVudHJ5LnIpIGVudHJ5ID0gZW50cnkucDtcbiAgICAgIC8vIGdldCBuZXh0IGVudHJ5XG4gICAgICBpZiAoIXRoYXQuX3QgfHwgISh0aGF0Ll9sID0gZW50cnkgPSBlbnRyeSA/IGVudHJ5Lm4gOiB0aGF0Ll90Ll9mKSkge1xuICAgICAgICAvLyBvciBmaW5pc2ggdGhlIGl0ZXJhdGlvblxuICAgICAgICB0aGF0Ll90ID0gdW5kZWZpbmVkO1xuICAgICAgICByZXR1cm4gc3RlcCgxKTtcbiAgICAgIH1cbiAgICAgIC8vIHJldHVybiBzdGVwIGJ5IGtpbmRcbiAgICAgIGlmIChraW5kID09ICdrZXlzJykgcmV0dXJuIHN0ZXAoMCwgZW50cnkuayk7XG4gICAgICBpZiAoa2luZCA9PSAndmFsdWVzJykgcmV0dXJuIHN0ZXAoMCwgZW50cnkudik7XG4gICAgICByZXR1cm4gc3RlcCgwLCBbZW50cnkuaywgZW50cnkudl0pO1xuICAgIH0sIElTX01BUCA/ICdlbnRyaWVzJyA6ICd2YWx1ZXMnLCAhSVNfTUFQLCB0cnVlKTtcblxuICAgIC8vIGFkZCBbQEBzcGVjaWVzXSwgMjMuMS4yLjIsIDIzLjIuMi4yXG4gICAgc2V0U3BlY2llcyhOQU1FKTtcbiAgfVxufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIHJlZGVmaW5lQWxsID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUtYWxsJyk7XG52YXIgbWV0YSA9IHJlcXVpcmUoJy4vX21ldGEnKTtcbnZhciBmb3JPZiA9IHJlcXVpcmUoJy4vX2Zvci1vZicpO1xudmFyIGFuSW5zdGFuY2UgPSByZXF1aXJlKCcuL19hbi1pbnN0YW5jZScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xudmFyICRpdGVyRGV0ZWN0ID0gcmVxdWlyZSgnLi9faXRlci1kZXRlY3QnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgaW5oZXJpdElmUmVxdWlyZWQgPSByZXF1aXJlKCcuL19pbmhlcml0LWlmLXJlcXVpcmVkJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE5BTUUsIHdyYXBwZXIsIG1ldGhvZHMsIGNvbW1vbiwgSVNfTUFQLCBJU19XRUFLKSB7XG4gIHZhciBCYXNlID0gZ2xvYmFsW05BTUVdO1xuICB2YXIgQyA9IEJhc2U7XG4gIHZhciBBRERFUiA9IElTX01BUCA/ICdzZXQnIDogJ2FkZCc7XG4gIHZhciBwcm90byA9IEMgJiYgQy5wcm90b3R5cGU7XG4gIHZhciBPID0ge307XG4gIHZhciBmaXhNZXRob2QgPSBmdW5jdGlvbiAoS0VZKSB7XG4gICAgdmFyIGZuID0gcHJvdG9bS0VZXTtcbiAgICByZWRlZmluZShwcm90bywgS0VZLFxuICAgICAgS0VZID09ICdkZWxldGUnID8gZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgcmV0dXJuIElTX1dFQUsgJiYgIWlzT2JqZWN0KGEpID8gZmFsc2UgOiBmbi5jYWxsKHRoaXMsIGEgPT09IDAgPyAwIDogYSk7XG4gICAgICB9IDogS0VZID09ICdoYXMnID8gZnVuY3Rpb24gaGFzKGEpIHtcbiAgICAgICAgcmV0dXJuIElTX1dFQUsgJiYgIWlzT2JqZWN0KGEpID8gZmFsc2UgOiBmbi5jYWxsKHRoaXMsIGEgPT09IDAgPyAwIDogYSk7XG4gICAgICB9IDogS0VZID09ICdnZXQnID8gZnVuY3Rpb24gZ2V0KGEpIHtcbiAgICAgICAgcmV0dXJuIElTX1dFQUsgJiYgIWlzT2JqZWN0KGEpID8gdW5kZWZpbmVkIDogZm4uY2FsbCh0aGlzLCBhID09PSAwID8gMCA6IGEpO1xuICAgICAgfSA6IEtFWSA9PSAnYWRkJyA/IGZ1bmN0aW9uIGFkZChhKSB7IGZuLmNhbGwodGhpcywgYSA9PT0gMCA/IDAgOiBhKTsgcmV0dXJuIHRoaXM7IH1cbiAgICAgICAgOiBmdW5jdGlvbiBzZXQoYSwgYikgeyBmbi5jYWxsKHRoaXMsIGEgPT09IDAgPyAwIDogYSwgYik7IHJldHVybiB0aGlzOyB9XG4gICAgKTtcbiAgfTtcbiAgaWYgKHR5cGVvZiBDICE9ICdmdW5jdGlvbicgfHwgIShJU19XRUFLIHx8IHByb3RvLmZvckVhY2ggJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICBuZXcgQygpLmVudHJpZXMoKS5uZXh0KCk7XG4gIH0pKSkge1xuICAgIC8vIGNyZWF0ZSBjb2xsZWN0aW9uIGNvbnN0cnVjdG9yXG4gICAgQyA9IGNvbW1vbi5nZXRDb25zdHJ1Y3Rvcih3cmFwcGVyLCBOQU1FLCBJU19NQVAsIEFEREVSKTtcbiAgICByZWRlZmluZUFsbChDLnByb3RvdHlwZSwgbWV0aG9kcyk7XG4gICAgbWV0YS5ORUVEID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgaW5zdGFuY2UgPSBuZXcgQygpO1xuICAgIC8vIGVhcmx5IGltcGxlbWVudGF0aW9ucyBub3Qgc3VwcG9ydHMgY2hhaW5pbmdcbiAgICB2YXIgSEFTTlRfQ0hBSU5JTkcgPSBpbnN0YW5jZVtBRERFUl0oSVNfV0VBSyA/IHt9IDogLTAsIDEpICE9IGluc3RhbmNlO1xuICAgIC8vIFY4IH4gIENocm9taXVtIDQwLSB3ZWFrLWNvbGxlY3Rpb25zIHRocm93cyBvbiBwcmltaXRpdmVzLCBidXQgc2hvdWxkIHJldHVybiBmYWxzZVxuICAgIHZhciBUSFJPV1NfT05fUFJJTUlUSVZFUyA9IGZhaWxzKGZ1bmN0aW9uICgpIHsgaW5zdGFuY2UuaGFzKDEpOyB9KTtcbiAgICAvLyBtb3N0IGVhcmx5IGltcGxlbWVudGF0aW9ucyBkb2Vzbid0IHN1cHBvcnRzIGl0ZXJhYmxlcywgbW9zdCBtb2Rlcm4gLSBub3QgY2xvc2UgaXQgY29ycmVjdGx5XG4gICAgdmFyIEFDQ0VQVF9JVEVSQUJMRVMgPSAkaXRlckRldGVjdChmdW5jdGlvbiAoaXRlcikgeyBuZXcgQyhpdGVyKTsgfSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XG4gICAgLy8gZm9yIGVhcmx5IGltcGxlbWVudGF0aW9ucyAtMCBhbmQgKzAgbm90IHRoZSBzYW1lXG4gICAgdmFyIEJVR0dZX1pFUk8gPSAhSVNfV0VBSyAmJiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBWOCB+IENocm9taXVtIDQyLSBmYWlscyBvbmx5IHdpdGggNSsgZWxlbWVudHNcbiAgICAgIHZhciAkaW5zdGFuY2UgPSBuZXcgQygpO1xuICAgICAgdmFyIGluZGV4ID0gNTtcbiAgICAgIHdoaWxlIChpbmRleC0tKSAkaW5zdGFuY2VbQURERVJdKGluZGV4LCBpbmRleCk7XG4gICAgICByZXR1cm4gISRpbnN0YW5jZS5oYXMoLTApO1xuICAgIH0pO1xuICAgIGlmICghQUNDRVBUX0lURVJBQkxFUykge1xuICAgICAgQyA9IHdyYXBwZXIoZnVuY3Rpb24gKHRhcmdldCwgaXRlcmFibGUpIHtcbiAgICAgICAgYW5JbnN0YW5jZSh0YXJnZXQsIEMsIE5BTUUpO1xuICAgICAgICB2YXIgdGhhdCA9IGluaGVyaXRJZlJlcXVpcmVkKG5ldyBCYXNlKCksIHRhcmdldCwgQyk7XG4gICAgICAgIGlmIChpdGVyYWJsZSAhPSB1bmRlZmluZWQpIGZvck9mKGl0ZXJhYmxlLCBJU19NQVAsIHRoYXRbQURERVJdLCB0aGF0KTtcbiAgICAgICAgcmV0dXJuIHRoYXQ7XG4gICAgICB9KTtcbiAgICAgIEMucHJvdG90eXBlID0gcHJvdG87XG4gICAgICBwcm90by5jb25zdHJ1Y3RvciA9IEM7XG4gICAgfVxuICAgIGlmIChUSFJPV1NfT05fUFJJTUlUSVZFUyB8fCBCVUdHWV9aRVJPKSB7XG4gICAgICBmaXhNZXRob2QoJ2RlbGV0ZScpO1xuICAgICAgZml4TWV0aG9kKCdoYXMnKTtcbiAgICAgIElTX01BUCAmJiBmaXhNZXRob2QoJ2dldCcpO1xuICAgIH1cbiAgICBpZiAoQlVHR1lfWkVSTyB8fCBIQVNOVF9DSEFJTklORykgZml4TWV0aG9kKEFEREVSKTtcbiAgICAvLyB3ZWFrIGNvbGxlY3Rpb25zIHNob3VsZCBub3QgY29udGFpbnMgLmNsZWFyIG1ldGhvZFxuICAgIGlmIChJU19XRUFLICYmIHByb3RvLmNsZWFyKSBkZWxldGUgcHJvdG8uY2xlYXI7XG4gIH1cblxuICBzZXRUb1N0cmluZ1RhZyhDLCBOQU1FKTtcblxuICBPW05BTUVdID0gQztcbiAgJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAoQyAhPSBCYXNlKSwgTyk7XG5cbiAgaWYgKCFJU19XRUFLKSBjb21tb24uc2V0U3Ryb25nKEMsIE5BTUUsIElTX01BUCk7XG5cbiAgcmV0dXJuIEM7XG59O1xuIiwidmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHsgdmVyc2lvbjogJzIuNS43JyB9O1xuaWYgKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpIF9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIGluZGV4LCB2YWx1ZSkge1xuICBpZiAoaW5kZXggaW4gb2JqZWN0KSAkZGVmaW5lUHJvcGVydHkuZihvYmplY3QsIGluZGV4LCBjcmVhdGVEZXNjKDAsIHZhbHVlKSk7XG4gIGVsc2Ugb2JqZWN0W2luZGV4XSA9IHZhbHVlO1xufTtcbiIsIi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZuLCB0aGF0LCBsZW5ndGgpIHtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYgKHRoYXQgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGZuO1xuICBzd2l0Y2ggKGxlbmd0aCkge1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uIChhKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uIChhLCBiLCBjKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbiAoLyogLi4uYXJncyAqLykge1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTtcbiIsIi8vIDcuMi4xIFJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgPT0gdW5kZWZpbmVkKSB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG4iLCIvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG59KTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQ7XG4vLyB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0JyBpbiBvbGQgSUVcbnZhciBpcyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpcyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuIiwiLy8gSUUgOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSAoXG4gICdjb25zdHJ1Y3RvcixoYXNPd25Qcm9wZXJ0eSxpc1Byb3RvdHlwZU9mLHByb3BlcnR5SXNFbnVtZXJhYmxlLHRvTG9jYWxlU3RyaW5nLHRvU3RyaW5nLHZhbHVlT2YnXG4pLnNwbGl0KCcsJyk7XG4iLCIvLyBhbGwgZW51bWVyYWJsZSBvYmplY3Qga2V5cywgaW5jbHVkZXMgc3ltYm9sc1xudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xudmFyIGdPUFMgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpO1xudmFyIHBJRSA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciByZXN1bHQgPSBnZXRLZXlzKGl0KTtcbiAgdmFyIGdldFN5bWJvbHMgPSBnT1BTLmY7XG4gIGlmIChnZXRTeW1ib2xzKSB7XG4gICAgdmFyIHN5bWJvbHMgPSBnZXRTeW1ib2xzKGl0KTtcbiAgICB2YXIgaXNFbnVtID0gcElFLmY7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBrZXk7XG4gICAgd2hpbGUgKHN5bWJvbHMubGVuZ3RoID4gaSkgaWYgKGlzRW51bS5jYWxsKGl0LCBrZXkgPSBzeW1ib2xzW2krK10pKSByZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24gKHR5cGUsIG5hbWUsIHNvdXJjZSkge1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRjtcbiAgdmFyIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0Lkc7XG4gIHZhciBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TO1xuICB2YXIgSVNfUFJPVE8gPSB0eXBlICYgJGV4cG9ydC5QO1xuICB2YXIgSVNfQklORCA9IHR5cGUgJiAkZXhwb3J0LkI7XG4gIHZhciB0YXJnZXQgPSBJU19HTE9CQUwgPyBnbG9iYWwgOiBJU19TVEFUSUMgPyBnbG9iYWxbbmFtZV0gfHwgKGdsb2JhbFtuYW1lXSA9IHt9KSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV07XG4gIHZhciBleHBvcnRzID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSk7XG4gIHZhciBleHBQcm90byA9IGV4cG9ydHNbUFJPVE9UWVBFXSB8fCAoZXhwb3J0c1tQUk9UT1RZUEVdID0ge30pO1xuICB2YXIga2V5LCBvd24sIG91dCwgZXhwO1xuICBpZiAoSVNfR0xPQkFMKSBzb3VyY2UgPSBuYW1lO1xuICBmb3IgKGtleSBpbiBzb3VyY2UpIHtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiB0YXJnZXRba2V5XSAhPT0gdW5kZWZpbmVkO1xuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgb3V0ID0gKG93biA/IHRhcmdldCA6IHNvdXJjZSlba2V5XTtcbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIGV4cCA9IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4dGVuZCBnbG9iYWxcbiAgICBpZiAodGFyZ2V0KSByZWRlZmluZSh0YXJnZXQsIGtleSwgb3V0LCB0eXBlICYgJGV4cG9ydC5VKTtcbiAgICAvLyBleHBvcnRcbiAgICBpZiAoZXhwb3J0c1trZXldICE9IG91dCkgaGlkZShleHBvcnRzLCBrZXksIGV4cCk7XG4gICAgaWYgKElTX1BST1RPICYmIGV4cFByb3RvW2tleV0gIT0gb3V0KSBleHBQcm90b1trZXldID0gb3V0O1xuICB9XG59O1xuZ2xvYmFsLmNvcmUgPSBjb3JlO1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YFxubW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xudmFyIHdrcyA9IHJlcXVpcmUoJy4vX3drcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChLRVksIGxlbmd0aCwgZXhlYykge1xuICB2YXIgU1lNQk9MID0gd2tzKEtFWSk7XG4gIHZhciBmbnMgPSBleGVjKGRlZmluZWQsIFNZTUJPTCwgJydbS0VZXSk7XG4gIHZhciBzdHJmbiA9IGZuc1swXTtcbiAgdmFyIHJ4Zm4gPSBmbnNbMV07XG4gIGlmIChmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIE8gPSB7fTtcbiAgICBPW1NZTUJPTF0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9O1xuICAgIHJldHVybiAnJ1tLRVldKE8pICE9IDc7XG4gIH0pKSB7XG4gICAgcmVkZWZpbmUoU3RyaW5nLnByb3RvdHlwZSwgS0VZLCBzdHJmbik7XG4gICAgaGlkZShSZWdFeHAucHJvdG90eXBlLCBTWU1CT0wsIGxlbmd0aCA9PSAyXG4gICAgICAvLyAyMS4yLjUuOCBSZWdFeHAucHJvdG90eXBlW0BAcmVwbGFjZV0oc3RyaW5nLCByZXBsYWNlVmFsdWUpXG4gICAgICAvLyAyMS4yLjUuMTEgUmVnRXhwLnByb3RvdHlwZVtAQHNwbGl0XShzdHJpbmcsIGxpbWl0KVxuICAgICAgPyBmdW5jdGlvbiAoc3RyaW5nLCBhcmcpIHsgcmV0dXJuIHJ4Zm4uY2FsbChzdHJpbmcsIHRoaXMsIGFyZyk7IH1cbiAgICAgIC8vIDIxLjIuNS42IFJlZ0V4cC5wcm90b3R5cGVbQEBtYXRjaF0oc3RyaW5nKVxuICAgICAgLy8gMjEuMi41LjkgUmVnRXhwLnByb3RvdHlwZVtAQHNlYXJjaF0oc3RyaW5nKVxuICAgICAgOiBmdW5jdGlvbiAoc3RyaW5nKSB7IHJldHVybiByeGZuLmNhbGwoc3RyaW5nLCB0aGlzKTsgfVxuICAgICk7XG4gIH1cbn07XG4iLCIndXNlIHN0cmljdCc7XG4vLyAyMS4yLjUuMyBnZXQgUmVnRXhwLnByb3RvdHlwZS5mbGFnc1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHRoYXQgPSBhbk9iamVjdCh0aGlzKTtcbiAgdmFyIHJlc3VsdCA9ICcnO1xuICBpZiAodGhhdC5nbG9iYWwpIHJlc3VsdCArPSAnZyc7XG4gIGlmICh0aGF0Lmlnbm9yZUNhc2UpIHJlc3VsdCArPSAnaSc7XG4gIGlmICh0aGF0Lm11bHRpbGluZSkgcmVzdWx0ICs9ICdtJztcbiAgaWYgKHRoYXQudW5pY29kZSkgcmVzdWx0ICs9ICd1JztcbiAgaWYgKHRoYXQuc3RpY2t5KSByZXN1bHQgKz0gJ3knO1xuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsInZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBjYWxsID0gcmVxdWlyZSgnLi9faXRlci1jYWxsJyk7XG52YXIgaXNBcnJheUl0ZXIgPSByZXF1aXJlKCcuL19pcy1hcnJheS1pdGVyJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIGdldEl0ZXJGbiA9IHJlcXVpcmUoJy4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG52YXIgQlJFQUsgPSB7fTtcbnZhciBSRVRVUk4gPSB7fTtcbnZhciBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlcmFibGUsIGVudHJpZXMsIGZuLCB0aGF0LCBJVEVSQVRPUikge1xuICB2YXIgaXRlckZuID0gSVRFUkFUT1IgPyBmdW5jdGlvbiAoKSB7IHJldHVybiBpdGVyYWJsZTsgfSA6IGdldEl0ZXJGbihpdGVyYWJsZSk7XG4gIHZhciBmID0gY3R4KGZuLCB0aGF0LCBlbnRyaWVzID8gMiA6IDEpO1xuICB2YXIgaW5kZXggPSAwO1xuICB2YXIgbGVuZ3RoLCBzdGVwLCBpdGVyYXRvciwgcmVzdWx0O1xuICBpZiAodHlwZW9mIGl0ZXJGbiAhPSAnZnVuY3Rpb24nKSB0aHJvdyBUeXBlRXJyb3IoaXRlcmFibGUgKyAnIGlzIG5vdCBpdGVyYWJsZSEnKTtcbiAgLy8gZmFzdCBjYXNlIGZvciBhcnJheXMgd2l0aCBkZWZhdWx0IGl0ZXJhdG9yXG4gIGlmIChpc0FycmF5SXRlcihpdGVyRm4pKSBmb3IgKGxlbmd0aCA9IHRvTGVuZ3RoKGl0ZXJhYmxlLmxlbmd0aCk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKSB7XG4gICAgcmVzdWx0ID0gZW50cmllcyA/IGYoYW5PYmplY3Qoc3RlcCA9IGl0ZXJhYmxlW2luZGV4XSlbMF0sIHN0ZXBbMV0pIDogZihpdGVyYWJsZVtpbmRleF0pO1xuICAgIGlmIChyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKSByZXR1cm4gcmVzdWx0O1xuICB9IGVsc2UgZm9yIChpdGVyYXRvciA9IGl0ZXJGbi5jYWxsKGl0ZXJhYmxlKTsgIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOykge1xuICAgIHJlc3VsdCA9IGNhbGwoaXRlcmF0b3IsIGYsIHN0ZXAudmFsdWUsIGVudHJpZXMpO1xuICAgIGlmIChyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKSByZXR1cm4gcmVzdWx0O1xuICB9XG59O1xuZXhwb3J0cy5CUkVBSyA9IEJSRUFLO1xuZXhwb3J0cy5SRVRVUk4gPSBSRVRVUk47XG4iLCIvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxudmFyIGdsb2JhbCA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoXG4gID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZiAodHlwZW9mIF9fZyA9PSAnbnVtYmVyJykgX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4iLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59O1xuIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuIiwidmFyIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQ7XG5tb2R1bGUuZXhwb3J0cyA9IGRvY3VtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiIsIm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnZGl2JyksICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX3NldC1wcm90bycpLnNldDtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRoYXQsIHRhcmdldCwgQykge1xuICB2YXIgUyA9IHRhcmdldC5jb25zdHJ1Y3RvcjtcbiAgdmFyIFA7XG4gIGlmIChTICE9PSBDICYmIHR5cGVvZiBTID09ICdmdW5jdGlvbicgJiYgKFAgPSBTLnByb3RvdHlwZSkgIT09IEMucHJvdG90eXBlICYmIGlzT2JqZWN0KFApICYmIHNldFByb3RvdHlwZU9mKSB7XG4gICAgc2V0UHJvdG90eXBlT2YodGhhdCwgUCk7XG4gIH0gcmV0dXJuIHRoYXQ7XG59O1xuIiwiLy8gZmFzdCBhcHBseSwgaHR0cDovL2pzcGVyZi5sbmtpdC5jb20vZmFzdC1hcHBseS81XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbiwgYXJncywgdGhhdCkge1xuICB2YXIgdW4gPSB0aGF0ID09PSB1bmRlZmluZWQ7XG4gIHN3aXRjaCAoYXJncy5sZW5ndGgpIHtcbiAgICBjYXNlIDA6IHJldHVybiB1biA/IGZuKClcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCk7XG4gICAgY2FzZSAxOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdKTtcbiAgICBjYXNlIDI6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgIGNhc2UgMzogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgY2FzZSA0OiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKTtcbiAgfSByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJncyk7XG59O1xuIiwiLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCkgPyBPYmplY3QgOiBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTtcbiIsIi8vIGNoZWNrIG9uIGRlZmF1bHQgQXJyYXkgaXRlcmF0b3JcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCAhPT0gdW5kZWZpbmVkICYmIChJdGVyYXRvcnMuQXJyYXkgPT09IGl0IHx8IEFycmF5UHJvdG9bSVRFUkFUT1JdID09PSBpdCk7XG59O1xuIiwiLy8gNy4yLjIgSXNBcnJheShhcmd1bWVudClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiBpc0FycmF5KGFyZykge1xuICByZXR1cm4gY29mKGFyZykgPT0gJ0FycmF5Jztcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTtcbiIsIi8vIDcuMi44IElzUmVnRXhwKGFyZ3VtZW50KVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG52YXIgTUFUQ0ggPSByZXF1aXJlKCcuL193a3MnKSgnbWF0Y2gnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBpc1JlZ0V4cDtcbiAgcmV0dXJuIGlzT2JqZWN0KGl0KSAmJiAoKGlzUmVnRXhwID0gaXRbTUFUQ0hdKSAhPT0gdW5kZWZpbmVkID8gISFpc1JlZ0V4cCA6IGNvZihpdCkgPT0gJ1JlZ0V4cCcpO1xufTtcbiIsIi8vIGNhbGwgc29tZXRoaW5nIG9uIGl0ZXJhdG9yIHN0ZXAgd2l0aCBzYWZlIGNsb3Npbmcgb24gZXJyb3JcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlcmF0b3IsIGZuLCB2YWx1ZSwgZW50cmllcykge1xuICB0cnkge1xuICAgIHJldHVybiBlbnRyaWVzID8gZm4oYW5PYmplY3QodmFsdWUpWzBdLCB2YWx1ZVsxXSkgOiBmbih2YWx1ZSk7XG4gIC8vIDcuNC42IEl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsIGNvbXBsZXRpb24pXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB2YXIgcmV0ID0gaXRlcmF0b3JbJ3JldHVybiddO1xuICAgIGlmIChyZXQgIT09IHVuZGVmaW5lZCkgYW5PYmplY3QocmV0LmNhbGwoaXRlcmF0b3IpKTtcbiAgICB0aHJvdyBlO1xuICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKTtcbnZhciBkZXNjcmlwdG9yID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuXG4vLyAyNS4xLjIuMS4xICVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faGlkZScpKEl0ZXJhdG9yUHJvdG90eXBlLCByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KSB7XG4gIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9IGNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwgeyBuZXh0OiBkZXNjcmlwdG9yKDEsIG5leHQpIH0pO1xuICBzZXRUb1N0cmluZ1RhZyhDb25zdHJ1Y3RvciwgTkFNRSArICcgSXRlcmF0b3InKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgJGl0ZXJDcmVhdGUgPSByZXF1aXJlKCcuL19pdGVyLWNyZWF0ZScpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEJVR0dZID0gIShbXS5rZXlzICYmICduZXh0JyBpbiBbXS5rZXlzKCkpOyAvLyBTYWZhcmkgaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG52YXIgRkZfSVRFUkFUT1IgPSAnQEBpdGVyYXRvcic7XG52YXIgS0VZUyA9ICdrZXlzJztcbnZhciBWQUxVRVMgPSAndmFsdWVzJztcblxudmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChCYXNlLCBOQU1FLCBDb25zdHJ1Y3RvciwgbmV4dCwgREVGQVVMVCwgSVNfU0VULCBGT1JDRUQpIHtcbiAgJGl0ZXJDcmVhdGUoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpO1xuICB2YXIgZ2V0TWV0aG9kID0gZnVuY3Rpb24gKGtpbmQpIHtcbiAgICBpZiAoIUJVR0dZICYmIGtpbmQgaW4gcHJvdG8pIHJldHVybiBwcm90b1traW5kXTtcbiAgICBzd2l0Y2ggKGtpbmQpIHtcbiAgICAgIGNhc2UgS0VZUzogcmV0dXJuIGZ1bmN0aW9uIGtleXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgICBjYXNlIFZBTFVFUzogcmV0dXJuIGZ1bmN0aW9uIHZhbHVlcygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICB9IHJldHVybiBmdW5jdGlvbiBlbnRyaWVzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICB9O1xuICB2YXIgVEFHID0gTkFNRSArICcgSXRlcmF0b3InO1xuICB2YXIgREVGX1ZBTFVFUyA9IERFRkFVTFQgPT0gVkFMVUVTO1xuICB2YXIgVkFMVUVTX0JVRyA9IGZhbHNlO1xuICB2YXIgcHJvdG8gPSBCYXNlLnByb3RvdHlwZTtcbiAgdmFyICRuYXRpdmUgPSBwcm90b1tJVEVSQVRPUl0gfHwgcHJvdG9bRkZfSVRFUkFUT1JdIHx8IERFRkFVTFQgJiYgcHJvdG9bREVGQVVMVF07XG4gIHZhciAkZGVmYXVsdCA9ICRuYXRpdmUgfHwgZ2V0TWV0aG9kKERFRkFVTFQpO1xuICB2YXIgJGVudHJpZXMgPSBERUZBVUxUID8gIURFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZCgnZW50cmllcycpIDogdW5kZWZpbmVkO1xuICB2YXIgJGFueU5hdGl2ZSA9IE5BTUUgPT0gJ0FycmF5JyA/IHByb3RvLmVudHJpZXMgfHwgJG5hdGl2ZSA6ICRuYXRpdmU7XG4gIHZhciBtZXRob2RzLCBrZXksIEl0ZXJhdG9yUHJvdG90eXBlO1xuICAvLyBGaXggbmF0aXZlXG4gIGlmICgkYW55TmF0aXZlKSB7XG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZigkYW55TmF0aXZlLmNhbGwobmV3IEJhc2UoKSkpO1xuICAgIGlmIChJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSAmJiBJdGVyYXRvclByb3RvdHlwZS5uZXh0KSB7XG4gICAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXG4gICAgICBzZXRUb1N0cmluZ1RhZyhJdGVyYXRvclByb3RvdHlwZSwgVEFHLCB0cnVlKTtcbiAgICAgIC8vIGZpeCBmb3Igc29tZSBvbGQgZW5naW5lc1xuICAgICAgaWYgKCFMSUJSQVJZICYmIHR5cGVvZiBJdGVyYXRvclByb3RvdHlwZVtJVEVSQVRPUl0gIT0gJ2Z1bmN0aW9uJykgaGlkZShJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIHJldHVyblRoaXMpO1xuICAgIH1cbiAgfVxuICAvLyBmaXggQXJyYXkje3ZhbHVlcywgQEBpdGVyYXRvcn0ubmFtZSBpbiBWOCAvIEZGXG4gIGlmIChERUZfVkFMVUVTICYmICRuYXRpdmUgJiYgJG5hdGl2ZS5uYW1lICE9PSBWQUxVRVMpIHtcbiAgICBWQUxVRVNfQlVHID0gdHJ1ZTtcbiAgICAkZGVmYXVsdCA9IGZ1bmN0aW9uIHZhbHVlcygpIHsgcmV0dXJuICRuYXRpdmUuY2FsbCh0aGlzKTsgfTtcbiAgfVxuICAvLyBEZWZpbmUgaXRlcmF0b3JcbiAgaWYgKCghTElCUkFSWSB8fCBGT1JDRUQpICYmIChCVUdHWSB8fCBWQUxVRVNfQlVHIHx8ICFwcm90b1tJVEVSQVRPUl0pKSB7XG4gICAgaGlkZShwcm90bywgSVRFUkFUT1IsICRkZWZhdWx0KTtcbiAgfVxuICAvLyBQbHVnIGZvciBsaWJyYXJ5XG4gIEl0ZXJhdG9yc1tOQU1FXSA9ICRkZWZhdWx0O1xuICBJdGVyYXRvcnNbVEFHXSA9IHJldHVyblRoaXM7XG4gIGlmIChERUZBVUxUKSB7XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHZhbHVlczogREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKFZBTFVFUyksXG4gICAgICBrZXlzOiBJU19TRVQgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChLRVlTKSxcbiAgICAgIGVudHJpZXM6ICRlbnRyaWVzXG4gICAgfTtcbiAgICBpZiAoRk9SQ0VEKSBmb3IgKGtleSBpbiBtZXRob2RzKSB7XG4gICAgICBpZiAoIShrZXkgaW4gcHJvdG8pKSByZWRlZmluZShwcm90bywga2V5LCBtZXRob2RzW2tleV0pO1xuICAgIH0gZWxzZSAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChCVUdHWSB8fCBWQUxVRVNfQlVHKSwgTkFNRSwgbWV0aG9kcyk7XG4gIH1cbiAgcmV0dXJuIG1ldGhvZHM7XG59O1xuIiwidmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgU0FGRV9DTE9TSU5HID0gZmFsc2U7XG5cbnRyeSB7XG4gIHZhciByaXRlciA9IFs3XVtJVEVSQVRPUl0oKTtcbiAgcml0ZXJbJ3JldHVybiddID0gZnVuY3Rpb24gKCkgeyBTQUZFX0NMT1NJTkcgPSB0cnVlOyB9O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdGhyb3ctbGl0ZXJhbFxuICBBcnJheS5mcm9tKHJpdGVyLCBmdW5jdGlvbiAoKSB7IHRocm93IDI7IH0pO1xufSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMsIHNraXBDbG9zaW5nKSB7XG4gIGlmICghc2tpcENsb3NpbmcgJiYgIVNBRkVfQ0xPU0lORykgcmV0dXJuIGZhbHNlO1xuICB2YXIgc2FmZSA9IGZhbHNlO1xuICB0cnkge1xuICAgIHZhciBhcnIgPSBbN107XG4gICAgdmFyIGl0ZXIgPSBhcnJbSVRFUkFUT1JdKCk7XG4gICAgaXRlci5uZXh0ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4geyBkb25lOiBzYWZlID0gdHJ1ZSB9OyB9O1xuICAgIGFycltJVEVSQVRPUl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBpdGVyOyB9O1xuICAgIGV4ZWMoYXJyKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIHJldHVybiBzYWZlO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGRvbmUsIHZhbHVlKSB7XG4gIHJldHVybiB7IHZhbHVlOiB2YWx1ZSwgZG9uZTogISFkb25lIH07XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZmFsc2U7XG4iLCJ2YXIgTUVUQSA9IHJlcXVpcmUoJy4vX3VpZCcpKCdtZXRhJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBzZXREZXNjID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBpZCA9IDA7XG52YXIgaXNFeHRlbnNpYmxlID0gT2JqZWN0LmlzRXh0ZW5zaWJsZSB8fCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0cnVlO1xufTtcbnZhciBGUkVFWkUgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBpc0V4dGVuc2libGUoT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zKHt9KSk7XG59KTtcbnZhciBzZXRNZXRhID0gZnVuY3Rpb24gKGl0KSB7XG4gIHNldERlc2MoaXQsIE1FVEEsIHsgdmFsdWU6IHtcbiAgICBpOiAnTycgKyArK2lkLCAvLyBvYmplY3QgSURcbiAgICB3OiB7fSAgICAgICAgICAvLyB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9IH0pO1xufTtcbnZhciBmYXN0S2V5ID0gZnVuY3Rpb24gKGl0LCBjcmVhdGUpIHtcbiAgLy8gcmV0dXJuIHByaW1pdGl2ZSB3aXRoIHByZWZpeFxuICBpZiAoIWlzT2JqZWN0KGl0KSkgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJyA/IGl0IDogKHR5cGVvZiBpdCA9PSAnc3RyaW5nJyA/ICdTJyA6ICdQJykgKyBpdDtcbiAgaWYgKCFoYXMoaXQsIE1FVEEpKSB7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZiAoIWlzRXh0ZW5zaWJsZShpdCkpIHJldHVybiAnRic7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZiAoIWNyZWF0ZSkgcmV0dXJuICdFJztcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gb2JqZWN0IElEXG4gIH0gcmV0dXJuIGl0W01FVEFdLmk7XG59O1xudmFyIGdldFdlYWsgPSBmdW5jdGlvbiAoaXQsIGNyZWF0ZSkge1xuICBpZiAoIWhhcyhpdCwgTUVUQSkpIHtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmICghaXNFeHRlbnNpYmxlKGl0KSkgcmV0dXJuIHRydWU7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZiAoIWNyZWF0ZSkgcmV0dXJuIGZhbHNlO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBoYXNoIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH0gcmV0dXJuIGl0W01FVEFdLnc7XG59O1xuLy8gYWRkIG1ldGFkYXRhIG9uIGZyZWV6ZS1mYW1pbHkgbWV0aG9kcyBjYWxsaW5nXG52YXIgb25GcmVlemUgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKEZSRUVaRSAmJiBtZXRhLk5FRUQgJiYgaXNFeHRlbnNpYmxlKGl0KSAmJiAhaGFzKGl0LCBNRVRBKSkgc2V0TWV0YShpdCk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgbWV0YSA9IG1vZHVsZS5leHBvcnRzID0ge1xuICBLRVk6IE1FVEEsXG4gIE5FRUQ6IGZhbHNlLFxuICBmYXN0S2V5OiBmYXN0S2V5LFxuICBnZXRXZWFrOiBnZXRXZWFrLFxuICBvbkZyZWV6ZTogb25GcmVlemVcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgbWFjcm90YXNrID0gcmVxdWlyZSgnLi9fdGFzaycpLnNldDtcbnZhciBPYnNlcnZlciA9IGdsb2JhbC5NdXRhdGlvbk9ic2VydmVyIHx8IGdsb2JhbC5XZWJLaXRNdXRhdGlvbk9ic2VydmVyO1xudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciBQcm9taXNlID0gZ2xvYmFsLlByb21pc2U7XG52YXIgaXNOb2RlID0gcmVxdWlyZSgnLi9fY29mJykocHJvY2VzcykgPT0gJ3Byb2Nlc3MnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhlYWQsIGxhc3QsIG5vdGlmeTtcblxuICB2YXIgZmx1c2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHBhcmVudCwgZm47XG4gICAgaWYgKGlzTm9kZSAmJiAocGFyZW50ID0gcHJvY2Vzcy5kb21haW4pKSBwYXJlbnQuZXhpdCgpO1xuICAgIHdoaWxlIChoZWFkKSB7XG4gICAgICBmbiA9IGhlYWQuZm47XG4gICAgICBoZWFkID0gaGVhZC5uZXh0O1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm4oKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaWYgKGhlYWQpIG5vdGlmeSgpO1xuICAgICAgICBlbHNlIGxhc3QgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgIGlmIChwYXJlbnQpIHBhcmVudC5lbnRlcigpO1xuICB9O1xuXG4gIC8vIE5vZGUuanNcbiAgaWYgKGlzTm9kZSkge1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soZmx1c2gpO1xuICAgIH07XG4gIC8vIGJyb3dzZXJzIHdpdGggTXV0YXRpb25PYnNlcnZlciwgZXhjZXB0IGlPUyBTYWZhcmkgLSBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMzM5XG4gIH0gZWxzZSBpZiAoT2JzZXJ2ZXIgJiYgIShnbG9iYWwubmF2aWdhdG9yICYmIGdsb2JhbC5uYXZpZ2F0b3Iuc3RhbmRhbG9uZSkpIHtcbiAgICB2YXIgdG9nZ2xlID0gdHJ1ZTtcbiAgICB2YXIgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgICBuZXcgT2JzZXJ2ZXIoZmx1c2gpLm9ic2VydmUobm9kZSwgeyBjaGFyYWN0ZXJEYXRhOiB0cnVlIH0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIG5vZGUuZGF0YSA9IHRvZ2dsZSA9ICF0b2dnbGU7XG4gICAgfTtcbiAgLy8gZW52aXJvbm1lbnRzIHdpdGggbWF5YmUgbm9uLWNvbXBsZXRlbHkgY29ycmVjdCwgYnV0IGV4aXN0ZW50IFByb21pc2VcbiAgfSBlbHNlIGlmIChQcm9taXNlICYmIFByb21pc2UucmVzb2x2ZSkge1xuICAgIC8vIFByb21pc2UucmVzb2x2ZSB3aXRob3V0IGFuIGFyZ3VtZW50IHRocm93cyBhbiBlcnJvciBpbiBMRyBXZWJPUyAyXG4gICAgdmFyIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUodW5kZWZpbmVkKTtcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBwcm9taXNlLnRoZW4oZmx1c2gpO1xuICAgIH07XG4gIC8vIGZvciBvdGhlciBlbnZpcm9ubWVudHMgLSBtYWNyb3Rhc2sgYmFzZWQgb246XG4gIC8vIC0gc2V0SW1tZWRpYXRlXG4gIC8vIC0gTWVzc2FnZUNoYW5uZWxcbiAgLy8gLSB3aW5kb3cucG9zdE1lc3NhZ1xuICAvLyAtIG9ucmVhZHlzdGF0ZWNoYW5nZVxuICAvLyAtIHNldFRpbWVvdXRcbiAgfSBlbHNlIHtcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBzdHJhbmdlIElFICsgd2VicGFjayBkZXYgc2VydmVyIGJ1ZyAtIHVzZSAuY2FsbChnbG9iYWwpXG4gICAgICBtYWNyb3Rhc2suY2FsbChnbG9iYWwsIGZsdXNoKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChmbikge1xuICAgIHZhciB0YXNrID0geyBmbjogZm4sIG5leHQ6IHVuZGVmaW5lZCB9O1xuICAgIGlmIChsYXN0KSBsYXN0Lm5leHQgPSB0YXNrO1xuICAgIGlmICghaGVhZCkge1xuICAgICAgaGVhZCA9IHRhc2s7XG4gICAgICBub3RpZnkoKTtcbiAgICB9IGxhc3QgPSB0YXNrO1xuICB9O1xufTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIDI1LjQuMS41IE5ld1Byb21pc2VDYXBhYmlsaXR5KEMpXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xuXG5mdW5jdGlvbiBQcm9taXNlQ2FwYWJpbGl0eShDKSB7XG4gIHZhciByZXNvbHZlLCByZWplY3Q7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBDKGZ1bmN0aW9uICgkJHJlc29sdmUsICQkcmVqZWN0KSB7XG4gICAgaWYgKHJlc29sdmUgIT09IHVuZGVmaW5lZCB8fCByZWplY3QgIT09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKCdCYWQgUHJvbWlzZSBjb25zdHJ1Y3RvcicpO1xuICAgIHJlc29sdmUgPSAkJHJlc29sdmU7XG4gICAgcmVqZWN0ID0gJCRyZWplY3Q7XG4gIH0pO1xuICB0aGlzLnJlc29sdmUgPSBhRnVuY3Rpb24ocmVzb2x2ZSk7XG4gIHRoaXMucmVqZWN0ID0gYUZ1bmN0aW9uKHJlamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzLmYgPSBmdW5jdGlvbiAoQykge1xuICByZXR1cm4gbmV3IFByb21pc2VDYXBhYmlsaXR5KEMpO1xufTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIDE5LjEuMi4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UsIC4uLilcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciBnT1BTID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKTtcbnZhciBwSUUgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpO1xudmFyICRhc3NpZ24gPSBPYmplY3QuYXNzaWduO1xuXG4vLyBzaG91bGQgd29yayB3aXRoIHN5bWJvbHMgYW5kIHNob3VsZCBoYXZlIGRldGVybWluaXN0aWMgcHJvcGVydHkgb3JkZXIgKFY4IGJ1Zylcbm1vZHVsZS5leHBvcnRzID0gISRhc3NpZ24gfHwgcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHZhciBBID0ge307XG4gIHZhciBCID0ge307XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgUyA9IFN5bWJvbCgpO1xuICB2YXIgSyA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdCc7XG4gIEFbU10gPSA3O1xuICBLLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7IEJba10gPSBrOyB9KTtcbiAgcmV0dXJuICRhc3NpZ24oe30sIEEpW1NdICE9IDcgfHwgT2JqZWN0LmtleXMoJGFzc2lnbih7fSwgQikpLmpvaW4oJycpICE9IEs7XG59KSA/IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIHZhciBUID0gdG9PYmplY3QodGFyZ2V0KTtcbiAgdmFyIGFMZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICB2YXIgaW5kZXggPSAxO1xuICB2YXIgZ2V0U3ltYm9scyA9IGdPUFMuZjtcbiAgdmFyIGlzRW51bSA9IHBJRS5mO1xuICB3aGlsZSAoYUxlbiA+IGluZGV4KSB7XG4gICAgdmFyIFMgPSBJT2JqZWN0KGFyZ3VtZW50c1tpbmRleCsrXSk7XG4gICAgdmFyIGtleXMgPSBnZXRTeW1ib2xzID8gZ2V0S2V5cyhTKS5jb25jYXQoZ2V0U3ltYm9scyhTKSkgOiBnZXRLZXlzKFMpO1xuICAgIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgICB2YXIgaiA9IDA7XG4gICAgdmFyIGtleTtcbiAgICB3aGlsZSAobGVuZ3RoID4gaikgaWYgKGlzRW51bS5jYWxsKFMsIGtleSA9IGtleXNbaisrXSkpIFRba2V5XSA9IFNba2V5XTtcbiAgfSByZXR1cm4gVDtcbn0gOiAkYXNzaWduO1xuIiwiLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBkUHMgPSByZXF1aXJlKCcuL19vYmplY3QtZHBzJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG52YXIgRW1wdHkgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBjcmVhdGVEaWN0ID0gZnVuY3Rpb24gKCkge1xuICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xuICB2YXIgaWZyYW1lID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdpZnJhbWUnKTtcbiAgdmFyIGkgPSBlbnVtQnVnS2V5cy5sZW5ndGg7XG4gIHZhciBsdCA9ICc8JztcbiAgdmFyIGd0ID0gJz4nO1xuICB2YXIgaWZyYW1lRG9jdW1lbnQ7XG4gIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICByZXF1aXJlKCcuL19odG1sJykuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lLnNyYyA9ICdqYXZhc2NyaXB0Oic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2NyaXB0LXVybFxuICAvLyBjcmVhdGVEaWN0ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuT2JqZWN0O1xuICAvLyBodG1sLnJlbW92ZUNoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcbiAgaWZyYW1lRG9jdW1lbnQud3JpdGUobHQgKyAnc2NyaXB0JyArIGd0ICsgJ2RvY3VtZW50LkY9T2JqZWN0JyArIGx0ICsgJy9zY3JpcHQnICsgZ3QpO1xuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xuICBjcmVhdGVEaWN0ID0gaWZyYW1lRG9jdW1lbnQuRjtcbiAgd2hpbGUgKGktLSkgZGVsZXRlIGNyZWF0ZURpY3RbUFJPVE9UWVBFXVtlbnVtQnVnS2V5c1tpXV07XG4gIHJldHVybiBjcmVhdGVEaWN0KCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKE8gIT09IG51bGwpIHtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5KCk7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IG51bGw7XG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuICB9IGVsc2UgcmVzdWx0ID0gY3JlYXRlRGljdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZFBzKHJlc3VsdCwgUHJvcGVydGllcyk7XG59O1xuIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgZFAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIGRQKE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcykgdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgaWYgKCd2YWx1ZScgaW4gQXR0cmlidXRlcykgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcbiIsInZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICB2YXIga2V5cyA9IGdldEtleXMoUHJvcGVydGllcyk7XG4gIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgdmFyIGkgPSAwO1xuICB2YXIgUDtcbiAgd2hpbGUgKGxlbmd0aCA+IGkpIGRQLmYoTywgUCA9IGtleXNbaSsrXSwgUHJvcGVydGllc1tQXSk7XG4gIHJldHVybiBPO1xufTtcbiIsInZhciBwSUUgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJyk7XG52YXIgZ09QRCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBnT1BEIDogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApIHtcbiAgTyA9IHRvSU9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIGdPUEQoTywgUCk7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoaGFzKE8sIFApKSByZXR1cm4gY3JlYXRlRGVzYyghcElFLmYuY2FsbChPLCBQKSwgT1tQXSk7XG59O1xuIiwiLy8gZmFsbGJhY2sgZm9yIElFMTEgYnVnZ3kgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgd2l0aCBpZnJhbWUgYW5kIHdpbmRvd1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciBnT1BOID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mO1xudmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbnZhciB3aW5kb3dOYW1lcyA9IHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgd2luZG93ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzXG4gID8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMod2luZG93KSA6IFtdO1xuXG52YXIgZ2V0V2luZG93TmFtZXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZ09QTihpdCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gd2luZG93TmFtZXMuc2xpY2UoKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMuZiA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpIHtcbiAgcmV0dXJuIHdpbmRvd05hbWVzICYmIHRvU3RyaW5nLmNhbGwoaXQpID09ICdbb2JqZWN0IFdpbmRvd10nID8gZ2V0V2luZG93TmFtZXMoaXQpIDogZ09QTih0b0lPYmplY3QoaXQpKTtcbn07XG4iLCIvLyAxOS4xLjIuNyAvIDE1LjIuMy40IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJykuY29uY2F0KCdsZW5ndGgnLCAncHJvdG90eXBlJyk7XG5cbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoTykge1xuICByZXR1cm4gJGtleXMoTywgaGlkZGVuS2V5cyk7XG59O1xuIiwiZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbiIsIi8vIDE5LjEuMi45IC8gMTUuMi4zLjIgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcbnZhciBPYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIChPKSB7XG4gIE8gPSB0b09iamVjdChPKTtcbiAgaWYgKGhhcyhPLCBJRV9QUk9UTykpIHJldHVybiBPW0lFX1BST1RPXTtcbiAgaWYgKHR5cGVvZiBPLmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgTyBpbnN0YW5jZW9mIE8uY29uc3RydWN0b3IpIHtcbiAgICByZXR1cm4gTy5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIH0gcmV0dXJuIE8gaW5zdGFuY2VvZiBPYmplY3QgPyBPYmplY3RQcm90byA6IG51bGw7XG59O1xuIiwidmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciBhcnJheUluZGV4T2YgPSByZXF1aXJlKCcuL19hcnJheS1pbmNsdWRlcycpKGZhbHNlKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lcykge1xuICB2YXIgTyA9IHRvSU9iamVjdChvYmplY3QpO1xuICB2YXIgaSA9IDA7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGtleTtcbiAgZm9yIChrZXkgaW4gTykgaWYgKGtleSAhPSBJRV9QUk9UTykgaGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkgaWYgKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSkge1xuICAgIH5hcnJheUluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHJlc3VsdC5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCIvLyAxOS4xLjIuMTQgLyAxNS4yLjMuMTQgT2JqZWN0LmtleXMoTylcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKSB7XG4gIHJldHVybiAka2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59O1xuIiwiZXhwb3J0cy5mID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG4iLCIvLyBtb3N0IE9iamVjdCBtZXRob2RzIGJ5IEVTNiBzaG91bGQgYWNjZXB0IHByaW1pdGl2ZXNcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChLRVksIGV4ZWMpIHtcbiAgdmFyIGZuID0gKGNvcmUuT2JqZWN0IHx8IHt9KVtLRVldIHx8IE9iamVjdFtLRVldO1xuICB2YXIgZXhwID0ge307XG4gIGV4cFtLRVldID0gZXhlYyhmbik7XG4gICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogZmFpbHMoZnVuY3Rpb24gKCkgeyBmbigxKTsgfSksICdPYmplY3QnLCBleHApO1xufTtcbiIsInZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgaXNFbnVtID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpLmY7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpc0VudHJpZXMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChpdCkge1xuICAgIHZhciBPID0gdG9JT2JqZWN0KGl0KTtcbiAgICB2YXIga2V5cyA9IGdldEtleXMoTyk7XG4gICAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgdmFyIGtleTtcbiAgICB3aGlsZSAobGVuZ3RoID4gaSkgaWYgKGlzRW51bS5jYWxsKE8sIGtleSA9IGtleXNbaSsrXSkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGlzRW50cmllcyA/IFtrZXksIE9ba2V5XV0gOiBPW2tleV0pO1xuICAgIH0gcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHsgZTogZmFsc2UsIHY6IGV4ZWMoKSB9O1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHsgZTogdHJ1ZSwgdjogZSB9O1xuICB9XG59O1xuIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IHJlcXVpcmUoJy4vX25ldy1wcm9taXNlLWNhcGFiaWxpdHknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQywgeCkge1xuICBhbk9iamVjdChDKTtcbiAgaWYgKGlzT2JqZWN0KHgpICYmIHguY29uc3RydWN0b3IgPT09IEMpIHJldHVybiB4O1xuICB2YXIgcHJvbWlzZUNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eS5mKEMpO1xuICB2YXIgcmVzb2x2ZSA9IHByb21pc2VDYXBhYmlsaXR5LnJlc29sdmU7XG4gIHJlc29sdmUoeCk7XG4gIHJldHVybiBwcm9taXNlQ2FwYWJpbGl0eS5wcm9taXNlO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGJpdG1hcCwgdmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZTogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfTtcbn07XG4iLCJ2YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodGFyZ2V0LCBzcmMsIHNhZmUpIHtcbiAgZm9yICh2YXIga2V5IGluIHNyYykgcmVkZWZpbmUodGFyZ2V0LCBrZXksIHNyY1trZXldLCBzYWZlKTtcbiAgcmV0dXJuIHRhcmdldDtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBTUkMgPSByZXF1aXJlKCcuL191aWQnKSgnc3JjJyk7XG52YXIgVE9fU1RSSU5HID0gJ3RvU3RyaW5nJztcbnZhciAkdG9TdHJpbmcgPSBGdW5jdGlvbltUT19TVFJJTkddO1xudmFyIFRQTCA9ICgnJyArICR0b1N0cmluZykuc3BsaXQoVE9fU1RSSU5HKTtcblxucmVxdWlyZSgnLi9fY29yZScpLmluc3BlY3RTb3VyY2UgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuICR0b1N0cmluZy5jYWxsKGl0KTtcbn07XG5cbihtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBrZXksIHZhbCwgc2FmZSkge1xuICB2YXIgaXNGdW5jdGlvbiA9IHR5cGVvZiB2YWwgPT0gJ2Z1bmN0aW9uJztcbiAgaWYgKGlzRnVuY3Rpb24pIGhhcyh2YWwsICduYW1lJykgfHwgaGlkZSh2YWwsICduYW1lJywga2V5KTtcbiAgaWYgKE9ba2V5XSA9PT0gdmFsKSByZXR1cm47XG4gIGlmIChpc0Z1bmN0aW9uKSBoYXModmFsLCBTUkMpIHx8IGhpZGUodmFsLCBTUkMsIE9ba2V5XSA/ICcnICsgT1trZXldIDogVFBMLmpvaW4oU3RyaW5nKGtleSkpKTtcbiAgaWYgKE8gPT09IGdsb2JhbCkge1xuICAgIE9ba2V5XSA9IHZhbDtcbiAgfSBlbHNlIGlmICghc2FmZSkge1xuICAgIGRlbGV0ZSBPW2tleV07XG4gICAgaGlkZShPLCBrZXksIHZhbCk7XG4gIH0gZWxzZSBpZiAoT1trZXldKSB7XG4gICAgT1trZXldID0gdmFsO1xuICB9IGVsc2Uge1xuICAgIGhpZGUoTywga2V5LCB2YWwpO1xuICB9XG4vLyBhZGQgZmFrZSBGdW5jdGlvbiN0b1N0cmluZyBmb3IgY29ycmVjdCB3b3JrIHdyYXBwZWQgbWV0aG9kcyAvIGNvbnN0cnVjdG9ycyB3aXRoIG1ldGhvZHMgbGlrZSBMb0Rhc2ggaXNOYXRpdmVcbn0pKEZ1bmN0aW9uLnByb3RvdHlwZSwgVE9fU1RSSU5HLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuIHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgJiYgdGhpc1tTUkNdIHx8ICR0b1N0cmluZy5jYWxsKHRoaXMpO1xufSk7XG4iLCIvLyBXb3JrcyB3aXRoIF9fcHJvdG9fXyBvbmx5LiBPbGQgdjggY2FuJ3Qgd29yayB3aXRoIG51bGwgcHJvdG8gb2JqZWN0cy5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvICovXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGNoZWNrID0gZnVuY3Rpb24gKE8sIHByb3RvKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBpZiAoIWlzT2JqZWN0KHByb3RvKSAmJiBwcm90byAhPT0gbnVsbCkgdGhyb3cgVHlwZUVycm9yKHByb3RvICsgXCI6IGNhbid0IHNldCBhcyBwcm90b3R5cGUhXCIpO1xufTtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCAoJ19fcHJvdG9fXycgaW4ge30gPyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgZnVuY3Rpb24gKHRlc3QsIGJ1Z2d5LCBzZXQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHNldCA9IHJlcXVpcmUoJy4vX2N0eCcpKEZ1bmN0aW9uLmNhbGwsIHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJykuZihPYmplY3QucHJvdG90eXBlLCAnX19wcm90b19fJykuc2V0LCAyKTtcbiAgICAgICAgc2V0KHRlc3QsIFtdKTtcbiAgICAgICAgYnVnZ3kgPSAhKHRlc3QgaW5zdGFuY2VvZiBBcnJheSk7XG4gICAgICB9IGNhdGNoIChlKSB7IGJ1Z2d5ID0gdHJ1ZTsgfVxuICAgICAgcmV0dXJuIGZ1bmN0aW9uIHNldFByb3RvdHlwZU9mKE8sIHByb3RvKSB7XG4gICAgICAgIGNoZWNrKE8sIHByb3RvKTtcbiAgICAgICAgaWYgKGJ1Z2d5KSBPLl9fcHJvdG9fXyA9IHByb3RvO1xuICAgICAgICBlbHNlIHNldChPLCBwcm90byk7XG4gICAgICAgIHJldHVybiBPO1xuICAgICAgfTtcbiAgICB9KHt9LCBmYWxzZSkgOiB1bmRlZmluZWQpLFxuICBjaGVjazogY2hlY2tcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyk7XG52YXIgU1BFQ0lFUyA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEtFWSkge1xuICB2YXIgQyA9IGdsb2JhbFtLRVldO1xuICBpZiAoREVTQ1JJUFRPUlMgJiYgQyAmJiAhQ1tTUEVDSUVTXSkgZFAuZihDLCBTUEVDSUVTLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfVxuICB9KTtcbn07XG4iLCJ2YXIgZGVmID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIHRhZywgc3RhdCkge1xuICBpZiAoaXQgJiYgIWhhcyhpdCA9IHN0YXQgPyBpdCA6IGl0LnByb3RvdHlwZSwgVEFHKSkgZGVmKGl0LCBUQUcsIHsgY29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogdGFnIH0pO1xufTtcbiIsInZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgna2V5cycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBzaGFyZWRba2V5XSB8fCAoc2hhcmVkW2tleV0gPSB1aWQoa2V5KSk7XG59O1xuIiwidmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXyc7XG52YXIgc3RvcmUgPSBnbG9iYWxbU0hBUkVEXSB8fCAoZ2xvYmFsW1NIQVJFRF0gPSB7fSk7XG5cbihtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0gdmFsdWUgIT09IHVuZGVmaW5lZCA/IHZhbHVlIDoge30pO1xufSkoJ3ZlcnNpb25zJywgW10pLnB1c2goe1xuICB2ZXJzaW9uOiBjb3JlLnZlcnNpb24sXG4gIG1vZGU6IHJlcXVpcmUoJy4vX2xpYnJhcnknKSA/ICdwdXJlJyA6ICdnbG9iYWwnLFxuICBjb3B5cmlnaHQ6ICfCqSAyMDE4IERlbmlzIFB1c2hrYXJldiAoemxvaXJvY2sucnUpJ1xufSk7XG4iLCIvLyA3LjMuMjAgU3BlY2llc0NvbnN0cnVjdG9yKE8sIGRlZmF1bHRDb25zdHJ1Y3RvcilcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbnZhciBTUEVDSUVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE8sIEQpIHtcbiAgdmFyIEMgPSBhbk9iamVjdChPKS5jb25zdHJ1Y3RvcjtcbiAgdmFyIFM7XG4gIHJldHVybiBDID09PSB1bmRlZmluZWQgfHwgKFMgPSBhbk9iamVjdChDKVtTUEVDSUVTXSkgPT0gdW5kZWZpbmVkID8gRCA6IGFGdW5jdGlvbihTKTtcbn07XG4iLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG4vLyB0cnVlICAtPiBTdHJpbmcjYXRcbi8vIGZhbHNlIC0+IFN0cmluZyNjb2RlUG9pbnRBdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoVE9fU1RSSU5HKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodGhhdCwgcG9zKSB7XG4gICAgdmFyIHMgPSBTdHJpbmcoZGVmaW5lZCh0aGF0KSk7XG4gICAgdmFyIGkgPSB0b0ludGVnZXIocG9zKTtcbiAgICB2YXIgbCA9IHMubGVuZ3RoO1xuICAgIHZhciBhLCBiO1xuICAgIGlmIChpIDwgMCB8fCBpID49IGwpIHJldHVybiBUT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcbiAgICBhID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgIHJldHVybiBhIDwgMHhkODAwIHx8IGEgPiAweGRiZmYgfHwgaSArIDEgPT09IGwgfHwgKGIgPSBzLmNoYXJDb2RlQXQoaSArIDEpKSA8IDB4ZGMwMCB8fCBiID4gMHhkZmZmXG4gICAgICA/IFRPX1NUUklORyA/IHMuY2hhckF0KGkpIDogYVxuICAgICAgOiBUT19TVFJJTkcgPyBzLnNsaWNlKGksIGkgKyAyKSA6IChhIC0gMHhkODAwIDw8IDEwKSArIChiIC0gMHhkYzAwKSArIDB4MTAwMDA7XG4gIH07XG59O1xuIiwidmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGludm9rZSA9IHJlcXVpcmUoJy4vX2ludm9rZScpO1xudmFyIGh0bWwgPSByZXF1aXJlKCcuL19odG1sJyk7XG52YXIgY2VsID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciBzZXRUYXNrID0gZ2xvYmFsLnNldEltbWVkaWF0ZTtcbnZhciBjbGVhclRhc2sgPSBnbG9iYWwuY2xlYXJJbW1lZGlhdGU7XG52YXIgTWVzc2FnZUNoYW5uZWwgPSBnbG9iYWwuTWVzc2FnZUNoYW5uZWw7XG52YXIgRGlzcGF0Y2ggPSBnbG9iYWwuRGlzcGF0Y2g7XG52YXIgY291bnRlciA9IDA7XG52YXIgcXVldWUgPSB7fTtcbnZhciBPTlJFQURZU1RBVEVDSEFOR0UgPSAnb25yZWFkeXN0YXRlY2hhbmdlJztcbnZhciBkZWZlciwgY2hhbm5lbCwgcG9ydDtcbnZhciBydW4gPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBpZCA9ICt0aGlzO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG4gIGlmIChxdWV1ZS5oYXNPd25Qcm9wZXJ0eShpZCkpIHtcbiAgICB2YXIgZm4gPSBxdWV1ZVtpZF07XG4gICAgZGVsZXRlIHF1ZXVlW2lkXTtcbiAgICBmbigpO1xuICB9XG59O1xudmFyIGxpc3RlbmVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIHJ1bi5jYWxsKGV2ZW50LmRhdGEpO1xufTtcbi8vIE5vZGUuanMgMC45KyAmIElFMTArIGhhcyBzZXRJbW1lZGlhdGUsIG90aGVyd2lzZTpcbmlmICghc2V0VGFzayB8fCAhY2xlYXJUYXNrKSB7XG4gIHNldFRhc2sgPSBmdW5jdGlvbiBzZXRJbW1lZGlhdGUoZm4pIHtcbiAgICB2YXIgYXJncyA9IFtdO1xuICAgIHZhciBpID0gMTtcbiAgICB3aGlsZSAoYXJndW1lbnRzLmxlbmd0aCA+IGkpIGFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgcXVldWVbKytjb3VudGVyXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICAgICAgaW52b2tlKHR5cGVvZiBmbiA9PSAnZnVuY3Rpb24nID8gZm4gOiBGdW5jdGlvbihmbiksIGFyZ3MpO1xuICAgIH07XG4gICAgZGVmZXIoY291bnRlcik7XG4gICAgcmV0dXJuIGNvdW50ZXI7XG4gIH07XG4gIGNsZWFyVGFzayA9IGZ1bmN0aW9uIGNsZWFySW1tZWRpYXRlKGlkKSB7XG4gICAgZGVsZXRlIHF1ZXVlW2lkXTtcbiAgfTtcbiAgLy8gTm9kZS5qcyAwLjgtXG4gIGlmIChyZXF1aXJlKCcuL19jb2YnKShwcm9jZXNzKSA9PSAncHJvY2VzcycpIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhjdHgocnVuLCBpZCwgMSkpO1xuICAgIH07XG4gIC8vIFNwaGVyZSAoSlMgZ2FtZSBlbmdpbmUpIERpc3BhdGNoIEFQSVxuICB9IGVsc2UgaWYgKERpc3BhdGNoICYmIERpc3BhdGNoLm5vdykge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBEaXNwYXRjaC5ub3coY3R4KHJ1biwgaWQsIDEpKTtcbiAgICB9O1xuICAvLyBCcm93c2VycyB3aXRoIE1lc3NhZ2VDaGFubmVsLCBpbmNsdWRlcyBXZWJXb3JrZXJzXG4gIH0gZWxzZSBpZiAoTWVzc2FnZUNoYW5uZWwpIHtcbiAgICBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgcG9ydCA9IGNoYW5uZWwucG9ydDI7XG4gICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBsaXN0ZW5lcjtcbiAgICBkZWZlciA9IGN0eChwb3J0LnBvc3RNZXNzYWdlLCBwb3J0LCAxKTtcbiAgLy8gQnJvd3NlcnMgd2l0aCBwb3N0TWVzc2FnZSwgc2tpcCBXZWJXb3JrZXJzXG4gIC8vIElFOCBoYXMgcG9zdE1lc3NhZ2UsIGJ1dCBpdCdzIHN5bmMgJiB0eXBlb2YgaXRzIHBvc3RNZXNzYWdlIGlzICdvYmplY3QnXG4gIH0gZWxzZSBpZiAoZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIgJiYgdHlwZW9mIHBvc3RNZXNzYWdlID09ICdmdW5jdGlvbicgJiYgIWdsb2JhbC5pbXBvcnRTY3JpcHRzKSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShpZCArICcnLCAnKicpO1xuICAgIH07XG4gICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBsaXN0ZW5lciwgZmFsc2UpO1xuICAvLyBJRTgtXG4gIH0gZWxzZSBpZiAoT05SRUFEWVNUQVRFQ0hBTkdFIGluIGNlbCgnc2NyaXB0JykpIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgaHRtbC5hcHBlbmRDaGlsZChjZWwoJ3NjcmlwdCcpKVtPTlJFQURZU1RBVEVDSEFOR0VdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBodG1sLnJlbW92ZUNoaWxkKHRoaXMpO1xuICAgICAgICBydW4uY2FsbChpZCk7XG4gICAgICB9O1xuICAgIH07XG4gIC8vIFJlc3Qgb2xkIGJyb3dzZXJzXG4gIH0gZWxzZSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIHNldFRpbWVvdXQoY3R4KHJ1biwgaWQsIDEpLCAwKTtcbiAgICB9O1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiBzZXRUYXNrLFxuICBjbGVhcjogY2xlYXJUYXNrXG59O1xuIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBtYXggPSBNYXRoLm1heDtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGluZGV4LCBsZW5ndGgpIHtcbiAgaW5kZXggPSB0b0ludGVnZXIoaW5kZXgpO1xuICByZXR1cm4gaW5kZXggPCAwID8gbWF4KGluZGV4ICsgbGVuZ3RoLCAwKSA6IG1pbihpbmRleCwgbGVuZ3RoKTtcbn07XG4iLCIvLyA3LjEuNCBUb0ludGVnZXJcbnZhciBjZWlsID0gTWF0aC5jZWlsO1xudmFyIGZsb29yID0gTWF0aC5mbG9vcjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xufTtcbiIsIi8vIHRvIGluZGV4ZWQgb2JqZWN0LCB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0Jyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBJT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG4iLCIvLyA3LjEuMTUgVG9MZW5ndGhcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgbWluID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgPiAwID8gbWluKHRvSW50ZWdlcihpdCksIDB4MWZmZmZmZmZmZmZmZmYpIDogMDsgLy8gcG93KDIsIDUzKSAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcbiIsIi8vIDcuMS4xMyBUb09iamVjdChhcmd1bWVudClcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIE9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuIiwiLy8gNy4xLjEgVG9QcmltaXRpdmUoaW5wdXQgWywgUHJlZmVycmVkVHlwZV0pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIFMpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHJldHVybiBpdDtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmIChTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAodHlwZW9mIChmbiA9IGl0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKCFTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59O1xuIiwidmFyIGlkID0gMDtcbnZhciBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgbmF2aWdhdG9yID0gZ2xvYmFsLm5hdmlnYXRvcjtcblxubW9kdWxlLmV4cG9ydHMgPSBuYXZpZ2F0b3IgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCB8fCAnJztcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIFRZUEUpIHtcbiAgaWYgKCFpc09iamVjdChpdCkgfHwgaXQuX3QgIT09IFRZUEUpIHRocm93IFR5cGVFcnJvcignSW5jb21wYXRpYmxlIHJlY2VpdmVyLCAnICsgVFlQRSArICcgcmVxdWlyZWQhJyk7XG4gIHJldHVybiBpdDtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBMSUJSQVJZID0gcmVxdWlyZSgnLi9fbGlicmFyeScpO1xudmFyIHdrc0V4dCA9IHJlcXVpcmUoJy4vX3drcy1leHQnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHZhciAkU3ltYm9sID0gY29yZS5TeW1ib2wgfHwgKGNvcmUuU3ltYm9sID0gTElCUkFSWSA/IHt9IDogZ2xvYmFsLlN5bWJvbCB8fCB7fSk7XG4gIGlmIChuYW1lLmNoYXJBdCgwKSAhPSAnXycgJiYgIShuYW1lIGluICRTeW1ib2wpKSBkZWZpbmVQcm9wZXJ0eSgkU3ltYm9sLCBuYW1lLCB7IHZhbHVlOiB3a3NFeHQuZihuYW1lKSB9KTtcbn07XG4iLCJleHBvcnRzLmYgPSByZXF1aXJlKCcuL193a3MnKTtcbiIsInZhciBzdG9yZSA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCd3a3MnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbnZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5TeW1ib2w7XG52YXIgVVNFX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcblxudmFyICRleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gc3RvcmVbbmFtZV0gfHwgKHN0b3JlW25hbWVdID1cbiAgICBVU0VfU1lNQk9MICYmIFN5bWJvbFtuYW1lXSB8fCAoVVNFX1NZTUJPTCA/IFN5bWJvbCA6IHVpZCkoJ1N5bWJvbC4nICsgbmFtZSkpO1xufTtcblxuJGV4cG9ydHMuc3RvcmUgPSBzdG9yZTtcbiIsInZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpO1xudmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvcmUnKS5nZXRJdGVyYXRvck1ldGhvZCA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgIT0gdW5kZWZpbmVkKSByZXR1cm4gaXRbSVRFUkFUT1JdXG4gICAgfHwgaXRbJ0BAaXRlcmF0b3InXVxuICAgIHx8IEl0ZXJhdG9yc1tjbGFzc29mKGl0KV07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuL19pdGVyLWNhbGwnKTtcbnZhciBpc0FycmF5SXRlciA9IHJlcXVpcmUoJy4vX2lzLWFycmF5LWl0ZXInKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIGNyZWF0ZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fY3JlYXRlLXByb3BlcnR5Jyk7XG52YXIgZ2V0SXRlckZuID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhcmVxdWlyZSgnLi9faXRlci1kZXRlY3QnKShmdW5jdGlvbiAoaXRlcikgeyBBcnJheS5mcm9tKGl0ZXIpOyB9KSwgJ0FycmF5Jywge1xuICAvLyAyMi4xLjIuMSBBcnJheS5mcm9tKGFycmF5TGlrZSwgbWFwZm4gPSB1bmRlZmluZWQsIHRoaXNBcmcgPSB1bmRlZmluZWQpXG4gIGZyb206IGZ1bmN0aW9uIGZyb20oYXJyYXlMaWtlIC8qICwgbWFwZm4gPSB1bmRlZmluZWQsIHRoaXNBcmcgPSB1bmRlZmluZWQgKi8pIHtcbiAgICB2YXIgTyA9IHRvT2JqZWN0KGFycmF5TGlrZSk7XG4gICAgdmFyIEMgPSB0eXBlb2YgdGhpcyA9PSAnZnVuY3Rpb24nID8gdGhpcyA6IEFycmF5O1xuICAgIHZhciBhTGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICB2YXIgbWFwZm4gPSBhTGVuID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZDtcbiAgICB2YXIgbWFwcGluZyA9IG1hcGZuICE9PSB1bmRlZmluZWQ7XG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICB2YXIgaXRlckZuID0gZ2V0SXRlckZuKE8pO1xuICAgIHZhciBsZW5ndGgsIHJlc3VsdCwgc3RlcCwgaXRlcmF0b3I7XG4gICAgaWYgKG1hcHBpbmcpIG1hcGZuID0gY3R4KG1hcGZuLCBhTGVuID4gMiA/IGFyZ3VtZW50c1syXSA6IHVuZGVmaW5lZCwgMik7XG4gICAgLy8gaWYgb2JqZWN0IGlzbid0IGl0ZXJhYmxlIG9yIGl0J3MgYXJyYXkgd2l0aCBkZWZhdWx0IGl0ZXJhdG9yIC0gdXNlIHNpbXBsZSBjYXNlXG4gICAgaWYgKGl0ZXJGbiAhPSB1bmRlZmluZWQgJiYgIShDID09IEFycmF5ICYmIGlzQXJyYXlJdGVyKGl0ZXJGbikpKSB7XG4gICAgICBmb3IgKGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoTyksIHJlc3VsdCA9IG5ldyBDKCk7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTsgaW5kZXgrKykge1xuICAgICAgICBjcmVhdGVQcm9wZXJ0eShyZXN1bHQsIGluZGV4LCBtYXBwaW5nID8gY2FsbChpdGVyYXRvciwgbWFwZm4sIFtzdGVwLnZhbHVlLCBpbmRleF0sIHRydWUpIDogc3RlcC52YWx1ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICAgIGZvciAocmVzdWx0ID0gbmV3IEMobGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcbiAgICAgICAgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBpbmRleCwgbWFwcGluZyA/IG1hcGZuKE9baW5kZXhdLCBpbmRleCkgOiBPW2luZGV4XSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJlc3VsdC5sZW5ndGggPSBpbmRleDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi9fYWRkLXRvLXVuc2NvcGFibGVzJyk7XG52YXIgc3RlcCA9IHJlcXVpcmUoJy4vX2l0ZXItc3RlcCcpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcblxuLy8gMjIuMS4zLjQgQXJyYXkucHJvdG90eXBlLmVudHJpZXMoKVxuLy8gMjIuMS4zLjEzIEFycmF5LnByb3RvdHlwZS5rZXlzKClcbi8vIDIyLjEuMy4yOSBBcnJheS5wcm90b3R5cGUudmFsdWVzKClcbi8vIDIyLjEuMy4zMCBBcnJheS5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbiAoaXRlcmF0ZWQsIGtpbmQpIHtcbiAgdGhpcy5fdCA9IHRvSU9iamVjdChpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuICB0aGlzLl9rID0ga2luZDsgICAgICAgICAgICAgICAgLy8ga2luZFxuLy8gMjIuMS41LjIuMSAlQXJyYXlJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbiAoKSB7XG4gIHZhciBPID0gdGhpcy5fdDtcbiAgdmFyIGtpbmQgPSB0aGlzLl9rO1xuICB2YXIgaW5kZXggPSB0aGlzLl9pKys7XG4gIGlmICghTyB8fCBpbmRleCA+PSBPLmxlbmd0aCkge1xuICAgIHRoaXMuX3QgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHN0ZXAoMSk7XG4gIH1cbiAgaWYgKGtpbmQgPT0gJ2tleXMnKSByZXR1cm4gc3RlcCgwLCBpbmRleCk7XG4gIGlmIChraW5kID09ICd2YWx1ZXMnKSByZXR1cm4gc3RlcCgwLCBPW2luZGV4XSk7XG4gIHJldHVybiBzdGVwKDAsIFtpbmRleCwgT1tpbmRleF1dKTtcbn0sICd2YWx1ZXMnKTtcblxuLy8gYXJndW1lbnRzTGlzdFtAQGl0ZXJhdG9yXSBpcyAlQXJyYXlQcm90b192YWx1ZXMlICg5LjQuNC42LCA5LjQuNC43KVxuSXRlcmF0b3JzLkFyZ3VtZW50cyA9IEl0ZXJhdG9ycy5BcnJheTtcblxuYWRkVG9VbnNjb3BhYmxlcygna2V5cycpO1xuYWRkVG9VbnNjb3BhYmxlcygndmFsdWVzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCdlbnRyaWVzJyk7XG4iLCJ2YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xudmFyIEZQcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbnZhciBuYW1lUkUgPSAvXlxccypmdW5jdGlvbiAoW14gKF0qKS87XG52YXIgTkFNRSA9ICduYW1lJztcblxuLy8gMTkuMi40LjIgbmFtZVxuTkFNRSBpbiBGUHJvdG8gfHwgcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiBkUChGUHJvdG8sIE5BTUUsIHtcbiAgY29uZmlndXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuICgnJyArIHRoaXMpLm1hdGNoKG5hbWVSRSlbMV07XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgc3Ryb25nID0gcmVxdWlyZSgnLi9fY29sbGVjdGlvbi1zdHJvbmcnKTtcbnZhciB2YWxpZGF0ZSA9IHJlcXVpcmUoJy4vX3ZhbGlkYXRlLWNvbGxlY3Rpb24nKTtcbnZhciBNQVAgPSAnTWFwJztcblxuLy8gMjMuMSBNYXAgT2JqZWN0c1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb2xsZWN0aW9uJykoTUFQLCBmdW5jdGlvbiAoZ2V0KSB7XG4gIHJldHVybiBmdW5jdGlvbiBNYXAoKSB7IHJldHVybiBnZXQodGhpcywgYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpOyB9O1xufSwge1xuICAvLyAyMy4xLjMuNiBNYXAucHJvdG90eXBlLmdldChrZXkpXG4gIGdldDogZnVuY3Rpb24gZ2V0KGtleSkge1xuICAgIHZhciBlbnRyeSA9IHN0cm9uZy5nZXRFbnRyeSh2YWxpZGF0ZSh0aGlzLCBNQVApLCBrZXkpO1xuICAgIHJldHVybiBlbnRyeSAmJiBlbnRyeS52O1xuICB9LFxuICAvLyAyMy4xLjMuOSBNYXAucHJvdG90eXBlLnNldChrZXksIHZhbHVlKVxuICBzZXQ6IGZ1bmN0aW9uIHNldChrZXksIHZhbHVlKSB7XG4gICAgcmV0dXJuIHN0cm9uZy5kZWYodmFsaWRhdGUodGhpcywgTUFQKSwga2V5ID09PSAwID8gMCA6IGtleSwgdmFsdWUpO1xuICB9XG59LCBzdHJvbmcsIHRydWUpO1xuIiwiLy8gMTkuMS4zLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSlcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GLCAnT2JqZWN0JywgeyBhc3NpZ246IHJlcXVpcmUoJy4vX29iamVjdC1hc3NpZ24nKSB9KTtcbiIsIi8vIDE5LjEuMi4xNCBPYmplY3Qua2V5cyhPKVxudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5yZXF1aXJlKCcuL19vYmplY3Qtc2FwJykoJ2tleXMnLCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBmdW5jdGlvbiBrZXlzKGl0KSB7XG4gICAgcmV0dXJuICRrZXlzKHRvT2JqZWN0KGl0KSk7XG4gIH07XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZID0gcmVxdWlyZSgnLi9fbGlicmFyeScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL19jbGFzc29mJyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xudmFyIGFuSW5zdGFuY2UgPSByZXF1aXJlKCcuL19hbi1pbnN0YW5jZScpO1xudmFyIGZvck9mID0gcmVxdWlyZSgnLi9fZm9yLW9mJyk7XG52YXIgc3BlY2llc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi9fc3BlY2llcy1jb25zdHJ1Y3RvcicpO1xudmFyIHRhc2sgPSByZXF1aXJlKCcuL190YXNrJykuc2V0O1xudmFyIG1pY3JvdGFzayA9IHJlcXVpcmUoJy4vX21pY3JvdGFzaycpKCk7XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUgPSByZXF1aXJlKCcuL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5Jyk7XG52YXIgcGVyZm9ybSA9IHJlcXVpcmUoJy4vX3BlcmZvcm0nKTtcbnZhciB1c2VyQWdlbnQgPSByZXF1aXJlKCcuL191c2VyLWFnZW50Jyk7XG52YXIgcHJvbWlzZVJlc29sdmUgPSByZXF1aXJlKCcuL19wcm9taXNlLXJlc29sdmUnKTtcbnZhciBQUk9NSVNFID0gJ1Byb21pc2UnO1xudmFyIFR5cGVFcnJvciA9IGdsb2JhbC5UeXBlRXJyb3I7XG52YXIgcHJvY2VzcyA9IGdsb2JhbC5wcm9jZXNzO1xudmFyIHZlcnNpb25zID0gcHJvY2VzcyAmJiBwcm9jZXNzLnZlcnNpb25zO1xudmFyIHY4ID0gdmVyc2lvbnMgJiYgdmVyc2lvbnMudjggfHwgJyc7XG52YXIgJFByb21pc2UgPSBnbG9iYWxbUFJPTUlTRV07XG52YXIgaXNOb2RlID0gY2xhc3NvZihwcm9jZXNzKSA9PSAncHJvY2Vzcyc7XG52YXIgZW1wdHkgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG52YXIgSW50ZXJuYWwsIG5ld0dlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSwgT3duUHJvbWlzZUNhcGFiaWxpdHksIFdyYXBwZXI7XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSBuZXdHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eU1vZHVsZS5mO1xuXG52YXIgVVNFX05BVElWRSA9ICEhZnVuY3Rpb24gKCkge1xuICB0cnkge1xuICAgIC8vIGNvcnJlY3Qgc3ViY2xhc3Npbmcgd2l0aCBAQHNwZWNpZXMgc3VwcG9ydFxuICAgIHZhciBwcm9taXNlID0gJFByb21pc2UucmVzb2x2ZSgxKTtcbiAgICB2YXIgRmFrZVByb21pc2UgPSAocHJvbWlzZS5jb25zdHJ1Y3RvciA9IHt9KVtyZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpXSA9IGZ1bmN0aW9uIChleGVjKSB7XG4gICAgICBleGVjKGVtcHR5LCBlbXB0eSk7XG4gICAgfTtcbiAgICAvLyB1bmhhbmRsZWQgcmVqZWN0aW9ucyB0cmFja2luZyBzdXBwb3J0LCBOb2RlSlMgUHJvbWlzZSB3aXRob3V0IGl0IGZhaWxzIEBAc3BlY2llcyB0ZXN0XG4gICAgcmV0dXJuIChpc05vZGUgfHwgdHlwZW9mIFByb21pc2VSZWplY3Rpb25FdmVudCA9PSAnZnVuY3Rpb24nKVxuICAgICAgJiYgcHJvbWlzZS50aGVuKGVtcHR5KSBpbnN0YW5jZW9mIEZha2VQcm9taXNlXG4gICAgICAvLyB2OCA2LjYgKE5vZGUgMTAgYW5kIENocm9tZSA2NikgaGF2ZSBhIGJ1ZyB3aXRoIHJlc29sdmluZyBjdXN0b20gdGhlbmFibGVzXG4gICAgICAvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD04MzA1NjVcbiAgICAgIC8vIHdlIGNhbid0IGRldGVjdCBpdCBzeW5jaHJvbm91c2x5LCBzbyBqdXN0IGNoZWNrIHZlcnNpb25zXG4gICAgICAmJiB2OC5pbmRleE9mKCc2LjYnKSAhPT0gMFxuICAgICAgJiYgdXNlckFnZW50LmluZGV4T2YoJ0Nocm9tZS82NicpID09PSAtMTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG59KCk7XG5cbi8vIGhlbHBlcnNcbnZhciBpc1RoZW5hYmxlID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciB0aGVuO1xuICByZXR1cm4gaXNPYmplY3QoaXQpICYmIHR5cGVvZiAodGhlbiA9IGl0LnRoZW4pID09ICdmdW5jdGlvbicgPyB0aGVuIDogZmFsc2U7XG59O1xudmFyIG5vdGlmeSA9IGZ1bmN0aW9uIChwcm9taXNlLCBpc1JlamVjdCkge1xuICBpZiAocHJvbWlzZS5fbikgcmV0dXJuO1xuICBwcm9taXNlLl9uID0gdHJ1ZTtcbiAgdmFyIGNoYWluID0gcHJvbWlzZS5fYztcbiAgbWljcm90YXNrKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdmFsdWUgPSBwcm9taXNlLl92O1xuICAgIHZhciBvayA9IHByb21pc2UuX3MgPT0gMTtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHJ1biA9IGZ1bmN0aW9uIChyZWFjdGlvbikge1xuICAgICAgdmFyIGhhbmRsZXIgPSBvayA/IHJlYWN0aW9uLm9rIDogcmVhY3Rpb24uZmFpbDtcbiAgICAgIHZhciByZXNvbHZlID0gcmVhY3Rpb24ucmVzb2x2ZTtcbiAgICAgIHZhciByZWplY3QgPSByZWFjdGlvbi5yZWplY3Q7XG4gICAgICB2YXIgZG9tYWluID0gcmVhY3Rpb24uZG9tYWluO1xuICAgICAgdmFyIHJlc3VsdCwgdGhlbiwgZXhpdGVkO1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKGhhbmRsZXIpIHtcbiAgICAgICAgICBpZiAoIW9rKSB7XG4gICAgICAgICAgICBpZiAocHJvbWlzZS5faCA9PSAyKSBvbkhhbmRsZVVuaGFuZGxlZChwcm9taXNlKTtcbiAgICAgICAgICAgIHByb21pc2UuX2ggPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaGFuZGxlciA9PT0gdHJ1ZSkgcmVzdWx0ID0gdmFsdWU7XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoZG9tYWluKSBkb21haW4uZW50ZXIoKTtcbiAgICAgICAgICAgIHJlc3VsdCA9IGhhbmRsZXIodmFsdWUpOyAvLyBtYXkgdGhyb3dcbiAgICAgICAgICAgIGlmIChkb21haW4pIHtcbiAgICAgICAgICAgICAgZG9tYWluLmV4aXQoKTtcbiAgICAgICAgICAgICAgZXhpdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHJlc3VsdCA9PT0gcmVhY3Rpb24ucHJvbWlzZSkge1xuICAgICAgICAgICAgcmVqZWN0KFR5cGVFcnJvcignUHJvbWlzZS1jaGFpbiBjeWNsZScpKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHRoZW4gPSBpc1RoZW5hYmxlKHJlc3VsdCkpIHtcbiAgICAgICAgICAgIHRoZW4uY2FsbChyZXN1bHQsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSBlbHNlIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIHJlamVjdCh2YWx1ZSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGlmIChkb21haW4gJiYgIWV4aXRlZCkgZG9tYWluLmV4aXQoKTtcbiAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgfVxuICAgIH07XG4gICAgd2hpbGUgKGNoYWluLmxlbmd0aCA+IGkpIHJ1bihjaGFpbltpKytdKTsgLy8gdmFyaWFibGUgbGVuZ3RoIC0gY2FuJ3QgdXNlIGZvckVhY2hcbiAgICBwcm9taXNlLl9jID0gW107XG4gICAgcHJvbWlzZS5fbiA9IGZhbHNlO1xuICAgIGlmIChpc1JlamVjdCAmJiAhcHJvbWlzZS5faCkgb25VbmhhbmRsZWQocHJvbWlzZSk7XG4gIH0pO1xufTtcbnZhciBvblVuaGFuZGxlZCA9IGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gIHRhc2suY2FsbChnbG9iYWwsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdmFsdWUgPSBwcm9taXNlLl92O1xuICAgIHZhciB1bmhhbmRsZWQgPSBpc1VuaGFuZGxlZChwcm9taXNlKTtcbiAgICB2YXIgcmVzdWx0LCBoYW5kbGVyLCBjb25zb2xlO1xuICAgIGlmICh1bmhhbmRsZWQpIHtcbiAgICAgIHJlc3VsdCA9IHBlcmZvcm0oZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoaXNOb2RlKSB7XG4gICAgICAgICAgcHJvY2Vzcy5lbWl0KCd1bmhhbmRsZWRSZWplY3Rpb24nLCB2YWx1ZSwgcHJvbWlzZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoaGFuZGxlciA9IGdsb2JhbC5vbnVuaGFuZGxlZHJlamVjdGlvbikge1xuICAgICAgICAgIGhhbmRsZXIoeyBwcm9taXNlOiBwcm9taXNlLCByZWFzb246IHZhbHVlIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKChjb25zb2xlID0gZ2xvYmFsLmNvbnNvbGUpICYmIGNvbnNvbGUuZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdVbmhhbmRsZWQgcHJvbWlzZSByZWplY3Rpb24nLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgLy8gQnJvd3NlcnMgc2hvdWxkIG5vdCB0cmlnZ2VyIGByZWplY3Rpb25IYW5kbGVkYCBldmVudCBpZiBpdCB3YXMgaGFuZGxlZCBoZXJlLCBOb2RlSlMgLSBzaG91bGRcbiAgICAgIHByb21pc2UuX2ggPSBpc05vZGUgfHwgaXNVbmhhbmRsZWQocHJvbWlzZSkgPyAyIDogMTtcbiAgICB9IHByb21pc2UuX2EgPSB1bmRlZmluZWQ7XG4gICAgaWYgKHVuaGFuZGxlZCAmJiByZXN1bHQuZSkgdGhyb3cgcmVzdWx0LnY7XG4gIH0pO1xufTtcbnZhciBpc1VuaGFuZGxlZCA9IGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gIHJldHVybiBwcm9taXNlLl9oICE9PSAxICYmIChwcm9taXNlLl9hIHx8IHByb21pc2UuX2MpLmxlbmd0aCA9PT0gMDtcbn07XG52YXIgb25IYW5kbGVVbmhhbmRsZWQgPSBmdW5jdGlvbiAocHJvbWlzZSkge1xuICB0YXNrLmNhbGwoZ2xvYmFsLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGhhbmRsZXI7XG4gICAgaWYgKGlzTm9kZSkge1xuICAgICAgcHJvY2Vzcy5lbWl0KCdyZWplY3Rpb25IYW5kbGVkJywgcHJvbWlzZSk7XG4gICAgfSBlbHNlIGlmIChoYW5kbGVyID0gZ2xvYmFsLm9ucmVqZWN0aW9uaGFuZGxlZCkge1xuICAgICAgaGFuZGxlcih7IHByb21pc2U6IHByb21pc2UsIHJlYXNvbjogcHJvbWlzZS5fdiB9KTtcbiAgICB9XG4gIH0pO1xufTtcbnZhciAkcmVqZWN0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHZhciBwcm9taXNlID0gdGhpcztcbiAgaWYgKHByb21pc2UuX2QpIHJldHVybjtcbiAgcHJvbWlzZS5fZCA9IHRydWU7XG4gIHByb21pc2UgPSBwcm9taXNlLl93IHx8IHByb21pc2U7IC8vIHVud3JhcFxuICBwcm9taXNlLl92ID0gdmFsdWU7XG4gIHByb21pc2UuX3MgPSAyO1xuICBpZiAoIXByb21pc2UuX2EpIHByb21pc2UuX2EgPSBwcm9taXNlLl9jLnNsaWNlKCk7XG4gIG5vdGlmeShwcm9taXNlLCB0cnVlKTtcbn07XG52YXIgJHJlc29sdmUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgdmFyIHByb21pc2UgPSB0aGlzO1xuICB2YXIgdGhlbjtcbiAgaWYgKHByb21pc2UuX2QpIHJldHVybjtcbiAgcHJvbWlzZS5fZCA9IHRydWU7XG4gIHByb21pc2UgPSBwcm9taXNlLl93IHx8IHByb21pc2U7IC8vIHVud3JhcFxuICB0cnkge1xuICAgIGlmIChwcm9taXNlID09PSB2YWx1ZSkgdGhyb3cgVHlwZUVycm9yKFwiUHJvbWlzZSBjYW4ndCBiZSByZXNvbHZlZCBpdHNlbGZcIik7XG4gICAgaWYgKHRoZW4gPSBpc1RoZW5hYmxlKHZhbHVlKSkge1xuICAgICAgbWljcm90YXNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHdyYXBwZXIgPSB7IF93OiBwcm9taXNlLCBfZDogZmFsc2UgfTsgLy8gd3JhcFxuICAgICAgICB0cnkge1xuICAgICAgICAgIHRoZW4uY2FsbCh2YWx1ZSwgY3R4KCRyZXNvbHZlLCB3cmFwcGVyLCAxKSwgY3R4KCRyZWplY3QsIHdyYXBwZXIsIDEpKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICRyZWplY3QuY2FsbCh3cmFwcGVyLCBlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb21pc2UuX3YgPSB2YWx1ZTtcbiAgICAgIHByb21pc2UuX3MgPSAxO1xuICAgICAgbm90aWZ5KHByb21pc2UsIGZhbHNlKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICAkcmVqZWN0LmNhbGwoeyBfdzogcHJvbWlzZSwgX2Q6IGZhbHNlIH0sIGUpOyAvLyB3cmFwXG4gIH1cbn07XG5cbi8vIGNvbnN0cnVjdG9yIHBvbHlmaWxsXG5pZiAoIVVTRV9OQVRJVkUpIHtcbiAgLy8gMjUuNC4zLjEgUHJvbWlzZShleGVjdXRvcilcbiAgJFByb21pc2UgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKSB7XG4gICAgYW5JbnN0YW5jZSh0aGlzLCAkUHJvbWlzZSwgUFJPTUlTRSwgJ19oJyk7XG4gICAgYUZ1bmN0aW9uKGV4ZWN1dG9yKTtcbiAgICBJbnRlcm5hbC5jYWxsKHRoaXMpO1xuICAgIHRyeSB7XG4gICAgICBleGVjdXRvcihjdHgoJHJlc29sdmUsIHRoaXMsIDEpLCBjdHgoJHJlamVjdCwgdGhpcywgMSkpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgJHJlamVjdC5jYWxsKHRoaXMsIGVycik7XG4gICAgfVxuICB9O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgSW50ZXJuYWwgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKSB7XG4gICAgdGhpcy5fYyA9IFtdOyAgICAgICAgICAgICAvLyA8LSBhd2FpdGluZyByZWFjdGlvbnNcbiAgICB0aGlzLl9hID0gdW5kZWZpbmVkOyAgICAgIC8vIDwtIGNoZWNrZWQgaW4gaXNVbmhhbmRsZWQgcmVhY3Rpb25zXG4gICAgdGhpcy5fcyA9IDA7ICAgICAgICAgICAgICAvLyA8LSBzdGF0ZVxuICAgIHRoaXMuX2QgPSBmYWxzZTsgICAgICAgICAgLy8gPC0gZG9uZVxuICAgIHRoaXMuX3YgPSB1bmRlZmluZWQ7ICAgICAgLy8gPC0gdmFsdWVcbiAgICB0aGlzLl9oID0gMDsgICAgICAgICAgICAgIC8vIDwtIHJlamVjdGlvbiBzdGF0ZSwgMCAtIGRlZmF1bHQsIDEgLSBoYW5kbGVkLCAyIC0gdW5oYW5kbGVkXG4gICAgdGhpcy5fbiA9IGZhbHNlOyAgICAgICAgICAvLyA8LSBub3RpZnlcbiAgfTtcbiAgSW50ZXJuYWwucHJvdG90eXBlID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUtYWxsJykoJFByb21pc2UucHJvdG90eXBlLCB7XG4gICAgLy8gMjUuNC41LjMgUHJvbWlzZS5wcm90b3R5cGUudGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZClcbiAgICB0aGVuOiBmdW5jdGlvbiB0aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKSB7XG4gICAgICB2YXIgcmVhY3Rpb24gPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShzcGVjaWVzQ29uc3RydWN0b3IodGhpcywgJFByb21pc2UpKTtcbiAgICAgIHJlYWN0aW9uLm9rID0gdHlwZW9mIG9uRnVsZmlsbGVkID09ICdmdW5jdGlvbicgPyBvbkZ1bGZpbGxlZCA6IHRydWU7XG4gICAgICByZWFjdGlvbi5mYWlsID0gdHlwZW9mIG9uUmVqZWN0ZWQgPT0gJ2Z1bmN0aW9uJyAmJiBvblJlamVjdGVkO1xuICAgICAgcmVhY3Rpb24uZG9tYWluID0gaXNOb2RlID8gcHJvY2Vzcy5kb21haW4gOiB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jLnB1c2gocmVhY3Rpb24pO1xuICAgICAgaWYgKHRoaXMuX2EpIHRoaXMuX2EucHVzaChyZWFjdGlvbik7XG4gICAgICBpZiAodGhpcy5fcykgbm90aWZ5KHRoaXMsIGZhbHNlKTtcbiAgICAgIHJldHVybiByZWFjdGlvbi5wcm9taXNlO1xuICAgIH0sXG4gICAgLy8gMjUuNC41LjEgUHJvbWlzZS5wcm90b3R5cGUuY2F0Y2gob25SZWplY3RlZClcbiAgICAnY2F0Y2gnOiBmdW5jdGlvbiAob25SZWplY3RlZCkge1xuICAgICAgcmV0dXJuIHRoaXMudGhlbih1bmRlZmluZWQsIG9uUmVqZWN0ZWQpO1xuICAgIH1cbiAgfSk7XG4gIE93blByb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBwcm9taXNlID0gbmV3IEludGVybmFsKCk7XG4gICAgdGhpcy5wcm9taXNlID0gcHJvbWlzZTtcbiAgICB0aGlzLnJlc29sdmUgPSBjdHgoJHJlc29sdmUsIHByb21pc2UsIDEpO1xuICAgIHRoaXMucmVqZWN0ID0gY3R4KCRyZWplY3QsIHByb21pc2UsIDEpO1xuICB9O1xuICBuZXdQcm9taXNlQ2FwYWJpbGl0eU1vZHVsZS5mID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbiAoQykge1xuICAgIHJldHVybiBDID09PSAkUHJvbWlzZSB8fCBDID09PSBXcmFwcGVyXG4gICAgICA/IG5ldyBPd25Qcm9taXNlQ2FwYWJpbGl0eShDKVxuICAgICAgOiBuZXdHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkoQyk7XG4gIH07XG59XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIHsgUHJvbWlzZTogJFByb21pc2UgfSk7XG5yZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpKCRQcm9taXNlLCBQUk9NSVNFKTtcbnJlcXVpcmUoJy4vX3NldC1zcGVjaWVzJykoUFJPTUlTRSk7XG5XcmFwcGVyID0gcmVxdWlyZSgnLi9fY29yZScpW1BST01JU0VdO1xuXG4vLyBzdGF0aWNzXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC41IFByb21pc2UucmVqZWN0KHIpXG4gIHJlamVjdDogZnVuY3Rpb24gcmVqZWN0KHIpIHtcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHRoaXMpO1xuICAgIHZhciAkJHJlamVjdCA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgICQkcmVqZWN0KHIpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoTElCUkFSWSB8fCAhVVNFX05BVElWRSksIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjYgUHJvbWlzZS5yZXNvbHZlKHgpXG4gIHJlc29sdmU6IGZ1bmN0aW9uIHJlc29sdmUoeCkge1xuICAgIHJldHVybiBwcm9taXNlUmVzb2x2ZShMSUJSQVJZICYmIHRoaXMgPT09IFdyYXBwZXIgPyAkUHJvbWlzZSA6IHRoaXMsIHgpO1xuICB9XG59KTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIShVU0VfTkFUSVZFICYmIHJlcXVpcmUoJy4vX2l0ZXItZGV0ZWN0JykoZnVuY3Rpb24gKGl0ZXIpIHtcbiAgJFByb21pc2UuYWxsKGl0ZXIpWydjYXRjaCddKGVtcHR5KTtcbn0pKSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuMSBQcm9taXNlLmFsbChpdGVyYWJsZSlcbiAgYWxsOiBmdW5jdGlvbiBhbGwoaXRlcmFibGUpIHtcbiAgICB2YXIgQyA9IHRoaXM7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKTtcbiAgICB2YXIgcmVzb2x2ZSA9IGNhcGFiaWxpdHkucmVzb2x2ZTtcbiAgICB2YXIgcmVqZWN0ID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIHJlc3VsdCA9IHBlcmZvcm0oZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHZhbHVlcyA9IFtdO1xuICAgICAgdmFyIGluZGV4ID0gMDtcbiAgICAgIHZhciByZW1haW5pbmcgPSAxO1xuICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBmdW5jdGlvbiAocHJvbWlzZSkge1xuICAgICAgICB2YXIgJGluZGV4ID0gaW5kZXgrKztcbiAgICAgICAgdmFyIGFscmVhZHlDYWxsZWQgPSBmYWxzZTtcbiAgICAgICAgdmFsdWVzLnB1c2godW5kZWZpbmVkKTtcbiAgICAgICAgcmVtYWluaW5nKys7XG4gICAgICAgIEMucmVzb2x2ZShwcm9taXNlKS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgIGlmIChhbHJlYWR5Q2FsbGVkKSByZXR1cm47XG4gICAgICAgICAgYWxyZWFkeUNhbGxlZCA9IHRydWU7XG4gICAgICAgICAgdmFsdWVzWyRpbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcbiAgICB9KTtcbiAgICBpZiAocmVzdWx0LmUpIHJlamVjdChyZXN1bHQudik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfSxcbiAgLy8gMjUuNC40LjQgUHJvbWlzZS5yYWNlKGl0ZXJhYmxlKVxuICByYWNlOiBmdW5jdGlvbiByYWNlKGl0ZXJhYmxlKSB7XG4gICAgdmFyIEMgPSB0aGlzO1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQyk7XG4gICAgdmFyIHJlamVjdCA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciByZXN1bHQgPSBwZXJmb3JtKGZ1bmN0aW9uICgpIHtcbiAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oY2FwYWJpbGl0eS5yZXNvbHZlLCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgaWYgKHJlc3VsdC5lKSByZWplY3QocmVzdWx0LnYpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuIiwiLy8gMjEuMi41LjMgZ2V0IFJlZ0V4cC5wcm90b3R5cGUuZmxhZ3MoKVxuaWYgKHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgLy4vZy5mbGFncyAhPSAnZycpIHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmYoUmVnRXhwLnByb3RvdHlwZSwgJ2ZsYWdzJywge1xuICBjb25maWd1cmFibGU6IHRydWUsXG4gIGdldDogcmVxdWlyZSgnLi9fZmxhZ3MnKVxufSk7XG4iLCIvLyBAQHNwbGl0IGxvZ2ljXG5yZXF1aXJlKCcuL19maXgtcmUtd2tzJykoJ3NwbGl0JywgMiwgZnVuY3Rpb24gKGRlZmluZWQsIFNQTElULCAkc3BsaXQpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuICB2YXIgaXNSZWdFeHAgPSByZXF1aXJlKCcuL19pcy1yZWdleHAnKTtcbiAgdmFyIF9zcGxpdCA9ICRzcGxpdDtcbiAgdmFyICRwdXNoID0gW10ucHVzaDtcbiAgdmFyICRTUExJVCA9ICdzcGxpdCc7XG4gIHZhciBMRU5HVEggPSAnbGVuZ3RoJztcbiAgdmFyIExBU1RfSU5ERVggPSAnbGFzdEluZGV4JztcbiAgaWYgKFxuICAgICdhYmJjJ1skU1BMSVRdKC8oYikqLylbMV0gPT0gJ2MnIHx8XG4gICAgJ3Rlc3QnWyRTUExJVF0oLyg/OikvLCAtMSlbTEVOR1RIXSAhPSA0IHx8XG4gICAgJ2FiJ1skU1BMSVRdKC8oPzphYikqLylbTEVOR1RIXSAhPSAyIHx8XG4gICAgJy4nWyRTUExJVF0oLyguPykoLj8pLylbTEVOR1RIXSAhPSA0IHx8XG4gICAgJy4nWyRTUExJVF0oLygpKCkvKVtMRU5HVEhdID4gMSB8fFxuICAgICcnWyRTUExJVF0oLy4/LylbTEVOR1RIXVxuICApIHtcbiAgICB2YXIgTlBDRyA9IC8oKT8/Ly5leGVjKCcnKVsxXSA9PT0gdW5kZWZpbmVkOyAvLyBub25wYXJ0aWNpcGF0aW5nIGNhcHR1cmluZyBncm91cFxuICAgIC8vIGJhc2VkIG9uIGVzNS1zaGltIGltcGxlbWVudGF0aW9uLCBuZWVkIHRvIHJld29yayBpdFxuICAgICRzcGxpdCA9IGZ1bmN0aW9uIChzZXBhcmF0b3IsIGxpbWl0KSB7XG4gICAgICB2YXIgc3RyaW5nID0gU3RyaW5nKHRoaXMpO1xuICAgICAgaWYgKHNlcGFyYXRvciA9PT0gdW5kZWZpbmVkICYmIGxpbWl0ID09PSAwKSByZXR1cm4gW107XG4gICAgICAvLyBJZiBgc2VwYXJhdG9yYCBpcyBub3QgYSByZWdleCwgdXNlIG5hdGl2ZSBzcGxpdFxuICAgICAgaWYgKCFpc1JlZ0V4cChzZXBhcmF0b3IpKSByZXR1cm4gX3NwbGl0LmNhbGwoc3RyaW5nLCBzZXBhcmF0b3IsIGxpbWl0KTtcbiAgICAgIHZhciBvdXRwdXQgPSBbXTtcbiAgICAgIHZhciBmbGFncyA9IChzZXBhcmF0b3IuaWdub3JlQ2FzZSA/ICdpJyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAoc2VwYXJhdG9yLm11bHRpbGluZSA/ICdtJyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAoc2VwYXJhdG9yLnVuaWNvZGUgPyAndScgOiAnJykgK1xuICAgICAgICAgICAgICAgICAgKHNlcGFyYXRvci5zdGlja3kgPyAneScgOiAnJyk7XG4gICAgICB2YXIgbGFzdExhc3RJbmRleCA9IDA7XG4gICAgICB2YXIgc3BsaXRMaW1pdCA9IGxpbWl0ID09PSB1bmRlZmluZWQgPyA0Mjk0OTY3Mjk1IDogbGltaXQgPj4+IDA7XG4gICAgICAvLyBNYWtlIGBnbG9iYWxgIGFuZCBhdm9pZCBgbGFzdEluZGV4YCBpc3N1ZXMgYnkgd29ya2luZyB3aXRoIGEgY29weVxuICAgICAgdmFyIHNlcGFyYXRvckNvcHkgPSBuZXcgUmVnRXhwKHNlcGFyYXRvci5zb3VyY2UsIGZsYWdzICsgJ2cnKTtcbiAgICAgIHZhciBzZXBhcmF0b3IyLCBtYXRjaCwgbGFzdEluZGV4LCBsYXN0TGVuZ3RoLCBpO1xuICAgICAgLy8gRG9lc24ndCBuZWVkIGZsYWdzIGd5LCBidXQgdGhleSBkb24ndCBodXJ0XG4gICAgICBpZiAoIU5QQ0cpIHNlcGFyYXRvcjIgPSBuZXcgUmVnRXhwKCdeJyArIHNlcGFyYXRvckNvcHkuc291cmNlICsgJyQoPyFcXFxccyknLCBmbGFncyk7XG4gICAgICB3aGlsZSAobWF0Y2ggPSBzZXBhcmF0b3JDb3B5LmV4ZWMoc3RyaW5nKSkge1xuICAgICAgICAvLyBgc2VwYXJhdG9yQ29weS5sYXN0SW5kZXhgIGlzIG5vdCByZWxpYWJsZSBjcm9zcy1icm93c2VyXG4gICAgICAgIGxhc3RJbmRleCA9IG1hdGNoLmluZGV4ICsgbWF0Y2hbMF1bTEVOR1RIXTtcbiAgICAgICAgaWYgKGxhc3RJbmRleCA+IGxhc3RMYXN0SW5kZXgpIHtcbiAgICAgICAgICBvdXRwdXQucHVzaChzdHJpbmcuc2xpY2UobGFzdExhc3RJbmRleCwgbWF0Y2guaW5kZXgpKTtcbiAgICAgICAgICAvLyBGaXggYnJvd3NlcnMgd2hvc2UgYGV4ZWNgIG1ldGhvZHMgZG9uJ3QgY29uc2lzdGVudGx5IHJldHVybiBgdW5kZWZpbmVkYCBmb3IgTlBDR1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1sb29wLWZ1bmNcbiAgICAgICAgICBpZiAoIU5QQ0cgJiYgbWF0Y2hbTEVOR1RIXSA+IDEpIG1hdGNoWzBdLnJlcGxhY2Uoc2VwYXJhdG9yMiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZm9yIChpID0gMTsgaSA8IGFyZ3VtZW50c1tMRU5HVEhdIC0gMjsgaSsrKSBpZiAoYXJndW1lbnRzW2ldID09PSB1bmRlZmluZWQpIG1hdGNoW2ldID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmIChtYXRjaFtMRU5HVEhdID4gMSAmJiBtYXRjaC5pbmRleCA8IHN0cmluZ1tMRU5HVEhdKSAkcHVzaC5hcHBseShvdXRwdXQsIG1hdGNoLnNsaWNlKDEpKTtcbiAgICAgICAgICBsYXN0TGVuZ3RoID0gbWF0Y2hbMF1bTEVOR1RIXTtcbiAgICAgICAgICBsYXN0TGFzdEluZGV4ID0gbGFzdEluZGV4O1xuICAgICAgICAgIGlmIChvdXRwdXRbTEVOR1RIXSA+PSBzcGxpdExpbWl0KSBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2VwYXJhdG9yQ29weVtMQVNUX0lOREVYXSA9PT0gbWF0Y2guaW5kZXgpIHNlcGFyYXRvckNvcHlbTEFTVF9JTkRFWF0rKzsgLy8gQXZvaWQgYW4gaW5maW5pdGUgbG9vcFxuICAgICAgfVxuICAgICAgaWYgKGxhc3RMYXN0SW5kZXggPT09IHN0cmluZ1tMRU5HVEhdKSB7XG4gICAgICAgIGlmIChsYXN0TGVuZ3RoIHx8ICFzZXBhcmF0b3JDb3B5LnRlc3QoJycpKSBvdXRwdXQucHVzaCgnJyk7XG4gICAgICB9IGVsc2Ugb3V0cHV0LnB1c2goc3RyaW5nLnNsaWNlKGxhc3RMYXN0SW5kZXgpKTtcbiAgICAgIHJldHVybiBvdXRwdXRbTEVOR1RIXSA+IHNwbGl0TGltaXQgPyBvdXRwdXQuc2xpY2UoMCwgc3BsaXRMaW1pdCkgOiBvdXRwdXQ7XG4gICAgfTtcbiAgLy8gQ2hha3JhLCBWOFxuICB9IGVsc2UgaWYgKCcwJ1skU1BMSVRdKHVuZGVmaW5lZCwgMClbTEVOR1RIXSkge1xuICAgICRzcGxpdCA9IGZ1bmN0aW9uIChzZXBhcmF0b3IsIGxpbWl0KSB7XG4gICAgICByZXR1cm4gc2VwYXJhdG9yID09PSB1bmRlZmluZWQgJiYgbGltaXQgPT09IDAgPyBbXSA6IF9zcGxpdC5jYWxsKHRoaXMsIHNlcGFyYXRvciwgbGltaXQpO1xuICAgIH07XG4gIH1cbiAgLy8gMjEuMS4zLjE3IFN0cmluZy5wcm90b3R5cGUuc3BsaXQoc2VwYXJhdG9yLCBsaW1pdClcbiAgcmV0dXJuIFtmdW5jdGlvbiBzcGxpdChzZXBhcmF0b3IsIGxpbWl0KSB7XG4gICAgdmFyIE8gPSBkZWZpbmVkKHRoaXMpO1xuICAgIHZhciBmbiA9IHNlcGFyYXRvciA9PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBzZXBhcmF0b3JbU1BMSVRdO1xuICAgIHJldHVybiBmbiAhPT0gdW5kZWZpbmVkID8gZm4uY2FsbChzZXBhcmF0b3IsIE8sIGxpbWl0KSA6ICRzcGxpdC5jYWxsKFN0cmluZyhPKSwgc2VwYXJhdG9yLCBsaW1pdCk7XG4gIH0sICRzcGxpdF07XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnJlcXVpcmUoJy4vZXM2LnJlZ2V4cC5mbGFncycpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgJGZsYWdzID0gcmVxdWlyZSgnLi9fZmxhZ3MnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyk7XG52YXIgVE9fU1RSSU5HID0gJ3RvU3RyaW5nJztcbnZhciAkdG9TdHJpbmcgPSAvLi9bVE9fU1RSSU5HXTtcblxudmFyIGRlZmluZSA9IGZ1bmN0aW9uIChmbikge1xuICByZXF1aXJlKCcuL19yZWRlZmluZScpKFJlZ0V4cC5wcm90b3R5cGUsIFRPX1NUUklORywgZm4sIHRydWUpO1xufTtcblxuLy8gMjEuMi41LjE0IFJlZ0V4cC5wcm90b3R5cGUudG9TdHJpbmcoKVxuaWYgKHJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkgeyByZXR1cm4gJHRvU3RyaW5nLmNhbGwoeyBzb3VyY2U6ICdhJywgZmxhZ3M6ICdiJyB9KSAhPSAnL2EvYic7IH0pKSB7XG4gIGRlZmluZShmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICB2YXIgUiA9IGFuT2JqZWN0KHRoaXMpO1xuICAgIHJldHVybiAnLycuY29uY2F0KFIuc291cmNlLCAnLycsXG4gICAgICAnZmxhZ3MnIGluIFIgPyBSLmZsYWdzIDogIURFU0NSSVBUT1JTICYmIFIgaW5zdGFuY2VvZiBSZWdFeHAgPyAkZmxhZ3MuY2FsbChSKSA6IHVuZGVmaW5lZCk7XG4gIH0pO1xuLy8gRkY0NC0gUmVnRXhwI3RvU3RyaW5nIGhhcyBhIHdyb25nIG5hbWVcbn0gZWxzZSBpZiAoJHRvU3RyaW5nLm5hbWUgIT0gVE9fU1RSSU5HKSB7XG4gIGRlZmluZShmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gJHRvU3RyaW5nLmNhbGwodGhpcyk7XG4gIH0pO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRhdCA9IHJlcXVpcmUoJy4vX3N0cmluZy1hdCcpKHRydWUpO1xuXG4vLyAyMS4xLjMuMjcgU3RyaW5nLnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKFN0cmluZywgJ1N0cmluZycsIGZ1bmN0aW9uIChpdGVyYXRlZCkge1xuICB0aGlzLl90ID0gU3RyaW5nKGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4vLyAyMS4xLjUuMi4xICVTdHJpbmdJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbiAoKSB7XG4gIHZhciBPID0gdGhpcy5fdDtcbiAgdmFyIGluZGV4ID0gdGhpcy5faTtcbiAgdmFyIHBvaW50O1xuICBpZiAoaW5kZXggPj0gTy5sZW5ndGgpIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgcG9pbnQgPSAkYXQoTywgaW5kZXgpO1xuICB0aGlzLl9pICs9IHBvaW50Lmxlbmd0aDtcbiAgcmV0dXJuIHsgdmFsdWU6IHBvaW50LCBkb25lOiBmYWxzZSB9O1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG4vLyBFQ01BU2NyaXB0IDYgc3ltYm9scyBzaGltXG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgTUVUQSA9IHJlcXVpcmUoJy4vX21ldGEnKS5LRVk7XG52YXIgJGZhaWxzID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG52YXIgd2tzID0gcmVxdWlyZSgnLi9fd2tzJyk7XG52YXIgd2tzRXh0ID0gcmVxdWlyZSgnLi9fd2tzLWV4dCcpO1xudmFyIHdrc0RlZmluZSA9IHJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKTtcbnZhciBlbnVtS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0ta2V5cycpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuL19pcy1hcnJheScpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xudmFyIF9jcmVhdGUgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJyk7XG52YXIgZ09QTkV4dCA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BuLWV4dCcpO1xudmFyICRHT1BEID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKTtcbnZhciAkRFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG52YXIgZ09QRCA9ICRHT1BELmY7XG52YXIgZFAgPSAkRFAuZjtcbnZhciBnT1BOID0gZ09QTkV4dC5mO1xudmFyICRTeW1ib2wgPSBnbG9iYWwuU3ltYm9sO1xudmFyICRKU09OID0gZ2xvYmFsLkpTT047XG52YXIgX3N0cmluZ2lmeSA9ICRKU09OICYmICRKU09OLnN0cmluZ2lmeTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcbnZhciBISURERU4gPSB3a3MoJ19oaWRkZW4nKTtcbnZhciBUT19QUklNSVRJVkUgPSB3a3MoJ3RvUHJpbWl0aXZlJyk7XG52YXIgaXNFbnVtID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG52YXIgU3ltYm9sUmVnaXN0cnkgPSBzaGFyZWQoJ3N5bWJvbC1yZWdpc3RyeScpO1xudmFyIEFsbFN5bWJvbHMgPSBzaGFyZWQoJ3N5bWJvbHMnKTtcbnZhciBPUFN5bWJvbHMgPSBzaGFyZWQoJ29wLXN5bWJvbHMnKTtcbnZhciBPYmplY3RQcm90byA9IE9iamVjdFtQUk9UT1RZUEVdO1xudmFyIFVTRV9OQVRJVkUgPSB0eXBlb2YgJFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xudmFyIFFPYmplY3QgPSBnbG9iYWwuUU9iamVjdDtcbi8vIERvbid0IHVzZSBzZXR0ZXJzIGluIFF0IFNjcmlwdCwgaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzE3M1xudmFyIHNldHRlciA9ICFRT2JqZWN0IHx8ICFRT2JqZWN0W1BST1RPVFlQRV0gfHwgIVFPYmplY3RbUFJPVE9UWVBFXS5maW5kQ2hpbGQ7XG5cbi8vIGZhbGxiYWNrIGZvciBvbGQgQW5kcm9pZCwgaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTY4N1xudmFyIHNldFN5bWJvbERlc2MgPSBERVNDUklQVE9SUyAmJiAkZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gX2NyZWF0ZShkUCh7fSwgJ2EnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBkUCh0aGlzLCAnYScsIHsgdmFsdWU6IDcgfSkuYTsgfVxuICB9KSkuYSAhPSA3O1xufSkgPyBmdW5jdGlvbiAoaXQsIGtleSwgRCkge1xuICB2YXIgcHJvdG9EZXNjID0gZ09QRChPYmplY3RQcm90bywga2V5KTtcbiAgaWYgKHByb3RvRGVzYykgZGVsZXRlIE9iamVjdFByb3RvW2tleV07XG4gIGRQKGl0LCBrZXksIEQpO1xuICBpZiAocHJvdG9EZXNjICYmIGl0ICE9PSBPYmplY3RQcm90bykgZFAoT2JqZWN0UHJvdG8sIGtleSwgcHJvdG9EZXNjKTtcbn0gOiBkUDtcblxudmFyIHdyYXAgPSBmdW5jdGlvbiAodGFnKSB7XG4gIHZhciBzeW0gPSBBbGxTeW1ib2xzW3RhZ10gPSBfY3JlYXRlKCRTeW1ib2xbUFJPVE9UWVBFXSk7XG4gIHN5bS5fayA9IHRhZztcbiAgcmV0dXJuIHN5bTtcbn07XG5cbnZhciBpc1N5bWJvbCA9IFVTRV9OQVRJVkUgJiYgdHlwZW9mICRTeW1ib2wuaXRlcmF0b3IgPT0gJ3N5bWJvbCcgPyBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJztcbn0gOiBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0IGluc3RhbmNlb2YgJFN5bWJvbDtcbn07XG5cbnZhciAkZGVmaW5lUHJvcGVydHkgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBEKSB7XG4gIGlmIChpdCA9PT0gT2JqZWN0UHJvdG8pICRkZWZpbmVQcm9wZXJ0eShPUFN5bWJvbHMsIGtleSwgRCk7XG4gIGFuT2JqZWN0KGl0KTtcbiAga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKTtcbiAgYW5PYmplY3QoRCk7XG4gIGlmIChoYXMoQWxsU3ltYm9scywga2V5KSkge1xuICAgIGlmICghRC5lbnVtZXJhYmxlKSB7XG4gICAgICBpZiAoIWhhcyhpdCwgSElEREVOKSkgZFAoaXQsIEhJRERFTiwgY3JlYXRlRGVzYygxLCB7fSkpO1xuICAgICAgaXRbSElEREVOXVtrZXldID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0pIGl0W0hJRERFTl1ba2V5XSA9IGZhbHNlO1xuICAgICAgRCA9IF9jcmVhdGUoRCwgeyBlbnVtZXJhYmxlOiBjcmVhdGVEZXNjKDAsIGZhbHNlKSB9KTtcbiAgICB9IHJldHVybiBzZXRTeW1ib2xEZXNjKGl0LCBrZXksIEQpO1xuICB9IHJldHVybiBkUChpdCwga2V5LCBEKTtcbn07XG52YXIgJGRlZmluZVByb3BlcnRpZXMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKGl0LCBQKSB7XG4gIGFuT2JqZWN0KGl0KTtcbiAgdmFyIGtleXMgPSBlbnVtS2V5cyhQID0gdG9JT2JqZWN0KFApKTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgbCA9IGtleXMubGVuZ3RoO1xuICB2YXIga2V5O1xuICB3aGlsZSAobCA+IGkpICRkZWZpbmVQcm9wZXJ0eShpdCwga2V5ID0ga2V5c1tpKytdLCBQW2tleV0pO1xuICByZXR1cm4gaXQ7XG59O1xudmFyICRjcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaXQsIFApIHtcbiAgcmV0dXJuIFAgPT09IHVuZGVmaW5lZCA/IF9jcmVhdGUoaXQpIDogJGRlZmluZVByb3BlcnRpZXMoX2NyZWF0ZShpdCksIFApO1xufTtcbnZhciAkcHJvcGVydHlJc0VudW1lcmFibGUgPSBmdW5jdGlvbiBwcm9wZXJ0eUlzRW51bWVyYWJsZShrZXkpIHtcbiAgdmFyIEUgPSBpc0VudW0uY2FsbCh0aGlzLCBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpKTtcbiAgaWYgKHRoaXMgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKSByZXR1cm4gZmFsc2U7XG4gIHJldHVybiBFIHx8ICFoYXModGhpcywga2V5KSB8fCAhaGFzKEFsbFN5bWJvbHMsIGtleSkgfHwgaGFzKHRoaXMsIEhJRERFTikgJiYgdGhpc1tISURERU5dW2tleV0gPyBFIDogdHJ1ZTtcbn07XG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KSB7XG4gIGl0ID0gdG9JT2JqZWN0KGl0KTtcbiAga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKTtcbiAgaWYgKGl0ID09PSBPYmplY3RQcm90byAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9QU3ltYm9scywga2V5KSkgcmV0dXJuO1xuICB2YXIgRCA9IGdPUEQoaXQsIGtleSk7XG4gIGlmIChEICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICEoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSkpIEQuZW51bWVyYWJsZSA9IHRydWU7XG4gIHJldHVybiBEO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlOYW1lcyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpIHtcbiAgdmFyIG5hbWVzID0gZ09QTih0b0lPYmplY3QoaXQpKTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgaSA9IDA7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSB7XG4gICAgaWYgKCFoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYga2V5ICE9IEhJRERFTiAmJiBrZXkgIT0gTUVUQSkgcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KSB7XG4gIHZhciBJU19PUCA9IGl0ID09PSBPYmplY3RQcm90bztcbiAgdmFyIG5hbWVzID0gZ09QTihJU19PUCA/IE9QU3ltYm9scyA6IHRvSU9iamVjdChpdCkpO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBpID0gMDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIHtcbiAgICBpZiAoaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIChJU19PUCA/IGhhcyhPYmplY3RQcm90bywga2V5KSA6IHRydWUpKSByZXN1bHQucHVzaChBbGxTeW1ib2xzW2tleV0pO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xuXG4vLyAxOS40LjEuMSBTeW1ib2woW2Rlc2NyaXB0aW9uXSlcbmlmICghVVNFX05BVElWRSkge1xuICAkU3ltYm9sID0gZnVuY3Rpb24gU3ltYm9sKCkge1xuICAgIGlmICh0aGlzIGluc3RhbmNlb2YgJFN5bWJvbCkgdGhyb3cgVHlwZUVycm9yKCdTeW1ib2wgaXMgbm90IGEgY29uc3RydWN0b3IhJyk7XG4gICAgdmFyIHRhZyA9IHVpZChhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCk7XG4gICAgdmFyICRzZXQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIGlmICh0aGlzID09PSBPYmplY3RQcm90bykgJHNldC5jYWxsKE9QU3ltYm9scywgdmFsdWUpO1xuICAgICAgaWYgKGhhcyh0aGlzLCBISURERU4pICYmIGhhcyh0aGlzW0hJRERFTl0sIHRhZykpIHRoaXNbSElEREVOXVt0YWddID0gZmFsc2U7XG4gICAgICBzZXRTeW1ib2xEZXNjKHRoaXMsIHRhZywgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xuICAgIH07XG4gICAgaWYgKERFU0NSSVBUT1JTICYmIHNldHRlcikgc2V0U3ltYm9sRGVzYyhPYmplY3RQcm90bywgdGFnLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgc2V0OiAkc2V0IH0pO1xuICAgIHJldHVybiB3cmFwKHRhZyk7XG4gIH07XG4gIHJlZGVmaW5lKCRTeW1ib2xbUFJPVE9UWVBFXSwgJ3RvU3RyaW5nJywgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2s7XG4gIH0pO1xuXG4gICRHT1BELmYgPSAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuICAkRFAuZiA9ICRkZWZpbmVQcm9wZXJ0eTtcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mID0gZ09QTkV4dC5mID0gJGdldE93blByb3BlcnR5TmFtZXM7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1waWUnKS5mID0gJHByb3BlcnR5SXNFbnVtZXJhYmxlO1xuICByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpLmYgPSAkZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG4gIGlmIChERVNDUklQVE9SUyAmJiAhcmVxdWlyZSgnLi9fbGlicmFyeScpKSB7XG4gICAgcmVkZWZpbmUoT2JqZWN0UHJvdG8sICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsICRwcm9wZXJ0eUlzRW51bWVyYWJsZSwgdHJ1ZSk7XG4gIH1cblxuICB3a3NFeHQuZiA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgcmV0dXJuIHdyYXAod2tzKG5hbWUpKTtcbiAgfTtcbn1cblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgeyBTeW1ib2w6ICRTeW1ib2wgfSk7XG5cbmZvciAodmFyIGVzNlN5bWJvbHMgPSAoXG4gIC8vIDE5LjQuMi4yLCAxOS40LjIuMywgMTkuNC4yLjQsIDE5LjQuMi42LCAxOS40LjIuOCwgMTkuNC4yLjksIDE5LjQuMi4xMCwgMTkuNC4yLjExLCAxOS40LjIuMTIsIDE5LjQuMi4xMywgMTkuNC4yLjE0XG4gICdoYXNJbnN0YW5jZSxpc0NvbmNhdFNwcmVhZGFibGUsaXRlcmF0b3IsbWF0Y2gscmVwbGFjZSxzZWFyY2gsc3BlY2llcyxzcGxpdCx0b1ByaW1pdGl2ZSx0b1N0cmluZ1RhZyx1bnNjb3BhYmxlcydcbikuc3BsaXQoJywnKSwgaiA9IDA7IGVzNlN5bWJvbHMubGVuZ3RoID4gajspd2tzKGVzNlN5bWJvbHNbaisrXSk7XG5cbmZvciAodmFyIHdlbGxLbm93blN5bWJvbHMgPSAka2V5cyh3a3Muc3RvcmUpLCBrID0gMDsgd2VsbEtub3duU3ltYm9scy5sZW5ndGggPiBrOykgd2tzRGVmaW5lKHdlbGxLbm93blN5bWJvbHNbaysrXSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsICdTeW1ib2wnLCB7XG4gIC8vIDE5LjQuMi4xIFN5bWJvbC5mb3Ioa2V5KVxuICAnZm9yJzogZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBoYXMoU3ltYm9sUmVnaXN0cnksIGtleSArPSAnJylcbiAgICAgID8gU3ltYm9sUmVnaXN0cnlba2V5XVxuICAgICAgOiBTeW1ib2xSZWdpc3RyeVtrZXldID0gJFN5bWJvbChrZXkpO1xuICB9LFxuICAvLyAxOS40LjIuNSBTeW1ib2wua2V5Rm9yKHN5bSlcbiAga2V5Rm9yOiBmdW5jdGlvbiBrZXlGb3Ioc3ltKSB7XG4gICAgaWYgKCFpc1N5bWJvbChzeW0pKSB0aHJvdyBUeXBlRXJyb3Ioc3ltICsgJyBpcyBub3QgYSBzeW1ib2whJyk7XG4gICAgZm9yICh2YXIga2V5IGluIFN5bWJvbFJlZ2lzdHJ5KSBpZiAoU3ltYm9sUmVnaXN0cnlba2V5XSA9PT0gc3ltKSByZXR1cm4ga2V5O1xuICB9LFxuICB1c2VTZXR0ZXI6IGZ1bmN0aW9uICgpIHsgc2V0dGVyID0gdHJ1ZTsgfSxcbiAgdXNlU2ltcGxlOiBmdW5jdGlvbiAoKSB7IHNldHRlciA9IGZhbHNlOyB9XG59KTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ09iamVjdCcsIHtcbiAgLy8gMTkuMS4yLjIgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxuICBjcmVhdGU6ICRjcmVhdGUsXG4gIC8vIDE5LjEuMi40IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuICBkZWZpbmVQcm9wZXJ0eTogJGRlZmluZVByb3BlcnR5LFxuICAvLyAxOS4xLjIuMyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKVxuICBkZWZpbmVQcm9wZXJ0aWVzOiAkZGVmaW5lUHJvcGVydGllcyxcbiAgLy8gMTkuMS4yLjYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKVxuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsXG4gIC8vIDE5LjEuMi43IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG4gIGdldE93blByb3BlcnR5TmFtZXM6ICRnZXRPd25Qcm9wZXJ0eU5hbWVzLFxuICAvLyAxOS4xLjIuOCBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKE8pXG4gIGdldE93blByb3BlcnR5U3ltYm9sczogJGdldE93blByb3BlcnR5U3ltYm9sc1xufSk7XG5cbi8vIDI0LjMuMiBKU09OLnN0cmluZ2lmeSh2YWx1ZSBbLCByZXBsYWNlciBbLCBzcGFjZV1dKVxuJEpTT04gJiYgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoIVVTRV9OQVRJVkUgfHwgJGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIFMgPSAkU3ltYm9sKCk7XG4gIC8vIE1TIEVkZ2UgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIHt9XG4gIC8vIFdlYktpdCBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMgbnVsbFxuICAvLyBWOCB0aHJvd3Mgb24gYm94ZWQgc3ltYm9sc1xuICByZXR1cm4gX3N0cmluZ2lmeShbU10pICE9ICdbbnVsbF0nIHx8IF9zdHJpbmdpZnkoeyBhOiBTIH0pICE9ICd7fScgfHwgX3N0cmluZ2lmeShPYmplY3QoUykpICE9ICd7fSc7XG59KSksICdKU09OJywge1xuICBzdHJpbmdpZnk6IGZ1bmN0aW9uIHN0cmluZ2lmeShpdCkge1xuICAgIHZhciBhcmdzID0gW2l0XTtcbiAgICB2YXIgaSA9IDE7XG4gICAgdmFyIHJlcGxhY2VyLCAkcmVwbGFjZXI7XG4gICAgd2hpbGUgKGFyZ3VtZW50cy5sZW5ndGggPiBpKSBhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgICRyZXBsYWNlciA9IHJlcGxhY2VyID0gYXJnc1sxXTtcbiAgICBpZiAoIWlzT2JqZWN0KHJlcGxhY2VyKSAmJiBpdCA9PT0gdW5kZWZpbmVkIHx8IGlzU3ltYm9sKGl0KSkgcmV0dXJuOyAvLyBJRTggcmV0dXJucyBzdHJpbmcgb24gdW5kZWZpbmVkXG4gICAgaWYgKCFpc0FycmF5KHJlcGxhY2VyKSkgcmVwbGFjZXIgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgaWYgKHR5cGVvZiAkcmVwbGFjZXIgPT0gJ2Z1bmN0aW9uJykgdmFsdWUgPSAkcmVwbGFjZXIuY2FsbCh0aGlzLCBrZXksIHZhbHVlKTtcbiAgICAgIGlmICghaXNTeW1ib2wodmFsdWUpKSByZXR1cm4gdmFsdWU7XG4gICAgfTtcbiAgICBhcmdzWzFdID0gcmVwbGFjZXI7XG4gICAgcmV0dXJuIF9zdHJpbmdpZnkuYXBwbHkoJEpTT04sIGFyZ3MpO1xuICB9XG59KTtcblxuLy8gMTkuNC4zLjQgU3ltYm9sLnByb3RvdHlwZVtAQHRvUHJpbWl0aXZlXShoaW50KVxuJFN5bWJvbFtQUk9UT1RZUEVdW1RPX1BSSU1JVElWRV0gfHwgcmVxdWlyZSgnLi9faGlkZScpKCRTeW1ib2xbUFJPVE9UWVBFXSwgVE9fUFJJTUlUSVZFLCAkU3ltYm9sW1BST1RPVFlQRV0udmFsdWVPZik7XG4vLyAxOS40LjMuNSBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZygkU3ltYm9sLCAnU3ltYm9sJyk7XG4vLyAyMC4yLjEuOSBNYXRoW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhNYXRoLCAnTWF0aCcsIHRydWUpO1xuLy8gMjQuMy4zIEpTT05bQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKGdsb2JhbC5KU09OLCAnSlNPTicsIHRydWUpO1xuIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtb2JqZWN0LXZhbHVlcy1lbnRyaWVzXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyICRlbnRyaWVzID0gcmVxdWlyZSgnLi9fb2JqZWN0LXRvLWFycmF5JykodHJ1ZSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnT2JqZWN0Jywge1xuICBlbnRyaWVzOiBmdW5jdGlvbiBlbnRyaWVzKGl0KSB7XG4gICAgcmV0dXJuICRlbnRyaWVzKGl0KTtcbiAgfVxufSk7XG4iLCJyZXF1aXJlKCcuL193a3MtZGVmaW5lJykoJ2FzeW5jSXRlcmF0b3InKTtcbiIsInZhciAkaXRlcmF0b3JzID0gcmVxdWlyZSgnLi9lczYuYXJyYXkuaXRlcmF0b3InKTtcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciB3a3MgPSByZXF1aXJlKCcuL193a3MnKTtcbnZhciBJVEVSQVRPUiA9IHdrcygnaXRlcmF0b3InKTtcbnZhciBUT19TVFJJTkdfVEFHID0gd2tzKCd0b1N0cmluZ1RhZycpO1xudmFyIEFycmF5VmFsdWVzID0gSXRlcmF0b3JzLkFycmF5O1xuXG52YXIgRE9NSXRlcmFibGVzID0ge1xuICBDU1NSdWxlTGlzdDogdHJ1ZSwgLy8gVE9ETzogTm90IHNwZWMgY29tcGxpYW50LCBzaG91bGQgYmUgZmFsc2UuXG4gIENTU1N0eWxlRGVjbGFyYXRpb246IGZhbHNlLFxuICBDU1NWYWx1ZUxpc3Q6IGZhbHNlLFxuICBDbGllbnRSZWN0TGlzdDogZmFsc2UsXG4gIERPTVJlY3RMaXN0OiBmYWxzZSxcbiAgRE9NU3RyaW5nTGlzdDogZmFsc2UsXG4gIERPTVRva2VuTGlzdDogdHJ1ZSxcbiAgRGF0YVRyYW5zZmVySXRlbUxpc3Q6IGZhbHNlLFxuICBGaWxlTGlzdDogZmFsc2UsXG4gIEhUTUxBbGxDb2xsZWN0aW9uOiBmYWxzZSxcbiAgSFRNTENvbGxlY3Rpb246IGZhbHNlLFxuICBIVE1MRm9ybUVsZW1lbnQ6IGZhbHNlLFxuICBIVE1MU2VsZWN0RWxlbWVudDogZmFsc2UsXG4gIE1lZGlhTGlzdDogdHJ1ZSwgLy8gVE9ETzogTm90IHNwZWMgY29tcGxpYW50LCBzaG91bGQgYmUgZmFsc2UuXG4gIE1pbWVUeXBlQXJyYXk6IGZhbHNlLFxuICBOYW1lZE5vZGVNYXA6IGZhbHNlLFxuICBOb2RlTGlzdDogdHJ1ZSxcbiAgUGFpbnRSZXF1ZXN0TGlzdDogZmFsc2UsXG4gIFBsdWdpbjogZmFsc2UsXG4gIFBsdWdpbkFycmF5OiBmYWxzZSxcbiAgU1ZHTGVuZ3RoTGlzdDogZmFsc2UsXG4gIFNWR051bWJlckxpc3Q6IGZhbHNlLFxuICBTVkdQYXRoU2VnTGlzdDogZmFsc2UsXG4gIFNWR1BvaW50TGlzdDogZmFsc2UsXG4gIFNWR1N0cmluZ0xpc3Q6IGZhbHNlLFxuICBTVkdUcmFuc2Zvcm1MaXN0OiBmYWxzZSxcbiAgU291cmNlQnVmZmVyTGlzdDogZmFsc2UsXG4gIFN0eWxlU2hlZXRMaXN0OiB0cnVlLCAvLyBUT0RPOiBOb3Qgc3BlYyBjb21wbGlhbnQsIHNob3VsZCBiZSBmYWxzZS5cbiAgVGV4dFRyYWNrQ3VlTGlzdDogZmFsc2UsXG4gIFRleHRUcmFja0xpc3Q6IGZhbHNlLFxuICBUb3VjaExpc3Q6IGZhbHNlXG59O1xuXG5mb3IgKHZhciBjb2xsZWN0aW9ucyA9IGdldEtleXMoRE9NSXRlcmFibGVzKSwgaSA9IDA7IGkgPCBjb2xsZWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICB2YXIgTkFNRSA9IGNvbGxlY3Rpb25zW2ldO1xuICB2YXIgZXhwbGljaXQgPSBET01JdGVyYWJsZXNbTkFNRV07XG4gIHZhciBDb2xsZWN0aW9uID0gZ2xvYmFsW05BTUVdO1xuICB2YXIgcHJvdG8gPSBDb2xsZWN0aW9uICYmIENvbGxlY3Rpb24ucHJvdG90eXBlO1xuICB2YXIga2V5O1xuICBpZiAocHJvdG8pIHtcbiAgICBpZiAoIXByb3RvW0lURVJBVE9SXSkgaGlkZShwcm90bywgSVRFUkFUT1IsIEFycmF5VmFsdWVzKTtcbiAgICBpZiAoIXByb3RvW1RPX1NUUklOR19UQUddKSBoaWRlKHByb3RvLCBUT19TVFJJTkdfVEFHLCBOQU1FKTtcbiAgICBJdGVyYXRvcnNbTkFNRV0gPSBBcnJheVZhbHVlcztcbiAgICBpZiAoZXhwbGljaXQpIGZvciAoa2V5IGluICRpdGVyYXRvcnMpIGlmICghcHJvdG9ba2V5XSkgcmVkZWZpbmUocHJvdG8sIGtleSwgJGl0ZXJhdG9yc1trZXldLCB0cnVlKTtcbiAgfVxufVxuIiwiaW1wb3J0IE4xOWJhc2VBcHBsZXQgZnJvbSAnLi9uMTliYXNlQXBwbGV0JztcbmltcG9ydCBOMTlwb3B1cENvbnRyb2xsZXIgZnJvbSAnLi9uMTlwb3B1cENvbnRyb2xsZXInO1xuXG5TaWViZWxBcHBGYWNhZGUuTjE5SGVscGVyID0gY2xhc3MgZXh0ZW5kcyBOMTliYXNlQXBwbGV0IHtcbiAgY29uc3RydWN0b3Ioc2V0dGluZ3MpIHtcbiAgICBjb25zdCB7IGFwcGxldE5hbWUgfSA9IHNldHRpbmdzO1xuICAgIGlmIChhcHBsZXROYW1lKSB7XG4gICAgICBjb25zdCBhcHBsZXQgPSBTaWViZWxBcHAuU19BcHAuR2V0QWN0aXZlVmlldygpLkdldEFwcGxldChhcHBsZXROYW1lKTtcbiAgICAgIGlmICghYXBwbGV0KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGdldCB0aGUgcmVmZXJlbmNlIHRvIHRoZSBhcHBsZXQgYnkgdGhlICR7YXBwbGV0TmFtZX0gbmFtZWApO1xuICAgICAgfVxuICAgICAgc3VwZXIoT2JqZWN0LmFzc2lnbih7fSwgc2V0dGluZ3MsIHsgcG06IGFwcGxldC5HZXRQTW9kZWwoKSB9KSk7XG4gICAgfSBlbHNlIHsgLy8gdGhlIHVzdWFsIHdheSBhc3N1bWVkXG4gICAgICBzdXBlcihzZXR0aW5ncyk7XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coJ05leHVzIG1haW4gY2xhc3Mgc3RhcnRlZC4uLi4nLCB0aGlzLmFwcGxldE5hbWUpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICAvLyBnZXQgdGhlIG4xOXBvcHVwQ29udHJvbGxlciBzaW5nbGV0b24gaW5zdGFuY2VcbiAgICB0aGlzLm4xOXBvcHVwQ29udHJvbGxlciA9IE4xOXBvcHVwQ29udHJvbGxlci5pbnN0YW5jZTtcbiAgfVxuXG4gIGNsb3NlUG9wdXBBcHBsZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMubjE5cG9wdXBDb250cm9sbGVyLmNsb3NlUG9wdXBBcHBsZXQoKTtcbiAgfVxuXG4gIF9zaG93UG9wdXBBcHBsZXQobmFtZSwgaGlkZSwgY2IpIHtcbiAgICBpZiAoIXRoaXMubjE5cG9wdXBDb250cm9sbGVyKSB7XG4gICAgICAvLyBpdCBpcyBhIHBvcHVwIGFwcGxldFxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdPcGVubmluZyBwb3B1cCBvbiB0aGUgcG9wdXAgaXMgbm90IHN1cHBvcnRlZCBub3cnKTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLm4xOXBvcHVwQ29udHJvbGxlci5jYW5PcGVuUG9wdXAoKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3Qgb3BlbiBwb3B1cCEnKTtcbiAgICAgIC8vIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy52aWV3LlNldEFjdGl2ZUFwcGxldEludGVybmFsKHRoaXMuYXBwbGV0KTsgLy8gb3IgU2V0QWN0aXZlQXBwbGV0XG4gICAgdGhpcy5fc2V0QWN0aXZlQ29udHJvbChuYW1lKTtcbiAgICByZXR1cm4gdGhpcy5uMTlwb3B1cENvbnRyb2xsZXIuc2hvd1BvcHVwQXBwbGV0KGhpZGUsIGNiLCB0aGlzLnBtKTtcbiAgfVxuXG4gIHNob3dNdmdBcHBsZXQobmFtZSwgaGlkZSwgY2IpIHtcbiAgICByZXR1cm4gdGhpcy5fc2hvd1BvcHVwQXBwbGV0KG5hbWUsIGhpZGUsIGNiKTtcbiAgfVxuXG4gIHNob3dQaWNrQXBwbGV0KG5hbWUsIGhpZGUsIGNiKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Nob3dQb3B1cEFwcGxldChuYW1lLCBoaWRlLCBjYik7XG4gIH1cblxuICBkcmlsbGRvd24oY29udHJvbE5hbWUpIHtcbiAgICAvLyB0b2RvOiBjaGVjayBpc0xpbmsgb2YgY29udHJvbD9cbiAgICAvLyBpbmRleCBpcyBub3QgZWZmZWN0aXZlLCBhbmQgZHJpbGxkb3duIGFueXdheSBoYXBwZW5zIG9uIGxhc3Qgc2VsZWN0ZWQgcmVjb3JkXG4gICAgaWYgKCF0aGlzLmlzTGlzdEFwcGxldCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCBpbmRleCA9IHRoaXMuZ2V0U2VsZWN0aW9uKCk7XG4gICAgcmV0dXJuIHRoaXMucG0uRXhlY3V0ZU1ldGhvZCgnT25EcmlsbERvd24nLCBjb250cm9sTmFtZSwgaW5kZXgpO1xuICB9XG5cbiAgZ290b1ZpZXcodGFyZ2V0Vmlld05hbWUsIHRhcmdldEFwcGxldE5hbWUsIGlkKSB7XG4gICAgLy8gdG9kbzogZ2V0IHRoZSBhcHBsZXQgbmFtZSBmcm9tIHRoZSB2aWV3IGRlZmluaXRpb24/XG4gICAgY29uc3Qgcm93SWQgPSB0eXBlb2YgaWQgPT09ICd1bmRlZmluZWQnID8gdGhpcy5nZXRDdXJyZW50UmVjb3JkKHRydWUpLklkIDogaWQ7XG4gICAgbGV0IFNXRUNtZCA9IGBHb3RvVmlldyZTV0VWaWV3PSR7dGFyZ2V0Vmlld05hbWV9JlNXRUFwcGxldDA9JHt0YXJnZXRBcHBsZXROYW1lfWA7XG4gICAgU1dFQ21kICs9IGAmU1dFQlU9MSZTV0VLZWVwQ29udGV4dD1GQUxTRSZTV0VSb3dJZDA9JHtyb3dJZH1gO1xuICAgIFNXRUNtZCA9IGVuY29kZVVSSShTV0VDbWQpO1xuICAgIFNpZWJlbEFwcC5TX0FwcC5Hb3RvVmlldyh0YXJnZXRWaWV3TmFtZSwgJycsIFNXRUNtZCwgJycpO1xuICB9XG5cbiAgc3RhdGljIFJlSW5pdFBvcHVwKCkge1xuICAgIGNvbnN0IHBvcHVwUE0gPSBTaWViZWxBcHAuU19BcHAuR2V0UG9wdXBQTSgpO1xuICAgIHBvcHVwUE0uSW5pdCgpO1xuICAgIHBvcHVwUE0uU2V0dXAoKTtcbiAgfVxufTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE4xOWJhc2VBcHBsZXQge1xuICBjb25zdHJ1Y3RvcihzZXR0aW5ncykge1xuICAgIHRoaXMuY29uc3RzID0gU2llYmVsSlMuRGVwZW5kZW5jeSgnU2llYmVsQXBwLkNvbnN0YW50cycpO1xuICAgIHRoaXMucG0gPSBzZXR0aW5ncy5wbTtcbiAgICB0aGlzLnZpZXcgPSBTaWViZWxBcHAuU19BcHAuR2V0QWN0aXZlVmlldygpO1xuICAgIHRoaXMuYXBwbGV0TmFtZSA9IHRoaXMucG0uR2V0KCdHZXROYW1lJyk7XG4gICAgdGhpcy5hcHBsZXQgPSB0aGlzLnZpZXcuR2V0QXBwbGV0TWFwKClbdGhpcy5hcHBsZXROYW1lXTtcbiAgICB0aGlzLmlzTGlzdEFwcGxldCA9IHR5cGVvZiB0aGlzLmFwcGxldC5HZXRMaXN0T2ZDb2x1bW5zID09PSAnZnVuY3Rpb24nO1xuICAgIHRoaXMucmVxdWlyZWQgPSBbXTsgLy8gd2lsbCBiZSBlbXB0eSBmb3IgdGhlIGxpc3QgYXBwbGV0XG4gICAgdGhpcy5sb3YgPSB7fTtcblxuICAgIHRoaXMudG9rZW4gPSAwO1xuICAgIHRoaXMuc3Vic2NyaWJlcnMgPSBbXTtcbiAgICBjb25zdCBiY0lkID0gdGhpcy5hcHBsZXQuR2V0QkNJZCgpO1xuICAgIHRoaXMucG0uQXR0YWNoTm90aWZpY2F0aW9uSGFuZGxlcih0aGlzLmNvbnN0cy5nZXQoJ1NXRV9QUk9QX0JDX05PVElfRU5EJyksIChwcm9wU2V0KSA9PiB7XG4gICAgICBpZiAoYmNJZCA9PT0gcHJvcFNldC5HZXRQcm9wZXJ0eSgnYmMnKSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3Vic2NyaWJlcnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAvLyB3ZSBhc3N1bWUgdGhhdCB0aGUgZnVuY3Rpb24gZG9lcyBub3QgdGhyb3cgYW4gZXJyb3JcbiAgICAgICAgICB0aGlzLnN1YnNjcmliZXJzW2ldLmZ1bmMoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gcG9wdWxhdGUgdGhlIHJlcXVpcmVkIGFycmF5IGZvciBmb3JtIGFwcGxldHNcbiAgICBpZiAoIXRoaXMuaXNMaXN0QXBwbGV0KSB7XG4gICAgICBjb25zdCBhcHBsZXRJZCA9IGBzXyR7dGhpcy5wbS5HZXQoJ0dldEZ1bGxJZCcpfV9kaXZgO1xuICAgICAgY29uc3QgYXBwbGV0SW5wdXRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYXBwbGV0SWQpLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0Jyk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFwcGxldElucHV0cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAoYXBwbGV0SW5wdXRzW2ldLmF0dHJpYnV0ZXNbJ2FyaWEtcmVxdWlyZWQnXSkge1xuICAgICAgICAgIHRoaXMucmVxdWlyZWQucHVzaChhcHBsZXRJbnB1dHNbaV0uYXR0cmlidXRlcy5uYW1lLm5vZGVWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBsaXN0ZW5lciB0byBnZXQgZHluYW1pYyBMT1ZzXG4gICAgY29uc3QgYXBwbGV0TmFtZSA9IHRoaXMucG0uR2V0KCdHZXROYW1lJyk7XG4gICAgdGhpcy5wbS5BdHRhY2hOb3RpZmljYXRpb25IYW5kbGVyKHRoaXMuY29uc3RzLmdldCgnU1dFX1BST1BfQkNfTk9USV9HRU5FUklDJyksIChwcm9wU2V0KSA9PiB7XG4gICAgICBjb25zdCB2aWV3TmFtZSA9IFNpZWJlbEFwcC5TX0FwcC5HZXRBY3RpdmVWaWV3KCkuR2V0TmFtZSgpO1xuICAgICAgY29uc3QgdHlwZSA9IHByb3BTZXQuR2V0UHJvcGVydHkodGhpcy5jb25zdHMuZ2V0KCdTV0VfUFJPUF9OT1RJX1RZUEUnKSk7XG4gICAgICBpZiAodHlwZSA9PT0gJ0dldFF1aWNrUGlja0luZm8nKSB7XG4gICAgICAgIGNvbnN0IGFyciA9IFtdO1xuICAgICAgICBDQ0ZNaXNjVXRpbF9TdHJpbmdUb0FycmF5KHByb3BTZXQuR2V0UHJvcGVydHkodGhpcy5jb25zdHMuZ2V0KCdTV0VfUFJPUF9BUkdTX0FSUkFZJykpLCBhcnIpO1xuICAgICAgICBpZiAodmlld05hbWUgPT09IGFyclsxXSAmJiBhcHBsZXROYW1lID09PSBhcnJbMl0pIHtcbiAgICAgICAgICB0aGlzLmxvdlthcnJbM11dID0gYXJyLnNwbGljZSg1KS5maWx0ZXIoZWwgPT4gZWwgIT09ICcnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc3Vic2NyaWJlKGZ1bmMpIHtcbiAgICBpZiAodHlwZW9mIGZ1bmMgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignZnVuYyBpcyBub3QgYSBmdW5jdGlvbicpO1xuICAgIH1cbiAgICB0aGlzLnRva2VuICs9IDE7XG4gICAgdGhpcy5zdWJzY3JpYmVycy5wdXNoKHsgdG9rZW46IHRoaXMudG9rZW4sIGZ1bmMgfSk7XG4gICAgcmV0dXJuIHRoaXMudG9rZW47XG4gIH1cblxuICB1bnN1YnNjcmliZSh0b2tlbikge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zdWJzY3JpYmVycy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKHRva2VuID09PSB0aGlzLnN1YnNjcmliZXJzW2ldLnRva2VuKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN1YnNjcmliZXJzLnNwbGljZShpLCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgX2dldENvbnRyb2wobmFtZSkge1xuICAgIHJldHVybiB0aGlzLmFwcGxldC5HZXRDb250cm9sKG5hbWUpO1xuICB9XG5cbiAgX3JldHVybkNvbnRyb2xzKCkge1xuICAgIGlmICh0aGlzLmlzTGlzdEFwcGxldCkge1xuICAgICAgcmV0dXJuIHRoaXMuYXBwbGV0LkdldExpc3RPZkNvbHVtbnMoKTsgLy8gcG0uR2V0KCdHZXRMaXN0T2ZDb2x1bW5zJylcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuYXBwbGV0LkdldENvbnRyb2xzKCk7IC8vIHBtLkdldCgnR2V0Q29udHJvbHMnKTtcbiAgfVxuXG4gIC8vIGNhbGxlZCBpbnRvIHRoZSBnZXRDb250cm9scyB0byByZWR1Y2UgdGhlIGFtb3VudCBvZiB0aGUgcmV0dXJuZWQgY29udHJvbHNcbiAgX2lzU2tpcENvbnRyb2wodHlwZSkge1xuICAgIC8vIGh0dHBzOi8vZG9jcy5vcmFjbGUuY29tL2NkL0U3NDg5MF8wMS9ib29rcy9Db25maWdPcGVuVUkvYXBwZW5kaXhfYV9hcGkwMDIuaHRtXG4gICAgLy8gbWF5YmUgd2UgbmVlZCB0byBleGNsdWRlIG1vcmUgdHlwZXNcbiAgICByZXR1cm4gKHR5cGUgPT09IHRoaXMuY29uc3RzLmdldCgnU1dFX1BTVF9CVVRUT05fQ1RSTCcpKVxuICAgICAgfHwgKHR5cGUgPT09IHRoaXMuY29uc3RzLmdldCgnU1dFX0NUUkxfTElOSycpKVxuICAgICAgfHwgKHR5cGUgPT09IHRoaXMuY29uc3RzLmdldCgnU1dFX0NUUkxfUExBSU5URVhUJykpXG4gICAgICB8fCAodHlwZSA9PT0gJ251bGwnKTsgLy8gR2V0VWlUeXBlIHJldHVybnMgc3RyaW5nXG4gIH1cblxuICBfaXNSZXF1aXJlZChpbnB1dE5hbWUpIHtcbiAgICAvLyByZXF1aXJlZCBpcyBlbXB0eSBmb3IgbGlzdCBhcHBsZXRzLCBob3BlZnVsbHkgZm9yIG5vd1xuICAgIHJldHVybiB0aGlzLnJlcXVpcmVkLmluZGV4T2YoaW5wdXROYW1lKSA+IC0xO1xuICB9XG5cbiAgc3RhdGljIEdldFN0YXRpY0xPVihhcnIpIHtcbiAgICBjb25zdCByZXQgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgcmV0LnB1c2goYXJyW2ldLnByb3BBcnJheSk7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICBfc2V0QWN0aXZlQ29udHJvbChuYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuYXBwbGV0LlNldEFjdGl2ZUNvbnRyb2wodGhpcy5fZ2V0Q29udHJvbChuYW1lKSk7XG4gIH1cblxuICBfZ2V0VmFsdWVGb3JDb250cm9sKGNvbnRyb2xVaVR5cGUsIHZhbHVlKSB7XG4gICAgLy8gVE9ETzogRGF0ZVRpbWUsIG51bWJlcnMsIGFuZCBwaG9uZXM/XG4gICAgaWYgKHRoaXMuY29uc3RzLmdldCgnU1dFX0NUUkxfQ0hFQ0tCT1gnKSA9PT0gY29udHJvbFVpVHlwZSkge1xuICAgICAgLy8gY29udmVydCB0cnVlL2ZhbHNlID0+IFkvTlxuICAgICAgLy8gZG8gd2Ugd2FudCB0byBzdXBwb3J0IHNldHRpbmcgdG8gbnVsbFxuICAgICAgdmFsdWUgPSB2YWx1ZSA/ICdZJyA6ICdOJzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBjYW5JbnZva2VNZXRob2QobWV0aG9kKSB7XG4gICAgcmV0dXJuIHRoaXMucG0uRXhlY3V0ZU1ldGhvZCgnQ2FuSW52b2tlTWV0aG9kJywgbWV0aG9kKTtcbiAgfVxuXG4gIGludm9rZU1ldGhvZChtZXRob2QpIHtcbiAgICBpZiAoIXRoaXMuY2FuSW52b2tlTWV0aG9kKG1ldGhvZCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucG0uRXhlY3V0ZU1ldGhvZCgnSW52b2tlTWV0aG9kJywgbWV0aG9kKTtcbiAgfVxuXG4gIGdldENvbnRyb2xzKCkge1xuICAgIGNvbnN0IGNvbnRyb2xzID0ge307XG4gICAgY29uc3QgYXBwbGV0Q29udHJvbHMgPSB0aGlzLl9yZXR1cm5Db250cm9scygpO1xuICAgIGNvbnN0IGFyciA9IE9iamVjdC5rZXlzKGFwcGxldENvbnRyb2xzKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgY29udHJvbCA9IGFwcGxldENvbnRyb2xzW2FycltpXV07XG4gICAgICBjb25zdCBjb250cm9sVWlUeXBlID0gY29udHJvbC5HZXRVSVR5cGUoKTtcbiAgICAgIGlmICh0aGlzLl9pc1NraXBDb250cm9sKGNvbnRyb2xVaVR5cGUpKSB7XG4gICAgICAgIGNvbnRpbnVlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnRpbnVlXG4gICAgICB9XG4gICAgICBjb25zdCBjb250cm9sTmFtZSA9IGNvbnRyb2wuR2V0TmFtZSgpO1xuICAgICAgY29uc3QgY29udHJvbElucHV0TmFtZSA9IGNvbnRyb2wuR2V0SW5wdXROYW1lKCk7XG4gICAgICBjb25zdCBvYmogPSB7XG4gICAgICAgIG5hbWU6IGNvbnRyb2xOYW1lLFxuICAgICAgICBsYWJlbDogY29udHJvbC5HZXREaXNwbGF5TmFtZSgpLFxuICAgICAgICB1aVR5cGU6IGNvbnRyb2xVaVR5cGUsXG4gICAgICAgIHJlcXVpcmVkOiB0aGlzLl9pc1JlcXVpcmVkKGNvbnRyb2xJbnB1dE5hbWUpLFxuICAgICAgICBib3VuZGVkUGljazogY29udHJvbC5Jc0JvdW5kZWRQaWNrKCkgPT09ICcxJyxcbiAgICAgICAgc3RhdGljUGljazogY29udHJvbC5Jc1N0YXRpY0JvdW5kZWQoKSA9PT0gJzEnLFxuICAgICAgICAvLyBwaWNrQXBwbGV0OiBjb250cm9sLkdldFBpY2tBcHBsZXQoKSwgLy8gY29uZnVzaW5nIGFuZCBub3QgY29uc2lzdGVudCAtIHNlZSB3aWtpXG4gICAgICAgIGlucHV0TmFtZTogY29udHJvbElucHV0TmFtZSxcbiAgICAgICAgaXNQb3N0Q2hhbmdlczogY29udHJvbC5Jc1Bvc3RDaGFuZ2VzKCksXG4gICAgICAgIG1heFNpemU6IGNvbnRyb2wuR2V0TWF4U2l6ZSgpLFxuICAgICAgICAvLyBtYXhDaGFyczogY29udHJvbC5HZXRNYXhDaGFycygpLCAvLyBpdCBpcyBhbHdheXMgMFxuICAgICAgICBmaWVsZE5hbWU6IGNvbnRyb2wuR2V0RmllbGROYW1lKCksXG4gICAgICAgIGlzTGluazogdGhpcy5wbS5FeGVjdXRlTWV0aG9kKCdDYW5OYXZpZ2F0ZScsIGNvbnRyb2xOYW1lKSxcbiAgICAgIH07XG4gICAgICBpZiAodGhpcy5pc0xpc3RBcHBsZXQpIHtcbiAgICAgICAgb2JqLnJlYWRPbmx5ID0gIXRoaXMucG0uRXhlY3V0ZU1ldGhvZCgnQ2FuVXBkYXRlJyxcbiAgICAgICAgICB0aGlzLnBtLkdldFJlbmRlcmVyKCkuR2V0Q29sdW1uSGVscGVyKCkuR2V0QWN0dWFsQ29udHJvbE5hbWUoY29udHJvbE5hbWUpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9iai5yZWFkT25seSA9ICF0aGlzLnBtLkV4ZWN1dGVNZXRob2QoJ0NhblVwZGF0ZScsIGNvbnRyb2xOYW1lKTtcbiAgICAgIH1cbiAgICAgIC8vIGFkZCB2YWx1ZXMgdG8gYmUgZGlzcGxheWVkIGluIHRoZSBzdGF0aWMgcGljayBsaXN0XG4gICAgICBpZiAob2JqLnN0YXRpY1BpY2spIHtcbiAgICAgICAgb2JqLnN0YXRpY0xPViA9IE4xOWJhc2VBcHBsZXQuR2V0U3RhdGljTE9WKGNvbnRyb2wuR2V0UmFkaW9Hcm91cFByb3BTZXQoKS5jaGlsZEFycmF5KTtcbiAgICAgICAgb2JqLmxvdnMgPSBvYmouc3RhdGljTE9WLnJlZHVjZSgoYWNjLCBlbCkgPT4geyAvLyBub3JtYWxpemVkXG4gICAgICAgICAgYWNjLnB1c2goeyBsaWM6IGVsLkZpZWxkVmFsdWUsIHZhbDogZWwuRGlzcGxheU5hbWUgfSk7XG4gICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgfSwgW10pO1xuICAgICAgfVxuICAgICAgY29udHJvbHNbY29udHJvbE5hbWVdID0gb2JqO1xuICAgIH1cbiAgICByZXR1cm4gY29udHJvbHM7XG4gIH1cblxuICBnZXRSZWNvcmRTZXQoYWRkUmVjb3JkSW5kZXgpIHtcbiAgICBpZiAoYWRkUmVjb3JkSW5kZXgpIHtcbiAgICAgIHJldHVybiB0aGlzLnBtLkdldCgnR2V0UmVjb3JkU2V0JykubWFwKChlbCwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgcmV0ID0gT2JqZWN0LmFzc2lnbih7fSwgZWwpO1xuICAgICAgICByZXQuX2luZHggPSBpbmRleDtcbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5wbS5HZXQoJ0dldFJlY29yZFNldCcpO1xuICB9XG5cbiAgZ2V0UmF3UmVjb3JkU2V0KGFkZFJlY29yZEluZGV4KSB7XG4gICAgaWYgKGFkZFJlY29yZEluZGV4KSB7XG4gICAgICByZXR1cm4gdGhpcy5wbS5HZXQoJ0dldFJhd1JlY29yZFNldCcpLm1hcCgoZWwsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHJldCA9IE9iamVjdC5hc3NpZ24oe30sIGVsKTtcbiAgICAgICAgcmV0Ll9pbmR4ID0gaW5kZXg7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucG0uR2V0KCdHZXRSYXdSZWNvcmRTZXQnKTtcbiAgfVxuXG4gIGdldFJvd0xpc3RSb3dDb3VudCgpIHtcbiAgICAvLyBob3cgbXVjaCBhcHBsZXQgY2FuIGRpc3BsYXkgKHNwZWNpZmllZCBpbiBTaWViZWwgVG9vbHMpIC0gMTAvMjBcbiAgICByZXR1cm4gdGhpcy5wbS5HZXQoJ0dldFJvd0xpc3RSb3dDb3VudCcpO1xuICB9XG5cbiAgZ2V0TnVtUm93cygpIHtcbiAgICAvLyBjdXJyZW50bHkgZmV0Y2hlZCBmcm9tIHNlcnZlcj9cbiAgICByZXR1cm4gdGhpcy5wbS5HZXQoJ0dldE51bVJvd3MnKTtcbiAgfVxuXG4gIGdldFNlbGVjdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5wbS5HZXQoJ0dldFNlbGVjdGlvbicpO1xuICB9XG5cbiAgX25hdmlnYXRlKG1ldGhvZCkge1xuICAgIGlmICghdGhpcy5jYW5JbnZva2VNZXRob2QobWV0aG9kKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCByZXQgPSB0aGlzLnBtLkV4ZWN1dGVNZXRob2QoJ0ludm9rZU1ldGhvZCcsIG1ldGhvZCwgbnVsbCwgZmFsc2UpO1xuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICBuZXh0UmVjb3JkKCkge1xuICAgIHJldHVybiB0aGlzLl9uYXZpZ2F0ZSh0aGlzLmlzTGlzdEFwcGxldCA/ICdHb3RvTmV4dCcgOiAnR290b05leHRTZXQnKTtcbiAgfVxuXG4gIG5leHRSZWNvcmRTZXQoKSB7XG4gICAgaWYgKCF0aGlzLmlzTGlzdEFwcGxldCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fbmF2aWdhdGUoJ0dvdG9OZXh0U2V0Jyk7XG4gIH1cblxuICBwb3NpdGlvbk9uUm93KGluZGV4KSB7XG4gICAgaWYgKHRoaXMuaXNMaXN0QXBwbGV0KSB7XG4gICAgICBpZiAoIXRoaXMucG0uRXhlY3V0ZU1ldGhvZCgnQ2FuSW52b2tlTWV0aG9kJywgJ1Bvc2l0aW9uT25Sb3cnKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAoaW5kZXggPCAwKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIC8vIHNlZW1zIHRoaXMgY2hlY2sgaXMgcmVkdW5kYW50XG4gICAgICAvLyBpZiAodGhpcy5nZXROdW1Sb3dzKCkgPCBpbmRleCArIDEpIHsgLy9cbiAgICAgIC8vICAgcmV0dXJuIGZhbHNlO1xuICAgICAgLy8gfVxuICAgICAgaWYgKHRoaXMuZ2V0Um93TGlzdFJvd0NvdW50KCkgPCBpbmRleCArIDEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke2luZGV4fSBpcyBlcXVhbC9oaWdoZXIgdGhhbiBhbW91bnQgb2YgcmVjb3JkcyBpbiB0aGUgYXBwbGV0ICR7dGhpcy5nZXRSb3dMaXN0Um93Q291bnQoKX1gKTtcbiAgICAgIH1cbiAgICAgIC8vIHRvZG8gOiBpZiB3ZSBnb3QgdG8gdGhpcyBwb2ludFxuICAgICAgLy8gIHNob3VsZCB3ZSBjaGVjayBhcHBsZXQuR2V0QWN0aXZlQ29udHJvbCAoYXBwbGV0LnByb3RvdHlwZS5JbnZva2VNZXRob2QpXG4gICAgICAvLyAgYW5kIG51bGxpZnkgaXQgaWYgYWN0aXZlP1xuICAgICAgcmV0dXJuIHRoaXMucG0uRXhlY3V0ZU1ldGhvZCgnSGFuZGxlUm93U2VsZWN0JywgaW5kZXgsIGZhbHNlLCBmYWxzZSk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHByZXZSZWNvcmQoKSB7XG4gICAgaWYgKHRoaXMuaXNMaXN0QXBwbGV0KSB7XG4gICAgICByZXR1cm4gdGhpcy5wb3NpdGlvbk9uUm93KHRoaXMucG0uR2V0KCdHZXRTZWxlY3Rpb24nKSAtIDEpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fbmF2aWdhdGUoJ0dvdG9QcmV2aW91c1NldCcpO1xuICB9XG5cbiAgcHJldlJlY29yZFNldCgpIHtcbiAgICBpZiAoIXRoaXMuaXNMaXN0QXBwbGV0KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9uYXZpZ2F0ZSgnR290b1ByZXZpb3VzU2V0Jyk7XG4gIH1cblxuICBuZXdSZWNvcmQoY2IpIHtcbiAgICAvLyB0b2RvOiBzaG91bGQgaXQgYmUgdGhlIHNhbWUgYXMgV3JpdGVSZWNvcmQ/XG4gICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gdGhpcy5fbmV3UmVjb3JkKHJlc29sdmUpKTtcbiAgICByZXR1cm4gdHlwZW9mIGNiID09PSAnZnVuY3Rpb24nID8gcHJvbWlzZS50aGVuKGNiKSA6IHByb21pc2U7XG4gIH1cblxuICBfbmV3UmVjb3JkKGNiKSB7XG4gICAgcmV0dXJuIHRoaXMucG0uRXhlY3V0ZU1ldGhvZCgnSW52b2tlTWV0aG9kJywgJ05ld1JlY29yZCcsIG51bGwsIHtcbiAgICAgIGFzeW5jOiB0cnVlLFxuICAgICAgY2IsXG4gICAgfSk7XG4gIH1cblxuICBuZXdSZWNvcmRTeW5jKCkge1xuICAgIHJldHVybiB0aGlzLnBtLkV4ZWN1dGVNZXRob2QoJ0ludm9rZU1ldGhvZCcsICdOZXdSZWNvcmQnLCBudWxsLCBmYWxzZSk7XG4gIH1cblxuICB3cml0ZVJlY29yZChjYiwgY2JlcnIpIHtcbiAgICBsZXQgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHRoaXMuX3dyaXRlUmVjb3JkKCguLi5hcmdzKSA9PiB7XG4gICAgICAvLyBkbyB3ZSBhbHdheXMgaGF2ZSB0aHJlZSBpbnB1dCBhcmd1bWVudHMsIGFuZCB0aGUgdGhpcmQgYXJndW1lbnQgaXNcbiAgICAgIGlmIChhcmdzWzJdLkdldFByb3BlcnR5KCdTdGF0dXMnKSA9PT0gJ0NvbXBsZXRlZCcpIHtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVqZWN0KCk7XG4gICAgICB9XG4gICAgfSkpO1xuICAgIHByb21pc2UgPSB0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicgPyBwcm9taXNlLnRoZW4oY2IpIDogcHJvbWlzZTtcbiAgICBwcm9taXNlID0gdHlwZW9mIGNiZXJyID09PSAnZnVuY3Rpb24nID8gcHJvbWlzZS5jYXRjaChjYmVycikgOiBwcm9taXNlO1xuICAgIHJldHVybiBwcm9taXNlO1xuICB9XG5cbiAgX3dyaXRlUmVjb3JkKGNiKSB7XG4gICAgcmV0dXJuIHRoaXMucG0uRXhlY3V0ZU1ldGhvZCgnSW52b2tlTWV0aG9kJywgJ1dyaXRlUmVjb3JkJywgbnVsbCwge1xuICAgICAgYXN5bmM6IHRydWUsXG4gICAgICBjYixcbiAgICB9KTtcbiAgfVxuXG4gIHdyaXRlUmVjb3JkU3luYygpIHtcbiAgICByZXR1cm4gdGhpcy5wbS5FeGVjdXRlTWV0aG9kKCdJbnZva2VNZXRob2QnLCAnV3JpdGVSZWNvcmQnLCBudWxsLCBmYWxzZSk7XG4gIH1cblxuICBkZWxldGVSZWNvcmRTeW5jKCkge1xuICAgIHJldHVybiB0aGlzLnBtLkV4ZWN1dGVNZXRob2QoJ0ludm9rZU1ldGhvZCcsICdEZWxldGVSZWNvcmQnLCBudWxsLCBmYWxzZSk7XG4gIH1cblxuICB1bmRvUmVjb3JkU3luYygpIHtcbiAgICByZXR1cm4gdGhpcy5wbS5FeGVjdXRlTWV0aG9kKCdJbnZva2VNZXRob2QnLCAnVW5kb1JlY29yZCcsIG51bGwsIGZhbHNlKTtcbiAgfVxuXG4gIHNldENvbnRyb2xWYWx1ZShuYW1lLCB2YWx1ZSkge1xuICAgIC8vIFRPRE86IElmIHZhbHVlIGlzIG51bGwsIG5vdGhpbmcgaGFwcGVucywgc2hvdWxkIHdlIGNvbnZlcnQgbnVsbCB0byAnJz9cbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5fZ2V0Q29udHJvbChuYW1lKTtcbiAgICAvLyBUT0RPOiBDaGVjayBpZiBjb250cm9sIGlzIGZvdW5kXG4gICAgdmFsdWUgPSB0aGlzLl9nZXRWYWx1ZUZvckNvbnRyb2woY29udHJvbC5HZXRVSVR5cGUoKSwgdmFsdWUpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgLy8gbWF5YmUgY2hlY2sgaWYgdHlwZW9mIGFwcGxldC5TZXRDb250cm9sVmFsdWVCeU5hbWUgaXMgZnVuY3Rpb24gYW5kIHVzZSBpdCB3aGVuIGF2YWlsYWJsZT8gLSBub3QgZXhpc3RzIGluIDE0LnhcbiAgICAvLyBUT0RPOiBzaG91bGQgd2UgdXNlIFNldENlbGxWYWx1ZSBmb3IgbGlzdCBhcHBsZXRzP1xuICAgIHRoaXMucG0uT25Db250cm9sRXZlbnQodGhpcy5jb25zdHMuZ2V0KCdQSFlFVkVOVF9DT05UUk9MX0ZPQ1VTJyksIGNvbnRyb2wpO1xuICAgIGNvbnN0IHJldCA9IHRoaXMucG0uT25Db250cm9sRXZlbnQodGhpcy5jb25zdHMuZ2V0KCdQSFlFVkVOVF9DT05UUk9MX0JMVVInKSwgY29udHJvbCwgdmFsdWUpO1xuICAgIGlmICghcmV0KSB7XG4gICAgICBjb25zb2xlLmxvZyhgVmFsdWUgJHt2YWx1ZX0gd2FzIG5vdCBzZXQgZm9yICR7Y29udHJvbC5HZXROYW1lKCl9YCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgZ2V0RHluYW1pY0xPVihjb250cm9sTmFtZSkge1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLl9nZXRDb250cm9sKGNvbnRyb2xOYW1lKTtcbiAgICBjb25zdCBjb250cm9sSW5wdXROYW1lID0gY29udHJvbC5HZXRJbnB1dE5hbWUoKTtcbiAgICB0aGlzLmxvdltjb250cm9sSW5wdXROYW1lXSA9IHt9O1xuICAgIGNvbnN0IHBzID0gU2llYmVsQXBwLlNfQXBwLk5ld1Byb3BlcnR5U2V0KCk7XG4gICAgcHMuU2V0UHJvcGVydHkoJ1NXRUZpZWxkJywgY29udHJvbElucHV0TmFtZSk7XG4gICAgcHMuU2V0UHJvcGVydHkoJ1NXRUpJJywgZmFsc2UpO1xuICAgIHRoaXMuYXBwbGV0LlNldEFjdGl2ZUNvbnRyb2wobnVsbCk7IC8vIHRvIHByZXZlIFVwZGF0ZVBpY2tcbiAgICB0aGlzLmFwcGxldC5JbnZva2VNZXRob2QoJ0dldFF1aWNrUGlja0luZm8nLCBwcyk7XG4gICAgcmV0dXJuIHRoaXMubG92W2NvbnRyb2xJbnB1dE5hbWVdO1xuICB9XG5cbiAgZ2V0U3RhdGljTE9WKGNvbnRyb2xOYW1lKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuX2dldENvbnRyb2woY29udHJvbE5hbWUpO1xuICAgIGNvbnN0IHJldCA9IFtdO1xuICAgIGlmICgnMScgPT09IGNvbnRyb2wuSXNTdGF0aWNCb3VuZGVkKCkpIHtcbiAgICAgIGNvbnN0IGFyciA9IE4xOWJhc2VBcHBsZXQuR2V0U3RhdGljTE9WKGNvbnRyb2wuR2V0UmFkaW9Hcm91cFByb3BTZXQoKS5jaGlsZEFycmF5KTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHJldC5wdXNoKGFycltpXS5EaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgICByZXQuc29ydCgpO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgX2dldENvbnRyb2xWYWx1ZShjb250cm9sVWlUeXBlLCB2YWx1ZSkge1xuICAgIC8vIHRvZG86IHdoYXQgYWJvdXQgZGF0ZXRpbWU/XG4gICAgbGV0IHJldCA9IHZhbHVlO1xuICAgIGlmICh0aGlzLmNvbnN0cy5nZXQoJ1NXRV9DVFJMX0NIRUNLQk9YJykgPT09IGNvbnRyb2xVaVR5cGUpIHtcbiAgICAgIC8vIGNvbnZlcnQgWS9OL251bGwgLT4gdHJ1ZS9mYWxzZS9udWxsXG4gICAgICAvLyBkbyB3ZSBuZWVkIHRvIHNlbmQgbnVsbD9cbiAgICAgIHN3aXRjaCAodmFsdWUpIHtcbiAgICAgICAgY2FzZSAnWSc6XG4gICAgICAgICAgcmV0ID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnTic6XG4gICAgICAgICAgcmV0ID0gZmFsc2U7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIC8vIHRoaXMgaXMgYSB0ZW1wIG1ldGhvZCB0byBzdXBwb3J0IHRoZSBkZW1vIHdoZXJlXG4gIC8vIFNpZWJlbCBhbmQgY3VzdG9tIHJlbmRlcmVkIGFwcGxldCBjb2V4aXN0XG4gIF9nZXRGaWVsZFRvQ29udHJvbE1hcChfY29udHJvbHMpIHtcbiAgICBjb25zdCByZXQgPSB7fTtcbiAgICBjb25zdCBhcHBsZXRDb250cm9scyA9IHRoaXMuX3JldHVybkNvbnRyb2xzKCk7XG4gICAgY29uc3QgYXJyID0gT2JqZWN0LmtleXMoX2NvbnRyb2xzKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgY29udHJvbCA9IGFwcGxldENvbnRyb2xzW2FycltpXV07XG4gICAgICByZXRbY29udHJvbC5HZXRGaWVsZE5hbWUoKV0gPSB7XG4gICAgICAgIG5hbWU6IGNvbnRyb2wuR2V0TmFtZSgpLFxuICAgICAgICBpc1Bvc3RDaGFuZ2VzOiBjb250cm9sLklzUG9zdENoYW5nZXMoKSxcbiAgICAgICAgdWlUeXBlOiBjb250cm9sLkdldFVJVHlwZSgpLFxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIGdldEN1cnJlbnRSZWNvcmQocmF3KSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmdldFNlbGVjdGlvbigpO1xuICAgIC8vIHRvZG86IGNoZWNrIGlmIHJlY29yZFxuICAgIC8vIHRvZG86IG1ha2UgYSBjb3B5IG9mIHJldHVybmVkIG9iamVjdCAodG8gYXZvaWQgdGhlIGFjY2lkZW50YWwgbW9kaWZpY2F0aW9uIG9mIHRoZSByZWNvcmRzZXQpXG4gICAgaWYgKHJhdykge1xuICAgICAgcmV0dXJuIHRoaXMucG0uR2V0KCdHZXRSYXdSZWNvcmRTZXQnKVtpbmRleF07XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnBtLkdldCgnR2V0UmVjb3JkU2V0JylbaW5kZXhdO1xuICB9XG5cbiAgY2FsY3VsYXRlQ3VycmVudFJlY29yZFN0YXRlKCkge1xuICAgIC8vIHRvZG86IGRvIHdlIG5lZWQgdG8gZGVsZXRlIHBlbmRpbmdcbiAgICAvLyAwIC0gTm8gcmVjb3JkcyBkaXNwbGF5ZWRcbiAgICAvLyAxIC0gUmVjb3JkIGlzIGJlaW5nIGNyZWF0ZWRcbiAgICAvLyAyIC0gUmVjb3JkIGlzIGJlaW5nIGVkaXRlZFxuICAgIC8vIDMgLSBJcyBpbiBxdWVyeSBtb2RlXG4gICAgLy8gNCAtIFJlY29yZCBpcyBkaXNwbGF5ZWQsXG4gICAgLy8gNSAtIFJlY29yZCBpcyByZWFkLW9ubHlcblxuICAgIGNvbnN0IGJjID0gdGhpcy5hcHBsZXQuR2V0QnVzQ29tcCgpO1xuXG4gICAgaWYgKGJjLklzSW5RdWVyeVN0YXRlKCkpIHtcbiAgICAgIC8vIGlmIG5vIHJlY29yZHMgYW5kIHRoZSBlbnRlcmVkIHRoZSBxdWVyeSBtb2RlLFxuICAgICAgLy8gc2VsZWN0aW9uIGlzIC0xLCB0aGVyZWZvcmUgd2UgbmVlZCB0byBjaGVjayBxdWVyeSBtb2RlIGZpcnN0XG4gICAgICByZXR1cm4gMztcbiAgICB9XG4gICAgaWYgKHRoaXMuZ2V0U2VsZWN0aW9uKCkgPCAwKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgaWYgKGJjLklzSW5zZXJ0UGVuZGluZygpKSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9XG4gICAgaWYgKGJjLklzQ29tbWl0UGVuZGluZygpKSB7XG4gICAgICByZXR1cm4gMjtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmNhbkludm9rZU1ldGhvZCgnV3JpdGVSZWNvcmQnKSkge1xuICAgICAgLy8gb3IgbWF5YmUgYmV0dGVyIHRvIHVzZSB0aGUgY2FuVXBkYXRlIHByb3BlcnR5IG9mIHRoZSBiY1xuICAgICAgcmV0dXJuIDU7XG4gICAgfVxuXG4gICAgcmV0dXJuIDQ7IC8vIHRoaXMgaXMgYSBkZWZhdWx0IGZhbGxiYWNrO1xuICB9XG5cbiAgZ2V0Q3VycmVudFJlY29yZE1vZGVsKF9jb250cm9scywgX21ldGhvZHMpIHtcbiAgICBpZiAoIV9jb250cm9scykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBfY29udHJvbHMuc3RhdGUgPSB0aGlzLmNhbGN1bGF0ZUN1cnJlbnRSZWNvcmRTdGF0ZSgpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgX2NvbnRyb2xzLmlkID0gJyc7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBsZXQgb2JqID0ge307XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmdldFNlbGVjdGlvbigpO1xuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICBvYmogPSB0aGlzLmdldFJlY29yZFNldCgpW2luZGV4XTtcbiAgICAgIF9jb250cm9scy5pZCA9IHRoaXMuZ2V0UmF3UmVjb3JkU2V0KClbaW5kZXhdLklkOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgfVxuICAgIGxldCBhcnIgPSBPYmplY3Qua2V5cyhfY29udHJvbHMpO1xuICAgIGNvbnN0IGFwcGxldENvbnRyb2xzID0gdGhpcy5fcmV0dXJuQ29udHJvbHMoKTtcbiAgICAvLyBwb3B1bGF0ZSBjb250cm9sc1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBjb250cm9sID0gYXBwbGV0Q29udHJvbHNbYXJyW2ldXTtcbiAgICAgIGlmICh0eXBlb2YgY29udHJvbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc3QgY29udHJvbE5hbWUgPSBjb250cm9sLkdldE5hbWUoKTtcbiAgICAgICAgY29uc3QgZmllbGROYW1lID0gY29udHJvbC5HZXRGaWVsZE5hbWUoKTtcbiAgICAgICAgaWYgKF9jb250cm9scy5zdGF0ZSA+IDApIHtcbiAgICAgICAgICBfY29udHJvbHNbYXJyW2ldXSA9IHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICAgICAgdmFsdWU6IHRoaXMuX2dldENvbnRyb2xWYWx1ZShjb250cm9sLkdldFVJVHlwZSgpLCBvYmpbZmllbGROYW1lXSksXG4gICAgICAgICAgICByZWFkb25seTogIXRoaXMucG0uRXhlY3V0ZU1ldGhvZCgnQ2FuVXBkYXRlJywgY29udHJvbE5hbWUpLFxuICAgICAgICAgICAgaXNMaW5rOiB0aGlzLnBtLkV4ZWN1dGVNZXRob2QoJ0Nhbk5hdmlnYXRlJywgY29udHJvbE5hbWUpLFxuICAgICAgICAgICAgbGFiZWw6IGNvbnRyb2wuR2V0RGlzcGxheU5hbWUoKSxcbiAgICAgICAgICAgIGlzUG9zdENoYW5nZXM6IGNvbnRyb2wuSXNQb3N0Q2hhbmdlcygpLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRoaXMuX2lzUmVxdWlyZWQoY29udHJvbC5HZXRJbnB1dE5hbWUoKSksXG4gICAgICAgICAgICBtYXhTaXplOiBjb250cm9sLkdldE1heFNpemUoKSxcbiAgICAgICAgICAgIGZpZWxkTmFtZSxcbiAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgeyAvLyBubyByZWNvcmQgZGlzcGxheWVkXG4gICAgICAgICAgX2NvbnRyb2xzW2FycltpXV0gPSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgICAgICAgIHZhbHVlOiAnJyxcbiAgICAgICAgICAgIHJlYWRvbmx5OiB0cnVlLFxuICAgICAgICAgICAgaXNMaW5rOiBmYWxzZSxcbiAgICAgICAgICAgIGxhYmVsOiBjb250cm9sLkdldERpc3BsYXlOYW1lKCksXG4gICAgICAgICAgICBpc1Bvc3RDaGFuZ2VzOiBjb250cm9sLklzUG9zdENoYW5nZXMoKSxcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0aGlzLl9pc1JlcXVpcmVkKGNvbnRyb2wuR2V0SW5wdXROYW1lKCkpLFxuICAgICAgICAgICAgbWF4U2l6ZTogY29udHJvbC5HZXRNYXhTaXplKCksXG4gICAgICAgICAgICBmaWVsZE5hbWUsXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAvLyBwb3B1bGF0ZSBtZXRob2RzXG4gICAgaWYgKF9tZXRob2RzKSB7XG4gICAgICBhcnIgPSBPYmplY3Qua2V5cyhfbWV0aG9kcyk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBfbWV0aG9kc1thcnJbaV1dID0gdGhpcy5jYW5JbnZva2VNZXRob2QoYXJyW2ldKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgfVxuICAgIH1cbiAgICAvLyByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4ge1xuICAgICAgY29udHJvbHM6IF9jb250cm9scyxcbiAgICAgIG1ldGhvZHM6IF9tZXRob2RzLFxuICAgIH07XG4gIH1cblxuICBfZ2V0Q29udHJvbElucHV0TmFtZUZvcklkUXVlcnkoKSB7XG4gICAgY29uc3QgYXBwbGV0Q29udHJvbHMgPSB0aGlzLl9yZXR1cm5Db250cm9scygpO1xuICAgIGNvbnN0IGFyciA9IE9iamVjdC5rZXlzKGFwcGxldENvbnRyb2xzKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgY29udHJvbCA9IGFwcGxldENvbnRyb2xzW2FycltpXV07XG4gICAgICBjb25zdCBjb250cm9sVWlUeXBlID0gY29udHJvbC5HZXRVSVR5cGUoKTtcbiAgICAgIGlmICghdGhpcy5faXNTa2lwQ29udHJvbChjb250cm9sVWlUeXBlKSkge1xuICAgICAgICAvLyBza2lwcGluZyBhbHNvIEpDaGVja2JveFxuICAgICAgICAvLyB0b2RvOiBjaGVjayBkbyB3ZSBuZWVkIHRvIHNraXAgYWxzbyBkYXRlP1xuICAgICAgICBpZiAoY29udHJvbFVpVHlwZSAhPT0gdGhpcy5jb25zdHMuZ2V0KCdTV0VfQ1RSTF9DSEVDS0JPWCcpKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRyb2wuR2V0SW5wdXROYW1lKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjYW5ub3QgZmluZCBhIGNvbnRyb2wgZm9yIHF1ZXJ5Jyk7XG4gIH1cblxuICBfbmV3UXVlcnkoKSB7XG4gICAgcmV0dXJuIHRoaXMucG0uRXhlY3V0ZU1ldGhvZCgnSW52b2tlTWV0aG9kJywgJ05ld1F1ZXJ5JywgbnVsbCwgZmFsc2UpO1xuICB9XG5cbiAgcXVlcnlCeVNlYXJjaEV4cHJTeW5jKGV4cHIpIHtcbiAgICB0aGlzLmFwcGxldC5JbnZva2VNZXRob2QoJ05ld1F1ZXJ5Jyk7XG4gICAgdGhpcy5hcHBsZXQuR2V0QnVzQ29tcCgpLlNldEZpZWxkVmFsdWUoJ0lkJywgZXhwcik7XG4gICAgdGhpcy5hcHBsZXQuSW52b2tlTWV0aG9kKCdFeGVjdXRlUXVlcnknKTtcbiAgICByZXR1cm4gdGhpcy5nZXRSZWNvcmRTZXQoKS5sZW5ndGg7XG4gIH1cblxuICBxdWVyeUJ5SWRTeW5jKHJvd0lkKSB7XG4gICAgbGV0IGV4cHIgPSByb3dJZDtcbiAgICBpZiAoQXJyYXkgPT09IHJvd0lkLmNvbnN0cnVjdG9yKSB7XG4gICAgICBleHByID0gcm93SWQubWFwKGVsID0+IGBJZD1cIiR7ZWx9XCJgKS5qb2luKCcgT1IgJyk7XG4gICAgICBjb25zb2xlLmxvZyhleHByKTtcbiAgICB9XG5cbiAgICB0aGlzLmFwcGxldC5JbnZva2VNZXRob2QoJ05ld1F1ZXJ5Jyk7XG4gICAgdGhpcy5hcHBsZXQuR2V0QnVzQ29tcCgpLlNldEZpZWxkVmFsdWUoJ0lkJywgZXhwcik7XG4gICAgdGhpcy5hcHBsZXQuSW52b2tlTWV0aG9kKCdFeGVjdXRlUXVlcnknKTtcbiAgICByZXR1cm4gdGhpcy5nZXRSZWNvcmRTZXQoKS5sZW5ndGg7XG4gIH1cblxuICBxdWVyeUJ5SWQocm93SWQsIGNiKSB7XG4gICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gdGhpcy5fcXVlcnlCeUlkKHJvd0lkLCByZXNvbHZlKSk7XG4gICAgY29uc3QgcmV0ID0gcHJvbWlzZS50aGVuKCgpID0+IHRoaXMuZ2V0UmVjb3JkU2V0KCkubGVuZ3RoKTtcbiAgICByZXR1cm4gdHlwZW9mIGNiID09PSAnZnVuY3Rpb24nID8gcmV0LnRoZW4oY2IpIDogcmV0O1xuICB9XG5cbiAgX3F1ZXJ5QnlJZChyb3dJZCwgY2IpIHtcbiAgICAvLyBtYXliZSBjaGVjayBpZiBpdCBpcyBhbHJlYWR5IGluIHF1ZXJ5IG1vZGUgLyBjYW5jZWwgdGhlIHF1ZXJ5XG4gICAgdGhpcy5fbmV3UXVlcnkoKTtcblxuICAgIGNvbnN0IG1ldGhvZCA9ICdFeGVjdXRlUXVlcnknO1xuICAgIGNvbnN0IGFpID0ge1xuICAgICAgc2NvcGU6IHRoaXMsXG4gICAgICBhc3luYzogdHJ1ZSxcbiAgICAgIG1hc2s6IGZhbHNlLFxuICAgICAgc2VsZmJ1c3k6IGZhbHNlLFxuICAgICAgYXJnczogW10sXG4gICAgfTtcbiAgICBpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBhaS5jYiA9IGNiO1xuICAgIH1cblxuICAgIGNvbnN0IHBzT3V0cHV0ID0gU2llYmVsQXBwLlNfQXBwLk5ld1Byb3BlcnR5U2V0KCk7XG4gICAgY29uc3QgcHNJbnB1dCA9IFNpZWJlbEFwcC5TX0FwcC5OZXdQcm9wZXJ0eVNldCgpO1xuICAgIHBzSW5wdXQuU2V0UHJvcGVydHkodGhpcy5fZ2V0Q29udHJvbElucHV0TmFtZUZvcklkUXVlcnkoKSwgYElkPVwiJHtyb3dJZH1cImApO1xuXG4gICAgYWkuYXJncy5wdXNoKG1ldGhvZCk7XG4gICAgYWkuYXJncy5wdXNoKHBzSW5wdXQuQ2xvbmUoKSk7XG5cbiAgICByZXR1cm4gdGhpcy5hcHBsZXQuQ2FsbFNlcnZlckFwcGxldChtZXRob2QsIHBzSW5wdXQsIHBzT3V0cHV0LCBhaSk7XG4gIH1cblxuICBxdWVyeShwYXJhbXMsIGNiKSB7XG4gICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gdGhpcy5fcXVlcnkocGFyYW1zLCByZXNvbHZlKSk7XG4gICAgY29uc3QgcmV0ID0gcHJvbWlzZS50aGVuKCgpID0+IHRoaXMuZ2V0UmVjb3JkU2V0KCkubGVuZ3RoKTtcbiAgICByZXR1cm4gdHlwZW9mIGNiID09PSAnZnVuY3Rpb24nID8gcmV0LnRoZW4oY2IpIDogcmV0O1xuICB9XG5cbiAgX3F1ZXJ5KHBhcmFtcywgY2IpIHtcbiAgICAvLyBUT0RPOiBjaGVjayBpZiBpdCBpcyBhbHJlYWR5IGluIHF1ZXJ5IG1vZGUgdG8gYXZvaWQgY2FsbGluZyB0aGUgbmV3IHF1ZXJ5IGFnYWluXG4gICAgLy8gb3IgbWF5YmUgYmV0dGVyIHRvIGNhbmNlbCB0aGUgZXhpc3RpbmcgcXVlcnk/XG4gICAgdGhpcy5fbmV3UXVlcnkoKTtcblxuICAgIGNvbnN0IG1ldGhvZCA9ICdFeGVjdXRlUXVlcnknO1xuICAgIGNvbnN0IGFpID0ge1xuICAgICAgc2NvcGU6IHRoaXMsXG4gICAgICBhc3luYzogdHJ1ZSxcbiAgICAgIG1hc2s6IGZhbHNlLFxuICAgICAgc2VsZmJ1c3k6IGZhbHNlLFxuICAgICAgYXJnczogW10sXG4gICAgfTtcbiAgICBpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBhaS5jYiA9IGNiO1xuICAgIH1cblxuICAgIGNvbnN0IHBzT3V0cHV0ID0gU2llYmVsQXBwLlNfQXBwLk5ld1Byb3BlcnR5U2V0KCk7XG4gICAgY29uc3QgcHNJbnB1dCA9IFNpZWJlbEFwcC5TX0FwcC5OZXdQcm9wZXJ0eVNldCgpO1xuICAgIGNvbnN0IGFyciA9IE9iamVjdC5rZXlzKHBhcmFtcyk7XG4gICAgY29uc3QgX2NvbnRyb2xzID0gdGhpcy5fcmV0dXJuQ29udHJvbHMoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgY29udHJvbCA9IF9jb250cm9sc1thcnJbaV1dO1xuICAgICAgcHNJbnB1dC5TZXRQcm9wZXJ0eShjb250cm9sLkdldElucHV0TmFtZSgpLCB0aGlzLl9nZXRWYWx1ZUZvckNvbnRyb2woY29udHJvbC5HZXRVSVR5cGUoKSwgcGFyYW1zW2FycltpXV0pKTtcbiAgICB9XG4gICAgYWkuYXJncy5wdXNoKG1ldGhvZCk7XG4gICAgYWkuYXJncy5wdXNoKHBzSW5wdXQuQ2xvbmUoKSk7XG5cbiAgICByZXR1cm4gdGhpcy5hcHBsZXQuQ2FsbFNlcnZlckFwcGxldChtZXRob2QsIHBzSW5wdXQsIHBzT3V0cHV0LCBhaSk7XG4gIH1cblxuICBzdGF0aWMgUmVxdWVyeShuYW1lKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IFNpZWJlbEFwcC5TX0FwcC5HZXRTZXJ2aWNlKCdOMTkgQlMnKTtcbiAgICBpZiAoc2VydmljZSkge1xuICAgICAgY29uc3QgaW5Qcm9wU2V0ID0gU2llYmVsQXBwLlNfQXBwLk5ld1Byb3BlcnR5U2V0KCk7XG4gICAgICBpblByb3BTZXQuU2V0UHJvcGVydHkoJ25hbWUnLCBuYW1lKTtcbiAgICAgIHNlcnZpY2UuSW52b2tlTWV0aG9kKCdSZXF1ZXJ5JywgaW5Qcm9wU2V0LCB7fSk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIFJlZnJlc2gobmFtZSkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSBTaWViZWxBcHAuU19BcHAuR2V0U2VydmljZSgnTjE5IEJTJyk7XG4gICAgaWYgKHNlcnZpY2UpIHtcbiAgICAgIGNvbnN0IGluUHJvcFNldCA9IFNpZWJlbEFwcC5TX0FwcC5OZXdQcm9wZXJ0eVNldCgpO1xuICAgICAgaW5Qcm9wU2V0LlNldFByb3BlcnR5KCduYW1lJywgbmFtZSk7XG4gICAgICBzZXJ2aWNlLkludm9rZU1ldGhvZCgnUmVmcmVzaCcsIGluUHJvcFNldCwge30pO1xuICAgIH1cbiAgfVxuXG4gIGdldE1WRihpZHMsIGZpZWxkcywgdXNlQWN0aXZlQk8pIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4gdGhpcy5fZ2V0TVZGKGlkcywgZmllbGRzLCB1c2VBY3RpdmVCTywgcmVzb2x2ZSwgcmVqZWN0KSk7XG4gIH1cblxuICBfZ2V0RmllbGROYW1lRm9yQ29udHJvbChjb250cm9sTmFtZSkge1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLl9nZXRDb250cm9sKGNvbnRyb2xOYW1lKTtcbiAgICAvLyBpZiBub3QgZm91bmQsIHRoZSBpbnB1dCB2YWx1ZSBpcyByZXR1cm5lZFxuICAgIGlmIChjb250cm9sKSB7XG4gICAgICByZXR1cm4gY29udHJvbC5HZXRGaWVsZE5hbWUoKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbnRyb2xOYW1lO1xuICB9XG5cbiAgX2dldE1WRihpZHMsIGZpZWxkcywgdXNlQWN0aXZlQk8sIHJlc29sdmUsIHJlamVjdCkge1xuICAgIGNvbnN0IGFyciA9IE9iamVjdC5lbnRyaWVzKGZpZWxkcyk7XG4gICAgY29uc3QgcHNJbnB1dHMgPSBTaWViZWxBcHAuU19BcHAuTmV3UHJvcGVydHlTZXQoKTtcbiAgICBwc0lucHV0cy5TZXRQcm9wZXJ0eSgnQk8nLCBTaWViZWxBcHAuU19BcHAuR2V0QWN0aXZlQnVzT2JqKCkuR2V0TmFtZSgpKTtcbiAgICBwc0lucHV0cy5TZXRQcm9wZXJ0eSgnQkMnLCB0aGlzLnBtLkdldCgnR2V0QnVzQ29tcCcpLkdldE5hbWUoKSk7XG4gICAgcHNJbnB1dHMuU2V0UHJvcGVydHkoJ1VzZUFjdGl2ZUJPJywgdXNlQWN0aXZlQk8gPyAnWScgOiAnTicpO1xuICAgIHBzSW5wdXRzLlNldFByb3BlcnR5KCdJRCcsIGlkcy5qb2luKCcsJykpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBwcyA9IFNpZWJlbEFwcC5TX0FwcC5OZXdQcm9wZXJ0eVNldCgpO1xuICAgICAgcHMuU2V0VHlwZSh0aGlzLl9nZXRGaWVsZE5hbWVGb3JDb250cm9sKGFycltpXVswXSkpO1xuICAgICAgcHMuU2V0UHJvcGVydHkoJ0ZpZWxkcycsIGFycltpXVsxXS5qb2luKCcsJykpO1xuICAgICAgcHNJbnB1dHMuQWRkQ2hpbGQocHMuQ2xvbmUoKSk7XG4gICAgfVxuICAgIGNvbnN0IGJzID0gU2llYmVsQXBwLlNfQXBwLkdldFNlcnZpY2UoJ04xOSBCUycpO1xuICAgIGNvbnN0IGFpID0ge1xuICAgICAgYXN5bmM6IHRydWUsXG4gICAgICBzZWxmYnVzeTogdHJ1ZSxcbiAgICAgIHNjb3BlOiB0aGlzLFxuICAgICAgZXJyY2I6ICgpID0+IHJlamVjdCgpLFxuICAgICAgY2I6IChtZXRob2ROYW1lLCBJbnB1dHMsIHBzT3V0cHV0cykgPT4ge1xuICAgICAgICBjb25zdCBib29sT2JqZWN0ID0gbmV3IFNpZWJlbEFwcC5TX0FwcC5EYXR1bUJvb2xPYmplY3QoKTtcbiAgICAgICAgY29uc3QgeyBjaGlsZEFycmF5IH0gPSBwc091dHB1dHMuR2V0Q2hpbGRCeVR5cGUoJ1Jlc3VsdFNldCcpIHx8IHt9OyAvLyB0byBiZSBwcm90ZWN0ZWRkIHdoZW4gbm8gcmVzdWx0cz9cbiAgICAgICAgY29uc3QgcmV0ID0ge307XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRBcnJheS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIHJldFtjaGlsZEFycmF5W2ldLkdldFR5cGUoKV0gPSB7fTtcbiAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNoaWxkQXJyYXlbaV0uY2hpbGRBcnJheS5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICAgICAgY29uc3QgZWwgPSBjaGlsZEFycmF5W2ldLmNoaWxkQXJyYXlbal07XG4gICAgICAgICAgICByZXRbY2hpbGRBcnJheVtpXS5HZXRUeXBlKCldW2VsLkdldFR5cGUoKV0gPSBlbC5jaGlsZEFycmF5Lm1hcCgocmVjKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHByaW1hcnkgPSByZWMucHJvcEFycmF5WydTU0EgUHJpbWFyeSBGaWVsZCddO1xuICAgICAgICAgICAgICBib29sT2JqZWN0LlNldEFzU3RyaW5nKHByaW1hcnkpO1xuICAgICAgICAgICAgICByZWMucHJvcEFycmF5WydTU0EgUHJpbWFyeSBGaWVsZCddID0gYm9vbE9iamVjdC5HZXRWYWx1ZSgpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCByZWMucHJvcEFycmF5KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXNvbHZlKHJldCk7XG4gICAgICB9LFxuICAgIH07XG4gICAgcmV0dXJuIGJzLkludm9rZU1ldGhvZCgnUmV0dXJuTVZHRmllbGRzJywgcHNJbnB1dHMsIGFpKTtcbiAgfVxuXG4gIHNhdmVQcmVmKG5hbWUsIHZhbHVlKSB7XG4gICAgLy8gdmFsdWUgaXMgYSBzdHJpbmdcbiAgICAvLyB2YWx1ZSBpcyBib3VuZCB0byBhcHBsZXQgYW5kIHZpZXdcbiAgICBjb25zdCBwc0lucHV0ID0gU2llYmVsQXBwLlNfQXBwLk5ld1Byb3BlcnR5U2V0KCk7XG4gICAgcHNJbnB1dC5TZXRQcm9wZXJ0eSgnS2V5JywgbmFtZSk7XG4gICAgcHNJbnB1dC5TZXRQcm9wZXJ0eShuYW1lLCB2YWx1ZSk7XG4gICAgdGhpcy5wbS5PbkNvbnRyb2xFdmVudChcbiAgICAgIHRoaXMuY29uc3RzLmdldCgnUEhZRVZFTlRfSU5WT0tFX0NPTlRST0wnKSxcbiAgICAgIHRoaXMucG0uR2V0KHRoaXMuY29uc3RzLmdldCgnU1dFX01USERfVVBEQVRFX1VTRVJfUFJFRicpKSxcbiAgICAgIHBzSW5wdXQsXG4gICAgKTtcbiAgICByZXR1cm4gdGhpcy5wbS5TZXRQcm9wZXJ0eShuYW1lLCB2YWx1ZSk7XG4gIH1cblxuICByZWFkUHJlZihuYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMucG0uR2V0KG5hbWUpO1xuICB9XG5cbiAgX3JldHJpZXZlRGF0YShhbW91bnQpIHsgLy8gdGVtcCBtZXRob2Q/XG4gICAgY29uc3QgZGF0YSA9IG5ldyBNYXAoKTtcblxuICAgIHdoaWxlIChkYXRhLnNpemUgPCBhbW91bnQpIHtcbiAgICAgIGNvbnN0IHRlbXAgPSB0aGlzLmdldFJhd1JlY29yZFNldCgpO1xuXG4gICAgICAvLyBhdm9pZCB0aGUgZHVwbGljYXRlc1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZW1wLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGRhdGEuc2V0KHRlbXBbaV0uSWQsIHRlbXBbaV0pO1xuICAgICAgfVxuXG4gICAgICAvLyB3ZSBhcmUgdXNpbmcgY2FuSW52b2tlTWV0aG9kLCBhcyBpbiAxNi4wMCBuZXh0UmVjb3JkU2V0IGFsd2F5cyByZXR1cm5zIHVuZGVmaW5lZFxuICAgICAgaWYgKCF0aGlzLmNhbkludm9rZU1ldGhvZCgnR290b05leHRTZXQnKSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgdGhpcy5uZXh0UmVjb3JkU2V0KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGE6IFsuLi5kYXRhLnZhbHVlcygpXSxcbiAgICAgIGhhc05leHQ6IHRoaXMuY2FuSW52b2tlTWV0aG9kKCdHb3RvTmV4dFNldCcpLFxuICAgIH07XG4gIH1cblxuICBfc2V0RmllbGRWYWx1ZShuYW1lLCB2YWx1ZSkge1xuICAgIHRoaXMuYXBwbGV0LkdldEJ1c0NvbXAoKS5TZXRGaWVsZFZhbHVlKG5hbWUsIHZhbHVlKTtcbiAgICByZXR1cm4gdGhpcy5hcHBsZXQuSW52b2tlTWV0aG9kKCdXcml0ZVJlY29yZCcpO1xuICB9XG5cbiAgZ2V0RmllbGRUb0NvbnRyb2xNYXAoKSB7XG4gICAgdGhpcy5maWVsZFRvQ29udHJvbE1hcCA9IHsgSWQ6ICdJZCcgfTtcbiAgICBjb25zdCBhcHBsZXRDb250cm9scyA9IHRoaXMuX3JldHVybkNvbnRyb2xzKCk7XG4gICAgY29uc3QgYXJyID0gT2JqZWN0LmtleXMoYXBwbGV0Q29udHJvbHMpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBjb250cm9sID0gYXBwbGV0Q29udHJvbHNbYXJyW2ldXTtcbiAgICAgIGNvbnN0IGZpZWxkID0gY29udHJvbC5HZXRGaWVsZE5hbWUoKTtcbiAgICAgIGlmIChmaWVsZCkge1xuICAgICAgICB0aGlzLmZpZWxkVG9Db250cm9sTWFwW2ZpZWxkXSA9IGFycltpXTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZmllbGRUb0NvbnRyb2xNYXA7XG4gIH1cblxuICBnZXRDb250cm9sc1JlY29yZFNldCgpIHtcbiAgICBpZiAoIXRoaXMuZmllbGRUb0NvbnRyb2xNYXApIHtcbiAgICAgIHRoaXMuZ2V0RmllbGRUb0NvbnRyb2xNYXAoKTtcbiAgICB9XG4gICAgLy8gdXNlZCBzbGljZSB0byBhdm9pZCBtb2RpZmljYXRpb24gb2YgdGhlIHJlY29yZCBzZXRcbiAgICBjb25zdCByZXQgPSB0aGlzLmdldFJlY29yZFNldCgpLnNsaWNlKCk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJldC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgcmV0W2ldID0gT2JqZWN0LmtleXMocmV0W2ldKS5maWx0ZXIoZWwgPT4gdGhpcy5maWVsZFRvQ29udHJvbE1hcFtlbF0pLnJlZHVjZSgoYWNjLCBlbCkgPT4gKHtcbiAgICAgICAgLi4uYWNjLFxuICAgICAgICAuLi57IFt0aGlzLmZpZWxkVG9Db250cm9sTWFwW2VsXV06IHJldFtpXVtlbF0gfSxcbiAgICAgIH0pLCB7fSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJldDtcbiAgfVxufVxuIiwiaW1wb3J0IE4xOWJhc2VBcHBsZXQgZnJvbSAnLi9uMTliYXNlQXBwbGV0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTjE5cG9wdXBBcHBsZXQgZXh0ZW5kcyBOMTliYXNlQXBwbGV0IHtcbiAgY29uc3RydWN0b3Ioc2V0dGluZ3MpIHtcbiAgICBzdXBlcihzZXR0aW5ncyk7XG4gICAgY29uc29sZS5sb2coYCR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfSBzdGFydGVkLi4uYCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuXG4gICAgaWYgKHRoaXMuaXNMaXN0QXBwbGV0KSB7XG4gICAgICB0aGlzLnBtLkdldFJlbmRlcmVyKCkucmVzaXplID0gKCkgPT4gMDtcbiAgICAgIHRoaXMucG0uR2V0UmVuZGVyZXIoKS5HZXRTZWxlY3RlZFJvdyA9ICgpID0+IDA7XG4gICAgfVxuICB9XG5cbiAgcGlja1JlY29yZCgpIHtcbiAgICAvLyB0b2RvIDogY2hlY2sgQ2FuSW5va2VNZXRob2QgYW5kL29yIGlzIGl0IHBpY2tcbiAgICByZXR1cm4gdGhpcy5wbS5FeGVjdXRlTWV0aG9kKCdJbnZva2VNZXRob2QnLCAnUGlja1JlY29yZCcpO1xuICB9XG5cbiAgZGVsZXRlUmVjb3JkcyhjYikge1xuICAgIC8vIG1ldGhvZCBpcyBub3QgYWxsb3dlZCB0byBkZWxldGUgdGhlIHByaW1hcnlcbiAgICAvLyAgaW4gdGhpcyBjYXNlIGl0IHJldHVybnMgXCJNZXRob2QgRGVsZXRlUmVjb3JkcyBpcyBub3QgYWxsb3dlZCBoZXJlXCIgU0JMLVVJRi0wMDM0OFxuICAgIC8vIHRvZG86IGNoZWNrIGNhbkludm9rZU1ldGhvZCBhbmQvb3IgaXMgaXQgTVZHXG4gICAgY29uc3QgcmV0ID0gdGhpcy5wbS5FeGVjdXRlTWV0aG9kKCdJbnZva2VNZXRob2QnLCAnRGVsZXRlUmVjb3JkcycpO1xuICAgIGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNiKCk7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICBhZGRSZWNvcmRzKGNiKSB7XG4gICAgLy8gdG9kbzogY2hlY2sgY2FuSW52b2tlTWV0aG9kIGFuZC9vciBpcyBpdCBNVkcuIGFuZCBpZiB3ZSBoYXZlIGEgcmVjb3JkIGluIGFzc29jP1xuICAgIGNvbnN0IHJldCA9IHRoaXMucG0uRXhlY3V0ZU1ldGhvZCgnSW52b2tlTWV0aG9kJywgJ0FkZFJlY29yZHMnKTtcbiAgICBpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjYigpO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgLy8gdG9kbzogZG8gd2UgbmVlZCBkZWxldGVBbGxSZWNvcmRzP1xuICBhZGRBbGxSZWNvcmRzKGNiKSB7XG4gICAgLy8gdG9kbzogY2hlY2sgY2FuSW52b2tlTWV0aG9kIGFuZC9vciBpcyBpdCBNVkcuIGFuZCBpZiB3ZSBoYXZlIGEgcmVjb3JkIGluIGFzc29jP1xuICAgIGNvbnN0IHJldCA9IHRoaXMucG0uRXhlY3V0ZU1ldGhvZCgnSW52b2tlTWV0aG9kJywgJ0FkZEFsbFJlY29yZHMnKTtcbiAgICBpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjYigpO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgX2ZpcnN0UmVjb3JkKCkgeyAvLyB0ZW1wIG1ldGhvZCwgYXNzdW1lcyB0aGF0IG5vIHNjcm9sbGluZyBoYXBwZW5lZFxuICAgIGlmICh0aGlzLmlzTGlzdEFwcGxldCkge1xuICAgICAgaWYgKHRoaXMuZ2V0U2VsZWN0aW9uKCkgIT09IDApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb25PblJvdygwKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiIsImltcG9ydCBOMTlwb3B1cEFwcGxldCBmcm9tICcuL24xOXBvcHVwQXBwbGV0JztcblxuY29uc3Qgc2luZ2xldG9uID0gU3ltYm9sKCdzaW5nbGV0b24nKTtcbmNvbnN0IHNpbmdsZXRvbkVuZm9yY2VyID0gU3ltYm9sKCdzaW5nbGV0b25FbmZvcmNlcicpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOMTlwb3B1cENvbnRyb2xsZXIge1xuICBzdGF0aWMgZ2V0IGluc3RhbmNlKCkge1xuICAgIGlmICghdGhpc1tzaW5nbGV0b25dKSB7XG4gICAgICB0aGlzW3NpbmdsZXRvbl0gPSBuZXcgTjE5cG9wdXBDb250cm9sbGVyKHNpbmdsZXRvbkVuZm9yY2VyKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXNbc2luZ2xldG9uXTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGVuZm9yY2VyKSB7XG4gICAgaWYgKGVuZm9yY2VyICE9PSBzaW5nbGV0b25FbmZvcmNlcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnN0YW50aWF0aW9uIGZhaWxlZDogdXNlIFNpbmdsZXRvbi5nZXRJbnN0YW5jZSgpIGluc3RlYWQgb2YgbmV3LicpO1xuICAgIH1cbiAgICB0aGlzLmNvbnN0cyA9IFNpZWJlbEpTLkRlcGVuZGVuY3koJ1NpZWJlbEFwcC5Db25zdGFudHMnKTtcbiAgICB0aGlzLmlzUG9wdXBIaWRkZW4gPSBmYWxzZTtcbiAgICB0aGlzLnJlc29sdmVQcm9taXNlID0gbnVsbDtcbiAgICB0aGlzLnBvcHVwQXBwbGV0TjE5ID0gbnVsbDtcbiAgICB0aGlzLmFzc29jQXBwbGV0TjE5ID0gbnVsbDtcblxuICAgIGNvbnNvbGUubG9nKGAke3RoaXMuY29uc3RydWN0b3IubmFtZX0gc3RhcnRlZC4uLmApOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcblxuICAgIC8vIGl0IHdpbGwgYmUgYSBzaW5nbGV0b24sIHNvIHRoZXJlIGlzIG5vIGNsZWFudXBcbiAgICB0aGlzLk4xOXByb2Nlc3NOZXdQb3B1cCA9IFNpZWJlbEFwcC5TX0FwcC5Qcm9jZXNzTmV3UG9wdXA7XG4gICAgU2llYmVsQXBwLlNfQXBwLlByb2Nlc3NOZXdQb3B1cCA9IChwcykgPT4ge1xuICAgICAgbGV0IHJldDtcbiAgICAgIGlmICh0aGlzLmlzUG9wdXBIaWRkZW4pIHtcbiAgICAgICAgcmV0ID0gdGhpcy5wcm9jZXNzTmV3UG9wdXAocHMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0ID0gdGhpcy5OMTlwcm9jZXNzTmV3UG9wdXAuY2FsbChTaWViZWxBcHAuU19BcHAsIHBzKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXQ7XG4gICAgfTtcblxuICAgIHRoaXMuTjE5dmlld0xvYWRlZCA9IFNpZWJlbEFwcC5jb250ZW50VXBkYXRlci52aWV3TG9hZGVkO1xuICAgIFNpZWJlbEFwcC5jb250ZW50VXBkYXRlci52aWV3TG9hZGVkID0gKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IHJldCA9IHRoaXMuTjE5dmlld0xvYWRlZC5jYWxsKFNpZWJlbEFwcC5jb250ZW50VXBkYXRlciwgLi4uYXJncyk7XG4gICAgICBpZiAodHlwZW9mIHRoaXMucmVzb2x2ZVByb21pc2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gdG9kbzogdXNlIGhlcmUgdGhlIHByb3BlcnRpZXMgc2V0IG9uIHByb21pc2VSZXNvbHZpbmc/XG4gICAgICAgIGNvbnN0IHsgYXBwbGV0TmFtZSB9ID0gTjE5cG9wdXBDb250cm9sbGVyLklzUG9wdXBPcGVuKCk7XG4gICAgICAgIGlmICghYXBwbGV0TmFtZSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignT3BlbiBBcHBsZXQgTmFtZSBpcyBub3QgZm91bmQgaW4gcmVzb2x2ZVByb21pc2UnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhcHBsZXQgPSBOMTlwb3B1cENvbnRyb2xsZXIuR2V0UG9wdXBBcHBsZXQoYXBwbGV0TmFtZSk7XG4gICAgICAgIGNvbnN0IHBtID0gYXBwbGV0LkdldFBNb2RlbCgpO1xuICAgICAgICAvLyB0b2RvOiBhdm9pZCB0aGlzIGNpcmN1bGFyaXR5XG4gICAgICAgIHRoaXMucG9wdXBBcHBsZXROMTkgPSBuZXcgTjE5cG9wdXBBcHBsZXQoeyBwbSB9KTsgLy8gdG9kbyA6IHNwbGl0IE4xOUhlbHBlciBpbnRvIDIgY2xhc3Nlc1xuICAgICAgICBjb25zdCBvYmogPSB7IGFwcGxldE5hbWUsIHBvcHVwQXBwbGV0TjE5OiB0aGlzLnBvcHVwQXBwbGV0TjE5IH07XG4gICAgICAgIC8vIGNoZWNrIGlmIHdlIGhhdmUgYXNzb2NcbiAgICAgICAgLy8gd2UgYXNzdW1lIGl0IGlzIGFsd2F5cyBhc3NvYyBhcHBsZXQsIGJ1dCB3aGF0IGFib3V0IG9wZW5pbmcgcG9wdXAgb24gdGhlIHRvcCBvZiBhbm90aGVyIC0gbm90IHRlc3RlZCBpdFxuICAgICAgICBjb25zdCBhc3NvY0FwcGxldCA9IGFwcGxldC5HZXRQb3B1cEFwcGxldCgpO1xuICAgICAgICBpZiAoYXNzb2NBcHBsZXQpIHtcbiAgICAgICAgICB0aGlzLmFzc29jQXBwbGV0TjE5ID0gbmV3IE4xOXBvcHVwQXBwbGV0KHsgcG06IGFzc29jQXBwbGV0LkdldFBNb2RlbCgpIH0pO1xuICAgICAgICAgIG9iai5hc3NvY0FwcGxldE4xOSA9IHRoaXMuYXNzb2NBcHBsZXROMTk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZXNvbHZlUHJvbWlzZShvYmopO1xuICAgICAgICB0aGlzLnJlc29sdmVQcm9taXNlID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXQ7XG4gICAgfTtcbiAgfVxuXG4gIGNhbk9wZW5Qb3B1cCgpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMucmVzb2x2ZVByb21pc2UgIT09ICdmdW5jdGlvbic7XG4gIH1cblxuICBwcm9jZXNzTmV3UG9wdXAocHMpIHtcbiAgICBTaWViZWxBcHAuU19BcHAuU2V0U2hvd05ld1BhZ2UoITApO1xuICAgIGNvbnN0IHBvcHVwUE0gPSBTaWViZWxBcHAuU19BcHAuR2V0UG9wdXBQTSgpO1xuXG4gICAgcG9wdXBQTS5TZXRQcm9wZXJ0eSgnQ2FuUHJvY2Vzc0xheW91dCcsICExKTtcbiAgICBwb3B1cFBNLlNldFByb3BlcnR5KCdpc1BvcHVwUGljaycsIGZhbHNlKTtcbiAgICBwb3B1cFBNLlNldFByb3BlcnR5KCdpc1BvcHVwTVZHQXNzb2MnLCBmYWxzZSk7XG4gICAgcG9wdXBQTS5TZXRQcm9wZXJ0eSgnaXNQb3B1cE1WR1NlbGVjdGVkJywgZmFsc2UpO1xuICAgIHBvcHVwUE0uU2V0UHJvcGVydHkoJ2lzUG9wdXBBc3NvYycsIGZhbHNlKTtcbiAgICBwb3B1cFBNLlNldFByb3BlcnR5KCdjdXJyUG9wdXBzJywgW10pO1xuICAgIHBvcHVwUE0uU2V0UHJvcGVydHkoJ2lzU0lQb3B1cCcsIHBzLkdldFByb3BlcnR5KHRoaXMuY29uc3RzLmdldCgnU1dFX0lTX1NJX1BPUFVQJykpKTtcbiAgICBwb3B1cFBNLlNldFByb3BlcnR5KCdpc1ByZXZQb3B1cFZpc2libGUnLCAhMSk7XG5cbiAgICBpZiAoIXBvcHVwUE0uR2V0UmVuZGVyZXIoKSkge1xuICAgICAgcG9wdXBQTS5TZXR1cCgpO1xuICAgIH1cblxuICAgIGNvbnN0IGFjdGl2ZVZpZXcgPSBTaWViZWxBcHAuU19BcHAuR2V0QWN0aXZlVmlldygpO1xuICAgIGlmIChhY3RpdmVWaWV3KSB7XG4gICAgICBjb25zdCBhY3RpdmVBcHBsZXQgPSBhY3RpdmVWaWV3LkdldEFjdGl2ZUFwcGxldCgpO1xuICAgICAgaWYgKGFjdGl2ZUFwcGxldCkge1xuICAgICAgICBhY3RpdmVWaWV3LlNldEFjdGl2ZUFwcGxldEJlZm9yZVBvcHVwKGFjdGl2ZUFwcGxldCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcG9wdXBQTS5BZGRQcm9wZXJ0eSgnc3RhdGUnLCAndmlzaWJsZScpOyAvLyB0b2RvOiB3ZSBuZWVkIGFsc28gdG8gcmVzdG9yZSB0aGUgUE1cblxuICAgIGxldCB1cmwgPSBwcy5HZXRQcm9wZXJ0eSgnVVJMJyk7XG4gICAgdXJsID0gU2llYmVsQXBwLlNfQXBwLkdldFBhZ2VVUkwoKSArIHVybC5zcGxpdCgnc3RhcnQuc3dlJylbMV07XG4gICAgcG9wdXBQTS5TZXRQcm9wZXJ0eSgndXJsJywgdXJsKTtcblxuICAgIHJldHVybiAncmVmcmVzaHBvcHVwJztcbiAgfVxuXG4gIC8vIHN0YXRpYyBSZUluaXRQb3B1cCgpIHtcbiAgLy8gICBjb25zdCBwb3B1cFBNID0gU2llYmVsQXBwLlNfQXBwLkdldFBvcHVwUE0oKTtcbiAgLy8gICBwb3B1cFBNLkluaXQoKTtcbiAgLy8gICBwb3B1cFBNLlNldHVwKCk7XG4gIC8vIH1cblxuICAvLyB0b2RvOiBjaGFuZ2UgdGhlIGFwcHJvYWNoLCB1c2UgdGhlIGNsYXNzIGludGVybmFsIHZhcmlhYmxlc1xuICBjbG9zZVBvcHVwQXBwbGV0KGFwcGxldCkge1xuICAgIC8vIHRvZG8gOiBjaGVjayBjYW5JbnZva2VNZXRob2RcbiAgICBsZXQgcmV0O1xuICAgIGlmIChhcHBsZXQpIHtcbiAgICAgIGNvbnN0IGlzUG9wdXBBcHBsZXQgPSB0eXBlb2YgYXBwbGV0LkdldFBvcHVwQXBwbGV0TmFtZSA9PT0gJ2Z1bmN0aW9uJztcbiAgICAgIGNvbnN0IGlzUGlja0FwcGxldCA9IHR5cGVvZiBhcHBsZXQuR2V0UGlja0FwcGxldE5hbWUgPT09ICdmdW5jdGlvbic7XG4gICAgICBpZiAoIWlzUG9wdXBBcHBsZXQgJiYgIWlzUGlja0FwcGxldCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoaXMgYXBwbGV0IGlzIG5laXRoZXIgcGljayBub3IgcG9wdXAnKTtcbiAgICAgIH1cbiAgICAgIHJldCA9IGFwcGxldC5HZXRQTW9kZWwoKS5FeGVjdXRlTWV0aG9kKCdJbnZva2VNZXRob2QnLCAnQ2xvc2VBcHBsZXQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gdG9kbzogISEhID4+IGNoYW5nZSB0aGlzIGFwcHJvYWNoXG4gICAgICByZXQgPSB0aGlzLnBvcHVwQXBwbGV0TjE5LmFwcGxldC5HZXRQTW9kZWwoKS5FeGVjdXRlTWV0aG9kKCdJbnZva2VNZXRob2QnLCAnQ2xvc2VBcHBsZXQnKTtcbiAgICB9XG4gICAgLy8gaXQgY291bGQgYmUgYmV0dGVyIGlmIHdlIGRvbid0IGhhdmUgYSBTaWViZWwgQXBwbGV0IG9uIHRoZSB2aWV3XG4gICAgLy8gaW4gdGhpcyBjYXNlLCB3ZSB3b3VsZCBub3QgbmVlZCB0byByZUluaXRQb3B1cFxuICAgIC8vIGlmICh0aGlzLmlzUG9wdXBIaWRkZW4pIHtcbiAgICAvLyAgTjE5cG9wdXBDb250cm9sbGVyLlJlSW5pdFBvcHVwKCk7XG4gICAgLy8gfVxuICAgIHRoaXMucG9wdXBBcHBsZXROMTkgPSBudWxsO1xuICAgIHRoaXMuYXNzb2NBcHBsZXROMTkgPSBudWxsO1xuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICBzdGF0aWMgSXNQb3B1cE9wZW4oKSB7IC8vIHRvZG86IHdoZW4gd2Ugc2V0IHNvbWUgcHJvcGVydGllcyBvbiByZXNvbHZlLCBkbyB3ZSBuZWVkIHRoaXMgbWV0aG9kIG5vd1xuICAgIC8vIHRvZG86IGhlcmUgcmV1c2UgdGhlIHByb3BlcnRpZXMgdGhhdCBzZXQgd2hlbiB0aGUgUHJvbWlzZSByZXNvbHZlZFxuICAgIGNvbnN0IGN1cnJQb3B1cHMgPSBTaWViZWxBcHAuU19BcHAuR2V0UG9wdXBQTSgpLkdldCgnY3VyclBvcHVwcycpO1xuICAgIGlmICgwID09PSBjdXJyUG9wdXBzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHsgaXNPcGVuOiBmYWxzZSB9O1xuICAgIH1cbiAgICBpZiAoMSA9PT0gY3VyclBvcHVwcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB7IGlzT3BlbjogdHJ1ZSwgYXBwbGV0TmFtZTogY3VyclBvcHVwc1swXS5HZXROYW1lKCksIGNvbnRyb2xOYW1lOiBjdXJyUG9wdXBzWzBdLkdldFBvcHVwQ29udHJvbCgpIH07XG4gICAgfVxuICAgIGlmICgyID09PSBjdXJyUG9wdXBzLmxlbmd0aCkge1xuICAgICAgLy8gdGhpcyBpcyBhIHNodXR0bGUgb3JcbiAgICAgIC8vIG1heWJlIHdlIG9wZW5lZCBhIHBvcHVwIGFwcGxldCBvbiB0aGUgdG9wIG9mIHBpY2sgYXBwbGV0IC0gVE9ETzogLy8gdGVzdCBpdFxuICAgICAgLy8gICAgICB0ZXN0IGl0ICAtIG1heWJlIHdlIG5lZWQgdG8gY2xvc2UgdGhlIHNldmVyYWwgYXBwbGV0c1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyUG9wdXBzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY3VyclBvcHVwc1sxXS5HZXRQb3B1cEFwcGxldE5hbWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICByZXR1cm4geyBpc09wZW46IHRydWUsIGFwcGxldE5hbWU6IGN1cnJQb3B1cHNbaV0uR2V0TmFtZSgpLCBjb250cm9sTmFtZTogY3VyclBvcHVwc1tpXS5HZXRQb3B1cENvbnRyb2woKSB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ012ZyBhcHBsZXQgaXMgbm90IGZvdW5kLi4uJyk7XG4gICAgfVxuICAgIC8vIHRvZG86IHRlc3QgaWYgd2UgY2FuIGdldCB0byBoZXJlXG4gICAgLy8gICAgbWF5YmUgd2hlbiB3ZSBvcGVuIGEgbmV3IGFwcGxldCBvbiB0b3Agb2YgdGhlIHNodXR0bGUgYXBwbGV0XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzaG91bGQgbm90IGJlIGhlcmUuLi4nKTtcbiAgfVxuXG4gIC8vIHN0YXRpYyBnZXRQb3B1cEFwcGxldFBNKGFwcGxldE5hbWUpIHtcbiAgLy8gICBjb25zdCBhcHBsZXQgPSBOMTlwb3B1cENvbnRyb2xsZXIuR2V0UG9wdXBBcHBsZXQoYXBwbGV0TmFtZSk7XG4gIC8vICAgcmV0dXJuIGFwcGxldC5HZXRQTW9kZWwoKTtcbiAgLy8gfVxuXG4gIHN0YXRpYyBHZXRQb3B1cEFwcGxldChhcHBsZXROYW1lKSB7XG4gICAgY29uc3QgYXBwbGV0ID0gU2llYmVsQXBwLlNfQXBwLkdldEFjdGl2ZVZpZXcoKS5HZXRBcHBsZXRNYXAoKVthcHBsZXROYW1lXTtcbiAgICBpZiAoIWFwcGxldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgJHthcHBsZXROYW1lfSBpcyBub3QgZm91bmQgaW4gYXBwbGV0IG1hcGApO1xuICAgIH1cbiAgICByZXR1cm4gYXBwbGV0O1xuICB9XG5cbiAgc2hvd1BvcHVwQXBwbGV0KGhpZGUsIGNiLCBwbSkge1xuICAgIC8vIHRvZG86IHVzZSB0aGUgcHJvcGVydGllcyBzZXQgb24gcHJvbWlzZSByZXNvbHZpbmc/XG4gICAgY29uc3QgeyBpc09wZW4sIGFwcGxldE5hbWUgfSA9IE4xOXBvcHVwQ29udHJvbGxlci5Jc1BvcHVwT3BlbigpO1xuICAgIGlmIChpc09wZW4pIHtcbiAgICAgIC8vIHRoaXMgY29kZSB3aWxsIGNsb3NlIHRoZSBhcHBsZXQgZXZlbiBpZiB0aGlzIGFwcGxldCB3YXMgb3JpZ2luYXRlZCBieSBhbm90aGVyIGFwcGxldFxuICAgICAgY29uc29sZS5sb2coYGNsb3NpbmcgJHthcHBsZXROYW1lfSBpbiBzaG93UG9wdXBBcHBsZXQuLi5gKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgICAvLyBtYXliZSBkbyBub3QgY2xvc2UgaWYgdGhlIGFwcGxldCB0byBiZSBvcGVuZWQgaWYgdGhlIHNhbWUgYXMgYWxyZWFkeSBvcGVuZWQ/XG4gICAgICB0aGlzLmNsb3NlUG9wdXBBcHBsZXQoTjE5cG9wdXBDb250cm9sbGVyLkdldFBvcHVwQXBwbGV0KGFwcGxldE5hbWUpKTtcbiAgICAgIC8vIHRvZG86IGNoZWNrIGlmIGdvdCBpdCBzdWNjZXNzZnVsbHkgY2xvc2VkP1xuICAgIH1cbiAgICB0aGlzLmlzUG9wdXBIaWRkZW4gPSAhIWhpZGU7IC8vIHRvZG86IGRvIHdlIG5lZWQgdG8ga2VlcCB0aGUgc2hvdyB0aGUgYXBwbGV0XG5cbiAgICBwbS5FeGVjdXRlTWV0aG9kKCdJbnZva2VNZXRob2QnLCAnRWRpdFBvcHVwJywgbnVsbCwgZmFsc2UpOyAvLyBzZWVtcyB3ZSBjYW4gYWxzbyB0byBjYWxsIEVkaXRGaWVsZFxuXG4gICAgbGV0IHJldCA9IHRydWU7XG5cbiAgICBpZiAoaGlkZSkgeyAvLyB3ZSB3aWxsIHBvcHVsYXRlIHRoZSBpbnN0YW5jZXMgb25seSB3aGVuIGFwcGxldCBzaG91bGQgYmUgaGlkZGVuXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmV0dXJuLWFzc2lnblxuICAgICAgcmV0ID0gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB0aGlzLnJlc29sdmVQcm9taXNlID0gcmVzb2x2ZSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcGFyYW0tYXNzaWduXG4gICAgICBpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldCA9IHJldC50aGVuKGNiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmV0O1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9