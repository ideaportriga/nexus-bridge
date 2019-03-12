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
    key: "openAssocApplet",
    value: function openAssocApplet(cb) {
      // this method should be available for child business component in M:M relationship
      // TODO: check if applet provides such capabilities?
      if (!this.n19popupController.canOpenPopup()) {
        throw new Error('Cannot open popup (currently exists resolve function)!');
      }

      return this.n19popupController._openAssocApplet(this.newRecord.bind(this), cb);
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
      this.showPickApplet(controlName, true, null).then(function (obj) {
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
    }; // we could use pm.AttachPostProxyExecuteBinding for 'EditField', but at this point GetRenderer returns null
    // but pm exists
    // open until we get rid of GetRenderer (Oracle review)
    // other option - OnLoadPopupContent?


    this.N19viewLoaded = SiebelApp.contentUpdater.viewLoaded;

    SiebelApp.contentUpdater.viewLoaded = function () {
      var _this$N19viewLoaded;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var ret = (_this$N19viewLoaded = _this.N19viewLoaded).call.apply(_this$N19viewLoaded, [SiebelApp.contentUpdater].concat(args));

      if (typeof _this.resolvePromise === 'function') {
        // TODO: maybe use here the properties set on resolivng
        var _N19popupController$I = N19popupController.IsPopupOpen(),
            appletName = _N19popupController$I.appletName;

        if (!appletName) {
          // console.warn('Open Applet Name is not found in viewLoaded resolving Promise');
          throw new Error('Open Applet Name is not found in viewLoaded resolving Promise');
        } else {
          var applet = N19popupController.GetPopupApplet(appletName);
          var pm = applet.GetPModel();
          _this.popupAppletN19 = new _n19popupApplet__WEBPACK_IMPORTED_MODULE_5__["default"]({
            pm: pm
          });
          var obj = {
            appletName: appletName,
            popupAppletN19: _this.popupAppletN19
          }; // check if we have assoc - we assume it is always assoc applet?

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYW4taW5zdGFuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FycmF5LW1ldGhvZHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYXJyYXktc3BlY2llcy1jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hcnJheS1zcGVjaWVzLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jbGFzc29mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NvZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jb2xsZWN0aW9uLXN0cm9uZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jb2xsZWN0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY3JlYXRlLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2N0eC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19kZWZpbmVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2RvbS1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19lbnVtLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZXhwb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2ZhaWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2ZpeC1yZS13a3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZmxhZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZm9yLW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19oYXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faGlkZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19odG1sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2luaGVyaXQtaWYtcmVxdWlyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faW52b2tlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2lvYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXMtYXJyYXktaXRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pcy1hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pcy1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXMtcmVnZXhwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXItY2FsbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyLWRldGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyLXN0ZXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlcmF0b3JzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2xpYnJhcnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fbWV0YS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19taWNyb3Rhc2suanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fbmV3LXByb21pc2UtY2FwYWJpbGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtYXNzaWduLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWRwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1kcHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdvcGQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdvcG4tZXh0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1nb3BuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1nb3BzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1ncG8uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LXBpZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3Qtc2FwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC10by1hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19wZXJmb3JtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3Byb21pc2UtcmVzb2x2ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3JlZGVmaW5lLWFsbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19yZWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zZXQtcHJvdG8uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc2V0LXNwZWNpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc2hhcmVkLWtleS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc3BlY2llcy1jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zdHJpbmctYXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdGFzay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1hYnNvbHV0ZS1pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWlvYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1wcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdWlkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3VzZXItYWdlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdmFsaWRhdGUtY29sbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL193a3MtZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3drcy1leHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fd2tzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmZpbmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuZnJvbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5mdW5jdGlvbi5uYW1lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnByb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLmZsYWdzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5zcGxpdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAudG8tc3RyaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcuYXJyYXkuaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcub2JqZWN0LmVudHJpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcub2JqZWN0LnZhbHVlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzIiwid2VicGFjazovLy8uL3NyYy9tYWluLmpzIiwid2VicGFjazovLy8uL3NyYy9uMTliYXNlQXBwbGV0LmpzIiwid2VicGFjazovLy8uL3NyYy9uMTlub3RpZmljYXRpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9uMTlwb3B1cEFwcGxldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbjE5cG9wdXBDb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJpdCIsIlR5cGVFcnJvciIsIlVOU0NPUEFCTEVTIiwicmVxdWlyZSIsIkFycmF5UHJvdG8iLCJBcnJheSIsInByb3RvdHlwZSIsInVuZGVmaW5lZCIsImtleSIsIkNvbnN0cnVjdG9yIiwibmFtZSIsImZvcmJpZGRlbkZpZWxkIiwiaXNPYmplY3QiLCJ0b0lPYmplY3QiLCJ0b0xlbmd0aCIsInRvQWJzb2x1dGVJbmRleCIsIklTX0lOQ0xVREVTIiwiJHRoaXMiLCJlbCIsImZyb21JbmRleCIsIk8iLCJsZW5ndGgiLCJpbmRleCIsInZhbHVlIiwiY3R4IiwiSU9iamVjdCIsInRvT2JqZWN0IiwiYXNjIiwiVFlQRSIsIiRjcmVhdGUiLCJJU19NQVAiLCJJU19GSUxURVIiLCJJU19TT01FIiwiSVNfRVZFUlkiLCJJU19GSU5EX0lOREVYIiwiTk9fSE9MRVMiLCJjcmVhdGUiLCJjYWxsYmFja2ZuIiwidGhhdCIsInNlbGYiLCJmIiwicmVzdWx0IiwidmFsIiwicmVzIiwicHVzaCIsImlzQXJyYXkiLCJTUEVDSUVTIiwib3JpZ2luYWwiLCJDIiwiY29uc3RydWN0b3IiLCJzcGVjaWVzQ29uc3RydWN0b3IiLCJjb2YiLCJUQUciLCJBUkciLCJhcmd1bWVudHMiLCJ0cnlHZXQiLCJlIiwiVCIsIkIiLCJPYmplY3QiLCJjYWxsZWUiLCJ0b1N0cmluZyIsImNhbGwiLCJzbGljZSIsImRQIiwicmVkZWZpbmVBbGwiLCJhbkluc3RhbmNlIiwiZm9yT2YiLCIkaXRlckRlZmluZSIsInN0ZXAiLCJzZXRTcGVjaWVzIiwiREVTQ1JJUFRPUlMiLCJmYXN0S2V5IiwidmFsaWRhdGUiLCJTSVpFIiwiZ2V0RW50cnkiLCJlbnRyeSIsIl9pIiwiX2YiLCJuIiwiayIsImdldENvbnN0cnVjdG9yIiwid3JhcHBlciIsIk5BTUUiLCJBRERFUiIsIml0ZXJhYmxlIiwiX3QiLCJfbCIsImNsZWFyIiwiZGF0YSIsInIiLCJwIiwiaSIsIm5leHQiLCJwcmV2IiwiZm9yRWFjaCIsInYiLCJoYXMiLCJnZXQiLCJkZWYiLCJzZXRTdHJvbmciLCJpdGVyYXRlZCIsImtpbmQiLCJfayIsImdsb2JhbCIsIiRleHBvcnQiLCJyZWRlZmluZSIsIm1ldGEiLCJmYWlscyIsIiRpdGVyRGV0ZWN0Iiwic2V0VG9TdHJpbmdUYWciLCJpbmhlcml0SWZSZXF1aXJlZCIsIm1ldGhvZHMiLCJjb21tb24iLCJJU19XRUFLIiwiQmFzZSIsInByb3RvIiwiZml4TWV0aG9kIiwiS0VZIiwiZm4iLCJhIiwiYWRkIiwic2V0IiwiYiIsImVudHJpZXMiLCJORUVEIiwiaW5zdGFuY2UiLCJIQVNOVF9DSEFJTklORyIsIlRIUk9XU19PTl9QUklNSVRJVkVTIiwiQUNDRVBUX0lURVJBQkxFUyIsIml0ZXIiLCJCVUdHWV9aRVJPIiwiJGluc3RhbmNlIiwidGFyZ2V0IiwiRyIsIlciLCJGIiwiY29yZSIsInZlcnNpb24iLCJfX2UiLCIkZGVmaW5lUHJvcGVydHkiLCJjcmVhdGVEZXNjIiwib2JqZWN0IiwiYUZ1bmN0aW9uIiwiYyIsImFwcGx5IiwiZGVmaW5lUHJvcGVydHkiLCJkb2N1bWVudCIsImlzIiwiY3JlYXRlRWxlbWVudCIsInNwbGl0IiwiZ2V0S2V5cyIsImdPUFMiLCJwSUUiLCJnZXRTeW1ib2xzIiwic3ltYm9scyIsImlzRW51bSIsImhpZGUiLCJQUk9UT1RZUEUiLCJ0eXBlIiwic291cmNlIiwiSVNfRk9SQ0VEIiwiSVNfR0xPQkFMIiwiSVNfU1RBVElDIiwiUyIsIklTX1BST1RPIiwiUCIsIklTX0JJTkQiLCJleHBQcm90byIsIm93biIsIm91dCIsImV4cCIsIkZ1bmN0aW9uIiwiVSIsIlIiLCJleGVjIiwiZGVmaW5lZCIsIndrcyIsIlNZTUJPTCIsImZucyIsInN0cmZuIiwicnhmbiIsIlN0cmluZyIsIlJlZ0V4cCIsInN0cmluZyIsImFyZyIsImFuT2JqZWN0IiwiaWdub3JlQ2FzZSIsIm11bHRpbGluZSIsInVuaWNvZGUiLCJzdGlja3kiLCJpc0FycmF5SXRlciIsImdldEl0ZXJGbiIsIkJSRUFLIiwiUkVUVVJOIiwiSVRFUkFUT1IiLCJpdGVyRm4iLCJpdGVyYXRvciIsImRvbmUiLCJ3aW5kb3ciLCJNYXRoIiwiX19nIiwiaGFzT3duUHJvcGVydHkiLCJkb2N1bWVudEVsZW1lbnQiLCJzZXRQcm90b3R5cGVPZiIsImFyZ3MiLCJ1biIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwiSXRlcmF0b3JzIiwiTUFUQ0giLCJpc1JlZ0V4cCIsInJldCIsImRlc2NyaXB0b3IiLCJJdGVyYXRvclByb3RvdHlwZSIsIkxJQlJBUlkiLCIkaXRlckNyZWF0ZSIsImdldFByb3RvdHlwZU9mIiwiQlVHR1kiLCJrZXlzIiwiRkZfSVRFUkFUT1IiLCJLRVlTIiwiVkFMVUVTIiwicmV0dXJuVGhpcyIsIkRFRkFVTFQiLCJJU19TRVQiLCJGT1JDRUQiLCJnZXRNZXRob2QiLCJ2YWx1ZXMiLCJERUZfVkFMVUVTIiwiVkFMVUVTX0JVRyIsIiRuYXRpdmUiLCIkZGVmYXVsdCIsIiRlbnRyaWVzIiwiJGFueU5hdGl2ZSIsIlNBRkVfQ0xPU0lORyIsInJpdGVyIiwiZnJvbSIsInNraXBDbG9zaW5nIiwic2FmZSIsImFyciIsIk1FVEEiLCJzZXREZXNjIiwiaWQiLCJpc0V4dGVuc2libGUiLCJGUkVFWkUiLCJwcmV2ZW50RXh0ZW5zaW9ucyIsInNldE1ldGEiLCJ3IiwiZ2V0V2VhayIsIm9uRnJlZXplIiwibWFjcm90YXNrIiwiT2JzZXJ2ZXIiLCJNdXRhdGlvbk9ic2VydmVyIiwiV2ViS2l0TXV0YXRpb25PYnNlcnZlciIsInByb2Nlc3MiLCJQcm9taXNlIiwiaXNOb2RlIiwiaGVhZCIsImxhc3QiLCJub3RpZnkiLCJmbHVzaCIsInBhcmVudCIsImRvbWFpbiIsImV4aXQiLCJlbnRlciIsIm5leHRUaWNrIiwibmF2aWdhdG9yIiwic3RhbmRhbG9uZSIsInRvZ2dsZSIsIm5vZGUiLCJjcmVhdGVUZXh0Tm9kZSIsIm9ic2VydmUiLCJjaGFyYWN0ZXJEYXRhIiwicmVzb2x2ZSIsInByb21pc2UiLCJ0aGVuIiwidGFzayIsIlByb21pc2VDYXBhYmlsaXR5IiwicmVqZWN0IiwiJCRyZXNvbHZlIiwiJCRyZWplY3QiLCIkYXNzaWduIiwiYXNzaWduIiwiQSIsIlN5bWJvbCIsIksiLCJqb2luIiwiYUxlbiIsImNvbmNhdCIsImoiLCJkUHMiLCJlbnVtQnVnS2V5cyIsIklFX1BST1RPIiwiRW1wdHkiLCJjcmVhdGVEaWN0IiwiaWZyYW1lIiwibHQiLCJndCIsImlmcmFtZURvY3VtZW50Iiwic3R5bGUiLCJkaXNwbGF5IiwiYXBwZW5kQ2hpbGQiLCJzcmMiLCJjb250ZW50V2luZG93Iiwib3BlbiIsIndyaXRlIiwiY2xvc2UiLCJQcm9wZXJ0aWVzIiwiSUU4X0RPTV9ERUZJTkUiLCJ0b1ByaW1pdGl2ZSIsIkF0dHJpYnV0ZXMiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiZ09QRCIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImdPUE4iLCJ3aW5kb3dOYW1lcyIsImdldE93blByb3BlcnR5TmFtZXMiLCJnZXRXaW5kb3dOYW1lcyIsIiRrZXlzIiwiaGlkZGVuS2V5cyIsImdldE93blByb3BlcnR5U3ltYm9scyIsIk9iamVjdFByb3RvIiwiYXJyYXlJbmRleE9mIiwibmFtZXMiLCJpc0VudHJpZXMiLCJuZXdQcm9taXNlQ2FwYWJpbGl0eSIsIngiLCJwcm9taXNlQ2FwYWJpbGl0eSIsImJpdG1hcCIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIlNSQyIsIlRPX1NUUklORyIsIiR0b1N0cmluZyIsIlRQTCIsImluc3BlY3RTb3VyY2UiLCJpc0Z1bmN0aW9uIiwiY2hlY2siLCJ0ZXN0IiwiYnVnZ3kiLCJfX3Byb3RvX18iLCJ0YWciLCJzdGF0Iiwic2hhcmVkIiwidWlkIiwiU0hBUkVEIiwic3RvcmUiLCJtb2RlIiwiY29weXJpZ2h0IiwiRCIsInRvSW50ZWdlciIsInBvcyIsInMiLCJsIiwiY2hhckNvZGVBdCIsImNoYXJBdCIsImludm9rZSIsImh0bWwiLCJjZWwiLCJzZXRUYXNrIiwic2V0SW1tZWRpYXRlIiwiY2xlYXJUYXNrIiwiY2xlYXJJbW1lZGlhdGUiLCJNZXNzYWdlQ2hhbm5lbCIsIkRpc3BhdGNoIiwiY291bnRlciIsInF1ZXVlIiwiT05SRUFEWVNUQVRFQ0hBTkdFIiwiZGVmZXIiLCJjaGFubmVsIiwicG9ydCIsInJ1biIsImxpc3RlbmVyIiwiZXZlbnQiLCJub3ciLCJwb3J0MiIsInBvcnQxIiwib25tZXNzYWdlIiwicG9zdE1lc3NhZ2UiLCJhZGRFdmVudExpc3RlbmVyIiwiaW1wb3J0U2NyaXB0cyIsInJlbW92ZUNoaWxkIiwic2V0VGltZW91dCIsIm1heCIsIm1pbiIsImNlaWwiLCJmbG9vciIsImlzTmFOIiwidmFsdWVPZiIsInB4IiwicmFuZG9tIiwidXNlckFnZW50Iiwid2tzRXh0IiwiJFN5bWJvbCIsIlVTRV9TWU1CT0wiLCIkZXhwb3J0cyIsImNsYXNzb2YiLCJnZXRJdGVyYXRvck1ldGhvZCIsIiRmaW5kIiwiZm9yY2VkIiwiZmluZCIsImNyZWF0ZVByb3BlcnR5IiwiYXJyYXlMaWtlIiwibWFwZm4iLCJtYXBwaW5nIiwiYWRkVG9VbnNjb3BhYmxlcyIsIkFyZ3VtZW50cyIsIkZQcm90byIsIm5hbWVSRSIsIm1hdGNoIiwic3Ryb25nIiwiTUFQIiwiTWFwIiwibWljcm90YXNrIiwibmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUiLCJwZXJmb3JtIiwicHJvbWlzZVJlc29sdmUiLCJQUk9NSVNFIiwidmVyc2lvbnMiLCJ2OCIsIiRQcm9taXNlIiwiZW1wdHkiLCJJbnRlcm5hbCIsIm5ld0dlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSIsIk93blByb21pc2VDYXBhYmlsaXR5IiwiV3JhcHBlciIsIlVTRV9OQVRJVkUiLCJGYWtlUHJvbWlzZSIsIlByb21pc2VSZWplY3Rpb25FdmVudCIsImluZGV4T2YiLCJpc1RoZW5hYmxlIiwiaXNSZWplY3QiLCJfbiIsImNoYWluIiwiX2MiLCJfdiIsIm9rIiwiX3MiLCJyZWFjdGlvbiIsImhhbmRsZXIiLCJmYWlsIiwiZXhpdGVkIiwiX2giLCJvbkhhbmRsZVVuaGFuZGxlZCIsIm9uVW5oYW5kbGVkIiwidW5oYW5kbGVkIiwiaXNVbmhhbmRsZWQiLCJjb25zb2xlIiwiZW1pdCIsIm9udW5oYW5kbGVkcmVqZWN0aW9uIiwicmVhc29uIiwiZXJyb3IiLCJfYSIsIm9ucmVqZWN0aW9uaGFuZGxlZCIsIiRyZWplY3QiLCJfZCIsIl93IiwiJHJlc29sdmUiLCJleGVjdXRvciIsImVyciIsIm9uRnVsZmlsbGVkIiwib25SZWplY3RlZCIsImNhcGFiaWxpdHkiLCJhbGwiLCJyZW1haW5pbmciLCIkaW5kZXgiLCJhbHJlYWR5Q2FsbGVkIiwicmFjZSIsImZsYWdzIiwiU1BMSVQiLCIkc3BsaXQiLCJfc3BsaXQiLCIkcHVzaCIsIiRTUExJVCIsIkxFTkdUSCIsIkxBU1RfSU5ERVgiLCJOUENHIiwic2VwYXJhdG9yIiwibGltaXQiLCJvdXRwdXQiLCJsYXN0TGFzdEluZGV4Iiwic3BsaXRMaW1pdCIsInNlcGFyYXRvckNvcHkiLCJzZXBhcmF0b3IyIiwibGFzdEluZGV4IiwibGFzdExlbmd0aCIsInJlcGxhY2UiLCIkZmxhZ3MiLCJkZWZpbmUiLCIkYXQiLCJwb2ludCIsIiRmYWlscyIsIndrc0RlZmluZSIsImVudW1LZXlzIiwiX2NyZWF0ZSIsImdPUE5FeHQiLCIkR09QRCIsIiREUCIsIiRKU09OIiwiSlNPTiIsIl9zdHJpbmdpZnkiLCJzdHJpbmdpZnkiLCJISURERU4iLCJUT19QUklNSVRJVkUiLCJTeW1ib2xSZWdpc3RyeSIsIkFsbFN5bWJvbHMiLCJPUFN5bWJvbHMiLCJRT2JqZWN0Iiwic2V0dGVyIiwiZmluZENoaWxkIiwic2V0U3ltYm9sRGVzYyIsInByb3RvRGVzYyIsIndyYXAiLCJzeW0iLCJpc1N5bWJvbCIsIiRkZWZpbmVQcm9wZXJ0aWVzIiwiJHByb3BlcnR5SXNFbnVtZXJhYmxlIiwiRSIsIiRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCIkZ2V0T3duUHJvcGVydHlOYW1lcyIsIiRnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJJU19PUCIsIiRzZXQiLCJlczZTeW1ib2xzIiwid2VsbEtub3duU3ltYm9scyIsImtleUZvciIsInVzZVNldHRlciIsInVzZVNpbXBsZSIsInJlcGxhY2VyIiwiJHJlcGxhY2VyIiwiJGluY2x1ZGVzIiwiaW5jbHVkZXMiLCIkdmFsdWVzIiwiJGl0ZXJhdG9ycyIsIlRPX1NUUklOR19UQUciLCJBcnJheVZhbHVlcyIsIkRPTUl0ZXJhYmxlcyIsIkNTU1J1bGVMaXN0IiwiQ1NTU3R5bGVEZWNsYXJhdGlvbiIsIkNTU1ZhbHVlTGlzdCIsIkNsaWVudFJlY3RMaXN0IiwiRE9NUmVjdExpc3QiLCJET01TdHJpbmdMaXN0IiwiRE9NVG9rZW5MaXN0IiwiRGF0YVRyYW5zZmVySXRlbUxpc3QiLCJGaWxlTGlzdCIsIkhUTUxBbGxDb2xsZWN0aW9uIiwiSFRNTENvbGxlY3Rpb24iLCJIVE1MRm9ybUVsZW1lbnQiLCJIVE1MU2VsZWN0RWxlbWVudCIsIk1lZGlhTGlzdCIsIk1pbWVUeXBlQXJyYXkiLCJOYW1lZE5vZGVNYXAiLCJOb2RlTGlzdCIsIlBhaW50UmVxdWVzdExpc3QiLCJQbHVnaW4iLCJQbHVnaW5BcnJheSIsIlNWR0xlbmd0aExpc3QiLCJTVkdOdW1iZXJMaXN0IiwiU1ZHUGF0aFNlZ0xpc3QiLCJTVkdQb2ludExpc3QiLCJTVkdTdHJpbmdMaXN0IiwiU1ZHVHJhbnNmb3JtTGlzdCIsIlNvdXJjZUJ1ZmZlckxpc3QiLCJTdHlsZVNoZWV0TGlzdCIsIlRleHRUcmFja0N1ZUxpc3QiLCJUZXh0VHJhY2tMaXN0IiwiVG91Y2hMaXN0IiwiY29sbGVjdGlvbnMiLCJleHBsaWNpdCIsIkNvbGxlY3Rpb24iLCJTaWViZWxBcHBGYWNhZGUiLCJOMTlIZWxwZXIiLCJzZXR0aW5ncyIsImFwcGxldE5hbWUiLCJhcHBsZXQiLCJTaWViZWxBcHAiLCJTX0FwcCIsIkdldEFjdGl2ZVZpZXciLCJHZXRBcHBsZXQiLCJFcnJvciIsInBtIiwiR2V0UE1vZGVsIiwibG9nIiwibjE5cG9wdXBDb250cm9sbGVyIiwiTjE5cG9wdXBDb250cm9sbGVyIiwiY2xvc2VQb3B1cEFwcGxldCIsImNiIiwiY2FuT3BlblBvcHVwIiwidmlldyIsIlNldEFjdGl2ZUFwcGxldEludGVybmFsIiwiX3NldEFjdGl2ZUNvbnRyb2wiLCJzaG93UG9wdXBBcHBsZXQiLCJfc2hvd1BvcHVwQXBwbGV0IiwiX29wZW5Bc3NvY0FwcGxldCIsIm5ld1JlY29yZCIsImJpbmQiLCJjb250cm9sTmFtZSIsImlzTGlzdEFwcGxldCIsImdldFNlbGVjdGlvbiIsIkV4ZWN1dGVNZXRob2QiLCJ0YXJnZXRWaWV3TmFtZSIsInRhcmdldEFwcGxldE5hbWUiLCJyb3dJZCIsImdldEN1cnJlbnRSZWNvcmQiLCJJZCIsIlNXRUNtZCIsImVuY29kZVVSSSIsIkdvdG9WaWV3IiwiaXNQb3B1cEhpZGRlbiIsInBvcHVwUE0iLCJHZXRQb3B1cFBNIiwiSW5pdCIsIlNldHVwIiwic2hvd1BpY2tBcHBsZXQiLCJvYmoiLCJmb3VuZCIsInBvcHVwQXBwbGV0TjE5IiwicXVlcnlCeUlkU3luYyIsInBpY2tSZWNvcmQiLCJOMTliYXNlQXBwbGV0IiwiY29uc3RzIiwiU2llYmVsSlMiLCJEZXBlbmRlbmN5IiwidXRpbHMiLCJjb252ZXJ0RGF0ZXMiLCJHZXQiLCJyZXF1aXJlZCIsImxvdiIsImJvb2xPYmplY3QiLCJEYXR1bUJvb2xPYmplY3QiLCJsb2FkTG9jYWxlRGF0YSIsImZpZWxkVG9Db250cm9sTWFwIiwiX2dldEZpZWxkVG9Db250cm9sTWFwIiwiYmNJZCIsIkdldEJDSWQiLCJub3RpZmljYXRpb25zIiwiTjE5bm90aWZpY2F0aW9ucyIsImFwcGxldElkIiwiYXBwbGV0SW5wdXRzIiwiZ2V0RWxlbWVudEJ5SWQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYXR0cmlidXRlcyIsIm5vZGVWYWx1ZSIsIkF0dGFjaFBNQmluZGluZyIsImlucHV0TmFtZSIsInZpZXdOYW1lIiwiR2V0TmFtZSIsIndhcm4iLCJzcGxpY2UiLCJmaWx0ZXIiLCJzY29wZSIsImlzVHJlZUFwcGxldCIsIkV4cGxvcmVyUHJlc2VudGF0aW9uTW9kZWwiLCJsb2NhbGVPYmplY3QiLCJMb2NhbGVPYmplY3QiLCJkYXRlVGltZUZvcm1hdCIsIkdldFByb2ZpbGUiLCJsb2NhbGVEYXRhIiwiZmlyc3REYXlPZldlZWsiLCJHZXRXZWVrU3RhcnREYXkiLCJkYXRlRm9ybWF0IiwiaXMyNGhvdXJzRm9ybWF0IiwibG9jYWxDb3VudHJ5UGhvbmVDb2RlIiwibW9udGhzIiwic2hvcnRNb250aHMiLCJHZXREYXRhIiwibV9zcE1vbnRoUFMiLCJHZXRQcm9wZXJ0eSIsIndlZWtEYXlzIiwibV9zcERheU9mV2Vla1BTIiwid2Vla0RheXMzIiwid2Vla0RheXMxIiwiZnVuYyIsInN1YnNjcmliZSIsInRva2VuIiwidW5zdWJzY3JpYmUiLCJfZ2V0Q29udHJvbCIsInVpVHlwZSIsImRpc3BsYXlGb3JtYXQiLCJTZXRWYWx1ZSIsIkdldEFzU3RyaW5nIiwiX2lzRGF0ZVRpbWVDb250cm9sIiwiZGF0ZSIsInRvTG9jYWxlU3RyaW5nIiwiaG91cjEyIiwiR2V0U3RyaW5nRnJvbURhdGVUaW1lIiwibWV0aG9kIiwiY2FuSW52b2tlTWV0aG9kIiwiY29udHJvbHMiLCJhcHBsZXRDb250cm9scyIsIl9yZXR1cm5Db250cm9scyIsImNvbnRyb2xFbnRyeSIsImNvbnRyb2wiLCJHZXRVSVR5cGUiLCJHZXREaXNwbGF5Rm9ybWF0IiwiZ2V0Q29udHJvbERpc3BsYXlGb3JtYXQiLCJfaXNTa2lwQ29udHJvbCIsIkdldElucHV0TmFtZSIsImZpZWxkTmFtZSIsIkdldEZpZWxkTmFtZSIsImxhYmVsIiwiR2V0RGlzcGxheU5hbWUiLCJfaXNSZXF1aXJlZCIsImJvdW5kZWRQaWNrIiwiSXNCb3VuZGVkUGljayIsInN0YXRpY1BpY2siLCJJc1N0YXRpY0JvdW5kZWQiLCJpc1Bvc3RDaGFuZ2VzIiwiSXNQb3N0Q2hhbmdlcyIsIm1heFNpemUiLCJHZXRNYXhTaXplIiwiaXNMaW5rIiwicmVhZG9ubHkiLCJkYXRhVHlwZSIsInN0YXRpY0xPViIsIkdldFN0YXRpY0xPViIsIkdldFJhZGlvR3JvdXBQcm9wU2V0IiwiY2hpbGRBcnJheSIsImxvdnMiLCJyZWR1Y2UiLCJhY2MiLCJsaWMiLCJGaWVsZFZhbHVlIiwiRGlzcGxheU5hbWUiLCJhZGRSZWNvcmRJbmRleCIsIm1hcCIsIl9pbmR4IiwiX25hdmlnYXRlIiwiZ2V0Um93TGlzdFJvd0NvdW50IiwicG9zaXRpb25PblJvdyIsIl9uZXdSZWNvcmQiLCJhc3luYyIsImNiZXJyIiwiX3dyaXRlUmVjb3JkIiwiY2F0Y2giLCJfZ2V0U2llYmVsVmFsdWUiLCJfc2V0Q29udHJvbFZhbHVlSW50ZXJuYWwiLCJPbkNvbnRyb2xFdmVudCIsImlzU3RhdGljIiwiaXNTdGF0aWNQaWNrIiwiX3ZhbGlkYXRlUGlja0NvbnRyb2wiLCJjb250cm9sSW5wdXROYW1lIiwicHMiLCJOZXdQcm9wZXJ0eVNldCIsIlNldFByb3BlcnR5Iiwic29ydCIsIl9nZXRDb250cm9sU3RhdGljTE9WIiwiaXNEeW5hbWljIiwiX2dldENvbnRyb2xEeW5hbWljTE9WIiwiU2V0QXNTdHJpbmciLCJHZXRWYWx1ZSIsIklTTyIsIlRvSVNPRm9ybWF0IiwiR2V0SVNPRGF0ZVRpbWUiLCJEYXRlIiwicmF3IiwiZ2V0UmF3UmVjb3JkU2V0IiwiZ2V0UmVjb3JkU2V0IiwiYmMiLCJJc0luc2VydFBlbmRpbmciLCJJc0NvbW1pdFBlbmRpbmciLCJjb250cm9sTWV0aG9kIiwiR2V0TWV0aG9kTmFtZSIsIl9jb250cm9scyIsIl9tZXRob2RzIiwiZ2V0Q29udHJvbHMiLCJfZ2V0TWV0aG9kcyIsInN0YXRlIiwiY2FsY3VsYXRlQ3VycmVudFJlY29yZFN0YXRlIiwiX2dldEpTVmFsdWUiLCJtZXRob2ROYW1lIiwiY29udHJvbFVpVHlwZSIsImV4cHIiLCJfbmV3UXVlcnkiLCJfZmluZENvbnRyb2xUb0VudGVyU2VhcmNoRXhwciIsInF1ZXJ5QnlTZWFyY2hFeHByU3luYyIsIl9xdWVyeUJ5SWQiLCJhaSIsInNlbGZidXN5IiwicGFyYW1zIiwiX3F1ZXJ5IiwiaWRzIiwiZmllbGRzIiwidXNlQWN0aXZlQk8iLCJfZ2V0TVZGIiwicHNJbnB1dHMiLCJHZXRBY3RpdmVCdXNPYmoiLCJTZXRUeXBlIiwiX2dldEZpZWxkTmFtZUZvckNvbnRyb2wiLCJBZGRDaGlsZCIsIkNsb25lIiwiYnMiLCJHZXRTZXJ2aWNlIiwiZXJyY2IiLCJJbnB1dHMiLCJwc091dHB1dHMiLCJHZXRDaGlsZEJ5VHlwZSIsImNoaWxkIiwiR2V0VHlwZSIsImdyYW5kQ2hpbGQiLCJyZWMiLCJwcmltYXJ5IiwicHJvcEFycmF5IiwiSW52b2tlTWV0aG9kIiwicHNJbnB1dCIsImFtb3VudCIsInNpemUiLCJuZXh0UmVjb3JkU2V0IiwiaGFzTmV4dCIsIlNldENvbnRyb2xWYWx1ZUJ5TmFtZSIsInJhd1JlY29yZFNldCIsImxlbiIsImlzQXNjZW5kaW5nIiwic29ydE9yZGVyIiwiT25DbGlja1NvcnQiLCJzZXJ2aWNlIiwiaW5Qcm9wU2V0IiwicmVjZWl2ZWROb3RpZmljYXRpb25zIiwic3Vic2NyaWJlcnMiLCJBdHRhY2hOb3RpZmljYXRpb25IYW5kbGVyIiwicHJvcFNldCIsInN0YXRlcyIsInN1YlRva2VuIiwiTjE5cG9wdXBBcHBsZXQiLCJHZXRSZW5kZXJlciIsInJlc2l6ZSIsIkdldFNlbGVjdGVkUm93Iiwic2luZ2xldG9uIiwic2luZ2xldG9uRW5mb3JjZXIiLCJlbmZvcmNlciIsInJlc29sdmVQcm9taXNlIiwiYXNzb2NBcHBsZXROMTkiLCJOMTlyZXNpemVBdmFpbGFibGUiLCJNdmdCZWF1dGlmaWVyIiwicmVzaXplQXZhaWxhYmxlIiwibWVzc2FnZSIsIk4xOXByb2Nlc3NOZXdQb3B1cCIsIlByb2Nlc3NOZXdQb3B1cCIsInByb2Nlc3NOZXdQb3B1cCIsIk4xOXZpZXdMb2FkZWQiLCJjb250ZW50VXBkYXRlciIsInZpZXdMb2FkZWQiLCJJc1BvcHVwT3BlbiIsIkdldFBvcHVwQXBwbGV0IiwiYXNzb2NBcHBsZXQiLCJhY3RpdmVWaWV3IiwiYWN0aXZlQXBwbGV0IiwiR2V0QWN0aXZlQXBwbGV0IiwiU2V0QWN0aXZlQXBwbGV0QmVmb3JlUG9wdXAiLCJBZGRQcm9wZXJ0eSIsInVybCIsIkdldFBhZ2VVUkwiLCJpc1BvcHVwQXBwbGV0IiwiR2V0UG9wdXBBcHBsZXROYW1lIiwiaXNQaWNrQXBwbGV0IiwiR2V0UGlja0FwcGxldE5hbWUiLCJjbG9zZUlmT3BlbiIsImlzT3BlbiIsIm5ld1JlY29yZEZ1bmMiLCJjaGVja09wZW5lZFBvcHVwIiwibjE5IiwiY3VyclBvcHVwcyIsIkdldFBvcHVwQ29udHJvbCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7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O0FBQ3hELGNBQUksT0FBT213QixVQUFVLENBQUMsQ0FBRCxDQUFWLENBQWNSLGtCQUFyQixLQUE0QyxVQUFoRCxFQUE0RDtBQUMxRCxtQkFBTztBQUFFSSxvQkFBTSxFQUFFLElBQVY7QUFBZ0I1Uix3QkFBVSxFQUFFZ1MsVUFBVSxDQUFDbndCLENBQUQsQ0FBVixDQUFjNGlCLE9BQWQsRUFBNUI7QUFBcURsRCx5QkFBVyxFQUFFeVEsVUFBVSxDQUFDbndCLENBQUQsQ0FBVixDQUFjb3dCLGVBQWQ7QUFBbEUsYUFBUDtBQUNEO0FBQ0Y7O0FBQ0QsY0FBTSxJQUFJM1IsS0FBSixDQUFVLDRCQUFWLENBQU47QUFDRDs7QUFDRCxZQUFNLElBQUlBLEtBQUosQ0FBVSx1QkFBVixDQUFOO0FBQ0Q7OzttQ0FFcUJOLFUsRUFBWTtBQUNoQyxVQUFNQyxNQUFNLEdBQUdDLFNBQVMsQ0FBQ0MsS0FBVixDQUFnQkMsYUFBaEIsR0FBZ0NDLFNBQWhDLENBQTBDTCxVQUExQyxDQUFmOztBQUNBLFVBQUksQ0FBQ0MsTUFBTCxFQUFhO0FBQ1gsY0FBTSxJQUFJSyxLQUFKLDRCQUE4Qk4sVUFBOUIsMkJBQU47QUFDRDs7QUFDRCxhQUFPQyxNQUFQO0FBQ0QiLCJmaWxlIjoiTjE5SGVscGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwiLy8gMjIuMS4zLjMxIEFycmF5LnByb3RvdHlwZVtAQHVuc2NvcGFibGVzXVxudmFyIFVOU0NPUEFCTEVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3Vuc2NvcGFibGVzJyk7XG52YXIgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcbmlmIChBcnJheVByb3RvW1VOU0NPUEFCTEVTXSA9PSB1bmRlZmluZWQpIHJlcXVpcmUoJy4vX2hpZGUnKShBcnJheVByb3RvLCBVTlNDT1BBQkxFUywge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIEFycmF5UHJvdG9bVU5TQ09QQUJMRVNdW2tleV0gPSB0cnVlO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBDb25zdHJ1Y3RvciwgbmFtZSwgZm9yYmlkZGVuRmllbGQpIHtcbiAgaWYgKCEoaXQgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikgfHwgKGZvcmJpZGRlbkZpZWxkICE9PSB1bmRlZmluZWQgJiYgZm9yYmlkZGVuRmllbGQgaW4gaXQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKG5hbWUgKyAnOiBpbmNvcnJlY3QgaW52b2NhdGlvbiEnKTtcbiAgfSByZXR1cm4gaXQ7XG59O1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwiLy8gZmFsc2UgLT4gQXJyYXkjaW5kZXhPZlxuLy8gdHJ1ZSAgLT4gQXJyYXkjaW5jbHVkZXNcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciB0b0Fic29sdXRlSW5kZXggPSByZXF1aXJlKCcuL190by1hYnNvbHV0ZS1pbmRleCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoSVNfSU5DTFVERVMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgZWwsIGZyb21JbmRleCkge1xuICAgIHZhciBPID0gdG9JT2JqZWN0KCR0aGlzKTtcbiAgICB2YXIgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgIHZhciBpbmRleCA9IHRvQWJzb2x1dGVJbmRleChmcm9tSW5kZXgsIGxlbmd0aCk7XG4gICAgdmFyIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgaWYgKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKSB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIHtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICAgIGlmICh2YWx1ZSAhPSB2YWx1ZSkgcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjaW5kZXhPZiBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykgaWYgKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pIHtcbiAgICAgIGlmIChPW2luZGV4XSA9PT0gZWwpIHJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07XG4iLCIvLyAwIC0+IEFycmF5I2ZvckVhY2hcbi8vIDEgLT4gQXJyYXkjbWFwXG4vLyAyIC0+IEFycmF5I2ZpbHRlclxuLy8gMyAtPiBBcnJheSNzb21lXG4vLyA0IC0+IEFycmF5I2V2ZXJ5XG4vLyA1IC0+IEFycmF5I2ZpbmRcbi8vIDYgLT4gQXJyYXkjZmluZEluZGV4XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgYXNjID0gcmVxdWlyZSgnLi9fYXJyYXktc3BlY2llcy1jcmVhdGUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFRZUEUsICRjcmVhdGUpIHtcbiAgdmFyIElTX01BUCA9IFRZUEUgPT0gMTtcbiAgdmFyIElTX0ZJTFRFUiA9IFRZUEUgPT0gMjtcbiAgdmFyIElTX1NPTUUgPSBUWVBFID09IDM7XG4gIHZhciBJU19FVkVSWSA9IFRZUEUgPT0gNDtcbiAgdmFyIElTX0ZJTkRfSU5ERVggPSBUWVBFID09IDY7XG4gIHZhciBOT19IT0xFUyA9IFRZUEUgPT0gNSB8fCBJU19GSU5EX0lOREVYO1xuICB2YXIgY3JlYXRlID0gJGNyZWF0ZSB8fCBhc2M7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIGNhbGxiYWNrZm4sIHRoYXQpIHtcbiAgICB2YXIgTyA9IHRvT2JqZWN0KCR0aGlzKTtcbiAgICB2YXIgc2VsZiA9IElPYmplY3QoTyk7XG4gICAgdmFyIGYgPSBjdHgoY2FsbGJhY2tmbiwgdGhhdCwgMyk7XG4gICAgdmFyIGxlbmd0aCA9IHRvTGVuZ3RoKHNlbGYubGVuZ3RoKTtcbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIHZhciByZXN1bHQgPSBJU19NQVAgPyBjcmVhdGUoJHRoaXMsIGxlbmd0aCkgOiBJU19GSUxURVIgPyBjcmVhdGUoJHRoaXMsIDApIDogdW5kZWZpbmVkO1xuICAgIHZhciB2YWwsIHJlcztcbiAgICBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykgaWYgKE5PX0hPTEVTIHx8IGluZGV4IGluIHNlbGYpIHtcbiAgICAgIHZhbCA9IHNlbGZbaW5kZXhdO1xuICAgICAgcmVzID0gZih2YWwsIGluZGV4LCBPKTtcbiAgICAgIGlmIChUWVBFKSB7XG4gICAgICAgIGlmIChJU19NQVApIHJlc3VsdFtpbmRleF0gPSByZXM7ICAgLy8gbWFwXG4gICAgICAgIGVsc2UgaWYgKHJlcykgc3dpdGNoIChUWVBFKSB7XG4gICAgICAgICAgY2FzZSAzOiByZXR1cm4gdHJ1ZTsgICAgICAgICAgICAgLy8gc29tZVxuICAgICAgICAgIGNhc2UgNTogcmV0dXJuIHZhbDsgICAgICAgICAgICAgIC8vIGZpbmRcbiAgICAgICAgICBjYXNlIDY6IHJldHVybiBpbmRleDsgICAgICAgICAgICAvLyBmaW5kSW5kZXhcbiAgICAgICAgICBjYXNlIDI6IHJlc3VsdC5wdXNoKHZhbCk7ICAgICAgICAvLyBmaWx0ZXJcbiAgICAgICAgfSBlbHNlIGlmIChJU19FVkVSWSkgcmV0dXJuIGZhbHNlOyAvLyBldmVyeVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gSVNfRklORF9JTkRFWCA/IC0xIDogSVNfU09NRSB8fCBJU19FVkVSWSA/IElTX0VWRVJZIDogcmVzdWx0O1xuICB9O1xufTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuL19pcy1hcnJheScpO1xudmFyIFNQRUNJRVMgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvcmlnaW5hbCkge1xuICB2YXIgQztcbiAgaWYgKGlzQXJyYXkob3JpZ2luYWwpKSB7XG4gICAgQyA9IG9yaWdpbmFsLmNvbnN0cnVjdG9yO1xuICAgIC8vIGNyb3NzLXJlYWxtIGZhbGxiYWNrXG4gICAgaWYgKHR5cGVvZiBDID09ICdmdW5jdGlvbicgJiYgKEMgPT09IEFycmF5IHx8IGlzQXJyYXkoQy5wcm90b3R5cGUpKSkgQyA9IHVuZGVmaW5lZDtcbiAgICBpZiAoaXNPYmplY3QoQykpIHtcbiAgICAgIEMgPSBDW1NQRUNJRVNdO1xuICAgICAgaWYgKEMgPT09IG51bGwpIEMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9IHJldHVybiBDID09PSB1bmRlZmluZWQgPyBBcnJheSA6IEM7XG59O1xuIiwiLy8gOS40LjIuMyBBcnJheVNwZWNpZXNDcmVhdGUob3JpZ2luYWxBcnJheSwgbGVuZ3RoKVxudmFyIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4vX2FycmF5LXNwZWNpZXMtY29uc3RydWN0b3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3JpZ2luYWwsIGxlbmd0aCkge1xuICByZXR1cm4gbmV3IChzcGVjaWVzQ29uc3RydWN0b3Iob3JpZ2luYWwpKShsZW5ndGgpO1xufTtcbiIsIi8vIGdldHRpbmcgdGFnIGZyb20gMTkuMS4zLjYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZygpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG52YXIgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG4vLyBFUzMgd3JvbmcgaGVyZVxudmFyIEFSRyA9IGNvZihmdW5jdGlvbiAoKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ0FyZ3VtZW50cyc7XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIFNjcmlwdCBBY2Nlc3MgRGVuaWVkIGVycm9yXG52YXIgdHJ5R2V0ID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gaXRba2V5XTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgTywgVCwgQjtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgOiB0eXBlb2YgKFQgPSB0cnlHZXQoTyA9IE9iamVjdChpdCksIFRBRykpID09ICdzdHJpbmcnID8gVFxuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQVJHID8gY29mKE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKEIgPSBjb2YoTykpID09ICdPYmplY3QnICYmIHR5cGVvZiBPLmNhbGxlZSA9PSAnZnVuY3Rpb24nID8gJ0FyZ3VtZW50cycgOiBCO1xufTtcbiIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpO1xudmFyIHJlZGVmaW5lQWxsID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUtYWxsJyk7XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgYW5JbnN0YW5jZSA9IHJlcXVpcmUoJy4vX2FuLWluc3RhbmNlJyk7XG52YXIgZm9yT2YgPSByZXF1aXJlKCcuL19mb3Itb2YnKTtcbnZhciAkaXRlckRlZmluZSA9IHJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJyk7XG52YXIgc3RlcCA9IHJlcXVpcmUoJy4vX2l0ZXItc3RlcCcpO1xudmFyIHNldFNwZWNpZXMgPSByZXF1aXJlKCcuL19zZXQtc3BlY2llcycpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcbnZhciBmYXN0S2V5ID0gcmVxdWlyZSgnLi9fbWV0YScpLmZhc3RLZXk7XG52YXIgdmFsaWRhdGUgPSByZXF1aXJlKCcuL192YWxpZGF0ZS1jb2xsZWN0aW9uJyk7XG52YXIgU0laRSA9IERFU0NSSVBUT1JTID8gJ19zJyA6ICdzaXplJztcblxudmFyIGdldEVudHJ5ID0gZnVuY3Rpb24gKHRoYXQsIGtleSkge1xuICAvLyBmYXN0IGNhc2VcbiAgdmFyIGluZGV4ID0gZmFzdEtleShrZXkpO1xuICB2YXIgZW50cnk7XG4gIGlmIChpbmRleCAhPT0gJ0YnKSByZXR1cm4gdGhhdC5faVtpbmRleF07XG4gIC8vIGZyb3plbiBvYmplY3QgY2FzZVxuICBmb3IgKGVudHJ5ID0gdGhhdC5fZjsgZW50cnk7IGVudHJ5ID0gZW50cnkubikge1xuICAgIGlmIChlbnRyeS5rID09IGtleSkgcmV0dXJuIGVudHJ5O1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZ2V0Q29uc3RydWN0b3I6IGZ1bmN0aW9uICh3cmFwcGVyLCBOQU1FLCBJU19NQVAsIEFEREVSKSB7XG4gICAgdmFyIEMgPSB3cmFwcGVyKGZ1bmN0aW9uICh0aGF0LCBpdGVyYWJsZSkge1xuICAgICAgYW5JbnN0YW5jZSh0aGF0LCBDLCBOQU1FLCAnX2knKTtcbiAgICAgIHRoYXQuX3QgPSBOQU1FOyAgICAgICAgIC8vIGNvbGxlY3Rpb24gdHlwZVxuICAgICAgdGhhdC5faSA9IGNyZWF0ZShudWxsKTsgLy8gaW5kZXhcbiAgICAgIHRoYXQuX2YgPSB1bmRlZmluZWQ7ICAgIC8vIGZpcnN0IGVudHJ5XG4gICAgICB0aGF0Ll9sID0gdW5kZWZpbmVkOyAgICAvLyBsYXN0IGVudHJ5XG4gICAgICB0aGF0W1NJWkVdID0gMDsgICAgICAgICAvLyBzaXplXG4gICAgICBpZiAoaXRlcmFibGUgIT0gdW5kZWZpbmVkKSBmb3JPZihpdGVyYWJsZSwgSVNfTUFQLCB0aGF0W0FEREVSXSwgdGhhdCk7XG4gICAgfSk7XG4gICAgcmVkZWZpbmVBbGwoQy5wcm90b3R5cGUsIHtcbiAgICAgIC8vIDIzLjEuMy4xIE1hcC5wcm90b3R5cGUuY2xlYXIoKVxuICAgICAgLy8gMjMuMi4zLjIgU2V0LnByb3RvdHlwZS5jbGVhcigpXG4gICAgICBjbGVhcjogZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgICAgIGZvciAodmFyIHRoYXQgPSB2YWxpZGF0ZSh0aGlzLCBOQU1FKSwgZGF0YSA9IHRoYXQuX2ksIGVudHJ5ID0gdGhhdC5fZjsgZW50cnk7IGVudHJ5ID0gZW50cnkubikge1xuICAgICAgICAgIGVudHJ5LnIgPSB0cnVlO1xuICAgICAgICAgIGlmIChlbnRyeS5wKSBlbnRyeS5wID0gZW50cnkucC5uID0gdW5kZWZpbmVkO1xuICAgICAgICAgIGRlbGV0ZSBkYXRhW2VudHJ5LmldO1xuICAgICAgICB9XG4gICAgICAgIHRoYXQuX2YgPSB0aGF0Ll9sID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGF0W1NJWkVdID0gMDtcbiAgICAgIH0sXG4gICAgICAvLyAyMy4xLjMuMyBNYXAucHJvdG90eXBlLmRlbGV0ZShrZXkpXG4gICAgICAvLyAyMy4yLjMuNCBTZXQucHJvdG90eXBlLmRlbGV0ZSh2YWx1ZSlcbiAgICAgICdkZWxldGUnOiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciB0aGF0ID0gdmFsaWRhdGUodGhpcywgTkFNRSk7XG4gICAgICAgIHZhciBlbnRyeSA9IGdldEVudHJ5KHRoYXQsIGtleSk7XG4gICAgICAgIGlmIChlbnRyeSkge1xuICAgICAgICAgIHZhciBuZXh0ID0gZW50cnkubjtcbiAgICAgICAgICB2YXIgcHJldiA9IGVudHJ5LnA7XG4gICAgICAgICAgZGVsZXRlIHRoYXQuX2lbZW50cnkuaV07XG4gICAgICAgICAgZW50cnkuciA9IHRydWU7XG4gICAgICAgICAgaWYgKHByZXYpIHByZXYubiA9IG5leHQ7XG4gICAgICAgICAgaWYgKG5leHQpIG5leHQucCA9IHByZXY7XG4gICAgICAgICAgaWYgKHRoYXQuX2YgPT0gZW50cnkpIHRoYXQuX2YgPSBuZXh0O1xuICAgICAgICAgIGlmICh0aGF0Ll9sID09IGVudHJ5KSB0aGF0Ll9sID0gcHJldjtcbiAgICAgICAgICB0aGF0W1NJWkVdLS07XG4gICAgICAgIH0gcmV0dXJuICEhZW50cnk7XG4gICAgICB9LFxuICAgICAgLy8gMjMuMi4zLjYgU2V0LnByb3RvdHlwZS5mb3JFYWNoKGNhbGxiYWNrZm4sIHRoaXNBcmcgPSB1bmRlZmluZWQpXG4gICAgICAvLyAyMy4xLjMuNSBNYXAucHJvdG90eXBlLmZvckVhY2goY2FsbGJhY2tmbiwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbiAgICAgIGZvckVhY2g6IGZ1bmN0aW9uIGZvckVhY2goY2FsbGJhY2tmbiAvKiAsIHRoYXQgPSB1bmRlZmluZWQgKi8pIHtcbiAgICAgICAgdmFsaWRhdGUodGhpcywgTkFNRSk7XG4gICAgICAgIHZhciBmID0gY3R4KGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkLCAzKTtcbiAgICAgICAgdmFyIGVudHJ5O1xuICAgICAgICB3aGlsZSAoZW50cnkgPSBlbnRyeSA/IGVudHJ5Lm4gOiB0aGlzLl9mKSB7XG4gICAgICAgICAgZihlbnRyeS52LCBlbnRyeS5rLCB0aGlzKTtcbiAgICAgICAgICAvLyByZXZlcnQgdG8gdGhlIGxhc3QgZXhpc3RpbmcgZW50cnlcbiAgICAgICAgICB3aGlsZSAoZW50cnkgJiYgZW50cnkucikgZW50cnkgPSBlbnRyeS5wO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8gMjMuMS4zLjcgTWFwLnByb3RvdHlwZS5oYXMoa2V5KVxuICAgICAgLy8gMjMuMi4zLjcgU2V0LnByb3RvdHlwZS5oYXModmFsdWUpXG4gICAgICBoYXM6IGZ1bmN0aW9uIGhhcyhrZXkpIHtcbiAgICAgICAgcmV0dXJuICEhZ2V0RW50cnkodmFsaWRhdGUodGhpcywgTkFNRSksIGtleSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKERFU0NSSVBUT1JTKSBkUChDLnByb3RvdHlwZSwgJ3NpemUnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRlKHRoaXMsIE5BTUUpW1NJWkVdO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBDO1xuICB9LFxuICBkZWY6IGZ1bmN0aW9uICh0aGF0LCBrZXksIHZhbHVlKSB7XG4gICAgdmFyIGVudHJ5ID0gZ2V0RW50cnkodGhhdCwga2V5KTtcbiAgICB2YXIgcHJldiwgaW5kZXg7XG4gICAgLy8gY2hhbmdlIGV4aXN0aW5nIGVudHJ5XG4gICAgaWYgKGVudHJ5KSB7XG4gICAgICBlbnRyeS52ID0gdmFsdWU7XG4gICAgLy8gY3JlYXRlIG5ldyBlbnRyeVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGF0Ll9sID0gZW50cnkgPSB7XG4gICAgICAgIGk6IGluZGV4ID0gZmFzdEtleShrZXksIHRydWUpLCAvLyA8LSBpbmRleFxuICAgICAgICBrOiBrZXksICAgICAgICAgICAgICAgICAgICAgICAgLy8gPC0ga2V5XG4gICAgICAgIHY6IHZhbHVlLCAgICAgICAgICAgICAgICAgICAgICAvLyA8LSB2YWx1ZVxuICAgICAgICBwOiBwcmV2ID0gdGhhdC5fbCwgICAgICAgICAgICAgLy8gPC0gcHJldmlvdXMgZW50cnlcbiAgICAgICAgbjogdW5kZWZpbmVkLCAgICAgICAgICAgICAgICAgIC8vIDwtIG5leHQgZW50cnlcbiAgICAgICAgcjogZmFsc2UgICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIHJlbW92ZWRcbiAgICAgIH07XG4gICAgICBpZiAoIXRoYXQuX2YpIHRoYXQuX2YgPSBlbnRyeTtcbiAgICAgIGlmIChwcmV2KSBwcmV2Lm4gPSBlbnRyeTtcbiAgICAgIHRoYXRbU0laRV0rKztcbiAgICAgIC8vIGFkZCB0byBpbmRleFxuICAgICAgaWYgKGluZGV4ICE9PSAnRicpIHRoYXQuX2lbaW5kZXhdID0gZW50cnk7XG4gICAgfSByZXR1cm4gdGhhdDtcbiAgfSxcbiAgZ2V0RW50cnk6IGdldEVudHJ5LFxuICBzZXRTdHJvbmc6IGZ1bmN0aW9uIChDLCBOQU1FLCBJU19NQVApIHtcbiAgICAvLyBhZGQgLmtleXMsIC52YWx1ZXMsIC5lbnRyaWVzLCBbQEBpdGVyYXRvcl1cbiAgICAvLyAyMy4xLjMuNCwgMjMuMS4zLjgsIDIzLjEuMy4xMSwgMjMuMS4zLjEyLCAyMy4yLjMuNSwgMjMuMi4zLjgsIDIzLjIuMy4xMCwgMjMuMi4zLjExXG4gICAgJGl0ZXJEZWZpbmUoQywgTkFNRSwgZnVuY3Rpb24gKGl0ZXJhdGVkLCBraW5kKSB7XG4gICAgICB0aGlzLl90ID0gdmFsaWRhdGUoaXRlcmF0ZWQsIE5BTUUpOyAvLyB0YXJnZXRcbiAgICAgIHRoaXMuX2sgPSBraW5kOyAgICAgICAgICAgICAgICAgICAgIC8vIGtpbmRcbiAgICAgIHRoaXMuX2wgPSB1bmRlZmluZWQ7ICAgICAgICAgICAgICAgIC8vIHByZXZpb3VzXG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICAgdmFyIGtpbmQgPSB0aGF0Ll9rO1xuICAgICAgdmFyIGVudHJ5ID0gdGhhdC5fbDtcbiAgICAgIC8vIHJldmVydCB0byB0aGUgbGFzdCBleGlzdGluZyBlbnRyeVxuICAgICAgd2hpbGUgKGVudHJ5ICYmIGVudHJ5LnIpIGVudHJ5ID0gZW50cnkucDtcbiAgICAgIC8vIGdldCBuZXh0IGVudHJ5XG4gICAgICBpZiAoIXRoYXQuX3QgfHwgISh0aGF0Ll9sID0gZW50cnkgPSBlbnRyeSA/IGVudHJ5Lm4gOiB0aGF0Ll90Ll9mKSkge1xuICAgICAgICAvLyBvciBmaW5pc2ggdGhlIGl0ZXJhdGlvblxuICAgICAgICB0aGF0Ll90ID0gdW5kZWZpbmVkO1xuICAgICAgICByZXR1cm4gc3RlcCgxKTtcbiAgICAgIH1cbiAgICAgIC8vIHJldHVybiBzdGVwIGJ5IGtpbmRcbiAgICAgIGlmIChraW5kID09ICdrZXlzJykgcmV0dXJuIHN0ZXAoMCwgZW50cnkuayk7XG4gICAgICBpZiAoa2luZCA9PSAndmFsdWVzJykgcmV0dXJuIHN0ZXAoMCwgZW50cnkudik7XG4gICAgICByZXR1cm4gc3RlcCgwLCBbZW50cnkuaywgZW50cnkudl0pO1xuICAgIH0sIElTX01BUCA/ICdlbnRyaWVzJyA6ICd2YWx1ZXMnLCAhSVNfTUFQLCB0cnVlKTtcblxuICAgIC8vIGFkZCBbQEBzcGVjaWVzXSwgMjMuMS4yLjIsIDIzLjIuMi4yXG4gICAgc2V0U3BlY2llcyhOQU1FKTtcbiAgfVxufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIHJlZGVmaW5lQWxsID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUtYWxsJyk7XG52YXIgbWV0YSA9IHJlcXVpcmUoJy4vX21ldGEnKTtcbnZhciBmb3JPZiA9IHJlcXVpcmUoJy4vX2Zvci1vZicpO1xudmFyIGFuSW5zdGFuY2UgPSByZXF1aXJlKCcuL19hbi1pbnN0YW5jZScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xudmFyICRpdGVyRGV0ZWN0ID0gcmVxdWlyZSgnLi9faXRlci1kZXRlY3QnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgaW5oZXJpdElmUmVxdWlyZWQgPSByZXF1aXJlKCcuL19pbmhlcml0LWlmLXJlcXVpcmVkJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE5BTUUsIHdyYXBwZXIsIG1ldGhvZHMsIGNvbW1vbiwgSVNfTUFQLCBJU19XRUFLKSB7XG4gIHZhciBCYXNlID0gZ2xvYmFsW05BTUVdO1xuICB2YXIgQyA9IEJhc2U7XG4gIHZhciBBRERFUiA9IElTX01BUCA/ICdzZXQnIDogJ2FkZCc7XG4gIHZhciBwcm90byA9IEMgJiYgQy5wcm90b3R5cGU7XG4gIHZhciBPID0ge307XG4gIHZhciBmaXhNZXRob2QgPSBmdW5jdGlvbiAoS0VZKSB7XG4gICAgdmFyIGZuID0gcHJvdG9bS0VZXTtcbiAgICByZWRlZmluZShwcm90bywgS0VZLFxuICAgICAgS0VZID09ICdkZWxldGUnID8gZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgcmV0dXJuIElTX1dFQUsgJiYgIWlzT2JqZWN0KGEpID8gZmFsc2UgOiBmbi5jYWxsKHRoaXMsIGEgPT09IDAgPyAwIDogYSk7XG4gICAgICB9IDogS0VZID09ICdoYXMnID8gZnVuY3Rpb24gaGFzKGEpIHtcbiAgICAgICAgcmV0dXJuIElTX1dFQUsgJiYgIWlzT2JqZWN0KGEpID8gZmFsc2UgOiBmbi5jYWxsKHRoaXMsIGEgPT09IDAgPyAwIDogYSk7XG4gICAgICB9IDogS0VZID09ICdnZXQnID8gZnVuY3Rpb24gZ2V0KGEpIHtcbiAgICAgICAgcmV0dXJuIElTX1dFQUsgJiYgIWlzT2JqZWN0KGEpID8gdW5kZWZpbmVkIDogZm4uY2FsbCh0aGlzLCBhID09PSAwID8gMCA6IGEpO1xuICAgICAgfSA6IEtFWSA9PSAnYWRkJyA/IGZ1bmN0aW9uIGFkZChhKSB7IGZuLmNhbGwodGhpcywgYSA9PT0gMCA/IDAgOiBhKTsgcmV0dXJuIHRoaXM7IH1cbiAgICAgICAgOiBmdW5jdGlvbiBzZXQoYSwgYikgeyBmbi5jYWxsKHRoaXMsIGEgPT09IDAgPyAwIDogYSwgYik7IHJldHVybiB0aGlzOyB9XG4gICAgKTtcbiAgfTtcbiAgaWYgKHR5cGVvZiBDICE9ICdmdW5jdGlvbicgfHwgIShJU19XRUFLIHx8IHByb3RvLmZvckVhY2ggJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICBuZXcgQygpLmVudHJpZXMoKS5uZXh0KCk7XG4gIH0pKSkge1xuICAgIC8vIGNyZWF0ZSBjb2xsZWN0aW9uIGNvbnN0cnVjdG9yXG4gICAgQyA9IGNvbW1vbi5nZXRDb25zdHJ1Y3Rvcih3cmFwcGVyLCBOQU1FLCBJU19NQVAsIEFEREVSKTtcbiAgICByZWRlZmluZUFsbChDLnByb3RvdHlwZSwgbWV0aG9kcyk7XG4gICAgbWV0YS5ORUVEID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgaW5zdGFuY2UgPSBuZXcgQygpO1xuICAgIC8vIGVhcmx5IGltcGxlbWVudGF0aW9ucyBub3Qgc3VwcG9ydHMgY2hhaW5pbmdcbiAgICB2YXIgSEFTTlRfQ0hBSU5JTkcgPSBpbnN0YW5jZVtBRERFUl0oSVNfV0VBSyA/IHt9IDogLTAsIDEpICE9IGluc3RhbmNlO1xuICAgIC8vIFY4IH4gIENocm9taXVtIDQwLSB3ZWFrLWNvbGxlY3Rpb25zIHRocm93cyBvbiBwcmltaXRpdmVzLCBidXQgc2hvdWxkIHJldHVybiBmYWxzZVxuICAgIHZhciBUSFJPV1NfT05fUFJJTUlUSVZFUyA9IGZhaWxzKGZ1bmN0aW9uICgpIHsgaW5zdGFuY2UuaGFzKDEpOyB9KTtcbiAgICAvLyBtb3N0IGVhcmx5IGltcGxlbWVudGF0aW9ucyBkb2Vzbid0IHN1cHBvcnRzIGl0ZXJhYmxlcywgbW9zdCBtb2Rlcm4gLSBub3QgY2xvc2UgaXQgY29ycmVjdGx5XG4gICAgdmFyIEFDQ0VQVF9JVEVSQUJMRVMgPSAkaXRlckRldGVjdChmdW5jdGlvbiAoaXRlcikgeyBuZXcgQyhpdGVyKTsgfSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XG4gICAgLy8gZm9yIGVhcmx5IGltcGxlbWVudGF0aW9ucyAtMCBhbmQgKzAgbm90IHRoZSBzYW1lXG4gICAgdmFyIEJVR0dZX1pFUk8gPSAhSVNfV0VBSyAmJiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBWOCB+IENocm9taXVtIDQyLSBmYWlscyBvbmx5IHdpdGggNSsgZWxlbWVudHNcbiAgICAgIHZhciAkaW5zdGFuY2UgPSBuZXcgQygpO1xuICAgICAgdmFyIGluZGV4ID0gNTtcbiAgICAgIHdoaWxlIChpbmRleC0tKSAkaW5zdGFuY2VbQURERVJdKGluZGV4LCBpbmRleCk7XG4gICAgICByZXR1cm4gISRpbnN0YW5jZS5oYXMoLTApO1xuICAgIH0pO1xuICAgIGlmICghQUNDRVBUX0lURVJBQkxFUykge1xuICAgICAgQyA9IHdyYXBwZXIoZnVuY3Rpb24gKHRhcmdldCwgaXRlcmFibGUpIHtcbiAgICAgICAgYW5JbnN0YW5jZSh0YXJnZXQsIEMsIE5BTUUpO1xuICAgICAgICB2YXIgdGhhdCA9IGluaGVyaXRJZlJlcXVpcmVkKG5ldyBCYXNlKCksIHRhcmdldCwgQyk7XG4gICAgICAgIGlmIChpdGVyYWJsZSAhPSB1bmRlZmluZWQpIGZvck9mKGl0ZXJhYmxlLCBJU19NQVAsIHRoYXRbQURERVJdLCB0aGF0KTtcbiAgICAgICAgcmV0dXJuIHRoYXQ7XG4gICAgICB9KTtcbiAgICAgIEMucHJvdG90eXBlID0gcHJvdG87XG4gICAgICBwcm90by5jb25zdHJ1Y3RvciA9IEM7XG4gICAgfVxuICAgIGlmIChUSFJPV1NfT05fUFJJTUlUSVZFUyB8fCBCVUdHWV9aRVJPKSB7XG4gICAgICBmaXhNZXRob2QoJ2RlbGV0ZScpO1xuICAgICAgZml4TWV0aG9kKCdoYXMnKTtcbiAgICAgIElTX01BUCAmJiBmaXhNZXRob2QoJ2dldCcpO1xuICAgIH1cbiAgICBpZiAoQlVHR1lfWkVSTyB8fCBIQVNOVF9DSEFJTklORykgZml4TWV0aG9kKEFEREVSKTtcbiAgICAvLyB3ZWFrIGNvbGxlY3Rpb25zIHNob3VsZCBub3QgY29udGFpbnMgLmNsZWFyIG1ldGhvZFxuICAgIGlmIChJU19XRUFLICYmIHByb3RvLmNsZWFyKSBkZWxldGUgcHJvdG8uY2xlYXI7XG4gIH1cblxuICBzZXRUb1N0cmluZ1RhZyhDLCBOQU1FKTtcblxuICBPW05BTUVdID0gQztcbiAgJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAoQyAhPSBCYXNlKSwgTyk7XG5cbiAgaWYgKCFJU19XRUFLKSBjb21tb24uc2V0U3Ryb25nKEMsIE5BTUUsIElTX01BUCk7XG5cbiAgcmV0dXJuIEM7XG59O1xuIiwidmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHsgdmVyc2lvbjogJzIuNS43JyB9O1xuaWYgKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpIF9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIGluZGV4LCB2YWx1ZSkge1xuICBpZiAoaW5kZXggaW4gb2JqZWN0KSAkZGVmaW5lUHJvcGVydHkuZihvYmplY3QsIGluZGV4LCBjcmVhdGVEZXNjKDAsIHZhbHVlKSk7XG4gIGVsc2Ugb2JqZWN0W2luZGV4XSA9IHZhbHVlO1xufTtcbiIsIi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZuLCB0aGF0LCBsZW5ndGgpIHtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYgKHRoYXQgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGZuO1xuICBzd2l0Y2ggKGxlbmd0aCkge1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uIChhKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uIChhLCBiLCBjKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbiAoLyogLi4uYXJncyAqLykge1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTtcbiIsIi8vIDcuMi4xIFJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgPT0gdW5kZWZpbmVkKSB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG4iLCIvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG59KTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQ7XG4vLyB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0JyBpbiBvbGQgSUVcbnZhciBpcyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpcyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuIiwiLy8gSUUgOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSAoXG4gICdjb25zdHJ1Y3RvcixoYXNPd25Qcm9wZXJ0eSxpc1Byb3RvdHlwZU9mLHByb3BlcnR5SXNFbnVtZXJhYmxlLHRvTG9jYWxlU3RyaW5nLHRvU3RyaW5nLHZhbHVlT2YnXG4pLnNwbGl0KCcsJyk7XG4iLCIvLyBhbGwgZW51bWVyYWJsZSBvYmplY3Qga2V5cywgaW5jbHVkZXMgc3ltYm9sc1xudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xudmFyIGdPUFMgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpO1xudmFyIHBJRSA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciByZXN1bHQgPSBnZXRLZXlzKGl0KTtcbiAgdmFyIGdldFN5bWJvbHMgPSBnT1BTLmY7XG4gIGlmIChnZXRTeW1ib2xzKSB7XG4gICAgdmFyIHN5bWJvbHMgPSBnZXRTeW1ib2xzKGl0KTtcbiAgICB2YXIgaXNFbnVtID0gcElFLmY7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBrZXk7XG4gICAgd2hpbGUgKHN5bWJvbHMubGVuZ3RoID4gaSkgaWYgKGlzRW51bS5jYWxsKGl0LCBrZXkgPSBzeW1ib2xzW2krK10pKSByZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24gKHR5cGUsIG5hbWUsIHNvdXJjZSkge1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRjtcbiAgdmFyIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0Lkc7XG4gIHZhciBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TO1xuICB2YXIgSVNfUFJPVE8gPSB0eXBlICYgJGV4cG9ydC5QO1xuICB2YXIgSVNfQklORCA9IHR5cGUgJiAkZXhwb3J0LkI7XG4gIHZhciB0YXJnZXQgPSBJU19HTE9CQUwgPyBnbG9iYWwgOiBJU19TVEFUSUMgPyBnbG9iYWxbbmFtZV0gfHwgKGdsb2JhbFtuYW1lXSA9IHt9KSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV07XG4gIHZhciBleHBvcnRzID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSk7XG4gIHZhciBleHBQcm90byA9IGV4cG9ydHNbUFJPVE9UWVBFXSB8fCAoZXhwb3J0c1tQUk9UT1RZUEVdID0ge30pO1xuICB2YXIga2V5LCBvd24sIG91dCwgZXhwO1xuICBpZiAoSVNfR0xPQkFMKSBzb3VyY2UgPSBuYW1lO1xuICBmb3IgKGtleSBpbiBzb3VyY2UpIHtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiB0YXJnZXRba2V5XSAhPT0gdW5kZWZpbmVkO1xuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgb3V0ID0gKG93biA/IHRhcmdldCA6IHNvdXJjZSlba2V5XTtcbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIGV4cCA9IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4dGVuZCBnbG9iYWxcbiAgICBpZiAodGFyZ2V0KSByZWRlZmluZSh0YXJnZXQsIGtleSwgb3V0LCB0eXBlICYgJGV4cG9ydC5VKTtcbiAgICAvLyBleHBvcnRcbiAgICBpZiAoZXhwb3J0c1trZXldICE9IG91dCkgaGlkZShleHBvcnRzLCBrZXksIGV4cCk7XG4gICAgaWYgKElTX1BST1RPICYmIGV4cFByb3RvW2tleV0gIT0gb3V0KSBleHBQcm90b1trZXldID0gb3V0O1xuICB9XG59O1xuZ2xvYmFsLmNvcmUgPSBjb3JlO1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YFxubW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xudmFyIHdrcyA9IHJlcXVpcmUoJy4vX3drcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChLRVksIGxlbmd0aCwgZXhlYykge1xuICB2YXIgU1lNQk9MID0gd2tzKEtFWSk7XG4gIHZhciBmbnMgPSBleGVjKGRlZmluZWQsIFNZTUJPTCwgJydbS0VZXSk7XG4gIHZhciBzdHJmbiA9IGZuc1swXTtcbiAgdmFyIHJ4Zm4gPSBmbnNbMV07XG4gIGlmIChmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIE8gPSB7fTtcbiAgICBPW1NZTUJPTF0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9O1xuICAgIHJldHVybiAnJ1tLRVldKE8pICE9IDc7XG4gIH0pKSB7XG4gICAgcmVkZWZpbmUoU3RyaW5nLnByb3RvdHlwZSwgS0VZLCBzdHJmbik7XG4gICAgaGlkZShSZWdFeHAucHJvdG90eXBlLCBTWU1CT0wsIGxlbmd0aCA9PSAyXG4gICAgICAvLyAyMS4yLjUuOCBSZWdFeHAucHJvdG90eXBlW0BAcmVwbGFjZV0oc3RyaW5nLCByZXBsYWNlVmFsdWUpXG4gICAgICAvLyAyMS4yLjUuMTEgUmVnRXhwLnByb3RvdHlwZVtAQHNwbGl0XShzdHJpbmcsIGxpbWl0KVxuICAgICAgPyBmdW5jdGlvbiAoc3RyaW5nLCBhcmcpIHsgcmV0dXJuIHJ4Zm4uY2FsbChzdHJpbmcsIHRoaXMsIGFyZyk7IH1cbiAgICAgIC8vIDIxLjIuNS42IFJlZ0V4cC5wcm90b3R5cGVbQEBtYXRjaF0oc3RyaW5nKVxuICAgICAgLy8gMjEuMi41LjkgUmVnRXhwLnByb3RvdHlwZVtAQHNlYXJjaF0oc3RyaW5nKVxuICAgICAgOiBmdW5jdGlvbiAoc3RyaW5nKSB7IHJldHVybiByeGZuLmNhbGwoc3RyaW5nLCB0aGlzKTsgfVxuICAgICk7XG4gIH1cbn07XG4iLCIndXNlIHN0cmljdCc7XG4vLyAyMS4yLjUuMyBnZXQgUmVnRXhwLnByb3RvdHlwZS5mbGFnc1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHRoYXQgPSBhbk9iamVjdCh0aGlzKTtcbiAgdmFyIHJlc3VsdCA9ICcnO1xuICBpZiAodGhhdC5nbG9iYWwpIHJlc3VsdCArPSAnZyc7XG4gIGlmICh0aGF0Lmlnbm9yZUNhc2UpIHJlc3VsdCArPSAnaSc7XG4gIGlmICh0aGF0Lm11bHRpbGluZSkgcmVzdWx0ICs9ICdtJztcbiAgaWYgKHRoYXQudW5pY29kZSkgcmVzdWx0ICs9ICd1JztcbiAgaWYgKHRoYXQuc3RpY2t5KSByZXN1bHQgKz0gJ3knO1xuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsInZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBjYWxsID0gcmVxdWlyZSgnLi9faXRlci1jYWxsJyk7XG52YXIgaXNBcnJheUl0ZXIgPSByZXF1aXJlKCcuL19pcy1hcnJheS1pdGVyJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIGdldEl0ZXJGbiA9IHJlcXVpcmUoJy4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG52YXIgQlJFQUsgPSB7fTtcbnZhciBSRVRVUk4gPSB7fTtcbnZhciBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlcmFibGUsIGVudHJpZXMsIGZuLCB0aGF0LCBJVEVSQVRPUikge1xuICB2YXIgaXRlckZuID0gSVRFUkFUT1IgPyBmdW5jdGlvbiAoKSB7IHJldHVybiBpdGVyYWJsZTsgfSA6IGdldEl0ZXJGbihpdGVyYWJsZSk7XG4gIHZhciBmID0gY3R4KGZuLCB0aGF0LCBlbnRyaWVzID8gMiA6IDEpO1xuICB2YXIgaW5kZXggPSAwO1xuICB2YXIgbGVuZ3RoLCBzdGVwLCBpdGVyYXRvciwgcmVzdWx0O1xuICBpZiAodHlwZW9mIGl0ZXJGbiAhPSAnZnVuY3Rpb24nKSB0aHJvdyBUeXBlRXJyb3IoaXRlcmFibGUgKyAnIGlzIG5vdCBpdGVyYWJsZSEnKTtcbiAgLy8gZmFzdCBjYXNlIGZvciBhcnJheXMgd2l0aCBkZWZhdWx0IGl0ZXJhdG9yXG4gIGlmIChpc0FycmF5SXRlcihpdGVyRm4pKSBmb3IgKGxlbmd0aCA9IHRvTGVuZ3RoKGl0ZXJhYmxlLmxlbmd0aCk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKSB7XG4gICAgcmVzdWx0ID0gZW50cmllcyA/IGYoYW5PYmplY3Qoc3RlcCA9IGl0ZXJhYmxlW2luZGV4XSlbMF0sIHN0ZXBbMV0pIDogZihpdGVyYWJsZVtpbmRleF0pO1xuICAgIGlmIChyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKSByZXR1cm4gcmVzdWx0O1xuICB9IGVsc2UgZm9yIChpdGVyYXRvciA9IGl0ZXJGbi5jYWxsKGl0ZXJhYmxlKTsgIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOykge1xuICAgIHJlc3VsdCA9IGNhbGwoaXRlcmF0b3IsIGYsIHN0ZXAudmFsdWUsIGVudHJpZXMpO1xuICAgIGlmIChyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKSByZXR1cm4gcmVzdWx0O1xuICB9XG59O1xuZXhwb3J0cy5CUkVBSyA9IEJSRUFLO1xuZXhwb3J0cy5SRVRVUk4gPSBSRVRVUk47XG4iLCIvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxudmFyIGdsb2JhbCA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoXG4gID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZiAodHlwZW9mIF9fZyA9PSAnbnVtYmVyJykgX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4iLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59O1xuIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuIiwidmFyIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQ7XG5tb2R1bGUuZXhwb3J0cyA9IGRvY3VtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiIsIm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnZGl2JyksICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX3NldC1wcm90bycpLnNldDtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRoYXQsIHRhcmdldCwgQykge1xuICB2YXIgUyA9IHRhcmdldC5jb25zdHJ1Y3RvcjtcbiAgdmFyIFA7XG4gIGlmIChTICE9PSBDICYmIHR5cGVvZiBTID09ICdmdW5jdGlvbicgJiYgKFAgPSBTLnByb3RvdHlwZSkgIT09IEMucHJvdG90eXBlICYmIGlzT2JqZWN0KFApICYmIHNldFByb3RvdHlwZU9mKSB7XG4gICAgc2V0UHJvdG90eXBlT2YodGhhdCwgUCk7XG4gIH0gcmV0dXJuIHRoYXQ7XG59O1xuIiwiLy8gZmFzdCBhcHBseSwgaHR0cDovL2pzcGVyZi5sbmtpdC5jb20vZmFzdC1hcHBseS81XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbiwgYXJncywgdGhhdCkge1xuICB2YXIgdW4gPSB0aGF0ID09PSB1bmRlZmluZWQ7XG4gIHN3aXRjaCAoYXJncy5sZW5ndGgpIHtcbiAgICBjYXNlIDA6IHJldHVybiB1biA/IGZuKClcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCk7XG4gICAgY2FzZSAxOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdKTtcbiAgICBjYXNlIDI6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgIGNhc2UgMzogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgY2FzZSA0OiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKTtcbiAgfSByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJncyk7XG59O1xuIiwiLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCkgPyBPYmplY3QgOiBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTtcbiIsIi8vIGNoZWNrIG9uIGRlZmF1bHQgQXJyYXkgaXRlcmF0b3JcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCAhPT0gdW5kZWZpbmVkICYmIChJdGVyYXRvcnMuQXJyYXkgPT09IGl0IHx8IEFycmF5UHJvdG9bSVRFUkFUT1JdID09PSBpdCk7XG59O1xuIiwiLy8gNy4yLjIgSXNBcnJheShhcmd1bWVudClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiBpc0FycmF5KGFyZykge1xuICByZXR1cm4gY29mKGFyZykgPT0gJ0FycmF5Jztcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTtcbiIsIi8vIDcuMi44IElzUmVnRXhwKGFyZ3VtZW50KVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG52YXIgTUFUQ0ggPSByZXF1aXJlKCcuL193a3MnKSgnbWF0Y2gnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBpc1JlZ0V4cDtcbiAgcmV0dXJuIGlzT2JqZWN0KGl0KSAmJiAoKGlzUmVnRXhwID0gaXRbTUFUQ0hdKSAhPT0gdW5kZWZpbmVkID8gISFpc1JlZ0V4cCA6IGNvZihpdCkgPT0gJ1JlZ0V4cCcpO1xufTtcbiIsIi8vIGNhbGwgc29tZXRoaW5nIG9uIGl0ZXJhdG9yIHN0ZXAgd2l0aCBzYWZlIGNsb3Npbmcgb24gZXJyb3JcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlcmF0b3IsIGZuLCB2YWx1ZSwgZW50cmllcykge1xuICB0cnkge1xuICAgIHJldHVybiBlbnRyaWVzID8gZm4oYW5PYmplY3QodmFsdWUpWzBdLCB2YWx1ZVsxXSkgOiBmbih2YWx1ZSk7XG4gIC8vIDcuNC42IEl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsIGNvbXBsZXRpb24pXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB2YXIgcmV0ID0gaXRlcmF0b3JbJ3JldHVybiddO1xuICAgIGlmIChyZXQgIT09IHVuZGVmaW5lZCkgYW5PYmplY3QocmV0LmNhbGwoaXRlcmF0b3IpKTtcbiAgICB0aHJvdyBlO1xuICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKTtcbnZhciBkZXNjcmlwdG9yID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuXG4vLyAyNS4xLjIuMS4xICVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faGlkZScpKEl0ZXJhdG9yUHJvdG90eXBlLCByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KSB7XG4gIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9IGNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwgeyBuZXh0OiBkZXNjcmlwdG9yKDEsIG5leHQpIH0pO1xuICBzZXRUb1N0cmluZ1RhZyhDb25zdHJ1Y3RvciwgTkFNRSArICcgSXRlcmF0b3InKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgJGl0ZXJDcmVhdGUgPSByZXF1aXJlKCcuL19pdGVyLWNyZWF0ZScpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEJVR0dZID0gIShbXS5rZXlzICYmICduZXh0JyBpbiBbXS5rZXlzKCkpOyAvLyBTYWZhcmkgaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG52YXIgRkZfSVRFUkFUT1IgPSAnQEBpdGVyYXRvcic7XG52YXIgS0VZUyA9ICdrZXlzJztcbnZhciBWQUxVRVMgPSAndmFsdWVzJztcblxudmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChCYXNlLCBOQU1FLCBDb25zdHJ1Y3RvciwgbmV4dCwgREVGQVVMVCwgSVNfU0VULCBGT1JDRUQpIHtcbiAgJGl0ZXJDcmVhdGUoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpO1xuICB2YXIgZ2V0TWV0aG9kID0gZnVuY3Rpb24gKGtpbmQpIHtcbiAgICBpZiAoIUJVR0dZICYmIGtpbmQgaW4gcHJvdG8pIHJldHVybiBwcm90b1traW5kXTtcbiAgICBzd2l0Y2ggKGtpbmQpIHtcbiAgICAgIGNhc2UgS0VZUzogcmV0dXJuIGZ1bmN0aW9uIGtleXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgICBjYXNlIFZBTFVFUzogcmV0dXJuIGZ1bmN0aW9uIHZhbHVlcygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICB9IHJldHVybiBmdW5jdGlvbiBlbnRyaWVzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICB9O1xuICB2YXIgVEFHID0gTkFNRSArICcgSXRlcmF0b3InO1xuICB2YXIgREVGX1ZBTFVFUyA9IERFRkFVTFQgPT0gVkFMVUVTO1xuICB2YXIgVkFMVUVTX0JVRyA9IGZhbHNlO1xuICB2YXIgcHJvdG8gPSBCYXNlLnByb3RvdHlwZTtcbiAgdmFyICRuYXRpdmUgPSBwcm90b1tJVEVSQVRPUl0gfHwgcHJvdG9bRkZfSVRFUkFUT1JdIHx8IERFRkFVTFQgJiYgcHJvdG9bREVGQVVMVF07XG4gIHZhciAkZGVmYXVsdCA9ICRuYXRpdmUgfHwgZ2V0TWV0aG9kKERFRkFVTFQpO1xuICB2YXIgJGVudHJpZXMgPSBERUZBVUxUID8gIURFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZCgnZW50cmllcycpIDogdW5kZWZpbmVkO1xuICB2YXIgJGFueU5hdGl2ZSA9IE5BTUUgPT0gJ0FycmF5JyA/IHByb3RvLmVudHJpZXMgfHwgJG5hdGl2ZSA6ICRuYXRpdmU7XG4gIHZhciBtZXRob2RzLCBrZXksIEl0ZXJhdG9yUHJvdG90eXBlO1xuICAvLyBGaXggbmF0aXZlXG4gIGlmICgkYW55TmF0aXZlKSB7XG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZigkYW55TmF0aXZlLmNhbGwobmV3IEJhc2UoKSkpO1xuICAgIGlmIChJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSAmJiBJdGVyYXRvclByb3RvdHlwZS5uZXh0KSB7XG4gICAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXG4gICAgICBzZXRUb1N0cmluZ1RhZyhJdGVyYXRvclByb3RvdHlwZSwgVEFHLCB0cnVlKTtcbiAgICAgIC8vIGZpeCBmb3Igc29tZSBvbGQgZW5naW5lc1xuICAgICAgaWYgKCFMSUJSQVJZICYmIHR5cGVvZiBJdGVyYXRvclByb3RvdHlwZVtJVEVSQVRPUl0gIT0gJ2Z1bmN0aW9uJykgaGlkZShJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIHJldHVyblRoaXMpO1xuICAgIH1cbiAgfVxuICAvLyBmaXggQXJyYXkje3ZhbHVlcywgQEBpdGVyYXRvcn0ubmFtZSBpbiBWOCAvIEZGXG4gIGlmIChERUZfVkFMVUVTICYmICRuYXRpdmUgJiYgJG5hdGl2ZS5uYW1lICE9PSBWQUxVRVMpIHtcbiAgICBWQUxVRVNfQlVHID0gdHJ1ZTtcbiAgICAkZGVmYXVsdCA9IGZ1bmN0aW9uIHZhbHVlcygpIHsgcmV0dXJuICRuYXRpdmUuY2FsbCh0aGlzKTsgfTtcbiAgfVxuICAvLyBEZWZpbmUgaXRlcmF0b3JcbiAgaWYgKCghTElCUkFSWSB8fCBGT1JDRUQpICYmIChCVUdHWSB8fCBWQUxVRVNfQlVHIHx8ICFwcm90b1tJVEVSQVRPUl0pKSB7XG4gICAgaGlkZShwcm90bywgSVRFUkFUT1IsICRkZWZhdWx0KTtcbiAgfVxuICAvLyBQbHVnIGZvciBsaWJyYXJ5XG4gIEl0ZXJhdG9yc1tOQU1FXSA9ICRkZWZhdWx0O1xuICBJdGVyYXRvcnNbVEFHXSA9IHJldHVyblRoaXM7XG4gIGlmIChERUZBVUxUKSB7XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHZhbHVlczogREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKFZBTFVFUyksXG4gICAgICBrZXlzOiBJU19TRVQgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChLRVlTKSxcbiAgICAgIGVudHJpZXM6ICRlbnRyaWVzXG4gICAgfTtcbiAgICBpZiAoRk9SQ0VEKSBmb3IgKGtleSBpbiBtZXRob2RzKSB7XG4gICAgICBpZiAoIShrZXkgaW4gcHJvdG8pKSByZWRlZmluZShwcm90bywga2V5LCBtZXRob2RzW2tleV0pO1xuICAgIH0gZWxzZSAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChCVUdHWSB8fCBWQUxVRVNfQlVHKSwgTkFNRSwgbWV0aG9kcyk7XG4gIH1cbiAgcmV0dXJuIG1ldGhvZHM7XG59O1xuIiwidmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgU0FGRV9DTE9TSU5HID0gZmFsc2U7XG5cbnRyeSB7XG4gIHZhciByaXRlciA9IFs3XVtJVEVSQVRPUl0oKTtcbiAgcml0ZXJbJ3JldHVybiddID0gZnVuY3Rpb24gKCkgeyBTQUZFX0NMT1NJTkcgPSB0cnVlOyB9O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdGhyb3ctbGl0ZXJhbFxuICBBcnJheS5mcm9tKHJpdGVyLCBmdW5jdGlvbiAoKSB7IHRocm93IDI7IH0pO1xufSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMsIHNraXBDbG9zaW5nKSB7XG4gIGlmICghc2tpcENsb3NpbmcgJiYgIVNBRkVfQ0xPU0lORykgcmV0dXJuIGZhbHNlO1xuICB2YXIgc2FmZSA9IGZhbHNlO1xuICB0cnkge1xuICAgIHZhciBhcnIgPSBbN107XG4gICAgdmFyIGl0ZXIgPSBhcnJbSVRFUkFUT1JdKCk7XG4gICAgaXRlci5uZXh0ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4geyBkb25lOiBzYWZlID0gdHJ1ZSB9OyB9O1xuICAgIGFycltJVEVSQVRPUl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBpdGVyOyB9O1xuICAgIGV4ZWMoYXJyKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIHJldHVybiBzYWZlO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGRvbmUsIHZhbHVlKSB7XG4gIHJldHVybiB7IHZhbHVlOiB2YWx1ZSwgZG9uZTogISFkb25lIH07XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZmFsc2U7XG4iLCJ2YXIgTUVUQSA9IHJlcXVpcmUoJy4vX3VpZCcpKCdtZXRhJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBzZXREZXNjID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBpZCA9IDA7XG52YXIgaXNFeHRlbnNpYmxlID0gT2JqZWN0LmlzRXh0ZW5zaWJsZSB8fCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0cnVlO1xufTtcbnZhciBGUkVFWkUgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBpc0V4dGVuc2libGUoT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zKHt9KSk7XG59KTtcbnZhciBzZXRNZXRhID0gZnVuY3Rpb24gKGl0KSB7XG4gIHNldERlc2MoaXQsIE1FVEEsIHsgdmFsdWU6IHtcbiAgICBpOiAnTycgKyArK2lkLCAvLyBvYmplY3QgSURcbiAgICB3OiB7fSAgICAgICAgICAvLyB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9IH0pO1xufTtcbnZhciBmYXN0S2V5ID0gZnVuY3Rpb24gKGl0LCBjcmVhdGUpIHtcbiAgLy8gcmV0dXJuIHByaW1pdGl2ZSB3aXRoIHByZWZpeFxuICBpZiAoIWlzT2JqZWN0KGl0KSkgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJyA/IGl0IDogKHR5cGVvZiBpdCA9PSAnc3RyaW5nJyA/ICdTJyA6ICdQJykgKyBpdDtcbiAgaWYgKCFoYXMoaXQsIE1FVEEpKSB7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZiAoIWlzRXh0ZW5zaWJsZShpdCkpIHJldHVybiAnRic7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZiAoIWNyZWF0ZSkgcmV0dXJuICdFJztcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gb2JqZWN0IElEXG4gIH0gcmV0dXJuIGl0W01FVEFdLmk7XG59O1xudmFyIGdldFdlYWsgPSBmdW5jdGlvbiAoaXQsIGNyZWF0ZSkge1xuICBpZiAoIWhhcyhpdCwgTUVUQSkpIHtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmICghaXNFeHRlbnNpYmxlKGl0KSkgcmV0dXJuIHRydWU7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZiAoIWNyZWF0ZSkgcmV0dXJuIGZhbHNlO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBoYXNoIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH0gcmV0dXJuIGl0W01FVEFdLnc7XG59O1xuLy8gYWRkIG1ldGFkYXRhIG9uIGZyZWV6ZS1mYW1pbHkgbWV0aG9kcyBjYWxsaW5nXG52YXIgb25GcmVlemUgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKEZSRUVaRSAmJiBtZXRhLk5FRUQgJiYgaXNFeHRlbnNpYmxlKGl0KSAmJiAhaGFzKGl0LCBNRVRBKSkgc2V0TWV0YShpdCk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgbWV0YSA9IG1vZHVsZS5leHBvcnRzID0ge1xuICBLRVk6IE1FVEEsXG4gIE5FRUQ6IGZhbHNlLFxuICBmYXN0S2V5OiBmYXN0S2V5LFxuICBnZXRXZWFrOiBnZXRXZWFrLFxuICBvbkZyZWV6ZTogb25GcmVlemVcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgbWFjcm90YXNrID0gcmVxdWlyZSgnLi9fdGFzaycpLnNldDtcbnZhciBPYnNlcnZlciA9IGdsb2JhbC5NdXRhdGlvbk9ic2VydmVyIHx8IGdsb2JhbC5XZWJLaXRNdXRhdGlvbk9ic2VydmVyO1xudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciBQcm9taXNlID0gZ2xvYmFsLlByb21pc2U7XG52YXIgaXNOb2RlID0gcmVxdWlyZSgnLi9fY29mJykocHJvY2VzcykgPT0gJ3Byb2Nlc3MnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhlYWQsIGxhc3QsIG5vdGlmeTtcblxuICB2YXIgZmx1c2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHBhcmVudCwgZm47XG4gICAgaWYgKGlzTm9kZSAmJiAocGFyZW50ID0gcHJvY2Vzcy5kb21haW4pKSBwYXJlbnQuZXhpdCgpO1xuICAgIHdoaWxlIChoZWFkKSB7XG4gICAgICBmbiA9IGhlYWQuZm47XG4gICAgICBoZWFkID0gaGVhZC5uZXh0O1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm4oKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaWYgKGhlYWQpIG5vdGlmeSgpO1xuICAgICAgICBlbHNlIGxhc3QgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgIGlmIChwYXJlbnQpIHBhcmVudC5lbnRlcigpO1xuICB9O1xuXG4gIC8vIE5vZGUuanNcbiAgaWYgKGlzTm9kZSkge1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soZmx1c2gpO1xuICAgIH07XG4gIC8vIGJyb3dzZXJzIHdpdGggTXV0YXRpb25PYnNlcnZlciwgZXhjZXB0IGlPUyBTYWZhcmkgLSBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMzM5XG4gIH0gZWxzZSBpZiAoT2JzZXJ2ZXIgJiYgIShnbG9iYWwubmF2aWdhdG9yICYmIGdsb2JhbC5uYXZpZ2F0b3Iuc3RhbmRhbG9uZSkpIHtcbiAgICB2YXIgdG9nZ2xlID0gdHJ1ZTtcbiAgICB2YXIgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgICBuZXcgT2JzZXJ2ZXIoZmx1c2gpLm9ic2VydmUobm9kZSwgeyBjaGFyYWN0ZXJEYXRhOiB0cnVlIH0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIG5vZGUuZGF0YSA9IHRvZ2dsZSA9ICF0b2dnbGU7XG4gICAgfTtcbiAgLy8gZW52aXJvbm1lbnRzIHdpdGggbWF5YmUgbm9uLWNvbXBsZXRlbHkgY29ycmVjdCwgYnV0IGV4aXN0ZW50IFByb21pc2VcbiAgfSBlbHNlIGlmIChQcm9taXNlICYmIFByb21pc2UucmVzb2x2ZSkge1xuICAgIC8vIFByb21pc2UucmVzb2x2ZSB3aXRob3V0IGFuIGFyZ3VtZW50IHRocm93cyBhbiBlcnJvciBpbiBMRyBXZWJPUyAyXG4gICAgdmFyIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUodW5kZWZpbmVkKTtcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBwcm9taXNlLnRoZW4oZmx1c2gpO1xuICAgIH07XG4gIC8vIGZvciBvdGhlciBlbnZpcm9ubWVudHMgLSBtYWNyb3Rhc2sgYmFzZWQgb246XG4gIC8vIC0gc2V0SW1tZWRpYXRlXG4gIC8vIC0gTWVzc2FnZUNoYW5uZWxcbiAgLy8gLSB3aW5kb3cucG9zdE1lc3NhZ1xuICAvLyAtIG9ucmVhZHlzdGF0ZWNoYW5nZVxuICAvLyAtIHNldFRpbWVvdXRcbiAgfSBlbHNlIHtcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBzdHJhbmdlIElFICsgd2VicGFjayBkZXYgc2VydmVyIGJ1ZyAtIHVzZSAuY2FsbChnbG9iYWwpXG4gICAgICBtYWNyb3Rhc2suY2FsbChnbG9iYWwsIGZsdXNoKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChmbikge1xuICAgIHZhciB0YXNrID0geyBmbjogZm4sIG5leHQ6IHVuZGVmaW5lZCB9O1xuICAgIGlmIChsYXN0KSBsYXN0Lm5leHQgPSB0YXNrO1xuICAgIGlmICghaGVhZCkge1xuICAgICAgaGVhZCA9IHRhc2s7XG4gICAgICBub3RpZnkoKTtcbiAgICB9IGxhc3QgPSB0YXNrO1xuICB9O1xufTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIDI1LjQuMS41IE5ld1Byb21pc2VDYXBhYmlsaXR5KEMpXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xuXG5mdW5jdGlvbiBQcm9taXNlQ2FwYWJpbGl0eShDKSB7XG4gIHZhciByZXNvbHZlLCByZWplY3Q7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBDKGZ1bmN0aW9uICgkJHJlc29sdmUsICQkcmVqZWN0KSB7XG4gICAgaWYgKHJlc29sdmUgIT09IHVuZGVmaW5lZCB8fCByZWplY3QgIT09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKCdCYWQgUHJvbWlzZSBjb25zdHJ1Y3RvcicpO1xuICAgIHJlc29sdmUgPSAkJHJlc29sdmU7XG4gICAgcmVqZWN0ID0gJCRyZWplY3Q7XG4gIH0pO1xuICB0aGlzLnJlc29sdmUgPSBhRnVuY3Rpb24ocmVzb2x2ZSk7XG4gIHRoaXMucmVqZWN0ID0gYUZ1bmN0aW9uKHJlamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzLmYgPSBmdW5jdGlvbiAoQykge1xuICByZXR1cm4gbmV3IFByb21pc2VDYXBhYmlsaXR5KEMpO1xufTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIDE5LjEuMi4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UsIC4uLilcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciBnT1BTID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKTtcbnZhciBwSUUgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpO1xudmFyICRhc3NpZ24gPSBPYmplY3QuYXNzaWduO1xuXG4vLyBzaG91bGQgd29yayB3aXRoIHN5bWJvbHMgYW5kIHNob3VsZCBoYXZlIGRldGVybWluaXN0aWMgcHJvcGVydHkgb3JkZXIgKFY4IGJ1Zylcbm1vZHVsZS5leHBvcnRzID0gISRhc3NpZ24gfHwgcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHZhciBBID0ge307XG4gIHZhciBCID0ge307XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgUyA9IFN5bWJvbCgpO1xuICB2YXIgSyA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdCc7XG4gIEFbU10gPSA3O1xuICBLLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7IEJba10gPSBrOyB9KTtcbiAgcmV0dXJuICRhc3NpZ24oe30sIEEpW1NdICE9IDcgfHwgT2JqZWN0LmtleXMoJGFzc2lnbih7fSwgQikpLmpvaW4oJycpICE9IEs7XG59KSA/IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIHZhciBUID0gdG9PYmplY3QodGFyZ2V0KTtcbiAgdmFyIGFMZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICB2YXIgaW5kZXggPSAxO1xuICB2YXIgZ2V0U3ltYm9scyA9IGdPUFMuZjtcbiAgdmFyIGlzRW51bSA9IHBJRS5mO1xuICB3aGlsZSAoYUxlbiA+IGluZGV4KSB7XG4gICAgdmFyIFMgPSBJT2JqZWN0KGFyZ3VtZW50c1tpbmRleCsrXSk7XG4gICAgdmFyIGtleXMgPSBnZXRTeW1ib2xzID8gZ2V0S2V5cyhTKS5jb25jYXQoZ2V0U3ltYm9scyhTKSkgOiBnZXRLZXlzKFMpO1xuICAgIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgICB2YXIgaiA9IDA7XG4gICAgdmFyIGtleTtcbiAgICB3aGlsZSAobGVuZ3RoID4gaikgaWYgKGlzRW51bS5jYWxsKFMsIGtleSA9IGtleXNbaisrXSkpIFRba2V5XSA9IFNba2V5XTtcbiAgfSByZXR1cm4gVDtcbn0gOiAkYXNzaWduO1xuIiwiLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBkUHMgPSByZXF1aXJlKCcuL19vYmplY3QtZHBzJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG52YXIgRW1wdHkgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBjcmVhdGVEaWN0ID0gZnVuY3Rpb24gKCkge1xuICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xuICB2YXIgaWZyYW1lID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdpZnJhbWUnKTtcbiAgdmFyIGkgPSBlbnVtQnVnS2V5cy5sZW5ndGg7XG4gIHZhciBsdCA9ICc8JztcbiAgdmFyIGd0ID0gJz4nO1xuICB2YXIgaWZyYW1lRG9jdW1lbnQ7XG4gIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICByZXF1aXJlKCcuL19odG1sJykuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lLnNyYyA9ICdqYXZhc2NyaXB0Oic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2NyaXB0LXVybFxuICAvLyBjcmVhdGVEaWN0ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuT2JqZWN0O1xuICAvLyBodG1sLnJlbW92ZUNoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcbiAgaWZyYW1lRG9jdW1lbnQud3JpdGUobHQgKyAnc2NyaXB0JyArIGd0ICsgJ2RvY3VtZW50LkY9T2JqZWN0JyArIGx0ICsgJy9zY3JpcHQnICsgZ3QpO1xuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xuICBjcmVhdGVEaWN0ID0gaWZyYW1lRG9jdW1lbnQuRjtcbiAgd2hpbGUgKGktLSkgZGVsZXRlIGNyZWF0ZURpY3RbUFJPVE9UWVBFXVtlbnVtQnVnS2V5c1tpXV07XG4gIHJldHVybiBjcmVhdGVEaWN0KCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKE8gIT09IG51bGwpIHtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5KCk7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IG51bGw7XG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuICB9IGVsc2UgcmVzdWx0ID0gY3JlYXRlRGljdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZFBzKHJlc3VsdCwgUHJvcGVydGllcyk7XG59O1xuIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgZFAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIGRQKE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcykgdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgaWYgKCd2YWx1ZScgaW4gQXR0cmlidXRlcykgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcbiIsInZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICB2YXIga2V5cyA9IGdldEtleXMoUHJvcGVydGllcyk7XG4gIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgdmFyIGkgPSAwO1xuICB2YXIgUDtcbiAgd2hpbGUgKGxlbmd0aCA+IGkpIGRQLmYoTywgUCA9IGtleXNbaSsrXSwgUHJvcGVydGllc1tQXSk7XG4gIHJldHVybiBPO1xufTtcbiIsInZhciBwSUUgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJyk7XG52YXIgZ09QRCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBnT1BEIDogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApIHtcbiAgTyA9IHRvSU9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIGdPUEQoTywgUCk7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoaGFzKE8sIFApKSByZXR1cm4gY3JlYXRlRGVzYyghcElFLmYuY2FsbChPLCBQKSwgT1tQXSk7XG59O1xuIiwiLy8gZmFsbGJhY2sgZm9yIElFMTEgYnVnZ3kgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgd2l0aCBpZnJhbWUgYW5kIHdpbmRvd1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciBnT1BOID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mO1xudmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbnZhciB3aW5kb3dOYW1lcyA9IHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgd2luZG93ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzXG4gID8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMod2luZG93KSA6IFtdO1xuXG52YXIgZ2V0V2luZG93TmFtZXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZ09QTihpdCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gd2luZG93TmFtZXMuc2xpY2UoKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMuZiA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpIHtcbiAgcmV0dXJuIHdpbmRvd05hbWVzICYmIHRvU3RyaW5nLmNhbGwoaXQpID09ICdbb2JqZWN0IFdpbmRvd10nID8gZ2V0V2luZG93TmFtZXMoaXQpIDogZ09QTih0b0lPYmplY3QoaXQpKTtcbn07XG4iLCIvLyAxOS4xLjIuNyAvIDE1LjIuMy40IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJykuY29uY2F0KCdsZW5ndGgnLCAncHJvdG90eXBlJyk7XG5cbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoTykge1xuICByZXR1cm4gJGtleXMoTywgaGlkZGVuS2V5cyk7XG59O1xuIiwiZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbiIsIi8vIDE5LjEuMi45IC8gMTUuMi4zLjIgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcbnZhciBPYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIChPKSB7XG4gIE8gPSB0b09iamVjdChPKTtcbiAgaWYgKGhhcyhPLCBJRV9QUk9UTykpIHJldHVybiBPW0lFX1BST1RPXTtcbiAgaWYgKHR5cGVvZiBPLmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgTyBpbnN0YW5jZW9mIE8uY29uc3RydWN0b3IpIHtcbiAgICByZXR1cm4gTy5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIH0gcmV0dXJuIE8gaW5zdGFuY2VvZiBPYmplY3QgPyBPYmplY3RQcm90byA6IG51bGw7XG59O1xuIiwidmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciBhcnJheUluZGV4T2YgPSByZXF1aXJlKCcuL19hcnJheS1pbmNsdWRlcycpKGZhbHNlKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lcykge1xuICB2YXIgTyA9IHRvSU9iamVjdChvYmplY3QpO1xuICB2YXIgaSA9IDA7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGtleTtcbiAgZm9yIChrZXkgaW4gTykgaWYgKGtleSAhPSBJRV9QUk9UTykgaGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkgaWYgKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSkge1xuICAgIH5hcnJheUluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHJlc3VsdC5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCIvLyAxOS4xLjIuMTQgLyAxNS4yLjMuMTQgT2JqZWN0LmtleXMoTylcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKSB7XG4gIHJldHVybiAka2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59O1xuIiwiZXhwb3J0cy5mID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG4iLCIvLyBtb3N0IE9iamVjdCBtZXRob2RzIGJ5IEVTNiBzaG91bGQgYWNjZXB0IHByaW1pdGl2ZXNcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChLRVksIGV4ZWMpIHtcbiAgdmFyIGZuID0gKGNvcmUuT2JqZWN0IHx8IHt9KVtLRVldIHx8IE9iamVjdFtLRVldO1xuICB2YXIgZXhwID0ge307XG4gIGV4cFtLRVldID0gZXhlYyhmbik7XG4gICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogZmFpbHMoZnVuY3Rpb24gKCkgeyBmbigxKTsgfSksICdPYmplY3QnLCBleHApO1xufTtcbiIsInZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgaXNFbnVtID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpLmY7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpc0VudHJpZXMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChpdCkge1xuICAgIHZhciBPID0gdG9JT2JqZWN0KGl0KTtcbiAgICB2YXIga2V5cyA9IGdldEtleXMoTyk7XG4gICAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgdmFyIGtleTtcbiAgICB3aGlsZSAobGVuZ3RoID4gaSkgaWYgKGlzRW51bS5jYWxsKE8sIGtleSA9IGtleXNbaSsrXSkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGlzRW50cmllcyA/IFtrZXksIE9ba2V5XV0gOiBPW2tleV0pO1xuICAgIH0gcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHsgZTogZmFsc2UsIHY6IGV4ZWMoKSB9O1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHsgZTogdHJ1ZSwgdjogZSB9O1xuICB9XG59O1xuIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IHJlcXVpcmUoJy4vX25ldy1wcm9taXNlLWNhcGFiaWxpdHknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQywgeCkge1xuICBhbk9iamVjdChDKTtcbiAgaWYgKGlzT2JqZWN0KHgpICYmIHguY29uc3RydWN0b3IgPT09IEMpIHJldHVybiB4O1xuICB2YXIgcHJvbWlzZUNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eS5mKEMpO1xuICB2YXIgcmVzb2x2ZSA9IHByb21pc2VDYXBhYmlsaXR5LnJlc29sdmU7XG4gIHJlc29sdmUoeCk7XG4gIHJldHVybiBwcm9taXNlQ2FwYWJpbGl0eS5wcm9taXNlO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGJpdG1hcCwgdmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZTogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfTtcbn07XG4iLCJ2YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodGFyZ2V0LCBzcmMsIHNhZmUpIHtcbiAgZm9yICh2YXIga2V5IGluIHNyYykgcmVkZWZpbmUodGFyZ2V0LCBrZXksIHNyY1trZXldLCBzYWZlKTtcbiAgcmV0dXJuIHRhcmdldDtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBTUkMgPSByZXF1aXJlKCcuL191aWQnKSgnc3JjJyk7XG52YXIgVE9fU1RSSU5HID0gJ3RvU3RyaW5nJztcbnZhciAkdG9TdHJpbmcgPSBGdW5jdGlvbltUT19TVFJJTkddO1xudmFyIFRQTCA9ICgnJyArICR0b1N0cmluZykuc3BsaXQoVE9fU1RSSU5HKTtcblxucmVxdWlyZSgnLi9fY29yZScpLmluc3BlY3RTb3VyY2UgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuICR0b1N0cmluZy5jYWxsKGl0KTtcbn07XG5cbihtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBrZXksIHZhbCwgc2FmZSkge1xuICB2YXIgaXNGdW5jdGlvbiA9IHR5cGVvZiB2YWwgPT0gJ2Z1bmN0aW9uJztcbiAgaWYgKGlzRnVuY3Rpb24pIGhhcyh2YWwsICduYW1lJykgfHwgaGlkZSh2YWwsICduYW1lJywga2V5KTtcbiAgaWYgKE9ba2V5XSA9PT0gdmFsKSByZXR1cm47XG4gIGlmIChpc0Z1bmN0aW9uKSBoYXModmFsLCBTUkMpIHx8IGhpZGUodmFsLCBTUkMsIE9ba2V5XSA/ICcnICsgT1trZXldIDogVFBMLmpvaW4oU3RyaW5nKGtleSkpKTtcbiAgaWYgKE8gPT09IGdsb2JhbCkge1xuICAgIE9ba2V5XSA9IHZhbDtcbiAgfSBlbHNlIGlmICghc2FmZSkge1xuICAgIGRlbGV0ZSBPW2tleV07XG4gICAgaGlkZShPLCBrZXksIHZhbCk7XG4gIH0gZWxzZSBpZiAoT1trZXldKSB7XG4gICAgT1trZXldID0gdmFsO1xuICB9IGVsc2Uge1xuICAgIGhpZGUoTywga2V5LCB2YWwpO1xuICB9XG4vLyBhZGQgZmFrZSBGdW5jdGlvbiN0b1N0cmluZyBmb3IgY29ycmVjdCB3b3JrIHdyYXBwZWQgbWV0aG9kcyAvIGNvbnN0cnVjdG9ycyB3aXRoIG1ldGhvZHMgbGlrZSBMb0Rhc2ggaXNOYXRpdmVcbn0pKEZ1bmN0aW9uLnByb3RvdHlwZSwgVE9fU1RSSU5HLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuIHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgJiYgdGhpc1tTUkNdIHx8ICR0b1N0cmluZy5jYWxsKHRoaXMpO1xufSk7XG4iLCIvLyBXb3JrcyB3aXRoIF9fcHJvdG9fXyBvbmx5LiBPbGQgdjggY2FuJ3Qgd29yayB3aXRoIG51bGwgcHJvdG8gb2JqZWN0cy5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvICovXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGNoZWNrID0gZnVuY3Rpb24gKE8sIHByb3RvKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBpZiAoIWlzT2JqZWN0KHByb3RvKSAmJiBwcm90byAhPT0gbnVsbCkgdGhyb3cgVHlwZUVycm9yKHByb3RvICsgXCI6IGNhbid0IHNldCBhcyBwcm90b3R5cGUhXCIpO1xufTtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCAoJ19fcHJvdG9fXycgaW4ge30gPyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgZnVuY3Rpb24gKHRlc3QsIGJ1Z2d5LCBzZXQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHNldCA9IHJlcXVpcmUoJy4vX2N0eCcpKEZ1bmN0aW9uLmNhbGwsIHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJykuZihPYmplY3QucHJvdG90eXBlLCAnX19wcm90b19fJykuc2V0LCAyKTtcbiAgICAgICAgc2V0KHRlc3QsIFtdKTtcbiAgICAgICAgYnVnZ3kgPSAhKHRlc3QgaW5zdGFuY2VvZiBBcnJheSk7XG4gICAgICB9IGNhdGNoIChlKSB7IGJ1Z2d5ID0gdHJ1ZTsgfVxuICAgICAgcmV0dXJuIGZ1bmN0aW9uIHNldFByb3RvdHlwZU9mKE8sIHByb3RvKSB7XG4gICAgICAgIGNoZWNrKE8sIHByb3RvKTtcbiAgICAgICAgaWYgKGJ1Z2d5KSBPLl9fcHJvdG9fXyA9IHByb3RvO1xuICAgICAgICBlbHNlIHNldChPLCBwcm90byk7XG4gICAgICAgIHJldHVybiBPO1xuICAgICAgfTtcbiAgICB9KHt9LCBmYWxzZSkgOiB1bmRlZmluZWQpLFxuICBjaGVjazogY2hlY2tcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyk7XG52YXIgU1BFQ0lFUyA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEtFWSkge1xuICB2YXIgQyA9IGdsb2JhbFtLRVldO1xuICBpZiAoREVTQ1JJUFRPUlMgJiYgQyAmJiAhQ1tTUEVDSUVTXSkgZFAuZihDLCBTUEVDSUVTLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfVxuICB9KTtcbn07XG4iLCJ2YXIgZGVmID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIHRhZywgc3RhdCkge1xuICBpZiAoaXQgJiYgIWhhcyhpdCA9IHN0YXQgPyBpdCA6IGl0LnByb3RvdHlwZSwgVEFHKSkgZGVmKGl0LCBUQUcsIHsgY29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogdGFnIH0pO1xufTtcbiIsInZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgna2V5cycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBzaGFyZWRba2V5XSB8fCAoc2hhcmVkW2tleV0gPSB1aWQoa2V5KSk7XG59O1xuIiwidmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXyc7XG52YXIgc3RvcmUgPSBnbG9iYWxbU0hBUkVEXSB8fCAoZ2xvYmFsW1NIQVJFRF0gPSB7fSk7XG5cbihtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0gdmFsdWUgIT09IHVuZGVmaW5lZCA/IHZhbHVlIDoge30pO1xufSkoJ3ZlcnNpb25zJywgW10pLnB1c2goe1xuICB2ZXJzaW9uOiBjb3JlLnZlcnNpb24sXG4gIG1vZGU6IHJlcXVpcmUoJy4vX2xpYnJhcnknKSA/ICdwdXJlJyA6ICdnbG9iYWwnLFxuICBjb3B5cmlnaHQ6ICfCqSAyMDE4IERlbmlzIFB1c2hrYXJldiAoemxvaXJvY2sucnUpJ1xufSk7XG4iLCIvLyA3LjMuMjAgU3BlY2llc0NvbnN0cnVjdG9yKE8sIGRlZmF1bHRDb25zdHJ1Y3RvcilcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbnZhciBTUEVDSUVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE8sIEQpIHtcbiAgdmFyIEMgPSBhbk9iamVjdChPKS5jb25zdHJ1Y3RvcjtcbiAgdmFyIFM7XG4gIHJldHVybiBDID09PSB1bmRlZmluZWQgfHwgKFMgPSBhbk9iamVjdChDKVtTUEVDSUVTXSkgPT0gdW5kZWZpbmVkID8gRCA6IGFGdW5jdGlvbihTKTtcbn07XG4iLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG4vLyB0cnVlICAtPiBTdHJpbmcjYXRcbi8vIGZhbHNlIC0+IFN0cmluZyNjb2RlUG9pbnRBdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoVE9fU1RSSU5HKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodGhhdCwgcG9zKSB7XG4gICAgdmFyIHMgPSBTdHJpbmcoZGVmaW5lZCh0aGF0KSk7XG4gICAgdmFyIGkgPSB0b0ludGVnZXIocG9zKTtcbiAgICB2YXIgbCA9IHMubGVuZ3RoO1xuICAgIHZhciBhLCBiO1xuICAgIGlmIChpIDwgMCB8fCBpID49IGwpIHJldHVybiBUT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcbiAgICBhID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgIHJldHVybiBhIDwgMHhkODAwIHx8IGEgPiAweGRiZmYgfHwgaSArIDEgPT09IGwgfHwgKGIgPSBzLmNoYXJDb2RlQXQoaSArIDEpKSA8IDB4ZGMwMCB8fCBiID4gMHhkZmZmXG4gICAgICA/IFRPX1NUUklORyA/IHMuY2hhckF0KGkpIDogYVxuICAgICAgOiBUT19TVFJJTkcgPyBzLnNsaWNlKGksIGkgKyAyKSA6IChhIC0gMHhkODAwIDw8IDEwKSArIChiIC0gMHhkYzAwKSArIDB4MTAwMDA7XG4gIH07XG59O1xuIiwidmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGludm9rZSA9IHJlcXVpcmUoJy4vX2ludm9rZScpO1xudmFyIGh0bWwgPSByZXF1aXJlKCcuL19odG1sJyk7XG52YXIgY2VsID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciBzZXRUYXNrID0gZ2xvYmFsLnNldEltbWVkaWF0ZTtcbnZhciBjbGVhclRhc2sgPSBnbG9iYWwuY2xlYXJJbW1lZGlhdGU7XG52YXIgTWVzc2FnZUNoYW5uZWwgPSBnbG9iYWwuTWVzc2FnZUNoYW5uZWw7XG52YXIgRGlzcGF0Y2ggPSBnbG9iYWwuRGlzcGF0Y2g7XG52YXIgY291bnRlciA9IDA7XG52YXIgcXVldWUgPSB7fTtcbnZhciBPTlJFQURZU1RBVEVDSEFOR0UgPSAnb25yZWFkeXN0YXRlY2hhbmdlJztcbnZhciBkZWZlciwgY2hhbm5lbCwgcG9ydDtcbnZhciBydW4gPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBpZCA9ICt0aGlzO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG4gIGlmIChxdWV1ZS5oYXNPd25Qcm9wZXJ0eShpZCkpIHtcbiAgICB2YXIgZm4gPSBxdWV1ZVtpZF07XG4gICAgZGVsZXRlIHF1ZXVlW2lkXTtcbiAgICBmbigpO1xuICB9XG59O1xudmFyIGxpc3RlbmVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIHJ1bi5jYWxsKGV2ZW50LmRhdGEpO1xufTtcbi8vIE5vZGUuanMgMC45KyAmIElFMTArIGhhcyBzZXRJbW1lZGlhdGUsIG90aGVyd2lzZTpcbmlmICghc2V0VGFzayB8fCAhY2xlYXJUYXNrKSB7XG4gIHNldFRhc2sgPSBmdW5jdGlvbiBzZXRJbW1lZGlhdGUoZm4pIHtcbiAgICB2YXIgYXJncyA9IFtdO1xuICAgIHZhciBpID0gMTtcbiAgICB3aGlsZSAoYXJndW1lbnRzLmxlbmd0aCA+IGkpIGFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgcXVldWVbKytjb3VudGVyXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICAgICAgaW52b2tlKHR5cGVvZiBmbiA9PSAnZnVuY3Rpb24nID8gZm4gOiBGdW5jdGlvbihmbiksIGFyZ3MpO1xuICAgIH07XG4gICAgZGVmZXIoY291bnRlcik7XG4gICAgcmV0dXJuIGNvdW50ZXI7XG4gIH07XG4gIGNsZWFyVGFzayA9IGZ1bmN0aW9uIGNsZWFySW1tZWRpYXRlKGlkKSB7XG4gICAgZGVsZXRlIHF1ZXVlW2lkXTtcbiAgfTtcbiAgLy8gTm9kZS5qcyAwLjgtXG4gIGlmIChyZXF1aXJlKCcuL19jb2YnKShwcm9jZXNzKSA9PSAncHJvY2VzcycpIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhjdHgocnVuLCBpZCwgMSkpO1xuICAgIH07XG4gIC8vIFNwaGVyZSAoSlMgZ2FtZSBlbmdpbmUpIERpc3BhdGNoIEFQSVxuICB9IGVsc2UgaWYgKERpc3BhdGNoICYmIERpc3BhdGNoLm5vdykge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBEaXNwYXRjaC5ub3coY3R4KHJ1biwgaWQsIDEpKTtcbiAgICB9O1xuICAvLyBCcm93c2VycyB3aXRoIE1lc3NhZ2VDaGFubmVsLCBpbmNsdWRlcyBXZWJXb3JrZXJzXG4gIH0gZWxzZSBpZiAoTWVzc2FnZUNoYW5uZWwpIHtcbiAgICBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgcG9ydCA9IGNoYW5uZWwucG9ydDI7XG4gICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBsaXN0ZW5lcjtcbiAgICBkZWZlciA9IGN0eChwb3J0LnBvc3RNZXNzYWdlLCBwb3J0LCAxKTtcbiAgLy8gQnJvd3NlcnMgd2l0aCBwb3N0TWVzc2FnZSwgc2tpcCBXZWJXb3JrZXJzXG4gIC8vIElFOCBoYXMgcG9zdE1lc3NhZ2UsIGJ1dCBpdCdzIHN5bmMgJiB0eXBlb2YgaXRzIHBvc3RNZXNzYWdlIGlzICdvYmplY3QnXG4gIH0gZWxzZSBpZiAoZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIgJiYgdHlwZW9mIHBvc3RNZXNzYWdlID09ICdmdW5jdGlvbicgJiYgIWdsb2JhbC5pbXBvcnRTY3JpcHRzKSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShpZCArICcnLCAnKicpO1xuICAgIH07XG4gICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBsaXN0ZW5lciwgZmFsc2UpO1xuICAvLyBJRTgtXG4gIH0gZWxzZSBpZiAoT05SRUFEWVNUQVRFQ0hBTkdFIGluIGNlbCgnc2NyaXB0JykpIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgaHRtbC5hcHBlbmRDaGlsZChjZWwoJ3NjcmlwdCcpKVtPTlJFQURZU1RBVEVDSEFOR0VdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBodG1sLnJlbW92ZUNoaWxkKHRoaXMpO1xuICAgICAgICBydW4uY2FsbChpZCk7XG4gICAgICB9O1xuICAgIH07XG4gIC8vIFJlc3Qgb2xkIGJyb3dzZXJzXG4gIH0gZWxzZSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIHNldFRpbWVvdXQoY3R4KHJ1biwgaWQsIDEpLCAwKTtcbiAgICB9O1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiBzZXRUYXNrLFxuICBjbGVhcjogY2xlYXJUYXNrXG59O1xuIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBtYXggPSBNYXRoLm1heDtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGluZGV4LCBsZW5ndGgpIHtcbiAgaW5kZXggPSB0b0ludGVnZXIoaW5kZXgpO1xuICByZXR1cm4gaW5kZXggPCAwID8gbWF4KGluZGV4ICsgbGVuZ3RoLCAwKSA6IG1pbihpbmRleCwgbGVuZ3RoKTtcbn07XG4iLCIvLyA3LjEuNCBUb0ludGVnZXJcbnZhciBjZWlsID0gTWF0aC5jZWlsO1xudmFyIGZsb29yID0gTWF0aC5mbG9vcjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xufTtcbiIsIi8vIHRvIGluZGV4ZWQgb2JqZWN0LCB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0Jyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBJT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG4iLCIvLyA3LjEuMTUgVG9MZW5ndGhcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgbWluID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgPiAwID8gbWluKHRvSW50ZWdlcihpdCksIDB4MWZmZmZmZmZmZmZmZmYpIDogMDsgLy8gcG93KDIsIDUzKSAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcbiIsIi8vIDcuMS4xMyBUb09iamVjdChhcmd1bWVudClcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIE9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuIiwiLy8gNy4xLjEgVG9QcmltaXRpdmUoaW5wdXQgWywgUHJlZmVycmVkVHlwZV0pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIFMpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHJldHVybiBpdDtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmIChTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAodHlwZW9mIChmbiA9IGl0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKCFTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59O1xuIiwidmFyIGlkID0gMDtcbnZhciBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgbmF2aWdhdG9yID0gZ2xvYmFsLm5hdmlnYXRvcjtcblxubW9kdWxlLmV4cG9ydHMgPSBuYXZpZ2F0b3IgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCB8fCAnJztcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIFRZUEUpIHtcbiAgaWYgKCFpc09iamVjdChpdCkgfHwgaXQuX3QgIT09IFRZUEUpIHRocm93IFR5cGVFcnJvcignSW5jb21wYXRpYmxlIHJlY2VpdmVyLCAnICsgVFlQRSArICcgcmVxdWlyZWQhJyk7XG4gIHJldHVybiBpdDtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBMSUJSQVJZID0gcmVxdWlyZSgnLi9fbGlicmFyeScpO1xudmFyIHdrc0V4dCA9IHJlcXVpcmUoJy4vX3drcy1leHQnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHZhciAkU3ltYm9sID0gY29yZS5TeW1ib2wgfHwgKGNvcmUuU3ltYm9sID0gTElCUkFSWSA/IHt9IDogZ2xvYmFsLlN5bWJvbCB8fCB7fSk7XG4gIGlmIChuYW1lLmNoYXJBdCgwKSAhPSAnXycgJiYgIShuYW1lIGluICRTeW1ib2wpKSBkZWZpbmVQcm9wZXJ0eSgkU3ltYm9sLCBuYW1lLCB7IHZhbHVlOiB3a3NFeHQuZihuYW1lKSB9KTtcbn07XG4iLCJleHBvcnRzLmYgPSByZXF1aXJlKCcuL193a3MnKTtcbiIsInZhciBzdG9yZSA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCd3a3MnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbnZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5TeW1ib2w7XG52YXIgVVNFX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcblxudmFyICRleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gc3RvcmVbbmFtZV0gfHwgKHN0b3JlW25hbWVdID1cbiAgICBVU0VfU1lNQk9MICYmIFN5bWJvbFtuYW1lXSB8fCAoVVNFX1NZTUJPTCA/IFN5bWJvbCA6IHVpZCkoJ1N5bWJvbC4nICsgbmFtZSkpO1xufTtcblxuJGV4cG9ydHMuc3RvcmUgPSBzdG9yZTtcbiIsInZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpO1xudmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvcmUnKS5nZXRJdGVyYXRvck1ldGhvZCA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgIT0gdW5kZWZpbmVkKSByZXR1cm4gaXRbSVRFUkFUT1JdXG4gICAgfHwgaXRbJ0BAaXRlcmF0b3InXVxuICAgIHx8IEl0ZXJhdG9yc1tjbGFzc29mKGl0KV07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMjIuMS4zLjggQXJyYXkucHJvdG90eXBlLmZpbmQocHJlZGljYXRlLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciAkZmluZCA9IHJlcXVpcmUoJy4vX2FycmF5LW1ldGhvZHMnKSg1KTtcbnZhciBLRVkgPSAnZmluZCc7XG52YXIgZm9yY2VkID0gdHJ1ZTtcbi8vIFNob3VsZG4ndCBza2lwIGhvbGVzXG5pZiAoS0VZIGluIFtdKSBBcnJheSgxKVtLRVldKGZ1bmN0aW9uICgpIHsgZm9yY2VkID0gZmFsc2U7IH0pO1xuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiBmb3JjZWQsICdBcnJheScsIHtcbiAgZmluZDogZnVuY3Rpb24gZmluZChjYWxsYmFja2ZuIC8qICwgdGhhdCA9IHVuZGVmaW5lZCAqLykge1xuICAgIHJldHVybiAkZmluZCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xucmVxdWlyZSgnLi9fYWRkLXRvLXVuc2NvcGFibGVzJykoS0VZKTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciBjYWxsID0gcmVxdWlyZSgnLi9faXRlci1jYWxsJyk7XG52YXIgaXNBcnJheUl0ZXIgPSByZXF1aXJlKCcuL19pcy1hcnJheS1pdGVyJyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX2NyZWF0ZS1wcm9wZXJ0eScpO1xudmFyIGdldEl0ZXJGbiA9IHJlcXVpcmUoJy4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIXJlcXVpcmUoJy4vX2l0ZXItZGV0ZWN0JykoZnVuY3Rpb24gKGl0ZXIpIHsgQXJyYXkuZnJvbShpdGVyKTsgfSksICdBcnJheScsIHtcbiAgLy8gMjIuMS4yLjEgQXJyYXkuZnJvbShhcnJheUxpa2UsIG1hcGZuID0gdW5kZWZpbmVkLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxuICBmcm9tOiBmdW5jdGlvbiBmcm9tKGFycmF5TGlrZSAvKiAsIG1hcGZuID0gdW5kZWZpbmVkLCB0aGlzQXJnID0gdW5kZWZpbmVkICovKSB7XG4gICAgdmFyIE8gPSB0b09iamVjdChhcnJheUxpa2UpO1xuICAgIHZhciBDID0gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyA/IHRoaXMgOiBBcnJheTtcbiAgICB2YXIgYUxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgdmFyIG1hcGZuID0gYUxlbiA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQ7XG4gICAgdmFyIG1hcHBpbmcgPSBtYXBmbiAhPT0gdW5kZWZpbmVkO1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgdmFyIGl0ZXJGbiA9IGdldEl0ZXJGbihPKTtcbiAgICB2YXIgbGVuZ3RoLCByZXN1bHQsIHN0ZXAsIGl0ZXJhdG9yO1xuICAgIGlmIChtYXBwaW5nKSBtYXBmbiA9IGN0eChtYXBmbiwgYUxlbiA+IDIgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWQsIDIpO1xuICAgIC8vIGlmIG9iamVjdCBpc24ndCBpdGVyYWJsZSBvciBpdCdzIGFycmF5IHdpdGggZGVmYXVsdCBpdGVyYXRvciAtIHVzZSBzaW1wbGUgY2FzZVxuICAgIGlmIChpdGVyRm4gIT0gdW5kZWZpbmVkICYmICEoQyA9PSBBcnJheSAmJiBpc0FycmF5SXRlcihpdGVyRm4pKSkge1xuICAgICAgZm9yIChpdGVyYXRvciA9IGl0ZXJGbi5jYWxsKE8pLCByZXN1bHQgPSBuZXcgQygpOyAhKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7IGluZGV4KyspIHtcbiAgICAgICAgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBpbmRleCwgbWFwcGluZyA/IGNhbGwoaXRlcmF0b3IsIG1hcGZuLCBbc3RlcC52YWx1ZSwgaW5kZXhdLCB0cnVlKSA6IHN0ZXAudmFsdWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgICBmb3IgKHJlc3VsdCA9IG5ldyBDKGxlbmd0aCk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKSB7XG4gICAgICAgIGNyZWF0ZVByb3BlcnR5KHJlc3VsdCwgaW5kZXgsIG1hcHBpbmcgPyBtYXBmbihPW2luZGV4XSwgaW5kZXgpIDogT1tpbmRleF0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXN1bHQubGVuZ3RoID0gaW5kZXg7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4vX2FkZC10by11bnNjb3BhYmxlcycpO1xudmFyIHN0ZXAgPSByZXF1aXJlKCcuL19pdGVyLXN0ZXAnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG5cbi8vIDIyLjEuMy40IEFycmF5LnByb3RvdHlwZS5lbnRyaWVzKClcbi8vIDIyLjEuMy4xMyBBcnJheS5wcm90b3R5cGUua2V5cygpXG4vLyAyMi4xLjMuMjkgQXJyYXkucHJvdG90eXBlLnZhbHVlcygpXG4vLyAyMi4xLjMuMzAgQXJyYXkucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShBcnJheSwgJ0FycmF5JywgZnVuY3Rpb24gKGl0ZXJhdGVkLCBraW5kKSB7XG4gIHRoaXMuX3QgPSB0b0lPYmplY3QoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbiAgdGhpcy5fayA9IGtpbmQ7ICAgICAgICAgICAgICAgIC8vIGtpbmRcbi8vIDIyLjEuNS4yLjEgJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24gKCkge1xuICB2YXIgTyA9IHRoaXMuX3Q7XG4gIHZhciBraW5kID0gdGhpcy5faztcbiAgdmFyIGluZGV4ID0gdGhpcy5faSsrO1xuICBpZiAoIU8gfHwgaW5kZXggPj0gTy5sZW5ndGgpIHtcbiAgICB0aGlzLl90ID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiBzdGVwKDEpO1xuICB9XG4gIGlmIChraW5kID09ICdrZXlzJykgcmV0dXJuIHN0ZXAoMCwgaW5kZXgpO1xuICBpZiAoa2luZCA9PSAndmFsdWVzJykgcmV0dXJuIHN0ZXAoMCwgT1tpbmRleF0pO1xuICByZXR1cm4gc3RlcCgwLCBbaW5kZXgsIE9baW5kZXhdXSk7XG59LCAndmFsdWVzJyk7XG5cbi8vIGFyZ3VtZW50c0xpc3RbQEBpdGVyYXRvcl0gaXMgJUFycmF5UHJvdG9fdmFsdWVzJSAoOS40LjQuNiwgOS40LjQuNylcbkl0ZXJhdG9ycy5Bcmd1bWVudHMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbmFkZFRvVW5zY29wYWJsZXMoJ2tleXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ3ZhbHVlcycpO1xuYWRkVG9VbnNjb3BhYmxlcygnZW50cmllcycpO1xuIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBGUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGU7XG52YXIgbmFtZVJFID0gL15cXHMqZnVuY3Rpb24gKFteIChdKikvO1xudmFyIE5BTUUgPSAnbmFtZSc7XG5cbi8vIDE5LjIuNC4yIG5hbWVcbk5BTUUgaW4gRlByb3RvIHx8IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgZFAoRlByb3RvLCBOQU1FLCB7XG4gIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiAoJycgKyB0aGlzKS5tYXRjaChuYW1lUkUpWzFdO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHN0cm9uZyA9IHJlcXVpcmUoJy4vX2NvbGxlY3Rpb24tc3Ryb25nJyk7XG52YXIgdmFsaWRhdGUgPSByZXF1aXJlKCcuL192YWxpZGF0ZS1jb2xsZWN0aW9uJyk7XG52YXIgTUFQID0gJ01hcCc7XG5cbi8vIDIzLjEgTWFwIE9iamVjdHNcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29sbGVjdGlvbicpKE1BUCwgZnVuY3Rpb24gKGdldCkge1xuICByZXR1cm4gZnVuY3Rpb24gTWFwKCkgeyByZXR1cm4gZ2V0KHRoaXMsIGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTsgfTtcbn0sIHtcbiAgLy8gMjMuMS4zLjYgTWFwLnByb3RvdHlwZS5nZXQoa2V5KVxuICBnZXQ6IGZ1bmN0aW9uIGdldChrZXkpIHtcbiAgICB2YXIgZW50cnkgPSBzdHJvbmcuZ2V0RW50cnkodmFsaWRhdGUodGhpcywgTUFQKSwga2V5KTtcbiAgICByZXR1cm4gZW50cnkgJiYgZW50cnkudjtcbiAgfSxcbiAgLy8gMjMuMS4zLjkgTWFwLnByb3RvdHlwZS5zZXQoa2V5LCB2YWx1ZSlcbiAgc2V0OiBmdW5jdGlvbiBzZXQoa2V5LCB2YWx1ZSkge1xuICAgIHJldHVybiBzdHJvbmcuZGVmKHZhbGlkYXRlKHRoaXMsIE1BUCksIGtleSA9PT0gMCA/IDAgOiBrZXksIHZhbHVlKTtcbiAgfVxufSwgc3Ryb25nLCB0cnVlKTtcbiIsIi8vIDE5LjEuMy4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiwgJ09iamVjdCcsIHsgYXNzaWduOiByZXF1aXJlKCcuL19vYmplY3QtYXNzaWduJykgfSk7XG4iLCIvLyAxOS4xLjIuMTQgT2JqZWN0LmtleXMoTylcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxucmVxdWlyZSgnLi9fb2JqZWN0LXNhcCcpKCdrZXlzJywgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZnVuY3Rpb24ga2V5cyhpdCkge1xuICAgIHJldHVybiAka2V5cyh0b09iamVjdChpdCkpO1xuICB9O1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbnZhciBhbkluc3RhbmNlID0gcmVxdWlyZSgnLi9fYW4taW5zdGFuY2UnKTtcbnZhciBmb3JPZiA9IHJlcXVpcmUoJy4vX2Zvci1vZicpO1xudmFyIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4vX3NwZWNpZXMtY29uc3RydWN0b3InKTtcbnZhciB0YXNrID0gcmVxdWlyZSgnLi9fdGFzaycpLnNldDtcbnZhciBtaWNyb3Rhc2sgPSByZXF1aXJlKCcuL19taWNyb3Rhc2snKSgpO1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlID0gcmVxdWlyZSgnLi9fbmV3LXByb21pc2UtY2FwYWJpbGl0eScpO1xudmFyIHBlcmZvcm0gPSByZXF1aXJlKCcuL19wZXJmb3JtJyk7XG52YXIgdXNlckFnZW50ID0gcmVxdWlyZSgnLi9fdXNlci1hZ2VudCcpO1xudmFyIHByb21pc2VSZXNvbHZlID0gcmVxdWlyZSgnLi9fcHJvbWlzZS1yZXNvbHZlJyk7XG52YXIgUFJPTUlTRSA9ICdQcm9taXNlJztcbnZhciBUeXBlRXJyb3IgPSBnbG9iYWwuVHlwZUVycm9yO1xudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciB2ZXJzaW9ucyA9IHByb2Nlc3MgJiYgcHJvY2Vzcy52ZXJzaW9ucztcbnZhciB2OCA9IHZlcnNpb25zICYmIHZlcnNpb25zLnY4IHx8ICcnO1xudmFyICRQcm9taXNlID0gZ2xvYmFsW1BST01JU0VdO1xudmFyIGlzTm9kZSA9IGNsYXNzb2YocHJvY2VzcykgPT0gJ3Byb2Nlc3MnO1xudmFyIGVtcHR5ID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xudmFyIEludGVybmFsLCBuZXdHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHksIE93blByb21pc2VDYXBhYmlsaXR5LCBXcmFwcGVyO1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gbmV3R2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUuZjtcblxudmFyIFVTRV9OQVRJVkUgPSAhIWZ1bmN0aW9uICgpIHtcbiAgdHJ5IHtcbiAgICAvLyBjb3JyZWN0IHN1YmNsYXNzaW5nIHdpdGggQEBzcGVjaWVzIHN1cHBvcnRcbiAgICB2YXIgcHJvbWlzZSA9ICRQcm9taXNlLnJlc29sdmUoMSk7XG4gICAgdmFyIEZha2VQcm9taXNlID0gKHByb21pc2UuY29uc3RydWN0b3IgPSB7fSlbcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKV0gPSBmdW5jdGlvbiAoZXhlYykge1xuICAgICAgZXhlYyhlbXB0eSwgZW1wdHkpO1xuICAgIH07XG4gICAgLy8gdW5oYW5kbGVkIHJlamVjdGlvbnMgdHJhY2tpbmcgc3VwcG9ydCwgTm9kZUpTIFByb21pc2Ugd2l0aG91dCBpdCBmYWlscyBAQHNwZWNpZXMgdGVzdFxuICAgIHJldHVybiAoaXNOb2RlIHx8IHR5cGVvZiBQcm9taXNlUmVqZWN0aW9uRXZlbnQgPT0gJ2Z1bmN0aW9uJylcbiAgICAgICYmIHByb21pc2UudGhlbihlbXB0eSkgaW5zdGFuY2VvZiBGYWtlUHJvbWlzZVxuICAgICAgLy8gdjggNi42IChOb2RlIDEwIGFuZCBDaHJvbWUgNjYpIGhhdmUgYSBidWcgd2l0aCByZXNvbHZpbmcgY3VzdG9tIHRoZW5hYmxlc1xuICAgICAgLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9ODMwNTY1XG4gICAgICAvLyB3ZSBjYW4ndCBkZXRlY3QgaXQgc3luY2hyb25vdXNseSwgc28ganVzdCBjaGVjayB2ZXJzaW9uc1xuICAgICAgJiYgdjguaW5kZXhPZignNi42JykgIT09IDBcbiAgICAgICYmIHVzZXJBZ2VudC5pbmRleE9mKCdDaHJvbWUvNjYnKSA9PT0gLTE7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxufSgpO1xuXG4vLyBoZWxwZXJzXG52YXIgaXNUaGVuYWJsZSA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgdGhlbjtcbiAgcmV0dXJuIGlzT2JqZWN0KGl0KSAmJiB0eXBlb2YgKHRoZW4gPSBpdC50aGVuKSA9PSAnZnVuY3Rpb24nID8gdGhlbiA6IGZhbHNlO1xufTtcbnZhciBub3RpZnkgPSBmdW5jdGlvbiAocHJvbWlzZSwgaXNSZWplY3QpIHtcbiAgaWYgKHByb21pc2UuX24pIHJldHVybjtcbiAgcHJvbWlzZS5fbiA9IHRydWU7XG4gIHZhciBjaGFpbiA9IHByb21pc2UuX2M7XG4gIG1pY3JvdGFzayhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHZhbHVlID0gcHJvbWlzZS5fdjtcbiAgICB2YXIgb2sgPSBwcm9taXNlLl9zID09IDE7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBydW4gPSBmdW5jdGlvbiAocmVhY3Rpb24pIHtcbiAgICAgIHZhciBoYW5kbGVyID0gb2sgPyByZWFjdGlvbi5vayA6IHJlYWN0aW9uLmZhaWw7XG4gICAgICB2YXIgcmVzb2x2ZSA9IHJlYWN0aW9uLnJlc29sdmU7XG4gICAgICB2YXIgcmVqZWN0ID0gcmVhY3Rpb24ucmVqZWN0O1xuICAgICAgdmFyIGRvbWFpbiA9IHJlYWN0aW9uLmRvbWFpbjtcbiAgICAgIHZhciByZXN1bHQsIHRoZW4sIGV4aXRlZDtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICAgICAgaWYgKCFvaykge1xuICAgICAgICAgICAgaWYgKHByb21pc2UuX2ggPT0gMikgb25IYW5kbGVVbmhhbmRsZWQocHJvbWlzZSk7XG4gICAgICAgICAgICBwcm9taXNlLl9oID0gMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGhhbmRsZXIgPT09IHRydWUpIHJlc3VsdCA9IHZhbHVlO1xuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGRvbWFpbikgZG9tYWluLmVudGVyKCk7XG4gICAgICAgICAgICByZXN1bHQgPSBoYW5kbGVyKHZhbHVlKTsgLy8gbWF5IHRocm93XG4gICAgICAgICAgICBpZiAoZG9tYWluKSB7XG4gICAgICAgICAgICAgIGRvbWFpbi5leGl0KCk7XG4gICAgICAgICAgICAgIGV4aXRlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChyZXN1bHQgPT09IHJlYWN0aW9uLnByb21pc2UpIHtcbiAgICAgICAgICAgIHJlamVjdChUeXBlRXJyb3IoJ1Byb21pc2UtY2hhaW4gY3ljbGUnKSk7XG4gICAgICAgICAgfSBlbHNlIGlmICh0aGVuID0gaXNUaGVuYWJsZShyZXN1bHQpKSB7XG4gICAgICAgICAgICB0aGVuLmNhbGwocmVzdWx0LCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0gZWxzZSByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0gZWxzZSByZWplY3QodmFsdWUpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZiAoZG9tYWluICYmICFleGl0ZWQpIGRvbWFpbi5leGl0KCk7XG4gICAgICAgIHJlamVjdChlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHdoaWxlIChjaGFpbi5sZW5ndGggPiBpKSBydW4oY2hhaW5baSsrXSk7IC8vIHZhcmlhYmxlIGxlbmd0aCAtIGNhbid0IHVzZSBmb3JFYWNoXG4gICAgcHJvbWlzZS5fYyA9IFtdO1xuICAgIHByb21pc2UuX24gPSBmYWxzZTtcbiAgICBpZiAoaXNSZWplY3QgJiYgIXByb21pc2UuX2gpIG9uVW5oYW5kbGVkKHByb21pc2UpO1xuICB9KTtcbn07XG52YXIgb25VbmhhbmRsZWQgPSBmdW5jdGlvbiAocHJvbWlzZSkge1xuICB0YXNrLmNhbGwoZ2xvYmFsLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHZhbHVlID0gcHJvbWlzZS5fdjtcbiAgICB2YXIgdW5oYW5kbGVkID0gaXNVbmhhbmRsZWQocHJvbWlzZSk7XG4gICAgdmFyIHJlc3VsdCwgaGFuZGxlciwgY29uc29sZTtcbiAgICBpZiAodW5oYW5kbGVkKSB7XG4gICAgICByZXN1bHQgPSBwZXJmb3JtKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGlzTm9kZSkge1xuICAgICAgICAgIHByb2Nlc3MuZW1pdCgndW5oYW5kbGVkUmVqZWN0aW9uJywgdmFsdWUsIHByb21pc2UpO1xuICAgICAgICB9IGVsc2UgaWYgKGhhbmRsZXIgPSBnbG9iYWwub251bmhhbmRsZWRyZWplY3Rpb24pIHtcbiAgICAgICAgICBoYW5kbGVyKHsgcHJvbWlzZTogcHJvbWlzZSwgcmVhc29uOiB2YWx1ZSB9KTtcbiAgICAgICAgfSBlbHNlIGlmICgoY29uc29sZSA9IGdsb2JhbC5jb25zb2xlKSAmJiBjb25zb2xlLmVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignVW5oYW5kbGVkIHByb21pc2UgcmVqZWN0aW9uJywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIC8vIEJyb3dzZXJzIHNob3VsZCBub3QgdHJpZ2dlciBgcmVqZWN0aW9uSGFuZGxlZGAgZXZlbnQgaWYgaXQgd2FzIGhhbmRsZWQgaGVyZSwgTm9kZUpTIC0gc2hvdWxkXG4gICAgICBwcm9taXNlLl9oID0gaXNOb2RlIHx8IGlzVW5oYW5kbGVkKHByb21pc2UpID8gMiA6IDE7XG4gICAgfSBwcm9taXNlLl9hID0gdW5kZWZpbmVkO1xuICAgIGlmICh1bmhhbmRsZWQgJiYgcmVzdWx0LmUpIHRocm93IHJlc3VsdC52O1xuICB9KTtcbn07XG52YXIgaXNVbmhhbmRsZWQgPSBmdW5jdGlvbiAocHJvbWlzZSkge1xuICByZXR1cm4gcHJvbWlzZS5faCAhPT0gMSAmJiAocHJvbWlzZS5fYSB8fCBwcm9taXNlLl9jKS5sZW5ndGggPT09IDA7XG59O1xudmFyIG9uSGFuZGxlVW5oYW5kbGVkID0gZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBoYW5kbGVyO1xuICAgIGlmIChpc05vZGUpIHtcbiAgICAgIHByb2Nlc3MuZW1pdCgncmVqZWN0aW9uSGFuZGxlZCcsIHByb21pc2UpO1xuICAgIH0gZWxzZSBpZiAoaGFuZGxlciA9IGdsb2JhbC5vbnJlamVjdGlvbmhhbmRsZWQpIHtcbiAgICAgIGhhbmRsZXIoeyBwcm9taXNlOiBwcm9taXNlLCByZWFzb246IHByb21pc2UuX3YgfSk7XG4gICAgfVxuICB9KTtcbn07XG52YXIgJHJlamVjdCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICB2YXIgcHJvbWlzZSA9IHRoaXM7XG4gIGlmIChwcm9taXNlLl9kKSByZXR1cm47XG4gIHByb21pc2UuX2QgPSB0cnVlO1xuICBwcm9taXNlID0gcHJvbWlzZS5fdyB8fCBwcm9taXNlOyAvLyB1bndyYXBcbiAgcHJvbWlzZS5fdiA9IHZhbHVlO1xuICBwcm9taXNlLl9zID0gMjtcbiAgaWYgKCFwcm9taXNlLl9hKSBwcm9taXNlLl9hID0gcHJvbWlzZS5fYy5zbGljZSgpO1xuICBub3RpZnkocHJvbWlzZSwgdHJ1ZSk7XG59O1xudmFyICRyZXNvbHZlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHZhciBwcm9taXNlID0gdGhpcztcbiAgdmFyIHRoZW47XG4gIGlmIChwcm9taXNlLl9kKSByZXR1cm47XG4gIHByb21pc2UuX2QgPSB0cnVlO1xuICBwcm9taXNlID0gcHJvbWlzZS5fdyB8fCBwcm9taXNlOyAvLyB1bndyYXBcbiAgdHJ5IHtcbiAgICBpZiAocHJvbWlzZSA9PT0gdmFsdWUpIHRocm93IFR5cGVFcnJvcihcIlByb21pc2UgY2FuJ3QgYmUgcmVzb2x2ZWQgaXRzZWxmXCIpO1xuICAgIGlmICh0aGVuID0gaXNUaGVuYWJsZSh2YWx1ZSkpIHtcbiAgICAgIG1pY3JvdGFzayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB3cmFwcGVyID0geyBfdzogcHJvbWlzZSwgX2Q6IGZhbHNlIH07IC8vIHdyYXBcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0aGVuLmNhbGwodmFsdWUsIGN0eCgkcmVzb2x2ZSwgd3JhcHBlciwgMSksIGN0eCgkcmVqZWN0LCB3cmFwcGVyLCAxKSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAkcmVqZWN0LmNhbGwod3JhcHBlciwgZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9taXNlLl92ID0gdmFsdWU7XG4gICAgICBwcm9taXNlLl9zID0gMTtcbiAgICAgIG5vdGlmeShwcm9taXNlLCBmYWxzZSk7XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgJHJlamVjdC5jYWxsKHsgX3c6IHByb21pc2UsIF9kOiBmYWxzZSB9LCBlKTsgLy8gd3JhcFxuICB9XG59O1xuXG4vLyBjb25zdHJ1Y3RvciBwb2x5ZmlsbFxuaWYgKCFVU0VfTkFUSVZFKSB7XG4gIC8vIDI1LjQuMy4xIFByb21pc2UoZXhlY3V0b3IpXG4gICRQcm9taXNlID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcikge1xuICAgIGFuSW5zdGFuY2UodGhpcywgJFByb21pc2UsIFBST01JU0UsICdfaCcpO1xuICAgIGFGdW5jdGlvbihleGVjdXRvcik7XG4gICAgSW50ZXJuYWwuY2FsbCh0aGlzKTtcbiAgICB0cnkge1xuICAgICAgZXhlY3V0b3IoY3R4KCRyZXNvbHZlLCB0aGlzLCAxKSwgY3R4KCRyZWplY3QsIHRoaXMsIDEpKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICRyZWplY3QuY2FsbCh0aGlzLCBlcnIpO1xuICAgIH1cbiAgfTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gIEludGVybmFsID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcikge1xuICAgIHRoaXMuX2MgPSBbXTsgICAgICAgICAgICAgLy8gPC0gYXdhaXRpbmcgcmVhY3Rpb25zXG4gICAgdGhpcy5fYSA9IHVuZGVmaW5lZDsgICAgICAvLyA8LSBjaGVja2VkIGluIGlzVW5oYW5kbGVkIHJlYWN0aW9uc1xuICAgIHRoaXMuX3MgPSAwOyAgICAgICAgICAgICAgLy8gPC0gc3RhdGVcbiAgICB0aGlzLl9kID0gZmFsc2U7ICAgICAgICAgIC8vIDwtIGRvbmVcbiAgICB0aGlzLl92ID0gdW5kZWZpbmVkOyAgICAgIC8vIDwtIHZhbHVlXG4gICAgdGhpcy5faCA9IDA7ICAgICAgICAgICAgICAvLyA8LSByZWplY3Rpb24gc3RhdGUsIDAgLSBkZWZhdWx0LCAxIC0gaGFuZGxlZCwgMiAtIHVuaGFuZGxlZFxuICAgIHRoaXMuX24gPSBmYWxzZTsgICAgICAgICAgLy8gPC0gbm90aWZ5XG4gIH07XG4gIEludGVybmFsLnByb3RvdHlwZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lLWFsbCcpKCRQcm9taXNlLnByb3RvdHlwZSwge1xuICAgIC8vIDI1LjQuNS4zIFByb21pc2UucHJvdG90eXBlLnRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpXG4gICAgdGhlbjogZnVuY3Rpb24gdGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkge1xuICAgICAgdmFyIHJlYWN0aW9uID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoc3BlY2llc0NvbnN0cnVjdG9yKHRoaXMsICRQcm9taXNlKSk7XG4gICAgICByZWFjdGlvbi5vayA9IHR5cGVvZiBvbkZ1bGZpbGxlZCA9PSAnZnVuY3Rpb24nID8gb25GdWxmaWxsZWQgOiB0cnVlO1xuICAgICAgcmVhY3Rpb24uZmFpbCA9IHR5cGVvZiBvblJlamVjdGVkID09ICdmdW5jdGlvbicgJiYgb25SZWplY3RlZDtcbiAgICAgIHJlYWN0aW9uLmRvbWFpbiA9IGlzTm9kZSA/IHByb2Nlc3MuZG9tYWluIDogdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fYy5wdXNoKHJlYWN0aW9uKTtcbiAgICAgIGlmICh0aGlzLl9hKSB0aGlzLl9hLnB1c2gocmVhY3Rpb24pO1xuICAgICAgaWYgKHRoaXMuX3MpIG5vdGlmeSh0aGlzLCBmYWxzZSk7XG4gICAgICByZXR1cm4gcmVhY3Rpb24ucHJvbWlzZTtcbiAgICB9LFxuICAgIC8vIDI1LjQuNS4xIFByb21pc2UucHJvdG90eXBlLmNhdGNoKG9uUmVqZWN0ZWQpXG4gICAgJ2NhdGNoJzogZnVuY3Rpb24gKG9uUmVqZWN0ZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLnRoZW4odW5kZWZpbmVkLCBvblJlamVjdGVkKTtcbiAgICB9XG4gIH0pO1xuICBPd25Qcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBJbnRlcm5hbCgpO1xuICAgIHRoaXMucHJvbWlzZSA9IHByb21pc2U7XG4gICAgdGhpcy5yZXNvbHZlID0gY3R4KCRyZXNvbHZlLCBwcm9taXNlLCAxKTtcbiAgICB0aGlzLnJlamVjdCA9IGN0eCgkcmVqZWN0LCBwcm9taXNlLCAxKTtcbiAgfTtcbiAgbmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUuZiA9IG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24gKEMpIHtcbiAgICByZXR1cm4gQyA9PT0gJFByb21pc2UgfHwgQyA9PT0gV3JhcHBlclxuICAgICAgPyBuZXcgT3duUHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICAgIDogbmV3R2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5KEMpO1xuICB9O1xufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7IFByb21pc2U6ICRQcm9taXNlIH0pO1xucmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKSgkUHJvbWlzZSwgUFJPTUlTRSk7XG5yZXF1aXJlKCcuL19zZXQtc3BlY2llcycpKFBST01JU0UpO1xuV3JhcHBlciA9IHJlcXVpcmUoJy4vX2NvcmUnKVtQUk9NSVNFXTtcblxuLy8gc3RhdGljc1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuNSBQcm9taXNlLnJlamVjdChyKVxuICByZWplY3Q6IGZ1bmN0aW9uIHJlamVjdChyKSB7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSh0aGlzKTtcbiAgICB2YXIgJCRyZWplY3QgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICAkJHJlamVjdChyKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKExJQlJBUlkgfHwgIVVTRV9OQVRJVkUpLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC42IFByb21pc2UucmVzb2x2ZSh4KVxuICByZXNvbHZlOiBmdW5jdGlvbiByZXNvbHZlKHgpIHtcbiAgICByZXR1cm4gcHJvbWlzZVJlc29sdmUoTElCUkFSWSAmJiB0aGlzID09PSBXcmFwcGVyID8gJFByb21pc2UgOiB0aGlzLCB4KTtcbiAgfVxufSk7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICEoVVNFX05BVElWRSAmJiByZXF1aXJlKCcuL19pdGVyLWRldGVjdCcpKGZ1bmN0aW9uIChpdGVyKSB7XG4gICRQcm9taXNlLmFsbChpdGVyKVsnY2F0Y2gnXShlbXB0eSk7XG59KSksIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjEgUHJvbWlzZS5hbGwoaXRlcmFibGUpXG4gIGFsbDogZnVuY3Rpb24gYWxsKGl0ZXJhYmxlKSB7XG4gICAgdmFyIEMgPSB0aGlzO1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQyk7XG4gICAgdmFyIHJlc29sdmUgPSBjYXBhYmlsaXR5LnJlc29sdmU7XG4gICAgdmFyIHJlamVjdCA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciByZXN1bHQgPSBwZXJmb3JtKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciB2YWx1ZXMgPSBbXTtcbiAgICAgIHZhciBpbmRleCA9IDA7XG4gICAgICB2YXIgcmVtYWluaW5nID0gMTtcbiAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgICAgICAgdmFyICRpbmRleCA9IGluZGV4Kys7XG4gICAgICAgIHZhciBhbHJlYWR5Q2FsbGVkID0gZmFsc2U7XG4gICAgICAgIHZhbHVlcy5wdXNoKHVuZGVmaW5lZCk7XG4gICAgICAgIHJlbWFpbmluZysrO1xuICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICBpZiAoYWxyZWFkeUNhbGxlZCkgcmV0dXJuO1xuICAgICAgICAgIGFscmVhZHlDYWxsZWQgPSB0cnVlO1xuICAgICAgICAgIHZhbHVlc1skaW5kZXhdID0gdmFsdWU7XG4gICAgICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgfSk7XG4gICAgaWYgKHJlc3VsdC5lKSByZWplY3QocmVzdWx0LnYpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH0sXG4gIC8vIDI1LjQuNC40IFByb21pc2UucmFjZShpdGVyYWJsZSlcbiAgcmFjZTogZnVuY3Rpb24gcmFjZShpdGVyYWJsZSkge1xuICAgIHZhciBDID0gdGhpcztcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KEMpO1xuICAgIHZhciByZWplY3QgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICB2YXIgcmVzdWx0ID0gcGVyZm9ybShmdW5jdGlvbiAoKSB7XG4gICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gICAgICAgIEMucmVzb2x2ZShwcm9taXNlKS50aGVuKGNhcGFiaWxpdHkucmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGlmIChyZXN1bHQuZSkgcmVqZWN0KHJlc3VsdC52KTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbiIsIi8vIDIxLjIuNS4zIGdldCBSZWdFeHAucHJvdG90eXBlLmZsYWdzKClcbmlmIChyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmIC8uL2cuZmxhZ3MgIT0gJ2cnKSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mKFJlZ0V4cC5wcm90b3R5cGUsICdmbGFncycsIHtcbiAgY29uZmlndXJhYmxlOiB0cnVlLFxuICBnZXQ6IHJlcXVpcmUoJy4vX2ZsYWdzJylcbn0pO1xuIiwiLy8gQEBzcGxpdCBsb2dpY1xucmVxdWlyZSgnLi9fZml4LXJlLXdrcycpKCdzcGxpdCcsIDIsIGZ1bmN0aW9uIChkZWZpbmVkLCBTUExJVCwgJHNwbGl0KSB7XG4gICd1c2Ugc3RyaWN0JztcbiAgdmFyIGlzUmVnRXhwID0gcmVxdWlyZSgnLi9faXMtcmVnZXhwJyk7XG4gIHZhciBfc3BsaXQgPSAkc3BsaXQ7XG4gIHZhciAkcHVzaCA9IFtdLnB1c2g7XG4gIHZhciAkU1BMSVQgPSAnc3BsaXQnO1xuICB2YXIgTEVOR1RIID0gJ2xlbmd0aCc7XG4gIHZhciBMQVNUX0lOREVYID0gJ2xhc3RJbmRleCc7XG4gIGlmIChcbiAgICAnYWJiYydbJFNQTElUXSgvKGIpKi8pWzFdID09ICdjJyB8fFxuICAgICd0ZXN0J1skU1BMSVRdKC8oPzopLywgLTEpW0xFTkdUSF0gIT0gNCB8fFxuICAgICdhYidbJFNQTElUXSgvKD86YWIpKi8pW0xFTkdUSF0gIT0gMiB8fFxuICAgICcuJ1skU1BMSVRdKC8oLj8pKC4/KS8pW0xFTkdUSF0gIT0gNCB8fFxuICAgICcuJ1skU1BMSVRdKC8oKSgpLylbTEVOR1RIXSA+IDEgfHxcbiAgICAnJ1skU1BMSVRdKC8uPy8pW0xFTkdUSF1cbiAgKSB7XG4gICAgdmFyIE5QQ0cgPSAvKCk/Py8uZXhlYygnJylbMV0gPT09IHVuZGVmaW5lZDsgLy8gbm9ucGFydGljaXBhdGluZyBjYXB0dXJpbmcgZ3JvdXBcbiAgICAvLyBiYXNlZCBvbiBlczUtc2hpbSBpbXBsZW1lbnRhdGlvbiwgbmVlZCB0byByZXdvcmsgaXRcbiAgICAkc3BsaXQgPSBmdW5jdGlvbiAoc2VwYXJhdG9yLCBsaW1pdCkge1xuICAgICAgdmFyIHN0cmluZyA9IFN0cmluZyh0aGlzKTtcbiAgICAgIGlmIChzZXBhcmF0b3IgPT09IHVuZGVmaW5lZCAmJiBsaW1pdCA9PT0gMCkgcmV0dXJuIFtdO1xuICAgICAgLy8gSWYgYHNlcGFyYXRvcmAgaXMgbm90IGEgcmVnZXgsIHVzZSBuYXRpdmUgc3BsaXRcbiAgICAgIGlmICghaXNSZWdFeHAoc2VwYXJhdG9yKSkgcmV0dXJuIF9zcGxpdC5jYWxsKHN0cmluZywgc2VwYXJhdG9yLCBsaW1pdCk7XG4gICAgICB2YXIgb3V0cHV0ID0gW107XG4gICAgICB2YXIgZmxhZ3MgPSAoc2VwYXJhdG9yLmlnbm9yZUNhc2UgPyAnaScgOiAnJykgK1xuICAgICAgICAgICAgICAgICAgKHNlcGFyYXRvci5tdWx0aWxpbmUgPyAnbScgOiAnJykgK1xuICAgICAgICAgICAgICAgICAgKHNlcGFyYXRvci51bmljb2RlID8gJ3UnIDogJycpICtcbiAgICAgICAgICAgICAgICAgIChzZXBhcmF0b3Iuc3RpY2t5ID8gJ3knIDogJycpO1xuICAgICAgdmFyIGxhc3RMYXN0SW5kZXggPSAwO1xuICAgICAgdmFyIHNwbGl0TGltaXQgPSBsaW1pdCA9PT0gdW5kZWZpbmVkID8gNDI5NDk2NzI5NSA6IGxpbWl0ID4+PiAwO1xuICAgICAgLy8gTWFrZSBgZ2xvYmFsYCBhbmQgYXZvaWQgYGxhc3RJbmRleGAgaXNzdWVzIGJ5IHdvcmtpbmcgd2l0aCBhIGNvcHlcbiAgICAgIHZhciBzZXBhcmF0b3JDb3B5ID0gbmV3IFJlZ0V4cChzZXBhcmF0b3Iuc291cmNlLCBmbGFncyArICdnJyk7XG4gICAgICB2YXIgc2VwYXJhdG9yMiwgbWF0Y2gsIGxhc3RJbmRleCwgbGFzdExlbmd0aCwgaTtcbiAgICAgIC8vIERvZXNuJ3QgbmVlZCBmbGFncyBneSwgYnV0IHRoZXkgZG9uJ3QgaHVydFxuICAgICAgaWYgKCFOUENHKSBzZXBhcmF0b3IyID0gbmV3IFJlZ0V4cCgnXicgKyBzZXBhcmF0b3JDb3B5LnNvdXJjZSArICckKD8hXFxcXHMpJywgZmxhZ3MpO1xuICAgICAgd2hpbGUgKG1hdGNoID0gc2VwYXJhdG9yQ29weS5leGVjKHN0cmluZykpIHtcbiAgICAgICAgLy8gYHNlcGFyYXRvckNvcHkubGFzdEluZGV4YCBpcyBub3QgcmVsaWFibGUgY3Jvc3MtYnJvd3NlclxuICAgICAgICBsYXN0SW5kZXggPSBtYXRjaC5pbmRleCArIG1hdGNoWzBdW0xFTkdUSF07XG4gICAgICAgIGlmIChsYXN0SW5kZXggPiBsYXN0TGFzdEluZGV4KSB7XG4gICAgICAgICAgb3V0cHV0LnB1c2goc3RyaW5nLnNsaWNlKGxhc3RMYXN0SW5kZXgsIG1hdGNoLmluZGV4KSk7XG4gICAgICAgICAgLy8gRml4IGJyb3dzZXJzIHdob3NlIGBleGVjYCBtZXRob2RzIGRvbid0IGNvbnNpc3RlbnRseSByZXR1cm4gYHVuZGVmaW5lZGAgZm9yIE5QQ0dcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbG9vcC1mdW5jXG4gICAgICAgICAgaWYgKCFOUENHICYmIG1hdGNoW0xFTkdUSF0gPiAxKSBtYXRjaFswXS5yZXBsYWNlKHNlcGFyYXRvcjIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGZvciAoaSA9IDE7IGkgPCBhcmd1bWVudHNbTEVOR1RIXSAtIDI7IGkrKykgaWYgKGFyZ3VtZW50c1tpXSA9PT0gdW5kZWZpbmVkKSBtYXRjaFtpXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpZiAobWF0Y2hbTEVOR1RIXSA+IDEgJiYgbWF0Y2guaW5kZXggPCBzdHJpbmdbTEVOR1RIXSkgJHB1c2guYXBwbHkob3V0cHV0LCBtYXRjaC5zbGljZSgxKSk7XG4gICAgICAgICAgbGFzdExlbmd0aCA9IG1hdGNoWzBdW0xFTkdUSF07XG4gICAgICAgICAgbGFzdExhc3RJbmRleCA9IGxhc3RJbmRleDtcbiAgICAgICAgICBpZiAob3V0cHV0W0xFTkdUSF0gPj0gc3BsaXRMaW1pdCkgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNlcGFyYXRvckNvcHlbTEFTVF9JTkRFWF0gPT09IG1hdGNoLmluZGV4KSBzZXBhcmF0b3JDb3B5W0xBU1RfSU5ERVhdKys7IC8vIEF2b2lkIGFuIGluZmluaXRlIGxvb3BcbiAgICAgIH1cbiAgICAgIGlmIChsYXN0TGFzdEluZGV4ID09PSBzdHJpbmdbTEVOR1RIXSkge1xuICAgICAgICBpZiAobGFzdExlbmd0aCB8fCAhc2VwYXJhdG9yQ29weS50ZXN0KCcnKSkgb3V0cHV0LnB1c2goJycpO1xuICAgICAgfSBlbHNlIG91dHB1dC5wdXNoKHN0cmluZy5zbGljZShsYXN0TGFzdEluZGV4KSk7XG4gICAgICByZXR1cm4gb3V0cHV0W0xFTkdUSF0gPiBzcGxpdExpbWl0ID8gb3V0cHV0LnNsaWNlKDAsIHNwbGl0TGltaXQpIDogb3V0cHV0O1xuICAgIH07XG4gIC8vIENoYWtyYSwgVjhcbiAgfSBlbHNlIGlmICgnMCdbJFNQTElUXSh1bmRlZmluZWQsIDApW0xFTkdUSF0pIHtcbiAgICAkc3BsaXQgPSBmdW5jdGlvbiAoc2VwYXJhdG9yLCBsaW1pdCkge1xuICAgICAgcmV0dXJuIHNlcGFyYXRvciA9PT0gdW5kZWZpbmVkICYmIGxpbWl0ID09PSAwID8gW10gOiBfc3BsaXQuY2FsbCh0aGlzLCBzZXBhcmF0b3IsIGxpbWl0KTtcbiAgICB9O1xuICB9XG4gIC8vIDIxLjEuMy4xNyBTdHJpbmcucHJvdG90eXBlLnNwbGl0KHNlcGFyYXRvciwgbGltaXQpXG4gIHJldHVybiBbZnVuY3Rpb24gc3BsaXQoc2VwYXJhdG9yLCBsaW1pdCkge1xuICAgIHZhciBPID0gZGVmaW5lZCh0aGlzKTtcbiAgICB2YXIgZm4gPSBzZXBhcmF0b3IgPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogc2VwYXJhdG9yW1NQTElUXTtcbiAgICByZXR1cm4gZm4gIT09IHVuZGVmaW5lZCA/IGZuLmNhbGwoc2VwYXJhdG9yLCBPLCBsaW1pdCkgOiAkc3BsaXQuY2FsbChTdHJpbmcoTyksIHNlcGFyYXRvciwgbGltaXQpO1xuICB9LCAkc3BsaXRdO1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG5yZXF1aXJlKCcuL2VzNi5yZWdleHAuZmxhZ3MnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyICRmbGFncyA9IHJlcXVpcmUoJy4vX2ZsYWdzJyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpO1xudmFyIFRPX1NUUklORyA9ICd0b1N0cmluZyc7XG52YXIgJHRvU3RyaW5nID0gLy4vW1RPX1NUUklOR107XG5cbnZhciBkZWZpbmUgPSBmdW5jdGlvbiAoZm4pIHtcbiAgcmVxdWlyZSgnLi9fcmVkZWZpbmUnKShSZWdFeHAucHJvdG90eXBlLCBUT19TVFJJTkcsIGZuLCB0cnVlKTtcbn07XG5cbi8vIDIxLjIuNS4xNCBSZWdFeHAucHJvdG90eXBlLnRvU3RyaW5nKClcbmlmIChyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHsgcmV0dXJuICR0b1N0cmluZy5jYWxsKHsgc291cmNlOiAnYScsIGZsYWdzOiAnYicgfSkgIT0gJy9hL2InOyB9KSkge1xuICBkZWZpbmUoZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgdmFyIFIgPSBhbk9iamVjdCh0aGlzKTtcbiAgICByZXR1cm4gJy8nLmNvbmNhdChSLnNvdXJjZSwgJy8nLFxuICAgICAgJ2ZsYWdzJyBpbiBSID8gUi5mbGFncyA6ICFERVNDUklQVE9SUyAmJiBSIGluc3RhbmNlb2YgUmVnRXhwID8gJGZsYWdzLmNhbGwoUikgOiB1bmRlZmluZWQpO1xuICB9KTtcbi8vIEZGNDQtIFJlZ0V4cCN0b1N0cmluZyBoYXMgYSB3cm9uZyBuYW1lXG59IGVsc2UgaWYgKCR0b1N0cmluZy5uYW1lICE9IFRPX1NUUklORykge1xuICBkZWZpbmUoZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuICR0b1N0cmluZy5jYWxsKHRoaXMpO1xuICB9KTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkYXQgPSByZXF1aXJlKCcuL19zdHJpbmctYXQnKSh0cnVlKTtcblxuLy8gMjEuMS4zLjI3IFN0cmluZy5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShTdHJpbmcsICdTdHJpbmcnLCBmdW5jdGlvbiAoaXRlcmF0ZWQpIHtcbiAgdGhpcy5fdCA9IFN0cmluZyhpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuLy8gMjEuMS41LjIuMSAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24gKCkge1xuICB2YXIgTyA9IHRoaXMuX3Q7XG4gIHZhciBpbmRleCA9IHRoaXMuX2k7XG4gIHZhciBwb2ludDtcbiAgaWYgKGluZGV4ID49IE8ubGVuZ3RoKSByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIHBvaW50ID0gJGF0KE8sIGluZGV4KTtcbiAgdGhpcy5faSArPSBwb2ludC5sZW5ndGg7XG4gIHJldHVybiB7IHZhbHVlOiBwb2ludCwgZG9uZTogZmFsc2UgfTtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gRUNNQVNjcmlwdCA2IHN5bWJvbHMgc2hpbVxudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIE1FVEEgPSByZXF1aXJlKCcuL19tZXRhJykuS0VZO1xudmFyICRmYWlscyA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xudmFyIHdrcyA9IHJlcXVpcmUoJy4vX3drcycpO1xudmFyIHdrc0V4dCA9IHJlcXVpcmUoJy4vX3drcy1leHQnKTtcbnZhciB3a3NEZWZpbmUgPSByZXF1aXJlKCcuL193a3MtZGVmaW5lJyk7XG52YXIgZW51bUtleXMgPSByZXF1aXJlKCcuL19lbnVtLWtleXMnKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi9faXMtYXJyYXknKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciBfY3JlYXRlID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpO1xudmFyIGdPUE5FeHQgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbi1leHQnKTtcbnZhciAkR09QRCA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJyk7XG52YXIgJERQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xudmFyIGdPUEQgPSAkR09QRC5mO1xudmFyIGRQID0gJERQLmY7XG52YXIgZ09QTiA9IGdPUE5FeHQuZjtcbnZhciAkU3ltYm9sID0gZ2xvYmFsLlN5bWJvbDtcbnZhciAkSlNPTiA9IGdsb2JhbC5KU09OO1xudmFyIF9zdHJpbmdpZnkgPSAkSlNPTiAmJiAkSlNPTi5zdHJpbmdpZnk7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG52YXIgSElEREVOID0gd2tzKCdfaGlkZGVuJyk7XG52YXIgVE9fUFJJTUlUSVZFID0gd2tzKCd0b1ByaW1pdGl2ZScpO1xudmFyIGlzRW51bSA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xudmFyIFN5bWJvbFJlZ2lzdHJ5ID0gc2hhcmVkKCdzeW1ib2wtcmVnaXN0cnknKTtcbnZhciBBbGxTeW1ib2xzID0gc2hhcmVkKCdzeW1ib2xzJyk7XG52YXIgT1BTeW1ib2xzID0gc2hhcmVkKCdvcC1zeW1ib2xzJyk7XG52YXIgT2JqZWN0UHJvdG8gPSBPYmplY3RbUFJPVE9UWVBFXTtcbnZhciBVU0VfTkFUSVZFID0gdHlwZW9mICRTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcbnZhciBRT2JqZWN0ID0gZ2xvYmFsLlFPYmplY3Q7XG4vLyBEb24ndCB1c2Ugc2V0dGVycyBpbiBRdCBTY3JpcHQsIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy8xNzNcbnZhciBzZXR0ZXIgPSAhUU9iamVjdCB8fCAhUU9iamVjdFtQUk9UT1RZUEVdIHx8ICFRT2JqZWN0W1BST1RPVFlQRV0uZmluZENoaWxkO1xuXG4vLyBmYWxsYmFjayBmb3Igb2xkIEFuZHJvaWQsIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvdjgvaXNzdWVzL2RldGFpbD9pZD02ODdcbnZhciBzZXRTeW1ib2xEZXNjID0gREVTQ1JJUFRPUlMgJiYgJGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIF9jcmVhdGUoZFAoe30sICdhJywge1xuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZFAodGhpcywgJ2EnLCB7IHZhbHVlOiA3IH0pLmE7IH1cbiAgfSkpLmEgIT0gNztcbn0pID8gZnVuY3Rpb24gKGl0LCBrZXksIEQpIHtcbiAgdmFyIHByb3RvRGVzYyA9IGdPUEQoT2JqZWN0UHJvdG8sIGtleSk7XG4gIGlmIChwcm90b0Rlc2MpIGRlbGV0ZSBPYmplY3RQcm90b1trZXldO1xuICBkUChpdCwga2V5LCBEKTtcbiAgaWYgKHByb3RvRGVzYyAmJiBpdCAhPT0gT2JqZWN0UHJvdG8pIGRQKE9iamVjdFByb3RvLCBrZXksIHByb3RvRGVzYyk7XG59IDogZFA7XG5cbnZhciB3cmFwID0gZnVuY3Rpb24gKHRhZykge1xuICB2YXIgc3ltID0gQWxsU3ltYm9sc1t0YWddID0gX2NyZWF0ZSgkU3ltYm9sW1BST1RPVFlQRV0pO1xuICBzeW0uX2sgPSB0YWc7XG4gIHJldHVybiBzeW07XG59O1xuXG52YXIgaXNTeW1ib2wgPSBVU0VfTkFUSVZFICYmIHR5cGVvZiAkU3ltYm9sLml0ZXJhdG9yID09ICdzeW1ib2wnID8gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCc7XG59IDogZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCBpbnN0YW5jZW9mICRTeW1ib2w7XG59O1xuXG52YXIgJGRlZmluZVByb3BlcnR5ID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgRCkge1xuICBpZiAoaXQgPT09IE9iamVjdFByb3RvKSAkZGVmaW5lUHJvcGVydHkoT1BTeW1ib2xzLCBrZXksIEQpO1xuICBhbk9iamVjdChpdCk7XG4gIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEQpO1xuICBpZiAoaGFzKEFsbFN5bWJvbHMsIGtleSkpIHtcbiAgICBpZiAoIUQuZW51bWVyYWJsZSkge1xuICAgICAgaWYgKCFoYXMoaXQsIEhJRERFTikpIGRQKGl0LCBISURERU4sIGNyZWF0ZURlc2MoMSwge30pKTtcbiAgICAgIGl0W0hJRERFTl1ba2V5XSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKSBpdFtISURERU5dW2tleV0gPSBmYWxzZTtcbiAgICAgIEQgPSBfY3JlYXRlKEQsIHsgZW51bWVyYWJsZTogY3JlYXRlRGVzYygwLCBmYWxzZSkgfSk7XG4gICAgfSByZXR1cm4gc2V0U3ltYm9sRGVzYyhpdCwga2V5LCBEKTtcbiAgfSByZXR1cm4gZFAoaXQsIGtleSwgRCk7XG59O1xudmFyICRkZWZpbmVQcm9wZXJ0aWVzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhpdCwgUCkge1xuICBhbk9iamVjdChpdCk7XG4gIHZhciBrZXlzID0gZW51bUtleXMoUCA9IHRvSU9iamVjdChQKSk7XG4gIHZhciBpID0gMDtcbiAgdmFyIGwgPSBrZXlzLmxlbmd0aDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKGwgPiBpKSAkZGVmaW5lUHJvcGVydHkoaXQsIGtleSA9IGtleXNbaSsrXSwgUFtrZXldKTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciAkY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGl0LCBQKSB7XG4gIHJldHVybiBQID09PSB1bmRlZmluZWQgPyBfY3JlYXRlKGl0KSA6ICRkZWZpbmVQcm9wZXJ0aWVzKF9jcmVhdGUoaXQpLCBQKTtcbn07XG52YXIgJHByb3BlcnR5SXNFbnVtZXJhYmxlID0gZnVuY3Rpb24gcHJvcGVydHlJc0VudW1lcmFibGUoa2V5KSB7XG4gIHZhciBFID0gaXNFbnVtLmNhbGwodGhpcywga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKSk7XG4gIGlmICh0aGlzID09PSBPYmplY3RQcm90byAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9QU3ltYm9scywga2V5KSkgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gRSB8fCAhaGFzKHRoaXMsIGtleSkgfHwgIWhhcyhBbGxTeW1ib2xzLCBrZXkpIHx8IGhhcyh0aGlzLCBISURERU4pICYmIHRoaXNbSElEREVOXVtrZXldID8gRSA6IHRydWU7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSkge1xuICBpdCA9IHRvSU9iamVjdChpdCk7XG4gIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSk7XG4gIGlmIChpdCA9PT0gT2JqZWN0UHJvdG8gJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPUFN5bWJvbHMsIGtleSkpIHJldHVybjtcbiAgdmFyIEQgPSBnT1BEKGl0LCBrZXkpO1xuICBpZiAoRCAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0pKSBELmVudW1lcmFibGUgPSB0cnVlO1xuICByZXR1cm4gRDtcbn07XG52YXIgJGdldE93blByb3BlcnR5TmFtZXMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KSB7XG4gIHZhciBuYW1lcyA9IGdPUE4odG9JT2JqZWN0KGl0KSk7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGkgPSAwO1xuICB2YXIga2V5O1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkge1xuICAgIGlmICghaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIGtleSAhPSBISURERU4gJiYga2V5ICE9IE1FVEEpIHJlc3VsdC5wdXNoKGtleSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgJGdldE93blByb3BlcnR5U3ltYm9scyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5U3ltYm9scyhpdCkge1xuICB2YXIgSVNfT1AgPSBpdCA9PT0gT2JqZWN0UHJvdG87XG4gIHZhciBuYW1lcyA9IGdPUE4oSVNfT1AgPyBPUFN5bWJvbHMgOiB0b0lPYmplY3QoaXQpKTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgaSA9IDA7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSB7XG4gICAgaWYgKGhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiAoSVNfT1AgPyBoYXMoT2JqZWN0UHJvdG8sIGtleSkgOiB0cnVlKSkgcmVzdWx0LnB1c2goQWxsU3ltYm9sc1trZXldKTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcblxuLy8gMTkuNC4xLjEgU3ltYm9sKFtkZXNjcmlwdGlvbl0pXG5pZiAoIVVTRV9OQVRJVkUpIHtcbiAgJFN5bWJvbCA9IGZ1bmN0aW9uIFN5bWJvbCgpIHtcbiAgICBpZiAodGhpcyBpbnN0YW5jZW9mICRTeW1ib2wpIHRocm93IFR5cGVFcnJvcignU3ltYm9sIGlzIG5vdCBhIGNvbnN0cnVjdG9yIScpO1xuICAgIHZhciB0YWcgPSB1aWQoYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpO1xuICAgIHZhciAkc2V0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICBpZiAodGhpcyA9PT0gT2JqZWN0UHJvdG8pICRzZXQuY2FsbChPUFN5bWJvbHMsIHZhbHVlKTtcbiAgICAgIGlmIChoYXModGhpcywgSElEREVOKSAmJiBoYXModGhpc1tISURERU5dLCB0YWcpKSB0aGlzW0hJRERFTl1bdGFnXSA9IGZhbHNlO1xuICAgICAgc2V0U3ltYm9sRGVzYyh0aGlzLCB0YWcsIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbiAgICB9O1xuICAgIGlmIChERVNDUklQVE9SUyAmJiBzZXR0ZXIpIHNldFN5bWJvbERlc2MoT2JqZWN0UHJvdG8sIHRhZywgeyBjb25maWd1cmFibGU6IHRydWUsIHNldDogJHNldCB9KTtcbiAgICByZXR1cm4gd3JhcCh0YWcpO1xuICB9O1xuICByZWRlZmluZSgkU3ltYm9sW1BST1RPVFlQRV0sICd0b1N0cmluZycsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLl9rO1xuICB9KTtcblxuICAkR09QRC5mID0gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbiAgJERQLmYgPSAkZGVmaW5lUHJvcGVydHk7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZiA9IGdPUE5FeHQuZiA9ICRnZXRPd25Qcm9wZXJ0eU5hbWVzO1xuICByZXF1aXJlKCcuL19vYmplY3QtcGllJykuZiA9ICRwcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKS5mID0gJGdldE93blByb3BlcnR5U3ltYm9scztcblxuICBpZiAoREVTQ1JJUFRPUlMgJiYgIXJlcXVpcmUoJy4vX2xpYnJhcnknKSkge1xuICAgIHJlZGVmaW5lKE9iamVjdFByb3RvLCAncHJvcGVydHlJc0VudW1lcmFibGUnLCAkcHJvcGVydHlJc0VudW1lcmFibGUsIHRydWUpO1xuICB9XG5cbiAgd2tzRXh0LmYgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHJldHVybiB3cmFwKHdrcyhuYW1lKSk7XG4gIH07XG59XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIHsgU3ltYm9sOiAkU3ltYm9sIH0pO1xuXG5mb3IgKHZhciBlczZTeW1ib2xzID0gKFxuICAvLyAxOS40LjIuMiwgMTkuNC4yLjMsIDE5LjQuMi40LCAxOS40LjIuNiwgMTkuNC4yLjgsIDE5LjQuMi45LCAxOS40LjIuMTAsIDE5LjQuMi4xMSwgMTkuNC4yLjEyLCAxOS40LjIuMTMsIDE5LjQuMi4xNFxuICAnaGFzSW5zdGFuY2UsaXNDb25jYXRTcHJlYWRhYmxlLGl0ZXJhdG9yLG1hdGNoLHJlcGxhY2Usc2VhcmNoLHNwZWNpZXMsc3BsaXQsdG9QcmltaXRpdmUsdG9TdHJpbmdUYWcsdW5zY29wYWJsZXMnXG4pLnNwbGl0KCcsJyksIGogPSAwOyBlczZTeW1ib2xzLmxlbmd0aCA+IGo7KXdrcyhlczZTeW1ib2xzW2orK10pO1xuXG5mb3IgKHZhciB3ZWxsS25vd25TeW1ib2xzID0gJGtleXMod2tzLnN0b3JlKSwgayA9IDA7IHdlbGxLbm93blN5bWJvbHMubGVuZ3RoID4gazspIHdrc0RlZmluZSh3ZWxsS25vd25TeW1ib2xzW2srK10pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnU3ltYm9sJywge1xuICAvLyAxOS40LjIuMSBTeW1ib2wuZm9yKGtleSlcbiAgJ2Zvcic6IGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gaGFzKFN5bWJvbFJlZ2lzdHJ5LCBrZXkgKz0gJycpXG4gICAgICA/IFN5bWJvbFJlZ2lzdHJ5W2tleV1cbiAgICAgIDogU3ltYm9sUmVnaXN0cnlba2V5XSA9ICRTeW1ib2woa2V5KTtcbiAgfSxcbiAgLy8gMTkuNC4yLjUgU3ltYm9sLmtleUZvcihzeW0pXG4gIGtleUZvcjogZnVuY3Rpb24ga2V5Rm9yKHN5bSkge1xuICAgIGlmICghaXNTeW1ib2woc3ltKSkgdGhyb3cgVHlwZUVycm9yKHN5bSArICcgaXMgbm90IGEgc3ltYm9sIScpO1xuICAgIGZvciAodmFyIGtleSBpbiBTeW1ib2xSZWdpc3RyeSkgaWYgKFN5bWJvbFJlZ2lzdHJ5W2tleV0gPT09IHN5bSkgcmV0dXJuIGtleTtcbiAgfSxcbiAgdXNlU2V0dGVyOiBmdW5jdGlvbiAoKSB7IHNldHRlciA9IHRydWU7IH0sXG4gIHVzZVNpbXBsZTogZnVuY3Rpb24gKCkgeyBzZXR0ZXIgPSBmYWxzZTsgfVxufSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsICdPYmplY3QnLCB7XG4gIC8vIDE5LjEuMi4yIE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbiAgY3JlYXRlOiAkY3JlYXRlLFxuICAvLyAxOS4xLjIuNCBPYmplY3QuZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcylcbiAgZGVmaW5lUHJvcGVydHk6ICRkZWZpbmVQcm9wZXJ0eSxcbiAgLy8gMTkuMS4yLjMgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcylcbiAgZGVmaW5lUHJvcGVydGllczogJGRlZmluZVByb3BlcnRpZXMsXG4gIC8vIDE5LjEuMi42IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUClcbiAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLFxuICAvLyAxOS4xLjIuNyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxuICBnZXRPd25Qcm9wZXJ0eU5hbWVzOiAkZ2V0T3duUHJvcGVydHlOYW1lcyxcbiAgLy8gMTkuMS4yLjggT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhPKVxuICBnZXRPd25Qcm9wZXJ0eVN5bWJvbHM6ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHNcbn0pO1xuXG4vLyAyNC4zLjIgSlNPTi5zdHJpbmdpZnkodmFsdWUgWywgcmVwbGFjZXIgWywgc3BhY2VdXSlcbiRKU09OICYmICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKCFVU0VfTkFUSVZFIHx8ICRmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHZhciBTID0gJFN5bWJvbCgpO1xuICAvLyBNUyBFZGdlIGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyB7fVxuICAvLyBXZWJLaXQgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIG51bGxcbiAgLy8gVjggdGhyb3dzIG9uIGJveGVkIHN5bWJvbHNcbiAgcmV0dXJuIF9zdHJpbmdpZnkoW1NdKSAhPSAnW251bGxdJyB8fCBfc3RyaW5naWZ5KHsgYTogUyB9KSAhPSAne30nIHx8IF9zdHJpbmdpZnkoT2JqZWN0KFMpKSAhPSAne30nO1xufSkpLCAnSlNPTicsIHtcbiAgc3RyaW5naWZ5OiBmdW5jdGlvbiBzdHJpbmdpZnkoaXQpIHtcbiAgICB2YXIgYXJncyA9IFtpdF07XG4gICAgdmFyIGkgPSAxO1xuICAgIHZhciByZXBsYWNlciwgJHJlcGxhY2VyO1xuICAgIHdoaWxlIChhcmd1bWVudHMubGVuZ3RoID4gaSkgYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcbiAgICAkcmVwbGFjZXIgPSByZXBsYWNlciA9IGFyZ3NbMV07XG4gICAgaWYgKCFpc09iamVjdChyZXBsYWNlcikgJiYgaXQgPT09IHVuZGVmaW5lZCB8fCBpc1N5bWJvbChpdCkpIHJldHVybjsgLy8gSUU4IHJldHVybnMgc3RyaW5nIG9uIHVuZGVmaW5lZFxuICAgIGlmICghaXNBcnJheShyZXBsYWNlcikpIHJlcGxhY2VyID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgIGlmICh0eXBlb2YgJHJlcGxhY2VyID09ICdmdW5jdGlvbicpIHZhbHVlID0gJHJlcGxhY2VyLmNhbGwodGhpcywga2V5LCB2YWx1ZSk7XG4gICAgICBpZiAoIWlzU3ltYm9sKHZhbHVlKSkgcmV0dXJuIHZhbHVlO1xuICAgIH07XG4gICAgYXJnc1sxXSA9IHJlcGxhY2VyO1xuICAgIHJldHVybiBfc3RyaW5naWZ5LmFwcGx5KCRKU09OLCBhcmdzKTtcbiAgfVxufSk7XG5cbi8vIDE5LjQuMy40IFN5bWJvbC5wcm90b3R5cGVbQEB0b1ByaW1pdGl2ZV0oaGludClcbiRTeW1ib2xbUFJPVE9UWVBFXVtUT19QUklNSVRJVkVdIHx8IHJlcXVpcmUoJy4vX2hpZGUnKSgkU3ltYm9sW1BST1RPVFlQRV0sIFRPX1BSSU1JVElWRSwgJFN5bWJvbFtQUk9UT1RZUEVdLnZhbHVlT2YpO1xuLy8gMTkuNC4zLjUgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoJFN5bWJvbCwgJ1N5bWJvbCcpO1xuLy8gMjAuMi4xLjkgTWF0aFtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoTWF0aCwgJ01hdGgnLCB0cnVlKTtcbi8vIDI0LjMuMyBKU09OW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhnbG9iYWwuSlNPTiwgJ0pTT04nLCB0cnVlKTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L0FycmF5LnByb3RvdHlwZS5pbmNsdWRlc1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciAkaW5jbHVkZXMgPSByZXF1aXJlKCcuL19hcnJheS1pbmNsdWRlcycpKHRydWUpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCwgJ0FycmF5Jywge1xuICBpbmNsdWRlczogZnVuY3Rpb24gaW5jbHVkZXMoZWwgLyogLCBmcm9tSW5kZXggPSAwICovKSB7XG4gICAgcmV0dXJuICRpbmNsdWRlcyh0aGlzLCBlbCwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcblxucmVxdWlyZSgnLi9fYWRkLXRvLXVuc2NvcGFibGVzJykoJ2luY2x1ZGVzJyk7XG4iLCIvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1vYmplY3QtdmFsdWVzLWVudHJpZXNcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgJGVudHJpZXMgPSByZXF1aXJlKCcuL19vYmplY3QtdG8tYXJyYXknKSh0cnVlKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdPYmplY3QnLCB7XG4gIGVudHJpZXM6IGZ1bmN0aW9uIGVudHJpZXMoaXQpIHtcbiAgICByZXR1cm4gJGVudHJpZXMoaXQpO1xuICB9XG59KTtcbiIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLW9iamVjdC12YWx1ZXMtZW50cmllc1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciAkdmFsdWVzID0gcmVxdWlyZSgnLi9fb2JqZWN0LXRvLWFycmF5JykoZmFsc2UpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHtcbiAgdmFsdWVzOiBmdW5jdGlvbiB2YWx1ZXMoaXQpIHtcbiAgICByZXR1cm4gJHZhbHVlcyhpdCk7XG4gIH1cbn0pO1xuIiwicmVxdWlyZSgnLi9fd2tzLWRlZmluZScpKCdhc3luY0l0ZXJhdG9yJyk7XG4iLCJ2YXIgJGl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vZXM2LmFycmF5Lml0ZXJhdG9yJyk7XG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgd2tzID0gcmVxdWlyZSgnLi9fd2tzJyk7XG52YXIgSVRFUkFUT1IgPSB3a3MoJ2l0ZXJhdG9yJyk7XG52YXIgVE9fU1RSSU5HX1RBRyA9IHdrcygndG9TdHJpbmdUYWcnKTtcbnZhciBBcnJheVZhbHVlcyA9IEl0ZXJhdG9ycy5BcnJheTtcblxudmFyIERPTUl0ZXJhYmxlcyA9IHtcbiAgQ1NTUnVsZUxpc3Q6IHRydWUsIC8vIFRPRE86IE5vdCBzcGVjIGNvbXBsaWFudCwgc2hvdWxkIGJlIGZhbHNlLlxuICBDU1NTdHlsZURlY2xhcmF0aW9uOiBmYWxzZSxcbiAgQ1NTVmFsdWVMaXN0OiBmYWxzZSxcbiAgQ2xpZW50UmVjdExpc3Q6IGZhbHNlLFxuICBET01SZWN0TGlzdDogZmFsc2UsXG4gIERPTVN0cmluZ0xpc3Q6IGZhbHNlLFxuICBET01Ub2tlbkxpc3Q6IHRydWUsXG4gIERhdGFUcmFuc2Zlckl0ZW1MaXN0OiBmYWxzZSxcbiAgRmlsZUxpc3Q6IGZhbHNlLFxuICBIVE1MQWxsQ29sbGVjdGlvbjogZmFsc2UsXG4gIEhUTUxDb2xsZWN0aW9uOiBmYWxzZSxcbiAgSFRNTEZvcm1FbGVtZW50OiBmYWxzZSxcbiAgSFRNTFNlbGVjdEVsZW1lbnQ6IGZhbHNlLFxuICBNZWRpYUxpc3Q6IHRydWUsIC8vIFRPRE86IE5vdCBzcGVjIGNvbXBsaWFudCwgc2hvdWxkIGJlIGZhbHNlLlxuICBNaW1lVHlwZUFycmF5OiBmYWxzZSxcbiAgTmFtZWROb2RlTWFwOiBmYWxzZSxcbiAgTm9kZUxpc3Q6IHRydWUsXG4gIFBhaW50UmVxdWVzdExpc3Q6IGZhbHNlLFxuICBQbHVnaW46IGZhbHNlLFxuICBQbHVnaW5BcnJheTogZmFsc2UsXG4gIFNWR0xlbmd0aExpc3Q6IGZhbHNlLFxuICBTVkdOdW1iZXJMaXN0OiBmYWxzZSxcbiAgU1ZHUGF0aFNlZ0xpc3Q6IGZhbHNlLFxuICBTVkdQb2ludExpc3Q6IGZhbHNlLFxuICBTVkdTdHJpbmdMaXN0OiBmYWxzZSxcbiAgU1ZHVHJhbnNmb3JtTGlzdDogZmFsc2UsXG4gIFNvdXJjZUJ1ZmZlckxpc3Q6IGZhbHNlLFxuICBTdHlsZVNoZWV0TGlzdDogdHJ1ZSwgLy8gVE9ETzogTm90IHNwZWMgY29tcGxpYW50LCBzaG91bGQgYmUgZmFsc2UuXG4gIFRleHRUcmFja0N1ZUxpc3Q6IGZhbHNlLFxuICBUZXh0VHJhY2tMaXN0OiBmYWxzZSxcbiAgVG91Y2hMaXN0OiBmYWxzZVxufTtcblxuZm9yICh2YXIgY29sbGVjdGlvbnMgPSBnZXRLZXlzKERPTUl0ZXJhYmxlcyksIGkgPSAwOyBpIDwgY29sbGVjdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgdmFyIE5BTUUgPSBjb2xsZWN0aW9uc1tpXTtcbiAgdmFyIGV4cGxpY2l0ID0gRE9NSXRlcmFibGVzW05BTUVdO1xuICB2YXIgQ29sbGVjdGlvbiA9IGdsb2JhbFtOQU1FXTtcbiAgdmFyIHByb3RvID0gQ29sbGVjdGlvbiAmJiBDb2xsZWN0aW9uLnByb3RvdHlwZTtcbiAgdmFyIGtleTtcbiAgaWYgKHByb3RvKSB7XG4gICAgaWYgKCFwcm90b1tJVEVSQVRPUl0pIGhpZGUocHJvdG8sIElURVJBVE9SLCBBcnJheVZhbHVlcyk7XG4gICAgaWYgKCFwcm90b1tUT19TVFJJTkdfVEFHXSkgaGlkZShwcm90bywgVE9fU1RSSU5HX1RBRywgTkFNRSk7XG4gICAgSXRlcmF0b3JzW05BTUVdID0gQXJyYXlWYWx1ZXM7XG4gICAgaWYgKGV4cGxpY2l0KSBmb3IgKGtleSBpbiAkaXRlcmF0b3JzKSBpZiAoIXByb3RvW2tleV0pIHJlZGVmaW5lKHByb3RvLCBrZXksICRpdGVyYXRvcnNba2V5XSwgdHJ1ZSk7XG4gIH1cbn1cbiIsImltcG9ydCBOMTliYXNlQXBwbGV0IGZyb20gJy4vbjE5YmFzZUFwcGxldCc7XG5pbXBvcnQgTjE5cG9wdXBDb250cm9sbGVyIGZyb20gJy4vbjE5cG9wdXBDb250cm9sbGVyJztcblxuU2llYmVsQXBwRmFjYWRlLk4xOUhlbHBlciA9IGNsYXNzIGV4dGVuZHMgTjE5YmFzZUFwcGxldCB7XG4gIGNvbnN0cnVjdG9yKHNldHRpbmdzKSB7XG4gICAgY29uc3QgeyBhcHBsZXROYW1lIH0gPSBzZXR0aW5ncztcbiAgICBpZiAoYXBwbGV0TmFtZSkge1xuICAgICAgY29uc3QgYXBwbGV0ID0gU2llYmVsQXBwLlNfQXBwLkdldEFjdGl2ZVZpZXcoKS5HZXRBcHBsZXQoYXBwbGV0TmFtZSk7XG4gICAgICBpZiAoIWFwcGxldCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBnZXQgdGhlIHJlZmVyZW5jZSB0byB0aGUgYXBwbGV0IGJ5IHRoZSAke2FwcGxldE5hbWV9IG5hbWVgKTtcbiAgICAgIH1cbiAgICAgIHN1cGVyKE9iamVjdC5hc3NpZ24oe30sIHNldHRpbmdzLCB7IHBtOiBhcHBsZXQuR2V0UE1vZGVsKCkgfSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdXBlcihzZXR0aW5ncyk7XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coJ05leHVzIG1haW4gY2xhc3Mgc3RhcnRlZC4uLi4nLCB0aGlzLmFwcGxldE5hbWUpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICAvLyBnZXQgdGhlIG4xOXBvcHVwQ29udHJvbGxlciBzaW5nbGV0b24gaW5zdGFuY2VcbiAgICB0aGlzLm4xOXBvcHVwQ29udHJvbGxlciA9IE4xOXBvcHVwQ29udHJvbGxlci5pbnN0YW5jZTtcbiAgfVxuXG4gIGNsb3NlUG9wdXBBcHBsZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMubjE5cG9wdXBDb250cm9sbGVyLmNsb3NlUG9wdXBBcHBsZXQoKTtcbiAgfVxuXG4gIF9zaG93UG9wdXBBcHBsZXQobmFtZSwgaGlkZSwgY2IpIHtcbiAgICBpZiAoIXRoaXMubjE5cG9wdXBDb250cm9sbGVyKSB7XG4gICAgICAvLyBpdCBpcyBhIHBvcHVwIC0gcHJvYmFibHkgc2hvdWxkIG5ldmVyIGhhcHBlbj9cbiAgICAgIHRocm93IG5ldyBFcnJvcignT3Blbm5pbmcgcG9wdXAgb24gdGhlIHBvcHVwIGlzIG5vdCBzdXBwb3J0ZWQgbm93Jyk7XG4gICAgfVxuICAgIGlmICghdGhpcy5uMTlwb3B1cENvbnRyb2xsZXIuY2FuT3BlblBvcHVwKCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IG9wZW4gcG9wdXAgKGN1cnJlbnRseSBleGlzdHMgcmVzb2x2ZSBmdW5jdGlvbikhJyk7XG4gICAgICAvLyByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMudmlldy5TZXRBY3RpdmVBcHBsZXRJbnRlcm5hbCh0aGlzLmFwcGxldCk7IC8vIG9yIFNldEFjdGl2ZUFwcGxldFxuICAgIHRoaXMuX3NldEFjdGl2ZUNvbnRyb2wobmFtZSk7XG4gICAgcmV0dXJuIHRoaXMubjE5cG9wdXBDb250cm9sbGVyLnNob3dQb3B1cEFwcGxldChoaWRlLCBjYiwgdGhpcyk7XG4gIH1cblxuICBzaG93TXZnQXBwbGV0KG5hbWUsIGhpZGUsIGNiKSB7XG4gICAgLy8gVE9ETzogY2hlY2sgaWYgbmFtZSBpcyBjb3JyZWN0P1xuICAgIHJldHVybiB0aGlzLl9zaG93UG9wdXBBcHBsZXQobmFtZSwgaGlkZSwgY2IpO1xuICB9XG5cbiAgc2hvd1BpY2tBcHBsZXQobmFtZSwgaGlkZSwgY2IpIHtcbiAgICAvLyBUT0RPOiBjaGVjayBpZiBuYW1lIGlzIGNvcnJlY3Q/XG4gICAgcmV0dXJuIHRoaXMuX3Nob3dQb3B1cEFwcGxldChuYW1lLCBoaWRlLCBjYik7XG4gIH1cblxuICBvcGVuQXNzb2NBcHBsZXQoY2IpIHsgLy8gdGhpcyBtZXRob2Qgc2hvdWxkIGJlIGF2YWlsYWJsZSBmb3IgY2hpbGQgYnVzaW5lc3MgY29tcG9uZW50IGluIE06TSByZWxhdGlvbnNoaXBcbiAgICAvLyBUT0RPOiBjaGVjayBpZiBhcHBsZXQgcHJvdmlkZXMgc3VjaCBjYXBhYmlsaXRpZXM/XG4gICAgaWYgKCF0aGlzLm4xOXBvcHVwQ29udHJvbGxlci5jYW5PcGVuUG9wdXAoKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3Qgb3BlbiBwb3B1cCAoY3VycmVudGx5IGV4aXN0cyByZXNvbHZlIGZ1bmN0aW9uKSEnKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMubjE5cG9wdXBDb250cm9sbGVyLl9vcGVuQXNzb2NBcHBsZXQodGhpcy5uZXdSZWNvcmQuYmluZCh0aGlzKSwgY2IpO1xuICB9XG5cbiAgZHJpbGxkb3duKGNvbnRyb2xOYW1lKSB7XG4gICAgLy8gVE9ETzogY2hlY2sgaXNMaW5rIG9mIGNvbnRyb2w/XG4gICAgLy8gaW5kZXggaXMgbm90IGVmZmVjdGl2ZSwgYW5kIGRyaWxsZG93biBhbnl3YXkgaGFwcGVucyBvbiB0aGUgc2VsZWN0ZWQgcmVjb3JkXG4gICAgaWYgKCF0aGlzLmlzTGlzdEFwcGxldCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCBpbmRleCA9IHRoaXMuZ2V0U2VsZWN0aW9uKCk7XG4gICAgcmV0dXJuIHRoaXMucG0uRXhlY3V0ZU1ldGhvZCgnT25EcmlsbERvd24nLCBjb250cm9sTmFtZSwgaW5kZXgpO1xuICB9XG5cbiAgZ290b1ZpZXcodGFyZ2V0Vmlld05hbWUsIHRhcmdldEFwcGxldE5hbWUsIGlkKSB7XG4gICAgLy8gVE9ETzogZ2V0IHRoZSBhcHBsZXQgbmFtZSBmcm9tIHRoZSB2aWV3IGRlZmluaXRpb24/XG4gICAgY29uc3Qgcm93SWQgPSB0eXBlb2YgaWQgPT09ICd1bmRlZmluZWQnID8gdGhpcy5nZXRDdXJyZW50UmVjb3JkKHRydWUpLklkIDogaWQ7XG4gICAgbGV0IFNXRUNtZCA9IGBHb3RvVmlldyZTV0VWaWV3PSR7dGFyZ2V0Vmlld05hbWV9JlNXRUFwcGxldDA9JHt0YXJnZXRBcHBsZXROYW1lfWA7XG4gICAgU1dFQ21kICs9IGAmU1dFQlU9MSZTV0VLZWVwQ29udGV4dD1GQUxTRSZTV0VSb3dJZDA9JHtyb3dJZH1gO1xuICAgIFNXRUNtZCA9IGVuY29kZVVSSShTV0VDbWQpO1xuICAgIFNpZWJlbEFwcC5TX0FwcC5Hb3RvVmlldyh0YXJnZXRWaWV3TmFtZSwgJycsIFNXRUNtZCwgJycpO1xuICB9XG5cbiAgcmVJbml0UG9wdXAoKSB7IC8vIGRvIHdlIG5lZWQgdG8ga2VlcCBhbHNvIHN0YXRpYyBSZUluaXRQb3B1cFxuICAgIHRoaXMubjE5cG9wdXBDb250cm9sbGVyLmlzUG9wdXBIaWRkZW4gPSBmYWxzZTtcblxuICAgIGNvbnN0IHBvcHVwUE0gPSBTaWViZWxBcHAuU19BcHAuR2V0UG9wdXBQTSgpO1xuICAgIHBvcHVwUE0uSW5pdCgpO1xuICAgIHBvcHVwUE0uU2V0dXAoKTtcbiAgfVxuXG4gIHN0YXRpYyBSZUluaXRQb3B1cCgpIHsgLy8gY291bGQgYmUgcmVtb3ZlZCBpbiB0aGUgbmV4dCB2ZXJzaW9uXG4gICAgY29uc3QgcG9wdXBQTSA9IFNpZWJlbEFwcC5TX0FwcC5HZXRQb3B1cFBNKCk7XG4gICAgcG9wdXBQTS5Jbml0KCk7XG4gICAgcG9wdXBQTS5TZXR1cCgpO1xuICB9XG5cbiAgcGlja1JlY29yZEJ5SWQoY29udHJvbE5hbWUsIHJvd0lkKSB7XG4gICAgLy8gVE9ETzogY2hlY2sgaWYgdGhlIGNvbnRyb2wgYWxsb3dzIHBpY2tpbmc/XG4gICAgdGhpcy5zaG93UGlja0FwcGxldChjb250cm9sTmFtZSwgdHJ1ZSwgbnVsbClcbiAgICAgIC50aGVuKG9iaiA9PiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQoKCkgPT4gcmVzb2x2ZShvYmopLCAwKSkpXG4gICAgICAudGhlbigob2JqKSA9PiB7XG4gICAgICAgIGNvbnN0IGZvdW5kID0gb2JqLnBvcHVwQXBwbGV0TjE5LnF1ZXJ5QnlJZFN5bmMocm93SWQpO1xuICAgICAgICBpZiAoZm91bmQgIT09IDEpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSByZWNvcmQgJHtyb3dJZH0gaXMgbm90IGZvdW5kICgke2ZvdW5kfSlgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb2JqLnBvcHVwQXBwbGV0TjE5LnBpY2tSZWNvcmQoKTtcbiAgICAgIH0pO1xuICB9XG59O1xuIiwiaW1wb3J0IE4xOW5vdGlmaWNhdGlvbnMgZnJvbSAnLi9uMTlub3RpZmljYXRpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTjE5YmFzZUFwcGxldCB7XG4gIGNvbnN0cnVjdG9yKHNldHRpbmdzKSB7XG4gICAgdGhpcy5jb25zdHMgPSBTaWViZWxKUy5EZXBlbmRlbmN5KCdTaWViZWxBcHAuQ29uc3RhbnRzJyk7XG4gICAgdGhpcy51dGlscyA9IFNpZWJlbEpTLkRlcGVuZGVuY3koJ1NpZWJlbEFwcC5VdGlscycpO1xuICAgIHRoaXMucG0gPSBzZXR0aW5ncy5wbTtcbiAgICB0aGlzLmNvbnZlcnREYXRlcyA9IHNldHRpbmdzLmNvbnZlcnREYXRlcztcbiAgICB0aGlzLnZpZXcgPSBTaWViZWxBcHAuU19BcHAuR2V0QWN0aXZlVmlldygpO1xuICAgIHRoaXMuYXBwbGV0TmFtZSA9IHRoaXMucG0uR2V0KCdHZXROYW1lJyk7XG4gICAgdGhpcy5hcHBsZXQgPSB0aGlzLnZpZXcuR2V0QXBwbGV0KHRoaXMuYXBwbGV0TmFtZSk7XG4gICAgdGhpcy5pc0xpc3RBcHBsZXQgPSB0eXBlb2YgdGhpcy5wbS5HZXQoJ0dldExpc3RPZkNvbHVtbnMnKSAhPT0gJ3VuZGVmaW5lZCc7XG4gICAgdGhpcy5yZXF1aXJlZCA9IFtdOyAvLyB3aWxsIGJlIGVtcHR5IGZvciB0aGUgbGlzdCBhcHBsZXRcbiAgICB0aGlzLmxvdiA9IHt9O1xuICAgIHRoaXMuYm9vbE9iamVjdCA9IG5ldyBTaWViZWxBcHAuU19BcHAuRGF0dW1Cb29sT2JqZWN0KCk7XG5cbiAgICB0aGlzLmxvYWRMb2NhbGVEYXRhKCk7XG5cbiAgICB0aGlzLmZpZWxkVG9Db250cm9sTWFwID0gdGhpcy5fZ2V0RmllbGRUb0NvbnRyb2xNYXAoKTtcbiAgICBjb25zdCBiY0lkID0gdGhpcy5hcHBsZXQuR2V0QkNJZCgpO1xuICAgIHRoaXMubm90aWZpY2F0aW9ucyA9IG5ldyBOMTlub3RpZmljYXRpb25zKHRoaXMucG0sIHRoaXMuY29uc3RzLCBiY0lkLCB0aGlzLmZpZWxkVG9Db250cm9sTWFwKTtcblxuICAgIC8vIHBvcHVsYXRlIHRoZSByZXF1aXJlZCBhcnJheSBmb3IgZm9ybSBhcHBsZXRzXG4gICAgaWYgKCF0aGlzLmlzTGlzdEFwcGxldCkge1xuICAgICAgY29uc3QgYXBwbGV0SWQgPSBgc18ke3RoaXMucG0uR2V0KCdHZXRGdWxsSWQnKX1fZGl2YDtcbiAgICAgIGNvbnN0IGFwcGxldElucHV0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGFwcGxldElkKS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpO1xuICAgICAgYXBwbGV0SW5wdXRzLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgIGlmIChlbC5hdHRyaWJ1dGVzWydhcmlhLXJlcXVpcmVkJ10pIHtcbiAgICAgICAgICB0aGlzLnJlcXVpcmVkLnB1c2goZWwuYXR0cmlidXRlcy5uYW1lLm5vZGVWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIGxpc3RlbmVyIHRvIGdldCBkeW5hbWljIExPVnNcbiAgICB0aGlzLnBtLkF0dGFjaFBNQmluZGluZygnVXBkYXRlUXVpY2tQaWNrSW5mbycsIChpbnB1dE5hbWUsIGFyZywgYXJyKSA9PiB7XG4gICAgICBjb25zdCB2aWV3TmFtZSA9IHRoaXMudmlldy5HZXROYW1lKCk7XG4gICAgICBpZiAodmlld05hbWUgPT09IGFyclsxXSAmJiB0aGlzLmFwcGxldE5hbWUgPT09IGFyclsyXSkge1xuICAgICAgICBpZiAoJ2ZhbHNlJyA9PT0gYXJyWzRdKSB7XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgICBjb25zb2xlLndhcm4oYFtOMTldUGlja2xpc3QgaXMgbm90IGFzc29jaWF0ZWQgd2l0aCB0aGUgY29udHJvbCAtICR7SlNPTi5zdHJpbmdpZnkoYXJyKX1gKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxvdlthcnJbM11dID0gYXJyLnNsaWNlKCkuc3BsaWNlKDUpLmZpbHRlcihlbCA9PiBlbCAhPT0gJycpO1xuICAgICAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRvIGluZGljYXRlIHdoZW4gYW4gZW1wdHkgdmFsdWUgaXMgYWxsb3dlZD9cbiAgICAgIH1cbiAgICB9LCB7IHNjb3BlOiB0aGlzIH0pO1xuXG4gICAgdGhpcy5pc1RyZWVBcHBsZXQgPSBTaWViZWxBcHBGYWNhZGUuRXhwbG9yZXJQcmVzZW50YXRpb25Nb2RlbCA9PT0gdGhpcy5wbS5jb25zdHJ1Y3RvcjtcbiAgICBpZiAodGhpcy5pc1RyZWVBcHBsZXQpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oJ1RoaXMgaXMgYSB0cmVlIGFwcGxldC4uLiBpdCBpcyBlYXNpZXIgYW5kIHNhZmVyIHRvIHVzZSBsaXN0IG9yIGZvcm0gYXBwbGV0cycpO1xuICAgIH1cbiAgfVxuXG4gIGxvYWRMb2NhbGVEYXRhKCkge1xuICAgIGNvbnN0IGxvY2FsZU9iamVjdCA9IFNpZWJlbEFwcC5TX0FwcC5Mb2NhbGVPYmplY3Q7XG4gICAgY29uc3QgZGF0ZVRpbWVGb3JtYXQgPSBsb2NhbGVPYmplY3QuR2V0UHJvZmlsZSh0aGlzLmNvbnN0cy5nZXQoJ0xPQ0FMX0RBVEVUSU1FX0ZPUk1BVCcpKTtcbiAgICB0aGlzLmxvY2FsZURhdGEgPSB7XG4gICAgICBmaXJzdERheU9mV2VlazogbG9jYWxlT2JqZWN0LkdldFdlZWtTdGFydERheSgpLFxuICAgICAgZGF0ZUZvcm1hdDogbG9jYWxlT2JqZWN0LkdldFByb2ZpbGUodGhpcy5jb25zdHMuZ2V0KCdMT0NBTF9EQVRFX0ZPUk1BVCcpKSxcbiAgICAgIGRhdGVUaW1lRm9ybWF0LFxuICAgICAgaXMyNGhvdXJzRm9ybWF0OiAhL3AkLy50ZXN0KGRhdGVUaW1lRm9ybWF0KSxcbiAgICAgIGxvY2FsQ291bnRyeVBob25lQ29kZTogbG9jYWxlT2JqZWN0LkdldFByb2ZpbGUodGhpcy5jb25zdHMuZ2V0KCdMT0NBTF9QSE9ORV9DT1VOVFJZJykpLFxuICAgIH07XG4gICAgdGhpcy5sb2NhbGVEYXRhLm1vbnRocyA9IFtdO1xuICAgIHRoaXMubG9jYWxlRGF0YS5zaG9ydE1vbnRocyA9IFtdO1xuICAgIGNvbnN0IG1vbnRocyA9IGxvY2FsZU9iamVjdC5HZXREYXRhKCdNb250aCcsIGxvY2FsZU9iamVjdC5tX3NwTW9udGhQUyk7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMTI7IGkgKz0gMSkge1xuICAgICAgdGhpcy5sb2NhbGVEYXRhLm1vbnRocy5wdXNoKG1vbnRocy5HZXRQcm9wZXJ0eShgJHtpfTowYCkpO1xuICAgICAgdGhpcy5sb2NhbGVEYXRhLnNob3J0TW9udGhzLnB1c2gobW9udGhzLkdldFByb3BlcnR5KGAke2l9OjFgKSk7XG4gICAgfVxuXG4gICAgY29uc3Qgd2Vla0RheXMgPSBsb2NhbGVPYmplY3QuR2V0RGF0YSgnRGF5T2ZXZWVrJywgbG9jYWxlT2JqZWN0Lm1fc3BEYXlPZldlZWtQUyk7XG4gICAgdGhpcy5sb2NhbGVEYXRhLndlZWtEYXlzID0gW107XG4gICAgdGhpcy5sb2NhbGVEYXRhLndlZWtEYXlzMyA9IFtdO1xuICAgIHRoaXMubG9jYWxlRGF0YS53ZWVrRGF5czEgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDc7IGkgKz0gMSkge1xuICAgICAgdGhpcy5sb2NhbGVEYXRhLndlZWtEYXlzLnB1c2god2Vla0RheXMuR2V0UHJvcGVydHkoYCR7aX06MGApKTtcbiAgICAgIHRoaXMubG9jYWxlRGF0YS53ZWVrRGF5czMucHVzaCh3ZWVrRGF5cy5HZXRQcm9wZXJ0eShgJHtpfToxYCkpO1xuICAgICAgdGhpcy5sb2NhbGVEYXRhLndlZWtEYXlzMS5wdXNoKHdlZWtEYXlzLkdldFByb3BlcnR5KGAke2l9OjJgKSk7XG4gICAgfVxuICB9XG5cbiAgc3Vic2NyaWJlKGZ1bmMpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzXG4gICAgLy8gVE9ETyA6IGFjY2VwdCBhbHNvIGNvbnRleHQgZm9yIGZ1bmN0aW9uLCBvciB0aGUgY2FsbGVyIGJpbmRzIHRoZSBjb250ZXh0IHRvIHRoZSBmdW5jdGlvbj9cbiAgICByZXR1cm4gdGhpcy5ub3RpZmljYXRpb25zLnN1YnNjcmliZShmdW5jKTtcbiAgfVxuXG4gIHVuc3Vic2NyaWJlKHRva2VuKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2xhc3MtbWV0aG9kcy11c2UtdGhpc1xuICAgIHJldHVybiB0aGlzLm5vdGlmaWNhdGlvbnMudW5zdWJzY3JpYmUodG9rZW4pO1xuICB9XG5cbiAgX2dldENvbnRyb2wobmFtZSkge1xuICAgIHJldHVybiB0aGlzLnBtLkV4ZWN1dGVNZXRob2QoJ0dldENvbnRyb2wnLCBuYW1lKTtcbiAgfVxuXG4gIF9yZXR1cm5Db250cm9scygpIHtcbiAgICBpZiAodGhpcy5pc0xpc3RBcHBsZXQpIHtcbiAgICAgIHJldHVybiB0aGlzLnBtLkdldCgnR2V0TGlzdE9mQ29sdW1ucycpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5wbS5HZXQoJ0dldENvbnRyb2xzJyk7XG4gIH1cblxuICAvLyBjYWxsZWQgaW50byB0aGUgZ2V0Q29udHJvbHMgdG8gcmVkdWNlIHRoZSBhbW91bnQgb2YgdGhlIHJldHVybmVkIGNvbnRyb2xzXG4gIF9pc1NraXBDb250cm9sKHR5cGUpIHtcbiAgICAvLyBodHRwczovL2RvY3Mub3JhY2xlLmNvbS9jZC9FNzQ4OTBfMDEvYm9va3MvQ29uZmlnT3BlblVJL2FwcGVuZGl4X2FfYXBpMDAyLmh0bVxuICAgIC8vIG1heWJlIHdlIG5lZWQgdG8gZXhjbHVkZSBtb3JlIHR5cGVzXG4gICAgcmV0dXJuICh0eXBlID09PSB0aGlzLmNvbnN0cy5nZXQoJ1NXRV9QU1RfQlVUVE9OX0NUUkwnKSlcbiAgICAgIHx8ICh0eXBlID09PSB0aGlzLmNvbnN0cy5nZXQoJ1NXRV9DVFJMX0xJTksnKSlcbiAgICAgIHx8ICh0eXBlID09PSB0aGlzLmNvbnN0cy5nZXQoJ1NXRV9DVFJMX1BMQUlOVEVYVCcpKVxuICAgICAgfHwgKHR5cGUgPT09ICdudWxsJyk7IC8vIEdldFVpVHlwZSByZXR1cm5zIHN0cmluZ1xuICB9XG5cbiAgX2lzUmVxdWlyZWQoaW5wdXROYW1lKSB7XG4gICAgLy8gcmVxdWlyZWQgaXMgZW1wdHkgZm9yIGxpc3QgYXBwbGV0cywgaG9wZWZ1bGx5IGZvciBub3dcbiAgICByZXR1cm4gdGhpcy5yZXF1aXJlZC5pbmRleE9mKGlucHV0TmFtZSkgPiAtMTtcbiAgfVxuXG4gIHN0YXRpYyBHZXRTdGF0aWNMT1YoYXJyKSB7XG4gICAgcmV0dXJuIGFyci5tYXAoZWwgPT4gZWwucHJvcEFycmF5KTtcbiAgfVxuXG4gIF9zZXRBY3RpdmVDb250cm9sKG5hbWUpIHtcbiAgICBpZiAobmFtZSkge1xuICAgICAgcmV0dXJuIHRoaXMucG0uRXhlY3V0ZU1ldGhvZCgnU2V0QWN0aXZlQ29udHJvbCcsIHRoaXMuX2dldENvbnRyb2wobmFtZSkpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5wbS5FeGVjdXRlTWV0aG9kKCdTZXRBY3RpdmVDb250cm9sJywgbnVsbCk7XG4gIH1cblxuICBfaXNEYXRlVGltZUNvbnRyb2wodWlUeXBlKSB7XG4gICAgcmV0dXJuIHRoaXMuY29uc3RzLmdldCgnU1dFX0NUUkxfREFURV9UWl9QSUNLJykgPT09IHVpVHlwZVxuICAgICAgfHwgdGhpcy5jb25zdHMuZ2V0KCdTV0VfQ1RSTF9EQVRFX1RJTUVfUElDSycpID09PSB1aVR5cGVcbiAgICAgIHx8IHRoaXMuY29uc3RzLmdldCgnU1dFX0NUUkxfREFURV9QSUNLJykgPT09IHVpVHlwZTtcbiAgfVxuXG4gIF9nZXRTaWViZWxWYWx1ZSh2YWx1ZSwgdWlUeXBlLCBkaXNwbGF5Rm9ybWF0KSB7XG4gICAgLy8gVE9ETzogbnVtYmVycywgY3VycmVuY2llcywgYW5kIHBob25lcz9cbiAgICBpZiAodGhpcy5jb25zdHMuZ2V0KCdTV0VfQ1RSTF9DSEVDS0JPWCcpID09PSB1aVR5cGUpIHtcbiAgICAgIC8vIGNvbnZlcnQgdHJ1ZS9mYWxzZSA9PiBZL04gLy8gbnVsbCBpcyBub3QgaGFuZGxlZCAodGhlIHNhbWUgYXMgaW4gc3RhbmRhcmQgT3BlbiBVSSlcbiAgICAgIC8vIHZhbHVlID0gdmFsdWUgPyAnWScgOiAnTic7XG4gICAgICB0aGlzLmJvb2xPYmplY3QuU2V0VmFsdWUodmFsdWUpO1xuICAgICAgcmV0dXJuIHRoaXMuYm9vbE9iamVjdC5HZXRBc1N0cmluZygpO1xuICAgIH1cbiAgICBpZiAodGhpcy5jb252ZXJ0RGF0ZXMgJiYgZGlzcGxheUZvcm1hdCAmJiB0aGlzLl9pc0RhdGVUaW1lQ29udHJvbCh1aVR5cGUpKSB7XG4gICAgICAvLyBUT0RPOiBjaGVjayBpZiBhIHZhbGlkIGRhdGUgaXMgaW5wdXR0ZWRcbiAgICAgIGNvbnN0IGRhdGUgPSB2YWx1ZS50b0xvY2FsZVN0cmluZygnZW4tVVMnLCB7IGhvdXIxMjogZmFsc2UgfSkuc3BsaXQoJywnKS5qb2luKCcnKTtcbiAgICAgIHJldHVybiBTaWViZWxBcHAuU19BcHAuTG9jYWxlT2JqZWN0LkdldFN0cmluZ0Zyb21EYXRlVGltZShkYXRlLCAnTS9EL1lZWVkgSEg6bW06c3MnLCBkaXNwbGF5Rm9ybWF0LCBmYWxzZSk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIGNhbkludm9rZU1ldGhvZChtZXRob2QpIHtcbiAgICByZXR1cm4gdGhpcy5wbS5FeGVjdXRlTWV0aG9kKCdDYW5JbnZva2VNZXRob2QnLCBtZXRob2QpO1xuICB9XG5cbiAgaW52b2tlTWV0aG9kKG1ldGhvZCkge1xuICAgIGlmICghdGhpcy5jYW5JbnZva2VNZXRob2QobWV0aG9kKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5wbS5FeGVjdXRlTWV0aG9kKCdJbnZva2VNZXRob2QnLCBtZXRob2QpO1xuICB9XG5cbiAgZ2V0Q29udHJvbHMoKSB7XG4gICAgY29uc3QgY29udHJvbHMgPSB7fTtcbiAgICBjb25zdCBhcHBsZXRDb250cm9scyA9IHRoaXMuX3JldHVybkNvbnRyb2xzKCk7XG4gICAgY29uc3QgYXJyID0gT2JqZWN0LmVudHJpZXMoYXBwbGV0Q29udHJvbHMpO1xuICAgIGFyci5mb3JFYWNoKChjb250cm9sRW50cnkpID0+IHtcbiAgICAgIGNvbnN0IGNvbnRyb2wgPSBjb250cm9sRW50cnlbMV07XG4gICAgICBjb25zdCB1aVR5cGUgPSBjb250cm9sLkdldFVJVHlwZSgpO1xuICAgICAgY29uc3QgZGlzcGxheUZvcm1hdCA9IGNvbnRyb2wuR2V0RGlzcGxheUZvcm1hdCgpIHx8IHRoaXMuZ2V0Q29udHJvbERpc3BsYXlGb3JtYXQodWlUeXBlKTtcbiAgICAgIGlmICghdGhpcy5faXNTa2lwQ29udHJvbCh1aVR5cGUpKSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBjb250cm9sRW50cnlbMF07XG4gICAgICAgIGNvbnN0IGlucHV0TmFtZSA9IGNvbnRyb2wuR2V0SW5wdXROYW1lKCk7XG4gICAgICAgIGNvbnN0IGZpZWxkTmFtZSA9IGNvbnRyb2wuR2V0RmllbGROYW1lKCk7XG4gICAgICAgIGNvbnN0IG9iaiA9IHtcbiAgICAgICAgICBuYW1lLFxuICAgICAgICAgIGxhYmVsOiBjb250cm9sLkdldERpc3BsYXlOYW1lKCksXG4gICAgICAgICAgdWlUeXBlLFxuICAgICAgICAgIHJlcXVpcmVkOiB0aGlzLl9pc1JlcXVpcmVkKGlucHV0TmFtZSksXG4gICAgICAgICAgYm91bmRlZFBpY2s6IGNvbnRyb2wuSXNCb3VuZGVkUGljaygpID09PSAnMScsXG4gICAgICAgICAgc3RhdGljUGljazogY29udHJvbC5Jc1N0YXRpY0JvdW5kZWQoKSA9PT0gJzEnLFxuICAgICAgICAgIGlucHV0TmFtZSxcbiAgICAgICAgICBpc1Bvc3RDaGFuZ2VzOiBjb250cm9sLklzUG9zdENoYW5nZXMoKSxcbiAgICAgICAgICBtYXhTaXplOiBjb250cm9sLkdldE1heFNpemUoKSxcbiAgICAgICAgICBmaWVsZE5hbWUsXG4gICAgICAgICAgaXNMaW5rOiB0aGlzLnBtLkV4ZWN1dGVNZXRob2QoJ0Nhbk5hdmlnYXRlJywgbmFtZSksXG4gICAgICAgICAgcmVhZG9ubHk6ICF0aGlzLnBtLkV4ZWN1dGVNZXRob2QoJ0NhblVwZGF0ZScsIG5hbWUpLFxuICAgICAgICAgIGRpc3BsYXlGb3JtYXQsXG4gICAgICAgICAgZGF0YVR5cGU6IHRoaXMucG0uRXhlY3V0ZU1ldGhvZCgnR2V0RmllbGREYXRhVHlwZScsIGZpZWxkTmFtZSksXG4gICAgICAgIH07XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosICdyZWFkT25seScsIHtcbiAgICAgICAgICBnZXQ6ICgpID0+IHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ1tOMTldVGhlIHJlYWRPbmx5IHByb3BlcnR5IHdpbGwgYmUgcmVtb3ZlZCBzb29uOyB1c2UgcmVhZG9ubHkgaW5zdGVhZCBvZiBpdC4nKTtcbiAgICAgICAgICAgIHJldHVybiBvYmoucmVhZG9ubHk7XG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIGFkZCB2YWx1ZXMgdG8gYmUgZGlzcGxheWVkIGluIHRoZSBzdGF0aWMgcGljayBsaXN0IC0gMiBkaWZmZXJlbnQgZm9ybWF0cyBmb3Igbm93XG4gICAgICAgIGlmIChvYmouc3RhdGljUGljaykge1xuICAgICAgICAgIG9iai5zdGF0aWNMT1YgPSBOMTliYXNlQXBwbGV0LkdldFN0YXRpY0xPVihjb250cm9sLkdldFJhZGlvR3JvdXBQcm9wU2V0KCkuY2hpbGRBcnJheSk7XG4gICAgICAgICAgb2JqLmxvdnMgPSBvYmouc3RhdGljTE9WLnJlZHVjZSgoYWNjLCBlbCkgPT4geyAvLyBub3JtYWxpemVkXG4gICAgICAgICAgICBhY2MucHVzaCh7IGxpYzogZWwuRmllbGRWYWx1ZSwgdmFsOiBlbC5EaXNwbGF5TmFtZSB9KTtcbiAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgfSwgW10pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRyb2xzW25hbWVdID0gb2JqO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBjb250cm9scztcbiAgfVxuXG4gIGdldFJlY29yZFNldChhZGRSZWNvcmRJbmRleCkge1xuICAgIC8vIFRPRE86IGNvbnZlcnQgdGhlIHZhbHVlcz9cbiAgICBpZiAoYWRkUmVjb3JkSW5kZXgpIHtcbiAgICAgIHJldHVybiB0aGlzLnBtLkdldCgnR2V0UmVjb3JkU2V0JykubWFwKChlbCwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgcmV0ID0gT2JqZWN0LmFzc2lnbih7fSwgZWwpO1xuICAgICAgICByZXQuX2luZHggPSBpbmRleDtcbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5wbS5HZXQoJ0dldFJlY29yZFNldCcpO1xuICB9XG5cbiAgZ2V0UmF3UmVjb3JkU2V0KGFkZFJlY29yZEluZGV4KSB7XG4gICAgLy8gVE9ETzogY29udmVydCB0aGUgdmFsdWVzP1xuICAgIGlmIChhZGRSZWNvcmRJbmRleCkge1xuICAgICAgcmV0dXJuIHRoaXMucG0uR2V0KCdHZXRSYXdSZWNvcmRTZXQnKS5tYXAoKGVsLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCByZXQgPSBPYmplY3QuYXNzaWduKHt9LCBlbCk7XG4gICAgICAgIHJldC5faW5keCA9IGluZGV4O1xuICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnBtLkdldCgnR2V0UmF3UmVjb3JkU2V0Jyk7XG4gIH1cblxuICBnZXRSb3dMaXN0Um93Q291bnQoKSB7XG4gICAgLy8gaG93IG11Y2ggYXBwbGV0IGNhbiBkaXNwbGF5IChzcGVjaWZpZWQgaW4gU2llYmVsIFRvb2xzKSAtIDEwLzIwXG4gICAgcmV0dXJuIHRoaXMucG0uR2V0KCdHZXRSb3dMaXN0Um93Q291bnQnKTtcbiAgfVxuXG4gIGdldE51bVJvd3MoKSB7XG4gICAgLy8gY3VycmVudGx5IGZldGNoZWQgZnJvbSBzZXJ2ZXI/XG4gICAgcmV0dXJuIHRoaXMucG0uR2V0KCdHZXROdW1Sb3dzJyk7XG4gIH1cblxuICBnZXRTZWxlY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucG0uR2V0KCdHZXRTZWxlY3Rpb24nKTtcbiAgfVxuXG4gIF9uYXZpZ2F0ZShtZXRob2QpIHtcbiAgICBpZiAoIXRoaXMuY2FuSW52b2tlTWV0aG9kKG1ldGhvZCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgcmV0ID0gdGhpcy5wbS5FeGVjdXRlTWV0aG9kKCdJbnZva2VNZXRob2QnLCBtZXRob2QpO1xuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICBuZXh0UmVjb3JkKCkge1xuICAgIHJldHVybiB0aGlzLl9uYXZpZ2F0ZSh0aGlzLmlzTGlzdEFwcGxldCA/ICdHb3RvTmV4dCcgOiAnR290b05leHRTZXQnKTtcbiAgfVxuXG4gIG5leHRSZWNvcmRTZXQoKSB7XG4gICAgaWYgKCF0aGlzLmlzTGlzdEFwcGxldCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fbmF2aWdhdGUoJ0dvdG9OZXh0U2V0Jyk7XG4gIH1cblxuICBwb3NpdGlvbk9uUm93KGluZGV4KSB7XG4gICAgaWYgKHRoaXMuaXNMaXN0QXBwbGV0KSB7XG4gICAgICBpZiAoIXRoaXMucG0uRXhlY3V0ZU1ldGhvZCgnQ2FuSW52b2tlTWV0aG9kJywgJ1Bvc2l0aW9uT25Sb3cnKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAoaW5kZXggPCAwKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIC8vIHNlZW1zIHRoaXMgY2hlY2sgaXMgcmVkdW5kYW50XG4gICAgICAvLyBpZiAodGhpcy5nZXROdW1Sb3dzKCkgPCBpbmRleCArIDEpIHtcbiAgICAgIC8vICAgcmV0dXJuIGZhbHNlO1xuICAgICAgLy8gfVxuICAgICAgaWYgKHRoaXMuZ2V0Um93TGlzdFJvd0NvdW50KCkgPCBpbmRleCArIDEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke2luZGV4fSBpcyBlcXVhbC9oaWdoZXIgdGhhbiBhbW91bnQgb2YgcmVjb3JkcyBpbiB0aGUgYXBwbGV0ICR7dGhpcy5nZXRSb3dMaXN0Um93Q291bnQoKX1gKTtcbiAgICAgIH1cbiAgICAgIC8vIFRPRE86IGlmIHdlIGdvdCB0byB0aGlzIHBvaW50XG4gICAgICAvLyAgc2hvdWxkIHdlIGNoZWNrIEdldEFjdGl2ZUNvbnRyb2wgKGFwcGxldC5wcm90b3R5cGUuSW52b2tlTWV0aG9kKVxuICAgICAgLy8gIGFuZCBudWxsaWZ5IGl0IGlmIGFjdGl2ZT9cbiAgICAgIHJldHVybiB0aGlzLnBtLkV4ZWN1dGVNZXRob2QoJ0hhbmRsZVJvd1NlbGVjdCcsIGluZGV4KTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHJldlJlY29yZCgpIHtcbiAgICBpZiAodGhpcy5pc0xpc3RBcHBsZXQpIHtcbiAgICAgIHJldHVybiB0aGlzLnBvc2l0aW9uT25Sb3codGhpcy5wbS5HZXQoJ0dldFNlbGVjdGlvbicpIC0gMSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9uYXZpZ2F0ZSgnR290b1ByZXZpb3VzU2V0Jyk7XG4gIH1cblxuICBwcmV2UmVjb3JkU2V0KCkge1xuICAgIGlmICghdGhpcy5pc0xpc3RBcHBsZXQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX25hdmlnYXRlKCdHb3RvUHJldmlvdXNTZXQnKTtcbiAgfVxuXG4gIG5ld1JlY29yZChjYikge1xuICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHRoaXMuX25ld1JlY29yZChyZXNvbHZlKSk7XG4gICAgcmV0dXJuIHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJyA/IHByb21pc2UudGhlbihjYikgOiBwcm9taXNlO1xuICB9XG5cbiAgX25ld1JlY29yZChjYikge1xuICAgIC8vIDIwMTkwMzEyIC0gY2hhbmdlZCBmcm9tIE5ld1JlY29yZCB0byBDcmVhdGVSZWNvcmQsICMzMVxuICAgIHJldHVybiB0aGlzLnBtLkV4ZWN1dGVNZXRob2QoJ0ludm9rZU1ldGhvZCcsICdDcmVhdGVSZWNvcmQnLCBudWxsLCB7XG4gICAgICBhc3luYzogdHJ1ZSxcbiAgICAgIGNiLFxuICAgIH0pO1xuICB9XG5cbiAgbmV3UmVjb3JkU3luYygpIHtcbiAgICAvLyAyMDE5MDMxMiAtIGNoYW5nZWQgZnJvbSBOZXdSZWNvcmQgdG8gQ3JlYXRlUmVjb3JkLCAjMzFcbiAgICByZXR1cm4gdGhpcy5wbS5FeGVjdXRlTWV0aG9kKCdJbnZva2VNZXRob2QnLCAnQ3JlYXRlUmVjb3JkJyk7XG4gIH1cblxuICB3cml0ZVJlY29yZChjYiwgY2JlcnIpIHtcbiAgICBsZXQgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHRoaXMuX3dyaXRlUmVjb3JkKCguLi5hcmdzKSA9PiB7XG4gICAgICBpZiAoYXJnc1syXS5HZXRQcm9wZXJ0eSgnU3RhdHVzJykgPT09ICdDb21wbGV0ZWQnKSB7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlamVjdCgpO1xuICAgICAgfVxuICAgIH0pKTtcbiAgICBwcm9taXNlID0gdHlwZW9mIGNiID09PSAnZnVuY3Rpb24nID8gcHJvbWlzZS50aGVuKGNiKSA6IHByb21pc2U7XG4gICAgcHJvbWlzZSA9IHR5cGVvZiBjYmVyciA9PT0gJ2Z1bmN0aW9uJyA/IHByb21pc2UuY2F0Y2goY2JlcnIpIDogcHJvbWlzZTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfVxuXG4gIF93cml0ZVJlY29yZChjYikge1xuICAgIHJldHVybiB0aGlzLnBtLkV4ZWN1dGVNZXRob2QoJ0ludm9rZU1ldGhvZCcsICdXcml0ZVJlY29yZCcsIG51bGwsIHtcbiAgICAgIGFzeW5jOiB0cnVlLFxuICAgICAgLy8gVE9ETzogc2VsZmJ1c3k6IHRydWUsXG4gICAgICBjYixcbiAgICB9KTtcbiAgfVxuXG4gIHdyaXRlUmVjb3JkU3luYygpIHtcbiAgICByZXR1cm4gdGhpcy5wbS5FeGVjdXRlTWV0aG9kKCdJbnZva2VNZXRob2QnLCAnV3JpdGVSZWNvcmQnKTtcbiAgfVxuXG4gIGRlbGV0ZVJlY29yZFN5bmMoKSB7XG4gICAgcmV0dXJuIHRoaXMucG0uRXhlY3V0ZU1ldGhvZCgnSW52b2tlTWV0aG9kJywgJ0RlbGV0ZVJlY29yZCcpO1xuICB9XG5cbiAgdW5kb1JlY29yZFN5bmMoKSB7XG4gICAgcmV0dXJuIHRoaXMucG0uRXhlY3V0ZU1ldGhvZCgnSW52b2tlTWV0aG9kJywgJ1VuZG9SZWNvcmQnKTtcbiAgfVxuXG4gIHNldENvbnRyb2xWYWx1ZShuYW1lLCB2YWx1ZSkge1xuICAgIC8vIFRPRE86IElmIHZhbHVlIGlzIG51bGwsIG5vdGhpbmcgaGFwcGVucywgc2hvdWxkIHdlIGNvbnZlcnQgbnVsbCB0byAnJz9cbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5fZ2V0Q29udHJvbChuYW1lKTtcbiAgICBpZiAoIWNvbnRyb2wpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IGZpbmQgYSBjb250cm9sIGJ5IG5hbWUgJHtuYW1lfSB0byBzZXQgJHt2YWx1ZX0uYCk7XG4gICAgfVxuICAgIGNvbnN0IHVpVHlwZSA9IGNvbnRyb2wuR2V0VUlUeXBlKCk7XG4gICAgY29uc3QgZGlzcGxheUZvcm1hdCA9IGNvbnRyb2wuR2V0RGlzcGxheUZvcm1hdCgpIHx8IHRoaXMuZ2V0Q29udHJvbERpc3BsYXlGb3JtYXQodWlUeXBlKTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB2YWx1ZSA9IHRoaXMuX2dldFNpZWJlbFZhbHVlKHZhbHVlLCB1aVR5cGUsIGRpc3BsYXlGb3JtYXQpO1xuICAgIC8vIFRPRE86IHNob3VsZCB3ZSB1c2UgU2V0Q2VsbFZhbHVlIGZvciBsaXN0IGFwcGxldHM/XG4gICAgY29uc3QgcmV0ID0gdGhpcy5fc2V0Q29udHJvbFZhbHVlSW50ZXJuYWwoY29udHJvbCwgdmFsdWUpO1xuICAgIGlmICghcmV0KSB7XG4gICAgICBjb25zb2xlLmxvZyhgVmFsdWUgJHt2YWx1ZX0gd2FzIG5vdCBzZXQgZm9yICR7Y29udHJvbC5HZXROYW1lKCl9YCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgX3NldENvbnRyb2xWYWx1ZUludGVybmFsKGNvbnRyb2wsIHZhbHVlKSB7XG4gICAgdGhpcy5wbS5PbkNvbnRyb2xFdmVudCh0aGlzLmNvbnN0cy5nZXQoJ1BIWUVWRU5UX0NPTlRST0xfRk9DVVMnKSwgY29udHJvbCk7XG4gICAgcmV0dXJuIHRoaXMucG0uT25Db250cm9sRXZlbnQodGhpcy5jb25zdHMuZ2V0KCdQSFlFVkVOVF9DT05UUk9MX0JMVVInKSwgY29udHJvbCwgdmFsdWUpO1xuICB9XG5cbiAgX3ZhbGlkYXRlUGlja0NvbnRyb2woY29udHJvbCwgaXNTdGF0aWMpIHtcbiAgICAvLyBQb3NzaWJsZSByZXN1bHRzOlxuICAgIC8vIG5vIHBpY2tcbiAgICAvLyBzdGF0aWMgcGlja1xuICAgIC8vIGR5bmFtaWMgcGlja1xuICAgIC8vIHBpY2tcbiAgICAvLyBtdmdcbiAgICAvLyA/XG5cbiAgICBjb25zdCBpc1N0YXRpY1BpY2sgPSB0aGlzLmlzU3RhdGljKGNvbnRyb2wpO1xuICAgIGNvbnN0IHVpVHlwZSA9IGNvbnRyb2wuR2V0VUlUeXBlKCk7XG5cbiAgICBpZiAoaXNTdGF0aWMpIHsgLy8gY2FsbGVkIGdldFN0YXRpY0xPVlxuICAgICAgaWYgKCFpc1N0YXRpY1BpY2spIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgY29uc29sZS53YXJuKGBbTjE5XVRoZSBnZXRTdGF0aWNMT1YgY2FsbGVkIGZvciBub3Qgc3RhdGljIGNvbnRyb2wgLSAke3VpVHlwZX0uIFVzZSBnZXREeW5hbWljTE9WIG9yIHBpY2svbXZnYCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHsgLy8gY2FsbGVkIGdldER5bmFtaWNMT1ZcbiAgICAgIGlmIChpc1N0YXRpY1BpY2spIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdbTjE5XVRoZSBnZXREeW5hbWljTE9WIGNhbGxlZCBmb3Igc3RhdGljIGNvbnRyb2wuJyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMuY29uc3RzLmdldCgnU1dFX0NUUkxfQ09NQk9CT1gnKSAhPT0gdWlUeXBlKSB7IC8vIHRoZSBjb250cm9sIGlzIG5vdCBcIkpDb21ib0JveFwiXG4gICAgICAgIHN3aXRjaCAodWlUeXBlKSB7XG4gICAgICAgICAgY2FzZSB0aGlzLmNvbnN0cy5nZXQoJ1NXRV9DVFJMX1BJQ0snKTogLy8gUGlja1xuICAgICAgICAgIGNhc2UgdGhpcy5jb25zdHMuZ2V0KCdTV0VfQ1RSTF9NVkcnKTogLy8gTVZHXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICAgICAgY29uc29sZS53YXJuKGBbTjE5XVlvdSBuZWVkIHRvIHVzZSB0aGUgcG9wdXBzIGluc3RlYWQgb2YgZ2V0RHluYW1pY0xPViAtICR7dWlUeXBlfS5gKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICAgICAgY29uc29sZS53YXJuKGBbTjE5XVByb2JhYmx5IGdldER5bmFtaWNMT1YgaXMgbm90IGdvaW5nIHRvIHdvcmsgZm9yIHRoaXMgY29udHJvbCAtICR7dWlUeXBlfS5gKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlzU3RhdGljKGNvbnRyb2wpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzXG4gICAgcmV0dXJuICcxJyA9PT0gY29udHJvbC5Jc1N0YXRpY0JvdW5kZWQoKTtcbiAgfVxuXG4gIGlzRHluYW1pYyhjb250cm9sKSB7XG4gICAgcmV0dXJuICF0aGlzLmlzU3RhdGljKGNvbnRyb2wpXG4gICAgICAmJiB0aGlzLmNvbnN0cy5nZXQoJ1NXRV9DVFJMX0NPTUJPQk9YJykgPT09IGNvbnRyb2wuR2V0VUlUeXBlKCk7XG4gIH1cblxuICBfZ2V0Q29udHJvbER5bmFtaWNMT1YoY29udHJvbCkge1xuICAgIHRoaXMuX3ZhbGlkYXRlUGlja0NvbnRyb2woY29udHJvbCwgZmFsc2UpO1xuICAgIGNvbnN0IGNvbnRyb2xJbnB1dE5hbWUgPSBjb250cm9sLkdldElucHV0TmFtZSgpO1xuICAgIHRoaXMubG92W2NvbnRyb2xJbnB1dE5hbWVdID0ge307XG4gICAgY29uc3QgcHMgPSBTaWViZWxBcHAuU19BcHAuTmV3UHJvcGVydHlTZXQoKTtcbiAgICBwcy5TZXRQcm9wZXJ0eSgnU1dFRmllbGQnLCBjb250cm9sSW5wdXROYW1lKTtcbiAgICBwcy5TZXRQcm9wZXJ0eSgnU1dFSkknLCBmYWxzZSk7XG4gICAgdGhpcy5fc2V0QWN0aXZlQ29udHJvbChudWxsKTsgLy8gdG8gcHJldmVudCBVcGRhdGVQaWNrXG4gICAgdGhpcy5wbS5FeGVjdXRlTWV0aG9kKCdJbnZva2VNZXRob2QnLCAnR2V0UXVpY2tQaWNrSW5mbycsIHBzKTtcbiAgICByZXR1cm4gdGhpcy5sb3ZbY29udHJvbElucHV0TmFtZV07XG4gIH1cblxuICBfZ2V0Q29udHJvbFN0YXRpY0xPVihjb250cm9sKSB7XG4gICAgdGhpcy5fdmFsaWRhdGVQaWNrQ29udHJvbChjb250cm9sLCB0cnVlKTtcbiAgICBjb25zdCBhcnIgPSBOMTliYXNlQXBwbGV0LkdldFN0YXRpY0xPVihjb250cm9sLkdldFJhZGlvR3JvdXBQcm9wU2V0KCkuY2hpbGRBcnJheSk7XG4gICAgY29uc3QgcmV0ID0gYXJyLm1hcChlbCA9PiBlbC5EaXNwbGF5TmFtZSk7XG4gICAgcmV0dXJuIHJldC5zb3J0KCk7XG4gIH1cblxuICBnZXRMT1YoY29udHJvbE5hbWUpIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5fZ2V0Q29udHJvbChjb250cm9sTmFtZSk7XG4gICAgaWYgKHRoaXMuaXNTdGF0aWMoY29udHJvbCkpIHtcbiAgICAgIHJldHVybiB0aGlzLl9nZXRDb250cm9sU3RhdGljTE9WKGNvbnRyb2wpO1xuICAgIH1cbiAgICBpZiAodGhpcy5pc0R5bmFtaWMoY29udHJvbCkpIHtcbiAgICAgIHJldHVybiB0aGlzLl9nZXRDb250cm9sRHluYW1pY0xPVihjb250cm9sKTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKGAke2NvbnRyb2xOYW1lfSBpcyBub3QgYSBzdGF0aWMgb3IgYSBkeW5hbWljYCk7XG4gIH1cblxuICBnZXREeW5hbWljTE9WKGNvbnRyb2xOYW1lKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuX2dldENvbnRyb2woY29udHJvbE5hbWUpO1xuICAgIHJldHVybiB0aGlzLl9nZXRDb250cm9sRHluYW1pY0xPVihjb250cm9sKTtcbiAgfVxuXG4gIGdldFN0YXRpY0xPVihjb250cm9sTmFtZSkge1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLl9nZXRDb250cm9sKGNvbnRyb2xOYW1lKTtcbiAgICByZXR1cm4gdGhpcy5fZ2V0Q29udHJvbFN0YXRpY0xPVihjb250cm9sKTtcbiAgfVxuXG4gIF9nZXRKU1ZhbHVlKHZhbHVlLCB1aVR5cGUsIGRpc3BsYXlGb3JtYXQpIHtcbiAgICBpZiAodGhpcy5jb25zdHMuZ2V0KCdTV0VfQ1RSTF9DSEVDS0JPWCcpID09PSB1aVR5cGUpIHtcbiAgICAgIC8vIGNvbnZlcnQgWS9OL251bGwgLT4gdHJ1ZS9mYWxzZSAvLyBudWxsIGNvbWVzIGFzIGZhbHNlP1xuICAgICAgdGhpcy5ib29sT2JqZWN0LlNldEFzU3RyaW5nKHZhbHVlKTtcbiAgICAgIHJldHVybiB0aGlzLmJvb2xPYmplY3QuR2V0VmFsdWUoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuY29udmVydERhdGVzICYmIGRpc3BsYXlGb3JtYXQgJiYgdGhpcy5faXNEYXRlVGltZUNvbnRyb2wodWlUeXBlKSkge1xuICAgICAgaWYgKHZhbHVlID09PSAnJykge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIGxldCBJU08gPSAnJztcbiAgICAgIGlmICh0aGlzLmlzTGlzdEFwcGxldCkge1xuICAgICAgICBJU08gPSB0aGlzLnV0aWxzLlRvSVNPRm9ybWF0KHZhbHVlLCB0aGlzLmNvbnN0cy5nZXQoJ1NXRV9DVFJMX0RBVEVfUElDSycpICE9PSB1aVR5cGUsIGRpc3BsYXlGb3JtYXQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgSVNPID0gdGhpcy51dGlscy5HZXRJU09EYXRlVGltZSh2YWx1ZSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgICBpZiAoSVNPID09PSAnJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYElTTyB2YWx1ZSBpcyBlbXB0eSBhZnRlciBjb252ZXJ0aW5nICR7dmFsdWV9YCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3IERhdGUoSVNPKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgZ2V0Q3VycmVudFJlY29yZChyYXcpIHtcbiAgICAvLyBUT0RPOiBuZWVkIGNvbnZlcnNpb25cbiAgICBjb25zdCBpbmRleCA9IHRoaXMuZ2V0U2VsZWN0aW9uKCk7XG4gICAgLy8gVE9ETzogY2hlY2sgaWYgdGhlcmUgaXMgYSByZWNvcmRcbiAgICAvLyBUT0RPOiBtYWtlIGEgY29weSBvZiByZXR1cm5lZCBvYmplY3QgKHRvIGF2b2lkIHRoZSBhY2NpZGVudGFsIG1vZGlmaWNhdGlvbiBvZiB0aGUgcmVjb3Jkc2V0KT9cbiAgICBpZiAocmF3KSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRSYXdSZWNvcmRTZXQoKVtpbmRleF07XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmdldFJlY29yZFNldCgpW2luZGV4XTtcbiAgfVxuXG4gIGNhbGN1bGF0ZUN1cnJlbnRSZWNvcmRTdGF0ZSgpIHtcbiAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRvIGRlbGV0ZSBwZW5kaW5nXG4gICAgLy8gMCAtIE5vIHJlY29yZHMgZGlzcGxheWVkXG4gICAgLy8gMSAtIFJlY29yZCBpcyBiZWluZyBjcmVhdGVkXG4gICAgLy8gMiAtIFJlY29yZCBpcyBiZWluZyBlZGl0ZWRcbiAgICAvLyAzIC0gSXMgaW4gcXVlcnkgbW9kZVxuICAgIC8vIDQgLSBSZWNvcmQgaXMgZGlzcGxheWVkLFxuICAgIC8vIDUgLSBSZWNvcmQgaXMgcmVhZC1vbmx5XG5cbiAgICBjb25zdCBiYyA9IHRoaXMucG0uR2V0KCdHZXRCdXNDb21wJyk7XG5cbiAgICBpZiAodGhpcy5wbS5HZXQoJ0lzSW5RdWVyeU1vZGUnKSkge1xuICAgICAgLy8gaWYgbm8gcmVjb3JkcyBhbmQgdGhlIGVudGVyZWQgdGhlIHF1ZXJ5IG1vZGUsXG4gICAgICAvLyBzZWxlY3Rpb24gaXMgLTEsIHRoZXJlZm9yZSB3ZSBuZWVkIHRvIGNoZWNrIHF1ZXJ5IG1vZGUgZmlyc3RcbiAgICAgIHJldHVybiAzO1xuICAgIH1cbiAgICBpZiAodGhpcy5nZXRTZWxlY3Rpb24oKSA8IDApIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBpZiAoYmMuSXNJbnNlcnRQZW5kaW5nKCkpIHsgLy8gc2VlbXMgdGhlIGluc2VydFBlbmRpbmcgcHJvcGVydHkgZ2l2ZXMgbW9yZSBhY2N1cmF0ZSB2YWx1ZVxuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICAgIGlmIChiYy5Jc0NvbW1pdFBlbmRpbmcoKSkgeyAvLyBiYy5jb21taXRQZW5kaW5nIG9yIHRoaXMucG0uR2V0U3RhdGVVSU1hcCgpLkNvbW1pdFBlbmRpbmdcbiAgICAgIHJldHVybiAyO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuY2FuSW52b2tlTWV0aG9kKCdXcml0ZVJlY29yZCcpKSB7XG4gICAgICAvLyBvciB1c2UgdGhlIGNhblVwZGF0ZSBwcm9wZXJ0eSBvZiB0aGUgQkM/XG4gICAgICByZXR1cm4gNTtcbiAgICB9XG5cbiAgICByZXR1cm4gNDsgLy8gdGhpcyBpcyBhIGRlZmF1bHQgZmFsbGJhY2s7XG4gIH1cblxuICBfZ2V0TWV0aG9kcygpIHtcbiAgICBjb25zdCBtZXRob2RzID0ge307XG4gICAgY29uc3QgYXBwbGV0Q29udHJvbHMgPSB0aGlzLnBtLkdldCgnR2V0Q29udHJvbHMnKTsgLy8gZXZlbiBmb3IgbGlzdCBhcHBsZXRcbiAgICBjb25zdCBhcnIgPSBPYmplY3QuZW50cmllcyhhcHBsZXRDb250cm9scyk7XG4gICAgYXJyLmZvckVhY2goKGNvbnRyb2xFbnRyeSkgPT4ge1xuICAgICAgY29uc3QgY29udHJvbE1ldGhvZCA9IGNvbnRyb2xFbnRyeVsxXS5HZXRNZXRob2ROYW1lKCk7XG4gICAgICBpZiAodHlwZW9mIGNvbnRyb2xNZXRob2QgIT09ICd1bmRlZmluZWQnICYmIGNvbnRyb2xNZXRob2QgIT09ICcnKSB7XG4gICAgICAgIG1ldGhvZHNbY29udHJvbE1ldGhvZF0gPSB7fTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gbWV0aG9kcztcbiAgfVxuXG4gIGdldENvbnRyb2xEaXNwbGF5Rm9ybWF0KHVpVHlwZSkge1xuICAgIHN3aXRjaCAodWlUeXBlKSB7XG4gICAgICBjYXNlIHRoaXMuY29uc3RzLmdldCgnU1dFX0NUUkxfREFURV9UWl9QSUNLJyk6XG4gICAgICBjYXNlIHRoaXMuY29uc3RzLmdldCgnU1dFX0NUUkxfREFURV9USU1FX1BJQ0snKTpcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxlRGF0YS5kYXRlVGltZUZvcm1hdDtcbiAgICAgIGNhc2UgdGhpcy5jb25zdHMuZ2V0KCdTV0VfQ1RSTF9EQVRFX1BJQ0snKTpcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxlRGF0YS5kYXRlRm9ybWF0O1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgfVxuXG4gIGdldEN1cnJlbnRSZWNvcmRNb2RlbChfY29udHJvbHMsIF9tZXRob2RzKSB7XG4gICAgaWYgKCFfY29udHJvbHMpIHtcbiAgICAgIF9jb250cm9scyA9IHRoaXMuZ2V0Q29udHJvbHMoKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIH1cbiAgICBpZiAoIV9tZXRob2RzKSB7XG4gICAgICBfbWV0aG9kcyA9IHRoaXMuX2dldE1ldGhvZHMoKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIH1cbiAgICBfY29udHJvbHMuc3RhdGUgPSB0aGlzLmNhbGN1bGF0ZUN1cnJlbnRSZWNvcmRTdGF0ZSgpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgX2NvbnRyb2xzLmlkID0gJyc7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBsZXQgb2JqID0ge307XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmdldFNlbGVjdGlvbigpO1xuICAgIGlmIChpbmRleCA+IC0xICYmIF9jb250cm9scy5zdGF0ZSAhPT0gMykgeyAvLyBhZGRlZCBfY29udHJvbHMuc3RhdGUgIT09IDM7IHdlIGRvbid0IG5lZWQgaWQgaW4gcXVlcnkgbW9kZVxuICAgICAgb2JqID0gdGhpcy5nZXRSZWNvcmRTZXQoKVtpbmRleF07XG4gICAgICBfY29udHJvbHMuaWQgPSB0aGlzLmdldFJhd1JlY29yZFNldCgpW2luZGV4XS5JZDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIH1cbiAgICBjb25zdCBhcHBsZXRDb250cm9scyA9IHRoaXMuX3JldHVybkNvbnRyb2xzKCk7XG4gICAgLy8gcG9wdWxhdGUgY29udHJvbHNcbiAgICBsZXQgYXJyID0gT2JqZWN0LmtleXMoX2NvbnRyb2xzKTtcbiAgICBhcnIuZm9yRWFjaCgoY29udHJvbE5hbWUpID0+IHtcbiAgICAgIGNvbnN0IGNvbnRyb2wgPSBhcHBsZXRDb250cm9sc1tjb250cm9sTmFtZV07XG4gICAgICBpZiAodHlwZW9mIGNvbnRyb2wgPT09ICd1bmRlZmluZWQnKSB7IC8vIGp1c3QgaWYgc29tZWJvZHkgc2VuZHMgaW5jb3JyZWN0IG5hbWUgb2YgdGhlIGNvbnRyb2xcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgZmllbGROYW1lID0gY29udHJvbC5HZXRGaWVsZE5hbWUoKTtcbiAgICAgIGNvbnN0IHVpVHlwZSA9IGNvbnRyb2wuR2V0VUlUeXBlKCk7XG4gICAgICBjb25zdCBkaXNwbGF5Rm9ybWF0ID0gY29udHJvbC5HZXREaXNwbGF5Rm9ybWF0KCkgfHwgdGhpcy5nZXRDb250cm9sRGlzcGxheUZvcm1hdCh1aVR5cGUpO1xuICAgICAgaWYgKF9jb250cm9scy5pZCkge1xuICAgICAgICBfY29udHJvbHNbY29udHJvbE5hbWVdID0geyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICAgICAgdmFsdWU6IHRoaXMuX2dldEpTVmFsdWUob2JqW2ZpZWxkTmFtZV0sIGNvbnRyb2wuR2V0VUlUeXBlKCksIGRpc3BsYXlGb3JtYXQpLFxuICAgICAgICAgIHVpVHlwZSxcbiAgICAgICAgICByZWFkb25seTogIXRoaXMucG0uRXhlY3V0ZU1ldGhvZCgnQ2FuVXBkYXRlJywgY29udHJvbE5hbWUpLFxuICAgICAgICAgIGlzTGluazogdGhpcy5wbS5FeGVjdXRlTWV0aG9kKCdDYW5OYXZpZ2F0ZScsIGNvbnRyb2xOYW1lKSxcbiAgICAgICAgICBsYWJlbDogY29udHJvbC5HZXREaXNwbGF5TmFtZSgpLFxuICAgICAgICAgIGlzUG9zdENoYW5nZXM6IGNvbnRyb2wuSXNQb3N0Q2hhbmdlcygpLFxuICAgICAgICAgIHJlcXVpcmVkOiB0aGlzLl9pc1JlcXVpcmVkKGNvbnRyb2wuR2V0SW5wdXROYW1lKCkpLFxuICAgICAgICAgIG1heFNpemU6IGNvbnRyb2wuR2V0TWF4U2l6ZSgpLFxuICAgICAgICAgIGZpZWxkTmFtZSxcbiAgICAgICAgICBkaXNwbGF5Rm9ybWF0LFxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHsgLy8gbm8gcmVjb3JkIGRpc3BsYXllZFxuICAgICAgICBfY29udHJvbHNbY29udHJvbE5hbWVdID0geyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICAgICAgdmFsdWU6ICcnLFxuICAgICAgICAgIHVpVHlwZSxcbiAgICAgICAgICByZWFkb25seTogX2NvbnRyb2xzLnN0YXRlICE9PSAzLCAvLyBzaG91bGQgYmUgZWRpdHRhYmxlIGluIHF1ZXJ5IG1vZGVcbiAgICAgICAgICBpc0xpbms6IGZhbHNlLFxuICAgICAgICAgIGxhYmVsOiBjb250cm9sLkdldERpc3BsYXlOYW1lKCksXG4gICAgICAgICAgaXNQb3N0Q2hhbmdlczogY29udHJvbC5Jc1Bvc3RDaGFuZ2VzKCksXG4gICAgICAgICAgcmVxdWlyZWQ6IHRoaXMuX2lzUmVxdWlyZWQoY29udHJvbC5HZXRJbnB1dE5hbWUoKSksXG4gICAgICAgICAgbWF4U2l6ZTogY29udHJvbC5HZXRNYXhTaXplKCksXG4gICAgICAgICAgZmllbGROYW1lLFxuICAgICAgICAgIGRpc3BsYXlGb3JtYXQsXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfSk7XG4gICAgLy8gcG9wdWxhdGUgbWV0aG9kc1xuICAgIGlmIChfbWV0aG9kcykge1xuICAgICAgYXJyID0gT2JqZWN0LmtleXMoX21ldGhvZHMpO1xuICAgICAgLy8gVE9ETzogY291bGQgYmUgYW4gZXhjZXB0aW9uIGlmIG1ldGhvZCBuYW1lIGlzIGluY29ycmVjdFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBhcnIuZm9yRWFjaCgobWV0aG9kTmFtZSkgPT4geyBfbWV0aG9kc1ttZXRob2ROYW1lXSA9IHRoaXMuY2FuSW52b2tlTWV0aG9kKG1ldGhvZE5hbWUpOyB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbnRyb2xzOiBfY29udHJvbHMsXG4gICAgICBtZXRob2RzOiBfbWV0aG9kcyxcbiAgICB9O1xuICB9XG5cbiAgX2ZpbmRDb250cm9sVG9FbnRlclNlYXJjaEV4cHIoKSB7XG4gICAgY29uc3QgYXBwbGV0Q29udHJvbHMgPSB0aGlzLl9yZXR1cm5Db250cm9scygpO1xuICAgIGNvbnN0IGFyciA9IE9iamVjdC52YWx1ZXMoYXBwbGV0Q29udHJvbHMpO1xuICAgIGNvbnN0IGZvdW5kID0gYXJyLmZpbmQoKGNvbnRyb2wpID0+IHtcbiAgICAgIGNvbnN0IGNvbnRyb2xVaVR5cGUgPSBjb250cm9sLkdldFVJVHlwZSgpO1xuICAgICAgaWYgKCF0aGlzLl9pc1NraXBDb250cm9sKGNvbnRyb2xVaVR5cGUpKSB7XG4gICAgICAgIC8vIHNraXBwaW5nIGFsc28gSkNoZWNrYm94XG4gICAgICAgIHJldHVybiBjb250cm9sVWlUeXBlICE9PSB0aGlzLmNvbnN0cy5nZXQoJ1NXRV9DVFJMX0NIRUNLQk9YJyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gICAgcmV0dXJuIGZvdW5kO1xuICB9XG5cbiAgX25ld1F1ZXJ5KCkge1xuICAgIHJldHVybiB0aGlzLnBtLkV4ZWN1dGVNZXRob2QoJ0ludm9rZU1ldGhvZCcsICdOZXdRdWVyeScpO1xuICB9XG5cbiAgcXVlcnlCeVNlYXJjaEV4cHJTeW5jKGV4cHIpIHtcbiAgICB0aGlzLl9uZXdRdWVyeSgpOyAvLyA/IGNoZWNrIG9yIG9wdGlvbmFsbHkgc2tpcFxuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLl9maW5kQ29udHJvbFRvRW50ZXJTZWFyY2hFeHByKCk7XG4gICAgdGhpcy5fc2V0Q29udHJvbFZhbHVlSW50ZXJuYWwoY29udHJvbCwgZXhwcik7XG4gICAgdGhpcy5wbS5FeGVjdXRlTWV0aG9kKCdJbnZva2VNZXRob2QnLCAnRXhlY3V0ZVF1ZXJ5Jyk7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UmVjb3JkU2V0KCkubGVuZ3RoO1xuICB9XG5cbiAgcXVlcnlCeUlkU3luYyhyb3dJZCkge1xuICAgIGxldCBleHByO1xuICAgIGlmIChBcnJheSA9PT0gcm93SWQuY29uc3RydWN0b3IpIHtcbiAgICAgIGV4cHIgPSByb3dJZC5tYXAoZWwgPT4gYElkPVwiJHtlbH1cImApLmpvaW4oJyBPUiAnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXhwciA9IGBJZD1cIiR7cm93SWR9XCJgO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5xdWVyeUJ5U2VhcmNoRXhwclN5bmMoZXhwcik7XG4gIH1cblxuICBxdWVyeUJ5SWQocm93SWQsIGNiKSB7XG4gICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gdGhpcy5fcXVlcnlCeUlkKHJvd0lkLCByZXNvbHZlKSk7XG4gICAgY29uc3QgcmV0ID0gcHJvbWlzZS50aGVuKCgpID0+IHRoaXMuZ2V0UmVjb3JkU2V0KCkubGVuZ3RoKTtcbiAgICByZXR1cm4gdHlwZW9mIGNiID09PSAnZnVuY3Rpb24nID8gcmV0LnRoZW4oY2IpIDogcmV0O1xuICB9XG5cbiAgX3F1ZXJ5QnlJZChyb3dJZCwgY2IpIHtcbiAgICB0aGlzLl9uZXdRdWVyeSgpOyAvLyA/IGNoZWNrIG9yIG9wdGlvbmFsbHkgc2tpcFxuXG4gICAgY29uc3QgYWkgPSB7XG4gICAgICBzY29wZTogdGhpcyxcbiAgICAgIGFzeW5jOiB0cnVlLFxuICAgICAgc2VsZmJ1c3k6IHRydWUsXG4gICAgfTtcbiAgICBpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBhaS5jYiA9IGNiO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLl9maW5kQ29udHJvbFRvRW50ZXJTZWFyY2hFeHByKCk7XG4gICAgdGhpcy5fc2V0Q29udHJvbFZhbHVlSW50ZXJuYWwoY29udHJvbCwgYElkPVwiJHtyb3dJZH1cImApO1xuICAgIHJldHVybiB0aGlzLnBtLkV4ZWN1dGVNZXRob2QoJ0ludm9rZU1ldGhvZCcsICdFeGVjdXRlUXVlcnknLCBudWxsLCBhaSk7XG4gIH1cblxuICBxdWVyeShwYXJhbXMsIGNiKSB7XG4gICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gdGhpcy5fcXVlcnkocGFyYW1zLCByZXNvbHZlKSk7XG4gICAgY29uc3QgcmV0ID0gcHJvbWlzZS50aGVuKCgpID0+IHRoaXMuZ2V0UmVjb3JkU2V0KCkubGVuZ3RoKTtcbiAgICByZXR1cm4gdHlwZW9mIGNiID09PSAnZnVuY3Rpb24nID8gcmV0LnRoZW4oY2IpIDogcmV0O1xuICB9XG5cbiAgX3F1ZXJ5KHBhcmFtcywgY2IpIHtcbiAgICAvLyBUT0RPOiBjaGVjayBpZiBpdCBpcyBhbHJlYWR5IGluIHF1ZXJ5IG1vZGUgdG8gYXZvaWQgY2FsbGluZyB0aGUgbmV3IHF1ZXJ5IGFnYWluXG4gICAgLy8gb3IgYWNjZXB0IHRoZSBpbnB1dCBwYXJhbWV0ZXIgdG8gc2tpcCBjYWxsaW5nIHRoZSBuZXcgcXVlcnk/XG4gICAgLy8gb3IgbWF5YmUgYmV0dGVyIHRvIGNhbmNlbCB0aGUgZXhpc3RpbmcgcXVlcnk/XG4gICAgdGhpcy5fbmV3UXVlcnkoKTtcblxuICAgIGNvbnN0IGFpID0ge1xuICAgICAgc2NvcGU6IHRoaXMsXG4gICAgICBhc3luYzogdHJ1ZSxcbiAgICAgIHNlbGZidXN5OiB0cnVlLFxuICAgIH07XG4gICAgaWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYWkuY2IgPSBjYjtcbiAgICB9XG5cbiAgICBjb25zdCBfY29udHJvbHMgPSB0aGlzLl9yZXR1cm5Db250cm9scygpO1xuICAgIGNvbnN0IGFyciA9IE9iamVjdC5rZXlzKHBhcmFtcyk7XG4gICAgYXJyLmZvckVhY2goKGNvbnRyb2xOYW1lKSA9PiB7XG4gICAgICBjb25zdCBjb250cm9sID0gX2NvbnRyb2xzW2NvbnRyb2xOYW1lXTtcbiAgICAgIGlmIChjb250cm9sKSB7XG4gICAgICAgIHRoaXMuX3NldENvbnRyb2xWYWx1ZUludGVybmFsKGNvbnRyb2wsIHRoaXMuX2dldFNpZWJlbFZhbHVlKHBhcmFtc1tjb250cm9sTmFtZV0sIGNvbnRyb2wuR2V0VUlUeXBlKCkpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFRoZSBjb250cm9sIFwiJHtjb250cm9sTmFtZX1cIiBpcyBub3QgZm91bmQhYCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXMucG0uRXhlY3V0ZU1ldGhvZCgnSW52b2tlTWV0aG9kJywgJ0V4ZWN1dGVRdWVyeScsIG51bGwsIGFpKTtcbiAgfVxuXG4gIHN0YXRpYyBSZXF1ZXJ5KG5hbWUpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gU2llYmVsQXBwLlNfQXBwLkdldFNlcnZpY2UoJ04xOSBCUycpO1xuICAgIGlmIChzZXJ2aWNlKSB7XG4gICAgICBjb25zdCBpblByb3BTZXQgPSBTaWViZWxBcHAuU19BcHAuTmV3UHJvcGVydHlTZXQoKTtcbiAgICAgIGluUHJvcFNldC5TZXRQcm9wZXJ0eSgnbmFtZScsIG5hbWUpO1xuICAgICAgc2VydmljZS5JbnZva2VNZXRob2QoJ1JlcXVlcnknLCBpblByb3BTZXQsIHt9KTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgUmVmcmVzaChuYW1lKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IFNpZWJlbEFwcC5TX0FwcC5HZXRTZXJ2aWNlKCdOMTkgQlMnKTtcbiAgICBpZiAoc2VydmljZSkge1xuICAgICAgY29uc3QgaW5Qcm9wU2V0ID0gU2llYmVsQXBwLlNfQXBwLk5ld1Byb3BlcnR5U2V0KCk7XG4gICAgICBpblByb3BTZXQuU2V0UHJvcGVydHkoJ25hbWUnLCBuYW1lKTtcbiAgICAgIHNlcnZpY2UuSW52b2tlTWV0aG9kKCdSZWZyZXNoJywgaW5Qcm9wU2V0LCB7fSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0TVZGKGlkcywgZmllbGRzLCB1c2VBY3RpdmVCTykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB0aGlzLl9nZXRNVkYoaWRzLCBmaWVsZHMsIHVzZUFjdGl2ZUJPLCByZXNvbHZlLCByZWplY3QpKTtcbiAgfVxuXG4gIF9nZXRGaWVsZE5hbWVGb3JDb250cm9sKGNvbnRyb2xOYW1lKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuX2dldENvbnRyb2woY29udHJvbE5hbWUpO1xuICAgIC8vIGlmIG5vdCBmb3VuZCwgdGhlIGlucHV0IHZhbHVlIGlzIHJldHVybmVkXG4gICAgaWYgKGNvbnRyb2wpIHtcbiAgICAgIHJldHVybiBjb250cm9sLkdldEZpZWxkTmFtZSgpO1xuICAgIH1cbiAgICByZXR1cm4gY29udHJvbE5hbWU7IC8vIGZhbGxiYWNrIC0ganVzdCBpbiBjYXNlIHdlIGdvdCB0aGUgZmllbGQgbmFtZVxuICB9XG5cbiAgX2dldE1WRihpZHMsIGZpZWxkcywgdXNlQWN0aXZlQk8sIHJlc29sdmUsIHJlamVjdCkge1xuICAgIGNvbnN0IGFyciA9IE9iamVjdC5lbnRyaWVzKGZpZWxkcyk7XG4gICAgY29uc3QgcHNJbnB1dHMgPSBTaWViZWxBcHAuU19BcHAuTmV3UHJvcGVydHlTZXQoKTtcbiAgICBwc0lucHV0cy5TZXRQcm9wZXJ0eSgnQk8nLCBTaWViZWxBcHAuU19BcHAuR2V0QWN0aXZlQnVzT2JqKCkuR2V0TmFtZSgpKTtcbiAgICBwc0lucHV0cy5TZXRQcm9wZXJ0eSgnQkMnLCB0aGlzLnBtLkdldCgnR2V0QnVzQ29tcCcpLkdldE5hbWUoKSk7XG4gICAgcHNJbnB1dHMuU2V0UHJvcGVydHkoJ1VzZUFjdGl2ZUJPJywgdXNlQWN0aXZlQk8gPyAnWScgOiAnTicpO1xuICAgIHBzSW5wdXRzLlNldFByb3BlcnR5KCdJRCcsIGlkcy5qb2luKCcsJykpO1xuICAgIGFyci5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgY29uc3QgcHMgPSBTaWViZWxBcHAuU19BcHAuTmV3UHJvcGVydHlTZXQoKTtcbiAgICAgIHBzLlNldFR5cGUodGhpcy5fZ2V0RmllbGROYW1lRm9yQ29udHJvbChlbFswXSkpO1xuICAgICAgcHMuU2V0UHJvcGVydHkoJ0ZpZWxkcycsIGVsWzFdLmpvaW4oJywnKSk7XG4gICAgICBwc0lucHV0cy5BZGRDaGlsZChwcy5DbG9uZSgpKTtcbiAgICB9KTtcbiAgICBjb25zdCBicyA9IFNpZWJlbEFwcC5TX0FwcC5HZXRTZXJ2aWNlKCdOMTkgQlMnKTtcbiAgICBjb25zdCBhaSA9IHtcbiAgICAgIGFzeW5jOiB0cnVlLFxuICAgICAgc2VsZmJ1c3k6IHRydWUsXG4gICAgICBzY29wZTogdGhpcyxcbiAgICAgIGVycmNiOiAoKSA9PiB7XG4gICAgICAgIHJlamVjdCgpO1xuICAgICAgfSxcbiAgICAgIGNiOiAobWV0aG9kTmFtZSwgSW5wdXRzLCBwc091dHB1dHMpID0+IHtcbiAgICAgICAgY29uc3QgcmV0ID0ge307XG4gICAgICAgIGNvbnN0IHsgY2hpbGRBcnJheSB9ID0gcHNPdXRwdXRzLkdldENoaWxkQnlUeXBlKCdSZXN1bHRTZXQnKSB8fCB7fTsgLy8gdG8gYmUgc2FmZSB3aGVuIG5vIHJlc3VsdHNcbiAgICAgICAgKGNoaWxkQXJyYXkgfHwgW10pLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgICAgcmV0W2NoaWxkLkdldFR5cGUoKV0gPSB7fTtcbiAgICAgICAgICBjaGlsZC5jaGlsZEFycmF5LmZvckVhY2goKGdyYW5kQ2hpbGQpID0+IHtcbiAgICAgICAgICAgIHJldFtjaGlsZC5HZXRUeXBlKCldW2dyYW5kQ2hpbGQuR2V0VHlwZSgpXSA9IGdyYW5kQ2hpbGQuY2hpbGRBcnJheS5tYXAoKHJlYykgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBwcmltYXJ5ID0gcmVjLnByb3BBcnJheVsnU1NBIFByaW1hcnkgRmllbGQnXTtcbiAgICAgICAgICAgICAgdGhpcy5ib29sT2JqZWN0LlNldEFzU3RyaW5nKHByaW1hcnkpO1xuICAgICAgICAgICAgICByZWMucHJvcEFycmF5WydTU0EgUHJpbWFyeSBGaWVsZCddID0gdGhpcy5ib29sT2JqZWN0LkdldFZhbHVlKCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHJlYy5wcm9wQXJyYXkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXNvbHZlKHJldCk7XG4gICAgICB9LFxuICAgIH07XG4gICAgcmV0dXJuIGJzLkludm9rZU1ldGhvZCgnUmV0dXJuTVZHRmllbGRzJywgcHNJbnB1dHMsIGFpKTtcbiAgfVxuXG4gIHNhdmVQcmVmKG5hbWUsIHZhbHVlKSB7XG4gICAgLy8gdmFsdWUgaXMgYSBzdHJpbmdcbiAgICAvLyB2YWx1ZSBpcyBib3VuZCB0byBhcHBsZXQgYW5kIHZpZXdcbiAgICBjb25zdCBwc0lucHV0ID0gU2llYmVsQXBwLlNfQXBwLk5ld1Byb3BlcnR5U2V0KCk7XG4gICAgcHNJbnB1dC5TZXRQcm9wZXJ0eSgnS2V5JywgbmFtZSk7XG4gICAgcHNJbnB1dC5TZXRQcm9wZXJ0eShuYW1lLCB2YWx1ZSk7XG4gICAgdGhpcy5wbS5PbkNvbnRyb2xFdmVudChcbiAgICAgIHRoaXMuY29uc3RzLmdldCgnUEhZRVZFTlRfSU5WT0tFX0NPTlRST0wnKSxcbiAgICAgIHRoaXMucG0uR2V0KHRoaXMuY29uc3RzLmdldCgnU1dFX01USERfVVBEQVRFX1VTRVJfUFJFRicpKSxcbiAgICAgIHBzSW5wdXQsXG4gICAgKTtcbiAgICByZXR1cm4gdGhpcy5wbS5TZXRQcm9wZXJ0eShuYW1lLCB2YWx1ZSk7XG4gIH1cblxuICByZWFkUHJlZihuYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMucG0uR2V0KG5hbWUpO1xuICB9XG5cbiAgX3JldHJpZXZlRGF0YShhbW91bnQpIHsgLy8gdGVtcCBtZXRob2QgLSB3aWxsIGJlIHJlbW92ZWRcbiAgICBjb25zdCBkYXRhID0gbmV3IE1hcCgpO1xuXG4gICAgd2hpbGUgKGRhdGEuc2l6ZSA8IGFtb3VudCkge1xuICAgICAgY29uc3QgYXJyID0gdGhpcy5nZXRSYXdSZWNvcmRTZXQoKTtcblxuICAgICAgLy8gYXZvaWQgdGhlIGR1cGxpY2F0ZXNcbiAgICAgIGFyci5mb3JFYWNoKGVsID0+IGRhdGEuc2V0KGVsLklkLCBlbCkpO1xuXG4gICAgICAvLyB3ZSBhcmUgdXNpbmcgY2FuSW52b2tlTWV0aG9kLCBhcyBpbiAxNi4wIG5leHRSZWNvcmRTZXQgYWx3YXlzIHJldHVybnMgdW5kZWZpbmVkXG4gICAgICBpZiAoIXRoaXMuY2FuSW52b2tlTWV0aG9kKCdHb3RvTmV4dFNldCcpKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICB0aGlzLm5leHRSZWNvcmRTZXQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgZGF0YTogWy4uLmRhdGEudmFsdWVzKCldLFxuICAgICAgaGFzTmV4dDogdGhpcy5jYW5JbnZva2VNZXRob2QoJ0dvdG9OZXh0U2V0JyksXG4gICAgfTtcbiAgfVxuXG4gIF9zZXRGaWVsZFZhbHVlKG5hbWUsIHZhbHVlKSB7XG4gICAgY29uc29sZS53YXJuKCdbTjE5XV9zZXRGaWVsZFZhbHVlIHdpbGwgYmUgcmVtb3ZlZCBpbiB0aGUgZnV0dXJlIScpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICB0aGlzLmFwcGxldC5TZXRDb250cm9sVmFsdWVCeU5hbWUobmFtZSwgdmFsdWUpO1xuICAgIHJldHVybiB0aGlzLnBtLkV4ZWN1dGVNZXRob2QoJ0ludm9rZU1ldGhvZCcsICdXcml0ZVJlY29yZCcpO1xuICB9XG5cbiAgLy8gdGhpcyBpcyBhbHNvIGNhbGxlZCBmcm9tIHRoZSB0aGUgZGVtbyB3aGVyZSBTaWViZWwgYW5kIGN1c3RvbSByZW5kZXJlZCBhcHBsZXQgY29leGlzdFxuICBfZ2V0RmllbGRUb0NvbnRyb2xNYXAoX2NvbnRyb2xzKSB7XG4gICAgY29uc3QgcmV0ID0ge307XG4gICAgY29uc3QgYXBwbGV0Q29udHJvbHMgPSB0aGlzLl9yZXR1cm5Db250cm9scygpO1xuICAgIGNvbnN0IGFyciA9IE9iamVjdC5rZXlzKF9jb250cm9scyB8fCBhcHBsZXRDb250cm9scyk7XG4gICAgYXJyLmZvckVhY2goKGNvbnRyb2xOYW1lKSA9PiB7XG4gICAgICBjb25zdCBjb250cm9sID0gYXBwbGV0Q29udHJvbHNbY29udHJvbE5hbWVdO1xuICAgICAgY29uc3QgZmllbGROYW1lID0gY29udHJvbC5HZXRGaWVsZE5hbWUoKTtcbiAgICAgIGlmIChmaWVsZE5hbWUpIHtcbiAgICAgICAgY29uc3QgdWlUeXBlID0gY29udHJvbC5HZXRVSVR5cGUoKTtcbiAgICAgICAgcmV0W2ZpZWxkTmFtZV0gPSB7XG4gICAgICAgICAgbmFtZTogY29udHJvbE5hbWUsXG4gICAgICAgICAgaXNQb3N0Q2hhbmdlczogY29udHJvbC5Jc1Bvc3RDaGFuZ2VzKCksXG4gICAgICAgICAgdWlUeXBlLFxuICAgICAgICAgIGRpc3BsYXlGb3JtYXQ6IGNvbnRyb2wuR2V0RGlzcGxheUZvcm1hdCgpIHx8IHRoaXMuZ2V0Q29udHJvbERpc3BsYXlGb3JtYXQodWlUeXBlKSxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgZ2V0Q29udHJvbHNSZWNvcmRTZXQoKSB7XG4gICAgLy8gdXNlZCBzbGljZSB0byBhdm9pZCBtb2RpZmljYXRpb24gb2YgdGhlIHJlY29yZCBzZXRcbiAgICBjb25zdCByZXQgPSB0aGlzLmdldFJlY29yZFNldCgpLnNsaWNlKCk7XG4gICAgY29uc3QgcmF3UmVjb3JkU2V0ID0gdGhpcy5nZXRSYXdSZWNvcmRTZXQoKTsgLy8ganVzdCBmYWxsYmFjayBpZiByZWNvcmQgc2V0IGRvZXMgbm90IGhhdmUgSWRcblxuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSByZXQubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGlkID0gcmV0W2ldLklkO1xuICAgICAgcmV0W2ldID0gT2JqZWN0LmtleXMocmV0W2ldKS5maWx0ZXIoZWwgPT4gdGhpcy5maWVsZFRvQ29udHJvbE1hcFtlbF0pLnJlZHVjZSgoYWNjLCBlbCkgPT4gKHtcbiAgICAgICAgLi4uYWNjLFxuICAgICAgICAuLi57XG4gICAgICAgICAgW3RoaXMuZmllbGRUb0NvbnRyb2xNYXBbZWxdLm5hbWVdOiB0aGlzLl9nZXRKU1ZhbHVlKHJldFtpXVtlbF0sXG4gICAgICAgICAgICB0aGlzLmZpZWxkVG9Db250cm9sTWFwW2VsXS51aVR5cGUsXG4gICAgICAgICAgICB0aGlzLmZpZWxkVG9Db250cm9sTWFwW2VsXS5kaXNwbGF5Rm9ybWF0KSxcbiAgICAgICAgfSxcbiAgICAgIH0pLCB7fSk7XG4gICAgICBpZiAoaWQpIHtcbiAgICAgICAgcmV0W2ldLklkID0gaWQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXRbaV0uSWQgPSByYXdSZWNvcmRTZXRbaV0uSWQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIHNvcnQoY29udHJvbE5hbWUsIGlzQXNjZW5kaW5nKSB7XG4gICAgLy8gVE9ETzogY2hlY2sgaWYgc29ydGFibGU/IGUuZy4gbm90IGluIHF1ZXJ5IG1vZGVcbiAgICAvLyBUT0RPOiBjaGVjayBpZiB3ZSBjYW4gc29ydCBieSB0aGlzIGNvbnRyb2w/IGNvbnRyb2wgaGFzIElzU29ydGFibGUgZnVuYywgYnV0IHdlIGRvbid0IHJldHVybiB0aGUgb3V0cHV0IG9mIGl0XG4gICAgaWYgKHRoaXMuaXNMaXN0QXBwbGV0KSB7XG4gICAgICBjb25zdCBzb3J0T3JkZXIgPSBpc0FzY2VuZGluZyA/IHRoaXMuY29uc3RzLmdldCgnU09SVF9BU0NFTkRJTkcnKSA6IHRoaXMuY29uc3RzLmdldCgnU09SVF9ERVNDRU5ESU5HJyk7XG4gICAgICB0aGlzLmFwcGxldC5PbkNsaWNrU29ydChjb250cm9sTmFtZSwgc29ydE9yZGVyKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE4xOW5vdGlmaWNhdGlvbnMge1xuICBjb25zdHJ1Y3RvcihwbSwgY29uc3RzLCBiY0lkLCBmaWVsZFRvQ29udHJvbE1hcCkge1xuICAgIGxldCByZWNlaXZlZE5vdGlmaWNhdGlvbnMgPSBbXTtcbiAgICB0aGlzLnRva2VuID0gMDtcbiAgICB0aGlzLnN1YnNjcmliZXJzID0gW107XG5cbiAgICBwbS5BdHRhY2hOb3RpZmljYXRpb25IYW5kbGVyKGNvbnN0cy5nZXQoJ1NXRV9QUk9QX0JDX05PVElfQkVHSU4nKSwgKHByb3BTZXQpID0+IHtcbiAgICAgIGlmIChiY0lkID09PSBwcm9wU2V0LkdldFByb3BlcnR5KCdiYycpKSB7XG4gICAgICAgIHJlY2VpdmVkTm90aWZpY2F0aW9ucyA9IFtdO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcG0uQXR0YWNoTm90aWZpY2F0aW9uSGFuZGxlcihjb25zdHMuZ2V0KCdTV0VfUFJPUF9CQ19OT1RJX05FV19BQ1RJVkVfUk9XJyksIChwcm9wU2V0KSA9PiB7XG4gICAgICBpZiAoYmNJZCA9PT0gcHJvcFNldC5HZXRQcm9wZXJ0eSgnYmMnKSkge1xuICAgICAgICByZWNlaXZlZE5vdGlmaWNhdGlvbnMucHVzaCgnU1dFX1BST1BfQkNfTk9USV9ORVdfQUNUSVZFX1JPVycpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcG0uQXR0YWNoTm90aWZpY2F0aW9uSGFuZGxlcihjb25zdHMuZ2V0KCdTV0VfUFJPUF9CQ19OT1RJX1NUQVRFX0NIQU5HRUQnKSwgKHByb3BTZXQpID0+IHtcbiAgICAgIGNvbnN0IHN0YXRlcyA9IFsnY3AnLCAnbiddO1xuICAgICAgaWYgKGJjSWQgPT09IHByb3BTZXQuR2V0UHJvcGVydHkoJ2JjJykpIHtcbiAgICAgICAgaWYgKCFzdGF0ZXMuaW5jbHVkZXMocHJvcFNldC5HZXRQcm9wZXJ0eSgnc3RhdGUnKSkpIHtcbiAgICAgICAgICByZWNlaXZlZE5vdGlmaWNhdGlvbnMucHVzaCgnU1dFX1BST1BfQkNfTk9USV9TVEFURV9DSEFOR0VEJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIG9yIFNXRV9QUk9QX0JDX05PVElfTkVXX0ZJRUxEX0RBVEE/XG4gICAgcG0uQXR0YWNoTm90aWZpY2F0aW9uSGFuZGxlcihjb25zdHMuZ2V0KCdTV0VfUFJPUF9CQ19OT1RJX05FV19EQVRBX1dTJyksIChwcm9wU2V0KSA9PiB7XG4gICAgICBpZiAoYmNJZCA9PT0gcHJvcFNldC5HZXRQcm9wZXJ0eSgnYmMnKSkge1xuICAgICAgICBjb25zdCBmaWVsZE5hbWUgPSBwcm9wU2V0LkdldFByb3BlcnR5KGNvbnN0cy5nZXQoJ1NXRV9QUk9QX05PVElfRklFTEQnKSk7XG4gICAgICAgIGNvbnN0IGNvbnRyb2wgPSBmaWVsZFRvQ29udHJvbE1hcFtmaWVsZE5hbWVdO1xuICAgICAgICBpZiAoY29udHJvbCAmJiBjb250cm9sLnVpVHlwZSAhPT0gY29uc3RzLmdldCgnU1dFX0NUUkxfTVZHJykpIHtcbiAgICAgICAgICByZWNlaXZlZE5vdGlmaWNhdGlvbnMucHVzaCgnU1dFX1BST1BfQkNfTk9USV9ORVdfREFUQV9XUycpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBwbS5BdHRhY2hOb3RpZmljYXRpb25IYW5kbGVyKGNvbnN0cy5nZXQoJ1NXRV9QUk9QX0JDX05PVElfREVMRVRFX1JFQ09SRCcpLCAocHJvcFNldCkgPT4ge1xuICAgICAgaWYgKGJjSWQgPT09IHByb3BTZXQuR2V0UHJvcGVydHkoJ2JjJykpIHtcbiAgICAgICAgcmVjZWl2ZWROb3RpZmljYXRpb25zLnB1c2goJ1NXRV9QUk9QX0JDX05PVElfREVMRVRFX1JFQ09SRCcpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcG0uQXR0YWNoTm90aWZpY2F0aW9uSGFuZGxlcihjb25zdHMuZ2V0KCdTV0VfUFJPUF9CQ19OT1RJX05FV19SRUNPUkQnKSwgKHByb3BTZXQpID0+IHtcbiAgICAgIGlmIChiY0lkID09PSBwcm9wU2V0LkdldFByb3BlcnR5KCdiYycpKSB7XG4gICAgICAgIHJlY2VpdmVkTm90aWZpY2F0aW9ucy5wdXNoKCdTV0VfUFJPUF9CQ19OT1RJX05FV19SRUNPUkQnKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHBtLkF0dGFjaE5vdGlmaWNhdGlvbkhhbmRsZXIoY29uc3RzLmdldCgnU1dFX1BST1BfQkNfTk9USV9FTkQnKSwgKHByb3BTZXQpID0+IHtcbiAgICAgIGlmIChiY0lkID09PSBwcm9wU2V0LkdldFByb3BlcnR5KCdiYycpKSB7XG4gICAgICAgIGlmIChyZWNlaXZlZE5vdGlmaWNhdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIC8vIHdlIGFzc3VtZSB0aGF0IHRoZSBmdW5jdGlvbiBkb2VzIG5vdCB0aHJvdyBhbiBlcnJvciwgc28gbm8gZXJyb3IgaGFuZGxpbmcgaGVyZVxuICAgICAgICAgIHRoaXMuc3Vic2NyaWJlcnMuZm9yRWFjaChlbCA9PiBlbC5mdW5jKCkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzdWJzY3JpYmUoZnVuYykge1xuICAgIGlmICh0eXBlb2YgZnVuYyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdmdW5jIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG4gICAgfVxuICAgIHRoaXMudG9rZW4gKz0gMTtcbiAgICB0aGlzLnN1YnNjcmliZXJzLnB1c2goeyB0b2tlbjogdGhpcy50b2tlbiwgZnVuYyB9KTtcbiAgICByZXR1cm4gdGhpcy50b2tlbjtcbiAgfVxuXG4gIHVuc3Vic2NyaWJlKHN1YlRva2VuKSB7XG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHRoaXMuc3Vic2NyaWJlcnMubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgIGlmIChzdWJUb2tlbiA9PT0gdGhpcy5zdWJzY3JpYmVyc1tpXS50b2tlbikge1xuICAgICAgICByZXR1cm4gdGhpcy5zdWJzY3JpYmVycy5zcGxpY2UoaSwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIiwiaW1wb3J0IE4xOWJhc2VBcHBsZXQgZnJvbSAnLi9uMTliYXNlQXBwbGV0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTjE5cG9wdXBBcHBsZXQgZXh0ZW5kcyBOMTliYXNlQXBwbGV0IHtcbiAgY29uc3RydWN0b3Ioc2V0dGluZ3MpIHtcbiAgICBzdXBlcihzZXR0aW5ncyk7XG4gICAgY29uc29sZS5sb2coYCR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfSBzdGFydGVkLi4uYCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuXG4gICAgaWYgKHRoaXMuaXNMaXN0QXBwbGV0KSB7XG4gICAgICB0aGlzLnBtLkdldFJlbmRlcmVyKCkucmVzaXplID0gKCkgPT4gMDtcbiAgICAgIHRoaXMucG0uR2V0UmVuZGVyZXIoKS5HZXRTZWxlY3RlZFJvdyA9ICgpID0+IDA7XG4gICAgfVxuICB9XG5cbiAgcGlja1JlY29yZCgpIHtcbiAgICAvLyBUT0RPOiBjaGVjayBjYW5Jbm9rZU1ldGhvZD9cbiAgICByZXR1cm4gdGhpcy5wbS5FeGVjdXRlTWV0aG9kKCdJbnZva2VNZXRob2QnLCAnUGlja1JlY29yZCcpO1xuICB9XG5cbiAgZGVsZXRlUmVjb3JkcyhjYikge1xuICAgIC8vIG1ldGhvZCBpcyBub3QgYWxsb3dlZCB0byBkZWxldGUgdGhlIHByaW1hcnkgZm9yIHZpc2liaWxpdHkgTVZHXG4gICAgLy8gIGluIHRoaXMgY2FzZSBpdCByZXR1cm5zIFwiTWV0aG9kIERlbGV0ZVJlY29yZHMgaXMgbm90IGFsbG93ZWQgaGVyZVwiIFNCTC1VSUYtMDAzNDhcbiAgICAvLyBUT0RPOiBjaGVjayBjYW5JbnZva2VNZXRob2Q/XG4gICAgY29uc3QgcmV0ID0gdGhpcy5wbS5FeGVjdXRlTWV0aG9kKCdJbnZva2VNZXRob2QnLCAnRGVsZXRlUmVjb3JkcycpO1xuICAgIGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNiKCk7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICBkZWxldGVBbGxSZWNvcmRzKGNiKSB7XG4gICAgLy8gbWV0aG9kIGlzIG5vdCBkZWxldGluZyB0aGUgcHJpbWFyeSBmb3IgdmlzaWJpbGl0eSBNVkcoISkgYW5kIHN0aWxsIHJldHVybnMgdHJ1ZVxuICAgIC8vIFRPRE86IGNoZWNrIGNhbkludm9rZU1ldGhvZD9cbiAgICBjb25zdCByZXQgPSB0aGlzLnBtLkV4ZWN1dGVNZXRob2QoJ0ludm9rZU1ldGhvZCcsICdEZWxldGVBbGxSZWNvcmRzJyk7XG4gICAgaWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2IoKTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIGFkZFJlY29yZHMoY2IpIHtcbiAgICAvLyBUT0RPOiBjaGVjayBjYW5JbnZva2VNZXRob2Q/XG4gICAgY29uc3QgcmV0ID0gdGhpcy5wbS5FeGVjdXRlTWV0aG9kKCdJbnZva2VNZXRob2QnLCAnQWRkUmVjb3JkcycpO1xuICAgIGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNiKCk7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICBhZGRBbGxSZWNvcmRzKGNiKSB7XG4gICAgLy8gVE9ETzogY2hlY2sgY2FuSW52b2tlTWV0aG9kP1xuICAgIGNvbnN0IHJldCA9IHRoaXMucG0uRXhlY3V0ZU1ldGhvZCgnSW52b2tlTWV0aG9kJywgJ0FkZEFsbFJlY29yZHMnKTtcbiAgICBpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjYigpO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgX2ZpcnN0UmVjb3JkKCkgeyAvLyB0ZW1wIG1ldGhvZCwgYXNzdW1lcyB0aGF0IG5vIHNjcm9sbGluZyBoYXBwZW5lZFxuICAgIGlmICh0aGlzLmlzTGlzdEFwcGxldCkge1xuICAgICAgaWYgKHRoaXMuZ2V0U2VsZWN0aW9uKCkgIT09IDApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb25PblJvdygwKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiIsImltcG9ydCBOMTlwb3B1cEFwcGxldCBmcm9tICcuL24xOXBvcHVwQXBwbGV0JztcblxuY29uc3Qgc2luZ2xldG9uID0gU3ltYm9sKCdzaW5nbGV0b24nKTtcbmNvbnN0IHNpbmdsZXRvbkVuZm9yY2VyID0gU3ltYm9sKCdzaW5nbGV0b25FbmZvcmNlcicpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOMTlwb3B1cENvbnRyb2xsZXIge1xuICBzdGF0aWMgZ2V0IGluc3RhbmNlKCkge1xuICAgIGlmICghdGhpc1tzaW5nbGV0b25dKSB7XG4gICAgICB0aGlzW3NpbmdsZXRvbl0gPSBuZXcgTjE5cG9wdXBDb250cm9sbGVyKHNpbmdsZXRvbkVuZm9yY2VyKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXNbc2luZ2xldG9uXTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGVuZm9yY2VyKSB7XG4gICAgaWYgKGVuZm9yY2VyICE9PSBzaW5nbGV0b25FbmZvcmNlcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnN0YW50aWF0aW9uIGZhaWxlZDogdXNlIFNpbmdsZXRvbi5nZXRJbnN0YW5jZSgpIGluc3RlYWQgb2YgbmV3LicpO1xuICAgIH1cblxuICAgIHRoaXMuY29uc3RzID0gU2llYmVsSlMuRGVwZW5kZW5jeSgnU2llYmVsQXBwLkNvbnN0YW50cycpO1xuICAgIHRoaXMuaXNQb3B1cEhpZGRlbiA9IGZhbHNlO1xuICAgIHRoaXMucmVzb2x2ZVByb21pc2UgPSBudWxsO1xuICAgIHRoaXMucG9wdXBBcHBsZXROMTkgPSBudWxsO1xuICAgIHRoaXMuYXNzb2NBcHBsZXROMTkgPSBudWxsO1xuXG4gICAgY29uc29sZS5sb2coYCR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfSBzdGFydGVkLi4uYCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuXG4gICAgdGhpcy5OMTlyZXNpemVBdmFpbGFibGUgPSBTaWViZWxBcHAuTXZnQmVhdXRpZmllci5yZXNpemVBdmFpbGFibGU7XG4gICAgU2llYmVsQXBwLk12Z0JlYXV0aWZpZXIucmVzaXplQXZhaWxhYmxlID0gKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhpcy5OMTlyZXNpemVBdmFpbGFibGUuY2FsbChTaWViZWxBcHAuTXZnQmVhdXRpZmllcik7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGByZXNpemVBdmFpbGFibGUgRXJyb3I6ICR7ZS5uYW1lfSAke2UubWVzc2FnZX1gKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIGl0IHdpbGwgYmUgYSBzaW5nbGV0b24sIHNvIHRoZXJlIGlzIG5vIGNsZWFudXBcbiAgICB0aGlzLk4xOXByb2Nlc3NOZXdQb3B1cCA9IFNpZWJlbEFwcC5TX0FwcC5Qcm9jZXNzTmV3UG9wdXA7XG4gICAgU2llYmVsQXBwLlNfQXBwLlByb2Nlc3NOZXdQb3B1cCA9IChwcykgPT4ge1xuICAgICAgbGV0IHJldDtcbiAgICAgIGlmICh0aGlzLmlzUG9wdXBIaWRkZW4pIHtcbiAgICAgICAgcmV0ID0gdGhpcy5wcm9jZXNzTmV3UG9wdXAocHMpO1xuICAgICAgICB0aGlzLmlzUG9wdXBIaWRkZW4gPSBmYWxzZTsgLy8gaW4gb3JkZXIgdG8gZG8gbm90IGFmZmVjdCB0aGUgbmV4dCBjYWxsXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXQgPSB0aGlzLk4xOXByb2Nlc3NOZXdQb3B1cC5jYWxsKFNpZWJlbEFwcC5TX0FwcCwgcHMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJldDtcbiAgICB9O1xuXG4gICAgLy8gd2UgY291bGQgdXNlIHBtLkF0dGFjaFBvc3RQcm94eUV4ZWN1dGVCaW5kaW5nIGZvciAnRWRpdEZpZWxkJywgYnV0IGF0IHRoaXMgcG9pbnQgR2V0UmVuZGVyZXIgcmV0dXJucyBudWxsXG4gICAgLy8gYnV0IHBtIGV4aXN0c1xuICAgIC8vIG9wZW4gdW50aWwgd2UgZ2V0IHJpZCBvZiBHZXRSZW5kZXJlciAoT3JhY2xlIHJldmlldylcbiAgICAvLyBvdGhlciBvcHRpb24gLSBPbkxvYWRQb3B1cENvbnRlbnQ/XG4gICAgdGhpcy5OMTl2aWV3TG9hZGVkID0gU2llYmVsQXBwLmNvbnRlbnRVcGRhdGVyLnZpZXdMb2FkZWQ7XG4gICAgU2llYmVsQXBwLmNvbnRlbnRVcGRhdGVyLnZpZXdMb2FkZWQgPSAoLi4uYXJncykgPT4ge1xuICAgICAgY29uc3QgcmV0ID0gdGhpcy5OMTl2aWV3TG9hZGVkLmNhbGwoU2llYmVsQXBwLmNvbnRlbnRVcGRhdGVyLCAuLi5hcmdzKTtcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5yZXNvbHZlUHJvbWlzZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAvLyBUT0RPOiBtYXliZSB1c2UgaGVyZSB0aGUgcHJvcGVydGllcyBzZXQgb24gcmVzb2xpdm5nXG4gICAgICAgIGNvbnN0IHsgYXBwbGV0TmFtZSB9ID0gTjE5cG9wdXBDb250cm9sbGVyLklzUG9wdXBPcGVuKCk7XG4gICAgICAgIGlmICghYXBwbGV0TmFtZSkge1xuICAgICAgICAgIC8vIGNvbnNvbGUud2FybignT3BlbiBBcHBsZXQgTmFtZSBpcyBub3QgZm91bmQgaW4gdmlld0xvYWRlZCByZXNvbHZpbmcgUHJvbWlzZScpO1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignT3BlbiBBcHBsZXQgTmFtZSBpcyBub3QgZm91bmQgaW4gdmlld0xvYWRlZCByZXNvbHZpbmcgUHJvbWlzZScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGFwcGxldCA9IE4xOXBvcHVwQ29udHJvbGxlci5HZXRQb3B1cEFwcGxldChhcHBsZXROYW1lKTtcbiAgICAgICAgICBjb25zdCBwbSA9IGFwcGxldC5HZXRQTW9kZWwoKTtcbiAgICAgICAgICB0aGlzLnBvcHVwQXBwbGV0TjE5ID0gbmV3IE4xOXBvcHVwQXBwbGV0KHsgcG0gfSk7XG4gICAgICAgICAgY29uc3Qgb2JqID0geyBhcHBsZXROYW1lLCBwb3B1cEFwcGxldE4xOTogdGhpcy5wb3B1cEFwcGxldE4xOSB9O1xuICAgICAgICAgIC8vIGNoZWNrIGlmIHdlIGhhdmUgYXNzb2MgLSB3ZSBhc3N1bWUgaXQgaXMgYWx3YXlzIGFzc29jIGFwcGxldD9cbiAgICAgICAgICBjb25zdCBhc3NvY0FwcGxldCA9IGFwcGxldC5HZXRQb3B1cEFwcGxldCgpO1xuICAgICAgICAgIGlmIChhc3NvY0FwcGxldCkge1xuICAgICAgICAgICAgdGhpcy5hc3NvY0FwcGxldE4xOSA9IG5ldyBOMTlwb3B1cEFwcGxldCh7IHBtOiBhc3NvY0FwcGxldC5HZXRQTW9kZWwoKSB9KTtcbiAgICAgICAgICAgIG9iai5hc3NvY0FwcGxldE4xOSA9IHRoaXMuYXNzb2NBcHBsZXROMTk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMucmVzb2x2ZVByb21pc2Uob2JqKTtcbiAgICAgICAgICB0aGlzLnJlc29sdmVQcm9taXNlID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJldDtcbiAgICB9O1xuICB9XG5cbiAgY2FuT3BlblBvcHVwKCkge1xuICAgIHJldHVybiB0eXBlb2YgdGhpcy5yZXNvbHZlUHJvbWlzZSAhPT0gJ2Z1bmN0aW9uJztcbiAgfVxuXG4gIHByb2Nlc3NOZXdQb3B1cChwcykge1xuICAgIGNvbnN0IHBvcHVwUE0gPSBTaWViZWxBcHAuU19BcHAuR2V0UG9wdXBQTSgpO1xuXG4gICAgaWYgKCFwb3B1cFBNLkdldFJlbmRlcmVyKCkpIHtcbiAgICAgIHBvcHVwUE0uU2V0dXAoKTsgLy8gdG8gY3JlYXRlIFBSXG4gICAgfVxuXG4gICAgY29uc3QgYWN0aXZlVmlldyA9IFNpZWJlbEFwcC5TX0FwcC5HZXRBY3RpdmVWaWV3KCk7XG4gICAgY29uc3QgYWN0aXZlQXBwbGV0ID0gYWN0aXZlVmlldy5HZXRBY3RpdmVBcHBsZXQoKTtcbiAgICBpZiAoYWN0aXZlQXBwbGV0KSB7XG4gICAgICBhY3RpdmVWaWV3LlNldEFjdGl2ZUFwcGxldEJlZm9yZVBvcHVwKGFjdGl2ZUFwcGxldCk7XG4gICAgfVxuXG4gICAgLy8gdGhpcyBwcm9wZXJ0eSBpcyBhZGRlZCB1c2luZyBBdHRhY2hQTUJpbmRpbmcgaW50byB0aGUgSW5pdCBQUiAoY2FsbGVkIGJ5IFBNIFNldHVwKVxuICAgIC8vIGl0IGlzIHRoZSByZWFzb24gd2h5IHdlIGhhdmUgcmVpbml0IHByb2NlZHVyZSB3aGVyZSBTZXR1cCBQTSBpcyBjYWxsZWRcbiAgICBwb3B1cFBNLkFkZFByb3BlcnR5KCdzdGF0ZScsIHRoaXMuY29uc3RzLmdldCgnUE9QVVBfU1RBVEVfVklTSUJMRScpKTtcblxuICAgIGxldCB1cmwgPSBwcy5HZXRQcm9wZXJ0eSgnVVJMJyk7XG4gICAgdXJsID0gU2llYmVsQXBwLlNfQXBwLkdldFBhZ2VVUkwoKSArIHVybC5zcGxpdCgnc3RhcnQuc3dlJylbMV07XG4gICAgcG9wdXBQTS5TZXRQcm9wZXJ0eSgndXJsJywgdXJsKTtcblxuICAgIHJldHVybiAncmVmcmVzaHBvcHVwJztcbiAgfVxuXG4gIGNsb3NlUG9wdXBBcHBsZXQoYXBwbGV0KSB7XG4gICAgLy8gVE9ETzogY2hlY2sgY2FuSW52b2tlTWV0aG9kP1xuICAgIGxldCByZXQ7XG4gICAgaWYgKGFwcGxldCkge1xuICAgICAgY29uc3QgaXNQb3B1cEFwcGxldCA9IHR5cGVvZiBhcHBsZXQuR2V0UG9wdXBBcHBsZXROYW1lID09PSAnZnVuY3Rpb24nO1xuICAgICAgY29uc3QgaXNQaWNrQXBwbGV0ID0gdHlwZW9mIGFwcGxldC5HZXRQaWNrQXBwbGV0TmFtZSA9PT0gJ2Z1bmN0aW9uJztcbiAgICAgIGlmICghaXNQb3B1cEFwcGxldCAmJiAhaXNQaWNrQXBwbGV0KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVGhpcyBhcHBsZXQgaXMgbmVpdGhlciBwaWNrIG5vciBwb3B1cCcpO1xuICAgICAgfVxuICAgICAgcmV0ID0gYXBwbGV0LkdldFBNb2RlbCgpLkV4ZWN1dGVNZXRob2QoJ0ludm9rZU1ldGhvZCcsICdDbG9zZUFwcGxldCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXQgPSB0aGlzLnBvcHVwQXBwbGV0TjE5LmFwcGxldC5HZXRQTW9kZWwoKS5FeGVjdXRlTWV0aG9kKCdJbnZva2VNZXRob2QnLCAnQ2xvc2VBcHBsZXQnKTtcbiAgICB9XG4gICAgLy8gaXQgY291bGQgYmUgYmV0dGVyIGlmIHdlIGRvbid0IGhhdmUgYSBTaWViZWwgQXBwbGV0IG9uIHRoZSB2aWV3XG4gICAgLy8gZG8gcmVpbml0IGhlcmUgb24gY2xvc2luZz9cbiAgICB0aGlzLnBvcHVwQXBwbGV0TjE5ID0gbnVsbDtcbiAgICB0aGlzLmFzc29jQXBwbGV0TjE5ID0gbnVsbDtcbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgc3RhdGljIElzUG9wdXBPcGVuKCkgeyAvLyBzYWZlciB0byBrZWVwIHRoaXMgbWV0aG9kLCBldmVuIHdoZW4gd2Ugc2V0IHNvbWUgcHJvcGVydGllcyBvbiByZXNvbHZlP1xuICAgIGNvbnN0IGN1cnJQb3B1cHMgPSBTaWViZWxBcHAuU19BcHAuR2V0UG9wdXBQTSgpLkdldCgnY3VyclBvcHVwcycpO1xuICAgIGlmICgwID09PSBjdXJyUG9wdXBzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHsgaXNPcGVuOiBmYWxzZSB9O1xuICAgIH1cbiAgICBpZiAoMSA9PT0gY3VyclBvcHVwcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB7IGlzT3BlbjogdHJ1ZSwgYXBwbGV0TmFtZTogY3VyclBvcHVwc1swXS5HZXROYW1lKCksIGNvbnRyb2xOYW1lOiBjdXJyUG9wdXBzWzBdLkdldFBvcHVwQ29udHJvbCgpIH07XG4gICAgfVxuICAgIGlmICgyID09PSBjdXJyUG9wdXBzLmxlbmd0aCkge1xuICAgICAgLy8gaXMgdGhpcyBhbHdheXMgYSBzaHV0dGxlIHdoZW4gd2UgaGF2ZSBhIHNlZG9uZCBhcHBsZXRcbiAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBjdXJyUG9wdXBzLmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY3VyclBvcHVwc1sxXS5HZXRQb3B1cEFwcGxldE5hbWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICByZXR1cm4geyBpc09wZW46IHRydWUsIGFwcGxldE5hbWU6IGN1cnJQb3B1cHNbaV0uR2V0TmFtZSgpLCBjb250cm9sTmFtZTogY3VyclBvcHVwc1tpXS5HZXRQb3B1cENvbnRyb2woKSB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ012ZyBhcHBsZXQgaXMgbm90IGZvdW5kLi4uJyk7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcignc2hvdWxkIG5vdCBiZSBoZXJlLi4uJyk7XG4gIH1cblxuICBzdGF0aWMgR2V0UG9wdXBBcHBsZXQoYXBwbGV0TmFtZSkge1xuICAgIGNvbnN0IGFwcGxldCA9IFNpZWJlbEFwcC5TX0FwcC5HZXRBY3RpdmVWaWV3KCkuR2V0QXBwbGV0KGFwcGxldE5hbWUpO1xuICAgIGlmICghYXBwbGV0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSByZWZlcmVuY2UgdG8gJHthcHBsZXROYW1lfSBpcyBub3QgaW5zdGFudGlhdGVkLmApO1xuICAgIH1cbiAgICByZXR1cm4gYXBwbGV0O1xuICB9XG5cbiAgY2hlY2tPcGVuZWRQb3B1cChjbG9zZUlmT3Blbikge1xuICAgIGNvbnN0IHsgaXNPcGVuLCBhcHBsZXROYW1lIH0gPSBOMTlwb3B1cENvbnRyb2xsZXIuSXNQb3B1cE9wZW4oKTtcbiAgICBpZiAoaXNPcGVuICYmIGNsb3NlSWZPcGVuKSB7XG4gICAgICAvLyB0aGlzIGNvZGUgd2lsbCBjbG9zZSB0aGUgYXBwbGV0IGV2ZW4gaWYgdGhpcyBhcHBsZXQgd2FzIG9yaWdpbmF0ZWQgYnkgYW5vdGhlciBhcHBsZXRcbiAgICAgIGNvbnNvbGUubG9nKGBjbG9zaW5nICR7YXBwbGV0TmFtZX0gaW4gc2hvd1BvcHVwQXBwbGV0Li4uYCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgICAgLy8gbWF5YmUgZG8gbm90IGNsb3NlIGlmIHRoZSBhcHBsZXQgdG8gYmUgb3BlbmVkIGlmIHRoZSBzYW1lIGFzIGFscmVhZHkgb3BlbmVkP1xuICAgICAgcmV0dXJuIHRoaXMuY2xvc2VQb3B1cEFwcGxldChOMTlwb3B1cENvbnRyb2xsZXIuR2V0UG9wdXBBcHBsZXQoYXBwbGV0TmFtZSkpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgaXNPcGVuLFxuICAgICAgYXBwbGV0TmFtZSxcbiAgICB9O1xuICB9XG5cbiAgX29wZW5Bc3NvY0FwcGxldChuZXdSZWNvcmRGdW5jLCBjYikge1xuICAgIHRoaXMuY2hlY2tPcGVuZWRQb3B1cCh0cnVlKTtcbiAgICB0aGlzLmlzUG9wdXBIaWRkZW4gPSB0cnVlO1xuXG4gICAgbmV3UmVjb3JkRnVuYygpOyAvLyBtYWtlIGFzeW5jIG9mIGludm9rZU1ldGhvZD9cblxuICAgIGxldCByZXQgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4geyB0aGlzLnJlc29sdmVQcm9taXNlID0gcmVzb2x2ZTsgfSk7XG4gICAgaWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0ID0gcmV0LnRoZW4oY2IpO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgc2hvd1BvcHVwQXBwbGV0KGhpZGUsIGNiLCBuMTkpIHtcbiAgICAvLyBUT0RPOiBtYXliZSB1c2UgdGhlIHByb3BlcnRpZXMgc2V0IG9uIHByb21pc2UgcmVzb2x2aW5nP1xuICAgIHRoaXMuY2hlY2tPcGVuZWRQb3B1cCh0cnVlKTtcblxuICAgIHRoaXMuaXNQb3B1cEhpZGRlbiA9ICEhaGlkZTtcblxuICAgIG4xOS5wbS5FeGVjdXRlTWV0aG9kKCdJbnZva2VNZXRob2QnLCAnRWRpdFBvcHVwJyk7IC8vIGNhbiBjYWxsIEVkaXRGaWVsZD9cblxuICAgIGlmIChoaWRlKSB7IC8vIHdlIHdpbGwgcG9wdWxhdGUgdGhlIGluc3RhbmNlcyBvbmx5IHdoZW4gYXBwbGV0IHNob3VsZCBiZSBoaWRkZW5cbiAgICAgIGxldCByZXQgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4geyB0aGlzLnJlc29sdmVQcm9taXNlID0gcmVzb2x2ZTsgfSk7XG4gICAgICBpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldCA9IHJldC50aGVuKGNiKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=