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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Z1bmN0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luaXQtdmlldy1tYXJrdXAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9wcmVzZW50ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjYWxlLnRzIiwid2VicGFjazovLy8uL3NyYy90b2dnbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUF3QztBQUd4QyxNQUFNLFdBQVcsR0FBUztJQUN6QixnQ0FBZ0M7SUFDaEMsVUFBVSxFQUFFLHNCQUFzQjtJQUNsQyxVQUFVLEVBQUUsc0JBQXNCO0lBQ2xDLE9BQU8sRUFBRSxLQUFLO0lBQ2QsS0FBSyxFQUFFLEVBQUU7SUFDVCxJQUFJLEVBQUUsQ0FBQztJQUNQLFFBQVEsRUFBRSxDQUFDO0lBQ1gsUUFBUSxFQUFFLEdBQUc7SUFDYixjQUFjLEVBQUUsRUFBRTtJQUNsQixjQUFjLEVBQUUsRUFBRTtJQUNsQixPQUFPLEVBQUUsSUFBSTtJQUNiLFVBQVUsRUFBRSxLQUFLO0lBQ2pCLEtBQUssRUFBRSxJQUFJO0lBQ1gsT0FBTyxFQUFFLElBQUk7SUFDYixhQUFhLEVBQUUsQ0FBQztDQUNoQjtBQUNELDhCQUE4QjtBQUM5QixvQ0FBb0M7QUFDcEMsaUNBQWlDO0FBQ2pDLGlDQUFpQztBQUNqQyxrQkFBa0I7QUFDbEIsNERBQTREO0FBQzVELFlBQVk7QUFDWixnQkFBZ0I7QUFDaEIsaUJBQWlCO0FBQ2pCLHNCQUFzQjtBQUN0QixzQkFBc0I7QUFDdEIsa0JBQWtCO0FBQ2xCLHFCQUFxQjtBQUNyQixnQkFBZ0I7QUFDaEIsa0JBQWtCO0FBQ2xCLG9CQUFvQjtBQUNwQixJQUFJO0FBRUosTUFBTSxZQUFZLEdBQUcsQ0FBQyxJQUFVLEVBQUUsRUFBRTtJQUNuQyxJQUFJLENBQUMsY0FBYyxHQUFHLDhEQUFRLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNsRixJQUFJLENBQUMsY0FBYyxHQUFHLDhEQUFRLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNuRixDQUFDO0FBRUQsNkJBQTZCO0FBQzdCLDZCQUE2QjtBQUVNOzs7Ozs7Ozs7Ozs7O0FDOUNuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQU0sZUFBZSxHQUFHLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxNQUFPLEVBQUUsSUFBSyxFQUFFLEVBQUU7SUFFeEQsTUFBTSxXQUFXLEdBQUcsQ0FBQyxHQUFHLEVBQUUsRUFBRTtRQUMzQixJQUFJLE1BQU0sRUFBRTtZQUNYLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNaO1FBRUQsTUFBTSxXQUFXLEdBQUcsQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUMvQixNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDakIsQ0FBQztRQUNELE1BQU0sU0FBUyxHQUFHLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDM0IsSUFBSSxJQUFJLEVBQUU7Z0JBQ1QsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ1o7WUFDRCxRQUFRLENBQUMsbUJBQW1CLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQ25ELFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDeEQsQ0FBQztRQUNELFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDcEQsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxXQUFXLENBQUMsQ0FBQztBQUNqRCxDQUFDO0FBRUQsTUFBTSxLQUFLLEdBQUcsQ0FBQyxLQUFhLEVBQUUsSUFBWSxFQUFFLEVBQUU7SUFDN0MsTUFBTSxTQUFTLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQ3hHLElBQUksT0FBTyxHQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ2pGLE9BQU8sT0FBTyxDQUFDO0FBQ2hCLENBQUM7QUFFRCxNQUFNLFFBQVEsR0FBRyxDQUFDLEtBQWEsRUFBRSxHQUFXLEVBQUUsR0FBVyxFQUFFLEVBQUU7SUFDNUQsSUFBSSxLQUFLLEdBQUcsR0FBRyxFQUFFO1FBQ2hCLEtBQUssR0FBRyxHQUFHLENBQUM7S0FDWjtTQUFNLElBQUksS0FBSyxHQUFHLEdBQUcsRUFBRTtRQUN2QixLQUFLLEdBQUcsR0FBRyxDQUFDO0tBQ1o7SUFDRCxPQUFPLEtBQUssQ0FBQztBQUNkLENBQUM7QUFFRCxNQUFNLFNBQVMsR0FBRyxDQUFDLEtBQWEsRUFBRSxHQUFXLEVBQUUsR0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztBQUUzRixNQUFNLE9BQU8sR0FBRyxDQUFDLEtBQWEsRUFBRSxHQUFXLEVBQUUsR0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQztBQUV6RixNQUFNLGFBQWEsR0FBRyxDQUFDLEtBQWtCLEVBQUUsR0FBVyxFQUFFLEdBQVcsRUFBRSxVQUFtQixFQUFFLEVBQUU7SUFDM0YsSUFBSSxVQUFVLEVBQUU7UUFDZixLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDO1FBQzdCLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztLQUN4QztTQUFNO1FBQ04sS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQztRQUM5QixLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7S0FDdkM7QUFDRixDQUFDO0FBRTRFOzs7Ozs7Ozs7Ozs7O0FDckQ3RTtBQUFBO0FBQXlDO0FBRXpDLENBQUMsVUFBUyxDQUFDO0lBQ1YsTUFBTSxPQUFPLEdBQUc7UUFDZixJQUFJLEVBQUUsVUFBUyxPQUFPO1lBQ3JCLE1BQU0sRUFBRSxHQUFXLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3pDLE1BQU0sSUFBSSxHQUFnQixRQUFRLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3JELE1BQU0sU0FBUyxHQUFHLElBQUksdURBQVMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDL0MsTUFBTSxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQztRQUN4QixDQUFDO1FBQ0QsTUFBTSxFQUFFLFVBQVMsT0FBTztZQUN2QixNQUFNLEVBQUUsR0FBVyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN6QyxNQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDN0IsU0FBUyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7WUFDNUIsU0FBUyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3hCLENBQUM7S0FDRDtJQUVELENBQUMsQ0FBQyxFQUFFLENBQUMsUUFBUSxHQUFHLFVBQVMsT0FBTyxFQUFFLE1BQU87UUFDeEMsTUFBTSxFQUFFLEdBQVcsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekMsSUFBSyxNQUFNLEtBQUssUUFBUSxJQUFJLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRztZQUN4QyxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBRSxJQUFJLEVBQUUsU0FBUyxDQUFFLENBQUM7WUFDdkQsaUJBQWlCO1NBQ2pCO2FBQU0sSUFBSyxPQUFPLE1BQU0sS0FBSyxRQUFRLElBQUksQ0FBRSxNQUFNLElBQUksQ0FBRSxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUc7WUFDcEUsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUUsSUFBSSxFQUFFLFNBQVMsQ0FBRSxDQUFDO1lBQ25ELGVBQWU7U0FDZjthQUFNO1lBQ04sQ0FBQyxDQUFDLEtBQUssQ0FBRSxpQkFBaUIsR0FBSSxNQUFNLEdBQUcsb0NBQW9DLENBQUUsQ0FBQztTQUM5RTtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQztBQUNGLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7O0FDL0JYO0FBQUE7QUFBQTtBQUFBLE1BQU0sY0FBYyxHQUFHLENBQUMsV0FBd0IsRUFBRSxRQUFpQixFQUFFLEVBQUU7SUFDdEUsTUFBTSxZQUFZLEdBQVc7Ozs7Ozs7Ozs7ZUFVZixDQUFDO0lBQ2YsaUVBQWlFO0lBQ2hFLDRCQUE0QjtJQUM3QixXQUFXLENBQUMsU0FBUyxHQUFHLFlBQVksQ0FBQztJQUNwQyxNQUFNLEdBQUcsR0FBRyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEQsSUFBSSxRQUFRLEVBQUU7UUFDWixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNuQyxNQUFNLFVBQVUsR0FBVyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQy9DLE1BQU0sYUFBYSxHQUFXLFVBQVUsR0FBRyxZQUFZLENBQUM7WUFDeEQsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDckM7S0FDRjtBQUNILENBQUM7QUFFRCxNQUFNLE1BQU0sR0FBRyxDQUFDLE1BQW1CLEVBQUUsRUFBRTtJQVNyQyxJQUFJLE1BQU0sR0FBVztRQUNsQixHQUFHLEVBQUUsTUFBTSxDQUFDLGFBQWEsQ0FBQyx5QkFBeUIsQ0FBQztRQUNwRCxHQUFHLEVBQUUsTUFBTSxDQUFDLGFBQWEsQ0FBQyx5QkFBeUIsQ0FBQztRQUNwRCxLQUFLLEVBQUUsTUFBTSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQztRQUNoRCxHQUFHLEVBQUUsTUFBTSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQztRQUM1QyxNQUFNLEVBQUUsTUFBTSxDQUFDLGFBQWEsQ0FBQywrQkFBK0IsQ0FBQztRQUM3RCxNQUFNLEVBQUUsTUFBTSxDQUFDLGFBQWEsQ0FBQywrQkFBK0IsQ0FBQztLQUMvRDtJQUNELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUM7QUFFK0I7Ozs7Ozs7Ozs7Ozs7QUM1Q2hDO0FBQUE7QUFBQTtBQUFnRTtBQUVoRSxNQUFNLEtBQUs7SUFhVixZQUFZLElBQUk7UUFDZixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsT0FBTyxHQUFHO1lBQ2QsR0FBRyxFQUFFLEVBQUU7WUFDUCxHQUFHLEVBQUUsRUFBRTtTQUNQO1FBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRztZQUNaLEdBQUcsRUFBRSxDQUFDO1lBQ04sR0FBRyxFQUFFLENBQUM7U0FDTjtRQUNELElBQUksQ0FBQyxPQUFPLEdBQUc7WUFDZCxHQUFHLEVBQUUsQ0FBQztZQUNOLEdBQUcsRUFBRSxDQUFDO1NBQ047UUFDRCxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ1osSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELFFBQVE7UUFDUCxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztRQUN2QyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztRQUN2QyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDdkIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDdEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDekM7aUJBQU07Z0JBQ04sSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7YUFDekM7U0FDRDtRQUNELHNCQUFzQjtRQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDdkIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3JCO0lBQ0YsQ0FBQztJQUVELGFBQWE7UUFDWixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEUsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRUQsSUFBSTtRQUNILElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDdEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsR0FBRyxFQUFFO2dCQUNqRCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDdEIsQ0FBQyxDQUFDLENBQUM7U0FDSDthQUFNO1lBQ04sSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsMkRBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ25FLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHLDJEQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNuRTtRQUNELElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFRCxRQUFRO1FBQ1AsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUN0QixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUN0QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO2FBQzdCO1NBQ0Q7YUFBTTtZQUNOLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ3RCLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO2dCQUN2QyxJQUFJLFFBQVEsR0FBRyxDQUFDLEVBQUU7b0JBQ2pCLFFBQVEsR0FBRyxDQUFDLENBQUM7aUJBQ2I7Z0JBQ0QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDbEMsSUFBSSxTQUFTLEdBQVcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO29CQUM1SixJQUFJLElBQUksR0FBVywyREFBSyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNwRCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDdEI7YUFDRDtTQUNEO0lBQ0YsQ0FBQztJQUVELFdBQVc7UUFDVixJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsRUFBRSxHQUFHLEVBQUU7WUFDbEQsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDdEIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO2FBQ3JCO2lCQUFNO2dCQUNOLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHLDJEQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDekQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsMkRBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3pEO1lBQ0QsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ2hCLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksV0FBVyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7UUFDL0QsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBRUQsYUFBYTtRQUNaLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7UUFDdEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztRQUN0QyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyw4REFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDOUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsOERBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzlFLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2hELElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2hELElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHLDJEQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsR0FBRywyREFBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVELFdBQVc7UUFDVixNQUFNLE1BQU0sR0FBRyxHQUFHLEVBQUU7WUFDbkIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDdEIsTUFBTSxPQUFPLEdBQUcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUU7b0JBQ2hDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO3dCQUNwQyxPQUFPLEtBQUssQ0FBQztxQkFDYjt5QkFBTTt3QkFDTixPQUFPLEtBQUssQ0FBQztxQkFDYjtnQkFDRixDQUFDO2dCQUNELElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN2RSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUM5RCxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDOUQsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRTtvQkFDcEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7b0JBQ2hDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO2lCQUMxQztnQkFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztnQkFDdkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7YUFDdkM7aUJBQU07Z0JBQ04seUNBQXlDO2dCQUN6Qyx5Q0FBeUM7Z0JBQ3pDLGlGQUFpRjtnQkFDakYsaUZBQWlGO2dCQUNqRixtREFBbUQ7Z0JBQ25ELG1EQUFtRDtnQkFDbkQsaUVBQWlFO2dCQUNqRSxpRUFBaUU7Z0JBQ2pFLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQzthQUNyQjtZQUNELElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDN0QsQ0FBQztRQUNELElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2hELENBQUM7Q0FDRDtBQUVjOzs7Ozs7Ozs7Ozs7O0FDOUpmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErQjtBQUVFO0FBQ3dEO0FBRXJDO0FBRXBELE1BQU0sU0FBUztJQVlkLFlBQVksT0FBTyxFQUFFLElBQUk7UUFFeEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNaLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxRQUFRO1FBQ1AsSUFBSSxDQUFDLEtBQUssR0FBRztZQUNaLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWM7WUFDN0IsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYztTQUM3QjtJQUNGLENBQUM7SUFFRCxVQUFVO1FBQ1QsU0FBUyxTQUFTLENBQUMsR0FBRztZQUNwQixNQUFNLEtBQUssR0FBRyxFQUFFLENBQUM7WUFDakIsS0FBSSxNQUFNLENBQUMsSUFBSSxHQUFHLEVBQUU7Z0JBQ2xCLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxZQUFZLE1BQU0sRUFBRTtvQkFDNUIsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDN0IsU0FBUztpQkFDVjtnQkFDRCxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ25CO1lBQ0QsT0FBTyxLQUFLLENBQUM7UUFDZixDQUFDO1FBQ0QsTUFBTSxTQUFTLEdBQUcsU0FBUyxDQUFDLG9EQUFXLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNuRCw2REFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVELFVBQVU7UUFDVCxJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbkQsNkRBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNaLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxVQUFVO1FBQ1QsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztRQUMvQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO0lBQ2hELENBQUM7SUFFRCxTQUFTO1FBQ1IsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLElBQUksV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUVELFNBQVM7UUFDUixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsK0RBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzFGLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsR0FBRywrREFBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDM0YsQ0FBQztJQUVELFVBQVU7UUFDVCxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsNkRBQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM5RixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsNkRBQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMvRixDQUFDO0lBRUQsSUFBSTtRQUNILE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDM0IsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUM1QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksNkNBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSwrQ0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ25CLHdCQUF3QjtRQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsSUFBSSxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUVoRSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLEVBQUUsR0FBRyxFQUFFO1lBQ3hELElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQ25FLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELFlBQVk7UUFDWCxNQUFNLFlBQVksR0FBRyxHQUFHLEVBQUU7WUFDekIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQ25FLENBQUM7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVELGVBQWU7UUFDZCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLEVBQUUsR0FBRyxFQUFFO1lBQzFELElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsSUFBSSxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUNqRSxDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFDRCxZQUFZO1FBQ1gsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxFQUFFLEdBQUcsRUFBRTtZQUN4RCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztZQUN2QyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUM1RSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUMzRSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDL0I7aUJBQU07Z0JBQ04sMENBQTBDO2dCQUMxQywwQ0FBMEM7Z0JBQzFDLG9CQUFvQjtnQkFDcEIscUJBQXFCO2dCQUNyQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7YUFDckI7WUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsSUFBSSxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUNuRSxDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFDRCxhQUFhO1FBQ1osSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDdkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDdkMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixxRUFBcUU7SUFDdEUsQ0FBQztDQUNEO0FBRWtCOzs7Ozs7Ozs7Ozs7O0FDL0luQjtBQUFBO0FBQU8sTUFBTSxLQUFLO0lBTWpCLFlBQVksTUFBTSxFQUFFLEtBQUssRUFBRSxVQUFVO1FBQ3BDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQzdCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQsVUFBVTtRQUNULE1BQU0sR0FBRyxHQUFnQixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3RFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMzQyxNQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2hELFNBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7WUFDakQsU0FBUyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RDLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtnQkFDcEIsU0FBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsaUNBQWlDLENBQUMsQ0FBQztnQkFDM0QsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsWUFBWSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7YUFDNUU7aUJBQU07Z0JBQ04sU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUMsV0FBVyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7YUFDNUU7WUFDRCxHQUFHLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3RCO0lBQ0YsQ0FBQztDQUNEOzs7Ozs7Ozs7Ozs7O0FDOUJEO0FBQUE7QUFBQTtBQUFBO0FBQXdDO0FBRXhDLE1BQU0sY0FBYyxHQUFHLENBQUMsTUFBbUIsRUFBRSxLQUFhLEVBQUUsVUFBbUIsRUFBRSxFQUFFO0lBQ2pGLElBQUksVUFBVSxFQUFFO1FBQ2YsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsR0FBRyxLQUFLLElBQUksQ0FBQztLQUNoQztTQUFNO1FBQ04sTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsR0FBRyxLQUFLLElBQUksQ0FBQztLQUNsQztBQUNGLENBQUM7QUFFRCxNQUFNLE1BQU07SUFZWCxZQUFZLE1BQU0sRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLFVBQVU7UUFDNUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDM0MsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzdCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQzdCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELFFBQVE7UUFDUCxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQsWUFBWTtRQUNYLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzNDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUM3QixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVELFlBQVk7UUFDWCxNQUFNLFdBQVcsR0FBRyxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQzNCLElBQUksTUFBTSxHQUFXLEdBQUcsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUM7WUFDMUQsSUFBSSxNQUFNLEdBQVcsR0FBRyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQztZQUN6RCxJQUFJLFVBQVUsR0FBVyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ3pDLE1BQU0sTUFBTSxHQUFHLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFO2dCQUMvQixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7b0JBQ3BCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxHQUFHLE1BQU0sQ0FBQztpQkFDakM7cUJBQU07b0JBQ04sSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLEdBQUcsTUFBTSxDQUFDO2lCQUNqQztnQkFDRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7Z0JBQzdCLElBQUksQ0FBQyxLQUFLLEdBQUcsOERBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDOUUsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO29CQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQztpQkFDeEI7Z0JBQ0QsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNoQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDdEMsNkJBQTZCO1lBQzlCLENBQUM7WUFDRCxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFFN0IsTUFBTSxXQUFXLEdBQUcsQ0FBQyxPQUFPLEVBQUUsRUFBRTtnQkFDL0IsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUN6QixNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUUsS0FBSyxDQUFDLENBQUM7WUFDdkMsQ0FBQztZQUNELE1BQU0sU0FBUyxHQUFHLENBQUMsS0FBSyxFQUFFLEVBQUU7Z0JBQzNCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztnQkFDN0IsUUFBUSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQztnQkFDbkQsUUFBUSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsRUFBRSxXQUFXLENBQUMsQ0FBQztZQUN4RCxDQUFDO1lBQ0QsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxXQUFXLENBQUMsQ0FBQztZQUNwRCxRQUFRLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ2pELENBQUM7UUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUN4RCxDQUFDO0NBQ0Q7QUFFK0I7Ozs7Ozs7Ozs7Ozs7QUNsRmhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE2RDtBQUM1QjtBQUVrQjtBQUM2QjtBQUVoRixNQUFNLElBQUk7SUFpQlQsWUFBWSxJQUFJLEVBQUUsSUFBSTtRQUVyQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsT0FBTyxHQUFHO1lBQ2QsR0FBRyxFQUFFLENBQUM7WUFDTixHQUFHLEVBQUUsQ0FBQztTQUNOO1FBQ0QsSUFBSSxDQUFDLE9BQU8sR0FBRztZQUNkLEdBQUcsRUFBRSxFQUFFO1lBQ1AsR0FBRyxFQUFFLEVBQUU7U0FDUDtRQUNELElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELFFBQVE7UUFDUCwyRUFBYyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFDbEUsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUN6QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDO1NBQ3hDO2FBQU07WUFDTixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDO1NBQ3ZDO1FBQ0QsSUFBSSxDQUFDLGFBQWEsR0FBRyxtRUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDaEQsSUFBSSxDQUFDLGFBQWEsR0FBRyxtRUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDaEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxtRUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDaEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxtRUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDaEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxtRUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFFOUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztTQUNqQztRQUVELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNyQixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDOUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQzlCO0lBQ0YsQ0FBQztJQUVELE1BQU07UUFDTCxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztRQUMvQyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztJQUNoRCxDQUFDO0lBRUQsUUFBUTtRQUNQLG1FQUFhLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM3SCxDQUFDO0lBRUQsWUFBWTtRQUNYLE1BQU0sZ0JBQWdCLEdBQUcsK0RBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3JHLE1BQU0sZ0JBQWdCLEdBQUcsK0RBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3JHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxpREFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ25HLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxpREFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ25HLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztTQUMzQjtRQUNELElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUVoQixNQUFNLFdBQVcsR0FBRyxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQy9CLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDO1lBQzVDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDO1lBQzVDLG1FQUFhLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUM1SCxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQztZQUMxQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQztZQUMxQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDZCxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1FBQzdELENBQUM7UUFDRCxxRUFBZSxDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQ3BELEdBQUcsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRCxtQkFBbUI7UUFDbEIsTUFBTSxzQkFBc0IsR0FBRyxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQ3RDLElBQUksaUJBQWlCLEdBQVksS0FBSyxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNqQyxpQkFBaUIsR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1lBQ2pILElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNsQyxJQUFJLFVBQWtCLENBQUM7WUFDdkIsVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO1lBRWxDLE1BQU0sV0FBVyxHQUFHLENBQUMsT0FBTyxFQUFFLEVBQUU7Z0JBQy9CLElBQUksaUJBQWlCLEVBQUU7b0JBQ3RCLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDO29CQUN0RCxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7b0JBQzlCLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztvQkFDOUIsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsR0FBRyxVQUFVLEVBQUU7d0JBQzNDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQzt3QkFDL0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO3FCQUM5Qjt5QkFBTTt3QkFDTixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7d0JBQzlCLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQzt3QkFDL0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUM7d0JBQ3RELElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDO3dCQUNqRCxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRTs0QkFDN0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO3lCQUN6Qjt3QkFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDO3dCQUMxQixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO3FCQUMxRDtpQkFDRDtxQkFBTTtvQkFDTixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7b0JBQy9CLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztpQkFDL0I7WUFDRixDQUFDO1lBQ0QsTUFBTSxTQUFTLEdBQUcsQ0FBQyxLQUFLLEVBQUUsRUFBRTtnQkFDM0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7Z0JBQ2pELElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztnQkFDL0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO2dCQUMvQixRQUFRLENBQUMsbUJBQW1CLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO2dCQUNuRCxRQUFRLENBQUMsbUJBQW1CLENBQUMsV0FBVyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBQ3hELENBQUM7WUFDRCxRQUFRLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBQ3BELFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDakQsQ0FBQztRQUVELElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLHNCQUFzQixDQUFDLENBQUM7SUFDMUUsQ0FBQztJQUVELFFBQVE7UUFDUCxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxHQUFHLEVBQUU7WUFDakQsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDdEIsTUFBTSxLQUFLLEdBQUcsSUFBSSwrQ0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQzFFO1FBQ0YsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBRUQsU0FBUztRQUNSLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLEdBQUcsRUFBRTtZQUNqRCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDZixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRCxXQUFXO1FBQ1YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLEVBQUUsR0FBRyxFQUFFO1lBQ25ELElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO1lBQzFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO1lBQzFDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDOUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUM5QixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDZCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDakIsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBRUQsWUFBWTtRQUNYLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDekIsQ0FBQztDQUNEO0FBRWEiLCJmaWxlIjoidHMtc2xpZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJpbXBvcnQge3NldExpbWl0fSBmcm9tICcuL2Z1bmN0aW9ucy50cyc7XHJcbmltcG9ydCB7RGF0YX0gZnJvbSAnLi9pbnRlcmZhY2VzLnRzJztcclxuXHJcbmNvbnN0IGRlZmF1bHREYXRhOiBEYXRhID0ge1xyXG5cdC8vIHdyYXBJZDogJyN0cy1zbGlkZXJfX3dyYXAtMScsXHJcblx0bWluSW5wdXRJZDogJ3RzLXNsaWRlcl9fbWluLWlucHV0JyxcclxuXHRtYXhJbnB1dElkOiAndHMtc2xpZGVyX19tYXgtaW5wdXQnLFxyXG5cdGlzQXJyYXk6IGZhbHNlLFxyXG5cdGFycmF5OiBbXSxcclxuXHRzdGVwOiAxLFxyXG5cdG1pblZhbHVlOiAwLFxyXG5cdG1heFZhbHVlOiAxMDAsXHJcblx0bWluVG9nZ2xlVmFsdWU6IDI1LFxyXG5cdG1heFRvZ2dsZVZhbHVlOiA3NSxcclxuXHRpc1JhbmdlOiB0cnVlLFxyXG5cdGlzVmVydGljYWw6IGZhbHNlLFxyXG5cdGlzVGFiOiB0cnVlLFxyXG5cdGlzU2NhbGU6IHRydWUsXHJcblx0c2NhbGVRdWFudGl0eTogNFxyXG59XHJcbi8vIGNvbnN0IHNsaWRlckRhdGEyOiBEYXRhID0ge1xyXG4vLyBcdC8vIHdyYXBJZDogJyN0cy1zbGlkZXJfX3dyYXAtMicsXHJcbi8vIFx0bWluSW5wdXRJZDogJ3BhZ2VfX2lucHV0LTIxJyxcclxuLy8gXHRtYXhJbnB1dElkOiAncGFnZV9faW5wdXQtMjInLFxyXG4vLyBcdGlzQXJyYXk6IHRydWUsXHJcbi8vIFx0YXJyYXk6IFsn0LzQsNC70L4nLCAn0L3QtdC80L3QvtCz0L4nLCAn0YHRgNC10LTQvdC1JywgJ9Cx0L7Qu9GM0YjQtScsICfQvNC90L7Qs9C+J10sXHJcbi8vIFx0c3RlcDogMSxcclxuLy8gXHRtaW5WYWx1ZTogMCxcclxuLy8gXHRtYXhWYWx1ZTogMTAsXHJcbi8vIFx0bWluVG9nZ2xlVmFsdWU6IDIsXHJcbi8vIFx0bWF4VG9nZ2xlVmFsdWU6IDgsXHJcbi8vIFx0aXNSYW5nZTogdHJ1ZSxcclxuLy8gXHRpc1ZlcnRpY2FsOiB0cnVlLFxyXG4vLyBcdGlzVGFiOiB0cnVlLFxyXG4vLyBcdGlzU2NhbGU6IHRydWUsXHJcbi8vIFx0c2NhbGVRdWFudGl0eTogNVxyXG4vLyB9XHJcblxyXG5jb25zdCBzZXREYXRhTGltaXQgPSAoZGF0YTogRGF0YSkgPT4ge1xyXG5cdGRhdGEubWluVG9nZ2xlVmFsdWUgPSBzZXRMaW1pdChkYXRhLm1pblRvZ2dsZVZhbHVlLCBkYXRhLm1pblZhbHVlLCBkYXRhLm1heFZhbHVlKTtcclxuXHRkYXRhLm1heFRvZ2dsZVZhbHVlID0gc2V0TGltaXQoZGF0YS5tYXhUb2dnbGVWYWx1ZSwgZGF0YS5taW5WYWx1ZSwgZGF0YS5tYXhWYWx1ZSk7XHJcbn1cclxuXHJcbi8vIHNldERhdGFMaW1pdChzbGlkZXJEYXRhMSk7XHJcbi8vIHNldERhdGFMaW1pdChzbGlkZXJEYXRhMik7XHJcblxyXG5leHBvcnQge3NldERhdGFMaW1pdCwgZGVmYXVsdERhdGF9OyIsImNvbnN0IHNldE1vdXNlSGFuZGxlciA9IChlbGVtLCBvbk1vdmUsIG9uRG92bj8sIG9uVXA/KSA9PiB7XHJcblxyXG5cdGNvbnN0IG9uTW91c2VEb3duID0gKGV2dCkgPT4ge1xyXG5cdFx0aWYgKG9uRG92bikge1xyXG5cdFx0XHRvbkRvdm4oZXZ0KTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0Y29uc3Qgb25Nb3VzZU1vdmUgPSAobW92ZUV2dCkgPT4ge1xyXG5cdFx0XHRvbk1vdmUobW92ZUV2dCk7XHJcblx0XHR9XHJcblx0XHRjb25zdCBvbk1vdXNlVXAgPSAodXBFdnQpID0+IHtcclxuXHRcdFx0aWYgKG9uVXApIHtcclxuXHRcdFx0XHRvblVwKHVwRXZ0KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25Nb3VzZVVwKTtcclxuXHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUpO1xyXG5cdFx0fVxyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUpO1xyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uTW91c2VVcCk7XHJcblx0fVxyXG5cclxuXHRlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIG9uTW91c2VEb3duKTtcclxufVxyXG5cclxuY29uc3Qgcm91bmQgPSAodmFsdWU6IG51bWJlciwgc3RlcDogbnVtYmVyKSA9PiB7XHJcblx0Y29uc3QgcHJlY2lzaW9uID0geCA9PiArKCAoeC50b1N0cmluZygpLmluY2x1ZGVzKCcuJykpID8gKHgudG9TdHJpbmcoKS5zcGxpdCgnLicpLnBvcCgpLmxlbmd0aCkgOiAoMCkgKTtcclxuXHRsZXQgcm91bmRlZDogc3RyaW5nID0gKE1hdGgucm91bmQodmFsdWUgLyBzdGVwKSAqIHN0ZXApLnRvRml4ZWQocHJlY2lzaW9uKHN0ZXApKTtcclxuXHRyZXR1cm4gcm91bmRlZDtcclxufVxyXG5cclxuY29uc3Qgc2V0TGltaXQgPSAodmFsdWU6IG51bWJlciwgbWluOiBudW1iZXIsIG1heDogbnVtYmVyKSA9PiB7XHJcblx0aWYgKHZhbHVlID4gbWF4KSB7XHJcblx0XHR2YWx1ZSA9IG1heDtcclxuXHR9IGVsc2UgaWYgKHZhbHVlIDwgbWluKSB7XHJcblx0XHR2YWx1ZSA9IG1pbjtcclxuXHR9XHJcblx0cmV0dXJuIHZhbHVlO1xyXG59XHJcblxyXG5jb25zdCB0b1ByZWNlbnQgPSAodmFsdWU6IG51bWJlciwgbWluOiBudW1iZXIsIG1heDogbnVtYmVyKSA9PiAodmFsdWUgLSBtaW4pIC8gKG1heCAtIG1pbik7XHJcblxyXG5jb25zdCB0b1ZhbHVlID0gKHZhbHVlOiBudW1iZXIsIG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcikgPT4gKG1pbiArIChtYXggLSBtaW4pICogdmFsdWUpO1xyXG5cclxuY29uc3Qgc2V0UmFuZ2VTdHlsZSA9IChyYW5nZTogSFRNTEVsZW1lbnQsIG1pbjogbnVtYmVyLCBtYXg6IG51bWJlciwgaXNWZXJ0aWNhbDogYm9vbGVhbikgPT4ge1xyXG5cdGlmIChpc1ZlcnRpY2FsKSB7XHJcblx0XHRyYW5nZS5zdHlsZS50b3AgPSBgJHttaW59cHhgO1xyXG5cdFx0cmFuZ2Uuc3R5bGUuaGVpZ2h0ID0gYCR7KG1heCAtIG1pbil9cHhgO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRyYW5nZS5zdHlsZS5sZWZ0ID0gYCR7bWlufXB4YDtcclxuXHRcdHJhbmdlLnN0eWxlLndpZHRoID0gYCR7KG1heCAtIG1pbil9cHhgO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IHtzZXRNb3VzZUhhbmRsZXIsIHJvdW5kLCBzZXRMaW1pdCwgdG9QcmVjZW50LCB0b1ZhbHVlLCBzZXRSYW5nZVN0eWxlfTsiLCJpbXBvcnQge1ByZXNlbnRlcn0gZnJvbSAnLi9wcmVzZW50ZXIudHMnO1xyXG5cclxuKGZ1bmN0aW9uKCQpIHtcclxuXHRjb25zdCBtZXRob2RzID0ge1xyXG5cdFx0aW5pdDogZnVuY3Rpb24ob3B0aW9ucykge1xyXG5cdFx0XHRjb25zdCBpZDogc3RyaW5nID0gJyMnICsgdGhpcy5wcm9wKCdpZCcpO1xyXG5cdFx0XHRjb25zdCB3cmFwOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaWQpO1xyXG5cdFx0XHRjb25zdCBwcmVzZW50ZXIgPSBuZXcgUHJlc2VudGVyKG9wdGlvbnMsIHdyYXApO1xyXG5cdFx0XHR3aW5kb3dbaWRdID0gcHJlc2VudGVyO1xyXG5cdFx0fSxcclxuXHRcdGNoYW5nZTogZnVuY3Rpb24ob3B0aW9ucykge1xyXG5cdFx0XHRjb25zdCBpZDogc3RyaW5nID0gJyMnICsgdGhpcy5wcm9wKCdpZCcpO1xyXG5cdFx0XHRjb25zdCBwcmVzZW50ZXIgPSB3aW5kb3dbaWRdO1xyXG5cdFx0XHRwcmVzZW50ZXIub3B0aW9ucyA9IG9wdGlvbnM7XHJcblx0XHRcdHByZXNlbnRlci5jaGFuZ2VEYXRhKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQkLmZuLnRzU2xpZGVyID0gZnVuY3Rpb24ob3B0aW9ucywgbWV0aG9kPykge1xyXG5cdFx0Y29uc3QgaWQ6IHN0cmluZyA9ICcjJyArIHRoaXMucHJvcCgnaWQnKTtcclxuXHRcdGlmICggbWV0aG9kID09PSAnY2hhbmdlJyAmJiB3aW5kb3dbaWRdICkge1xyXG5cdFx0XHRjb25zdCBjaGFuZ2UgPSBtZXRob2RzLmNoYW5nZS5hcHBseSggdGhpcywgYXJndW1lbnRzICk7XHJcblx0XHRcdC8vIHJldHVybiBjaGFuZ2U7XHJcblx0XHR9IGVsc2UgaWYgKCB0eXBlb2YgbWV0aG9kID09PSAnb2JqZWN0JyB8fCAhIG1ldGhvZCB8fCAhIHdpbmRvd1tpZF0gKSB7XHJcblx0XHRcdGNvbnN0IGluaXQgPSBtZXRob2RzLmluaXQuYXBwbHkoIHRoaXMsIGFyZ3VtZW50cyApO1xyXG5cdFx0XHQvLyByZXR1cm4gaW5pdDtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdCQuZXJyb3IoICfQnNC10YLQvtC0INGBINC40LzQtdC90LXQvCAnICsgIG1ldGhvZCArICcg0L3QtSDRgdGD0YnQtdGB0YLQstGD0LXRgiDQtNC70Y8galF1ZXJ5LnRzU2xpZGVyJyApO1xyXG5cdFx0fSBcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxufSkoalF1ZXJ5KTtcclxuXHJcbiIsImNvbnN0IGluaXRWaWV3TWFya3VwID0gKGNvbnRyb2xXcmFwOiBIVE1MRWxlbWVudCwgdmVydGljYWw6IGJvb2xlYW4pID0+IHtcclxuXHRjb25zdCBjb250b2xNYXJrdXA6IHN0cmluZyA9IGA8ZGl2IGNsYXNzPVwidHMtc2xpZGVyX19jb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0cy1zbGlkZXJfX2JhclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidHMtc2xpZGVyX190b2dnbGUgdHMtc2xpZGVyX190b2dnbGUtLW1pblwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0cy1zbGlkZXJfX3RvZ2dsZS12YWx1ZSB0cy1zbGlkZXJfX3RvZ2dsZS12YWx1ZS0tbWluXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidHMtc2xpZGVyX190b2dnbGUgdHMtc2xpZGVyX190b2dnbGUtLW1heFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0cy1zbGlkZXJfX3RvZ2dsZS12YWx1ZSB0cy1zbGlkZXJfX3RvZ2dsZS12YWx1ZS0tbWF4XCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidHMtc2xpZGVyX19yYW5nZVwiPjwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+YDtcclxuXHQvLyBjb25zdCBjb250cm9sV3JhcDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHdyYXApO1xyXG4gIC8vIGNvbnNvbGUubG9nKGNvbnRyb2xXcmFwKTtcclxuXHRjb250cm9sV3JhcC5pbm5lckhUTUwgPSBjb250b2xNYXJrdXA7XHJcbiAgY29uc3QgZGl2ID0gY29udHJvbFdyYXAucXVlcnlTZWxlY3RvckFsbCgnZGl2Jyk7XHJcbiAgaWYgKHZlcnRpY2FsKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRpdi5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBmaXJzdENsYXNzOiBzdHJpbmcgPSBkaXZbaV0uY2xhc3NMaXN0WzBdO1xyXG4gICAgICBjb25zdCB2ZXJ0aWNhbENsYXNzOiBzdHJpbmcgPSBmaXJzdENsYXNzICsgJy0tdmVydGljYWwnO1xyXG4gICAgICBkaXZbaV0uY2xhc3NMaXN0LmFkZCh2ZXJ0aWNhbENsYXNzKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcmt1cCA9IChzbGlkZXI6IEhUTUxFbGVtZW50KSA9PiB7XHJcbiAgaW50ZXJmYWNlIE1hcmt1cCB7XHJcbiAgICBtaW46IEhUTUxFbGVtZW50O1xyXG4gICAgbWF4OiBIVE1MRWxlbWVudDtcclxuICAgIHJhbmdlOiBIVE1MRWxlbWVudDtcclxuICAgIGJhcjogSFRNTEVsZW1lbnQ7XHJcbiAgICBtaW5UYWI6IEhUTUxFbGVtZW50O1xyXG4gICAgbWF4VGFiOiBIVE1MRWxlbWVudDtcclxuICB9XHJcbiAgbGV0IG1hcmt1cDogTWFya3VwID0geyAgXHJcbiAgICAgbWluOiBzbGlkZXIucXVlcnlTZWxlY3RvcignLnRzLXNsaWRlcl9fdG9nZ2xlLS1taW4nKSxcclxuICAgICBtYXg6IHNsaWRlci5xdWVyeVNlbGVjdG9yKCcudHMtc2xpZGVyX190b2dnbGUtLW1heCcpLFxyXG4gICAgIHJhbmdlOiBzbGlkZXIucXVlcnlTZWxlY3RvcignLnRzLXNsaWRlcl9fcmFuZ2UnKSxcclxuICAgICBiYXI6IHNsaWRlci5xdWVyeVNlbGVjdG9yKCcudHMtc2xpZGVyX19iYXInKSxcclxuICAgICBtaW5UYWI6IHNsaWRlci5xdWVyeVNlbGVjdG9yKCcudHMtc2xpZGVyX190b2dnbGUtdmFsdWUtLW1pbicpLFxyXG4gICAgIG1heFRhYjogc2xpZGVyLnF1ZXJ5U2VsZWN0b3IoJy50cy1zbGlkZXJfX3RvZ2dsZS12YWx1ZS0tbWF4JylcclxuICB9XHJcbiAgcmV0dXJuIG1hcmt1cDtcclxufVxyXG5cclxuZXhwb3J0IHtpbml0Vmlld01hcmt1cCwgbWFya3VwfTsiLCJpbXBvcnQge0RhdGEsIFZhbHVlLCBUYWJUZXh0fSBmcm9tICcuL2ludGVyZmFjZXMudHMnO1xyXG5pbXBvcnQge3NldE1vdXNlSGFuZGxlciwgcm91bmQsIHNldExpbWl0fSBmcm9tICcuL2Z1bmN0aW9ucy50cyc7XHJcblxyXG5jbGFzcyBNb2RlbCB7XHJcblxyXG5cdGRhdGE6IERhdGE7XHJcblx0bWluSW5wdXQ6IGFueTtcclxuXHRtYXhJbnB1dDogYW55O1xyXG5cdHZhbHVlOiBWYWx1ZTtcclxuXHRwcmVjZW50OiBWYWx1ZTtcclxuXHR0YWJUZXh0OiBUYWJUZXh0O1xyXG5cdG9ic2VydmVyOiBIVE1MRWxlbWVudDtcclxuXHRtaW46IG51bWJlcjtcclxuXHRtYXg6IG51bWJlcjtcclxuXHRzY2FsZTogc3RyaW5nW107XHJcblxyXG5cdGNvbnN0cnVjdG9yKGRhdGEpIHtcdFx0XHJcblx0XHR0aGlzLmRhdGEgPSBkYXRhO1xyXG5cdFx0dGhpcy50YWJUZXh0ID0ge1xyXG5cdFx0XHRtaW46ICcnLFxyXG5cdFx0XHRtYXg6ICcnXHJcblx0XHR9XHJcblx0XHR0aGlzLnZhbHVlID0ge1xyXG5cdFx0XHRtaW46IDAsXHJcblx0XHRcdG1heDogMFxyXG5cdFx0fVxyXG5cdFx0dGhpcy5wcmVjZW50ID0ge1xyXG5cdFx0XHRtaW46IDAsXHJcblx0XHRcdG1heDogMFxyXG5cdFx0fVxyXG5cdFx0dGhpcy5zY2FsZSA9IFtdO1xyXG5cdFx0dGhpcy5vYnNlcnZlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0V2ZW50Jyk7XHJcblx0XHR0aGlzLmluaXQoKTtcclxuXHRcdHRoaXMuc2V0U2NhbGUoKTtcclxuXHRcdHRoaXMuYWRkTGlzdGVuZXIoKTtcclxuXHRcdHRoaXMuY2hhbmdlSW5wdXQoKTtcclxuXHR9XHJcblxyXG5cdHNldElucHV0KCkge1xyXG5cdFx0dGhpcy5taW5JbnB1dC52YWx1ZSA9IHRoaXMudGFiVGV4dC5taW47XHJcblx0XHR0aGlzLm1heElucHV0LnZhbHVlID0gdGhpcy50YWJUZXh0Lm1heDtcclxuXHRcdGlmICghdGhpcy5kYXRhLmlzUmFuZ2UpIHtcclxuXHRcdFx0aWYgKHRoaXMuZGF0YS5pc0FycmF5KSB7XHJcblx0XHRcdFx0dGhpcy5taW5JbnB1dC52YWx1ZSA9IHRoaXMuZGF0YS5hcnJheVswXTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aGlzLm1pbklucHV0LnZhbHVlID0gdGhpcy5kYXRhLm1pblZhbHVlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHQvLyB0aGlzLmNoYW5nZUlucHV0KCk7XHJcblx0XHRpZiAoIXRoaXMuZGF0YS5pc0FycmF5KSB7XHJcblx0XHRcdHRoaXMuc2V0SW5wdXRMaW1pdCgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0c2V0QXJyYXlWYWx1ZSgpIHtcclxuXHRcdGxldCBtaW4gPSBNYXRoLnJvdW5kKHRoaXMucHJlY2VudC5taW4gKiAodGhpcy5kYXRhLmFycmF5Lmxlbmd0aCAtIDEpKTtcclxuXHRcdGxldCBtYXggPSBNYXRoLnJvdW5kKHRoaXMucHJlY2VudC5tYXggKiAodGhpcy5kYXRhLmFycmF5Lmxlbmd0aCAtIDEpKTtcclxuXHRcdHRoaXMudGFiVGV4dC5taW4gPSB0aGlzLmRhdGEuYXJyYXlbbWluXTtcclxuXHRcdHRoaXMudGFiVGV4dC5tYXggPSB0aGlzLmRhdGEuYXJyYXlbbWF4XTtcclxuXHRcdHRoaXMuc2V0SW5wdXQoKTtcclxuXHR9XHJcblxyXG5cdGluaXQoKSB7XHJcblx0XHRpZiAodGhpcy5kYXRhLmlzQXJyYXkpIHtcclxuXHRcdFx0dGhpcy5vYnNlcnZlci5hZGRFdmVudExpc3RlbmVyKCdzZXRQcmVjZW50JywgKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMuc2V0QXJyYXlWYWx1ZSgpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMudGFiVGV4dC5taW4gPSByb3VuZCh0aGlzLmRhdGEubWluVG9nZ2xlVmFsdWUsIHRoaXMuZGF0YS5zdGVwKTtcclxuXHRcdFx0dGhpcy50YWJUZXh0Lm1heCA9IHJvdW5kKHRoaXMuZGF0YS5tYXhUb2dnbGVWYWx1ZSwgdGhpcy5kYXRhLnN0ZXApO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5taW5JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgdGhpcy5kYXRhLm1pbklucHV0SWQpO1xyXG5cdFx0dGhpcy5tYXhJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgdGhpcy5kYXRhLm1heElucHV0SWQpO1xyXG5cdFx0dGhpcy5zZXRJbnB1dCgpO1xyXG5cdH1cclxuXHJcblx0c2V0U2NhbGUoKSB7XHJcblx0XHRpZiAodGhpcy5kYXRhLmlzQXJyYXkpIHtcclxuXHRcdFx0aWYgKHRoaXMuZGF0YS5pc1NjYWxlKSB7XHJcblx0XHRcdFx0dGhpcy5zY2FsZSA9IHRoaXMuZGF0YS5hcnJheTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKHRoaXMuZGF0YS5pc1NjYWxlKSB7XHJcblx0XHRcdFx0bGV0IHF1YW50aXR5ID0gdGhpcy5kYXRhLnNjYWxlUXVhbnRpdHk7XHJcblx0XHRcdFx0aWYgKHF1YW50aXR5IDwgMikge1xyXG5cdFx0XHRcdFx0cXVhbnRpdHkgPSAyO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHF1YW50aXR5OyBpKyspIHtcclxuXHRcdFx0XHRcdGxldCB0ZXh0VmFsdWU6IG51bWJlciA9IE1hdGgucm91bmQoKHRoaXMuZGF0YS5taW5WYWx1ZSArICh0aGlzLmRhdGEubWF4VmFsdWUgLSB0aGlzLmRhdGEubWluVmFsdWUpIC8gKHF1YW50aXR5IC0gMSkgKiBpKSAvIHRoaXMuZGF0YS5zdGVwKSAqIHRoaXMuZGF0YS5zdGVwO1xyXG5cdFx0XHRcdFx0bGV0IHRleHQ6IHN0cmluZyA9IHJvdW5kKHRleHRWYWx1ZSwgdGhpcy5kYXRhLnN0ZXApO1xyXG5cdFx0XHRcdFx0dGhpcy5zY2FsZS5wdXNoKHRleHQpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0YWRkTGlzdGVuZXIoKSB7XHJcblx0XHR0aGlzLm9ic2VydmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZVZhbHVlJywgKCkgPT4ge1xyXG5cdFx0XHRpZiAodGhpcy5kYXRhLmlzQXJyYXkpIHtcclxuXHRcdFx0XHR0aGlzLnNldEFycmF5VmFsdWUoKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aGlzLnRhYlRleHQubWluID0gcm91bmQodGhpcy52YWx1ZS5taW4sIHRoaXMuZGF0YS5zdGVwKTtcclxuXHRcdFx0XHR0aGlzLnRhYlRleHQubWF4ID0gcm91bmQodGhpcy52YWx1ZS5tYXgsIHRoaXMuZGF0YS5zdGVwKTtcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLnNldElucHV0KCk7XHJcblx0XHRcdHRoaXMub2JzZXJ2ZXIuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2NoYW5nZVRhYlRleHQnKSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHNldElucHV0TGltaXQoKSB7XHJcblx0XHR0aGlzLnZhbHVlLm1pbiA9ICt0aGlzLm1pbklucHV0LnZhbHVlO1xyXG5cdFx0dGhpcy52YWx1ZS5tYXggPSArdGhpcy5tYXhJbnB1dC52YWx1ZTtcclxuXHRcdHRoaXMudmFsdWUubWluID0gc2V0TGltaXQodGhpcy52YWx1ZS5taW4sIHRoaXMuZGF0YS5taW5WYWx1ZSwgdGhpcy52YWx1ZS5tYXgpO1xyXG5cdFx0dGhpcy52YWx1ZS5tYXggPSBzZXRMaW1pdCh0aGlzLnZhbHVlLm1heCwgdGhpcy52YWx1ZS5taW4sIHRoaXMuZGF0YS5tYXhWYWx1ZSk7XHJcblx0XHR0aGlzLm1pbklucHV0LnZhbHVlID0gdGhpcy52YWx1ZS5taW4udG9TdHJpbmcoKTtcclxuXHRcdHRoaXMubWF4SW5wdXQudmFsdWUgPSB0aGlzLnZhbHVlLm1heC50b1N0cmluZygpO1xyXG5cdFx0dGhpcy50YWJUZXh0Lm1pbiA9IHJvdW5kKHRoaXMubWluSW5wdXQudmFsdWUsIHRoaXMuZGF0YS5zdGVwKTtcclxuXHRcdHRoaXMudGFiVGV4dC5tYXggPSByb3VuZCh0aGlzLm1heElucHV0LnZhbHVlLCB0aGlzLmRhdGEuc3RlcCk7XHJcblx0fVxyXG5cclxuXHRjaGFuZ2VJbnB1dCgpIHtcclxuXHRcdGNvbnN0IG9uQmx1ciA9ICgpID0+IHtcclxuXHRcdFx0aWYgKHRoaXMuZGF0YS5pc0FycmF5KSB7XHJcblx0XHRcdFx0Y29uc3QgaW5BcnJheSA9ICh2YWx1ZSwgbGltaXQpID0+IHtcclxuXHRcdFx0XHRcdGlmICh0aGlzLmRhdGEuYXJyYXkuaW5jbHVkZXModmFsdWUpKSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiB2YWx1ZTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiBsaW1pdDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy5taW5JbnB1dC52YWx1ZSA9IGluQXJyYXkodGhpcy5taW5JbnB1dC52YWx1ZSwgdGhpcy5kYXRhLmFycmF5WzBdKTtcclxuXHRcdFx0XHR0aGlzLm1heElucHV0LnZhbHVlID0gaW5BcnJheSh0aGlzLm1heElucHV0LnZhbHVlLCB0aGlzLmRhdGEuYXJyYXlbdGhpcy5kYXRhLmFycmF5Lmxlbmd0aCAtIDFdKTtcclxuXHRcdFx0XHR0aGlzLnZhbHVlLm1pbiA9IHRoaXMuZGF0YS5hcnJheS5pbmRleE9mKHRoaXMubWluSW5wdXQudmFsdWUpO1xyXG5cdFx0XHRcdHRoaXMudmFsdWUubWF4ID0gdGhpcy5kYXRhLmFycmF5LmluZGV4T2YodGhpcy5tYXhJbnB1dC52YWx1ZSk7XHJcblx0XHRcdFx0aWYgKHRoaXMudmFsdWUubWluID4gdGhpcy52YWx1ZS5tYXgpIHtcclxuXHRcdFx0XHRcdHRoaXMudmFsdWUubWluID0gdGhpcy52YWx1ZS5tYXg7XHJcblx0XHRcdFx0XHR0aGlzLm1pbklucHV0LnZhbHVlID0gdGhpcy5tYXhJbnB1dC52YWx1ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy50YWJUZXh0Lm1pbiA9IHRoaXMubWluSW5wdXQudmFsdWU7XHJcblx0XHRcdFx0dGhpcy50YWJUZXh0Lm1heCA9IHRoaXMubWF4SW5wdXQudmFsdWU7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Ly8gdGhpcy52YWx1ZS5taW4gPSArdGhpcy5taW5JbnB1dC52YWx1ZTtcclxuXHRcdFx0XHQvLyB0aGlzLnZhbHVlLm1heCA9ICt0aGlzLm1heElucHV0LnZhbHVlO1xyXG5cdFx0XHRcdC8vIHRoaXMudmFsdWUubWluID0gc2V0TGltaXQodGhpcy52YWx1ZS5taW4sIHRoaXMuZGF0YS5taW5WYWx1ZSwgdGhpcy52YWx1ZS5tYXgpO1xyXG5cdFx0XHRcdC8vIHRoaXMudmFsdWUubWF4ID0gc2V0TGltaXQodGhpcy52YWx1ZS5tYXgsIHRoaXMudmFsdWUubWluLCB0aGlzLmRhdGEubWF4VmFsdWUpO1xyXG5cdFx0XHRcdC8vIHRoaXMubWluSW5wdXQudmFsdWUgPSB0aGlzLnZhbHVlLm1pbi50b1N0cmluZygpO1xyXG5cdFx0XHRcdC8vIHRoaXMubWF4SW5wdXQudmFsdWUgPSB0aGlzLnZhbHVlLm1heC50b1N0cmluZygpO1xyXG5cdFx0XHRcdC8vIHRoaXMudGFiVGV4dC5taW4gPSByb3VuZCh0aGlzLm1pbklucHV0LnZhbHVlLCB0aGlzLmRhdGEuc3RlcCk7XHJcblx0XHRcdFx0Ly8gdGhpcy50YWJUZXh0Lm1heCA9IHJvdW5kKHRoaXMubWF4SW5wdXQudmFsdWUsIHRoaXMuZGF0YS5zdGVwKTtcclxuXHRcdFx0XHR0aGlzLnNldElucHV0TGltaXQoKTtcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLm9ic2VydmVyLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdjaGFuZ2VJbnB1dCcpKTtcclxuXHRcdH1cclxuXHRcdHRoaXMubWluSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIG9uQmx1cik7XHJcblx0XHR0aGlzLm1heElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBvbkJsdXIpO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IHtNb2RlbH07IiwiaW1wb3J0IHtWaWV3fSBmcm9tICcuL3ZpZXcudHMnO1xyXG5pbXBvcnQge0RhdGEsIFZhbHVlLCBUYWJUZXh0fSBmcm9tICcuL2ludGVyZmFjZXMudHMnO1xyXG5pbXBvcnQge01vZGVsfSBmcm9tICcuL21vZGVsLnRzJztcclxuaW1wb3J0IHtzZXRNb3VzZUhhbmRsZXIsIHJvdW5kLCBzZXRSYW5nZVN0eWxlLCB0b1ByZWNlbnQsIHRvVmFsdWV9IGZyb20gJy4vZnVuY3Rpb25zLnRzJztcclxuaW1wb3J0IHttYXJrdXB9IGZyb20gJy4vaW5pdC12aWV3LW1hcmt1cC50cyc7XHJcbmltcG9ydCB7ZGVmYXVsdERhdGEsIHNldERhdGFMaW1pdH0gZnJvbSAnLi9kYXRhLnRzJztcclxuXHJcbmNsYXNzIFByZXNlbnRlciB7XHJcblxyXG5cdHdyYXA6IEhUTUxFbGVtZW50O1xyXG5cdGRhdGE6IERhdGE7XHJcblx0b3B0aW9uczogYW55O1xyXG5cdHZpZXc6IFZpZXc7XHJcblx0bW9kZWw6IE1vZGVsO1xyXG5cdG1heDogbnVtYmVyO1xyXG5cdG1pbjogbnVtYmVyO1xyXG5cdHZhbHVlOiBWYWx1ZTtcclxuXHRtb2RlbFRhYlRleHQ6IFRhYlRleHQ7XHJcblxyXG5cdGNvbnN0cnVjdG9yKG9wdGlvbnMsIHdyYXApIHtcclxuXHRcdFxyXG5cdFx0dGhpcy53cmFwID0gd3JhcDtcclxuXHRcdHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XHJcblx0XHR0aGlzLmNyZWF0ZURhdGEoKTtcclxuXHRcdHRoaXMuaW5pdCgpO1xyXG5cdFx0dGhpcy5vbk1vdmVUb2dnbGUoKTtcclxuXHRcdHRoaXMub25DaGFuZ2VUYWJUZXh0KCk7XHJcblx0XHR0aGlzLm9uQ2FuZ2VJbnB1dCgpO1xyXG5cdH1cclxuXHJcblx0c2V0VmFsdWUoKSB7XHJcblx0XHR0aGlzLnZhbHVlID0ge1xyXG5cdFx0XHRtaW46IHRoaXMuZGF0YS5taW5Ub2dnbGVWYWx1ZSxcclxuXHRcdFx0bWF4OiB0aGlzLmRhdGEubWF4VG9nZ2xlVmFsdWVcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGNyZWF0ZURhdGEoKSB7XHJcblx0XHRmdW5jdGlvbiBkZWVwQ2xvbmUob2JqKSB7XHJcblx0XHQgIGNvbnN0IGNsT2JqID0ge307XHJcblx0XHQgIGZvcihjb25zdCBpIGluIG9iaikge1xyXG5cdFx0ICAgIGlmIChvYmpbaV0gaW5zdGFuY2VvZiBPYmplY3QpIHtcclxuXHRcdCAgICAgIGNsT2JqW2ldID0gZGVlcENsb25lKG9ialtpXSk7XHJcblx0XHQgICAgICBjb250aW51ZTtcclxuXHRcdCAgICB9XHJcblx0XHQgICAgY2xPYmpbaV0gPSBvYmpbaV07XHJcblx0XHQgIH1cclxuXHRcdCAgcmV0dXJuIGNsT2JqO1xyXG5cdFx0fVxyXG5cdFx0Y29uc3QgZGF0YUNsb25lID0gZGVlcENsb25lKGRlZmF1bHREYXRhKTtcclxuXHRcdHRoaXMuZGF0YSA9IE9iamVjdC5hc3NpZ24oZGF0YUNsb25lLCB0aGlzLm9wdGlvbnMpO1xyXG5cdFx0c2V0RGF0YUxpbWl0KHRoaXMuZGF0YSk7XHJcblx0XHR0aGlzLnNldFZhbHVlKCk7XHJcblx0fVxyXG5cclxuXHRjaGFuZ2VEYXRhKCkge1xyXG5cdFx0dGhpcy5kYXRhID0gT2JqZWN0LmFzc2lnbih0aGlzLmRhdGEsIHRoaXMub3B0aW9ucyk7XHJcblx0XHRzZXREYXRhTGltaXQodGhpcy5kYXRhKTtcclxuXHRcdHRoaXMuc2V0VmFsdWUoKTtcclxuXHRcdHRoaXMuaW5pdCgpO1xyXG5cdFx0dGhpcy5vbk1vdmVUb2dnbGUoKTtcclxuXHRcdHRoaXMub25DaGFuZ2VUYWJUZXh0KCk7XHJcblx0XHR0aGlzLm9uQ2FuZ2VJbnB1dCgpO1xyXG5cdH1cclxuXHJcblx0c2V0VGFiVGV4dCgpIHtcclxuXHRcdHRoaXMudmlldy50YWJUZXh0Lm1pbiA9IHRoaXMubW9kZWwudGFiVGV4dC5taW47XHJcblx0XHR0aGlzLnZpZXcudGFiVGV4dC5tYXggPSB0aGlzLm1vZGVsLnRhYlRleHQubWF4O1xyXG5cdH1cclxuXHJcblx0aW5pdFNjYWxlKCkge1xyXG5cdFx0dGhpcy52aWV3LnNjYWxlID0gdGhpcy5tb2RlbC5zY2FsZTtcclxuXHRcdHRoaXMudmlldy5jb250YWluZXIuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2luaXRTY2FsZScpKTtcclxuXHR9XHJcblxyXG5cdHNldFRvVmlldygpIHtcclxuXHRcdHRoaXMudmlldy5wcmVjZW50Lm1pbiA9IHRvUHJlY2VudCh0aGlzLnZhbHVlLm1pbiwgdGhpcy5kYXRhLm1pblZhbHVlLCB0aGlzLmRhdGEubWF4VmFsdWUpO1xyXG5cdFx0dGhpcy52aWV3LnByZWNlbnQubWF4ID0gdG9QcmVjZW50KHRoaXMudmFsdWUubWF4LCB0aGlzLmRhdGEubWluVmFsdWUsIHRoaXMuZGF0YS5tYXhWYWx1ZSk7XHJcblx0fVxyXG5cclxuXHRzZXRUb01vZGVsKCkge1xyXG5cdFx0dGhpcy5tb2RlbC52YWx1ZS5taW4gPSB0b1ZhbHVlKHRoaXMudmlldy5wcmVjZW50Lm1pbiwgdGhpcy5kYXRhLm1pblZhbHVlLCB0aGlzLmRhdGEubWF4VmFsdWUpO1xyXG5cdFx0dGhpcy5tb2RlbC52YWx1ZS5tYXggPSB0b1ZhbHVlKHRoaXMudmlldy5wcmVjZW50Lm1heCwgdGhpcy5kYXRhLm1pblZhbHVlLCB0aGlzLmRhdGEubWF4VmFsdWUpO1xyXG5cdH1cclxuXHJcblx0aW5pdCgpIHtcclxuXHRcdGNvbnN0IHZpZXdEYXRhID0gdGhpcy5kYXRhO1xyXG5cdFx0Y29uc3QgbW9kZWxEYXRhID0gdGhpcy5kYXRhO1xyXG5cdFx0dGhpcy52aWV3ID0gbmV3IFZpZXcodmlld0RhdGEsIHRoaXMud3JhcCk7XHJcblx0XHR0aGlzLm1vZGVsID0gbmV3IE1vZGVsKG1vZGVsRGF0YSk7XHJcblx0XHR0aGlzLnNldFZhbHVlTGltaXQoKTtcclxuXHRcdHRoaXMuaW5pdFNjYWxlKCk7XHJcblx0XHR0aGlzLnNldFRvVmlldygpO1xyXG5cdFx0dGhpcy5tb2RlbC5wcmVjZW50ID0gdGhpcy52aWV3LnByZWNlbnQ7XHJcblx0XHR0aGlzLm1vZGVsLm9ic2VydmVyLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdzZXRQcmVjZW50JykpO1xyXG5cdFx0dGhpcy5zZXRUYWJUZXh0KCk7XHJcblx0XHR0aGlzLnZpZXcuc2V0VGFiKCk7XHJcblx0XHQvLyB0aGlzLnNldFZhbHVlTGltaXQoKTtcclxuXHRcdHRoaXMudmlldy5jb250YWluZXIuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2luaXRWYWx1ZScpKTtcclxuXHJcblx0XHR0aGlzLnZpZXcuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZVZhbHVlJywgKCkgPT4ge1xyXG5cdFx0XHR0aGlzLm1vZGVsLm9ic2VydmVyLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdjaGFuZ2VWYWx1ZScpKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0b25Nb3ZlVG9nZ2xlKCkge1xyXG5cdFx0Y29uc3Qgb25DaGFuZ2VWaWV3ID0gKCkgPT4ge1xyXG5cdFx0XHR0aGlzLnNldFRvTW9kZWwoKTtcclxuXHRcdFx0dGhpcy5tb2RlbC5vYnNlcnZlci5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnY2hhbmdlVmFsdWUnKSk7XHJcblx0XHR9XHJcblx0XHR0aGlzLnZpZXcuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdmVUb2dnbGUnLCBvbkNoYW5nZVZpZXcpO1xyXG5cdH1cclxuXHJcblx0b25DaGFuZ2VUYWJUZXh0KCkge1xyXG5cdFx0dGhpcy5tb2RlbC5vYnNlcnZlci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2VUYWJUZXh0JywgKCkgPT4ge1xyXG5cdFx0XHR0aGlzLnNldFRhYlRleHQoKTtcclxuXHRcdFx0dGhpcy52aWV3LmNvbnRhaW5lci5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnY2hhbmdlVGFiJykpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdG9uQ2FuZ2VJbnB1dCgpIHtcclxuXHRcdHRoaXMubW9kZWwub2JzZXJ2ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlSW5wdXQnLCAoKSA9PiB7XHJcblx0XHRcdHRoaXMudmlldy50YWJUZXh0ID0gdGhpcy5tb2RlbC50YWJUZXh0O1xyXG5cdFx0XHRpZiAodGhpcy5kYXRhLmlzQXJyYXkpIHtcclxuXHRcdFx0XHR0aGlzLnZpZXcucHJlY2VudC5taW4gPSB0aGlzLm1vZGVsLnZhbHVlLm1pbiAvICh0aGlzLmRhdGEuYXJyYXkubGVuZ3RoIC0gMSk7XHJcblx0XHRcdFx0dGhpcy52aWV3LnByZWNlbnQubWF4ID0gdGhpcy5tb2RlbC52YWx1ZS5tYXggLyAodGhpcy5kYXRhLmFycmF5Lmxlbmd0aCAtMSk7XHJcblx0XHRcdFx0Y29uc29sZS5sb2codGhpcy52aWV3LnByZWNlbnQpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdC8vIHRoaXMudmFsdWUubWluID0gK3RoaXMubW9kZWwudmFsdWUubWluO1xyXG5cdFx0XHRcdC8vIHRoaXMudmFsdWUubWF4ID0gK3RoaXMubW9kZWwudmFsdWUubWF4O1xyXG5cdFx0XHRcdC8vIHRoaXMuc2V0VG9WaWV3KCk7XHJcblx0XHRcdFx0Ly8gdGhpcy5zZXRUb01vZGVsKCk7XHJcblx0XHRcdFx0dGhpcy5zZXRWYWx1ZUxpbWl0KCk7XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy52aWV3LmNvbnRhaW5lci5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnY2hhbmdlSW5wdXQnKSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0c2V0VmFsdWVMaW1pdCgpIHtcclxuXHRcdHRoaXMudmFsdWUubWluID0gK3RoaXMubW9kZWwudmFsdWUubWluO1xyXG5cdFx0dGhpcy52YWx1ZS5tYXggPSArdGhpcy5tb2RlbC52YWx1ZS5tYXg7XHJcblx0XHR0aGlzLnNldFRvVmlldygpO1xyXG5cdFx0dGhpcy5zZXRUb01vZGVsKCk7XHJcblx0XHQvLyB0aGlzLnZpZXcuY29udGFpbmVyLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdjaGFuZ2VJbnB1dCcpKTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCB7UHJlc2VudGVyfTsiLCJpbXBvcnQge3JvdW5kfSBmcm9tICcuL2Z1bmN0aW9ucy50cyc7XHJcblxyXG5leHBvcnQgY2xhc3MgU2NhbGUge1xyXG5cclxuXHRzbGlkZXI6IEhUTUxFbGVtZW50O1xyXG5cdHNjYWxlOiBzdHJpbmdbXTtcclxuXHRpc1ZlcnRpY2FsOiBib29sZWFuO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihzbGlkZXIsIHNjYWxlLCBpc1ZlcnRpY2FsKSB7XHJcblx0XHR0aGlzLnNsaWRlciA9IHNsaWRlcjtcclxuXHRcdHRoaXMuc2NhbGUgPSBzY2FsZTtcclxuXHRcdHRoaXMuaXNWZXJ0aWNhbCA9IGlzVmVydGljYWw7XHJcblx0XHR0aGlzLmNyZWF0ZUl0ZW0oKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZUl0ZW0oKSB7XHJcblx0XHRjb25zdCBiYXI6IEhUTUxFbGVtZW50ID0gdGhpcy5zbGlkZXIucXVlcnlTZWxlY3RvcignLnRzLXNsaWRlcl9fYmFyJyk7XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2NhbGUubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0Y29uc3Qgc2NhbGVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0XHRcdHNjYWxlSXRlbS5jbGFzc0xpc3QuYWRkKCd0cy1zbGlkZXJfX3NjYWxlLWl0ZW0nKTtcclxuXHRcdFx0c2NhbGVJdGVtLnRleHRDb250ZW50ID0gdGhpcy5zY2FsZVtpXTtcclxuXHRcdFx0aWYgKHRoaXMuaXNWZXJ0aWNhbCkge1xyXG5cdFx0XHRcdHNjYWxlSXRlbS5jbGFzc0xpc3QuYWRkKCd0cy1zbGlkZXJfX3NjYWxlLWl0ZW0tLXZlcnRpY2FsJyk7XHJcblx0XHRcdFx0c2NhbGVJdGVtLnN0eWxlLnRvcCA9IGAke2Jhci5vZmZzZXRIZWlnaHQgLyAodGhpcy5zY2FsZS5sZW5ndGggLSAxKSAqIGl9cHhgO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNjYWxlSXRlbS5zdHlsZS5sZWZ0ID0gYCR7YmFyLm9mZnNldFdpZHRoIC8gKHRoaXMuc2NhbGUubGVuZ3RoIC0gMSkgKiBpfXB4YDtcclxuXHRcdFx0fVx0XHJcblx0XHRcdGJhci5hcHBlbmQoc2NhbGVJdGVtKTtcclxuXHRcdH1cclxuXHR9XHJcbn0iLCJpbXBvcnQge3NldExpbWl0fSBmcm9tICcuL2Z1bmN0aW9ucy50cyc7XHJcblxyXG5jb25zdCBzZXRUb2dnbGVTdHlsZSA9ICh0b2dnbGU6IEhUTUxFbGVtZW50LCBwaXhlbDogbnVtYmVyLCBpc1ZlcnRpY2FsOiBib29sZWFuKSA9PiB7XHJcblx0XHRpZiAoaXNWZXJ0aWNhbCkge1xyXG5cdFx0XHR0b2dnbGUuc3R5bGUudG9wID0gYCR7cGl4ZWx9cHhgO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dG9nZ2xlLnN0eWxlLmxlZnQgPSBgJHtwaXhlbH1weGA7XHJcblx0fVxyXG59XHJcblxyXG5jbGFzcyBUb2dnbGUge1xyXG5cclxuXHR0b2dnbGU6IEhUTUxFbGVtZW50O1xyXG5cdG1pbjogbnVtYmVyO1xyXG5cdG1heDogbnVtYmVyO1xyXG5cdG1vdXNlUGl4ZWw6IG51bWJlcjtcclxuXHRwaXhlbDogbnVtYmVyO1xyXG5cdHByZWNlbnQ6IG51bWJlcjtcclxuXHRzaXplOiBudW1iZXI7XHJcblx0aXNWZXJ0aWNhbDogYm9vbGVhbjtcclxuXHRpc0ZpeGVkOiBib29sZWFuO1xyXG5cclxuXHRjb25zdHJ1Y3Rvcih0b2dnbGUsIHByZWNlbnQsIHNpemUsIGlzVmVydGljYWwpIHtcclxuXHRcdHRoaXMudG9nZ2xlID0gdG9nZ2xlO1xyXG5cdFx0dGhpcy5zaXplID0gc2l6ZTtcclxuXHRcdHRoaXMucHJlY2VudCA9IHByZWNlbnQ7XHJcblx0XHR0aGlzLm1vdXNlUGl4ZWwgPSB0aGlzLnByZWNlbnQgKiB0aGlzLnNpemU7XHJcblx0XHR0aGlzLnBpeGVsID0gdGhpcy5tb3VzZVBpeGVsO1xyXG5cdFx0dGhpcy5pc1ZlcnRpY2FsID0gaXNWZXJ0aWNhbDtcclxuXHRcdHRoaXMuaXNGaXhlZCA9IGZhbHNlO1xyXG5cdFx0dGhpcy5zZXRTdHlsZSgpO1xyXG5cdFx0dGhpcy5vbk1vdmVUb2dnbGUoKTtcclxuXHR9XHJcblxyXG5cdHNldFN0eWxlKCkge1xyXG5cdFx0c2V0VG9nZ2xlU3R5bGUodGhpcy50b2dnbGUsIHRoaXMucGl4ZWwsIHRoaXMuaXNWZXJ0aWNhbCk7XHJcblx0fVxyXG5cclxuXHRjaGFuZ2VUb2dnbGUoKSB7XHJcblx0XHR0aGlzLm1vdXNlUGl4ZWwgPSB0aGlzLnByZWNlbnQgKiB0aGlzLnNpemU7XHJcblx0XHR0aGlzLnBpeGVsID0gdGhpcy5tb3VzZVBpeGVsO1xyXG5cdFx0dGhpcy5zZXRTdHlsZSgpO1xyXG5cdH1cclxuXHJcblx0b25Nb3ZlVG9nZ2xlKCkge1xyXG5cdFx0Y29uc3Qgb25Nb3VzZURvd24gPSAoZXZ0KSA9PiB7XHJcblx0XHRcdGxldCBzaGlmdFg6IG51bWJlciA9IGV2dC5jbGllbnRYIC0gdGhpcy50b2dnbGUub2Zmc2V0TGVmdDtcclxuXHRcdFx0bGV0IHNoaWZ0WTogbnVtYmVyID0gZXZ0LmNsaWVudFkgLSB0aGlzLnRvZ2dsZS5vZmZzZXRUb3A7XHJcblx0XHRcdGxldCBzdGFydFBpeGVsOiBudW1iZXIgPSB0aGlzLm1vdXNlUGl4ZWw7XHJcblx0XHRcdGNvbnN0IG1vdmVBdCA9IChwYWdlWCwgcGFnZVkpID0+IHtcclxuXHRcdFx0XHRpZiAodGhpcy5pc1ZlcnRpY2FsKSB7XHJcblx0XHRcdFx0XHR0aGlzLm1vdXNlUGl4ZWwgPSBwYWdlWSAtIHNoaWZ0WTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy5tb3VzZVBpeGVsID0gcGFnZVggLSBzaGlmdFg7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMucGl4ZWwgPSB0aGlzLm1vdXNlUGl4ZWw7XHJcblx0XHRcdFx0dGhpcy5waXhlbCA9IHNldExpbWl0KHRoaXMucGl4ZWwsIHRoaXMubWluICogdGhpcy5zaXplLCB0aGlzLm1heCAqIHRoaXMuc2l6ZSk7XHJcblx0XHRcdFx0aWYgKHRoaXMuaXNGaXhlZCkge1xyXG5cdFx0XHRcdFx0dGhpcy5waXhlbCA9IHN0YXJ0UGl4ZWw7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMuc2V0U3R5bGUoKTtcclxuXHRcdFx0XHR0aGlzLnByZWNlbnQgPSB0aGlzLnBpeGVsIC8gdGhpcy5zaXplO1xyXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKHRoaXMucHJlY2VudCk7XHJcblx0XHRcdH1cclxuXHRcdFx0bW92ZUF0KGV2dC5wYWdlWCwgZXZ0LnBhZ2VZKTtcclxuXHJcblx0XHRcdGNvbnN0IG9uTW91c2VNb3ZlID0gKG1vdmVFdnQpID0+IHtcclxuXHRcdFx0XHRtb3ZlRXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0bW92ZUF0KG1vdmVFdnQucGFnZVgsIG1vdmVFdnQuIHBhZ2VZKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRjb25zdCBvbk1vdXNlVXAgPSAodXBFdnQpID0+IHtcclxuXHRcdFx0XHR0aGlzLm1vdXNlUGl4ZWwgPSB0aGlzLnBpeGVsO1xyXG5cdFx0XHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbk1vdXNlVXApO1xyXG5cdFx0XHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSk7XHJcblx0XHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbk1vdXNlVXApO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy50b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgb25Nb3VzZURvd24pO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IHtzZXRUb2dnbGVTdHlsZSwgVG9nZ2xlfTtcclxuIiwiaW1wb3J0IHtpbml0Vmlld01hcmt1cCwgbWFya3VwfSBmcm9tICcuL2luaXQtdmlldy1tYXJrdXAudHMnO1xyXG5pbXBvcnQge1NjYWxlfSBmcm9tICcuL3NjYWxlLnRzJztcclxuaW1wb3J0IHtEYXRhLCBWYWx1ZSwgVGFiVGV4dH0gZnJvbSAnLi9pbnRlcmZhY2VzLnRzJztcclxuaW1wb3J0IHtzZXRUb2dnbGVTdHlsZSwgVG9nZ2xlfSBmcm9tICcuL3RvZ2dsZS50cyc7XHJcbmltcG9ydCB7c2V0TW91c2VIYW5kbGVyLCByb3VuZCwgdG9QcmVjZW50LCBzZXRSYW5nZVN0eWxlfSBmcm9tICcuL2Z1bmN0aW9ucy50cyc7XHJcblxyXG5jbGFzcyBWaWV3IHtcclxuXHJcblx0d3JhcDogSFRNTEVsZW1lbnQ7XHJcblx0ZGF0YTogRGF0YTtcclxuXHRwcmVjZW50OiBWYWx1ZTtcclxuXHR0YWJUZXh0OiBUYWJUZXh0O1xyXG5cdGNvbnRhaW5lcjogSFRNTEVsZW1lbnQ7XHJcblx0bWluVG9nZ2xlRWxlbTogSFRNTEVsZW1lbnQ7XHJcblx0bWF4VG9nZ2xlRWxlbTogSFRNTEVsZW1lbnQ7XHJcblx0bWluVG9nZ2xlOiBUb2dnbGU7XHJcblx0bWF4VG9nZ2xlOiBUb2dnbGU7XHJcblx0bWluVGFiRWxlbTogSFRNTEVsZW1lbnQ7XHJcblx0bWF4VGFiRWxlbTogSFRNTEVsZW1lbnQ7XHJcblx0cmFuZ2VFbGVtOiBIVE1MRWxlbWVudDtcclxuXHRzaXplOiBudW1iZXI7XHJcblx0c2NhbGU6IHN0cmluZ1tdO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihkYXRhLCB3cmFwKSB7XHJcblxyXG5cdFx0dGhpcy53cmFwID0gd3JhcDtcclxuXHRcdHRoaXMuZGF0YSA9IGRhdGE7XHJcblx0XHR0aGlzLnByZWNlbnQgPSB7XHJcblx0XHRcdG1pbjogMCxcclxuXHRcdFx0bWF4OiAwXHJcblx0XHR9XHJcblx0XHR0aGlzLnRhYlRleHQgPSB7XHJcblx0XHRcdG1pbjogJycsXHJcblx0XHRcdG1heDogJydcclxuXHRcdH1cclxuXHRcdHRoaXMuc2NhbGUgPSBbXTtcclxuXHRcdHRoaXMuaW5pdFZpZXcoKTtcclxuXHRcdHRoaXMuY3JlYXRlVG9nZ2xlKCk7XHJcblx0XHR0aGlzLm9uVG9nZ2xlQ29pbmNpZGVuY2UoKTtcclxuXHRcdHRoaXMuYWRkU2NhbGUoKTtcclxuXHRcdHRoaXMuY2hhbmdlVGFiKCk7XHJcblx0XHR0aGlzLmNoYW5nZUlucHV0KCk7XHJcblx0fVxyXG5cclxuXHRpbml0VmlldygpIHtcclxuXHRcdGluaXRWaWV3TWFya3VwKHRoaXMud3JhcCwgdGhpcy5kYXRhLmlzVmVydGljYWwpO1xyXG5cdFx0dGhpcy5jb250YWluZXIgPSB0aGlzLndyYXAucXVlcnlTZWxlY3RvcignLnRzLXNsaWRlcl9fY29udGFpbmVyJyk7XHJcblx0XHRpZiAodGhpcy5kYXRhLmlzVmVydGljYWwpIHtcclxuXHRcdFx0dGhpcy5zaXplID0gdGhpcy5jb250YWluZXIub2Zmc2V0SGVpZ2h0O1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5zaXplID0gdGhpcy5jb250YWluZXIub2Zmc2V0V2lkdGg7XHJcblx0XHR9XHJcblx0XHR0aGlzLm1pblRvZ2dsZUVsZW0gPSBtYXJrdXAodGhpcy5jb250YWluZXIpLm1pbjtcclxuXHRcdHRoaXMubWF4VG9nZ2xlRWxlbSA9IG1hcmt1cCh0aGlzLmNvbnRhaW5lcikubWF4O1xyXG5cdFx0dGhpcy5taW5UYWJFbGVtID0gbWFya3VwKHRoaXMuY29udGFpbmVyKS5taW5UYWI7XHJcblx0XHR0aGlzLm1heFRhYkVsZW0gPSBtYXJrdXAodGhpcy5jb250YWluZXIpLm1heFRhYjtcclxuXHRcdHRoaXMucmFuZ2VFbGVtID0gbWFya3VwKHRoaXMuY29udGFpbmVyKS5yYW5nZTtcclxuXHJcblx0XHRpZiAoIXRoaXMuZGF0YS5pc1JhbmdlKSB7XHJcblx0XHRcdHRoaXMubWluVG9nZ2xlRWxlbS5oaWRkZW4gPSB0cnVlO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICghdGhpcy5kYXRhLmlzVGFiKSB7XHJcblx0XHRcdHRoaXMubWluVGFiRWxlbS5oaWRkZW4gPSB0cnVlO1xyXG5cdFx0XHR0aGlzLm1heFRhYkVsZW0uaGlkZGVuID0gdHJ1ZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHNldFRhYigpIHtcclxuXHRcdHRoaXMubWluVGFiRWxlbS50ZXh0Q29udGVudCA9IHRoaXMudGFiVGV4dC5taW47XHJcblx0XHR0aGlzLm1heFRhYkVsZW0udGV4dENvbnRlbnQgPSB0aGlzLnRhYlRleHQubWF4O1xyXG5cdH1cclxuXHJcblx0c2V0UmFuZ2UoKSB7XHJcblx0XHRzZXRSYW5nZVN0eWxlKHRoaXMucmFuZ2VFbGVtLCB0aGlzLm1pblRvZ2dsZS5wcmVjZW50ICogdGhpcy5zaXplLCB0aGlzLm1heFRvZ2dsZS5wcmVjZW50ICogdGhpcy5zaXplLCB0aGlzLmRhdGEuaXNWZXJ0aWNhbCk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVUb2dnbGUoKSB7XHJcblx0XHRjb25zdCBtaW5Ub2dnbGVQcmVjZW50ID0gdG9QcmVjZW50KHRoaXMuZGF0YS5taW5Ub2dnbGVWYWx1ZSwgdGhpcy5kYXRhLm1pblZhbHVlLCB0aGlzLmRhdGEubWF4VmFsdWUpO1xyXG5cdFx0Y29uc3QgbWF4VG9nZ2xlUHJlY2VudCA9IHRvUHJlY2VudCh0aGlzLmRhdGEubWF4VG9nZ2xlVmFsdWUsIHRoaXMuZGF0YS5taW5WYWx1ZSwgdGhpcy5kYXRhLm1heFZhbHVlKTtcclxuXHRcdHRoaXMubWluVG9nZ2xlID0gbmV3IFRvZ2dsZSh0aGlzLm1pblRvZ2dsZUVsZW0sIG1pblRvZ2dsZVByZWNlbnQsIHRoaXMuc2l6ZSwgdGhpcy5kYXRhLmlzVmVydGljYWwpO1xyXG5cdFx0dGhpcy5tYXhUb2dnbGUgPSBuZXcgVG9nZ2xlKHRoaXMubWF4VG9nZ2xlRWxlbSwgbWF4VG9nZ2xlUHJlY2VudCwgdGhpcy5zaXplLCB0aGlzLmRhdGEuaXNWZXJ0aWNhbCk7XHJcblx0XHR0aGlzLm1pblRvZ2dsZS5taW4gPSAwO1xyXG5cdFx0dGhpcy5tYXhUb2dnbGUubWF4ID0gMTtcclxuXHRcdGlmICghdGhpcy5kYXRhLmlzUmFuZ2UpIHtcclxuXHRcdFx0dGhpcy5taW5Ub2dnbGUucHJlY2VudCA9IDA7XHJcblx0XHR9XHJcblx0XHR0aGlzLnNldFJhbmdlKCk7XHJcblxyXG5cdFx0Y29uc3Qgb25Nb3VzZU1vdmUgPSAobW92ZUV2dCkgPT4ge1xyXG5cdFx0XHR0aGlzLm1pblRvZ2dsZS5tYXggPSB0aGlzLm1heFRvZ2dsZS5wcmVjZW50O1xyXG5cdFx0XHR0aGlzLm1heFRvZ2dsZS5taW4gPSB0aGlzLm1pblRvZ2dsZS5wcmVjZW50O1xyXG5cdFx0XHRzZXRSYW5nZVN0eWxlKHRoaXMucmFuZ2VFbGVtLCB0aGlzLm1pblRvZ2dsZS5wcmVjZW50ICogdGhpcy5zaXplLCB0aGlzLm1heFRvZ2dsZS5wcmVjZW50ICogdGhpcy5zaXplLCB0aGlzLmRhdGEuaXNWZXJ0aWNhbCk7XHJcblx0XHRcdHRoaXMucHJlY2VudC5taW4gPSB0aGlzLm1pblRvZ2dsZS5wcmVjZW50O1xyXG5cdFx0XHR0aGlzLnByZWNlbnQubWF4ID0gdGhpcy5tYXhUb2dnbGUucHJlY2VudDtcclxuXHRcdFx0dGhpcy5zZXRUYWIoKTtcclxuXHRcdFx0dGhpcy5jb250YWluZXIuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ21vdmVUb2dnbGUnKSk7XHJcblx0XHR9XHJcblx0XHRzZXRNb3VzZUhhbmRsZXIoZG9jdW1lbnQsIG9uTW91c2VNb3ZlKTtcclxuXHRcdHRoaXMuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChldnQpID0+IHtcclxuXHRcdFx0ZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdG9uVG9nZ2xlQ29pbmNpZGVuY2UoKSB7XHJcblx0XHRjb25zdCBvbk1vdXNlRG93bkNvaW5jaWRlbmNlID0gKGV2dCkgPT4ge1xyXG5cdFx0XHRsZXQgY29pbmNpZGVuY2VUb2dnbGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHRcdFx0dGhpcy5tYXhUb2dnbGVFbGVtLmhpZGRlbiA9IHRydWU7XHJcblx0XHRcdGNvaW5jaWRlbmNlVG9nZ2xlID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludChldnQucGFnZVgsIGV2dC5wYWdlWSkuY2xhc3NMaXN0LmNvbnRhaW5zKCd0cy1zbGlkZXJfX3RvZ2dsZS0tbWluJyk7XHJcblx0XHRcdHRoaXMubWF4VG9nZ2xlRWxlbS5oaWRkZW4gPSBmYWxzZTtcclxuXHRcdFx0bGV0IHN0YXJ0UGl4ZWw6IG51bWJlcjtcclxuXHRcdFx0c3RhcnRQaXhlbCA9IHRoaXMubWF4VG9nZ2xlLnBpeGVsO1xyXG5cclxuXHRcdFx0Y29uc3Qgb25Nb3VzZU1vdmUgPSAobW92ZUV2dCkgPT4ge1xyXG5cdFx0XHRcdGlmIChjb2luY2lkZW5jZVRvZ2dsZSkge1xyXG5cdFx0XHRcdFx0dGhpcy5taW5Ub2dnbGUubW91c2VQaXhlbCA9IHRoaXMubWF4VG9nZ2xlLm1vdXNlUGl4ZWw7XHJcblx0XHRcdFx0XHR0aGlzLm1heFRvZ2dsZS5pc0ZpeGVkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdHRoaXMubWluVG9nZ2xlLmlzRml4ZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0aWYgKHRoaXMubWF4VG9nZ2xlLm1vdXNlUGl4ZWwgPiBzdGFydFBpeGVsKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMubWF4VG9nZ2xlLmlzRml4ZWQgPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0dGhpcy5taW5Ub2dnbGUuaXNGaXhlZCA9IHRydWU7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR0aGlzLm1heFRvZ2dsZS5pc0ZpeGVkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0dGhpcy5taW5Ub2dnbGUuaXNGaXhlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0XHR0aGlzLm1pblRvZ2dsZS5tb3VzZVBpeGVsID0gdGhpcy5tYXhUb2dnbGUubW91c2VQaXhlbDtcclxuXHRcdFx0XHRcdFx0dGhpcy5taW5Ub2dnbGUucGl4ZWwgPSB0aGlzLm1heFRvZ2dsZS5tb3VzZVBpeGVsO1xyXG5cdFx0XHRcdFx0XHRpZiAodGhpcy5taW5Ub2dnbGUucGl4ZWwgPCAwKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5taW5Ub2dnbGUucGl4ZWwgPSAwO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdHRoaXMubWluVG9nZ2xlLnNldFN0eWxlKCk7XHJcblx0XHRcdFx0XHRcdHRoaXMubWluVG9nZ2xlLnByZWNlbnQgPSB0aGlzLm1pblRvZ2dsZS5waXhlbCAvIHRoaXMuc2l6ZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy5tYXhUb2dnbGUuaXNGaXhlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0dGhpcy5taW5Ub2dnbGUuaXNGaXhlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRjb25zdCBvbk1vdXNlVXAgPSAodXBFdnQpID0+IHtcclxuXHRcdFx0XHR0aGlzLm1pblRvZ2dsZS5tb3VzZVBpeGVsID0gdGhpcy5taW5Ub2dnbGUucGl4ZWw7XHJcblx0XHRcdFx0dGhpcy5tYXhUb2dnbGUuaXNGaXhlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdHRoaXMubWluVG9nZ2xlLmlzRml4ZWQgPSBmYWxzZTtcclxuXHRcdFx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25Nb3VzZVVwKTtcclxuXHRcdFx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUpO1xyXG5cdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25Nb3VzZVVwKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLm1heFRvZ2dsZUVsZW0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgb25Nb3VzZURvd25Db2luY2lkZW5jZSk7XHJcblx0fVxyXG5cclxuXHRhZGRTY2FsZSgpIHtcclxuXHRcdHRoaXMuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2luaXRTY2FsZScsICgpID0+IHtcclxuXHRcdFx0aWYgKHRoaXMuZGF0YS5pc1NjYWxlKSB7XHJcblx0XHRcdFx0Y29uc3Qgc2NhbGUgPSBuZXcgU2NhbGUodGhpcy5jb250YWluZXIsIHRoaXMuc2NhbGUsIHRoaXMuZGF0YS5pc1ZlcnRpY2FsKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRjaGFuZ2VUYWIoKSB7XHJcblx0XHR0aGlzLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2VUYWInLCAoKSA9PiB7XHJcblx0XHRcdHRoaXMuc2V0VGFiKCk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGNoYW5nZUlucHV0KCkge1xyXG5cdFx0dGhpcy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlSW5wdXQnLCAoKSA9PiB7XHJcblx0XHRcdHRoaXMubWluVG9nZ2xlLnByZWNlbnQgPSB0aGlzLnByZWNlbnQubWluO1xyXG5cdFx0XHR0aGlzLm1heFRvZ2dsZS5wcmVjZW50ID0gdGhpcy5wcmVjZW50Lm1heDtcclxuXHRcdFx0dGhpcy5taW5Ub2dnbGUuY2hhbmdlVG9nZ2xlKCk7XHJcblx0XHRcdHRoaXMubWF4VG9nZ2xlLmNoYW5nZVRvZ2dsZSgpO1xyXG5cdFx0XHR0aGlzLnNldFRhYigpO1xyXG5cdFx0XHR0aGlzLnNldFJhbmdlKCk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHJlbW92ZU1hcmt1cCgpIHtcclxuXHRcdHRoaXMuY29udGFpbmVyLnJlbW92ZSgpO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IHtWaWV3fTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==