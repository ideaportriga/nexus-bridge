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
      _this = _possibleConstructorReturn(this, _getPrototypeOf(_class).call(this, settings));
    }

    console.log('Nexus main class started....', _this.appletName); // eslint-disable-line no-console
    // get the n19popupController singleton instance

    _this.n19popupController = _n19popupController__WEBPACK_IMPORTED_MODULE_5__["default"].instance;
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

  return _class;
}(_n19baseApplet__WEBPACK_IMPORTED_MODULE_4__["default"]);

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

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\apps\n19helper/src/main.js */"./src/main.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYW4taW5zdGFuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FycmF5LW1ldGhvZHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYXJyYXktc3BlY2llcy1jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hcnJheS1zcGVjaWVzLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jbGFzc29mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NvZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jb2xsZWN0aW9uLXN0cm9uZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jb2xsZWN0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY3JlYXRlLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2N0eC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19kZWZpbmVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2RvbS1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19lbnVtLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZXhwb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2ZhaWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2ZpeC1yZS13a3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZmxhZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZm9yLW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19oYXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faGlkZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19odG1sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2luaGVyaXQtaWYtcmVxdWlyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faW52b2tlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2lvYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXMtYXJyYXktaXRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pcy1hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pcy1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXMtcmVnZXhwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXItY2FsbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyLWRldGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyLXN0ZXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlcmF0b3JzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2xpYnJhcnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fbWV0YS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19taWNyb3Rhc2suanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fbmV3LXByb21pc2UtY2FwYWJpbGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtYXNzaWduLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWRwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1kcHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdvcGQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdvcG4tZXh0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1nb3BuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1nb3BzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1ncG8uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LXBpZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3Qtc2FwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC10by1hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19wZXJmb3JtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3Byb21pc2UtcmVzb2x2ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3JlZGVmaW5lLWFsbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19yZWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zZXQtcHJvdG8uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc2V0LXNwZWNpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc2hhcmVkLWtleS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc3BlY2llcy1jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zdHJpbmctYXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdGFzay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1hYnNvbHV0ZS1pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWlvYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1wcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdWlkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3VzZXItYWdlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdmFsaWRhdGUtY29sbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL193a3MtZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3drcy1leHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fd2tzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmZpbmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuZnJvbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5mdW5jdGlvbi5uYW1lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnByb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLmZsYWdzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5zcGxpdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAudG8tc3RyaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcuYXJyYXkuaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcub2JqZWN0LmVudHJpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcub2JqZWN0LnZhbHVlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzIiwid2VicGFjazovLy8uL3NyYy9tYWluLmpzIiwid2VicGFjazovLy8uL3NyYy9uMTliYXNlQXBwbGV0LmpzIiwid2VicGFjazovLy8uL3NyYy9uMTlub3RpZmljYXRpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9uMTlwb3B1cEFwcGxldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbjE5cG9wdXBDb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJpdCIsIlR5cGVFcnJvciIsIlVOU0NPUEFCTEVTIiwicmVxdWlyZSIsIkFycmF5UHJvdG8iLCJBcnJheSIsInByb3RvdHlwZSIsInVuZGVmaW5lZCIsImtleSIsIkNvbnN0cnVjdG9yIiwibmFtZSIsImZvcmJpZGRlbkZpZWxkIiwiaXNPYmplY3QiLCJ0b0lPYmplY3QiLCJ0b0xlbmd0aCIsInRvQWJzb2x1dGVJbmRleCIsIklTX0lOQ0xVREVTIiwiJHRoaXMiLCJlbCIsImZyb21JbmRleCIsIk8iLCJsZW5ndGgiLCJpbmRleCIsInZhbHVlIiwiY3R4IiwiSU9iamVjdCIsInRvT2JqZWN0IiwiYXNjIiwiVFlQRSIsIiRjcmVhdGUiLCJJU19NQVAiLCJJU19GSUxURVIiLCJJU19TT01FIiwiSVNfRVZFUlkiLCJJU19GSU5EX0lOREVYIiwiTk9fSE9MRVMiLCJjcmVhdGUiLCJjYWxsYmFja2ZuIiwidGhhdCIsInNlbGYiLCJmIiwicmVzdWx0IiwidmFsIiwicmVzIiwicHVzaCIsImlzQXJyYXkiLCJTUEVDSUVTIiwib3JpZ2luYWwiLCJDIiwiY29uc3RydWN0b3IiLCJzcGVjaWVzQ29uc3RydWN0b3IiLCJjb2YiLCJUQUciLCJBUkciLCJhcmd1bWVudHMiLCJ0cnlHZXQiLCJlIiwiVCIsIkIiLCJPYmplY3QiLCJjYWxsZWUiLCJ0b1N0cmluZyIsImNhbGwiLCJzbGljZSIsImRQIiwicmVkZWZpbmVBbGwiLCJhbkluc3RhbmNlIiwiZm9yT2YiLCIkaXRlckRlZmluZSIsInN0ZXAiLCJzZXRTcGVjaWVzIiwiREVTQ1JJUFRPUlMiLCJmYXN0S2V5IiwidmFsaWRhdGUiLCJTSVpFIiwiZ2V0RW50cnkiLCJlbnRyeSIsIl9pIiwiX2YiLCJuIiwiayIsImdldENvbnN0cnVjdG9yIiwid3JhcHBlciIsIk5BTUUiLCJBRERFUiIsIml0ZXJhYmxlIiwiX3QiLCJfbCIsImNsZWFyIiwiZGF0YSIsInIiLCJwIiwiaSIsIm5leHQiLCJwcmV2IiwiZm9yRWFjaCIsInYiLCJoYXMiLCJnZXQiLCJkZWYiLCJzZXRTdHJvbmciLCJpdGVyYXRlZCIsImtpbmQiLCJfayIsImdsb2JhbCIsIiRleHBvcnQiLCJyZWRlZmluZSIsIm1ldGEiLCJmYWlscyIsIiRpdGVyRGV0ZWN0Iiwic2V0VG9TdHJpbmdUYWciLCJpbmhlcml0SWZSZXF1aXJlZCIsIm1ldGhvZHMiLCJjb21tb24iLCJJU19XRUFLIiwiQmFzZSIsInByb3RvIiwiZml4TWV0aG9kIiwiS0VZIiwiZm4iLCJhIiwiYWRkIiwic2V0IiwiYiIsImVudHJpZXMiLCJORUVEIiwiaW5zdGFuY2UiLCJIQVNOVF9DSEFJTklORyIsIlRIUk9XU19PTl9QUklNSVRJVkVTIiwiQUNDRVBUX0lURVJBQkxFUyIsIml0ZXIiLCJCVUdHWV9aRVJPIiwiJGluc3RhbmNlIiwidGFyZ2V0IiwiRyIsIlciLCJGIiwiY29yZSIsInZlcnNpb24iLCJfX2UiLCIkZGVmaW5lUHJvcGVydHkiLCJjcmVhdGVEZXNjIiwib2JqZWN0IiwiYUZ1bmN0aW9uIiwiYyIsImFwcGx5IiwiZGVmaW5lUHJvcGVydHkiLCJkb2N1bWVudCIsImlzIiwiY3JlYXRlRWxlbWVudCIsInNwbGl0IiwiZ2V0S2V5cyIsImdPUFMiLCJwSUUiLCJnZXRTeW1ib2xzIiwic3ltYm9scyIsImlzRW51bSIsImhpZGUiLCJQUk9UT1RZUEUiLCJ0eXBlIiwic291cmNlIiwiSVNfRk9SQ0VEIiwiSVNfR0xPQkFMIiwiSVNfU1RBVElDIiwiUyIsIklTX1BST1RPIiwiUCIsIklTX0JJTkQiLCJleHBQcm90byIsIm93biIsIm91dCIsImV4cCIsIkZ1bmN0aW9uIiwiVSIsIlIiLCJleGVjIiwiZGVmaW5lZCIsIndrcyIsIlNZTUJPTCIsImZucyIsInN0cmZuIiwicnhmbiIsIlN0cmluZyIsIlJlZ0V4cCIsInN0cmluZyIsImFyZyIsImFuT2JqZWN0IiwiaWdub3JlQ2FzZSIsIm11bHRpbGluZSIsInVuaWNvZGUiLCJzdGlja3kiLCJpc0FycmF5SXRlciIsImdldEl0ZXJGbiIsIkJSRUFLIiwiUkVUVVJOIiwiSVRFUkFUT1IiLCJpdGVyRm4iLCJpdGVyYXRvciIsImRvbmUiLCJ3aW5kb3ciLCJNYXRoIiwiX19nIiwiaGFzT3duUHJvcGVydHkiLCJkb2N1bWVudEVsZW1lbnQiLCJzZXRQcm90b3R5cGVPZiIsImFyZ3MiLCJ1biIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwiSXRlcmF0b3JzIiwiTUFUQ0giLCJpc1JlZ0V4cCIsInJldCIsImRlc2NyaXB0b3IiLCJJdGVyYXRvclByb3RvdHlwZSIsIkxJQlJBUlkiLCIkaXRlckNyZWF0ZSIsImdldFByb3RvdHlwZU9mIiwiQlVHR1kiLCJrZXlzIiwiRkZfSVRFUkFUT1IiLCJLRVlTIiwiVkFMVUVTIiwicmV0dXJuVGhpcyIsIkRFRkFVTFQiLCJJU19TRVQiLCJGT1JDRUQiLCJnZXRNZXRob2QiLCJ2YWx1ZXMiLCJERUZfVkFMVUVTIiwiVkFMVUVTX0JVRyIsIiRuYXRpdmUiLCIkZGVmYXVsdCIsIiRlbnRyaWVzIiwiJGFueU5hdGl2ZSIsIlNBRkVfQ0xPU0lORyIsInJpdGVyIiwiZnJvbSIsInNraXBDbG9zaW5nIiwic2FmZSIsImFyciIsIk1FVEEiLCJzZXREZXNjIiwiaWQiLCJpc0V4dGVuc2libGUiLCJGUkVFWkUiLCJwcmV2ZW50RXh0ZW5zaW9ucyIsInNldE1ldGEiLCJ3IiwiZ2V0V2VhayIsIm9uRnJlZXplIiwibWFjcm90YXNrIiwiT2JzZXJ2ZXIiLCJNdXRhdGlvbk9ic2VydmVyIiwiV2ViS2l0TXV0YXRpb25PYnNlcnZlciIsInByb2Nlc3MiLCJQcm9taXNlIiwiaXNOb2RlIiwiaGVhZCIsImxhc3QiLCJub3RpZnkiLCJmbHVzaCIsInBhcmVudCIsImRvbWFpbiIsImV4aXQiLCJlbnRlciIsIm5leHRUaWNrIiwibmF2aWdhdG9yIiwic3RhbmRhbG9uZSIsInRvZ2dsZSIsIm5vZGUiLCJjcmVhdGVUZXh0Tm9kZSIsIm9ic2VydmUiLCJjaGFyYWN0ZXJEYXRhIiwicmVzb2x2ZSIsInByb21pc2UiLCJ0aGVuIiwidGFzayIsIlByb21pc2VDYXBhYmlsaXR5IiwicmVqZWN0IiwiJCRyZXNvbHZlIiwiJCRyZWplY3QiLCIkYXNzaWduIiwiYXNzaWduIiwiQSIsIlN5bWJvbCIsIksiLCJqb2luIiwiYUxlbiIsImNvbmNhdCIsImoiLCJkUHMiLCJlbnVtQnVnS2V5cyIsIklFX1BST1RPIiwiRW1wdHkiLCJjcmVhdGVEaWN0IiwiaWZyYW1lIiwibHQiLCJndCIsImlmcmFtZURvY3VtZW50Iiwic3R5bGUiLCJkaXNwbGF5IiwiYXBwZW5kQ2hpbGQiLCJzcmMiLCJjb250ZW50V2luZG93Iiwib3BlbiIsIndyaXRlIiwiY2xvc2UiLCJQcm9wZXJ0aWVzIiwiSUU4X0RPTV9ERUZJTkUiLCJ0b1ByaW1pdGl2ZSIsIkF0dHJpYnV0ZXMiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiZ09QRCIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImdPUE4iLCJ3aW5kb3dOYW1lcyIsImdldE93blByb3BlcnR5TmFtZXMiLCJnZXRXaW5kb3dOYW1lcyIsIiRrZXlzIiwiaGlkZGVuS2V5cyIsImdldE93blByb3BlcnR5U3ltYm9scyIsIk9iamVjdFByb3RvIiwiYXJyYXlJbmRleE9mIiwibmFtZXMiLCJpc0VudHJpZXMiLCJuZXdQcm9taXNlQ2FwYWJpbGl0eSIsIngiLCJwcm9taXNlQ2FwYWJpbGl0eSIsImJpdG1hcCIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIlNSQyIsIlRPX1NUUklORyIsIiR0b1N0cmluZyIsIlRQTCIsImluc3BlY3RTb3VyY2UiLCJpc0Z1bmN0aW9uIiwiY2hlY2siLCJ0ZXN0IiwiYnVnZ3kiLCJfX3Byb3RvX18iLCJ0YWciLCJzdGF0Iiwic2hhcmVkIiwidWlkIiwiU0hBUkVEIiwic3RvcmUiLCJtb2RlIiwiY29weXJpZ2h0IiwiRCIsInRvSW50ZWdlciIsInBvcyIsInMiLCJsIiwiY2hhckNvZGVBdCIsImNoYXJBdCIsImludm9rZSIsImh0bWwiLCJjZWwiLCJzZXRUYXNrIiwic2V0SW1tZWRpYXRlIiwiY2xlYXJUYXNrIiwiY2xlYXJJbW1lZGlhdGUiLCJNZXNzYWdlQ2hhbm5lbCIsIkRpc3BhdGNoIiwiY291bnRlciIsInF1ZXVlIiwiT05SRUFEWVNUQVRFQ0hBTkdFIiwiZGVmZXIiLCJjaGFubmVsIiwicG9ydCIsInJ1biIsImxpc3RlbmVyIiwiZXZlbnQiLCJub3ciLCJwb3J0MiIsInBvcnQxIiwib25tZXNzYWdlIiwicG9zdE1lc3NhZ2UiLCJhZGRFdmVudExpc3RlbmVyIiwiaW1wb3J0U2NyaXB0cyIsInJlbW92ZUNoaWxkIiwic2V0VGltZW91dCIsIm1heCIsIm1pbiIsImNlaWwiLCJmbG9vciIsImlzTmFOIiwidmFsdWVPZiIsInB4IiwicmFuZG9tIiwidXNlckFnZW50Iiwid2tzRXh0IiwiJFN5bWJvbCIsIlVTRV9TWU1CT0wiLCIkZXhwb3J0cyIsImNsYXNzb2YiLCJnZXRJdGVyYXRvck1ldGhvZCIsIiRmaW5kIiwiZm9yY2VkIiwiZmluZCIsImNyZWF0ZVByb3BlcnR5IiwiYXJyYXlMaWtlIiwibWFwZm4iLCJtYXBwaW5nIiwiYWRkVG9VbnNjb3BhYmxlcyIsIkFyZ3VtZW50cyIsIkZQcm90byIsIm5hbWVSRSIsIm1hdGNoIiwic3Ryb25nIiwiTUFQIiwiTWFwIiwibWljcm90YXNrIiwibmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUiLCJwZXJmb3JtIiwicHJvbWlzZVJlc29sdmUiLCJQUk9NSVNFIiwidmVyc2lvbnMiLCJ2OCIsIiRQcm9taXNlIiwiZW1wdHkiLCJJbnRlcm5hbCIsIm5ld0dlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSIsIk93blByb21pc2VDYXBhYmlsaXR5IiwiV3JhcHBlciIsIlVTRV9OQVRJVkUiLCJGYWtlUHJvbWlzZSIsIlByb21pc2VSZWplY3Rpb25FdmVudCIsImluZGV4T2YiLCJpc1RoZW5hYmxlIiwiaXNSZWplY3QiLCJfbiIsImNoYWluIiwiX2MiLCJfdiIsIm9rIiwiX3MiLCJyZWFjdGlvbiIsImhhbmRsZXIiLCJmYWlsIiwiZXhpdGVkIiwiX2giLCJvbkhhbmRsZVVuaGFuZGxlZCIsIm9uVW5oYW5kbGVkIiwidW5oYW5kbGVkIiwiaXNVbmhhbmRsZWQiLCJjb25zb2xlIiwiZW1pdCIsIm9udW5oYW5kbGVkcmVqZWN0aW9uIiwicmVhc29uIiwiZXJyb3IiLCJfYSIsIm9ucmVqZWN0aW9uaGFuZGxlZCIsIiRyZWplY3QiLCJfZCIsIl93IiwiJHJlc29sdmUiLCJleGVjdXRvciIsImVyciIsIm9uRnVsZmlsbGVkIiwib25SZWplY3RlZCIsImNhcGFiaWxpdHkiLCJhbGwiLCJyZW1haW5pbmciLCIkaW5kZXgiLCJhbHJlYWR5Q2FsbGVkIiwicmFjZSIsImZsYWdzIiwiU1BMSVQiLCIkc3BsaXQiLCJfc3BsaXQiLCIkcHVzaCIsIiRTUExJVCIsIkxFTkdUSCIsIkxBU1RfSU5ERVgiLCJOUENHIiwic2VwYXJhdG9yIiwibGltaXQiLCJvdXRwdXQiLCJsYXN0TGFzdEluZGV4Iiwic3BsaXRMaW1pdCIsInNlcGFyYXRvckNvcHkiLCJzZXBhcmF0b3IyIiwibGFzdEluZGV4IiwibGFzdExlbmd0aCIsInJlcGxhY2UiLCIkZmxhZ3MiLCJkZWZpbmUiLCIkYXQiLCJwb2ludCIsIiRmYWlscyIsIndrc0RlZmluZSIsImVudW1LZXlzIiwiX2NyZWF0ZSIsImdPUE5FeHQiLCIkR09QRCIsIiREUCIsIiRKU09OIiwiSlNPTiIsIl9zdHJpbmdpZnkiLCJzdHJpbmdpZnkiLCJISURERU4iLCJUT19QUklNSVRJVkUiLCJTeW1ib2xSZWdpc3RyeSIsIkFsbFN5bWJvbHMiLCJPUFN5bWJvbHMiLCJRT2JqZWN0Iiwic2V0dGVyIiwiZmluZENoaWxkIiwic2V0U3ltYm9sRGVzYyIsInByb3RvRGVzYyIsIndyYXAiLCJzeW0iLCJpc1N5bWJvbCIsIiRkZWZpbmVQcm9wZXJ0aWVzIiwiJHByb3BlcnR5SXNFbnVtZXJhYmxlIiwiRSIsIiRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCIkZ2V0T3duUHJvcGVydHlOYW1lcyIsIiRnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJJU19PUCIsIiRzZXQiLCJlczZTeW1ib2xzIiwid2VsbEtub3duU3ltYm9scyIsImtleUZvciIsInVzZVNldHRlciIsInVzZVNpbXBsZSIsInJlcGxhY2VyIiwiJHJlcGxhY2VyIiwiJGluY2x1ZGVzIiwiaW5jbHVkZXMiLCIkdmFsdWVzIiwiJGl0ZXJhdG9ycyIsIlRPX1NUUklOR19UQUciLCJBcnJheVZhbHVlcyIsIkRPTUl0ZXJhYmxlcyIsIkNTU1J1bGVMaXN0IiwiQ1NTU3R5bGVEZWNsYXJhdGlvbiIsIkNTU1ZhbHVlTGlzdCIsIkNsaWVudFJlY3RMaXN0IiwiRE9NUmVjdExpc3QiLCJET01TdHJpbmdMaXN0IiwiRE9NVG9rZW5MaXN0IiwiRGF0YVRyYW5zZmVySXRlbUxpc3QiLCJGaWxlTGlzdCIsIkhUTUxBbGxDb2xsZWN0aW9uIiwiSFRNTENvbGxlY3Rpb24iLCJIVE1MRm9ybUVsZW1lbnQiLCJIVE1MU2VsZWN0RWxlbWVudCIsIk1lZGlhTGlzdCIsIk1pbWVUeXBlQXJyYXkiLCJOYW1lZE5vZGVNYXAiLCJOb2RlTGlzdCIsIlBhaW50UmVxdWVzdExpc3QiLCJQbHVnaW4iLCJQbHVnaW5BcnJheSIsIlNWR0xlbmd0aExpc3QiLCJTVkdOdW1iZXJMaXN0IiwiU1ZHUGF0aFNlZ0xpc3QiLCJTVkdQb2ludExpc3QiLCJTVkdTdHJpbmdMaXN0IiwiU1ZHVHJhbnNmb3JtTGlzdCIsIlNvdXJjZUJ1ZmZlckxpc3QiLCJTdHlsZVNoZWV0TGlzdCIsIlRleHRUcmFja0N1ZUxpc3QiLCJUZXh0VHJhY2tMaXN0IiwiVG91Y2hMaXN0IiwiY29sbGVjdGlvbnMiLCJleHBsaWNpdCIsIkNvbGxlY3Rpb24iLCJTaWViZWxBcHBGYWNhZGUiLCJOMTlIZWxwZXIiLCJzZXR0aW5ncyIsImFwcGxldE5hbWUiLCJhcHBsZXQiLCJTaWViZWxBcHAiLCJTX0FwcCIsIkdldEFjdGl2ZVZpZXciLCJHZXRBcHBsZXQiLCJFcnJvciIsInBtIiwiR2V0UE1vZGVsIiwibG9nIiwibjE5cG9wdXBDb250cm9sbGVyIiwiTjE5cG9wdXBDb250cm9sbGVyIiwiY2xvc2VQb3B1cEFwcGxldCIsImNiIiwiY2FuT3BlblBvcHVwIiwidmlldyIsIlNldEFjdGl2ZUFwcGxldEludGVybmFsIiwiX3NldEFjdGl2ZUNvbnRyb2wiLCJzaG93UG9wdXBBcHBsZXQiLCJfc2hvd1BvcHVwQXBwbGV0IiwiRXhlY3V0ZU1ldGhvZCIsImFzeW5jIiwiX29wZW5Bc3NvY0FwcGxldCIsIl9uZXdBc3NvY1JlY29yZCIsImJpbmQiLCJjb250cm9sTmFtZSIsImlzTGlzdEFwcGxldCIsImdldFNlbGVjdGlvbiIsInRhcmdldFZpZXdOYW1lIiwidGFyZ2V0QXBwbGV0TmFtZSIsInJvd0lkIiwiZ2V0Q3VycmVudFJlY29yZCIsIklkIiwiU1dFQ21kIiwiZW5jb2RlVVJJIiwiR290b1ZpZXciLCJpc1BvcHVwSGlkZGVuIiwicG9wdXBQTSIsIkdldFBvcHVwUE0iLCJJbml0IiwiU2V0dXAiLCJzaG93UGlja0FwcGxldCIsIm9iaiIsImZvdW5kIiwicG9wdXBBcHBsZXROMTkiLCJxdWVyeUJ5SWRTeW5jIiwicGlja1JlY29yZCIsImNsb3NlQXBwbGV0Iiwic2hvd012Z0FwcGxldCIsImFzc29jQXBwbGV0TjE5Iiwid2FybiIsImFkZEFsbFJlY29yZHMiLCJOMTliYXNlQXBwbGV0IiwiY29uc3RzIiwiU2llYmVsSlMiLCJEZXBlbmRlbmN5IiwidXRpbHMiLCJjb252ZXJ0RGF0ZXMiLCJHZXQiLCJyZXF1aXJlZCIsImxvdiIsImJvb2xPYmplY3QiLCJEYXR1bUJvb2xPYmplY3QiLCJsb2FkTG9jYWxlRGF0YSIsImZpZWxkVG9Db250cm9sTWFwIiwiX2dldEZpZWxkVG9Db250cm9sTWFwIiwiYmNJZCIsIkdldEJDSWQiLCJub3RpZmljYXRpb25zIiwiTjE5bm90aWZpY2F0aW9ucyIsImFwcGxldElkIiwiYXBwbGV0SW5wdXRzIiwiZ2V0RWxlbWVudEJ5SWQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYXR0cmlidXRlcyIsIm5vZGVWYWx1ZSIsIkF0dGFjaFBNQmluZGluZyIsImlucHV0TmFtZSIsInZpZXdOYW1lIiwiR2V0TmFtZSIsInNwbGljZSIsImZpbHRlciIsInNjb3BlIiwiaXNUcmVlQXBwbGV0IiwiRXhwbG9yZXJQcmVzZW50YXRpb25Nb2RlbCIsImxvY2FsZU9iamVjdCIsIkxvY2FsZU9iamVjdCIsImRhdGVUaW1lRm9ybWF0IiwiR2V0UHJvZmlsZSIsImxvY2FsZURhdGEiLCJmaXJzdERheU9mV2VlayIsIkdldFdlZWtTdGFydERheSIsImRhdGVGb3JtYXQiLCJpczI0aG91cnNGb3JtYXQiLCJsb2NhbENvdW50cnlQaG9uZUNvZGUiLCJtb250aHMiLCJzaG9ydE1vbnRocyIsIkdldERhdGEiLCJtX3NwTW9udGhQUyIsIkdldFByb3BlcnR5Iiwid2Vla0RheXMiLCJtX3NwRGF5T2ZXZWVrUFMiLCJ3ZWVrRGF5czMiLCJ3ZWVrRGF5czEiLCJmdW5jIiwic3Vic2NyaWJlIiwidG9rZW4iLCJ1bnN1YnNjcmliZSIsIl9nZXRDb250cm9sIiwidWlUeXBlIiwiZGlzcGxheUZvcm1hdCIsIlNldFZhbHVlIiwiR2V0QXNTdHJpbmciLCJfaXNEYXRlVGltZUNvbnRyb2wiLCJkYXRlIiwidG9Mb2NhbGVTdHJpbmciLCJob3VyMTIiLCJHZXRTdHJpbmdGcm9tRGF0ZVRpbWUiLCJtZXRob2QiLCJjYW5JbnZva2VNZXRob2QiLCJjb250cm9scyIsImFwcGxldENvbnRyb2xzIiwiX3JldHVybkNvbnRyb2xzIiwiY29udHJvbEVudHJ5IiwiY29udHJvbCIsIkdldFVJVHlwZSIsIkdldERpc3BsYXlGb3JtYXQiLCJnZXRDb250cm9sRGlzcGxheUZvcm1hdCIsIl9pc1NraXBDb250cm9sIiwiR2V0SW5wdXROYW1lIiwiZmllbGROYW1lIiwiR2V0RmllbGROYW1lIiwibGFiZWwiLCJHZXREaXNwbGF5TmFtZSIsIl9pc1JlcXVpcmVkIiwiYm91bmRlZFBpY2siLCJJc0JvdW5kZWRQaWNrIiwic3RhdGljUGljayIsIklzU3RhdGljQm91bmRlZCIsImlzUG9zdENoYW5nZXMiLCJJc1Bvc3RDaGFuZ2VzIiwibWF4U2l6ZSIsIkdldE1heFNpemUiLCJpc0xpbmsiLCJyZWFkb25seSIsImRhdGFUeXBlIiwic3RhdGljTE9WIiwiR2V0U3RhdGljTE9WIiwiR2V0UmFkaW9Hcm91cFByb3BTZXQiLCJjaGlsZEFycmF5IiwibG92cyIsInJlZHVjZSIsImFjYyIsImxpYyIsIkZpZWxkVmFsdWUiLCJEaXNwbGF5TmFtZSIsImFkZFJlY29yZEluZGV4IiwibWFwIiwiX2luZHgiLCJfbmF2aWdhdGUiLCJnZXRSb3dMaXN0Um93Q291bnQiLCJwb3NpdGlvbk9uUm93IiwiX25ld1JlY29yZCIsImNiZXJyIiwiX3dyaXRlUmVjb3JkIiwiY2F0Y2giLCJza2lwQ29uZmlybURpYWxvZyIsIk4xOUNvbmZpcm0iLCJVdGlscyIsIkNvbmZpcm0iLCJfZ2V0U2llYmVsVmFsdWUiLCJfc2V0Q29udHJvbFZhbHVlSW50ZXJuYWwiLCJPbkNvbnRyb2xFdmVudCIsImlzU3RhdGljIiwiaXNTdGF0aWNQaWNrIiwiX3ZhbGlkYXRlUGlja0NvbnRyb2wiLCJjb250cm9sSW5wdXROYW1lIiwicHMiLCJOZXdQcm9wZXJ0eVNldCIsIlNldFByb3BlcnR5Iiwic29ydCIsIl9nZXRDb250cm9sU3RhdGljTE9WIiwiaXNEeW5hbWljIiwiX2dldENvbnRyb2xEeW5hbWljTE9WIiwiU2V0QXNTdHJpbmciLCJHZXRWYWx1ZSIsIklTTyIsIlRvSVNPRm9ybWF0IiwiR2V0SVNPRGF0ZVRpbWUiLCJEYXRlIiwicmF3IiwiZ2V0UmF3UmVjb3JkU2V0IiwiZ2V0UmVjb3JkU2V0IiwiYmMiLCJJc0luc2VydFBlbmRpbmciLCJJc0NvbW1pdFBlbmRpbmciLCJjb250cm9sTWV0aG9kIiwiR2V0TWV0aG9kTmFtZSIsIl9jb250cm9scyIsIl9tZXRob2RzIiwiZ2V0Q29udHJvbHMiLCJfZ2V0TWV0aG9kcyIsInN0YXRlIiwiY2FsY3VsYXRlQ3VycmVudFJlY29yZFN0YXRlIiwiX2dldEpTVmFsdWUiLCJtZXRob2ROYW1lIiwiY29udHJvbFVpVHlwZSIsImV4cHIiLCJfbmV3UXVlcnkiLCJfZmluZENvbnRyb2xUb0VudGVyU2VhcmNoRXhwciIsInF1ZXJ5QnlTZWFyY2hFeHByU3luYyIsIl9xdWVyeUJ5SWQiLCJhaSIsInNlbGZidXN5IiwicGFyYW1zIiwiX3F1ZXJ5IiwiaWRzIiwiZmllbGRzIiwidXNlQWN0aXZlQk8iLCJfZ2V0TVZGIiwicHNJbnB1dHMiLCJHZXRBY3RpdmVCdXNPYmoiLCJTZXRUeXBlIiwiX2dldEZpZWxkTmFtZUZvckNvbnRyb2wiLCJBZGRDaGlsZCIsIkNsb25lIiwiYnMiLCJHZXRTZXJ2aWNlIiwiZXJyY2IiLCJJbnB1dHMiLCJwc091dHB1dHMiLCJHZXRDaGlsZEJ5VHlwZSIsImNoaWxkIiwiR2V0VHlwZSIsImdyYW5kQ2hpbGQiLCJyZWMiLCJwcmltYXJ5IiwicHJvcEFycmF5IiwiSW52b2tlTWV0aG9kIiwicHNJbnB1dCIsImFtb3VudCIsInNpemUiLCJuZXh0UmVjb3JkU2V0IiwiaGFzTmV4dCIsIlNldENvbnRyb2xWYWx1ZUJ5TmFtZSIsInJhd1JlY29yZFNldCIsImxlbiIsImlzQXNjZW5kaW5nIiwic29ydE9yZGVyIiwiT25DbGlja1NvcnQiLCJzZXJ2aWNlIiwiaW5Qcm9wU2V0IiwicmVjZWl2ZWROb3RpZmljYXRpb25zIiwic3Vic2NyaWJlcnMiLCJBdHRhY2hOb3RpZmljYXRpb25IYW5kbGVyIiwicHJvcFNldCIsInN0YXRlcyIsInN1YlRva2VuIiwiTjE5cG9wdXBBcHBsZXQiLCJHZXRSZW5kZXJlciIsInJlc2l6ZSIsIkdldFNlbGVjdGVkUm93Iiwic2luZ2xldG9uIiwic2luZ2xldG9uRW5mb3JjZXIiLCJlbmZvcmNlciIsInJlc29sdmVQcm9taXNlIiwiTjE5cmVzaXplQXZhaWxhYmxlIiwiTXZnQmVhdXRpZmllciIsInJlc2l6ZUF2YWlsYWJsZSIsIm1lc3NhZ2UiLCJOMTlwcm9jZXNzTmV3UG9wdXAiLCJQcm9jZXNzTmV3UG9wdXAiLCJwcm9jZXNzTmV3UG9wdXAiLCJJc1BvcHVwT3BlbiIsIkdldFBvcHVwQXBwbGV0IiwiYXNzb2NBcHBsZXQiLCJhdmFpbGFibGVSZWNvcmRTZXQiLCJnZXRDb250cm9sc1JlY29yZFNldCIsInNlbGVjdGVkUmVjb3JkU2V0IiwiYWN0aXZlVmlldyIsImFjdGl2ZUFwcGxldCIsIkdldEFjdGl2ZUFwcGxldCIsIlNldEFjdGl2ZUFwcGxldEJlZm9yZVBvcHVwIiwiQWRkUHJvcGVydHkiLCJ1cmwiLCJHZXRQYWdlVVJMIiwiaXNQb3B1cEFwcGxldCIsIkdldFBvcHVwQXBwbGV0TmFtZSIsImlzUGlja0FwcGxldCIsIkdldFBpY2tBcHBsZXROYW1lIiwiY2xvc2VJZk9wZW4iLCJpc09wZW4iLCJuZXdSZWNvcmRGdW5jIiwiY2hlY2tPcGVuZWRQb3B1cCIsIm4xOSIsImN1cnJQb3B1cHMiLCJHZXRQb3B1cENvbnRyb2wiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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LEVBQVk7QUFDaEMsVUFBTUMsTUFBTSxHQUFHQyxTQUFTLENBQUNDLEtBQVYsQ0FBZ0JDLGFBQWhCLEdBQWdDQyxTQUFoQyxDQUEwQ0wsVUFBMUMsQ0FBZjs7QUFDQSxVQUFJLENBQUNDLE1BQUwsRUFBYTtBQUNYLGNBQU0sSUFBSUssS0FBSiw0QkFBOEJOLFVBQTlCLDJCQUFOO0FBQ0Q7O0FBQ0QsYUFBT0MsTUFBUDtBQUNEIiwiZmlsZSI6Ik4xOUhlbHBlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICh0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJykgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsIi8vIDIyLjEuMy4zMSBBcnJheS5wcm90b3R5cGVbQEB1bnNjb3BhYmxlc11cbnZhciBVTlNDT1BBQkxFUyA9IHJlcXVpcmUoJy4vX3drcycpKCd1bnNjb3BhYmxlcycpO1xudmFyIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5pZiAoQXJyYXlQcm90b1tVTlNDT1BBQkxFU10gPT0gdW5kZWZpbmVkKSByZXF1aXJlKCcuL19oaWRlJykoQXJyYXlQcm90bywgVU5TQ09QQUJMRVMsIHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICBBcnJheVByb3RvW1VOU0NPUEFCTEVTXVtrZXldID0gdHJ1ZTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgQ29uc3RydWN0b3IsIG5hbWUsIGZvcmJpZGRlbkZpZWxkKSB7XG4gIGlmICghKGl0IGluc3RhbmNlb2YgQ29uc3RydWN0b3IpIHx8IChmb3JiaWRkZW5GaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZvcmJpZGRlbkZpZWxkIGluIGl0KSkge1xuICAgIHRocm93IFR5cGVFcnJvcihuYW1lICsgJzogaW5jb3JyZWN0IGludm9jYXRpb24hJyk7XG4gIH0gcmV0dXJuIGl0O1xufTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsIi8vIGZhbHNlIC0+IEFycmF5I2luZGV4T2Zcbi8vIHRydWUgIC0+IEFycmF5I2luY2x1ZGVzXG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi9fdG8tYWJzb2x1dGUtaW5kZXgnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKElTX0lOQ0xVREVTKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIGVsLCBmcm9tSW5kZXgpIHtcbiAgICB2YXIgTyA9IHRvSU9iamVjdCgkdGhpcyk7XG4gICAgdmFyIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICB2YXIgaW5kZXggPSB0b0Fic29sdXRlSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpO1xuICAgIHZhciB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgIGlmIChJU19JTkNMVURFUyAmJiBlbCAhPSBlbCkgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSB7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgICBpZiAodmFsdWUgIT0gdmFsdWUpIHJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I2luZGV4T2YgaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIGlmIChJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKSB7XG4gICAgICBpZiAoT1tpbmRleF0gPT09IGVsKSByZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59O1xuIiwiLy8gMCAtPiBBcnJheSNmb3JFYWNoXG4vLyAxIC0+IEFycmF5I21hcFxuLy8gMiAtPiBBcnJheSNmaWx0ZXJcbi8vIDMgLT4gQXJyYXkjc29tZVxuLy8gNCAtPiBBcnJheSNldmVyeVxuLy8gNSAtPiBBcnJheSNmaW5kXG4vLyA2IC0+IEFycmF5I2ZpbmRJbmRleFxudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIGFzYyA9IHJlcXVpcmUoJy4vX2FycmF5LXNwZWNpZXMtY3JlYXRlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChUWVBFLCAkY3JlYXRlKSB7XG4gIHZhciBJU19NQVAgPSBUWVBFID09IDE7XG4gIHZhciBJU19GSUxURVIgPSBUWVBFID09IDI7XG4gIHZhciBJU19TT01FID0gVFlQRSA9PSAzO1xuICB2YXIgSVNfRVZFUlkgPSBUWVBFID09IDQ7XG4gIHZhciBJU19GSU5EX0lOREVYID0gVFlQRSA9PSA2O1xuICB2YXIgTk9fSE9MRVMgPSBUWVBFID09IDUgfHwgSVNfRklORF9JTkRFWDtcbiAgdmFyIGNyZWF0ZSA9ICRjcmVhdGUgfHwgYXNjO1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBjYWxsYmFja2ZuLCB0aGF0KSB7XG4gICAgdmFyIE8gPSB0b09iamVjdCgkdGhpcyk7XG4gICAgdmFyIHNlbGYgPSBJT2JqZWN0KE8pO1xuICAgIHZhciBmID0gY3R4KGNhbGxiYWNrZm4sIHRoYXQsIDMpO1xuICAgIHZhciBsZW5ndGggPSB0b0xlbmd0aChzZWxmLmxlbmd0aCk7XG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICB2YXIgcmVzdWx0ID0gSVNfTUFQID8gY3JlYXRlKCR0aGlzLCBsZW5ndGgpIDogSVNfRklMVEVSID8gY3JlYXRlKCR0aGlzLCAwKSA6IHVuZGVmaW5lZDtcbiAgICB2YXIgdmFsLCByZXM7XG4gICAgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIGlmIChOT19IT0xFUyB8fCBpbmRleCBpbiBzZWxmKSB7XG4gICAgICB2YWwgPSBzZWxmW2luZGV4XTtcbiAgICAgIHJlcyA9IGYodmFsLCBpbmRleCwgTyk7XG4gICAgICBpZiAoVFlQRSkge1xuICAgICAgICBpZiAoSVNfTUFQKSByZXN1bHRbaW5kZXhdID0gcmVzOyAgIC8vIG1hcFxuICAgICAgICBlbHNlIGlmIChyZXMpIHN3aXRjaCAoVFlQRSkge1xuICAgICAgICAgIGNhc2UgMzogcmV0dXJuIHRydWU7ICAgICAgICAgICAgIC8vIHNvbWVcbiAgICAgICAgICBjYXNlIDU6IHJldHVybiB2YWw7ICAgICAgICAgICAgICAvLyBmaW5kXG4gICAgICAgICAgY2FzZSA2OiByZXR1cm4gaW5kZXg7ICAgICAgICAgICAgLy8gZmluZEluZGV4XG4gICAgICAgICAgY2FzZSAyOiByZXN1bHQucHVzaCh2YWwpOyAgICAgICAgLy8gZmlsdGVyXG4gICAgICAgIH0gZWxzZSBpZiAoSVNfRVZFUlkpIHJldHVybiBmYWxzZTsgLy8gZXZlcnlcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIElTX0ZJTkRfSU5ERVggPyAtMSA6IElTX1NPTUUgfHwgSVNfRVZFUlkgPyBJU19FVkVSWSA6IHJlc3VsdDtcbiAgfTtcbn07XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi9faXMtYXJyYXknKTtcbnZhciBTUEVDSUVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3JpZ2luYWwpIHtcbiAgdmFyIEM7XG4gIGlmIChpc0FycmF5KG9yaWdpbmFsKSkge1xuICAgIEMgPSBvcmlnaW5hbC5jb25zdHJ1Y3RvcjtcbiAgICAvLyBjcm9zcy1yZWFsbSBmYWxsYmFja1xuICAgIGlmICh0eXBlb2YgQyA9PSAnZnVuY3Rpb24nICYmIChDID09PSBBcnJheSB8fCBpc0FycmF5KEMucHJvdG90eXBlKSkpIEMgPSB1bmRlZmluZWQ7XG4gICAgaWYgKGlzT2JqZWN0KEMpKSB7XG4gICAgICBDID0gQ1tTUEVDSUVTXTtcbiAgICAgIGlmIChDID09PSBudWxsKSBDID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfSByZXR1cm4gQyA9PT0gdW5kZWZpbmVkID8gQXJyYXkgOiBDO1xufTtcbiIsIi8vIDkuNC4yLjMgQXJyYXlTcGVjaWVzQ3JlYXRlKG9yaWdpbmFsQXJyYXksIGxlbmd0aClcbnZhciBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuL19hcnJheS1zcGVjaWVzLWNvbnN0cnVjdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9yaWdpbmFsLCBsZW5ndGgpIHtcbiAgcmV0dXJuIG5ldyAoc3BlY2llc0NvbnN0cnVjdG9yKG9yaWdpbmFsKSkobGVuZ3RoKTtcbn07XG4iLCIvLyBnZXR0aW5nIHRhZyBmcm9tIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xudmFyIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuLy8gRVMzIHdyb25nIGhlcmVcbnZhciBBUkcgPSBjb2YoZnVuY3Rpb24gKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID09ICdBcmd1bWVudHMnO1xuXG4vLyBmYWxsYmFjayBmb3IgSUUxMSBTY3JpcHQgQWNjZXNzIERlbmllZCBlcnJvclxudmFyIHRyeUdldCA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIE8sIFQsIEI7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mIChUID0gdHJ5R2V0KE8gPSBPYmplY3QoaXQpLCBUQUcpKSA9PSAnc3RyaW5nJyA/IFRcbiAgICAvLyBidWlsdGluVGFnIGNhc2VcbiAgICA6IEFSRyA/IGNvZihPKVxuICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcbiAgICA6IChCID0gY29mKE8pKSA9PSAnT2JqZWN0JyAmJiB0eXBlb2YgTy5jYWxsZWUgPT0gJ2Z1bmN0aW9uJyA/ICdBcmd1bWVudHMnIDogQjtcbn07XG4iLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKTtcbnZhciByZWRlZmluZUFsbCA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lLWFsbCcpO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGFuSW5zdGFuY2UgPSByZXF1aXJlKCcuL19hbi1pbnN0YW5jZScpO1xudmFyIGZvck9mID0gcmVxdWlyZSgnLi9fZm9yLW9mJyk7XG52YXIgJGl0ZXJEZWZpbmUgPSByZXF1aXJlKCcuL19pdGVyLWRlZmluZScpO1xudmFyIHN0ZXAgPSByZXF1aXJlKCcuL19pdGVyLXN0ZXAnKTtcbnZhciBzZXRTcGVjaWVzID0gcmVxdWlyZSgnLi9fc2V0LXNwZWNpZXMnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyk7XG52YXIgZmFzdEtleSA9IHJlcXVpcmUoJy4vX21ldGEnKS5mYXN0S2V5O1xudmFyIHZhbGlkYXRlID0gcmVxdWlyZSgnLi9fdmFsaWRhdGUtY29sbGVjdGlvbicpO1xudmFyIFNJWkUgPSBERVNDUklQVE9SUyA/ICdfcycgOiAnc2l6ZSc7XG5cbnZhciBnZXRFbnRyeSA9IGZ1bmN0aW9uICh0aGF0LCBrZXkpIHtcbiAgLy8gZmFzdCBjYXNlXG4gIHZhciBpbmRleCA9IGZhc3RLZXkoa2V5KTtcbiAgdmFyIGVudHJ5O1xuICBpZiAoaW5kZXggIT09ICdGJykgcmV0dXJuIHRoYXQuX2lbaW5kZXhdO1xuICAvLyBmcm96ZW4gb2JqZWN0IGNhc2VcbiAgZm9yIChlbnRyeSA9IHRoYXQuX2Y7IGVudHJ5OyBlbnRyeSA9IGVudHJ5Lm4pIHtcbiAgICBpZiAoZW50cnkuayA9PSBrZXkpIHJldHVybiBlbnRyeTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGdldENvbnN0cnVjdG9yOiBmdW5jdGlvbiAod3JhcHBlciwgTkFNRSwgSVNfTUFQLCBBRERFUikge1xuICAgIHZhciBDID0gd3JhcHBlcihmdW5jdGlvbiAodGhhdCwgaXRlcmFibGUpIHtcbiAgICAgIGFuSW5zdGFuY2UodGhhdCwgQywgTkFNRSwgJ19pJyk7XG4gICAgICB0aGF0Ll90ID0gTkFNRTsgICAgICAgICAvLyBjb2xsZWN0aW9uIHR5cGVcbiAgICAgIHRoYXQuX2kgPSBjcmVhdGUobnVsbCk7IC8vIGluZGV4XG4gICAgICB0aGF0Ll9mID0gdW5kZWZpbmVkOyAgICAvLyBmaXJzdCBlbnRyeVxuICAgICAgdGhhdC5fbCA9IHVuZGVmaW5lZDsgICAgLy8gbGFzdCBlbnRyeVxuICAgICAgdGhhdFtTSVpFXSA9IDA7ICAgICAgICAgLy8gc2l6ZVxuICAgICAgaWYgKGl0ZXJhYmxlICE9IHVuZGVmaW5lZCkgZm9yT2YoaXRlcmFibGUsIElTX01BUCwgdGhhdFtBRERFUl0sIHRoYXQpO1xuICAgIH0pO1xuICAgIHJlZGVmaW5lQWxsKEMucHJvdG90eXBlLCB7XG4gICAgICAvLyAyMy4xLjMuMSBNYXAucHJvdG90eXBlLmNsZWFyKClcbiAgICAgIC8vIDIzLjIuMy4yIFNldC5wcm90b3R5cGUuY2xlYXIoKVxuICAgICAgY2xlYXI6IGZ1bmN0aW9uIGNsZWFyKCkge1xuICAgICAgICBmb3IgKHZhciB0aGF0ID0gdmFsaWRhdGUodGhpcywgTkFNRSksIGRhdGEgPSB0aGF0Ll9pLCBlbnRyeSA9IHRoYXQuX2Y7IGVudHJ5OyBlbnRyeSA9IGVudHJ5Lm4pIHtcbiAgICAgICAgICBlbnRyeS5yID0gdHJ1ZTtcbiAgICAgICAgICBpZiAoZW50cnkucCkgZW50cnkucCA9IGVudHJ5LnAubiA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBkZWxldGUgZGF0YVtlbnRyeS5pXTtcbiAgICAgICAgfVxuICAgICAgICB0aGF0Ll9mID0gdGhhdC5fbCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhhdFtTSVpFXSA9IDA7XG4gICAgICB9LFxuICAgICAgLy8gMjMuMS4zLjMgTWFwLnByb3RvdHlwZS5kZWxldGUoa2V5KVxuICAgICAgLy8gMjMuMi4zLjQgU2V0LnByb3RvdHlwZS5kZWxldGUodmFsdWUpXG4gICAgICAnZGVsZXRlJzogZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB2YXIgdGhhdCA9IHZhbGlkYXRlKHRoaXMsIE5BTUUpO1xuICAgICAgICB2YXIgZW50cnkgPSBnZXRFbnRyeSh0aGF0LCBrZXkpO1xuICAgICAgICBpZiAoZW50cnkpIHtcbiAgICAgICAgICB2YXIgbmV4dCA9IGVudHJ5Lm47XG4gICAgICAgICAgdmFyIHByZXYgPSBlbnRyeS5wO1xuICAgICAgICAgIGRlbGV0ZSB0aGF0Ll9pW2VudHJ5LmldO1xuICAgICAgICAgIGVudHJ5LnIgPSB0cnVlO1xuICAgICAgICAgIGlmIChwcmV2KSBwcmV2Lm4gPSBuZXh0O1xuICAgICAgICAgIGlmIChuZXh0KSBuZXh0LnAgPSBwcmV2O1xuICAgICAgICAgIGlmICh0aGF0Ll9mID09IGVudHJ5KSB0aGF0Ll9mID0gbmV4dDtcbiAgICAgICAgICBpZiAodGhhdC5fbCA9PSBlbnRyeSkgdGhhdC5fbCA9IHByZXY7XG4gICAgICAgICAgdGhhdFtTSVpFXS0tO1xuICAgICAgICB9IHJldHVybiAhIWVudHJ5O1xuICAgICAgfSxcbiAgICAgIC8vIDIzLjIuMy42IFNldC5wcm90b3R5cGUuZm9yRWFjaChjYWxsYmFja2ZuLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxuICAgICAgLy8gMjMuMS4zLjUgTWFwLnByb3RvdHlwZS5mb3JFYWNoKGNhbGxiYWNrZm4sIHRoaXNBcmcgPSB1bmRlZmluZWQpXG4gICAgICBmb3JFYWNoOiBmdW5jdGlvbiBmb3JFYWNoKGNhbGxiYWNrZm4gLyogLCB0aGF0ID0gdW5kZWZpbmVkICovKSB7XG4gICAgICAgIHZhbGlkYXRlKHRoaXMsIE5BTUUpO1xuICAgICAgICB2YXIgZiA9IGN0eChjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCwgMyk7XG4gICAgICAgIHZhciBlbnRyeTtcbiAgICAgICAgd2hpbGUgKGVudHJ5ID0gZW50cnkgPyBlbnRyeS5uIDogdGhpcy5fZikge1xuICAgICAgICAgIGYoZW50cnkudiwgZW50cnkuaywgdGhpcyk7XG4gICAgICAgICAgLy8gcmV2ZXJ0IHRvIHRoZSBsYXN0IGV4aXN0aW5nIGVudHJ5XG4gICAgICAgICAgd2hpbGUgKGVudHJ5ICYmIGVudHJ5LnIpIGVudHJ5ID0gZW50cnkucDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8vIDIzLjEuMy43IE1hcC5wcm90b3R5cGUuaGFzKGtleSlcbiAgICAgIC8vIDIzLjIuMy43IFNldC5wcm90b3R5cGUuaGFzKHZhbHVlKVxuICAgICAgaGFzOiBmdW5jdGlvbiBoYXMoa2V5KSB7XG4gICAgICAgIHJldHVybiAhIWdldEVudHJ5KHZhbGlkYXRlKHRoaXMsIE5BTUUpLCBrZXkpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChERVNDUklQVE9SUykgZFAoQy5wcm90b3R5cGUsICdzaXplJywge1xuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB2YWxpZGF0ZSh0aGlzLCBOQU1FKVtTSVpFXTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gQztcbiAgfSxcbiAgZGVmOiBmdW5jdGlvbiAodGhhdCwga2V5LCB2YWx1ZSkge1xuICAgIHZhciBlbnRyeSA9IGdldEVudHJ5KHRoYXQsIGtleSk7XG4gICAgdmFyIHByZXYsIGluZGV4O1xuICAgIC8vIGNoYW5nZSBleGlzdGluZyBlbnRyeVxuICAgIGlmIChlbnRyeSkge1xuICAgICAgZW50cnkudiA9IHZhbHVlO1xuICAgIC8vIGNyZWF0ZSBuZXcgZW50cnlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhhdC5fbCA9IGVudHJ5ID0ge1xuICAgICAgICBpOiBpbmRleCA9IGZhc3RLZXkoa2V5LCB0cnVlKSwgLy8gPC0gaW5kZXhcbiAgICAgICAgazoga2V5LCAgICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIGtleVxuICAgICAgICB2OiB2YWx1ZSwgICAgICAgICAgICAgICAgICAgICAgLy8gPC0gdmFsdWVcbiAgICAgICAgcDogcHJldiA9IHRoYXQuX2wsICAgICAgICAgICAgIC8vIDwtIHByZXZpb3VzIGVudHJ5XG4gICAgICAgIG46IHVuZGVmaW5lZCwgICAgICAgICAgICAgICAgICAvLyA8LSBuZXh0IGVudHJ5XG4gICAgICAgIHI6IGZhbHNlICAgICAgICAgICAgICAgICAgICAgICAvLyA8LSByZW1vdmVkXG4gICAgICB9O1xuICAgICAgaWYgKCF0aGF0Ll9mKSB0aGF0Ll9mID0gZW50cnk7XG4gICAgICBpZiAocHJldikgcHJldi5uID0gZW50cnk7XG4gICAgICB0aGF0W1NJWkVdKys7XG4gICAgICAvLyBhZGQgdG8gaW5kZXhcbiAgICAgIGlmIChpbmRleCAhPT0gJ0YnKSB0aGF0Ll9pW2luZGV4XSA9IGVudHJ5O1xuICAgIH0gcmV0dXJuIHRoYXQ7XG4gIH0sXG4gIGdldEVudHJ5OiBnZXRFbnRyeSxcbiAgc2V0U3Ryb25nOiBmdW5jdGlvbiAoQywgTkFNRSwgSVNfTUFQKSB7XG4gICAgLy8gYWRkIC5rZXlzLCAudmFsdWVzLCAuZW50cmllcywgW0BAaXRlcmF0b3JdXG4gICAgLy8gMjMuMS4zLjQsIDIzLjEuMy44LCAyMy4xLjMuMTEsIDIzLjEuMy4xMiwgMjMuMi4zLjUsIDIzLjIuMy44LCAyMy4yLjMuMTAsIDIzLjIuMy4xMVxuICAgICRpdGVyRGVmaW5lKEMsIE5BTUUsIGZ1bmN0aW9uIChpdGVyYXRlZCwga2luZCkge1xuICAgICAgdGhpcy5fdCA9IHZhbGlkYXRlKGl0ZXJhdGVkLCBOQU1FKTsgLy8gdGFyZ2V0XG4gICAgICB0aGlzLl9rID0ga2luZDsgICAgICAgICAgICAgICAgICAgICAvLyBraW5kXG4gICAgICB0aGlzLl9sID0gdW5kZWZpbmVkOyAgICAgICAgICAgICAgICAvLyBwcmV2aW91c1xuICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAgIHZhciBraW5kID0gdGhhdC5faztcbiAgICAgIHZhciBlbnRyeSA9IHRoYXQuX2w7XG4gICAgICAvLyByZXZlcnQgdG8gdGhlIGxhc3QgZXhpc3RpbmcgZW50cnlcbiAgICAgIHdoaWxlIChlbnRyeSAmJiBlbnRyeS5yKSBlbnRyeSA9IGVudHJ5LnA7XG4gICAgICAvLyBnZXQgbmV4dCBlbnRyeVxuICAgICAgaWYgKCF0aGF0Ll90IHx8ICEodGhhdC5fbCA9IGVudHJ5ID0gZW50cnkgPyBlbnRyeS5uIDogdGhhdC5fdC5fZikpIHtcbiAgICAgICAgLy8gb3IgZmluaXNoIHRoZSBpdGVyYXRpb25cbiAgICAgICAgdGhhdC5fdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgcmV0dXJuIHN0ZXAoMSk7XG4gICAgICB9XG4gICAgICAvLyByZXR1cm4gc3RlcCBieSBraW5kXG4gICAgICBpZiAoa2luZCA9PSAna2V5cycpIHJldHVybiBzdGVwKDAsIGVudHJ5LmspO1xuICAgICAgaWYgKGtpbmQgPT0gJ3ZhbHVlcycpIHJldHVybiBzdGVwKDAsIGVudHJ5LnYpO1xuICAgICAgcmV0dXJuIHN0ZXAoMCwgW2VudHJ5LmssIGVudHJ5LnZdKTtcbiAgICB9LCBJU19NQVAgPyAnZW50cmllcycgOiAndmFsdWVzJywgIUlTX01BUCwgdHJ1ZSk7XG5cbiAgICAvLyBhZGQgW0BAc3BlY2llc10sIDIzLjEuMi4yLCAyMy4yLjIuMlxuICAgIHNldFNwZWNpZXMoTkFNRSk7XG4gIH1cbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciByZWRlZmluZUFsbCA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lLWFsbCcpO1xudmFyIG1ldGEgPSByZXF1aXJlKCcuL19tZXRhJyk7XG52YXIgZm9yT2YgPSByZXF1aXJlKCcuL19mb3Itb2YnKTtcbnZhciBhbkluc3RhbmNlID0gcmVxdWlyZSgnLi9fYW4taW5zdGFuY2UnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbnZhciAkaXRlckRldGVjdCA9IHJlcXVpcmUoJy4vX2l0ZXItZGV0ZWN0Jyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIGluaGVyaXRJZlJlcXVpcmVkID0gcmVxdWlyZSgnLi9faW5oZXJpdC1pZi1yZXF1aXJlZCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChOQU1FLCB3cmFwcGVyLCBtZXRob2RzLCBjb21tb24sIElTX01BUCwgSVNfV0VBSykge1xuICB2YXIgQmFzZSA9IGdsb2JhbFtOQU1FXTtcbiAgdmFyIEMgPSBCYXNlO1xuICB2YXIgQURERVIgPSBJU19NQVAgPyAnc2V0JyA6ICdhZGQnO1xuICB2YXIgcHJvdG8gPSBDICYmIEMucHJvdG90eXBlO1xuICB2YXIgTyA9IHt9O1xuICB2YXIgZml4TWV0aG9kID0gZnVuY3Rpb24gKEtFWSkge1xuICAgIHZhciBmbiA9IHByb3RvW0tFWV07XG4gICAgcmVkZWZpbmUocHJvdG8sIEtFWSxcbiAgICAgIEtFWSA9PSAnZGVsZXRlJyA/IGZ1bmN0aW9uIChhKSB7XG4gICAgICAgIHJldHVybiBJU19XRUFLICYmICFpc09iamVjdChhKSA/IGZhbHNlIDogZm4uY2FsbCh0aGlzLCBhID09PSAwID8gMCA6IGEpO1xuICAgICAgfSA6IEtFWSA9PSAnaGFzJyA/IGZ1bmN0aW9uIGhhcyhhKSB7XG4gICAgICAgIHJldHVybiBJU19XRUFLICYmICFpc09iamVjdChhKSA/IGZhbHNlIDogZm4uY2FsbCh0aGlzLCBhID09PSAwID8gMCA6IGEpO1xuICAgICAgfSA6IEtFWSA9PSAnZ2V0JyA/IGZ1bmN0aW9uIGdldChhKSB7XG4gICAgICAgIHJldHVybiBJU19XRUFLICYmICFpc09iamVjdChhKSA/IHVuZGVmaW5lZCA6IGZuLmNhbGwodGhpcywgYSA9PT0gMCA/IDAgOiBhKTtcbiAgICAgIH0gOiBLRVkgPT0gJ2FkZCcgPyBmdW5jdGlvbiBhZGQoYSkgeyBmbi5jYWxsKHRoaXMsIGEgPT09IDAgPyAwIDogYSk7IHJldHVybiB0aGlzOyB9XG4gICAgICAgIDogZnVuY3Rpb24gc2V0KGEsIGIpIHsgZm4uY2FsbCh0aGlzLCBhID09PSAwID8gMCA6IGEsIGIpOyByZXR1cm4gdGhpczsgfVxuICAgICk7XG4gIH07XG4gIGlmICh0eXBlb2YgQyAhPSAnZnVuY3Rpb24nIHx8ICEoSVNfV0VBSyB8fCBwcm90by5mb3JFYWNoICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgbmV3IEMoKS5lbnRyaWVzKCkubmV4dCgpO1xuICB9KSkpIHtcbiAgICAvLyBjcmVhdGUgY29sbGVjdGlvbiBjb25zdHJ1Y3RvclxuICAgIEMgPSBjb21tb24uZ2V0Q29uc3RydWN0b3Iod3JhcHBlciwgTkFNRSwgSVNfTUFQLCBBRERFUik7XG4gICAgcmVkZWZpbmVBbGwoQy5wcm90b3R5cGUsIG1ldGhvZHMpO1xuICAgIG1ldGEuTkVFRCA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGluc3RhbmNlID0gbmV3IEMoKTtcbiAgICAvLyBlYXJseSBpbXBsZW1lbnRhdGlvbnMgbm90IHN1cHBvcnRzIGNoYWluaW5nXG4gICAgdmFyIEhBU05UX0NIQUlOSU5HID0gaW5zdGFuY2VbQURERVJdKElTX1dFQUsgPyB7fSA6IC0wLCAxKSAhPSBpbnN0YW5jZTtcbiAgICAvLyBWOCB+ICBDaHJvbWl1bSA0MC0gd2Vhay1jb2xsZWN0aW9ucyB0aHJvd3Mgb24gcHJpbWl0aXZlcywgYnV0IHNob3VsZCByZXR1cm4gZmFsc2VcbiAgICB2YXIgVEhST1dTX09OX1BSSU1JVElWRVMgPSBmYWlscyhmdW5jdGlvbiAoKSB7IGluc3RhbmNlLmhhcygxKTsgfSk7XG4gICAgLy8gbW9zdCBlYXJseSBpbXBsZW1lbnRhdGlvbnMgZG9lc24ndCBzdXBwb3J0cyBpdGVyYWJsZXMsIG1vc3QgbW9kZXJuIC0gbm90IGNsb3NlIGl0IGNvcnJlY3RseVxuICAgIHZhciBBQ0NFUFRfSVRFUkFCTEVTID0gJGl0ZXJEZXRlY3QoZnVuY3Rpb24gKGl0ZXIpIHsgbmV3IEMoaXRlcik7IH0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuICAgIC8vIGZvciBlYXJseSBpbXBsZW1lbnRhdGlvbnMgLTAgYW5kICswIG5vdCB0aGUgc2FtZVxuICAgIHZhciBCVUdHWV9aRVJPID0gIUlTX1dFQUsgJiYgZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgICAgLy8gVjggfiBDaHJvbWl1bSA0Mi0gZmFpbHMgb25seSB3aXRoIDUrIGVsZW1lbnRzXG4gICAgICB2YXIgJGluc3RhbmNlID0gbmV3IEMoKTtcbiAgICAgIHZhciBpbmRleCA9IDU7XG4gICAgICB3aGlsZSAoaW5kZXgtLSkgJGluc3RhbmNlW0FEREVSXShpbmRleCwgaW5kZXgpO1xuICAgICAgcmV0dXJuICEkaW5zdGFuY2UuaGFzKC0wKTtcbiAgICB9KTtcbiAgICBpZiAoIUFDQ0VQVF9JVEVSQUJMRVMpIHtcbiAgICAgIEMgPSB3cmFwcGVyKGZ1bmN0aW9uICh0YXJnZXQsIGl0ZXJhYmxlKSB7XG4gICAgICAgIGFuSW5zdGFuY2UodGFyZ2V0LCBDLCBOQU1FKTtcbiAgICAgICAgdmFyIHRoYXQgPSBpbmhlcml0SWZSZXF1aXJlZChuZXcgQmFzZSgpLCB0YXJnZXQsIEMpO1xuICAgICAgICBpZiAoaXRlcmFibGUgIT0gdW5kZWZpbmVkKSBmb3JPZihpdGVyYWJsZSwgSVNfTUFQLCB0aGF0W0FEREVSXSwgdGhhdCk7XG4gICAgICAgIHJldHVybiB0aGF0O1xuICAgICAgfSk7XG4gICAgICBDLnByb3RvdHlwZSA9IHByb3RvO1xuICAgICAgcHJvdG8uY29uc3RydWN0b3IgPSBDO1xuICAgIH1cbiAgICBpZiAoVEhST1dTX09OX1BSSU1JVElWRVMgfHwgQlVHR1lfWkVSTykge1xuICAgICAgZml4TWV0aG9kKCdkZWxldGUnKTtcbiAgICAgIGZpeE1ldGhvZCgnaGFzJyk7XG4gICAgICBJU19NQVAgJiYgZml4TWV0aG9kKCdnZXQnKTtcbiAgICB9XG4gICAgaWYgKEJVR0dZX1pFUk8gfHwgSEFTTlRfQ0hBSU5JTkcpIGZpeE1ldGhvZChBRERFUik7XG4gICAgLy8gd2VhayBjb2xsZWN0aW9ucyBzaG91bGQgbm90IGNvbnRhaW5zIC5jbGVhciBtZXRob2RcbiAgICBpZiAoSVNfV0VBSyAmJiBwcm90by5jbGVhcikgZGVsZXRlIHByb3RvLmNsZWFyO1xuICB9XG5cbiAgc2V0VG9TdHJpbmdUYWcoQywgTkFNRSk7XG5cbiAgT1tOQU1FXSA9IEM7XG4gICRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogKEMgIT0gQmFzZSksIE8pO1xuXG4gIGlmICghSVNfV0VBSykgY29tbW9uLnNldFN0cm9uZyhDLCBOQU1FLCBJU19NQVApO1xuXG4gIHJldHVybiBDO1xufTtcbiIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7IHZlcnNpb246ICcyLjUuNycgfTtcbmlmICh0eXBlb2YgX19lID09ICdudW1iZXInKSBfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4iLCIndXNlIHN0cmljdCc7XG52YXIgJGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBpbmRleCwgdmFsdWUpIHtcbiAgaWYgKGluZGV4IGluIG9iamVjdCkgJGRlZmluZVByb3BlcnR5LmYob2JqZWN0LCBpbmRleCwgY3JlYXRlRGVzYygwLCB2YWx1ZSkpO1xuICBlbHNlIG9iamVjdFtpbmRleF0gPSB2YWx1ZTtcbn07XG4iLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbiwgdGhhdCwgbGVuZ3RoKSB7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmICh0aGF0ID09PSB1bmRlZmluZWQpIHJldHVybiBmbjtcbiAgc3dpdGNoIChsZW5ndGgpIHtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbiAoYSkge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24gKC8qIC4uLmFyZ3MgKi8pIHtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG4iLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ID09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50O1xuLy8gdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCcgaW4gb2xkIElFXG52YXIgaXMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcbiIsIi8vIElFIDgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gKFxuICAnY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mJ1xuKS5zcGxpdCgnLCcpO1xuIiwiLy8gYWxsIGVudW1lcmFibGUgb2JqZWN0IGtleXMsIGluY2x1ZGVzIHN5bWJvbHNcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciBnT1BTID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKTtcbnZhciBwSUUgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgcmVzdWx0ID0gZ2V0S2V5cyhpdCk7XG4gIHZhciBnZXRTeW1ib2xzID0gZ09QUy5mO1xuICBpZiAoZ2V0U3ltYm9scykge1xuICAgIHZhciBzeW1ib2xzID0gZ2V0U3ltYm9scyhpdCk7XG4gICAgdmFyIGlzRW51bSA9IHBJRS5mO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIga2V5O1xuICAgIHdoaWxlIChzeW1ib2xzLmxlbmd0aCA+IGkpIGlmIChpc0VudW0uY2FsbChpdCwga2V5ID0gc3ltYm9sc1tpKytdKSkgcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG52YXIgJGV4cG9ydCA9IGZ1bmN0aW9uICh0eXBlLCBuYW1lLCBzb3VyY2UpIHtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkY7XG4gIHZhciBJU19HTE9CQUwgPSB0eXBlICYgJGV4cG9ydC5HO1xuICB2YXIgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuUztcbiAgdmFyIElTX1BST1RPID0gdHlwZSAmICRleHBvcnQuUDtcbiAgdmFyIElTX0JJTkQgPSB0eXBlICYgJGV4cG9ydC5CO1xuICB2YXIgdGFyZ2V0ID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIHx8IChnbG9iYWxbbmFtZV0gPSB7fSkgOiAoZ2xvYmFsW25hbWVdIHx8IHt9KVtQUk9UT1RZUEVdO1xuICB2YXIgZXhwb3J0cyA9IElTX0dMT0JBTCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pO1xuICB2YXIgZXhwUHJvdG8gPSBleHBvcnRzW1BST1RPVFlQRV0gfHwgKGV4cG9ydHNbUFJPVE9UWVBFXSA9IHt9KTtcbiAgdmFyIGtleSwgb3duLCBvdXQsIGV4cDtcbiAgaWYgKElTX0dMT0JBTCkgc291cmNlID0gbmFtZTtcbiAgZm9yIChrZXkgaW4gc291cmNlKSB7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYgdGFyZ2V0W2tleV0gIT09IHVuZGVmaW5lZDtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IChvd24gPyB0YXJnZXQgOiBzb3VyY2UpW2tleV07XG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICBleHAgPSBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHRlbmQgZ2xvYmFsXG4gICAgaWYgKHRhcmdldCkgcmVkZWZpbmUodGFyZ2V0LCBrZXksIG91dCwgdHlwZSAmICRleHBvcnQuVSk7XG4gICAgLy8gZXhwb3J0XG4gICAgaWYgKGV4cG9ydHNba2V5XSAhPSBvdXQpIGhpZGUoZXhwb3J0cywga2V5LCBleHApO1xuICAgIGlmIChJU19QUk9UTyAmJiBleHBQcm90b1trZXldICE9IG91dCkgZXhwUHJvdG9ba2V5XSA9IG91dDtcbiAgfVxufTtcbmdsb2JhbC5jb3JlID0gY29yZTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuJGV4cG9ydC5VID0gNjQ7ICAvLyBzYWZlXG4kZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbnZhciB3a3MgPSByZXF1aXJlKCcuL193a3MnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoS0VZLCBsZW5ndGgsIGV4ZWMpIHtcbiAgdmFyIFNZTUJPTCA9IHdrcyhLRVkpO1xuICB2YXIgZm5zID0gZXhlYyhkZWZpbmVkLCBTWU1CT0wsICcnW0tFWV0pO1xuICB2YXIgc3RyZm4gPSBmbnNbMF07XG4gIHZhciByeGZuID0gZm5zWzFdO1xuICBpZiAoZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIHZhciBPID0ge307XG4gICAgT1tTWU1CT0xdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfTtcbiAgICByZXR1cm4gJydbS0VZXShPKSAhPSA3O1xuICB9KSkge1xuICAgIHJlZGVmaW5lKFN0cmluZy5wcm90b3R5cGUsIEtFWSwgc3RyZm4pO1xuICAgIGhpZGUoUmVnRXhwLnByb3RvdHlwZSwgU1lNQk9MLCBsZW5ndGggPT0gMlxuICAgICAgLy8gMjEuMi41LjggUmVnRXhwLnByb3RvdHlwZVtAQHJlcGxhY2VdKHN0cmluZywgcmVwbGFjZVZhbHVlKVxuICAgICAgLy8gMjEuMi41LjExIFJlZ0V4cC5wcm90b3R5cGVbQEBzcGxpdF0oc3RyaW5nLCBsaW1pdClcbiAgICAgID8gZnVuY3Rpb24gKHN0cmluZywgYXJnKSB7IHJldHVybiByeGZuLmNhbGwoc3RyaW5nLCB0aGlzLCBhcmcpOyB9XG4gICAgICAvLyAyMS4yLjUuNiBSZWdFeHAucHJvdG90eXBlW0BAbWF0Y2hdKHN0cmluZylcbiAgICAgIC8vIDIxLjIuNS45IFJlZ0V4cC5wcm90b3R5cGVbQEBzZWFyY2hdKHN0cmluZylcbiAgICAgIDogZnVuY3Rpb24gKHN0cmluZykgeyByZXR1cm4gcnhmbi5jYWxsKHN0cmluZywgdGhpcyk7IH1cbiAgICApO1xuICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMjEuMi41LjMgZ2V0IFJlZ0V4cC5wcm90b3R5cGUuZmxhZ3NcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciB0aGF0ID0gYW5PYmplY3QodGhpcyk7XG4gIHZhciByZXN1bHQgPSAnJztcbiAgaWYgKHRoYXQuZ2xvYmFsKSByZXN1bHQgKz0gJ2cnO1xuICBpZiAodGhhdC5pZ25vcmVDYXNlKSByZXN1bHQgKz0gJ2knO1xuICBpZiAodGhhdC5tdWx0aWxpbmUpIHJlc3VsdCArPSAnbSc7XG4gIGlmICh0aGF0LnVuaWNvZGUpIHJlc3VsdCArPSAndSc7XG4gIGlmICh0aGF0LnN0aWNreSkgcmVzdWx0ICs9ICd5JztcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCJ2YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4vX2l0ZXItY2FsbCcpO1xudmFyIGlzQXJyYXlJdGVyID0gcmVxdWlyZSgnLi9faXMtYXJyYXktaXRlcicpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciBnZXRJdGVyRm4gPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xudmFyIEJSRUFLID0ge307XG52YXIgUkVUVVJOID0ge307XG52YXIgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXJhYmxlLCBlbnRyaWVzLCBmbiwgdGhhdCwgSVRFUkFUT1IpIHtcbiAgdmFyIGl0ZXJGbiA9IElURVJBVE9SID8gZnVuY3Rpb24gKCkgeyByZXR1cm4gaXRlcmFibGU7IH0gOiBnZXRJdGVyRm4oaXRlcmFibGUpO1xuICB2YXIgZiA9IGN0eChmbiwgdGhhdCwgZW50cmllcyA/IDIgOiAxKTtcbiAgdmFyIGluZGV4ID0gMDtcbiAgdmFyIGxlbmd0aCwgc3RlcCwgaXRlcmF0b3IsIHJlc3VsdDtcbiAgaWYgKHR5cGVvZiBpdGVyRm4gIT0gJ2Z1bmN0aW9uJykgdGhyb3cgVHlwZUVycm9yKGl0ZXJhYmxlICsgJyBpcyBub3QgaXRlcmFibGUhJyk7XG4gIC8vIGZhc3QgY2FzZSBmb3IgYXJyYXlzIHdpdGggZGVmYXVsdCBpdGVyYXRvclxuICBpZiAoaXNBcnJheUl0ZXIoaXRlckZuKSkgZm9yIChsZW5ndGggPSB0b0xlbmd0aChpdGVyYWJsZS5sZW5ndGgpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuICAgIHJlc3VsdCA9IGVudHJpZXMgPyBmKGFuT2JqZWN0KHN0ZXAgPSBpdGVyYWJsZVtpbmRleF0pWzBdLCBzdGVwWzFdKSA6IGYoaXRlcmFibGVbaW5kZXhdKTtcbiAgICBpZiAocmVzdWx0ID09PSBCUkVBSyB8fCByZXN1bHQgPT09IFJFVFVSTikgcmV0dXJuIHJlc3VsdDtcbiAgfSBlbHNlIGZvciAoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChpdGVyYWJsZSk7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTspIHtcbiAgICByZXN1bHQgPSBjYWxsKGl0ZXJhdG9yLCBmLCBzdGVwLnZhbHVlLCBlbnRyaWVzKTtcbiAgICBpZiAocmVzdWx0ID09PSBCUkVBSyB8fCByZXN1bHQgPT09IFJFVFVSTikgcmV0dXJuIHJlc3VsdDtcbiAgfVxufTtcbmV4cG9ydHMuQlJFQUsgPSBCUkVBSztcbmV4cG9ydHMuUkVUVVJOID0gUkVUVVJOO1xuIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYgKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpIF9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuIiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xufTtcbiIsInZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHJldHVybiBkUC5mKG9iamVjdCwga2V5LCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcbiIsInZhciBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50O1xubW9kdWxlLmV4cG9ydHMgPSBkb2N1bWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4iLCJtb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2RpdicpLCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19zZXQtcHJvdG8nKS5zZXQ7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0aGF0LCB0YXJnZXQsIEMpIHtcbiAgdmFyIFMgPSB0YXJnZXQuY29uc3RydWN0b3I7XG4gIHZhciBQO1xuICBpZiAoUyAhPT0gQyAmJiB0eXBlb2YgUyA9PSAnZnVuY3Rpb24nICYmIChQID0gUy5wcm90b3R5cGUpICE9PSBDLnByb3RvdHlwZSAmJiBpc09iamVjdChQKSAmJiBzZXRQcm90b3R5cGVPZikge1xuICAgIHNldFByb3RvdHlwZU9mKHRoYXQsIFApO1xuICB9IHJldHVybiB0aGF0O1xufTtcbiIsIi8vIGZhc3QgYXBwbHksIGh0dHA6Ly9qc3BlcmYubG5raXQuY29tL2Zhc3QtYXBwbHkvNVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4sIGFyZ3MsIHRoYXQpIHtcbiAgdmFyIHVuID0gdGhhdCA9PT0gdW5kZWZpbmVkO1xuICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XG4gICAgY2FzZSAwOiByZXR1cm4gdW4gPyBmbigpXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQpO1xuICAgIGNhc2UgMTogcmV0dXJuIHVuID8gZm4oYXJnc1swXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSk7XG4gICAgY2FzZSAyOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICBjYXNlIDM6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICAgIGNhc2UgNDogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSk7XG4gIH0gcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3MpO1xufTtcbiIsIi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbn07XG4iLCIvLyBjaGVjayBvbiBkZWZhdWx0IEFycmF5IGl0ZXJhdG9yXG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgIT09IHVuZGVmaW5lZCAmJiAoSXRlcmF0b3JzLkFycmF5ID09PSBpdCB8fCBBcnJheVByb3RvW0lURVJBVE9SXSA9PT0gaXQpO1xufTtcbiIsIi8vIDcuMi4yIElzQXJyYXkoYXJndW1lbnQpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gaXNBcnJheShhcmcpIHtcbiAgcmV0dXJuIGNvZihhcmcpID09ICdBcnJheSc7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG4iLCIvLyA3LjIuOCBJc1JlZ0V4cChhcmd1bWVudClcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xudmFyIE1BVENIID0gcmVxdWlyZSgnLi9fd2tzJykoJ21hdGNoJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgaXNSZWdFeHA7XG4gIHJldHVybiBpc09iamVjdChpdCkgJiYgKChpc1JlZ0V4cCA9IGl0W01BVENIXSkgIT09IHVuZGVmaW5lZCA/ICEhaXNSZWdFeHAgOiBjb2YoaXQpID09ICdSZWdFeHAnKTtcbn07XG4iLCIvLyBjYWxsIHNvbWV0aGluZyBvbiBpdGVyYXRvciBzdGVwIHdpdGggc2FmZSBjbG9zaW5nIG9uIGVycm9yXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXJhdG9yLCBmbiwgdmFsdWUsIGVudHJpZXMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZW50cmllcyA/IGZuKGFuT2JqZWN0KHZhbHVlKVswXSwgdmFsdWVbMV0pIDogZm4odmFsdWUpO1xuICAvLyA3LjQuNiBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBjb21wbGV0aW9uKVxuICB9IGNhdGNoIChlKSB7XG4gICAgdmFyIHJldCA9IGl0ZXJhdG9yWydyZXR1cm4nXTtcbiAgICBpZiAocmV0ICE9PSB1bmRlZmluZWQpIGFuT2JqZWN0KHJldC5jYWxsKGl0ZXJhdG9yKSk7XG4gICAgdGhyb3cgZTtcbiAgfVxufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJyk7XG52YXIgZGVzY3JpcHRvciA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcblxuLy8gMjUuMS4yLjEuMSAlSXRlcmF0b3JQcm90b3R5cGUlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2hpZGUnKShJdGVyYXRvclByb3RvdHlwZSwgcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyksIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCkge1xuICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBjcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUsIHsgbmV4dDogZGVzY3JpcHRvcigxLCBuZXh0KSB9KTtcbiAgc2V0VG9TdHJpbmdUYWcoQ29uc3RydWN0b3IsIE5BTUUgKyAnIEl0ZXJhdG9yJyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgPSByZXF1aXJlKCcuL19saWJyYXJ5Jyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyICRpdGVyQ3JlYXRlID0gcmVxdWlyZSgnLi9faXRlci1jcmVhdGUnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBCVUdHWSA9ICEoW10ua2V5cyAmJiAnbmV4dCcgaW4gW10ua2V5cygpKTsgLy8gU2FmYXJpIGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxudmFyIEZGX0lURVJBVE9SID0gJ0BAaXRlcmF0b3InO1xudmFyIEtFWVMgPSAna2V5cyc7XG52YXIgVkFMVUVTID0gJ3ZhbHVlcyc7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQmFzZSwgTkFNRSwgQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0VEKSB7XG4gICRpdGVyQ3JlYXRlKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcbiAgdmFyIGdldE1ldGhvZCA9IGZ1bmN0aW9uIChraW5kKSB7XG4gICAgaWYgKCFCVUdHWSAmJiBraW5kIGluIHByb3RvKSByZXR1cm4gcHJvdG9ba2luZF07XG4gICAgc3dpdGNoIChraW5kKSB7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgICAgY2FzZSBWQUxVRVM6IHJldHVybiBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgfSByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgfTtcbiAgdmFyIFRBRyA9IE5BTUUgKyAnIEl0ZXJhdG9yJztcbiAgdmFyIERFRl9WQUxVRVMgPSBERUZBVUxUID09IFZBTFVFUztcbiAgdmFyIFZBTFVFU19CVUcgPSBmYWxzZTtcbiAgdmFyIHByb3RvID0gQmFzZS5wcm90b3R5cGU7XG4gIHZhciAkbmF0aXZlID0gcHJvdG9bSVRFUkFUT1JdIHx8IHByb3RvW0ZGX0lURVJBVE9SXSB8fCBERUZBVUxUICYmIHByb3RvW0RFRkFVTFRdO1xuICB2YXIgJGRlZmF1bHQgPSAkbmF0aXZlIHx8IGdldE1ldGhvZChERUZBVUxUKTtcbiAgdmFyICRlbnRyaWVzID0gREVGQVVMVCA/ICFERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoJ2VudHJpZXMnKSA6IHVuZGVmaW5lZDtcbiAgdmFyICRhbnlOYXRpdmUgPSBOQU1FID09ICdBcnJheScgPyBwcm90by5lbnRyaWVzIHx8ICRuYXRpdmUgOiAkbmF0aXZlO1xuICB2YXIgbWV0aG9kcywga2V5LCBJdGVyYXRvclByb3RvdHlwZTtcbiAgLy8gRml4IG5hdGl2ZVxuICBpZiAoJGFueU5hdGl2ZSkge1xuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoJGFueU5hdGl2ZS5jYWxsKG5ldyBCYXNlKCkpKTtcbiAgICBpZiAoSXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUgJiYgSXRlcmF0b3JQcm90b3R5cGUubmV4dCkge1xuICAgICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgICAgc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JQcm90b3R5cGUsIFRBRywgdHJ1ZSk7XG4gICAgICAvLyBmaXggZm9yIHNvbWUgb2xkIGVuZ2luZXNcbiAgICAgIGlmICghTElCUkFSWSAmJiB0eXBlb2YgSXRlcmF0b3JQcm90b3R5cGVbSVRFUkFUT1JdICE9ICdmdW5jdGlvbicpIGhpZGUoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcbiAgICB9XG4gIH1cbiAgLy8gZml4IEFycmF5I3t2YWx1ZXMsIEBAaXRlcmF0b3J9Lm5hbWUgaW4gVjggLyBGRlxuICBpZiAoREVGX1ZBTFVFUyAmJiAkbmF0aXZlICYmICRuYXRpdmUubmFtZSAhPT0gVkFMVUVTKSB7XG4gICAgVkFMVUVTX0JVRyA9IHRydWU7XG4gICAgJGRlZmF1bHQgPSBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiAkbmF0aXZlLmNhbGwodGhpcyk7IH07XG4gIH1cbiAgLy8gRGVmaW5lIGl0ZXJhdG9yXG4gIGlmICgoIUxJQlJBUlkgfHwgRk9SQ0VEKSAmJiAoQlVHR1kgfHwgVkFMVUVTX0JVRyB8fCAhcHJvdG9bSVRFUkFUT1JdKSkge1xuICAgIGhpZGUocHJvdG8sIElURVJBVE9SLCAkZGVmYXVsdCk7XG4gIH1cbiAgLy8gUGx1ZyBmb3IgbGlicmFyeVxuICBJdGVyYXRvcnNbTkFNRV0gPSAkZGVmYXVsdDtcbiAgSXRlcmF0b3JzW1RBR10gPSByZXR1cm5UaGlzO1xuICBpZiAoREVGQVVMVCkge1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICB2YWx1ZXM6IERFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChWQUxVRVMpLFxuICAgICAga2V5czogSVNfU0VUID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiAkZW50cmllc1xuICAgIH07XG4gICAgaWYgKEZPUkNFRCkgZm9yIChrZXkgaW4gbWV0aG9kcykge1xuICAgICAgaWYgKCEoa2V5IGluIHByb3RvKSkgcmVkZWZpbmUocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcbiAgICB9IGVsc2UgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoQlVHR1kgfHwgVkFMVUVTX0JVRyksIE5BTUUsIG1ldGhvZHMpO1xuICB9XG4gIHJldHVybiBtZXRob2RzO1xufTtcbiIsInZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIFNBRkVfQ0xPU0lORyA9IGZhbHNlO1xuXG50cnkge1xuICB2YXIgcml0ZXIgPSBbN11bSVRFUkFUT1JdKCk7XG4gIHJpdGVyWydyZXR1cm4nXSA9IGZ1bmN0aW9uICgpIHsgU0FGRV9DTE9TSU5HID0gdHJ1ZTsgfTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXRocm93LWxpdGVyYWxcbiAgQXJyYXkuZnJvbShyaXRlciwgZnVuY3Rpb24gKCkgeyB0aHJvdyAyOyB9KTtcbn0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjLCBza2lwQ2xvc2luZykge1xuICBpZiAoIXNraXBDbG9zaW5nICYmICFTQUZFX0NMT1NJTkcpIHJldHVybiBmYWxzZTtcbiAgdmFyIHNhZmUgPSBmYWxzZTtcbiAgdHJ5IHtcbiAgICB2YXIgYXJyID0gWzddO1xuICAgIHZhciBpdGVyID0gYXJyW0lURVJBVE9SXSgpO1xuICAgIGl0ZXIubmV4dCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHsgZG9uZTogc2FmZSA9IHRydWUgfTsgfTtcbiAgICBhcnJbSVRFUkFUT1JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gaXRlcjsgfTtcbiAgICBleGVjKGFycik7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICByZXR1cm4gc2FmZTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkb25lLCB2YWx1ZSkge1xuICByZXR1cm4geyB2YWx1ZTogdmFsdWUsIGRvbmU6ICEhZG9uZSB9O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge307XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZhbHNlO1xuIiwidmFyIE1FVEEgPSByZXF1aXJlKCcuL191aWQnKSgnbWV0YScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgc2V0RGVzYyA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgaWQgPSAwO1xudmFyIGlzRXh0ZW5zaWJsZSA9IE9iamVjdC5pc0V4dGVuc2libGUgfHwgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdHJ1ZTtcbn07XG52YXIgRlJFRVpFID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gaXNFeHRlbnNpYmxlKE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucyh7fSkpO1xufSk7XG52YXIgc2V0TWV0YSA9IGZ1bmN0aW9uIChpdCkge1xuICBzZXREZXNjKGl0LCBNRVRBLCB7IHZhbHVlOiB7XG4gICAgaTogJ08nICsgKytpZCwgLy8gb2JqZWN0IElEXG4gICAgdzoge30gICAgICAgICAgLy8gd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfSB9KTtcbn07XG52YXIgZmFzdEtleSA9IGZ1bmN0aW9uIChpdCwgY3JlYXRlKSB7XG4gIC8vIHJldHVybiBwcmltaXRpdmUgd2l0aCBwcmVmaXhcbiAgaWYgKCFpc09iamVjdChpdCkpIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCcgPyBpdCA6ICh0eXBlb2YgaXQgPT0gJ3N0cmluZycgPyAnUycgOiAnUCcpICsgaXQ7XG4gIGlmICghaGFzKGl0LCBNRVRBKSkge1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYgKCFpc0V4dGVuc2libGUoaXQpKSByZXR1cm4gJ0YnO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYgKCFjcmVhdGUpIHJldHVybiAnRSc7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIG9iamVjdCBJRFxuICB9IHJldHVybiBpdFtNRVRBXS5pO1xufTtcbnZhciBnZXRXZWFrID0gZnVuY3Rpb24gKGl0LCBjcmVhdGUpIHtcbiAgaWYgKCFoYXMoaXQsIE1FVEEpKSB7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZiAoIWlzRXh0ZW5zaWJsZShpdCkpIHJldHVybiB0cnVlO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYgKCFjcmVhdGUpIHJldHVybiBmYWxzZTtcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gaGFzaCB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9IHJldHVybiBpdFtNRVRBXS53O1xufTtcbi8vIGFkZCBtZXRhZGF0YSBvbiBmcmVlemUtZmFtaWx5IG1ldGhvZHMgY2FsbGluZ1xudmFyIG9uRnJlZXplID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChGUkVFWkUgJiYgbWV0YS5ORUVEICYmIGlzRXh0ZW5zaWJsZShpdCkgJiYgIWhhcyhpdCwgTUVUQSkpIHNldE1ldGEoaXQpO1xuICByZXR1cm4gaXQ7XG59O1xudmFyIG1ldGEgPSBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgS0VZOiBNRVRBLFxuICBORUVEOiBmYWxzZSxcbiAgZmFzdEtleTogZmFzdEtleSxcbiAgZ2V0V2VhazogZ2V0V2VhayxcbiAgb25GcmVlemU6IG9uRnJlZXplXG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIG1hY3JvdGFzayA9IHJlcXVpcmUoJy4vX3Rhc2snKS5zZXQ7XG52YXIgT2JzZXJ2ZXIgPSBnbG9iYWwuTXV0YXRpb25PYnNlcnZlciB8fCBnbG9iYWwuV2ViS2l0TXV0YXRpb25PYnNlcnZlcjtcbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgUHJvbWlzZSA9IGdsb2JhbC5Qcm9taXNlO1xudmFyIGlzTm9kZSA9IHJlcXVpcmUoJy4vX2NvZicpKHByb2Nlc3MpID09ICdwcm9jZXNzJztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBoZWFkLCBsYXN0LCBub3RpZnk7XG5cbiAgdmFyIGZsdXNoID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBwYXJlbnQsIGZuO1xuICAgIGlmIChpc05vZGUgJiYgKHBhcmVudCA9IHByb2Nlc3MuZG9tYWluKSkgcGFyZW50LmV4aXQoKTtcbiAgICB3aGlsZSAoaGVhZCkge1xuICAgICAgZm4gPSBoZWFkLmZuO1xuICAgICAgaGVhZCA9IGhlYWQubmV4dDtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZuKCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGlmIChoZWFkKSBub3RpZnkoKTtcbiAgICAgICAgZWxzZSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH0gbGFzdCA9IHVuZGVmaW5lZDtcbiAgICBpZiAocGFyZW50KSBwYXJlbnQuZW50ZXIoKTtcbiAgfTtcblxuICAvLyBOb2RlLmpzXG4gIGlmIChpc05vZGUpIHtcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGZsdXNoKTtcbiAgICB9O1xuICAvLyBicm93c2VycyB3aXRoIE11dGF0aW9uT2JzZXJ2ZXIsIGV4Y2VwdCBpT1MgU2FmYXJpIC0gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzMzOVxuICB9IGVsc2UgaWYgKE9ic2VydmVyICYmICEoZ2xvYmFsLm5hdmlnYXRvciAmJiBnbG9iYWwubmF2aWdhdG9yLnN0YW5kYWxvbmUpKSB7XG4gICAgdmFyIHRvZ2dsZSA9IHRydWU7XG4gICAgdmFyIG5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gICAgbmV3IE9ic2VydmVyKGZsdXNoKS5vYnNlcnZlKG5vZGUsIHsgY2hhcmFjdGVyRGF0YTogdHJ1ZSB9KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXdcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBub2RlLmRhdGEgPSB0b2dnbGUgPSAhdG9nZ2xlO1xuICAgIH07XG4gIC8vIGVudmlyb25tZW50cyB3aXRoIG1heWJlIG5vbi1jb21wbGV0ZWx5IGNvcnJlY3QsIGJ1dCBleGlzdGVudCBQcm9taXNlXG4gIH0gZWxzZSBpZiAoUHJvbWlzZSAmJiBQcm9taXNlLnJlc29sdmUpIHtcbiAgICAvLyBQcm9taXNlLnJlc29sdmUgd2l0aG91dCBhbiBhcmd1bWVudCB0aHJvd3MgYW4gZXJyb3IgaW4gTEcgV2ViT1MgMlxuICAgIHZhciBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKHVuZGVmaW5lZCk7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcHJvbWlzZS50aGVuKGZsdXNoKTtcbiAgICB9O1xuICAvLyBmb3Igb3RoZXIgZW52aXJvbm1lbnRzIC0gbWFjcm90YXNrIGJhc2VkIG9uOlxuICAvLyAtIHNldEltbWVkaWF0ZVxuICAvLyAtIE1lc3NhZ2VDaGFubmVsXG4gIC8vIC0gd2luZG93LnBvc3RNZXNzYWdcbiAgLy8gLSBvbnJlYWR5c3RhdGVjaGFuZ2VcbiAgLy8gLSBzZXRUaW1lb3V0XG4gIH0gZWxzZSB7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gc3RyYW5nZSBJRSArIHdlYnBhY2sgZGV2IHNlcnZlciBidWcgLSB1c2UgLmNhbGwoZ2xvYmFsKVxuICAgICAgbWFjcm90YXNrLmNhbGwoZ2xvYmFsLCBmbHVzaCk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoZm4pIHtcbiAgICB2YXIgdGFzayA9IHsgZm46IGZuLCBuZXh0OiB1bmRlZmluZWQgfTtcbiAgICBpZiAobGFzdCkgbGFzdC5uZXh0ID0gdGFzaztcbiAgICBpZiAoIWhlYWQpIHtcbiAgICAgIGhlYWQgPSB0YXNrO1xuICAgICAgbm90aWZ5KCk7XG4gICAgfSBsYXN0ID0gdGFzaztcbiAgfTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG4vLyAyNS40LjEuNSBOZXdQcm9taXNlQ2FwYWJpbGl0eShDKVxudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcblxuZnVuY3Rpb24gUHJvbWlzZUNhcGFiaWxpdHkoQykge1xuICB2YXIgcmVzb2x2ZSwgcmVqZWN0O1xuICB0aGlzLnByb21pc2UgPSBuZXcgQyhmdW5jdGlvbiAoJCRyZXNvbHZlLCAkJHJlamVjdCkge1xuICAgIGlmIChyZXNvbHZlICE9PSB1bmRlZmluZWQgfHwgcmVqZWN0ICE9PSB1bmRlZmluZWQpIHRocm93IFR5cGVFcnJvcignQmFkIFByb21pc2UgY29uc3RydWN0b3InKTtcbiAgICByZXNvbHZlID0gJCRyZXNvbHZlO1xuICAgIHJlamVjdCA9ICQkcmVqZWN0O1xuICB9KTtcbiAgdGhpcy5yZXNvbHZlID0gYUZ1bmN0aW9uKHJlc29sdmUpO1xuICB0aGlzLnJlamVjdCA9IGFGdW5jdGlvbihyZWplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cy5mID0gZnVuY3Rpb24gKEMpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlQ2FwYWJpbGl0eShDKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG4vLyAxOS4xLjIuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlLCAuLi4pXG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG52YXIgZ09QUyA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJyk7XG52YXIgcElFID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKTtcbnZhciAkYXNzaWduID0gT2JqZWN0LmFzc2lnbjtcblxuLy8gc2hvdWxkIHdvcmsgd2l0aCBzeW1ib2xzIGFuZCBzaG91bGQgaGF2ZSBkZXRlcm1pbmlzdGljIHByb3BlcnR5IG9yZGVyIChWOCBidWcpXG5tb2R1bGUuZXhwb3J0cyA9ICEkYXNzaWduIHx8IHJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICB2YXIgQSA9IHt9O1xuICB2YXIgQiA9IHt9O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIFMgPSBTeW1ib2woKTtcbiAgdmFyIEsgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3QnO1xuICBBW1NdID0gNztcbiAgSy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAoaykgeyBCW2tdID0gazsgfSk7XG4gIHJldHVybiAkYXNzaWduKHt9LCBBKVtTXSAhPSA3IHx8IE9iamVjdC5rZXlzKCRhc3NpZ24oe30sIEIpKS5qb2luKCcnKSAhPSBLO1xufSkgPyBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCBzb3VyY2UpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICB2YXIgVCA9IHRvT2JqZWN0KHRhcmdldCk7XG4gIHZhciBhTGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgdmFyIGluZGV4ID0gMTtcbiAgdmFyIGdldFN5bWJvbHMgPSBnT1BTLmY7XG4gIHZhciBpc0VudW0gPSBwSUUuZjtcbiAgd2hpbGUgKGFMZW4gPiBpbmRleCkge1xuICAgIHZhciBTID0gSU9iamVjdChhcmd1bWVudHNbaW5kZXgrK10pO1xuICAgIHZhciBrZXlzID0gZ2V0U3ltYm9scyA/IGdldEtleXMoUykuY29uY2F0KGdldFN5bWJvbHMoUykpIDogZ2V0S2V5cyhTKTtcbiAgICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gICAgdmFyIGogPSAwO1xuICAgIHZhciBrZXk7XG4gICAgd2hpbGUgKGxlbmd0aCA+IGopIGlmIChpc0VudW0uY2FsbChTLCBrZXkgPSBrZXlzW2orK10pKSBUW2tleV0gPSBTW2tleV07XG4gIH0gcmV0dXJuIFQ7XG59IDogJGFzc2lnbjtcbiIsIi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgZFBzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwcycpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xudmFyIEVtcHR5ID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgY3JlYXRlRGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgdmFyIGlmcmFtZSA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnaWZyYW1lJyk7XG4gIHZhciBpID0gZW51bUJ1Z0tleXMubGVuZ3RoO1xuICB2YXIgbHQgPSAnPCc7XG4gIHZhciBndCA9ICc+JztcbiAgdmFyIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgcmVxdWlyZSgnLi9faHRtbCcpLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZS5zcmMgPSAnamF2YXNjcmlwdDonOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNjcmlwdC11cmxcbiAgLy8gY3JlYXRlRGljdCA9IGlmcmFtZS5jb250ZW50V2luZG93Lk9iamVjdDtcbiAgLy8gaHRtbC5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKGx0ICsgJ3NjcmlwdCcgKyBndCArICdkb2N1bWVudC5GPU9iamVjdCcgKyBsdCArICcvc2NyaXB0JyArIGd0KTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgY3JlYXRlRGljdCA9IGlmcmFtZURvY3VtZW50LkY7XG4gIHdoaWxlIChpLS0pIGRlbGV0ZSBjcmVhdGVEaWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbaV1dO1xuICByZXR1cm4gY3JlYXRlRGljdCgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmIChPICE9PSBudWxsKSB7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xuICAgIHJlc3VsdCA9IG5ldyBFbXB0eSgpO1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBudWxsO1xuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcbiAgfSBlbHNlIHJlc3VsdCA9IGNyZWF0ZURpY3QoKTtcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IGRQcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xufTtcbiIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGRQID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiBkUChPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIGlmICgnZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpIHRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhJyk7XG4gIGlmICgndmFsdWUnIGluIEF0dHJpYnV0ZXMpIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG4iLCJ2YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcykge1xuICBhbk9iamVjdChPKTtcbiAgdmFyIGtleXMgPSBnZXRLZXlzKFByb3BlcnRpZXMpO1xuICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIHZhciBpID0gMDtcbiAgdmFyIFA7XG4gIHdoaWxlIChsZW5ndGggPiBpKSBkUC5mKE8sIFAgPSBrZXlzW2krK10sIFByb3BlcnRpZXNbUF0pO1xuICByZXR1cm4gTztcbn07XG4iLCJ2YXIgcElFID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpO1xudmFyIGdPUEQgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZ09QRCA6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKSB7XG4gIE8gPSB0b0lPYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiBnT1BEKE8sIFApO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKGhhcyhPLCBQKSkgcmV0dXJuIGNyZWF0ZURlc2MoIXBJRS5mLmNhbGwoTywgUCksIE9bUF0pO1xufTtcbiIsIi8vIGZhbGxiYWNrIGZvciBJRTExIGJ1Z2d5IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHdpdGggaWZyYW1lIGFuZCB3aW5kb3dcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgZ09QTiA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZjtcbnZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG52YXIgd2luZG93TmFtZXMgPSB0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdyAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc1xuICA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHdpbmRvdykgOiBbXTtcblxudmFyIGdldFdpbmRvd05hbWVzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGdPUE4oaXQpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHdpbmRvd05hbWVzLnNsaWNlKCk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzLmYgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KSB7XG4gIHJldHVybiB3aW5kb3dOYW1lcyAmJiB0b1N0cmluZy5jYWxsKGl0KSA9PSAnW29iamVjdCBXaW5kb3ddJyA/IGdldFdpbmRvd05hbWVzKGl0KSA6IGdPUE4odG9JT2JqZWN0KGl0KSk7XG59O1xuIiwiLy8gMTkuMS4yLjcgLyAxNS4yLjMuNCBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpLmNvbmNhdCgnbGVuZ3RoJywgJ3Byb3RvdHlwZScpO1xuXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKE8pIHtcbiAgcmV0dXJuICRrZXlzKE8sIGhpZGRlbktleXMpO1xufTtcbiIsImV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG4iLCIvLyAxOS4xLjIuOSAvIDE1LjIuMy4yIE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG52YXIgT2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiAoTykge1xuICBPID0gdG9PYmplY3QoTyk7XG4gIGlmIChoYXMoTywgSUVfUFJPVE8pKSByZXR1cm4gT1tJRV9QUk9UT107XG4gIGlmICh0eXBlb2YgTy5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmIE8gaW5zdGFuY2VvZiBPLmNvbnN0cnVjdG9yKSB7XG4gICAgcmV0dXJuIE8uY29uc3RydWN0b3IucHJvdG90eXBlO1xuICB9IHJldHVybiBPIGluc3RhbmNlb2YgT2JqZWN0ID8gT2JqZWN0UHJvdG8gOiBudWxsO1xufTtcbiIsInZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgYXJyYXlJbmRleE9mID0gcmVxdWlyZSgnLi9fYXJyYXktaW5jbHVkZXMnKShmYWxzZSk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgbmFtZXMpIHtcbiAgdmFyIE8gPSB0b0lPYmplY3Qob2JqZWN0KTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBrZXk7XG4gIGZvciAoa2V5IGluIE8pIGlmIChrZXkgIT0gSUVfUFJPVE8pIGhhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIGlmIChoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpIHtcbiAgICB+YXJyYXlJbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwiLy8gMTkuMS4yLjE0IC8gMTUuMi4zLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTykge1xuICByZXR1cm4gJGtleXMoTywgZW51bUJ1Z0tleXMpO1xufTtcbiIsImV4cG9ydHMuZiA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuIiwiLy8gbW9zdCBPYmplY3QgbWV0aG9kcyBieSBFUzYgc2hvdWxkIGFjY2VwdCBwcmltaXRpdmVzXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoS0VZLCBleGVjKSB7XG4gIHZhciBmbiA9IChjb3JlLk9iamVjdCB8fCB7fSlbS0VZXSB8fCBPYmplY3RbS0VZXTtcbiAgdmFyIGV4cCA9IHt9O1xuICBleHBbS0VZXSA9IGV4ZWMoZm4pO1xuICAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIGZhaWxzKGZ1bmN0aW9uICgpIHsgZm4oMSk7IH0pLCAnT2JqZWN0JywgZXhwKTtcbn07XG4iLCJ2YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIGlzRW51bSA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKS5mO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXNFbnRyaWVzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoaXQpIHtcbiAgICB2YXIgTyA9IHRvSU9iamVjdChpdCk7XG4gICAgdmFyIGtleXMgPSBnZXRLZXlzKE8pO1xuICAgIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHZhciBrZXk7XG4gICAgd2hpbGUgKGxlbmd0aCA+IGkpIGlmIChpc0VudW0uY2FsbChPLCBrZXkgPSBrZXlzW2krK10pKSB7XG4gICAgICByZXN1bHQucHVzaChpc0VudHJpZXMgPyBba2V5LCBPW2tleV1dIDogT1trZXldKTtcbiAgICB9IHJldHVybiByZXN1bHQ7XG4gIH07XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiB7IGU6IGZhbHNlLCB2OiBleGVjKCkgfTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB7IGU6IHRydWUsIHY6IGUgfTtcbiAgfVxufTtcbiIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSByZXF1aXJlKCcuL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEMsIHgpIHtcbiAgYW5PYmplY3QoQyk7XG4gIGlmIChpc09iamVjdCh4KSAmJiB4LmNvbnN0cnVjdG9yID09PSBDKSByZXR1cm4geDtcbiAgdmFyIHByb21pc2VDYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkuZihDKTtcbiAgdmFyIHJlc29sdmUgPSBwcm9taXNlQ2FwYWJpbGl0eS5yZXNvbHZlO1xuICByZXNvbHZlKHgpO1xuICByZXR1cm4gcHJvbWlzZUNhcGFiaWxpdHkucHJvbWlzZTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChiaXRtYXAsIHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZTogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGU6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG59O1xuIiwidmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRhcmdldCwgc3JjLCBzYWZlKSB7XG4gIGZvciAodmFyIGtleSBpbiBzcmMpIHJlZGVmaW5lKHRhcmdldCwga2V5LCBzcmNba2V5XSwgc2FmZSk7XG4gIHJldHVybiB0YXJnZXQ7XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgU1JDID0gcmVxdWlyZSgnLi9fdWlkJykoJ3NyYycpO1xudmFyIFRPX1NUUklORyA9ICd0b1N0cmluZyc7XG52YXIgJHRvU3RyaW5nID0gRnVuY3Rpb25bVE9fU1RSSU5HXTtcbnZhciBUUEwgPSAoJycgKyAkdG9TdHJpbmcpLnNwbGl0KFRPX1NUUklORyk7XG5cbnJlcXVpcmUoJy4vX2NvcmUnKS5pbnNwZWN0U291cmNlID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiAkdG9TdHJpbmcuY2FsbChpdCk7XG59O1xuXG4obW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywga2V5LCB2YWwsIHNhZmUpIHtcbiAgdmFyIGlzRnVuY3Rpb24gPSB0eXBlb2YgdmFsID09ICdmdW5jdGlvbic7XG4gIGlmIChpc0Z1bmN0aW9uKSBoYXModmFsLCAnbmFtZScpIHx8IGhpZGUodmFsLCAnbmFtZScsIGtleSk7XG4gIGlmIChPW2tleV0gPT09IHZhbCkgcmV0dXJuO1xuICBpZiAoaXNGdW5jdGlvbikgaGFzKHZhbCwgU1JDKSB8fCBoaWRlKHZhbCwgU1JDLCBPW2tleV0gPyAnJyArIE9ba2V5XSA6IFRQTC5qb2luKFN0cmluZyhrZXkpKSk7XG4gIGlmIChPID09PSBnbG9iYWwpIHtcbiAgICBPW2tleV0gPSB2YWw7XG4gIH0gZWxzZSBpZiAoIXNhZmUpIHtcbiAgICBkZWxldGUgT1trZXldO1xuICAgIGhpZGUoTywga2V5LCB2YWwpO1xuICB9IGVsc2UgaWYgKE9ba2V5XSkge1xuICAgIE9ba2V5XSA9IHZhbDtcbiAgfSBlbHNlIHtcbiAgICBoaWRlKE8sIGtleSwgdmFsKTtcbiAgfVxuLy8gYWRkIGZha2UgRnVuY3Rpb24jdG9TdHJpbmcgZm9yIGNvcnJlY3Qgd29yayB3cmFwcGVkIG1ldGhvZHMgLyBjb25zdHJ1Y3RvcnMgd2l0aCBtZXRob2RzIGxpa2UgTG9EYXNoIGlzTmF0aXZlXG59KShGdW5jdGlvbi5wcm90b3R5cGUsIFRPX1NUUklORywgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gIHJldHVybiB0eXBlb2YgdGhpcyA9PSAnZnVuY3Rpb24nICYmIHRoaXNbU1JDXSB8fCAkdG9TdHJpbmcuY2FsbCh0aGlzKTtcbn0pO1xuIiwiLy8gV29ya3Mgd2l0aCBfX3Byb3RvX18gb25seS4gT2xkIHY4IGNhbid0IHdvcmsgd2l0aCBudWxsIHByb3RvIG9iamVjdHMuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90byAqL1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBjaGVjayA9IGZ1bmN0aW9uIChPLCBwcm90bykge1xuICBhbk9iamVjdChPKTtcbiAgaWYgKCFpc09iamVjdChwcm90bykgJiYgcHJvdG8gIT09IG51bGwpIHRocm93IFR5cGVFcnJvcihwcm90byArIFwiOiBjYW4ndCBzZXQgYXMgcHJvdG90eXBlIVwiKTtcbn07XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgKCdfX3Byb3RvX18nIGluIHt9ID8gLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgIGZ1bmN0aW9uICh0ZXN0LCBidWdneSwgc2V0KSB7XG4gICAgICB0cnkge1xuICAgICAgICBzZXQgPSByZXF1aXJlKCcuL19jdHgnKShGdW5jdGlvbi5jYWxsLCByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpLmYoT2JqZWN0LnByb3RvdHlwZSwgJ19fcHJvdG9fXycpLnNldCwgMik7XG4gICAgICAgIHNldCh0ZXN0LCBbXSk7XG4gICAgICAgIGJ1Z2d5ID0gISh0ZXN0IGluc3RhbmNlb2YgQXJyYXkpO1xuICAgICAgfSBjYXRjaCAoZSkgeyBidWdneSA9IHRydWU7IH1cbiAgICAgIHJldHVybiBmdW5jdGlvbiBzZXRQcm90b3R5cGVPZihPLCBwcm90bykge1xuICAgICAgICBjaGVjayhPLCBwcm90byk7XG4gICAgICAgIGlmIChidWdneSkgTy5fX3Byb3RvX18gPSBwcm90bztcbiAgICAgICAgZWxzZSBzZXQoTywgcHJvdG8pO1xuICAgICAgICByZXR1cm4gTztcbiAgICAgIH07XG4gICAgfSh7fSwgZmFsc2UpIDogdW5kZWZpbmVkKSxcbiAgY2hlY2s6IGNoZWNrXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpO1xudmFyIFNQRUNJRVMgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChLRVkpIHtcbiAgdmFyIEMgPSBnbG9iYWxbS0VZXTtcbiAgaWYgKERFU0NSSVBUT1JTICYmIEMgJiYgIUNbU1BFQ0lFU10pIGRQLmYoQywgU1BFQ0lFUywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH1cbiAgfSk7XG59O1xuIiwidmFyIGRlZiA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCB0YWcsIHN0YXQpIHtcbiAgaWYgKGl0ICYmICFoYXMoaXQgPSBzdGF0ID8gaXQgOiBpdC5wcm90b3R5cGUsIFRBRykpIGRlZihpdCwgVEFHLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHRhZyB9KTtcbn07XG4iLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ2tleXMnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gc2hhcmVkW2tleV0gfHwgKHNoYXJlZFtrZXldID0gdWlkKGtleSkpO1xufTtcbiIsInZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nO1xudmFyIHN0b3JlID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xuXG4obW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHZhbHVlICE9PSB1bmRlZmluZWQgPyB2YWx1ZSA6IHt9KTtcbn0pKCd2ZXJzaW9ucycsIFtdKS5wdXNoKHtcbiAgdmVyc2lvbjogY29yZS52ZXJzaW9uLFxuICBtb2RlOiByZXF1aXJlKCcuL19saWJyYXJ5JykgPyAncHVyZScgOiAnZ2xvYmFsJyxcbiAgY29weXJpZ2h0OiAnwqkgMjAxOCBEZW5pcyBQdXNoa2FyZXYgKHpsb2lyb2NrLnJ1KSdcbn0pO1xuIiwiLy8gNy4zLjIwIFNwZWNpZXNDb25zdHJ1Y3RvcihPLCBkZWZhdWx0Q29uc3RydWN0b3IpXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG52YXIgU1BFQ0lFUyA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBEKSB7XG4gIHZhciBDID0gYW5PYmplY3QoTykuY29uc3RydWN0b3I7XG4gIHZhciBTO1xuICByZXR1cm4gQyA9PT0gdW5kZWZpbmVkIHx8IChTID0gYW5PYmplY3QoQylbU1BFQ0lFU10pID09IHVuZGVmaW5lZCA/IEQgOiBhRnVuY3Rpb24oUyk7XG59O1xuIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xuLy8gdHJ1ZSAgLT4gU3RyaW5nI2F0XG4vLyBmYWxzZSAtPiBTdHJpbmcjY29kZVBvaW50QXRcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFRPX1NUUklORykge1xuICByZXR1cm4gZnVuY3Rpb24gKHRoYXQsIHBvcykge1xuICAgIHZhciBzID0gU3RyaW5nKGRlZmluZWQodGhhdCkpO1xuICAgIHZhciBpID0gdG9JbnRlZ2VyKHBvcyk7XG4gICAgdmFyIGwgPSBzLmxlbmd0aDtcbiAgICB2YXIgYSwgYjtcbiAgICBpZiAoaSA8IDAgfHwgaSA+PSBsKSByZXR1cm4gVE9fU1RSSU5HID8gJycgOiB1bmRlZmluZWQ7XG4gICAgYSA9IHMuY2hhckNvZGVBdChpKTtcbiAgICByZXR1cm4gYSA8IDB4ZDgwMCB8fCBhID4gMHhkYmZmIHx8IGkgKyAxID09PSBsIHx8IChiID0gcy5jaGFyQ29kZUF0KGkgKyAxKSkgPCAweGRjMDAgfHwgYiA+IDB4ZGZmZlxuICAgICAgPyBUT19TVFJJTkcgPyBzLmNoYXJBdChpKSA6IGFcbiAgICAgIDogVE9fU1RSSU5HID8gcy5zbGljZShpLCBpICsgMikgOiAoYSAtIDB4ZDgwMCA8PCAxMCkgKyAoYiAtIDB4ZGMwMCkgKyAweDEwMDAwO1xuICB9O1xufTtcbiIsInZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBpbnZva2UgPSByZXF1aXJlKCcuL19pbnZva2UnKTtcbnZhciBodG1sID0gcmVxdWlyZSgnLi9faHRtbCcpO1xudmFyIGNlbCA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgc2V0VGFzayA9IGdsb2JhbC5zZXRJbW1lZGlhdGU7XG52YXIgY2xlYXJUYXNrID0gZ2xvYmFsLmNsZWFySW1tZWRpYXRlO1xudmFyIE1lc3NhZ2VDaGFubmVsID0gZ2xvYmFsLk1lc3NhZ2VDaGFubmVsO1xudmFyIERpc3BhdGNoID0gZ2xvYmFsLkRpc3BhdGNoO1xudmFyIGNvdW50ZXIgPSAwO1xudmFyIHF1ZXVlID0ge307XG52YXIgT05SRUFEWVNUQVRFQ0hBTkdFID0gJ29ucmVhZHlzdGF0ZWNoYW5nZSc7XG52YXIgZGVmZXIsIGNoYW5uZWwsIHBvcnQ7XG52YXIgcnVuID0gZnVuY3Rpb24gKCkge1xuICB2YXIgaWQgPSArdGhpcztcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xuICBpZiAocXVldWUuaGFzT3duUHJvcGVydHkoaWQpKSB7XG4gICAgdmFyIGZuID0gcXVldWVbaWRdO1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gICAgZm4oKTtcbiAgfVxufTtcbnZhciBsaXN0ZW5lciA9IGZ1bmN0aW9uIChldmVudCkge1xuICBydW4uY2FsbChldmVudC5kYXRhKTtcbn07XG4vLyBOb2RlLmpzIDAuOSsgJiBJRTEwKyBoYXMgc2V0SW1tZWRpYXRlLCBvdGhlcndpc2U6XG5pZiAoIXNldFRhc2sgfHwgIWNsZWFyVGFzaykge1xuICBzZXRUYXNrID0gZnVuY3Rpb24gc2V0SW1tZWRpYXRlKGZuKSB7XG4gICAgdmFyIGFyZ3MgPSBbXTtcbiAgICB2YXIgaSA9IDE7XG4gICAgd2hpbGUgKGFyZ3VtZW50cy5sZW5ndGggPiBpKSBhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgIHF1ZXVlWysrY291bnRlcl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgICAgIGludm9rZSh0eXBlb2YgZm4gPT0gJ2Z1bmN0aW9uJyA/IGZuIDogRnVuY3Rpb24oZm4pLCBhcmdzKTtcbiAgICB9O1xuICAgIGRlZmVyKGNvdW50ZXIpO1xuICAgIHJldHVybiBjb3VudGVyO1xuICB9O1xuICBjbGVhclRhc2sgPSBmdW5jdGlvbiBjbGVhckltbWVkaWF0ZShpZCkge1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gIH07XG4gIC8vIE5vZGUuanMgMC44LVxuICBpZiAocmVxdWlyZSgnLi9fY29mJykocHJvY2VzcykgPT0gJ3Byb2Nlc3MnKSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soY3R4KHJ1biwgaWQsIDEpKTtcbiAgICB9O1xuICAvLyBTcGhlcmUgKEpTIGdhbWUgZW5naW5lKSBEaXNwYXRjaCBBUElcbiAgfSBlbHNlIGlmIChEaXNwYXRjaCAmJiBEaXNwYXRjaC5ub3cpIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgRGlzcGF0Y2gubm93KGN0eChydW4sIGlkLCAxKSk7XG4gICAgfTtcbiAgLy8gQnJvd3NlcnMgd2l0aCBNZXNzYWdlQ2hhbm5lbCwgaW5jbHVkZXMgV2ViV29ya2Vyc1xuICB9IGVsc2UgaWYgKE1lc3NhZ2VDaGFubmVsKSB7XG4gICAgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuICAgIHBvcnQgPSBjaGFubmVsLnBvcnQyO1xuICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gbGlzdGVuZXI7XG4gICAgZGVmZXIgPSBjdHgocG9ydC5wb3N0TWVzc2FnZSwgcG9ydCwgMSk7XG4gIC8vIEJyb3dzZXJzIHdpdGggcG9zdE1lc3NhZ2UsIHNraXAgV2ViV29ya2Vyc1xuICAvLyBJRTggaGFzIHBvc3RNZXNzYWdlLCBidXQgaXQncyBzeW5jICYgdHlwZW9mIGl0cyBwb3N0TWVzc2FnZSBpcyAnb2JqZWN0J1xuICB9IGVsc2UgaWYgKGdsb2JhbC5hZGRFdmVudExpc3RlbmVyICYmIHR5cGVvZiBwb3N0TWVzc2FnZSA9PSAnZnVuY3Rpb24nICYmICFnbG9iYWwuaW1wb3J0U2NyaXB0cykge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBnbG9iYWwucG9zdE1lc3NhZ2UoaWQgKyAnJywgJyonKTtcbiAgICB9O1xuICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgbGlzdGVuZXIsIGZhbHNlKTtcbiAgLy8gSUU4LVxuICB9IGVsc2UgaWYgKE9OUkVBRFlTVEFURUNIQU5HRSBpbiBjZWwoJ3NjcmlwdCcpKSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoY2VsKCdzY3JpcHQnKSlbT05SRUFEWVNUQVRFQ0hBTkdFXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaHRtbC5yZW1vdmVDaGlsZCh0aGlzKTtcbiAgICAgICAgcnVuLmNhbGwoaWQpO1xuICAgICAgfTtcbiAgICB9O1xuICAvLyBSZXN0IG9sZCBicm93c2Vyc1xuICB9IGVsc2Uge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBzZXRUaW1lb3V0KGN0eChydW4sIGlkLCAxKSwgMCk7XG4gICAgfTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogc2V0VGFzayxcbiAgY2xlYXI6IGNsZWFyVGFza1xufTtcbiIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgbWF4ID0gTWF0aC5tYXg7XG52YXIgbWluID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbmRleCwgbGVuZ3RoKSB7XG4gIGluZGV4ID0gdG9JbnRlZ2VyKGluZGV4KTtcbiAgcmV0dXJuIGluZGV4IDwgMCA/IG1heChpbmRleCArIGxlbmd0aCwgMCkgOiBtaW4oaW5kZXgsIGxlbmd0aCk7XG59O1xuIiwiLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCA9IE1hdGguY2VpbDtcbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXNOYU4oaXQgPSAraXQpID8gMCA6IChpdCA+IDAgPyBmbG9vciA6IGNlaWwpKGl0KTtcbn07XG4iLCIvLyB0byBpbmRleGVkIG9iamVjdCwgdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gSU9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuIiwiLy8gNy4xLjE1IFRvTGVuZ3RoXG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIG1pbiA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07XG4iLCIvLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcbiIsIi8vIDcuMS4xIFRvUHJpbWl0aXZlKGlucHV0IFssIFByZWZlcnJlZFR5cGVdKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBTKSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSByZXR1cm4gaXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZiAoUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKHR5cGVvZiAoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICghUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcbiIsInZhciBpZCA9IDA7XG52YXIgcHggPSBNYXRoLnJhbmRvbSgpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcHgpLnRvU3RyaW5nKDM2KSk7XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIG5hdmlnYXRvciA9IGdsb2JhbC5uYXZpZ2F0b3I7XG5cbm1vZHVsZS5leHBvcnRzID0gbmF2aWdhdG9yICYmIG5hdmlnYXRvci51c2VyQWdlbnQgfHwgJyc7XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBUWVBFKSB7XG4gIGlmICghaXNPYmplY3QoaXQpIHx8IGl0Ll90ICE9PSBUWVBFKSB0aHJvdyBUeXBlRXJyb3IoJ0luY29tcGF0aWJsZSByZWNlaXZlciwgJyArIFRZUEUgKyAnIHJlcXVpcmVkIScpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgTElCUkFSWSA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKTtcbnZhciB3a3NFeHQgPSByZXF1aXJlKCcuL193a3MtZXh0Jyk7XG52YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICB2YXIgJFN5bWJvbCA9IGNvcmUuU3ltYm9sIHx8IChjb3JlLlN5bWJvbCA9IExJQlJBUlkgPyB7fSA6IGdsb2JhbC5TeW1ib2wgfHwge30pO1xuICBpZiAobmFtZS5jaGFyQXQoMCkgIT0gJ18nICYmICEobmFtZSBpbiAkU3ltYm9sKSkgZGVmaW5lUHJvcGVydHkoJFN5bWJvbCwgbmFtZSwgeyB2YWx1ZTogd2tzRXh0LmYobmFtZSkgfSk7XG59O1xuIiwiZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fd2tzJyk7XG4iLCJ2YXIgc3RvcmUgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgnd2tzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG52YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuU3ltYm9sO1xudmFyIFVTRV9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09ICdmdW5jdGlvbic7XG5cbnZhciAkZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9XG4gICAgVVNFX1NZTUJPTCAmJiBTeW1ib2xbbmFtZV0gfHwgKFVTRV9TWU1CT0wgPyBTeW1ib2wgOiB1aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07XG5cbiRleHBvcnRzLnN0b3JlID0gc3RvcmU7XG4iLCJ2YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb3JlJykuZ2V0SXRlcmF0b3JNZXRob2QgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ICE9IHVuZGVmaW5lZCkgcmV0dXJuIGl0W0lURVJBVE9SXVxuICAgIHx8IGl0WydAQGl0ZXJhdG9yJ11cbiAgICB8fCBJdGVyYXRvcnNbY2xhc3NvZihpdCldO1xufTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIDIyLjEuMy44IEFycmF5LnByb3RvdHlwZS5maW5kKHByZWRpY2F0ZSwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgJGZpbmQgPSByZXF1aXJlKCcuL19hcnJheS1tZXRob2RzJykoNSk7XG52YXIgS0VZID0gJ2ZpbmQnO1xudmFyIGZvcmNlZCA9IHRydWU7XG4vLyBTaG91bGRuJ3Qgc2tpcCBob2xlc1xuaWYgKEtFWSBpbiBbXSkgQXJyYXkoMSlbS0VZXShmdW5jdGlvbiAoKSB7IGZvcmNlZCA9IGZhbHNlOyB9KTtcbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogZm9yY2VkLCAnQXJyYXknLCB7XG4gIGZpbmQ6IGZ1bmN0aW9uIGZpbmQoY2FsbGJhY2tmbiAvKiAsIHRoYXQgPSB1bmRlZmluZWQgKi8pIHtcbiAgICByZXR1cm4gJGZpbmQodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcbnJlcXVpcmUoJy4vX2FkZC10by11bnNjb3BhYmxlcycpKEtFWSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4vX2l0ZXItY2FsbCcpO1xudmFyIGlzQXJyYXlJdGVyID0gcmVxdWlyZSgnLi9faXMtYXJyYXktaXRlcicpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgY3JlYXRlUHJvcGVydHkgPSByZXF1aXJlKCcuL19jcmVhdGUtcHJvcGVydHknKTtcbnZhciBnZXRJdGVyRm4gPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFyZXF1aXJlKCcuL19pdGVyLWRldGVjdCcpKGZ1bmN0aW9uIChpdGVyKSB7IEFycmF5LmZyb20oaXRlcik7IH0pLCAnQXJyYXknLCB7XG4gIC8vIDIyLjEuMi4xIEFycmF5LmZyb20oYXJyYXlMaWtlLCBtYXBmbiA9IHVuZGVmaW5lZCwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbiAgZnJvbTogZnVuY3Rpb24gZnJvbShhcnJheUxpa2UgLyogLCBtYXBmbiA9IHVuZGVmaW5lZCwgdGhpc0FyZyA9IHVuZGVmaW5lZCAqLykge1xuICAgIHZhciBPID0gdG9PYmplY3QoYXJyYXlMaWtlKTtcbiAgICB2YXIgQyA9IHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgPyB0aGlzIDogQXJyYXk7XG4gICAgdmFyIGFMZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIHZhciBtYXBmbiA9IGFMZW4gPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkO1xuICAgIHZhciBtYXBwaW5nID0gbWFwZm4gIT09IHVuZGVmaW5lZDtcbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIHZhciBpdGVyRm4gPSBnZXRJdGVyRm4oTyk7XG4gICAgdmFyIGxlbmd0aCwgcmVzdWx0LCBzdGVwLCBpdGVyYXRvcjtcbiAgICBpZiAobWFwcGluZykgbWFwZm4gPSBjdHgobWFwZm4sIGFMZW4gPiAyID8gYXJndW1lbnRzWzJdIDogdW5kZWZpbmVkLCAyKTtcbiAgICAvLyBpZiBvYmplY3QgaXNuJ3QgaXRlcmFibGUgb3IgaXQncyBhcnJheSB3aXRoIGRlZmF1bHQgaXRlcmF0b3IgLSB1c2Ugc2ltcGxlIGNhc2VcbiAgICBpZiAoaXRlckZuICE9IHVuZGVmaW5lZCAmJiAhKEMgPT0gQXJyYXkgJiYgaXNBcnJheUl0ZXIoaXRlckZuKSkpIHtcbiAgICAgIGZvciAoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChPKSwgcmVzdWx0ID0gbmV3IEMoKTsgIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOyBpbmRleCsrKSB7XG4gICAgICAgIGNyZWF0ZVByb3BlcnR5KHJlc3VsdCwgaW5kZXgsIG1hcHBpbmcgPyBjYWxsKGl0ZXJhdG9yLCBtYXBmbiwgW3N0ZXAudmFsdWUsIGluZGV4XSwgdHJ1ZSkgOiBzdGVwLnZhbHVlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgICAgZm9yIChyZXN1bHQgPSBuZXcgQyhsZW5ndGgpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuICAgICAgICBjcmVhdGVQcm9wZXJ0eShyZXN1bHQsIGluZGV4LCBtYXBwaW5nID8gbWFwZm4oT1tpbmRleF0sIGluZGV4KSA6IE9baW5kZXhdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmVzdWx0Lmxlbmd0aCA9IGluZGV4O1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuL19hZGQtdG8tdW5zY29wYWJsZXMnKTtcbnZhciBzdGVwID0gcmVxdWlyZSgnLi9faXRlci1zdGVwJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xuXG4vLyAyMi4xLjMuNCBBcnJheS5wcm90b3R5cGUuZW50cmllcygpXG4vLyAyMi4xLjMuMTMgQXJyYXkucHJvdG90eXBlLmtleXMoKVxuLy8gMjIuMS4zLjI5IEFycmF5LnByb3RvdHlwZS52YWx1ZXMoKVxuLy8gMjIuMS4zLjMwIEFycmF5LnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoQXJyYXksICdBcnJheScsIGZ1bmN0aW9uIChpdGVyYXRlZCwga2luZCkge1xuICB0aGlzLl90ID0gdG9JT2JqZWN0KGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4gIHRoaXMuX2sgPSBraW5kOyAgICAgICAgICAgICAgICAvLyBraW5kXG4vLyAyMi4xLjUuMi4xICVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uICgpIHtcbiAgdmFyIE8gPSB0aGlzLl90O1xuICB2YXIga2luZCA9IHRoaXMuX2s7XG4gIHZhciBpbmRleCA9IHRoaXMuX2krKztcbiAgaWYgKCFPIHx8IGluZGV4ID49IE8ubGVuZ3RoKSB7XG4gICAgdGhpcy5fdCA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc3RlcCgxKTtcbiAgfVxuICBpZiAoa2luZCA9PSAna2V5cycpIHJldHVybiBzdGVwKDAsIGluZGV4KTtcbiAgaWYgKGtpbmQgPT0gJ3ZhbHVlcycpIHJldHVybiBzdGVwKDAsIE9baW5kZXhdKTtcbiAgcmV0dXJuIHN0ZXAoMCwgW2luZGV4LCBPW2luZGV4XV0pO1xufSwgJ3ZhbHVlcycpO1xuXG4vLyBhcmd1bWVudHNMaXN0W0BAaXRlcmF0b3JdIGlzICVBcnJheVByb3RvX3ZhbHVlcyUgKDkuNC40LjYsIDkuNC40LjcpXG5JdGVyYXRvcnMuQXJndW1lbnRzID0gSXRlcmF0b3JzLkFycmF5O1xuXG5hZGRUb1Vuc2NvcGFibGVzKCdrZXlzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCd2YWx1ZXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ2VudHJpZXMnKTtcbiIsInZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgRlByb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlO1xudmFyIG5hbWVSRSA9IC9eXFxzKmZ1bmN0aW9uIChbXiAoXSopLztcbnZhciBOQU1FID0gJ25hbWUnO1xuXG4vLyAxOS4yLjQuMiBuYW1lXG5OQU1FIGluIEZQcm90byB8fCByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmIGRQKEZQcm90bywgTkFNRSwge1xuICBjb25maWd1cmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gKCcnICsgdGhpcykubWF0Y2gobmFtZVJFKVsxXTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBzdHJvbmcgPSByZXF1aXJlKCcuL19jb2xsZWN0aW9uLXN0cm9uZycpO1xudmFyIHZhbGlkYXRlID0gcmVxdWlyZSgnLi9fdmFsaWRhdGUtY29sbGVjdGlvbicpO1xudmFyIE1BUCA9ICdNYXAnO1xuXG4vLyAyMy4xIE1hcCBPYmplY3RzXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvbGxlY3Rpb24nKShNQVAsIGZ1bmN0aW9uIChnZXQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIE1hcCgpIHsgcmV0dXJuIGdldCh0aGlzLCBhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCk7IH07XG59LCB7XG4gIC8vIDIzLjEuMy42IE1hcC5wcm90b3R5cGUuZ2V0KGtleSlcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoa2V5KSB7XG4gICAgdmFyIGVudHJ5ID0gc3Ryb25nLmdldEVudHJ5KHZhbGlkYXRlKHRoaXMsIE1BUCksIGtleSk7XG4gICAgcmV0dXJuIGVudHJ5ICYmIGVudHJ5LnY7XG4gIH0sXG4gIC8vIDIzLjEuMy45IE1hcC5wcm90b3R5cGUuc2V0KGtleSwgdmFsdWUpXG4gIHNldDogZnVuY3Rpb24gc2V0KGtleSwgdmFsdWUpIHtcbiAgICByZXR1cm4gc3Ryb25nLmRlZih2YWxpZGF0ZSh0aGlzLCBNQVApLCBrZXkgPT09IDAgPyAwIDoga2V5LCB2YWx1ZSk7XG4gIH1cbn0sIHN0cm9uZywgdHJ1ZSk7XG4iLCIvLyAxOS4xLjMuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYsICdPYmplY3QnLCB7IGFzc2lnbjogcmVxdWlyZSgnLi9fb2JqZWN0LWFzc2lnbicpIH0pO1xuIiwiLy8gMTkuMS4yLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgna2V5cycsIGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGtleXMoaXQpIHtcbiAgICByZXR1cm4gJGtleXModG9PYmplY3QoaXQpKTtcbiAgfTtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgPSByZXF1aXJlKCcuL19saWJyYXJ5Jyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG52YXIgYW5JbnN0YW5jZSA9IHJlcXVpcmUoJy4vX2FuLWluc3RhbmNlJyk7XG52YXIgZm9yT2YgPSByZXF1aXJlKCcuL19mb3Itb2YnKTtcbnZhciBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuL19zcGVjaWVzLWNvbnN0cnVjdG9yJyk7XG52YXIgdGFzayA9IHJlcXVpcmUoJy4vX3Rhc2snKS5zZXQ7XG52YXIgbWljcm90YXNrID0gcmVxdWlyZSgnLi9fbWljcm90YXNrJykoKTtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eU1vZHVsZSA9IHJlcXVpcmUoJy4vX25ldy1wcm9taXNlLWNhcGFiaWxpdHknKTtcbnZhciBwZXJmb3JtID0gcmVxdWlyZSgnLi9fcGVyZm9ybScpO1xudmFyIHVzZXJBZ2VudCA9IHJlcXVpcmUoJy4vX3VzZXItYWdlbnQnKTtcbnZhciBwcm9taXNlUmVzb2x2ZSA9IHJlcXVpcmUoJy4vX3Byb21pc2UtcmVzb2x2ZScpO1xudmFyIFBST01JU0UgPSAnUHJvbWlzZSc7XG52YXIgVHlwZUVycm9yID0gZ2xvYmFsLlR5cGVFcnJvcjtcbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgdmVyc2lvbnMgPSBwcm9jZXNzICYmIHByb2Nlc3MudmVyc2lvbnM7XG52YXIgdjggPSB2ZXJzaW9ucyAmJiB2ZXJzaW9ucy52OCB8fCAnJztcbnZhciAkUHJvbWlzZSA9IGdsb2JhbFtQUk9NSVNFXTtcbnZhciBpc05vZGUgPSBjbGFzc29mKHByb2Nlc3MpID09ICdwcm9jZXNzJztcbnZhciBlbXB0eSA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcbnZhciBJbnRlcm5hbCwgbmV3R2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5LCBPd25Qcm9taXNlQ2FwYWJpbGl0eSwgV3JhcHBlcjtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IG5ld0dlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlLmY7XG5cbnZhciBVU0VfTkFUSVZFID0gISFmdW5jdGlvbiAoKSB7XG4gIHRyeSB7XG4gICAgLy8gY29ycmVjdCBzdWJjbGFzc2luZyB3aXRoIEBAc3BlY2llcyBzdXBwb3J0XG4gICAgdmFyIHByb21pc2UgPSAkUHJvbWlzZS5yZXNvbHZlKDEpO1xuICAgIHZhciBGYWtlUHJvbWlzZSA9IChwcm9taXNlLmNvbnN0cnVjdG9yID0ge30pW3JlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyldID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgICAgIGV4ZWMoZW1wdHksIGVtcHR5KTtcbiAgICB9O1xuICAgIC8vIHVuaGFuZGxlZCByZWplY3Rpb25zIHRyYWNraW5nIHN1cHBvcnQsIE5vZGVKUyBQcm9taXNlIHdpdGhvdXQgaXQgZmFpbHMgQEBzcGVjaWVzIHRlc3RcbiAgICByZXR1cm4gKGlzTm9kZSB8fCB0eXBlb2YgUHJvbWlzZVJlamVjdGlvbkV2ZW50ID09ICdmdW5jdGlvbicpXG4gICAgICAmJiBwcm9taXNlLnRoZW4oZW1wdHkpIGluc3RhbmNlb2YgRmFrZVByb21pc2VcbiAgICAgIC8vIHY4IDYuNiAoTm9kZSAxMCBhbmQgQ2hyb21lIDY2KSBoYXZlIGEgYnVnIHdpdGggcmVzb2x2aW5nIGN1c3RvbSB0aGVuYWJsZXNcbiAgICAgIC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTgzMDU2NVxuICAgICAgLy8gd2UgY2FuJ3QgZGV0ZWN0IGl0IHN5bmNocm9ub3VzbHksIHNvIGp1c3QgY2hlY2sgdmVyc2lvbnNcbiAgICAgICYmIHY4LmluZGV4T2YoJzYuNicpICE9PSAwXG4gICAgICAmJiB1c2VyQWdlbnQuaW5kZXhPZignQ2hyb21lLzY2JykgPT09IC0xO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbn0oKTtcblxuLy8gaGVscGVyc1xudmFyIGlzVGhlbmFibGUgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIHRoZW47XG4gIHJldHVybiBpc09iamVjdChpdCkgJiYgdHlwZW9mICh0aGVuID0gaXQudGhlbikgPT0gJ2Z1bmN0aW9uJyA/IHRoZW4gOiBmYWxzZTtcbn07XG52YXIgbm90aWZ5ID0gZnVuY3Rpb24gKHByb21pc2UsIGlzUmVqZWN0KSB7XG4gIGlmIChwcm9taXNlLl9uKSByZXR1cm47XG4gIHByb21pc2UuX24gPSB0cnVlO1xuICB2YXIgY2hhaW4gPSBwcm9taXNlLl9jO1xuICBtaWNyb3Rhc2soZnVuY3Rpb24gKCkge1xuICAgIHZhciB2YWx1ZSA9IHByb21pc2UuX3Y7XG4gICAgdmFyIG9rID0gcHJvbWlzZS5fcyA9PSAxO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgcnVuID0gZnVuY3Rpb24gKHJlYWN0aW9uKSB7XG4gICAgICB2YXIgaGFuZGxlciA9IG9rID8gcmVhY3Rpb24ub2sgOiByZWFjdGlvbi5mYWlsO1xuICAgICAgdmFyIHJlc29sdmUgPSByZWFjdGlvbi5yZXNvbHZlO1xuICAgICAgdmFyIHJlamVjdCA9IHJlYWN0aW9uLnJlamVjdDtcbiAgICAgIHZhciBkb21haW4gPSByZWFjdGlvbi5kb21haW47XG4gICAgICB2YXIgcmVzdWx0LCB0aGVuLCBleGl0ZWQ7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoaGFuZGxlcikge1xuICAgICAgICAgIGlmICghb2spIHtcbiAgICAgICAgICAgIGlmIChwcm9taXNlLl9oID09IDIpIG9uSGFuZGxlVW5oYW5kbGVkKHByb21pc2UpO1xuICAgICAgICAgICAgcHJvbWlzZS5faCA9IDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChoYW5kbGVyID09PSB0cnVlKSByZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChkb21haW4pIGRvbWFpbi5lbnRlcigpO1xuICAgICAgICAgICAgcmVzdWx0ID0gaGFuZGxlcih2YWx1ZSk7IC8vIG1heSB0aHJvd1xuICAgICAgICAgICAgaWYgKGRvbWFpbikge1xuICAgICAgICAgICAgICBkb21haW4uZXhpdCgpO1xuICAgICAgICAgICAgICBleGl0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocmVzdWx0ID09PSByZWFjdGlvbi5wcm9taXNlKSB7XG4gICAgICAgICAgICByZWplY3QoVHlwZUVycm9yKCdQcm9taXNlLWNoYWluIGN5Y2xlJykpO1xuICAgICAgICAgIH0gZWxzZSBpZiAodGhlbiA9IGlzVGhlbmFibGUocmVzdWx0KSkge1xuICAgICAgICAgICAgdGhlbi5jYWxsKHJlc3VsdCwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9IGVsc2UgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9IGVsc2UgcmVqZWN0KHZhbHVlKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaWYgKGRvbWFpbiAmJiAhZXhpdGVkKSBkb21haW4uZXhpdCgpO1xuICAgICAgICByZWplY3QoZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB3aGlsZSAoY2hhaW4ubGVuZ3RoID4gaSkgcnVuKGNoYWluW2krK10pOyAvLyB2YXJpYWJsZSBsZW5ndGggLSBjYW4ndCB1c2UgZm9yRWFjaFxuICAgIHByb21pc2UuX2MgPSBbXTtcbiAgICBwcm9taXNlLl9uID0gZmFsc2U7XG4gICAgaWYgKGlzUmVqZWN0ICYmICFwcm9taXNlLl9oKSBvblVuaGFuZGxlZChwcm9taXNlKTtcbiAgfSk7XG59O1xudmFyIG9uVW5oYW5kbGVkID0gZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciB2YWx1ZSA9IHByb21pc2UuX3Y7XG4gICAgdmFyIHVuaGFuZGxlZCA9IGlzVW5oYW5kbGVkKHByb21pc2UpO1xuICAgIHZhciByZXN1bHQsIGhhbmRsZXIsIGNvbnNvbGU7XG4gICAgaWYgKHVuaGFuZGxlZCkge1xuICAgICAgcmVzdWx0ID0gcGVyZm9ybShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChpc05vZGUpIHtcbiAgICAgICAgICBwcm9jZXNzLmVtaXQoJ3VuaGFuZGxlZFJlamVjdGlvbicsIHZhbHVlLCBwcm9taXNlKTtcbiAgICAgICAgfSBlbHNlIGlmIChoYW5kbGVyID0gZ2xvYmFsLm9udW5oYW5kbGVkcmVqZWN0aW9uKSB7XG4gICAgICAgICAgaGFuZGxlcih7IHByb21pc2U6IHByb21pc2UsIHJlYXNvbjogdmFsdWUgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoKGNvbnNvbGUgPSBnbG9iYWwuY29uc29sZSkgJiYgY29uc29sZS5lcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuaGFuZGxlZCBwcm9taXNlIHJlamVjdGlvbicsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICAvLyBCcm93c2VycyBzaG91bGQgbm90IHRyaWdnZXIgYHJlamVjdGlvbkhhbmRsZWRgIGV2ZW50IGlmIGl0IHdhcyBoYW5kbGVkIGhlcmUsIE5vZGVKUyAtIHNob3VsZFxuICAgICAgcHJvbWlzZS5faCA9IGlzTm9kZSB8fCBpc1VuaGFuZGxlZChwcm9taXNlKSA/IDIgOiAxO1xuICAgIH0gcHJvbWlzZS5fYSA9IHVuZGVmaW5lZDtcbiAgICBpZiAodW5oYW5kbGVkICYmIHJlc3VsdC5lKSB0aHJvdyByZXN1bHQudjtcbiAgfSk7XG59O1xudmFyIGlzVW5oYW5kbGVkID0gZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgcmV0dXJuIHByb21pc2UuX2ggIT09IDEgJiYgKHByb21pc2UuX2EgfHwgcHJvbWlzZS5fYykubGVuZ3RoID09PSAwO1xufTtcbnZhciBvbkhhbmRsZVVuaGFuZGxlZCA9IGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gIHRhc2suY2FsbChnbG9iYWwsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaGFuZGxlcjtcbiAgICBpZiAoaXNOb2RlKSB7XG4gICAgICBwcm9jZXNzLmVtaXQoJ3JlamVjdGlvbkhhbmRsZWQnLCBwcm9taXNlKTtcbiAgICB9IGVsc2UgaWYgKGhhbmRsZXIgPSBnbG9iYWwub25yZWplY3Rpb25oYW5kbGVkKSB7XG4gICAgICBoYW5kbGVyKHsgcHJvbWlzZTogcHJvbWlzZSwgcmVhc29uOiBwcm9taXNlLl92IH0pO1xuICAgIH1cbiAgfSk7XG59O1xudmFyICRyZWplY3QgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgdmFyIHByb21pc2UgPSB0aGlzO1xuICBpZiAocHJvbWlzZS5fZCkgcmV0dXJuO1xuICBwcm9taXNlLl9kID0gdHJ1ZTtcbiAgcHJvbWlzZSA9IHByb21pc2UuX3cgfHwgcHJvbWlzZTsgLy8gdW53cmFwXG4gIHByb21pc2UuX3YgPSB2YWx1ZTtcbiAgcHJvbWlzZS5fcyA9IDI7XG4gIGlmICghcHJvbWlzZS5fYSkgcHJvbWlzZS5fYSA9IHByb21pc2UuX2Muc2xpY2UoKTtcbiAgbm90aWZ5KHByb21pc2UsIHRydWUpO1xufTtcbnZhciAkcmVzb2x2ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICB2YXIgcHJvbWlzZSA9IHRoaXM7XG4gIHZhciB0aGVuO1xuICBpZiAocHJvbWlzZS5fZCkgcmV0dXJuO1xuICBwcm9taXNlLl9kID0gdHJ1ZTtcbiAgcHJvbWlzZSA9IHByb21pc2UuX3cgfHwgcHJvbWlzZTsgLy8gdW53cmFwXG4gIHRyeSB7XG4gICAgaWYgKHByb21pc2UgPT09IHZhbHVlKSB0aHJvdyBUeXBlRXJyb3IoXCJQcm9taXNlIGNhbid0IGJlIHJlc29sdmVkIGl0c2VsZlwiKTtcbiAgICBpZiAodGhlbiA9IGlzVGhlbmFibGUodmFsdWUpKSB7XG4gICAgICBtaWNyb3Rhc2soZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgd3JhcHBlciA9IHsgX3c6IHByb21pc2UsIF9kOiBmYWxzZSB9OyAvLyB3cmFwXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhlbi5jYWxsKHZhbHVlLCBjdHgoJHJlc29sdmUsIHdyYXBwZXIsIDEpLCBjdHgoJHJlamVjdCwgd3JhcHBlciwgMSkpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgJHJlamVjdC5jYWxsKHdyYXBwZXIsIGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvbWlzZS5fdiA9IHZhbHVlO1xuICAgICAgcHJvbWlzZS5fcyA9IDE7XG4gICAgICBub3RpZnkocHJvbWlzZSwgZmFsc2UpO1xuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgICRyZWplY3QuY2FsbCh7IF93OiBwcm9taXNlLCBfZDogZmFsc2UgfSwgZSk7IC8vIHdyYXBcbiAgfVxufTtcblxuLy8gY29uc3RydWN0b3IgcG9seWZpbGxcbmlmICghVVNFX05BVElWRSkge1xuICAvLyAyNS40LjMuMSBQcm9taXNlKGV4ZWN1dG9yKVxuICAkUHJvbWlzZSA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3IpIHtcbiAgICBhbkluc3RhbmNlKHRoaXMsICRQcm9taXNlLCBQUk9NSVNFLCAnX2gnKTtcbiAgICBhRnVuY3Rpb24oZXhlY3V0b3IpO1xuICAgIEludGVybmFsLmNhbGwodGhpcyk7XG4gICAgdHJ5IHtcbiAgICAgIGV4ZWN1dG9yKGN0eCgkcmVzb2x2ZSwgdGhpcywgMSksIGN0eCgkcmVqZWN0LCB0aGlzLCAxKSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAkcmVqZWN0LmNhbGwodGhpcywgZXJyKTtcbiAgICB9XG4gIH07XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuICBJbnRlcm5hbCA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3IpIHtcbiAgICB0aGlzLl9jID0gW107ICAgICAgICAgICAgIC8vIDwtIGF3YWl0aW5nIHJlYWN0aW9uc1xuICAgIHRoaXMuX2EgPSB1bmRlZmluZWQ7ICAgICAgLy8gPC0gY2hlY2tlZCBpbiBpc1VuaGFuZGxlZCByZWFjdGlvbnNcbiAgICB0aGlzLl9zID0gMDsgICAgICAgICAgICAgIC8vIDwtIHN0YXRlXG4gICAgdGhpcy5fZCA9IGZhbHNlOyAgICAgICAgICAvLyA8LSBkb25lXG4gICAgdGhpcy5fdiA9IHVuZGVmaW5lZDsgICAgICAvLyA8LSB2YWx1ZVxuICAgIHRoaXMuX2ggPSAwOyAgICAgICAgICAgICAgLy8gPC0gcmVqZWN0aW9uIHN0YXRlLCAwIC0gZGVmYXVsdCwgMSAtIGhhbmRsZWQsIDIgLSB1bmhhbmRsZWRcbiAgICB0aGlzLl9uID0gZmFsc2U7ICAgICAgICAgIC8vIDwtIG5vdGlmeVxuICB9O1xuICBJbnRlcm5hbC5wcm90b3R5cGUgPSByZXF1aXJlKCcuL19yZWRlZmluZS1hbGwnKSgkUHJvbWlzZS5wcm90b3R5cGUsIHtcbiAgICAvLyAyNS40LjUuMyBQcm9taXNlLnByb3RvdHlwZS50aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKVxuICAgIHRoZW46IGZ1bmN0aW9uIHRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpIHtcbiAgICAgIHZhciByZWFjdGlvbiA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHNwZWNpZXNDb25zdHJ1Y3Rvcih0aGlzLCAkUHJvbWlzZSkpO1xuICAgICAgcmVhY3Rpb24ub2sgPSB0eXBlb2Ygb25GdWxmaWxsZWQgPT0gJ2Z1bmN0aW9uJyA/IG9uRnVsZmlsbGVkIDogdHJ1ZTtcbiAgICAgIHJlYWN0aW9uLmZhaWwgPSB0eXBlb2Ygb25SZWplY3RlZCA9PSAnZnVuY3Rpb24nICYmIG9uUmVqZWN0ZWQ7XG4gICAgICByZWFjdGlvbi5kb21haW4gPSBpc05vZGUgPyBwcm9jZXNzLmRvbWFpbiA6IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2MucHVzaChyZWFjdGlvbik7XG4gICAgICBpZiAodGhpcy5fYSkgdGhpcy5fYS5wdXNoKHJlYWN0aW9uKTtcbiAgICAgIGlmICh0aGlzLl9zKSBub3RpZnkodGhpcywgZmFsc2UpO1xuICAgICAgcmV0dXJuIHJlYWN0aW9uLnByb21pc2U7XG4gICAgfSxcbiAgICAvLyAyNS40LjUuMSBQcm9taXNlLnByb3RvdHlwZS5jYXRjaChvblJlamVjdGVkKVxuICAgICdjYXRjaCc6IGZ1bmN0aW9uIChvblJlamVjdGVkKSB7XG4gICAgICByZXR1cm4gdGhpcy50aGVuKHVuZGVmaW5lZCwgb25SZWplY3RlZCk7XG4gICAgfVxuICB9KTtcbiAgT3duUHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHByb21pc2UgPSBuZXcgSW50ZXJuYWwoKTtcbiAgICB0aGlzLnByb21pc2UgPSBwcm9taXNlO1xuICAgIHRoaXMucmVzb2x2ZSA9IGN0eCgkcmVzb2x2ZSwgcHJvbWlzZSwgMSk7XG4gICAgdGhpcy5yZWplY3QgPSBjdHgoJHJlamVjdCwgcHJvbWlzZSwgMSk7XG4gIH07XG4gIG5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlLmYgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uIChDKSB7XG4gICAgcmV0dXJuIEMgPT09ICRQcm9taXNlIHx8IEMgPT09IFdyYXBwZXJcbiAgICAgID8gbmV3IE93blByb21pc2VDYXBhYmlsaXR5KEMpXG4gICAgICA6IG5ld0dlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eShDKTtcbiAgfTtcbn1cblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgeyBQcm9taXNlOiAkUHJvbWlzZSB9KTtcbnJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJykoJFByb21pc2UsIFBST01JU0UpO1xucmVxdWlyZSgnLi9fc2V0LXNwZWNpZXMnKShQUk9NSVNFKTtcbldyYXBwZXIgPSByZXF1aXJlKCcuL19jb3JlJylbUFJPTUlTRV07XG5cbi8vIHN0YXRpY3NcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjUgUHJvbWlzZS5yZWplY3QocilcbiAgcmVqZWN0OiBmdW5jdGlvbiByZWplY3Qocikge1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkodGhpcyk7XG4gICAgdmFyICQkcmVqZWN0ID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgJCRyZWplY3Qocik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIChMSUJSQVJZIHx8ICFVU0VfTkFUSVZFKSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuNiBQcm9taXNlLnJlc29sdmUoeClcbiAgcmVzb2x2ZTogZnVuY3Rpb24gcmVzb2x2ZSh4KSB7XG4gICAgcmV0dXJuIHByb21pc2VSZXNvbHZlKExJQlJBUlkgJiYgdGhpcyA9PT0gV3JhcHBlciA/ICRQcm9taXNlIDogdGhpcywgeCk7XG4gIH1cbn0pO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhKFVTRV9OQVRJVkUgJiYgcmVxdWlyZSgnLi9faXRlci1kZXRlY3QnKShmdW5jdGlvbiAoaXRlcikge1xuICAkUHJvbWlzZS5hbGwoaXRlcilbJ2NhdGNoJ10oZW1wdHkpO1xufSkpLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC4xIFByb21pc2UuYWxsKGl0ZXJhYmxlKVxuICBhbGw6IGZ1bmN0aW9uIGFsbChpdGVyYWJsZSkge1xuICAgIHZhciBDID0gdGhpcztcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KEMpO1xuICAgIHZhciByZXNvbHZlID0gY2FwYWJpbGl0eS5yZXNvbHZlO1xuICAgIHZhciByZWplY3QgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICB2YXIgcmVzdWx0ID0gcGVyZm9ybShmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgdmFsdWVzID0gW107XG4gICAgICB2YXIgaW5kZXggPSAwO1xuICAgICAgdmFyIHJlbWFpbmluZyA9IDE7XG4gICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gICAgICAgIHZhciAkaW5kZXggPSBpbmRleCsrO1xuICAgICAgICB2YXIgYWxyZWFkeUNhbGxlZCA9IGZhbHNlO1xuICAgICAgICB2YWx1ZXMucHVzaCh1bmRlZmluZWQpO1xuICAgICAgICByZW1haW5pbmcrKztcbiAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgaWYgKGFscmVhZHlDYWxsZWQpIHJldHVybjtcbiAgICAgICAgICBhbHJlYWR5Q2FsbGVkID0gdHJ1ZTtcbiAgICAgICAgICB2YWx1ZXNbJGluZGV4XSA9IHZhbHVlO1xuICAgICAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcbiAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgIH0pO1xuICAgIGlmIChyZXN1bHQuZSkgcmVqZWN0KHJlc3VsdC52KTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9LFxuICAvLyAyNS40LjQuNCBQcm9taXNlLnJhY2UoaXRlcmFibGUpXG4gIHJhY2U6IGZ1bmN0aW9uIHJhY2UoaXRlcmFibGUpIHtcbiAgICB2YXIgQyA9IHRoaXM7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKTtcbiAgICB2YXIgcmVqZWN0ID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIHJlc3VsdCA9IHBlcmZvcm0oZnVuY3Rpb24gKCkge1xuICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBmdW5jdGlvbiAocHJvbWlzZSkge1xuICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihjYXBhYmlsaXR5LnJlc29sdmUsIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBpZiAocmVzdWx0LmUpIHJlamVjdChyZXN1bHQudik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG4iLCIvLyAyMS4yLjUuMyBnZXQgUmVnRXhwLnByb3RvdHlwZS5mbGFncygpXG5pZiAocmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAvLi9nLmZsYWdzICE9ICdnJykgcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZihSZWdFeHAucHJvdG90eXBlLCAnZmxhZ3MnLCB7XG4gIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgZ2V0OiByZXF1aXJlKCcuL19mbGFncycpXG59KTtcbiIsIi8vIEBAc3BsaXQgbG9naWNcbnJlcXVpcmUoJy4vX2ZpeC1yZS13a3MnKSgnc3BsaXQnLCAyLCBmdW5jdGlvbiAoZGVmaW5lZCwgU1BMSVQsICRzcGxpdCkge1xuICAndXNlIHN0cmljdCc7XG4gIHZhciBpc1JlZ0V4cCA9IHJlcXVpcmUoJy4vX2lzLXJlZ2V4cCcpO1xuICB2YXIgX3NwbGl0ID0gJHNwbGl0O1xuICB2YXIgJHB1c2ggPSBbXS5wdXNoO1xuICB2YXIgJFNQTElUID0gJ3NwbGl0JztcbiAgdmFyIExFTkdUSCA9ICdsZW5ndGgnO1xuICB2YXIgTEFTVF9JTkRFWCA9ICdsYXN0SW5kZXgnO1xuICBpZiAoXG4gICAgJ2FiYmMnWyRTUExJVF0oLyhiKSovKVsxXSA9PSAnYycgfHxcbiAgICAndGVzdCdbJFNQTElUXSgvKD86KS8sIC0xKVtMRU5HVEhdICE9IDQgfHxcbiAgICAnYWInWyRTUExJVF0oLyg/OmFiKSovKVtMRU5HVEhdICE9IDIgfHxcbiAgICAnLidbJFNQTElUXSgvKC4/KSguPykvKVtMRU5HVEhdICE9IDQgfHxcbiAgICAnLidbJFNQTElUXSgvKCkoKS8pW0xFTkdUSF0gPiAxIHx8XG4gICAgJydbJFNQTElUXSgvLj8vKVtMRU5HVEhdXG4gICkge1xuICAgIHZhciBOUENHID0gLygpPz8vLmV4ZWMoJycpWzFdID09PSB1bmRlZmluZWQ7IC8vIG5vbnBhcnRpY2lwYXRpbmcgY2FwdHVyaW5nIGdyb3VwXG4gICAgLy8gYmFzZWQgb24gZXM1LXNoaW0gaW1wbGVtZW50YXRpb24sIG5lZWQgdG8gcmV3b3JrIGl0XG4gICAgJHNwbGl0ID0gZnVuY3Rpb24gKHNlcGFyYXRvciwgbGltaXQpIHtcbiAgICAgIHZhciBzdHJpbmcgPSBTdHJpbmcodGhpcyk7XG4gICAgICBpZiAoc2VwYXJhdG9yID09PSB1bmRlZmluZWQgJiYgbGltaXQgPT09IDApIHJldHVybiBbXTtcbiAgICAgIC8vIElmIGBzZXBhcmF0b3JgIGlzIG5vdCBhIHJlZ2V4LCB1c2UgbmF0aXZlIHNwbGl0XG4gICAgICBpZiAoIWlzUmVnRXhwKHNlcGFyYXRvcikpIHJldHVybiBfc3BsaXQuY2FsbChzdHJpbmcsIHNlcGFyYXRvciwgbGltaXQpO1xuICAgICAgdmFyIG91dHB1dCA9IFtdO1xuICAgICAgdmFyIGZsYWdzID0gKHNlcGFyYXRvci5pZ25vcmVDYXNlID8gJ2knIDogJycpICtcbiAgICAgICAgICAgICAgICAgIChzZXBhcmF0b3IubXVsdGlsaW5lID8gJ20nIDogJycpICtcbiAgICAgICAgICAgICAgICAgIChzZXBhcmF0b3IudW5pY29kZSA/ICd1JyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAoc2VwYXJhdG9yLnN0aWNreSA/ICd5JyA6ICcnKTtcbiAgICAgIHZhciBsYXN0TGFzdEluZGV4ID0gMDtcbiAgICAgIHZhciBzcGxpdExpbWl0ID0gbGltaXQgPT09IHVuZGVmaW5lZCA/IDQyOTQ5NjcyOTUgOiBsaW1pdCA+Pj4gMDtcbiAgICAgIC8vIE1ha2UgYGdsb2JhbGAgYW5kIGF2b2lkIGBsYXN0SW5kZXhgIGlzc3VlcyBieSB3b3JraW5nIHdpdGggYSBjb3B5XG4gICAgICB2YXIgc2VwYXJhdG9yQ29weSA9IG5ldyBSZWdFeHAoc2VwYXJhdG9yLnNvdXJjZSwgZmxhZ3MgKyAnZycpO1xuICAgICAgdmFyIHNlcGFyYXRvcjIsIG1hdGNoLCBsYXN0SW5kZXgsIGxhc3RMZW5ndGgsIGk7XG4gICAgICAvLyBEb2Vzbid0IG5lZWQgZmxhZ3MgZ3ksIGJ1dCB0aGV5IGRvbid0IGh1cnRcbiAgICAgIGlmICghTlBDRykgc2VwYXJhdG9yMiA9IG5ldyBSZWdFeHAoJ14nICsgc2VwYXJhdG9yQ29weS5zb3VyY2UgKyAnJCg/IVxcXFxzKScsIGZsYWdzKTtcbiAgICAgIHdoaWxlIChtYXRjaCA9IHNlcGFyYXRvckNvcHkuZXhlYyhzdHJpbmcpKSB7XG4gICAgICAgIC8vIGBzZXBhcmF0b3JDb3B5Lmxhc3RJbmRleGAgaXMgbm90IHJlbGlhYmxlIGNyb3NzLWJyb3dzZXJcbiAgICAgICAgbGFzdEluZGV4ID0gbWF0Y2guaW5kZXggKyBtYXRjaFswXVtMRU5HVEhdO1xuICAgICAgICBpZiAobGFzdEluZGV4ID4gbGFzdExhc3RJbmRleCkge1xuICAgICAgICAgIG91dHB1dC5wdXNoKHN0cmluZy5zbGljZShsYXN0TGFzdEluZGV4LCBtYXRjaC5pbmRleCkpO1xuICAgICAgICAgIC8vIEZpeCBicm93c2VycyB3aG9zZSBgZXhlY2AgbWV0aG9kcyBkb24ndCBjb25zaXN0ZW50bHkgcmV0dXJuIGB1bmRlZmluZWRgIGZvciBOUENHXG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWxvb3AtZnVuY1xuICAgICAgICAgIGlmICghTlBDRyAmJiBtYXRjaFtMRU5HVEhdID4gMSkgbWF0Y2hbMF0ucmVwbGFjZShzZXBhcmF0b3IyLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBmb3IgKGkgPSAxOyBpIDwgYXJndW1lbnRzW0xFTkdUSF0gLSAyOyBpKyspIGlmIChhcmd1bWVudHNbaV0gPT09IHVuZGVmaW5lZCkgbWF0Y2hbaV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaWYgKG1hdGNoW0xFTkdUSF0gPiAxICYmIG1hdGNoLmluZGV4IDwgc3RyaW5nW0xFTkdUSF0pICRwdXNoLmFwcGx5KG91dHB1dCwgbWF0Y2guc2xpY2UoMSkpO1xuICAgICAgICAgIGxhc3RMZW5ndGggPSBtYXRjaFswXVtMRU5HVEhdO1xuICAgICAgICAgIGxhc3RMYXN0SW5kZXggPSBsYXN0SW5kZXg7XG4gICAgICAgICAgaWYgKG91dHB1dFtMRU5HVEhdID49IHNwbGl0TGltaXQpIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzZXBhcmF0b3JDb3B5W0xBU1RfSU5ERVhdID09PSBtYXRjaC5pbmRleCkgc2VwYXJhdG9yQ29weVtMQVNUX0lOREVYXSsrOyAvLyBBdm9pZCBhbiBpbmZpbml0ZSBsb29wXG4gICAgICB9XG4gICAgICBpZiAobGFzdExhc3RJbmRleCA9PT0gc3RyaW5nW0xFTkdUSF0pIHtcbiAgICAgICAgaWYgKGxhc3RMZW5ndGggfHwgIXNlcGFyYXRvckNvcHkudGVzdCgnJykpIG91dHB1dC5wdXNoKCcnKTtcbiAgICAgIH0gZWxzZSBvdXRwdXQucHVzaChzdHJpbmcuc2xpY2UobGFzdExhc3RJbmRleCkpO1xuICAgICAgcmV0dXJuIG91dHB1dFtMRU5HVEhdID4gc3BsaXRMaW1pdCA/IG91dHB1dC5zbGljZSgwLCBzcGxpdExpbWl0KSA6IG91dHB1dDtcbiAgICB9O1xuICAvLyBDaGFrcmEsIFY4XG4gIH0gZWxzZSBpZiAoJzAnWyRTUExJVF0odW5kZWZpbmVkLCAwKVtMRU5HVEhdKSB7XG4gICAgJHNwbGl0ID0gZnVuY3Rpb24gKHNlcGFyYXRvciwgbGltaXQpIHtcbiAgICAgIHJldHVybiBzZXBhcmF0b3IgPT09IHVuZGVmaW5lZCAmJiBsaW1pdCA9PT0gMCA/IFtdIDogX3NwbGl0LmNhbGwodGhpcywgc2VwYXJhdG9yLCBsaW1pdCk7XG4gICAgfTtcbiAgfVxuICAvLyAyMS4xLjMuMTcgU3RyaW5nLnByb3RvdHlwZS5zcGxpdChzZXBhcmF0b3IsIGxpbWl0KVxuICByZXR1cm4gW2Z1bmN0aW9uIHNwbGl0KHNlcGFyYXRvciwgbGltaXQpIHtcbiAgICB2YXIgTyA9IGRlZmluZWQodGhpcyk7XG4gICAgdmFyIGZuID0gc2VwYXJhdG9yID09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IHNlcGFyYXRvcltTUExJVF07XG4gICAgcmV0dXJuIGZuICE9PSB1bmRlZmluZWQgPyBmbi5jYWxsKHNlcGFyYXRvciwgTywgbGltaXQpIDogJHNwbGl0LmNhbGwoU3RyaW5nKE8pLCBzZXBhcmF0b3IsIGxpbWl0KTtcbiAgfSwgJHNwbGl0XTtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xucmVxdWlyZSgnLi9lczYucmVnZXhwLmZsYWdzJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciAkZmxhZ3MgPSByZXF1aXJlKCcuL19mbGFncycpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcbnZhciBUT19TVFJJTkcgPSAndG9TdHJpbmcnO1xudmFyICR0b1N0cmluZyA9IC8uL1tUT19TVFJJTkddO1xuXG52YXIgZGVmaW5lID0gZnVuY3Rpb24gKGZuKSB7XG4gIHJlcXVpcmUoJy4vX3JlZGVmaW5lJykoUmVnRXhwLnByb3RvdHlwZSwgVE9fU1RSSU5HLCBmbiwgdHJ1ZSk7XG59O1xuXG4vLyAyMS4yLjUuMTQgUmVnRXhwLnByb3RvdHlwZS50b1N0cmluZygpXG5pZiAocmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7IHJldHVybiAkdG9TdHJpbmcuY2FsbCh7IHNvdXJjZTogJ2EnLCBmbGFnczogJ2InIH0pICE9ICcvYS9iJzsgfSkpIHtcbiAgZGVmaW5lKGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHZhciBSID0gYW5PYmplY3QodGhpcyk7XG4gICAgcmV0dXJuICcvJy5jb25jYXQoUi5zb3VyY2UsICcvJyxcbiAgICAgICdmbGFncycgaW4gUiA/IFIuZmxhZ3MgOiAhREVTQ1JJUFRPUlMgJiYgUiBpbnN0YW5jZW9mIFJlZ0V4cCA/ICRmbGFncy5jYWxsKFIpIDogdW5kZWZpbmVkKTtcbiAgfSk7XG4vLyBGRjQ0LSBSZWdFeHAjdG9TdHJpbmcgaGFzIGEgd3JvbmcgbmFtZVxufSBlbHNlIGlmICgkdG9TdHJpbmcubmFtZSAhPSBUT19TVFJJTkcpIHtcbiAgZGVmaW5lKGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiAkdG9TdHJpbmcuY2FsbCh0aGlzKTtcbiAgfSk7XG59XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJGF0ID0gcmVxdWlyZSgnLi9fc3RyaW5nLWF0JykodHJ1ZSk7XG5cbi8vIDIxLjEuMy4yNyBTdHJpbmcucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoU3RyaW5nLCAnU3RyaW5nJywgZnVuY3Rpb24gKGl0ZXJhdGVkKSB7XG4gIHRoaXMuX3QgPSBTdHJpbmcoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbi8vIDIxLjEuNS4yLjEgJVN0cmluZ0l0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uICgpIHtcbiAgdmFyIE8gPSB0aGlzLl90O1xuICB2YXIgaW5kZXggPSB0aGlzLl9pO1xuICB2YXIgcG9pbnQ7XG4gIGlmIChpbmRleCA+PSBPLmxlbmd0aCkgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICBwb2ludCA9ICRhdChPLCBpbmRleCk7XG4gIHRoaXMuX2kgKz0gcG9pbnQubGVuZ3RoO1xuICByZXR1cm4geyB2YWx1ZTogcG9pbnQsIGRvbmU6IGZhbHNlIH07XG59KTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIEVDTUFTY3JpcHQgNiBzeW1ib2xzIHNoaW1cbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBNRVRBID0gcmVxdWlyZSgnLi9fbWV0YScpLktFWTtcbnZhciAkZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbnZhciB3a3MgPSByZXF1aXJlKCcuL193a3MnKTtcbnZhciB3a3NFeHQgPSByZXF1aXJlKCcuL193a3MtZXh0Jyk7XG52YXIgd2tzRGVmaW5lID0gcmVxdWlyZSgnLi9fd2tzLWRlZmluZScpO1xudmFyIGVudW1LZXlzID0gcmVxdWlyZSgnLi9fZW51bS1rZXlzJyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4vX2lzLWFycmF5Jyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgX2NyZWF0ZSA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKTtcbnZhciBnT1BORXh0ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4tZXh0Jyk7XG52YXIgJEdPUEQgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpO1xudmFyICREUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciBnT1BEID0gJEdPUEQuZjtcbnZhciBkUCA9ICREUC5mO1xudmFyIGdPUE4gPSBnT1BORXh0LmY7XG52YXIgJFN5bWJvbCA9IGdsb2JhbC5TeW1ib2w7XG52YXIgJEpTT04gPSBnbG9iYWwuSlNPTjtcbnZhciBfc3RyaW5naWZ5ID0gJEpTT04gJiYgJEpTT04uc3RyaW5naWZ5O1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xudmFyIEhJRERFTiA9IHdrcygnX2hpZGRlbicpO1xudmFyIFRPX1BSSU1JVElWRSA9IHdrcygndG9QcmltaXRpdmUnKTtcbnZhciBpc0VudW0gPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbnZhciBTeW1ib2xSZWdpc3RyeSA9IHNoYXJlZCgnc3ltYm9sLXJlZ2lzdHJ5Jyk7XG52YXIgQWxsU3ltYm9scyA9IHNoYXJlZCgnc3ltYm9scycpO1xudmFyIE9QU3ltYm9scyA9IHNoYXJlZCgnb3Atc3ltYm9scycpO1xudmFyIE9iamVjdFByb3RvID0gT2JqZWN0W1BST1RPVFlQRV07XG52YXIgVVNFX05BVElWRSA9IHR5cGVvZiAkU3ltYm9sID09ICdmdW5jdGlvbic7XG52YXIgUU9iamVjdCA9IGdsb2JhbC5RT2JqZWN0O1xuLy8gRG9uJ3QgdXNlIHNldHRlcnMgaW4gUXQgU2NyaXB0LCBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMTczXG52YXIgc2V0dGVyID0gIVFPYmplY3QgfHwgIVFPYmplY3RbUFJPVE9UWVBFXSB8fCAhUU9iamVjdFtQUk9UT1RZUEVdLmZpbmRDaGlsZDtcblxuLy8gZmFsbGJhY2sgZm9yIG9sZCBBbmRyb2lkLCBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9Njg3XG52YXIgc2V0U3ltYm9sRGVzYyA9IERFU0NSSVBUT1JTICYmICRmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBfY3JlYXRlKGRQKHt9LCAnYScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRQKHRoaXMsICdhJywgeyB2YWx1ZTogNyB9KS5hOyB9XG4gIH0pKS5hICE9IDc7XG59KSA/IGZ1bmN0aW9uIChpdCwga2V5LCBEKSB7XG4gIHZhciBwcm90b0Rlc2MgPSBnT1BEKE9iamVjdFByb3RvLCBrZXkpO1xuICBpZiAocHJvdG9EZXNjKSBkZWxldGUgT2JqZWN0UHJvdG9ba2V5XTtcbiAgZFAoaXQsIGtleSwgRCk7XG4gIGlmIChwcm90b0Rlc2MgJiYgaXQgIT09IE9iamVjdFByb3RvKSBkUChPYmplY3RQcm90bywga2V5LCBwcm90b0Rlc2MpO1xufSA6IGRQO1xuXG52YXIgd3JhcCA9IGZ1bmN0aW9uICh0YWcpIHtcbiAgdmFyIHN5bSA9IEFsbFN5bWJvbHNbdGFnXSA9IF9jcmVhdGUoJFN5bWJvbFtQUk9UT1RZUEVdKTtcbiAgc3ltLl9rID0gdGFnO1xuICByZXR1cm4gc3ltO1xufTtcblxudmFyIGlzU3ltYm9sID0gVVNFX05BVElWRSAmJiB0eXBlb2YgJFN5bWJvbC5pdGVyYXRvciA9PSAnc3ltYm9sJyA/IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnO1xufSA6IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgaW5zdGFuY2VvZiAkU3ltYm9sO1xufTtcblxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIEQpIHtcbiAgaWYgKGl0ID09PSBPYmplY3RQcm90bykgJGRlZmluZVByb3BlcnR5KE9QU3ltYm9scywga2V5LCBEKTtcbiAgYW5PYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBhbk9iamVjdChEKTtcbiAgaWYgKGhhcyhBbGxTeW1ib2xzLCBrZXkpKSB7XG4gICAgaWYgKCFELmVudW1lcmFibGUpIHtcbiAgICAgIGlmICghaGFzKGl0LCBISURERU4pKSBkUChpdCwgSElEREVOLCBjcmVhdGVEZXNjKDEsIHt9KSk7XG4gICAgICBpdFtISURERU5dW2tleV0gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSkgaXRbSElEREVOXVtrZXldID0gZmFsc2U7XG4gICAgICBEID0gX2NyZWF0ZShELCB7IGVudW1lcmFibGU6IGNyZWF0ZURlc2MoMCwgZmFsc2UpIH0pO1xuICAgIH0gcmV0dXJuIHNldFN5bWJvbERlc2MoaXQsIGtleSwgRCk7XG4gIH0gcmV0dXJuIGRQKGl0LCBrZXksIEQpO1xufTtcbnZhciAkZGVmaW5lUHJvcGVydGllcyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoaXQsIFApIHtcbiAgYW5PYmplY3QoaXQpO1xuICB2YXIga2V5cyA9IGVudW1LZXlzKFAgPSB0b0lPYmplY3QoUCkpO1xuICB2YXIgaSA9IDA7XG4gIHZhciBsID0ga2V5cy5sZW5ndGg7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChsID4gaSkgJGRlZmluZVByb3BlcnR5KGl0LCBrZXkgPSBrZXlzW2krK10sIFBba2V5XSk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgJGNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpdCwgUCkge1xuICByZXR1cm4gUCA9PT0gdW5kZWZpbmVkID8gX2NyZWF0ZShpdCkgOiAkZGVmaW5lUHJvcGVydGllcyhfY3JlYXRlKGl0KSwgUCk7XG59O1xudmFyICRwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKGtleSkge1xuICB2YXIgRSA9IGlzRW51bS5jYWxsKHRoaXMsIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSkpO1xuICBpZiAodGhpcyA9PT0gT2JqZWN0UHJvdG8gJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPUFN5bWJvbHMsIGtleSkpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIEUgfHwgIWhhcyh0aGlzLCBrZXkpIHx8ICFoYXMoQWxsU3ltYm9scywga2V5KSB8fCBoYXModGhpcywgSElEREVOKSAmJiB0aGlzW0hJRERFTl1ba2V5XSA/IEUgOiB0cnVlO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpIHtcbiAgaXQgPSB0b0lPYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBpZiAoaXQgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKSByZXR1cm47XG4gIHZhciBEID0gZ09QRChpdCwga2V5KTtcbiAgaWYgKEQgJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIShoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKSkgRC5lbnVtZXJhYmxlID0gdHJ1ZTtcbiAgcmV0dXJuIEQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eU5hbWVzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCkge1xuICB2YXIgbmFtZXMgPSBnT1BOKHRvSU9iamVjdChpdCkpO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBpID0gMDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIHtcbiAgICBpZiAoIWhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiBrZXkgIT0gSElEREVOICYmIGtleSAhPSBNRVRBKSByZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoaXQpIHtcbiAgdmFyIElTX09QID0gaXQgPT09IE9iamVjdFByb3RvO1xuICB2YXIgbmFtZXMgPSBnT1BOKElTX09QID8gT1BTeW1ib2xzIDogdG9JT2JqZWN0KGl0KSk7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGkgPSAwO1xuICB2YXIga2V5O1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkge1xuICAgIGlmIChoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYgKElTX09QID8gaGFzKE9iamVjdFByb3RvLCBrZXkpIDogdHJ1ZSkpIHJlc3VsdC5wdXNoKEFsbFN5bWJvbHNba2V5XSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8vIDE5LjQuMS4xIFN5bWJvbChbZGVzY3JpcHRpb25dKVxuaWYgKCFVU0VfTkFUSVZFKSB7XG4gICRTeW1ib2wgPSBmdW5jdGlvbiBTeW1ib2woKSB7XG4gICAgaWYgKHRoaXMgaW5zdGFuY2VvZiAkU3ltYm9sKSB0aHJvdyBUeXBlRXJyb3IoJ1N5bWJvbCBpcyBub3QgYSBjb25zdHJ1Y3RvciEnKTtcbiAgICB2YXIgdGFnID0gdWlkKGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTtcbiAgICB2YXIgJHNldCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgaWYgKHRoaXMgPT09IE9iamVjdFByb3RvKSAkc2V0LmNhbGwoT1BTeW1ib2xzLCB2YWx1ZSk7XG4gICAgICBpZiAoaGFzKHRoaXMsIEhJRERFTikgJiYgaGFzKHRoaXNbSElEREVOXSwgdGFnKSkgdGhpc1tISURERU5dW3RhZ10gPSBmYWxzZTtcbiAgICAgIHNldFN5bWJvbERlc2ModGhpcywgdGFnLCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG4gICAgfTtcbiAgICBpZiAoREVTQ1JJUFRPUlMgJiYgc2V0dGVyKSBzZXRTeW1ib2xEZXNjKE9iamVjdFByb3RvLCB0YWcsIHsgY29uZmlndXJhYmxlOiB0cnVlLCBzZXQ6ICRzZXQgfSk7XG4gICAgcmV0dXJuIHdyYXAodGFnKTtcbiAgfTtcbiAgcmVkZWZpbmUoJFN5bWJvbFtQUk9UT1RZUEVdLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5faztcbiAgfSk7XG5cbiAgJEdPUEQuZiA9ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG4gICREUC5mID0gJGRlZmluZVByb3BlcnR5O1xuICByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmYgPSBnT1BORXh0LmYgPSAkZ2V0T3duUHJvcGVydHlOYW1lcztcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpLmYgPSAkcHJvcGVydHlJc0VudW1lcmFibGU7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJykuZiA9ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbiAgaWYgKERFU0NSSVBUT1JTICYmICFyZXF1aXJlKCcuL19saWJyYXJ5JykpIHtcbiAgICByZWRlZmluZShPYmplY3RQcm90bywgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJywgJHByb3BlcnR5SXNFbnVtZXJhYmxlLCB0cnVlKTtcbiAgfVxuXG4gIHdrc0V4dC5mID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICByZXR1cm4gd3JhcCh3a3MobmFtZSkpO1xuICB9O1xufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7IFN5bWJvbDogJFN5bWJvbCB9KTtcblxuZm9yICh2YXIgZXM2U3ltYm9scyA9IChcbiAgLy8gMTkuNC4yLjIsIDE5LjQuMi4zLCAxOS40LjIuNCwgMTkuNC4yLjYsIDE5LjQuMi44LCAxOS40LjIuOSwgMTkuNC4yLjEwLCAxOS40LjIuMTEsIDE5LjQuMi4xMiwgMTkuNC4yLjEzLCAxOS40LjIuMTRcbiAgJ2hhc0luc3RhbmNlLGlzQ29uY2F0U3ByZWFkYWJsZSxpdGVyYXRvcixtYXRjaCxyZXBsYWNlLHNlYXJjaCxzcGVjaWVzLHNwbGl0LHRvUHJpbWl0aXZlLHRvU3RyaW5nVGFnLHVuc2NvcGFibGVzJ1xuKS5zcGxpdCgnLCcpLCBqID0gMDsgZXM2U3ltYm9scy5sZW5ndGggPiBqOyl3a3MoZXM2U3ltYm9sc1tqKytdKTtcblxuZm9yICh2YXIgd2VsbEtub3duU3ltYm9scyA9ICRrZXlzKHdrcy5zdG9yZSksIGsgPSAwOyB3ZWxsS25vd25TeW1ib2xzLmxlbmd0aCA+IGs7KSB3a3NEZWZpbmUod2VsbEtub3duU3ltYm9sc1trKytdKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ1N5bWJvbCcsIHtcbiAgLy8gMTkuNC4yLjEgU3ltYm9sLmZvcihrZXkpXG4gICdmb3InOiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIGhhcyhTeW1ib2xSZWdpc3RyeSwga2V5ICs9ICcnKVxuICAgICAgPyBTeW1ib2xSZWdpc3RyeVtrZXldXG4gICAgICA6IFN5bWJvbFJlZ2lzdHJ5W2tleV0gPSAkU3ltYm9sKGtleSk7XG4gIH0sXG4gIC8vIDE5LjQuMi41IFN5bWJvbC5rZXlGb3Ioc3ltKVxuICBrZXlGb3I6IGZ1bmN0aW9uIGtleUZvcihzeW0pIHtcbiAgICBpZiAoIWlzU3ltYm9sKHN5bSkpIHRocm93IFR5cGVFcnJvcihzeW0gKyAnIGlzIG5vdCBhIHN5bWJvbCEnKTtcbiAgICBmb3IgKHZhciBrZXkgaW4gU3ltYm9sUmVnaXN0cnkpIGlmIChTeW1ib2xSZWdpc3RyeVtrZXldID09PSBzeW0pIHJldHVybiBrZXk7XG4gIH0sXG4gIHVzZVNldHRlcjogZnVuY3Rpb24gKCkgeyBzZXR0ZXIgPSB0cnVlOyB9LFxuICB1c2VTaW1wbGU6IGZ1bmN0aW9uICgpIHsgc2V0dGVyID0gZmFsc2U7IH1cbn0pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnT2JqZWN0Jywge1xuICAvLyAxOS4xLjIuMiBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG4gIGNyZWF0ZTogJGNyZWF0ZSxcbiAgLy8gMTkuMS4yLjQgT2JqZWN0LmRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpXG4gIGRlZmluZVByb3BlcnR5OiAkZGVmaW5lUHJvcGVydHksXG4gIC8vIDE5LjEuMi4zIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpXG4gIGRlZmluZVByb3BlcnRpZXM6ICRkZWZpbmVQcm9wZXJ0aWVzLFxuICAvLyAxOS4xLjIuNiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApXG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvcjogJGdldE93blByb3BlcnR5RGVzY3JpcHRvcixcbiAgLy8gMTkuMS4yLjcgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbiAgZ2V0T3duUHJvcGVydHlOYW1lczogJGdldE93blByb3BlcnR5TmFtZXMsXG4gIC8vIDE5LjEuMi44IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoTylcbiAgZ2V0T3duUHJvcGVydHlTeW1ib2xzOiAkZ2V0T3duUHJvcGVydHlTeW1ib2xzXG59KTtcblxuLy8gMjQuMy4yIEpTT04uc3RyaW5naWZ5KHZhbHVlIFssIHJlcGxhY2VyIFssIHNwYWNlXV0pXG4kSlNPTiAmJiAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICghVVNFX05BVElWRSB8fCAkZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgUyA9ICRTeW1ib2woKTtcbiAgLy8gTVMgRWRnZSBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMge31cbiAgLy8gV2ViS2l0IGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyBudWxsXG4gIC8vIFY4IHRocm93cyBvbiBib3hlZCBzeW1ib2xzXG4gIHJldHVybiBfc3RyaW5naWZ5KFtTXSkgIT0gJ1tudWxsXScgfHwgX3N0cmluZ2lmeSh7IGE6IFMgfSkgIT0gJ3t9JyB8fCBfc3RyaW5naWZ5KE9iamVjdChTKSkgIT0gJ3t9Jztcbn0pKSwgJ0pTT04nLCB7XG4gIHN0cmluZ2lmeTogZnVuY3Rpb24gc3RyaW5naWZ5KGl0KSB7XG4gICAgdmFyIGFyZ3MgPSBbaXRdO1xuICAgIHZhciBpID0gMTtcbiAgICB2YXIgcmVwbGFjZXIsICRyZXBsYWNlcjtcbiAgICB3aGlsZSAoYXJndW1lbnRzLmxlbmd0aCA+IGkpIGFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgJHJlcGxhY2VyID0gcmVwbGFjZXIgPSBhcmdzWzFdO1xuICAgIGlmICghaXNPYmplY3QocmVwbGFjZXIpICYmIGl0ID09PSB1bmRlZmluZWQgfHwgaXNTeW1ib2woaXQpKSByZXR1cm47IC8vIElFOCByZXR1cm5zIHN0cmluZyBvbiB1bmRlZmluZWRcbiAgICBpZiAoIWlzQXJyYXkocmVwbGFjZXIpKSByZXBsYWNlciA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICBpZiAodHlwZW9mICRyZXBsYWNlciA9PSAnZnVuY3Rpb24nKSB2YWx1ZSA9ICRyZXBsYWNlci5jYWxsKHRoaXMsIGtleSwgdmFsdWUpO1xuICAgICAgaWYgKCFpc1N5bWJvbCh2YWx1ZSkpIHJldHVybiB2YWx1ZTtcbiAgICB9O1xuICAgIGFyZ3NbMV0gPSByZXBsYWNlcjtcbiAgICByZXR1cm4gX3N0cmluZ2lmeS5hcHBseSgkSlNPTiwgYXJncyk7XG4gIH1cbn0pO1xuXG4vLyAxOS40LjMuNCBTeW1ib2wucHJvdG90eXBlW0BAdG9QcmltaXRpdmVdKGhpbnQpXG4kU3ltYm9sW1BST1RPVFlQRV1bVE9fUFJJTUlUSVZFXSB8fCByZXF1aXJlKCcuL19oaWRlJykoJFN5bWJvbFtQUk9UT1RZUEVdLCBUT19QUklNSVRJVkUsICRTeW1ib2xbUFJPVE9UWVBFXS52YWx1ZU9mKTtcbi8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKCRTeW1ib2wsICdTeW1ib2wnKTtcbi8vIDIwLjIuMS45IE1hdGhbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKE1hdGgsICdNYXRoJywgdHJ1ZSk7XG4vLyAyNC4zLjMgSlNPTltAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoZ2xvYmFsLkpTT04sICdKU09OJywgdHJ1ZSk7XG4iLCIndXNlIHN0cmljdCc7XG4vLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9BcnJheS5wcm90b3R5cGUuaW5jbHVkZXNcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgJGluY2x1ZGVzID0gcmVxdWlyZSgnLi9fYXJyYXktaW5jbHVkZXMnKSh0cnVlKTtcblxuJGV4cG9ydCgkZXhwb3J0LlAsICdBcnJheScsIHtcbiAgaW5jbHVkZXM6IGZ1bmN0aW9uIGluY2x1ZGVzKGVsIC8qICwgZnJvbUluZGV4ID0gMCAqLykge1xuICAgIHJldHVybiAkaW5jbHVkZXModGhpcywgZWwsIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG5cbnJlcXVpcmUoJy4vX2FkZC10by11bnNjb3BhYmxlcycpKCdpbmNsdWRlcycpO1xuIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtb2JqZWN0LXZhbHVlcy1lbnRyaWVzXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyICRlbnRyaWVzID0gcmVxdWlyZSgnLi9fb2JqZWN0LXRvLWFycmF5JykodHJ1ZSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnT2JqZWN0Jywge1xuICBlbnRyaWVzOiBmdW5jdGlvbiBlbnRyaWVzKGl0KSB7XG4gICAgcmV0dXJuICRlbnRyaWVzKGl0KTtcbiAgfVxufSk7XG4iLCIvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1vYmplY3QtdmFsdWVzLWVudHJpZXNcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgJHZhbHVlcyA9IHJlcXVpcmUoJy4vX29iamVjdC10by1hcnJheScpKGZhbHNlKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdPYmplY3QnLCB7XG4gIHZhbHVlczogZnVuY3Rpb24gdmFsdWVzKGl0KSB7XG4gICAgcmV0dXJuICR2YWx1ZXMoaXQpO1xuICB9XG59KTtcbiIsInJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKSgnYXN5bmNJdGVyYXRvcicpO1xuIiwidmFyICRpdGVyYXRvcnMgPSByZXF1aXJlKCcuL2VzNi5hcnJheS5pdGVyYXRvcicpO1xudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyIHdrcyA9IHJlcXVpcmUoJy4vX3drcycpO1xudmFyIElURVJBVE9SID0gd2tzKCdpdGVyYXRvcicpO1xudmFyIFRPX1NUUklOR19UQUcgPSB3a3MoJ3RvU3RyaW5nVGFnJyk7XG52YXIgQXJyYXlWYWx1ZXMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbnZhciBET01JdGVyYWJsZXMgPSB7XG4gIENTU1J1bGVMaXN0OiB0cnVlLCAvLyBUT0RPOiBOb3Qgc3BlYyBjb21wbGlhbnQsIHNob3VsZCBiZSBmYWxzZS5cbiAgQ1NTU3R5bGVEZWNsYXJhdGlvbjogZmFsc2UsXG4gIENTU1ZhbHVlTGlzdDogZmFsc2UsXG4gIENsaWVudFJlY3RMaXN0OiBmYWxzZSxcbiAgRE9NUmVjdExpc3Q6IGZhbHNlLFxuICBET01TdHJpbmdMaXN0OiBmYWxzZSxcbiAgRE9NVG9rZW5MaXN0OiB0cnVlLFxuICBEYXRhVHJhbnNmZXJJdGVtTGlzdDogZmFsc2UsXG4gIEZpbGVMaXN0OiBmYWxzZSxcbiAgSFRNTEFsbENvbGxlY3Rpb246IGZhbHNlLFxuICBIVE1MQ29sbGVjdGlvbjogZmFsc2UsXG4gIEhUTUxGb3JtRWxlbWVudDogZmFsc2UsXG4gIEhUTUxTZWxlY3RFbGVtZW50OiBmYWxzZSxcbiAgTWVkaWFMaXN0OiB0cnVlLCAvLyBUT0RPOiBOb3Qgc3BlYyBjb21wbGlhbnQsIHNob3VsZCBiZSBmYWxzZS5cbiAgTWltZVR5cGVBcnJheTogZmFsc2UsXG4gIE5hbWVkTm9kZU1hcDogZmFsc2UsXG4gIE5vZGVMaXN0OiB0cnVlLFxuICBQYWludFJlcXVlc3RMaXN0OiBmYWxzZSxcbiAgUGx1Z2luOiBmYWxzZSxcbiAgUGx1Z2luQXJyYXk6IGZhbHNlLFxuICBTVkdMZW5ndGhMaXN0OiBmYWxzZSxcbiAgU1ZHTnVtYmVyTGlzdDogZmFsc2UsXG4gIFNWR1BhdGhTZWdMaXN0OiBmYWxzZSxcbiAgU1ZHUG9pbnRMaXN0OiBmYWxzZSxcbiAgU1ZHU3RyaW5nTGlzdDogZmFsc2UsXG4gIFNWR1RyYW5zZm9ybUxpc3Q6IGZhbHNlLFxuICBTb3VyY2VCdWZmZXJMaXN0OiBmYWxzZSxcbiAgU3R5bGVTaGVldExpc3Q6IHRydWUsIC8vIFRPRE86IE5vdCBzcGVjIGNvbXBsaWFudCwgc2hvdWxkIGJlIGZhbHNlLlxuICBUZXh0VHJhY2tDdWVMaXN0OiBmYWxzZSxcbiAgVGV4dFRyYWNrTGlzdDogZmFsc2UsXG4gIFRvdWNoTGlzdDogZmFsc2Vcbn07XG5cbmZvciAodmFyIGNvbGxlY3Rpb25zID0gZ2V0S2V5cyhET01JdGVyYWJsZXMpLCBpID0gMDsgaSA8IGNvbGxlY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gIHZhciBOQU1FID0gY29sbGVjdGlvbnNbaV07XG4gIHZhciBleHBsaWNpdCA9IERPTUl0ZXJhYmxlc1tOQU1FXTtcbiAgdmFyIENvbGxlY3Rpb24gPSBnbG9iYWxbTkFNRV07XG4gIHZhciBwcm90byA9IENvbGxlY3Rpb24gJiYgQ29sbGVjdGlvbi5wcm90b3R5cGU7XG4gIHZhciBrZXk7XG4gIGlmIChwcm90bykge1xuICAgIGlmICghcHJvdG9bSVRFUkFUT1JdKSBoaWRlKHByb3RvLCBJVEVSQVRPUiwgQXJyYXlWYWx1ZXMpO1xuICAgIGlmICghcHJvdG9bVE9fU1RSSU5HX1RBR10pIGhpZGUocHJvdG8sIFRPX1NUUklOR19UQUcsIE5BTUUpO1xuICAgIEl0ZXJhdG9yc1tOQU1FXSA9IEFycmF5VmFsdWVzO1xuICAgIGlmIChleHBsaWNpdCkgZm9yIChrZXkgaW4gJGl0ZXJhdG9ycykgaWYgKCFwcm90b1trZXldKSByZWRlZmluZShwcm90bywga2V5LCAkaXRlcmF0b3JzW2tleV0sIHRydWUpO1xuICB9XG59XG4iLCJpbXBvcnQgTjE5YmFzZUFwcGxldCBmcm9tICcuL24xOWJhc2VBcHBsZXQnO1xuaW1wb3J0IE4xOXBvcHVwQ29udHJvbGxlciBmcm9tICcuL24xOXBvcHVwQ29udHJvbGxlcic7XG5cblNpZWJlbEFwcEZhY2FkZS5OMTlIZWxwZXIgPSBjbGFzcyBleHRlbmRzIE4xOWJhc2VBcHBsZXQge1xuICBjb25zdHJ1Y3RvcihzZXR0aW5ncykge1xuICAgIGNvbnN0IHsgYXBwbGV0TmFtZSB9ID0gc2V0dGluZ3M7XG4gICAgaWYgKGFwcGxldE5hbWUpIHtcbiAgICAgIGNvbnN0IGFwcGxldCA9IFNpZWJlbEFwcC5TX0FwcC5HZXRBY3RpdmVWaWV3KCkuR2V0QXBwbGV0KGFwcGxldE5hbWUpO1xuICAgICAgaWYgKCFhcHBsZXQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gZ2V0IHRoZSByZWZlcmVuY2UgdG8gdGhlIGFwcGxldCBieSB0aGUgJHthcHBsZXROYW1lfSBuYW1lYCk7XG4gICAgICB9XG4gICAgICBzdXBlcihPYmplY3QuYXNzaWduKHt9LCBzZXR0aW5ncywgeyBwbTogYXBwbGV0LkdldFBNb2RlbCgpIH0pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3VwZXIoc2V0dGluZ3MpO1xuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKCdOZXh1cyBtYWluIGNsYXNzIHN0YXJ0ZWQuLi4uJywgdGhpcy5hcHBsZXROYW1lKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgLy8gZ2V0IHRoZSBuMTlwb3B1cENvbnRyb2xsZXIgc2luZ2xldG9uIGluc3RhbmNlXG4gICAgdGhpcy5uMTlwb3B1cENvbnRyb2xsZXIgPSBOMTlwb3B1cENvbnRyb2xsZXIuaW5zdGFuY2U7XG4gIH1cblxuICBjbG9zZVBvcHVwQXBwbGV0KCkge1xuICAgIHJldHVybiB0aGlzLm4xOXBvcHVwQ29udHJvbGxlci5jbG9zZVBvcHVwQXBwbGV0KCk7XG4gIH1cblxuICBfc2hvd1BvcHVwQXBwbGV0KG5hbWUsIGhpZGUsIGNiKSB7XG4gICAgaWYgKCF0aGlzLm4xOXBvcHVwQ29udHJvbGxlcikge1xuICAgICAgLy8gaXQgaXMgYSBwb3B1cCAtIHByb2JhYmx5IHNob3VsZCBuZXZlciBoYXBwZW4/XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ09wZW5uaW5nIHBvcHVwIG9uIHRoZSBwb3B1cCBpcyBub3Qgc3VwcG9ydGVkIG5vdycpO1xuICAgIH1cbiAgICBpZiAoIXRoaXMubjE5cG9wdXBDb250cm9sbGVyLmNhbk9wZW5Qb3B1cCgpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBvcGVuIHBvcHVwIChjdXJyZW50bHkgZXhpc3RzIHJlc29sdmUgZnVuY3Rpb24pIScpO1xuICAgICAgLy8gcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLnZpZXcuU2V0QWN0aXZlQXBwbGV0SW50ZXJuYWwodGhpcy5hcHBsZXQpOyAvLyBvciBTZXRBY3RpdmVBcHBsZXRcbiAgICB0aGlzLl9zZXRBY3RpdmVDb250cm9sKG5hbWUpO1xuICAgIHJldHVybiB0aGlzLm4xOXBvcHVwQ29udHJvbGxlci5zaG93UG9wdXBBcHBsZXQoaGlkZSwgY2IsIHRoaXMpO1xuICB9XG5cbiAgc2hvd012Z0FwcGxldChuYW1lLCBoaWRlLCBjYikge1xuICAgIC8vIFRPRE86IGNoZWNrIGlmIG5hbWUgaXMgY29ycmVjdD9cbiAgICByZXR1cm4gdGhpcy5fc2hvd1BvcHVwQXBwbGV0KG5hbWUsIGhpZGUsIGNiKTtcbiAgfVxuXG4gIHNob3dQaWNrQXBwbGV0KG5hbWUsIGhpZGUsIGNiKSB7XG4gICAgLy8gVE9ETzogY2hlY2sgaWYgbmFtZSBpcyBjb3JyZWN0P1xuICAgIHJldHVybiB0aGlzLl9zaG93UG9wdXBBcHBsZXQobmFtZSwgaGlkZSwgY2IpO1xuICB9XG5cbiAgX25ld0Fzc29jUmVjb3JkKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHRoaXMucG0uRXhlY3V0ZU1ldGhvZCgnSW52b2tlTWV0aG9kJywgJ05ld1JlY29yZCcsIG51bGwsIHtcbiAgICAgIGFzeW5jOiB0cnVlLFxuICAgICAgY2I6IHJlc29sdmUsXG4gICAgfSkpO1xuICB9XG5cbiAgb3BlbkFzc29jQXBwbGV0KGNiKSB7IC8vIHRoaXMgbWV0aG9kIHNob3VsZCBiZSBhdmFpbGFibGUgZm9yIGNoaWxkIGJ1c2luZXNzIGNvbXBvbmVudCBpbiBNOk0gcmVsYXRpb25zaGlwXG4gICAgLy8gVE9ETzogY2hlY2sgaWYgYXBwbGV0IHByb3ZpZGVzIHN1Y2ggY2FwYWJpbGl0aWVzP1xuICAgIGlmICghdGhpcy5uMTlwb3B1cENvbnRyb2xsZXIuY2FuT3BlblBvcHVwKCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IG9wZW4gcG9wdXAgKGN1cnJlbnRseSBleGlzdHMgcmVzb2x2ZSBmdW5jdGlvbikhJyk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLm4xOXBvcHVwQ29udHJvbGxlci5fb3BlbkFzc29jQXBwbGV0KHRoaXMuX25ld0Fzc29jUmVjb3JkLmJpbmQodGhpcyksIGNiKTtcbiAgfVxuXG4gIGRyaWxsZG93bihjb250cm9sTmFtZSkge1xuICAgIC8vIFRPRE86IGNoZWNrIGlzTGluayBvZiBjb250cm9sP1xuICAgIC8vIGluZGV4IGlzIG5vdCBlZmZlY3RpdmUsIGFuZCBkcmlsbGRvd24gYW55d2F5IGhhcHBlbnMgb24gdGhlIHNlbGVjdGVkIHJlY29yZFxuICAgIGlmICghdGhpcy5pc0xpc3RBcHBsZXQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmdldFNlbGVjdGlvbigpO1xuICAgIHJldHVybiB0aGlzLnBtLkV4ZWN1dGVNZXRob2QoJ09uRHJpbGxEb3duJywgY29udHJvbE5hbWUsIGluZGV4KTtcbiAgfVxuXG4gIGdvdG9WaWV3KHRhcmdldFZpZXdOYW1lLCB0YXJnZXRBcHBsZXROYW1lLCBpZCkge1xuICAgIC8vIFRPRE86IGdldCB0aGUgYXBwbGV0IG5hbWUgZnJvbSB0aGUgdmlldyBkZWZpbml0aW9uP1xuICAgIGNvbnN0IHJvd0lkID0gdHlwZW9mIGlkID09PSAndW5kZWZpbmVkJyA/IHRoaXMuZ2V0Q3VycmVudFJlY29yZCh0cnVlKS5JZCA6IGlkO1xuICAgIGxldCBTV0VDbWQgPSBgR290b1ZpZXcmU1dFVmlldz0ke3RhcmdldFZpZXdOYW1lfSZTV0VBcHBsZXQwPSR7dGFyZ2V0QXBwbGV0TmFtZX1gO1xuICAgIFNXRUNtZCArPSBgJlNXRUJVPTEmU1dFS2VlcENvbnRleHQ9RkFMU0UmU1dFUm93SWQwPSR7cm93SWR9YDtcbiAgICBTV0VDbWQgPSBlbmNvZGVVUkkoU1dFQ21kKTtcbiAgICBTaWViZWxBcHAuU19BcHAuR290b1ZpZXcodGFyZ2V0Vmlld05hbWUsICcnLCBTV0VDbWQsICcnKTtcbiAgfVxuXG4gIHJlSW5pdFBvcHVwKCkgeyAvLyBkbyB3ZSBuZWVkIHRvIGtlZXAgYWxzbyBzdGF0aWMgUmVJbml0UG9wdXBcbiAgICB0aGlzLm4xOXBvcHVwQ29udHJvbGxlci5pc1BvcHVwSGlkZGVuID0gZmFsc2U7XG5cbiAgICBjb25zdCBwb3B1cFBNID0gU2llYmVsQXBwLlNfQXBwLkdldFBvcHVwUE0oKTtcbiAgICBwb3B1cFBNLkluaXQoKTtcbiAgICBwb3B1cFBNLlNldHVwKCk7XG4gIH1cblxuICBzdGF0aWMgUmVJbml0UG9wdXAoKSB7IC8vIGNvdWxkIGJlIHJlbW92ZWQgaW4gdGhlIG5leHQgdmVyc2lvblxuICAgIGNvbnN0IHBvcHVwUE0gPSBTaWViZWxBcHAuU19BcHAuR2V0UG9wdXBQTSgpO1xuICAgIHBvcHVwUE0uSW5pdCgpO1xuICAgIHBvcHVwUE0uU2V0dXAoKTtcbiAgfVxuXG4gIHBpY2tSZWNvcmRCeUlkKGNvbnRyb2xOYW1lLCByb3dJZCkge1xuICAgIC8vIFRPRE86IGNoZWNrIGlmIHRoZSBjb250cm9sIGFsbG93cyBwaWNraW5nP1xuICAgIHJldHVybiB0aGlzLnNob3dQaWNrQXBwbGV0KGNvbnRyb2xOYW1lLCB0cnVlKVxuICAgICAgLnRoZW4ob2JqID0+IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dCgoKSA9PiByZXNvbHZlKG9iaiksIDApKSlcbiAgICAgIC50aGVuKChvYmopID0+IHtcbiAgICAgICAgY29uc3QgZm91bmQgPSBvYmoucG9wdXBBcHBsZXROMTkucXVlcnlCeUlkU3luYyhyb3dJZCk7XG4gICAgICAgIGlmIChmb3VuZCAhPT0gMSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIHJlY29yZCAke3Jvd0lkfSBpcyBub3QgZm91bmQgKCR7Zm91bmR9KWApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvYmoucG9wdXBBcHBsZXROMTkucGlja1JlY29yZCgpO1xuICAgICAgfSk7XG4gIH1cblxuICBhc3NvY1JlY29yZHNCeUlkKGNvbnRyb2xOYW1lLCBhcnIsIGNsb3NlQXBwbGV0KSB7XG4gICAgLy8gVE9ETzogY2hlY2sgaWYgdGhlIGNvbnRyb2wgYWxsb3dzIG12Zz9cbiAgICByZXR1cm4gdGhpcy5zaG93TXZnQXBwbGV0KGNvbnRyb2xOYW1lLCB0cnVlKVxuICAgICAgLnRoZW4ob2JqID0+IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dCgoKSA9PiByZXNvbHZlKG9iaiksIDApKSlcbiAgICAgIC50aGVuKG9iaiA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICBjb25zdCBmb3VuZCA9IG9iai5hc3NvY0FwcGxldE4xOS5xdWVyeUJ5SWRTeW5jKGFycik7XG4gICAgICAgIGlmIChmb3VuZCAhPT0gYXJyLmxlbmd0aCkge1xuICAgICAgICAgIC8vIHNob3VsZCB3ZSB0aHJvdyBhbiBlcnJvcj9cbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICAgIGNvbnNvbGUud2FybihgVGhlIGFtb3VudCBvZiBmb3VuZCByZWNvcmRzKCR7Zm91bmR9KSBkb2VzIG5vdCBtYXRjaCB0byBpbnB1dCBhcnJheSBsZW5ndGgoJHthcnIubGVuZ3RofSlgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZm91bmQgPiAwKSB7IC8vIHdlIGhhdmUgc29tZXRoaW5nIHRvIGFkZFxuICAgICAgICAgIG9iai5wb3B1cEFwcGxldE4xOS5hZGRBbGxSZWNvcmRzKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNsb3NlQXBwbGV0KSB7XG4gICAgICAgICAgdGhpcy5jbG9zZVBvcHVwQXBwbGV0KCk7XG4gICAgICAgICAgcmVzb2x2ZShmb3VuZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb2JqLmZvdW5kID0gZm91bmQ7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgICAgICByZXNvbHZlKG9iaik7XG4gICAgICAgIH1cbiAgICAgIH0pKTtcbiAgfVxufTtcbiIsImltcG9ydCBOMTlub3RpZmljYXRpb25zIGZyb20gJy4vbjE5bm90aWZpY2F0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE4xOWJhc2VBcHBsZXQge1xuICBjb25zdHJ1Y3RvcihzZXR0aW5ncykge1xuICAgIHRoaXMuY29uc3RzID0gU2llYmVsSlMuRGVwZW5kZW5jeSgnU2llYmVsQXBwLkNvbnN0YW50cycpO1xuICAgIHRoaXMudXRpbHMgPSBTaWViZWxKUy5EZXBlbmRlbmN5KCdTaWViZWxBcHAuVXRpbHMnKTtcbiAgICB0aGlzLnBtID0gc2V0dGluZ3MucG07XG4gICAgdGhpcy5jb252ZXJ0RGF0ZXMgPSBzZXR0aW5ncy5jb252ZXJ0RGF0ZXM7XG4gICAgdGhpcy52aWV3ID0gU2llYmVsQXBwLlNfQXBwLkdldEFjdGl2ZVZpZXcoKTtcbiAgICB0aGlzLmFwcGxldE5hbWUgPSB0aGlzLnBtLkdldCgnR2V0TmFtZScpO1xuICAgIHRoaXMuYXBwbGV0ID0gdGhpcy52aWV3LkdldEFwcGxldCh0aGlzLmFwcGxldE5hbWUpO1xuICAgIHRoaXMuaXNMaXN0QXBwbGV0ID0gdHlwZW9mIHRoaXMucG0uR2V0KCdHZXRMaXN0T2ZDb2x1bW5zJykgIT09ICd1bmRlZmluZWQnO1xuICAgIHRoaXMucmVxdWlyZWQgPSBbXTsgLy8gd2lsbCBiZSBlbXB0eSBmb3IgdGhlIGxpc3QgYXBwbGV0XG4gICAgdGhpcy5sb3YgPSB7fTtcbiAgICB0aGlzLmJvb2xPYmplY3QgPSBuZXcgU2llYmVsQXBwLlNfQXBwLkRhdHVtQm9vbE9iamVjdCgpO1xuXG4gICAgdGhpcy5sb2FkTG9jYWxlRGF0YSgpO1xuXG4gICAgdGhpcy5maWVsZFRvQ29udHJvbE1hcCA9IHRoaXMuX2dldEZpZWxkVG9Db250cm9sTWFwKCk7XG4gICAgY29uc3QgYmNJZCA9IHRoaXMuYXBwbGV0LkdldEJDSWQoKTtcbiAgICB0aGlzLm5vdGlmaWNhdGlvbnMgPSBuZXcgTjE5bm90aWZpY2F0aW9ucyh0aGlzLnBtLCB0aGlzLmNvbnN0cywgYmNJZCwgdGhpcy5maWVsZFRvQ29udHJvbE1hcCk7XG5cbiAgICAvLyBwb3B1bGF0ZSB0aGUgcmVxdWlyZWQgYXJyYXkgZm9yIGZvcm0gYXBwbGV0c1xuICAgIGlmICghdGhpcy5pc0xpc3RBcHBsZXQpIHtcbiAgICAgIGNvbnN0IGFwcGxldElkID0gYHNfJHt0aGlzLnBtLkdldCgnR2V0RnVsbElkJyl9X2RpdmA7XG4gICAgICBjb25zdCBhcHBsZXRJbnB1dHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChhcHBsZXRJZCkucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKTtcbiAgICAgIGFwcGxldElucHV0cy5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICBpZiAoZWwuYXR0cmlidXRlc1snYXJpYS1yZXF1aXJlZCddKSB7XG4gICAgICAgICAgdGhpcy5yZXF1aXJlZC5wdXNoKGVsLmF0dHJpYnV0ZXMubmFtZS5ub2RlVmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBsaXN0ZW5lciB0byBnZXQgZHluYW1pYyBMT1ZzXG4gICAgdGhpcy5wbS5BdHRhY2hQTUJpbmRpbmcoJ1VwZGF0ZVF1aWNrUGlja0luZm8nLCAoaW5wdXROYW1lLCBhcmcsIGFycikgPT4ge1xuICAgICAgY29uc3Qgdmlld05hbWUgPSB0aGlzLnZpZXcuR2V0TmFtZSgpO1xuICAgICAgaWYgKHZpZXdOYW1lID09PSBhcnJbMV0gJiYgdGhpcy5hcHBsZXROYW1lID09PSBhcnJbMl0pIHtcbiAgICAgICAgaWYgKCdmYWxzZScgPT09IGFycls0XSkge1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICAgICAgY29uc29sZS53YXJuKGBbTjE5XVBpY2tsaXN0IGlzIG5vdCBhc3NvY2lhdGVkIHdpdGggdGhlIGNvbnRyb2wgLSAke0pTT04uc3RyaW5naWZ5KGFycil9YCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sb3ZbYXJyWzNdXSA9IGFyci5zbGljZSgpLnNwbGljZSg1KS5maWx0ZXIoZWwgPT4gZWwgIT09ICcnKTtcbiAgICAgICAgLy8gVE9ETzogZG8gd2UgbmVlZCB0byBpbmRpY2F0ZSB3aGVuIGFuIGVtcHR5IHZhbHVlIGlzIGFsbG93ZWQ/XG4gICAgICB9XG4gICAgfSwgeyBzY29wZTogdGhpcyB9KTtcblxuICAgIHRoaXMuaXNUcmVlQXBwbGV0ID0gU2llYmVsQXBwRmFjYWRlLkV4cGxvcmVyUHJlc2VudGF0aW9uTW9kZWwgPT09IHRoaXMucG0uY29uc3RydWN0b3I7XG4gICAgaWYgKHRoaXMuaXNUcmVlQXBwbGV0KSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKCdUaGlzIGlzIGEgdHJlZSBhcHBsZXQuLi4gaXQgaXMgZWFzaWVyIGFuZCBzYWZlciB0byB1c2UgbGlzdCBvciBmb3JtIGFwcGxldHMnKTtcbiAgICB9XG4gIH1cblxuICBsb2FkTG9jYWxlRGF0YSgpIHtcbiAgICBjb25zdCBsb2NhbGVPYmplY3QgPSBTaWViZWxBcHAuU19BcHAuTG9jYWxlT2JqZWN0O1xuICAgIGNvbnN0IGRhdGVUaW1lRm9ybWF0ID0gbG9jYWxlT2JqZWN0LkdldFByb2ZpbGUodGhpcy5jb25zdHMuZ2V0KCdMT0NBTF9EQVRFVElNRV9GT1JNQVQnKSk7XG4gICAgdGhpcy5sb2NhbGVEYXRhID0ge1xuICAgICAgZmlyc3REYXlPZldlZWs6IGxvY2FsZU9iamVjdC5HZXRXZWVrU3RhcnREYXkoKSxcbiAgICAgIGRhdGVGb3JtYXQ6IGxvY2FsZU9iamVjdC5HZXRQcm9maWxlKHRoaXMuY29uc3RzLmdldCgnTE9DQUxfREFURV9GT1JNQVQnKSksXG4gICAgICBkYXRlVGltZUZvcm1hdCxcbiAgICAgIGlzMjRob3Vyc0Zvcm1hdDogIS9wJC8udGVzdChkYXRlVGltZUZvcm1hdCksXG4gICAgICBsb2NhbENvdW50cnlQaG9uZUNvZGU6IGxvY2FsZU9iamVjdC5HZXRQcm9maWxlKHRoaXMuY29uc3RzLmdldCgnTE9DQUxfUEhPTkVfQ09VTlRSWScpKSxcbiAgICB9O1xuICAgIHRoaXMubG9jYWxlRGF0YS5tb250aHMgPSBbXTtcbiAgICB0aGlzLmxvY2FsZURhdGEuc2hvcnRNb250aHMgPSBbXTtcbiAgICBjb25zdCBtb250aHMgPSBsb2NhbGVPYmplY3QuR2V0RGF0YSgnTW9udGgnLCBsb2NhbGVPYmplY3QubV9zcE1vbnRoUFMpO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDEyOyBpICs9IDEpIHtcbiAgICAgIHRoaXMubG9jYWxlRGF0YS5tb250aHMucHVzaChtb250aHMuR2V0UHJvcGVydHkoYCR7aX06MGApKTtcbiAgICAgIHRoaXMubG9jYWxlRGF0YS5zaG9ydE1vbnRocy5wdXNoKG1vbnRocy5HZXRQcm9wZXJ0eShgJHtpfToxYCkpO1xuICAgIH1cblxuICAgIGNvbnN0IHdlZWtEYXlzID0gbG9jYWxlT2JqZWN0LkdldERhdGEoJ0RheU9mV2VlaycsIGxvY2FsZU9iamVjdC5tX3NwRGF5T2ZXZWVrUFMpO1xuICAgIHRoaXMubG9jYWxlRGF0YS53ZWVrRGF5cyA9IFtdO1xuICAgIHRoaXMubG9jYWxlRGF0YS53ZWVrRGF5czMgPSBbXTtcbiAgICB0aGlzLmxvY2FsZURhdGEud2Vla0RheXMxID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpICs9IDEpIHtcbiAgICAgIHRoaXMubG9jYWxlRGF0YS53ZWVrRGF5cy5wdXNoKHdlZWtEYXlzLkdldFByb3BlcnR5KGAke2l9OjBgKSk7XG4gICAgICB0aGlzLmxvY2FsZURhdGEud2Vla0RheXMzLnB1c2god2Vla0RheXMuR2V0UHJvcGVydHkoYCR7aX06MWApKTtcbiAgICAgIHRoaXMubG9jYWxlRGF0YS53ZWVrRGF5czEucHVzaCh3ZWVrRGF5cy5HZXRQcm9wZXJ0eShgJHtpfToyYCkpO1xuICAgIH1cbiAgfVxuXG4gIHN1YnNjcmliZShmdW5jKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2xhc3MtbWV0aG9kcy11c2UtdGhpc1xuICAgIC8vIFRPRE8gOiBhY2NlcHQgYWxzbyBjb250ZXh0IGZvciBmdW5jdGlvbiwgb3IgdGhlIGNhbGxlciBiaW5kcyB0aGUgY29udGV4dCB0byB0aGUgZnVuY3Rpb24/XG4gICAgcmV0dXJuIHRoaXMubm90aWZpY2F0aW9ucy5zdWJzY3JpYmUoZnVuYyk7XG4gIH1cblxuICB1bnN1YnNjcmliZSh0b2tlbikgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZmljYXRpb25zLnVuc3Vic2NyaWJlKHRva2VuKTtcbiAgfVxuXG4gIF9nZXRDb250cm9sKG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5wbS5FeGVjdXRlTWV0aG9kKCdHZXRDb250cm9sJywgbmFtZSk7XG4gIH1cblxuICBfcmV0dXJuQ29udHJvbHMoKSB7XG4gICAgaWYgKHRoaXMuaXNMaXN0QXBwbGV0KSB7XG4gICAgICByZXR1cm4gdGhpcy5wbS5HZXQoJ0dldExpc3RPZkNvbHVtbnMnKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucG0uR2V0KCdHZXRDb250cm9scycpO1xuICB9XG5cbiAgLy8gY2FsbGVkIGludG8gdGhlIGdldENvbnRyb2xzIHRvIHJlZHVjZSB0aGUgYW1vdW50IG9mIHRoZSByZXR1cm5lZCBjb250cm9sc1xuICBfaXNTa2lwQ29udHJvbCh0eXBlKSB7XG4gICAgLy8gaHR0cHM6Ly9kb2NzLm9yYWNsZS5jb20vY2QvRTc0ODkwXzAxL2Jvb2tzL0NvbmZpZ09wZW5VSS9hcHBlbmRpeF9hX2FwaTAwMi5odG1cbiAgICAvLyBtYXliZSB3ZSBuZWVkIHRvIGV4Y2x1ZGUgbW9yZSB0eXBlc1xuICAgIHJldHVybiAodHlwZSA9PT0gdGhpcy5jb25zdHMuZ2V0KCdTV0VfUFNUX0JVVFRPTl9DVFJMJykpXG4gICAgICB8fCAodHlwZSA9PT0gdGhpcy5jb25zdHMuZ2V0KCdTV0VfQ1RSTF9MSU5LJykpXG4gICAgICB8fCAodHlwZSA9PT0gdGhpcy5jb25zdHMuZ2V0KCdTV0VfQ1RSTF9QTEFJTlRFWFQnKSlcbiAgICAgIHx8ICh0eXBlID09PSAnbnVsbCcpOyAvLyBHZXRVaVR5cGUgcmV0dXJucyBzdHJpbmdcbiAgfVxuXG4gIF9pc1JlcXVpcmVkKGlucHV0TmFtZSkge1xuICAgIC8vIHJlcXVpcmVkIGlzIGVtcHR5IGZvciBsaXN0IGFwcGxldHMsIGhvcGVmdWxseSBmb3Igbm93XG4gICAgcmV0dXJuIHRoaXMucmVxdWlyZWQuaW5kZXhPZihpbnB1dE5hbWUpID4gLTE7XG4gIH1cblxuICBzdGF0aWMgR2V0U3RhdGljTE9WKGFycikge1xuICAgIHJldHVybiBhcnIubWFwKGVsID0+IGVsLnByb3BBcnJheSk7XG4gIH1cblxuICBfc2V0QWN0aXZlQ29udHJvbChuYW1lKSB7XG4gICAgaWYgKG5hbWUpIHtcbiAgICAgIHJldHVybiB0aGlzLnBtLkV4ZWN1dGVNZXRob2QoJ1NldEFjdGl2ZUNvbnRyb2wnLCB0aGlzLl9nZXRDb250cm9sKG5hbWUpKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucG0uRXhlY3V0ZU1ldGhvZCgnU2V0QWN0aXZlQ29udHJvbCcsIG51bGwpO1xuICB9XG5cbiAgX2lzRGF0ZVRpbWVDb250cm9sKHVpVHlwZSkge1xuICAgIHJldHVybiB0aGlzLmNvbnN0cy5nZXQoJ1NXRV9DVFJMX0RBVEVfVFpfUElDSycpID09PSB1aVR5cGVcbiAgICAgIHx8IHRoaXMuY29uc3RzLmdldCgnU1dFX0NUUkxfREFURV9USU1FX1BJQ0snKSA9PT0gdWlUeXBlXG4gICAgICB8fCB0aGlzLmNvbnN0cy5nZXQoJ1NXRV9DVFJMX0RBVEVfUElDSycpID09PSB1aVR5cGU7XG4gIH1cblxuICBfZ2V0U2llYmVsVmFsdWUodmFsdWUsIHVpVHlwZSwgZGlzcGxheUZvcm1hdCkge1xuICAgIC8vIFRPRE86IG51bWJlcnMsIGN1cnJlbmNpZXMsIGFuZCBwaG9uZXM/XG4gICAgaWYgKHRoaXMuY29uc3RzLmdldCgnU1dFX0NUUkxfQ0hFQ0tCT1gnKSA9PT0gdWlUeXBlKSB7XG4gICAgICAvLyBjb252ZXJ0IHRydWUvZmFsc2UgPT4gWS9OIC8vIG51bGwgaXMgbm90IGhhbmRsZWQgKHRoZSBzYW1lIGFzIGluIHN0YW5kYXJkIE9wZW4gVUkpXG4gICAgICAvLyB2YWx1ZSA9IHZhbHVlID8gJ1knIDogJ04nO1xuICAgICAgdGhpcy5ib29sT2JqZWN0LlNldFZhbHVlKHZhbHVlKTtcbiAgICAgIHJldHVybiB0aGlzLmJvb2xPYmplY3QuR2V0QXNTdHJpbmcoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuY29udmVydERhdGVzICYmIGRpc3BsYXlGb3JtYXQgJiYgdGhpcy5faXNEYXRlVGltZUNvbnRyb2wodWlUeXBlKSkge1xuICAgICAgLy8gVE9ETzogY2hlY2sgaWYgYSB2YWxpZCBkYXRlIGlzIGlucHV0dGVkXG4gICAgICBjb25zdCBkYXRlID0gdmFsdWUudG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJywgeyBob3VyMTI6IGZhbHNlIH0pLnNwbGl0KCcsJykuam9pbignJyk7XG4gICAgICByZXR1cm4gU2llYmVsQXBwLlNfQXBwLkxvY2FsZU9iamVjdC5HZXRTdHJpbmdGcm9tRGF0ZVRpbWUoZGF0ZSwgJ00vRC9ZWVlZIEhIOm1tOnNzJywgZGlzcGxheUZvcm1hdCwgZmFsc2UpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBjYW5JbnZva2VNZXRob2QobWV0aG9kKSB7XG4gICAgcmV0dXJuIHRoaXMucG0uRXhlY3V0ZU1ldGhvZCgnQ2FuSW52b2tlTWV0aG9kJywgbWV0aG9kKTtcbiAgfVxuXG4gIGludm9rZU1ldGhvZChtZXRob2QpIHtcbiAgICBpZiAoIXRoaXMuY2FuSW52b2tlTWV0aG9kKG1ldGhvZCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucG0uRXhlY3V0ZU1ldGhvZCgnSW52b2tlTWV0aG9kJywgbWV0aG9kKTtcbiAgfVxuXG4gIGdldENvbnRyb2xzKCkge1xuICAgIGNvbnN0IGNvbnRyb2xzID0ge307XG4gICAgY29uc3QgYXBwbGV0Q29udHJvbHMgPSB0aGlzLl9yZXR1cm5Db250cm9scygpO1xuICAgIGNvbnN0IGFyciA9IE9iamVjdC5lbnRyaWVzKGFwcGxldENvbnRyb2xzKTtcbiAgICBhcnIuZm9yRWFjaCgoY29udHJvbEVudHJ5KSA9PiB7XG4gICAgICBjb25zdCBjb250cm9sID0gY29udHJvbEVudHJ5WzFdO1xuICAgICAgY29uc3QgdWlUeXBlID0gY29udHJvbC5HZXRVSVR5cGUoKTtcbiAgICAgIGNvbnN0IGRpc3BsYXlGb3JtYXQgPSBjb250cm9sLkdldERpc3BsYXlGb3JtYXQoKSB8fCB0aGlzLmdldENvbnRyb2xEaXNwbGF5Rm9ybWF0KHVpVHlwZSk7XG4gICAgICBpZiAoIXRoaXMuX2lzU2tpcENvbnRyb2wodWlUeXBlKSkge1xuICAgICAgICBjb25zdCBuYW1lID0gY29udHJvbEVudHJ5WzBdO1xuICAgICAgICBjb25zdCBpbnB1dE5hbWUgPSBjb250cm9sLkdldElucHV0TmFtZSgpO1xuICAgICAgICBjb25zdCBmaWVsZE5hbWUgPSBjb250cm9sLkdldEZpZWxkTmFtZSgpO1xuICAgICAgICBjb25zdCBvYmogPSB7XG4gICAgICAgICAgbmFtZSxcbiAgICAgICAgICBsYWJlbDogY29udHJvbC5HZXREaXNwbGF5TmFtZSgpLFxuICAgICAgICAgIHVpVHlwZSxcbiAgICAgICAgICByZXF1aXJlZDogdGhpcy5faXNSZXF1aXJlZChpbnB1dE5hbWUpLFxuICAgICAgICAgIGJvdW5kZWRQaWNrOiBjb250cm9sLklzQm91bmRlZFBpY2soKSA9PT0gJzEnLFxuICAgICAgICAgIHN0YXRpY1BpY2s6IGNvbnRyb2wuSXNTdGF0aWNCb3VuZGVkKCkgPT09ICcxJyxcbiAgICAgICAgICBpbnB1dE5hbWUsXG4gICAgICAgICAgaXNQb3N0Q2hhbmdlczogY29udHJvbC5Jc1Bvc3RDaGFuZ2VzKCksXG4gICAgICAgICAgbWF4U2l6ZTogY29udHJvbC5HZXRNYXhTaXplKCksXG4gICAgICAgICAgZmllbGROYW1lLFxuICAgICAgICAgIGlzTGluazogdGhpcy5wbS5FeGVjdXRlTWV0aG9kKCdDYW5OYXZpZ2F0ZScsIG5hbWUpLFxuICAgICAgICAgIHJlYWRvbmx5OiAhdGhpcy5wbS5FeGVjdXRlTWV0aG9kKCdDYW5VcGRhdGUnLCBuYW1lKSxcbiAgICAgICAgICBkaXNwbGF5Rm9ybWF0LFxuICAgICAgICAgIGRhdGFUeXBlOiB0aGlzLnBtLkV4ZWN1dGVNZXRob2QoJ0dldEZpZWxkRGF0YVR5cGUnLCBmaWVsZE5hbWUpLFxuICAgICAgICB9O1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCAncmVhZE9ubHknLCB7XG4gICAgICAgICAgZ2V0OiAoKSA9PiB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICAgICAgY29uc29sZS53YXJuKCdbTjE5XVRoZSByZWFkT25seSBwcm9wZXJ0eSB3aWxsIGJlIHJlbW92ZWQgc29vbjsgdXNlIHJlYWRvbmx5IGluc3RlYWQgb2YgaXQuJyk7XG4gICAgICAgICAgICByZXR1cm4gb2JqLnJlYWRvbmx5O1xuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICAvLyBhZGQgdmFsdWVzIHRvIGJlIGRpc3BsYXllZCBpbiB0aGUgc3RhdGljIHBpY2sgbGlzdCAtIDIgZGlmZmVyZW50IGZvcm1hdHMgZm9yIG5vd1xuICAgICAgICBpZiAob2JqLnN0YXRpY1BpY2spIHtcbiAgICAgICAgICBvYmouc3RhdGljTE9WID0gTjE5YmFzZUFwcGxldC5HZXRTdGF0aWNMT1YoY29udHJvbC5HZXRSYWRpb0dyb3VwUHJvcFNldCgpLmNoaWxkQXJyYXkpO1xuICAgICAgICAgIG9iai5sb3ZzID0gb2JqLnN0YXRpY0xPVi5yZWR1Y2UoKGFjYywgZWwpID0+IHsgLy8gbm9ybWFsaXplZFxuICAgICAgICAgICAgYWNjLnB1c2goeyBsaWM6IGVsLkZpZWxkVmFsdWUsIHZhbDogZWwuRGlzcGxheU5hbWUgfSk7XG4gICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgIH0sIFtdKTtcbiAgICAgICAgfVxuICAgICAgICBjb250cm9sc1tuYW1lXSA9IG9iajtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gY29udHJvbHM7XG4gIH1cblxuICBnZXRSZWNvcmRTZXQoYWRkUmVjb3JkSW5kZXgpIHtcbiAgICAvLyBUT0RPOiBjb252ZXJ0IHRoZSB2YWx1ZXM/XG4gICAgaWYgKGFkZFJlY29yZEluZGV4KSB7XG4gICAgICByZXR1cm4gdGhpcy5wbS5HZXQoJ0dldFJlY29yZFNldCcpLm1hcCgoZWwsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHJldCA9IE9iamVjdC5hc3NpZ24oe30sIGVsKTtcbiAgICAgICAgcmV0Ll9pbmR4ID0gaW5kZXg7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucG0uR2V0KCdHZXRSZWNvcmRTZXQnKTtcbiAgfVxuXG4gIGdldFJhd1JlY29yZFNldChhZGRSZWNvcmRJbmRleCkge1xuICAgIC8vIFRPRE86IGNvbnZlcnQgdGhlIHZhbHVlcz9cbiAgICBpZiAoYWRkUmVjb3JkSW5kZXgpIHtcbiAgICAgIHJldHVybiB0aGlzLnBtLkdldCgnR2V0UmF3UmVjb3JkU2V0JykubWFwKChlbCwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgcmV0ID0gT2JqZWN0LmFzc2lnbih7fSwgZWwpO1xuICAgICAgICByZXQuX2luZHggPSBpbmRleDtcbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5wbS5HZXQoJ0dldFJhd1JlY29yZFNldCcpO1xuICB9XG5cbiAgZ2V0Um93TGlzdFJvd0NvdW50KCkge1xuICAgIC8vIGhvdyBtdWNoIGFwcGxldCBjYW4gZGlzcGxheSAoc3BlY2lmaWVkIGluIFNpZWJlbCBUb29scykgLSAxMC8yMFxuICAgIHJldHVybiB0aGlzLnBtLkdldCgnR2V0Um93TGlzdFJvd0NvdW50Jyk7XG4gIH1cblxuICBnZXROdW1Sb3dzKCkge1xuICAgIC8vIGN1cnJlbnRseSBmZXRjaGVkIGZyb20gc2VydmVyP1xuICAgIHJldHVybiB0aGlzLnBtLkdldCgnR2V0TnVtUm93cycpO1xuICB9XG5cbiAgZ2V0U2VsZWN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnBtLkdldCgnR2V0U2VsZWN0aW9uJyk7XG4gIH1cblxuICBfbmF2aWdhdGUobWV0aG9kKSB7XG4gICAgaWYgKCF0aGlzLmNhbkludm9rZU1ldGhvZChtZXRob2QpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IHJldCA9IHRoaXMucG0uRXhlY3V0ZU1ldGhvZCgnSW52b2tlTWV0aG9kJywgbWV0aG9kKTtcbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgbmV4dFJlY29yZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmF2aWdhdGUodGhpcy5pc0xpc3RBcHBsZXQgPyAnR290b05leHQnIDogJ0dvdG9OZXh0U2V0Jyk7XG4gIH1cblxuICBuZXh0UmVjb3JkU2V0KCkge1xuICAgIGlmICghdGhpcy5pc0xpc3RBcHBsZXQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX25hdmlnYXRlKCdHb3RvTmV4dFNldCcpO1xuICB9XG5cbiAgcG9zaXRpb25PblJvdyhpbmRleCkge1xuICAgIGlmICh0aGlzLmlzTGlzdEFwcGxldCkge1xuICAgICAgaWYgKCF0aGlzLnBtLkV4ZWN1dGVNZXRob2QoJ0Nhbkludm9rZU1ldGhvZCcsICdQb3NpdGlvbk9uUm93JykpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICAvLyBzZWVtcyB0aGlzIGNoZWNrIGlzIHJlZHVuZGFudFxuICAgICAgLy8gaWYgKHRoaXMuZ2V0TnVtUm93cygpIDwgaW5kZXggKyAxKSB7XG4gICAgICAvLyAgIHJldHVybiBmYWxzZTtcbiAgICAgIC8vIH1cbiAgICAgIGlmICh0aGlzLmdldFJvd0xpc3RSb3dDb3VudCgpIDwgaW5kZXggKyAxKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtpbmRleH0gaXMgZXF1YWwvaGlnaGVyIHRoYW4gYW1vdW50IG9mIHJlY29yZHMgaW4gdGhlIGFwcGxldCAke3RoaXMuZ2V0Um93TGlzdFJvd0NvdW50KCl9YCk7XG4gICAgICB9XG4gICAgICAvLyBUT0RPOiBpZiB3ZSBnb3QgdG8gdGhpcyBwb2ludFxuICAgICAgLy8gIHNob3VsZCB3ZSBjaGVjayBHZXRBY3RpdmVDb250cm9sIChhcHBsZXQucHJvdG90eXBlLkludm9rZU1ldGhvZClcbiAgICAgIC8vICBhbmQgbnVsbGlmeSBpdCBpZiBhY3RpdmU/XG4gICAgICByZXR1cm4gdGhpcy5wbS5FeGVjdXRlTWV0aG9kKCdIYW5kbGVSb3dTZWxlY3QnLCBpbmRleCk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHByZXZSZWNvcmQoKSB7XG4gICAgaWYgKHRoaXMuaXNMaXN0QXBwbGV0KSB7XG4gICAgICByZXR1cm4gdGhpcy5wb3NpdGlvbk9uUm93KHRoaXMucG0uR2V0KCdHZXRTZWxlY3Rpb24nKSAtIDEpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fbmF2aWdhdGUoJ0dvdG9QcmV2aW91c1NldCcpO1xuICB9XG5cbiAgcHJldlJlY29yZFNldCgpIHtcbiAgICBpZiAoIXRoaXMuaXNMaXN0QXBwbGV0KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9uYXZpZ2F0ZSgnR290b1ByZXZpb3VzU2V0Jyk7XG4gIH1cblxuICBuZXdSZWNvcmQoY2IpIHtcbiAgICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB0aGlzLl9uZXdSZWNvcmQocmVzb2x2ZSkpO1xuICAgIHJldHVybiB0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicgPyBwcm9taXNlLnRoZW4oY2IpIDogcHJvbWlzZTtcbiAgfVxuXG4gIF9uZXdSZWNvcmQoY2IpIHtcbiAgICAvLyAyMDE5MDMxMiAtIGNoYW5nZWQgZnJvbSBOZXdSZWNvcmQgdG8gQ3JlYXRlUmVjb3JkLCAjMzFcbiAgICByZXR1cm4gdGhpcy5wbS5FeGVjdXRlTWV0aG9kKCdJbnZva2VNZXRob2QnLCAnQ3JlYXRlUmVjb3JkJywgbnVsbCwge1xuICAgICAgYXN5bmM6IHRydWUsXG4gICAgICBjYixcbiAgICB9KTtcbiAgfVxuXG4gIG5ld1JlY29yZFN5bmMoKSB7XG4gICAgLy8gMjAxOTAzMTIgLSBjaGFuZ2VkIGZyb20gTmV3UmVjb3JkIHRvIENyZWF0ZVJlY29yZCwgIzMxXG4gICAgcmV0dXJuIHRoaXMucG0uRXhlY3V0ZU1ldGhvZCgnSW52b2tlTWV0aG9kJywgJ0NyZWF0ZVJlY29yZCcpO1xuICB9XG5cbiAgd3JpdGVSZWNvcmQoY2IsIGNiZXJyKSB7XG4gICAgbGV0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB0aGlzLl93cml0ZVJlY29yZCgoLi4uYXJncykgPT4ge1xuICAgICAgaWYgKGFyZ3NbMl0uR2V0UHJvcGVydHkoJ1N0YXR1cycpID09PSAnQ29tcGxldGVkJykge1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZWplY3QoKTtcbiAgICAgIH1cbiAgICB9KSk7XG4gICAgcHJvbWlzZSA9IHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJyA/IHByb21pc2UudGhlbihjYikgOiBwcm9taXNlO1xuICAgIHByb21pc2UgPSB0eXBlb2YgY2JlcnIgPT09ICdmdW5jdGlvbicgPyBwcm9taXNlLmNhdGNoKGNiZXJyKSA6IHByb21pc2U7XG4gICAgcmV0dXJuIHByb21pc2U7XG4gIH1cblxuICBfd3JpdGVSZWNvcmQoY2IpIHtcbiAgICByZXR1cm4gdGhpcy5wbS5FeGVjdXRlTWV0aG9kKCdJbnZva2VNZXRob2QnLCAnV3JpdGVSZWNvcmQnLCBudWxsLCB7XG4gICAgICBhc3luYzogdHJ1ZSxcbiAgICAgIC8vIFRPRE86IHNlbGZidXN5OiB0cnVlLFxuICAgICAgY2IsXG4gICAgfSk7XG4gIH1cblxuICB3cml0ZVJlY29yZFN5bmMoKSB7XG4gICAgcmV0dXJuIHRoaXMucG0uRXhlY3V0ZU1ldGhvZCgnSW52b2tlTWV0aG9kJywgJ1dyaXRlUmVjb3JkJyk7XG4gIH1cblxuICBkZWxldGVSZWNvcmRTeW5jKHNraXBDb25maXJtRGlhbG9nKSB7XG4gICAgaWYgKHNraXBDb25maXJtRGlhbG9nKSB7XG4gICAgICB0aGlzLk4xOUNvbmZpcm0gPSBTaWViZWxBcHAuVXRpbHMuQ29uZmlybTtcbiAgICAgIFNpZWJlbEFwcC5VdGlscy5Db25maXJtID0gKCkgPT4ge307XG4gICAgfVxuICAgIC8vIGRvIHdlIG5lZWQgdG8gdHJ5Li5jYXRjaCBhbmQgcmVzdG9yZSB0aGUgZnVuY3Rpb24gaW4gY2F0Y2ggP1xuICAgIGNvbnN0IHJldCA9IHRoaXMucG0uRXhlY3V0ZU1ldGhvZCgnSW52b2tlTWV0aG9kJywgJ0RlbGV0ZVJlY29yZCcpO1xuICAgIGlmIChza2lwQ29uZmlybURpYWxvZykge1xuICAgICAgU2llYmVsQXBwLlV0aWxzLkNvbmZpcm0gPSB0aGlzLk4xOUNvbmZpcm07XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICB1bmRvUmVjb3JkU3luYygpIHtcbiAgICByZXR1cm4gdGhpcy5wbS5FeGVjdXRlTWV0aG9kKCdJbnZva2VNZXRob2QnLCAnVW5kb1JlY29yZCcpO1xuICB9XG5cbiAgc2V0Q29udHJvbFZhbHVlKG5hbWUsIHZhbHVlKSB7XG4gICAgLy8gVE9ETzogSWYgdmFsdWUgaXMgbnVsbCwgbm90aGluZyBoYXBwZW5zLCBzaG91bGQgd2UgY29udmVydCBudWxsIHRvICcnP1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLl9nZXRDb250cm9sKG5hbWUpO1xuICAgIGlmICghY29udHJvbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgZmluZCBhIGNvbnRyb2wgYnkgbmFtZSAke25hbWV9IHRvIHNldCAke3ZhbHVlfS5gKTtcbiAgICB9XG4gICAgY29uc3QgdWlUeXBlID0gY29udHJvbC5HZXRVSVR5cGUoKTtcbiAgICBjb25zdCBkaXNwbGF5Rm9ybWF0ID0gY29udHJvbC5HZXREaXNwbGF5Rm9ybWF0KCkgfHwgdGhpcy5nZXRDb250cm9sRGlzcGxheUZvcm1hdCh1aVR5cGUpO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHZhbHVlID0gdGhpcy5fZ2V0U2llYmVsVmFsdWUodmFsdWUsIHVpVHlwZSwgZGlzcGxheUZvcm1hdCk7XG4gICAgLy8gVE9ETzogc2hvdWxkIHdlIHVzZSBTZXRDZWxsVmFsdWUgZm9yIGxpc3QgYXBwbGV0cz9cbiAgICBjb25zdCByZXQgPSB0aGlzLl9zZXRDb250cm9sVmFsdWVJbnRlcm5hbChjb250cm9sLCB2YWx1ZSk7XG4gICAgaWYgKCFyZXQpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBWYWx1ZSAke3ZhbHVlfSB3YXMgbm90IHNldCBmb3IgJHtjb250cm9sLkdldE5hbWUoKX1gKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICBfc2V0Q29udHJvbFZhbHVlSW50ZXJuYWwoY29udHJvbCwgdmFsdWUpIHtcbiAgICB0aGlzLnBtLk9uQ29udHJvbEV2ZW50KHRoaXMuY29uc3RzLmdldCgnUEhZRVZFTlRfQ09OVFJPTF9GT0NVUycpLCBjb250cm9sKTtcbiAgICByZXR1cm4gdGhpcy5wbS5PbkNvbnRyb2xFdmVudCh0aGlzLmNvbnN0cy5nZXQoJ1BIWUVWRU5UX0NPTlRST0xfQkxVUicpLCBjb250cm9sLCB2YWx1ZSk7XG4gIH1cblxuICBfdmFsaWRhdGVQaWNrQ29udHJvbChjb250cm9sLCBpc1N0YXRpYykge1xuICAgIC8vIFBvc3NpYmxlIHJlc3VsdHM6XG4gICAgLy8gbm8gcGlja1xuICAgIC8vIHN0YXRpYyBwaWNrXG4gICAgLy8gZHluYW1pYyBwaWNrXG4gICAgLy8gcGlja1xuICAgIC8vIG12Z1xuICAgIC8vID9cblxuICAgIGNvbnN0IGlzU3RhdGljUGljayA9IHRoaXMuaXNTdGF0aWMoY29udHJvbCk7XG4gICAgY29uc3QgdWlUeXBlID0gY29udHJvbC5HZXRVSVR5cGUoKTtcblxuICAgIGlmIChpc1N0YXRpYykgeyAvLyBjYWxsZWQgZ2V0U3RhdGljTE9WXG4gICAgICBpZiAoIWlzU3RhdGljUGljaykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICBjb25zb2xlLndhcm4oYFtOMTldVGhlIGdldFN0YXRpY0xPViBjYWxsZWQgZm9yIG5vdCBzdGF0aWMgY29udHJvbCAtICR7dWlUeXBlfS4gVXNlIGdldER5bmFtaWNMT1Ygb3IgcGljay9tdmdgKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgeyAvLyBjYWxsZWQgZ2V0RHluYW1pY0xPVlxuICAgICAgaWYgKGlzU3RhdGljUGljaykge1xuICAgICAgICBjb25zb2xlLndhcm4oJ1tOMTldVGhlIGdldER5bmFtaWNMT1YgY2FsbGVkIGZvciBzdGF0aWMgY29udHJvbC4nKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgICB9XG4gICAgICBpZiAodGhpcy5jb25zdHMuZ2V0KCdTV0VfQ1RSTF9DT01CT0JPWCcpICE9PSB1aVR5cGUpIHsgLy8gdGhlIGNvbnRyb2wgaXMgbm90IFwiSkNvbWJvQm94XCJcbiAgICAgICAgc3dpdGNoICh1aVR5cGUpIHtcbiAgICAgICAgICBjYXNlIHRoaXMuY29uc3RzLmdldCgnU1dFX0NUUkxfUElDSycpOiAvLyBQaWNrXG4gICAgICAgICAgY2FzZSB0aGlzLmNvbnN0cy5nZXQoJ1NXRV9DVFJMX01WRycpOiAvLyBNVkdcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYFtOMTldWW91IG5lZWQgdG8gdXNlIHRoZSBwb3B1cHMgaW5zdGVhZCBvZiBnZXREeW5hbWljTE9WIC0gJHt1aVR5cGV9LmApO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYFtOMTldUHJvYmFibHkgZ2V0RHluYW1pY0xPViBpcyBub3QgZ29pbmcgdG8gd29yayBmb3IgdGhpcyBjb250cm9sIC0gJHt1aVR5cGV9LmApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaXNTdGF0aWMoY29udHJvbCkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXNcbiAgICByZXR1cm4gJzEnID09PSBjb250cm9sLklzU3RhdGljQm91bmRlZCgpO1xuICB9XG5cbiAgaXNEeW5hbWljKGNvbnRyb2wpIHtcbiAgICByZXR1cm4gIXRoaXMuaXNTdGF0aWMoY29udHJvbClcbiAgICAgICYmIHRoaXMuY29uc3RzLmdldCgnU1dFX0NUUkxfQ09NQk9CT1gnKSA9PT0gY29udHJvbC5HZXRVSVR5cGUoKTtcbiAgfVxuXG4gIF9nZXRDb250cm9sRHluYW1pY0xPVihjb250cm9sKSB7XG4gICAgdGhpcy5fdmFsaWRhdGVQaWNrQ29udHJvbChjb250cm9sLCBmYWxzZSk7XG4gICAgY29uc3QgY29udHJvbElucHV0TmFtZSA9IGNvbnRyb2wuR2V0SW5wdXROYW1lKCk7XG4gICAgdGhpcy5sb3ZbY29udHJvbElucHV0TmFtZV0gPSB7fTtcbiAgICBjb25zdCBwcyA9IFNpZWJlbEFwcC5TX0FwcC5OZXdQcm9wZXJ0eVNldCgpO1xuICAgIHBzLlNldFByb3BlcnR5KCdTV0VGaWVsZCcsIGNvbnRyb2xJbnB1dE5hbWUpO1xuICAgIHBzLlNldFByb3BlcnR5KCdTV0VKSScsIGZhbHNlKTtcbiAgICB0aGlzLl9zZXRBY3RpdmVDb250cm9sKG51bGwpOyAvLyB0byBwcmV2ZW50IFVwZGF0ZVBpY2tcbiAgICB0aGlzLnBtLkV4ZWN1dGVNZXRob2QoJ0ludm9rZU1ldGhvZCcsICdHZXRRdWlja1BpY2tJbmZvJywgcHMpO1xuICAgIHJldHVybiB0aGlzLmxvdltjb250cm9sSW5wdXROYW1lXTtcbiAgfVxuXG4gIF9nZXRDb250cm9sU3RhdGljTE9WKGNvbnRyb2wpIHtcbiAgICB0aGlzLl92YWxpZGF0ZVBpY2tDb250cm9sKGNvbnRyb2wsIHRydWUpO1xuICAgIGNvbnN0IGFyciA9IE4xOWJhc2VBcHBsZXQuR2V0U3RhdGljTE9WKGNvbnRyb2wuR2V0UmFkaW9Hcm91cFByb3BTZXQoKS5jaGlsZEFycmF5KTtcbiAgICBjb25zdCByZXQgPSBhcnIubWFwKGVsID0+IGVsLkRpc3BsYXlOYW1lKTtcbiAgICByZXR1cm4gcmV0LnNvcnQoKTtcbiAgfVxuXG4gIGdldExPVihjb250cm9sTmFtZSkge1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLl9nZXRDb250cm9sKGNvbnRyb2xOYW1lKTtcbiAgICBpZiAodGhpcy5pc1N0YXRpYyhjb250cm9sKSkge1xuICAgICAgcmV0dXJuIHRoaXMuX2dldENvbnRyb2xTdGF0aWNMT1YoY29udHJvbCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmlzRHluYW1pYyhjb250cm9sKSkge1xuICAgICAgcmV0dXJuIHRoaXMuX2dldENvbnRyb2xEeW5hbWljTE9WKGNvbnRyb2wpO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoYCR7Y29udHJvbE5hbWV9IGlzIG5vdCBhIHN0YXRpYyBvciBhIGR5bmFtaWNgKTtcbiAgfVxuXG4gIGdldER5bmFtaWNMT1YoY29udHJvbE5hbWUpIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5fZ2V0Q29udHJvbChjb250cm9sTmFtZSk7XG4gICAgcmV0dXJuIHRoaXMuX2dldENvbnRyb2xEeW5hbWljTE9WKGNvbnRyb2wpO1xuICB9XG5cbiAgZ2V0U3RhdGljTE9WKGNvbnRyb2xOYW1lKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuX2dldENvbnRyb2woY29udHJvbE5hbWUpO1xuICAgIHJldHVybiB0aGlzLl9nZXRDb250cm9sU3RhdGljTE9WKGNvbnRyb2wpO1xuICB9XG5cbiAgX2dldEpTVmFsdWUodmFsdWUsIHVpVHlwZSwgZGlzcGxheUZvcm1hdCkge1xuICAgIGlmICh0aGlzLmNvbnN0cy5nZXQoJ1NXRV9DVFJMX0NIRUNLQk9YJykgPT09IHVpVHlwZSkge1xuICAgICAgLy8gY29udmVydCBZL04vbnVsbCAtPiB0cnVlL2ZhbHNlIC8vIG51bGwgY29tZXMgYXMgZmFsc2U/XG4gICAgICB0aGlzLmJvb2xPYmplY3QuU2V0QXNTdHJpbmcodmFsdWUpO1xuICAgICAgcmV0dXJuIHRoaXMuYm9vbE9iamVjdC5HZXRWYWx1ZSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5jb252ZXJ0RGF0ZXMgJiYgZGlzcGxheUZvcm1hdCAmJiB0aGlzLl9pc0RhdGVUaW1lQ29udHJvbCh1aVR5cGUpKSB7XG4gICAgICBpZiAodmFsdWUgPT09ICcnKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgbGV0IElTTyA9ICcnO1xuICAgICAgaWYgKHRoaXMuaXNMaXN0QXBwbGV0KSB7XG4gICAgICAgIElTTyA9IHRoaXMudXRpbHMuVG9JU09Gb3JtYXQodmFsdWUsIHRoaXMuY29uc3RzLmdldCgnU1dFX0NUUkxfREFURV9QSUNLJykgIT09IHVpVHlwZSwgZGlzcGxheUZvcm1hdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBJU08gPSB0aGlzLnV0aWxzLkdldElTT0RhdGVUaW1lKHZhbHVlLCB0cnVlKTtcbiAgICAgIH1cbiAgICAgIGlmIChJU08gPT09ICcnKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgSVNPIHZhbHVlIGlzIGVtcHR5IGFmdGVyIGNvbnZlcnRpbmcgJHt2YWx1ZX1gKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXcgRGF0ZShJU08pO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBnZXRDdXJyZW50UmVjb3JkKHJhdykge1xuICAgIC8vIFRPRE86IG5lZWQgY29udmVyc2lvblxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5nZXRTZWxlY3Rpb24oKTtcbiAgICAvLyBUT0RPOiBjaGVjayBpZiB0aGVyZSBpcyBhIHJlY29yZFxuICAgIC8vIFRPRE86IG1ha2UgYSBjb3B5IG9mIHJldHVybmVkIG9iamVjdCAodG8gYXZvaWQgdGhlIGFjY2lkZW50YWwgbW9kaWZpY2F0aW9uIG9mIHRoZSByZWNvcmRzZXQpP1xuICAgIGlmIChyYXcpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldFJhd1JlY29yZFNldCgpW2luZGV4XTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZ2V0UmVjb3JkU2V0KClbaW5kZXhdO1xuICB9XG5cbiAgY2FsY3VsYXRlQ3VycmVudFJlY29yZFN0YXRlKCkge1xuICAgIC8vIFRPRE86IGRvIHdlIG5lZWQgdG8gZGVsZXRlIHBlbmRpbmdcbiAgICAvLyAwIC0gTm8gcmVjb3JkcyBkaXNwbGF5ZWRcbiAgICAvLyAxIC0gUmVjb3JkIGlzIGJlaW5nIGNyZWF0ZWRcbiAgICAvLyAyIC0gUmVjb3JkIGlzIGJlaW5nIGVkaXRlZFxuICAgIC8vIDMgLSBJcyBpbiBxdWVyeSBtb2RlXG4gICAgLy8gNCAtIFJlY29yZCBpcyBkaXNwbGF5ZWQsXG4gICAgLy8gNSAtIFJlY29yZCBpcyByZWFkLW9ubHlcblxuICAgIGNvbnN0IGJjID0gdGhpcy5wbS5HZXQoJ0dldEJ1c0NvbXAnKTtcblxuICAgIGlmICh0aGlzLnBtLkdldCgnSXNJblF1ZXJ5TW9kZScpKSB7XG4gICAgICAvLyBpZiBubyByZWNvcmRzIGFuZCB0aGUgZW50ZXJlZCB0aGUgcXVlcnkgbW9kZSxcbiAgICAgIC8vIHNlbGVjdGlvbiBpcyAtMSwgdGhlcmVmb3JlIHdlIG5lZWQgdG8gY2hlY2sgcXVlcnkgbW9kZSBmaXJzdFxuICAgICAgcmV0dXJuIDM7XG4gICAgfVxuICAgIGlmICh0aGlzLmdldFNlbGVjdGlvbigpIDwgMCkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIGlmIChiYy5Jc0luc2VydFBlbmRpbmcoKSkgeyAvLyBzZWVtcyB0aGUgaW5zZXJ0UGVuZGluZyBwcm9wZXJ0eSBnaXZlcyBtb3JlIGFjY3VyYXRlIHZhbHVlXG4gICAgICByZXR1cm4gMTtcbiAgICB9XG4gICAgaWYgKGJjLklzQ29tbWl0UGVuZGluZygpKSB7IC8vIGJjLmNvbW1pdFBlbmRpbmcgb3IgdGhpcy5wbS5HZXRTdGF0ZVVJTWFwKCkuQ29tbWl0UGVuZGluZ1xuICAgICAgcmV0dXJuIDI7XG4gICAgfVxuICAgIGlmICghdGhpcy5jYW5JbnZva2VNZXRob2QoJ1dyaXRlUmVjb3JkJykpIHtcbiAgICAgIC8vIG9yIHVzZSB0aGUgY2FuVXBkYXRlIHByb3BlcnR5IG9mIHRoZSBCQz9cbiAgICAgIHJldHVybiA1O1xuICAgIH1cblxuICAgIHJldHVybiA0OyAvLyB0aGlzIGlzIGEgZGVmYXVsdCBmYWxsYmFjaztcbiAgfVxuXG4gIF9nZXRNZXRob2RzKCkge1xuICAgIGNvbnN0IG1ldGhvZHMgPSB7fTtcbiAgICBjb25zdCBhcHBsZXRDb250cm9scyA9IHRoaXMucG0uR2V0KCdHZXRDb250cm9scycpOyAvLyBldmVuIGZvciBsaXN0IGFwcGxldFxuICAgIGNvbnN0IGFyciA9IE9iamVjdC5lbnRyaWVzKGFwcGxldENvbnRyb2xzKTtcbiAgICBhcnIuZm9yRWFjaCgoY29udHJvbEVudHJ5KSA9PiB7XG4gICAgICBjb25zdCBjb250cm9sTWV0aG9kID0gY29udHJvbEVudHJ5WzFdLkdldE1ldGhvZE5hbWUoKTtcbiAgICAgIGlmICh0eXBlb2YgY29udHJvbE1ldGhvZCAhPT0gJ3VuZGVmaW5lZCcgJiYgY29udHJvbE1ldGhvZCAhPT0gJycpIHtcbiAgICAgICAgbWV0aG9kc1tjb250cm9sTWV0aG9kXSA9IHt9O1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBtZXRob2RzO1xuICB9XG5cbiAgZ2V0Q29udHJvbERpc3BsYXlGb3JtYXQodWlUeXBlKSB7XG4gICAgc3dpdGNoICh1aVR5cGUpIHtcbiAgICAgIGNhc2UgdGhpcy5jb25zdHMuZ2V0KCdTV0VfQ1RSTF9EQVRFX1RaX1BJQ0snKTpcbiAgICAgIGNhc2UgdGhpcy5jb25zdHMuZ2V0KCdTV0VfQ1RSTF9EQVRFX1RJTUVfUElDSycpOlxuICAgICAgICByZXR1cm4gdGhpcy5sb2NhbGVEYXRhLmRhdGVUaW1lRm9ybWF0O1xuICAgICAgY2FzZSB0aGlzLmNvbnN0cy5nZXQoJ1NXRV9DVFJMX0RBVEVfUElDSycpOlxuICAgICAgICByZXR1cm4gdGhpcy5sb2NhbGVEYXRhLmRhdGVGb3JtYXQ7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICB9XG5cbiAgZ2V0Q3VycmVudFJlY29yZE1vZGVsKF9jb250cm9scywgX21ldGhvZHMpIHtcbiAgICBpZiAoIV9jb250cm9scykge1xuICAgICAgX2NvbnRyb2xzID0gdGhpcy5nZXRDb250cm9scygpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgfVxuICAgIGlmICghX21ldGhvZHMpIHtcbiAgICAgIF9tZXRob2RzID0gdGhpcy5fZ2V0TWV0aG9kcygpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgfVxuICAgIF9jb250cm9scy5zdGF0ZSA9IHRoaXMuY2FsY3VsYXRlQ3VycmVudFJlY29yZFN0YXRlKCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBfY29udHJvbHMuaWQgPSAnJzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIGxldCBvYmogPSB7fTtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuZ2V0U2VsZWN0aW9uKCk7XG4gICAgaWYgKGluZGV4ID4gLTEgJiYgX2NvbnRyb2xzLnN0YXRlICE9PSAzKSB7IC8vIGFkZGVkIF9jb250cm9scy5zdGF0ZSAhPT0gMzsgd2UgZG9uJ3QgbmVlZCBpZCBpbiBxdWVyeSBtb2RlXG4gICAgICBvYmogPSB0aGlzLmdldFJlY29yZFNldCgpW2luZGV4XTtcbiAgICAgIF9jb250cm9scy5pZCA9IHRoaXMuZ2V0UmF3UmVjb3JkU2V0KClbaW5kZXhdLklkOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgfVxuICAgIGNvbnN0IGFwcGxldENvbnRyb2xzID0gdGhpcy5fcmV0dXJuQ29udHJvbHMoKTtcbiAgICAvLyBwb3B1bGF0ZSBjb250cm9sc1xuICAgIGxldCBhcnIgPSBPYmplY3Qua2V5cyhfY29udHJvbHMpO1xuICAgIGFyci5mb3JFYWNoKChjb250cm9sTmFtZSkgPT4ge1xuICAgICAgY29uc3QgY29udHJvbCA9IGFwcGxldENvbnRyb2xzW2NvbnRyb2xOYW1lXTtcbiAgICAgIGlmICh0eXBlb2YgY29udHJvbCA9PT0gJ3VuZGVmaW5lZCcpIHsgLy8ganVzdCBpZiBzb21lYm9keSBzZW5kcyBpbmNvcnJlY3QgbmFtZSBvZiB0aGUgY29udHJvbFxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBmaWVsZE5hbWUgPSBjb250cm9sLkdldEZpZWxkTmFtZSgpO1xuICAgICAgY29uc3QgdWlUeXBlID0gY29udHJvbC5HZXRVSVR5cGUoKTtcbiAgICAgIGNvbnN0IGRpc3BsYXlGb3JtYXQgPSBjb250cm9sLkdldERpc3BsYXlGb3JtYXQoKSB8fCB0aGlzLmdldENvbnRyb2xEaXNwbGF5Rm9ybWF0KHVpVHlwZSk7XG4gICAgICBpZiAoX2NvbnRyb2xzLmlkKSB7XG4gICAgICAgIF9jb250cm9sc1tjb250cm9sTmFtZV0gPSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgICAgICB2YWx1ZTogdGhpcy5fZ2V0SlNWYWx1ZShvYmpbZmllbGROYW1lXSwgY29udHJvbC5HZXRVSVR5cGUoKSwgZGlzcGxheUZvcm1hdCksXG4gICAgICAgICAgdWlUeXBlLFxuICAgICAgICAgIHJlYWRvbmx5OiAhdGhpcy5wbS5FeGVjdXRlTWV0aG9kKCdDYW5VcGRhdGUnLCBjb250cm9sTmFtZSksXG4gICAgICAgICAgaXNMaW5rOiB0aGlzLnBtLkV4ZWN1dGVNZXRob2QoJ0Nhbk5hdmlnYXRlJywgY29udHJvbE5hbWUpLFxuICAgICAgICAgIGxhYmVsOiBjb250cm9sLkdldERpc3BsYXlOYW1lKCksXG4gICAgICAgICAgaXNQb3N0Q2hhbmdlczogY29udHJvbC5Jc1Bvc3RDaGFuZ2VzKCksXG4gICAgICAgICAgcmVxdWlyZWQ6IHRoaXMuX2lzUmVxdWlyZWQoY29udHJvbC5HZXRJbnB1dE5hbWUoKSksXG4gICAgICAgICAgbWF4U2l6ZTogY29udHJvbC5HZXRNYXhTaXplKCksXG4gICAgICAgICAgZmllbGROYW1lLFxuICAgICAgICAgIGRpc3BsYXlGb3JtYXQsXG4gICAgICAgIH07XG4gICAgICB9IGVsc2UgeyAvLyBubyByZWNvcmQgZGlzcGxheWVkXG4gICAgICAgIF9jb250cm9sc1tjb250cm9sTmFtZV0gPSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgICAgICB2YWx1ZTogJycsXG4gICAgICAgICAgdWlUeXBlLFxuICAgICAgICAgIHJlYWRvbmx5OiBfY29udHJvbHMuc3RhdGUgIT09IDMsIC8vIHNob3VsZCBiZSBlZGl0dGFibGUgaW4gcXVlcnkgbW9kZVxuICAgICAgICAgIGlzTGluazogZmFsc2UsXG4gICAgICAgICAgbGFiZWw6IGNvbnRyb2wuR2V0RGlzcGxheU5hbWUoKSxcbiAgICAgICAgICBpc1Bvc3RDaGFuZ2VzOiBjb250cm9sLklzUG9zdENoYW5nZXMoKSxcbiAgICAgICAgICByZXF1aXJlZDogdGhpcy5faXNSZXF1aXJlZChjb250cm9sLkdldElucHV0TmFtZSgpKSxcbiAgICAgICAgICBtYXhTaXplOiBjb250cm9sLkdldE1heFNpemUoKSxcbiAgICAgICAgICBmaWVsZE5hbWUsXG4gICAgICAgICAgZGlzcGxheUZvcm1hdCxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBwb3B1bGF0ZSBtZXRob2RzXG4gICAgaWYgKF9tZXRob2RzKSB7XG4gICAgICBhcnIgPSBPYmplY3Qua2V5cyhfbWV0aG9kcyk7XG4gICAgICAvLyBUT0RPOiBjb3VsZCBiZSBhbiBleGNlcHRpb24gaWYgbWV0aG9kIG5hbWUgaXMgaW5jb3JyZWN0XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIGFyci5mb3JFYWNoKChtZXRob2ROYW1lKSA9PiB7IF9tZXRob2RzW21ldGhvZE5hbWVdID0gdGhpcy5jYW5JbnZva2VNZXRob2QobWV0aG9kTmFtZSk7IH0pO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgY29udHJvbHM6IF9jb250cm9scyxcbiAgICAgIG1ldGhvZHM6IF9tZXRob2RzLFxuICAgIH07XG4gIH1cblxuICBfZmluZENvbnRyb2xUb0VudGVyU2VhcmNoRXhwcigpIHtcbiAgICBjb25zdCBhcHBsZXRDb250cm9scyA9IHRoaXMuX3JldHVybkNvbnRyb2xzKCk7XG4gICAgY29uc3QgYXJyID0gT2JqZWN0LnZhbHVlcyhhcHBsZXRDb250cm9scyk7XG4gICAgY29uc3QgZm91bmQgPSBhcnIuZmluZCgoY29udHJvbCkgPT4ge1xuICAgICAgY29uc3QgY29udHJvbFVpVHlwZSA9IGNvbnRyb2wuR2V0VUlUeXBlKCk7XG4gICAgICBpZiAoIXRoaXMuX2lzU2tpcENvbnRyb2woY29udHJvbFVpVHlwZSkpIHtcbiAgICAgICAgLy8gc2tpcHBpbmcgYWxzbyBKQ2hlY2tib3hcbiAgICAgICAgcmV0dXJuIGNvbnRyb2xVaVR5cGUgIT09IHRoaXMuY29uc3RzLmdldCgnU1dFX0NUUkxfQ0hFQ0tCT1gnKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgICByZXR1cm4gZm91bmQ7XG4gIH1cblxuICBfbmV3UXVlcnkoKSB7XG4gICAgcmV0dXJuIHRoaXMucG0uRXhlY3V0ZU1ldGhvZCgnSW52b2tlTWV0aG9kJywgJ05ld1F1ZXJ5Jyk7XG4gIH1cblxuICBxdWVyeUJ5U2VhcmNoRXhwclN5bmMoZXhwcikge1xuICAgIHRoaXMuX25ld1F1ZXJ5KCk7IC8vID8gY2hlY2sgb3Igb3B0aW9uYWxseSBza2lwXG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuX2ZpbmRDb250cm9sVG9FbnRlclNlYXJjaEV4cHIoKTtcbiAgICB0aGlzLl9zZXRDb250cm9sVmFsdWVJbnRlcm5hbChjb250cm9sLCBleHByKTtcbiAgICB0aGlzLnBtLkV4ZWN1dGVNZXRob2QoJ0ludm9rZU1ldGhvZCcsICdFeGVjdXRlUXVlcnknKTtcbiAgICByZXR1cm4gdGhpcy5nZXRSZWNvcmRTZXQoKS5sZW5ndGg7XG4gIH1cblxuICBxdWVyeUJ5SWRTeW5jKHJvd0lkKSB7XG4gICAgbGV0IGV4cHI7XG4gICAgaWYgKEFycmF5ID09PSByb3dJZC5jb25zdHJ1Y3Rvcikge1xuICAgICAgZXhwciA9IHJvd0lkLm1hcChlbCA9PiBgSWQ9XCIke2VsfVwiYCkuam9pbignIE9SICcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBleHByID0gYElkPVwiJHtyb3dJZH1cImA7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnF1ZXJ5QnlTZWFyY2hFeHByU3luYyhleHByKTtcbiAgfVxuXG4gIHF1ZXJ5QnlJZChyb3dJZCwgY2IpIHtcbiAgICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB0aGlzLl9xdWVyeUJ5SWQocm93SWQsIHJlc29sdmUpKTtcbiAgICBjb25zdCByZXQgPSBwcm9taXNlLnRoZW4oKCkgPT4gdGhpcy5nZXRSZWNvcmRTZXQoKS5sZW5ndGgpO1xuICAgIHJldHVybiB0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicgPyByZXQudGhlbihjYikgOiByZXQ7XG4gIH1cblxuICBfcXVlcnlCeUlkKHJvd0lkLCBjYikge1xuICAgIHRoaXMuX25ld1F1ZXJ5KCk7IC8vID8gY2hlY2sgb3Igb3B0aW9uYWxseSBza2lwXG5cbiAgICBjb25zdCBhaSA9IHtcbiAgICAgIHNjb3BlOiB0aGlzLFxuICAgICAgYXN5bmM6IHRydWUsXG4gICAgICBzZWxmYnVzeTogdHJ1ZSxcbiAgICB9O1xuICAgIGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGFpLmNiID0gY2I7XG4gICAgfVxuXG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuX2ZpbmRDb250cm9sVG9FbnRlclNlYXJjaEV4cHIoKTtcbiAgICB0aGlzLl9zZXRDb250cm9sVmFsdWVJbnRlcm5hbChjb250cm9sLCBgSWQ9XCIke3Jvd0lkfVwiYCk7XG4gICAgcmV0dXJuIHRoaXMucG0uRXhlY3V0ZU1ldGhvZCgnSW52b2tlTWV0aG9kJywgJ0V4ZWN1dGVRdWVyeScsIG51bGwsIGFpKTtcbiAgfVxuXG4gIHF1ZXJ5KHBhcmFtcywgY2IpIHtcbiAgICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB0aGlzLl9xdWVyeShwYXJhbXMsIHJlc29sdmUpKTtcbiAgICBjb25zdCByZXQgPSBwcm9taXNlLnRoZW4oKCkgPT4gdGhpcy5nZXRSZWNvcmRTZXQoKS5sZW5ndGgpO1xuICAgIHJldHVybiB0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicgPyByZXQudGhlbihjYikgOiByZXQ7XG4gIH1cblxuICBfcXVlcnkocGFyYW1zLCBjYikge1xuICAgIC8vIFRPRE86IGNoZWNrIGlmIGl0IGlzIGFscmVhZHkgaW4gcXVlcnkgbW9kZSB0byBhdm9pZCBjYWxsaW5nIHRoZSBuZXcgcXVlcnkgYWdhaW5cbiAgICAvLyBvciBhY2NlcHQgdGhlIGlucHV0IHBhcmFtZXRlciB0byBza2lwIGNhbGxpbmcgdGhlIG5ldyBxdWVyeT9cbiAgICAvLyBvciBtYXliZSBiZXR0ZXIgdG8gY2FuY2VsIHRoZSBleGlzdGluZyBxdWVyeT9cbiAgICB0aGlzLl9uZXdRdWVyeSgpO1xuXG4gICAgY29uc3QgYWkgPSB7XG4gICAgICBzY29wZTogdGhpcyxcbiAgICAgIGFzeW5jOiB0cnVlLFxuICAgICAgc2VsZmJ1c3k6IHRydWUsXG4gICAgfTtcbiAgICBpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBhaS5jYiA9IGNiO1xuICAgIH1cblxuICAgIGNvbnN0IF9jb250cm9scyA9IHRoaXMuX3JldHVybkNvbnRyb2xzKCk7XG4gICAgY29uc3QgYXJyID0gT2JqZWN0LmtleXMocGFyYW1zKTtcbiAgICBhcnIuZm9yRWFjaCgoY29udHJvbE5hbWUpID0+IHtcbiAgICAgIGNvbnN0IGNvbnRyb2wgPSBfY29udHJvbHNbY29udHJvbE5hbWVdO1xuICAgICAgaWYgKGNvbnRyb2wpIHtcbiAgICAgICAgdGhpcy5fc2V0Q29udHJvbFZhbHVlSW50ZXJuYWwoY29udHJvbCwgdGhpcy5fZ2V0U2llYmVsVmFsdWUocGFyYW1zW2NvbnRyb2xOYW1lXSwgY29udHJvbC5HZXRVSVR5cGUoKSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgVGhlIGNvbnRyb2wgXCIke2NvbnRyb2xOYW1lfVwiIGlzIG5vdCBmb3VuZCFgKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcy5wbS5FeGVjdXRlTWV0aG9kKCdJbnZva2VNZXRob2QnLCAnRXhlY3V0ZVF1ZXJ5JywgbnVsbCwgYWkpO1xuICB9XG5cbiAgc3RhdGljIFJlcXVlcnkobmFtZSkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSBTaWViZWxBcHAuU19BcHAuR2V0U2VydmljZSgnTjE5IEJTJyk7XG4gICAgaWYgKHNlcnZpY2UpIHtcbiAgICAgIGNvbnN0IGluUHJvcFNldCA9IFNpZWJlbEFwcC5TX0FwcC5OZXdQcm9wZXJ0eVNldCgpO1xuICAgICAgaW5Qcm9wU2V0LlNldFByb3BlcnR5KCduYW1lJywgbmFtZSk7XG4gICAgICBzZXJ2aWNlLkludm9rZU1ldGhvZCgnUmVxdWVyeScsIGluUHJvcFNldCwge30pO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBSZWZyZXNoKG5hbWUpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gU2llYmVsQXBwLlNfQXBwLkdldFNlcnZpY2UoJ04xOSBCUycpO1xuICAgIGlmIChzZXJ2aWNlKSB7XG4gICAgICBjb25zdCBpblByb3BTZXQgPSBTaWViZWxBcHAuU19BcHAuTmV3UHJvcGVydHlTZXQoKTtcbiAgICAgIGluUHJvcFNldC5TZXRQcm9wZXJ0eSgnbmFtZScsIG5hbWUpO1xuICAgICAgc2VydmljZS5JbnZva2VNZXRob2QoJ1JlZnJlc2gnLCBpblByb3BTZXQsIHt9KTtcbiAgICB9XG4gIH1cblxuICBnZXRNVkYoaWRzLCBmaWVsZHMsIHVzZUFjdGl2ZUJPKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHRoaXMuX2dldE1WRihpZHMsIGZpZWxkcywgdXNlQWN0aXZlQk8sIHJlc29sdmUsIHJlamVjdCkpO1xuICB9XG5cbiAgX2dldEZpZWxkTmFtZUZvckNvbnRyb2woY29udHJvbE5hbWUpIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5fZ2V0Q29udHJvbChjb250cm9sTmFtZSk7XG4gICAgLy8gaWYgbm90IGZvdW5kLCB0aGUgaW5wdXQgdmFsdWUgaXMgcmV0dXJuZWRcbiAgICBpZiAoY29udHJvbCkge1xuICAgICAgcmV0dXJuIGNvbnRyb2wuR2V0RmllbGROYW1lKCk7XG4gICAgfVxuICAgIHJldHVybiBjb250cm9sTmFtZTsgLy8gZmFsbGJhY2sgLSBqdXN0IGluIGNhc2Ugd2UgZ290IHRoZSBmaWVsZCBuYW1lXG4gIH1cblxuICBfZ2V0TVZGKGlkcywgZmllbGRzLCB1c2VBY3RpdmVCTywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgY29uc3QgYXJyID0gT2JqZWN0LmVudHJpZXMoZmllbGRzKTtcbiAgICBjb25zdCBwc0lucHV0cyA9IFNpZWJlbEFwcC5TX0FwcC5OZXdQcm9wZXJ0eVNldCgpO1xuICAgIHBzSW5wdXRzLlNldFByb3BlcnR5KCdCTycsIFNpZWJlbEFwcC5TX0FwcC5HZXRBY3RpdmVCdXNPYmooKS5HZXROYW1lKCkpO1xuICAgIHBzSW5wdXRzLlNldFByb3BlcnR5KCdCQycsIHRoaXMucG0uR2V0KCdHZXRCdXNDb21wJykuR2V0TmFtZSgpKTtcbiAgICBwc0lucHV0cy5TZXRQcm9wZXJ0eSgnVXNlQWN0aXZlQk8nLCB1c2VBY3RpdmVCTyA/ICdZJyA6ICdOJyk7XG4gICAgcHNJbnB1dHMuU2V0UHJvcGVydHkoJ0lEJywgaWRzLmpvaW4oJywnKSk7XG4gICAgYXJyLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICBjb25zdCBwcyA9IFNpZWJlbEFwcC5TX0FwcC5OZXdQcm9wZXJ0eVNldCgpO1xuICAgICAgcHMuU2V0VHlwZSh0aGlzLl9nZXRGaWVsZE5hbWVGb3JDb250cm9sKGVsWzBdKSk7XG4gICAgICBwcy5TZXRQcm9wZXJ0eSgnRmllbGRzJywgZWxbMV0uam9pbignLCcpKTtcbiAgICAgIHBzSW5wdXRzLkFkZENoaWxkKHBzLkNsb25lKCkpO1xuICAgIH0pO1xuICAgIGNvbnN0IGJzID0gU2llYmVsQXBwLlNfQXBwLkdldFNlcnZpY2UoJ04xOSBCUycpO1xuICAgIGNvbnN0IGFpID0ge1xuICAgICAgYXN5bmM6IHRydWUsXG4gICAgICBzZWxmYnVzeTogdHJ1ZSxcbiAgICAgIHNjb3BlOiB0aGlzLFxuICAgICAgZXJyY2I6ICgpID0+IHtcbiAgICAgICAgcmVqZWN0KCk7XG4gICAgICB9LFxuICAgICAgY2I6IChtZXRob2ROYW1lLCBJbnB1dHMsIHBzT3V0cHV0cykgPT4ge1xuICAgICAgICBjb25zdCByZXQgPSB7fTtcbiAgICAgICAgY29uc3QgeyBjaGlsZEFycmF5IH0gPSBwc091dHB1dHMuR2V0Q2hpbGRCeVR5cGUoJ1Jlc3VsdFNldCcpIHx8IHt9OyAvLyB0byBiZSBzYWZlIHdoZW4gbm8gcmVzdWx0c1xuICAgICAgICAoY2hpbGRBcnJheSB8fCBbXSkuZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgICAgICByZXRbY2hpbGQuR2V0VHlwZSgpXSA9IHt9O1xuICAgICAgICAgIGNoaWxkLmNoaWxkQXJyYXkuZm9yRWFjaCgoZ3JhbmRDaGlsZCkgPT4ge1xuICAgICAgICAgICAgcmV0W2NoaWxkLkdldFR5cGUoKV1bZ3JhbmRDaGlsZC5HZXRUeXBlKCldID0gZ3JhbmRDaGlsZC5jaGlsZEFycmF5Lm1hcCgocmVjKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHByaW1hcnkgPSByZWMucHJvcEFycmF5WydTU0EgUHJpbWFyeSBGaWVsZCddO1xuICAgICAgICAgICAgICB0aGlzLmJvb2xPYmplY3QuU2V0QXNTdHJpbmcocHJpbWFyeSk7XG4gICAgICAgICAgICAgIHJlYy5wcm9wQXJyYXlbJ1NTQSBQcmltYXJ5IEZpZWxkJ10gPSB0aGlzLmJvb2xPYmplY3QuR2V0VmFsdWUoKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgcmVjLnByb3BBcnJheSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJlc29sdmUocmV0KTtcbiAgICAgIH0sXG4gICAgfTtcbiAgICByZXR1cm4gYnMuSW52b2tlTWV0aG9kKCdSZXR1cm5NVkdGaWVsZHMnLCBwc0lucHV0cywgYWkpO1xuICB9XG5cbiAgc2F2ZVByZWYobmFtZSwgdmFsdWUpIHtcbiAgICAvLyB2YWx1ZSBpcyBhIHN0cmluZ1xuICAgIC8vIHZhbHVlIGlzIGJvdW5kIHRvIGFwcGxldCBhbmQgdmlld1xuICAgIGNvbnN0IHBzSW5wdXQgPSBTaWViZWxBcHAuU19BcHAuTmV3UHJvcGVydHlTZXQoKTtcbiAgICBwc0lucHV0LlNldFByb3BlcnR5KCdLZXknLCBuYW1lKTtcbiAgICBwc0lucHV0LlNldFByb3BlcnR5KG5hbWUsIHZhbHVlKTtcbiAgICB0aGlzLnBtLk9uQ29udHJvbEV2ZW50KFxuICAgICAgdGhpcy5jb25zdHMuZ2V0KCdQSFlFVkVOVF9JTlZPS0VfQ09OVFJPTCcpLFxuICAgICAgdGhpcy5wbS5HZXQodGhpcy5jb25zdHMuZ2V0KCdTV0VfTVRIRF9VUERBVEVfVVNFUl9QUkVGJykpLFxuICAgICAgcHNJbnB1dCxcbiAgICApO1xuICAgIHJldHVybiB0aGlzLnBtLlNldFByb3BlcnR5KG5hbWUsIHZhbHVlKTtcbiAgfVxuXG4gIHJlYWRQcmVmKG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5wbS5HZXQobmFtZSk7XG4gIH1cblxuICBfcmV0cmlldmVEYXRhKGFtb3VudCkgeyAvLyB0ZW1wIG1ldGhvZCAtIHdpbGwgYmUgcmVtb3ZlZFxuICAgIGNvbnN0IGRhdGEgPSBuZXcgTWFwKCk7XG5cbiAgICB3aGlsZSAoZGF0YS5zaXplIDwgYW1vdW50KSB7XG4gICAgICBjb25zdCBhcnIgPSB0aGlzLmdldFJhd1JlY29yZFNldCgpO1xuXG4gICAgICAvLyBhdm9pZCB0aGUgZHVwbGljYXRlc1xuICAgICAgYXJyLmZvckVhY2goZWwgPT4gZGF0YS5zZXQoZWwuSWQsIGVsKSk7XG5cbiAgICAgIC8vIHdlIGFyZSB1c2luZyBjYW5JbnZva2VNZXRob2QsIGFzIGluIDE2LjAgbmV4dFJlY29yZFNldCBhbHdheXMgcmV0dXJucyB1bmRlZmluZWRcbiAgICAgIGlmICghdGhpcy5jYW5JbnZva2VNZXRob2QoJ0dvdG9OZXh0U2V0JykpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIHRoaXMubmV4dFJlY29yZFNldCgpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBkYXRhOiBbLi4uZGF0YS52YWx1ZXMoKV0sXG4gICAgICBoYXNOZXh0OiB0aGlzLmNhbkludm9rZU1ldGhvZCgnR290b05leHRTZXQnKSxcbiAgICB9O1xuICB9XG5cbiAgX3NldEZpZWxkVmFsdWUobmFtZSwgdmFsdWUpIHtcbiAgICBjb25zb2xlLndhcm4oJ1tOMTldX3NldEZpZWxkVmFsdWUgd2lsbCBiZSByZW1vdmVkIGluIHRoZSBmdXR1cmUhJyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgIHRoaXMuYXBwbGV0LlNldENvbnRyb2xWYWx1ZUJ5TmFtZShuYW1lLCB2YWx1ZSk7XG4gICAgcmV0dXJuIHRoaXMucG0uRXhlY3V0ZU1ldGhvZCgnSW52b2tlTWV0aG9kJywgJ1dyaXRlUmVjb3JkJyk7XG4gIH1cblxuICAvLyB0aGlzIGlzIGFsc28gY2FsbGVkIGZyb20gdGhlIHRoZSBkZW1vIHdoZXJlIFNpZWJlbCBhbmQgY3VzdG9tIHJlbmRlcmVkIGFwcGxldCBjb2V4aXN0XG4gIF9nZXRGaWVsZFRvQ29udHJvbE1hcChfY29udHJvbHMpIHtcbiAgICBjb25zdCByZXQgPSB7fTtcbiAgICBjb25zdCBhcHBsZXRDb250cm9scyA9IHRoaXMuX3JldHVybkNvbnRyb2xzKCk7XG4gICAgY29uc3QgYXJyID0gT2JqZWN0LmtleXMoX2NvbnRyb2xzIHx8IGFwcGxldENvbnRyb2xzKTtcbiAgICBhcnIuZm9yRWFjaCgoY29udHJvbE5hbWUpID0+IHtcbiAgICAgIGNvbnN0IGNvbnRyb2wgPSBhcHBsZXRDb250cm9sc1tjb250cm9sTmFtZV07XG4gICAgICBjb25zdCBmaWVsZE5hbWUgPSBjb250cm9sLkdldEZpZWxkTmFtZSgpO1xuICAgICAgaWYgKGZpZWxkTmFtZSkge1xuICAgICAgICBjb25zdCB1aVR5cGUgPSBjb250cm9sLkdldFVJVHlwZSgpO1xuICAgICAgICByZXRbZmllbGROYW1lXSA9IHtcbiAgICAgICAgICBuYW1lOiBjb250cm9sTmFtZSxcbiAgICAgICAgICBpc1Bvc3RDaGFuZ2VzOiBjb250cm9sLklzUG9zdENoYW5nZXMoKSxcbiAgICAgICAgICB1aVR5cGUsXG4gICAgICAgICAgZGlzcGxheUZvcm1hdDogY29udHJvbC5HZXREaXNwbGF5Rm9ybWF0KCkgfHwgdGhpcy5nZXRDb250cm9sRGlzcGxheUZvcm1hdCh1aVR5cGUpLFxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICBnZXRDb250cm9sc1JlY29yZFNldCgpIHtcbiAgICAvLyB1c2VkIHNsaWNlIHRvIGF2b2lkIG1vZGlmaWNhdGlvbiBvZiB0aGUgcmVjb3JkIHNldFxuICAgIGNvbnN0IHJldCA9IHRoaXMuZ2V0UmVjb3JkU2V0KCkuc2xpY2UoKTtcbiAgICBjb25zdCByYXdSZWNvcmRTZXQgPSB0aGlzLmdldFJhd1JlY29yZFNldCgpOyAvLyBqdXN0IGZhbGxiYWNrIGlmIHJlY29yZCBzZXQgZG9lcyBub3QgaGF2ZSBJZFxuXG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHJldC5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgICAgY29uc3QgaWQgPSByZXRbaV0uSWQ7XG4gICAgICByZXRbaV0gPSBPYmplY3Qua2V5cyhyZXRbaV0pLmZpbHRlcihlbCA9PiB0aGlzLmZpZWxkVG9Db250cm9sTWFwW2VsXSkucmVkdWNlKChhY2MsIGVsKSA9PiAoe1xuICAgICAgICAuLi5hY2MsXG4gICAgICAgIC4uLntcbiAgICAgICAgICBbdGhpcy5maWVsZFRvQ29udHJvbE1hcFtlbF0ubmFtZV06IHRoaXMuX2dldEpTVmFsdWUocmV0W2ldW2VsXSxcbiAgICAgICAgICAgIHRoaXMuZmllbGRUb0NvbnRyb2xNYXBbZWxdLnVpVHlwZSxcbiAgICAgICAgICAgIHRoaXMuZmllbGRUb0NvbnRyb2xNYXBbZWxdLmRpc3BsYXlGb3JtYXQpLFxuICAgICAgICB9LFxuICAgICAgfSksIHt9KTtcbiAgICAgIGlmIChpZCkge1xuICAgICAgICByZXRbaV0uSWQgPSBpZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldFtpXS5JZCA9IHJhd1JlY29yZFNldFtpXS5JZDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgc29ydChjb250cm9sTmFtZSwgaXNBc2NlbmRpbmcpIHtcbiAgICAvLyBUT0RPOiBjaGVjayBpZiBzb3J0YWJsZT8gZS5nLiBub3QgaW4gcXVlcnkgbW9kZVxuICAgIC8vIFRPRE86IGNoZWNrIGlmIHdlIGNhbiBzb3J0IGJ5IHRoaXMgY29udHJvbD8gY29udHJvbCBoYXMgSXNTb3J0YWJsZSBmdW5jLCBidXQgd2UgZG9uJ3QgcmV0dXJuIHRoZSBvdXRwdXQgb2YgaXRcbiAgICBpZiAodGhpcy5pc0xpc3RBcHBsZXQpIHtcbiAgICAgIGNvbnN0IHNvcnRPcmRlciA9IGlzQXNjZW5kaW5nID8gdGhpcy5jb25zdHMuZ2V0KCdTT1JUX0FTQ0VORElORycpIDogdGhpcy5jb25zdHMuZ2V0KCdTT1JUX0RFU0NFTkRJTkcnKTtcbiAgICAgIHRoaXMuYXBwbGV0Lk9uQ2xpY2tTb3J0KGNvbnRyb2xOYW1lLCBzb3J0T3JkZXIpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTjE5bm90aWZpY2F0aW9ucyB7XG4gIGNvbnN0cnVjdG9yKHBtLCBjb25zdHMsIGJjSWQsIGZpZWxkVG9Db250cm9sTWFwKSB7XG4gICAgbGV0IHJlY2VpdmVkTm90aWZpY2F0aW9ucyA9IFtdO1xuICAgIHRoaXMudG9rZW4gPSAwO1xuICAgIHRoaXMuc3Vic2NyaWJlcnMgPSBbXTtcblxuICAgIHBtLkF0dGFjaE5vdGlmaWNhdGlvbkhhbmRsZXIoY29uc3RzLmdldCgnU1dFX1BST1BfQkNfTk9USV9CRUdJTicpLCAocHJvcFNldCkgPT4ge1xuICAgICAgaWYgKGJjSWQgPT09IHByb3BTZXQuR2V0UHJvcGVydHkoJ2JjJykpIHtcbiAgICAgICAgcmVjZWl2ZWROb3RpZmljYXRpb25zID0gW107XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBwbS5BdHRhY2hOb3RpZmljYXRpb25IYW5kbGVyKGNvbnN0cy5nZXQoJ1NXRV9QUk9QX0JDX05PVElfTkVXX0FDVElWRV9ST1cnKSwgKHByb3BTZXQpID0+IHtcbiAgICAgIGlmIChiY0lkID09PSBwcm9wU2V0LkdldFByb3BlcnR5KCdiYycpKSB7XG4gICAgICAgIHJlY2VpdmVkTm90aWZpY2F0aW9ucy5wdXNoKCdTV0VfUFJPUF9CQ19OT1RJX05FV19BQ1RJVkVfUk9XJyk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBwbS5BdHRhY2hOb3RpZmljYXRpb25IYW5kbGVyKGNvbnN0cy5nZXQoJ1NXRV9QUk9QX0JDX05PVElfU1RBVEVfQ0hBTkdFRCcpLCAocHJvcFNldCkgPT4ge1xuICAgICAgY29uc3Qgc3RhdGVzID0gWydjcCcsICduJ107XG4gICAgICBpZiAoYmNJZCA9PT0gcHJvcFNldC5HZXRQcm9wZXJ0eSgnYmMnKSkge1xuICAgICAgICBpZiAoIXN0YXRlcy5pbmNsdWRlcyhwcm9wU2V0LkdldFByb3BlcnR5KCdzdGF0ZScpKSkge1xuICAgICAgICAgIHJlY2VpdmVkTm90aWZpY2F0aW9ucy5wdXNoKCdTV0VfUFJPUF9CQ19OT1RJX1NUQVRFX0NIQU5HRUQnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gb3IgU1dFX1BST1BfQkNfTk9USV9ORVdfRklFTERfREFUQT9cbiAgICBwbS5BdHRhY2hOb3RpZmljYXRpb25IYW5kbGVyKGNvbnN0cy5nZXQoJ1NXRV9QUk9QX0JDX05PVElfTkVXX0RBVEFfV1MnKSwgKHByb3BTZXQpID0+IHtcbiAgICAgIGlmIChiY0lkID09PSBwcm9wU2V0LkdldFByb3BlcnR5KCdiYycpKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkTmFtZSA9IHByb3BTZXQuR2V0UHJvcGVydHkoY29uc3RzLmdldCgnU1dFX1BST1BfTk9USV9GSUVMRCcpKTtcbiAgICAgICAgY29uc3QgY29udHJvbCA9IGZpZWxkVG9Db250cm9sTWFwW2ZpZWxkTmFtZV07XG4gICAgICAgIGlmIChjb250cm9sICYmIGNvbnRyb2wudWlUeXBlICE9PSBjb25zdHMuZ2V0KCdTV0VfQ1RSTF9NVkcnKSkge1xuICAgICAgICAgIHJlY2VpdmVkTm90aWZpY2F0aW9ucy5wdXNoKCdTV0VfUFJPUF9CQ19OT1RJX05FV19EQVRBX1dTJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHBtLkF0dGFjaE5vdGlmaWNhdGlvbkhhbmRsZXIoY29uc3RzLmdldCgnU1dFX1BST1BfQkNfTk9USV9ERUxFVEVfUkVDT1JEJyksIChwcm9wU2V0KSA9PiB7XG4gICAgICBpZiAoYmNJZCA9PT0gcHJvcFNldC5HZXRQcm9wZXJ0eSgnYmMnKSkge1xuICAgICAgICByZWNlaXZlZE5vdGlmaWNhdGlvbnMucHVzaCgnU1dFX1BST1BfQkNfTk9USV9ERUxFVEVfUkVDT1JEJyk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBwbS5BdHRhY2hOb3RpZmljYXRpb25IYW5kbGVyKGNvbnN0cy5nZXQoJ1NXRV9QUk9QX0JDX05PVElfTkVXX1JFQ09SRCcpLCAocHJvcFNldCkgPT4ge1xuICAgICAgaWYgKGJjSWQgPT09IHByb3BTZXQuR2V0UHJvcGVydHkoJ2JjJykpIHtcbiAgICAgICAgcmVjZWl2ZWROb3RpZmljYXRpb25zLnB1c2goJ1NXRV9QUk9QX0JDX05PVElfTkVXX1JFQ09SRCcpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcG0uQXR0YWNoTm90aWZpY2F0aW9uSGFuZGxlcihjb25zdHMuZ2V0KCdTV0VfUFJPUF9CQ19OT1RJX0VORCcpLCAocHJvcFNldCkgPT4ge1xuICAgICAgaWYgKGJjSWQgPT09IHByb3BTZXQuR2V0UHJvcGVydHkoJ2JjJykpIHtcbiAgICAgICAgaWYgKHJlY2VpdmVkTm90aWZpY2F0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgLy8gd2UgYXNzdW1lIHRoYXQgdGhlIGZ1bmN0aW9uIGRvZXMgbm90IHRocm93IGFuIGVycm9yLCBzbyBubyBlcnJvciBoYW5kbGluZyBoZXJlXG4gICAgICAgICAgdGhpcy5zdWJzY3JpYmVycy5mb3JFYWNoKGVsID0+IGVsLmZ1bmMoKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHN1YnNjcmliZShmdW5jKSB7XG4gICAgaWYgKHR5cGVvZiBmdW5jICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2Z1bmMgaXMgbm90IGEgZnVuY3Rpb24nKTtcbiAgICB9XG4gICAgdGhpcy50b2tlbiArPSAxO1xuICAgIHRoaXMuc3Vic2NyaWJlcnMucHVzaCh7IHRva2VuOiB0aGlzLnRva2VuLCBmdW5jIH0pO1xuICAgIHJldHVybiB0aGlzLnRva2VuO1xuICB9XG5cbiAgdW5zdWJzY3JpYmUoc3ViVG9rZW4pIHtcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gdGhpcy5zdWJzY3JpYmVycy5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgICAgaWYgKHN1YlRva2VuID09PSB0aGlzLnN1YnNjcmliZXJzW2ldLnRva2VuKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN1YnNjcmliZXJzLnNwbGljZShpLCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iLCJpbXBvcnQgTjE5YmFzZUFwcGxldCBmcm9tICcuL24xOWJhc2VBcHBsZXQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOMTlwb3B1cEFwcGxldCBleHRlbmRzIE4xOWJhc2VBcHBsZXQge1xuICBjb25zdHJ1Y3RvcihzZXR0aW5ncykge1xuICAgIHN1cGVyKHNldHRpbmdzKTtcbiAgICBjb25zb2xlLmxvZyhgJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWV9IHN0YXJ0ZWQuLi5gKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG5cbiAgICBpZiAodGhpcy5pc0xpc3RBcHBsZXQpIHtcbiAgICAgIHRoaXMucG0uR2V0UmVuZGVyZXIoKS5yZXNpemUgPSAoKSA9PiAwO1xuICAgICAgdGhpcy5wbS5HZXRSZW5kZXJlcigpLkdldFNlbGVjdGVkUm93ID0gKCkgPT4gMDtcbiAgICB9XG4gIH1cblxuICBwaWNrUmVjb3JkKCkge1xuICAgIC8vIFRPRE86IGNoZWNrIGNhbklub2tlTWV0aG9kP1xuICAgIHJldHVybiB0aGlzLnBtLkV4ZWN1dGVNZXRob2QoJ0ludm9rZU1ldGhvZCcsICdQaWNrUmVjb3JkJyk7XG4gIH1cblxuICBkZWxldGVSZWNvcmRzKGNiKSB7XG4gICAgLy8gbWV0aG9kIGlzIG5vdCBhbGxvd2VkIHRvIGRlbGV0ZSB0aGUgcHJpbWFyeSBmb3IgdmlzaWJpbGl0eSBNVkdcbiAgICAvLyAgaW4gdGhpcyBjYXNlIGl0IHJldHVybnMgXCJNZXRob2QgRGVsZXRlUmVjb3JkcyBpcyBub3QgYWxsb3dlZCBoZXJlXCIgU0JMLVVJRi0wMDM0OFxuICAgIC8vIFRPRE86IGNoZWNrIGNhbkludm9rZU1ldGhvZD9cbiAgICBjb25zdCByZXQgPSB0aGlzLnBtLkV4ZWN1dGVNZXRob2QoJ0ludm9rZU1ldGhvZCcsICdEZWxldGVSZWNvcmRzJyk7XG4gICAgaWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2IoKTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIGRlbGV0ZUFsbFJlY29yZHMoY2IpIHtcbiAgICAvLyBtZXRob2QgaXMgbm90IGRlbGV0aW5nIHRoZSBwcmltYXJ5IGZvciB2aXNpYmlsaXR5IE1WRyghKSBhbmQgc3RpbGwgcmV0dXJucyB0cnVlXG4gICAgLy8gVE9ETzogY2hlY2sgY2FuSW52b2tlTWV0aG9kP1xuICAgIGNvbnN0IHJldCA9IHRoaXMucG0uRXhlY3V0ZU1ldGhvZCgnSW52b2tlTWV0aG9kJywgJ0RlbGV0ZUFsbFJlY29yZHMnKTtcbiAgICBpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjYigpO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgYWRkUmVjb3JkcyhjYikge1xuICAgIC8vIFRPRE86IGNoZWNrIGNhbkludm9rZU1ldGhvZD9cbiAgICBjb25zdCByZXQgPSB0aGlzLnBtLkV4ZWN1dGVNZXRob2QoJ0ludm9rZU1ldGhvZCcsICdBZGRSZWNvcmRzJyk7XG4gICAgaWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2IoKTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIGFkZEFsbFJlY29yZHMoY2IpIHtcbiAgICAvLyBUT0RPOiBjaGVjayBjYW5JbnZva2VNZXRob2Q/XG4gICAgY29uc3QgcmV0ID0gdGhpcy5wbS5FeGVjdXRlTWV0aG9kKCdJbnZva2VNZXRob2QnLCAnQWRkQWxsUmVjb3JkcycpO1xuICAgIGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNiKCk7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICBfZmlyc3RSZWNvcmQoKSB7IC8vIHRlbXAgbWV0aG9kLCBhc3N1bWVzIHRoYXQgbm8gc2Nyb2xsaW5nIGhhcHBlbmVkXG4gICAgaWYgKHRoaXMuaXNMaXN0QXBwbGV0KSB7XG4gICAgICBpZiAodGhpcy5nZXRTZWxlY3Rpb24oKSAhPT0gMCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wb3NpdGlvbk9uUm93KDApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIiwiaW1wb3J0IE4xOXBvcHVwQXBwbGV0IGZyb20gJy4vbjE5cG9wdXBBcHBsZXQnO1xuXG5jb25zdCBzaW5nbGV0b24gPSBTeW1ib2woJ3NpbmdsZXRvbicpO1xuY29uc3Qgc2luZ2xldG9uRW5mb3JjZXIgPSBTeW1ib2woJ3NpbmdsZXRvbkVuZm9yY2VyJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE4xOXBvcHVwQ29udHJvbGxlciB7XG4gIHN0YXRpYyBnZXQgaW5zdGFuY2UoKSB7XG4gICAgaWYgKCF0aGlzW3NpbmdsZXRvbl0pIHtcbiAgICAgIHRoaXNbc2luZ2xldG9uXSA9IG5ldyBOMTlwb3B1cENvbnRyb2xsZXIoc2luZ2xldG9uRW5mb3JjZXIpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpc1tzaW5nbGV0b25dO1xuICB9XG5cbiAgY29uc3RydWN0b3IoZW5mb3JjZXIpIHtcbiAgICBpZiAoZW5mb3JjZXIgIT09IHNpbmdsZXRvbkVuZm9yY2VyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0luc3RhbnRpYXRpb24gZmFpbGVkOiB1c2UgU2luZ2xldG9uLmdldEluc3RhbmNlKCkgaW5zdGVhZCBvZiBuZXcuJyk7XG4gICAgfVxuXG4gICAgdGhpcy5jb25zdHMgPSBTaWViZWxKUy5EZXBlbmRlbmN5KCdTaWViZWxBcHAuQ29uc3RhbnRzJyk7XG4gICAgdGhpcy5pc1BvcHVwSGlkZGVuID0gZmFsc2U7XG4gICAgdGhpcy5yZXNvbHZlUHJvbWlzZSA9IG51bGw7XG4gICAgdGhpcy5wb3B1cEFwcGxldE4xOSA9IG51bGw7XG4gICAgdGhpcy5hc3NvY0FwcGxldE4xOSA9IG51bGw7XG5cbiAgICBjb25zb2xlLmxvZyhgJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWV9IHN0YXJ0ZWQuLi5gKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG5cbiAgICB0aGlzLk4xOXJlc2l6ZUF2YWlsYWJsZSA9IFNpZWJlbEFwcC5NdmdCZWF1dGlmaWVyLnJlc2l6ZUF2YWlsYWJsZTtcbiAgICBTaWViZWxBcHAuTXZnQmVhdXRpZmllci5yZXNpemVBdmFpbGFibGUgPSAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLk4xOXJlc2l6ZUF2YWlsYWJsZS5jYWxsKFNpZWJlbEFwcC5NdmdCZWF1dGlmaWVyKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coYHJlc2l6ZUF2YWlsYWJsZSBFcnJvcjogJHtlLm5hbWV9ICR7ZS5tZXNzYWdlfWApOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gaXQgd2lsbCBiZSBhIHNpbmdsZXRvbiwgc28gdGhlcmUgaXMgbm8gY2xlYW51cFxuICAgIHRoaXMuTjE5cHJvY2Vzc05ld1BvcHVwID0gU2llYmVsQXBwLlNfQXBwLlByb2Nlc3NOZXdQb3B1cDtcbiAgICBTaWViZWxBcHAuU19BcHAuUHJvY2Vzc05ld1BvcHVwID0gKHBzKSA9PiB7XG4gICAgICBsZXQgcmV0O1xuICAgICAgaWYgKHRoaXMuaXNQb3B1cEhpZGRlbikge1xuICAgICAgICByZXQgPSB0aGlzLnByb2Nlc3NOZXdQb3B1cChwcyk7XG4gICAgICAgIHRoaXMuaXNQb3B1cEhpZGRlbiA9IGZhbHNlOyAvLyBpbiBvcmRlciB0byBkbyBub3QgYWZmZWN0IHRoZSBuZXh0IGNhbGxcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldCA9IHRoaXMuTjE5cHJvY2Vzc05ld1BvcHVwLmNhbGwoU2llYmVsQXBwLlNfQXBwLCBwcyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmV0O1xuICAgIH07XG5cbiAgICAvLyB3ZSBjb3VsZCB1c2UgcG0uQXR0YWNoUG9zdFByb3h5RXhlY3V0ZUJpbmRpbmcgZm9yICdFZGl0RmllbGQnLCBwbSBleGlzdHMsIGJ1dCBHZXRSZW5kZXJlciByZXR1cm5zIG51bGxcbiAgICAvLyBvcGVuIHVudGlsIHdlIGdldCByaWQgb2YgR2V0UmVuZGVyZXIgKE9yYWNsZSByZXZpZXcpXG4gICAgLy8gb3RoZXIgb3B0aW9uIC0gcmVzb2x2ZSBpdCBpbiBTaWViZWxBcHAuY29udGVudFVwZGF0ZXIudmlld0xvYWRlZFxuICAgIFNpZWJlbEFwcC5TX0FwcC5HZXRQb3B1cFBNKCkuQXR0YWNoUE1CaW5kaW5nKCdPbkxvYWRQb3B1cENvbnRlbnQnLCAoKSA9PiB7XG4gICAgICBpZiAodHlwZW9mIHRoaXMucmVzb2x2ZVByb21pc2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY29uc3QgeyBhcHBsZXROYW1lIH0gPSBOMTlwb3B1cENvbnRyb2xsZXIuSXNQb3B1cE9wZW4oKTtcbiAgICAgICAgaWYgKCFhcHBsZXROYW1lKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdPcGVuIEFwcGxldCBOYW1lIGlzIG5vdCBmb3VuZCBpbiBPbkxvYWRQb3B1cENvbnRlbnQgcmVzb2x2aW5nIFByb21pc2UnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhcHBsZXQgPSBOMTlwb3B1cENvbnRyb2xsZXIuR2V0UG9wdXBBcHBsZXQoYXBwbGV0TmFtZSk7XG4gICAgICAgIHRoaXMucG9wdXBBcHBsZXROMTkgPSBuZXcgTjE5cG9wdXBBcHBsZXQoeyBwbTogYXBwbGV0LkdldFBNb2RlbCgpIH0pO1xuICAgICAgICBjb25zdCBvYmogPSB7IGFwcGxldE5hbWUsIHBvcHVwQXBwbGV0TjE5OiB0aGlzLnBvcHVwQXBwbGV0TjE5IH07XG5cbiAgICAgICAgY29uc3QgYXNzb2NBcHBsZXQgPSBhcHBsZXQuR2V0UG9wdXBBcHBsZXQoKTsgLy8gaXMgaXQgYWx3YXlzIGFzc29jP1xuICAgICAgICBpZiAoYXNzb2NBcHBsZXQpIHsgLy8gd2UgZ290IGEgc2h1dHRsZVxuICAgICAgICAgIHRoaXMuYXNzb2NBcHBsZXROMTkgPSBuZXcgTjE5cG9wdXBBcHBsZXQoeyBwbTogYXNzb2NBcHBsZXQuR2V0UE1vZGVsKCkgfSk7XG4gICAgICAgICAgb2JqLmFzc29jQXBwbGV0TjE5ID0gdGhpcy5hc3NvY0FwcGxldE4xOTtcbiAgICAgICAgICBvYmouYXZhaWxhYmxlUmVjb3JkU2V0ID0gdGhpcy5hc3NvY0FwcGxldE4xOS5nZXRDb250cm9sc1JlY29yZFNldCgpO1xuICAgICAgICAgIG9iai5zZWxlY3RlZFJlY29yZFNldCA9IHRoaXMucG9wdXBBcHBsZXROMTkuZ2V0Q29udHJvbHNSZWNvcmRTZXQoKTtcbiAgICAgICAgfSBlbHNlIHsgLy8gYXNzb2Mgb25seSBPUiBwaWNrXG4gICAgICAgICAgb2JqLmF2YWlsYWJsZVJlY29yZFNldCA9IHRoaXMucG9wdXBBcHBsZXROMTkuZ2V0Q29udHJvbHNSZWNvcmRTZXQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucmVzb2x2ZVByb21pc2Uob2JqKTtcbiAgICAgICAgdGhpcy5yZXNvbHZlUHJvbWlzZSA9IG51bGw7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBjYW5PcGVuUG9wdXAoKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB0aGlzLnJlc29sdmVQcm9taXNlICE9PSAnZnVuY3Rpb24nO1xuICB9XG5cbiAgcHJvY2Vzc05ld1BvcHVwKHBzKSB7XG4gICAgY29uc3QgcG9wdXBQTSA9IFNpZWJlbEFwcC5TX0FwcC5HZXRQb3B1cFBNKCk7XG5cbiAgICBpZiAoIXBvcHVwUE0uR2V0UmVuZGVyZXIoKSkge1xuICAgICAgcG9wdXBQTS5TZXR1cCgpOyAvLyB0byBjcmVhdGUgUFJcbiAgICB9XG5cbiAgICBjb25zdCBhY3RpdmVWaWV3ID0gU2llYmVsQXBwLlNfQXBwLkdldEFjdGl2ZVZpZXcoKTtcbiAgICBjb25zdCBhY3RpdmVBcHBsZXQgPSBhY3RpdmVWaWV3LkdldEFjdGl2ZUFwcGxldCgpO1xuICAgIGlmIChhY3RpdmVBcHBsZXQpIHtcbiAgICAgIGFjdGl2ZVZpZXcuU2V0QWN0aXZlQXBwbGV0QmVmb3JlUG9wdXAoYWN0aXZlQXBwbGV0KTtcbiAgICB9XG5cbiAgICAvLyB0aGlzIHByb3BlcnR5IGlzIGFkZGVkIHVzaW5nIEF0dGFjaFBNQmluZGluZyBpbnRvIHRoZSBJbml0IFBSIChjYWxsZWQgYnkgUE0gU2V0dXApXG4gICAgLy8gaXQgaXMgdGhlIHJlYXNvbiB3aHkgd2UgaGF2ZSByZWluaXQgcHJvY2VkdXJlIHdoZXJlIFNldHVwIFBNIGlzIGNhbGxlZFxuICAgIHBvcHVwUE0uQWRkUHJvcGVydHkoJ3N0YXRlJywgdGhpcy5jb25zdHMuZ2V0KCdQT1BVUF9TVEFURV9WSVNJQkxFJykpO1xuXG4gICAgbGV0IHVybCA9IHBzLkdldFByb3BlcnR5KCdVUkwnKTtcbiAgICB1cmwgPSBTaWViZWxBcHAuU19BcHAuR2V0UGFnZVVSTCgpICsgdXJsLnNwbGl0KCdzdGFydC5zd2UnKVsxXTtcbiAgICBwb3B1cFBNLlNldFByb3BlcnR5KCd1cmwnLCB1cmwpO1xuXG4gICAgcmV0dXJuICdyZWZyZXNocG9wdXAnO1xuICB9XG5cbiAgY2xvc2VQb3B1cEFwcGxldChhcHBsZXQpIHtcbiAgICAvLyBUT0RPOiBjaGVjayBjYW5JbnZva2VNZXRob2Q/XG4gICAgbGV0IHJldDtcbiAgICBpZiAoYXBwbGV0KSB7XG4gICAgICBjb25zdCBpc1BvcHVwQXBwbGV0ID0gdHlwZW9mIGFwcGxldC5HZXRQb3B1cEFwcGxldE5hbWUgPT09ICdmdW5jdGlvbic7XG4gICAgICBjb25zdCBpc1BpY2tBcHBsZXQgPSB0eXBlb2YgYXBwbGV0LkdldFBpY2tBcHBsZXROYW1lID09PSAnZnVuY3Rpb24nO1xuICAgICAgaWYgKCFpc1BvcHVwQXBwbGV0ICYmICFpc1BpY2tBcHBsZXQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGlzIGFwcGxldCBpcyBuZWl0aGVyIHBpY2sgbm9yIHBvcHVwJyk7XG4gICAgICB9XG4gICAgICByZXQgPSBhcHBsZXQuR2V0UE1vZGVsKCkuRXhlY3V0ZU1ldGhvZCgnSW52b2tlTWV0aG9kJywgJ0Nsb3NlQXBwbGV0Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldCA9IHRoaXMucG9wdXBBcHBsZXROMTkuYXBwbGV0LkdldFBNb2RlbCgpLkV4ZWN1dGVNZXRob2QoJ0ludm9rZU1ldGhvZCcsICdDbG9zZUFwcGxldCcpO1xuICAgIH1cbiAgICAvLyBpdCBjb3VsZCBiZSBiZXR0ZXIgaWYgd2UgZG9uJ3QgaGF2ZSBhIFNpZWJlbCBBcHBsZXQgb24gdGhlIHZpZXdcbiAgICAvLyBkbyByZWluaXQgaGVyZSBvbiBjbG9zaW5nP1xuICAgIHRoaXMucG9wdXBBcHBsZXROMTkgPSBudWxsO1xuICAgIHRoaXMuYXNzb2NBcHBsZXROMTkgPSBudWxsO1xuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICBzdGF0aWMgSXNQb3B1cE9wZW4oKSB7IC8vIHNhZmVyIHRvIGtlZXAgdGhpcyBtZXRob2QsIGV2ZW4gd2hlbiB3ZSBzZXQgc29tZSBwcm9wZXJ0aWVzIG9uIHJlc29sdmU/XG4gICAgY29uc3QgY3VyclBvcHVwcyA9IFNpZWJlbEFwcC5TX0FwcC5HZXRQb3B1cFBNKCkuR2V0KCdjdXJyUG9wdXBzJyk7XG4gICAgaWYgKDAgPT09IGN1cnJQb3B1cHMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4geyBpc09wZW46IGZhbHNlIH07XG4gICAgfVxuICAgIGlmICgxID09PSBjdXJyUG9wdXBzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHsgaXNPcGVuOiB0cnVlLCBhcHBsZXROYW1lOiBjdXJyUG9wdXBzWzBdLkdldE5hbWUoKSwgY29udHJvbE5hbWU6IGN1cnJQb3B1cHNbMF0uR2V0UG9wdXBDb250cm9sKCkgfTtcbiAgICB9XG4gICAgaWYgKDIgPT09IGN1cnJQb3B1cHMubGVuZ3RoKSB7XG4gICAgICAvLyBpcyB0aGlzIGFsd2F5cyBhIHNodXR0bGUgd2hlbiB3ZSBoYXZlIGEgc2Vkb25kIGFwcGxldFxuICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGN1cnJQb3B1cHMubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjdXJyUG9wdXBzWzFdLkdldFBvcHVwQXBwbGV0TmFtZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHJldHVybiB7IGlzT3BlbjogdHJ1ZSwgYXBwbGV0TmFtZTogY3VyclBvcHVwc1tpXS5HZXROYW1lKCksIGNvbnRyb2xOYW1lOiBjdXJyUG9wdXBzW2ldLkdldFBvcHVwQ29udHJvbCgpIH07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcignTXZnIGFwcGxldCBpcyBub3QgZm91bmQuLi4nKTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzaG91bGQgbm90IGJlIGhlcmUuLi4nKTtcbiAgfVxuXG4gIHN0YXRpYyBHZXRQb3B1cEFwcGxldChhcHBsZXROYW1lKSB7XG4gICAgY29uc3QgYXBwbGV0ID0gU2llYmVsQXBwLlNfQXBwLkdldEFjdGl2ZVZpZXcoKS5HZXRBcHBsZXQoYXBwbGV0TmFtZSk7XG4gICAgaWYgKCFhcHBsZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIHJlZmVyZW5jZSB0byAke2FwcGxldE5hbWV9IGlzIG5vdCBpbnN0YW50aWF0ZWQuYCk7XG4gICAgfVxuICAgIHJldHVybiBhcHBsZXQ7XG4gIH1cblxuICBjaGVja09wZW5lZFBvcHVwKGNsb3NlSWZPcGVuKSB7XG4gICAgY29uc3QgeyBpc09wZW4sIGFwcGxldE5hbWUgfSA9IE4xOXBvcHVwQ29udHJvbGxlci5Jc1BvcHVwT3BlbigpO1xuICAgIGlmIChpc09wZW4gJiYgY2xvc2VJZk9wZW4pIHtcbiAgICAgIC8vIHRoaXMgY29kZSB3aWxsIGNsb3NlIHRoZSBhcHBsZXQgZXZlbiBpZiB0aGlzIGFwcGxldCB3YXMgb3JpZ2luYXRlZCBieSBhbm90aGVyIGFwcGxldFxuICAgICAgY29uc29sZS5sb2coYGNsb3NpbmcgJHthcHBsZXROYW1lfSBpbiBzaG93UG9wdXBBcHBsZXQuLi5gKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgICAvLyBtYXliZSBkbyBub3QgY2xvc2UgaWYgdGhlIGFwcGxldCB0byBiZSBvcGVuZWQgaWYgdGhlIHNhbWUgYXMgYWxyZWFkeSBvcGVuZWQ/XG4gICAgICByZXR1cm4gdGhpcy5jbG9zZVBvcHVwQXBwbGV0KE4xOXBvcHVwQ29udHJvbGxlci5HZXRQb3B1cEFwcGxldChhcHBsZXROYW1lKSk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBpc09wZW4sXG4gICAgICBhcHBsZXROYW1lLFxuICAgIH07XG4gIH1cblxuICBfb3BlbkFzc29jQXBwbGV0KG5ld1JlY29yZEZ1bmMsIGNiKSB7XG4gICAgdGhpcy5jaGVja09wZW5lZFBvcHVwKHRydWUpO1xuICAgIHRoaXMuaXNQb3B1cEhpZGRlbiA9IHRydWU7XG5cbiAgICBuZXdSZWNvcmRGdW5jKCk7IC8vIG1ha2UgYXN5bmMgb2YgaW52b2tlTWV0aG9kP1xuXG4gICAgbGV0IHJldCA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7IHRoaXMucmVzb2x2ZVByb21pc2UgPSByZXNvbHZlOyB9KTtcbiAgICBpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXQgPSByZXQudGhlbihjYik7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICBzaG93UG9wdXBBcHBsZXQoaGlkZSwgY2IsIG4xOSkge1xuICAgIC8vIFRPRE86IG1heWJlIHVzZSB0aGUgcHJvcGVydGllcyBzZXQgb24gcHJvbWlzZSByZXNvbHZpbmc/XG4gICAgdGhpcy5jaGVja09wZW5lZFBvcHVwKHRydWUpO1xuXG4gICAgdGhpcy5pc1BvcHVwSGlkZGVuID0gISFoaWRlO1xuXG4gICAgbjE5LnBtLkV4ZWN1dGVNZXRob2QoJ0ludm9rZU1ldGhvZCcsICdFZGl0UG9wdXAnKTsgLy8gY2FuIGNhbGwgRWRpdEZpZWxkP1xuXG4gICAgaWYgKGhpZGUpIHsgLy8gd2Ugd2lsbCBwb3B1bGF0ZSB0aGUgaW5zdGFuY2VzIG9ubHkgd2hlbiBhcHBsZXQgc2hvdWxkIGJlIGhpZGRlblxuICAgICAgbGV0IHJldCA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7IHRoaXMucmVzb2x2ZVByb21pc2UgPSByZXNvbHZlOyB9KTtcbiAgICAgIGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0ID0gcmV0LnRoZW4oY2IpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==