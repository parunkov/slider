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
    scaleQuantity: 4,
};
const setDataLimit = (data) => {
    const dataCopy = data;
    dataCopy.minToggleValue = Object(_functions_ts__WEBPACK_IMPORTED_MODULE_0__["setLimit"])(data.minToggleValue, data.minValue, data.maxValue);
    dataCopy.maxToggleValue = Object(_functions_ts__WEBPACK_IMPORTED_MODULE_0__["setLimit"])(data.maxToggleValue, data.minValue, data.maxValue);
    return dataCopy;
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
    const precision = (x) => +((x.toString().includes('.')) ? (x.toString().split('.').pop().length) : (0));
    const rounded = (Math.round(value / step) * step).toFixed(precision(step));
    return rounded;
};
const setLimit = (valueParam, min, max) => {
    let value = valueParam;
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
const setRangeStyle = (rangeElem, min, max, isVertical) => {
    const range = rangeElem;
    if (isVertical) {
        range.style.top = `${min}px`;
        range.style.height = `${(max - min)}px`;
    }
    else {
        range.style.left = `${min}px`;
        range.style.width = `${(max - min)}px`;
    }
    return range;
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
        init(options) {
            const id = `#${this.prop('id')}`;
            const wrap = document.querySelector(id);
            const presenter = new _presenter_ts__WEBPACK_IMPORTED_MODULE_0__["default"](options, wrap);
            window[id] = presenter;
        },
        change(options) {
            const id = `#${this.prop('id')}`;
            const presenter = window[id];
            presenter.options = options;
            presenter.changeData();
        },
    };
    $.fn.tsSlider = function (options, method) {
        const id = `#${this.prop('id')}`;
        if (method === 'change' && window[id]) {
            methods.change.apply(this, arguments);
        }
        else if (typeof method === 'object' || !method || !window[id]) {
            methods.init.apply(this, arguments);
        }
        else {
            $.error(`Метод с именем ${method} не существует для jQuery.tsSlider`);
        }
        return this;
    };
}(jQuery));


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
const initViewMarkup = (wrap, vertical) => {
    const controlWrap = wrap;
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
        for (let i = 0; i < div.length; i += 1) {
            const firstClass = div[i].classList[0];
            const verticalClass = `${firstClass}--vertical`;
            div[i].classList.add(verticalClass);
        }
    }
    return controlWrap;
};
const markup = (slider) => {
    const markupSlider = {
        min: slider.querySelector('.ts-slider__toggle--min'),
        max: slider.querySelector('.ts-slider__toggle--max'),
        range: slider.querySelector('.ts-slider__range'),
        bar: slider.querySelector('.ts-slider__bar'),
        minTab: slider.querySelector('.ts-slider__toggle-value--min'),
        maxTab: slider.querySelector('.ts-slider__toggle-value--max'),
    };
    return markupSlider;
};



/***/ }),

/***/ "./src/model.ts":
/*!**********************!*\
  !*** ./src/model.ts ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions.ts */ "./src/functions.ts");

class Model {
    constructor(data) {
        this.data = data;
        this.tabText = {
            min: '',
            max: '',
        };
        this.value = {
            min: 0,
            max: 0,
        };
        this.precent = {
            min: 0,
            max: 0,
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
                [this.minInput.value] = this.data.array;
            }
            else {
                this.minInput.value = this.data.minValue;
            }
        }
    }
    setArrayValue() {
        const min = Math.round(this.precent.min * (this.data.array.length - 1));
        const max = Math.round(this.precent.max * (this.data.array.length - 1));
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
        this.minInput = document.querySelector(`#${this.data.minInputId}`);
        this.maxInput = document.querySelector(`#${this.data.maxInputId}`);
        this.setInput();
    }
    setScale() {
        if (this.data.isArray) {
            if (this.data.isScale) {
                this.scale = this.data.array;
            }
        }
        else if (this.data.isScale) {
            let quantity = this.data.scaleQuantity;
            quantity = (quantity < 2) ? 2 : quantity;
            for (let i = 0; i < quantity; i += 1) {
                const textValue = Math.round(((this.data.minValue + ((this.data.maxValue - this.data.minValue)
                    / (quantity - 1))) * i) / this.data.step) * this.data.step;
                const text = Object(_functions_ts__WEBPACK_IMPORTED_MODULE_0__["round"])(textValue, this.data.step);
                this.scale.push(text);
            }
        }
    }
    addListener() {
        const onChangeValue = () => {
            if (this.data.isArray) {
                this.setArrayValue();
            }
            else {
                this.tabText.min = Object(_functions_ts__WEBPACK_IMPORTED_MODULE_0__["round"])(this.value.min, this.data.step);
                this.tabText.max = Object(_functions_ts__WEBPACK_IMPORTED_MODULE_0__["round"])(this.value.max, this.data.step);
            }
            this.setInput();
            this.observer.dispatchEvent(new CustomEvent('changeTabText'));
        };
        this.observer.addEventListener('changeValue', onChangeValue);
    }
    changeInput() {
        const onBlur = () => {
            if (this.data.isArray) {
                const inArray = (value, limit) => {
                    if (this.data.array.includes(value)) {
                        return value;
                    }
                    return limit;
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
/* harmony default export */ __webpack_exports__["default"] = (Model);


/***/ }),

/***/ "./src/presenter.ts":
/*!**************************!*\
  !*** ./src/presenter.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
        this.onWindowResize();
    }
    onWindowResize() {
        const onResize = () => {
            this.init();
        };
        window.addEventListener('resize', onResize);
    }
    setValue() {
        this.value = {
            min: this.data.minToggleValue,
            max: this.data.maxToggleValue,
        };
    }
    createData() {
        const dataClone = JSON.parse(JSON.stringify(_data_ts__WEBPACK_IMPORTED_MODULE_3__["defaultData"]));
        this.data = Object.assign(dataClone, this.options);
        this.data = Object(_data_ts__WEBPACK_IMPORTED_MODULE_3__["setDataLimit"])(this.data);
        this.setValue();
    }
    changeData() {
        this.data = Object.assign(this.data, this.options);
        this.data = Object(_data_ts__WEBPACK_IMPORTED_MODULE_3__["setDataLimit"])(this.data);
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
        this.view = new _view_ts__WEBPACK_IMPORTED_MODULE_0__["default"](viewData, this.wrap);
        this.model = new _model_ts__WEBPACK_IMPORTED_MODULE_1__["default"](modelData);
        this.initScale();
        this.setToView();
        this.model.precent = this.view.precent;
        this.model.observer.dispatchEvent(new CustomEvent('setPrecent'));
        this.setTabText();
        this.view.setTab();
        this.view.container.dispatchEvent(new CustomEvent('initValue'));
        const onChangeValue = () => {
            this.model.observer.dispatchEvent(new CustomEvent('changeValue'));
        };
        this.view.container.addEventListener('changeValue', onChangeValue);
    }
    onMoveToggle() {
        const onChangeView = () => {
            this.setToModel();
            this.model.observer.dispatchEvent(new CustomEvent('changeValue'));
        };
        this.view.container.addEventListener('moveToggle', onChangeView);
    }
    onChangeTabText() {
        const onChangeTab = () => {
            this.setTabText();
            this.view.container.dispatchEvent(new CustomEvent('changeTab'));
        };
        this.model.observer.addEventListener('changeTabText', onChangeTab);
    }
    onCangeInput() {
        const onCangeInputText = () => {
            this.view.tabText = this.model.tabText;
            if (this.data.isArray) {
                this.view.precent.min = this.model.value.min / (this.data.array.length - 1);
                this.view.precent.max = this.model.value.max / (this.data.array.length - 1);
            }
            else {
                this.value.min = +this.model.value.min;
                this.value.max = +this.model.value.max;
                this.setToView();
                this.setToModel();
            }
            this.view.container.dispatchEvent(new CustomEvent('changeInput'));
        };
        this.model.observer.addEventListener('changeInput', onCangeInputText);
    }
}
/* harmony default export */ __webpack_exports__["default"] = (Presenter);


/***/ }),

/***/ "./src/scale.ts":
/*!**********************!*\
  !*** ./src/scale.ts ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Scale {
    constructor(slider, scale, isVertical) {
        this.slider = slider;
        this.scale = scale;
        this.isVertical = isVertical;
        this.createItem();
    }
    createItem() {
        const bar = this.slider.querySelector('.ts-slider__bar');
        for (let i = 0; i < this.scale.length; i += 1) {
            const scaleItem = document.createElement('div');
            scaleItem.classList.add('ts-slider__scale-item');
            scaleItem.textContent = this.scale[i];
            if (this.isVertical) {
                scaleItem.classList.add('ts-slider__scale-item--vertical');
                scaleItem.style.top = `${(bar.offsetHeight / (this.scale.length - 1)) * i}px`;
            }
            else {
                scaleItem.style.left = `${(bar.offsetWidth / (this.scale.length - 1)) * i}px`;
            }
            bar.append(scaleItem);
        }
    }
}
/* harmony default export */ __webpack_exports__["default"] = (Scale);


/***/ }),

/***/ "./src/toggle.ts":
/*!***********************!*\
  !*** ./src/toggle.ts ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions.ts */ "./src/functions.ts");

const setToggleStyle = (toggleElem, pixel, isVertical) => {
    const toggle = toggleElem;
    if (isVertical) {
        toggle.style.top = `${pixel}px`;
    }
    else {
        toggle.style.left = `${pixel}px`;
    }
    return toggle;
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
        this.toggle = setToggleStyle(this.toggle, this.pixel, this.isVertical);
    }
    changeToggle() {
        this.mousePixel = this.precent * this.size;
        this.pixel = this.mousePixel;
        this.setStyle();
    }
    onMoveToggle() {
        const onMouseDown = (evt) => {
            const shiftX = evt.pageX - this.toggle.offsetLeft;
            const shiftY = evt.pageY - this.toggle.offsetTop;
            const startPixel = this.mousePixel;
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
            const onMouseUp = () => {
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
/* harmony default export */ __webpack_exports__["default"] = (Toggle);


/***/ }),

/***/ "./src/view.ts":
/*!*********************!*\
  !*** ./src/view.ts ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
            max: 0,
        };
        this.tabText = {
            min: '',
            max: '',
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
        this.minToggle = new _toggle_ts__WEBPACK_IMPORTED_MODULE_2__["default"](this.minToggleElem, minTogglePrecent, this.size, this.data.isVertical);
        this.maxToggle = new _toggle_ts__WEBPACK_IMPORTED_MODULE_2__["default"](this.maxToggleElem, maxTogglePrecent, this.size, this.data.isVertical);
        this.minToggle.min = 0;
        this.maxToggle.max = 1;
        if (!this.data.isRange) {
            this.minToggle.precent = 0;
        }
        this.setRange();
        const onMouseMove = () => {
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
            const onMouseMove = () => {
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
            const onMouseUp = () => {
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
        const onInitScale = () => {
            if (this.data.isScale) {
                const scale = new _scale_ts__WEBPACK_IMPORTED_MODULE_1__["default"](this.container, this.scale, this.data.isVertical);
            }
        };
        this.container.addEventListener('initScale', onInitScale);
    }
    changeTab() {
        const onChangeTab = () => {
            this.setTab();
        };
        this.container.addEventListener('changeTab', onChangeTab);
    }
    changeInput() {
        const onChangeInput = () => {
            this.minToggle.precent = this.precent.min;
            this.maxToggle.precent = this.precent.max;
            this.minToggle.changeToggle();
            this.maxToggle.changeToggle();
            this.setTab();
            this.setRange();
        };
        this.container.addEventListener('changeInput', onChangeInput);
    }
    removeMarkup() {
        this.container.remove();
    }
}
/* harmony default export */ __webpack_exports__["default"] = (View);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Z1bmN0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luaXQtdmlldy1tYXJrdXAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9wcmVzZW50ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjYWxlLnRzIiwid2VicGFjazovLy8uL3NyYy90b2dnbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUEwQztBQUcxQyxNQUFNLFdBQVcsR0FBUztJQUN4QixVQUFVLEVB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RUFBRSxDQUFDO1lBQ2QsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2xCLENBQUMsQ0FBQztRQUNGLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFRCxZQUFZO1FBQ1YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUMxQixDQUFDO0NBQ0Y7QUFFYyxtRUFBSSxFQUFDIiwiZmlsZSI6InRzLXNsaWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiaW1wb3J0IHsgc2V0TGltaXQgfSBmcm9tICcuL2Z1bmN0aW9ucy50cyc7XG5pbXBvcnQgeyBEYXRhIH0gZnJvbSAnLi9pbnRlcmZhY2VzLnRzJztcblxuY29uc3QgZGVmYXVsdERhdGE6IERhdGEgPSB7XG4gIG1pbklucHV0SWQ6ICd0cy1zbGlkZXJfX21pbi1pbnB1dCcsXG4gIG1heElucHV0SWQ6ICd0cy1zbGlkZXJfX21heC1pbnB1dCcsXG4gIGlzQXJyYXk6IGZhbHNlLFxuICBhcnJheTogW10sXG4gIHN0ZXA6IDEsXG4gIG1pblZhbHVlOiAwLFxuICBtYXhWYWx1ZTogMTAwLFxuICBtaW5Ub2dnbGVWYWx1ZTogMjUsXG4gIG1heFRvZ2dsZVZhbHVlOiA3NSxcbiAgaXNSYW5nZTogdHJ1ZSxcbiAgaXNWZXJ0aWNhbDogZmFsc2UsXG4gIGlzVGFiOiB0cnVlLFxuICBpc1NjYWxlOiB0cnVlLFxuICBzY2FsZVF1YW50aXR5OiA0LFxufTtcblxuY29uc3Qgc2V0RGF0YUxpbWl0ID0gKGRhdGE6IERhdGEpID0+IHtcbiAgY29uc3QgZGF0YUNvcHkgPSBkYXRhO1xuICBkYXRhQ29weS5taW5Ub2dnbGVWYWx1ZSA9IHNldExpbWl0KGRhdGEubWluVG9nZ2xlVmFsdWUsIGRhdGEubWluVmFsdWUsIGRhdGEubWF4VmFsdWUpO1xuICBkYXRhQ29weS5tYXhUb2dnbGVWYWx1ZSA9IHNldExpbWl0KGRhdGEubWF4VG9nZ2xlVmFsdWUsIGRhdGEubWluVmFsdWUsIGRhdGEubWF4VmFsdWUpO1xuICByZXR1cm4gZGF0YUNvcHk7XG59O1xuXG5leHBvcnQge1xuICBzZXREYXRhTGltaXQsXG4gIGRlZmF1bHREYXRhLFxufTtcbiIsIlxuY29uc3Qgc2V0TW91c2VIYW5kbGVyID0gKGVsZW0sIG9uTW92ZSwgb25Eb3ZuPywgb25VcD8pID0+IHtcbiAgY29uc3Qgb25Nb3VzZURvd24gPSAoZXZ0KSA9PiB7XG4gICAgaWYgKG9uRG92bikge1xuICAgICAgb25Eb3ZuKGV2dCk7XG4gICAgfVxuXG4gICAgY29uc3Qgb25Nb3VzZU1vdmUgPSAobW92ZUV2dCkgPT4ge1xuICAgICAgb25Nb3ZlKG1vdmVFdnQpO1xuICAgIH07XG4gICAgY29uc3Qgb25Nb3VzZVVwID0gKHVwRXZ0KSA9PiB7XG4gICAgICBpZiAob25VcCkge1xuICAgICAgICBvblVwKHVwRXZ0KTtcbiAgICAgIH1cbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbk1vdXNlVXApO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUpO1xuICAgIH07XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbk1vdXNlVXApO1xuICB9O1xuXG4gIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgb25Nb3VzZURvd24pO1xufTtcblxuY29uc3Qgcm91bmQgPSAodmFsdWU6IG51bWJlciwgc3RlcDogbnVtYmVyKSA9PiB7XG4gIGNvbnN0IHByZWNpc2lvbiA9ICh4KSA9PiArKCh4LnRvU3RyaW5nKCkuaW5jbHVkZXMoJy4nKSkgPyAoeC50b1N0cmluZygpLnNwbGl0KCcuJykucG9wKCkubGVuZ3RoKSA6ICgwKSk7XG4gIGNvbnN0IHJvdW5kZWQ6IHN0cmluZyA9IChNYXRoLnJvdW5kKHZhbHVlIC8gc3RlcCkgKiBzdGVwKS50b0ZpeGVkKHByZWNpc2lvbihzdGVwKSk7XG4gIHJldHVybiByb3VuZGVkO1xufTtcblxuY29uc3Qgc2V0TGltaXQgPSAodmFsdWVQYXJhbTogbnVtYmVyLCBtaW46IG51bWJlciwgbWF4OiBudW1iZXIpID0+IHtcbiAgbGV0IHZhbHVlID0gdmFsdWVQYXJhbTtcbiAgaWYgKHZhbHVlID4gbWF4KSB7XG4gICAgdmFsdWUgPSBtYXg7XG4gIH0gZWxzZSBpZiAodmFsdWUgPCBtaW4pIHtcbiAgICB2YWx1ZSA9IG1pbjtcbiAgfVxuICByZXR1cm4gdmFsdWU7XG59O1xuXG5jb25zdCB0b1ByZWNlbnQgPSAodmFsdWU6IG51bWJlciwgbWluOiBudW1iZXIsIG1heDogbnVtYmVyKSA9PiAodmFsdWUgLSBtaW4pIC8gKG1heCAtIG1pbik7XG5cbmNvbnN0IHRvVmFsdWUgPSAodmFsdWU6IG51bWJlciwgbWluOiBudW1iZXIsIG1heDogbnVtYmVyKSA9PiAobWluICsgKG1heCAtIG1pbikgKiB2YWx1ZSk7XG5cbmNvbnN0IHNldFJhbmdlU3R5bGUgPSAocmFuZ2VFbGVtOiBIVE1MRWxlbWVudCwgbWluOiBudW1iZXIsIG1heDogbnVtYmVyLCBpc1ZlcnRpY2FsOiBib29sZWFuKSA9PiB7XG4gIGNvbnN0IHJhbmdlID0gcmFuZ2VFbGVtO1xuICBpZiAoaXNWZXJ0aWNhbCkge1xuICAgIHJhbmdlLnN0eWxlLnRvcCA9IGAke21pbn1weGA7XG4gICAgcmFuZ2Uuc3R5bGUuaGVpZ2h0ID0gYCR7KG1heCAtIG1pbil9cHhgO1xuICB9IGVsc2Uge1xuICAgIHJhbmdlLnN0eWxlLmxlZnQgPSBgJHttaW59cHhgO1xuICAgIHJhbmdlLnN0eWxlLndpZHRoID0gYCR7KG1heCAtIG1pbil9cHhgO1xuICB9XG4gIHJldHVybiByYW5nZTtcbn07XG5cbmV4cG9ydCB7XG4gIHNldE1vdXNlSGFuZGxlcixcbiAgcm91bmQsXG4gIHNldExpbWl0LFxuICB0b1ByZWNlbnQsXG4gIHRvVmFsdWUsXG4gIHNldFJhbmdlU3R5bGUsXG59O1xuIiwiaW1wb3J0IFByZXNlbnRlciBmcm9tICcuL3ByZXNlbnRlci50cyc7XG5cbihmdW5jdGlvbiAoJCkge1xuICBjb25zdCBtZXRob2RzID0ge1xuICAgIGluaXQob3B0aW9ucykge1xuICAgICAgY29uc3QgaWQ6IHN0cmluZyA9IGAjJHt0aGlzLnByb3AoJ2lkJyl9YDtcbiAgICAgIGNvbnN0IHdyYXA6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihpZCk7XG4gICAgICBjb25zdCBwcmVzZW50ZXIgPSBuZXcgUHJlc2VudGVyKG9wdGlvbnMsIHdyYXApO1xuICAgICAgd2luZG93W2lkXSA9IHByZXNlbnRlcjtcbiAgICB9LFxuICAgIGNoYW5nZShvcHRpb25zKSB7XG4gICAgICBjb25zdCBpZDogc3RyaW5nID0gYCMke3RoaXMucHJvcCgnaWQnKX1gO1xuICAgICAgY29uc3QgcHJlc2VudGVyID0gd2luZG93W2lkXTtcbiAgICAgIHByZXNlbnRlci5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgIHByZXNlbnRlci5jaGFuZ2VEYXRhKCk7XG4gICAgfSxcbiAgfTtcblxuICAkLmZuLnRzU2xpZGVyID0gZnVuY3Rpb24gKG9wdGlvbnMsIG1ldGhvZD8pIHtcbiAgICBjb25zdCBpZDogc3RyaW5nID0gYCMke3RoaXMucHJvcCgnaWQnKX1gO1xuICAgIGlmIChtZXRob2QgPT09ICdjaGFuZ2UnICYmIHdpbmRvd1tpZF0pIHtcbiAgICAgIG1ldGhvZHMuY2hhbmdlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgbWV0aG9kID09PSAnb2JqZWN0JyB8fCAhbWV0aG9kIHx8ICF3aW5kb3dbaWRdKSB7XG4gICAgICBtZXRob2RzLmluaXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJC5lcnJvcihg0JzQtdGC0L7QtCDRgSDQuNC80LXQvdC10LwgJHttZXRob2R9INC90LUg0YHRg9GJ0LXRgdGC0LLRg9C10YIg0LTQu9GPIGpRdWVyeS50c1NsaWRlcmApO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbn0oalF1ZXJ5KSk7XG4iLCJjb25zdCBpbml0Vmlld01hcmt1cCA9ICh3cmFwOiBIVE1MRWxlbWVudCwgdmVydGljYWw6IGJvb2xlYW4pID0+IHtcbiAgY29uc3QgY29udHJvbFdyYXAgPSB3cmFwO1xuICBjb25zdCBjb250b2xNYXJrdXA6IHN0cmluZyA9IGA8ZGl2IGNsYXNzPVwidHMtc2xpZGVyX19jb250YWluZXJcIj5cbiAgPGRpdiBjbGFzcz1cInRzLXNsaWRlcl9fYmFyXCI+XG4gIDxkaXYgY2xhc3M9XCJ0cy1zbGlkZXJfX3RvZ2dsZSB0cy1zbGlkZXJfX3RvZ2dsZS0tbWluXCI+XG4gIDxkaXYgY2xhc3M9XCJ0cy1zbGlkZXJfX3RvZ2dsZS12YWx1ZSB0cy1zbGlkZXJfX3RvZ2dsZS12YWx1ZS0tbWluXCI+PC9kaXY+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwidHMtc2xpZGVyX190b2dnbGUgdHMtc2xpZGVyX190b2dnbGUtLW1heFwiPlxuICA8ZGl2IGNsYXNzPVwidHMtc2xpZGVyX190b2dnbGUtdmFsdWUgdHMtc2xpZGVyX190b2dnbGUtdmFsdWUtLW1heFwiPjwvZGl2PlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cInRzLXNsaWRlcl9fcmFuZ2VcIj48L2Rpdj5cbiAgPC9kaXY+XG4gIDwvZGl2PmA7XG4gIGNvbnRyb2xXcmFwLmlubmVySFRNTCA9IGNvbnRvbE1hcmt1cDtcbiAgY29uc3QgZGl2ID0gY29udHJvbFdyYXAucXVlcnlTZWxlY3RvckFsbCgnZGl2Jyk7XG4gIGlmICh2ZXJ0aWNhbCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGl2Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBmaXJzdENsYXNzOiBzdHJpbmcgPSBkaXZbaV0uY2xhc3NMaXN0WzBdO1xuICAgICAgY29uc3QgdmVydGljYWxDbGFzczogc3RyaW5nID0gYCR7Zmlyc3RDbGFzc30tLXZlcnRpY2FsYDtcbiAgICAgIGRpdltpXS5jbGFzc0xpc3QuYWRkKHZlcnRpY2FsQ2xhc3MpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gY29udHJvbFdyYXA7XG59O1xuXG5jb25zdCBtYXJrdXAgPSAoc2xpZGVyOiBIVE1MRWxlbWVudCkgPT4ge1xuICBpbnRlcmZhY2UgTWFya3VwIHtcbiAgICBtaW46IEhUTUxFbGVtZW50O1xuICAgIG1heDogSFRNTEVsZW1lbnQ7XG4gICAgcmFuZ2U6IEhUTUxFbGVtZW50O1xuICAgIGJhcjogSFRNTEVsZW1lbnQ7XG4gICAgbWluVGFiOiBIVE1MRWxlbWVudDtcbiAgICBtYXhUYWI6IEhUTUxFbGVtZW50O1xuICB9XG4gIGNvbnN0IG1hcmt1cFNsaWRlcjogTWFya3VwID0ge1xuICAgIG1pbjogc2xpZGVyLnF1ZXJ5U2VsZWN0b3IoJy50cy1zbGlkZXJfX3RvZ2dsZS0tbWluJyksXG4gICAgbWF4OiBzbGlkZXIucXVlcnlTZWxlY3RvcignLnRzLXNsaWRlcl9fdG9nZ2xlLS1tYXgnKSxcbiAgICByYW5nZTogc2xpZGVyLnF1ZXJ5U2VsZWN0b3IoJy50cy1zbGlkZXJfX3JhbmdlJyksXG4gICAgYmFyOiBzbGlkZXIucXVlcnlTZWxlY3RvcignLnRzLXNsaWRlcl9fYmFyJyksXG4gICAgbWluVGFiOiBzbGlkZXIucXVlcnlTZWxlY3RvcignLnRzLXNsaWRlcl9fdG9nZ2xlLXZhbHVlLS1taW4nKSxcbiAgICBtYXhUYWI6IHNsaWRlci5xdWVyeVNlbGVjdG9yKCcudHMtc2xpZGVyX190b2dnbGUtdmFsdWUtLW1heCcpLFxuICB9O1xuICByZXR1cm4gbWFya3VwU2xpZGVyO1xufTtcblxuZXhwb3J0IHtcbiAgaW5pdFZpZXdNYXJrdXAsXG4gIG1hcmt1cCxcbn07XG4iLCJpbXBvcnQge1xuICBEYXRhLFxuICBWYWx1ZSxcbiAgVGFiVGV4dCxcbn0gZnJvbSAnLi9pbnRlcmZhY2VzLnRzJztcblxuaW1wb3J0IHtcbiAgcm91bmQsXG4gIHNldExpbWl0LFxufSBmcm9tICcuL2Z1bmN0aW9ucy50cyc7XG5cbmNsYXNzIE1vZGVsIHtcbiAgZGF0YTogRGF0YTtcblxuICBtaW5JbnB1dDogYW55O1xuXG4gIG1heElucHV0OiBhbnk7XG5cbiAgdmFsdWU6IFZhbHVlO1xuXG4gIHByZWNlbnQ6IFZhbHVlO1xuXG4gIHRhYlRleHQ6IFRhYlRleHQ7XG5cbiAgb2JzZXJ2ZXI6IEhUTUxFbGVtZW50O1xuXG4gIHNjYWxlOiBzdHJpbmdbXTtcblxuICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICB0aGlzLnRhYlRleHQgPSB7XG4gICAgICBtaW46ICcnLFxuICAgICAgbWF4OiAnJyxcbiAgICB9O1xuICAgIHRoaXMudmFsdWUgPSB7XG4gICAgICBtaW46IDAsXG4gICAgICBtYXg6IDAsXG4gICAgfTtcbiAgICB0aGlzLnByZWNlbnQgPSB7XG4gICAgICBtaW46IDAsXG4gICAgICBtYXg6IDAsXG4gICAgfTtcbiAgICB0aGlzLnNjYWxlID0gW107XG4gICAgdGhpcy5vYnNlcnZlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0V2ZW50Jyk7XG4gICAgdGhpcy5pbml0KCk7XG4gICAgdGhpcy5zZXRTY2FsZSgpO1xuICAgIHRoaXMuYWRkTGlzdGVuZXIoKTtcbiAgICB0aGlzLmNoYW5nZUlucHV0KCk7XG4gIH1cblxuICBzZXRJbnB1dCgpIHtcbiAgICB0aGlzLm1pbklucHV0LnZhbHVlID0gdGhpcy50YWJUZXh0Lm1pbjtcbiAgICB0aGlzLm1heElucHV0LnZhbHVlID0gdGhpcy50YWJUZXh0Lm1heDtcbiAgICBpZiAoIXRoaXMuZGF0YS5pc1JhbmdlKSB7XG4gICAgICBpZiAodGhpcy5kYXRhLmlzQXJyYXkpIHtcbiAgICAgICAgW3RoaXMubWluSW5wdXQudmFsdWVdID0gdGhpcy5kYXRhLmFycmF5O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5taW5JbnB1dC52YWx1ZSA9IHRoaXMuZGF0YS5taW5WYWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzZXRBcnJheVZhbHVlKCkge1xuICAgIGNvbnN0IG1pbiA9IE1hdGgucm91bmQodGhpcy5wcmVjZW50Lm1pbiAqICh0aGlzLmRhdGEuYXJyYXkubGVuZ3RoIC0gMSkpO1xuICAgIGNvbnN0IG1heCA9IE1hdGgucm91bmQodGhpcy5wcmVjZW50Lm1heCAqICh0aGlzLmRhdGEuYXJyYXkubGVuZ3RoIC0gMSkpO1xuICAgIHRoaXMudGFiVGV4dC5taW4gPSB0aGlzLmRhdGEuYXJyYXlbbWluXTtcbiAgICB0aGlzLnRhYlRleHQubWF4ID0gdGhpcy5kYXRhLmFycmF5W21heF07XG4gICAgdGhpcy5zZXRJbnB1dCgpO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICBpZiAodGhpcy5kYXRhLmlzQXJyYXkpIHtcbiAgICAgIHRoaXMub2JzZXJ2ZXIuYWRkRXZlbnRMaXN0ZW5lcignc2V0UHJlY2VudCcsICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRBcnJheVZhbHVlKCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50YWJUZXh0Lm1pbiA9IHJvdW5kKHRoaXMuZGF0YS5taW5Ub2dnbGVWYWx1ZSwgdGhpcy5kYXRhLnN0ZXApO1xuICAgICAgdGhpcy50YWJUZXh0Lm1heCA9IHJvdW5kKHRoaXMuZGF0YS5tYXhUb2dnbGVWYWx1ZSwgdGhpcy5kYXRhLnN0ZXApO1xuICAgIH1cbiAgICB0aGlzLm1pbklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7dGhpcy5kYXRhLm1pbklucHV0SWR9YCk7XG4gICAgdGhpcy5tYXhJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3RoaXMuZGF0YS5tYXhJbnB1dElkfWApO1xuICAgIHRoaXMuc2V0SW5wdXQoKTtcbiAgfVxuXG4gIHNldFNjYWxlKCkge1xuICAgIGlmICh0aGlzLmRhdGEuaXNBcnJheSkge1xuICAgICAgaWYgKHRoaXMuZGF0YS5pc1NjYWxlKSB7XG4gICAgICAgIHRoaXMuc2NhbGUgPSB0aGlzLmRhdGEuYXJyYXk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLmRhdGEuaXNTY2FsZSkge1xuICAgICAgbGV0IHF1YW50aXR5ID0gdGhpcy5kYXRhLnNjYWxlUXVhbnRpdHk7XG4gICAgICBxdWFudGl0eSA9IChxdWFudGl0eSA8IDIpID8gMiA6IHF1YW50aXR5O1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBxdWFudGl0eTsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IHRleHRWYWx1ZTogbnVtYmVyID0gTWF0aC5yb3VuZChcbiAgICAgICAgICAoKHRoaXMuZGF0YS5taW5WYWx1ZSArICgodGhpcy5kYXRhLm1heFZhbHVlIC0gdGhpcy5kYXRhLm1pblZhbHVlKVxuICAgICAgICAgIC8gKHF1YW50aXR5IC0gMSkpKSAqIGkpIC8gdGhpcy5kYXRhLnN0ZXAsXG4gICAgICAgICkgKiB0aGlzLmRhdGEuc3RlcDtcbiAgICAgICAgY29uc3QgdGV4dDogc3RyaW5nID0gcm91bmQodGV4dFZhbHVlLCB0aGlzLmRhdGEuc3RlcCk7XG4gICAgICAgIHRoaXMuc2NhbGUucHVzaCh0ZXh0KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhZGRMaXN0ZW5lcigpIHtcbiAgICBjb25zdCBvbkNoYW5nZVZhbHVlID0gKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuZGF0YS5pc0FycmF5KSB7XG4gICAgICAgIHRoaXMuc2V0QXJyYXlWYWx1ZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50YWJUZXh0Lm1pbiA9IHJvdW5kKHRoaXMudmFsdWUubWluLCB0aGlzLmRhdGEuc3RlcCk7XG4gICAgICAgIHRoaXMudGFiVGV4dC5tYXggPSByb3VuZCh0aGlzLnZhbHVlLm1heCwgdGhpcy5kYXRhLnN0ZXApO1xuICAgICAgfVxuICAgICAgdGhpcy5zZXRJbnB1dCgpO1xuICAgICAgdGhpcy5vYnNlcnZlci5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnY2hhbmdlVGFiVGV4dCcpKTtcbiAgICB9O1xuICAgIHRoaXMub2JzZXJ2ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlVmFsdWUnLCBvbkNoYW5nZVZhbHVlKTtcbiAgfVxuXG4gIGNoYW5nZUlucHV0KCkge1xuICAgIGNvbnN0IG9uQmx1ciA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLmRhdGEuaXNBcnJheSkge1xuICAgICAgICBjb25zdCBpbkFycmF5ID0gKHZhbHVlLCBsaW1pdCkgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLmRhdGEuYXJyYXkuaW5jbHVkZXModmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBsaW1pdDtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5taW5JbnB1dC52YWx1ZSA9IGluQXJyYXkodGhpcy5taW5JbnB1dC52YWx1ZSwgdGhpcy5kYXRhLmFycmF5WzBdKTtcbiAgICAgICAgdGhpcy5tYXhJbnB1dC52YWx1ZSA9IGluQXJyYXkoXG4gICAgICAgICAgdGhpcy5tYXhJbnB1dC52YWx1ZSxcbiAgICAgICAgICB0aGlzLmRhdGEuYXJyYXlbdGhpcy5kYXRhLmFycmF5Lmxlbmd0aCAtIDFdLFxuICAgICAgICApO1xuICAgICAgICB0aGlzLnZhbHVlLm1pbiA9IHRoaXMuZGF0YS5hcnJheS5pbmRleE9mKHRoaXMubWluSW5wdXQudmFsdWUpO1xuICAgICAgICB0aGlzLnZhbHVlLm1heCA9IHRoaXMuZGF0YS5hcnJheS5pbmRleE9mKHRoaXMubWF4SW5wdXQudmFsdWUpO1xuICAgICAgICBpZiAodGhpcy52YWx1ZS5taW4gPiB0aGlzLnZhbHVlLm1heCkge1xuICAgICAgICAgIHRoaXMudmFsdWUubWluID0gdGhpcy52YWx1ZS5tYXg7XG4gICAgICAgICAgdGhpcy5taW5JbnB1dC52YWx1ZSA9IHRoaXMubWF4SW5wdXQudmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50YWJUZXh0Lm1pbiA9IHRoaXMubWluSW5wdXQudmFsdWU7XG4gICAgICAgIHRoaXMudGFiVGV4dC5tYXggPSB0aGlzLm1heElucHV0LnZhbHVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy52YWx1ZS5taW4gPSArdGhpcy5taW5JbnB1dC52YWx1ZTtcbiAgICAgICAgdGhpcy52YWx1ZS5tYXggPSArdGhpcy5tYXhJbnB1dC52YWx1ZTtcbiAgICAgICAgdGhpcy52YWx1ZS5taW4gPSBzZXRMaW1pdCh0aGlzLnZhbHVlLm1pbiwgdGhpcy5kYXRhLm1pblZhbHVlLCB0aGlzLnZhbHVlLm1heCk7XG4gICAgICAgIHRoaXMudmFsdWUubWF4ID0gc2V0TGltaXQodGhpcy52YWx1ZS5tYXgsIHRoaXMudmFsdWUubWluLCB0aGlzLmRhdGEubWF4VmFsdWUpO1xuICAgICAgICB0aGlzLm1pbklucHV0LnZhbHVlID0gdGhpcy52YWx1ZS5taW4udG9TdHJpbmcoKTtcbiAgICAgICAgdGhpcy5tYXhJbnB1dC52YWx1ZSA9IHRoaXMudmFsdWUubWF4LnRvU3RyaW5nKCk7XG4gICAgICAgIHRoaXMudGFiVGV4dC5taW4gPSByb3VuZCh0aGlzLm1pbklucHV0LnZhbHVlLCB0aGlzLmRhdGEuc3RlcCk7XG4gICAgICAgIHRoaXMudGFiVGV4dC5tYXggPSByb3VuZCh0aGlzLm1heElucHV0LnZhbHVlLCB0aGlzLmRhdGEuc3RlcCk7XG4gICAgICB9XG4gICAgICB0aGlzLm9ic2VydmVyLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdjaGFuZ2VJbnB1dCcpKTtcbiAgICB9O1xuICAgIHRoaXMubWluSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIG9uQmx1cik7XG4gICAgdGhpcy5tYXhJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgb25CbHVyKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb2RlbDtcbiIsImltcG9ydCBWaWV3IGZyb20gJy4vdmlldy50cyc7XG5cbmltcG9ydCB7XG4gIERhdGEsXG4gIFZhbHVlLFxuICBUYWJUZXh0LFxufSBmcm9tICcuL2ludGVyZmFjZXMudHMnO1xuXG5pbXBvcnQgTW9kZWwgZnJvbSAnLi9tb2RlbC50cyc7XG5cbmltcG9ydCB7XG4gIHRvUHJlY2VudCxcbiAgdG9WYWx1ZSxcbn0gZnJvbSAnLi9mdW5jdGlvbnMudHMnO1xuXG5pbXBvcnQge1xuICBkZWZhdWx0RGF0YSxcbiAgc2V0RGF0YUxpbWl0LFxufSBmcm9tICcuL2RhdGEudHMnO1xuXG5jbGFzcyBQcmVzZW50ZXIge1xuICB3cmFwOiBIVE1MRWxlbWVudDtcblxuICBkYXRhOiBEYXRhO1xuXG4gIG9wdGlvbnM6IGFueTtcblxuICB2aWV3OiBWaWV3O1xuXG4gIG1vZGVsOiBNb2RlbDtcblxuICB2YWx1ZTogVmFsdWU7XG5cbiAgY29uc3RydWN0b3Iob3B0aW9ucywgd3JhcCkge1xuICAgIHRoaXMud3JhcCA9IHdyYXA7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB0aGlzLmNyZWF0ZURhdGEoKTtcbiAgICB0aGlzLmluaXQoKTtcbiAgICB0aGlzLm9uTW92ZVRvZ2dsZSgpO1xuICAgIHRoaXMub25DaGFuZ2VUYWJUZXh0KCk7XG4gICAgdGhpcy5vbkNhbmdlSW5wdXQoKTtcbiAgICB0aGlzLm9uV2luZG93UmVzaXplKCk7XG4gIH1cblxuICBvbldpbmRvd1Jlc2l6ZSgpIHtcbiAgICBjb25zdCBvblJlc2l6ZSA9ICgpID0+IHtcbiAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH07XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIG9uUmVzaXplKTtcbiAgfVxuXG4gIHNldFZhbHVlKCkge1xuICAgIHRoaXMudmFsdWUgPSB7XG4gICAgICBtaW46IHRoaXMuZGF0YS5taW5Ub2dnbGVWYWx1ZSxcbiAgICAgIG1heDogdGhpcy5kYXRhLm1heFRvZ2dsZVZhbHVlLFxuICAgIH07XG4gIH1cblxuICBjcmVhdGVEYXRhKCkge1xuICAgIGNvbnN0IGRhdGFDbG9uZSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZGVmYXVsdERhdGEpKTtcbiAgICB0aGlzLmRhdGEgPSBPYmplY3QuYXNzaWduKGRhdGFDbG9uZSwgdGhpcy5vcHRpb25zKTtcbiAgICB0aGlzLmRhdGEgPSBzZXREYXRhTGltaXQodGhpcy5kYXRhKTtcbiAgICB0aGlzLnNldFZhbHVlKCk7XG4gIH1cblxuICBjaGFuZ2VEYXRhKCkge1xuICAgIHRoaXMuZGF0YSA9IE9iamVjdC5hc3NpZ24odGhpcy5kYXRhLCB0aGlzLm9wdGlvbnMpO1xuICAgIHRoaXMuZGF0YSA9IHNldERhdGFMaW1pdCh0aGlzLmRhdGEpO1xuICAgIHRoaXMuc2V0VmFsdWUoKTtcbiAgICB0aGlzLmluaXQoKTtcbiAgICB0aGlzLm9uTW92ZVRvZ2dsZSgpO1xuICAgIHRoaXMub25DaGFuZ2VUYWJUZXh0KCk7XG4gICAgdGhpcy5vbkNhbmdlSW5wdXQoKTtcbiAgfVxuXG4gIHNldFRhYlRleHQoKSB7XG4gICAgdGhpcy52aWV3LnRhYlRleHQubWluID0gdGhpcy5tb2RlbC50YWJUZXh0Lm1pbjtcbiAgICB0aGlzLnZpZXcudGFiVGV4dC5tYXggPSB0aGlzLm1vZGVsLnRhYlRleHQubWF4O1xuICB9XG5cbiAgaW5pdFNjYWxlKCkge1xuICAgIHRoaXMudmlldy5zY2FsZSA9IHRoaXMubW9kZWwuc2NhbGU7XG4gICAgdGhpcy52aWV3LmNvbnRhaW5lci5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnaW5pdFNjYWxlJykpO1xuICB9XG5cbiAgc2V0VG9WaWV3KCkge1xuICAgIHRoaXMudmlldy5wcmVjZW50Lm1pbiA9IHRvUHJlY2VudCh0aGlzLnZhbHVlLm1pbiwgdGhpcy5kYXRhLm1pblZhbHVlLCB0aGlzLmRhdGEubWF4VmFsdWUpO1xuICAgIHRoaXMudmlldy5wcmVjZW50Lm1heCA9IHRvUHJlY2VudCh0aGlzLnZhbHVlLm1heCwgdGhpcy5kYXRhLm1pblZhbHVlLCB0aGlzLmRhdGEubWF4VmFsdWUpO1xuICB9XG5cbiAgc2V0VG9Nb2RlbCgpIHtcbiAgICB0aGlzLm1vZGVsLnZhbHVlLm1pbiA9IHRvVmFsdWUodGhpcy52aWV3LnByZWNlbnQubWluLCB0aGlzLmRhdGEubWluVmFsdWUsIHRoaXMuZGF0YS5tYXhWYWx1ZSk7XG4gICAgdGhpcy5tb2RlbC52YWx1ZS5tYXggPSB0b1ZhbHVlKHRoaXMudmlldy5wcmVjZW50Lm1heCwgdGhpcy5kYXRhLm1pblZhbHVlLCB0aGlzLmRhdGEubWF4VmFsdWUpO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICBjb25zdCB2aWV3RGF0YSA9IHRoaXMuZGF0YTtcbiAgICBjb25zdCBtb2RlbERhdGEgPSB0aGlzLmRhdGE7XG4gICAgdGhpcy52aWV3ID0gbmV3IFZpZXcodmlld0RhdGEsIHRoaXMud3JhcCk7XG4gICAgdGhpcy5tb2RlbCA9IG5ldyBNb2RlbChtb2RlbERhdGEpO1xuICAgIHRoaXMuaW5pdFNjYWxlKCk7XG4gICAgdGhpcy5zZXRUb1ZpZXcoKTtcbiAgICB0aGlzLm1vZGVsLnByZWNlbnQgPSB0aGlzLnZpZXcucHJlY2VudDtcbiAgICB0aGlzLm1vZGVsLm9ic2VydmVyLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdzZXRQcmVjZW50JykpO1xuICAgIHRoaXMuc2V0VGFiVGV4dCgpO1xuICAgIHRoaXMudmlldy5zZXRUYWIoKTtcbiAgICB0aGlzLnZpZXcuY29udGFpbmVyLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdpbml0VmFsdWUnKSk7XG5cbiAgICBjb25zdCBvbkNoYW5nZVZhbHVlID0gKCkgPT4ge1xuICAgICAgdGhpcy5tb2RlbC5vYnNlcnZlci5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnY2hhbmdlVmFsdWUnKSk7XG4gICAgfTtcbiAgICB0aGlzLnZpZXcuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZVZhbHVlJywgb25DaGFuZ2VWYWx1ZSk7XG4gIH1cblxuICBvbk1vdmVUb2dnbGUoKSB7XG4gICAgY29uc3Qgb25DaGFuZ2VWaWV3ID0gKCkgPT4ge1xuICAgICAgdGhpcy5zZXRUb01vZGVsKCk7XG4gICAgICB0aGlzLm1vZGVsLm9ic2VydmVyLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdjaGFuZ2VWYWx1ZScpKTtcbiAgICB9O1xuICAgIHRoaXMudmlldy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignbW92ZVRvZ2dsZScsIG9uQ2hhbmdlVmlldyk7XG4gIH1cblxuICBvbkNoYW5nZVRhYlRleHQoKSB7XG4gICAgY29uc3Qgb25DaGFuZ2VUYWIgPSAoKSA9PiB7XG4gICAgICB0aGlzLnNldFRhYlRleHQoKTtcbiAgICAgIHRoaXMudmlldy5jb250YWluZXIuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2NoYW5nZVRhYicpKTtcbiAgICB9O1xuICAgIHRoaXMubW9kZWwub2JzZXJ2ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlVGFiVGV4dCcsIG9uQ2hhbmdlVGFiKTtcbiAgfVxuXG4gIG9uQ2FuZ2VJbnB1dCgpIHtcbiAgICBjb25zdCBvbkNhbmdlSW5wdXRUZXh0ID0gKCkgPT4ge1xuICAgICAgdGhpcy52aWV3LnRhYlRleHQgPSB0aGlzLm1vZGVsLnRhYlRleHQ7XG4gICAgICBpZiAodGhpcy5kYXRhLmlzQXJyYXkpIHtcbiAgICAgICAgdGhpcy52aWV3LnByZWNlbnQubWluID0gdGhpcy5tb2RlbC52YWx1ZS5taW4gLyAodGhpcy5kYXRhLmFycmF5Lmxlbmd0aCAtIDEpO1xuICAgICAgICB0aGlzLnZpZXcucHJlY2VudC5tYXggPSB0aGlzLm1vZGVsLnZhbHVlLm1heCAvICh0aGlzLmRhdGEuYXJyYXkubGVuZ3RoIC0gMSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnZhbHVlLm1pbiA9ICt0aGlzLm1vZGVsLnZhbHVlLm1pbjtcbiAgICAgICAgdGhpcy52YWx1ZS5tYXggPSArdGhpcy5tb2RlbC52YWx1ZS5tYXg7XG4gICAgICAgIHRoaXMuc2V0VG9WaWV3KCk7XG4gICAgICAgIHRoaXMuc2V0VG9Nb2RlbCgpO1xuICAgICAgfVxuICAgICAgdGhpcy52aWV3LmNvbnRhaW5lci5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnY2hhbmdlSW5wdXQnKSk7XG4gICAgfTtcbiAgICB0aGlzLm1vZGVsLm9ic2VydmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZUlucHV0Jywgb25DYW5nZUlucHV0VGV4dCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJlc2VudGVyO1xuIiwiY2xhc3MgU2NhbGUge1xuICBzbGlkZXI6IEhUTUxFbGVtZW50O1xuXG4gIHNjYWxlOiBzdHJpbmdbXTtcblxuICBpc1ZlcnRpY2FsOiBib29sZWFuO1xuXG5cbiAgY29uc3RydWN0b3Ioc2xpZGVyLCBzY2FsZSwgaXNWZXJ0aWNhbCkge1xuICAgIHRoaXMuc2xpZGVyID0gc2xpZGVyO1xuICAgIHRoaXMuc2NhbGUgPSBzY2FsZTtcbiAgICB0aGlzLmlzVmVydGljYWwgPSBpc1ZlcnRpY2FsO1xuICAgIHRoaXMuY3JlYXRlSXRlbSgpO1xuICB9XG5cbiAgY3JlYXRlSXRlbSgpIHtcbiAgICBjb25zdCBiYXI6IEhUTUxFbGVtZW50ID0gdGhpcy5zbGlkZXIucXVlcnlTZWxlY3RvcignLnRzLXNsaWRlcl9fYmFyJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNjYWxlLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBzY2FsZUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHNjYWxlSXRlbS5jbGFzc0xpc3QuYWRkKCd0cy1zbGlkZXJfX3NjYWxlLWl0ZW0nKTtcbiAgICAgIHNjYWxlSXRlbS50ZXh0Q29udGVudCA9IHRoaXMuc2NhbGVbaV07XG4gICAgICBpZiAodGhpcy5pc1ZlcnRpY2FsKSB7XG4gICAgICAgIHNjYWxlSXRlbS5jbGFzc0xpc3QuYWRkKCd0cy1zbGlkZXJfX3NjYWxlLWl0ZW0tLXZlcnRpY2FsJyk7XG4gICAgICAgIHNjYWxlSXRlbS5zdHlsZS50b3AgPSBgJHsoYmFyLm9mZnNldEhlaWdodCAvICh0aGlzLnNjYWxlLmxlbmd0aCAtIDEpKSAqIGl9cHhgO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2NhbGVJdGVtLnN0eWxlLmxlZnQgPSBgJHsoYmFyLm9mZnNldFdpZHRoIC8gKHRoaXMuc2NhbGUubGVuZ3RoIC0gMSkpICogaX1weGA7XG4gICAgICB9XG4gICAgICBiYXIuYXBwZW5kKHNjYWxlSXRlbSk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNjYWxlO1xuIiwiaW1wb3J0IHsgc2V0TGltaXQgfSBmcm9tICcuL2Z1bmN0aW9ucy50cyc7XG5cbmNvbnN0IHNldFRvZ2dsZVN0eWxlID0gKHRvZ2dsZUVsZW06IEhUTUxFbGVtZW50LCBwaXhlbDogbnVtYmVyLCBpc1ZlcnRpY2FsOiBib29sZWFuKSA9PiB7XG4gIGNvbnN0IHRvZ2dsZSA9IHRvZ2dsZUVsZW07XG4gIGlmIChpc1ZlcnRpY2FsKSB7XG4gICAgdG9nZ2xlLnN0eWxlLnRvcCA9IGAke3BpeGVsfXB4YDtcbiAgfSBlbHNlIHtcbiAgICB0b2dnbGUuc3R5bGUubGVmdCA9IGAke3BpeGVsfXB4YDtcbiAgfVxuICByZXR1cm4gdG9nZ2xlO1xufTtcblxuY2xhc3MgVG9nZ2xlIHtcbiAgdG9nZ2xlOiBIVE1MRWxlbWVudDtcblxuICBtaW46IG51bWJlcjtcblxuICBtYXg6IG51bWJlcjtcblxuICBtb3VzZVBpeGVsOiBudW1iZXI7XG5cbiAgcGl4ZWw6IG51bWJlcjtcblxuICBwcmVjZW50OiBudW1iZXI7XG5cbiAgc2l6ZTogbnVtYmVyO1xuXG4gIGlzVmVydGljYWw6IGJvb2xlYW47XG5cbiAgaXNGaXhlZDogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3Rvcih0b2dnbGUsIHByZWNlbnQsIHNpemUsIGlzVmVydGljYWwpIHtcbiAgICB0aGlzLnRvZ2dsZSA9IHRvZ2dsZTtcbiAgICB0aGlzLnNpemUgPSBzaXplO1xuICAgIHRoaXMucHJlY2VudCA9IHByZWNlbnQ7XG4gICAgdGhpcy5tb3VzZVBpeGVsID0gdGhpcy5wcmVjZW50ICogdGhpcy5zaXplO1xuICAgIHRoaXMucGl4ZWwgPSB0aGlzLm1vdXNlUGl4ZWw7XG4gICAgdGhpcy5pc1ZlcnRpY2FsID0gaXNWZXJ0aWNhbDtcbiAgICB0aGlzLmlzRml4ZWQgPSBmYWxzZTtcbiAgICB0aGlzLnNldFN0eWxlKCk7XG4gICAgdGhpcy5vbk1vdmVUb2dnbGUoKTtcbiAgfVxuXG4gIHNldFN0eWxlKCkge1xuICAgIHRoaXMudG9nZ2xlID0gc2V0VG9nZ2xlU3R5bGUodGhpcy50b2dnbGUsIHRoaXMucGl4ZWwsIHRoaXMuaXNWZXJ0aWNhbCk7XG4gIH1cblxuICBjaGFuZ2VUb2dnbGUoKSB7XG4gICAgdGhpcy5tb3VzZVBpeGVsID0gdGhpcy5wcmVjZW50ICogdGhpcy5zaXplO1xuICAgIHRoaXMucGl4ZWwgPSB0aGlzLm1vdXNlUGl4ZWw7XG4gICAgdGhpcy5zZXRTdHlsZSgpO1xuICB9XG5cbiAgb25Nb3ZlVG9nZ2xlKCkge1xuICAgIGNvbnN0IG9uTW91c2VEb3duID0gKGV2dCkgPT4ge1xuICAgICAgY29uc3Qgc2hpZnRYOiBudW1iZXIgPSBldnQucGFnZVggLSB0aGlzLnRvZ2dsZS5vZmZzZXRMZWZ0O1xuICAgICAgY29uc3Qgc2hpZnRZOiBudW1iZXIgPSBldnQucGFnZVkgLSB0aGlzLnRvZ2dsZS5vZmZzZXRUb3A7XG4gICAgICBjb25zdCBzdGFydFBpeGVsOiBudW1iZXIgPSB0aGlzLm1vdXNlUGl4ZWw7XG4gICAgICBjb25zdCBtb3ZlQXQgPSAocGFnZVgsIHBhZ2VZKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmlzVmVydGljYWwpIHtcbiAgICAgICAgICB0aGlzLm1vdXNlUGl4ZWwgPSBwYWdlWSAtIHNoaWZ0WTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLm1vdXNlUGl4ZWwgPSBwYWdlWCAtIHNoaWZ0WDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBpeGVsID0gdGhpcy5tb3VzZVBpeGVsO1xuICAgICAgICB0aGlzLnBpeGVsID0gc2V0TGltaXQodGhpcy5waXhlbCwgdGhpcy5taW4gKiB0aGlzLnNpemUsIHRoaXMubWF4ICogdGhpcy5zaXplKTtcbiAgICAgICAgaWYgKHRoaXMuaXNGaXhlZCkge1xuICAgICAgICAgIHRoaXMucGl4ZWwgPSBzdGFydFBpeGVsO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U3R5bGUoKTtcbiAgICAgICAgdGhpcy5wcmVjZW50ID0gdGhpcy5waXhlbCAvIHRoaXMuc2l6ZTtcbiAgICAgIH07XG4gICAgICBtb3ZlQXQoZXZ0LnBhZ2VYLCBldnQucGFnZVkpO1xuXG4gICAgICBjb25zdCBvbk1vdXNlTW92ZSA9IChtb3ZlRXZ0KSA9PiB7XG4gICAgICAgIG1vdmVFdnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbW92ZUF0KG1vdmVFdnQucGFnZVgsIG1vdmVFdnQucGFnZVkpO1xuICAgICAgfTtcbiAgICAgIGNvbnN0IG9uTW91c2VVcCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5tb3VzZVBpeGVsID0gdGhpcy5waXhlbDtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uTW91c2VVcCk7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKTtcbiAgICAgIH07XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSk7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25Nb3VzZVVwKTtcbiAgICB9O1xuICAgIHRoaXMudG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIG9uTW91c2VEb3duKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUb2dnbGU7XG4iLCJpbXBvcnQge1xuICBpbml0Vmlld01hcmt1cCxcbiAgbWFya3VwLFxufSBmcm9tICcuL2luaXQtdmlldy1tYXJrdXAudHMnO1xuXG5pbXBvcnQgU2NhbGUgZnJvbSAnLi9zY2FsZS50cyc7XG5cbmltcG9ydCB7XG4gIERhdGEsXG4gIFZhbHVlLFxuICBUYWJUZXh0LFxufSBmcm9tICcuL2ludGVyZmFjZXMudHMnO1xuXG5pbXBvcnQgVG9nZ2xlIGZyb20gJy4vdG9nZ2xlLnRzJztcblxuaW1wb3J0IHtcbiAgc2V0TW91c2VIYW5kbGVyLFxuICB0b1ByZWNlbnQsXG4gIHNldFJhbmdlU3R5bGUsXG59IGZyb20gJy4vZnVuY3Rpb25zLnRzJztcblxuY2xhc3MgVmlldyB7XG4gIHdyYXA6IEhUTUxFbGVtZW50O1xuXG4gIGRhdGE6IERhdGE7XG5cbiAgcHJlY2VudDogVmFsdWU7XG5cbiAgdGFiVGV4dDogVGFiVGV4dDtcblxuICBjb250YWluZXI6IEhUTUxFbGVtZW50O1xuXG4gIG1pblRvZ2dsZUVsZW06IEhUTUxFbGVtZW50O1xuXG4gIG1heFRvZ2dsZUVsZW06IEhUTUxFbGVtZW50O1xuXG4gIG1pblRvZ2dsZTogVG9nZ2xlO1xuXG4gIG1heFRvZ2dsZTogVG9nZ2xlO1xuXG4gIG1pblRhYkVsZW06IEhUTUxFbGVtZW50O1xuXG4gIG1heFRhYkVsZW06IEhUTUxFbGVtZW50O1xuXG4gIHJhbmdlRWxlbTogSFRNTEVsZW1lbnQ7XG5cbiAgc2l6ZTogbnVtYmVyO1xuXG4gIHNjYWxlOiBzdHJpbmdbXTtcblxuICBjb25zdHJ1Y3RvcihkYXRhLCB3cmFwKSB7XG4gICAgdGhpcy53cmFwID0gd3JhcDtcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIHRoaXMucHJlY2VudCA9IHtcbiAgICAgIG1pbjogMCxcbiAgICAgIG1heDogMCxcbiAgICB9O1xuICAgIHRoaXMudGFiVGV4dCA9IHtcbiAgICAgIG1pbjogJycsXG4gICAgICBtYXg6ICcnLFxuICAgIH07XG4gICAgdGhpcy5zY2FsZSA9IFtdO1xuICAgIHRoaXMuaW5pdFZpZXcoKTtcbiAgICB0aGlzLmNyZWF0ZVRvZ2dsZSgpO1xuICAgIHRoaXMub25Ub2dnbGVDb2luY2lkZW5jZSgpO1xuICAgIHRoaXMuYWRkU2NhbGUoKTtcbiAgICB0aGlzLmNoYW5nZVRhYigpO1xuICAgIHRoaXMuY2hhbmdlSW5wdXQoKTtcbiAgfVxuXG4gIGluaXRWaWV3KCkge1xuICAgIGluaXRWaWV3TWFya3VwKHRoaXMud3JhcCwgdGhpcy5kYXRhLmlzVmVydGljYWwpO1xuICAgIHRoaXMuY29udGFpbmVyID0gdGhpcy53cmFwLnF1ZXJ5U2VsZWN0b3IoJy50cy1zbGlkZXJfX2NvbnRhaW5lcicpO1xuICAgIGlmICh0aGlzLmRhdGEuaXNWZXJ0aWNhbCkge1xuICAgICAgdGhpcy5zaXplID0gdGhpcy5jb250YWluZXIub2Zmc2V0SGVpZ2h0O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNpemUgPSB0aGlzLmNvbnRhaW5lci5vZmZzZXRXaWR0aDtcbiAgICB9XG4gICAgdGhpcy5taW5Ub2dnbGVFbGVtID0gbWFya3VwKHRoaXMuY29udGFpbmVyKS5taW47XG4gICAgdGhpcy5tYXhUb2dnbGVFbGVtID0gbWFya3VwKHRoaXMuY29udGFpbmVyKS5tYXg7XG4gICAgdGhpcy5taW5UYWJFbGVtID0gbWFya3VwKHRoaXMuY29udGFpbmVyKS5taW5UYWI7XG4gICAgdGhpcy5tYXhUYWJFbGVtID0gbWFya3VwKHRoaXMuY29udGFpbmVyKS5tYXhUYWI7XG4gICAgdGhpcy5yYW5nZUVsZW0gPSBtYXJrdXAodGhpcy5jb250YWluZXIpLnJhbmdlO1xuXG4gICAgaWYgKCF0aGlzLmRhdGEuaXNSYW5nZSkge1xuICAgICAgdGhpcy5taW5Ub2dnbGVFbGVtLmhpZGRlbiA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmRhdGEuaXNUYWIpIHtcbiAgICAgIHRoaXMubWluVGFiRWxlbS5oaWRkZW4gPSB0cnVlO1xuICAgICAgdGhpcy5tYXhUYWJFbGVtLmhpZGRlbiA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgc2V0VGFiKCkge1xuICAgIHRoaXMubWluVGFiRWxlbS50ZXh0Q29udGVudCA9IHRoaXMudGFiVGV4dC5taW47XG4gICAgdGhpcy5tYXhUYWJFbGVtLnRleHRDb250ZW50ID0gdGhpcy50YWJUZXh0Lm1heDtcbiAgfVxuXG4gIHNldFJhbmdlKCkge1xuICAgIHNldFJhbmdlU3R5bGUoXG4gICAgICB0aGlzLnJhbmdlRWxlbSxcbiAgICAgIHRoaXMubWluVG9nZ2xlLnByZWNlbnQgKiB0aGlzLnNpemUsXG4gICAgICB0aGlzLm1heFRvZ2dsZS5wcmVjZW50ICogdGhpcy5zaXplLFxuICAgICAgdGhpcy5kYXRhLmlzVmVydGljYWwsXG4gICAgKTtcbiAgfVxuXG4gIGNyZWF0ZVRvZ2dsZSgpIHtcbiAgICBjb25zdCBtaW5Ub2dnbGVQcmVjZW50ID0gdG9QcmVjZW50KFxuICAgICAgdGhpcy5kYXRhLm1pblRvZ2dsZVZhbHVlLFxuICAgICAgdGhpcy5kYXRhLm1pblZhbHVlLFxuICAgICAgdGhpcy5kYXRhLm1heFZhbHVlLFxuICAgICk7XG4gICAgY29uc3QgbWF4VG9nZ2xlUHJlY2VudCA9IHRvUHJlY2VudChcbiAgICAgIHRoaXMuZGF0YS5tYXhUb2dnbGVWYWx1ZSxcbiAgICAgIHRoaXMuZGF0YS5taW5WYWx1ZSxcbiAgICAgIHRoaXMuZGF0YS5tYXhWYWx1ZSxcbiAgICApO1xuICAgIHRoaXMubWluVG9nZ2xlID0gbmV3IFRvZ2dsZShcbiAgICAgIHRoaXMubWluVG9nZ2xlRWxlbSxcbiAgICAgIG1pblRvZ2dsZVByZWNlbnQsXG4gICAgICB0aGlzLnNpemUsXG4gICAgICB0aGlzLmRhdGEuaXNWZXJ0aWNhbCxcbiAgICApO1xuICAgIHRoaXMubWF4VG9nZ2xlID0gbmV3IFRvZ2dsZShcbiAgICAgIHRoaXMubWF4VG9nZ2xlRWxlbSxcbiAgICAgIG1heFRvZ2dsZVByZWNlbnQsXG4gICAgICB0aGlzLnNpemUsXG4gICAgICB0aGlzLmRhdGEuaXNWZXJ0aWNhbCxcbiAgICApO1xuICAgIHRoaXMubWluVG9nZ2xlLm1pbiA9IDA7XG4gICAgdGhpcy5tYXhUb2dnbGUubWF4ID0gMTtcbiAgICBpZiAoIXRoaXMuZGF0YS5pc1JhbmdlKSB7XG4gICAgICB0aGlzLm1pblRvZ2dsZS5wcmVjZW50ID0gMDtcbiAgICB9XG4gICAgdGhpcy5zZXRSYW5nZSgpO1xuXG4gICAgY29uc3Qgb25Nb3VzZU1vdmUgPSAoKSA9PiB7XG4gICAgICB0aGlzLm1pblRvZ2dsZS5tYXggPSB0aGlzLm1heFRvZ2dsZS5wcmVjZW50O1xuICAgICAgdGhpcy5tYXhUb2dnbGUubWluID0gdGhpcy5taW5Ub2dnbGUucHJlY2VudDtcbiAgICAgIHNldFJhbmdlU3R5bGUoXG4gICAgICAgIHRoaXMucmFuZ2VFbGVtLFxuICAgICAgICB0aGlzLm1pblRvZ2dsZS5wcmVjZW50ICogdGhpcy5zaXplLFxuICAgICAgICB0aGlzLm1heFRvZ2dsZS5wcmVjZW50ICogdGhpcy5zaXplLFxuICAgICAgICB0aGlzLmRhdGEuaXNWZXJ0aWNhbCxcbiAgICAgICk7XG4gICAgICB0aGlzLnByZWNlbnQubWluID0gdGhpcy5taW5Ub2dnbGUucHJlY2VudDtcbiAgICAgIHRoaXMucHJlY2VudC5tYXggPSB0aGlzLm1heFRvZ2dsZS5wcmVjZW50O1xuICAgICAgdGhpcy5zZXRUYWIoKTtcbiAgICAgIHRoaXMuY29udGFpbmVyLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdtb3ZlVG9nZ2xlJykpO1xuICAgIH07XG4gICAgc2V0TW91c2VIYW5kbGVyKGRvY3VtZW50LCBvbk1vdXNlTW92ZSk7XG4gICAgdGhpcy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKGV2dCkgPT4ge1xuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSk7XG4gIH1cblxuICBvblRvZ2dsZUNvaW5jaWRlbmNlKCkge1xuICAgIGNvbnN0IG9uTW91c2VEb3duQ29pbmNpZGVuY2UgPSAoZXZ0KSA9PiB7XG4gICAgICBsZXQgY29pbmNpZGVuY2VUb2dnbGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICAgIHRoaXMubWF4VG9nZ2xlRWxlbS5oaWRkZW4gPSB0cnVlO1xuICAgICAgY29pbmNpZGVuY2VUb2dnbGUgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KGV2dC5jbGllbnRYLCBldnQuY2xpZW50WSkuY2xhc3NMaXN0LmNvbnRhaW5zKCd0cy1zbGlkZXJfX3RvZ2dsZS0tbWluJyk7XG4gICAgICB0aGlzLm1heFRvZ2dsZUVsZW0uaGlkZGVuID0gZmFsc2U7XG4gICAgICBsZXQgc3RhcnRQaXhlbDogbnVtYmVyO1xuICAgICAgc3RhcnRQaXhlbCA9IHRoaXMubWF4VG9nZ2xlLnBpeGVsO1xuXG4gICAgICBjb25zdCBvbk1vdXNlTW92ZSA9ICgpID0+IHtcbiAgICAgICAgaWYgKGNvaW5jaWRlbmNlVG9nZ2xlKSB7XG4gICAgICAgICAgdGhpcy5taW5Ub2dnbGUubW91c2VQaXhlbCA9IHRoaXMubWF4VG9nZ2xlLm1vdXNlUGl4ZWw7XG4gICAgICAgICAgdGhpcy5tYXhUb2dnbGUuaXNGaXhlZCA9IHRydWU7XG4gICAgICAgICAgdGhpcy5taW5Ub2dnbGUuaXNGaXhlZCA9IHRydWU7XG4gICAgICAgICAgaWYgKHRoaXMubWF4VG9nZ2xlLm1vdXNlUGl4ZWwgPiBzdGFydFBpeGVsKSB7XG4gICAgICAgICAgICB0aGlzLm1heFRvZ2dsZS5pc0ZpeGVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLm1pblRvZ2dsZS5pc0ZpeGVkID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5tYXhUb2dnbGUuaXNGaXhlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLm1pblRvZ2dsZS5pc0ZpeGVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLm1pblRvZ2dsZS5tb3VzZVBpeGVsID0gdGhpcy5tYXhUb2dnbGUubW91c2VQaXhlbDtcbiAgICAgICAgICAgIHRoaXMubWluVG9nZ2xlLnBpeGVsID0gdGhpcy5tYXhUb2dnbGUubW91c2VQaXhlbDtcbiAgICAgICAgICAgIGlmICh0aGlzLm1pblRvZ2dsZS5waXhlbCA8IDApIHtcbiAgICAgICAgICAgICAgdGhpcy5taW5Ub2dnbGUucGl4ZWwgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5taW5Ub2dnbGUuc2V0U3R5bGUoKTtcbiAgICAgICAgICAgIHRoaXMubWluVG9nZ2xlLnByZWNlbnQgPSB0aGlzLm1pblRvZ2dsZS5waXhlbCAvIHRoaXMuc2l6ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5tYXhUb2dnbGUuaXNGaXhlZCA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMubWluVG9nZ2xlLmlzRml4ZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGNvbnN0IG9uTW91c2VVcCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5taW5Ub2dnbGUubW91c2VQaXhlbCA9IHRoaXMubWluVG9nZ2xlLnBpeGVsO1xuICAgICAgICB0aGlzLm1heFRvZ2dsZS5pc0ZpeGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMubWluVG9nZ2xlLmlzRml4ZWQgPSBmYWxzZTtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uTW91c2VVcCk7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKTtcbiAgICAgIH07XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSk7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25Nb3VzZVVwKTtcbiAgICB9O1xuXG4gICAgdGhpcy5tYXhUb2dnbGVFbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIG9uTW91c2VEb3duQ29pbmNpZGVuY2UpO1xuICB9XG5cbiAgYWRkU2NhbGUoKSB7XG4gICAgY29uc3Qgb25Jbml0U2NhbGUgPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5kYXRhLmlzU2NhbGUpIHtcbiAgICAgICAgY29uc3Qgc2NhbGUgPSBuZXcgU2NhbGUodGhpcy5jb250YWluZXIsIHRoaXMuc2NhbGUsIHRoaXMuZGF0YS5pc1ZlcnRpY2FsKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2luaXRTY2FsZScsIG9uSW5pdFNjYWxlKTtcbiAgfVxuXG4gIGNoYW5nZVRhYigpIHtcbiAgICBjb25zdCBvbkNoYW5nZVRhYiA9ICgpID0+IHtcbiAgICAgIHRoaXMuc2V0VGFiKCk7XG4gICAgfTtcbiAgICB0aGlzLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2VUYWInLCBvbkNoYW5nZVRhYik7XG4gIH1cblxuICBjaGFuZ2VJbnB1dCgpIHtcbiAgICBjb25zdCBvbkNoYW5nZUlucHV0ID0gKCkgPT4ge1xuICAgICAgdGhpcy5taW5Ub2dnbGUucHJlY2VudCA9IHRoaXMucHJlY2VudC5taW47XG4gICAgICB0aGlzLm1heFRvZ2dsZS5wcmVjZW50ID0gdGhpcy5wcmVjZW50Lm1heDtcbiAgICAgIHRoaXMubWluVG9nZ2xlLmNoYW5nZVRvZ2dsZSgpO1xuICAgICAgdGhpcy5tYXhUb2dnbGUuY2hhbmdlVG9nZ2xlKCk7XG4gICAgICB0aGlzLnNldFRhYigpO1xuICAgICAgdGhpcy5zZXRSYW5nZSgpO1xuICAgIH07XG4gICAgdGhpcy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlSW5wdXQnLCBvbkNoYW5nZUlucHV0KTtcbiAgfVxuXG4gIHJlbW92ZU1hcmt1cCgpIHtcbiAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmUoKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBWaWV3O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==