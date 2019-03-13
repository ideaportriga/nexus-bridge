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

/***/ "./node_modules/core-js/modules/_array-methods.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-methods.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");

var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");

var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");

var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");

var asc = __webpack_require__(/*! ./_array-species-create */ "./node_modules/core-js/modules/_array-species-create.js");

module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;

    for (; length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);

      if (TYPE) {
        if (IS_MAP) result[index] = res; // map
        else if (res) switch (TYPE) {
            case 3:
              return true;
            // some

            case 5:
              return val;
            // find

            case 6:
              return index;
            // findIndex

            case 2:
              result.push(val);
            // filter
          } else if (IS_EVERY) return false; // every
      }
    }

    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};

/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-constructor.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-constructor.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js");

var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');

module.exports = function (original) {
  var C;

  if (isArray(original)) {
    C = original.constructor; // cross-realm fallback

    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;

    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  }

  return C === undefined ? Array : C;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-create.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-create.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(/*! ./_array-species-constructor */ "./node_modules/core-js/modules/_array-species-constructor.js");

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
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

/***/ "./node_modules/core-js/modules/es6.array.find.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.find.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var $find = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(5);

var KEY = 'find';
var forced = true; // Shouldn't skip holes

if (KEY in []) Array(1)[KEY](function () {
  forced = false;
});
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn
  /* , that = undefined */
  ) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")(KEY);

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

/***/ "./node_modules/core-js/modules/es7.array.includes.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.array.includes.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // https://github.com/tc39/Array.prototype.includes

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var $includes = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(true);

$export($export.P, 'Array', {
  includes: function includes(el
  /* , fromIndex = 0 */
  ) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")('includes');

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

/***/ "./node_modules/core-js/modules/es7.object.values.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.values.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var $values = __webpack_require__(/*! ./_object-to-array */ "./node_modules/core-js/modules/_object-to-array.js")(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
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

/***/ "./src/N19Helper.js":
/*!**************************!*\
  !*** ./src/N19Helper.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nexus19__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nexus19 */ "./src/nexus19.js");

SiebelAppFacade.N19Helper = _nexus19__WEBPACK_IMPORTED_MODULE_0__["default"];

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
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es6.array.find */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es7_object_values__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es7.object.values */ "./node_modules/core-js/modules/es7.object.values.js");
/* harmony import */ var core_js_modules_es7_object_values__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_object_values__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es6.object.keys */ "./node_modules/core-js/modules/es6.object.keys.js");
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es6.promise */ "./node_modules/core-js/modules/es6.promise.js");
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ "./node_modules/core-js/modules/es6.object.assign.js");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es7_object_entries__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es7.object.entries */ "./node_modules/core-js/modules/es7.object.entries.js");
/* harmony import */ var core_js_modules_es7_object_entries__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_object_entries__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es6.regexp.split */ "./node_modules/core-js/modules/es6.regexp.split.js");
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _n19notifications__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./n19notifications */ "./src/n19notifications.js");

















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
    this.fieldToControlMap = this._getFieldToControlMap();
    var bcId = this.applet.GetBCId();
    this.notifications = new _n19notifications__WEBPACK_IMPORTED_MODULE_16__["default"](this.pm, this.consts, bcId, this.fieldToControlMap); // populate the required array for form applets

    if (!this.isListApplet) {
      var appletId = "s_".concat(this.pm.Get('GetFullId'), "_div");
      var appletInputs = document.getElementById(appletId).querySelectorAll('input');
      appletInputs.forEach(function (el) {
        if (el.attributes['aria-required']) {
          _this.required.push(el.attributes.name.nodeValue);
        }
      });
    } // listener to get dynamic LOVs


    this.pm.AttachPMBinding('UpdateQuickPickInfo', function (inputName, arg, arr) {
      var viewName = _this.view.GetName();

      if (viewName === arr[1] && _this.appletName === arr[2]) {
        if ('false' === arr[4]) {
          // eslint-disable-next-line no-console
          console.warn("[N19]Picklist is not associated with the control - ".concat(JSON.stringify(arr)));
        }

        _this.lov[arr[3]] = arr.slice().splice(5).filter(function (el) {
          return el !== '';
        }); // TODO: do we need to indicate when an empty value is allowed?
      }
    }, {
      scope: this
    });
    this.isTreeApplet = SiebelAppFacade.ExplorerPresentationModel === this.pm.constructor;

    if (this.isTreeApplet) {
      // eslint-disable-next-line no-console
      console.warn('This is a tree applet... it is easier and safer to use list or form applets');
    }
  }

  _createClass(N19baseApplet, [{
    key: "loadLocaleData",
    value: function loadLocaleData() {
      var localeObject = SiebelApp.S_App.LocaleObject;
      var dateTimeFormat = localeObject.GetProfile(this.consts.get('LOCAL_DATETIME_FORMAT'));
      this.localeData = {
        firstDayOfWeek: localeObject.GetWeekStartDay(),
        dateFormat: localeObject.GetProfile(this.consts.get('LOCAL_DATE_FORMAT')),
        dateTimeFormat: dateTimeFormat,
        is24hoursFormat: !/p$/.test(dateTimeFormat),
        localCountryPhoneCode: localeObject.GetProfile(this.consts.get('LOCAL_PHONE_COUNTRY'))
      };
      this.localeData.months = [];
      this.localeData.shortMonths = [];
      var months = localeObject.GetData('Month', localeObject.m_spMonthPS);

      for (var i = 1; i <= 12; i += 1) {
        this.localeData.months.push(months.GetProperty("".concat(i, ":0")));
        this.localeData.shortMonths.push(months.GetProperty("".concat(i, ":1")));
      }

      var weekDays = localeObject.GetData('DayOfWeek', localeObject.m_spDayOfWeekPS);
      this.localeData.weekDays = [];
      this.localeData.weekDays3 = [];
      this.localeData.weekDays1 = [];

      for (var _i = 0; _i < 7; _i += 1) {
        this.localeData.weekDays.push(weekDays.GetProperty("".concat(_i, ":0")));
        this.localeData.weekDays3.push(weekDays.GetProperty("".concat(_i, ":1")));
        this.localeData.weekDays1.push(weekDays.GetProperty("".concat(_i, ":2")));
      }
    }
  }, {
    key: "subscribe",
    value: function subscribe(func) {
      // eslint-disable-line class-methods-use-this
      // TODO : accept also context for function, or the caller binds the context to the function?
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
      // TODO: numbers, currencies, and phones?
      if (this.consts.get('SWE_CTRL_CHECKBOX') === uiType) {
        // convert true/false => Y/N // null is not handled (the same as in standard Open UI)
        // value = value ? 'Y' : 'N';
        this.boolObject.SetValue(value);
        return this.boolObject.GetAsString();
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

      var arr = Object.entries(appletControls);
      arr.forEach(function (controlEntry) {
        var control = controlEntry[1];
        var uiType = control.GetUIType();

        var displayFormat = control.GetDisplayFormat() || _this2.getControlDisplayFormat(uiType);

        if (!_this2._isSkipControl(uiType)) {
          var name = controlEntry[0];
          var inputName = control.GetInputName();
          var fieldName = control.GetFieldName();
          var obj = {
            name: name,
            label: control.GetDisplayName(),
            uiType: uiType,
            required: _this2._isRequired(inputName),
            boundedPick: control.IsBoundedPick() === '1',
            staticPick: control.IsStaticBounded() === '1',
            inputName: inputName,
            isPostChanges: control.IsPostChanges(),
            maxSize: control.GetMaxSize(),
            fieldName: fieldName,
            isLink: _this2.pm.ExecuteMethod('CanNavigate', name),
            readonly: !_this2.pm.ExecuteMethod('CanUpdate', name),
            displayFormat: displayFormat,
            dataType: _this2.pm.ExecuteMethod('GetFieldDataType', fieldName)
          };
          Object.defineProperty(obj, 'readOnly', {
            get: function get() {
              // eslint-disable-next-line no-console
              console.warn('[N19]The readOnly property will be removed soon; use readonly instead of it.');
              return obj.readonly;
            }
          }); // add values to be displayed in the static pick list - 2 different formats for now

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
        }
      });
      return controls;
    }
  }, {
    key: "getRecordSet",
    value: function getRecordSet(addRecordIndex) {
      // TODO: convert the values?
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
      // TODO: convert the values?
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
        // if (this.getNumRows() < index + 1) {
        //   return false;
        // }


        if (this.getRowListRowCount() < index + 1) {
          throw new Error("".concat(index, " is equal/higher than amount of records in the applet ").concat(this.getRowListRowCount()));
        } // TODO: if we got to this point
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

      var promise = new Promise(function (resolve) {
        return _this3._newRecord(resolve);
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
      // 20190312 - changed from NewRecord to CreateRecord, #31
      return this.pm.ExecuteMethod('InvokeMethod', 'CreateRecord');
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
        // TODO: selfbusy: true,
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
        this.N19Confirm = SiebelApp.Utils.Confirm;

        SiebelApp.Utils.Confirm = function () {};
      } // do we need to try..catch and restore the function in catch ?


      var ret = this.pm.ExecuteMethod('InvokeMethod', 'DeleteRecord');

      if (skipConfirmDialog) {
        SiebelApp.Utils.Confirm = this.N19Confirm;
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
      var isStaticPick = this.isStatic(control);
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
    key: "_getControlStaticLOV",
    value: function _getControlStaticLOV(control) {
      this._validatePickControl(control, true);

      var arr = N19baseApplet.GetStaticLOV(control.GetRadioGroupPropSet().childArray);
      var ret = arr.map(function (el) {
        return el.DisplayName;
      });
      return ret.sort();
    }
  }, {
    key: "getLOV",
    value: function getLOV(controlName) {
      var control = this._getControl(controlName);

      if (this.isStatic(control)) {
        return this._getControlStaticLOV(control);
      }

      if (this.isDynamic(control)) {
        return this._getControlDynamicLOV(control);
      }

      throw new Error("".concat(controlName, " is not a static or a dynamic"));
    }
  }, {
    key: "getDynamicLOV",
    value: function getDynamicLOV(controlName) {
      var control = this._getControl(controlName);

      return this._getControlDynamicLOV(control);
    }
  }, {
    key: "getStaticLOV",
    value: function getStaticLOV(controlName) {
      var control = this._getControl(controlName);

      return this._getControlStaticLOV(control);
    }
  }, {
    key: "_getJSValue",
    value: function _getJSValue(value, uiType, displayFormat) {
      if (this.consts.get('SWE_CTRL_CHECKBOX') === uiType) {
        // convert Y/N/null -> true/false // null comes as false?
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
      // TODO: need conversion
      var index = this.getSelection(); // TODO: check if there is a record
      // TODO: make a copy of returned object (to avoid the accidental modification of the recordset)?

      if (raw) {
        return this.getRawRecordSet()[index];
      }

      return this.getRecordSet()[index];
    }
  }, {
    key: "calculateCurrentRecordState",
    value: function calculateCurrentRecordState() {
      // TODO: do we need to delete pending
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
        // seems the insertPending property gives more accurate value
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
      var _this5 = this;

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

      var appletControls = this._returnControls(); // populate controls


      var arr = Object.keys(_controls);
      arr.forEach(function (controlName) {
        var control = appletControls[controlName];

        if (typeof control === 'undefined') {
          // just if somebody sends incorrect name of the control
          return;
        }

        var fieldName = control.GetFieldName();
        var uiType = control.GetUIType();

        var displayFormat = control.GetDisplayFormat() || _this5.getControlDisplayFormat(uiType);

        if (_controls.id) {
          _controls[controlName] = {
            // eslint-disable-line no-param-reassign
            value: _this5._getJSValue(obj[fieldName], control.GetUIType(), displayFormat),
            uiType: uiType,
            readonly: !_this5.pm.ExecuteMethod('CanUpdate', controlName),
            isLink: _this5.pm.ExecuteMethod('CanNavigate', controlName),
            label: control.GetDisplayName(),
            isPostChanges: control.IsPostChanges(),
            required: _this5._isRequired(control.GetInputName()),
            maxSize: control.GetMaxSize(),
            fieldName: fieldName,
            displayFormat: displayFormat
          };
        } else {
          // no record displayed
          _controls[controlName] = {
            // eslint-disable-line no-param-reassign
            value: '',
            uiType: uiType,
            readonly: _controls.state !== 3,
            // should be edittable in query mode
            isLink: false,
            label: control.GetDisplayName(),
            isPostChanges: control.IsPostChanges(),
            required: _this5._isRequired(control.GetInputName()),
            maxSize: control.GetMaxSize(),
            fieldName: fieldName,
            displayFormat: displayFormat
          };
        }
      }); // populate methods

      if (_methods) {
        arr = Object.keys(_methods); // TODO: could be an exception if method name is incorrect
        // eslint-disable-next-line no-param-reassign

        arr.forEach(function (methodName) {
          _methods[methodName] = _this5.canInvokeMethod(methodName);
        });
      }

      return {
        controls: _controls,
        methods: _methods
      };
    }
  }, {
    key: "_findControlToEnterSearchExpr",
    value: function _findControlToEnterSearchExpr() {
      var _this6 = this;

      var appletControls = this._returnControls();

      var arr = Object.values(appletControls);
      var found = arr.find(function (control) {
        var controlUiType = control.GetUIType();

        if (!_this6._isSkipControl(controlUiType)) {
          // skipping also JCheckbox
          return controlUiType !== _this6.consts.get('SWE_CTRL_CHECKBOX');
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
      this._newQuery(); // ? check or optionally skip


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
      var _this7 = this;

      var promise = new Promise(function (resolve) {
        return _this7._queryById(rowId, resolve);
      });
      var ret = promise.then(function () {
        return _this7.getRecordSet().length;
      });
      return typeof cb === 'function' ? ret.then(cb) : ret;
    }
  }, {
    key: "_queryById",
    value: function _queryById(rowId, cb) {
      this._newQuery(); // ? check or optionally skip


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
      var _this8 = this;

      var promise = new Promise(function (resolve) {
        return _this8._query(params, resolve);
      });
      var ret = promise.then(function () {
        return _this8.getRecordSet().length;
      });
      return typeof cb === 'function' ? ret.then(cb) : ret;
    }
  }, {
    key: "_query",
    value: function _query(params, cb) {
      var _this9 = this;

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
          _this9._setControlValueInternal(control, _this9._getSiebelValue(params[controlName], control.GetUIType()));
        } else {
          console.error("The control \"".concat(controlName, "\" is not found!")); // eslint-disable-line no-console
        }
      });
      return this.pm.ExecuteMethod('InvokeMethod', 'ExecuteQuery', null, ai);
    }
  }, {
    key: "getMVF",
    value: function getMVF(ids, fields, useActiveBO) {
      var _this10 = this;

      return new Promise(function (resolve, reject) {
        return _this10._getMVF(ids, fields, useActiveBO, resolve, reject);
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
      var _this11 = this;

      var arr = Object.entries(fields);
      var psInputs = SiebelApp.S_App.NewPropertySet();
      psInputs.SetProperty('BO', SiebelApp.S_App.GetActiveBusObj().GetName());
      psInputs.SetProperty('BC', this.pm.Get('GetBusComp').GetName());
      psInputs.SetProperty('UseActiveBO', useActiveBO ? 'Y' : 'N');
      psInputs.SetProperty('ID', ids.join(','));
      arr.forEach(function (el) {
        var ps = SiebelApp.S_App.NewPropertySet();
        ps.SetType(_this11._getFieldNameForControl(el[0]));
        ps.SetProperty('Fields', el[1].join(','));
        psInputs.AddChild(ps.Clone());
      });
      var bs = SiebelApp.S_App.GetService('N19 BS');
      var ai = {
        async: true,
        selfbusy: true,
        scope: this,
        errcb: function errcb() {
          reject();
        },
        cb: function cb(methodName, Inputs, psOutputs) {
          var ret = {};

          var _ref = psOutputs.GetChildByType('ResultSet') || {},
              childArray = _ref.childArray; // to be safe when no results


          (childArray || []).forEach(function (child) {
            ret[child.GetType()] = {};
            child.childArray.forEach(function (grandChild) {
              ret[child.GetType()][grandChild.GetType()] = grandChild.childArray.map(function (rec) {
                var primary = rec.propArray['SSA Primary Field'];

                _this11.boolObject.SetAsString(primary);

                rec.propArray['SSA Primary Field'] = _this11.boolObject.GetValue(); // eslint-disable-line no-param-reassign

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
      // temp method - will be removed
      var data = new Map();

      while (data.size < amount) {
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
      var _this12 = this;

      var ret = {};

      var appletControls = this._returnControls();

      var arr = Object.keys(_controls || appletControls);
      arr.forEach(function (controlName) {
        var control = appletControls[controlName];
        var fieldName = control.GetFieldName();

        if (fieldName) {
          var uiType = control.GetUIType();
          ret[fieldName] = {
            name: controlName,
            isPostChanges: control.IsPostChanges(),
            uiType: uiType,
            displayFormat: control.GetDisplayFormat() || _this12.getControlDisplayFormat(uiType)
          };
        }
      });
      return ret;
    }
  }, {
    key: "getControlsRecordSet",
    value: function getControlsRecordSet() {
      var _this13 = this;

      // used slice to avoid modification of the record set
      var ret = this.getRecordSet().slice();
      var rawRecordSet = this.getRawRecordSet(); // just fallback if record set does not have Id

      var _loop = function _loop(i, len) {
        var id = ret[i].Id;
        ret[i] = Object.keys(ret[i]).filter(function (el) {
          return _this13.fieldToControlMap[el];
        }).reduce(function (acc, el) {
          return _objectSpread({}, acc, _defineProperty({}, _this13.fieldToControlMap[el].name, _this13._getJSValue(ret[i][el], _this13.fieldToControlMap[el].uiType, _this13.fieldToControlMap[el].displayFormat)));
        }, {});

        if (id) {
          ret[i].Id = id;
        } else {
          ret[i].Id = rawRecordSet[i].Id;
        }
      };

      for (var i = 0, len = ret.length; i < len; i += 1) {
        _loop(i, len);
      }

      return ret;
    }
  }, {
    key: "sort",
    value: function sort(controlName, isAscending) {
      // TODO: check if sortable? e.g. not in query mode
      // TODO: check if we can sort by this control? control has IsSortable func, but we don't return the output of it
      if (this.isListApplet) {
        var sortOrder = isAscending ? this.consts.get('SORT_ASCENDING') : this.consts.get('SORT_DESCENDING');
        this.applet.OnClickSort(controlName, sortOrder);
        return true;
      }

      return false;
    }
  }], [{
    key: "GetStaticLOV",
    value: function GetStaticLOV(arr) {
      return arr.map(function (el) {
        return el.propArray;
      });
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
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es7.array.includes */ "./node_modules/core-js/modules/es7.array.includes.js");
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_1__);



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var N19notifications =
/*#__PURE__*/
function () {
  function N19notifications(pm, consts, bcId, fieldToControlMap) {
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
      var states = ['cp', 'n'];

      if (bcId === propSet.GetProperty('bc')) {
        if (!states.includes(propSet.GetProperty('state'))) {
          receivedNotifications.push('SWE_PROP_BC_NOTI_STATE_CHANGED');
        }
      }
    }); // or SWE_PROP_BC_NOTI_NEW_FIELD_DATA?

    pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_NEW_DATA_WS'), function (propSet) {
      if (bcId === propSet.GetProperty('bc')) {
        var fieldName = propSet.GetProperty(consts.get('SWE_PROP_NOTI_FIELD'));
        var control = fieldToControlMap[fieldName];

        if (control && control.uiType !== consts.get('SWE_CTRL_MVG')) {
          receivedNotifications.push('SWE_PROP_BC_NOTI_NEW_DATA_WS');
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
          // we assume that the function does not throw an error, so no error handling here
          _this.subscribers.forEach(function (el) {
            return el.func();
          });
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
      for (var i = 0, len = this.subscribers.length; i < len; i += 1) {
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
      // TODO: check canInokeMethod?
      return this.pm.ExecuteMethod('InvokeMethod', 'PickRecord');
    }
  }, {
    key: "deleteRecords",
    value: function deleteRecords(cb) {
      // method is not allowed to delete the primary for visibility MVG
      //  in this case it returns "Method DeleteRecords is not allowed here" SBL-UIF-00348
      // TODO: check canInvokeMethod?
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
      // TODO: check canInvokeMethod?
      var ret = this.pm.ExecuteMethod('InvokeMethod', 'DeleteAllRecords');

      if (typeof cb === 'function') {
        cb();
      }

      return ret;
    }
  }, {
    key: "addRecords",
    value: function addRecords(cb) {
      // TODO: check canInvokeMethod?
      var ret = this.pm.ExecuteMethod('InvokeMethod', 'AddRecords');

      if (typeof cb === 'function') {
        cb();
      }

      return ret;
    }
  }, {
    key: "addAllRecords",
    value: function addAllRecords(cb) {
      // TODO: check canInvokeMethod?
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

    this.N19resizeAvailable = SiebelApp.MvgBeautifier.resizeAvailable;

    SiebelApp.MvgBeautifier.resizeAvailable = function () {
      try {
        _this.N19resizeAvailable.call(SiebelApp.MvgBeautifier);
      } catch (e) {
        console.log("resizeAvailable Error: ".concat(e.name, " ").concat(e.message)); // eslint-disable-line no-console
      }
    }; // it will be a singleton, so there is no cleanup


    this.N19processNewPopup = SiebelApp.S_App.ProcessNewPopup;

    SiebelApp.S_App.ProcessNewPopup = function (ps) {
      var ret;

      if (_this.isPopupHidden) {
        ret = _this.processNewPopup(ps);
        _this.isPopupHidden = false; // in order to do not affect the next call
      } else {
        ret = _this.N19processNewPopup.call(SiebelApp.S_App, ps);
      }

      return ret;
    }; // we could use pm.AttachPostProxyExecuteBinding for 'EditField', pm exists, but GetRenderer returns null
    // open until we get rid of GetRenderer (Oracle review)
    // other option - resolve it in SiebelApp.contentUpdater.viewLoaded


    SiebelApp.S_App.GetPopupPM().AttachPMBinding('OnLoadPopupContent', function () {
      if (typeof _this.resolvePromise === 'function') {
        var _N19popupController$I = N19popupController.IsPopupOpen(),
            appletName = _N19popupController$I.appletName;

        if (!appletName) {
          throw new Error('Open Applet Name is not found in OnLoadPopupContent resolving Promise');
        }

        var applet = N19popupController.GetPopupApplet(appletName);
        _this.popupAppletN19 = new _n19popupApplet__WEBPACK_IMPORTED_MODULE_5__["default"]({
          pm: applet.GetPModel()
        });
        var obj = {
          appletName: appletName,
          popupAppletN19: _this.popupAppletN19
        };
        var assocApplet = applet.GetPopupApplet(); // is it always assoc?

        if (assocApplet) {
          // we got a shuttle
          _this.assocAppletN19 = new _n19popupApplet__WEBPACK_IMPORTED_MODULE_5__["default"]({
            pm: assocApplet.GetPModel()
          });
          obj.assocAppletN19 = _this.assocAppletN19;
          obj.availableRecordSet = _this.assocAppletN19.getControlsRecordSet();
          obj.selectedRecordSet = _this.popupAppletN19.getControlsRecordSet();
        } else {
          // assoc only OR pick
          obj.availableRecordSet = _this.popupAppletN19.getControlsRecordSet();
        }

        _this.resolvePromise(obj);

        _this.resolvePromise = null;
      }
    });
  }

  _createClass(N19popupController, [{
    key: "canOpenPopup",
    value: function canOpenPopup() {
      return typeof this.resolvePromise !== 'function';
    }
  }, {
    key: "processNewPopup",
    value: function processNewPopup(ps) {
      var popupPM = SiebelApp.S_App.GetPopupPM();

      if (!popupPM.GetRenderer()) {
        popupPM.Setup(); // to create PR
      }

      var activeView = SiebelApp.S_App.GetActiveView();
      var activeApplet = activeView.GetActiveApplet();

      if (activeApplet) {
        activeView.SetActiveAppletBeforePopup(activeApplet);
      } // this property is added using AttachPMBinding into the Init PR (called by PM Setup)
      // it is the reason why we have reinit procedure where Setup PM is called


      popupPM.AddProperty('state', this.consts.get('POPUP_STATE_VISIBLE'));
      var url = ps.GetProperty('URL');
      url = SiebelApp.S_App.GetPageURL() + url.split('start.swe')[1];
      popupPM.SetProperty('url', url);
      return 'refreshpopup';
    }
  }, {
    key: "closePopupApplet",
    value: function closePopupApplet(applet) {
      // TODO: check canInvokeMethod?
      var ret;

      if (applet) {
        var isPopupApplet = typeof applet.GetPopupAppletName === 'function';
        var isPickApplet = typeof applet.GetPickAppletName === 'function';

        if (!isPopupApplet && !isPickApplet) {
          throw new Error('This applet is neither pick nor popup');
        }

        ret = applet.GetPModel().ExecuteMethod('InvokeMethod', 'CloseApplet');
      } else {
        ret = this.popupAppletN19.applet.GetPModel().ExecuteMethod('InvokeMethod', 'CloseApplet');
      } // it could be better if we don't have a Siebel Applet on the view
      // do reinit here on closing?


      this.popupAppletN19 = null;
      this.assocAppletN19 = null;
      return ret;
    }
  }, {
    key: "checkOpenedPopup",
    value: function checkOpenedPopup(closeIfOpen) {
      var _N19popupController$I2 = N19popupController.IsPopupOpen(),
          isOpen = _N19popupController$I2.isOpen,
          appletName = _N19popupController$I2.appletName;

      if (isOpen && closeIfOpen) {
        // this code will close the applet even if this applet was originated by another applet
        console.log("closing ".concat(appletName, " in showPopupApplet...")); // eslint-disable-line no-console
        // maybe do not close if the applet to be opened if the same as already opened?

        return this.closePopupApplet(N19popupController.GetPopupApplet(appletName));
      }

      return {
        isOpen: isOpen,
        appletName: appletName
      };
    }
  }, {
    key: "_openAssocApplet",
    value: function _openAssocApplet(newRecordFunc, cb) {
      var _this2 = this;

      this.checkOpenedPopup(true);
      this.isPopupHidden = true;
      newRecordFunc(); // make async of invokeMethod?

      var ret = new Promise(function (resolve) {
        _this2.resolvePromise = resolve;
      });

      if (typeof cb === 'function') {
        ret = ret.then(cb);
      }

      return ret;
    }
  }, {
    key: "showPopupApplet",
    value: function showPopupApplet(hide, cb, n19) {
      var _this3 = this;

      // TODO: maybe use the properties set on promise resolving?
      this.checkOpenedPopup(true);
      this.isPopupHidden = !!hide;
      n19.pm.ExecuteMethod('InvokeMethod', 'EditPopup'); // can call EditField?

      if (hide) {
        // we will populate the instances only when applet should be hidden
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
  }], [{
    key: "IsPopupOpen",
    value: function IsPopupOpen() {
      // safer to keep this method, even when we set some properties on resolve?
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
        // is this always a shuttle when we have a sedond applet
        for (var i = 0, len = currPopups.length; i < len; i += 1) {
          if (typeof currPopups[1].GetPopupAppletName === 'function') {
            return {
              isOpen: true,
              appletName: currPopups[i].GetName(),
              controlName: currPopups[i].GetPopupControl()
            };
          }
        }

        throw new Error('Mvg applet is not found...');
      }

      throw new Error('should not be here...');
    }
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

/***/ "./src/nexus19.js":
/*!************************!*\
  !*** ./src/nexus19.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return nexus19; });
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es7.symbol.async-iterator */ "./node_modules/core-js/modules/es7.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.promise */ "./node_modules/core-js/modules/es6.promise.js");
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ "./node_modules/core-js/modules/es6.object.assign.js");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _n19baseApplet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./n19baseApplet */ "./src/n19baseApplet.js");
/* harmony import */ var _n19popupController__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./n19popupController */ "./src/n19popupController.js");





function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var nexus19 =
/*#__PURE__*/
function (_N19baseApplet) {
  _inherits(nexus19, _N19baseApplet);

  function nexus19(settings) {
    var _this;

    _classCallCheck(this, nexus19);

    var appletName = settings.appletName;

    if (appletName) {
      var applet = SiebelApp.S_App.GetActiveView().GetApplet(appletName);

      if (!applet) {
        throw new Error("Failed to get the reference to the applet by the ".concat(appletName, " name"));
      }

      _this = _possibleConstructorReturn(this, _getPrototypeOf(nexus19).call(this, Object.assign({}, settings, {
        pm: applet.GetPModel()
      })));
    } else {
      _this = _possibleConstructorReturn(this, _getPrototypeOf(nexus19).call(this, settings));
    }

    console.log('Nexus main class started....', _this.appletName); // eslint-disable-line no-console
    // get the n19popupController singleton instance

    _this.n19popupController = _n19popupController__WEBPACK_IMPORTED_MODULE_5__["default"].instance;
    return _possibleConstructorReturn(_this);
  }

  _createClass(nexus19, [{
    key: "closePopupApplet",
    value: function closePopupApplet() {
      return this.n19popupController.closePopupApplet();
    }
  }, {
    key: "_showPopupApplet",
    value: function _showPopupApplet(name, hide, cb) {
      if (!this.n19popupController) {
        // it is a popup - probably should never happen?
        throw new Error('Openning popup on the popup is not supported now');
      }

      if (!this.n19popupController.canOpenPopup()) {
        throw new Error('Cannot open popup (currently exists resolve function)!'); // return false;
      }

      this.view.SetActiveAppletInternal(this.applet); // or SetActiveApplet

      this._setActiveControl(name);

      return this.n19popupController.showPopupApplet(hide, cb, this);
    }
  }, {
    key: "showMvgApplet",
    value: function showMvgApplet(name, hide, cb) {
      // TODO: check if name is correct?
      return this._showPopupApplet(name, hide, cb);
    }
  }, {
    key: "showPickApplet",
    value: function showPickApplet(name, hide, cb) {
      // TODO: check if name is correct?
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
    value: function openAssocApplet(cb) {
      // this method should be available for child business component in M:M relationship
      // TODO: check if applet provides such capabilities?
      if (!this.n19popupController.canOpenPopup()) {
        throw new Error('Cannot open popup (currently exists resolve function)!');
      }

      return this.n19popupController._openAssocApplet(this._newAssocRecord.bind(this), cb);
    }
  }, {
    key: "drilldown",
    value: function drilldown(controlName) {
      // TODO: check isLink of control?
      // index is not effective, and drilldown anyway happens on the selected record
      if (!this.isListApplet) {
        return false;
      }

      var index = this.getSelection();
      return this.pm.ExecuteMethod('OnDrillDown', controlName, index);
    }
  }, {
    key: "gotoView",
    value: function gotoView(targetViewName, targetAppletName, id) {
      // TODO: get the applet name from the view definition?
      var rowId = typeof id === 'undefined' ? this.getCurrentRecord(true).Id : id;
      var SWECmd = "GotoView&SWEView=".concat(targetViewName, "&SWEApplet0=").concat(targetAppletName);
      SWECmd += "&SWEBU=1&SWEKeepContext=FALSE&SWERowId0=".concat(rowId);
      SWECmd = encodeURI(SWECmd);
      SiebelApp.S_App.GotoView(targetViewName, '', SWECmd, '');
    }
  }, {
    key: "reInitPopup",
    value: function reInitPopup() {
      // do we need to keep also static ReInitPopup
      this.n19popupController.isPopupHidden = false;
      var popupPM = SiebelApp.S_App.GetPopupPM();
      popupPM.Init();
      popupPM.Setup();
    }
  }, {
    key: "pickRecordById",
    value: function pickRecordById(controlName, rowId) {
      // TODO: check if the control allows picking?
      return this.showPickApplet(controlName, true).then(function (obj) {
        return new Promise(function (resolve) {
          return setTimeout(function () {
            return resolve(obj);
          }, 0);
        });
      }).then(function (obj) {
        var found = obj.popupAppletN19.queryByIdSync(rowId);

        if (found !== 1) {
          throw new Error("The record ".concat(rowId, " is not found (").concat(found, ")"));
        }

        return obj.popupAppletN19.pickRecord();
      });
    }
  }, {
    key: "assocRecordsById",
    value: function assocRecordsById(controlName, arr, closeApplet) {
      var _this3 = this;

      // TODO: check if the control allows mvg?
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
            // should we throw an error?
            // eslint-disable-next-line no-console
            console.warn("The amount of found records(".concat(found, ") does not match to input array length(").concat(arr.length, ")"));
          }

          if (found > 0) {
            // we have something to add
            obj.popupAppletN19.addAllRecords();
          }

          if (closeApplet) {
            _this3.closePopupApplet();

            resolve(found);
          } else {
            obj.found = found; // eslint-disable-line no-param-reassign

            resolve(obj);
          }
        });
      });
    }
  }], [{
    key: "ReInitPopup",
    value: function ReInitPopup() {
      // could be removed in the next version
      var popupPM = SiebelApp.S_App.GetPopupPM();
      popupPM.Init();
      popupPM.Setup();
    }
  }]);

  return nexus19;
}(_n19baseApplet__WEBPACK_IMPORTED_MODULE_4__["default"]);



/***/ }),

/***/ 0:
/*!********************************!*\
  !*** multi ./src/N19Helper.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\apps\n19helper/src/N19Helper.js */"./src/N19Helper.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYW4taW5zdGFuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FycmF5LW1ldGhvZHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYXJyYXktc3BlY2llcy1jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hcnJheS1zcGVjaWVzLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jbGFzc29mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NvZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jb2xsZWN0aW9uLXN0cm9uZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jb2xsZWN0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY3JlYXRlLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2N0eC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19kZWZpbmVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2RvbS1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19lbnVtLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZXhwb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2ZhaWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2ZpeC1yZS13a3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZmxhZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZm9yLW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19oYXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faGlkZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19odG1sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2luaGVyaXQtaWYtcmVxdWlyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faW52b2tlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2lvYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXMtYXJyYXktaXRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pcy1hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pcy1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXMtcmVnZXhwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXItY2FsbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyLWRldGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyLXN0ZXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlcmF0b3JzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2xpYnJhcnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fbWV0YS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19taWNyb3Rhc2suanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fbmV3LXByb21pc2UtY2FwYWJpbGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtYXNzaWduLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWRwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1kcHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdvcGQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdvcG4tZXh0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1nb3BuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1nb3BzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1ncG8uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LXBpZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3Qtc2FwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC10by1hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19wZXJmb3JtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3Byb21pc2UtcmVzb2x2ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3JlZGVmaW5lLWFsbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19yZWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zZXQtcHJvdG8uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc2V0LXNwZWNpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc2hhcmVkLWtleS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc3BlY2llcy1jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zdHJpbmctYXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdGFzay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1hYnNvbHV0ZS1pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWlvYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1wcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdWlkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3VzZXItYWdlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdmFsaWRhdGUtY29sbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL193a3MtZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3drcy1leHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fd2tzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmZpbmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuZnJvbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5mdW5jdGlvbi5uYW1lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnByb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLmZsYWdzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5zcGxpdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAudG8tc3RyaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcuYXJyYXkuaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcub2JqZWN0LmVudHJpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcub2JqZWN0LnZhbHVlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzIiwid2VicGFjazovLy8uL3NyYy9OMTlIZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL24xOWJhc2VBcHBsZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL24xOW5vdGlmaWNhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL24xOXBvcHVwQXBwbGV0LmpzIiwid2VicGFjazovLy8uL3NyYy9uMTlwb3B1cENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL25leHVzMTkuanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsIml0IiwiVHlwZUVycm9yIiwiVU5TQ09QQUJMRVMiLCJyZXF1aXJlIiwiQXJyYXlQcm90byIsIkFycmF5IiwicHJvdG90eXBlIiwidW5kZWZpbmVkIiwia2V5IiwiQ29uc3RydWN0b3IiLCJuYW1lIiwiZm9yYmlkZGVuRmllbGQiLCJpc09iamVjdCIsInRvSU9iamVjdCIsInRvTGVuZ3RoIiwidG9BYnNvbHV0ZUluZGV4IiwiSVNfSU5DTFVERVMiLCIkdGhpcyIsImVsIiwiZnJvbUluZGV4IiwiTyIsImxlbmd0aCIsImluZGV4IiwidmFsdWUiLCJjdHgiLCJJT2JqZWN0IiwidG9PYmplY3QiLCJhc2MiLCJUWVBFIiwiJGNyZWF0ZSIsIklTX01BUCIsIklTX0ZJTFRFUiIsIklTX1NPTUUiLCJJU19FVkVSWSIsIklTX0ZJTkRfSU5ERVgiLCJOT19IT0xFUyIsImNyZWF0ZSIsImNhbGxiYWNrZm4iLCJ0aGF0Iiwic2VsZiIsImYiLCJyZXN1bHQiLCJ2YWwiLCJyZXMiLCJwdXNoIiwiaXNBcnJheSIsIlNQRUNJRVMiLCJvcmlnaW5hbCIsIkMiLCJjb25zdHJ1Y3RvciIsInNwZWNpZXNDb25zdHJ1Y3RvciIsImNvZiIsIlRBRyIsIkFSRyIsImFyZ3VtZW50cyIsInRyeUdldCIsImUiLCJUIiwiQiIsIk9iamVjdCIsImNhbGxlZSIsInRvU3RyaW5nIiwiY2FsbCIsInNsaWNlIiwiZFAiLCJyZWRlZmluZUFsbCIsImFuSW5zdGFuY2UiLCJmb3JPZiIsIiRpdGVyRGVmaW5lIiwic3RlcCIsInNldFNwZWNpZXMiLCJERVNDUklQVE9SUyIsImZhc3RLZXkiLCJ2YWxpZGF0ZSIsIlNJWkUiLCJnZXRFbnRyeSIsImVudHJ5IiwiX2kiLCJfZiIsIm4iLCJrIiwiZ2V0Q29uc3RydWN0b3IiLCJ3cmFwcGVyIiwiTkFNRSIsIkFEREVSIiwiaXRlcmFibGUiLCJfdCIsIl9sIiwiY2xlYXIiLCJkYXRhIiwiciIsInAiLCJpIiwibmV4dCIsInByZXYiLCJmb3JFYWNoIiwidiIsImhhcyIsImdldCIsImRlZiIsInNldFN0cm9uZyIsIml0ZXJhdGVkIiwia2luZCIsIl9rIiwiZ2xvYmFsIiwiJGV4cG9ydCIsInJlZGVmaW5lIiwibWV0YSIsImZhaWxzIiwiJGl0ZXJEZXRlY3QiLCJzZXRUb1N0cmluZ1RhZyIsImluaGVyaXRJZlJlcXVpcmVkIiwibWV0aG9kcyIsImNvbW1vbiIsIklTX1dFQUsiLCJCYXNlIiwicHJvdG8iLCJmaXhNZXRob2QiLCJLRVkiLCJmbiIsImEiLCJhZGQiLCJzZXQiLCJiIiwiZW50cmllcyIsIk5FRUQiLCJpbnN0YW5jZSIsIkhBU05UX0NIQUlOSU5HIiwiVEhST1dTX09OX1BSSU1JVElWRVMiLCJBQ0NFUFRfSVRFUkFCTEVTIiwiaXRlciIsIkJVR0dZX1pFUk8iLCIkaW5zdGFuY2UiLCJ0YXJnZXQiLCJHIiwiVyIsIkYiLCJjb3JlIiwidmVyc2lvbiIsIl9fZSIsIiRkZWZpbmVQcm9wZXJ0eSIsImNyZWF0ZURlc2MiLCJvYmplY3QiLCJhRnVuY3Rpb24iLCJjIiwiYXBwbHkiLCJkZWZpbmVQcm9wZXJ0eSIsImRvY3VtZW50IiwiaXMiLCJjcmVhdGVFbGVtZW50Iiwic3BsaXQiLCJnZXRLZXlzIiwiZ09QUyIsInBJRSIsImdldFN5bWJvbHMiLCJzeW1ib2xzIiwiaXNFbnVtIiwiaGlkZSIsIlBST1RPVFlQRSIsInR5cGUiLCJzb3VyY2UiLCJJU19GT1JDRUQiLCJJU19HTE9CQUwiLCJJU19TVEFUSUMiLCJTIiwiSVNfUFJPVE8iLCJQIiwiSVNfQklORCIsImV4cFByb3RvIiwib3duIiwib3V0IiwiZXhwIiwiRnVuY3Rpb24iLCJVIiwiUiIsImV4ZWMiLCJkZWZpbmVkIiwid2tzIiwiU1lNQk9MIiwiZm5zIiwic3RyZm4iLCJyeGZuIiwiU3RyaW5nIiwiUmVnRXhwIiwic3RyaW5nIiwiYXJnIiwiYW5PYmplY3QiLCJpZ25vcmVDYXNlIiwibXVsdGlsaW5lIiwidW5pY29kZSIsInN0aWNreSIsImlzQXJyYXlJdGVyIiwiZ2V0SXRlckZuIiwiQlJFQUsiLCJSRVRVUk4iLCJJVEVSQVRPUiIsIml0ZXJGbiIsIml0ZXJhdG9yIiwiZG9uZSIsIndpbmRvdyIsIk1hdGgiLCJfX2ciLCJoYXNPd25Qcm9wZXJ0eSIsImRvY3VtZW50RWxlbWVudCIsInNldFByb3RvdHlwZU9mIiwiYXJncyIsInVuIiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJJdGVyYXRvcnMiLCJNQVRDSCIsImlzUmVnRXhwIiwicmV0IiwiZGVzY3JpcHRvciIsIkl0ZXJhdG9yUHJvdG90eXBlIiwiTElCUkFSWSIsIiRpdGVyQ3JlYXRlIiwiZ2V0UHJvdG90eXBlT2YiLCJCVUdHWSIsImtleXMiLCJGRl9JVEVSQVRPUiIsIktFWVMiLCJWQUxVRVMiLCJyZXR1cm5UaGlzIiwiREVGQVVMVCIsIklTX1NFVCIsIkZPUkNFRCIsImdldE1ldGhvZCIsInZhbHVlcyIsIkRFRl9WQUxVRVMiLCJWQUxVRVNfQlVHIiwiJG5hdGl2ZSIsIiRkZWZhdWx0IiwiJGVudHJpZXMiLCIkYW55TmF0aXZlIiwiU0FGRV9DTE9TSU5HIiwicml0ZXIiLCJmcm9tIiwic2tpcENsb3NpbmciLCJzYWZlIiwiYXJyIiwiTUVUQSIsInNldERlc2MiLCJpZCIsImlzRXh0ZW5zaWJsZSIsIkZSRUVaRSIsInByZXZlbnRFeHRlbnNpb25zIiwic2V0TWV0YSIsInciLCJnZXRXZWFrIiwib25GcmVlemUiLCJtYWNyb3Rhc2siLCJPYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJXZWJLaXRNdXRhdGlvbk9ic2VydmVyIiwicHJvY2VzcyIsIlByb21pc2UiLCJpc05vZGUiLCJoZWFkIiwibGFzdCIsIm5vdGlmeSIsImZsdXNoIiwicGFyZW50IiwiZG9tYWluIiwiZXhpdCIsImVudGVyIiwibmV4dFRpY2siLCJuYXZpZ2F0b3IiLCJzdGFuZGFsb25lIiwidG9nZ2xlIiwibm9kZSIsImNyZWF0ZVRleHROb2RlIiwib2JzZXJ2ZSIsImNoYXJhY3RlckRhdGEiLCJyZXNvbHZlIiwicHJvbWlzZSIsInRoZW4iLCJ0YXNrIiwiUHJvbWlzZUNhcGFiaWxpdHkiLCJyZWplY3QiLCIkJHJlc29sdmUiLCIkJHJlamVjdCIsIiRhc3NpZ24iLCJhc3NpZ24iLCJBIiwiU3ltYm9sIiwiSyIsImpvaW4iLCJhTGVuIiwiY29uY2F0IiwiaiIsImRQcyIsImVudW1CdWdLZXlzIiwiSUVfUFJPVE8iLCJFbXB0eSIsImNyZWF0ZURpY3QiLCJpZnJhbWUiLCJsdCIsImd0IiwiaWZyYW1lRG9jdW1lbnQiLCJzdHlsZSIsImRpc3BsYXkiLCJhcHBlbmRDaGlsZCIsInNyYyIsImNvbnRlbnRXaW5kb3ciLCJvcGVuIiwid3JpdGUiLCJjbG9zZSIsIlByb3BlcnRpZXMiLCJJRThfRE9NX0RFRklORSIsInRvUHJpbWl0aXZlIiwiQXR0cmlidXRlcyIsImRlZmluZVByb3BlcnRpZXMiLCJnT1BEIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiZ09QTiIsIndpbmRvd05hbWVzIiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsImdldFdpbmRvd05hbWVzIiwiJGtleXMiLCJoaWRkZW5LZXlzIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwiT2JqZWN0UHJvdG8iLCJhcnJheUluZGV4T2YiLCJuYW1lcyIsImlzRW50cmllcyIsIm5ld1Byb21pc2VDYXBhYmlsaXR5IiwieCIsInByb21pc2VDYXBhYmlsaXR5IiwiYml0bWFwIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiU1JDIiwiVE9fU1RSSU5HIiwiJHRvU3RyaW5nIiwiVFBMIiwiaW5zcGVjdFNvdXJjZSIsImlzRnVuY3Rpb24iLCJjaGVjayIsInRlc3QiLCJidWdneSIsIl9fcHJvdG9fXyIsInRhZyIsInN0YXQiLCJzaGFyZWQiLCJ1aWQiLCJTSEFSRUQiLCJzdG9yZSIsIm1vZGUiLCJjb3B5cmlnaHQiLCJEIiwidG9JbnRlZ2VyIiwicG9zIiwicyIsImwiLCJjaGFyQ29kZUF0IiwiY2hhckF0IiwiaW52b2tlIiwiaHRtbCIsImNlbCIsInNldFRhc2siLCJzZXRJbW1lZGlhdGUiLCJjbGVhclRhc2siLCJjbGVhckltbWVkaWF0ZSIsIk1lc3NhZ2VDaGFubmVsIiwiRGlzcGF0Y2giLCJjb3VudGVyIiwicXVldWUiLCJPTlJFQURZU1RBVEVDSEFOR0UiLCJkZWZlciIsImNoYW5uZWwiLCJwb3J0IiwicnVuIiwibGlzdGVuZXIiLCJldmVudCIsIm5vdyIsInBvcnQyIiwicG9ydDEiLCJvbm1lc3NhZ2UiLCJwb3N0TWVzc2FnZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJpbXBvcnRTY3JpcHRzIiwicmVtb3ZlQ2hpbGQiLCJzZXRUaW1lb3V0IiwibWF4IiwibWluIiwiY2VpbCIsImZsb29yIiwiaXNOYU4iLCJ2YWx1ZU9mIiwicHgiLCJyYW5kb20iLCJ1c2VyQWdlbnQiLCJ3a3NFeHQiLCIkU3ltYm9sIiwiVVNFX1NZTUJPTCIsIiRleHBvcnRzIiwiY2xhc3NvZiIsImdldEl0ZXJhdG9yTWV0aG9kIiwiJGZpbmQiLCJmb3JjZWQiLCJmaW5kIiwiY3JlYXRlUHJvcGVydHkiLCJhcnJheUxpa2UiLCJtYXBmbiIsIm1hcHBpbmciLCJhZGRUb1Vuc2NvcGFibGVzIiwiQXJndW1lbnRzIiwiRlByb3RvIiwibmFtZVJFIiwibWF0Y2giLCJzdHJvbmciLCJNQVAiLCJNYXAiLCJtaWNyb3Rhc2siLCJuZXdQcm9taXNlQ2FwYWJpbGl0eU1vZHVsZSIsInBlcmZvcm0iLCJwcm9taXNlUmVzb2x2ZSIsIlBST01JU0UiLCJ2ZXJzaW9ucyIsInY4IiwiJFByb21pc2UiLCJlbXB0eSIsIkludGVybmFsIiwibmV3R2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5IiwiT3duUHJvbWlzZUNhcGFiaWxpdHkiLCJXcmFwcGVyIiwiVVNFX05BVElWRSIsIkZha2VQcm9taXNlIiwiUHJvbWlzZVJlamVjdGlvbkV2ZW50IiwiaW5kZXhPZiIsImlzVGhlbmFibGUiLCJpc1JlamVjdCIsIl9uIiwiY2hhaW4iLCJfYyIsIl92Iiwib2siLCJfcyIsInJlYWN0aW9uIiwiaGFuZGxlciIsImZhaWwiLCJleGl0ZWQiLCJfaCIsIm9uSGFuZGxlVW5oYW5kbGVkIiwib25VbmhhbmRsZWQiLCJ1bmhhbmRsZWQiLCJpc1VuaGFuZGxlZCIsImNvbnNvbGUiLCJlbWl0Iiwib251bmhhbmRsZWRyZWplY3Rpb24iLCJyZWFzb24iLCJlcnJvciIsIl9hIiwib25yZWplY3Rpb25oYW5kbGVkIiwiJHJlamVjdCIsIl9kIiwiX3ciLCIkcmVzb2x2ZSIsImV4ZWN1dG9yIiwiZXJyIiwib25GdWxmaWxsZWQiLCJvblJlamVjdGVkIiwiY2FwYWJpbGl0eSIsImFsbCIsInJlbWFpbmluZyIsIiRpbmRleCIsImFscmVhZHlDYWxsZWQiLCJyYWNlIiwiZmxhZ3MiLCJTUExJVCIsIiRzcGxpdCIsIl9zcGxpdCIsIiRwdXNoIiwiJFNQTElUIiwiTEVOR1RIIiwiTEFTVF9JTkRFWCIsIk5QQ0ciLCJzZXBhcmF0b3IiLCJsaW1pdCIsIm91dHB1dCIsImxhc3RMYXN0SW5kZXgiLCJzcGxpdExpbWl0Iiwic2VwYXJhdG9yQ29weSIsInNlcGFyYXRvcjIiLCJsYXN0SW5kZXgiLCJsYXN0TGVuZ3RoIiwicmVwbGFjZSIsIiRmbGFncyIsImRlZmluZSIsIiRhdCIsInBvaW50IiwiJGZhaWxzIiwid2tzRGVmaW5lIiwiZW51bUtleXMiLCJfY3JlYXRlIiwiZ09QTkV4dCIsIiRHT1BEIiwiJERQIiwiJEpTT04iLCJKU09OIiwiX3N0cmluZ2lmeSIsInN0cmluZ2lmeSIsIkhJRERFTiIsIlRPX1BSSU1JVElWRSIsIlN5bWJvbFJlZ2lzdHJ5IiwiQWxsU3ltYm9scyIsIk9QU3ltYm9scyIsIlFPYmplY3QiLCJzZXR0ZXIiLCJmaW5kQ2hpbGQiLCJzZXRTeW1ib2xEZXNjIiwicHJvdG9EZXNjIiwid3JhcCIsInN5bSIsImlzU3ltYm9sIiwiJGRlZmluZVByb3BlcnRpZXMiLCIkcHJvcGVydHlJc0VudW1lcmFibGUiLCJFIiwiJGdldE93blByb3BlcnR5RGVzY3JpcHRvciIsIiRnZXRPd25Qcm9wZXJ0eU5hbWVzIiwiJGdldE93blByb3BlcnR5U3ltYm9scyIsIklTX09QIiwiJHNldCIsImVzNlN5bWJvbHMiLCJ3ZWxsS25vd25TeW1ib2xzIiwia2V5Rm9yIiwidXNlU2V0dGVyIiwidXNlU2ltcGxlIiwicmVwbGFjZXIiLCIkcmVwbGFjZXIiLCIkaW5jbHVkZXMiLCJpbmNsdWRlcyIsIiR2YWx1ZXMiLCIkaXRlcmF0b3JzIiwiVE9fU1RSSU5HX1RBRyIsIkFycmF5VmFsdWVzIiwiRE9NSXRlcmFibGVzIiwiQ1NTUnVsZUxpc3QiLCJDU1NTdHlsZURlY2xhcmF0aW9uIiwiQ1NTVmFsdWVMaXN0IiwiQ2xpZW50UmVjdExpc3QiLCJET01SZWN0TGlzdCIsIkRPTVN0cmluZ0xpc3QiLCJET01Ub2tlbkxpc3QiLCJEYXRhVHJhbnNmZXJJdGVtTGlzdCIsIkZpbGVMaXN0IiwiSFRNTEFsbENvbGxlY3Rpb24iLCJIVE1MQ29sbGVjdGlvbiIsIkhUTUxGb3JtRWxlbWVudCIsIkhUTUxTZWxlY3RFbGVtZW50IiwiTWVkaWFMaXN0IiwiTWltZVR5cGVBcnJheSIsIk5hbWVkTm9kZU1hcCIsIk5vZGVMaXN0IiwiUGFpbnRSZXF1ZXN0TGlzdCIsIlBsdWdpbiIsIlBsdWdpbkFycmF5IiwiU1ZHTGVuZ3RoTGlzdCIsIlNWR051bWJlckxpc3QiLCJTVkdQYXRoU2VnTGlzdCIsIlNWR1BvaW50TGlzdCIsIlNWR1N0cmluZ0xpc3QiLCJTVkdUcmFuc2Zvcm1MaXN0IiwiU291cmNlQnVmZmVyTGlzdCIsIlN0eWxlU2hlZXRMaXN0IiwiVGV4dFRyYWNrQ3VlTGlzdCIsIlRleHRUcmFja0xpc3QiLCJUb3VjaExpc3QiLCJjb2xsZWN0aW9ucyIsImV4cGxpY2l0IiwiQ29sbGVjdGlvbiIsIlNpZWJlbEFwcEZhY2FkZSIsIk4xOUhlbHBlciIsIm5leHVzMTkiLCJOMTliYXNlQXBwbGV0Iiwic2V0dGluZ3MiLCJjb25zdHMiLCJTaWViZWxKUyIsIkRlcGVuZGVuY3kiLCJ1dGlscyIsInBtIiwiY29udmVydERhdGVzIiwidmlldyIsIlNpZWJlbEFwcCIsIlNfQXBwIiwiR2V0QWN0aXZlVmlldyIsImFwcGxldE5hbWUiLCJHZXQiLCJhcHBsZXQiLCJHZXRBcHBsZXQiLCJpc0xpc3RBcHBsZXQiLCJyZXF1aXJlZCIsImxvdiIsImJvb2xPYmplY3QiLCJEYXR1bUJvb2xPYmplY3QiLCJsb2FkTG9jYWxlRGF0YSIsImZpZWxkVG9Db250cm9sTWFwIiwiX2dldEZpZWxkVG9Db250cm9sTWFwIiwiYmNJZCIsIkdldEJDSWQiLCJub3RpZmljYXRpb25zIiwiTjE5bm90aWZpY2F0aW9ucyIsImFwcGxldElkIiwiYXBwbGV0SW5wdXRzIiwiZ2V0RWxlbWVudEJ5SWQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYXR0cmlidXRlcyIsIm5vZGVWYWx1ZSIsIkF0dGFjaFBNQmluZGluZyIsImlucHV0TmFtZSIsInZpZXdOYW1lIiwiR2V0TmFtZSIsIndhcm4iLCJzcGxpY2UiLCJmaWx0ZXIiLCJzY29wZSIsImlzVHJlZUFwcGxldCIsIkV4cGxvcmVyUHJlc2VudGF0aW9uTW9kZWwiLCJsb2NhbGVPYmplY3QiLCJMb2NhbGVPYmplY3QiLCJkYXRlVGltZUZvcm1hdCIsIkdldFByb2ZpbGUiLCJsb2NhbGVEYXRhIiwiZmlyc3REYXlPZldlZWsiLCJHZXRXZWVrU3RhcnREYXkiLCJkYXRlRm9ybWF0IiwiaXMyNGhvdXJzRm9ybWF0IiwibG9jYWxDb3VudHJ5UGhvbmVDb2RlIiwibW9udGhzIiwic2hvcnRNb250aHMiLCJHZXREYXRhIiwibV9zcE1vbnRoUFMiLCJHZXRQcm9wZXJ0eSIsIndlZWtEYXlzIiwibV9zcERheU9mV2Vla1BTIiwid2Vla0RheXMzIiwid2Vla0RheXMxIiwiZnVuYyIsInN1YnNjcmliZSIsInRva2VuIiwidW5zdWJzY3JpYmUiLCJFeGVjdXRlTWV0aG9kIiwiX2dldENvbnRyb2wiLCJ1aVR5cGUiLCJkaXNwbGF5Rm9ybWF0IiwiU2V0VmFsdWUiLCJHZXRBc1N0cmluZyIsIl9pc0RhdGVUaW1lQ29udHJvbCIsImRhdGUiLCJ0b0xvY2FsZVN0cmluZyIsImhvdXIxMiIsIkdldFN0cmluZ0Zyb21EYXRlVGltZSIsIm1ldGhvZCIsImNhbkludm9rZU1ldGhvZCIsImNvbnRyb2xzIiwiYXBwbGV0Q29udHJvbHMiLCJfcmV0dXJuQ29udHJvbHMiLCJjb250cm9sRW50cnkiLCJjb250cm9sIiwiR2V0VUlUeXBlIiwiR2V0RGlzcGxheUZvcm1hdCIsImdldENvbnRyb2xEaXNwbGF5Rm9ybWF0IiwiX2lzU2tpcENvbnRyb2wiLCJHZXRJbnB1dE5hbWUiLCJmaWVsZE5hbWUiLCJHZXRGaWVsZE5hbWUiLCJvYmoiLCJsYWJlbCIsIkdldERpc3BsYXlOYW1lIiwiX2lzUmVxdWlyZWQiLCJib3VuZGVkUGljayIsIklzQm91bmRlZFBpY2siLCJzdGF0aWNQaWNrIiwiSXNTdGF0aWNCb3VuZGVkIiwiaXNQb3N0Q2hhbmdlcyIsIklzUG9zdENoYW5nZXMiLCJtYXhTaXplIiwiR2V0TWF4U2l6ZSIsImlzTGluayIsInJlYWRvbmx5IiwiZGF0YVR5cGUiLCJzdGF0aWNMT1YiLCJHZXRTdGF0aWNMT1YiLCJHZXRSYWRpb0dyb3VwUHJvcFNldCIsImNoaWxkQXJyYXkiLCJsb3ZzIiwicmVkdWNlIiwiYWNjIiwibGljIiwiRmllbGRWYWx1ZSIsIkRpc3BsYXlOYW1lIiwiYWRkUmVjb3JkSW5kZXgiLCJtYXAiLCJfaW5keCIsIl9uYXZpZ2F0ZSIsImdldFJvd0xpc3RSb3dDb3VudCIsIkVycm9yIiwicG9zaXRpb25PblJvdyIsImNiIiwiX25ld1JlY29yZCIsImFzeW5jIiwiY2JlcnIiLCJfd3JpdGVSZWNvcmQiLCJjYXRjaCIsInNraXBDb25maXJtRGlhbG9nIiwiTjE5Q29uZmlybSIsIlV0aWxzIiwiQ29uZmlybSIsIl9nZXRTaWViZWxWYWx1ZSIsIl9zZXRDb250cm9sVmFsdWVJbnRlcm5hbCIsImxvZyIsIk9uQ29udHJvbEV2ZW50IiwiaXNTdGF0aWMiLCJpc1N0YXRpY1BpY2siLCJfdmFsaWRhdGVQaWNrQ29udHJvbCIsImNvbnRyb2xJbnB1dE5hbWUiLCJwcyIsIk5ld1Byb3BlcnR5U2V0IiwiU2V0UHJvcGVydHkiLCJfc2V0QWN0aXZlQ29udHJvbCIsInNvcnQiLCJjb250cm9sTmFtZSIsIl9nZXRDb250cm9sU3RhdGljTE9WIiwiaXNEeW5hbWljIiwiX2dldENvbnRyb2xEeW5hbWljTE9WIiwiU2V0QXNTdHJpbmciLCJHZXRWYWx1ZSIsIklTTyIsIlRvSVNPRm9ybWF0IiwiR2V0SVNPRGF0ZVRpbWUiLCJEYXRlIiwicmF3IiwiZ2V0U2VsZWN0aW9uIiwiZ2V0UmF3UmVjb3JkU2V0IiwiZ2V0UmVjb3JkU2V0IiwiYmMiLCJJc0luc2VydFBlbmRpbmciLCJJc0NvbW1pdFBlbmRpbmciLCJjb250cm9sTWV0aG9kIiwiR2V0TWV0aG9kTmFtZSIsIl9jb250cm9scyIsIl9tZXRob2RzIiwiZ2V0Q29udHJvbHMiLCJfZ2V0TWV0aG9kcyIsInN0YXRlIiwiY2FsY3VsYXRlQ3VycmVudFJlY29yZFN0YXRlIiwiSWQiLCJfZ2V0SlNWYWx1ZSIsIm1ldGhvZE5hbWUiLCJmb3VuZCIsImNvbnRyb2xVaVR5cGUiLCJleHByIiwiX25ld1F1ZXJ5IiwiX2ZpbmRDb250cm9sVG9FbnRlclNlYXJjaEV4cHIiLCJyb3dJZCIsInF1ZXJ5QnlTZWFyY2hFeHByU3luYyIsIl9xdWVyeUJ5SWQiLCJhaSIsInNlbGZidXN5IiwicGFyYW1zIiwiX3F1ZXJ5IiwiaWRzIiwiZmllbGRzIiwidXNlQWN0aXZlQk8iLCJfZ2V0TVZGIiwicHNJbnB1dHMiLCJHZXRBY3RpdmVCdXNPYmoiLCJTZXRUeXBlIiwiX2dldEZpZWxkTmFtZUZvckNvbnRyb2wiLCJBZGRDaGlsZCIsIkNsb25lIiwiYnMiLCJHZXRTZXJ2aWNlIiwiZXJyY2IiLCJJbnB1dHMiLCJwc091dHB1dHMiLCJHZXRDaGlsZEJ5VHlwZSIsImNoaWxkIiwiR2V0VHlwZSIsImdyYW5kQ2hpbGQiLCJyZWMiLCJwcmltYXJ5IiwicHJvcEFycmF5IiwiSW52b2tlTWV0aG9kIiwicHNJbnB1dCIsImFtb3VudCIsInNpemUiLCJuZXh0UmVjb3JkU2V0IiwiaGFzTmV4dCIsIlNldENvbnRyb2xWYWx1ZUJ5TmFtZSIsInJhd1JlY29yZFNldCIsImxlbiIsImlzQXNjZW5kaW5nIiwic29ydE9yZGVyIiwiT25DbGlja1NvcnQiLCJzZXJ2aWNlIiwiaW5Qcm9wU2V0IiwicmVjZWl2ZWROb3RpZmljYXRpb25zIiwic3Vic2NyaWJlcnMiLCJBdHRhY2hOb3RpZmljYXRpb25IYW5kbGVyIiwicHJvcFNldCIsInN0YXRlcyIsInN1YlRva2VuIiwiTjE5cG9wdXBBcHBsZXQiLCJHZXRSZW5kZXJlciIsInJlc2l6ZSIsIkdldFNlbGVjdGVkUm93Iiwic2luZ2xldG9uIiwic2luZ2xldG9uRW5mb3JjZXIiLCJOMTlwb3B1cENvbnRyb2xsZXIiLCJlbmZvcmNlciIsImlzUG9wdXBIaWRkZW4iLCJyZXNvbHZlUHJvbWlzZSIsInBvcHVwQXBwbGV0TjE5IiwiYXNzb2NBcHBsZXROMTkiLCJOMTlyZXNpemVBdmFpbGFibGUiLCJNdmdCZWF1dGlmaWVyIiwicmVzaXplQXZhaWxhYmxlIiwibWVzc2FnZSIsIk4xOXByb2Nlc3NOZXdQb3B1cCIsIlByb2Nlc3NOZXdQb3B1cCIsInByb2Nlc3NOZXdQb3B1cCIsIkdldFBvcHVwUE0iLCJJc1BvcHVwT3BlbiIsIkdldFBvcHVwQXBwbGV0IiwiR2V0UE1vZGVsIiwiYXNzb2NBcHBsZXQiLCJhdmFpbGFibGVSZWNvcmRTZXQiLCJnZXRDb250cm9sc1JlY29yZFNldCIsInNlbGVjdGVkUmVjb3JkU2V0IiwicG9wdXBQTSIsIlNldHVwIiwiYWN0aXZlVmlldyIsImFjdGl2ZUFwcGxldCIsIkdldEFjdGl2ZUFwcGxldCIsIlNldEFjdGl2ZUFwcGxldEJlZm9yZVBvcHVwIiwiQWRkUHJvcGVydHkiLCJ1cmwiLCJHZXRQYWdlVVJMIiwiaXNQb3B1cEFwcGxldCIsIkdldFBvcHVwQXBwbGV0TmFtZSIsImlzUGlja0FwcGxldCIsIkdldFBpY2tBcHBsZXROYW1lIiwiY2xvc2VJZk9wZW4iLCJpc09wZW4iLCJjbG9zZVBvcHVwQXBwbGV0IiwibmV3UmVjb3JkRnVuYyIsImNoZWNrT3BlbmVkUG9wdXAiLCJuMTkiLCJjdXJyUG9wdXBzIiwiR2V0UG9wdXBDb250cm9sIiwibjE5cG9wdXBDb250cm9sbGVyIiwiY2FuT3BlblBvcHVwIiwiU2V0QWN0aXZlQXBwbGV0SW50ZXJuYWwiLCJzaG93UG9wdXBBcHBsZXQiLCJfc2hvd1BvcHVwQXBwbGV0IiwiX29wZW5Bc3NvY0FwcGxldCIsIl9uZXdBc3NvY1JlY29yZCIsImJpbmQiLCJ0YXJnZXRWaWV3TmFtZSIsInRhcmdldEFwcGxldE5hbWUiLCJnZXRDdXJyZW50UmVjb3JkIiwiU1dFQ21kIiwiZW5jb2RlVVJJIiwiR290b1ZpZXciLCJJbml0Iiwic2hvd1BpY2tBcHBsZXQiLCJxdWVyeUJ5SWRTeW5jIiwicGlja1JlY29yZCIsImNsb3NlQXBwbGV0Iiwic2hvd012Z0FwcGxldCIsImFkZEFsbFJlY29yZHMiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURB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IFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwiLy8gMjIuMS4zLjMxIEFycmF5LnByb3RvdHlwZVtAQHVuc2NvcGFibGVzXVxudmFyIFVOU0NPUEFCTEVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3Vuc2NvcGFibGVzJyk7XG52YXIgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcbmlmIChBcnJheVByb3RvW1VOU0NPUEFCTEVTXSA9PSB1bmRlZmluZWQpIHJlcXVpcmUoJy4vX2hpZGUnKShBcnJheVByb3RvLCBVTlNDT1BBQkxFUywge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIEFycmF5UHJvdG9bVU5TQ09QQUJMRVNdW2tleV0gPSB0cnVlO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBDb25zdHJ1Y3RvciwgbmFtZSwgZm9yYmlkZGVuRmllbGQpIHtcbiAgaWYgKCEoaXQgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikgfHwgKGZvcmJpZGRlbkZpZWxkICE9PSB1bmRlZmluZWQgJiYgZm9yYmlkZGVuRmllbGQgaW4gaXQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKG5hbWUgKyAnOiBpbmNvcnJlY3QgaW52b2NhdGlvbiEnKTtcbiAgfSByZXR1cm4gaXQ7XG59O1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwiLy8gZmFsc2UgLT4gQXJyYXkjaW5kZXhPZlxuLy8gdHJ1ZSAgLT4gQXJyYXkjaW5jbHVkZXNcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciB0b0Fic29sdXRlSW5kZXggPSByZXF1aXJlKCcuL190by1hYnNvbHV0ZS1pbmRleCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoSVNfSU5DTFVERVMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgZWwsIGZyb21JbmRleCkge1xuICAgIHZhciBPID0gdG9JT2JqZWN0KCR0aGlzKTtcbiAgICB2YXIgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgIHZhciBpbmRleCA9IHRvQWJzb2x1dGVJbmRleChmcm9tSW5kZXgsIGxlbmd0aCk7XG4gICAgdmFyIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgaWYgKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKSB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIHtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICAgIGlmICh2YWx1ZSAhPSB2YWx1ZSkgcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjaW5kZXhPZiBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykgaWYgKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pIHtcbiAgICAgIGlmIChPW2luZGV4XSA9PT0gZWwpIHJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07XG4iLCIvLyAwIC0+IEFycmF5I2ZvckVhY2hcbi8vIDEgLT4gQXJyYXkjbWFwXG4vLyAyIC0+IEFycmF5I2ZpbHRlclxuLy8gMyAtPiBBcnJheSNzb21lXG4vLyA0IC0+IEFycmF5I2V2ZXJ5XG4vLyA1IC0+IEFycmF5I2ZpbmRcbi8vIDYgLT4gQXJyYXkjZmluZEluZGV4XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgYXNjID0gcmVxdWlyZSgnLi9fYXJyYXktc3BlY2llcy1jcmVhdGUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFRZUEUsICRjcmVhdGUpIHtcbiAgdmFyIElTX01BUCA9IFRZUEUgPT0gMTtcbiAgdmFyIElTX0ZJTFRFUiA9IFRZUEUgPT0gMjtcbiAgdmFyIElTX1NPTUUgPSBUWVBFID09IDM7XG4gIHZhciBJU19FVkVSWSA9IFRZUEUgPT0gNDtcbiAgdmFyIElTX0ZJTkRfSU5ERVggPSBUWVBFID09IDY7XG4gIHZhciBOT19IT0xFUyA9IFRZUEUgPT0gNSB8fCBJU19GSU5EX0lOREVYO1xuICB2YXIgY3JlYXRlID0gJGNyZWF0ZSB8fCBhc2M7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIGNhbGxiYWNrZm4sIHRoYXQpIHtcbiAgICB2YXIgTyA9IHRvT2JqZWN0KCR0aGlzKTtcbiAgICB2YXIgc2VsZiA9IElPYmplY3QoTyk7XG4gICAgdmFyIGYgPSBjdHgoY2FsbGJhY2tmbiwgdGhhdCwgMyk7XG4gICAgdmFyIGxlbmd0aCA9IHRvTGVuZ3RoKHNlbGYubGVuZ3RoKTtcbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIHZhciByZXN1bHQgPSBJU19NQVAgPyBjcmVhdGUoJHRoaXMsIGxlbmd0aCkgOiBJU19GSUxURVIgPyBjcmVhdGUoJHRoaXMsIDApIDogdW5kZWZpbmVkO1xuICAgIHZhciB2YWwsIHJlcztcbiAgICBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykgaWYgKE5PX0hPTEVTIHx8IGluZGV4IGluIHNlbGYpIHtcbiAgICAgIHZhbCA9IHNlbGZbaW5kZXhdO1xuICAgICAgcmVzID0gZih2YWwsIGluZGV4LCBPKTtcbiAgICAgIGlmIChUWVBFKSB7XG4gICAgICAgIGlmIChJU19NQVApIHJlc3VsdFtpbmRleF0gPSByZXM7ICAgLy8gbWFwXG4gICAgICAgIGVsc2UgaWYgKHJlcykgc3dpdGNoIChUWVBFKSB7XG4gICAgICAgICAgY2FzZSAzOiByZXR1cm4gdHJ1ZTsgICAgICAgICAgICAgLy8gc29tZVxuICAgICAgICAgIGNhc2UgNTogcmV0dXJuIHZhbDsgICAgICAgICAgICAgIC8vIGZpbmRcbiAgICAgICAgICBjYXNlIDY6IHJldHVybiBpbmRleDsgICAgICAgICAgICAvLyBmaW5kSW5kZXhcbiAgICAgICAgICBjYXNlIDI6IHJlc3VsdC5wdXNoKHZhbCk7ICAgICAgICAvLyBmaWx0ZXJcbiAgICAgICAgfSBlbHNlIGlmIChJU19FVkVSWSkgcmV0dXJuIGZhbHNlOyAvLyBldmVyeVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gSVNfRklORF9JTkRFWCA/IC0xIDogSVNfU09NRSB8fCBJU19FVkVSWSA/IElTX0VWRVJZIDogcmVzdWx0O1xuICB9O1xufTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuL19pcy1hcnJheScpO1xudmFyIFNQRUNJRVMgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvcmlnaW5hbCkge1xuICB2YXIgQztcbiAgaWYgKGlzQXJyYXkob3JpZ2luYWwpKSB7XG4gICAgQyA9IG9yaWdpbmFsLmNvbnN0cnVjdG9yO1xuICAgIC8vIGNyb3NzLXJlYWxtIGZhbGxiYWNrXG4gICAgaWYgKHR5cGVvZiBDID09ICdmdW5jdGlvbicgJiYgKEMgPT09IEFycmF5IHx8IGlzQXJyYXkoQy5wcm90b3R5cGUpKSkgQyA9IHVuZGVmaW5lZDtcbiAgICBpZiAoaXNPYmplY3QoQykpIHtcbiAgICAgIEMgPSBDW1NQRUNJRVNdO1xuICAgICAgaWYgKEMgPT09IG51bGwpIEMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9IHJldHVybiBDID09PSB1bmRlZmluZWQgPyBBcnJheSA6IEM7XG59O1xuIiwiLy8gOS40LjIuMyBBcnJheVNwZWNpZXNDcmVhdGUob3JpZ2luYWxBcnJheSwgbGVuZ3RoKVxudmFyIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4vX2FycmF5LXNwZWNpZXMtY29uc3RydWN0b3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3JpZ2luYWwsIGxlbmd0aCkge1xuICByZXR1cm4gbmV3IChzcGVjaWVzQ29uc3RydWN0b3Iob3JpZ2luYWwpKShsZW5ndGgpO1xufTtcbiIsIi8vIGdldHRpbmcgdGFnIGZyb20gMTkuMS4zLjYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZygpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG52YXIgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG4vLyBFUzMgd3JvbmcgaGVyZVxudmFyIEFSRyA9IGNvZihmdW5jdGlvbiAoKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ0FyZ3VtZW50cyc7XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIFNjcmlwdCBBY2Nlc3MgRGVuaWVkIGVycm9yXG52YXIgdHJ5R2V0ID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gaXRba2V5XTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgTywgVCwgQjtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgOiB0eXBlb2YgKFQgPSB0cnlHZXQoTyA9IE9iamVjdChpdCksIFRBRykpID09ICdzdHJpbmcnID8gVFxuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQVJHID8gY29mKE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKEIgPSBjb2YoTykpID09ICdPYmplY3QnICYmIHR5cGVvZiBPLmNhbGxlZSA9PSAnZnVuY3Rpb24nID8gJ0FyZ3VtZW50cycgOiBCO1xufTtcbiIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpO1xudmFyIHJlZGVmaW5lQWxsID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUtYWxsJyk7XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgYW5JbnN0YW5jZSA9IHJlcXVpcmUoJy4vX2FuLWluc3RhbmNlJyk7XG52YXIgZm9yT2YgPSByZXF1aXJlKCcuL19mb3Itb2YnKTtcbnZhciAkaXRlckRlZmluZSA9IHJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJyk7XG52YXIgc3RlcCA9IHJlcXVpcmUoJy4vX2l0ZXItc3RlcCcpO1xudmFyIHNldFNwZWNpZXMgPSByZXF1aXJlKCcuL19zZXQtc3BlY2llcycpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcbnZhciBmYXN0S2V5ID0gcmVxdWlyZSgnLi9fbWV0YScpLmZhc3RLZXk7XG52YXIgdmFsaWRhdGUgPSByZXF1aXJlKCcuL192YWxpZGF0ZS1jb2xsZWN0aW9uJyk7XG52YXIgU0laRSA9IERFU0NSSVBUT1JTID8gJ19zJyA6ICdzaXplJztcblxudmFyIGdldEVudHJ5ID0gZnVuY3Rpb24gKHRoYXQsIGtleSkge1xuICAvLyBmYXN0IGNhc2VcbiAgdmFyIGluZGV4ID0gZmFzdEtleShrZXkpO1xuICB2YXIgZW50cnk7XG4gIGlmIChpbmRleCAhPT0gJ0YnKSByZXR1cm4gdGhhdC5faVtpbmRleF07XG4gIC8vIGZyb3plbiBvYmplY3QgY2FzZVxuICBmb3IgKGVudHJ5ID0gdGhhdC5fZjsgZW50cnk7IGVudHJ5ID0gZW50cnkubikge1xuICAgIGlmIChlbnRyeS5rID09IGtleSkgcmV0dXJuIGVudHJ5O1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZ2V0Q29uc3RydWN0b3I6IGZ1bmN0aW9uICh3cmFwcGVyLCBOQU1FLCBJU19NQVAsIEFEREVSKSB7XG4gICAgdmFyIEMgPSB3cmFwcGVyKGZ1bmN0aW9uICh0aGF0LCBpdGVyYWJsZSkge1xuICAgICAgYW5JbnN0YW5jZSh0aGF0LCBDLCBOQU1FLCAnX2knKTtcbiAgICAgIHRoYXQuX3QgPSBOQU1FOyAgICAgICAgIC8vIGNvbGxlY3Rpb24gdHlwZVxuICAgICAgdGhhdC5faSA9IGNyZWF0ZShudWxsKTsgLy8gaW5kZXhcbiAgICAgIHRoYXQuX2YgPSB1bmRlZmluZWQ7ICAgIC8vIGZpcnN0IGVudHJ5XG4gICAgICB0aGF0Ll9sID0gdW5kZWZpbmVkOyAgICAvLyBsYXN0IGVudHJ5XG4gICAgICB0aGF0W1NJWkVdID0gMDsgICAgICAgICAvLyBzaXplXG4gICAgICBpZiAoaXRlcmFibGUgIT0gdW5kZWZpbmVkKSBmb3JPZihpdGVyYWJsZSwgSVNfTUFQLCB0aGF0W0FEREVSXSwgdGhhdCk7XG4gICAgfSk7XG4gICAgcmVkZWZpbmVBbGwoQy5wcm90b3R5cGUsIHtcbiAgICAgIC8vIDIzLjEuMy4xIE1hcC5wcm90b3R5cGUuY2xlYXIoKVxuICAgICAgLy8gMjMuMi4zLjIgU2V0LnByb3RvdHlwZS5jbGVhcigpXG4gICAgICBjbGVhcjogZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgICAgIGZvciAodmFyIHRoYXQgPSB2YWxpZGF0ZSh0aGlzLCBOQU1FKSwgZGF0YSA9IHRoYXQuX2ksIGVudHJ5ID0gdGhhdC5fZjsgZW50cnk7IGVudHJ5ID0gZW50cnkubikge1xuICAgICAgICAgIGVudHJ5LnIgPSB0cnVlO1xuICAgICAgICAgIGlmIChlbnRyeS5wKSBlbnRyeS5wID0gZW50cnkucC5uID0gdW5kZWZpbmVkO1xuICAgICAgICAgIGRlbGV0ZSBkYXRhW2VudHJ5LmldO1xuICAgICAgICB9XG4gICAgICAgIHRoYXQuX2YgPSB0aGF0Ll9sID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGF0W1NJWkVdID0gMDtcbiAgICAgIH0sXG4gICAgICAvLyAyMy4xLjMuMyBNYXAucHJvdG90eXBlLmRlbGV0ZShrZXkpXG4gICAgICAvLyAyMy4yLjMuNCBTZXQucHJvdG90eXBlLmRlbGV0ZSh2YWx1ZSlcbiAgICAgICdkZWxldGUnOiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciB0aGF0ID0gdmFsaWRhdGUodGhpcywgTkFNRSk7XG4gICAgICAgIHZhciBlbnRyeSA9IGdldEVudHJ5KHRoYXQsIGtleSk7XG4gICAgICAgIGlmIChlbnRyeSkge1xuICAgICAgICAgIHZhciBuZXh0ID0gZW50cnkubjtcbiAgICAgICAgICB2YXIgcHJldiA9IGVudHJ5LnA7XG4gICAgICAgICAgZGVsZXRlIHRoYXQuX2lbZW50cnkuaV07XG4gICAgICAgICAgZW50cnkuciA9IHRydWU7XG4gICAgICAgICAgaWYgKHByZXYpIHByZXYubiA9IG5leHQ7XG4gICAgICAgICAgaWYgKG5leHQpIG5leHQucCA9IHByZXY7XG4gICAgICAgICAgaWYgKHRoYXQuX2YgPT0gZW50cnkpIHRoYXQuX2YgPSBuZXh0O1xuICAgICAgICAgIGlmICh0aGF0Ll9sID09IGVudHJ5KSB0aGF0Ll9sID0gcHJldjtcbiAgICAgICAgICB0aGF0W1NJWkVdLS07XG4gICAgICAgIH0gcmV0dXJuICEhZW50cnk7XG4gICAgICB9LFxuICAgICAgLy8gMjMuMi4zLjYgU2V0LnByb3RvdHlwZS5mb3JFYWNoKGNhbGxiYWNrZm4sIHRoaXNBcmcgPSB1bmRlZmluZWQpXG4gICAgICAvLyAyMy4xLjMuNSBNYXAucHJvdG90eXBlLmZvckVhY2goY2FsbGJhY2tmbiwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbiAgICAgIGZvckVhY2g6IGZ1bmN0aW9uIGZvckVhY2goY2FsbGJhY2tmbiAvKiAsIHRoYXQgPSB1bmRlZmluZWQgKi8pIHtcbiAgICAgICAgdmFsaWRhdGUodGhpcywgTkFNRSk7XG4gICAgICAgIHZhciBmID0gY3R4KGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkLCAzKTtcbiAgICAgICAgdmFyIGVudHJ5O1xuICAgICAgICB3aGlsZSAoZW50cnkgPSBlbnRyeSA/IGVudHJ5Lm4gOiB0aGlzLl9mKSB7XG4gICAgICAgICAgZihlbnRyeS52LCBlbnRyeS5rLCB0aGlzKTtcbiAgICAgICAgICAvLyByZXZlcnQgdG8gdGhlIGxhc3QgZXhpc3RpbmcgZW50cnlcbiAgICAgICAgICB3aGlsZSAoZW50cnkgJiYgZW50cnkucikgZW50cnkgPSBlbnRyeS5wO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8gMjMuMS4zLjcgTWFwLnByb3RvdHlwZS5oYXMoa2V5KVxuICAgICAgLy8gMjMuMi4zLjcgU2V0LnByb3RvdHlwZS5oYXModmFsdWUpXG4gICAgICBoYXM6IGZ1bmN0aW9uIGhhcyhrZXkpIHtcbiAgICAgICAgcmV0dXJuICEhZ2V0RW50cnkodmFsaWRhdGUodGhpcywgTkFNRSksIGtleSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKERFU0NSSVBUT1JTKSBkUChDLnByb3RvdHlwZSwgJ3NpemUnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRlKHRoaXMsIE5BTUUpW1NJWkVdO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBDO1xuICB9LFxuICBkZWY6IGZ1bmN0aW9uICh0aGF0LCBrZXksIHZhbHVlKSB7XG4gICAgdmFyIGVudHJ5ID0gZ2V0RW50cnkodGhhdCwga2V5KTtcbiAgICB2YXIgcHJldiwgaW5kZXg7XG4gICAgLy8gY2hhbmdlIGV4aXN0aW5nIGVudHJ5XG4gICAgaWYgKGVudHJ5KSB7XG4gICAgICBlbnRyeS52ID0gdmFsdWU7XG4gICAgLy8gY3JlYXRlIG5ldyBlbnRyeVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGF0Ll9sID0gZW50cnkgPSB7XG4gICAgICAgIGk6IGluZGV4ID0gZmFzdEtleShrZXksIHRydWUpLCAvLyA8LSBpbmRleFxuICAgICAgICBrOiBrZXksICAgICAgICAgICAgICAgICAgICAgICAgLy8gPC0ga2V5XG4gICAgICAgIHY6IHZhbHVlLCAgICAgICAgICAgICAgICAgICAgICAvLyA8LSB2YWx1ZVxuICAgICAgICBwOiBwcmV2ID0gdGhhdC5fbCwgICAgICAgICAgICAgLy8gPC0gcHJldmlvdXMgZW50cnlcbiAgICAgICAgbjogdW5kZWZpbmVkLCAgICAgICAgICAgICAgICAgIC8vIDwtIG5leHQgZW50cnlcbiAgICAgICAgcjogZmFsc2UgICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIHJlbW92ZWRcbiAgICAgIH07XG4gICAgICBpZiAoIXRoYXQuX2YpIHRoYXQuX2YgPSBlbnRyeTtcbiAgICAgIGlmIChwcmV2KSBwcmV2Lm4gPSBlbnRyeTtcbiAgICAgIHRoYXRbU0laRV0rKztcbiAgICAgIC8vIGFkZCB0byBpbmRleFxuICAgICAgaWYgKGluZGV4ICE9PSAnRicpIHRoYXQuX2lbaW5kZXhdID0gZW50cnk7XG4gICAgfSByZXR1cm4gdGhhdDtcbiAgfSxcbiAgZ2V0RW50cnk6IGdldEVudHJ5LFxuICBzZXRTdHJvbmc6IGZ1bmN0aW9uIChDLCBOQU1FLCBJU19NQVApIHtcbiAgICAvLyBhZGQgLmtleXMsIC52YWx1ZXMsIC5lbnRyaWVzLCBbQEBpdGVyYXRvcl1cbiAgICAvLyAyMy4xLjMuNCwgMjMuMS4zLjgsIDIzLjEuMy4xMSwgMjMuMS4zLjEyLCAyMy4yLjMuNSwgMjMuMi4zLjgsIDIzLjIuMy4xMCwgMjMuMi4zLjExXG4gICAgJGl0ZXJEZWZpbmUoQywgTkFNRSwgZnVuY3Rpb24gKGl0ZXJhdGVkLCBraW5kKSB7XG4gICAgICB0aGlzLl90ID0gdmFsaWRhdGUoaXRlcmF0ZWQsIE5BTUUpOyAvLyB0YXJnZXRcbiAgICAgIHRoaXMuX2sgPSBraW5kOyAgICAgICAgICAgICAgICAgICAgIC8vIGtpbmRcbiAgICAgIHRoaXMuX2wgPSB1bmRlZmluZWQ7ICAgICAgICAgICAgICAgIC8vIHByZXZpb3VzXG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICAgdmFyIGtpbmQgPSB0aGF0Ll9rO1xuICAgICAgdmFyIGVudHJ5ID0gdGhhdC5fbDtcbiAgICAgIC8vIHJldmVydCB0byB0aGUgbGFzdCBleGlzdGluZyBlbnRyeVxuICAgICAgd2hpbGUgKGVudHJ5ICYmIGVudHJ5LnIpIGVudHJ5ID0gZW50cnkucDtcbiAgICAgIC8vIGdldCBuZXh0IGVudHJ5XG4gICAgICBpZiAoIXRoYXQuX3QgfHwgISh0aGF0Ll9sID0gZW50cnkgPSBlbnRyeSA/IGVudHJ5Lm4gOiB0aGF0Ll90Ll9mKSkge1xuICAgICAgICAvLyBvciBmaW5pc2ggdGhlIGl0ZXJhdGlvblxuICAgICAgICB0aGF0Ll90ID0gdW5kZWZpbmVkO1xuICAgICAgICByZXR1cm4gc3RlcCgxKTtcbiAgICAgIH1cbiAgICAgIC8vIHJldHVybiBzdGVwIGJ5IGtpbmRcbiAgICAgIGlmIChraW5kID09ICdrZXlzJykgcmV0dXJuIHN0ZXAoMCwgZW50cnkuayk7XG4gICAgICBpZiAoa2luZCA9PSAndmFsdWVzJykgcmV0dXJuIHN0ZXAoMCwgZW50cnkudik7XG4gICAgICByZXR1cm4gc3RlcCgwLCBbZW50cnkuaywgZW50cnkudl0pO1xuICAgIH0sIElTX01BUCA/ICdlbnRyaWVzJyA6ICd2YWx1ZXMnLCAhSVNfTUFQLCB0cnVlKTtcblxuICAgIC8vIGFkZCBbQEBzcGVjaWVzXSwgMjMuMS4yLjIsIDIzLjIuMi4yXG4gICAgc2V0U3BlY2llcyhOQU1FKTtcbiAgfVxufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIHJlZGVmaW5lQWxsID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUtYWxsJyk7XG52YXIgbWV0YSA9IHJlcXVpcmUoJy4vX21ldGEnKTtcbnZhciBmb3JPZiA9IHJlcXVpcmUoJy4vX2Zvci1vZicpO1xudmFyIGFuSW5zdGFuY2UgPSByZXF1aXJlKCcuL19hbi1pbnN0YW5jZScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xudmFyICRpdGVyRGV0ZWN0ID0gcmVxdWlyZSgnLi9faXRlci1kZXRlY3QnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgaW5oZXJpdElmUmVxdWlyZWQgPSByZXF1aXJlKCcuL19pbmhlcml0LWlmLXJlcXVpcmVkJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE5BTUUsIHdyYXBwZXIsIG1ldGhvZHMsIGNvbW1vbiwgSVNfTUFQLCBJU19XRUFLKSB7XG4gIHZhciBCYXNlID0gZ2xvYmFsW05BTUVdO1xuICB2YXIgQyA9IEJhc2U7XG4gIHZhciBBRERFUiA9IElTX01BUCA/ICdzZXQnIDogJ2FkZCc7XG4gIHZhciBwcm90byA9IEMgJiYgQy5wcm90b3R5cGU7XG4gIHZhciBPID0ge307XG4gIHZhciBmaXhNZXRob2QgPSBmdW5jdGlvbiAoS0VZKSB7XG4gICAgdmFyIGZuID0gcHJvdG9bS0VZXTtcbiAgICByZWRlZmluZShwcm90bywgS0VZLFxuICAgICAgS0VZID09ICdkZWxldGUnID8gZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgcmV0dXJuIElTX1dFQUsgJiYgIWlzT2JqZWN0KGEpID8gZmFsc2UgOiBmbi5jYWxsKHRoaXMsIGEgPT09IDAgPyAwIDogYSk7XG4gICAgICB9IDogS0VZID09ICdoYXMnID8gZnVuY3Rpb24gaGFzKGEpIHtcbiAgICAgICAgcmV0dXJuIElTX1dFQUsgJiYgIWlzT2JqZWN0KGEpID8gZmFsc2UgOiBmbi5jYWxsKHRoaXMsIGEgPT09IDAgPyAwIDogYSk7XG4gICAgICB9IDogS0VZID09ICdnZXQnID8gZnVuY3Rpb24gZ2V0KGEpIHtcbiAgICAgICAgcmV0dXJuIElTX1dFQUsgJiYgIWlzT2JqZWN0KGEpID8gdW5kZWZpbmVkIDogZm4uY2FsbCh0aGlzLCBhID09PSAwID8gMCA6IGEpO1xuICAgICAgfSA6IEtFWSA9PSAnYWRkJyA/IGZ1bmN0aW9uIGFkZChhKSB7IGZuLmNhbGwodGhpcywgYSA9PT0gMCA/IDAgOiBhKTsgcmV0dXJuIHRoaXM7IH1cbiAgICAgICAgOiBmdW5jdGlvbiBzZXQoYSwgYikgeyBmbi5jYWxsKHRoaXMsIGEgPT09IDAgPyAwIDogYSwgYik7IHJldHVybiB0aGlzOyB9XG4gICAgKTtcbiAgfTtcbiAgaWYgKHR5cGVvZiBDICE9ICdmdW5jdGlvbicgfHwgIShJU19XRUFLIHx8IHByb3RvLmZvckVhY2ggJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICBuZXcgQygpLmVudHJpZXMoKS5uZXh0KCk7XG4gIH0pKSkge1xuICAgIC8vIGNyZWF0ZSBjb2xsZWN0aW9uIGNvbnN0cnVjdG9yXG4gICAgQyA9IGNvbW1vbi5nZXRDb25zdHJ1Y3Rvcih3cmFwcGVyLCBOQU1FLCBJU19NQVAsIEFEREVSKTtcbiAgICByZWRlZmluZUFsbChDLnByb3RvdHlwZSwgbWV0aG9kcyk7XG4gICAgbWV0YS5ORUVEID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgaW5zdGFuY2UgPSBuZXcgQygpO1xuICAgIC8vIGVhcmx5IGltcGxlbWVudGF0aW9ucyBub3Qgc3VwcG9ydHMgY2hhaW5pbmdcbiAgICB2YXIgSEFTTlRfQ0hBSU5JTkcgPSBpbnN0YW5jZVtBRERFUl0oSVNfV0VBSyA/IHt9IDogLTAsIDEpICE9IGluc3RhbmNlO1xuICAgIC8vIFY4IH4gIENocm9taXVtIDQwLSB3ZWFrLWNvbGxlY3Rpb25zIHRocm93cyBvbiBwcmltaXRpdmVzLCBidXQgc2hvdWxkIHJldHVybiBmYWxzZVxuICAgIHZhciBUSFJPV1NfT05fUFJJTUlUSVZFUyA9IGZhaWxzKGZ1bmN0aW9uICgpIHsgaW5zdGFuY2UuaGFzKDEpOyB9KTtcbiAgICAvLyBtb3N0IGVhcmx5IGltcGxlbWVudGF0aW9ucyBkb2Vzbid0IHN1cHBvcnRzIGl0ZXJhYmxlcywgbW9zdCBtb2Rlcm4gLSBub3QgY2xvc2UgaXQgY29ycmVjdGx5XG4gICAgdmFyIEFDQ0VQVF9JVEVSQUJMRVMgPSAkaXRlckRldGVjdChmdW5jdGlvbiAoaXRlcikgeyBuZXcgQyhpdGVyKTsgfSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XG4gICAgLy8gZm9yIGVhcmx5IGltcGxlbWVudGF0aW9ucyAtMCBhbmQgKzAgbm90IHRoZSBzYW1lXG4gICAgdmFyIEJVR0dZX1pFUk8gPSAhSVNfV0VBSyAmJiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBWOCB+IENocm9taXVtIDQyLSBmYWlscyBvbmx5IHdpdGggNSsgZWxlbWVudHNcbiAgICAgIHZhciAkaW5zdGFuY2UgPSBuZXcgQygpO1xuICAgICAgdmFyIGluZGV4ID0gNTtcbiAgICAgIHdoaWxlIChpbmRleC0tKSAkaW5zdGFuY2VbQURERVJdKGluZGV4LCBpbmRleCk7XG4gICAgICByZXR1cm4gISRpbnN0YW5jZS5oYXMoLTApO1xuICAgIH0pO1xuICAgIGlmICghQUNDRVBUX0lURVJBQkxFUykge1xuICAgICAgQyA9IHdyYXBwZXIoZnVuY3Rpb24gKHRhcmdldCwgaXRlcmFibGUpIHtcbiAgICAgICAgYW5JbnN0YW5jZSh0YXJnZXQsIEMsIE5BTUUpO1xuICAgICAgICB2YXIgdGhhdCA9IGluaGVyaXRJZlJlcXVpcmVkKG5ldyBCYXNlKCksIHRhcmdldCwgQyk7XG4gICAgICAgIGlmIChpdGVyYWJsZSAhPSB1bmRlZmluZWQpIGZvck9mKGl0ZXJhYmxlLCBJU19NQVAsIHRoYXRbQURERVJdLCB0aGF0KTtcbiAgICAgICAgcmV0dXJuIHRoYXQ7XG4gICAgICB9KTtcbiAgICAgIEMucHJvdG90eXBlID0gcHJvdG87XG4gICAgICBwcm90by5jb25zdHJ1Y3RvciA9IEM7XG4gICAgfVxuICAgIGlmIChUSFJPV1NfT05fUFJJTUlUSVZFUyB8fCBCVUdHWV9aRVJPKSB7XG4gICAgICBmaXhNZXRob2QoJ2RlbGV0ZScpO1xuICAgICAgZml4TWV0aG9kKCdoYXMnKTtcbiAgICAgIElTX01BUCAmJiBmaXhNZXRob2QoJ2dldCcpO1xuICAgIH1cbiAgICBpZiAoQlVHR1lfWkVSTyB8fCBIQVNOVF9DSEFJTklORykgZml4TWV0aG9kKEFEREVSKTtcbiAgICAvLyB3ZWFrIGNvbGxlY3Rpb25zIHNob3VsZCBub3QgY29udGFpbnMgLmNsZWFyIG1ldGhvZFxuICAgIGlmIChJU19XRUFLICYmIHByb3RvLmNsZWFyKSBkZWxldGUgcHJvdG8uY2xlYXI7XG4gIH1cblxuICBzZXRUb1N0cmluZ1RhZyhDLCBOQU1FKTtcblxuICBPW05BTUVdID0gQztcbiAgJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAoQyAhPSBCYXNlKSwgTyk7XG5cbiAgaWYgKCFJU19XRUFLKSBjb21tb24uc2V0U3Ryb25nKEMsIE5BTUUsIElTX01BUCk7XG5cbiAgcmV0dXJuIEM7XG59O1xuIiwidmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHsgdmVyc2lvbjogJzIuNS43JyB9O1xuaWYgKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpIF9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIGluZGV4LCB2YWx1ZSkge1xuICBpZiAoaW5kZXggaW4gb2JqZWN0KSAkZGVmaW5lUHJvcGVydHkuZihvYmplY3QsIGluZGV4LCBjcmVhdGVEZXNjKDAsIHZhbHVlKSk7XG4gIGVsc2Ugb2JqZWN0W2luZGV4XSA9IHZhbHVlO1xufTtcbiIsIi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZuLCB0aGF0LCBsZW5ndGgpIHtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYgKHRoYXQgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGZuO1xuICBzd2l0Y2ggKGxlbmd0aCkge1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uIChhKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uIChhLCBiLCBjKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbiAoLyogLi4uYXJncyAqLykge1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTtcbiIsIi8vIDcuMi4xIFJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgPT0gdW5kZWZpbmVkKSB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG4iLCIvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG59KTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQ7XG4vLyB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0JyBpbiBvbGQgSUVcbnZhciBpcyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpcyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuIiwiLy8gSUUgOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSAoXG4gICdjb25zdHJ1Y3RvcixoYXNPd25Qcm9wZXJ0eSxpc1Byb3RvdHlwZU9mLHByb3BlcnR5SXNFbnVtZXJhYmxlLHRvTG9jYWxlU3RyaW5nLHRvU3RyaW5nLHZhbHVlT2YnXG4pLnNwbGl0KCcsJyk7XG4iLCIvLyBhbGwgZW51bWVyYWJsZSBvYmplY3Qga2V5cywgaW5jbHVkZXMgc3ltYm9sc1xudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xudmFyIGdPUFMgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpO1xudmFyIHBJRSA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciByZXN1bHQgPSBnZXRLZXlzKGl0KTtcbiAgdmFyIGdldFN5bWJvbHMgPSBnT1BTLmY7XG4gIGlmIChnZXRTeW1ib2xzKSB7XG4gICAgdmFyIHN5bWJvbHMgPSBnZXRTeW1ib2xzKGl0KTtcbiAgICB2YXIgaXNFbnVtID0gcElFLmY7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBrZXk7XG4gICAgd2hpbGUgKHN5bWJvbHMubGVuZ3RoID4gaSkgaWYgKGlzRW51bS5jYWxsKGl0LCBrZXkgPSBzeW1ib2xzW2krK10pKSByZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24gKHR5cGUsIG5hbWUsIHNvdXJjZSkge1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRjtcbiAgdmFyIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0Lkc7XG4gIHZhciBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TO1xuICB2YXIgSVNfUFJPVE8gPSB0eXBlICYgJGV4cG9ydC5QO1xuICB2YXIgSVNfQklORCA9IHR5cGUgJiAkZXhwb3J0LkI7XG4gIHZhciB0YXJnZXQgPSBJU19HTE9CQUwgPyBnbG9iYWwgOiBJU19TVEFUSUMgPyBnbG9iYWxbbmFtZV0gfHwgKGdsb2JhbFtuYW1lXSA9IHt9KSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV07XG4gIHZhciBleHBvcnRzID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSk7XG4gIHZhciBleHBQcm90byA9IGV4cG9ydHNbUFJPVE9UWVBFXSB8fCAoZXhwb3J0c1tQUk9UT1RZUEVdID0ge30pO1xuICB2YXIga2V5LCBvd24sIG91dCwgZXhwO1xuICBpZiAoSVNfR0xPQkFMKSBzb3VyY2UgPSBuYW1lO1xuICBmb3IgKGtleSBpbiBzb3VyY2UpIHtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiB0YXJnZXRba2V5XSAhPT0gdW5kZWZpbmVkO1xuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgb3V0ID0gKG93biA/IHRhcmdldCA6IHNvdXJjZSlba2V5XTtcbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIGV4cCA9IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4dGVuZCBnbG9iYWxcbiAgICBpZiAodGFyZ2V0KSByZWRlZmluZSh0YXJnZXQsIGtleSwgb3V0LCB0eXBlICYgJGV4cG9ydC5VKTtcbiAgICAvLyBleHBvcnRcbiAgICBpZiAoZXhwb3J0c1trZXldICE9IG91dCkgaGlkZShleHBvcnRzLCBrZXksIGV4cCk7XG4gICAgaWYgKElTX1BST1RPICYmIGV4cFByb3RvW2tleV0gIT0gb3V0KSBleHBQcm90b1trZXldID0gb3V0O1xuICB9XG59O1xuZ2xvYmFsLmNvcmUgPSBjb3JlO1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YFxubW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xudmFyIHdrcyA9IHJlcXVpcmUoJy4vX3drcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChLRVksIGxlbmd0aCwgZXhlYykge1xuICB2YXIgU1lNQk9MID0gd2tzKEtFWSk7XG4gIHZhciBmbnMgPSBleGVjKGRlZmluZWQsIFNZTUJPTCwgJydbS0VZXSk7XG4gIHZhciBzdHJmbiA9IGZuc1swXTtcbiAgdmFyIHJ4Zm4gPSBmbnNbMV07XG4gIGlmIChmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIE8gPSB7fTtcbiAgICBPW1NZTUJPTF0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9O1xuICAgIHJldHVybiAnJ1tLRVldKE8pICE9IDc7XG4gIH0pKSB7XG4gICAgcmVkZWZpbmUoU3RyaW5nLnByb3RvdHlwZSwgS0VZLCBzdHJmbik7XG4gICAgaGlkZShSZWdFeHAucHJvdG90eXBlLCBTWU1CT0wsIGxlbmd0aCA9PSAyXG4gICAgICAvLyAyMS4yLjUuOCBSZWdFeHAucHJvdG90eXBlW0BAcmVwbGFjZV0oc3RyaW5nLCByZXBsYWNlVmFsdWUpXG4gICAgICAvLyAyMS4yLjUuMTEgUmVnRXhwLnByb3RvdHlwZVtAQHNwbGl0XShzdHJpbmcsIGxpbWl0KVxuICAgICAgPyBmdW5jdGlvbiAoc3RyaW5nLCBhcmcpIHsgcmV0dXJuIHJ4Zm4uY2FsbChzdHJpbmcsIHRoaXMsIGFyZyk7IH1cbiAgICAgIC8vIDIxLjIuNS42IFJlZ0V4cC5wcm90b3R5cGVbQEBtYXRjaF0oc3RyaW5nKVxuICAgICAgLy8gMjEuMi41LjkgUmVnRXhwLnByb3RvdHlwZVtAQHNlYXJjaF0oc3RyaW5nKVxuICAgICAgOiBmdW5jdGlvbiAoc3RyaW5nKSB7IHJldHVybiByeGZuLmNhbGwoc3RyaW5nLCB0aGlzKTsgfVxuICAgICk7XG4gIH1cbn07XG4iLCIndXNlIHN0cmljdCc7XG4vLyAyMS4yLjUuMyBnZXQgUmVnRXhwLnByb3RvdHlwZS5mbGFnc1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHRoYXQgPSBhbk9iamVjdCh0aGlzKTtcbiAgdmFyIHJlc3VsdCA9ICcnO1xuICBpZiAodGhhdC5nbG9iYWwpIHJlc3VsdCArPSAnZyc7XG4gIGlmICh0aGF0Lmlnbm9yZUNhc2UpIHJlc3VsdCArPSAnaSc7XG4gIGlmICh0aGF0Lm11bHRpbGluZSkgcmVzdWx0ICs9ICdtJztcbiAgaWYgKHRoYXQudW5pY29kZSkgcmVzdWx0ICs9ICd1JztcbiAgaWYgKHRoYXQuc3RpY2t5KSByZXN1bHQgKz0gJ3knO1xuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsInZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBjYWxsID0gcmVxdWlyZSgnLi9faXRlci1jYWxsJyk7XG52YXIgaXNBcnJheUl0ZXIgPSByZXF1aXJlKCcuL19pcy1hcnJheS1pdGVyJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIGdldEl0ZXJGbiA9IHJlcXVpcmUoJy4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG52YXIgQlJFQUsgPSB7fTtcbnZhciBSRVRVUk4gPSB7fTtcbnZhciBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlcmFibGUsIGVudHJpZXMsIGZuLCB0aGF0LCBJVEVSQVRPUikge1xuICB2YXIgaXRlckZuID0gSVRFUkFUT1IgPyBmdW5jdGlvbiAoKSB7IHJldHVybiBpdGVyYWJsZTsgfSA6IGdldEl0ZXJGbihpdGVyYWJsZSk7XG4gIHZhciBmID0gY3R4KGZuLCB0aGF0LCBlbnRyaWVzID8gMiA6IDEpO1xuICB2YXIgaW5kZXggPSAwO1xuICB2YXIgbGVuZ3RoLCBzdGVwLCBpdGVyYXRvciwgcmVzdWx0O1xuICBpZiAodHlwZW9mIGl0ZXJGbiAhPSAnZnVuY3Rpb24nKSB0aHJvdyBUeXBlRXJyb3IoaXRlcmFibGUgKyAnIGlzIG5vdCBpdGVyYWJsZSEnKTtcbiAgLy8gZmFzdCBjYXNlIGZvciBhcnJheXMgd2l0aCBkZWZhdWx0IGl0ZXJhdG9yXG4gIGlmIChpc0FycmF5SXRlcihpdGVyRm4pKSBmb3IgKGxlbmd0aCA9IHRvTGVuZ3RoKGl0ZXJhYmxlLmxlbmd0aCk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKSB7XG4gICAgcmVzdWx0ID0gZW50cmllcyA/IGYoYW5PYmplY3Qoc3RlcCA9IGl0ZXJhYmxlW2luZGV4XSlbMF0sIHN0ZXBbMV0pIDogZihpdGVyYWJsZVtpbmRleF0pO1xuICAgIGlmIChyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKSByZXR1cm4gcmVzdWx0O1xuICB9IGVsc2UgZm9yIChpdGVyYXRvciA9IGl0ZXJGbi5jYWxsKGl0ZXJhYmxlKTsgIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOykge1xuICAgIHJlc3VsdCA9IGNhbGwoaXRlcmF0b3IsIGYsIHN0ZXAudmFsdWUsIGVudHJpZXMpO1xuICAgIGlmIChyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKSByZXR1cm4gcmVzdWx0O1xuICB9XG59O1xuZXhwb3J0cy5CUkVBSyA9IEJSRUFLO1xuZXhwb3J0cy5SRVRVUk4gPSBSRVRVUk47XG4iLCIvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxudmFyIGdsb2JhbCA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoXG4gID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZiAodHlwZW9mIF9fZyA9PSAnbnVtYmVyJykgX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4iLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59O1xuIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuIiwidmFyIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQ7XG5tb2R1bGUuZXhwb3J0cyA9IGRvY3VtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiIsIm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnZGl2JyksICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX3NldC1wcm90bycpLnNldDtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRoYXQsIHRhcmdldCwgQykge1xuICB2YXIgUyA9IHRhcmdldC5jb25zdHJ1Y3RvcjtcbiAgdmFyIFA7XG4gIGlmIChTICE9PSBDICYmIHR5cGVvZiBTID09ICdmdW5jdGlvbicgJiYgKFAgPSBTLnByb3RvdHlwZSkgIT09IEMucHJvdG90eXBlICYmIGlzT2JqZWN0KFApICYmIHNldFByb3RvdHlwZU9mKSB7XG4gICAgc2V0UHJvdG90eXBlT2YodGhhdCwgUCk7XG4gIH0gcmV0dXJuIHRoYXQ7XG59O1xuIiwiLy8gZmFzdCBhcHBseSwgaHR0cDovL2pzcGVyZi5sbmtpdC5jb20vZmFzdC1hcHBseS81XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbiwgYXJncywgdGhhdCkge1xuICB2YXIgdW4gPSB0aGF0ID09PSB1bmRlZmluZWQ7XG4gIHN3aXRjaCAoYXJncy5sZW5ndGgpIHtcbiAgICBjYXNlIDA6IHJldHVybiB1biA/IGZuKClcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCk7XG4gICAgY2FzZSAxOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdKTtcbiAgICBjYXNlIDI6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgIGNhc2UgMzogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgY2FzZSA0OiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKTtcbiAgfSByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJncyk7XG59O1xuIiwiLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCkgPyBPYmplY3QgOiBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTtcbiIsIi8vIGNoZWNrIG9uIGRlZmF1bHQgQXJyYXkgaXRlcmF0b3JcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCAhPT0gdW5kZWZpbmVkICYmIChJdGVyYXRvcnMuQXJyYXkgPT09IGl0IHx8IEFycmF5UHJvdG9bSVRFUkFUT1JdID09PSBpdCk7XG59O1xuIiwiLy8gNy4yLjIgSXNBcnJheShhcmd1bWVudClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiBpc0FycmF5KGFyZykge1xuICByZXR1cm4gY29mKGFyZykgPT0gJ0FycmF5Jztcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTtcbiIsIi8vIDcuMi44IElzUmVnRXhwKGFyZ3VtZW50KVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG52YXIgTUFUQ0ggPSByZXF1aXJlKCcuL193a3MnKSgnbWF0Y2gnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBpc1JlZ0V4cDtcbiAgcmV0dXJuIGlzT2JqZWN0KGl0KSAmJiAoKGlzUmVnRXhwID0gaXRbTUFUQ0hdKSAhPT0gdW5kZWZpbmVkID8gISFpc1JlZ0V4cCA6IGNvZihpdCkgPT0gJ1JlZ0V4cCcpO1xufTtcbiIsIi8vIGNhbGwgc29tZXRoaW5nIG9uIGl0ZXJhdG9yIHN0ZXAgd2l0aCBzYWZlIGNsb3Npbmcgb24gZXJyb3JcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlcmF0b3IsIGZuLCB2YWx1ZSwgZW50cmllcykge1xuICB0cnkge1xuICAgIHJldHVybiBlbnRyaWVzID8gZm4oYW5PYmplY3QodmFsdWUpWzBdLCB2YWx1ZVsxXSkgOiBmbih2YWx1ZSk7XG4gIC8vIDcuNC42IEl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsIGNvbXBsZXRpb24pXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB2YXIgcmV0ID0gaXRlcmF0b3JbJ3JldHVybiddO1xuICAgIGlmIChyZXQgIT09IHVuZGVmaW5lZCkgYW5PYmplY3QocmV0LmNhbGwoaXRlcmF0b3IpKTtcbiAgICB0aHJvdyBlO1xuICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKTtcbnZhciBkZXNjcmlwdG9yID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuXG4vLyAyNS4xLjIuMS4xICVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faGlkZScpKEl0ZXJhdG9yUHJvdG90eXBlLCByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KSB7XG4gIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9IGNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwgeyBuZXh0OiBkZXNjcmlwdG9yKDEsIG5leHQpIH0pO1xuICBzZXRUb1N0cmluZ1RhZyhDb25zdHJ1Y3RvciwgTkFNRSArICcgSXRlcmF0b3InKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgJGl0ZXJDcmVhdGUgPSByZXF1aXJlKCcuL19pdGVyLWNyZWF0ZScpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEJVR0dZID0gIShbXS5rZXlzICYmICduZXh0JyBpbiBbXS5rZXlzKCkpOyAvLyBTYWZhcmkgaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG52YXIgRkZfSVRFUkFUT1IgPSAnQEBpdGVyYXRvcic7XG52YXIgS0VZUyA9ICdrZXlzJztcbnZhciBWQUxVRVMgPSAndmFsdWVzJztcblxudmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChCYXNlLCBOQU1FLCBDb25zdHJ1Y3RvciwgbmV4dCwgREVGQVVMVCwgSVNfU0VULCBGT1JDRUQpIHtcbiAgJGl0ZXJDcmVhdGUoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpO1xuICB2YXIgZ2V0TWV0aG9kID0gZnVuY3Rpb24gKGtpbmQpIHtcbiAgICBpZiAoIUJVR0dZICYmIGtpbmQgaW4gcHJvdG8pIHJldHVybiBwcm90b1traW5kXTtcbiAgICBzd2l0Y2ggKGtpbmQpIHtcbiAgICAgIGNhc2UgS0VZUzogcmV0dXJuIGZ1bmN0aW9uIGtleXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgICBjYXNlIFZBTFVFUzogcmV0dXJuIGZ1bmN0aW9uIHZhbHVlcygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICB9IHJldHVybiBmdW5jdGlvbiBlbnRyaWVzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICB9O1xuICB2YXIgVEFHID0gTkFNRSArICcgSXRlcmF0b3InO1xuICB2YXIgREVGX1ZBTFVFUyA9IERFRkFVTFQgPT0gVkFMVUVTO1xuICB2YXIgVkFMVUVTX0JVRyA9IGZhbHNlO1xuICB2YXIgcHJvdG8gPSBCYXNlLnByb3RvdHlwZTtcbiAgdmFyICRuYXRpdmUgPSBwcm90b1tJVEVSQVRPUl0gfHwgcHJvdG9bRkZfSVRFUkFUT1JdIHx8IERFRkFVTFQgJiYgcHJvdG9bREVGQVVMVF07XG4gIHZhciAkZGVmYXVsdCA9ICRuYXRpdmUgfHwgZ2V0TWV0aG9kKERFRkFVTFQpO1xuICB2YXIgJGVudHJpZXMgPSBERUZBVUxUID8gIURFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZCgnZW50cmllcycpIDogdW5kZWZpbmVkO1xuICB2YXIgJGFueU5hdGl2ZSA9IE5BTUUgPT0gJ0FycmF5JyA/IHByb3RvLmVudHJpZXMgfHwgJG5hdGl2ZSA6ICRuYXRpdmU7XG4gIHZhciBtZXRob2RzLCBrZXksIEl0ZXJhdG9yUHJvdG90eXBlO1xuICAvLyBGaXggbmF0aXZlXG4gIGlmICgkYW55TmF0aXZlKSB7XG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZigkYW55TmF0aXZlLmNhbGwobmV3IEJhc2UoKSkpO1xuICAgIGlmIChJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSAmJiBJdGVyYXRvclByb3RvdHlwZS5uZXh0KSB7XG4gICAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXG4gICAgICBzZXRUb1N0cmluZ1RhZyhJdGVyYXRvclByb3RvdHlwZSwgVEFHLCB0cnVlKTtcbiAgICAgIC8vIGZpeCBmb3Igc29tZSBvbGQgZW5naW5lc1xuICAgICAgaWYgKCFMSUJSQVJZICYmIHR5cGVvZiBJdGVyYXRvclByb3RvdHlwZVtJVEVSQVRPUl0gIT0gJ2Z1bmN0aW9uJykgaGlkZShJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIHJldHVyblRoaXMpO1xuICAgIH1cbiAgfVxuICAvLyBmaXggQXJyYXkje3ZhbHVlcywgQEBpdGVyYXRvcn0ubmFtZSBpbiBWOCAvIEZGXG4gIGlmIChERUZfVkFMVUVTICYmICRuYXRpdmUgJiYgJG5hdGl2ZS5uYW1lICE9PSBWQUxVRVMpIHtcbiAgICBWQUxVRVNfQlVHID0gdHJ1ZTtcbiAgICAkZGVmYXVsdCA9IGZ1bmN0aW9uIHZhbHVlcygpIHsgcmV0dXJuICRuYXRpdmUuY2FsbCh0aGlzKTsgfTtcbiAgfVxuICAvLyBEZWZpbmUgaXRlcmF0b3JcbiAgaWYgKCghTElCUkFSWSB8fCBGT1JDRUQpICYmIChCVUdHWSB8fCBWQUxVRVNfQlVHIHx8ICFwcm90b1tJVEVSQVRPUl0pKSB7XG4gICAgaGlkZShwcm90bywgSVRFUkFUT1IsICRkZWZhdWx0KTtcbiAgfVxuICAvLyBQbHVnIGZvciBsaWJyYXJ5XG4gIEl0ZXJhdG9yc1tOQU1FXSA9ICRkZWZhdWx0O1xuICBJdGVyYXRvcnNbVEFHXSA9IHJldHVyblRoaXM7XG4gIGlmIChERUZBVUxUKSB7XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHZhbHVlczogREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKFZBTFVFUyksXG4gICAgICBrZXlzOiBJU19TRVQgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChLRVlTKSxcbiAgICAgIGVudHJpZXM6ICRlbnRyaWVzXG4gICAgfTtcbiAgICBpZiAoRk9SQ0VEKSBmb3IgKGtleSBpbiBtZXRob2RzKSB7XG4gICAgICBpZiAoIShrZXkgaW4gcHJvdG8pKSByZWRlZmluZShwcm90bywga2V5LCBtZXRob2RzW2tleV0pO1xuICAgIH0gZWxzZSAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChCVUdHWSB8fCBWQUxVRVNfQlVHKSwgTkFNRSwgbWV0aG9kcyk7XG4gIH1cbiAgcmV0dXJuIG1ldGhvZHM7XG59O1xuIiwidmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgU0FGRV9DTE9TSU5HID0gZmFsc2U7XG5cbnRyeSB7XG4gIHZhciByaXRlciA9IFs3XVtJVEVSQVRPUl0oKTtcbiAgcml0ZXJbJ3JldHVybiddID0gZnVuY3Rpb24gKCkgeyBTQUZFX0NMT1NJTkcgPSB0cnVlOyB9O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdGhyb3ctbGl0ZXJhbFxuICBBcnJheS5mcm9tKHJpdGVyLCBmdW5jdGlvbiAoKSB7IHRocm93IDI7IH0pO1xufSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMsIHNraXBDbG9zaW5nKSB7XG4gIGlmICghc2tpcENsb3NpbmcgJiYgIVNBRkVfQ0xPU0lORykgcmV0dXJuIGZhbHNlO1xuICB2YXIgc2FmZSA9IGZhbHNlO1xuICB0cnkge1xuICAgIHZhciBhcnIgPSBbN107XG4gICAgdmFyIGl0ZXIgPSBhcnJbSVRFUkFUT1JdKCk7XG4gICAgaXRlci5uZXh0ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4geyBkb25lOiBzYWZlID0gdHJ1ZSB9OyB9O1xuICAgIGFycltJVEVSQVRPUl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBpdGVyOyB9O1xuICAgIGV4ZWMoYXJyKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIHJldHVybiBzYWZlO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGRvbmUsIHZhbHVlKSB7XG4gIHJldHVybiB7IHZhbHVlOiB2YWx1ZSwgZG9uZTogISFkb25lIH07XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZmFsc2U7XG4iLCJ2YXIgTUVUQSA9IHJlcXVpcmUoJy4vX3VpZCcpKCdtZXRhJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBzZXREZXNjID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBpZCA9IDA7XG52YXIgaXNFeHRlbnNpYmxlID0gT2JqZWN0LmlzRXh0ZW5zaWJsZSB8fCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0cnVlO1xufTtcbnZhciBGUkVFWkUgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBpc0V4dGVuc2libGUoT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zKHt9KSk7XG59KTtcbnZhciBzZXRNZXRhID0gZnVuY3Rpb24gKGl0KSB7XG4gIHNldERlc2MoaXQsIE1FVEEsIHsgdmFsdWU6IHtcbiAgICBpOiAnTycgKyArK2lkLCAvLyBvYmplY3QgSURcbiAgICB3OiB7fSAgICAgICAgICAvLyB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9IH0pO1xufTtcbnZhciBmYXN0S2V5ID0gZnVuY3Rpb24gKGl0LCBjcmVhdGUpIHtcbiAgLy8gcmV0dXJuIHByaW1pdGl2ZSB3aXRoIHByZWZpeFxuICBpZiAoIWlzT2JqZWN0KGl0KSkgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJyA/IGl0IDogKHR5cGVvZiBpdCA9PSAnc3RyaW5nJyA/ICdTJyA6ICdQJykgKyBpdDtcbiAgaWYgKCFoYXMoaXQsIE1FVEEpKSB7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZiAoIWlzRXh0ZW5zaWJsZShpdCkpIHJldHVybiAnRic7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZiAoIWNyZWF0ZSkgcmV0dXJuICdFJztcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gb2JqZWN0IElEXG4gIH0gcmV0dXJuIGl0W01FVEFdLmk7XG59O1xudmFyIGdldFdlYWsgPSBmdW5jdGlvbiAoaXQsIGNyZWF0ZSkge1xuICBpZiAoIWhhcyhpdCwgTUVUQSkpIHtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmICghaXNFeHRlbnNpYmxlKGl0KSkgcmV0dXJuIHRydWU7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZiAoIWNyZWF0ZSkgcmV0dXJuIGZhbHNlO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBoYXNoIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH0gcmV0dXJuIGl0W01FVEFdLnc7XG59O1xuLy8gYWRkIG1ldGFkYXRhIG9uIGZyZWV6ZS1mYW1pbHkgbWV0aG9kcyBjYWxsaW5nXG52YXIgb25GcmVlemUgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKEZSRUVaRSAmJiBtZXRhLk5FRUQgJiYgaXNFeHRlbnNpYmxlKGl0KSAmJiAhaGFzKGl0LCBNRVRBKSkgc2V0TWV0YShpdCk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgbWV0YSA9IG1vZHVsZS5leHBvcnRzID0ge1xuICBLRVk6IE1FVEEsXG4gIE5FRUQ6IGZhbHNlLFxuICBmYXN0S2V5OiBmYXN0S2V5LFxuICBnZXRXZWFrOiBnZXRXZWFrLFxuICBvbkZyZWV6ZTogb25GcmVlemVcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgbWFjcm90YXNrID0gcmVxdWlyZSgnLi9fdGFzaycpLnNldDtcbnZhciBPYnNlcnZlciA9IGdsb2JhbC5NdXRhdGlvbk9ic2VydmVyIHx8IGdsb2JhbC5XZWJLaXRNdXRhdGlvbk9ic2VydmVyO1xudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciBQcm9taXNlID0gZ2xvYmFsLlByb21pc2U7XG52YXIgaXNOb2RlID0gcmVxdWlyZSgnLi9fY29mJykocHJvY2VzcykgPT0gJ3Byb2Nlc3MnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhlYWQsIGxhc3QsIG5vdGlmeTtcblxuICB2YXIgZmx1c2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHBhcmVudCwgZm47XG4gICAgaWYgKGlzTm9kZSAmJiAocGFyZW50ID0gcHJvY2Vzcy5kb21haW4pKSBwYXJlbnQuZXhpdCgpO1xuICAgIHdoaWxlIChoZWFkKSB7XG4gICAgICBmbiA9IGhlYWQuZm47XG4gICAgICBoZWFkID0gaGVhZC5uZXh0O1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm4oKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaWYgKGhlYWQpIG5vdGlmeSgpO1xuICAgICAgICBlbHNlIGxhc3QgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgIGlmIChwYXJlbnQpIHBhcmVudC5lbnRlcigpO1xuICB9O1xuXG4gIC8vIE5vZGUuanNcbiAgaWYgKGlzTm9kZSkge1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soZmx1c2gpO1xuICAgIH07XG4gIC8vIGJyb3dzZXJzIHdpdGggTXV0YXRpb25PYnNlcnZlciwgZXhjZXB0IGlPUyBTYWZhcmkgLSBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMzM5XG4gIH0gZWxzZSBpZiAoT2JzZXJ2ZXIgJiYgIShnbG9iYWwubmF2aWdhdG9yICYmIGdsb2JhbC5uYXZpZ2F0b3Iuc3RhbmRhbG9uZSkpIHtcbiAgICB2YXIgdG9nZ2xlID0gdHJ1ZTtcbiAgICB2YXIgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgICBuZXcgT2JzZXJ2ZXIoZmx1c2gpLm9ic2VydmUobm9kZSwgeyBjaGFyYWN0ZXJEYXRhOiB0cnVlIH0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIG5vZGUuZGF0YSA9IHRvZ2dsZSA9ICF0b2dnbGU7XG4gICAgfTtcbiAgLy8gZW52aXJvbm1lbnRzIHdpdGggbWF5YmUgbm9uLWNvbXBsZXRlbHkgY29ycmVjdCwgYnV0IGV4aXN0ZW50IFByb21pc2VcbiAgfSBlbHNlIGlmIChQcm9taXNlICYmIFByb21pc2UucmVzb2x2ZSkge1xuICAgIC8vIFByb21pc2UucmVzb2x2ZSB3aXRob3V0IGFuIGFyZ3VtZW50IHRocm93cyBhbiBlcnJvciBpbiBMRyBXZWJPUyAyXG4gICAgdmFyIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUodW5kZWZpbmVkKTtcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBwcm9taXNlLnRoZW4oZmx1c2gpO1xuICAgIH07XG4gIC8vIGZvciBvdGhlciBlbnZpcm9ubWVudHMgLSBtYWNyb3Rhc2sgYmFzZWQgb246XG4gIC8vIC0gc2V0SW1tZWRpYXRlXG4gIC8vIC0gTWVzc2FnZUNoYW5uZWxcbiAgLy8gLSB3aW5kb3cucG9zdE1lc3NhZ1xuICAvLyAtIG9ucmVhZHlzdGF0ZWNoYW5nZVxuICAvLyAtIHNldFRpbWVvdXRcbiAgfSBlbHNlIHtcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBzdHJhbmdlIElFICsgd2VicGFjayBkZXYgc2VydmVyIGJ1ZyAtIHVzZSAuY2FsbChnbG9iYWwpXG4gICAgICBtYWNyb3Rhc2suY2FsbChnbG9iYWwsIGZsdXNoKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChmbikge1xuICAgIHZhciB0YXNrID0geyBmbjogZm4sIG5leHQ6IHVuZGVmaW5lZCB9O1xuICAgIGlmIChsYXN0KSBsYXN0Lm5leHQgPSB0YXNrO1xuICAgIGlmICghaGVhZCkge1xuICAgICAgaGVhZCA9IHRhc2s7XG4gICAgICBub3RpZnkoKTtcbiAgICB9IGxhc3QgPSB0YXNrO1xuICB9O1xufTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIDI1LjQuMS41IE5ld1Byb21pc2VDYXBhYmlsaXR5KEMpXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xuXG5mdW5jdGlvbiBQcm9taXNlQ2FwYWJpbGl0eShDKSB7XG4gIHZhciByZXNvbHZlLCByZWplY3Q7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBDKGZ1bmN0aW9uICgkJHJlc29sdmUsICQkcmVqZWN0KSB7XG4gICAgaWYgKHJlc29sdmUgIT09IHVuZGVmaW5lZCB8fCByZWplY3QgIT09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKCdCYWQgUHJvbWlzZSBjb25zdHJ1Y3RvcicpO1xuICAgIHJlc29sdmUgPSAkJHJlc29sdmU7XG4gICAgcmVqZWN0ID0gJCRyZWplY3Q7XG4gIH0pO1xuICB0aGlzLnJlc29sdmUgPSBhRnVuY3Rpb24ocmVzb2x2ZSk7XG4gIHRoaXMucmVqZWN0ID0gYUZ1bmN0aW9uKHJlamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzLmYgPSBmdW5jdGlvbiAoQykge1xuICByZXR1cm4gbmV3IFByb21pc2VDYXBhYmlsaXR5KEMpO1xufTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIDE5LjEuMi4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UsIC4uLilcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciBnT1BTID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKTtcbnZhciBwSUUgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpO1xudmFyICRhc3NpZ24gPSBPYmplY3QuYXNzaWduO1xuXG4vLyBzaG91bGQgd29yayB3aXRoIHN5bWJvbHMgYW5kIHNob3VsZCBoYXZlIGRldGVybWluaXN0aWMgcHJvcGVydHkgb3JkZXIgKFY4IGJ1Zylcbm1vZHVsZS5leHBvcnRzID0gISRhc3NpZ24gfHwgcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHZhciBBID0ge307XG4gIHZhciBCID0ge307XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgUyA9IFN5bWJvbCgpO1xuICB2YXIgSyA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdCc7XG4gIEFbU10gPSA3O1xuICBLLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7IEJba10gPSBrOyB9KTtcbiAgcmV0dXJuICRhc3NpZ24oe30sIEEpW1NdICE9IDcgfHwgT2JqZWN0LmtleXMoJGFzc2lnbih7fSwgQikpLmpvaW4oJycpICE9IEs7XG59KSA/IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIHZhciBUID0gdG9PYmplY3QodGFyZ2V0KTtcbiAgdmFyIGFMZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICB2YXIgaW5kZXggPSAxO1xuICB2YXIgZ2V0U3ltYm9scyA9IGdPUFMuZjtcbiAgdmFyIGlzRW51bSA9IHBJRS5mO1xuICB3aGlsZSAoYUxlbiA+IGluZGV4KSB7XG4gICAgdmFyIFMgPSBJT2JqZWN0KGFyZ3VtZW50c1tpbmRleCsrXSk7XG4gICAgdmFyIGtleXMgPSBnZXRTeW1ib2xzID8gZ2V0S2V5cyhTKS5jb25jYXQoZ2V0U3ltYm9scyhTKSkgOiBnZXRLZXlzKFMpO1xuICAgIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgICB2YXIgaiA9IDA7XG4gICAgdmFyIGtleTtcbiAgICB3aGlsZSAobGVuZ3RoID4gaikgaWYgKGlzRW51bS5jYWxsKFMsIGtleSA9IGtleXNbaisrXSkpIFRba2V5XSA9IFNba2V5XTtcbiAgfSByZXR1cm4gVDtcbn0gOiAkYXNzaWduO1xuIiwiLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBkUHMgPSByZXF1aXJlKCcuL19vYmplY3QtZHBzJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG52YXIgRW1wdHkgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBjcmVhdGVEaWN0ID0gZnVuY3Rpb24gKCkge1xuICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xuICB2YXIgaWZyYW1lID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdpZnJhbWUnKTtcbiAgdmFyIGkgPSBlbnVtQnVnS2V5cy5sZW5ndGg7XG4gIHZhciBsdCA9ICc8JztcbiAgdmFyIGd0ID0gJz4nO1xuICB2YXIgaWZyYW1lRG9jdW1lbnQ7XG4gIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICByZXF1aXJlKCcuL19odG1sJykuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lLnNyYyA9ICdqYXZhc2NyaXB0Oic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2NyaXB0LXVybFxuICAvLyBjcmVhdGVEaWN0ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuT2JqZWN0O1xuICAvLyBodG1sLnJlbW92ZUNoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcbiAgaWZyYW1lRG9jdW1lbnQud3JpdGUobHQgKyAnc2NyaXB0JyArIGd0ICsgJ2RvY3VtZW50LkY9T2JqZWN0JyArIGx0ICsgJy9zY3JpcHQnICsgZ3QpO1xuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xuICBjcmVhdGVEaWN0ID0gaWZyYW1lRG9jdW1lbnQuRjtcbiAgd2hpbGUgKGktLSkgZGVsZXRlIGNyZWF0ZURpY3RbUFJPVE9UWVBFXVtlbnVtQnVnS2V5c1tpXV07XG4gIHJldHVybiBjcmVhdGVEaWN0KCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKE8gIT09IG51bGwpIHtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5KCk7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IG51bGw7XG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuICB9IGVsc2UgcmVzdWx0ID0gY3JlYXRlRGljdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZFBzKHJlc3VsdCwgUHJvcGVydGllcyk7XG59O1xuIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgZFAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIGRQKE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcykgdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgaWYgKCd2YWx1ZScgaW4gQXR0cmlidXRlcykgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcbiIsInZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICB2YXIga2V5cyA9IGdldEtleXMoUHJvcGVydGllcyk7XG4gIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgdmFyIGkgPSAwO1xuICB2YXIgUDtcbiAgd2hpbGUgKGxlbmd0aCA+IGkpIGRQLmYoTywgUCA9IGtleXNbaSsrXSwgUHJvcGVydGllc1tQXSk7XG4gIHJldHVybiBPO1xufTtcbiIsInZhciBwSUUgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJyk7XG52YXIgZ09QRCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBnT1BEIDogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApIHtcbiAgTyA9IHRvSU9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIGdPUEQoTywgUCk7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoaGFzKE8sIFApKSByZXR1cm4gY3JlYXRlRGVzYyghcElFLmYuY2FsbChPLCBQKSwgT1tQXSk7XG59O1xuIiwiLy8gZmFsbGJhY2sgZm9yIElFMTEgYnVnZ3kgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgd2l0aCBpZnJhbWUgYW5kIHdpbmRvd1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciBnT1BOID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mO1xudmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbnZhciB3aW5kb3dOYW1lcyA9IHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgd2luZG93ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzXG4gID8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMod2luZG93KSA6IFtdO1xuXG52YXIgZ2V0V2luZG93TmFtZXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZ09QTihpdCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gd2luZG93TmFtZXMuc2xpY2UoKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMuZiA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpIHtcbiAgcmV0dXJuIHdpbmRvd05hbWVzICYmIHRvU3RyaW5nLmNhbGwoaXQpID09ICdbb2JqZWN0IFdpbmRvd10nID8gZ2V0V2luZG93TmFtZXMoaXQpIDogZ09QTih0b0lPYmplY3QoaXQpKTtcbn07XG4iLCIvLyAxOS4xLjIuNyAvIDE1LjIuMy40IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJykuY29uY2F0KCdsZW5ndGgnLCAncHJvdG90eXBlJyk7XG5cbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoTykge1xuICByZXR1cm4gJGtleXMoTywgaGlkZGVuS2V5cyk7XG59O1xuIiwiZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbiIsIi8vIDE5LjEuMi45IC8gMTUuMi4zLjIgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcbnZhciBPYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIChPKSB7XG4gIE8gPSB0b09iamVjdChPKTtcbiAgaWYgKGhhcyhPLCBJRV9QUk9UTykpIHJldHVybiBPW0lFX1BST1RPXTtcbiAgaWYgKHR5cGVvZiBPLmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgTyBpbnN0YW5jZW9mIE8uY29uc3RydWN0b3IpIHtcbiAgICByZXR1cm4gTy5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIH0gcmV0dXJuIE8gaW5zdGFuY2VvZiBPYmplY3QgPyBPYmplY3RQcm90byA6IG51bGw7XG59O1xuIiwidmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciBhcnJheUluZGV4T2YgPSByZXF1aXJlKCcuL19hcnJheS1pbmNsdWRlcycpKGZhbHNlKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lcykge1xuICB2YXIgTyA9IHRvSU9iamVjdChvYmplY3QpO1xuICB2YXIgaSA9IDA7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGtleTtcbiAgZm9yIChrZXkgaW4gTykgaWYgKGtleSAhPSBJRV9QUk9UTykgaGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkgaWYgKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSkge1xuICAgIH5hcnJheUluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHJlc3VsdC5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCIvLyAxOS4xLjIuMTQgLyAxNS4yLjMuMTQgT2JqZWN0LmtleXMoTylcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKSB7XG4gIHJldHVybiAka2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59O1xuIiwiZXhwb3J0cy5mID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG4iLCIvLyBtb3N0IE9iamVjdCBtZXRob2RzIGJ5IEVTNiBzaG91bGQgYWNjZXB0IHByaW1pdGl2ZXNcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChLRVksIGV4ZWMpIHtcbiAgdmFyIGZuID0gKGNvcmUuT2JqZWN0IHx8IHt9KVtLRVldIHx8IE9iamVjdFtLRVldO1xuICB2YXIgZXhwID0ge307XG4gIGV4cFtLRVldID0gZXhlYyhmbik7XG4gICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogZmFpbHMoZnVuY3Rpb24gKCkgeyBmbigxKTsgfSksICdPYmplY3QnLCBleHApO1xufTtcbiIsInZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgaXNFbnVtID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpLmY7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpc0VudHJpZXMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChpdCkge1xuICAgIHZhciBPID0gdG9JT2JqZWN0KGl0KTtcbiAgICB2YXIga2V5cyA9IGdldEtleXMoTyk7XG4gICAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgdmFyIGtleTtcbiAgICB3aGlsZSAobGVuZ3RoID4gaSkgaWYgKGlzRW51bS5jYWxsKE8sIGtleSA9IGtleXNbaSsrXSkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGlzRW50cmllcyA/IFtrZXksIE9ba2V5XV0gOiBPW2tleV0pO1xuICAgIH0gcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHsgZTogZmFsc2UsIHY6IGV4ZWMoKSB9O1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHsgZTogdHJ1ZSwgdjogZSB9O1xuICB9XG59O1xuIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IHJlcXVpcmUoJy4vX25ldy1wcm9taXNlLWNhcGFiaWxpdHknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQywgeCkge1xuICBhbk9iamVjdChDKTtcbiAgaWYgKGlzT2JqZWN0KHgpICYmIHguY29uc3RydWN0b3IgPT09IEMpIHJldHVybiB4O1xuICB2YXIgcHJvbWlzZUNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eS5mKEMpO1xuICB2YXIgcmVzb2x2ZSA9IHByb21pc2VDYXBhYmlsaXR5LnJlc29sdmU7XG4gIHJlc29sdmUoeCk7XG4gIHJldHVybiBwcm9taXNlQ2FwYWJpbGl0eS5wcm9taXNlO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGJpdG1hcCwgdmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZTogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfTtcbn07XG4iLCJ2YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodGFyZ2V0LCBzcmMsIHNhZmUpIHtcbiAgZm9yICh2YXIga2V5IGluIHNyYykgcmVkZWZpbmUodGFyZ2V0LCBrZXksIHNyY1trZXldLCBzYWZlKTtcbiAgcmV0dXJuIHRhcmdldDtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBTUkMgPSByZXF1aXJlKCcuL191aWQnKSgnc3JjJyk7XG52YXIgVE9fU1RSSU5HID0gJ3RvU3RyaW5nJztcbnZhciAkdG9TdHJpbmcgPSBGdW5jdGlvbltUT19TVFJJTkddO1xudmFyIFRQTCA9ICgnJyArICR0b1N0cmluZykuc3BsaXQoVE9fU1RSSU5HKTtcblxucmVxdWlyZSgnLi9fY29yZScpLmluc3BlY3RTb3VyY2UgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuICR0b1N0cmluZy5jYWxsKGl0KTtcbn07XG5cbihtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBrZXksIHZhbCwgc2FmZSkge1xuICB2YXIgaXNGdW5jdGlvbiA9IHR5cGVvZiB2YWwgPT0gJ2Z1bmN0aW9uJztcbiAgaWYgKGlzRnVuY3Rpb24pIGhhcyh2YWwsICduYW1lJykgfHwgaGlkZSh2YWwsICduYW1lJywga2V5KTtcbiAgaWYgKE9ba2V5XSA9PT0gdmFsKSByZXR1cm47XG4gIGlmIChpc0Z1bmN0aW9uKSBoYXModmFsLCBTUkMpIHx8IGhpZGUodmFsLCBTUkMsIE9ba2V5XSA/ICcnICsgT1trZXldIDogVFBMLmpvaW4oU3RyaW5nKGtleSkpKTtcbiAgaWYgKE8gPT09IGdsb2JhbCkge1xuICAgIE9ba2V5XSA9IHZhbDtcbiAgfSBlbHNlIGlmICghc2FmZSkge1xuICAgIGRlbGV0ZSBPW2tleV07XG4gICAgaGlkZShPLCBrZXksIHZhbCk7XG4gIH0gZWxzZSBpZiAoT1trZXldKSB7XG4gICAgT1trZXldID0gdmFsO1xuICB9IGVsc2Uge1xuICAgIGhpZGUoTywga2V5LCB2YWwpO1xuICB9XG4vLyBhZGQgZmFrZSBGdW5jdGlvbiN0b1N0cmluZyBmb3IgY29ycmVjdCB3b3JrIHdyYXBwZWQgbWV0aG9kcyAvIGNvbnN0cnVjdG9ycyB3aXRoIG1ldGhvZHMgbGlrZSBMb0Rhc2ggaXNOYXRpdmVcbn0pKEZ1bmN0aW9uLnByb3RvdHlwZSwgVE9fU1RSSU5HLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuIHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgJiYgdGhpc1tTUkNdIHx8ICR0b1N0cmluZy5jYWxsKHRoaXMpO1xufSk7XG4iLCIvLyBXb3JrcyB3aXRoIF9fcHJvdG9fXyBvbmx5LiBPbGQgdjggY2FuJ3Qgd29yayB3aXRoIG51bGwgcHJvdG8gb2JqZWN0cy5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvICovXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGNoZWNrID0gZnVuY3Rpb24gKE8sIHByb3RvKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBpZiAoIWlzT2JqZWN0KHByb3RvKSAmJiBwcm90byAhPT0gbnVsbCkgdGhyb3cgVHlwZUVycm9yKHByb3RvICsgXCI6IGNhbid0IHNldCBhcyBwcm90b3R5cGUhXCIpO1xufTtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCAoJ19fcHJvdG9fXycgaW4ge30gPyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgZnVuY3Rpb24gKHRlc3QsIGJ1Z2d5LCBzZXQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHNldCA9IHJlcXVpcmUoJy4vX2N0eCcpKEZ1bmN0aW9uLmNhbGwsIHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJykuZihPYmplY3QucHJvdG90eXBlLCAnX19wcm90b19fJykuc2V0LCAyKTtcbiAgICAgICAgc2V0KHRlc3QsIFtdKTtcbiAgICAgICAgYnVnZ3kgPSAhKHRlc3QgaW5zdGFuY2VvZiBBcnJheSk7XG4gICAgICB9IGNhdGNoIChlKSB7IGJ1Z2d5ID0gdHJ1ZTsgfVxuICAgICAgcmV0dXJuIGZ1bmN0aW9uIHNldFByb3RvdHlwZU9mKE8sIHByb3RvKSB7XG4gICAgICAgIGNoZWNrKE8sIHByb3RvKTtcbiAgICAgICAgaWYgKGJ1Z2d5KSBPLl9fcHJvdG9fXyA9IHByb3RvO1xuICAgICAgICBlbHNlIHNldChPLCBwcm90byk7XG4gICAgICAgIHJldHVybiBPO1xuICAgICAgfTtcbiAgICB9KHt9LCBmYWxzZSkgOiB1bmRlZmluZWQpLFxuICBjaGVjazogY2hlY2tcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyk7XG52YXIgU1BFQ0lFUyA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEtFWSkge1xuICB2YXIgQyA9IGdsb2JhbFtLRVldO1xuICBpZiAoREVTQ1JJUFRPUlMgJiYgQyAmJiAhQ1tTUEVDSUVTXSkgZFAuZihDLCBTUEVDSUVTLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfVxuICB9KTtcbn07XG4iLCJ2YXIgZGVmID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIHRhZywgc3RhdCkge1xuICBpZiAoaXQgJiYgIWhhcyhpdCA9IHN0YXQgPyBpdCA6IGl0LnByb3RvdHlwZSwgVEFHKSkgZGVmKGl0LCBUQUcsIHsgY29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogdGFnIH0pO1xufTtcbiIsInZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgna2V5cycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBzaGFyZWRba2V5XSB8fCAoc2hhcmVkW2tleV0gPSB1aWQoa2V5KSk7XG59O1xuIiwidmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXyc7XG52YXIgc3RvcmUgPSBnbG9iYWxbU0hBUkVEXSB8fCAoZ2xvYmFsW1NIQVJFRF0gPSB7fSk7XG5cbihtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0gdmFsdWUgIT09IHVuZGVmaW5lZCA/IHZhbHVlIDoge30pO1xufSkoJ3ZlcnNpb25zJywgW10pLnB1c2goe1xuICB2ZXJzaW9uOiBjb3JlLnZlcnNpb24sXG4gIG1vZGU6IHJlcXVpcmUoJy4vX2xpYnJhcnknKSA/ICdwdXJlJyA6ICdnbG9iYWwnLFxuICBjb3B5cmlnaHQ6ICfCqSAyMDE4IERlbmlzIFB1c2hrYXJldiAoemxvaXJvY2sucnUpJ1xufSk7XG4iLCIvLyA3LjMuMjAgU3BlY2llc0NvbnN0cnVjdG9yKE8sIGRlZmF1bHRDb25zdHJ1Y3RvcilcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbnZhciBTUEVDSUVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE8sIEQpIHtcbiAgdmFyIEMgPSBhbk9iamVjdChPKS5jb25zdHJ1Y3RvcjtcbiAgdmFyIFM7XG4gIHJldHVybiBDID09PSB1bmRlZmluZWQgfHwgKFMgPSBhbk9iamVjdChDKVtTUEVDSUVTXSkgPT0gdW5kZWZpbmVkID8gRCA6IGFGdW5jdGlvbihTKTtcbn07XG4iLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG4vLyB0cnVlICAtPiBTdHJpbmcjYXRcbi8vIGZhbHNlIC0+IFN0cmluZyNjb2RlUG9pbnRBdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoVE9fU1RSSU5HKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodGhhdCwgcG9zKSB7XG4gICAgdmFyIHMgPSBTdHJpbmcoZGVmaW5lZCh0aGF0KSk7XG4gICAgdmFyIGkgPSB0b0ludGVnZXIocG9zKTtcbiAgICB2YXIgbCA9IHMubGVuZ3RoO1xuICAgIHZhciBhLCBiO1xuICAgIGlmIChpIDwgMCB8fCBpID49IGwpIHJldHVybiBUT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcbiAgICBhID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgIHJldHVybiBhIDwgMHhkODAwIHx8IGEgPiAweGRiZmYgfHwgaSArIDEgPT09IGwgfHwgKGIgPSBzLmNoYXJDb2RlQXQoaSArIDEpKSA8IDB4ZGMwMCB8fCBiID4gMHhkZmZmXG4gICAgICA/IFRPX1NUUklORyA/IHMuY2hhckF0KGkpIDogYVxuICAgICAgOiBUT19TVFJJTkcgPyBzLnNsaWNlKGksIGkgKyAyKSA6IChhIC0gMHhkODAwIDw8IDEwKSArIChiIC0gMHhkYzAwKSArIDB4MTAwMDA7XG4gIH07XG59O1xuIiwidmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGludm9rZSA9IHJlcXVpcmUoJy4vX2ludm9rZScpO1xudmFyIGh0bWwgPSByZXF1aXJlKCcuL19odG1sJyk7XG52YXIgY2VsID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciBzZXRUYXNrID0gZ2xvYmFsLnNldEltbWVkaWF0ZTtcbnZhciBjbGVhclRhc2sgPSBnbG9iYWwuY2xlYXJJbW1lZGlhdGU7XG52YXIgTWVzc2FnZUNoYW5uZWwgPSBnbG9iYWwuTWVzc2FnZUNoYW5uZWw7XG52YXIgRGlzcGF0Y2ggPSBnbG9iYWwuRGlzcGF0Y2g7XG52YXIgY291bnRlciA9IDA7XG52YXIgcXVldWUgPSB7fTtcbnZhciBPTlJFQURZU1RBVEVDSEFOR0UgPSAnb25yZWFkeXN0YXRlY2hhbmdlJztcbnZhciBkZWZlciwgY2hhbm5lbCwgcG9ydDtcbnZhciBydW4gPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBpZCA9ICt0aGlzO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG4gIGlmIChxdWV1ZS5oYXNPd25Qcm9wZXJ0eShpZCkpIHtcbiAgICB2YXIgZm4gPSBxdWV1ZVtpZF07XG4gICAgZGVsZXRlIHF1ZXVlW2lkXTtcbiAgICBmbigpO1xuICB9XG59O1xudmFyIGxpc3RlbmVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIHJ1bi5jYWxsKGV2ZW50LmRhdGEpO1xufTtcbi8vIE5vZGUuanMgMC45KyAmIElFMTArIGhhcyBzZXRJbW1lZGlhdGUsIG90aGVyd2lzZTpcbmlmICghc2V0VGFzayB8fCAhY2xlYXJUYXNrKSB7XG4gIHNldFRhc2sgPSBmdW5jdGlvbiBzZXRJbW1lZGlhdGUoZm4pIHtcbiAgICB2YXIgYXJncyA9IFtdO1xuICAgIHZhciBpID0gMTtcbiAgICB3aGlsZSAoYXJndW1lbnRzLmxlbmd0aCA+IGkpIGFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgcXVldWVbKytjb3VudGVyXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICAgICAgaW52b2tlKHR5cGVvZiBmbiA9PSAnZnVuY3Rpb24nID8gZm4gOiBGdW5jdGlvbihmbiksIGFyZ3MpO1xuICAgIH07XG4gICAgZGVmZXIoY291bnRlcik7XG4gICAgcmV0dXJuIGNvdW50ZXI7XG4gIH07XG4gIGNsZWFyVGFzayA9IGZ1bmN0aW9uIGNsZWFySW1tZWRpYXRlKGlkKSB7XG4gICAgZGVsZXRlIHF1ZXVlW2lkXTtcbiAgfTtcbiAgLy8gTm9kZS5qcyAwLjgtXG4gIGlmIChyZXF1aXJlKCcuL19jb2YnKShwcm9jZXNzKSA9PSAncHJvY2VzcycpIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhjdHgocnVuLCBpZCwgMSkpO1xuICAgIH07XG4gIC8vIFNwaGVyZSAoSlMgZ2FtZSBlbmdpbmUpIERpc3BhdGNoIEFQSVxuICB9IGVsc2UgaWYgKERpc3BhdGNoICYmIERpc3BhdGNoLm5vdykge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBEaXNwYXRjaC5ub3coY3R4KHJ1biwgaWQsIDEpKTtcbiAgICB9O1xuICAvLyBCcm93c2VycyB3aXRoIE1lc3NhZ2VDaGFubmVsLCBpbmNsdWRlcyBXZWJXb3JrZXJzXG4gIH0gZWxzZSBpZiAoTWVzc2FnZUNoYW5uZWwpIHtcbiAgICBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgcG9ydCA9IGNoYW5uZWwucG9ydDI7XG4gICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBsaXN0ZW5lcjtcbiAgICBkZWZlciA9IGN0eChwb3J0LnBvc3RNZXNzYWdlLCBwb3J0LCAxKTtcbiAgLy8gQnJvd3NlcnMgd2l0aCBwb3N0TWVzc2FnZSwgc2tpcCBXZWJXb3JrZXJzXG4gIC8vIElFOCBoYXMgcG9zdE1lc3NhZ2UsIGJ1dCBpdCdzIHN5bmMgJiB0eXBlb2YgaXRzIHBvc3RNZXNzYWdlIGlzICdvYmplY3QnXG4gIH0gZWxzZSBpZiAoZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIgJiYgdHlwZW9mIHBvc3RNZXNzYWdlID09ICdmdW5jdGlvbicgJiYgIWdsb2JhbC5pbXBvcnRTY3JpcHRzKSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShpZCArICcnLCAnKicpO1xuICAgIH07XG4gICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBsaXN0ZW5lciwgZmFsc2UpO1xuICAvLyBJRTgtXG4gIH0gZWxzZSBpZiAoT05SRUFEWVNUQVRFQ0hBTkdFIGluIGNlbCgnc2NyaXB0JykpIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgaHRtbC5hcHBlbmRDaGlsZChjZWwoJ3NjcmlwdCcpKVtPTlJFQURZU1RBVEVDSEFOR0VdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBodG1sLnJlbW92ZUNoaWxkKHRoaXMpO1xuICAgICAgICBydW4uY2FsbChpZCk7XG4gICAgICB9O1xuICAgIH07XG4gIC8vIFJlc3Qgb2xkIGJyb3dzZXJzXG4gIH0gZWxzZSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIHNldFRpbWVvdXQoY3R4KHJ1biwgaWQsIDEpLCAwKTtcbiAgICB9O1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiBzZXRUYXNrLFxuICBjbGVhcjogY2xlYXJUYXNrXG59O1xuIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBtYXggPSBNYXRoLm1heDtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGluZGV4LCBsZW5ndGgpIHtcbiAgaW5kZXggPSB0b0ludGVnZXIoaW5kZXgpO1xuICByZXR1cm4gaW5kZXggPCAwID8gbWF4KGluZGV4ICsgbGVuZ3RoLCAwKSA6IG1pbihpbmRleCwgbGVuZ3RoKTtcbn07XG4iLCIvLyA3LjEuNCBUb0ludGVnZXJcbnZhciBjZWlsID0gTWF0aC5jZWlsO1xudmFyIGZsb29yID0gTWF0aC5mbG9vcjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xufTtcbiIsIi8vIHRvIGluZGV4ZWQgb2JqZWN0LCB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0Jyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBJT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG4iLCIvLyA3LjEuMTUgVG9MZW5ndGhcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgbWluID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgPiAwID8gbWluKHRvSW50ZWdlcihpdCksIDB4MWZmZmZmZmZmZmZmZmYpIDogMDsgLy8gcG93KDIsIDUzKSAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcbiIsIi8vIDcuMS4xMyBUb09iamVjdChhcmd1bWVudClcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIE9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuIiwiLy8gNy4xLjEgVG9QcmltaXRpdmUoaW5wdXQgWywgUHJlZmVycmVkVHlwZV0pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIFMpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHJldHVybiBpdDtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmIChTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAodHlwZW9mIChmbiA9IGl0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKCFTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59O1xuIiwidmFyIGlkID0gMDtcbnZhciBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgbmF2aWdhdG9yID0gZ2xvYmFsLm5hdmlnYXRvcjtcblxubW9kdWxlLmV4cG9ydHMgPSBuYXZpZ2F0b3IgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCB8fCAnJztcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIFRZUEUpIHtcbiAgaWYgKCFpc09iamVjdChpdCkgfHwgaXQuX3QgIT09IFRZUEUpIHRocm93IFR5cGVFcnJvcignSW5jb21wYXRpYmxlIHJlY2VpdmVyLCAnICsgVFlQRSArICcgcmVxdWlyZWQhJyk7XG4gIHJldHVybiBpdDtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBMSUJSQVJZID0gcmVxdWlyZSgnLi9fbGlicmFyeScpO1xudmFyIHdrc0V4dCA9IHJlcXVpcmUoJy4vX3drcy1leHQnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHZhciAkU3ltYm9sID0gY29yZS5TeW1ib2wgfHwgKGNvcmUuU3ltYm9sID0gTElCUkFSWSA/IHt9IDogZ2xvYmFsLlN5bWJvbCB8fCB7fSk7XG4gIGlmIChuYW1lLmNoYXJBdCgwKSAhPSAnXycgJiYgIShuYW1lIGluICRTeW1ib2wpKSBkZWZpbmVQcm9wZXJ0eSgkU3ltYm9sLCBuYW1lLCB7IHZhbHVlOiB3a3NFeHQuZihuYW1lKSB9KTtcbn07XG4iLCJleHBvcnRzLmYgPSByZXF1aXJlKCcuL193a3MnKTtcbiIsInZhciBzdG9yZSA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCd3a3MnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbnZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5TeW1ib2w7XG52YXIgVVNFX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcblxudmFyICRleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gc3RvcmVbbmFtZV0gfHwgKHN0b3JlW25hbWVdID1cbiAgICBVU0VfU1lNQk9MICYmIFN5bWJvbFtuYW1lXSB8fCAoVVNFX1NZTUJPTCA/IFN5bWJvbCA6IHVpZCkoJ1N5bWJvbC4nICsgbmFtZSkpO1xufTtcblxuJGV4cG9ydHMuc3RvcmUgPSBzdG9yZTtcbiIsInZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpO1xudmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvcmUnKS5nZXRJdGVyYXRvck1ldGhvZCA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgIT0gdW5kZWZpbmVkKSByZXR1cm4gaXRbSVRFUkFUT1JdXG4gICAgfHwgaXRbJ0BAaXRlcmF0b3InXVxuICAgIHx8IEl0ZXJhdG9yc1tjbGFzc29mKGl0KV07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMjIuMS4zLjggQXJyYXkucHJvdG90eXBlLmZpbmQocHJlZGljYXRlLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciAkZmluZCA9IHJlcXVpcmUoJy4vX2FycmF5LW1ldGhvZHMnKSg1KTtcbnZhciBLRVkgPSAnZmluZCc7XG52YXIgZm9yY2VkID0gdHJ1ZTtcbi8vIFNob3VsZG4ndCBza2lwIGhvbGVzXG5pZiAoS0VZIGluIFtdKSBBcnJheSgxKVtLRVldKGZ1bmN0aW9uICgpIHsgZm9yY2VkID0gZmFsc2U7IH0pO1xuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiBmb3JjZWQsICdBcnJheScsIHtcbiAgZmluZDogZnVuY3Rpb24gZmluZChjYWxsYmFja2ZuIC8qICwgdGhhdCA9IHVuZGVmaW5lZCAqLykge1xuICAgIHJldHVybiAkZmluZCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xucmVxdWlyZSgnLi9fYWRkLXRvLXVuc2NvcGFibGVzJykoS0VZKTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciBjYWxsID0gcmVxdWlyZSgnLi9faXRlci1jYWxsJyk7XG52YXIgaXNBcnJheUl0ZXIgPSByZXF1aXJlKCcuL19pcy1hcnJheS1pdGVyJyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX2NyZWF0ZS1wcm9wZXJ0eScpO1xudmFyIGdldEl0ZXJGbiA9IHJlcXVpcmUoJy4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIXJlcXVpcmUoJy4vX2l0ZXItZGV0ZWN0JykoZnVuY3Rpb24gKGl0ZXIpIHsgQXJyYXkuZnJvbShpdGVyKTsgfSksICdBcnJheScsIHtcbiAgLy8gMjIuMS4yLjEgQXJyYXkuZnJvbShhcnJheUxpa2UsIG1hcGZuID0gdW5kZWZpbmVkLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxuICBmcm9tOiBmdW5jdGlvbiBmcm9tKGFycmF5TGlrZSAvKiAsIG1hcGZuID0gdW5kZWZpbmVkLCB0aGlzQXJnID0gdW5kZWZpbmVkICovKSB7XG4gICAgdmFyIE8gPSB0b09iamVjdChhcnJheUxpa2UpO1xuICAgIHZhciBDID0gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyA/IHRoaXMgOiBBcnJheTtcbiAgICB2YXIgYUxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgdmFyIG1hcGZuID0gYUxlbiA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQ7XG4gICAgdmFyIG1hcHBpbmcgPSBtYXBmbiAhPT0gdW5kZWZpbmVkO1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgdmFyIGl0ZXJGbiA9IGdldEl0ZXJGbihPKTtcbiAgICB2YXIgbGVuZ3RoLCByZXN1bHQsIHN0ZXAsIGl0ZXJhdG9yO1xuICAgIGlmIChtYXBwaW5nKSBtYXBmbiA9IGN0eChtYXBmbiwgYUxlbiA+IDIgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWQsIDIpO1xuICAgIC8vIGlmIG9iamVjdCBpc24ndCBpdGVyYWJsZSBvciBpdCdzIGFycmF5IHdpdGggZGVmYXVsdCBpdGVyYXRvciAtIHVzZSBzaW1wbGUgY2FzZVxuICAgIGlmIChpdGVyRm4gIT0gdW5kZWZpbmVkICYmICEoQyA9PSBBcnJheSAmJiBpc0FycmF5SXRlcihpdGVyRm4pKSkge1xuICAgICAgZm9yIChpdGVyYXRvciA9IGl0ZXJGbi5jYWxsKE8pLCByZXN1bHQgPSBuZXcgQygpOyAhKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7IGluZGV4KyspIHtcbiAgICAgICAgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBpbmRleCwgbWFwcGluZyA/IGNhbGwoaXRlcmF0b3IsIG1hcGZuLCBbc3RlcC52YWx1ZSwgaW5kZXhdLCB0cnVlKSA6IHN0ZXAudmFsdWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgICBmb3IgKHJlc3VsdCA9IG5ldyBDKGxlbmd0aCk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKSB7XG4gICAgICAgIGNyZWF0ZVByb3BlcnR5KHJlc3VsdCwgaW5kZXgsIG1hcHBpbmcgPyBtYXBmbihPW2luZGV4XSwgaW5kZXgpIDogT1tpbmRleF0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXN1bHQubGVuZ3RoID0gaW5kZXg7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4vX2FkZC10by11bnNjb3BhYmxlcycpO1xudmFyIHN0ZXAgPSByZXF1aXJlKCcuL19pdGVyLXN0ZXAnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG5cbi8vIDIyLjEuMy40IEFycmF5LnByb3RvdHlwZS5lbnRyaWVzKClcbi8vIDIyLjEuMy4xMyBBcnJheS5wcm90b3R5cGUua2V5cygpXG4vLyAyMi4xLjMuMjkgQXJyYXkucHJvdG90eXBlLnZhbHVlcygpXG4vLyAyMi4xLjMuMzAgQXJyYXkucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShBcnJheSwgJ0FycmF5JywgZnVuY3Rpb24gKGl0ZXJhdGVkLCBraW5kKSB7XG4gIHRoaXMuX3QgPSB0b0lPYmplY3QoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbiAgdGhpcy5fayA9IGtpbmQ7ICAgICAgICAgICAgICAgIC8vIGtpbmRcbi8vIDIyLjEuNS4yLjEgJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24gKCkge1xuICB2YXIgTyA9IHRoaXMuX3Q7XG4gIHZhciBraW5kID0gdGhpcy5faztcbiAgdmFyIGluZGV4ID0gdGhpcy5faSsrO1xuICBpZiAoIU8gfHwgaW5kZXggPj0gTy5sZW5ndGgpIHtcbiAgICB0aGlzLl90ID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiBzdGVwKDEpO1xuICB9XG4gIGlmIChraW5kID09ICdrZXlzJykgcmV0dXJuIHN0ZXAoMCwgaW5kZXgpO1xuICBpZiAoa2luZCA9PSAndmFsdWVzJykgcmV0dXJuIHN0ZXAoMCwgT1tpbmRleF0pO1xuICByZXR1cm4gc3RlcCgwLCBbaW5kZXgsIE9baW5kZXhdXSk7XG59LCAndmFsdWVzJyk7XG5cbi8vIGFyZ3VtZW50c0xpc3RbQEBpdGVyYXRvcl0gaXMgJUFycmF5UHJvdG9fdmFsdWVzJSAoOS40LjQuNiwgOS40LjQuNylcbkl0ZXJhdG9ycy5Bcmd1bWVudHMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbmFkZFRvVW5zY29wYWJsZXMoJ2tleXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ3ZhbHVlcycpO1xuYWRkVG9VbnNjb3BhYmxlcygnZW50cmllcycpO1xuIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBGUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGU7XG52YXIgbmFtZVJFID0gL15cXHMqZnVuY3Rpb24gKFteIChdKikvO1xudmFyIE5BTUUgPSAnbmFtZSc7XG5cbi8vIDE5LjIuNC4yIG5hbWVcbk5BTUUgaW4gRlByb3RvIHx8IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgZFAoRlByb3RvLCBOQU1FLCB7XG4gIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiAoJycgKyB0aGlzKS5tYXRjaChuYW1lUkUpWzFdO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHN0cm9uZyA9IHJlcXVpcmUoJy4vX2NvbGxlY3Rpb24tc3Ryb25nJyk7XG52YXIgdmFsaWRhdGUgPSByZXF1aXJlKCcuL192YWxpZGF0ZS1jb2xsZWN0aW9uJyk7XG52YXIgTUFQID0gJ01hcCc7XG5cbi8vIDIzLjEgTWFwIE9iamVjdHNcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29sbGVjdGlvbicpKE1BUCwgZnVuY3Rpb24gKGdldCkge1xuICByZXR1cm4gZnVuY3Rpb24gTWFwKCkgeyByZXR1cm4gZ2V0KHRoaXMsIGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTsgfTtcbn0sIHtcbiAgLy8gMjMuMS4zLjYgTWFwLnByb3RvdHlwZS5nZXQoa2V5KVxuICBnZXQ6IGZ1bmN0aW9uIGdldChrZXkpIHtcbiAgICB2YXIgZW50cnkgPSBzdHJvbmcuZ2V0RW50cnkodmFsaWRhdGUodGhpcywgTUFQKSwga2V5KTtcbiAgICByZXR1cm4gZW50cnkgJiYgZW50cnkudjtcbiAgfSxcbiAgLy8gMjMuMS4zLjkgTWFwLnByb3RvdHlwZS5zZXQoa2V5LCB2YWx1ZSlcbiAgc2V0OiBmdW5jdGlvbiBzZXQoa2V5LCB2YWx1ZSkge1xuICAgIHJldHVybiBzdHJvbmcuZGVmKHZhbGlkYXRlKHRoaXMsIE1BUCksIGtleSA9PT0gMCA/IDAgOiBrZXksIHZhbHVlKTtcbiAgfVxufSwgc3Ryb25nLCB0cnVlKTtcbiIsIi8vIDE5LjEuMy4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiwgJ09iamVjdCcsIHsgYXNzaWduOiByZXF1aXJlKCcuL19vYmplY3QtYXNzaWduJykgfSk7XG4iLCIvLyAxOS4xLjIuMTQgT2JqZWN0LmtleXMoTylcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxucmVxdWlyZSgnLi9fb2JqZWN0LXNhcCcpKCdrZXlzJywgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZnVuY3Rpb24ga2V5cyhpdCkge1xuICAgIHJldHVybiAka2V5cyh0b09iamVjdChpdCkpO1xuICB9O1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbnZhciBhbkluc3RhbmNlID0gcmVxdWlyZSgnLi9fYW4taW5zdGFuY2UnKTtcbnZhciBmb3JPZiA9IHJlcXVpcmUoJy4vX2Zvci1vZicpO1xudmFyIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4vX3NwZWNpZXMtY29uc3RydWN0b3InKTtcbnZhciB0YXNrID0gcmVxdWlyZSgnLi9fdGFzaycpLnNldDtcbnZhciBtaWNyb3Rhc2sgPSByZXF1aXJlKCcuL19taWNyb3Rhc2snKSgpO1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlID0gcmVxdWlyZSgnLi9fbmV3LXByb21pc2UtY2FwYWJpbGl0eScpO1xudmFyIHBlcmZvcm0gPSByZXF1aXJlKCcuL19wZXJmb3JtJyk7XG52YXIgdXNlckFnZW50ID0gcmVxdWlyZSgnLi9fdXNlci1hZ2VudCcpO1xudmFyIHByb21pc2VSZXNvbHZlID0gcmVxdWlyZSgnLi9fcHJvbWlzZS1yZXNvbHZlJyk7XG52YXIgUFJPTUlTRSA9ICdQcm9taXNlJztcbnZhciBUeXBlRXJyb3IgPSBnbG9iYWwuVHlwZUVycm9yO1xudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciB2ZXJzaW9ucyA9IHByb2Nlc3MgJiYgcHJvY2Vzcy52ZXJzaW9ucztcbnZhciB2OCA9IHZlcnNpb25zICYmIHZlcnNpb25zLnY4IHx8ICcnO1xudmFyICRQcm9taXNlID0gZ2xvYmFsW1BST01JU0VdO1xudmFyIGlzTm9kZSA9IGNsYXNzb2YocHJvY2VzcykgPT0gJ3Byb2Nlc3MnO1xudmFyIGVtcHR5ID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xudmFyIEludGVybmFsLCBuZXdHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHksIE93blByb21pc2VDYXBhYmlsaXR5LCBXcmFwcGVyO1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gbmV3R2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUuZjtcblxudmFyIFVTRV9OQVRJVkUgPSAhIWZ1bmN0aW9uICgpIHtcbiAgdHJ5IHtcbiAgICAvLyBjb3JyZWN0IHN1YmNsYXNzaW5nIHdpdGggQEBzcGVjaWVzIHN1cHBvcnRcbiAgICB2YXIgcHJvbWlzZSA9ICRQcm9taXNlLnJlc29sdmUoMSk7XG4gICAgdmFyIEZha2VQcm9taXNlID0gKHByb21pc2UuY29uc3RydWN0b3IgPSB7fSlbcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKV0gPSBmdW5jdGlvbiAoZXhlYykge1xuICAgICAgZXhlYyhlbXB0eSwgZW1wdHkpO1xuICAgIH07XG4gICAgLy8gdW5oYW5kbGVkIHJlamVjdGlvbnMgdHJhY2tpbmcgc3VwcG9ydCwgTm9kZUpTIFByb21pc2Ugd2l0aG91dCBpdCBmYWlscyBAQHNwZWNpZXMgdGVzdFxuICAgIHJldHVybiAoaXNOb2RlIHx8IHR5cGVvZiBQcm9taXNlUmVqZWN0aW9uRXZlbnQgPT0gJ2Z1bmN0aW9uJylcbiAgICAgICYmIHByb21pc2UudGhlbihlbXB0eSkgaW5zdGFuY2VvZiBGYWtlUHJvbWlzZVxuICAgICAgLy8gdjggNi42IChOb2RlIDEwIGFuZCBDaHJvbWUgNjYpIGhhdmUgYSBidWcgd2l0aCByZXNvbHZpbmcgY3VzdG9tIHRoZW5hYmxlc1xuICAgICAgLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9ODMwNTY1XG4gICAgICAvLyB3ZSBjYW4ndCBkZXRlY3QgaXQgc3luY2hyb25vdXNseSwgc28ganVzdCBjaGVjayB2ZXJzaW9uc1xuICAgICAgJiYgdjguaW5kZXhPZignNi42JykgIT09IDBcbiAgICAgICYmIHVzZXJBZ2VudC5pbmRleE9mKCdDaHJvbWUvNjYnKSA9PT0gLTE7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxufSgpO1xuXG4vLyBoZWxwZXJzXG52YXIgaXNUaGVuYWJsZSA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgdGhlbjtcbiAgcmV0dXJuIGlzT2JqZWN0KGl0KSAmJiB0eXBlb2YgKHRoZW4gPSBpdC50aGVuKSA9PSAnZnVuY3Rpb24nID8gdGhlbiA6IGZhbHNlO1xufTtcbnZhciBub3RpZnkgPSBmdW5jdGlvbiAocHJvbWlzZSwgaXNSZWplY3QpIHtcbiAgaWYgKHByb21pc2UuX24pIHJldHVybjtcbiAgcHJvbWlzZS5fbiA9IHRydWU7XG4gIHZhciBjaGFpbiA9IHByb21pc2UuX2M7XG4gIG1pY3JvdGFzayhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHZhbHVlID0gcHJvbWlzZS5fdjtcbiAgICB2YXIgb2sgPSBwcm9taXNlLl9zID09IDE7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBydW4gPSBmdW5jdGlvbiAocmVhY3Rpb24pIHtcbiAgICAgIHZhciBoYW5kbGVyID0gb2sgPyByZWFjdGlvbi5vayA6IHJlYWN0aW9uLmZhaWw7XG4gICAgICB2YXIgcmVzb2x2ZSA9IHJlYWN0aW9uLnJlc29sdmU7XG4gICAgICB2YXIgcmVqZWN0ID0gcmVhY3Rpb24ucmVqZWN0O1xuICAgICAgdmFyIGRvbWFpbiA9IHJlYWN0aW9uLmRvbWFpbjtcbiAgICAgIHZhciByZXN1bHQsIHRoZW4sIGV4aXRlZDtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICAgICAgaWYgKCFvaykge1xuICAgICAgICAgICAgaWYgKHByb21pc2UuX2ggPT0gMikgb25IYW5kbGVVbmhhbmRsZWQocHJvbWlzZSk7XG4gICAgICAgICAgICBwcm9taXNlLl9oID0gMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGhhbmRsZXIgPT09IHRydWUpIHJlc3VsdCA9IHZhbHVlO1xuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGRvbWFpbikgZG9tYWluLmVudGVyKCk7XG4gICAgICAgICAgICByZXN1bHQgPSBoYW5kbGVyKHZhbHVlKTsgLy8gbWF5IHRocm93XG4gICAgICAgICAgICBpZiAoZG9tYWluKSB7XG4gICAgICAgICAgICAgIGRvbWFpbi5leGl0KCk7XG4gICAgICAgICAgICAgIGV4aXRlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChyZXN1bHQgPT09IHJlYWN0aW9uLnByb21pc2UpIHtcbiAgICAgICAgICAgIHJlamVjdChUeXBlRXJyb3IoJ1Byb21pc2UtY2hhaW4gY3ljbGUnKSk7XG4gICAgICAgICAgfSBlbHNlIGlmICh0aGVuID0gaXNUaGVuYWJsZShyZXN1bHQpKSB7XG4gICAgICAgICAgICB0aGVuLmNhbGwocmVzdWx0LCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0gZWxzZSByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0gZWxzZSByZWplY3QodmFsdWUpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZiAoZG9tYWluICYmICFleGl0ZWQpIGRvbWFpbi5leGl0KCk7XG4gICAgICAgIHJlamVjdChlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHdoaWxlIChjaGFpbi5sZW5ndGggPiBpKSBydW4oY2hhaW5baSsrXSk7IC8vIHZhcmlhYmxlIGxlbmd0aCAtIGNhbid0IHVzZSBmb3JFYWNoXG4gICAgcHJvbWlzZS5fYyA9IFtdO1xuICAgIHByb21pc2UuX24gPSBmYWxzZTtcbiAgICBpZiAoaXNSZWplY3QgJiYgIXByb21pc2UuX2gpIG9uVW5oYW5kbGVkKHByb21pc2UpO1xuICB9KTtcbn07XG52YXIgb25VbmhhbmRsZWQgPSBmdW5jdGlvbiAocHJvbWlzZSkge1xuICB0YXNrLmNhbGwoZ2xvYmFsLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHZhbHVlID0gcHJvbWlzZS5fdjtcbiAgICB2YXIgdW5oYW5kbGVkID0gaXNVbmhhbmRsZWQocHJvbWlzZSk7XG4gICAgdmFyIHJlc3VsdCwgaGFuZGxlciwgY29uc29sZTtcbiAgICBpZiAodW5oYW5kbGVkKSB7XG4gICAgICByZXN1bHQgPSBwZXJmb3JtKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGlzTm9kZSkge1xuICAgICAgICAgIHByb2Nlc3MuZW1pdCgndW5oYW5kbGVkUmVqZWN0aW9uJywgdmFsdWUsIHByb21pc2UpO1xuICAgICAgICB9IGVsc2UgaWYgKGhhbmRsZXIgPSBnbG9iYWwub251bmhhbmRsZWRyZWplY3Rpb24pIHtcbiAgICAgICAgICBoYW5kbGVyKHsgcHJvbWlzZTogcHJvbWlzZSwgcmVhc29uOiB2YWx1ZSB9KTtcbiAgICAgICAgfSBlbHNlIGlmICgoY29uc29sZSA9IGdsb2JhbC5jb25zb2xlKSAmJiBjb25zb2xlLmVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignVW5oYW5kbGVkIHByb21pc2UgcmVqZWN0aW9uJywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIC8vIEJyb3dzZXJzIHNob3VsZCBub3QgdHJpZ2dlciBgcmVqZWN0aW9uSGFuZGxlZGAgZXZlbnQgaWYgaXQgd2FzIGhhbmRsZWQgaGVyZSwgTm9kZUpTIC0gc2hvdWxkXG4gICAgICBwcm9taXNlLl9oID0gaXNOb2RlIHx8IGlzVW5oYW5kbGVkKHByb21pc2UpID8gMiA6IDE7XG4gICAgfSBwcm9taXNlLl9hID0gdW5kZWZpbmVkO1xuICAgIGlmICh1bmhhbmRsZWQgJiYgcmVzdWx0LmUpIHRocm93IHJlc3VsdC52O1xuICB9KTtcbn07XG52YXIgaXNVbmhhbmRsZWQgPSBmdW5jdGlvbiAocHJvbWlzZSkge1xuICByZXR1cm4gcHJvbWlzZS5faCAhPT0gMSAmJiAocHJvbWlzZS5fYSB8fCBwcm9taXNlLl9jKS5sZW5ndGggPT09IDA7XG59O1xudmFyIG9uSGFuZGxlVW5oYW5kbGVkID0gZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBoYW5kbGVyO1xuICAgIGlmIChpc05vZGUpIHtcbiAgICAgIHByb2Nlc3MuZW1pdCgncmVqZWN0aW9uSGFuZGxlZCcsIHByb21pc2UpO1xuICAgIH0gZWxzZSBpZiAoaGFuZGxlciA9IGdsb2JhbC5vbnJlamVjdGlvbmhhbmRsZWQpIHtcbiAgICAgIGhhbmRsZXIoeyBwcm9taXNlOiBwcm9taXNlLCByZWFzb246IHByb21pc2UuX3YgfSk7XG4gICAgfVxuICB9KTtcbn07XG52YXIgJHJlamVjdCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICB2YXIgcHJvbWlzZSA9IHRoaXM7XG4gIGlmIChwcm9taXNlLl9kKSByZXR1cm47XG4gIHByb21pc2UuX2QgPSB0cnVlO1xuICBwcm9taXNlID0gcHJvbWlzZS5fdyB8fCBwcm9taXNlOyAvLyB1bndyYXBcbiAgcHJvbWlzZS5fdiA9IHZhbHVlO1xuICBwcm9taXNlLl9zID0gMjtcbiAgaWYgKCFwcm9taXNlLl9hKSBwcm9taXNlLl9hID0gcHJvbWlzZS5fYy5zbGljZSgpO1xuICBub3RpZnkocHJvbWlzZSwgdHJ1ZSk7XG59O1xudmFyICRyZXNvbHZlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHZhciBwcm9taXNlID0gdGhpcztcbiAgdmFyIHRoZW47XG4gIGlmIChwcm9taXNlLl9kKSByZXR1cm47XG4gIHByb21pc2UuX2QgPSB0cnVlO1xuICBwcm9taXNlID0gcHJvbWlzZS5fdyB8fCBwcm9taXNlOyAvLyB1bndyYXBcbiAgdHJ5IHtcbiAgICBpZiAocHJvbWlzZSA9PT0gdmFsdWUpIHRocm93IFR5cGVFcnJvcihcIlByb21pc2UgY2FuJ3QgYmUgcmVzb2x2ZWQgaXRzZWxmXCIpO1xuICAgIGlmICh0aGVuID0gaXNUaGVuYWJsZSh2YWx1ZSkpIHtcbiAgICAgIG1pY3JvdGFzayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB3cmFwcGVyID0geyBfdzogcHJvbWlzZSwgX2Q6IGZhbHNlIH07IC8vIHdyYXBcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0aGVuLmNhbGwodmFsdWUsIGN0eCgkcmVzb2x2ZSwgd3JhcHBlciwgMSksIGN0eCgkcmVqZWN0LCB3cmFwcGVyLCAxKSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAkcmVqZWN0LmNhbGwod3JhcHBlciwgZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9taXNlLl92ID0gdmFsdWU7XG4gICAgICBwcm9taXNlLl9zID0gMTtcbiAgICAgIG5vdGlmeShwcm9taXNlLCBmYWxzZSk7XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgJHJlamVjdC5jYWxsKHsgX3c6IHByb21pc2UsIF9kOiBmYWxzZSB9LCBlKTsgLy8gd3JhcFxuICB9XG59O1xuXG4vLyBjb25zdHJ1Y3RvciBwb2x5ZmlsbFxuaWYgKCFVU0VfTkFUSVZFKSB7XG4gIC8vIDI1LjQuMy4xIFByb21pc2UoZXhlY3V0b3IpXG4gICRQcm9taXNlID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcikge1xuICAgIGFuSW5zdGFuY2UodGhpcywgJFByb21pc2UsIFBST01JU0UsICdfaCcpO1xuICAgIGFGdW5jdGlvbihleGVjdXRvcik7XG4gICAgSW50ZXJuYWwuY2FsbCh0aGlzKTtcbiAgICB0cnkge1xuICAgICAgZXhlY3V0b3IoY3R4KCRyZXNvbHZlLCB0aGlzLCAxKSwgY3R4KCRyZWplY3QsIHRoaXMsIDEpKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICRyZWplY3QuY2FsbCh0aGlzLCBlcnIpO1xuICAgIH1cbiAgfTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gIEludGVybmFsID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcikge1xuICAgIHRoaXMuX2MgPSBbXTsgICAgICAgICAgICAgLy8gPC0gYXdhaXRpbmcgcmVhY3Rpb25zXG4gICAgdGhpcy5fYSA9IHVuZGVmaW5lZDsgICAgICAvLyA8LSBjaGVja2VkIGluIGlzVW5oYW5kbGVkIHJlYWN0aW9uc1xuICAgIHRoaXMuX3MgPSAwOyAgICAgICAgICAgICAgLy8gPC0gc3RhdGVcbiAgICB0aGlzLl9kID0gZmFsc2U7ICAgICAgICAgIC8vIDwtIGRvbmVcbiAgICB0aGlzLl92ID0gdW5kZWZpbmVkOyAgICAgIC8vIDwtIHZhbHVlXG4gICAgdGhpcy5faCA9IDA7ICAgICAgICAgICAgICAvLyA8LSByZWplY3Rpb24gc3RhdGUsIDAgLSBkZWZhdWx0LCAxIC0gaGFuZGxlZCwgMiAtIHVuaGFuZGxlZFxuICAgIHRoaXMuX24gPSBmYWxzZTsgICAgICAgICAgLy8gPC0gbm90aWZ5XG4gIH07XG4gIEludGVybmFsLnByb3RvdHlwZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lLWFsbCcpKCRQcm9taXNlLnByb3RvdHlwZSwge1xuICAgIC8vIDI1LjQuNS4zIFByb21pc2UucHJvdG90eXBlLnRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpXG4gICAgdGhlbjogZnVuY3Rpb24gdGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkge1xuICAgICAgdmFyIHJlYWN0aW9uID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoc3BlY2llc0NvbnN0cnVjdG9yKHRoaXMsICRQcm9taXNlKSk7XG4gICAgICByZWFjdGlvbi5vayA9IHR5cGVvZiBvbkZ1bGZpbGxlZCA9PSAnZnVuY3Rpb24nID8gb25GdWxmaWxsZWQgOiB0cnVlO1xuICAgICAgcmVhY3Rpb24uZmFpbCA9IHR5cGVvZiBvblJlamVjdGVkID09ICdmdW5jdGlvbicgJiYgb25SZWplY3RlZDtcbiAgICAgIHJlYWN0aW9uLmRvbWFpbiA9IGlzTm9kZSA/IHByb2Nlc3MuZG9tYWluIDogdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fYy5wdXNoKHJlYWN0aW9uKTtcbiAgICAgIGlmICh0aGlzLl9hKSB0aGlzLl9hLnB1c2gocmVhY3Rpb24pO1xuICAgICAgaWYgKHRoaXMuX3MpIG5vdGlmeSh0aGlzLCBmYWxzZSk7XG4gICAgICByZXR1cm4gcmVhY3Rpb24ucHJvbWlzZTtcbiAgICB9LFxuICAgIC8vIDI1LjQuNS4xIFByb21pc2UucHJvdG90eXBlLmNhdGNoKG9uUmVqZWN0ZWQpXG4gICAgJ2NhdGNoJzogZnVuY3Rpb24gKG9uUmVqZWN0ZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLnRoZW4odW5kZWZpbmVkLCBvblJlamVjdGVkKTtcbiAgICB9XG4gIH0pO1xuICBPd25Qcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBJbnRlcm5hbCgpO1xuICAgIHRoaXMucHJvbWlzZSA9IHByb21pc2U7XG4gICAgdGhpcy5yZXNvbHZlID0gY3R4KCRyZXNvbHZlLCBwcm9taXNlLCAxKTtcbiAgICB0aGlzLnJlamVjdCA9IGN0eCgkcmVqZWN0LCBwcm9taXNlLCAxKTtcbiAgfTtcbiAgbmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUuZiA9IG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24gKEMpIHtcbiAgICByZXR1cm4gQyA9PT0gJFByb21pc2UgfHwgQyA9PT0gV3JhcHBlclxuICAgICAgPyBuZXcgT3duUHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICAgIDogbmV3R2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5KEMpO1xuICB9O1xufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7IFByb21pc2U6ICRQcm9taXNlIH0pO1xucmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKSgkUHJvbWlzZSwgUFJPTUlTRSk7XG5yZXF1aXJlKCcuL19zZXQtc3BlY2llcycpKFBST01JU0UpO1xuV3JhcHBlciA9IHJlcXVpcmUoJy4vX2NvcmUnKVtQUk9NSVNFXTtcblxuLy8gc3RhdGljc1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuNSBQcm9taXNlLnJlamVjdChyKVxuICByZWplY3Q6IGZ1bmN0aW9uIHJlamVjdChyKSB7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSh0aGlzKTtcbiAgICB2YXIgJCRyZWplY3QgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICAkJHJlamVjdChyKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKExJQlJBUlkgfHwgIVVTRV9OQVRJVkUpLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC42IFByb21pc2UucmVzb2x2ZSh4KVxuICByZXNvbHZlOiBmdW5jdGlvbiByZXNvbHZlKHgpIHtcbiAgICByZXR1cm4gcHJvbWlzZVJlc29sdmUoTElCUkFSWSAmJiB0aGlzID09PSBXcmFwcGVyID8gJFByb21pc2UgOiB0aGlzLCB4KTtcbiAgfVxufSk7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICEoVVNFX05BVElWRSAmJiByZXF1aXJlKCcuL19pdGVyLWRldGVjdCcpKGZ1bmN0aW9uIChpdGVyKSB7XG4gICRQcm9taXNlLmFsbChpdGVyKVsnY2F0Y2gnXShlbXB0eSk7XG59KSksIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjEgUHJvbWlzZS5hbGwoaXRlcmFibGUpXG4gIGFsbDogZnVuY3Rpb24gYWxsKGl0ZXJhYmxlKSB7XG4gICAgdmFyIEMgPSB0aGlzO1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQyk7XG4gICAgdmFyIHJlc29sdmUgPSBjYXBhYmlsaXR5LnJlc29sdmU7XG4gICAgdmFyIHJlamVjdCA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciByZXN1bHQgPSBwZXJmb3JtKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciB2YWx1ZXMgPSBbXTtcbiAgICAgIHZhciBpbmRleCA9IDA7XG4gICAgICB2YXIgcmVtYWluaW5nID0gMTtcbiAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgICAgICAgdmFyICRpbmRleCA9IGluZGV4Kys7XG4gICAgICAgIHZhciBhbHJlYWR5Q2FsbGVkID0gZmFsc2U7XG4gICAgICAgIHZhbHVlcy5wdXNoKHVuZGVmaW5lZCk7XG4gICAgICAgIHJlbWFpbmluZysrO1xuICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICBpZiAoYWxyZWFkeUNhbGxlZCkgcmV0dXJuO1xuICAgICAgICAgIGFscmVhZHlDYWxsZWQgPSB0cnVlO1xuICAgICAgICAgIHZhbHVlc1skaW5kZXhdID0gdmFsdWU7XG4gICAgICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgfSk7XG4gICAgaWYgKHJlc3VsdC5lKSByZWplY3QocmVzdWx0LnYpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH0sXG4gIC8vIDI1LjQuNC40IFByb21pc2UucmFjZShpdGVyYWJsZSlcbiAgcmFjZTogZnVuY3Rpb24gcmFjZShpdGVyYWJsZSkge1xuICAgIHZhciBDID0gdGhpcztcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KEMpO1xuICAgIHZhciByZWplY3QgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICB2YXIgcmVzdWx0ID0gcGVyZm9ybShmdW5jdGlvbiAoKSB7XG4gICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gICAgICAgIEMucmVzb2x2ZShwcm9taXNlKS50aGVuKGNhcGFiaWxpdHkucmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGlmIChyZXN1bHQuZSkgcmVqZWN0KHJlc3VsdC52KTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbiIsIi8vIDIxLjIuNS4zIGdldCBSZWdFeHAucHJvdG90eXBlLmZsYWdzKClcbmlmIChyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmIC8uL2cuZmxhZ3MgIT0gJ2cnKSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mKFJlZ0V4cC5wcm90b3R5cGUsICdmbGFncycsIHtcbiAgY29uZmlndXJhYmxlOiB0cnVlLFxuICBnZXQ6IHJlcXVpcmUoJy4vX2ZsYWdzJylcbn0pO1xuIiwiLy8gQEBzcGxpdCBsb2dpY1xucmVxdWlyZSgnLi9fZml4LXJlLXdrcycpKCdzcGxpdCcsIDIsIGZ1bmN0aW9uIChkZWZpbmVkLCBTUExJVCwgJHNwbGl0KSB7XG4gICd1c2Ugc3RyaWN0JztcbiAgdmFyIGlzUmVnRXhwID0gcmVxdWlyZSgnLi9faXMtcmVnZXhwJyk7XG4gIHZhciBfc3BsaXQgPSAkc3BsaXQ7XG4gIHZhciAkcHVzaCA9IFtdLnB1c2g7XG4gIHZhciAkU1BMSVQgPSAnc3BsaXQnO1xuICB2YXIgTEVOR1RIID0gJ2xlbmd0aCc7XG4gIHZhciBMQVNUX0lOREVYID0gJ2xhc3RJbmRleCc7XG4gIGlmIChcbiAgICAnYWJiYydbJFNQTElUXSgvKGIpKi8pWzFdID09ICdjJyB8fFxuICAgICd0ZXN0J1skU1BMSVRdKC8oPzopLywgLTEpW0xFTkdUSF0gIT0gNCB8fFxuICAgICdhYidbJFNQTElUXSgvKD86YWIpKi8pW0xFTkdUSF0gIT0gMiB8fFxuICAgICcuJ1skU1BMSVRdKC8oLj8pKC4/KS8pW0xFTkdUSF0gIT0gNCB8fFxuICAgICcuJ1skU1BMSVRdKC8oKSgpLylbTEVOR1RIXSA+IDEgfHxcbiAgICAnJ1skU1BMSVRdKC8uPy8pW0xFTkdUSF1cbiAgKSB7XG4gICAgdmFyIE5QQ0cgPSAvKCk/Py8uZXhlYygnJylbMV0gPT09IHVuZGVmaW5lZDsgLy8gbm9ucGFydGljaXBhdGluZyBjYXB0dXJpbmcgZ3JvdXBcbiAgICAvLyBiYXNlZCBvbiBlczUtc2hpbSBpbXBsZW1lbnRhdGlvbiwgbmVlZCB0byByZXdvcmsgaXRcbiAgICAkc3BsaXQgPSBmdW5jdGlvbiAoc2VwYXJhdG9yLCBsaW1pdCkge1xuICAgICAgdmFyIHN0cmluZyA9IFN0cmluZyh0aGlzKTtcbiAgICAgIGlmIChzZXBhcmF0b3IgPT09IHVuZGVmaW5lZCAmJiBsaW1pdCA9PT0gMCkgcmV0dXJuIFtdO1xuICAgICAgLy8gSWYgYHNlcGFyYXRvcmAgaXMgbm90IGEgcmVnZXgsIHVzZSBuYXRpdmUgc3BsaXRcbiAgICAgIGlmICghaXNSZWdFeHAoc2VwYXJhdG9yKSkgcmV0dXJuIF9zcGxpdC5jYWxsKHN0cmluZywgc2VwYXJhdG9yLCBsaW1pdCk7XG4gICAgICB2YXIgb3V0cHV0ID0gW107XG4gICAgICB2YXIgZmxhZ3MgPSAoc2VwYXJhdG9yLmlnbm9yZUNhc2UgPyAnaScgOiAnJykgK1xuICAgICAgICAgICAgICAgICAgKHNlcGFyYXRvci5tdWx0aWxpbmUgPyAnbScgOiAnJykgK1xuICAgICAgICAgICAgICAgICAgKHNlcGFyYXRvci51bmljb2RlID8gJ3UnIDogJycpICtcbiAgICAgICAgICAgICAgICAgIChzZXBhcmF0b3Iuc3RpY2t5ID8gJ3knIDogJycpO1xuICAgICAgdmFyIGxhc3RMYXN0SW5kZXggPSAwO1xuICAgICAgdmFyIHNwbGl0TGltaXQgPSBsaW1pdCA9PT0gdW5kZWZpbmVkID8gNDI5NDk2NzI5NSA6IGxpbWl0ID4+PiAwO1xuICAgICAgLy8gTWFrZSBgZ2xvYmFsYCBhbmQgYXZvaWQgYGxhc3RJbmRleGAgaXNzdWVzIGJ5IHdvcmtpbmcgd2l0aCBhIGNvcHlcbiAgICAgIHZhciBzZXBhcmF0b3JDb3B5ID0gbmV3IFJlZ0V4cChzZXBhcmF0b3Iuc291cmNlLCBmbGFncyArICdnJyk7XG4gICAgICB2YXIgc2VwYXJhdG9yMiwgbWF0Y2gsIGxhc3RJbmRleCwgbGFzdExlbmd0aCwgaTtcbiAgICAgIC8vIERvZXNuJ3QgbmVlZCBmbGFncyBneSwgYnV0IHRoZXkgZG9uJ3QgaHVydFxuICAgICAgaWYgKCFOUENHKSBzZXBhcmF0b3IyID0gbmV3IFJlZ0V4cCgnXicgKyBzZXBhcmF0b3JDb3B5LnNvdXJjZSArICckKD8hXFxcXHMpJywgZmxhZ3MpO1xuICAgICAgd2hpbGUgKG1hdGNoID0gc2VwYXJhdG9yQ29weS5leGVjKHN0cmluZykpIHtcbiAgICAgICAgLy8gYHNlcGFyYXRvckNvcHkubGFzdEluZGV4YCBpcyBub3QgcmVsaWFibGUgY3Jvc3MtYnJvd3NlclxuICAgICAgICBsYXN0SW5kZXggPSBtYXRjaC5pbmRleCArIG1hdGNoWzBdW0xFTkdUSF07XG4gICAgICAgIGlmIChsYXN0SW5kZXggPiBsYXN0TGFzdEluZGV4KSB7XG4gICAgICAgICAgb3V0cHV0LnB1c2goc3RyaW5nLnNsaWNlKGxhc3RMYXN0SW5kZXgsIG1hdGNoLmluZGV4KSk7XG4gICAgICAgICAgLy8gRml4IGJyb3dzZXJzIHdob3NlIGBleGVjYCBtZXRob2RzIGRvbid0IGNvbnNpc3RlbnRseSByZXR1cm4gYHVuZGVmaW5lZGAgZm9yIE5QQ0dcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbG9vcC1mdW5jXG4gICAgICAgICAgaWYgKCFOUENHICYmIG1hdGNoW0xFTkdUSF0gPiAxKSBtYXRjaFswXS5yZXBsYWNlKHNlcGFyYXRvcjIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGZvciAoaSA9IDE7IGkgPCBhcmd1bWVudHNbTEVOR1RIXSAtIDI7IGkrKykgaWYgKGFyZ3VtZW50c1tpXSA9PT0gdW5kZWZpbmVkKSBtYXRjaFtpXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpZiAobWF0Y2hbTEVOR1RIXSA+IDEgJiYgbWF0Y2guaW5kZXggPCBzdHJpbmdbTEVOR1RIXSkgJHB1c2guYXBwbHkob3V0cHV0LCBtYXRjaC5zbGljZSgxKSk7XG4gICAgICAgICAgbGFzdExlbmd0aCA9IG1hdGNoWzBdW0xFTkdUSF07XG4gICAgICAgICAgbGFzdExhc3RJbmRleCA9IGxhc3RJbmRleDtcbiAgICAgICAgICBpZiAob3V0cHV0W0xFTkdUSF0gPj0gc3BsaXRMaW1pdCkgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNlcGFyYXRvckNvcHlbTEFTVF9JTkRFWF0gPT09IG1hdGNoLmluZGV4KSBzZXBhcmF0b3JDb3B5W0xBU1RfSU5ERVhdKys7IC8vIEF2b2lkIGFuIGluZmluaXRlIGxvb3BcbiAgICAgIH1cbiAgICAgIGlmIChsYXN0TGFzdEluZGV4ID09PSBzdHJpbmdbTEVOR1RIXSkge1xuICAgICAgICBpZiAobGFzdExlbmd0aCB8fCAhc2VwYXJhdG9yQ29weS50ZXN0KCcnKSkgb3V0cHV0LnB1c2goJycpO1xuICAgICAgfSBlbHNlIG91dHB1dC5wdXNoKHN0cmluZy5zbGljZShsYXN0TGFzdEluZGV4KSk7XG4gICAgICByZXR1cm4gb3V0cHV0W0xFTkdUSF0gPiBzcGxpdExpbWl0ID8gb3V0cHV0LnNsaWNlKDAsIHNwbGl0TGltaXQpIDogb3V0cHV0O1xuICAgIH07XG4gIC8vIENoYWtyYSwgVjhcbiAgfSBlbHNlIGlmICgnMCdbJFNQTElUXSh1bmRlZmluZWQsIDApW0xFTkdUSF0pIHtcbiAgICAkc3BsaXQgPSBmdW5jdGlvbiAoc2VwYXJhdG9yLCBsaW1pdCkge1xuICAgICAgcmV0dXJuIHNlcGFyYXRvciA9PT0gdW5kZWZpbmVkICYmIGxpbWl0ID09PSAwID8gW10gOiBfc3BsaXQuY2FsbCh0aGlzLCBzZXBhcmF0b3IsIGxpbWl0KTtcbiAgICB9O1xuICB9XG4gIC8vIDIxLjEuMy4xNyBTdHJpbmcucHJvdG90eXBlLnNwbGl0KHNlcGFyYXRvciwgbGltaXQpXG4gIHJldHVybiBbZnVuY3Rpb24gc3BsaXQoc2VwYXJhdG9yLCBsaW1pdCkge1xuICAgIHZhciBPID0gZGVmaW5lZCh0aGlzKTtcbiAgICB2YXIgZm4gPSBzZXBhcmF0b3IgPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogc2VwYXJhdG9yW1NQTElUXTtcbiAgICByZXR1cm4gZm4gIT09IHVuZGVmaW5lZCA/IGZuLmNhbGwoc2VwYXJhdG9yLCBPLCBsaW1pdCkgOiAkc3BsaXQuY2FsbChTdHJpbmcoTyksIHNlcGFyYXRvciwgbGltaXQpO1xuICB9LCAkc3BsaXRdO1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG5yZXF1aXJlKCcuL2VzNi5yZWdleHAuZmxhZ3MnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyICRmbGFncyA9IHJlcXVpcmUoJy4vX2ZsYWdzJyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpO1xudmFyIFRPX1NUUklORyA9ICd0b1N0cmluZyc7XG52YXIgJHRvU3RyaW5nID0gLy4vW1RPX1NUUklOR107XG5cbnZhciBkZWZpbmUgPSBmdW5jdGlvbiAoZm4pIHtcbiAgcmVxdWlyZSgnLi9fcmVkZWZpbmUnKShSZWdFeHAucHJvdG90eXBlLCBUT19TVFJJTkcsIGZuLCB0cnVlKTtcbn07XG5cbi8vIDIxLjIuNS4xNCBSZWdFeHAucHJvdG90eXBlLnRvU3RyaW5nKClcbmlmIChyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHsgcmV0dXJuICR0b1N0cmluZy5jYWxsKHsgc291cmNlOiAnYScsIGZsYWdzOiAnYicgfSkgIT0gJy9hL2InOyB9KSkge1xuICBkZWZpbmUoZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgdmFyIFIgPSBhbk9iamVjdCh0aGlzKTtcbiAgICByZXR1cm4gJy8nLmNvbmNhdChSLnNvdXJjZSwgJy8nLFxuICAgICAgJ2ZsYWdzJyBpbiBSID8gUi5mbGFncyA6ICFERVNDUklQVE9SUyAmJiBSIGluc3RhbmNlb2YgUmVnRXhwID8gJGZsYWdzLmNhbGwoUikgOiB1bmRlZmluZWQpO1xuICB9KTtcbi8vIEZGNDQtIFJlZ0V4cCN0b1N0cmluZyBoYXMgYSB3cm9uZyBuYW1lXG59IGVsc2UgaWYgKCR0b1N0cmluZy5uYW1lICE9IFRPX1NUUklORykge1xuICBkZWZpbmUoZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuICR0b1N0cmluZy5jYWxsKHRoaXMpO1xuICB9KTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkYXQgPSByZXF1aXJlKCcuL19zdHJpbmctYXQnKSh0cnVlKTtcblxuLy8gMjEuMS4zLjI3IFN0cmluZy5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShTdHJpbmcsICdTdHJpbmcnLCBmdW5jdGlvbiAoaXRlcmF0ZWQpIHtcbiAgdGhpcy5fdCA9IFN0cmluZyhpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuLy8gMjEuMS41LjIuMSAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24gKCkge1xuICB2YXIgTyA9IHRoaXMuX3Q7XG4gIHZhciBpbmRleCA9IHRoaXMuX2k7XG4gIHZhciBwb2ludDtcbiAgaWYgKGluZGV4ID49IE8ubGVuZ3RoKSByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIHBvaW50ID0gJGF0KE8sIGluZGV4KTtcbiAgdGhpcy5faSArPSBwb2ludC5sZW5ndGg7XG4gIHJldHVybiB7IHZhbHVlOiBwb2ludCwgZG9uZTogZmFsc2UgfTtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gRUNNQVNjcmlwdCA2IHN5bWJvbHMgc2hpbVxudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIE1FVEEgPSByZXF1aXJlKCcuL19tZXRhJykuS0VZO1xudmFyICRmYWlscyA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xudmFyIHdrcyA9IHJlcXVpcmUoJy4vX3drcycpO1xudmFyIHdrc0V4dCA9IHJlcXVpcmUoJy4vX3drcy1leHQnKTtcbnZhciB3a3NEZWZpbmUgPSByZXF1aXJlKCcuL193a3MtZGVmaW5lJyk7XG52YXIgZW51bUtleXMgPSByZXF1aXJlKCcuL19lbnVtLWtleXMnKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi9faXMtYXJyYXknKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciBfY3JlYXRlID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpO1xudmFyIGdPUE5FeHQgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbi1leHQnKTtcbnZhciAkR09QRCA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJyk7XG52YXIgJERQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xudmFyIGdPUEQgPSAkR09QRC5mO1xudmFyIGRQID0gJERQLmY7XG52YXIgZ09QTiA9IGdPUE5FeHQuZjtcbnZhciAkU3ltYm9sID0gZ2xvYmFsLlN5bWJvbDtcbnZhciAkSlNPTiA9IGdsb2JhbC5KU09OO1xudmFyIF9zdHJpbmdpZnkgPSAkSlNPTiAmJiAkSlNPTi5zdHJpbmdpZnk7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG52YXIgSElEREVOID0gd2tzKCdfaGlkZGVuJyk7XG52YXIgVE9fUFJJTUlUSVZFID0gd2tzKCd0b1ByaW1pdGl2ZScpO1xudmFyIGlzRW51bSA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xudmFyIFN5bWJvbFJlZ2lzdHJ5ID0gc2hhcmVkKCdzeW1ib2wtcmVnaXN0cnknKTtcbnZhciBBbGxTeW1ib2xzID0gc2hhcmVkKCdzeW1ib2xzJyk7XG52YXIgT1BTeW1ib2xzID0gc2hhcmVkKCdvcC1zeW1ib2xzJyk7XG52YXIgT2JqZWN0UHJvdG8gPSBPYmplY3RbUFJPVE9UWVBFXTtcbnZhciBVU0VfTkFUSVZFID0gdHlwZW9mICRTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcbnZhciBRT2JqZWN0ID0gZ2xvYmFsLlFPYmplY3Q7XG4vLyBEb24ndCB1c2Ugc2V0dGVycyBpbiBRdCBTY3JpcHQsIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy8xNzNcbnZhciBzZXR0ZXIgPSAhUU9iamVjdCB8fCAhUU9iamVjdFtQUk9UT1RZUEVdIHx8ICFRT2JqZWN0W1BST1RPVFlQRV0uZmluZENoaWxkO1xuXG4vLyBmYWxsYmFjayBmb3Igb2xkIEFuZHJvaWQsIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvdjgvaXNzdWVzL2RldGFpbD9pZD02ODdcbnZhciBzZXRTeW1ib2xEZXNjID0gREVTQ1JJUFRPUlMgJiYgJGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIF9jcmVhdGUoZFAoe30sICdhJywge1xuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZFAodGhpcywgJ2EnLCB7IHZhbHVlOiA3IH0pLmE7IH1cbiAgfSkpLmEgIT0gNztcbn0pID8gZnVuY3Rpb24gKGl0LCBrZXksIEQpIHtcbiAgdmFyIHByb3RvRGVzYyA9IGdPUEQoT2JqZWN0UHJvdG8sIGtleSk7XG4gIGlmIChwcm90b0Rlc2MpIGRlbGV0ZSBPYmplY3RQcm90b1trZXldO1xuICBkUChpdCwga2V5LCBEKTtcbiAgaWYgKHByb3RvRGVzYyAmJiBpdCAhPT0gT2JqZWN0UHJvdG8pIGRQKE9iamVjdFByb3RvLCBrZXksIHByb3RvRGVzYyk7XG59IDogZFA7XG5cbnZhciB3cmFwID0gZnVuY3Rpb24gKHRhZykge1xuICB2YXIgc3ltID0gQWxsU3ltYm9sc1t0YWddID0gX2NyZWF0ZSgkU3ltYm9sW1BST1RPVFlQRV0pO1xuICBzeW0uX2sgPSB0YWc7XG4gIHJldHVybiBzeW07XG59O1xuXG52YXIgaXNTeW1ib2wgPSBVU0VfTkFUSVZFICYmIHR5cGVvZiAkU3ltYm9sLml0ZXJhdG9yID09ICdzeW1ib2wnID8gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCc7XG59IDogZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCBpbnN0YW5jZW9mICRTeW1ib2w7XG59O1xuXG52YXIgJGRlZmluZVByb3BlcnR5ID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgRCkge1xuICBpZiAoaXQgPT09IE9iamVjdFByb3RvKSAkZGVmaW5lUHJvcGVydHkoT1BTeW1ib2xzLCBrZXksIEQpO1xuICBhbk9iamVjdChpdCk7XG4gIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEQpO1xuICBpZiAoaGFzKEFsbFN5bWJvbHMsIGtleSkpIHtcbiAgICBpZiAoIUQuZW51bWVyYWJsZSkge1xuICAgICAgaWYgKCFoYXMoaXQsIEhJRERFTikpIGRQKGl0LCBISURERU4sIGNyZWF0ZURlc2MoMSwge30pKTtcbiAgICAgIGl0W0hJRERFTl1ba2V5XSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKSBpdFtISURERU5dW2tleV0gPSBmYWxzZTtcbiAgICAgIEQgPSBfY3JlYXRlKEQsIHsgZW51bWVyYWJsZTogY3JlYXRlRGVzYygwLCBmYWxzZSkgfSk7XG4gICAgfSByZXR1cm4gc2V0U3ltYm9sRGVzYyhpdCwga2V5LCBEKTtcbiAgfSByZXR1cm4gZFAoaXQsIGtleSwgRCk7XG59O1xudmFyICRkZWZpbmVQcm9wZXJ0aWVzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhpdCwgUCkge1xuICBhbk9iamVjdChpdCk7XG4gIHZhciBrZXlzID0gZW51bUtleXMoUCA9IHRvSU9iamVjdChQKSk7XG4gIHZhciBpID0gMDtcbiAgdmFyIGwgPSBrZXlzLmxlbmd0aDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKGwgPiBpKSAkZGVmaW5lUHJvcGVydHkoaXQsIGtleSA9IGtleXNbaSsrXSwgUFtrZXldKTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciAkY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGl0LCBQKSB7XG4gIHJldHVybiBQID09PSB1bmRlZmluZWQgPyBfY3JlYXRlKGl0KSA6ICRkZWZpbmVQcm9wZXJ0aWVzKF9jcmVhdGUoaXQpLCBQKTtcbn07XG52YXIgJHByb3BlcnR5SXNFbnVtZXJhYmxlID0gZnVuY3Rpb24gcHJvcGVydHlJc0VudW1lcmFibGUoa2V5KSB7XG4gIHZhciBFID0gaXNFbnVtLmNhbGwodGhpcywga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKSk7XG4gIGlmICh0aGlzID09PSBPYmplY3RQcm90byAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9QU3ltYm9scywga2V5KSkgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gRSB8fCAhaGFzKHRoaXMsIGtleSkgfHwgIWhhcyhBbGxTeW1ib2xzLCBrZXkpIHx8IGhhcyh0aGlzLCBISURERU4pICYmIHRoaXNbSElEREVOXVtrZXldID8gRSA6IHRydWU7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSkge1xuICBpdCA9IHRvSU9iamVjdChpdCk7XG4gIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSk7XG4gIGlmIChpdCA9PT0gT2JqZWN0UHJvdG8gJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPUFN5bWJvbHMsIGtleSkpIHJldHVybjtcbiAgdmFyIEQgPSBnT1BEKGl0LCBrZXkpO1xuICBpZiAoRCAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0pKSBELmVudW1lcmFibGUgPSB0cnVlO1xuICByZXR1cm4gRDtcbn07XG52YXIgJGdldE93blByb3BlcnR5TmFtZXMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KSB7XG4gIHZhciBuYW1lcyA9IGdPUE4odG9JT2JqZWN0KGl0KSk7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGkgPSAwO1xuICB2YXIga2V5O1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkge1xuICAgIGlmICghaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIGtleSAhPSBISURERU4gJiYga2V5ICE9IE1FVEEpIHJlc3VsdC5wdXNoKGtleSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgJGdldE93blByb3BlcnR5U3ltYm9scyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5U3ltYm9scyhpdCkge1xuICB2YXIgSVNfT1AgPSBpdCA9PT0gT2JqZWN0UHJvdG87XG4gIHZhciBuYW1lcyA9IGdPUE4oSVNfT1AgPyBPUFN5bWJvbHMgOiB0b0lPYmplY3QoaXQpKTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgaSA9IDA7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSB7XG4gICAgaWYgKGhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiAoSVNfT1AgPyBoYXMoT2JqZWN0UHJvdG8sIGtleSkgOiB0cnVlKSkgcmVzdWx0LnB1c2goQWxsU3ltYm9sc1trZXldKTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcblxuLy8gMTkuNC4xLjEgU3ltYm9sKFtkZXNjcmlwdGlvbl0pXG5pZiAoIVVTRV9OQVRJVkUpIHtcbiAgJFN5bWJvbCA9IGZ1bmN0aW9uIFN5bWJvbCgpIHtcbiAgICBpZiAodGhpcyBpbnN0YW5jZW9mICRTeW1ib2wpIHRocm93IFR5cGVFcnJvcignU3ltYm9sIGlzIG5vdCBhIGNvbnN0cnVjdG9yIScpO1xuICAgIHZhciB0YWcgPSB1aWQoYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpO1xuICAgIHZhciAkc2V0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICBpZiAodGhpcyA9PT0gT2JqZWN0UHJvdG8pICRzZXQuY2FsbChPUFN5bWJvbHMsIHZhbHVlKTtcbiAgICAgIGlmIChoYXModGhpcywgSElEREVOKSAmJiBoYXModGhpc1tISURERU5dLCB0YWcpKSB0aGlzW0hJRERFTl1bdGFnXSA9IGZhbHNlO1xuICAgICAgc2V0U3ltYm9sRGVzYyh0aGlzLCB0YWcsIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbiAgICB9O1xuICAgIGlmIChERVNDUklQVE9SUyAmJiBzZXR0ZXIpIHNldFN5bWJvbERlc2MoT2JqZWN0UHJvdG8sIHRhZywgeyBjb25maWd1cmFibGU6IHRydWUsIHNldDogJHNldCB9KTtcbiAgICByZXR1cm4gd3JhcCh0YWcpO1xuICB9O1xuICByZWRlZmluZSgkU3ltYm9sW1BST1RPVFlQRV0sICd0b1N0cmluZycsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLl9rO1xuICB9KTtcblxuICAkR09QRC5mID0gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbiAgJERQLmYgPSAkZGVmaW5lUHJvcGVydHk7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZiA9IGdPUE5FeHQuZiA9ICRnZXRPd25Qcm9wZXJ0eU5hbWVzO1xuICByZXF1aXJlKCcuL19vYmplY3QtcGllJykuZiA9ICRwcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKS5mID0gJGdldE93blByb3BlcnR5U3ltYm9scztcblxuICBpZiAoREVTQ1JJUFRPUlMgJiYgIXJlcXVpcmUoJy4vX2xpYnJhcnknKSkge1xuICAgIHJlZGVmaW5lKE9iamVjdFByb3RvLCAncHJvcGVydHlJc0VudW1lcmFibGUnLCAkcHJvcGVydHlJc0VudW1lcmFibGUsIHRydWUpO1xuICB9XG5cbiAgd2tzRXh0LmYgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHJldHVybiB3cmFwKHdrcyhuYW1lKSk7XG4gIH07XG59XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIHsgU3ltYm9sOiAkU3ltYm9sIH0pO1xuXG5mb3IgKHZhciBlczZTeW1ib2xzID0gKFxuICAvLyAxOS40LjIuMiwgMTkuNC4yLjMsIDE5LjQuMi40LCAxOS40LjIuNiwgMTkuNC4yLjgsIDE5LjQuMi45LCAxOS40LjIuMTAsIDE5LjQuMi4xMSwgMTkuNC4yLjEyLCAxOS40LjIuMTMsIDE5LjQuMi4xNFxuICAnaGFzSW5zdGFuY2UsaXNDb25jYXRTcHJlYWRhYmxlLGl0ZXJhdG9yLG1hdGNoLHJlcGxhY2Usc2VhcmNoLHNwZWNpZXMsc3BsaXQsdG9QcmltaXRpdmUsdG9TdHJpbmdUYWcsdW5zY29wYWJsZXMnXG4pLnNwbGl0KCcsJyksIGogPSAwOyBlczZTeW1ib2xzLmxlbmd0aCA+IGo7KXdrcyhlczZTeW1ib2xzW2orK10pO1xuXG5mb3IgKHZhciB3ZWxsS25vd25TeW1ib2xzID0gJGtleXMod2tzLnN0b3JlKSwgayA9IDA7IHdlbGxLbm93blN5bWJvbHMubGVuZ3RoID4gazspIHdrc0RlZmluZSh3ZWxsS25vd25TeW1ib2xzW2srK10pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnU3ltYm9sJywge1xuICAvLyAxOS40LjIuMSBTeW1ib2wuZm9yKGtleSlcbiAgJ2Zvcic6IGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gaGFzKFN5bWJvbFJlZ2lzdHJ5LCBrZXkgKz0gJycpXG4gICAgICA/IFN5bWJvbFJlZ2lzdHJ5W2tleV1cbiAgICAgIDogU3ltYm9sUmVnaXN0cnlba2V5XSA9ICRTeW1ib2woa2V5KTtcbiAgfSxcbiAgLy8gMTkuNC4yLjUgU3ltYm9sLmtleUZvcihzeW0pXG4gIGtleUZvcjogZnVuY3Rpb24ga2V5Rm9yKHN5bSkge1xuICAgIGlmICghaXNTeW1ib2woc3ltKSkgdGhyb3cgVHlwZUVycm9yKHN5bSArICcgaXMgbm90IGEgc3ltYm9sIScpO1xuICAgIGZvciAodmFyIGtleSBpbiBTeW1ib2xSZWdpc3RyeSkgaWYgKFN5bWJvbFJlZ2lzdHJ5W2tleV0gPT09IHN5bSkgcmV0dXJuIGtleTtcbiAgfSxcbiAgdXNlU2V0dGVyOiBmdW5jdGlvbiAoKSB7IHNldHRlciA9IHRydWU7IH0sXG4gIHVzZVNpbXBsZTogZnVuY3Rpb24gKCkgeyBzZXR0ZXIgPSBmYWxzZTsgfVxufSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsICdPYmplY3QnLCB7XG4gIC8vIDE5LjEuMi4yIE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbiAgY3JlYXRlOiAkY3JlYXRlLFxuICAvLyAxOS4xLjIuNCBPYmplY3QuZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcylcbiAgZGVmaW5lUHJvcGVydHk6ICRkZWZpbmVQcm9wZXJ0eSxcbiAgLy8gMTkuMS4yLjMgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcylcbiAgZGVmaW5lUHJvcGVydGllczogJGRlZmluZVByb3BlcnRpZXMsXG4gIC8vIDE5LjEuMi42IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUClcbiAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLFxuICAvLyAxOS4xLjIuNyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxuICBnZXRPd25Qcm9wZXJ0eU5hbWVzOiAkZ2V0T3duUHJvcGVydHlOYW1lcyxcbiAgLy8gMTkuMS4yLjggT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhPKVxuICBnZXRPd25Qcm9wZXJ0eVN5bWJvbHM6ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHNcbn0pO1xuXG4vLyAyNC4zLjIgSlNPTi5zdHJpbmdpZnkodmFsdWUgWywgcmVwbGFjZXIgWywgc3BhY2VdXSlcbiRKU09OICYmICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKCFVU0VfTkFUSVZFIHx8ICRmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHZhciBTID0gJFN5bWJvbCgpO1xuICAvLyBNUyBFZGdlIGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyB7fVxuICAvLyBXZWJLaXQgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIG51bGxcbiAgLy8gVjggdGhyb3dzIG9uIGJveGVkIHN5bWJvbHNcbiAgcmV0dXJuIF9zdHJpbmdpZnkoW1NdKSAhPSAnW251bGxdJyB8fCBfc3RyaW5naWZ5KHsgYTogUyB9KSAhPSAne30nIHx8IF9zdHJpbmdpZnkoT2JqZWN0KFMpKSAhPSAne30nO1xufSkpLCAnSlNPTicsIHtcbiAgc3RyaW5naWZ5OiBmdW5jdGlvbiBzdHJpbmdpZnkoaXQpIHtcbiAgICB2YXIgYXJncyA9IFtpdF07XG4gICAgdmFyIGkgPSAxO1xuICAgIHZhciByZXBsYWNlciwgJHJlcGxhY2VyO1xuICAgIHdoaWxlIChhcmd1bWVudHMubGVuZ3RoID4gaSkgYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcbiAgICAkcmVwbGFjZXIgPSByZXBsYWNlciA9IGFyZ3NbMV07XG4gICAgaWYgKCFpc09iamVjdChyZXBsYWNlcikgJiYgaXQgPT09IHVuZGVmaW5lZCB8fCBpc1N5bWJvbChpdCkpIHJldHVybjsgLy8gSUU4IHJldHVybnMgc3RyaW5nIG9uIHVuZGVmaW5lZFxuICAgIGlmICghaXNBcnJheShyZXBsYWNlcikpIHJlcGxhY2VyID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgIGlmICh0eXBlb2YgJHJlcGxhY2VyID09ICdmdW5jdGlvbicpIHZhbHVlID0gJHJlcGxhY2VyLmNhbGwodGhpcywga2V5LCB2YWx1ZSk7XG4gICAgICBpZiAoIWlzU3ltYm9sKHZhbHVlKSkgcmV0dXJuIHZhbHVlO1xuICAgIH07XG4gICAgYXJnc1sxXSA9IHJlcGxhY2VyO1xuICAgIHJldHVybiBfc3RyaW5naWZ5LmFwcGx5KCRKU09OLCBhcmdzKTtcbiAgfVxufSk7XG5cbi8vIDE5LjQuMy40IFN5bWJvbC5wcm90b3R5cGVbQEB0b1ByaW1pdGl2ZV0oaGludClcbiRTeW1ib2xbUFJPVE9UWVBFXVtUT19QUklNSVRJVkVdIHx8IHJlcXVpcmUoJy4vX2hpZGUnKSgkU3ltYm9sW1BST1RPVFlQRV0sIFRPX1BSSU1JVElWRSwgJFN5bWJvbFtQUk9UT1RZUEVdLnZhbHVlT2YpO1xuLy8gMTkuNC4zLjUgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoJFN5bWJvbCwgJ1N5bWJvbCcpO1xuLy8gMjAuMi4xLjkgTWF0aFtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoTWF0aCwgJ01hdGgnLCB0cnVlKTtcbi8vIDI0LjMuMyBKU09OW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhnbG9iYWwuSlNPTiwgJ0pTT04nLCB0cnVlKTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L0FycmF5LnByb3RvdHlwZS5pbmNsdWRlc1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciAkaW5jbHVkZXMgPSByZXF1aXJlKCcuL19hcnJheS1pbmNsdWRlcycpKHRydWUpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCwgJ0FycmF5Jywge1xuICBpbmNsdWRlczogZnVuY3Rpb24gaW5jbHVkZXMoZWwgLyogLCBmcm9tSW5kZXggPSAwICovKSB7XG4gICAgcmV0dXJuICRpbmNsdWRlcyh0aGlzLCBlbCwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcblxucmVxdWlyZSgnLi9fYWRkLXRvLXVuc2NvcGFibGVzJykoJ2luY2x1ZGVzJyk7XG4iLCIvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1vYmplY3QtdmFsdWVzLWVudHJpZXNcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgJGVudHJpZXMgPSByZXF1aXJlKCcuL19vYmplY3QtdG8tYXJyYXknKSh0cnVlKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdPYmplY3QnLCB7XG4gIGVudHJpZXM6IGZ1bmN0aW9uIGVudHJpZXMoaXQpIHtcbiAgICByZXR1cm4gJGVudHJpZXMoaXQpO1xuICB9XG59KTtcbiIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLW9iamVjdC12YWx1ZXMtZW50cmllc1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciAkdmFsdWVzID0gcmVxdWlyZSgnLi9fb2JqZWN0LXRvLWFycmF5JykoZmFsc2UpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHtcbiAgdmFsdWVzOiBmdW5jdGlvbiB2YWx1ZXMoaXQpIHtcbiAgICByZXR1cm4gJHZhbHVlcyhpdCk7XG4gIH1cbn0pO1xuIiwicmVxdWlyZSgnLi9fd2tzLWRlZmluZScpKCdhc3luY0l0ZXJhdG9yJyk7XG4iLCJ2YXIgJGl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vZXM2LmFycmF5Lml0ZXJhdG9yJyk7XG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgd2tzID0gcmVxdWlyZSgnLi9fd2tzJyk7XG52YXIgSVRFUkFUT1IgPSB3a3MoJ2l0ZXJhdG9yJyk7XG52YXIgVE9fU1RSSU5HX1RBRyA9IHdrcygndG9TdHJpbmdUYWcnKTtcbnZhciBBcnJheVZhbHVlcyA9IEl0ZXJhdG9ycy5BcnJheTtcblxudmFyIERPTUl0ZXJhYmxlcyA9IHtcbiAgQ1NTUnVsZUxpc3Q6IHRydWUsIC8vIFRPRE86IE5vdCBzcGVjIGNvbXBsaWFudCwgc2hvdWxkIGJlIGZhbHNlLlxuICBDU1NTdHlsZURlY2xhcmF0aW9uOiBmYWxzZSxcbiAgQ1NTVmFsdWVMaXN0OiBmYWxzZSxcbiAgQ2xpZW50UmVjdExpc3Q6IGZhbHNlLFxuICBET01SZWN0TGlzdDogZmFsc2UsXG4gIERPTVN0cmluZ0xpc3Q6IGZhbHNlLFxuICBET01Ub2tlbkxpc3Q6IHRydWUsXG4gIERhdGFUcmFuc2Zlckl0ZW1MaXN0OiBmYWxzZSxcbiAgRmlsZUxpc3Q6IGZhbHNlLFxuICBIVE1MQWxsQ29sbGVjdGlvbjogZmFsc2UsXG4gIEhUTUxDb2xsZWN0aW9uOiBmYWxzZSxcbiAgSFRNTEZvcm1FbGVtZW50OiBmYWxzZSxcbiAgSFRNTFNlbGVjdEVsZW1lbnQ6IGZhbHNlLFxuICBNZWRpYUxpc3Q6IHRydWUsIC8vIFRPRE86IE5vdCBzcGVjIGNvbXBsaWFudCwgc2hvdWxkIGJlIGZhbHNlLlxuICBNaW1lVHlwZUFycmF5OiBmYWxzZSxcbiAgTmFtZWROb2RlTWFwOiBmYWxzZSxcbiAgTm9kZUxpc3Q6IHRydWUsXG4gIFBhaW50UmVxdWVzdExpc3Q6IGZhbHNlLFxuICBQbHVnaW46IGZhbHNlLFxuICBQbHVnaW5BcnJheTogZmFsc2UsXG4gIFNWR0xlbmd0aExpc3Q6IGZhbHNlLFxuICBTVkdOdW1iZXJMaXN0OiBmYWxzZSxcbiAgU1ZHUGF0aFNlZ0xpc3Q6IGZhbHNlLFxuICBTVkdQb2ludExpc3Q6IGZhbHNlLFxuICBTVkdTdHJpbmdMaXN0OiBmYWxzZSxcbiAgU1ZHVHJhbnNmb3JtTGlzdDogZmFsc2UsXG4gIFNvdXJjZUJ1ZmZlckxpc3Q6IGZhbHNlLFxuICBTdHlsZVNoZWV0TGlzdDogdHJ1ZSwgLy8gVE9ETzogTm90IHNwZWMgY29tcGxpYW50LCBzaG91bGQgYmUgZmFsc2UuXG4gIFRleHRUcmFja0N1ZUxpc3Q6IGZhbHNlLFxuICBUZXh0VHJhY2tMaXN0OiBmYWxzZSxcbiAgVG91Y2hMaXN0OiBmYWxzZVxufTtcblxuZm9yICh2YXIgY29sbGVjdGlvbnMgPSBnZXRLZXlzKERPTUl0ZXJhYmxlcyksIGkgPSAwOyBpIDwgY29sbGVjdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgdmFyIE5BTUUgPSBjb2xsZWN0aW9uc1tpXTtcbiAgdmFyIGV4cGxpY2l0ID0gRE9NSXRlcmFibGVzW05BTUVdO1xuICB2YXIgQ29sbGVjdGlvbiA9IGdsb2JhbFtOQU1FXTtcbiAgdmFyIHByb3RvID0gQ29sbGVjdGlvbiAmJiBDb2xsZWN0aW9uLnByb3RvdHlwZTtcbiAgdmFyIGtleTtcbiAgaWYgKHByb3RvKSB7XG4gICAgaWYgKCFwcm90b1tJVEVSQVRPUl0pIGhpZGUocHJvdG8sIElURVJBVE9SLCBBcnJheVZhbHVlcyk7XG4gICAgaWYgKCFwcm90b1tUT19TVFJJTkdfVEFHXSkgaGlkZShwcm90bywgVE9fU1RSSU5HX1RBRywgTkFNRSk7XG4gICAgSXRlcmF0b3JzW05BTUVdID0gQXJyYXlWYWx1ZXM7XG4gICAgaWYgKGV4cGxpY2l0KSBmb3IgKGtleSBpbiAkaXRlcmF0b3JzKSBpZiAoIXByb3RvW2tleV0pIHJlZGVmaW5lKHByb3RvLCBrZXksICRpdGVyYXRvcnNba2V5XSwgdHJ1ZSk7XG4gIH1cbn1cbiIsImltcG9ydCBuZXh1czE5IGZyb20gJy4vbmV4dXMxOSc7XG5cblNpZWJlbEFwcEZhY2FkZS5OMTlIZWxwZXIgPSBuZXh1czE5O1xuIiwiaW1wb3J0IE4xOW5vdGlmaWNhdGlvbnMgZnJvbSAnLi9uMTlub3RpZmljYXRpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTjE5YmFzZUFwcGxldCB7XG4gIGNvbnN0cnVjdG9yKHNldHRpbmdzKSB7XG4gICAgdGhpcy5jb25zdHMgPSBTaWViZWxKUy5EZXBlbmRlbmN5KCdTaWViZWxBcHAuQ29uc3RhbnRzJyk7XG4gICAgdGhpcy51dGlscyA9IFNpZWJlbEpTLkRlcGVuZGVuY3koJ1NpZWJlbEFwcC5VdGlscycpO1xuICAgIHRoaXMucG0gPSBzZXR0aW5ncy5wbTtcbiAgICB0aGlzLmNvbnZlcnREYXRlcyA9IHNldHRpbmdzLmNvbnZlcnREYXRlcztcbiAgICB0aGlzLnZpZXcgPSBTaWViZWxBcHAuU19BcHAuR2V0QWN0aXZlVmlldygpO1xuICAgIHRoaXMuYXBwbGV0TmFtZSA9IHRoaXMucG0uR2V0KCdHZXROYW1lJyk7XG4gICAgdGhpcy5hcHBsZXQgPSB0aGlzLnZpZXcuR2V0QXBwbGV0KHRoaXMuYXBwbGV0TmFtZSk7XG4gICAgdGhpcy5pc0xpc3RBcHBsZXQgPSB0eXBlb2YgdGhpcy5wbS5HZXQoJ0dldExpc3RPZkNvbHVtbnMnKSAhPT0gJ3VuZGVmaW5lZCc7XG4gICAgdGhpcy5yZXF1aXJlZCA9IFtdOyAvLyB3aWxsIGJlIGVtcHR5IGZvciB0aGUgbGlzdCBhcHBsZXRcbiAgICB0aGlzLmxvdiA9IHt9O1xuICAgIHRoaXMuYm9vbE9iamVjdCA9IG5ldyBTaWViZWxBcHAuU19BcHAuRGF0dW1Cb29sT2JqZWN0KCk7XG5cbiAgICB0aGlzLmxvYWRMb2NhbGVEYXRhKCk7XG5cbiAgICB0aGlzLmZpZWxkVG9Db250cm9sTWFwID0gdGhpcy5fZ2V0RmllbGRUb0NvbnRyb2xNYXAoKTtcbiAgICBjb25zdCBiY0lkID0gdGhpcy5hcHBsZXQuR2V0QkNJZCgpO1xuICAgIHRoaXMubm90aWZpY2F0aW9ucyA9IG5ldyBOMTlub3RpZmljYXRpb25zKHRoaXMucG0sIHRoaXMuY29uc3RzLCBiY0lkLCB0aGlzLmZpZWxkVG9Db250cm9sTWFwKTtcblxuICAgIC8vIHBvcHVsYXRlIHRoZSByZXF1aXJlZCBhcnJheSBmb3IgZm9ybSBhcHBsZXRzXG4gICAgaWYgKCF0aGlzLmlzTGlzdEFwcGxldCkge1xuICAgICAgY29uc3QgYXBwbGV0SWQgPSBgc18ke3RoaXMucG0uR2V0KCdHZXRGdWxsSWQnKX1fZGl2YDtcbiAgICAgIGNvbnN0IGFwcGxldElucHV0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGFwcGxldElkKS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpO1xuICAgICAgYXBwbGV0SW5wdXRzLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgIGlmIChlbC5hdHRyaWJ1dGVzWydhcmlhLXJlcXVpcmVkJ10pIHtcbiAgICAgICAgICB0aGlzLnJlcXVpcmVkLnB1c2goZWwuYXR0cmlidXRlcy5uYW1lLm5vZGVWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIGxpc3RlbmVyIHRvIGdldCBkeW5hbWljIExPVnNcbiAgICB0aGlzLnBtLkF0dGFjaFBNQmluZGluZygnVXBkYXRlUXVpY2tQaWNrSW5mbycsIChpbnB1dE5hbWUsIGFyZywgYXJyKSA9PiB7XG4gICAgICBjb25zdCB2aWV3TmFtZSA9IHRoaXMudmlldy5HZXROYW1lKCk7XG4gICAgICBpZiAodmlld05hbWUgPT09IGFyclsxXSAmJiB0aGlzLmFwcGxldE5hbWUgPT09IGFyclsyXSkge1xuICAgICAgICBpZiAoJ2ZhbHNlJyA9PT0gYXJyWzRdKSB7XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgICBjb25zb2xlLndhcm4oYFtOMTldUGlja2xpc3QgaXMgbm90IGFzc29jaWF0ZWQgd2l0aCB0aGUgY29udHJvbCAtICR7SlNPTi5zdHJpbmdpZnkoYXJyKX1gKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxvdlthcnJbM11dID0gYXJyLnNsaWNlKCkuc3BsaWNlKDUpLmZpbHRlcihlbCA9PiBlbCAhPT0gJycpO1xuICAgICAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRvIGluZGljYXRlIHdoZW4gYW4gZW1wdHkgdmFsdWUgaXMgYWxsb3dlZD9cbiAgICAgIH1cbiAgICB9LCB7IHNjb3BlOiB0aGlzIH0pO1xuXG4gICAgdGhpcy5pc1RyZWVBcHBsZXQgPSBTaWViZWxBcHBGYWNhZGUuRXhwbG9yZXJQcmVzZW50YXRpb25Nb2RlbCA9PT0gdGhpcy5wbS5jb25zdHJ1Y3RvcjtcbiAgICBpZiAodGhpcy5pc1RyZWVBcHBsZXQpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oJ1RoaXMgaXMgYSB0cmVlIGFwcGxldC4uLiBpdCBpcyBlYXNpZXIgYW5kIHNhZmVyIHRvIHVzZSBsaXN0IG9yIGZvcm0gYXBwbGV0cycpO1xuICAgIH1cbiAgfVxuXG4gIGxvYWRMb2NhbGVEYXRhKCkge1xuICAgIGNvbnN0IGxvY2FsZU9iamVjdCA9IFNpZWJlbEFwcC5TX0FwcC5Mb2NhbGVPYmplY3Q7XG4gICAgY29uc3QgZGF0ZVRpbWVGb3JtYXQgPSBsb2NhbGVPYmplY3QuR2V0UHJvZmlsZSh0aGlzLmNvbnN0cy5nZXQoJ0xPQ0FMX0RBVEVUSU1FX0ZPUk1BVCcpKTtcbiAgICB0aGlzLmxvY2FsZURhdGEgPSB7XG4gICAgICBmaXJzdERheU9mV2VlazogbG9jYWxlT2JqZWN0LkdldFdlZWtTdGFydERheSgpLFxuICAgICAgZGF0ZUZvcm1hdDogbG9jYWxlT2JqZWN0LkdldFByb2ZpbGUodGhpcy5jb25zdHMuZ2V0KCdMT0NBTF9EQVRFX0ZPUk1BVCcpKSxcbiAgICAgIGRhdGVUaW1lRm9ybWF0LFxuICAgICAgaXMyNGhvdXJzRm9ybWF0OiAhL3AkLy50ZXN0KGRhdGVUaW1lRm9ybWF0KSxcbiAgICAgIGxvY2FsQ291bnRyeVBob25lQ29kZTogbG9jYWxlT2JqZWN0LkdldFByb2ZpbGUodGhpcy5jb25zdHMuZ2V0KCdMT0NBTF9QSE9ORV9DT1VOVFJZJykpLFxuICAgIH07XG4gICAgdGhpcy5sb2NhbGVEYXRhLm1vbnRocyA9IFtdO1xuICAgIHRoaXMubG9jYWxlRGF0YS5zaG9ydE1vbnRocyA9IFtdO1xuICAgIGNvbnN0IG1vbnRocyA9IGxvY2FsZU9iamVjdC5HZXREYXRhKCdNb250aCcsIGxvY2FsZU9iamVjdC5tX3NwTW9udGhQUyk7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMTI7IGkgKz0gMSkge1xuICAgICAgdGhpcy5sb2NhbGVEYXRhLm1vbnRocy5wdXNoKG1vbnRocy5HZXRQcm9wZXJ0eShgJHtpfTowYCkpO1xuICAgICAgdGhpcy5sb2NhbGVEYXRhLnNob3J0TW9udGhzLnB1c2gobW9udGhzLkdldFByb3BlcnR5KGAke2l9OjFgKSk7XG4gICAgfVxuXG4gICAgY29uc3Qgd2Vla0RheXMgPSBsb2NhbGVPYmplY3QuR2V0RGF0YSgnRGF5T2ZXZWVrJywgbG9jYWxlT2JqZWN0Lm1fc3BEYXlPZldlZWtQUyk7XG4gICAgdGhpcy5sb2NhbGVEYXRhLndlZWtEYXlzID0gW107XG4gICAgdGhpcy5sb2NhbGVEYXRhLndlZWtEYXlzMyA9IFtdO1xuICAgIHRoaXMubG9jYWxlRGF0YS53ZWVrRGF5czEgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDc7IGkgKz0gMSkge1xuICAgICAgdGhpcy5sb2NhbGVEYXRhLndlZWtEYXlzLnB1c2god2Vla0RheXMuR2V0UHJvcGVydHkoYCR7aX06MGApKTtcbiAgICAgIHRoaXMubG9jYWxlRGF0YS53ZWVrRGF5czMucHVzaCh3ZWVrRGF5cy5HZXRQcm9wZXJ0eShgJHtpfToxYCkpO1xuICAgICAgdGhpcy5sb2NhbGVEYXRhLndlZWtEYXlzMS5wdXNoKHdlZWtEYXlzLkdldFByb3BlcnR5KGAke2l9OjJgKSk7XG4gICAgfVxuICB9XG5cbiAgc3Vic2NyaWJlKGZ1bmMpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzXG4gICAgLy8gVE9ETyA6IGFjY2VwdCBhbHNvIGNvbnRleHQgZm9yIGZ1bmN0aW9uLCBvciB0aGUgY2FsbGVyIGJpbmRzIHRoZSBjb250ZXh0IHRvIHRoZSBmdW5jdGlvbj9cbiAgICByZXR1cm4gdGhpcy5ub3RpZmljYXRpb25zLnN1YnNjcmliZShmdW5jKTtcbiAgfVxuXG4gIHVuc3Vic2NyaWJlKHRva2VuKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2xhc3MtbWV0aG9kcy11c2UtdGhpc1xuICAgIHJldHVybiB0aGlzLm5vdGlmaWNhdGlvbnMudW5zdWJzY3JpYmUodG9rZW4pO1xuICB9XG5cbiAgX2dldENvbnRyb2wobmFtZSkge1xuICAgIHJldHVybiB0aGlzLnBtLkV4ZWN1dGVNZXRob2QoJ0dldENvbnRyb2wnLCBuYW1lKTtcbiAgfVxuXG4gIF9yZXR1cm5Db250cm9scygpIHtcbiAgICBpZiAodGhpcy5pc0xpc3RBcHBsZXQpIHtcbiAgICAgIHJldHVybiB0aGlzLnBtLkdldCgnR2V0TGlzdE9mQ29sdW1ucycpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5wbS5HZXQoJ0dldENvbnRyb2xzJyk7XG4gIH1cblxuICAvLyBjYWxsZWQgaW50byB0aGUgZ2V0Q29udHJvbHMgdG8gcmVkdWNlIHRoZSBhbW91bnQgb2YgdGhlIHJldHVybmVkIGNvbnRyb2xzXG4gIF9pc1NraXBDb250cm9sKHR5cGUpIHtcbiAgICAvLyBodHRwczovL2RvY3Mub3JhY2xlLmNvbS9jZC9FNzQ4OTBfMDEvYm9va3MvQ29uZmlnT3BlblVJL2FwcGVuZGl4X2FfYXBpMDAyLmh0bVxuICAgIC8vIG1heWJlIHdlIG5lZWQgdG8gZXhjbHVkZSBtb3JlIHR5cGVzXG4gICAgcmV0dXJuICh0eXBlID09PSB0aGlzLmNvbnN0cy5nZXQoJ1NXRV9QU1RfQlVUVE9OX0NUUkwnKSlcbiAgICAgIHx8ICh0eXBlID09PSB0aGlzLmNvbnN0cy5nZXQoJ1NXRV9DVFJMX0xJTksnKSlcbiAgICAgIHx8ICh0eXBlID09PSB0aGlzLmNvbnN0cy5nZXQoJ1NXRV9DVFJMX1BMQUlOVEVYVCcpKVxuICAgICAgfHwgKHR5cGUgPT09ICdudWxsJyk7IC8vIEdldFVpVHlwZSByZXR1cm5zIHN0cmluZ1xuICB9XG5cbiAgX2lzUmVxdWlyZWQoaW5wdXROYW1lKSB7XG4gICAgLy8gcmVxdWlyZWQgaXMgZW1wdHkgZm9yIGxpc3QgYXBwbGV0cywgaG9wZWZ1bGx5IGZvciBub3dcbiAgICByZXR1cm4gdGhpcy5yZXF1aXJlZC5pbmRleE9mKGlucHV0TmFtZSkgPiAtMTtcbiAgfVxuXG4gIHN0YXRpYyBHZXRTdGF0aWNMT1YoYXJyKSB7XG4gICAgcmV0dXJuIGFyci5tYXAoZWwgPT4gZWwucHJvcEFycmF5KTtcbiAgfVxuXG4gIF9zZXRBY3RpdmVDb250cm9sKG5hbWUpIHtcbiAgICBpZiAobmFtZSkge1xuICAgICAgcmV0dXJuIHRoaXMucG0uRXhlY3V0ZU1ldGhvZCgnU2V0QWN0aXZlQ29udHJvbCcsIHRoaXMuX2dldENvbnRyb2wobmFtZSkpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5wbS5FeGVjdXRlTWV0aG9kKCdTZXRBY3RpdmVDb250cm9sJywgbnVsbCk7XG4gIH1cblxuICBfaXNEYXRlVGltZUNvbnRyb2wodWlUeXBlKSB7XG4gICAgcmV0dXJuIHRoaXMuY29uc3RzLmdldCgnU1dFX0NUUkxfREFURV9UWl9QSUNLJykgPT09IHVpVHlwZVxuICAgICAgfHwgdGhpcy5jb25zdHMuZ2V0KCdTV0VfQ1RSTF9EQVRFX1RJTUVfUElDSycpID09PSB1aVR5cGVcbiAgICAgIHx8IHRoaXMuY29uc3RzLmdldCgnU1dFX0NUUkxfREFURV9QSUNLJykgPT09IHVpVHlwZTtcbiAgfVxuXG4gIF9nZXRTaWViZWxWYWx1ZSh2YWx1ZSwgdWlUeXBlLCBkaXNwbGF5Rm9ybWF0KSB7XG4gICAgLy8gVE9ETzogbnVtYmVycywgY3VycmVuY2llcywgYW5kIHBob25lcz9cbiAgICBpZiAodGhpcy5jb25zdHMuZ2V0KCdTV0VfQ1RSTF9DSEVDS0JPWCcpID09PSB1aVR5cGUpIHtcbiAgICAgIC8vIGNvbnZlcnQgdHJ1ZS9mYWxzZSA9PiBZL04gLy8gbnVsbCBpcyBub3QgaGFuZGxlZCAodGhlIHNhbWUgYXMgaW4gc3RhbmRhcmQgT3BlbiBVSSlcbiAgICAgIC8vIHZhbHVlID0gdmFsdWUgPyAnWScgOiAnTic7XG4gICAgICB0aGlzLmJvb2xPYmplY3QuU2V0VmFsdWUodmFsdWUpO1xuICAgICAgcmV0dXJuIHRoaXMuYm9vbE9iamVjdC5HZXRBc1N0cmluZygpO1xuICAgIH1cbiAgICBpZiAodGhpcy5jb252ZXJ0RGF0ZXMgJiYgZGlzcGxheUZvcm1hdCAmJiB0aGlzLl9pc0RhdGVUaW1lQ29udHJvbCh1aVR5cGUpKSB7XG4gICAgICAvLyBUT0RPOiBjaGVjayBpZiBhIHZhbGlkIGRhdGUgaXMgaW5wdXR0ZWRcbiAgICAgIGNvbnN0IGRhdGUgPSB2YWx1ZS50b0xvY2FsZVN0cmluZygnZW4tVVMnLCB7IGhvdXIxMjogZmFsc2UgfSkuc3BsaXQoJywnKS5qb2luKCcnKTtcbiAgICAgIHJldHVybiBTaWViZWxBcHAuU19BcHAuTG9jYWxlT2JqZWN0LkdldFN0cmluZ0Zyb21EYXRlVGltZShkYXRlLCAnTS9EL1lZWVkgSEg6bW06c3MnLCBkaXNwbGF5Rm9ybWF0LCBmYWxzZSk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIGNhbkludm9rZU1ldGhvZChtZXRob2QpIHtcbiAgICByZXR1cm4gdGhpcy5wbS5FeGVjdXRlTWV0aG9kKCdDYW5JbnZva2VNZXRob2QnLCBtZXRob2QpO1xuICB9XG5cbiAgaW52b2tlTWV0aG9kKG1ldGhvZCkge1xuICAgIGlmICghdGhpcy5jYW5JbnZva2VNZXRob2QobWV0aG9kKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5wbS5FeGVjdXRlTWV0aG9kKCdJbnZva2VNZXRob2QnLCBtZXRob2QpO1xuICB9XG5cbiAgZ2V0Q29udHJvbHMoKSB7XG4gICAgY29uc3QgY29udHJvbHMgPSB7fTtcbiAgICBjb25zdCBhcHBsZXRDb250cm9scyA9IHRoaXMuX3JldHVybkNvbnRyb2xzKCk7XG4gICAgY29uc3QgYXJyID0gT2JqZWN0LmVudHJpZXMoYXBwbGV0Q29udHJvbHMpO1xuICAgIGFyci5mb3JFYWNoKChjb250cm9sRW50cnkpID0+IHtcbiAgICAgIGNvbnN0IGNvbnRyb2wgPSBjb250cm9sRW50cnlbMV07XG4gICAgICBjb25zdCB1aVR5cGUgPSBjb250cm9sLkdldFVJVHlwZSgpO1xuICAgICAgY29uc3QgZGlzcGxheUZvcm1hdCA9IGNvbnRyb2wuR2V0RGlzcGxheUZvcm1hdCgpIHx8IHRoaXMuZ2V0Q29udHJvbERpc3BsYXlGb3JtYXQodWlUeXBlKTtcbiAgICAgIGlmICghdGhpcy5faXNTa2lwQ29udHJvbCh1aVR5cGUpKSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBjb250cm9sRW50cnlbMF07XG4gICAgICAgIGNvbnN0IGlucHV0TmFtZSA9IGNvbnRyb2wuR2V0SW5wdXROYW1lKCk7XG4gICAgICAgIGNvbnN0IGZpZWxkTmFtZSA9IGNvbnRyb2wuR2V0RmllbGROYW1lKCk7XG4gICAgICAgIGNvbnN0IG9iaiA9IHtcbiAgICAgICAgICBuYW1lLFxuICAgICAgICAgIGxhYmVsOiBjb250cm9sLkdldERpc3BsYXlOYW1lKCksXG4gICAgICAgICAgdWlUeXBlLFxuICAgICAgICAgIHJlcXVpcmVkOiB0aGlzLl9pc1JlcXVpcmVkKGlucHV0TmFtZSksXG4gICAgICAgICAgYm91bmRlZFBpY2s6IGNvbnRyb2wuSXNCb3VuZGVkUGljaygpID09PSAnMScsXG4gICAgICAgICAgc3RhdGljUGljazogY29udHJvbC5Jc1N0YXRpY0JvdW5kZWQoKSA9PT0gJzEnLFxuICAgICAgICAgIGlucHV0TmFtZSxcbiAgICAgICAgICBpc1Bvc3RDaGFuZ2VzOiBjb250cm9sLklzUG9zdENoYW5nZXMoKSxcbiAgICAgICAgICBtYXhTaXplOiBjb250cm9sLkdldE1heFNpemUoKSxcbiAgICAgICAgICBmaWVsZE5hbWUsXG4gICAgICAgICAgaXNMaW5rOiB0aGlzLnBtLkV4ZWN1dGVNZXRob2QoJ0Nhbk5hdmlnYXRlJywgbmFtZSksXG4gICAgICAgICAgcmVhZG9ubHk6ICF0aGlzLnBtLkV4ZWN1dGVNZXRob2QoJ0NhblVwZGF0ZScsIG5hbWUpLFxuICAgICAgICAgIGRpc3BsYXlGb3JtYXQsXG4gICAgICAgICAgZGF0YVR5cGU6IHRoaXMucG0uRXhlY3V0ZU1ldGhvZCgnR2V0RmllbGREYXRhVHlwZScsIGZpZWxkTmFtZSksXG4gICAgICAgIH07XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosICdyZWFkT25seScsIHtcbiAgICAgICAgICBnZXQ6ICgpID0+IHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ1tOMTldVGhlIHJlYWRPbmx5IHByb3BlcnR5IHdpbGwgYmUgcmVtb3ZlZCBzb29uOyB1c2UgcmVhZG9ubHkgaW5zdGVhZCBvZiBpdC4nKTtcbiAgICAgICAgICAgIHJldHVybiBvYmoucmVhZG9ubHk7XG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIGFkZCB2YWx1ZXMgdG8gYmUgZGlzcGxheWVkIGluIHRoZSBzdGF0aWMgcGljayBsaXN0IC0gMiBkaWZmZXJlbnQgZm9ybWF0cyBmb3Igbm93XG4gICAgICAgIGlmIChvYmouc3RhdGljUGljaykge1xuICAgICAgICAgIG9iai5zdGF0aWNMT1YgPSBOMTliYXNlQXBwbGV0LkdldFN0YXRpY0xPVihjb250cm9sLkdldFJhZGlvR3JvdXBQcm9wU2V0KCkuY2hpbGRBcnJheSk7XG4gICAgICAgICAgb2JqLmxvdnMgPSBvYmouc3RhdGljTE9WLnJlZHVjZSgoYWNjLCBlbCkgPT4geyAvLyBub3JtYWxpemVkXG4gICAgICAgICAgICBhY2MucHVzaCh7IGxpYzogZWwuRmllbGRWYWx1ZSwgdmFsOiBlbC5EaXNwbGF5TmFtZSB9KTtcbiAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgfSwgW10pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRyb2xzW25hbWVdID0gb2JqO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBjb250cm9scztcbiAgfVxuXG4gIGdldFJlY29yZFNldChhZGRSZWNvcmRJbmRleCkge1xuICAgIC8vIFRPRE86IGNvbnZlcnQgdGhlIHZhbHVlcz9cbiAgICBpZiAoYWRkUmVjb3JkSW5kZXgpIHtcbiAgICAgIHJldHVybiB0aGlzLnBtLkdldCgnR2V0UmVjb3JkU2V0JykubWFwKChlbCwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgcmV0ID0gT2JqZWN0LmFzc2lnbih7fSwgZWwpO1xuICAgICAgICByZXQuX2luZHggPSBpbmRleDtcbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5wbS5HZXQoJ0dldFJlY29yZFNldCcpO1xuICB9XG5cbiAgZ2V0UmF3UmVjb3JkU2V0KGFkZFJlY29yZEluZGV4KSB7XG4gICAgLy8gVE9ETzogY29udmVydCB0aGUgdmFsdWVzP1xuICAgIGlmIChhZGRSZWNvcmRJbmRleCkge1xuICAgICAgcmV0dXJuIHRoaXMucG0uR2V0KCdHZXRSYXdSZWNvcmRTZXQnKS5tYXAoKGVsLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCByZXQgPSBPYmplY3QuYXNzaWduKHt9LCBlbCk7XG4gICAgICAgIHJldC5faW5keCA9IGluZGV4O1xuICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnBtLkdldCgnR2V0UmF3UmVjb3JkU2V0Jyk7XG4gIH1cblxuICBnZXRSb3dMaXN0Um93Q291bnQoKSB7XG4gICAgLy8gaG93IG11Y2ggYXBwbGV0IGNhbiBkaXNwbGF5IChzcGVjaWZpZWQgaW4gU2llYmVsIFRvb2xzKSAtIDEwLzIwXG4gICAgcmV0dXJuIHRoaXMucG0uR2V0KCdHZXRSb3dMaXN0Um93Q291bnQnKTtcbiAgfVxuXG4gIGdldE51bVJvd3MoKSB7XG4gICAgLy8gY3VycmVudGx5IGZldGNoZWQgZnJvbSBzZXJ2ZXI/XG4gICAgcmV0dXJuIHRoaXMucG0uR2V0KCdHZXROdW1Sb3dzJyk7XG4gIH1cblxuICBnZXRTZWxlY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucG0uR2V0KCdHZXRTZWxlY3Rpb24nKTtcbiAgfVxuXG4gIF9uYXZpZ2F0ZShtZXRob2QpIHtcbiAgICBpZiAoIXRoaXMuY2FuSW52b2tlTWV0aG9kKG1ldGhvZCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgcmV0ID0gdGhpcy5wbS5FeGVjdXRlTWV0aG9kKCdJbnZva2VNZXRob2QnLCBtZXRob2QpO1xuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICBuZXh0UmVjb3JkKCkge1xuICAgIHJldHVybiB0aGlzLl9uYXZpZ2F0ZSh0aGlzLmlzTGlzdEFwcGxldCA/ICdHb3RvTmV4dCcgOiAnR290b05leHRTZXQnKTtcbiAgfVxuXG4gIG5leHRSZWNvcmRTZXQoKSB7XG4gICAgaWYgKCF0aGlzLmlzTGlzdEFwcGxldCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fbmF2aWdhdGUoJ0dvdG9OZXh0U2V0Jyk7XG4gIH1cblxuICBwb3NpdGlvbk9uUm93KGluZGV4KSB7XG4gICAgaWYgKHRoaXMuaXNMaXN0QXBwbGV0KSB7XG4gICAgICBpZiAoIXRoaXMucG0uRXhlY3V0ZU1ldGhvZCgnQ2FuSW52b2tlTWV0aG9kJywgJ1Bvc2l0aW9uT25Sb3cnKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAoaW5kZXggPCAwKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIC8vIHNlZW1zIHRoaXMgY2hlY2sgaXMgcmVkdW5kYW50XG4gICAgICAvLyBpZiAodGhpcy5nZXROdW1Sb3dzKCkgPCBpbmRleCArIDEpIHtcbiAgICAgIC8vICAgcmV0dXJuIGZhbHNlO1xuICAgICAgLy8gfVxuICAgICAgaWYgKHRoaXMuZ2V0Um93TGlzdFJvd0NvdW50KCkgPCBpbmRleCArIDEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke2luZGV4fSBpcyBlcXVhbC9oaWdoZXIgdGhhbiBhbW91bnQgb2YgcmVjb3JkcyBpbiB0aGUgYXBwbGV0ICR7dGhpcy5nZXRSb3dMaXN0Um93Q291bnQoKX1gKTtcbiAgICAgIH1cbiAgICAgIC8vIFRPRE86IGlmIHdlIGdvdCB0byB0aGlzIHBvaW50XG4gICAgICAvLyAgc2hvdWxkIHdlIGNoZWNrIEdldEFjdGl2ZUNvbnRyb2wgKGFwcGxldC5wcm90b3R5cGUuSW52b2tlTWV0aG9kKVxuICAgICAgLy8gIGFuZCBudWxsaWZ5IGl0IGlmIGFjdGl2ZT9cbiAgICAgIHJldHVybiB0aGlzLnBtLkV4ZWN1dGVNZXRob2QoJ0hhbmRsZVJvd1NlbGVjdCcsIGluZGV4KTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHJldlJlY29yZCgpIHtcbiAgICBpZiAodGhpcy5pc0xpc3RBcHBsZXQpIHtcbiAgICAgIHJldHVybiB0aGlzLnBvc2l0aW9uT25Sb3codGhpcy5wbS5HZXQoJ0dldFNlbGVjdGlvbicpIC0gMSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9uYXZpZ2F0ZSgnR290b1ByZXZpb3VzU2V0Jyk7XG4gIH1cblxuICBwcmV2UmVjb3JkU2V0KCkge1xuICAgIGlmICghdGhpcy5pc0xpc3RBcHBsZXQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX25hdmlnYXRlKCdHb3RvUHJldmlvdXNTZXQnKTtcbiAgfVxuXG4gIG5ld1JlY29yZChjYikge1xuICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHRoaXMuX25ld1JlY29yZChyZXNvbHZlKSk7XG4gICAgcmV0dXJuIHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJyA/IHByb21pc2UudGhlbihjYikgOiBwcm9taXNlO1xuICB9XG5cbiAgX25ld1JlY29yZChjYikge1xuICAgIC8vIDIwMTkwMzEyIC0gY2hhbmdlZCBmcm9tIE5ld1JlY29yZCB0byBDcmVhdGVSZWNvcmQsICMzMVxuICAgIHJldHVybiB0aGlzLnBtLkV4ZWN1dGVNZXRob2QoJ0ludm9rZU1ldGhvZCcsICdDcmVhdGVSZWNvcmQnLCBudWxsLCB7XG4gICAgICBhc3luYzogdHJ1ZSxcbiAgICAgIGNiLFxuICAgIH0pO1xuICB9XG5cbiAgbmV3UmVjb3JkU3luYygpIHtcbiAgICAvLyAyMDE5MDMxMiAtIGNoYW5nZWQgZnJvbSBOZXdSZWNvcmQgdG8gQ3JlYXRlUmVjb3JkLCAjMzFcbiAgICByZXR1cm4gdGhpcy5wbS5FeGVjdXRlTWV0aG9kKCdJbnZva2VNZXRob2QnLCAnQ3JlYXRlUmVjb3JkJyk7XG4gIH1cblxuICB3cml0ZVJlY29yZChjYiwgY2JlcnIpIHtcbiAgICBsZXQgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHRoaXMuX3dyaXRlUmVjb3JkKCguLi5hcmdzKSA9PiB7XG4gICAgICBpZiAoYXJnc1syXS5HZXRQcm9wZXJ0eSgnU3RhdHVzJykgPT09ICdDb21wbGV0ZWQnKSB7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlamVjdCgpO1xuICAgICAgfVxuICAgIH0pKTtcbiAgICBwcm9taXNlID0gdHlwZW9mIGNiID09PSAnZnVuY3Rpb24nID8gcHJvbWlzZS50aGVuKGNiKSA6IHByb21pc2U7XG4gICAgcHJvbWlzZSA9IHR5cGVvZiBjYmVyciA9PT0gJ2Z1bmN0aW9uJyA/IHByb21pc2UuY2F0Y2goY2JlcnIpIDogcHJvbWlzZTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfVxuXG4gIF93cml0ZVJlY29yZChjYikge1xuICAgIHJldHVybiB0aGlzLnBtLkV4ZWN1dGVNZXRob2QoJ0ludm9rZU1ldGhvZCcsICdXcml0ZVJlY29yZCcsIG51bGwsIHtcbiAgICAgIGFzeW5jOiB0cnVlLFxuICAgICAgLy8gVE9ETzogc2VsZmJ1c3k6IHRydWUsXG4gICAgICBjYixcbiAgICB9KTtcbiAgfVxuXG4gIHdyaXRlUmVjb3JkU3luYygpIHtcbiAgICByZXR1cm4gdGhpcy5wbS5FeGVjdXRlTWV0aG9kKCdJbnZva2VNZXRob2QnLCAnV3JpdGVSZWNvcmQnKTtcbiAgfVxuXG4gIGRlbGV0ZVJlY29yZFN5bmMoc2tpcENvbmZpcm1EaWFsb2cpIHtcbiAgICBpZiAoc2tpcENvbmZpcm1EaWFsb2cpIHtcbiAgICAgIHRoaXMuTjE5Q29uZmlybSA9IFNpZWJlbEFwcC5VdGlscy5Db25maXJtO1xuICAgICAgU2llYmVsQXBwLlV0aWxzLkNvbmZpcm0gPSAoKSA9PiB7fTtcbiAgICB9XG4gICAgLy8gZG8gd2UgbmVlZCB0byB0cnkuLmNhdGNoIGFuZCByZXN0b3JlIHRoZSBmdW5jdGlvbiBpbiBjYXRjaCA/XG4gICAgY29uc3QgcmV0ID0gdGhpcy5wbS5FeGVjdXRlTWV0aG9kKCdJbnZva2VNZXRob2QnLCAnRGVsZXRlUmVjb3JkJyk7XG4gICAgaWYgKHNraXBDb25maXJtRGlhbG9nKSB7XG4gICAgICBTaWViZWxBcHAuVXRpbHMuQ29uZmlybSA9IHRoaXMuTjE5Q29uZmlybTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIHVuZG9SZWNvcmRTeW5jKCkge1xuICAgIHJldHVybiB0aGlzLnBtLkV4ZWN1dGVNZXRob2QoJ0ludm9rZU1ldGhvZCcsICdVbmRvUmVjb3JkJyk7XG4gIH1cblxuICBzZXRDb250cm9sVmFsdWUobmFtZSwgdmFsdWUpIHtcbiAgICAvLyBUT0RPOiBJZiB2YWx1ZSBpcyBudWxsLCBub3RoaW5nIGhhcHBlbnMsIHNob3VsZCB3ZSBjb252ZXJ0IG51bGwgdG8gJyc/XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuX2dldENvbnRyb2wobmFtZSk7XG4gICAgaWYgKCFjb250cm9sKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCBmaW5kIGEgY29udHJvbCBieSBuYW1lICR7bmFtZX0gdG8gc2V0ICR7dmFsdWV9LmApO1xuICAgIH1cbiAgICBjb25zdCB1aVR5cGUgPSBjb250cm9sLkdldFVJVHlwZSgpO1xuICAgIGNvbnN0IGRpc3BsYXlGb3JtYXQgPSBjb250cm9sLkdldERpc3BsYXlGb3JtYXQoKSB8fCB0aGlzLmdldENvbnRyb2xEaXNwbGF5Rm9ybWF0KHVpVHlwZSk7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdmFsdWUgPSB0aGlzLl9nZXRTaWViZWxWYWx1ZSh2YWx1ZSwgdWlUeXBlLCBkaXNwbGF5Rm9ybWF0KTtcbiAgICAvLyBUT0RPOiBzaG91bGQgd2UgdXNlIFNldENlbGxWYWx1ZSBmb3IgbGlzdCBhcHBsZXRzP1xuICAgIGNvbnN0IHJldCA9IHRoaXMuX3NldENvbnRyb2xWYWx1ZUludGVybmFsKGNvbnRyb2wsIHZhbHVlKTtcbiAgICBpZiAoIXJldCkge1xuICAgICAgY29uc29sZS5sb2coYFZhbHVlICR7dmFsdWV9IHdhcyBub3Qgc2V0IGZvciAke2NvbnRyb2wuR2V0TmFtZSgpfWApOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIF9zZXRDb250cm9sVmFsdWVJbnRlcm5hbChjb250cm9sLCB2YWx1ZSkge1xuICAgIHRoaXMucG0uT25Db250cm9sRXZlbnQodGhpcy5jb25zdHMuZ2V0KCdQSFlFVkVOVF9DT05UUk9MX0ZPQ1VTJyksIGNvbnRyb2wpO1xuICAgIHJldHVybiB0aGlzLnBtLk9uQ29udHJvbEV2ZW50KHRoaXMuY29uc3RzLmdldCgnUEhZRVZFTlRfQ09OVFJPTF9CTFVSJyksIGNvbnRyb2wsIHZhbHVlKTtcbiAgfVxuXG4gIF92YWxpZGF0ZVBpY2tDb250cm9sKGNvbnRyb2wsIGlzU3RhdGljKSB7XG4gICAgLy8gUG9zc2libGUgcmVzdWx0czpcbiAgICAvLyBubyBwaWNrXG4gICAgLy8gc3RhdGljIHBpY2tcbiAgICAvLyBkeW5hbWljIHBpY2tcbiAgICAvLyBwaWNrXG4gICAgLy8gbXZnXG4gICAgLy8gP1xuXG4gICAgY29uc3QgaXNTdGF0aWNQaWNrID0gdGhpcy5pc1N0YXRpYyhjb250cm9sKTtcbiAgICBjb25zdCB1aVR5cGUgPSBjb250cm9sLkdldFVJVHlwZSgpO1xuXG4gICAgaWYgKGlzU3RhdGljKSB7IC8vIGNhbGxlZCBnZXRTdGF0aWNMT1ZcbiAgICAgIGlmICghaXNTdGF0aWNQaWNrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICAgIGNvbnNvbGUud2FybihgW04xOV1UaGUgZ2V0U3RhdGljTE9WIGNhbGxlZCBmb3Igbm90IHN0YXRpYyBjb250cm9sIC0gJHt1aVR5cGV9LiBVc2UgZ2V0RHluYW1pY0xPViBvciBwaWNrL212Z2ApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7IC8vIGNhbGxlZCBnZXREeW5hbWljTE9WXG4gICAgICBpZiAoaXNTdGF0aWNQaWNrKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignW04xOV1UaGUgZ2V0RHluYW1pY0xPViBjYWxsZWQgZm9yIHN0YXRpYyBjb250cm9sLicpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmNvbnN0cy5nZXQoJ1NXRV9DVFJMX0NPTUJPQk9YJykgIT09IHVpVHlwZSkgeyAvLyB0aGUgY29udHJvbCBpcyBub3QgXCJKQ29tYm9Cb3hcIlxuICAgICAgICBzd2l0Y2ggKHVpVHlwZSkge1xuICAgICAgICAgIGNhc2UgdGhpcy5jb25zdHMuZ2V0KCdTV0VfQ1RSTF9QSUNLJyk6IC8vIFBpY2tcbiAgICAgICAgICBjYXNlIHRoaXMuY29uc3RzLmdldCgnU1dFX0NUUkxfTVZHJyk6IC8vIE1WR1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgW04xOV1Zb3UgbmVlZCB0byB1c2UgdGhlIHBvcHVwcyBpbnN0ZWFkIG9mIGdldER5bmFtaWNMT1YgLSAke3VpVHlwZX0uYCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgW04xOV1Qcm9iYWJseSBnZXREeW5hbWljTE9WIGlzIG5vdCBnb2luZyB0byB3b3JrIGZvciB0aGlzIGNvbnRyb2wgLSAke3VpVHlwZX0uYCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpc1N0YXRpYyhjb250cm9sKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2xhc3MtbWV0aG9kcy11c2UtdGhpc1xuICAgIHJldHVybiAnMScgPT09IGNvbnRyb2wuSXNTdGF0aWNCb3VuZGVkKCk7XG4gIH1cblxuICBpc0R5bmFtaWMoY29udHJvbCkge1xuICAgIHJldHVybiAhdGhpcy5pc1N0YXRpYyhjb250cm9sKVxuICAgICAgJiYgdGhpcy5jb25zdHMuZ2V0KCdTV0VfQ1RSTF9DT01CT0JPWCcpID09PSBjb250cm9sLkdldFVJVHlwZSgpO1xuICB9XG5cbiAgX2dldENvbnRyb2xEeW5hbWljTE9WKGNvbnRyb2wpIHtcbiAgICB0aGlzLl92YWxpZGF0ZVBpY2tDb250cm9sKGNvbnRyb2wsIGZhbHNlKTtcbiAgICBjb25zdCBjb250cm9sSW5wdXROYW1lID0gY29udHJvbC5HZXRJbnB1dE5hbWUoKTtcbiAgICB0aGlzLmxvdltjb250cm9sSW5wdXROYW1lXSA9IHt9O1xuICAgIGNvbnN0IHBzID0gU2llYmVsQXBwLlNfQXBwLk5ld1Byb3BlcnR5U2V0KCk7XG4gICAgcHMuU2V0UHJvcGVydHkoJ1NXRUZpZWxkJywgY29udHJvbElucHV0TmFtZSk7XG4gICAgcHMuU2V0UHJvcGVydHkoJ1NXRUpJJywgZmFsc2UpO1xuICAgIHRoaXMuX3NldEFjdGl2ZUNvbnRyb2wobnVsbCk7IC8vIHRvIHByZXZlbnQgVXBkYXRlUGlja1xuICAgIHRoaXMucG0uRXhlY3V0ZU1ldGhvZCgnSW52b2tlTWV0aG9kJywgJ0dldFF1aWNrUGlja0luZm8nLCBwcyk7XG4gICAgcmV0dXJuIHRoaXMubG92W2NvbnRyb2xJbnB1dE5hbWVdO1xuICB9XG5cbiAgX2dldENvbnRyb2xTdGF0aWNMT1YoY29udHJvbCkge1xuICAgIHRoaXMuX3ZhbGlkYXRlUGlja0NvbnRyb2woY29udHJvbCwgdHJ1ZSk7XG4gICAgY29uc3QgYXJyID0gTjE5YmFzZUFwcGxldC5HZXRTdGF0aWNMT1YoY29udHJvbC5HZXRSYWRpb0dyb3VwUHJvcFNldCgpLmNoaWxkQXJyYXkpO1xuICAgIGNvbnN0IHJldCA9IGFyci5tYXAoZWwgPT4gZWwuRGlzcGxheU5hbWUpO1xuICAgIHJldHVybiByZXQuc29ydCgpO1xuICB9XG5cbiAgZ2V0TE9WKGNvbnRyb2xOYW1lKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuX2dldENvbnRyb2woY29udHJvbE5hbWUpO1xuICAgIGlmICh0aGlzLmlzU3RhdGljKGNvbnRyb2wpKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZ2V0Q29udHJvbFN0YXRpY0xPVihjb250cm9sKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuaXNEeW5hbWljKGNvbnRyb2wpKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZ2V0Q29udHJvbER5bmFtaWNMT1YoY29udHJvbCk7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihgJHtjb250cm9sTmFtZX0gaXMgbm90IGEgc3RhdGljIG9yIGEgZHluYW1pY2ApO1xuICB9XG5cbiAgZ2V0RHluYW1pY0xPVihjb250cm9sTmFtZSkge1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLl9nZXRDb250cm9sKGNvbnRyb2xOYW1lKTtcbiAgICByZXR1cm4gdGhpcy5fZ2V0Q29udHJvbER5bmFtaWNMT1YoY29udHJvbCk7XG4gIH1cblxuICBnZXRTdGF0aWNMT1YoY29udHJvbE5hbWUpIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5fZ2V0Q29udHJvbChjb250cm9sTmFtZSk7XG4gICAgcmV0dXJuIHRoaXMuX2dldENvbnRyb2xTdGF0aWNMT1YoY29udHJvbCk7XG4gIH1cblxuICBfZ2V0SlNWYWx1ZSh2YWx1ZSwgdWlUeXBlLCBkaXNwbGF5Rm9ybWF0KSB7XG4gICAgaWYgKHRoaXMuY29uc3RzLmdldCgnU1dFX0NUUkxfQ0hFQ0tCT1gnKSA9PT0gdWlUeXBlKSB7XG4gICAgICAvLyBjb252ZXJ0IFkvTi9udWxsIC0+IHRydWUvZmFsc2UgLy8gbnVsbCBjb21lcyBhcyBmYWxzZT9cbiAgICAgIHRoaXMuYm9vbE9iamVjdC5TZXRBc1N0cmluZyh2YWx1ZSk7XG4gICAgICByZXR1cm4gdGhpcy5ib29sT2JqZWN0LkdldFZhbHVlKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmNvbnZlcnREYXRlcyAmJiBkaXNwbGF5Rm9ybWF0ICYmIHRoaXMuX2lzRGF0ZVRpbWVDb250cm9sKHVpVHlwZSkpIHtcbiAgICAgIGlmICh2YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICBsZXQgSVNPID0gJyc7XG4gICAgICBpZiAodGhpcy5pc0xpc3RBcHBsZXQpIHtcbiAgICAgICAgSVNPID0gdGhpcy51dGlscy5Ub0lTT0Zvcm1hdCh2YWx1ZSwgdGhpcy5jb25zdHMuZ2V0KCdTV0VfQ1RSTF9EQVRFX1BJQ0snKSAhPT0gdWlUeXBlLCBkaXNwbGF5Rm9ybWF0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIElTTyA9IHRoaXMudXRpbHMuR2V0SVNPRGF0ZVRpbWUodmFsdWUsIHRydWUpO1xuICAgICAgfVxuICAgICAgaWYgKElTTyA9PT0gJycpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJU08gdmFsdWUgaXMgZW1wdHkgYWZ0ZXIgY29udmVydGluZyAke3ZhbHVlfWApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5ldyBEYXRlKElTTyk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIGdldEN1cnJlbnRSZWNvcmQocmF3KSB7XG4gICAgLy8gVE9ETzogbmVlZCBjb252ZXJzaW9uXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmdldFNlbGVjdGlvbigpO1xuICAgIC8vIFRPRE86IGNoZWNrIGlmIHRoZXJlIGlzIGEgcmVjb3JkXG4gICAgLy8gVE9ETzogbWFrZSBhIGNvcHkgb2YgcmV0dXJuZWQgb2JqZWN0ICh0byBhdm9pZCB0aGUgYWNjaWRlbnRhbCBtb2RpZmljYXRpb24gb2YgdGhlIHJlY29yZHNldCk/XG4gICAgaWYgKHJhdykge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0UmF3UmVjb3JkU2V0KClbaW5kZXhdO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5nZXRSZWNvcmRTZXQoKVtpbmRleF07XG4gIH1cblxuICBjYWxjdWxhdGVDdXJyZW50UmVjb3JkU3RhdGUoKSB7XG4gICAgLy8gVE9ETzogZG8gd2UgbmVlZCB0byBkZWxldGUgcGVuZGluZ1xuICAgIC8vIDAgLSBObyByZWNvcmRzIGRpc3BsYXllZFxuICAgIC8vIDEgLSBSZWNvcmQgaXMgYmVpbmcgY3JlYXRlZFxuICAgIC8vIDIgLSBSZWNvcmQgaXMgYmVpbmcgZWRpdGVkXG4gICAgLy8gMyAtIElzIGluIHF1ZXJ5IG1vZGVcbiAgICAvLyA0IC0gUmVjb3JkIGlzIGRpc3BsYXllZCxcbiAgICAvLyA1IC0gUmVjb3JkIGlzIHJlYWQtb25seVxuXG4gICAgY29uc3QgYmMgPSB0aGlzLnBtLkdldCgnR2V0QnVzQ29tcCcpO1xuXG4gICAgaWYgKHRoaXMucG0uR2V0KCdJc0luUXVlcnlNb2RlJykpIHtcbiAgICAgIC8vIGlmIG5vIHJlY29yZHMgYW5kIHRoZSBlbnRlcmVkIHRoZSBxdWVyeSBtb2RlLFxuICAgICAgLy8gc2VsZWN0aW9uIGlzIC0xLCB0aGVyZWZvcmUgd2UgbmVlZCB0byBjaGVjayBxdWVyeSBtb2RlIGZpcnN0XG4gICAgICByZXR1cm4gMztcbiAgICB9XG4gICAgaWYgKHRoaXMuZ2V0U2VsZWN0aW9uKCkgPCAwKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgaWYgKGJjLklzSW5zZXJ0UGVuZGluZygpKSB7IC8vIHNlZW1zIHRoZSBpbnNlcnRQZW5kaW5nIHByb3BlcnR5IGdpdmVzIG1vcmUgYWNjdXJhdGUgdmFsdWVcbiAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgICBpZiAoYmMuSXNDb21taXRQZW5kaW5nKCkpIHsgLy8gYmMuY29tbWl0UGVuZGluZyBvciB0aGlzLnBtLkdldFN0YXRlVUlNYXAoKS5Db21taXRQZW5kaW5nXG4gICAgICByZXR1cm4gMjtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmNhbkludm9rZU1ldGhvZCgnV3JpdGVSZWNvcmQnKSkge1xuICAgICAgLy8gb3IgdXNlIHRoZSBjYW5VcGRhdGUgcHJvcGVydHkgb2YgdGhlIEJDP1xuICAgICAgcmV0dXJuIDU7XG4gICAgfVxuXG4gICAgcmV0dXJuIDQ7IC8vIHRoaXMgaXMgYSBkZWZhdWx0IGZhbGxiYWNrO1xuICB9XG5cbiAgX2dldE1ldGhvZHMoKSB7XG4gICAgY29uc3QgbWV0aG9kcyA9IHt9O1xuICAgIGNvbnN0IGFwcGxldENvbnRyb2xzID0gdGhpcy5wbS5HZXQoJ0dldENvbnRyb2xzJyk7IC8vIGV2ZW4gZm9yIGxpc3QgYXBwbGV0XG4gICAgY29uc3QgYXJyID0gT2JqZWN0LmVudHJpZXMoYXBwbGV0Q29udHJvbHMpO1xuICAgIGFyci5mb3JFYWNoKChjb250cm9sRW50cnkpID0+IHtcbiAgICAgIGNvbnN0IGNvbnRyb2xNZXRob2QgPSBjb250cm9sRW50cnlbMV0uR2V0TWV0aG9kTmFtZSgpO1xuICAgICAgaWYgKHR5cGVvZiBjb250cm9sTWV0aG9kICE9PSAndW5kZWZpbmVkJyAmJiBjb250cm9sTWV0aG9kICE9PSAnJykge1xuICAgICAgICBtZXRob2RzW2NvbnRyb2xNZXRob2RdID0ge307XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG1ldGhvZHM7XG4gIH1cblxuICBnZXRDb250cm9sRGlzcGxheUZvcm1hdCh1aVR5cGUpIHtcbiAgICBzd2l0Y2ggKHVpVHlwZSkge1xuICAgICAgY2FzZSB0aGlzLmNvbnN0cy5nZXQoJ1NXRV9DVFJMX0RBVEVfVFpfUElDSycpOlxuICAgICAgY2FzZSB0aGlzLmNvbnN0cy5nZXQoJ1NXRV9DVFJMX0RBVEVfVElNRV9QSUNLJyk6XG4gICAgICAgIHJldHVybiB0aGlzLmxvY2FsZURhdGEuZGF0ZVRpbWVGb3JtYXQ7XG4gICAgICBjYXNlIHRoaXMuY29uc3RzLmdldCgnU1dFX0NUUkxfREFURV9QSUNLJyk6XG4gICAgICAgIHJldHVybiB0aGlzLmxvY2FsZURhdGEuZGF0ZUZvcm1hdDtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gIH1cblxuICBnZXRDdXJyZW50UmVjb3JkTW9kZWwoX2NvbnRyb2xzLCBfbWV0aG9kcykge1xuICAgIGlmICghX2NvbnRyb2xzKSB7XG4gICAgICBfY29udHJvbHMgPSB0aGlzLmdldENvbnRyb2xzKCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB9XG4gICAgaWYgKCFfbWV0aG9kcykge1xuICAgICAgX21ldGhvZHMgPSB0aGlzLl9nZXRNZXRob2RzKCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB9XG4gICAgX2NvbnRyb2xzLnN0YXRlID0gdGhpcy5jYWxjdWxhdGVDdXJyZW50UmVjb3JkU3RhdGUoKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIF9jb250cm9scy5pZCA9ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgbGV0IG9iaiA9IHt9O1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5nZXRTZWxlY3Rpb24oKTtcbiAgICBpZiAoaW5kZXggPiAtMSAmJiBfY29udHJvbHMuc3RhdGUgIT09IDMpIHsgLy8gYWRkZWQgX2NvbnRyb2xzLnN0YXRlICE9PSAzOyB3ZSBkb24ndCBuZWVkIGlkIGluIHF1ZXJ5IG1vZGVcbiAgICAgIG9iaiA9IHRoaXMuZ2V0UmVjb3JkU2V0KClbaW5kZXhdO1xuICAgICAgX2NvbnRyb2xzLmlkID0gdGhpcy5nZXRSYXdSZWNvcmRTZXQoKVtpbmRleF0uSWQ7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB9XG4gICAgY29uc3QgYXBwbGV0Q29udHJvbHMgPSB0aGlzLl9yZXR1cm5Db250cm9scygpO1xuICAgIC8vIHBvcHVsYXRlIGNvbnRyb2xzXG4gICAgbGV0IGFyciA9IE9iamVjdC5rZXlzKF9jb250cm9scyk7XG4gICAgYXJyLmZvckVhY2goKGNvbnRyb2xOYW1lKSA9PiB7XG4gICAgICBjb25zdCBjb250cm9sID0gYXBwbGV0Q29udHJvbHNbY29udHJvbE5hbWVdO1xuICAgICAgaWYgKHR5cGVvZiBjb250cm9sID09PSAndW5kZWZpbmVkJykgeyAvLyBqdXN0IGlmIHNvbWVib2R5IHNlbmRzIGluY29ycmVjdCBuYW1lIG9mIHRoZSBjb250cm9sXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGZpZWxkTmFtZSA9IGNvbnRyb2wuR2V0RmllbGROYW1lKCk7XG4gICAgICBjb25zdCB1aVR5cGUgPSBjb250cm9sLkdldFVJVHlwZSgpO1xuICAgICAgY29uc3QgZGlzcGxheUZvcm1hdCA9IGNvbnRyb2wuR2V0RGlzcGxheUZvcm1hdCgpIHx8IHRoaXMuZ2V0Q29udHJvbERpc3BsYXlGb3JtYXQodWlUeXBlKTtcbiAgICAgIGlmIChfY29udHJvbHMuaWQpIHtcbiAgICAgICAgX2NvbnRyb2xzW2NvbnRyb2xOYW1lXSA9IHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICAgIHZhbHVlOiB0aGlzLl9nZXRKU1ZhbHVlKG9ialtmaWVsZE5hbWVdLCBjb250cm9sLkdldFVJVHlwZSgpLCBkaXNwbGF5Rm9ybWF0KSxcbiAgICAgICAgICB1aVR5cGUsXG4gICAgICAgICAgcmVhZG9ubHk6ICF0aGlzLnBtLkV4ZWN1dGVNZXRob2QoJ0NhblVwZGF0ZScsIGNvbnRyb2xOYW1lKSxcbiAgICAgICAgICBpc0xpbms6IHRoaXMucG0uRXhlY3V0ZU1ldGhvZCgnQ2FuTmF2aWdhdGUnLCBjb250cm9sTmFtZSksXG4gICAgICAgICAgbGFiZWw6IGNvbnRyb2wuR2V0RGlzcGxheU5hbWUoKSxcbiAgICAgICAgICBpc1Bvc3RDaGFuZ2VzOiBjb250cm9sLklzUG9zdENoYW5nZXMoKSxcbiAgICAgICAgICByZXF1aXJlZDogdGhpcy5faXNSZXF1aXJlZChjb250cm9sLkdldElucHV0TmFtZSgpKSxcbiAgICAgICAgICBtYXhTaXplOiBjb250cm9sLkdldE1heFNpemUoKSxcbiAgICAgICAgICBmaWVsZE5hbWUsXG4gICAgICAgICAgZGlzcGxheUZvcm1hdCxcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7IC8vIG5vIHJlY29yZCBkaXNwbGF5ZWRcbiAgICAgICAgX2NvbnRyb2xzW2NvbnRyb2xOYW1lXSA9IHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICAgIHZhbHVlOiAnJyxcbiAgICAgICAgICB1aVR5cGUsXG4gICAgICAgICAgcmVhZG9ubHk6IF9jb250cm9scy5zdGF0ZSAhPT0gMywgLy8gc2hvdWxkIGJlIGVkaXR0YWJsZSBpbiBxdWVyeSBtb2RlXG4gICAgICAgICAgaXNMaW5rOiBmYWxzZSxcbiAgICAgICAgICBsYWJlbDogY29udHJvbC5HZXREaXNwbGF5TmFtZSgpLFxuICAgICAgICAgIGlzUG9zdENoYW5nZXM6IGNvbnRyb2wuSXNQb3N0Q2hhbmdlcygpLFxuICAgICAgICAgIHJlcXVpcmVkOiB0aGlzLl9pc1JlcXVpcmVkKGNvbnRyb2wuR2V0SW5wdXROYW1lKCkpLFxuICAgICAgICAgIG1heFNpemU6IGNvbnRyb2wuR2V0TWF4U2l6ZSgpLFxuICAgICAgICAgIGZpZWxkTmFtZSxcbiAgICAgICAgICBkaXNwbGF5Rm9ybWF0LFxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0pO1xuICAgIC8vIHBvcHVsYXRlIG1ldGhvZHNcbiAgICBpZiAoX21ldGhvZHMpIHtcbiAgICAgIGFyciA9IE9iamVjdC5rZXlzKF9tZXRob2RzKTtcbiAgICAgIC8vIFRPRE86IGNvdWxkIGJlIGFuIGV4Y2VwdGlvbiBpZiBtZXRob2QgbmFtZSBpcyBpbmNvcnJlY3RcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgYXJyLmZvckVhY2goKG1ldGhvZE5hbWUpID0+IHsgX21ldGhvZHNbbWV0aG9kTmFtZV0gPSB0aGlzLmNhbkludm9rZU1ldGhvZChtZXRob2ROYW1lKTsgfSk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBjb250cm9sczogX2NvbnRyb2xzLFxuICAgICAgbWV0aG9kczogX21ldGhvZHMsXG4gICAgfTtcbiAgfVxuXG4gIF9maW5kQ29udHJvbFRvRW50ZXJTZWFyY2hFeHByKCkge1xuICAgIGNvbnN0IGFwcGxldENvbnRyb2xzID0gdGhpcy5fcmV0dXJuQ29udHJvbHMoKTtcbiAgICBjb25zdCBhcnIgPSBPYmplY3QudmFsdWVzKGFwcGxldENvbnRyb2xzKTtcbiAgICBjb25zdCBmb3VuZCA9IGFyci5maW5kKChjb250cm9sKSA9PiB7XG4gICAgICBjb25zdCBjb250cm9sVWlUeXBlID0gY29udHJvbC5HZXRVSVR5cGUoKTtcbiAgICAgIGlmICghdGhpcy5faXNTa2lwQ29udHJvbChjb250cm9sVWlUeXBlKSkge1xuICAgICAgICAvLyBza2lwcGluZyBhbHNvIEpDaGVja2JveFxuICAgICAgICByZXR1cm4gY29udHJvbFVpVHlwZSAhPT0gdGhpcy5jb25zdHMuZ2V0KCdTV0VfQ1RSTF9DSEVDS0JPWCcpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuICAgIHJldHVybiBmb3VuZDtcbiAgfVxuXG4gIF9uZXdRdWVyeSgpIHtcbiAgICByZXR1cm4gdGhpcy5wbS5FeGVjdXRlTWV0aG9kKCdJbnZva2VNZXRob2QnLCAnTmV3UXVlcnknKTtcbiAgfVxuXG4gIHF1ZXJ5QnlTZWFyY2hFeHByU3luYyhleHByKSB7XG4gICAgdGhpcy5fbmV3UXVlcnkoKTsgLy8gPyBjaGVjayBvciBvcHRpb25hbGx5IHNraXBcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5fZmluZENvbnRyb2xUb0VudGVyU2VhcmNoRXhwcigpO1xuICAgIHRoaXMuX3NldENvbnRyb2xWYWx1ZUludGVybmFsKGNvbnRyb2wsIGV4cHIpO1xuICAgIHRoaXMucG0uRXhlY3V0ZU1ldGhvZCgnSW52b2tlTWV0aG9kJywgJ0V4ZWN1dGVRdWVyeScpO1xuICAgIHJldHVybiB0aGlzLmdldFJlY29yZFNldCgpLmxlbmd0aDtcbiAgfVxuXG4gIHF1ZXJ5QnlJZFN5bmMocm93SWQpIHtcbiAgICBsZXQgZXhwcjtcbiAgICBpZiAoQXJyYXkgPT09IHJvd0lkLmNvbnN0cnVjdG9yKSB7XG4gICAgICBleHByID0gcm93SWQubWFwKGVsID0+IGBJZD1cIiR7ZWx9XCJgKS5qb2luKCcgT1IgJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV4cHIgPSBgSWQ9XCIke3Jvd0lkfVwiYDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucXVlcnlCeVNlYXJjaEV4cHJTeW5jKGV4cHIpO1xuICB9XG5cbiAgcXVlcnlCeUlkKHJvd0lkLCBjYikge1xuICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHRoaXMuX3F1ZXJ5QnlJZChyb3dJZCwgcmVzb2x2ZSkpO1xuICAgIGNvbnN0IHJldCA9IHByb21pc2UudGhlbigoKSA9PiB0aGlzLmdldFJlY29yZFNldCgpLmxlbmd0aCk7XG4gICAgcmV0dXJuIHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJyA/IHJldC50aGVuKGNiKSA6IHJldDtcbiAgfVxuXG4gIF9xdWVyeUJ5SWQocm93SWQsIGNiKSB7XG4gICAgdGhpcy5fbmV3UXVlcnkoKTsgLy8gPyBjaGVjayBvciBvcHRpb25hbGx5IHNraXBcblxuICAgIGNvbnN0IGFpID0ge1xuICAgICAgc2NvcGU6IHRoaXMsXG4gICAgICBhc3luYzogdHJ1ZSxcbiAgICAgIHNlbGZidXN5OiB0cnVlLFxuICAgIH07XG4gICAgaWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYWkuY2IgPSBjYjtcbiAgICB9XG5cbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5fZmluZENvbnRyb2xUb0VudGVyU2VhcmNoRXhwcigpO1xuICAgIHRoaXMuX3NldENvbnRyb2xWYWx1ZUludGVybmFsKGNvbnRyb2wsIGBJZD1cIiR7cm93SWR9XCJgKTtcbiAgICByZXR1cm4gdGhpcy5wbS5FeGVjdXRlTWV0aG9kKCdJbnZva2VNZXRob2QnLCAnRXhlY3V0ZVF1ZXJ5JywgbnVsbCwgYWkpO1xuICB9XG5cbiAgcXVlcnkocGFyYW1zLCBjYikge1xuICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHRoaXMuX3F1ZXJ5KHBhcmFtcywgcmVzb2x2ZSkpO1xuICAgIGNvbnN0IHJldCA9IHByb21pc2UudGhlbigoKSA9PiB0aGlzLmdldFJlY29yZFNldCgpLmxlbmd0aCk7XG4gICAgcmV0dXJuIHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJyA/IHJldC50aGVuKGNiKSA6IHJldDtcbiAgfVxuXG4gIF9xdWVyeShwYXJhbXMsIGNiKSB7XG4gICAgLy8gVE9ETzogY2hlY2sgaWYgaXQgaXMgYWxyZWFkeSBpbiBxdWVyeSBtb2RlIHRvIGF2b2lkIGNhbGxpbmcgdGhlIG5ldyBxdWVyeSBhZ2FpblxuICAgIC8vIG9yIGFjY2VwdCB0aGUgaW5wdXQgcGFyYW1ldGVyIHRvIHNraXAgY2FsbGluZyB0aGUgbmV3IHF1ZXJ5P1xuICAgIC8vIG9yIG1heWJlIGJldHRlciB0byBjYW5jZWwgdGhlIGV4aXN0aW5nIHF1ZXJ5P1xuICAgIHRoaXMuX25ld1F1ZXJ5KCk7XG5cbiAgICBjb25zdCBhaSA9IHtcbiAgICAgIHNjb3BlOiB0aGlzLFxuICAgICAgYXN5bmM6IHRydWUsXG4gICAgICBzZWxmYnVzeTogdHJ1ZSxcbiAgICB9O1xuICAgIGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGFpLmNiID0gY2I7XG4gICAgfVxuXG4gICAgY29uc3QgX2NvbnRyb2xzID0gdGhpcy5fcmV0dXJuQ29udHJvbHMoKTtcbiAgICBjb25zdCBhcnIgPSBPYmplY3Qua2V5cyhwYXJhbXMpO1xuICAgIGFyci5mb3JFYWNoKChjb250cm9sTmFtZSkgPT4ge1xuICAgICAgY29uc3QgY29udHJvbCA9IF9jb250cm9sc1tjb250cm9sTmFtZV07XG4gICAgICBpZiAoY29udHJvbCkge1xuICAgICAgICB0aGlzLl9zZXRDb250cm9sVmFsdWVJbnRlcm5hbChjb250cm9sLCB0aGlzLl9nZXRTaWViZWxWYWx1ZShwYXJhbXNbY29udHJvbE5hbWVdLCBjb250cm9sLkdldFVJVHlwZSgpKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBUaGUgY29udHJvbCBcIiR7Y29udHJvbE5hbWV9XCIgaXMgbm90IGZvdW5kIWApOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzLnBtLkV4ZWN1dGVNZXRob2QoJ0ludm9rZU1ldGhvZCcsICdFeGVjdXRlUXVlcnknLCBudWxsLCBhaSk7XG4gIH1cblxuICBzdGF0aWMgUmVxdWVyeShuYW1lKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IFNpZWJlbEFwcC5TX0FwcC5HZXRTZXJ2aWNlKCdOMTkgQlMnKTtcbiAgICBpZiAoc2VydmljZSkge1xuICAgICAgY29uc3QgaW5Qcm9wU2V0ID0gU2llYmVsQXBwLlNfQXBwLk5ld1Byb3BlcnR5U2V0KCk7XG4gICAgICBpblByb3BTZXQuU2V0UHJvcGVydHkoJ25hbWUnLCBuYW1lKTtcbiAgICAgIHNlcnZpY2UuSW52b2tlTWV0aG9kKCdSZXF1ZXJ5JywgaW5Qcm9wU2V0LCB7fSk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIFJlZnJlc2gobmFtZSkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSBTaWViZWxBcHAuU19BcHAuR2V0U2VydmljZSgnTjE5IEJTJyk7XG4gICAgaWYgKHNlcnZpY2UpIHtcbiAgICAgIGNvbnN0IGluUHJvcFNldCA9IFNpZWJlbEFwcC5TX0FwcC5OZXdQcm9wZXJ0eVNldCgpO1xuICAgICAgaW5Qcm9wU2V0LlNldFByb3BlcnR5KCduYW1lJywgbmFtZSk7XG4gICAgICBzZXJ2aWNlLkludm9rZU1ldGhvZCgnUmVmcmVzaCcsIGluUHJvcFNldCwge30pO1xuICAgIH1cbiAgfVxuXG4gIGdldE1WRihpZHMsIGZpZWxkcywgdXNlQWN0aXZlQk8pIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4gdGhpcy5fZ2V0TVZGKGlkcywgZmllbGRzLCB1c2VBY3RpdmVCTywgcmVzb2x2ZSwgcmVqZWN0KSk7XG4gIH1cblxuICBfZ2V0RmllbGROYW1lRm9yQ29udHJvbChjb250cm9sTmFtZSkge1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLl9nZXRDb250cm9sKGNvbnRyb2xOYW1lKTtcbiAgICAvLyBpZiBub3QgZm91bmQsIHRoZSBpbnB1dCB2YWx1ZSBpcyByZXR1cm5lZFxuICAgIGlmIChjb250cm9sKSB7XG4gICAgICByZXR1cm4gY29udHJvbC5HZXRGaWVsZE5hbWUoKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbnRyb2xOYW1lOyAvLyBmYWxsYmFjayAtIGp1c3QgaW4gY2FzZSB3ZSBnb3QgdGhlIGZpZWxkIG5hbWVcbiAgfVxuXG4gIF9nZXRNVkYoaWRzLCBmaWVsZHMsIHVzZUFjdGl2ZUJPLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICBjb25zdCBhcnIgPSBPYmplY3QuZW50cmllcyhmaWVsZHMpO1xuICAgIGNvbnN0IHBzSW5wdXRzID0gU2llYmVsQXBwLlNfQXBwLk5ld1Byb3BlcnR5U2V0KCk7XG4gICAgcHNJbnB1dHMuU2V0UHJvcGVydHkoJ0JPJywgU2llYmVsQXBwLlNfQXBwLkdldEFjdGl2ZUJ1c09iaigpLkdldE5hbWUoKSk7XG4gICAgcHNJbnB1dHMuU2V0UHJvcGVydHkoJ0JDJywgdGhpcy5wbS5HZXQoJ0dldEJ1c0NvbXAnKS5HZXROYW1lKCkpO1xuICAgIHBzSW5wdXRzLlNldFByb3BlcnR5KCdVc2VBY3RpdmVCTycsIHVzZUFjdGl2ZUJPID8gJ1knIDogJ04nKTtcbiAgICBwc0lucHV0cy5TZXRQcm9wZXJ0eSgnSUQnLCBpZHMuam9pbignLCcpKTtcbiAgICBhcnIuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgIGNvbnN0IHBzID0gU2llYmVsQXBwLlNfQXBwLk5ld1Byb3BlcnR5U2V0KCk7XG4gICAgICBwcy5TZXRUeXBlKHRoaXMuX2dldEZpZWxkTmFtZUZvckNvbnRyb2woZWxbMF0pKTtcbiAgICAgIHBzLlNldFByb3BlcnR5KCdGaWVsZHMnLCBlbFsxXS5qb2luKCcsJykpO1xuICAgICAgcHNJbnB1dHMuQWRkQ2hpbGQocHMuQ2xvbmUoKSk7XG4gICAgfSk7XG4gICAgY29uc3QgYnMgPSBTaWViZWxBcHAuU19BcHAuR2V0U2VydmljZSgnTjE5IEJTJyk7XG4gICAgY29uc3QgYWkgPSB7XG4gICAgICBhc3luYzogdHJ1ZSxcbiAgICAgIHNlbGZidXN5OiB0cnVlLFxuICAgICAgc2NvcGU6IHRoaXMsXG4gICAgICBlcnJjYjogKCkgPT4ge1xuICAgICAgICByZWplY3QoKTtcbiAgICAgIH0sXG4gICAgICBjYjogKG1ldGhvZE5hbWUsIElucHV0cywgcHNPdXRwdXRzKSA9PiB7XG4gICAgICAgIGNvbnN0IHJldCA9IHt9O1xuICAgICAgICBjb25zdCB7IGNoaWxkQXJyYXkgfSA9IHBzT3V0cHV0cy5HZXRDaGlsZEJ5VHlwZSgnUmVzdWx0U2V0JykgfHwge307IC8vIHRvIGJlIHNhZmUgd2hlbiBubyByZXN1bHRzXG4gICAgICAgIChjaGlsZEFycmF5IHx8IFtdKS5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgICAgIHJldFtjaGlsZC5HZXRUeXBlKCldID0ge307XG4gICAgICAgICAgY2hpbGQuY2hpbGRBcnJheS5mb3JFYWNoKChncmFuZENoaWxkKSA9PiB7XG4gICAgICAgICAgICByZXRbY2hpbGQuR2V0VHlwZSgpXVtncmFuZENoaWxkLkdldFR5cGUoKV0gPSBncmFuZENoaWxkLmNoaWxkQXJyYXkubWFwKChyZWMpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgcHJpbWFyeSA9IHJlYy5wcm9wQXJyYXlbJ1NTQSBQcmltYXJ5IEZpZWxkJ107XG4gICAgICAgICAgICAgIHRoaXMuYm9vbE9iamVjdC5TZXRBc1N0cmluZyhwcmltYXJ5KTtcbiAgICAgICAgICAgICAgcmVjLnByb3BBcnJheVsnU1NBIFByaW1hcnkgRmllbGQnXSA9IHRoaXMuYm9vbE9iamVjdC5HZXRWYWx1ZSgpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCByZWMucHJvcEFycmF5KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmVzb2x2ZShyZXQpO1xuICAgICAgfSxcbiAgICB9O1xuICAgIHJldHVybiBicy5JbnZva2VNZXRob2QoJ1JldHVybk1WR0ZpZWxkcycsIHBzSW5wdXRzLCBhaSk7XG4gIH1cblxuICBzYXZlUHJlZihuYW1lLCB2YWx1ZSkge1xuICAgIC8vIHZhbHVlIGlzIGEgc3RyaW5nXG4gICAgLy8gdmFsdWUgaXMgYm91bmQgdG8gYXBwbGV0IGFuZCB2aWV3XG4gICAgY29uc3QgcHNJbnB1dCA9IFNpZWJlbEFwcC5TX0FwcC5OZXdQcm9wZXJ0eVNldCgpO1xuICAgIHBzSW5wdXQuU2V0UHJvcGVydHkoJ0tleScsIG5hbWUpO1xuICAgIHBzSW5wdXQuU2V0UHJvcGVydHkobmFtZSwgdmFsdWUpO1xuICAgIHRoaXMucG0uT25Db250cm9sRXZlbnQoXG4gICAgICB0aGlzLmNvbnN0cy5nZXQoJ1BIWUVWRU5UX0lOVk9LRV9DT05UUk9MJyksXG4gICAgICB0aGlzLnBtLkdldCh0aGlzLmNvbnN0cy5nZXQoJ1NXRV9NVEhEX1VQREFURV9VU0VSX1BSRUYnKSksXG4gICAgICBwc0lucHV0LFxuICAgICk7XG4gICAgcmV0dXJuIHRoaXMucG0uU2V0UHJvcGVydHkobmFtZSwgdmFsdWUpO1xuICB9XG5cbiAgcmVhZFByZWYobmFtZSkge1xuICAgIHJldHVybiB0aGlzLnBtLkdldChuYW1lKTtcbiAgfVxuXG4gIF9yZXRyaWV2ZURhdGEoYW1vdW50KSB7IC8vIHRlbXAgbWV0aG9kIC0gd2lsbCBiZSByZW1vdmVkXG4gICAgY29uc3QgZGF0YSA9IG5ldyBNYXAoKTtcblxuICAgIHdoaWxlIChkYXRhLnNpemUgPCBhbW91bnQpIHtcbiAgICAgIGNvbnN0IGFyciA9IHRoaXMuZ2V0UmF3UmVjb3JkU2V0KCk7XG5cbiAgICAgIC8vIGF2b2lkIHRoZSBkdXBsaWNhdGVzXG4gICAgICBhcnIuZm9yRWFjaChlbCA9PiBkYXRhLnNldChlbC5JZCwgZWwpKTtcblxuICAgICAgLy8gd2UgYXJlIHVzaW5nIGNhbkludm9rZU1ldGhvZCwgYXMgaW4gMTYuMCBuZXh0UmVjb3JkU2V0IGFsd2F5cyByZXR1cm5zIHVuZGVmaW5lZFxuICAgICAgaWYgKCF0aGlzLmNhbkludm9rZU1ldGhvZCgnR290b05leHRTZXQnKSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgdGhpcy5uZXh0UmVjb3JkU2V0KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGE6IFsuLi5kYXRhLnZhbHVlcygpXSxcbiAgICAgIGhhc05leHQ6IHRoaXMuY2FuSW52b2tlTWV0aG9kKCdHb3RvTmV4dFNldCcpLFxuICAgIH07XG4gIH1cblxuICBfc2V0RmllbGRWYWx1ZShuYW1lLCB2YWx1ZSkge1xuICAgIGNvbnNvbGUud2FybignW04xOV1fc2V0RmllbGRWYWx1ZSB3aWxsIGJlIHJlbW92ZWQgaW4gdGhlIGZ1dHVyZSEnKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgdGhpcy5hcHBsZXQuU2V0Q29udHJvbFZhbHVlQnlOYW1lKG5hbWUsIHZhbHVlKTtcbiAgICByZXR1cm4gdGhpcy5wbS5FeGVjdXRlTWV0aG9kKCdJbnZva2VNZXRob2QnLCAnV3JpdGVSZWNvcmQnKTtcbiAgfVxuXG4gIC8vIHRoaXMgaXMgYWxzbyBjYWxsZWQgZnJvbSB0aGUgdGhlIGRlbW8gd2hlcmUgU2llYmVsIGFuZCBjdXN0b20gcmVuZGVyZWQgYXBwbGV0IGNvZXhpc3RcbiAgX2dldEZpZWxkVG9Db250cm9sTWFwKF9jb250cm9scykge1xuICAgIGNvbnN0IHJldCA9IHt9O1xuICAgIGNvbnN0IGFwcGxldENvbnRyb2xzID0gdGhpcy5fcmV0dXJuQ29udHJvbHMoKTtcbiAgICBjb25zdCBhcnIgPSBPYmplY3Qua2V5cyhfY29udHJvbHMgfHwgYXBwbGV0Q29udHJvbHMpO1xuICAgIGFyci5mb3JFYWNoKChjb250cm9sTmFtZSkgPT4ge1xuICAgICAgY29uc3QgY29udHJvbCA9IGFwcGxldENvbnRyb2xzW2NvbnRyb2xOYW1lXTtcbiAgICAgIGNvbnN0IGZpZWxkTmFtZSA9IGNvbnRyb2wuR2V0RmllbGROYW1lKCk7XG4gICAgICBpZiAoZmllbGROYW1lKSB7XG4gICAgICAgIGNvbnN0IHVpVHlwZSA9IGNvbnRyb2wuR2V0VUlUeXBlKCk7XG4gICAgICAgIHJldFtmaWVsZE5hbWVdID0ge1xuICAgICAgICAgIG5hbWU6IGNvbnRyb2xOYW1lLFxuICAgICAgICAgIGlzUG9zdENoYW5nZXM6IGNvbnRyb2wuSXNQb3N0Q2hhbmdlcygpLFxuICAgICAgICAgIHVpVHlwZSxcbiAgICAgICAgICBkaXNwbGF5Rm9ybWF0OiBjb250cm9sLkdldERpc3BsYXlGb3JtYXQoKSB8fCB0aGlzLmdldENvbnRyb2xEaXNwbGF5Rm9ybWF0KHVpVHlwZSksXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIGdldENvbnRyb2xzUmVjb3JkU2V0KCkge1xuICAgIC8vIHVzZWQgc2xpY2UgdG8gYXZvaWQgbW9kaWZpY2F0aW9uIG9mIHRoZSByZWNvcmQgc2V0XG4gICAgY29uc3QgcmV0ID0gdGhpcy5nZXRSZWNvcmRTZXQoKS5zbGljZSgpO1xuICAgIGNvbnN0IHJhd1JlY29yZFNldCA9IHRoaXMuZ2V0UmF3UmVjb3JkU2V0KCk7IC8vIGp1c3QgZmFsbGJhY2sgaWYgcmVjb3JkIHNldCBkb2VzIG5vdCBoYXZlIElkXG5cbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gcmV0Lmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICBjb25zdCBpZCA9IHJldFtpXS5JZDtcbiAgICAgIHJldFtpXSA9IE9iamVjdC5rZXlzKHJldFtpXSkuZmlsdGVyKGVsID0+IHRoaXMuZmllbGRUb0NvbnRyb2xNYXBbZWxdKS5yZWR1Y2UoKGFjYywgZWwpID0+ICh7XG4gICAgICAgIC4uLmFjYyxcbiAgICAgICAgLi4ue1xuICAgICAgICAgIFt0aGlzLmZpZWxkVG9Db250cm9sTWFwW2VsXS5uYW1lXTogdGhpcy5fZ2V0SlNWYWx1ZShyZXRbaV1bZWxdLFxuICAgICAgICAgICAgdGhpcy5maWVsZFRvQ29udHJvbE1hcFtlbF0udWlUeXBlLFxuICAgICAgICAgICAgdGhpcy5maWVsZFRvQ29udHJvbE1hcFtlbF0uZGlzcGxheUZvcm1hdCksXG4gICAgICAgIH0sXG4gICAgICB9KSwge30pO1xuICAgICAgaWYgKGlkKSB7XG4gICAgICAgIHJldFtpXS5JZCA9IGlkO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0W2ldLklkID0gcmF3UmVjb3JkU2V0W2ldLklkO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICBzb3J0KGNvbnRyb2xOYW1lLCBpc0FzY2VuZGluZykge1xuICAgIC8vIFRPRE86IGNoZWNrIGlmIHNvcnRhYmxlPyBlLmcuIG5vdCBpbiBxdWVyeSBtb2RlXG4gICAgLy8gVE9ETzogY2hlY2sgaWYgd2UgY2FuIHNvcnQgYnkgdGhpcyBjb250cm9sPyBjb250cm9sIGhhcyBJc1NvcnRhYmxlIGZ1bmMsIGJ1dCB3ZSBkb24ndCByZXR1cm4gdGhlIG91dHB1dCBvZiBpdFxuICAgIGlmICh0aGlzLmlzTGlzdEFwcGxldCkge1xuICAgICAgY29uc3Qgc29ydE9yZGVyID0gaXNBc2NlbmRpbmcgPyB0aGlzLmNvbnN0cy5nZXQoJ1NPUlRfQVNDRU5ESU5HJykgOiB0aGlzLmNvbnN0cy5nZXQoJ1NPUlRfREVTQ0VORElORycpO1xuICAgICAgdGhpcy5hcHBsZXQuT25DbGlja1NvcnQoY29udHJvbE5hbWUsIHNvcnRPcmRlcik7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBOMTlub3RpZmljYXRpb25zIHtcbiAgY29uc3RydWN0b3IocG0sIGNvbnN0cywgYmNJZCwgZmllbGRUb0NvbnRyb2xNYXApIHtcbiAgICBsZXQgcmVjZWl2ZWROb3RpZmljYXRpb25zID0gW107XG4gICAgdGhpcy50b2tlbiA9IDA7XG4gICAgdGhpcy5zdWJzY3JpYmVycyA9IFtdO1xuXG4gICAgcG0uQXR0YWNoTm90aWZpY2F0aW9uSGFuZGxlcihjb25zdHMuZ2V0KCdTV0VfUFJPUF9CQ19OT1RJX0JFR0lOJyksIChwcm9wU2V0KSA9PiB7XG4gICAgICBpZiAoYmNJZCA9PT0gcHJvcFNldC5HZXRQcm9wZXJ0eSgnYmMnKSkge1xuICAgICAgICByZWNlaXZlZE5vdGlmaWNhdGlvbnMgPSBbXTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHBtLkF0dGFjaE5vdGlmaWNhdGlvbkhhbmRsZXIoY29uc3RzLmdldCgnU1dFX1BST1BfQkNfTk9USV9ORVdfQUNUSVZFX1JPVycpLCAocHJvcFNldCkgPT4ge1xuICAgICAgaWYgKGJjSWQgPT09IHByb3BTZXQuR2V0UHJvcGVydHkoJ2JjJykpIHtcbiAgICAgICAgcmVjZWl2ZWROb3RpZmljYXRpb25zLnB1c2goJ1NXRV9QUk9QX0JDX05PVElfTkVXX0FDVElWRV9ST1cnKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHBtLkF0dGFjaE5vdGlmaWNhdGlvbkhhbmRsZXIoY29uc3RzLmdldCgnU1dFX1BST1BfQkNfTk9USV9TVEFURV9DSEFOR0VEJyksIChwcm9wU2V0KSA9PiB7XG4gICAgICBjb25zdCBzdGF0ZXMgPSBbJ2NwJywgJ24nXTtcbiAgICAgIGlmIChiY0lkID09PSBwcm9wU2V0LkdldFByb3BlcnR5KCdiYycpKSB7XG4gICAgICAgIGlmICghc3RhdGVzLmluY2x1ZGVzKHByb3BTZXQuR2V0UHJvcGVydHkoJ3N0YXRlJykpKSB7XG4gICAgICAgICAgcmVjZWl2ZWROb3RpZmljYXRpb25zLnB1c2goJ1NXRV9QUk9QX0JDX05PVElfU1RBVEVfQ0hBTkdFRCcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBvciBTV0VfUFJPUF9CQ19OT1RJX05FV19GSUVMRF9EQVRBP1xuICAgIHBtLkF0dGFjaE5vdGlmaWNhdGlvbkhhbmRsZXIoY29uc3RzLmdldCgnU1dFX1BST1BfQkNfTk9USV9ORVdfREFUQV9XUycpLCAocHJvcFNldCkgPT4ge1xuICAgICAgaWYgKGJjSWQgPT09IHByb3BTZXQuR2V0UHJvcGVydHkoJ2JjJykpIHtcbiAgICAgICAgY29uc3QgZmllbGROYW1lID0gcHJvcFNldC5HZXRQcm9wZXJ0eShjb25zdHMuZ2V0KCdTV0VfUFJPUF9OT1RJX0ZJRUxEJykpO1xuICAgICAgICBjb25zdCBjb250cm9sID0gZmllbGRUb0NvbnRyb2xNYXBbZmllbGROYW1lXTtcbiAgICAgICAgaWYgKGNvbnRyb2wgJiYgY29udHJvbC51aVR5cGUgIT09IGNvbnN0cy5nZXQoJ1NXRV9DVFJMX01WRycpKSB7XG4gICAgICAgICAgcmVjZWl2ZWROb3RpZmljYXRpb25zLnB1c2goJ1NXRV9QUk9QX0JDX05PVElfTkVXX0RBVEFfV1MnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcG0uQXR0YWNoTm90aWZpY2F0aW9uSGFuZGxlcihjb25zdHMuZ2V0KCdTV0VfUFJPUF9CQ19OT1RJX0RFTEVURV9SRUNPUkQnKSwgKHByb3BTZXQpID0+IHtcbiAgICAgIGlmIChiY0lkID09PSBwcm9wU2V0LkdldFByb3BlcnR5KCdiYycpKSB7XG4gICAgICAgIHJlY2VpdmVkTm90aWZpY2F0aW9ucy5wdXNoKCdTV0VfUFJPUF9CQ19OT1RJX0RFTEVURV9SRUNPUkQnKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHBtLkF0dGFjaE5vdGlmaWNhdGlvbkhhbmRsZXIoY29uc3RzLmdldCgnU1dFX1BST1BfQkNfTk9USV9ORVdfUkVDT1JEJyksIChwcm9wU2V0KSA9PiB7XG4gICAgICBpZiAoYmNJZCA9PT0gcHJvcFNldC5HZXRQcm9wZXJ0eSgnYmMnKSkge1xuICAgICAgICByZWNlaXZlZE5vdGlmaWNhdGlvbnMucHVzaCgnU1dFX1BST1BfQkNfTk9USV9ORVdfUkVDT1JEJyk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBwbS5BdHRhY2hOb3RpZmljYXRpb25IYW5kbGVyKGNvbnN0cy5nZXQoJ1NXRV9QUk9QX0JDX05PVElfRU5EJyksIChwcm9wU2V0KSA9PiB7XG4gICAgICBpZiAoYmNJZCA9PT0gcHJvcFNldC5HZXRQcm9wZXJ0eSgnYmMnKSkge1xuICAgICAgICBpZiAocmVjZWl2ZWROb3RpZmljYXRpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAvLyB3ZSBhc3N1bWUgdGhhdCB0aGUgZnVuY3Rpb24gZG9lcyBub3QgdGhyb3cgYW4gZXJyb3IsIHNvIG5vIGVycm9yIGhhbmRsaW5nIGhlcmVcbiAgICAgICAgICB0aGlzLnN1YnNjcmliZXJzLmZvckVhY2goZWwgPT4gZWwuZnVuYygpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc3Vic2NyaWJlKGZ1bmMpIHtcbiAgICBpZiAodHlwZW9mIGZ1bmMgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignZnVuYyBpcyBub3QgYSBmdW5jdGlvbicpO1xuICAgIH1cbiAgICB0aGlzLnRva2VuICs9IDE7XG4gICAgdGhpcy5zdWJzY3JpYmVycy5wdXNoKHsgdG9rZW46IHRoaXMudG9rZW4sIGZ1bmMgfSk7XG4gICAgcmV0dXJuIHRoaXMudG9rZW47XG4gIH1cblxuICB1bnN1YnNjcmliZShzdWJUb2tlbikge1xuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB0aGlzLnN1YnNjcmliZXJzLmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICBpZiAoc3ViVG9rZW4gPT09IHRoaXMuc3Vic2NyaWJlcnNbaV0udG9rZW4pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3Vic2NyaWJlcnMuc3BsaWNlKGksIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiIsImltcG9ydCBOMTliYXNlQXBwbGV0IGZyb20gJy4vbjE5YmFzZUFwcGxldCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE4xOXBvcHVwQXBwbGV0IGV4dGVuZHMgTjE5YmFzZUFwcGxldCB7XG4gIGNvbnN0cnVjdG9yKHNldHRpbmdzKSB7XG4gICAgc3VwZXIoc2V0dGluZ3MpO1xuICAgIGNvbnNvbGUubG9nKGAke3RoaXMuY29uc3RydWN0b3IubmFtZX0gc3RhcnRlZC4uLmApOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcblxuICAgIGlmICh0aGlzLmlzTGlzdEFwcGxldCkge1xuICAgICAgdGhpcy5wbS5HZXRSZW5kZXJlcigpLnJlc2l6ZSA9ICgpID0+IDA7XG4gICAgICB0aGlzLnBtLkdldFJlbmRlcmVyKCkuR2V0U2VsZWN0ZWRSb3cgPSAoKSA9PiAwO1xuICAgIH1cbiAgfVxuXG4gIHBpY2tSZWNvcmQoKSB7XG4gICAgLy8gVE9ETzogY2hlY2sgY2FuSW5va2VNZXRob2Q/XG4gICAgcmV0dXJuIHRoaXMucG0uRXhlY3V0ZU1ldGhvZCgnSW52b2tlTWV0aG9kJywgJ1BpY2tSZWNvcmQnKTtcbiAgfVxuXG4gIGRlbGV0ZVJlY29yZHMoY2IpIHtcbiAgICAvLyBtZXRob2QgaXMgbm90IGFsbG93ZWQgdG8gZGVsZXRlIHRoZSBwcmltYXJ5IGZvciB2aXNpYmlsaXR5IE1WR1xuICAgIC8vICBpbiB0aGlzIGNhc2UgaXQgcmV0dXJucyBcIk1ldGhvZCBEZWxldGVSZWNvcmRzIGlzIG5vdCBhbGxvd2VkIGhlcmVcIiBTQkwtVUlGLTAwMzQ4XG4gICAgLy8gVE9ETzogY2hlY2sgY2FuSW52b2tlTWV0aG9kP1xuICAgIGNvbnN0IHJldCA9IHRoaXMucG0uRXhlY3V0ZU1ldGhvZCgnSW52b2tlTWV0aG9kJywgJ0RlbGV0ZVJlY29yZHMnKTtcbiAgICBpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjYigpO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgZGVsZXRlQWxsUmVjb3JkcyhjYikge1xuICAgIC8vIG1ldGhvZCBpcyBub3QgZGVsZXRpbmcgdGhlIHByaW1hcnkgZm9yIHZpc2liaWxpdHkgTVZHKCEpIGFuZCBzdGlsbCByZXR1cm5zIHRydWVcbiAgICAvLyBUT0RPOiBjaGVjayBjYW5JbnZva2VNZXRob2Q/XG4gICAgY29uc3QgcmV0ID0gdGhpcy5wbS5FeGVjdXRlTWV0aG9kKCdJbnZva2VNZXRob2QnLCAnRGVsZXRlQWxsUmVjb3JkcycpO1xuICAgIGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNiKCk7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICBhZGRSZWNvcmRzKGNiKSB7XG4gICAgLy8gVE9ETzogY2hlY2sgY2FuSW52b2tlTWV0aG9kP1xuICAgIGNvbnN0IHJldCA9IHRoaXMucG0uRXhlY3V0ZU1ldGhvZCgnSW52b2tlTWV0aG9kJywgJ0FkZFJlY29yZHMnKTtcbiAgICBpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjYigpO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgYWRkQWxsUmVjb3JkcyhjYikge1xuICAgIC8vIFRPRE86IGNoZWNrIGNhbkludm9rZU1ldGhvZD9cbiAgICBjb25zdCByZXQgPSB0aGlzLnBtLkV4ZWN1dGVNZXRob2QoJ0ludm9rZU1ldGhvZCcsICdBZGRBbGxSZWNvcmRzJyk7XG4gICAgaWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2IoKTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIF9maXJzdFJlY29yZCgpIHsgLy8gdGVtcCBtZXRob2QsIGFzc3VtZXMgdGhhdCBubyBzY3JvbGxpbmcgaGFwcGVuZWRcbiAgICBpZiAodGhpcy5pc0xpc3RBcHBsZXQpIHtcbiAgICAgIGlmICh0aGlzLmdldFNlbGVjdGlvbigpICE9PSAwKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBvc2l0aW9uT25Sb3coMCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iLCJpbXBvcnQgTjE5cG9wdXBBcHBsZXQgZnJvbSAnLi9uMTlwb3B1cEFwcGxldCc7XG5cbmNvbnN0IHNpbmdsZXRvbiA9IFN5bWJvbCgnc2luZ2xldG9uJyk7XG5jb25zdCBzaW5nbGV0b25FbmZvcmNlciA9IFN5bWJvbCgnc2luZ2xldG9uRW5mb3JjZXInKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTjE5cG9wdXBDb250cm9sbGVyIHtcbiAgc3RhdGljIGdldCBpbnN0YW5jZSgpIHtcbiAgICBpZiAoIXRoaXNbc2luZ2xldG9uXSkge1xuICAgICAgdGhpc1tzaW5nbGV0b25dID0gbmV3IE4xOXBvcHVwQ29udHJvbGxlcihzaW5nbGV0b25FbmZvcmNlcik7XG4gICAgfVxuICAgIHJldHVybiB0aGlzW3NpbmdsZXRvbl07XG4gIH1cblxuICBjb25zdHJ1Y3RvcihlbmZvcmNlcikge1xuICAgIGlmIChlbmZvcmNlciAhPT0gc2luZ2xldG9uRW5mb3JjZXIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW5zdGFudGlhdGlvbiBmYWlsZWQ6IHVzZSBTaW5nbGV0b24uZ2V0SW5zdGFuY2UoKSBpbnN0ZWFkIG9mIG5ldy4nKTtcbiAgICB9XG5cbiAgICB0aGlzLmNvbnN0cyA9IFNpZWJlbEpTLkRlcGVuZGVuY3koJ1NpZWJlbEFwcC5Db25zdGFudHMnKTtcbiAgICB0aGlzLmlzUG9wdXBIaWRkZW4gPSBmYWxzZTtcbiAgICB0aGlzLnJlc29sdmVQcm9taXNlID0gbnVsbDtcbiAgICB0aGlzLnBvcHVwQXBwbGV0TjE5ID0gbnVsbDtcbiAgICB0aGlzLmFzc29jQXBwbGV0TjE5ID0gbnVsbDtcblxuICAgIGNvbnNvbGUubG9nKGAke3RoaXMuY29uc3RydWN0b3IubmFtZX0gc3RhcnRlZC4uLmApOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcblxuICAgIHRoaXMuTjE5cmVzaXplQXZhaWxhYmxlID0gU2llYmVsQXBwLk12Z0JlYXV0aWZpZXIucmVzaXplQXZhaWxhYmxlO1xuICAgIFNpZWJlbEFwcC5NdmdCZWF1dGlmaWVyLnJlc2l6ZUF2YWlsYWJsZSA9ICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMuTjE5cmVzaXplQXZhaWxhYmxlLmNhbGwoU2llYmVsQXBwLk12Z0JlYXV0aWZpZXIpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhgcmVzaXplQXZhaWxhYmxlIEVycm9yOiAke2UubmFtZX0gJHtlLm1lc3NhZ2V9YCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBpdCB3aWxsIGJlIGEgc2luZ2xldG9uLCBzbyB0aGVyZSBpcyBubyBjbGVhbnVwXG4gICAgdGhpcy5OMTlwcm9jZXNzTmV3UG9wdXAgPSBTaWViZWxBcHAuU19BcHAuUHJvY2Vzc05ld1BvcHVwO1xuICAgIFNpZWJlbEFwcC5TX0FwcC5Qcm9jZXNzTmV3UG9wdXAgPSAocHMpID0+IHtcbiAgICAgIGxldCByZXQ7XG4gICAgICBpZiAodGhpcy5pc1BvcHVwSGlkZGVuKSB7XG4gICAgICAgIHJldCA9IHRoaXMucHJvY2Vzc05ld1BvcHVwKHBzKTtcbiAgICAgICAgdGhpcy5pc1BvcHVwSGlkZGVuID0gZmFsc2U7IC8vIGluIG9yZGVyIHRvIGRvIG5vdCBhZmZlY3QgdGhlIG5leHQgY2FsbFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0ID0gdGhpcy5OMTlwcm9jZXNzTmV3UG9wdXAuY2FsbChTaWViZWxBcHAuU19BcHAsIHBzKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXQ7XG4gICAgfTtcblxuICAgIC8vIHdlIGNvdWxkIHVzZSBwbS5BdHRhY2hQb3N0UHJveHlFeGVjdXRlQmluZGluZyBmb3IgJ0VkaXRGaWVsZCcsIHBtIGV4aXN0cywgYnV0IEdldFJlbmRlcmVyIHJldHVybnMgbnVsbFxuICAgIC8vIG9wZW4gdW50aWwgd2UgZ2V0IHJpZCBvZiBHZXRSZW5kZXJlciAoT3JhY2xlIHJldmlldylcbiAgICAvLyBvdGhlciBvcHRpb24gLSByZXNvbHZlIGl0IGluIFNpZWJlbEFwcC5jb250ZW50VXBkYXRlci52aWV3TG9hZGVkXG4gICAgU2llYmVsQXBwLlNfQXBwLkdldFBvcHVwUE0oKS5BdHRhY2hQTUJpbmRpbmcoJ09uTG9hZFBvcHVwQ29udGVudCcsICgpID0+IHtcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5yZXNvbHZlUHJvbWlzZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjb25zdCB7IGFwcGxldE5hbWUgfSA9IE4xOXBvcHVwQ29udHJvbGxlci5Jc1BvcHVwT3BlbigpO1xuICAgICAgICBpZiAoIWFwcGxldE5hbWUpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ09wZW4gQXBwbGV0IE5hbWUgaXMgbm90IGZvdW5kIGluIE9uTG9hZFBvcHVwQ29udGVudCByZXNvbHZpbmcgUHJvbWlzZScpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFwcGxldCA9IE4xOXBvcHVwQ29udHJvbGxlci5HZXRQb3B1cEFwcGxldChhcHBsZXROYW1lKTtcbiAgICAgICAgdGhpcy5wb3B1cEFwcGxldE4xOSA9IG5ldyBOMTlwb3B1cEFwcGxldCh7IHBtOiBhcHBsZXQuR2V0UE1vZGVsKCkgfSk7XG4gICAgICAgIGNvbnN0IG9iaiA9IHsgYXBwbGV0TmFtZSwgcG9wdXBBcHBsZXROMTk6IHRoaXMucG9wdXBBcHBsZXROMTkgfTtcblxuICAgICAgICBjb25zdCBhc3NvY0FwcGxldCA9IGFwcGxldC5HZXRQb3B1cEFwcGxldCgpOyAvLyBpcyBpdCBhbHdheXMgYXNzb2M/XG4gICAgICAgIGlmIChhc3NvY0FwcGxldCkgeyAvLyB3ZSBnb3QgYSBzaHV0dGxlXG4gICAgICAgICAgdGhpcy5hc3NvY0FwcGxldE4xOSA9IG5ldyBOMTlwb3B1cEFwcGxldCh7IHBtOiBhc3NvY0FwcGxldC5HZXRQTW9kZWwoKSB9KTtcbiAgICAgICAgICBvYmouYXNzb2NBcHBsZXROMTkgPSB0aGlzLmFzc29jQXBwbGV0TjE5O1xuICAgICAgICAgIG9iai5hdmFpbGFibGVSZWNvcmRTZXQgPSB0aGlzLmFzc29jQXBwbGV0TjE5LmdldENvbnRyb2xzUmVjb3JkU2V0KCk7XG4gICAgICAgICAgb2JqLnNlbGVjdGVkUmVjb3JkU2V0ID0gdGhpcy5wb3B1cEFwcGxldE4xOS5nZXRDb250cm9sc1JlY29yZFNldCgpO1xuICAgICAgICB9IGVsc2UgeyAvLyBhc3NvYyBvbmx5IE9SIHBpY2tcbiAgICAgICAgICBvYmouYXZhaWxhYmxlUmVjb3JkU2V0ID0gdGhpcy5wb3B1cEFwcGxldE4xOS5nZXRDb250cm9sc1JlY29yZFNldCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZXNvbHZlUHJvbWlzZShvYmopO1xuICAgICAgICB0aGlzLnJlc29sdmVQcm9taXNlID0gbnVsbDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNhbk9wZW5Qb3B1cCgpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMucmVzb2x2ZVByb21pc2UgIT09ICdmdW5jdGlvbic7XG4gIH1cblxuICBwcm9jZXNzTmV3UG9wdXAocHMpIHtcbiAgICBjb25zdCBwb3B1cFBNID0gU2llYmVsQXBwLlNfQXBwLkdldFBvcHVwUE0oKTtcblxuICAgIGlmICghcG9wdXBQTS5HZXRSZW5kZXJlcigpKSB7XG4gICAgICBwb3B1cFBNLlNldHVwKCk7IC8vIHRvIGNyZWF0ZSBQUlxuICAgIH1cblxuICAgIGNvbnN0IGFjdGl2ZVZpZXcgPSBTaWViZWxBcHAuU19BcHAuR2V0QWN0aXZlVmlldygpO1xuICAgIGNvbnN0IGFjdGl2ZUFwcGxldCA9IGFjdGl2ZVZpZXcuR2V0QWN0aXZlQXBwbGV0KCk7XG4gICAgaWYgKGFjdGl2ZUFwcGxldCkge1xuICAgICAgYWN0aXZlVmlldy5TZXRBY3RpdmVBcHBsZXRCZWZvcmVQb3B1cChhY3RpdmVBcHBsZXQpO1xuICAgIH1cblxuICAgIC8vIHRoaXMgcHJvcGVydHkgaXMgYWRkZWQgdXNpbmcgQXR0YWNoUE1CaW5kaW5nIGludG8gdGhlIEluaXQgUFIgKGNhbGxlZCBieSBQTSBTZXR1cClcbiAgICAvLyBpdCBpcyB0aGUgcmVhc29uIHdoeSB3ZSBoYXZlIHJlaW5pdCBwcm9jZWR1cmUgd2hlcmUgU2V0dXAgUE0gaXMgY2FsbGVkXG4gICAgcG9wdXBQTS5BZGRQcm9wZXJ0eSgnc3RhdGUnLCB0aGlzLmNvbnN0cy5nZXQoJ1BPUFVQX1NUQVRFX1ZJU0lCTEUnKSk7XG5cbiAgICBsZXQgdXJsID0gcHMuR2V0UHJvcGVydHkoJ1VSTCcpO1xuICAgIHVybCA9IFNpZWJlbEFwcC5TX0FwcC5HZXRQYWdlVVJMKCkgKyB1cmwuc3BsaXQoJ3N0YXJ0LnN3ZScpWzFdO1xuICAgIHBvcHVwUE0uU2V0UHJvcGVydHkoJ3VybCcsIHVybCk7XG5cbiAgICByZXR1cm4gJ3JlZnJlc2hwb3B1cCc7XG4gIH1cblxuICBjbG9zZVBvcHVwQXBwbGV0KGFwcGxldCkge1xuICAgIC8vIFRPRE86IGNoZWNrIGNhbkludm9rZU1ldGhvZD9cbiAgICBsZXQgcmV0O1xuICAgIGlmIChhcHBsZXQpIHtcbiAgICAgIGNvbnN0IGlzUG9wdXBBcHBsZXQgPSB0eXBlb2YgYXBwbGV0LkdldFBvcHVwQXBwbGV0TmFtZSA9PT0gJ2Z1bmN0aW9uJztcbiAgICAgIGNvbnN0IGlzUGlja0FwcGxldCA9IHR5cGVvZiBhcHBsZXQuR2V0UGlja0FwcGxldE5hbWUgPT09ICdmdW5jdGlvbic7XG4gICAgICBpZiAoIWlzUG9wdXBBcHBsZXQgJiYgIWlzUGlja0FwcGxldCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoaXMgYXBwbGV0IGlzIG5laXRoZXIgcGljayBub3IgcG9wdXAnKTtcbiAgICAgIH1cbiAgICAgIHJldCA9IGFwcGxldC5HZXRQTW9kZWwoKS5FeGVjdXRlTWV0aG9kKCdJbnZva2VNZXRob2QnLCAnQ2xvc2VBcHBsZXQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0ID0gdGhpcy5wb3B1cEFwcGxldE4xOS5hcHBsZXQuR2V0UE1vZGVsKCkuRXhlY3V0ZU1ldGhvZCgnSW52b2tlTWV0aG9kJywgJ0Nsb3NlQXBwbGV0Jyk7XG4gICAgfVxuICAgIC8vIGl0IGNvdWxkIGJlIGJldHRlciBpZiB3ZSBkb24ndCBoYXZlIGEgU2llYmVsIEFwcGxldCBvbiB0aGUgdmlld1xuICAgIC8vIGRvIHJlaW5pdCBoZXJlIG9uIGNsb3Npbmc/XG4gICAgdGhpcy5wb3B1cEFwcGxldE4xOSA9IG51bGw7XG4gICAgdGhpcy5hc3NvY0FwcGxldE4xOSA9IG51bGw7XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIHN0YXRpYyBJc1BvcHVwT3BlbigpIHsgLy8gc2FmZXIgdG8ga2VlcCB0aGlzIG1ldGhvZCwgZXZlbiB3aGVuIHdlIHNldCBzb21lIHByb3BlcnRpZXMgb24gcmVzb2x2ZT9cbiAgICBjb25zdCBjdXJyUG9wdXBzID0gU2llYmVsQXBwLlNfQXBwLkdldFBvcHVwUE0oKS5HZXQoJ2N1cnJQb3B1cHMnKTtcbiAgICBpZiAoMCA9PT0gY3VyclBvcHVwcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB7IGlzT3BlbjogZmFsc2UgfTtcbiAgICB9XG4gICAgaWYgKDEgPT09IGN1cnJQb3B1cHMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4geyBpc09wZW46IHRydWUsIGFwcGxldE5hbWU6IGN1cnJQb3B1cHNbMF0uR2V0TmFtZSgpLCBjb250cm9sTmFtZTogY3VyclBvcHVwc1swXS5HZXRQb3B1cENvbnRyb2woKSB9O1xuICAgIH1cbiAgICBpZiAoMiA9PT0gY3VyclBvcHVwcy5sZW5ndGgpIHtcbiAgICAgIC8vIGlzIHRoaXMgYWx3YXlzIGEgc2h1dHRsZSB3aGVuIHdlIGhhdmUgYSBzZWRvbmQgYXBwbGV0XG4gICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gY3VyclBvcHVwcy5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgICAgICBpZiAodHlwZW9mIGN1cnJQb3B1cHNbMV0uR2V0UG9wdXBBcHBsZXROYW1lID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgcmV0dXJuIHsgaXNPcGVuOiB0cnVlLCBhcHBsZXROYW1lOiBjdXJyUG9wdXBzW2ldLkdldE5hbWUoKSwgY29udHJvbE5hbWU6IGN1cnJQb3B1cHNbaV0uR2V0UG9wdXBDb250cm9sKCkgfTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNdmcgYXBwbGV0IGlzIG5vdCBmb3VuZC4uLicpO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Nob3VsZCBub3QgYmUgaGVyZS4uLicpO1xuICB9XG5cbiAgc3RhdGljIEdldFBvcHVwQXBwbGV0KGFwcGxldE5hbWUpIHtcbiAgICBjb25zdCBhcHBsZXQgPSBTaWViZWxBcHAuU19BcHAuR2V0QWN0aXZlVmlldygpLkdldEFwcGxldChhcHBsZXROYW1lKTtcbiAgICBpZiAoIWFwcGxldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgcmVmZXJlbmNlIHRvICR7YXBwbGV0TmFtZX0gaXMgbm90IGluc3RhbnRpYXRlZC5gKTtcbiAgICB9XG4gICAgcmV0dXJuIGFwcGxldDtcbiAgfVxuXG4gIGNoZWNrT3BlbmVkUG9wdXAoY2xvc2VJZk9wZW4pIHtcbiAgICBjb25zdCB7IGlzT3BlbiwgYXBwbGV0TmFtZSB9ID0gTjE5cG9wdXBDb250cm9sbGVyLklzUG9wdXBPcGVuKCk7XG4gICAgaWYgKGlzT3BlbiAmJiBjbG9zZUlmT3Blbikge1xuICAgICAgLy8gdGhpcyBjb2RlIHdpbGwgY2xvc2UgdGhlIGFwcGxldCBldmVuIGlmIHRoaXMgYXBwbGV0IHdhcyBvcmlnaW5hdGVkIGJ5IGFub3RoZXIgYXBwbGV0XG4gICAgICBjb25zb2xlLmxvZyhgY2xvc2luZyAke2FwcGxldE5hbWV9IGluIHNob3dQb3B1cEFwcGxldC4uLmApOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICAgIC8vIG1heWJlIGRvIG5vdCBjbG9zZSBpZiB0aGUgYXBwbGV0IHRvIGJlIG9wZW5lZCBpZiB0aGUgc2FtZSBhcyBhbHJlYWR5IG9wZW5lZD9cbiAgICAgIHJldHVybiB0aGlzLmNsb3NlUG9wdXBBcHBsZXQoTjE5cG9wdXBDb250cm9sbGVyLkdldFBvcHVwQXBwbGV0KGFwcGxldE5hbWUpKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzT3BlbixcbiAgICAgIGFwcGxldE5hbWUsXG4gICAgfTtcbiAgfVxuXG4gIF9vcGVuQXNzb2NBcHBsZXQobmV3UmVjb3JkRnVuYywgY2IpIHtcbiAgICB0aGlzLmNoZWNrT3BlbmVkUG9wdXAodHJ1ZSk7XG4gICAgdGhpcy5pc1BvcHVwSGlkZGVuID0gdHJ1ZTtcblxuICAgIG5ld1JlY29yZEZ1bmMoKTsgLy8gbWFrZSBhc3luYyBvZiBpbnZva2VNZXRob2Q/XG5cbiAgICBsZXQgcmV0ID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHsgdGhpcy5yZXNvbHZlUHJvbWlzZSA9IHJlc29sdmU7IH0pO1xuICAgIGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldCA9IHJldC50aGVuKGNiKTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIHNob3dQb3B1cEFwcGxldChoaWRlLCBjYiwgbjE5KSB7XG4gICAgLy8gVE9ETzogbWF5YmUgdXNlIHRoZSBwcm9wZXJ0aWVzIHNldCBvbiBwcm9taXNlIHJlc29sdmluZz9cbiAgICB0aGlzLmNoZWNrT3BlbmVkUG9wdXAodHJ1ZSk7XG5cbiAgICB0aGlzLmlzUG9wdXBIaWRkZW4gPSAhIWhpZGU7XG5cbiAgICBuMTkucG0uRXhlY3V0ZU1ldGhvZCgnSW52b2tlTWV0aG9kJywgJ0VkaXRQb3B1cCcpOyAvLyBjYW4gY2FsbCBFZGl0RmllbGQ/XG5cbiAgICBpZiAoaGlkZSkgeyAvLyB3ZSB3aWxsIHBvcHVsYXRlIHRoZSBpbnN0YW5jZXMgb25seSB3aGVuIGFwcGxldCBzaG91bGQgYmUgaGlkZGVuXG4gICAgICBsZXQgcmV0ID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHsgdGhpcy5yZXNvbHZlUHJvbWlzZSA9IHJlc29sdmU7IH0pO1xuICAgICAgaWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXQgPSByZXQudGhlbihjYik7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmV0O1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG4iLCJpbXBvcnQgTjE5YmFzZUFwcGxldCBmcm9tICcuL24xOWJhc2VBcHBsZXQnO1xuaW1wb3J0IE4xOXBvcHVwQ29udHJvbGxlciBmcm9tICcuL24xOXBvcHVwQ29udHJvbGxlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIG5leHVzMTkgZXh0ZW5kcyBOMTliYXNlQXBwbGV0IHtcbiAgY29uc3RydWN0b3Ioc2V0dGluZ3MpIHtcbiAgICBjb25zdCB7IGFwcGxldE5hbWUgfSA9IHNldHRpbmdzO1xuICAgIGlmIChhcHBsZXROYW1lKSB7XG4gICAgICBjb25zdCBhcHBsZXQgPSBTaWViZWxBcHAuU19BcHAuR2V0QWN0aXZlVmlldygpLkdldEFwcGxldChhcHBsZXROYW1lKTtcbiAgICAgIGlmICghYXBwbGV0KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGdldCB0aGUgcmVmZXJlbmNlIHRvIHRoZSBhcHBsZXQgYnkgdGhlICR7YXBwbGV0TmFtZX0gbmFtZWApO1xuICAgICAgfVxuICAgICAgc3VwZXIoT2JqZWN0LmFzc2lnbih7fSwgc2V0dGluZ3MsIHsgcG06IGFwcGxldC5HZXRQTW9kZWwoKSB9KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN1cGVyKHNldHRpbmdzKTtcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZygnTmV4dXMgbWFpbiBjbGFzcyBzdGFydGVkLi4uLicsIHRoaXMuYXBwbGV0TmFtZSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgIC8vIGdldCB0aGUgbjE5cG9wdXBDb250cm9sbGVyIHNpbmdsZXRvbiBpbnN0YW5jZVxuICAgIHRoaXMubjE5cG9wdXBDb250cm9sbGVyID0gTjE5cG9wdXBDb250cm9sbGVyLmluc3RhbmNlO1xuICB9XG5cbiAgY2xvc2VQb3B1cEFwcGxldCgpIHtcbiAgICByZXR1cm4gdGhpcy5uMTlwb3B1cENvbnRyb2xsZXIuY2xvc2VQb3B1cEFwcGxldCgpO1xuICB9XG5cbiAgX3Nob3dQb3B1cEFwcGxldChuYW1lLCBoaWRlLCBjYikge1xuICAgIGlmICghdGhpcy5uMTlwb3B1cENvbnRyb2xsZXIpIHtcbiAgICAgIC8vIGl0IGlzIGEgcG9wdXAgLSBwcm9iYWJseSBzaG91bGQgbmV2ZXIgaGFwcGVuP1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdPcGVubmluZyBwb3B1cCBvbiB0aGUgcG9wdXAgaXMgbm90IHN1cHBvcnRlZCBub3cnKTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLm4xOXBvcHVwQ29udHJvbGxlci5jYW5PcGVuUG9wdXAoKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3Qgb3BlbiBwb3B1cCAoY3VycmVudGx5IGV4aXN0cyByZXNvbHZlIGZ1bmN0aW9uKSEnKTtcbiAgICAgIC8vIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy52aWV3LlNldEFjdGl2ZUFwcGxldEludGVybmFsKHRoaXMuYXBwbGV0KTsgLy8gb3IgU2V0QWN0aXZlQXBwbGV0XG4gICAgdGhpcy5fc2V0QWN0aXZlQ29udHJvbChuYW1lKTtcbiAgICByZXR1cm4gdGhpcy5uMTlwb3B1cENvbnRyb2xsZXIuc2hvd1BvcHVwQXBwbGV0KGhpZGUsIGNiLCB0aGlzKTtcbiAgfVxuXG4gIHNob3dNdmdBcHBsZXQobmFtZSwgaGlkZSwgY2IpIHtcbiAgICAvLyBUT0RPOiBjaGVjayBpZiBuYW1lIGlzIGNvcnJlY3Q/XG4gICAgcmV0dXJuIHRoaXMuX3Nob3dQb3B1cEFwcGxldChuYW1lLCBoaWRlLCBjYik7XG4gIH1cblxuICBzaG93UGlja0FwcGxldChuYW1lLCBoaWRlLCBjYikge1xuICAgIC8vIFRPRE86IGNoZWNrIGlmIG5hbWUgaXMgY29ycmVjdD9cbiAgICByZXR1cm4gdGhpcy5fc2hvd1BvcHVwQXBwbGV0KG5hbWUsIGhpZGUsIGNiKTtcbiAgfVxuXG4gIF9uZXdBc3NvY1JlY29yZCgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB0aGlzLnBtLkV4ZWN1dGVNZXRob2QoJ0ludm9rZU1ldGhvZCcsICdOZXdSZWNvcmQnLCBudWxsLCB7XG4gICAgICBhc3luYzogdHJ1ZSxcbiAgICAgIGNiOiByZXNvbHZlLFxuICAgIH0pKTtcbiAgfVxuXG4gIG9wZW5Bc3NvY0FwcGxldChjYikgeyAvLyB0aGlzIG1ldGhvZCBzaG91bGQgYmUgYXZhaWxhYmxlIGZvciBjaGlsZCBidXNpbmVzcyBjb21wb25lbnQgaW4gTTpNIHJlbGF0aW9uc2hpcFxuICAgIC8vIFRPRE86IGNoZWNrIGlmIGFwcGxldCBwcm92aWRlcyBzdWNoIGNhcGFiaWxpdGllcz9cbiAgICBpZiAoIXRoaXMubjE5cG9wdXBDb250cm9sbGVyLmNhbk9wZW5Qb3B1cCgpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBvcGVuIHBvcHVwIChjdXJyZW50bHkgZXhpc3RzIHJlc29sdmUgZnVuY3Rpb24pIScpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5uMTlwb3B1cENvbnRyb2xsZXIuX29wZW5Bc3NvY0FwcGxldCh0aGlzLl9uZXdBc3NvY1JlY29yZC5iaW5kKHRoaXMpLCBjYik7XG4gIH1cblxuICBkcmlsbGRvd24oY29udHJvbE5hbWUpIHtcbiAgICAvLyBUT0RPOiBjaGVjayBpc0xpbmsgb2YgY29udHJvbD9cbiAgICAvLyBpbmRleCBpcyBub3QgZWZmZWN0aXZlLCBhbmQgZHJpbGxkb3duIGFueXdheSBoYXBwZW5zIG9uIHRoZSBzZWxlY3RlZCByZWNvcmRcbiAgICBpZiAoIXRoaXMuaXNMaXN0QXBwbGV0KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5nZXRTZWxlY3Rpb24oKTtcbiAgICByZXR1cm4gdGhpcy5wbS5FeGVjdXRlTWV0aG9kKCdPbkRyaWxsRG93bicsIGNvbnRyb2xOYW1lLCBpbmRleCk7XG4gIH1cblxuICBnb3RvVmlldyh0YXJnZXRWaWV3TmFtZSwgdGFyZ2V0QXBwbGV0TmFtZSwgaWQpIHtcbiAgICAvLyBUT0RPOiBnZXQgdGhlIGFwcGxldCBuYW1lIGZyb20gdGhlIHZpZXcgZGVmaW5pdGlvbj9cbiAgICBjb25zdCByb3dJZCA9IHR5cGVvZiBpZCA9PT0gJ3VuZGVmaW5lZCcgPyB0aGlzLmdldEN1cnJlbnRSZWNvcmQodHJ1ZSkuSWQgOiBpZDtcbiAgICBsZXQgU1dFQ21kID0gYEdvdG9WaWV3JlNXRVZpZXc9JHt0YXJnZXRWaWV3TmFtZX0mU1dFQXBwbGV0MD0ke3RhcmdldEFwcGxldE5hbWV9YDtcbiAgICBTV0VDbWQgKz0gYCZTV0VCVT0xJlNXRUtlZXBDb250ZXh0PUZBTFNFJlNXRVJvd0lkMD0ke3Jvd0lkfWA7XG4gICAgU1dFQ21kID0gZW5jb2RlVVJJKFNXRUNtZCk7XG4gICAgU2llYmVsQXBwLlNfQXBwLkdvdG9WaWV3KHRhcmdldFZpZXdOYW1lLCAnJywgU1dFQ21kLCAnJyk7XG4gIH1cblxuICByZUluaXRQb3B1cCgpIHsgLy8gZG8gd2UgbmVlZCB0byBrZWVwIGFsc28gc3RhdGljIFJlSW5pdFBvcHVwXG4gICAgdGhpcy5uMTlwb3B1cENvbnRyb2xsZXIuaXNQb3B1cEhpZGRlbiA9IGZhbHNlO1xuXG4gICAgY29uc3QgcG9wdXBQTSA9IFNpZWJlbEFwcC5TX0FwcC5HZXRQb3B1cFBNKCk7XG4gICAgcG9wdXBQTS5Jbml0KCk7XG4gICAgcG9wdXBQTS5TZXR1cCgpO1xuICB9XG5cbiAgc3RhdGljIFJlSW5pdFBvcHVwKCkgeyAvLyBjb3VsZCBiZSByZW1vdmVkIGluIHRoZSBuZXh0IHZlcnNpb25cbiAgICBjb25zdCBwb3B1cFBNID0gU2llYmVsQXBwLlNfQXBwLkdldFBvcHVwUE0oKTtcbiAgICBwb3B1cFBNLkluaXQoKTtcbiAgICBwb3B1cFBNLlNldHVwKCk7XG4gIH1cblxuICBwaWNrUmVjb3JkQnlJZChjb250cm9sTmFtZSwgcm93SWQpIHtcbiAgICAvLyBUT0RPOiBjaGVjayBpZiB0aGUgY29udHJvbCBhbGxvd3MgcGlja2luZz9cbiAgICByZXR1cm4gdGhpcy5zaG93UGlja0FwcGxldChjb250cm9sTmFtZSwgdHJ1ZSlcbiAgICAgIC50aGVuKG9iaiA9PiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQoKCkgPT4gcmVzb2x2ZShvYmopLCAwKSkpXG4gICAgICAudGhlbigob2JqKSA9PiB7XG4gICAgICAgIGNvbnN0IGZvdW5kID0gb2JqLnBvcHVwQXBwbGV0TjE5LnF1ZXJ5QnlJZFN5bmMocm93SWQpO1xuICAgICAgICBpZiAoZm91bmQgIT09IDEpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSByZWNvcmQgJHtyb3dJZH0gaXMgbm90IGZvdW5kICgke2ZvdW5kfSlgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb2JqLnBvcHVwQXBwbGV0TjE5LnBpY2tSZWNvcmQoKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgYXNzb2NSZWNvcmRzQnlJZChjb250cm9sTmFtZSwgYXJyLCBjbG9zZUFwcGxldCkge1xuICAgIC8vIFRPRE86IGNoZWNrIGlmIHRoZSBjb250cm9sIGFsbG93cyBtdmc/XG4gICAgcmV0dXJuIHRoaXMuc2hvd012Z0FwcGxldChjb250cm9sTmFtZSwgdHJ1ZSlcbiAgICAgIC50aGVuKG9iaiA9PiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQoKCkgPT4gcmVzb2x2ZShvYmopLCAwKSkpXG4gICAgICAudGhlbihvYmogPT4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgY29uc3QgZm91bmQgPSBvYmouYXNzb2NBcHBsZXROMTkucXVlcnlCeUlkU3luYyhhcnIpO1xuICAgICAgICBpZiAoZm91bmQgIT09IGFyci5sZW5ndGgpIHtcbiAgICAgICAgICAvLyBzaG91bGQgd2UgdGhyb3cgYW4gZXJyb3I/XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgICBjb25zb2xlLndhcm4oYFRoZSBhbW91bnQgb2YgZm91bmQgcmVjb3Jkcygke2ZvdW5kfSkgZG9lcyBub3QgbWF0Y2ggdG8gaW5wdXQgYXJyYXkgbGVuZ3RoKCR7YXJyLmxlbmd0aH0pYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZvdW5kID4gMCkgeyAvLyB3ZSBoYXZlIHNvbWV0aGluZyB0byBhZGRcbiAgICAgICAgICBvYmoucG9wdXBBcHBsZXROMTkuYWRkQWxsUmVjb3JkcygpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjbG9zZUFwcGxldCkge1xuICAgICAgICAgIHRoaXMuY2xvc2VQb3B1cEFwcGxldCgpO1xuICAgICAgICAgIHJlc29sdmUoZm91bmQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9iai5mb3VuZCA9IGZvdW5kOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICAgICAgcmVzb2x2ZShvYmopO1xuICAgICAgICB9XG4gICAgICB9KSk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=