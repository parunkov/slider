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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/data.ts":
/*!*********************!*\
  !*** ./src/data.ts ***!
  \*********************/
/*! exports provided: setDataLimit, defaultData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDataLimit", function() { return setDataLimit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultData", function() { return defaultData; });
/* harmony import */ var _functions_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions.ts */ "./src/functions.ts");

const defaultData = {
    minInputId: 'ts-slider__min-input',
    maxInputId: 'ts-slider__max-input',
    isArray: false,
    array: [],
    step: 1,
    minValue: 0,
    maxValue: 100,
    minToggleValue: 25,
    maxToggleValue: 75,
    isRange: true,
    isVertical: false,
    isTab: true,
    isScale: true,
    scaleQuantity: 4
};
const setDataLimit = (data) => {
    data.minToggleValue = Object(_functions_ts__WEBPACK_IMPORTED_MODULE_0__["setLimit"])(data.minToggleValue, data.minValue, data.maxValue);
    data.maxToggleValue = Object(_functions_ts__WEBPACK_IMPORTED_MODULE_0__["setLimit"])(data.maxToggleValue, data.minValue, data.maxValue);
};



/***/ }),

/***/ "./src/functions.ts":
/*!**************************!*\
  !*** ./src/functions.ts ***!
  \**************************/
/*! exports provided: setMouseHandler, round, setLimit, toPrecent, toValue, setRangeStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMouseHandler", function() { return setMouseHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "round", function() { return round; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLimit", function() { return setLimit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toPrecent", function() { return toPrecent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toValue", function() { return toValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setRangeStyle", function() { return setRangeStyle; });
const setMouseHandler = (elem, onMove, onDovn, onUp) => {
    const onMouseDown = (evt) => {
        if (onDovn) {
            onDovn(evt);
        }
        const onMouseMove = (moveEvt) => {
            onMove(moveEvt);
        };
        const onMouseUp = (upEvt) => {
            if (onUp) {
                onUp(upEvt);
            }
            document.removeEventListener('mouseup', onMouseUp);
            document.removeEventListener('mousemove', onMouseMove);
        };
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    };
    elem.addEventListener('mousedown', onMouseDown);
};
const round = (value, step) => {
    const precision = x => +((x.toString().includes('.')) ? (x.toString().split('.').pop().length) : (0));
    let rounded = (Math.round(value / step) * step).toFixed(precision(step));
    return rounded;
};
const setLimit = (value, min, max) => {
    if (value > max) {
        value = max;
    }
    else if (value < min) {
        value = min;
    }
    return value;
};
const toPrecent = (value, min, max) => (value - min) / (max - min);
const toValue = (value, min, max) => (min + (max - min) * value);
const setRangeStyle = (range, min, max, isVertical) => {
    if (isVertical) {
        range.style.top = `${min}px`;
        range.style.height = `${(max - min)}px`;
    }
    else {
        range.style.left = `${min}px`;
        range.style.width = `${(max - min)}px`;
    }
};



/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _presenter_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./presenter.ts */ "./src/presenter.ts");

(function ($) {
    const methods = {
        init: function (options) {
            const id = '#' + this.prop('id');
            const wrap = document.querySelector(id);
            const presenter = new _presenter_ts__WEBPACK_IMPORTED_MODULE_0__["Presenter"](options, wrap);
            window[id] = presenter;
        },
        change: function (options) {
            const id = '#' + this.prop('id');
            const presenter = window[id];
            presenter.options = options;
            presenter.changeData();
        }
    };
    $.fn.tsSlider = function (options, method) {
        const id = '#' + this.prop('id');
        if (method === 'change' && window[id]) {
            const change = methods.change.apply(this, arguments);
        }
        else if (typeof method === 'object' || !method || !window[id]) {
            const init = methods.init.apply(this, arguments);
        }
        else {
            $.error('Метод с именем ' + method + ' не существует для jQuery.tsSlider');
        }
        return this;
    };
})(jQuery);


/***/ }),

/***/ "./src/init-view-markup.ts":
/*!*********************************!*\
  !*** ./src/init-view-markup.ts ***!
  \*********************************/
/*! exports provided: initViewMarkup, markup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initViewMarkup", function() { return initViewMarkup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "markup", function() { return markup; });
const initViewMarkup = (controlWrap, vertical) => {
    const contolMarkup = `<div class="ts-slider__container">
          <div class="ts-slider__bar">
            <div class="ts-slider__toggle ts-slider__toggle--min">
              <div class="ts-slider__toggle-value ts-slider__toggle-value--min"></div>
            </div>
            <div class="ts-slider__toggle ts-slider__toggle--max">
              <div class="ts-slider__toggle-value ts-slider__toggle-value--max"></div>
            </div>
            <div class="ts-slider__range"></div>
          </div>
        </div>`;
    controlWrap.innerHTML = contolMarkup;
    const div = controlWrap.querySelectorAll('div');
    if (vertical) {
        for (let i = 0; i < div.length; i++) {
            const firstClass = div[i].classList[0];
            const verticalClass = firstClass + '--vertical';
            div[i].classList.add(verticalClass);
        }
    }
};
const markup = (slider) => {
    let markup = {
        min: slider.querySelector('.ts-slider__toggle--min'),
        max: slider.querySelector('.ts-slider__toggle--max'),
        range: slider.querySelector('.ts-slider__range'),
        bar: slider.querySelector('.ts-slider__bar'),
        minTab: slider.querySelector('.ts-slider__toggle-value--min'),
        maxTab: slider.querySelector('.ts-slider__toggle-value--max')
    };
    return markup;
};



/***/ }),

/***/ "./src/model.ts":
/*!**********************!*\
  !*** ./src/model.ts ***!
  \**********************/
/*! exports provided: Model */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Model", function() { return Model; });
/* harmony import */ var _functions_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions.ts */ "./src/functions.ts");

class Model {
    constructor(data) {
        this.data = data;
        this.tabText = {
            min: '',
            max: ''
        };
        this.value = {
            min: 0,
            max: 0
        };
        this.precent = {
            min: 0,
            max: 0
        };
        this.scale = [];
        this.observer = document.createElement('Event');
        this.init();
        this.setScale();
        this.addListener();
        this.changeInput();
    }
    setInput() {
        this.minInput.value = this.tabText.min;
        this.maxInput.value = this.tabText.max;
        if (!this.data.isRange) {
            if (this.data.isArray) {
                this.minInput.value = this.data.array[0];
            }
            else {
                this.minInput.value = this.data.minValue;
            }
        }
    }
    setArrayValue() {
        let min = Math.round(this.precent.min * (this.data.array.length - 1));
        let max = Math.round(this.precent.max * (this.data.array.length - 1));
        this.tabText.min = this.data.array[min];
        this.tabText.max = this.data.array[max];
        this.setInput();
    }
    init() {
        if (this.data.isArray) {
            this.observer.addEventListener('setPrecent', () => {
                this.setArrayValue();
            });
        }
        else {
            this.tabText.min = Object(_functions_ts__WEBPACK_IMPORTED_MODULE_0__["round"])(this.data.minToggleValue, this.data.step);
            this.tabText.max = Object(_functions_ts__WEBPACK_IMPORTED_MODULE_0__["round"])(this.data.maxToggleValue, this.data.step);
        }
        this.minInput = document.querySelector('#' + this.data.minInputId);
        this.maxInput = document.querySelector('#' + this.data.maxInputId);
        this.setInput();
    }
    setScale() {
        if (this.data.isArray) {
            if (this.data.isScale) {
                this.scale = this.data.array;
            }
        }
        else {
            if (this.data.isScale) {
                let quantity = this.data.scaleQuantity;
                if (quantity < 2) {
                    quantity = 2;
                }
                for (let i = 0; i < quantity; i++) {
                    let textValue = Math.round((this.data.minValue + (this.data.maxValue - this.data.minValue) / (quantity - 1) * i) / this.data.step) * this.data.step;
                    let text = Object(_functions_ts__WEBPACK_IMPORTED_MODULE_0__["round"])(textValue, this.data.step);
                    this.scale.push(text);
                }
            }
        }
    }
    addListener() {
        this.observer.addEventListener('changeValue', () => {
            if (this.data.isArray) {
                this.setArrayValue();
            }
            else {
                this.tabText.min = Object(_functions_ts__WEBPACK_IMPORTED_MODULE_0__["round"])(this.value.min, this.data.step);
                this.tabText.max = Object(_functions_ts__WEBPACK_IMPORTED_MODULE_0__["round"])(this.value.max, this.data.step);
            }
            this.setInput();
            this.observer.dispatchEvent(new CustomEvent('changeTabText'));
        });
    }
    changeInput() {
        const onBlur = () => {
            if (this.data.isArray) {
                const inArray = (value, limit) => {
                    if (this.data.array.includes(value)) {
                        return value;
                    }
                    else {
                        return limit;
                    }
                };
                this.minInput.value = inArray(this.minInput.value, this.data.array[0]);
                this.maxInput.value = inArray(this.maxInput.value, this.data.array[this.data.array.length - 1]);
                this.value.min = this.data.array.indexOf(this.minInput.value);
                this.value.max = this.data.array.indexOf(this.maxInput.value);
                if (this.value.min > this.value.max) {
                    this.value.min = this.value.max;
                    this.minInput.value = this.maxInput.value;
                }
                this.tabText.min = this.minInput.value;
                this.tabText.max = this.maxInput.value;
            }
            else {
                this.value.min = +this.minInput.value;
                this.value.max = +this.maxInput.value;
                this.value.min = Object(_functions_ts__WEBPACK_IMPORTED_MODULE_0__["setLimit"])(this.value.min, this.data.minValue, this.value.max);
                this.value.max = Object(_functions_ts__WEBPACK_IMPORTED_MODULE_0__["setLimit"])(this.value.max, this.value.min, this.data.maxValue);
                this.minInput.value = this.value.min.toString();
                this.maxInput.value = this.value.max.toString();
                this.tabText.min = Object(_functions_ts__WEBPACK_IMPORTED_MODULE_0__["round"])(this.minInput.value, this.data.step);
                this.tabText.max = Object(_functions_ts__WEBPACK_IMPORTED_MODULE_0__["round"])(this.maxInput.value, this.data.step);
            }
            this.observer.dispatchEvent(new CustomEvent('changeInput'));
        };
        this.minInput.addEventListener('blur', onBlur);
        this.maxInput.addEventListener('blur', onBlur);
    }
}



/***/ }),

/***/ "./src/presenter.ts":
/*!**************************!*\
  !*** ./src/presenter.ts ***!
  \**************************/
/*! exports provided: Presenter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Presenter", function() { return Presenter; });
/* harmony import */ var _view_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view.ts */ "./src/view.ts");
/* harmony import */ var _model_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model.ts */ "./src/model.ts");
/* harmony import */ var _functions_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions.ts */ "./src/functions.ts");
/* harmony import */ var _data_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data.ts */ "./src/data.ts");




class Presenter {
    constructor(options, wrap) {
        this.wrap = wrap;
        this.options = options;
        this.createData();
        this.init();
        this.onMoveToggle();
        this.onChangeTabText();
        this.onCangeInput();
        window.addEventListener('resize', () => {
            this.init();
        });
    }
    setValue() {
        this.value = {
            min: this.data.minToggleValue,
            max: this.data.maxToggleValue
        };
    }
    createData() {
        function deepClone(obj) {
            const clObj = {};
            for (const i in obj) {
                if (obj[i] instanceof Object) {
                    clObj[i] = deepClone(obj[i]);
                    continue;
                }
                clObj[i] = obj[i];
            }
            return clObj;
        }
        const dataClone = deepClone(_data_ts__WEBPACK_IMPORTED_MODULE_3__["defaultData"]);
        this.data = Object.assign(dataClone, this.options);
        Object(_data_ts__WEBPACK_IMPORTED_MODULE_3__["setDataLimit"])(this.data);
        this.setValue();
    }
    changeData() {
        this.data = Object.assign(this.data, this.options);
        Object(_data_ts__WEBPACK_IMPORTED_MODULE_3__["setDataLimit"])(this.data);
        this.setValue();
        this.init();
        this.onMoveToggle();
        this.onChangeTabText();
        this.onCangeInput();
    }
    setTabText() {
        this.view.tabText.min = this.model.tabText.min;
        this.view.tabText.max = this.model.tabText.max;
    }
    initScale() {
        this.view.scale = this.model.scale;
        this.view.container.dispatchEvent(new CustomEvent('initScale'));
    }
    setToView() {
        this.view.precent.min = Object(_functions_ts__WEBPACK_IMPORTED_MODULE_2__["toPrecent"])(this.value.min, this.data.minValue, this.data.maxValue);
        this.view.precent.max = Object(_functions_ts__WEBPACK_IMPORTED_MODULE_2__["toPrecent"])(this.value.max, this.data.minValue, this.data.maxValue);
    }
    setToModel() {
        this.model.value.min = Object(_functions_ts__WEBPACK_IMPORTED_MODULE_2__["toValue"])(this.view.precent.min, this.data.minValue, this.data.maxValue);
        this.model.value.max = Object(_functions_ts__WEBPACK_IMPORTED_MODULE_2__["toValue"])(this.view.precent.max, this.data.minValue, this.data.maxValue);
    }
    init() {
        const viewData = this.data;
        const modelData = this.data;
        this.view = new _view_ts__WEBPACK_IMPORTED_MODULE_0__["View"](viewData, this.wrap);
        this.model = new _model_ts__WEBPACK_IMPORTED_MODULE_1__["Model"](modelData);
        this.initScale();
        this.setToView();
        this.model.precent = this.view.precent;
        this.model.observer.dispatchEvent(new CustomEvent('setPrecent'));
        this.setTabText();
        this.view.setTab();
        this.view.container.dispatchEvent(new CustomEvent('initValue'));
        this.view.container.addEventListener('changeValue', () => {
            this.model.observer.dispatchEvent(new CustomEvent('changeValue'));
        });
    }
    onMoveToggle() {
        const onChangeView = () => {
            this.setToModel();
            this.model.observer.dispatchEvent(new CustomEvent('changeValue'));
        };
        this.view.container.addEventListener('moveToggle', onChangeView);
    }
    onChangeTabText() {
        this.model.observer.addEventListener('changeTabText', () => {
            this.setTabText();
            this.view.container.dispatchEvent(new CustomEvent('changeTab'));
        });
    }
    onCangeInput() {
        this.model.observer.addEventListener('changeInput', () => {
            this.view.tabText = this.model.tabText;
            if (this.data.isArray) {
                this.view.precent.min = this.model.value.min / (this.data.array.length - 1);
                this.view.precent.max = this.model.value.max / (this.data.array.length - 1);
                console.log(this.view.precent);
            }
            else {
                this.value.min = +this.model.value.min;
                this.value.max = +this.model.value.max;
                this.setToView();
                this.setToModel();
            }
            this.view.container.dispatchEvent(new CustomEvent('changeInput'));
        });
    }
}



/***/ }),

/***/ "./src/scale.ts":
/*!**********************!*\
  !*** ./src/scale.ts ***!
  \**********************/
/*! exports provided: Scale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scale", function() { return Scale; });
class Scale {
    constructor(slider, scale, isVertical) {
        this.slider = slider;
        this.scale = scale;
        this.isVertical = isVertical;
        this.createItem();
    }
    createItem() {
        const bar = this.slider.querySelector('.ts-slider__bar');
        for (let i = 0; i < this.scale.length; i++) {
            const scaleItem = document.createElement('div');
            scaleItem.classList.add('ts-slider__scale-item');
            scaleItem.textContent = this.scale[i];
            if (this.isVertical) {
                scaleItem.classList.add('ts-slider__scale-item--vertical');
                scaleItem.style.top = `${bar.offsetHeight / (this.scale.length - 1) * i}px`;
            }
            else {
                scaleItem.style.left = `${bar.offsetWidth / (this.scale.length - 1) * i}px`;
            }
            bar.append(scaleItem);
        }
    }
}


/***/ }),

/***/ "./src/toggle.ts":
/*!***********************!*\
  !*** ./src/toggle.ts ***!
  \***********************/
/*! exports provided: setToggleStyle, Toggle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setToggleStyle", function() { return setToggleStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Toggle", function() { return Toggle; });
/* harmony import */ var _functions_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions.ts */ "./src/functions.ts");

const setToggleStyle = (toggle, pixel, isVertical) => {
    if (isVertical) {
        toggle.style.top = `${pixel}px`;
    }
    else {
        toggle.style.left = `${pixel}px`;
    }
};
class Toggle {
    constructor(toggle, precent, size, isVertical) {
        this.toggle = toggle;
        this.size = size;
        this.precent = precent;
        this.mousePixel = this.precent * this.size;
        this.pixel = this.mousePixel;
        this.isVertical = isVertical;
        this.isFixed = false;
        this.setStyle();
        this.onMoveToggle();
    }
    setStyle() {
        setToggleStyle(this.toggle, this.pixel, this.isVertical);
    }
    changeToggle() {
        this.mousePixel = this.precent * this.size;
        this.pixel = this.mousePixel;
        this.setStyle();
    }
    onMoveToggle() {
        const onMouseDown = (evt) => {
            let shiftX = evt.pageX - this.toggle.offsetLeft;
            let shiftY = evt.pageY - this.toggle.offsetTop;
            let startPixel = this.mousePixel;
            const moveAt = (pageX, pageY) => {
                if (this.isVertical) {
                    this.mousePixel = pageY - shiftY;
                }
                else {
                    this.mousePixel = pageX - shiftX;
                }
                this.pixel = this.mousePixel;
                this.pixel = Object(_functions_ts__WEBPACK_IMPORTED_MODULE_0__["setLimit"])(this.pixel, this.min * this.size, this.max * this.size);
                if (this.isFixed) {
                    this.pixel = startPixel;
                }
                this.setStyle();
                this.precent = this.pixel / this.size;
            };
            moveAt(evt.pageX, evt.pageY);
            const onMouseMove = (moveEvt) => {
                moveEvt.preventDefault();
                moveAt(moveEvt.pageX, moveEvt.pageY);
            };
            const onMouseUp = (upEvt) => {
                this.mousePixel = this.pixel;
                document.removeEventListener('mouseup', onMouseUp);
                document.removeEventListener('mousemove', onMouseMove);
            };
            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);
        };
        this.toggle.addEventListener('mousedown', onMouseDown);
    }
}



/***/ }),

/***/ "./src/view.ts":
/*!*********************!*\
  !*** ./src/view.ts ***!
  \*********************/
/*! exports provided: View */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View", function() { return View; });
/* harmony import */ var _init_view_markup_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init-view-markup.ts */ "./src/init-view-markup.ts");
/* harmony import */ var _scale_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scale.ts */ "./src/scale.ts");
/* harmony import */ var _toggle_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toggle.ts */ "./src/toggle.ts");
/* harmony import */ var _functions_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./functions.ts */ "./src/functions.ts");




class View {
    constructor(data, wrap) {
        this.wrap = wrap;
        this.data = data;
        this.precent = {
            min: 0,
            max: 0
        };
        this.tabText = {
            min: '',
            max: ''
        };
        this.scale = [];
        this.initView();
        this.createToggle();
        this.onToggleCoincidence();
        this.addScale();
        this.changeTab();
        this.changeInput();
    }
    initView() {
        Object(_init_view_markup_ts__WEBPACK_IMPORTED_MODULE_0__["initViewMarkup"])(this.wrap, this.data.isVertical);
        this.container = this.wrap.querySelector('.ts-slider__container');
        if (this.data.isVertical) {
            this.size = this.container.offsetHeight;
        }
        else {
            this.size = this.container.offsetWidth;
        }
        this.minToggleElem = Object(_init_view_markup_ts__WEBPACK_IMPORTED_MODULE_0__["markup"])(this.container).min;
        this.maxToggleElem = Object(_init_view_markup_ts__WEBPACK_IMPORTED_MODULE_0__["markup"])(this.container).max;
        this.minTabElem = Object(_init_view_markup_ts__WEBPACK_IMPORTED_MODULE_0__["markup"])(this.container).minTab;
        this.maxTabElem = Object(_init_view_markup_ts__WEBPACK_IMPORTED_MODULE_0__["markup"])(this.container).maxTab;
        this.rangeElem = Object(_init_view_markup_ts__WEBPACK_IMPORTED_MODULE_0__["markup"])(this.container).range;
        if (!this.data.isRange) {
            this.minToggleElem.hidden = true;
        }
        if (!this.data.isTab) {
            this.minTabElem.hidden = true;
            this.maxTabElem.hidden = true;
        }
    }
    setTab() {
        this.minTabElem.textContent = this.tabText.min;
        this.maxTabElem.textContent = this.tabText.max;
    }
    setRange() {
        Object(_functions_ts__WEBPACK_IMPORTED_MODULE_3__["setRangeStyle"])(this.rangeElem, this.minToggle.precent * this.size, this.maxToggle.precent * this.size, this.data.isVertical);
    }
    createToggle() {
        const minTogglePrecent = Object(_functions_ts__WEBPACK_IMPORTED_MODULE_3__["toPrecent"])(this.data.minToggleValue, this.data.minValue, this.data.maxValue);
        const maxTogglePrecent = Object(_functions_ts__WEBPACK_IMPORTED_MODULE_3__["toPrecent"])(this.data.maxToggleValue, this.data.minValue, this.data.maxValue);
        this.minToggle = new _toggle_ts__WEBPACK_IMPORTED_MODULE_2__["Toggle"](this.minToggleElem, minTogglePrecent, this.size, this.data.isVertical);
        this.maxToggle = new _toggle_ts__WEBPACK_IMPORTED_MODULE_2__["Toggle"](this.maxToggleElem, maxTogglePrecent, this.size, this.data.isVertical);
        this.minToggle.min = 0;
        this.maxToggle.max = 1;
        if (!this.data.isRange) {
            this.minToggle.precent = 0;
        }
        this.setRange();
        const onMouseMove = (moveEvt) => {
            this.minToggle.max = this.maxToggle.precent;
            this.maxToggle.min = this.minToggle.precent;
            Object(_functions_ts__WEBPACK_IMPORTED_MODULE_3__["setRangeStyle"])(this.rangeElem, this.minToggle.precent * this.size, this.maxToggle.precent * this.size, this.data.isVertical);
            this.precent.min = this.minToggle.precent;
            this.precent.max = this.maxToggle.precent;
            this.setTab();
            this.container.dispatchEvent(new CustomEvent('moveToggle'));
        };
        Object(_functions_ts__WEBPACK_IMPORTED_MODULE_3__["setMouseHandler"])(document, onMouseMove);
        this.container.addEventListener('mousemove', (evt) => {
            evt.preventDefault();
        });
    }
    onToggleCoincidence() {
        const onMouseDownCoincidence = (evt) => {
            let coincidenceToggle = false;
            this.maxToggleElem.hidden = true;
            coincidenceToggle = document.elementFromPoint(evt.clientX, evt.clientY).classList.contains('ts-slider__toggle--min');
            this.maxToggleElem.hidden = false;
            let startPixel;
            startPixel = this.maxToggle.pixel;
            const onMouseMove = (moveEvt) => {
                if (coincidenceToggle) {
                    this.minToggle.mousePixel = this.maxToggle.mousePixel;
                    this.maxToggle.isFixed = true;
                    this.minToggle.isFixed = true;
                    if (this.maxToggle.mousePixel > startPixel) {
                        this.maxToggle.isFixed = false;
                        this.minToggle.isFixed = true;
                    }
                    else {
                        this.maxToggle.isFixed = true;
                        this.minToggle.isFixed = false;
                        this.minToggle.mousePixel = this.maxToggle.mousePixel;
                        this.minToggle.pixel = this.maxToggle.mousePixel;
                        if (this.minToggle.pixel < 0) {
                            this.minToggle.pixel = 0;
                        }
                        this.minToggle.setStyle();
                        this.minToggle.precent = this.minToggle.pixel / this.size;
                    }
                }
                else {
                    this.maxToggle.isFixed = false;
                    this.minToggle.isFixed = false;
                }
            };
            const onMouseUp = (upEvt) => {
                this.minToggle.mousePixel = this.minToggle.pixel;
                this.maxToggle.isFixed = false;
                this.minToggle.isFixed = false;
                document.removeEventListener('mouseup', onMouseUp);
                document.removeEventListener('mousemove', onMouseMove);
            };
            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);
        };
        this.maxToggleElem.addEventListener('mousedown', onMouseDownCoincidence);
    }
    addScale() {
        this.container.addEventListener('initScale', () => {
            if (this.data.isScale) {
                const scale = new _scale_ts__WEBPACK_IMPORTED_MODULE_1__["Scale"](this.container, this.scale, this.data.isVertical);
            }
        });
    }
    changeTab() {
        this.container.addEventListener('changeTab', () => {
            this.setTab();
        });
    }
    changeInput() {
        this.container.addEventListener('changeInput', () => {
            this.minToggle.precent = this.precent.min;
            this.maxToggle.precent = this.precent.max;
            this.minToggle.changeToggle();
            this.maxToggle.changeToggle();
            this.setTab();
            this.setRange();
        });
    }
    removeMarkup() {
        this.container.remove();
    }
}



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Z1bmN0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luaXQtdmlldy1tYXJrdXAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9wcmVzZW50ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjYWxlLnRzIiwid2VicGFjazovLy8uL3NyYy90b2dnbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUF3QztBQUd4QyxNQUFNLFdBQVcsR0FBUztJQUN6QixVQUFVLEVB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QUFDO2dCQUN2QyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQzthQUN2QztpQkFBTTtnQkFDTixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO2dCQUN0QyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO2dCQUN0QyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyw4REFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzlFLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLDhEQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDOUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ2hELElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNoRCxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsR0FBRywyREFBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzlELElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHLDJEQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FB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K0NBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUMxRTtRQUNGLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELFNBQVM7UUFDUixJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxHQUFHLEVBQUU7WUFDakQsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2YsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBRUQsV0FBVztRQUNWLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxFQUFFLEdBQUcsRUFBRTtZQUNuRCxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztZQUMxQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztZQUMxQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQzlCLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDOUIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2QsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2pCLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELFlBQVk7UUFDWCxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3pCLENBQUM7Q0FDRDtBQUVhIiwiZmlsZSI6InRzLXNsaWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiaW1wb3J0IHtzZXRMaW1pdH0gZnJvbSAnLi9mdW5jdGlvbnMudHMnO1xyXG5pbXBvcnQge0RhdGF9IGZyb20gJy4vaW50ZXJmYWNlcy50cyc7XHJcblxyXG5jb25zdCBkZWZhdWx0RGF0YTogRGF0YSA9IHtcclxuXHRtaW5JbnB1dElkOiAndHMtc2xpZGVyX19taW4taW5wdXQnLFxyXG5cdG1heElucHV0SWQ6ICd0cy1zbGlkZXJfX21heC1pbnB1dCcsXHJcblx0aXNBcnJheTogZmFsc2UsXHJcblx0YXJyYXk6IFtdLFxyXG5cdHN0ZXA6IDEsXHJcblx0bWluVmFsdWU6IDAsXHJcblx0bWF4VmFsdWU6IDEwMCxcclxuXHRtaW5Ub2dnbGVWYWx1ZTogMjUsXHJcblx0bWF4VG9nZ2xlVmFsdWU6IDc1LFxyXG5cdGlzUmFuZ2U6IHRydWUsXHJcblx0aXNWZXJ0aWNhbDogZmFsc2UsXHJcblx0aXNUYWI6IHRydWUsXHJcblx0aXNTY2FsZTogdHJ1ZSxcclxuXHRzY2FsZVF1YW50aXR5OiA0XHJcbn1cclxuXHJcbmNvbnN0IHNldERhdGFMaW1pdCA9IChkYXRhOiBEYXRhKSA9PiB7XHJcblx0ZGF0YS5taW5Ub2dnbGVWYWx1ZSA9IHNldExpbWl0KGRhdGEubWluVG9nZ2xlVmFsdWUsIGRhdGEubWluVmFsdWUsIGRhdGEubWF4VmFsdWUpO1xyXG5cdGRhdGEubWF4VG9nZ2xlVmFsdWUgPSBzZXRMaW1pdChkYXRhLm1heFRvZ2dsZVZhbHVlLCBkYXRhLm1pblZhbHVlLCBkYXRhLm1heFZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IHtzZXREYXRhTGltaXQsIGRlZmF1bHREYXRhfTsiLCJjb25zdCBzZXRNb3VzZUhhbmRsZXIgPSAoZWxlbSwgb25Nb3ZlLCBvbkRvdm4/LCBvblVwPykgPT4ge1xyXG5cclxuXHRjb25zdCBvbk1vdXNlRG93biA9IChldnQpID0+IHtcclxuXHRcdGlmIChvbkRvdm4pIHtcclxuXHRcdFx0b25Eb3ZuKGV2dCk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdGNvbnN0IG9uTW91c2VNb3ZlID0gKG1vdmVFdnQpID0+IHtcclxuXHRcdFx0b25Nb3ZlKG1vdmVFdnQpO1xyXG5cdFx0fVxyXG5cdFx0Y29uc3Qgb25Nb3VzZVVwID0gKHVwRXZ0KSA9PiB7XHJcblx0XHRcdGlmIChvblVwKSB7XHJcblx0XHRcdFx0b25VcCh1cEV2dCk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uTW91c2VVcCk7XHJcblx0XHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKTtcclxuXHRcdH1cclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKTtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbk1vdXNlVXApO1xyXG5cdH1cclxuXHJcblx0ZWxlbS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBvbk1vdXNlRG93bik7XHJcbn1cclxuXHJcbmNvbnN0IHJvdW5kID0gKHZhbHVlOiBudW1iZXIsIHN0ZXA6IG51bWJlcikgPT4ge1xyXG5cdGNvbnN0IHByZWNpc2lvbiA9IHggPT4gKyggKHgudG9TdHJpbmcoKS5pbmNsdWRlcygnLicpKSA/ICh4LnRvU3RyaW5nKCkuc3BsaXQoJy4nKS5wb3AoKS5sZW5ndGgpIDogKDApICk7XHJcblx0bGV0IHJvdW5kZWQ6IHN0cmluZyA9IChNYXRoLnJvdW5kKHZhbHVlIC8gc3RlcCkgKiBzdGVwKS50b0ZpeGVkKHByZWNpc2lvbihzdGVwKSk7XHJcblx0cmV0dXJuIHJvdW5kZWQ7XHJcbn1cclxuXHJcbmNvbnN0IHNldExpbWl0ID0gKHZhbHVlOiBudW1iZXIsIG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcikgPT4ge1xyXG5cdGlmICh2YWx1ZSA+IG1heCkge1xyXG5cdFx0dmFsdWUgPSBtYXg7XHJcblx0fSBlbHNlIGlmICh2YWx1ZSA8IG1pbikge1xyXG5cdFx0dmFsdWUgPSBtaW47XHJcblx0fVxyXG5cdHJldHVybiB2YWx1ZTtcclxufVxyXG5cclxuY29uc3QgdG9QcmVjZW50ID0gKHZhbHVlOiBudW1iZXIsIG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcikgPT4gKHZhbHVlIC0gbWluKSAvIChtYXggLSBtaW4pO1xyXG5cclxuY29uc3QgdG9WYWx1ZSA9ICh2YWx1ZTogbnVtYmVyLCBtaW46IG51bWJlciwgbWF4OiBudW1iZXIpID0+IChtaW4gKyAobWF4IC0gbWluKSAqIHZhbHVlKTtcclxuXHJcbmNvbnN0IHNldFJhbmdlU3R5bGUgPSAocmFuZ2U6IEhUTUxFbGVtZW50LCBtaW46IG51bWJlciwgbWF4OiBudW1iZXIsIGlzVmVydGljYWw6IGJvb2xlYW4pID0+IHtcclxuXHRpZiAoaXNWZXJ0aWNhbCkge1xyXG5cdFx0cmFuZ2Uuc3R5bGUudG9wID0gYCR7bWlufXB4YDtcclxuXHRcdHJhbmdlLnN0eWxlLmhlaWdodCA9IGAkeyhtYXggLSBtaW4pfXB4YDtcclxuXHR9IGVsc2Uge1xyXG5cdFx0cmFuZ2Uuc3R5bGUubGVmdCA9IGAke21pbn1weGA7XHJcblx0XHRyYW5nZS5zdHlsZS53aWR0aCA9IGAkeyhtYXggLSBtaW4pfXB4YDtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCB7c2V0TW91c2VIYW5kbGVyLCByb3VuZCwgc2V0TGltaXQsIHRvUHJlY2VudCwgdG9WYWx1ZSwgc2V0UmFuZ2VTdHlsZX07IiwiaW1wb3J0IHtQcmVzZW50ZXJ9IGZyb20gJy4vcHJlc2VudGVyLnRzJztcclxuXHJcbihmdW5jdGlvbigkKSB7XHJcblx0Y29uc3QgbWV0aG9kcyA9IHtcclxuXHRcdGluaXQ6IGZ1bmN0aW9uKG9wdGlvbnMpIHtcclxuXHRcdFx0Y29uc3QgaWQ6IHN0cmluZyA9ICcjJyArIHRoaXMucHJvcCgnaWQnKTtcclxuXHRcdFx0Y29uc3Qgd3JhcDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGlkKTtcclxuXHRcdFx0Y29uc3QgcHJlc2VudGVyID0gbmV3IFByZXNlbnRlcihvcHRpb25zLCB3cmFwKTtcclxuXHRcdFx0d2luZG93W2lkXSA9IHByZXNlbnRlcjtcclxuXHRcdH0sXHJcblx0XHRjaGFuZ2U6IGZ1bmN0aW9uKG9wdGlvbnMpIHtcclxuXHRcdFx0Y29uc3QgaWQ6IHN0cmluZyA9ICcjJyArIHRoaXMucHJvcCgnaWQnKTtcclxuXHRcdFx0Y29uc3QgcHJlc2VudGVyID0gd2luZG93W2lkXTtcclxuXHRcdFx0cHJlc2VudGVyLm9wdGlvbnMgPSBvcHRpb25zO1xyXG5cdFx0XHRwcmVzZW50ZXIuY2hhbmdlRGF0YSgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0JC5mbi50c1NsaWRlciA9IGZ1bmN0aW9uKG9wdGlvbnMsIG1ldGhvZD8pIHtcclxuXHRcdGNvbnN0IGlkOiBzdHJpbmcgPSAnIycgKyB0aGlzLnByb3AoJ2lkJyk7XHJcblx0XHRpZiAoIG1ldGhvZCA9PT0gJ2NoYW5nZScgJiYgd2luZG93W2lkXSApIHtcclxuXHRcdFx0Y29uc3QgY2hhbmdlID0gbWV0aG9kcy5jaGFuZ2UuYXBwbHkoIHRoaXMsIGFyZ3VtZW50cyApO1xyXG5cdFx0fSBlbHNlIGlmICggdHlwZW9mIG1ldGhvZCA9PT0gJ29iamVjdCcgfHwgISBtZXRob2QgfHwgISB3aW5kb3dbaWRdICkge1xyXG5cdFx0XHRjb25zdCBpbml0ID0gbWV0aG9kcy5pbml0LmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdCQuZXJyb3IoICfQnNC10YLQvtC0INGBINC40LzQtdC90LXQvCAnICsgIG1ldGhvZCArICcg0L3QtSDRgdGD0YnQtdGB0YLQstGD0LXRgiDQtNC70Y8galF1ZXJ5LnRzU2xpZGVyJyApO1xyXG5cdFx0fSBcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxufSkoalF1ZXJ5KTtcclxuXHJcbiIsImNvbnN0IGluaXRWaWV3TWFya3VwID0gKGNvbnRyb2xXcmFwOiBIVE1MRWxlbWVudCwgdmVydGljYWw6IGJvb2xlYW4pID0+IHtcclxuXHRjb25zdCBjb250b2xNYXJrdXA6IHN0cmluZyA9IGA8ZGl2IGNsYXNzPVwidHMtc2xpZGVyX19jb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0cy1zbGlkZXJfX2JhclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidHMtc2xpZGVyX190b2dnbGUgdHMtc2xpZGVyX190b2dnbGUtLW1pblwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0cy1zbGlkZXJfX3RvZ2dsZS12YWx1ZSB0cy1zbGlkZXJfX3RvZ2dsZS12YWx1ZS0tbWluXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidHMtc2xpZGVyX190b2dnbGUgdHMtc2xpZGVyX190b2dnbGUtLW1heFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0cy1zbGlkZXJfX3RvZ2dsZS12YWx1ZSB0cy1zbGlkZXJfX3RvZ2dsZS12YWx1ZS0tbWF4XCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidHMtc2xpZGVyX19yYW5nZVwiPjwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+YDtcclxuXHRjb250cm9sV3JhcC5pbm5lckhUTUwgPSBjb250b2xNYXJrdXA7XHJcbiAgY29uc3QgZGl2ID0gY29udHJvbFdyYXAucXVlcnlTZWxlY3RvckFsbCgnZGl2Jyk7XHJcbiAgaWYgKHZlcnRpY2FsKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRpdi5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBmaXJzdENsYXNzOiBzdHJpbmcgPSBkaXZbaV0uY2xhc3NMaXN0WzBdO1xyXG4gICAgICBjb25zdCB2ZXJ0aWNhbENsYXNzOiBzdHJpbmcgPSBmaXJzdENsYXNzICsgJy0tdmVydGljYWwnO1xyXG4gICAgICBkaXZbaV0uY2xhc3NMaXN0LmFkZCh2ZXJ0aWNhbENsYXNzKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcmt1cCA9IChzbGlkZXI6IEhUTUxFbGVtZW50KSA9PiB7XHJcbiAgaW50ZXJmYWNlIE1hcmt1cCB7XHJcbiAgICBtaW46IEhUTUxFbGVtZW50O1xyXG4gICAgbWF4OiBIVE1MRWxlbWVudDtcclxuICAgIHJhbmdlOiBIVE1MRWxlbWVudDtcclxuICAgIGJhcjogSFRNTEVsZW1lbnQ7XHJcbiAgICBtaW5UYWI6IEhUTUxFbGVtZW50O1xyXG4gICAgbWF4VGFiOiBIVE1MRWxlbWVudDtcclxuICB9XHJcbiAgbGV0IG1hcmt1cDogTWFya3VwID0geyAgXHJcbiAgICAgbWluOiBzbGlkZXIucXVlcnlTZWxlY3RvcignLnRzLXNsaWRlcl9fdG9nZ2xlLS1taW4nKSxcclxuICAgICBtYXg6IHNsaWRlci5xdWVyeVNlbGVjdG9yKCcudHMtc2xpZGVyX190b2dnbGUtLW1heCcpLFxyXG4gICAgIHJhbmdlOiBzbGlkZXIucXVlcnlTZWxlY3RvcignLnRzLXNsaWRlcl9fcmFuZ2UnKSxcclxuICAgICBiYXI6IHNsaWRlci5xdWVyeVNlbGVjdG9yKCcudHMtc2xpZGVyX19iYXInKSxcclxuICAgICBtaW5UYWI6IHNsaWRlci5xdWVyeVNlbGVjdG9yKCcudHMtc2xpZGVyX190b2dnbGUtdmFsdWUtLW1pbicpLFxyXG4gICAgIG1heFRhYjogc2xpZGVyLnF1ZXJ5U2VsZWN0b3IoJy50cy1zbGlkZXJfX3RvZ2dsZS12YWx1ZS0tbWF4JylcclxuICB9XHJcbiAgcmV0dXJuIG1hcmt1cDtcclxufVxyXG5cclxuZXhwb3J0IHtpbml0Vmlld01hcmt1cCwgbWFya3VwfTsiLCJpbXBvcnQge0RhdGEsIFZhbHVlLCBUYWJUZXh0fSBmcm9tICcuL2ludGVyZmFjZXMudHMnO1xyXG5pbXBvcnQge3NldE1vdXNlSGFuZGxlciwgcm91bmQsIHNldExpbWl0fSBmcm9tICcuL2Z1bmN0aW9ucy50cyc7XHJcblxyXG5jbGFzcyBNb2RlbCB7XHJcblxyXG5cdGRhdGE6IERhdGE7XHJcblx0bWluSW5wdXQ6IGFueTtcclxuXHRtYXhJbnB1dDogYW55O1xyXG5cdHZhbHVlOiBWYWx1ZTtcclxuXHRwcmVjZW50OiBWYWx1ZTtcclxuXHR0YWJUZXh0OiBUYWJUZXh0O1xyXG5cdG9ic2VydmVyOiBIVE1MRWxlbWVudDtcclxuXHRtaW46IG51bWJlcjtcclxuXHRtYXg6IG51bWJlcjtcclxuXHRzY2FsZTogc3RyaW5nW107XHJcblxyXG5cdGNvbnN0cnVjdG9yKGRhdGEpIHtcdFx0XHJcblx0XHR0aGlzLmRhdGEgPSBkYXRhO1xyXG5cdFx0dGhpcy50YWJUZXh0ID0ge1xyXG5cdFx0XHRtaW46ICcnLFxyXG5cdFx0XHRtYXg6ICcnXHJcblx0XHR9XHJcblx0XHR0aGlzLnZhbHVlID0ge1xyXG5cdFx0XHRtaW46IDAsXHJcblx0XHRcdG1heDogMFxyXG5cdFx0fVxyXG5cdFx0dGhpcy5wcmVjZW50ID0ge1xyXG5cdFx0XHRtaW46IDAsXHJcblx0XHRcdG1heDogMFxyXG5cdFx0fVxyXG5cdFx0dGhpcy5zY2FsZSA9IFtdO1xyXG5cdFx0dGhpcy5vYnNlcnZlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0V2ZW50Jyk7XHJcblx0XHR0aGlzLmluaXQoKTtcclxuXHRcdHRoaXMuc2V0U2NhbGUoKTtcclxuXHRcdHRoaXMuYWRkTGlzdGVuZXIoKTtcclxuXHRcdHRoaXMuY2hhbmdlSW5wdXQoKTtcclxuXHR9XHJcblxyXG5cdHNldElucHV0KCkge1xyXG5cdFx0dGhpcy5taW5JbnB1dC52YWx1ZSA9IHRoaXMudGFiVGV4dC5taW47XHJcblx0XHR0aGlzLm1heElucHV0LnZhbHVlID0gdGhpcy50YWJUZXh0Lm1heDtcclxuXHRcdGlmICghdGhpcy5kYXRhLmlzUmFuZ2UpIHtcclxuXHRcdFx0aWYgKHRoaXMuZGF0YS5pc0FycmF5KSB7XHJcblx0XHRcdFx0dGhpcy5taW5JbnB1dC52YWx1ZSA9IHRoaXMuZGF0YS5hcnJheVswXTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aGlzLm1pbklucHV0LnZhbHVlID0gdGhpcy5kYXRhLm1pblZhbHVlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRzZXRBcnJheVZhbHVlKCkge1xyXG5cdFx0bGV0IG1pbiA9IE1hdGgucm91bmQodGhpcy5wcmVjZW50Lm1pbiAqICh0aGlzLmRhdGEuYXJyYXkubGVuZ3RoIC0gMSkpO1xyXG5cdFx0bGV0IG1heCA9IE1hdGgucm91bmQodGhpcy5wcmVjZW50Lm1heCAqICh0aGlzLmRhdGEuYXJyYXkubGVuZ3RoIC0gMSkpO1xyXG5cdFx0dGhpcy50YWJUZXh0Lm1pbiA9IHRoaXMuZGF0YS5hcnJheVttaW5dO1xyXG5cdFx0dGhpcy50YWJUZXh0Lm1heCA9IHRoaXMuZGF0YS5hcnJheVttYXhdO1xyXG5cdFx0dGhpcy5zZXRJbnB1dCgpO1xyXG5cdH1cclxuXHJcblx0aW5pdCgpIHtcclxuXHRcdGlmICh0aGlzLmRhdGEuaXNBcnJheSkge1xyXG5cdFx0XHR0aGlzLm9ic2VydmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3NldFByZWNlbnQnLCAoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5zZXRBcnJheVZhbHVlKCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy50YWJUZXh0Lm1pbiA9IHJvdW5kKHRoaXMuZGF0YS5taW5Ub2dnbGVWYWx1ZSwgdGhpcy5kYXRhLnN0ZXApO1xyXG5cdFx0XHR0aGlzLnRhYlRleHQubWF4ID0gcm91bmQodGhpcy5kYXRhLm1heFRvZ2dsZVZhbHVlLCB0aGlzLmRhdGEuc3RlcCk7XHJcblx0XHR9XHJcblx0XHR0aGlzLm1pbklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyB0aGlzLmRhdGEubWluSW5wdXRJZCk7XHJcblx0XHR0aGlzLm1heElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyB0aGlzLmRhdGEubWF4SW5wdXRJZCk7XHJcblx0XHR0aGlzLnNldElucHV0KCk7XHJcblx0fVxyXG5cclxuXHRzZXRTY2FsZSgpIHtcclxuXHRcdGlmICh0aGlzLmRhdGEuaXNBcnJheSkge1xyXG5cdFx0XHRpZiAodGhpcy5kYXRhLmlzU2NhbGUpIHtcclxuXHRcdFx0XHR0aGlzLnNjYWxlID0gdGhpcy5kYXRhLmFycmF5O1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAodGhpcy5kYXRhLmlzU2NhbGUpIHtcclxuXHRcdFx0XHRsZXQgcXVhbnRpdHkgPSB0aGlzLmRhdGEuc2NhbGVRdWFudGl0eTtcclxuXHRcdFx0XHRpZiAocXVhbnRpdHkgPCAyKSB7XHJcblx0XHRcdFx0XHRxdWFudGl0eSA9IDI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgcXVhbnRpdHk7IGkrKykge1xyXG5cdFx0XHRcdFx0bGV0IHRleHRWYWx1ZTogbnVtYmVyID0gTWF0aC5yb3VuZCgodGhpcy5kYXRhLm1pblZhbHVlICsgKHRoaXMuZGF0YS5tYXhWYWx1ZSAtIHRoaXMuZGF0YS5taW5WYWx1ZSkgLyAocXVhbnRpdHkgLSAxKSAqIGkpIC8gdGhpcy5kYXRhLnN0ZXApICogdGhpcy5kYXRhLnN0ZXA7XHJcblx0XHRcdFx0XHRsZXQgdGV4dDogc3RyaW5nID0gcm91bmQodGV4dFZhbHVlLCB0aGlzLmRhdGEuc3RlcCk7XHJcblx0XHRcdFx0XHR0aGlzLnNjYWxlLnB1c2godGV4dCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRhZGRMaXN0ZW5lcigpIHtcclxuXHRcdHRoaXMub2JzZXJ2ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlVmFsdWUnLCAoKSA9PiB7XHJcblx0XHRcdGlmICh0aGlzLmRhdGEuaXNBcnJheSkge1xyXG5cdFx0XHRcdHRoaXMuc2V0QXJyYXlWYWx1ZSgpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMudGFiVGV4dC5taW4gPSByb3VuZCh0aGlzLnZhbHVlLm1pbiwgdGhpcy5kYXRhLnN0ZXApO1xyXG5cdFx0XHRcdHRoaXMudGFiVGV4dC5tYXggPSByb3VuZCh0aGlzLnZhbHVlLm1heCwgdGhpcy5kYXRhLnN0ZXApO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMuc2V0SW5wdXQoKTtcclxuXHRcdFx0dGhpcy5vYnNlcnZlci5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnY2hhbmdlVGFiVGV4dCcpKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRjaGFuZ2VJbnB1dCgpIHtcclxuXHRcdGNvbnN0IG9uQmx1ciA9ICgpID0+IHtcclxuXHRcdFx0aWYgKHRoaXMuZGF0YS5pc0FycmF5KSB7XHJcblx0XHRcdFx0Y29uc3QgaW5BcnJheSA9ICh2YWx1ZSwgbGltaXQpID0+IHtcclxuXHRcdFx0XHRcdGlmICh0aGlzLmRhdGEuYXJyYXkuaW5jbHVkZXModmFsdWUpKSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiB2YWx1ZTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiBsaW1pdDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy5taW5JbnB1dC52YWx1ZSA9IGluQXJyYXkodGhpcy5taW5JbnB1dC52YWx1ZSwgdGhpcy5kYXRhLmFycmF5WzBdKTtcclxuXHRcdFx0XHR0aGlzLm1heElucHV0LnZhbHVlID0gaW5BcnJheSh0aGlzLm1heElucHV0LnZhbHVlLCB0aGlzLmRhdGEuYXJyYXlbdGhpcy5kYXRhLmFycmF5Lmxlbmd0aCAtIDFdKTtcclxuXHRcdFx0XHR0aGlzLnZhbHVlLm1pbiA9IHRoaXMuZGF0YS5hcnJheS5pbmRleE9mKHRoaXMubWluSW5wdXQudmFsdWUpO1xyXG5cdFx0XHRcdHRoaXMudmFsdWUubWF4ID0gdGhpcy5kYXRhLmFycmF5LmluZGV4T2YodGhpcy5tYXhJbnB1dC52YWx1ZSk7XHJcblx0XHRcdFx0aWYgKHRoaXMudmFsdWUubWluID4gdGhpcy52YWx1ZS5tYXgpIHtcclxuXHRcdFx0XHRcdHRoaXMudmFsdWUubWluID0gdGhpcy52YWx1ZS5tYXg7XHJcblx0XHRcdFx0XHR0aGlzLm1pbklucHV0LnZhbHVlID0gdGhpcy5tYXhJbnB1dC52YWx1ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy50YWJUZXh0Lm1pbiA9IHRoaXMubWluSW5wdXQudmFsdWU7XHJcblx0XHRcdFx0dGhpcy50YWJUZXh0Lm1heCA9IHRoaXMubWF4SW5wdXQudmFsdWU7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy52YWx1ZS5taW4gPSArdGhpcy5taW5JbnB1dC52YWx1ZTtcclxuXHRcdFx0XHR0aGlzLnZhbHVlLm1heCA9ICt0aGlzLm1heElucHV0LnZhbHVlO1xyXG5cdFx0XHRcdHRoaXMudmFsdWUubWluID0gc2V0TGltaXQodGhpcy52YWx1ZS5taW4sIHRoaXMuZGF0YS5taW5WYWx1ZSwgdGhpcy52YWx1ZS5tYXgpO1xyXG5cdFx0XHRcdHRoaXMudmFsdWUubWF4ID0gc2V0TGltaXQodGhpcy52YWx1ZS5tYXgsIHRoaXMudmFsdWUubWluLCB0aGlzLmRhdGEubWF4VmFsdWUpO1xyXG5cdFx0XHRcdHRoaXMubWluSW5wdXQudmFsdWUgPSB0aGlzLnZhbHVlLm1pbi50b1N0cmluZygpO1xyXG5cdFx0XHRcdHRoaXMubWF4SW5wdXQudmFsdWUgPSB0aGlzLnZhbHVlLm1heC50b1N0cmluZygpO1xyXG5cdFx0XHRcdHRoaXMudGFiVGV4dC5taW4gPSByb3VuZCh0aGlzLm1pbklucHV0LnZhbHVlLCB0aGlzLmRhdGEuc3RlcCk7XHJcblx0XHRcdFx0dGhpcy50YWJUZXh0Lm1heCA9IHJvdW5kKHRoaXMubWF4SW5wdXQudmFsdWUsIHRoaXMuZGF0YS5zdGVwKTtcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLm9ic2VydmVyLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdjaGFuZ2VJbnB1dCcpKTtcclxuXHRcdH1cclxuXHRcdHRoaXMubWluSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIG9uQmx1cik7XHJcblx0XHR0aGlzLm1heElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBvbkJsdXIpO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IHtNb2RlbH07IiwiaW1wb3J0IHtWaWV3fSBmcm9tICcuL3ZpZXcudHMnO1xyXG5pbXBvcnQge0RhdGEsIFZhbHVlLCBUYWJUZXh0fSBmcm9tICcuL2ludGVyZmFjZXMudHMnO1xyXG5pbXBvcnQge01vZGVsfSBmcm9tICcuL21vZGVsLnRzJztcclxuaW1wb3J0IHtzZXRNb3VzZUhhbmRsZXIsIHJvdW5kLCBzZXRSYW5nZVN0eWxlLCB0b1ByZWNlbnQsIHRvVmFsdWV9IGZyb20gJy4vZnVuY3Rpb25zLnRzJztcclxuaW1wb3J0IHttYXJrdXB9IGZyb20gJy4vaW5pdC12aWV3LW1hcmt1cC50cyc7XHJcbmltcG9ydCB7ZGVmYXVsdERhdGEsIHNldERhdGFMaW1pdH0gZnJvbSAnLi9kYXRhLnRzJztcclxuXHJcbmNsYXNzIFByZXNlbnRlciB7XHJcblxyXG5cdHdyYXA6IEhUTUxFbGVtZW50O1xyXG5cdGRhdGE6IERhdGE7XHJcblx0b3B0aW9uczogYW55O1xyXG5cdHZpZXc6IFZpZXc7XHJcblx0bW9kZWw6IE1vZGVsO1xyXG5cdG1heDogbnVtYmVyO1xyXG5cdG1pbjogbnVtYmVyO1xyXG5cdHZhbHVlOiBWYWx1ZTtcclxuXHRtb2RlbFRhYlRleHQ6IFRhYlRleHQ7XHJcblxyXG5cdGNvbnN0cnVjdG9yKG9wdGlvbnMsIHdyYXApIHtcclxuXHRcdFxyXG5cdFx0dGhpcy53cmFwID0gd3JhcDtcclxuXHRcdHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XHJcblx0XHR0aGlzLmNyZWF0ZURhdGEoKTtcclxuXHRcdHRoaXMuaW5pdCgpO1xyXG5cdFx0dGhpcy5vbk1vdmVUb2dnbGUoKTtcclxuXHRcdHRoaXMub25DaGFuZ2VUYWJUZXh0KCk7XHJcblx0XHR0aGlzLm9uQ2FuZ2VJbnB1dCgpO1xyXG5cclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XHJcblx0XHRcdHRoaXMuaW5pdCgpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRzZXRWYWx1ZSgpIHtcclxuXHRcdHRoaXMudmFsdWUgPSB7XHJcblx0XHRcdG1pbjogdGhpcy5kYXRhLm1pblRvZ2dsZVZhbHVlLFxyXG5cdFx0XHRtYXg6IHRoaXMuZGF0YS5tYXhUb2dnbGVWYWx1ZVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Y3JlYXRlRGF0YSgpIHtcclxuXHRcdGZ1bmN0aW9uIGRlZXBDbG9uZShvYmopIHtcclxuXHRcdCAgY29uc3QgY2xPYmogPSB7fTtcclxuXHRcdCAgZm9yKGNvbnN0IGkgaW4gb2JqKSB7XHJcblx0XHQgICAgaWYgKG9ialtpXSBpbnN0YW5jZW9mIE9iamVjdCkge1xyXG5cdFx0ICAgICAgY2xPYmpbaV0gPSBkZWVwQ2xvbmUob2JqW2ldKTtcclxuXHRcdCAgICAgIGNvbnRpbnVlO1xyXG5cdFx0ICAgIH1cclxuXHRcdCAgICBjbE9ialtpXSA9IG9ialtpXTtcclxuXHRcdCAgfVxyXG5cdFx0ICByZXR1cm4gY2xPYmo7XHJcblx0XHR9XHJcblx0XHRjb25zdCBkYXRhQ2xvbmUgPSBkZWVwQ2xvbmUoZGVmYXVsdERhdGEpO1xyXG5cdFx0dGhpcy5kYXRhID0gT2JqZWN0LmFzc2lnbihkYXRhQ2xvbmUsIHRoaXMub3B0aW9ucyk7XHJcblx0XHRzZXREYXRhTGltaXQodGhpcy5kYXRhKTtcclxuXHRcdHRoaXMuc2V0VmFsdWUoKTtcclxuXHR9XHJcblxyXG5cdGNoYW5nZURhdGEoKSB7XHJcblx0XHR0aGlzLmRhdGEgPSBPYmplY3QuYXNzaWduKHRoaXMuZGF0YSwgdGhpcy5vcHRpb25zKTtcclxuXHRcdHNldERhdGFMaW1pdCh0aGlzLmRhdGEpO1xyXG5cdFx0dGhpcy5zZXRWYWx1ZSgpO1xyXG5cdFx0dGhpcy5pbml0KCk7XHJcblx0XHR0aGlzLm9uTW92ZVRvZ2dsZSgpO1xyXG5cdFx0dGhpcy5vbkNoYW5nZVRhYlRleHQoKTtcclxuXHRcdHRoaXMub25DYW5nZUlucHV0KCk7XHJcblx0fVxyXG5cclxuXHRzZXRUYWJUZXh0KCkge1xyXG5cdFx0dGhpcy52aWV3LnRhYlRleHQubWluID0gdGhpcy5tb2RlbC50YWJUZXh0Lm1pbjtcclxuXHRcdHRoaXMudmlldy50YWJUZXh0Lm1heCA9IHRoaXMubW9kZWwudGFiVGV4dC5tYXg7XHJcblx0fVxyXG5cclxuXHRpbml0U2NhbGUoKSB7XHJcblx0XHR0aGlzLnZpZXcuc2NhbGUgPSB0aGlzLm1vZGVsLnNjYWxlO1xyXG5cdFx0dGhpcy52aWV3LmNvbnRhaW5lci5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnaW5pdFNjYWxlJykpO1xyXG5cdH1cclxuXHJcblx0c2V0VG9WaWV3KCkge1xyXG5cdFx0dGhpcy52aWV3LnByZWNlbnQubWluID0gdG9QcmVjZW50KHRoaXMudmFsdWUubWluLCB0aGlzLmRhdGEubWluVmFsdWUsIHRoaXMuZGF0YS5tYXhWYWx1ZSk7XHJcblx0XHR0aGlzLnZpZXcucHJlY2VudC5tYXggPSB0b1ByZWNlbnQodGhpcy52YWx1ZS5tYXgsIHRoaXMuZGF0YS5taW5WYWx1ZSwgdGhpcy5kYXRhLm1heFZhbHVlKTtcclxuXHR9XHJcblxyXG5cdHNldFRvTW9kZWwoKSB7XHJcblx0XHR0aGlzLm1vZGVsLnZhbHVlLm1pbiA9IHRvVmFsdWUodGhpcy52aWV3LnByZWNlbnQubWluLCB0aGlzLmRhdGEubWluVmFsdWUsIHRoaXMuZGF0YS5tYXhWYWx1ZSk7XHJcblx0XHR0aGlzLm1vZGVsLnZhbHVlLm1heCA9IHRvVmFsdWUodGhpcy52aWV3LnByZWNlbnQubWF4LCB0aGlzLmRhdGEubWluVmFsdWUsIHRoaXMuZGF0YS5tYXhWYWx1ZSk7XHJcblx0fVxyXG5cclxuXHRpbml0KCkge1xyXG5cdFx0Y29uc3Qgdmlld0RhdGEgPSB0aGlzLmRhdGE7XHJcblx0XHRjb25zdCBtb2RlbERhdGEgPSB0aGlzLmRhdGE7XHJcblx0XHR0aGlzLnZpZXcgPSBuZXcgVmlldyh2aWV3RGF0YSwgdGhpcy53cmFwKTtcclxuXHRcdHRoaXMubW9kZWwgPSBuZXcgTW9kZWwobW9kZWxEYXRhKTtcclxuXHRcdHRoaXMuaW5pdFNjYWxlKCk7XHJcblx0XHR0aGlzLnNldFRvVmlldygpO1xyXG5cdFx0dGhpcy5tb2RlbC5wcmVjZW50ID0gdGhpcy52aWV3LnByZWNlbnQ7XHJcblx0XHR0aGlzLm1vZGVsLm9ic2VydmVyLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdzZXRQcmVjZW50JykpO1xyXG5cdFx0dGhpcy5zZXRUYWJUZXh0KCk7XHJcblx0XHR0aGlzLnZpZXcuc2V0VGFiKCk7XHJcblx0XHR0aGlzLnZpZXcuY29udGFpbmVyLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdpbml0VmFsdWUnKSk7XHJcblxyXG5cdFx0dGhpcy52aWV3LmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2VWYWx1ZScsICgpID0+IHtcclxuXHRcdFx0dGhpcy5tb2RlbC5vYnNlcnZlci5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnY2hhbmdlVmFsdWUnKSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdG9uTW92ZVRvZ2dsZSgpIHtcclxuXHRcdGNvbnN0IG9uQ2hhbmdlVmlldyA9ICgpID0+IHtcclxuXHRcdFx0dGhpcy5zZXRUb01vZGVsKCk7XHJcblx0XHRcdHRoaXMubW9kZWwub2JzZXJ2ZXIuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2NoYW5nZVZhbHVlJykpO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy52aWV3LmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdtb3ZlVG9nZ2xlJywgb25DaGFuZ2VWaWV3KTtcclxuXHR9XHJcblxyXG5cdG9uQ2hhbmdlVGFiVGV4dCgpIHtcclxuXHRcdHRoaXMubW9kZWwub2JzZXJ2ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlVGFiVGV4dCcsICgpID0+IHtcclxuXHRcdFx0dGhpcy5zZXRUYWJUZXh0KCk7XHJcblx0XHRcdHRoaXMudmlldy5jb250YWluZXIuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2NoYW5nZVRhYicpKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRvbkNhbmdlSW5wdXQoKSB7XHJcblx0XHR0aGlzLm1vZGVsLm9ic2VydmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZUlucHV0JywgKCkgPT4ge1xyXG5cdFx0XHR0aGlzLnZpZXcudGFiVGV4dCA9IHRoaXMubW9kZWwudGFiVGV4dDtcclxuXHRcdFx0aWYgKHRoaXMuZGF0YS5pc0FycmF5KSB7XHJcblx0XHRcdFx0dGhpcy52aWV3LnByZWNlbnQubWluID0gdGhpcy5tb2RlbC52YWx1ZS5taW4gLyAodGhpcy5kYXRhLmFycmF5Lmxlbmd0aCAtIDEpO1xyXG5cdFx0XHRcdHRoaXMudmlldy5wcmVjZW50Lm1heCA9IHRoaXMubW9kZWwudmFsdWUubWF4IC8gKHRoaXMuZGF0YS5hcnJheS5sZW5ndGggLTEpO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHRoaXMudmlldy5wcmVjZW50KTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aGlzLnZhbHVlLm1pbiA9ICt0aGlzLm1vZGVsLnZhbHVlLm1pbjtcclxuXHRcdFx0XHR0aGlzLnZhbHVlLm1heCA9ICt0aGlzLm1vZGVsLnZhbHVlLm1heDtcclxuXHRcdFx0XHR0aGlzLnNldFRvVmlldygpO1xyXG5cdFx0XHRcdHRoaXMuc2V0VG9Nb2RlbCgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMudmlldy5jb250YWluZXIuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2NoYW5nZUlucHV0JykpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQge1ByZXNlbnRlcn07IiwiaW1wb3J0IHtyb3VuZH0gZnJvbSAnLi9mdW5jdGlvbnMudHMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNjYWxlIHtcclxuXHJcblx0c2xpZGVyOiBIVE1MRWxlbWVudDtcclxuXHRzY2FsZTogc3RyaW5nW107XHJcblx0aXNWZXJ0aWNhbDogYm9vbGVhbjtcclxuXHJcblx0Y29uc3RydWN0b3Ioc2xpZGVyLCBzY2FsZSwgaXNWZXJ0aWNhbCkge1xyXG5cdFx0dGhpcy5zbGlkZXIgPSBzbGlkZXI7XHJcblx0XHR0aGlzLnNjYWxlID0gc2NhbGU7XHJcblx0XHR0aGlzLmlzVmVydGljYWwgPSBpc1ZlcnRpY2FsO1xyXG5cdFx0dGhpcy5jcmVhdGVJdGVtKCk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVJdGVtKCkge1xyXG5cdFx0Y29uc3QgYmFyOiBIVE1MRWxlbWVudCA9IHRoaXMuc2xpZGVyLnF1ZXJ5U2VsZWN0b3IoJy50cy1zbGlkZXJfX2JhcicpO1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNjYWxlLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGNvbnN0IHNjYWxlSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0XHRzY2FsZUl0ZW0uY2xhc3NMaXN0LmFkZCgndHMtc2xpZGVyX19zY2FsZS1pdGVtJyk7XHJcblx0XHRcdHNjYWxlSXRlbS50ZXh0Q29udGVudCA9IHRoaXMuc2NhbGVbaV07XHJcblx0XHRcdGlmICh0aGlzLmlzVmVydGljYWwpIHtcclxuXHRcdFx0XHRzY2FsZUl0ZW0uY2xhc3NMaXN0LmFkZCgndHMtc2xpZGVyX19zY2FsZS1pdGVtLS12ZXJ0aWNhbCcpO1xyXG5cdFx0XHRcdHNjYWxlSXRlbS5zdHlsZS50b3AgPSBgJHtiYXIub2Zmc2V0SGVpZ2h0IC8gKHRoaXMuc2NhbGUubGVuZ3RoIC0gMSkgKiBpfXB4YDtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzY2FsZUl0ZW0uc3R5bGUubGVmdCA9IGAke2Jhci5vZmZzZXRXaWR0aCAvICh0aGlzLnNjYWxlLmxlbmd0aCAtIDEpICogaX1weGA7XHJcblx0XHRcdH1cdFxyXG5cdFx0XHRiYXIuYXBwZW5kKHNjYWxlSXRlbSk7XHJcblx0XHR9XHJcblx0fVxyXG59IiwiaW1wb3J0IHtzZXRMaW1pdH0gZnJvbSAnLi9mdW5jdGlvbnMudHMnO1xyXG5cclxuY29uc3Qgc2V0VG9nZ2xlU3R5bGUgPSAodG9nZ2xlOiBIVE1MRWxlbWVudCwgcGl4ZWw6IG51bWJlciwgaXNWZXJ0aWNhbDogYm9vbGVhbikgPT4ge1xyXG5cdFx0aWYgKGlzVmVydGljYWwpIHtcclxuXHRcdFx0dG9nZ2xlLnN0eWxlLnRvcCA9IGAke3BpeGVsfXB4YDtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRvZ2dsZS5zdHlsZS5sZWZ0ID0gYCR7cGl4ZWx9cHhgO1xyXG5cdH1cclxufVxyXG5cclxuY2xhc3MgVG9nZ2xlIHtcclxuXHJcblx0dG9nZ2xlOiBIVE1MRWxlbWVudDtcclxuXHRtaW46IG51bWJlcjtcclxuXHRtYXg6IG51bWJlcjtcclxuXHRtb3VzZVBpeGVsOiBudW1iZXI7XHJcblx0cGl4ZWw6IG51bWJlcjtcclxuXHRwcmVjZW50OiBudW1iZXI7XHJcblx0c2l6ZTogbnVtYmVyO1xyXG5cdGlzVmVydGljYWw6IGJvb2xlYW47XHJcblx0aXNGaXhlZDogYm9vbGVhbjtcclxuXHJcblx0Y29uc3RydWN0b3IodG9nZ2xlLCBwcmVjZW50LCBzaXplLCBpc1ZlcnRpY2FsKSB7XHJcblx0XHR0aGlzLnRvZ2dsZSA9IHRvZ2dsZTtcclxuXHRcdHRoaXMuc2l6ZSA9IHNpemU7XHJcblx0XHR0aGlzLnByZWNlbnQgPSBwcmVjZW50O1xyXG5cdFx0dGhpcy5tb3VzZVBpeGVsID0gdGhpcy5wcmVjZW50ICogdGhpcy5zaXplO1xyXG5cdFx0dGhpcy5waXhlbCA9IHRoaXMubW91c2VQaXhlbDtcclxuXHRcdHRoaXMuaXNWZXJ0aWNhbCA9IGlzVmVydGljYWw7XHJcblx0XHR0aGlzLmlzRml4ZWQgPSBmYWxzZTtcclxuXHRcdHRoaXMuc2V0U3R5bGUoKTtcclxuXHRcdHRoaXMub25Nb3ZlVG9nZ2xlKCk7XHJcblx0fVxyXG5cclxuXHRzZXRTdHlsZSgpIHtcclxuXHRcdHNldFRvZ2dsZVN0eWxlKHRoaXMudG9nZ2xlLCB0aGlzLnBpeGVsLCB0aGlzLmlzVmVydGljYWwpO1xyXG5cdH1cclxuXHJcblx0Y2hhbmdlVG9nZ2xlKCkge1xyXG5cdFx0dGhpcy5tb3VzZVBpeGVsID0gdGhpcy5wcmVjZW50ICogdGhpcy5zaXplO1xyXG5cdFx0dGhpcy5waXhlbCA9IHRoaXMubW91c2VQaXhlbDtcclxuXHRcdHRoaXMuc2V0U3R5bGUoKTtcclxuXHR9XHJcblxyXG5cdG9uTW92ZVRvZ2dsZSgpIHtcclxuXHRcdGNvbnN0IG9uTW91c2VEb3duID0gKGV2dCkgPT4ge1xyXG5cdFx0XHRsZXQgc2hpZnRYOiBudW1iZXIgPSBldnQucGFnZVggLSB0aGlzLnRvZ2dsZS5vZmZzZXRMZWZ0O1xyXG5cdFx0XHRsZXQgc2hpZnRZOiBudW1iZXIgPSBldnQucGFnZVkgLSB0aGlzLnRvZ2dsZS5vZmZzZXRUb3A7XHJcblx0XHRcdGxldCBzdGFydFBpeGVsOiBudW1iZXIgPSB0aGlzLm1vdXNlUGl4ZWw7XHJcblx0XHRcdGNvbnN0IG1vdmVBdCA9IChwYWdlWCwgcGFnZVkpID0+IHtcclxuXHRcdFx0XHRpZiAodGhpcy5pc1ZlcnRpY2FsKSB7XHJcblx0XHRcdFx0XHR0aGlzLm1vdXNlUGl4ZWwgPSBwYWdlWSAtIHNoaWZ0WTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy5tb3VzZVBpeGVsID0gcGFnZVggLSBzaGlmdFg7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMucGl4ZWwgPSB0aGlzLm1vdXNlUGl4ZWw7XHJcblx0XHRcdFx0dGhpcy5waXhlbCA9IHNldExpbWl0KHRoaXMucGl4ZWwsIHRoaXMubWluICogdGhpcy5zaXplLCB0aGlzLm1heCAqIHRoaXMuc2l6ZSk7XHJcblx0XHRcdFx0aWYgKHRoaXMuaXNGaXhlZCkge1xyXG5cdFx0XHRcdFx0dGhpcy5waXhlbCA9IHN0YXJ0UGl4ZWw7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMuc2V0U3R5bGUoKTtcclxuXHRcdFx0XHR0aGlzLnByZWNlbnQgPSB0aGlzLnBpeGVsIC8gdGhpcy5zaXplO1xyXG5cdFx0XHR9XHJcblx0XHRcdG1vdmVBdChldnQucGFnZVgsIGV2dC5wYWdlWSk7XHJcblxyXG5cdFx0XHRjb25zdCBvbk1vdXNlTW92ZSA9IChtb3ZlRXZ0KSA9PiB7XHJcblx0XHRcdFx0bW92ZUV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdG1vdmVBdChtb3ZlRXZ0LnBhZ2VYLCBtb3ZlRXZ0LiBwYWdlWSk7XHJcblx0XHRcdH1cclxuXHRcdFx0Y29uc3Qgb25Nb3VzZVVwID0gKHVwRXZ0KSA9PiB7XHJcblx0XHRcdFx0dGhpcy5tb3VzZVBpeGVsID0gdGhpcy5waXhlbDtcclxuXHRcdFx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25Nb3VzZVVwKTtcclxuXHRcdFx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUpO1xyXG5cdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25Nb3VzZVVwKTtcclxuXHRcdH1cclxuXHRcdHRoaXMudG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIG9uTW91c2VEb3duKTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCB7c2V0VG9nZ2xlU3R5bGUsIFRvZ2dsZX07XHJcbiIsImltcG9ydCB7aW5pdFZpZXdNYXJrdXAsIG1hcmt1cH0gZnJvbSAnLi9pbml0LXZpZXctbWFya3VwLnRzJztcclxuaW1wb3J0IHtTY2FsZX0gZnJvbSAnLi9zY2FsZS50cyc7XHJcbmltcG9ydCB7RGF0YSwgVmFsdWUsIFRhYlRleHR9IGZyb20gJy4vaW50ZXJmYWNlcy50cyc7XHJcbmltcG9ydCB7c2V0VG9nZ2xlU3R5bGUsIFRvZ2dsZX0gZnJvbSAnLi90b2dnbGUudHMnO1xyXG5pbXBvcnQge3NldE1vdXNlSGFuZGxlciwgcm91bmQsIHRvUHJlY2VudCwgc2V0UmFuZ2VTdHlsZX0gZnJvbSAnLi9mdW5jdGlvbnMudHMnO1xyXG5cclxuY2xhc3MgVmlldyB7XHJcblxyXG5cdHdyYXA6IEhUTUxFbGVtZW50O1xyXG5cdGRhdGE6IERhdGE7XHJcblx0cHJlY2VudDogVmFsdWU7XHJcblx0dGFiVGV4dDogVGFiVGV4dDtcclxuXHRjb250YWluZXI6IEhUTUxFbGVtZW50O1xyXG5cdG1pblRvZ2dsZUVsZW06IEhUTUxFbGVtZW50O1xyXG5cdG1heFRvZ2dsZUVsZW06IEhUTUxFbGVtZW50O1xyXG5cdG1pblRvZ2dsZTogVG9nZ2xlO1xyXG5cdG1heFRvZ2dsZTogVG9nZ2xlO1xyXG5cdG1pblRhYkVsZW06IEhUTUxFbGVtZW50O1xyXG5cdG1heFRhYkVsZW06IEhUTUxFbGVtZW50O1xyXG5cdHJhbmdlRWxlbTogSFRNTEVsZW1lbnQ7XHJcblx0c2l6ZTogbnVtYmVyO1xyXG5cdHNjYWxlOiBzdHJpbmdbXTtcclxuXHJcblx0Y29uc3RydWN0b3IoZGF0YSwgd3JhcCkge1xyXG5cclxuXHRcdHRoaXMud3JhcCA9IHdyYXA7XHJcblx0XHR0aGlzLmRhdGEgPSBkYXRhO1xyXG5cdFx0dGhpcy5wcmVjZW50ID0ge1xyXG5cdFx0XHRtaW46IDAsXHJcblx0XHRcdG1heDogMFxyXG5cdFx0fVxyXG5cdFx0dGhpcy50YWJUZXh0ID0ge1xyXG5cdFx0XHRtaW46ICcnLFxyXG5cdFx0XHRtYXg6ICcnXHJcblx0XHR9XHJcblx0XHR0aGlzLnNjYWxlID0gW107XHJcblx0XHR0aGlzLmluaXRWaWV3KCk7XHJcblx0XHR0aGlzLmNyZWF0ZVRvZ2dsZSgpO1xyXG5cdFx0dGhpcy5vblRvZ2dsZUNvaW5jaWRlbmNlKCk7XHJcblx0XHR0aGlzLmFkZFNjYWxlKCk7XHJcblx0XHR0aGlzLmNoYW5nZVRhYigpO1xyXG5cdFx0dGhpcy5jaGFuZ2VJbnB1dCgpO1xyXG5cdH1cclxuXHJcblx0aW5pdFZpZXcoKSB7XHJcblx0XHRpbml0Vmlld01hcmt1cCh0aGlzLndyYXAsIHRoaXMuZGF0YS5pc1ZlcnRpY2FsKTtcclxuXHRcdHRoaXMuY29udGFpbmVyID0gdGhpcy53cmFwLnF1ZXJ5U2VsZWN0b3IoJy50cy1zbGlkZXJfX2NvbnRhaW5lcicpO1xyXG5cdFx0aWYgKHRoaXMuZGF0YS5pc1ZlcnRpY2FsKSB7XHJcblx0XHRcdHRoaXMuc2l6ZSA9IHRoaXMuY29udGFpbmVyLm9mZnNldEhlaWdodDtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuc2l6ZSA9IHRoaXMuY29udGFpbmVyLm9mZnNldFdpZHRoO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5taW5Ub2dnbGVFbGVtID0gbWFya3VwKHRoaXMuY29udGFpbmVyKS5taW47XHJcblx0XHR0aGlzLm1heFRvZ2dsZUVsZW0gPSBtYXJrdXAodGhpcy5jb250YWluZXIpLm1heDtcclxuXHRcdHRoaXMubWluVGFiRWxlbSA9IG1hcmt1cCh0aGlzLmNvbnRhaW5lcikubWluVGFiO1xyXG5cdFx0dGhpcy5tYXhUYWJFbGVtID0gbWFya3VwKHRoaXMuY29udGFpbmVyKS5tYXhUYWI7XHJcblx0XHR0aGlzLnJhbmdlRWxlbSA9IG1hcmt1cCh0aGlzLmNvbnRhaW5lcikucmFuZ2U7XHJcblxyXG5cdFx0aWYgKCF0aGlzLmRhdGEuaXNSYW5nZSkge1xyXG5cdFx0XHR0aGlzLm1pblRvZ2dsZUVsZW0uaGlkZGVuID0gdHJ1ZTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoIXRoaXMuZGF0YS5pc1RhYikge1xyXG5cdFx0XHR0aGlzLm1pblRhYkVsZW0uaGlkZGVuID0gdHJ1ZTtcclxuXHRcdFx0dGhpcy5tYXhUYWJFbGVtLmhpZGRlbiA9IHRydWU7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRzZXRUYWIoKSB7XHJcblx0XHR0aGlzLm1pblRhYkVsZW0udGV4dENvbnRlbnQgPSB0aGlzLnRhYlRleHQubWluO1xyXG5cdFx0dGhpcy5tYXhUYWJFbGVtLnRleHRDb250ZW50ID0gdGhpcy50YWJUZXh0Lm1heDtcclxuXHR9XHJcblxyXG5cdHNldFJhbmdlKCkge1xyXG5cdFx0c2V0UmFuZ2VTdHlsZSh0aGlzLnJhbmdlRWxlbSwgdGhpcy5taW5Ub2dnbGUucHJlY2VudCAqIHRoaXMuc2l6ZSwgdGhpcy5tYXhUb2dnbGUucHJlY2VudCAqIHRoaXMuc2l6ZSwgdGhpcy5kYXRhLmlzVmVydGljYWwpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlVG9nZ2xlKCkge1xyXG5cdFx0Y29uc3QgbWluVG9nZ2xlUHJlY2VudCA9IHRvUHJlY2VudCh0aGlzLmRhdGEubWluVG9nZ2xlVmFsdWUsIHRoaXMuZGF0YS5taW5WYWx1ZSwgdGhpcy5kYXRhLm1heFZhbHVlKTtcclxuXHRcdGNvbnN0IG1heFRvZ2dsZVByZWNlbnQgPSB0b1ByZWNlbnQodGhpcy5kYXRhLm1heFRvZ2dsZVZhbHVlLCB0aGlzLmRhdGEubWluVmFsdWUsIHRoaXMuZGF0YS5tYXhWYWx1ZSk7XHJcblx0XHR0aGlzLm1pblRvZ2dsZSA9IG5ldyBUb2dnbGUodGhpcy5taW5Ub2dnbGVFbGVtLCBtaW5Ub2dnbGVQcmVjZW50LCB0aGlzLnNpemUsIHRoaXMuZGF0YS5pc1ZlcnRpY2FsKTtcclxuXHRcdHRoaXMubWF4VG9nZ2xlID0gbmV3IFRvZ2dsZSh0aGlzLm1heFRvZ2dsZUVsZW0sIG1heFRvZ2dsZVByZWNlbnQsIHRoaXMuc2l6ZSwgdGhpcy5kYXRhLmlzVmVydGljYWwpO1xyXG5cdFx0dGhpcy5taW5Ub2dnbGUubWluID0gMDtcclxuXHRcdHRoaXMubWF4VG9nZ2xlLm1heCA9IDE7XHJcblx0XHRpZiAoIXRoaXMuZGF0YS5pc1JhbmdlKSB7XHJcblx0XHRcdHRoaXMubWluVG9nZ2xlLnByZWNlbnQgPSAwO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5zZXRSYW5nZSgpO1xyXG5cclxuXHRcdGNvbnN0IG9uTW91c2VNb3ZlID0gKG1vdmVFdnQpID0+IHtcclxuXHRcdFx0dGhpcy5taW5Ub2dnbGUubWF4ID0gdGhpcy5tYXhUb2dnbGUucHJlY2VudDtcclxuXHRcdFx0dGhpcy5tYXhUb2dnbGUubWluID0gdGhpcy5taW5Ub2dnbGUucHJlY2VudDtcclxuXHRcdFx0c2V0UmFuZ2VTdHlsZSh0aGlzLnJhbmdlRWxlbSwgdGhpcy5taW5Ub2dnbGUucHJlY2VudCAqIHRoaXMuc2l6ZSwgdGhpcy5tYXhUb2dnbGUucHJlY2VudCAqIHRoaXMuc2l6ZSwgdGhpcy5kYXRhLmlzVmVydGljYWwpO1xyXG5cdFx0XHR0aGlzLnByZWNlbnQubWluID0gdGhpcy5taW5Ub2dnbGUucHJlY2VudDtcclxuXHRcdFx0dGhpcy5wcmVjZW50Lm1heCA9IHRoaXMubWF4VG9nZ2xlLnByZWNlbnQ7XHJcblx0XHRcdHRoaXMuc2V0VGFiKCk7XHJcblx0XHRcdHRoaXMuY29udGFpbmVyLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdtb3ZlVG9nZ2xlJykpO1xyXG5cdFx0fVxyXG5cdFx0c2V0TW91c2VIYW5kbGVyKGRvY3VtZW50LCBvbk1vdXNlTW92ZSk7XHJcblx0XHR0aGlzLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZXZ0KSA9PiB7XHJcblx0XHRcdGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRvblRvZ2dsZUNvaW5jaWRlbmNlKCkge1xyXG5cdFx0Y29uc3Qgb25Nb3VzZURvd25Db2luY2lkZW5jZSA9IChldnQpID0+IHtcclxuXHRcdFx0bGV0IGNvaW5jaWRlbmNlVG9nZ2xlOiBib29sZWFuID0gZmFsc2U7XHJcblx0XHRcdHRoaXMubWF4VG9nZ2xlRWxlbS5oaWRkZW4gPSB0cnVlO1xyXG5cdFx0XHRjb2luY2lkZW5jZVRvZ2dsZSA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQoZXZ0LmNsaWVudFgsIGV2dC5jbGllbnRZKS5jbGFzc0xpc3QuY29udGFpbnMoJ3RzLXNsaWRlcl9fdG9nZ2xlLS1taW4nKTtcclxuXHRcdFx0dGhpcy5tYXhUb2dnbGVFbGVtLmhpZGRlbiA9IGZhbHNlO1xyXG5cdFx0XHRsZXQgc3RhcnRQaXhlbDogbnVtYmVyO1xyXG5cdFx0XHRzdGFydFBpeGVsID0gdGhpcy5tYXhUb2dnbGUucGl4ZWw7XHJcblxyXG5cdFx0XHRjb25zdCBvbk1vdXNlTW92ZSA9IChtb3ZlRXZ0KSA9PiB7XHJcblx0XHRcdFx0aWYgKGNvaW5jaWRlbmNlVG9nZ2xlKSB7XHJcblx0XHRcdFx0XHR0aGlzLm1pblRvZ2dsZS5tb3VzZVBpeGVsID0gdGhpcy5tYXhUb2dnbGUubW91c2VQaXhlbDtcclxuXHRcdFx0XHRcdHRoaXMubWF4VG9nZ2xlLmlzRml4ZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0dGhpcy5taW5Ub2dnbGUuaXNGaXhlZCA9IHRydWU7XHJcblx0XHRcdFx0XHRpZiAodGhpcy5tYXhUb2dnbGUubW91c2VQaXhlbCA+IHN0YXJ0UGl4ZWwpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5tYXhUb2dnbGUuaXNGaXhlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0XHR0aGlzLm1pblRvZ2dsZS5pc0ZpeGVkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHRoaXMubWF4VG9nZ2xlLmlzRml4ZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHR0aGlzLm1pblRvZ2dsZS5pc0ZpeGVkID0gZmFsc2U7XHJcblx0XHRcdFx0XHRcdHRoaXMubWluVG9nZ2xlLm1vdXNlUGl4ZWwgPSB0aGlzLm1heFRvZ2dsZS5tb3VzZVBpeGVsO1xyXG5cdFx0XHRcdFx0XHR0aGlzLm1pblRvZ2dsZS5waXhlbCA9IHRoaXMubWF4VG9nZ2xlLm1vdXNlUGl4ZWw7XHJcblx0XHRcdFx0XHRcdGlmICh0aGlzLm1pblRvZ2dsZS5waXhlbCA8IDApIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLm1pblRvZ2dsZS5waXhlbCA9IDA7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0dGhpcy5taW5Ub2dnbGUuc2V0U3R5bGUoKTtcclxuXHRcdFx0XHRcdFx0dGhpcy5taW5Ub2dnbGUucHJlY2VudCA9IHRoaXMubWluVG9nZ2xlLnBpeGVsIC8gdGhpcy5zaXplO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0aGlzLm1heFRvZ2dsZS5pc0ZpeGVkID0gZmFsc2U7XHJcblx0XHRcdFx0XHR0aGlzLm1pblRvZ2dsZS5pc0ZpeGVkID0gZmFsc2U7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGNvbnN0IG9uTW91c2VVcCA9ICh1cEV2dCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMubWluVG9nZ2xlLm1vdXNlUGl4ZWwgPSB0aGlzLm1pblRvZ2dsZS5waXhlbDtcclxuXHRcdFx0XHR0aGlzLm1heFRvZ2dsZS5pc0ZpeGVkID0gZmFsc2U7XHJcblx0XHRcdFx0dGhpcy5taW5Ub2dnbGUuaXNGaXhlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbk1vdXNlVXApO1xyXG5cdFx0XHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSk7XHJcblx0XHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbk1vdXNlVXApO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMubWF4VG9nZ2xlRWxlbS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBvbk1vdXNlRG93bkNvaW5jaWRlbmNlKTtcclxuXHR9XHJcblxyXG5cdGFkZFNjYWxlKCkge1xyXG5cdFx0dGhpcy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignaW5pdFNjYWxlJywgKCkgPT4ge1xyXG5cdFx0XHRpZiAodGhpcy5kYXRhLmlzU2NhbGUpIHtcclxuXHRcdFx0XHRjb25zdCBzY2FsZSA9IG5ldyBTY2FsZSh0aGlzLmNvbnRhaW5lciwgdGhpcy5zY2FsZSwgdGhpcy5kYXRhLmlzVmVydGljYWwpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGNoYW5nZVRhYigpIHtcclxuXHRcdHRoaXMuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZVRhYicsICgpID0+IHtcclxuXHRcdFx0dGhpcy5zZXRUYWIoKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0Y2hhbmdlSW5wdXQoKSB7XHJcblx0XHR0aGlzLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2VJbnB1dCcsICgpID0+IHtcclxuXHRcdFx0dGhpcy5taW5Ub2dnbGUucHJlY2VudCA9IHRoaXMucHJlY2VudC5taW47XHJcblx0XHRcdHRoaXMubWF4VG9nZ2xlLnByZWNlbnQgPSB0aGlzLnByZWNlbnQubWF4O1xyXG5cdFx0XHR0aGlzLm1pblRvZ2dsZS5jaGFuZ2VUb2dnbGUoKTtcclxuXHRcdFx0dGhpcy5tYXhUb2dnbGUuY2hhbmdlVG9nZ2xlKCk7XHJcblx0XHRcdHRoaXMuc2V0VGFiKCk7XHJcblx0XHRcdHRoaXMuc2V0UmFuZ2UoKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0cmVtb3ZlTWFya3VwKCkge1xyXG5cdFx0dGhpcy5jb250YWluZXIucmVtb3ZlKCk7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQge1ZpZXd9O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9