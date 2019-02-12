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


    this.pm.AttachPMBinding('UpdateQuickPickInfo', function (inputName, arg, arr) {
      var viewName = _this.view.GetName();

      if (viewName === arr[1] && _this.appletName === arr[2]) {
        if ('false' === arr[4]) {
          // eslint-disable-next-line no-console
          console.warn("[N19]Picklist is not associated with the control - ".concat(JSON.stringify(arr)));
        }

        _this.lov[arr[3]] = arr.splice(5).filter(function (el) {
          return el !== '';
        }); // todo: do we need to indicate when an empty value is allowed?
      }
    }, {
      scope: this
    });
  }

  _createClass(N19baseApplet, [{
    key: "subscribe",
    value: function subscribe(func) {
      // eslint-disable-line class-methods-use-this
      // TODO : accept also context for function, or the called bound context to the function?
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
      var _this2 = this;

      var controls = {};

      var appletControls = this._returnControls();

      var arr = Object.keys(appletControls);

      var _loop = function _loop(i) {
        var control = appletControls[arr[i]];
        var controlUiType = control.GetUIType();

        if (_this2._isSkipControl(controlUiType)) {
          return "continue"; // eslint-disable-line no-continue
        }

        var controlName = control.GetName();
        var controlInputName = control.GetInputName();
        var obj = {
          name: controlName,
          label: control.GetDisplayName(),
          uiType: controlUiType,
          required: _this2._isRequired(controlInputName),
          boundedPick: control.IsBoundedPick() === '1',
          staticPick: control.IsStaticBounded() === '1',
          // pickApplet: control.GetPickApplet(), // confusing and not consistent - see wiki
          inputName: controlInputName,
          isPostChanges: control.IsPostChanges(),
          maxSize: control.GetMaxSize(),
          // maxChars: control.GetMaxChars(), // it is always 0
          fieldName: control.GetFieldName(),
          isLink: _this2.pm.ExecuteMethod('CanNavigate', controlName),
          readonly: !_this2.pm.ExecuteMethod('CanUpdate', controlName)
        };
        Object.defineProperty(obj, 'readOnly', {
          get: function get() {
            // eslint-disable-next-line no-console
            console.warn('[N19]The readOnly property will be removed soon; use readonly instead of it.');
            return obj.readonly;
          }
        }); // add values to be displayed in the static pick list

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
      };

      for (var i = 0; i < arr.length; i += 1) {
        var _ret = _loop(i);

        if (_ret === "continue") continue;
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


        return this.pm.ExecuteMethod('HandleRowSelect', index);
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
      var _this3 = this;

      // todo: should it be the same as WriteRecord?
      var promise = new Promise(function (resolve) {
        return _this3._newRecord(resolve);
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
      return this.pm.ExecuteMethod('InvokeMethod', 'NewRecord');
    }
  }, {
    key: "writeRecord",
    value: function writeRecord(cb, cberr) {
      var _this4 = this;

      var promise = new Promise(function (resolve, reject) {
        return _this4._writeRecord(function () {
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
        selfbusy: true,
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
    value: function deleteRecordSync() {
      return this.pm.ExecuteMethod('InvokeMethod', 'DeleteRecord');
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
      var control = this._getControl(name); // TODO: Check if control is found


      value = this._getValueForControl(control.GetUIType(), value); // eslint-disable-line no-param-reassign
      // TODO: should we use SetCellValue for list applets?

      var ret = this._setControlValueInternal(control, value);

      if (!ret) {
        console.log("Value ".concat(value, " was not set for ").concat(control.GetName())); // eslint-disable-line no-console
      }

      return ret;
    }
  }, {
    key: "_setControlValueInternal",
    value: function _setControlValueInternal(control, value) {
      this.pm.OnControlEvent(this.consts.get('PHYEVENT_CONTROL_FOCUS'), control);
      return this.pm.OnControlEvent(this.consts.get('PHYEVENT_CONTROL_BLUR'), control, value);
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
        if (!isStaticPick) {
          // eslint-disable-next-line no-console
          console.warn("[N19]The getStaticLOV called for not static control - ".concat(uiType, ". Use getDynamicLOV or pick/mvg"));
        }
      } else {
        // called getDynamicLOV
        if (isStaticPick) {
          console.warn('[N19]The getDynamicLOV called for static control.'); // eslint-disable-line no-console
        }

        if (this.consts.get('SWE_CTRL_COMBOBOX') !== uiType) {
          // the control is not "JComboBox"
          switch (uiType) {
            case this.consts.get('SWE_CTRL_PICK'): // Pick

            case this.consts.get('SWE_CTRL_MVG'):
              // MVG
              // eslint-disable-next-line no-console
              console.warn("[N19]You need to use the popups instead of getDynamicLOV - ".concat(uiType, "."));
              break;

            default:
              // eslint-disable-next-line no-console
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

      if (index > -1 && _controls.state !== 3) {
        // added _controls.state !== 3; we don't need id in query mode
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
    key: "_findControlToEnterSearchExpr",
    value: function _findControlToEnterSearchExpr() {
      var appletControls = this._returnControls();

      var arr = Object.keys(appletControls);

      for (var i = 0; i < arr.length; i += 1) {
        var control = appletControls[arr[i]];
        var controlUiType = control.GetUIType();

        if (!this._isSkipControl(controlUiType)) {
          // skipping also JCheckbox
          // todo: check do we need to skip also date?
          if (controlUiType !== this.consts.get('SWE_CTRL_CHECKBOX')) {
            return control;
          }
        }
      }

      throw new Error('cannot find a control for query');
    }
  }, {
    key: "_newQuery",
    value: function _newQuery() {
      return this.pm.ExecuteMethod('InvokeMethod', 'NewQuery');
    }
  }, {
    key: "queryBySearchExprSync",
    value: function queryBySearchExprSync(expr) {
      this._newQuery(); // ?


      var control = this._findControlToEnterSearchExpr();

      this._setControlValueInternal(control, expr);

      this.pm.ExecuteMethod('InvokeMethod', 'ExecuteQuery');
      return this.getRecordSet().length;
    }
  }, {
    key: "queryByIdSync",
    value: function queryByIdSync(rowId) {
      var expr;

      if (Array === rowId.constructor) {
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
      var _this5 = this;

      var promise = new Promise(function (resolve) {
        return _this5._queryById(rowId, resolve);
      });
      var ret = promise.then(function () {
        return _this5.getRecordSet().length;
      });
      return typeof cb === 'function' ? ret.then(cb) : ret;
    }
  }, {
    key: "_queryById",
    value: function _queryById(rowId, cb) {
      this._newQuery(); // ?


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
      var _this6 = this;

      var promise = new Promise(function (resolve) {
        return _this6._query(params, resolve);
      });
      var ret = promise.then(function () {
        return _this6.getRecordSet().length;
      });
      return typeof cb === 'function' ? ret.then(cb) : ret;
    }
  }, {
    key: "_query",
    value: function _query(params, cb) {
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

      var arr = Object.keys(params);

      var _controls = this._returnControls();

      for (var i = 0; i < arr.length; i += 1) {
        var control = _controls[arr[i]];

        if (control) {
          this._setControlValueInternal(control, this._getValueForControl(control.GetUIType(), params[arr[i]]));
        } else {
          console.error("The control \"".concat(arr[i], "\" is not found!")); // eslint-disable-line no-console
        }
      }

      return this.pm.ExecuteMethod('InvokeMethod', 'ExecuteQuery', null, ai);
    }
  }, {
    key: "getMVF",
    value: function getMVF(ids, fields, useActiveBO) {
      var _this7 = this;

      return new Promise(function (resolve, reject) {
        return _this7._getMVF(ids, fields, useActiveBO, resolve, reject);
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
      var _this8 = this;

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

                _this8.boolObject.SetAsString(primary);

                rec.propArray['SSA Primary Field'] = _this8.boolObject.GetValue(); // eslint-disable-line no-param-reassign

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
      console.warn('[N19]_setFieldValue will be removed in the future!'); // eslint-disable-line no-console

      this.applet.SetControlValueByName(name, value);
      return this.pm.ExecuteMethod('InvokeMethod', 'WriteRecord');
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
      var _this9 = this;

      if (!this.fieldToControlMap) {
        this.getFieldToControlMap();
      } // used slice to avoid modification of the record set


      var ret = this.getRecordSet().slice();

      var _loop2 = function _loop2(i) {
        ret[i] = Object.keys(ret[i]).filter(function (el) {
          return _this9.fieldToControlMap[el];
        }).reduce(function (acc, el) {
          return _objectSpread({}, acc, _defineProperty({}, _this9.fieldToControlMap[el], ret[i][el]));
        }, {});
      };

      for (var i = 0; i < ret.length; i += 1) {
        _loop2(i);
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
        if ('cp' !== propSet.GetProperty('state')) {
          receivedNotifications.push('SWE_PROP_BC_NOTI_STATE_CHANGED');
        }
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
    }; // we could use pm.AttachPostProxyExecuteBinding for 'EditField', but at this point GetRenderer returns null
    // but pm exists
    // open until we get rid of GetRenderer (Oracle review)


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
        // todo: could we use the Close method of the applet? (NZ used)
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
      var applet = SiebelApp.S_App.GetActiveView().GetApplet(appletName);

      if (!applet) {
        throw new Error("The reference to ".concat(appletName, " is not instantiated."));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYW4taW5zdGFuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NsYXNzb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY29mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NvbGxlY3Rpb24tc3Ryb25nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NvbGxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jcmVhdGUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY3R4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2RlZmluZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2VudW0ta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19leHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZmFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZml4LXJlLXdrcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19mbGFncy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19mb3Itb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2hhcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19oaWRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2h0bWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faW5oZXJpdC1pZi1yZXF1aXJlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pbnZva2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pcy1hcnJheS1pdGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2lzLWFycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pcy1yZWdleHAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlci1jYWxsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXItZGV0ZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXItc3RlcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyYXRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fbGlicmFyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19tZXRhLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX21pY3JvdGFzay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZHAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWRwcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZ29wZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZ29wbi1leHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdvcG4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdwby5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3Qta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtcGllLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1zYXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LXRvLWFycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3BlcmZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fcHJvbWlzZS1yZXNvbHZlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fcmVkZWZpbmUtYWxsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3JlZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NldC1wcm90by5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zZXQtc3BlY2llcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zaGFyZWQta2V5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NoYXJlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zcGVjaWVzLWNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3N0cmluZy1hdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190YXNrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWFic29sdXRlLWluZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8taW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1sZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL191aWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdXNlci1hZ2VudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL192YWxpZGF0ZS1jb2xsZWN0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3drcy1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fd2tzLWV4dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL193a3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuZnJvbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5mdW5jdGlvbi5uYW1lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnByb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLmZsYWdzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5zcGxpdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAudG8tc3RyaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcub2JqZWN0LmVudHJpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcuc3ltYm9sLmFzeW5jLWl0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbjE5YmFzZUFwcGxldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbjE5bm90aWZpY2F0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbjE5cG9wdXBBcHBsZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL24xOXBvcHVwQ29udHJvbGxlci5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiaXQiLCJUeXBlRXJyb3IiLCJVTlNDT1BBQkxFUyIsInJlcXVpcmUiLCJBcnJheVByb3RvIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJ1bmRlZmluZWQiLCJrZXkiLCJDb25zdHJ1Y3RvciIsIm5hbWUiLCJmb3JiaWRkZW5GaWVsZCIsImlzT2JqZWN0IiwidG9JT2JqZWN0IiwidG9MZW5ndGgiLCJ0b0Fic29sdXRlSW5kZXgiLCJJU19JTkNMVURFUyIsIiR0aGlzIiwiZWwiLCJmcm9tSW5kZXgiLCJPIiwibGVuZ3RoIiwiaW5kZXgiLCJ2YWx1ZSIsImNvZiIsIlRBRyIsIkFSRyIsImFyZ3VtZW50cyIsInRyeUdldCIsImUiLCJUIiwiQiIsIk9iamVjdCIsImNhbGxlZSIsInRvU3RyaW5nIiwiY2FsbCIsInNsaWNlIiwiZFAiLCJmIiwiY3JlYXRlIiwicmVkZWZpbmVBbGwiLCJjdHgiLCJhbkluc3RhbmNlIiwiZm9yT2YiLCIkaXRlckRlZmluZSIsInN0ZXAiLCJzZXRTcGVjaWVzIiwiREVTQ1JJUFRPUlMiLCJmYXN0S2V5IiwidmFsaWRhdGUiLCJTSVpFIiwiZ2V0RW50cnkiLCJ0aGF0IiwiZW50cnkiLCJfaSIsIl9mIiwibiIsImsiLCJnZXRDb25zdHJ1Y3RvciIsIndyYXBwZXIiLCJOQU1FIiwiSVNfTUFQIiwiQURERVIiLCJDIiwiaXRlcmFibGUiLCJfdCIsIl9sIiwiY2xlYXIiLCJkYXRhIiwiciIsInAiLCJpIiwibmV4dCIsInByZXYiLCJmb3JFYWNoIiwiY2FsbGJhY2tmbiIsInYiLCJoYXMiLCJnZXQiLCJkZWYiLCJzZXRTdHJvbmciLCJpdGVyYXRlZCIsImtpbmQiLCJfayIsImdsb2JhbCIsIiRleHBvcnQiLCJyZWRlZmluZSIsIm1ldGEiLCJmYWlscyIsIiRpdGVyRGV0ZWN0Iiwic2V0VG9TdHJpbmdUYWciLCJpbmhlcml0SWZSZXF1aXJlZCIsIm1ldGhvZHMiLCJjb21tb24iLCJJU19XRUFLIiwiQmFzZSIsInByb3RvIiwiZml4TWV0aG9kIiwiS0VZIiwiZm4iLCJhIiwiYWRkIiwic2V0IiwiYiIsImVudHJpZXMiLCJORUVEIiwiaW5zdGFuY2UiLCJIQVNOVF9DSEFJTklORyIsIlRIUk9XU19PTl9QUklNSVRJVkVTIiwiQUNDRVBUX0lURVJBQkxFUyIsIml0ZXIiLCJCVUdHWV9aRVJPIiwiJGluc3RhbmNlIiwidGFyZ2V0IiwiY29uc3RydWN0b3IiLCJHIiwiVyIsIkYiLCJjb3JlIiwidmVyc2lvbiIsIl9fZSIsIiRkZWZpbmVQcm9wZXJ0eSIsImNyZWF0ZURlc2MiLCJvYmplY3QiLCJhRnVuY3Rpb24iLCJjIiwiYXBwbHkiLCJkZWZpbmVQcm9wZXJ0eSIsImRvY3VtZW50IiwiaXMiLCJjcmVhdGVFbGVtZW50Iiwic3BsaXQiLCJnZXRLZXlzIiwiZ09QUyIsInBJRSIsInJlc3VsdCIsImdldFN5bWJvbHMiLCJzeW1ib2xzIiwiaXNFbnVtIiwicHVzaCIsImhpZGUiLCJQUk9UT1RZUEUiLCJ0eXBlIiwic291cmNlIiwiSVNfRk9SQ0VEIiwiSVNfR0xPQkFMIiwiSVNfU1RBVElDIiwiUyIsIklTX1BST1RPIiwiUCIsIklTX0JJTkQiLCJleHBQcm90byIsIm93biIsIm91dCIsImV4cCIsIkZ1bmN0aW9uIiwiVSIsIlIiLCJleGVjIiwiZGVmaW5lZCIsIndrcyIsIlNZTUJPTCIsImZucyIsInN0cmZuIiwicnhmbiIsIlN0cmluZyIsIlJlZ0V4cCIsInN0cmluZyIsImFyZyIsImFuT2JqZWN0IiwiaWdub3JlQ2FzZSIsIm11bHRpbGluZSIsInVuaWNvZGUiLCJzdGlja3kiLCJpc0FycmF5SXRlciIsImdldEl0ZXJGbiIsIkJSRUFLIiwiUkVUVVJOIiwiSVRFUkFUT1IiLCJpdGVyRm4iLCJpdGVyYXRvciIsImRvbmUiLCJ3aW5kb3ciLCJNYXRoIiwic2VsZiIsIl9fZyIsImhhc093blByb3BlcnR5IiwiZG9jdW1lbnRFbGVtZW50Iiwic2V0UHJvdG90eXBlT2YiLCJhcmdzIiwidW4iLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsIkl0ZXJhdG9ycyIsImlzQXJyYXkiLCJNQVRDSCIsImlzUmVnRXhwIiwicmV0IiwiZGVzY3JpcHRvciIsIkl0ZXJhdG9yUHJvdG90eXBlIiwiTElCUkFSWSIsIiRpdGVyQ3JlYXRlIiwiZ2V0UHJvdG90eXBlT2YiLCJCVUdHWSIsImtleXMiLCJGRl9JVEVSQVRPUiIsIktFWVMiLCJWQUxVRVMiLCJyZXR1cm5UaGlzIiwiREVGQVVMVCIsIklTX1NFVCIsIkZPUkNFRCIsImdldE1ldGhvZCIsInZhbHVlcyIsIkRFRl9WQUxVRVMiLCJWQUxVRVNfQlVHIiwiJG5hdGl2ZSIsIiRkZWZhdWx0IiwiJGVudHJpZXMiLCIkYW55TmF0aXZlIiwiU0FGRV9DTE9TSU5HIiwicml0ZXIiLCJmcm9tIiwic2tpcENsb3NpbmciLCJzYWZlIiwiYXJyIiwiTUVUQSIsInNldERlc2MiLCJpZCIsImlzRXh0ZW5zaWJsZSIsIkZSRUVaRSIsInByZXZlbnRFeHRlbnNpb25zIiwic2V0TWV0YSIsInciLCJnZXRXZWFrIiwib25GcmVlemUiLCJtYWNyb3Rhc2siLCJPYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJXZWJLaXRNdXRhdGlvbk9ic2VydmVyIiwicHJvY2VzcyIsIlByb21pc2UiLCJpc05vZGUiLCJoZWFkIiwibGFzdCIsIm5vdGlmeSIsImZsdXNoIiwicGFyZW50IiwiZG9tYWluIiwiZXhpdCIsImVudGVyIiwibmV4dFRpY2siLCJuYXZpZ2F0b3IiLCJzdGFuZGFsb25lIiwidG9nZ2xlIiwibm9kZSIsImNyZWF0ZVRleHROb2RlIiwib2JzZXJ2ZSIsImNoYXJhY3RlckRhdGEiLCJyZXNvbHZlIiwicHJvbWlzZSIsInRoZW4iLCJ0YXNrIiwiUHJvbWlzZUNhcGFiaWxpdHkiLCJyZWplY3QiLCIkJHJlc29sdmUiLCIkJHJlamVjdCIsInRvT2JqZWN0IiwiSU9iamVjdCIsIiRhc3NpZ24iLCJhc3NpZ24iLCJBIiwiU3ltYm9sIiwiSyIsImpvaW4iLCJhTGVuIiwiY29uY2F0IiwiaiIsImRQcyIsImVudW1CdWdLZXlzIiwiSUVfUFJPVE8iLCJFbXB0eSIsImNyZWF0ZURpY3QiLCJpZnJhbWUiLCJsdCIsImd0IiwiaWZyYW1lRG9jdW1lbnQiLCJzdHlsZSIsImRpc3BsYXkiLCJhcHBlbmRDaGlsZCIsInNyYyIsImNvbnRlbnRXaW5kb3ciLCJvcGVuIiwid3JpdGUiLCJjbG9zZSIsIlByb3BlcnRpZXMiLCJJRThfRE9NX0RFRklORSIsInRvUHJpbWl0aXZlIiwiQXR0cmlidXRlcyIsImRlZmluZVByb3BlcnRpZXMiLCJnT1BEIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiZ09QTiIsIndpbmRvd05hbWVzIiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsImdldFdpbmRvd05hbWVzIiwiJGtleXMiLCJoaWRkZW5LZXlzIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwiT2JqZWN0UHJvdG8iLCJhcnJheUluZGV4T2YiLCJuYW1lcyIsImlzRW50cmllcyIsIm5ld1Byb21pc2VDYXBhYmlsaXR5IiwieCIsInByb21pc2VDYXBhYmlsaXR5IiwiYml0bWFwIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiU1JDIiwiVE9fU1RSSU5HIiwiJHRvU3RyaW5nIiwiVFBMIiwiaW5zcGVjdFNvdXJjZSIsInZhbCIsImlzRnVuY3Rpb24iLCJjaGVjayIsInRlc3QiLCJidWdneSIsIl9fcHJvdG9fXyIsIlNQRUNJRVMiLCJ0YWciLCJzdGF0Iiwic2hhcmVkIiwidWlkIiwiU0hBUkVEIiwic3RvcmUiLCJtb2RlIiwiY29weXJpZ2h0IiwiRCIsInRvSW50ZWdlciIsInBvcyIsInMiLCJsIiwiY2hhckNvZGVBdCIsImNoYXJBdCIsImludm9rZSIsImh0bWwiLCJjZWwiLCJzZXRUYXNrIiwic2V0SW1tZWRpYXRlIiwiY2xlYXJUYXNrIiwiY2xlYXJJbW1lZGlhdGUiLCJNZXNzYWdlQ2hhbm5lbCIsIkRpc3BhdGNoIiwiY291bnRlciIsInF1ZXVlIiwiT05SRUFEWVNUQVRFQ0hBTkdFIiwiZGVmZXIiLCJjaGFubmVsIiwicG9ydCIsInJ1biIsImxpc3RlbmVyIiwiZXZlbnQiLCJub3ciLCJwb3J0MiIsInBvcnQxIiwib25tZXNzYWdlIiwicG9zdE1lc3NhZ2UiLCJhZGRFdmVudExpc3RlbmVyIiwiaW1wb3J0U2NyaXB0cyIsInJlbW92ZUNoaWxkIiwic2V0VGltZW91dCIsIm1heCIsIm1pbiIsImNlaWwiLCJmbG9vciIsImlzTmFOIiwidmFsdWVPZiIsInB4IiwicmFuZG9tIiwidXNlckFnZW50IiwiVFlQRSIsIndrc0V4dCIsIiRTeW1ib2wiLCJVU0VfU1lNQk9MIiwiJGV4cG9ydHMiLCJjbGFzc29mIiwiZ2V0SXRlcmF0b3JNZXRob2QiLCJjcmVhdGVQcm9wZXJ0eSIsImFycmF5TGlrZSIsIm1hcGZuIiwibWFwcGluZyIsImFkZFRvVW5zY29wYWJsZXMiLCJBcmd1bWVudHMiLCJGUHJvdG8iLCJuYW1lUkUiLCJtYXRjaCIsInN0cm9uZyIsIk1BUCIsIk1hcCIsInNwZWNpZXNDb25zdHJ1Y3RvciIsIm1pY3JvdGFzayIsIm5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlIiwicGVyZm9ybSIsInByb21pc2VSZXNvbHZlIiwiUFJPTUlTRSIsInZlcnNpb25zIiwidjgiLCIkUHJvbWlzZSIsImVtcHR5IiwiSW50ZXJuYWwiLCJuZXdHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkiLCJPd25Qcm9taXNlQ2FwYWJpbGl0eSIsIldyYXBwZXIiLCJVU0VfTkFUSVZFIiwiRmFrZVByb21pc2UiLCJQcm9taXNlUmVqZWN0aW9uRXZlbnQiLCJpbmRleE9mIiwiaXNUaGVuYWJsZSIsImlzUmVqZWN0IiwiX24iLCJjaGFpbiIsIl9jIiwiX3YiLCJvayIsIl9zIiwicmVhY3Rpb24iLCJoYW5kbGVyIiwiZmFpbCIsImV4aXRlZCIsIl9oIiwib25IYW5kbGVVbmhhbmRsZWQiLCJvblVuaGFuZGxlZCIsInVuaGFuZGxlZCIsImlzVW5oYW5kbGVkIiwiY29uc29sZSIsImVtaXQiLCJvbnVuaGFuZGxlZHJlamVjdGlvbiIsInJlYXNvbiIsImVycm9yIiwiX2EiLCJvbnJlamVjdGlvbmhhbmRsZWQiLCIkcmVqZWN0IiwiX2QiLCJfdyIsIiRyZXNvbHZlIiwiZXhlY3V0b3IiLCJlcnIiLCJvbkZ1bGZpbGxlZCIsIm9uUmVqZWN0ZWQiLCJjYXBhYmlsaXR5IiwiYWxsIiwicmVtYWluaW5nIiwiJGluZGV4IiwiYWxyZWFkeUNhbGxlZCIsInJhY2UiLCJmbGFncyIsIlNQTElUIiwiJHNwbGl0IiwiX3NwbGl0IiwiJHB1c2giLCIkU1BMSVQiLCJMRU5HVEgiLCJMQVNUX0lOREVYIiwiTlBDRyIsInNlcGFyYXRvciIsImxpbWl0Iiwib3V0cHV0IiwibGFzdExhc3RJbmRleCIsInNwbGl0TGltaXQiLCJzZXBhcmF0b3JDb3B5Iiwic2VwYXJhdG9yMiIsImxhc3RJbmRleCIsImxhc3RMZW5ndGgiLCJyZXBsYWNlIiwiJGZsYWdzIiwiZGVmaW5lIiwiJGF0IiwicG9pbnQiLCIkZmFpbHMiLCJ3a3NEZWZpbmUiLCJlbnVtS2V5cyIsIl9jcmVhdGUiLCJnT1BORXh0IiwiJEdPUEQiLCIkRFAiLCIkSlNPTiIsIkpTT04iLCJfc3RyaW5naWZ5Iiwic3RyaW5naWZ5IiwiSElEREVOIiwiVE9fUFJJTUlUSVZFIiwiU3ltYm9sUmVnaXN0cnkiLCJBbGxTeW1ib2xzIiwiT1BTeW1ib2xzIiwiUU9iamVjdCIsInNldHRlciIsImZpbmRDaGlsZCIsInNldFN5bWJvbERlc2MiLCJwcm90b0Rlc2MiLCJ3cmFwIiwic3ltIiwiaXNTeW1ib2wiLCIkZGVmaW5lUHJvcGVydGllcyIsIiRjcmVhdGUiLCIkcHJvcGVydHlJc0VudW1lcmFibGUiLCJFIiwiJGdldE93blByb3BlcnR5RGVzY3JpcHRvciIsIiRnZXRPd25Qcm9wZXJ0eU5hbWVzIiwiJGdldE93blByb3BlcnR5U3ltYm9scyIsIklTX09QIiwiJHNldCIsImVzNlN5bWJvbHMiLCJ3ZWxsS25vd25TeW1ib2xzIiwia2V5Rm9yIiwidXNlU2V0dGVyIiwidXNlU2ltcGxlIiwicmVwbGFjZXIiLCIkcmVwbGFjZXIiLCIkaXRlcmF0b3JzIiwiVE9fU1RSSU5HX1RBRyIsIkFycmF5VmFsdWVzIiwiRE9NSXRlcmFibGVzIiwiQ1NTUnVsZUxpc3QiLCJDU1NTdHlsZURlY2xhcmF0aW9uIiwiQ1NTVmFsdWVMaXN0IiwiQ2xpZW50UmVjdExpc3QiLCJET01SZWN0TGlzdCIsIkRPTVN0cmluZ0xpc3QiLCJET01Ub2tlbkxpc3QiLCJEYXRhVHJhbnNmZXJJdGVtTGlzdCIsIkZpbGVMaXN0IiwiSFRNTEFsbENvbGxlY3Rpb24iLCJIVE1MQ29sbGVjdGlvbiIsIkhUTUxGb3JtRWxlbWVudCIsIkhUTUxTZWxlY3RFbGVtZW50IiwiTWVkaWFMaXN0IiwiTWltZVR5cGVBcnJheSIsIk5hbWVkTm9kZU1hcCIsIk5vZGVMaXN0IiwiUGFpbnRSZXF1ZXN0TGlzdCIsIlBsdWdpbiIsIlBsdWdpbkFycmF5IiwiU1ZHTGVuZ3RoTGlzdCIsIlNWR051bWJlckxpc3QiLCJTVkdQYXRoU2VnTGlzdCIsIlNWR1BvaW50TGlzdCIsIlNWR1N0cmluZ0xpc3QiLCJTVkdUcmFuc2Zvcm1MaXN0IiwiU291cmNlQnVmZmVyTGlzdCIsIlN0eWxlU2hlZXRMaXN0IiwiVGV4dFRyYWNrQ3VlTGlzdCIsIlRleHRUcmFja0xpc3QiLCJUb3VjaExpc3QiLCJjb2xsZWN0aW9ucyIsImV4cGxpY2l0IiwiQ29sbGVjdGlvbiIsIlNpZWJlbEFwcEZhY2FkZSIsIk4xOUhlbHBlciIsInNldHRpbmdzIiwiYXBwbGV0TmFtZSIsImFwcGxldCIsIlNpZWJlbEFwcCIsIlNfQXBwIiwiR2V0QWN0aXZlVmlldyIsIkdldEFwcGxldCIsIkVycm9yIiwicG0iLCJHZXRQTW9kZWwiLCJsb2ciLCJuMTlwb3B1cENvbnRyb2xsZXIiLCJOMTlwb3B1cENvbnRyb2xsZXIiLCJjbG9zZVBvcHVwQXBwbGV0IiwiY2IiLCJjYW5PcGVuUG9wdXAiLCJ2aWV3IiwiU2V0QWN0aXZlQXBwbGV0SW50ZXJuYWwiLCJfc2V0QWN0aXZlQ29udHJvbCIsInNob3dQb3B1cEFwcGxldCIsIl9zaG93UG9wdXBBcHBsZXQiLCJjb250cm9sTmFtZSIsImlzTGlzdEFwcGxldCIsImdldFNlbGVjdGlvbiIsIkV4ZWN1dGVNZXRob2QiLCJ0YXJnZXRWaWV3TmFtZSIsInRhcmdldEFwcGxldE5hbWUiLCJyb3dJZCIsImdldEN1cnJlbnRSZWNvcmQiLCJJZCIsIlNXRUNtZCIsImVuY29kZVVSSSIsIkdvdG9WaWV3IiwicG9wdXBQTSIsIkdldFBvcHVwUE0iLCJJbml0IiwiU2V0dXAiLCJOMTliYXNlQXBwbGV0IiwiY29uc3RzIiwiU2llYmVsSlMiLCJEZXBlbmRlbmN5IiwiR2V0IiwicmVxdWlyZWQiLCJsb3YiLCJib29sT2JqZWN0IiwiRGF0dW1Cb29sT2JqZWN0IiwiYmNJZCIsIkdldEJDSWQiLCJub3RpZmljYXRpb25zIiwiTjE5bm90aWZpY2F0aW9ucyIsImFwcGxldElkIiwiYXBwbGV0SW5wdXRzIiwiZ2V0RWxlbWVudEJ5SWQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYXR0cmlidXRlcyIsIm5vZGVWYWx1ZSIsIkF0dGFjaFBNQmluZGluZyIsImlucHV0TmFtZSIsInZpZXdOYW1lIiwiR2V0TmFtZSIsIndhcm4iLCJzcGxpY2UiLCJmaWx0ZXIiLCJzY29wZSIsImZ1bmMiLCJzdWJzY3JpYmUiLCJ0b2tlbiIsInVuc3Vic2NyaWJlIiwiX2dldENvbnRyb2wiLCJjb250cm9sVWlUeXBlIiwiU2V0VmFsdWUiLCJHZXRBc1N0cmluZyIsIm1ldGhvZCIsImNhbkludm9rZU1ldGhvZCIsImNvbnRyb2xzIiwiYXBwbGV0Q29udHJvbHMiLCJfcmV0dXJuQ29udHJvbHMiLCJjb250cm9sIiwiR2V0VUlUeXBlIiwiX2lzU2tpcENvbnRyb2wiLCJjb250cm9sSW5wdXROYW1lIiwiR2V0SW5wdXROYW1lIiwib2JqIiwibGFiZWwiLCJHZXREaXNwbGF5TmFtZSIsInVpVHlwZSIsIl9pc1JlcXVpcmVkIiwiYm91bmRlZFBpY2siLCJJc0JvdW5kZWRQaWNrIiwic3RhdGljUGljayIsIklzU3RhdGljQm91bmRlZCIsImlzUG9zdENoYW5nZXMiLCJJc1Bvc3RDaGFuZ2VzIiwibWF4U2l6ZSIsIkdldE1heFNpemUiLCJmaWVsZE5hbWUiLCJHZXRGaWVsZE5hbWUiLCJpc0xpbmsiLCJyZWFkb25seSIsInN0YXRpY0xPViIsIkdldFN0YXRpY0xPViIsIkdldFJhZGlvR3JvdXBQcm9wU2V0IiwiY2hpbGRBcnJheSIsImxvdnMiLCJyZWR1Y2UiLCJhY2MiLCJsaWMiLCJGaWVsZFZhbHVlIiwiRGlzcGxheU5hbWUiLCJhZGRSZWNvcmRJbmRleCIsIm1hcCIsIl9pbmR4IiwiX25hdmlnYXRlIiwiZ2V0Um93TGlzdFJvd0NvdW50IiwicG9zaXRpb25PblJvdyIsIl9uZXdSZWNvcmQiLCJhc3luYyIsImNiZXJyIiwiX3dyaXRlUmVjb3JkIiwiR2V0UHJvcGVydHkiLCJjYXRjaCIsInNlbGZidXN5IiwiX2dldFZhbHVlRm9yQ29udHJvbCIsIl9zZXRDb250cm9sVmFsdWVJbnRlcm5hbCIsIk9uQ29udHJvbEV2ZW50IiwiaXNTdGF0aWMiLCJpc1N0YXRpY1BpY2siLCJfdmFsaWRhdGVQaWNrQ29udHJvbCIsInBzIiwiTmV3UHJvcGVydHlTZXQiLCJTZXRQcm9wZXJ0eSIsInNvcnQiLCJTZXRBc1N0cmluZyIsIkdldFZhbHVlIiwiX2NvbnRyb2xzIiwicmF3IiwiYmMiLCJJc0luc2VydFBlbmRpbmciLCJJc0NvbW1pdFBlbmRpbmciLCJjb250cm9sTWV0aG9kIiwiR2V0TWV0aG9kTmFtZSIsIl9tZXRob2RzIiwiZ2V0Q29udHJvbHMiLCJfZ2V0TWV0aG9kcyIsInN0YXRlIiwiY2FsY3VsYXRlQ3VycmVudFJlY29yZFN0YXRlIiwiZ2V0UmVjb3JkU2V0IiwiZ2V0UmF3UmVjb3JkU2V0IiwiX2dldENvbnRyb2xWYWx1ZSIsImV4cHIiLCJfbmV3UXVlcnkiLCJfZmluZENvbnRyb2xUb0VudGVyU2VhcmNoRXhwciIsInF1ZXJ5QnlTZWFyY2hFeHByU3luYyIsIl9xdWVyeUJ5SWQiLCJhaSIsInBhcmFtcyIsIl9xdWVyeSIsImlkcyIsImZpZWxkcyIsInVzZUFjdGl2ZUJPIiwiX2dldE1WRiIsInBzSW5wdXRzIiwiR2V0QWN0aXZlQnVzT2JqIiwiU2V0VHlwZSIsIl9nZXRGaWVsZE5hbWVGb3JDb250cm9sIiwiQWRkQ2hpbGQiLCJDbG9uZSIsImJzIiwiR2V0U2VydmljZSIsImVycmNiIiwibWV0aG9kTmFtZSIsIklucHV0cyIsInBzT3V0cHV0cyIsIkdldENoaWxkQnlUeXBlIiwiR2V0VHlwZSIsInJlYyIsInByaW1hcnkiLCJwcm9wQXJyYXkiLCJJbnZva2VNZXRob2QiLCJwc0lucHV0IiwiYW1vdW50Iiwic2l6ZSIsInRlbXAiLCJuZXh0UmVjb3JkU2V0IiwiaGFzTmV4dCIsIlNldENvbnRyb2xWYWx1ZUJ5TmFtZSIsImZpZWxkVG9Db250cm9sTWFwIiwiZmllbGQiLCJnZXRGaWVsZFRvQ29udHJvbE1hcCIsInNlcnZpY2UiLCJpblByb3BTZXQiLCJyZWNlaXZlZE5vdGlmaWNhdGlvbnMiLCJzdWJzY3JpYmVycyIsIkF0dGFjaE5vdGlmaWNhdGlvbkhhbmRsZXIiLCJwcm9wU2V0Iiwic3ViVG9rZW4iLCJOMTlwb3B1cEFwcGxldCIsIkdldFJlbmRlcmVyIiwicmVzaXplIiwiR2V0U2VsZWN0ZWRSb3ciLCJzaW5nbGV0b24iLCJzaW5nbGV0b25FbmZvcmNlciIsImVuZm9yY2VyIiwiaXNQb3B1cEhpZGRlbiIsInJlc29sdmVQcm9taXNlIiwicG9wdXBBcHBsZXROMTkiLCJhc3NvY0FwcGxldE4xOSIsIk4xOXByb2Nlc3NOZXdQb3B1cCIsIlByb2Nlc3NOZXdQb3B1cCIsInByb2Nlc3NOZXdQb3B1cCIsIk4xOXZpZXdMb2FkZWQiLCJjb250ZW50VXBkYXRlciIsInZpZXdMb2FkZWQiLCJJc1BvcHVwT3BlbiIsIkdldFBvcHVwQXBwbGV0IiwiYXNzb2NBcHBsZXQiLCJTZXRTaG93TmV3UGFnZSIsImFjdGl2ZVZpZXciLCJhY3RpdmVBcHBsZXQiLCJHZXRBY3RpdmVBcHBsZXQiLCJTZXRBY3RpdmVBcHBsZXRCZWZvcmVQb3B1cCIsIkFkZFByb3BlcnR5IiwidXJsIiwiR2V0UGFnZVVSTCIsImlzUG9wdXBBcHBsZXQiLCJHZXRQb3B1cEFwcGxldE5hbWUiLCJpc1BpY2tBcHBsZXQiLCJHZXRQaWNrQXBwbGV0TmFtZSIsImlzT3BlbiIsImN1cnJQb3B1cHMiLCJHZXRQb3B1cENvbnRyb2wiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNB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QW9CbkI7QUFDQTs7O0FBQ0EsWUFBTSxJQUFJQSxLQUFKLENBQVUsdUJBQVYsQ0FBTjtBQUNELEssQ0FFRDtBQUNBO0FBQ0E7QUFDQTs7OzttQ0FFc0JOLFUsRUFBWTtBQUNoQyxVQUFNQyxNQUFNLEdBQUdDLFNBQVMsQ0FBQ0MsS0FBVixDQUFnQkMsYUFBaEIsR0FBZ0NDLFNBQWhDLENBQTBDTCxVQUExQyxDQUFmOztBQUNBLFVBQUksQ0FBQ0MsTUFBTCxFQUFhO0FBQ1gsY0FBTSxJQUFJSyxLQUFKLDRCQUE4Qk4sVUFBOUIsMkJBQU47QUFDRDs7QUFDRCxhQUFPQyxNQUFQO0FBQ0QiLCJmaWxlIjoiTjE5SGVscGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwiLy8gMjIuMS4zLjMxIEFycmF5LnByb3RvdHlwZVtAQHVuc2NvcGFibGVzXVxudmFyIFVOU0NPUEFCTEVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3Vuc2NvcGFibGVzJyk7XG52YXIgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcbmlmIChBcnJheVByb3RvW1VOU0NPUEFCTEVTXSA9PSB1bmRlZmluZWQpIHJlcXVpcmUoJy4vX2hpZGUnKShBcnJheVByb3RvLCBVTlNDT1BBQkxFUywge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIEFycmF5UHJvdG9bVU5TQ09QQUJMRVNdW2tleV0gPSB0cnVlO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBDb25zdHJ1Y3RvciwgbmFtZSwgZm9yYmlkZGVuRmllbGQpIHtcbiAgaWYgKCEoaXQgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikgfHwgKGZvcmJpZGRlbkZpZWxkICE9PSB1bmRlZmluZWQgJiYgZm9yYmlkZGVuRmllbGQgaW4gaXQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKG5hbWUgKyAnOiBpbmNvcnJlY3QgaW52b2NhdGlvbiEnKTtcbiAgfSByZXR1cm4gaXQ7XG59O1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwiLy8gZmFsc2UgLT4gQXJyYXkjaW5kZXhPZlxuLy8gdHJ1ZSAgLT4gQXJyYXkjaW5jbHVkZXNcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciB0b0Fic29sdXRlSW5kZXggPSByZXF1aXJlKCcuL190by1hYnNvbHV0ZS1pbmRleCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoSVNfSU5DTFVERVMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgZWwsIGZyb21JbmRleCkge1xuICAgIHZhciBPID0gdG9JT2JqZWN0KCR0aGlzKTtcbiAgICB2YXIgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgIHZhciBpbmRleCA9IHRvQWJzb2x1dGVJbmRleChmcm9tSW5kZXgsIGxlbmd0aCk7XG4gICAgdmFyIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgaWYgKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKSB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIHtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICAgIGlmICh2YWx1ZSAhPSB2YWx1ZSkgcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjaW5kZXhPZiBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykgaWYgKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pIHtcbiAgICAgIGlmIChPW2luZGV4XSA9PT0gZWwpIHJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07XG4iLCIvLyBnZXR0aW5nIHRhZyBmcm9tIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xudmFyIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuLy8gRVMzIHdyb25nIGhlcmVcbnZhciBBUkcgPSBjb2YoZnVuY3Rpb24gKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID09ICdBcmd1bWVudHMnO1xuXG4vLyBmYWxsYmFjayBmb3IgSUUxMSBTY3JpcHQgQWNjZXNzIERlbmllZCBlcnJvclxudmFyIHRyeUdldCA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIE8sIFQsIEI7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mIChUID0gdHJ5R2V0KE8gPSBPYmplY3QoaXQpLCBUQUcpKSA9PSAnc3RyaW5nJyA/IFRcbiAgICAvLyBidWlsdGluVGFnIGNhc2VcbiAgICA6IEFSRyA/IGNvZihPKVxuICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcbiAgICA6IChCID0gY29mKE8pKSA9PSAnT2JqZWN0JyAmJiB0eXBlb2YgTy5jYWxsZWUgPT0gJ2Z1bmN0aW9uJyA/ICdBcmd1bWVudHMnIDogQjtcbn07XG4iLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKTtcbnZhciByZWRlZmluZUFsbCA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lLWFsbCcpO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGFuSW5zdGFuY2UgPSByZXF1aXJlKCcuL19hbi1pbnN0YW5jZScpO1xudmFyIGZvck9mID0gcmVxdWlyZSgnLi9fZm9yLW9mJyk7XG52YXIgJGl0ZXJEZWZpbmUgPSByZXF1aXJlKCcuL19pdGVyLWRlZmluZScpO1xudmFyIHN0ZXAgPSByZXF1aXJlKCcuL19pdGVyLXN0ZXAnKTtcbnZhciBzZXRTcGVjaWVzID0gcmVxdWlyZSgnLi9fc2V0LXNwZWNpZXMnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyk7XG52YXIgZmFzdEtleSA9IHJlcXVpcmUoJy4vX21ldGEnKS5mYXN0S2V5O1xudmFyIHZhbGlkYXRlID0gcmVxdWlyZSgnLi9fdmFsaWRhdGUtY29sbGVjdGlvbicpO1xudmFyIFNJWkUgPSBERVNDUklQVE9SUyA/ICdfcycgOiAnc2l6ZSc7XG5cbnZhciBnZXRFbnRyeSA9IGZ1bmN0aW9uICh0aGF0LCBrZXkpIHtcbiAgLy8gZmFzdCBjYXNlXG4gIHZhciBpbmRleCA9IGZhc3RLZXkoa2V5KTtcbiAgdmFyIGVudHJ5O1xuICBpZiAoaW5kZXggIT09ICdGJykgcmV0dXJuIHRoYXQuX2lbaW5kZXhdO1xuICAvLyBmcm96ZW4gb2JqZWN0IGNhc2VcbiAgZm9yIChlbnRyeSA9IHRoYXQuX2Y7IGVudHJ5OyBlbnRyeSA9IGVudHJ5Lm4pIHtcbiAgICBpZiAoZW50cnkuayA9PSBrZXkpIHJldHVybiBlbnRyeTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGdldENvbnN0cnVjdG9yOiBmdW5jdGlvbiAod3JhcHBlciwgTkFNRSwgSVNfTUFQLCBBRERFUikge1xuICAgIHZhciBDID0gd3JhcHBlcihmdW5jdGlvbiAodGhhdCwgaXRlcmFibGUpIHtcbiAgICAgIGFuSW5zdGFuY2UodGhhdCwgQywgTkFNRSwgJ19pJyk7XG4gICAgICB0aGF0Ll90ID0gTkFNRTsgICAgICAgICAvLyBjb2xsZWN0aW9uIHR5cGVcbiAgICAgIHRoYXQuX2kgPSBjcmVhdGUobnVsbCk7IC8vIGluZGV4XG4gICAgICB0aGF0Ll9mID0gdW5kZWZpbmVkOyAgICAvLyBmaXJzdCBlbnRyeVxuICAgICAgdGhhdC5fbCA9IHVuZGVmaW5lZDsgICAgLy8gbGFzdCBlbnRyeVxuICAgICAgdGhhdFtTSVpFXSA9IDA7ICAgICAgICAgLy8gc2l6ZVxuICAgICAgaWYgKGl0ZXJhYmxlICE9IHVuZGVmaW5lZCkgZm9yT2YoaXRlcmFibGUsIElTX01BUCwgdGhhdFtBRERFUl0sIHRoYXQpO1xuICAgIH0pO1xuICAgIHJlZGVmaW5lQWxsKEMucHJvdG90eXBlLCB7XG4gICAgICAvLyAyMy4xLjMuMSBNYXAucHJvdG90eXBlLmNsZWFyKClcbiAgICAgIC8vIDIzLjIuMy4yIFNldC5wcm90b3R5cGUuY2xlYXIoKVxuICAgICAgY2xlYXI6IGZ1bmN0aW9uIGNsZWFyKCkge1xuICAgICAgICBmb3IgKHZhciB0aGF0ID0gdmFsaWRhdGUodGhpcywgTkFNRSksIGRhdGEgPSB0aGF0Ll9pLCBlbnRyeSA9IHRoYXQuX2Y7IGVudHJ5OyBlbnRyeSA9IGVudHJ5Lm4pIHtcbiAgICAgICAgICBlbnRyeS5yID0gdHJ1ZTtcbiAgICAgICAgICBpZiAoZW50cnkucCkgZW50cnkucCA9IGVudHJ5LnAubiA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBkZWxldGUgZGF0YVtlbnRyeS5pXTtcbiAgICAgICAgfVxuICAgICAgICB0aGF0Ll9mID0gdGhhdC5fbCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhhdFtTSVpFXSA9IDA7XG4gICAgICB9LFxuICAgICAgLy8gMjMuMS4zLjMgTWFwLnByb3RvdHlwZS5kZWxldGUoa2V5KVxuICAgICAgLy8gMjMuMi4zLjQgU2V0LnByb3RvdHlwZS5kZWxldGUodmFsdWUpXG4gICAgICAnZGVsZXRlJzogZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB2YXIgdGhhdCA9IHZhbGlkYXRlKHRoaXMsIE5BTUUpO1xuICAgICAgICB2YXIgZW50cnkgPSBnZXRFbnRyeSh0aGF0LCBrZXkpO1xuICAgICAgICBpZiAoZW50cnkpIHtcbiAgICAgICAgICB2YXIgbmV4dCA9IGVudHJ5Lm47XG4gICAgICAgICAgdmFyIHByZXYgPSBlbnRyeS5wO1xuICAgICAgICAgIGRlbGV0ZSB0aGF0Ll9pW2VudHJ5LmldO1xuICAgICAgICAgIGVudHJ5LnIgPSB0cnVlO1xuICAgICAgICAgIGlmIChwcmV2KSBwcmV2Lm4gPSBuZXh0O1xuICAgICAgICAgIGlmIChuZXh0KSBuZXh0LnAgPSBwcmV2O1xuICAgICAgICAgIGlmICh0aGF0Ll9mID09IGVudHJ5KSB0aGF0Ll9mID0gbmV4dDtcbiAgICAgICAgICBpZiAodGhhdC5fbCA9PSBlbnRyeSkgdGhhdC5fbCA9IHByZXY7XG4gICAgICAgICAgdGhhdFtTSVpFXS0tO1xuICAgICAgICB9IHJldHVybiAhIWVudHJ5O1xuICAgICAgfSxcbiAgICAgIC8vIDIzLjIuMy42IFNldC5wcm90b3R5cGUuZm9yRWFjaChjYWxsYmFja2ZuLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxuICAgICAgLy8gMjMuMS4zLjUgTWFwLnByb3RvdHlwZS5mb3JFYWNoKGNhbGxiYWNrZm4sIHRoaXNBcmcgPSB1bmRlZmluZWQpXG4gICAgICBmb3JFYWNoOiBmdW5jdGlvbiBmb3JFYWNoKGNhbGxiYWNrZm4gLyogLCB0aGF0ID0gdW5kZWZpbmVkICovKSB7XG4gICAgICAgIHZhbGlkYXRlKHRoaXMsIE5BTUUpO1xuICAgICAgICB2YXIgZiA9IGN0eChjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCwgMyk7XG4gICAgICAgIHZhciBlbnRyeTtcbiAgICAgICAgd2hpbGUgKGVudHJ5ID0gZW50cnkgPyBlbnRyeS5uIDogdGhpcy5fZikge1xuICAgICAgICAgIGYoZW50cnkudiwgZW50cnkuaywgdGhpcyk7XG4gICAgICAgICAgLy8gcmV2ZXJ0IHRvIHRoZSBsYXN0IGV4aXN0aW5nIGVudHJ5XG4gICAgICAgICAgd2hpbGUgKGVudHJ5ICYmIGVudHJ5LnIpIGVudHJ5ID0gZW50cnkucDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8vIDIzLjEuMy43IE1hcC5wcm90b3R5cGUuaGFzKGtleSlcbiAgICAgIC8vIDIzLjIuMy43IFNldC5wcm90b3R5cGUuaGFzKHZhbHVlKVxuICAgICAgaGFzOiBmdW5jdGlvbiBoYXMoa2V5KSB7XG4gICAgICAgIHJldHVybiAhIWdldEVudHJ5KHZhbGlkYXRlKHRoaXMsIE5BTUUpLCBrZXkpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChERVNDUklQVE9SUykgZFAoQy5wcm90b3R5cGUsICdzaXplJywge1xuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB2YWxpZGF0ZSh0aGlzLCBOQU1FKVtTSVpFXTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gQztcbiAgfSxcbiAgZGVmOiBmdW5jdGlvbiAodGhhdCwga2V5LCB2YWx1ZSkge1xuICAgIHZhciBlbnRyeSA9IGdldEVudHJ5KHRoYXQsIGtleSk7XG4gICAgdmFyIHByZXYsIGluZGV4O1xuICAgIC8vIGNoYW5nZSBleGlzdGluZyBlbnRyeVxuICAgIGlmIChlbnRyeSkge1xuICAgICAgZW50cnkudiA9IHZhbHVlO1xuICAgIC8vIGNyZWF0ZSBuZXcgZW50cnlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhhdC5fbCA9IGVudHJ5ID0ge1xuICAgICAgICBpOiBpbmRleCA9IGZhc3RLZXkoa2V5LCB0cnVlKSwgLy8gPC0gaW5kZXhcbiAgICAgICAgazoga2V5LCAgICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIGtleVxuICAgICAgICB2OiB2YWx1ZSwgICAgICAgICAgICAgICAgICAgICAgLy8gPC0gdmFsdWVcbiAgICAgICAgcDogcHJldiA9IHRoYXQuX2wsICAgICAgICAgICAgIC8vIDwtIHByZXZpb3VzIGVudHJ5XG4gICAgICAgIG46IHVuZGVmaW5lZCwgICAgICAgICAgICAgICAgICAvLyA8LSBuZXh0IGVudHJ5XG4gICAgICAgIHI6IGZhbHNlICAgICAgICAgICAgICAgICAgICAgICAvLyA8LSByZW1vdmVkXG4gICAgICB9O1xuICAgICAgaWYgKCF0aGF0Ll9mKSB0aGF0Ll9mID0gZW50cnk7XG4gICAgICBpZiAocHJldikgcHJldi5uID0gZW50cnk7XG4gICAgICB0aGF0W1NJWkVdKys7XG4gICAgICAvLyBhZGQgdG8gaW5kZXhcbiAgICAgIGlmIChpbmRleCAhPT0gJ0YnKSB0aGF0Ll9pW2luZGV4XSA9IGVudHJ5O1xuICAgIH0gcmV0dXJuIHRoYXQ7XG4gIH0sXG4gIGdldEVudHJ5OiBnZXRFbnRyeSxcbiAgc2V0U3Ryb25nOiBmdW5jdGlvbiAoQywgTkFNRSwgSVNfTUFQKSB7XG4gICAgLy8gYWRkIC5rZXlzLCAudmFsdWVzLCAuZW50cmllcywgW0BAaXRlcmF0b3JdXG4gICAgLy8gMjMuMS4zLjQsIDIzLjEuMy44LCAyMy4xLjMuMTEsIDIzLjEuMy4xMiwgMjMuMi4zLjUsIDIzLjIuMy44LCAyMy4yLjMuMTAsIDIzLjIuMy4xMVxuICAgICRpdGVyRGVmaW5lKEMsIE5BTUUsIGZ1bmN0aW9uIChpdGVyYXRlZCwga2luZCkge1xuICAgICAgdGhpcy5fdCA9IHZhbGlkYXRlKGl0ZXJhdGVkLCBOQU1FKTsgLy8gdGFyZ2V0XG4gICAgICB0aGlzLl9rID0ga2luZDsgICAgICAgICAgICAgICAgICAgICAvLyBraW5kXG4gICAgICB0aGlzLl9sID0gdW5kZWZpbmVkOyAgICAgICAgICAgICAgICAvLyBwcmV2aW91c1xuICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAgIHZhciBraW5kID0gdGhhdC5faztcbiAgICAgIHZhciBlbnRyeSA9IHRoYXQuX2w7XG4gICAgICAvLyByZXZlcnQgdG8gdGhlIGxhc3QgZXhpc3RpbmcgZW50cnlcbiAgICAgIHdoaWxlIChlbnRyeSAmJiBlbnRyeS5yKSBlbnRyeSA9IGVudHJ5LnA7XG4gICAgICAvLyBnZXQgbmV4dCBlbnRyeVxuICAgICAgaWYgKCF0aGF0Ll90IHx8ICEodGhhdC5fbCA9IGVudHJ5ID0gZW50cnkgPyBlbnRyeS5uIDogdGhhdC5fdC5fZikpIHtcbiAgICAgICAgLy8gb3IgZmluaXNoIHRoZSBpdGVyYXRpb25cbiAgICAgICAgdGhhdC5fdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgcmV0dXJuIHN0ZXAoMSk7XG4gICAgICB9XG4gICAgICAvLyByZXR1cm4gc3RlcCBieSBraW5kXG4gICAgICBpZiAoa2luZCA9PSAna2V5cycpIHJldHVybiBzdGVwKDAsIGVudHJ5LmspO1xuICAgICAgaWYgKGtpbmQgPT0gJ3ZhbHVlcycpIHJldHVybiBzdGVwKDAsIGVudHJ5LnYpO1xuICAgICAgcmV0dXJuIHN0ZXAoMCwgW2VudHJ5LmssIGVudHJ5LnZdKTtcbiAgICB9LCBJU19NQVAgPyAnZW50cmllcycgOiAndmFsdWVzJywgIUlTX01BUCwgdHJ1ZSk7XG5cbiAgICAvLyBhZGQgW0BAc3BlY2llc10sIDIzLjEuMi4yLCAyMy4yLjIuMlxuICAgIHNldFNwZWNpZXMoTkFNRSk7XG4gIH1cbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciByZWRlZmluZUFsbCA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lLWFsbCcpO1xudmFyIG1ldGEgPSByZXF1aXJlKCcuL19tZXRhJyk7XG52YXIgZm9yT2YgPSByZXF1aXJlKCcuL19mb3Itb2YnKTtcbnZhciBhbkluc3RhbmNlID0gcmVxdWlyZSgnLi9fYW4taW5zdGFuY2UnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbnZhciAkaXRlckRldGVjdCA9IHJlcXVpcmUoJy4vX2l0ZXItZGV0ZWN0Jyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIGluaGVyaXRJZlJlcXVpcmVkID0gcmVxdWlyZSgnLi9faW5oZXJpdC1pZi1yZXF1aXJlZCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChOQU1FLCB3cmFwcGVyLCBtZXRob2RzLCBjb21tb24sIElTX01BUCwgSVNfV0VBSykge1xuICB2YXIgQmFzZSA9IGdsb2JhbFtOQU1FXTtcbiAgdmFyIEMgPSBCYXNlO1xuICB2YXIgQURERVIgPSBJU19NQVAgPyAnc2V0JyA6ICdhZGQnO1xuICB2YXIgcHJvdG8gPSBDICYmIEMucHJvdG90eXBlO1xuICB2YXIgTyA9IHt9O1xuICB2YXIgZml4TWV0aG9kID0gZnVuY3Rpb24gKEtFWSkge1xuICAgIHZhciBmbiA9IHByb3RvW0tFWV07XG4gICAgcmVkZWZpbmUocHJvdG8sIEtFWSxcbiAgICAgIEtFWSA9PSAnZGVsZXRlJyA/IGZ1bmN0aW9uIChhKSB7XG4gICAgICAgIHJldHVybiBJU19XRUFLICYmICFpc09iamVjdChhKSA/IGZhbHNlIDogZm4uY2FsbCh0aGlzLCBhID09PSAwID8gMCA6IGEpO1xuICAgICAgfSA6IEtFWSA9PSAnaGFzJyA/IGZ1bmN0aW9uIGhhcyhhKSB7XG4gICAgICAgIHJldHVybiBJU19XRUFLICYmICFpc09iamVjdChhKSA/IGZhbHNlIDogZm4uY2FsbCh0aGlzLCBhID09PSAwID8gMCA6IGEpO1xuICAgICAgfSA6IEtFWSA9PSAnZ2V0JyA/IGZ1bmN0aW9uIGdldChhKSB7XG4gICAgICAgIHJldHVybiBJU19XRUFLICYmICFpc09iamVjdChhKSA/IHVuZGVmaW5lZCA6IGZuLmNhbGwodGhpcywgYSA9PT0gMCA/IDAgOiBhKTtcbiAgICAgIH0gOiBLRVkgPT0gJ2FkZCcgPyBmdW5jdGlvbiBhZGQoYSkgeyBmbi5jYWxsKHRoaXMsIGEgPT09IDAgPyAwIDogYSk7IHJldHVybiB0aGlzOyB9XG4gICAgICAgIDogZnVuY3Rpb24gc2V0KGEsIGIpIHsgZm4uY2FsbCh0aGlzLCBhID09PSAwID8gMCA6IGEsIGIpOyByZXR1cm4gdGhpczsgfVxuICAgICk7XG4gIH07XG4gIGlmICh0eXBlb2YgQyAhPSAnZnVuY3Rpb24nIHx8ICEoSVNfV0VBSyB8fCBwcm90by5mb3JFYWNoICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgbmV3IEMoKS5lbnRyaWVzKCkubmV4dCgpO1xuICB9KSkpIHtcbiAgICAvLyBjcmVhdGUgY29sbGVjdGlvbiBjb25zdHJ1Y3RvclxuICAgIEMgPSBjb21tb24uZ2V0Q29uc3RydWN0b3Iod3JhcHBlciwgTkFNRSwgSVNfTUFQLCBBRERFUik7XG4gICAgcmVkZWZpbmVBbGwoQy5wcm90b3R5cGUsIG1ldGhvZHMpO1xuICAgIG1ldGEuTkVFRCA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGluc3RhbmNlID0gbmV3IEMoKTtcbiAgICAvLyBlYXJseSBpbXBsZW1lbnRhdGlvbnMgbm90IHN1cHBvcnRzIGNoYWluaW5nXG4gICAgdmFyIEhBU05UX0NIQUlOSU5HID0gaW5zdGFuY2VbQURERVJdKElTX1dFQUsgPyB7fSA6IC0wLCAxKSAhPSBpbnN0YW5jZTtcbiAgICAvLyBWOCB+ICBDaHJvbWl1bSA0MC0gd2Vhay1jb2xsZWN0aW9ucyB0aHJvd3Mgb24gcHJpbWl0aXZlcywgYnV0IHNob3VsZCByZXR1cm4gZmFsc2VcbiAgICB2YXIgVEhST1dTX09OX1BSSU1JVElWRVMgPSBmYWlscyhmdW5jdGlvbiAoKSB7IGluc3RhbmNlLmhhcygxKTsgfSk7XG4gICAgLy8gbW9zdCBlYXJseSBpbXBsZW1lbnRhdGlvbnMgZG9lc24ndCBzdXBwb3J0cyBpdGVyYWJsZXMsIG1vc3QgbW9kZXJuIC0gbm90IGNsb3NlIGl0IGNvcnJlY3RseVxuICAgIHZhciBBQ0NFUFRfSVRFUkFCTEVTID0gJGl0ZXJEZXRlY3QoZnVuY3Rpb24gKGl0ZXIpIHsgbmV3IEMoaXRlcik7IH0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuICAgIC8vIGZvciBlYXJseSBpbXBsZW1lbnRhdGlvbnMgLTAgYW5kICswIG5vdCB0aGUgc2FtZVxuICAgIHZhciBCVUdHWV9aRVJPID0gIUlTX1dFQUsgJiYgZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgICAgLy8gVjggfiBDaHJvbWl1bSA0Mi0gZmFpbHMgb25seSB3aXRoIDUrIGVsZW1lbnRzXG4gICAgICB2YXIgJGluc3RhbmNlID0gbmV3IEMoKTtcbiAgICAgIHZhciBpbmRleCA9IDU7XG4gICAgICB3aGlsZSAoaW5kZXgtLSkgJGluc3RhbmNlW0FEREVSXShpbmRleCwgaW5kZXgpO1xuICAgICAgcmV0dXJuICEkaW5zdGFuY2UuaGFzKC0wKTtcbiAgICB9KTtcbiAgICBpZiAoIUFDQ0VQVF9JVEVSQUJMRVMpIHtcbiAgICAgIEMgPSB3cmFwcGVyKGZ1bmN0aW9uICh0YXJnZXQsIGl0ZXJhYmxlKSB7XG4gICAgICAgIGFuSW5zdGFuY2UodGFyZ2V0LCBDLCBOQU1FKTtcbiAgICAgICAgdmFyIHRoYXQgPSBpbmhlcml0SWZSZXF1aXJlZChuZXcgQmFzZSgpLCB0YXJnZXQsIEMpO1xuICAgICAgICBpZiAoaXRlcmFibGUgIT0gdW5kZWZpbmVkKSBmb3JPZihpdGVyYWJsZSwgSVNfTUFQLCB0aGF0W0FEREVSXSwgdGhhdCk7XG4gICAgICAgIHJldHVybiB0aGF0O1xuICAgICAgfSk7XG4gICAgICBDLnByb3RvdHlwZSA9IHByb3RvO1xuICAgICAgcHJvdG8uY29uc3RydWN0b3IgPSBDO1xuICAgIH1cbiAgICBpZiAoVEhST1dTX09OX1BSSU1JVElWRVMgfHwgQlVHR1lfWkVSTykge1xuICAgICAgZml4TWV0aG9kKCdkZWxldGUnKTtcbiAgICAgIGZpeE1ldGhvZCgnaGFzJyk7XG4gICAgICBJU19NQVAgJiYgZml4TWV0aG9kKCdnZXQnKTtcbiAgICB9XG4gICAgaWYgKEJVR0dZX1pFUk8gfHwgSEFTTlRfQ0hBSU5JTkcpIGZpeE1ldGhvZChBRERFUik7XG4gICAgLy8gd2VhayBjb2xsZWN0aW9ucyBzaG91bGQgbm90IGNvbnRhaW5zIC5jbGVhciBtZXRob2RcbiAgICBpZiAoSVNfV0VBSyAmJiBwcm90by5jbGVhcikgZGVsZXRlIHByb3RvLmNsZWFyO1xuICB9XG5cbiAgc2V0VG9TdHJpbmdUYWcoQywgTkFNRSk7XG5cbiAgT1tOQU1FXSA9IEM7XG4gICRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogKEMgIT0gQmFzZSksIE8pO1xuXG4gIGlmICghSVNfV0VBSykgY29tbW9uLnNldFN0cm9uZyhDLCBOQU1FLCBJU19NQVApO1xuXG4gIHJldHVybiBDO1xufTtcbiIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7IHZlcnNpb246ICcyLjUuNycgfTtcbmlmICh0eXBlb2YgX19lID09ICdudW1iZXInKSBfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4iLCIndXNlIHN0cmljdCc7XG52YXIgJGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBpbmRleCwgdmFsdWUpIHtcbiAgaWYgKGluZGV4IGluIG9iamVjdCkgJGRlZmluZVByb3BlcnR5LmYob2JqZWN0LCBpbmRleCwgY3JlYXRlRGVzYygwLCB2YWx1ZSkpO1xuICBlbHNlIG9iamVjdFtpbmRleF0gPSB2YWx1ZTtcbn07XG4iLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbiwgdGhhdCwgbGVuZ3RoKSB7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmICh0aGF0ID09PSB1bmRlZmluZWQpIHJldHVybiBmbjtcbiAgc3dpdGNoIChsZW5ndGgpIHtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbiAoYSkge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24gKC8qIC4uLmFyZ3MgKi8pIHtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG4iLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ID09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50O1xuLy8gdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCcgaW4gb2xkIElFXG52YXIgaXMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcbiIsIi8vIElFIDgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gKFxuICAnY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mJ1xuKS5zcGxpdCgnLCcpO1xuIiwiLy8gYWxsIGVudW1lcmFibGUgb2JqZWN0IGtleXMsIGluY2x1ZGVzIHN5bWJvbHNcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciBnT1BTID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKTtcbnZhciBwSUUgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgcmVzdWx0ID0gZ2V0S2V5cyhpdCk7XG4gIHZhciBnZXRTeW1ib2xzID0gZ09QUy5mO1xuICBpZiAoZ2V0U3ltYm9scykge1xuICAgIHZhciBzeW1ib2xzID0gZ2V0U3ltYm9scyhpdCk7XG4gICAgdmFyIGlzRW51bSA9IHBJRS5mO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIga2V5O1xuICAgIHdoaWxlIChzeW1ib2xzLmxlbmd0aCA+IGkpIGlmIChpc0VudW0uY2FsbChpdCwga2V5ID0gc3ltYm9sc1tpKytdKSkgcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG52YXIgJGV4cG9ydCA9IGZ1bmN0aW9uICh0eXBlLCBuYW1lLCBzb3VyY2UpIHtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkY7XG4gIHZhciBJU19HTE9CQUwgPSB0eXBlICYgJGV4cG9ydC5HO1xuICB2YXIgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuUztcbiAgdmFyIElTX1BST1RPID0gdHlwZSAmICRleHBvcnQuUDtcbiAgdmFyIElTX0JJTkQgPSB0eXBlICYgJGV4cG9ydC5CO1xuICB2YXIgdGFyZ2V0ID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIHx8IChnbG9iYWxbbmFtZV0gPSB7fSkgOiAoZ2xvYmFsW25hbWVdIHx8IHt9KVtQUk9UT1RZUEVdO1xuICB2YXIgZXhwb3J0cyA9IElTX0dMT0JBTCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pO1xuICB2YXIgZXhwUHJvdG8gPSBleHBvcnRzW1BST1RPVFlQRV0gfHwgKGV4cG9ydHNbUFJPVE9UWVBFXSA9IHt9KTtcbiAgdmFyIGtleSwgb3duLCBvdXQsIGV4cDtcbiAgaWYgKElTX0dMT0JBTCkgc291cmNlID0gbmFtZTtcbiAgZm9yIChrZXkgaW4gc291cmNlKSB7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYgdGFyZ2V0W2tleV0gIT09IHVuZGVmaW5lZDtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IChvd24gPyB0YXJnZXQgOiBzb3VyY2UpW2tleV07XG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICBleHAgPSBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHRlbmQgZ2xvYmFsXG4gICAgaWYgKHRhcmdldCkgcmVkZWZpbmUodGFyZ2V0LCBrZXksIG91dCwgdHlwZSAmICRleHBvcnQuVSk7XG4gICAgLy8gZXhwb3J0XG4gICAgaWYgKGV4cG9ydHNba2V5XSAhPSBvdXQpIGhpZGUoZXhwb3J0cywga2V5LCBleHApO1xuICAgIGlmIChJU19QUk9UTyAmJiBleHBQcm90b1trZXldICE9IG91dCkgZXhwUHJvdG9ba2V5XSA9IG91dDtcbiAgfVxufTtcbmdsb2JhbC5jb3JlID0gY29yZTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuJGV4cG9ydC5VID0gNjQ7ICAvLyBzYWZlXG4kZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbnZhciB3a3MgPSByZXF1aXJlKCcuL193a3MnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoS0VZLCBsZW5ndGgsIGV4ZWMpIHtcbiAgdmFyIFNZTUJPTCA9IHdrcyhLRVkpO1xuICB2YXIgZm5zID0gZXhlYyhkZWZpbmVkLCBTWU1CT0wsICcnW0tFWV0pO1xuICB2YXIgc3RyZm4gPSBmbnNbMF07XG4gIHZhciByeGZuID0gZm5zWzFdO1xuICBpZiAoZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIHZhciBPID0ge307XG4gICAgT1tTWU1CT0xdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfTtcbiAgICByZXR1cm4gJydbS0VZXShPKSAhPSA3O1xuICB9KSkge1xuICAgIHJlZGVmaW5lKFN0cmluZy5wcm90b3R5cGUsIEtFWSwgc3RyZm4pO1xuICAgIGhpZGUoUmVnRXhwLnByb3RvdHlwZSwgU1lNQk9MLCBsZW5ndGggPT0gMlxuICAgICAgLy8gMjEuMi41LjggUmVnRXhwLnByb3RvdHlwZVtAQHJlcGxhY2VdKHN0cmluZywgcmVwbGFjZVZhbHVlKVxuICAgICAgLy8gMjEuMi41LjExIFJlZ0V4cC5wcm90b3R5cGVbQEBzcGxpdF0oc3RyaW5nLCBsaW1pdClcbiAgICAgID8gZnVuY3Rpb24gKHN0cmluZywgYXJnKSB7IHJldHVybiByeGZuLmNhbGwoc3RyaW5nLCB0aGlzLCBhcmcpOyB9XG4gICAgICAvLyAyMS4yLjUuNiBSZWdFeHAucHJvdG90eXBlW0BAbWF0Y2hdKHN0cmluZylcbiAgICAgIC8vIDIxLjIuNS45IFJlZ0V4cC5wcm90b3R5cGVbQEBzZWFyY2hdKHN0cmluZylcbiAgICAgIDogZnVuY3Rpb24gKHN0cmluZykgeyByZXR1cm4gcnhmbi5jYWxsKHN0cmluZywgdGhpcyk7IH1cbiAgICApO1xuICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMjEuMi41LjMgZ2V0IFJlZ0V4cC5wcm90b3R5cGUuZmxhZ3NcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciB0aGF0ID0gYW5PYmplY3QodGhpcyk7XG4gIHZhciByZXN1bHQgPSAnJztcbiAgaWYgKHRoYXQuZ2xvYmFsKSByZXN1bHQgKz0gJ2cnO1xuICBpZiAodGhhdC5pZ25vcmVDYXNlKSByZXN1bHQgKz0gJ2knO1xuICBpZiAodGhhdC5tdWx0aWxpbmUpIHJlc3VsdCArPSAnbSc7XG4gIGlmICh0aGF0LnVuaWNvZGUpIHJlc3VsdCArPSAndSc7XG4gIGlmICh0aGF0LnN0aWNreSkgcmVzdWx0ICs9ICd5JztcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCJ2YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4vX2l0ZXItY2FsbCcpO1xudmFyIGlzQXJyYXlJdGVyID0gcmVxdWlyZSgnLi9faXMtYXJyYXktaXRlcicpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciBnZXRJdGVyRm4gPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xudmFyIEJSRUFLID0ge307XG52YXIgUkVUVVJOID0ge307XG52YXIgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXJhYmxlLCBlbnRyaWVzLCBmbiwgdGhhdCwgSVRFUkFUT1IpIHtcbiAgdmFyIGl0ZXJGbiA9IElURVJBVE9SID8gZnVuY3Rpb24gKCkgeyByZXR1cm4gaXRlcmFibGU7IH0gOiBnZXRJdGVyRm4oaXRlcmFibGUpO1xuICB2YXIgZiA9IGN0eChmbiwgdGhhdCwgZW50cmllcyA/IDIgOiAxKTtcbiAgdmFyIGluZGV4ID0gMDtcbiAgdmFyIGxlbmd0aCwgc3RlcCwgaXRlcmF0b3IsIHJlc3VsdDtcbiAgaWYgKHR5cGVvZiBpdGVyRm4gIT0gJ2Z1bmN0aW9uJykgdGhyb3cgVHlwZUVycm9yKGl0ZXJhYmxlICsgJyBpcyBub3QgaXRlcmFibGUhJyk7XG4gIC8vIGZhc3QgY2FzZSBmb3IgYXJyYXlzIHdpdGggZGVmYXVsdCBpdGVyYXRvclxuICBpZiAoaXNBcnJheUl0ZXIoaXRlckZuKSkgZm9yIChsZW5ndGggPSB0b0xlbmd0aChpdGVyYWJsZS5sZW5ndGgpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuICAgIHJlc3VsdCA9IGVudHJpZXMgPyBmKGFuT2JqZWN0KHN0ZXAgPSBpdGVyYWJsZVtpbmRleF0pWzBdLCBzdGVwWzFdKSA6IGYoaXRlcmFibGVbaW5kZXhdKTtcbiAgICBpZiAocmVzdWx0ID09PSBCUkVBSyB8fCByZXN1bHQgPT09IFJFVFVSTikgcmV0dXJuIHJlc3VsdDtcbiAgfSBlbHNlIGZvciAoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChpdGVyYWJsZSk7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTspIHtcbiAgICByZXN1bHQgPSBjYWxsKGl0ZXJhdG9yLCBmLCBzdGVwLnZhbHVlLCBlbnRyaWVzKTtcbiAgICBpZiAocmVzdWx0ID09PSBCUkVBSyB8fCByZXN1bHQgPT09IFJFVFVSTikgcmV0dXJuIHJlc3VsdDtcbiAgfVxufTtcbmV4cG9ydHMuQlJFQUsgPSBCUkVBSztcbmV4cG9ydHMuUkVUVVJOID0gUkVUVVJOO1xuIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYgKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpIF9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuIiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xufTtcbiIsInZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHJldHVybiBkUC5mKG9iamVjdCwga2V5LCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcbiIsInZhciBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50O1xubW9kdWxlLmV4cG9ydHMgPSBkb2N1bWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4iLCJtb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2RpdicpLCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19zZXQtcHJvdG8nKS5zZXQ7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0aGF0LCB0YXJnZXQsIEMpIHtcbiAgdmFyIFMgPSB0YXJnZXQuY29uc3RydWN0b3I7XG4gIHZhciBQO1xuICBpZiAoUyAhPT0gQyAmJiB0eXBlb2YgUyA9PSAnZnVuY3Rpb24nICYmIChQID0gUy5wcm90b3R5cGUpICE9PSBDLnByb3RvdHlwZSAmJiBpc09iamVjdChQKSAmJiBzZXRQcm90b3R5cGVPZikge1xuICAgIHNldFByb3RvdHlwZU9mKHRoYXQsIFApO1xuICB9IHJldHVybiB0aGF0O1xufTtcbiIsIi8vIGZhc3QgYXBwbHksIGh0dHA6Ly9qc3BlcmYubG5raXQuY29tL2Zhc3QtYXBwbHkvNVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4sIGFyZ3MsIHRoYXQpIHtcbiAgdmFyIHVuID0gdGhhdCA9PT0gdW5kZWZpbmVkO1xuICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XG4gICAgY2FzZSAwOiByZXR1cm4gdW4gPyBmbigpXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQpO1xuICAgIGNhc2UgMTogcmV0dXJuIHVuID8gZm4oYXJnc1swXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSk7XG4gICAgY2FzZSAyOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICBjYXNlIDM6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICAgIGNhc2UgNDogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSk7XG4gIH0gcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3MpO1xufTtcbiIsIi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbn07XG4iLCIvLyBjaGVjayBvbiBkZWZhdWx0IEFycmF5IGl0ZXJhdG9yXG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgIT09IHVuZGVmaW5lZCAmJiAoSXRlcmF0b3JzLkFycmF5ID09PSBpdCB8fCBBcnJheVByb3RvW0lURVJBVE9SXSA9PT0gaXQpO1xufTtcbiIsIi8vIDcuMi4yIElzQXJyYXkoYXJndW1lbnQpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gaXNBcnJheShhcmcpIHtcbiAgcmV0dXJuIGNvZihhcmcpID09ICdBcnJheSc7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG4iLCIvLyA3LjIuOCBJc1JlZ0V4cChhcmd1bWVudClcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xudmFyIE1BVENIID0gcmVxdWlyZSgnLi9fd2tzJykoJ21hdGNoJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgaXNSZWdFeHA7XG4gIHJldHVybiBpc09iamVjdChpdCkgJiYgKChpc1JlZ0V4cCA9IGl0W01BVENIXSkgIT09IHVuZGVmaW5lZCA/ICEhaXNSZWdFeHAgOiBjb2YoaXQpID09ICdSZWdFeHAnKTtcbn07XG4iLCIvLyBjYWxsIHNvbWV0aGluZyBvbiBpdGVyYXRvciBzdGVwIHdpdGggc2FmZSBjbG9zaW5nIG9uIGVycm9yXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXJhdG9yLCBmbiwgdmFsdWUsIGVudHJpZXMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZW50cmllcyA/IGZuKGFuT2JqZWN0KHZhbHVlKVswXSwgdmFsdWVbMV0pIDogZm4odmFsdWUpO1xuICAvLyA3LjQuNiBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBjb21wbGV0aW9uKVxuICB9IGNhdGNoIChlKSB7XG4gICAgdmFyIHJldCA9IGl0ZXJhdG9yWydyZXR1cm4nXTtcbiAgICBpZiAocmV0ICE9PSB1bmRlZmluZWQpIGFuT2JqZWN0KHJldC5jYWxsKGl0ZXJhdG9yKSk7XG4gICAgdGhyb3cgZTtcbiAgfVxufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJyk7XG52YXIgZGVzY3JpcHRvciA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcblxuLy8gMjUuMS4yLjEuMSAlSXRlcmF0b3JQcm90b3R5cGUlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2hpZGUnKShJdGVyYXRvclByb3RvdHlwZSwgcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyksIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCkge1xuICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBjcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUsIHsgbmV4dDogZGVzY3JpcHRvcigxLCBuZXh0KSB9KTtcbiAgc2V0VG9TdHJpbmdUYWcoQ29uc3RydWN0b3IsIE5BTUUgKyAnIEl0ZXJhdG9yJyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgPSByZXF1aXJlKCcuL19saWJyYXJ5Jyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyICRpdGVyQ3JlYXRlID0gcmVxdWlyZSgnLi9faXRlci1jcmVhdGUnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBCVUdHWSA9ICEoW10ua2V5cyAmJiAnbmV4dCcgaW4gW10ua2V5cygpKTsgLy8gU2FmYXJpIGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxudmFyIEZGX0lURVJBVE9SID0gJ0BAaXRlcmF0b3InO1xudmFyIEtFWVMgPSAna2V5cyc7XG52YXIgVkFMVUVTID0gJ3ZhbHVlcyc7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQmFzZSwgTkFNRSwgQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0VEKSB7XG4gICRpdGVyQ3JlYXRlKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcbiAgdmFyIGdldE1ldGhvZCA9IGZ1bmN0aW9uIChraW5kKSB7XG4gICAgaWYgKCFCVUdHWSAmJiBraW5kIGluIHByb3RvKSByZXR1cm4gcHJvdG9ba2luZF07XG4gICAgc3dpdGNoIChraW5kKSB7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgICAgY2FzZSBWQUxVRVM6IHJldHVybiBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgfSByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgfTtcbiAgdmFyIFRBRyA9IE5BTUUgKyAnIEl0ZXJhdG9yJztcbiAgdmFyIERFRl9WQUxVRVMgPSBERUZBVUxUID09IFZBTFVFUztcbiAgdmFyIFZBTFVFU19CVUcgPSBmYWxzZTtcbiAgdmFyIHByb3RvID0gQmFzZS5wcm90b3R5cGU7XG4gIHZhciAkbmF0aXZlID0gcHJvdG9bSVRFUkFUT1JdIHx8IHByb3RvW0ZGX0lURVJBVE9SXSB8fCBERUZBVUxUICYmIHByb3RvW0RFRkFVTFRdO1xuICB2YXIgJGRlZmF1bHQgPSAkbmF0aXZlIHx8IGdldE1ldGhvZChERUZBVUxUKTtcbiAgdmFyICRlbnRyaWVzID0gREVGQVVMVCA/ICFERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoJ2VudHJpZXMnKSA6IHVuZGVmaW5lZDtcbiAgdmFyICRhbnlOYXRpdmUgPSBOQU1FID09ICdBcnJheScgPyBwcm90by5lbnRyaWVzIHx8ICRuYXRpdmUgOiAkbmF0aXZlO1xuICB2YXIgbWV0aG9kcywga2V5LCBJdGVyYXRvclByb3RvdHlwZTtcbiAgLy8gRml4IG5hdGl2ZVxuICBpZiAoJGFueU5hdGl2ZSkge1xuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoJGFueU5hdGl2ZS5jYWxsKG5ldyBCYXNlKCkpKTtcbiAgICBpZiAoSXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUgJiYgSXRlcmF0b3JQcm90b3R5cGUubmV4dCkge1xuICAgICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgICAgc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JQcm90b3R5cGUsIFRBRywgdHJ1ZSk7XG4gICAgICAvLyBmaXggZm9yIHNvbWUgb2xkIGVuZ2luZXNcbiAgICAgIGlmICghTElCUkFSWSAmJiB0eXBlb2YgSXRlcmF0b3JQcm90b3R5cGVbSVRFUkFUT1JdICE9ICdmdW5jdGlvbicpIGhpZGUoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcbiAgICB9XG4gIH1cbiAgLy8gZml4IEFycmF5I3t2YWx1ZXMsIEBAaXRlcmF0b3J9Lm5hbWUgaW4gVjggLyBGRlxuICBpZiAoREVGX1ZBTFVFUyAmJiAkbmF0aXZlICYmICRuYXRpdmUubmFtZSAhPT0gVkFMVUVTKSB7XG4gICAgVkFMVUVTX0JVRyA9IHRydWU7XG4gICAgJGRlZmF1bHQgPSBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiAkbmF0aXZlLmNhbGwodGhpcyk7IH07XG4gIH1cbiAgLy8gRGVmaW5lIGl0ZXJhdG9yXG4gIGlmICgoIUxJQlJBUlkgfHwgRk9SQ0VEKSAmJiAoQlVHR1kgfHwgVkFMVUVTX0JVRyB8fCAhcHJvdG9bSVRFUkFUT1JdKSkge1xuICAgIGhpZGUocHJvdG8sIElURVJBVE9SLCAkZGVmYXVsdCk7XG4gIH1cbiAgLy8gUGx1ZyBmb3IgbGlicmFyeVxuICBJdGVyYXRvcnNbTkFNRV0gPSAkZGVmYXVsdDtcbiAgSXRlcmF0b3JzW1RBR10gPSByZXR1cm5UaGlzO1xuICBpZiAoREVGQVVMVCkge1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICB2YWx1ZXM6IERFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChWQUxVRVMpLFxuICAgICAga2V5czogSVNfU0VUID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiAkZW50cmllc1xuICAgIH07XG4gICAgaWYgKEZPUkNFRCkgZm9yIChrZXkgaW4gbWV0aG9kcykge1xuICAgICAgaWYgKCEoa2V5IGluIHByb3RvKSkgcmVkZWZpbmUocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcbiAgICB9IGVsc2UgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoQlVHR1kgfHwgVkFMVUVTX0JVRyksIE5BTUUsIG1ldGhvZHMpO1xuICB9XG4gIHJldHVybiBtZXRob2RzO1xufTtcbiIsInZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIFNBRkVfQ0xPU0lORyA9IGZhbHNlO1xuXG50cnkge1xuICB2YXIgcml0ZXIgPSBbN11bSVRFUkFUT1JdKCk7XG4gIHJpdGVyWydyZXR1cm4nXSA9IGZ1bmN0aW9uICgpIHsgU0FGRV9DTE9TSU5HID0gdHJ1ZTsgfTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXRocm93LWxpdGVyYWxcbiAgQXJyYXkuZnJvbShyaXRlciwgZnVuY3Rpb24gKCkgeyB0aHJvdyAyOyB9KTtcbn0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjLCBza2lwQ2xvc2luZykge1xuICBpZiAoIXNraXBDbG9zaW5nICYmICFTQUZFX0NMT1NJTkcpIHJldHVybiBmYWxzZTtcbiAgdmFyIHNhZmUgPSBmYWxzZTtcbiAgdHJ5IHtcbiAgICB2YXIgYXJyID0gWzddO1xuICAgIHZhciBpdGVyID0gYXJyW0lURVJBVE9SXSgpO1xuICAgIGl0ZXIubmV4dCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHsgZG9uZTogc2FmZSA9IHRydWUgfTsgfTtcbiAgICBhcnJbSVRFUkFUT1JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gaXRlcjsgfTtcbiAgICBleGVjKGFycik7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICByZXR1cm4gc2FmZTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkb25lLCB2YWx1ZSkge1xuICByZXR1cm4geyB2YWx1ZTogdmFsdWUsIGRvbmU6ICEhZG9uZSB9O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge307XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZhbHNlO1xuIiwidmFyIE1FVEEgPSByZXF1aXJlKCcuL191aWQnKSgnbWV0YScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgc2V0RGVzYyA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgaWQgPSAwO1xudmFyIGlzRXh0ZW5zaWJsZSA9IE9iamVjdC5pc0V4dGVuc2libGUgfHwgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdHJ1ZTtcbn07XG52YXIgRlJFRVpFID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gaXNFeHRlbnNpYmxlKE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucyh7fSkpO1xufSk7XG52YXIgc2V0TWV0YSA9IGZ1bmN0aW9uIChpdCkge1xuICBzZXREZXNjKGl0LCBNRVRBLCB7IHZhbHVlOiB7XG4gICAgaTogJ08nICsgKytpZCwgLy8gb2JqZWN0IElEXG4gICAgdzoge30gICAgICAgICAgLy8gd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfSB9KTtcbn07XG52YXIgZmFzdEtleSA9IGZ1bmN0aW9uIChpdCwgY3JlYXRlKSB7XG4gIC8vIHJldHVybiBwcmltaXRpdmUgd2l0aCBwcmVmaXhcbiAgaWYgKCFpc09iamVjdChpdCkpIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCcgPyBpdCA6ICh0eXBlb2YgaXQgPT0gJ3N0cmluZycgPyAnUycgOiAnUCcpICsgaXQ7XG4gIGlmICghaGFzKGl0LCBNRVRBKSkge1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYgKCFpc0V4dGVuc2libGUoaXQpKSByZXR1cm4gJ0YnO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYgKCFjcmVhdGUpIHJldHVybiAnRSc7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIG9iamVjdCBJRFxuICB9IHJldHVybiBpdFtNRVRBXS5pO1xufTtcbnZhciBnZXRXZWFrID0gZnVuY3Rpb24gKGl0LCBjcmVhdGUpIHtcbiAgaWYgKCFoYXMoaXQsIE1FVEEpKSB7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZiAoIWlzRXh0ZW5zaWJsZShpdCkpIHJldHVybiB0cnVlO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYgKCFjcmVhdGUpIHJldHVybiBmYWxzZTtcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gaGFzaCB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9IHJldHVybiBpdFtNRVRBXS53O1xufTtcbi8vIGFkZCBtZXRhZGF0YSBvbiBmcmVlemUtZmFtaWx5IG1ldGhvZHMgY2FsbGluZ1xudmFyIG9uRnJlZXplID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChGUkVFWkUgJiYgbWV0YS5ORUVEICYmIGlzRXh0ZW5zaWJsZShpdCkgJiYgIWhhcyhpdCwgTUVUQSkpIHNldE1ldGEoaXQpO1xuICByZXR1cm4gaXQ7XG59O1xudmFyIG1ldGEgPSBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgS0VZOiBNRVRBLFxuICBORUVEOiBmYWxzZSxcbiAgZmFzdEtleTogZmFzdEtleSxcbiAgZ2V0V2VhazogZ2V0V2VhayxcbiAgb25GcmVlemU6IG9uRnJlZXplXG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIG1hY3JvdGFzayA9IHJlcXVpcmUoJy4vX3Rhc2snKS5zZXQ7XG52YXIgT2JzZXJ2ZXIgPSBnbG9iYWwuTXV0YXRpb25PYnNlcnZlciB8fCBnbG9iYWwuV2ViS2l0TXV0YXRpb25PYnNlcnZlcjtcbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgUHJvbWlzZSA9IGdsb2JhbC5Qcm9taXNlO1xudmFyIGlzTm9kZSA9IHJlcXVpcmUoJy4vX2NvZicpKHByb2Nlc3MpID09ICdwcm9jZXNzJztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBoZWFkLCBsYXN0LCBub3RpZnk7XG5cbiAgdmFyIGZsdXNoID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBwYXJlbnQsIGZuO1xuICAgIGlmIChpc05vZGUgJiYgKHBhcmVudCA9IHByb2Nlc3MuZG9tYWluKSkgcGFyZW50LmV4aXQoKTtcbiAgICB3aGlsZSAoaGVhZCkge1xuICAgICAgZm4gPSBoZWFkLmZuO1xuICAgICAgaGVhZCA9IGhlYWQubmV4dDtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZuKCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGlmIChoZWFkKSBub3RpZnkoKTtcbiAgICAgICAgZWxzZSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH0gbGFzdCA9IHVuZGVmaW5lZDtcbiAgICBpZiAocGFyZW50KSBwYXJlbnQuZW50ZXIoKTtcbiAgfTtcblxuICAvLyBOb2RlLmpzXG4gIGlmIChpc05vZGUpIHtcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGZsdXNoKTtcbiAgICB9O1xuICAvLyBicm93c2VycyB3aXRoIE11dGF0aW9uT2JzZXJ2ZXIsIGV4Y2VwdCBpT1MgU2FmYXJpIC0gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzMzOVxuICB9IGVsc2UgaWYgKE9ic2VydmVyICYmICEoZ2xvYmFsLm5hdmlnYXRvciAmJiBnbG9iYWwubmF2aWdhdG9yLnN0YW5kYWxvbmUpKSB7XG4gICAgdmFyIHRvZ2dsZSA9IHRydWU7XG4gICAgdmFyIG5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gICAgbmV3IE9ic2VydmVyKGZsdXNoKS5vYnNlcnZlKG5vZGUsIHsgY2hhcmFjdGVyRGF0YTogdHJ1ZSB9KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXdcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBub2RlLmRhdGEgPSB0b2dnbGUgPSAhdG9nZ2xlO1xuICAgIH07XG4gIC8vIGVudmlyb25tZW50cyB3aXRoIG1heWJlIG5vbi1jb21wbGV0ZWx5IGNvcnJlY3QsIGJ1dCBleGlzdGVudCBQcm9taXNlXG4gIH0gZWxzZSBpZiAoUHJvbWlzZSAmJiBQcm9taXNlLnJlc29sdmUpIHtcbiAgICAvLyBQcm9taXNlLnJlc29sdmUgd2l0aG91dCBhbiBhcmd1bWVudCB0aHJvd3MgYW4gZXJyb3IgaW4gTEcgV2ViT1MgMlxuICAgIHZhciBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKHVuZGVmaW5lZCk7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcHJvbWlzZS50aGVuKGZsdXNoKTtcbiAgICB9O1xuICAvLyBmb3Igb3RoZXIgZW52aXJvbm1lbnRzIC0gbWFjcm90YXNrIGJhc2VkIG9uOlxuICAvLyAtIHNldEltbWVkaWF0ZVxuICAvLyAtIE1lc3NhZ2VDaGFubmVsXG4gIC8vIC0gd2luZG93LnBvc3RNZXNzYWdcbiAgLy8gLSBvbnJlYWR5c3RhdGVjaGFuZ2VcbiAgLy8gLSBzZXRUaW1lb3V0XG4gIH0gZWxzZSB7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gc3RyYW5nZSBJRSArIHdlYnBhY2sgZGV2IHNlcnZlciBidWcgLSB1c2UgLmNhbGwoZ2xvYmFsKVxuICAgICAgbWFjcm90YXNrLmNhbGwoZ2xvYmFsLCBmbHVzaCk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoZm4pIHtcbiAgICB2YXIgdGFzayA9IHsgZm46IGZuLCBuZXh0OiB1bmRlZmluZWQgfTtcbiAgICBpZiAobGFzdCkgbGFzdC5uZXh0ID0gdGFzaztcbiAgICBpZiAoIWhlYWQpIHtcbiAgICAgIGhlYWQgPSB0YXNrO1xuICAgICAgbm90aWZ5KCk7XG4gICAgfSBsYXN0ID0gdGFzaztcbiAgfTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG4vLyAyNS40LjEuNSBOZXdQcm9taXNlQ2FwYWJpbGl0eShDKVxudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcblxuZnVuY3Rpb24gUHJvbWlzZUNhcGFiaWxpdHkoQykge1xuICB2YXIgcmVzb2x2ZSwgcmVqZWN0O1xuICB0aGlzLnByb21pc2UgPSBuZXcgQyhmdW5jdGlvbiAoJCRyZXNvbHZlLCAkJHJlamVjdCkge1xuICAgIGlmIChyZXNvbHZlICE9PSB1bmRlZmluZWQgfHwgcmVqZWN0ICE9PSB1bmRlZmluZWQpIHRocm93IFR5cGVFcnJvcignQmFkIFByb21pc2UgY29uc3RydWN0b3InKTtcbiAgICByZXNvbHZlID0gJCRyZXNvbHZlO1xuICAgIHJlamVjdCA9ICQkcmVqZWN0O1xuICB9KTtcbiAgdGhpcy5yZXNvbHZlID0gYUZ1bmN0aW9uKHJlc29sdmUpO1xuICB0aGlzLnJlamVjdCA9IGFGdW5jdGlvbihyZWplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cy5mID0gZnVuY3Rpb24gKEMpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlQ2FwYWJpbGl0eShDKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG4vLyAxOS4xLjIuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlLCAuLi4pXG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG52YXIgZ09QUyA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJyk7XG52YXIgcElFID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKTtcbnZhciAkYXNzaWduID0gT2JqZWN0LmFzc2lnbjtcblxuLy8gc2hvdWxkIHdvcmsgd2l0aCBzeW1ib2xzIGFuZCBzaG91bGQgaGF2ZSBkZXRlcm1pbmlzdGljIHByb3BlcnR5IG9yZGVyIChWOCBidWcpXG5tb2R1bGUuZXhwb3J0cyA9ICEkYXNzaWduIHx8IHJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICB2YXIgQSA9IHt9O1xuICB2YXIgQiA9IHt9O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIFMgPSBTeW1ib2woKTtcbiAgdmFyIEsgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3QnO1xuICBBW1NdID0gNztcbiAgSy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAoaykgeyBCW2tdID0gazsgfSk7XG4gIHJldHVybiAkYXNzaWduKHt9LCBBKVtTXSAhPSA3IHx8IE9iamVjdC5rZXlzKCRhc3NpZ24oe30sIEIpKS5qb2luKCcnKSAhPSBLO1xufSkgPyBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCBzb3VyY2UpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICB2YXIgVCA9IHRvT2JqZWN0KHRhcmdldCk7XG4gIHZhciBhTGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgdmFyIGluZGV4ID0gMTtcbiAgdmFyIGdldFN5bWJvbHMgPSBnT1BTLmY7XG4gIHZhciBpc0VudW0gPSBwSUUuZjtcbiAgd2hpbGUgKGFMZW4gPiBpbmRleCkge1xuICAgIHZhciBTID0gSU9iamVjdChhcmd1bWVudHNbaW5kZXgrK10pO1xuICAgIHZhciBrZXlzID0gZ2V0U3ltYm9scyA/IGdldEtleXMoUykuY29uY2F0KGdldFN5bWJvbHMoUykpIDogZ2V0S2V5cyhTKTtcbiAgICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gICAgdmFyIGogPSAwO1xuICAgIHZhciBrZXk7XG4gICAgd2hpbGUgKGxlbmd0aCA+IGopIGlmIChpc0VudW0uY2FsbChTLCBrZXkgPSBrZXlzW2orK10pKSBUW2tleV0gPSBTW2tleV07XG4gIH0gcmV0dXJuIFQ7XG59IDogJGFzc2lnbjtcbiIsIi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgZFBzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwcycpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xudmFyIEVtcHR5ID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgY3JlYXRlRGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgdmFyIGlmcmFtZSA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnaWZyYW1lJyk7XG4gIHZhciBpID0gZW51bUJ1Z0tleXMubGVuZ3RoO1xuICB2YXIgbHQgPSAnPCc7XG4gIHZhciBndCA9ICc+JztcbiAgdmFyIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgcmVxdWlyZSgnLi9faHRtbCcpLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZS5zcmMgPSAnamF2YXNjcmlwdDonOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNjcmlwdC11cmxcbiAgLy8gY3JlYXRlRGljdCA9IGlmcmFtZS5jb250ZW50V2luZG93Lk9iamVjdDtcbiAgLy8gaHRtbC5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKGx0ICsgJ3NjcmlwdCcgKyBndCArICdkb2N1bWVudC5GPU9iamVjdCcgKyBsdCArICcvc2NyaXB0JyArIGd0KTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgY3JlYXRlRGljdCA9IGlmcmFtZURvY3VtZW50LkY7XG4gIHdoaWxlIChpLS0pIGRlbGV0ZSBjcmVhdGVEaWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbaV1dO1xuICByZXR1cm4gY3JlYXRlRGljdCgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmIChPICE9PSBudWxsKSB7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xuICAgIHJlc3VsdCA9IG5ldyBFbXB0eSgpO1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBudWxsO1xuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcbiAgfSBlbHNlIHJlc3VsdCA9IGNyZWF0ZURpY3QoKTtcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IGRQcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xufTtcbiIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGRQID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiBkUChPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIGlmICgnZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpIHRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhJyk7XG4gIGlmICgndmFsdWUnIGluIEF0dHJpYnV0ZXMpIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG4iLCJ2YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcykge1xuICBhbk9iamVjdChPKTtcbiAgdmFyIGtleXMgPSBnZXRLZXlzKFByb3BlcnRpZXMpO1xuICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIHZhciBpID0gMDtcbiAgdmFyIFA7XG4gIHdoaWxlIChsZW5ndGggPiBpKSBkUC5mKE8sIFAgPSBrZXlzW2krK10sIFByb3BlcnRpZXNbUF0pO1xuICByZXR1cm4gTztcbn07XG4iLCJ2YXIgcElFID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpO1xudmFyIGdPUEQgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZ09QRCA6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKSB7XG4gIE8gPSB0b0lPYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiBnT1BEKE8sIFApO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKGhhcyhPLCBQKSkgcmV0dXJuIGNyZWF0ZURlc2MoIXBJRS5mLmNhbGwoTywgUCksIE9bUF0pO1xufTtcbiIsIi8vIGZhbGxiYWNrIGZvciBJRTExIGJ1Z2d5IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHdpdGggaWZyYW1lIGFuZCB3aW5kb3dcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgZ09QTiA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZjtcbnZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG52YXIgd2luZG93TmFtZXMgPSB0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdyAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc1xuICA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHdpbmRvdykgOiBbXTtcblxudmFyIGdldFdpbmRvd05hbWVzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGdPUE4oaXQpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHdpbmRvd05hbWVzLnNsaWNlKCk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzLmYgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KSB7XG4gIHJldHVybiB3aW5kb3dOYW1lcyAmJiB0b1N0cmluZy5jYWxsKGl0KSA9PSAnW29iamVjdCBXaW5kb3ddJyA/IGdldFdpbmRvd05hbWVzKGl0KSA6IGdPUE4odG9JT2JqZWN0KGl0KSk7XG59O1xuIiwiLy8gMTkuMS4yLjcgLyAxNS4yLjMuNCBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpLmNvbmNhdCgnbGVuZ3RoJywgJ3Byb3RvdHlwZScpO1xuXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKE8pIHtcbiAgcmV0dXJuICRrZXlzKE8sIGhpZGRlbktleXMpO1xufTtcbiIsImV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG4iLCIvLyAxOS4xLjIuOSAvIDE1LjIuMy4yIE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG52YXIgT2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiAoTykge1xuICBPID0gdG9PYmplY3QoTyk7XG4gIGlmIChoYXMoTywgSUVfUFJPVE8pKSByZXR1cm4gT1tJRV9QUk9UT107XG4gIGlmICh0eXBlb2YgTy5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmIE8gaW5zdGFuY2VvZiBPLmNvbnN0cnVjdG9yKSB7XG4gICAgcmV0dXJuIE8uY29uc3RydWN0b3IucHJvdG90eXBlO1xuICB9IHJldHVybiBPIGluc3RhbmNlb2YgT2JqZWN0ID8gT2JqZWN0UHJvdG8gOiBudWxsO1xufTtcbiIsInZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgYXJyYXlJbmRleE9mID0gcmVxdWlyZSgnLi9fYXJyYXktaW5jbHVkZXMnKShmYWxzZSk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgbmFtZXMpIHtcbiAgdmFyIE8gPSB0b0lPYmplY3Qob2JqZWN0KTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBrZXk7XG4gIGZvciAoa2V5IGluIE8pIGlmIChrZXkgIT0gSUVfUFJPVE8pIGhhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIGlmIChoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpIHtcbiAgICB+YXJyYXlJbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwiLy8gMTkuMS4yLjE0IC8gMTUuMi4zLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTykge1xuICByZXR1cm4gJGtleXMoTywgZW51bUJ1Z0tleXMpO1xufTtcbiIsImV4cG9ydHMuZiA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuIiwiLy8gbW9zdCBPYmplY3QgbWV0aG9kcyBieSBFUzYgc2hvdWxkIGFjY2VwdCBwcmltaXRpdmVzXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoS0VZLCBleGVjKSB7XG4gIHZhciBmbiA9IChjb3JlLk9iamVjdCB8fCB7fSlbS0VZXSB8fCBPYmplY3RbS0VZXTtcbiAgdmFyIGV4cCA9IHt9O1xuICBleHBbS0VZXSA9IGV4ZWMoZm4pO1xuICAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIGZhaWxzKGZ1bmN0aW9uICgpIHsgZm4oMSk7IH0pLCAnT2JqZWN0JywgZXhwKTtcbn07XG4iLCJ2YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIGlzRW51bSA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKS5mO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXNFbnRyaWVzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoaXQpIHtcbiAgICB2YXIgTyA9IHRvSU9iamVjdChpdCk7XG4gICAgdmFyIGtleXMgPSBnZXRLZXlzKE8pO1xuICAgIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHZhciBrZXk7XG4gICAgd2hpbGUgKGxlbmd0aCA+IGkpIGlmIChpc0VudW0uY2FsbChPLCBrZXkgPSBrZXlzW2krK10pKSB7XG4gICAgICByZXN1bHQucHVzaChpc0VudHJpZXMgPyBba2V5LCBPW2tleV1dIDogT1trZXldKTtcbiAgICB9IHJldHVybiByZXN1bHQ7XG4gIH07XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiB7IGU6IGZhbHNlLCB2OiBleGVjKCkgfTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB7IGU6IHRydWUsIHY6IGUgfTtcbiAgfVxufTtcbiIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSByZXF1aXJlKCcuL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEMsIHgpIHtcbiAgYW5PYmplY3QoQyk7XG4gIGlmIChpc09iamVjdCh4KSAmJiB4LmNvbnN0cnVjdG9yID09PSBDKSByZXR1cm4geDtcbiAgdmFyIHByb21pc2VDYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkuZihDKTtcbiAgdmFyIHJlc29sdmUgPSBwcm9taXNlQ2FwYWJpbGl0eS5yZXNvbHZlO1xuICByZXNvbHZlKHgpO1xuICByZXR1cm4gcHJvbWlzZUNhcGFiaWxpdHkucHJvbWlzZTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChiaXRtYXAsIHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZTogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGU6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG59O1xuIiwidmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRhcmdldCwgc3JjLCBzYWZlKSB7XG4gIGZvciAodmFyIGtleSBpbiBzcmMpIHJlZGVmaW5lKHRhcmdldCwga2V5LCBzcmNba2V5XSwgc2FmZSk7XG4gIHJldHVybiB0YXJnZXQ7XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgU1JDID0gcmVxdWlyZSgnLi9fdWlkJykoJ3NyYycpO1xudmFyIFRPX1NUUklORyA9ICd0b1N0cmluZyc7XG52YXIgJHRvU3RyaW5nID0gRnVuY3Rpb25bVE9fU1RSSU5HXTtcbnZhciBUUEwgPSAoJycgKyAkdG9TdHJpbmcpLnNwbGl0KFRPX1NUUklORyk7XG5cbnJlcXVpcmUoJy4vX2NvcmUnKS5pbnNwZWN0U291cmNlID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiAkdG9TdHJpbmcuY2FsbChpdCk7XG59O1xuXG4obW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywga2V5LCB2YWwsIHNhZmUpIHtcbiAgdmFyIGlzRnVuY3Rpb24gPSB0eXBlb2YgdmFsID09ICdmdW5jdGlvbic7XG4gIGlmIChpc0Z1bmN0aW9uKSBoYXModmFsLCAnbmFtZScpIHx8IGhpZGUodmFsLCAnbmFtZScsIGtleSk7XG4gIGlmIChPW2tleV0gPT09IHZhbCkgcmV0dXJuO1xuICBpZiAoaXNGdW5jdGlvbikgaGFzKHZhbCwgU1JDKSB8fCBoaWRlKHZhbCwgU1JDLCBPW2tleV0gPyAnJyArIE9ba2V5XSA6IFRQTC5qb2luKFN0cmluZyhrZXkpKSk7XG4gIGlmIChPID09PSBnbG9iYWwpIHtcbiAgICBPW2tleV0gPSB2YWw7XG4gIH0gZWxzZSBpZiAoIXNhZmUpIHtcbiAgICBkZWxldGUgT1trZXldO1xuICAgIGhpZGUoTywga2V5LCB2YWwpO1xuICB9IGVsc2UgaWYgKE9ba2V5XSkge1xuICAgIE9ba2V5XSA9IHZhbDtcbiAgfSBlbHNlIHtcbiAgICBoaWRlKE8sIGtleSwgdmFsKTtcbiAgfVxuLy8gYWRkIGZha2UgRnVuY3Rpb24jdG9TdHJpbmcgZm9yIGNvcnJlY3Qgd29yayB3cmFwcGVkIG1ldGhvZHMgLyBjb25zdHJ1Y3RvcnMgd2l0aCBtZXRob2RzIGxpa2UgTG9EYXNoIGlzTmF0aXZlXG59KShGdW5jdGlvbi5wcm90b3R5cGUsIFRPX1NUUklORywgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gIHJldHVybiB0eXBlb2YgdGhpcyA9PSAnZnVuY3Rpb24nICYmIHRoaXNbU1JDXSB8fCAkdG9TdHJpbmcuY2FsbCh0aGlzKTtcbn0pO1xuIiwiLy8gV29ya3Mgd2l0aCBfX3Byb3RvX18gb25seS4gT2xkIHY4IGNhbid0IHdvcmsgd2l0aCBudWxsIHByb3RvIG9iamVjdHMuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90byAqL1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBjaGVjayA9IGZ1bmN0aW9uIChPLCBwcm90bykge1xuICBhbk9iamVjdChPKTtcbiAgaWYgKCFpc09iamVjdChwcm90bykgJiYgcHJvdG8gIT09IG51bGwpIHRocm93IFR5cGVFcnJvcihwcm90byArIFwiOiBjYW4ndCBzZXQgYXMgcHJvdG90eXBlIVwiKTtcbn07XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgKCdfX3Byb3RvX18nIGluIHt9ID8gLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgIGZ1bmN0aW9uICh0ZXN0LCBidWdneSwgc2V0KSB7XG4gICAgICB0cnkge1xuICAgICAgICBzZXQgPSByZXF1aXJlKCcuL19jdHgnKShGdW5jdGlvbi5jYWxsLCByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpLmYoT2JqZWN0LnByb3RvdHlwZSwgJ19fcHJvdG9fXycpLnNldCwgMik7XG4gICAgICAgIHNldCh0ZXN0LCBbXSk7XG4gICAgICAgIGJ1Z2d5ID0gISh0ZXN0IGluc3RhbmNlb2YgQXJyYXkpO1xuICAgICAgfSBjYXRjaCAoZSkgeyBidWdneSA9IHRydWU7IH1cbiAgICAgIHJldHVybiBmdW5jdGlvbiBzZXRQcm90b3R5cGVPZihPLCBwcm90bykge1xuICAgICAgICBjaGVjayhPLCBwcm90byk7XG4gICAgICAgIGlmIChidWdneSkgTy5fX3Byb3RvX18gPSBwcm90bztcbiAgICAgICAgZWxzZSBzZXQoTywgcHJvdG8pO1xuICAgICAgICByZXR1cm4gTztcbiAgICAgIH07XG4gICAgfSh7fSwgZmFsc2UpIDogdW5kZWZpbmVkKSxcbiAgY2hlY2s6IGNoZWNrXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpO1xudmFyIFNQRUNJRVMgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChLRVkpIHtcbiAgdmFyIEMgPSBnbG9iYWxbS0VZXTtcbiAgaWYgKERFU0NSSVBUT1JTICYmIEMgJiYgIUNbU1BFQ0lFU10pIGRQLmYoQywgU1BFQ0lFUywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH1cbiAgfSk7XG59O1xuIiwidmFyIGRlZiA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCB0YWcsIHN0YXQpIHtcbiAgaWYgKGl0ICYmICFoYXMoaXQgPSBzdGF0ID8gaXQgOiBpdC5wcm90b3R5cGUsIFRBRykpIGRlZihpdCwgVEFHLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHRhZyB9KTtcbn07XG4iLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ2tleXMnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gc2hhcmVkW2tleV0gfHwgKHNoYXJlZFtrZXldID0gdWlkKGtleSkpO1xufTtcbiIsInZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nO1xudmFyIHN0b3JlID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xuXG4obW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHZhbHVlICE9PSB1bmRlZmluZWQgPyB2YWx1ZSA6IHt9KTtcbn0pKCd2ZXJzaW9ucycsIFtdKS5wdXNoKHtcbiAgdmVyc2lvbjogY29yZS52ZXJzaW9uLFxuICBtb2RlOiByZXF1aXJlKCcuL19saWJyYXJ5JykgPyAncHVyZScgOiAnZ2xvYmFsJyxcbiAgY29weXJpZ2h0OiAnwqkgMjAxOCBEZW5pcyBQdXNoa2FyZXYgKHpsb2lyb2NrLnJ1KSdcbn0pO1xuIiwiLy8gNy4zLjIwIFNwZWNpZXNDb25zdHJ1Y3RvcihPLCBkZWZhdWx0Q29uc3RydWN0b3IpXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG52YXIgU1BFQ0lFUyA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBEKSB7XG4gIHZhciBDID0gYW5PYmplY3QoTykuY29uc3RydWN0b3I7XG4gIHZhciBTO1xuICByZXR1cm4gQyA9PT0gdW5kZWZpbmVkIHx8IChTID0gYW5PYmplY3QoQylbU1BFQ0lFU10pID09IHVuZGVmaW5lZCA/IEQgOiBhRnVuY3Rpb24oUyk7XG59O1xuIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xuLy8gdHJ1ZSAgLT4gU3RyaW5nI2F0XG4vLyBmYWxzZSAtPiBTdHJpbmcjY29kZVBvaW50QXRcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFRPX1NUUklORykge1xuICByZXR1cm4gZnVuY3Rpb24gKHRoYXQsIHBvcykge1xuICAgIHZhciBzID0gU3RyaW5nKGRlZmluZWQodGhhdCkpO1xuICAgIHZhciBpID0gdG9JbnRlZ2VyKHBvcyk7XG4gICAgdmFyIGwgPSBzLmxlbmd0aDtcbiAgICB2YXIgYSwgYjtcbiAgICBpZiAoaSA8IDAgfHwgaSA+PSBsKSByZXR1cm4gVE9fU1RSSU5HID8gJycgOiB1bmRlZmluZWQ7XG4gICAgYSA9IHMuY2hhckNvZGVBdChpKTtcbiAgICByZXR1cm4gYSA8IDB4ZDgwMCB8fCBhID4gMHhkYmZmIHx8IGkgKyAxID09PSBsIHx8IChiID0gcy5jaGFyQ29kZUF0KGkgKyAxKSkgPCAweGRjMDAgfHwgYiA+IDB4ZGZmZlxuICAgICAgPyBUT19TVFJJTkcgPyBzLmNoYXJBdChpKSA6IGFcbiAgICAgIDogVE9fU1RSSU5HID8gcy5zbGljZShpLCBpICsgMikgOiAoYSAtIDB4ZDgwMCA8PCAxMCkgKyAoYiAtIDB4ZGMwMCkgKyAweDEwMDAwO1xuICB9O1xufTtcbiIsInZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBpbnZva2UgPSByZXF1aXJlKCcuL19pbnZva2UnKTtcbnZhciBodG1sID0gcmVxdWlyZSgnLi9faHRtbCcpO1xudmFyIGNlbCA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgc2V0VGFzayA9IGdsb2JhbC5zZXRJbW1lZGlhdGU7XG52YXIgY2xlYXJUYXNrID0gZ2xvYmFsLmNsZWFySW1tZWRpYXRlO1xudmFyIE1lc3NhZ2VDaGFubmVsID0gZ2xvYmFsLk1lc3NhZ2VDaGFubmVsO1xudmFyIERpc3BhdGNoID0gZ2xvYmFsLkRpc3BhdGNoO1xudmFyIGNvdW50ZXIgPSAwO1xudmFyIHF1ZXVlID0ge307XG52YXIgT05SRUFEWVNUQVRFQ0hBTkdFID0gJ29ucmVhZHlzdGF0ZWNoYW5nZSc7XG52YXIgZGVmZXIsIGNoYW5uZWwsIHBvcnQ7XG52YXIgcnVuID0gZnVuY3Rpb24gKCkge1xuICB2YXIgaWQgPSArdGhpcztcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xuICBpZiAocXVldWUuaGFzT3duUHJvcGVydHkoaWQpKSB7XG4gICAgdmFyIGZuID0gcXVldWVbaWRdO1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gICAgZm4oKTtcbiAgfVxufTtcbnZhciBsaXN0ZW5lciA9IGZ1bmN0aW9uIChldmVudCkge1xuICBydW4uY2FsbChldmVudC5kYXRhKTtcbn07XG4vLyBOb2RlLmpzIDAuOSsgJiBJRTEwKyBoYXMgc2V0SW1tZWRpYXRlLCBvdGhlcndpc2U6XG5pZiAoIXNldFRhc2sgfHwgIWNsZWFyVGFzaykge1xuICBzZXRUYXNrID0gZnVuY3Rpb24gc2V0SW1tZWRpYXRlKGZuKSB7XG4gICAgdmFyIGFyZ3MgPSBbXTtcbiAgICB2YXIgaSA9IDE7XG4gICAgd2hpbGUgKGFyZ3VtZW50cy5sZW5ndGggPiBpKSBhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgIHF1ZXVlWysrY291bnRlcl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgICAgIGludm9rZSh0eXBlb2YgZm4gPT0gJ2Z1bmN0aW9uJyA/IGZuIDogRnVuY3Rpb24oZm4pLCBhcmdzKTtcbiAgICB9O1xuICAgIGRlZmVyKGNvdW50ZXIpO1xuICAgIHJldHVybiBjb3VudGVyO1xuICB9O1xuICBjbGVhclRhc2sgPSBmdW5jdGlvbiBjbGVhckltbWVkaWF0ZShpZCkge1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gIH07XG4gIC8vIE5vZGUuanMgMC44LVxuICBpZiAocmVxdWlyZSgnLi9fY29mJykocHJvY2VzcykgPT0gJ3Byb2Nlc3MnKSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soY3R4KHJ1biwgaWQsIDEpKTtcbiAgICB9O1xuICAvLyBTcGhlcmUgKEpTIGdhbWUgZW5naW5lKSBEaXNwYXRjaCBBUElcbiAgfSBlbHNlIGlmIChEaXNwYXRjaCAmJiBEaXNwYXRjaC5ub3cpIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgRGlzcGF0Y2gubm93KGN0eChydW4sIGlkLCAxKSk7XG4gICAgfTtcbiAgLy8gQnJvd3NlcnMgd2l0aCBNZXNzYWdlQ2hhbm5lbCwgaW5jbHVkZXMgV2ViV29ya2Vyc1xuICB9IGVsc2UgaWYgKE1lc3NhZ2VDaGFubmVsKSB7XG4gICAgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuICAgIHBvcnQgPSBjaGFubmVsLnBvcnQyO1xuICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gbGlzdGVuZXI7XG4gICAgZGVmZXIgPSBjdHgocG9ydC5wb3N0TWVzc2FnZSwgcG9ydCwgMSk7XG4gIC8vIEJyb3dzZXJzIHdpdGggcG9zdE1lc3NhZ2UsIHNraXAgV2ViV29ya2Vyc1xuICAvLyBJRTggaGFzIHBvc3RNZXNzYWdlLCBidXQgaXQncyBzeW5jICYgdHlwZW9mIGl0cyBwb3N0TWVzc2FnZSBpcyAnb2JqZWN0J1xuICB9IGVsc2UgaWYgKGdsb2JhbC5hZGRFdmVudExpc3RlbmVyICYmIHR5cGVvZiBwb3N0TWVzc2FnZSA9PSAnZnVuY3Rpb24nICYmICFnbG9iYWwuaW1wb3J0U2NyaXB0cykge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBnbG9iYWwucG9zdE1lc3NhZ2UoaWQgKyAnJywgJyonKTtcbiAgICB9O1xuICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgbGlzdGVuZXIsIGZhbHNlKTtcbiAgLy8gSUU4LVxuICB9IGVsc2UgaWYgKE9OUkVBRFlTVEFURUNIQU5HRSBpbiBjZWwoJ3NjcmlwdCcpKSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoY2VsKCdzY3JpcHQnKSlbT05SRUFEWVNUQVRFQ0hBTkdFXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaHRtbC5yZW1vdmVDaGlsZCh0aGlzKTtcbiAgICAgICAgcnVuLmNhbGwoaWQpO1xuICAgICAgfTtcbiAgICB9O1xuICAvLyBSZXN0IG9sZCBicm93c2Vyc1xuICB9IGVsc2Uge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBzZXRUaW1lb3V0KGN0eChydW4sIGlkLCAxKSwgMCk7XG4gICAgfTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogc2V0VGFzayxcbiAgY2xlYXI6IGNsZWFyVGFza1xufTtcbiIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgbWF4ID0gTWF0aC5tYXg7XG52YXIgbWluID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbmRleCwgbGVuZ3RoKSB7XG4gIGluZGV4ID0gdG9JbnRlZ2VyKGluZGV4KTtcbiAgcmV0dXJuIGluZGV4IDwgMCA/IG1heChpbmRleCArIGxlbmd0aCwgMCkgOiBtaW4oaW5kZXgsIGxlbmd0aCk7XG59O1xuIiwiLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCA9IE1hdGguY2VpbDtcbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXNOYU4oaXQgPSAraXQpID8gMCA6IChpdCA+IDAgPyBmbG9vciA6IGNlaWwpKGl0KTtcbn07XG4iLCIvLyB0byBpbmRleGVkIG9iamVjdCwgdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gSU9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuIiwiLy8gNy4xLjE1IFRvTGVuZ3RoXG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIG1pbiA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07XG4iLCIvLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcbiIsIi8vIDcuMS4xIFRvUHJpbWl0aXZlKGlucHV0IFssIFByZWZlcnJlZFR5cGVdKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBTKSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSByZXR1cm4gaXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZiAoUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKHR5cGVvZiAoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICghUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcbiIsInZhciBpZCA9IDA7XG52YXIgcHggPSBNYXRoLnJhbmRvbSgpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcHgpLnRvU3RyaW5nKDM2KSk7XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIG5hdmlnYXRvciA9IGdsb2JhbC5uYXZpZ2F0b3I7XG5cbm1vZHVsZS5leHBvcnRzID0gbmF2aWdhdG9yICYmIG5hdmlnYXRvci51c2VyQWdlbnQgfHwgJyc7XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBUWVBFKSB7XG4gIGlmICghaXNPYmplY3QoaXQpIHx8IGl0Ll90ICE9PSBUWVBFKSB0aHJvdyBUeXBlRXJyb3IoJ0luY29tcGF0aWJsZSByZWNlaXZlciwgJyArIFRZUEUgKyAnIHJlcXVpcmVkIScpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgTElCUkFSWSA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKTtcbnZhciB3a3NFeHQgPSByZXF1aXJlKCcuL193a3MtZXh0Jyk7XG52YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICB2YXIgJFN5bWJvbCA9IGNvcmUuU3ltYm9sIHx8IChjb3JlLlN5bWJvbCA9IExJQlJBUlkgPyB7fSA6IGdsb2JhbC5TeW1ib2wgfHwge30pO1xuICBpZiAobmFtZS5jaGFyQXQoMCkgIT0gJ18nICYmICEobmFtZSBpbiAkU3ltYm9sKSkgZGVmaW5lUHJvcGVydHkoJFN5bWJvbCwgbmFtZSwgeyB2YWx1ZTogd2tzRXh0LmYobmFtZSkgfSk7XG59O1xuIiwiZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fd2tzJyk7XG4iLCJ2YXIgc3RvcmUgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgnd2tzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG52YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuU3ltYm9sO1xudmFyIFVTRV9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09ICdmdW5jdGlvbic7XG5cbnZhciAkZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9XG4gICAgVVNFX1NZTUJPTCAmJiBTeW1ib2xbbmFtZV0gfHwgKFVTRV9TWU1CT0wgPyBTeW1ib2wgOiB1aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07XG5cbiRleHBvcnRzLnN0b3JlID0gc3RvcmU7XG4iLCJ2YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb3JlJykuZ2V0SXRlcmF0b3JNZXRob2QgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ICE9IHVuZGVmaW5lZCkgcmV0dXJuIGl0W0lURVJBVE9SXVxuICAgIHx8IGl0WydAQGl0ZXJhdG9yJ11cbiAgICB8fCBJdGVyYXRvcnNbY2xhc3NvZihpdCldO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciBjYWxsID0gcmVxdWlyZSgnLi9faXRlci1jYWxsJyk7XG52YXIgaXNBcnJheUl0ZXIgPSByZXF1aXJlKCcuL19pcy1hcnJheS1pdGVyJyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX2NyZWF0ZS1wcm9wZXJ0eScpO1xudmFyIGdldEl0ZXJGbiA9IHJlcXVpcmUoJy4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIXJlcXVpcmUoJy4vX2l0ZXItZGV0ZWN0JykoZnVuY3Rpb24gKGl0ZXIpIHsgQXJyYXkuZnJvbShpdGVyKTsgfSksICdBcnJheScsIHtcbiAgLy8gMjIuMS4yLjEgQXJyYXkuZnJvbShhcnJheUxpa2UsIG1hcGZuID0gdW5kZWZpbmVkLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxuICBmcm9tOiBmdW5jdGlvbiBmcm9tKGFycmF5TGlrZSAvKiAsIG1hcGZuID0gdW5kZWZpbmVkLCB0aGlzQXJnID0gdW5kZWZpbmVkICovKSB7XG4gICAgdmFyIE8gPSB0b09iamVjdChhcnJheUxpa2UpO1xuICAgIHZhciBDID0gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyA/IHRoaXMgOiBBcnJheTtcbiAgICB2YXIgYUxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgdmFyIG1hcGZuID0gYUxlbiA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQ7XG4gICAgdmFyIG1hcHBpbmcgPSBtYXBmbiAhPT0gdW5kZWZpbmVkO1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgdmFyIGl0ZXJGbiA9IGdldEl0ZXJGbihPKTtcbiAgICB2YXIgbGVuZ3RoLCByZXN1bHQsIHN0ZXAsIGl0ZXJhdG9yO1xuICAgIGlmIChtYXBwaW5nKSBtYXBmbiA9IGN0eChtYXBmbiwgYUxlbiA+IDIgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWQsIDIpO1xuICAgIC8vIGlmIG9iamVjdCBpc24ndCBpdGVyYWJsZSBvciBpdCdzIGFycmF5IHdpdGggZGVmYXVsdCBpdGVyYXRvciAtIHVzZSBzaW1wbGUgY2FzZVxuICAgIGlmIChpdGVyRm4gIT0gdW5kZWZpbmVkICYmICEoQyA9PSBBcnJheSAmJiBpc0FycmF5SXRlcihpdGVyRm4pKSkge1xuICAgICAgZm9yIChpdGVyYXRvciA9IGl0ZXJGbi5jYWxsKE8pLCByZXN1bHQgPSBuZXcgQygpOyAhKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7IGluZGV4KyspIHtcbiAgICAgICAgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBpbmRleCwgbWFwcGluZyA/IGNhbGwoaXRlcmF0b3IsIG1hcGZuLCBbc3RlcC52YWx1ZSwgaW5kZXhdLCB0cnVlKSA6IHN0ZXAudmFsdWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgICBmb3IgKHJlc3VsdCA9IG5ldyBDKGxlbmd0aCk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKSB7XG4gICAgICAgIGNyZWF0ZVByb3BlcnR5KHJlc3VsdCwgaW5kZXgsIG1hcHBpbmcgPyBtYXBmbihPW2luZGV4XSwgaW5kZXgpIDogT1tpbmRleF0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXN1bHQubGVuZ3RoID0gaW5kZXg7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4vX2FkZC10by11bnNjb3BhYmxlcycpO1xudmFyIHN0ZXAgPSByZXF1aXJlKCcuL19pdGVyLXN0ZXAnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG5cbi8vIDIyLjEuMy40IEFycmF5LnByb3RvdHlwZS5lbnRyaWVzKClcbi8vIDIyLjEuMy4xMyBBcnJheS5wcm90b3R5cGUua2V5cygpXG4vLyAyMi4xLjMuMjkgQXJyYXkucHJvdG90eXBlLnZhbHVlcygpXG4vLyAyMi4xLjMuMzAgQXJyYXkucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShBcnJheSwgJ0FycmF5JywgZnVuY3Rpb24gKGl0ZXJhdGVkLCBraW5kKSB7XG4gIHRoaXMuX3QgPSB0b0lPYmplY3QoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbiAgdGhpcy5fayA9IGtpbmQ7ICAgICAgICAgICAgICAgIC8vIGtpbmRcbi8vIDIyLjEuNS4yLjEgJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24gKCkge1xuICB2YXIgTyA9IHRoaXMuX3Q7XG4gIHZhciBraW5kID0gdGhpcy5faztcbiAgdmFyIGluZGV4ID0gdGhpcy5faSsrO1xuICBpZiAoIU8gfHwgaW5kZXggPj0gTy5sZW5ndGgpIHtcbiAgICB0aGlzLl90ID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiBzdGVwKDEpO1xuICB9XG4gIGlmIChraW5kID09ICdrZXlzJykgcmV0dXJuIHN0ZXAoMCwgaW5kZXgpO1xuICBpZiAoa2luZCA9PSAndmFsdWVzJykgcmV0dXJuIHN0ZXAoMCwgT1tpbmRleF0pO1xuICByZXR1cm4gc3RlcCgwLCBbaW5kZXgsIE9baW5kZXhdXSk7XG59LCAndmFsdWVzJyk7XG5cbi8vIGFyZ3VtZW50c0xpc3RbQEBpdGVyYXRvcl0gaXMgJUFycmF5UHJvdG9fdmFsdWVzJSAoOS40LjQuNiwgOS40LjQuNylcbkl0ZXJhdG9ycy5Bcmd1bWVudHMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbmFkZFRvVW5zY29wYWJsZXMoJ2tleXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ3ZhbHVlcycpO1xuYWRkVG9VbnNjb3BhYmxlcygnZW50cmllcycpO1xuIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBGUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGU7XG52YXIgbmFtZVJFID0gL15cXHMqZnVuY3Rpb24gKFteIChdKikvO1xudmFyIE5BTUUgPSAnbmFtZSc7XG5cbi8vIDE5LjIuNC4yIG5hbWVcbk5BTUUgaW4gRlByb3RvIHx8IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgZFAoRlByb3RvLCBOQU1FLCB7XG4gIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiAoJycgKyB0aGlzKS5tYXRjaChuYW1lUkUpWzFdO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHN0cm9uZyA9IHJlcXVpcmUoJy4vX2NvbGxlY3Rpb24tc3Ryb25nJyk7XG52YXIgdmFsaWRhdGUgPSByZXF1aXJlKCcuL192YWxpZGF0ZS1jb2xsZWN0aW9uJyk7XG52YXIgTUFQID0gJ01hcCc7XG5cbi8vIDIzLjEgTWFwIE9iamVjdHNcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29sbGVjdGlvbicpKE1BUCwgZnVuY3Rpb24gKGdldCkge1xuICByZXR1cm4gZnVuY3Rpb24gTWFwKCkgeyByZXR1cm4gZ2V0KHRoaXMsIGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTsgfTtcbn0sIHtcbiAgLy8gMjMuMS4zLjYgTWFwLnByb3RvdHlwZS5nZXQoa2V5KVxuICBnZXQ6IGZ1bmN0aW9uIGdldChrZXkpIHtcbiAgICB2YXIgZW50cnkgPSBzdHJvbmcuZ2V0RW50cnkodmFsaWRhdGUodGhpcywgTUFQKSwga2V5KTtcbiAgICByZXR1cm4gZW50cnkgJiYgZW50cnkudjtcbiAgfSxcbiAgLy8gMjMuMS4zLjkgTWFwLnByb3RvdHlwZS5zZXQoa2V5LCB2YWx1ZSlcbiAgc2V0OiBmdW5jdGlvbiBzZXQoa2V5LCB2YWx1ZSkge1xuICAgIHJldHVybiBzdHJvbmcuZGVmKHZhbGlkYXRlKHRoaXMsIE1BUCksIGtleSA9PT0gMCA/IDAgOiBrZXksIHZhbHVlKTtcbiAgfVxufSwgc3Ryb25nLCB0cnVlKTtcbiIsIi8vIDE5LjEuMy4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiwgJ09iamVjdCcsIHsgYXNzaWduOiByZXF1aXJlKCcuL19vYmplY3QtYXNzaWduJykgfSk7XG4iLCIvLyAxOS4xLjIuMTQgT2JqZWN0LmtleXMoTylcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxucmVxdWlyZSgnLi9fb2JqZWN0LXNhcCcpKCdrZXlzJywgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZnVuY3Rpb24ga2V5cyhpdCkge1xuICAgIHJldHVybiAka2V5cyh0b09iamVjdChpdCkpO1xuICB9O1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbnZhciBhbkluc3RhbmNlID0gcmVxdWlyZSgnLi9fYW4taW5zdGFuY2UnKTtcbnZhciBmb3JPZiA9IHJlcXVpcmUoJy4vX2Zvci1vZicpO1xudmFyIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4vX3NwZWNpZXMtY29uc3RydWN0b3InKTtcbnZhciB0YXNrID0gcmVxdWlyZSgnLi9fdGFzaycpLnNldDtcbnZhciBtaWNyb3Rhc2sgPSByZXF1aXJlKCcuL19taWNyb3Rhc2snKSgpO1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlID0gcmVxdWlyZSgnLi9fbmV3LXByb21pc2UtY2FwYWJpbGl0eScpO1xudmFyIHBlcmZvcm0gPSByZXF1aXJlKCcuL19wZXJmb3JtJyk7XG52YXIgdXNlckFnZW50ID0gcmVxdWlyZSgnLi9fdXNlci1hZ2VudCcpO1xudmFyIHByb21pc2VSZXNvbHZlID0gcmVxdWlyZSgnLi9fcHJvbWlzZS1yZXNvbHZlJyk7XG52YXIgUFJPTUlTRSA9ICdQcm9taXNlJztcbnZhciBUeXBlRXJyb3IgPSBnbG9iYWwuVHlwZUVycm9yO1xudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciB2ZXJzaW9ucyA9IHByb2Nlc3MgJiYgcHJvY2Vzcy52ZXJzaW9ucztcbnZhciB2OCA9IHZlcnNpb25zICYmIHZlcnNpb25zLnY4IHx8ICcnO1xudmFyICRQcm9taXNlID0gZ2xvYmFsW1BST01JU0VdO1xudmFyIGlzTm9kZSA9IGNsYXNzb2YocHJvY2VzcykgPT0gJ3Byb2Nlc3MnO1xudmFyIGVtcHR5ID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xudmFyIEludGVybmFsLCBuZXdHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHksIE93blByb21pc2VDYXBhYmlsaXR5LCBXcmFwcGVyO1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gbmV3R2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUuZjtcblxudmFyIFVTRV9OQVRJVkUgPSAhIWZ1bmN0aW9uICgpIHtcbiAgdHJ5IHtcbiAgICAvLyBjb3JyZWN0IHN1YmNsYXNzaW5nIHdpdGggQEBzcGVjaWVzIHN1cHBvcnRcbiAgICB2YXIgcHJvbWlzZSA9ICRQcm9taXNlLnJlc29sdmUoMSk7XG4gICAgdmFyIEZha2VQcm9taXNlID0gKHByb21pc2UuY29uc3RydWN0b3IgPSB7fSlbcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKV0gPSBmdW5jdGlvbiAoZXhlYykge1xuICAgICAgZXhlYyhlbXB0eSwgZW1wdHkpO1xuICAgIH07XG4gICAgLy8gdW5oYW5kbGVkIHJlamVjdGlvbnMgdHJhY2tpbmcgc3VwcG9ydCwgTm9kZUpTIFByb21pc2Ugd2l0aG91dCBpdCBmYWlscyBAQHNwZWNpZXMgdGVzdFxuICAgIHJldHVybiAoaXNOb2RlIHx8IHR5cGVvZiBQcm9taXNlUmVqZWN0aW9uRXZlbnQgPT0gJ2Z1bmN0aW9uJylcbiAgICAgICYmIHByb21pc2UudGhlbihlbXB0eSkgaW5zdGFuY2VvZiBGYWtlUHJvbWlzZVxuICAgICAgLy8gdjggNi42IChOb2RlIDEwIGFuZCBDaHJvbWUgNjYpIGhhdmUgYSBidWcgd2l0aCByZXNvbHZpbmcgY3VzdG9tIHRoZW5hYmxlc1xuICAgICAgLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9ODMwNTY1XG4gICAgICAvLyB3ZSBjYW4ndCBkZXRlY3QgaXQgc3luY2hyb25vdXNseSwgc28ganVzdCBjaGVjayB2ZXJzaW9uc1xuICAgICAgJiYgdjguaW5kZXhPZignNi42JykgIT09IDBcbiAgICAgICYmIHVzZXJBZ2VudC5pbmRleE9mKCdDaHJvbWUvNjYnKSA9PT0gLTE7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxufSgpO1xuXG4vLyBoZWxwZXJzXG52YXIgaXNUaGVuYWJsZSA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgdGhlbjtcbiAgcmV0dXJuIGlzT2JqZWN0KGl0KSAmJiB0eXBlb2YgKHRoZW4gPSBpdC50aGVuKSA9PSAnZnVuY3Rpb24nID8gdGhlbiA6IGZhbHNlO1xufTtcbnZhciBub3RpZnkgPSBmdW5jdGlvbiAocHJvbWlzZSwgaXNSZWplY3QpIHtcbiAgaWYgKHByb21pc2UuX24pIHJldHVybjtcbiAgcHJvbWlzZS5fbiA9IHRydWU7XG4gIHZhciBjaGFpbiA9IHByb21pc2UuX2M7XG4gIG1pY3JvdGFzayhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHZhbHVlID0gcHJvbWlzZS5fdjtcbiAgICB2YXIgb2sgPSBwcm9taXNlLl9zID09IDE7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBydW4gPSBmdW5jdGlvbiAocmVhY3Rpb24pIHtcbiAgICAgIHZhciBoYW5kbGVyID0gb2sgPyByZWFjdGlvbi5vayA6IHJlYWN0aW9uLmZhaWw7XG4gICAgICB2YXIgcmVzb2x2ZSA9IHJlYWN0aW9uLnJlc29sdmU7XG4gICAgICB2YXIgcmVqZWN0ID0gcmVhY3Rpb24ucmVqZWN0O1xuICAgICAgdmFyIGRvbWFpbiA9IHJlYWN0aW9uLmRvbWFpbjtcbiAgICAgIHZhciByZXN1bHQsIHRoZW4sIGV4aXRlZDtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICAgICAgaWYgKCFvaykge1xuICAgICAgICAgICAgaWYgKHByb21pc2UuX2ggPT0gMikgb25IYW5kbGVVbmhhbmRsZWQocHJvbWlzZSk7XG4gICAgICAgICAgICBwcm9taXNlLl9oID0gMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGhhbmRsZXIgPT09IHRydWUpIHJlc3VsdCA9IHZhbHVlO1xuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGRvbWFpbikgZG9tYWluLmVudGVyKCk7XG4gICAgICAgICAgICByZXN1bHQgPSBoYW5kbGVyKHZhbHVlKTsgLy8gbWF5IHRocm93XG4gICAgICAgICAgICBpZiAoZG9tYWluKSB7XG4gICAgICAgICAgICAgIGRvbWFpbi5leGl0KCk7XG4gICAgICAgICAgICAgIGV4aXRlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChyZXN1bHQgPT09IHJlYWN0aW9uLnByb21pc2UpIHtcbiAgICAgICAgICAgIHJlamVjdChUeXBlRXJyb3IoJ1Byb21pc2UtY2hhaW4gY3ljbGUnKSk7XG4gICAgICAgICAgfSBlbHNlIGlmICh0aGVuID0gaXNUaGVuYWJsZShyZXN1bHQpKSB7XG4gICAgICAgICAgICB0aGVuLmNhbGwocmVzdWx0LCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0gZWxzZSByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0gZWxzZSByZWplY3QodmFsdWUpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZiAoZG9tYWluICYmICFleGl0ZWQpIGRvbWFpbi5leGl0KCk7XG4gICAgICAgIHJlamVjdChlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHdoaWxlIChjaGFpbi5sZW5ndGggPiBpKSBydW4oY2hhaW5baSsrXSk7IC8vIHZhcmlhYmxlIGxlbmd0aCAtIGNhbid0IHVzZSBmb3JFYWNoXG4gICAgcHJvbWlzZS5fYyA9IFtdO1xuICAgIHByb21pc2UuX24gPSBmYWxzZTtcbiAgICBpZiAoaXNSZWplY3QgJiYgIXByb21pc2UuX2gpIG9uVW5oYW5kbGVkKHByb21pc2UpO1xuICB9KTtcbn07XG52YXIgb25VbmhhbmRsZWQgPSBmdW5jdGlvbiAocHJvbWlzZSkge1xuICB0YXNrLmNhbGwoZ2xvYmFsLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHZhbHVlID0gcHJvbWlzZS5fdjtcbiAgICB2YXIgdW5oYW5kbGVkID0gaXNVbmhhbmRsZWQocHJvbWlzZSk7XG4gICAgdmFyIHJlc3VsdCwgaGFuZGxlciwgY29uc29sZTtcbiAgICBpZiAodW5oYW5kbGVkKSB7XG4gICAgICByZXN1bHQgPSBwZXJmb3JtKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGlzTm9kZSkge1xuICAgICAgICAgIHByb2Nlc3MuZW1pdCgndW5oYW5kbGVkUmVqZWN0aW9uJywgdmFsdWUsIHByb21pc2UpO1xuICAgICAgICB9IGVsc2UgaWYgKGhhbmRsZXIgPSBnbG9iYWwub251bmhhbmRsZWRyZWplY3Rpb24pIHtcbiAgICAgICAgICBoYW5kbGVyKHsgcHJvbWlzZTogcHJvbWlzZSwgcmVhc29uOiB2YWx1ZSB9KTtcbiAgICAgICAgfSBlbHNlIGlmICgoY29uc29sZSA9IGdsb2JhbC5jb25zb2xlKSAmJiBjb25zb2xlLmVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignVW5oYW5kbGVkIHByb21pc2UgcmVqZWN0aW9uJywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIC8vIEJyb3dzZXJzIHNob3VsZCBub3QgdHJpZ2dlciBgcmVqZWN0aW9uSGFuZGxlZGAgZXZlbnQgaWYgaXQgd2FzIGhhbmRsZWQgaGVyZSwgTm9kZUpTIC0gc2hvdWxkXG4gICAgICBwcm9taXNlLl9oID0gaXNOb2RlIHx8IGlzVW5oYW5kbGVkKHByb21pc2UpID8gMiA6IDE7XG4gICAgfSBwcm9taXNlLl9hID0gdW5kZWZpbmVkO1xuICAgIGlmICh1bmhhbmRsZWQgJiYgcmVzdWx0LmUpIHRocm93IHJlc3VsdC52O1xuICB9KTtcbn07XG52YXIgaXNVbmhhbmRsZWQgPSBmdW5jdGlvbiAocHJvbWlzZSkge1xuICByZXR1cm4gcHJvbWlzZS5faCAhPT0gMSAmJiAocHJvbWlzZS5fYSB8fCBwcm9taXNlLl9jKS5sZW5ndGggPT09IDA7XG59O1xudmFyIG9uSGFuZGxlVW5oYW5kbGVkID0gZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBoYW5kbGVyO1xuICAgIGlmIChpc05vZGUpIHtcbiAgICAgIHByb2Nlc3MuZW1pdCgncmVqZWN0aW9uSGFuZGxlZCcsIHByb21pc2UpO1xuICAgIH0gZWxzZSBpZiAoaGFuZGxlciA9IGdsb2JhbC5vbnJlamVjdGlvbmhhbmRsZWQpIHtcbiAgICAgIGhhbmRsZXIoeyBwcm9taXNlOiBwcm9taXNlLCByZWFzb246IHByb21pc2UuX3YgfSk7XG4gICAgfVxuICB9KTtcbn07XG52YXIgJHJlamVjdCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICB2YXIgcHJvbWlzZSA9IHRoaXM7XG4gIGlmIChwcm9taXNlLl9kKSByZXR1cm47XG4gIHByb21pc2UuX2QgPSB0cnVlO1xuICBwcm9taXNlID0gcHJvbWlzZS5fdyB8fCBwcm9taXNlOyAvLyB1bndyYXBcbiAgcHJvbWlzZS5fdiA9IHZhbHVlO1xuICBwcm9taXNlLl9zID0gMjtcbiAgaWYgKCFwcm9taXNlLl9hKSBwcm9taXNlLl9hID0gcHJvbWlzZS5fYy5zbGljZSgpO1xuICBub3RpZnkocHJvbWlzZSwgdHJ1ZSk7XG59O1xudmFyICRyZXNvbHZlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHZhciBwcm9taXNlID0gdGhpcztcbiAgdmFyIHRoZW47XG4gIGlmIChwcm9taXNlLl9kKSByZXR1cm47XG4gIHByb21pc2UuX2QgPSB0cnVlO1xuICBwcm9taXNlID0gcHJvbWlzZS5fdyB8fCBwcm9taXNlOyAvLyB1bndyYXBcbiAgdHJ5IHtcbiAgICBpZiAocHJvbWlzZSA9PT0gdmFsdWUpIHRocm93IFR5cGVFcnJvcihcIlByb21pc2UgY2FuJ3QgYmUgcmVzb2x2ZWQgaXRzZWxmXCIpO1xuICAgIGlmICh0aGVuID0gaXNUaGVuYWJsZSh2YWx1ZSkpIHtcbiAgICAgIG1pY3JvdGFzayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB3cmFwcGVyID0geyBfdzogcHJvbWlzZSwgX2Q6IGZhbHNlIH07IC8vIHdyYXBcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0aGVuLmNhbGwodmFsdWUsIGN0eCgkcmVzb2x2ZSwgd3JhcHBlciwgMSksIGN0eCgkcmVqZWN0LCB3cmFwcGVyLCAxKSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAkcmVqZWN0LmNhbGwod3JhcHBlciwgZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9taXNlLl92ID0gdmFsdWU7XG4gICAgICBwcm9taXNlLl9zID0gMTtcbiAgICAgIG5vdGlmeShwcm9taXNlLCBmYWxzZSk7XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgJHJlamVjdC5jYWxsKHsgX3c6IHByb21pc2UsIF9kOiBmYWxzZSB9LCBlKTsgLy8gd3JhcFxuICB9XG59O1xuXG4vLyBjb25zdHJ1Y3RvciBwb2x5ZmlsbFxuaWYgKCFVU0VfTkFUSVZFKSB7XG4gIC8vIDI1LjQuMy4xIFByb21pc2UoZXhlY3V0b3IpXG4gICRQcm9taXNlID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcikge1xuICAgIGFuSW5zdGFuY2UodGhpcywgJFByb21pc2UsIFBST01JU0UsICdfaCcpO1xuICAgIGFGdW5jdGlvbihleGVjdXRvcik7XG4gICAgSW50ZXJuYWwuY2FsbCh0aGlzKTtcbiAgICB0cnkge1xuICAgICAgZXhlY3V0b3IoY3R4KCRyZXNvbHZlLCB0aGlzLCAxKSwgY3R4KCRyZWplY3QsIHRoaXMsIDEpKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICRyZWplY3QuY2FsbCh0aGlzLCBlcnIpO1xuICAgIH1cbiAgfTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gIEludGVybmFsID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcikge1xuICAgIHRoaXMuX2MgPSBbXTsgICAgICAgICAgICAgLy8gPC0gYXdhaXRpbmcgcmVhY3Rpb25zXG4gICAgdGhpcy5fYSA9IHVuZGVmaW5lZDsgICAgICAvLyA8LSBjaGVja2VkIGluIGlzVW5oYW5kbGVkIHJlYWN0aW9uc1xuICAgIHRoaXMuX3MgPSAwOyAgICAgICAgICAgICAgLy8gPC0gc3RhdGVcbiAgICB0aGlzLl9kID0gZmFsc2U7ICAgICAgICAgIC8vIDwtIGRvbmVcbiAgICB0aGlzLl92ID0gdW5kZWZpbmVkOyAgICAgIC8vIDwtIHZhbHVlXG4gICAgdGhpcy5faCA9IDA7ICAgICAgICAgICAgICAvLyA8LSByZWplY3Rpb24gc3RhdGUsIDAgLSBkZWZhdWx0LCAxIC0gaGFuZGxlZCwgMiAtIHVuaGFuZGxlZFxuICAgIHRoaXMuX24gPSBmYWxzZTsgICAgICAgICAgLy8gPC0gbm90aWZ5XG4gIH07XG4gIEludGVybmFsLnByb3RvdHlwZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lLWFsbCcpKCRQcm9taXNlLnByb3RvdHlwZSwge1xuICAgIC8vIDI1LjQuNS4zIFByb21pc2UucHJvdG90eXBlLnRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpXG4gICAgdGhlbjogZnVuY3Rpb24gdGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkge1xuICAgICAgdmFyIHJlYWN0aW9uID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoc3BlY2llc0NvbnN0cnVjdG9yKHRoaXMsICRQcm9taXNlKSk7XG4gICAgICByZWFjdGlvbi5vayA9IHR5cGVvZiBvbkZ1bGZpbGxlZCA9PSAnZnVuY3Rpb24nID8gb25GdWxmaWxsZWQgOiB0cnVlO1xuICAgICAgcmVhY3Rpb24uZmFpbCA9IHR5cGVvZiBvblJlamVjdGVkID09ICdmdW5jdGlvbicgJiYgb25SZWplY3RlZDtcbiAgICAgIHJlYWN0aW9uLmRvbWFpbiA9IGlzTm9kZSA/IHByb2Nlc3MuZG9tYWluIDogdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fYy5wdXNoKHJlYWN0aW9uKTtcbiAgICAgIGlmICh0aGlzLl9hKSB0aGlzLl9hLnB1c2gocmVhY3Rpb24pO1xuICAgICAgaWYgKHRoaXMuX3MpIG5vdGlmeSh0aGlzLCBmYWxzZSk7XG4gICAgICByZXR1cm4gcmVhY3Rpb24ucHJvbWlzZTtcbiAgICB9LFxuICAgIC8vIDI1LjQuNS4xIFByb21pc2UucHJvdG90eXBlLmNhdGNoKG9uUmVqZWN0ZWQpXG4gICAgJ2NhdGNoJzogZnVuY3Rpb24gKG9uUmVqZWN0ZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLnRoZW4odW5kZWZpbmVkLCBvblJlamVjdGVkKTtcbiAgICB9XG4gIH0pO1xuICBPd25Qcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBJbnRlcm5hbCgpO1xuICAgIHRoaXMucHJvbWlzZSA9IHByb21pc2U7XG4gICAgdGhpcy5yZXNvbHZlID0gY3R4KCRyZXNvbHZlLCBwcm9taXNlLCAxKTtcbiAgICB0aGlzLnJlamVjdCA9IGN0eCgkcmVqZWN0LCBwcm9taXNlLCAxKTtcbiAgfTtcbiAgbmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUuZiA9IG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24gKEMpIHtcbiAgICByZXR1cm4gQyA9PT0gJFByb21pc2UgfHwgQyA9PT0gV3JhcHBlclxuICAgICAgPyBuZXcgT3duUHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICAgIDogbmV3R2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5KEMpO1xuICB9O1xufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7IFByb21pc2U6ICRQcm9taXNlIH0pO1xucmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKSgkUHJvbWlzZSwgUFJPTUlTRSk7XG5yZXF1aXJlKCcuL19zZXQtc3BlY2llcycpKFBST01JU0UpO1xuV3JhcHBlciA9IHJlcXVpcmUoJy4vX2NvcmUnKVtQUk9NSVNFXTtcblxuLy8gc3RhdGljc1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuNSBQcm9taXNlLnJlamVjdChyKVxuICByZWplY3Q6IGZ1bmN0aW9uIHJlamVjdChyKSB7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSh0aGlzKTtcbiAgICB2YXIgJCRyZWplY3QgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICAkJHJlamVjdChyKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKExJQlJBUlkgfHwgIVVTRV9OQVRJVkUpLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC42IFByb21pc2UucmVzb2x2ZSh4KVxuICByZXNvbHZlOiBmdW5jdGlvbiByZXNvbHZlKHgpIHtcbiAgICByZXR1cm4gcHJvbWlzZVJlc29sdmUoTElCUkFSWSAmJiB0aGlzID09PSBXcmFwcGVyID8gJFByb21pc2UgOiB0aGlzLCB4KTtcbiAgfVxufSk7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICEoVVNFX05BVElWRSAmJiByZXF1aXJlKCcuL19pdGVyLWRldGVjdCcpKGZ1bmN0aW9uIChpdGVyKSB7XG4gICRQcm9taXNlLmFsbChpdGVyKVsnY2F0Y2gnXShlbXB0eSk7XG59KSksIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjEgUHJvbWlzZS5hbGwoaXRlcmFibGUpXG4gIGFsbDogZnVuY3Rpb24gYWxsKGl0ZXJhYmxlKSB7XG4gICAgdmFyIEMgPSB0aGlzO1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQyk7XG4gICAgdmFyIHJlc29sdmUgPSBjYXBhYmlsaXR5LnJlc29sdmU7XG4gICAgdmFyIHJlamVjdCA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciByZXN1bHQgPSBwZXJmb3JtKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciB2YWx1ZXMgPSBbXTtcbiAgICAgIHZhciBpbmRleCA9IDA7XG4gICAgICB2YXIgcmVtYWluaW5nID0gMTtcbiAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgICAgICAgdmFyICRpbmRleCA9IGluZGV4Kys7XG4gICAgICAgIHZhciBhbHJlYWR5Q2FsbGVkID0gZmFsc2U7XG4gICAgICAgIHZhbHVlcy5wdXNoKHVuZGVmaW5lZCk7XG4gICAgICAgIHJlbWFpbmluZysrO1xuICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICBpZiAoYWxyZWFkeUNhbGxlZCkgcmV0dXJuO1xuICAgICAgICAgIGFscmVhZHlDYWxsZWQgPSB0cnVlO1xuICAgICAgICAgIHZhbHVlc1skaW5kZXhdID0gdmFsdWU7XG4gICAgICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgfSk7XG4gICAgaWYgKHJlc3VsdC5lKSByZWplY3QocmVzdWx0LnYpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH0sXG4gIC8vIDI1LjQuNC40IFByb21pc2UucmFjZShpdGVyYWJsZSlcbiAgcmFjZTogZnVuY3Rpb24gcmFjZShpdGVyYWJsZSkge1xuICAgIHZhciBDID0gdGhpcztcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KEMpO1xuICAgIHZhciByZWplY3QgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICB2YXIgcmVzdWx0ID0gcGVyZm9ybShmdW5jdGlvbiAoKSB7XG4gICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gICAgICAgIEMucmVzb2x2ZShwcm9taXNlKS50aGVuKGNhcGFiaWxpdHkucmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGlmIChyZXN1bHQuZSkgcmVqZWN0KHJlc3VsdC52KTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbiIsIi8vIDIxLjIuNS4zIGdldCBSZWdFeHAucHJvdG90eXBlLmZsYWdzKClcbmlmIChyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmIC8uL2cuZmxhZ3MgIT0gJ2cnKSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mKFJlZ0V4cC5wcm90b3R5cGUsICdmbGFncycsIHtcbiAgY29uZmlndXJhYmxlOiB0cnVlLFxuICBnZXQ6IHJlcXVpcmUoJy4vX2ZsYWdzJylcbn0pO1xuIiwiLy8gQEBzcGxpdCBsb2dpY1xucmVxdWlyZSgnLi9fZml4LXJlLXdrcycpKCdzcGxpdCcsIDIsIGZ1bmN0aW9uIChkZWZpbmVkLCBTUExJVCwgJHNwbGl0KSB7XG4gICd1c2Ugc3RyaWN0JztcbiAgdmFyIGlzUmVnRXhwID0gcmVxdWlyZSgnLi9faXMtcmVnZXhwJyk7XG4gIHZhciBfc3BsaXQgPSAkc3BsaXQ7XG4gIHZhciAkcHVzaCA9IFtdLnB1c2g7XG4gIHZhciAkU1BMSVQgPSAnc3BsaXQnO1xuICB2YXIgTEVOR1RIID0gJ2xlbmd0aCc7XG4gIHZhciBMQVNUX0lOREVYID0gJ2xhc3RJbmRleCc7XG4gIGlmIChcbiAgICAnYWJiYydbJFNQTElUXSgvKGIpKi8pWzFdID09ICdjJyB8fFxuICAgICd0ZXN0J1skU1BMSVRdKC8oPzopLywgLTEpW0xFTkdUSF0gIT0gNCB8fFxuICAgICdhYidbJFNQTElUXSgvKD86YWIpKi8pW0xFTkdUSF0gIT0gMiB8fFxuICAgICcuJ1skU1BMSVRdKC8oLj8pKC4/KS8pW0xFTkdUSF0gIT0gNCB8fFxuICAgICcuJ1skU1BMSVRdKC8oKSgpLylbTEVOR1RIXSA+IDEgfHxcbiAgICAnJ1skU1BMSVRdKC8uPy8pW0xFTkdUSF1cbiAgKSB7XG4gICAgdmFyIE5QQ0cgPSAvKCk/Py8uZXhlYygnJylbMV0gPT09IHVuZGVmaW5lZDsgLy8gbm9ucGFydGljaXBhdGluZyBjYXB0dXJpbmcgZ3JvdXBcbiAgICAvLyBiYXNlZCBvbiBlczUtc2hpbSBpbXBsZW1lbnRhdGlvbiwgbmVlZCB0byByZXdvcmsgaXRcbiAgICAkc3BsaXQgPSBmdW5jdGlvbiAoc2VwYXJhdG9yLCBsaW1pdCkge1xuICAgICAgdmFyIHN0cmluZyA9IFN0cmluZyh0aGlzKTtcbiAgICAgIGlmIChzZXBhcmF0b3IgPT09IHVuZGVmaW5lZCAmJiBsaW1pdCA9PT0gMCkgcmV0dXJuIFtdO1xuICAgICAgLy8gSWYgYHNlcGFyYXRvcmAgaXMgbm90IGEgcmVnZXgsIHVzZSBuYXRpdmUgc3BsaXRcbiAgICAgIGlmICghaXNSZWdFeHAoc2VwYXJhdG9yKSkgcmV0dXJuIF9zcGxpdC5jYWxsKHN0cmluZywgc2VwYXJhdG9yLCBsaW1pdCk7XG4gICAgICB2YXIgb3V0cHV0ID0gW107XG4gICAgICB2YXIgZmxhZ3MgPSAoc2VwYXJhdG9yLmlnbm9yZUNhc2UgPyAnaScgOiAnJykgK1xuICAgICAgICAgICAgICAgICAgKHNlcGFyYXRvci5tdWx0aWxpbmUgPyAnbScgOiAnJykgK1xuICAgICAgICAgICAgICAgICAgKHNlcGFyYXRvci51bmljb2RlID8gJ3UnIDogJycpICtcbiAgICAgICAgICAgICAgICAgIChzZXBhcmF0b3Iuc3RpY2t5ID8gJ3knIDogJycpO1xuICAgICAgdmFyIGxhc3RMYXN0SW5kZXggPSAwO1xuICAgICAgdmFyIHNwbGl0TGltaXQgPSBsaW1pdCA9PT0gdW5kZWZpbmVkID8gNDI5NDk2NzI5NSA6IGxpbWl0ID4+PiAwO1xuICAgICAgLy8gTWFrZSBgZ2xvYmFsYCBhbmQgYXZvaWQgYGxhc3RJbmRleGAgaXNzdWVzIGJ5IHdvcmtpbmcgd2l0aCBhIGNvcHlcbiAgICAgIHZhciBzZXBhcmF0b3JDb3B5ID0gbmV3IFJlZ0V4cChzZXBhcmF0b3Iuc291cmNlLCBmbGFncyArICdnJyk7XG4gICAgICB2YXIgc2VwYXJhdG9yMiwgbWF0Y2gsIGxhc3RJbmRleCwgbGFzdExlbmd0aCwgaTtcbiAgICAgIC8vIERvZXNuJ3QgbmVlZCBmbGFncyBneSwgYnV0IHRoZXkgZG9uJ3QgaHVydFxuICAgICAgaWYgKCFOUENHKSBzZXBhcmF0b3IyID0gbmV3IFJlZ0V4cCgnXicgKyBzZXBhcmF0b3JDb3B5LnNvdXJjZSArICckKD8hXFxcXHMpJywgZmxhZ3MpO1xuICAgICAgd2hpbGUgKG1hdGNoID0gc2VwYXJhdG9yQ29weS5leGVjKHN0cmluZykpIHtcbiAgICAgICAgLy8gYHNlcGFyYXRvckNvcHkubGFzdEluZGV4YCBpcyBub3QgcmVsaWFibGUgY3Jvc3MtYnJvd3NlclxuICAgICAgICBsYXN0SW5kZXggPSBtYXRjaC5pbmRleCArIG1hdGNoWzBdW0xFTkdUSF07XG4gICAgICAgIGlmIChsYXN0SW5kZXggPiBsYXN0TGFzdEluZGV4KSB7XG4gICAgICAgICAgb3V0cHV0LnB1c2goc3RyaW5nLnNsaWNlKGxhc3RMYXN0SW5kZXgsIG1hdGNoLmluZGV4KSk7XG4gICAgICAgICAgLy8gRml4IGJyb3dzZXJzIHdob3NlIGBleGVjYCBtZXRob2RzIGRvbid0IGNvbnNpc3RlbnRseSByZXR1cm4gYHVuZGVmaW5lZGAgZm9yIE5QQ0dcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbG9vcC1mdW5jXG4gICAgICAgICAgaWYgKCFOUENHICYmIG1hdGNoW0xFTkdUSF0gPiAxKSBtYXRjaFswXS5yZXBsYWNlKHNlcGFyYXRvcjIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGZvciAoaSA9IDE7IGkgPCBhcmd1bWVudHNbTEVOR1RIXSAtIDI7IGkrKykgaWYgKGFyZ3VtZW50c1tpXSA9PT0gdW5kZWZpbmVkKSBtYXRjaFtpXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpZiAobWF0Y2hbTEVOR1RIXSA+IDEgJiYgbWF0Y2guaW5kZXggPCBzdHJpbmdbTEVOR1RIXSkgJHB1c2guYXBwbHkob3V0cHV0LCBtYXRjaC5zbGljZSgxKSk7XG4gICAgICAgICAgbGFzdExlbmd0aCA9IG1hdGNoWzBdW0xFTkdUSF07XG4gICAgICAgICAgbGFzdExhc3RJbmRleCA9IGxhc3RJbmRleDtcbiAgICAgICAgICBpZiAob3V0cHV0W0xFTkdUSF0gPj0gc3BsaXRMaW1pdCkgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNlcGFyYXRvckNvcHlbTEFTVF9JTkRFWF0gPT09IG1hdGNoLmluZGV4KSBzZXBhcmF0b3JDb3B5W0xBU1RfSU5ERVhdKys7IC8vIEF2b2lkIGFuIGluZmluaXRlIGxvb3BcbiAgICAgIH1cbiAgICAgIGlmIChsYXN0TGFzdEluZGV4ID09PSBzdHJpbmdbTEVOR1RIXSkge1xuICAgICAgICBpZiAobGFzdExlbmd0aCB8fCAhc2VwYXJhdG9yQ29weS50ZXN0KCcnKSkgb3V0cHV0LnB1c2goJycpO1xuICAgICAgfSBlbHNlIG91dHB1dC5wdXNoKHN0cmluZy5zbGljZShsYXN0TGFzdEluZGV4KSk7XG4gICAgICByZXR1cm4gb3V0cHV0W0xFTkdUSF0gPiBzcGxpdExpbWl0ID8gb3V0cHV0LnNsaWNlKDAsIHNwbGl0TGltaXQpIDogb3V0cHV0O1xuICAgIH07XG4gIC8vIENoYWtyYSwgVjhcbiAgfSBlbHNlIGlmICgnMCdbJFNQTElUXSh1bmRlZmluZWQsIDApW0xFTkdUSF0pIHtcbiAgICAkc3BsaXQgPSBmdW5jdGlvbiAoc2VwYXJhdG9yLCBsaW1pdCkge1xuICAgICAgcmV0dXJuIHNlcGFyYXRvciA9PT0gdW5kZWZpbmVkICYmIGxpbWl0ID09PSAwID8gW10gOiBfc3BsaXQuY2FsbCh0aGlzLCBzZXBhcmF0b3IsIGxpbWl0KTtcbiAgICB9O1xuICB9XG4gIC8vIDIxLjEuMy4xNyBTdHJpbmcucHJvdG90eXBlLnNwbGl0KHNlcGFyYXRvciwgbGltaXQpXG4gIHJldHVybiBbZnVuY3Rpb24gc3BsaXQoc2VwYXJhdG9yLCBsaW1pdCkge1xuICAgIHZhciBPID0gZGVmaW5lZCh0aGlzKTtcbiAgICB2YXIgZm4gPSBzZXBhcmF0b3IgPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogc2VwYXJhdG9yW1NQTElUXTtcbiAgICByZXR1cm4gZm4gIT09IHVuZGVmaW5lZCA/IGZuLmNhbGwoc2VwYXJhdG9yLCBPLCBsaW1pdCkgOiAkc3BsaXQuY2FsbChTdHJpbmcoTyksIHNlcGFyYXRvciwgbGltaXQpO1xuICB9LCAkc3BsaXRdO1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG5yZXF1aXJlKCcuL2VzNi5yZWdleHAuZmxhZ3MnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyICRmbGFncyA9IHJlcXVpcmUoJy4vX2ZsYWdzJyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpO1xudmFyIFRPX1NUUklORyA9ICd0b1N0cmluZyc7XG52YXIgJHRvU3RyaW5nID0gLy4vW1RPX1NUUklOR107XG5cbnZhciBkZWZpbmUgPSBmdW5jdGlvbiAoZm4pIHtcbiAgcmVxdWlyZSgnLi9fcmVkZWZpbmUnKShSZWdFeHAucHJvdG90eXBlLCBUT19TVFJJTkcsIGZuLCB0cnVlKTtcbn07XG5cbi8vIDIxLjIuNS4xNCBSZWdFeHAucHJvdG90eXBlLnRvU3RyaW5nKClcbmlmIChyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHsgcmV0dXJuICR0b1N0cmluZy5jYWxsKHsgc291cmNlOiAnYScsIGZsYWdzOiAnYicgfSkgIT0gJy9hL2InOyB9KSkge1xuICBkZWZpbmUoZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgdmFyIFIgPSBhbk9iamVjdCh0aGlzKTtcbiAgICByZXR1cm4gJy8nLmNvbmNhdChSLnNvdXJjZSwgJy8nLFxuICAgICAgJ2ZsYWdzJyBpbiBSID8gUi5mbGFncyA6ICFERVNDUklQVE9SUyAmJiBSIGluc3RhbmNlb2YgUmVnRXhwID8gJGZsYWdzLmNhbGwoUikgOiB1bmRlZmluZWQpO1xuICB9KTtcbi8vIEZGNDQtIFJlZ0V4cCN0b1N0cmluZyBoYXMgYSB3cm9uZyBuYW1lXG59IGVsc2UgaWYgKCR0b1N0cmluZy5uYW1lICE9IFRPX1NUUklORykge1xuICBkZWZpbmUoZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuICR0b1N0cmluZy5jYWxsKHRoaXMpO1xuICB9KTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkYXQgPSByZXF1aXJlKCcuL19zdHJpbmctYXQnKSh0cnVlKTtcblxuLy8gMjEuMS4zLjI3IFN0cmluZy5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShTdHJpbmcsICdTdHJpbmcnLCBmdW5jdGlvbiAoaXRlcmF0ZWQpIHtcbiAgdGhpcy5fdCA9IFN0cmluZyhpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuLy8gMjEuMS41LjIuMSAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24gKCkge1xuICB2YXIgTyA9IHRoaXMuX3Q7XG4gIHZhciBpbmRleCA9IHRoaXMuX2k7XG4gIHZhciBwb2ludDtcbiAgaWYgKGluZGV4ID49IE8ubGVuZ3RoKSByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIHBvaW50ID0gJGF0KE8sIGluZGV4KTtcbiAgdGhpcy5faSArPSBwb2ludC5sZW5ndGg7XG4gIHJldHVybiB7IHZhbHVlOiBwb2ludCwgZG9uZTogZmFsc2UgfTtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gRUNNQVNjcmlwdCA2IHN5bWJvbHMgc2hpbVxudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIE1FVEEgPSByZXF1aXJlKCcuL19tZXRhJykuS0VZO1xudmFyICRmYWlscyA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xudmFyIHdrcyA9IHJlcXVpcmUoJy4vX3drcycpO1xudmFyIHdrc0V4dCA9IHJlcXVpcmUoJy4vX3drcy1leHQnKTtcbnZhciB3a3NEZWZpbmUgPSByZXF1aXJlKCcuL193a3MtZGVmaW5lJyk7XG52YXIgZW51bUtleXMgPSByZXF1aXJlKCcuL19lbnVtLWtleXMnKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi9faXMtYXJyYXknKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciBfY3JlYXRlID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpO1xudmFyIGdPUE5FeHQgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbi1leHQnKTtcbnZhciAkR09QRCA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJyk7XG52YXIgJERQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xudmFyIGdPUEQgPSAkR09QRC5mO1xudmFyIGRQID0gJERQLmY7XG52YXIgZ09QTiA9IGdPUE5FeHQuZjtcbnZhciAkU3ltYm9sID0gZ2xvYmFsLlN5bWJvbDtcbnZhciAkSlNPTiA9IGdsb2JhbC5KU09OO1xudmFyIF9zdHJpbmdpZnkgPSAkSlNPTiAmJiAkSlNPTi5zdHJpbmdpZnk7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG52YXIgSElEREVOID0gd2tzKCdfaGlkZGVuJyk7XG52YXIgVE9fUFJJTUlUSVZFID0gd2tzKCd0b1ByaW1pdGl2ZScpO1xudmFyIGlzRW51bSA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xudmFyIFN5bWJvbFJlZ2lzdHJ5ID0gc2hhcmVkKCdzeW1ib2wtcmVnaXN0cnknKTtcbnZhciBBbGxTeW1ib2xzID0gc2hhcmVkKCdzeW1ib2xzJyk7XG52YXIgT1BTeW1ib2xzID0gc2hhcmVkKCdvcC1zeW1ib2xzJyk7XG52YXIgT2JqZWN0UHJvdG8gPSBPYmplY3RbUFJPVE9UWVBFXTtcbnZhciBVU0VfTkFUSVZFID0gdHlwZW9mICRTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcbnZhciBRT2JqZWN0ID0gZ2xvYmFsLlFPYmplY3Q7XG4vLyBEb24ndCB1c2Ugc2V0dGVycyBpbiBRdCBTY3JpcHQsIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy8xNzNcbnZhciBzZXR0ZXIgPSAhUU9iamVjdCB8fCAhUU9iamVjdFtQUk9UT1RZUEVdIHx8ICFRT2JqZWN0W1BST1RPVFlQRV0uZmluZENoaWxkO1xuXG4vLyBmYWxsYmFjayBmb3Igb2xkIEFuZHJvaWQsIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvdjgvaXNzdWVzL2RldGFpbD9pZD02ODdcbnZhciBzZXRTeW1ib2xEZXNjID0gREVTQ1JJUFRPUlMgJiYgJGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIF9jcmVhdGUoZFAoe30sICdhJywge1xuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZFAodGhpcywgJ2EnLCB7IHZhbHVlOiA3IH0pLmE7IH1cbiAgfSkpLmEgIT0gNztcbn0pID8gZnVuY3Rpb24gKGl0LCBrZXksIEQpIHtcbiAgdmFyIHByb3RvRGVzYyA9IGdPUEQoT2JqZWN0UHJvdG8sIGtleSk7XG4gIGlmIChwcm90b0Rlc2MpIGRlbGV0ZSBPYmplY3RQcm90b1trZXldO1xuICBkUChpdCwga2V5LCBEKTtcbiAgaWYgKHByb3RvRGVzYyAmJiBpdCAhPT0gT2JqZWN0UHJvdG8pIGRQKE9iamVjdFByb3RvLCBrZXksIHByb3RvRGVzYyk7XG59IDogZFA7XG5cbnZhciB3cmFwID0gZnVuY3Rpb24gKHRhZykge1xuICB2YXIgc3ltID0gQWxsU3ltYm9sc1t0YWddID0gX2NyZWF0ZSgkU3ltYm9sW1BST1RPVFlQRV0pO1xuICBzeW0uX2sgPSB0YWc7XG4gIHJldHVybiBzeW07XG59O1xuXG52YXIgaXNTeW1ib2wgPSBVU0VfTkFUSVZFICYmIHR5cGVvZiAkU3ltYm9sLml0ZXJhdG9yID09ICdzeW1ib2wnID8gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCc7XG59IDogZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCBpbnN0YW5jZW9mICRTeW1ib2w7XG59O1xuXG52YXIgJGRlZmluZVByb3BlcnR5ID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgRCkge1xuICBpZiAoaXQgPT09IE9iamVjdFByb3RvKSAkZGVmaW5lUHJvcGVydHkoT1BTeW1ib2xzLCBrZXksIEQpO1xuICBhbk9iamVjdChpdCk7XG4gIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEQpO1xuICBpZiAoaGFzKEFsbFN5bWJvbHMsIGtleSkpIHtcbiAgICBpZiAoIUQuZW51bWVyYWJsZSkge1xuICAgICAgaWYgKCFoYXMoaXQsIEhJRERFTikpIGRQKGl0LCBISURERU4sIGNyZWF0ZURlc2MoMSwge30pKTtcbiAgICAgIGl0W0hJRERFTl1ba2V5XSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKSBpdFtISURERU5dW2tleV0gPSBmYWxzZTtcbiAgICAgIEQgPSBfY3JlYXRlKEQsIHsgZW51bWVyYWJsZTogY3JlYXRlRGVzYygwLCBmYWxzZSkgfSk7XG4gICAgfSByZXR1cm4gc2V0U3ltYm9sRGVzYyhpdCwga2V5LCBEKTtcbiAgfSByZXR1cm4gZFAoaXQsIGtleSwgRCk7XG59O1xudmFyICRkZWZpbmVQcm9wZXJ0aWVzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhpdCwgUCkge1xuICBhbk9iamVjdChpdCk7XG4gIHZhciBrZXlzID0gZW51bUtleXMoUCA9IHRvSU9iamVjdChQKSk7XG4gIHZhciBpID0gMDtcbiAgdmFyIGwgPSBrZXlzLmxlbmd0aDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKGwgPiBpKSAkZGVmaW5lUHJvcGVydHkoaXQsIGtleSA9IGtleXNbaSsrXSwgUFtrZXldKTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciAkY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGl0LCBQKSB7XG4gIHJldHVybiBQID09PSB1bmRlZmluZWQgPyBfY3JlYXRlKGl0KSA6ICRkZWZpbmVQcm9wZXJ0aWVzKF9jcmVhdGUoaXQpLCBQKTtcbn07XG52YXIgJHByb3BlcnR5SXNFbnVtZXJhYmxlID0gZnVuY3Rpb24gcHJvcGVydHlJc0VudW1lcmFibGUoa2V5KSB7XG4gIHZhciBFID0gaXNFbnVtLmNhbGwodGhpcywga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKSk7XG4gIGlmICh0aGlzID09PSBPYmplY3RQcm90byAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9QU3ltYm9scywga2V5KSkgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gRSB8fCAhaGFzKHRoaXMsIGtleSkgfHwgIWhhcyhBbGxTeW1ib2xzLCBrZXkpIHx8IGhhcyh0aGlzLCBISURERU4pICYmIHRoaXNbSElEREVOXVtrZXldID8gRSA6IHRydWU7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSkge1xuICBpdCA9IHRvSU9iamVjdChpdCk7XG4gIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSk7XG4gIGlmIChpdCA9PT0gT2JqZWN0UHJvdG8gJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPUFN5bWJvbHMsIGtleSkpIHJldHVybjtcbiAgdmFyIEQgPSBnT1BEKGl0LCBrZXkpO1xuICBpZiAoRCAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0pKSBELmVudW1lcmFibGUgPSB0cnVlO1xuICByZXR1cm4gRDtcbn07XG52YXIgJGdldE93blByb3BlcnR5TmFtZXMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KSB7XG4gIHZhciBuYW1lcyA9IGdPUE4odG9JT2JqZWN0KGl0KSk7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGkgPSAwO1xuICB2YXIga2V5O1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkge1xuICAgIGlmICghaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIGtleSAhPSBISURERU4gJiYga2V5ICE9IE1FVEEpIHJlc3VsdC5wdXNoKGtleSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgJGdldE93blByb3BlcnR5U3ltYm9scyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5U3ltYm9scyhpdCkge1xuICB2YXIgSVNfT1AgPSBpdCA9PT0gT2JqZWN0UHJvdG87XG4gIHZhciBuYW1lcyA9IGdPUE4oSVNfT1AgPyBPUFN5bWJvbHMgOiB0b0lPYmplY3QoaXQpKTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgaSA9IDA7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSB7XG4gICAgaWYgKGhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiAoSVNfT1AgPyBoYXMoT2JqZWN0UHJvdG8sIGtleSkgOiB0cnVlKSkgcmVzdWx0LnB1c2goQWxsU3ltYm9sc1trZXldKTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcblxuLy8gMTkuNC4xLjEgU3ltYm9sKFtkZXNjcmlwdGlvbl0pXG5pZiAoIVVTRV9OQVRJVkUpIHtcbiAgJFN5bWJvbCA9IGZ1bmN0aW9uIFN5bWJvbCgpIHtcbiAgICBpZiAodGhpcyBpbnN0YW5jZW9mICRTeW1ib2wpIHRocm93IFR5cGVFcnJvcignU3ltYm9sIGlzIG5vdCBhIGNvbnN0cnVjdG9yIScpO1xuICAgIHZhciB0YWcgPSB1aWQoYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpO1xuICAgIHZhciAkc2V0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICBpZiAodGhpcyA9PT0gT2JqZWN0UHJvdG8pICRzZXQuY2FsbChPUFN5bWJvbHMsIHZhbHVlKTtcbiAgICAgIGlmIChoYXModGhpcywgSElEREVOKSAmJiBoYXModGhpc1tISURERU5dLCB0YWcpKSB0aGlzW0hJRERFTl1bdGFnXSA9IGZhbHNlO1xuICAgICAgc2V0U3ltYm9sRGVzYyh0aGlzLCB0YWcsIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbiAgICB9O1xuICAgIGlmIChERVNDUklQVE9SUyAmJiBzZXR0ZXIpIHNldFN5bWJvbERlc2MoT2JqZWN0UHJvdG8sIHRhZywgeyBjb25maWd1cmFibGU6IHRydWUsIHNldDogJHNldCB9KTtcbiAgICByZXR1cm4gd3JhcCh0YWcpO1xuICB9O1xuICByZWRlZmluZSgkU3ltYm9sW1BST1RPVFlQRV0sICd0b1N0cmluZycsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLl9rO1xuICB9KTtcblxuICAkR09QRC5mID0gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbiAgJERQLmYgPSAkZGVmaW5lUHJvcGVydHk7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZiA9IGdPUE5FeHQuZiA9ICRnZXRPd25Qcm9wZXJ0eU5hbWVzO1xuICByZXF1aXJlKCcuL19vYmplY3QtcGllJykuZiA9ICRwcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKS5mID0gJGdldE93blByb3BlcnR5U3ltYm9scztcblxuICBpZiAoREVTQ1JJUFRPUlMgJiYgIXJlcXVpcmUoJy4vX2xpYnJhcnknKSkge1xuICAgIHJlZGVmaW5lKE9iamVjdFByb3RvLCAncHJvcGVydHlJc0VudW1lcmFibGUnLCAkcHJvcGVydHlJc0VudW1lcmFibGUsIHRydWUpO1xuICB9XG5cbiAgd2tzRXh0LmYgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHJldHVybiB3cmFwKHdrcyhuYW1lKSk7XG4gIH07XG59XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIHsgU3ltYm9sOiAkU3ltYm9sIH0pO1xuXG5mb3IgKHZhciBlczZTeW1ib2xzID0gKFxuICAvLyAxOS40LjIuMiwgMTkuNC4yLjMsIDE5LjQuMi40LCAxOS40LjIuNiwgMTkuNC4yLjgsIDE5LjQuMi45LCAxOS40LjIuMTAsIDE5LjQuMi4xMSwgMTkuNC4yLjEyLCAxOS40LjIuMTMsIDE5LjQuMi4xNFxuICAnaGFzSW5zdGFuY2UsaXNDb25jYXRTcHJlYWRhYmxlLGl0ZXJhdG9yLG1hdGNoLHJlcGxhY2Usc2VhcmNoLHNwZWNpZXMsc3BsaXQsdG9QcmltaXRpdmUsdG9TdHJpbmdUYWcsdW5zY29wYWJsZXMnXG4pLnNwbGl0KCcsJyksIGogPSAwOyBlczZTeW1ib2xzLmxlbmd0aCA+IGo7KXdrcyhlczZTeW1ib2xzW2orK10pO1xuXG5mb3IgKHZhciB3ZWxsS25vd25TeW1ib2xzID0gJGtleXMod2tzLnN0b3JlKSwgayA9IDA7IHdlbGxLbm93blN5bWJvbHMubGVuZ3RoID4gazspIHdrc0RlZmluZSh3ZWxsS25vd25TeW1ib2xzW2srK10pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnU3ltYm9sJywge1xuICAvLyAxOS40LjIuMSBTeW1ib2wuZm9yKGtleSlcbiAgJ2Zvcic6IGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gaGFzKFN5bWJvbFJlZ2lzdHJ5LCBrZXkgKz0gJycpXG4gICAgICA/IFN5bWJvbFJlZ2lzdHJ5W2tleV1cbiAgICAgIDogU3ltYm9sUmVnaXN0cnlba2V5XSA9ICRTeW1ib2woa2V5KTtcbiAgfSxcbiAgLy8gMTkuNC4yLjUgU3ltYm9sLmtleUZvcihzeW0pXG4gIGtleUZvcjogZnVuY3Rpb24ga2V5Rm9yKHN5bSkge1xuICAgIGlmICghaXNTeW1ib2woc3ltKSkgdGhyb3cgVHlwZUVycm9yKHN5bSArICcgaXMgbm90IGEgc3ltYm9sIScpO1xuICAgIGZvciAodmFyIGtleSBpbiBTeW1ib2xSZWdpc3RyeSkgaWYgKFN5bWJvbFJlZ2lzdHJ5W2tleV0gPT09IHN5bSkgcmV0dXJuIGtleTtcbiAgfSxcbiAgdXNlU2V0dGVyOiBmdW5jdGlvbiAoKSB7IHNldHRlciA9IHRydWU7IH0sXG4gIHVzZVNpbXBsZTogZnVuY3Rpb24gKCkgeyBzZXR0ZXIgPSBmYWxzZTsgfVxufSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsICdPYmplY3QnLCB7XG4gIC8vIDE5LjEuMi4yIE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbiAgY3JlYXRlOiAkY3JlYXRlLFxuICAvLyAxOS4xLjIuNCBPYmplY3QuZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcylcbiAgZGVmaW5lUHJvcGVydHk6ICRkZWZpbmVQcm9wZXJ0eSxcbiAgLy8gMTkuMS4yLjMgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcylcbiAgZGVmaW5lUHJvcGVydGllczogJGRlZmluZVByb3BlcnRpZXMsXG4gIC8vIDE5LjEuMi42IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUClcbiAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLFxuICAvLyAxOS4xLjIuNyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxuICBnZXRPd25Qcm9wZXJ0eU5hbWVzOiAkZ2V0T3duUHJvcGVydHlOYW1lcyxcbiAgLy8gMTkuMS4yLjggT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhPKVxuICBnZXRPd25Qcm9wZXJ0eVN5bWJvbHM6ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHNcbn0pO1xuXG4vLyAyNC4zLjIgSlNPTi5zdHJpbmdpZnkodmFsdWUgWywgcmVwbGFjZXIgWywgc3BhY2VdXSlcbiRKU09OICYmICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKCFVU0VfTkFUSVZFIHx8ICRmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHZhciBTID0gJFN5bWJvbCgpO1xuICAvLyBNUyBFZGdlIGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyB7fVxuICAvLyBXZWJLaXQgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIG51bGxcbiAgLy8gVjggdGhyb3dzIG9uIGJveGVkIHN5bWJvbHNcbiAgcmV0dXJuIF9zdHJpbmdpZnkoW1NdKSAhPSAnW251bGxdJyB8fCBfc3RyaW5naWZ5KHsgYTogUyB9KSAhPSAne30nIHx8IF9zdHJpbmdpZnkoT2JqZWN0KFMpKSAhPSAne30nO1xufSkpLCAnSlNPTicsIHtcbiAgc3RyaW5naWZ5OiBmdW5jdGlvbiBzdHJpbmdpZnkoaXQpIHtcbiAgICB2YXIgYXJncyA9IFtpdF07XG4gICAgdmFyIGkgPSAxO1xuICAgIHZhciByZXBsYWNlciwgJHJlcGxhY2VyO1xuICAgIHdoaWxlIChhcmd1bWVudHMubGVuZ3RoID4gaSkgYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcbiAgICAkcmVwbGFjZXIgPSByZXBsYWNlciA9IGFyZ3NbMV07XG4gICAgaWYgKCFpc09iamVjdChyZXBsYWNlcikgJiYgaXQgPT09IHVuZGVmaW5lZCB8fCBpc1N5bWJvbChpdCkpIHJldHVybjsgLy8gSUU4IHJldHVybnMgc3RyaW5nIG9uIHVuZGVmaW5lZFxuICAgIGlmICghaXNBcnJheShyZXBsYWNlcikpIHJlcGxhY2VyID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgIGlmICh0eXBlb2YgJHJlcGxhY2VyID09ICdmdW5jdGlvbicpIHZhbHVlID0gJHJlcGxhY2VyLmNhbGwodGhpcywga2V5LCB2YWx1ZSk7XG4gICAgICBpZiAoIWlzU3ltYm9sKHZhbHVlKSkgcmV0dXJuIHZhbHVlO1xuICAgIH07XG4gICAgYXJnc1sxXSA9IHJlcGxhY2VyO1xuICAgIHJldHVybiBfc3RyaW5naWZ5LmFwcGx5KCRKU09OLCBhcmdzKTtcbiAgfVxufSk7XG5cbi8vIDE5LjQuMy40IFN5bWJvbC5wcm90b3R5cGVbQEB0b1ByaW1pdGl2ZV0oaGludClcbiRTeW1ib2xbUFJPVE9UWVBFXVtUT19QUklNSVRJVkVdIHx8IHJlcXVpcmUoJy4vX2hpZGUnKSgkU3ltYm9sW1BST1RPVFlQRV0sIFRPX1BSSU1JVElWRSwgJFN5bWJvbFtQUk9UT1RZUEVdLnZhbHVlT2YpO1xuLy8gMTkuNC4zLjUgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoJFN5bWJvbCwgJ1N5bWJvbCcpO1xuLy8gMjAuMi4xLjkgTWF0aFtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoTWF0aCwgJ01hdGgnLCB0cnVlKTtcbi8vIDI0LjMuMyBKU09OW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhnbG9iYWwuSlNPTiwgJ0pTT04nLCB0cnVlKTtcbiIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLW9iamVjdC12YWx1ZXMtZW50cmllc1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciAkZW50cmllcyA9IHJlcXVpcmUoJy4vX29iamVjdC10by1hcnJheScpKHRydWUpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHtcbiAgZW50cmllczogZnVuY3Rpb24gZW50cmllcyhpdCkge1xuICAgIHJldHVybiAkZW50cmllcyhpdCk7XG4gIH1cbn0pO1xuIiwicmVxdWlyZSgnLi9fd2tzLWRlZmluZScpKCdhc3luY0l0ZXJhdG9yJyk7XG4iLCJ2YXIgJGl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vZXM2LmFycmF5Lml0ZXJhdG9yJyk7XG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgd2tzID0gcmVxdWlyZSgnLi9fd2tzJyk7XG52YXIgSVRFUkFUT1IgPSB3a3MoJ2l0ZXJhdG9yJyk7XG52YXIgVE9fU1RSSU5HX1RBRyA9IHdrcygndG9TdHJpbmdUYWcnKTtcbnZhciBBcnJheVZhbHVlcyA9IEl0ZXJhdG9ycy5BcnJheTtcblxudmFyIERPTUl0ZXJhYmxlcyA9IHtcbiAgQ1NTUnVsZUxpc3Q6IHRydWUsIC8vIFRPRE86IE5vdCBzcGVjIGNvbXBsaWFudCwgc2hvdWxkIGJlIGZhbHNlLlxuICBDU1NTdHlsZURlY2xhcmF0aW9uOiBmYWxzZSxcbiAgQ1NTVmFsdWVMaXN0OiBmYWxzZSxcbiAgQ2xpZW50UmVjdExpc3Q6IGZhbHNlLFxuICBET01SZWN0TGlzdDogZmFsc2UsXG4gIERPTVN0cmluZ0xpc3Q6IGZhbHNlLFxuICBET01Ub2tlbkxpc3Q6IHRydWUsXG4gIERhdGFUcmFuc2Zlckl0ZW1MaXN0OiBmYWxzZSxcbiAgRmlsZUxpc3Q6IGZhbHNlLFxuICBIVE1MQWxsQ29sbGVjdGlvbjogZmFsc2UsXG4gIEhUTUxDb2xsZWN0aW9uOiBmYWxzZSxcbiAgSFRNTEZvcm1FbGVtZW50OiBmYWxzZSxcbiAgSFRNTFNlbGVjdEVsZW1lbnQ6IGZhbHNlLFxuICBNZWRpYUxpc3Q6IHRydWUsIC8vIFRPRE86IE5vdCBzcGVjIGNvbXBsaWFudCwgc2hvdWxkIGJlIGZhbHNlLlxuICBNaW1lVHlwZUFycmF5OiBmYWxzZSxcbiAgTmFtZWROb2RlTWFwOiBmYWxzZSxcbiAgTm9kZUxpc3Q6IHRydWUsXG4gIFBhaW50UmVxdWVzdExpc3Q6IGZhbHNlLFxuICBQbHVnaW46IGZhbHNlLFxuICBQbHVnaW5BcnJheTogZmFsc2UsXG4gIFNWR0xlbmd0aExpc3Q6IGZhbHNlLFxuICBTVkdOdW1iZXJMaXN0OiBmYWxzZSxcbiAgU1ZHUGF0aFNlZ0xpc3Q6IGZhbHNlLFxuICBTVkdQb2ludExpc3Q6IGZhbHNlLFxuICBTVkdTdHJpbmdMaXN0OiBmYWxzZSxcbiAgU1ZHVHJhbnNmb3JtTGlzdDogZmFsc2UsXG4gIFNvdXJjZUJ1ZmZlckxpc3Q6IGZhbHNlLFxuICBTdHlsZVNoZWV0TGlzdDogdHJ1ZSwgLy8gVE9ETzogTm90IHNwZWMgY29tcGxpYW50LCBzaG91bGQgYmUgZmFsc2UuXG4gIFRleHRUcmFja0N1ZUxpc3Q6IGZhbHNlLFxuICBUZXh0VHJhY2tMaXN0OiBmYWxzZSxcbiAgVG91Y2hMaXN0OiBmYWxzZVxufTtcblxuZm9yICh2YXIgY29sbGVjdGlvbnMgPSBnZXRLZXlzKERPTUl0ZXJhYmxlcyksIGkgPSAwOyBpIDwgY29sbGVjdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgdmFyIE5BTUUgPSBjb2xsZWN0aW9uc1tpXTtcbiAgdmFyIGV4cGxpY2l0ID0gRE9NSXRlcmFibGVzW05BTUVdO1xuICB2YXIgQ29sbGVjdGlvbiA9IGdsb2JhbFtOQU1FXTtcbiAgdmFyIHByb3RvID0gQ29sbGVjdGlvbiAmJiBDb2xsZWN0aW9uLnByb3RvdHlwZTtcbiAgdmFyIGtleTtcbiAgaWYgKHByb3RvKSB7XG4gICAgaWYgKCFwcm90b1tJVEVSQVRPUl0pIGhpZGUocHJvdG8sIElURVJBVE9SLCBBcnJheVZhbHVlcyk7XG4gICAgaWYgKCFwcm90b1tUT19TVFJJTkdfVEFHXSkgaGlkZShwcm90bywgVE9fU1RSSU5HX1RBRywgTkFNRSk7XG4gICAgSXRlcmF0b3JzW05BTUVdID0gQXJyYXlWYWx1ZXM7XG4gICAgaWYgKGV4cGxpY2l0KSBmb3IgKGtleSBpbiAkaXRlcmF0b3JzKSBpZiAoIXByb3RvW2tleV0pIHJlZGVmaW5lKHByb3RvLCBrZXksICRpdGVyYXRvcnNba2V5XSwgdHJ1ZSk7XG4gIH1cbn1cbiIsImltcG9ydCBOMTliYXNlQXBwbGV0IGZyb20gJy4vbjE5YmFzZUFwcGxldCc7XG5pbXBvcnQgTjE5cG9wdXBDb250cm9sbGVyIGZyb20gJy4vbjE5cG9wdXBDb250cm9sbGVyJztcblxuU2llYmVsQXBwRmFjYWRlLk4xOUhlbHBlciA9IGNsYXNzIGV4dGVuZHMgTjE5YmFzZUFwcGxldCB7XG4gIGNvbnN0cnVjdG9yKHNldHRpbmdzKSB7XG4gICAgY29uc3QgeyBhcHBsZXROYW1lIH0gPSBzZXR0aW5ncztcbiAgICBpZiAoYXBwbGV0TmFtZSkge1xuICAgICAgY29uc3QgYXBwbGV0ID0gU2llYmVsQXBwLlNfQXBwLkdldEFjdGl2ZVZpZXcoKS5HZXRBcHBsZXQoYXBwbGV0TmFtZSk7XG4gICAgICBpZiAoIWFwcGxldCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBnZXQgdGhlIHJlZmVyZW5jZSB0byB0aGUgYXBwbGV0IGJ5IHRoZSAke2FwcGxldE5hbWV9IG5hbWVgKTtcbiAgICAgIH1cbiAgICAgIHN1cGVyKE9iamVjdC5hc3NpZ24oe30sIHNldHRpbmdzLCB7IHBtOiBhcHBsZXQuR2V0UE1vZGVsKCkgfSkpO1xuICAgIH0gZWxzZSB7IC8vIHRoZSB1c3VhbCB3YXkgYXNzdW1lZFxuICAgICAgc3VwZXIoc2V0dGluZ3MpO1xuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKCdOZXh1cyBtYWluIGNsYXNzIHN0YXJ0ZWQuLi4uJywgdGhpcy5hcHBsZXROYW1lKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgLy8gZ2V0IHRoZSBuMTlwb3B1cENvbnRyb2xsZXIgc2luZ2xldG9uIGluc3RhbmNlXG4gICAgdGhpcy5uMTlwb3B1cENvbnRyb2xsZXIgPSBOMTlwb3B1cENvbnRyb2xsZXIuaW5zdGFuY2U7XG4gIH1cblxuICBjbG9zZVBvcHVwQXBwbGV0KCkge1xuICAgIHJldHVybiB0aGlzLm4xOXBvcHVwQ29udHJvbGxlci5jbG9zZVBvcHVwQXBwbGV0KCk7XG4gIH1cblxuICBfc2hvd1BvcHVwQXBwbGV0KG5hbWUsIGhpZGUsIGNiKSB7XG4gICAgaWYgKCF0aGlzLm4xOXBvcHVwQ29udHJvbGxlcikge1xuICAgICAgLy8gaXQgaXMgYSBwb3B1cCBhcHBsZXRcbiAgICAgIHRocm93IG5ldyBFcnJvcignT3Blbm5pbmcgcG9wdXAgb24gdGhlIHBvcHVwIGlzIG5vdCBzdXBwb3J0ZWQgbm93Jyk7XG4gICAgfVxuICAgIGlmICghdGhpcy5uMTlwb3B1cENvbnRyb2xsZXIuY2FuT3BlblBvcHVwKCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IG9wZW4gcG9wdXAhJyk7XG4gICAgICAvLyByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMudmlldy5TZXRBY3RpdmVBcHBsZXRJbnRlcm5hbCh0aGlzLmFwcGxldCk7IC8vIG9yIFNldEFjdGl2ZUFwcGxldFxuICAgIHRoaXMuX3NldEFjdGl2ZUNvbnRyb2wobmFtZSk7XG4gICAgcmV0dXJuIHRoaXMubjE5cG9wdXBDb250cm9sbGVyLnNob3dQb3B1cEFwcGxldChoaWRlLCBjYiwgdGhpcy5wbSk7XG4gIH1cblxuICBzaG93TXZnQXBwbGV0KG5hbWUsIGhpZGUsIGNiKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Nob3dQb3B1cEFwcGxldChuYW1lLCBoaWRlLCBjYik7XG4gIH1cblxuICBzaG93UGlja0FwcGxldChuYW1lLCBoaWRlLCBjYikge1xuICAgIHJldHVybiB0aGlzLl9zaG93UG9wdXBBcHBsZXQobmFtZSwgaGlkZSwgY2IpO1xuICB9XG5cbiAgZHJpbGxkb3duKGNvbnRyb2xOYW1lKSB7XG4gICAgLy8gdG9kbzogY2hlY2sgaXNMaW5rIG9mIGNvbnRyb2w/XG4gICAgLy8gaW5kZXggaXMgbm90IGVmZmVjdGl2ZSwgYW5kIGRyaWxsZG93biBhbnl3YXkgaGFwcGVucyBvbiBsYXN0IHNlbGVjdGVkIHJlY29yZFxuICAgIGlmICghdGhpcy5pc0xpc3RBcHBsZXQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmdldFNlbGVjdGlvbigpO1xuICAgIHJldHVybiB0aGlzLnBtLkV4ZWN1dGVNZXRob2QoJ09uRHJpbGxEb3duJywgY29udHJvbE5hbWUsIGluZGV4KTtcbiAgfVxuXG4gIGdvdG9WaWV3KHRhcmdldFZpZXdOYW1lLCB0YXJnZXRBcHBsZXROYW1lLCBpZCkge1xuICAgIC8vIHRvZG86IGdldCB0aGUgYXBwbGV0IG5hbWUgZnJvbSB0aGUgdmlldyBkZWZpbml0aW9uP1xuICAgIGNvbnN0IHJvd0lkID0gdHlwZW9mIGlkID09PSAndW5kZWZpbmVkJyA/IHRoaXMuZ2V0Q3VycmVudFJlY29yZCh0cnVlKS5JZCA6IGlkO1xuICAgIGxldCBTV0VDbWQgPSBgR290b1ZpZXcmU1dFVmlldz0ke3RhcmdldFZpZXdOYW1lfSZTV0VBcHBsZXQwPSR7dGFyZ2V0QXBwbGV0TmFtZX1gO1xuICAgIFNXRUNtZCArPSBgJlNXRUJVPTEmU1dFS2VlcENvbnRleHQ9RkFMU0UmU1dFUm93SWQwPSR7cm93SWR9YDtcbiAgICBTV0VDbWQgPSBlbmNvZGVVUkkoU1dFQ21kKTtcbiAgICBTaWViZWxBcHAuU19BcHAuR290b1ZpZXcodGFyZ2V0Vmlld05hbWUsICcnLCBTV0VDbWQsICcnKTtcbiAgfVxuXG4gIHN0YXRpYyBSZUluaXRQb3B1cCgpIHtcbiAgICBjb25zdCBwb3B1cFBNID0gU2llYmVsQXBwLlNfQXBwLkdldFBvcHVwUE0oKTtcbiAgICBwb3B1cFBNLkluaXQoKTtcbiAgICBwb3B1cFBNLlNldHVwKCk7XG4gIH1cbn07XG4iLCJpbXBvcnQgTjE5bm90aWZpY2F0aW9ucyBmcm9tICcuL24xOW5vdGlmaWNhdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOMTliYXNlQXBwbGV0IHtcbiAgY29uc3RydWN0b3Ioc2V0dGluZ3MpIHtcbiAgICB0aGlzLmNvbnN0cyA9IFNpZWJlbEpTLkRlcGVuZGVuY3koJ1NpZWJlbEFwcC5Db25zdGFudHMnKTtcbiAgICB0aGlzLnBtID0gc2V0dGluZ3MucG07XG4gICAgdGhpcy52aWV3ID0gU2llYmVsQXBwLlNfQXBwLkdldEFjdGl2ZVZpZXcoKTtcbiAgICB0aGlzLmFwcGxldE5hbWUgPSB0aGlzLnBtLkdldCgnR2V0TmFtZScpO1xuICAgIHRoaXMuYXBwbGV0ID0gdGhpcy52aWV3LkdldEFwcGxldCh0aGlzLmFwcGxldE5hbWUpO1xuICAgIHRoaXMuaXNMaXN0QXBwbGV0ID0gdHlwZW9mIHRoaXMucG0uR2V0KCdHZXRMaXN0T2ZDb2x1bW5zJykgIT09ICd1bmRlZmluZWQnO1xuICAgIHRoaXMucmVxdWlyZWQgPSBbXTsgLy8gd2lsbCBiZSBlbXB0eSBmb3IgdGhlIGxpc3QgYXBwbGV0XG4gICAgdGhpcy5sb3YgPSB7fTtcbiAgICB0aGlzLmJvb2xPYmplY3QgPSBuZXcgU2llYmVsQXBwLlNfQXBwLkRhdHVtQm9vbE9iamVjdCgpO1xuXG4gICAgY29uc3QgYmNJZCA9IHRoaXMuYXBwbGV0LkdldEJDSWQoKTtcbiAgICB0aGlzLm5vdGlmaWNhdGlvbnMgPSBuZXcgTjE5bm90aWZpY2F0aW9ucyh0aGlzLnBtLCB0aGlzLmNvbnN0cywgYmNJZCk7XG5cbiAgICAvLyBwb3B1bGF0ZSB0aGUgcmVxdWlyZWQgYXJyYXkgZm9yIGZvcm0gYXBwbGV0c1xuICAgIGlmICghdGhpcy5pc0xpc3RBcHBsZXQpIHtcbiAgICAgIGNvbnN0IGFwcGxldElkID0gYHNfJHt0aGlzLnBtLkdldCgnR2V0RnVsbElkJyl9X2RpdmA7XG4gICAgICBjb25zdCBhcHBsZXRJbnB1dHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChhcHBsZXRJZCkucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXBwbGV0SW5wdXRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmIChhcHBsZXRJbnB1dHNbaV0uYXR0cmlidXRlc1snYXJpYS1yZXF1aXJlZCddKSB7XG4gICAgICAgICAgdGhpcy5yZXF1aXJlZC5wdXNoKGFwcGxldElucHV0c1tpXS5hdHRyaWJ1dGVzLm5hbWUubm9kZVZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGxpc3RlbmVyIHRvIGdldCBkeW5hbWljIExPVnNcbiAgICB0aGlzLnBtLkF0dGFjaFBNQmluZGluZygnVXBkYXRlUXVpY2tQaWNrSW5mbycsIChpbnB1dE5hbWUsIGFyZywgYXJyKSA9PiB7XG4gICAgICBjb25zdCB2aWV3TmFtZSA9IHRoaXMudmlldy5HZXROYW1lKCk7XG4gICAgICBpZiAodmlld05hbWUgPT09IGFyclsxXSAmJiB0aGlzLmFwcGxldE5hbWUgPT09IGFyclsyXSkge1xuICAgICAgICBpZiAoJ2ZhbHNlJyA9PT0gYXJyWzRdKSB7XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgICBjb25zb2xlLndhcm4oYFtOMTldUGlja2xpc3QgaXMgbm90IGFzc29jaWF0ZWQgd2l0aCB0aGUgY29udHJvbCAtICR7SlNPTi5zdHJpbmdpZnkoYXJyKX1gKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxvdlthcnJbM11dID0gYXJyLnNwbGljZSg1KS5maWx0ZXIoZWwgPT4gZWwgIT09ICcnKTtcbiAgICAgICAgLy8gdG9kbzogZG8gd2UgbmVlZCB0byBpbmRpY2F0ZSB3aGVuIGFuIGVtcHR5IHZhbHVlIGlzIGFsbG93ZWQ/XG4gICAgICB9XG4gICAgfSwgeyBzY29wZTogdGhpcyB9KTtcbiAgfVxuXG4gIHN1YnNjcmliZShmdW5jKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2xhc3MtbWV0aG9kcy11c2UtdGhpc1xuICAgIC8vIFRPRE8gOiBhY2NlcHQgYWxzbyBjb250ZXh0IGZvciBmdW5jdGlvbiwgb3IgdGhlIGNhbGxlZCBib3VuZCBjb250ZXh0IHRvIHRoZSBmdW5jdGlvbj9cbiAgICByZXR1cm4gdGhpcy5ub3RpZmljYXRpb25zLnN1YnNjcmliZShmdW5jKTtcbiAgfVxuXG4gIHVuc3Vic2NyaWJlKHRva2VuKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2xhc3MtbWV0aG9kcy11c2UtdGhpc1xuICAgIHJldHVybiB0aGlzLm5vdGlmaWNhdGlvbnMudW5zdWJzY3JpYmUodG9rZW4pO1xuICB9XG5cbiAgX2dldENvbnRyb2wobmFtZSkge1xuICAgIHJldHVybiB0aGlzLnBtLkV4ZWN1dGVNZXRob2QoJ0dldENvbnRyb2wnLCBuYW1lKTtcbiAgfVxuXG4gIF9yZXR1cm5Db250cm9scygpIHtcbiAgICBpZiAodGhpcy5pc0xpc3RBcHBsZXQpIHtcbiAgICAgIHJldHVybiB0aGlzLnBtLkdldCgnR2V0TGlzdE9mQ29sdW1ucycpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5wbS5HZXQoJ0dldENvbnRyb2xzJyk7XG4gIH1cblxuICAvLyBjYWxsZWQgaW50byB0aGUgZ2V0Q29udHJvbHMgdG8gcmVkdWNlIHRoZSBhbW91bnQgb2YgdGhlIHJldHVybmVkIGNvbnRyb2xzXG4gIF9pc1NraXBDb250cm9sKHR5cGUpIHtcbiAgICAvLyBodHRwczovL2RvY3Mub3JhY2xlLmNvbS9jZC9FNzQ4OTBfMDEvYm9va3MvQ29uZmlnT3BlblVJL2FwcGVuZGl4X2FfYXBpMDAyLmh0bVxuICAgIC8vIG1heWJlIHdlIG5lZWQgdG8gZXhjbHVkZSBtb3JlIHR5cGVzXG4gICAgcmV0dXJuICh0eXBlID09PSB0aGlzLmNvbnN0cy5nZXQoJ1NXRV9QU1RfQlVUVE9OX0NUUkwnKSlcbiAgICAgIHx8ICh0eXBlID09PSB0aGlzLmNvbnN0cy5nZXQoJ1NXRV9DVFJMX0xJTksnKSlcbiAgICAgIHx8ICh0eXBlID09PSB0aGlzLmNvbnN0cy5nZXQoJ1NXRV9DVFJMX1BMQUlOVEVYVCcpKVxuICAgICAgfHwgKHR5cGUgPT09ICdudWxsJyk7IC8vIEdldFVpVHlwZSByZXR1cm5zIHN0cmluZ1xuICB9XG5cbiAgX2lzUmVxdWlyZWQoaW5wdXROYW1lKSB7XG4gICAgLy8gcmVxdWlyZWQgaXMgZW1wdHkgZm9yIGxpc3QgYXBwbGV0cywgaG9wZWZ1bGx5IGZvciBub3dcbiAgICByZXR1cm4gdGhpcy5yZXF1aXJlZC5pbmRleE9mKGlucHV0TmFtZSkgPiAtMTtcbiAgfVxuXG4gIHN0YXRpYyBHZXRTdGF0aWNMT1YoYXJyKSB7XG4gICAgY29uc3QgcmV0ID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIHJldC5wdXNoKGFycltpXS5wcm9wQXJyYXkpO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgX3NldEFjdGl2ZUNvbnRyb2wobmFtZSkge1xuICAgIGlmIChuYW1lKSB7XG4gICAgICByZXR1cm4gdGhpcy5wbS5FeGVjdXRlTWV0aG9kKCdTZXRBY3RpdmVDb250cm9sJywgdGhpcy5fZ2V0Q29udHJvbChuYW1lKSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnBtLkV4ZWN1dGVNZXRob2QoJ1NldEFjdGl2ZUNvbnRyb2wnLCBudWxsKTtcbiAgfVxuXG4gIF9nZXRWYWx1ZUZvckNvbnRyb2woY29udHJvbFVpVHlwZSwgdmFsdWUpIHtcbiAgICAvLyBUT0RPOiBEYXRlVGltZSwgbnVtYmVycywgYW5kIHBob25lcz9cbiAgICBpZiAodGhpcy5jb25zdHMuZ2V0KCdTV0VfQ1RSTF9DSEVDS0JPWCcpID09PSBjb250cm9sVWlUeXBlKSB7XG4gICAgICAvLyBjb252ZXJ0IHRydWUvZmFsc2UgPT4gWS9OIC8vIHdoYXQgd2l0aCBudWxsXG4gICAgICB0aGlzLmJvb2xPYmplY3QuU2V0VmFsdWUodmFsdWUpO1xuICAgICAgcmV0dXJuIHRoaXMuYm9vbE9iamVjdC5HZXRBc1N0cmluZygpO1xuICAgICAgLy8gdmFsdWUgPSB2YWx1ZSA/ICdZJyA6ICdOJzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBjYW5JbnZva2VNZXRob2QobWV0aG9kKSB7XG4gICAgcmV0dXJuIHRoaXMucG0uRXhlY3V0ZU1ldGhvZCgnQ2FuSW52b2tlTWV0aG9kJywgbWV0aG9kKTtcbiAgfVxuXG4gIGludm9rZU1ldGhvZChtZXRob2QpIHtcbiAgICBpZiAoIXRoaXMuY2FuSW52b2tlTWV0aG9kKG1ldGhvZCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucG0uRXhlY3V0ZU1ldGhvZCgnSW52b2tlTWV0aG9kJywgbWV0aG9kKTtcbiAgfVxuXG4gIGdldENvbnRyb2xzKCkge1xuICAgIGNvbnN0IGNvbnRyb2xzID0ge307XG4gICAgY29uc3QgYXBwbGV0Q29udHJvbHMgPSB0aGlzLl9yZXR1cm5Db250cm9scygpO1xuICAgIGNvbnN0IGFyciA9IE9iamVjdC5rZXlzKGFwcGxldENvbnRyb2xzKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgY29udHJvbCA9IGFwcGxldENvbnRyb2xzW2FycltpXV07XG4gICAgICBjb25zdCBjb250cm9sVWlUeXBlID0gY29udHJvbC5HZXRVSVR5cGUoKTtcbiAgICAgIGlmICh0aGlzLl9pc1NraXBDb250cm9sKGNvbnRyb2xVaVR5cGUpKSB7XG4gICAgICAgIGNvbnRpbnVlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnRpbnVlXG4gICAgICB9XG4gICAgICBjb25zdCBjb250cm9sTmFtZSA9IGNvbnRyb2wuR2V0TmFtZSgpO1xuICAgICAgY29uc3QgY29udHJvbElucHV0TmFtZSA9IGNvbnRyb2wuR2V0SW5wdXROYW1lKCk7XG4gICAgICBjb25zdCBvYmogPSB7XG4gICAgICAgIG5hbWU6IGNvbnRyb2xOYW1lLFxuICAgICAgICBsYWJlbDogY29udHJvbC5HZXREaXNwbGF5TmFtZSgpLFxuICAgICAgICB1aVR5cGU6IGNvbnRyb2xVaVR5cGUsXG4gICAgICAgIHJlcXVpcmVkOiB0aGlzLl9pc1JlcXVpcmVkKGNvbnRyb2xJbnB1dE5hbWUpLFxuICAgICAgICBib3VuZGVkUGljazogY29udHJvbC5Jc0JvdW5kZWRQaWNrKCkgPT09ICcxJyxcbiAgICAgICAgc3RhdGljUGljazogY29udHJvbC5Jc1N0YXRpY0JvdW5kZWQoKSA9PT0gJzEnLFxuICAgICAgICAvLyBwaWNrQXBwbGV0OiBjb250cm9sLkdldFBpY2tBcHBsZXQoKSwgLy8gY29uZnVzaW5nIGFuZCBub3QgY29uc2lzdGVudCAtIHNlZSB3aWtpXG4gICAgICAgIGlucHV0TmFtZTogY29udHJvbElucHV0TmFtZSxcbiAgICAgICAgaXNQb3N0Q2hhbmdlczogY29udHJvbC5Jc1Bvc3RDaGFuZ2VzKCksXG4gICAgICAgIG1heFNpemU6IGNvbnRyb2wuR2V0TWF4U2l6ZSgpLFxuICAgICAgICAvLyBtYXhDaGFyczogY29udHJvbC5HZXRNYXhDaGFycygpLCAvLyBpdCBpcyBhbHdheXMgMFxuICAgICAgICBmaWVsZE5hbWU6IGNvbnRyb2wuR2V0RmllbGROYW1lKCksXG4gICAgICAgIGlzTGluazogdGhpcy5wbS5FeGVjdXRlTWV0aG9kKCdDYW5OYXZpZ2F0ZScsIGNvbnRyb2xOYW1lKSxcbiAgICAgICAgcmVhZG9ubHk6ICF0aGlzLnBtLkV4ZWN1dGVNZXRob2QoJ0NhblVwZGF0ZScsIGNvbnRyb2xOYW1lKSxcbiAgICAgIH07XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCAncmVhZE9ubHknLCB7XG4gICAgICAgIGdldDogKCkgPT4ge1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICAgICAgY29uc29sZS53YXJuKCdbTjE5XVRoZSByZWFkT25seSBwcm9wZXJ0eSB3aWxsIGJlIHJlbW92ZWQgc29vbjsgdXNlIHJlYWRvbmx5IGluc3RlYWQgb2YgaXQuJyk7XG4gICAgICAgICAgcmV0dXJuIG9iai5yZWFkb25seTtcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgICAgLy8gYWRkIHZhbHVlcyB0byBiZSBkaXNwbGF5ZWQgaW4gdGhlIHN0YXRpYyBwaWNrIGxpc3RcbiAgICAgIGlmIChvYmouc3RhdGljUGljaykge1xuICAgICAgICBvYmouc3RhdGljTE9WID0gTjE5YmFzZUFwcGxldC5HZXRTdGF0aWNMT1YoY29udHJvbC5HZXRSYWRpb0dyb3VwUHJvcFNldCgpLmNoaWxkQXJyYXkpO1xuICAgICAgICBvYmoubG92cyA9IG9iai5zdGF0aWNMT1YucmVkdWNlKChhY2MsIGVsKSA9PiB7IC8vIG5vcm1hbGl6ZWRcbiAgICAgICAgICBhY2MucHVzaCh7IGxpYzogZWwuRmllbGRWYWx1ZSwgdmFsOiBlbC5EaXNwbGF5TmFtZSB9KTtcbiAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICB9LCBbXSk7XG4gICAgICB9XG4gICAgICBjb250cm9sc1tjb250cm9sTmFtZV0gPSBvYmo7XG4gICAgfVxuICAgIHJldHVybiBjb250cm9scztcbiAgfVxuXG4gIGdldFJlY29yZFNldChhZGRSZWNvcmRJbmRleCkge1xuICAgIGlmIChhZGRSZWNvcmRJbmRleCkge1xuICAgICAgcmV0dXJuIHRoaXMucG0uR2V0KCdHZXRSZWNvcmRTZXQnKS5tYXAoKGVsLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCByZXQgPSBPYmplY3QuYXNzaWduKHt9LCBlbCk7XG4gICAgICAgIHJldC5faW5keCA9IGluZGV4O1xuICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnBtLkdldCgnR2V0UmVjb3JkU2V0Jyk7XG4gIH1cblxuICBnZXRSYXdSZWNvcmRTZXQoYWRkUmVjb3JkSW5kZXgpIHtcbiAgICBpZiAoYWRkUmVjb3JkSW5kZXgpIHtcbiAgICAgIHJldHVybiB0aGlzLnBtLkdldCgnR2V0UmF3UmVjb3JkU2V0JykubWFwKChlbCwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgcmV0ID0gT2JqZWN0LmFzc2lnbih7fSwgZWwpO1xuICAgICAgICByZXQuX2luZHggPSBpbmRleDtcbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5wbS5HZXQoJ0dldFJhd1JlY29yZFNldCcpO1xuICB9XG5cbiAgZ2V0Um93TGlzdFJvd0NvdW50KCkge1xuICAgIC8vIGhvdyBtdWNoIGFwcGxldCBjYW4gZGlzcGxheSAoc3BlY2lmaWVkIGluIFNpZWJlbCBUb29scykgLSAxMC8yMFxuICAgIHJldHVybiB0aGlzLnBtLkdldCgnR2V0Um93TGlzdFJvd0NvdW50Jyk7XG4gIH1cblxuICBnZXROdW1Sb3dzKCkge1xuICAgIC8vIGN1cnJlbnRseSBmZXRjaGVkIGZyb20gc2VydmVyP1xuICAgIHJldHVybiB0aGlzLnBtLkdldCgnR2V0TnVtUm93cycpO1xuICB9XG5cbiAgZ2V0U2VsZWN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnBtLkdldCgnR2V0U2VsZWN0aW9uJyk7XG4gIH1cblxuICBfbmF2aWdhdGUobWV0aG9kKSB7XG4gICAgaWYgKCF0aGlzLmNhbkludm9rZU1ldGhvZChtZXRob2QpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IHJldCA9IHRoaXMucG0uRXhlY3V0ZU1ldGhvZCgnSW52b2tlTWV0aG9kJywgbWV0aG9kKTtcbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgbmV4dFJlY29yZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmF2aWdhdGUodGhpcy5pc0xpc3RBcHBsZXQgPyAnR290b05leHQnIDogJ0dvdG9OZXh0U2V0Jyk7XG4gIH1cblxuICBuZXh0UmVjb3JkU2V0KCkge1xuICAgIGlmICghdGhpcy5pc0xpc3RBcHBsZXQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX25hdmlnYXRlKCdHb3RvTmV4dFNldCcpO1xuICB9XG5cbiAgcG9zaXRpb25PblJvdyhpbmRleCkge1xuICAgIGlmICh0aGlzLmlzTGlzdEFwcGxldCkge1xuICAgICAgaWYgKCF0aGlzLnBtLkV4ZWN1dGVNZXRob2QoJ0Nhbkludm9rZU1ldGhvZCcsICdQb3NpdGlvbk9uUm93JykpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICAvLyBzZWVtcyB0aGlzIGNoZWNrIGlzIHJlZHVuZGFudFxuICAgICAgLy8gaWYgKHRoaXMuZ2V0TnVtUm93cygpIDwgaW5kZXggKyAxKSB7IC8vXG4gICAgICAvLyAgIHJldHVybiBmYWxzZTtcbiAgICAgIC8vIH1cbiAgICAgIGlmICh0aGlzLmdldFJvd0xpc3RSb3dDb3VudCgpIDwgaW5kZXggKyAxKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtpbmRleH0gaXMgZXF1YWwvaGlnaGVyIHRoYW4gYW1vdW50IG9mIHJlY29yZHMgaW4gdGhlIGFwcGxldCAke3RoaXMuZ2V0Um93TGlzdFJvd0NvdW50KCl9YCk7XG4gICAgICB9XG4gICAgICAvLyB0b2RvIDogaWYgd2UgZ290IHRvIHRoaXMgcG9pbnRcbiAgICAgIC8vICBzaG91bGQgd2UgY2hlY2sgR2V0QWN0aXZlQ29udHJvbCAoYXBwbGV0LnByb3RvdHlwZS5JbnZva2VNZXRob2QpXG4gICAgICAvLyAgYW5kIG51bGxpZnkgaXQgaWYgYWN0aXZlP1xuICAgICAgcmV0dXJuIHRoaXMucG0uRXhlY3V0ZU1ldGhvZCgnSGFuZGxlUm93U2VsZWN0JywgaW5kZXgpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwcmV2UmVjb3JkKCkge1xuICAgIGlmICh0aGlzLmlzTGlzdEFwcGxldCkge1xuICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb25PblJvdyh0aGlzLnBtLkdldCgnR2V0U2VsZWN0aW9uJykgLSAxKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX25hdmlnYXRlKCdHb3RvUHJldmlvdXNTZXQnKTtcbiAgfVxuXG4gIHByZXZSZWNvcmRTZXQoKSB7XG4gICAgaWYgKCF0aGlzLmlzTGlzdEFwcGxldCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fbmF2aWdhdGUoJ0dvdG9QcmV2aW91c1NldCcpO1xuICB9XG5cbiAgbmV3UmVjb3JkKGNiKSB7XG4gICAgLy8gdG9kbzogc2hvdWxkIGl0IGJlIHRoZSBzYW1lIGFzIFdyaXRlUmVjb3JkP1xuICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHRoaXMuX25ld1JlY29yZChyZXNvbHZlKSk7XG4gICAgcmV0dXJuIHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJyA/IHByb21pc2UudGhlbihjYikgOiBwcm9taXNlO1xuICB9XG5cbiAgX25ld1JlY29yZChjYikge1xuICAgIHJldHVybiB0aGlzLnBtLkV4ZWN1dGVNZXRob2QoJ0ludm9rZU1ldGhvZCcsICdOZXdSZWNvcmQnLCBudWxsLCB7XG4gICAgICBhc3luYzogdHJ1ZSxcbiAgICAgIGNiLFxuICAgIH0pO1xuICB9XG5cbiAgbmV3UmVjb3JkU3luYygpIHtcbiAgICByZXR1cm4gdGhpcy5wbS5FeGVjdXRlTWV0aG9kKCdJbnZva2VNZXRob2QnLCAnTmV3UmVjb3JkJyk7XG4gIH1cblxuICB3cml0ZVJlY29yZChjYiwgY2JlcnIpIHtcbiAgICBsZXQgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHRoaXMuX3dyaXRlUmVjb3JkKCguLi5hcmdzKSA9PiB7XG4gICAgICAvLyBkbyB3ZSBhbHdheXMgaGF2ZSB0aHJlZSBpbnB1dCBhcmd1bWVudHMsIGFuZCB0aGUgdGhpcmQgYXJndW1lbnQgaXNcbiAgICAgIGlmIChhcmdzWzJdLkdldFByb3BlcnR5KCdTdGF0dXMnKSA9PT0gJ0NvbXBsZXRlZCcpIHtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVqZWN0KCk7XG4gICAgICB9XG4gICAgfSkpO1xuICAgIHByb21pc2UgPSB0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicgPyBwcm9taXNlLnRoZW4oY2IpIDogcHJvbWlzZTtcbiAgICBwcm9taXNlID0gdHlwZW9mIGNiZXJyID09PSAnZnVuY3Rpb24nID8gcHJvbWlzZS5jYXRjaChjYmVycikgOiBwcm9taXNlO1xuICAgIHJldHVybiBwcm9taXNlO1xuICB9XG5cbiAgX3dyaXRlUmVjb3JkKGNiKSB7XG4gICAgcmV0dXJuIHRoaXMucG0uRXhlY3V0ZU1ldGhvZCgnSW52b2tlTWV0aG9kJywgJ1dyaXRlUmVjb3JkJywgbnVsbCwge1xuICAgICAgYXN5bmM6IHRydWUsXG4gICAgICBzZWxmYnVzeTogdHJ1ZSxcbiAgICAgIGNiLFxuICAgIH0pO1xuICB9XG5cbiAgd3JpdGVSZWNvcmRTeW5jKCkge1xuICAgIHJldHVybiB0aGlzLnBtLkV4ZWN1dGVNZXRob2QoJ0ludm9rZU1ldGhvZCcsICdXcml0ZVJlY29yZCcpO1xuICB9XG5cbiAgZGVsZXRlUmVjb3JkU3luYygpIHtcbiAgICByZXR1cm4gdGhpcy5wbS5FeGVjdXRlTWV0aG9kKCdJbnZva2VNZXRob2QnLCAnRGVsZXRlUmVjb3JkJyk7XG4gIH1cblxuICB1bmRvUmVjb3JkU3luYygpIHtcbiAgICByZXR1cm4gdGhpcy5wbS5FeGVjdXRlTWV0aG9kKCdJbnZva2VNZXRob2QnLCAnVW5kb1JlY29yZCcpO1xuICB9XG5cbiAgc2V0Q29udHJvbFZhbHVlKG5hbWUsIHZhbHVlKSB7XG4gICAgLy8gVE9ETzogSWYgdmFsdWUgaXMgbnVsbCwgbm90aGluZyBoYXBwZW5zLCBzaG91bGQgd2UgY29udmVydCBudWxsIHRvICcnP1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLl9nZXRDb250cm9sKG5hbWUpO1xuICAgIC8vIFRPRE86IENoZWNrIGlmIGNvbnRyb2wgaXMgZm91bmRcbiAgICB2YWx1ZSA9IHRoaXMuX2dldFZhbHVlRm9yQ29udHJvbChjb250cm9sLkdldFVJVHlwZSgpLCB2YWx1ZSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAvLyBUT0RPOiBzaG91bGQgd2UgdXNlIFNldENlbGxWYWx1ZSBmb3IgbGlzdCBhcHBsZXRzP1xuICAgIGNvbnN0IHJldCA9IHRoaXMuX3NldENvbnRyb2xWYWx1ZUludGVybmFsKGNvbnRyb2wsIHZhbHVlKTtcbiAgICBpZiAoIXJldCkge1xuICAgICAgY29uc29sZS5sb2coYFZhbHVlICR7dmFsdWV9IHdhcyBub3Qgc2V0IGZvciAke2NvbnRyb2wuR2V0TmFtZSgpfWApOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIF9zZXRDb250cm9sVmFsdWVJbnRlcm5hbChjb250cm9sLCB2YWx1ZSkge1xuICAgIHRoaXMucG0uT25Db250cm9sRXZlbnQodGhpcy5jb25zdHMuZ2V0KCdQSFlFVkVOVF9DT05UUk9MX0ZPQ1VTJyksIGNvbnRyb2wpO1xuICAgIHJldHVybiB0aGlzLnBtLk9uQ29udHJvbEV2ZW50KHRoaXMuY29uc3RzLmdldCgnUEhZRVZFTlRfQ09OVFJPTF9CTFVSJyksIGNvbnRyb2wsIHZhbHVlKTtcbiAgfVxuXG4gIF92YWxpZGF0ZVBpY2tDb250cm9sKGNvbnRyb2wsIGlzU3RhdGljKSB7XG4gICAgLy8gUG9zc2libGUgcmVzdWx0czpcbiAgICAvLyBubyBwaWNrXG4gICAgLy8gc3RhdGljIHBpY2tcbiAgICAvLyBkeW5hbWljIHBpY2tcbiAgICAvLyBwaWNrXG4gICAgLy8gbXZnXG4gICAgLy8gP1xuXG4gICAgY29uc3QgaXNTdGF0aWNQaWNrID0gJzEnID09PSBjb250cm9sLklzU3RhdGljQm91bmRlZCgpO1xuICAgIGNvbnN0IHVpVHlwZSA9IGNvbnRyb2wuR2V0VUlUeXBlKCk7XG5cbiAgICBpZiAoaXNTdGF0aWMpIHsgLy8gY2FsbGVkIGdldFN0YXRpY0xPVlxuICAgICAgaWYgKCFpc1N0YXRpY1BpY2spIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgY29uc29sZS53YXJuKGBbTjE5XVRoZSBnZXRTdGF0aWNMT1YgY2FsbGVkIGZvciBub3Qgc3RhdGljIGNvbnRyb2wgLSAke3VpVHlwZX0uIFVzZSBnZXREeW5hbWljTE9WIG9yIHBpY2svbXZnYCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHsgLy8gY2FsbGVkIGdldER5bmFtaWNMT1ZcbiAgICAgIGlmIChpc1N0YXRpY1BpY2spIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdbTjE5XVRoZSBnZXREeW5hbWljTE9WIGNhbGxlZCBmb3Igc3RhdGljIGNvbnRyb2wuJyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMuY29uc3RzLmdldCgnU1dFX0NUUkxfQ09NQk9CT1gnKSAhPT0gdWlUeXBlKSB7IC8vIHRoZSBjb250cm9sIGlzIG5vdCBcIkpDb21ib0JveFwiXG4gICAgICAgIHN3aXRjaCAodWlUeXBlKSB7XG4gICAgICAgICAgY2FzZSB0aGlzLmNvbnN0cy5nZXQoJ1NXRV9DVFJMX1BJQ0snKTogLy8gUGlja1xuICAgICAgICAgIGNhc2UgdGhpcy5jb25zdHMuZ2V0KCdTV0VfQ1RSTF9NVkcnKTogLy8gTVZHXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICAgICAgY29uc29sZS53YXJuKGBbTjE5XVlvdSBuZWVkIHRvIHVzZSB0aGUgcG9wdXBzIGluc3RlYWQgb2YgZ2V0RHluYW1pY0xPViAtICR7dWlUeXBlfS5gKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICAgICAgY29uc29sZS53YXJuKGBbTjE5XVByb2JhYmx5IGdldER5bmFtaWNMT1YgaXMgbm90IGdvaW5nIHRvIHdvcmsgZm9yIHRoaXMgY29udHJvbCAtICR7dWlUeXBlfS5gKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldER5bmFtaWNMT1YoY29udHJvbE5hbWUpIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5fZ2V0Q29udHJvbChjb250cm9sTmFtZSk7XG4gICAgdGhpcy5fdmFsaWRhdGVQaWNrQ29udHJvbChjb250cm9sLCBmYWxzZSk7XG4gICAgY29uc3QgY29udHJvbElucHV0TmFtZSA9IGNvbnRyb2wuR2V0SW5wdXROYW1lKCk7XG4gICAgdGhpcy5sb3ZbY29udHJvbElucHV0TmFtZV0gPSB7fTtcbiAgICBjb25zdCBwcyA9IFNpZWJlbEFwcC5TX0FwcC5OZXdQcm9wZXJ0eVNldCgpO1xuICAgIHBzLlNldFByb3BlcnR5KCdTV0VGaWVsZCcsIGNvbnRyb2xJbnB1dE5hbWUpO1xuICAgIHBzLlNldFByb3BlcnR5KCdTV0VKSScsIGZhbHNlKTtcbiAgICB0aGlzLl9zZXRBY3RpdmVDb250cm9sKG51bGwpOyAvLyB0byBwcmV2ZW50IFVwZGF0ZVBpY2tcbiAgICB0aGlzLnBtLkV4ZWN1dGVNZXRob2QoJ0ludm9rZU1ldGhvZCcsICdHZXRRdWlja1BpY2tJbmZvJywgcHMpO1xuICAgIHJldHVybiB0aGlzLmxvdltjb250cm9sSW5wdXROYW1lXTtcbiAgfVxuXG4gIGdldFN0YXRpY0xPVihjb250cm9sTmFtZSkge1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLl9nZXRDb250cm9sKGNvbnRyb2xOYW1lKTtcbiAgICB0aGlzLl92YWxpZGF0ZVBpY2tDb250cm9sKGNvbnRyb2wsIHRydWUpO1xuICAgIGNvbnN0IHJldCA9IFtdO1xuICAgIGNvbnN0IGFyciA9IE4xOWJhc2VBcHBsZXQuR2V0U3RhdGljTE9WKGNvbnRyb2wuR2V0UmFkaW9Hcm91cFByb3BTZXQoKS5jaGlsZEFycmF5KTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgcmV0LnB1c2goYXJyW2ldLkRpc3BsYXlOYW1lKTtcbiAgICB9XG4gICAgcmV0dXJuIHJldC5zb3J0KCk7XG4gIH1cblxuICBfZ2V0Q29udHJvbFZhbHVlKGNvbnRyb2xVaVR5cGUsIHZhbHVlKSB7XG4gICAgLy8gdG9kbzogd2hhdCBhYm91dCBkYXRldGltZT9cbiAgICBpZiAodGhpcy5jb25zdHMuZ2V0KCdTV0VfQ1RSTF9DSEVDS0JPWCcpID09PSBjb250cm9sVWlUeXBlKSB7XG4gICAgICAvLyBjb252ZXJ0IFkvTi9udWxsIC0+IHRydWUvZmFsc2UgLy8gd2hhdCBhYm91dCBudWxsXG4gICAgICB0aGlzLmJvb2xPYmplY3QuU2V0QXNTdHJpbmcodmFsdWUpO1xuICAgICAgcmV0dXJuIHRoaXMuYm9vbE9iamVjdC5HZXRWYWx1ZSgpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICAvLyB0aGlzIGlzIGEgdGVtcCBtZXRob2QgdG8gc3VwcG9ydCB0aGUgZGVtbyB3aGVyZVxuICAvLyBTaWViZWwgYW5kIGN1c3RvbSByZW5kZXJlZCBhcHBsZXQgY29leGlzdFxuICBfZ2V0RmllbGRUb0NvbnRyb2xNYXAoX2NvbnRyb2xzKSB7XG4gICAgY29uc3QgcmV0ID0ge307XG4gICAgY29uc3QgYXBwbGV0Q29udHJvbHMgPSB0aGlzLl9yZXR1cm5Db250cm9scygpO1xuICAgIGNvbnN0IGFyciA9IE9iamVjdC5rZXlzKF9jb250cm9scyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGNvbnRyb2wgPSBhcHBsZXRDb250cm9sc1thcnJbaV1dO1xuICAgICAgcmV0W2NvbnRyb2wuR2V0RmllbGROYW1lKCldID0ge1xuICAgICAgICBuYW1lOiBjb250cm9sLkdldE5hbWUoKSxcbiAgICAgICAgaXNQb3N0Q2hhbmdlczogY29udHJvbC5Jc1Bvc3RDaGFuZ2VzKCksXG4gICAgICAgIHVpVHlwZTogY29udHJvbC5HZXRVSVR5cGUoKSxcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICBnZXRDdXJyZW50UmVjb3JkKHJhdykge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5nZXRTZWxlY3Rpb24oKTtcbiAgICAvLyB0b2RvOiBjaGVjayBpZiByZWNvcmRcbiAgICAvLyB0b2RvOiBtYWtlIGEgY29weSBvZiByZXR1cm5lZCBvYmplY3QgKHRvIGF2b2lkIHRoZSBhY2NpZGVudGFsIG1vZGlmaWNhdGlvbiBvZiB0aGUgcmVjb3Jkc2V0KVxuICAgIGlmIChyYXcpIHtcbiAgICAgIHJldHVybiB0aGlzLnBtLkdldCgnR2V0UmF3UmVjb3JkU2V0JylbaW5kZXhdO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5wbS5HZXQoJ0dldFJlY29yZFNldCcpW2luZGV4XTtcbiAgfVxuXG4gIGNhbGN1bGF0ZUN1cnJlbnRSZWNvcmRTdGF0ZSgpIHtcbiAgICAvLyB0b2RvOiBkbyB3ZSBuZWVkIHRvIGRlbGV0ZSBwZW5kaW5nXG4gICAgLy8gMCAtIE5vIHJlY29yZHMgZGlzcGxheWVkXG4gICAgLy8gMSAtIFJlY29yZCBpcyBiZWluZyBjcmVhdGVkXG4gICAgLy8gMiAtIFJlY29yZCBpcyBiZWluZyBlZGl0ZWRcbiAgICAvLyAzIC0gSXMgaW4gcXVlcnkgbW9kZVxuICAgIC8vIDQgLSBSZWNvcmQgaXMgZGlzcGxheWVkLFxuICAgIC8vIDUgLSBSZWNvcmQgaXMgcmVhZC1vbmx5XG5cbiAgICBjb25zdCBiYyA9IHRoaXMucG0uR2V0KCdHZXRCdXNDb21wJyk7XG5cbiAgICBpZiAodGhpcy5wbS5HZXQoJ0lzSW5RdWVyeU1vZGUnKSkge1xuICAgICAgLy8gaWYgbm8gcmVjb3JkcyBhbmQgdGhlIGVudGVyZWQgdGhlIHF1ZXJ5IG1vZGUsXG4gICAgICAvLyBzZWxlY3Rpb24gaXMgLTEsIHRoZXJlZm9yZSB3ZSBuZWVkIHRvIGNoZWNrIHF1ZXJ5IG1vZGUgZmlyc3RcbiAgICAgIHJldHVybiAzO1xuICAgIH1cbiAgICBpZiAodGhpcy5nZXRTZWxlY3Rpb24oKSA8IDApIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBpZiAoYmMuSXNJbnNlcnRQZW5kaW5nKCkpIHsgLy8gc2VlbXMgaW5zZXJ0UGVuZGluZyBnaXZlcyBtb3JlIGNvcnJlY3QgdmFsdWVcbiAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgICBpZiAoYmMuSXNDb21taXRQZW5kaW5nKCkpIHtcbiAgICAgIHJldHVybiAyO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuY2FuSW52b2tlTWV0aG9kKCdXcml0ZVJlY29yZCcpKSB7XG4gICAgICAvLyBvciBtYXliZSBiZXR0ZXIgdG8gdXNlIHRoZSBjYW5VcGRhdGUgcHJvcGVydHkgb2YgdGhlIGJjXG4gICAgICByZXR1cm4gNTtcbiAgICB9XG5cbiAgICByZXR1cm4gNDsgLy8gdGhpcyBpcyBhIGRlZmF1bHQgZmFsbGJhY2s7XG4gIH1cblxuICBfZ2V0TWV0aG9kcygpIHtcbiAgICBjb25zdCBtZXRob2RzID0ge307XG4gICAgY29uc3QgYXBwbGV0Q29udHJvbHMgPSB0aGlzLnBtLkdldCgnR2V0Q29udHJvbHMnKTsgLy8gZXZlbiBmbyBsaXN0IGFwcGxldFxuICAgIGNvbnN0IGFyciA9IE9iamVjdC5rZXlzKGFwcGxldENvbnRyb2xzKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgY29udHJvbE1ldGhvZCA9IGFwcGxldENvbnRyb2xzW2FycltpXV0uR2V0TWV0aG9kTmFtZSgpO1xuICAgICAgaWYgKHR5cGVvZiBjb250cm9sTWV0aG9kICE9PSAndW5kZWZpbmVkJyAmJiBjb250cm9sTWV0aG9kICE9PSAnJykge1xuICAgICAgICBtZXRob2RzW2NvbnRyb2xNZXRob2RdID0ge307XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtZXRob2RzO1xuICB9XG5cbiAgZ2V0Q3VycmVudFJlY29yZE1vZGVsKF9jb250cm9scywgX21ldGhvZHMpIHtcbiAgICBpZiAoIV9jb250cm9scykge1xuICAgICAgX2NvbnRyb2xzID0gdGhpcy5nZXRDb250cm9scygpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgfVxuICAgIGlmICghX21ldGhvZHMpIHtcbiAgICAgIF9tZXRob2RzID0gdGhpcy5fZ2V0TWV0aG9kcygpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgfVxuICAgIF9jb250cm9scy5zdGF0ZSA9IHRoaXMuY2FsY3VsYXRlQ3VycmVudFJlY29yZFN0YXRlKCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBfY29udHJvbHMuaWQgPSAnJzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIGxldCBvYmogPSB7fTtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuZ2V0U2VsZWN0aW9uKCk7XG4gICAgaWYgKGluZGV4ID4gLTEgJiYgX2NvbnRyb2xzLnN0YXRlICE9PSAzKSB7IC8vIGFkZGVkIF9jb250cm9scy5zdGF0ZSAhPT0gMzsgd2UgZG9uJ3QgbmVlZCBpZCBpbiBxdWVyeSBtb2RlXG4gICAgICBvYmogPSB0aGlzLmdldFJlY29yZFNldCgpW2luZGV4XTtcbiAgICAgIF9jb250cm9scy5pZCA9IHRoaXMuZ2V0UmF3UmVjb3JkU2V0KClbaW5kZXhdLklkOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgfVxuICAgIGxldCBhcnIgPSBPYmplY3Qua2V5cyhfY29udHJvbHMpO1xuICAgIGNvbnN0IGFwcGxldENvbnRyb2xzID0gdGhpcy5fcmV0dXJuQ29udHJvbHMoKTtcbiAgICAvLyBwb3B1bGF0ZSBjb250cm9sc1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBjb250cm9sID0gYXBwbGV0Q29udHJvbHNbYXJyW2ldXTtcbiAgICAgIGlmICh0eXBlb2YgY29udHJvbCAhPT0gJ3VuZGVmaW5lZCcpIHsgLy8ganVzdCBpZiBzb21lYm9keSBzZW5kcyBpbmNvcnJlY3QgbmFtZSBvZiB0aGUgY29udHJvbFxuICAgICAgICBjb25zdCBjb250cm9sTmFtZSA9IGNvbnRyb2wuR2V0TmFtZSgpO1xuICAgICAgICBjb25zdCBmaWVsZE5hbWUgPSBjb250cm9sLkdldEZpZWxkTmFtZSgpO1xuICAgICAgICBpZiAoX2NvbnRyb2xzLnN0YXRlID4gMCkge1xuICAgICAgICAgIF9jb250cm9sc1thcnJbaV1dID0geyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICAgICAgICB2YWx1ZTogdGhpcy5fZ2V0Q29udHJvbFZhbHVlKGNvbnRyb2wuR2V0VUlUeXBlKCksIG9ialtmaWVsZE5hbWVdKSxcbiAgICAgICAgICAgIHJlYWRvbmx5OiAhdGhpcy5wbS5FeGVjdXRlTWV0aG9kKCdDYW5VcGRhdGUnLCBjb250cm9sTmFtZSksXG4gICAgICAgICAgICBpc0xpbms6IHRoaXMucG0uRXhlY3V0ZU1ldGhvZCgnQ2FuTmF2aWdhdGUnLCBjb250cm9sTmFtZSksXG4gICAgICAgICAgICBsYWJlbDogY29udHJvbC5HZXREaXNwbGF5TmFtZSgpLFxuICAgICAgICAgICAgaXNQb3N0Q2hhbmdlczogY29udHJvbC5Jc1Bvc3RDaGFuZ2VzKCksXG4gICAgICAgICAgICByZXF1aXJlZDogdGhpcy5faXNSZXF1aXJlZChjb250cm9sLkdldElucHV0TmFtZSgpKSxcbiAgICAgICAgICAgIG1heFNpemU6IGNvbnRyb2wuR2V0TWF4U2l6ZSgpLFxuICAgICAgICAgICAgZmllbGROYW1lLFxuICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7IC8vIG5vIHJlY29yZCBkaXNwbGF5ZWRcbiAgICAgICAgICBfY29udHJvbHNbYXJyW2ldXSA9IHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICAgICAgdmFsdWU6ICcnLFxuICAgICAgICAgICAgcmVhZG9ubHk6IHRydWUsXG4gICAgICAgICAgICBpc0xpbms6IGZhbHNlLFxuICAgICAgICAgICAgbGFiZWw6IGNvbnRyb2wuR2V0RGlzcGxheU5hbWUoKSxcbiAgICAgICAgICAgIGlzUG9zdENoYW5nZXM6IGNvbnRyb2wuSXNQb3N0Q2hhbmdlcygpLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRoaXMuX2lzUmVxdWlyZWQoY29udHJvbC5HZXRJbnB1dE5hbWUoKSksXG4gICAgICAgICAgICBtYXhTaXplOiBjb250cm9sLkdldE1heFNpemUoKSxcbiAgICAgICAgICAgIGZpZWxkTmFtZSxcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC8vIHBvcHVsYXRlIG1ldGhvZHNcbiAgICBpZiAoX21ldGhvZHMpIHtcbiAgICAgIGFyciA9IE9iamVjdC5rZXlzKF9tZXRob2RzKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIF9tZXRob2RzW2FycltpXV0gPSB0aGlzLmNhbkludm9rZU1ldGhvZChhcnJbaV0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICB9XG4gICAgfVxuICAgIC8vIHJldHVybiB0cnVlO1xuICAgIHJldHVybiB7XG4gICAgICBjb250cm9sczogX2NvbnRyb2xzLFxuICAgICAgbWV0aG9kczogX21ldGhvZHMsXG4gICAgfTtcbiAgfVxuXG4gIF9maW5kQ29udHJvbFRvRW50ZXJTZWFyY2hFeHByKCkge1xuICAgIGNvbnN0IGFwcGxldENvbnRyb2xzID0gdGhpcy5fcmV0dXJuQ29udHJvbHMoKTtcbiAgICBjb25zdCBhcnIgPSBPYmplY3Qua2V5cyhhcHBsZXRDb250cm9scyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGNvbnRyb2wgPSBhcHBsZXRDb250cm9sc1thcnJbaV1dO1xuICAgICAgY29uc3QgY29udHJvbFVpVHlwZSA9IGNvbnRyb2wuR2V0VUlUeXBlKCk7XG4gICAgICBpZiAoIXRoaXMuX2lzU2tpcENvbnRyb2woY29udHJvbFVpVHlwZSkpIHtcbiAgICAgICAgLy8gc2tpcHBpbmcgYWxzbyBKQ2hlY2tib3hcbiAgICAgICAgLy8gdG9kbzogY2hlY2sgZG8gd2UgbmVlZCB0byBza2lwIGFsc28gZGF0ZT9cbiAgICAgICAgaWYgKGNvbnRyb2xVaVR5cGUgIT09IHRoaXMuY29uc3RzLmdldCgnU1dFX0NUUkxfQ0hFQ0tCT1gnKSkge1xuICAgICAgICAgIHJldHVybiBjb250cm9sO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcignY2Fubm90IGZpbmQgYSBjb250cm9sIGZvciBxdWVyeScpO1xuICB9XG5cbiAgX25ld1F1ZXJ5KCkge1xuICAgIHJldHVybiB0aGlzLnBtLkV4ZWN1dGVNZXRob2QoJ0ludm9rZU1ldGhvZCcsICdOZXdRdWVyeScpO1xuICB9XG5cbiAgcXVlcnlCeVNlYXJjaEV4cHJTeW5jKGV4cHIpIHtcbiAgICB0aGlzLl9uZXdRdWVyeSgpOyAvLyA/XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuX2ZpbmRDb250cm9sVG9FbnRlclNlYXJjaEV4cHIoKTtcbiAgICB0aGlzLl9zZXRDb250cm9sVmFsdWVJbnRlcm5hbChjb250cm9sLCBleHByKTtcbiAgICB0aGlzLnBtLkV4ZWN1dGVNZXRob2QoJ0ludm9rZU1ldGhvZCcsICdFeGVjdXRlUXVlcnknKTtcbiAgICByZXR1cm4gdGhpcy5nZXRSZWNvcmRTZXQoKS5sZW5ndGg7XG4gIH1cblxuICBxdWVyeUJ5SWRTeW5jKHJvd0lkKSB7XG4gICAgbGV0IGV4cHI7XG4gICAgaWYgKEFycmF5ID09PSByb3dJZC5jb25zdHJ1Y3Rvcikge1xuICAgICAgZXhwciA9IHJvd0lkLm1hcChlbCA9PiBgSWQ9XCIke2VsfVwiYCkuam9pbignIE9SICcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBleHByID0gYElkPVwiJHtyb3dJZH1cImA7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnF1ZXJ5QnlTZWFyY2hFeHByU3luYyhleHByKTtcbiAgfVxuXG4gIHF1ZXJ5QnlJZChyb3dJZCwgY2IpIHtcbiAgICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB0aGlzLl9xdWVyeUJ5SWQocm93SWQsIHJlc29sdmUpKTtcbiAgICBjb25zdCByZXQgPSBwcm9taXNlLnRoZW4oKCkgPT4gdGhpcy5nZXRSZWNvcmRTZXQoKS5sZW5ndGgpO1xuICAgIHJldHVybiB0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicgPyByZXQudGhlbihjYikgOiByZXQ7XG4gIH1cblxuICBfcXVlcnlCeUlkKHJvd0lkLCBjYikge1xuICAgIHRoaXMuX25ld1F1ZXJ5KCk7IC8vID9cblxuICAgIGNvbnN0IGFpID0ge1xuICAgICAgc2NvcGU6IHRoaXMsXG4gICAgICBhc3luYzogdHJ1ZSxcbiAgICAgIHNlbGZidXN5OiB0cnVlLFxuICAgIH07XG4gICAgaWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYWkuY2IgPSBjYjtcbiAgICB9XG5cbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5fZmluZENvbnRyb2xUb0VudGVyU2VhcmNoRXhwcigpO1xuICAgIHRoaXMuX3NldENvbnRyb2xWYWx1ZUludGVybmFsKGNvbnRyb2wsIGBJZD1cIiR7cm93SWR9XCJgKTtcbiAgICByZXR1cm4gdGhpcy5wbS5FeGVjdXRlTWV0aG9kKCdJbnZva2VNZXRob2QnLCAnRXhlY3V0ZVF1ZXJ5JywgbnVsbCwgYWkpO1xuICB9XG5cbiAgcXVlcnkocGFyYW1zLCBjYikge1xuICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHRoaXMuX3F1ZXJ5KHBhcmFtcywgcmVzb2x2ZSkpO1xuICAgIGNvbnN0IHJldCA9IHByb21pc2UudGhlbigoKSA9PiB0aGlzLmdldFJlY29yZFNldCgpLmxlbmd0aCk7XG4gICAgcmV0dXJuIHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJyA/IHJldC50aGVuKGNiKSA6IHJldDtcbiAgfVxuXG4gIF9xdWVyeShwYXJhbXMsIGNiKSB7XG4gICAgLy8gVE9ETzogY2hlY2sgaWYgaXQgaXMgYWxyZWFkeSBpbiBxdWVyeSBtb2RlIHRvIGF2b2lkIGNhbGxpbmcgdGhlIG5ldyBxdWVyeSBhZ2FpblxuICAgIC8vIG9yIGFjY2VwdCB0aGUgaW5wdXQgcGFyYW1ldGVyIHRvIHNraXAgY2FsbGluZyB0aGUgbmV3IHF1ZXJ5P1xuICAgIC8vIG9yIG1heWJlIGJldHRlciB0byBjYW5jZWwgdGhlIGV4aXN0aW5nIHF1ZXJ5P1xuICAgIHRoaXMuX25ld1F1ZXJ5KCk7XG5cbiAgICBjb25zdCBhaSA9IHtcbiAgICAgIHNjb3BlOiB0aGlzLFxuICAgICAgYXN5bmM6IHRydWUsXG4gICAgICBzZWxmYnVzeTogdHJ1ZSxcbiAgICB9O1xuICAgIGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGFpLmNiID0gY2I7XG4gICAgfVxuXG4gICAgY29uc3QgYXJyID0gT2JqZWN0LmtleXMocGFyYW1zKTtcbiAgICBjb25zdCBfY29udHJvbHMgPSB0aGlzLl9yZXR1cm5Db250cm9scygpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBjb250cm9sID0gX2NvbnRyb2xzW2FycltpXV07XG4gICAgICBpZiAoY29udHJvbCkge1xuICAgICAgICB0aGlzLl9zZXRDb250cm9sVmFsdWVJbnRlcm5hbChjb250cm9sLCB0aGlzLl9nZXRWYWx1ZUZvckNvbnRyb2woY29udHJvbC5HZXRVSVR5cGUoKSwgcGFyYW1zW2FycltpXV0pKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFRoZSBjb250cm9sIFwiJHthcnJbaV19XCIgaXMgbm90IGZvdW5kIWApOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5wbS5FeGVjdXRlTWV0aG9kKCdJbnZva2VNZXRob2QnLCAnRXhlY3V0ZVF1ZXJ5JywgbnVsbCwgYWkpO1xuICB9XG5cbiAgc3RhdGljIFJlcXVlcnkobmFtZSkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSBTaWViZWxBcHAuU19BcHAuR2V0U2VydmljZSgnTjE5IEJTJyk7XG4gICAgaWYgKHNlcnZpY2UpIHtcbiAgICAgIGNvbnN0IGluUHJvcFNldCA9IFNpZWJlbEFwcC5TX0FwcC5OZXdQcm9wZXJ0eVNldCgpO1xuICAgICAgaW5Qcm9wU2V0LlNldFByb3BlcnR5KCduYW1lJywgbmFtZSk7XG4gICAgICBzZXJ2aWNlLkludm9rZU1ldGhvZCgnUmVxdWVyeScsIGluUHJvcFNldCwge30pO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBSZWZyZXNoKG5hbWUpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gU2llYmVsQXBwLlNfQXBwLkdldFNlcnZpY2UoJ04xOSBCUycpO1xuICAgIGlmIChzZXJ2aWNlKSB7XG4gICAgICBjb25zdCBpblByb3BTZXQgPSBTaWViZWxBcHAuU19BcHAuTmV3UHJvcGVydHlTZXQoKTtcbiAgICAgIGluUHJvcFNldC5TZXRQcm9wZXJ0eSgnbmFtZScsIG5hbWUpO1xuICAgICAgc2VydmljZS5JbnZva2VNZXRob2QoJ1JlZnJlc2gnLCBpblByb3BTZXQsIHt9KTtcbiAgICB9XG4gIH1cblxuICBnZXRNVkYoaWRzLCBmaWVsZHMsIHVzZUFjdGl2ZUJPKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHRoaXMuX2dldE1WRihpZHMsIGZpZWxkcywgdXNlQWN0aXZlQk8sIHJlc29sdmUsIHJlamVjdCkpO1xuICB9XG5cbiAgX2dldEZpZWxkTmFtZUZvckNvbnRyb2woY29udHJvbE5hbWUpIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5fZ2V0Q29udHJvbChjb250cm9sTmFtZSk7XG4gICAgLy8gaWYgbm90IGZvdW5kLCB0aGUgaW5wdXQgdmFsdWUgaXMgcmV0dXJuZWRcbiAgICBpZiAoY29udHJvbCkge1xuICAgICAgcmV0dXJuIGNvbnRyb2wuR2V0RmllbGROYW1lKCk7XG4gICAgfVxuICAgIHJldHVybiBjb250cm9sTmFtZTtcbiAgfVxuXG4gIF9nZXRNVkYoaWRzLCBmaWVsZHMsIHVzZUFjdGl2ZUJPLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICBjb25zdCBhcnIgPSBPYmplY3QuZW50cmllcyhmaWVsZHMpO1xuICAgIGNvbnN0IHBzSW5wdXRzID0gU2llYmVsQXBwLlNfQXBwLk5ld1Byb3BlcnR5U2V0KCk7XG4gICAgcHNJbnB1dHMuU2V0UHJvcGVydHkoJ0JPJywgU2llYmVsQXBwLlNfQXBwLkdldEFjdGl2ZUJ1c09iaigpLkdldE5hbWUoKSk7XG4gICAgcHNJbnB1dHMuU2V0UHJvcGVydHkoJ0JDJywgdGhpcy5wbS5HZXQoJ0dldEJ1c0NvbXAnKS5HZXROYW1lKCkpO1xuICAgIHBzSW5wdXRzLlNldFByb3BlcnR5KCdVc2VBY3RpdmVCTycsIHVzZUFjdGl2ZUJPID8gJ1knIDogJ04nKTtcbiAgICBwc0lucHV0cy5TZXRQcm9wZXJ0eSgnSUQnLCBpZHMuam9pbignLCcpKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgcHMgPSBTaWViZWxBcHAuU19BcHAuTmV3UHJvcGVydHlTZXQoKTtcbiAgICAgIHBzLlNldFR5cGUodGhpcy5fZ2V0RmllbGROYW1lRm9yQ29udHJvbChhcnJbaV1bMF0pKTtcbiAgICAgIHBzLlNldFByb3BlcnR5KCdGaWVsZHMnLCBhcnJbaV1bMV0uam9pbignLCcpKTtcbiAgICAgIHBzSW5wdXRzLkFkZENoaWxkKHBzLkNsb25lKCkpO1xuICAgIH1cbiAgICBjb25zdCBicyA9IFNpZWJlbEFwcC5TX0FwcC5HZXRTZXJ2aWNlKCdOMTkgQlMnKTtcbiAgICBjb25zdCBhaSA9IHtcbiAgICAgIGFzeW5jOiB0cnVlLFxuICAgICAgc2VsZmJ1c3k6IHRydWUsXG4gICAgICBzY29wZTogdGhpcyxcbiAgICAgIGVycmNiOiAoKSA9PiByZWplY3QoKSxcbiAgICAgIGNiOiAobWV0aG9kTmFtZSwgSW5wdXRzLCBwc091dHB1dHMpID0+IHtcbiAgICAgICAgY29uc3QgeyBjaGlsZEFycmF5IH0gPSBwc091dHB1dHMuR2V0Q2hpbGRCeVR5cGUoJ1Jlc3VsdFNldCcpIHx8IHt9OyAvLyB0byBiZSBwcm90ZWN0ZWRkIHdoZW4gbm8gcmVzdWx0c1xuICAgICAgICBjb25zdCByZXQgPSB7fTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoY2hpbGRBcnJheSB8fCBbXSkubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICByZXRbY2hpbGRBcnJheVtpXS5HZXRUeXBlKCldID0ge307XG4gICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjaGlsZEFycmF5W2ldLmNoaWxkQXJyYXkubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IGVsID0gY2hpbGRBcnJheVtpXS5jaGlsZEFycmF5W2pdO1xuICAgICAgICAgICAgcmV0W2NoaWxkQXJyYXlbaV0uR2V0VHlwZSgpXVtlbC5HZXRUeXBlKCldID0gZWwuY2hpbGRBcnJheS5tYXAoKHJlYykgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBwcmltYXJ5ID0gcmVjLnByb3BBcnJheVsnU1NBIFByaW1hcnkgRmllbGQnXTtcbiAgICAgICAgICAgICAgdGhpcy5ib29sT2JqZWN0LlNldEFzU3RyaW5nKHByaW1hcnkpO1xuICAgICAgICAgICAgICByZWMucHJvcEFycmF5WydTU0EgUHJpbWFyeSBGaWVsZCddID0gdGhpcy5ib29sT2JqZWN0LkdldFZhbHVlKCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHJlYy5wcm9wQXJyYXkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc29sdmUocmV0KTtcbiAgICAgIH0sXG4gICAgfTtcbiAgICByZXR1cm4gYnMuSW52b2tlTWV0aG9kKCdSZXR1cm5NVkdGaWVsZHMnLCBwc0lucHV0cywgYWkpO1xuICB9XG5cbiAgc2F2ZVByZWYobmFtZSwgdmFsdWUpIHtcbiAgICAvLyB2YWx1ZSBpcyBhIHN0cmluZ1xuICAgIC8vIHZhbHVlIGlzIGJvdW5kIHRvIGFwcGxldCBhbmQgdmlld1xuICAgIGNvbnN0IHBzSW5wdXQgPSBTaWViZWxBcHAuU19BcHAuTmV3UHJvcGVydHlTZXQoKTtcbiAgICBwc0lucHV0LlNldFByb3BlcnR5KCdLZXknLCBuYW1lKTtcbiAgICBwc0lucHV0LlNldFByb3BlcnR5KG5hbWUsIHZhbHVlKTtcbiAgICB0aGlzLnBtLk9uQ29udHJvbEV2ZW50KFxuICAgICAgdGhpcy5jb25zdHMuZ2V0KCdQSFlFVkVOVF9JTlZPS0VfQ09OVFJPTCcpLFxuICAgICAgdGhpcy5wbS5HZXQodGhpcy5jb25zdHMuZ2V0KCdTV0VfTVRIRF9VUERBVEVfVVNFUl9QUkVGJykpLFxuICAgICAgcHNJbnB1dCxcbiAgICApO1xuICAgIHJldHVybiB0aGlzLnBtLlNldFByb3BlcnR5KG5hbWUsIHZhbHVlKTtcbiAgfVxuXG4gIHJlYWRQcmVmKG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5wbS5HZXQobmFtZSk7XG4gIH1cblxuICBfcmV0cmlldmVEYXRhKGFtb3VudCkgeyAvLyB0ZW1wIG1ldGhvZD9cbiAgICBjb25zdCBkYXRhID0gbmV3IE1hcCgpO1xuXG4gICAgd2hpbGUgKGRhdGEuc2l6ZSA8IGFtb3VudCkge1xuICAgICAgY29uc3QgdGVtcCA9IHRoaXMuZ2V0UmF3UmVjb3JkU2V0KCk7XG5cbiAgICAgIC8vIGF2b2lkIHRoZSBkdXBsaWNhdGVzXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRlbXAubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgZGF0YS5zZXQodGVtcFtpXS5JZCwgdGVtcFtpXSk7XG4gICAgICB9XG5cbiAgICAgIC8vIHdlIGFyZSB1c2luZyBjYW5JbnZva2VNZXRob2QsIGFzIGluIDE2LjAwIG5leHRSZWNvcmRTZXQgYWx3YXlzIHJldHVybnMgdW5kZWZpbmVkXG4gICAgICBpZiAoIXRoaXMuY2FuSW52b2tlTWV0aG9kKCdHb3RvTmV4dFNldCcpKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICB0aGlzLm5leHRSZWNvcmRTZXQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgZGF0YTogWy4uLmRhdGEudmFsdWVzKCldLFxuICAgICAgaGFzTmV4dDogdGhpcy5jYW5JbnZva2VNZXRob2QoJ0dvdG9OZXh0U2V0JyksXG4gICAgfTtcbiAgfVxuXG4gIF9zZXRGaWVsZFZhbHVlKG5hbWUsIHZhbHVlKSB7XG4gICAgY29uc29sZS53YXJuKCdbTjE5XV9zZXRGaWVsZFZhbHVlIHdpbGwgYmUgcmVtb3ZlZCBpbiB0aGUgZnV0dXJlIScpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICB0aGlzLmFwcGxldC5TZXRDb250cm9sVmFsdWVCeU5hbWUobmFtZSwgdmFsdWUpO1xuICAgIHJldHVybiB0aGlzLnBtLkV4ZWN1dGVNZXRob2QoJ0ludm9rZU1ldGhvZCcsICdXcml0ZVJlY29yZCcpO1xuICB9XG5cbiAgZ2V0RmllbGRUb0NvbnRyb2xNYXAoKSB7XG4gICAgdGhpcy5maWVsZFRvQ29udHJvbE1hcCA9IHsgSWQ6ICdJZCcgfTtcbiAgICBjb25zdCBhcHBsZXRDb250cm9scyA9IHRoaXMuX3JldHVybkNvbnRyb2xzKCk7XG4gICAgY29uc3QgYXJyID0gT2JqZWN0LmtleXMoYXBwbGV0Q29udHJvbHMpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBjb250cm9sID0gYXBwbGV0Q29udHJvbHNbYXJyW2ldXTtcbiAgICAgIGNvbnN0IGZpZWxkID0gY29udHJvbC5HZXRGaWVsZE5hbWUoKTtcbiAgICAgIGlmIChmaWVsZCkge1xuICAgICAgICB0aGlzLmZpZWxkVG9Db250cm9sTWFwW2ZpZWxkXSA9IGFycltpXTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZmllbGRUb0NvbnRyb2xNYXA7XG4gIH1cblxuICBnZXRDb250cm9sc1JlY29yZFNldCgpIHtcbiAgICBpZiAoIXRoaXMuZmllbGRUb0NvbnRyb2xNYXApIHtcbiAgICAgIHRoaXMuZ2V0RmllbGRUb0NvbnRyb2xNYXAoKTtcbiAgICB9XG4gICAgLy8gdXNlZCBzbGljZSB0byBhdm9pZCBtb2RpZmljYXRpb24gb2YgdGhlIHJlY29yZCBzZXRcbiAgICBjb25zdCByZXQgPSB0aGlzLmdldFJlY29yZFNldCgpLnNsaWNlKCk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJldC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgcmV0W2ldID0gT2JqZWN0LmtleXMocmV0W2ldKS5maWx0ZXIoZWwgPT4gdGhpcy5maWVsZFRvQ29udHJvbE1hcFtlbF0pLnJlZHVjZSgoYWNjLCBlbCkgPT4gKHtcbiAgICAgICAgLi4uYWNjLFxuICAgICAgICAuLi57IFt0aGlzLmZpZWxkVG9Db250cm9sTWFwW2VsXV06IHJldFtpXVtlbF0gfSxcbiAgICAgIH0pLCB7fSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJldDtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTjE5bm90aWZpY2F0aW9ucyB7XG4gIGNvbnN0cnVjdG9yKHBtLCBjb25zdHMsIGJjSWQpIHtcbiAgICBsZXQgcmVjZWl2ZWROb3RpZmljYXRpb25zID0gW107XG4gICAgdGhpcy50b2tlbiA9IDA7XG4gICAgdGhpcy5zdWJzY3JpYmVycyA9IFtdO1xuICAgIHBtLkF0dGFjaE5vdGlmaWNhdGlvbkhhbmRsZXIoY29uc3RzLmdldCgnU1dFX1BST1BfQkNfTk9USV9CRUdJTicpLCAocHJvcFNldCkgPT4ge1xuICAgICAgaWYgKGJjSWQgPT09IHByb3BTZXQuR2V0UHJvcGVydHkoJ2JjJykpIHtcbiAgICAgICAgcmVjZWl2ZWROb3RpZmljYXRpb25zID0gW107XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBwbS5BdHRhY2hOb3RpZmljYXRpb25IYW5kbGVyKGNvbnN0cy5nZXQoJ1NXRV9QUk9QX0JDX05PVElfTkVXX0FDVElWRV9ST1cnKSwgKHByb3BTZXQpID0+IHtcbiAgICAgIGlmIChiY0lkID09PSBwcm9wU2V0LkdldFByb3BlcnR5KCdiYycpKSB7XG4gICAgICAgIHJlY2VpdmVkTm90aWZpY2F0aW9ucy5wdXNoKCdTV0VfUFJPUF9CQ19OT1RJX05FV19BQ1RJVkVfUk9XJyk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBwbS5BdHRhY2hOb3RpZmljYXRpb25IYW5kbGVyKGNvbnN0cy5nZXQoJ1NXRV9QUk9QX0JDX05PVElfU1RBVEVfQ0hBTkdFRCcpLCAocHJvcFNldCkgPT4ge1xuICAgICAgaWYgKGJjSWQgPT09IHByb3BTZXQuR2V0UHJvcGVydHkoJ2JjJykpIHtcbiAgICAgICAgaWYgKCdjcCcgIT09IHByb3BTZXQuR2V0UHJvcGVydHkoJ3N0YXRlJykpIHtcbiAgICAgICAgICByZWNlaXZlZE5vdGlmaWNhdGlvbnMucHVzaCgnU1dFX1BST1BfQkNfTk9USV9TVEFURV9DSEFOR0VEJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHBtLkF0dGFjaE5vdGlmaWNhdGlvbkhhbmRsZXIoY29uc3RzLmdldCgnU1dFX1BST1BfQkNfTk9USV9ERUxFVEVfUkVDT1JEJyksIChwcm9wU2V0KSA9PiB7XG4gICAgICBpZiAoYmNJZCA9PT0gcHJvcFNldC5HZXRQcm9wZXJ0eSgnYmMnKSkge1xuICAgICAgICByZWNlaXZlZE5vdGlmaWNhdGlvbnMucHVzaCgnU1dFX1BST1BfQkNfTk9USV9ERUxFVEVfUkVDT1JEJyk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBwbS5BdHRhY2hOb3RpZmljYXRpb25IYW5kbGVyKGNvbnN0cy5nZXQoJ1NXRV9QUk9QX0JDX05PVElfTkVXX1JFQ09SRCcpLCAocHJvcFNldCkgPT4ge1xuICAgICAgaWYgKGJjSWQgPT09IHByb3BTZXQuR2V0UHJvcGVydHkoJ2JjJykpIHtcbiAgICAgICAgcmVjZWl2ZWROb3RpZmljYXRpb25zLnB1c2goJ1NXRV9QUk9QX0JDX05PVElfTkVXX1JFQ09SRCcpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcG0uQXR0YWNoTm90aWZpY2F0aW9uSGFuZGxlcihjb25zdHMuZ2V0KCdTV0VfUFJPUF9CQ19OT1RJX0VORCcpLCAocHJvcFNldCkgPT4ge1xuICAgICAgaWYgKGJjSWQgPT09IHByb3BTZXQuR2V0UHJvcGVydHkoJ2JjJykpIHtcbiAgICAgICAgaWYgKHJlY2VpdmVkTm90aWZpY2F0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnN1YnNjcmliZXJzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAvLyB3ZSBhc3N1bWUgdGhhdCB0aGUgZnVuY3Rpb24gZG9lcyBub3QgdGhyb3cgYW4gZXJyb3JcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaWJlcnNbaV0uZnVuYygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc3Vic2NyaWJlKGZ1bmMpIHtcbiAgICBpZiAodHlwZW9mIGZ1bmMgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignZnVuYyBpcyBub3QgYSBmdW5jdGlvbicpO1xuICAgIH1cbiAgICB0aGlzLnRva2VuICs9IDE7XG4gICAgdGhpcy5zdWJzY3JpYmVycy5wdXNoKHsgdG9rZW46IHRoaXMudG9rZW4sIGZ1bmMgfSk7XG4gICAgcmV0dXJuIHRoaXMudG9rZW47XG4gIH1cblxuICB1bnN1YnNjcmliZShzdWJUb2tlbikge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zdWJzY3JpYmVycy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKHN1YlRva2VuID09PSB0aGlzLnN1YnNjcmliZXJzW2ldLnRva2VuKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN1YnNjcmliZXJzLnNwbGljZShpLCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iLCJpbXBvcnQgTjE5YmFzZUFwcGxldCBmcm9tICcuL24xOWJhc2VBcHBsZXQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOMTlwb3B1cEFwcGxldCBleHRlbmRzIE4xOWJhc2VBcHBsZXQge1xuICBjb25zdHJ1Y3RvcihzZXR0aW5ncykge1xuICAgIHN1cGVyKHNldHRpbmdzKTtcbiAgICBjb25zb2xlLmxvZyhgJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWV9IHN0YXJ0ZWQuLi5gKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG5cbiAgICBpZiAodGhpcy5pc0xpc3RBcHBsZXQpIHtcbiAgICAgIHRoaXMucG0uR2V0UmVuZGVyZXIoKS5yZXNpemUgPSAoKSA9PiAwO1xuICAgICAgdGhpcy5wbS5HZXRSZW5kZXJlcigpLkdldFNlbGVjdGVkUm93ID0gKCkgPT4gMDtcbiAgICB9XG4gIH1cblxuICBwaWNrUmVjb3JkKCkge1xuICAgIC8vIHRvZG8gOiBjaGVjayBDYW5Jbm9rZU1ldGhvZCBhbmQvb3IgaXMgaXQgcGlja1xuICAgIHJldHVybiB0aGlzLnBtLkV4ZWN1dGVNZXRob2QoJ0ludm9rZU1ldGhvZCcsICdQaWNrUmVjb3JkJyk7XG4gIH1cblxuICBkZWxldGVSZWNvcmRzKGNiKSB7XG4gICAgLy8gbWV0aG9kIGlzIG5vdCBhbGxvd2VkIHRvIGRlbGV0ZSB0aGUgcHJpbWFyeVxuICAgIC8vICBpbiB0aGlzIGNhc2UgaXQgcmV0dXJucyBcIk1ldGhvZCBEZWxldGVSZWNvcmRzIGlzIG5vdCBhbGxvd2VkIGhlcmVcIiBTQkwtVUlGLTAwMzQ4XG4gICAgLy8gdG9kbzogY2hlY2sgY2FuSW52b2tlTWV0aG9kIGFuZC9vciBpcyBpdCBNVkdcbiAgICBjb25zdCByZXQgPSB0aGlzLnBtLkV4ZWN1dGVNZXRob2QoJ0ludm9rZU1ldGhvZCcsICdEZWxldGVSZWNvcmRzJyk7XG4gICAgaWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2IoKTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIGFkZFJlY29yZHMoY2IpIHtcbiAgICAvLyB0b2RvOiBjaGVjayBjYW5JbnZva2VNZXRob2QgYW5kL29yIGlzIGl0IE1WRy4gYW5kIGlmIHdlIGhhdmUgYSByZWNvcmQgaW4gYXNzb2M/XG4gICAgY29uc3QgcmV0ID0gdGhpcy5wbS5FeGVjdXRlTWV0aG9kKCdJbnZva2VNZXRob2QnLCAnQWRkUmVjb3JkcycpO1xuICAgIGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNiKCk7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICAvLyB0b2RvOiBkbyB3ZSBuZWVkIGRlbGV0ZUFsbFJlY29yZHM/XG4gIGFkZEFsbFJlY29yZHMoY2IpIHtcbiAgICAvLyB0b2RvOiBjaGVjayBjYW5JbnZva2VNZXRob2QgYW5kL29yIGlzIGl0IE1WRy4gYW5kIGlmIHdlIGhhdmUgYSByZWNvcmQgaW4gYXNzb2M/XG4gICAgY29uc3QgcmV0ID0gdGhpcy5wbS5FeGVjdXRlTWV0aG9kKCdJbnZva2VNZXRob2QnLCAnQWRkQWxsUmVjb3JkcycpO1xuICAgIGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNiKCk7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICBfZmlyc3RSZWNvcmQoKSB7IC8vIHRlbXAgbWV0aG9kLCBhc3N1bWVzIHRoYXQgbm8gc2Nyb2xsaW5nIGhhcHBlbmVkXG4gICAgaWYgKHRoaXMuaXNMaXN0QXBwbGV0KSB7XG4gICAgICBpZiAodGhpcy5nZXRTZWxlY3Rpb24oKSAhPT0gMCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wb3NpdGlvbk9uUm93KDApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIiwiaW1wb3J0IE4xOXBvcHVwQXBwbGV0IGZyb20gJy4vbjE5cG9wdXBBcHBsZXQnO1xuXG5jb25zdCBzaW5nbGV0b24gPSBTeW1ib2woJ3NpbmdsZXRvbicpO1xuY29uc3Qgc2luZ2xldG9uRW5mb3JjZXIgPSBTeW1ib2woJ3NpbmdsZXRvbkVuZm9yY2VyJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE4xOXBvcHVwQ29udHJvbGxlciB7XG4gIHN0YXRpYyBnZXQgaW5zdGFuY2UoKSB7XG4gICAgaWYgKCF0aGlzW3NpbmdsZXRvbl0pIHtcbiAgICAgIHRoaXNbc2luZ2xldG9uXSA9IG5ldyBOMTlwb3B1cENvbnRyb2xsZXIoc2luZ2xldG9uRW5mb3JjZXIpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpc1tzaW5nbGV0b25dO1xuICB9XG5cbiAgY29uc3RydWN0b3IoZW5mb3JjZXIpIHtcbiAgICBpZiAoZW5mb3JjZXIgIT09IHNpbmdsZXRvbkVuZm9yY2VyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0luc3RhbnRpYXRpb24gZmFpbGVkOiB1c2UgU2luZ2xldG9uLmdldEluc3RhbmNlKCkgaW5zdGVhZCBvZiBuZXcuJyk7XG4gICAgfVxuICAgIHRoaXMuY29uc3RzID0gU2llYmVsSlMuRGVwZW5kZW5jeSgnU2llYmVsQXBwLkNvbnN0YW50cycpO1xuICAgIHRoaXMuaXNQb3B1cEhpZGRlbiA9IGZhbHNlO1xuICAgIHRoaXMucmVzb2x2ZVByb21pc2UgPSBudWxsO1xuICAgIHRoaXMucG9wdXBBcHBsZXROMTkgPSBudWxsO1xuICAgIHRoaXMuYXNzb2NBcHBsZXROMTkgPSBudWxsO1xuXG4gICAgY29uc29sZS5sb2coYCR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfSBzdGFydGVkLi4uYCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuXG4gICAgLy8gaXQgd2lsbCBiZSBhIHNpbmdsZXRvbiwgc28gdGhlcmUgaXMgbm8gY2xlYW51cFxuICAgIHRoaXMuTjE5cHJvY2Vzc05ld1BvcHVwID0gU2llYmVsQXBwLlNfQXBwLlByb2Nlc3NOZXdQb3B1cDtcbiAgICBTaWViZWxBcHAuU19BcHAuUHJvY2Vzc05ld1BvcHVwID0gKHBzKSA9PiB7XG4gICAgICBsZXQgcmV0O1xuICAgICAgaWYgKHRoaXMuaXNQb3B1cEhpZGRlbikge1xuICAgICAgICByZXQgPSB0aGlzLnByb2Nlc3NOZXdQb3B1cChwcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXQgPSB0aGlzLk4xOXByb2Nlc3NOZXdQb3B1cC5jYWxsKFNpZWJlbEFwcC5TX0FwcCwgcHMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJldDtcbiAgICB9O1xuXG4gICAgLy8gd2UgY291bGQgdXNlIHBtLkF0dGFjaFBvc3RQcm94eUV4ZWN1dGVCaW5kaW5nIGZvciAnRWRpdEZpZWxkJywgYnV0IGF0IHRoaXMgcG9pbnQgR2V0UmVuZGVyZXIgcmV0dXJucyBudWxsXG4gICAgLy8gYnV0IHBtIGV4aXN0c1xuICAgIC8vIG9wZW4gdW50aWwgd2UgZ2V0IHJpZCBvZiBHZXRSZW5kZXJlciAoT3JhY2xlIHJldmlldylcbiAgICB0aGlzLk4xOXZpZXdMb2FkZWQgPSBTaWViZWxBcHAuY29udGVudFVwZGF0ZXIudmlld0xvYWRlZDtcbiAgICBTaWViZWxBcHAuY29udGVudFVwZGF0ZXIudmlld0xvYWRlZCA9ICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCByZXQgPSB0aGlzLk4xOXZpZXdMb2FkZWQuY2FsbChTaWViZWxBcHAuY29udGVudFVwZGF0ZXIsIC4uLmFyZ3MpO1xuICAgICAgaWYgKHR5cGVvZiB0aGlzLnJlc29sdmVQcm9taXNlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIC8vIHRvZG86IHVzZSBoZXJlIHRoZSBwcm9wZXJ0aWVzIHNldCBvbiBwcm9taXNlUmVzb2x2aW5nP1xuICAgICAgICBjb25zdCB7IGFwcGxldE5hbWUgfSA9IE4xOXBvcHVwQ29udHJvbGxlci5Jc1BvcHVwT3BlbigpO1xuICAgICAgICBpZiAoIWFwcGxldE5hbWUpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ09wZW4gQXBwbGV0IE5hbWUgaXMgbm90IGZvdW5kIGluIHJlc29sdmVQcm9taXNlJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYXBwbGV0ID0gTjE5cG9wdXBDb250cm9sbGVyLkdldFBvcHVwQXBwbGV0KGFwcGxldE5hbWUpO1xuICAgICAgICBjb25zdCBwbSA9IGFwcGxldC5HZXRQTW9kZWwoKTtcbiAgICAgICAgLy8gdG9kbzogYXZvaWQgdGhpcyBjaXJjdWxhcml0eVxuICAgICAgICB0aGlzLnBvcHVwQXBwbGV0TjE5ID0gbmV3IE4xOXBvcHVwQXBwbGV0KHsgcG0gfSk7IC8vIHRvZG8gOiBzcGxpdCBOMTlIZWxwZXIgaW50byAyIGNsYXNzZXNcbiAgICAgICAgY29uc3Qgb2JqID0geyBhcHBsZXROYW1lLCBwb3B1cEFwcGxldE4xOTogdGhpcy5wb3B1cEFwcGxldE4xOSB9O1xuICAgICAgICAvLyBjaGVjayBpZiB3ZSBoYXZlIGFzc29jXG4gICAgICAgIC8vIHdlIGFzc3VtZSBpdCBpcyBhbHdheXMgYXNzb2MgYXBwbGV0LCBidXQgd2hhdCBhYm91dCBvcGVuaW5nIHBvcHVwIG9uIHRoZSB0b3Agb2YgYW5vdGhlciAtIG5vdCB0ZXN0ZWQgaXRcbiAgICAgICAgY29uc3QgYXNzb2NBcHBsZXQgPSBhcHBsZXQuR2V0UG9wdXBBcHBsZXQoKTtcbiAgICAgICAgaWYgKGFzc29jQXBwbGV0KSB7XG4gICAgICAgICAgdGhpcy5hc3NvY0FwcGxldE4xOSA9IG5ldyBOMTlwb3B1cEFwcGxldCh7IHBtOiBhc3NvY0FwcGxldC5HZXRQTW9kZWwoKSB9KTtcbiAgICAgICAgICBvYmouYXNzb2NBcHBsZXROMTkgPSB0aGlzLmFzc29jQXBwbGV0TjE5O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVzb2x2ZVByb21pc2Uob2JqKTtcbiAgICAgICAgdGhpcy5yZXNvbHZlUHJvbWlzZSA9IG51bGw7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmV0O1xuICAgIH07XG4gIH1cblxuICBjYW5PcGVuUG9wdXAoKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB0aGlzLnJlc29sdmVQcm9taXNlICE9PSAnZnVuY3Rpb24nO1xuICB9XG5cbiAgcHJvY2Vzc05ld1BvcHVwKHBzKSB7XG4gICAgU2llYmVsQXBwLlNfQXBwLlNldFNob3dOZXdQYWdlKHRydWUpO1xuICAgIGNvbnN0IHBvcHVwUE0gPSBTaWViZWxBcHAuU19BcHAuR2V0UG9wdXBQTSgpO1xuXG4gICAgcG9wdXBQTS5TZXRQcm9wZXJ0eSgnQ2FuUHJvY2Vzc0xheW91dCcsIGZhbHNlKTtcbiAgICBwb3B1cFBNLlNldFByb3BlcnR5KCdpc1BvcHVwUGljaycsIGZhbHNlKTtcbiAgICBwb3B1cFBNLlNldFByb3BlcnR5KCdpc1BvcHVwTVZHQXNzb2MnLCBmYWxzZSk7XG4gICAgcG9wdXBQTS5TZXRQcm9wZXJ0eSgnaXNQb3B1cE1WR1NlbGVjdGVkJywgZmFsc2UpO1xuICAgIHBvcHVwUE0uU2V0UHJvcGVydHkoJ2lzUG9wdXBBc3NvYycsIGZhbHNlKTtcbiAgICBwb3B1cFBNLlNldFByb3BlcnR5KCdjdXJyUG9wdXBzJywgW10pO1xuICAgIHBvcHVwUE0uU2V0UHJvcGVydHkoJ2lzU0lQb3B1cCcsIHBzLkdldFByb3BlcnR5KHRoaXMuY29uc3RzLmdldCgnU1dFX0lTX1NJX1BPUFVQJykpKTtcbiAgICBwb3B1cFBNLlNldFByb3BlcnR5KCdpc1ByZXZQb3B1cFZpc2libGUnLCAhMSk7XG5cbiAgICBpZiAoIXBvcHVwUE0uR2V0UmVuZGVyZXIoKSkge1xuICAgICAgcG9wdXBQTS5TZXR1cCgpO1xuICAgIH1cblxuICAgIGNvbnN0IGFjdGl2ZVZpZXcgPSBTaWViZWxBcHAuU19BcHAuR2V0QWN0aXZlVmlldygpO1xuICAgIGlmIChhY3RpdmVWaWV3KSB7XG4gICAgICBjb25zdCBhY3RpdmVBcHBsZXQgPSBhY3RpdmVWaWV3LkdldEFjdGl2ZUFwcGxldCgpO1xuICAgICAgaWYgKGFjdGl2ZUFwcGxldCkge1xuICAgICAgICBhY3RpdmVWaWV3LlNldEFjdGl2ZUFwcGxldEJlZm9yZVBvcHVwKGFjdGl2ZUFwcGxldCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcG9wdXBQTS5BZGRQcm9wZXJ0eSgnc3RhdGUnLCAndmlzaWJsZScpOyAvLyB0b2RvOiB3ZSBuZWVkIGFsc28gdG8gcmVzdG9yZSB0aGUgUE1cblxuICAgIGxldCB1cmwgPSBwcy5HZXRQcm9wZXJ0eSgnVVJMJyk7XG4gICAgdXJsID0gU2llYmVsQXBwLlNfQXBwLkdldFBhZ2VVUkwoKSArIHVybC5zcGxpdCgnc3RhcnQuc3dlJylbMV07XG4gICAgcG9wdXBQTS5TZXRQcm9wZXJ0eSgndXJsJywgdXJsKTtcblxuICAgIHJldHVybiAncmVmcmVzaHBvcHVwJztcbiAgfVxuXG4gIC8vIHN0YXRpYyBSZUluaXRQb3B1cCgpIHtcbiAgLy8gICBjb25zdCBwb3B1cFBNID0gU2llYmVsQXBwLlNfQXBwLkdldFBvcHVwUE0oKTtcbiAgLy8gICBwb3B1cFBNLkluaXQoKTtcbiAgLy8gICBwb3B1cFBNLlNldHVwKCk7XG4gIC8vIH1cblxuICAvLyB0b2RvOiBjaGFuZ2UgdGhlIGFwcHJvYWNoLCB1c2UgdGhlIGNsYXNzIGludGVybmFsIHZhcmlhYmxlc1xuICBjbG9zZVBvcHVwQXBwbGV0KGFwcGxldCkge1xuICAgIC8vIHRvZG8gOiBjaGVjayBjYW5JbnZva2VNZXRob2RcbiAgICBsZXQgcmV0O1xuICAgIGlmIChhcHBsZXQpIHtcbiAgICAgIGNvbnN0IGlzUG9wdXBBcHBsZXQgPSB0eXBlb2YgYXBwbGV0LkdldFBvcHVwQXBwbGV0TmFtZSA9PT0gJ2Z1bmN0aW9uJztcbiAgICAgIGNvbnN0IGlzUGlja0FwcGxldCA9IHR5cGVvZiBhcHBsZXQuR2V0UGlja0FwcGxldE5hbWUgPT09ICdmdW5jdGlvbic7XG4gICAgICBpZiAoIWlzUG9wdXBBcHBsZXQgJiYgIWlzUGlja0FwcGxldCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoaXMgYXBwbGV0IGlzIG5laXRoZXIgcGljayBub3IgcG9wdXAnKTtcbiAgICAgIH1cbiAgICAgIHJldCA9IGFwcGxldC5HZXRQTW9kZWwoKS5FeGVjdXRlTWV0aG9kKCdJbnZva2VNZXRob2QnLCAnQ2xvc2VBcHBsZXQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gdG9kbzogY291bGQgd2UgdXNlIHRoZSBDbG9zZSBtZXRob2Qgb2YgdGhlIGFwcGxldD8gKE5aIHVzZWQpXG4gICAgICByZXQgPSB0aGlzLnBvcHVwQXBwbGV0TjE5LmFwcGxldC5HZXRQTW9kZWwoKS5FeGVjdXRlTWV0aG9kKCdJbnZva2VNZXRob2QnLCAnQ2xvc2VBcHBsZXQnKTtcbiAgICB9XG4gICAgLy8gaXQgY291bGQgYmUgYmV0dGVyIGlmIHdlIGRvbid0IGhhdmUgYSBTaWViZWwgQXBwbGV0IG9uIHRoZSB2aWV3XG4gICAgLy8gaW4gdGhpcyBjYXNlLCB3ZSB3b3VsZCBub3QgbmVlZCB0byByZUluaXRQb3B1cFxuICAgIC8vIGlmICh0aGlzLmlzUG9wdXBIaWRkZW4pIHtcbiAgICAvLyAgTjE5cG9wdXBDb250cm9sbGVyLlJlSW5pdFBvcHVwKCk7XG4gICAgLy8gfVxuICAgIHRoaXMucG9wdXBBcHBsZXROMTkgPSBudWxsO1xuICAgIHRoaXMuYXNzb2NBcHBsZXROMTkgPSBudWxsO1xuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICBzdGF0aWMgSXNQb3B1cE9wZW4oKSB7IC8vIHRvZG86IHdoZW4gd2Ugc2V0IHNvbWUgcHJvcGVydGllcyBvbiByZXNvbHZlLCBkbyB3ZSBuZWVkIHRoaXMgbWV0aG9kIG5vd1xuICAgIC8vIHRvZG86IGhlcmUgcmV1c2UgdGhlIHByb3BlcnRpZXMgdGhhdCBzZXQgd2hlbiB0aGUgUHJvbWlzZSByZXNvbHZlZFxuICAgIGNvbnN0IGN1cnJQb3B1cHMgPSBTaWViZWxBcHAuU19BcHAuR2V0UG9wdXBQTSgpLkdldCgnY3VyclBvcHVwcycpO1xuICAgIGlmICgwID09PSBjdXJyUG9wdXBzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHsgaXNPcGVuOiBmYWxzZSB9O1xuICAgIH1cbiAgICBpZiAoMSA9PT0gY3VyclBvcHVwcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB7IGlzT3BlbjogdHJ1ZSwgYXBwbGV0TmFtZTogY3VyclBvcHVwc1swXS5HZXROYW1lKCksIGNvbnRyb2xOYW1lOiBjdXJyUG9wdXBzWzBdLkdldFBvcHVwQ29udHJvbCgpIH07XG4gICAgfVxuICAgIGlmICgyID09PSBjdXJyUG9wdXBzLmxlbmd0aCkge1xuICAgICAgLy8gdGhpcyBpcyBhIHNodXR0bGUgb3JcbiAgICAgIC8vIG1heWJlIHdlIG9wZW5lZCBhIHBvcHVwIGFwcGxldCBvbiB0aGUgdG9wIG9mIHBpY2sgYXBwbGV0IC0gVE9ETzogLy8gdGVzdCBpdFxuICAgICAgLy8gICAgICB0ZXN0IGl0ICAtIG1heWJlIHdlIG5lZWQgdG8gY2xvc2UgdGhlIHNldmVyYWwgYXBwbGV0c1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyUG9wdXBzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY3VyclBvcHVwc1sxXS5HZXRQb3B1cEFwcGxldE5hbWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICByZXR1cm4geyBpc09wZW46IHRydWUsIGFwcGxldE5hbWU6IGN1cnJQb3B1cHNbaV0uR2V0TmFtZSgpLCBjb250cm9sTmFtZTogY3VyclBvcHVwc1tpXS5HZXRQb3B1cENvbnRyb2woKSB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ012ZyBhcHBsZXQgaXMgbm90IGZvdW5kLi4uJyk7XG4gICAgfVxuICAgIC8vIHRvZG86IHRlc3QgaWYgd2UgY2FuIGdldCB0byBoZXJlXG4gICAgLy8gICAgbWF5YmUgd2hlbiB3ZSBvcGVuIGEgbmV3IGFwcGxldCBvbiB0b3Agb2YgdGhlIHNodXR0bGUgYXBwbGV0XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzaG91bGQgbm90IGJlIGhlcmUuLi4nKTtcbiAgfVxuXG4gIC8vIHN0YXRpYyBnZXRQb3B1cEFwcGxldFBNKGFwcGxldE5hbWUpIHtcbiAgLy8gICBjb25zdCBhcHBsZXQgPSBOMTlwb3B1cENvbnRyb2xsZXIuR2V0UG9wdXBBcHBsZXQoYXBwbGV0TmFtZSk7XG4gIC8vICAgcmV0dXJuIGFwcGxldC5HZXRQTW9kZWwoKTtcbiAgLy8gfVxuXG4gIHN0YXRpYyBHZXRQb3B1cEFwcGxldChhcHBsZXROYW1lKSB7XG4gICAgY29uc3QgYXBwbGV0ID0gU2llYmVsQXBwLlNfQXBwLkdldEFjdGl2ZVZpZXcoKS5HZXRBcHBsZXQoYXBwbGV0TmFtZSk7XG4gICAgaWYgKCFhcHBsZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIHJlZmVyZW5jZSB0byAke2FwcGxldE5hbWV9IGlzIG5vdCBpbnN0YW50aWF0ZWQuYCk7XG4gICAgfVxuICAgIHJldHVybiBhcHBsZXQ7XG4gIH1cblxuICBzaG93UG9wdXBBcHBsZXQoaGlkZSwgY2IsIHBtKSB7XG4gICAgLy8gdG9kbzogdXNlIHRoZSBwcm9wZXJ0aWVzIHNldCBvbiBwcm9taXNlIHJlc29sdmluZz9cbiAgICBjb25zdCB7IGlzT3BlbiwgYXBwbGV0TmFtZSB9ID0gTjE5cG9wdXBDb250cm9sbGVyLklzUG9wdXBPcGVuKCk7XG4gICAgaWYgKGlzT3Blbikge1xuICAgICAgLy8gdGhpcyBjb2RlIHdpbGwgY2xvc2UgdGhlIGFwcGxldCBldmVuIGlmIHRoaXMgYXBwbGV0IHdhcyBvcmlnaW5hdGVkIGJ5IGFub3RoZXIgYXBwbGV0XG4gICAgICBjb25zb2xlLmxvZyhgY2xvc2luZyAke2FwcGxldE5hbWV9IGluIHNob3dQb3B1cEFwcGxldC4uLmApOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICAgIC8vIG1heWJlIGRvIG5vdCBjbG9zZSBpZiB0aGUgYXBwbGV0IHRvIGJlIG9wZW5lZCBpZiB0aGUgc2FtZSBhcyBhbHJlYWR5IG9wZW5lZD9cbiAgICAgIHRoaXMuY2xvc2VQb3B1cEFwcGxldChOMTlwb3B1cENvbnRyb2xsZXIuR2V0UG9wdXBBcHBsZXQoYXBwbGV0TmFtZSkpO1xuICAgICAgLy8gdG9kbzogY2hlY2sgaWYgZ290IGl0IHN1Y2Nlc3NmdWxseSBjbG9zZWQ/XG4gICAgfVxuICAgIHRoaXMuaXNQb3B1cEhpZGRlbiA9ICEhaGlkZTsgLy8gdG9kbzogZG8gd2UgbmVlZCB0byBrZWVwIHRoZSBzaG93IHRoZSBhcHBsZXRcblxuICAgIHBtLkV4ZWN1dGVNZXRob2QoJ0ludm9rZU1ldGhvZCcsICdFZGl0UG9wdXAnKTsgLy8gY2FuIGNhbGwgRWRpdEZpZWxkP1xuXG4gICAgbGV0IHJldCA9IHRydWU7XG5cbiAgICBpZiAoaGlkZSkgeyAvLyB3ZSB3aWxsIHBvcHVsYXRlIHRoZSBpbnN0YW5jZXMgb25seSB3aGVuIGFwcGxldCBzaG91bGQgYmUgaGlkZGVuXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmV0dXJuLWFzc2lnblxuICAgICAgcmV0ID0gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB0aGlzLnJlc29sdmVQcm9taXNlID0gcmVzb2x2ZSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcGFyYW0tYXNzaWduXG4gICAgICBpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldCA9IHJldC50aGVuKGNiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmV0O1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9