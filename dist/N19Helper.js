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
        throw new Error('Cannot open popup (currently exists resolve function)!'); // return false;
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
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es6.regexp.split */ "./node_modules/core-js/modules/es6.regexp.split.js");
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _n19notifications__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./n19notifications */ "./src/n19notifications.js");















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
    this.utils = SiebelJS.Dependency('SiebelApp.Utils');
    this.pm = settings.pm;
    this.convertDates = settings.convertDates;
    this.view = SiebelApp.S_App.GetActiveView();
    this.appletName = this.pm.Get('GetName');
    this.applet = this.view.GetApplet(this.appletName);
    this.isListApplet = typeof this.pm.Get('GetListOfColumns') !== 'undefined';
    this.required = []; // will be empty for the list applet

    this.lov = {};
    this.boolObject = new SiebelApp.S_App.DatumBoolObject();
    this.loadLocaleData();
    var bcId = this.applet.GetBCId();
    this.notifications = new _n19notifications__WEBPACK_IMPORTED_MODULE_14__["default"](this.pm, this.consts, bcId); // populate the required array for form applets

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
    key: "loadLocaleData",
    value: function loadLocaleData() {
      var localeObject = SiebelApp.S_App.LocaleObject;
      this.localeData = {
        dateFormat: localeObject.GetProfile(this.consts.get('LOCAL_DATE_FORMAT')),
        dateTimeFormat: localeObject.GetProfile(this.consts.get('LOCAL_DATETIME_FORMAT')),
        firstDayOfWeek: localeObject.GetWeekStartDay()
      };
      this.localeData.months = [];
      this.localeData.shortMonths = [];
      var months = localeObject.GetData('Month', localeObject.m_spMonthPS);

      for (var i = 1; i <= 12; i += 1) {
        this.localeData.months.push(months.GetProperty("".concat(i, ":0")));
        this.localeData.shortMonths.push(months.GetProperty("".concat(i, ":1")));
      } // const weekDays = localeObject.GetData('DayOfWeek', localeObject.m_spDayOfWeekPS);

    }
  }, {
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
    key: "_isDateTimeControl",
    value: function _isDateTimeControl(uiType) {
      return this.consts.get('SWE_CTRL_DATE_TZ_PICK') === uiType || this.consts.get('SWE_CTRL_DATE_TIME_PICK') === uiType || this.consts.get('SWE_CTRL_DATE_PICK') === uiType;
    }
  }, {
    key: "_getSiebelValue",
    value: function _getSiebelValue(value, uiType, displayFormat) {
      // todo: numbers, and phones?
      if (this.consts.get('SWE_CTRL_CHECKBOX') === uiType) {
        // convert true/false => Y/N // null is not handled (the same as in standard Open UI)
        this.boolObject.SetValue(value);
        return this.boolObject.GetAsString(); // value = value ? 'Y' : 'N'; // eslint-disable-line no-param-reassign
      }

      if (this.convertDates && displayFormat && this._isDateTimeControl(uiType)) {
        // TODO: check if a valid date is inputted
        var date = value.toLocaleString('en-US', {
          hour12: false
        }).split(',').join('');
        return SiebelApp.S_App.LocaleObject.GetStringFromDateTime(date, 'M/D/YYYY HH:mm:ss', displayFormat, false);
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
        var uiType = control.GetUIType();

        var displayFormat = control.GetDisplayFormat() || _this2.getControlDisplayFormat(uiType);

        if (_this2._isSkipControl(uiType)) {
          return "continue"; // eslint-disable-line no-continue
        }

        var name = control.GetName();
        var inputName = control.GetInputName();
        var obj = {
          name: name,
          label: control.GetDisplayName(),
          uiType: uiType,
          required: _this2._isRequired(inputName),
          boundedPick: control.IsBoundedPick() === '1',
          staticPick: control.IsStaticBounded() === '1',
          // pickApplet: control.GetPickApplet(), // confusing and not consistent - see wiki
          inputName: inputName,
          isPostChanges: control.IsPostChanges(),
          maxSize: control.GetMaxSize(),
          // maxChars: control.GetMaxChars(), // it is always 0
          fieldName: control.GetFieldName(),
          isLink: _this2.pm.ExecuteMethod('CanNavigate', name),
          readonly: !_this2.pm.ExecuteMethod('CanUpdate', name),
          displayFormat: displayFormat
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

        controls[name] = obj;
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
      // TODO: DO WE NEED TO DO CONVERSION?
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
      // TODO: DO WE NEED TO DO CONVERSION?
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
      var control = this._getControl(name);

      if (!control) {
        throw new Error("Cannot find a control by name ".concat(name, " to set ").concat(value, "."));
      }

      var uiType = control.GetUIType();
      var displayFormat = control.GetDisplayFormat() || this.getControlDisplayFormat(uiType); // eslint-disable-next-line no-param-reassign

      value = this._getSiebelValue(value, uiType, displayFormat); // TODO: should we use SetCellValue for list applets?

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
    key: "_getJSValue",
    value: function _getJSValue(value, uiType, displayFormat) {
      // todo: what about datetime?
      if (this.consts.get('SWE_CTRL_CHECKBOX') === uiType) {
        // convert Y/N/null -> true/false // what about null
        this.boolObject.SetAsString(value);
        return this.boolObject.GetValue();
      }

      if (this.convertDates && displayFormat && this._isDateTimeControl(uiType)) {
        if (value === '') {
          return null;
        }

        var ISO = '';

        if (this.isListApplet) {
          ISO = this.utils.ToISOFormat(value, this.consts.get('SWE_CTRL_DATE_PICK') !== uiType, displayFormat);
        } else {
          ISO = this.utils.GetISODateTime(value, true);
        }

        if (ISO === '') {
          throw new Error("ISO value is empty after converting ".concat(value));
        }

        return new Date(ISO);
      }

      return value;
    }
  }, {
    key: "getCurrentRecord",
    value: function getCurrentRecord(raw) {
      // todo: do we need to do the conversion
      var index = this.getSelection(); // todo: check if there is a record
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
          var uiType = control.GetUIType();
          var displayFormat = control.GetDisplayFormat() || this.getControlDisplayFormat(uiType);

          if (_controls.id) {
            _controls[arr[i]] = {
              // eslint-disable-line no-param-reassign
              value: this._getJSValue(obj[fieldName], control.GetUIType(), displayFormat),
              uiType: uiType,
              readonly: !this.pm.ExecuteMethod('CanUpdate', controlName),
              isLink: this.pm.ExecuteMethod('CanNavigate', controlName),
              label: control.GetDisplayName(),
              isPostChanges: control.IsPostChanges(),
              required: this._isRequired(control.GetInputName()),
              maxSize: control.GetMaxSize(),
              fieldName: fieldName,
              displayFormat: displayFormat
            };
          } else {
            // no record displayed
            _controls[arr[i]] = {
              // eslint-disable-line no-param-reassign
              value: '',
              uiType: uiType,
              readonly: true,
              isLink: false,
              label: control.GetDisplayName(),
              isPostChanges: control.IsPostChanges(),
              required: this._isRequired(control.GetInputName()),
              maxSize: control.GetMaxSize(),
              fieldName: fieldName,
              displayFormat: displayFormat
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
          this._setControlValueInternal(control, this._getSiebelValue(params[arr[i]], control.GetUIType()));
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

      return controlName; // fallback - just in case we got the field name
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
      // temp method!
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
    } // this is also called from the the demo where Siebel and custom rendered applet coexist

  }, {
    key: "_getFieldToControlMap",
    value: function _getFieldToControlMap(_controls) {
      var ret = {};

      var appletControls = this._returnControls();

      var arr = Object.keys(_controls);

      for (var i = 0; i < arr.length; i += 1) {
        var control = appletControls[arr[i]];
        var field = control.GetFieldName();

        if (field) {
          var uiType = control.GetUIType();
          ret[field] = {
            name: control.GetName(),
            isPostChanges: control.IsPostChanges(),
            uiType: uiType,
            displayFormat: control.GetDisplayFormat() || this.getControlDisplayFormat(uiType)
          };
        }
      }

      return ret;
    }
  }, {
    key: "getControlsRecordSet",
    value: function getControlsRecordSet() {
      var _this9 = this;

      if (!this.fieldToControlMap) {
        this.fieldToControlMap = this._getFieldToControlMap(this._returnControls());
      } // used slice to avoid modification of the record set


      var ret = this.getRecordSet().slice(); // todo : convert boolean values (e.g. Y/N <-> true/falss)

      var _loop2 = function _loop2(i) {
        var id = ret[i].Id;
        ret[i] = Object.keys(ret[i]).filter(function (el) {
          return _this9.fieldToControlMap[el];
        }).reduce(function (acc, el) {
          return _objectSpread({}, acc, _defineProperty({}, _this9.fieldToControlMap[el].name, _this9._getJSValue(ret[i][el], _this9.fieldToControlMap[el].uiType, _this9.fieldToControlMap[el].displayFormat)));
        }, {});

        if (id) {
          ret[i].Id = id;
        }
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
        ret = _this.N19processNewPopup.call(SiebelApp.S_App, ps); // todo: set here isPopupHidden to false?
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
          // console.warn('Open Applet Name is not found in viewLoaded resolving Promise');
          throw new Error('Open Applet Name is not found in viewLoaded resolving Promise');
        } else {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYW4taW5zdGFuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NsYXNzb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY29mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NvbGxlY3Rpb24tc3Ryb25nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NvbGxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jcmVhdGUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY3R4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2RlZmluZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2VudW0ta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19leHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZmFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZml4LXJlLXdrcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19mbGFncy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19mb3Itb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2hhcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19oaWRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2h0bWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faW5oZXJpdC1pZi1yZXF1aXJlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pbnZva2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pcy1hcnJheS1pdGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2lzLWFycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pcy1yZWdleHAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlci1jYWxsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXItZGV0ZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXItc3RlcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyYXRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fbGlicmFyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19tZXRhLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX21pY3JvdGFzay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZHAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWRwcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZ29wZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZ29wbi1leHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdvcG4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdwby5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3Qta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtcGllLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1zYXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LXRvLWFycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3BlcmZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fcHJvbWlzZS1yZXNvbHZlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fcmVkZWZpbmUtYWxsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3JlZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NldC1wcm90by5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zZXQtc3BlY2llcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zaGFyZWQta2V5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NoYXJlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zcGVjaWVzLWNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3N0cmluZy1hdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190YXNrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWFic29sdXRlLWluZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8taW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1sZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL191aWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdXNlci1hZ2VudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL192YWxpZGF0ZS1jb2xsZWN0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3drcy1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fd2tzLWV4dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL193a3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuZnJvbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5mdW5jdGlvbi5uYW1lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnByb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLmZsYWdzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5zcGxpdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAudG8tc3RyaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcub2JqZWN0LmVudHJpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcuc3ltYm9sLmFzeW5jLWl0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbjE5YmFzZUFwcGxldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbjE5bm90aWZpY2F0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbjE5cG9wdXBBcHBsZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL24xOXBvcHVwQ29udHJvbGxlci5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiaXQiLCJUeXBlRXJyb3IiLCJVTlNDT1BBQkxFUyIsInJlcXVpcmUiLCJBcnJheVByb3RvIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJ1bmRlZmluZWQiLCJrZXkiLCJDb25zdHJ1Y3RvciIsIm5hbWUiLCJmb3JiaWRkZW5GaWVsZCIsImlzT2JqZWN0IiwidG9JT2JqZWN0IiwidG9MZW5ndGgiLCJ0b0Fic29sdXRlSW5kZXgiLCJJU19JTkNMVURFUyIsIiR0aGlzIiwiZWwiLCJmcm9tSW5kZXgiLCJPIiwibGVuZ3RoIiwiaW5kZXgiLCJ2YWx1ZSIsImNvZiIsIlRBRyIsIkFSRyIsImFyZ3VtZW50cyIsInRyeUdldCIsImUiLCJUIiwiQiIsIk9iamVjdCIsImNhbGxlZSIsInRvU3RyaW5nIiwiY2FsbCIsInNsaWNlIiwiZFAiLCJmIiwiY3JlYXRlIiwicmVkZWZpbmVBbGwiLCJjdHgiLCJhbkluc3RhbmNlIiwiZm9yT2YiLCIkaXRlckRlZmluZSIsInN0ZXAiLCJzZXRTcGVjaWVzIiwiREVTQ1JJUFRPUlMiLCJmYXN0S2V5IiwidmFsaWRhdGUiLCJTSVpFIiwiZ2V0RW50cnkiLCJ0aGF0IiwiZW50cnkiLCJfaSIsIl9mIiwibiIsImsiLCJnZXRDb25zdHJ1Y3RvciIsIndyYXBwZXIiLCJOQU1FIiwiSVNfTUFQIiwiQURERVIiLCJDIiwiaXRlcmFibGUiLCJfdCIsIl9sIiwiY2xlYXIiLCJkYXRhIiwiciIsInAiLCJpIiwibmV4dCIsInByZXYiLCJmb3JFYWNoIiwiY2FsbGJhY2tmbiIsInYiLCJoYXMiLCJnZXQiLCJkZWYiLCJzZXRTdHJvbmciLCJpdGVyYXRlZCIsImtpbmQiLCJfayIsImdsb2JhbCIsIiRleHBvcnQiLCJyZWRlZmluZSIsIm1ldGEiLCJmYWlscyIsIiRpdGVyRGV0ZWN0Iiwic2V0VG9TdHJpbmdUYWciLCJpbmhlcml0SWZSZXF1aXJlZCIsIm1ldGhvZHMiLCJjb21tb24iLCJJU19XRUFLIiwiQmFzZSIsInByb3RvIiwiZml4TWV0aG9kIiwiS0VZIiwiZm4iLCJhIiwiYWRkIiwic2V0IiwiYiIsImVudHJpZXMiLCJORUVEIiwiaW5zdGFuY2UiLCJIQVNOVF9DSEFJTklORyIsIlRIUk9XU19PTl9QUklNSVRJVkVTIiwiQUNDRVBUX0lURVJBQkxFUyIsIml0ZXIiLCJCVUdHWV9aRVJPIiwiJGluc3RhbmNlIiwidGFyZ2V0IiwiY29uc3RydWN0b3IiLCJHIiwiVyIsIkYiLCJjb3JlIiwidmVyc2lvbiIsIl9fZSIsIiRkZWZpbmVQcm9wZXJ0eSIsImNyZWF0ZURlc2MiLCJvYmplY3QiLCJhRnVuY3Rpb24iLCJjIiwiYXBwbHkiLCJkZWZpbmVQcm9wZXJ0eSIsImRvY3VtZW50IiwiaXMiLCJjcmVhdGVFbGVtZW50Iiwic3BsaXQiLCJnZXRLZXlzIiwiZ09QUyIsInBJRSIsInJlc3VsdCIsImdldFN5bWJvbHMiLCJzeW1ib2xzIiwiaXNFbnVtIiwicHVzaCIsImhpZGUiLCJQUk9UT1RZUEUiLCJ0eXBlIiwic291cmNlIiwiSVNfRk9SQ0VEIiwiSVNfR0xPQkFMIiwiSVNfU1RBVElDIiwiUyIsIklTX1BST1RPIiwiUCIsIklTX0JJTkQiLCJleHBQcm90byIsIm93biIsIm91dCIsImV4cCIsIkZ1bmN0aW9uIiwiVSIsIlIiLCJleGVjIiwiZGVmaW5lZCIsIndrcyIsIlNZTUJPTCIsImZucyIsInN0cmZuIiwicnhmbiIsIlN0cmluZyIsIlJlZ0V4cCIsInN0cmluZyIsImFyZyIsImFuT2JqZWN0IiwiaWdub3JlQ2FzZSIsIm11bHRpbGluZSIsInVuaWNvZGUiLCJzdGlja3kiLCJpc0FycmF5SXRlciIsImdldEl0ZXJGbiIsIkJSRUFLIiwiUkVUVVJOIiwiSVRFUkFUT1IiLCJpdGVyRm4iLCJpdGVyYXRvciIsImRvbmUiLCJ3aW5kb3ciLCJNYXRoIiwic2VsZiIsIl9fZyIsImhhc093blByb3BlcnR5IiwiZG9jdW1lbnRFbGVtZW50Iiwic2V0UHJvdG90eXBlT2YiLCJhcmdzIiwidW4iLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsIkl0ZXJhdG9ycyIsImlzQXJyYXkiLCJNQVRDSCIsImlzUmVnRXhwIiwicmV0IiwiZGVzY3JpcHRvciIsIkl0ZXJhdG9yUHJvdG90eXBlIiwiTElCUkFSWSIsIiRpdGVyQ3JlYXRlIiwiZ2V0UHJvdG90eXBlT2YiLCJCVUdHWSIsImtleXMiLCJGRl9JVEVSQVRPUiIsIktFWVMiLCJWQUxVRVMiLCJyZXR1cm5UaGlzIiwiREVGQVVMVCIsIklTX1NFVCIsIkZPUkNFRCIsImdldE1ldGhvZCIsInZhbHVlcyIsIkRFRl9WQUxVRVMiLCJWQUxVRVNfQlVHIiwiJG5hdGl2ZSIsIiRkZWZhdWx0IiwiJGVudHJpZXMiLCIkYW55TmF0aXZlIiwiU0FGRV9DTE9TSU5HIiwicml0ZXIiLCJmcm9tIiwic2tpcENsb3NpbmciLCJzYWZlIiwiYXJyIiwiTUVUQSIsInNldERlc2MiLCJpZCIsImlzRXh0ZW5zaWJsZSIsIkZSRUVaRSIsInByZXZlbnRFeHRlbnNpb25zIiwic2V0TWV0YSIsInciLCJnZXRXZWFrIiwib25GcmVlemUiLCJtYWNyb3Rhc2siLCJPYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJXZWJLaXRNdXRhdGlvbk9ic2VydmVyIiwicHJvY2VzcyIsIlByb21pc2UiLCJpc05vZGUiLCJoZWFkIiwibGFzdCIsIm5vdGlmeSIsImZsdXNoIiwicGFyZW50IiwiZG9tYWluIiwiZXhpdCIsImVudGVyIiwibmV4dFRpY2siLCJuYXZpZ2F0b3IiLCJzdGFuZGFsb25lIiwidG9nZ2xlIiwibm9kZSIsImNyZWF0ZVRleHROb2RlIiwib2JzZXJ2ZSIsImNoYXJhY3RlckRhdGEiLCJyZXNvbHZlIiwicHJvbWlzZSIsInRoZW4iLCJ0YXNrIiwiUHJvbWlzZUNhcGFiaWxpdHkiLCJyZWplY3QiLCIkJHJlc29sdmUiLCIkJHJlamVjdCIsInRvT2JqZWN0IiwiSU9iamVjdCIsIiRhc3NpZ24iLCJhc3NpZ24iLCJBIiwiU3ltYm9sIiwiSyIsImpvaW4iLCJhTGVuIiwiY29uY2F0IiwiaiIsImRQcyIsImVudW1CdWdLZXlzIiwiSUVfUFJPVE8iLCJFbXB0eSIsImNyZWF0ZURpY3QiLCJpZnJhbWUiLCJsdCIsImd0IiwiaWZyYW1lRG9jdW1lbnQiLCJzdHlsZSIsImRpc3BsYXkiLCJhcHBlbmRDaGlsZCIsInNyYyIsImNvbnRlbnRXaW5kb3ciLCJvcGVuIiwid3JpdGUiLCJjbG9zZSIsIlByb3BlcnRpZXMiLCJJRThfRE9NX0RFRklORSIsInRvUHJpbWl0aXZlIiwiQXR0cmlidXRlcyIsImRlZmluZVByb3BlcnRpZXMiLCJnT1BEIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiZ09QTiIsIndpbmRvd05hbWVzIiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsImdldFdpbmRvd05hbWVzIiwiJGtleXMiLCJoaWRkZW5LZXlzIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwiT2JqZWN0UHJvdG8iLCJhcnJheUluZGV4T2YiLCJuYW1lcyIsImlzRW50cmllcyIsIm5ld1Byb21pc2VDYXBhYmlsaXR5IiwieCIsInByb21pc2VDYXBhYmlsaXR5IiwiYml0bWFwIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiU1JDIiwiVE9fU1RSSU5HIiwiJHRvU3RyaW5nIiwiVFBMIiwiaW5zcGVjdFNvdXJjZSIsInZhbCIsImlzRnVuY3Rpb24iLCJjaGVjayIsInRlc3QiLCJidWdneSIsIl9fcHJvdG9fXyIsIlNQRUNJRVMiLCJ0YWciLCJzdGF0Iiwic2hhcmVkIiwidWlkIiwiU0hBUkVEIiwic3RvcmUiLCJtb2RlIiwiY29weXJpZ2h0IiwiRCIsInRvSW50ZWdlciIsInBvcyIsInMiLCJsIiwiY2hhckNvZGVBdCIsImNoYXJBdCIsImludm9rZSIsImh0bWwiLCJjZWwiLCJzZXRUYXNrIiwic2V0SW1tZWRpYXRlIiwiY2xlYXJUYXNrIiwiY2xlYXJJbW1lZGlhdGUiLCJNZXNzYWdlQ2hhbm5lbCIsIkRpc3BhdGNoIiwiY291bnRlciIsInF1ZXVlIiwiT05SRUFEWVNUQVRFQ0hBTkdFIiwiZGVmZXIiLCJjaGFubmVsIiwicG9ydCIsInJ1biIsImxpc3RlbmVyIiwiZXZlbnQiLCJub3ciLCJwb3J0MiIsInBvcnQxIiwib25tZXNzYWdlIiwicG9zdE1lc3NhZ2UiLCJhZGRFdmVudExpc3RlbmVyIiwiaW1wb3J0U2NyaXB0cyIsInJlbW92ZUNoaWxkIiwic2V0VGltZW91dCIsIm1heCIsIm1pbiIsImNlaWwiLCJmbG9vciIsImlzTmFOIiwidmFsdWVPZiIsInB4IiwicmFuZG9tIiwidXNlckFnZW50IiwiVFlQRSIsIndrc0V4dCIsIiRTeW1ib2wiLCJVU0VfU1lNQk9MIiwiJGV4cG9ydHMiLCJjbGFzc29mIiwiZ2V0SXRlcmF0b3JNZXRob2QiLCJjcmVhdGVQcm9wZXJ0eSIsImFycmF5TGlrZSIsIm1hcGZuIiwibWFwcGluZyIsImFkZFRvVW5zY29wYWJsZXMiLCJBcmd1bWVudHMiLCJGUHJvdG8iLCJuYW1lUkUiLCJtYXRjaCIsInN0cm9uZyIsIk1BUCIsIk1hcCIsInNwZWNpZXNDb25zdHJ1Y3RvciIsIm1pY3JvdGFzayIsIm5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlIiwicGVyZm9ybSIsInByb21pc2VSZXNvbHZlIiwiUFJPTUlTRSIsInZlcnNpb25zIiwidjgiLCIkUHJvbWlzZSIsImVtcHR5IiwiSW50ZXJuYWwiLCJuZXdHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkiLCJPd25Qcm9taXNlQ2FwYWJpbGl0eSIsIldyYXBwZXIiLCJVU0VfTkFUSVZFIiwiRmFrZVByb21pc2UiLCJQcm9taXNlUmVqZWN0aW9uRXZlbnQiLCJpbmRleE9mIiwiaXNUaGVuYWJsZSIsImlzUmVqZWN0IiwiX24iLCJjaGFpbiIsIl9jIiwiX3YiLCJvayIsIl9zIiwicmVhY3Rpb24iLCJoYW5kbGVyIiwiZmFpbCIsImV4aXRlZCIsIl9oIiwib25IYW5kbGVVbmhhbmRsZWQiLCJvblVuaGFuZGxlZCIsInVuaGFuZGxlZCIsImlzVW5oYW5kbGVkIiwiY29uc29sZSIsImVtaXQiLCJvbnVuaGFuZGxlZHJlamVjdGlvbiIsInJlYXNvbiIsImVycm9yIiwiX2EiLCJvbnJlamVjdGlvbmhhbmRsZWQiLCIkcmVqZWN0IiwiX2QiLCJfdyIsIiRyZXNvbHZlIiwiZXhlY3V0b3IiLCJlcnIiLCJvbkZ1bGZpbGxlZCIsIm9uUmVqZWN0ZWQiLCJjYXBhYmlsaXR5IiwiYWxsIiwicmVtYWluaW5nIiwiJGluZGV4IiwiYWxyZWFkeUNhbGxlZCIsInJhY2UiLCJmbGFncyIsIlNQTElUIiwiJHNwbGl0IiwiX3NwbGl0IiwiJHB1c2giLCIkU1BMSVQiLCJMRU5HVEgiLCJMQVNUX0lOREVYIiwiTlBDRyIsInNlcGFyYXRvciIsImxpbWl0Iiwib3V0cHV0IiwibGFzdExhc3RJbmRleCIsInNwbGl0TGltaXQiLCJzZXBhcmF0b3JDb3B5Iiwic2VwYXJhdG9yMiIsImxhc3RJbmRleCIsImxhc3RMZW5ndGgiLCJyZXBsYWNlIiwiJGZsYWdzIiwiZGVmaW5lIiwiJGF0IiwicG9pbnQiLCIkZmFpbHMiLCJ3a3NEZWZpbmUiLCJlbnVtS2V5cyIsIl9jcmVhdGUiLCJnT1BORXh0IiwiJEdPUEQiLCIkRFAiLCIkSlNPTiIsIkpTT04iLCJfc3RyaW5naWZ5Iiwic3RyaW5naWZ5IiwiSElEREVOIiwiVE9fUFJJTUlUSVZFIiwiU3ltYm9sUmVnaXN0cnkiLCJBbGxTeW1ib2xzIiwiT1BTeW1ib2xzIiwiUU9iamVjdCIsInNldHRlciIsImZpbmRDaGlsZCIsInNldFN5bWJvbERlc2MiLCJwcm90b0Rlc2MiLCJ3cmFwIiwic3ltIiwiaXNTeW1ib2wiLCIkZGVmaW5lUHJvcGVydGllcyIsIiRjcmVhdGUiLCIkcHJvcGVydHlJc0VudW1lcmFibGUiLCJFIiwiJGdldE93blByb3BlcnR5RGVzY3JpcHRvciIsIiRnZXRPd25Qcm9wZXJ0eU5hbWVzIiwiJGdldE93blByb3BlcnR5U3ltYm9scyIsIklTX09QIiwiJHNldCIsImVzNlN5bWJvbHMiLCJ3ZWxsS25vd25TeW1ib2xzIiwia2V5Rm9yIiwidXNlU2V0dGVyIiwidXNlU2ltcGxlIiwicmVwbGFjZXIiLCIkcmVwbGFjZXIiLCIkaXRlcmF0b3JzIiwiVE9fU1RSSU5HX1RBRyIsIkFycmF5VmFsdWVzIiwiRE9NSXRlcmFibGVzIiwiQ1NTUnVsZUxpc3QiLCJDU1NTdHlsZURlY2xhcmF0aW9uIiwiQ1NTVmFsdWVMaXN0IiwiQ2xpZW50UmVjdExpc3QiLCJET01SZWN0TGlzdCIsIkRPTVN0cmluZ0xpc3QiLCJET01Ub2tlbkxpc3QiLCJEYXRhVHJhbnNmZXJJdGVtTGlzdCIsIkZpbGVMaXN0IiwiSFRNTEFsbENvbGxlY3Rpb24iLCJIVE1MQ29sbGVjdGlvbiIsIkhUTUxGb3JtRWxlbWVudCIsIkhUTUxTZWxlY3RFbGVtZW50IiwiTWVkaWFMaXN0IiwiTWltZVR5cGVBcnJheSIsIk5hbWVkTm9kZU1hcCIsIk5vZGVMaXN0IiwiUGFpbnRSZXF1ZXN0TGlzdCIsIlBsdWdpbiIsIlBsdWdpbkFycmF5IiwiU1ZHTGVuZ3RoTGlzdCIsIlNWR051bWJlckxpc3QiLCJTVkdQYXRoU2VnTGlzdCIsIlNWR1BvaW50TGlzdCIsIlNWR1N0cmluZ0xpc3QiLCJTVkdUcmFuc2Zvcm1MaXN0IiwiU291cmNlQnVmZmVyTGlzdCIsIlN0eWxlU2hlZXRMaXN0IiwiVGV4dFRyYWNrQ3VlTGlzdCIsIlRleHRUcmFja0xpc3QiLCJUb3VjaExpc3QiLCJjb2xsZWN0aW9ucyIsImV4cGxpY2l0IiwiQ29sbGVjdGlvbiIsIlNpZWJlbEFwcEZhY2FkZSIsIk4xOUhlbHBlciIsInNldHRpbmdzIiwiYXBwbGV0TmFtZSIsImFwcGxldCIsIlNpZWJlbEFwcCIsIlNfQXBwIiwiR2V0QWN0aXZlVmlldyIsIkdldEFwcGxldCIsIkVycm9yIiwicG0iLCJHZXRQTW9kZWwiLCJsb2ciLCJuMTlwb3B1cENvbnRyb2xsZXIiLCJOMTlwb3B1cENvbnRyb2xsZXIiLCJjbG9zZVBvcHVwQXBwbGV0IiwiY2IiLCJjYW5PcGVuUG9wdXAiLCJ2aWV3IiwiU2V0QWN0aXZlQXBwbGV0SW50ZXJuYWwiLCJfc2V0QWN0aXZlQ29udHJvbCIsInNob3dQb3B1cEFwcGxldCIsIl9zaG93UG9wdXBBcHBsZXQiLCJjb250cm9sTmFtZSIsImlzTGlzdEFwcGxldCIsImdldFNlbGVjdGlvbiIsIkV4ZWN1dGVNZXRob2QiLCJ0YXJnZXRWaWV3TmFtZSIsInRhcmdldEFwcGxldE5hbWUiLCJyb3dJZCIsImdldEN1cnJlbnRSZWNvcmQiLCJJZCIsIlNXRUNtZCIsImVuY29kZVVSSSIsIkdvdG9WaWV3IiwicG9wdXBQTSIsIkdldFBvcHVwUE0iLCJJbml0IiwiU2V0dXAiLCJOMTliYXNlQXBwbGV0IiwiY29uc3RzIiwiU2llYmVsSlMiLCJEZXBlbmRlbmN5IiwidXRpbHMiLCJjb252ZXJ0RGF0ZXMiLCJHZXQiLCJyZXF1aXJlZCIsImxvdiIsImJvb2xPYmplY3QiLCJEYXR1bUJvb2xPYmplY3QiLCJsb2FkTG9jYWxlRGF0YSIsImJjSWQiLCJHZXRCQ0lkIiwibm90aWZpY2F0aW9ucyIsIk4xOW5vdGlmaWNhdGlvbnMiLCJhcHBsZXRJZCIsImFwcGxldElucHV0cyIsImdldEVsZW1lbnRCeUlkIiwicXVlcnlTZWxlY3RvckFsbCIsImF0dHJpYnV0ZXMiLCJub2RlVmFsdWUiLCJBdHRhY2hQTUJpbmRpbmciLCJpbnB1dE5hbWUiLCJ2aWV3TmFtZSIsIkdldE5hbWUiLCJ3YXJuIiwic3BsaWNlIiwiZmlsdGVyIiwic2NvcGUiLCJsb2NhbGVPYmplY3QiLCJMb2NhbGVPYmplY3QiLCJsb2NhbGVEYXRhIiwiZGF0ZUZvcm1hdCIsIkdldFByb2ZpbGUiLCJkYXRlVGltZUZvcm1hdCIsImZpcnN0RGF5T2ZXZWVrIiwiR2V0V2Vla1N0YXJ0RGF5IiwibW9udGhzIiwic2hvcnRNb250aHMiLCJHZXREYXRhIiwibV9zcE1vbnRoUFMiLCJHZXRQcm9wZXJ0eSIsImZ1bmMiLCJzdWJzY3JpYmUiLCJ0b2tlbiIsInVuc3Vic2NyaWJlIiwiX2dldENvbnRyb2wiLCJ1aVR5cGUiLCJkaXNwbGF5Rm9ybWF0IiwiU2V0VmFsdWUiLCJHZXRBc1N0cmluZyIsIl9pc0RhdGVUaW1lQ29udHJvbCIsImRhdGUiLCJ0b0xvY2FsZVN0cmluZyIsImhvdXIxMiIsIkdldFN0cmluZ0Zyb21EYXRlVGltZSIsIm1ldGhvZCIsImNhbkludm9rZU1ldGhvZCIsImNvbnRyb2xzIiwiYXBwbGV0Q29udHJvbHMiLCJfcmV0dXJuQ29udHJvbHMiLCJjb250cm9sIiwiR2V0VUlUeXBlIiwiR2V0RGlzcGxheUZvcm1hdCIsImdldENvbnRyb2xEaXNwbGF5Rm9ybWF0IiwiX2lzU2tpcENvbnRyb2wiLCJHZXRJbnB1dE5hbWUiLCJvYmoiLCJsYWJlbCIsIkdldERpc3BsYXlOYW1lIiwiX2lzUmVxdWlyZWQiLCJib3VuZGVkUGljayIsIklzQm91bmRlZFBpY2siLCJzdGF0aWNQaWNrIiwiSXNTdGF0aWNCb3VuZGVkIiwiaXNQb3N0Q2hhbmdlcyIsIklzUG9zdENoYW5nZXMiLCJtYXhTaXplIiwiR2V0TWF4U2l6ZSIsImZpZWxkTmFtZSIsIkdldEZpZWxkTmFtZSIsImlzTGluayIsInJlYWRvbmx5Iiwic3RhdGljTE9WIiwiR2V0U3RhdGljTE9WIiwiR2V0UmFkaW9Hcm91cFByb3BTZXQiLCJjaGlsZEFycmF5IiwibG92cyIsInJlZHVjZSIsImFjYyIsImxpYyIsIkZpZWxkVmFsdWUiLCJEaXNwbGF5TmFtZSIsImFkZFJlY29yZEluZGV4IiwibWFwIiwiX2luZHgiLCJfbmF2aWdhdGUiLCJnZXRSb3dMaXN0Um93Q291bnQiLCJwb3NpdGlvbk9uUm93IiwiX25ld1JlY29yZCIsImFzeW5jIiwiY2JlcnIiLCJfd3JpdGVSZWNvcmQiLCJjYXRjaCIsInNlbGZidXN5IiwiX2dldFNpZWJlbFZhbHVlIiwiX3NldENvbnRyb2xWYWx1ZUludGVybmFsIiwiT25Db250cm9sRXZlbnQiLCJpc1N0YXRpYyIsImlzU3RhdGljUGljayIsIl92YWxpZGF0ZVBpY2tDb250cm9sIiwiY29udHJvbElucHV0TmFtZSIsInBzIiwiTmV3UHJvcGVydHlTZXQiLCJTZXRQcm9wZXJ0eSIsInNvcnQiLCJTZXRBc1N0cmluZyIsIkdldFZhbHVlIiwiSVNPIiwiVG9JU09Gb3JtYXQiLCJHZXRJU09EYXRlVGltZSIsIkRhdGUiLCJyYXciLCJiYyIsIklzSW5zZXJ0UGVuZGluZyIsIklzQ29tbWl0UGVuZGluZyIsImNvbnRyb2xNZXRob2QiLCJHZXRNZXRob2ROYW1lIiwiX2NvbnRyb2xzIiwiX21ldGhvZHMiLCJnZXRDb250cm9scyIsIl9nZXRNZXRob2RzIiwic3RhdGUiLCJjYWxjdWxhdGVDdXJyZW50UmVjb3JkU3RhdGUiLCJnZXRSZWNvcmRTZXQiLCJnZXRSYXdSZWNvcmRTZXQiLCJfZ2V0SlNWYWx1ZSIsImNvbnRyb2xVaVR5cGUiLCJleHByIiwiX25ld1F1ZXJ5IiwiX2ZpbmRDb250cm9sVG9FbnRlclNlYXJjaEV4cHIiLCJxdWVyeUJ5U2VhcmNoRXhwclN5bmMiLCJfcXVlcnlCeUlkIiwiYWkiLCJwYXJhbXMiLCJfcXVlcnkiLCJpZHMiLCJmaWVsZHMiLCJ1c2VBY3RpdmVCTyIsIl9nZXRNVkYiLCJwc0lucHV0cyIsIkdldEFjdGl2ZUJ1c09iaiIsIlNldFR5cGUiLCJfZ2V0RmllbGROYW1lRm9yQ29udHJvbCIsIkFkZENoaWxkIiwiQ2xvbmUiLCJicyIsIkdldFNlcnZpY2UiLCJlcnJjYiIsIm1ldGhvZE5hbWUiLCJJbnB1dHMiLCJwc091dHB1dHMiLCJHZXRDaGlsZEJ5VHlwZSIsIkdldFR5cGUiLCJyZWMiLCJwcmltYXJ5IiwicHJvcEFycmF5IiwiSW52b2tlTWV0aG9kIiwicHNJbnB1dCIsImFtb3VudCIsInNpemUiLCJ0ZW1wIiwibmV4dFJlY29yZFNldCIsImhhc05leHQiLCJTZXRDb250cm9sVmFsdWVCeU5hbWUiLCJmaWVsZCIsImZpZWxkVG9Db250cm9sTWFwIiwiX2dldEZpZWxkVG9Db250cm9sTWFwIiwic2VydmljZSIsImluUHJvcFNldCIsInJlY2VpdmVkTm90aWZpY2F0aW9ucyIsInN1YnNjcmliZXJzIiwiQXR0YWNoTm90aWZpY2F0aW9uSGFuZGxlciIsInByb3BTZXQiLCJzdWJUb2tlbiIsIk4xOXBvcHVwQXBwbGV0IiwiR2V0UmVuZGVyZXIiLCJyZXNpemUiLCJHZXRTZWxlY3RlZFJvdyIsInNpbmdsZXRvbiIsInNpbmdsZXRvbkVuZm9yY2VyIiwiZW5mb3JjZXIiLCJpc1BvcHVwSGlkZGVuIiwicmVzb2x2ZVByb21pc2UiLCJwb3B1cEFwcGxldE4xOSIsImFzc29jQXBwbGV0TjE5IiwiTjE5cHJvY2Vzc05ld1BvcHVwIiwiUHJvY2Vzc05ld1BvcHVwIiwicHJvY2Vzc05ld1BvcHVwIiwiTjE5dmlld0xvYWRlZCIsImNvbnRlbnRVcGRhdGVyIiwidmlld0xvYWRlZCIsIklzUG9wdXBPcGVuIiwiR2V0UG9wdXBBcHBsZXQiLCJhc3NvY0FwcGxldCIsIlNldFNob3dOZXdQYWdlIiwiYWN0aXZlVmlldyIsImFjdGl2ZUFwcGxldCIsIkdldEFjdGl2ZUFwcGxldCIsIlNldEFjdGl2ZUFwcGxldEJlZm9yZVBvcHVwIiwiQWRkUHJvcGVydHkiLCJ1cmwiLCJHZXRQYWdlVVJMIiwiaXNQb3B1cEFwcGxldCIsIkdldFBvcHVwQXBwbGV0TmFtZSIsImlzUGlja0FwcGxldCIsIkdldFBpY2tBcHBsZXROYW1lIiwiaXNPcGVuIiwiY3VyclBvcHVwcyIsIkdldFBvcHVwQ29udHJvbCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBQSxNQUFNLENBQUNDLE9BQVAsR0FBaUIsVUFBVUMsRUFB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ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07XG4iLCIvLyAyMi4xLjMuMzEgQXJyYXkucHJvdG90eXBlW0BAdW5zY29wYWJsZXNdXG52YXIgVU5TQ09QQUJMRVMgPSByZXF1aXJlKCcuL193a3MnKSgndW5zY29wYWJsZXMnKTtcbnZhciBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuaWYgKEFycmF5UHJvdG9bVU5TQ09QQUJMRVNdID09IHVuZGVmaW5lZCkgcmVxdWlyZSgnLi9faGlkZScpKEFycmF5UHJvdG8sIFVOU0NPUEFCTEVTLCB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgQXJyYXlQcm90b1tVTlNDT1BBQkxFU11ba2V5XSA9IHRydWU7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIENvbnN0cnVjdG9yLCBuYW1lLCBmb3JiaWRkZW5GaWVsZCkge1xuICBpZiAoIShpdCBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSB8fCAoZm9yYmlkZGVuRmllbGQgIT09IHVuZGVmaW5lZCAmJiBmb3JiaWRkZW5GaWVsZCBpbiBpdCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IobmFtZSArICc6IGluY29ycmVjdCBpbnZvY2F0aW9uIScpO1xuICB9IHJldHVybiBpdDtcbn07XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07XG4iLCIvLyBmYWxzZSAtPiBBcnJheSNpbmRleE9mXG4vLyB0cnVlICAtPiBBcnJheSNpbmNsdWRlc1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIHRvQWJzb2x1dGVJbmRleCA9IHJlcXVpcmUoJy4vX3RvLWFic29sdXRlLWluZGV4Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChJU19JTkNMVURFUykge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBlbCwgZnJvbUluZGV4KSB7XG4gICAgdmFyIE8gPSB0b0lPYmplY3QoJHRoaXMpO1xuICAgIHZhciBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgdmFyIGluZGV4ID0gdG9BYnNvbHV0ZUluZGV4KGZyb21JbmRleCwgbGVuZ3RoKTtcbiAgICB2YXIgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICBpZiAoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpIHdoaWxlIChsZW5ndGggPiBpbmRleCkge1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgICAgaWYgKHZhbHVlICE9IHZhbHVlKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSNpbmRleE9mIGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSBpZiAoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTykge1xuICAgICAgaWYgKE9baW5kZXhdID09PSBlbCkgcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcbiIsIi8vIGdldHRpbmcgdGFnIGZyb20gMTkuMS4zLjYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZygpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG52YXIgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG4vLyBFUzMgd3JvbmcgaGVyZVxudmFyIEFSRyA9IGNvZihmdW5jdGlvbiAoKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ0FyZ3VtZW50cyc7XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIFNjcmlwdCBBY2Nlc3MgRGVuaWVkIGVycm9yXG52YXIgdHJ5R2V0ID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gaXRba2V5XTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgTywgVCwgQjtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgOiB0eXBlb2YgKFQgPSB0cnlHZXQoTyA9IE9iamVjdChpdCksIFRBRykpID09ICdzdHJpbmcnID8gVFxuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQVJHID8gY29mKE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKEIgPSBjb2YoTykpID09ICdPYmplY3QnICYmIHR5cGVvZiBPLmNhbGxlZSA9PSAnZnVuY3Rpb24nID8gJ0FyZ3VtZW50cycgOiBCO1xufTtcbiIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpO1xudmFyIHJlZGVmaW5lQWxsID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUtYWxsJyk7XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgYW5JbnN0YW5jZSA9IHJlcXVpcmUoJy4vX2FuLWluc3RhbmNlJyk7XG52YXIgZm9yT2YgPSByZXF1aXJlKCcuL19mb3Itb2YnKTtcbnZhciAkaXRlckRlZmluZSA9IHJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJyk7XG52YXIgc3RlcCA9IHJlcXVpcmUoJy4vX2l0ZXItc3RlcCcpO1xudmFyIHNldFNwZWNpZXMgPSByZXF1aXJlKCcuL19zZXQtc3BlY2llcycpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcbnZhciBmYXN0S2V5ID0gcmVxdWlyZSgnLi9fbWV0YScpLmZhc3RLZXk7XG52YXIgdmFsaWRhdGUgPSByZXF1aXJlKCcuL192YWxpZGF0ZS1jb2xsZWN0aW9uJyk7XG52YXIgU0laRSA9IERFU0NSSVBUT1JTID8gJ19zJyA6ICdzaXplJztcblxudmFyIGdldEVudHJ5ID0gZnVuY3Rpb24gKHRoYXQsIGtleSkge1xuICAvLyBmYXN0IGNhc2VcbiAgdmFyIGluZGV4ID0gZmFzdEtleShrZXkpO1xuICB2YXIgZW50cnk7XG4gIGlmIChpbmRleCAhPT0gJ0YnKSByZXR1cm4gdGhhdC5faVtpbmRleF07XG4gIC8vIGZyb3plbiBvYmplY3QgY2FzZVxuICBmb3IgKGVudHJ5ID0gdGhhdC5fZjsgZW50cnk7IGVudHJ5ID0gZW50cnkubikge1xuICAgIGlmIChlbnRyeS5rID09IGtleSkgcmV0dXJuIGVudHJ5O1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZ2V0Q29uc3RydWN0b3I6IGZ1bmN0aW9uICh3cmFwcGVyLCBOQU1FLCBJU19NQVAsIEFEREVSKSB7XG4gICAgdmFyIEMgPSB3cmFwcGVyKGZ1bmN0aW9uICh0aGF0LCBpdGVyYWJsZSkge1xuICAgICAgYW5JbnN0YW5jZSh0aGF0LCBDLCBOQU1FLCAnX2knKTtcbiAgICAgIHRoYXQuX3QgPSBOQU1FOyAgICAgICAgIC8vIGNvbGxlY3Rpb24gdHlwZVxuICAgICAgdGhhdC5faSA9IGNyZWF0ZShudWxsKTsgLy8gaW5kZXhcbiAgICAgIHRoYXQuX2YgPSB1bmRlZmluZWQ7ICAgIC8vIGZpcnN0IGVudHJ5XG4gICAgICB0aGF0Ll9sID0gdW5kZWZpbmVkOyAgICAvLyBsYXN0IGVudHJ5XG4gICAgICB0aGF0W1NJWkVdID0gMDsgICAgICAgICAvLyBzaXplXG4gICAgICBpZiAoaXRlcmFibGUgIT0gdW5kZWZpbmVkKSBmb3JPZihpdGVyYWJsZSwgSVNfTUFQLCB0aGF0W0FEREVSXSwgdGhhdCk7XG4gICAgfSk7XG4gICAgcmVkZWZpbmVBbGwoQy5wcm90b3R5cGUsIHtcbiAgICAgIC8vIDIzLjEuMy4xIE1hcC5wcm90b3R5cGUuY2xlYXIoKVxuICAgICAgLy8gMjMuMi4zLjIgU2V0LnByb3RvdHlwZS5jbGVhcigpXG4gICAgICBjbGVhcjogZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgICAgIGZvciAodmFyIHRoYXQgPSB2YWxpZGF0ZSh0aGlzLCBOQU1FKSwgZGF0YSA9IHRoYXQuX2ksIGVudHJ5ID0gdGhhdC5fZjsgZW50cnk7IGVudHJ5ID0gZW50cnkubikge1xuICAgICAgICAgIGVudHJ5LnIgPSB0cnVlO1xuICAgICAgICAgIGlmIChlbnRyeS5wKSBlbnRyeS5wID0gZW50cnkucC5uID0gdW5kZWZpbmVkO1xuICAgICAgICAgIGRlbGV0ZSBkYXRhW2VudHJ5LmldO1xuICAgICAgICB9XG4gICAgICAgIHRoYXQuX2YgPSB0aGF0Ll9sID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGF0W1NJWkVdID0gMDtcbiAgICAgIH0sXG4gICAgICAvLyAyMy4xLjMuMyBNYXAucHJvdG90eXBlLmRlbGV0ZShrZXkpXG4gICAgICAvLyAyMy4yLjMuNCBTZXQucHJvdG90eXBlLmRlbGV0ZSh2YWx1ZSlcbiAgICAgICdkZWxldGUnOiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciB0aGF0ID0gdmFsaWRhdGUodGhpcywgTkFNRSk7XG4gICAgICAgIHZhciBlbnRyeSA9IGdldEVudHJ5KHRoYXQsIGtleSk7XG4gICAgICAgIGlmIChlbnRyeSkge1xuICAgICAgICAgIHZhciBuZXh0ID0gZW50cnkubjtcbiAgICAgICAgICB2YXIgcHJldiA9IGVudHJ5LnA7XG4gICAgICAgICAgZGVsZXRlIHRoYXQuX2lbZW50cnkuaV07XG4gICAgICAgICAgZW50cnkuciA9IHRydWU7XG4gICAgICAgICAgaWYgKHByZXYpIHByZXYubiA9IG5leHQ7XG4gICAgICAgICAgaWYgKG5leHQpIG5leHQucCA9IHByZXY7XG4gICAgICAgICAgaWYgKHRoYXQuX2YgPT0gZW50cnkpIHRoYXQuX2YgPSBuZXh0O1xuICAgICAgICAgIGlmICh0aGF0Ll9sID09IGVudHJ5KSB0aGF0Ll9sID0gcHJldjtcbiAgICAgICAgICB0aGF0W1NJWkVdLS07XG4gICAgICAgIH0gcmV0dXJuICEhZW50cnk7XG4gICAgICB9LFxuICAgICAgLy8gMjMuMi4zLjYgU2V0LnByb3RvdHlwZS5mb3JFYWNoKGNhbGxiYWNrZm4sIHRoaXNBcmcgPSB1bmRlZmluZWQpXG4gICAgICAvLyAyMy4xLjMuNSBNYXAucHJvdG90eXBlLmZvckVhY2goY2FsbGJhY2tmbiwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbiAgICAgIGZvckVhY2g6IGZ1bmN0aW9uIGZvckVhY2goY2FsbGJhY2tmbiAvKiAsIHRoYXQgPSB1bmRlZmluZWQgKi8pIHtcbiAgICAgICAgdmFsaWRhdGUodGhpcywgTkFNRSk7XG4gICAgICAgIHZhciBmID0gY3R4KGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkLCAzKTtcbiAgICAgICAgdmFyIGVudHJ5O1xuICAgICAgICB3aGlsZSAoZW50cnkgPSBlbnRyeSA/IGVudHJ5Lm4gOiB0aGlzLl9mKSB7XG4gICAgICAgICAgZihlbnRyeS52LCBlbnRyeS5rLCB0aGlzKTtcbiAgICAgICAgICAvLyByZXZlcnQgdG8gdGhlIGxhc3QgZXhpc3RpbmcgZW50cnlcbiAgICAgICAgICB3aGlsZSAoZW50cnkgJiYgZW50cnkucikgZW50cnkgPSBlbnRyeS5wO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8gMjMuMS4zLjcgTWFwLnByb3RvdHlwZS5oYXMoa2V5KVxuICAgICAgLy8gMjMuMi4zLjcgU2V0LnByb3RvdHlwZS5oYXModmFsdWUpXG4gICAgICBoYXM6IGZ1bmN0aW9uIGhhcyhrZXkpIHtcbiAgICAgICAgcmV0dXJuICEhZ2V0RW50cnkodmFsaWRhdGUodGhpcywgTkFNRSksIGtleSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKERFU0NSSVBUT1JTKSBkUChDLnByb3RvdHlwZSwgJ3NpemUnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRlKHRoaXMsIE5BTUUpW1NJWkVdO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBDO1xuICB9LFxuICBkZWY6IGZ1bmN0aW9uICh0aGF0LCBrZXksIHZhbHVlKSB7XG4gICAgdmFyIGVudHJ5ID0gZ2V0RW50cnkodGhhdCwga2V5KTtcbiAgICB2YXIgcHJldiwgaW5kZXg7XG4gICAgLy8gY2hhbmdlIGV4aXN0aW5nIGVudHJ5XG4gICAgaWYgKGVudHJ5KSB7XG4gICAgICBlbnRyeS52ID0gdmFsdWU7XG4gICAgLy8gY3JlYXRlIG5ldyBlbnRyeVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGF0Ll9sID0gZW50cnkgPSB7XG4gICAgICAgIGk6IGluZGV4ID0gZmFzdEtleShrZXksIHRydWUpLCAvLyA8LSBpbmRleFxuICAgICAgICBrOiBrZXksICAgICAgICAgICAgICAgICAgICAgICAgLy8gPC0ga2V5XG4gICAgICAgIHY6IHZhbHVlLCAgICAgICAgICAgICAgICAgICAgICAvLyA8LSB2YWx1ZVxuICAgICAgICBwOiBwcmV2ID0gdGhhdC5fbCwgICAgICAgICAgICAgLy8gPC0gcHJldmlvdXMgZW50cnlcbiAgICAgICAgbjogdW5kZWZpbmVkLCAgICAgICAgICAgICAgICAgIC8vIDwtIG5leHQgZW50cnlcbiAgICAgICAgcjogZmFsc2UgICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIHJlbW92ZWRcbiAgICAgIH07XG4gICAgICBpZiAoIXRoYXQuX2YpIHRoYXQuX2YgPSBlbnRyeTtcbiAgICAgIGlmIChwcmV2KSBwcmV2Lm4gPSBlbnRyeTtcbiAgICAgIHRoYXRbU0laRV0rKztcbiAgICAgIC8vIGFkZCB0byBpbmRleFxuICAgICAgaWYgKGluZGV4ICE9PSAnRicpIHRoYXQuX2lbaW5kZXhdID0gZW50cnk7XG4gICAgfSByZXR1cm4gdGhhdDtcbiAgfSxcbiAgZ2V0RW50cnk6IGdldEVudHJ5LFxuICBzZXRTdHJvbmc6IGZ1bmN0aW9uIChDLCBOQU1FLCBJU19NQVApIHtcbiAgICAvLyBhZGQgLmtleXMsIC52YWx1ZXMsIC5lbnRyaWVzLCBbQEBpdGVyYXRvcl1cbiAgICAvLyAyMy4xLjMuNCwgMjMuMS4zLjgsIDIzLjEuMy4xMSwgMjMuMS4zLjEyLCAyMy4yLjMuNSwgMjMuMi4zLjgsIDIzLjIuMy4xMCwgMjMuMi4zLjExXG4gICAgJGl0ZXJEZWZpbmUoQywgTkFNRSwgZnVuY3Rpb24gKGl0ZXJhdGVkLCBraW5kKSB7XG4gICAgICB0aGlzLl90ID0gdmFsaWRhdGUoaXRlcmF0ZWQsIE5BTUUpOyAvLyB0YXJnZXRcbiAgICAgIHRoaXMuX2sgPSBraW5kOyAgICAgICAgICAgICAgICAgICAgIC8vIGtpbmRcbiAgICAgIHRoaXMuX2wgPSB1bmRlZmluZWQ7ICAgICAgICAgICAgICAgIC8vIHByZXZpb3VzXG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICAgdmFyIGtpbmQgPSB0aGF0Ll9rO1xuICAgICAgdmFyIGVudHJ5ID0gdGhhdC5fbDtcbiAgICAgIC8vIHJldmVydCB0byB0aGUgbGFzdCBleGlzdGluZyBlbnRyeVxuICAgICAgd2hpbGUgKGVudHJ5ICYmIGVudHJ5LnIpIGVudHJ5ID0gZW50cnkucDtcbiAgICAgIC8vIGdldCBuZXh0IGVudHJ5XG4gICAgICBpZiAoIXRoYXQuX3QgfHwgISh0aGF0Ll9sID0gZW50cnkgPSBlbnRyeSA/IGVudHJ5Lm4gOiB0aGF0Ll90Ll9mKSkge1xuICAgICAgICAvLyBvciBmaW5pc2ggdGhlIGl0ZXJhdGlvblxuICAgICAgICB0aGF0Ll90ID0gdW5kZWZpbmVkO1xuICAgICAgICByZXR1cm4gc3RlcCgxKTtcbiAgICAgIH1cbiAgICAgIC8vIHJldHVybiBzdGVwIGJ5IGtpbmRcbiAgICAgIGlmIChraW5kID09ICdrZXlzJykgcmV0dXJuIHN0ZXAoMCwgZW50cnkuayk7XG4gICAgICBpZiAoa2luZCA9PSAndmFsdWVzJykgcmV0dXJuIHN0ZXAoMCwgZW50cnkudik7XG4gICAgICByZXR1cm4gc3RlcCgwLCBbZW50cnkuaywgZW50cnkudl0pO1xuICAgIH0sIElTX01BUCA/ICdlbnRyaWVzJyA6ICd2YWx1ZXMnLCAhSVNfTUFQLCB0cnVlKTtcblxuICAgIC8vIGFkZCBbQEBzcGVjaWVzXSwgMjMuMS4yLjIsIDIzLjIuMi4yXG4gICAgc2V0U3BlY2llcyhOQU1FKTtcbiAgfVxufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIHJlZGVmaW5lQWxsID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUtYWxsJyk7XG52YXIgbWV0YSA9IHJlcXVpcmUoJy4vX21ldGEnKTtcbnZhciBmb3JPZiA9IHJlcXVpcmUoJy4vX2Zvci1vZicpO1xudmFyIGFuSW5zdGFuY2UgPSByZXF1aXJlKCcuL19hbi1pbnN0YW5jZScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xudmFyICRpdGVyRGV0ZWN0ID0gcmVxdWlyZSgnLi9faXRlci1kZXRlY3QnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgaW5oZXJpdElmUmVxdWlyZWQgPSByZXF1aXJlKCcuL19pbmhlcml0LWlmLXJlcXVpcmVkJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE5BTUUsIHdyYXBwZXIsIG1ldGhvZHMsIGNvbW1vbiwgSVNfTUFQLCBJU19XRUFLKSB7XG4gIHZhciBCYXNlID0gZ2xvYmFsW05BTUVdO1xuICB2YXIgQyA9IEJhc2U7XG4gIHZhciBBRERFUiA9IElTX01BUCA/ICdzZXQnIDogJ2FkZCc7XG4gIHZhciBwcm90byA9IEMgJiYgQy5wcm90b3R5cGU7XG4gIHZhciBPID0ge307XG4gIHZhciBmaXhNZXRob2QgPSBmdW5jdGlvbiAoS0VZKSB7XG4gICAgdmFyIGZuID0gcHJvdG9bS0VZXTtcbiAgICByZWRlZmluZShwcm90bywgS0VZLFxuICAgICAgS0VZID09ICdkZWxldGUnID8gZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgcmV0dXJuIElTX1dFQUsgJiYgIWlzT2JqZWN0KGEpID8gZmFsc2UgOiBmbi5jYWxsKHRoaXMsIGEgPT09IDAgPyAwIDogYSk7XG4gICAgICB9IDogS0VZID09ICdoYXMnID8gZnVuY3Rpb24gaGFzKGEpIHtcbiAgICAgICAgcmV0dXJuIElTX1dFQUsgJiYgIWlzT2JqZWN0KGEpID8gZmFsc2UgOiBmbi5jYWxsKHRoaXMsIGEgPT09IDAgPyAwIDogYSk7XG4gICAgICB9IDogS0VZID09ICdnZXQnID8gZnVuY3Rpb24gZ2V0KGEpIHtcbiAgICAgICAgcmV0dXJuIElTX1dFQUsgJiYgIWlzT2JqZWN0KGEpID8gdW5kZWZpbmVkIDogZm4uY2FsbCh0aGlzLCBhID09PSAwID8gMCA6IGEpO1xuICAgICAgfSA6IEtFWSA9PSAnYWRkJyA/IGZ1bmN0aW9uIGFkZChhKSB7IGZuLmNhbGwodGhpcywgYSA9PT0gMCA/IDAgOiBhKTsgcmV0dXJuIHRoaXM7IH1cbiAgICAgICAgOiBmdW5jdGlvbiBzZXQoYSwgYikgeyBmbi5jYWxsKHRoaXMsIGEgPT09IDAgPyAwIDogYSwgYik7IHJldHVybiB0aGlzOyB9XG4gICAgKTtcbiAgfTtcbiAgaWYgKHR5cGVvZiBDICE9ICdmdW5jdGlvbicgfHwgIShJU19XRUFLIHx8IHByb3RvLmZvckVhY2ggJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICBuZXcgQygpLmVudHJpZXMoKS5uZXh0KCk7XG4gIH0pKSkge1xuICAgIC8vIGNyZWF0ZSBjb2xsZWN0aW9uIGNvbnN0cnVjdG9yXG4gICAgQyA9IGNvbW1vbi5nZXRDb25zdHJ1Y3Rvcih3cmFwcGVyLCBOQU1FLCBJU19NQVAsIEFEREVSKTtcbiAgICByZWRlZmluZUFsbChDLnByb3RvdHlwZSwgbWV0aG9kcyk7XG4gICAgbWV0YS5ORUVEID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgaW5zdGFuY2UgPSBuZXcgQygpO1xuICAgIC8vIGVhcmx5IGltcGxlbWVudGF0aW9ucyBub3Qgc3VwcG9ydHMgY2hhaW5pbmdcbiAgICB2YXIgSEFTTlRfQ0hBSU5JTkcgPSBpbnN0YW5jZVtBRERFUl0oSVNfV0VBSyA/IHt9IDogLTAsIDEpICE9IGluc3RhbmNlO1xuICAgIC8vIFY4IH4gIENocm9taXVtIDQwLSB3ZWFrLWNvbGxlY3Rpb25zIHRocm93cyBvbiBwcmltaXRpdmVzLCBidXQgc2hvdWxkIHJldHVybiBmYWxzZVxuICAgIHZhciBUSFJPV1NfT05fUFJJTUlUSVZFUyA9IGZhaWxzKGZ1bmN0aW9uICgpIHsgaW5zdGFuY2UuaGFzKDEpOyB9KTtcbiAgICAvLyBtb3N0IGVhcmx5IGltcGxlbWVudGF0aW9ucyBkb2Vzbid0IHN1cHBvcnRzIGl0ZXJhYmxlcywgbW9zdCBtb2Rlcm4gLSBub3QgY2xvc2UgaXQgY29ycmVjdGx5XG4gICAgdmFyIEFDQ0VQVF9JVEVSQUJMRVMgPSAkaXRlckRldGVjdChmdW5jdGlvbiAoaXRlcikgeyBuZXcgQyhpdGVyKTsgfSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XG4gICAgLy8gZm9yIGVhcmx5IGltcGxlbWVudGF0aW9ucyAtMCBhbmQgKzAgbm90IHRoZSBzYW1lXG4gICAgdmFyIEJVR0dZX1pFUk8gPSAhSVNfV0VBSyAmJiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBWOCB+IENocm9taXVtIDQyLSBmYWlscyBvbmx5IHdpdGggNSsgZWxlbWVudHNcbiAgICAgIHZhciAkaW5zdGFuY2UgPSBuZXcgQygpO1xuICAgICAgdmFyIGluZGV4ID0gNTtcbiAgICAgIHdoaWxlIChpbmRleC0tKSAkaW5zdGFuY2VbQURERVJdKGluZGV4LCBpbmRleCk7XG4gICAgICByZXR1cm4gISRpbnN0YW5jZS5oYXMoLTApO1xuICAgIH0pO1xuICAgIGlmICghQUNDRVBUX0lURVJBQkxFUykge1xuICAgICAgQyA9IHdyYXBwZXIoZnVuY3Rpb24gKHRhcmdldCwgaXRlcmFibGUpIHtcbiAgICAgICAgYW5JbnN0YW5jZSh0YXJnZXQsIEMsIE5BTUUpO1xuICAgICAgICB2YXIgdGhhdCA9IGluaGVyaXRJZlJlcXVpcmVkKG5ldyBCYXNlKCksIHRhcmdldCwgQyk7XG4gICAgICAgIGlmIChpdGVyYWJsZSAhPSB1bmRlZmluZWQpIGZvck9mKGl0ZXJhYmxlLCBJU19NQVAsIHRoYXRbQURERVJdLCB0aGF0KTtcbiAgICAgICAgcmV0dXJuIHRoYXQ7XG4gICAgICB9KTtcbiAgICAgIEMucHJvdG90eXBlID0gcHJvdG87XG4gICAgICBwcm90by5jb25zdHJ1Y3RvciA9IEM7XG4gICAgfVxuICAgIGlmIChUSFJPV1NfT05fUFJJTUlUSVZFUyB8fCBCVUdHWV9aRVJPKSB7XG4gICAgICBmaXhNZXRob2QoJ2RlbGV0ZScpO1xuICAgICAgZml4TWV0aG9kKCdoYXMnKTtcbiAgICAgIElTX01BUCAmJiBmaXhNZXRob2QoJ2dldCcpO1xuICAgIH1cbiAgICBpZiAoQlVHR1lfWkVSTyB8fCBIQVNOVF9DSEFJTklORykgZml4TWV0aG9kKEFEREVSKTtcbiAgICAvLyB3ZWFrIGNvbGxlY3Rpb25zIHNob3VsZCBub3QgY29udGFpbnMgLmNsZWFyIG1ldGhvZFxuICAgIGlmIChJU19XRUFLICYmIHByb3RvLmNsZWFyKSBkZWxldGUgcHJvdG8uY2xlYXI7XG4gIH1cblxuICBzZXRUb1N0cmluZ1RhZyhDLCBOQU1FKTtcblxuICBPW05BTUVdID0gQztcbiAgJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAoQyAhPSBCYXNlKSwgTyk7XG5cbiAgaWYgKCFJU19XRUFLKSBjb21tb24uc2V0U3Ryb25nKEMsIE5BTUUsIElTX01BUCk7XG5cbiAgcmV0dXJuIEM7XG59O1xuIiwidmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHsgdmVyc2lvbjogJzIuNS43JyB9O1xuaWYgKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpIF9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIGluZGV4LCB2YWx1ZSkge1xuICBpZiAoaW5kZXggaW4gb2JqZWN0KSAkZGVmaW5lUHJvcGVydHkuZihvYmplY3QsIGluZGV4LCBjcmVhdGVEZXNjKDAsIHZhbHVlKSk7XG4gIGVsc2Ugb2JqZWN0W2luZGV4XSA9IHZhbHVlO1xufTtcbiIsIi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZuLCB0aGF0LCBsZW5ndGgpIHtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYgKHRoYXQgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGZuO1xuICBzd2l0Y2ggKGxlbmd0aCkge1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uIChhKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uIChhLCBiLCBjKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbiAoLyogLi4uYXJncyAqLykge1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTtcbiIsIi8vIDcuMi4xIFJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgPT0gdW5kZWZpbmVkKSB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG4iLCIvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG59KTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQ7XG4vLyB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0JyBpbiBvbGQgSUVcbnZhciBpcyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpcyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuIiwiLy8gSUUgOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSAoXG4gICdjb25zdHJ1Y3RvcixoYXNPd25Qcm9wZXJ0eSxpc1Byb3RvdHlwZU9mLHByb3BlcnR5SXNFbnVtZXJhYmxlLHRvTG9jYWxlU3RyaW5nLHRvU3RyaW5nLHZhbHVlT2YnXG4pLnNwbGl0KCcsJyk7XG4iLCIvLyBhbGwgZW51bWVyYWJsZSBvYmplY3Qga2V5cywgaW5jbHVkZXMgc3ltYm9sc1xudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xudmFyIGdPUFMgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpO1xudmFyIHBJRSA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciByZXN1bHQgPSBnZXRLZXlzKGl0KTtcbiAgdmFyIGdldFN5bWJvbHMgPSBnT1BTLmY7XG4gIGlmIChnZXRTeW1ib2xzKSB7XG4gICAgdmFyIHN5bWJvbHMgPSBnZXRTeW1ib2xzKGl0KTtcbiAgICB2YXIgaXNFbnVtID0gcElFLmY7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBrZXk7XG4gICAgd2hpbGUgKHN5bWJvbHMubGVuZ3RoID4gaSkgaWYgKGlzRW51bS5jYWxsKGl0LCBrZXkgPSBzeW1ib2xzW2krK10pKSByZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24gKHR5cGUsIG5hbWUsIHNvdXJjZSkge1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRjtcbiAgdmFyIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0Lkc7XG4gIHZhciBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TO1xuICB2YXIgSVNfUFJPVE8gPSB0eXBlICYgJGV4cG9ydC5QO1xuICB2YXIgSVNfQklORCA9IHR5cGUgJiAkZXhwb3J0LkI7XG4gIHZhciB0YXJnZXQgPSBJU19HTE9CQUwgPyBnbG9iYWwgOiBJU19TVEFUSUMgPyBnbG9iYWxbbmFtZV0gfHwgKGdsb2JhbFtuYW1lXSA9IHt9KSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV07XG4gIHZhciBleHBvcnRzID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSk7XG4gIHZhciBleHBQcm90byA9IGV4cG9ydHNbUFJPVE9UWVBFXSB8fCAoZXhwb3J0c1tQUk9UT1RZUEVdID0ge30pO1xuICB2YXIga2V5LCBvd24sIG91dCwgZXhwO1xuICBpZiAoSVNfR0xPQkFMKSBzb3VyY2UgPSBuYW1lO1xuICBmb3IgKGtleSBpbiBzb3VyY2UpIHtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiB0YXJnZXRba2V5XSAhPT0gdW5kZWZpbmVkO1xuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgb3V0ID0gKG93biA/IHRhcmdldCA6IHNvdXJjZSlba2V5XTtcbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIGV4cCA9IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4dGVuZCBnbG9iYWxcbiAgICBpZiAodGFyZ2V0KSByZWRlZmluZSh0YXJnZXQsIGtleSwgb3V0LCB0eXBlICYgJGV4cG9ydC5VKTtcbiAgICAvLyBleHBvcnRcbiAgICBpZiAoZXhwb3J0c1trZXldICE9IG91dCkgaGlkZShleHBvcnRzLCBrZXksIGV4cCk7XG4gICAgaWYgKElTX1BST1RPICYmIGV4cFByb3RvW2tleV0gIT0gb3V0KSBleHBQcm90b1trZXldID0gb3V0O1xuICB9XG59O1xuZ2xvYmFsLmNvcmUgPSBjb3JlO1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YFxubW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xudmFyIHdrcyA9IHJlcXVpcmUoJy4vX3drcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChLRVksIGxlbmd0aCwgZXhlYykge1xuICB2YXIgU1lNQk9MID0gd2tzKEtFWSk7XG4gIHZhciBmbnMgPSBleGVjKGRlZmluZWQsIFNZTUJPTCwgJydbS0VZXSk7XG4gIHZhciBzdHJmbiA9IGZuc1swXTtcbiAgdmFyIHJ4Zm4gPSBmbnNbMV07XG4gIGlmIChmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIE8gPSB7fTtcbiAgICBPW1NZTUJPTF0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9O1xuICAgIHJldHVybiAnJ1tLRVldKE8pICE9IDc7XG4gIH0pKSB7XG4gICAgcmVkZWZpbmUoU3RyaW5nLnByb3RvdHlwZSwgS0VZLCBzdHJmbik7XG4gICAgaGlkZShSZWdFeHAucHJvdG90eXBlLCBTWU1CT0wsIGxlbmd0aCA9PSAyXG4gICAgICAvLyAyMS4yLjUuOCBSZWdFeHAucHJvdG90eXBlW0BAcmVwbGFjZV0oc3RyaW5nLCByZXBsYWNlVmFsdWUpXG4gICAgICAvLyAyMS4yLjUuMTEgUmVnRXhwLnByb3RvdHlwZVtAQHNwbGl0XShzdHJpbmcsIGxpbWl0KVxuICAgICAgPyBmdW5jdGlvbiAoc3RyaW5nLCBhcmcpIHsgcmV0dXJuIHJ4Zm4uY2FsbChzdHJpbmcsIHRoaXMsIGFyZyk7IH1cbiAgICAgIC8vIDIxLjIuNS42IFJlZ0V4cC5wcm90b3R5cGVbQEBtYXRjaF0oc3RyaW5nKVxuICAgICAgLy8gMjEuMi41LjkgUmVnRXhwLnByb3RvdHlwZVtAQHNlYXJjaF0oc3RyaW5nKVxuICAgICAgOiBmdW5jdGlvbiAoc3RyaW5nKSB7IHJldHVybiByeGZuLmNhbGwoc3RyaW5nLCB0aGlzKTsgfVxuICAgICk7XG4gIH1cbn07XG4iLCIndXNlIHN0cmljdCc7XG4vLyAyMS4yLjUuMyBnZXQgUmVnRXhwLnByb3RvdHlwZS5mbGFnc1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHRoYXQgPSBhbk9iamVjdCh0aGlzKTtcbiAgdmFyIHJlc3VsdCA9ICcnO1xuICBpZiAodGhhdC5nbG9iYWwpIHJlc3VsdCArPSAnZyc7XG4gIGlmICh0aGF0Lmlnbm9yZUNhc2UpIHJlc3VsdCArPSAnaSc7XG4gIGlmICh0aGF0Lm11bHRpbGluZSkgcmVzdWx0ICs9ICdtJztcbiAgaWYgKHRoYXQudW5pY29kZSkgcmVzdWx0ICs9ICd1JztcbiAgaWYgKHRoYXQuc3RpY2t5KSByZXN1bHQgKz0gJ3knO1xuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsInZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBjYWxsID0gcmVxdWlyZSgnLi9faXRlci1jYWxsJyk7XG52YXIgaXNBcnJheUl0ZXIgPSByZXF1aXJlKCcuL19pcy1hcnJheS1pdGVyJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIGdldEl0ZXJGbiA9IHJlcXVpcmUoJy4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG52YXIgQlJFQUsgPSB7fTtcbnZhciBSRVRVUk4gPSB7fTtcbnZhciBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlcmFibGUsIGVudHJpZXMsIGZuLCB0aGF0LCBJVEVSQVRPUikge1xuICB2YXIgaXRlckZuID0gSVRFUkFUT1IgPyBmdW5jdGlvbiAoKSB7IHJldHVybiBpdGVyYWJsZTsgfSA6IGdldEl0ZXJGbihpdGVyYWJsZSk7XG4gIHZhciBmID0gY3R4KGZuLCB0aGF0LCBlbnRyaWVzID8gMiA6IDEpO1xuICB2YXIgaW5kZXggPSAwO1xuICB2YXIgbGVuZ3RoLCBzdGVwLCBpdGVyYXRvciwgcmVzdWx0O1xuICBpZiAodHlwZW9mIGl0ZXJGbiAhPSAnZnVuY3Rpb24nKSB0aHJvdyBUeXBlRXJyb3IoaXRlcmFibGUgKyAnIGlzIG5vdCBpdGVyYWJsZSEnKTtcbiAgLy8gZmFzdCBjYXNlIGZvciBhcnJheXMgd2l0aCBkZWZhdWx0IGl0ZXJhdG9yXG4gIGlmIChpc0FycmF5SXRlcihpdGVyRm4pKSBmb3IgKGxlbmd0aCA9IHRvTGVuZ3RoKGl0ZXJhYmxlLmxlbmd0aCk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKSB7XG4gICAgcmVzdWx0ID0gZW50cmllcyA/IGYoYW5PYmplY3Qoc3RlcCA9IGl0ZXJhYmxlW2luZGV4XSlbMF0sIHN0ZXBbMV0pIDogZihpdGVyYWJsZVtpbmRleF0pO1xuICAgIGlmIChyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKSByZXR1cm4gcmVzdWx0O1xuICB9IGVsc2UgZm9yIChpdGVyYXRvciA9IGl0ZXJGbi5jYWxsKGl0ZXJhYmxlKTsgIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOykge1xuICAgIHJlc3VsdCA9IGNhbGwoaXRlcmF0b3IsIGYsIHN0ZXAudmFsdWUsIGVudHJpZXMpO1xuICAgIGlmIChyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKSByZXR1cm4gcmVzdWx0O1xuICB9XG59O1xuZXhwb3J0cy5CUkVBSyA9IEJSRUFLO1xuZXhwb3J0cy5SRVRVUk4gPSBSRVRVUk47XG4iLCIvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxudmFyIGdsb2JhbCA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoXG4gID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZiAodHlwZW9mIF9fZyA9PSAnbnVtYmVyJykgX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4iLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59O1xuIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuIiwidmFyIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQ7XG5tb2R1bGUuZXhwb3J0cyA9IGRvY3VtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiIsIm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnZGl2JyksICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX3NldC1wcm90bycpLnNldDtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRoYXQsIHRhcmdldCwgQykge1xuICB2YXIgUyA9IHRhcmdldC5jb25zdHJ1Y3RvcjtcbiAgdmFyIFA7XG4gIGlmIChTICE9PSBDICYmIHR5cGVvZiBTID09ICdmdW5jdGlvbicgJiYgKFAgPSBTLnByb3RvdHlwZSkgIT09IEMucHJvdG90eXBlICYmIGlzT2JqZWN0KFApICYmIHNldFByb3RvdHlwZU9mKSB7XG4gICAgc2V0UHJvdG90eXBlT2YodGhhdCwgUCk7XG4gIH0gcmV0dXJuIHRoYXQ7XG59O1xuIiwiLy8gZmFzdCBhcHBseSwgaHR0cDovL2pzcGVyZi5sbmtpdC5jb20vZmFzdC1hcHBseS81XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbiwgYXJncywgdGhhdCkge1xuICB2YXIgdW4gPSB0aGF0ID09PSB1bmRlZmluZWQ7XG4gIHN3aXRjaCAoYXJncy5sZW5ndGgpIHtcbiAgICBjYXNlIDA6IHJldHVybiB1biA/IGZuKClcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCk7XG4gICAgY2FzZSAxOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdKTtcbiAgICBjYXNlIDI6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgIGNhc2UgMzogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgY2FzZSA0OiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKTtcbiAgfSByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJncyk7XG59O1xuIiwiLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCkgPyBPYmplY3QgOiBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTtcbiIsIi8vIGNoZWNrIG9uIGRlZmF1bHQgQXJyYXkgaXRlcmF0b3JcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCAhPT0gdW5kZWZpbmVkICYmIChJdGVyYXRvcnMuQXJyYXkgPT09IGl0IHx8IEFycmF5UHJvdG9bSVRFUkFUT1JdID09PSBpdCk7XG59O1xuIiwiLy8gNy4yLjIgSXNBcnJheShhcmd1bWVudClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiBpc0FycmF5KGFyZykge1xuICByZXR1cm4gY29mKGFyZykgPT0gJ0FycmF5Jztcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTtcbiIsIi8vIDcuMi44IElzUmVnRXhwKGFyZ3VtZW50KVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG52YXIgTUFUQ0ggPSByZXF1aXJlKCcuL193a3MnKSgnbWF0Y2gnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBpc1JlZ0V4cDtcbiAgcmV0dXJuIGlzT2JqZWN0KGl0KSAmJiAoKGlzUmVnRXhwID0gaXRbTUFUQ0hdKSAhPT0gdW5kZWZpbmVkID8gISFpc1JlZ0V4cCA6IGNvZihpdCkgPT0gJ1JlZ0V4cCcpO1xufTtcbiIsIi8vIGNhbGwgc29tZXRoaW5nIG9uIGl0ZXJhdG9yIHN0ZXAgd2l0aCBzYWZlIGNsb3Npbmcgb24gZXJyb3JcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlcmF0b3IsIGZuLCB2YWx1ZSwgZW50cmllcykge1xuICB0cnkge1xuICAgIHJldHVybiBlbnRyaWVzID8gZm4oYW5PYmplY3QodmFsdWUpWzBdLCB2YWx1ZVsxXSkgOiBmbih2YWx1ZSk7XG4gIC8vIDcuNC42IEl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsIGNvbXBsZXRpb24pXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB2YXIgcmV0ID0gaXRlcmF0b3JbJ3JldHVybiddO1xuICAgIGlmIChyZXQgIT09IHVuZGVmaW5lZCkgYW5PYmplY3QocmV0LmNhbGwoaXRlcmF0b3IpKTtcbiAgICB0aHJvdyBlO1xuICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKTtcbnZhciBkZXNjcmlwdG9yID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuXG4vLyAyNS4xLjIuMS4xICVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faGlkZScpKEl0ZXJhdG9yUHJvdG90eXBlLCByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KSB7XG4gIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9IGNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwgeyBuZXh0OiBkZXNjcmlwdG9yKDEsIG5leHQpIH0pO1xuICBzZXRUb1N0cmluZ1RhZyhDb25zdHJ1Y3RvciwgTkFNRSArICcgSXRlcmF0b3InKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgJGl0ZXJDcmVhdGUgPSByZXF1aXJlKCcuL19pdGVyLWNyZWF0ZScpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEJVR0dZID0gIShbXS5rZXlzICYmICduZXh0JyBpbiBbXS5rZXlzKCkpOyAvLyBTYWZhcmkgaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG52YXIgRkZfSVRFUkFUT1IgPSAnQEBpdGVyYXRvcic7XG52YXIgS0VZUyA9ICdrZXlzJztcbnZhciBWQUxVRVMgPSAndmFsdWVzJztcblxudmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChCYXNlLCBOQU1FLCBDb25zdHJ1Y3RvciwgbmV4dCwgREVGQVVMVCwgSVNfU0VULCBGT1JDRUQpIHtcbiAgJGl0ZXJDcmVhdGUoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpO1xuICB2YXIgZ2V0TWV0aG9kID0gZnVuY3Rpb24gKGtpbmQpIHtcbiAgICBpZiAoIUJVR0dZICYmIGtpbmQgaW4gcHJvdG8pIHJldHVybiBwcm90b1traW5kXTtcbiAgICBzd2l0Y2ggKGtpbmQpIHtcbiAgICAgIGNhc2UgS0VZUzogcmV0dXJuIGZ1bmN0aW9uIGtleXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgICBjYXNlIFZBTFVFUzogcmV0dXJuIGZ1bmN0aW9uIHZhbHVlcygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICB9IHJldHVybiBmdW5jdGlvbiBlbnRyaWVzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICB9O1xuICB2YXIgVEFHID0gTkFNRSArICcgSXRlcmF0b3InO1xuICB2YXIgREVGX1ZBTFVFUyA9IERFRkFVTFQgPT0gVkFMVUVTO1xuICB2YXIgVkFMVUVTX0JVRyA9IGZhbHNlO1xuICB2YXIgcHJvdG8gPSBCYXNlLnByb3RvdHlwZTtcbiAgdmFyICRuYXRpdmUgPSBwcm90b1tJVEVSQVRPUl0gfHwgcHJvdG9bRkZfSVRFUkFUT1JdIHx8IERFRkFVTFQgJiYgcHJvdG9bREVGQVVMVF07XG4gIHZhciAkZGVmYXVsdCA9ICRuYXRpdmUgfHwgZ2V0TWV0aG9kKERFRkFVTFQpO1xuICB2YXIgJGVudHJpZXMgPSBERUZBVUxUID8gIURFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZCgnZW50cmllcycpIDogdW5kZWZpbmVkO1xuICB2YXIgJGFueU5hdGl2ZSA9IE5BTUUgPT0gJ0FycmF5JyA/IHByb3RvLmVudHJpZXMgfHwgJG5hdGl2ZSA6ICRuYXRpdmU7XG4gIHZhciBtZXRob2RzLCBrZXksIEl0ZXJhdG9yUHJvdG90eXBlO1xuICAvLyBGaXggbmF0aXZlXG4gIGlmICgkYW55TmF0aXZlKSB7XG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZigkYW55TmF0aXZlLmNhbGwobmV3IEJhc2UoKSkpO1xuICAgIGlmIChJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSAmJiBJdGVyYXRvclByb3RvdHlwZS5uZXh0KSB7XG4gICAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXG4gICAgICBzZXRUb1N0cmluZ1RhZyhJdGVyYXRvclByb3RvdHlwZSwgVEFHLCB0cnVlKTtcbiAgICAgIC8vIGZpeCBmb3Igc29tZSBvbGQgZW5naW5lc1xuICAgICAgaWYgKCFMSUJSQVJZICYmIHR5cGVvZiBJdGVyYXRvclByb3RvdHlwZVtJVEVSQVRPUl0gIT0gJ2Z1bmN0aW9uJykgaGlkZShJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIHJldHVyblRoaXMpO1xuICAgIH1cbiAgfVxuICAvLyBmaXggQXJyYXkje3ZhbHVlcywgQEBpdGVyYXRvcn0ubmFtZSBpbiBWOCAvIEZGXG4gIGlmIChERUZfVkFMVUVTICYmICRuYXRpdmUgJiYgJG5hdGl2ZS5uYW1lICE9PSBWQUxVRVMpIHtcbiAgICBWQUxVRVNfQlVHID0gdHJ1ZTtcbiAgICAkZGVmYXVsdCA9IGZ1bmN0aW9uIHZhbHVlcygpIHsgcmV0dXJuICRuYXRpdmUuY2FsbCh0aGlzKTsgfTtcbiAgfVxuICAvLyBEZWZpbmUgaXRlcmF0b3JcbiAgaWYgKCghTElCUkFSWSB8fCBGT1JDRUQpICYmIChCVUdHWSB8fCBWQUxVRVNfQlVHIHx8ICFwcm90b1tJVEVSQVRPUl0pKSB7XG4gICAgaGlkZShwcm90bywgSVRFUkFUT1IsICRkZWZhdWx0KTtcbiAgfVxuICAvLyBQbHVnIGZvciBsaWJyYXJ5XG4gIEl0ZXJhdG9yc1tOQU1FXSA9ICRkZWZhdWx0O1xuICBJdGVyYXRvcnNbVEFHXSA9IHJldHVyblRoaXM7XG4gIGlmIChERUZBVUxUKSB7XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHZhbHVlczogREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKFZBTFVFUyksXG4gICAgICBrZXlzOiBJU19TRVQgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChLRVlTKSxcbiAgICAgIGVudHJpZXM6ICRlbnRyaWVzXG4gICAgfTtcbiAgICBpZiAoRk9SQ0VEKSBmb3IgKGtleSBpbiBtZXRob2RzKSB7XG4gICAgICBpZiAoIShrZXkgaW4gcHJvdG8pKSByZWRlZmluZShwcm90bywga2V5LCBtZXRob2RzW2tleV0pO1xuICAgIH0gZWxzZSAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChCVUdHWSB8fCBWQUxVRVNfQlVHKSwgTkFNRSwgbWV0aG9kcyk7XG4gIH1cbiAgcmV0dXJuIG1ldGhvZHM7XG59O1xuIiwidmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgU0FGRV9DTE9TSU5HID0gZmFsc2U7XG5cbnRyeSB7XG4gIHZhciByaXRlciA9IFs3XVtJVEVSQVRPUl0oKTtcbiAgcml0ZXJbJ3JldHVybiddID0gZnVuY3Rpb24gKCkgeyBTQUZFX0NMT1NJTkcgPSB0cnVlOyB9O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdGhyb3ctbGl0ZXJhbFxuICBBcnJheS5mcm9tKHJpdGVyLCBmdW5jdGlvbiAoKSB7IHRocm93IDI7IH0pO1xufSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMsIHNraXBDbG9zaW5nKSB7XG4gIGlmICghc2tpcENsb3NpbmcgJiYgIVNBRkVfQ0xPU0lORykgcmV0dXJuIGZhbHNlO1xuICB2YXIgc2FmZSA9IGZhbHNlO1xuICB0cnkge1xuICAgIHZhciBhcnIgPSBbN107XG4gICAgdmFyIGl0ZXIgPSBhcnJbSVRFUkFUT1JdKCk7XG4gICAgaXRlci5uZXh0ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4geyBkb25lOiBzYWZlID0gdHJ1ZSB9OyB9O1xuICAgIGFycltJVEVSQVRPUl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBpdGVyOyB9O1xuICAgIGV4ZWMoYXJyKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIHJldHVybiBzYWZlO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGRvbmUsIHZhbHVlKSB7XG4gIHJldHVybiB7IHZhbHVlOiB2YWx1ZSwgZG9uZTogISFkb25lIH07XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZmFsc2U7XG4iLCJ2YXIgTUVUQSA9IHJlcXVpcmUoJy4vX3VpZCcpKCdtZXRhJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBzZXREZXNjID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBpZCA9IDA7XG52YXIgaXNFeHRlbnNpYmxlID0gT2JqZWN0LmlzRXh0ZW5zaWJsZSB8fCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0cnVlO1xufTtcbnZhciBGUkVFWkUgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBpc0V4dGVuc2libGUoT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zKHt9KSk7XG59KTtcbnZhciBzZXRNZXRhID0gZnVuY3Rpb24gKGl0KSB7XG4gIHNldERlc2MoaXQsIE1FVEEsIHsgdmFsdWU6IHtcbiAgICBpOiAnTycgKyArK2lkLCAvLyBvYmplY3QgSURcbiAgICB3OiB7fSAgICAgICAgICAvLyB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9IH0pO1xufTtcbnZhciBmYXN0S2V5ID0gZnVuY3Rpb24gKGl0LCBjcmVhdGUpIHtcbiAgLy8gcmV0dXJuIHByaW1pdGl2ZSB3aXRoIHByZWZpeFxuICBpZiAoIWlzT2JqZWN0KGl0KSkgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJyA/IGl0IDogKHR5cGVvZiBpdCA9PSAnc3RyaW5nJyA/ICdTJyA6ICdQJykgKyBpdDtcbiAgaWYgKCFoYXMoaXQsIE1FVEEpKSB7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZiAoIWlzRXh0ZW5zaWJsZShpdCkpIHJldHVybiAnRic7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZiAoIWNyZWF0ZSkgcmV0dXJuICdFJztcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gb2JqZWN0IElEXG4gIH0gcmV0dXJuIGl0W01FVEFdLmk7XG59O1xudmFyIGdldFdlYWsgPSBmdW5jdGlvbiAoaXQsIGNyZWF0ZSkge1xuICBpZiAoIWhhcyhpdCwgTUVUQSkpIHtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmICghaXNFeHRlbnNpYmxlKGl0KSkgcmV0dXJuIHRydWU7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZiAoIWNyZWF0ZSkgcmV0dXJuIGZhbHNlO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBoYXNoIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH0gcmV0dXJuIGl0W01FVEFdLnc7XG59O1xuLy8gYWRkIG1ldGFkYXRhIG9uIGZyZWV6ZS1mYW1pbHkgbWV0aG9kcyBjYWxsaW5nXG52YXIgb25GcmVlemUgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKEZSRUVaRSAmJiBtZXRhLk5FRUQgJiYgaXNFeHRlbnNpYmxlKGl0KSAmJiAhaGFzKGl0LCBNRVRBKSkgc2V0TWV0YShpdCk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgbWV0YSA9IG1vZHVsZS5leHBvcnRzID0ge1xuICBLRVk6IE1FVEEsXG4gIE5FRUQ6IGZhbHNlLFxuICBmYXN0S2V5OiBmYXN0S2V5LFxuICBnZXRXZWFrOiBnZXRXZWFrLFxuICBvbkZyZWV6ZTogb25GcmVlemVcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgbWFjcm90YXNrID0gcmVxdWlyZSgnLi9fdGFzaycpLnNldDtcbnZhciBPYnNlcnZlciA9IGdsb2JhbC5NdXRhdGlvbk9ic2VydmVyIHx8IGdsb2JhbC5XZWJLaXRNdXRhdGlvbk9ic2VydmVyO1xudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciBQcm9taXNlID0gZ2xvYmFsLlByb21pc2U7XG52YXIgaXNOb2RlID0gcmVxdWlyZSgnLi9fY29mJykocHJvY2VzcykgPT0gJ3Byb2Nlc3MnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhlYWQsIGxhc3QsIG5vdGlmeTtcblxuICB2YXIgZmx1c2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHBhcmVudCwgZm47XG4gICAgaWYgKGlzTm9kZSAmJiAocGFyZW50ID0gcHJvY2Vzcy5kb21haW4pKSBwYXJlbnQuZXhpdCgpO1xuICAgIHdoaWxlIChoZWFkKSB7XG4gICAgICBmbiA9IGhlYWQuZm47XG4gICAgICBoZWFkID0gaGVhZC5uZXh0O1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm4oKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaWYgKGhlYWQpIG5vdGlmeSgpO1xuICAgICAgICBlbHNlIGxhc3QgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgIGlmIChwYXJlbnQpIHBhcmVudC5lbnRlcigpO1xuICB9O1xuXG4gIC8vIE5vZGUuanNcbiAgaWYgKGlzTm9kZSkge1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soZmx1c2gpO1xuICAgIH07XG4gIC8vIGJyb3dzZXJzIHdpdGggTXV0YXRpb25PYnNlcnZlciwgZXhjZXB0IGlPUyBTYWZhcmkgLSBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMzM5XG4gIH0gZWxzZSBpZiAoT2JzZXJ2ZXIgJiYgIShnbG9iYWwubmF2aWdhdG9yICYmIGdsb2JhbC5uYXZpZ2F0b3Iuc3RhbmRhbG9uZSkpIHtcbiAgICB2YXIgdG9nZ2xlID0gdHJ1ZTtcbiAgICB2YXIgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgICBuZXcgT2JzZXJ2ZXIoZmx1c2gpLm9ic2VydmUobm9kZSwgeyBjaGFyYWN0ZXJEYXRhOiB0cnVlIH0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIG5vZGUuZGF0YSA9IHRvZ2dsZSA9ICF0b2dnbGU7XG4gICAgfTtcbiAgLy8gZW52aXJvbm1lbnRzIHdpdGggbWF5YmUgbm9uLWNvbXBsZXRlbHkgY29ycmVjdCwgYnV0IGV4aXN0ZW50IFByb21pc2VcbiAgfSBlbHNlIGlmIChQcm9taXNlICYmIFByb21pc2UucmVzb2x2ZSkge1xuICAgIC8vIFByb21pc2UucmVzb2x2ZSB3aXRob3V0IGFuIGFyZ3VtZW50IHRocm93cyBhbiBlcnJvciBpbiBMRyBXZWJPUyAyXG4gICAgdmFyIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUodW5kZWZpbmVkKTtcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBwcm9taXNlLnRoZW4oZmx1c2gpO1xuICAgIH07XG4gIC8vIGZvciBvdGhlciBlbnZpcm9ubWVudHMgLSBtYWNyb3Rhc2sgYmFzZWQgb246XG4gIC8vIC0gc2V0SW1tZWRpYXRlXG4gIC8vIC0gTWVzc2FnZUNoYW5uZWxcbiAgLy8gLSB3aW5kb3cucG9zdE1lc3NhZ1xuICAvLyAtIG9ucmVhZHlzdGF0ZWNoYW5nZVxuICAvLyAtIHNldFRpbWVvdXRcbiAgfSBlbHNlIHtcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBzdHJhbmdlIElFICsgd2VicGFjayBkZXYgc2VydmVyIGJ1ZyAtIHVzZSAuY2FsbChnbG9iYWwpXG4gICAgICBtYWNyb3Rhc2suY2FsbChnbG9iYWwsIGZsdXNoKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChmbikge1xuICAgIHZhciB0YXNrID0geyBmbjogZm4sIG5leHQ6IHVuZGVmaW5lZCB9O1xuICAgIGlmIChsYXN0KSBsYXN0Lm5leHQgPSB0YXNrO1xuICAgIGlmICghaGVhZCkge1xuICAgICAgaGVhZCA9IHRhc2s7XG4gICAgICBub3RpZnkoKTtcbiAgICB9IGxhc3QgPSB0YXNrO1xuICB9O1xufTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIDI1LjQuMS41IE5ld1Byb21pc2VDYXBhYmlsaXR5KEMpXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xuXG5mdW5jdGlvbiBQcm9taXNlQ2FwYWJpbGl0eShDKSB7XG4gIHZhciByZXNvbHZlLCByZWplY3Q7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBDKGZ1bmN0aW9uICgkJHJlc29sdmUsICQkcmVqZWN0KSB7XG4gICAgaWYgKHJlc29sdmUgIT09IHVuZGVmaW5lZCB8fCByZWplY3QgIT09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKCdCYWQgUHJvbWlzZSBjb25zdHJ1Y3RvcicpO1xuICAgIHJlc29sdmUgPSAkJHJlc29sdmU7XG4gICAgcmVqZWN0ID0gJCRyZWplY3Q7XG4gIH0pO1xuICB0aGlzLnJlc29sdmUgPSBhRnVuY3Rpb24ocmVzb2x2ZSk7XG4gIHRoaXMucmVqZWN0ID0gYUZ1bmN0aW9uKHJlamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzLmYgPSBmdW5jdGlvbiAoQykge1xuICByZXR1cm4gbmV3IFByb21pc2VDYXBhYmlsaXR5KEMpO1xufTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIDE5LjEuMi4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UsIC4uLilcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciBnT1BTID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKTtcbnZhciBwSUUgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpO1xudmFyICRhc3NpZ24gPSBPYmplY3QuYXNzaWduO1xuXG4vLyBzaG91bGQgd29yayB3aXRoIHN5bWJvbHMgYW5kIHNob3VsZCBoYXZlIGRldGVybWluaXN0aWMgcHJvcGVydHkgb3JkZXIgKFY4IGJ1Zylcbm1vZHVsZS5leHBvcnRzID0gISRhc3NpZ24gfHwgcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHZhciBBID0ge307XG4gIHZhciBCID0ge307XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgUyA9IFN5bWJvbCgpO1xuICB2YXIgSyA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdCc7XG4gIEFbU10gPSA3O1xuICBLLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7IEJba10gPSBrOyB9KTtcbiAgcmV0dXJuICRhc3NpZ24oe30sIEEpW1NdICE9IDcgfHwgT2JqZWN0LmtleXMoJGFzc2lnbih7fSwgQikpLmpvaW4oJycpICE9IEs7XG59KSA/IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIHZhciBUID0gdG9PYmplY3QodGFyZ2V0KTtcbiAgdmFyIGFMZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICB2YXIgaW5kZXggPSAxO1xuICB2YXIgZ2V0U3ltYm9scyA9IGdPUFMuZjtcbiAgdmFyIGlzRW51bSA9IHBJRS5mO1xuICB3aGlsZSAoYUxlbiA+IGluZGV4KSB7XG4gICAgdmFyIFMgPSBJT2JqZWN0KGFyZ3VtZW50c1tpbmRleCsrXSk7XG4gICAgdmFyIGtleXMgPSBnZXRTeW1ib2xzID8gZ2V0S2V5cyhTKS5jb25jYXQoZ2V0U3ltYm9scyhTKSkgOiBnZXRLZXlzKFMpO1xuICAgIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgICB2YXIgaiA9IDA7XG4gICAgdmFyIGtleTtcbiAgICB3aGlsZSAobGVuZ3RoID4gaikgaWYgKGlzRW51bS5jYWxsKFMsIGtleSA9IGtleXNbaisrXSkpIFRba2V5XSA9IFNba2V5XTtcbiAgfSByZXR1cm4gVDtcbn0gOiAkYXNzaWduO1xuIiwiLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBkUHMgPSByZXF1aXJlKCcuL19vYmplY3QtZHBzJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG52YXIgRW1wdHkgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBjcmVhdGVEaWN0ID0gZnVuY3Rpb24gKCkge1xuICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xuICB2YXIgaWZyYW1lID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdpZnJhbWUnKTtcbiAgdmFyIGkgPSBlbnVtQnVnS2V5cy5sZW5ndGg7XG4gIHZhciBsdCA9ICc8JztcbiAgdmFyIGd0ID0gJz4nO1xuICB2YXIgaWZyYW1lRG9jdW1lbnQ7XG4gIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICByZXF1aXJlKCcuL19odG1sJykuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lLnNyYyA9ICdqYXZhc2NyaXB0Oic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2NyaXB0LXVybFxuICAvLyBjcmVhdGVEaWN0ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuT2JqZWN0O1xuICAvLyBodG1sLnJlbW92ZUNoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcbiAgaWZyYW1lRG9jdW1lbnQud3JpdGUobHQgKyAnc2NyaXB0JyArIGd0ICsgJ2RvY3VtZW50LkY9T2JqZWN0JyArIGx0ICsgJy9zY3JpcHQnICsgZ3QpO1xuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xuICBjcmVhdGVEaWN0ID0gaWZyYW1lRG9jdW1lbnQuRjtcbiAgd2hpbGUgKGktLSkgZGVsZXRlIGNyZWF0ZURpY3RbUFJPVE9UWVBFXVtlbnVtQnVnS2V5c1tpXV07XG4gIHJldHVybiBjcmVhdGVEaWN0KCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKE8gIT09IG51bGwpIHtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5KCk7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IG51bGw7XG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuICB9IGVsc2UgcmVzdWx0ID0gY3JlYXRlRGljdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZFBzKHJlc3VsdCwgUHJvcGVydGllcyk7XG59O1xuIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgZFAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIGRQKE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcykgdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgaWYgKCd2YWx1ZScgaW4gQXR0cmlidXRlcykgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcbiIsInZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICB2YXIga2V5cyA9IGdldEtleXMoUHJvcGVydGllcyk7XG4gIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgdmFyIGkgPSAwO1xuICB2YXIgUDtcbiAgd2hpbGUgKGxlbmd0aCA+IGkpIGRQLmYoTywgUCA9IGtleXNbaSsrXSwgUHJvcGVydGllc1tQXSk7XG4gIHJldHVybiBPO1xufTtcbiIsInZhciBwSUUgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJyk7XG52YXIgZ09QRCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBnT1BEIDogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApIHtcbiAgTyA9IHRvSU9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIGdPUEQoTywgUCk7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoaGFzKE8sIFApKSByZXR1cm4gY3JlYXRlRGVzYyghcElFLmYuY2FsbChPLCBQKSwgT1tQXSk7XG59O1xuIiwiLy8gZmFsbGJhY2sgZm9yIElFMTEgYnVnZ3kgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgd2l0aCBpZnJhbWUgYW5kIHdpbmRvd1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciBnT1BOID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mO1xudmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbnZhciB3aW5kb3dOYW1lcyA9IHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgd2luZG93ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzXG4gID8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMod2luZG93KSA6IFtdO1xuXG52YXIgZ2V0V2luZG93TmFtZXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZ09QTihpdCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gd2luZG93TmFtZXMuc2xpY2UoKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMuZiA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpIHtcbiAgcmV0dXJuIHdpbmRvd05hbWVzICYmIHRvU3RyaW5nLmNhbGwoaXQpID09ICdbb2JqZWN0IFdpbmRvd10nID8gZ2V0V2luZG93TmFtZXMoaXQpIDogZ09QTih0b0lPYmplY3QoaXQpKTtcbn07XG4iLCIvLyAxOS4xLjIuNyAvIDE1LjIuMy40IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJykuY29uY2F0KCdsZW5ndGgnLCAncHJvdG90eXBlJyk7XG5cbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoTykge1xuICByZXR1cm4gJGtleXMoTywgaGlkZGVuS2V5cyk7XG59O1xuIiwiZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbiIsIi8vIDE5LjEuMi45IC8gMTUuMi4zLjIgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcbnZhciBPYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIChPKSB7XG4gIE8gPSB0b09iamVjdChPKTtcbiAgaWYgKGhhcyhPLCBJRV9QUk9UTykpIHJldHVybiBPW0lFX1BST1RPXTtcbiAgaWYgKHR5cGVvZiBPLmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgTyBpbnN0YW5jZW9mIE8uY29uc3RydWN0b3IpIHtcbiAgICByZXR1cm4gTy5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIH0gcmV0dXJuIE8gaW5zdGFuY2VvZiBPYmplY3QgPyBPYmplY3RQcm90byA6IG51bGw7XG59O1xuIiwidmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciBhcnJheUluZGV4T2YgPSByZXF1aXJlKCcuL19hcnJheS1pbmNsdWRlcycpKGZhbHNlKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lcykge1xuICB2YXIgTyA9IHRvSU9iamVjdChvYmplY3QpO1xuICB2YXIgaSA9IDA7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGtleTtcbiAgZm9yIChrZXkgaW4gTykgaWYgKGtleSAhPSBJRV9QUk9UTykgaGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkgaWYgKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSkge1xuICAgIH5hcnJheUluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHJlc3VsdC5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCIvLyAxOS4xLjIuMTQgLyAxNS4yLjMuMTQgT2JqZWN0LmtleXMoTylcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKSB7XG4gIHJldHVybiAka2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59O1xuIiwiZXhwb3J0cy5mID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG4iLCIvLyBtb3N0IE9iamVjdCBtZXRob2RzIGJ5IEVTNiBzaG91bGQgYWNjZXB0IHByaW1pdGl2ZXNcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChLRVksIGV4ZWMpIHtcbiAgdmFyIGZuID0gKGNvcmUuT2JqZWN0IHx8IHt9KVtLRVldIHx8IE9iamVjdFtLRVldO1xuICB2YXIgZXhwID0ge307XG4gIGV4cFtLRVldID0gZXhlYyhmbik7XG4gICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogZmFpbHMoZnVuY3Rpb24gKCkgeyBmbigxKTsgfSksICdPYmplY3QnLCBleHApO1xufTtcbiIsInZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgaXNFbnVtID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpLmY7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpc0VudHJpZXMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChpdCkge1xuICAgIHZhciBPID0gdG9JT2JqZWN0KGl0KTtcbiAgICB2YXIga2V5cyA9IGdldEtleXMoTyk7XG4gICAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgdmFyIGtleTtcbiAgICB3aGlsZSAobGVuZ3RoID4gaSkgaWYgKGlzRW51bS5jYWxsKE8sIGtleSA9IGtleXNbaSsrXSkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGlzRW50cmllcyA/IFtrZXksIE9ba2V5XV0gOiBPW2tleV0pO1xuICAgIH0gcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHsgZTogZmFsc2UsIHY6IGV4ZWMoKSB9O1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHsgZTogdHJ1ZSwgdjogZSB9O1xuICB9XG59O1xuIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IHJlcXVpcmUoJy4vX25ldy1wcm9taXNlLWNhcGFiaWxpdHknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQywgeCkge1xuICBhbk9iamVjdChDKTtcbiAgaWYgKGlzT2JqZWN0KHgpICYmIHguY29uc3RydWN0b3IgPT09IEMpIHJldHVybiB4O1xuICB2YXIgcHJvbWlzZUNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eS5mKEMpO1xuICB2YXIgcmVzb2x2ZSA9IHByb21pc2VDYXBhYmlsaXR5LnJlc29sdmU7XG4gIHJlc29sdmUoeCk7XG4gIHJldHVybiBwcm9taXNlQ2FwYWJpbGl0eS5wcm9taXNlO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGJpdG1hcCwgdmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZTogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfTtcbn07XG4iLCJ2YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodGFyZ2V0LCBzcmMsIHNhZmUpIHtcbiAgZm9yICh2YXIga2V5IGluIHNyYykgcmVkZWZpbmUodGFyZ2V0LCBrZXksIHNyY1trZXldLCBzYWZlKTtcbiAgcmV0dXJuIHRhcmdldDtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBTUkMgPSByZXF1aXJlKCcuL191aWQnKSgnc3JjJyk7XG52YXIgVE9fU1RSSU5HID0gJ3RvU3RyaW5nJztcbnZhciAkdG9TdHJpbmcgPSBGdW5jdGlvbltUT19TVFJJTkddO1xudmFyIFRQTCA9ICgnJyArICR0b1N0cmluZykuc3BsaXQoVE9fU1RSSU5HKTtcblxucmVxdWlyZSgnLi9fY29yZScpLmluc3BlY3RTb3VyY2UgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuICR0b1N0cmluZy5jYWxsKGl0KTtcbn07XG5cbihtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBrZXksIHZhbCwgc2FmZSkge1xuICB2YXIgaXNGdW5jdGlvbiA9IHR5cGVvZiB2YWwgPT0gJ2Z1bmN0aW9uJztcbiAgaWYgKGlzRnVuY3Rpb24pIGhhcyh2YWwsICduYW1lJykgfHwgaGlkZSh2YWwsICduYW1lJywga2V5KTtcbiAgaWYgKE9ba2V5XSA9PT0gdmFsKSByZXR1cm47XG4gIGlmIChpc0Z1bmN0aW9uKSBoYXModmFsLCBTUkMpIHx8IGhpZGUodmFsLCBTUkMsIE9ba2V5XSA/ICcnICsgT1trZXldIDogVFBMLmpvaW4oU3RyaW5nKGtleSkpKTtcbiAgaWYgKE8gPT09IGdsb2JhbCkge1xuICAgIE9ba2V5XSA9IHZhbDtcbiAgfSBlbHNlIGlmICghc2FmZSkge1xuICAgIGRlbGV0ZSBPW2tleV07XG4gICAgaGlkZShPLCBrZXksIHZhbCk7XG4gIH0gZWxzZSBpZiAoT1trZXldKSB7XG4gICAgT1trZXldID0gdmFsO1xuICB9IGVsc2Uge1xuICAgIGhpZGUoTywga2V5LCB2YWwpO1xuICB9XG4vLyBhZGQgZmFrZSBGdW5jdGlvbiN0b1N0cmluZyBmb3IgY29ycmVjdCB3b3JrIHdyYXBwZWQgbWV0aG9kcyAvIGNvbnN0cnVjdG9ycyB3aXRoIG1ldGhvZHMgbGlrZSBMb0Rhc2ggaXNOYXRpdmVcbn0pKEZ1bmN0aW9uLnByb3RvdHlwZSwgVE9fU1RSSU5HLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuIHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgJiYgdGhpc1tTUkNdIHx8ICR0b1N0cmluZy5jYWxsKHRoaXMpO1xufSk7XG4iLCIvLyBXb3JrcyB3aXRoIF9fcHJvdG9fXyBvbmx5LiBPbGQgdjggY2FuJ3Qgd29yayB3aXRoIG51bGwgcHJvdG8gb2JqZWN0cy5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvICovXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGNoZWNrID0gZnVuY3Rpb24gKE8sIHByb3RvKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBpZiAoIWlzT2JqZWN0KHByb3RvKSAmJiBwcm90byAhPT0gbnVsbCkgdGhyb3cgVHlwZUVycm9yKHByb3RvICsgXCI6IGNhbid0IHNldCBhcyBwcm90b3R5cGUhXCIpO1xufTtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCAoJ19fcHJvdG9fXycgaW4ge30gPyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgZnVuY3Rpb24gKHRlc3QsIGJ1Z2d5LCBzZXQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHNldCA9IHJlcXVpcmUoJy4vX2N0eCcpKEZ1bmN0aW9uLmNhbGwsIHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJykuZihPYmplY3QucHJvdG90eXBlLCAnX19wcm90b19fJykuc2V0LCAyKTtcbiAgICAgICAgc2V0KHRlc3QsIFtdKTtcbiAgICAgICAgYnVnZ3kgPSAhKHRlc3QgaW5zdGFuY2VvZiBBcnJheSk7XG4gICAgICB9IGNhdGNoIChlKSB7IGJ1Z2d5ID0gdHJ1ZTsgfVxuICAgICAgcmV0dXJuIGZ1bmN0aW9uIHNldFByb3RvdHlwZU9mKE8sIHByb3RvKSB7XG4gICAgICAgIGNoZWNrKE8sIHByb3RvKTtcbiAgICAgICAgaWYgKGJ1Z2d5KSBPLl9fcHJvdG9fXyA9IHByb3RvO1xuICAgICAgICBlbHNlIHNldChPLCBwcm90byk7XG4gICAgICAgIHJldHVybiBPO1xuICAgICAgfTtcbiAgICB9KHt9LCBmYWxzZSkgOiB1bmRlZmluZWQpLFxuICBjaGVjazogY2hlY2tcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyk7XG52YXIgU1BFQ0lFUyA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEtFWSkge1xuICB2YXIgQyA9IGdsb2JhbFtLRVldO1xuICBpZiAoREVTQ1JJUFRPUlMgJiYgQyAmJiAhQ1tTUEVDSUVTXSkgZFAuZihDLCBTUEVDSUVTLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfVxuICB9KTtcbn07XG4iLCJ2YXIgZGVmID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIHRhZywgc3RhdCkge1xuICBpZiAoaXQgJiYgIWhhcyhpdCA9IHN0YXQgPyBpdCA6IGl0LnByb3RvdHlwZSwgVEFHKSkgZGVmKGl0LCBUQUcsIHsgY29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogdGFnIH0pO1xufTtcbiIsInZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgna2V5cycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBzaGFyZWRba2V5XSB8fCAoc2hhcmVkW2tleV0gPSB1aWQoa2V5KSk7XG59O1xuIiwidmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXyc7XG52YXIgc3RvcmUgPSBnbG9iYWxbU0hBUkVEXSB8fCAoZ2xvYmFsW1NIQVJFRF0gPSB7fSk7XG5cbihtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0gdmFsdWUgIT09IHVuZGVmaW5lZCA/IHZhbHVlIDoge30pO1xufSkoJ3ZlcnNpb25zJywgW10pLnB1c2goe1xuICB2ZXJzaW9uOiBjb3JlLnZlcnNpb24sXG4gIG1vZGU6IHJlcXVpcmUoJy4vX2xpYnJhcnknKSA/ICdwdXJlJyA6ICdnbG9iYWwnLFxuICBjb3B5cmlnaHQ6ICfCqSAyMDE4IERlbmlzIFB1c2hrYXJldiAoemxvaXJvY2sucnUpJ1xufSk7XG4iLCIvLyA3LjMuMjAgU3BlY2llc0NvbnN0cnVjdG9yKE8sIGRlZmF1bHRDb25zdHJ1Y3RvcilcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbnZhciBTUEVDSUVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE8sIEQpIHtcbiAgdmFyIEMgPSBhbk9iamVjdChPKS5jb25zdHJ1Y3RvcjtcbiAgdmFyIFM7XG4gIHJldHVybiBDID09PSB1bmRlZmluZWQgfHwgKFMgPSBhbk9iamVjdChDKVtTUEVDSUVTXSkgPT0gdW5kZWZpbmVkID8gRCA6IGFGdW5jdGlvbihTKTtcbn07XG4iLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG4vLyB0cnVlICAtPiBTdHJpbmcjYXRcbi8vIGZhbHNlIC0+IFN0cmluZyNjb2RlUG9pbnRBdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoVE9fU1RSSU5HKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodGhhdCwgcG9zKSB7XG4gICAgdmFyIHMgPSBTdHJpbmcoZGVmaW5lZCh0aGF0KSk7XG4gICAgdmFyIGkgPSB0b0ludGVnZXIocG9zKTtcbiAgICB2YXIgbCA9IHMubGVuZ3RoO1xuICAgIHZhciBhLCBiO1xuICAgIGlmIChpIDwgMCB8fCBpID49IGwpIHJldHVybiBUT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcbiAgICBhID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgIHJldHVybiBhIDwgMHhkODAwIHx8IGEgPiAweGRiZmYgfHwgaSArIDEgPT09IGwgfHwgKGIgPSBzLmNoYXJDb2RlQXQoaSArIDEpKSA8IDB4ZGMwMCB8fCBiID4gMHhkZmZmXG4gICAgICA/IFRPX1NUUklORyA/IHMuY2hhckF0KGkpIDogYVxuICAgICAgOiBUT19TVFJJTkcgPyBzLnNsaWNlKGksIGkgKyAyKSA6IChhIC0gMHhkODAwIDw8IDEwKSArIChiIC0gMHhkYzAwKSArIDB4MTAwMDA7XG4gIH07XG59O1xuIiwidmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGludm9rZSA9IHJlcXVpcmUoJy4vX2ludm9rZScpO1xudmFyIGh0bWwgPSByZXF1aXJlKCcuL19odG1sJyk7XG52YXIgY2VsID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciBzZXRUYXNrID0gZ2xvYmFsLnNldEltbWVkaWF0ZTtcbnZhciBjbGVhclRhc2sgPSBnbG9iYWwuY2xlYXJJbW1lZGlhdGU7XG52YXIgTWVzc2FnZUNoYW5uZWwgPSBnbG9iYWwuTWVzc2FnZUNoYW5uZWw7XG52YXIgRGlzcGF0Y2ggPSBnbG9iYWwuRGlzcGF0Y2g7XG52YXIgY291bnRlciA9IDA7XG52YXIgcXVldWUgPSB7fTtcbnZhciBPTlJFQURZU1RBVEVDSEFOR0UgPSAnb25yZWFkeXN0YXRlY2hhbmdlJztcbnZhciBkZWZlciwgY2hhbm5lbCwgcG9ydDtcbnZhciBydW4gPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBpZCA9ICt0aGlzO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG4gIGlmIChxdWV1ZS5oYXNPd25Qcm9wZXJ0eShpZCkpIHtcbiAgICB2YXIgZm4gPSBxdWV1ZVtpZF07XG4gICAgZGVsZXRlIHF1ZXVlW2lkXTtcbiAgICBmbigpO1xuICB9XG59O1xudmFyIGxpc3RlbmVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIHJ1bi5jYWxsKGV2ZW50LmRhdGEpO1xufTtcbi8vIE5vZGUuanMgMC45KyAmIElFMTArIGhhcyBzZXRJbW1lZGlhdGUsIG90aGVyd2lzZTpcbmlmICghc2V0VGFzayB8fCAhY2xlYXJUYXNrKSB7XG4gIHNldFRhc2sgPSBmdW5jdGlvbiBzZXRJbW1lZGlhdGUoZm4pIHtcbiAgICB2YXIgYXJncyA9IFtdO1xuICAgIHZhciBpID0gMTtcbiAgICB3aGlsZSAoYXJndW1lbnRzLmxlbmd0aCA+IGkpIGFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgcXVldWVbKytjb3VudGVyXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICAgICAgaW52b2tlKHR5cGVvZiBmbiA9PSAnZnVuY3Rpb24nID8gZm4gOiBGdW5jdGlvbihmbiksIGFyZ3MpO1xuICAgIH07XG4gICAgZGVmZXIoY291bnRlcik7XG4gICAgcmV0dXJuIGNvdW50ZXI7XG4gIH07XG4gIGNsZWFyVGFzayA9IGZ1bmN0aW9uIGNsZWFySW1tZWRpYXRlKGlkKSB7XG4gICAgZGVsZXRlIHF1ZXVlW2lkXTtcbiAgfTtcbiAgLy8gTm9kZS5qcyAwLjgtXG4gIGlmIChyZXF1aXJlKCcuL19jb2YnKShwcm9jZXNzKSA9PSAncHJvY2VzcycpIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhjdHgocnVuLCBpZCwgMSkpO1xuICAgIH07XG4gIC8vIFNwaGVyZSAoSlMgZ2FtZSBlbmdpbmUpIERpc3BhdGNoIEFQSVxuICB9IGVsc2UgaWYgKERpc3BhdGNoICYmIERpc3BhdGNoLm5vdykge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBEaXNwYXRjaC5ub3coY3R4KHJ1biwgaWQsIDEpKTtcbiAgICB9O1xuICAvLyBCcm93c2VycyB3aXRoIE1lc3NhZ2VDaGFubmVsLCBpbmNsdWRlcyBXZWJXb3JrZXJzXG4gIH0gZWxzZSBpZiAoTWVzc2FnZUNoYW5uZWwpIHtcbiAgICBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgcG9ydCA9IGNoYW5uZWwucG9ydDI7XG4gICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBsaXN0ZW5lcjtcbiAgICBkZWZlciA9IGN0eChwb3J0LnBvc3RNZXNzYWdlLCBwb3J0LCAxKTtcbiAgLy8gQnJvd3NlcnMgd2l0aCBwb3N0TWVzc2FnZSwgc2tpcCBXZWJXb3JrZXJzXG4gIC8vIElFOCBoYXMgcG9zdE1lc3NhZ2UsIGJ1dCBpdCdzIHN5bmMgJiB0eXBlb2YgaXRzIHBvc3RNZXNzYWdlIGlzICdvYmplY3QnXG4gIH0gZWxzZSBpZiAoZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIgJiYgdHlwZW9mIHBvc3RNZXNzYWdlID09ICdmdW5jdGlvbicgJiYgIWdsb2JhbC5pbXBvcnRTY3JpcHRzKSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShpZCArICcnLCAnKicpO1xuICAgIH07XG4gICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBsaXN0ZW5lciwgZmFsc2UpO1xuICAvLyBJRTgtXG4gIH0gZWxzZSBpZiAoT05SRUFEWVNUQVRFQ0hBTkdFIGluIGNlbCgnc2NyaXB0JykpIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgaHRtbC5hcHBlbmRDaGlsZChjZWwoJ3NjcmlwdCcpKVtPTlJFQURZU1RBVEVDSEFOR0VdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBodG1sLnJlbW92ZUNoaWxkKHRoaXMpO1xuICAgICAgICBydW4uY2FsbChpZCk7XG4gICAgICB9O1xuICAgIH07XG4gIC8vIFJlc3Qgb2xkIGJyb3dzZXJzXG4gIH0gZWxzZSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIHNldFRpbWVvdXQoY3R4KHJ1biwgaWQsIDEpLCAwKTtcbiAgICB9O1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiBzZXRUYXNrLFxuICBjbGVhcjogY2xlYXJUYXNrXG59O1xuIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBtYXggPSBNYXRoLm1heDtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGluZGV4LCBsZW5ndGgpIHtcbiAgaW5kZXggPSB0b0ludGVnZXIoaW5kZXgpO1xuICByZXR1cm4gaW5kZXggPCAwID8gbWF4KGluZGV4ICsgbGVuZ3RoLCAwKSA6IG1pbihpbmRleCwgbGVuZ3RoKTtcbn07XG4iLCIvLyA3LjEuNCBUb0ludGVnZXJcbnZhciBjZWlsID0gTWF0aC5jZWlsO1xudmFyIGZsb29yID0gTWF0aC5mbG9vcjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xufTtcbiIsIi8vIHRvIGluZGV4ZWQgb2JqZWN0LCB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0Jyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBJT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG4iLCIvLyA3LjEuMTUgVG9MZW5ndGhcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgbWluID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgPiAwID8gbWluKHRvSW50ZWdlcihpdCksIDB4MWZmZmZmZmZmZmZmZmYpIDogMDsgLy8gcG93KDIsIDUzKSAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcbiIsIi8vIDcuMS4xMyBUb09iamVjdChhcmd1bWVudClcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIE9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuIiwiLy8gNy4xLjEgVG9QcmltaXRpdmUoaW5wdXQgWywgUHJlZmVycmVkVHlwZV0pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIFMpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHJldHVybiBpdDtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmIChTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAodHlwZW9mIChmbiA9IGl0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKCFTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59O1xuIiwidmFyIGlkID0gMDtcbnZhciBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgbmF2aWdhdG9yID0gZ2xvYmFsLm5hdmlnYXRvcjtcblxubW9kdWxlLmV4cG9ydHMgPSBuYXZpZ2F0b3IgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCB8fCAnJztcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIFRZUEUpIHtcbiAgaWYgKCFpc09iamVjdChpdCkgfHwgaXQuX3QgIT09IFRZUEUpIHRocm93IFR5cGVFcnJvcignSW5jb21wYXRpYmxlIHJlY2VpdmVyLCAnICsgVFlQRSArICcgcmVxdWlyZWQhJyk7XG4gIHJldHVybiBpdDtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBMSUJSQVJZID0gcmVxdWlyZSgnLi9fbGlicmFyeScpO1xudmFyIHdrc0V4dCA9IHJlcXVpcmUoJy4vX3drcy1leHQnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHZhciAkU3ltYm9sID0gY29yZS5TeW1ib2wgfHwgKGNvcmUuU3ltYm9sID0gTElCUkFSWSA/IHt9IDogZ2xvYmFsLlN5bWJvbCB8fCB7fSk7XG4gIGlmIChuYW1lLmNoYXJBdCgwKSAhPSAnXycgJiYgIShuYW1lIGluICRTeW1ib2wpKSBkZWZpbmVQcm9wZXJ0eSgkU3ltYm9sLCBuYW1lLCB7IHZhbHVlOiB3a3NFeHQuZihuYW1lKSB9KTtcbn07XG4iLCJleHBvcnRzLmYgPSByZXF1aXJlKCcuL193a3MnKTtcbiIsInZhciBzdG9yZSA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCd3a3MnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbnZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5TeW1ib2w7XG52YXIgVVNFX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcblxudmFyICRleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gc3RvcmVbbmFtZV0gfHwgKHN0b3JlW25hbWVdID1cbiAgICBVU0VfU1lNQk9MICYmIFN5bWJvbFtuYW1lXSB8fCAoVVNFX1NZTUJPTCA/IFN5bWJvbCA6IHVpZCkoJ1N5bWJvbC4nICsgbmFtZSkpO1xufTtcblxuJGV4cG9ydHMuc3RvcmUgPSBzdG9yZTtcbiIsInZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpO1xudmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvcmUnKS5nZXRJdGVyYXRvck1ldGhvZCA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgIT0gdW5kZWZpbmVkKSByZXR1cm4gaXRbSVRFUkFUT1JdXG4gICAgfHwgaXRbJ0BAaXRlcmF0b3InXVxuICAgIHx8IEl0ZXJhdG9yc1tjbGFzc29mKGl0KV07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuL19pdGVyLWNhbGwnKTtcbnZhciBpc0FycmF5SXRlciA9IHJlcXVpcmUoJy4vX2lzLWFycmF5LWl0ZXInKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIGNyZWF0ZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fY3JlYXRlLXByb3BlcnR5Jyk7XG52YXIgZ2V0SXRlckZuID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhcmVxdWlyZSgnLi9faXRlci1kZXRlY3QnKShmdW5jdGlvbiAoaXRlcikgeyBBcnJheS5mcm9tKGl0ZXIpOyB9KSwgJ0FycmF5Jywge1xuICAvLyAyMi4xLjIuMSBBcnJheS5mcm9tKGFycmF5TGlrZSwgbWFwZm4gPSB1bmRlZmluZWQsIHRoaXNBcmcgPSB1bmRlZmluZWQpXG4gIGZyb206IGZ1bmN0aW9uIGZyb20oYXJyYXlMaWtlIC8qICwgbWFwZm4gPSB1bmRlZmluZWQsIHRoaXNBcmcgPSB1bmRlZmluZWQgKi8pIHtcbiAgICB2YXIgTyA9IHRvT2JqZWN0KGFycmF5TGlrZSk7XG4gICAgdmFyIEMgPSB0eXBlb2YgdGhpcyA9PSAnZnVuY3Rpb24nID8gdGhpcyA6IEFycmF5O1xuICAgIHZhciBhTGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICB2YXIgbWFwZm4gPSBhTGVuID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZDtcbiAgICB2YXIgbWFwcGluZyA9IG1hcGZuICE9PSB1bmRlZmluZWQ7XG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICB2YXIgaXRlckZuID0gZ2V0SXRlckZuKE8pO1xuICAgIHZhciBsZW5ndGgsIHJlc3VsdCwgc3RlcCwgaXRlcmF0b3I7XG4gICAgaWYgKG1hcHBpbmcpIG1hcGZuID0gY3R4KG1hcGZuLCBhTGVuID4gMiA/IGFyZ3VtZW50c1syXSA6IHVuZGVmaW5lZCwgMik7XG4gICAgLy8gaWYgb2JqZWN0IGlzbid0IGl0ZXJhYmxlIG9yIGl0J3MgYXJyYXkgd2l0aCBkZWZhdWx0IGl0ZXJhdG9yIC0gdXNlIHNpbXBsZSBjYXNlXG4gICAgaWYgKGl0ZXJGbiAhPSB1bmRlZmluZWQgJiYgIShDID09IEFycmF5ICYmIGlzQXJyYXlJdGVyKGl0ZXJGbikpKSB7XG4gICAgICBmb3IgKGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoTyksIHJlc3VsdCA9IG5ldyBDKCk7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTsgaW5kZXgrKykge1xuICAgICAgICBjcmVhdGVQcm9wZXJ0eShyZXN1bHQsIGluZGV4LCBtYXBwaW5nID8gY2FsbChpdGVyYXRvciwgbWFwZm4sIFtzdGVwLnZhbHVlLCBpbmRleF0sIHRydWUpIDogc3RlcC52YWx1ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICAgIGZvciAocmVzdWx0ID0gbmV3IEMobGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcbiAgICAgICAgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBpbmRleCwgbWFwcGluZyA/IG1hcGZuKE9baW5kZXhdLCBpbmRleCkgOiBPW2luZGV4XSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJlc3VsdC5sZW5ndGggPSBpbmRleDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi9fYWRkLXRvLXVuc2NvcGFibGVzJyk7XG52YXIgc3RlcCA9IHJlcXVpcmUoJy4vX2l0ZXItc3RlcCcpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcblxuLy8gMjIuMS4zLjQgQXJyYXkucHJvdG90eXBlLmVudHJpZXMoKVxuLy8gMjIuMS4zLjEzIEFycmF5LnByb3RvdHlwZS5rZXlzKClcbi8vIDIyLjEuMy4yOSBBcnJheS5wcm90b3R5cGUudmFsdWVzKClcbi8vIDIyLjEuMy4zMCBBcnJheS5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbiAoaXRlcmF0ZWQsIGtpbmQpIHtcbiAgdGhpcy5fdCA9IHRvSU9iamVjdChpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuICB0aGlzLl9rID0ga2luZDsgICAgICAgICAgICAgICAgLy8ga2luZFxuLy8gMjIuMS41LjIuMSAlQXJyYXlJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbiAoKSB7XG4gIHZhciBPID0gdGhpcy5fdDtcbiAgdmFyIGtpbmQgPSB0aGlzLl9rO1xuICB2YXIgaW5kZXggPSB0aGlzLl9pKys7XG4gIGlmICghTyB8fCBpbmRleCA+PSBPLmxlbmd0aCkge1xuICAgIHRoaXMuX3QgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHN0ZXAoMSk7XG4gIH1cbiAgaWYgKGtpbmQgPT0gJ2tleXMnKSByZXR1cm4gc3RlcCgwLCBpbmRleCk7XG4gIGlmIChraW5kID09ICd2YWx1ZXMnKSByZXR1cm4gc3RlcCgwLCBPW2luZGV4XSk7XG4gIHJldHVybiBzdGVwKDAsIFtpbmRleCwgT1tpbmRleF1dKTtcbn0sICd2YWx1ZXMnKTtcblxuLy8gYXJndW1lbnRzTGlzdFtAQGl0ZXJhdG9yXSBpcyAlQXJyYXlQcm90b192YWx1ZXMlICg5LjQuNC42LCA5LjQuNC43KVxuSXRlcmF0b3JzLkFyZ3VtZW50cyA9IEl0ZXJhdG9ycy5BcnJheTtcblxuYWRkVG9VbnNjb3BhYmxlcygna2V5cycpO1xuYWRkVG9VbnNjb3BhYmxlcygndmFsdWVzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCdlbnRyaWVzJyk7XG4iLCJ2YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xudmFyIEZQcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbnZhciBuYW1lUkUgPSAvXlxccypmdW5jdGlvbiAoW14gKF0qKS87XG52YXIgTkFNRSA9ICduYW1lJztcblxuLy8gMTkuMi40LjIgbmFtZVxuTkFNRSBpbiBGUHJvdG8gfHwgcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiBkUChGUHJvdG8sIE5BTUUsIHtcbiAgY29uZmlndXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuICgnJyArIHRoaXMpLm1hdGNoKG5hbWVSRSlbMV07XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgc3Ryb25nID0gcmVxdWlyZSgnLi9fY29sbGVjdGlvbi1zdHJvbmcnKTtcbnZhciB2YWxpZGF0ZSA9IHJlcXVpcmUoJy4vX3ZhbGlkYXRlLWNvbGxlY3Rpb24nKTtcbnZhciBNQVAgPSAnTWFwJztcblxuLy8gMjMuMSBNYXAgT2JqZWN0c1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb2xsZWN0aW9uJykoTUFQLCBmdW5jdGlvbiAoZ2V0KSB7XG4gIHJldHVybiBmdW5jdGlvbiBNYXAoKSB7IHJldHVybiBnZXQodGhpcywgYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpOyB9O1xufSwge1xuICAvLyAyMy4xLjMuNiBNYXAucHJvdG90eXBlLmdldChrZXkpXG4gIGdldDogZnVuY3Rpb24gZ2V0KGtleSkge1xuICAgIHZhciBlbnRyeSA9IHN0cm9uZy5nZXRFbnRyeSh2YWxpZGF0ZSh0aGlzLCBNQVApLCBrZXkpO1xuICAgIHJldHVybiBlbnRyeSAmJiBlbnRyeS52O1xuICB9LFxuICAvLyAyMy4xLjMuOSBNYXAucHJvdG90eXBlLnNldChrZXksIHZhbHVlKVxuICBzZXQ6IGZ1bmN0aW9uIHNldChrZXksIHZhbHVlKSB7XG4gICAgcmV0dXJuIHN0cm9uZy5kZWYodmFsaWRhdGUodGhpcywgTUFQKSwga2V5ID09PSAwID8gMCA6IGtleSwgdmFsdWUpO1xuICB9XG59LCBzdHJvbmcsIHRydWUpO1xuIiwiLy8gMTkuMS4zLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSlcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GLCAnT2JqZWN0JywgeyBhc3NpZ246IHJlcXVpcmUoJy4vX29iamVjdC1hc3NpZ24nKSB9KTtcbiIsIi8vIDE5LjEuMi4xNCBPYmplY3Qua2V5cyhPKVxudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5yZXF1aXJlKCcuL19vYmplY3Qtc2FwJykoJ2tleXMnLCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBmdW5jdGlvbiBrZXlzKGl0KSB7XG4gICAgcmV0dXJuICRrZXlzKHRvT2JqZWN0KGl0KSk7XG4gIH07XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZID0gcmVxdWlyZSgnLi9fbGlicmFyeScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL19jbGFzc29mJyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xudmFyIGFuSW5zdGFuY2UgPSByZXF1aXJlKCcuL19hbi1pbnN0YW5jZScpO1xudmFyIGZvck9mID0gcmVxdWlyZSgnLi9fZm9yLW9mJyk7XG52YXIgc3BlY2llc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi9fc3BlY2llcy1jb25zdHJ1Y3RvcicpO1xudmFyIHRhc2sgPSByZXF1aXJlKCcuL190YXNrJykuc2V0O1xudmFyIG1pY3JvdGFzayA9IHJlcXVpcmUoJy4vX21pY3JvdGFzaycpKCk7XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUgPSByZXF1aXJlKCcuL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5Jyk7XG52YXIgcGVyZm9ybSA9IHJlcXVpcmUoJy4vX3BlcmZvcm0nKTtcbnZhciB1c2VyQWdlbnQgPSByZXF1aXJlKCcuL191c2VyLWFnZW50Jyk7XG52YXIgcHJvbWlzZVJlc29sdmUgPSByZXF1aXJlKCcuL19wcm9taXNlLXJlc29sdmUnKTtcbnZhciBQUk9NSVNFID0gJ1Byb21pc2UnO1xudmFyIFR5cGVFcnJvciA9IGdsb2JhbC5UeXBlRXJyb3I7XG52YXIgcHJvY2VzcyA9IGdsb2JhbC5wcm9jZXNzO1xudmFyIHZlcnNpb25zID0gcHJvY2VzcyAmJiBwcm9jZXNzLnZlcnNpb25zO1xudmFyIHY4ID0gdmVyc2lvbnMgJiYgdmVyc2lvbnMudjggfHwgJyc7XG52YXIgJFByb21pc2UgPSBnbG9iYWxbUFJPTUlTRV07XG52YXIgaXNOb2RlID0gY2xhc3NvZihwcm9jZXNzKSA9PSAncHJvY2Vzcyc7XG52YXIgZW1wdHkgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG52YXIgSW50ZXJuYWwsIG5ld0dlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSwgT3duUHJvbWlzZUNhcGFiaWxpdHksIFdyYXBwZXI7XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSBuZXdHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eU1vZHVsZS5mO1xuXG52YXIgVVNFX05BVElWRSA9ICEhZnVuY3Rpb24gKCkge1xuICB0cnkge1xuICAgIC8vIGNvcnJlY3Qgc3ViY2xhc3Npbmcgd2l0aCBAQHNwZWNpZXMgc3VwcG9ydFxuICAgIHZhciBwcm9taXNlID0gJFByb21pc2UucmVzb2x2ZSgxKTtcbiAgICB2YXIgRmFrZVByb21pc2UgPSAocHJvbWlzZS5jb25zdHJ1Y3RvciA9IHt9KVtyZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpXSA9IGZ1bmN0aW9uIChleGVjKSB7XG4gICAgICBleGVjKGVtcHR5LCBlbXB0eSk7XG4gICAgfTtcbiAgICAvLyB1bmhhbmRsZWQgcmVqZWN0aW9ucyB0cmFja2luZyBzdXBwb3J0LCBOb2RlSlMgUHJvbWlzZSB3aXRob3V0IGl0IGZhaWxzIEBAc3BlY2llcyB0ZXN0XG4gICAgcmV0dXJuIChpc05vZGUgfHwgdHlwZW9mIFByb21pc2VSZWplY3Rpb25FdmVudCA9PSAnZnVuY3Rpb24nKVxuICAgICAgJiYgcHJvbWlzZS50aGVuKGVtcHR5KSBpbnN0YW5jZW9mIEZha2VQcm9taXNlXG4gICAgICAvLyB2OCA2LjYgKE5vZGUgMTAgYW5kIENocm9tZSA2NikgaGF2ZSBhIGJ1ZyB3aXRoIHJlc29sdmluZyBjdXN0b20gdGhlbmFibGVzXG4gICAgICAvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD04MzA1NjVcbiAgICAgIC8vIHdlIGNhbid0IGRldGVjdCBpdCBzeW5jaHJvbm91c2x5LCBzbyBqdXN0IGNoZWNrIHZlcnNpb25zXG4gICAgICAmJiB2OC5pbmRleE9mKCc2LjYnKSAhPT0gMFxuICAgICAgJiYgdXNlckFnZW50LmluZGV4T2YoJ0Nocm9tZS82NicpID09PSAtMTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG59KCk7XG5cbi8vIGhlbHBlcnNcbnZhciBpc1RoZW5hYmxlID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciB0aGVuO1xuICByZXR1cm4gaXNPYmplY3QoaXQpICYmIHR5cGVvZiAodGhlbiA9IGl0LnRoZW4pID09ICdmdW5jdGlvbicgPyB0aGVuIDogZmFsc2U7XG59O1xudmFyIG5vdGlmeSA9IGZ1bmN0aW9uIChwcm9taXNlLCBpc1JlamVjdCkge1xuICBpZiAocHJvbWlzZS5fbikgcmV0dXJuO1xuICBwcm9taXNlLl9uID0gdHJ1ZTtcbiAgdmFyIGNoYWluID0gcHJvbWlzZS5fYztcbiAgbWljcm90YXNrKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdmFsdWUgPSBwcm9taXNlLl92O1xuICAgIHZhciBvayA9IHByb21pc2UuX3MgPT0gMTtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHJ1biA9IGZ1bmN0aW9uIChyZWFjdGlvbikge1xuICAgICAgdmFyIGhhbmRsZXIgPSBvayA/IHJlYWN0aW9uLm9rIDogcmVhY3Rpb24uZmFpbDtcbiAgICAgIHZhciByZXNvbHZlID0gcmVhY3Rpb24ucmVzb2x2ZTtcbiAgICAgIHZhciByZWplY3QgPSByZWFjdGlvbi5yZWplY3Q7XG4gICAgICB2YXIgZG9tYWluID0gcmVhY3Rpb24uZG9tYWluO1xuICAgICAgdmFyIHJlc3VsdCwgdGhlbiwgZXhpdGVkO1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKGhhbmRsZXIpIHtcbiAgICAgICAgICBpZiAoIW9rKSB7XG4gICAgICAgICAgICBpZiAocHJvbWlzZS5faCA9PSAyKSBvbkhhbmRsZVVuaGFuZGxlZChwcm9taXNlKTtcbiAgICAgICAgICAgIHByb21pc2UuX2ggPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaGFuZGxlciA9PT0gdHJ1ZSkgcmVzdWx0ID0gdmFsdWU7XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoZG9tYWluKSBkb21haW4uZW50ZXIoKTtcbiAgICAgICAgICAgIHJlc3VsdCA9IGhhbmRsZXIodmFsdWUpOyAvLyBtYXkgdGhyb3dcbiAgICAgICAgICAgIGlmIChkb21haW4pIHtcbiAgICAgICAgICAgICAgZG9tYWluLmV4aXQoKTtcbiAgICAgICAgICAgICAgZXhpdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHJlc3VsdCA9PT0gcmVhY3Rpb24ucHJvbWlzZSkge1xuICAgICAgICAgICAgcmVqZWN0KFR5cGVFcnJvcignUHJvbWlzZS1jaGFpbiBjeWNsZScpKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHRoZW4gPSBpc1RoZW5hYmxlKHJlc3VsdCkpIHtcbiAgICAgICAgICAgIHRoZW4uY2FsbChyZXN1bHQsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSBlbHNlIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIHJlamVjdCh2YWx1ZSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGlmIChkb21haW4gJiYgIWV4aXRlZCkgZG9tYWluLmV4aXQoKTtcbiAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgfVxuICAgIH07XG4gICAgd2hpbGUgKGNoYWluLmxlbmd0aCA+IGkpIHJ1bihjaGFpbltpKytdKTsgLy8gdmFyaWFibGUgbGVuZ3RoIC0gY2FuJ3QgdXNlIGZvckVhY2hcbiAgICBwcm9taXNlLl9jID0gW107XG4gICAgcHJvbWlzZS5fbiA9IGZhbHNlO1xuICAgIGlmIChpc1JlamVjdCAmJiAhcHJvbWlzZS5faCkgb25VbmhhbmRsZWQocHJvbWlzZSk7XG4gIH0pO1xufTtcbnZhciBvblVuaGFuZGxlZCA9IGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gIHRhc2suY2FsbChnbG9iYWwsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdmFsdWUgPSBwcm9taXNlLl92O1xuICAgIHZhciB1bmhhbmRsZWQgPSBpc1VuaGFuZGxlZChwcm9taXNlKTtcbiAgICB2YXIgcmVzdWx0LCBoYW5kbGVyLCBjb25zb2xlO1xuICAgIGlmICh1bmhhbmRsZWQpIHtcbiAgICAgIHJlc3VsdCA9IHBlcmZvcm0oZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoaXNOb2RlKSB7XG4gICAgICAgICAgcHJvY2Vzcy5lbWl0KCd1bmhhbmRsZWRSZWplY3Rpb24nLCB2YWx1ZSwgcHJvbWlzZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoaGFuZGxlciA9IGdsb2JhbC5vbnVuaGFuZGxlZHJlamVjdGlvbikge1xuICAgICAgICAgIGhhbmRsZXIoeyBwcm9taXNlOiBwcm9taXNlLCByZWFzb246IHZhbHVlIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKChjb25zb2xlID0gZ2xvYmFsLmNvbnNvbGUpICYmIGNvbnNvbGUuZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdVbmhhbmRsZWQgcHJvbWlzZSByZWplY3Rpb24nLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgLy8gQnJvd3NlcnMgc2hvdWxkIG5vdCB0cmlnZ2VyIGByZWplY3Rpb25IYW5kbGVkYCBldmVudCBpZiBpdCB3YXMgaGFuZGxlZCBoZXJlLCBOb2RlSlMgLSBzaG91bGRcbiAgICAgIHByb21pc2UuX2ggPSBpc05vZGUgfHwgaXNVbmhhbmRsZWQocHJvbWlzZSkgPyAyIDogMTtcbiAgICB9IHByb21pc2UuX2EgPSB1bmRlZmluZWQ7XG4gICAgaWYgKHVuaGFuZGxlZCAmJiByZXN1bHQuZSkgdGhyb3cgcmVzdWx0LnY7XG4gIH0pO1xufTtcbnZhciBpc1VuaGFuZGxlZCA9IGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gIHJldHVybiBwcm9taXNlLl9oICE9PSAxICYmIChwcm9taXNlLl9hIHx8IHByb21pc2UuX2MpLmxlbmd0aCA9PT0gMDtcbn07XG52YXIgb25IYW5kbGVVbmhhbmRsZWQgPSBmdW5jdGlvbiAocHJvbWlzZSkge1xuICB0YXNrLmNhbGwoZ2xvYmFsLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGhhbmRsZXI7XG4gICAgaWYgKGlzTm9kZSkge1xuICAgICAgcHJvY2Vzcy5lbWl0KCdyZWplY3Rpb25IYW5kbGVkJywgcHJvbWlzZSk7XG4gICAgfSBlbHNlIGlmIChoYW5kbGVyID0gZ2xvYmFsLm9ucmVqZWN0aW9uaGFuZGxlZCkge1xuICAgICAgaGFuZGxlcih7IHByb21pc2U6IHByb21pc2UsIHJlYXNvbjogcHJvbWlzZS5fdiB9KTtcbiAgICB9XG4gIH0pO1xufTtcbnZhciAkcmVqZWN0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHZhciBwcm9taXNlID0gdGhpcztcbiAgaWYgKHByb21pc2UuX2QpIHJldHVybjtcbiAgcHJvbWlzZS5fZCA9IHRydWU7XG4gIHByb21pc2UgPSBwcm9taXNlLl93IHx8IHByb21pc2U7IC8vIHVud3JhcFxuICBwcm9taXNlLl92ID0gdmFsdWU7XG4gIHByb21pc2UuX3MgPSAyO1xuICBpZiAoIXByb21pc2UuX2EpIHByb21pc2UuX2EgPSBwcm9taXNlLl9jLnNsaWNlKCk7XG4gIG5vdGlmeShwcm9taXNlLCB0cnVlKTtcbn07XG52YXIgJHJlc29sdmUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgdmFyIHByb21pc2UgPSB0aGlzO1xuICB2YXIgdGhlbjtcbiAgaWYgKHByb21pc2UuX2QpIHJldHVybjtcbiAgcHJvbWlzZS5fZCA9IHRydWU7XG4gIHByb21pc2UgPSBwcm9taXNlLl93IHx8IHByb21pc2U7IC8vIHVud3JhcFxuICB0cnkge1xuICAgIGlmIChwcm9taXNlID09PSB2YWx1ZSkgdGhyb3cgVHlwZUVycm9yKFwiUHJvbWlzZSBjYW4ndCBiZSByZXNvbHZlZCBpdHNlbGZcIik7XG4gICAgaWYgKHRoZW4gPSBpc1RoZW5hYmxlKHZhbHVlKSkge1xuICAgICAgbWljcm90YXNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHdyYXBwZXIgPSB7IF93OiBwcm9taXNlLCBfZDogZmFsc2UgfTsgLy8gd3JhcFxuICAgICAgICB0cnkge1xuICAgICAgICAgIHRoZW4uY2FsbCh2YWx1ZSwgY3R4KCRyZXNvbHZlLCB3cmFwcGVyLCAxKSwgY3R4KCRyZWplY3QsIHdyYXBwZXIsIDEpKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICRyZWplY3QuY2FsbCh3cmFwcGVyLCBlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb21pc2UuX3YgPSB2YWx1ZTtcbiAgICAgIHByb21pc2UuX3MgPSAxO1xuICAgICAgbm90aWZ5KHByb21pc2UsIGZhbHNlKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICAkcmVqZWN0LmNhbGwoeyBfdzogcHJvbWlzZSwgX2Q6IGZhbHNlIH0sIGUpOyAvLyB3cmFwXG4gIH1cbn07XG5cbi8vIGNvbnN0cnVjdG9yIHBvbHlmaWxsXG5pZiAoIVVTRV9OQVRJVkUpIHtcbiAgLy8gMjUuNC4zLjEgUHJvbWlzZShleGVjdXRvcilcbiAgJFByb21pc2UgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKSB7XG4gICAgYW5JbnN0YW5jZSh0aGlzLCAkUHJvbWlzZSwgUFJPTUlTRSwgJ19oJyk7XG4gICAgYUZ1bmN0aW9uKGV4ZWN1dG9yKTtcbiAgICBJbnRlcm5hbC5jYWxsKHRoaXMpO1xuICAgIHRyeSB7XG4gICAgICBleGVjdXRvcihjdHgoJHJlc29sdmUsIHRoaXMsIDEpLCBjdHgoJHJlamVjdCwgdGhpcywgMSkpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgJHJlamVjdC5jYWxsKHRoaXMsIGVycik7XG4gICAgfVxuICB9O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgSW50ZXJuYWwgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKSB7XG4gICAgdGhpcy5fYyA9IFtdOyAgICAgICAgICAgICAvLyA8LSBhd2FpdGluZyByZWFjdGlvbnNcbiAgICB0aGlzLl9hID0gdW5kZWZpbmVkOyAgICAgIC8vIDwtIGNoZWNrZWQgaW4gaXNVbmhhbmRsZWQgcmVhY3Rpb25zXG4gICAgdGhpcy5fcyA9IDA7ICAgICAgICAgICAgICAvLyA8LSBzdGF0ZVxuICAgIHRoaXMuX2QgPSBmYWxzZTsgICAgICAgICAgLy8gPC0gZG9uZVxuICAgIHRoaXMuX3YgPSB1bmRlZmluZWQ7ICAgICAgLy8gPC0gdmFsdWVcbiAgICB0aGlzLl9oID0gMDsgICAgICAgICAgICAgIC8vIDwtIHJlamVjdGlvbiBzdGF0ZSwgMCAtIGRlZmF1bHQsIDEgLSBoYW5kbGVkLCAyIC0gdW5oYW5kbGVkXG4gICAgdGhpcy5fbiA9IGZhbHNlOyAgICAgICAgICAvLyA8LSBub3RpZnlcbiAgfTtcbiAgSW50ZXJuYWwucHJvdG90eXBlID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUtYWxsJykoJFByb21pc2UucHJvdG90eXBlLCB7XG4gICAgLy8gMjUuNC41LjMgUHJvbWlzZS5wcm90b3R5cGUudGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZClcbiAgICB0aGVuOiBmdW5jdGlvbiB0aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKSB7XG4gICAgICB2YXIgcmVhY3Rpb24gPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShzcGVjaWVzQ29uc3RydWN0b3IodGhpcywgJFByb21pc2UpKTtcbiAgICAgIHJlYWN0aW9uLm9rID0gdHlwZW9mIG9uRnVsZmlsbGVkID09ICdmdW5jdGlvbicgPyBvbkZ1bGZpbGxlZCA6IHRydWU7XG4gICAgICByZWFjdGlvbi5mYWlsID0gdHlwZW9mIG9uUmVqZWN0ZWQgPT0gJ2Z1bmN0aW9uJyAmJiBvblJlamVjdGVkO1xuICAgICAgcmVhY3Rpb24uZG9tYWluID0gaXNOb2RlID8gcHJvY2Vzcy5kb21haW4gOiB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jLnB1c2gocmVhY3Rpb24pO1xuICAgICAgaWYgKHRoaXMuX2EpIHRoaXMuX2EucHVzaChyZWFjdGlvbik7XG4gICAgICBpZiAodGhpcy5fcykgbm90aWZ5KHRoaXMsIGZhbHNlKTtcbiAgICAgIHJldHVybiByZWFjdGlvbi5wcm9taXNlO1xuICAgIH0sXG4gICAgLy8gMjUuNC41LjEgUHJvbWlzZS5wcm90b3R5cGUuY2F0Y2gob25SZWplY3RlZClcbiAgICAnY2F0Y2gnOiBmdW5jdGlvbiAob25SZWplY3RlZCkge1xuICAgICAgcmV0dXJuIHRoaXMudGhlbih1bmRlZmluZWQsIG9uUmVqZWN0ZWQpO1xuICAgIH1cbiAgfSk7XG4gIE93blByb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBwcm9taXNlID0gbmV3IEludGVybmFsKCk7XG4gICAgdGhpcy5wcm9taXNlID0gcHJvbWlzZTtcbiAgICB0aGlzLnJlc29sdmUgPSBjdHgoJHJlc29sdmUsIHByb21pc2UsIDEpO1xuICAgIHRoaXMucmVqZWN0ID0gY3R4KCRyZWplY3QsIHByb21pc2UsIDEpO1xuICB9O1xuICBuZXdQcm9taXNlQ2FwYWJpbGl0eU1vZHVsZS5mID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbiAoQykge1xuICAgIHJldHVybiBDID09PSAkUHJvbWlzZSB8fCBDID09PSBXcmFwcGVyXG4gICAgICA/IG5ldyBPd25Qcm9taXNlQ2FwYWJpbGl0eShDKVxuICAgICAgOiBuZXdHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkoQyk7XG4gIH07XG59XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIHsgUHJvbWlzZTogJFByb21pc2UgfSk7XG5yZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpKCRQcm9taXNlLCBQUk9NSVNFKTtcbnJlcXVpcmUoJy4vX3NldC1zcGVjaWVzJykoUFJPTUlTRSk7XG5XcmFwcGVyID0gcmVxdWlyZSgnLi9fY29yZScpW1BST01JU0VdO1xuXG4vLyBzdGF0aWNzXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC41IFByb21pc2UucmVqZWN0KHIpXG4gIHJlamVjdDogZnVuY3Rpb24gcmVqZWN0KHIpIHtcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHRoaXMpO1xuICAgIHZhciAkJHJlamVjdCA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgICQkcmVqZWN0KHIpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoTElCUkFSWSB8fCAhVVNFX05BVElWRSksIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjYgUHJvbWlzZS5yZXNvbHZlKHgpXG4gIHJlc29sdmU6IGZ1bmN0aW9uIHJlc29sdmUoeCkge1xuICAgIHJldHVybiBwcm9taXNlUmVzb2x2ZShMSUJSQVJZICYmIHRoaXMgPT09IFdyYXBwZXIgPyAkUHJvbWlzZSA6IHRoaXMsIHgpO1xuICB9XG59KTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIShVU0VfTkFUSVZFICYmIHJlcXVpcmUoJy4vX2l0ZXItZGV0ZWN0JykoZnVuY3Rpb24gKGl0ZXIpIHtcbiAgJFByb21pc2UuYWxsKGl0ZXIpWydjYXRjaCddKGVtcHR5KTtcbn0pKSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuMSBQcm9taXNlLmFsbChpdGVyYWJsZSlcbiAgYWxsOiBmdW5jdGlvbiBhbGwoaXRlcmFibGUpIHtcbiAgICB2YXIgQyA9IHRoaXM7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKTtcbiAgICB2YXIgcmVzb2x2ZSA9IGNhcGFiaWxpdHkucmVzb2x2ZTtcbiAgICB2YXIgcmVqZWN0ID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIHJlc3VsdCA9IHBlcmZvcm0oZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHZhbHVlcyA9IFtdO1xuICAgICAgdmFyIGluZGV4ID0gMDtcbiAgICAgIHZhciByZW1haW5pbmcgPSAxO1xuICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBmdW5jdGlvbiAocHJvbWlzZSkge1xuICAgICAgICB2YXIgJGluZGV4ID0gaW5kZXgrKztcbiAgICAgICAgdmFyIGFscmVhZHlDYWxsZWQgPSBmYWxzZTtcbiAgICAgICAgdmFsdWVzLnB1c2godW5kZWZpbmVkKTtcbiAgICAgICAgcmVtYWluaW5nKys7XG4gICAgICAgIEMucmVzb2x2ZShwcm9taXNlKS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgIGlmIChhbHJlYWR5Q2FsbGVkKSByZXR1cm47XG4gICAgICAgICAgYWxyZWFkeUNhbGxlZCA9IHRydWU7XG4gICAgICAgICAgdmFsdWVzWyRpbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcbiAgICB9KTtcbiAgICBpZiAocmVzdWx0LmUpIHJlamVjdChyZXN1bHQudik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfSxcbiAgLy8gMjUuNC40LjQgUHJvbWlzZS5yYWNlKGl0ZXJhYmxlKVxuICByYWNlOiBmdW5jdGlvbiByYWNlKGl0ZXJhYmxlKSB7XG4gICAgdmFyIEMgPSB0aGlzO1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQyk7XG4gICAgdmFyIHJlamVjdCA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciByZXN1bHQgPSBwZXJmb3JtKGZ1bmN0aW9uICgpIHtcbiAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oY2FwYWJpbGl0eS5yZXNvbHZlLCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgaWYgKHJlc3VsdC5lKSByZWplY3QocmVzdWx0LnYpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuIiwiLy8gMjEuMi41LjMgZ2V0IFJlZ0V4cC5wcm90b3R5cGUuZmxhZ3MoKVxuaWYgKHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgLy4vZy5mbGFncyAhPSAnZycpIHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmYoUmVnRXhwLnByb3RvdHlwZSwgJ2ZsYWdzJywge1xuICBjb25maWd1cmFibGU6IHRydWUsXG4gIGdldDogcmVxdWlyZSgnLi9fZmxhZ3MnKVxufSk7XG4iLCIvLyBAQHNwbGl0IGxvZ2ljXG5yZXF1aXJlKCcuL19maXgtcmUtd2tzJykoJ3NwbGl0JywgMiwgZnVuY3Rpb24gKGRlZmluZWQsIFNQTElULCAkc3BsaXQpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuICB2YXIgaXNSZWdFeHAgPSByZXF1aXJlKCcuL19pcy1yZWdleHAnKTtcbiAgdmFyIF9zcGxpdCA9ICRzcGxpdDtcbiAgdmFyICRwdXNoID0gW10ucHVzaDtcbiAgdmFyICRTUExJVCA9ICdzcGxpdCc7XG4gIHZhciBMRU5HVEggPSAnbGVuZ3RoJztcbiAgdmFyIExBU1RfSU5ERVggPSAnbGFzdEluZGV4JztcbiAgaWYgKFxuICAgICdhYmJjJ1skU1BMSVRdKC8oYikqLylbMV0gPT0gJ2MnIHx8XG4gICAgJ3Rlc3QnWyRTUExJVF0oLyg/OikvLCAtMSlbTEVOR1RIXSAhPSA0IHx8XG4gICAgJ2FiJ1skU1BMSVRdKC8oPzphYikqLylbTEVOR1RIXSAhPSAyIHx8XG4gICAgJy4nWyRTUExJVF0oLyguPykoLj8pLylbTEVOR1RIXSAhPSA0IHx8XG4gICAgJy4nWyRTUExJVF0oLygpKCkvKVtMRU5HVEhdID4gMSB8fFxuICAgICcnWyRTUExJVF0oLy4/LylbTEVOR1RIXVxuICApIHtcbiAgICB2YXIgTlBDRyA9IC8oKT8/Ly5leGVjKCcnKVsxXSA9PT0gdW5kZWZpbmVkOyAvLyBub25wYXJ0aWNpcGF0aW5nIGNhcHR1cmluZyBncm91cFxuICAgIC8vIGJhc2VkIG9uIGVzNS1zaGltIGltcGxlbWVudGF0aW9uLCBuZWVkIHRvIHJld29yayBpdFxuICAgICRzcGxpdCA9IGZ1bmN0aW9uIChzZXBhcmF0b3IsIGxpbWl0KSB7XG4gICAgICB2YXIgc3RyaW5nID0gU3RyaW5nKHRoaXMpO1xuICAgICAgaWYgKHNlcGFyYXRvciA9PT0gdW5kZWZpbmVkICYmIGxpbWl0ID09PSAwKSByZXR1cm4gW107XG4gICAgICAvLyBJZiBgc2VwYXJhdG9yYCBpcyBub3QgYSByZWdleCwgdXNlIG5hdGl2ZSBzcGxpdFxuICAgICAgaWYgKCFpc1JlZ0V4cChzZXBhcmF0b3IpKSByZXR1cm4gX3NwbGl0LmNhbGwoc3RyaW5nLCBzZXBhcmF0b3IsIGxpbWl0KTtcbiAgICAgIHZhciBvdXRwdXQgPSBbXTtcbiAgICAgIHZhciBmbGFncyA9IChzZXBhcmF0b3IuaWdub3JlQ2FzZSA/ICdpJyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAoc2VwYXJhdG9yLm11bHRpbGluZSA/ICdtJyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAoc2VwYXJhdG9yLnVuaWNvZGUgPyAndScgOiAnJykgK1xuICAgICAgICAgICAgICAgICAgKHNlcGFyYXRvci5zdGlja3kgPyAneScgOiAnJyk7XG4gICAgICB2YXIgbGFzdExhc3RJbmRleCA9IDA7XG4gICAgICB2YXIgc3BsaXRMaW1pdCA9IGxpbWl0ID09PSB1bmRlZmluZWQgPyA0Mjk0OTY3Mjk1IDogbGltaXQgPj4+IDA7XG4gICAgICAvLyBNYWtlIGBnbG9iYWxgIGFuZCBhdm9pZCBgbGFzdEluZGV4YCBpc3N1ZXMgYnkgd29ya2luZyB3aXRoIGEgY29weVxuICAgICAgdmFyIHNlcGFyYXRvckNvcHkgPSBuZXcgUmVnRXhwKHNlcGFyYXRvci5zb3VyY2UsIGZsYWdzICsgJ2cnKTtcbiAgICAgIHZhciBzZXBhcmF0b3IyLCBtYXRjaCwgbGFzdEluZGV4LCBsYXN0TGVuZ3RoLCBpO1xuICAgICAgLy8gRG9lc24ndCBuZWVkIGZsYWdzIGd5LCBidXQgdGhleSBkb24ndCBodXJ0XG4gICAgICBpZiAoIU5QQ0cpIHNlcGFyYXRvcjIgPSBuZXcgUmVnRXhwKCdeJyArIHNlcGFyYXRvckNvcHkuc291cmNlICsgJyQoPyFcXFxccyknLCBmbGFncyk7XG4gICAgICB3aGlsZSAobWF0Y2ggPSBzZXBhcmF0b3JDb3B5LmV4ZWMoc3RyaW5nKSkge1xuICAgICAgICAvLyBgc2VwYXJhdG9yQ29weS5sYXN0SW5kZXhgIGlzIG5vdCByZWxpYWJsZSBjcm9zcy1icm93c2VyXG4gICAgICAgIGxhc3RJbmRleCA9IG1hdGNoLmluZGV4ICsgbWF0Y2hbMF1bTEVOR1RIXTtcbiAgICAgICAgaWYgKGxhc3RJbmRleCA+IGxhc3RMYXN0SW5kZXgpIHtcbiAgICAgICAgICBvdXRwdXQucHVzaChzdHJpbmcuc2xpY2UobGFzdExhc3RJbmRleCwgbWF0Y2guaW5kZXgpKTtcbiAgICAgICAgICAvLyBGaXggYnJvd3NlcnMgd2hvc2UgYGV4ZWNgIG1ldGhvZHMgZG9uJ3QgY29uc2lzdGVudGx5IHJldHVybiBgdW5kZWZpbmVkYCBmb3IgTlBDR1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1sb29wLWZ1bmNcbiAgICAgICAgICBpZiAoIU5QQ0cgJiYgbWF0Y2hbTEVOR1RIXSA+IDEpIG1hdGNoWzBdLnJlcGxhY2Uoc2VwYXJhdG9yMiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZm9yIChpID0gMTsgaSA8IGFyZ3VtZW50c1tMRU5HVEhdIC0gMjsgaSsrKSBpZiAoYXJndW1lbnRzW2ldID09PSB1bmRlZmluZWQpIG1hdGNoW2ldID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmIChtYXRjaFtMRU5HVEhdID4gMSAmJiBtYXRjaC5pbmRleCA8IHN0cmluZ1tMRU5HVEhdKSAkcHVzaC5hcHBseShvdXRwdXQsIG1hdGNoLnNsaWNlKDEpKTtcbiAgICAgICAgICBsYXN0TGVuZ3RoID0gbWF0Y2hbMF1bTEVOR1RIXTtcbiAgICAgICAgICBsYXN0TGFzdEluZGV4ID0gbGFzdEluZGV4O1xuICAgICAgICAgIGlmIChvdXRwdXRbTEVOR1RIXSA+PSBzcGxpdExpbWl0KSBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2VwYXJhdG9yQ29weVtMQVNUX0lOREVYXSA9PT0gbWF0Y2guaW5kZXgpIHNlcGFyYXRvckNvcHlbTEFTVF9JTkRFWF0rKzsgLy8gQXZvaWQgYW4gaW5maW5pdGUgbG9vcFxuICAgICAgfVxuICAgICAgaWYgKGxhc3RMYXN0SW5kZXggPT09IHN0cmluZ1tMRU5HVEhdKSB7XG4gICAgICAgIGlmIChsYXN0TGVuZ3RoIHx8ICFzZXBhcmF0b3JDb3B5LnRlc3QoJycpKSBvdXRwdXQucHVzaCgnJyk7XG4gICAgICB9IGVsc2Ugb3V0cHV0LnB1c2goc3RyaW5nLnNsaWNlKGxhc3RMYXN0SW5kZXgpKTtcbiAgICAgIHJldHVybiBvdXRwdXRbTEVOR1RIXSA+IHNwbGl0TGltaXQgPyBvdXRwdXQuc2xpY2UoMCwgc3BsaXRMaW1pdCkgOiBvdXRwdXQ7XG4gICAgfTtcbiAgLy8gQ2hha3JhLCBWOFxuICB9IGVsc2UgaWYgKCcwJ1skU1BMSVRdKHVuZGVmaW5lZCwgMClbTEVOR1RIXSkge1xuICAgICRzcGxpdCA9IGZ1bmN0aW9uIChzZXBhcmF0b3IsIGxpbWl0KSB7XG4gICAgICByZXR1cm4gc2VwYXJhdG9yID09PSB1bmRlZmluZWQgJiYgbGltaXQgPT09IDAgPyBbXSA6IF9zcGxpdC5jYWxsKHRoaXMsIHNlcGFyYXRvciwgbGltaXQpO1xuICAgIH07XG4gIH1cbiAgLy8gMjEuMS4zLjE3IFN0cmluZy5wcm90b3R5cGUuc3BsaXQoc2VwYXJhdG9yLCBsaW1pdClcbiAgcmV0dXJuIFtmdW5jdGlvbiBzcGxpdChzZXBhcmF0b3IsIGxpbWl0KSB7XG4gICAgdmFyIE8gPSBkZWZpbmVkKHRoaXMpO1xuICAgIHZhciBmbiA9IHNlcGFyYXRvciA9PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBzZXBhcmF0b3JbU1BMSVRdO1xuICAgIHJldHVybiBmbiAhPT0gdW5kZWZpbmVkID8gZm4uY2FsbChzZXBhcmF0b3IsIE8sIGxpbWl0KSA6ICRzcGxpdC5jYWxsKFN0cmluZyhPKSwgc2VwYXJhdG9yLCBsaW1pdCk7XG4gIH0sICRzcGxpdF07XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnJlcXVpcmUoJy4vZXM2LnJlZ2V4cC5mbGFncycpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgJGZsYWdzID0gcmVxdWlyZSgnLi9fZmxhZ3MnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyk7XG52YXIgVE9fU1RSSU5HID0gJ3RvU3RyaW5nJztcbnZhciAkdG9TdHJpbmcgPSAvLi9bVE9fU1RSSU5HXTtcblxudmFyIGRlZmluZSA9IGZ1bmN0aW9uIChmbikge1xuICByZXF1aXJlKCcuL19yZWRlZmluZScpKFJlZ0V4cC5wcm90b3R5cGUsIFRPX1NUUklORywgZm4sIHRydWUpO1xufTtcblxuLy8gMjEuMi41LjE0IFJlZ0V4cC5wcm90b3R5cGUudG9TdHJpbmcoKVxuaWYgKHJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkgeyByZXR1cm4gJHRvU3RyaW5nLmNhbGwoeyBzb3VyY2U6ICdhJywgZmxhZ3M6ICdiJyB9KSAhPSAnL2EvYic7IH0pKSB7XG4gIGRlZmluZShmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICB2YXIgUiA9IGFuT2JqZWN0KHRoaXMpO1xuICAgIHJldHVybiAnLycuY29uY2F0KFIuc291cmNlLCAnLycsXG4gICAgICAnZmxhZ3MnIGluIFIgPyBSLmZsYWdzIDogIURFU0NSSVBUT1JTICYmIFIgaW5zdGFuY2VvZiBSZWdFeHAgPyAkZmxhZ3MuY2FsbChSKSA6IHVuZGVmaW5lZCk7XG4gIH0pO1xuLy8gRkY0NC0gUmVnRXhwI3RvU3RyaW5nIGhhcyBhIHdyb25nIG5hbWVcbn0gZWxzZSBpZiAoJHRvU3RyaW5nLm5hbWUgIT0gVE9fU1RSSU5HKSB7XG4gIGRlZmluZShmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gJHRvU3RyaW5nLmNhbGwodGhpcyk7XG4gIH0pO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRhdCA9IHJlcXVpcmUoJy4vX3N0cmluZy1hdCcpKHRydWUpO1xuXG4vLyAyMS4xLjMuMjcgU3RyaW5nLnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKFN0cmluZywgJ1N0cmluZycsIGZ1bmN0aW9uIChpdGVyYXRlZCkge1xuICB0aGlzLl90ID0gU3RyaW5nKGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4vLyAyMS4xLjUuMi4xICVTdHJpbmdJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbiAoKSB7XG4gIHZhciBPID0gdGhpcy5fdDtcbiAgdmFyIGluZGV4ID0gdGhpcy5faTtcbiAgdmFyIHBvaW50O1xuICBpZiAoaW5kZXggPj0gTy5sZW5ndGgpIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgcG9pbnQgPSAkYXQoTywgaW5kZXgpO1xuICB0aGlzLl9pICs9IHBvaW50Lmxlbmd0aDtcbiAgcmV0dXJuIHsgdmFsdWU6IHBvaW50LCBkb25lOiBmYWxzZSB9O1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG4vLyBFQ01BU2NyaXB0IDYgc3ltYm9scyBzaGltXG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgTUVUQSA9IHJlcXVpcmUoJy4vX21ldGEnKS5LRVk7XG52YXIgJGZhaWxzID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG52YXIgd2tzID0gcmVxdWlyZSgnLi9fd2tzJyk7XG52YXIgd2tzRXh0ID0gcmVxdWlyZSgnLi9fd2tzLWV4dCcpO1xudmFyIHdrc0RlZmluZSA9IHJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKTtcbnZhciBlbnVtS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0ta2V5cycpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuL19pcy1hcnJheScpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xudmFyIF9jcmVhdGUgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJyk7XG52YXIgZ09QTkV4dCA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BuLWV4dCcpO1xudmFyICRHT1BEID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKTtcbnZhciAkRFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG52YXIgZ09QRCA9ICRHT1BELmY7XG52YXIgZFAgPSAkRFAuZjtcbnZhciBnT1BOID0gZ09QTkV4dC5mO1xudmFyICRTeW1ib2wgPSBnbG9iYWwuU3ltYm9sO1xudmFyICRKU09OID0gZ2xvYmFsLkpTT047XG52YXIgX3N0cmluZ2lmeSA9ICRKU09OICYmICRKU09OLnN0cmluZ2lmeTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcbnZhciBISURERU4gPSB3a3MoJ19oaWRkZW4nKTtcbnZhciBUT19QUklNSVRJVkUgPSB3a3MoJ3RvUHJpbWl0aXZlJyk7XG52YXIgaXNFbnVtID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG52YXIgU3ltYm9sUmVnaXN0cnkgPSBzaGFyZWQoJ3N5bWJvbC1yZWdpc3RyeScpO1xudmFyIEFsbFN5bWJvbHMgPSBzaGFyZWQoJ3N5bWJvbHMnKTtcbnZhciBPUFN5bWJvbHMgPSBzaGFyZWQoJ29wLXN5bWJvbHMnKTtcbnZhciBPYmplY3RQcm90byA9IE9iamVjdFtQUk9UT1RZUEVdO1xudmFyIFVTRV9OQVRJVkUgPSB0eXBlb2YgJFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xudmFyIFFPYmplY3QgPSBnbG9iYWwuUU9iamVjdDtcbi8vIERvbid0IHVzZSBzZXR0ZXJzIGluIFF0IFNjcmlwdCwgaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzE3M1xudmFyIHNldHRlciA9ICFRT2JqZWN0IHx8ICFRT2JqZWN0W1BST1RPVFlQRV0gfHwgIVFPYmplY3RbUFJPVE9UWVBFXS5maW5kQ2hpbGQ7XG5cbi8vIGZhbGxiYWNrIGZvciBvbGQgQW5kcm9pZCwgaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTY4N1xudmFyIHNldFN5bWJvbERlc2MgPSBERVNDUklQVE9SUyAmJiAkZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gX2NyZWF0ZShkUCh7fSwgJ2EnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBkUCh0aGlzLCAnYScsIHsgdmFsdWU6IDcgfSkuYTsgfVxuICB9KSkuYSAhPSA3O1xufSkgPyBmdW5jdGlvbiAoaXQsIGtleSwgRCkge1xuICB2YXIgcHJvdG9EZXNjID0gZ09QRChPYmplY3RQcm90bywga2V5KTtcbiAgaWYgKHByb3RvRGVzYykgZGVsZXRlIE9iamVjdFByb3RvW2tleV07XG4gIGRQKGl0LCBrZXksIEQpO1xuICBpZiAocHJvdG9EZXNjICYmIGl0ICE9PSBPYmplY3RQcm90bykgZFAoT2JqZWN0UHJvdG8sIGtleSwgcHJvdG9EZXNjKTtcbn0gOiBkUDtcblxudmFyIHdyYXAgPSBmdW5jdGlvbiAodGFnKSB7XG4gIHZhciBzeW0gPSBBbGxTeW1ib2xzW3RhZ10gPSBfY3JlYXRlKCRTeW1ib2xbUFJPVE9UWVBFXSk7XG4gIHN5bS5fayA9IHRhZztcbiAgcmV0dXJuIHN5bTtcbn07XG5cbnZhciBpc1N5bWJvbCA9IFVTRV9OQVRJVkUgJiYgdHlwZW9mICRTeW1ib2wuaXRlcmF0b3IgPT0gJ3N5bWJvbCcgPyBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJztcbn0gOiBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0IGluc3RhbmNlb2YgJFN5bWJvbDtcbn07XG5cbnZhciAkZGVmaW5lUHJvcGVydHkgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBEKSB7XG4gIGlmIChpdCA9PT0gT2JqZWN0UHJvdG8pICRkZWZpbmVQcm9wZXJ0eShPUFN5bWJvbHMsIGtleSwgRCk7XG4gIGFuT2JqZWN0KGl0KTtcbiAga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKTtcbiAgYW5PYmplY3QoRCk7XG4gIGlmIChoYXMoQWxsU3ltYm9scywga2V5KSkge1xuICAgIGlmICghRC5lbnVtZXJhYmxlKSB7XG4gICAgICBpZiAoIWhhcyhpdCwgSElEREVOKSkgZFAoaXQsIEhJRERFTiwgY3JlYXRlRGVzYygxLCB7fSkpO1xuICAgICAgaXRbSElEREVOXVtrZXldID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0pIGl0W0hJRERFTl1ba2V5XSA9IGZhbHNlO1xuICAgICAgRCA9IF9jcmVhdGUoRCwgeyBlbnVtZXJhYmxlOiBjcmVhdGVEZXNjKDAsIGZhbHNlKSB9KTtcbiAgICB9IHJldHVybiBzZXRTeW1ib2xEZXNjKGl0LCBrZXksIEQpO1xuICB9IHJldHVybiBkUChpdCwga2V5LCBEKTtcbn07XG52YXIgJGRlZmluZVByb3BlcnRpZXMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKGl0LCBQKSB7XG4gIGFuT2JqZWN0KGl0KTtcbiAgdmFyIGtleXMgPSBlbnVtS2V5cyhQID0gdG9JT2JqZWN0KFApKTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgbCA9IGtleXMubGVuZ3RoO1xuICB2YXIga2V5O1xuICB3aGlsZSAobCA+IGkpICRkZWZpbmVQcm9wZXJ0eShpdCwga2V5ID0ga2V5c1tpKytdLCBQW2tleV0pO1xuICByZXR1cm4gaXQ7XG59O1xudmFyICRjcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaXQsIFApIHtcbiAgcmV0dXJuIFAgPT09IHVuZGVmaW5lZCA/IF9jcmVhdGUoaXQpIDogJGRlZmluZVByb3BlcnRpZXMoX2NyZWF0ZShpdCksIFApO1xufTtcbnZhciAkcHJvcGVydHlJc0VudW1lcmFibGUgPSBmdW5jdGlvbiBwcm9wZXJ0eUlzRW51bWVyYWJsZShrZXkpIHtcbiAgdmFyIEUgPSBpc0VudW0uY2FsbCh0aGlzLCBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpKTtcbiAgaWYgKHRoaXMgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKSByZXR1cm4gZmFsc2U7XG4gIHJldHVybiBFIHx8ICFoYXModGhpcywga2V5KSB8fCAhaGFzKEFsbFN5bWJvbHMsIGtleSkgfHwgaGFzKHRoaXMsIEhJRERFTikgJiYgdGhpc1tISURERU5dW2tleV0gPyBFIDogdHJ1ZTtcbn07XG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KSB7XG4gIGl0ID0gdG9JT2JqZWN0KGl0KTtcbiAga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKTtcbiAgaWYgKGl0ID09PSBPYmplY3RQcm90byAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9QU3ltYm9scywga2V5KSkgcmV0dXJuO1xuICB2YXIgRCA9IGdPUEQoaXQsIGtleSk7XG4gIGlmIChEICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICEoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSkpIEQuZW51bWVyYWJsZSA9IHRydWU7XG4gIHJldHVybiBEO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlOYW1lcyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpIHtcbiAgdmFyIG5hbWVzID0gZ09QTih0b0lPYmplY3QoaXQpKTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgaSA9IDA7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSB7XG4gICAgaWYgKCFoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYga2V5ICE9IEhJRERFTiAmJiBrZXkgIT0gTUVUQSkgcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KSB7XG4gIHZhciBJU19PUCA9IGl0ID09PSBPYmplY3RQcm90bztcbiAgdmFyIG5hbWVzID0gZ09QTihJU19PUCA/IE9QU3ltYm9scyA6IHRvSU9iamVjdChpdCkpO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBpID0gMDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIHtcbiAgICBpZiAoaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIChJU19PUCA/IGhhcyhPYmplY3RQcm90bywga2V5KSA6IHRydWUpKSByZXN1bHQucHVzaChBbGxTeW1ib2xzW2tleV0pO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xuXG4vLyAxOS40LjEuMSBTeW1ib2woW2Rlc2NyaXB0aW9uXSlcbmlmICghVVNFX05BVElWRSkge1xuICAkU3ltYm9sID0gZnVuY3Rpb24gU3ltYm9sKCkge1xuICAgIGlmICh0aGlzIGluc3RhbmNlb2YgJFN5bWJvbCkgdGhyb3cgVHlwZUVycm9yKCdTeW1ib2wgaXMgbm90IGEgY29uc3RydWN0b3IhJyk7XG4gICAgdmFyIHRhZyA9IHVpZChhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCk7XG4gICAgdmFyICRzZXQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIGlmICh0aGlzID09PSBPYmplY3RQcm90bykgJHNldC5jYWxsKE9QU3ltYm9scywgdmFsdWUpO1xuICAgICAgaWYgKGhhcyh0aGlzLCBISURERU4pICYmIGhhcyh0aGlzW0hJRERFTl0sIHRhZykpIHRoaXNbSElEREVOXVt0YWddID0gZmFsc2U7XG4gICAgICBzZXRTeW1ib2xEZXNjKHRoaXMsIHRhZywgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xuICAgIH07XG4gICAgaWYgKERFU0NSSVBUT1JTICYmIHNldHRlcikgc2V0U3ltYm9sRGVzYyhPYmplY3RQcm90bywgdGFnLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgc2V0OiAkc2V0IH0pO1xuICAgIHJldHVybiB3cmFwKHRhZyk7XG4gIH07XG4gIHJlZGVmaW5lKCRTeW1ib2xbUFJPVE9UWVBFXSwgJ3RvU3RyaW5nJywgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2s7XG4gIH0pO1xuXG4gICRHT1BELmYgPSAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuICAkRFAuZiA9ICRkZWZpbmVQcm9wZXJ0eTtcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mID0gZ09QTkV4dC5mID0gJGdldE93blByb3BlcnR5TmFtZXM7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1waWUnKS5mID0gJHByb3BlcnR5SXNFbnVtZXJhYmxlO1xuICByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpLmYgPSAkZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG4gIGlmIChERVNDUklQVE9SUyAmJiAhcmVxdWlyZSgnLi9fbGlicmFyeScpKSB7XG4gICAgcmVkZWZpbmUoT2JqZWN0UHJvdG8sICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsICRwcm9wZXJ0eUlzRW51bWVyYWJsZSwgdHJ1ZSk7XG4gIH1cblxuICB3a3NFeHQuZiA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgcmV0dXJuIHdyYXAod2tzKG5hbWUpKTtcbiAgfTtcbn1cblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgeyBTeW1ib2w6ICRTeW1ib2wgfSk7XG5cbmZvciAodmFyIGVzNlN5bWJvbHMgPSAoXG4gIC8vIDE5LjQuMi4yLCAxOS40LjIuMywgMTkuNC4yLjQsIDE5LjQuMi42LCAxOS40LjIuOCwgMTkuNC4yLjksIDE5LjQuMi4xMCwgMTkuNC4yLjExLCAxOS40LjIuMTIsIDE5LjQuMi4xMywgMTkuNC4yLjE0XG4gICdoYXNJbnN0YW5jZSxpc0NvbmNhdFNwcmVhZGFibGUsaXRlcmF0b3IsbWF0Y2gscmVwbGFjZSxzZWFyY2gsc3BlY2llcyxzcGxpdCx0b1ByaW1pdGl2ZSx0b1N0cmluZ1RhZyx1bnNjb3BhYmxlcydcbikuc3BsaXQoJywnKSwgaiA9IDA7IGVzNlN5bWJvbHMubGVuZ3RoID4gajspd2tzKGVzNlN5bWJvbHNbaisrXSk7XG5cbmZvciAodmFyIHdlbGxLbm93blN5bWJvbHMgPSAka2V5cyh3a3Muc3RvcmUpLCBrID0gMDsgd2VsbEtub3duU3ltYm9scy5sZW5ndGggPiBrOykgd2tzRGVmaW5lKHdlbGxLbm93blN5bWJvbHNbaysrXSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsICdTeW1ib2wnLCB7XG4gIC8vIDE5LjQuMi4xIFN5bWJvbC5mb3Ioa2V5KVxuICAnZm9yJzogZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBoYXMoU3ltYm9sUmVnaXN0cnksIGtleSArPSAnJylcbiAgICAgID8gU3ltYm9sUmVnaXN0cnlba2V5XVxuICAgICAgOiBTeW1ib2xSZWdpc3RyeVtrZXldID0gJFN5bWJvbChrZXkpO1xuICB9LFxuICAvLyAxOS40LjIuNSBTeW1ib2wua2V5Rm9yKHN5bSlcbiAga2V5Rm9yOiBmdW5jdGlvbiBrZXlGb3Ioc3ltKSB7XG4gICAgaWYgKCFpc1N5bWJvbChzeW0pKSB0aHJvdyBUeXBlRXJyb3Ioc3ltICsgJyBpcyBub3QgYSBzeW1ib2whJyk7XG4gICAgZm9yICh2YXIga2V5IGluIFN5bWJvbFJlZ2lzdHJ5KSBpZiAoU3ltYm9sUmVnaXN0cnlba2V5XSA9PT0gc3ltKSByZXR1cm4ga2V5O1xuICB9LFxuICB1c2VTZXR0ZXI6IGZ1bmN0aW9uICgpIHsgc2V0dGVyID0gdHJ1ZTsgfSxcbiAgdXNlU2ltcGxlOiBmdW5jdGlvbiAoKSB7IHNldHRlciA9IGZhbHNlOyB9XG59KTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ09iamVjdCcsIHtcbiAgLy8gMTkuMS4yLjIgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxuICBjcmVhdGU6ICRjcmVhdGUsXG4gIC8vIDE5LjEuMi40IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuICBkZWZpbmVQcm9wZXJ0eTogJGRlZmluZVByb3BlcnR5LFxuICAvLyAxOS4xLjIuMyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKVxuICBkZWZpbmVQcm9wZXJ0aWVzOiAkZGVmaW5lUHJvcGVydGllcyxcbiAgLy8gMTkuMS4yLjYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKVxuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsXG4gIC8vIDE5LjEuMi43IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG4gIGdldE93blByb3BlcnR5TmFtZXM6ICRnZXRPd25Qcm9wZXJ0eU5hbWVzLFxuICAvLyAxOS4xLjIuOCBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKE8pXG4gIGdldE93blByb3BlcnR5U3ltYm9sczogJGdldE93blByb3BlcnR5U3ltYm9sc1xufSk7XG5cbi8vIDI0LjMuMiBKU09OLnN0cmluZ2lmeSh2YWx1ZSBbLCByZXBsYWNlciBbLCBzcGFjZV1dKVxuJEpTT04gJiYgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoIVVTRV9OQVRJVkUgfHwgJGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIFMgPSAkU3ltYm9sKCk7XG4gIC8vIE1TIEVkZ2UgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIHt9XG4gIC8vIFdlYktpdCBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMgbnVsbFxuICAvLyBWOCB0aHJvd3Mgb24gYm94ZWQgc3ltYm9sc1xuICByZXR1cm4gX3N0cmluZ2lmeShbU10pICE9ICdbbnVsbF0nIHx8IF9zdHJpbmdpZnkoeyBhOiBTIH0pICE9ICd7fScgfHwgX3N0cmluZ2lmeShPYmplY3QoUykpICE9ICd7fSc7XG59KSksICdKU09OJywge1xuICBzdHJpbmdpZnk6IGZ1bmN0aW9uIHN0cmluZ2lmeShpdCkge1xuICAgIHZhciBhcmdzID0gW2l0XTtcbiAgICB2YXIgaSA9IDE7XG4gICAgdmFyIHJlcGxhY2VyLCAkcmVwbGFjZXI7XG4gICAgd2hpbGUgKGFyZ3VtZW50cy5sZW5ndGggPiBpKSBhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgICRyZXBsYWNlciA9IHJlcGxhY2VyID0gYXJnc1sxXTtcbiAgICBpZiAoIWlzT2JqZWN0KHJlcGxhY2VyKSAmJiBpdCA9PT0gdW5kZWZpbmVkIHx8IGlzU3ltYm9sKGl0KSkgcmV0dXJuOyAvLyBJRTggcmV0dXJucyBzdHJpbmcgb24gdW5kZWZpbmVkXG4gICAgaWYgKCFpc0FycmF5KHJlcGxhY2VyKSkgcmVwbGFjZXIgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgaWYgKHR5cGVvZiAkcmVwbGFjZXIgPT0gJ2Z1bmN0aW9uJykgdmFsdWUgPSAkcmVwbGFjZXIuY2FsbCh0aGlzLCBrZXksIHZhbHVlKTtcbiAgICAgIGlmICghaXNTeW1ib2wodmFsdWUpKSByZXR1cm4gdmFsdWU7XG4gICAgfTtcbiAgICBhcmdzWzFdID0gcmVwbGFjZXI7XG4gICAgcmV0dXJuIF9zdHJpbmdpZnkuYXBwbHkoJEpTT04sIGFyZ3MpO1xuICB9XG59KTtcblxuLy8gMTkuNC4zLjQgU3ltYm9sLnByb3RvdHlwZVtAQHRvUHJpbWl0aXZlXShoaW50KVxuJFN5bWJvbFtQUk9UT1RZUEVdW1RPX1BSSU1JVElWRV0gfHwgcmVxdWlyZSgnLi9faGlkZScpKCRTeW1ib2xbUFJPVE9UWVBFXSwgVE9fUFJJTUlUSVZFLCAkU3ltYm9sW1BST1RPVFlQRV0udmFsdWVPZik7XG4vLyAxOS40LjMuNSBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZygkU3ltYm9sLCAnU3ltYm9sJyk7XG4vLyAyMC4yLjEuOSBNYXRoW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhNYXRoLCAnTWF0aCcsIHRydWUpO1xuLy8gMjQuMy4zIEpTT05bQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKGdsb2JhbC5KU09OLCAnSlNPTicsIHRydWUpO1xuIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtb2JqZWN0LXZhbHVlcy1lbnRyaWVzXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyICRlbnRyaWVzID0gcmVxdWlyZSgnLi9fb2JqZWN0LXRvLWFycmF5JykodHJ1ZSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnT2JqZWN0Jywge1xuICBlbnRyaWVzOiBmdW5jdGlvbiBlbnRyaWVzKGl0KSB7XG4gICAgcmV0dXJuICRlbnRyaWVzKGl0KTtcbiAgfVxufSk7XG4iLCJyZXF1aXJlKCcuL193a3MtZGVmaW5lJykoJ2FzeW5jSXRlcmF0b3InKTtcbiIsInZhciAkaXRlcmF0b3JzID0gcmVxdWlyZSgnLi9lczYuYXJyYXkuaXRlcmF0b3InKTtcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciB3a3MgPSByZXF1aXJlKCcuL193a3MnKTtcbnZhciBJVEVSQVRPUiA9IHdrcygnaXRlcmF0b3InKTtcbnZhciBUT19TVFJJTkdfVEFHID0gd2tzKCd0b1N0cmluZ1RhZycpO1xudmFyIEFycmF5VmFsdWVzID0gSXRlcmF0b3JzLkFycmF5O1xuXG52YXIgRE9NSXRlcmFibGVzID0ge1xuICBDU1NSdWxlTGlzdDogdHJ1ZSwgLy8gVE9ETzogTm90IHNwZWMgY29tcGxpYW50LCBzaG91bGQgYmUgZmFsc2UuXG4gIENTU1N0eWxlRGVjbGFyYXRpb246IGZhbHNlLFxuICBDU1NWYWx1ZUxpc3Q6IGZhbHNlLFxuICBDbGllbnRSZWN0TGlzdDogZmFsc2UsXG4gIERPTVJlY3RMaXN0OiBmYWxzZSxcbiAgRE9NU3RyaW5nTGlzdDogZmFsc2UsXG4gIERPTVRva2VuTGlzdDogdHJ1ZSxcbiAgRGF0YVRyYW5zZmVySXRlbUxpc3Q6IGZhbHNlLFxuICBGaWxlTGlzdDogZmFsc2UsXG4gIEhUTUxBbGxDb2xsZWN0aW9uOiBmYWxzZSxcbiAgSFRNTENvbGxlY3Rpb246IGZhbHNlLFxuICBIVE1MRm9ybUVsZW1lbnQ6IGZhbHNlLFxuICBIVE1MU2VsZWN0RWxlbWVudDogZmFsc2UsXG4gIE1lZGlhTGlzdDogdHJ1ZSwgLy8gVE9ETzogTm90IHNwZWMgY29tcGxpYW50LCBzaG91bGQgYmUgZmFsc2UuXG4gIE1pbWVUeXBlQXJyYXk6IGZhbHNlLFxuICBOYW1lZE5vZGVNYXA6IGZhbHNlLFxuICBOb2RlTGlzdDogdHJ1ZSxcbiAgUGFpbnRSZXF1ZXN0TGlzdDogZmFsc2UsXG4gIFBsdWdpbjogZmFsc2UsXG4gIFBsdWdpbkFycmF5OiBmYWxzZSxcbiAgU1ZHTGVuZ3RoTGlzdDogZmFsc2UsXG4gIFNWR051bWJlckxpc3Q6IGZhbHNlLFxuICBTVkdQYXRoU2VnTGlzdDogZmFsc2UsXG4gIFNWR1BvaW50TGlzdDogZmFsc2UsXG4gIFNWR1N0cmluZ0xpc3Q6IGZhbHNlLFxuICBTVkdUcmFuc2Zvcm1MaXN0OiBmYWxzZSxcbiAgU291cmNlQnVmZmVyTGlzdDogZmFsc2UsXG4gIFN0eWxlU2hlZXRMaXN0OiB0cnVlLCAvLyBUT0RPOiBOb3Qgc3BlYyBjb21wbGlhbnQsIHNob3VsZCBiZSBmYWxzZS5cbiAgVGV4dFRyYWNrQ3VlTGlzdDogZmFsc2UsXG4gIFRleHRUcmFja0xpc3Q6IGZhbHNlLFxuICBUb3VjaExpc3Q6IGZhbHNlXG59O1xuXG5mb3IgKHZhciBjb2xsZWN0aW9ucyA9IGdldEtleXMoRE9NSXRlcmFibGVzKSwgaSA9IDA7IGkgPCBjb2xsZWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICB2YXIgTkFNRSA9IGNvbGxlY3Rpb25zW2ldO1xuICB2YXIgZXhwbGljaXQgPSBET01JdGVyYWJsZXNbTkFNRV07XG4gIHZhciBDb2xsZWN0aW9uID0gZ2xvYmFsW05BTUVdO1xuICB2YXIgcHJvdG8gPSBDb2xsZWN0aW9uICYmIENvbGxlY3Rpb24ucHJvdG90eXBlO1xuICB2YXIga2V5O1xuICBpZiAocHJvdG8pIHtcbiAgICBpZiAoIXByb3RvW0lURVJBVE9SXSkgaGlkZShwcm90bywgSVRFUkFUT1IsIEFycmF5VmFsdWVzKTtcbiAgICBpZiAoIXByb3RvW1RPX1NUUklOR19UQUddKSBoaWRlKHByb3RvLCBUT19TVFJJTkdfVEFHLCBOQU1FKTtcbiAgICBJdGVyYXRvcnNbTkFNRV0gPSBBcnJheVZhbHVlcztcbiAgICBpZiAoZXhwbGljaXQpIGZvciAoa2V5IGluICRpdGVyYXRvcnMpIGlmICghcHJvdG9ba2V5XSkgcmVkZWZpbmUocHJvdG8sIGtleSwgJGl0ZXJhdG9yc1trZXldLCB0cnVlKTtcbiAgfVxufVxuIiwiaW1wb3J0IE4xOWJhc2VBcHBsZXQgZnJvbSAnLi9uMTliYXNlQXBwbGV0JztcbmltcG9ydCBOMTlwb3B1cENvbnRyb2xsZXIgZnJvbSAnLi9uMTlwb3B1cENvbnRyb2xsZXInO1xuXG5TaWViZWxBcHBGYWNhZGUuTjE5SGVscGVyID0gY2xhc3MgZXh0ZW5kcyBOMTliYXNlQXBwbGV0IHtcbiAgY29uc3RydWN0b3Ioc2V0dGluZ3MpIHtcbiAgICBjb25zdCB7IGFwcGxldE5hbWUgfSA9IHNldHRpbmdzO1xuICAgIGlmIChhcHBsZXROYW1lKSB7XG4gICAgICBjb25zdCBhcHBsZXQgPSBTaWViZWxBcHAuU19BcHAuR2V0QWN0aXZlVmlldygpLkdldEFwcGxldChhcHBsZXROYW1lKTtcbiAgICAgIGlmICghYXBwbGV0KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGdldCB0aGUgcmVmZXJlbmNlIHRvIHRoZSBhcHBsZXQgYnkgdGhlICR7YXBwbGV0TmFtZX0gbmFtZWApO1xuICAgICAgfVxuICAgICAgc3VwZXIoT2JqZWN0LmFzc2lnbih7fSwgc2V0dGluZ3MsIHsgcG06IGFwcGxldC5HZXRQTW9kZWwoKSB9KSk7XG4gICAgfSBlbHNlIHsgLy8gdGhlIHVzdWFsIHdheSBhc3N1bWVkXG4gICAgICBzdXBlcihzZXR0aW5ncyk7XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coJ05leHVzIG1haW4gY2xhc3Mgc3RhcnRlZC4uLi4nLCB0aGlzLmFwcGxldE5hbWUpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICAvLyBnZXQgdGhlIG4xOXBvcHVwQ29udHJvbGxlciBzaW5nbGV0b24gaW5zdGFuY2VcbiAgICB0aGlzLm4xOXBvcHVwQ29udHJvbGxlciA9IE4xOXBvcHVwQ29udHJvbGxlci5pbnN0YW5jZTtcbiAgfVxuXG4gIGNsb3NlUG9wdXBBcHBsZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMubjE5cG9wdXBDb250cm9sbGVyLmNsb3NlUG9wdXBBcHBsZXQoKTtcbiAgfVxuXG4gIF9zaG93UG9wdXBBcHBsZXQobmFtZSwgaGlkZSwgY2IpIHtcbiAgICBpZiAoIXRoaXMubjE5cG9wdXBDb250cm9sbGVyKSB7XG4gICAgICAvLyBpdCBpcyBhIHBvcHVwIGFwcGxldFxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdPcGVubmluZyBwb3B1cCBvbiB0aGUgcG9wdXAgaXMgbm90IHN1cHBvcnRlZCBub3cnKTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLm4xOXBvcHVwQ29udHJvbGxlci5jYW5PcGVuUG9wdXAoKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3Qgb3BlbiBwb3B1cCAoY3VycmVudGx5IGV4aXN0cyByZXNvbHZlIGZ1bmN0aW9uKSEnKTtcbiAgICAgIC8vIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy52aWV3LlNldEFjdGl2ZUFwcGxldEludGVybmFsKHRoaXMuYXBwbGV0KTsgLy8gb3IgU2V0QWN0aXZlQXBwbGV0XG4gICAgdGhpcy5fc2V0QWN0aXZlQ29udHJvbChuYW1lKTtcbiAgICByZXR1cm4gdGhpcy5uMTlwb3B1cENvbnRyb2xsZXIuc2hvd1BvcHVwQXBwbGV0KGhpZGUsIGNiLCB0aGlzLnBtKTtcbiAgfVxuXG4gIHNob3dNdmdBcHBsZXQobmFtZSwgaGlkZSwgY2IpIHtcbiAgICByZXR1cm4gdGhpcy5fc2hvd1BvcHVwQXBwbGV0KG5hbWUsIGhpZGUsIGNiKTtcbiAgfVxuXG4gIHNob3dQaWNrQXBwbGV0KG5hbWUsIGhpZGUsIGNiKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Nob3dQb3B1cEFwcGxldChuYW1lLCBoaWRlLCBjYik7XG4gIH1cblxuICBkcmlsbGRvd24oY29udHJvbE5hbWUpIHtcbiAgICAvLyB0b2RvOiBjaGVjayBpc0xpbmsgb2YgY29udHJvbD9cbiAgICAvLyBpbmRleCBpcyBub3QgZWZmZWN0aXZlLCBhbmQgZHJpbGxkb3duIGFueXdheSBoYXBwZW5zIG9uIGxhc3Qgc2VsZWN0ZWQgcmVjb3JkXG4gICAgaWYgKCF0aGlzLmlzTGlzdEFwcGxldCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCBpbmRleCA9IHRoaXMuZ2V0U2VsZWN0aW9uKCk7XG4gICAgcmV0dXJuIHRoaXMucG0uRXhlY3V0ZU1ldGhvZCgnT25EcmlsbERvd24nLCBjb250cm9sTmFtZSwgaW5kZXgpO1xuICB9XG5cbiAgZ290b1ZpZXcodGFyZ2V0Vmlld05hbWUsIHRhcmdldEFwcGxldE5hbWUsIGlkKSB7XG4gICAgLy8gdG9kbzogZ2V0IHRoZSBhcHBsZXQgbmFtZSBmcm9tIHRoZSB2aWV3IGRlZmluaXRpb24/XG4gICAgY29uc3Qgcm93SWQgPSB0eXBlb2YgaWQgPT09ICd1bmRlZmluZWQnID8gdGhpcy5nZXRDdXJyZW50UmVjb3JkKHRydWUpLklkIDogaWQ7XG4gICAgbGV0IFNXRUNtZCA9IGBHb3RvVmlldyZTV0VWaWV3PSR7dGFyZ2V0Vmlld05hbWV9JlNXRUFwcGxldDA9JHt0YXJnZXRBcHBsZXROYW1lfWA7XG4gICAgU1dFQ21kICs9IGAmU1dFQlU9MSZTV0VLZWVwQ29udGV4dD1GQUxTRSZTV0VSb3dJZDA9JHtyb3dJZH1gO1xuICAgIFNXRUNtZCA9IGVuY29kZVVSSShTV0VDbWQpO1xuICAgIFNpZWJlbEFwcC5TX0FwcC5Hb3RvVmlldyh0YXJnZXRWaWV3TmFtZSwgJycsIFNXRUNtZCwgJycpO1xuICB9XG5cbiAgc3RhdGljIFJlSW5pdFBvcHVwKCkge1xuICAgIGNvbnN0IHBvcHVwUE0gPSBTaWViZWxBcHAuU19BcHAuR2V0UG9wdXBQTSgpO1xuICAgIHBvcHVwUE0uSW5pdCgpO1xuICAgIHBvcHVwUE0uU2V0dXAoKTtcbiAgfVxufTtcbiIsImltcG9ydCBOMTlub3RpZmljYXRpb25zIGZyb20gJy4vbjE5bm90aWZpY2F0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE4xOWJhc2VBcHBsZXQge1xuICBjb25zdHJ1Y3RvcihzZXR0aW5ncykge1xuICAgIHRoaXMuY29uc3RzID0gU2llYmVsSlMuRGVwZW5kZW5jeSgnU2llYmVsQXBwLkNvbnN0YW50cycpO1xuICAgIHRoaXMudXRpbHMgPSBTaWViZWxKUy5EZXBlbmRlbmN5KCdTaWViZWxBcHAuVXRpbHMnKTtcbiAgICB0aGlzLnBtID0gc2V0dGluZ3MucG07XG4gICAgdGhpcy5jb252ZXJ0RGF0ZXMgPSBzZXR0aW5ncy5jb252ZXJ0RGF0ZXM7XG4gICAgdGhpcy52aWV3ID0gU2llYmVsQXBwLlNfQXBwLkdldEFjdGl2ZVZpZXcoKTtcbiAgICB0aGlzLmFwcGxldE5hbWUgPSB0aGlzLnBtLkdldCgnR2V0TmFtZScpO1xuICAgIHRoaXMuYXBwbGV0ID0gdGhpcy52aWV3LkdldEFwcGxldCh0aGlzLmFwcGxldE5hbWUpO1xuICAgIHRoaXMuaXNMaXN0QXBwbGV0ID0gdHlwZW9mIHRoaXMucG0uR2V0KCdHZXRMaXN0T2ZDb2x1bW5zJykgIT09ICd1bmRlZmluZWQnO1xuICAgIHRoaXMucmVxdWlyZWQgPSBbXTsgLy8gd2lsbCBiZSBlbXB0eSBmb3IgdGhlIGxpc3QgYXBwbGV0XG4gICAgdGhpcy5sb3YgPSB7fTtcbiAgICB0aGlzLmJvb2xPYmplY3QgPSBuZXcgU2llYmVsQXBwLlNfQXBwLkRhdHVtQm9vbE9iamVjdCgpO1xuXG4gICAgdGhpcy5sb2FkTG9jYWxlRGF0YSgpO1xuXG4gICAgY29uc3QgYmNJZCA9IHRoaXMuYXBwbGV0LkdldEJDSWQoKTtcbiAgICB0aGlzLm5vdGlmaWNhdGlvbnMgPSBuZXcgTjE5bm90aWZpY2F0aW9ucyh0aGlzLnBtLCB0aGlzLmNvbnN0cywgYmNJZCk7XG5cbiAgICAvLyBwb3B1bGF0ZSB0aGUgcmVxdWlyZWQgYXJyYXkgZm9yIGZvcm0gYXBwbGV0c1xuICAgIGlmICghdGhpcy5pc0xpc3RBcHBsZXQpIHtcbiAgICAgIGNvbnN0IGFwcGxldElkID0gYHNfJHt0aGlzLnBtLkdldCgnR2V0RnVsbElkJyl9X2RpdmA7XG4gICAgICBjb25zdCBhcHBsZXRJbnB1dHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChhcHBsZXRJZCkucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXBwbGV0SW5wdXRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmIChhcHBsZXRJbnB1dHNbaV0uYXR0cmlidXRlc1snYXJpYS1yZXF1aXJlZCddKSB7XG4gICAgICAgICAgdGhpcy5yZXF1aXJlZC5wdXNoKGFwcGxldElucHV0c1tpXS5hdHRyaWJ1dGVzLm5hbWUubm9kZVZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGxpc3RlbmVyIHRvIGdldCBkeW5hbWljIExPVnNcbiAgICB0aGlzLnBtLkF0dGFjaFBNQmluZGluZygnVXBkYXRlUXVpY2tQaWNrSW5mbycsIChpbnB1dE5hbWUsIGFyZywgYXJyKSA9PiB7XG4gICAgICBjb25zdCB2aWV3TmFtZSA9IHRoaXMudmlldy5HZXROYW1lKCk7XG4gICAgICBpZiAodmlld05hbWUgPT09IGFyclsxXSAmJiB0aGlzLmFwcGxldE5hbWUgPT09IGFyclsyXSkge1xuICAgICAgICBpZiAoJ2ZhbHNlJyA9PT0gYXJyWzRdKSB7XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgICBjb25zb2xlLndhcm4oYFtOMTldUGlja2xpc3QgaXMgbm90IGFzc29jaWF0ZWQgd2l0aCB0aGUgY29udHJvbCAtICR7SlNPTi5zdHJpbmdpZnkoYXJyKX1gKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxvdlthcnJbM11dID0gYXJyLnNwbGljZSg1KS5maWx0ZXIoZWwgPT4gZWwgIT09ICcnKTtcbiAgICAgICAgLy8gdG9kbzogZG8gd2UgbmVlZCB0byBpbmRpY2F0ZSB3aGVuIGFuIGVtcHR5IHZhbHVlIGlzIGFsbG93ZWQ/XG4gICAgICB9XG4gICAgfSwgeyBzY29wZTogdGhpcyB9KTtcbiAgfVxuXG4gIGxvYWRMb2NhbGVEYXRhKCkge1xuICAgIGNvbnN0IGxvY2FsZU9iamVjdCA9IFNpZWJlbEFwcC5TX0FwcC5Mb2NhbGVPYmplY3Q7XG4gICAgdGhpcy5sb2NhbGVEYXRhID0ge1xuICAgICAgZGF0ZUZvcm1hdDogbG9jYWxlT2JqZWN0LkdldFByb2ZpbGUodGhpcy5jb25zdHMuZ2V0KCdMT0NBTF9EQVRFX0ZPUk1BVCcpKSxcbiAgICAgIGRhdGVUaW1lRm9ybWF0OiBsb2NhbGVPYmplY3QuR2V0UHJvZmlsZSh0aGlzLmNvbnN0cy5nZXQoJ0xPQ0FMX0RBVEVUSU1FX0ZPUk1BVCcpKSxcbiAgICAgIGZpcnN0RGF5T2ZXZWVrOiBsb2NhbGVPYmplY3QuR2V0V2Vla1N0YXJ0RGF5KCksXG4gICAgfTtcbiAgICB0aGlzLmxvY2FsZURhdGEubW9udGhzID0gW107XG4gICAgdGhpcy5sb2NhbGVEYXRhLnNob3J0TW9udGhzID0gW107XG4gICAgY29uc3QgbW9udGhzID0gbG9jYWxlT2JqZWN0LkdldERhdGEoJ01vbnRoJywgbG9jYWxlT2JqZWN0Lm1fc3BNb250aFBTKTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAxMjsgaSArPSAxKSB7XG4gICAgICB0aGlzLmxvY2FsZURhdGEubW9udGhzLnB1c2gobW9udGhzLkdldFByb3BlcnR5KGAke2l9OjBgKSk7XG4gICAgICB0aGlzLmxvY2FsZURhdGEuc2hvcnRNb250aHMucHVzaChtb250aHMuR2V0UHJvcGVydHkoYCR7aX06MWApKTtcbiAgICB9XG4gICAgLy8gY29uc3Qgd2Vla0RheXMgPSBsb2NhbGVPYmplY3QuR2V0RGF0YSgnRGF5T2ZXZWVrJywgbG9jYWxlT2JqZWN0Lm1fc3BEYXlPZldlZWtQUyk7XG4gIH1cblxuICBzdWJzY3JpYmUoZnVuYykgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXNcbiAgICAvLyBUT0RPIDogYWNjZXB0IGFsc28gY29udGV4dCBmb3IgZnVuY3Rpb24sIG9yIHRoZSBjYWxsZWQgYm91bmQgY29udGV4dCB0byB0aGUgZnVuY3Rpb24/XG4gICAgcmV0dXJuIHRoaXMubm90aWZpY2F0aW9ucy5zdWJzY3JpYmUoZnVuYyk7XG4gIH1cblxuICB1bnN1YnNjcmliZSh0b2tlbikgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZmljYXRpb25zLnVuc3Vic2NyaWJlKHRva2VuKTtcbiAgfVxuXG4gIF9nZXRDb250cm9sKG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5wbS5FeGVjdXRlTWV0aG9kKCdHZXRDb250cm9sJywgbmFtZSk7XG4gIH1cblxuICBfcmV0dXJuQ29udHJvbHMoKSB7XG4gICAgaWYgKHRoaXMuaXNMaXN0QXBwbGV0KSB7XG4gICAgICByZXR1cm4gdGhpcy5wbS5HZXQoJ0dldExpc3RPZkNvbHVtbnMnKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucG0uR2V0KCdHZXRDb250cm9scycpO1xuICB9XG5cbiAgLy8gY2FsbGVkIGludG8gdGhlIGdldENvbnRyb2xzIHRvIHJlZHVjZSB0aGUgYW1vdW50IG9mIHRoZSByZXR1cm5lZCBjb250cm9sc1xuICBfaXNTa2lwQ29udHJvbCh0eXBlKSB7XG4gICAgLy8gaHR0cHM6Ly9kb2NzLm9yYWNsZS5jb20vY2QvRTc0ODkwXzAxL2Jvb2tzL0NvbmZpZ09wZW5VSS9hcHBlbmRpeF9hX2FwaTAwMi5odG1cbiAgICAvLyBtYXliZSB3ZSBuZWVkIHRvIGV4Y2x1ZGUgbW9yZSB0eXBlc1xuICAgIHJldHVybiAodHlwZSA9PT0gdGhpcy5jb25zdHMuZ2V0KCdTV0VfUFNUX0JVVFRPTl9DVFJMJykpXG4gICAgICB8fCAodHlwZSA9PT0gdGhpcy5jb25zdHMuZ2V0KCdTV0VfQ1RSTF9MSU5LJykpXG4gICAgICB8fCAodHlwZSA9PT0gdGhpcy5jb25zdHMuZ2V0KCdTV0VfQ1RSTF9QTEFJTlRFWFQnKSlcbiAgICAgIHx8ICh0eXBlID09PSAnbnVsbCcpOyAvLyBHZXRVaVR5cGUgcmV0dXJucyBzdHJpbmdcbiAgfVxuXG4gIF9pc1JlcXVpcmVkKGlucHV0TmFtZSkge1xuICAgIC8vIHJlcXVpcmVkIGlzIGVtcHR5IGZvciBsaXN0IGFwcGxldHMsIGhvcGVmdWxseSBmb3Igbm93XG4gICAgcmV0dXJuIHRoaXMucmVxdWlyZWQuaW5kZXhPZihpbnB1dE5hbWUpID4gLTE7XG4gIH1cblxuICBzdGF0aWMgR2V0U3RhdGljTE9WKGFycikge1xuICAgIGNvbnN0IHJldCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICByZXQucHVzaChhcnJbaV0ucHJvcEFycmF5KTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIF9zZXRBY3RpdmVDb250cm9sKG5hbWUpIHtcbiAgICBpZiAobmFtZSkge1xuICAgICAgcmV0dXJuIHRoaXMucG0uRXhlY3V0ZU1ldGhvZCgnU2V0QWN0aXZlQ29udHJvbCcsIHRoaXMuX2dldENvbnRyb2wobmFtZSkpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5wbS5FeGVjdXRlTWV0aG9kKCdTZXRBY3RpdmVDb250cm9sJywgbnVsbCk7XG4gIH1cblxuICBfaXNEYXRlVGltZUNvbnRyb2wodWlUeXBlKSB7XG4gICAgcmV0dXJuIHRoaXMuY29uc3RzLmdldCgnU1dFX0NUUkxfREFURV9UWl9QSUNLJykgPT09IHVpVHlwZVxuICAgICAgfHwgdGhpcy5jb25zdHMuZ2V0KCdTV0VfQ1RSTF9EQVRFX1RJTUVfUElDSycpID09PSB1aVR5cGVcbiAgICAgIHx8IHRoaXMuY29uc3RzLmdldCgnU1dFX0NUUkxfREFURV9QSUNLJykgPT09IHVpVHlwZTtcbiAgfVxuXG4gIF9nZXRTaWViZWxWYWx1ZSh2YWx1ZSwgdWlUeXBlLCBkaXNwbGF5Rm9ybWF0KSB7XG4gICAgLy8gdG9kbzogbnVtYmVycywgYW5kIHBob25lcz9cbiAgICBpZiAodGhpcy5jb25zdHMuZ2V0KCdTV0VfQ1RSTF9DSEVDS0JPWCcpID09PSB1aVR5cGUpIHtcbiAgICAgIC8vIGNvbnZlcnQgdHJ1ZS9mYWxzZSA9PiBZL04gLy8gbnVsbCBpcyBub3QgaGFuZGxlZCAodGhlIHNhbWUgYXMgaW4gc3RhbmRhcmQgT3BlbiBVSSlcbiAgICAgIHRoaXMuYm9vbE9iamVjdC5TZXRWYWx1ZSh2YWx1ZSk7XG4gICAgICByZXR1cm4gdGhpcy5ib29sT2JqZWN0LkdldEFzU3RyaW5nKCk7XG4gICAgICAvLyB2YWx1ZSA9IHZhbHVlID8gJ1knIDogJ04nOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgfVxuICAgIGlmICh0aGlzLmNvbnZlcnREYXRlcyAmJiBkaXNwbGF5Rm9ybWF0ICYmIHRoaXMuX2lzRGF0ZVRpbWVDb250cm9sKHVpVHlwZSkpIHtcbiAgICAgIC8vIFRPRE86IGNoZWNrIGlmIGEgdmFsaWQgZGF0ZSBpcyBpbnB1dHRlZFxuICAgICAgY29uc3QgZGF0ZSA9IHZhbHVlLnRvTG9jYWxlU3RyaW5nKCdlbi1VUycsIHsgaG91cjEyOiBmYWxzZSB9KS5zcGxpdCgnLCcpLmpvaW4oJycpO1xuICAgICAgcmV0dXJuIFNpZWJlbEFwcC5TX0FwcC5Mb2NhbGVPYmplY3QuR2V0U3RyaW5nRnJvbURhdGVUaW1lKGRhdGUsICdNL0QvWVlZWSBISDptbTpzcycsIGRpc3BsYXlGb3JtYXQsIGZhbHNlKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgY2FuSW52b2tlTWV0aG9kKG1ldGhvZCkge1xuICAgIHJldHVybiB0aGlzLnBtLkV4ZWN1dGVNZXRob2QoJ0Nhbkludm9rZU1ldGhvZCcsIG1ldGhvZCk7XG4gIH1cblxuICBpbnZva2VNZXRob2QobWV0aG9kKSB7XG4gICAgaWYgKCF0aGlzLmNhbkludm9rZU1ldGhvZChtZXRob2QpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnBtLkV4ZWN1dGVNZXRob2QoJ0ludm9rZU1ldGhvZCcsIG1ldGhvZCk7XG4gIH1cblxuICBnZXRDb250cm9scygpIHtcbiAgICBjb25zdCBjb250cm9scyA9IHt9O1xuICAgIGNvbnN0IGFwcGxldENvbnRyb2xzID0gdGhpcy5fcmV0dXJuQ29udHJvbHMoKTtcbiAgICBjb25zdCBhcnIgPSBPYmplY3Qua2V5cyhhcHBsZXRDb250cm9scyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGNvbnRyb2wgPSBhcHBsZXRDb250cm9sc1thcnJbaV1dO1xuICAgICAgY29uc3QgdWlUeXBlID0gY29udHJvbC5HZXRVSVR5cGUoKTtcbiAgICAgIGNvbnN0IGRpc3BsYXlGb3JtYXQgPSBjb250cm9sLkdldERpc3BsYXlGb3JtYXQoKSB8fCB0aGlzLmdldENvbnRyb2xEaXNwbGF5Rm9ybWF0KHVpVHlwZSk7XG4gICAgICBpZiAodGhpcy5faXNTa2lwQ29udHJvbCh1aVR5cGUpKSB7XG4gICAgICAgIGNvbnRpbnVlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnRpbnVlXG4gICAgICB9XG4gICAgICBjb25zdCBuYW1lID0gY29udHJvbC5HZXROYW1lKCk7XG4gICAgICBjb25zdCBpbnB1dE5hbWUgPSBjb250cm9sLkdldElucHV0TmFtZSgpO1xuICAgICAgY29uc3Qgb2JqID0ge1xuICAgICAgICBuYW1lLFxuICAgICAgICBsYWJlbDogY29udHJvbC5HZXREaXNwbGF5TmFtZSgpLFxuICAgICAgICB1aVR5cGUsXG4gICAgICAgIHJlcXVpcmVkOiB0aGlzLl9pc1JlcXVpcmVkKGlucHV0TmFtZSksXG4gICAgICAgIGJvdW5kZWRQaWNrOiBjb250cm9sLklzQm91bmRlZFBpY2soKSA9PT0gJzEnLFxuICAgICAgICBzdGF0aWNQaWNrOiBjb250cm9sLklzU3RhdGljQm91bmRlZCgpID09PSAnMScsXG4gICAgICAgIC8vIHBpY2tBcHBsZXQ6IGNvbnRyb2wuR2V0UGlja0FwcGxldCgpLCAvLyBjb25mdXNpbmcgYW5kIG5vdCBjb25zaXN0ZW50IC0gc2VlIHdpa2lcbiAgICAgICAgaW5wdXROYW1lLFxuICAgICAgICBpc1Bvc3RDaGFuZ2VzOiBjb250cm9sLklzUG9zdENoYW5nZXMoKSxcbiAgICAgICAgbWF4U2l6ZTogY29udHJvbC5HZXRNYXhTaXplKCksXG4gICAgICAgIC8vIG1heENoYXJzOiBjb250cm9sLkdldE1heENoYXJzKCksIC8vIGl0IGlzIGFsd2F5cyAwXG4gICAgICAgIGZpZWxkTmFtZTogY29udHJvbC5HZXRGaWVsZE5hbWUoKSxcbiAgICAgICAgaXNMaW5rOiB0aGlzLnBtLkV4ZWN1dGVNZXRob2QoJ0Nhbk5hdmlnYXRlJywgbmFtZSksXG4gICAgICAgIHJlYWRvbmx5OiAhdGhpcy5wbS5FeGVjdXRlTWV0aG9kKCdDYW5VcGRhdGUnLCBuYW1lKSxcbiAgICAgICAgZGlzcGxheUZvcm1hdCxcbiAgICAgIH07XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCAncmVhZE9ubHknLCB7XG4gICAgICAgIGdldDogKCkgPT4ge1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICAgICAgY29uc29sZS53YXJuKCdbTjE5XVRoZSByZWFkT25seSBwcm9wZXJ0eSB3aWxsIGJlIHJlbW92ZWQgc29vbjsgdXNlIHJlYWRvbmx5IGluc3RlYWQgb2YgaXQuJyk7XG4gICAgICAgICAgcmV0dXJuIG9iai5yZWFkb25seTtcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgICAgLy8gYWRkIHZhbHVlcyB0byBiZSBkaXNwbGF5ZWQgaW4gdGhlIHN0YXRpYyBwaWNrIGxpc3RcbiAgICAgIGlmIChvYmouc3RhdGljUGljaykge1xuICAgICAgICBvYmouc3RhdGljTE9WID0gTjE5YmFzZUFwcGxldC5HZXRTdGF0aWNMT1YoY29udHJvbC5HZXRSYWRpb0dyb3VwUHJvcFNldCgpLmNoaWxkQXJyYXkpO1xuICAgICAgICBvYmoubG92cyA9IG9iai5zdGF0aWNMT1YucmVkdWNlKChhY2MsIGVsKSA9PiB7IC8vIG5vcm1hbGl6ZWRcbiAgICAgICAgICBhY2MucHVzaCh7IGxpYzogZWwuRmllbGRWYWx1ZSwgdmFsOiBlbC5EaXNwbGF5TmFtZSB9KTtcbiAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICB9LCBbXSk7XG4gICAgICB9XG4gICAgICBjb250cm9sc1tuYW1lXSA9IG9iajtcbiAgICB9XG4gICAgcmV0dXJuIGNvbnRyb2xzO1xuICB9XG5cbiAgZ2V0UmVjb3JkU2V0KGFkZFJlY29yZEluZGV4KSB7XG4gICAgLy8gVE9ETzogRE8gV0UgTkVFRCBUTyBETyBDT05WRVJTSU9OP1xuICAgIGlmIChhZGRSZWNvcmRJbmRleCkge1xuICAgICAgcmV0dXJuIHRoaXMucG0uR2V0KCdHZXRSZWNvcmRTZXQnKS5tYXAoKGVsLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCByZXQgPSBPYmplY3QuYXNzaWduKHt9LCBlbCk7XG4gICAgICAgIHJldC5faW5keCA9IGluZGV4O1xuICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnBtLkdldCgnR2V0UmVjb3JkU2V0Jyk7XG4gIH1cblxuICBnZXRSYXdSZWNvcmRTZXQoYWRkUmVjb3JkSW5kZXgpIHtcbiAgICAvLyBUT0RPOiBETyBXRSBORUVEIFRPIERPIENPTlZFUlNJT04/XG4gICAgaWYgKGFkZFJlY29yZEluZGV4KSB7XG4gICAgICByZXR1cm4gdGhpcy5wbS5HZXQoJ0dldFJhd1JlY29yZFNldCcpLm1hcCgoZWwsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHJldCA9IE9iamVjdC5hc3NpZ24oe30sIGVsKTtcbiAgICAgICAgcmV0Ll9pbmR4ID0gaW5kZXg7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucG0uR2V0KCdHZXRSYXdSZWNvcmRTZXQnKTtcbiAgfVxuXG4gIGdldFJvd0xpc3RSb3dDb3VudCgpIHtcbiAgICAvLyBob3cgbXVjaCBhcHBsZXQgY2FuIGRpc3BsYXkgKHNwZWNpZmllZCBpbiBTaWViZWwgVG9vbHMpIC0gMTAvMjBcbiAgICByZXR1cm4gdGhpcy5wbS5HZXQoJ0dldFJvd0xpc3RSb3dDb3VudCcpO1xuICB9XG5cbiAgZ2V0TnVtUm93cygpIHtcbiAgICAvLyBjdXJyZW50bHkgZmV0Y2hlZCBmcm9tIHNlcnZlcj9cbiAgICByZXR1cm4gdGhpcy5wbS5HZXQoJ0dldE51bVJvd3MnKTtcbiAgfVxuXG4gIGdldFNlbGVjdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5wbS5HZXQoJ0dldFNlbGVjdGlvbicpO1xuICB9XG5cbiAgX25hdmlnYXRlKG1ldGhvZCkge1xuICAgIGlmICghdGhpcy5jYW5JbnZva2VNZXRob2QobWV0aG9kKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCByZXQgPSB0aGlzLnBtLkV4ZWN1dGVNZXRob2QoJ0ludm9rZU1ldGhvZCcsIG1ldGhvZCk7XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIG5leHRSZWNvcmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hdmlnYXRlKHRoaXMuaXNMaXN0QXBwbGV0ID8gJ0dvdG9OZXh0JyA6ICdHb3RvTmV4dFNldCcpO1xuICB9XG5cbiAgbmV4dFJlY29yZFNldCgpIHtcbiAgICBpZiAoIXRoaXMuaXNMaXN0QXBwbGV0KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9uYXZpZ2F0ZSgnR290b05leHRTZXQnKTtcbiAgfVxuXG4gIHBvc2l0aW9uT25Sb3coaW5kZXgpIHtcbiAgICBpZiAodGhpcy5pc0xpc3RBcHBsZXQpIHtcbiAgICAgIGlmICghdGhpcy5wbS5FeGVjdXRlTWV0aG9kKCdDYW5JbnZva2VNZXRob2QnLCAnUG9zaXRpb25PblJvdycpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChpbmRleCA8IDApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgLy8gc2VlbXMgdGhpcyBjaGVjayBpcyByZWR1bmRhbnRcbiAgICAgIC8vIGlmICh0aGlzLmdldE51bVJvd3MoKSA8IGluZGV4ICsgMSkgeyAvL1xuICAgICAgLy8gICByZXR1cm4gZmFsc2U7XG4gICAgICAvLyB9XG4gICAgICBpZiAodGhpcy5nZXRSb3dMaXN0Um93Q291bnQoKSA8IGluZGV4ICsgMSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7aW5kZXh9IGlzIGVxdWFsL2hpZ2hlciB0aGFuIGFtb3VudCBvZiByZWNvcmRzIGluIHRoZSBhcHBsZXQgJHt0aGlzLmdldFJvd0xpc3RSb3dDb3VudCgpfWApO1xuICAgICAgfVxuICAgICAgLy8gdG9kbyA6IGlmIHdlIGdvdCB0byB0aGlzIHBvaW50XG4gICAgICAvLyAgc2hvdWxkIHdlIGNoZWNrIEdldEFjdGl2ZUNvbnRyb2wgKGFwcGxldC5wcm90b3R5cGUuSW52b2tlTWV0aG9kKVxuICAgICAgLy8gIGFuZCBudWxsaWZ5IGl0IGlmIGFjdGl2ZT9cbiAgICAgIHJldHVybiB0aGlzLnBtLkV4ZWN1dGVNZXRob2QoJ0hhbmRsZVJvd1NlbGVjdCcsIGluZGV4KTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHJldlJlY29yZCgpIHtcbiAgICBpZiAodGhpcy5pc0xpc3RBcHBsZXQpIHtcbiAgICAgIHJldHVybiB0aGlzLnBvc2l0aW9uT25Sb3codGhpcy5wbS5HZXQoJ0dldFNlbGVjdGlvbicpIC0gMSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9uYXZpZ2F0ZSgnR290b1ByZXZpb3VzU2V0Jyk7XG4gIH1cblxuICBwcmV2UmVjb3JkU2V0KCkge1xuICAgIGlmICghdGhpcy5pc0xpc3RBcHBsZXQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX25hdmlnYXRlKCdHb3RvUHJldmlvdXNTZXQnKTtcbiAgfVxuXG4gIG5ld1JlY29yZChjYikge1xuICAgIC8vIHRvZG86IHNob3VsZCBpdCBiZSB0aGUgc2FtZSBhcyBXcml0ZVJlY29yZD9cbiAgICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB0aGlzLl9uZXdSZWNvcmQocmVzb2x2ZSkpO1xuICAgIHJldHVybiB0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicgPyBwcm9taXNlLnRoZW4oY2IpIDogcHJvbWlzZTtcbiAgfVxuXG4gIF9uZXdSZWNvcmQoY2IpIHtcbiAgICByZXR1cm4gdGhpcy5wbS5FeGVjdXRlTWV0aG9kKCdJbnZva2VNZXRob2QnLCAnTmV3UmVjb3JkJywgbnVsbCwge1xuICAgICAgYXN5bmM6IHRydWUsXG4gICAgICBjYixcbiAgICB9KTtcbiAgfVxuXG4gIG5ld1JlY29yZFN5bmMoKSB7XG4gICAgcmV0dXJuIHRoaXMucG0uRXhlY3V0ZU1ldGhvZCgnSW52b2tlTWV0aG9kJywgJ05ld1JlY29yZCcpO1xuICB9XG5cbiAgd3JpdGVSZWNvcmQoY2IsIGNiZXJyKSB7XG4gICAgbGV0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB0aGlzLl93cml0ZVJlY29yZCgoLi4uYXJncykgPT4ge1xuICAgICAgLy8gZG8gd2UgYWx3YXlzIGhhdmUgdGhyZWUgaW5wdXQgYXJndW1lbnRzLCBhbmQgdGhlIHRoaXJkIGFyZ3VtZW50IGlzXG4gICAgICBpZiAoYXJnc1syXS5HZXRQcm9wZXJ0eSgnU3RhdHVzJykgPT09ICdDb21wbGV0ZWQnKSB7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlamVjdCgpO1xuICAgICAgfVxuICAgIH0pKTtcbiAgICBwcm9taXNlID0gdHlwZW9mIGNiID09PSAnZnVuY3Rpb24nID8gcHJvbWlzZS50aGVuKGNiKSA6IHByb21pc2U7XG4gICAgcHJvbWlzZSA9IHR5cGVvZiBjYmVyciA9PT0gJ2Z1bmN0aW9uJyA/IHByb21pc2UuY2F0Y2goY2JlcnIpIDogcHJvbWlzZTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfVxuXG4gIF93cml0ZVJlY29yZChjYikge1xuICAgIHJldHVybiB0aGlzLnBtLkV4ZWN1dGVNZXRob2QoJ0ludm9rZU1ldGhvZCcsICdXcml0ZVJlY29yZCcsIG51bGwsIHtcbiAgICAgIGFzeW5jOiB0cnVlLFxuICAgICAgc2VsZmJ1c3k6IHRydWUsXG4gICAgICBjYixcbiAgICB9KTtcbiAgfVxuXG4gIHdyaXRlUmVjb3JkU3luYygpIHtcbiAgICByZXR1cm4gdGhpcy5wbS5FeGVjdXRlTWV0aG9kKCdJbnZva2VNZXRob2QnLCAnV3JpdGVSZWNvcmQnKTtcbiAgfVxuXG4gIGRlbGV0ZVJlY29yZFN5bmMoKSB7XG4gICAgcmV0dXJuIHRoaXMucG0uRXhlY3V0ZU1ldGhvZCgnSW52b2tlTWV0aG9kJywgJ0RlbGV0ZVJlY29yZCcpO1xuICB9XG5cbiAgdW5kb1JlY29yZFN5bmMoKSB7XG4gICAgcmV0dXJuIHRoaXMucG0uRXhlY3V0ZU1ldGhvZCgnSW52b2tlTWV0aG9kJywgJ1VuZG9SZWNvcmQnKTtcbiAgfVxuXG4gIHNldENvbnRyb2xWYWx1ZShuYW1lLCB2YWx1ZSkge1xuICAgIC8vIFRPRE86IElmIHZhbHVlIGlzIG51bGwsIG5vdGhpbmcgaGFwcGVucywgc2hvdWxkIHdlIGNvbnZlcnQgbnVsbCB0byAnJz9cbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5fZ2V0Q29udHJvbChuYW1lKTtcbiAgICBpZiAoIWNvbnRyb2wpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IGZpbmQgYSBjb250cm9sIGJ5IG5hbWUgJHtuYW1lfSB0byBzZXQgJHt2YWx1ZX0uYCk7XG4gICAgfVxuICAgIGNvbnN0IHVpVHlwZSA9IGNvbnRyb2wuR2V0VUlUeXBlKCk7XG4gICAgY29uc3QgZGlzcGxheUZvcm1hdCA9IGNvbnRyb2wuR2V0RGlzcGxheUZvcm1hdCgpIHx8IHRoaXMuZ2V0Q29udHJvbERpc3BsYXlGb3JtYXQodWlUeXBlKTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB2YWx1ZSA9IHRoaXMuX2dldFNpZWJlbFZhbHVlKHZhbHVlLCB1aVR5cGUsIGRpc3BsYXlGb3JtYXQpO1xuICAgIC8vIFRPRE86IHNob3VsZCB3ZSB1c2UgU2V0Q2VsbFZhbHVlIGZvciBsaXN0IGFwcGxldHM/XG4gICAgY29uc3QgcmV0ID0gdGhpcy5fc2V0Q29udHJvbFZhbHVlSW50ZXJuYWwoY29udHJvbCwgdmFsdWUpO1xuICAgIGlmICghcmV0KSB7XG4gICAgICBjb25zb2xlLmxvZyhgVmFsdWUgJHt2YWx1ZX0gd2FzIG5vdCBzZXQgZm9yICR7Y29udHJvbC5HZXROYW1lKCl9YCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgX3NldENvbnRyb2xWYWx1ZUludGVybmFsKGNvbnRyb2wsIHZhbHVlKSB7XG4gICAgdGhpcy5wbS5PbkNvbnRyb2xFdmVudCh0aGlzLmNvbnN0cy5nZXQoJ1BIWUVWRU5UX0NPTlRST0xfRk9DVVMnKSwgY29udHJvbCk7XG4gICAgcmV0dXJuIHRoaXMucG0uT25Db250cm9sRXZlbnQodGhpcy5jb25zdHMuZ2V0KCdQSFlFVkVOVF9DT05UUk9MX0JMVVInKSwgY29udHJvbCwgdmFsdWUpO1xuICB9XG5cbiAgX3ZhbGlkYXRlUGlja0NvbnRyb2woY29udHJvbCwgaXNTdGF0aWMpIHtcbiAgICAvLyBQb3NzaWJsZSByZXN1bHRzOlxuICAgIC8vIG5vIHBpY2tcbiAgICAvLyBzdGF0aWMgcGlja1xuICAgIC8vIGR5bmFtaWMgcGlja1xuICAgIC8vIHBpY2tcbiAgICAvLyBtdmdcbiAgICAvLyA/XG5cbiAgICBjb25zdCBpc1N0YXRpY1BpY2sgPSAnMScgPT09IGNvbnRyb2wuSXNTdGF0aWNCb3VuZGVkKCk7XG4gICAgY29uc3QgdWlUeXBlID0gY29udHJvbC5HZXRVSVR5cGUoKTtcblxuICAgIGlmIChpc1N0YXRpYykgeyAvLyBjYWxsZWQgZ2V0U3RhdGljTE9WXG4gICAgICBpZiAoIWlzU3RhdGljUGljaykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICBjb25zb2xlLndhcm4oYFtOMTldVGhlIGdldFN0YXRpY0xPViBjYWxsZWQgZm9yIG5vdCBzdGF0aWMgY29udHJvbCAtICR7dWlUeXBlfS4gVXNlIGdldER5bmFtaWNMT1Ygb3IgcGljay9tdmdgKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgeyAvLyBjYWxsZWQgZ2V0RHluYW1pY0xPVlxuICAgICAgaWYgKGlzU3RhdGljUGljaykge1xuICAgICAgICBjb25zb2xlLndhcm4oJ1tOMTldVGhlIGdldER5bmFtaWNMT1YgY2FsbGVkIGZvciBzdGF0aWMgY29udHJvbC4nKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgICB9XG4gICAgICBpZiAodGhpcy5jb25zdHMuZ2V0KCdTV0VfQ1RSTF9DT01CT0JPWCcpICE9PSB1aVR5cGUpIHsgLy8gdGhlIGNvbnRyb2wgaXMgbm90IFwiSkNvbWJvQm94XCJcbiAgICAgICAgc3dpdGNoICh1aVR5cGUpIHtcbiAgICAgICAgICBjYXNlIHRoaXMuY29uc3RzLmdldCgnU1dFX0NUUkxfUElDSycpOiAvLyBQaWNrXG4gICAgICAgICAgY2FzZSB0aGlzLmNvbnN0cy5nZXQoJ1NXRV9DVFJMX01WRycpOiAvLyBNVkdcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYFtOMTldWW91IG5lZWQgdG8gdXNlIHRoZSBwb3B1cHMgaW5zdGVhZCBvZiBnZXREeW5hbWljTE9WIC0gJHt1aVR5cGV9LmApO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYFtOMTldUHJvYmFibHkgZ2V0RHluYW1pY0xPViBpcyBub3QgZ29pbmcgdG8gd29yayBmb3IgdGhpcyBjb250cm9sIC0gJHt1aVR5cGV9LmApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0RHluYW1pY0xPVihjb250cm9sTmFtZSkge1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLl9nZXRDb250cm9sKGNvbnRyb2xOYW1lKTtcbiAgICB0aGlzLl92YWxpZGF0ZVBpY2tDb250cm9sKGNvbnRyb2wsIGZhbHNlKTtcbiAgICBjb25zdCBjb250cm9sSW5wdXROYW1lID0gY29udHJvbC5HZXRJbnB1dE5hbWUoKTtcbiAgICB0aGlzLmxvdltjb250cm9sSW5wdXROYW1lXSA9IHt9O1xuICAgIGNvbnN0IHBzID0gU2llYmVsQXBwLlNfQXBwLk5ld1Byb3BlcnR5U2V0KCk7XG4gICAgcHMuU2V0UHJvcGVydHkoJ1NXRUZpZWxkJywgY29udHJvbElucHV0TmFtZSk7XG4gICAgcHMuU2V0UHJvcGVydHkoJ1NXRUpJJywgZmFsc2UpO1xuICAgIHRoaXMuX3NldEFjdGl2ZUNvbnRyb2wobnVsbCk7IC8vIHRvIHByZXZlbnQgVXBkYXRlUGlja1xuICAgIHRoaXMucG0uRXhlY3V0ZU1ldGhvZCgnSW52b2tlTWV0aG9kJywgJ0dldFF1aWNrUGlja0luZm8nLCBwcyk7XG4gICAgcmV0dXJuIHRoaXMubG92W2NvbnRyb2xJbnB1dE5hbWVdO1xuICB9XG5cbiAgZ2V0U3RhdGljTE9WKGNvbnRyb2xOYW1lKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuX2dldENvbnRyb2woY29udHJvbE5hbWUpO1xuICAgIHRoaXMuX3ZhbGlkYXRlUGlja0NvbnRyb2woY29udHJvbCwgdHJ1ZSk7XG4gICAgY29uc3QgcmV0ID0gW107XG4gICAgY29uc3QgYXJyID0gTjE5YmFzZUFwcGxldC5HZXRTdGF0aWNMT1YoY29udHJvbC5HZXRSYWRpb0dyb3VwUHJvcFNldCgpLmNoaWxkQXJyYXkpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICByZXQucHVzaChhcnJbaV0uRGlzcGxheU5hbWUpO1xuICAgIH1cbiAgICByZXR1cm4gcmV0LnNvcnQoKTtcbiAgfVxuXG4gIF9nZXRKU1ZhbHVlKHZhbHVlLCB1aVR5cGUsIGRpc3BsYXlGb3JtYXQpIHtcbiAgICAvLyB0b2RvOiB3aGF0IGFib3V0IGRhdGV0aW1lP1xuICAgIGlmICh0aGlzLmNvbnN0cy5nZXQoJ1NXRV9DVFJMX0NIRUNLQk9YJykgPT09IHVpVHlwZSkge1xuICAgICAgLy8gY29udmVydCBZL04vbnVsbCAtPiB0cnVlL2ZhbHNlIC8vIHdoYXQgYWJvdXQgbnVsbFxuICAgICAgdGhpcy5ib29sT2JqZWN0LlNldEFzU3RyaW5nKHZhbHVlKTtcbiAgICAgIHJldHVybiB0aGlzLmJvb2xPYmplY3QuR2V0VmFsdWUoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuY29udmVydERhdGVzICYmIGRpc3BsYXlGb3JtYXQgJiYgdGhpcy5faXNEYXRlVGltZUNvbnRyb2wodWlUeXBlKSkge1xuICAgICAgaWYgKHZhbHVlID09PSAnJykge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIGxldCBJU08gPSAnJztcbiAgICAgIGlmICh0aGlzLmlzTGlzdEFwcGxldCkge1xuICAgICAgICBJU08gPSB0aGlzLnV0aWxzLlRvSVNPRm9ybWF0KHZhbHVlLCB0aGlzLmNvbnN0cy5nZXQoJ1NXRV9DVFJMX0RBVEVfUElDSycpICE9PSB1aVR5cGUsIGRpc3BsYXlGb3JtYXQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgSVNPID0gdGhpcy51dGlscy5HZXRJU09EYXRlVGltZSh2YWx1ZSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgICBpZiAoSVNPID09PSAnJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYElTTyB2YWx1ZSBpcyBlbXB0eSBhZnRlciBjb252ZXJ0aW5nICR7dmFsdWV9YCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3IERhdGUoSVNPKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgZ2V0Q3VycmVudFJlY29yZChyYXcpIHtcbiAgICAvLyB0b2RvOiBkbyB3ZSBuZWVkIHRvIGRvIHRoZSBjb252ZXJzaW9uXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmdldFNlbGVjdGlvbigpO1xuICAgIC8vIHRvZG86IGNoZWNrIGlmIHRoZXJlIGlzIGEgcmVjb3JkXG4gICAgLy8gdG9kbzogbWFrZSBhIGNvcHkgb2YgcmV0dXJuZWQgb2JqZWN0ICh0byBhdm9pZCB0aGUgYWNjaWRlbnRhbCBtb2RpZmljYXRpb24gb2YgdGhlIHJlY29yZHNldClcbiAgICBpZiAocmF3KSB7XG4gICAgICByZXR1cm4gdGhpcy5wbS5HZXQoJ0dldFJhd1JlY29yZFNldCcpW2luZGV4XTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucG0uR2V0KCdHZXRSZWNvcmRTZXQnKVtpbmRleF07XG4gIH1cblxuICBjYWxjdWxhdGVDdXJyZW50UmVjb3JkU3RhdGUoKSB7XG4gICAgLy8gdG9kbzogZG8gd2UgbmVlZCB0byBkZWxldGUgcGVuZGluZ1xuICAgIC8vIDAgLSBObyByZWNvcmRzIGRpc3BsYXllZFxuICAgIC8vIDEgLSBSZWNvcmQgaXMgYmVpbmcgY3JlYXRlZFxuICAgIC8vIDIgLSBSZWNvcmQgaXMgYmVpbmcgZWRpdGVkXG4gICAgLy8gMyAtIElzIGluIHF1ZXJ5IG1vZGVcbiAgICAvLyA0IC0gUmVjb3JkIGlzIGRpc3BsYXllZCxcbiAgICAvLyA1IC0gUmVjb3JkIGlzIHJlYWQtb25seVxuXG4gICAgY29uc3QgYmMgPSB0aGlzLnBtLkdldCgnR2V0QnVzQ29tcCcpO1xuXG4gICAgaWYgKHRoaXMucG0uR2V0KCdJc0luUXVlcnlNb2RlJykpIHtcbiAgICAgIC8vIGlmIG5vIHJlY29yZHMgYW5kIHRoZSBlbnRlcmVkIHRoZSBxdWVyeSBtb2RlLFxuICAgICAgLy8gc2VsZWN0aW9uIGlzIC0xLCB0aGVyZWZvcmUgd2UgbmVlZCB0byBjaGVjayBxdWVyeSBtb2RlIGZpcnN0XG4gICAgICByZXR1cm4gMztcbiAgICB9XG4gICAgaWYgKHRoaXMuZ2V0U2VsZWN0aW9uKCkgPCAwKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgaWYgKGJjLklzSW5zZXJ0UGVuZGluZygpKSB7IC8vIHNlZW1zIGluc2VydFBlbmRpbmcgZ2l2ZXMgbW9yZSBjb3JyZWN0IHZhbHVlXG4gICAgICByZXR1cm4gMTtcbiAgICB9XG4gICAgaWYgKGJjLklzQ29tbWl0UGVuZGluZygpKSB7XG4gICAgICByZXR1cm4gMjtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmNhbkludm9rZU1ldGhvZCgnV3JpdGVSZWNvcmQnKSkge1xuICAgICAgLy8gb3IgbWF5YmUgYmV0dGVyIHRvIHVzZSB0aGUgY2FuVXBkYXRlIHByb3BlcnR5IG9mIHRoZSBiY1xuICAgICAgcmV0dXJuIDU7XG4gICAgfVxuXG4gICAgcmV0dXJuIDQ7IC8vIHRoaXMgaXMgYSBkZWZhdWx0IGZhbGxiYWNrO1xuICB9XG5cbiAgX2dldE1ldGhvZHMoKSB7XG4gICAgY29uc3QgbWV0aG9kcyA9IHt9O1xuICAgIGNvbnN0IGFwcGxldENvbnRyb2xzID0gdGhpcy5wbS5HZXQoJ0dldENvbnRyb2xzJyk7IC8vIGV2ZW4gZm8gbGlzdCBhcHBsZXRcbiAgICBjb25zdCBhcnIgPSBPYmplY3Qua2V5cyhhcHBsZXRDb250cm9scyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGNvbnRyb2xNZXRob2QgPSBhcHBsZXRDb250cm9sc1thcnJbaV1dLkdldE1ldGhvZE5hbWUoKTtcbiAgICAgIGlmICh0eXBlb2YgY29udHJvbE1ldGhvZCAhPT0gJ3VuZGVmaW5lZCcgJiYgY29udHJvbE1ldGhvZCAhPT0gJycpIHtcbiAgICAgICAgbWV0aG9kc1tjb250cm9sTWV0aG9kXSA9IHt9O1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWV0aG9kcztcbiAgfVxuXG4gIGdldENvbnRyb2xEaXNwbGF5Rm9ybWF0KHVpVHlwZSkge1xuICAgIHN3aXRjaCAodWlUeXBlKSB7XG4gICAgICBjYXNlIHRoaXMuY29uc3RzLmdldCgnU1dFX0NUUkxfREFURV9UWl9QSUNLJyk6XG4gICAgICBjYXNlIHRoaXMuY29uc3RzLmdldCgnU1dFX0NUUkxfREFURV9USU1FX1BJQ0snKTpcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxlRGF0YS5kYXRlVGltZUZvcm1hdDtcbiAgICAgIGNhc2UgdGhpcy5jb25zdHMuZ2V0KCdTV0VfQ1RSTF9EQVRFX1BJQ0snKTpcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxlRGF0YS5kYXRlRm9ybWF0O1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgfVxuXG4gIGdldEN1cnJlbnRSZWNvcmRNb2RlbChfY29udHJvbHMsIF9tZXRob2RzKSB7XG4gICAgaWYgKCFfY29udHJvbHMpIHtcbiAgICAgIF9jb250cm9scyA9IHRoaXMuZ2V0Q29udHJvbHMoKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIH1cbiAgICBpZiAoIV9tZXRob2RzKSB7XG4gICAgICBfbWV0aG9kcyA9IHRoaXMuX2dldE1ldGhvZHMoKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIH1cbiAgICBfY29udHJvbHMuc3RhdGUgPSB0aGlzLmNhbGN1bGF0ZUN1cnJlbnRSZWNvcmRTdGF0ZSgpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgX2NvbnRyb2xzLmlkID0gJyc7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBsZXQgb2JqID0ge307XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmdldFNlbGVjdGlvbigpO1xuICAgIGlmIChpbmRleCA+IC0xICYmIF9jb250cm9scy5zdGF0ZSAhPT0gMykgeyAvLyBhZGRlZCBfY29udHJvbHMuc3RhdGUgIT09IDM7IHdlIGRvbid0IG5lZWQgaWQgaW4gcXVlcnkgbW9kZVxuICAgICAgb2JqID0gdGhpcy5nZXRSZWNvcmRTZXQoKVtpbmRleF07XG4gICAgICBfY29udHJvbHMuaWQgPSB0aGlzLmdldFJhd1JlY29yZFNldCgpW2luZGV4XS5JZDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIH1cbiAgICBsZXQgYXJyID0gT2JqZWN0LmtleXMoX2NvbnRyb2xzKTtcbiAgICBjb25zdCBhcHBsZXRDb250cm9scyA9IHRoaXMuX3JldHVybkNvbnRyb2xzKCk7XG4gICAgLy8gcG9wdWxhdGUgY29udHJvbHNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgY29udHJvbCA9IGFwcGxldENvbnRyb2xzW2FycltpXV07XG4gICAgICBpZiAodHlwZW9mIGNvbnRyb2wgIT09ICd1bmRlZmluZWQnKSB7IC8vIGp1c3QgaWYgc29tZWJvZHkgc2VuZHMgaW5jb3JyZWN0IG5hbWUgb2YgdGhlIGNvbnRyb2xcbiAgICAgICAgY29uc3QgY29udHJvbE5hbWUgPSBjb250cm9sLkdldE5hbWUoKTtcbiAgICAgICAgY29uc3QgZmllbGROYW1lID0gY29udHJvbC5HZXRGaWVsZE5hbWUoKTtcbiAgICAgICAgY29uc3QgdWlUeXBlID0gY29udHJvbC5HZXRVSVR5cGUoKTtcbiAgICAgICAgY29uc3QgZGlzcGxheUZvcm1hdCA9IGNvbnRyb2wuR2V0RGlzcGxheUZvcm1hdCgpIHx8IHRoaXMuZ2V0Q29udHJvbERpc3BsYXlGb3JtYXQodWlUeXBlKTtcbiAgICAgICAgaWYgKF9jb250cm9scy5pZCkge1xuICAgICAgICAgIF9jb250cm9sc1thcnJbaV1dID0geyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICAgICAgICB2YWx1ZTogdGhpcy5fZ2V0SlNWYWx1ZShvYmpbZmllbGROYW1lXSwgY29udHJvbC5HZXRVSVR5cGUoKSwgZGlzcGxheUZvcm1hdCksXG4gICAgICAgICAgICB1aVR5cGUsXG4gICAgICAgICAgICByZWFkb25seTogIXRoaXMucG0uRXhlY3V0ZU1ldGhvZCgnQ2FuVXBkYXRlJywgY29udHJvbE5hbWUpLFxuICAgICAgICAgICAgaXNMaW5rOiB0aGlzLnBtLkV4ZWN1dGVNZXRob2QoJ0Nhbk5hdmlnYXRlJywgY29udHJvbE5hbWUpLFxuICAgICAgICAgICAgbGFiZWw6IGNvbnRyb2wuR2V0RGlzcGxheU5hbWUoKSxcbiAgICAgICAgICAgIGlzUG9zdENoYW5nZXM6IGNvbnRyb2wuSXNQb3N0Q2hhbmdlcygpLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRoaXMuX2lzUmVxdWlyZWQoY29udHJvbC5HZXRJbnB1dE5hbWUoKSksXG4gICAgICAgICAgICBtYXhTaXplOiBjb250cm9sLkdldE1heFNpemUoKSxcbiAgICAgICAgICAgIGZpZWxkTmFtZSxcbiAgICAgICAgICAgIGRpc3BsYXlGb3JtYXQsXG4gICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHsgLy8gbm8gcmVjb3JkIGRpc3BsYXllZFxuICAgICAgICAgIF9jb250cm9sc1thcnJbaV1dID0geyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICAgICAgICB2YWx1ZTogJycsXG4gICAgICAgICAgICB1aVR5cGUsXG4gICAgICAgICAgICByZWFkb25seTogdHJ1ZSxcbiAgICAgICAgICAgIGlzTGluazogZmFsc2UsXG4gICAgICAgICAgICBsYWJlbDogY29udHJvbC5HZXREaXNwbGF5TmFtZSgpLFxuICAgICAgICAgICAgaXNQb3N0Q2hhbmdlczogY29udHJvbC5Jc1Bvc3RDaGFuZ2VzKCksXG4gICAgICAgICAgICByZXF1aXJlZDogdGhpcy5faXNSZXF1aXJlZChjb250cm9sLkdldElucHV0TmFtZSgpKSxcbiAgICAgICAgICAgIG1heFNpemU6IGNvbnRyb2wuR2V0TWF4U2l6ZSgpLFxuICAgICAgICAgICAgZmllbGROYW1lLFxuICAgICAgICAgICAgZGlzcGxheUZvcm1hdCxcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC8vIHBvcHVsYXRlIG1ldGhvZHNcbiAgICBpZiAoX21ldGhvZHMpIHtcbiAgICAgIGFyciA9IE9iamVjdC5rZXlzKF9tZXRob2RzKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIF9tZXRob2RzW2FycltpXV0gPSB0aGlzLmNhbkludm9rZU1ldGhvZChhcnJbaV0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICB9XG4gICAgfVxuICAgIC8vIHJldHVybiB0cnVlO1xuICAgIHJldHVybiB7XG4gICAgICBjb250cm9sczogX2NvbnRyb2xzLFxuICAgICAgbWV0aG9kczogX21ldGhvZHMsXG4gICAgfTtcbiAgfVxuXG4gIF9maW5kQ29udHJvbFRvRW50ZXJTZWFyY2hFeHByKCkge1xuICAgIGNvbnN0IGFwcGxldENvbnRyb2xzID0gdGhpcy5fcmV0dXJuQ29udHJvbHMoKTtcbiAgICBjb25zdCBhcnIgPSBPYmplY3Qua2V5cyhhcHBsZXRDb250cm9scyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGNvbnRyb2wgPSBhcHBsZXRDb250cm9sc1thcnJbaV1dO1xuICAgICAgY29uc3QgY29udHJvbFVpVHlwZSA9IGNvbnRyb2wuR2V0VUlUeXBlKCk7XG4gICAgICBpZiAoIXRoaXMuX2lzU2tpcENvbnRyb2woY29udHJvbFVpVHlwZSkpIHtcbiAgICAgICAgLy8gc2tpcHBpbmcgYWxzbyBKQ2hlY2tib3hcbiAgICAgICAgLy8gdG9kbzogY2hlY2sgZG8gd2UgbmVlZCB0byBza2lwIGFsc28gZGF0ZT9cbiAgICAgICAgaWYgKGNvbnRyb2xVaVR5cGUgIT09IHRoaXMuY29uc3RzLmdldCgnU1dFX0NUUkxfQ0hFQ0tCT1gnKSkge1xuICAgICAgICAgIHJldHVybiBjb250cm9sO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcignY2Fubm90IGZpbmQgYSBjb250cm9sIGZvciBxdWVyeScpO1xuICB9XG5cbiAgX25ld1F1ZXJ5KCkge1xuICAgIHJldHVybiB0aGlzLnBtLkV4ZWN1dGVNZXRob2QoJ0ludm9rZU1ldGhvZCcsICdOZXdRdWVyeScpO1xuICB9XG5cbiAgcXVlcnlCeVNlYXJjaEV4cHJTeW5jKGV4cHIpIHtcbiAgICB0aGlzLl9uZXdRdWVyeSgpOyAvLyA/XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuX2ZpbmRDb250cm9sVG9FbnRlclNlYXJjaEV4cHIoKTtcbiAgICB0aGlzLl9zZXRDb250cm9sVmFsdWVJbnRlcm5hbChjb250cm9sLCBleHByKTtcbiAgICB0aGlzLnBtLkV4ZWN1dGVNZXRob2QoJ0ludm9rZU1ldGhvZCcsICdFeGVjdXRlUXVlcnknKTtcbiAgICByZXR1cm4gdGhpcy5nZXRSZWNvcmRTZXQoKS5sZW5ndGg7XG4gIH1cblxuICBxdWVyeUJ5SWRTeW5jKHJvd0lkKSB7XG4gICAgbGV0IGV4cHI7XG4gICAgaWYgKEFycmF5ID09PSByb3dJZC5jb25zdHJ1Y3Rvcikge1xuICAgICAgZXhwciA9IHJvd0lkLm1hcChlbCA9PiBgSWQ9XCIke2VsfVwiYCkuam9pbignIE9SICcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBleHByID0gYElkPVwiJHtyb3dJZH1cImA7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnF1ZXJ5QnlTZWFyY2hFeHByU3luYyhleHByKTtcbiAgfVxuXG4gIHF1ZXJ5QnlJZChyb3dJZCwgY2IpIHtcbiAgICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB0aGlzLl9xdWVyeUJ5SWQocm93SWQsIHJlc29sdmUpKTtcbiAgICBjb25zdCByZXQgPSBwcm9taXNlLnRoZW4oKCkgPT4gdGhpcy5nZXRSZWNvcmRTZXQoKS5sZW5ndGgpO1xuICAgIHJldHVybiB0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicgPyByZXQudGhlbihjYikgOiByZXQ7XG4gIH1cblxuICBfcXVlcnlCeUlkKHJvd0lkLCBjYikge1xuICAgIHRoaXMuX25ld1F1ZXJ5KCk7IC8vID9cblxuICAgIGNvbnN0IGFpID0ge1xuICAgICAgc2NvcGU6IHRoaXMsXG4gICAgICBhc3luYzogdHJ1ZSxcbiAgICAgIHNlbGZidXN5OiB0cnVlLFxuICAgIH07XG4gICAgaWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYWkuY2IgPSBjYjtcbiAgICB9XG5cbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5fZmluZENvbnRyb2xUb0VudGVyU2VhcmNoRXhwcigpO1xuICAgIHRoaXMuX3NldENvbnRyb2xWYWx1ZUludGVybmFsKGNvbnRyb2wsIGBJZD1cIiR7cm93SWR9XCJgKTtcbiAgICByZXR1cm4gdGhpcy5wbS5FeGVjdXRlTWV0aG9kKCdJbnZva2VNZXRob2QnLCAnRXhlY3V0ZVF1ZXJ5JywgbnVsbCwgYWkpO1xuICB9XG5cbiAgcXVlcnkocGFyYW1zLCBjYikge1xuICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHRoaXMuX3F1ZXJ5KHBhcmFtcywgcmVzb2x2ZSkpO1xuICAgIGNvbnN0IHJldCA9IHByb21pc2UudGhlbigoKSA9PiB0aGlzLmdldFJlY29yZFNldCgpLmxlbmd0aCk7XG4gICAgcmV0dXJuIHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJyA/IHJldC50aGVuKGNiKSA6IHJldDtcbiAgfVxuXG4gIF9xdWVyeShwYXJhbXMsIGNiKSB7XG4gICAgLy8gVE9ETzogY2hlY2sgaWYgaXQgaXMgYWxyZWFkeSBpbiBxdWVyeSBtb2RlIHRvIGF2b2lkIGNhbGxpbmcgdGhlIG5ldyBxdWVyeSBhZ2FpblxuICAgIC8vIG9yIGFjY2VwdCB0aGUgaW5wdXQgcGFyYW1ldGVyIHRvIHNraXAgY2FsbGluZyB0aGUgbmV3IHF1ZXJ5P1xuICAgIC8vIG9yIG1heWJlIGJldHRlciB0byBjYW5jZWwgdGhlIGV4aXN0aW5nIHF1ZXJ5P1xuICAgIHRoaXMuX25ld1F1ZXJ5KCk7XG5cbiAgICBjb25zdCBhaSA9IHtcbiAgICAgIHNjb3BlOiB0aGlzLFxuICAgICAgYXN5bmM6IHRydWUsXG4gICAgICBzZWxmYnVzeTogdHJ1ZSxcbiAgICB9O1xuICAgIGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGFpLmNiID0gY2I7XG4gICAgfVxuXG4gICAgY29uc3QgYXJyID0gT2JqZWN0LmtleXMocGFyYW1zKTtcbiAgICBjb25zdCBfY29udHJvbHMgPSB0aGlzLl9yZXR1cm5Db250cm9scygpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBjb250cm9sID0gX2NvbnRyb2xzW2FycltpXV07XG4gICAgICBpZiAoY29udHJvbCkge1xuICAgICAgICB0aGlzLl9zZXRDb250cm9sVmFsdWVJbnRlcm5hbChjb250cm9sLCB0aGlzLl9nZXRTaWViZWxWYWx1ZShwYXJhbXNbYXJyW2ldXSwgY29udHJvbC5HZXRVSVR5cGUoKSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgVGhlIGNvbnRyb2wgXCIke2FycltpXX1cIiBpcyBub3QgZm91bmQhYCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnBtLkV4ZWN1dGVNZXRob2QoJ0ludm9rZU1ldGhvZCcsICdFeGVjdXRlUXVlcnknLCBudWxsLCBhaSk7XG4gIH1cblxuICBzdGF0aWMgUmVxdWVyeShuYW1lKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IFNpZWJlbEFwcC5TX0FwcC5HZXRTZXJ2aWNlKCdOMTkgQlMnKTtcbiAgICBpZiAoc2VydmljZSkge1xuICAgICAgY29uc3QgaW5Qcm9wU2V0ID0gU2llYmVsQXBwLlNfQXBwLk5ld1Byb3BlcnR5U2V0KCk7XG4gICAgICBpblByb3BTZXQuU2V0UHJvcGVydHkoJ25hbWUnLCBuYW1lKTtcbiAgICAgIHNlcnZpY2UuSW52b2tlTWV0aG9kKCdSZXF1ZXJ5JywgaW5Qcm9wU2V0LCB7fSk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIFJlZnJlc2gobmFtZSkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSBTaWViZWxBcHAuU19BcHAuR2V0U2VydmljZSgnTjE5IEJTJyk7XG4gICAgaWYgKHNlcnZpY2UpIHtcbiAgICAgIGNvbnN0IGluUHJvcFNldCA9IFNpZWJlbEFwcC5TX0FwcC5OZXdQcm9wZXJ0eVNldCgpO1xuICAgICAgaW5Qcm9wU2V0LlNldFByb3BlcnR5KCduYW1lJywgbmFtZSk7XG4gICAgICBzZXJ2aWNlLkludm9rZU1ldGhvZCgnUmVmcmVzaCcsIGluUHJvcFNldCwge30pO1xuICAgIH1cbiAgfVxuXG4gIGdldE1WRihpZHMsIGZpZWxkcywgdXNlQWN0aXZlQk8pIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4gdGhpcy5fZ2V0TVZGKGlkcywgZmllbGRzLCB1c2VBY3RpdmVCTywgcmVzb2x2ZSwgcmVqZWN0KSk7XG4gIH1cblxuICBfZ2V0RmllbGROYW1lRm9yQ29udHJvbChjb250cm9sTmFtZSkge1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLl9nZXRDb250cm9sKGNvbnRyb2xOYW1lKTtcbiAgICAvLyBpZiBub3QgZm91bmQsIHRoZSBpbnB1dCB2YWx1ZSBpcyByZXR1cm5lZFxuICAgIGlmIChjb250cm9sKSB7XG4gICAgICByZXR1cm4gY29udHJvbC5HZXRGaWVsZE5hbWUoKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbnRyb2xOYW1lOyAvLyBmYWxsYmFjayAtIGp1c3QgaW4gY2FzZSB3ZSBnb3QgdGhlIGZpZWxkIG5hbWVcbiAgfVxuXG4gIF9nZXRNVkYoaWRzLCBmaWVsZHMsIHVzZUFjdGl2ZUJPLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICBjb25zdCBhcnIgPSBPYmplY3QuZW50cmllcyhmaWVsZHMpO1xuICAgIGNvbnN0IHBzSW5wdXRzID0gU2llYmVsQXBwLlNfQXBwLk5ld1Byb3BlcnR5U2V0KCk7XG4gICAgcHNJbnB1dHMuU2V0UHJvcGVydHkoJ0JPJywgU2llYmVsQXBwLlNfQXBwLkdldEFjdGl2ZUJ1c09iaigpLkdldE5hbWUoKSk7XG4gICAgcHNJbnB1dHMuU2V0UHJvcGVydHkoJ0JDJywgdGhpcy5wbS5HZXQoJ0dldEJ1c0NvbXAnKS5HZXROYW1lKCkpO1xuICAgIHBzSW5wdXRzLlNldFByb3BlcnR5KCdVc2VBY3RpdmVCTycsIHVzZUFjdGl2ZUJPID8gJ1knIDogJ04nKTtcbiAgICBwc0lucHV0cy5TZXRQcm9wZXJ0eSgnSUQnLCBpZHMuam9pbignLCcpKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgcHMgPSBTaWViZWxBcHAuU19BcHAuTmV3UHJvcGVydHlTZXQoKTtcbiAgICAgIHBzLlNldFR5cGUodGhpcy5fZ2V0RmllbGROYW1lRm9yQ29udHJvbChhcnJbaV1bMF0pKTtcbiAgICAgIHBzLlNldFByb3BlcnR5KCdGaWVsZHMnLCBhcnJbaV1bMV0uam9pbignLCcpKTtcbiAgICAgIHBzSW5wdXRzLkFkZENoaWxkKHBzLkNsb25lKCkpO1xuICAgIH1cbiAgICBjb25zdCBicyA9IFNpZWJlbEFwcC5TX0FwcC5HZXRTZXJ2aWNlKCdOMTkgQlMnKTtcbiAgICBjb25zdCBhaSA9IHtcbiAgICAgIGFzeW5jOiB0cnVlLFxuICAgICAgc2VsZmJ1c3k6IHRydWUsXG4gICAgICBzY29wZTogdGhpcyxcbiAgICAgIGVycmNiOiAoKSA9PiByZWplY3QoKSxcbiAgICAgIGNiOiAobWV0aG9kTmFtZSwgSW5wdXRzLCBwc091dHB1dHMpID0+IHtcbiAgICAgICAgY29uc3QgeyBjaGlsZEFycmF5IH0gPSBwc091dHB1dHMuR2V0Q2hpbGRCeVR5cGUoJ1Jlc3VsdFNldCcpIHx8IHt9OyAvLyB0byBiZSBwcm90ZWN0ZWRkIHdoZW4gbm8gcmVzdWx0c1xuICAgICAgICBjb25zdCByZXQgPSB7fTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoY2hpbGRBcnJheSB8fCBbXSkubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICByZXRbY2hpbGRBcnJheVtpXS5HZXRUeXBlKCldID0ge307XG4gICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjaGlsZEFycmF5W2ldLmNoaWxkQXJyYXkubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IGVsID0gY2hpbGRBcnJheVtpXS5jaGlsZEFycmF5W2pdO1xuICAgICAgICAgICAgcmV0W2NoaWxkQXJyYXlbaV0uR2V0VHlwZSgpXVtlbC5HZXRUeXBlKCldID0gZWwuY2hpbGRBcnJheS5tYXAoKHJlYykgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBwcmltYXJ5ID0gcmVjLnByb3BBcnJheVsnU1NBIFByaW1hcnkgRmllbGQnXTtcbiAgICAgICAgICAgICAgdGhpcy5ib29sT2JqZWN0LlNldEFzU3RyaW5nKHByaW1hcnkpO1xuICAgICAgICAgICAgICByZWMucHJvcEFycmF5WydTU0EgUHJpbWFyeSBGaWVsZCddID0gdGhpcy5ib29sT2JqZWN0LkdldFZhbHVlKCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHJlYy5wcm9wQXJyYXkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc29sdmUocmV0KTtcbiAgICAgIH0sXG4gICAgfTtcbiAgICByZXR1cm4gYnMuSW52b2tlTWV0aG9kKCdSZXR1cm5NVkdGaWVsZHMnLCBwc0lucHV0cywgYWkpO1xuICB9XG5cbiAgc2F2ZVByZWYobmFtZSwgdmFsdWUpIHtcbiAgICAvLyB2YWx1ZSBpcyBhIHN0cmluZ1xuICAgIC8vIHZhbHVlIGlzIGJvdW5kIHRvIGFwcGxldCBhbmQgdmlld1xuICAgIGNvbnN0IHBzSW5wdXQgPSBTaWViZWxBcHAuU19BcHAuTmV3UHJvcGVydHlTZXQoKTtcbiAgICBwc0lucHV0LlNldFByb3BlcnR5KCdLZXknLCBuYW1lKTtcbiAgICBwc0lucHV0LlNldFByb3BlcnR5KG5hbWUsIHZhbHVlKTtcbiAgICB0aGlzLnBtLk9uQ29udHJvbEV2ZW50KFxuICAgICAgdGhpcy5jb25zdHMuZ2V0KCdQSFlFVkVOVF9JTlZPS0VfQ09OVFJPTCcpLFxuICAgICAgdGhpcy5wbS5HZXQodGhpcy5jb25zdHMuZ2V0KCdTV0VfTVRIRF9VUERBVEVfVVNFUl9QUkVGJykpLFxuICAgICAgcHNJbnB1dCxcbiAgICApO1xuICAgIHJldHVybiB0aGlzLnBtLlNldFByb3BlcnR5KG5hbWUsIHZhbHVlKTtcbiAgfVxuXG4gIHJlYWRQcmVmKG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5wbS5HZXQobmFtZSk7XG4gIH1cblxuICBfcmV0cmlldmVEYXRhKGFtb3VudCkgeyAvLyB0ZW1wIG1ldGhvZCFcbiAgICBjb25zdCBkYXRhID0gbmV3IE1hcCgpO1xuXG4gICAgd2hpbGUgKGRhdGEuc2l6ZSA8IGFtb3VudCkge1xuICAgICAgY29uc3QgdGVtcCA9IHRoaXMuZ2V0UmF3UmVjb3JkU2V0KCk7XG5cbiAgICAgIC8vIGF2b2lkIHRoZSBkdXBsaWNhdGVzXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRlbXAubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgZGF0YS5zZXQodGVtcFtpXS5JZCwgdGVtcFtpXSk7XG4gICAgICB9XG5cbiAgICAgIC8vIHdlIGFyZSB1c2luZyBjYW5JbnZva2VNZXRob2QsIGFzIGluIDE2LjAwIG5leHRSZWNvcmRTZXQgYWx3YXlzIHJldHVybnMgdW5kZWZpbmVkXG4gICAgICBpZiAoIXRoaXMuY2FuSW52b2tlTWV0aG9kKCdHb3RvTmV4dFNldCcpKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICB0aGlzLm5leHRSZWNvcmRTZXQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgZGF0YTogWy4uLmRhdGEudmFsdWVzKCldLFxuICAgICAgaGFzTmV4dDogdGhpcy5jYW5JbnZva2VNZXRob2QoJ0dvdG9OZXh0U2V0JyksXG4gICAgfTtcbiAgfVxuXG4gIF9zZXRGaWVsZFZhbHVlKG5hbWUsIHZhbHVlKSB7XG4gICAgY29uc29sZS53YXJuKCdbTjE5XV9zZXRGaWVsZFZhbHVlIHdpbGwgYmUgcmVtb3ZlZCBpbiB0aGUgZnV0dXJlIScpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICB0aGlzLmFwcGxldC5TZXRDb250cm9sVmFsdWVCeU5hbWUobmFtZSwgdmFsdWUpO1xuICAgIHJldHVybiB0aGlzLnBtLkV4ZWN1dGVNZXRob2QoJ0ludm9rZU1ldGhvZCcsICdXcml0ZVJlY29yZCcpO1xuICB9XG5cbiAgLy8gdGhpcyBpcyBhbHNvIGNhbGxlZCBmcm9tIHRoZSB0aGUgZGVtbyB3aGVyZSBTaWViZWwgYW5kIGN1c3RvbSByZW5kZXJlZCBhcHBsZXQgY29leGlzdFxuICBfZ2V0RmllbGRUb0NvbnRyb2xNYXAoX2NvbnRyb2xzKSB7XG4gICAgY29uc3QgcmV0ID0ge307XG4gICAgY29uc3QgYXBwbGV0Q29udHJvbHMgPSB0aGlzLl9yZXR1cm5Db250cm9scygpO1xuICAgIGNvbnN0IGFyciA9IE9iamVjdC5rZXlzKF9jb250cm9scyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGNvbnRyb2wgPSBhcHBsZXRDb250cm9sc1thcnJbaV1dO1xuICAgICAgY29uc3QgZmllbGQgPSBjb250cm9sLkdldEZpZWxkTmFtZSgpO1xuICAgICAgaWYgKGZpZWxkKSB7XG4gICAgICAgIGNvbnN0IHVpVHlwZSA9IGNvbnRyb2wuR2V0VUlUeXBlKCk7XG4gICAgICAgIHJldFtmaWVsZF0gPSB7XG4gICAgICAgICAgbmFtZTogY29udHJvbC5HZXROYW1lKCksXG4gICAgICAgICAgaXNQb3N0Q2hhbmdlczogY29udHJvbC5Jc1Bvc3RDaGFuZ2VzKCksXG4gICAgICAgICAgdWlUeXBlLFxuICAgICAgICAgIGRpc3BsYXlGb3JtYXQ6IGNvbnRyb2wuR2V0RGlzcGxheUZvcm1hdCgpIHx8IHRoaXMuZ2V0Q29udHJvbERpc3BsYXlGb3JtYXQodWlUeXBlKSxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIGdldENvbnRyb2xzUmVjb3JkU2V0KCkge1xuICAgIGlmICghdGhpcy5maWVsZFRvQ29udHJvbE1hcCkge1xuICAgICAgdGhpcy5maWVsZFRvQ29udHJvbE1hcCA9IHRoaXMuX2dldEZpZWxkVG9Db250cm9sTWFwKHRoaXMuX3JldHVybkNvbnRyb2xzKCkpO1xuICAgIH1cbiAgICAvLyB1c2VkIHNsaWNlIHRvIGF2b2lkIG1vZGlmaWNhdGlvbiBvZiB0aGUgcmVjb3JkIHNldFxuICAgIGNvbnN0IHJldCA9IHRoaXMuZ2V0UmVjb3JkU2V0KCkuc2xpY2UoKTtcblxuICAgIC8vIHRvZG8gOiBjb252ZXJ0IGJvb2xlYW4gdmFsdWVzIChlLmcuIFkvTiA8LT4gdHJ1ZS9mYWxzcylcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJldC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgaWQgPSByZXRbaV0uSWQ7XG4gICAgICByZXRbaV0gPSBPYmplY3Qua2V5cyhyZXRbaV0pLmZpbHRlcihlbCA9PiB0aGlzLmZpZWxkVG9Db250cm9sTWFwW2VsXSkucmVkdWNlKChhY2MsIGVsKSA9PiAoe1xuICAgICAgICAuLi5hY2MsXG4gICAgICAgIC4uLntcbiAgICAgICAgICBbdGhpcy5maWVsZFRvQ29udHJvbE1hcFtlbF0ubmFtZV06IHRoaXMuX2dldEpTVmFsdWUocmV0W2ldW2VsXSxcbiAgICAgICAgICAgIHRoaXMuZmllbGRUb0NvbnRyb2xNYXBbZWxdLnVpVHlwZSxcbiAgICAgICAgICAgIHRoaXMuZmllbGRUb0NvbnRyb2xNYXBbZWxdLmRpc3BsYXlGb3JtYXQpLFxuICAgICAgICB9LFxuICAgICAgfSksIHt9KTtcbiAgICAgIGlmIChpZCkge1xuICAgICAgICByZXRbaV0uSWQgPSBpZDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmV0O1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBOMTlub3RpZmljYXRpb25zIHtcbiAgY29uc3RydWN0b3IocG0sIGNvbnN0cywgYmNJZCkge1xuICAgIGxldCByZWNlaXZlZE5vdGlmaWNhdGlvbnMgPSBbXTtcbiAgICB0aGlzLnRva2VuID0gMDtcbiAgICB0aGlzLnN1YnNjcmliZXJzID0gW107XG4gICAgcG0uQXR0YWNoTm90aWZpY2F0aW9uSGFuZGxlcihjb25zdHMuZ2V0KCdTV0VfUFJPUF9CQ19OT1RJX0JFR0lOJyksIChwcm9wU2V0KSA9PiB7XG4gICAgICBpZiAoYmNJZCA9PT0gcHJvcFNldC5HZXRQcm9wZXJ0eSgnYmMnKSkge1xuICAgICAgICByZWNlaXZlZE5vdGlmaWNhdGlvbnMgPSBbXTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHBtLkF0dGFjaE5vdGlmaWNhdGlvbkhhbmRsZXIoY29uc3RzLmdldCgnU1dFX1BST1BfQkNfTk9USV9ORVdfQUNUSVZFX1JPVycpLCAocHJvcFNldCkgPT4ge1xuICAgICAgaWYgKGJjSWQgPT09IHByb3BTZXQuR2V0UHJvcGVydHkoJ2JjJykpIHtcbiAgICAgICAgcmVjZWl2ZWROb3RpZmljYXRpb25zLnB1c2goJ1NXRV9QUk9QX0JDX05PVElfTkVXX0FDVElWRV9ST1cnKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHBtLkF0dGFjaE5vdGlmaWNhdGlvbkhhbmRsZXIoY29uc3RzLmdldCgnU1dFX1BST1BfQkNfTk9USV9TVEFURV9DSEFOR0VEJyksIChwcm9wU2V0KSA9PiB7XG4gICAgICBpZiAoYmNJZCA9PT0gcHJvcFNldC5HZXRQcm9wZXJ0eSgnYmMnKSkge1xuICAgICAgICBpZiAoJ2NwJyAhPT0gcHJvcFNldC5HZXRQcm9wZXJ0eSgnc3RhdGUnKSkge1xuICAgICAgICAgIHJlY2VpdmVkTm90aWZpY2F0aW9ucy5wdXNoKCdTV0VfUFJPUF9CQ19OT1RJX1NUQVRFX0NIQU5HRUQnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcG0uQXR0YWNoTm90aWZpY2F0aW9uSGFuZGxlcihjb25zdHMuZ2V0KCdTV0VfUFJPUF9CQ19OT1RJX0RFTEVURV9SRUNPUkQnKSwgKHByb3BTZXQpID0+IHtcbiAgICAgIGlmIChiY0lkID09PSBwcm9wU2V0LkdldFByb3BlcnR5KCdiYycpKSB7XG4gICAgICAgIHJlY2VpdmVkTm90aWZpY2F0aW9ucy5wdXNoKCdTV0VfUFJPUF9CQ19OT1RJX0RFTEVURV9SRUNPUkQnKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHBtLkF0dGFjaE5vdGlmaWNhdGlvbkhhbmRsZXIoY29uc3RzLmdldCgnU1dFX1BST1BfQkNfTk9USV9ORVdfUkVDT1JEJyksIChwcm9wU2V0KSA9PiB7XG4gICAgICBpZiAoYmNJZCA9PT0gcHJvcFNldC5HZXRQcm9wZXJ0eSgnYmMnKSkge1xuICAgICAgICByZWNlaXZlZE5vdGlmaWNhdGlvbnMucHVzaCgnU1dFX1BST1BfQkNfTk9USV9ORVdfUkVDT1JEJyk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBwbS5BdHRhY2hOb3RpZmljYXRpb25IYW5kbGVyKGNvbnN0cy5nZXQoJ1NXRV9QUk9QX0JDX05PVElfRU5EJyksIChwcm9wU2V0KSA9PiB7XG4gICAgICBpZiAoYmNJZCA9PT0gcHJvcFNldC5HZXRQcm9wZXJ0eSgnYmMnKSkge1xuICAgICAgICBpZiAocmVjZWl2ZWROb3RpZmljYXRpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3Vic2NyaWJlcnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIC8vIHdlIGFzc3VtZSB0aGF0IHRoZSBmdW5jdGlvbiBkb2VzIG5vdCB0aHJvdyBhbiBlcnJvclxuICAgICAgICAgICAgdGhpcy5zdWJzY3JpYmVyc1tpXS5mdW5jKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzdWJzY3JpYmUoZnVuYykge1xuICAgIGlmICh0eXBlb2YgZnVuYyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdmdW5jIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG4gICAgfVxuICAgIHRoaXMudG9rZW4gKz0gMTtcbiAgICB0aGlzLnN1YnNjcmliZXJzLnB1c2goeyB0b2tlbjogdGhpcy50b2tlbiwgZnVuYyB9KTtcbiAgICByZXR1cm4gdGhpcy50b2tlbjtcbiAgfVxuXG4gIHVuc3Vic2NyaWJlKHN1YlRva2VuKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnN1YnNjcmliZXJzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAoc3ViVG9rZW4gPT09IHRoaXMuc3Vic2NyaWJlcnNbaV0udG9rZW4pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3Vic2NyaWJlcnMuc3BsaWNlKGksIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiIsImltcG9ydCBOMTliYXNlQXBwbGV0IGZyb20gJy4vbjE5YmFzZUFwcGxldCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE4xOXBvcHVwQXBwbGV0IGV4dGVuZHMgTjE5YmFzZUFwcGxldCB7XG4gIGNvbnN0cnVjdG9yKHNldHRpbmdzKSB7XG4gICAgc3VwZXIoc2V0dGluZ3MpO1xuICAgIGNvbnNvbGUubG9nKGAke3RoaXMuY29uc3RydWN0b3IubmFtZX0gc3RhcnRlZC4uLmApOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcblxuICAgIGlmICh0aGlzLmlzTGlzdEFwcGxldCkge1xuICAgICAgdGhpcy5wbS5HZXRSZW5kZXJlcigpLnJlc2l6ZSA9ICgpID0+IDA7XG4gICAgICB0aGlzLnBtLkdldFJlbmRlcmVyKCkuR2V0U2VsZWN0ZWRSb3cgPSAoKSA9PiAwO1xuICAgIH1cbiAgfVxuXG4gIHBpY2tSZWNvcmQoKSB7XG4gICAgLy8gdG9kbyA6IGNoZWNrIENhbklub2tlTWV0aG9kIGFuZC9vciBpcyBpdCBwaWNrXG4gICAgcmV0dXJuIHRoaXMucG0uRXhlY3V0ZU1ldGhvZCgnSW52b2tlTWV0aG9kJywgJ1BpY2tSZWNvcmQnKTtcbiAgfVxuXG4gIGRlbGV0ZVJlY29yZHMoY2IpIHtcbiAgICAvLyBtZXRob2QgaXMgbm90IGFsbG93ZWQgdG8gZGVsZXRlIHRoZSBwcmltYXJ5XG4gICAgLy8gIGluIHRoaXMgY2FzZSBpdCByZXR1cm5zIFwiTWV0aG9kIERlbGV0ZVJlY29yZHMgaXMgbm90IGFsbG93ZWQgaGVyZVwiIFNCTC1VSUYtMDAzNDhcbiAgICAvLyB0b2RvOiBjaGVjayBjYW5JbnZva2VNZXRob2QgYW5kL29yIGlzIGl0IE1WR1xuICAgIGNvbnN0IHJldCA9IHRoaXMucG0uRXhlY3V0ZU1ldGhvZCgnSW52b2tlTWV0aG9kJywgJ0RlbGV0ZVJlY29yZHMnKTtcbiAgICBpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjYigpO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgYWRkUmVjb3JkcyhjYikge1xuICAgIC8vIHRvZG86IGNoZWNrIGNhbkludm9rZU1ldGhvZCBhbmQvb3IgaXMgaXQgTVZHLiBhbmQgaWYgd2UgaGF2ZSBhIHJlY29yZCBpbiBhc3NvYz9cbiAgICBjb25zdCByZXQgPSB0aGlzLnBtLkV4ZWN1dGVNZXRob2QoJ0ludm9rZU1ldGhvZCcsICdBZGRSZWNvcmRzJyk7XG4gICAgaWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2IoKTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIC8vIHRvZG86IGRvIHdlIG5lZWQgZGVsZXRlQWxsUmVjb3Jkcz9cbiAgYWRkQWxsUmVjb3JkcyhjYikge1xuICAgIC8vIHRvZG86IGNoZWNrIGNhbkludm9rZU1ldGhvZCBhbmQvb3IgaXMgaXQgTVZHLiBhbmQgaWYgd2UgaGF2ZSBhIHJlY29yZCBpbiBhc3NvYz9cbiAgICBjb25zdCByZXQgPSB0aGlzLnBtLkV4ZWN1dGVNZXRob2QoJ0ludm9rZU1ldGhvZCcsICdBZGRBbGxSZWNvcmRzJyk7XG4gICAgaWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2IoKTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIF9maXJzdFJlY29yZCgpIHsgLy8gdGVtcCBtZXRob2QsIGFzc3VtZXMgdGhhdCBubyBzY3JvbGxpbmcgaGFwcGVuZWRcbiAgICBpZiAodGhpcy5pc0xpc3RBcHBsZXQpIHtcbiAgICAgIGlmICh0aGlzLmdldFNlbGVjdGlvbigpICE9PSAwKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBvc2l0aW9uT25Sb3coMCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iLCJpbXBvcnQgTjE5cG9wdXBBcHBsZXQgZnJvbSAnLi9uMTlwb3B1cEFwcGxldCc7XG5cbmNvbnN0IHNpbmdsZXRvbiA9IFN5bWJvbCgnc2luZ2xldG9uJyk7XG5jb25zdCBzaW5nbGV0b25FbmZvcmNlciA9IFN5bWJvbCgnc2luZ2xldG9uRW5mb3JjZXInKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTjE5cG9wdXBDb250cm9sbGVyIHtcbiAgc3RhdGljIGdldCBpbnN0YW5jZSgpIHtcbiAgICBpZiAoIXRoaXNbc2luZ2xldG9uXSkge1xuICAgICAgdGhpc1tzaW5nbGV0b25dID0gbmV3IE4xOXBvcHVwQ29udHJvbGxlcihzaW5nbGV0b25FbmZvcmNlcik7XG4gICAgfVxuICAgIHJldHVybiB0aGlzW3NpbmdsZXRvbl07XG4gIH1cblxuICBjb25zdHJ1Y3RvcihlbmZvcmNlcikge1xuICAgIGlmIChlbmZvcmNlciAhPT0gc2luZ2xldG9uRW5mb3JjZXIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW5zdGFudGlhdGlvbiBmYWlsZWQ6IHVzZSBTaW5nbGV0b24uZ2V0SW5zdGFuY2UoKSBpbnN0ZWFkIG9mIG5ldy4nKTtcbiAgICB9XG4gICAgdGhpcy5jb25zdHMgPSBTaWViZWxKUy5EZXBlbmRlbmN5KCdTaWViZWxBcHAuQ29uc3RhbnRzJyk7XG4gICAgdGhpcy5pc1BvcHVwSGlkZGVuID0gZmFsc2U7XG4gICAgdGhpcy5yZXNvbHZlUHJvbWlzZSA9IG51bGw7XG4gICAgdGhpcy5wb3B1cEFwcGxldE4xOSA9IG51bGw7XG4gICAgdGhpcy5hc3NvY0FwcGxldE4xOSA9IG51bGw7XG5cbiAgICBjb25zb2xlLmxvZyhgJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWV9IHN0YXJ0ZWQuLi5gKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG5cbiAgICAvLyBpdCB3aWxsIGJlIGEgc2luZ2xldG9uLCBzbyB0aGVyZSBpcyBubyBjbGVhbnVwXG4gICAgdGhpcy5OMTlwcm9jZXNzTmV3UG9wdXAgPSBTaWViZWxBcHAuU19BcHAuUHJvY2Vzc05ld1BvcHVwO1xuICAgIFNpZWJlbEFwcC5TX0FwcC5Qcm9jZXNzTmV3UG9wdXAgPSAocHMpID0+IHtcbiAgICAgIGxldCByZXQ7XG4gICAgICBpZiAodGhpcy5pc1BvcHVwSGlkZGVuKSB7XG4gICAgICAgIHJldCA9IHRoaXMucHJvY2Vzc05ld1BvcHVwKHBzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldCA9IHRoaXMuTjE5cHJvY2Vzc05ld1BvcHVwLmNhbGwoU2llYmVsQXBwLlNfQXBwLCBwcyk7XG4gICAgICAgIC8vIHRvZG86IHNldCBoZXJlIGlzUG9wdXBIaWRkZW4gdG8gZmFsc2U/XG4gICAgICB9XG4gICAgICByZXR1cm4gcmV0O1xuICAgIH07XG5cbiAgICAvLyB3ZSBjb3VsZCB1c2UgcG0uQXR0YWNoUG9zdFByb3h5RXhlY3V0ZUJpbmRpbmcgZm9yICdFZGl0RmllbGQnLCBidXQgYXQgdGhpcyBwb2ludCBHZXRSZW5kZXJlciByZXR1cm5zIG51bGxcbiAgICAvLyBidXQgcG0gZXhpc3RzXG4gICAgLy8gb3BlbiB1bnRpbCB3ZSBnZXQgcmlkIG9mIEdldFJlbmRlcmVyIChPcmFjbGUgcmV2aWV3KVxuICAgIHRoaXMuTjE5dmlld0xvYWRlZCA9IFNpZWJlbEFwcC5jb250ZW50VXBkYXRlci52aWV3TG9hZGVkO1xuICAgIFNpZWJlbEFwcC5jb250ZW50VXBkYXRlci52aWV3TG9hZGVkID0gKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IHJldCA9IHRoaXMuTjE5dmlld0xvYWRlZC5jYWxsKFNpZWJlbEFwcC5jb250ZW50VXBkYXRlciwgLi4uYXJncyk7XG4gICAgICBpZiAodHlwZW9mIHRoaXMucmVzb2x2ZVByb21pc2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gdG9kbzogdXNlIGhlcmUgdGhlIHByb3BlcnRpZXMgc2V0IG9uIHByb21pc2VSZXNvbHZpbmc/XG4gICAgICAgIGNvbnN0IHsgYXBwbGV0TmFtZSB9ID0gTjE5cG9wdXBDb250cm9sbGVyLklzUG9wdXBPcGVuKCk7XG4gICAgICAgIGlmICghYXBwbGV0TmFtZSkge1xuICAgICAgICAgIC8vIGNvbnNvbGUud2FybignT3BlbiBBcHBsZXQgTmFtZSBpcyBub3QgZm91bmQgaW4gdmlld0xvYWRlZCByZXNvbHZpbmcgUHJvbWlzZScpO1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignT3BlbiBBcHBsZXQgTmFtZSBpcyBub3QgZm91bmQgaW4gdmlld0xvYWRlZCByZXNvbHZpbmcgUHJvbWlzZScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGFwcGxldCA9IE4xOXBvcHVwQ29udHJvbGxlci5HZXRQb3B1cEFwcGxldChhcHBsZXROYW1lKTtcbiAgICAgICAgICBjb25zdCBwbSA9IGFwcGxldC5HZXRQTW9kZWwoKTtcbiAgICAgICAgICAvLyB0b2RvOiBhdm9pZCB0aGlzIGNpcmN1bGFyaXR5XG4gICAgICAgICAgdGhpcy5wb3B1cEFwcGxldE4xOSA9IG5ldyBOMTlwb3B1cEFwcGxldCh7IHBtIH0pOyAvLyB0b2RvIDogc3BsaXQgTjE5SGVscGVyIGludG8gMiBjbGFzc2VzXG4gICAgICAgICAgY29uc3Qgb2JqID0geyBhcHBsZXROYW1lLCBwb3B1cEFwcGxldE4xOTogdGhpcy5wb3B1cEFwcGxldE4xOSB9O1xuICAgICAgICAgIC8vIGNoZWNrIGlmIHdlIGhhdmUgYXNzb2NcbiAgICAgICAgICAvLyB3ZSBhc3N1bWUgaXQgaXMgYWx3YXlzIGFzc29jIGFwcGxldCwgYnV0IHdoYXQgYWJvdXQgb3BlbmluZyBwb3B1cCBvbiB0aGUgdG9wIG9mIGFub3RoZXIgLSBub3QgdGVzdGVkIGl0XG4gICAgICAgICAgY29uc3QgYXNzb2NBcHBsZXQgPSBhcHBsZXQuR2V0UG9wdXBBcHBsZXQoKTtcbiAgICAgICAgICBpZiAoYXNzb2NBcHBsZXQpIHtcbiAgICAgICAgICAgIHRoaXMuYXNzb2NBcHBsZXROMTkgPSBuZXcgTjE5cG9wdXBBcHBsZXQoeyBwbTogYXNzb2NBcHBsZXQuR2V0UE1vZGVsKCkgfSk7XG4gICAgICAgICAgICBvYmouYXNzb2NBcHBsZXROMTkgPSB0aGlzLmFzc29jQXBwbGV0TjE5O1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnJlc29sdmVQcm9taXNlKG9iaik7XG4gICAgICAgICAgdGhpcy5yZXNvbHZlUHJvbWlzZSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByZXQ7XG4gICAgfTtcbiAgfVxuXG4gIGNhbk9wZW5Qb3B1cCgpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMucmVzb2x2ZVByb21pc2UgIT09ICdmdW5jdGlvbic7XG4gIH1cblxuICBwcm9jZXNzTmV3UG9wdXAocHMpIHtcbiAgICBTaWViZWxBcHAuU19BcHAuU2V0U2hvd05ld1BhZ2UodHJ1ZSk7XG4gICAgY29uc3QgcG9wdXBQTSA9IFNpZWJlbEFwcC5TX0FwcC5HZXRQb3B1cFBNKCk7XG5cbiAgICBwb3B1cFBNLlNldFByb3BlcnR5KCdDYW5Qcm9jZXNzTGF5b3V0JywgZmFsc2UpO1xuICAgIHBvcHVwUE0uU2V0UHJvcGVydHkoJ2lzUG9wdXBQaWNrJywgZmFsc2UpO1xuICAgIHBvcHVwUE0uU2V0UHJvcGVydHkoJ2lzUG9wdXBNVkdBc3NvYycsIGZhbHNlKTtcbiAgICBwb3B1cFBNLlNldFByb3BlcnR5KCdpc1BvcHVwTVZHU2VsZWN0ZWQnLCBmYWxzZSk7XG4gICAgcG9wdXBQTS5TZXRQcm9wZXJ0eSgnaXNQb3B1cEFzc29jJywgZmFsc2UpO1xuICAgIHBvcHVwUE0uU2V0UHJvcGVydHkoJ2N1cnJQb3B1cHMnLCBbXSk7XG4gICAgcG9wdXBQTS5TZXRQcm9wZXJ0eSgnaXNTSVBvcHVwJywgcHMuR2V0UHJvcGVydHkodGhpcy5jb25zdHMuZ2V0KCdTV0VfSVNfU0lfUE9QVVAnKSkpO1xuICAgIHBvcHVwUE0uU2V0UHJvcGVydHkoJ2lzUHJldlBvcHVwVmlzaWJsZScsICExKTtcblxuICAgIGlmICghcG9wdXBQTS5HZXRSZW5kZXJlcigpKSB7XG4gICAgICBwb3B1cFBNLlNldHVwKCk7XG4gICAgfVxuXG4gICAgY29uc3QgYWN0aXZlVmlldyA9IFNpZWJlbEFwcC5TX0FwcC5HZXRBY3RpdmVWaWV3KCk7XG4gICAgaWYgKGFjdGl2ZVZpZXcpIHtcbiAgICAgIGNvbnN0IGFjdGl2ZUFwcGxldCA9IGFjdGl2ZVZpZXcuR2V0QWN0aXZlQXBwbGV0KCk7XG4gICAgICBpZiAoYWN0aXZlQXBwbGV0KSB7XG4gICAgICAgIGFjdGl2ZVZpZXcuU2V0QWN0aXZlQXBwbGV0QmVmb3JlUG9wdXAoYWN0aXZlQXBwbGV0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwb3B1cFBNLkFkZFByb3BlcnR5KCdzdGF0ZScsICd2aXNpYmxlJyk7IC8vIHRvZG86IHdlIG5lZWQgYWxzbyB0byByZXN0b3JlIHRoZSBQTVxuXG4gICAgbGV0IHVybCA9IHBzLkdldFByb3BlcnR5KCdVUkwnKTtcbiAgICB1cmwgPSBTaWViZWxBcHAuU19BcHAuR2V0UGFnZVVSTCgpICsgdXJsLnNwbGl0KCdzdGFydC5zd2UnKVsxXTtcbiAgICBwb3B1cFBNLlNldFByb3BlcnR5KCd1cmwnLCB1cmwpO1xuXG4gICAgcmV0dXJuICdyZWZyZXNocG9wdXAnO1xuICB9XG5cbiAgLy8gc3RhdGljIFJlSW5pdFBvcHVwKCkge1xuICAvLyAgIGNvbnN0IHBvcHVwUE0gPSBTaWViZWxBcHAuU19BcHAuR2V0UG9wdXBQTSgpO1xuICAvLyAgIHBvcHVwUE0uSW5pdCgpO1xuICAvLyAgIHBvcHVwUE0uU2V0dXAoKTtcbiAgLy8gfVxuXG4gIC8vIHRvZG86IGNoYW5nZSB0aGUgYXBwcm9hY2gsIHVzZSB0aGUgY2xhc3MgaW50ZXJuYWwgdmFyaWFibGVzXG4gIGNsb3NlUG9wdXBBcHBsZXQoYXBwbGV0KSB7XG4gICAgLy8gdG9kbyA6IGNoZWNrIGNhbkludm9rZU1ldGhvZFxuICAgIGxldCByZXQ7XG4gICAgaWYgKGFwcGxldCkge1xuICAgICAgY29uc3QgaXNQb3B1cEFwcGxldCA9IHR5cGVvZiBhcHBsZXQuR2V0UG9wdXBBcHBsZXROYW1lID09PSAnZnVuY3Rpb24nO1xuICAgICAgY29uc3QgaXNQaWNrQXBwbGV0ID0gdHlwZW9mIGFwcGxldC5HZXRQaWNrQXBwbGV0TmFtZSA9PT0gJ2Z1bmN0aW9uJztcbiAgICAgIGlmICghaXNQb3B1cEFwcGxldCAmJiAhaXNQaWNrQXBwbGV0KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVGhpcyBhcHBsZXQgaXMgbmVpdGhlciBwaWNrIG5vciBwb3B1cCcpO1xuICAgICAgfVxuICAgICAgcmV0ID0gYXBwbGV0LkdldFBNb2RlbCgpLkV4ZWN1dGVNZXRob2QoJ0ludm9rZU1ldGhvZCcsICdDbG9zZUFwcGxldCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyB0b2RvOiBjb3VsZCB3ZSB1c2UgdGhlIENsb3NlIG1ldGhvZCBvZiB0aGUgYXBwbGV0PyAoTlogdXNlZClcbiAgICAgIHJldCA9IHRoaXMucG9wdXBBcHBsZXROMTkuYXBwbGV0LkdldFBNb2RlbCgpLkV4ZWN1dGVNZXRob2QoJ0ludm9rZU1ldGhvZCcsICdDbG9zZUFwcGxldCcpO1xuICAgIH1cbiAgICAvLyBpdCBjb3VsZCBiZSBiZXR0ZXIgaWYgd2UgZG9uJ3QgaGF2ZSBhIFNpZWJlbCBBcHBsZXQgb24gdGhlIHZpZXdcbiAgICAvLyBpbiB0aGlzIGNhc2UsIHdlIHdvdWxkIG5vdCBuZWVkIHRvIHJlSW5pdFBvcHVwXG4gICAgLy8gaWYgKHRoaXMuaXNQb3B1cEhpZGRlbikge1xuICAgIC8vICBOMTlwb3B1cENvbnRyb2xsZXIuUmVJbml0UG9wdXAoKTtcbiAgICAvLyB9XG4gICAgdGhpcy5wb3B1cEFwcGxldE4xOSA9IG51bGw7XG4gICAgdGhpcy5hc3NvY0FwcGxldE4xOSA9IG51bGw7XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIHN0YXRpYyBJc1BvcHVwT3BlbigpIHsgLy8gdG9kbzogd2hlbiB3ZSBzZXQgc29tZSBwcm9wZXJ0aWVzIG9uIHJlc29sdmUsIGRvIHdlIG5lZWQgdGhpcyBtZXRob2Qgbm93XG4gICAgLy8gdG9kbzogaGVyZSByZXVzZSB0aGUgcHJvcGVydGllcyB0aGF0IHNldCB3aGVuIHRoZSBQcm9taXNlIHJlc29sdmVkXG4gICAgY29uc3QgY3VyclBvcHVwcyA9IFNpZWJlbEFwcC5TX0FwcC5HZXRQb3B1cFBNKCkuR2V0KCdjdXJyUG9wdXBzJyk7XG4gICAgaWYgKDAgPT09IGN1cnJQb3B1cHMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4geyBpc09wZW46IGZhbHNlIH07XG4gICAgfVxuICAgIGlmICgxID09PSBjdXJyUG9wdXBzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHsgaXNPcGVuOiB0cnVlLCBhcHBsZXROYW1lOiBjdXJyUG9wdXBzWzBdLkdldE5hbWUoKSwgY29udHJvbE5hbWU6IGN1cnJQb3B1cHNbMF0uR2V0UG9wdXBDb250cm9sKCkgfTtcbiAgICB9XG4gICAgaWYgKDIgPT09IGN1cnJQb3B1cHMubGVuZ3RoKSB7XG4gICAgICAvLyB0aGlzIGlzIGEgc2h1dHRsZSBvclxuICAgICAgLy8gbWF5YmUgd2Ugb3BlbmVkIGEgcG9wdXAgYXBwbGV0IG9uIHRoZSB0b3Agb2YgcGljayBhcHBsZXQgLSBUT0RPOiAvLyB0ZXN0IGl0XG4gICAgICAvLyAgICAgIHRlc3QgaXQgIC0gbWF5YmUgd2UgbmVlZCB0byBjbG9zZSB0aGUgc2V2ZXJhbCBhcHBsZXRzXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJQb3B1cHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjdXJyUG9wdXBzWzFdLkdldFBvcHVwQXBwbGV0TmFtZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHJldHVybiB7IGlzT3BlbjogdHJ1ZSwgYXBwbGV0TmFtZTogY3VyclBvcHVwc1tpXS5HZXROYW1lKCksIGNvbnRyb2xOYW1lOiBjdXJyUG9wdXBzW2ldLkdldFBvcHVwQ29udHJvbCgpIH07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcignTXZnIGFwcGxldCBpcyBub3QgZm91bmQuLi4nKTtcbiAgICB9XG4gICAgLy8gdG9kbzogdGVzdCBpZiB3ZSBjYW4gZ2V0IHRvIGhlcmVcbiAgICAvLyAgICBtYXliZSB3aGVuIHdlIG9wZW4gYSBuZXcgYXBwbGV0IG9uIHRvcCBvZiB0aGUgc2h1dHRsZSBhcHBsZXRcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Nob3VsZCBub3QgYmUgaGVyZS4uLicpO1xuICB9XG5cbiAgLy8gc3RhdGljIGdldFBvcHVwQXBwbGV0UE0oYXBwbGV0TmFtZSkge1xuICAvLyAgIGNvbnN0IGFwcGxldCA9IE4xOXBvcHVwQ29udHJvbGxlci5HZXRQb3B1cEFwcGxldChhcHBsZXROYW1lKTtcbiAgLy8gICByZXR1cm4gYXBwbGV0LkdldFBNb2RlbCgpO1xuICAvLyB9XG5cbiAgc3RhdGljIEdldFBvcHVwQXBwbGV0KGFwcGxldE5hbWUpIHtcbiAgICBjb25zdCBhcHBsZXQgPSBTaWViZWxBcHAuU19BcHAuR2V0QWN0aXZlVmlldygpLkdldEFwcGxldChhcHBsZXROYW1lKTtcbiAgICBpZiAoIWFwcGxldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgcmVmZXJlbmNlIHRvICR7YXBwbGV0TmFtZX0gaXMgbm90IGluc3RhbnRpYXRlZC5gKTtcbiAgICB9XG4gICAgcmV0dXJuIGFwcGxldDtcbiAgfVxuXG4gIHNob3dQb3B1cEFwcGxldChoaWRlLCBjYiwgcG0pIHtcbiAgICAvLyB0b2RvOiB1c2UgdGhlIHByb3BlcnRpZXMgc2V0IG9uIHByb21pc2UgcmVzb2x2aW5nP1xuICAgIGNvbnN0IHsgaXNPcGVuLCBhcHBsZXROYW1lIH0gPSBOMTlwb3B1cENvbnRyb2xsZXIuSXNQb3B1cE9wZW4oKTtcbiAgICBpZiAoaXNPcGVuKSB7XG4gICAgICAvLyB0aGlzIGNvZGUgd2lsbCBjbG9zZSB0aGUgYXBwbGV0IGV2ZW4gaWYgdGhpcyBhcHBsZXQgd2FzIG9yaWdpbmF0ZWQgYnkgYW5vdGhlciBhcHBsZXRcbiAgICAgIGNvbnNvbGUubG9nKGBjbG9zaW5nICR7YXBwbGV0TmFtZX0gaW4gc2hvd1BvcHVwQXBwbGV0Li4uYCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgICAgLy8gbWF5YmUgZG8gbm90IGNsb3NlIGlmIHRoZSBhcHBsZXQgdG8gYmUgb3BlbmVkIGlmIHRoZSBzYW1lIGFzIGFscmVhZHkgb3BlbmVkP1xuICAgICAgdGhpcy5jbG9zZVBvcHVwQXBwbGV0KE4xOXBvcHVwQ29udHJvbGxlci5HZXRQb3B1cEFwcGxldChhcHBsZXROYW1lKSk7XG4gICAgICAvLyB0b2RvOiBjaGVjayBpZiBnb3QgaXQgc3VjY2Vzc2Z1bGx5IGNsb3NlZD9cbiAgICB9XG4gICAgdGhpcy5pc1BvcHVwSGlkZGVuID0gISFoaWRlOyAvLyB0b2RvOiBkbyB3ZSBuZWVkIHRvIGtlZXAgdGhlIHNob3cgdGhlIGFwcGxldFxuXG4gICAgcG0uRXhlY3V0ZU1ldGhvZCgnSW52b2tlTWV0aG9kJywgJ0VkaXRQb3B1cCcpOyAvLyBjYW4gY2FsbCBFZGl0RmllbGQ/XG5cbiAgICBsZXQgcmV0ID0gdHJ1ZTtcblxuICAgIGlmIChoaWRlKSB7IC8vIHdlIHdpbGwgcG9wdWxhdGUgdGhlIGluc3RhbmNlcyBvbmx5IHdoZW4gYXBwbGV0IHNob3VsZCBiZSBoaWRkZW5cbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXR1cm4tYXNzaWduXG4gICAgICByZXQgPSBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHRoaXMucmVzb2x2ZVByb21pc2UgPSByZXNvbHZlKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wYXJhbS1hc3NpZ25cbiAgICAgIGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0ID0gcmV0LnRoZW4oY2IpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXQ7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=