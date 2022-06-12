'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// External toolbox by Charles Matthews 2022

/**
 * CM tools
 * @class
 */
var CM = function CM() {};

CM.prototype = {};
CM.prototype.constructor = CM;

function notify() {
  if (settings.verbose) {
    var message = '';

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = args[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var item = _step.value;

        message += item + ' ';
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    console.log(message);
  }
}

function apply(source, target) {
  Object.entries(source).forEach(function (x) {
    target.setAttribute.apply(target, _toConsumableArray(x));
  });
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = Object.keys(source)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var item = _step2.value;

      target.setAttribute(item, source[item]);
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }
}

function getTransformType(element) {
  return element.getAttribute('transform').split("(")[0];
}

function includesScale(element) {
  var testSplit = element.getAttribute('transform').includes('scale');
  return testSplit;
}

function getScale(element) {
  var scaleValue = element.getAttribute('transform').split('scale').slice(-1)[0].replace(/[\(\)']+/g, '');
  scaleValue = parseFloat(scaleValue);
  return scaleValue;
}

function getTransformArray(element) {
  if (getTransformType(element) == 'translate') {
    if (includesScale(element)) {
      return element.getAttribute('transform').split("(")[1].split(")")[0].split(" ");
    } else {
      return element.getAttribute('transform').split("(")[1].split(")")[0].split(" ");
    }
  } else if (getTransformType(element) == 'matrix') {
    return element.getAttribute('transform').split("(")[1].split(")")[0].split(" ").slice(-2);
  }
}

function createE(type, attributes) {
  var addr = document.createElementNS(xmlns, type);
  Object.entries(attributes).forEach(function (x) {
    return addr.setAttribute.apply(addr, _toConsumableArray(x));
  });
  return addr;
}
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * 
 * @param {HTMLElement | string} element object or id of object to find in DOM
 * @param {string} attribute 
 * @param {array} events 
 * @param {number} duration 
 * @param {object} parameters 
 * @returns HTMLElement
 */

CM.prototype.addAnimation = function (element, attribute, events, duration) {
  var parameters = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

  var domElement = (typeof element === 'undefined' ? 'undefined' : _typeof(element)) == 'object' ? element : document.getElementById(element);
  // console.log('id' in parameters)
  if (!('id' in parameters)) parameters['id'] = domElement.id + '_' + attribute;
  var animation = cm.createAnimation(attribute, events, duration, parameters);
  domElement.appendChild(animation);
  return animation;
};
"use strict";

/**
 * Constrain within range
 * @param {number} value 
 * @param {number} min 
 * @param {number} max 
 * @returns {number} constrained value
 */

CM.prototype.constrain = function (value, min, max) {
  var integer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  value = integer ? Math.floor(value) : value;
  return value > max ? max : value < min ? min : value;
};
"use strict";

/**
 * 
 * @param {string} type 
 * @param {object} obj 
 * @returns {object}
 */

CM.prototype.create = function (type, obj) {
  var element = document.createElement(type);
  this.set(element, obj);
  return element;
};
'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/**
 * 
 * @param {string} attribute 
 * @param {array<array<number,number>>} events 
 * @param {number} duration 
 * @param {object} parameters 
 * @returns {HTMLElement}
 */

CM.prototype.createAnimation = function (attribute, events, duration) {
    var parameters = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    var values = '',
        times = '';
    events.forEach(function (_ref, i) {
        var _ref2 = _slicedToArray(_ref, 2),
            time = _ref2[0],
            value = _ref2[1];

        if (parseFloat(time) % 1 == 0) time += '.00';
        var divider = i < Object.keys(events).length - 1 ? '; ' : '';
        times += '' + time + divider;
        values += '' + value + divider;
    });

    var output = cm.createNS(attribute = 'translate' ? 'animateTransform' : 'animate', {
        custom: {
            attributeName: attribute,
            begin: 'indefinite',
            repeatCount: '1',
            dur: duration + 's',
            fill: 'freeze',
            keyTimes: times,
            values: values
        }
    });
    output = Object.assign(output, parameters);
    return output;
};
"use strict";

/**
 * 
 * @param {string} type 
 * @param {object} obj 
 * @returns {HTMLElement} 
 */

CM.prototype.createNS = function (type, obj) {
  var element = document.createElementNS(xmlns, type);
  this.set(element, obj);
  return element;
};
"use strict";

/**
 * **F**requency **To** **S**tring
 * @param {number} freq - Frequency in HZ
 * @param {number} transpose - offset in semitones
 * @returns {string} Pitch as scientific notation
 */

CM.prototype.ftos = function (frequency) {
  var transpose = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  sym = Tone.Frequency(frequency).transpose(transpose);
  return Tone.Frequency(frequency).toNote();
};
"use strict";

/**
 * interpolate between two values
 * @param {number} start start point
 * @param {number} end end point
 * @param {number} position range 0-1
 * @returns {number}
 */

CM.prototype.interpolate = function (start, end, position) {
  var integer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  // testing
  var output = (1 - position) * start + position * end;
  output = integer ? Math.floor(output) : output;
  return output;
};
"use strict";

/**
 * Scaling
 * Convert the incoming value from original range (x1 to y1) to target range (x2-y2)
 * @param {number} value 
 * @param {number} x1           input minimum
 * @param {number} y1           input maximum
 * @param {number} x2           output minimum
 * @param {number} y2           output maximum
 * @param {boolean} constrain   constrain to range?
 * @param {boolean} integer     convert to integer?
 * @returns {number}            mapped value
 */

CM.prototype.map = function (value, x1, y1, x2, y2) {
  var constrain = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
  var integer = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;

  value = (value - x1) * (y2 - x2) / (y1 - x1) + x2;
  value = integer ? Math.floor(value) : value;
  return constrain ? this.constrain(value, x2, y2) : value;
};
"use strict";

/** 
   * mtof
   * 
   * @param {*} num 
   * @param {*} transpose 
   * @returns {number} frequency in Hz
   */

CM.prototype.mtof = function (num) {
   var transpose = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

   sym = Tone.Frequency(num, "midi").transpose(transpose);
   return Tone.Frequency(num, "midi").toFrequency();
};
"use strict";

/**
 * **M**IDI **To** **S**ymbol
 * @method CM#mtos
 * @param {number} num        - MIDI pitch
 * @param {number} transpose  - offset in semitones
 * @returns {string} Pitch as scientific notation
 */

CM.prototype.mtos = function (num) {
  var transpose = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  num = Tone.Frequency(num, "midi").transpose(transpose);
  return Tone.Frequency(num, "midi").toNote();
};
'use strict';

/**
 * 
 * @param menu 
 * @param items 
 * @param selected 
 * @param type 
 */

CM.prototype.populate = function (menu, items) {
    var _this = this;

    var selected = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var type = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'option';

    items.forEach(function (x) {
        var item = menu.appendChild(_this.create(type, { value: x, innerHTML: x }));
        if (selected != false) menu.value = selected;
    });
};
"use strict";

/**
 * Rotate an array
 * @param {array} array 
 * @param {number} amount 
 * @returns {array}
 */

CM.prototype.rot = function (array, amount) {
  var output = [array.slice(amount), array.slice(0, amount)];
  return output[0].concat(output[1]);
};
'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Set parameters in an HTML element from an object
 * @param {HTMLElement} element 
 * @param {object} obj 
 */

CM.prototype.set = function (element, obj) {
    Object.entries(obj).forEach(function (x) {
        var _x = _slicedToArray(x, 2),
            index = _x[0],
            value = _x[1];

        switch (index) {
            case 'custom':
                Object.entries(value).forEach(function (y) {
                    return element.setAttribute.apply(element, _toConsumableArray(y));
                });
                break;
            case 'style':
                Object.entries(value).forEach(function (y) {
                    return element.style[y[0]] = y[1];
                });
                break;
            default:
                element[index] = value;
        }
    });
};
'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * 
 * @param {HTMLElement} element 
 * @param {object} obj 
 */
CM.prototype.setNS = function (element, obj) {
  Object.entries(obj).forEach(function (x) {
    var _x = _slicedToArray(x, 2),
        index = _x[0],
        value = _x[1];

    switch (index) {
      case 'custom':
        Object.entries(value).forEach(function (y) {
          element.setAttributeNS.apply(element, [xmlns].concat(_toConsumableArray(y)));
          // console.log(element)
        });
        break;
      case 'style':
        Object.entries(value).forEach(function (y) {
          return element.style[y[0]] = y[1];
        });
        break;
      default:
        element[index] = value;
    }
  });
};
"use strict";

/**
 * **S**tring **To** **F**requency
 * @param {string} sym - Pitch in scientific notation
 * @param {number} transpose - offset in semitones
 * @returns {number} Pitch as MIDI note 
 */

CM.prototype.stof = function (symbol) {
  var transpose = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  symbol = Tone.Frequency(symbol).transpose(transpose);
  return Tone.Frequency(symbol).toFrequency();
};
"use strict";

/**
 * Convert gain to dB
 * @param {number} num - Value range 0-1
 * @returns {string} - Value in decibels (0 = '-Infinity')
 */

CM.prototype.v = function (gain) {
  return Tone.gainToDb(gain);
};
"use strict";

/**
 * Check if x and y are within the bounds
 * @param {number} x 
 * @param {number} y 
 * @param {object<string,number>} values 
 * @returns 
 */

CM.prototype.within = function () {
  var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var values = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : { left: 0, right: 0, top: 0, bottom: 0 };

  var output = x >= values.left && x <= values.right && y >= values.top && y <= values.bottom;
  return output;
};
"use strict";

// testing...
var cm = new CM();

console.log(cm.map(1.1, 0, 1, 0, 127, false));
console.log(cm.interpolate(100, 200, 0.5));
