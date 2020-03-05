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
    // wrapId: '#ts-slider__wrap-1',
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
// const sliderData2: Data = {
// 	// wrapId: '#ts-slider__wrap-2',
// 	minInputId: 'page__input-21',
// 	maxInputId: 'page__input-22',
// 	isArray: true,
// 	array: ['мало', 'немного', 'средне', 'больше', 'много'],
// 	step: 1,
// 	minValue: 0,
// 	maxValue: 10,
// 	minToggleValue: 2,
// 	maxToggleValue: 8,
// 	isRange: true,
// 	isVertical: true,
// 	isTab: true,
// 	isScale: true,
// 	scaleQuantity: 5
// }
const setDataLimit = (data) => {
    data.minToggleValue = Object(_functions_ts__WEBPACK_IMPORTED_MODULE_0__["setLimit"])(data.minToggleValue, data.minValue, data.maxValue);
    data.maxToggleValue = Object(_functions_ts__WEBPACK_IMPORTED_MODULE_0__["setLimit"])(data.maxToggleValue, data.minValue, data.maxValue);
};
// setDataLimit(sliderData1);
// setDataLimit(sliderData2);



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
            // return change;
        }
        else if (typeof method === 'object' || !method || !window[id]) {
            const init = methods.init.apply(this, arguments);
            // return init;
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
    // const controlWrap: HTMLElement = document.querySelector(wrap);
    // console.log(controlWrap);
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
        // this.changeInput();
        if (!this.data.isArray) {
            this.setInputLimit();
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
    setInputLimit() {
        this.value.min = +this.minInput.value;
        this.value.max = +this.maxInput.value;
        this.value.min = Object(_functions_ts__WEBPACK_IMPORTED_MODULE_0__["setLimit"])(this.value.min, this.data.minValue, this.value.max);
        this.value.max = Object(_functions_ts__WEBPACK_IMPORTED_MODULE_0__["setLimit"])(this.value.max, this.value.min, this.data.maxValue);
        this.minInput.value = this.value.min.toString();
        this.maxInput.value = this.value.max.toString();
        this.tabText.min = Object(_functions_ts__WEBPACK_IMPORTED_MODULE_0__["round"])(this.minInput.value, this.data.step);
        this.tabText.max = Object(_functions_ts__WEBPACK_IMPORTED_MODULE_0__["round"])(this.maxInput.value, this.data.step);
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
                // this.value.min = +this.minInput.value;
                // this.value.max = +this.maxInput.value;
                // this.value.min = setLimit(this.value.min, this.data.minValue, this.value.max);
                // this.value.max = setLimit(this.value.max, this.value.min, this.data.maxValue);
                // this.minInput.value = this.value.min.toString();
                // this.maxInput.value = this.value.max.toString();
                // this.tabText.min = round(this.minInput.value, this.data.step);
                // this.tabText.max = round(this.maxInput.value, this.data.step);
                this.setInputLimit();
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
        this.setValue();
    }
    changeData() {
        this.data = Object.assign(this.data, this.options);
        this.setValue();
        this.init();
        this.onMoveToggle();
        this.onChangeTabText();
        this.onCangeInput();
        // this.model.changeInput();
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
        this.setValueLimit();
        this.initScale();
        this.setToView();
        this.model.precent = this.view.precent;
        this.model.observer.dispatchEvent(new CustomEvent('setPrecent'));
        this.setTabText();
        this.view.setTab();
        // this.setValueLimit();
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
                // this.value.min = +this.model.value.min;
                // this.value.max = +this.model.value.max;
                // this.setToView();
                // this.setToModel();
                this.setValueLimit();
            }
            this.view.container.dispatchEvent(new CustomEvent('changeInput'));
        });
    }
    setValueLimit() {
        this.value.min = +this.model.value.min;
        this.value.max = +this.model.value.max;
        this.setToView();
        this.setToModel();
        // this.view.container.dispatchEvent(new CustomEvent('changeInput'));
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
            let shiftX = evt.clientX - this.toggle.offsetLeft;
            let shiftY = evt.clientY - this.toggle.offsetTop;
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
                // console.log(this.precent);
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
            coincidenceToggle = document.elementFromPoint(evt.pageX, evt.pageY).classList.contains('ts-slider__toggle--min');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Z1bmN0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luaXQtdmlldy1tYXJrdXAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9wcmVzZW50ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjYWxlLnRzIiwid2VicGFjazovLy8uL3NyYy90b2dnbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUF3QztBQUd4QyxNQUFNLFdBQVcsR0FBUztJQUN6QixnQ0FBZ0M7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LE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztZQUMxQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztZQUMxQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQzlCLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDOUIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2QsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2pCLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELFlBQVk7UUFDWCxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3pCLENBQUM7Q0FDRDtBQUVhIiwiZmlsZSI6InRzLXNsaWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiaW1wb3J0IHtzZXRMaW1pdH0gZnJvbSAnLi9mdW5jdGlvbnMudHMnO1xyXG5pbXBvcnQge0RhdGF9IGZyb20gJy4vaW50ZXJmYWNlcy50cyc7XHJcblxyXG5jb25zdCBkZWZhdWx0RGF0YTogRGF0YSA9IHtcclxuXHQvLyB3cmFwSWQ6ICcjdHMtc2xpZGVyX193cmFwLTEnLFxyXG5cdG1pbklucHV0SWQ6ICd0cy1zbGlkZXJfX21pbi1pbnB1dCcsXHJcblx0bWF4SW5wdXRJZDogJ3RzLXNsaWRlcl9fbWF4LWlucHV0JyxcclxuXHRpc0FycmF5OiBmYWxzZSxcclxuXHRhcnJheTogW10sXHJcblx0c3RlcDogMSxcclxuXHRtaW5WYWx1ZTogMCxcclxuXHRtYXhWYWx1ZTogMTAwLFxyXG5cdG1pblRvZ2dsZVZhbHVlOiAyNSxcclxuXHRtYXhUb2dnbGVWYWx1ZTogNzUsXHJcblx0aXNSYW5nZTogdHJ1ZSxcclxuXHRpc1ZlcnRpY2FsOiBmYWxzZSxcclxuXHRpc1RhYjogdHJ1ZSxcclxuXHRpc1NjYWxlOiB0cnVlLFxyXG5cdHNjYWxlUXVhbnRpdHk6IDRcclxufVxyXG4vLyBjb25zdCBzbGlkZXJEYXRhMjogRGF0YSA9IHtcclxuLy8gXHQvLyB3cmFwSWQ6ICcjdHMtc2xpZGVyX193cmFwLTInLFxyXG4vLyBcdG1pbklucHV0SWQ6ICdwYWdlX19pbnB1dC0yMScsXHJcbi8vIFx0bWF4SW5wdXRJZDogJ3BhZ2VfX2lucHV0LTIyJyxcclxuLy8gXHRpc0FycmF5OiB0cnVlLFxyXG4vLyBcdGFycmF5OiBbJ9C80LDQu9C+JywgJ9C90LXQvNC90L7Qs9C+JywgJ9GB0YDQtdC00L3QtScsICfQsdC+0LvRjNGI0LUnLCAn0LzQvdC+0LPQviddLFxyXG4vLyBcdHN0ZXA6IDEsXHJcbi8vIFx0bWluVmFsdWU6IDAsXHJcbi8vIFx0bWF4VmFsdWU6IDEwLFxyXG4vLyBcdG1pblRvZ2dsZVZhbHVlOiAyLFxyXG4vLyBcdG1heFRvZ2dsZVZhbHVlOiA4LFxyXG4vLyBcdGlzUmFuZ2U6IHRydWUsXHJcbi8vIFx0aXNWZXJ0aWNhbDogdHJ1ZSxcclxuLy8gXHRpc1RhYjogdHJ1ZSxcclxuLy8gXHRpc1NjYWxlOiB0cnVlLFxyXG4vLyBcdHNjYWxlUXVhbnRpdHk6IDVcclxuLy8gfVxyXG5cclxuY29uc3Qgc2V0RGF0YUxpbWl0ID0gKGRhdGE6IERhdGEpID0+IHtcclxuXHRkYXRhLm1pblRvZ2dsZVZhbHVlID0gc2V0TGltaXQoZGF0YS5taW5Ub2dnbGVWYWx1ZSwgZGF0YS5taW5WYWx1ZSwgZGF0YS5tYXhWYWx1ZSk7XHJcblx0ZGF0YS5tYXhUb2dnbGVWYWx1ZSA9IHNldExpbWl0KGRhdGEubWF4VG9nZ2xlVmFsdWUsIGRhdGEubWluVmFsdWUsIGRhdGEubWF4VmFsdWUpO1xyXG59XHJcblxyXG4vLyBzZXREYXRhTGltaXQoc2xpZGVyRGF0YTEpO1xyXG4vLyBzZXREYXRhTGltaXQoc2xpZGVyRGF0YTIpO1xyXG5cclxuZXhwb3J0IHtzZXREYXRhTGltaXQsIGRlZmF1bHREYXRhfTsiLCJjb25zdCBzZXRNb3VzZUhhbmRsZXIgPSAoZWxlbSwgb25Nb3ZlLCBvbkRvdm4/LCBvblVwPykgPT4ge1xyXG5cclxuXHRjb25zdCBvbk1vdXNlRG93biA9IChldnQpID0+IHtcclxuXHRcdGlmIChvbkRvdm4pIHtcclxuXHRcdFx0b25Eb3ZuKGV2dCk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdGNvbnN0IG9uTW91c2VNb3ZlID0gKG1vdmVFdnQpID0+IHtcclxuXHRcdFx0b25Nb3ZlKG1vdmVFdnQpO1xyXG5cdFx0fVxyXG5cdFx0Y29uc3Qgb25Nb3VzZVVwID0gKHVwRXZ0KSA9PiB7XHJcblx0XHRcdGlmIChvblVwKSB7XHJcblx0XHRcdFx0b25VcCh1cEV2dCk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uTW91c2VVcCk7XHJcblx0XHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKTtcclxuXHRcdH1cclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKTtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbk1vdXNlVXApO1xyXG5cdH1cclxuXHJcblx0ZWxlbS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBvbk1vdXNlRG93bik7XHJcbn1cclxuXHJcbmNvbnN0IHJvdW5kID0gKHZhbHVlOiBudW1iZXIsIHN0ZXA6IG51bWJlcikgPT4ge1xyXG5cdGNvbnN0IHByZWNpc2lvbiA9IHggPT4gKyggKHgudG9TdHJpbmcoKS5pbmNsdWRlcygnLicpKSA/ICh4LnRvU3RyaW5nKCkuc3BsaXQoJy4nKS5wb3AoKS5sZW5ndGgpIDogKDApICk7XHJcblx0bGV0IHJvdW5kZWQ6IHN0cmluZyA9IChNYXRoLnJvdW5kKHZhbHVlIC8gc3RlcCkgKiBzdGVwKS50b0ZpeGVkKHByZWNpc2lvbihzdGVwKSk7XHJcblx0cmV0dXJuIHJvdW5kZWQ7XHJcbn1cclxuXHJcbmNvbnN0IHNldExpbWl0ID0gKHZhbHVlOiBudW1iZXIsIG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcikgPT4ge1xyXG5cdGlmICh2YWx1ZSA+IG1heCkge1xyXG5cdFx0dmFsdWUgPSBtYXg7XHJcblx0fSBlbHNlIGlmICh2YWx1ZSA8IG1pbikge1xyXG5cdFx0dmFsdWUgPSBtaW47XHJcblx0fVxyXG5cdHJldHVybiB2YWx1ZTtcclxufVxyXG5cclxuY29uc3QgdG9QcmVjZW50ID0gKHZhbHVlOiBudW1iZXIsIG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcikgPT4gKHZhbHVlIC0gbWluKSAvIChtYXggLSBtaW4pO1xyXG5cclxuY29uc3QgdG9WYWx1ZSA9ICh2YWx1ZTogbnVtYmVyLCBtaW46IG51bWJlciwgbWF4OiBudW1iZXIpID0+IChtaW4gKyAobWF4IC0gbWluKSAqIHZhbHVlKTtcclxuXHJcbmNvbnN0IHNldFJhbmdlU3R5bGUgPSAocmFuZ2U6IEhUTUxFbGVtZW50LCBtaW46IG51bWJlciwgbWF4OiBudW1iZXIsIGlzVmVydGljYWw6IGJvb2xlYW4pID0+IHtcclxuXHRpZiAoaXNWZXJ0aWNhbCkge1xyXG5cdFx0cmFuZ2Uuc3R5bGUudG9wID0gYCR7bWlufXB4YDtcclxuXHRcdHJhbmdlLnN0eWxlLmhlaWdodCA9IGAkeyhtYXggLSBtaW4pfXB4YDtcclxuXHR9IGVsc2Uge1xyXG5cdFx0cmFuZ2Uuc3R5bGUubGVmdCA9IGAke21pbn1weGA7XHJcblx0XHRyYW5nZS5zdHlsZS53aWR0aCA9IGAkeyhtYXggLSBtaW4pfXB4YDtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCB7c2V0TW91c2VIYW5kbGVyLCByb3VuZCwgc2V0TGltaXQsIHRvUHJlY2VudCwgdG9WYWx1ZSwgc2V0UmFuZ2VTdHlsZX07IiwiaW1wb3J0IHtQcmVzZW50ZXJ9IGZyb20gJy4vcHJlc2VudGVyLnRzJztcclxuXHJcbihmdW5jdGlvbigkKSB7XHJcblx0Y29uc3QgbWV0aG9kcyA9IHtcclxuXHRcdGluaXQ6IGZ1bmN0aW9uKG9wdGlvbnMpIHtcclxuXHRcdFx0Y29uc3QgaWQ6IHN0cmluZyA9ICcjJyArIHRoaXMucHJvcCgnaWQnKTtcclxuXHRcdFx0Y29uc3Qgd3JhcDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGlkKTtcclxuXHRcdFx0Y29uc3QgcHJlc2VudGVyID0gbmV3IFByZXNlbnRlcihvcHRpb25zLCB3cmFwKTtcclxuXHRcdFx0d2luZG93W2lkXSA9IHByZXNlbnRlcjtcclxuXHRcdH0sXHJcblx0XHRjaGFuZ2U6IGZ1bmN0aW9uKG9wdGlvbnMpIHtcclxuXHRcdFx0Y29uc3QgaWQ6IHN0cmluZyA9ICcjJyArIHRoaXMucHJvcCgnaWQnKTtcclxuXHRcdFx0Y29uc3QgcHJlc2VudGVyID0gd2luZG93W2lkXTtcclxuXHRcdFx0cHJlc2VudGVyLm9wdGlvbnMgPSBvcHRpb25zO1xyXG5cdFx0XHRwcmVzZW50ZXIuY2hhbmdlRGF0YSgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0JC5mbi50c1NsaWRlciA9IGZ1bmN0aW9uKG9wdGlvbnMsIG1ldGhvZD8pIHtcclxuXHRcdGNvbnN0IGlkOiBzdHJpbmcgPSAnIycgKyB0aGlzLnByb3AoJ2lkJyk7XHJcblx0XHRpZiAoIG1ldGhvZCA9PT0gJ2NoYW5nZScgJiYgd2luZG93W2lkXSApIHtcclxuXHRcdFx0Y29uc3QgY2hhbmdlID0gbWV0aG9kcy5jaGFuZ2UuYXBwbHkoIHRoaXMsIGFyZ3VtZW50cyApO1xyXG5cdFx0XHQvLyByZXR1cm4gY2hhbmdlO1xyXG5cdFx0fSBlbHNlIGlmICggdHlwZW9mIG1ldGhvZCA9PT0gJ29iamVjdCcgfHwgISBtZXRob2QgfHwgISB3aW5kb3dbaWRdICkge1xyXG5cdFx0XHRjb25zdCBpbml0ID0gbWV0aG9kcy5pbml0LmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKTtcclxuXHRcdFx0Ly8gcmV0dXJuIGluaXQ7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHQkLmVycm9yKCAn0JzQtdGC0L7QtCDRgSDQuNC80LXQvdC10LwgJyArICBtZXRob2QgKyAnINC90LUg0YHRg9GJ0LXRgdGC0LLRg9C10YIg0LTQu9GPIGpRdWVyeS50c1NsaWRlcicgKTtcclxuXHRcdH0gXHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcbn0pKGpRdWVyeSk7XHJcblxyXG4iLCJjb25zdCBpbml0Vmlld01hcmt1cCA9IChjb250cm9sV3JhcDogSFRNTEVsZW1lbnQsIHZlcnRpY2FsOiBib29sZWFuKSA9PiB7XHJcblx0Y29uc3QgY29udG9sTWFya3VwOiBzdHJpbmcgPSBgPGRpdiBjbGFzcz1cInRzLXNsaWRlcl9fY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidHMtc2xpZGVyX19iYXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRzLXNsaWRlcl9fdG9nZ2xlIHRzLXNsaWRlcl9fdG9nZ2xlLS1taW5cIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidHMtc2xpZGVyX190b2dnbGUtdmFsdWUgdHMtc2xpZGVyX190b2dnbGUtdmFsdWUtLW1pblwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRzLXNsaWRlcl9fdG9nZ2xlIHRzLXNsaWRlcl9fdG9nZ2xlLS1tYXhcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidHMtc2xpZGVyX190b2dnbGUtdmFsdWUgdHMtc2xpZGVyX190b2dnbGUtdmFsdWUtLW1heFwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRzLXNsaWRlcl9fcmFuZ2VcIj48L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PmA7XHJcblx0Ly8gY29uc3QgY29udHJvbFdyYXA6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih3cmFwKTtcclxuICAvLyBjb25zb2xlLmxvZyhjb250cm9sV3JhcCk7XHJcblx0Y29udHJvbFdyYXAuaW5uZXJIVE1MID0gY29udG9sTWFya3VwO1xyXG4gIGNvbnN0IGRpdiA9IGNvbnRyb2xXcmFwLnF1ZXJ5U2VsZWN0b3JBbGwoJ2RpdicpO1xyXG4gIGlmICh2ZXJ0aWNhbCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaXYubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgZmlyc3RDbGFzczogc3RyaW5nID0gZGl2W2ldLmNsYXNzTGlzdFswXTtcclxuICAgICAgY29uc3QgdmVydGljYWxDbGFzczogc3RyaW5nID0gZmlyc3RDbGFzcyArICctLXZlcnRpY2FsJztcclxuICAgICAgZGl2W2ldLmNsYXNzTGlzdC5hZGQodmVydGljYWxDbGFzcyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBtYXJrdXAgPSAoc2xpZGVyOiBIVE1MRWxlbWVudCkgPT4ge1xyXG4gIGludGVyZmFjZSBNYXJrdXAge1xyXG4gICAgbWluOiBIVE1MRWxlbWVudDtcclxuICAgIG1heDogSFRNTEVsZW1lbnQ7XHJcbiAgICByYW5nZTogSFRNTEVsZW1lbnQ7XHJcbiAgICBiYXI6IEhUTUxFbGVtZW50O1xyXG4gICAgbWluVGFiOiBIVE1MRWxlbWVudDtcclxuICAgIG1heFRhYjogSFRNTEVsZW1lbnQ7XHJcbiAgfVxyXG4gIGxldCBtYXJrdXA6IE1hcmt1cCA9IHsgIFxyXG4gICAgIG1pbjogc2xpZGVyLnF1ZXJ5U2VsZWN0b3IoJy50cy1zbGlkZXJfX3RvZ2dsZS0tbWluJyksXHJcbiAgICAgbWF4OiBzbGlkZXIucXVlcnlTZWxlY3RvcignLnRzLXNsaWRlcl9fdG9nZ2xlLS1tYXgnKSxcclxuICAgICByYW5nZTogc2xpZGVyLnF1ZXJ5U2VsZWN0b3IoJy50cy1zbGlkZXJfX3JhbmdlJyksXHJcbiAgICAgYmFyOiBzbGlkZXIucXVlcnlTZWxlY3RvcignLnRzLXNsaWRlcl9fYmFyJyksXHJcbiAgICAgbWluVGFiOiBzbGlkZXIucXVlcnlTZWxlY3RvcignLnRzLXNsaWRlcl9fdG9nZ2xlLXZhbHVlLS1taW4nKSxcclxuICAgICBtYXhUYWI6IHNsaWRlci5xdWVyeVNlbGVjdG9yKCcudHMtc2xpZGVyX190b2dnbGUtdmFsdWUtLW1heCcpXHJcbiAgfVxyXG4gIHJldHVybiBtYXJrdXA7XHJcbn1cclxuXHJcbmV4cG9ydCB7aW5pdFZpZXdNYXJrdXAsIG1hcmt1cH07IiwiaW1wb3J0IHtEYXRhLCBWYWx1ZSwgVGFiVGV4dH0gZnJvbSAnLi9pbnRlcmZhY2VzLnRzJztcclxuaW1wb3J0IHtzZXRNb3VzZUhhbmRsZXIsIHJvdW5kLCBzZXRMaW1pdH0gZnJvbSAnLi9mdW5jdGlvbnMudHMnO1xyXG5cclxuY2xhc3MgTW9kZWwge1xyXG5cclxuXHRkYXRhOiBEYXRhO1xyXG5cdG1pbklucHV0OiBhbnk7XHJcblx0bWF4SW5wdXQ6IGFueTtcclxuXHR2YWx1ZTogVmFsdWU7XHJcblx0cHJlY2VudDogVmFsdWU7XHJcblx0dGFiVGV4dDogVGFiVGV4dDtcclxuXHRvYnNlcnZlcjogSFRNTEVsZW1lbnQ7XHJcblx0bWluOiBudW1iZXI7XHJcblx0bWF4OiBudW1iZXI7XHJcblx0c2NhbGU6IHN0cmluZ1tdO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihkYXRhKSB7XHRcdFxyXG5cdFx0dGhpcy5kYXRhID0gZGF0YTtcclxuXHRcdHRoaXMudGFiVGV4dCA9IHtcclxuXHRcdFx0bWluOiAnJyxcclxuXHRcdFx0bWF4OiAnJ1xyXG5cdFx0fVxyXG5cdFx0dGhpcy52YWx1ZSA9IHtcclxuXHRcdFx0bWluOiAwLFxyXG5cdFx0XHRtYXg6IDBcclxuXHRcdH1cclxuXHRcdHRoaXMucHJlY2VudCA9IHtcclxuXHRcdFx0bWluOiAwLFxyXG5cdFx0XHRtYXg6IDBcclxuXHRcdH1cclxuXHRcdHRoaXMuc2NhbGUgPSBbXTtcclxuXHRcdHRoaXMub2JzZXJ2ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdFdmVudCcpO1xyXG5cdFx0dGhpcy5pbml0KCk7XHJcblx0XHR0aGlzLnNldFNjYWxlKCk7XHJcblx0XHR0aGlzLmFkZExpc3RlbmVyKCk7XHJcblx0XHR0aGlzLmNoYW5nZUlucHV0KCk7XHJcblx0fVxyXG5cclxuXHRzZXRJbnB1dCgpIHtcclxuXHRcdHRoaXMubWluSW5wdXQudmFsdWUgPSB0aGlzLnRhYlRleHQubWluO1xyXG5cdFx0dGhpcy5tYXhJbnB1dC52YWx1ZSA9IHRoaXMudGFiVGV4dC5tYXg7XHJcblx0XHRpZiAoIXRoaXMuZGF0YS5pc1JhbmdlKSB7XHJcblx0XHRcdGlmICh0aGlzLmRhdGEuaXNBcnJheSkge1xyXG5cdFx0XHRcdHRoaXMubWluSW5wdXQudmFsdWUgPSB0aGlzLmRhdGEuYXJyYXlbMF07XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5taW5JbnB1dC52YWx1ZSA9IHRoaXMuZGF0YS5taW5WYWx1ZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0Ly8gdGhpcy5jaGFuZ2VJbnB1dCgpO1xyXG5cdFx0aWYgKCF0aGlzLmRhdGEuaXNBcnJheSkge1xyXG5cdFx0XHR0aGlzLnNldElucHV0TGltaXQoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHNldEFycmF5VmFsdWUoKSB7XHJcblx0XHRsZXQgbWluID0gTWF0aC5yb3VuZCh0aGlzLnByZWNlbnQubWluICogKHRoaXMuZGF0YS5hcnJheS5sZW5ndGggLSAxKSk7XHJcblx0XHRsZXQgbWF4ID0gTWF0aC5yb3VuZCh0aGlzLnByZWNlbnQubWF4ICogKHRoaXMuZGF0YS5hcnJheS5sZW5ndGggLSAxKSk7XHJcblx0XHR0aGlzLnRhYlRleHQubWluID0gdGhpcy5kYXRhLmFycmF5W21pbl07XHJcblx0XHR0aGlzLnRhYlRleHQubWF4ID0gdGhpcy5kYXRhLmFycmF5W21heF07XHJcblx0XHR0aGlzLnNldElucHV0KCk7XHJcblx0fVxyXG5cclxuXHRpbml0KCkge1xyXG5cdFx0aWYgKHRoaXMuZGF0YS5pc0FycmF5KSB7XHJcblx0XHRcdHRoaXMub2JzZXJ2ZXIuYWRkRXZlbnRMaXN0ZW5lcignc2V0UHJlY2VudCcsICgpID0+IHtcclxuXHRcdFx0XHR0aGlzLnNldEFycmF5VmFsdWUoKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLnRhYlRleHQubWluID0gcm91bmQodGhpcy5kYXRhLm1pblRvZ2dsZVZhbHVlLCB0aGlzLmRhdGEuc3RlcCk7XHJcblx0XHRcdHRoaXMudGFiVGV4dC5tYXggPSByb3VuZCh0aGlzLmRhdGEubWF4VG9nZ2xlVmFsdWUsIHRoaXMuZGF0YS5zdGVwKTtcclxuXHRcdH1cclxuXHRcdHRoaXMubWluSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIHRoaXMuZGF0YS5taW5JbnB1dElkKTtcclxuXHRcdHRoaXMubWF4SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIHRoaXMuZGF0YS5tYXhJbnB1dElkKTtcclxuXHRcdHRoaXMuc2V0SW5wdXQoKTtcclxuXHR9XHJcblxyXG5cdHNldFNjYWxlKCkge1xyXG5cdFx0aWYgKHRoaXMuZGF0YS5pc0FycmF5KSB7XHJcblx0XHRcdGlmICh0aGlzLmRhdGEuaXNTY2FsZSkge1xyXG5cdFx0XHRcdHRoaXMuc2NhbGUgPSB0aGlzLmRhdGEuYXJyYXk7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmICh0aGlzLmRhdGEuaXNTY2FsZSkge1xyXG5cdFx0XHRcdGxldCBxdWFudGl0eSA9IHRoaXMuZGF0YS5zY2FsZVF1YW50aXR5O1xyXG5cdFx0XHRcdGlmIChxdWFudGl0eSA8IDIpIHtcclxuXHRcdFx0XHRcdHF1YW50aXR5ID0gMjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBxdWFudGl0eTsgaSsrKSB7XHJcblx0XHRcdFx0XHRsZXQgdGV4dFZhbHVlOiBudW1iZXIgPSBNYXRoLnJvdW5kKCh0aGlzLmRhdGEubWluVmFsdWUgKyAodGhpcy5kYXRhLm1heFZhbHVlIC0gdGhpcy5kYXRhLm1pblZhbHVlKSAvIChxdWFudGl0eSAtIDEpICogaSkgLyB0aGlzLmRhdGEuc3RlcCkgKiB0aGlzLmRhdGEuc3RlcDtcclxuXHRcdFx0XHRcdGxldCB0ZXh0OiBzdHJpbmcgPSByb3VuZCh0ZXh0VmFsdWUsIHRoaXMuZGF0YS5zdGVwKTtcclxuXHRcdFx0XHRcdHRoaXMuc2NhbGUucHVzaCh0ZXh0KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGFkZExpc3RlbmVyKCkge1xyXG5cdFx0dGhpcy5vYnNlcnZlci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2VWYWx1ZScsICgpID0+IHtcclxuXHRcdFx0aWYgKHRoaXMuZGF0YS5pc0FycmF5KSB7XHJcblx0XHRcdFx0dGhpcy5zZXRBcnJheVZhbHVlKCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy50YWJUZXh0Lm1pbiA9IHJvdW5kKHRoaXMudmFsdWUubWluLCB0aGlzLmRhdGEuc3RlcCk7XHJcblx0XHRcdFx0dGhpcy50YWJUZXh0Lm1heCA9IHJvdW5kKHRoaXMudmFsdWUubWF4LCB0aGlzLmRhdGEuc3RlcCk7XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5zZXRJbnB1dCgpO1xyXG5cdFx0XHR0aGlzLm9ic2VydmVyLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdjaGFuZ2VUYWJUZXh0JykpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRzZXRJbnB1dExpbWl0KCkge1xyXG5cdFx0dGhpcy52YWx1ZS5taW4gPSArdGhpcy5taW5JbnB1dC52YWx1ZTtcclxuXHRcdHRoaXMudmFsdWUubWF4ID0gK3RoaXMubWF4SW5wdXQudmFsdWU7XHJcblx0XHR0aGlzLnZhbHVlLm1pbiA9IHNldExpbWl0KHRoaXMudmFsdWUubWluLCB0aGlzLmRhdGEubWluVmFsdWUsIHRoaXMudmFsdWUubWF4KTtcclxuXHRcdHRoaXMudmFsdWUubWF4ID0gc2V0TGltaXQodGhpcy52YWx1ZS5tYXgsIHRoaXMudmFsdWUubWluLCB0aGlzLmRhdGEubWF4VmFsdWUpO1xyXG5cdFx0dGhpcy5taW5JbnB1dC52YWx1ZSA9IHRoaXMudmFsdWUubWluLnRvU3RyaW5nKCk7XHJcblx0XHR0aGlzLm1heElucHV0LnZhbHVlID0gdGhpcy52YWx1ZS5tYXgudG9TdHJpbmcoKTtcclxuXHRcdHRoaXMudGFiVGV4dC5taW4gPSByb3VuZCh0aGlzLm1pbklucHV0LnZhbHVlLCB0aGlzLmRhdGEuc3RlcCk7XHJcblx0XHR0aGlzLnRhYlRleHQubWF4ID0gcm91bmQodGhpcy5tYXhJbnB1dC52YWx1ZSwgdGhpcy5kYXRhLnN0ZXApO1xyXG5cdH1cclxuXHJcblx0Y2hhbmdlSW5wdXQoKSB7XHJcblx0XHRjb25zdCBvbkJsdXIgPSAoKSA9PiB7XHJcblx0XHRcdGlmICh0aGlzLmRhdGEuaXNBcnJheSkge1xyXG5cdFx0XHRcdGNvbnN0IGluQXJyYXkgPSAodmFsdWUsIGxpbWl0KSA9PiB7XHJcblx0XHRcdFx0XHRpZiAodGhpcy5kYXRhLmFycmF5LmluY2x1ZGVzKHZhbHVlKSkge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gdmFsdWU7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gbGltaXQ7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMubWluSW5wdXQudmFsdWUgPSBpbkFycmF5KHRoaXMubWluSW5wdXQudmFsdWUsIHRoaXMuZGF0YS5hcnJheVswXSk7XHJcblx0XHRcdFx0dGhpcy5tYXhJbnB1dC52YWx1ZSA9IGluQXJyYXkodGhpcy5tYXhJbnB1dC52YWx1ZSwgdGhpcy5kYXRhLmFycmF5W3RoaXMuZGF0YS5hcnJheS5sZW5ndGggLSAxXSk7XHJcblx0XHRcdFx0dGhpcy52YWx1ZS5taW4gPSB0aGlzLmRhdGEuYXJyYXkuaW5kZXhPZih0aGlzLm1pbklucHV0LnZhbHVlKTtcclxuXHRcdFx0XHR0aGlzLnZhbHVlLm1heCA9IHRoaXMuZGF0YS5hcnJheS5pbmRleE9mKHRoaXMubWF4SW5wdXQudmFsdWUpO1xyXG5cdFx0XHRcdGlmICh0aGlzLnZhbHVlLm1pbiA+IHRoaXMudmFsdWUubWF4KSB7XHJcblx0XHRcdFx0XHR0aGlzLnZhbHVlLm1pbiA9IHRoaXMudmFsdWUubWF4O1xyXG5cdFx0XHRcdFx0dGhpcy5taW5JbnB1dC52YWx1ZSA9IHRoaXMubWF4SW5wdXQudmFsdWU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMudGFiVGV4dC5taW4gPSB0aGlzLm1pbklucHV0LnZhbHVlO1xyXG5cdFx0XHRcdHRoaXMudGFiVGV4dC5tYXggPSB0aGlzLm1heElucHV0LnZhbHVlO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdC8vIHRoaXMudmFsdWUubWluID0gK3RoaXMubWluSW5wdXQudmFsdWU7XHJcblx0XHRcdFx0Ly8gdGhpcy52YWx1ZS5tYXggPSArdGhpcy5tYXhJbnB1dC52YWx1ZTtcclxuXHRcdFx0XHQvLyB0aGlzLnZhbHVlLm1pbiA9IHNldExpbWl0KHRoaXMudmFsdWUubWluLCB0aGlzLmRhdGEubWluVmFsdWUsIHRoaXMudmFsdWUubWF4KTtcclxuXHRcdFx0XHQvLyB0aGlzLnZhbHVlLm1heCA9IHNldExpbWl0KHRoaXMudmFsdWUubWF4LCB0aGlzLnZhbHVlLm1pbiwgdGhpcy5kYXRhLm1heFZhbHVlKTtcclxuXHRcdFx0XHQvLyB0aGlzLm1pbklucHV0LnZhbHVlID0gdGhpcy52YWx1ZS5taW4udG9TdHJpbmcoKTtcclxuXHRcdFx0XHQvLyB0aGlzLm1heElucHV0LnZhbHVlID0gdGhpcy52YWx1ZS5tYXgudG9TdHJpbmcoKTtcclxuXHRcdFx0XHQvLyB0aGlzLnRhYlRleHQubWluID0gcm91bmQodGhpcy5taW5JbnB1dC52YWx1ZSwgdGhpcy5kYXRhLnN0ZXApO1xyXG5cdFx0XHRcdC8vIHRoaXMudGFiVGV4dC5tYXggPSByb3VuZCh0aGlzLm1heElucHV0LnZhbHVlLCB0aGlzLmRhdGEuc3RlcCk7XHJcblx0XHRcdFx0dGhpcy5zZXRJbnB1dExpbWl0KCk7XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5vYnNlcnZlci5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnY2hhbmdlSW5wdXQnKSk7XHJcblx0XHR9XHJcblx0XHR0aGlzLm1pbklucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBvbkJsdXIpO1xyXG5cdFx0dGhpcy5tYXhJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgb25CbHVyKTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCB7TW9kZWx9OyIsImltcG9ydCB7Vmlld30gZnJvbSAnLi92aWV3LnRzJztcclxuaW1wb3J0IHtEYXRhLCBWYWx1ZSwgVGFiVGV4dH0gZnJvbSAnLi9pbnRlcmZhY2VzLnRzJztcclxuaW1wb3J0IHtNb2RlbH0gZnJvbSAnLi9tb2RlbC50cyc7XHJcbmltcG9ydCB7c2V0TW91c2VIYW5kbGVyLCByb3VuZCwgc2V0UmFuZ2VTdHlsZSwgdG9QcmVjZW50LCB0b1ZhbHVlfSBmcm9tICcuL2Z1bmN0aW9ucy50cyc7XHJcbmltcG9ydCB7bWFya3VwfSBmcm9tICcuL2luaXQtdmlldy1tYXJrdXAudHMnO1xyXG5pbXBvcnQge2RlZmF1bHREYXRhfSBmcm9tICcuL2RhdGEudHMnO1xyXG5cclxuY2xhc3MgUHJlc2VudGVyIHtcclxuXHJcblx0d3JhcDogSFRNTEVsZW1lbnQ7XHJcblx0ZGF0YTogRGF0YTtcclxuXHRvcHRpb25zOiBhbnk7XHJcblx0dmlldzogVmlldztcclxuXHRtb2RlbDogTW9kZWw7XHJcblx0bWF4OiBudW1iZXI7XHJcblx0bWluOiBudW1iZXI7XHJcblx0dmFsdWU6IFZhbHVlO1xyXG5cdG1vZGVsVGFiVGV4dDogVGFiVGV4dDtcclxuXHJcblx0Y29uc3RydWN0b3Iob3B0aW9ucywgd3JhcCkge1xyXG5cdFx0XHJcblx0XHR0aGlzLndyYXAgPSB3cmFwO1xyXG5cdFx0dGhpcy5vcHRpb25zID0gb3B0aW9ucztcclxuXHRcdHRoaXMuY3JlYXRlRGF0YSgpO1xyXG5cdFx0dGhpcy5pbml0KCk7XHJcblx0XHR0aGlzLm9uTW92ZVRvZ2dsZSgpO1xyXG5cdFx0dGhpcy5vbkNoYW5nZVRhYlRleHQoKTtcclxuXHRcdHRoaXMub25DYW5nZUlucHV0KCk7XHJcblx0fVxyXG5cclxuXHRzZXRWYWx1ZSgpIHtcclxuXHRcdHRoaXMudmFsdWUgPSB7XHJcblx0XHRcdG1pbjogdGhpcy5kYXRhLm1pblRvZ2dsZVZhbHVlLFxyXG5cdFx0XHRtYXg6IHRoaXMuZGF0YS5tYXhUb2dnbGVWYWx1ZVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Y3JlYXRlRGF0YSgpIHtcclxuXHRcdGZ1bmN0aW9uIGRlZXBDbG9uZShvYmopIHtcclxuXHRcdCAgY29uc3QgY2xPYmogPSB7fTtcclxuXHRcdCAgZm9yKGNvbnN0IGkgaW4gb2JqKSB7XHJcblx0XHQgICAgaWYgKG9ialtpXSBpbnN0YW5jZW9mIE9iamVjdCkge1xyXG5cdFx0ICAgICAgY2xPYmpbaV0gPSBkZWVwQ2xvbmUob2JqW2ldKTtcclxuXHRcdCAgICAgIGNvbnRpbnVlO1xyXG5cdFx0ICAgIH1cclxuXHRcdCAgICBjbE9ialtpXSA9IG9ialtpXTtcclxuXHRcdCAgfVxyXG5cdFx0ICByZXR1cm4gY2xPYmo7XHJcblx0XHR9XHJcblx0XHRjb25zdCBkYXRhQ2xvbmUgPSBkZWVwQ2xvbmUoZGVmYXVsdERhdGEpO1xyXG5cdFx0dGhpcy5kYXRhID0gT2JqZWN0LmFzc2lnbihkYXRhQ2xvbmUsIHRoaXMub3B0aW9ucyk7XHJcblx0XHR0aGlzLnNldFZhbHVlKCk7XHRcdFxyXG5cdH1cclxuXHJcblx0Y2hhbmdlRGF0YSgpIHtcclxuXHRcdHRoaXMuZGF0YSA9IE9iamVjdC5hc3NpZ24odGhpcy5kYXRhLCB0aGlzLm9wdGlvbnMpO1xyXG5cdFx0dGhpcy5zZXRWYWx1ZSgpO1xyXG5cdFx0dGhpcy5pbml0KCk7XHJcblx0XHR0aGlzLm9uTW92ZVRvZ2dsZSgpO1xyXG5cdFx0dGhpcy5vbkNoYW5nZVRhYlRleHQoKTtcclxuXHRcdHRoaXMub25DYW5nZUlucHV0KCk7XHJcblx0XHQvLyB0aGlzLm1vZGVsLmNoYW5nZUlucHV0KCk7XHJcblx0fVxyXG5cclxuXHRzZXRUYWJUZXh0KCkge1xyXG5cdFx0dGhpcy52aWV3LnRhYlRleHQubWluID0gdGhpcy5tb2RlbC50YWJUZXh0Lm1pbjtcclxuXHRcdHRoaXMudmlldy50YWJUZXh0Lm1heCA9IHRoaXMubW9kZWwudGFiVGV4dC5tYXg7XHJcblx0fVxyXG5cclxuXHRpbml0U2NhbGUoKSB7XHJcblx0XHR0aGlzLnZpZXcuc2NhbGUgPSB0aGlzLm1vZGVsLnNjYWxlO1xyXG5cdFx0dGhpcy52aWV3LmNvbnRhaW5lci5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnaW5pdFNjYWxlJykpO1xyXG5cdH1cclxuXHJcblx0c2V0VG9WaWV3KCkge1xyXG5cdFx0dGhpcy52aWV3LnByZWNlbnQubWluID0gdG9QcmVjZW50KHRoaXMudmFsdWUubWluLCB0aGlzLmRhdGEubWluVmFsdWUsIHRoaXMuZGF0YS5tYXhWYWx1ZSk7XHJcblx0XHR0aGlzLnZpZXcucHJlY2VudC5tYXggPSB0b1ByZWNlbnQodGhpcy52YWx1ZS5tYXgsIHRoaXMuZGF0YS5taW5WYWx1ZSwgdGhpcy5kYXRhLm1heFZhbHVlKTtcclxuXHR9XHJcblxyXG5cdHNldFRvTW9kZWwoKSB7XHJcblx0XHR0aGlzLm1vZGVsLnZhbHVlLm1pbiA9IHRvVmFsdWUodGhpcy52aWV3LnByZWNlbnQubWluLCB0aGlzLmRhdGEubWluVmFsdWUsIHRoaXMuZGF0YS5tYXhWYWx1ZSk7XHJcblx0XHR0aGlzLm1vZGVsLnZhbHVlLm1heCA9IHRvVmFsdWUodGhpcy52aWV3LnByZWNlbnQubWF4LCB0aGlzLmRhdGEubWluVmFsdWUsIHRoaXMuZGF0YS5tYXhWYWx1ZSk7XHJcblx0fVxyXG5cclxuXHRpbml0KCkge1xyXG5cdFx0Y29uc3Qgdmlld0RhdGEgPSB0aGlzLmRhdGE7XHJcblx0XHRjb25zdCBtb2RlbERhdGEgPSB0aGlzLmRhdGE7XHJcblx0XHR0aGlzLnZpZXcgPSBuZXcgVmlldyh2aWV3RGF0YSwgdGhpcy53cmFwKTtcclxuXHRcdHRoaXMubW9kZWwgPSBuZXcgTW9kZWwobW9kZWxEYXRhKTtcclxuXHRcdHRoaXMuc2V0VmFsdWVMaW1pdCgpO1xyXG5cdFx0dGhpcy5pbml0U2NhbGUoKTtcclxuXHRcdHRoaXMuc2V0VG9WaWV3KCk7XHJcblx0XHR0aGlzLm1vZGVsLnByZWNlbnQgPSB0aGlzLnZpZXcucHJlY2VudDtcclxuXHRcdHRoaXMubW9kZWwub2JzZXJ2ZXIuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3NldFByZWNlbnQnKSk7XHJcblx0XHR0aGlzLnNldFRhYlRleHQoKTtcclxuXHRcdHRoaXMudmlldy5zZXRUYWIoKTtcclxuXHRcdC8vIHRoaXMuc2V0VmFsdWVMaW1pdCgpO1xyXG5cdFx0dGhpcy52aWV3LmNvbnRhaW5lci5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnaW5pdFZhbHVlJykpO1xyXG5cclxuXHRcdHRoaXMudmlldy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlVmFsdWUnLCAoKSA9PiB7XHJcblx0XHRcdHRoaXMubW9kZWwub2JzZXJ2ZXIuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2NoYW5nZVZhbHVlJykpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRvbk1vdmVUb2dnbGUoKSB7XHJcblx0XHRjb25zdCBvbkNoYW5nZVZpZXcgPSAoKSA9PiB7XHJcblx0XHRcdHRoaXMuc2V0VG9Nb2RlbCgpO1xyXG5cdFx0XHR0aGlzLm1vZGVsLm9ic2VydmVyLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdjaGFuZ2VWYWx1ZScpKTtcclxuXHRcdH1cclxuXHRcdHRoaXMudmlldy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignbW92ZVRvZ2dsZScsIG9uQ2hhbmdlVmlldyk7XHJcblx0fVxyXG5cclxuXHRvbkNoYW5nZVRhYlRleHQoKSB7XHJcblx0XHR0aGlzLm1vZGVsLm9ic2VydmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZVRhYlRleHQnLCAoKSA9PiB7XHJcblx0XHRcdHRoaXMuc2V0VGFiVGV4dCgpO1xyXG5cdFx0XHR0aGlzLnZpZXcuY29udGFpbmVyLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdjaGFuZ2VUYWInKSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0b25DYW5nZUlucHV0KCkge1xyXG5cdFx0dGhpcy5tb2RlbC5vYnNlcnZlci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2VJbnB1dCcsICgpID0+IHtcclxuXHRcdFx0dGhpcy52aWV3LnRhYlRleHQgPSB0aGlzLm1vZGVsLnRhYlRleHQ7XHJcblx0XHRcdGlmICh0aGlzLmRhdGEuaXNBcnJheSkge1xyXG5cdFx0XHRcdHRoaXMudmlldy5wcmVjZW50Lm1pbiA9IHRoaXMubW9kZWwudmFsdWUubWluIC8gKHRoaXMuZGF0YS5hcnJheS5sZW5ndGggLSAxKTtcclxuXHRcdFx0XHR0aGlzLnZpZXcucHJlY2VudC5tYXggPSB0aGlzLm1vZGVsLnZhbHVlLm1heCAvICh0aGlzLmRhdGEuYXJyYXkubGVuZ3RoIC0xKTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyh0aGlzLnZpZXcucHJlY2VudCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Ly8gdGhpcy52YWx1ZS5taW4gPSArdGhpcy5tb2RlbC52YWx1ZS5taW47XHJcblx0XHRcdFx0Ly8gdGhpcy52YWx1ZS5tYXggPSArdGhpcy5tb2RlbC52YWx1ZS5tYXg7XHJcblx0XHRcdFx0Ly8gdGhpcy5zZXRUb1ZpZXcoKTtcclxuXHRcdFx0XHQvLyB0aGlzLnNldFRvTW9kZWwoKTtcclxuXHRcdFx0XHR0aGlzLnNldFZhbHVlTGltaXQoKTtcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLnZpZXcuY29udGFpbmVyLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdjaGFuZ2VJbnB1dCcpKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRzZXRWYWx1ZUxpbWl0KCkge1xyXG5cdFx0dGhpcy52YWx1ZS5taW4gPSArdGhpcy5tb2RlbC52YWx1ZS5taW47XHJcblx0XHR0aGlzLnZhbHVlLm1heCA9ICt0aGlzLm1vZGVsLnZhbHVlLm1heDtcclxuXHRcdHRoaXMuc2V0VG9WaWV3KCk7XHJcblx0XHR0aGlzLnNldFRvTW9kZWwoKTtcclxuXHRcdC8vIHRoaXMudmlldy5jb250YWluZXIuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2NoYW5nZUlucHV0JykpO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IHtQcmVzZW50ZXJ9OyIsImltcG9ydCB7cm91bmR9IGZyb20gJy4vZnVuY3Rpb25zLnRzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTY2FsZSB7XHJcblxyXG5cdHNsaWRlcjogSFRNTEVsZW1lbnQ7XHJcblx0c2NhbGU6IHN0cmluZ1tdO1xyXG5cdGlzVmVydGljYWw6IGJvb2xlYW47XHJcblxyXG5cdGNvbnN0cnVjdG9yKHNsaWRlciwgc2NhbGUsIGlzVmVydGljYWwpIHtcclxuXHRcdHRoaXMuc2xpZGVyID0gc2xpZGVyO1xyXG5cdFx0dGhpcy5zY2FsZSA9IHNjYWxlO1xyXG5cdFx0dGhpcy5pc1ZlcnRpY2FsID0gaXNWZXJ0aWNhbDtcclxuXHRcdHRoaXMuY3JlYXRlSXRlbSgpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlSXRlbSgpIHtcclxuXHRcdGNvbnN0IGJhcjogSFRNTEVsZW1lbnQgPSB0aGlzLnNsaWRlci5xdWVyeVNlbGVjdG9yKCcudHMtc2xpZGVyX19iYXInKTtcclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zY2FsZS5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRjb25zdCBzY2FsZUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdFx0c2NhbGVJdGVtLmNsYXNzTGlzdC5hZGQoJ3RzLXNsaWRlcl9fc2NhbGUtaXRlbScpO1xyXG5cdFx0XHRzY2FsZUl0ZW0udGV4dENvbnRlbnQgPSB0aGlzLnNjYWxlW2ldO1xyXG5cdFx0XHRpZiAodGhpcy5pc1ZlcnRpY2FsKSB7XHJcblx0XHRcdFx0c2NhbGVJdGVtLmNsYXNzTGlzdC5hZGQoJ3RzLXNsaWRlcl9fc2NhbGUtaXRlbS0tdmVydGljYWwnKTtcclxuXHRcdFx0XHRzY2FsZUl0ZW0uc3R5bGUudG9wID0gYCR7YmFyLm9mZnNldEhlaWdodCAvICh0aGlzLnNjYWxlLmxlbmd0aCAtIDEpICogaX1weGA7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2NhbGVJdGVtLnN0eWxlLmxlZnQgPSBgJHtiYXIub2Zmc2V0V2lkdGggLyAodGhpcy5zY2FsZS5sZW5ndGggLSAxKSAqIGl9cHhgO1xyXG5cdFx0XHR9XHRcclxuXHRcdFx0YmFyLmFwcGVuZChzY2FsZUl0ZW0pO1xyXG5cdFx0fVxyXG5cdH1cclxufSIsImltcG9ydCB7c2V0TGltaXR9IGZyb20gJy4vZnVuY3Rpb25zLnRzJztcclxuXHJcbmNvbnN0IHNldFRvZ2dsZVN0eWxlID0gKHRvZ2dsZTogSFRNTEVsZW1lbnQsIHBpeGVsOiBudW1iZXIsIGlzVmVydGljYWw6IGJvb2xlYW4pID0+IHtcclxuXHRcdGlmIChpc1ZlcnRpY2FsKSB7XHJcblx0XHRcdHRvZ2dsZS5zdHlsZS50b3AgPSBgJHtwaXhlbH1weGA7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0b2dnbGUuc3R5bGUubGVmdCA9IGAke3BpeGVsfXB4YDtcclxuXHR9XHJcbn1cclxuXHJcbmNsYXNzIFRvZ2dsZSB7XHJcblxyXG5cdHRvZ2dsZTogSFRNTEVsZW1lbnQ7XHJcblx0bWluOiBudW1iZXI7XHJcblx0bWF4OiBudW1iZXI7XHJcblx0bW91c2VQaXhlbDogbnVtYmVyO1xyXG5cdHBpeGVsOiBudW1iZXI7XHJcblx0cHJlY2VudDogbnVtYmVyO1xyXG5cdHNpemU6IG51bWJlcjtcclxuXHRpc1ZlcnRpY2FsOiBib29sZWFuO1xyXG5cdGlzRml4ZWQ6IGJvb2xlYW47XHJcblxyXG5cdGNvbnN0cnVjdG9yKHRvZ2dsZSwgcHJlY2VudCwgc2l6ZSwgaXNWZXJ0aWNhbCkge1xyXG5cdFx0dGhpcy50b2dnbGUgPSB0b2dnbGU7XHJcblx0XHR0aGlzLnNpemUgPSBzaXplO1xyXG5cdFx0dGhpcy5wcmVjZW50ID0gcHJlY2VudDtcclxuXHRcdHRoaXMubW91c2VQaXhlbCA9IHRoaXMucHJlY2VudCAqIHRoaXMuc2l6ZTtcclxuXHRcdHRoaXMucGl4ZWwgPSB0aGlzLm1vdXNlUGl4ZWw7XHJcblx0XHR0aGlzLmlzVmVydGljYWwgPSBpc1ZlcnRpY2FsO1xyXG5cdFx0dGhpcy5pc0ZpeGVkID0gZmFsc2U7XHJcblx0XHR0aGlzLnNldFN0eWxlKCk7XHJcblx0XHR0aGlzLm9uTW92ZVRvZ2dsZSgpO1xyXG5cdH1cclxuXHJcblx0c2V0U3R5bGUoKSB7XHJcblx0XHRzZXRUb2dnbGVTdHlsZSh0aGlzLnRvZ2dsZSwgdGhpcy5waXhlbCwgdGhpcy5pc1ZlcnRpY2FsKTtcclxuXHR9XHJcblxyXG5cdGNoYW5nZVRvZ2dsZSgpIHtcclxuXHRcdHRoaXMubW91c2VQaXhlbCA9IHRoaXMucHJlY2VudCAqIHRoaXMuc2l6ZTtcclxuXHRcdHRoaXMucGl4ZWwgPSB0aGlzLm1vdXNlUGl4ZWw7XHJcblx0XHR0aGlzLnNldFN0eWxlKCk7XHJcblx0fVxyXG5cclxuXHRvbk1vdmVUb2dnbGUoKSB7XHJcblx0XHRjb25zdCBvbk1vdXNlRG93biA9IChldnQpID0+IHtcclxuXHRcdFx0bGV0IHNoaWZ0WDogbnVtYmVyID0gZXZ0LmNsaWVudFggLSB0aGlzLnRvZ2dsZS5vZmZzZXRMZWZ0O1xyXG5cdFx0XHRsZXQgc2hpZnRZOiBudW1iZXIgPSBldnQuY2xpZW50WSAtIHRoaXMudG9nZ2xlLm9mZnNldFRvcDtcclxuXHRcdFx0bGV0IHN0YXJ0UGl4ZWw6IG51bWJlciA9IHRoaXMubW91c2VQaXhlbDtcclxuXHRcdFx0Y29uc3QgbW92ZUF0ID0gKHBhZ2VYLCBwYWdlWSkgPT4ge1xyXG5cdFx0XHRcdGlmICh0aGlzLmlzVmVydGljYWwpIHtcclxuXHRcdFx0XHRcdHRoaXMubW91c2VQaXhlbCA9IHBhZ2VZIC0gc2hpZnRZO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0aGlzLm1vdXNlUGl4ZWwgPSBwYWdlWCAtIHNoaWZ0WDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy5waXhlbCA9IHRoaXMubW91c2VQaXhlbDtcclxuXHRcdFx0XHR0aGlzLnBpeGVsID0gc2V0TGltaXQodGhpcy5waXhlbCwgdGhpcy5taW4gKiB0aGlzLnNpemUsIHRoaXMubWF4ICogdGhpcy5zaXplKTtcclxuXHRcdFx0XHRpZiAodGhpcy5pc0ZpeGVkKSB7XHJcblx0XHRcdFx0XHR0aGlzLnBpeGVsID0gc3RhcnRQaXhlbDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy5zZXRTdHlsZSgpO1xyXG5cdFx0XHRcdHRoaXMucHJlY2VudCA9IHRoaXMucGl4ZWwgLyB0aGlzLnNpemU7XHJcblx0XHRcdFx0Ly8gY29uc29sZS5sb2codGhpcy5wcmVjZW50KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRtb3ZlQXQoZXZ0LnBhZ2VYLCBldnQucGFnZVkpO1xyXG5cclxuXHRcdFx0Y29uc3Qgb25Nb3VzZU1vdmUgPSAobW92ZUV2dCkgPT4ge1xyXG5cdFx0XHRcdG1vdmVFdnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHRtb3ZlQXQobW92ZUV2dC5wYWdlWCwgbW92ZUV2dC4gcGFnZVkpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNvbnN0IG9uTW91c2VVcCA9ICh1cEV2dCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMubW91c2VQaXhlbCA9IHRoaXMucGl4ZWw7XHJcblx0XHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uTW91c2VVcCk7XHJcblx0XHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKTtcclxuXHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uTW91c2VVcCk7XHJcblx0XHR9XHJcblx0XHR0aGlzLnRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBvbk1vdXNlRG93bik7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQge3NldFRvZ2dsZVN0eWxlLCBUb2dnbGV9O1xyXG4iLCJpbXBvcnQge2luaXRWaWV3TWFya3VwLCBtYXJrdXB9IGZyb20gJy4vaW5pdC12aWV3LW1hcmt1cC50cyc7XHJcbmltcG9ydCB7U2NhbGV9IGZyb20gJy4vc2NhbGUudHMnO1xyXG5pbXBvcnQge0RhdGEsIFZhbHVlLCBUYWJUZXh0fSBmcm9tICcuL2ludGVyZmFjZXMudHMnO1xyXG5pbXBvcnQge3NldFRvZ2dsZVN0eWxlLCBUb2dnbGV9IGZyb20gJy4vdG9nZ2xlLnRzJztcclxuaW1wb3J0IHtzZXRNb3VzZUhhbmRsZXIsIHJvdW5kLCB0b1ByZWNlbnQsIHNldFJhbmdlU3R5bGV9IGZyb20gJy4vZnVuY3Rpb25zLnRzJztcclxuXHJcbmNsYXNzIFZpZXcge1xyXG5cclxuXHR3cmFwOiBIVE1MRWxlbWVudDtcclxuXHRkYXRhOiBEYXRhO1xyXG5cdHByZWNlbnQ6IFZhbHVlO1xyXG5cdHRhYlRleHQ6IFRhYlRleHQ7XHJcblx0Y29udGFpbmVyOiBIVE1MRWxlbWVudDtcclxuXHRtaW5Ub2dnbGVFbGVtOiBIVE1MRWxlbWVudDtcclxuXHRtYXhUb2dnbGVFbGVtOiBIVE1MRWxlbWVudDtcclxuXHRtaW5Ub2dnbGU6IFRvZ2dsZTtcclxuXHRtYXhUb2dnbGU6IFRvZ2dsZTtcclxuXHRtaW5UYWJFbGVtOiBIVE1MRWxlbWVudDtcclxuXHRtYXhUYWJFbGVtOiBIVE1MRWxlbWVudDtcclxuXHRyYW5nZUVsZW06IEhUTUxFbGVtZW50O1xyXG5cdHNpemU6IG51bWJlcjtcclxuXHRzY2FsZTogc3RyaW5nW107XHJcblxyXG5cdGNvbnN0cnVjdG9yKGRhdGEsIHdyYXApIHtcclxuXHJcblx0XHR0aGlzLndyYXAgPSB3cmFwO1xyXG5cdFx0dGhpcy5kYXRhID0gZGF0YTtcclxuXHRcdHRoaXMucHJlY2VudCA9IHtcclxuXHRcdFx0bWluOiAwLFxyXG5cdFx0XHRtYXg6IDBcclxuXHRcdH1cclxuXHRcdHRoaXMudGFiVGV4dCA9IHtcclxuXHRcdFx0bWluOiAnJyxcclxuXHRcdFx0bWF4OiAnJ1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5zY2FsZSA9IFtdO1xyXG5cdFx0dGhpcy5pbml0VmlldygpO1xyXG5cdFx0dGhpcy5jcmVhdGVUb2dnbGUoKTtcclxuXHRcdHRoaXMub25Ub2dnbGVDb2luY2lkZW5jZSgpO1xyXG5cdFx0dGhpcy5hZGRTY2FsZSgpO1xyXG5cdFx0dGhpcy5jaGFuZ2VUYWIoKTtcclxuXHRcdHRoaXMuY2hhbmdlSW5wdXQoKTtcclxuXHR9XHJcblxyXG5cdGluaXRWaWV3KCkge1xyXG5cdFx0aW5pdFZpZXdNYXJrdXAodGhpcy53cmFwLCB0aGlzLmRhdGEuaXNWZXJ0aWNhbCk7XHJcblx0XHR0aGlzLmNvbnRhaW5lciA9IHRoaXMud3JhcC5xdWVyeVNlbGVjdG9yKCcudHMtc2xpZGVyX19jb250YWluZXInKTtcclxuXHRcdGlmICh0aGlzLmRhdGEuaXNWZXJ0aWNhbCkge1xyXG5cdFx0XHR0aGlzLnNpemUgPSB0aGlzLmNvbnRhaW5lci5vZmZzZXRIZWlnaHQ7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLnNpemUgPSB0aGlzLmNvbnRhaW5lci5vZmZzZXRXaWR0aDtcclxuXHRcdH1cclxuXHRcdHRoaXMubWluVG9nZ2xlRWxlbSA9IG1hcmt1cCh0aGlzLmNvbnRhaW5lcikubWluO1xyXG5cdFx0dGhpcy5tYXhUb2dnbGVFbGVtID0gbWFya3VwKHRoaXMuY29udGFpbmVyKS5tYXg7XHJcblx0XHR0aGlzLm1pblRhYkVsZW0gPSBtYXJrdXAodGhpcy5jb250YWluZXIpLm1pblRhYjtcclxuXHRcdHRoaXMubWF4VGFiRWxlbSA9IG1hcmt1cCh0aGlzLmNvbnRhaW5lcikubWF4VGFiO1xyXG5cdFx0dGhpcy5yYW5nZUVsZW0gPSBtYXJrdXAodGhpcy5jb250YWluZXIpLnJhbmdlO1xyXG5cclxuXHRcdGlmICghdGhpcy5kYXRhLmlzUmFuZ2UpIHtcclxuXHRcdFx0dGhpcy5taW5Ub2dnbGVFbGVtLmhpZGRlbiA9IHRydWU7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCF0aGlzLmRhdGEuaXNUYWIpIHtcclxuXHRcdFx0dGhpcy5taW5UYWJFbGVtLmhpZGRlbiA9IHRydWU7XHJcblx0XHRcdHRoaXMubWF4VGFiRWxlbS5oaWRkZW4gPSB0cnVlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0c2V0VGFiKCkge1xyXG5cdFx0dGhpcy5taW5UYWJFbGVtLnRleHRDb250ZW50ID0gdGhpcy50YWJUZXh0Lm1pbjtcclxuXHRcdHRoaXMubWF4VGFiRWxlbS50ZXh0Q29udGVudCA9IHRoaXMudGFiVGV4dC5tYXg7XHJcblx0fVxyXG5cclxuXHRzZXRSYW5nZSgpIHtcclxuXHRcdHNldFJhbmdlU3R5bGUodGhpcy5yYW5nZUVsZW0sIHRoaXMubWluVG9nZ2xlLnByZWNlbnQgKiB0aGlzLnNpemUsIHRoaXMubWF4VG9nZ2xlLnByZWNlbnQgKiB0aGlzLnNpemUsIHRoaXMuZGF0YS5pc1ZlcnRpY2FsKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZVRvZ2dsZSgpIHtcclxuXHRcdGNvbnN0IG1pblRvZ2dsZVByZWNlbnQgPSB0b1ByZWNlbnQodGhpcy5kYXRhLm1pblRvZ2dsZVZhbHVlLCB0aGlzLmRhdGEubWluVmFsdWUsIHRoaXMuZGF0YS5tYXhWYWx1ZSk7XHJcblx0XHRjb25zdCBtYXhUb2dnbGVQcmVjZW50ID0gdG9QcmVjZW50KHRoaXMuZGF0YS5tYXhUb2dnbGVWYWx1ZSwgdGhpcy5kYXRhLm1pblZhbHVlLCB0aGlzLmRhdGEubWF4VmFsdWUpO1xyXG5cdFx0dGhpcy5taW5Ub2dnbGUgPSBuZXcgVG9nZ2xlKHRoaXMubWluVG9nZ2xlRWxlbSwgbWluVG9nZ2xlUHJlY2VudCwgdGhpcy5zaXplLCB0aGlzLmRhdGEuaXNWZXJ0aWNhbCk7XHJcblx0XHR0aGlzLm1heFRvZ2dsZSA9IG5ldyBUb2dnbGUodGhpcy5tYXhUb2dnbGVFbGVtLCBtYXhUb2dnbGVQcmVjZW50LCB0aGlzLnNpemUsIHRoaXMuZGF0YS5pc1ZlcnRpY2FsKTtcclxuXHRcdHRoaXMubWluVG9nZ2xlLm1pbiA9IDA7XHJcblx0XHR0aGlzLm1heFRvZ2dsZS5tYXggPSAxO1xyXG5cdFx0aWYgKCF0aGlzLmRhdGEuaXNSYW5nZSkge1xyXG5cdFx0XHR0aGlzLm1pblRvZ2dsZS5wcmVjZW50ID0gMDtcclxuXHRcdH1cclxuXHRcdHRoaXMuc2V0UmFuZ2UoKTtcclxuXHJcblx0XHRjb25zdCBvbk1vdXNlTW92ZSA9IChtb3ZlRXZ0KSA9PiB7XHJcblx0XHRcdHRoaXMubWluVG9nZ2xlLm1heCA9IHRoaXMubWF4VG9nZ2xlLnByZWNlbnQ7XHJcblx0XHRcdHRoaXMubWF4VG9nZ2xlLm1pbiA9IHRoaXMubWluVG9nZ2xlLnByZWNlbnQ7XHJcblx0XHRcdHNldFJhbmdlU3R5bGUodGhpcy5yYW5nZUVsZW0sIHRoaXMubWluVG9nZ2xlLnByZWNlbnQgKiB0aGlzLnNpemUsIHRoaXMubWF4VG9nZ2xlLnByZWNlbnQgKiB0aGlzLnNpemUsIHRoaXMuZGF0YS5pc1ZlcnRpY2FsKTtcclxuXHRcdFx0dGhpcy5wcmVjZW50Lm1pbiA9IHRoaXMubWluVG9nZ2xlLnByZWNlbnQ7XHJcblx0XHRcdHRoaXMucHJlY2VudC5tYXggPSB0aGlzLm1heFRvZ2dsZS5wcmVjZW50O1xyXG5cdFx0XHR0aGlzLnNldFRhYigpO1xyXG5cdFx0XHR0aGlzLmNvbnRhaW5lci5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnbW92ZVRvZ2dsZScpKTtcclxuXHRcdH1cclxuXHRcdHNldE1vdXNlSGFuZGxlcihkb2N1bWVudCwgb25Nb3VzZU1vdmUpO1xyXG5cdFx0dGhpcy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKGV2dCkgPT4ge1xyXG5cdFx0XHRldnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0b25Ub2dnbGVDb2luY2lkZW5jZSgpIHtcclxuXHRcdGNvbnN0IG9uTW91c2VEb3duQ29pbmNpZGVuY2UgPSAoZXZ0KSA9PiB7XHJcblx0XHRcdGxldCBjb2luY2lkZW5jZVRvZ2dsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cdFx0XHR0aGlzLm1heFRvZ2dsZUVsZW0uaGlkZGVuID0gdHJ1ZTtcclxuXHRcdFx0Y29pbmNpZGVuY2VUb2dnbGUgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KGV2dC5wYWdlWCwgZXZ0LnBhZ2VZKS5jbGFzc0xpc3QuY29udGFpbnMoJ3RzLXNsaWRlcl9fdG9nZ2xlLS1taW4nKTtcclxuXHRcdFx0dGhpcy5tYXhUb2dnbGVFbGVtLmhpZGRlbiA9IGZhbHNlO1xyXG5cdFx0XHRsZXQgc3RhcnRQaXhlbDogbnVtYmVyO1xyXG5cdFx0XHRzdGFydFBpeGVsID0gdGhpcy5tYXhUb2dnbGUucGl4ZWw7XHJcblxyXG5cdFx0XHRjb25zdCBvbk1vdXNlTW92ZSA9IChtb3ZlRXZ0KSA9PiB7XHJcblx0XHRcdFx0aWYgKGNvaW5jaWRlbmNlVG9nZ2xlKSB7XHJcblx0XHRcdFx0XHR0aGlzLm1pblRvZ2dsZS5tb3VzZVBpeGVsID0gdGhpcy5tYXhUb2dnbGUubW91c2VQaXhlbDtcclxuXHRcdFx0XHRcdHRoaXMubWF4VG9nZ2xlLmlzRml4ZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0dGhpcy5taW5Ub2dnbGUuaXNGaXhlZCA9IHRydWU7XHJcblx0XHRcdFx0XHRpZiAodGhpcy5tYXhUb2dnbGUubW91c2VQaXhlbCA+IHN0YXJ0UGl4ZWwpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5tYXhUb2dnbGUuaXNGaXhlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0XHR0aGlzLm1pblRvZ2dsZS5pc0ZpeGVkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHRoaXMubWF4VG9nZ2xlLmlzRml4ZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHR0aGlzLm1pblRvZ2dsZS5pc0ZpeGVkID0gZmFsc2U7XHJcblx0XHRcdFx0XHRcdHRoaXMubWluVG9nZ2xlLm1vdXNlUGl4ZWwgPSB0aGlzLm1heFRvZ2dsZS5tb3VzZVBpeGVsO1xyXG5cdFx0XHRcdFx0XHR0aGlzLm1pblRvZ2dsZS5waXhlbCA9IHRoaXMubWF4VG9nZ2xlLm1vdXNlUGl4ZWw7XHJcblx0XHRcdFx0XHRcdGlmICh0aGlzLm1pblRvZ2dsZS5waXhlbCA8IDApIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLm1pblRvZ2dsZS5waXhlbCA9IDA7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0dGhpcy5taW5Ub2dnbGUuc2V0U3R5bGUoKTtcclxuXHRcdFx0XHRcdFx0dGhpcy5taW5Ub2dnbGUucHJlY2VudCA9IHRoaXMubWluVG9nZ2xlLnBpeGVsIC8gdGhpcy5zaXplO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0aGlzLm1heFRvZ2dsZS5pc0ZpeGVkID0gZmFsc2U7XHJcblx0XHRcdFx0XHR0aGlzLm1pblRvZ2dsZS5pc0ZpeGVkID0gZmFsc2U7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGNvbnN0IG9uTW91c2VVcCA9ICh1cEV2dCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMubWluVG9nZ2xlLm1vdXNlUGl4ZWwgPSB0aGlzLm1pblRvZ2dsZS5waXhlbDtcclxuXHRcdFx0XHR0aGlzLm1heFRvZ2dsZS5pc0ZpeGVkID0gZmFsc2U7XHJcblx0XHRcdFx0dGhpcy5taW5Ub2dnbGUuaXNGaXhlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbk1vdXNlVXApO1xyXG5cdFx0XHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSk7XHJcblx0XHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbk1vdXNlVXApO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMubWF4VG9nZ2xlRWxlbS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBvbk1vdXNlRG93bkNvaW5jaWRlbmNlKTtcclxuXHR9XHJcblxyXG5cdGFkZFNjYWxlKCkge1xyXG5cdFx0dGhpcy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignaW5pdFNjYWxlJywgKCkgPT4ge1xyXG5cdFx0XHRpZiAodGhpcy5kYXRhLmlzU2NhbGUpIHtcclxuXHRcdFx0XHRjb25zdCBzY2FsZSA9IG5ldyBTY2FsZSh0aGlzLmNvbnRhaW5lciwgdGhpcy5zY2FsZSwgdGhpcy5kYXRhLmlzVmVydGljYWwpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGNoYW5nZVRhYigpIHtcclxuXHRcdHRoaXMuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZVRhYicsICgpID0+IHtcclxuXHRcdFx0dGhpcy5zZXRUYWIoKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0Y2hhbmdlSW5wdXQoKSB7XHJcblx0XHR0aGlzLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2VJbnB1dCcsICgpID0+IHtcclxuXHRcdFx0dGhpcy5taW5Ub2dnbGUucHJlY2VudCA9IHRoaXMucHJlY2VudC5taW47XHJcblx0XHRcdHRoaXMubWF4VG9nZ2xlLnByZWNlbnQgPSB0aGlzLnByZWNlbnQubWF4O1xyXG5cdFx0XHR0aGlzLm1pblRvZ2dsZS5jaGFuZ2VUb2dnbGUoKTtcclxuXHRcdFx0dGhpcy5tYXhUb2dnbGUuY2hhbmdlVG9nZ2xlKCk7XHJcblx0XHRcdHRoaXMuc2V0VGFiKCk7XHJcblx0XHRcdHRoaXMuc2V0UmFuZ2UoKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0cmVtb3ZlTWFya3VwKCkge1xyXG5cdFx0dGhpcy5jb250YWluZXIucmVtb3ZlKCk7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQge1ZpZXd9O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9