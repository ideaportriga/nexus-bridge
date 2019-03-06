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

      this.notifications.skipNewFieldDataNotifications = true; // to skip while the popup is openning

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
    var bcId = this.applet.GetBCId();
    this.notifications = new _n19notifications__WEBPACK_IMPORTED_MODULE_16__["default"](this.pm, this.consts, bcId); // populate the required array for form applets

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

        _this.lov[arr[3]] = arr.splice(5).filter(function (el) {
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

      var arr = N19baseApplet.GetStaticLOV(control.GetRadioGroupPropSet().childArray);
      var ret = arr.map(function (el) {
        return el.DisplayName;
      });
      return ret.sort();
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
          _this11.notifications.skipNewFieldDataNotifications = false;
          reject();
        },
        cb: function cb(methodName, Inputs, psOutputs) {
          _this11.notifications.skipNewFieldDataNotifications = false;
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

      if (useActiveBO) {
        this.notifications.skipNewFieldDataNotifications = true;
      }

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

      var arr = Object.keys(_controls);
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

      if (!this.fieldToControlMap) {
        this.fieldToControlMap = this._getFieldToControlMap(this._returnControls());
      } // used slice to avoid modification of the record set


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
  function N19notifications(pm, consts, bcId) {
    var _this = this;

    _classCallCheck(this, N19notifications);

    var receivedNotifications = [];
    this.token = 0;
    this.subscribers = [];
    this.skipNewFieldDataNotifications = false;
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
      var states = ['cp']; // 'n'

      if (bcId === propSet.GetProperty('bc')) {
        if (!states.includes(propSet.GetProperty('state'))) {
          receivedNotifications.push('SWE_PROP_BC_NOTI_STATE_CHANGED');
        }
      }
    });
    pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_NEW_DATA_WS'), function (propSet) {
      if (bcId === propSet.GetProperty('bc')) {
        if (!_this.skipNewFieldDataNotifications) {
          receivedNotifications.push('SWE_PROP_BC_NOTI_NEW_DATA_WS');
        }
      }
    }); // pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_NEW_FIELD_DATA'), (propSet) => {
    //   if (bcId === propSet.GetProperty('bc')) {
    //     if (!this.skipNewFieldDataNotifications) {
    //       receivedNotifications.push('SWE_PROP_BC_NOTI_NEW_FIELD_DATA');
    //     }
    //   }
    // });

    pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_GENERIC'), function (propSet) {
      var type = propSet.GetProperty(consts.get('SWE_PROP_NOTI_TYPE'));

      if ('ClosePopup' === type) {
        _this.skipNewFieldDataNotifications = false;
      }
    }); // pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_NEW_DATA'), (propSet) => {
    //   if (bcId === propSet.GetProperty('bc')) { // when does it happen
    //     receivedNotifications.push('SWE_PROP_BC_NOTI_NEW_DATA');
    //   }
    // });

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
        ret = ret.then(function (result) {
          n19.notifications.skipNewFieldDataNotifications = false; // eslint-disable-line no-param-reassign

          return result;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYW4taW5zdGFuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FycmF5LW1ldGhvZHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYXJyYXktc3BlY2llcy1jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hcnJheS1zcGVjaWVzLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jbGFzc29mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NvZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jb2xsZWN0aW9uLXN0cm9uZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jb2xsZWN0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY3JlYXRlLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2N0eC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19kZWZpbmVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2RvbS1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19lbnVtLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZXhwb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2ZhaWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2ZpeC1yZS13a3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZmxhZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZm9yLW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19oYXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faGlkZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19odG1sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2luaGVyaXQtaWYtcmVxdWlyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faW52b2tlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2lvYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXMtYXJyYXktaXRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pcy1hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pcy1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXMtcmVnZXhwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXItY2FsbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyLWRldGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyLXN0ZXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlcmF0b3JzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2xpYnJhcnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fbWV0YS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19taWNyb3Rhc2suanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fbmV3LXByb21pc2UtY2FwYWJpbGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtYXNzaWduLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWRwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1kcHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdvcGQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdvcG4tZXh0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1nb3BuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1nb3BzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1ncG8uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LXBpZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3Qtc2FwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC10by1hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19wZXJmb3JtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3Byb21pc2UtcmVzb2x2ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3JlZGVmaW5lLWFsbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19yZWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zZXQtcHJvdG8uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc2V0LXNwZWNpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc2hhcmVkLWtleS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc3BlY2llcy1jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zdHJpbmctYXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdGFzay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1hYnNvbHV0ZS1pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWlvYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1wcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdWlkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3VzZXItYWdlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdmFsaWRhdGUtY29sbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL193a3MtZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3drcy1leHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fd2tzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmZpbmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuZnJvbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5mdW5jdGlvbi5uYW1lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnByb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLmZsYWdzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5zcGxpdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAudG8tc3RyaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcuYXJyYXkuaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcub2JqZWN0LmVudHJpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcub2JqZWN0LnZhbHVlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzIiwid2VicGFjazovLy8uL3NyYy9tYWluLmpzIiwid2VicGFjazovLy8uL3NyYy9uMTliYXNlQXBwbGV0LmpzIiwid2VicGFjazovLy8uL3NyYy9uMTlub3RpZmljYXRpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9uMTlwb3B1cEFwcGxldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbjE5cG9wdXBDb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJpdCIsIlR5cGVFcnJvciIsIlVOU0NPUEFCTEVTIiwicmVxdWlyZSIsIkFycmF5UHJvdG8iLCJBcnJheSIsInByb3RvdHlwZSIsInVuZGVmaW5lZCIsImtleSIsIkNvbnN0cnVjdG9yIiwibmFtZSIsImZvcmJpZGRlbkZpZWxkIiwiaXNPYmplY3QiLCJ0b0lPYmplY3QiLCJ0b0xlbmd0aCIsInRvQWJzb2x1dGVJbmRleCIsIklTX0lOQ0xVREVTIiwiJHRoaXMiLCJlbCIsImZyb21JbmRleCIsIk8iLCJsZW5ndGgiLCJpbmRleCIsInZhbHVlIiwiY3R4IiwiSU9iamVjdCIsInRvT2JqZWN0IiwiYXNjIiwiVFlQRSIsIiRjcmVhdGUiLCJJU19NQVAiLCJJU19GSUxURVIiLCJJU19TT01FIiwiSVNfRVZFUlkiLCJJU19GSU5EX0lOREVYIiwiTk9fSE9MRVMiLCJjcmVhdGUiLCJjYWxsYmFja2ZuIiwidGhhdCIsInNlbGYiLCJmIiwicmVzdWx0IiwidmFsIiwicmVzIiwicHVzaCIsImlzQXJyYXkiLCJTUEVDSUVTIiwib3JpZ2luYWwiLCJDIiwiY29uc3RydWN0b3IiLCJzcGVjaWVzQ29uc3RydWN0b3IiLCJjb2YiLCJUQUciLCJBUkciLCJhcmd1bWVudHMiLCJ0cnlHZXQiLCJlIiwiVCIsIkIiLCJPYmplY3QiLCJjYWxsZWUiLCJ0b1N0cmluZyIsImNhbGwiLCJzbGljZSIsImRQIiwicmVkZWZpbmVBbGwiLCJhbkluc3RhbmNlIiwiZm9yT2YiLCIkaXRlckRlZmluZSIsInN0ZXAiLCJzZXRTcGVjaWVzIiwiREVTQ1JJUFRPUlMiLCJmYXN0S2V5IiwidmFsaWRhdGUiLCJTSVpFIiwiZ2V0RW50cnkiLCJlbnRyeSIsIl9pIiwiX2YiLCJuIiwiayIsImdldENvbnN0cnVjdG9yIiwid3JhcHBlciIsIk5BTUUiLCJBRERFUiIsIml0ZXJhYmxlIiwiX3QiLCJfbCIsImNsZWFyIiwiZGF0YSIsInIiLCJwIiwiaSIsIm5leHQiLCJwcmV2IiwiZm9yRWFjaCIsInYiLCJoYXMiLCJnZXQiLCJkZWYiLCJzZXRTdHJvbmciLCJpdGVyYXRlZCIsImtpbmQiLCJfayIsImdsb2JhbCIsIiRleHBvcnQiLCJyZWRlZmluZSIsIm1ldGEiLCJmYWlscyIsIiRpdGVyRGV0ZWN0Iiwic2V0VG9TdHJpbmdUYWciLCJpbmhlcml0SWZSZXF1aXJlZCIsIm1ldGhvZHMiLCJjb21tb24iLCJJU19XRUFLIiwiQmFzZSIsInByb3RvIiwiZml4TWV0aG9kIiwiS0VZIiwiZm4iLCJhIiwiYWRkIiwic2V0IiwiYiIsImVudHJpZXMiLCJORUVEIiwiaW5zdGFuY2UiLCJIQVNOVF9DSEFJTklORyIsIlRIUk9XU19PTl9QUklNSVRJVkVTIiwiQUNDRVBUX0lURVJBQkxFUyIsIml0ZXIiLCJCVUdHWV9aRVJPIiwiJGluc3RhbmNlIiwidGFyZ2V0IiwiRyIsIlciLCJGIiwiY29yZSIsInZlcnNpb24iLCJfX2UiLCIkZGVmaW5lUHJvcGVydHkiLCJjcmVhdGVEZXNjIiwib2JqZWN0IiwiYUZ1bmN0aW9uIiwiYyIsImFwcGx5IiwiZGVmaW5lUHJvcGVydHkiLCJkb2N1bWVudCIsImlzIiwiY3JlYXRlRWxlbWVudCIsInNwbGl0IiwiZ2V0S2V5cyIsImdPUFMiLCJwSUUiLCJnZXRTeW1ib2xzIiwic3ltYm9scyIsImlzRW51bSIsImhpZGUiLCJQUk9UT1RZUEUiLCJ0eXBlIiwic291cmNlIiwiSVNfRk9SQ0VEIiwiSVNfR0xPQkFMIiwiSVNfU1RBVElDIiwiUyIsIklTX1BST1RPIiwiUCIsIklTX0JJTkQiLCJleHBQcm90byIsIm93biIsIm91dCIsImV4cCIsIkZ1bmN0aW9uIiwiVSIsIlIiLCJleGVjIiwiZGVmaW5lZCIsIndrcyIsIlNZTUJPTCIsImZucyIsInN0cmZuIiwicnhmbiIsIlN0cmluZyIsIlJlZ0V4cCIsInN0cmluZyIsImFyZyIsImFuT2JqZWN0IiwiaWdub3JlQ2FzZSIsIm11bHRpbGluZSIsInVuaWNvZGUiLCJzdGlja3kiLCJpc0FycmF5SXRlciIsImdldEl0ZXJGbiIsIkJSRUFLIiwiUkVUVVJOIiwiSVRFUkFUT1IiLCJpdGVyRm4iLCJpdGVyYXRvciIsImRvbmUiLCJ3aW5kb3ciLCJNYXRoIiwiX19nIiwiaGFzT3duUHJvcGVydHkiLCJkb2N1bWVudEVsZW1lbnQiLCJzZXRQcm90b3R5cGVPZiIsImFyZ3MiLCJ1biIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwiSXRlcmF0b3JzIiwiTUFUQ0giLCJpc1JlZ0V4cCIsInJldCIsImRlc2NyaXB0b3IiLCJJdGVyYXRvclByb3RvdHlwZSIsIkxJQlJBUlkiLCIkaXRlckNyZWF0ZSIsImdldFByb3RvdHlwZU9mIiwiQlVHR1kiLCJrZXlzIiwiRkZfSVRFUkFUT1IiLCJLRVlTIiwiVkFMVUVTIiwicmV0dXJuVGhpcyIsIkRFRkFVTFQiLCJJU19TRVQiLCJGT1JDRUQiLCJnZXRNZXRob2QiLCJ2YWx1ZXMiLCJERUZfVkFMVUVTIiwiVkFMVUVTX0JVRyIsIiRuYXRpdmUiLCIkZGVmYXVsdCIsIiRlbnRyaWVzIiwiJGFueU5hdGl2ZSIsIlNBRkVfQ0xPU0lORyIsInJpdGVyIiwiZnJvbSIsInNraXBDbG9zaW5nIiwic2FmZSIsImFyciIsIk1FVEEiLCJzZXREZXNjIiwiaWQiLCJpc0V4dGVuc2libGUiLCJGUkVFWkUiLCJwcmV2ZW50RXh0ZW5zaW9ucyIsInNldE1ldGEiLCJ3IiwiZ2V0V2VhayIsIm9uRnJlZXplIiwibWFjcm90YXNrIiwiT2JzZXJ2ZXIiLCJNdXRhdGlvbk9ic2VydmVyIiwiV2ViS2l0TXV0YXRpb25PYnNlcnZlciIsInByb2Nlc3MiLCJQcm9taXNlIiwiaXNOb2RlIiwiaGVhZCIsImxhc3QiLCJub3RpZnkiLCJmbHVzaCIsInBhcmVudCIsImRvbWFpbiIsImV4aXQiLCJlbnRlciIsIm5leHRUaWNrIiwibmF2aWdhdG9yIiwic3RhbmRhbG9uZSIsInRvZ2dsZSIsIm5vZGUiLCJjcmVhdGVUZXh0Tm9kZSIsIm9ic2VydmUiLCJjaGFyYWN0ZXJEYXRhIiwicmVzb2x2ZSIsInByb21pc2UiLCJ0aGVuIiwidGFzayIsIlByb21pc2VDYXBhYmlsaXR5IiwicmVqZWN0IiwiJCRyZXNvbHZlIiwiJCRyZWplY3QiLCIkYXNzaWduIiwiYXNzaWduIiwiQSIsIlN5bWJvbCIsIksiLCJqb2luIiwiYUxlbiIsImNvbmNhdCIsImoiLCJkUHMiLCJlbnVtQnVnS2V5cyIsIklFX1BST1RPIiwiRW1wdHkiLCJjcmVhdGVEaWN0IiwiaWZyYW1lIiwibHQiLCJndCIsImlmcmFtZURvY3VtZW50Iiwic3R5bGUiLCJkaXNwbGF5IiwiYXBwZW5kQ2hpbGQiLCJzcmMiLCJjb250ZW50V2luZG93Iiwib3BlbiIsIndyaXRlIiwiY2xvc2UiLCJQcm9wZXJ0aWVzIiwiSUU4X0RPTV9ERUZJTkUiLCJ0b1ByaW1pdGl2ZSIsIkF0dHJpYnV0ZXMiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiZ09QRCIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImdPUE4iLCJ3aW5kb3dOYW1lcyIsImdldE93blByb3BlcnR5TmFtZXMiLCJnZXRXaW5kb3dOYW1lcyIsIiRrZXlzIiwiaGlkZGVuS2V5cyIsImdldE93blByb3BlcnR5U3ltYm9scyIsIk9iamVjdFByb3RvIiwiYXJyYXlJbmRleE9mIiwibmFtZXMiLCJpc0VudHJpZXMiLCJuZXdQcm9taXNlQ2FwYWJpbGl0eSIsIngiLCJwcm9taXNlQ2FwYWJpbGl0eSIsImJpdG1hcCIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIlNSQyIsIlRPX1NUUklORyIsIiR0b1N0cmluZyIsIlRQTCIsImluc3BlY3RTb3VyY2UiLCJpc0Z1bmN0aW9uIiwiY2hlY2siLCJ0ZXN0IiwiYnVnZ3kiLCJfX3Byb3RvX18iLCJ0YWciLCJzdGF0Iiwic2hhcmVkIiwidWlkIiwiU0hBUkVEIiwic3RvcmUiLCJtb2RlIiwiY29weXJpZ2h0IiwiRCIsInRvSW50ZWdlciIsInBvcyIsInMiLCJsIiwiY2hhckNvZGVBdCIsImNoYXJBdCIsImludm9rZSIsImh0bWwiLCJjZWwiLCJzZXRUYXNrIiwic2V0SW1tZWRpYXRlIiwiY2xlYXJUYXNrIiwiY2xlYXJJbW1lZGlhdGUiLCJNZXNzYWdlQ2hhbm5lbCIsIkRpc3BhdGNoIiwiY291bnRlciIsInF1ZXVlIiwiT05SRUFEWVNUQVRFQ0hBTkdFIiwiZGVmZXIiLCJjaGFubmVsIiwicG9ydCIsInJ1biIsImxpc3RlbmVyIiwiZXZlbnQiLCJub3ciLCJwb3J0MiIsInBvcnQxIiwib25tZXNzYWdlIiwicG9zdE1lc3NhZ2UiLCJhZGRFdmVudExpc3RlbmVyIiwiaW1wb3J0U2NyaXB0cyIsInJlbW92ZUNoaWxkIiwic2V0VGltZW91dCIsIm1heCIsIm1pbiIsImNlaWwiLCJmbG9vciIsImlzTmFOIiwidmFsdWVPZiIsInB4IiwicmFuZG9tIiwidXNlckFnZW50Iiwid2tzRXh0IiwiJFN5bWJvbCIsIlVTRV9TWU1CT0wiLCIkZXhwb3J0cyIsImNsYXNzb2YiLCJnZXRJdGVyYXRvck1ldGhvZCIsIiRmaW5kIiwiZm9yY2VkIiwiZmluZCIsImNyZWF0ZVByb3BlcnR5IiwiYXJyYXlMaWtlIiwibWFwZm4iLCJtYXBwaW5nIiwiYWRkVG9VbnNjb3BhYmxlcyIsIkFyZ3VtZW50cyIsIkZQcm90byIsIm5hbWVSRSIsIm1hdGNoIiwic3Ryb25nIiwiTUFQIiwiTWFwIiwibWljcm90YXNrIiwibmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUiLCJwZXJmb3JtIiwicHJvbWlzZVJlc29sdmUiLCJQUk9NSVNFIiwidmVyc2lvbnMiLCJ2OCIsIiRQcm9taXNlIiwiZW1wdHkiLCJJbnRlcm5hbCIsIm5ld0dlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSIsIk93blByb21pc2VDYXBhYmlsaXR5IiwiV3JhcHBlciIsIlVTRV9OQVRJVkUiLCJGYWtlUHJvbWlzZSIsIlByb21pc2VSZWplY3Rpb25FdmVudCIsImluZGV4T2YiLCJpc1RoZW5hYmxlIiwiaXNSZWplY3QiLCJfbiIsImNoYWluIiwiX2MiLCJfdiIsIm9rIiwiX3MiLCJyZWFjdGlvbiIsImhhbmRsZXIiLCJmYWlsIiwiZXhpdGVkIiwiX2giLCJvbkhhbmRsZVVuaGFuZGxlZCIsIm9uVW5oYW5kbGVkIiwidW5oYW5kbGVkIiwiaXNVbmhhbmRsZWQiLCJjb25zb2xlIiwiZW1pdCIsIm9udW5oYW5kbGVkcmVqZWN0aW9uIiwicmVhc29uIiwiZXJyb3IiLCJfYSIsIm9ucmVqZWN0aW9uaGFuZGxlZCIsIiRyZWplY3QiLCJfZCIsIl93IiwiJHJlc29sdmUiLCJleGVjdXRvciIsImVyciIsIm9uRnVsZmlsbGVkIiwib25SZWplY3RlZCIsImNhcGFiaWxpdHkiLCJhbGwiLCJyZW1haW5pbmciLCIkaW5kZXgiLCJhbHJlYWR5Q2FsbGVkIiwicmFjZSIsImZsYWdzIiwiU1BMSVQiLCIkc3BsaXQiLCJfc3BsaXQiLCIkcHVzaCIsIiRTUExJVCIsIkxFTkdUSCIsIkxBU1RfSU5ERVgiLCJOUENHIiwic2VwYXJhdG9yIiwibGltaXQiLCJvdXRwdXQiLCJsYXN0TGFzdEluZGV4Iiwic3BsaXRMaW1pdCIsInNlcGFyYXRvckNvcHkiLCJzZXBhcmF0b3IyIiwibGFzdEluZGV4IiwibGFzdExlbmd0aCIsInJlcGxhY2UiLCIkZmxhZ3MiLCJkZWZpbmUiLCIkYXQiLCJwb2ludCIsIiRmYWlscyIsIndrc0RlZmluZSIsImVudW1LZXlzIiwiX2NyZWF0ZSIsImdPUE5FeHQiLCIkR09QRCIsIiREUCIsIiRKU09OIiwiSlNPTiIsIl9zdHJpbmdpZnkiLCJzdHJpbmdpZnkiLCJISURERU4iLCJUT19QUklNSVRJVkUiLCJTeW1ib2xSZWdpc3RyeSIsIkFsbFN5bWJvbHMiLCJPUFN5bWJvbHMiLCJRT2JqZWN0Iiwic2V0dGVyIiwiZmluZENoaWxkIiwic2V0U3ltYm9sRGVzYyIsInByb3RvRGVzYyIsIndyYXAiLCJzeW0iLCJpc1N5bWJvbCIsIiRkZWZpbmVQcm9wZXJ0aWVzIiwiJHByb3BlcnR5SXNFbnVtZXJhYmxlIiwiRSIsIiRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCIkZ2V0T3duUHJvcGVydHlOYW1lcyIsIiRnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJJU19PUCIsIiRzZXQiLCJlczZTeW1ib2xzIiwid2VsbEtub3duU3ltYm9scyIsImtleUZvciIsInVzZVNldHRlciIsInVzZVNpbXBsZSIsInJlcGxhY2VyIiwiJHJlcGxhY2VyIiwiJGluY2x1ZGVzIiwiaW5jbHVkZXMiLCIkdmFsdWVzIiwiJGl0ZXJhdG9ycyIsIlRPX1NUUklOR19UQUciLCJBcnJheVZhbHVlcyIsIkRPTUl0ZXJhYmxlcyIsIkNTU1J1bGVMaXN0IiwiQ1NTU3R5bGVEZWNsYXJhdGlvbiIsIkNTU1ZhbHVlTGlzdCIsIkNsaWVudFJlY3RMaXN0IiwiRE9NUmVjdExpc3QiLCJET01TdHJpbmdMaXN0IiwiRE9NVG9rZW5MaXN0IiwiRGF0YVRyYW5zZmVySXRlbUxpc3QiLCJGaWxlTGlzdCIsIkhUTUxBbGxDb2xsZWN0aW9uIiwiSFRNTENvbGxlY3Rpb24iLCJIVE1MRm9ybUVsZW1lbnQiLCJIVE1MU2VsZWN0RWxlbWVudCIsIk1lZGlhTGlzdCIsIk1pbWVUeXBlQXJyYXkiLCJOYW1lZE5vZGVNYXAiLCJOb2RlTGlzdCIsIlBhaW50UmVxdWVzdExpc3QiLCJQbHVnaW4iLCJQbHVnaW5BcnJheSIsIlNWR0xlbmd0aExpc3QiLCJTVkdOdW1iZXJMaXN0IiwiU1ZHUGF0aFNlZ0xpc3QiLCJTVkdQb2ludExpc3QiLCJTVkdTdHJpbmdMaXN0IiwiU1ZHVHJhbnNmb3JtTGlzdCIsIlNvdXJjZUJ1ZmZlckxpc3QiLCJTdHlsZVNoZWV0TGlzdCIsIlRleHRUcmFja0N1ZUxpc3QiLCJUZXh0VHJhY2tMaXN0IiwiVG91Y2hMaXN0IiwiY29sbGVjdGlvbnMiLCJleHBsaWNpdCIsIkNvbGxlY3Rpb24iLCJTaWViZWxBcHBGYWNhZGUiLCJOMTlIZWxwZXIiLCJzZXR0aW5ncyIsImFwcGxldE5hbWUiLCJhcHBsZXQiLCJTaWViZWxBcHAiLCJTX0FwcCIsIkdldEFjdGl2ZVZpZXciLCJHZXRBcHBsZXQiLCJFcnJvciIsInBtIiwiR2V0UE1vZGVsIiwibG9nIiwibjE5cG9wdXBDb250cm9sbGVyIiwiTjE5cG9wdXBDb250cm9sbGVyIiwiY2xvc2VQb3B1cEFwcGxldCIsImNiIiwiY2FuT3BlblBvcHVwIiwidmlldyIsIlNldEFjdGl2ZUFwcGxldEludGVybmFsIiwiX3NldEFjdGl2ZUNvbnRyb2wiLCJub3RpZmljYXRpb25zIiwic2tpcE5ld0ZpZWxkRGF0YU5vdGlmaWNhdGlvbnMiLCJzaG93UG9wdXBBcHBsZXQiLCJfc2hvd1BvcHVwQXBwbGV0IiwiX29wZW5Bc3NvY0FwcGxldCIsIm5ld1JlY29yZCIsImJpbmQiLCJjb250cm9sTmFtZSIsImlzTGlzdEFwcGxldCIsImdldFNlbGVjdGlvbiIsIkV4ZWN1dGVNZXRob2QiLCJ0YXJnZXRWaWV3TmFtZSIsInRhcmdldEFwcGxldE5hbWUiLCJyb3dJZCIsImdldEN1cnJlbnRSZWNvcmQiLCJJZCIsIlNXRUNtZCIsImVuY29kZVVSSSIsIkdvdG9WaWV3IiwiaXNQb3B1cEhpZGRlbiIsInBvcHVwUE0iLCJHZXRQb3B1cFBNIiwiSW5pdCIsIlNldHVwIiwiTjE5YmFzZUFwcGxldCIsImNvbnN0cyIsIlNpZWJlbEpTIiwiRGVwZW5kZW5jeSIsInV0aWxzIiwiY29udmVydERhdGVzIiwiR2V0IiwicmVxdWlyZWQiLCJsb3YiLCJib29sT2JqZWN0IiwiRGF0dW1Cb29sT2JqZWN0IiwibG9hZExvY2FsZURhdGEiLCJiY0lkIiwiR2V0QkNJZCIsIk4xOW5vdGlmaWNhdGlvbnMiLCJhcHBsZXRJZCIsImFwcGxldElucHV0cyIsImdldEVsZW1lbnRCeUlkIiwicXVlcnlTZWxlY3RvckFsbCIsImF0dHJpYnV0ZXMiLCJub2RlVmFsdWUiLCJBdHRhY2hQTUJpbmRpbmciLCJpbnB1dE5hbWUiLCJ2aWV3TmFtZSIsIkdldE5hbWUiLCJ3YXJuIiwic3BsaWNlIiwiZmlsdGVyIiwic2NvcGUiLCJpc1RyZWVBcHBsZXQiLCJFeHBsb3JlclByZXNlbnRhdGlvbk1vZGVsIiwibG9jYWxlT2JqZWN0IiwiTG9jYWxlT2JqZWN0IiwiZGF0ZVRpbWVGb3JtYXQiLCJHZXRQcm9maWxlIiwibG9jYWxlRGF0YSIsImZpcnN0RGF5T2ZXZWVrIiwiR2V0V2Vla1N0YXJ0RGF5IiwiZGF0ZUZvcm1hdCIsImlzMjRob3Vyc0Zvcm1hdCIsImxvY2FsQ291bnRyeVBob25lQ29kZSIsIm1vbnRocyIsInNob3J0TW9udGhzIiwiR2V0RGF0YSIsIm1fc3BNb250aFBTIiwiR2V0UHJvcGVydHkiLCJ3ZWVrRGF5cyIsIm1fc3BEYXlPZldlZWtQUyIsIndlZWtEYXlzMyIsIndlZWtEYXlzMSIsImZ1bmMiLCJzdWJzY3JpYmUiLCJ0b2tlbiIsInVuc3Vic2NyaWJlIiwiX2dldENvbnRyb2wiLCJ1aVR5cGUiLCJkaXNwbGF5Rm9ybWF0IiwiU2V0VmFsdWUiLCJHZXRBc1N0cmluZyIsIl9pc0RhdGVUaW1lQ29udHJvbCIsImRhdGUiLCJ0b0xvY2FsZVN0cmluZyIsImhvdXIxMiIsIkdldFN0cmluZ0Zyb21EYXRlVGltZSIsIm1ldGhvZCIsImNhbkludm9rZU1ldGhvZCIsImNvbnRyb2xzIiwiYXBwbGV0Q29udHJvbHMiLCJfcmV0dXJuQ29udHJvbHMiLCJjb250cm9sRW50cnkiLCJjb250cm9sIiwiR2V0VUlUeXBlIiwiR2V0RGlzcGxheUZvcm1hdCIsImdldENvbnRyb2xEaXNwbGF5Rm9ybWF0IiwiX2lzU2tpcENvbnRyb2wiLCJHZXRJbnB1dE5hbWUiLCJmaWVsZE5hbWUiLCJHZXRGaWVsZE5hbWUiLCJvYmoiLCJsYWJlbCIsIkdldERpc3BsYXlOYW1lIiwiX2lzUmVxdWlyZWQiLCJib3VuZGVkUGljayIsIklzQm91bmRlZFBpY2siLCJzdGF0aWNQaWNrIiwiSXNTdGF0aWNCb3VuZGVkIiwiaXNQb3N0Q2hhbmdlcyIsIklzUG9zdENoYW5nZXMiLCJtYXhTaXplIiwiR2V0TWF4U2l6ZSIsImlzTGluayIsInJlYWRvbmx5IiwiZGF0YVR5cGUiLCJzdGF0aWNMT1YiLCJHZXRTdGF0aWNMT1YiLCJHZXRSYWRpb0dyb3VwUHJvcFNldCIsImNoaWxkQXJyYXkiLCJsb3ZzIiwicmVkdWNlIiwiYWNjIiwibGljIiwiRmllbGRWYWx1ZSIsIkRpc3BsYXlOYW1lIiwiYWRkUmVjb3JkSW5kZXgiLCJtYXAiLCJfaW5keCIsIl9uYXZpZ2F0ZSIsImdldFJvd0xpc3RSb3dDb3VudCIsInBvc2l0aW9uT25Sb3ciLCJfbmV3UmVjb3JkIiwiYXN5bmMiLCJjYmVyciIsIl93cml0ZVJlY29yZCIsImNhdGNoIiwiX2dldFNpZWJlbFZhbHVlIiwiX3NldENvbnRyb2xWYWx1ZUludGVybmFsIiwiT25Db250cm9sRXZlbnQiLCJpc1N0YXRpYyIsImlzU3RhdGljUGljayIsIl92YWxpZGF0ZVBpY2tDb250cm9sIiwiY29udHJvbElucHV0TmFtZSIsInBzIiwiTmV3UHJvcGVydHlTZXQiLCJTZXRQcm9wZXJ0eSIsInNvcnQiLCJTZXRBc1N0cmluZyIsIkdldFZhbHVlIiwiSVNPIiwiVG9JU09Gb3JtYXQiLCJHZXRJU09EYXRlVGltZSIsIkRhdGUiLCJyYXciLCJnZXRSYXdSZWNvcmRTZXQiLCJnZXRSZWNvcmRTZXQiLCJiYyIsIklzSW5zZXJ0UGVuZGluZyIsIklzQ29tbWl0UGVuZGluZyIsImNvbnRyb2xNZXRob2QiLCJHZXRNZXRob2ROYW1lIiwiX2NvbnRyb2xzIiwiX21ldGhvZHMiLCJnZXRDb250cm9scyIsIl9nZXRNZXRob2RzIiwic3RhdGUiLCJjYWxjdWxhdGVDdXJyZW50UmVjb3JkU3RhdGUiLCJfZ2V0SlNWYWx1ZSIsIm1ldGhvZE5hbWUiLCJmb3VuZCIsImNvbnRyb2xVaVR5cGUiLCJleHByIiwiX25ld1F1ZXJ5IiwiX2ZpbmRDb250cm9sVG9FbnRlclNlYXJjaEV4cHIiLCJxdWVyeUJ5U2VhcmNoRXhwclN5bmMiLCJfcXVlcnlCeUlkIiwiYWkiLCJzZWxmYnVzeSIsInBhcmFtcyIsIl9xdWVyeSIsImlkcyIsImZpZWxkcyIsInVzZUFjdGl2ZUJPIiwiX2dldE1WRiIsInBzSW5wdXRzIiwiR2V0QWN0aXZlQnVzT2JqIiwiU2V0VHlwZSIsIl9nZXRGaWVsZE5hbWVGb3JDb250cm9sIiwiQWRkQ2hpbGQiLCJDbG9uZSIsImJzIiwiR2V0U2VydmljZSIsImVycmNiIiwiSW5wdXRzIiwicHNPdXRwdXRzIiwiR2V0Q2hpbGRCeVR5cGUiLCJjaGlsZCIsIkdldFR5cGUiLCJncmFuZENoaWxkIiwicmVjIiwicHJpbWFyeSIsInByb3BBcnJheSIsIkludm9rZU1ldGhvZCIsInBzSW5wdXQiLCJhbW91bnQiLCJzaXplIiwibmV4dFJlY29yZFNldCIsImhhc05leHQiLCJTZXRDb250cm9sVmFsdWVCeU5hbWUiLCJmaWVsZFRvQ29udHJvbE1hcCIsIl9nZXRGaWVsZFRvQ29udHJvbE1hcCIsInJhd1JlY29yZFNldCIsImxlbiIsImlzQXNjZW5kaW5nIiwic29ydE9yZGVyIiwiT25DbGlja1NvcnQiLCJzZXJ2aWNlIiwiaW5Qcm9wU2V0IiwicmVjZWl2ZWROb3RpZmljYXRpb25zIiwic3Vic2NyaWJlcnMiLCJBdHRhY2hOb3RpZmljYXRpb25IYW5kbGVyIiwicHJvcFNldCIsInN0YXRlcyIsInN1YlRva2VuIiwiTjE5cG9wdXBBcHBsZXQiLCJHZXRSZW5kZXJlciIsInJlc2l6ZSIsIkdldFNlbGVjdGVkUm93Iiwic2luZ2xldG9uIiwic2luZ2xldG9uRW5mb3JjZXIiLCJlbmZvcmNlciIsInJlc29sdmVQcm9taXNlIiwicG9wdXBBcHBsZXROMTkiLCJhc3NvY0FwcGxldE4xOSIsIk4xOXJlc2l6ZUF2YWlsYWJsZSIsIk12Z0JlYXV0aWZpZXIiLCJyZXNpemVBdmFpbGFibGUiLCJtZXNzYWdlIiwiTjE5cHJvY2Vzc05ld1BvcHVwIiwiUHJvY2Vzc05ld1BvcHVwIiwicHJvY2Vzc05ld1BvcHVwIiwiTjE5dmlld0xvYWRlZCIsImNvbnRlbnRVcGRhdGVyIiwidmlld0xvYWRlZCIsIklzUG9wdXBPcGVuIiwiR2V0UG9wdXBBcHBsZXQiLCJhc3NvY0FwcGxldCIsImFjdGl2ZVZpZXciLCJhY3RpdmVBcHBsZXQiLCJHZXRBY3RpdmVBcHBsZXQiLCJTZXRBY3RpdmVBcHBsZXRCZWZvcmVQb3B1cCIsIkFkZFByb3BlcnR5IiwidXJsIiwiR2V0UGFnZVVSTCIsImlzUG9wdXBBcHBsZXQiLCJHZXRQb3B1cEFwcGxldE5hbWUiLCJpc1BpY2tBcHBsZXQiLCJHZXRQaWNrQXBwbGV0TmFtZSIsImNsb3NlSWZPcGVuIiwiaXNPcGVuIiwibmV3UmVjb3JkRnVuYyIsImNoZWNrT3BlbmVkUG9wdXAiLCJuMTkiLCJjdXJyUG9wdXBzIiwiR2V0UG9wdXBDb250cm9sIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7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RDs7QUFDRCxVQUFJLE1BQU1ELFVBQVUsQ0FBQ3IwQixNQUFyQixFQUE2QjtBQUMzQjtBQUNBLGFBQUssSUFBSXVFLENBQUMsR0FBRyxDQUFSLEVBQVcyc0IsR0FBRyxHQUFHbUQsVUFBVSxDQUFDcjBCLE1BQWpDLEVBQXlDdUUsQ0FBQyxHQUFHMnNCLEdBQTdDLEVBQWtEM3NCLENBQUMsSUFBSSxDQUF2RCxFQUEwRDtBQUN4RCxjQUFJLE9BQU84dkIsVUFBVSxDQUFDLENBQUQsQ0FBVixDQUFjUixrQkFBckIsS0FBNEMsVUFBaEQsRUFBNEQ7QUFDMUQsbUJBQU87QUFBRUksb0JBQU0sRUFBRSxJQUFWO0FBQWdCdlIsd0JBQVUsRUFBRTJSLFVBQVUsQ0FBQzl2QixDQUFELENBQVYsQ0FBY3FpQixPQUFkLEVBQTVCO0FBQXFEekMseUJBQVcsRUFBRWtRLFVBQVUsQ0FBQzl2QixDQUFELENBQVYsQ0FBYyt2QixlQUFkO0FBQWxFLGFBQVA7QUFDRDtBQUNGOztBQUNELGNBQU0sSUFBSXRSLEtBQUosQ0FBVSw0QkFBVixDQUFOO0FBQ0Q7O0FBQ0QsWUFBTSxJQUFJQSxLQUFKLENBQVUsdUJBQVYsQ0FBTjtBQUNEOzs7bUNBRXFCTixVLEVBQVk7QUFDaEMsVUFBTUMsTUFBTSxHQUFHQyxTQUFTLENBQUNDLEtBQVYsQ0FBZ0JDLGFBQWhCLEdBQWdDQyxTQUFoQyxDQUEwQ0wsVUFBMUMsQ0FBZjs7QUFDQSxVQUFJLENBQUNDLE1BQUwsRUFBYTtBQUNYLGNBQU0sSUFBSUssS0FBSiw0QkFBOEJOLFVBQTlCLDJCQUFOO0FBQ0Q7O0FBQ0QsYUFBT0MsTUFBUDtBQUNEIiwiZmlsZSI6Ik4xOUhlbHBlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICh0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJykgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsIi8vIDIyLjEuMy4zMSBBcnJheS5wcm90b3R5cGVbQEB1bnNjb3BhYmxlc11cbnZhciBVTlNDT1BBQkxFUyA9IHJlcXVpcmUoJy4vX3drcycpKCd1bnNjb3BhYmxlcycpO1xudmFyIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5pZiAoQXJyYXlQcm90b1tVTlNDT1BBQkxFU10gPT0gdW5kZWZpbmVkKSByZXF1aXJlKCcuL19oaWRlJykoQXJyYXlQcm90bywgVU5TQ09QQUJMRVMsIHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICBBcnJheVByb3RvW1VOU0NPUEFCTEVTXVtrZXldID0gdHJ1ZTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgQ29uc3RydWN0b3IsIG5hbWUsIGZvcmJpZGRlbkZpZWxkKSB7XG4gIGlmICghKGl0IGluc3RhbmNlb2YgQ29uc3RydWN0b3IpIHx8IChmb3JiaWRkZW5GaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZvcmJpZGRlbkZpZWxkIGluIGl0KSkge1xuICAgIHRocm93IFR5cGVFcnJvcihuYW1lICsgJzogaW5jb3JyZWN0IGludm9jYXRpb24hJyk7XG4gIH0gcmV0dXJuIGl0O1xufTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsIi8vIGZhbHNlIC0+IEFycmF5I2luZGV4T2Zcbi8vIHRydWUgIC0+IEFycmF5I2luY2x1ZGVzXG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi9fdG8tYWJzb2x1dGUtaW5kZXgnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKElTX0lOQ0xVREVTKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIGVsLCBmcm9tSW5kZXgpIHtcbiAgICB2YXIgTyA9IHRvSU9iamVjdCgkdGhpcyk7XG4gICAgdmFyIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICB2YXIgaW5kZXggPSB0b0Fic29sdXRlSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpO1xuICAgIHZhciB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgIGlmIChJU19JTkNMVURFUyAmJiBlbCAhPSBlbCkgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSB7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgICBpZiAodmFsdWUgIT0gdmFsdWUpIHJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I2luZGV4T2YgaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIGlmIChJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKSB7XG4gICAgICBpZiAoT1tpbmRleF0gPT09IGVsKSByZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59O1xuIiwiLy8gMCAtPiBBcnJheSNmb3JFYWNoXG4vLyAxIC0+IEFycmF5I21hcFxuLy8gMiAtPiBBcnJheSNmaWx0ZXJcbi8vIDMgLT4gQXJyYXkjc29tZVxuLy8gNCAtPiBBcnJheSNldmVyeVxuLy8gNSAtPiBBcnJheSNmaW5kXG4vLyA2IC0+IEFycmF5I2ZpbmRJbmRleFxudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIGFzYyA9IHJlcXVpcmUoJy4vX2FycmF5LXNwZWNpZXMtY3JlYXRlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChUWVBFLCAkY3JlYXRlKSB7XG4gIHZhciBJU19NQVAgPSBUWVBFID09IDE7XG4gIHZhciBJU19GSUxURVIgPSBUWVBFID09IDI7XG4gIHZhciBJU19TT01FID0gVFlQRSA9PSAzO1xuICB2YXIgSVNfRVZFUlkgPSBUWVBFID09IDQ7XG4gIHZhciBJU19GSU5EX0lOREVYID0gVFlQRSA9PSA2O1xuICB2YXIgTk9fSE9MRVMgPSBUWVBFID09IDUgfHwgSVNfRklORF9JTkRFWDtcbiAgdmFyIGNyZWF0ZSA9ICRjcmVhdGUgfHwgYXNjO1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBjYWxsYmFja2ZuLCB0aGF0KSB7XG4gICAgdmFyIE8gPSB0b09iamVjdCgkdGhpcyk7XG4gICAgdmFyIHNlbGYgPSBJT2JqZWN0KE8pO1xuICAgIHZhciBmID0gY3R4KGNhbGxiYWNrZm4sIHRoYXQsIDMpO1xuICAgIHZhciBsZW5ndGggPSB0b0xlbmd0aChzZWxmLmxlbmd0aCk7XG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICB2YXIgcmVzdWx0ID0gSVNfTUFQID8gY3JlYXRlKCR0aGlzLCBsZW5ndGgpIDogSVNfRklMVEVSID8gY3JlYXRlKCR0aGlzLCAwKSA6IHVuZGVmaW5lZDtcbiAgICB2YXIgdmFsLCByZXM7XG4gICAgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIGlmIChOT19IT0xFUyB8fCBpbmRleCBpbiBzZWxmKSB7XG4gICAgICB2YWwgPSBzZWxmW2luZGV4XTtcbiAgICAgIHJlcyA9IGYodmFsLCBpbmRleCwgTyk7XG4gICAgICBpZiAoVFlQRSkge1xuICAgICAgICBpZiAoSVNfTUFQKSByZXN1bHRbaW5kZXhdID0gcmVzOyAgIC8vIG1hcFxuICAgICAgICBlbHNlIGlmIChyZXMpIHN3aXRjaCAoVFlQRSkge1xuICAgICAgICAgIGNhc2UgMzogcmV0dXJuIHRydWU7ICAgICAgICAgICAgIC8vIHNvbWVcbiAgICAgICAgICBjYXNlIDU6IHJldHVybiB2YWw7ICAgICAgICAgICAgICAvLyBmaW5kXG4gICAgICAgICAgY2FzZSA2OiByZXR1cm4gaW5kZXg7ICAgICAgICAgICAgLy8gZmluZEluZGV4XG4gICAgICAgICAgY2FzZSAyOiByZXN1bHQucHVzaCh2YWwpOyAgICAgICAgLy8gZmlsdGVyXG4gICAgICAgIH0gZWxzZSBpZiAoSVNfRVZFUlkpIHJldHVybiBmYWxzZTsgLy8gZXZlcnlcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIElTX0ZJTkRfSU5ERVggPyAtMSA6IElTX1NPTUUgfHwgSVNfRVZFUlkgPyBJU19FVkVSWSA6IHJlc3VsdDtcbiAgfTtcbn07XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi9faXMtYXJyYXknKTtcbnZhciBTUEVDSUVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3JpZ2luYWwpIHtcbiAgdmFyIEM7XG4gIGlmIChpc0FycmF5KG9yaWdpbmFsKSkge1xuICAgIEMgPSBvcmlnaW5hbC5jb25zdHJ1Y3RvcjtcbiAgICAvLyBjcm9zcy1yZWFsbSBmYWxsYmFja1xuICAgIGlmICh0eXBlb2YgQyA9PSAnZnVuY3Rpb24nICYmIChDID09PSBBcnJheSB8fCBpc0FycmF5KEMucHJvdG90eXBlKSkpIEMgPSB1bmRlZmluZWQ7XG4gICAgaWYgKGlzT2JqZWN0KEMpKSB7XG4gICAgICBDID0gQ1tTUEVDSUVTXTtcbiAgICAgIGlmIChDID09PSBudWxsKSBDID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfSByZXR1cm4gQyA9PT0gdW5kZWZpbmVkID8gQXJyYXkgOiBDO1xufTtcbiIsIi8vIDkuNC4yLjMgQXJyYXlTcGVjaWVzQ3JlYXRlKG9yaWdpbmFsQXJyYXksIGxlbmd0aClcbnZhciBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuL19hcnJheS1zcGVjaWVzLWNvbnN0cnVjdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9yaWdpbmFsLCBsZW5ndGgpIHtcbiAgcmV0dXJuIG5ldyAoc3BlY2llc0NvbnN0cnVjdG9yKG9yaWdpbmFsKSkobGVuZ3RoKTtcbn07XG4iLCIvLyBnZXR0aW5nIHRhZyBmcm9tIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xudmFyIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuLy8gRVMzIHdyb25nIGhlcmVcbnZhciBBUkcgPSBjb2YoZnVuY3Rpb24gKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID09ICdBcmd1bWVudHMnO1xuXG4vLyBmYWxsYmFjayBmb3IgSUUxMSBTY3JpcHQgQWNjZXNzIERlbmllZCBlcnJvclxudmFyIHRyeUdldCA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIE8sIFQsIEI7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mIChUID0gdHJ5R2V0KE8gPSBPYmplY3QoaXQpLCBUQUcpKSA9PSAnc3RyaW5nJyA/IFRcbiAgICAvLyBidWlsdGluVGFnIGNhc2VcbiAgICA6IEFSRyA/IGNvZihPKVxuICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcbiAgICA6IChCID0gY29mKE8pKSA9PSAnT2JqZWN0JyAmJiB0eXBlb2YgTy5jYWxsZWUgPT0gJ2Z1bmN0aW9uJyA/ICdBcmd1bWVudHMnIDogQjtcbn07XG4iLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKTtcbnZhciByZWRlZmluZUFsbCA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lLWFsbCcpO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGFuSW5zdGFuY2UgPSByZXF1aXJlKCcuL19hbi1pbnN0YW5jZScpO1xudmFyIGZvck9mID0gcmVxdWlyZSgnLi9fZm9yLW9mJyk7XG52YXIgJGl0ZXJEZWZpbmUgPSByZXF1aXJlKCcuL19pdGVyLWRlZmluZScpO1xudmFyIHN0ZXAgPSByZXF1aXJlKCcuL19pdGVyLXN0ZXAnKTtcbnZhciBzZXRTcGVjaWVzID0gcmVxdWlyZSgnLi9fc2V0LXNwZWNpZXMnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyk7XG52YXIgZmFzdEtleSA9IHJlcXVpcmUoJy4vX21ldGEnKS5mYXN0S2V5O1xudmFyIHZhbGlkYXRlID0gcmVxdWlyZSgnLi9fdmFsaWRhdGUtY29sbGVjdGlvbicpO1xudmFyIFNJWkUgPSBERVNDUklQVE9SUyA/ICdfcycgOiAnc2l6ZSc7XG5cbnZhciBnZXRFbnRyeSA9IGZ1bmN0aW9uICh0aGF0LCBrZXkpIHtcbiAgLy8gZmFzdCBjYXNlXG4gIHZhciBpbmRleCA9IGZhc3RLZXkoa2V5KTtcbiAgdmFyIGVudHJ5O1xuICBpZiAoaW5kZXggIT09ICdGJykgcmV0dXJuIHRoYXQuX2lbaW5kZXhdO1xuICAvLyBmcm96ZW4gb2JqZWN0IGNhc2VcbiAgZm9yIChlbnRyeSA9IHRoYXQuX2Y7IGVudHJ5OyBlbnRyeSA9IGVudHJ5Lm4pIHtcbiAgICBpZiAoZW50cnkuayA9PSBrZXkpIHJldHVybiBlbnRyeTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGdldENvbnN0cnVjdG9yOiBmdW5jdGlvbiAod3JhcHBlciwgTkFNRSwgSVNfTUFQLCBBRERFUikge1xuICAgIHZhciBDID0gd3JhcHBlcihmdW5jdGlvbiAodGhhdCwgaXRlcmFibGUpIHtcbiAgICAgIGFuSW5zdGFuY2UodGhhdCwgQywgTkFNRSwgJ19pJyk7XG4gICAgICB0aGF0Ll90ID0gTkFNRTsgICAgICAgICAvLyBjb2xsZWN0aW9uIHR5cGVcbiAgICAgIHRoYXQuX2kgPSBjcmVhdGUobnVsbCk7IC8vIGluZGV4XG4gICAgICB0aGF0Ll9mID0gdW5kZWZpbmVkOyAgICAvLyBmaXJzdCBlbnRyeVxuICAgICAgdGhhdC5fbCA9IHVuZGVmaW5lZDsgICAgLy8gbGFzdCBlbnRyeVxuICAgICAgdGhhdFtTSVpFXSA9IDA7ICAgICAgICAgLy8gc2l6ZVxuICAgICAgaWYgKGl0ZXJhYmxlICE9IHVuZGVmaW5lZCkgZm9yT2YoaXRlcmFibGUsIElTX01BUCwgdGhhdFtBRERFUl0sIHRoYXQpO1xuICAgIH0pO1xuICAgIHJlZGVmaW5lQWxsKEMucHJvdG90eXBlLCB7XG4gICAgICAvLyAyMy4xLjMuMSBNYXAucHJvdG90eXBlLmNsZWFyKClcbiAgICAgIC8vIDIzLjIuMy4yIFNldC5wcm90b3R5cGUuY2xlYXIoKVxuICAgICAgY2xlYXI6IGZ1bmN0aW9uIGNsZWFyKCkge1xuICAgICAgICBmb3IgKHZhciB0aGF0ID0gdmFsaWRhdGUodGhpcywgTkFNRSksIGRhdGEgPSB0aGF0Ll9pLCBlbnRyeSA9IHRoYXQuX2Y7IGVudHJ5OyBlbnRyeSA9IGVudHJ5Lm4pIHtcbiAgICAgICAgICBlbnRyeS5yID0gdHJ1ZTtcbiAgICAgICAgICBpZiAoZW50cnkucCkgZW50cnkucCA9IGVudHJ5LnAubiA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBkZWxldGUgZGF0YVtlbnRyeS5pXTtcbiAgICAgICAgfVxuICAgICAgICB0aGF0Ll9mID0gdGhhdC5fbCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhhdFtTSVpFXSA9IDA7XG4gICAgICB9LFxuICAgICAgLy8gMjMuMS4zLjMgTWFwLnByb3RvdHlwZS5kZWxldGUoa2V5KVxuICAgICAgLy8gMjMuMi4zLjQgU2V0LnByb3RvdHlwZS5kZWxldGUodmFsdWUpXG4gICAgICAnZGVsZXRlJzogZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB2YXIgdGhhdCA9IHZhbGlkYXRlKHRoaXMsIE5BTUUpO1xuICAgICAgICB2YXIgZW50cnkgPSBnZXRFbnRyeSh0aGF0LCBrZXkpO1xuICAgICAgICBpZiAoZW50cnkpIHtcbiAgICAgICAgICB2YXIgbmV4dCA9IGVudHJ5Lm47XG4gICAgICAgICAgdmFyIHByZXYgPSBlbnRyeS5wO1xuICAgICAgICAgIGRlbGV0ZSB0aGF0Ll9pW2VudHJ5LmldO1xuICAgICAgICAgIGVudHJ5LnIgPSB0cnVlO1xuICAgICAgICAgIGlmIChwcmV2KSBwcmV2Lm4gPSBuZXh0O1xuICAgICAgICAgIGlmIChuZXh0KSBuZXh0LnAgPSBwcmV2O1xuICAgICAgICAgIGlmICh0aGF0Ll9mID09IGVudHJ5KSB0aGF0Ll9mID0gbmV4dDtcbiAgICAgICAgICBpZiAodGhhdC5fbCA9PSBlbnRyeSkgdGhhdC5fbCA9IHByZXY7XG4gICAgICAgICAgdGhhdFtTSVpFXS0tO1xuICAgICAgICB9IHJldHVybiAhIWVudHJ5O1xuICAgICAgfSxcbiAgICAgIC8vIDIzLjIuMy42IFNldC5wcm90b3R5cGUuZm9yRWFjaChjYWxsYmFja2ZuLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxuICAgICAgLy8gMjMuMS4zLjUgTWFwLnByb3RvdHlwZS5mb3JFYWNoKGNhbGxiYWNrZm4sIHRoaXNBcmcgPSB1bmRlZmluZWQpXG4gICAgICBmb3JFYWNoOiBmdW5jdGlvbiBmb3JFYWNoKGNhbGxiYWNrZm4gLyogLCB0aGF0ID0gdW5kZWZpbmVkICovKSB7XG4gICAgICAgIHZhbGlkYXRlKHRoaXMsIE5BTUUpO1xuICAgICAgICB2YXIgZiA9IGN0eChjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCwgMyk7XG4gICAgICAgIHZhciBlbnRyeTtcbiAgICAgICAgd2hpbGUgKGVudHJ5ID0gZW50cnkgPyBlbnRyeS5uIDogdGhpcy5fZikge1xuICAgICAgICAgIGYoZW50cnkudiwgZW50cnkuaywgdGhpcyk7XG4gICAgICAgICAgLy8gcmV2ZXJ0IHRvIHRoZSBsYXN0IGV4aXN0aW5nIGVudHJ5XG4gICAgICAgICAgd2hpbGUgKGVudHJ5ICYmIGVudHJ5LnIpIGVudHJ5ID0gZW50cnkucDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8vIDIzLjEuMy43IE1hcC5wcm90b3R5cGUuaGFzKGtleSlcbiAgICAgIC8vIDIzLjIuMy43IFNldC5wcm90b3R5cGUuaGFzKHZhbHVlKVxuICAgICAgaGFzOiBmdW5jdGlvbiBoYXMoa2V5KSB7XG4gICAgICAgIHJldHVybiAhIWdldEVudHJ5KHZhbGlkYXRlKHRoaXMsIE5BTUUpLCBrZXkpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChERVNDUklQVE9SUykgZFAoQy5wcm90b3R5cGUsICdzaXplJywge1xuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB2YWxpZGF0ZSh0aGlzLCBOQU1FKVtTSVpFXTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gQztcbiAgfSxcbiAgZGVmOiBmdW5jdGlvbiAodGhhdCwga2V5LCB2YWx1ZSkge1xuICAgIHZhciBlbnRyeSA9IGdldEVudHJ5KHRoYXQsIGtleSk7XG4gICAgdmFyIHByZXYsIGluZGV4O1xuICAgIC8vIGNoYW5nZSBleGlzdGluZyBlbnRyeVxuICAgIGlmIChlbnRyeSkge1xuICAgICAgZW50cnkudiA9IHZhbHVlO1xuICAgIC8vIGNyZWF0ZSBuZXcgZW50cnlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhhdC5fbCA9IGVudHJ5ID0ge1xuICAgICAgICBpOiBpbmRleCA9IGZhc3RLZXkoa2V5LCB0cnVlKSwgLy8gPC0gaW5kZXhcbiAgICAgICAgazoga2V5LCAgICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIGtleVxuICAgICAgICB2OiB2YWx1ZSwgICAgICAgICAgICAgICAgICAgICAgLy8gPC0gdmFsdWVcbiAgICAgICAgcDogcHJldiA9IHRoYXQuX2wsICAgICAgICAgICAgIC8vIDwtIHByZXZpb3VzIGVudHJ5XG4gICAgICAgIG46IHVuZGVmaW5lZCwgICAgICAgICAgICAgICAgICAvLyA8LSBuZXh0IGVudHJ5XG4gICAgICAgIHI6IGZhbHNlICAgICAgICAgICAgICAgICAgICAgICAvLyA8LSByZW1vdmVkXG4gICAgICB9O1xuICAgICAgaWYgKCF0aGF0Ll9mKSB0aGF0Ll9mID0gZW50cnk7XG4gICAgICBpZiAocHJldikgcHJldi5uID0gZW50cnk7XG4gICAgICB0aGF0W1NJWkVdKys7XG4gICAgICAvLyBhZGQgdG8gaW5kZXhcbiAgICAgIGlmIChpbmRleCAhPT0gJ0YnKSB0aGF0Ll9pW2luZGV4XSA9IGVudHJ5O1xuICAgIH0gcmV0dXJuIHRoYXQ7XG4gIH0sXG4gIGdldEVudHJ5OiBnZXRFbnRyeSxcbiAgc2V0U3Ryb25nOiBmdW5jdGlvbiAoQywgTkFNRSwgSVNfTUFQKSB7XG4gICAgLy8gYWRkIC5rZXlzLCAudmFsdWVzLCAuZW50cmllcywgW0BAaXRlcmF0b3JdXG4gICAgLy8gMjMuMS4zLjQsIDIzLjEuMy44LCAyMy4xLjMuMTEsIDIzLjEuMy4xMiwgMjMuMi4zLjUsIDIzLjIuMy44LCAyMy4yLjMuMTAsIDIzLjIuMy4xMVxuICAgICRpdGVyRGVmaW5lKEMsIE5BTUUsIGZ1bmN0aW9uIChpdGVyYXRlZCwga2luZCkge1xuICAgICAgdGhpcy5fdCA9IHZhbGlkYXRlKGl0ZXJhdGVkLCBOQU1FKTsgLy8gdGFyZ2V0XG4gICAgICB0aGlzLl9rID0ga2luZDsgICAgICAgICAgICAgICAgICAgICAvLyBraW5kXG4gICAgICB0aGlzLl9sID0gdW5kZWZpbmVkOyAgICAgICAgICAgICAgICAvLyBwcmV2aW91c1xuICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAgIHZhciBraW5kID0gdGhhdC5faztcbiAgICAgIHZhciBlbnRyeSA9IHRoYXQuX2w7XG4gICAgICAvLyByZXZlcnQgdG8gdGhlIGxhc3QgZXhpc3RpbmcgZW50cnlcbiAgICAgIHdoaWxlIChlbnRyeSAmJiBlbnRyeS5yKSBlbnRyeSA9IGVudHJ5LnA7XG4gICAgICAvLyBnZXQgbmV4dCBlbnRyeVxuICAgICAgaWYgKCF0aGF0Ll90IHx8ICEodGhhdC5fbCA9IGVudHJ5ID0gZW50cnkgPyBlbnRyeS5uIDogdGhhdC5fdC5fZikpIHtcbiAgICAgICAgLy8gb3IgZmluaXNoIHRoZSBpdGVyYXRpb25cbiAgICAgICAgdGhhdC5fdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgcmV0dXJuIHN0ZXAoMSk7XG4gICAgICB9XG4gICAgICAvLyByZXR1cm4gc3RlcCBieSBraW5kXG4gICAgICBpZiAoa2luZCA9PSAna2V5cycpIHJldHVybiBzdGVwKDAsIGVudHJ5LmspO1xuICAgICAgaWYgKGtpbmQgPT0gJ3ZhbHVlcycpIHJldHVybiBzdGVwKDAsIGVudHJ5LnYpO1xuICAgICAgcmV0dXJuIHN0ZXAoMCwgW2VudHJ5LmssIGVudHJ5LnZdKTtcbiAgICB9LCBJU19NQVAgPyAnZW50cmllcycgOiAndmFsdWVzJywgIUlTX01BUCwgdHJ1ZSk7XG5cbiAgICAvLyBhZGQgW0BAc3BlY2llc10sIDIzLjEuMi4yLCAyMy4yLjIuMlxuICAgIHNldFNwZWNpZXMoTkFNRSk7XG4gIH1cbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciByZWRlZmluZUFsbCA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lLWFsbCcpO1xudmFyIG1ldGEgPSByZXF1aXJlKCcuL19tZXRhJyk7XG52YXIgZm9yT2YgPSByZXF1aXJlKCcuL19mb3Itb2YnKTtcbnZhciBhbkluc3RhbmNlID0gcmVxdWlyZSgnLi9fYW4taW5zdGFuY2UnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbnZhciAkaXRlckRldGVjdCA9IHJlcXVpcmUoJy4vX2l0ZXItZGV0ZWN0Jyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIGluaGVyaXRJZlJlcXVpcmVkID0gcmVxdWlyZSgnLi9faW5oZXJpdC1pZi1yZXF1aXJlZCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChOQU1FLCB3cmFwcGVyLCBtZXRob2RzLCBjb21tb24sIElTX01BUCwgSVNfV0VBSykge1xuICB2YXIgQmFzZSA9IGdsb2JhbFtOQU1FXTtcbiAgdmFyIEMgPSBCYXNlO1xuICB2YXIgQURERVIgPSBJU19NQVAgPyAnc2V0JyA6ICdhZGQnO1xuICB2YXIgcHJvdG8gPSBDICYmIEMucHJvdG90eXBlO1xuICB2YXIgTyA9IHt9O1xuICB2YXIgZml4TWV0aG9kID0gZnVuY3Rpb24gKEtFWSkge1xuICAgIHZhciBmbiA9IHByb3RvW0tFWV07XG4gICAgcmVkZWZpbmUocHJvdG8sIEtFWSxcbiAgICAgIEtFWSA9PSAnZGVsZXRlJyA/IGZ1bmN0aW9uIChhKSB7XG4gICAgICAgIHJldHVybiBJU19XRUFLICYmICFpc09iamVjdChhKSA/IGZhbHNlIDogZm4uY2FsbCh0aGlzLCBhID09PSAwID8gMCA6IGEpO1xuICAgICAgfSA6IEtFWSA9PSAnaGFzJyA/IGZ1bmN0aW9uIGhhcyhhKSB7XG4gICAgICAgIHJldHVybiBJU19XRUFLICYmICFpc09iamVjdChhKSA/IGZhbHNlIDogZm4uY2FsbCh0aGlzLCBhID09PSAwID8gMCA6IGEpO1xuICAgICAgfSA6IEtFWSA9PSAnZ2V0JyA/IGZ1bmN0aW9uIGdldChhKSB7XG4gICAgICAgIHJldHVybiBJU19XRUFLICYmICFpc09iamVjdChhKSA/IHVuZGVmaW5lZCA6IGZuLmNhbGwodGhpcywgYSA9PT0gMCA/IDAgOiBhKTtcbiAgICAgIH0gOiBLRVkgPT0gJ2FkZCcgPyBmdW5jdGlvbiBhZGQoYSkgeyBmbi5jYWxsKHRoaXMsIGEgPT09IDAgPyAwIDogYSk7IHJldHVybiB0aGlzOyB9XG4gICAgICAgIDogZnVuY3Rpb24gc2V0KGEsIGIpIHsgZm4uY2FsbCh0aGlzLCBhID09PSAwID8gMCA6IGEsIGIpOyByZXR1cm4gdGhpczsgfVxuICAgICk7XG4gIH07XG4gIGlmICh0eXBlb2YgQyAhPSAnZnVuY3Rpb24nIHx8ICEoSVNfV0VBSyB8fCBwcm90by5mb3JFYWNoICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgbmV3IEMoKS5lbnRyaWVzKCkubmV4dCgpO1xuICB9KSkpIHtcbiAgICAvLyBjcmVhdGUgY29sbGVjdGlvbiBjb25zdHJ1Y3RvclxuICAgIEMgPSBjb21tb24uZ2V0Q29uc3RydWN0b3Iod3JhcHBlciwgTkFNRSwgSVNfTUFQLCBBRERFUik7XG4gICAgcmVkZWZpbmVBbGwoQy5wcm90b3R5cGUsIG1ldGhvZHMpO1xuICAgIG1ldGEuTkVFRCA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGluc3RhbmNlID0gbmV3IEMoKTtcbiAgICAvLyBlYXJseSBpbXBsZW1lbnRhdGlvbnMgbm90IHN1cHBvcnRzIGNoYWluaW5nXG4gICAgdmFyIEhBU05UX0NIQUlOSU5HID0gaW5zdGFuY2VbQURERVJdKElTX1dFQUsgPyB7fSA6IC0wLCAxKSAhPSBpbnN0YW5jZTtcbiAgICAvLyBWOCB+ICBDaHJvbWl1bSA0MC0gd2Vhay1jb2xsZWN0aW9ucyB0aHJvd3Mgb24gcHJpbWl0aXZlcywgYnV0IHNob3VsZCByZXR1cm4gZmFsc2VcbiAgICB2YXIgVEhST1dTX09OX1BSSU1JVElWRVMgPSBmYWlscyhmdW5jdGlvbiAoKSB7IGluc3RhbmNlLmhhcygxKTsgfSk7XG4gICAgLy8gbW9zdCBlYXJseSBpbXBsZW1lbnRhdGlvbnMgZG9lc24ndCBzdXBwb3J0cyBpdGVyYWJsZXMsIG1vc3QgbW9kZXJuIC0gbm90IGNsb3NlIGl0IGNvcnJlY3RseVxuICAgIHZhciBBQ0NFUFRfSVRFUkFCTEVTID0gJGl0ZXJEZXRlY3QoZnVuY3Rpb24gKGl0ZXIpIHsgbmV3IEMoaXRlcik7IH0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuICAgIC8vIGZvciBlYXJseSBpbXBsZW1lbnRhdGlvbnMgLTAgYW5kICswIG5vdCB0aGUgc2FtZVxuICAgIHZhciBCVUdHWV9aRVJPID0gIUlTX1dFQUsgJiYgZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgICAgLy8gVjggfiBDaHJvbWl1bSA0Mi0gZmFpbHMgb25seSB3aXRoIDUrIGVsZW1lbnRzXG4gICAgICB2YXIgJGluc3RhbmNlID0gbmV3IEMoKTtcbiAgICAgIHZhciBpbmRleCA9IDU7XG4gICAgICB3aGlsZSAoaW5kZXgtLSkgJGluc3RhbmNlW0FEREVSXShpbmRleCwgaW5kZXgpO1xuICAgICAgcmV0dXJuICEkaW5zdGFuY2UuaGFzKC0wKTtcbiAgICB9KTtcbiAgICBpZiAoIUFDQ0VQVF9JVEVSQUJMRVMpIHtcbiAgICAgIEMgPSB3cmFwcGVyKGZ1bmN0aW9uICh0YXJnZXQsIGl0ZXJhYmxlKSB7XG4gICAgICAgIGFuSW5zdGFuY2UodGFyZ2V0LCBDLCBOQU1FKTtcbiAgICAgICAgdmFyIHRoYXQgPSBpbmhlcml0SWZSZXF1aXJlZChuZXcgQmFzZSgpLCB0YXJnZXQsIEMpO1xuICAgICAgICBpZiAoaXRlcmFibGUgIT0gdW5kZWZpbmVkKSBmb3JPZihpdGVyYWJsZSwgSVNfTUFQLCB0aGF0W0FEREVSXSwgdGhhdCk7XG4gICAgICAgIHJldHVybiB0aGF0O1xuICAgICAgfSk7XG4gICAgICBDLnByb3RvdHlwZSA9IHByb3RvO1xuICAgICAgcHJvdG8uY29uc3RydWN0b3IgPSBDO1xuICAgIH1cbiAgICBpZiAoVEhST1dTX09OX1BSSU1JVElWRVMgfHwgQlVHR1lfWkVSTykge1xuICAgICAgZml4TWV0aG9kKCdkZWxldGUnKTtcbiAgICAgIGZpeE1ldGhvZCgnaGFzJyk7XG4gICAgICBJU19NQVAgJiYgZml4TWV0aG9kKCdnZXQnKTtcbiAgICB9XG4gICAgaWYgKEJVR0dZX1pFUk8gfHwgSEFTTlRfQ0hBSU5JTkcpIGZpeE1ldGhvZChBRERFUik7XG4gICAgLy8gd2VhayBjb2xsZWN0aW9ucyBzaG91bGQgbm90IGNvbnRhaW5zIC5jbGVhciBtZXRob2RcbiAgICBpZiAoSVNfV0VBSyAmJiBwcm90by5jbGVhcikgZGVsZXRlIHByb3RvLmNsZWFyO1xuICB9XG5cbiAgc2V0VG9TdHJpbmdUYWcoQywgTkFNRSk7XG5cbiAgT1tOQU1FXSA9IEM7XG4gICRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogKEMgIT0gQmFzZSksIE8pO1xuXG4gIGlmICghSVNfV0VBSykgY29tbW9uLnNldFN0cm9uZyhDLCBOQU1FLCBJU19NQVApO1xuXG4gIHJldHVybiBDO1xufTtcbiIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7IHZlcnNpb246ICcyLjUuNycgfTtcbmlmICh0eXBlb2YgX19lID09ICdudW1iZXInKSBfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4iLCIndXNlIHN0cmljdCc7XG52YXIgJGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBpbmRleCwgdmFsdWUpIHtcbiAgaWYgKGluZGV4IGluIG9iamVjdCkgJGRlZmluZVByb3BlcnR5LmYob2JqZWN0LCBpbmRleCwgY3JlYXRlRGVzYygwLCB2YWx1ZSkpO1xuICBlbHNlIG9iamVjdFtpbmRleF0gPSB2YWx1ZTtcbn07XG4iLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbiwgdGhhdCwgbGVuZ3RoKSB7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmICh0aGF0ID09PSB1bmRlZmluZWQpIHJldHVybiBmbjtcbiAgc3dpdGNoIChsZW5ndGgpIHtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbiAoYSkge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24gKC8qIC4uLmFyZ3MgKi8pIHtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG4iLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ID09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50O1xuLy8gdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCcgaW4gb2xkIElFXG52YXIgaXMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcbiIsIi8vIElFIDgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gKFxuICAnY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mJ1xuKS5zcGxpdCgnLCcpO1xuIiwiLy8gYWxsIGVudW1lcmFibGUgb2JqZWN0IGtleXMsIGluY2x1ZGVzIHN5bWJvbHNcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciBnT1BTID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKTtcbnZhciBwSUUgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgcmVzdWx0ID0gZ2V0S2V5cyhpdCk7XG4gIHZhciBnZXRTeW1ib2xzID0gZ09QUy5mO1xuICBpZiAoZ2V0U3ltYm9scykge1xuICAgIHZhciBzeW1ib2xzID0gZ2V0U3ltYm9scyhpdCk7XG4gICAgdmFyIGlzRW51bSA9IHBJRS5mO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIga2V5O1xuICAgIHdoaWxlIChzeW1ib2xzLmxlbmd0aCA+IGkpIGlmIChpc0VudW0uY2FsbChpdCwga2V5ID0gc3ltYm9sc1tpKytdKSkgcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG52YXIgJGV4cG9ydCA9IGZ1bmN0aW9uICh0eXBlLCBuYW1lLCBzb3VyY2UpIHtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkY7XG4gIHZhciBJU19HTE9CQUwgPSB0eXBlICYgJGV4cG9ydC5HO1xuICB2YXIgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuUztcbiAgdmFyIElTX1BST1RPID0gdHlwZSAmICRleHBvcnQuUDtcbiAgdmFyIElTX0JJTkQgPSB0eXBlICYgJGV4cG9ydC5CO1xuICB2YXIgdGFyZ2V0ID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIHx8IChnbG9iYWxbbmFtZV0gPSB7fSkgOiAoZ2xvYmFsW25hbWVdIHx8IHt9KVtQUk9UT1RZUEVdO1xuICB2YXIgZXhwb3J0cyA9IElTX0dMT0JBTCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pO1xuICB2YXIgZXhwUHJvdG8gPSBleHBvcnRzW1BST1RPVFlQRV0gfHwgKGV4cG9ydHNbUFJPVE9UWVBFXSA9IHt9KTtcbiAgdmFyIGtleSwgb3duLCBvdXQsIGV4cDtcbiAgaWYgKElTX0dMT0JBTCkgc291cmNlID0gbmFtZTtcbiAgZm9yIChrZXkgaW4gc291cmNlKSB7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYgdGFyZ2V0W2tleV0gIT09IHVuZGVmaW5lZDtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IChvd24gPyB0YXJnZXQgOiBzb3VyY2UpW2tleV07XG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICBleHAgPSBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHRlbmQgZ2xvYmFsXG4gICAgaWYgKHRhcmdldCkgcmVkZWZpbmUodGFyZ2V0LCBrZXksIG91dCwgdHlwZSAmICRleHBvcnQuVSk7XG4gICAgLy8gZXhwb3J0XG4gICAgaWYgKGV4cG9ydHNba2V5XSAhPSBvdXQpIGhpZGUoZXhwb3J0cywga2V5LCBleHApO1xuICAgIGlmIChJU19QUk9UTyAmJiBleHBQcm90b1trZXldICE9IG91dCkgZXhwUHJvdG9ba2V5XSA9IG91dDtcbiAgfVxufTtcbmdsb2JhbC5jb3JlID0gY29yZTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuJGV4cG9ydC5VID0gNjQ7ICAvLyBzYWZlXG4kZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbnZhciB3a3MgPSByZXF1aXJlKCcuL193a3MnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoS0VZLCBsZW5ndGgsIGV4ZWMpIHtcbiAgdmFyIFNZTUJPTCA9IHdrcyhLRVkpO1xuICB2YXIgZm5zID0gZXhlYyhkZWZpbmVkLCBTWU1CT0wsICcnW0tFWV0pO1xuICB2YXIgc3RyZm4gPSBmbnNbMF07XG4gIHZhciByeGZuID0gZm5zWzFdO1xuICBpZiAoZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIHZhciBPID0ge307XG4gICAgT1tTWU1CT0xdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfTtcbiAgICByZXR1cm4gJydbS0VZXShPKSAhPSA3O1xuICB9KSkge1xuICAgIHJlZGVmaW5lKFN0cmluZy5wcm90b3R5cGUsIEtFWSwgc3RyZm4pO1xuICAgIGhpZGUoUmVnRXhwLnByb3RvdHlwZSwgU1lNQk9MLCBsZW5ndGggPT0gMlxuICAgICAgLy8gMjEuMi41LjggUmVnRXhwLnByb3RvdHlwZVtAQHJlcGxhY2VdKHN0cmluZywgcmVwbGFjZVZhbHVlKVxuICAgICAgLy8gMjEuMi41LjExIFJlZ0V4cC5wcm90b3R5cGVbQEBzcGxpdF0oc3RyaW5nLCBsaW1pdClcbiAgICAgID8gZnVuY3Rpb24gKHN0cmluZywgYXJnKSB7IHJldHVybiByeGZuLmNhbGwoc3RyaW5nLCB0aGlzLCBhcmcpOyB9XG4gICAgICAvLyAyMS4yLjUuNiBSZWdFeHAucHJvdG90eXBlW0BAbWF0Y2hdKHN0cmluZylcbiAgICAgIC8vIDIxLjIuNS45IFJlZ0V4cC5wcm90b3R5cGVbQEBzZWFyY2hdKHN0cmluZylcbiAgICAgIDogZnVuY3Rpb24gKHN0cmluZykgeyByZXR1cm4gcnhmbi5jYWxsKHN0cmluZywgdGhpcyk7IH1cbiAgICApO1xuICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMjEuMi41LjMgZ2V0IFJlZ0V4cC5wcm90b3R5cGUuZmxhZ3NcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciB0aGF0ID0gYW5PYmplY3QodGhpcyk7XG4gIHZhciByZXN1bHQgPSAnJztcbiAgaWYgKHRoYXQuZ2xvYmFsKSByZXN1bHQgKz0gJ2cnO1xuICBpZiAodGhhdC5pZ25vcmVDYXNlKSByZXN1bHQgKz0gJ2knO1xuICBpZiAodGhhdC5tdWx0aWxpbmUpIHJlc3VsdCArPSAnbSc7XG4gIGlmICh0aGF0LnVuaWNvZGUpIHJlc3VsdCArPSAndSc7XG4gIGlmICh0aGF0LnN0aWNreSkgcmVzdWx0ICs9ICd5JztcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCJ2YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4vX2l0ZXItY2FsbCcpO1xudmFyIGlzQXJyYXlJdGVyID0gcmVxdWlyZSgnLi9faXMtYXJyYXktaXRlcicpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciBnZXRJdGVyRm4gPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xudmFyIEJSRUFLID0ge307XG52YXIgUkVUVVJOID0ge307XG52YXIgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXJhYmxlLCBlbnRyaWVzLCBmbiwgdGhhdCwgSVRFUkFUT1IpIHtcbiAgdmFyIGl0ZXJGbiA9IElURVJBVE9SID8gZnVuY3Rpb24gKCkgeyByZXR1cm4gaXRlcmFibGU7IH0gOiBnZXRJdGVyRm4oaXRlcmFibGUpO1xuICB2YXIgZiA9IGN0eChmbiwgdGhhdCwgZW50cmllcyA/IDIgOiAxKTtcbiAgdmFyIGluZGV4ID0gMDtcbiAgdmFyIGxlbmd0aCwgc3RlcCwgaXRlcmF0b3IsIHJlc3VsdDtcbiAgaWYgKHR5cGVvZiBpdGVyRm4gIT0gJ2Z1bmN0aW9uJykgdGhyb3cgVHlwZUVycm9yKGl0ZXJhYmxlICsgJyBpcyBub3QgaXRlcmFibGUhJyk7XG4gIC8vIGZhc3QgY2FzZSBmb3IgYXJyYXlzIHdpdGggZGVmYXVsdCBpdGVyYXRvclxuICBpZiAoaXNBcnJheUl0ZXIoaXRlckZuKSkgZm9yIChsZW5ndGggPSB0b0xlbmd0aChpdGVyYWJsZS5sZW5ndGgpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuICAgIHJlc3VsdCA9IGVudHJpZXMgPyBmKGFuT2JqZWN0KHN0ZXAgPSBpdGVyYWJsZVtpbmRleF0pWzBdLCBzdGVwWzFdKSA6IGYoaXRlcmFibGVbaW5kZXhdKTtcbiAgICBpZiAocmVzdWx0ID09PSBCUkVBSyB8fCByZXN1bHQgPT09IFJFVFVSTikgcmV0dXJuIHJlc3VsdDtcbiAgfSBlbHNlIGZvciAoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChpdGVyYWJsZSk7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTspIHtcbiAgICByZXN1bHQgPSBjYWxsKGl0ZXJhdG9yLCBmLCBzdGVwLnZhbHVlLCBlbnRyaWVzKTtcbiAgICBpZiAocmVzdWx0ID09PSBCUkVBSyB8fCByZXN1bHQgPT09IFJFVFVSTikgcmV0dXJuIHJlc3VsdDtcbiAgfVxufTtcbmV4cG9ydHMuQlJFQUsgPSBCUkVBSztcbmV4cG9ydHMuUkVUVVJOID0gUkVUVVJOO1xuIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYgKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpIF9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuIiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xufTtcbiIsInZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHJldHVybiBkUC5mKG9iamVjdCwga2V5LCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcbiIsInZhciBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50O1xubW9kdWxlLmV4cG9ydHMgPSBkb2N1bWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4iLCJtb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2RpdicpLCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19zZXQtcHJvdG8nKS5zZXQ7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0aGF0LCB0YXJnZXQsIEMpIHtcbiAgdmFyIFMgPSB0YXJnZXQuY29uc3RydWN0b3I7XG4gIHZhciBQO1xuICBpZiAoUyAhPT0gQyAmJiB0eXBlb2YgUyA9PSAnZnVuY3Rpb24nICYmIChQID0gUy5wcm90b3R5cGUpICE9PSBDLnByb3RvdHlwZSAmJiBpc09iamVjdChQKSAmJiBzZXRQcm90b3R5cGVPZikge1xuICAgIHNldFByb3RvdHlwZU9mKHRoYXQsIFApO1xuICB9IHJldHVybiB0aGF0O1xufTtcbiIsIi8vIGZhc3QgYXBwbHksIGh0dHA6Ly9qc3BlcmYubG5raXQuY29tL2Zhc3QtYXBwbHkvNVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4sIGFyZ3MsIHRoYXQpIHtcbiAgdmFyIHVuID0gdGhhdCA9PT0gdW5kZWZpbmVkO1xuICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XG4gICAgY2FzZSAwOiByZXR1cm4gdW4gPyBmbigpXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQpO1xuICAgIGNhc2UgMTogcmV0dXJuIHVuID8gZm4oYXJnc1swXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSk7XG4gICAgY2FzZSAyOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICBjYXNlIDM6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICAgIGNhc2UgNDogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSk7XG4gIH0gcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3MpO1xufTtcbiIsIi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbn07XG4iLCIvLyBjaGVjayBvbiBkZWZhdWx0IEFycmF5IGl0ZXJhdG9yXG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgIT09IHVuZGVmaW5lZCAmJiAoSXRlcmF0b3JzLkFycmF5ID09PSBpdCB8fCBBcnJheVByb3RvW0lURVJBVE9SXSA9PT0gaXQpO1xufTtcbiIsIi8vIDcuMi4yIElzQXJyYXkoYXJndW1lbnQpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gaXNBcnJheShhcmcpIHtcbiAgcmV0dXJuIGNvZihhcmcpID09ICdBcnJheSc7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG4iLCIvLyA3LjIuOCBJc1JlZ0V4cChhcmd1bWVudClcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xudmFyIE1BVENIID0gcmVxdWlyZSgnLi9fd2tzJykoJ21hdGNoJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgaXNSZWdFeHA7XG4gIHJldHVybiBpc09iamVjdChpdCkgJiYgKChpc1JlZ0V4cCA9IGl0W01BVENIXSkgIT09IHVuZGVmaW5lZCA/ICEhaXNSZWdFeHAgOiBjb2YoaXQpID09ICdSZWdFeHAnKTtcbn07XG4iLCIvLyBjYWxsIHNvbWV0aGluZyBvbiBpdGVyYXRvciBzdGVwIHdpdGggc2FmZSBjbG9zaW5nIG9uIGVycm9yXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXJhdG9yLCBmbiwgdmFsdWUsIGVudHJpZXMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZW50cmllcyA/IGZuKGFuT2JqZWN0KHZhbHVlKVswXSwgdmFsdWVbMV0pIDogZm4odmFsdWUpO1xuICAvLyA3LjQuNiBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBjb21wbGV0aW9uKVxuICB9IGNhdGNoIChlKSB7XG4gICAgdmFyIHJldCA9IGl0ZXJhdG9yWydyZXR1cm4nXTtcbiAgICBpZiAocmV0ICE9PSB1bmRlZmluZWQpIGFuT2JqZWN0KHJldC5jYWxsKGl0ZXJhdG9yKSk7XG4gICAgdGhyb3cgZTtcbiAgfVxufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJyk7XG52YXIgZGVzY3JpcHRvciA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcblxuLy8gMjUuMS4yLjEuMSAlSXRlcmF0b3JQcm90b3R5cGUlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2hpZGUnKShJdGVyYXRvclByb3RvdHlwZSwgcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyksIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCkge1xuICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBjcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUsIHsgbmV4dDogZGVzY3JpcHRvcigxLCBuZXh0KSB9KTtcbiAgc2V0VG9TdHJpbmdUYWcoQ29uc3RydWN0b3IsIE5BTUUgKyAnIEl0ZXJhdG9yJyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgPSByZXF1aXJlKCcuL19saWJyYXJ5Jyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyICRpdGVyQ3JlYXRlID0gcmVxdWlyZSgnLi9faXRlci1jcmVhdGUnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBCVUdHWSA9ICEoW10ua2V5cyAmJiAnbmV4dCcgaW4gW10ua2V5cygpKTsgLy8gU2FmYXJpIGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxudmFyIEZGX0lURVJBVE9SID0gJ0BAaXRlcmF0b3InO1xudmFyIEtFWVMgPSAna2V5cyc7XG52YXIgVkFMVUVTID0gJ3ZhbHVlcyc7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQmFzZSwgTkFNRSwgQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0VEKSB7XG4gICRpdGVyQ3JlYXRlKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcbiAgdmFyIGdldE1ldGhvZCA9IGZ1bmN0aW9uIChraW5kKSB7XG4gICAgaWYgKCFCVUdHWSAmJiBraW5kIGluIHByb3RvKSByZXR1cm4gcHJvdG9ba2luZF07XG4gICAgc3dpdGNoIChraW5kKSB7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgICAgY2FzZSBWQUxVRVM6IHJldHVybiBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgfSByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgfTtcbiAgdmFyIFRBRyA9IE5BTUUgKyAnIEl0ZXJhdG9yJztcbiAgdmFyIERFRl9WQUxVRVMgPSBERUZBVUxUID09IFZBTFVFUztcbiAgdmFyIFZBTFVFU19CVUcgPSBmYWxzZTtcbiAgdmFyIHByb3RvID0gQmFzZS5wcm90b3R5cGU7XG4gIHZhciAkbmF0aXZlID0gcHJvdG9bSVRFUkFUT1JdIHx8IHByb3RvW0ZGX0lURVJBVE9SXSB8fCBERUZBVUxUICYmIHByb3RvW0RFRkFVTFRdO1xuICB2YXIgJGRlZmF1bHQgPSAkbmF0aXZlIHx8IGdldE1ldGhvZChERUZBVUxUKTtcbiAgdmFyICRlbnRyaWVzID0gREVGQVVMVCA/ICFERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoJ2VudHJpZXMnKSA6IHVuZGVmaW5lZDtcbiAgdmFyICRhbnlOYXRpdmUgPSBOQU1FID09ICdBcnJheScgPyBwcm90by5lbnRyaWVzIHx8ICRuYXRpdmUgOiAkbmF0aXZlO1xuICB2YXIgbWV0aG9kcywga2V5LCBJdGVyYXRvclByb3RvdHlwZTtcbiAgLy8gRml4IG5hdGl2ZVxuICBpZiAoJGFueU5hdGl2ZSkge1xuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoJGFueU5hdGl2ZS5jYWxsKG5ldyBCYXNlKCkpKTtcbiAgICBpZiAoSXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUgJiYgSXRlcmF0b3JQcm90b3R5cGUubmV4dCkge1xuICAgICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgICAgc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JQcm90b3R5cGUsIFRBRywgdHJ1ZSk7XG4gICAgICAvLyBmaXggZm9yIHNvbWUgb2xkIGVuZ2luZXNcbiAgICAgIGlmICghTElCUkFSWSAmJiB0eXBlb2YgSXRlcmF0b3JQcm90b3R5cGVbSVRFUkFUT1JdICE9ICdmdW5jdGlvbicpIGhpZGUoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcbiAgICB9XG4gIH1cbiAgLy8gZml4IEFycmF5I3t2YWx1ZXMsIEBAaXRlcmF0b3J9Lm5hbWUgaW4gVjggLyBGRlxuICBpZiAoREVGX1ZBTFVFUyAmJiAkbmF0aXZlICYmICRuYXRpdmUubmFtZSAhPT0gVkFMVUVTKSB7XG4gICAgVkFMVUVTX0JVRyA9IHRydWU7XG4gICAgJGRlZmF1bHQgPSBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiAkbmF0aXZlLmNhbGwodGhpcyk7IH07XG4gIH1cbiAgLy8gRGVmaW5lIGl0ZXJhdG9yXG4gIGlmICgoIUxJQlJBUlkgfHwgRk9SQ0VEKSAmJiAoQlVHR1kgfHwgVkFMVUVTX0JVRyB8fCAhcHJvdG9bSVRFUkFUT1JdKSkge1xuICAgIGhpZGUocHJvdG8sIElURVJBVE9SLCAkZGVmYXVsdCk7XG4gIH1cbiAgLy8gUGx1ZyBmb3IgbGlicmFyeVxuICBJdGVyYXRvcnNbTkFNRV0gPSAkZGVmYXVsdDtcbiAgSXRlcmF0b3JzW1RBR10gPSByZXR1cm5UaGlzO1xuICBpZiAoREVGQVVMVCkge1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICB2YWx1ZXM6IERFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChWQUxVRVMpLFxuICAgICAga2V5czogSVNfU0VUID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiAkZW50cmllc1xuICAgIH07XG4gICAgaWYgKEZPUkNFRCkgZm9yIChrZXkgaW4gbWV0aG9kcykge1xuICAgICAgaWYgKCEoa2V5IGluIHByb3RvKSkgcmVkZWZpbmUocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcbiAgICB9IGVsc2UgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoQlVHR1kgfHwgVkFMVUVTX0JVRyksIE5BTUUsIG1ldGhvZHMpO1xuICB9XG4gIHJldHVybiBtZXRob2RzO1xufTtcbiIsInZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIFNBRkVfQ0xPU0lORyA9IGZhbHNlO1xuXG50cnkge1xuICB2YXIgcml0ZXIgPSBbN11bSVRFUkFUT1JdKCk7XG4gIHJpdGVyWydyZXR1cm4nXSA9IGZ1bmN0aW9uICgpIHsgU0FGRV9DTE9TSU5HID0gdHJ1ZTsgfTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXRocm93LWxpdGVyYWxcbiAgQXJyYXkuZnJvbShyaXRlciwgZnVuY3Rpb24gKCkgeyB0aHJvdyAyOyB9KTtcbn0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjLCBza2lwQ2xvc2luZykge1xuICBpZiAoIXNraXBDbG9zaW5nICYmICFTQUZFX0NMT1NJTkcpIHJldHVybiBmYWxzZTtcbiAgdmFyIHNhZmUgPSBmYWxzZTtcbiAgdHJ5IHtcbiAgICB2YXIgYXJyID0gWzddO1xuICAgIHZhciBpdGVyID0gYXJyW0lURVJBVE9SXSgpO1xuICAgIGl0ZXIubmV4dCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHsgZG9uZTogc2FmZSA9IHRydWUgfTsgfTtcbiAgICBhcnJbSVRFUkFUT1JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gaXRlcjsgfTtcbiAgICBleGVjKGFycik7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICByZXR1cm4gc2FmZTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkb25lLCB2YWx1ZSkge1xuICByZXR1cm4geyB2YWx1ZTogdmFsdWUsIGRvbmU6ICEhZG9uZSB9O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge307XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZhbHNlO1xuIiwidmFyIE1FVEEgPSByZXF1aXJlKCcuL191aWQnKSgnbWV0YScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgc2V0RGVzYyA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgaWQgPSAwO1xudmFyIGlzRXh0ZW5zaWJsZSA9IE9iamVjdC5pc0V4dGVuc2libGUgfHwgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdHJ1ZTtcbn07XG52YXIgRlJFRVpFID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gaXNFeHRlbnNpYmxlKE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucyh7fSkpO1xufSk7XG52YXIgc2V0TWV0YSA9IGZ1bmN0aW9uIChpdCkge1xuICBzZXREZXNjKGl0LCBNRVRBLCB7IHZhbHVlOiB7XG4gICAgaTogJ08nICsgKytpZCwgLy8gb2JqZWN0IElEXG4gICAgdzoge30gICAgICAgICAgLy8gd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfSB9KTtcbn07XG52YXIgZmFzdEtleSA9IGZ1bmN0aW9uIChpdCwgY3JlYXRlKSB7XG4gIC8vIHJldHVybiBwcmltaXRpdmUgd2l0aCBwcmVmaXhcbiAgaWYgKCFpc09iamVjdChpdCkpIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCcgPyBpdCA6ICh0eXBlb2YgaXQgPT0gJ3N0cmluZycgPyAnUycgOiAnUCcpICsgaXQ7XG4gIGlmICghaGFzKGl0LCBNRVRBKSkge1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYgKCFpc0V4dGVuc2libGUoaXQpKSByZXR1cm4gJ0YnO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYgKCFjcmVhdGUpIHJldHVybiAnRSc7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIG9iamVjdCBJRFxuICB9IHJldHVybiBpdFtNRVRBXS5pO1xufTtcbnZhciBnZXRXZWFrID0gZnVuY3Rpb24gKGl0LCBjcmVhdGUpIHtcbiAgaWYgKCFoYXMoaXQsIE1FVEEpKSB7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZiAoIWlzRXh0ZW5zaWJsZShpdCkpIHJldHVybiB0cnVlO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYgKCFjcmVhdGUpIHJldHVybiBmYWxzZTtcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gaGFzaCB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9IHJldHVybiBpdFtNRVRBXS53O1xufTtcbi8vIGFkZCBtZXRhZGF0YSBvbiBmcmVlemUtZmFtaWx5IG1ldGhvZHMgY2FsbGluZ1xudmFyIG9uRnJlZXplID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChGUkVFWkUgJiYgbWV0YS5ORUVEICYmIGlzRXh0ZW5zaWJsZShpdCkgJiYgIWhhcyhpdCwgTUVUQSkpIHNldE1ldGEoaXQpO1xuICByZXR1cm4gaXQ7XG59O1xudmFyIG1ldGEgPSBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgS0VZOiBNRVRBLFxuICBORUVEOiBmYWxzZSxcbiAgZmFzdEtleTogZmFzdEtleSxcbiAgZ2V0V2VhazogZ2V0V2VhayxcbiAgb25GcmVlemU6IG9uRnJlZXplXG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIG1hY3JvdGFzayA9IHJlcXVpcmUoJy4vX3Rhc2snKS5zZXQ7XG52YXIgT2JzZXJ2ZXIgPSBnbG9iYWwuTXV0YXRpb25PYnNlcnZlciB8fCBnbG9iYWwuV2ViS2l0TXV0YXRpb25PYnNlcnZlcjtcbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgUHJvbWlzZSA9IGdsb2JhbC5Qcm9taXNlO1xudmFyIGlzTm9kZSA9IHJlcXVpcmUoJy4vX2NvZicpKHByb2Nlc3MpID09ICdwcm9jZXNzJztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBoZWFkLCBsYXN0LCBub3RpZnk7XG5cbiAgdmFyIGZsdXNoID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBwYXJlbnQsIGZuO1xuICAgIGlmIChpc05vZGUgJiYgKHBhcmVudCA9IHByb2Nlc3MuZG9tYWluKSkgcGFyZW50LmV4aXQoKTtcbiAgICB3aGlsZSAoaGVhZCkge1xuICAgICAgZm4gPSBoZWFkLmZuO1xuICAgICAgaGVhZCA9IGhlYWQubmV4dDtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZuKCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGlmIChoZWFkKSBub3RpZnkoKTtcbiAgICAgICAgZWxzZSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH0gbGFzdCA9IHVuZGVmaW5lZDtcbiAgICBpZiAocGFyZW50KSBwYXJlbnQuZW50ZXIoKTtcbiAgfTtcblxuICAvLyBOb2RlLmpzXG4gIGlmIChpc05vZGUpIHtcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGZsdXNoKTtcbiAgICB9O1xuICAvLyBicm93c2VycyB3aXRoIE11dGF0aW9uT2JzZXJ2ZXIsIGV4Y2VwdCBpT1MgU2FmYXJpIC0gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzMzOVxuICB9IGVsc2UgaWYgKE9ic2VydmVyICYmICEoZ2xvYmFsLm5hdmlnYXRvciAmJiBnbG9iYWwubmF2aWdhdG9yLnN0YW5kYWxvbmUpKSB7XG4gICAgdmFyIHRvZ2dsZSA9IHRydWU7XG4gICAgdmFyIG5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gICAgbmV3IE9ic2VydmVyKGZsdXNoKS5vYnNlcnZlKG5vZGUsIHsgY2hhcmFjdGVyRGF0YTogdHJ1ZSB9KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXdcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBub2RlLmRhdGEgPSB0b2dnbGUgPSAhdG9nZ2xlO1xuICAgIH07XG4gIC8vIGVudmlyb25tZW50cyB3aXRoIG1heWJlIG5vbi1jb21wbGV0ZWx5IGNvcnJlY3QsIGJ1dCBleGlzdGVudCBQcm9taXNlXG4gIH0gZWxzZSBpZiAoUHJvbWlzZSAmJiBQcm9taXNlLnJlc29sdmUpIHtcbiAgICAvLyBQcm9taXNlLnJlc29sdmUgd2l0aG91dCBhbiBhcmd1bWVudCB0aHJvd3MgYW4gZXJyb3IgaW4gTEcgV2ViT1MgMlxuICAgIHZhciBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKHVuZGVmaW5lZCk7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcHJvbWlzZS50aGVuKGZsdXNoKTtcbiAgICB9O1xuICAvLyBmb3Igb3RoZXIgZW52aXJvbm1lbnRzIC0gbWFjcm90YXNrIGJhc2VkIG9uOlxuICAvLyAtIHNldEltbWVkaWF0ZVxuICAvLyAtIE1lc3NhZ2VDaGFubmVsXG4gIC8vIC0gd2luZG93LnBvc3RNZXNzYWdcbiAgLy8gLSBvbnJlYWR5c3RhdGVjaGFuZ2VcbiAgLy8gLSBzZXRUaW1lb3V0XG4gIH0gZWxzZSB7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gc3RyYW5nZSBJRSArIHdlYnBhY2sgZGV2IHNlcnZlciBidWcgLSB1c2UgLmNhbGwoZ2xvYmFsKVxuICAgICAgbWFjcm90YXNrLmNhbGwoZ2xvYmFsLCBmbHVzaCk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoZm4pIHtcbiAgICB2YXIgdGFzayA9IHsgZm46IGZuLCBuZXh0OiB1bmRlZmluZWQgfTtcbiAgICBpZiAobGFzdCkgbGFzdC5uZXh0ID0gdGFzaztcbiAgICBpZiAoIWhlYWQpIHtcbiAgICAgIGhlYWQgPSB0YXNrO1xuICAgICAgbm90aWZ5KCk7XG4gICAgfSBsYXN0ID0gdGFzaztcbiAgfTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG4vLyAyNS40LjEuNSBOZXdQcm9taXNlQ2FwYWJpbGl0eShDKVxudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcblxuZnVuY3Rpb24gUHJvbWlzZUNhcGFiaWxpdHkoQykge1xuICB2YXIgcmVzb2x2ZSwgcmVqZWN0O1xuICB0aGlzLnByb21pc2UgPSBuZXcgQyhmdW5jdGlvbiAoJCRyZXNvbHZlLCAkJHJlamVjdCkge1xuICAgIGlmIChyZXNvbHZlICE9PSB1bmRlZmluZWQgfHwgcmVqZWN0ICE9PSB1bmRlZmluZWQpIHRocm93IFR5cGVFcnJvcignQmFkIFByb21pc2UgY29uc3RydWN0b3InKTtcbiAgICByZXNvbHZlID0gJCRyZXNvbHZlO1xuICAgIHJlamVjdCA9ICQkcmVqZWN0O1xuICB9KTtcbiAgdGhpcy5yZXNvbHZlID0gYUZ1bmN0aW9uKHJlc29sdmUpO1xuICB0aGlzLnJlamVjdCA9IGFGdW5jdGlvbihyZWplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cy5mID0gZnVuY3Rpb24gKEMpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlQ2FwYWJpbGl0eShDKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG4vLyAxOS4xLjIuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlLCAuLi4pXG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG52YXIgZ09QUyA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJyk7XG52YXIgcElFID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKTtcbnZhciAkYXNzaWduID0gT2JqZWN0LmFzc2lnbjtcblxuLy8gc2hvdWxkIHdvcmsgd2l0aCBzeW1ib2xzIGFuZCBzaG91bGQgaGF2ZSBkZXRlcm1pbmlzdGljIHByb3BlcnR5IG9yZGVyIChWOCBidWcpXG5tb2R1bGUuZXhwb3J0cyA9ICEkYXNzaWduIHx8IHJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICB2YXIgQSA9IHt9O1xuICB2YXIgQiA9IHt9O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIFMgPSBTeW1ib2woKTtcbiAgdmFyIEsgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3QnO1xuICBBW1NdID0gNztcbiAgSy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAoaykgeyBCW2tdID0gazsgfSk7XG4gIHJldHVybiAkYXNzaWduKHt9LCBBKVtTXSAhPSA3IHx8IE9iamVjdC5rZXlzKCRhc3NpZ24oe30sIEIpKS5qb2luKCcnKSAhPSBLO1xufSkgPyBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCBzb3VyY2UpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICB2YXIgVCA9IHRvT2JqZWN0KHRhcmdldCk7XG4gIHZhciBhTGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgdmFyIGluZGV4ID0gMTtcbiAgdmFyIGdldFN5bWJvbHMgPSBnT1BTLmY7XG4gIHZhciBpc0VudW0gPSBwSUUuZjtcbiAgd2hpbGUgKGFMZW4gPiBpbmRleCkge1xuICAgIHZhciBTID0gSU9iamVjdChhcmd1bWVudHNbaW5kZXgrK10pO1xuICAgIHZhciBrZXlzID0gZ2V0U3ltYm9scyA/IGdldEtleXMoUykuY29uY2F0KGdldFN5bWJvbHMoUykpIDogZ2V0S2V5cyhTKTtcbiAgICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gICAgdmFyIGogPSAwO1xuICAgIHZhciBrZXk7XG4gICAgd2hpbGUgKGxlbmd0aCA+IGopIGlmIChpc0VudW0uY2FsbChTLCBrZXkgPSBrZXlzW2orK10pKSBUW2tleV0gPSBTW2tleV07XG4gIH0gcmV0dXJuIFQ7XG59IDogJGFzc2lnbjtcbiIsIi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgZFBzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwcycpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xudmFyIEVtcHR5ID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgY3JlYXRlRGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgdmFyIGlmcmFtZSA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnaWZyYW1lJyk7XG4gIHZhciBpID0gZW51bUJ1Z0tleXMubGVuZ3RoO1xuICB2YXIgbHQgPSAnPCc7XG4gIHZhciBndCA9ICc+JztcbiAgdmFyIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgcmVxdWlyZSgnLi9faHRtbCcpLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZS5zcmMgPSAnamF2YXNjcmlwdDonOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNjcmlwdC11cmxcbiAgLy8gY3JlYXRlRGljdCA9IGlmcmFtZS5jb250ZW50V2luZG93Lk9iamVjdDtcbiAgLy8gaHRtbC5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKGx0ICsgJ3NjcmlwdCcgKyBndCArICdkb2N1bWVudC5GPU9iamVjdCcgKyBsdCArICcvc2NyaXB0JyArIGd0KTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgY3JlYXRlRGljdCA9IGlmcmFtZURvY3VtZW50LkY7XG4gIHdoaWxlIChpLS0pIGRlbGV0ZSBjcmVhdGVEaWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbaV1dO1xuICByZXR1cm4gY3JlYXRlRGljdCgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmIChPICE9PSBudWxsKSB7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xuICAgIHJlc3VsdCA9IG5ldyBFbXB0eSgpO1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBudWxsO1xuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcbiAgfSBlbHNlIHJlc3VsdCA9IGNyZWF0ZURpY3QoKTtcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IGRQcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xufTtcbiIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGRQID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiBkUChPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIGlmICgnZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpIHRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhJyk7XG4gIGlmICgndmFsdWUnIGluIEF0dHJpYnV0ZXMpIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG4iLCJ2YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcykge1xuICBhbk9iamVjdChPKTtcbiAgdmFyIGtleXMgPSBnZXRLZXlzKFByb3BlcnRpZXMpO1xuICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIHZhciBpID0gMDtcbiAgdmFyIFA7XG4gIHdoaWxlIChsZW5ndGggPiBpKSBkUC5mKE8sIFAgPSBrZXlzW2krK10sIFByb3BlcnRpZXNbUF0pO1xuICByZXR1cm4gTztcbn07XG4iLCJ2YXIgcElFID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpO1xudmFyIGdPUEQgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZ09QRCA6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKSB7XG4gIE8gPSB0b0lPYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiBnT1BEKE8sIFApO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKGhhcyhPLCBQKSkgcmV0dXJuIGNyZWF0ZURlc2MoIXBJRS5mLmNhbGwoTywgUCksIE9bUF0pO1xufTtcbiIsIi8vIGZhbGxiYWNrIGZvciBJRTExIGJ1Z2d5IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHdpdGggaWZyYW1lIGFuZCB3aW5kb3dcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgZ09QTiA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZjtcbnZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG52YXIgd2luZG93TmFtZXMgPSB0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdyAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc1xuICA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHdpbmRvdykgOiBbXTtcblxudmFyIGdldFdpbmRvd05hbWVzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGdPUE4oaXQpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHdpbmRvd05hbWVzLnNsaWNlKCk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzLmYgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KSB7XG4gIHJldHVybiB3aW5kb3dOYW1lcyAmJiB0b1N0cmluZy5jYWxsKGl0KSA9PSAnW29iamVjdCBXaW5kb3ddJyA/IGdldFdpbmRvd05hbWVzKGl0KSA6IGdPUE4odG9JT2JqZWN0KGl0KSk7XG59O1xuIiwiLy8gMTkuMS4yLjcgLyAxNS4yLjMuNCBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpLmNvbmNhdCgnbGVuZ3RoJywgJ3Byb3RvdHlwZScpO1xuXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKE8pIHtcbiAgcmV0dXJuICRrZXlzKE8sIGhpZGRlbktleXMpO1xufTtcbiIsImV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG4iLCIvLyAxOS4xLjIuOSAvIDE1LjIuMy4yIE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG52YXIgT2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiAoTykge1xuICBPID0gdG9PYmplY3QoTyk7XG4gIGlmIChoYXMoTywgSUVfUFJPVE8pKSByZXR1cm4gT1tJRV9QUk9UT107XG4gIGlmICh0eXBlb2YgTy5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmIE8gaW5zdGFuY2VvZiBPLmNvbnN0cnVjdG9yKSB7XG4gICAgcmV0dXJuIE8uY29uc3RydWN0b3IucHJvdG90eXBlO1xuICB9IHJldHVybiBPIGluc3RhbmNlb2YgT2JqZWN0ID8gT2JqZWN0UHJvdG8gOiBudWxsO1xufTtcbiIsInZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgYXJyYXlJbmRleE9mID0gcmVxdWlyZSgnLi9fYXJyYXktaW5jbHVkZXMnKShmYWxzZSk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgbmFtZXMpIHtcbiAgdmFyIE8gPSB0b0lPYmplY3Qob2JqZWN0KTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBrZXk7XG4gIGZvciAoa2V5IGluIE8pIGlmIChrZXkgIT0gSUVfUFJPVE8pIGhhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIGlmIChoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpIHtcbiAgICB+YXJyYXlJbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwiLy8gMTkuMS4yLjE0IC8gMTUuMi4zLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTykge1xuICByZXR1cm4gJGtleXMoTywgZW51bUJ1Z0tleXMpO1xufTtcbiIsImV4cG9ydHMuZiA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuIiwiLy8gbW9zdCBPYmplY3QgbWV0aG9kcyBieSBFUzYgc2hvdWxkIGFjY2VwdCBwcmltaXRpdmVzXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoS0VZLCBleGVjKSB7XG4gIHZhciBmbiA9IChjb3JlLk9iamVjdCB8fCB7fSlbS0VZXSB8fCBPYmplY3RbS0VZXTtcbiAgdmFyIGV4cCA9IHt9O1xuICBleHBbS0VZXSA9IGV4ZWMoZm4pO1xuICAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIGZhaWxzKGZ1bmN0aW9uICgpIHsgZm4oMSk7IH0pLCAnT2JqZWN0JywgZXhwKTtcbn07XG4iLCJ2YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIGlzRW51bSA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKS5mO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXNFbnRyaWVzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoaXQpIHtcbiAgICB2YXIgTyA9IHRvSU9iamVjdChpdCk7XG4gICAgdmFyIGtleXMgPSBnZXRLZXlzKE8pO1xuICAgIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHZhciBrZXk7XG4gICAgd2hpbGUgKGxlbmd0aCA+IGkpIGlmIChpc0VudW0uY2FsbChPLCBrZXkgPSBrZXlzW2krK10pKSB7XG4gICAgICByZXN1bHQucHVzaChpc0VudHJpZXMgPyBba2V5LCBPW2tleV1dIDogT1trZXldKTtcbiAgICB9IHJldHVybiByZXN1bHQ7XG4gIH07XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiB7IGU6IGZhbHNlLCB2OiBleGVjKCkgfTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB7IGU6IHRydWUsIHY6IGUgfTtcbiAgfVxufTtcbiIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSByZXF1aXJlKCcuL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEMsIHgpIHtcbiAgYW5PYmplY3QoQyk7XG4gIGlmIChpc09iamVjdCh4KSAmJiB4LmNvbnN0cnVjdG9yID09PSBDKSByZXR1cm4geDtcbiAgdmFyIHByb21pc2VDYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkuZihDKTtcbiAgdmFyIHJlc29sdmUgPSBwcm9taXNlQ2FwYWJpbGl0eS5yZXNvbHZlO1xuICByZXNvbHZlKHgpO1xuICByZXR1cm4gcHJvbWlzZUNhcGFiaWxpdHkucHJvbWlzZTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChiaXRtYXAsIHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZTogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGU6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG59O1xuIiwidmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRhcmdldCwgc3JjLCBzYWZlKSB7XG4gIGZvciAodmFyIGtleSBpbiBzcmMpIHJlZGVmaW5lKHRhcmdldCwga2V5LCBzcmNba2V5XSwgc2FmZSk7XG4gIHJldHVybiB0YXJnZXQ7XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgU1JDID0gcmVxdWlyZSgnLi9fdWlkJykoJ3NyYycpO1xudmFyIFRPX1NUUklORyA9ICd0b1N0cmluZyc7XG52YXIgJHRvU3RyaW5nID0gRnVuY3Rpb25bVE9fU1RSSU5HXTtcbnZhciBUUEwgPSAoJycgKyAkdG9TdHJpbmcpLnNwbGl0KFRPX1NUUklORyk7XG5cbnJlcXVpcmUoJy4vX2NvcmUnKS5pbnNwZWN0U291cmNlID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiAkdG9TdHJpbmcuY2FsbChpdCk7XG59O1xuXG4obW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywga2V5LCB2YWwsIHNhZmUpIHtcbiAgdmFyIGlzRnVuY3Rpb24gPSB0eXBlb2YgdmFsID09ICdmdW5jdGlvbic7XG4gIGlmIChpc0Z1bmN0aW9uKSBoYXModmFsLCAnbmFtZScpIHx8IGhpZGUodmFsLCAnbmFtZScsIGtleSk7XG4gIGlmIChPW2tleV0gPT09IHZhbCkgcmV0dXJuO1xuICBpZiAoaXNGdW5jdGlvbikgaGFzKHZhbCwgU1JDKSB8fCBoaWRlKHZhbCwgU1JDLCBPW2tleV0gPyAnJyArIE9ba2V5XSA6IFRQTC5qb2luKFN0cmluZyhrZXkpKSk7XG4gIGlmIChPID09PSBnbG9iYWwpIHtcbiAgICBPW2tleV0gPSB2YWw7XG4gIH0gZWxzZSBpZiAoIXNhZmUpIHtcbiAgICBkZWxldGUgT1trZXldO1xuICAgIGhpZGUoTywga2V5LCB2YWwpO1xuICB9IGVsc2UgaWYgKE9ba2V5XSkge1xuICAgIE9ba2V5XSA9IHZhbDtcbiAgfSBlbHNlIHtcbiAgICBoaWRlKE8sIGtleSwgdmFsKTtcbiAgfVxuLy8gYWRkIGZha2UgRnVuY3Rpb24jdG9TdHJpbmcgZm9yIGNvcnJlY3Qgd29yayB3cmFwcGVkIG1ldGhvZHMgLyBjb25zdHJ1Y3RvcnMgd2l0aCBtZXRob2RzIGxpa2UgTG9EYXNoIGlzTmF0aXZlXG59KShGdW5jdGlvbi5wcm90b3R5cGUsIFRPX1NUUklORywgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gIHJldHVybiB0eXBlb2YgdGhpcyA9PSAnZnVuY3Rpb24nICYmIHRoaXNbU1JDXSB8fCAkdG9TdHJpbmcuY2FsbCh0aGlzKTtcbn0pO1xuIiwiLy8gV29ya3Mgd2l0aCBfX3Byb3RvX18gb25seS4gT2xkIHY4IGNhbid0IHdvcmsgd2l0aCBudWxsIHByb3RvIG9iamVjdHMuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90byAqL1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBjaGVjayA9IGZ1bmN0aW9uIChPLCBwcm90bykge1xuICBhbk9iamVjdChPKTtcbiAgaWYgKCFpc09iamVjdChwcm90bykgJiYgcHJvdG8gIT09IG51bGwpIHRocm93IFR5cGVFcnJvcihwcm90byArIFwiOiBjYW4ndCBzZXQgYXMgcHJvdG90eXBlIVwiKTtcbn07XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgKCdfX3Byb3RvX18nIGluIHt9ID8gLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgIGZ1bmN0aW9uICh0ZXN0LCBidWdneSwgc2V0KSB7XG4gICAgICB0cnkge1xuICAgICAgICBzZXQgPSByZXF1aXJlKCcuL19jdHgnKShGdW5jdGlvbi5jYWxsLCByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpLmYoT2JqZWN0LnByb3RvdHlwZSwgJ19fcHJvdG9fXycpLnNldCwgMik7XG4gICAgICAgIHNldCh0ZXN0LCBbXSk7XG4gICAgICAgIGJ1Z2d5ID0gISh0ZXN0IGluc3RhbmNlb2YgQXJyYXkpO1xuICAgICAgfSBjYXRjaCAoZSkgeyBidWdneSA9IHRydWU7IH1cbiAgICAgIHJldHVybiBmdW5jdGlvbiBzZXRQcm90b3R5cGVPZihPLCBwcm90bykge1xuICAgICAgICBjaGVjayhPLCBwcm90byk7XG4gICAgICAgIGlmIChidWdneSkgTy5fX3Byb3RvX18gPSBwcm90bztcbiAgICAgICAgZWxzZSBzZXQoTywgcHJvdG8pO1xuICAgICAgICByZXR1cm4gTztcbiAgICAgIH07XG4gICAgfSh7fSwgZmFsc2UpIDogdW5kZWZpbmVkKSxcbiAgY2hlY2s6IGNoZWNrXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpO1xudmFyIFNQRUNJRVMgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChLRVkpIHtcbiAgdmFyIEMgPSBnbG9iYWxbS0VZXTtcbiAgaWYgKERFU0NSSVBUT1JTICYmIEMgJiYgIUNbU1BFQ0lFU10pIGRQLmYoQywgU1BFQ0lFUywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH1cbiAgfSk7XG59O1xuIiwidmFyIGRlZiA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCB0YWcsIHN0YXQpIHtcbiAgaWYgKGl0ICYmICFoYXMoaXQgPSBzdGF0ID8gaXQgOiBpdC5wcm90b3R5cGUsIFRBRykpIGRlZihpdCwgVEFHLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHRhZyB9KTtcbn07XG4iLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ2tleXMnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gc2hhcmVkW2tleV0gfHwgKHNoYXJlZFtrZXldID0gdWlkKGtleSkpO1xufTtcbiIsInZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nO1xudmFyIHN0b3JlID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xuXG4obW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHZhbHVlICE9PSB1bmRlZmluZWQgPyB2YWx1ZSA6IHt9KTtcbn0pKCd2ZXJzaW9ucycsIFtdKS5wdXNoKHtcbiAgdmVyc2lvbjogY29yZS52ZXJzaW9uLFxuICBtb2RlOiByZXF1aXJlKCcuL19saWJyYXJ5JykgPyAncHVyZScgOiAnZ2xvYmFsJyxcbiAgY29weXJpZ2h0OiAnwqkgMjAxOCBEZW5pcyBQdXNoa2FyZXYgKHpsb2lyb2NrLnJ1KSdcbn0pO1xuIiwiLy8gNy4zLjIwIFNwZWNpZXNDb25zdHJ1Y3RvcihPLCBkZWZhdWx0Q29uc3RydWN0b3IpXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG52YXIgU1BFQ0lFUyA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBEKSB7XG4gIHZhciBDID0gYW5PYmplY3QoTykuY29uc3RydWN0b3I7XG4gIHZhciBTO1xuICByZXR1cm4gQyA9PT0gdW5kZWZpbmVkIHx8IChTID0gYW5PYmplY3QoQylbU1BFQ0lFU10pID09IHVuZGVmaW5lZCA/IEQgOiBhRnVuY3Rpb24oUyk7XG59O1xuIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xuLy8gdHJ1ZSAgLT4gU3RyaW5nI2F0XG4vLyBmYWxzZSAtPiBTdHJpbmcjY29kZVBvaW50QXRcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFRPX1NUUklORykge1xuICByZXR1cm4gZnVuY3Rpb24gKHRoYXQsIHBvcykge1xuICAgIHZhciBzID0gU3RyaW5nKGRlZmluZWQodGhhdCkpO1xuICAgIHZhciBpID0gdG9JbnRlZ2VyKHBvcyk7XG4gICAgdmFyIGwgPSBzLmxlbmd0aDtcbiAgICB2YXIgYSwgYjtcbiAgICBpZiAoaSA8IDAgfHwgaSA+PSBsKSByZXR1cm4gVE9fU1RSSU5HID8gJycgOiB1bmRlZmluZWQ7XG4gICAgYSA9IHMuY2hhckNvZGVBdChpKTtcbiAgICByZXR1cm4gYSA8IDB4ZDgwMCB8fCBhID4gMHhkYmZmIHx8IGkgKyAxID09PSBsIHx8IChiID0gcy5jaGFyQ29kZUF0KGkgKyAxKSkgPCAweGRjMDAgfHwgYiA+IDB4ZGZmZlxuICAgICAgPyBUT19TVFJJTkcgPyBzLmNoYXJBdChpKSA6IGFcbiAgICAgIDogVE9fU1RSSU5HID8gcy5zbGljZShpLCBpICsgMikgOiAoYSAtIDB4ZDgwMCA8PCAxMCkgKyAoYiAtIDB4ZGMwMCkgKyAweDEwMDAwO1xuICB9O1xufTtcbiIsInZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBpbnZva2UgPSByZXF1aXJlKCcuL19pbnZva2UnKTtcbnZhciBodG1sID0gcmVxdWlyZSgnLi9faHRtbCcpO1xudmFyIGNlbCA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgc2V0VGFzayA9IGdsb2JhbC5zZXRJbW1lZGlhdGU7XG52YXIgY2xlYXJUYXNrID0gZ2xvYmFsLmNsZWFySW1tZWRpYXRlO1xudmFyIE1lc3NhZ2VDaGFubmVsID0gZ2xvYmFsLk1lc3NhZ2VDaGFubmVsO1xudmFyIERpc3BhdGNoID0gZ2xvYmFsLkRpc3BhdGNoO1xudmFyIGNvdW50ZXIgPSAwO1xudmFyIHF1ZXVlID0ge307XG52YXIgT05SRUFEWVNUQVRFQ0hBTkdFID0gJ29ucmVhZHlzdGF0ZWNoYW5nZSc7XG52YXIgZGVmZXIsIGNoYW5uZWwsIHBvcnQ7XG52YXIgcnVuID0gZnVuY3Rpb24gKCkge1xuICB2YXIgaWQgPSArdGhpcztcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xuICBpZiAocXVldWUuaGFzT3duUHJvcGVydHkoaWQpKSB7XG4gICAgdmFyIGZuID0gcXVldWVbaWRdO1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gICAgZm4oKTtcbiAgfVxufTtcbnZhciBsaXN0ZW5lciA9IGZ1bmN0aW9uIChldmVudCkge1xuICBydW4uY2FsbChldmVudC5kYXRhKTtcbn07XG4vLyBOb2RlLmpzIDAuOSsgJiBJRTEwKyBoYXMgc2V0SW1tZWRpYXRlLCBvdGhlcndpc2U6XG5pZiAoIXNldFRhc2sgfHwgIWNsZWFyVGFzaykge1xuICBzZXRUYXNrID0gZnVuY3Rpb24gc2V0SW1tZWRpYXRlKGZuKSB7XG4gICAgdmFyIGFyZ3MgPSBbXTtcbiAgICB2YXIgaSA9IDE7XG4gICAgd2hpbGUgKGFyZ3VtZW50cy5sZW5ndGggPiBpKSBhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgIHF1ZXVlWysrY291bnRlcl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgICAgIGludm9rZSh0eXBlb2YgZm4gPT0gJ2Z1bmN0aW9uJyA/IGZuIDogRnVuY3Rpb24oZm4pLCBhcmdzKTtcbiAgICB9O1xuICAgIGRlZmVyKGNvdW50ZXIpO1xuICAgIHJldHVybiBjb3VudGVyO1xuICB9O1xuICBjbGVhclRhc2sgPSBmdW5jdGlvbiBjbGVhckltbWVkaWF0ZShpZCkge1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gIH07XG4gIC8vIE5vZGUuanMgMC44LVxuICBpZiAocmVxdWlyZSgnLi9fY29mJykocHJvY2VzcykgPT0gJ3Byb2Nlc3MnKSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soY3R4KHJ1biwgaWQsIDEpKTtcbiAgICB9O1xuICAvLyBTcGhlcmUgKEpTIGdhbWUgZW5naW5lKSBEaXNwYXRjaCBBUElcbiAgfSBlbHNlIGlmIChEaXNwYXRjaCAmJiBEaXNwYXRjaC5ub3cpIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgRGlzcGF0Y2gubm93KGN0eChydW4sIGlkLCAxKSk7XG4gICAgfTtcbiAgLy8gQnJvd3NlcnMgd2l0aCBNZXNzYWdlQ2hhbm5lbCwgaW5jbHVkZXMgV2ViV29ya2Vyc1xuICB9IGVsc2UgaWYgKE1lc3NhZ2VDaGFubmVsKSB7XG4gICAgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuICAgIHBvcnQgPSBjaGFubmVsLnBvcnQyO1xuICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gbGlzdGVuZXI7XG4gICAgZGVmZXIgPSBjdHgocG9ydC5wb3N0TWVzc2FnZSwgcG9ydCwgMSk7XG4gIC8vIEJyb3dzZXJzIHdpdGggcG9zdE1lc3NhZ2UsIHNraXAgV2ViV29ya2Vyc1xuICAvLyBJRTggaGFzIHBvc3RNZXNzYWdlLCBidXQgaXQncyBzeW5jICYgdHlwZW9mIGl0cyBwb3N0TWVzc2FnZSBpcyAnb2JqZWN0J1xuICB9IGVsc2UgaWYgKGdsb2JhbC5hZGRFdmVudExpc3RlbmVyICYmIHR5cGVvZiBwb3N0TWVzc2FnZSA9PSAnZnVuY3Rpb24nICYmICFnbG9iYWwuaW1wb3J0U2NyaXB0cykge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBnbG9iYWwucG9zdE1lc3NhZ2UoaWQgKyAnJywgJyonKTtcbiAgICB9O1xuICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgbGlzdGVuZXIsIGZhbHNlKTtcbiAgLy8gSUU4LVxuICB9IGVsc2UgaWYgKE9OUkVBRFlTVEFURUNIQU5HRSBpbiBjZWwoJ3NjcmlwdCcpKSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoY2VsKCdzY3JpcHQnKSlbT05SRUFEWVNUQVRFQ0hBTkdFXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaHRtbC5yZW1vdmVDaGlsZCh0aGlzKTtcbiAgICAgICAgcnVuLmNhbGwoaWQpO1xuICAgICAgfTtcbiAgICB9O1xuICAvLyBSZXN0IG9sZCBicm93c2Vyc1xuICB9IGVsc2Uge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBzZXRUaW1lb3V0KGN0eChydW4sIGlkLCAxKSwgMCk7XG4gICAgfTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogc2V0VGFzayxcbiAgY2xlYXI6IGNsZWFyVGFza1xufTtcbiIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgbWF4ID0gTWF0aC5tYXg7XG52YXIgbWluID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbmRleCwgbGVuZ3RoKSB7XG4gIGluZGV4ID0gdG9JbnRlZ2VyKGluZGV4KTtcbiAgcmV0dXJuIGluZGV4IDwgMCA/IG1heChpbmRleCArIGxlbmd0aCwgMCkgOiBtaW4oaW5kZXgsIGxlbmd0aCk7XG59O1xuIiwiLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCA9IE1hdGguY2VpbDtcbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXNOYU4oaXQgPSAraXQpID8gMCA6IChpdCA+IDAgPyBmbG9vciA6IGNlaWwpKGl0KTtcbn07XG4iLCIvLyB0byBpbmRleGVkIG9iamVjdCwgdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gSU9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuIiwiLy8gNy4xLjE1IFRvTGVuZ3RoXG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIG1pbiA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07XG4iLCIvLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcbiIsIi8vIDcuMS4xIFRvUHJpbWl0aXZlKGlucHV0IFssIFByZWZlcnJlZFR5cGVdKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBTKSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSByZXR1cm4gaXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZiAoUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKHR5cGVvZiAoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICghUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcbiIsInZhciBpZCA9IDA7XG52YXIgcHggPSBNYXRoLnJhbmRvbSgpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcHgpLnRvU3RyaW5nKDM2KSk7XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIG5hdmlnYXRvciA9IGdsb2JhbC5uYXZpZ2F0b3I7XG5cbm1vZHVsZS5leHBvcnRzID0gbmF2aWdhdG9yICYmIG5hdmlnYXRvci51c2VyQWdlbnQgfHwgJyc7XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBUWVBFKSB7XG4gIGlmICghaXNPYmplY3QoaXQpIHx8IGl0Ll90ICE9PSBUWVBFKSB0aHJvdyBUeXBlRXJyb3IoJ0luY29tcGF0aWJsZSByZWNlaXZlciwgJyArIFRZUEUgKyAnIHJlcXVpcmVkIScpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgTElCUkFSWSA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKTtcbnZhciB3a3NFeHQgPSByZXF1aXJlKCcuL193a3MtZXh0Jyk7XG52YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICB2YXIgJFN5bWJvbCA9IGNvcmUuU3ltYm9sIHx8IChjb3JlLlN5bWJvbCA9IExJQlJBUlkgPyB7fSA6IGdsb2JhbC5TeW1ib2wgfHwge30pO1xuICBpZiAobmFtZS5jaGFyQXQoMCkgIT0gJ18nICYmICEobmFtZSBpbiAkU3ltYm9sKSkgZGVmaW5lUHJvcGVydHkoJFN5bWJvbCwgbmFtZSwgeyB2YWx1ZTogd2tzRXh0LmYobmFtZSkgfSk7XG59O1xuIiwiZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fd2tzJyk7XG4iLCJ2YXIgc3RvcmUgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgnd2tzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG52YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuU3ltYm9sO1xudmFyIFVTRV9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09ICdmdW5jdGlvbic7XG5cbnZhciAkZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9XG4gICAgVVNFX1NZTUJPTCAmJiBTeW1ib2xbbmFtZV0gfHwgKFVTRV9TWU1CT0wgPyBTeW1ib2wgOiB1aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07XG5cbiRleHBvcnRzLnN0b3JlID0gc3RvcmU7XG4iLCJ2YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb3JlJykuZ2V0SXRlcmF0b3JNZXRob2QgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ICE9IHVuZGVmaW5lZCkgcmV0dXJuIGl0W0lURVJBVE9SXVxuICAgIHx8IGl0WydAQGl0ZXJhdG9yJ11cbiAgICB8fCBJdGVyYXRvcnNbY2xhc3NvZihpdCldO1xufTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIDIyLjEuMy44IEFycmF5LnByb3RvdHlwZS5maW5kKHByZWRpY2F0ZSwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgJGZpbmQgPSByZXF1aXJlKCcuL19hcnJheS1tZXRob2RzJykoNSk7XG52YXIgS0VZID0gJ2ZpbmQnO1xudmFyIGZvcmNlZCA9IHRydWU7XG4vLyBTaG91bGRuJ3Qgc2tpcCBob2xlc1xuaWYgKEtFWSBpbiBbXSkgQXJyYXkoMSlbS0VZXShmdW5jdGlvbiAoKSB7IGZvcmNlZCA9IGZhbHNlOyB9KTtcbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogZm9yY2VkLCAnQXJyYXknLCB7XG4gIGZpbmQ6IGZ1bmN0aW9uIGZpbmQoY2FsbGJhY2tmbiAvKiAsIHRoYXQgPSB1bmRlZmluZWQgKi8pIHtcbiAgICByZXR1cm4gJGZpbmQodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcbnJlcXVpcmUoJy4vX2FkZC10by11bnNjb3BhYmxlcycpKEtFWSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4vX2l0ZXItY2FsbCcpO1xudmFyIGlzQXJyYXlJdGVyID0gcmVxdWlyZSgnLi9faXMtYXJyYXktaXRlcicpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgY3JlYXRlUHJvcGVydHkgPSByZXF1aXJlKCcuL19jcmVhdGUtcHJvcGVydHknKTtcbnZhciBnZXRJdGVyRm4gPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFyZXF1aXJlKCcuL19pdGVyLWRldGVjdCcpKGZ1bmN0aW9uIChpdGVyKSB7IEFycmF5LmZyb20oaXRlcik7IH0pLCAnQXJyYXknLCB7XG4gIC8vIDIyLjEuMi4xIEFycmF5LmZyb20oYXJyYXlMaWtlLCBtYXBmbiA9IHVuZGVmaW5lZCwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbiAgZnJvbTogZnVuY3Rpb24gZnJvbShhcnJheUxpa2UgLyogLCBtYXBmbiA9IHVuZGVmaW5lZCwgdGhpc0FyZyA9IHVuZGVmaW5lZCAqLykge1xuICAgIHZhciBPID0gdG9PYmplY3QoYXJyYXlMaWtlKTtcbiAgICB2YXIgQyA9IHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgPyB0aGlzIDogQXJyYXk7XG4gICAgdmFyIGFMZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIHZhciBtYXBmbiA9IGFMZW4gPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkO1xuICAgIHZhciBtYXBwaW5nID0gbWFwZm4gIT09IHVuZGVmaW5lZDtcbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIHZhciBpdGVyRm4gPSBnZXRJdGVyRm4oTyk7XG4gICAgdmFyIGxlbmd0aCwgcmVzdWx0LCBzdGVwLCBpdGVyYXRvcjtcbiAgICBpZiAobWFwcGluZykgbWFwZm4gPSBjdHgobWFwZm4sIGFMZW4gPiAyID8gYXJndW1lbnRzWzJdIDogdW5kZWZpbmVkLCAyKTtcbiAgICAvLyBpZiBvYmplY3QgaXNuJ3QgaXRlcmFibGUgb3IgaXQncyBhcnJheSB3aXRoIGRlZmF1bHQgaXRlcmF0b3IgLSB1c2Ugc2ltcGxlIGNhc2VcbiAgICBpZiAoaXRlckZuICE9IHVuZGVmaW5lZCAmJiAhKEMgPT0gQXJyYXkgJiYgaXNBcnJheUl0ZXIoaXRlckZuKSkpIHtcbiAgICAgIGZvciAoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChPKSwgcmVzdWx0ID0gbmV3IEMoKTsgIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOyBpbmRleCsrKSB7XG4gICAgICAgIGNyZWF0ZVByb3BlcnR5KHJlc3VsdCwgaW5kZXgsIG1hcHBpbmcgPyBjYWxsKGl0ZXJhdG9yLCBtYXBmbiwgW3N0ZXAudmFsdWUsIGluZGV4XSwgdHJ1ZSkgOiBzdGVwLnZhbHVlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgICAgZm9yIChyZXN1bHQgPSBuZXcgQyhsZW5ndGgpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuICAgICAgICBjcmVhdGVQcm9wZXJ0eShyZXN1bHQsIGluZGV4LCBtYXBwaW5nID8gbWFwZm4oT1tpbmRleF0sIGluZGV4KSA6IE9baW5kZXhdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmVzdWx0Lmxlbmd0aCA9IGluZGV4O1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuL19hZGQtdG8tdW5zY29wYWJsZXMnKTtcbnZhciBzdGVwID0gcmVxdWlyZSgnLi9faXRlci1zdGVwJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xuXG4vLyAyMi4xLjMuNCBBcnJheS5wcm90b3R5cGUuZW50cmllcygpXG4vLyAyMi4xLjMuMTMgQXJyYXkucHJvdG90eXBlLmtleXMoKVxuLy8gMjIuMS4zLjI5IEFycmF5LnByb3RvdHlwZS52YWx1ZXMoKVxuLy8gMjIuMS4zLjMwIEFycmF5LnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoQXJyYXksICdBcnJheScsIGZ1bmN0aW9uIChpdGVyYXRlZCwga2luZCkge1xuICB0aGlzLl90ID0gdG9JT2JqZWN0KGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4gIHRoaXMuX2sgPSBraW5kOyAgICAgICAgICAgICAgICAvLyBraW5kXG4vLyAyMi4xLjUuMi4xICVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uICgpIHtcbiAgdmFyIE8gPSB0aGlzLl90O1xuICB2YXIga2luZCA9IHRoaXMuX2s7XG4gIHZhciBpbmRleCA9IHRoaXMuX2krKztcbiAgaWYgKCFPIHx8IGluZGV4ID49IE8ubGVuZ3RoKSB7XG4gICAgdGhpcy5fdCA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc3RlcCgxKTtcbiAgfVxuICBpZiAoa2luZCA9PSAna2V5cycpIHJldHVybiBzdGVwKDAsIGluZGV4KTtcbiAgaWYgKGtpbmQgPT0gJ3ZhbHVlcycpIHJldHVybiBzdGVwKDAsIE9baW5kZXhdKTtcbiAgcmV0dXJuIHN0ZXAoMCwgW2luZGV4LCBPW2luZGV4XV0pO1xufSwgJ3ZhbHVlcycpO1xuXG4vLyBhcmd1bWVudHNMaXN0W0BAaXRlcmF0b3JdIGlzICVBcnJheVByb3RvX3ZhbHVlcyUgKDkuNC40LjYsIDkuNC40LjcpXG5JdGVyYXRvcnMuQXJndW1lbnRzID0gSXRlcmF0b3JzLkFycmF5O1xuXG5hZGRUb1Vuc2NvcGFibGVzKCdrZXlzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCd2YWx1ZXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ2VudHJpZXMnKTtcbiIsInZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgRlByb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlO1xudmFyIG5hbWVSRSA9IC9eXFxzKmZ1bmN0aW9uIChbXiAoXSopLztcbnZhciBOQU1FID0gJ25hbWUnO1xuXG4vLyAxOS4yLjQuMiBuYW1lXG5OQU1FIGluIEZQcm90byB8fCByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmIGRQKEZQcm90bywgTkFNRSwge1xuICBjb25maWd1cmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gKCcnICsgdGhpcykubWF0Y2gobmFtZVJFKVsxXTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBzdHJvbmcgPSByZXF1aXJlKCcuL19jb2xsZWN0aW9uLXN0cm9uZycpO1xudmFyIHZhbGlkYXRlID0gcmVxdWlyZSgnLi9fdmFsaWRhdGUtY29sbGVjdGlvbicpO1xudmFyIE1BUCA9ICdNYXAnO1xuXG4vLyAyMy4xIE1hcCBPYmplY3RzXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvbGxlY3Rpb24nKShNQVAsIGZ1bmN0aW9uIChnZXQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIE1hcCgpIHsgcmV0dXJuIGdldCh0aGlzLCBhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCk7IH07XG59LCB7XG4gIC8vIDIzLjEuMy42IE1hcC5wcm90b3R5cGUuZ2V0KGtleSlcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoa2V5KSB7XG4gICAgdmFyIGVudHJ5ID0gc3Ryb25nLmdldEVudHJ5KHZhbGlkYXRlKHRoaXMsIE1BUCksIGtleSk7XG4gICAgcmV0dXJuIGVudHJ5ICYmIGVudHJ5LnY7XG4gIH0sXG4gIC8vIDIzLjEuMy45IE1hcC5wcm90b3R5cGUuc2V0KGtleSwgdmFsdWUpXG4gIHNldDogZnVuY3Rpb24gc2V0KGtleSwgdmFsdWUpIHtcbiAgICByZXR1cm4gc3Ryb25nLmRlZih2YWxpZGF0ZSh0aGlzLCBNQVApLCBrZXkgPT09IDAgPyAwIDoga2V5LCB2YWx1ZSk7XG4gIH1cbn0sIHN0cm9uZywgdHJ1ZSk7XG4iLCIvLyAxOS4xLjMuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYsICdPYmplY3QnLCB7IGFzc2lnbjogcmVxdWlyZSgnLi9fb2JqZWN0LWFzc2lnbicpIH0pO1xuIiwiLy8gMTkuMS4yLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgna2V5cycsIGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGtleXMoaXQpIHtcbiAgICByZXR1cm4gJGtleXModG9PYmplY3QoaXQpKTtcbiAgfTtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgPSByZXF1aXJlKCcuL19saWJyYXJ5Jyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG52YXIgYW5JbnN0YW5jZSA9IHJlcXVpcmUoJy4vX2FuLWluc3RhbmNlJyk7XG52YXIgZm9yT2YgPSByZXF1aXJlKCcuL19mb3Itb2YnKTtcbnZhciBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuL19zcGVjaWVzLWNvbnN0cnVjdG9yJyk7XG52YXIgdGFzayA9IHJlcXVpcmUoJy4vX3Rhc2snKS5zZXQ7XG52YXIgbWljcm90YXNrID0gcmVxdWlyZSgnLi9fbWljcm90YXNrJykoKTtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eU1vZHVsZSA9IHJlcXVpcmUoJy4vX25ldy1wcm9taXNlLWNhcGFiaWxpdHknKTtcbnZhciBwZXJmb3JtID0gcmVxdWlyZSgnLi9fcGVyZm9ybScpO1xudmFyIHVzZXJBZ2VudCA9IHJlcXVpcmUoJy4vX3VzZXItYWdlbnQnKTtcbnZhciBwcm9taXNlUmVzb2x2ZSA9IHJlcXVpcmUoJy4vX3Byb21pc2UtcmVzb2x2ZScpO1xudmFyIFBST01JU0UgPSAnUHJvbWlzZSc7XG52YXIgVHlwZUVycm9yID0gZ2xvYmFsLlR5cGVFcnJvcjtcbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgdmVyc2lvbnMgPSBwcm9jZXNzICYmIHByb2Nlc3MudmVyc2lvbnM7XG52YXIgdjggPSB2ZXJzaW9ucyAmJiB2ZXJzaW9ucy52OCB8fCAnJztcbnZhciAkUHJvbWlzZSA9IGdsb2JhbFtQUk9NSVNFXTtcbnZhciBpc05vZGUgPSBjbGFzc29mKHByb2Nlc3MpID09ICdwcm9jZXNzJztcbnZhciBlbXB0eSA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcbnZhciBJbnRlcm5hbCwgbmV3R2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5LCBPd25Qcm9taXNlQ2FwYWJpbGl0eSwgV3JhcHBlcjtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IG5ld0dlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlLmY7XG5cbnZhciBVU0VfTkFUSVZFID0gISFmdW5jdGlvbiAoKSB7XG4gIHRyeSB7XG4gICAgLy8gY29ycmVjdCBzdWJjbGFzc2luZyB3aXRoIEBAc3BlY2llcyBzdXBwb3J0XG4gICAgdmFyIHByb21pc2UgPSAkUHJvbWlzZS5yZXNvbHZlKDEpO1xuICAgIHZhciBGYWtlUHJvbWlzZSA9IChwcm9taXNlLmNvbnN0cnVjdG9yID0ge30pW3JlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyldID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgICAgIGV4ZWMoZW1wdHksIGVtcHR5KTtcbiAgICB9O1xuICAgIC8vIHVuaGFuZGxlZCByZWplY3Rpb25zIHRyYWNraW5nIHN1cHBvcnQsIE5vZGVKUyBQcm9taXNlIHdpdGhvdXQgaXQgZmFpbHMgQEBzcGVjaWVzIHRlc3RcbiAgICByZXR1cm4gKGlzTm9kZSB8fCB0eXBlb2YgUHJvbWlzZVJlamVjdGlvbkV2ZW50ID09ICdmdW5jdGlvbicpXG4gICAgICAmJiBwcm9taXNlLnRoZW4oZW1wdHkpIGluc3RhbmNlb2YgRmFrZVByb21pc2VcbiAgICAgIC8vIHY4IDYuNiAoTm9kZSAxMCBhbmQgQ2hyb21lIDY2KSBoYXZlIGEgYnVnIHdpdGggcmVzb2x2aW5nIGN1c3RvbSB0aGVuYWJsZXNcbiAgICAgIC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTgzMDU2NVxuICAgICAgLy8gd2UgY2FuJ3QgZGV0ZWN0IGl0IHN5bmNocm9ub3VzbHksIHNvIGp1c3QgY2hlY2sgdmVyc2lvbnNcbiAgICAgICYmIHY4LmluZGV4T2YoJzYuNicpICE9PSAwXG4gICAgICAmJiB1c2VyQWdlbnQuaW5kZXhPZignQ2hyb21lLzY2JykgPT09IC0xO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbn0oKTtcblxuLy8gaGVscGVyc1xudmFyIGlzVGhlbmFibGUgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIHRoZW47XG4gIHJldHVybiBpc09iamVjdChpdCkgJiYgdHlwZW9mICh0aGVuID0gaXQudGhlbikgPT0gJ2Z1bmN0aW9uJyA/IHRoZW4gOiBmYWxzZTtcbn07XG52YXIgbm90aWZ5ID0gZnVuY3Rpb24gKHByb21pc2UsIGlzUmVqZWN0KSB7XG4gIGlmIChwcm9taXNlLl9uKSByZXR1cm47XG4gIHByb21pc2UuX24gPSB0cnVlO1xuICB2YXIgY2hhaW4gPSBwcm9taXNlLl9jO1xuICBtaWNyb3Rhc2soZnVuY3Rpb24gKCkge1xuICAgIHZhciB2YWx1ZSA9IHByb21pc2UuX3Y7XG4gICAgdmFyIG9rID0gcHJvbWlzZS5fcyA9PSAxO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgcnVuID0gZnVuY3Rpb24gKHJlYWN0aW9uKSB7XG4gICAgICB2YXIgaGFuZGxlciA9IG9rID8gcmVhY3Rpb24ub2sgOiByZWFjdGlvbi5mYWlsO1xuICAgICAgdmFyIHJlc29sdmUgPSByZWFjdGlvbi5yZXNvbHZlO1xuICAgICAgdmFyIHJlamVjdCA9IHJlYWN0aW9uLnJlamVjdDtcbiAgICAgIHZhciBkb21haW4gPSByZWFjdGlvbi5kb21haW47XG4gICAgICB2YXIgcmVzdWx0LCB0aGVuLCBleGl0ZWQ7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoaGFuZGxlcikge1xuICAgICAgICAgIGlmICghb2spIHtcbiAgICAgICAgICAgIGlmIChwcm9taXNlLl9oID09IDIpIG9uSGFuZGxlVW5oYW5kbGVkKHByb21pc2UpO1xuICAgICAgICAgICAgcHJvbWlzZS5faCA9IDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChoYW5kbGVyID09PSB0cnVlKSByZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChkb21haW4pIGRvbWFpbi5lbnRlcigpO1xuICAgICAgICAgICAgcmVzdWx0ID0gaGFuZGxlcih2YWx1ZSk7IC8vIG1heSB0aHJvd1xuICAgICAgICAgICAgaWYgKGRvbWFpbikge1xuICAgICAgICAgICAgICBkb21haW4uZXhpdCgpO1xuICAgICAgICAgICAgICBleGl0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocmVzdWx0ID09PSByZWFjdGlvbi5wcm9taXNlKSB7XG4gICAgICAgICAgICByZWplY3QoVHlwZUVycm9yKCdQcm9taXNlLWNoYWluIGN5Y2xlJykpO1xuICAgICAgICAgIH0gZWxzZSBpZiAodGhlbiA9IGlzVGhlbmFibGUocmVzdWx0KSkge1xuICAgICAgICAgICAgdGhlbi5jYWxsKHJlc3VsdCwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9IGVsc2UgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9IGVsc2UgcmVqZWN0KHZhbHVlKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaWYgKGRvbWFpbiAmJiAhZXhpdGVkKSBkb21haW4uZXhpdCgpO1xuICAgICAgICByZWplY3QoZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB3aGlsZSAoY2hhaW4ubGVuZ3RoID4gaSkgcnVuKGNoYWluW2krK10pOyAvLyB2YXJpYWJsZSBsZW5ndGggLSBjYW4ndCB1c2UgZm9yRWFjaFxuICAgIHByb21pc2UuX2MgPSBbXTtcbiAgICBwcm9taXNlLl9uID0gZmFsc2U7XG4gICAgaWYgKGlzUmVqZWN0ICYmICFwcm9taXNlLl9oKSBvblVuaGFuZGxlZChwcm9taXNlKTtcbiAgfSk7XG59O1xudmFyIG9uVW5oYW5kbGVkID0gZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciB2YWx1ZSA9IHByb21pc2UuX3Y7XG4gICAgdmFyIHVuaGFuZGxlZCA9IGlzVW5oYW5kbGVkKHByb21pc2UpO1xuICAgIHZhciByZXN1bHQsIGhhbmRsZXIsIGNvbnNvbGU7XG4gICAgaWYgKHVuaGFuZGxlZCkge1xuICAgICAgcmVzdWx0ID0gcGVyZm9ybShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChpc05vZGUpIHtcbiAgICAgICAgICBwcm9jZXNzLmVtaXQoJ3VuaGFuZGxlZFJlamVjdGlvbicsIHZhbHVlLCBwcm9taXNlKTtcbiAgICAgICAgfSBlbHNlIGlmIChoYW5kbGVyID0gZ2xvYmFsLm9udW5oYW5kbGVkcmVqZWN0aW9uKSB7XG4gICAgICAgICAgaGFuZGxlcih7IHByb21pc2U6IHByb21pc2UsIHJlYXNvbjogdmFsdWUgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoKGNvbnNvbGUgPSBnbG9iYWwuY29uc29sZSkgJiYgY29uc29sZS5lcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuaGFuZGxlZCBwcm9taXNlIHJlamVjdGlvbicsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICAvLyBCcm93c2VycyBzaG91bGQgbm90IHRyaWdnZXIgYHJlamVjdGlvbkhhbmRsZWRgIGV2ZW50IGlmIGl0IHdhcyBoYW5kbGVkIGhlcmUsIE5vZGVKUyAtIHNob3VsZFxuICAgICAgcHJvbWlzZS5faCA9IGlzTm9kZSB8fCBpc1VuaGFuZGxlZChwcm9taXNlKSA/IDIgOiAxO1xuICAgIH0gcHJvbWlzZS5fYSA9IHVuZGVmaW5lZDtcbiAgICBpZiAodW5oYW5kbGVkICYmIHJlc3VsdC5lKSB0aHJvdyByZXN1bHQudjtcbiAgfSk7XG59O1xudmFyIGlzVW5oYW5kbGVkID0gZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgcmV0dXJuIHByb21pc2UuX2ggIT09IDEgJiYgKHByb21pc2UuX2EgfHwgcHJvbWlzZS5fYykubGVuZ3RoID09PSAwO1xufTtcbnZhciBvbkhhbmRsZVVuaGFuZGxlZCA9IGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gIHRhc2suY2FsbChnbG9iYWwsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaGFuZGxlcjtcbiAgICBpZiAoaXNOb2RlKSB7XG4gICAgICBwcm9jZXNzLmVtaXQoJ3JlamVjdGlvbkhhbmRsZWQnLCBwcm9taXNlKTtcbiAgICB9IGVsc2UgaWYgKGhhbmRsZXIgPSBnbG9iYWwub25yZWplY3Rpb25oYW5kbGVkKSB7XG4gICAgICBoYW5kbGVyKHsgcHJvbWlzZTogcHJvbWlzZSwgcmVhc29uOiBwcm9taXNlLl92IH0pO1xuICAgIH1cbiAgfSk7XG59O1xudmFyICRyZWplY3QgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgdmFyIHByb21pc2UgPSB0aGlzO1xuICBpZiAocHJvbWlzZS5fZCkgcmV0dXJuO1xuICBwcm9taXNlLl9kID0gdHJ1ZTtcbiAgcHJvbWlzZSA9IHByb21pc2UuX3cgfHwgcHJvbWlzZTsgLy8gdW53cmFwXG4gIHByb21pc2UuX3YgPSB2YWx1ZTtcbiAgcHJvbWlzZS5fcyA9IDI7XG4gIGlmICghcHJvbWlzZS5fYSkgcHJvbWlzZS5fYSA9IHByb21pc2UuX2Muc2xpY2UoKTtcbiAgbm90aWZ5KHByb21pc2UsIHRydWUpO1xufTtcbnZhciAkcmVzb2x2ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICB2YXIgcHJvbWlzZSA9IHRoaXM7XG4gIHZhciB0aGVuO1xuICBpZiAocHJvbWlzZS5fZCkgcmV0dXJuO1xuICBwcm9taXNlLl9kID0gdHJ1ZTtcbiAgcHJvbWlzZSA9IHByb21pc2UuX3cgfHwgcHJvbWlzZTsgLy8gdW53cmFwXG4gIHRyeSB7XG4gICAgaWYgKHByb21pc2UgPT09IHZhbHVlKSB0aHJvdyBUeXBlRXJyb3IoXCJQcm9taXNlIGNhbid0IGJlIHJlc29sdmVkIGl0c2VsZlwiKTtcbiAgICBpZiAodGhlbiA9IGlzVGhlbmFibGUodmFsdWUpKSB7XG4gICAgICBtaWNyb3Rhc2soZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgd3JhcHBlciA9IHsgX3c6IHByb21pc2UsIF9kOiBmYWxzZSB9OyAvLyB3cmFwXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhlbi5jYWxsKHZhbHVlLCBjdHgoJHJlc29sdmUsIHdyYXBwZXIsIDEpLCBjdHgoJHJlamVjdCwgd3JhcHBlciwgMSkpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgJHJlamVjdC5jYWxsKHdyYXBwZXIsIGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvbWlzZS5fdiA9IHZhbHVlO1xuICAgICAgcHJvbWlzZS5fcyA9IDE7XG4gICAgICBub3RpZnkocHJvbWlzZSwgZmFsc2UpO1xuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgICRyZWplY3QuY2FsbCh7IF93OiBwcm9taXNlLCBfZDogZmFsc2UgfSwgZSk7IC8vIHdyYXBcbiAgfVxufTtcblxuLy8gY29uc3RydWN0b3IgcG9seWZpbGxcbmlmICghVVNFX05BVElWRSkge1xuICAvLyAyNS40LjMuMSBQcm9taXNlKGV4ZWN1dG9yKVxuICAkUHJvbWlzZSA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3IpIHtcbiAgICBhbkluc3RhbmNlKHRoaXMsICRQcm9taXNlLCBQUk9NSVNFLCAnX2gnKTtcbiAgICBhRnVuY3Rpb24oZXhlY3V0b3IpO1xuICAgIEludGVybmFsLmNhbGwodGhpcyk7XG4gICAgdHJ5IHtcbiAgICAgIGV4ZWN1dG9yKGN0eCgkcmVzb2x2ZSwgdGhpcywgMSksIGN0eCgkcmVqZWN0LCB0aGlzLCAxKSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAkcmVqZWN0LmNhbGwodGhpcywgZXJyKTtcbiAgICB9XG4gIH07XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuICBJbnRlcm5hbCA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3IpIHtcbiAgICB0aGlzLl9jID0gW107ICAgICAgICAgICAgIC8vIDwtIGF3YWl0aW5nIHJlYWN0aW9uc1xuICAgIHRoaXMuX2EgPSB1bmRlZmluZWQ7ICAgICAgLy8gPC0gY2hlY2tlZCBpbiBpc1VuaGFuZGxlZCByZWFjdGlvbnNcbiAgICB0aGlzLl9zID0gMDsgICAgICAgICAgICAgIC8vIDwtIHN0YXRlXG4gICAgdGhpcy5fZCA9IGZhbHNlOyAgICAgICAgICAvLyA8LSBkb25lXG4gICAgdGhpcy5fdiA9IHVuZGVmaW5lZDsgICAgICAvLyA8LSB2YWx1ZVxuICAgIHRoaXMuX2ggPSAwOyAgICAgICAgICAgICAgLy8gPC0gcmVqZWN0aW9uIHN0YXRlLCAwIC0gZGVmYXVsdCwgMSAtIGhhbmRsZWQsIDIgLSB1bmhhbmRsZWRcbiAgICB0aGlzLl9uID0gZmFsc2U7ICAgICAgICAgIC8vIDwtIG5vdGlmeVxuICB9O1xuICBJbnRlcm5hbC5wcm90b3R5cGUgPSByZXF1aXJlKCcuL19yZWRlZmluZS1hbGwnKSgkUHJvbWlzZS5wcm90b3R5cGUsIHtcbiAgICAvLyAyNS40LjUuMyBQcm9taXNlLnByb3RvdHlwZS50aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKVxuICAgIHRoZW46IGZ1bmN0aW9uIHRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpIHtcbiAgICAgIHZhciByZWFjdGlvbiA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHNwZWNpZXNDb25zdHJ1Y3Rvcih0aGlzLCAkUHJvbWlzZSkpO1xuICAgICAgcmVhY3Rpb24ub2sgPSB0eXBlb2Ygb25GdWxmaWxsZWQgPT0gJ2Z1bmN0aW9uJyA/IG9uRnVsZmlsbGVkIDogdHJ1ZTtcbiAgICAgIHJlYWN0aW9uLmZhaWwgPSB0eXBlb2Ygb25SZWplY3RlZCA9PSAnZnVuY3Rpb24nICYmIG9uUmVqZWN0ZWQ7XG4gICAgICByZWFjdGlvbi5kb21haW4gPSBpc05vZGUgPyBwcm9jZXNzLmRvbWFpbiA6IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2MucHVzaChyZWFjdGlvbik7XG4gICAgICBpZiAodGhpcy5fYSkgdGhpcy5fYS5wdXNoKHJlYWN0aW9uKTtcbiAgICAgIGlmICh0aGlzLl9zKSBub3RpZnkodGhpcywgZmFsc2UpO1xuICAgICAgcmV0dXJuIHJlYWN0aW9uLnByb21pc2U7XG4gICAgfSxcbiAgICAvLyAyNS40LjUuMSBQcm9taXNlLnByb3RvdHlwZS5jYXRjaChvblJlamVjdGVkKVxuICAgICdjYXRjaCc6IGZ1bmN0aW9uIChvblJlamVjdGVkKSB7XG4gICAgICByZXR1cm4gdGhpcy50aGVuKHVuZGVmaW5lZCwgb25SZWplY3RlZCk7XG4gICAgfVxuICB9KTtcbiAgT3duUHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHByb21pc2UgPSBuZXcgSW50ZXJuYWwoKTtcbiAgICB0aGlzLnByb21pc2UgPSBwcm9taXNlO1xuICAgIHRoaXMucmVzb2x2ZSA9IGN0eCgkcmVzb2x2ZSwgcHJvbWlzZSwgMSk7XG4gICAgdGhpcy5yZWplY3QgPSBjdHgoJHJlamVjdCwgcHJvbWlzZSwgMSk7XG4gIH07XG4gIG5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlLmYgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uIChDKSB7XG4gICAgcmV0dXJuIEMgPT09ICRQcm9taXNlIHx8IEMgPT09IFdyYXBwZXJcbiAgICAgID8gbmV3IE93blByb21pc2VDYXBhYmlsaXR5KEMpXG4gICAgICA6IG5ld0dlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eShDKTtcbiAgfTtcbn1cblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgeyBQcm9taXNlOiAkUHJvbWlzZSB9KTtcbnJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJykoJFByb21pc2UsIFBST01JU0UpO1xucmVxdWlyZSgnLi9fc2V0LXNwZWNpZXMnKShQUk9NSVNFKTtcbldyYXBwZXIgPSByZXF1aXJlKCcuL19jb3JlJylbUFJPTUlTRV07XG5cbi8vIHN0YXRpY3NcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjUgUHJvbWlzZS5yZWplY3QocilcbiAgcmVqZWN0OiBmdW5jdGlvbiByZWplY3Qocikge1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkodGhpcyk7XG4gICAgdmFyICQkcmVqZWN0ID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgJCRyZWplY3Qocik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIChMSUJSQVJZIHx8ICFVU0VfTkFUSVZFKSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuNiBQcm9taXNlLnJlc29sdmUoeClcbiAgcmVzb2x2ZTogZnVuY3Rpb24gcmVzb2x2ZSh4KSB7XG4gICAgcmV0dXJuIHByb21pc2VSZXNvbHZlKExJQlJBUlkgJiYgdGhpcyA9PT0gV3JhcHBlciA/ICRQcm9taXNlIDogdGhpcywgeCk7XG4gIH1cbn0pO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhKFVTRV9OQVRJVkUgJiYgcmVxdWlyZSgnLi9faXRlci1kZXRlY3QnKShmdW5jdGlvbiAoaXRlcikge1xuICAkUHJvbWlzZS5hbGwoaXRlcilbJ2NhdGNoJ10oZW1wdHkpO1xufSkpLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC4xIFByb21pc2UuYWxsKGl0ZXJhYmxlKVxuICBhbGw6IGZ1bmN0aW9uIGFsbChpdGVyYWJsZSkge1xuICAgIHZhciBDID0gdGhpcztcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KEMpO1xuICAgIHZhciByZXNvbHZlID0gY2FwYWJpbGl0eS5yZXNvbHZlO1xuICAgIHZhciByZWplY3QgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICB2YXIgcmVzdWx0ID0gcGVyZm9ybShmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgdmFsdWVzID0gW107XG4gICAgICB2YXIgaW5kZXggPSAwO1xuICAgICAgdmFyIHJlbWFpbmluZyA9IDE7XG4gICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gICAgICAgIHZhciAkaW5kZXggPSBpbmRleCsrO1xuICAgICAgICB2YXIgYWxyZWFkeUNhbGxlZCA9IGZhbHNlO1xuICAgICAgICB2YWx1ZXMucHVzaCh1bmRlZmluZWQpO1xuICAgICAgICByZW1haW5pbmcrKztcbiAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgaWYgKGFscmVhZHlDYWxsZWQpIHJldHVybjtcbiAgICAgICAgICBhbHJlYWR5Q2FsbGVkID0gdHJ1ZTtcbiAgICAgICAgICB2YWx1ZXNbJGluZGV4XSA9IHZhbHVlO1xuICAgICAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcbiAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgIH0pO1xuICAgIGlmIChyZXN1bHQuZSkgcmVqZWN0KHJlc3VsdC52KTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9LFxuICAvLyAyNS40LjQuNCBQcm9taXNlLnJhY2UoaXRlcmFibGUpXG4gIHJhY2U6IGZ1bmN0aW9uIHJhY2UoaXRlcmFibGUpIHtcbiAgICB2YXIgQyA9IHRoaXM7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKTtcbiAgICB2YXIgcmVqZWN0ID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIHJlc3VsdCA9IHBlcmZvcm0oZnVuY3Rpb24gKCkge1xuICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBmdW5jdGlvbiAocHJvbWlzZSkge1xuICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihjYXBhYmlsaXR5LnJlc29sdmUsIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBpZiAocmVzdWx0LmUpIHJlamVjdChyZXN1bHQudik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG4iLCIvLyAyMS4yLjUuMyBnZXQgUmVnRXhwLnByb3RvdHlwZS5mbGFncygpXG5pZiAocmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAvLi9nLmZsYWdzICE9ICdnJykgcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZihSZWdFeHAucHJvdG90eXBlLCAnZmxhZ3MnLCB7XG4gIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgZ2V0OiByZXF1aXJlKCcuL19mbGFncycpXG59KTtcbiIsIi8vIEBAc3BsaXQgbG9naWNcbnJlcXVpcmUoJy4vX2ZpeC1yZS13a3MnKSgnc3BsaXQnLCAyLCBmdW5jdGlvbiAoZGVmaW5lZCwgU1BMSVQsICRzcGxpdCkge1xuICAndXNlIHN0cmljdCc7XG4gIHZhciBpc1JlZ0V4cCA9IHJlcXVpcmUoJy4vX2lzLXJlZ2V4cCcpO1xuICB2YXIgX3NwbGl0ID0gJHNwbGl0O1xuICB2YXIgJHB1c2ggPSBbXS5wdXNoO1xuICB2YXIgJFNQTElUID0gJ3NwbGl0JztcbiAgdmFyIExFTkdUSCA9ICdsZW5ndGgnO1xuICB2YXIgTEFTVF9JTkRFWCA9ICdsYXN0SW5kZXgnO1xuICBpZiAoXG4gICAgJ2FiYmMnWyRTUExJVF0oLyhiKSovKVsxXSA9PSAnYycgfHxcbiAgICAndGVzdCdbJFNQTElUXSgvKD86KS8sIC0xKVtMRU5HVEhdICE9IDQgfHxcbiAgICAnYWInWyRTUExJVF0oLyg/OmFiKSovKVtMRU5HVEhdICE9IDIgfHxcbiAgICAnLidbJFNQTElUXSgvKC4/KSguPykvKVtMRU5HVEhdICE9IDQgfHxcbiAgICAnLidbJFNQTElUXSgvKCkoKS8pW0xFTkdUSF0gPiAxIHx8XG4gICAgJydbJFNQTElUXSgvLj8vKVtMRU5HVEhdXG4gICkge1xuICAgIHZhciBOUENHID0gLygpPz8vLmV4ZWMoJycpWzFdID09PSB1bmRlZmluZWQ7IC8vIG5vbnBhcnRpY2lwYXRpbmcgY2FwdHVyaW5nIGdyb3VwXG4gICAgLy8gYmFzZWQgb24gZXM1LXNoaW0gaW1wbGVtZW50YXRpb24sIG5lZWQgdG8gcmV3b3JrIGl0XG4gICAgJHNwbGl0ID0gZnVuY3Rpb24gKHNlcGFyYXRvciwgbGltaXQpIHtcbiAgICAgIHZhciBzdHJpbmcgPSBTdHJpbmcodGhpcyk7XG4gICAgICBpZiAoc2VwYXJhdG9yID09PSB1bmRlZmluZWQgJiYgbGltaXQgPT09IDApIHJldHVybiBbXTtcbiAgICAgIC8vIElmIGBzZXBhcmF0b3JgIGlzIG5vdCBhIHJlZ2V4LCB1c2UgbmF0aXZlIHNwbGl0XG4gICAgICBpZiAoIWlzUmVnRXhwKHNlcGFyYXRvcikpIHJldHVybiBfc3BsaXQuY2FsbChzdHJpbmcsIHNlcGFyYXRvciwgbGltaXQpO1xuICAgICAgdmFyIG91dHB1dCA9IFtdO1xuICAgICAgdmFyIGZsYWdzID0gKHNlcGFyYXRvci5pZ25vcmVDYXNlID8gJ2knIDogJycpICtcbiAgICAgICAgICAgICAgICAgIChzZXBhcmF0b3IubXVsdGlsaW5lID8gJ20nIDogJycpICtcbiAgICAgICAgICAgICAgICAgIChzZXBhcmF0b3IudW5pY29kZSA/ICd1JyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAoc2VwYXJhdG9yLnN0aWNreSA/ICd5JyA6ICcnKTtcbiAgICAgIHZhciBsYXN0TGFzdEluZGV4ID0gMDtcbiAgICAgIHZhciBzcGxpdExpbWl0ID0gbGltaXQgPT09IHVuZGVmaW5lZCA/IDQyOTQ5NjcyOTUgOiBsaW1pdCA+Pj4gMDtcbiAgICAgIC8vIE1ha2UgYGdsb2JhbGAgYW5kIGF2b2lkIGBsYXN0SW5kZXhgIGlzc3VlcyBieSB3b3JraW5nIHdpdGggYSBjb3B5XG4gICAgICB2YXIgc2VwYXJhdG9yQ29weSA9IG5ldyBSZWdFeHAoc2VwYXJhdG9yLnNvdXJjZSwgZmxhZ3MgKyAnZycpO1xuICAgICAgdmFyIHNlcGFyYXRvcjIsIG1hdGNoLCBsYXN0SW5kZXgsIGxhc3RMZW5ndGgsIGk7XG4gICAgICAvLyBEb2Vzbid0IG5lZWQgZmxhZ3MgZ3ksIGJ1dCB0aGV5IGRvbid0IGh1cnRcbiAgICAgIGlmICghTlBDRykgc2VwYXJhdG9yMiA9IG5ldyBSZWdFeHAoJ14nICsgc2VwYXJhdG9yQ29weS5zb3VyY2UgKyAnJCg/IVxcXFxzKScsIGZsYWdzKTtcbiAgICAgIHdoaWxlIChtYXRjaCA9IHNlcGFyYXRvckNvcHkuZXhlYyhzdHJpbmcpKSB7XG4gICAgICAgIC8vIGBzZXBhcmF0b3JDb3B5Lmxhc3RJbmRleGAgaXMgbm90IHJlbGlhYmxlIGNyb3NzLWJyb3dzZXJcbiAgICAgICAgbGFzdEluZGV4ID0gbWF0Y2guaW5kZXggKyBtYXRjaFswXVtMRU5HVEhdO1xuICAgICAgICBpZiAobGFzdEluZGV4ID4gbGFzdExhc3RJbmRleCkge1xuICAgICAgICAgIG91dHB1dC5wdXNoKHN0cmluZy5zbGljZShsYXN0TGFzdEluZGV4LCBtYXRjaC5pbmRleCkpO1xuICAgICAgICAgIC8vIEZpeCBicm93c2VycyB3aG9zZSBgZXhlY2AgbWV0aG9kcyBkb24ndCBjb25zaXN0ZW50bHkgcmV0dXJuIGB1bmRlZmluZWRgIGZvciBOUENHXG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWxvb3AtZnVuY1xuICAgICAgICAgIGlmICghTlBDRyAmJiBtYXRjaFtMRU5HVEhdID4gMSkgbWF0Y2hbMF0ucmVwbGFjZShzZXBhcmF0b3IyLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBmb3IgKGkgPSAxOyBpIDwgYXJndW1lbnRzW0xFTkdUSF0gLSAyOyBpKyspIGlmIChhcmd1bWVudHNbaV0gPT09IHVuZGVmaW5lZCkgbWF0Y2hbaV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaWYgKG1hdGNoW0xFTkdUSF0gPiAxICYmIG1hdGNoLmluZGV4IDwgc3RyaW5nW0xFTkdUSF0pICRwdXNoLmFwcGx5KG91dHB1dCwgbWF0Y2guc2xpY2UoMSkpO1xuICAgICAgICAgIGxhc3RMZW5ndGggPSBtYXRjaFswXVtMRU5HVEhdO1xuICAgICAgICAgIGxhc3RMYXN0SW5kZXggPSBsYXN0SW5kZXg7XG4gICAgICAgICAgaWYgKG91dHB1dFtMRU5HVEhdID49IHNwbGl0TGltaXQpIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzZXBhcmF0b3JDb3B5W0xBU1RfSU5ERVhdID09PSBtYXRjaC5pbmRleCkgc2VwYXJhdG9yQ29weVtMQVNUX0lOREVYXSsrOyAvLyBBdm9pZCBhbiBpbmZpbml0ZSBsb29wXG4gICAgICB9XG4gICAgICBpZiAobGFzdExhc3RJbmRleCA9PT0gc3RyaW5nW0xFTkdUSF0pIHtcbiAgICAgICAgaWYgKGxhc3RMZW5ndGggfHwgIXNlcGFyYXRvckNvcHkudGVzdCgnJykpIG91dHB1dC5wdXNoKCcnKTtcbiAgICAgIH0gZWxzZSBvdXRwdXQucHVzaChzdHJpbmcuc2xpY2UobGFzdExhc3RJbmRleCkpO1xuICAgICAgcmV0dXJuIG91dHB1dFtMRU5HVEhdID4gc3BsaXRMaW1pdCA/IG91dHB1dC5zbGljZSgwLCBzcGxpdExpbWl0KSA6IG91dHB1dDtcbiAgICB9O1xuICAvLyBDaGFrcmEsIFY4XG4gIH0gZWxzZSBpZiAoJzAnWyRTUExJVF0odW5kZWZpbmVkLCAwKVtMRU5HVEhdKSB7XG4gICAgJHNwbGl0ID0gZnVuY3Rpb24gKHNlcGFyYXRvciwgbGltaXQpIHtcbiAgICAgIHJldHVybiBzZXBhcmF0b3IgPT09IHVuZGVmaW5lZCAmJiBsaW1pdCA9PT0gMCA/IFtdIDogX3NwbGl0LmNhbGwodGhpcywgc2VwYXJhdG9yLCBsaW1pdCk7XG4gICAgfTtcbiAgfVxuICAvLyAyMS4xLjMuMTcgU3RyaW5nLnByb3RvdHlwZS5zcGxpdChzZXBhcmF0b3IsIGxpbWl0KVxuICByZXR1cm4gW2Z1bmN0aW9uIHNwbGl0KHNlcGFyYXRvciwgbGltaXQpIHtcbiAgICB2YXIgTyA9IGRlZmluZWQodGhpcyk7XG4gICAgdmFyIGZuID0gc2VwYXJhdG9yID09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IHNlcGFyYXRvcltTUExJVF07XG4gICAgcmV0dXJuIGZuICE9PSB1bmRlZmluZWQgPyBmbi5jYWxsKHNlcGFyYXRvciwgTywgbGltaXQpIDogJHNwbGl0LmNhbGwoU3RyaW5nKE8pLCBzZXBhcmF0b3IsIGxpbWl0KTtcbiAgfSwgJHNwbGl0XTtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xucmVxdWlyZSgnLi9lczYucmVnZXhwLmZsYWdzJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciAkZmxhZ3MgPSByZXF1aXJlKCcuL19mbGFncycpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcbnZhciBUT19TVFJJTkcgPSAndG9TdHJpbmcnO1xudmFyICR0b1N0cmluZyA9IC8uL1tUT19TVFJJTkddO1xuXG52YXIgZGVmaW5lID0gZnVuY3Rpb24gKGZuKSB7XG4gIHJlcXVpcmUoJy4vX3JlZGVmaW5lJykoUmVnRXhwLnByb3RvdHlwZSwgVE9fU1RSSU5HLCBmbiwgdHJ1ZSk7XG59O1xuXG4vLyAyMS4yLjUuMTQgUmVnRXhwLnByb3RvdHlwZS50b1N0cmluZygpXG5pZiAocmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7IHJldHVybiAkdG9TdHJpbmcuY2FsbCh7IHNvdXJjZTogJ2EnLCBmbGFnczogJ2InIH0pICE9ICcvYS9iJzsgfSkpIHtcbiAgZGVmaW5lKGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHZhciBSID0gYW5PYmplY3QodGhpcyk7XG4gICAgcmV0dXJuICcvJy5jb25jYXQoUi5zb3VyY2UsICcvJyxcbiAgICAgICdmbGFncycgaW4gUiA/IFIuZmxhZ3MgOiAhREVTQ1JJUFRPUlMgJiYgUiBpbnN0YW5jZW9mIFJlZ0V4cCA/ICRmbGFncy5jYWxsKFIpIDogdW5kZWZpbmVkKTtcbiAgfSk7XG4vLyBGRjQ0LSBSZWdFeHAjdG9TdHJpbmcgaGFzIGEgd3JvbmcgbmFtZVxufSBlbHNlIGlmICgkdG9TdHJpbmcubmFtZSAhPSBUT19TVFJJTkcpIHtcbiAgZGVmaW5lKGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiAkdG9TdHJpbmcuY2FsbCh0aGlzKTtcbiAgfSk7XG59XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJGF0ID0gcmVxdWlyZSgnLi9fc3RyaW5nLWF0JykodHJ1ZSk7XG5cbi8vIDIxLjEuMy4yNyBTdHJpbmcucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoU3RyaW5nLCAnU3RyaW5nJywgZnVuY3Rpb24gKGl0ZXJhdGVkKSB7XG4gIHRoaXMuX3QgPSBTdHJpbmcoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbi8vIDIxLjEuNS4yLjEgJVN0cmluZ0l0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uICgpIHtcbiAgdmFyIE8gPSB0aGlzLl90O1xuICB2YXIgaW5kZXggPSB0aGlzLl9pO1xuICB2YXIgcG9pbnQ7XG4gIGlmIChpbmRleCA+PSBPLmxlbmd0aCkgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICBwb2ludCA9ICRhdChPLCBpbmRleCk7XG4gIHRoaXMuX2kgKz0gcG9pbnQubGVuZ3RoO1xuICByZXR1cm4geyB2YWx1ZTogcG9pbnQsIGRvbmU6IGZhbHNlIH07XG59KTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIEVDTUFTY3JpcHQgNiBzeW1ib2xzIHNoaW1cbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBNRVRBID0gcmVxdWlyZSgnLi9fbWV0YScpLktFWTtcbnZhciAkZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbnZhciB3a3MgPSByZXF1aXJlKCcuL193a3MnKTtcbnZhciB3a3NFeHQgPSByZXF1aXJlKCcuL193a3MtZXh0Jyk7XG52YXIgd2tzRGVmaW5lID0gcmVxdWlyZSgnLi9fd2tzLWRlZmluZScpO1xudmFyIGVudW1LZXlzID0gcmVxdWlyZSgnLi9fZW51bS1rZXlzJyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4vX2lzLWFycmF5Jyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgX2NyZWF0ZSA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKTtcbnZhciBnT1BORXh0ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4tZXh0Jyk7XG52YXIgJEdPUEQgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpO1xudmFyICREUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciBnT1BEID0gJEdPUEQuZjtcbnZhciBkUCA9ICREUC5mO1xudmFyIGdPUE4gPSBnT1BORXh0LmY7XG52YXIgJFN5bWJvbCA9IGdsb2JhbC5TeW1ib2w7XG52YXIgJEpTT04gPSBnbG9iYWwuSlNPTjtcbnZhciBfc3RyaW5naWZ5ID0gJEpTT04gJiYgJEpTT04uc3RyaW5naWZ5O1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xudmFyIEhJRERFTiA9IHdrcygnX2hpZGRlbicpO1xudmFyIFRPX1BSSU1JVElWRSA9IHdrcygndG9QcmltaXRpdmUnKTtcbnZhciBpc0VudW0gPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbnZhciBTeW1ib2xSZWdpc3RyeSA9IHNoYXJlZCgnc3ltYm9sLXJlZ2lzdHJ5Jyk7XG52YXIgQWxsU3ltYm9scyA9IHNoYXJlZCgnc3ltYm9scycpO1xudmFyIE9QU3ltYm9scyA9IHNoYXJlZCgnb3Atc3ltYm9scycpO1xudmFyIE9iamVjdFByb3RvID0gT2JqZWN0W1BST1RPVFlQRV07XG52YXIgVVNFX05BVElWRSA9IHR5cGVvZiAkU3ltYm9sID09ICdmdW5jdGlvbic7XG52YXIgUU9iamVjdCA9IGdsb2JhbC5RT2JqZWN0O1xuLy8gRG9uJ3QgdXNlIHNldHRlcnMgaW4gUXQgU2NyaXB0LCBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMTczXG52YXIgc2V0dGVyID0gIVFPYmplY3QgfHwgIVFPYmplY3RbUFJPVE9UWVBFXSB8fCAhUU9iamVjdFtQUk9UT1RZUEVdLmZpbmRDaGlsZDtcblxuLy8gZmFsbGJhY2sgZm9yIG9sZCBBbmRyb2lkLCBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9Njg3XG52YXIgc2V0U3ltYm9sRGVzYyA9IERFU0NSSVBUT1JTICYmICRmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBfY3JlYXRlKGRQKHt9LCAnYScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRQKHRoaXMsICdhJywgeyB2YWx1ZTogNyB9KS5hOyB9XG4gIH0pKS5hICE9IDc7XG59KSA/IGZ1bmN0aW9uIChpdCwga2V5LCBEKSB7XG4gIHZhciBwcm90b0Rlc2MgPSBnT1BEKE9iamVjdFByb3RvLCBrZXkpO1xuICBpZiAocHJvdG9EZXNjKSBkZWxldGUgT2JqZWN0UHJvdG9ba2V5XTtcbiAgZFAoaXQsIGtleSwgRCk7XG4gIGlmIChwcm90b0Rlc2MgJiYgaXQgIT09IE9iamVjdFByb3RvKSBkUChPYmplY3RQcm90bywga2V5LCBwcm90b0Rlc2MpO1xufSA6IGRQO1xuXG52YXIgd3JhcCA9IGZ1bmN0aW9uICh0YWcpIHtcbiAgdmFyIHN5bSA9IEFsbFN5bWJvbHNbdGFnXSA9IF9jcmVhdGUoJFN5bWJvbFtQUk9UT1RZUEVdKTtcbiAgc3ltLl9rID0gdGFnO1xuICByZXR1cm4gc3ltO1xufTtcblxudmFyIGlzU3ltYm9sID0gVVNFX05BVElWRSAmJiB0eXBlb2YgJFN5bWJvbC5pdGVyYXRvciA9PSAnc3ltYm9sJyA/IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnO1xufSA6IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgaW5zdGFuY2VvZiAkU3ltYm9sO1xufTtcblxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIEQpIHtcbiAgaWYgKGl0ID09PSBPYmplY3RQcm90bykgJGRlZmluZVByb3BlcnR5KE9QU3ltYm9scywga2V5LCBEKTtcbiAgYW5PYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBhbk9iamVjdChEKTtcbiAgaWYgKGhhcyhBbGxTeW1ib2xzLCBrZXkpKSB7XG4gICAgaWYgKCFELmVudW1lcmFibGUpIHtcbiAgICAgIGlmICghaGFzKGl0LCBISURERU4pKSBkUChpdCwgSElEREVOLCBjcmVhdGVEZXNjKDEsIHt9KSk7XG4gICAgICBpdFtISURERU5dW2tleV0gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSkgaXRbSElEREVOXVtrZXldID0gZmFsc2U7XG4gICAgICBEID0gX2NyZWF0ZShELCB7IGVudW1lcmFibGU6IGNyZWF0ZURlc2MoMCwgZmFsc2UpIH0pO1xuICAgIH0gcmV0dXJuIHNldFN5bWJvbERlc2MoaXQsIGtleSwgRCk7XG4gIH0gcmV0dXJuIGRQKGl0LCBrZXksIEQpO1xufTtcbnZhciAkZGVmaW5lUHJvcGVydGllcyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoaXQsIFApIHtcbiAgYW5PYmplY3QoaXQpO1xuICB2YXIga2V5cyA9IGVudW1LZXlzKFAgPSB0b0lPYmplY3QoUCkpO1xuICB2YXIgaSA9IDA7XG4gIHZhciBsID0ga2V5cy5sZW5ndGg7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChsID4gaSkgJGRlZmluZVByb3BlcnR5KGl0LCBrZXkgPSBrZXlzW2krK10sIFBba2V5XSk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgJGNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpdCwgUCkge1xuICByZXR1cm4gUCA9PT0gdW5kZWZpbmVkID8gX2NyZWF0ZShpdCkgOiAkZGVmaW5lUHJvcGVydGllcyhfY3JlYXRlKGl0KSwgUCk7XG59O1xudmFyICRwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKGtleSkge1xuICB2YXIgRSA9IGlzRW51bS5jYWxsKHRoaXMsIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSkpO1xuICBpZiAodGhpcyA9PT0gT2JqZWN0UHJvdG8gJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPUFN5bWJvbHMsIGtleSkpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIEUgfHwgIWhhcyh0aGlzLCBrZXkpIHx8ICFoYXMoQWxsU3ltYm9scywga2V5KSB8fCBoYXModGhpcywgSElEREVOKSAmJiB0aGlzW0hJRERFTl1ba2V5XSA/IEUgOiB0cnVlO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpIHtcbiAgaXQgPSB0b0lPYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBpZiAoaXQgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKSByZXR1cm47XG4gIHZhciBEID0gZ09QRChpdCwga2V5KTtcbiAgaWYgKEQgJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIShoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKSkgRC5lbnVtZXJhYmxlID0gdHJ1ZTtcbiAgcmV0dXJuIEQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eU5hbWVzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCkge1xuICB2YXIgbmFtZXMgPSBnT1BOKHRvSU9iamVjdChpdCkpO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBpID0gMDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIHtcbiAgICBpZiAoIWhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiBrZXkgIT0gSElEREVOICYmIGtleSAhPSBNRVRBKSByZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoaXQpIHtcbiAgdmFyIElTX09QID0gaXQgPT09IE9iamVjdFByb3RvO1xuICB2YXIgbmFtZXMgPSBnT1BOKElTX09QID8gT1BTeW1ib2xzIDogdG9JT2JqZWN0KGl0KSk7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGkgPSAwO1xuICB2YXIga2V5O1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkge1xuICAgIGlmIChoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYgKElTX09QID8gaGFzKE9iamVjdFByb3RvLCBrZXkpIDogdHJ1ZSkpIHJlc3VsdC5wdXNoKEFsbFN5bWJvbHNba2V5XSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8vIDE5LjQuMS4xIFN5bWJvbChbZGVzY3JpcHRpb25dKVxuaWYgKCFVU0VfTkFUSVZFKSB7XG4gICRTeW1ib2wgPSBmdW5jdGlvbiBTeW1ib2woKSB7XG4gICAgaWYgKHRoaXMgaW5zdGFuY2VvZiAkU3ltYm9sKSB0aHJvdyBUeXBlRXJyb3IoJ1N5bWJvbCBpcyBub3QgYSBjb25zdHJ1Y3RvciEnKTtcbiAgICB2YXIgdGFnID0gdWlkKGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTtcbiAgICB2YXIgJHNldCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgaWYgKHRoaXMgPT09IE9iamVjdFByb3RvKSAkc2V0LmNhbGwoT1BTeW1ib2xzLCB2YWx1ZSk7XG4gICAgICBpZiAoaGFzKHRoaXMsIEhJRERFTikgJiYgaGFzKHRoaXNbSElEREVOXSwgdGFnKSkgdGhpc1tISURERU5dW3RhZ10gPSBmYWxzZTtcbiAgICAgIHNldFN5bWJvbERlc2ModGhpcywgdGFnLCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG4gICAgfTtcbiAgICBpZiAoREVTQ1JJUFRPUlMgJiYgc2V0dGVyKSBzZXRTeW1ib2xEZXNjKE9iamVjdFByb3RvLCB0YWcsIHsgY29uZmlndXJhYmxlOiB0cnVlLCBzZXQ6ICRzZXQgfSk7XG4gICAgcmV0dXJuIHdyYXAodGFnKTtcbiAgfTtcbiAgcmVkZWZpbmUoJFN5bWJvbFtQUk9UT1RZUEVdLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5faztcbiAgfSk7XG5cbiAgJEdPUEQuZiA9ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG4gICREUC5mID0gJGRlZmluZVByb3BlcnR5O1xuICByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmYgPSBnT1BORXh0LmYgPSAkZ2V0T3duUHJvcGVydHlOYW1lcztcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpLmYgPSAkcHJvcGVydHlJc0VudW1lcmFibGU7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJykuZiA9ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbiAgaWYgKERFU0NSSVBUT1JTICYmICFyZXF1aXJlKCcuL19saWJyYXJ5JykpIHtcbiAgICByZWRlZmluZShPYmplY3RQcm90bywgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJywgJHByb3BlcnR5SXNFbnVtZXJhYmxlLCB0cnVlKTtcbiAgfVxuXG4gIHdrc0V4dC5mID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICByZXR1cm4gd3JhcCh3a3MobmFtZSkpO1xuICB9O1xufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7IFN5bWJvbDogJFN5bWJvbCB9KTtcblxuZm9yICh2YXIgZXM2U3ltYm9scyA9IChcbiAgLy8gMTkuNC4yLjIsIDE5LjQuMi4zLCAxOS40LjIuNCwgMTkuNC4yLjYsIDE5LjQuMi44LCAxOS40LjIuOSwgMTkuNC4yLjEwLCAxOS40LjIuMTEsIDE5LjQuMi4xMiwgMTkuNC4yLjEzLCAxOS40LjIuMTRcbiAgJ2hhc0luc3RhbmNlLGlzQ29uY2F0U3ByZWFkYWJsZSxpdGVyYXRvcixtYXRjaCxyZXBsYWNlLHNlYXJjaCxzcGVjaWVzLHNwbGl0LHRvUHJpbWl0aXZlLHRvU3RyaW5nVGFnLHVuc2NvcGFibGVzJ1xuKS5zcGxpdCgnLCcpLCBqID0gMDsgZXM2U3ltYm9scy5sZW5ndGggPiBqOyl3a3MoZXM2U3ltYm9sc1tqKytdKTtcblxuZm9yICh2YXIgd2VsbEtub3duU3ltYm9scyA9ICRrZXlzKHdrcy5zdG9yZSksIGsgPSAwOyB3ZWxsS25vd25TeW1ib2xzLmxlbmd0aCA+IGs7KSB3a3NEZWZpbmUod2VsbEtub3duU3ltYm9sc1trKytdKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ1N5bWJvbCcsIHtcbiAgLy8gMTkuNC4yLjEgU3ltYm9sLmZvcihrZXkpXG4gICdmb3InOiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIGhhcyhTeW1ib2xSZWdpc3RyeSwga2V5ICs9ICcnKVxuICAgICAgPyBTeW1ib2xSZWdpc3RyeVtrZXldXG4gICAgICA6IFN5bWJvbFJlZ2lzdHJ5W2tleV0gPSAkU3ltYm9sKGtleSk7XG4gIH0sXG4gIC8vIDE5LjQuMi41IFN5bWJvbC5rZXlGb3Ioc3ltKVxuICBrZXlGb3I6IGZ1bmN0aW9uIGtleUZvcihzeW0pIHtcbiAgICBpZiAoIWlzU3ltYm9sKHN5bSkpIHRocm93IFR5cGVFcnJvcihzeW0gKyAnIGlzIG5vdCBhIHN5bWJvbCEnKTtcbiAgICBmb3IgKHZhciBrZXkgaW4gU3ltYm9sUmVnaXN0cnkpIGlmIChTeW1ib2xSZWdpc3RyeVtrZXldID09PSBzeW0pIHJldHVybiBrZXk7XG4gIH0sXG4gIHVzZVNldHRlcjogZnVuY3Rpb24gKCkgeyBzZXR0ZXIgPSB0cnVlOyB9LFxuICB1c2VTaW1wbGU6IGZ1bmN0aW9uICgpIHsgc2V0dGVyID0gZmFsc2U7IH1cbn0pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnT2JqZWN0Jywge1xuICAvLyAxOS4xLjIuMiBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG4gIGNyZWF0ZTogJGNyZWF0ZSxcbiAgLy8gMTkuMS4yLjQgT2JqZWN0LmRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpXG4gIGRlZmluZVByb3BlcnR5OiAkZGVmaW5lUHJvcGVydHksXG4gIC8vIDE5LjEuMi4zIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpXG4gIGRlZmluZVByb3BlcnRpZXM6ICRkZWZpbmVQcm9wZXJ0aWVzLFxuICAvLyAxOS4xLjIuNiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApXG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvcjogJGdldE93blByb3BlcnR5RGVzY3JpcHRvcixcbiAgLy8gMTkuMS4yLjcgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbiAgZ2V0T3duUHJvcGVydHlOYW1lczogJGdldE93blByb3BlcnR5TmFtZXMsXG4gIC8vIDE5LjEuMi44IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoTylcbiAgZ2V0T3duUHJvcGVydHlTeW1ib2xzOiAkZ2V0T3duUHJvcGVydHlTeW1ib2xzXG59KTtcblxuLy8gMjQuMy4yIEpTT04uc3RyaW5naWZ5KHZhbHVlIFssIHJlcGxhY2VyIFssIHNwYWNlXV0pXG4kSlNPTiAmJiAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICghVVNFX05BVElWRSB8fCAkZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgUyA9ICRTeW1ib2woKTtcbiAgLy8gTVMgRWRnZSBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMge31cbiAgLy8gV2ViS2l0IGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyBudWxsXG4gIC8vIFY4IHRocm93cyBvbiBib3hlZCBzeW1ib2xzXG4gIHJldHVybiBfc3RyaW5naWZ5KFtTXSkgIT0gJ1tudWxsXScgfHwgX3N0cmluZ2lmeSh7IGE6IFMgfSkgIT0gJ3t9JyB8fCBfc3RyaW5naWZ5KE9iamVjdChTKSkgIT0gJ3t9Jztcbn0pKSwgJ0pTT04nLCB7XG4gIHN0cmluZ2lmeTogZnVuY3Rpb24gc3RyaW5naWZ5KGl0KSB7XG4gICAgdmFyIGFyZ3MgPSBbaXRdO1xuICAgIHZhciBpID0gMTtcbiAgICB2YXIgcmVwbGFjZXIsICRyZXBsYWNlcjtcbiAgICB3aGlsZSAoYXJndW1lbnRzLmxlbmd0aCA+IGkpIGFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgJHJlcGxhY2VyID0gcmVwbGFjZXIgPSBhcmdzWzFdO1xuICAgIGlmICghaXNPYmplY3QocmVwbGFjZXIpICYmIGl0ID09PSB1bmRlZmluZWQgfHwgaXNTeW1ib2woaXQpKSByZXR1cm47IC8vIElFOCByZXR1cm5zIHN0cmluZyBvbiB1bmRlZmluZWRcbiAgICBpZiAoIWlzQXJyYXkocmVwbGFjZXIpKSByZXBsYWNlciA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICBpZiAodHlwZW9mICRyZXBsYWNlciA9PSAnZnVuY3Rpb24nKSB2YWx1ZSA9ICRyZXBsYWNlci5jYWxsKHRoaXMsIGtleSwgdmFsdWUpO1xuICAgICAgaWYgKCFpc1N5bWJvbCh2YWx1ZSkpIHJldHVybiB2YWx1ZTtcbiAgICB9O1xuICAgIGFyZ3NbMV0gPSByZXBsYWNlcjtcbiAgICByZXR1cm4gX3N0cmluZ2lmeS5hcHBseSgkSlNPTiwgYXJncyk7XG4gIH1cbn0pO1xuXG4vLyAxOS40LjMuNCBTeW1ib2wucHJvdG90eXBlW0BAdG9QcmltaXRpdmVdKGhpbnQpXG4kU3ltYm9sW1BST1RPVFlQRV1bVE9fUFJJTUlUSVZFXSB8fCByZXF1aXJlKCcuL19oaWRlJykoJFN5bWJvbFtQUk9UT1RZUEVdLCBUT19QUklNSVRJVkUsICRTeW1ib2xbUFJPVE9UWVBFXS52YWx1ZU9mKTtcbi8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKCRTeW1ib2wsICdTeW1ib2wnKTtcbi8vIDIwLjIuMS45IE1hdGhbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKE1hdGgsICdNYXRoJywgdHJ1ZSk7XG4vLyAyNC4zLjMgSlNPTltAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoZ2xvYmFsLkpTT04sICdKU09OJywgdHJ1ZSk7XG4iLCIndXNlIHN0cmljdCc7XG4vLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9BcnJheS5wcm90b3R5cGUuaW5jbHVkZXNcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgJGluY2x1ZGVzID0gcmVxdWlyZSgnLi9fYXJyYXktaW5jbHVkZXMnKSh0cnVlKTtcblxuJGV4cG9ydCgkZXhwb3J0LlAsICdBcnJheScsIHtcbiAgaW5jbHVkZXM6IGZ1bmN0aW9uIGluY2x1ZGVzKGVsIC8qICwgZnJvbUluZGV4ID0gMCAqLykge1xuICAgIHJldHVybiAkaW5jbHVkZXModGhpcywgZWwsIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG5cbnJlcXVpcmUoJy4vX2FkZC10by11bnNjb3BhYmxlcycpKCdpbmNsdWRlcycpO1xuIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtb2JqZWN0LXZhbHVlcy1lbnRyaWVzXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyICRlbnRyaWVzID0gcmVxdWlyZSgnLi9fb2JqZWN0LXRvLWFycmF5JykodHJ1ZSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnT2JqZWN0Jywge1xuICBlbnRyaWVzOiBmdW5jdGlvbiBlbnRyaWVzKGl0KSB7XG4gICAgcmV0dXJuICRlbnRyaWVzKGl0KTtcbiAgfVxufSk7XG4iLCIvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1vYmplY3QtdmFsdWVzLWVudHJpZXNcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgJHZhbHVlcyA9IHJlcXVpcmUoJy4vX29iamVjdC10by1hcnJheScpKGZhbHNlKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdPYmplY3QnLCB7XG4gIHZhbHVlczogZnVuY3Rpb24gdmFsdWVzKGl0KSB7XG4gICAgcmV0dXJuICR2YWx1ZXMoaXQpO1xuICB9XG59KTtcbiIsInJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKSgnYXN5bmNJdGVyYXRvcicpO1xuIiwidmFyICRpdGVyYXRvcnMgPSByZXF1aXJlKCcuL2VzNi5hcnJheS5pdGVyYXRvcicpO1xudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyIHdrcyA9IHJlcXVpcmUoJy4vX3drcycpO1xudmFyIElURVJBVE9SID0gd2tzKCdpdGVyYXRvcicpO1xudmFyIFRPX1NUUklOR19UQUcgPSB3a3MoJ3RvU3RyaW5nVGFnJyk7XG52YXIgQXJyYXlWYWx1ZXMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbnZhciBET01JdGVyYWJsZXMgPSB7XG4gIENTU1J1bGVMaXN0OiB0cnVlLCAvLyBUT0RPOiBOb3Qgc3BlYyBjb21wbGlhbnQsIHNob3VsZCBiZSBmYWxzZS5cbiAgQ1NTU3R5bGVEZWNsYXJhdGlvbjogZmFsc2UsXG4gIENTU1ZhbHVlTGlzdDogZmFsc2UsXG4gIENsaWVudFJlY3RMaXN0OiBmYWxzZSxcbiAgRE9NUmVjdExpc3Q6IGZhbHNlLFxuICBET01TdHJpbmdMaXN0OiBmYWxzZSxcbiAgRE9NVG9rZW5MaXN0OiB0cnVlLFxuICBEYXRhVHJhbnNmZXJJdGVtTGlzdDogZmFsc2UsXG4gIEZpbGVMaXN0OiBmYWxzZSxcbiAgSFRNTEFsbENvbGxlY3Rpb246IGZhbHNlLFxuICBIVE1MQ29sbGVjdGlvbjogZmFsc2UsXG4gIEhUTUxGb3JtRWxlbWVudDogZmFsc2UsXG4gIEhUTUxTZWxlY3RFbGVtZW50OiBmYWxzZSxcbiAgTWVkaWFMaXN0OiB0cnVlLCAvLyBUT0RPOiBOb3Qgc3BlYyBjb21wbGlhbnQsIHNob3VsZCBiZSBmYWxzZS5cbiAgTWltZVR5cGVBcnJheTogZmFsc2UsXG4gIE5hbWVkTm9kZU1hcDogZmFsc2UsXG4gIE5vZGVMaXN0OiB0cnVlLFxuICBQYWludFJlcXVlc3RMaXN0OiBmYWxzZSxcbiAgUGx1Z2luOiBmYWxzZSxcbiAgUGx1Z2luQXJyYXk6IGZhbHNlLFxuICBTVkdMZW5ndGhMaXN0OiBmYWxzZSxcbiAgU1ZHTnVtYmVyTGlzdDogZmFsc2UsXG4gIFNWR1BhdGhTZWdMaXN0OiBmYWxzZSxcbiAgU1ZHUG9pbnRMaXN0OiBmYWxzZSxcbiAgU1ZHU3RyaW5nTGlzdDogZmFsc2UsXG4gIFNWR1RyYW5zZm9ybUxpc3Q6IGZhbHNlLFxuICBTb3VyY2VCdWZmZXJMaXN0OiBmYWxzZSxcbiAgU3R5bGVTaGVldExpc3Q6IHRydWUsIC8vIFRPRE86IE5vdCBzcGVjIGNvbXBsaWFudCwgc2hvdWxkIGJlIGZhbHNlLlxuICBUZXh0VHJhY2tDdWVMaXN0OiBmYWxzZSxcbiAgVGV4dFRyYWNrTGlzdDogZmFsc2UsXG4gIFRvdWNoTGlzdDogZmFsc2Vcbn07XG5cbmZvciAodmFyIGNvbGxlY3Rpb25zID0gZ2V0S2V5cyhET01JdGVyYWJsZXMpLCBpID0gMDsgaSA8IGNvbGxlY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gIHZhciBOQU1FID0gY29sbGVjdGlvbnNbaV07XG4gIHZhciBleHBsaWNpdCA9IERPTUl0ZXJhYmxlc1tOQU1FXTtcbiAgdmFyIENvbGxlY3Rpb24gPSBnbG9iYWxbTkFNRV07XG4gIHZhciBwcm90byA9IENvbGxlY3Rpb24gJiYgQ29sbGVjdGlvbi5wcm90b3R5cGU7XG4gIHZhciBrZXk7XG4gIGlmIChwcm90bykge1xuICAgIGlmICghcHJvdG9bSVRFUkFUT1JdKSBoaWRlKHByb3RvLCBJVEVSQVRPUiwgQXJyYXlWYWx1ZXMpO1xuICAgIGlmICghcHJvdG9bVE9fU1RSSU5HX1RBR10pIGhpZGUocHJvdG8sIFRPX1NUUklOR19UQUcsIE5BTUUpO1xuICAgIEl0ZXJhdG9yc1tOQU1FXSA9IEFycmF5VmFsdWVzO1xuICAgIGlmIChleHBsaWNpdCkgZm9yIChrZXkgaW4gJGl0ZXJhdG9ycykgaWYgKCFwcm90b1trZXldKSByZWRlZmluZShwcm90bywga2V5LCAkaXRlcmF0b3JzW2tleV0sIHRydWUpO1xuICB9XG59XG4iLCJpbXBvcnQgTjE5YmFzZUFwcGxldCBmcm9tICcuL24xOWJhc2VBcHBsZXQnO1xuaW1wb3J0IE4xOXBvcHVwQ29udHJvbGxlciBmcm9tICcuL24xOXBvcHVwQ29udHJvbGxlcic7XG5cblNpZWJlbEFwcEZhY2FkZS5OMTlIZWxwZXIgPSBjbGFzcyBleHRlbmRzIE4xOWJhc2VBcHBsZXQge1xuICBjb25zdHJ1Y3RvcihzZXR0aW5ncykge1xuICAgIGNvbnN0IHsgYXBwbGV0TmFtZSB9ID0gc2V0dGluZ3M7XG4gICAgaWYgKGFwcGxldE5hbWUpIHtcbiAgICAgIGNvbnN0IGFwcGxldCA9IFNpZWJlbEFwcC5TX0FwcC5HZXRBY3RpdmVWaWV3KCkuR2V0QXBwbGV0KGFwcGxldE5hbWUpO1xuICAgICAgaWYgKCFhcHBsZXQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gZ2V0IHRoZSByZWZlcmVuY2UgdG8gdGhlIGFwcGxldCBieSB0aGUgJHthcHBsZXROYW1lfSBuYW1lYCk7XG4gICAgICB9XG4gICAgICBzdXBlcihPYmplY3QuYXNzaWduKHt9LCBzZXR0aW5ncywgeyBwbTogYXBwbGV0LkdldFBNb2RlbCgpIH0pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3VwZXIoc2V0dGluZ3MpO1xuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKCdOZXh1cyBtYWluIGNsYXNzIHN0YXJ0ZWQuLi4uJywgdGhpcy5hcHBsZXROYW1lKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgLy8gZ2V0IHRoZSBuMTlwb3B1cENvbnRyb2xsZXIgc2luZ2xldG9uIGluc3RhbmNlXG4gICAgdGhpcy5uMTlwb3B1cENvbnRyb2xsZXIgPSBOMTlwb3B1cENvbnRyb2xsZXIuaW5zdGFuY2U7XG4gIH1cblxuICBjbG9zZVBvcHVwQXBwbGV0KCkge1xuICAgIHJldHVybiB0aGlzLm4xOXBvcHVwQ29udHJvbGxlci5jbG9zZVBvcHVwQXBwbGV0KCk7XG4gIH1cblxuICBfc2hvd1BvcHVwQXBwbGV0KG5hbWUsIGhpZGUsIGNiKSB7XG4gICAgaWYgKCF0aGlzLm4xOXBvcHVwQ29udHJvbGxlcikge1xuICAgICAgLy8gaXQgaXMgYSBwb3B1cCAtIHByb2JhYmx5IHNob3VsZCBuZXZlciBoYXBwZW4/XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ09wZW5uaW5nIHBvcHVwIG9uIHRoZSBwb3B1cCBpcyBub3Qgc3VwcG9ydGVkIG5vdycpO1xuICAgIH1cbiAgICBpZiAoIXRoaXMubjE5cG9wdXBDb250cm9sbGVyLmNhbk9wZW5Qb3B1cCgpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBvcGVuIHBvcHVwIChjdXJyZW50bHkgZXhpc3RzIHJlc29sdmUgZnVuY3Rpb24pIScpO1xuICAgICAgLy8gcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLnZpZXcuU2V0QWN0aXZlQXBwbGV0SW50ZXJuYWwodGhpcy5hcHBsZXQpOyAvLyBvciBTZXRBY3RpdmVBcHBsZXRcbiAgICB0aGlzLl9zZXRBY3RpdmVDb250cm9sKG5hbWUpO1xuICAgIHRoaXMubm90aWZpY2F0aW9ucy5za2lwTmV3RmllbGREYXRhTm90aWZpY2F0aW9ucyA9IHRydWU7IC8vIHRvIHNraXAgd2hpbGUgdGhlIHBvcHVwIGlzIG9wZW5uaW5nXG4gICAgcmV0dXJuIHRoaXMubjE5cG9wdXBDb250cm9sbGVyLnNob3dQb3B1cEFwcGxldChoaWRlLCBjYiwgdGhpcyk7XG4gIH1cblxuICBzaG93TXZnQXBwbGV0KG5hbWUsIGhpZGUsIGNiKSB7XG4gICAgLy8gVE9ETzogY2hlY2sgaWYgbmFtZSBpcyBjb3JyZWN0P1xuICAgIHJldHVybiB0aGlzLl9zaG93UG9wdXBBcHBsZXQobmFtZSwgaGlkZSwgY2IpO1xuICB9XG5cbiAgc2hvd1BpY2tBcHBsZXQobmFtZSwgaGlkZSwgY2IpIHtcbiAgICAvLyBUT0RPOiBjaGVjayBpZiBuYW1lIGlzIGNvcnJlY3Q/XG4gICAgcmV0dXJuIHRoaXMuX3Nob3dQb3B1cEFwcGxldChuYW1lLCBoaWRlLCBjYik7XG4gIH1cblxuICBvcGVuQXNzb2NBcHBsZXQoY2IpIHsgLy8gdGhpcyBtZXRob2Qgc2hvdWxkIGJlIGF2YWlsYWJsZSBmb3IgY2hpbGQgYnVzaW5lc3MgY29tcG9uZW50IGluIE06TSByZWxhdGlvbnNoaXBcbiAgICAvLyBUT0RPOiBjaGVjayBpZiBhcHBsZXQgcHJvdmlkZXMgc3VjaCBjYXBhYmlsaXRpZXM/XG4gICAgaWYgKCF0aGlzLm4xOXBvcHVwQ29udHJvbGxlci5jYW5PcGVuUG9wdXAoKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3Qgb3BlbiBwb3B1cCAoY3VycmVudGx5IGV4aXN0cyByZXNvbHZlIGZ1bmN0aW9uKSEnKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMubjE5cG9wdXBDb250cm9sbGVyLl9vcGVuQXNzb2NBcHBsZXQodGhpcy5uZXdSZWNvcmQuYmluZCh0aGlzKSwgY2IpO1xuICB9XG5cbiAgZHJpbGxkb3duKGNvbnRyb2xOYW1lKSB7XG4gICAgLy8gVE9ETzogY2hlY2sgaXNMaW5rIG9mIGNvbnRyb2w/XG4gICAgLy8gaW5kZXggaXMgbm90IGVmZmVjdGl2ZSwgYW5kIGRyaWxsZG93biBhbnl3YXkgaGFwcGVucyBvbiB0aGUgc2VsZWN0ZWQgcmVjb3JkXG4gICAgaWYgKCF0aGlzLmlzTGlzdEFwcGxldCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCBpbmRleCA9IHRoaXMuZ2V0U2VsZWN0aW9uKCk7XG4gICAgcmV0dXJuIHRoaXMucG0uRXhlY3V0ZU1ldGhvZCgnT25EcmlsbERvd24nLCBjb250cm9sTmFtZSwgaW5kZXgpO1xuICB9XG5cbiAgZ290b1ZpZXcodGFyZ2V0Vmlld05hbWUsIHRhcmdldEFwcGxldE5hbWUsIGlkKSB7XG4gICAgLy8gVE9ETzogZ2V0IHRoZSBhcHBsZXQgbmFtZSBmcm9tIHRoZSB2aWV3IGRlZmluaXRpb24/XG4gICAgY29uc3Qgcm93SWQgPSB0eXBlb2YgaWQgPT09ICd1bmRlZmluZWQnID8gdGhpcy5nZXRDdXJyZW50UmVjb3JkKHRydWUpLklkIDogaWQ7XG4gICAgbGV0IFNXRUNtZCA9IGBHb3RvVmlldyZTV0VWaWV3PSR7dGFyZ2V0Vmlld05hbWV9JlNXRUFwcGxldDA9JHt0YXJnZXRBcHBsZXROYW1lfWA7XG4gICAgU1dFQ21kICs9IGAmU1dFQlU9MSZTV0VLZWVwQ29udGV4dD1GQUxTRSZTV0VSb3dJZDA9JHtyb3dJZH1gO1xuICAgIFNXRUNtZCA9IGVuY29kZVVSSShTV0VDbWQpO1xuICAgIFNpZWJlbEFwcC5TX0FwcC5Hb3RvVmlldyh0YXJnZXRWaWV3TmFtZSwgJycsIFNXRUNtZCwgJycpO1xuICB9XG5cbiAgcmVJbml0UG9wdXAoKSB7IC8vIGRvIHdlIG5lZWQgdG8ga2VlcCBhbHNvIHN0YXRpYyBSZUluaXRQb3B1cFxuICAgIHRoaXMubjE5cG9wdXBDb250cm9sbGVyLmlzUG9wdXBIaWRkZW4gPSBmYWxzZTtcblxuICAgIGNvbnN0IHBvcHVwUE0gPSBTaWViZWxBcHAuU19BcHAuR2V0UG9wdXBQTSgpO1xuICAgIHBvcHVwUE0uSW5pdCgpO1xuICAgIHBvcHVwUE0uU2V0dXAoKTtcbiAgfVxuXG4gIHN0YXRpYyBSZUluaXRQb3B1cCgpIHsgLy8gY291bGQgYmUgcmVtb3ZlZCBpbiB0aGUgbmV4dCB2ZXJzaW9uXG4gICAgY29uc3QgcG9wdXBQTSA9IFNpZWJlbEFwcC5TX0FwcC5HZXRQb3B1cFBNKCk7XG4gICAgcG9wdXBQTS5Jbml0KCk7XG4gICAgcG9wdXBQTS5TZXR1cCgpO1xuICB9XG59O1xuIiwiaW1wb3J0IE4xOW5vdGlmaWNhdGlvbnMgZnJvbSAnLi9uMTlub3RpZmljYXRpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTjE5YmFzZUFwcGxldCB7XG4gIGNvbnN0cnVjdG9yKHNldHRpbmdzKSB7XG4gICAgdGhpcy5jb25zdHMgPSBTaWViZWxKUy5EZXBlbmRlbmN5KCdTaWViZWxBcHAuQ29uc3RhbnRzJyk7XG4gICAgdGhpcy51dGlscyA9IFNpZWJlbEpTLkRlcGVuZGVuY3koJ1NpZWJlbEFwcC5VdGlscycpO1xuICAgIHRoaXMucG0gPSBzZXR0aW5ncy5wbTtcbiAgICB0aGlzLmNvbnZlcnREYXRlcyA9IHNldHRpbmdzLmNvbnZlcnREYXRlcztcbiAgICB0aGlzLnZpZXcgPSBTaWViZWxBcHAuU19BcHAuR2V0QWN0aXZlVmlldygpO1xuICAgIHRoaXMuYXBwbGV0TmFtZSA9IHRoaXMucG0uR2V0KCdHZXROYW1lJyk7XG4gICAgdGhpcy5hcHBsZXQgPSB0aGlzLnZpZXcuR2V0QXBwbGV0KHRoaXMuYXBwbGV0TmFtZSk7XG4gICAgdGhpcy5pc0xpc3RBcHBsZXQgPSB0eXBlb2YgdGhpcy5wbS5HZXQoJ0dldExpc3RPZkNvbHVtbnMnKSAhPT0gJ3VuZGVmaW5lZCc7XG4gICAgdGhpcy5yZXF1aXJlZCA9IFtdOyAvLyB3aWxsIGJlIGVtcHR5IGZvciB0aGUgbGlzdCBhcHBsZXRcbiAgICB0aGlzLmxvdiA9IHt9O1xuICAgIHRoaXMuYm9vbE9iamVjdCA9IG5ldyBTaWViZWxBcHAuU19BcHAuRGF0dW1Cb29sT2JqZWN0KCk7XG5cbiAgICB0aGlzLmxvYWRMb2NhbGVEYXRhKCk7XG5cbiAgICBjb25zdCBiY0lkID0gdGhpcy5hcHBsZXQuR2V0QkNJZCgpO1xuICAgIHRoaXMubm90aWZpY2F0aW9ucyA9IG5ldyBOMTlub3RpZmljYXRpb25zKHRoaXMucG0sIHRoaXMuY29uc3RzLCBiY0lkKTtcblxuICAgIC8vIHBvcHVsYXRlIHRoZSByZXF1aXJlZCBhcnJheSBmb3IgZm9ybSBhcHBsZXRzXG4gICAgaWYgKCF0aGlzLmlzTGlzdEFwcGxldCkge1xuICAgICAgY29uc3QgYXBwbGV0SWQgPSBgc18ke3RoaXMucG0uR2V0KCdHZXRGdWxsSWQnKX1fZGl2YDtcbiAgICAgIGNvbnN0IGFwcGxldElucHV0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGFwcGxldElkKS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpO1xuICAgICAgYXBwbGV0SW5wdXRzLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgIGlmIChlbC5hdHRyaWJ1dGVzWydhcmlhLXJlcXVpcmVkJ10pIHtcbiAgICAgICAgICB0aGlzLnJlcXVpcmVkLnB1c2goZWwuYXR0cmlidXRlcy5uYW1lLm5vZGVWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIGxpc3RlbmVyIHRvIGdldCBkeW5hbWljIExPVnNcbiAgICB0aGlzLnBtLkF0dGFjaFBNQmluZGluZygnVXBkYXRlUXVpY2tQaWNrSW5mbycsIChpbnB1dE5hbWUsIGFyZywgYXJyKSA9PiB7XG4gICAgICBjb25zdCB2aWV3TmFtZSA9IHRoaXMudmlldy5HZXROYW1lKCk7XG4gICAgICBpZiAodmlld05hbWUgPT09IGFyclsxXSAmJiB0aGlzLmFwcGxldE5hbWUgPT09IGFyclsyXSkge1xuICAgICAgICBpZiAoJ2ZhbHNlJyA9PT0gYXJyWzRdKSB7XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgICBjb25zb2xlLndhcm4oYFtOMTldUGlja2xpc3QgaXMgbm90IGFzc29jaWF0ZWQgd2l0aCB0aGUgY29udHJvbCAtICR7SlNPTi5zdHJpbmdpZnkoYXJyKX1gKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxvdlthcnJbM11dID0gYXJyLnNwbGljZSg1KS5maWx0ZXIoZWwgPT4gZWwgIT09ICcnKTtcbiAgICAgICAgLy8gVE9ETzogZG8gd2UgbmVlZCB0byBpbmRpY2F0ZSB3aGVuIGFuIGVtcHR5IHZhbHVlIGlzIGFsbG93ZWQ/XG4gICAgICB9XG4gICAgfSwgeyBzY29wZTogdGhpcyB9KTtcblxuICAgIHRoaXMuaXNUcmVlQXBwbGV0ID0gU2llYmVsQXBwRmFjYWRlLkV4cGxvcmVyUHJlc2VudGF0aW9uTW9kZWwgPT09IHRoaXMucG0uY29uc3RydWN0b3I7XG4gICAgaWYgKHRoaXMuaXNUcmVlQXBwbGV0KSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKCdUaGlzIGlzIGEgdHJlZSBhcHBsZXQuLi4gaXQgaXMgZWFzaWVyIGFuZCBzYWZlciB0byB1c2UgbGlzdCBvciBmb3JtIGFwcGxldHMnKTtcbiAgICB9XG4gIH1cblxuICBsb2FkTG9jYWxlRGF0YSgpIHtcbiAgICBjb25zdCBsb2NhbGVPYmplY3QgPSBTaWViZWxBcHAuU19BcHAuTG9jYWxlT2JqZWN0O1xuICAgIGNvbnN0IGRhdGVUaW1lRm9ybWF0ID0gbG9jYWxlT2JqZWN0LkdldFByb2ZpbGUodGhpcy5jb25zdHMuZ2V0KCdMT0NBTF9EQVRFVElNRV9GT1JNQVQnKSk7XG4gICAgdGhpcy5sb2NhbGVEYXRhID0ge1xuICAgICAgZmlyc3REYXlPZldlZWs6IGxvY2FsZU9iamVjdC5HZXRXZWVrU3RhcnREYXkoKSxcbiAgICAgIGRhdGVGb3JtYXQ6IGxvY2FsZU9iamVjdC5HZXRQcm9maWxlKHRoaXMuY29uc3RzLmdldCgnTE9DQUxfREFURV9GT1JNQVQnKSksXG4gICAgICBkYXRlVGltZUZvcm1hdCxcbiAgICAgIGlzMjRob3Vyc0Zvcm1hdDogIS9wJC8udGVzdChkYXRlVGltZUZvcm1hdCksXG4gICAgICBsb2NhbENvdW50cnlQaG9uZUNvZGU6IGxvY2FsZU9iamVjdC5HZXRQcm9maWxlKHRoaXMuY29uc3RzLmdldCgnTE9DQUxfUEhPTkVfQ09VTlRSWScpKSxcbiAgICB9O1xuICAgIHRoaXMubG9jYWxlRGF0YS5tb250aHMgPSBbXTtcbiAgICB0aGlzLmxvY2FsZURhdGEuc2hvcnRNb250aHMgPSBbXTtcbiAgICBjb25zdCBtb250aHMgPSBsb2NhbGVPYmplY3QuR2V0RGF0YSgnTW9udGgnLCBsb2NhbGVPYmplY3QubV9zcE1vbnRoUFMpO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDEyOyBpICs9IDEpIHtcbiAgICAgIHRoaXMubG9jYWxlRGF0YS5tb250aHMucHVzaChtb250aHMuR2V0UHJvcGVydHkoYCR7aX06MGApKTtcbiAgICAgIHRoaXMubG9jYWxlRGF0YS5zaG9ydE1vbnRocy5wdXNoKG1vbnRocy5HZXRQcm9wZXJ0eShgJHtpfToxYCkpO1xuICAgIH1cblxuICAgIGNvbnN0IHdlZWtEYXlzID0gbG9jYWxlT2JqZWN0LkdldERhdGEoJ0RheU9mV2VlaycsIGxvY2FsZU9iamVjdC5tX3NwRGF5T2ZXZWVrUFMpO1xuICAgIHRoaXMubG9jYWxlRGF0YS53ZWVrRGF5cyA9IFtdO1xuICAgIHRoaXMubG9jYWxlRGF0YS53ZWVrRGF5czMgPSBbXTtcbiAgICB0aGlzLmxvY2FsZURhdGEud2Vla0RheXMxID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpICs9IDEpIHtcbiAgICAgIHRoaXMubG9jYWxlRGF0YS53ZWVrRGF5cy5wdXNoKHdlZWtEYXlzLkdldFByb3BlcnR5KGAke2l9OjBgKSk7XG4gICAgICB0aGlzLmxvY2FsZURhdGEud2Vla0RheXMzLnB1c2god2Vla0RheXMuR2V0UHJvcGVydHkoYCR7aX06MWApKTtcbiAgICAgIHRoaXMubG9jYWxlRGF0YS53ZWVrRGF5czEucHVzaCh3ZWVrRGF5cy5HZXRQcm9wZXJ0eShgJHtpfToyYCkpO1xuICAgIH1cbiAgfVxuXG4gIHN1YnNjcmliZShmdW5jKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2xhc3MtbWV0aG9kcy11c2UtdGhpc1xuICAgIC8vIFRPRE8gOiBhY2NlcHQgYWxzbyBjb250ZXh0IGZvciBmdW5jdGlvbiwgb3IgdGhlIGNhbGxlciBiaW5kcyB0aGUgY29udGV4dCB0byB0aGUgZnVuY3Rpb24/XG4gICAgcmV0dXJuIHRoaXMubm90aWZpY2F0aW9ucy5zdWJzY3JpYmUoZnVuYyk7XG4gIH1cblxuICB1bnN1YnNjcmliZSh0b2tlbikgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZmljYXRpb25zLnVuc3Vic2NyaWJlKHRva2VuKTtcbiAgfVxuXG4gIF9nZXRDb250cm9sKG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5wbS5FeGVjdXRlTWV0aG9kKCdHZXRDb250cm9sJywgbmFtZSk7XG4gIH1cblxuICBfcmV0dXJuQ29udHJvbHMoKSB7XG4gICAgaWYgKHRoaXMuaXNMaXN0QXBwbGV0KSB7XG4gICAgICByZXR1cm4gdGhpcy5wbS5HZXQoJ0dldExpc3RPZkNvbHVtbnMnKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucG0uR2V0KCdHZXRDb250cm9scycpO1xuICB9XG5cbiAgLy8gY2FsbGVkIGludG8gdGhlIGdldENvbnRyb2xzIHRvIHJlZHVjZSB0aGUgYW1vdW50IG9mIHRoZSByZXR1cm5lZCBjb250cm9sc1xuICBfaXNTa2lwQ29udHJvbCh0eXBlKSB7XG4gICAgLy8gaHR0cHM6Ly9kb2NzLm9yYWNsZS5jb20vY2QvRTc0ODkwXzAxL2Jvb2tzL0NvbmZpZ09wZW5VSS9hcHBlbmRpeF9hX2FwaTAwMi5odG1cbiAgICAvLyBtYXliZSB3ZSBuZWVkIHRvIGV4Y2x1ZGUgbW9yZSB0eXBlc1xuICAgIHJldHVybiAodHlwZSA9PT0gdGhpcy5jb25zdHMuZ2V0KCdTV0VfUFNUX0JVVFRPTl9DVFJMJykpXG4gICAgICB8fCAodHlwZSA9PT0gdGhpcy5jb25zdHMuZ2V0KCdTV0VfQ1RSTF9MSU5LJykpXG4gICAgICB8fCAodHlwZSA9PT0gdGhpcy5jb25zdHMuZ2V0KCdTV0VfQ1RSTF9QTEFJTlRFWFQnKSlcbiAgICAgIHx8ICh0eXBlID09PSAnbnVsbCcpOyAvLyBHZXRVaVR5cGUgcmV0dXJucyBzdHJpbmdcbiAgfVxuXG4gIF9pc1JlcXVpcmVkKGlucHV0TmFtZSkge1xuICAgIC8vIHJlcXVpcmVkIGlzIGVtcHR5IGZvciBsaXN0IGFwcGxldHMsIGhvcGVmdWxseSBmb3Igbm93XG4gICAgcmV0dXJuIHRoaXMucmVxdWlyZWQuaW5kZXhPZihpbnB1dE5hbWUpID4gLTE7XG4gIH1cblxuICBzdGF0aWMgR2V0U3RhdGljTE9WKGFycikge1xuICAgIHJldHVybiBhcnIubWFwKGVsID0+IGVsLnByb3BBcnJheSk7XG4gIH1cblxuICBfc2V0QWN0aXZlQ29udHJvbChuYW1lKSB7XG4gICAgaWYgKG5hbWUpIHtcbiAgICAgIHJldHVybiB0aGlzLnBtLkV4ZWN1dGVNZXRob2QoJ1NldEFjdGl2ZUNvbnRyb2wnLCB0aGlzLl9nZXRDb250cm9sKG5hbWUpKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucG0uRXhlY3V0ZU1ldGhvZCgnU2V0QWN0aXZlQ29udHJvbCcsIG51bGwpO1xuICB9XG5cbiAgX2lzRGF0ZVRpbWVDb250cm9sKHVpVHlwZSkge1xuICAgIHJldHVybiB0aGlzLmNvbnN0cy5nZXQoJ1NXRV9DVFJMX0RBVEVfVFpfUElDSycpID09PSB1aVR5cGVcbiAgICAgIHx8IHRoaXMuY29uc3RzLmdldCgnU1dFX0NUUkxfREFURV9USU1FX1BJQ0snKSA9PT0gdWlUeXBlXG4gICAgICB8fCB0aGlzLmNvbnN0cy5nZXQoJ1NXRV9DVFJMX0RBVEVfUElDSycpID09PSB1aVR5cGU7XG4gIH1cblxuICBfZ2V0U2llYmVsVmFsdWUodmFsdWUsIHVpVHlwZSwgZGlzcGxheUZvcm1hdCkge1xuICAgIC8vIFRPRE86IG51bWJlcnMsIGN1cnJlbmNpZXMsIGFuZCBwaG9uZXM/XG4gICAgaWYgKHRoaXMuY29uc3RzLmdldCgnU1dFX0NUUkxfQ0hFQ0tCT1gnKSA9PT0gdWlUeXBlKSB7XG4gICAgICAvLyBjb252ZXJ0IHRydWUvZmFsc2UgPT4gWS9OIC8vIG51bGwgaXMgbm90IGhhbmRsZWQgKHRoZSBzYW1lIGFzIGluIHN0YW5kYXJkIE9wZW4gVUkpXG4gICAgICAvLyB2YWx1ZSA9IHZhbHVlID8gJ1knIDogJ04nO1xuICAgICAgdGhpcy5ib29sT2JqZWN0LlNldFZhbHVlKHZhbHVlKTtcbiAgICAgIHJldHVybiB0aGlzLmJvb2xPYmplY3QuR2V0QXNTdHJpbmcoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuY29udmVydERhdGVzICYmIGRpc3BsYXlGb3JtYXQgJiYgdGhpcy5faXNEYXRlVGltZUNvbnRyb2wodWlUeXBlKSkge1xuICAgICAgLy8gVE9ETzogY2hlY2sgaWYgYSB2YWxpZCBkYXRlIGlzIGlucHV0dGVkXG4gICAgICBjb25zdCBkYXRlID0gdmFsdWUudG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJywgeyBob3VyMTI6IGZhbHNlIH0pLnNwbGl0KCcsJykuam9pbignJyk7XG4gICAgICByZXR1cm4gU2llYmVsQXBwLlNfQXBwLkxvY2FsZU9iamVjdC5HZXRTdHJpbmdGcm9tRGF0ZVRpbWUoZGF0ZSwgJ00vRC9ZWVlZIEhIOm1tOnNzJywgZGlzcGxheUZvcm1hdCwgZmFsc2UpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBjYW5JbnZva2VNZXRob2QobWV0aG9kKSB7XG4gICAgcmV0dXJuIHRoaXMucG0uRXhlY3V0ZU1ldGhvZCgnQ2FuSW52b2tlTWV0aG9kJywgbWV0aG9kKTtcbiAgfVxuXG4gIGludm9rZU1ldGhvZChtZXRob2QpIHtcbiAgICBpZiAoIXRoaXMuY2FuSW52b2tlTWV0aG9kKG1ldGhvZCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucG0uRXhlY3V0ZU1ldGhvZCgnSW52b2tlTWV0aG9kJywgbWV0aG9kKTtcbiAgfVxuXG4gIGdldENvbnRyb2xzKCkge1xuICAgIGNvbnN0IGNvbnRyb2xzID0ge307XG4gICAgY29uc3QgYXBwbGV0Q29udHJvbHMgPSB0aGlzLl9yZXR1cm5Db250cm9scygpO1xuICAgIGNvbnN0IGFyciA9IE9iamVjdC5lbnRyaWVzKGFwcGxldENvbnRyb2xzKTtcbiAgICBhcnIuZm9yRWFjaCgoY29udHJvbEVudHJ5KSA9PiB7XG4gICAgICBjb25zdCBjb250cm9sID0gY29udHJvbEVudHJ5WzFdO1xuICAgICAgY29uc3QgdWlUeXBlID0gY29udHJvbC5HZXRVSVR5cGUoKTtcbiAgICAgIGNvbnN0IGRpc3BsYXlGb3JtYXQgPSBjb250cm9sLkdldERpc3BsYXlGb3JtYXQoKSB8fCB0aGlzLmdldENvbnRyb2xEaXNwbGF5Rm9ybWF0KHVpVHlwZSk7XG4gICAgICBpZiAoIXRoaXMuX2lzU2tpcENvbnRyb2wodWlUeXBlKSkge1xuICAgICAgICBjb25zdCBuYW1lID0gY29udHJvbEVudHJ5WzBdO1xuICAgICAgICBjb25zdCBpbnB1dE5hbWUgPSBjb250cm9sLkdldElucHV0TmFtZSgpO1xuICAgICAgICBjb25zdCBmaWVsZE5hbWUgPSBjb250cm9sLkdldEZpZWxkTmFtZSgpO1xuICAgICAgICBjb25zdCBvYmogPSB7XG4gICAgICAgICAgbmFtZSxcbiAgICAgICAgICBsYWJlbDogY29udHJvbC5HZXREaXNwbGF5TmFtZSgpLFxuICAgICAgICAgIHVpVHlwZSxcbiAgICAgICAgICByZXF1aXJlZDogdGhpcy5faXNSZXF1aXJlZChpbnB1dE5hbWUpLFxuICAgICAgICAgIGJvdW5kZWRQaWNrOiBjb250cm9sLklzQm91bmRlZFBpY2soKSA9PT0gJzEnLFxuICAgICAgICAgIHN0YXRpY1BpY2s6IGNvbnRyb2wuSXNTdGF0aWNCb3VuZGVkKCkgPT09ICcxJyxcbiAgICAgICAgICBpbnB1dE5hbWUsXG4gICAgICAgICAgaXNQb3N0Q2hhbmdlczogY29udHJvbC5Jc1Bvc3RDaGFuZ2VzKCksXG4gICAgICAgICAgbWF4U2l6ZTogY29udHJvbC5HZXRNYXhTaXplKCksXG4gICAgICAgICAgZmllbGROYW1lLFxuICAgICAgICAgIGlzTGluazogdGhpcy5wbS5FeGVjdXRlTWV0aG9kKCdDYW5OYXZpZ2F0ZScsIG5hbWUpLFxuICAgICAgICAgIHJlYWRvbmx5OiAhdGhpcy5wbS5FeGVjdXRlTWV0aG9kKCdDYW5VcGRhdGUnLCBuYW1lKSxcbiAgICAgICAgICBkaXNwbGF5Rm9ybWF0LFxuICAgICAgICAgIGRhdGFUeXBlOiB0aGlzLnBtLkV4ZWN1dGVNZXRob2QoJ0dldEZpZWxkRGF0YVR5cGUnLCBmaWVsZE5hbWUpLFxuICAgICAgICB9O1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCAncmVhZE9ubHknLCB7XG4gICAgICAgICAgZ2V0OiAoKSA9PiB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICAgICAgY29uc29sZS53YXJuKCdbTjE5XVRoZSByZWFkT25seSBwcm9wZXJ0eSB3aWxsIGJlIHJlbW92ZWQgc29vbjsgdXNlIHJlYWRvbmx5IGluc3RlYWQgb2YgaXQuJyk7XG4gICAgICAgICAgICByZXR1cm4gb2JqLnJlYWRvbmx5O1xuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICAvLyBhZGQgdmFsdWVzIHRvIGJlIGRpc3BsYXllZCBpbiB0aGUgc3RhdGljIHBpY2sgbGlzdCAtIDIgZGlmZmVyZW50IGZvcm1hdHMgZm9yIG5vd1xuICAgICAgICBpZiAob2JqLnN0YXRpY1BpY2spIHtcbiAgICAgICAgICBvYmouc3RhdGljTE9WID0gTjE5YmFzZUFwcGxldC5HZXRTdGF0aWNMT1YoY29udHJvbC5HZXRSYWRpb0dyb3VwUHJvcFNldCgpLmNoaWxkQXJyYXkpO1xuICAgICAgICAgIG9iai5sb3ZzID0gb2JqLnN0YXRpY0xPVi5yZWR1Y2UoKGFjYywgZWwpID0+IHsgLy8gbm9ybWFsaXplZFxuICAgICAgICAgICAgYWNjLnB1c2goeyBsaWM6IGVsLkZpZWxkVmFsdWUsIHZhbDogZWwuRGlzcGxheU5hbWUgfSk7XG4gICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgIH0sIFtdKTtcbiAgICAgICAgfVxuICAgICAgICBjb250cm9sc1tuYW1lXSA9IG9iajtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gY29udHJvbHM7XG4gIH1cblxuICBnZXRSZWNvcmRTZXQoYWRkUmVjb3JkSW5kZXgpIHtcbiAgICAvLyBUT0RPOiBjb252ZXJ0IHRoZSB2YWx1ZXM/XG4gICAgaWYgKGFkZFJlY29yZEluZGV4KSB7XG4gICAgICByZXR1cm4gdGhpcy5wbS5HZXQoJ0dldFJlY29yZFNldCcpLm1hcCgoZWwsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHJldCA9IE9iamVjdC5hc3NpZ24oe30sIGVsKTtcbiAgICAgICAgcmV0Ll9pbmR4ID0gaW5kZXg7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucG0uR2V0KCdHZXRSZWNvcmRTZXQnKTtcbiAgfVxuXG4gIGdldFJhd1JlY29yZFNldChhZGRSZWNvcmRJbmRleCkge1xuICAgIC8vIFRPRE86IGNvbnZlcnQgdGhlIHZhbHVlcz9cbiAgICBpZiAoYWRkUmVjb3JkSW5kZXgpIHtcbiAgICAgIHJldHVybiB0aGlzLnBtLkdldCgnR2V0UmF3UmVjb3JkU2V0JykubWFwKChlbCwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgcmV0ID0gT2JqZWN0LmFzc2lnbih7fSwgZWwpO1xuICAgICAgICByZXQuX2luZHggPSBpbmRleDtcbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5wbS5HZXQoJ0dldFJhd1JlY29yZFNldCcpO1xuICB9XG5cbiAgZ2V0Um93TGlzdFJvd0NvdW50KCkge1xuICAgIC8vIGhvdyBtdWNoIGFwcGxldCBjYW4gZGlzcGxheSAoc3BlY2lmaWVkIGluIFNpZWJlbCBUb29scykgLSAxMC8yMFxuICAgIHJldHVybiB0aGlzLnBtLkdldCgnR2V0Um93TGlzdFJvd0NvdW50Jyk7XG4gIH1cblxuICBnZXROdW1Sb3dzKCkge1xuICAgIC8vIGN1cnJlbnRseSBmZXRjaGVkIGZyb20gc2VydmVyP1xuICAgIHJldHVybiB0aGlzLnBtLkdldCgnR2V0TnVtUm93cycpO1xuICB9XG5cbiAgZ2V0U2VsZWN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnBtLkdldCgnR2V0U2VsZWN0aW9uJyk7XG4gIH1cblxuICBfbmF2aWdhdGUobWV0aG9kKSB7XG4gICAgaWYgKCF0aGlzLmNhbkludm9rZU1ldGhvZChtZXRob2QpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IHJldCA9IHRoaXMucG0uRXhlY3V0ZU1ldGhvZCgnSW52b2tlTWV0aG9kJywgbWV0aG9kKTtcbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgbmV4dFJlY29yZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmF2aWdhdGUodGhpcy5pc0xpc3RBcHBsZXQgPyAnR290b05leHQnIDogJ0dvdG9OZXh0U2V0Jyk7XG4gIH1cblxuICBuZXh0UmVjb3JkU2V0KCkge1xuICAgIGlmICghdGhpcy5pc0xpc3RBcHBsZXQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX25hdmlnYXRlKCdHb3RvTmV4dFNldCcpO1xuICB9XG5cbiAgcG9zaXRpb25PblJvdyhpbmRleCkge1xuICAgIGlmICh0aGlzLmlzTGlzdEFwcGxldCkge1xuICAgICAgaWYgKCF0aGlzLnBtLkV4ZWN1dGVNZXRob2QoJ0Nhbkludm9rZU1ldGhvZCcsICdQb3NpdGlvbk9uUm93JykpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICAvLyBzZWVtcyB0aGlzIGNoZWNrIGlzIHJlZHVuZGFudFxuICAgICAgLy8gaWYgKHRoaXMuZ2V0TnVtUm93cygpIDwgaW5kZXggKyAxKSB7XG4gICAgICAvLyAgIHJldHVybiBmYWxzZTtcbiAgICAgIC8vIH1cbiAgICAgIGlmICh0aGlzLmdldFJvd0xpc3RSb3dDb3VudCgpIDwgaW5kZXggKyAxKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtpbmRleH0gaXMgZXF1YWwvaGlnaGVyIHRoYW4gYW1vdW50IG9mIHJlY29yZHMgaW4gdGhlIGFwcGxldCAke3RoaXMuZ2V0Um93TGlzdFJvd0NvdW50KCl9YCk7XG4gICAgICB9XG4gICAgICAvLyBUT0RPOiBpZiB3ZSBnb3QgdG8gdGhpcyBwb2ludFxuICAgICAgLy8gIHNob3VsZCB3ZSBjaGVjayBHZXRBY3RpdmVDb250cm9sIChhcHBsZXQucHJvdG90eXBlLkludm9rZU1ldGhvZClcbiAgICAgIC8vICBhbmQgbnVsbGlmeSBpdCBpZiBhY3RpdmU/XG4gICAgICByZXR1cm4gdGhpcy5wbS5FeGVjdXRlTWV0aG9kKCdIYW5kbGVSb3dTZWxlY3QnLCBpbmRleCk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHByZXZSZWNvcmQoKSB7XG4gICAgaWYgKHRoaXMuaXNMaXN0QXBwbGV0KSB7XG4gICAgICByZXR1cm4gdGhpcy5wb3NpdGlvbk9uUm93KHRoaXMucG0uR2V0KCdHZXRTZWxlY3Rpb24nKSAtIDEpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fbmF2aWdhdGUoJ0dvdG9QcmV2aW91c1NldCcpO1xuICB9XG5cbiAgcHJldlJlY29yZFNldCgpIHtcbiAgICBpZiAoIXRoaXMuaXNMaXN0QXBwbGV0KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9uYXZpZ2F0ZSgnR290b1ByZXZpb3VzU2V0Jyk7XG4gIH1cblxuICBuZXdSZWNvcmQoY2IpIHtcbiAgICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB0aGlzLl9uZXdSZWNvcmQocmVzb2x2ZSkpO1xuICAgIHJldHVybiB0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicgPyBwcm9taXNlLnRoZW4oY2IpIDogcHJvbWlzZTtcbiAgfVxuXG4gIF9uZXdSZWNvcmQoY2IpIHtcbiAgICByZXR1cm4gdGhpcy5wbS5FeGVjdXRlTWV0aG9kKCdJbnZva2VNZXRob2QnLCAnTmV3UmVjb3JkJywgbnVsbCwge1xuICAgICAgYXN5bmM6IHRydWUsXG4gICAgICBjYixcbiAgICB9KTtcbiAgfVxuXG4gIG5ld1JlY29yZFN5bmMoKSB7XG4gICAgcmV0dXJuIHRoaXMucG0uRXhlY3V0ZU1ldGhvZCgnSW52b2tlTWV0aG9kJywgJ05ld1JlY29yZCcpO1xuICB9XG5cbiAgd3JpdGVSZWNvcmQoY2IsIGNiZXJyKSB7XG4gICAgbGV0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB0aGlzLl93cml0ZVJlY29yZCgoLi4uYXJncykgPT4ge1xuICAgICAgaWYgKGFyZ3NbMl0uR2V0UHJvcGVydHkoJ1N0YXR1cycpID09PSAnQ29tcGxldGVkJykge1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZWplY3QoKTtcbiAgICAgIH1cbiAgICB9KSk7XG4gICAgcHJvbWlzZSA9IHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJyA/IHByb21pc2UudGhlbihjYikgOiBwcm9taXNlO1xuICAgIHByb21pc2UgPSB0eXBlb2YgY2JlcnIgPT09ICdmdW5jdGlvbicgPyBwcm9taXNlLmNhdGNoKGNiZXJyKSA6IHByb21pc2U7XG4gICAgcmV0dXJuIHByb21pc2U7XG4gIH1cblxuICBfd3JpdGVSZWNvcmQoY2IpIHtcbiAgICByZXR1cm4gdGhpcy5wbS5FeGVjdXRlTWV0aG9kKCdJbnZva2VNZXRob2QnLCAnV3JpdGVSZWNvcmQnLCBudWxsLCB7XG4gICAgICBhc3luYzogdHJ1ZSxcbiAgICAgIC8vIFRPRE86IHNlbGZidXN5OiB0cnVlLFxuICAgICAgY2IsXG4gICAgfSk7XG4gIH1cblxuICB3cml0ZVJlY29yZFN5bmMoKSB7XG4gICAgcmV0dXJuIHRoaXMucG0uRXhlY3V0ZU1ldGhvZCgnSW52b2tlTWV0aG9kJywgJ1dyaXRlUmVjb3JkJyk7XG4gIH1cblxuICBkZWxldGVSZWNvcmRTeW5jKCkge1xuICAgIHJldHVybiB0aGlzLnBtLkV4ZWN1dGVNZXRob2QoJ0ludm9rZU1ldGhvZCcsICdEZWxldGVSZWNvcmQnKTtcbiAgfVxuXG4gIHVuZG9SZWNvcmRTeW5jKCkge1xuICAgIHJldHVybiB0aGlzLnBtLkV4ZWN1dGVNZXRob2QoJ0ludm9rZU1ldGhvZCcsICdVbmRvUmVjb3JkJyk7XG4gIH1cblxuICBzZXRDb250cm9sVmFsdWUobmFtZSwgdmFsdWUpIHtcbiAgICAvLyBUT0RPOiBJZiB2YWx1ZSBpcyBudWxsLCBub3RoaW5nIGhhcHBlbnMsIHNob3VsZCB3ZSBjb252ZXJ0IG51bGwgdG8gJyc/XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuX2dldENvbnRyb2wobmFtZSk7XG4gICAgaWYgKCFjb250cm9sKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCBmaW5kIGEgY29udHJvbCBieSBuYW1lICR7bmFtZX0gdG8gc2V0ICR7dmFsdWV9LmApO1xuICAgIH1cbiAgICBjb25zdCB1aVR5cGUgPSBjb250cm9sLkdldFVJVHlwZSgpO1xuICAgIGNvbnN0IGRpc3BsYXlGb3JtYXQgPSBjb250cm9sLkdldERpc3BsYXlGb3JtYXQoKSB8fCB0aGlzLmdldENvbnRyb2xEaXNwbGF5Rm9ybWF0KHVpVHlwZSk7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdmFsdWUgPSB0aGlzLl9nZXRTaWViZWxWYWx1ZSh2YWx1ZSwgdWlUeXBlLCBkaXNwbGF5Rm9ybWF0KTtcbiAgICAvLyBUT0RPOiBzaG91bGQgd2UgdXNlIFNldENlbGxWYWx1ZSBmb3IgbGlzdCBhcHBsZXRzP1xuICAgIGNvbnN0IHJldCA9IHRoaXMuX3NldENvbnRyb2xWYWx1ZUludGVybmFsKGNvbnRyb2wsIHZhbHVlKTtcbiAgICBpZiAoIXJldCkge1xuICAgICAgY29uc29sZS5sb2coYFZhbHVlICR7dmFsdWV9IHdhcyBub3Qgc2V0IGZvciAke2NvbnRyb2wuR2V0TmFtZSgpfWApOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIF9zZXRDb250cm9sVmFsdWVJbnRlcm5hbChjb250cm9sLCB2YWx1ZSkge1xuICAgIHRoaXMucG0uT25Db250cm9sRXZlbnQodGhpcy5jb25zdHMuZ2V0KCdQSFlFVkVOVF9DT05UUk9MX0ZPQ1VTJyksIGNvbnRyb2wpO1xuICAgIHJldHVybiB0aGlzLnBtLk9uQ29udHJvbEV2ZW50KHRoaXMuY29uc3RzLmdldCgnUEhZRVZFTlRfQ09OVFJPTF9CTFVSJyksIGNvbnRyb2wsIHZhbHVlKTtcbiAgfVxuXG4gIF92YWxpZGF0ZVBpY2tDb250cm9sKGNvbnRyb2wsIGlzU3RhdGljKSB7XG4gICAgLy8gUG9zc2libGUgcmVzdWx0czpcbiAgICAvLyBubyBwaWNrXG4gICAgLy8gc3RhdGljIHBpY2tcbiAgICAvLyBkeW5hbWljIHBpY2tcbiAgICAvLyBwaWNrXG4gICAgLy8gbXZnXG4gICAgLy8gP1xuXG4gICAgY29uc3QgaXNTdGF0aWNQaWNrID0gJzEnID09PSBjb250cm9sLklzU3RhdGljQm91bmRlZCgpO1xuICAgIGNvbnN0IHVpVHlwZSA9IGNvbnRyb2wuR2V0VUlUeXBlKCk7XG5cbiAgICBpZiAoaXNTdGF0aWMpIHsgLy8gY2FsbGVkIGdldFN0YXRpY0xPVlxuICAgICAgaWYgKCFpc1N0YXRpY1BpY2spIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgY29uc29sZS53YXJuKGBbTjE5XVRoZSBnZXRTdGF0aWNMT1YgY2FsbGVkIGZvciBub3Qgc3RhdGljIGNvbnRyb2wgLSAke3VpVHlwZX0uIFVzZSBnZXREeW5hbWljTE9WIG9yIHBpY2svbXZnYCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHsgLy8gY2FsbGVkIGdldER5bmFtaWNMT1ZcbiAgICAgIGlmIChpc1N0YXRpY1BpY2spIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdbTjE5XVRoZSBnZXREeW5hbWljTE9WIGNhbGxlZCBmb3Igc3RhdGljIGNvbnRyb2wuJyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMuY29uc3RzLmdldCgnU1dFX0NUUkxfQ09NQk9CT1gnKSAhPT0gdWlUeXBlKSB7IC8vIHRoZSBjb250cm9sIGlzIG5vdCBcIkpDb21ib0JveFwiXG4gICAgICAgIHN3aXRjaCAodWlUeXBlKSB7XG4gICAgICAgICAgY2FzZSB0aGlzLmNvbnN0cy5nZXQoJ1NXRV9DVFJMX1BJQ0snKTogLy8gUGlja1xuICAgICAgICAgIGNhc2UgdGhpcy5jb25zdHMuZ2V0KCdTV0VfQ1RSTF9NVkcnKTogLy8gTVZHXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICAgICAgY29uc29sZS53YXJuKGBbTjE5XVlvdSBuZWVkIHRvIHVzZSB0aGUgcG9wdXBzIGluc3RlYWQgb2YgZ2V0RHluYW1pY0xPViAtICR7dWlUeXBlfS5gKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICAgICAgY29uc29sZS53YXJuKGBbTjE5XVByb2JhYmx5IGdldER5bmFtaWNMT1YgaXMgbm90IGdvaW5nIHRvIHdvcmsgZm9yIHRoaXMgY29udHJvbCAtICR7dWlUeXBlfS5gKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldER5bmFtaWNMT1YoY29udHJvbE5hbWUpIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5fZ2V0Q29udHJvbChjb250cm9sTmFtZSk7XG4gICAgdGhpcy5fdmFsaWRhdGVQaWNrQ29udHJvbChjb250cm9sLCBmYWxzZSk7XG4gICAgY29uc3QgY29udHJvbElucHV0TmFtZSA9IGNvbnRyb2wuR2V0SW5wdXROYW1lKCk7XG4gICAgdGhpcy5sb3ZbY29udHJvbElucHV0TmFtZV0gPSB7fTtcbiAgICBjb25zdCBwcyA9IFNpZWJlbEFwcC5TX0FwcC5OZXdQcm9wZXJ0eVNldCgpO1xuICAgIHBzLlNldFByb3BlcnR5KCdTV0VGaWVsZCcsIGNvbnRyb2xJbnB1dE5hbWUpO1xuICAgIHBzLlNldFByb3BlcnR5KCdTV0VKSScsIGZhbHNlKTtcbiAgICB0aGlzLl9zZXRBY3RpdmVDb250cm9sKG51bGwpOyAvLyB0byBwcmV2ZW50IFVwZGF0ZVBpY2tcbiAgICB0aGlzLnBtLkV4ZWN1dGVNZXRob2QoJ0ludm9rZU1ldGhvZCcsICdHZXRRdWlja1BpY2tJbmZvJywgcHMpO1xuICAgIHJldHVybiB0aGlzLmxvdltjb250cm9sSW5wdXROYW1lXTtcbiAgfVxuXG4gIGdldFN0YXRpY0xPVihjb250cm9sTmFtZSkge1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLl9nZXRDb250cm9sKGNvbnRyb2xOYW1lKTtcbiAgICB0aGlzLl92YWxpZGF0ZVBpY2tDb250cm9sKGNvbnRyb2wsIHRydWUpO1xuICAgIGNvbnN0IGFyciA9IE4xOWJhc2VBcHBsZXQuR2V0U3RhdGljTE9WKGNvbnRyb2wuR2V0UmFkaW9Hcm91cFByb3BTZXQoKS5jaGlsZEFycmF5KTtcbiAgICBjb25zdCByZXQgPSBhcnIubWFwKGVsID0+IGVsLkRpc3BsYXlOYW1lKTtcbiAgICByZXR1cm4gcmV0LnNvcnQoKTtcbiAgfVxuXG4gIF9nZXRKU1ZhbHVlKHZhbHVlLCB1aVR5cGUsIGRpc3BsYXlGb3JtYXQpIHtcbiAgICBpZiAodGhpcy5jb25zdHMuZ2V0KCdTV0VfQ1RSTF9DSEVDS0JPWCcpID09PSB1aVR5cGUpIHtcbiAgICAgIC8vIGNvbnZlcnQgWS9OL251bGwgLT4gdHJ1ZS9mYWxzZSAvLyBudWxsIGNvbWVzIGFzIGZhbHNlP1xuICAgICAgdGhpcy5ib29sT2JqZWN0LlNldEFzU3RyaW5nKHZhbHVlKTtcbiAgICAgIHJldHVybiB0aGlzLmJvb2xPYmplY3QuR2V0VmFsdWUoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuY29udmVydERhdGVzICYmIGRpc3BsYXlGb3JtYXQgJiYgdGhpcy5faXNEYXRlVGltZUNvbnRyb2wodWlUeXBlKSkge1xuICAgICAgaWYgKHZhbHVlID09PSAnJykge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIGxldCBJU08gPSAnJztcbiAgICAgIGlmICh0aGlzLmlzTGlzdEFwcGxldCkge1xuICAgICAgICBJU08gPSB0aGlzLnV0aWxzLlRvSVNPRm9ybWF0KHZhbHVlLCB0aGlzLmNvbnN0cy5nZXQoJ1NXRV9DVFJMX0RBVEVfUElDSycpICE9PSB1aVR5cGUsIGRpc3BsYXlGb3JtYXQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgSVNPID0gdGhpcy51dGlscy5HZXRJU09EYXRlVGltZSh2YWx1ZSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgICBpZiAoSVNPID09PSAnJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYElTTyB2YWx1ZSBpcyBlbXB0eSBhZnRlciBjb252ZXJ0aW5nICR7dmFsdWV9YCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3IERhdGUoSVNPKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgZ2V0Q3VycmVudFJlY29yZChyYXcpIHtcbiAgICAvLyBUT0RPOiBuZWVkIGNvbnZlcnNpb25cbiAgICBjb25zdCBpbmRleCA9IHRoaXMuZ2V0U2VsZWN0aW9uKCk7XG4gICAgLy8gVE9ETzogY2hlY2sgaWYgdGhlcmUgaXMgYSByZWNvcmRcbiAgICAvLyBUT0RPOiBtYWtlIGEgY29weSBvZiByZXR1cm5lZCBvYmplY3QgKHRvIGF2b2lkIHRoZSBhY2NpZGVudGFsIG1vZGlmaWNhdGlvbiBvZiB0aGUgcmVjb3Jkc2V0KT9cbiAgICBpZiAocmF3KSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRSYXdSZWNvcmRTZXQoKVtpbmRleF07XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmdldFJlY29yZFNldCgpW2luZGV4XTtcbiAgfVxuXG4gIGNhbGN1bGF0ZUN1cnJlbnRSZWNvcmRTdGF0ZSgpIHtcbiAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRvIGRlbGV0ZSBwZW5kaW5nXG4gICAgLy8gMCAtIE5vIHJlY29yZHMgZGlzcGxheWVkXG4gICAgLy8gMSAtIFJlY29yZCBpcyBiZWluZyBjcmVhdGVkXG4gICAgLy8gMiAtIFJlY29yZCBpcyBiZWluZyBlZGl0ZWRcbiAgICAvLyAzIC0gSXMgaW4gcXVlcnkgbW9kZVxuICAgIC8vIDQgLSBSZWNvcmQgaXMgZGlzcGxheWVkLFxuICAgIC8vIDUgLSBSZWNvcmQgaXMgcmVhZC1vbmx5XG5cbiAgICBjb25zdCBiYyA9IHRoaXMucG0uR2V0KCdHZXRCdXNDb21wJyk7XG5cbiAgICBpZiAodGhpcy5wbS5HZXQoJ0lzSW5RdWVyeU1vZGUnKSkge1xuICAgICAgLy8gaWYgbm8gcmVjb3JkcyBhbmQgdGhlIGVudGVyZWQgdGhlIHF1ZXJ5IG1vZGUsXG4gICAgICAvLyBzZWxlY3Rpb24gaXMgLTEsIHRoZXJlZm9yZSB3ZSBuZWVkIHRvIGNoZWNrIHF1ZXJ5IG1vZGUgZmlyc3RcbiAgICAgIHJldHVybiAzO1xuICAgIH1cbiAgICBpZiAodGhpcy5nZXRTZWxlY3Rpb24oKSA8IDApIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBpZiAoYmMuSXNJbnNlcnRQZW5kaW5nKCkpIHsgLy8gc2VlbXMgdGhlIGluc2VydFBlbmRpbmcgcHJvcGVydHkgZ2l2ZXMgbW9yZSBhY2N1cmF0ZSB2YWx1ZVxuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICAgIGlmIChiYy5Jc0NvbW1pdFBlbmRpbmcoKSkgeyAvLyBiYy5jb21taXRQZW5kaW5nIG9yIHRoaXMucG0uR2V0U3RhdGVVSU1hcCgpLkNvbW1pdFBlbmRpbmdcbiAgICAgIHJldHVybiAyO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuY2FuSW52b2tlTWV0aG9kKCdXcml0ZVJlY29yZCcpKSB7XG4gICAgICAvLyBvciB1c2UgdGhlIGNhblVwZGF0ZSBwcm9wZXJ0eSBvZiB0aGUgQkM/XG4gICAgICByZXR1cm4gNTtcbiAgICB9XG5cbiAgICByZXR1cm4gNDsgLy8gdGhpcyBpcyBhIGRlZmF1bHQgZmFsbGJhY2s7XG4gIH1cblxuICBfZ2V0TWV0aG9kcygpIHtcbiAgICBjb25zdCBtZXRob2RzID0ge307XG4gICAgY29uc3QgYXBwbGV0Q29udHJvbHMgPSB0aGlzLnBtLkdldCgnR2V0Q29udHJvbHMnKTsgLy8gZXZlbiBmb3IgbGlzdCBhcHBsZXRcbiAgICBjb25zdCBhcnIgPSBPYmplY3QuZW50cmllcyhhcHBsZXRDb250cm9scyk7XG4gICAgYXJyLmZvckVhY2goKGNvbnRyb2xFbnRyeSkgPT4ge1xuICAgICAgY29uc3QgY29udHJvbE1ldGhvZCA9IGNvbnRyb2xFbnRyeVsxXS5HZXRNZXRob2ROYW1lKCk7XG4gICAgICBpZiAodHlwZW9mIGNvbnRyb2xNZXRob2QgIT09ICd1bmRlZmluZWQnICYmIGNvbnRyb2xNZXRob2QgIT09ICcnKSB7XG4gICAgICAgIG1ldGhvZHNbY29udHJvbE1ldGhvZF0gPSB7fTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gbWV0aG9kcztcbiAgfVxuXG4gIGdldENvbnRyb2xEaXNwbGF5Rm9ybWF0KHVpVHlwZSkge1xuICAgIHN3aXRjaCAodWlUeXBlKSB7XG4gICAgICBjYXNlIHRoaXMuY29uc3RzLmdldCgnU1dFX0NUUkxfREFURV9UWl9QSUNLJyk6XG4gICAgICBjYXNlIHRoaXMuY29uc3RzLmdldCgnU1dFX0NUUkxfREFURV9USU1FX1BJQ0snKTpcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxlRGF0YS5kYXRlVGltZUZvcm1hdDtcbiAgICAgIGNhc2UgdGhpcy5jb25zdHMuZ2V0KCdTV0VfQ1RSTF9EQVRFX1BJQ0snKTpcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxlRGF0YS5kYXRlRm9ybWF0O1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgfVxuXG4gIGdldEN1cnJlbnRSZWNvcmRNb2RlbChfY29udHJvbHMsIF9tZXRob2RzKSB7XG4gICAgaWYgKCFfY29udHJvbHMpIHtcbiAgICAgIF9jb250cm9scyA9IHRoaXMuZ2V0Q29udHJvbHMoKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIH1cbiAgICBpZiAoIV9tZXRob2RzKSB7XG4gICAgICBfbWV0aG9kcyA9IHRoaXMuX2dldE1ldGhvZHMoKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIH1cbiAgICBfY29udHJvbHMuc3RhdGUgPSB0aGlzLmNhbGN1bGF0ZUN1cnJlbnRSZWNvcmRTdGF0ZSgpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgX2NvbnRyb2xzLmlkID0gJyc7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBsZXQgb2JqID0ge307XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmdldFNlbGVjdGlvbigpO1xuICAgIGlmIChpbmRleCA+IC0xICYmIF9jb250cm9scy5zdGF0ZSAhPT0gMykgeyAvLyBhZGRlZCBfY29udHJvbHMuc3RhdGUgIT09IDM7IHdlIGRvbid0IG5lZWQgaWQgaW4gcXVlcnkgbW9kZVxuICAgICAgb2JqID0gdGhpcy5nZXRSZWNvcmRTZXQoKVtpbmRleF07XG4gICAgICBfY29udHJvbHMuaWQgPSB0aGlzLmdldFJhd1JlY29yZFNldCgpW2luZGV4XS5JZDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIH1cbiAgICBjb25zdCBhcHBsZXRDb250cm9scyA9IHRoaXMuX3JldHVybkNvbnRyb2xzKCk7XG4gICAgLy8gcG9wdWxhdGUgY29udHJvbHNcbiAgICBsZXQgYXJyID0gT2JqZWN0LmtleXMoX2NvbnRyb2xzKTtcbiAgICBhcnIuZm9yRWFjaCgoY29udHJvbE5hbWUpID0+IHtcbiAgICAgIGNvbnN0IGNvbnRyb2wgPSBhcHBsZXRDb250cm9sc1tjb250cm9sTmFtZV07XG4gICAgICBpZiAodHlwZW9mIGNvbnRyb2wgPT09ICd1bmRlZmluZWQnKSB7IC8vIGp1c3QgaWYgc29tZWJvZHkgc2VuZHMgaW5jb3JyZWN0IG5hbWUgb2YgdGhlIGNvbnRyb2xcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgZmllbGROYW1lID0gY29udHJvbC5HZXRGaWVsZE5hbWUoKTtcbiAgICAgIGNvbnN0IHVpVHlwZSA9IGNvbnRyb2wuR2V0VUlUeXBlKCk7XG4gICAgICBjb25zdCBkaXNwbGF5Rm9ybWF0ID0gY29udHJvbC5HZXREaXNwbGF5Rm9ybWF0KCkgfHwgdGhpcy5nZXRDb250cm9sRGlzcGxheUZvcm1hdCh1aVR5cGUpO1xuICAgICAgaWYgKF9jb250cm9scy5pZCkge1xuICAgICAgICBfY29udHJvbHNbY29udHJvbE5hbWVdID0geyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICAgICAgdmFsdWU6IHRoaXMuX2dldEpTVmFsdWUob2JqW2ZpZWxkTmFtZV0sIGNvbnRyb2wuR2V0VUlUeXBlKCksIGRpc3BsYXlGb3JtYXQpLFxuICAgICAgICAgIHVpVHlwZSxcbiAgICAgICAgICByZWFkb25seTogIXRoaXMucG0uRXhlY3V0ZU1ldGhvZCgnQ2FuVXBkYXRlJywgY29udHJvbE5hbWUpLFxuICAgICAgICAgIGlzTGluazogdGhpcy5wbS5FeGVjdXRlTWV0aG9kKCdDYW5OYXZpZ2F0ZScsIGNvbnRyb2xOYW1lKSxcbiAgICAgICAgICBsYWJlbDogY29udHJvbC5HZXREaXNwbGF5TmFtZSgpLFxuICAgICAgICAgIGlzUG9zdENoYW5nZXM6IGNvbnRyb2wuSXNQb3N0Q2hhbmdlcygpLFxuICAgICAgICAgIHJlcXVpcmVkOiB0aGlzLl9pc1JlcXVpcmVkKGNvbnRyb2wuR2V0SW5wdXROYW1lKCkpLFxuICAgICAgICAgIG1heFNpemU6IGNvbnRyb2wuR2V0TWF4U2l6ZSgpLFxuICAgICAgICAgIGZpZWxkTmFtZSxcbiAgICAgICAgICBkaXNwbGF5Rm9ybWF0LFxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHsgLy8gbm8gcmVjb3JkIGRpc3BsYXllZFxuICAgICAgICBfY29udHJvbHNbY29udHJvbE5hbWVdID0geyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICAgICAgdmFsdWU6ICcnLFxuICAgICAgICAgIHVpVHlwZSxcbiAgICAgICAgICByZWFkb25seTogX2NvbnRyb2xzLnN0YXRlICE9PSAzLCAvLyBzaG91bGQgYmUgZWRpdHRhYmxlIGluIHF1ZXJ5IG1vZGVcbiAgICAgICAgICBpc0xpbms6IGZhbHNlLFxuICAgICAgICAgIGxhYmVsOiBjb250cm9sLkdldERpc3BsYXlOYW1lKCksXG4gICAgICAgICAgaXNQb3N0Q2hhbmdlczogY29udHJvbC5Jc1Bvc3RDaGFuZ2VzKCksXG4gICAgICAgICAgcmVxdWlyZWQ6IHRoaXMuX2lzUmVxdWlyZWQoY29udHJvbC5HZXRJbnB1dE5hbWUoKSksXG4gICAgICAgICAgbWF4U2l6ZTogY29udHJvbC5HZXRNYXhTaXplKCksXG4gICAgICAgICAgZmllbGROYW1lLFxuICAgICAgICAgIGRpc3BsYXlGb3JtYXQsXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfSk7XG4gICAgLy8gcG9wdWxhdGUgbWV0aG9kc1xuICAgIGlmIChfbWV0aG9kcykge1xuICAgICAgYXJyID0gT2JqZWN0LmtleXMoX21ldGhvZHMpO1xuICAgICAgLy8gVE9ETzogY291bGQgYmUgYW4gZXhjZXB0aW9uIGlmIG1ldGhvZCBuYW1lIGlzIGluY29ycmVjdFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBhcnIuZm9yRWFjaCgobWV0aG9kTmFtZSkgPT4geyBfbWV0aG9kc1ttZXRob2ROYW1lXSA9IHRoaXMuY2FuSW52b2tlTWV0aG9kKG1ldGhvZE5hbWUpOyB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbnRyb2xzOiBfY29udHJvbHMsXG4gICAgICBtZXRob2RzOiBfbWV0aG9kcyxcbiAgICB9O1xuICB9XG5cbiAgX2ZpbmRDb250cm9sVG9FbnRlclNlYXJjaEV4cHIoKSB7XG4gICAgY29uc3QgYXBwbGV0Q29udHJvbHMgPSB0aGlzLl9yZXR1cm5Db250cm9scygpO1xuICAgIGNvbnN0IGFyciA9IE9iamVjdC52YWx1ZXMoYXBwbGV0Q29udHJvbHMpO1xuICAgIGNvbnN0IGZvdW5kID0gYXJyLmZpbmQoKGNvbnRyb2wpID0+IHtcbiAgICAgIGNvbnN0IGNvbnRyb2xVaVR5cGUgPSBjb250cm9sLkdldFVJVHlwZSgpO1xuICAgICAgaWYgKCF0aGlzLl9pc1NraXBDb250cm9sKGNvbnRyb2xVaVR5cGUpKSB7XG4gICAgICAgIC8vIHNraXBwaW5nIGFsc28gSkNoZWNrYm94XG4gICAgICAgIHJldHVybiBjb250cm9sVWlUeXBlICE9PSB0aGlzLmNvbnN0cy5nZXQoJ1NXRV9DVFJMX0NIRUNLQk9YJyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gICAgcmV0dXJuIGZvdW5kO1xuICB9XG5cbiAgX25ld1F1ZXJ5KCkge1xuICAgIHJldHVybiB0aGlzLnBtLkV4ZWN1dGVNZXRob2QoJ0ludm9rZU1ldGhvZCcsICdOZXdRdWVyeScpO1xuICB9XG5cbiAgcXVlcnlCeVNlYXJjaEV4cHJTeW5jKGV4cHIpIHtcbiAgICB0aGlzLl9uZXdRdWVyeSgpOyAvLyA/IGNoZWNrIG9yIG9wdGlvbmFsbHkgc2tpcFxuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLl9maW5kQ29udHJvbFRvRW50ZXJTZWFyY2hFeHByKCk7XG4gICAgdGhpcy5fc2V0Q29udHJvbFZhbHVlSW50ZXJuYWwoY29udHJvbCwgZXhwcik7XG4gICAgdGhpcy5wbS5FeGVjdXRlTWV0aG9kKCdJbnZva2VNZXRob2QnLCAnRXhlY3V0ZVF1ZXJ5Jyk7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UmVjb3JkU2V0KCkubGVuZ3RoO1xuICB9XG5cbiAgcXVlcnlCeUlkU3luYyhyb3dJZCkge1xuICAgIGxldCBleHByO1xuICAgIGlmIChBcnJheSA9PT0gcm93SWQuY29uc3RydWN0b3IpIHtcbiAgICAgIGV4cHIgPSByb3dJZC5tYXAoZWwgPT4gYElkPVwiJHtlbH1cImApLmpvaW4oJyBPUiAnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXhwciA9IGBJZD1cIiR7cm93SWR9XCJgO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5xdWVyeUJ5U2VhcmNoRXhwclN5bmMoZXhwcik7XG4gIH1cblxuICBxdWVyeUJ5SWQocm93SWQsIGNiKSB7XG4gICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gdGhpcy5fcXVlcnlCeUlkKHJvd0lkLCByZXNvbHZlKSk7XG4gICAgY29uc3QgcmV0ID0gcHJvbWlzZS50aGVuKCgpID0+IHRoaXMuZ2V0UmVjb3JkU2V0KCkubGVuZ3RoKTtcbiAgICByZXR1cm4gdHlwZW9mIGNiID09PSAnZnVuY3Rpb24nID8gcmV0LnRoZW4oY2IpIDogcmV0O1xuICB9XG5cbiAgX3F1ZXJ5QnlJZChyb3dJZCwgY2IpIHtcbiAgICB0aGlzLl9uZXdRdWVyeSgpOyAvLyA/IGNoZWNrIG9yIG9wdGlvbmFsbHkgc2tpcFxuXG4gICAgY29uc3QgYWkgPSB7XG4gICAgICBzY29wZTogdGhpcyxcbiAgICAgIGFzeW5jOiB0cnVlLFxuICAgICAgc2VsZmJ1c3k6IHRydWUsXG4gICAgfTtcbiAgICBpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBhaS5jYiA9IGNiO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLl9maW5kQ29udHJvbFRvRW50ZXJTZWFyY2hFeHByKCk7XG4gICAgdGhpcy5fc2V0Q29udHJvbFZhbHVlSW50ZXJuYWwoY29udHJvbCwgYElkPVwiJHtyb3dJZH1cImApO1xuICAgIHJldHVybiB0aGlzLnBtLkV4ZWN1dGVNZXRob2QoJ0ludm9rZU1ldGhvZCcsICdFeGVjdXRlUXVlcnknLCBudWxsLCBhaSk7XG4gIH1cblxuICBxdWVyeShwYXJhbXMsIGNiKSB7XG4gICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gdGhpcy5fcXVlcnkocGFyYW1zLCByZXNvbHZlKSk7XG4gICAgY29uc3QgcmV0ID0gcHJvbWlzZS50aGVuKCgpID0+IHRoaXMuZ2V0UmVjb3JkU2V0KCkubGVuZ3RoKTtcbiAgICByZXR1cm4gdHlwZW9mIGNiID09PSAnZnVuY3Rpb24nID8gcmV0LnRoZW4oY2IpIDogcmV0O1xuICB9XG5cbiAgX3F1ZXJ5KHBhcmFtcywgY2IpIHtcbiAgICAvLyBUT0RPOiBjaGVjayBpZiBpdCBpcyBhbHJlYWR5IGluIHF1ZXJ5IG1vZGUgdG8gYXZvaWQgY2FsbGluZyB0aGUgbmV3IHF1ZXJ5IGFnYWluXG4gICAgLy8gb3IgYWNjZXB0IHRoZSBpbnB1dCBwYXJhbWV0ZXIgdG8gc2tpcCBjYWxsaW5nIHRoZSBuZXcgcXVlcnk/XG4gICAgLy8gb3IgbWF5YmUgYmV0dGVyIHRvIGNhbmNlbCB0aGUgZXhpc3RpbmcgcXVlcnk/XG4gICAgdGhpcy5fbmV3UXVlcnkoKTtcblxuICAgIGNvbnN0IGFpID0ge1xuICAgICAgc2NvcGU6IHRoaXMsXG4gICAgICBhc3luYzogdHJ1ZSxcbiAgICAgIHNlbGZidXN5OiB0cnVlLFxuICAgIH07XG4gICAgaWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYWkuY2IgPSBjYjtcbiAgICB9XG5cbiAgICBjb25zdCBfY29udHJvbHMgPSB0aGlzLl9yZXR1cm5Db250cm9scygpO1xuICAgIGNvbnN0IGFyciA9IE9iamVjdC5rZXlzKHBhcmFtcyk7XG4gICAgYXJyLmZvckVhY2goKGNvbnRyb2xOYW1lKSA9PiB7XG4gICAgICBjb25zdCBjb250cm9sID0gX2NvbnRyb2xzW2NvbnRyb2xOYW1lXTtcbiAgICAgIGlmIChjb250cm9sKSB7XG4gICAgICAgIHRoaXMuX3NldENvbnRyb2xWYWx1ZUludGVybmFsKGNvbnRyb2wsIHRoaXMuX2dldFNpZWJlbFZhbHVlKHBhcmFtc1tjb250cm9sTmFtZV0sIGNvbnRyb2wuR2V0VUlUeXBlKCkpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFRoZSBjb250cm9sIFwiJHtjb250cm9sTmFtZX1cIiBpcyBub3QgZm91bmQhYCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXMucG0uRXhlY3V0ZU1ldGhvZCgnSW52b2tlTWV0aG9kJywgJ0V4ZWN1dGVRdWVyeScsIG51bGwsIGFpKTtcbiAgfVxuXG4gIHN0YXRpYyBSZXF1ZXJ5KG5hbWUpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gU2llYmVsQXBwLlNfQXBwLkdldFNlcnZpY2UoJ04xOSBCUycpO1xuICAgIGlmIChzZXJ2aWNlKSB7XG4gICAgICBjb25zdCBpblByb3BTZXQgPSBTaWViZWxBcHAuU19BcHAuTmV3UHJvcGVydHlTZXQoKTtcbiAgICAgIGluUHJvcFNldC5TZXRQcm9wZXJ0eSgnbmFtZScsIG5hbWUpO1xuICAgICAgc2VydmljZS5JbnZva2VNZXRob2QoJ1JlcXVlcnknLCBpblByb3BTZXQsIHt9KTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgUmVmcmVzaChuYW1lKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IFNpZWJlbEFwcC5TX0FwcC5HZXRTZXJ2aWNlKCdOMTkgQlMnKTtcbiAgICBpZiAoc2VydmljZSkge1xuICAgICAgY29uc3QgaW5Qcm9wU2V0ID0gU2llYmVsQXBwLlNfQXBwLk5ld1Byb3BlcnR5U2V0KCk7XG4gICAgICBpblByb3BTZXQuU2V0UHJvcGVydHkoJ25hbWUnLCBuYW1lKTtcbiAgICAgIHNlcnZpY2UuSW52b2tlTWV0aG9kKCdSZWZyZXNoJywgaW5Qcm9wU2V0LCB7fSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0TVZGKGlkcywgZmllbGRzLCB1c2VBY3RpdmVCTykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB0aGlzLl9nZXRNVkYoaWRzLCBmaWVsZHMsIHVzZUFjdGl2ZUJPLCByZXNvbHZlLCByZWplY3QpKTtcbiAgfVxuXG4gIF9nZXRGaWVsZE5hbWVGb3JDb250cm9sKGNvbnRyb2xOYW1lKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuX2dldENvbnRyb2woY29udHJvbE5hbWUpO1xuICAgIC8vIGlmIG5vdCBmb3VuZCwgdGhlIGlucHV0IHZhbHVlIGlzIHJldHVybmVkXG4gICAgaWYgKGNvbnRyb2wpIHtcbiAgICAgIHJldHVybiBjb250cm9sLkdldEZpZWxkTmFtZSgpO1xuICAgIH1cbiAgICByZXR1cm4gY29udHJvbE5hbWU7IC8vIGZhbGxiYWNrIC0ganVzdCBpbiBjYXNlIHdlIGdvdCB0aGUgZmllbGQgbmFtZVxuICB9XG5cbiAgX2dldE1WRihpZHMsIGZpZWxkcywgdXNlQWN0aXZlQk8sIHJlc29sdmUsIHJlamVjdCkge1xuICAgIGNvbnN0IGFyciA9IE9iamVjdC5lbnRyaWVzKGZpZWxkcyk7XG4gICAgY29uc3QgcHNJbnB1dHMgPSBTaWViZWxBcHAuU19BcHAuTmV3UHJvcGVydHlTZXQoKTtcbiAgICBwc0lucHV0cy5TZXRQcm9wZXJ0eSgnQk8nLCBTaWViZWxBcHAuU19BcHAuR2V0QWN0aXZlQnVzT2JqKCkuR2V0TmFtZSgpKTtcbiAgICBwc0lucHV0cy5TZXRQcm9wZXJ0eSgnQkMnLCB0aGlzLnBtLkdldCgnR2V0QnVzQ29tcCcpLkdldE5hbWUoKSk7XG4gICAgcHNJbnB1dHMuU2V0UHJvcGVydHkoJ1VzZUFjdGl2ZUJPJywgdXNlQWN0aXZlQk8gPyAnWScgOiAnTicpO1xuICAgIHBzSW5wdXRzLlNldFByb3BlcnR5KCdJRCcsIGlkcy5qb2luKCcsJykpO1xuICAgIGFyci5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgY29uc3QgcHMgPSBTaWViZWxBcHAuU19BcHAuTmV3UHJvcGVydHlTZXQoKTtcbiAgICAgIHBzLlNldFR5cGUodGhpcy5fZ2V0RmllbGROYW1lRm9yQ29udHJvbChlbFswXSkpO1xuICAgICAgcHMuU2V0UHJvcGVydHkoJ0ZpZWxkcycsIGVsWzFdLmpvaW4oJywnKSk7XG4gICAgICBwc0lucHV0cy5BZGRDaGlsZChwcy5DbG9uZSgpKTtcbiAgICB9KTtcbiAgICBjb25zdCBicyA9IFNpZWJlbEFwcC5TX0FwcC5HZXRTZXJ2aWNlKCdOMTkgQlMnKTtcbiAgICBjb25zdCBhaSA9IHtcbiAgICAgIGFzeW5jOiB0cnVlLFxuICAgICAgc2VsZmJ1c3k6IHRydWUsXG4gICAgICBzY29wZTogdGhpcyxcbiAgICAgIGVycmNiOiAoKSA9PiB7XG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9ucy5za2lwTmV3RmllbGREYXRhTm90aWZpY2F0aW9ucyA9IGZhbHNlO1xuICAgICAgICByZWplY3QoKTtcbiAgICAgIH0sXG4gICAgICBjYjogKG1ldGhvZE5hbWUsIElucHV0cywgcHNPdXRwdXRzKSA9PiB7XG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9ucy5za2lwTmV3RmllbGREYXRhTm90aWZpY2F0aW9ucyA9IGZhbHNlO1xuICAgICAgICBjb25zdCByZXQgPSB7fTtcbiAgICAgICAgY29uc3QgeyBjaGlsZEFycmF5IH0gPSBwc091dHB1dHMuR2V0Q2hpbGRCeVR5cGUoJ1Jlc3VsdFNldCcpIHx8IHt9OyAvLyB0byBiZSBzYWZlIHdoZW4gbm8gcmVzdWx0c1xuICAgICAgICAoY2hpbGRBcnJheSB8fCBbXSkuZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgICAgICByZXRbY2hpbGQuR2V0VHlwZSgpXSA9IHt9O1xuICAgICAgICAgIGNoaWxkLmNoaWxkQXJyYXkuZm9yRWFjaCgoZ3JhbmRDaGlsZCkgPT4ge1xuICAgICAgICAgICAgcmV0W2NoaWxkLkdldFR5cGUoKV1bZ3JhbmRDaGlsZC5HZXRUeXBlKCldID0gZ3JhbmRDaGlsZC5jaGlsZEFycmF5Lm1hcCgocmVjKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHByaW1hcnkgPSByZWMucHJvcEFycmF5WydTU0EgUHJpbWFyeSBGaWVsZCddO1xuICAgICAgICAgICAgICB0aGlzLmJvb2xPYmplY3QuU2V0QXNTdHJpbmcocHJpbWFyeSk7XG4gICAgICAgICAgICAgIHJlYy5wcm9wQXJyYXlbJ1NTQSBQcmltYXJ5IEZpZWxkJ10gPSB0aGlzLmJvb2xPYmplY3QuR2V0VmFsdWUoKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgcmVjLnByb3BBcnJheSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJlc29sdmUocmV0KTtcbiAgICAgIH0sXG4gICAgfTtcbiAgICBpZiAodXNlQWN0aXZlQk8pIHtcbiAgICAgIHRoaXMubm90aWZpY2F0aW9ucy5za2lwTmV3RmllbGREYXRhTm90aWZpY2F0aW9ucyA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiBicy5JbnZva2VNZXRob2QoJ1JldHVybk1WR0ZpZWxkcycsIHBzSW5wdXRzLCBhaSk7XG4gIH1cblxuICBzYXZlUHJlZihuYW1lLCB2YWx1ZSkge1xuICAgIC8vIHZhbHVlIGlzIGEgc3RyaW5nXG4gICAgLy8gdmFsdWUgaXMgYm91bmQgdG8gYXBwbGV0IGFuZCB2aWV3XG4gICAgY29uc3QgcHNJbnB1dCA9IFNpZWJlbEFwcC5TX0FwcC5OZXdQcm9wZXJ0eVNldCgpO1xuICAgIHBzSW5wdXQuU2V0UHJvcGVydHkoJ0tleScsIG5hbWUpO1xuICAgIHBzSW5wdXQuU2V0UHJvcGVydHkobmFtZSwgdmFsdWUpO1xuICAgIHRoaXMucG0uT25Db250cm9sRXZlbnQoXG4gICAgICB0aGlzLmNvbnN0cy5nZXQoJ1BIWUVWRU5UX0lOVk9LRV9DT05UUk9MJyksXG4gICAgICB0aGlzLnBtLkdldCh0aGlzLmNvbnN0cy5nZXQoJ1NXRV9NVEhEX1VQREFURV9VU0VSX1BSRUYnKSksXG4gICAgICBwc0lucHV0LFxuICAgICk7XG4gICAgcmV0dXJuIHRoaXMucG0uU2V0UHJvcGVydHkobmFtZSwgdmFsdWUpO1xuICB9XG5cbiAgcmVhZFByZWYobmFtZSkge1xuICAgIHJldHVybiB0aGlzLnBtLkdldChuYW1lKTtcbiAgfVxuXG4gIF9yZXRyaWV2ZURhdGEoYW1vdW50KSB7IC8vIHRlbXAgbWV0aG9kIC0gd2lsbCBiZSByZW1vdmVkXG4gICAgY29uc3QgZGF0YSA9IG5ldyBNYXAoKTtcblxuICAgIHdoaWxlIChkYXRhLnNpemUgPCBhbW91bnQpIHtcbiAgICAgIGNvbnN0IGFyciA9IHRoaXMuZ2V0UmF3UmVjb3JkU2V0KCk7XG5cbiAgICAgIC8vIGF2b2lkIHRoZSBkdXBsaWNhdGVzXG4gICAgICBhcnIuZm9yRWFjaChlbCA9PiBkYXRhLnNldChlbC5JZCwgZWwpKTtcblxuICAgICAgLy8gd2UgYXJlIHVzaW5nIGNhbkludm9rZU1ldGhvZCwgYXMgaW4gMTYuMCBuZXh0UmVjb3JkU2V0IGFsd2F5cyByZXR1cm5zIHVuZGVmaW5lZFxuICAgICAgaWYgKCF0aGlzLmNhbkludm9rZU1ldGhvZCgnR290b05leHRTZXQnKSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgdGhpcy5uZXh0UmVjb3JkU2V0KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGE6IFsuLi5kYXRhLnZhbHVlcygpXSxcbiAgICAgIGhhc05leHQ6IHRoaXMuY2FuSW52b2tlTWV0aG9kKCdHb3RvTmV4dFNldCcpLFxuICAgIH07XG4gIH1cblxuICBfc2V0RmllbGRWYWx1ZShuYW1lLCB2YWx1ZSkge1xuICAgIGNvbnNvbGUud2FybignW04xOV1fc2V0RmllbGRWYWx1ZSB3aWxsIGJlIHJlbW92ZWQgaW4gdGhlIGZ1dHVyZSEnKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgdGhpcy5hcHBsZXQuU2V0Q29udHJvbFZhbHVlQnlOYW1lKG5hbWUsIHZhbHVlKTtcbiAgICByZXR1cm4gdGhpcy5wbS5FeGVjdXRlTWV0aG9kKCdJbnZva2VNZXRob2QnLCAnV3JpdGVSZWNvcmQnKTtcbiAgfVxuXG4gIC8vIHRoaXMgaXMgYWxzbyBjYWxsZWQgZnJvbSB0aGUgdGhlIGRlbW8gd2hlcmUgU2llYmVsIGFuZCBjdXN0b20gcmVuZGVyZWQgYXBwbGV0IGNvZXhpc3RcbiAgX2dldEZpZWxkVG9Db250cm9sTWFwKF9jb250cm9scykge1xuICAgIGNvbnN0IHJldCA9IHt9O1xuICAgIGNvbnN0IGFwcGxldENvbnRyb2xzID0gdGhpcy5fcmV0dXJuQ29udHJvbHMoKTtcbiAgICBjb25zdCBhcnIgPSBPYmplY3Qua2V5cyhfY29udHJvbHMpO1xuICAgIGFyci5mb3JFYWNoKChjb250cm9sTmFtZSkgPT4ge1xuICAgICAgY29uc3QgY29udHJvbCA9IGFwcGxldENvbnRyb2xzW2NvbnRyb2xOYW1lXTtcbiAgICAgIGNvbnN0IGZpZWxkTmFtZSA9IGNvbnRyb2wuR2V0RmllbGROYW1lKCk7XG4gICAgICBpZiAoZmllbGROYW1lKSB7XG4gICAgICAgIGNvbnN0IHVpVHlwZSA9IGNvbnRyb2wuR2V0VUlUeXBlKCk7XG4gICAgICAgIHJldFtmaWVsZE5hbWVdID0ge1xuICAgICAgICAgIG5hbWU6IGNvbnRyb2xOYW1lLFxuICAgICAgICAgIGlzUG9zdENoYW5nZXM6IGNvbnRyb2wuSXNQb3N0Q2hhbmdlcygpLFxuICAgICAgICAgIHVpVHlwZSxcbiAgICAgICAgICBkaXNwbGF5Rm9ybWF0OiBjb250cm9sLkdldERpc3BsYXlGb3JtYXQoKSB8fCB0aGlzLmdldENvbnRyb2xEaXNwbGF5Rm9ybWF0KHVpVHlwZSksXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIGdldENvbnRyb2xzUmVjb3JkU2V0KCkge1xuICAgIGlmICghdGhpcy5maWVsZFRvQ29udHJvbE1hcCkge1xuICAgICAgdGhpcy5maWVsZFRvQ29udHJvbE1hcCA9IHRoaXMuX2dldEZpZWxkVG9Db250cm9sTWFwKHRoaXMuX3JldHVybkNvbnRyb2xzKCkpO1xuICAgIH1cbiAgICAvLyB1c2VkIHNsaWNlIHRvIGF2b2lkIG1vZGlmaWNhdGlvbiBvZiB0aGUgcmVjb3JkIHNldFxuICAgIGNvbnN0IHJldCA9IHRoaXMuZ2V0UmVjb3JkU2V0KCkuc2xpY2UoKTtcbiAgICBjb25zdCByYXdSZWNvcmRTZXQgPSB0aGlzLmdldFJhd1JlY29yZFNldCgpOyAvLyBqdXN0IGZhbGxiYWNrIGlmIHJlY29yZCBzZXQgZG9lcyBub3QgaGF2ZSBJZFxuXG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHJldC5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgICAgY29uc3QgaWQgPSByZXRbaV0uSWQ7XG4gICAgICByZXRbaV0gPSBPYmplY3Qua2V5cyhyZXRbaV0pLmZpbHRlcihlbCA9PiB0aGlzLmZpZWxkVG9Db250cm9sTWFwW2VsXSkucmVkdWNlKChhY2MsIGVsKSA9PiAoe1xuICAgICAgICAuLi5hY2MsXG4gICAgICAgIC4uLntcbiAgICAgICAgICBbdGhpcy5maWVsZFRvQ29udHJvbE1hcFtlbF0ubmFtZV06IHRoaXMuX2dldEpTVmFsdWUocmV0W2ldW2VsXSxcbiAgICAgICAgICAgIHRoaXMuZmllbGRUb0NvbnRyb2xNYXBbZWxdLnVpVHlwZSxcbiAgICAgICAgICAgIHRoaXMuZmllbGRUb0NvbnRyb2xNYXBbZWxdLmRpc3BsYXlGb3JtYXQpLFxuICAgICAgICB9LFxuICAgICAgfSksIHt9KTtcbiAgICAgIGlmIChpZCkge1xuICAgICAgICByZXRbaV0uSWQgPSBpZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldFtpXS5JZCA9IHJhd1JlY29yZFNldFtpXS5JZDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgc29ydChjb250cm9sTmFtZSwgaXNBc2NlbmRpbmcpIHtcbiAgICAvLyBUT0RPOiBjaGVjayBpZiBzb3J0YWJsZT8gZS5nLiBub3QgaW4gcXVlcnkgbW9kZVxuICAgIC8vIFRPRE86IGNoZWNrIGlmIHdlIGNhbiBzb3J0IGJ5IHRoaXMgY29udHJvbD8gY29udHJvbCBoYXMgSXNTb3J0YWJsZSBmdW5jLCBidXQgd2UgZG9uJ3QgcmV0dXJuIHRoZSBvdXRwdXQgb2YgaXRcbiAgICBpZiAodGhpcy5pc0xpc3RBcHBsZXQpIHtcbiAgICAgIGNvbnN0IHNvcnRPcmRlciA9IGlzQXNjZW5kaW5nID8gdGhpcy5jb25zdHMuZ2V0KCdTT1JUX0FTQ0VORElORycpIDogdGhpcy5jb25zdHMuZ2V0KCdTT1JUX0RFU0NFTkRJTkcnKTtcbiAgICAgIHRoaXMuYXBwbGV0Lk9uQ2xpY2tTb3J0KGNvbnRyb2xOYW1lLCBzb3J0T3JkZXIpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTjE5bm90aWZpY2F0aW9ucyB7XG4gIGNvbnN0cnVjdG9yKHBtLCBjb25zdHMsIGJjSWQpIHtcbiAgICBsZXQgcmVjZWl2ZWROb3RpZmljYXRpb25zID0gW107XG4gICAgdGhpcy50b2tlbiA9IDA7XG4gICAgdGhpcy5zdWJzY3JpYmVycyA9IFtdO1xuICAgIHRoaXMuc2tpcE5ld0ZpZWxkRGF0YU5vdGlmaWNhdGlvbnMgPSBmYWxzZTtcblxuICAgIHBtLkF0dGFjaE5vdGlmaWNhdGlvbkhhbmRsZXIoY29uc3RzLmdldCgnU1dFX1BST1BfQkNfTk9USV9CRUdJTicpLCAocHJvcFNldCkgPT4ge1xuICAgICAgaWYgKGJjSWQgPT09IHByb3BTZXQuR2V0UHJvcGVydHkoJ2JjJykpIHtcbiAgICAgICAgcmVjZWl2ZWROb3RpZmljYXRpb25zID0gW107XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBwbS5BdHRhY2hOb3RpZmljYXRpb25IYW5kbGVyKGNvbnN0cy5nZXQoJ1NXRV9QUk9QX0JDX05PVElfTkVXX0FDVElWRV9ST1cnKSwgKHByb3BTZXQpID0+IHtcbiAgICAgIGlmIChiY0lkID09PSBwcm9wU2V0LkdldFByb3BlcnR5KCdiYycpKSB7XG4gICAgICAgIHJlY2VpdmVkTm90aWZpY2F0aW9ucy5wdXNoKCdTV0VfUFJPUF9CQ19OT1RJX05FV19BQ1RJVkVfUk9XJyk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBwbS5BdHRhY2hOb3RpZmljYXRpb25IYW5kbGVyKGNvbnN0cy5nZXQoJ1NXRV9QUk9QX0JDX05PVElfU1RBVEVfQ0hBTkdFRCcpLCAocHJvcFNldCkgPT4ge1xuICAgICAgY29uc3Qgc3RhdGVzID0gWydjcCddOyAvLyAnbidcbiAgICAgIGlmIChiY0lkID09PSBwcm9wU2V0LkdldFByb3BlcnR5KCdiYycpKSB7XG4gICAgICAgIGlmICghc3RhdGVzLmluY2x1ZGVzKHByb3BTZXQuR2V0UHJvcGVydHkoJ3N0YXRlJykpKSB7XG4gICAgICAgICAgcmVjZWl2ZWROb3RpZmljYXRpb25zLnB1c2goJ1NXRV9QUk9QX0JDX05PVElfU1RBVEVfQ0hBTkdFRCcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBwbS5BdHRhY2hOb3RpZmljYXRpb25IYW5kbGVyKGNvbnN0cy5nZXQoJ1NXRV9QUk9QX0JDX05PVElfTkVXX0RBVEFfV1MnKSwgKHByb3BTZXQpID0+IHtcbiAgICAgIGlmIChiY0lkID09PSBwcm9wU2V0LkdldFByb3BlcnR5KCdiYycpKSB7XG4gICAgICAgIGlmICghdGhpcy5za2lwTmV3RmllbGREYXRhTm90aWZpY2F0aW9ucykge1xuICAgICAgICAgIHJlY2VpdmVkTm90aWZpY2F0aW9ucy5wdXNoKCdTV0VfUFJPUF9CQ19OT1RJX05FV19EQVRBX1dTJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIHBtLkF0dGFjaE5vdGlmaWNhdGlvbkhhbmRsZXIoY29uc3RzLmdldCgnU1dFX1BST1BfQkNfTk9USV9ORVdfRklFTERfREFUQScpLCAocHJvcFNldCkgPT4ge1xuICAgIC8vICAgaWYgKGJjSWQgPT09IHByb3BTZXQuR2V0UHJvcGVydHkoJ2JjJykpIHtcbiAgICAvLyAgICAgaWYgKCF0aGlzLnNraXBOZXdGaWVsZERhdGFOb3RpZmljYXRpb25zKSB7XG4gICAgLy8gICAgICAgcmVjZWl2ZWROb3RpZmljYXRpb25zLnB1c2goJ1NXRV9QUk9QX0JDX05PVElfTkVXX0ZJRUxEX0RBVEEnKTtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgfVxuICAgIC8vIH0pO1xuXG4gICAgcG0uQXR0YWNoTm90aWZpY2F0aW9uSGFuZGxlcihjb25zdHMuZ2V0KCdTV0VfUFJPUF9CQ19OT1RJX0dFTkVSSUMnKSwgKHByb3BTZXQpID0+IHtcbiAgICAgIGNvbnN0IHR5cGUgPSBwcm9wU2V0LkdldFByb3BlcnR5KGNvbnN0cy5nZXQoJ1NXRV9QUk9QX05PVElfVFlQRScpKTtcbiAgICAgIGlmICgnQ2xvc2VQb3B1cCcgPT09IHR5cGUpIHtcbiAgICAgICAgdGhpcy5za2lwTmV3RmllbGREYXRhTm90aWZpY2F0aW9ucyA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gcG0uQXR0YWNoTm90aWZpY2F0aW9uSGFuZGxlcihjb25zdHMuZ2V0KCdTV0VfUFJPUF9CQ19OT1RJX05FV19EQVRBJyksIChwcm9wU2V0KSA9PiB7XG4gICAgLy8gICBpZiAoYmNJZCA9PT0gcHJvcFNldC5HZXRQcm9wZXJ0eSgnYmMnKSkgeyAvLyB3aGVuIGRvZXMgaXQgaGFwcGVuXG4gICAgLy8gICAgIHJlY2VpdmVkTm90aWZpY2F0aW9ucy5wdXNoKCdTV0VfUFJPUF9CQ19OT1RJX05FV19EQVRBJyk7XG4gICAgLy8gICB9XG4gICAgLy8gfSk7XG5cbiAgICBwbS5BdHRhY2hOb3RpZmljYXRpb25IYW5kbGVyKGNvbnN0cy5nZXQoJ1NXRV9QUk9QX0JDX05PVElfREVMRVRFX1JFQ09SRCcpLCAocHJvcFNldCkgPT4ge1xuICAgICAgaWYgKGJjSWQgPT09IHByb3BTZXQuR2V0UHJvcGVydHkoJ2JjJykpIHtcbiAgICAgICAgcmVjZWl2ZWROb3RpZmljYXRpb25zLnB1c2goJ1NXRV9QUk9QX0JDX05PVElfREVMRVRFX1JFQ09SRCcpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcG0uQXR0YWNoTm90aWZpY2F0aW9uSGFuZGxlcihjb25zdHMuZ2V0KCdTV0VfUFJPUF9CQ19OT1RJX05FV19SRUNPUkQnKSwgKHByb3BTZXQpID0+IHtcbiAgICAgIGlmIChiY0lkID09PSBwcm9wU2V0LkdldFByb3BlcnR5KCdiYycpKSB7XG4gICAgICAgIHJlY2VpdmVkTm90aWZpY2F0aW9ucy5wdXNoKCdTV0VfUFJPUF9CQ19OT1RJX05FV19SRUNPUkQnKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHBtLkF0dGFjaE5vdGlmaWNhdGlvbkhhbmRsZXIoY29uc3RzLmdldCgnU1dFX1BST1BfQkNfTk9USV9FTkQnKSwgKHByb3BTZXQpID0+IHtcbiAgICAgIGlmIChiY0lkID09PSBwcm9wU2V0LkdldFByb3BlcnR5KCdiYycpKSB7XG4gICAgICAgIGlmIChyZWNlaXZlZE5vdGlmaWNhdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIC8vIHdlIGFzc3VtZSB0aGF0IHRoZSBmdW5jdGlvbiBkb2VzIG5vdCB0aHJvdyBhbiBlcnJvciwgc28gbm8gZXJyb3IgaGFuZGxpbmcgaGVyZVxuICAgICAgICAgIHRoaXMuc3Vic2NyaWJlcnMuZm9yRWFjaChlbCA9PiBlbC5mdW5jKCkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzdWJzY3JpYmUoZnVuYykge1xuICAgIGlmICh0eXBlb2YgZnVuYyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdmdW5jIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG4gICAgfVxuICAgIHRoaXMudG9rZW4gKz0gMTtcbiAgICB0aGlzLnN1YnNjcmliZXJzLnB1c2goeyB0b2tlbjogdGhpcy50b2tlbiwgZnVuYyB9KTtcbiAgICByZXR1cm4gdGhpcy50b2tlbjtcbiAgfVxuXG4gIHVuc3Vic2NyaWJlKHN1YlRva2VuKSB7XG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHRoaXMuc3Vic2NyaWJlcnMubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgIGlmIChzdWJUb2tlbiA9PT0gdGhpcy5zdWJzY3JpYmVyc1tpXS50b2tlbikge1xuICAgICAgICByZXR1cm4gdGhpcy5zdWJzY3JpYmVycy5zcGxpY2UoaSwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIiwiaW1wb3J0IE4xOWJhc2VBcHBsZXQgZnJvbSAnLi9uMTliYXNlQXBwbGV0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTjE5cG9wdXBBcHBsZXQgZXh0ZW5kcyBOMTliYXNlQXBwbGV0IHtcbiAgY29uc3RydWN0b3Ioc2V0dGluZ3MpIHtcbiAgICBzdXBlcihzZXR0aW5ncyk7XG4gICAgY29uc29sZS5sb2coYCR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfSBzdGFydGVkLi4uYCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuXG4gICAgaWYgKHRoaXMuaXNMaXN0QXBwbGV0KSB7XG4gICAgICB0aGlzLnBtLkdldFJlbmRlcmVyKCkucmVzaXplID0gKCkgPT4gMDtcbiAgICAgIHRoaXMucG0uR2V0UmVuZGVyZXIoKS5HZXRTZWxlY3RlZFJvdyA9ICgpID0+IDA7XG4gICAgfVxuICB9XG5cbiAgcGlja1JlY29yZCgpIHtcbiAgICAvLyBUT0RPOiBjaGVjayBjYW5Jbm9rZU1ldGhvZD9cbiAgICByZXR1cm4gdGhpcy5wbS5FeGVjdXRlTWV0aG9kKCdJbnZva2VNZXRob2QnLCAnUGlja1JlY29yZCcpO1xuICB9XG5cbiAgZGVsZXRlUmVjb3JkcyhjYikge1xuICAgIC8vIG1ldGhvZCBpcyBub3QgYWxsb3dlZCB0byBkZWxldGUgdGhlIHByaW1hcnkgZm9yIHZpc2liaWxpdHkgTVZHXG4gICAgLy8gIGluIHRoaXMgY2FzZSBpdCByZXR1cm5zIFwiTWV0aG9kIERlbGV0ZVJlY29yZHMgaXMgbm90IGFsbG93ZWQgaGVyZVwiIFNCTC1VSUYtMDAzNDhcbiAgICAvLyBUT0RPOiBjaGVjayBjYW5JbnZva2VNZXRob2Q/XG4gICAgY29uc3QgcmV0ID0gdGhpcy5wbS5FeGVjdXRlTWV0aG9kKCdJbnZva2VNZXRob2QnLCAnRGVsZXRlUmVjb3JkcycpO1xuICAgIGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNiKCk7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICBkZWxldGVBbGxSZWNvcmRzKGNiKSB7XG4gICAgLy8gbWV0aG9kIGlzIG5vdCBkZWxldGluZyB0aGUgcHJpbWFyeSBmb3IgdmlzaWJpbGl0eSBNVkcoISkgYW5kIHN0aWxsIHJldHVybnMgdHJ1ZVxuICAgIC8vIFRPRE86IGNoZWNrIGNhbkludm9rZU1ldGhvZD9cbiAgICBjb25zdCByZXQgPSB0aGlzLnBtLkV4ZWN1dGVNZXRob2QoJ0ludm9rZU1ldGhvZCcsICdEZWxldGVBbGxSZWNvcmRzJyk7XG4gICAgaWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2IoKTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIGFkZFJlY29yZHMoY2IpIHtcbiAgICAvLyBUT0RPOiBjaGVjayBjYW5JbnZva2VNZXRob2Q/XG4gICAgY29uc3QgcmV0ID0gdGhpcy5wbS5FeGVjdXRlTWV0aG9kKCdJbnZva2VNZXRob2QnLCAnQWRkUmVjb3JkcycpO1xuICAgIGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNiKCk7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICBhZGRBbGxSZWNvcmRzKGNiKSB7XG4gICAgLy8gVE9ETzogY2hlY2sgY2FuSW52b2tlTWV0aG9kP1xuICAgIGNvbnN0IHJldCA9IHRoaXMucG0uRXhlY3V0ZU1ldGhvZCgnSW52b2tlTWV0aG9kJywgJ0FkZEFsbFJlY29yZHMnKTtcbiAgICBpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjYigpO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgX2ZpcnN0UmVjb3JkKCkgeyAvLyB0ZW1wIG1ldGhvZCwgYXNzdW1lcyB0aGF0IG5vIHNjcm9sbGluZyBoYXBwZW5lZFxuICAgIGlmICh0aGlzLmlzTGlzdEFwcGxldCkge1xuICAgICAgaWYgKHRoaXMuZ2V0U2VsZWN0aW9uKCkgIT09IDApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb25PblJvdygwKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiIsImltcG9ydCBOMTlwb3B1cEFwcGxldCBmcm9tICcuL24xOXBvcHVwQXBwbGV0JztcblxuY29uc3Qgc2luZ2xldG9uID0gU3ltYm9sKCdzaW5nbGV0b24nKTtcbmNvbnN0IHNpbmdsZXRvbkVuZm9yY2VyID0gU3ltYm9sKCdzaW5nbGV0b25FbmZvcmNlcicpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOMTlwb3B1cENvbnRyb2xsZXIge1xuICBzdGF0aWMgZ2V0IGluc3RhbmNlKCkge1xuICAgIGlmICghdGhpc1tzaW5nbGV0b25dKSB7XG4gICAgICB0aGlzW3NpbmdsZXRvbl0gPSBuZXcgTjE5cG9wdXBDb250cm9sbGVyKHNpbmdsZXRvbkVuZm9yY2VyKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXNbc2luZ2xldG9uXTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGVuZm9yY2VyKSB7XG4gICAgaWYgKGVuZm9yY2VyICE9PSBzaW5nbGV0b25FbmZvcmNlcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnN0YW50aWF0aW9uIGZhaWxlZDogdXNlIFNpbmdsZXRvbi5nZXRJbnN0YW5jZSgpIGluc3RlYWQgb2YgbmV3LicpO1xuICAgIH1cblxuICAgIHRoaXMuY29uc3RzID0gU2llYmVsSlMuRGVwZW5kZW5jeSgnU2llYmVsQXBwLkNvbnN0YW50cycpO1xuICAgIHRoaXMuaXNQb3B1cEhpZGRlbiA9IGZhbHNlO1xuICAgIHRoaXMucmVzb2x2ZVByb21pc2UgPSBudWxsO1xuICAgIHRoaXMucG9wdXBBcHBsZXROMTkgPSBudWxsO1xuICAgIHRoaXMuYXNzb2NBcHBsZXROMTkgPSBudWxsO1xuXG4gICAgY29uc29sZS5sb2coYCR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfSBzdGFydGVkLi4uYCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuXG4gICAgdGhpcy5OMTlyZXNpemVBdmFpbGFibGUgPSBTaWViZWxBcHAuTXZnQmVhdXRpZmllci5yZXNpemVBdmFpbGFibGU7XG4gICAgU2llYmVsQXBwLk12Z0JlYXV0aWZpZXIucmVzaXplQXZhaWxhYmxlID0gKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhpcy5OMTlyZXNpemVBdmFpbGFibGUuY2FsbChTaWViZWxBcHAuTXZnQmVhdXRpZmllcik7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGByZXNpemVBdmFpbGFibGUgRXJyb3I6ICR7ZS5uYW1lfSAke2UubWVzc2FnZX1gKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIGl0IHdpbGwgYmUgYSBzaW5nbGV0b24sIHNvIHRoZXJlIGlzIG5vIGNsZWFudXBcbiAgICB0aGlzLk4xOXByb2Nlc3NOZXdQb3B1cCA9IFNpZWJlbEFwcC5TX0FwcC5Qcm9jZXNzTmV3UG9wdXA7XG4gICAgU2llYmVsQXBwLlNfQXBwLlByb2Nlc3NOZXdQb3B1cCA9IChwcykgPT4ge1xuICAgICAgbGV0IHJldDtcbiAgICAgIGlmICh0aGlzLmlzUG9wdXBIaWRkZW4pIHtcbiAgICAgICAgcmV0ID0gdGhpcy5wcm9jZXNzTmV3UG9wdXAocHMpO1xuICAgICAgICB0aGlzLmlzUG9wdXBIaWRkZW4gPSBmYWxzZTsgLy8gaW4gb3JkZXIgdG8gZG8gbm90IGFmZmVjdCB0aGUgbmV4dCBjYWxsXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXQgPSB0aGlzLk4xOXByb2Nlc3NOZXdQb3B1cC5jYWxsKFNpZWJlbEFwcC5TX0FwcCwgcHMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJldDtcbiAgICB9O1xuXG4gICAgLy8gd2UgY291bGQgdXNlIHBtLkF0dGFjaFBvc3RQcm94eUV4ZWN1dGVCaW5kaW5nIGZvciAnRWRpdEZpZWxkJywgYnV0IGF0IHRoaXMgcG9pbnQgR2V0UmVuZGVyZXIgcmV0dXJucyBudWxsXG4gICAgLy8gYnV0IHBtIGV4aXN0c1xuICAgIC8vIG9wZW4gdW50aWwgd2UgZ2V0IHJpZCBvZiBHZXRSZW5kZXJlciAoT3JhY2xlIHJldmlldylcbiAgICAvLyBvdGhlciBvcHRpb24gLSBPbkxvYWRQb3B1cENvbnRlbnQ/XG4gICAgdGhpcy5OMTl2aWV3TG9hZGVkID0gU2llYmVsQXBwLmNvbnRlbnRVcGRhdGVyLnZpZXdMb2FkZWQ7XG4gICAgU2llYmVsQXBwLmNvbnRlbnRVcGRhdGVyLnZpZXdMb2FkZWQgPSAoLi4uYXJncykgPT4ge1xuICAgICAgY29uc3QgcmV0ID0gdGhpcy5OMTl2aWV3TG9hZGVkLmNhbGwoU2llYmVsQXBwLmNvbnRlbnRVcGRhdGVyLCAuLi5hcmdzKTtcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5yZXNvbHZlUHJvbWlzZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAvLyBUT0RPOiBtYXliZSB1c2UgaGVyZSB0aGUgcHJvcGVydGllcyBzZXQgb24gcmVzb2xpdm5nXG4gICAgICAgIGNvbnN0IHsgYXBwbGV0TmFtZSB9ID0gTjE5cG9wdXBDb250cm9sbGVyLklzUG9wdXBPcGVuKCk7XG4gICAgICAgIGlmICghYXBwbGV0TmFtZSkge1xuICAgICAgICAgIC8vIGNvbnNvbGUud2FybignT3BlbiBBcHBsZXQgTmFtZSBpcyBub3QgZm91bmQgaW4gdmlld0xvYWRlZCByZXNvbHZpbmcgUHJvbWlzZScpO1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignT3BlbiBBcHBsZXQgTmFtZSBpcyBub3QgZm91bmQgaW4gdmlld0xvYWRlZCByZXNvbHZpbmcgUHJvbWlzZScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGFwcGxldCA9IE4xOXBvcHVwQ29udHJvbGxlci5HZXRQb3B1cEFwcGxldChhcHBsZXROYW1lKTtcbiAgICAgICAgICBjb25zdCBwbSA9IGFwcGxldC5HZXRQTW9kZWwoKTtcbiAgICAgICAgICB0aGlzLnBvcHVwQXBwbGV0TjE5ID0gbmV3IE4xOXBvcHVwQXBwbGV0KHsgcG0gfSk7XG4gICAgICAgICAgY29uc3Qgb2JqID0geyBhcHBsZXROYW1lLCBwb3B1cEFwcGxldE4xOTogdGhpcy5wb3B1cEFwcGxldE4xOSB9O1xuICAgICAgICAgIC8vIGNoZWNrIGlmIHdlIGhhdmUgYXNzb2MgLSB3ZSBhc3N1bWUgaXQgaXMgYWx3YXlzIGFzc29jIGFwcGxldD9cbiAgICAgICAgICBjb25zdCBhc3NvY0FwcGxldCA9IGFwcGxldC5HZXRQb3B1cEFwcGxldCgpO1xuICAgICAgICAgIGlmIChhc3NvY0FwcGxldCkge1xuICAgICAgICAgICAgdGhpcy5hc3NvY0FwcGxldE4xOSA9IG5ldyBOMTlwb3B1cEFwcGxldCh7IHBtOiBhc3NvY0FwcGxldC5HZXRQTW9kZWwoKSB9KTtcbiAgICAgICAgICAgIG9iai5hc3NvY0FwcGxldE4xOSA9IHRoaXMuYXNzb2NBcHBsZXROMTk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMucmVzb2x2ZVByb21pc2Uob2JqKTtcbiAgICAgICAgICB0aGlzLnJlc29sdmVQcm9taXNlID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJldDtcbiAgICB9O1xuICB9XG5cbiAgY2FuT3BlblBvcHVwKCkge1xuICAgIHJldHVybiB0eXBlb2YgdGhpcy5yZXNvbHZlUHJvbWlzZSAhPT0gJ2Z1bmN0aW9uJztcbiAgfVxuXG4gIHByb2Nlc3NOZXdQb3B1cChwcykge1xuICAgIGNvbnN0IHBvcHVwUE0gPSBTaWViZWxBcHAuU19BcHAuR2V0UG9wdXBQTSgpO1xuXG4gICAgaWYgKCFwb3B1cFBNLkdldFJlbmRlcmVyKCkpIHtcbiAgICAgIHBvcHVwUE0uU2V0dXAoKTsgLy8gdG8gY3JlYXRlIFBSXG4gICAgfVxuXG4gICAgY29uc3QgYWN0aXZlVmlldyA9IFNpZWJlbEFwcC5TX0FwcC5HZXRBY3RpdmVWaWV3KCk7XG4gICAgY29uc3QgYWN0aXZlQXBwbGV0ID0gYWN0aXZlVmlldy5HZXRBY3RpdmVBcHBsZXQoKTtcbiAgICBpZiAoYWN0aXZlQXBwbGV0KSB7XG4gICAgICBhY3RpdmVWaWV3LlNldEFjdGl2ZUFwcGxldEJlZm9yZVBvcHVwKGFjdGl2ZUFwcGxldCk7XG4gICAgfVxuXG4gICAgLy8gdGhpcyBwcm9wZXJ0eSBpcyBhZGRlZCB1c2luZyBBdHRhY2hQTUJpbmRpbmcgaW50byB0aGUgSW5pdCBQUiAoY2FsbGVkIGJ5IFBNIFNldHVwKVxuICAgIC8vIGl0IGlzIHRoZSByZWFzb24gd2h5IHdlIGhhdmUgcmVpbml0IHByb2NlZHVyZSB3aGVyZSBTZXR1cCBQTSBpcyBjYWxsZWRcbiAgICBwb3B1cFBNLkFkZFByb3BlcnR5KCdzdGF0ZScsIHRoaXMuY29uc3RzLmdldCgnUE9QVVBfU1RBVEVfVklTSUJMRScpKTtcblxuICAgIGxldCB1cmwgPSBwcy5HZXRQcm9wZXJ0eSgnVVJMJyk7XG4gICAgdXJsID0gU2llYmVsQXBwLlNfQXBwLkdldFBhZ2VVUkwoKSArIHVybC5zcGxpdCgnc3RhcnQuc3dlJylbMV07XG4gICAgcG9wdXBQTS5TZXRQcm9wZXJ0eSgndXJsJywgdXJsKTtcblxuICAgIHJldHVybiAncmVmcmVzaHBvcHVwJztcbiAgfVxuXG4gIGNsb3NlUG9wdXBBcHBsZXQoYXBwbGV0KSB7XG4gICAgLy8gVE9ETzogY2hlY2sgY2FuSW52b2tlTWV0aG9kP1xuICAgIGxldCByZXQ7XG4gICAgaWYgKGFwcGxldCkge1xuICAgICAgY29uc3QgaXNQb3B1cEFwcGxldCA9IHR5cGVvZiBhcHBsZXQuR2V0UG9wdXBBcHBsZXROYW1lID09PSAnZnVuY3Rpb24nO1xuICAgICAgY29uc3QgaXNQaWNrQXBwbGV0ID0gdHlwZW9mIGFwcGxldC5HZXRQaWNrQXBwbGV0TmFtZSA9PT0gJ2Z1bmN0aW9uJztcbiAgICAgIGlmICghaXNQb3B1cEFwcGxldCAmJiAhaXNQaWNrQXBwbGV0KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVGhpcyBhcHBsZXQgaXMgbmVpdGhlciBwaWNrIG5vciBwb3B1cCcpO1xuICAgICAgfVxuICAgICAgcmV0ID0gYXBwbGV0LkdldFBNb2RlbCgpLkV4ZWN1dGVNZXRob2QoJ0ludm9rZU1ldGhvZCcsICdDbG9zZUFwcGxldCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXQgPSB0aGlzLnBvcHVwQXBwbGV0TjE5LmFwcGxldC5HZXRQTW9kZWwoKS5FeGVjdXRlTWV0aG9kKCdJbnZva2VNZXRob2QnLCAnQ2xvc2VBcHBsZXQnKTtcbiAgICB9XG4gICAgLy8gaXQgY291bGQgYmUgYmV0dGVyIGlmIHdlIGRvbid0IGhhdmUgYSBTaWViZWwgQXBwbGV0IG9uIHRoZSB2aWV3XG4gICAgLy8gZG8gcmVpbml0IGhlcmUgb24gY2xvc2luZz9cbiAgICB0aGlzLnBvcHVwQXBwbGV0TjE5ID0gbnVsbDtcbiAgICB0aGlzLmFzc29jQXBwbGV0TjE5ID0gbnVsbDtcbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgc3RhdGljIElzUG9wdXBPcGVuKCkgeyAvLyBzYWZlciB0byBrZWVwIHRoaXMgbWV0aG9kLCBldmVuIHdoZW4gd2Ugc2V0IHNvbWUgcHJvcGVydGllcyBvbiByZXNvbHZlP1xuICAgIGNvbnN0IGN1cnJQb3B1cHMgPSBTaWViZWxBcHAuU19BcHAuR2V0UG9wdXBQTSgpLkdldCgnY3VyclBvcHVwcycpO1xuICAgIGlmICgwID09PSBjdXJyUG9wdXBzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHsgaXNPcGVuOiBmYWxzZSB9O1xuICAgIH1cbiAgICBpZiAoMSA9PT0gY3VyclBvcHVwcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB7IGlzT3BlbjogdHJ1ZSwgYXBwbGV0TmFtZTogY3VyclBvcHVwc1swXS5HZXROYW1lKCksIGNvbnRyb2xOYW1lOiBjdXJyUG9wdXBzWzBdLkdldFBvcHVwQ29udHJvbCgpIH07XG4gICAgfVxuICAgIGlmICgyID09PSBjdXJyUG9wdXBzLmxlbmd0aCkge1xuICAgICAgLy8gaXMgdGhpcyBhbHdheXMgYSBzaHV0dGxlIHdoZW4gd2UgaGF2ZSBhIHNlZG9uZCBhcHBsZXRcbiAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBjdXJyUG9wdXBzLmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY3VyclBvcHVwc1sxXS5HZXRQb3B1cEFwcGxldE5hbWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICByZXR1cm4geyBpc09wZW46IHRydWUsIGFwcGxldE5hbWU6IGN1cnJQb3B1cHNbaV0uR2V0TmFtZSgpLCBjb250cm9sTmFtZTogY3VyclBvcHVwc1tpXS5HZXRQb3B1cENvbnRyb2woKSB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ012ZyBhcHBsZXQgaXMgbm90IGZvdW5kLi4uJyk7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcignc2hvdWxkIG5vdCBiZSBoZXJlLi4uJyk7XG4gIH1cblxuICBzdGF0aWMgR2V0UG9wdXBBcHBsZXQoYXBwbGV0TmFtZSkge1xuICAgIGNvbnN0IGFwcGxldCA9IFNpZWJlbEFwcC5TX0FwcC5HZXRBY3RpdmVWaWV3KCkuR2V0QXBwbGV0KGFwcGxldE5hbWUpO1xuICAgIGlmICghYXBwbGV0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSByZWZlcmVuY2UgdG8gJHthcHBsZXROYW1lfSBpcyBub3QgaW5zdGFudGlhdGVkLmApO1xuICAgIH1cbiAgICByZXR1cm4gYXBwbGV0O1xuICB9XG5cbiAgY2hlY2tPcGVuZWRQb3B1cChjbG9zZUlmT3Blbikge1xuICAgIGNvbnN0IHsgaXNPcGVuLCBhcHBsZXROYW1lIH0gPSBOMTlwb3B1cENvbnRyb2xsZXIuSXNQb3B1cE9wZW4oKTtcbiAgICBpZiAoaXNPcGVuICYmIGNsb3NlSWZPcGVuKSB7XG4gICAgICAvLyB0aGlzIGNvZGUgd2lsbCBjbG9zZSB0aGUgYXBwbGV0IGV2ZW4gaWYgdGhpcyBhcHBsZXQgd2FzIG9yaWdpbmF0ZWQgYnkgYW5vdGhlciBhcHBsZXRcbiAgICAgIGNvbnNvbGUubG9nKGBjbG9zaW5nICR7YXBwbGV0TmFtZX0gaW4gc2hvd1BvcHVwQXBwbGV0Li4uYCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgICAgLy8gbWF5YmUgZG8gbm90IGNsb3NlIGlmIHRoZSBhcHBsZXQgdG8gYmUgb3BlbmVkIGlmIHRoZSBzYW1lIGFzIGFscmVhZHkgb3BlbmVkP1xuICAgICAgcmV0dXJuIHRoaXMuY2xvc2VQb3B1cEFwcGxldChOMTlwb3B1cENvbnRyb2xsZXIuR2V0UG9wdXBBcHBsZXQoYXBwbGV0TmFtZSkpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgaXNPcGVuLFxuICAgICAgYXBwbGV0TmFtZSxcbiAgICB9O1xuICB9XG5cbiAgX29wZW5Bc3NvY0FwcGxldChuZXdSZWNvcmRGdW5jLCBjYikge1xuICAgIHRoaXMuY2hlY2tPcGVuZWRQb3B1cCh0cnVlKTtcbiAgICB0aGlzLmlzUG9wdXBIaWRkZW4gPSB0cnVlO1xuXG4gICAgbmV3UmVjb3JkRnVuYygpOyAvLyBtYWtlIGFzeW5jIG9mIGludm9rZU1ldGhvZD9cblxuICAgIGxldCByZXQgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4geyB0aGlzLnJlc29sdmVQcm9taXNlID0gcmVzb2x2ZTsgfSk7XG4gICAgaWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0ID0gcmV0LnRoZW4oY2IpO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgc2hvd1BvcHVwQXBwbGV0KGhpZGUsIGNiLCBuMTkpIHtcbiAgICAvLyBUT0RPOiBtYXliZSB1c2UgdGhlIHByb3BlcnRpZXMgc2V0IG9uIHByb21pc2UgcmVzb2x2aW5nP1xuICAgIHRoaXMuY2hlY2tPcGVuZWRQb3B1cCh0cnVlKTtcblxuICAgIHRoaXMuaXNQb3B1cEhpZGRlbiA9ICEhaGlkZTtcblxuICAgIG4xOS5wbS5FeGVjdXRlTWV0aG9kKCdJbnZva2VNZXRob2QnLCAnRWRpdFBvcHVwJyk7IC8vIGNhbiBjYWxsIEVkaXRGaWVsZD9cblxuICAgIGlmIChoaWRlKSB7IC8vIHdlIHdpbGwgcG9wdWxhdGUgdGhlIGluc3RhbmNlcyBvbmx5IHdoZW4gYXBwbGV0IHNob3VsZCBiZSBoaWRkZW5cbiAgICAgIGxldCByZXQgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4geyB0aGlzLnJlc29sdmVQcm9taXNlID0gcmVzb2x2ZTsgfSk7XG4gICAgICByZXQgPSByZXQudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgIG4xOS5ub3RpZmljYXRpb25zLnNraXBOZXdGaWVsZERhdGFOb3RpZmljYXRpb25zID0gZmFsc2U7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH0pO1xuICAgICAgaWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXQgPSByZXQudGhlbihjYik7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmV0O1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9