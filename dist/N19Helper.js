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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYW4taW5zdGFuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FycmF5LW1ldGhvZHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYXJyYXktc3BlY2llcy1jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hcnJheS1zcGVjaWVzLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jbGFzc29mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NvZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jb2xsZWN0aW9uLXN0cm9uZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jb2xsZWN0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY3JlYXRlLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2N0eC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19kZWZpbmVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2RvbS1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19lbnVtLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZXhwb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2ZhaWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2ZpeC1yZS13a3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZmxhZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZm9yLW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19oYXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faGlkZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19odG1sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2luaGVyaXQtaWYtcmVxdWlyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faW52b2tlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2lvYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXMtYXJyYXktaXRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pcy1hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pcy1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXMtcmVnZXhwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXItY2FsbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyLWRldGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyLXN0ZXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlcmF0b3JzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2xpYnJhcnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fbWV0YS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19taWNyb3Rhc2suanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fbmV3LXByb21pc2UtY2FwYWJpbGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtYXNzaWduLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWRwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1kcHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdvcGQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdvcG4tZXh0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1nb3BuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1nb3BzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1ncG8uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LXBpZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3Qtc2FwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC10by1hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19wZXJmb3JtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3Byb21pc2UtcmVzb2x2ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3JlZGVmaW5lLWFsbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19yZWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zZXQtcHJvdG8uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc2V0LXNwZWNpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc2hhcmVkLWtleS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc3BlY2llcy1jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zdHJpbmctYXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdGFzay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1hYnNvbHV0ZS1pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWlvYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1wcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdWlkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3VzZXItYWdlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdmFsaWRhdGUtY29sbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL193a3MtZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3drcy1leHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fd2tzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmZpbmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuZnJvbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5mdW5jdGlvbi5uYW1lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnByb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLmZsYWdzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5zcGxpdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAudG8tc3RyaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcuYXJyYXkuaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcub2JqZWN0LmVudHJpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcub2JqZWN0LnZhbHVlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzIiwid2VicGFjazovLy8uL3NyYy9tYWluLmpzIiwid2VicGFjazovLy8uL3NyYy9uMTliYXNlQXBwbGV0LmpzIiwid2VicGFjazovLy8uL3NyYy9uMTlub3RpZmljYXRpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9uMTlwb3B1cEFwcGxldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbjE5cG9wdXBDb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJpdCIsIlR5cGVFcnJvciIsIlVOU0NPUEFCTEVTIiwicmVxdWlyZSIsIkFycmF5UHJvdG8iLCJBcnJheSIsInByb3RvdHlwZSIsInVuZGVmaW5lZCIsImtleSIsIkNvbnN0cnVjdG9yIiwibmFtZSIsImZvcmJpZGRlbkZpZWxkIiwiaXNPYmplY3QiLCJ0b0lPYmplY3QiLCJ0b0xlbmd0aCIsInRvQWJzb2x1dGVJbmRleCIsIklTX0lOQ0xVREVTIiwiJHRoaXMiLCJlbCIsImZyb21JbmRleCIsIk8iLCJsZW5ndGgiLCJpbmRleCIsInZhbHVlIiwiY3R4IiwiSU9iamVjdCIsInRvT2JqZWN0IiwiYXNjIiwiVFlQRSIsIiRjcmVhdGUiLCJJU19NQVAiLCJJU19GSUxURVIiLCJJU19TT01FIiwiSVNfRVZFUlkiLCJJU19GSU5EX0lOREVYIiwiTk9fSE9MRVMiLCJjcmVhdGUiLCJjYWxsYmFja2ZuIiwidGhhdCIsInNlbGYiLCJmIiwicmVzdWx0IiwidmFsIiwicmVzIiwicHVzaCIsImlzQXJyYXkiLCJTUEVDSUVTIiwib3JpZ2luYWwiLCJDIiwiY29uc3RydWN0b3IiLCJzcGVjaWVzQ29uc3RydWN0b3IiLCJjb2YiLCJUQUciLCJBUkciLCJhcmd1bWVudHMiLCJ0cnlHZXQiLCJlIiwiVCIsIkIiLCJPYmplY3QiLCJjYWxsZWUiLCJ0b1N0cmluZyIsImNhbGwiLCJzbGljZSIsImRQIiwicmVkZWZpbmVBbGwiLCJhbkluc3RhbmNlIiwiZm9yT2YiLCIkaXRlckRlZmluZSIsInN0ZXAiLCJzZXRTcGVjaWVzIiwiREVTQ1JJUFRPUlMiLCJmYXN0S2V5IiwidmFsaWRhdGUiLCJTSVpFIiwiZ2V0RW50cnkiLCJlbnRyeSIsIl9pIiwiX2YiLCJuIiwiayIsImdldENvbnN0cnVjdG9yIiwid3JhcHBlciIsIk5BTUUiLCJBRERFUiIsIml0ZXJhYmxlIiwiX3QiLCJfbCIsImNsZWFyIiwiZGF0YSIsInIiLCJwIiwiaSIsIm5leHQiLCJwcmV2IiwiZm9yRWFjaCIsInYiLCJoYXMiLCJnZXQiLCJkZWYiLCJzZXRTdHJvbmciLCJpdGVyYXRlZCIsImtpbmQiLCJfayIsImdsb2JhbCIsIiRleHBvcnQiLCJyZWRlZmluZSIsIm1ldGEiLCJmYWlscyIsIiRpdGVyRGV0ZWN0Iiwic2V0VG9TdHJpbmdUYWciLCJpbmhlcml0SWZSZXF1aXJlZCIsIm1ldGhvZHMiLCJjb21tb24iLCJJU19XRUFLIiwiQmFzZSIsInByb3RvIiwiZml4TWV0aG9kIiwiS0VZIiwiZm4iLCJhIiwiYWRkIiwic2V0IiwiYiIsImVudHJpZXMiLCJORUVEIiwiaW5zdGFuY2UiLCJIQVNOVF9DSEFJTklORyIsIlRIUk9XU19PTl9QUklNSVRJVkVTIiwiQUNDRVBUX0lURVJBQkxFUyIsIml0ZXIiLCJCVUdHWV9aRVJPIiwiJGluc3RhbmNlIiwidGFyZ2V0IiwiRyIsIlciLCJGIiwiY29yZSIsInZlcnNpb24iLCJfX2UiLCIkZGVmaW5lUHJvcGVydHkiLCJjcmVhdGVEZXNjIiwib2JqZWN0IiwiYUZ1bmN0aW9uIiwiYyIsImFwcGx5IiwiZGVmaW5lUHJvcGVydHkiLCJkb2N1bWVudCIsImlzIiwiY3JlYXRlRWxlbWVudCIsInNwbGl0IiwiZ2V0S2V5cyIsImdPUFMiLCJwSUUiLCJnZXRTeW1ib2xzIiwic3ltYm9scyIsImlzRW51bSIsImhpZGUiLCJQUk9UT1RZUEUiLCJ0eXBlIiwic291cmNlIiwiSVNfRk9SQ0VEIiwiSVNfR0xPQkFMIiwiSVNfU1RBVElDIiwiUyIsIklTX1BST1RPIiwiUCIsIklTX0JJTkQiLCJleHBQcm90byIsIm93biIsIm91dCIsImV4cCIsIkZ1bmN0aW9uIiwiVSIsIlIiLCJleGVjIiwiZGVmaW5lZCIsIndrcyIsIlNZTUJPTCIsImZucyIsInN0cmZuIiwicnhmbiIsIlN0cmluZyIsIlJlZ0V4cCIsInN0cmluZyIsImFyZyIsImFuT2JqZWN0IiwiaWdub3JlQ2FzZSIsIm11bHRpbGluZSIsInVuaWNvZGUiLCJzdGlja3kiLCJpc0FycmF5SXRlciIsImdldEl0ZXJGbiIsIkJSRUFLIiwiUkVUVVJOIiwiSVRFUkFUT1IiLCJpdGVyRm4iLCJpdGVyYXRvciIsImRvbmUiLCJ3aW5kb3ciLCJNYXRoIiwiX19nIiwiaGFzT3duUHJvcGVydHkiLCJkb2N1bWVudEVsZW1lbnQiLCJzZXRQcm90b3R5cGVPZiIsImFyZ3MiLCJ1biIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwiSXRlcmF0b3JzIiwiTUFUQ0giLCJpc1JlZ0V4cCIsInJldCIsImRlc2NyaXB0b3IiLCJJdGVyYXRvclByb3RvdHlwZSIsIkxJQlJBUlkiLCIkaXRlckNyZWF0ZSIsImdldFByb3RvdHlwZU9mIiwiQlVHR1kiLCJrZXlzIiwiRkZfSVRFUkFUT1IiLCJLRVlTIiwiVkFMVUVTIiwicmV0dXJuVGhpcyIsIkRFRkFVTFQiLCJJU19TRVQiLCJGT1JDRUQiLCJnZXRNZXRob2QiLCJ2YWx1ZXMiLCJERUZfVkFMVUVTIiwiVkFMVUVTX0JVRyIsIiRuYXRpdmUiLCIkZGVmYXVsdCIsIiRlbnRyaWVzIiwiJGFueU5hdGl2ZSIsIlNBRkVfQ0xPU0lORyIsInJpdGVyIiwiZnJvbSIsInNraXBDbG9zaW5nIiwic2FmZSIsImFyciIsIk1FVEEiLCJzZXREZXNjIiwiaWQiLCJpc0V4dGVuc2libGUiLCJGUkVFWkUiLCJwcmV2ZW50RXh0ZW5zaW9ucyIsInNldE1ldGEiLCJ3IiwiZ2V0V2VhayIsIm9uRnJlZXplIiwibWFjcm90YXNrIiwiT2JzZXJ2ZXIiLCJNdXRhdGlvbk9ic2VydmVyIiwiV2ViS2l0TXV0YXRpb25PYnNlcnZlciIsInByb2Nlc3MiLCJQcm9taXNlIiwiaXNOb2RlIiwiaGVhZCIsImxhc3QiLCJub3RpZnkiLCJmbHVzaCIsInBhcmVudCIsImRvbWFpbiIsImV4aXQiLCJlbnRlciIsIm5leHRUaWNrIiwibmF2aWdhdG9yIiwic3RhbmRhbG9uZSIsInRvZ2dsZSIsIm5vZGUiLCJjcmVhdGVUZXh0Tm9kZSIsIm9ic2VydmUiLCJjaGFyYWN0ZXJEYXRhIiwicmVzb2x2ZSIsInByb21pc2UiLCJ0aGVuIiwidGFzayIsIlByb21pc2VDYXBhYmlsaXR5IiwicmVqZWN0IiwiJCRyZXNvbHZlIiwiJCRyZWplY3QiLCIkYXNzaWduIiwiYXNzaWduIiwiQSIsIlN5bWJvbCIsIksiLCJqb2luIiwiYUxlbiIsImNvbmNhdCIsImoiLCJkUHMiLCJlbnVtQnVnS2V5cyIsIklFX1BST1RPIiwiRW1wdHkiLCJjcmVhdGVEaWN0IiwiaWZyYW1lIiwibHQiLCJndCIsImlmcmFtZURvY3VtZW50Iiwic3R5bGUiLCJkaXNwbGF5IiwiYXBwZW5kQ2hpbGQiLCJzcmMiLCJjb250ZW50V2luZG93Iiwib3BlbiIsIndyaXRlIiwiY2xvc2UiLCJQcm9wZXJ0aWVzIiwiSUU4X0RPTV9ERUZJTkUiLCJ0b1ByaW1pdGl2ZSIsIkF0dHJpYnV0ZXMiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiZ09QRCIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImdPUE4iLCJ3aW5kb3dOYW1lcyIsImdldE93blByb3BlcnR5TmFtZXMiLCJnZXRXaW5kb3dOYW1lcyIsIiRrZXlzIiwiaGlkZGVuS2V5cyIsImdldE93blByb3BlcnR5U3ltYm9scyIsIk9iamVjdFByb3RvIiwiYXJyYXlJbmRleE9mIiwibmFtZXMiLCJpc0VudHJpZXMiLCJuZXdQcm9taXNlQ2FwYWJpbGl0eSIsIngiLCJwcm9taXNlQ2FwYWJpbGl0eSIsImJpdG1hcCIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIlNSQyIsIlRPX1NUUklORyIsIiR0b1N0cmluZyIsIlRQTCIsImluc3BlY3RTb3VyY2UiLCJpc0Z1bmN0aW9uIiwiY2hlY2siLCJ0ZXN0IiwiYnVnZ3kiLCJfX3Byb3RvX18iLCJ0YWciLCJzdGF0Iiwic2hhcmVkIiwidWlkIiwiU0hBUkVEIiwic3RvcmUiLCJtb2RlIiwiY29weXJpZ2h0IiwiRCIsInRvSW50ZWdlciIsInBvcyIsInMiLCJsIiwiY2hhckNvZGVBdCIsImNoYXJBdCIsImludm9rZSIsImh0bWwiLCJjZWwiLCJzZXRUYXNrIiwic2V0SW1tZWRpYXRlIiwiY2xlYXJUYXNrIiwiY2xlYXJJbW1lZGlhdGUiLCJNZXNzYWdlQ2hhbm5lbCIsIkRpc3BhdGNoIiwiY291bnRlciIsInF1ZXVlIiwiT05SRUFEWVNUQVRFQ0hBTkdFIiwiZGVmZXIiLCJjaGFubmVsIiwicG9ydCIsInJ1biIsImxpc3RlbmVyIiwiZXZlbnQiLCJub3ciLCJwb3J0MiIsInBvcnQxIiwib25tZXNzYWdlIiwicG9zdE1lc3NhZ2UiLCJhZGRFdmVudExpc3RlbmVyIiwiaW1wb3J0U2NyaXB0cyIsInJlbW92ZUNoaWxkIiwic2V0VGltZW91dCIsIm1heCIsIm1pbiIsImNlaWwiLCJmbG9vciIsImlzTmFOIiwidmFsdWVPZiIsInB4IiwicmFuZG9tIiwidXNlckFnZW50Iiwid2tzRXh0IiwiJFN5bWJvbCIsIlVTRV9TWU1CT0wiLCIkZXhwb3J0cyIsImNsYXNzb2YiLCJnZXRJdGVyYXRvck1ldGhvZCIsIiRmaW5kIiwiZm9yY2VkIiwiZmluZCIsImNyZWF0ZVByb3BlcnR5IiwiYXJyYXlMaWtlIiwibWFwZm4iLCJtYXBwaW5nIiwiYWRkVG9VbnNjb3BhYmxlcyIsIkFyZ3VtZW50cyIsIkZQcm90byIsIm5hbWVSRSIsIm1hdGNoIiwic3Ryb25nIiwiTUFQIiwiTWFwIiwibWljcm90YXNrIiwibmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUiLCJwZXJmb3JtIiwicHJvbWlzZVJlc29sdmUiLCJQUk9NSVNFIiwidmVyc2lvbnMiLCJ2OCIsIiRQcm9taXNlIiwiZW1wdHkiLCJJbnRlcm5hbCIsIm5ld0dlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSIsIk93blByb21pc2VDYXBhYmlsaXR5IiwiV3JhcHBlciIsIlVTRV9OQVRJVkUiLCJGYWtlUHJvbWlzZSIsIlByb21pc2VSZWplY3Rpb25FdmVudCIsImluZGV4T2YiLCJpc1RoZW5hYmxlIiwiaXNSZWplY3QiLCJfbiIsImNoYWluIiwiX2MiLCJfdiIsIm9rIiwiX3MiLCJyZWFjdGlvbiIsImhhbmRsZXIiLCJmYWlsIiwiZXhpdGVkIiwiX2giLCJvbkhhbmRsZVVuaGFuZGxlZCIsIm9uVW5oYW5kbGVkIiwidW5oYW5kbGVkIiwiaXNVbmhhbmRsZWQiLCJjb25zb2xlIiwiZW1pdCIsIm9udW5oYW5kbGVkcmVqZWN0aW9uIiwicmVhc29uIiwiZXJyb3IiLCJfYSIsIm9ucmVqZWN0aW9uaGFuZGxlZCIsIiRyZWplY3QiLCJfZCIsIl93IiwiJHJlc29sdmUiLCJleGVjdXRvciIsImVyciIsIm9uRnVsZmlsbGVkIiwib25SZWplY3RlZCIsImNhcGFiaWxpdHkiLCJhbGwiLCJyZW1haW5pbmciLCIkaW5kZXgiLCJhbHJlYWR5Q2FsbGVkIiwicmFjZSIsImZsYWdzIiwiU1BMSVQiLCIkc3BsaXQiLCJfc3BsaXQiLCIkcHVzaCIsIiRTUExJVCIsIkxFTkdUSCIsIkxBU1RfSU5ERVgiLCJOUENHIiwic2VwYXJhdG9yIiwibGltaXQiLCJvdXRwdXQiLCJsYXN0TGFzdEluZGV4Iiwic3BsaXRMaW1pdCIsInNlcGFyYXRvckNvcHkiLCJzZXBhcmF0b3IyIiwibGFzdEluZGV4IiwibGFzdExlbmd0aCIsInJlcGxhY2UiLCIkZmxhZ3MiLCJkZWZpbmUiLCIkYXQiLCJwb2ludCIsIiRmYWlscyIsIndrc0RlZmluZSIsImVudW1LZXlzIiwiX2NyZWF0ZSIsImdPUE5FeHQiLCIkR09QRCIsIiREUCIsIiRKU09OIiwiSlNPTiIsIl9zdHJpbmdpZnkiLCJzdHJpbmdpZnkiLCJISURERU4iLCJUT19QUklNSVRJVkUiLCJTeW1ib2xSZWdpc3RyeSIsIkFsbFN5bWJvbHMiLCJPUFN5bWJvbHMiLCJRT2JqZWN0Iiwic2V0dGVyIiwiZmluZENoaWxkIiwic2V0U3ltYm9sRGVzYyIsInByb3RvRGVzYyIsIndyYXAiLCJzeW0iLCJpc1N5bWJvbCIsIiRkZWZpbmVQcm9wZXJ0aWVzIiwiJHByb3BlcnR5SXNFbnVtZXJhYmxlIiwiRSIsIiRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCIkZ2V0T3duUHJvcGVydHlOYW1lcyIsIiRnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJJU19PUCIsIiRzZXQiLCJlczZTeW1ib2xzIiwid2VsbEtub3duU3ltYm9scyIsImtleUZvciIsInVzZVNldHRlciIsInVzZVNpbXBsZSIsInJlcGxhY2VyIiwiJHJlcGxhY2VyIiwiJGluY2x1ZGVzIiwiaW5jbHVkZXMiLCIkdmFsdWVzIiwiJGl0ZXJhdG9ycyIsIlRPX1NUUklOR19UQUciLCJBcnJheVZhbHVlcyIsIkRPTUl0ZXJhYmxlcyIsIkNTU1J1bGVMaXN0IiwiQ1NTU3R5bGVEZWNsYXJhdGlvbiIsIkNTU1ZhbHVlTGlzdCIsIkNsaWVudFJlY3RMaXN0IiwiRE9NUmVjdExpc3QiLCJET01TdHJpbmdMaXN0IiwiRE9NVG9rZW5MaXN0IiwiRGF0YVRyYW5zZmVySXRlbUxpc3QiLCJGaWxlTGlzdCIsIkhUTUxBbGxDb2xsZWN0aW9uIiwiSFRNTENvbGxlY3Rpb24iLCJIVE1MRm9ybUVsZW1lbnQiLCJIVE1MU2VsZWN0RWxlbWVudCIsIk1lZGlhTGlzdCIsIk1pbWVUeXBlQXJyYXkiLCJOYW1lZE5vZGVNYXAiLCJOb2RlTGlzdCIsIlBhaW50UmVxdWVzdExpc3QiLCJQbHVnaW4iLCJQbHVnaW5BcnJheSIsIlNWR0xlbmd0aExpc3QiLCJTVkdOdW1iZXJMaXN0IiwiU1ZHUGF0aFNlZ0xpc3QiLCJTVkdQb2ludExpc3QiLCJTVkdTdHJpbmdMaXN0IiwiU1ZHVHJhbnNmb3JtTGlzdCIsIlNvdXJjZUJ1ZmZlckxpc3QiLCJTdHlsZVNoZWV0TGlzdCIsIlRleHRUcmFja0N1ZUxpc3QiLCJUZXh0VHJhY2tMaXN0IiwiVG91Y2hMaXN0IiwiY29sbGVjdGlvbnMiLCJleHBsaWNpdCIsIkNvbGxlY3Rpb24iLCJTaWViZWxBcHBGYWNhZGUiLCJOMTlIZWxwZXIiLCJzZXR0aW5ncyIsImFwcGxldE5hbWUiLCJhcHBsZXQiLCJTaWViZWxBcHAiLCJTX0FwcCIsIkdldEFjdGl2ZVZpZXciLCJHZXRBcHBsZXQiLCJFcnJvciIsInBtIiwiR2V0UE1vZGVsIiwibG9nIiwibjE5cG9wdXBDb250cm9sbGVyIiwiTjE5cG9wdXBDb250cm9sbGVyIiwiY2xvc2VQb3B1cEFwcGxldCIsImNiIiwiY2FuT3BlblBvcHVwIiwidmlldyIsIlNldEFjdGl2ZUFwcGxldEludGVybmFsIiwiX3NldEFjdGl2ZUNvbnRyb2wiLCJzaG93UG9wdXBBcHBsZXQiLCJfc2hvd1BvcHVwQXBwbGV0IiwiX29wZW5Bc3NvY0FwcGxldCIsIm5ld1JlY29yZCIsImJpbmQiLCJjb250cm9sTmFtZSIsImlzTGlzdEFwcGxldCIsImdldFNlbGVjdGlvbiIsIkV4ZWN1dGVNZXRob2QiLCJ0YXJnZXRWaWV3TmFtZSIsInRhcmdldEFwcGxldE5hbWUiLCJyb3dJZCIsImdldEN1cnJlbnRSZWNvcmQiLCJJZCIsIlNXRUNtZCIsImVuY29kZVVSSSIsIkdvdG9WaWV3IiwiaXNQb3B1cEhpZGRlbiIsInBvcHVwUE0iLCJHZXRQb3B1cFBNIiwiSW5pdCIsIlNldHVwIiwiTjE5YmFzZUFwcGxldCIsImNvbnN0cyIsIlNpZWJlbEpTIiwiRGVwZW5kZW5jeSIsInV0aWxzIiwiY29udmVydERhdGVzIiwiR2V0IiwicmVxdWlyZWQiLCJsb3YiLCJib29sT2JqZWN0IiwiRGF0dW1Cb29sT2JqZWN0IiwibG9hZExvY2FsZURhdGEiLCJmaWVsZFRvQ29udHJvbE1hcCIsIl9nZXRGaWVsZFRvQ29udHJvbE1hcCIsImJjSWQiLCJHZXRCQ0lkIiwibm90aWZpY2F0aW9ucyIsIk4xOW5vdGlmaWNhdGlvbnMiLCJhcHBsZXRJZCIsImFwcGxldElucHV0cyIsImdldEVsZW1lbnRCeUlkIiwicXVlcnlTZWxlY3RvckFsbCIsImF0dHJpYnV0ZXMiLCJub2RlVmFsdWUiLCJBdHRhY2hQTUJpbmRpbmciLCJpbnB1dE5hbWUiLCJ2aWV3TmFtZSIsIkdldE5hbWUiLCJ3YXJuIiwic3BsaWNlIiwiZmlsdGVyIiwic2NvcGUiLCJpc1RyZWVBcHBsZXQiLCJFeHBsb3JlclByZXNlbnRhdGlvbk1vZGVsIiwibG9jYWxlT2JqZWN0IiwiTG9jYWxlT2JqZWN0IiwiZGF0ZVRpbWVGb3JtYXQiLCJHZXRQcm9maWxlIiwibG9jYWxlRGF0YSIsImZpcnN0RGF5T2ZXZWVrIiwiR2V0V2Vla1N0YXJ0RGF5IiwiZGF0ZUZvcm1hdCIsImlzMjRob3Vyc0Zvcm1hdCIsImxvY2FsQ291bnRyeVBob25lQ29kZSIsIm1vbnRocyIsInNob3J0TW9udGhzIiwiR2V0RGF0YSIsIm1fc3BNb250aFBTIiwiR2V0UHJvcGVydHkiLCJ3ZWVrRGF5cyIsIm1fc3BEYXlPZldlZWtQUyIsIndlZWtEYXlzMyIsIndlZWtEYXlzMSIsImZ1bmMiLCJzdWJzY3JpYmUiLCJ0b2tlbiIsInVuc3Vic2NyaWJlIiwiX2dldENvbnRyb2wiLCJ1aVR5cGUiLCJkaXNwbGF5Rm9ybWF0IiwiU2V0VmFsdWUiLCJHZXRBc1N0cmluZyIsIl9pc0RhdGVUaW1lQ29udHJvbCIsImRhdGUiLCJ0b0xvY2FsZVN0cmluZyIsImhvdXIxMiIsIkdldFN0cmluZ0Zyb21EYXRlVGltZSIsIm1ldGhvZCIsImNhbkludm9rZU1ldGhvZCIsImNvbnRyb2xzIiwiYXBwbGV0Q29udHJvbHMiLCJfcmV0dXJuQ29udHJvbHMiLCJjb250cm9sRW50cnkiLCJjb250cm9sIiwiR2V0VUlUeXBlIiwiR2V0RGlzcGxheUZvcm1hdCIsImdldENvbnRyb2xEaXNwbGF5Rm9ybWF0IiwiX2lzU2tpcENvbnRyb2wiLCJHZXRJbnB1dE5hbWUiLCJmaWVsZE5hbWUiLCJHZXRGaWVsZE5hbWUiLCJvYmoiLCJsYWJlbCIsIkdldERpc3BsYXlOYW1lIiwiX2lzUmVxdWlyZWQiLCJib3VuZGVkUGljayIsIklzQm91bmRlZFBpY2siLCJzdGF0aWNQaWNrIiwiSXNTdGF0aWNCb3VuZGVkIiwiaXNQb3N0Q2hhbmdlcyIsIklzUG9zdENoYW5nZXMiLCJtYXhTaXplIiwiR2V0TWF4U2l6ZSIsImlzTGluayIsInJlYWRvbmx5IiwiZGF0YVR5cGUiLCJzdGF0aWNMT1YiLCJHZXRTdGF0aWNMT1YiLCJHZXRSYWRpb0dyb3VwUHJvcFNldCIsImNoaWxkQXJyYXkiLCJsb3ZzIiwicmVkdWNlIiwiYWNjIiwibGljIiwiRmllbGRWYWx1ZSIsIkRpc3BsYXlOYW1lIiwiYWRkUmVjb3JkSW5kZXgiLCJtYXAiLCJfaW5keCIsIl9uYXZpZ2F0ZSIsImdldFJvd0xpc3RSb3dDb3VudCIsInBvc2l0aW9uT25Sb3ciLCJfbmV3UmVjb3JkIiwiYXN5bmMiLCJjYmVyciIsIl93cml0ZVJlY29yZCIsImNhdGNoIiwiX2dldFNpZWJlbFZhbHVlIiwiX3NldENvbnRyb2xWYWx1ZUludGVybmFsIiwiT25Db250cm9sRXZlbnQiLCJpc1N0YXRpYyIsImlzU3RhdGljUGljayIsIl92YWxpZGF0ZVBpY2tDb250cm9sIiwiY29udHJvbElucHV0TmFtZSIsInBzIiwiTmV3UHJvcGVydHlTZXQiLCJTZXRQcm9wZXJ0eSIsInNvcnQiLCJfZ2V0Q29udHJvbFN0YXRpY0xPViIsImlzRHluYW1pYyIsIl9nZXRDb250cm9sRHluYW1pY0xPViIsIlNldEFzU3RyaW5nIiwiR2V0VmFsdWUiLCJJU08iLCJUb0lTT0Zvcm1hdCIsIkdldElTT0RhdGVUaW1lIiwiRGF0ZSIsInJhdyIsImdldFJhd1JlY29yZFNldCIsImdldFJlY29yZFNldCIsImJjIiwiSXNJbnNlcnRQZW5kaW5nIiwiSXNDb21taXRQZW5kaW5nIiwiY29udHJvbE1ldGhvZCIsIkdldE1ldGhvZE5hbWUiLCJfY29udHJvbHMiLCJfbWV0aG9kcyIsImdldENvbnRyb2xzIiwiX2dldE1ldGhvZHMiLCJzdGF0ZSIsImNhbGN1bGF0ZUN1cnJlbnRSZWNvcmRTdGF0ZSIsIl9nZXRKU1ZhbHVlIiwibWV0aG9kTmFtZSIsImZvdW5kIiwiY29udHJvbFVpVHlwZSIsImV4cHIiLCJfbmV3UXVlcnkiLCJfZmluZENvbnRyb2xUb0VudGVyU2VhcmNoRXhwciIsInF1ZXJ5QnlTZWFyY2hFeHByU3luYyIsIl9xdWVyeUJ5SWQiLCJhaSIsInNlbGZidXN5IiwicGFyYW1zIiwiX3F1ZXJ5IiwiaWRzIiwiZmllbGRzIiwidXNlQWN0aXZlQk8iLCJfZ2V0TVZGIiwicHNJbnB1dHMiLCJHZXRBY3RpdmVCdXNPYmoiLCJTZXRUeXBlIiwiX2dldEZpZWxkTmFtZUZvckNvbnRyb2wiLCJBZGRDaGlsZCIsIkNsb25lIiwiYnMiLCJHZXRTZXJ2aWNlIiwiZXJyY2IiLCJJbnB1dHMiLCJwc091dHB1dHMiLCJHZXRDaGlsZEJ5VHlwZSIsImNoaWxkIiwiR2V0VHlwZSIsImdyYW5kQ2hpbGQiLCJyZWMiLCJwcmltYXJ5IiwicHJvcEFycmF5IiwiSW52b2tlTWV0aG9kIiwicHNJbnB1dCIsImFtb3VudCIsInNpemUiLCJuZXh0UmVjb3JkU2V0IiwiaGFzTmV4dCIsIlNldENvbnRyb2xWYWx1ZUJ5TmFtZSIsInJhd1JlY29yZFNldCIsImxlbiIsImlzQXNjZW5kaW5nIiwic29ydE9yZGVyIiwiT25DbGlja1NvcnQiLCJzZXJ2aWNlIiwiaW5Qcm9wU2V0IiwicmVjZWl2ZWROb3RpZmljYXRpb25zIiwic3Vic2NyaWJlcnMiLCJBdHRhY2hOb3RpZmljYXRpb25IYW5kbGVyIiwicHJvcFNldCIsInN0YXRlcyIsInN1YlRva2VuIiwiTjE5cG9wdXBBcHBsZXQiLCJHZXRSZW5kZXJlciIsInJlc2l6ZSIsIkdldFNlbGVjdGVkUm93Iiwic2luZ2xldG9uIiwic2luZ2xldG9uRW5mb3JjZXIiLCJlbmZvcmNlciIsInJlc29sdmVQcm9taXNlIiwicG9wdXBBcHBsZXROMTkiLCJhc3NvY0FwcGxldE4xOSIsIk4xOXJlc2l6ZUF2YWlsYWJsZSIsIk12Z0JlYXV0aWZpZXIiLCJyZXNpemVBdmFpbGFibGUiLCJtZXNzYWdlIiwiTjE5cHJvY2Vzc05ld1BvcHVwIiwiUHJvY2Vzc05ld1BvcHVwIiwicHJvY2Vzc05ld1BvcHVwIiwiTjE5dmlld0xvYWRlZCIsImNvbnRlbnRVcGRhdGVyIiwidmlld0xvYWRlZCIsIklzUG9wdXBPcGVuIiwiR2V0UG9wdXBBcHBsZXQiLCJhc3NvY0FwcGxldCIsImFjdGl2ZVZpZXciLCJhY3RpdmVBcHBsZXQiLCJHZXRBY3RpdmVBcHBsZXQiLCJTZXRBY3RpdmVBcHBsZXRCZWZvcmVQb3B1cCIsIkFkZFByb3BlcnR5IiwidXJsIiwiR2V0UGFnZVVSTCIsImlzUG9wdXBBcHBsZXQiLCJHZXRQb3B1cEFwcGxldE5hbWUiLCJpc1BpY2tBcHBsZXQiLCJHZXRQaWNrQXBwbGV0TmFtZSIsImNsb3NlSWZPcGVuIiwiaXNPcGVuIiwibmV3UmVjb3JkRnVuYyIsImNoZWNrT3BlbmVkUG9wdXAiLCJuMTkiLCJjdXJyUG9wdXBzIiwiR2V0UG9wdXBDb250cm9sIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4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QUU2UixVQUFVLENBQUMsQ0FBRCxDQUFWLENBQWMxTixPQUFkLEVBQTVCO0FBQXFENUMscUJBQVcsRUFBRXNRLFVBQVUsQ0FBQyxDQUFELENBQVYsQ0FBY0MsZUFBZDtBQUFsRSxTQUFQO0FBQ0Q7O0FBQ0QsVUFBSSxNQUFNRCxVQUFVLENBQUN2MEIsTUFBckIsRUFBNkI7QUFDM0I7QUFDQSxhQUFLLElBQUl1RSxDQUFDLEdBQUcsQ0FBUixFQUFXNnNCLEdBQUcsR0FBR21ELFVBQVUsQ0FBQ3YwQixNQUFqQyxFQUF5Q3VFLENBQUMsR0FBRzZzQixHQUE3QyxFQUFrRDdzQixDQUFDLElBQUksQ0FBdkQsRUFBMEQ7QUFDeEQsY0FBSSxPQUFPZ3dCLFVBQVUsQ0FBQyxDQUFELENBQVYsQ0FBY1Isa0JBQXJCLEtBQTRDLFVBQWhELEVBQTREO0FBQzFELG1CQUFPO0FBQUVJLG9CQUFNLEVBQUUsSUFBVjtBQUFnQnpSLHdCQUFVLEVBQUU2UixVQUFVLENBQUNod0IsQ0FBRCxDQUFWLENBQWNzaUIsT0FBZCxFQUE1QjtBQUFxRDVDLHlCQUFXLEVBQUVzUSxVQUFVLENBQUNod0IsQ0FBRCxDQUFWLENBQWNpd0IsZUFBZDtBQUFsRSxhQUFQO0FBQ0Q7QUFDRjs7QUFDRCxjQUFNLElBQUl4UixLQUFKLENBQVUsNEJBQVYsQ0FBTjtBQUNEOztBQUNELFlBQU0sSUFBSUEsS0FBSixDQUFVLHVCQUFWLENBQU47QUFDRDs7O21DQUVxQk4sVSxFQUFZO0FBQ2hDLFVBQU1DLE1BQU0sR0FBR0MsU0FBUyxDQUFDQyxLQUFWLENBQWdCQyxhQUFoQixHQUFnQ0MsU0FBaEMsQ0FBMENMLFVBQTFDLENBQWY7O0FBQ0EsVUFBSSxDQUFDQyxNQUFMLEVBQWE7QUFDWCxjQUFNLElBQUlLLEtBQUosNEJBQThCTixVQUE5QiwyQkFBTjtBQUNEOztBQUNELGFBQU9DLE1BQVA7QUFDRCIsImZpbGUiOiJOMTlIZWxwZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07XG4iLCIvLyAyMi4xLjMuMzEgQXJyYXkucHJvdG90eXBlW0BAdW5zY29wYWJsZXNdXG52YXIgVU5TQ09QQUJMRVMgPSByZXF1aXJlKCcuL193a3MnKSgndW5zY29wYWJsZXMnKTtcbnZhciBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuaWYgKEFycmF5UHJvdG9bVU5TQ09QQUJMRVNdID09IHVuZGVmaW5lZCkgcmVxdWlyZSgnLi9faGlkZScpKEFycmF5UHJvdG8sIFVOU0NPUEFCTEVTLCB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgQXJyYXlQcm90b1tVTlNDT1BBQkxFU11ba2V5XSA9IHRydWU7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIENvbnN0cnVjdG9yLCBuYW1lLCBmb3JiaWRkZW5GaWVsZCkge1xuICBpZiAoIShpdCBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSB8fCAoZm9yYmlkZGVuRmllbGQgIT09IHVuZGVmaW5lZCAmJiBmb3JiaWRkZW5GaWVsZCBpbiBpdCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IobmFtZSArICc6IGluY29ycmVjdCBpbnZvY2F0aW9uIScpO1xuICB9IHJldHVybiBpdDtcbn07XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07XG4iLCIvLyBmYWxzZSAtPiBBcnJheSNpbmRleE9mXG4vLyB0cnVlICAtPiBBcnJheSNpbmNsdWRlc1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIHRvQWJzb2x1dGVJbmRleCA9IHJlcXVpcmUoJy4vX3RvLWFic29sdXRlLWluZGV4Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChJU19JTkNMVURFUykge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBlbCwgZnJvbUluZGV4KSB7XG4gICAgdmFyIE8gPSB0b0lPYmplY3QoJHRoaXMpO1xuICAgIHZhciBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgdmFyIGluZGV4ID0gdG9BYnNvbHV0ZUluZGV4KGZyb21JbmRleCwgbGVuZ3RoKTtcbiAgICB2YXIgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICBpZiAoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpIHdoaWxlIChsZW5ndGggPiBpbmRleCkge1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgICAgaWYgKHZhbHVlICE9IHZhbHVlKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSNpbmRleE9mIGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSBpZiAoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTykge1xuICAgICAgaWYgKE9baW5kZXhdID09PSBlbCkgcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcbiIsIi8vIDAgLT4gQXJyYXkjZm9yRWFjaFxuLy8gMSAtPiBBcnJheSNtYXBcbi8vIDIgLT4gQXJyYXkjZmlsdGVyXG4vLyAzIC0+IEFycmF5I3NvbWVcbi8vIDQgLT4gQXJyYXkjZXZlcnlcbi8vIDUgLT4gQXJyYXkjZmluZFxuLy8gNiAtPiBBcnJheSNmaW5kSW5kZXhcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciBhc2MgPSByZXF1aXJlKCcuL19hcnJheS1zcGVjaWVzLWNyZWF0ZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoVFlQRSwgJGNyZWF0ZSkge1xuICB2YXIgSVNfTUFQID0gVFlQRSA9PSAxO1xuICB2YXIgSVNfRklMVEVSID0gVFlQRSA9PSAyO1xuICB2YXIgSVNfU09NRSA9IFRZUEUgPT0gMztcbiAgdmFyIElTX0VWRVJZID0gVFlQRSA9PSA0O1xuICB2YXIgSVNfRklORF9JTkRFWCA9IFRZUEUgPT0gNjtcbiAgdmFyIE5PX0hPTEVTID0gVFlQRSA9PSA1IHx8IElTX0ZJTkRfSU5ERVg7XG4gIHZhciBjcmVhdGUgPSAkY3JlYXRlIHx8IGFzYztcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgY2FsbGJhY2tmbiwgdGhhdCkge1xuICAgIHZhciBPID0gdG9PYmplY3QoJHRoaXMpO1xuICAgIHZhciBzZWxmID0gSU9iamVjdChPKTtcbiAgICB2YXIgZiA9IGN0eChjYWxsYmFja2ZuLCB0aGF0LCAzKTtcbiAgICB2YXIgbGVuZ3RoID0gdG9MZW5ndGgoc2VsZi5sZW5ndGgpO1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgdmFyIHJlc3VsdCA9IElTX01BUCA/IGNyZWF0ZSgkdGhpcywgbGVuZ3RoKSA6IElTX0ZJTFRFUiA/IGNyZWF0ZSgkdGhpcywgMCkgOiB1bmRlZmluZWQ7XG4gICAgdmFyIHZhbCwgcmVzO1xuICAgIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSBpZiAoTk9fSE9MRVMgfHwgaW5kZXggaW4gc2VsZikge1xuICAgICAgdmFsID0gc2VsZltpbmRleF07XG4gICAgICByZXMgPSBmKHZhbCwgaW5kZXgsIE8pO1xuICAgICAgaWYgKFRZUEUpIHtcbiAgICAgICAgaWYgKElTX01BUCkgcmVzdWx0W2luZGV4XSA9IHJlczsgICAvLyBtYXBcbiAgICAgICAgZWxzZSBpZiAocmVzKSBzd2l0Y2ggKFRZUEUpIHtcbiAgICAgICAgICBjYXNlIDM6IHJldHVybiB0cnVlOyAgICAgICAgICAgICAvLyBzb21lXG4gICAgICAgICAgY2FzZSA1OiByZXR1cm4gdmFsOyAgICAgICAgICAgICAgLy8gZmluZFxuICAgICAgICAgIGNhc2UgNjogcmV0dXJuIGluZGV4OyAgICAgICAgICAgIC8vIGZpbmRJbmRleFxuICAgICAgICAgIGNhc2UgMjogcmVzdWx0LnB1c2godmFsKTsgICAgICAgIC8vIGZpbHRlclxuICAgICAgICB9IGVsc2UgaWYgKElTX0VWRVJZKSByZXR1cm4gZmFsc2U7IC8vIGV2ZXJ5XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBJU19GSU5EX0lOREVYID8gLTEgOiBJU19TT01FIHx8IElTX0VWRVJZID8gSVNfRVZFUlkgOiByZXN1bHQ7XG4gIH07XG59O1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4vX2lzLWFycmF5Jyk7XG52YXIgU1BFQ0lFUyA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9yaWdpbmFsKSB7XG4gIHZhciBDO1xuICBpZiAoaXNBcnJheShvcmlnaW5hbCkpIHtcbiAgICBDID0gb3JpZ2luYWwuY29uc3RydWN0b3I7XG4gICAgLy8gY3Jvc3MtcmVhbG0gZmFsbGJhY2tcbiAgICBpZiAodHlwZW9mIEMgPT0gJ2Z1bmN0aW9uJyAmJiAoQyA9PT0gQXJyYXkgfHwgaXNBcnJheShDLnByb3RvdHlwZSkpKSBDID0gdW5kZWZpbmVkO1xuICAgIGlmIChpc09iamVjdChDKSkge1xuICAgICAgQyA9IENbU1BFQ0lFU107XG4gICAgICBpZiAoQyA9PT0gbnVsbCkgQyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH0gcmV0dXJuIEMgPT09IHVuZGVmaW5lZCA/IEFycmF5IDogQztcbn07XG4iLCIvLyA5LjQuMi4zIEFycmF5U3BlY2llc0NyZWF0ZShvcmlnaW5hbEFycmF5LCBsZW5ndGgpXG52YXIgc3BlY2llc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi9fYXJyYXktc3BlY2llcy1jb25zdHJ1Y3RvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvcmlnaW5hbCwgbGVuZ3RoKSB7XG4gIHJldHVybiBuZXcgKHNwZWNpZXNDb25zdHJ1Y3RvcihvcmlnaW5hbCkpKGxlbmd0aCk7XG59O1xuIiwiLy8gZ2V0dGluZyB0YWcgZnJvbSAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbnZhciBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcbi8vIEVTMyB3cm9uZyBoZXJlXG52YXIgQVJHID0gY29mKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA9PSAnQXJndW1lbnRzJztcblxuLy8gZmFsbGJhY2sgZm9yIElFMTEgU2NyaXB0IEFjY2VzcyBEZW5pZWQgZXJyb3JcbnZhciB0cnlHZXQgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICB0cnkge1xuICAgIHJldHVybiBpdFtrZXldO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBPLCBULCBCO1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDogaXQgPT09IG51bGwgPyAnTnVsbCdcbiAgICAvLyBAQHRvU3RyaW5nVGFnIGNhc2VcbiAgICA6IHR5cGVvZiAoVCA9IHRyeUdldChPID0gT2JqZWN0KGl0KSwgVEFHKSkgPT0gJ3N0cmluZycgPyBUXG4gICAgLy8gYnVpbHRpblRhZyBjYXNlXG4gICAgOiBBUkcgPyBjb2YoTylcbiAgICAvLyBFUzMgYXJndW1lbnRzIGZhbGxiYWNrXG4gICAgOiAoQiA9IGNvZihPKSkgPT0gJ09iamVjdCcgJiYgdHlwZW9mIE8uY2FsbGVlID09ICdmdW5jdGlvbicgPyAnQXJndW1lbnRzJyA6IEI7XG59O1xuIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJyk7XG52YXIgcmVkZWZpbmVBbGwgPSByZXF1aXJlKCcuL19yZWRlZmluZS1hbGwnKTtcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBhbkluc3RhbmNlID0gcmVxdWlyZSgnLi9fYW4taW5zdGFuY2UnKTtcbnZhciBmb3JPZiA9IHJlcXVpcmUoJy4vX2Zvci1vZicpO1xudmFyICRpdGVyRGVmaW5lID0gcmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKTtcbnZhciBzdGVwID0gcmVxdWlyZSgnLi9faXRlci1zdGVwJyk7XG52YXIgc2V0U3BlY2llcyA9IHJlcXVpcmUoJy4vX3NldC1zcGVjaWVzJyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpO1xudmFyIGZhc3RLZXkgPSByZXF1aXJlKCcuL19tZXRhJykuZmFzdEtleTtcbnZhciB2YWxpZGF0ZSA9IHJlcXVpcmUoJy4vX3ZhbGlkYXRlLWNvbGxlY3Rpb24nKTtcbnZhciBTSVpFID0gREVTQ1JJUFRPUlMgPyAnX3MnIDogJ3NpemUnO1xuXG52YXIgZ2V0RW50cnkgPSBmdW5jdGlvbiAodGhhdCwga2V5KSB7XG4gIC8vIGZhc3QgY2FzZVxuICB2YXIgaW5kZXggPSBmYXN0S2V5KGtleSk7XG4gIHZhciBlbnRyeTtcbiAgaWYgKGluZGV4ICE9PSAnRicpIHJldHVybiB0aGF0Ll9pW2luZGV4XTtcbiAgLy8gZnJvemVuIG9iamVjdCBjYXNlXG4gIGZvciAoZW50cnkgPSB0aGF0Ll9mOyBlbnRyeTsgZW50cnkgPSBlbnRyeS5uKSB7XG4gICAgaWYgKGVudHJ5LmsgPT0ga2V5KSByZXR1cm4gZW50cnk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBnZXRDb25zdHJ1Y3RvcjogZnVuY3Rpb24gKHdyYXBwZXIsIE5BTUUsIElTX01BUCwgQURERVIpIHtcbiAgICB2YXIgQyA9IHdyYXBwZXIoZnVuY3Rpb24gKHRoYXQsIGl0ZXJhYmxlKSB7XG4gICAgICBhbkluc3RhbmNlKHRoYXQsIEMsIE5BTUUsICdfaScpO1xuICAgICAgdGhhdC5fdCA9IE5BTUU7ICAgICAgICAgLy8gY29sbGVjdGlvbiB0eXBlXG4gICAgICB0aGF0Ll9pID0gY3JlYXRlKG51bGwpOyAvLyBpbmRleFxuICAgICAgdGhhdC5fZiA9IHVuZGVmaW5lZDsgICAgLy8gZmlyc3QgZW50cnlcbiAgICAgIHRoYXQuX2wgPSB1bmRlZmluZWQ7ICAgIC8vIGxhc3QgZW50cnlcbiAgICAgIHRoYXRbU0laRV0gPSAwOyAgICAgICAgIC8vIHNpemVcbiAgICAgIGlmIChpdGVyYWJsZSAhPSB1bmRlZmluZWQpIGZvck9mKGl0ZXJhYmxlLCBJU19NQVAsIHRoYXRbQURERVJdLCB0aGF0KTtcbiAgICB9KTtcbiAgICByZWRlZmluZUFsbChDLnByb3RvdHlwZSwge1xuICAgICAgLy8gMjMuMS4zLjEgTWFwLnByb3RvdHlwZS5jbGVhcigpXG4gICAgICAvLyAyMy4yLjMuMiBTZXQucHJvdG90eXBlLmNsZWFyKClcbiAgICAgIGNsZWFyOiBmdW5jdGlvbiBjbGVhcigpIHtcbiAgICAgICAgZm9yICh2YXIgdGhhdCA9IHZhbGlkYXRlKHRoaXMsIE5BTUUpLCBkYXRhID0gdGhhdC5faSwgZW50cnkgPSB0aGF0Ll9mOyBlbnRyeTsgZW50cnkgPSBlbnRyeS5uKSB7XG4gICAgICAgICAgZW50cnkuciA9IHRydWU7XG4gICAgICAgICAgaWYgKGVudHJ5LnApIGVudHJ5LnAgPSBlbnRyeS5wLm4gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgZGVsZXRlIGRhdGFbZW50cnkuaV07XG4gICAgICAgIH1cbiAgICAgICAgdGhhdC5fZiA9IHRoYXQuX2wgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoYXRbU0laRV0gPSAwO1xuICAgICAgfSxcbiAgICAgIC8vIDIzLjEuMy4zIE1hcC5wcm90b3R5cGUuZGVsZXRlKGtleSlcbiAgICAgIC8vIDIzLjIuMy40IFNldC5wcm90b3R5cGUuZGVsZXRlKHZhbHVlKVxuICAgICAgJ2RlbGV0ZSc6IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdmFyIHRoYXQgPSB2YWxpZGF0ZSh0aGlzLCBOQU1FKTtcbiAgICAgICAgdmFyIGVudHJ5ID0gZ2V0RW50cnkodGhhdCwga2V5KTtcbiAgICAgICAgaWYgKGVudHJ5KSB7XG4gICAgICAgICAgdmFyIG5leHQgPSBlbnRyeS5uO1xuICAgICAgICAgIHZhciBwcmV2ID0gZW50cnkucDtcbiAgICAgICAgICBkZWxldGUgdGhhdC5faVtlbnRyeS5pXTtcbiAgICAgICAgICBlbnRyeS5yID0gdHJ1ZTtcbiAgICAgICAgICBpZiAocHJldikgcHJldi5uID0gbmV4dDtcbiAgICAgICAgICBpZiAobmV4dCkgbmV4dC5wID0gcHJldjtcbiAgICAgICAgICBpZiAodGhhdC5fZiA9PSBlbnRyeSkgdGhhdC5fZiA9IG5leHQ7XG4gICAgICAgICAgaWYgKHRoYXQuX2wgPT0gZW50cnkpIHRoYXQuX2wgPSBwcmV2O1xuICAgICAgICAgIHRoYXRbU0laRV0tLTtcbiAgICAgICAgfSByZXR1cm4gISFlbnRyeTtcbiAgICAgIH0sXG4gICAgICAvLyAyMy4yLjMuNiBTZXQucHJvdG90eXBlLmZvckVhY2goY2FsbGJhY2tmbiwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbiAgICAgIC8vIDIzLjEuMy41IE1hcC5wcm90b3R5cGUuZm9yRWFjaChjYWxsYmFja2ZuLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxuICAgICAgZm9yRWFjaDogZnVuY3Rpb24gZm9yRWFjaChjYWxsYmFja2ZuIC8qICwgdGhhdCA9IHVuZGVmaW5lZCAqLykge1xuICAgICAgICB2YWxpZGF0ZSh0aGlzLCBOQU1FKTtcbiAgICAgICAgdmFyIGYgPSBjdHgoY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQsIDMpO1xuICAgICAgICB2YXIgZW50cnk7XG4gICAgICAgIHdoaWxlIChlbnRyeSA9IGVudHJ5ID8gZW50cnkubiA6IHRoaXMuX2YpIHtcbiAgICAgICAgICBmKGVudHJ5LnYsIGVudHJ5LmssIHRoaXMpO1xuICAgICAgICAgIC8vIHJldmVydCB0byB0aGUgbGFzdCBleGlzdGluZyBlbnRyeVxuICAgICAgICAgIHdoaWxlIChlbnRyeSAmJiBlbnRyeS5yKSBlbnRyeSA9IGVudHJ5LnA7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvLyAyMy4xLjMuNyBNYXAucHJvdG90eXBlLmhhcyhrZXkpXG4gICAgICAvLyAyMy4yLjMuNyBTZXQucHJvdG90eXBlLmhhcyh2YWx1ZSlcbiAgICAgIGhhczogZnVuY3Rpb24gaGFzKGtleSkge1xuICAgICAgICByZXR1cm4gISFnZXRFbnRyeSh2YWxpZGF0ZSh0aGlzLCBOQU1FKSwga2V5KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoREVTQ1JJUFRPUlMpIGRQKEMucHJvdG90eXBlLCAnc2l6ZScsIHtcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdmFsaWRhdGUodGhpcywgTkFNRSlbU0laRV07XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIEM7XG4gIH0sXG4gIGRlZjogZnVuY3Rpb24gKHRoYXQsIGtleSwgdmFsdWUpIHtcbiAgICB2YXIgZW50cnkgPSBnZXRFbnRyeSh0aGF0LCBrZXkpO1xuICAgIHZhciBwcmV2LCBpbmRleDtcbiAgICAvLyBjaGFuZ2UgZXhpc3RpbmcgZW50cnlcbiAgICBpZiAoZW50cnkpIHtcbiAgICAgIGVudHJ5LnYgPSB2YWx1ZTtcbiAgICAvLyBjcmVhdGUgbmV3IGVudHJ5XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoYXQuX2wgPSBlbnRyeSA9IHtcbiAgICAgICAgaTogaW5kZXggPSBmYXN0S2V5KGtleSwgdHJ1ZSksIC8vIDwtIGluZGV4XG4gICAgICAgIGs6IGtleSwgICAgICAgICAgICAgICAgICAgICAgICAvLyA8LSBrZXlcbiAgICAgICAgdjogdmFsdWUsICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIHZhbHVlXG4gICAgICAgIHA6IHByZXYgPSB0aGF0Ll9sLCAgICAgICAgICAgICAvLyA8LSBwcmV2aW91cyBlbnRyeVxuICAgICAgICBuOiB1bmRlZmluZWQsICAgICAgICAgICAgICAgICAgLy8gPC0gbmV4dCBlbnRyeVxuICAgICAgICByOiBmYWxzZSAgICAgICAgICAgICAgICAgICAgICAgLy8gPC0gcmVtb3ZlZFxuICAgICAgfTtcbiAgICAgIGlmICghdGhhdC5fZikgdGhhdC5fZiA9IGVudHJ5O1xuICAgICAgaWYgKHByZXYpIHByZXYubiA9IGVudHJ5O1xuICAgICAgdGhhdFtTSVpFXSsrO1xuICAgICAgLy8gYWRkIHRvIGluZGV4XG4gICAgICBpZiAoaW5kZXggIT09ICdGJykgdGhhdC5faVtpbmRleF0gPSBlbnRyeTtcbiAgICB9IHJldHVybiB0aGF0O1xuICB9LFxuICBnZXRFbnRyeTogZ2V0RW50cnksXG4gIHNldFN0cm9uZzogZnVuY3Rpb24gKEMsIE5BTUUsIElTX01BUCkge1xuICAgIC8vIGFkZCAua2V5cywgLnZhbHVlcywgLmVudHJpZXMsIFtAQGl0ZXJhdG9yXVxuICAgIC8vIDIzLjEuMy40LCAyMy4xLjMuOCwgMjMuMS4zLjExLCAyMy4xLjMuMTIsIDIzLjIuMy41LCAyMy4yLjMuOCwgMjMuMi4zLjEwLCAyMy4yLjMuMTFcbiAgICAkaXRlckRlZmluZShDLCBOQU1FLCBmdW5jdGlvbiAoaXRlcmF0ZWQsIGtpbmQpIHtcbiAgICAgIHRoaXMuX3QgPSB2YWxpZGF0ZShpdGVyYXRlZCwgTkFNRSk7IC8vIHRhcmdldFxuICAgICAgdGhpcy5fayA9IGtpbmQ7ICAgICAgICAgICAgICAgICAgICAgLy8ga2luZFxuICAgICAgdGhpcy5fbCA9IHVuZGVmaW5lZDsgICAgICAgICAgICAgICAgLy8gcHJldmlvdXNcbiAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgICB2YXIga2luZCA9IHRoYXQuX2s7XG4gICAgICB2YXIgZW50cnkgPSB0aGF0Ll9sO1xuICAgICAgLy8gcmV2ZXJ0IHRvIHRoZSBsYXN0IGV4aXN0aW5nIGVudHJ5XG4gICAgICB3aGlsZSAoZW50cnkgJiYgZW50cnkucikgZW50cnkgPSBlbnRyeS5wO1xuICAgICAgLy8gZ2V0IG5leHQgZW50cnlcbiAgICAgIGlmICghdGhhdC5fdCB8fCAhKHRoYXQuX2wgPSBlbnRyeSA9IGVudHJ5ID8gZW50cnkubiA6IHRoYXQuX3QuX2YpKSB7XG4gICAgICAgIC8vIG9yIGZpbmlzaCB0aGUgaXRlcmF0aW9uXG4gICAgICAgIHRoYXQuX3QgPSB1bmRlZmluZWQ7XG4gICAgICAgIHJldHVybiBzdGVwKDEpO1xuICAgICAgfVxuICAgICAgLy8gcmV0dXJuIHN0ZXAgYnkga2luZFxuICAgICAgaWYgKGtpbmQgPT0gJ2tleXMnKSByZXR1cm4gc3RlcCgwLCBlbnRyeS5rKTtcbiAgICAgIGlmIChraW5kID09ICd2YWx1ZXMnKSByZXR1cm4gc3RlcCgwLCBlbnRyeS52KTtcbiAgICAgIHJldHVybiBzdGVwKDAsIFtlbnRyeS5rLCBlbnRyeS52XSk7XG4gICAgfSwgSVNfTUFQID8gJ2VudHJpZXMnIDogJ3ZhbHVlcycsICFJU19NQVAsIHRydWUpO1xuXG4gICAgLy8gYWRkIFtAQHNwZWNpZXNdLCAyMy4xLjIuMiwgMjMuMi4yLjJcbiAgICBzZXRTcGVjaWVzKE5BTUUpO1xuICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgcmVkZWZpbmVBbGwgPSByZXF1aXJlKCcuL19yZWRlZmluZS1hbGwnKTtcbnZhciBtZXRhID0gcmVxdWlyZSgnLi9fbWV0YScpO1xudmFyIGZvck9mID0gcmVxdWlyZSgnLi9fZm9yLW9mJyk7XG52YXIgYW5JbnN0YW5jZSA9IHJlcXVpcmUoJy4vX2FuLWluc3RhbmNlJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG52YXIgJGl0ZXJEZXRlY3QgPSByZXF1aXJlKCcuL19pdGVyLWRldGVjdCcpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBpbmhlcml0SWZSZXF1aXJlZCA9IHJlcXVpcmUoJy4vX2luaGVyaXQtaWYtcmVxdWlyZWQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTkFNRSwgd3JhcHBlciwgbWV0aG9kcywgY29tbW9uLCBJU19NQVAsIElTX1dFQUspIHtcbiAgdmFyIEJhc2UgPSBnbG9iYWxbTkFNRV07XG4gIHZhciBDID0gQmFzZTtcbiAgdmFyIEFEREVSID0gSVNfTUFQID8gJ3NldCcgOiAnYWRkJztcbiAgdmFyIHByb3RvID0gQyAmJiBDLnByb3RvdHlwZTtcbiAgdmFyIE8gPSB7fTtcbiAgdmFyIGZpeE1ldGhvZCA9IGZ1bmN0aW9uIChLRVkpIHtcbiAgICB2YXIgZm4gPSBwcm90b1tLRVldO1xuICAgIHJlZGVmaW5lKHByb3RvLCBLRVksXG4gICAgICBLRVkgPT0gJ2RlbGV0ZScgPyBmdW5jdGlvbiAoYSkge1xuICAgICAgICByZXR1cm4gSVNfV0VBSyAmJiAhaXNPYmplY3QoYSkgPyBmYWxzZSA6IGZuLmNhbGwodGhpcywgYSA9PT0gMCA/IDAgOiBhKTtcbiAgICAgIH0gOiBLRVkgPT0gJ2hhcycgPyBmdW5jdGlvbiBoYXMoYSkge1xuICAgICAgICByZXR1cm4gSVNfV0VBSyAmJiAhaXNPYmplY3QoYSkgPyBmYWxzZSA6IGZuLmNhbGwodGhpcywgYSA9PT0gMCA/IDAgOiBhKTtcbiAgICAgIH0gOiBLRVkgPT0gJ2dldCcgPyBmdW5jdGlvbiBnZXQoYSkge1xuICAgICAgICByZXR1cm4gSVNfV0VBSyAmJiAhaXNPYmplY3QoYSkgPyB1bmRlZmluZWQgOiBmbi5jYWxsKHRoaXMsIGEgPT09IDAgPyAwIDogYSk7XG4gICAgICB9IDogS0VZID09ICdhZGQnID8gZnVuY3Rpb24gYWRkKGEpIHsgZm4uY2FsbCh0aGlzLCBhID09PSAwID8gMCA6IGEpOyByZXR1cm4gdGhpczsgfVxuICAgICAgICA6IGZ1bmN0aW9uIHNldChhLCBiKSB7IGZuLmNhbGwodGhpcywgYSA9PT0gMCA/IDAgOiBhLCBiKTsgcmV0dXJuIHRoaXM7IH1cbiAgICApO1xuICB9O1xuICBpZiAodHlwZW9mIEMgIT0gJ2Z1bmN0aW9uJyB8fCAhKElTX1dFQUsgfHwgcHJvdG8uZm9yRWFjaCAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIG5ldyBDKCkuZW50cmllcygpLm5leHQoKTtcbiAgfSkpKSB7XG4gICAgLy8gY3JlYXRlIGNvbGxlY3Rpb24gY29uc3RydWN0b3JcbiAgICBDID0gY29tbW9uLmdldENvbnN0cnVjdG9yKHdyYXBwZXIsIE5BTUUsIElTX01BUCwgQURERVIpO1xuICAgIHJlZGVmaW5lQWxsKEMucHJvdG90eXBlLCBtZXRob2RzKTtcbiAgICBtZXRhLk5FRUQgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHZhciBpbnN0YW5jZSA9IG5ldyBDKCk7XG4gICAgLy8gZWFybHkgaW1wbGVtZW50YXRpb25zIG5vdCBzdXBwb3J0cyBjaGFpbmluZ1xuICAgIHZhciBIQVNOVF9DSEFJTklORyA9IGluc3RhbmNlW0FEREVSXShJU19XRUFLID8ge30gOiAtMCwgMSkgIT0gaW5zdGFuY2U7XG4gICAgLy8gVjggfiAgQ2hyb21pdW0gNDAtIHdlYWstY29sbGVjdGlvbnMgdGhyb3dzIG9uIHByaW1pdGl2ZXMsIGJ1dCBzaG91bGQgcmV0dXJuIGZhbHNlXG4gICAgdmFyIFRIUk9XU19PTl9QUklNSVRJVkVTID0gZmFpbHMoZnVuY3Rpb24gKCkgeyBpbnN0YW5jZS5oYXMoMSk7IH0pO1xuICAgIC8vIG1vc3QgZWFybHkgaW1wbGVtZW50YXRpb25zIGRvZXNuJ3Qgc3VwcG9ydHMgaXRlcmFibGVzLCBtb3N0IG1vZGVybiAtIG5vdCBjbG9zZSBpdCBjb3JyZWN0bHlcbiAgICB2YXIgQUNDRVBUX0lURVJBQkxFUyA9ICRpdGVyRGV0ZWN0KGZ1bmN0aW9uIChpdGVyKSB7IG5ldyBDKGl0ZXIpOyB9KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXdcbiAgICAvLyBmb3IgZWFybHkgaW1wbGVtZW50YXRpb25zIC0wIGFuZCArMCBub3QgdGhlIHNhbWVcbiAgICB2YXIgQlVHR1lfWkVSTyA9ICFJU19XRUFLICYmIGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIFY4IH4gQ2hyb21pdW0gNDItIGZhaWxzIG9ubHkgd2l0aCA1KyBlbGVtZW50c1xuICAgICAgdmFyICRpbnN0YW5jZSA9IG5ldyBDKCk7XG4gICAgICB2YXIgaW5kZXggPSA1O1xuICAgICAgd2hpbGUgKGluZGV4LS0pICRpbnN0YW5jZVtBRERFUl0oaW5kZXgsIGluZGV4KTtcbiAgICAgIHJldHVybiAhJGluc3RhbmNlLmhhcygtMCk7XG4gICAgfSk7XG4gICAgaWYgKCFBQ0NFUFRfSVRFUkFCTEVTKSB7XG4gICAgICBDID0gd3JhcHBlcihmdW5jdGlvbiAodGFyZ2V0LCBpdGVyYWJsZSkge1xuICAgICAgICBhbkluc3RhbmNlKHRhcmdldCwgQywgTkFNRSk7XG4gICAgICAgIHZhciB0aGF0ID0gaW5oZXJpdElmUmVxdWlyZWQobmV3IEJhc2UoKSwgdGFyZ2V0LCBDKTtcbiAgICAgICAgaWYgKGl0ZXJhYmxlICE9IHVuZGVmaW5lZCkgZm9yT2YoaXRlcmFibGUsIElTX01BUCwgdGhhdFtBRERFUl0sIHRoYXQpO1xuICAgICAgICByZXR1cm4gdGhhdDtcbiAgICAgIH0pO1xuICAgICAgQy5wcm90b3R5cGUgPSBwcm90bztcbiAgICAgIHByb3RvLmNvbnN0cnVjdG9yID0gQztcbiAgICB9XG4gICAgaWYgKFRIUk9XU19PTl9QUklNSVRJVkVTIHx8IEJVR0dZX1pFUk8pIHtcbiAgICAgIGZpeE1ldGhvZCgnZGVsZXRlJyk7XG4gICAgICBmaXhNZXRob2QoJ2hhcycpO1xuICAgICAgSVNfTUFQICYmIGZpeE1ldGhvZCgnZ2V0Jyk7XG4gICAgfVxuICAgIGlmIChCVUdHWV9aRVJPIHx8IEhBU05UX0NIQUlOSU5HKSBmaXhNZXRob2QoQURERVIpO1xuICAgIC8vIHdlYWsgY29sbGVjdGlvbnMgc2hvdWxkIG5vdCBjb250YWlucyAuY2xlYXIgbWV0aG9kXG4gICAgaWYgKElTX1dFQUsgJiYgcHJvdG8uY2xlYXIpIGRlbGV0ZSBwcm90by5jbGVhcjtcbiAgfVxuXG4gIHNldFRvU3RyaW5nVGFnKEMsIE5BTUUpO1xuXG4gIE9bTkFNRV0gPSBDO1xuICAkZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqIChDICE9IEJhc2UpLCBPKTtcblxuICBpZiAoIUlTX1dFQUspIGNvbW1vbi5zZXRTdHJvbmcoQywgTkFNRSwgSVNfTUFQKTtcblxuICByZXR1cm4gQztcbn07XG4iLCJ2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0geyB2ZXJzaW9uOiAnMi41LjcnIH07XG5pZiAodHlwZW9mIF9fZSA9PSAnbnVtYmVyJykgX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgaW5kZXgsIHZhbHVlKSB7XG4gIGlmIChpbmRleCBpbiBvYmplY3QpICRkZWZpbmVQcm9wZXJ0eS5mKG9iamVjdCwgaW5kZXgsIGNyZWF0ZURlc2MoMCwgdmFsdWUpKTtcbiAgZWxzZSBvYmplY3RbaW5kZXhdID0gdmFsdWU7XG59O1xuIiwiLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4sIHRoYXQsIGxlbmd0aCkge1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZiAodGhhdCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gZm47XG4gIHN3aXRjaCAobGVuZ3RoKSB7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24gKGEpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uICgvKiAuLi5hcmdzICovKSB7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuIiwiLy8gNy4yLjEgUmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudClcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCA9PSB1bmRlZmluZWQpIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsIi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudDtcbi8vIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnIGluIG9sZCBJRVxudmFyIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG4iLCIvLyBJRSA4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgJ2NvbnN0cnVjdG9yLGhhc093blByb3BlcnR5LGlzUHJvdG90eXBlT2YscHJvcGVydHlJc0VudW1lcmFibGUsdG9Mb2NhbGVTdHJpbmcsdG9TdHJpbmcsdmFsdWVPZidcbikuc3BsaXQoJywnKTtcbiIsIi8vIGFsbCBlbnVtZXJhYmxlIG9iamVjdCBrZXlzLCBpbmNsdWRlcyBzeW1ib2xzXG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG52YXIgZ09QUyA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJyk7XG52YXIgcElFID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIHJlc3VsdCA9IGdldEtleXMoaXQpO1xuICB2YXIgZ2V0U3ltYm9scyA9IGdPUFMuZjtcbiAgaWYgKGdldFN5bWJvbHMpIHtcbiAgICB2YXIgc3ltYm9scyA9IGdldFN5bWJvbHMoaXQpO1xuICAgIHZhciBpc0VudW0gPSBwSUUuZjtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIGtleTtcbiAgICB3aGlsZSAoc3ltYm9scy5sZW5ndGggPiBpKSBpZiAoaXNFbnVtLmNhbGwoaXQsIGtleSA9IHN5bWJvbHNbaSsrXSkpIHJlc3VsdC5wdXNoKGtleSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbiAodHlwZSwgbmFtZSwgc291cmNlKSB7XG4gIHZhciBJU19GT1JDRUQgPSB0eXBlICYgJGV4cG9ydC5GO1xuICB2YXIgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuRztcbiAgdmFyIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlM7XG4gIHZhciBJU19QUk9UTyA9IHR5cGUgJiAkZXhwb3J0LlA7XG4gIHZhciBJU19CSU5EID0gdHlwZSAmICRleHBvcnQuQjtcbiAgdmFyIHRhcmdldCA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSB8fCAoZ2xvYmFsW25hbWVdID0ge30pIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXTtcbiAgdmFyIGV4cG9ydHMgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KTtcbiAgdmFyIGV4cFByb3RvID0gZXhwb3J0c1tQUk9UT1RZUEVdIHx8IChleHBvcnRzW1BST1RPVFlQRV0gPSB7fSk7XG4gIHZhciBrZXksIG93biwgb3V0LCBleHA7XG4gIGlmIChJU19HTE9CQUwpIHNvdXJjZSA9IG5hbWU7XG4gIGZvciAoa2V5IGluIHNvdXJjZSkge1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSAob3duID8gdGFyZ2V0IDogc291cmNlKVtrZXldO1xuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgZXhwID0gSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXh0ZW5kIGdsb2JhbFxuICAgIGlmICh0YXJnZXQpIHJlZGVmaW5lKHRhcmdldCwga2V5LCBvdXQsIHR5cGUgJiAkZXhwb3J0LlUpO1xuICAgIC8vIGV4cG9ydFxuICAgIGlmIChleHBvcnRzW2tleV0gIT0gb3V0KSBoaWRlKGV4cG9ydHMsIGtleSwgZXhwKTtcbiAgICBpZiAoSVNfUFJPVE8gJiYgZXhwUHJvdG9ba2V5XSAhPSBvdXQpIGV4cFByb3RvW2tleV0gPSBvdXQ7XG4gIH1cbn07XG5nbG9iYWwuY29yZSA9IGNvcmU7XG4vLyB0eXBlIGJpdG1hcFxuJGV4cG9ydC5GID0gMTsgICAvLyBmb3JjZWRcbiRleHBvcnQuRyA9IDI7ICAgLy8gZ2xvYmFsXG4kZXhwb3J0LlMgPSA0OyAgIC8vIHN0YXRpY1xuJGV4cG9ydC5QID0gODsgICAvLyBwcm90b1xuJGV4cG9ydC5CID0gMTY7ICAvLyBiaW5kXG4kZXhwb3J0LlcgPSAzMjsgIC8vIHdyYXBcbiRleHBvcnQuVSA9IDY0OyAgLy8gc2FmZVxuJGV4cG9ydC5SID0gMTI4OyAvLyByZWFsIHByb3RvIG1ldGhvZCBmb3IgYGxpYnJhcnlgXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG52YXIgd2tzID0gcmVxdWlyZSgnLi9fd2tzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEtFWSwgbGVuZ3RoLCBleGVjKSB7XG4gIHZhciBTWU1CT0wgPSB3a3MoS0VZKTtcbiAgdmFyIGZucyA9IGV4ZWMoZGVmaW5lZCwgU1lNQk9MLCAnJ1tLRVldKTtcbiAgdmFyIHN0cmZuID0gZm5zWzBdO1xuICB2YXIgcnhmbiA9IGZuc1sxXTtcbiAgaWYgKGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgTyA9IHt9O1xuICAgIE9bU1lNQk9MXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH07XG4gICAgcmV0dXJuICcnW0tFWV0oTykgIT0gNztcbiAgfSkpIHtcbiAgICByZWRlZmluZShTdHJpbmcucHJvdG90eXBlLCBLRVksIHN0cmZuKTtcbiAgICBoaWRlKFJlZ0V4cC5wcm90b3R5cGUsIFNZTUJPTCwgbGVuZ3RoID09IDJcbiAgICAgIC8vIDIxLjIuNS44IFJlZ0V4cC5wcm90b3R5cGVbQEByZXBsYWNlXShzdHJpbmcsIHJlcGxhY2VWYWx1ZSlcbiAgICAgIC8vIDIxLjIuNS4xMSBSZWdFeHAucHJvdG90eXBlW0BAc3BsaXRdKHN0cmluZywgbGltaXQpXG4gICAgICA/IGZ1bmN0aW9uIChzdHJpbmcsIGFyZykgeyByZXR1cm4gcnhmbi5jYWxsKHN0cmluZywgdGhpcywgYXJnKTsgfVxuICAgICAgLy8gMjEuMi41LjYgUmVnRXhwLnByb3RvdHlwZVtAQG1hdGNoXShzdHJpbmcpXG4gICAgICAvLyAyMS4yLjUuOSBSZWdFeHAucHJvdG90eXBlW0BAc2VhcmNoXShzdHJpbmcpXG4gICAgICA6IGZ1bmN0aW9uIChzdHJpbmcpIHsgcmV0dXJuIHJ4Zm4uY2FsbChzdHJpbmcsIHRoaXMpOyB9XG4gICAgKTtcbiAgfVxufTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIDIxLjIuNS4zIGdldCBSZWdFeHAucHJvdG90eXBlLmZsYWdzXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuICB2YXIgdGhhdCA9IGFuT2JqZWN0KHRoaXMpO1xuICB2YXIgcmVzdWx0ID0gJyc7XG4gIGlmICh0aGF0Lmdsb2JhbCkgcmVzdWx0ICs9ICdnJztcbiAgaWYgKHRoYXQuaWdub3JlQ2FzZSkgcmVzdWx0ICs9ICdpJztcbiAgaWYgKHRoYXQubXVsdGlsaW5lKSByZXN1bHQgKz0gJ20nO1xuICBpZiAodGhhdC51bmljb2RlKSByZXN1bHQgKz0gJ3UnO1xuICBpZiAodGhhdC5zdGlja3kpIHJlc3VsdCArPSAneSc7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwidmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuL19pdGVyLWNhbGwnKTtcbnZhciBpc0FycmF5SXRlciA9IHJlcXVpcmUoJy4vX2lzLWFycmF5LWl0ZXInKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgZ2V0SXRlckZuID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcbnZhciBCUkVBSyA9IHt9O1xudmFyIFJFVFVSTiA9IHt9O1xudmFyIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYWJsZSwgZW50cmllcywgZm4sIHRoYXQsIElURVJBVE9SKSB7XG4gIHZhciBpdGVyRm4gPSBJVEVSQVRPUiA/IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGl0ZXJhYmxlOyB9IDogZ2V0SXRlckZuKGl0ZXJhYmxlKTtcbiAgdmFyIGYgPSBjdHgoZm4sIHRoYXQsIGVudHJpZXMgPyAyIDogMSk7XG4gIHZhciBpbmRleCA9IDA7XG4gIHZhciBsZW5ndGgsIHN0ZXAsIGl0ZXJhdG9yLCByZXN1bHQ7XG4gIGlmICh0eXBlb2YgaXRlckZuICE9ICdmdW5jdGlvbicpIHRocm93IFR5cGVFcnJvcihpdGVyYWJsZSArICcgaXMgbm90IGl0ZXJhYmxlIScpO1xuICAvLyBmYXN0IGNhc2UgZm9yIGFycmF5cyB3aXRoIGRlZmF1bHQgaXRlcmF0b3JcbiAgaWYgKGlzQXJyYXlJdGVyKGl0ZXJGbikpIGZvciAobGVuZ3RoID0gdG9MZW5ndGgoaXRlcmFibGUubGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcbiAgICByZXN1bHQgPSBlbnRyaWVzID8gZihhbk9iamVjdChzdGVwID0gaXRlcmFibGVbaW5kZXhdKVswXSwgc3RlcFsxXSkgOiBmKGl0ZXJhYmxlW2luZGV4XSk7XG4gICAgaWYgKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pIHJldHVybiByZXN1bHQ7XG4gIH0gZWxzZSBmb3IgKGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoaXRlcmFibGUpOyAhKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7KSB7XG4gICAgcmVzdWx0ID0gY2FsbChpdGVyYXRvciwgZiwgc3RlcC52YWx1ZSwgZW50cmllcyk7XG4gICAgaWYgKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pIHJldHVybiByZXN1bHQ7XG4gIH1cbn07XG5leHBvcnRzLkJSRUFLID0gQlJFQUs7XG5leHBvcnRzLlJFVFVSTiA9IFJFVFVSTjtcbiIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGZcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbmlmICh0eXBlb2YgX19nID09ICdudW1iZXInKSBfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiIsInZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07XG4iLCJ2YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICByZXR1cm4gZFAuZihvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG4iLCJ2YXIgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudDtcbm1vZHVsZS5leHBvcnRzID0gZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuIiwibW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdkaXYnKSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG59KTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fc2V0LXByb3RvJykuc2V0O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodGhhdCwgdGFyZ2V0LCBDKSB7XG4gIHZhciBTID0gdGFyZ2V0LmNvbnN0cnVjdG9yO1xuICB2YXIgUDtcbiAgaWYgKFMgIT09IEMgJiYgdHlwZW9mIFMgPT0gJ2Z1bmN0aW9uJyAmJiAoUCA9IFMucHJvdG90eXBlKSAhPT0gQy5wcm90b3R5cGUgJiYgaXNPYmplY3QoUCkgJiYgc2V0UHJvdG90eXBlT2YpIHtcbiAgICBzZXRQcm90b3R5cGVPZih0aGF0LCBQKTtcbiAgfSByZXR1cm4gdGhhdDtcbn07XG4iLCIvLyBmYXN0IGFwcGx5LCBodHRwOi8vanNwZXJmLmxua2l0LmNvbS9mYXN0LWFwcGx5LzVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZuLCBhcmdzLCB0aGF0KSB7XG4gIHZhciB1biA9IHRoYXQgPT09IHVuZGVmaW5lZDtcbiAgc3dpdGNoIChhcmdzLmxlbmd0aCkge1xuICAgIGNhc2UgMDogcmV0dXJuIHVuID8gZm4oKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0KTtcbiAgICBjYXNlIDE6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0pO1xuICAgIGNhc2UgMjogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgY2FzZSAzOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgICBjYXNlIDQ6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pO1xuICB9IHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmdzKTtcbn07XG4iLCIvLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKSA/IE9iamVjdCA6IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gY29mKGl0KSA9PSAnU3RyaW5nJyA/IGl0LnNwbGl0KCcnKSA6IE9iamVjdChpdCk7XG59O1xuIiwiLy8gY2hlY2sgb24gZGVmYXVsdCBBcnJheSBpdGVyYXRvclxudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ICE9PSB1bmRlZmluZWQgJiYgKEl0ZXJhdG9ycy5BcnJheSA9PT0gaXQgfHwgQXJyYXlQcm90b1tJVEVSQVRPUl0gPT09IGl0KTtcbn07XG4iLCIvLyA3LjIuMiBJc0FycmF5KGFyZ3VtZW50KVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIGlzQXJyYXkoYXJnKSB7XG4gIHJldHVybiBjb2YoYXJnKSA9PSAnQXJyYXknO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59O1xuIiwiLy8gNy4yLjggSXNSZWdFeHAoYXJndW1lbnQpXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbnZhciBNQVRDSCA9IHJlcXVpcmUoJy4vX3drcycpKCdtYXRjaCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIGlzUmVnRXhwO1xuICByZXR1cm4gaXNPYmplY3QoaXQpICYmICgoaXNSZWdFeHAgPSBpdFtNQVRDSF0pICE9PSB1bmRlZmluZWQgPyAhIWlzUmVnRXhwIDogY29mKGl0KSA9PSAnUmVnRXhwJyk7XG59O1xuIiwiLy8gY2FsbCBzb21ldGhpbmcgb24gaXRlcmF0b3Igc3RlcCB3aXRoIHNhZmUgY2xvc2luZyBvbiBlcnJvclxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYXRvciwgZm4sIHZhbHVlLCBlbnRyaWVzKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGVudHJpZXMgPyBmbihhbk9iamVjdCh2YWx1ZSlbMF0sIHZhbHVlWzFdKSA6IGZuKHZhbHVlKTtcbiAgLy8gNy40LjYgSXRlcmF0b3JDbG9zZShpdGVyYXRvciwgY29tcGxldGlvbilcbiAgfSBjYXRjaCAoZSkge1xuICAgIHZhciByZXQgPSBpdGVyYXRvclsncmV0dXJuJ107XG4gICAgaWYgKHJldCAhPT0gdW5kZWZpbmVkKSBhbk9iamVjdChyZXQuY2FsbChpdGVyYXRvcikpO1xuICAgIHRocm93IGU7XG4gIH1cbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpO1xudmFyIGRlc2NyaXB0b3IgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG5cbi8vIDI1LjEuMi4xLjEgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19oaWRlJykoSXRlcmF0b3JQcm90b3R5cGUsIHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpLCBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpIHtcbiAgQ29uc3RydWN0b3IucHJvdG90eXBlID0gY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlLCB7IG5leHQ6IGRlc2NyaXB0b3IoMSwgbmV4dCkgfSk7XG4gIHNldFRvU3RyaW5nVGFnKENvbnN0cnVjdG9yLCBOQU1FICsgJyBJdGVyYXRvcicpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZID0gcmVxdWlyZSgnLi9fbGlicmFyeScpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciAkaXRlckNyZWF0ZSA9IHJlcXVpcmUoJy4vX2l0ZXItY3JlYXRlJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpO1xudmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgQlVHR1kgPSAhKFtdLmtleXMgJiYgJ25leHQnIGluIFtdLmtleXMoKSk7IC8vIFNhZmFyaSBoYXMgYnVnZ3kgaXRlcmF0b3JzIHcvbyBgbmV4dGBcbnZhciBGRl9JVEVSQVRPUiA9ICdAQGl0ZXJhdG9yJztcbnZhciBLRVlTID0gJ2tleXMnO1xudmFyIFZBTFVFUyA9ICd2YWx1ZXMnO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEJhc2UsIE5BTUUsIENvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFRCkge1xuICAkaXRlckNyZWF0ZShDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCk7XG4gIHZhciBnZXRNZXRob2QgPSBmdW5jdGlvbiAoa2luZCkge1xuICAgIGlmICghQlVHR1kgJiYga2luZCBpbiBwcm90bykgcmV0dXJuIHByb3RvW2tpbmRdO1xuICAgIHN3aXRjaCAoa2luZCkge1xuICAgICAgY2FzZSBLRVlTOiByZXR1cm4gZnVuY3Rpb24ga2V5cygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICAgIGNhc2UgVkFMVUVTOiByZXR1cm4gZnVuY3Rpb24gdmFsdWVzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgIH0gcmV0dXJuIGZ1bmN0aW9uIGVudHJpZXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gIH07XG4gIHZhciBUQUcgPSBOQU1FICsgJyBJdGVyYXRvcic7XG4gIHZhciBERUZfVkFMVUVTID0gREVGQVVMVCA9PSBWQUxVRVM7XG4gIHZhciBWQUxVRVNfQlVHID0gZmFsc2U7XG4gIHZhciBwcm90byA9IEJhc2UucHJvdG90eXBlO1xuICB2YXIgJG5hdGl2ZSA9IHByb3RvW0lURVJBVE9SXSB8fCBwcm90b1tGRl9JVEVSQVRPUl0gfHwgREVGQVVMVCAmJiBwcm90b1tERUZBVUxUXTtcbiAgdmFyICRkZWZhdWx0ID0gJG5hdGl2ZSB8fCBnZXRNZXRob2QoREVGQVVMVCk7XG4gIHZhciAkZW50cmllcyA9IERFRkFVTFQgPyAhREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKCdlbnRyaWVzJykgOiB1bmRlZmluZWQ7XG4gIHZhciAkYW55TmF0aXZlID0gTkFNRSA9PSAnQXJyYXknID8gcHJvdG8uZW50cmllcyB8fCAkbmF0aXZlIDogJG5hdGl2ZTtcbiAgdmFyIG1ldGhvZHMsIGtleSwgSXRlcmF0b3JQcm90b3R5cGU7XG4gIC8vIEZpeCBuYXRpdmVcbiAgaWYgKCRhbnlOYXRpdmUpIHtcbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mKCRhbnlOYXRpdmUuY2FsbChuZXcgQmFzZSgpKSk7XG4gICAgaWYgKEl0ZXJhdG9yUHJvdG90eXBlICE9PSBPYmplY3QucHJvdG90eXBlICYmIEl0ZXJhdG9yUHJvdG90eXBlLm5leHQpIHtcbiAgICAgIC8vIFNldCBAQHRvU3RyaW5nVGFnIHRvIG5hdGl2ZSBpdGVyYXRvcnNcbiAgICAgIHNldFRvU3RyaW5nVGFnKEl0ZXJhdG9yUHJvdG90eXBlLCBUQUcsIHRydWUpO1xuICAgICAgLy8gZml4IGZvciBzb21lIG9sZCBlbmdpbmVzXG4gICAgICBpZiAoIUxJQlJBUlkgJiYgdHlwZW9mIEl0ZXJhdG9yUHJvdG90eXBlW0lURVJBVE9SXSAhPSAnZnVuY3Rpb24nKSBoaWRlKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG4gICAgfVxuICB9XG4gIC8vIGZpeCBBcnJheSN7dmFsdWVzLCBAQGl0ZXJhdG9yfS5uYW1lIGluIFY4IC8gRkZcbiAgaWYgKERFRl9WQUxVRVMgJiYgJG5hdGl2ZSAmJiAkbmF0aXZlLm5hbWUgIT09IFZBTFVFUykge1xuICAgIFZBTFVFU19CVUcgPSB0cnVlO1xuICAgICRkZWZhdWx0ID0gZnVuY3Rpb24gdmFsdWVzKCkgeyByZXR1cm4gJG5hdGl2ZS5jYWxsKHRoaXMpOyB9O1xuICB9XG4gIC8vIERlZmluZSBpdGVyYXRvclxuICBpZiAoKCFMSUJSQVJZIHx8IEZPUkNFRCkgJiYgKEJVR0dZIHx8IFZBTFVFU19CVUcgfHwgIXByb3RvW0lURVJBVE9SXSkpIHtcbiAgICBoaWRlKHByb3RvLCBJVEVSQVRPUiwgJGRlZmF1bHQpO1xuICB9XG4gIC8vIFBsdWcgZm9yIGxpYnJhcnlcbiAgSXRlcmF0b3JzW05BTUVdID0gJGRlZmF1bHQ7XG4gIEl0ZXJhdG9yc1tUQUddID0gcmV0dXJuVGhpcztcbiAgaWYgKERFRkFVTFQpIHtcbiAgICBtZXRob2RzID0ge1xuICAgICAgdmFsdWVzOiBERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoVkFMVUVTKSxcbiAgICAgIGtleXM6IElTX1NFVCA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKEtFWVMpLFxuICAgICAgZW50cmllczogJGVudHJpZXNcbiAgICB9O1xuICAgIGlmIChGT1JDRUQpIGZvciAoa2V5IGluIG1ldGhvZHMpIHtcbiAgICAgIGlmICghKGtleSBpbiBwcm90bykpIHJlZGVmaW5lKHByb3RvLCBrZXksIG1ldGhvZHNba2V5XSk7XG4gICAgfSBlbHNlICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKEJVR0dZIHx8IFZBTFVFU19CVUcpLCBOQU1FLCBtZXRob2RzKTtcbiAgfVxuICByZXR1cm4gbWV0aG9kcztcbn07XG4iLCJ2YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBTQUZFX0NMT1NJTkcgPSBmYWxzZTtcblxudHJ5IHtcbiAgdmFyIHJpdGVyID0gWzddW0lURVJBVE9SXSgpO1xuICByaXRlclsncmV0dXJuJ10gPSBmdW5jdGlvbiAoKSB7IFNBRkVfQ0xPU0lORyA9IHRydWU7IH07XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby10aHJvdy1saXRlcmFsXG4gIEFycmF5LmZyb20ocml0ZXIsIGZ1bmN0aW9uICgpIHsgdGhyb3cgMjsgfSk7XG59IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYywgc2tpcENsb3NpbmcpIHtcbiAgaWYgKCFza2lwQ2xvc2luZyAmJiAhU0FGRV9DTE9TSU5HKSByZXR1cm4gZmFsc2U7XG4gIHZhciBzYWZlID0gZmFsc2U7XG4gIHRyeSB7XG4gICAgdmFyIGFyciA9IFs3XTtcbiAgICB2YXIgaXRlciA9IGFycltJVEVSQVRPUl0oKTtcbiAgICBpdGVyLm5leHQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB7IGRvbmU6IHNhZmUgPSB0cnVlIH07IH07XG4gICAgYXJyW0lURVJBVE9SXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGl0ZXI7IH07XG4gICAgZXhlYyhhcnIpO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgcmV0dXJuIHNhZmU7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZG9uZSwgdmFsdWUpIHtcbiAgcmV0dXJuIHsgdmFsdWU6IHZhbHVlLCBkb25lOiAhIWRvbmUgfTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmYWxzZTtcbiIsInZhciBNRVRBID0gcmVxdWlyZSgnLi9fdWlkJykoJ21ldGEnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHNldERlc2MgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xudmFyIGlkID0gMDtcbnZhciBpc0V4dGVuc2libGUgPSBPYmplY3QuaXNFeHRlbnNpYmxlIHx8IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRydWU7XG59O1xudmFyIEZSRUVaRSA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGlzRXh0ZW5zaWJsZShPYmplY3QucHJldmVudEV4dGVuc2lvbnMoe30pKTtcbn0pO1xudmFyIHNldE1ldGEgPSBmdW5jdGlvbiAoaXQpIHtcbiAgc2V0RGVzYyhpdCwgTUVUQSwgeyB2YWx1ZToge1xuICAgIGk6ICdPJyArICsraWQsIC8vIG9iamVjdCBJRFxuICAgIHc6IHt9ICAgICAgICAgIC8vIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH0gfSk7XG59O1xudmFyIGZhc3RLZXkgPSBmdW5jdGlvbiAoaXQsIGNyZWF0ZSkge1xuICAvLyByZXR1cm4gcHJpbWl0aXZlIHdpdGggcHJlZml4XG4gIGlmICghaXNPYmplY3QoaXQpKSByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnID8gaXQgOiAodHlwZW9mIGl0ID09ICdzdHJpbmcnID8gJ1MnIDogJ1AnKSArIGl0O1xuICBpZiAoIWhhcyhpdCwgTUVUQSkpIHtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmICghaXNFeHRlbnNpYmxlKGl0KSkgcmV0dXJuICdGJztcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmICghY3JlYXRlKSByZXR1cm4gJ0UnO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBvYmplY3QgSURcbiAgfSByZXR1cm4gaXRbTUVUQV0uaTtcbn07XG52YXIgZ2V0V2VhayA9IGZ1bmN0aW9uIChpdCwgY3JlYXRlKSB7XG4gIGlmICghaGFzKGl0LCBNRVRBKSkge1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYgKCFpc0V4dGVuc2libGUoaXQpKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmICghY3JlYXRlKSByZXR1cm4gZmFsc2U7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIGhhc2ggd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfSByZXR1cm4gaXRbTUVUQV0udztcbn07XG4vLyBhZGQgbWV0YWRhdGEgb24gZnJlZXplLWZhbWlseSBtZXRob2RzIGNhbGxpbmdcbnZhciBvbkZyZWV6ZSA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoRlJFRVpFICYmIG1ldGEuTkVFRCAmJiBpc0V4dGVuc2libGUoaXQpICYmICFoYXMoaXQsIE1FVEEpKSBzZXRNZXRhKGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciBtZXRhID0gbW9kdWxlLmV4cG9ydHMgPSB7XG4gIEtFWTogTUVUQSxcbiAgTkVFRDogZmFsc2UsXG4gIGZhc3RLZXk6IGZhc3RLZXksXG4gIGdldFdlYWs6IGdldFdlYWssXG4gIG9uRnJlZXplOiBvbkZyZWV6ZVxufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBtYWNyb3Rhc2sgPSByZXF1aXJlKCcuL190YXNrJykuc2V0O1xudmFyIE9ic2VydmVyID0gZ2xvYmFsLk11dGF0aW9uT2JzZXJ2ZXIgfHwgZ2xvYmFsLldlYktpdE11dGF0aW9uT2JzZXJ2ZXI7XG52YXIgcHJvY2VzcyA9IGdsb2JhbC5wcm9jZXNzO1xudmFyIFByb21pc2UgPSBnbG9iYWwuUHJvbWlzZTtcbnZhciBpc05vZGUgPSByZXF1aXJlKCcuL19jb2YnKShwcm9jZXNzKSA9PSAncHJvY2Vzcyc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuICB2YXIgaGVhZCwgbGFzdCwgbm90aWZ5O1xuXG4gIHZhciBmbHVzaCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcGFyZW50LCBmbjtcbiAgICBpZiAoaXNOb2RlICYmIChwYXJlbnQgPSBwcm9jZXNzLmRvbWFpbikpIHBhcmVudC5leGl0KCk7XG4gICAgd2hpbGUgKGhlYWQpIHtcbiAgICAgIGZuID0gaGVhZC5mbjtcbiAgICAgIGhlYWQgPSBoZWFkLm5leHQ7XG4gICAgICB0cnkge1xuICAgICAgICBmbigpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZiAoaGVhZCkgbm90aWZ5KCk7XG4gICAgICAgIGVsc2UgbGFzdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9IGxhc3QgPSB1bmRlZmluZWQ7XG4gICAgaWYgKHBhcmVudCkgcGFyZW50LmVudGVyKCk7XG4gIH07XG5cbiAgLy8gTm9kZS5qc1xuICBpZiAoaXNOb2RlKSB7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhmbHVzaCk7XG4gICAgfTtcbiAgLy8gYnJvd3NlcnMgd2l0aCBNdXRhdGlvbk9ic2VydmVyLCBleGNlcHQgaU9TIFNhZmFyaSAtIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy8zMzlcbiAgfSBlbHNlIGlmIChPYnNlcnZlciAmJiAhKGdsb2JhbC5uYXZpZ2F0b3IgJiYgZ2xvYmFsLm5hdmlnYXRvci5zdGFuZGFsb25lKSkge1xuICAgIHZhciB0b2dnbGUgPSB0cnVlO1xuICAgIHZhciBub2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuICAgIG5ldyBPYnNlcnZlcihmbHVzaCkub2JzZXJ2ZShub2RlLCB7IGNoYXJhY3RlckRhdGE6IHRydWUgfSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgbm9kZS5kYXRhID0gdG9nZ2xlID0gIXRvZ2dsZTtcbiAgICB9O1xuICAvLyBlbnZpcm9ubWVudHMgd2l0aCBtYXliZSBub24tY29tcGxldGVseSBjb3JyZWN0LCBidXQgZXhpc3RlbnQgUHJvbWlzZVxuICB9IGVsc2UgaWYgKFByb21pc2UgJiYgUHJvbWlzZS5yZXNvbHZlKSB7XG4gICAgLy8gUHJvbWlzZS5yZXNvbHZlIHdpdGhvdXQgYW4gYXJndW1lbnQgdGhyb3dzIGFuIGVycm9yIGluIExHIFdlYk9TIDJcbiAgICB2YXIgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSh1bmRlZmluZWQpO1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHByb21pc2UudGhlbihmbHVzaCk7XG4gICAgfTtcbiAgLy8gZm9yIG90aGVyIGVudmlyb25tZW50cyAtIG1hY3JvdGFzayBiYXNlZCBvbjpcbiAgLy8gLSBzZXRJbW1lZGlhdGVcbiAgLy8gLSBNZXNzYWdlQ2hhbm5lbFxuICAvLyAtIHdpbmRvdy5wb3N0TWVzc2FnXG4gIC8vIC0gb25yZWFkeXN0YXRlY2hhbmdlXG4gIC8vIC0gc2V0VGltZW91dFxuICB9IGVsc2Uge1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIHN0cmFuZ2UgSUUgKyB3ZWJwYWNrIGRldiBzZXJ2ZXIgYnVnIC0gdXNlIC5jYWxsKGdsb2JhbClcbiAgICAgIG1hY3JvdGFzay5jYWxsKGdsb2JhbCwgZmx1c2gpO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKGZuKSB7XG4gICAgdmFyIHRhc2sgPSB7IGZuOiBmbiwgbmV4dDogdW5kZWZpbmVkIH07XG4gICAgaWYgKGxhc3QpIGxhc3QubmV4dCA9IHRhc2s7XG4gICAgaWYgKCFoZWFkKSB7XG4gICAgICBoZWFkID0gdGFzaztcbiAgICAgIG5vdGlmeSgpO1xuICAgIH0gbGFzdCA9IHRhc2s7XG4gIH07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMjUuNC4xLjUgTmV3UHJvbWlzZUNhcGFiaWxpdHkoQylcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5cbmZ1bmN0aW9uIFByb21pc2VDYXBhYmlsaXR5KEMpIHtcbiAgdmFyIHJlc29sdmUsIHJlamVjdDtcbiAgdGhpcy5wcm9taXNlID0gbmV3IEMoZnVuY3Rpb24gKCQkcmVzb2x2ZSwgJCRyZWplY3QpIHtcbiAgICBpZiAocmVzb2x2ZSAhPT0gdW5kZWZpbmVkIHx8IHJlamVjdCAhPT0gdW5kZWZpbmVkKSB0aHJvdyBUeXBlRXJyb3IoJ0JhZCBQcm9taXNlIGNvbnN0cnVjdG9yJyk7XG4gICAgcmVzb2x2ZSA9ICQkcmVzb2x2ZTtcbiAgICByZWplY3QgPSAkJHJlamVjdDtcbiAgfSk7XG4gIHRoaXMucmVzb2x2ZSA9IGFGdW5jdGlvbihyZXNvbHZlKTtcbiAgdGhpcy5yZWplY3QgPSBhRnVuY3Rpb24ocmVqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMuZiA9IGZ1bmN0aW9uIChDKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZUNhcGFiaWxpdHkoQyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMTkuMS4yLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSwgLi4uKVxudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xudmFyIGdPUFMgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpO1xudmFyIHBJRSA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0Jyk7XG52YXIgJGFzc2lnbiA9IE9iamVjdC5hc3NpZ247XG5cbi8vIHNob3VsZCB3b3JrIHdpdGggc3ltYm9scyBhbmQgc2hvdWxkIGhhdmUgZGV0ZXJtaW5pc3RpYyBwcm9wZXJ0eSBvcmRlciAoVjggYnVnKVxubW9kdWxlLmV4cG9ydHMgPSAhJGFzc2lnbiB8fCByZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgdmFyIEEgPSB7fTtcbiAgdmFyIEIgPSB7fTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBTID0gU3ltYm9sKCk7XG4gIHZhciBLID0gJ2FiY2RlZmdoaWprbG1ub3BxcnN0JztcbiAgQVtTXSA9IDc7XG4gIEsuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGspIHsgQltrXSA9IGs7IH0pO1xuICByZXR1cm4gJGFzc2lnbih7fSwgQSlbU10gIT0gNyB8fCBPYmplY3Qua2V5cygkYXNzaWduKHt9LCBCKSkuam9pbignJykgIT0gSztcbn0pID8gZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgc291cmNlKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgdmFyIFQgPSB0b09iamVjdCh0YXJnZXQpO1xuICB2YXIgYUxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gIHZhciBpbmRleCA9IDE7XG4gIHZhciBnZXRTeW1ib2xzID0gZ09QUy5mO1xuICB2YXIgaXNFbnVtID0gcElFLmY7XG4gIHdoaWxlIChhTGVuID4gaW5kZXgpIHtcbiAgICB2YXIgUyA9IElPYmplY3QoYXJndW1lbnRzW2luZGV4KytdKTtcbiAgICB2YXIga2V5cyA9IGdldFN5bWJvbHMgPyBnZXRLZXlzKFMpLmNvbmNhdChnZXRTeW1ib2xzKFMpKSA6IGdldEtleXMoUyk7XG4gICAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICAgIHZhciBqID0gMDtcbiAgICB2YXIga2V5O1xuICAgIHdoaWxlIChsZW5ndGggPiBqKSBpZiAoaXNFbnVtLmNhbGwoUywga2V5ID0ga2V5c1tqKytdKSkgVFtrZXldID0gU1trZXldO1xuICB9IHJldHVybiBUO1xufSA6ICRhc3NpZ247XG4iLCIvLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGRQcyA9IHJlcXVpcmUoJy4vX29iamVjdC1kcHMnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcbnZhciBFbXB0eSA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIGlmcmFtZSBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxudmFyIGNyZWF0ZURpY3QgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIFRocmFzaCwgd2FzdGUgYW5kIHNvZG9teTogSUUgR0MgYnVnXG4gIHZhciBpZnJhbWUgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2lmcmFtZScpO1xuICB2YXIgaSA9IGVudW1CdWdLZXlzLmxlbmd0aDtcbiAgdmFyIGx0ID0gJzwnO1xuICB2YXIgZ3QgPSAnPic7XG4gIHZhciBpZnJhbWVEb2N1bWVudDtcbiAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIHJlcXVpcmUoJy4vX2h0bWwnKS5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICBpZnJhbWUuc3JjID0gJ2phdmFzY3JpcHQ6JzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zY3JpcHQtdXJsXG4gIC8vIGNyZWF0ZURpY3QgPSBpZnJhbWUuY29udGVudFdpbmRvdy5PYmplY3Q7XG4gIC8vIGh0bWwucmVtb3ZlQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lRG9jdW1lbnQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgaWZyYW1lRG9jdW1lbnQub3BlbigpO1xuICBpZnJhbWVEb2N1bWVudC53cml0ZShsdCArICdzY3JpcHQnICsgZ3QgKyAnZG9jdW1lbnQuRj1PYmplY3QnICsgbHQgKyAnL3NjcmlwdCcgKyBndCk7XG4gIGlmcmFtZURvY3VtZW50LmNsb3NlKCk7XG4gIGNyZWF0ZURpY3QgPSBpZnJhbWVEb2N1bWVudC5GO1xuICB3aGlsZSAoaS0tKSBkZWxldGUgY3JlYXRlRGljdFtQUk9UT1RZUEVdW2VudW1CdWdLZXlzW2ldXTtcbiAgcmV0dXJuIGNyZWF0ZURpY3QoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcykge1xuICB2YXIgcmVzdWx0O1xuICBpZiAoTyAhPT0gbnVsbCkge1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBhbk9iamVjdChPKTtcbiAgICByZXN1bHQgPSBuZXcgRW1wdHkoKTtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gbnVsbDtcbiAgICAvLyBhZGQgXCJfX3Byb3RvX19cIiBmb3IgT2JqZWN0LmdldFByb3RvdHlwZU9mIHBvbHlmaWxsXG4gICAgcmVzdWx0W0lFX1BST1RPXSA9IE87XG4gIH0gZWxzZSByZXN1bHQgPSBjcmVhdGVEaWN0KCk7XG4gIHJldHVybiBQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiBkUHMocmVzdWx0LCBQcm9wZXJ0aWVzKTtcbn07XG4iLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBkUCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gZFAoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKSB0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIScpO1xuICBpZiAoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKSBPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBrZXlzID0gZ2V0S2V5cyhQcm9wZXJ0aWVzKTtcbiAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICB2YXIgaSA9IDA7XG4gIHZhciBQO1xuICB3aGlsZSAobGVuZ3RoID4gaSkgZFAuZihPLCBQID0ga2V5c1tpKytdLCBQcm9wZXJ0aWVzW1BdKTtcbiAgcmV0dXJuIE87XG59O1xuIiwidmFyIHBJRSA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKTtcbnZhciBnT1BEID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGdPUEQgOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCkge1xuICBPID0gdG9JT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gZ09QRChPLCBQKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIGlmIChoYXMoTywgUCkpIHJldHVybiBjcmVhdGVEZXNjKCFwSUUuZi5jYWxsKE8sIFApLCBPW1BdKTtcbn07XG4iLCIvLyBmYWxsYmFjayBmb3IgSUUxMSBidWdneSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB3aXRoIGlmcmFtZSBhbmQgd2luZG93XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIGdPUE4gPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmY7XG52YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxudmFyIHdpbmRvd05hbWVzID0gdHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiB3aW5kb3cgJiYgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNcbiAgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh3aW5kb3cpIDogW107XG5cbnZhciBnZXRXaW5kb3dOYW1lcyA9IGZ1bmN0aW9uIChpdCkge1xuICB0cnkge1xuICAgIHJldHVybiBnT1BOKGl0KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB3aW5kb3dOYW1lcy5zbGljZSgpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5mID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCkge1xuICByZXR1cm4gd2luZG93TmFtZXMgJiYgdG9TdHJpbmcuY2FsbChpdCkgPT0gJ1tvYmplY3QgV2luZG93XScgPyBnZXRXaW5kb3dOYW1lcyhpdCkgOiBnT1BOKHRvSU9iamVjdChpdCkpO1xufTtcbiIsIi8vIDE5LjEuMi43IC8gMTUuMi4zLjQgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKS5jb25jYXQoJ2xlbmd0aCcsICdwcm90b3R5cGUnKTtcblxuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhPKSB7XG4gIHJldHVybiAka2V5cyhPLCBoaWRkZW5LZXlzKTtcbn07XG4iLCJleHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuIiwiLy8gMTkuMS4yLjkgLyAxNS4yLjMuMiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xudmFyIE9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gKE8pIHtcbiAgTyA9IHRvT2JqZWN0KE8pO1xuICBpZiAoaGFzKE8sIElFX1BST1RPKSkgcmV0dXJuIE9bSUVfUFJPVE9dO1xuICBpZiAodHlwZW9mIE8uY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBPIGluc3RhbmNlb2YgTy5jb25zdHJ1Y3Rvcikge1xuICAgIHJldHVybiBPLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgfSByZXR1cm4gTyBpbnN0YW5jZW9mIE9iamVjdCA/IE9iamVjdFByb3RvIDogbnVsbDtcbn07XG4iLCJ2YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIGFycmF5SW5kZXhPZiA9IHJlcXVpcmUoJy4vX2FycmF5LWluY2x1ZGVzJykoZmFsc2UpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIG5hbWVzKSB7XG4gIHZhciBPID0gdG9JT2JqZWN0KG9iamVjdCk7XG4gIHZhciBpID0gMDtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIga2V5O1xuICBmb3IgKGtleSBpbiBPKSBpZiAoa2V5ICE9IElFX1BST1RPKSBoYXMoTywga2V5KSAmJiByZXN1bHQucHVzaChrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSBpZiAoaGFzKE8sIGtleSA9IG5hbWVzW2krK10pKSB7XG4gICAgfmFycmF5SW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcmVzdWx0LnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsIi8vIDE5LjEuMi4xNCAvIDE1LjIuMy4xNCBPYmplY3Qua2V5cyhPKVxudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzKE8pIHtcbiAgcmV0dXJuICRrZXlzKE8sIGVudW1CdWdLZXlzKTtcbn07XG4iLCJleHBvcnRzLmYgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiIsIi8vIG1vc3QgT2JqZWN0IG1ldGhvZHMgYnkgRVM2IHNob3VsZCBhY2NlcHQgcHJpbWl0aXZlc1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEtFWSwgZXhlYykge1xuICB2YXIgZm4gPSAoY29yZS5PYmplY3QgfHwge30pW0tFWV0gfHwgT2JqZWN0W0tFWV07XG4gIHZhciBleHAgPSB7fTtcbiAgZXhwW0tFWV0gPSBleGVjKGZuKTtcbiAgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiBmYWlscyhmdW5jdGlvbiAoKSB7IGZuKDEpOyB9KSwgJ09iamVjdCcsIGV4cCk7XG59O1xuIiwidmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciBpc0VudW0gPSByZXF1aXJlKCcuL19vYmplY3QtcGllJykuZjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGlzRW50cmllcykge1xuICByZXR1cm4gZnVuY3Rpb24gKGl0KSB7XG4gICAgdmFyIE8gPSB0b0lPYmplY3QoaXQpO1xuICAgIHZhciBrZXlzID0gZ2V0S2V5cyhPKTtcbiAgICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIga2V5O1xuICAgIHdoaWxlIChsZW5ndGggPiBpKSBpZiAoaXNFbnVtLmNhbGwoTywga2V5ID0ga2V5c1tpKytdKSkge1xuICAgICAgcmVzdWx0LnB1c2goaXNFbnRyaWVzID8gW2tleSwgT1trZXldXSA6IE9ba2V5XSk7XG4gICAgfSByZXR1cm4gcmVzdWx0O1xuICB9O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4geyBlOiBmYWxzZSwgdjogZXhlYygpIH07XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4geyBlOiB0cnVlLCB2OiBlIH07XG4gIH1cbn07XG4iLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gcmVxdWlyZSgnLi9fbmV3LXByb21pc2UtY2FwYWJpbGl0eScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChDLCB4KSB7XG4gIGFuT2JqZWN0KEMpO1xuICBpZiAoaXNPYmplY3QoeCkgJiYgeC5jb25zdHJ1Y3RvciA9PT0gQykgcmV0dXJuIHg7XG4gIHZhciBwcm9taXNlQ2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5LmYoQyk7XG4gIHZhciByZXNvbHZlID0gcHJvbWlzZUNhcGFiaWxpdHkucmVzb2x2ZTtcbiAgcmVzb2x2ZSh4KTtcbiAgcmV0dXJuIHByb21pc2VDYXBhYmlsaXR5LnByb21pc2U7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYml0bWFwLCB2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGU6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlOiB2YWx1ZVxuICB9O1xufTtcbiIsInZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0YXJnZXQsIHNyYywgc2FmZSkge1xuICBmb3IgKHZhciBrZXkgaW4gc3JjKSByZWRlZmluZSh0YXJnZXQsIGtleSwgc3JjW2tleV0sIHNhZmUpO1xuICByZXR1cm4gdGFyZ2V0O1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIFNSQyA9IHJlcXVpcmUoJy4vX3VpZCcpKCdzcmMnKTtcbnZhciBUT19TVFJJTkcgPSAndG9TdHJpbmcnO1xudmFyICR0b1N0cmluZyA9IEZ1bmN0aW9uW1RPX1NUUklOR107XG52YXIgVFBMID0gKCcnICsgJHRvU3RyaW5nKS5zcGxpdChUT19TVFJJTkcpO1xuXG5yZXF1aXJlKCcuL19jb3JlJykuaW5zcGVjdFNvdXJjZSA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gJHRvU3RyaW5nLmNhbGwoaXQpO1xufTtcblxuKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE8sIGtleSwgdmFsLCBzYWZlKSB7XG4gIHZhciBpc0Z1bmN0aW9uID0gdHlwZW9mIHZhbCA9PSAnZnVuY3Rpb24nO1xuICBpZiAoaXNGdW5jdGlvbikgaGFzKHZhbCwgJ25hbWUnKSB8fCBoaWRlKHZhbCwgJ25hbWUnLCBrZXkpO1xuICBpZiAoT1trZXldID09PSB2YWwpIHJldHVybjtcbiAgaWYgKGlzRnVuY3Rpb24pIGhhcyh2YWwsIFNSQykgfHwgaGlkZSh2YWwsIFNSQywgT1trZXldID8gJycgKyBPW2tleV0gOiBUUEwuam9pbihTdHJpbmcoa2V5KSkpO1xuICBpZiAoTyA9PT0gZ2xvYmFsKSB7XG4gICAgT1trZXldID0gdmFsO1xuICB9IGVsc2UgaWYgKCFzYWZlKSB7XG4gICAgZGVsZXRlIE9ba2V5XTtcbiAgICBoaWRlKE8sIGtleSwgdmFsKTtcbiAgfSBlbHNlIGlmIChPW2tleV0pIHtcbiAgICBPW2tleV0gPSB2YWw7XG4gIH0gZWxzZSB7XG4gICAgaGlkZShPLCBrZXksIHZhbCk7XG4gIH1cbi8vIGFkZCBmYWtlIEZ1bmN0aW9uI3RvU3RyaW5nIGZvciBjb3JyZWN0IHdvcmsgd3JhcHBlZCBtZXRob2RzIC8gY29uc3RydWN0b3JzIHdpdGggbWV0aG9kcyBsaWtlIExvRGFzaCBpc05hdGl2ZVxufSkoRnVuY3Rpb24ucHJvdG90eXBlLCBUT19TVFJJTkcsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyAmJiB0aGlzW1NSQ10gfHwgJHRvU3RyaW5nLmNhbGwodGhpcyk7XG59KTtcbiIsIi8vIFdvcmtzIHdpdGggX19wcm90b19fIG9ubHkuIE9sZCB2OCBjYW4ndCB3b3JrIHdpdGggbnVsbCBwcm90byBvYmplY3RzLlxuLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgY2hlY2sgPSBmdW5jdGlvbiAoTywgcHJvdG8pIHtcbiAgYW5PYmplY3QoTyk7XG4gIGlmICghaXNPYmplY3QocHJvdG8pICYmIHByb3RvICE9PSBudWxsKSB0aHJvdyBUeXBlRXJyb3IocHJvdG8gKyBcIjogY2FuJ3Qgc2V0IGFzIHByb3RvdHlwZSFcIik7XG59O1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8ICgnX19wcm90b19fJyBpbiB7fSA/IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICBmdW5jdGlvbiAodGVzdCwgYnVnZ3ksIHNldCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgc2V0ID0gcmVxdWlyZSgnLi9fY3R4JykoRnVuY3Rpb24uY2FsbCwgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKS5mKE9iamVjdC5wcm90b3R5cGUsICdfX3Byb3RvX18nKS5zZXQsIDIpO1xuICAgICAgICBzZXQodGVzdCwgW10pO1xuICAgICAgICBidWdneSA9ICEodGVzdCBpbnN0YW5jZW9mIEFycmF5KTtcbiAgICAgIH0gY2F0Y2ggKGUpIHsgYnVnZ3kgPSB0cnVlOyB9XG4gICAgICByZXR1cm4gZnVuY3Rpb24gc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pIHtcbiAgICAgICAgY2hlY2soTywgcHJvdG8pO1xuICAgICAgICBpZiAoYnVnZ3kpIE8uX19wcm90b19fID0gcHJvdG87XG4gICAgICAgIGVsc2Ugc2V0KE8sIHByb3RvKTtcbiAgICAgICAgcmV0dXJuIE87XG4gICAgICB9O1xuICAgIH0oe30sIGZhbHNlKSA6IHVuZGVmaW5lZCksXG4gIGNoZWNrOiBjaGVja1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcbnZhciBTUEVDSUVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoS0VZKSB7XG4gIHZhciBDID0gZ2xvYmFsW0tFWV07XG4gIGlmIChERVNDUklQVE9SUyAmJiBDICYmICFDW1NQRUNJRVNdKSBkUC5mKEMsIFNQRUNJRVMsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9XG4gIH0pO1xufTtcbiIsInZhciBkZWYgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgdGFnLCBzdGF0KSB7XG4gIGlmIChpdCAmJiAhaGFzKGl0ID0gc3RhdCA/IGl0IDogaXQucHJvdG90eXBlLCBUQUcpKSBkZWYoaXQsIFRBRywgeyBjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiB0YWcgfSk7XG59O1xuIiwidmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCdrZXlzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIHNoYXJlZFtrZXldIHx8IChzaGFyZWRba2V5XSA9IHVpZChrZXkpKTtcbn07XG4iLCJ2YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJztcbnZhciBzdG9yZSA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcblxuKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB2YWx1ZSAhPT0gdW5kZWZpbmVkID8gdmFsdWUgOiB7fSk7XG59KSgndmVyc2lvbnMnLCBbXSkucHVzaCh7XG4gIHZlcnNpb246IGNvcmUudmVyc2lvbixcbiAgbW9kZTogcmVxdWlyZSgnLi9fbGlicmFyeScpID8gJ3B1cmUnIDogJ2dsb2JhbCcsXG4gIGNvcHlyaWdodDogJ8KpIDIwMTggRGVuaXMgUHVzaGthcmV2ICh6bG9pcm9jay5ydSknXG59KTtcbiIsIi8vIDcuMy4yMCBTcGVjaWVzQ29uc3RydWN0b3IoTywgZGVmYXVsdENvbnN0cnVjdG9yKVxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xudmFyIFNQRUNJRVMgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywgRCkge1xuICB2YXIgQyA9IGFuT2JqZWN0KE8pLmNvbnN0cnVjdG9yO1xuICB2YXIgUztcbiAgcmV0dXJuIEMgPT09IHVuZGVmaW5lZCB8fCAoUyA9IGFuT2JqZWN0KEMpW1NQRUNJRVNdKSA9PSB1bmRlZmluZWQgPyBEIDogYUZ1bmN0aW9uKFMpO1xufTtcbiIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbi8vIHRydWUgIC0+IFN0cmluZyNhdFxuLy8gZmFsc2UgLT4gU3RyaW5nI2NvZGVQb2ludEF0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChUT19TVFJJTkcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0aGF0LCBwb3MpIHtcbiAgICB2YXIgcyA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKTtcbiAgICB2YXIgaSA9IHRvSW50ZWdlcihwb3MpO1xuICAgIHZhciBsID0gcy5sZW5ndGg7XG4gICAgdmFyIGEsIGI7XG4gICAgaWYgKGkgPCAwIHx8IGkgPj0gbCkgcmV0dXJuIFRPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgIGEgPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgcmV0dXJuIGEgPCAweGQ4MDAgfHwgYSA+IDB4ZGJmZiB8fCBpICsgMSA9PT0gbCB8fCAoYiA9IHMuY2hhckNvZGVBdChpICsgMSkpIDwgMHhkYzAwIHx8IGIgPiAweGRmZmZcbiAgICAgID8gVE9fU1RSSU5HID8gcy5jaGFyQXQoaSkgOiBhXG4gICAgICA6IFRPX1NUUklORyA/IHMuc2xpY2UoaSwgaSArIDIpIDogKGEgLSAweGQ4MDAgPDwgMTApICsgKGIgLSAweGRjMDApICsgMHgxMDAwMDtcbiAgfTtcbn07XG4iLCJ2YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgaW52b2tlID0gcmVxdWlyZSgnLi9faW52b2tlJyk7XG52YXIgaHRtbCA9IHJlcXVpcmUoJy4vX2h0bWwnKTtcbnZhciBjZWwgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgcHJvY2VzcyA9IGdsb2JhbC5wcm9jZXNzO1xudmFyIHNldFRhc2sgPSBnbG9iYWwuc2V0SW1tZWRpYXRlO1xudmFyIGNsZWFyVGFzayA9IGdsb2JhbC5jbGVhckltbWVkaWF0ZTtcbnZhciBNZXNzYWdlQ2hhbm5lbCA9IGdsb2JhbC5NZXNzYWdlQ2hhbm5lbDtcbnZhciBEaXNwYXRjaCA9IGdsb2JhbC5EaXNwYXRjaDtcbnZhciBjb3VudGVyID0gMDtcbnZhciBxdWV1ZSA9IHt9O1xudmFyIE9OUkVBRFlTVEFURUNIQU5HRSA9ICdvbnJlYWR5c3RhdGVjaGFuZ2UnO1xudmFyIGRlZmVyLCBjaGFubmVsLCBwb3J0O1xudmFyIHJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGlkID0gK3RoaXM7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbiAgaWYgKHF1ZXVlLmhhc093blByb3BlcnR5KGlkKSkge1xuICAgIHZhciBmbiA9IHF1ZXVlW2lkXTtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICAgIGZuKCk7XG4gIH1cbn07XG52YXIgbGlzdGVuZXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgcnVuLmNhbGwoZXZlbnQuZGF0YSk7XG59O1xuLy8gTm9kZS5qcyAwLjkrICYgSUUxMCsgaGFzIHNldEltbWVkaWF0ZSwgb3RoZXJ3aXNlOlxuaWYgKCFzZXRUYXNrIHx8ICFjbGVhclRhc2spIHtcbiAgc2V0VGFzayA9IGZ1bmN0aW9uIHNldEltbWVkaWF0ZShmbikge1xuICAgIHZhciBhcmdzID0gW107XG4gICAgdmFyIGkgPSAxO1xuICAgIHdoaWxlIChhcmd1bWVudHMubGVuZ3RoID4gaSkgYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcbiAgICBxdWV1ZVsrK2NvdW50ZXJdID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gICAgICBpbnZva2UodHlwZW9mIGZuID09ICdmdW5jdGlvbicgPyBmbiA6IEZ1bmN0aW9uKGZuKSwgYXJncyk7XG4gICAgfTtcbiAgICBkZWZlcihjb3VudGVyKTtcbiAgICByZXR1cm4gY291bnRlcjtcbiAgfTtcbiAgY2xlYXJUYXNrID0gZnVuY3Rpb24gY2xlYXJJbW1lZGlhdGUoaWQpIHtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICB9O1xuICAvLyBOb2RlLmpzIDAuOC1cbiAgaWYgKHJlcXVpcmUoJy4vX2NvZicpKHByb2Nlc3MpID09ICdwcm9jZXNzJykge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGN0eChydW4sIGlkLCAxKSk7XG4gICAgfTtcbiAgLy8gU3BoZXJlIChKUyBnYW1lIGVuZ2luZSkgRGlzcGF0Y2ggQVBJXG4gIH0gZWxzZSBpZiAoRGlzcGF0Y2ggJiYgRGlzcGF0Y2gubm93KSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIERpc3BhdGNoLm5vdyhjdHgocnVuLCBpZCwgMSkpO1xuICAgIH07XG4gIC8vIEJyb3dzZXJzIHdpdGggTWVzc2FnZUNoYW5uZWwsIGluY2x1ZGVzIFdlYldvcmtlcnNcbiAgfSBlbHNlIGlmIChNZXNzYWdlQ2hhbm5lbCkge1xuICAgIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgICBwb3J0ID0gY2hhbm5lbC5wb3J0MjtcbiAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGxpc3RlbmVyO1xuICAgIGRlZmVyID0gY3R4KHBvcnQucG9zdE1lc3NhZ2UsIHBvcnQsIDEpO1xuICAvLyBCcm93c2VycyB3aXRoIHBvc3RNZXNzYWdlLCBza2lwIFdlYldvcmtlcnNcbiAgLy8gSUU4IGhhcyBwb3N0TWVzc2FnZSwgYnV0IGl0J3Mgc3luYyAmIHR5cGVvZiBpdHMgcG9zdE1lc3NhZ2UgaXMgJ29iamVjdCdcbiAgfSBlbHNlIGlmIChnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lciAmJiB0eXBlb2YgcG9zdE1lc3NhZ2UgPT0gJ2Z1bmN0aW9uJyAmJiAhZ2xvYmFsLmltcG9ydFNjcmlwdHMpIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKGlkICsgJycsICcqJyk7XG4gICAgfTtcbiAgICBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGxpc3RlbmVyLCBmYWxzZSk7XG4gIC8vIElFOC1cbiAgfSBlbHNlIGlmIChPTlJFQURZU1RBVEVDSEFOR0UgaW4gY2VsKCdzY3JpcHQnKSkge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBodG1sLmFwcGVuZENoaWxkKGNlbCgnc2NyaXB0JykpW09OUkVBRFlTVEFURUNIQU5HRV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGh0bWwucmVtb3ZlQ2hpbGQodGhpcyk7XG4gICAgICAgIHJ1bi5jYWxsKGlkKTtcbiAgICAgIH07XG4gICAgfTtcbiAgLy8gUmVzdCBvbGQgYnJvd3NlcnNcbiAgfSBlbHNlIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgc2V0VGltZW91dChjdHgocnVuLCBpZCwgMSksIDApO1xuICAgIH07XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IHNldFRhc2ssXG4gIGNsZWFyOiBjbGVhclRhc2tcbn07XG4iLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIG1heCA9IE1hdGgubWF4O1xudmFyIG1pbiA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5kZXgsIGxlbmd0aCkge1xuICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbmRleCA8IDAgPyBtYXgoaW5kZXggKyBsZW5ndGgsIDApIDogbWluKGluZGV4LCBsZW5ndGgpO1xufTtcbiIsIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgPSBNYXRoLmNlaWw7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59O1xuIiwiLy8gdG8gaW5kZXhlZCBvYmplY3QsIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIElPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcbiIsIi8vIDcuMS4xNSBUb0xlbmd0aFxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuIiwiLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG4iLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgUykge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYgKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICh0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG4iLCJ2YXIgaWQgPSAwO1xudmFyIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBuYXZpZ2F0b3IgPSBnbG9iYWwubmF2aWdhdG9yO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5hdmlnYXRvciAmJiBuYXZpZ2F0b3IudXNlckFnZW50IHx8ICcnO1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgVFlQRSkge1xuICBpZiAoIWlzT2JqZWN0KGl0KSB8fCBpdC5fdCAhPT0gVFlQRSkgdGhyb3cgVHlwZUVycm9yKCdJbmNvbXBhdGlibGUgcmVjZWl2ZXIsICcgKyBUWVBFICsgJyByZXF1aXJlZCEnKTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIExJQlJBUlkgPSByZXF1aXJlKCcuL19saWJyYXJ5Jyk7XG52YXIgd2tzRXh0ID0gcmVxdWlyZSgnLi9fd2tzLWV4dCcpO1xudmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgdmFyICRTeW1ib2wgPSBjb3JlLlN5bWJvbCB8fCAoY29yZS5TeW1ib2wgPSBMSUJSQVJZID8ge30gOiBnbG9iYWwuU3ltYm9sIHx8IHt9KTtcbiAgaWYgKG5hbWUuY2hhckF0KDApICE9ICdfJyAmJiAhKG5hbWUgaW4gJFN5bWJvbCkpIGRlZmluZVByb3BlcnR5KCRTeW1ib2wsIG5hbWUsIHsgdmFsdWU6IHdrc0V4dC5mKG5hbWUpIH0pO1xufTtcbiIsImV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX3drcycpO1xuIiwidmFyIHN0b3JlID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ3drcycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xudmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLlN5bWJvbDtcbnZhciBVU0VfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xuXG52YXIgJGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPVxuICAgIFVTRV9TWU1CT0wgJiYgU3ltYm9sW25hbWVdIHx8IChVU0VfU1lNQk9MID8gU3ltYm9sIDogdWlkKSgnU3ltYm9sLicgKyBuYW1lKSk7XG59O1xuXG4kZXhwb3J0cy5zdG9yZSA9IHN0b3JlO1xuIiwidmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL19jbGFzc29mJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmdldEl0ZXJhdG9yTWV0aG9kID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCAhPSB1bmRlZmluZWQpIHJldHVybiBpdFtJVEVSQVRPUl1cbiAgICB8fCBpdFsnQEBpdGVyYXRvciddXG4gICAgfHwgSXRlcmF0b3JzW2NsYXNzb2YoaXQpXTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG4vLyAyMi4xLjMuOCBBcnJheS5wcm90b3R5cGUuZmluZChwcmVkaWNhdGUsIHRoaXNBcmcgPSB1bmRlZmluZWQpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyICRmaW5kID0gcmVxdWlyZSgnLi9fYXJyYXktbWV0aG9kcycpKDUpO1xudmFyIEtFWSA9ICdmaW5kJztcbnZhciBmb3JjZWQgPSB0cnVlO1xuLy8gU2hvdWxkbid0IHNraXAgaG9sZXNcbmlmIChLRVkgaW4gW10pIEFycmF5KDEpW0tFWV0oZnVuY3Rpb24gKCkgeyBmb3JjZWQgPSBmYWxzZTsgfSk7XG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIGZvcmNlZCwgJ0FycmF5Jywge1xuICBmaW5kOiBmdW5jdGlvbiBmaW5kKGNhbGxiYWNrZm4gLyogLCB0aGF0ID0gdW5kZWZpbmVkICovKSB7XG4gICAgcmV0dXJuICRmaW5kKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG5yZXF1aXJlKCcuL19hZGQtdG8tdW5zY29wYWJsZXMnKShLRVkpO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuL19pdGVyLWNhbGwnKTtcbnZhciBpc0FycmF5SXRlciA9IHJlcXVpcmUoJy4vX2lzLWFycmF5LWl0ZXInKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIGNyZWF0ZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fY3JlYXRlLXByb3BlcnR5Jyk7XG52YXIgZ2V0SXRlckZuID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhcmVxdWlyZSgnLi9faXRlci1kZXRlY3QnKShmdW5jdGlvbiAoaXRlcikgeyBBcnJheS5mcm9tKGl0ZXIpOyB9KSwgJ0FycmF5Jywge1xuICAvLyAyMi4xLjIuMSBBcnJheS5mcm9tKGFycmF5TGlrZSwgbWFwZm4gPSB1bmRlZmluZWQsIHRoaXNBcmcgPSB1bmRlZmluZWQpXG4gIGZyb206IGZ1bmN0aW9uIGZyb20oYXJyYXlMaWtlIC8qICwgbWFwZm4gPSB1bmRlZmluZWQsIHRoaXNBcmcgPSB1bmRlZmluZWQgKi8pIHtcbiAgICB2YXIgTyA9IHRvT2JqZWN0KGFycmF5TGlrZSk7XG4gICAgdmFyIEMgPSB0eXBlb2YgdGhpcyA9PSAnZnVuY3Rpb24nID8gdGhpcyA6IEFycmF5O1xuICAgIHZhciBhTGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICB2YXIgbWFwZm4gPSBhTGVuID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZDtcbiAgICB2YXIgbWFwcGluZyA9IG1hcGZuICE9PSB1bmRlZmluZWQ7XG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICB2YXIgaXRlckZuID0gZ2V0SXRlckZuKE8pO1xuICAgIHZhciBsZW5ndGgsIHJlc3VsdCwgc3RlcCwgaXRlcmF0b3I7XG4gICAgaWYgKG1hcHBpbmcpIG1hcGZuID0gY3R4KG1hcGZuLCBhTGVuID4gMiA/IGFyZ3VtZW50c1syXSA6IHVuZGVmaW5lZCwgMik7XG4gICAgLy8gaWYgb2JqZWN0IGlzbid0IGl0ZXJhYmxlIG9yIGl0J3MgYXJyYXkgd2l0aCBkZWZhdWx0IGl0ZXJhdG9yIC0gdXNlIHNpbXBsZSBjYXNlXG4gICAgaWYgKGl0ZXJGbiAhPSB1bmRlZmluZWQgJiYgIShDID09IEFycmF5ICYmIGlzQXJyYXlJdGVyKGl0ZXJGbikpKSB7XG4gICAgICBmb3IgKGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoTyksIHJlc3VsdCA9IG5ldyBDKCk7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTsgaW5kZXgrKykge1xuICAgICAgICBjcmVhdGVQcm9wZXJ0eShyZXN1bHQsIGluZGV4LCBtYXBwaW5nID8gY2FsbChpdGVyYXRvciwgbWFwZm4sIFtzdGVwLnZhbHVlLCBpbmRleF0sIHRydWUpIDogc3RlcC52YWx1ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICAgIGZvciAocmVzdWx0ID0gbmV3IEMobGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcbiAgICAgICAgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBpbmRleCwgbWFwcGluZyA/IG1hcGZuKE9baW5kZXhdLCBpbmRleCkgOiBPW2luZGV4XSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJlc3VsdC5sZW5ndGggPSBpbmRleDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi9fYWRkLXRvLXVuc2NvcGFibGVzJyk7XG52YXIgc3RlcCA9IHJlcXVpcmUoJy4vX2l0ZXItc3RlcCcpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcblxuLy8gMjIuMS4zLjQgQXJyYXkucHJvdG90eXBlLmVudHJpZXMoKVxuLy8gMjIuMS4zLjEzIEFycmF5LnByb3RvdHlwZS5rZXlzKClcbi8vIDIyLjEuMy4yOSBBcnJheS5wcm90b3R5cGUudmFsdWVzKClcbi8vIDIyLjEuMy4zMCBBcnJheS5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbiAoaXRlcmF0ZWQsIGtpbmQpIHtcbiAgdGhpcy5fdCA9IHRvSU9iamVjdChpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuICB0aGlzLl9rID0ga2luZDsgICAgICAgICAgICAgICAgLy8ga2luZFxuLy8gMjIuMS41LjIuMSAlQXJyYXlJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbiAoKSB7XG4gIHZhciBPID0gdGhpcy5fdDtcbiAgdmFyIGtpbmQgPSB0aGlzLl9rO1xuICB2YXIgaW5kZXggPSB0aGlzLl9pKys7XG4gIGlmICghTyB8fCBpbmRleCA+PSBPLmxlbmd0aCkge1xuICAgIHRoaXMuX3QgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHN0ZXAoMSk7XG4gIH1cbiAgaWYgKGtpbmQgPT0gJ2tleXMnKSByZXR1cm4gc3RlcCgwLCBpbmRleCk7XG4gIGlmIChraW5kID09ICd2YWx1ZXMnKSByZXR1cm4gc3RlcCgwLCBPW2luZGV4XSk7XG4gIHJldHVybiBzdGVwKDAsIFtpbmRleCwgT1tpbmRleF1dKTtcbn0sICd2YWx1ZXMnKTtcblxuLy8gYXJndW1lbnRzTGlzdFtAQGl0ZXJhdG9yXSBpcyAlQXJyYXlQcm90b192YWx1ZXMlICg5LjQuNC42LCA5LjQuNC43KVxuSXRlcmF0b3JzLkFyZ3VtZW50cyA9IEl0ZXJhdG9ycy5BcnJheTtcblxuYWRkVG9VbnNjb3BhYmxlcygna2V5cycpO1xuYWRkVG9VbnNjb3BhYmxlcygndmFsdWVzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCdlbnRyaWVzJyk7XG4iLCJ2YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xudmFyIEZQcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbnZhciBuYW1lUkUgPSAvXlxccypmdW5jdGlvbiAoW14gKF0qKS87XG52YXIgTkFNRSA9ICduYW1lJztcblxuLy8gMTkuMi40LjIgbmFtZVxuTkFNRSBpbiBGUHJvdG8gfHwgcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiBkUChGUHJvdG8sIE5BTUUsIHtcbiAgY29uZmlndXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuICgnJyArIHRoaXMpLm1hdGNoKG5hbWVSRSlbMV07XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgc3Ryb25nID0gcmVxdWlyZSgnLi9fY29sbGVjdGlvbi1zdHJvbmcnKTtcbnZhciB2YWxpZGF0ZSA9IHJlcXVpcmUoJy4vX3ZhbGlkYXRlLWNvbGxlY3Rpb24nKTtcbnZhciBNQVAgPSAnTWFwJztcblxuLy8gMjMuMSBNYXAgT2JqZWN0c1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb2xsZWN0aW9uJykoTUFQLCBmdW5jdGlvbiAoZ2V0KSB7XG4gIHJldHVybiBmdW5jdGlvbiBNYXAoKSB7IHJldHVybiBnZXQodGhpcywgYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpOyB9O1xufSwge1xuICAvLyAyMy4xLjMuNiBNYXAucHJvdG90eXBlLmdldChrZXkpXG4gIGdldDogZnVuY3Rpb24gZ2V0KGtleSkge1xuICAgIHZhciBlbnRyeSA9IHN0cm9uZy5nZXRFbnRyeSh2YWxpZGF0ZSh0aGlzLCBNQVApLCBrZXkpO1xuICAgIHJldHVybiBlbnRyeSAmJiBlbnRyeS52O1xuICB9LFxuICAvLyAyMy4xLjMuOSBNYXAucHJvdG90eXBlLnNldChrZXksIHZhbHVlKVxuICBzZXQ6IGZ1bmN0aW9uIHNldChrZXksIHZhbHVlKSB7XG4gICAgcmV0dXJuIHN0cm9uZy5kZWYodmFsaWRhdGUodGhpcywgTUFQKSwga2V5ID09PSAwID8gMCA6IGtleSwgdmFsdWUpO1xuICB9XG59LCBzdHJvbmcsIHRydWUpO1xuIiwiLy8gMTkuMS4zLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSlcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GLCAnT2JqZWN0JywgeyBhc3NpZ246IHJlcXVpcmUoJy4vX29iamVjdC1hc3NpZ24nKSB9KTtcbiIsIi8vIDE5LjEuMi4xNCBPYmplY3Qua2V5cyhPKVxudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5yZXF1aXJlKCcuL19vYmplY3Qtc2FwJykoJ2tleXMnLCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBmdW5jdGlvbiBrZXlzKGl0KSB7XG4gICAgcmV0dXJuICRrZXlzKHRvT2JqZWN0KGl0KSk7XG4gIH07XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZID0gcmVxdWlyZSgnLi9fbGlicmFyeScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL19jbGFzc29mJyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xudmFyIGFuSW5zdGFuY2UgPSByZXF1aXJlKCcuL19hbi1pbnN0YW5jZScpO1xudmFyIGZvck9mID0gcmVxdWlyZSgnLi9fZm9yLW9mJyk7XG52YXIgc3BlY2llc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi9fc3BlY2llcy1jb25zdHJ1Y3RvcicpO1xudmFyIHRhc2sgPSByZXF1aXJlKCcuL190YXNrJykuc2V0O1xudmFyIG1pY3JvdGFzayA9IHJlcXVpcmUoJy4vX21pY3JvdGFzaycpKCk7XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUgPSByZXF1aXJlKCcuL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5Jyk7XG52YXIgcGVyZm9ybSA9IHJlcXVpcmUoJy4vX3BlcmZvcm0nKTtcbnZhciB1c2VyQWdlbnQgPSByZXF1aXJlKCcuL191c2VyLWFnZW50Jyk7XG52YXIgcHJvbWlzZVJlc29sdmUgPSByZXF1aXJlKCcuL19wcm9taXNlLXJlc29sdmUnKTtcbnZhciBQUk9NSVNFID0gJ1Byb21pc2UnO1xudmFyIFR5cGVFcnJvciA9IGdsb2JhbC5UeXBlRXJyb3I7XG52YXIgcHJvY2VzcyA9IGdsb2JhbC5wcm9jZXNzO1xudmFyIHZlcnNpb25zID0gcHJvY2VzcyAmJiBwcm9jZXNzLnZlcnNpb25zO1xudmFyIHY4ID0gdmVyc2lvbnMgJiYgdmVyc2lvbnMudjggfHwgJyc7XG52YXIgJFByb21pc2UgPSBnbG9iYWxbUFJPTUlTRV07XG52YXIgaXNOb2RlID0gY2xhc3NvZihwcm9jZXNzKSA9PSAncHJvY2Vzcyc7XG52YXIgZW1wdHkgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG52YXIgSW50ZXJuYWwsIG5ld0dlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSwgT3duUHJvbWlzZUNhcGFiaWxpdHksIFdyYXBwZXI7XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSBuZXdHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eU1vZHVsZS5mO1xuXG52YXIgVVNFX05BVElWRSA9ICEhZnVuY3Rpb24gKCkge1xuICB0cnkge1xuICAgIC8vIGNvcnJlY3Qgc3ViY2xhc3Npbmcgd2l0aCBAQHNwZWNpZXMgc3VwcG9ydFxuICAgIHZhciBwcm9taXNlID0gJFByb21pc2UucmVzb2x2ZSgxKTtcbiAgICB2YXIgRmFrZVByb21pc2UgPSAocHJvbWlzZS5jb25zdHJ1Y3RvciA9IHt9KVtyZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpXSA9IGZ1bmN0aW9uIChleGVjKSB7XG4gICAgICBleGVjKGVtcHR5LCBlbXB0eSk7XG4gICAgfTtcbiAgICAvLyB1bmhhbmRsZWQgcmVqZWN0aW9ucyB0cmFja2luZyBzdXBwb3J0LCBOb2RlSlMgUHJvbWlzZSB3aXRob3V0IGl0IGZhaWxzIEBAc3BlY2llcyB0ZXN0XG4gICAgcmV0dXJuIChpc05vZGUgfHwgdHlwZW9mIFByb21pc2VSZWplY3Rpb25FdmVudCA9PSAnZnVuY3Rpb24nKVxuICAgICAgJiYgcHJvbWlzZS50aGVuKGVtcHR5KSBpbnN0YW5jZW9mIEZha2VQcm9taXNlXG4gICAgICAvLyB2OCA2LjYgKE5vZGUgMTAgYW5kIENocm9tZSA2NikgaGF2ZSBhIGJ1ZyB3aXRoIHJlc29sdmluZyBjdXN0b20gdGhlbmFibGVzXG4gICAgICAvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD04MzA1NjVcbiAgICAgIC8vIHdlIGNhbid0IGRldGVjdCBpdCBzeW5jaHJvbm91c2x5LCBzbyBqdXN0IGNoZWNrIHZlcnNpb25zXG4gICAgICAmJiB2OC5pbmRleE9mKCc2LjYnKSAhPT0gMFxuICAgICAgJiYgdXNlckFnZW50LmluZGV4T2YoJ0Nocm9tZS82NicpID09PSAtMTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG59KCk7XG5cbi8vIGhlbHBlcnNcbnZhciBpc1RoZW5hYmxlID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciB0aGVuO1xuICByZXR1cm4gaXNPYmplY3QoaXQpICYmIHR5cGVvZiAodGhlbiA9IGl0LnRoZW4pID09ICdmdW5jdGlvbicgPyB0aGVuIDogZmFsc2U7XG59O1xudmFyIG5vdGlmeSA9IGZ1bmN0aW9uIChwcm9taXNlLCBpc1JlamVjdCkge1xuICBpZiAocHJvbWlzZS5fbikgcmV0dXJuO1xuICBwcm9taXNlLl9uID0gdHJ1ZTtcbiAgdmFyIGNoYWluID0gcHJvbWlzZS5fYztcbiAgbWljcm90YXNrKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdmFsdWUgPSBwcm9taXNlLl92O1xuICAgIHZhciBvayA9IHByb21pc2UuX3MgPT0gMTtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHJ1biA9IGZ1bmN0aW9uIChyZWFjdGlvbikge1xuICAgICAgdmFyIGhhbmRsZXIgPSBvayA/IHJlYWN0aW9uLm9rIDogcmVhY3Rpb24uZmFpbDtcbiAgICAgIHZhciByZXNvbHZlID0gcmVhY3Rpb24ucmVzb2x2ZTtcbiAgICAgIHZhciByZWplY3QgPSByZWFjdGlvbi5yZWplY3Q7XG4gICAgICB2YXIgZG9tYWluID0gcmVhY3Rpb24uZG9tYWluO1xuICAgICAgdmFyIHJlc3VsdCwgdGhlbiwgZXhpdGVkO1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKGhhbmRsZXIpIHtcbiAgICAgICAgICBpZiAoIW9rKSB7XG4gICAgICAgICAgICBpZiAocHJvbWlzZS5faCA9PSAyKSBvbkhhbmRsZVVuaGFuZGxlZChwcm9taXNlKTtcbiAgICAgICAgICAgIHByb21pc2UuX2ggPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaGFuZGxlciA9PT0gdHJ1ZSkgcmVzdWx0ID0gdmFsdWU7XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoZG9tYWluKSBkb21haW4uZW50ZXIoKTtcbiAgICAgICAgICAgIHJlc3VsdCA9IGhhbmRsZXIodmFsdWUpOyAvLyBtYXkgdGhyb3dcbiAgICAgICAgICAgIGlmIChkb21haW4pIHtcbiAgICAgICAgICAgICAgZG9tYWluLmV4aXQoKTtcbiAgICAgICAgICAgICAgZXhpdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHJlc3VsdCA9PT0gcmVhY3Rpb24ucHJvbWlzZSkge1xuICAgICAgICAgICAgcmVqZWN0KFR5cGVFcnJvcignUHJvbWlzZS1jaGFpbiBjeWNsZScpKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHRoZW4gPSBpc1RoZW5hYmxlKHJlc3VsdCkpIHtcbiAgICAgICAgICAgIHRoZW4uY2FsbChyZXN1bHQsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSBlbHNlIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIHJlamVjdCh2YWx1ZSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGlmIChkb21haW4gJiYgIWV4aXRlZCkgZG9tYWluLmV4aXQoKTtcbiAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgfVxuICAgIH07XG4gICAgd2hpbGUgKGNoYWluLmxlbmd0aCA+IGkpIHJ1bihjaGFpbltpKytdKTsgLy8gdmFyaWFibGUgbGVuZ3RoIC0gY2FuJ3QgdXNlIGZvckVhY2hcbiAgICBwcm9taXNlLl9jID0gW107XG4gICAgcHJvbWlzZS5fbiA9IGZhbHNlO1xuICAgIGlmIChpc1JlamVjdCAmJiAhcHJvbWlzZS5faCkgb25VbmhhbmRsZWQocHJvbWlzZSk7XG4gIH0pO1xufTtcbnZhciBvblVuaGFuZGxlZCA9IGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gIHRhc2suY2FsbChnbG9iYWwsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdmFsdWUgPSBwcm9taXNlLl92O1xuICAgIHZhciB1bmhhbmRsZWQgPSBpc1VuaGFuZGxlZChwcm9taXNlKTtcbiAgICB2YXIgcmVzdWx0LCBoYW5kbGVyLCBjb25zb2xlO1xuICAgIGlmICh1bmhhbmRsZWQpIHtcbiAgICAgIHJlc3VsdCA9IHBlcmZvcm0oZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoaXNOb2RlKSB7XG4gICAgICAgICAgcHJvY2Vzcy5lbWl0KCd1bmhhbmRsZWRSZWplY3Rpb24nLCB2YWx1ZSwgcHJvbWlzZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoaGFuZGxlciA9IGdsb2JhbC5vbnVuaGFuZGxlZHJlamVjdGlvbikge1xuICAgICAgICAgIGhhbmRsZXIoeyBwcm9taXNlOiBwcm9taXNlLCByZWFzb246IHZhbHVlIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKChjb25zb2xlID0gZ2xvYmFsLmNvbnNvbGUpICYmIGNvbnNvbGUuZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdVbmhhbmRsZWQgcHJvbWlzZSByZWplY3Rpb24nLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgLy8gQnJvd3NlcnMgc2hvdWxkIG5vdCB0cmlnZ2VyIGByZWplY3Rpb25IYW5kbGVkYCBldmVudCBpZiBpdCB3YXMgaGFuZGxlZCBoZXJlLCBOb2RlSlMgLSBzaG91bGRcbiAgICAgIHByb21pc2UuX2ggPSBpc05vZGUgfHwgaXNVbmhhbmRsZWQocHJvbWlzZSkgPyAyIDogMTtcbiAgICB9IHByb21pc2UuX2EgPSB1bmRlZmluZWQ7XG4gICAgaWYgKHVuaGFuZGxlZCAmJiByZXN1bHQuZSkgdGhyb3cgcmVzdWx0LnY7XG4gIH0pO1xufTtcbnZhciBpc1VuaGFuZGxlZCA9IGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gIHJldHVybiBwcm9taXNlLl9oICE9PSAxICYmIChwcm9taXNlLl9hIHx8IHByb21pc2UuX2MpLmxlbmd0aCA9PT0gMDtcbn07XG52YXIgb25IYW5kbGVVbmhhbmRsZWQgPSBmdW5jdGlvbiAocHJvbWlzZSkge1xuICB0YXNrLmNhbGwoZ2xvYmFsLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGhhbmRsZXI7XG4gICAgaWYgKGlzTm9kZSkge1xuICAgICAgcHJvY2Vzcy5lbWl0KCdyZWplY3Rpb25IYW5kbGVkJywgcHJvbWlzZSk7XG4gICAgfSBlbHNlIGlmIChoYW5kbGVyID0gZ2xvYmFsLm9ucmVqZWN0aW9uaGFuZGxlZCkge1xuICAgICAgaGFuZGxlcih7IHByb21pc2U6IHByb21pc2UsIHJlYXNvbjogcHJvbWlzZS5fdiB9KTtcbiAgICB9XG4gIH0pO1xufTtcbnZhciAkcmVqZWN0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHZhciBwcm9taXNlID0gdGhpcztcbiAgaWYgKHByb21pc2UuX2QpIHJldHVybjtcbiAgcHJvbWlzZS5fZCA9IHRydWU7XG4gIHByb21pc2UgPSBwcm9taXNlLl93IHx8IHByb21pc2U7IC8vIHVud3JhcFxuICBwcm9taXNlLl92ID0gdmFsdWU7XG4gIHByb21pc2UuX3MgPSAyO1xuICBpZiAoIXByb21pc2UuX2EpIHByb21pc2UuX2EgPSBwcm9taXNlLl9jLnNsaWNlKCk7XG4gIG5vdGlmeShwcm9taXNlLCB0cnVlKTtcbn07XG52YXIgJHJlc29sdmUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgdmFyIHByb21pc2UgPSB0aGlzO1xuICB2YXIgdGhlbjtcbiAgaWYgKHByb21pc2UuX2QpIHJldHVybjtcbiAgcHJvbWlzZS5fZCA9IHRydWU7XG4gIHByb21pc2UgPSBwcm9taXNlLl93IHx8IHByb21pc2U7IC8vIHVud3JhcFxuICB0cnkge1xuICAgIGlmIChwcm9taXNlID09PSB2YWx1ZSkgdGhyb3cgVHlwZUVycm9yKFwiUHJvbWlzZSBjYW4ndCBiZSByZXNvbHZlZCBpdHNlbGZcIik7XG4gICAgaWYgKHRoZW4gPSBpc1RoZW5hYmxlKHZhbHVlKSkge1xuICAgICAgbWljcm90YXNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHdyYXBwZXIgPSB7IF93OiBwcm9taXNlLCBfZDogZmFsc2UgfTsgLy8gd3JhcFxuICAgICAgICB0cnkge1xuICAgICAgICAgIHRoZW4uY2FsbCh2YWx1ZSwgY3R4KCRyZXNvbHZlLCB3cmFwcGVyLCAxKSwgY3R4KCRyZWplY3QsIHdyYXBwZXIsIDEpKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICRyZWplY3QuY2FsbCh3cmFwcGVyLCBlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb21pc2UuX3YgPSB2YWx1ZTtcbiAgICAgIHByb21pc2UuX3MgPSAxO1xuICAgICAgbm90aWZ5KHByb21pc2UsIGZhbHNlKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICAkcmVqZWN0LmNhbGwoeyBfdzogcHJvbWlzZSwgX2Q6IGZhbHNlIH0sIGUpOyAvLyB3cmFwXG4gIH1cbn07XG5cbi8vIGNvbnN0cnVjdG9yIHBvbHlmaWxsXG5pZiAoIVVTRV9OQVRJVkUpIHtcbiAgLy8gMjUuNC4zLjEgUHJvbWlzZShleGVjdXRvcilcbiAgJFByb21pc2UgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKSB7XG4gICAgYW5JbnN0YW5jZSh0aGlzLCAkUHJvbWlzZSwgUFJPTUlTRSwgJ19oJyk7XG4gICAgYUZ1bmN0aW9uKGV4ZWN1dG9yKTtcbiAgICBJbnRlcm5hbC5jYWxsKHRoaXMpO1xuICAgIHRyeSB7XG4gICAgICBleGVjdXRvcihjdHgoJHJlc29sdmUsIHRoaXMsIDEpLCBjdHgoJHJlamVjdCwgdGhpcywgMSkpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgJHJlamVjdC5jYWxsKHRoaXMsIGVycik7XG4gICAgfVxuICB9O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgSW50ZXJuYWwgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKSB7XG4gICAgdGhpcy5fYyA9IFtdOyAgICAgICAgICAgICAvLyA8LSBhd2FpdGluZyByZWFjdGlvbnNcbiAgICB0aGlzLl9hID0gdW5kZWZpbmVkOyAgICAgIC8vIDwtIGNoZWNrZWQgaW4gaXNVbmhhbmRsZWQgcmVhY3Rpb25zXG4gICAgdGhpcy5fcyA9IDA7ICAgICAgICAgICAgICAvLyA8LSBzdGF0ZVxuICAgIHRoaXMuX2QgPSBmYWxzZTsgICAgICAgICAgLy8gPC0gZG9uZVxuICAgIHRoaXMuX3YgPSB1bmRlZmluZWQ7ICAgICAgLy8gPC0gdmFsdWVcbiAgICB0aGlzLl9oID0gMDsgICAgICAgICAgICAgIC8vIDwtIHJlamVjdGlvbiBzdGF0ZSwgMCAtIGRlZmF1bHQsIDEgLSBoYW5kbGVkLCAyIC0gdW5oYW5kbGVkXG4gICAgdGhpcy5fbiA9IGZhbHNlOyAgICAgICAgICAvLyA8LSBub3RpZnlcbiAgfTtcbiAgSW50ZXJuYWwucHJvdG90eXBlID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUtYWxsJykoJFByb21pc2UucHJvdG90eXBlLCB7XG4gICAgLy8gMjUuNC41LjMgUHJvbWlzZS5wcm90b3R5cGUudGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZClcbiAgICB0aGVuOiBmdW5jdGlvbiB0aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKSB7XG4gICAgICB2YXIgcmVhY3Rpb24gPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShzcGVjaWVzQ29uc3RydWN0b3IodGhpcywgJFByb21pc2UpKTtcbiAgICAgIHJlYWN0aW9uLm9rID0gdHlwZW9mIG9uRnVsZmlsbGVkID09ICdmdW5jdGlvbicgPyBvbkZ1bGZpbGxlZCA6IHRydWU7XG4gICAgICByZWFjdGlvbi5mYWlsID0gdHlwZW9mIG9uUmVqZWN0ZWQgPT0gJ2Z1bmN0aW9uJyAmJiBvblJlamVjdGVkO1xuICAgICAgcmVhY3Rpb24uZG9tYWluID0gaXNOb2RlID8gcHJvY2Vzcy5kb21haW4gOiB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jLnB1c2gocmVhY3Rpb24pO1xuICAgICAgaWYgKHRoaXMuX2EpIHRoaXMuX2EucHVzaChyZWFjdGlvbik7XG4gICAgICBpZiAodGhpcy5fcykgbm90aWZ5KHRoaXMsIGZhbHNlKTtcbiAgICAgIHJldHVybiByZWFjdGlvbi5wcm9taXNlO1xuICAgIH0sXG4gICAgLy8gMjUuNC41LjEgUHJvbWlzZS5wcm90b3R5cGUuY2F0Y2gob25SZWplY3RlZClcbiAgICAnY2F0Y2gnOiBmdW5jdGlvbiAob25SZWplY3RlZCkge1xuICAgICAgcmV0dXJuIHRoaXMudGhlbih1bmRlZmluZWQsIG9uUmVqZWN0ZWQpO1xuICAgIH1cbiAgfSk7XG4gIE93blByb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBwcm9taXNlID0gbmV3IEludGVybmFsKCk7XG4gICAgdGhpcy5wcm9taXNlID0gcHJvbWlzZTtcbiAgICB0aGlzLnJlc29sdmUgPSBjdHgoJHJlc29sdmUsIHByb21pc2UsIDEpO1xuICAgIHRoaXMucmVqZWN0ID0gY3R4KCRyZWplY3QsIHByb21pc2UsIDEpO1xuICB9O1xuICBuZXdQcm9taXNlQ2FwYWJpbGl0eU1vZHVsZS5mID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbiAoQykge1xuICAgIHJldHVybiBDID09PSAkUHJvbWlzZSB8fCBDID09PSBXcmFwcGVyXG4gICAgICA/IG5ldyBPd25Qcm9taXNlQ2FwYWJpbGl0eShDKVxuICAgICAgOiBuZXdHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkoQyk7XG4gIH07XG59XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIHsgUHJvbWlzZTogJFByb21pc2UgfSk7XG5yZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpKCRQcm9taXNlLCBQUk9NSVNFKTtcbnJlcXVpcmUoJy4vX3NldC1zcGVjaWVzJykoUFJPTUlTRSk7XG5XcmFwcGVyID0gcmVxdWlyZSgnLi9fY29yZScpW1BST01JU0VdO1xuXG4vLyBzdGF0aWNzXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC41IFByb21pc2UucmVqZWN0KHIpXG4gIHJlamVjdDogZnVuY3Rpb24gcmVqZWN0KHIpIHtcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHRoaXMpO1xuICAgIHZhciAkJHJlamVjdCA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgICQkcmVqZWN0KHIpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoTElCUkFSWSB8fCAhVVNFX05BVElWRSksIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjYgUHJvbWlzZS5yZXNvbHZlKHgpXG4gIHJlc29sdmU6IGZ1bmN0aW9uIHJlc29sdmUoeCkge1xuICAgIHJldHVybiBwcm9taXNlUmVzb2x2ZShMSUJSQVJZICYmIHRoaXMgPT09IFdyYXBwZXIgPyAkUHJvbWlzZSA6IHRoaXMsIHgpO1xuICB9XG59KTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIShVU0VfTkFUSVZFICYmIHJlcXVpcmUoJy4vX2l0ZXItZGV0ZWN0JykoZnVuY3Rpb24gKGl0ZXIpIHtcbiAgJFByb21pc2UuYWxsKGl0ZXIpWydjYXRjaCddKGVtcHR5KTtcbn0pKSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuMSBQcm9taXNlLmFsbChpdGVyYWJsZSlcbiAgYWxsOiBmdW5jdGlvbiBhbGwoaXRlcmFibGUpIHtcbiAgICB2YXIgQyA9IHRoaXM7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKTtcbiAgICB2YXIgcmVzb2x2ZSA9IGNhcGFiaWxpdHkucmVzb2x2ZTtcbiAgICB2YXIgcmVqZWN0ID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIHJlc3VsdCA9IHBlcmZvcm0oZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHZhbHVlcyA9IFtdO1xuICAgICAgdmFyIGluZGV4ID0gMDtcbiAgICAgIHZhciByZW1haW5pbmcgPSAxO1xuICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBmdW5jdGlvbiAocHJvbWlzZSkge1xuICAgICAgICB2YXIgJGluZGV4ID0gaW5kZXgrKztcbiAgICAgICAgdmFyIGFscmVhZHlDYWxsZWQgPSBmYWxzZTtcbiAgICAgICAgdmFsdWVzLnB1c2godW5kZWZpbmVkKTtcbiAgICAgICAgcmVtYWluaW5nKys7XG4gICAgICAgIEMucmVzb2x2ZShwcm9taXNlKS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgIGlmIChhbHJlYWR5Q2FsbGVkKSByZXR1cm47XG4gICAgICAgICAgYWxyZWFkeUNhbGxlZCA9IHRydWU7XG4gICAgICAgICAgdmFsdWVzWyRpbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcbiAgICB9KTtcbiAgICBpZiAocmVzdWx0LmUpIHJlamVjdChyZXN1bHQudik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfSxcbiAgLy8gMjUuNC40LjQgUHJvbWlzZS5yYWNlKGl0ZXJhYmxlKVxuICByYWNlOiBmdW5jdGlvbiByYWNlKGl0ZXJhYmxlKSB7XG4gICAgdmFyIEMgPSB0aGlzO1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQyk7XG4gICAgdmFyIHJlamVjdCA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciByZXN1bHQgPSBwZXJmb3JtKGZ1bmN0aW9uICgpIHtcbiAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oY2FwYWJpbGl0eS5yZXNvbHZlLCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgaWYgKHJlc3VsdC5lKSByZWplY3QocmVzdWx0LnYpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuIiwiLy8gMjEuMi41LjMgZ2V0IFJlZ0V4cC5wcm90b3R5cGUuZmxhZ3MoKVxuaWYgKHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgLy4vZy5mbGFncyAhPSAnZycpIHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmYoUmVnRXhwLnByb3RvdHlwZSwgJ2ZsYWdzJywge1xuICBjb25maWd1cmFibGU6IHRydWUsXG4gIGdldDogcmVxdWlyZSgnLi9fZmxhZ3MnKVxufSk7XG4iLCIvLyBAQHNwbGl0IGxvZ2ljXG5yZXF1aXJlKCcuL19maXgtcmUtd2tzJykoJ3NwbGl0JywgMiwgZnVuY3Rpb24gKGRlZmluZWQsIFNQTElULCAkc3BsaXQpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuICB2YXIgaXNSZWdFeHAgPSByZXF1aXJlKCcuL19pcy1yZWdleHAnKTtcbiAgdmFyIF9zcGxpdCA9ICRzcGxpdDtcbiAgdmFyICRwdXNoID0gW10ucHVzaDtcbiAgdmFyICRTUExJVCA9ICdzcGxpdCc7XG4gIHZhciBMRU5HVEggPSAnbGVuZ3RoJztcbiAgdmFyIExBU1RfSU5ERVggPSAnbGFzdEluZGV4JztcbiAgaWYgKFxuICAgICdhYmJjJ1skU1BMSVRdKC8oYikqLylbMV0gPT0gJ2MnIHx8XG4gICAgJ3Rlc3QnWyRTUExJVF0oLyg/OikvLCAtMSlbTEVOR1RIXSAhPSA0IHx8XG4gICAgJ2FiJ1skU1BMSVRdKC8oPzphYikqLylbTEVOR1RIXSAhPSAyIHx8XG4gICAgJy4nWyRTUExJVF0oLyguPykoLj8pLylbTEVOR1RIXSAhPSA0IHx8XG4gICAgJy4nWyRTUExJVF0oLygpKCkvKVtMRU5HVEhdID4gMSB8fFxuICAgICcnWyRTUExJVF0oLy4/LylbTEVOR1RIXVxuICApIHtcbiAgICB2YXIgTlBDRyA9IC8oKT8/Ly5leGVjKCcnKVsxXSA9PT0gdW5kZWZpbmVkOyAvLyBub25wYXJ0aWNpcGF0aW5nIGNhcHR1cmluZyBncm91cFxuICAgIC8vIGJhc2VkIG9uIGVzNS1zaGltIGltcGxlbWVudGF0aW9uLCBuZWVkIHRvIHJld29yayBpdFxuICAgICRzcGxpdCA9IGZ1bmN0aW9uIChzZXBhcmF0b3IsIGxpbWl0KSB7XG4gICAgICB2YXIgc3RyaW5nID0gU3RyaW5nKHRoaXMpO1xuICAgICAgaWYgKHNlcGFyYXRvciA9PT0gdW5kZWZpbmVkICYmIGxpbWl0ID09PSAwKSByZXR1cm4gW107XG4gICAgICAvLyBJZiBgc2VwYXJhdG9yYCBpcyBub3QgYSByZWdleCwgdXNlIG5hdGl2ZSBzcGxpdFxuICAgICAgaWYgKCFpc1JlZ0V4cChzZXBhcmF0b3IpKSByZXR1cm4gX3NwbGl0LmNhbGwoc3RyaW5nLCBzZXBhcmF0b3IsIGxpbWl0KTtcbiAgICAgIHZhciBvdXRwdXQgPSBbXTtcbiAgICAgIHZhciBmbGFncyA9IChzZXBhcmF0b3IuaWdub3JlQ2FzZSA/ICdpJyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAoc2VwYXJhdG9yLm11bHRpbGluZSA/ICdtJyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAoc2VwYXJhdG9yLnVuaWNvZGUgPyAndScgOiAnJykgK1xuICAgICAgICAgICAgICAgICAgKHNlcGFyYXRvci5zdGlja3kgPyAneScgOiAnJyk7XG4gICAgICB2YXIgbGFzdExhc3RJbmRleCA9IDA7XG4gICAgICB2YXIgc3BsaXRMaW1pdCA9IGxpbWl0ID09PSB1bmRlZmluZWQgPyA0Mjk0OTY3Mjk1IDogbGltaXQgPj4+IDA7XG4gICAgICAvLyBNYWtlIGBnbG9iYWxgIGFuZCBhdm9pZCBgbGFzdEluZGV4YCBpc3N1ZXMgYnkgd29ya2luZyB3aXRoIGEgY29weVxuICAgICAgdmFyIHNlcGFyYXRvckNvcHkgPSBuZXcgUmVnRXhwKHNlcGFyYXRvci5zb3VyY2UsIGZsYWdzICsgJ2cnKTtcbiAgICAgIHZhciBzZXBhcmF0b3IyLCBtYXRjaCwgbGFzdEluZGV4LCBsYXN0TGVuZ3RoLCBpO1xuICAgICAgLy8gRG9lc24ndCBuZWVkIGZsYWdzIGd5LCBidXQgdGhleSBkb24ndCBodXJ0XG4gICAgICBpZiAoIU5QQ0cpIHNlcGFyYXRvcjIgPSBuZXcgUmVnRXhwKCdeJyArIHNlcGFyYXRvckNvcHkuc291cmNlICsgJyQoPyFcXFxccyknLCBmbGFncyk7XG4gICAgICB3aGlsZSAobWF0Y2ggPSBzZXBhcmF0b3JDb3B5LmV4ZWMoc3RyaW5nKSkge1xuICAgICAgICAvLyBgc2VwYXJhdG9yQ29weS5sYXN0SW5kZXhgIGlzIG5vdCByZWxpYWJsZSBjcm9zcy1icm93c2VyXG4gICAgICAgIGxhc3RJbmRleCA9IG1hdGNoLmluZGV4ICsgbWF0Y2hbMF1bTEVOR1RIXTtcbiAgICAgICAgaWYgKGxhc3RJbmRleCA+IGxhc3RMYXN0SW5kZXgpIHtcbiAgICAgICAgICBvdXRwdXQucHVzaChzdHJpbmcuc2xpY2UobGFzdExhc3RJbmRleCwgbWF0Y2guaW5kZXgpKTtcbiAgICAgICAgICAvLyBGaXggYnJvd3NlcnMgd2hvc2UgYGV4ZWNgIG1ldGhvZHMgZG9uJ3QgY29uc2lzdGVudGx5IHJldHVybiBgdW5kZWZpbmVkYCBmb3IgTlBDR1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1sb29wLWZ1bmNcbiAgICAgICAgICBpZiAoIU5QQ0cgJiYgbWF0Y2hbTEVOR1RIXSA+IDEpIG1hdGNoWzBdLnJlcGxhY2Uoc2VwYXJhdG9yMiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZm9yIChpID0gMTsgaSA8IGFyZ3VtZW50c1tMRU5HVEhdIC0gMjsgaSsrKSBpZiAoYXJndW1lbnRzW2ldID09PSB1bmRlZmluZWQpIG1hdGNoW2ldID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmIChtYXRjaFtMRU5HVEhdID4gMSAmJiBtYXRjaC5pbmRleCA8IHN0cmluZ1tMRU5HVEhdKSAkcHVzaC5hcHBseShvdXRwdXQsIG1hdGNoLnNsaWNlKDEpKTtcbiAgICAgICAgICBsYXN0TGVuZ3RoID0gbWF0Y2hbMF1bTEVOR1RIXTtcbiAgICAgICAgICBsYXN0TGFzdEluZGV4ID0gbGFzdEluZGV4O1xuICAgICAgICAgIGlmIChvdXRwdXRbTEVOR1RIXSA+PSBzcGxpdExpbWl0KSBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2VwYXJhdG9yQ29weVtMQVNUX0lOREVYXSA9PT0gbWF0Y2guaW5kZXgpIHNlcGFyYXRvckNvcHlbTEFTVF9JTkRFWF0rKzsgLy8gQXZvaWQgYW4gaW5maW5pdGUgbG9vcFxuICAgICAgfVxuICAgICAgaWYgKGxhc3RMYXN0SW5kZXggPT09IHN0cmluZ1tMRU5HVEhdKSB7XG4gICAgICAgIGlmIChsYXN0TGVuZ3RoIHx8ICFzZXBhcmF0b3JDb3B5LnRlc3QoJycpKSBvdXRwdXQucHVzaCgnJyk7XG4gICAgICB9IGVsc2Ugb3V0cHV0LnB1c2goc3RyaW5nLnNsaWNlKGxhc3RMYXN0SW5kZXgpKTtcbiAgICAgIHJldHVybiBvdXRwdXRbTEVOR1RIXSA+IHNwbGl0TGltaXQgPyBvdXRwdXQuc2xpY2UoMCwgc3BsaXRMaW1pdCkgOiBvdXRwdXQ7XG4gICAgfTtcbiAgLy8gQ2hha3JhLCBWOFxuICB9IGVsc2UgaWYgKCcwJ1skU1BMSVRdKHVuZGVmaW5lZCwgMClbTEVOR1RIXSkge1xuICAgICRzcGxpdCA9IGZ1bmN0aW9uIChzZXBhcmF0b3IsIGxpbWl0KSB7XG4gICAgICByZXR1cm4gc2VwYXJhdG9yID09PSB1bmRlZmluZWQgJiYgbGltaXQgPT09IDAgPyBbXSA6IF9zcGxpdC5jYWxsKHRoaXMsIHNlcGFyYXRvciwgbGltaXQpO1xuICAgIH07XG4gIH1cbiAgLy8gMjEuMS4zLjE3IFN0cmluZy5wcm90b3R5cGUuc3BsaXQoc2VwYXJhdG9yLCBsaW1pdClcbiAgcmV0dXJuIFtmdW5jdGlvbiBzcGxpdChzZXBhcmF0b3IsIGxpbWl0KSB7XG4gICAgdmFyIE8gPSBkZWZpbmVkKHRoaXMpO1xuICAgIHZhciBmbiA9IHNlcGFyYXRvciA9PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBzZXBhcmF0b3JbU1BMSVRdO1xuICAgIHJldHVybiBmbiAhPT0gdW5kZWZpbmVkID8gZm4uY2FsbChzZXBhcmF0b3IsIE8sIGxpbWl0KSA6ICRzcGxpdC5jYWxsKFN0cmluZyhPKSwgc2VwYXJhdG9yLCBsaW1pdCk7XG4gIH0sICRzcGxpdF07XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnJlcXVpcmUoJy4vZXM2LnJlZ2V4cC5mbGFncycpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgJGZsYWdzID0gcmVxdWlyZSgnLi9fZmxhZ3MnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyk7XG52YXIgVE9fU1RSSU5HID0gJ3RvU3RyaW5nJztcbnZhciAkdG9TdHJpbmcgPSAvLi9bVE9fU1RSSU5HXTtcblxudmFyIGRlZmluZSA9IGZ1bmN0aW9uIChmbikge1xuICByZXF1aXJlKCcuL19yZWRlZmluZScpKFJlZ0V4cC5wcm90b3R5cGUsIFRPX1NUUklORywgZm4sIHRydWUpO1xufTtcblxuLy8gMjEuMi41LjE0IFJlZ0V4cC5wcm90b3R5cGUudG9TdHJpbmcoKVxuaWYgKHJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkgeyByZXR1cm4gJHRvU3RyaW5nLmNhbGwoeyBzb3VyY2U6ICdhJywgZmxhZ3M6ICdiJyB9KSAhPSAnL2EvYic7IH0pKSB7XG4gIGRlZmluZShmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICB2YXIgUiA9IGFuT2JqZWN0KHRoaXMpO1xuICAgIHJldHVybiAnLycuY29uY2F0KFIuc291cmNlLCAnLycsXG4gICAgICAnZmxhZ3MnIGluIFIgPyBSLmZsYWdzIDogIURFU0NSSVBUT1JTICYmIFIgaW5zdGFuY2VvZiBSZWdFeHAgPyAkZmxhZ3MuY2FsbChSKSA6IHVuZGVmaW5lZCk7XG4gIH0pO1xuLy8gRkY0NC0gUmVnRXhwI3RvU3RyaW5nIGhhcyBhIHdyb25nIG5hbWVcbn0gZWxzZSBpZiAoJHRvU3RyaW5nLm5hbWUgIT0gVE9fU1RSSU5HKSB7XG4gIGRlZmluZShmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gJHRvU3RyaW5nLmNhbGwodGhpcyk7XG4gIH0pO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRhdCA9IHJlcXVpcmUoJy4vX3N0cmluZy1hdCcpKHRydWUpO1xuXG4vLyAyMS4xLjMuMjcgU3RyaW5nLnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKFN0cmluZywgJ1N0cmluZycsIGZ1bmN0aW9uIChpdGVyYXRlZCkge1xuICB0aGlzLl90ID0gU3RyaW5nKGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4vLyAyMS4xLjUuMi4xICVTdHJpbmdJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbiAoKSB7XG4gIHZhciBPID0gdGhpcy5fdDtcbiAgdmFyIGluZGV4ID0gdGhpcy5faTtcbiAgdmFyIHBvaW50O1xuICBpZiAoaW5kZXggPj0gTy5sZW5ndGgpIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgcG9pbnQgPSAkYXQoTywgaW5kZXgpO1xuICB0aGlzLl9pICs9IHBvaW50Lmxlbmd0aDtcbiAgcmV0dXJuIHsgdmFsdWU6IHBvaW50LCBkb25lOiBmYWxzZSB9O1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG4vLyBFQ01BU2NyaXB0IDYgc3ltYm9scyBzaGltXG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgTUVUQSA9IHJlcXVpcmUoJy4vX21ldGEnKS5LRVk7XG52YXIgJGZhaWxzID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG52YXIgd2tzID0gcmVxdWlyZSgnLi9fd2tzJyk7XG52YXIgd2tzRXh0ID0gcmVxdWlyZSgnLi9fd2tzLWV4dCcpO1xudmFyIHdrc0RlZmluZSA9IHJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKTtcbnZhciBlbnVtS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0ta2V5cycpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuL19pcy1hcnJheScpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xudmFyIF9jcmVhdGUgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJyk7XG52YXIgZ09QTkV4dCA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BuLWV4dCcpO1xudmFyICRHT1BEID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKTtcbnZhciAkRFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG52YXIgZ09QRCA9ICRHT1BELmY7XG52YXIgZFAgPSAkRFAuZjtcbnZhciBnT1BOID0gZ09QTkV4dC5mO1xudmFyICRTeW1ib2wgPSBnbG9iYWwuU3ltYm9sO1xudmFyICRKU09OID0gZ2xvYmFsLkpTT047XG52YXIgX3N0cmluZ2lmeSA9ICRKU09OICYmICRKU09OLnN0cmluZ2lmeTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcbnZhciBISURERU4gPSB3a3MoJ19oaWRkZW4nKTtcbnZhciBUT19QUklNSVRJVkUgPSB3a3MoJ3RvUHJpbWl0aXZlJyk7XG52YXIgaXNFbnVtID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG52YXIgU3ltYm9sUmVnaXN0cnkgPSBzaGFyZWQoJ3N5bWJvbC1yZWdpc3RyeScpO1xudmFyIEFsbFN5bWJvbHMgPSBzaGFyZWQoJ3N5bWJvbHMnKTtcbnZhciBPUFN5bWJvbHMgPSBzaGFyZWQoJ29wLXN5bWJvbHMnKTtcbnZhciBPYmplY3RQcm90byA9IE9iamVjdFtQUk9UT1RZUEVdO1xudmFyIFVTRV9OQVRJVkUgPSB0eXBlb2YgJFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xudmFyIFFPYmplY3QgPSBnbG9iYWwuUU9iamVjdDtcbi8vIERvbid0IHVzZSBzZXR0ZXJzIGluIFF0IFNjcmlwdCwgaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzE3M1xudmFyIHNldHRlciA9ICFRT2JqZWN0IHx8ICFRT2JqZWN0W1BST1RPVFlQRV0gfHwgIVFPYmplY3RbUFJPVE9UWVBFXS5maW5kQ2hpbGQ7XG5cbi8vIGZhbGxiYWNrIGZvciBvbGQgQW5kcm9pZCwgaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTY4N1xudmFyIHNldFN5bWJvbERlc2MgPSBERVNDUklQVE9SUyAmJiAkZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gX2NyZWF0ZShkUCh7fSwgJ2EnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBkUCh0aGlzLCAnYScsIHsgdmFsdWU6IDcgfSkuYTsgfVxuICB9KSkuYSAhPSA3O1xufSkgPyBmdW5jdGlvbiAoaXQsIGtleSwgRCkge1xuICB2YXIgcHJvdG9EZXNjID0gZ09QRChPYmplY3RQcm90bywga2V5KTtcbiAgaWYgKHByb3RvRGVzYykgZGVsZXRlIE9iamVjdFByb3RvW2tleV07XG4gIGRQKGl0LCBrZXksIEQpO1xuICBpZiAocHJvdG9EZXNjICYmIGl0ICE9PSBPYmplY3RQcm90bykgZFAoT2JqZWN0UHJvdG8sIGtleSwgcHJvdG9EZXNjKTtcbn0gOiBkUDtcblxudmFyIHdyYXAgPSBmdW5jdGlvbiAodGFnKSB7XG4gIHZhciBzeW0gPSBBbGxTeW1ib2xzW3RhZ10gPSBfY3JlYXRlKCRTeW1ib2xbUFJPVE9UWVBFXSk7XG4gIHN5bS5fayA9IHRhZztcbiAgcmV0dXJuIHN5bTtcbn07XG5cbnZhciBpc1N5bWJvbCA9IFVTRV9OQVRJVkUgJiYgdHlwZW9mICRTeW1ib2wuaXRlcmF0b3IgPT0gJ3N5bWJvbCcgPyBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJztcbn0gOiBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0IGluc3RhbmNlb2YgJFN5bWJvbDtcbn07XG5cbnZhciAkZGVmaW5lUHJvcGVydHkgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBEKSB7XG4gIGlmIChpdCA9PT0gT2JqZWN0UHJvdG8pICRkZWZpbmVQcm9wZXJ0eShPUFN5bWJvbHMsIGtleSwgRCk7XG4gIGFuT2JqZWN0KGl0KTtcbiAga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKTtcbiAgYW5PYmplY3QoRCk7XG4gIGlmIChoYXMoQWxsU3ltYm9scywga2V5KSkge1xuICAgIGlmICghRC5lbnVtZXJhYmxlKSB7XG4gICAgICBpZiAoIWhhcyhpdCwgSElEREVOKSkgZFAoaXQsIEhJRERFTiwgY3JlYXRlRGVzYygxLCB7fSkpO1xuICAgICAgaXRbSElEREVOXVtrZXldID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0pIGl0W0hJRERFTl1ba2V5XSA9IGZhbHNlO1xuICAgICAgRCA9IF9jcmVhdGUoRCwgeyBlbnVtZXJhYmxlOiBjcmVhdGVEZXNjKDAsIGZhbHNlKSB9KTtcbiAgICB9IHJldHVybiBzZXRTeW1ib2xEZXNjKGl0LCBrZXksIEQpO1xuICB9IHJldHVybiBkUChpdCwga2V5LCBEKTtcbn07XG52YXIgJGRlZmluZVByb3BlcnRpZXMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKGl0LCBQKSB7XG4gIGFuT2JqZWN0KGl0KTtcbiAgdmFyIGtleXMgPSBlbnVtS2V5cyhQID0gdG9JT2JqZWN0KFApKTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgbCA9IGtleXMubGVuZ3RoO1xuICB2YXIga2V5O1xuICB3aGlsZSAobCA+IGkpICRkZWZpbmVQcm9wZXJ0eShpdCwga2V5ID0ga2V5c1tpKytdLCBQW2tleV0pO1xuICByZXR1cm4gaXQ7XG59O1xudmFyICRjcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaXQsIFApIHtcbiAgcmV0dXJuIFAgPT09IHVuZGVmaW5lZCA/IF9jcmVhdGUoaXQpIDogJGRlZmluZVByb3BlcnRpZXMoX2NyZWF0ZShpdCksIFApO1xufTtcbnZhciAkcHJvcGVydHlJc0VudW1lcmFibGUgPSBmdW5jdGlvbiBwcm9wZXJ0eUlzRW51bWVyYWJsZShrZXkpIHtcbiAgdmFyIEUgPSBpc0VudW0uY2FsbCh0aGlzLCBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpKTtcbiAgaWYgKHRoaXMgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKSByZXR1cm4gZmFsc2U7XG4gIHJldHVybiBFIHx8ICFoYXModGhpcywga2V5KSB8fCAhaGFzKEFsbFN5bWJvbHMsIGtleSkgfHwgaGFzKHRoaXMsIEhJRERFTikgJiYgdGhpc1tISURERU5dW2tleV0gPyBFIDogdHJ1ZTtcbn07XG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KSB7XG4gIGl0ID0gdG9JT2JqZWN0KGl0KTtcbiAga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKTtcbiAgaWYgKGl0ID09PSBPYmplY3RQcm90byAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9QU3ltYm9scywga2V5KSkgcmV0dXJuO1xuICB2YXIgRCA9IGdPUEQoaXQsIGtleSk7XG4gIGlmIChEICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICEoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSkpIEQuZW51bWVyYWJsZSA9IHRydWU7XG4gIHJldHVybiBEO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlOYW1lcyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpIHtcbiAgdmFyIG5hbWVzID0gZ09QTih0b0lPYmplY3QoaXQpKTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgaSA9IDA7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSB7XG4gICAgaWYgKCFoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYga2V5ICE9IEhJRERFTiAmJiBrZXkgIT0gTUVUQSkgcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KSB7XG4gIHZhciBJU19PUCA9IGl0ID09PSBPYmplY3RQcm90bztcbiAgdmFyIG5hbWVzID0gZ09QTihJU19PUCA/IE9QU3ltYm9scyA6IHRvSU9iamVjdChpdCkpO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBpID0gMDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIHtcbiAgICBpZiAoaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIChJU19PUCA/IGhhcyhPYmplY3RQcm90bywga2V5KSA6IHRydWUpKSByZXN1bHQucHVzaChBbGxTeW1ib2xzW2tleV0pO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xuXG4vLyAxOS40LjEuMSBTeW1ib2woW2Rlc2NyaXB0aW9uXSlcbmlmICghVVNFX05BVElWRSkge1xuICAkU3ltYm9sID0gZnVuY3Rpb24gU3ltYm9sKCkge1xuICAgIGlmICh0aGlzIGluc3RhbmNlb2YgJFN5bWJvbCkgdGhyb3cgVHlwZUVycm9yKCdTeW1ib2wgaXMgbm90IGEgY29uc3RydWN0b3IhJyk7XG4gICAgdmFyIHRhZyA9IHVpZChhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCk7XG4gICAgdmFyICRzZXQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIGlmICh0aGlzID09PSBPYmplY3RQcm90bykgJHNldC5jYWxsKE9QU3ltYm9scywgdmFsdWUpO1xuICAgICAgaWYgKGhhcyh0aGlzLCBISURERU4pICYmIGhhcyh0aGlzW0hJRERFTl0sIHRhZykpIHRoaXNbSElEREVOXVt0YWddID0gZmFsc2U7XG4gICAgICBzZXRTeW1ib2xEZXNjKHRoaXMsIHRhZywgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xuICAgIH07XG4gICAgaWYgKERFU0NSSVBUT1JTICYmIHNldHRlcikgc2V0U3ltYm9sRGVzYyhPYmplY3RQcm90bywgdGFnLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgc2V0OiAkc2V0IH0pO1xuICAgIHJldHVybiB3cmFwKHRhZyk7XG4gIH07XG4gIHJlZGVmaW5lKCRTeW1ib2xbUFJPVE9UWVBFXSwgJ3RvU3RyaW5nJywgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2s7XG4gIH0pO1xuXG4gICRHT1BELmYgPSAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuICAkRFAuZiA9ICRkZWZpbmVQcm9wZXJ0eTtcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mID0gZ09QTkV4dC5mID0gJGdldE93blByb3BlcnR5TmFtZXM7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1waWUnKS5mID0gJHByb3BlcnR5SXNFbnVtZXJhYmxlO1xuICByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpLmYgPSAkZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG4gIGlmIChERVNDUklQVE9SUyAmJiAhcmVxdWlyZSgnLi9fbGlicmFyeScpKSB7XG4gICAgcmVkZWZpbmUoT2JqZWN0UHJvdG8sICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsICRwcm9wZXJ0eUlzRW51bWVyYWJsZSwgdHJ1ZSk7XG4gIH1cblxuICB3a3NFeHQuZiA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgcmV0dXJuIHdyYXAod2tzKG5hbWUpKTtcbiAgfTtcbn1cblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgeyBTeW1ib2w6ICRTeW1ib2wgfSk7XG5cbmZvciAodmFyIGVzNlN5bWJvbHMgPSAoXG4gIC8vIDE5LjQuMi4yLCAxOS40LjIuMywgMTkuNC4yLjQsIDE5LjQuMi42LCAxOS40LjIuOCwgMTkuNC4yLjksIDE5LjQuMi4xMCwgMTkuNC4yLjExLCAxOS40LjIuMTIsIDE5LjQuMi4xMywgMTkuNC4yLjE0XG4gICdoYXNJbnN0YW5jZSxpc0NvbmNhdFNwcmVhZGFibGUsaXRlcmF0b3IsbWF0Y2gscmVwbGFjZSxzZWFyY2gsc3BlY2llcyxzcGxpdCx0b1ByaW1pdGl2ZSx0b1N0cmluZ1RhZyx1bnNjb3BhYmxlcydcbikuc3BsaXQoJywnKSwgaiA9IDA7IGVzNlN5bWJvbHMubGVuZ3RoID4gajspd2tzKGVzNlN5bWJvbHNbaisrXSk7XG5cbmZvciAodmFyIHdlbGxLbm93blN5bWJvbHMgPSAka2V5cyh3a3Muc3RvcmUpLCBrID0gMDsgd2VsbEtub3duU3ltYm9scy5sZW5ndGggPiBrOykgd2tzRGVmaW5lKHdlbGxLbm93blN5bWJvbHNbaysrXSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsICdTeW1ib2wnLCB7XG4gIC8vIDE5LjQuMi4xIFN5bWJvbC5mb3Ioa2V5KVxuICAnZm9yJzogZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBoYXMoU3ltYm9sUmVnaXN0cnksIGtleSArPSAnJylcbiAgICAgID8gU3ltYm9sUmVnaXN0cnlba2V5XVxuICAgICAgOiBTeW1ib2xSZWdpc3RyeVtrZXldID0gJFN5bWJvbChrZXkpO1xuICB9LFxuICAvLyAxOS40LjIuNSBTeW1ib2wua2V5Rm9yKHN5bSlcbiAga2V5Rm9yOiBmdW5jdGlvbiBrZXlGb3Ioc3ltKSB7XG4gICAgaWYgKCFpc1N5bWJvbChzeW0pKSB0aHJvdyBUeXBlRXJyb3Ioc3ltICsgJyBpcyBub3QgYSBzeW1ib2whJyk7XG4gICAgZm9yICh2YXIga2V5IGluIFN5bWJvbFJlZ2lzdHJ5KSBpZiAoU3ltYm9sUmVnaXN0cnlba2V5XSA9PT0gc3ltKSByZXR1cm4ga2V5O1xuICB9LFxuICB1c2VTZXR0ZXI6IGZ1bmN0aW9uICgpIHsgc2V0dGVyID0gdHJ1ZTsgfSxcbiAgdXNlU2ltcGxlOiBmdW5jdGlvbiAoKSB7IHNldHRlciA9IGZhbHNlOyB9XG59KTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ09iamVjdCcsIHtcbiAgLy8gMTkuMS4yLjIgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxuICBjcmVhdGU6ICRjcmVhdGUsXG4gIC8vIDE5LjEuMi40IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuICBkZWZpbmVQcm9wZXJ0eTogJGRlZmluZVByb3BlcnR5LFxuICAvLyAxOS4xLjIuMyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKVxuICBkZWZpbmVQcm9wZXJ0aWVzOiAkZGVmaW5lUHJvcGVydGllcyxcbiAgLy8gMTkuMS4yLjYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKVxuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsXG4gIC8vIDE5LjEuMi43IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG4gIGdldE93blByb3BlcnR5TmFtZXM6ICRnZXRPd25Qcm9wZXJ0eU5hbWVzLFxuICAvLyAxOS4xLjIuOCBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKE8pXG4gIGdldE93blByb3BlcnR5U3ltYm9sczogJGdldE93blByb3BlcnR5U3ltYm9sc1xufSk7XG5cbi8vIDI0LjMuMiBKU09OLnN0cmluZ2lmeSh2YWx1ZSBbLCByZXBsYWNlciBbLCBzcGFjZV1dKVxuJEpTT04gJiYgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoIVVTRV9OQVRJVkUgfHwgJGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIFMgPSAkU3ltYm9sKCk7XG4gIC8vIE1TIEVkZ2UgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIHt9XG4gIC8vIFdlYktpdCBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMgbnVsbFxuICAvLyBWOCB0aHJvd3Mgb24gYm94ZWQgc3ltYm9sc1xuICByZXR1cm4gX3N0cmluZ2lmeShbU10pICE9ICdbbnVsbF0nIHx8IF9zdHJpbmdpZnkoeyBhOiBTIH0pICE9ICd7fScgfHwgX3N0cmluZ2lmeShPYmplY3QoUykpICE9ICd7fSc7XG59KSksICdKU09OJywge1xuICBzdHJpbmdpZnk6IGZ1bmN0aW9uIHN0cmluZ2lmeShpdCkge1xuICAgIHZhciBhcmdzID0gW2l0XTtcbiAgICB2YXIgaSA9IDE7XG4gICAgdmFyIHJlcGxhY2VyLCAkcmVwbGFjZXI7XG4gICAgd2hpbGUgKGFyZ3VtZW50cy5sZW5ndGggPiBpKSBhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgICRyZXBsYWNlciA9IHJlcGxhY2VyID0gYXJnc1sxXTtcbiAgICBpZiAoIWlzT2JqZWN0KHJlcGxhY2VyKSAmJiBpdCA9PT0gdW5kZWZpbmVkIHx8IGlzU3ltYm9sKGl0KSkgcmV0dXJuOyAvLyBJRTggcmV0dXJucyBzdHJpbmcgb24gdW5kZWZpbmVkXG4gICAgaWYgKCFpc0FycmF5KHJlcGxhY2VyKSkgcmVwbGFjZXIgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgaWYgKHR5cGVvZiAkcmVwbGFjZXIgPT0gJ2Z1bmN0aW9uJykgdmFsdWUgPSAkcmVwbGFjZXIuY2FsbCh0aGlzLCBrZXksIHZhbHVlKTtcbiAgICAgIGlmICghaXNTeW1ib2wodmFsdWUpKSByZXR1cm4gdmFsdWU7XG4gICAgfTtcbiAgICBhcmdzWzFdID0gcmVwbGFjZXI7XG4gICAgcmV0dXJuIF9zdHJpbmdpZnkuYXBwbHkoJEpTT04sIGFyZ3MpO1xuICB9XG59KTtcblxuLy8gMTkuNC4zLjQgU3ltYm9sLnByb3RvdHlwZVtAQHRvUHJpbWl0aXZlXShoaW50KVxuJFN5bWJvbFtQUk9UT1RZUEVdW1RPX1BSSU1JVElWRV0gfHwgcmVxdWlyZSgnLi9faGlkZScpKCRTeW1ib2xbUFJPVE9UWVBFXSwgVE9fUFJJTUlUSVZFLCAkU3ltYm9sW1BST1RPVFlQRV0udmFsdWVPZik7XG4vLyAxOS40LjMuNSBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZygkU3ltYm9sLCAnU3ltYm9sJyk7XG4vLyAyMC4yLjEuOSBNYXRoW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhNYXRoLCAnTWF0aCcsIHRydWUpO1xuLy8gMjQuMy4zIEpTT05bQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKGdsb2JhbC5KU09OLCAnSlNPTicsIHRydWUpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvQXJyYXkucHJvdG90eXBlLmluY2x1ZGVzXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyICRpbmNsdWRlcyA9IHJlcXVpcmUoJy4vX2FycmF5LWluY2x1ZGVzJykodHJ1ZSk7XG5cbiRleHBvcnQoJGV4cG9ydC5QLCAnQXJyYXknLCB7XG4gIGluY2x1ZGVzOiBmdW5jdGlvbiBpbmNsdWRlcyhlbCAvKiAsIGZyb21JbmRleCA9IDAgKi8pIHtcbiAgICByZXR1cm4gJGluY2x1ZGVzKHRoaXMsIGVsLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuXG5yZXF1aXJlKCcuL19hZGQtdG8tdW5zY29wYWJsZXMnKSgnaW5jbHVkZXMnKTtcbiIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLW9iamVjdC12YWx1ZXMtZW50cmllc1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciAkZW50cmllcyA9IHJlcXVpcmUoJy4vX29iamVjdC10by1hcnJheScpKHRydWUpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHtcbiAgZW50cmllczogZnVuY3Rpb24gZW50cmllcyhpdCkge1xuICAgIHJldHVybiAkZW50cmllcyhpdCk7XG4gIH1cbn0pO1xuIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtb2JqZWN0LXZhbHVlcy1lbnRyaWVzXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyICR2YWx1ZXMgPSByZXF1aXJlKCcuL19vYmplY3QtdG8tYXJyYXknKShmYWxzZSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnT2JqZWN0Jywge1xuICB2YWx1ZXM6IGZ1bmN0aW9uIHZhbHVlcyhpdCkge1xuICAgIHJldHVybiAkdmFsdWVzKGl0KTtcbiAgfVxufSk7XG4iLCJyZXF1aXJlKCcuL193a3MtZGVmaW5lJykoJ2FzeW5jSXRlcmF0b3InKTtcbiIsInZhciAkaXRlcmF0b3JzID0gcmVxdWlyZSgnLi9lczYuYXJyYXkuaXRlcmF0b3InKTtcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciB3a3MgPSByZXF1aXJlKCcuL193a3MnKTtcbnZhciBJVEVSQVRPUiA9IHdrcygnaXRlcmF0b3InKTtcbnZhciBUT19TVFJJTkdfVEFHID0gd2tzKCd0b1N0cmluZ1RhZycpO1xudmFyIEFycmF5VmFsdWVzID0gSXRlcmF0b3JzLkFycmF5O1xuXG52YXIgRE9NSXRlcmFibGVzID0ge1xuICBDU1NSdWxlTGlzdDogdHJ1ZSwgLy8gVE9ETzogTm90IHNwZWMgY29tcGxpYW50LCBzaG91bGQgYmUgZmFsc2UuXG4gIENTU1N0eWxlRGVjbGFyYXRpb246IGZhbHNlLFxuICBDU1NWYWx1ZUxpc3Q6IGZhbHNlLFxuICBDbGllbnRSZWN0TGlzdDogZmFsc2UsXG4gIERPTVJlY3RMaXN0OiBmYWxzZSxcbiAgRE9NU3RyaW5nTGlzdDogZmFsc2UsXG4gIERPTVRva2VuTGlzdDogdHJ1ZSxcbiAgRGF0YVRyYW5zZmVySXRlbUxpc3Q6IGZhbHNlLFxuICBGaWxlTGlzdDogZmFsc2UsXG4gIEhUTUxBbGxDb2xsZWN0aW9uOiBmYWxzZSxcbiAgSFRNTENvbGxlY3Rpb246IGZhbHNlLFxuICBIVE1MRm9ybUVsZW1lbnQ6IGZhbHNlLFxuICBIVE1MU2VsZWN0RWxlbWVudDogZmFsc2UsXG4gIE1lZGlhTGlzdDogdHJ1ZSwgLy8gVE9ETzogTm90IHNwZWMgY29tcGxpYW50LCBzaG91bGQgYmUgZmFsc2UuXG4gIE1pbWVUeXBlQXJyYXk6IGZhbHNlLFxuICBOYW1lZE5vZGVNYXA6IGZhbHNlLFxuICBOb2RlTGlzdDogdHJ1ZSxcbiAgUGFpbnRSZXF1ZXN0TGlzdDogZmFsc2UsXG4gIFBsdWdpbjogZmFsc2UsXG4gIFBsdWdpbkFycmF5OiBmYWxzZSxcbiAgU1ZHTGVuZ3RoTGlzdDogZmFsc2UsXG4gIFNWR051bWJlckxpc3Q6IGZhbHNlLFxuICBTVkdQYXRoU2VnTGlzdDogZmFsc2UsXG4gIFNWR1BvaW50TGlzdDogZmFsc2UsXG4gIFNWR1N0cmluZ0xpc3Q6IGZhbHNlLFxuICBTVkdUcmFuc2Zvcm1MaXN0OiBmYWxzZSxcbiAgU291cmNlQnVmZmVyTGlzdDogZmFsc2UsXG4gIFN0eWxlU2hlZXRMaXN0OiB0cnVlLCAvLyBUT0RPOiBOb3Qgc3BlYyBjb21wbGlhbnQsIHNob3VsZCBiZSBmYWxzZS5cbiAgVGV4dFRyYWNrQ3VlTGlzdDogZmFsc2UsXG4gIFRleHRUcmFja0xpc3Q6IGZhbHNlLFxuICBUb3VjaExpc3Q6IGZhbHNlXG59O1xuXG5mb3IgKHZhciBjb2xsZWN0aW9ucyA9IGdldEtleXMoRE9NSXRlcmFibGVzKSwgaSA9IDA7IGkgPCBjb2xsZWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICB2YXIgTkFNRSA9IGNvbGxlY3Rpb25zW2ldO1xuICB2YXIgZXhwbGljaXQgPSBET01JdGVyYWJsZXNbTkFNRV07XG4gIHZhciBDb2xsZWN0aW9uID0gZ2xvYmFsW05BTUVdO1xuICB2YXIgcHJvdG8gPSBDb2xsZWN0aW9uICYmIENvbGxlY3Rpb24ucHJvdG90eXBlO1xuICB2YXIga2V5O1xuICBpZiAocHJvdG8pIHtcbiAgICBpZiAoIXByb3RvW0lURVJBVE9SXSkgaGlkZShwcm90bywgSVRFUkFUT1IsIEFycmF5VmFsdWVzKTtcbiAgICBpZiAoIXByb3RvW1RPX1NUUklOR19UQUddKSBoaWRlKHByb3RvLCBUT19TVFJJTkdfVEFHLCBOQU1FKTtcbiAgICBJdGVyYXRvcnNbTkFNRV0gPSBBcnJheVZhbHVlcztcbiAgICBpZiAoZXhwbGljaXQpIGZvciAoa2V5IGluICRpdGVyYXRvcnMpIGlmICghcHJvdG9ba2V5XSkgcmVkZWZpbmUocHJvdG8sIGtleSwgJGl0ZXJhdG9yc1trZXldLCB0cnVlKTtcbiAgfVxufVxuIiwiaW1wb3J0IE4xOWJhc2VBcHBsZXQgZnJvbSAnLi9uMTliYXNlQXBwbGV0JztcbmltcG9ydCBOMTlwb3B1cENvbnRyb2xsZXIgZnJvbSAnLi9uMTlwb3B1cENvbnRyb2xsZXInO1xuXG5TaWViZWxBcHBGYWNhZGUuTjE5SGVscGVyID0gY2xhc3MgZXh0ZW5kcyBOMTliYXNlQXBwbGV0IHtcbiAgY29uc3RydWN0b3Ioc2V0dGluZ3MpIHtcbiAgICBjb25zdCB7IGFwcGxldE5hbWUgfSA9IHNldHRpbmdzO1xuICAgIGlmIChhcHBsZXROYW1lKSB7XG4gICAgICBjb25zdCBhcHBsZXQgPSBTaWViZWxBcHAuU19BcHAuR2V0QWN0aXZlVmlldygpLkdldEFwcGxldChhcHBsZXROYW1lKTtcbiAgICAgIGlmICghYXBwbGV0KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGdldCB0aGUgcmVmZXJlbmNlIHRvIHRoZSBhcHBsZXQgYnkgdGhlICR7YXBwbGV0TmFtZX0gbmFtZWApO1xuICAgICAgfVxuICAgICAgc3VwZXIoT2JqZWN0LmFzc2lnbih7fSwgc2V0dGluZ3MsIHsgcG06IGFwcGxldC5HZXRQTW9kZWwoKSB9KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN1cGVyKHNldHRpbmdzKTtcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZygnTmV4dXMgbWFpbiBjbGFzcyBzdGFydGVkLi4uLicsIHRoaXMuYXBwbGV0TmFtZSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgIC8vIGdldCB0aGUgbjE5cG9wdXBDb250cm9sbGVyIHNpbmdsZXRvbiBpbnN0YW5jZVxuICAgIHRoaXMubjE5cG9wdXBDb250cm9sbGVyID0gTjE5cG9wdXBDb250cm9sbGVyLmluc3RhbmNlO1xuICB9XG5cbiAgY2xvc2VQb3B1cEFwcGxldCgpIHtcbiAgICByZXR1cm4gdGhpcy5uMTlwb3B1cENvbnRyb2xsZXIuY2xvc2VQb3B1cEFwcGxldCgpO1xuICB9XG5cbiAgX3Nob3dQb3B1cEFwcGxldChuYW1lLCBoaWRlLCBjYikge1xuICAgIGlmICghdGhpcy5uMTlwb3B1cENvbnRyb2xsZXIpIHtcbiAgICAgIC8vIGl0IGlzIGEgcG9wdXAgLSBwcm9iYWJseSBzaG91bGQgbmV2ZXIgaGFwcGVuP1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdPcGVubmluZyBwb3B1cCBvbiB0aGUgcG9wdXAgaXMgbm90IHN1cHBvcnRlZCBub3cnKTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLm4xOXBvcHVwQ29udHJvbGxlci5jYW5PcGVuUG9wdXAoKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3Qgb3BlbiBwb3B1cCAoY3VycmVudGx5IGV4aXN0cyByZXNvbHZlIGZ1bmN0aW9uKSEnKTtcbiAgICAgIC8vIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy52aWV3LlNldEFjdGl2ZUFwcGxldEludGVybmFsKHRoaXMuYXBwbGV0KTsgLy8gb3IgU2V0QWN0aXZlQXBwbGV0XG4gICAgdGhpcy5fc2V0QWN0aXZlQ29udHJvbChuYW1lKTtcbiAgICByZXR1cm4gdGhpcy5uMTlwb3B1cENvbnRyb2xsZXIuc2hvd1BvcHVwQXBwbGV0KGhpZGUsIGNiLCB0aGlzKTtcbiAgfVxuXG4gIHNob3dNdmdBcHBsZXQobmFtZSwgaGlkZSwgY2IpIHtcbiAgICAvLyBUT0RPOiBjaGVjayBpZiBuYW1lIGlzIGNvcnJlY3Q/XG4gICAgcmV0dXJuIHRoaXMuX3Nob3dQb3B1cEFwcGxldChuYW1lLCBoaWRlLCBjYik7XG4gIH1cblxuICBzaG93UGlja0FwcGxldChuYW1lLCBoaWRlLCBjYikge1xuICAgIC8vIFRPRE86IGNoZWNrIGlmIG5hbWUgaXMgY29ycmVjdD9cbiAgICByZXR1cm4gdGhpcy5fc2hvd1BvcHVwQXBwbGV0KG5hbWUsIGhpZGUsIGNiKTtcbiAgfVxuXG4gIG9wZW5Bc3NvY0FwcGxldChjYikgeyAvLyB0aGlzIG1ldGhvZCBzaG91bGQgYmUgYXZhaWxhYmxlIGZvciBjaGlsZCBidXNpbmVzcyBjb21wb25lbnQgaW4gTTpNIHJlbGF0aW9uc2hpcFxuICAgIC8vIFRPRE86IGNoZWNrIGlmIGFwcGxldCBwcm92aWRlcyBzdWNoIGNhcGFiaWxpdGllcz9cbiAgICBpZiAoIXRoaXMubjE5cG9wdXBDb250cm9sbGVyLmNhbk9wZW5Qb3B1cCgpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBvcGVuIHBvcHVwIChjdXJyZW50bHkgZXhpc3RzIHJlc29sdmUgZnVuY3Rpb24pIScpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5uMTlwb3B1cENvbnRyb2xsZXIuX29wZW5Bc3NvY0FwcGxldCh0aGlzLm5ld1JlY29yZC5iaW5kKHRoaXMpLCBjYik7XG4gIH1cblxuICBkcmlsbGRvd24oY29udHJvbE5hbWUpIHtcbiAgICAvLyBUT0RPOiBjaGVjayBpc0xpbmsgb2YgY29udHJvbD9cbiAgICAvLyBpbmRleCBpcyBub3QgZWZmZWN0aXZlLCBhbmQgZHJpbGxkb3duIGFueXdheSBoYXBwZW5zIG9uIHRoZSBzZWxlY3RlZCByZWNvcmRcbiAgICBpZiAoIXRoaXMuaXNMaXN0QXBwbGV0KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5nZXRTZWxlY3Rpb24oKTtcbiAgICByZXR1cm4gdGhpcy5wbS5FeGVjdXRlTWV0aG9kKCdPbkRyaWxsRG93bicsIGNvbnRyb2xOYW1lLCBpbmRleCk7XG4gIH1cblxuICBnb3RvVmlldyh0YXJnZXRWaWV3TmFtZSwgdGFyZ2V0QXBwbGV0TmFtZSwgaWQpIHtcbiAgICAvLyBUT0RPOiBnZXQgdGhlIGFwcGxldCBuYW1lIGZyb20gdGhlIHZpZXcgZGVmaW5pdGlvbj9cbiAgICBjb25zdCByb3dJZCA9IHR5cGVvZiBpZCA9PT0gJ3VuZGVmaW5lZCcgPyB0aGlzLmdldEN1cnJlbnRSZWNvcmQodHJ1ZSkuSWQgOiBpZDtcbiAgICBsZXQgU1dFQ21kID0gYEdvdG9WaWV3JlNXRVZpZXc9JHt0YXJnZXRWaWV3TmFtZX0mU1dFQXBwbGV0MD0ke3RhcmdldEFwcGxldE5hbWV9YDtcbiAgICBTV0VDbWQgKz0gYCZTV0VCVT0xJlNXRUtlZXBDb250ZXh0PUZBTFNFJlNXRVJvd0lkMD0ke3Jvd0lkfWA7XG4gICAgU1dFQ21kID0gZW5jb2RlVVJJKFNXRUNtZCk7XG4gICAgU2llYmVsQXBwLlNfQXBwLkdvdG9WaWV3KHRhcmdldFZpZXdOYW1lLCAnJywgU1dFQ21kLCAnJyk7XG4gIH1cblxuICByZUluaXRQb3B1cCgpIHsgLy8gZG8gd2UgbmVlZCB0byBrZWVwIGFsc28gc3RhdGljIFJlSW5pdFBvcHVwXG4gICAgdGhpcy5uMTlwb3B1cENvbnRyb2xsZXIuaXNQb3B1cEhpZGRlbiA9IGZhbHNlO1xuXG4gICAgY29uc3QgcG9wdXBQTSA9IFNpZWJlbEFwcC5TX0FwcC5HZXRQb3B1cFBNKCk7XG4gICAgcG9wdXBQTS5Jbml0KCk7XG4gICAgcG9wdXBQTS5TZXR1cCgpO1xuICB9XG5cbiAgc3RhdGljIFJlSW5pdFBvcHVwKCkgeyAvLyBjb3VsZCBiZSByZW1vdmVkIGluIHRoZSBuZXh0IHZlcnNpb25cbiAgICBjb25zdCBwb3B1cFBNID0gU2llYmVsQXBwLlNfQXBwLkdldFBvcHVwUE0oKTtcbiAgICBwb3B1cFBNLkluaXQoKTtcbiAgICBwb3B1cFBNLlNldHVwKCk7XG4gIH1cbn07XG4iLCJpbXBvcnQgTjE5bm90aWZpY2F0aW9ucyBmcm9tICcuL24xOW5vdGlmaWNhdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOMTliYXNlQXBwbGV0IHtcbiAgY29uc3RydWN0b3Ioc2V0dGluZ3MpIHtcbiAgICB0aGlzLmNvbnN0cyA9IFNpZWJlbEpTLkRlcGVuZGVuY3koJ1NpZWJlbEFwcC5Db25zdGFudHMnKTtcbiAgICB0aGlzLnV0aWxzID0gU2llYmVsSlMuRGVwZW5kZW5jeSgnU2llYmVsQXBwLlV0aWxzJyk7XG4gICAgdGhpcy5wbSA9IHNldHRpbmdzLnBtO1xuICAgIHRoaXMuY29udmVydERhdGVzID0gc2V0dGluZ3MuY29udmVydERhdGVzO1xuICAgIHRoaXMudmlldyA9IFNpZWJlbEFwcC5TX0FwcC5HZXRBY3RpdmVWaWV3KCk7XG4gICAgdGhpcy5hcHBsZXROYW1lID0gdGhpcy5wbS5HZXQoJ0dldE5hbWUnKTtcbiAgICB0aGlzLmFwcGxldCA9IHRoaXMudmlldy5HZXRBcHBsZXQodGhpcy5hcHBsZXROYW1lKTtcbiAgICB0aGlzLmlzTGlzdEFwcGxldCA9IHR5cGVvZiB0aGlzLnBtLkdldCgnR2V0TGlzdE9mQ29sdW1ucycpICE9PSAndW5kZWZpbmVkJztcbiAgICB0aGlzLnJlcXVpcmVkID0gW107IC8vIHdpbGwgYmUgZW1wdHkgZm9yIHRoZSBsaXN0IGFwcGxldFxuICAgIHRoaXMubG92ID0ge307XG4gICAgdGhpcy5ib29sT2JqZWN0ID0gbmV3IFNpZWJlbEFwcC5TX0FwcC5EYXR1bUJvb2xPYmplY3QoKTtcblxuICAgIHRoaXMubG9hZExvY2FsZURhdGEoKTtcblxuICAgIHRoaXMuZmllbGRUb0NvbnRyb2xNYXAgPSB0aGlzLl9nZXRGaWVsZFRvQ29udHJvbE1hcCgpO1xuICAgIGNvbnN0IGJjSWQgPSB0aGlzLmFwcGxldC5HZXRCQ0lkKCk7XG4gICAgdGhpcy5ub3RpZmljYXRpb25zID0gbmV3IE4xOW5vdGlmaWNhdGlvbnModGhpcy5wbSwgdGhpcy5jb25zdHMsIGJjSWQsIHRoaXMuZmllbGRUb0NvbnRyb2xNYXApO1xuXG4gICAgLy8gcG9wdWxhdGUgdGhlIHJlcXVpcmVkIGFycmF5IGZvciBmb3JtIGFwcGxldHNcbiAgICBpZiAoIXRoaXMuaXNMaXN0QXBwbGV0KSB7XG4gICAgICBjb25zdCBhcHBsZXRJZCA9IGBzXyR7dGhpcy5wbS5HZXQoJ0dldEZ1bGxJZCcpfV9kaXZgO1xuICAgICAgY29uc3QgYXBwbGV0SW5wdXRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYXBwbGV0SWQpLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0Jyk7XG4gICAgICBhcHBsZXRJbnB1dHMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgaWYgKGVsLmF0dHJpYnV0ZXNbJ2FyaWEtcmVxdWlyZWQnXSkge1xuICAgICAgICAgIHRoaXMucmVxdWlyZWQucHVzaChlbC5hdHRyaWJ1dGVzLm5hbWUubm9kZVZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gbGlzdGVuZXIgdG8gZ2V0IGR5bmFtaWMgTE9Wc1xuICAgIHRoaXMucG0uQXR0YWNoUE1CaW5kaW5nKCdVcGRhdGVRdWlja1BpY2tJbmZvJywgKGlucHV0TmFtZSwgYXJnLCBhcnIpID0+IHtcbiAgICAgIGNvbnN0IHZpZXdOYW1lID0gdGhpcy52aWV3LkdldE5hbWUoKTtcbiAgICAgIGlmICh2aWV3TmFtZSA9PT0gYXJyWzFdICYmIHRoaXMuYXBwbGV0TmFtZSA9PT0gYXJyWzJdKSB7XG4gICAgICAgIGlmICgnZmFsc2UnID09PSBhcnJbNF0pIHtcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICAgIGNvbnNvbGUud2FybihgW04xOV1QaWNrbGlzdCBpcyBub3QgYXNzb2NpYXRlZCB3aXRoIHRoZSBjb250cm9sIC0gJHtKU09OLnN0cmluZ2lmeShhcnIpfWApO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubG92W2FyclszXV0gPSBhcnIuc2xpY2UoKS5zcGxpY2UoNSkuZmlsdGVyKGVsID0+IGVsICE9PSAnJyk7XG4gICAgICAgIC8vIFRPRE86IGRvIHdlIG5lZWQgdG8gaW5kaWNhdGUgd2hlbiBhbiBlbXB0eSB2YWx1ZSBpcyBhbGxvd2VkP1xuICAgICAgfVxuICAgIH0sIHsgc2NvcGU6IHRoaXMgfSk7XG5cbiAgICB0aGlzLmlzVHJlZUFwcGxldCA9IFNpZWJlbEFwcEZhY2FkZS5FeHBsb3JlclByZXNlbnRhdGlvbk1vZGVsID09PSB0aGlzLnBtLmNvbnN0cnVjdG9yO1xuICAgIGlmICh0aGlzLmlzVHJlZUFwcGxldCkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybignVGhpcyBpcyBhIHRyZWUgYXBwbGV0Li4uIGl0IGlzIGVhc2llciBhbmQgc2FmZXIgdG8gdXNlIGxpc3Qgb3IgZm9ybSBhcHBsZXRzJyk7XG4gICAgfVxuICB9XG5cbiAgbG9hZExvY2FsZURhdGEoKSB7XG4gICAgY29uc3QgbG9jYWxlT2JqZWN0ID0gU2llYmVsQXBwLlNfQXBwLkxvY2FsZU9iamVjdDtcbiAgICBjb25zdCBkYXRlVGltZUZvcm1hdCA9IGxvY2FsZU9iamVjdC5HZXRQcm9maWxlKHRoaXMuY29uc3RzLmdldCgnTE9DQUxfREFURVRJTUVfRk9STUFUJykpO1xuICAgIHRoaXMubG9jYWxlRGF0YSA9IHtcbiAgICAgIGZpcnN0RGF5T2ZXZWVrOiBsb2NhbGVPYmplY3QuR2V0V2Vla1N0YXJ0RGF5KCksXG4gICAgICBkYXRlRm9ybWF0OiBsb2NhbGVPYmplY3QuR2V0UHJvZmlsZSh0aGlzLmNvbnN0cy5nZXQoJ0xPQ0FMX0RBVEVfRk9STUFUJykpLFxuICAgICAgZGF0ZVRpbWVGb3JtYXQsXG4gICAgICBpczI0aG91cnNGb3JtYXQ6ICEvcCQvLnRlc3QoZGF0ZVRpbWVGb3JtYXQpLFxuICAgICAgbG9jYWxDb3VudHJ5UGhvbmVDb2RlOiBsb2NhbGVPYmplY3QuR2V0UHJvZmlsZSh0aGlzLmNvbnN0cy5nZXQoJ0xPQ0FMX1BIT05FX0NPVU5UUlknKSksXG4gICAgfTtcbiAgICB0aGlzLmxvY2FsZURhdGEubW9udGhzID0gW107XG4gICAgdGhpcy5sb2NhbGVEYXRhLnNob3J0TW9udGhzID0gW107XG4gICAgY29uc3QgbW9udGhzID0gbG9jYWxlT2JqZWN0LkdldERhdGEoJ01vbnRoJywgbG9jYWxlT2JqZWN0Lm1fc3BNb250aFBTKTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAxMjsgaSArPSAxKSB7XG4gICAgICB0aGlzLmxvY2FsZURhdGEubW9udGhzLnB1c2gobW9udGhzLkdldFByb3BlcnR5KGAke2l9OjBgKSk7XG4gICAgICB0aGlzLmxvY2FsZURhdGEuc2hvcnRNb250aHMucHVzaChtb250aHMuR2V0UHJvcGVydHkoYCR7aX06MWApKTtcbiAgICB9XG5cbiAgICBjb25zdCB3ZWVrRGF5cyA9IGxvY2FsZU9iamVjdC5HZXREYXRhKCdEYXlPZldlZWsnLCBsb2NhbGVPYmplY3QubV9zcERheU9mV2Vla1BTKTtcbiAgICB0aGlzLmxvY2FsZURhdGEud2Vla0RheXMgPSBbXTtcbiAgICB0aGlzLmxvY2FsZURhdGEud2Vla0RheXMzID0gW107XG4gICAgdGhpcy5sb2NhbGVEYXRhLndlZWtEYXlzMSA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNzsgaSArPSAxKSB7XG4gICAgICB0aGlzLmxvY2FsZURhdGEud2Vla0RheXMucHVzaCh3ZWVrRGF5cy5HZXRQcm9wZXJ0eShgJHtpfTowYCkpO1xuICAgICAgdGhpcy5sb2NhbGVEYXRhLndlZWtEYXlzMy5wdXNoKHdlZWtEYXlzLkdldFByb3BlcnR5KGAke2l9OjFgKSk7XG4gICAgICB0aGlzLmxvY2FsZURhdGEud2Vla0RheXMxLnB1c2god2Vla0RheXMuR2V0UHJvcGVydHkoYCR7aX06MmApKTtcbiAgICB9XG4gIH1cblxuICBzdWJzY3JpYmUoZnVuYykgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXNcbiAgICAvLyBUT0RPIDogYWNjZXB0IGFsc28gY29udGV4dCBmb3IgZnVuY3Rpb24sIG9yIHRoZSBjYWxsZXIgYmluZHMgdGhlIGNvbnRleHQgdG8gdGhlIGZ1bmN0aW9uP1xuICAgIHJldHVybiB0aGlzLm5vdGlmaWNhdGlvbnMuc3Vic2NyaWJlKGZ1bmMpO1xuICB9XG5cbiAgdW5zdWJzY3JpYmUodG9rZW4pIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzXG4gICAgcmV0dXJuIHRoaXMubm90aWZpY2F0aW9ucy51bnN1YnNjcmliZSh0b2tlbik7XG4gIH1cblxuICBfZ2V0Q29udHJvbChuYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMucG0uRXhlY3V0ZU1ldGhvZCgnR2V0Q29udHJvbCcsIG5hbWUpO1xuICB9XG5cbiAgX3JldHVybkNvbnRyb2xzKCkge1xuICAgIGlmICh0aGlzLmlzTGlzdEFwcGxldCkge1xuICAgICAgcmV0dXJuIHRoaXMucG0uR2V0KCdHZXRMaXN0T2ZDb2x1bW5zJyk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnBtLkdldCgnR2V0Q29udHJvbHMnKTtcbiAgfVxuXG4gIC8vIGNhbGxlZCBpbnRvIHRoZSBnZXRDb250cm9scyB0byByZWR1Y2UgdGhlIGFtb3VudCBvZiB0aGUgcmV0dXJuZWQgY29udHJvbHNcbiAgX2lzU2tpcENvbnRyb2wodHlwZSkge1xuICAgIC8vIGh0dHBzOi8vZG9jcy5vcmFjbGUuY29tL2NkL0U3NDg5MF8wMS9ib29rcy9Db25maWdPcGVuVUkvYXBwZW5kaXhfYV9hcGkwMDIuaHRtXG4gICAgLy8gbWF5YmUgd2UgbmVlZCB0byBleGNsdWRlIG1vcmUgdHlwZXNcbiAgICByZXR1cm4gKHR5cGUgPT09IHRoaXMuY29uc3RzLmdldCgnU1dFX1BTVF9CVVRUT05fQ1RSTCcpKVxuICAgICAgfHwgKHR5cGUgPT09IHRoaXMuY29uc3RzLmdldCgnU1dFX0NUUkxfTElOSycpKVxuICAgICAgfHwgKHR5cGUgPT09IHRoaXMuY29uc3RzLmdldCgnU1dFX0NUUkxfUExBSU5URVhUJykpXG4gICAgICB8fCAodHlwZSA9PT0gJ251bGwnKTsgLy8gR2V0VWlUeXBlIHJldHVybnMgc3RyaW5nXG4gIH1cblxuICBfaXNSZXF1aXJlZChpbnB1dE5hbWUpIHtcbiAgICAvLyByZXF1aXJlZCBpcyBlbXB0eSBmb3IgbGlzdCBhcHBsZXRzLCBob3BlZnVsbHkgZm9yIG5vd1xuICAgIHJldHVybiB0aGlzLnJlcXVpcmVkLmluZGV4T2YoaW5wdXROYW1lKSA+IC0xO1xuICB9XG5cbiAgc3RhdGljIEdldFN0YXRpY0xPVihhcnIpIHtcbiAgICByZXR1cm4gYXJyLm1hcChlbCA9PiBlbC5wcm9wQXJyYXkpO1xuICB9XG5cbiAgX3NldEFjdGl2ZUNvbnRyb2wobmFtZSkge1xuICAgIGlmIChuYW1lKSB7XG4gICAgICByZXR1cm4gdGhpcy5wbS5FeGVjdXRlTWV0aG9kKCdTZXRBY3RpdmVDb250cm9sJywgdGhpcy5fZ2V0Q29udHJvbChuYW1lKSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnBtLkV4ZWN1dGVNZXRob2QoJ1NldEFjdGl2ZUNvbnRyb2wnLCBudWxsKTtcbiAgfVxuXG4gIF9pc0RhdGVUaW1lQ29udHJvbCh1aVR5cGUpIHtcbiAgICByZXR1cm4gdGhpcy5jb25zdHMuZ2V0KCdTV0VfQ1RSTF9EQVRFX1RaX1BJQ0snKSA9PT0gdWlUeXBlXG4gICAgICB8fCB0aGlzLmNvbnN0cy5nZXQoJ1NXRV9DVFJMX0RBVEVfVElNRV9QSUNLJykgPT09IHVpVHlwZVxuICAgICAgfHwgdGhpcy5jb25zdHMuZ2V0KCdTV0VfQ1RSTF9EQVRFX1BJQ0snKSA9PT0gdWlUeXBlO1xuICB9XG5cbiAgX2dldFNpZWJlbFZhbHVlKHZhbHVlLCB1aVR5cGUsIGRpc3BsYXlGb3JtYXQpIHtcbiAgICAvLyBUT0RPOiBudW1iZXJzLCBjdXJyZW5jaWVzLCBhbmQgcGhvbmVzP1xuICAgIGlmICh0aGlzLmNvbnN0cy5nZXQoJ1NXRV9DVFJMX0NIRUNLQk9YJykgPT09IHVpVHlwZSkge1xuICAgICAgLy8gY29udmVydCB0cnVlL2ZhbHNlID0+IFkvTiAvLyBudWxsIGlzIG5vdCBoYW5kbGVkICh0aGUgc2FtZSBhcyBpbiBzdGFuZGFyZCBPcGVuIFVJKVxuICAgICAgLy8gdmFsdWUgPSB2YWx1ZSA/ICdZJyA6ICdOJztcbiAgICAgIHRoaXMuYm9vbE9iamVjdC5TZXRWYWx1ZSh2YWx1ZSk7XG4gICAgICByZXR1cm4gdGhpcy5ib29sT2JqZWN0LkdldEFzU3RyaW5nKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmNvbnZlcnREYXRlcyAmJiBkaXNwbGF5Rm9ybWF0ICYmIHRoaXMuX2lzRGF0ZVRpbWVDb250cm9sKHVpVHlwZSkpIHtcbiAgICAgIC8vIFRPRE86IGNoZWNrIGlmIGEgdmFsaWQgZGF0ZSBpcyBpbnB1dHRlZFxuICAgICAgY29uc3QgZGF0ZSA9IHZhbHVlLnRvTG9jYWxlU3RyaW5nKCdlbi1VUycsIHsgaG91cjEyOiBmYWxzZSB9KS5zcGxpdCgnLCcpLmpvaW4oJycpO1xuICAgICAgcmV0dXJuIFNpZWJlbEFwcC5TX0FwcC5Mb2NhbGVPYmplY3QuR2V0U3RyaW5nRnJvbURhdGVUaW1lKGRhdGUsICdNL0QvWVlZWSBISDptbTpzcycsIGRpc3BsYXlGb3JtYXQsIGZhbHNlKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgY2FuSW52b2tlTWV0aG9kKG1ldGhvZCkge1xuICAgIHJldHVybiB0aGlzLnBtLkV4ZWN1dGVNZXRob2QoJ0Nhbkludm9rZU1ldGhvZCcsIG1ldGhvZCk7XG4gIH1cblxuICBpbnZva2VNZXRob2QobWV0aG9kKSB7XG4gICAgaWYgKCF0aGlzLmNhbkludm9rZU1ldGhvZChtZXRob2QpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnBtLkV4ZWN1dGVNZXRob2QoJ0ludm9rZU1ldGhvZCcsIG1ldGhvZCk7XG4gIH1cblxuICBnZXRDb250cm9scygpIHtcbiAgICBjb25zdCBjb250cm9scyA9IHt9O1xuICAgIGNvbnN0IGFwcGxldENvbnRyb2xzID0gdGhpcy5fcmV0dXJuQ29udHJvbHMoKTtcbiAgICBjb25zdCBhcnIgPSBPYmplY3QuZW50cmllcyhhcHBsZXRDb250cm9scyk7XG4gICAgYXJyLmZvckVhY2goKGNvbnRyb2xFbnRyeSkgPT4ge1xuICAgICAgY29uc3QgY29udHJvbCA9IGNvbnRyb2xFbnRyeVsxXTtcbiAgICAgIGNvbnN0IHVpVHlwZSA9IGNvbnRyb2wuR2V0VUlUeXBlKCk7XG4gICAgICBjb25zdCBkaXNwbGF5Rm9ybWF0ID0gY29udHJvbC5HZXREaXNwbGF5Rm9ybWF0KCkgfHwgdGhpcy5nZXRDb250cm9sRGlzcGxheUZvcm1hdCh1aVR5cGUpO1xuICAgICAgaWYgKCF0aGlzLl9pc1NraXBDb250cm9sKHVpVHlwZSkpIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IGNvbnRyb2xFbnRyeVswXTtcbiAgICAgICAgY29uc3QgaW5wdXROYW1lID0gY29udHJvbC5HZXRJbnB1dE5hbWUoKTtcbiAgICAgICAgY29uc3QgZmllbGROYW1lID0gY29udHJvbC5HZXRGaWVsZE5hbWUoKTtcbiAgICAgICAgY29uc3Qgb2JqID0ge1xuICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgbGFiZWw6IGNvbnRyb2wuR2V0RGlzcGxheU5hbWUoKSxcbiAgICAgICAgICB1aVR5cGUsXG4gICAgICAgICAgcmVxdWlyZWQ6IHRoaXMuX2lzUmVxdWlyZWQoaW5wdXROYW1lKSxcbiAgICAgICAgICBib3VuZGVkUGljazogY29udHJvbC5Jc0JvdW5kZWRQaWNrKCkgPT09ICcxJyxcbiAgICAgICAgICBzdGF0aWNQaWNrOiBjb250cm9sLklzU3RhdGljQm91bmRlZCgpID09PSAnMScsXG4gICAgICAgICAgaW5wdXROYW1lLFxuICAgICAgICAgIGlzUG9zdENoYW5nZXM6IGNvbnRyb2wuSXNQb3N0Q2hhbmdlcygpLFxuICAgICAgICAgIG1heFNpemU6IGNvbnRyb2wuR2V0TWF4U2l6ZSgpLFxuICAgICAgICAgIGZpZWxkTmFtZSxcbiAgICAgICAgICBpc0xpbms6IHRoaXMucG0uRXhlY3V0ZU1ldGhvZCgnQ2FuTmF2aWdhdGUnLCBuYW1lKSxcbiAgICAgICAgICByZWFkb25seTogIXRoaXMucG0uRXhlY3V0ZU1ldGhvZCgnQ2FuVXBkYXRlJywgbmFtZSksXG4gICAgICAgICAgZGlzcGxheUZvcm1hdCxcbiAgICAgICAgICBkYXRhVHlwZTogdGhpcy5wbS5FeGVjdXRlTWV0aG9kKCdHZXRGaWVsZERhdGFUeXBlJywgZmllbGROYW1lKSxcbiAgICAgICAgfTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwgJ3JlYWRPbmx5Jywge1xuICAgICAgICAgIGdldDogKCkgPT4ge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignW04xOV1UaGUgcmVhZE9ubHkgcHJvcGVydHkgd2lsbCBiZSByZW1vdmVkIHNvb247IHVzZSByZWFkb25seSBpbnN0ZWFkIG9mIGl0LicpO1xuICAgICAgICAgICAgcmV0dXJuIG9iai5yZWFkb25seTtcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgLy8gYWRkIHZhbHVlcyB0byBiZSBkaXNwbGF5ZWQgaW4gdGhlIHN0YXRpYyBwaWNrIGxpc3QgLSAyIGRpZmZlcmVudCBmb3JtYXRzIGZvciBub3dcbiAgICAgICAgaWYgKG9iai5zdGF0aWNQaWNrKSB7XG4gICAgICAgICAgb2JqLnN0YXRpY0xPViA9IE4xOWJhc2VBcHBsZXQuR2V0U3RhdGljTE9WKGNvbnRyb2wuR2V0UmFkaW9Hcm91cFByb3BTZXQoKS5jaGlsZEFycmF5KTtcbiAgICAgICAgICBvYmoubG92cyA9IG9iai5zdGF0aWNMT1YucmVkdWNlKChhY2MsIGVsKSA9PiB7IC8vIG5vcm1hbGl6ZWRcbiAgICAgICAgICAgIGFjYy5wdXNoKHsgbGljOiBlbC5GaWVsZFZhbHVlLCB2YWw6IGVsLkRpc3BsYXlOYW1lIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgICB9LCBbXSk7XG4gICAgICAgIH1cbiAgICAgICAgY29udHJvbHNbbmFtZV0gPSBvYmo7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGNvbnRyb2xzO1xuICB9XG5cbiAgZ2V0UmVjb3JkU2V0KGFkZFJlY29yZEluZGV4KSB7XG4gICAgLy8gVE9ETzogY29udmVydCB0aGUgdmFsdWVzP1xuICAgIGlmIChhZGRSZWNvcmRJbmRleCkge1xuICAgICAgcmV0dXJuIHRoaXMucG0uR2V0KCdHZXRSZWNvcmRTZXQnKS5tYXAoKGVsLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCByZXQgPSBPYmplY3QuYXNzaWduKHt9LCBlbCk7XG4gICAgICAgIHJldC5faW5keCA9IGluZGV4O1xuICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnBtLkdldCgnR2V0UmVjb3JkU2V0Jyk7XG4gIH1cblxuICBnZXRSYXdSZWNvcmRTZXQoYWRkUmVjb3JkSW5kZXgpIHtcbiAgICAvLyBUT0RPOiBjb252ZXJ0IHRoZSB2YWx1ZXM/XG4gICAgaWYgKGFkZFJlY29yZEluZGV4KSB7XG4gICAgICByZXR1cm4gdGhpcy5wbS5HZXQoJ0dldFJhd1JlY29yZFNldCcpLm1hcCgoZWwsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHJldCA9IE9iamVjdC5hc3NpZ24oe30sIGVsKTtcbiAgICAgICAgcmV0Ll9pbmR4ID0gaW5kZXg7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucG0uR2V0KCdHZXRSYXdSZWNvcmRTZXQnKTtcbiAgfVxuXG4gIGdldFJvd0xpc3RSb3dDb3VudCgpIHtcbiAgICAvLyBob3cgbXVjaCBhcHBsZXQgY2FuIGRpc3BsYXkgKHNwZWNpZmllZCBpbiBTaWViZWwgVG9vbHMpIC0gMTAvMjBcbiAgICByZXR1cm4gdGhpcy5wbS5HZXQoJ0dldFJvd0xpc3RSb3dDb3VudCcpO1xuICB9XG5cbiAgZ2V0TnVtUm93cygpIHtcbiAgICAvLyBjdXJyZW50bHkgZmV0Y2hlZCBmcm9tIHNlcnZlcj9cbiAgICByZXR1cm4gdGhpcy5wbS5HZXQoJ0dldE51bVJvd3MnKTtcbiAgfVxuXG4gIGdldFNlbGVjdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5wbS5HZXQoJ0dldFNlbGVjdGlvbicpO1xuICB9XG5cbiAgX25hdmlnYXRlKG1ldGhvZCkge1xuICAgIGlmICghdGhpcy5jYW5JbnZva2VNZXRob2QobWV0aG9kKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCByZXQgPSB0aGlzLnBtLkV4ZWN1dGVNZXRob2QoJ0ludm9rZU1ldGhvZCcsIG1ldGhvZCk7XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIG5leHRSZWNvcmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hdmlnYXRlKHRoaXMuaXNMaXN0QXBwbGV0ID8gJ0dvdG9OZXh0JyA6ICdHb3RvTmV4dFNldCcpO1xuICB9XG5cbiAgbmV4dFJlY29yZFNldCgpIHtcbiAgICBpZiAoIXRoaXMuaXNMaXN0QXBwbGV0KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9uYXZpZ2F0ZSgnR290b05leHRTZXQnKTtcbiAgfVxuXG4gIHBvc2l0aW9uT25Sb3coaW5kZXgpIHtcbiAgICBpZiAodGhpcy5pc0xpc3RBcHBsZXQpIHtcbiAgICAgIGlmICghdGhpcy5wbS5FeGVjdXRlTWV0aG9kKCdDYW5JbnZva2VNZXRob2QnLCAnUG9zaXRpb25PblJvdycpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChpbmRleCA8IDApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgLy8gc2VlbXMgdGhpcyBjaGVjayBpcyByZWR1bmRhbnRcbiAgICAgIC8vIGlmICh0aGlzLmdldE51bVJvd3MoKSA8IGluZGV4ICsgMSkge1xuICAgICAgLy8gICByZXR1cm4gZmFsc2U7XG4gICAgICAvLyB9XG4gICAgICBpZiAodGhpcy5nZXRSb3dMaXN0Um93Q291bnQoKSA8IGluZGV4ICsgMSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7aW5kZXh9IGlzIGVxdWFsL2hpZ2hlciB0aGFuIGFtb3VudCBvZiByZWNvcmRzIGluIHRoZSBhcHBsZXQgJHt0aGlzLmdldFJvd0xpc3RSb3dDb3VudCgpfWApO1xuICAgICAgfVxuICAgICAgLy8gVE9ETzogaWYgd2UgZ290IHRvIHRoaXMgcG9pbnRcbiAgICAgIC8vICBzaG91bGQgd2UgY2hlY2sgR2V0QWN0aXZlQ29udHJvbCAoYXBwbGV0LnByb3RvdHlwZS5JbnZva2VNZXRob2QpXG4gICAgICAvLyAgYW5kIG51bGxpZnkgaXQgaWYgYWN0aXZlP1xuICAgICAgcmV0dXJuIHRoaXMucG0uRXhlY3V0ZU1ldGhvZCgnSGFuZGxlUm93U2VsZWN0JywgaW5kZXgpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwcmV2UmVjb3JkKCkge1xuICAgIGlmICh0aGlzLmlzTGlzdEFwcGxldCkge1xuICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb25PblJvdyh0aGlzLnBtLkdldCgnR2V0U2VsZWN0aW9uJykgLSAxKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX25hdmlnYXRlKCdHb3RvUHJldmlvdXNTZXQnKTtcbiAgfVxuXG4gIHByZXZSZWNvcmRTZXQoKSB7XG4gICAgaWYgKCF0aGlzLmlzTGlzdEFwcGxldCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fbmF2aWdhdGUoJ0dvdG9QcmV2aW91c1NldCcpO1xuICB9XG5cbiAgbmV3UmVjb3JkKGNiKSB7XG4gICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gdGhpcy5fbmV3UmVjb3JkKHJlc29sdmUpKTtcbiAgICByZXR1cm4gdHlwZW9mIGNiID09PSAnZnVuY3Rpb24nID8gcHJvbWlzZS50aGVuKGNiKSA6IHByb21pc2U7XG4gIH1cblxuICBfbmV3UmVjb3JkKGNiKSB7XG4gICAgLy8gMjAxOTAzMTIgLSBjaGFuZ2VkIGZyb20gTmV3UmVjb3JkIHRvIENyZWF0ZVJlY29yZCwgIzMxXG4gICAgcmV0dXJuIHRoaXMucG0uRXhlY3V0ZU1ldGhvZCgnSW52b2tlTWV0aG9kJywgJ0NyZWF0ZVJlY29yZCcsIG51bGwsIHtcbiAgICAgIGFzeW5jOiB0cnVlLFxuICAgICAgY2IsXG4gICAgfSk7XG4gIH1cblxuICBuZXdSZWNvcmRTeW5jKCkge1xuICAgIC8vIDIwMTkwMzEyIC0gY2hhbmdlZCBmcm9tIE5ld1JlY29yZCB0byBDcmVhdGVSZWNvcmQsICMzMVxuICAgIHJldHVybiB0aGlzLnBtLkV4ZWN1dGVNZXRob2QoJ0ludm9rZU1ldGhvZCcsICdDcmVhdGVSZWNvcmQnKTtcbiAgfVxuXG4gIHdyaXRlUmVjb3JkKGNiLCBjYmVycikge1xuICAgIGxldCBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4gdGhpcy5fd3JpdGVSZWNvcmQoKC4uLmFyZ3MpID0+IHtcbiAgICAgIGlmIChhcmdzWzJdLkdldFByb3BlcnR5KCdTdGF0dXMnKSA9PT0gJ0NvbXBsZXRlZCcpIHtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVqZWN0KCk7XG4gICAgICB9XG4gICAgfSkpO1xuICAgIHByb21pc2UgPSB0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicgPyBwcm9taXNlLnRoZW4oY2IpIDogcHJvbWlzZTtcbiAgICBwcm9taXNlID0gdHlwZW9mIGNiZXJyID09PSAnZnVuY3Rpb24nID8gcHJvbWlzZS5jYXRjaChjYmVycikgOiBwcm9taXNlO1xuICAgIHJldHVybiBwcm9taXNlO1xuICB9XG5cbiAgX3dyaXRlUmVjb3JkKGNiKSB7XG4gICAgcmV0dXJuIHRoaXMucG0uRXhlY3V0ZU1ldGhvZCgnSW52b2tlTWV0aG9kJywgJ1dyaXRlUmVjb3JkJywgbnVsbCwge1xuICAgICAgYXN5bmM6IHRydWUsXG4gICAgICAvLyBUT0RPOiBzZWxmYnVzeTogdHJ1ZSxcbiAgICAgIGNiLFxuICAgIH0pO1xuICB9XG5cbiAgd3JpdGVSZWNvcmRTeW5jKCkge1xuICAgIHJldHVybiB0aGlzLnBtLkV4ZWN1dGVNZXRob2QoJ0ludm9rZU1ldGhvZCcsICdXcml0ZVJlY29yZCcpO1xuICB9XG5cbiAgZGVsZXRlUmVjb3JkU3luYygpIHtcbiAgICByZXR1cm4gdGhpcy5wbS5FeGVjdXRlTWV0aG9kKCdJbnZva2VNZXRob2QnLCAnRGVsZXRlUmVjb3JkJyk7XG4gIH1cblxuICB1bmRvUmVjb3JkU3luYygpIHtcbiAgICByZXR1cm4gdGhpcy5wbS5FeGVjdXRlTWV0aG9kKCdJbnZva2VNZXRob2QnLCAnVW5kb1JlY29yZCcpO1xuICB9XG5cbiAgc2V0Q29udHJvbFZhbHVlKG5hbWUsIHZhbHVlKSB7XG4gICAgLy8gVE9ETzogSWYgdmFsdWUgaXMgbnVsbCwgbm90aGluZyBoYXBwZW5zLCBzaG91bGQgd2UgY29udmVydCBudWxsIHRvICcnP1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLl9nZXRDb250cm9sKG5hbWUpO1xuICAgIGlmICghY29udHJvbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgZmluZCBhIGNvbnRyb2wgYnkgbmFtZSAke25hbWV9IHRvIHNldCAke3ZhbHVlfS5gKTtcbiAgICB9XG4gICAgY29uc3QgdWlUeXBlID0gY29udHJvbC5HZXRVSVR5cGUoKTtcbiAgICBjb25zdCBkaXNwbGF5Rm9ybWF0ID0gY29udHJvbC5HZXREaXNwbGF5Rm9ybWF0KCkgfHwgdGhpcy5nZXRDb250cm9sRGlzcGxheUZvcm1hdCh1aVR5cGUpO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHZhbHVlID0gdGhpcy5fZ2V0U2llYmVsVmFsdWUodmFsdWUsIHVpVHlwZSwgZGlzcGxheUZvcm1hdCk7XG4gICAgLy8gVE9ETzogc2hvdWxkIHdlIHVzZSBTZXRDZWxsVmFsdWUgZm9yIGxpc3QgYXBwbGV0cz9cbiAgICBjb25zdCByZXQgPSB0aGlzLl9zZXRDb250cm9sVmFsdWVJbnRlcm5hbChjb250cm9sLCB2YWx1ZSk7XG4gICAgaWYgKCFyZXQpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBWYWx1ZSAke3ZhbHVlfSB3YXMgbm90IHNldCBmb3IgJHtjb250cm9sLkdldE5hbWUoKX1gKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICBfc2V0Q29udHJvbFZhbHVlSW50ZXJuYWwoY29udHJvbCwgdmFsdWUpIHtcbiAgICB0aGlzLnBtLk9uQ29udHJvbEV2ZW50KHRoaXMuY29uc3RzLmdldCgnUEhZRVZFTlRfQ09OVFJPTF9GT0NVUycpLCBjb250cm9sKTtcbiAgICByZXR1cm4gdGhpcy5wbS5PbkNvbnRyb2xFdmVudCh0aGlzLmNvbnN0cy5nZXQoJ1BIWUVWRU5UX0NPTlRST0xfQkxVUicpLCBjb250cm9sLCB2YWx1ZSk7XG4gIH1cblxuICBfdmFsaWRhdGVQaWNrQ29udHJvbChjb250cm9sLCBpc1N0YXRpYykge1xuICAgIC8vIFBvc3NpYmxlIHJlc3VsdHM6XG4gICAgLy8gbm8gcGlja1xuICAgIC8vIHN0YXRpYyBwaWNrXG4gICAgLy8gZHluYW1pYyBwaWNrXG4gICAgLy8gcGlja1xuICAgIC8vIG12Z1xuICAgIC8vID9cblxuICAgIGNvbnN0IGlzU3RhdGljUGljayA9IHRoaXMuaXNTdGF0aWMoY29udHJvbCk7XG4gICAgY29uc3QgdWlUeXBlID0gY29udHJvbC5HZXRVSVR5cGUoKTtcblxuICAgIGlmIChpc1N0YXRpYykgeyAvLyBjYWxsZWQgZ2V0U3RhdGljTE9WXG4gICAgICBpZiAoIWlzU3RhdGljUGljaykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICBjb25zb2xlLndhcm4oYFtOMTldVGhlIGdldFN0YXRpY0xPViBjYWxsZWQgZm9yIG5vdCBzdGF0aWMgY29udHJvbCAtICR7dWlUeXBlfS4gVXNlIGdldER5bmFtaWNMT1Ygb3IgcGljay9tdmdgKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgeyAvLyBjYWxsZWQgZ2V0RHluYW1pY0xPVlxuICAgICAgaWYgKGlzU3RhdGljUGljaykge1xuICAgICAgICBjb25zb2xlLndhcm4oJ1tOMTldVGhlIGdldER5bmFtaWNMT1YgY2FsbGVkIGZvciBzdGF0aWMgY29udHJvbC4nKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgICB9XG4gICAgICBpZiAodGhpcy5jb25zdHMuZ2V0KCdTV0VfQ1RSTF9DT01CT0JPWCcpICE9PSB1aVR5cGUpIHsgLy8gdGhlIGNvbnRyb2wgaXMgbm90IFwiSkNvbWJvQm94XCJcbiAgICAgICAgc3dpdGNoICh1aVR5cGUpIHtcbiAgICAgICAgICBjYXNlIHRoaXMuY29uc3RzLmdldCgnU1dFX0NUUkxfUElDSycpOiAvLyBQaWNrXG4gICAgICAgICAgY2FzZSB0aGlzLmNvbnN0cy5nZXQoJ1NXRV9DVFJMX01WRycpOiAvLyBNVkdcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYFtOMTldWW91IG5lZWQgdG8gdXNlIHRoZSBwb3B1cHMgaW5zdGVhZCBvZiBnZXREeW5hbWljTE9WIC0gJHt1aVR5cGV9LmApO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYFtOMTldUHJvYmFibHkgZ2V0RHluYW1pY0xPViBpcyBub3QgZ29pbmcgdG8gd29yayBmb3IgdGhpcyBjb250cm9sIC0gJHt1aVR5cGV9LmApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaXNTdGF0aWMoY29udHJvbCkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXNcbiAgICByZXR1cm4gJzEnID09PSBjb250cm9sLklzU3RhdGljQm91bmRlZCgpO1xuICB9XG5cbiAgaXNEeW5hbWljKGNvbnRyb2wpIHtcbiAgICByZXR1cm4gIXRoaXMuaXNTdGF0aWMoY29udHJvbClcbiAgICAgICYmIHRoaXMuY29uc3RzLmdldCgnU1dFX0NUUkxfQ09NQk9CT1gnKSA9PT0gY29udHJvbC5HZXRVSVR5cGUoKTtcbiAgfVxuXG4gIF9nZXRDb250cm9sRHluYW1pY0xPVihjb250cm9sKSB7XG4gICAgdGhpcy5fdmFsaWRhdGVQaWNrQ29udHJvbChjb250cm9sLCBmYWxzZSk7XG4gICAgY29uc3QgY29udHJvbElucHV0TmFtZSA9IGNvbnRyb2wuR2V0SW5wdXROYW1lKCk7XG4gICAgdGhpcy5sb3ZbY29udHJvbElucHV0TmFtZV0gPSB7fTtcbiAgICBjb25zdCBwcyA9IFNpZWJlbEFwcC5TX0FwcC5OZXdQcm9wZXJ0eVNldCgpO1xuICAgIHBzLlNldFByb3BlcnR5KCdTV0VGaWVsZCcsIGNvbnRyb2xJbnB1dE5hbWUpO1xuICAgIHBzLlNldFByb3BlcnR5KCdTV0VKSScsIGZhbHNlKTtcbiAgICB0aGlzLl9zZXRBY3RpdmVDb250cm9sKG51bGwpOyAvLyB0byBwcmV2ZW50IFVwZGF0ZVBpY2tcbiAgICB0aGlzLnBtLkV4ZWN1dGVNZXRob2QoJ0ludm9rZU1ldGhvZCcsICdHZXRRdWlja1BpY2tJbmZvJywgcHMpO1xuICAgIHJldHVybiB0aGlzLmxvdltjb250cm9sSW5wdXROYW1lXTtcbiAgfVxuXG4gIF9nZXRDb250cm9sU3RhdGljTE9WKGNvbnRyb2wpIHtcbiAgICB0aGlzLl92YWxpZGF0ZVBpY2tDb250cm9sKGNvbnRyb2wsIHRydWUpO1xuICAgIGNvbnN0IGFyciA9IE4xOWJhc2VBcHBsZXQuR2V0U3RhdGljTE9WKGNvbnRyb2wuR2V0UmFkaW9Hcm91cFByb3BTZXQoKS5jaGlsZEFycmF5KTtcbiAgICBjb25zdCByZXQgPSBhcnIubWFwKGVsID0+IGVsLkRpc3BsYXlOYW1lKTtcbiAgICByZXR1cm4gcmV0LnNvcnQoKTtcbiAgfVxuXG4gIGdldExPVihjb250cm9sTmFtZSkge1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLl9nZXRDb250cm9sKGNvbnRyb2xOYW1lKTtcbiAgICBpZiAodGhpcy5pc1N0YXRpYyhjb250cm9sKSkge1xuICAgICAgcmV0dXJuIHRoaXMuX2dldENvbnRyb2xTdGF0aWNMT1YoY29udHJvbCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmlzRHluYW1pYyhjb250cm9sKSkge1xuICAgICAgcmV0dXJuIHRoaXMuX2dldENvbnRyb2xEeW5hbWljTE9WKGNvbnRyb2wpO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoYCR7Y29udHJvbE5hbWV9IGlzIG5vdCBhIHN0YXRpYyBvciBhIGR5bmFtaWNgKTtcbiAgfVxuXG4gIGdldER5bmFtaWNMT1YoY29udHJvbE5hbWUpIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5fZ2V0Q29udHJvbChjb250cm9sTmFtZSk7XG4gICAgcmV0dXJuIHRoaXMuX2dldENvbnRyb2xEeW5hbWljTE9WKGNvbnRyb2wpO1xuICB9XG5cbiAgZ2V0U3RhdGljTE9WKGNvbnRyb2xOYW1lKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuX2dldENvbnRyb2woY29udHJvbE5hbWUpO1xuICAgIHJldHVybiB0aGlzLl9nZXRDb250cm9sU3RhdGljTE9WKGNvbnRyb2wpO1xuICB9XG5cbiAgX2dldEpTVmFsdWUodmFsdWUsIHVpVHlwZSwgZGlzcGxheUZvcm1hdCkge1xuICAgIGlmICh0aGlzLmNvbnN0cy5nZXQoJ1NXRV9DVFJMX0NIRUNLQk9YJykgPT09IHVpVHlwZSkge1xuICAgICAgLy8gY29udmVydCBZL04vbnVsbCAtPiB0cnVlL2ZhbHNlIC8vIG51bGwgY29tZXMgYXMgZmFsc2U/XG4gICAgICB0aGlzLmJvb2xPYmplY3QuU2V0QXNTdHJpbmcodmFsdWUpO1xuICAgICAgcmV0dXJuIHRoaXMuYm9vbE9iamVjdC5HZXRWYWx1ZSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5jb252ZXJ0RGF0ZXMgJiYgZGlzcGxheUZvcm1hdCAmJiB0aGlzLl9pc0RhdGVUaW1lQ29udHJvbCh1aVR5cGUpKSB7XG4gICAgICBpZiAodmFsdWUgPT09ICcnKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgbGV0IElTTyA9ICcnO1xuICAgICAgaWYgKHRoaXMuaXNMaXN0QXBwbGV0KSB7XG4gICAgICAgIElTTyA9IHRoaXMudXRpbHMuVG9JU09Gb3JtYXQodmFsdWUsIHRoaXMuY29uc3RzLmdldCgnU1dFX0NUUkxfREFURV9QSUNLJykgIT09IHVpVHlwZSwgZGlzcGxheUZvcm1hdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBJU08gPSB0aGlzLnV0aWxzLkdldElTT0RhdGVUaW1lKHZhbHVlLCB0cnVlKTtcbiAgICAgIH1cbiAgICAgIGlmIChJU08gPT09ICcnKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgSVNPIHZhbHVlIGlzIGVtcHR5IGFmdGVyIGNvbnZlcnRpbmcgJHt2YWx1ZX1gKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXcgRGF0ZShJU08pO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBnZXRDdXJyZW50UmVjb3JkKHJhdykge1xuICAgIC8vIFRPRE86IG5lZWQgY29udmVyc2lvblxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5nZXRTZWxlY3Rpb24oKTtcbiAgICAvLyBUT0RPOiBjaGVjayBpZiB0aGVyZSBpcyBhIHJlY29yZFxuICAgIC8vIFRPRE86IG1ha2UgYSBjb3B5IG9mIHJldHVybmVkIG9iamVjdCAodG8gYXZvaWQgdGhlIGFjY2lkZW50YWwgbW9kaWZpY2F0aW9uIG9mIHRoZSByZWNvcmRzZXQpP1xuICAgIGlmIChyYXcpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldFJhd1JlY29yZFNldCgpW2luZGV4XTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZ2V0UmVjb3JkU2V0KClbaW5kZXhdO1xuICB9XG5cbiAgY2FsY3VsYXRlQ3VycmVudFJlY29yZFN0YXRlKCkge1xuICAgIC8vIFRPRE86IGRvIHdlIG5lZWQgdG8gZGVsZXRlIHBlbmRpbmdcbiAgICAvLyAwIC0gTm8gcmVjb3JkcyBkaXNwbGF5ZWRcbiAgICAvLyAxIC0gUmVjb3JkIGlzIGJlaW5nIGNyZWF0ZWRcbiAgICAvLyAyIC0gUmVjb3JkIGlzIGJlaW5nIGVkaXRlZFxuICAgIC8vIDMgLSBJcyBpbiBxdWVyeSBtb2RlXG4gICAgLy8gNCAtIFJlY29yZCBpcyBkaXNwbGF5ZWQsXG4gICAgLy8gNSAtIFJlY29yZCBpcyByZWFkLW9ubHlcblxuICAgIGNvbnN0IGJjID0gdGhpcy5wbS5HZXQoJ0dldEJ1c0NvbXAnKTtcblxuICAgIGlmICh0aGlzLnBtLkdldCgnSXNJblF1ZXJ5TW9kZScpKSB7XG4gICAgICAvLyBpZiBubyByZWNvcmRzIGFuZCB0aGUgZW50ZXJlZCB0aGUgcXVlcnkgbW9kZSxcbiAgICAgIC8vIHNlbGVjdGlvbiBpcyAtMSwgdGhlcmVmb3JlIHdlIG5lZWQgdG8gY2hlY2sgcXVlcnkgbW9kZSBmaXJzdFxuICAgICAgcmV0dXJuIDM7XG4gICAgfVxuICAgIGlmICh0aGlzLmdldFNlbGVjdGlvbigpIDwgMCkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIGlmIChiYy5Jc0luc2VydFBlbmRpbmcoKSkgeyAvLyBzZWVtcyB0aGUgaW5zZXJ0UGVuZGluZyBwcm9wZXJ0eSBnaXZlcyBtb3JlIGFjY3VyYXRlIHZhbHVlXG4gICAgICByZXR1cm4gMTtcbiAgICB9XG4gICAgaWYgKGJjLklzQ29tbWl0UGVuZGluZygpKSB7IC8vIGJjLmNvbW1pdFBlbmRpbmcgb3IgdGhpcy5wbS5HZXRTdGF0ZVVJTWFwKCkuQ29tbWl0UGVuZGluZ1xuICAgICAgcmV0dXJuIDI7XG4gICAgfVxuICAgIGlmICghdGhpcy5jYW5JbnZva2VNZXRob2QoJ1dyaXRlUmVjb3JkJykpIHtcbiAgICAgIC8vIG9yIHVzZSB0aGUgY2FuVXBkYXRlIHByb3BlcnR5IG9mIHRoZSBCQz9cbiAgICAgIHJldHVybiA1O1xuICAgIH1cblxuICAgIHJldHVybiA0OyAvLyB0aGlzIGlzIGEgZGVmYXVsdCBmYWxsYmFjaztcbiAgfVxuXG4gIF9nZXRNZXRob2RzKCkge1xuICAgIGNvbnN0IG1ldGhvZHMgPSB7fTtcbiAgICBjb25zdCBhcHBsZXRDb250cm9scyA9IHRoaXMucG0uR2V0KCdHZXRDb250cm9scycpOyAvLyBldmVuIGZvciBsaXN0IGFwcGxldFxuICAgIGNvbnN0IGFyciA9IE9iamVjdC5lbnRyaWVzKGFwcGxldENvbnRyb2xzKTtcbiAgICBhcnIuZm9yRWFjaCgoY29udHJvbEVudHJ5KSA9PiB7XG4gICAgICBjb25zdCBjb250cm9sTWV0aG9kID0gY29udHJvbEVudHJ5WzFdLkdldE1ldGhvZE5hbWUoKTtcbiAgICAgIGlmICh0eXBlb2YgY29udHJvbE1ldGhvZCAhPT0gJ3VuZGVmaW5lZCcgJiYgY29udHJvbE1ldGhvZCAhPT0gJycpIHtcbiAgICAgICAgbWV0aG9kc1tjb250cm9sTWV0aG9kXSA9IHt9O1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBtZXRob2RzO1xuICB9XG5cbiAgZ2V0Q29udHJvbERpc3BsYXlGb3JtYXQodWlUeXBlKSB7XG4gICAgc3dpdGNoICh1aVR5cGUpIHtcbiAgICAgIGNhc2UgdGhpcy5jb25zdHMuZ2V0KCdTV0VfQ1RSTF9EQVRFX1RaX1BJQ0snKTpcbiAgICAgIGNhc2UgdGhpcy5jb25zdHMuZ2V0KCdTV0VfQ1RSTF9EQVRFX1RJTUVfUElDSycpOlxuICAgICAgICByZXR1cm4gdGhpcy5sb2NhbGVEYXRhLmRhdGVUaW1lRm9ybWF0O1xuICAgICAgY2FzZSB0aGlzLmNvbnN0cy5nZXQoJ1NXRV9DVFJMX0RBVEVfUElDSycpOlxuICAgICAgICByZXR1cm4gdGhpcy5sb2NhbGVEYXRhLmRhdGVGb3JtYXQ7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICB9XG5cbiAgZ2V0Q3VycmVudFJlY29yZE1vZGVsKF9jb250cm9scywgX21ldGhvZHMpIHtcbiAgICBpZiAoIV9jb250cm9scykge1xuICAgICAgX2NvbnRyb2xzID0gdGhpcy5nZXRDb250cm9scygpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgfVxuICAgIGlmICghX21ldGhvZHMpIHtcbiAgICAgIF9tZXRob2RzID0gdGhpcy5fZ2V0TWV0aG9kcygpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgfVxuICAgIF9jb250cm9scy5zdGF0ZSA9IHRoaXMuY2FsY3VsYXRlQ3VycmVudFJlY29yZFN0YXRlKCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBfY29udHJvbHMuaWQgPSAnJzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIGxldCBvYmogPSB7fTtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuZ2V0U2VsZWN0aW9uKCk7XG4gICAgaWYgKGluZGV4ID4gLTEgJiYgX2NvbnRyb2xzLnN0YXRlICE9PSAzKSB7IC8vIGFkZGVkIF9jb250cm9scy5zdGF0ZSAhPT0gMzsgd2UgZG9uJ3QgbmVlZCBpZCBpbiBxdWVyeSBtb2RlXG4gICAgICBvYmogPSB0aGlzLmdldFJlY29yZFNldCgpW2luZGV4XTtcbiAgICAgIF9jb250cm9scy5pZCA9IHRoaXMuZ2V0UmF3UmVjb3JkU2V0KClbaW5kZXhdLklkOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgfVxuICAgIGNvbnN0IGFwcGxldENvbnRyb2xzID0gdGhpcy5fcmV0dXJuQ29udHJvbHMoKTtcbiAgICAvLyBwb3B1bGF0ZSBjb250cm9sc1xuICAgIGxldCBhcnIgPSBPYmplY3Qua2V5cyhfY29udHJvbHMpO1xuICAgIGFyci5mb3JFYWNoKChjb250cm9sTmFtZSkgPT4ge1xuICAgICAgY29uc3QgY29udHJvbCA9IGFwcGxldENvbnRyb2xzW2NvbnRyb2xOYW1lXTtcbiAgICAgIGlmICh0eXBlb2YgY29udHJvbCA9PT0gJ3VuZGVmaW5lZCcpIHsgLy8ganVzdCBpZiBzb21lYm9keSBzZW5kcyBpbmNvcnJlY3QgbmFtZSBvZiB0aGUgY29udHJvbFxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBmaWVsZE5hbWUgPSBjb250cm9sLkdldEZpZWxkTmFtZSgpO1xuICAgICAgY29uc3QgdWlUeXBlID0gY29udHJvbC5HZXRVSVR5cGUoKTtcbiAgICAgIGNvbnN0IGRpc3BsYXlGb3JtYXQgPSBjb250cm9sLkdldERpc3BsYXlGb3JtYXQoKSB8fCB0aGlzLmdldENvbnRyb2xEaXNwbGF5Rm9ybWF0KHVpVHlwZSk7XG4gICAgICBpZiAoX2NvbnRyb2xzLmlkKSB7XG4gICAgICAgIF9jb250cm9sc1tjb250cm9sTmFtZV0gPSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgICAgICB2YWx1ZTogdGhpcy5fZ2V0SlNWYWx1ZShvYmpbZmllbGROYW1lXSwgY29udHJvbC5HZXRVSVR5cGUoKSwgZGlzcGxheUZvcm1hdCksXG4gICAgICAgICAgdWlUeXBlLFxuICAgICAgICAgIHJlYWRvbmx5OiAhdGhpcy5wbS5FeGVjdXRlTWV0aG9kKCdDYW5VcGRhdGUnLCBjb250cm9sTmFtZSksXG4gICAgICAgICAgaXNMaW5rOiB0aGlzLnBtLkV4ZWN1dGVNZXRob2QoJ0Nhbk5hdmlnYXRlJywgY29udHJvbE5hbWUpLFxuICAgICAgICAgIGxhYmVsOiBjb250cm9sLkdldERpc3BsYXlOYW1lKCksXG4gICAgICAgICAgaXNQb3N0Q2hhbmdlczogY29udHJvbC5Jc1Bvc3RDaGFuZ2VzKCksXG4gICAgICAgICAgcmVxdWlyZWQ6IHRoaXMuX2lzUmVxdWlyZWQoY29udHJvbC5HZXRJbnB1dE5hbWUoKSksXG4gICAgICAgICAgbWF4U2l6ZTogY29udHJvbC5HZXRNYXhTaXplKCksXG4gICAgICAgICAgZmllbGROYW1lLFxuICAgICAgICAgIGRpc3BsYXlGb3JtYXQsXG4gICAgICAgIH07XG4gICAgICB9IGVsc2UgeyAvLyBubyByZWNvcmQgZGlzcGxheWVkXG4gICAgICAgIF9jb250cm9sc1tjb250cm9sTmFtZV0gPSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgICAgICB2YWx1ZTogJycsXG4gICAgICAgICAgdWlUeXBlLFxuICAgICAgICAgIHJlYWRvbmx5OiBfY29udHJvbHMuc3RhdGUgIT09IDMsIC8vIHNob3VsZCBiZSBlZGl0dGFibGUgaW4gcXVlcnkgbW9kZVxuICAgICAgICAgIGlzTGluazogZmFsc2UsXG4gICAgICAgICAgbGFiZWw6IGNvbnRyb2wuR2V0RGlzcGxheU5hbWUoKSxcbiAgICAgICAgICBpc1Bvc3RDaGFuZ2VzOiBjb250cm9sLklzUG9zdENoYW5nZXMoKSxcbiAgICAgICAgICByZXF1aXJlZDogdGhpcy5faXNSZXF1aXJlZChjb250cm9sLkdldElucHV0TmFtZSgpKSxcbiAgICAgICAgICBtYXhTaXplOiBjb250cm9sLkdldE1heFNpemUoKSxcbiAgICAgICAgICBmaWVsZE5hbWUsXG4gICAgICAgICAgZGlzcGxheUZvcm1hdCxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBwb3B1bGF0ZSBtZXRob2RzXG4gICAgaWYgKF9tZXRob2RzKSB7XG4gICAgICBhcnIgPSBPYmplY3Qua2V5cyhfbWV0aG9kcyk7XG4gICAgICAvLyBUT0RPOiBjb3VsZCBiZSBhbiBleGNlcHRpb24gaWYgbWV0aG9kIG5hbWUgaXMgaW5jb3JyZWN0XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIGFyci5mb3JFYWNoKChtZXRob2ROYW1lKSA9PiB7IF9tZXRob2RzW21ldGhvZE5hbWVdID0gdGhpcy5jYW5JbnZva2VNZXRob2QobWV0aG9kTmFtZSk7IH0pO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgY29udHJvbHM6IF9jb250cm9scyxcbiAgICAgIG1ldGhvZHM6IF9tZXRob2RzLFxuICAgIH07XG4gIH1cblxuICBfZmluZENvbnRyb2xUb0VudGVyU2VhcmNoRXhwcigpIHtcbiAgICBjb25zdCBhcHBsZXRDb250cm9scyA9IHRoaXMuX3JldHVybkNvbnRyb2xzKCk7XG4gICAgY29uc3QgYXJyID0gT2JqZWN0LnZhbHVlcyhhcHBsZXRDb250cm9scyk7XG4gICAgY29uc3QgZm91bmQgPSBhcnIuZmluZCgoY29udHJvbCkgPT4ge1xuICAgICAgY29uc3QgY29udHJvbFVpVHlwZSA9IGNvbnRyb2wuR2V0VUlUeXBlKCk7XG4gICAgICBpZiAoIXRoaXMuX2lzU2tpcENvbnRyb2woY29udHJvbFVpVHlwZSkpIHtcbiAgICAgICAgLy8gc2tpcHBpbmcgYWxzbyBKQ2hlY2tib3hcbiAgICAgICAgcmV0dXJuIGNvbnRyb2xVaVR5cGUgIT09IHRoaXMuY29uc3RzLmdldCgnU1dFX0NUUkxfQ0hFQ0tCT1gnKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgICByZXR1cm4gZm91bmQ7XG4gIH1cblxuICBfbmV3UXVlcnkoKSB7XG4gICAgcmV0dXJuIHRoaXMucG0uRXhlY3V0ZU1ldGhvZCgnSW52b2tlTWV0aG9kJywgJ05ld1F1ZXJ5Jyk7XG4gIH1cblxuICBxdWVyeUJ5U2VhcmNoRXhwclN5bmMoZXhwcikge1xuICAgIHRoaXMuX25ld1F1ZXJ5KCk7IC8vID8gY2hlY2sgb3Igb3B0aW9uYWxseSBza2lwXG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuX2ZpbmRDb250cm9sVG9FbnRlclNlYXJjaEV4cHIoKTtcbiAgICB0aGlzLl9zZXRDb250cm9sVmFsdWVJbnRlcm5hbChjb250cm9sLCBleHByKTtcbiAgICB0aGlzLnBtLkV4ZWN1dGVNZXRob2QoJ0ludm9rZU1ldGhvZCcsICdFeGVjdXRlUXVlcnknKTtcbiAgICByZXR1cm4gdGhpcy5nZXRSZWNvcmRTZXQoKS5sZW5ndGg7XG4gIH1cblxuICBxdWVyeUJ5SWRTeW5jKHJvd0lkKSB7XG4gICAgbGV0IGV4cHI7XG4gICAgaWYgKEFycmF5ID09PSByb3dJZC5jb25zdHJ1Y3Rvcikge1xuICAgICAgZXhwciA9IHJvd0lkLm1hcChlbCA9PiBgSWQ9XCIke2VsfVwiYCkuam9pbignIE9SICcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBleHByID0gYElkPVwiJHtyb3dJZH1cImA7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnF1ZXJ5QnlTZWFyY2hFeHByU3luYyhleHByKTtcbiAgfVxuXG4gIHF1ZXJ5QnlJZChyb3dJZCwgY2IpIHtcbiAgICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB0aGlzLl9xdWVyeUJ5SWQocm93SWQsIHJlc29sdmUpKTtcbiAgICBjb25zdCByZXQgPSBwcm9taXNlLnRoZW4oKCkgPT4gdGhpcy5nZXRSZWNvcmRTZXQoKS5sZW5ndGgpO1xuICAgIHJldHVybiB0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicgPyByZXQudGhlbihjYikgOiByZXQ7XG4gIH1cblxuICBfcXVlcnlCeUlkKHJvd0lkLCBjYikge1xuICAgIHRoaXMuX25ld1F1ZXJ5KCk7IC8vID8gY2hlY2sgb3Igb3B0aW9uYWxseSBza2lwXG5cbiAgICBjb25zdCBhaSA9IHtcbiAgICAgIHNjb3BlOiB0aGlzLFxuICAgICAgYXN5bmM6IHRydWUsXG4gICAgICBzZWxmYnVzeTogdHJ1ZSxcbiAgICB9O1xuICAgIGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGFpLmNiID0gY2I7XG4gICAgfVxuXG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuX2ZpbmRDb250cm9sVG9FbnRlclNlYXJjaEV4cHIoKTtcbiAgICB0aGlzLl9zZXRDb250cm9sVmFsdWVJbnRlcm5hbChjb250cm9sLCBgSWQ9XCIke3Jvd0lkfVwiYCk7XG4gICAgcmV0dXJuIHRoaXMucG0uRXhlY3V0ZU1ldGhvZCgnSW52b2tlTWV0aG9kJywgJ0V4ZWN1dGVRdWVyeScsIG51bGwsIGFpKTtcbiAgfVxuXG4gIHF1ZXJ5KHBhcmFtcywgY2IpIHtcbiAgICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB0aGlzLl9xdWVyeShwYXJhbXMsIHJlc29sdmUpKTtcbiAgICBjb25zdCByZXQgPSBwcm9taXNlLnRoZW4oKCkgPT4gdGhpcy5nZXRSZWNvcmRTZXQoKS5sZW5ndGgpO1xuICAgIHJldHVybiB0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicgPyByZXQudGhlbihjYikgOiByZXQ7XG4gIH1cblxuICBfcXVlcnkocGFyYW1zLCBjYikge1xuICAgIC8vIFRPRE86IGNoZWNrIGlmIGl0IGlzIGFscmVhZHkgaW4gcXVlcnkgbW9kZSB0byBhdm9pZCBjYWxsaW5nIHRoZSBuZXcgcXVlcnkgYWdhaW5cbiAgICAvLyBvciBhY2NlcHQgdGhlIGlucHV0IHBhcmFtZXRlciB0byBza2lwIGNhbGxpbmcgdGhlIG5ldyBxdWVyeT9cbiAgICAvLyBvciBtYXliZSBiZXR0ZXIgdG8gY2FuY2VsIHRoZSBleGlzdGluZyBxdWVyeT9cbiAgICB0aGlzLl9uZXdRdWVyeSgpO1xuXG4gICAgY29uc3QgYWkgPSB7XG4gICAgICBzY29wZTogdGhpcyxcbiAgICAgIGFzeW5jOiB0cnVlLFxuICAgICAgc2VsZmJ1c3k6IHRydWUsXG4gICAgfTtcbiAgICBpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBhaS5jYiA9IGNiO1xuICAgIH1cblxuICAgIGNvbnN0IF9jb250cm9scyA9IHRoaXMuX3JldHVybkNvbnRyb2xzKCk7XG4gICAgY29uc3QgYXJyID0gT2JqZWN0LmtleXMocGFyYW1zKTtcbiAgICBhcnIuZm9yRWFjaCgoY29udHJvbE5hbWUpID0+IHtcbiAgICAgIGNvbnN0IGNvbnRyb2wgPSBfY29udHJvbHNbY29udHJvbE5hbWVdO1xuICAgICAgaWYgKGNvbnRyb2wpIHtcbiAgICAgICAgdGhpcy5fc2V0Q29udHJvbFZhbHVlSW50ZXJuYWwoY29udHJvbCwgdGhpcy5fZ2V0U2llYmVsVmFsdWUocGFyYW1zW2NvbnRyb2xOYW1lXSwgY29udHJvbC5HZXRVSVR5cGUoKSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgVGhlIGNvbnRyb2wgXCIke2NvbnRyb2xOYW1lfVwiIGlzIG5vdCBmb3VuZCFgKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcy5wbS5FeGVjdXRlTWV0aG9kKCdJbnZva2VNZXRob2QnLCAnRXhlY3V0ZVF1ZXJ5JywgbnVsbCwgYWkpO1xuICB9XG5cbiAgc3RhdGljIFJlcXVlcnkobmFtZSkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSBTaWViZWxBcHAuU19BcHAuR2V0U2VydmljZSgnTjE5IEJTJyk7XG4gICAgaWYgKHNlcnZpY2UpIHtcbiAgICAgIGNvbnN0IGluUHJvcFNldCA9IFNpZWJlbEFwcC5TX0FwcC5OZXdQcm9wZXJ0eVNldCgpO1xuICAgICAgaW5Qcm9wU2V0LlNldFByb3BlcnR5KCduYW1lJywgbmFtZSk7XG4gICAgICBzZXJ2aWNlLkludm9rZU1ldGhvZCgnUmVxdWVyeScsIGluUHJvcFNldCwge30pO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBSZWZyZXNoKG5hbWUpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gU2llYmVsQXBwLlNfQXBwLkdldFNlcnZpY2UoJ04xOSBCUycpO1xuICAgIGlmIChzZXJ2aWNlKSB7XG4gICAgICBjb25zdCBpblByb3BTZXQgPSBTaWViZWxBcHAuU19BcHAuTmV3UHJvcGVydHlTZXQoKTtcbiAgICAgIGluUHJvcFNldC5TZXRQcm9wZXJ0eSgnbmFtZScsIG5hbWUpO1xuICAgICAgc2VydmljZS5JbnZva2VNZXRob2QoJ1JlZnJlc2gnLCBpblByb3BTZXQsIHt9KTtcbiAgICB9XG4gIH1cblxuICBnZXRNVkYoaWRzLCBmaWVsZHMsIHVzZUFjdGl2ZUJPKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHRoaXMuX2dldE1WRihpZHMsIGZpZWxkcywgdXNlQWN0aXZlQk8sIHJlc29sdmUsIHJlamVjdCkpO1xuICB9XG5cbiAgX2dldEZpZWxkTmFtZUZvckNvbnRyb2woY29udHJvbE5hbWUpIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5fZ2V0Q29udHJvbChjb250cm9sTmFtZSk7XG4gICAgLy8gaWYgbm90IGZvdW5kLCB0aGUgaW5wdXQgdmFsdWUgaXMgcmV0dXJuZWRcbiAgICBpZiAoY29udHJvbCkge1xuICAgICAgcmV0dXJuIGNvbnRyb2wuR2V0RmllbGROYW1lKCk7XG4gICAgfVxuICAgIHJldHVybiBjb250cm9sTmFtZTsgLy8gZmFsbGJhY2sgLSBqdXN0IGluIGNhc2Ugd2UgZ290IHRoZSBmaWVsZCBuYW1lXG4gIH1cblxuICBfZ2V0TVZGKGlkcywgZmllbGRzLCB1c2VBY3RpdmVCTywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgY29uc3QgYXJyID0gT2JqZWN0LmVudHJpZXMoZmllbGRzKTtcbiAgICBjb25zdCBwc0lucHV0cyA9IFNpZWJlbEFwcC5TX0FwcC5OZXdQcm9wZXJ0eVNldCgpO1xuICAgIHBzSW5wdXRzLlNldFByb3BlcnR5KCdCTycsIFNpZWJlbEFwcC5TX0FwcC5HZXRBY3RpdmVCdXNPYmooKS5HZXROYW1lKCkpO1xuICAgIHBzSW5wdXRzLlNldFByb3BlcnR5KCdCQycsIHRoaXMucG0uR2V0KCdHZXRCdXNDb21wJykuR2V0TmFtZSgpKTtcbiAgICBwc0lucHV0cy5TZXRQcm9wZXJ0eSgnVXNlQWN0aXZlQk8nLCB1c2VBY3RpdmVCTyA/ICdZJyA6ICdOJyk7XG4gICAgcHNJbnB1dHMuU2V0UHJvcGVydHkoJ0lEJywgaWRzLmpvaW4oJywnKSk7XG4gICAgYXJyLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICBjb25zdCBwcyA9IFNpZWJlbEFwcC5TX0FwcC5OZXdQcm9wZXJ0eVNldCgpO1xuICAgICAgcHMuU2V0VHlwZSh0aGlzLl9nZXRGaWVsZE5hbWVGb3JDb250cm9sKGVsWzBdKSk7XG4gICAgICBwcy5TZXRQcm9wZXJ0eSgnRmllbGRzJywgZWxbMV0uam9pbignLCcpKTtcbiAgICAgIHBzSW5wdXRzLkFkZENoaWxkKHBzLkNsb25lKCkpO1xuICAgIH0pO1xuICAgIGNvbnN0IGJzID0gU2llYmVsQXBwLlNfQXBwLkdldFNlcnZpY2UoJ04xOSBCUycpO1xuICAgIGNvbnN0IGFpID0ge1xuICAgICAgYXN5bmM6IHRydWUsXG4gICAgICBzZWxmYnVzeTogdHJ1ZSxcbiAgICAgIHNjb3BlOiB0aGlzLFxuICAgICAgZXJyY2I6ICgpID0+IHtcbiAgICAgICAgcmVqZWN0KCk7XG4gICAgICB9LFxuICAgICAgY2I6IChtZXRob2ROYW1lLCBJbnB1dHMsIHBzT3V0cHV0cykgPT4ge1xuICAgICAgICBjb25zdCByZXQgPSB7fTtcbiAgICAgICAgY29uc3QgeyBjaGlsZEFycmF5IH0gPSBwc091dHB1dHMuR2V0Q2hpbGRCeVR5cGUoJ1Jlc3VsdFNldCcpIHx8IHt9OyAvLyB0byBiZSBzYWZlIHdoZW4gbm8gcmVzdWx0c1xuICAgICAgICAoY2hpbGRBcnJheSB8fCBbXSkuZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgICAgICByZXRbY2hpbGQuR2V0VHlwZSgpXSA9IHt9O1xuICAgICAgICAgIGNoaWxkLmNoaWxkQXJyYXkuZm9yRWFjaCgoZ3JhbmRDaGlsZCkgPT4ge1xuICAgICAgICAgICAgcmV0W2NoaWxkLkdldFR5cGUoKV1bZ3JhbmRDaGlsZC5HZXRUeXBlKCldID0gZ3JhbmRDaGlsZC5jaGlsZEFycmF5Lm1hcCgocmVjKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHByaW1hcnkgPSByZWMucHJvcEFycmF5WydTU0EgUHJpbWFyeSBGaWVsZCddO1xuICAgICAgICAgICAgICB0aGlzLmJvb2xPYmplY3QuU2V0QXNTdHJpbmcocHJpbWFyeSk7XG4gICAgICAgICAgICAgIHJlYy5wcm9wQXJyYXlbJ1NTQSBQcmltYXJ5IEZpZWxkJ10gPSB0aGlzLmJvb2xPYmplY3QuR2V0VmFsdWUoKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgcmVjLnByb3BBcnJheSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJlc29sdmUocmV0KTtcbiAgICAgIH0sXG4gICAgfTtcbiAgICByZXR1cm4gYnMuSW52b2tlTWV0aG9kKCdSZXR1cm5NVkdGaWVsZHMnLCBwc0lucHV0cywgYWkpO1xuICB9XG5cbiAgc2F2ZVByZWYobmFtZSwgdmFsdWUpIHtcbiAgICAvLyB2YWx1ZSBpcyBhIHN0cmluZ1xuICAgIC8vIHZhbHVlIGlzIGJvdW5kIHRvIGFwcGxldCBhbmQgdmlld1xuICAgIGNvbnN0IHBzSW5wdXQgPSBTaWViZWxBcHAuU19BcHAuTmV3UHJvcGVydHlTZXQoKTtcbiAgICBwc0lucHV0LlNldFByb3BlcnR5KCdLZXknLCBuYW1lKTtcbiAgICBwc0lucHV0LlNldFByb3BlcnR5KG5hbWUsIHZhbHVlKTtcbiAgICB0aGlzLnBtLk9uQ29udHJvbEV2ZW50KFxuICAgICAgdGhpcy5jb25zdHMuZ2V0KCdQSFlFVkVOVF9JTlZPS0VfQ09OVFJPTCcpLFxuICAgICAgdGhpcy5wbS5HZXQodGhpcy5jb25zdHMuZ2V0KCdTV0VfTVRIRF9VUERBVEVfVVNFUl9QUkVGJykpLFxuICAgICAgcHNJbnB1dCxcbiAgICApO1xuICAgIHJldHVybiB0aGlzLnBtLlNldFByb3BlcnR5KG5hbWUsIHZhbHVlKTtcbiAgfVxuXG4gIHJlYWRQcmVmKG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5wbS5HZXQobmFtZSk7XG4gIH1cblxuICBfcmV0cmlldmVEYXRhKGFtb3VudCkgeyAvLyB0ZW1wIG1ldGhvZCAtIHdpbGwgYmUgcmVtb3ZlZFxuICAgIGNvbnN0IGRhdGEgPSBuZXcgTWFwKCk7XG5cbiAgICB3aGlsZSAoZGF0YS5zaXplIDwgYW1vdW50KSB7XG4gICAgICBjb25zdCBhcnIgPSB0aGlzLmdldFJhd1JlY29yZFNldCgpO1xuXG4gICAgICAvLyBhdm9pZCB0aGUgZHVwbGljYXRlc1xuICAgICAgYXJyLmZvckVhY2goZWwgPT4gZGF0YS5zZXQoZWwuSWQsIGVsKSk7XG5cbiAgICAgIC8vIHdlIGFyZSB1c2luZyBjYW5JbnZva2VNZXRob2QsIGFzIGluIDE2LjAgbmV4dFJlY29yZFNldCBhbHdheXMgcmV0dXJucyB1bmRlZmluZWRcbiAgICAgIGlmICghdGhpcy5jYW5JbnZva2VNZXRob2QoJ0dvdG9OZXh0U2V0JykpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIHRoaXMubmV4dFJlY29yZFNldCgpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBkYXRhOiBbLi4uZGF0YS52YWx1ZXMoKV0sXG4gICAgICBoYXNOZXh0OiB0aGlzLmNhbkludm9rZU1ldGhvZCgnR290b05leHRTZXQnKSxcbiAgICB9O1xuICB9XG5cbiAgX3NldEZpZWxkVmFsdWUobmFtZSwgdmFsdWUpIHtcbiAgICBjb25zb2xlLndhcm4oJ1tOMTldX3NldEZpZWxkVmFsdWUgd2lsbCBiZSByZW1vdmVkIGluIHRoZSBmdXR1cmUhJyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgIHRoaXMuYXBwbGV0LlNldENvbnRyb2xWYWx1ZUJ5TmFtZShuYW1lLCB2YWx1ZSk7XG4gICAgcmV0dXJuIHRoaXMucG0uRXhlY3V0ZU1ldGhvZCgnSW52b2tlTWV0aG9kJywgJ1dyaXRlUmVjb3JkJyk7XG4gIH1cblxuICAvLyB0aGlzIGlzIGFsc28gY2FsbGVkIGZyb20gdGhlIHRoZSBkZW1vIHdoZXJlIFNpZWJlbCBhbmQgY3VzdG9tIHJlbmRlcmVkIGFwcGxldCBjb2V4aXN0XG4gIF9nZXRGaWVsZFRvQ29udHJvbE1hcChfY29udHJvbHMpIHtcbiAgICBjb25zdCByZXQgPSB7fTtcbiAgICBjb25zdCBhcHBsZXRDb250cm9scyA9IHRoaXMuX3JldHVybkNvbnRyb2xzKCk7XG4gICAgY29uc3QgYXJyID0gT2JqZWN0LmtleXMoX2NvbnRyb2xzIHx8IGFwcGxldENvbnRyb2xzKTtcbiAgICBhcnIuZm9yRWFjaCgoY29udHJvbE5hbWUpID0+IHtcbiAgICAgIGNvbnN0IGNvbnRyb2wgPSBhcHBsZXRDb250cm9sc1tjb250cm9sTmFtZV07XG4gICAgICBjb25zdCBmaWVsZE5hbWUgPSBjb250cm9sLkdldEZpZWxkTmFtZSgpO1xuICAgICAgaWYgKGZpZWxkTmFtZSkge1xuICAgICAgICBjb25zdCB1aVR5cGUgPSBjb250cm9sLkdldFVJVHlwZSgpO1xuICAgICAgICByZXRbZmllbGROYW1lXSA9IHtcbiAgICAgICAgICBuYW1lOiBjb250cm9sTmFtZSxcbiAgICAgICAgICBpc1Bvc3RDaGFuZ2VzOiBjb250cm9sLklzUG9zdENoYW5nZXMoKSxcbiAgICAgICAgICB1aVR5cGUsXG4gICAgICAgICAgZGlzcGxheUZvcm1hdDogY29udHJvbC5HZXREaXNwbGF5Rm9ybWF0KCkgfHwgdGhpcy5nZXRDb250cm9sRGlzcGxheUZvcm1hdCh1aVR5cGUpLFxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICBnZXRDb250cm9sc1JlY29yZFNldCgpIHtcbiAgICAvLyB1c2VkIHNsaWNlIHRvIGF2b2lkIG1vZGlmaWNhdGlvbiBvZiB0aGUgcmVjb3JkIHNldFxuICAgIGNvbnN0IHJldCA9IHRoaXMuZ2V0UmVjb3JkU2V0KCkuc2xpY2UoKTtcbiAgICBjb25zdCByYXdSZWNvcmRTZXQgPSB0aGlzLmdldFJhd1JlY29yZFNldCgpOyAvLyBqdXN0IGZhbGxiYWNrIGlmIHJlY29yZCBzZXQgZG9lcyBub3QgaGF2ZSBJZFxuXG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHJldC5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgICAgY29uc3QgaWQgPSByZXRbaV0uSWQ7XG4gICAgICByZXRbaV0gPSBPYmplY3Qua2V5cyhyZXRbaV0pLmZpbHRlcihlbCA9PiB0aGlzLmZpZWxkVG9Db250cm9sTWFwW2VsXSkucmVkdWNlKChhY2MsIGVsKSA9PiAoe1xuICAgICAgICAuLi5hY2MsXG4gICAgICAgIC4uLntcbiAgICAgICAgICBbdGhpcy5maWVsZFRvQ29udHJvbE1hcFtlbF0ubmFtZV06IHRoaXMuX2dldEpTVmFsdWUocmV0W2ldW2VsXSxcbiAgICAgICAgICAgIHRoaXMuZmllbGRUb0NvbnRyb2xNYXBbZWxdLnVpVHlwZSxcbiAgICAgICAgICAgIHRoaXMuZmllbGRUb0NvbnRyb2xNYXBbZWxdLmRpc3BsYXlGb3JtYXQpLFxuICAgICAgICB9LFxuICAgICAgfSksIHt9KTtcbiAgICAgIGlmIChpZCkge1xuICAgICAgICByZXRbaV0uSWQgPSBpZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldFtpXS5JZCA9IHJhd1JlY29yZFNldFtpXS5JZDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgc29ydChjb250cm9sTmFtZSwgaXNBc2NlbmRpbmcpIHtcbiAgICAvLyBUT0RPOiBjaGVjayBpZiBzb3J0YWJsZT8gZS5nLiBub3QgaW4gcXVlcnkgbW9kZVxuICAgIC8vIFRPRE86IGNoZWNrIGlmIHdlIGNhbiBzb3J0IGJ5IHRoaXMgY29udHJvbD8gY29udHJvbCBoYXMgSXNTb3J0YWJsZSBmdW5jLCBidXQgd2UgZG9uJ3QgcmV0dXJuIHRoZSBvdXRwdXQgb2YgaXRcbiAgICBpZiAodGhpcy5pc0xpc3RBcHBsZXQpIHtcbiAgICAgIGNvbnN0IHNvcnRPcmRlciA9IGlzQXNjZW5kaW5nID8gdGhpcy5jb25zdHMuZ2V0KCdTT1JUX0FTQ0VORElORycpIDogdGhpcy5jb25zdHMuZ2V0KCdTT1JUX0RFU0NFTkRJTkcnKTtcbiAgICAgIHRoaXMuYXBwbGV0Lk9uQ2xpY2tTb3J0KGNvbnRyb2xOYW1lLCBzb3J0T3JkZXIpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTjE5bm90aWZpY2F0aW9ucyB7XG4gIGNvbnN0cnVjdG9yKHBtLCBjb25zdHMsIGJjSWQsIGZpZWxkVG9Db250cm9sTWFwKSB7XG4gICAgbGV0IHJlY2VpdmVkTm90aWZpY2F0aW9ucyA9IFtdO1xuICAgIHRoaXMudG9rZW4gPSAwO1xuICAgIHRoaXMuc3Vic2NyaWJlcnMgPSBbXTtcblxuICAgIHBtLkF0dGFjaE5vdGlmaWNhdGlvbkhhbmRsZXIoY29uc3RzLmdldCgnU1dFX1BST1BfQkNfTk9USV9CRUdJTicpLCAocHJvcFNldCkgPT4ge1xuICAgICAgaWYgKGJjSWQgPT09IHByb3BTZXQuR2V0UHJvcGVydHkoJ2JjJykpIHtcbiAgICAgICAgcmVjZWl2ZWROb3RpZmljYXRpb25zID0gW107XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBwbS5BdHRhY2hOb3RpZmljYXRpb25IYW5kbGVyKGNvbnN0cy5nZXQoJ1NXRV9QUk9QX0JDX05PVElfTkVXX0FDVElWRV9ST1cnKSwgKHByb3BTZXQpID0+IHtcbiAgICAgIGlmIChiY0lkID09PSBwcm9wU2V0LkdldFByb3BlcnR5KCdiYycpKSB7XG4gICAgICAgIHJlY2VpdmVkTm90aWZpY2F0aW9ucy5wdXNoKCdTV0VfUFJPUF9CQ19OT1RJX05FV19BQ1RJVkVfUk9XJyk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBwbS5BdHRhY2hOb3RpZmljYXRpb25IYW5kbGVyKGNvbnN0cy5nZXQoJ1NXRV9QUk9QX0JDX05PVElfU1RBVEVfQ0hBTkdFRCcpLCAocHJvcFNldCkgPT4ge1xuICAgICAgY29uc3Qgc3RhdGVzID0gWydjcCcsICduJ107XG4gICAgICBpZiAoYmNJZCA9PT0gcHJvcFNldC5HZXRQcm9wZXJ0eSgnYmMnKSkge1xuICAgICAgICBpZiAoIXN0YXRlcy5pbmNsdWRlcyhwcm9wU2V0LkdldFByb3BlcnR5KCdzdGF0ZScpKSkge1xuICAgICAgICAgIHJlY2VpdmVkTm90aWZpY2F0aW9ucy5wdXNoKCdTV0VfUFJPUF9CQ19OT1RJX1NUQVRFX0NIQU5HRUQnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gb3IgU1dFX1BST1BfQkNfTk9USV9ORVdfRklFTERfREFUQT9cbiAgICBwbS5BdHRhY2hOb3RpZmljYXRpb25IYW5kbGVyKGNvbnN0cy5nZXQoJ1NXRV9QUk9QX0JDX05PVElfTkVXX0RBVEFfV1MnKSwgKHByb3BTZXQpID0+IHtcbiAgICAgIGlmIChiY0lkID09PSBwcm9wU2V0LkdldFByb3BlcnR5KCdiYycpKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkTmFtZSA9IHByb3BTZXQuR2V0UHJvcGVydHkoY29uc3RzLmdldCgnU1dFX1BST1BfTk9USV9GSUVMRCcpKTtcbiAgICAgICAgY29uc3QgY29udHJvbCA9IGZpZWxkVG9Db250cm9sTWFwW2ZpZWxkTmFtZV07XG4gICAgICAgIGlmIChjb250cm9sICYmIGNvbnRyb2wudWlUeXBlICE9PSBjb25zdHMuZ2V0KCdTV0VfQ1RSTF9NVkcnKSkge1xuICAgICAgICAgIHJlY2VpdmVkTm90aWZpY2F0aW9ucy5wdXNoKCdTV0VfUFJPUF9CQ19OT1RJX05FV19EQVRBX1dTJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHBtLkF0dGFjaE5vdGlmaWNhdGlvbkhhbmRsZXIoY29uc3RzLmdldCgnU1dFX1BST1BfQkNfTk9USV9ERUxFVEVfUkVDT1JEJyksIChwcm9wU2V0KSA9PiB7XG4gICAgICBpZiAoYmNJZCA9PT0gcHJvcFNldC5HZXRQcm9wZXJ0eSgnYmMnKSkge1xuICAgICAgICByZWNlaXZlZE5vdGlmaWNhdGlvbnMucHVzaCgnU1dFX1BST1BfQkNfTk9USV9ERUxFVEVfUkVDT1JEJyk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBwbS5BdHRhY2hOb3RpZmljYXRpb25IYW5kbGVyKGNvbnN0cy5nZXQoJ1NXRV9QUk9QX0JDX05PVElfTkVXX1JFQ09SRCcpLCAocHJvcFNldCkgPT4ge1xuICAgICAgaWYgKGJjSWQgPT09IHByb3BTZXQuR2V0UHJvcGVydHkoJ2JjJykpIHtcbiAgICAgICAgcmVjZWl2ZWROb3RpZmljYXRpb25zLnB1c2goJ1NXRV9QUk9QX0JDX05PVElfTkVXX1JFQ09SRCcpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcG0uQXR0YWNoTm90aWZpY2F0aW9uSGFuZGxlcihjb25zdHMuZ2V0KCdTV0VfUFJPUF9CQ19OT1RJX0VORCcpLCAocHJvcFNldCkgPT4ge1xuICAgICAgaWYgKGJjSWQgPT09IHByb3BTZXQuR2V0UHJvcGVydHkoJ2JjJykpIHtcbiAgICAgICAgaWYgKHJlY2VpdmVkTm90aWZpY2F0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgLy8gd2UgYXNzdW1lIHRoYXQgdGhlIGZ1bmN0aW9uIGRvZXMgbm90IHRocm93IGFuIGVycm9yLCBzbyBubyBlcnJvciBoYW5kbGluZyBoZXJlXG4gICAgICAgICAgdGhpcy5zdWJzY3JpYmVycy5mb3JFYWNoKGVsID0+IGVsLmZ1bmMoKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHN1YnNjcmliZShmdW5jKSB7XG4gICAgaWYgKHR5cGVvZiBmdW5jICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2Z1bmMgaXMgbm90IGEgZnVuY3Rpb24nKTtcbiAgICB9XG4gICAgdGhpcy50b2tlbiArPSAxO1xuICAgIHRoaXMuc3Vic2NyaWJlcnMucHVzaCh7IHRva2VuOiB0aGlzLnRva2VuLCBmdW5jIH0pO1xuICAgIHJldHVybiB0aGlzLnRva2VuO1xuICB9XG5cbiAgdW5zdWJzY3JpYmUoc3ViVG9rZW4pIHtcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gdGhpcy5zdWJzY3JpYmVycy5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgICAgaWYgKHN1YlRva2VuID09PSB0aGlzLnN1YnNjcmliZXJzW2ldLnRva2VuKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN1YnNjcmliZXJzLnNwbGljZShpLCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iLCJpbXBvcnQgTjE5YmFzZUFwcGxldCBmcm9tICcuL24xOWJhc2VBcHBsZXQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOMTlwb3B1cEFwcGxldCBleHRlbmRzIE4xOWJhc2VBcHBsZXQge1xuICBjb25zdHJ1Y3RvcihzZXR0aW5ncykge1xuICAgIHN1cGVyKHNldHRpbmdzKTtcbiAgICBjb25zb2xlLmxvZyhgJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWV9IHN0YXJ0ZWQuLi5gKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG5cbiAgICBpZiAodGhpcy5pc0xpc3RBcHBsZXQpIHtcbiAgICAgIHRoaXMucG0uR2V0UmVuZGVyZXIoKS5yZXNpemUgPSAoKSA9PiAwO1xuICAgICAgdGhpcy5wbS5HZXRSZW5kZXJlcigpLkdldFNlbGVjdGVkUm93ID0gKCkgPT4gMDtcbiAgICB9XG4gIH1cblxuICBwaWNrUmVjb3JkKCkge1xuICAgIC8vIFRPRE86IGNoZWNrIGNhbklub2tlTWV0aG9kP1xuICAgIHJldHVybiB0aGlzLnBtLkV4ZWN1dGVNZXRob2QoJ0ludm9rZU1ldGhvZCcsICdQaWNrUmVjb3JkJyk7XG4gIH1cblxuICBkZWxldGVSZWNvcmRzKGNiKSB7XG4gICAgLy8gbWV0aG9kIGlzIG5vdCBhbGxvd2VkIHRvIGRlbGV0ZSB0aGUgcHJpbWFyeSBmb3IgdmlzaWJpbGl0eSBNVkdcbiAgICAvLyAgaW4gdGhpcyBjYXNlIGl0IHJldHVybnMgXCJNZXRob2QgRGVsZXRlUmVjb3JkcyBpcyBub3QgYWxsb3dlZCBoZXJlXCIgU0JMLVVJRi0wMDM0OFxuICAgIC8vIFRPRE86IGNoZWNrIGNhbkludm9rZU1ldGhvZD9cbiAgICBjb25zdCByZXQgPSB0aGlzLnBtLkV4ZWN1dGVNZXRob2QoJ0ludm9rZU1ldGhvZCcsICdEZWxldGVSZWNvcmRzJyk7XG4gICAgaWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2IoKTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIGRlbGV0ZUFsbFJlY29yZHMoY2IpIHtcbiAgICAvLyBtZXRob2QgaXMgbm90IGRlbGV0aW5nIHRoZSBwcmltYXJ5IGZvciB2aXNpYmlsaXR5IE1WRyghKSBhbmQgc3RpbGwgcmV0dXJucyB0cnVlXG4gICAgLy8gVE9ETzogY2hlY2sgY2FuSW52b2tlTWV0aG9kP1xuICAgIGNvbnN0IHJldCA9IHRoaXMucG0uRXhlY3V0ZU1ldGhvZCgnSW52b2tlTWV0aG9kJywgJ0RlbGV0ZUFsbFJlY29yZHMnKTtcbiAgICBpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjYigpO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgYWRkUmVjb3JkcyhjYikge1xuICAgIC8vIFRPRE86IGNoZWNrIGNhbkludm9rZU1ldGhvZD9cbiAgICBjb25zdCByZXQgPSB0aGlzLnBtLkV4ZWN1dGVNZXRob2QoJ0ludm9rZU1ldGhvZCcsICdBZGRSZWNvcmRzJyk7XG4gICAgaWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2IoKTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIGFkZEFsbFJlY29yZHMoY2IpIHtcbiAgICAvLyBUT0RPOiBjaGVjayBjYW5JbnZva2VNZXRob2Q/XG4gICAgY29uc3QgcmV0ID0gdGhpcy5wbS5FeGVjdXRlTWV0aG9kKCdJbnZva2VNZXRob2QnLCAnQWRkQWxsUmVjb3JkcycpO1xuICAgIGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNiKCk7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICBfZmlyc3RSZWNvcmQoKSB7IC8vIHRlbXAgbWV0aG9kLCBhc3N1bWVzIHRoYXQgbm8gc2Nyb2xsaW5nIGhhcHBlbmVkXG4gICAgaWYgKHRoaXMuaXNMaXN0QXBwbGV0KSB7XG4gICAgICBpZiAodGhpcy5nZXRTZWxlY3Rpb24oKSAhPT0gMCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wb3NpdGlvbk9uUm93KDApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIiwiaW1wb3J0IE4xOXBvcHVwQXBwbGV0IGZyb20gJy4vbjE5cG9wdXBBcHBsZXQnO1xuXG5jb25zdCBzaW5nbGV0b24gPSBTeW1ib2woJ3NpbmdsZXRvbicpO1xuY29uc3Qgc2luZ2xldG9uRW5mb3JjZXIgPSBTeW1ib2woJ3NpbmdsZXRvbkVuZm9yY2VyJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE4xOXBvcHVwQ29udHJvbGxlciB7XG4gIHN0YXRpYyBnZXQgaW5zdGFuY2UoKSB7XG4gICAgaWYgKCF0aGlzW3NpbmdsZXRvbl0pIHtcbiAgICAgIHRoaXNbc2luZ2xldG9uXSA9IG5ldyBOMTlwb3B1cENvbnRyb2xsZXIoc2luZ2xldG9uRW5mb3JjZXIpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpc1tzaW5nbGV0b25dO1xuICB9XG5cbiAgY29uc3RydWN0b3IoZW5mb3JjZXIpIHtcbiAgICBpZiAoZW5mb3JjZXIgIT09IHNpbmdsZXRvbkVuZm9yY2VyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0luc3RhbnRpYXRpb24gZmFpbGVkOiB1c2UgU2luZ2xldG9uLmdldEluc3RhbmNlKCkgaW5zdGVhZCBvZiBuZXcuJyk7XG4gICAgfVxuXG4gICAgdGhpcy5jb25zdHMgPSBTaWViZWxKUy5EZXBlbmRlbmN5KCdTaWViZWxBcHAuQ29uc3RhbnRzJyk7XG4gICAgdGhpcy5pc1BvcHVwSGlkZGVuID0gZmFsc2U7XG4gICAgdGhpcy5yZXNvbHZlUHJvbWlzZSA9IG51bGw7XG4gICAgdGhpcy5wb3B1cEFwcGxldE4xOSA9IG51bGw7XG4gICAgdGhpcy5hc3NvY0FwcGxldE4xOSA9IG51bGw7XG5cbiAgICBjb25zb2xlLmxvZyhgJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWV9IHN0YXJ0ZWQuLi5gKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG5cbiAgICB0aGlzLk4xOXJlc2l6ZUF2YWlsYWJsZSA9IFNpZWJlbEFwcC5NdmdCZWF1dGlmaWVyLnJlc2l6ZUF2YWlsYWJsZTtcbiAgICBTaWViZWxBcHAuTXZnQmVhdXRpZmllci5yZXNpemVBdmFpbGFibGUgPSAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLk4xOXJlc2l6ZUF2YWlsYWJsZS5jYWxsKFNpZWJlbEFwcC5NdmdCZWF1dGlmaWVyKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coYHJlc2l6ZUF2YWlsYWJsZSBFcnJvcjogJHtlLm5hbWV9ICR7ZS5tZXNzYWdlfWApOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gaXQgd2lsbCBiZSBhIHNpbmdsZXRvbiwgc28gdGhlcmUgaXMgbm8gY2xlYW51cFxuICAgIHRoaXMuTjE5cHJvY2Vzc05ld1BvcHVwID0gU2llYmVsQXBwLlNfQXBwLlByb2Nlc3NOZXdQb3B1cDtcbiAgICBTaWViZWxBcHAuU19BcHAuUHJvY2Vzc05ld1BvcHVwID0gKHBzKSA9PiB7XG4gICAgICBsZXQgcmV0O1xuICAgICAgaWYgKHRoaXMuaXNQb3B1cEhpZGRlbikge1xuICAgICAgICByZXQgPSB0aGlzLnByb2Nlc3NOZXdQb3B1cChwcyk7XG4gICAgICAgIHRoaXMuaXNQb3B1cEhpZGRlbiA9IGZhbHNlOyAvLyBpbiBvcmRlciB0byBkbyBub3QgYWZmZWN0IHRoZSBuZXh0IGNhbGxcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldCA9IHRoaXMuTjE5cHJvY2Vzc05ld1BvcHVwLmNhbGwoU2llYmVsQXBwLlNfQXBwLCBwcyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmV0O1xuICAgIH07XG5cbiAgICAvLyB3ZSBjb3VsZCB1c2UgcG0uQXR0YWNoUG9zdFByb3h5RXhlY3V0ZUJpbmRpbmcgZm9yICdFZGl0RmllbGQnLCBidXQgYXQgdGhpcyBwb2ludCBHZXRSZW5kZXJlciByZXR1cm5zIG51bGxcbiAgICAvLyBidXQgcG0gZXhpc3RzXG4gICAgLy8gb3BlbiB1bnRpbCB3ZSBnZXQgcmlkIG9mIEdldFJlbmRlcmVyIChPcmFjbGUgcmV2aWV3KVxuICAgIC8vIG90aGVyIG9wdGlvbiAtIE9uTG9hZFBvcHVwQ29udGVudD9cbiAgICB0aGlzLk4xOXZpZXdMb2FkZWQgPSBTaWViZWxBcHAuY29udGVudFVwZGF0ZXIudmlld0xvYWRlZDtcbiAgICBTaWViZWxBcHAuY29udGVudFVwZGF0ZXIudmlld0xvYWRlZCA9ICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCByZXQgPSB0aGlzLk4xOXZpZXdMb2FkZWQuY2FsbChTaWViZWxBcHAuY29udGVudFVwZGF0ZXIsIC4uLmFyZ3MpO1xuICAgICAgaWYgKHR5cGVvZiB0aGlzLnJlc29sdmVQcm9taXNlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIC8vIFRPRE86IG1heWJlIHVzZSBoZXJlIHRoZSBwcm9wZXJ0aWVzIHNldCBvbiByZXNvbGl2bmdcbiAgICAgICAgY29uc3QgeyBhcHBsZXROYW1lIH0gPSBOMTlwb3B1cENvbnRyb2xsZXIuSXNQb3B1cE9wZW4oKTtcbiAgICAgICAgaWYgKCFhcHBsZXROYW1lKSB7XG4gICAgICAgICAgLy8gY29uc29sZS53YXJuKCdPcGVuIEFwcGxldCBOYW1lIGlzIG5vdCBmb3VuZCBpbiB2aWV3TG9hZGVkIHJlc29sdmluZyBQcm9taXNlJyk7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdPcGVuIEFwcGxldCBOYW1lIGlzIG5vdCBmb3VuZCBpbiB2aWV3TG9hZGVkIHJlc29sdmluZyBQcm9taXNlJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgYXBwbGV0ID0gTjE5cG9wdXBDb250cm9sbGVyLkdldFBvcHVwQXBwbGV0KGFwcGxldE5hbWUpO1xuICAgICAgICAgIGNvbnN0IHBtID0gYXBwbGV0LkdldFBNb2RlbCgpO1xuICAgICAgICAgIHRoaXMucG9wdXBBcHBsZXROMTkgPSBuZXcgTjE5cG9wdXBBcHBsZXQoeyBwbSB9KTtcbiAgICAgICAgICBjb25zdCBvYmogPSB7IGFwcGxldE5hbWUsIHBvcHVwQXBwbGV0TjE5OiB0aGlzLnBvcHVwQXBwbGV0TjE5IH07XG4gICAgICAgICAgLy8gY2hlY2sgaWYgd2UgaGF2ZSBhc3NvYyAtIHdlIGFzc3VtZSBpdCBpcyBhbHdheXMgYXNzb2MgYXBwbGV0P1xuICAgICAgICAgIGNvbnN0IGFzc29jQXBwbGV0ID0gYXBwbGV0LkdldFBvcHVwQXBwbGV0KCk7XG4gICAgICAgICAgaWYgKGFzc29jQXBwbGV0KSB7XG4gICAgICAgICAgICB0aGlzLmFzc29jQXBwbGV0TjE5ID0gbmV3IE4xOXBvcHVwQXBwbGV0KHsgcG06IGFzc29jQXBwbGV0LkdldFBNb2RlbCgpIH0pO1xuICAgICAgICAgICAgb2JqLmFzc29jQXBwbGV0TjE5ID0gdGhpcy5hc3NvY0FwcGxldE4xOTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5yZXNvbHZlUHJvbWlzZShvYmopO1xuICAgICAgICAgIHRoaXMucmVzb2x2ZVByb21pc2UgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcmV0O1xuICAgIH07XG4gIH1cblxuICBjYW5PcGVuUG9wdXAoKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB0aGlzLnJlc29sdmVQcm9taXNlICE9PSAnZnVuY3Rpb24nO1xuICB9XG5cbiAgcHJvY2Vzc05ld1BvcHVwKHBzKSB7XG4gICAgY29uc3QgcG9wdXBQTSA9IFNpZWJlbEFwcC5TX0FwcC5HZXRQb3B1cFBNKCk7XG5cbiAgICBpZiAoIXBvcHVwUE0uR2V0UmVuZGVyZXIoKSkge1xuICAgICAgcG9wdXBQTS5TZXR1cCgpOyAvLyB0byBjcmVhdGUgUFJcbiAgICB9XG5cbiAgICBjb25zdCBhY3RpdmVWaWV3ID0gU2llYmVsQXBwLlNfQXBwLkdldEFjdGl2ZVZpZXcoKTtcbiAgICBjb25zdCBhY3RpdmVBcHBsZXQgPSBhY3RpdmVWaWV3LkdldEFjdGl2ZUFwcGxldCgpO1xuICAgIGlmIChhY3RpdmVBcHBsZXQpIHtcbiAgICAgIGFjdGl2ZVZpZXcuU2V0QWN0aXZlQXBwbGV0QmVmb3JlUG9wdXAoYWN0aXZlQXBwbGV0KTtcbiAgICB9XG5cbiAgICAvLyB0aGlzIHByb3BlcnR5IGlzIGFkZGVkIHVzaW5nIEF0dGFjaFBNQmluZGluZyBpbnRvIHRoZSBJbml0IFBSIChjYWxsZWQgYnkgUE0gU2V0dXApXG4gICAgLy8gaXQgaXMgdGhlIHJlYXNvbiB3aHkgd2UgaGF2ZSByZWluaXQgcHJvY2VkdXJlIHdoZXJlIFNldHVwIFBNIGlzIGNhbGxlZFxuICAgIHBvcHVwUE0uQWRkUHJvcGVydHkoJ3N0YXRlJywgdGhpcy5jb25zdHMuZ2V0KCdQT1BVUF9TVEFURV9WSVNJQkxFJykpO1xuXG4gICAgbGV0IHVybCA9IHBzLkdldFByb3BlcnR5KCdVUkwnKTtcbiAgICB1cmwgPSBTaWViZWxBcHAuU19BcHAuR2V0UGFnZVVSTCgpICsgdXJsLnNwbGl0KCdzdGFydC5zd2UnKVsxXTtcbiAgICBwb3B1cFBNLlNldFByb3BlcnR5KCd1cmwnLCB1cmwpO1xuXG4gICAgcmV0dXJuICdyZWZyZXNocG9wdXAnO1xuICB9XG5cbiAgY2xvc2VQb3B1cEFwcGxldChhcHBsZXQpIHtcbiAgICAvLyBUT0RPOiBjaGVjayBjYW5JbnZva2VNZXRob2Q/XG4gICAgbGV0IHJldDtcbiAgICBpZiAoYXBwbGV0KSB7XG4gICAgICBjb25zdCBpc1BvcHVwQXBwbGV0ID0gdHlwZW9mIGFwcGxldC5HZXRQb3B1cEFwcGxldE5hbWUgPT09ICdmdW5jdGlvbic7XG4gICAgICBjb25zdCBpc1BpY2tBcHBsZXQgPSB0eXBlb2YgYXBwbGV0LkdldFBpY2tBcHBsZXROYW1lID09PSAnZnVuY3Rpb24nO1xuICAgICAgaWYgKCFpc1BvcHVwQXBwbGV0ICYmICFpc1BpY2tBcHBsZXQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGlzIGFwcGxldCBpcyBuZWl0aGVyIHBpY2sgbm9yIHBvcHVwJyk7XG4gICAgICB9XG4gICAgICByZXQgPSBhcHBsZXQuR2V0UE1vZGVsKCkuRXhlY3V0ZU1ldGhvZCgnSW52b2tlTWV0aG9kJywgJ0Nsb3NlQXBwbGV0Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldCA9IHRoaXMucG9wdXBBcHBsZXROMTkuYXBwbGV0LkdldFBNb2RlbCgpLkV4ZWN1dGVNZXRob2QoJ0ludm9rZU1ldGhvZCcsICdDbG9zZUFwcGxldCcpO1xuICAgIH1cbiAgICAvLyBpdCBjb3VsZCBiZSBiZXR0ZXIgaWYgd2UgZG9uJ3QgaGF2ZSBhIFNpZWJlbCBBcHBsZXQgb24gdGhlIHZpZXdcbiAgICAvLyBkbyByZWluaXQgaGVyZSBvbiBjbG9zaW5nP1xuICAgIHRoaXMucG9wdXBBcHBsZXROMTkgPSBudWxsO1xuICAgIHRoaXMuYXNzb2NBcHBsZXROMTkgPSBudWxsO1xuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICBzdGF0aWMgSXNQb3B1cE9wZW4oKSB7IC8vIHNhZmVyIHRvIGtlZXAgdGhpcyBtZXRob2QsIGV2ZW4gd2hlbiB3ZSBzZXQgc29tZSBwcm9wZXJ0aWVzIG9uIHJlc29sdmU/XG4gICAgY29uc3QgY3VyclBvcHVwcyA9IFNpZWJlbEFwcC5TX0FwcC5HZXRQb3B1cFBNKCkuR2V0KCdjdXJyUG9wdXBzJyk7XG4gICAgaWYgKDAgPT09IGN1cnJQb3B1cHMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4geyBpc09wZW46IGZhbHNlIH07XG4gICAgfVxuICAgIGlmICgxID09PSBjdXJyUG9wdXBzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHsgaXNPcGVuOiB0cnVlLCBhcHBsZXROYW1lOiBjdXJyUG9wdXBzWzBdLkdldE5hbWUoKSwgY29udHJvbE5hbWU6IGN1cnJQb3B1cHNbMF0uR2V0UG9wdXBDb250cm9sKCkgfTtcbiAgICB9XG4gICAgaWYgKDIgPT09IGN1cnJQb3B1cHMubGVuZ3RoKSB7XG4gICAgICAvLyBpcyB0aGlzIGFsd2F5cyBhIHNodXR0bGUgd2hlbiB3ZSBoYXZlIGEgc2Vkb25kIGFwcGxldFxuICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGN1cnJQb3B1cHMubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjdXJyUG9wdXBzWzFdLkdldFBvcHVwQXBwbGV0TmFtZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHJldHVybiB7IGlzT3BlbjogdHJ1ZSwgYXBwbGV0TmFtZTogY3VyclBvcHVwc1tpXS5HZXROYW1lKCksIGNvbnRyb2xOYW1lOiBjdXJyUG9wdXBzW2ldLkdldFBvcHVwQ29udHJvbCgpIH07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcignTXZnIGFwcGxldCBpcyBub3QgZm91bmQuLi4nKTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzaG91bGQgbm90IGJlIGhlcmUuLi4nKTtcbiAgfVxuXG4gIHN0YXRpYyBHZXRQb3B1cEFwcGxldChhcHBsZXROYW1lKSB7XG4gICAgY29uc3QgYXBwbGV0ID0gU2llYmVsQXBwLlNfQXBwLkdldEFjdGl2ZVZpZXcoKS5HZXRBcHBsZXQoYXBwbGV0TmFtZSk7XG4gICAgaWYgKCFhcHBsZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIHJlZmVyZW5jZSB0byAke2FwcGxldE5hbWV9IGlzIG5vdCBpbnN0YW50aWF0ZWQuYCk7XG4gICAgfVxuICAgIHJldHVybiBhcHBsZXQ7XG4gIH1cblxuICBjaGVja09wZW5lZFBvcHVwKGNsb3NlSWZPcGVuKSB7XG4gICAgY29uc3QgeyBpc09wZW4sIGFwcGxldE5hbWUgfSA9IE4xOXBvcHVwQ29udHJvbGxlci5Jc1BvcHVwT3BlbigpO1xuICAgIGlmIChpc09wZW4gJiYgY2xvc2VJZk9wZW4pIHtcbiAgICAgIC8vIHRoaXMgY29kZSB3aWxsIGNsb3NlIHRoZSBhcHBsZXQgZXZlbiBpZiB0aGlzIGFwcGxldCB3YXMgb3JpZ2luYXRlZCBieSBhbm90aGVyIGFwcGxldFxuICAgICAgY29uc29sZS5sb2coYGNsb3NpbmcgJHthcHBsZXROYW1lfSBpbiBzaG93UG9wdXBBcHBsZXQuLi5gKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgICAvLyBtYXliZSBkbyBub3QgY2xvc2UgaWYgdGhlIGFwcGxldCB0byBiZSBvcGVuZWQgaWYgdGhlIHNhbWUgYXMgYWxyZWFkeSBvcGVuZWQ/XG4gICAgICByZXR1cm4gdGhpcy5jbG9zZVBvcHVwQXBwbGV0KE4xOXBvcHVwQ29udHJvbGxlci5HZXRQb3B1cEFwcGxldChhcHBsZXROYW1lKSk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBpc09wZW4sXG4gICAgICBhcHBsZXROYW1lLFxuICAgIH07XG4gIH1cblxuICBfb3BlbkFzc29jQXBwbGV0KG5ld1JlY29yZEZ1bmMsIGNiKSB7XG4gICAgdGhpcy5jaGVja09wZW5lZFBvcHVwKHRydWUpO1xuICAgIHRoaXMuaXNQb3B1cEhpZGRlbiA9IHRydWU7XG5cbiAgICBuZXdSZWNvcmRGdW5jKCk7IC8vIG1ha2UgYXN5bmMgb2YgaW52b2tlTWV0aG9kP1xuXG4gICAgbGV0IHJldCA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7IHRoaXMucmVzb2x2ZVByb21pc2UgPSByZXNvbHZlOyB9KTtcbiAgICBpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXQgPSByZXQudGhlbihjYik7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICBzaG93UG9wdXBBcHBsZXQoaGlkZSwgY2IsIG4xOSkge1xuICAgIC8vIFRPRE86IG1heWJlIHVzZSB0aGUgcHJvcGVydGllcyBzZXQgb24gcHJvbWlzZSByZXNvbHZpbmc/XG4gICAgdGhpcy5jaGVja09wZW5lZFBvcHVwKHRydWUpO1xuXG4gICAgdGhpcy5pc1BvcHVwSGlkZGVuID0gISFoaWRlO1xuXG4gICAgbjE5LnBtLkV4ZWN1dGVNZXRob2QoJ0ludm9rZU1ldGhvZCcsICdFZGl0UG9wdXAnKTsgLy8gY2FuIGNhbGwgRWRpdEZpZWxkP1xuXG4gICAgaWYgKGhpZGUpIHsgLy8gd2Ugd2lsbCBwb3B1bGF0ZSB0aGUgaW5zdGFuY2VzIG9ubHkgd2hlbiBhcHBsZXQgc2hvdWxkIGJlIGhpZGRlblxuICAgICAgbGV0IHJldCA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7IHRoaXMucmVzb2x2ZVByb21pc2UgPSByZXNvbHZlOyB9KTtcbiAgICAgIGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0ID0gcmV0LnRoZW4oY2IpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==