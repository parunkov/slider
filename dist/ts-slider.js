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
                // this.minInput.value = this.data.array[0];
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
        window.addEventListener('resize', () => {
            this.init();
        });
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
        this.container.addEventListener('initScale', () => {
            if (this.data.isScale) {
                const scale = new _scale_ts__WEBPACK_IMPORTED_MODULE_1__["default"](this.container, this.scale, this.data.isVertical);
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
/* harmony default export */ __webpack_exports__["default"] = (View);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Z1bmN0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luaXQtdmlldy1tYXJrdXAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9wcmVzZW50ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjYWxlLnRzIiwid2VicGFjazovLy8uL3NyYy90b2dnbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUEwQztBQUcxQyxNQUFNLFdBQVcsR0FBUztJQUN4QixVQUFVLEVBQUUsc0JBQXNCO0lBQ2xDLFVBQVUsRUFBRSxzQkFBc0I7SUFDbEMsT0FBTyxFQUFFLEtBQUs7SUFDZCxLQUFLLEVBQUUsRUFBRTtJQUNULElBQUksRUFBRSxDQUFDO0lBQ1AsUUFBUSxFQUFFLENBQUM7SUFDWCxRQUFRLEVBQUUsR0FBRztJQUNiLGNBQWMsRUFBRSxFQUFFO0lBQ2xCLGNBQWMsRUFBRSxFQUFFO0lBQ2xCLE9BQU8sRUFBRSxJQUFJO0lBQ2IsVUFBVSxFQUFFLEtBQUs7SUFDakIsS0FBSyxFQUFFLElBQUk7SUFDWCxPQUFPLEVBQUUsSUFBSTtJQUNiLGFBQWEsRUFBRSxDQUFDO0NBQ2pCLENBQUM7QUFFRixNQUFNLFlBQVksR0FBRyxDQUFDLElBQVUsRUFBRSxFQUFFO0lBQ2xDLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQztJQUN0QixRQUFRLENBQUMsY0FBYyxHQUFHLDhEQUFRLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN0RixRQUFRLENBQUMsY0FBYyxHQUFHLDhEQUFRLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN0RixPQUFPLFFBQVEsQ0FBQztBQUNsQixDQUFDLENBQUM7QUFLQTs7Ozs7Ozs7Ozs7OztBQzdCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQU0sZUFBZSxHQUFHLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxNQUFPLEVBQUUsSUFBSyxFQUFFLEVBQUU7SUFDdkQsTUFBTSxXQUFXLEdBQUcsQ0FBQyxHQUFHLEVBQUUsRUFBRTtRQUMxQixJQUFJLE1BQU0sRUFBRTtZQUNWLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNiO1FBRUQsTUFBTSxXQUFXLEdBQUcsQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUM5QixNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbEIsQ0FBQyxDQUFDO1FBQ0YsTUFBTSxTQUFTLEdBQUcsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUMxQixJQUFJLElBQUksRUFBRTtnQkFDUixJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDYjtZQUNELFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDbkQsUUFBUSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUN6RCxDQUFDLENBQUM7UUFDRixRQUFRLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQ3BELFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDbEQsQ0FBQyxDQUFDO0lBRUYsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxXQUFXLENBQUMsQ0FBQztBQUNsRCxDQUFDLENBQUM7QUFFRixNQUFNLEtBQUssR0FBRyxDQUFDLEtBQWEsRUFBRSxJQUFZLEVBQUUsRUFBRTtJQUM1QyxNQUFNLFNBQVMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4RyxNQUFNLE9BQU8sR0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNuRixPQUFPLE9BQU8sQ0FBQztBQUNqQixDQUFDLENBQUM7QUFFRixNQUFNLFFBQVEsR0FBRyxDQUFDLFVBQWtCLEVBQUUsR0FBVyxFQUFFLEdBQVcsRUFBRSxFQUFFO0lBQ2hFLElBQUksS0FBSyxHQUFHLFVBQVUsQ0FBQztJQUN2QixJQUFJLEtBQUssR0FBRyxHQUFHLEVBQUU7UUFDZixLQUFLLEdBQUcsR0FBRyxDQUFDO0tBQ2I7U0FBTSxJQUFJLEtBQUssR0FBRyxHQUFHLEVBQUU7UUFDdEIsS0FBSyxHQUFHLEdBQUcsQ0FBQztLQUNiO0lBQ0QsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDLENBQUM7QUFFRixNQUFNLFNBQVMsR0FBRyxDQUFDLEtBQWEsRUFBRSxHQUFXLEVBQUUsR0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztBQUUzRixNQUFNLE9BQU8sR0FBRyxDQUFDLEtBQWEsRUFBRSxHQUFXLEVBQUUsR0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQztBQUV6RixNQUFNLGFBQWEsR0FBRyxDQUFDLFNBQXNCLEVBQUUsR0FBVyxFQUFFLEdBQVcsRUFBRSxVQUFtQixFQUFFLEVBQUU7SUFDOUYsTUFBTSxLQUFLLEdBQUcsU0FBUyxDQUFDO0lBQ3hCLElBQUksVUFBVSxFQUFFO1FBQ2QsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQztRQUM3QixLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7S0FDekM7U0FBTTtRQUNMLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUM7UUFDOUIsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO0tBQ3hDO0lBQ0QsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDLENBQUM7QUFTQTs7Ozs7Ozs7Ozs7OztBQy9ERjtBQUFBO0FBQXVDO0FBRXZDLENBQUMsVUFBVSxDQUFDO0lBQ1YsTUFBTSxPQUFPLEdBQUc7UUFDZCxJQUFJLENBQUMsT0FBTztZQUNWLE1BQU0sRUFBRSxHQUFXLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO1lBQ3pDLE1BQU0sSUFBSSxHQUFnQixRQUFRLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3JELE1BQU0sU0FBUyxHQUFHLElBQUkscURBQVMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDL0MsTUFBTSxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQztRQUN6QixDQUFDO1FBQ0QsTUFBTSxDQUFDLE9BQU87WUFDWixNQUFNLEVBQUUsR0FBVyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUN6QyxNQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDN0IsU0FBUyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7WUFDNUIsU0FBUyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3pCLENBQUM7S0FDRixDQUFDO0lBRUYsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxRQUFRLEdBQUcsVUFBVSxPQUFPLEVBQUUsTUFBTztRQUN4QyxNQUFNLEVBQUUsR0FBVyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUN6QyxJQUFJLE1BQU0sS0FBSyxRQUFRLElBQUksTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFO1lBQ3JDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztTQUN2QzthQUFNLElBQUksT0FBTyxNQUFNLEtBQUssUUFBUSxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFO1lBQy9ELE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztTQUNyQzthQUFNO1lBQ0wsQ0FBQyxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsTUFBTSxvQ0FBb0MsQ0FBQyxDQUFDO1NBQ3ZFO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDLENBQUM7QUFDSixDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7OztBQzdCWDtBQUFBO0FBQUE7QUFBQSxNQUFNLGNBQWMsR0FBRyxDQUFDLElBQWlCLEVBQUUsUUFBaUIsRUFBRSxFQUFFO0lBQzlELE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQztJQUN6QixNQUFNLFlBQVksR0FBVzs7Ozs7Ozs7OztTQVV0QixDQUFDO0lBQ1IsV0FBVyxDQUFDLFNBQVMsR0FBRyxZQUFZLENBQUM7SUFDckMsTUFBTSxHQUFHLEdBQUcsV0FBVyxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hELElBQUksUUFBUSxFQUFFO1FBQ1osS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN0QyxNQUFNLFVBQVUsR0FBVyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQy9DLE1BQU0sYUFBYSxHQUFXLEdBQUcsVUFBVSxZQUFZLENBQUM7WUFDeEQsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDckM7S0FDRjtJQUNELE9BQU8sV0FBVyxDQUFDO0FBQ3JCLENBQUMsQ0FBQztBQUVGLE1BQU0sTUFBTSxHQUFHLENBQUMsTUFBbUIsRUFBRSxFQUFFO0lBU3JDLE1BQU0sWUFBWSxHQUFXO1FBQzNCLEdBQUcsRUFBRSxNQUFNLENBQUMsYUFBYSxDQUFDLHlCQUF5QixDQUFDO1FBQ3BELEdBQUcsRUFBRSxNQUFNLENBQUMsYUFBYSxDQUFDLHlCQUF5QixDQUFDO1FBQ3BELEtBQUssRUFBRSxNQUFNLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDO1FBQ2hELEdBQUcsRUFBRSxNQUFNLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDO1FBQzVDLE1BQU0sRUFBRSxNQUFNLENBQUMsYUFBYSxDQUFDLCtCQUErQixDQUFDO1FBQzdELE1BQU0sRUFBRSxNQUFNLENBQUMsYUFBYSxDQUFDLCtCQUErQixDQUFDO0tBQzlELENBQUM7SUFDRixPQUFPLFlBQVksQ0FBQztBQUN0QixDQUFDLENBQUM7QUFLQTs7Ozs7Ozs7Ozs7OztBQzFDRjtBQUFBO0FBR3dCO0FBRXhCLE1BQU0sS0FBSztJQWlCVCxZQUFZLElBQUk7UUFDZCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsT0FBTyxHQUFHO1lBQ2IsR0FBRyxFQUFFLEVBQUU7WUFDUCxHQUFHLEVBQUUsRUFBRTtTQUNSLENBQUM7UUFDRixJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1gsR0FBRyxFQUFFLENBQUM7WUFDTixHQUFHLEVBQUUsQ0FBQztTQUNQLENBQUM7UUFDRixJQUFJLENBQUMsT0FBTyxHQUFHO1lBQ2IsR0FBRyxFQUFFLENBQUM7WUFDTixHQUFHLEVBQUUsQ0FBQztTQUNQLENBQUM7UUFDRixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ1osSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztRQUN2QyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztRQUN2QyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDdEIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDckIsNENBQTRDO2dCQUM1QyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7YUFDekM7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7YUFDMUM7U0FDRjtJQUNILENBQUM7SUFFRCxhQUFhO1FBQ1gsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hFLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4RSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVELElBQUk7UUFDRixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLEdBQUcsRUFBRTtnQkFDaEQsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3ZCLENBQUMsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHLDJEQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNuRSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsR0FBRywyREFBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDcEU7UUFDRCxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDckIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQzthQUM5QjtTQUNGO2FBQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUM1QixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztZQUN2QyxRQUFRLEdBQUcsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO1lBQ3pDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDcEMsTUFBTSxTQUFTLEdBQVcsSUFBSSxDQUFDLEtBQUssQ0FDbEMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztzQkFDL0QsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUN6QyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUNuQixNQUFNLElBQUksR0FBVywyREFBSyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN0RCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN2QjtTQUNGO0lBQ0gsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsRUFBRSxHQUFHLEVBQUU7WUFDakQsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDckIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO2FBQ3RCO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHLDJEQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDekQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsMkRBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzFEO1lBQ0QsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ2hCLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksV0FBVyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7UUFDaEUsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsV0FBVztRQUNULE1BQU0sTUFBTSxHQUFHLEdBQUcsRUFBRTtZQUNsQixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNyQixNQUFNLE9BQU8sR0FBRyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBRTtvQkFDL0IsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7d0JBQ25DLE9BQU8sS0FBSyxDQUFDO3FCQUNkO29CQUNELE9BQU8sS0FBSyxDQUFDO2dCQUNmLENBQUMsQ0FBQztnQkFDRixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdkUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUMzQixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUM1QyxDQUFDO2dCQUNGLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUM5RCxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDOUQsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRTtvQkFDbkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7b0JBQ2hDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO2lCQUMzQztnQkFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztnQkFDdkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7YUFDeEM7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztnQkFDdEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztnQkFDdEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsOERBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUM5RSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyw4REFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQzlFLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNoRCxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDaEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsMkRBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUM5RCxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsR0FBRywyREFBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDL0Q7WUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQzlELENBQUMsQ0FBQztRQUNGLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2pELENBQUM7Q0FDRjtBQUVjLG9FQUFLLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUM1SnJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkI7QUFRRTtBQUtQO0FBS0w7QUFFbkIsTUFBTSxTQUFTO0lBYWIsWUFBWSxPQUFPLEVBQUUsSUFBSTtRQUN2QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ1osSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFcEIsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUU7WUFDckMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2QsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDWCxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjO1lBQzdCLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWM7U0FDOUIsQ0FBQztJQUNKLENBQUM7SUFFRCxVQUFVO1FBQ1IsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLG9EQUFXLENBQUMsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxJQUFJLEdBQUcsNkRBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxVQUFVO1FBQ1IsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxJQUFJLEdBQUcsNkRBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNaLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxVQUFVO1FBQ1IsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztRQUMvQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO0lBQ2pELENBQUM7SUFFRCxTQUFTO1FBQ1AsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLElBQUksV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVELFNBQVM7UUFDUCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsK0RBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzFGLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsR0FBRywrREFBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDNUYsQ0FBQztJQUVELFVBQVU7UUFDUixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsNkRBQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM5RixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsNkRBQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNoRyxDQUFDO0lBRUQsSUFBSTtRQUNGLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDM0IsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUM1QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksZ0RBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxpREFBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDdkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLElBQUksV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFFaEUsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxFQUFFLEdBQUcsRUFBRTtZQUN2RCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUNwRSxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxZQUFZO1FBQ1YsTUFBTSxZQUFZLEdBQUcsR0FBRyxFQUFFO1lBQ3hCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNsQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUNwRSxDQUFDLENBQUM7UUFDRixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLEVBQUUsR0FBRyxFQUFFO1lBQ3pELElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsSUFBSSxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUNsRSxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxZQUFZO1FBQ1YsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxFQUFFLEdBQUcsRUFBRTtZQUN2RCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztZQUN2QyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUM1RSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQzdFO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO2dCQUN2QyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztnQkFDdkMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUNqQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7YUFDbkI7WUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsSUFBSSxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUNwRSxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRjtBQUVjLHdFQUFTLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUM3SXpCO0FBQUEsTUFBTSxLQUFLO0lBUVQsWUFBWSxNQUFNLEVBQUUsS0FBSyxFQUFFLFVBQVU7UUFDbkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDN0IsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRCxVQUFVO1FBQ1IsTUFBTSxHQUFHLEdBQWdCLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDdEUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDN0MsTUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNoRCxTQUFTLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1lBQ2pELFNBQVMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN0QyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7Z0JBQ25CLFNBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7Z0JBQzNELFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsWUFBWSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQzthQUMvRTtpQkFBTTtnQkFDTCxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7YUFDL0U7WUFDRCxHQUFHLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQztDQUNGO0FBRWMsb0VBQUssRUFBQzs7Ozs7Ozs7Ozs7OztBQ2hDckI7QUFBQTtBQUEwQztBQUUxQyxNQUFNLGNBQWMsR0FBRyxDQUFDLFVBQXVCLEVBQUUsS0FBYSxFQUFFLFVBQW1CLEVBQUUsRUFBRTtJQUNyRixNQUFNLE1BQU0sR0FBRyxVQUFVLENBQUM7SUFDMUIsSUFBSSxVQUFVLEVBQUU7UUFDZCxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxHQUFHLEtBQUssSUFBSSxDQUFDO0tBQ2pDO1NBQU07UUFDTCxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxHQUFHLEtBQUssSUFBSSxDQUFDO0tBQ2xDO0lBQ0QsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQyxDQUFDO0FBRUYsTUFBTSxNQUFNO0lBbUJWLFlBQVksTUFBTSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsVUFBVTtRQUMzQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUMzQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDN0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDN0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxNQUFNLEdBQUcsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDekUsQ0FBQztJQUVELFlBQVk7UUFDVixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUMzQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDN0IsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxZQUFZO1FBQ1YsTUFBTSxXQUFXLEdBQUcsQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUMxQixNQUFNLE1BQU0sR0FBVyxHQUFHLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO1lBQzFELE1BQU0sTUFBTSxHQUFXLEdBQUcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7WUFDekQsTUFBTSxVQUFVLEdBQVcsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUMzQyxNQUFNLE1BQU0sR0FBRyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBRTtnQkFDOUIsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO29CQUNuQixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssR0FBRyxNQUFNLENBQUM7aUJBQ2xDO3FCQUFNO29CQUNMLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxHQUFHLE1BQU0sQ0FBQztpQkFDbEM7Z0JBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO2dCQUM3QixJQUFJLENBQUMsS0FBSyxHQUFHLDhEQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzlFLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtvQkFDaEIsSUFBSSxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUM7aUJBQ3pCO2dCQUNELElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDaEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDeEMsQ0FBQyxDQUFDO1lBQ0YsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBRTdCLE1BQU0sV0FBVyxHQUFHLENBQUMsT0FBTyxFQUFFLEVBQUU7Z0JBQzlCLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDekIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3ZDLENBQUMsQ0FBQztZQUNGLE1BQU0sU0FBUyxHQUFHLEdBQUcsRUFBRTtnQkFDckIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO2dCQUM3QixRQUFRLENBQUMsbUJBQW1CLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO2dCQUNuRCxRQUFRLENBQUMsbUJBQW1CLENBQUMsV0FBVyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBQ3pELENBQUMsQ0FBQztZQUNGLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFDcEQsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUNsRCxDQUFDLENBQUM7UUFDRixJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUN6RCxDQUFDO0NBQ0Y7QUFFYyxxRUFBTSxFQUFDOzs7Ozs7Ozs7Ozs7O0FDMUZ0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRytCO0FBRUE7QUFRRTtBQU1UO0FBRXhCLE1BQU0sSUFBSTtJQTZCUixZQUFZLElBQUksRUFBRSxJQUFJO1FBQ3BCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxPQUFPLEdBQUc7WUFDYixHQUFHLEVBQUUsQ0FBQztZQUNOLEdBQUcsRUFBRSxDQUFDO1NBQ1AsQ0FBQztRQUNGLElBQUksQ0FBQyxPQUFPLEdBQUc7WUFDYixHQUFHLEVBQUUsRUFBRTtZQUNQLEdBQUcsRUFBRSxFQUFFO1NBQ1IsQ0FBQztRQUNGLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELFFBQVE7UUFDTiwyRUFBYyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFDbEUsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUN4QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDO1NBQ3pDO2FBQU07WUFDTCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDO1NBQ3hDO1FBQ0QsSUFBSSxDQUFDLGFBQWEsR0FBRyxtRUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDaEQsSUFBSSxDQUFDLGFBQWEsR0FBRyxtRUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDaEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxtRUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDaEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxtRUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDaEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxtRUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFFOUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztTQUNsQztRQUVELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNwQixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDOUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQy9CO0lBQ0gsQ0FBQztJQUVELE1BQU07UUFDSixJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztRQUMvQyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztJQUNqRCxDQUFDO0lBRUQsUUFBUTtRQUNOLG1FQUFhLENBQ1gsSUFBSSxDQUFDLFNBQVMsRUFDZCxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxFQUNsQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxFQUNsQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FDckIsQ0FBQztJQUNKLENBQUM7SUFFRCxZQUFZO1FBQ1YsTUFBTSxnQkFBZ0IsR0FBRywrREFBUyxDQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUNuQixDQUFDO1FBQ0YsTUFBTSxnQkFBZ0IsR0FBRywrREFBUyxDQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUNuQixDQUFDO1FBQ0YsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLGtEQUFNLENBQ3pCLElBQUksQ0FBQyxhQUFhLEVBQ2xCLGdCQUFnQixFQUNoQixJQUFJLENBQUMsSUFBSSxFQUNULElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUNyQixDQUFDO1FBQ0YsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLGtEQUFNLENBQ3pCLElBQUksQ0FBQyxhQUFhLEVBQ2xCLGdCQUFnQixFQUNoQixJQUFJLENBQUMsSUFBSSxFQUNULElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUNyQixDQUFDO1FBQ0YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDdEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1NBQzVCO1FBQ0QsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRWhCLE1BQU0sV0FBVyxHQUFHLEdBQUcsRUFBRTtZQUN2QixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQztZQUM1QyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQztZQUM1QyxtRUFBYSxDQUNYLElBQUksQ0FBQyxTQUFTLEVBQ2QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksRUFDbEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksRUFDbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQ3JCLENBQUM7WUFDRixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQztZQUMxQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQztZQUMxQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDZCxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1FBQzlELENBQUMsQ0FBQztRQUNGLHFFQUFlLENBQUMsUUFBUSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDbkQsR0FBRyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELG1CQUFtQjtRQUNqQixNQUFNLHNCQUFzQixHQUFHLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDckMsSUFBSSxpQkFBaUIsR0FBWSxLQUFLLENBQUM7WUFDdkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ2pDLGlCQUFpQixHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLHdCQUF3QixDQUFDLENBQUM7WUFDckgsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ2xDLElBQUksVUFBa0IsQ0FBQztZQUN2QixVQUFVLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7WUFFbEMsTUFBTSxXQUFXLEdBQUcsR0FBRyxFQUFFO2dCQUN2QixJQUFJLGlCQUFpQixFQUFFO29CQUNyQixJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQztvQkFDdEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO29CQUM5QixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7b0JBQzlCLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEdBQUcsVUFBVSxFQUFFO3dCQUMxQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7d0JBQy9CLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztxQkFDL0I7eUJBQU07d0JBQ0wsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO3dCQUM5QixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7d0JBQy9CLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDO3dCQUN0RCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQzt3QkFDakQsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUU7NEJBQzVCLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQzt5QkFDMUI7d0JBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQzt3QkFDMUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztxQkFDM0Q7aUJBQ0Y7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO29CQUMvQixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7aUJBQ2hDO1lBQ0gsQ0FBQyxDQUFDO1lBQ0YsTUFBTSxTQUFTLEdBQUcsR0FBRyxFQUFFO2dCQUNyQixJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQztnQkFDakQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO2dCQUMvQixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7Z0JBQy9CLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUM7Z0JBQ25ELFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFDekQsQ0FBQyxDQUFDO1lBQ0YsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxXQUFXLENBQUMsQ0FBQztZQUNwRCxRQUFRLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ2xELENBQUMsQ0FBQztRQUVGLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLHNCQUFzQixDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxHQUFHLEVBQUU7WUFDaEQsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDckIsTUFBTSxLQUFLLEdBQUcsSUFBSSxpREFBSyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQzNFO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsU0FBUztRQUNQLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLEdBQUcsRUFBRTtZQUNoRCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDaEIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxFQUFFLEdBQUcsRUFBRTtZQUNsRCxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztZQUMxQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztZQUMxQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQzlCLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDOUIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2QsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2xCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFlBQVk7UUFDVixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQzFCLENBQUM7Q0FDRjtBQUVjLG1FQUFJLEVBQUMiLCJmaWxlIjoidHMtc2xpZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJpbXBvcnQgeyBzZXRMaW1pdCB9IGZyb20gJy4vZnVuY3Rpb25zLnRzJztcbmltcG9ydCB7IERhdGEgfSBmcm9tICcuL2ludGVyZmFjZXMudHMnO1xuXG5jb25zdCBkZWZhdWx0RGF0YTogRGF0YSA9IHtcbiAgbWluSW5wdXRJZDogJ3RzLXNsaWRlcl9fbWluLWlucHV0JyxcbiAgbWF4SW5wdXRJZDogJ3RzLXNsaWRlcl9fbWF4LWlucHV0JyxcbiAgaXNBcnJheTogZmFsc2UsXG4gIGFycmF5OiBbXSxcbiAgc3RlcDogMSxcbiAgbWluVmFsdWU6IDAsXG4gIG1heFZhbHVlOiAxMDAsXG4gIG1pblRvZ2dsZVZhbHVlOiAyNSxcbiAgbWF4VG9nZ2xlVmFsdWU6IDc1LFxuICBpc1JhbmdlOiB0cnVlLFxuICBpc1ZlcnRpY2FsOiBmYWxzZSxcbiAgaXNUYWI6IHRydWUsXG4gIGlzU2NhbGU6IHRydWUsXG4gIHNjYWxlUXVhbnRpdHk6IDQsXG59O1xuXG5jb25zdCBzZXREYXRhTGltaXQgPSAoZGF0YTogRGF0YSkgPT4ge1xuICBjb25zdCBkYXRhQ29weSA9IGRhdGE7XG4gIGRhdGFDb3B5Lm1pblRvZ2dsZVZhbHVlID0gc2V0TGltaXQoZGF0YS5taW5Ub2dnbGVWYWx1ZSwgZGF0YS5taW5WYWx1ZSwgZGF0YS5tYXhWYWx1ZSk7XG4gIGRhdGFDb3B5Lm1heFRvZ2dsZVZhbHVlID0gc2V0TGltaXQoZGF0YS5tYXhUb2dnbGVWYWx1ZSwgZGF0YS5taW5WYWx1ZSwgZGF0YS5tYXhWYWx1ZSk7XG4gIHJldHVybiBkYXRhQ29weTtcbn07XG5cbmV4cG9ydCB7XG4gIHNldERhdGFMaW1pdCxcbiAgZGVmYXVsdERhdGEsXG59O1xuIiwiXG5jb25zdCBzZXRNb3VzZUhhbmRsZXIgPSAoZWxlbSwgb25Nb3ZlLCBvbkRvdm4/LCBvblVwPykgPT4ge1xuICBjb25zdCBvbk1vdXNlRG93biA9IChldnQpID0+IHtcbiAgICBpZiAob25Eb3ZuKSB7XG4gICAgICBvbkRvdm4oZXZ0KTtcbiAgICB9XG5cbiAgICBjb25zdCBvbk1vdXNlTW92ZSA9IChtb3ZlRXZ0KSA9PiB7XG4gICAgICBvbk1vdmUobW92ZUV2dCk7XG4gICAgfTtcbiAgICBjb25zdCBvbk1vdXNlVXAgPSAodXBFdnQpID0+IHtcbiAgICAgIGlmIChvblVwKSB7XG4gICAgICAgIG9uVXAodXBFdnQpO1xuICAgICAgfVxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uTW91c2VVcCk7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSk7XG4gICAgfTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uTW91c2VVcCk7XG4gIH07XG5cbiAgZWxlbS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBvbk1vdXNlRG93bik7XG59O1xuXG5jb25zdCByb3VuZCA9ICh2YWx1ZTogbnVtYmVyLCBzdGVwOiBudW1iZXIpID0+IHtcbiAgY29uc3QgcHJlY2lzaW9uID0gKHgpID0+ICsoKHgudG9TdHJpbmcoKS5pbmNsdWRlcygnLicpKSA/ICh4LnRvU3RyaW5nKCkuc3BsaXQoJy4nKS5wb3AoKS5sZW5ndGgpIDogKDApKTtcbiAgY29uc3Qgcm91bmRlZDogc3RyaW5nID0gKE1hdGgucm91bmQodmFsdWUgLyBzdGVwKSAqIHN0ZXApLnRvRml4ZWQocHJlY2lzaW9uKHN0ZXApKTtcbiAgcmV0dXJuIHJvdW5kZWQ7XG59O1xuXG5jb25zdCBzZXRMaW1pdCA9ICh2YWx1ZVBhcmFtOiBudW1iZXIsIG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcikgPT4ge1xuICBsZXQgdmFsdWUgPSB2YWx1ZVBhcmFtO1xuICBpZiAodmFsdWUgPiBtYXgpIHtcbiAgICB2YWx1ZSA9IG1heDtcbiAgfSBlbHNlIGlmICh2YWx1ZSA8IG1pbikge1xuICAgIHZhbHVlID0gbWluO1xuICB9XG4gIHJldHVybiB2YWx1ZTtcbn07XG5cbmNvbnN0IHRvUHJlY2VudCA9ICh2YWx1ZTogbnVtYmVyLCBtaW46IG51bWJlciwgbWF4OiBudW1iZXIpID0+ICh2YWx1ZSAtIG1pbikgLyAobWF4IC0gbWluKTtcblxuY29uc3QgdG9WYWx1ZSA9ICh2YWx1ZTogbnVtYmVyLCBtaW46IG51bWJlciwgbWF4OiBudW1iZXIpID0+IChtaW4gKyAobWF4IC0gbWluKSAqIHZhbHVlKTtcblxuY29uc3Qgc2V0UmFuZ2VTdHlsZSA9IChyYW5nZUVsZW06IEhUTUxFbGVtZW50LCBtaW46IG51bWJlciwgbWF4OiBudW1iZXIsIGlzVmVydGljYWw6IGJvb2xlYW4pID0+IHtcbiAgY29uc3QgcmFuZ2UgPSByYW5nZUVsZW07XG4gIGlmIChpc1ZlcnRpY2FsKSB7XG4gICAgcmFuZ2Uuc3R5bGUudG9wID0gYCR7bWlufXB4YDtcbiAgICByYW5nZS5zdHlsZS5oZWlnaHQgPSBgJHsobWF4IC0gbWluKX1weGA7XG4gIH0gZWxzZSB7XG4gICAgcmFuZ2Uuc3R5bGUubGVmdCA9IGAke21pbn1weGA7XG4gICAgcmFuZ2Uuc3R5bGUud2lkdGggPSBgJHsobWF4IC0gbWluKX1weGA7XG4gIH1cbiAgcmV0dXJuIHJhbmdlO1xufTtcblxuZXhwb3J0IHtcbiAgc2V0TW91c2VIYW5kbGVyLFxuICByb3VuZCxcbiAgc2V0TGltaXQsXG4gIHRvUHJlY2VudCxcbiAgdG9WYWx1ZSxcbiAgc2V0UmFuZ2VTdHlsZSxcbn07XG4iLCJpbXBvcnQgUHJlc2VudGVyIGZyb20gJy4vcHJlc2VudGVyLnRzJztcblxuKGZ1bmN0aW9uICgkKSB7XG4gIGNvbnN0IG1ldGhvZHMgPSB7XG4gICAgaW5pdChvcHRpb25zKSB7XG4gICAgICBjb25zdCBpZDogc3RyaW5nID0gYCMke3RoaXMucHJvcCgnaWQnKX1gO1xuICAgICAgY29uc3Qgd3JhcDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGlkKTtcbiAgICAgIGNvbnN0IHByZXNlbnRlciA9IG5ldyBQcmVzZW50ZXIob3B0aW9ucywgd3JhcCk7XG4gICAgICB3aW5kb3dbaWRdID0gcHJlc2VudGVyO1xuICAgIH0sXG4gICAgY2hhbmdlKG9wdGlvbnMpIHtcbiAgICAgIGNvbnN0IGlkOiBzdHJpbmcgPSBgIyR7dGhpcy5wcm9wKCdpZCcpfWA7XG4gICAgICBjb25zdCBwcmVzZW50ZXIgPSB3aW5kb3dbaWRdO1xuICAgICAgcHJlc2VudGVyLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgcHJlc2VudGVyLmNoYW5nZURhdGEoKTtcbiAgICB9LFxuICB9O1xuXG4gICQuZm4udHNTbGlkZXIgPSBmdW5jdGlvbiAob3B0aW9ucywgbWV0aG9kPykge1xuICAgIGNvbnN0IGlkOiBzdHJpbmcgPSBgIyR7dGhpcy5wcm9wKCdpZCcpfWA7XG4gICAgaWYgKG1ldGhvZCA9PT0gJ2NoYW5nZScgJiYgd2luZG93W2lkXSkge1xuICAgICAgbWV0aG9kcy5jaGFuZ2UuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBtZXRob2QgPT09ICdvYmplY3QnIHx8ICFtZXRob2QgfHwgIXdpbmRvd1tpZF0pIHtcbiAgICAgIG1ldGhvZHMuaW5pdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkLmVycm9yKGDQnNC10YLQvtC0INGBINC40LzQtdC90LXQvCAke21ldGhvZH0g0L3QtSDRgdGD0YnQtdGB0YLQstGD0LXRgiDQtNC70Y8galF1ZXJ5LnRzU2xpZGVyYCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9O1xufShqUXVlcnkpKTtcbiIsImNvbnN0IGluaXRWaWV3TWFya3VwID0gKHdyYXA6IEhUTUxFbGVtZW50LCB2ZXJ0aWNhbDogYm9vbGVhbikgPT4ge1xuICBjb25zdCBjb250cm9sV3JhcCA9IHdyYXA7XG4gIGNvbnN0IGNvbnRvbE1hcmt1cDogc3RyaW5nID0gYDxkaXYgY2xhc3M9XCJ0cy1zbGlkZXJfX2NvbnRhaW5lclwiPlxuICA8ZGl2IGNsYXNzPVwidHMtc2xpZGVyX19iYXJcIj5cbiAgPGRpdiBjbGFzcz1cInRzLXNsaWRlcl9fdG9nZ2xlIHRzLXNsaWRlcl9fdG9nZ2xlLS1taW5cIj5cbiAgPGRpdiBjbGFzcz1cInRzLXNsaWRlcl9fdG9nZ2xlLXZhbHVlIHRzLXNsaWRlcl9fdG9nZ2xlLXZhbHVlLS1taW5cIj48L2Rpdj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJ0cy1zbGlkZXJfX3RvZ2dsZSB0cy1zbGlkZXJfX3RvZ2dsZS0tbWF4XCI+XG4gIDxkaXYgY2xhc3M9XCJ0cy1zbGlkZXJfX3RvZ2dsZS12YWx1ZSB0cy1zbGlkZXJfX3RvZ2dsZS12YWx1ZS0tbWF4XCI+PC9kaXY+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwidHMtc2xpZGVyX19yYW5nZVwiPjwvZGl2PlxuICA8L2Rpdj5cbiAgPC9kaXY+YDtcbiAgY29udHJvbFdyYXAuaW5uZXJIVE1MID0gY29udG9sTWFya3VwO1xuICBjb25zdCBkaXYgPSBjb250cm9sV3JhcC5xdWVyeVNlbGVjdG9yQWxsKCdkaXYnKTtcbiAgaWYgKHZlcnRpY2FsKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaXYubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGZpcnN0Q2xhc3M6IHN0cmluZyA9IGRpdltpXS5jbGFzc0xpc3RbMF07XG4gICAgICBjb25zdCB2ZXJ0aWNhbENsYXNzOiBzdHJpbmcgPSBgJHtmaXJzdENsYXNzfS0tdmVydGljYWxgO1xuICAgICAgZGl2W2ldLmNsYXNzTGlzdC5hZGQodmVydGljYWxDbGFzcyk7XG4gICAgfVxuICB9XG4gIHJldHVybiBjb250cm9sV3JhcDtcbn07XG5cbmNvbnN0IG1hcmt1cCA9IChzbGlkZXI6IEhUTUxFbGVtZW50KSA9PiB7XG4gIGludGVyZmFjZSBNYXJrdXAge1xuICAgIG1pbjogSFRNTEVsZW1lbnQ7XG4gICAgbWF4OiBIVE1MRWxlbWVudDtcbiAgICByYW5nZTogSFRNTEVsZW1lbnQ7XG4gICAgYmFyOiBIVE1MRWxlbWVudDtcbiAgICBtaW5UYWI6IEhUTUxFbGVtZW50O1xuICAgIG1heFRhYjogSFRNTEVsZW1lbnQ7XG4gIH1cbiAgY29uc3QgbWFya3VwU2xpZGVyOiBNYXJrdXAgPSB7XG4gICAgbWluOiBzbGlkZXIucXVlcnlTZWxlY3RvcignLnRzLXNsaWRlcl9fdG9nZ2xlLS1taW4nKSxcbiAgICBtYXg6IHNsaWRlci5xdWVyeVNlbGVjdG9yKCcudHMtc2xpZGVyX190b2dnbGUtLW1heCcpLFxuICAgIHJhbmdlOiBzbGlkZXIucXVlcnlTZWxlY3RvcignLnRzLXNsaWRlcl9fcmFuZ2UnKSxcbiAgICBiYXI6IHNsaWRlci5xdWVyeVNlbGVjdG9yKCcudHMtc2xpZGVyX19iYXInKSxcbiAgICBtaW5UYWI6IHNsaWRlci5xdWVyeVNlbGVjdG9yKCcudHMtc2xpZGVyX190b2dnbGUtdmFsdWUtLW1pbicpLFxuICAgIG1heFRhYjogc2xpZGVyLnF1ZXJ5U2VsZWN0b3IoJy50cy1zbGlkZXJfX3RvZ2dsZS12YWx1ZS0tbWF4JyksXG4gIH07XG4gIHJldHVybiBtYXJrdXBTbGlkZXI7XG59O1xuXG5leHBvcnQge1xuICBpbml0Vmlld01hcmt1cCxcbiAgbWFya3VwLFxufTtcbiIsImltcG9ydCB7XG4gIERhdGEsXG4gIFZhbHVlLFxuICBUYWJUZXh0LFxufSBmcm9tICcuL2ludGVyZmFjZXMudHMnO1xuXG5pbXBvcnQge1xuICByb3VuZCxcbiAgc2V0TGltaXQsXG59IGZyb20gJy4vZnVuY3Rpb25zLnRzJztcblxuY2xhc3MgTW9kZWwge1xuICBkYXRhOiBEYXRhO1xuXG4gIG1pbklucHV0OiBhbnk7XG5cbiAgbWF4SW5wdXQ6IGFueTtcblxuICB2YWx1ZTogVmFsdWU7XG5cbiAgcHJlY2VudDogVmFsdWU7XG5cbiAgdGFiVGV4dDogVGFiVGV4dDtcblxuICBvYnNlcnZlcjogSFRNTEVsZW1lbnQ7XG5cbiAgc2NhbGU6IHN0cmluZ1tdO1xuXG4gIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIHRoaXMudGFiVGV4dCA9IHtcbiAgICAgIG1pbjogJycsXG4gICAgICBtYXg6ICcnLFxuICAgIH07XG4gICAgdGhpcy52YWx1ZSA9IHtcbiAgICAgIG1pbjogMCxcbiAgICAgIG1heDogMCxcbiAgICB9O1xuICAgIHRoaXMucHJlY2VudCA9IHtcbiAgICAgIG1pbjogMCxcbiAgICAgIG1heDogMCxcbiAgICB9O1xuICAgIHRoaXMuc2NhbGUgPSBbXTtcbiAgICB0aGlzLm9ic2VydmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRXZlbnQnKTtcbiAgICB0aGlzLmluaXQoKTtcbiAgICB0aGlzLnNldFNjYWxlKCk7XG4gICAgdGhpcy5hZGRMaXN0ZW5lcigpO1xuICAgIHRoaXMuY2hhbmdlSW5wdXQoKTtcbiAgfVxuXG4gIHNldElucHV0KCkge1xuICAgIHRoaXMubWluSW5wdXQudmFsdWUgPSB0aGlzLnRhYlRleHQubWluO1xuICAgIHRoaXMubWF4SW5wdXQudmFsdWUgPSB0aGlzLnRhYlRleHQubWF4O1xuICAgIGlmICghdGhpcy5kYXRhLmlzUmFuZ2UpIHtcbiAgICAgIGlmICh0aGlzLmRhdGEuaXNBcnJheSkge1xuICAgICAgICAvLyB0aGlzLm1pbklucHV0LnZhbHVlID0gdGhpcy5kYXRhLmFycmF5WzBdO1xuICAgICAgICBbdGhpcy5taW5JbnB1dC52YWx1ZV0gPSB0aGlzLmRhdGEuYXJyYXk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm1pbklucHV0LnZhbHVlID0gdGhpcy5kYXRhLm1pblZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNldEFycmF5VmFsdWUoKSB7XG4gICAgY29uc3QgbWluID0gTWF0aC5yb3VuZCh0aGlzLnByZWNlbnQubWluICogKHRoaXMuZGF0YS5hcnJheS5sZW5ndGggLSAxKSk7XG4gICAgY29uc3QgbWF4ID0gTWF0aC5yb3VuZCh0aGlzLnByZWNlbnQubWF4ICogKHRoaXMuZGF0YS5hcnJheS5sZW5ndGggLSAxKSk7XG4gICAgdGhpcy50YWJUZXh0Lm1pbiA9IHRoaXMuZGF0YS5hcnJheVttaW5dO1xuICAgIHRoaXMudGFiVGV4dC5tYXggPSB0aGlzLmRhdGEuYXJyYXlbbWF4XTtcbiAgICB0aGlzLnNldElucHV0KCk7XG4gIH1cblxuICBpbml0KCkge1xuICAgIGlmICh0aGlzLmRhdGEuaXNBcnJheSkge1xuICAgICAgdGhpcy5vYnNlcnZlci5hZGRFdmVudExpc3RlbmVyKCdzZXRQcmVjZW50JywgKCkgPT4ge1xuICAgICAgICB0aGlzLnNldEFycmF5VmFsdWUoKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRhYlRleHQubWluID0gcm91bmQodGhpcy5kYXRhLm1pblRvZ2dsZVZhbHVlLCB0aGlzLmRhdGEuc3RlcCk7XG4gICAgICB0aGlzLnRhYlRleHQubWF4ID0gcm91bmQodGhpcy5kYXRhLm1heFRvZ2dsZVZhbHVlLCB0aGlzLmRhdGEuc3RlcCk7XG4gICAgfVxuICAgIHRoaXMubWluSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHt0aGlzLmRhdGEubWluSW5wdXRJZH1gKTtcbiAgICB0aGlzLm1heElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7dGhpcy5kYXRhLm1heElucHV0SWR9YCk7XG4gICAgdGhpcy5zZXRJbnB1dCgpO1xuICB9XG5cbiAgc2V0U2NhbGUoKSB7XG4gICAgaWYgKHRoaXMuZGF0YS5pc0FycmF5KSB7XG4gICAgICBpZiAodGhpcy5kYXRhLmlzU2NhbGUpIHtcbiAgICAgICAgdGhpcy5zY2FsZSA9IHRoaXMuZGF0YS5hcnJheTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMuZGF0YS5pc1NjYWxlKSB7XG4gICAgICBsZXQgcXVhbnRpdHkgPSB0aGlzLmRhdGEuc2NhbGVRdWFudGl0eTtcbiAgICAgIHF1YW50aXR5ID0gKHF1YW50aXR5IDwgMikgPyAyIDogcXVhbnRpdHk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHF1YW50aXR5OyBpICs9IDEpIHtcbiAgICAgICAgY29uc3QgdGV4dFZhbHVlOiBudW1iZXIgPSBNYXRoLnJvdW5kKFxuICAgICAgICAgICgodGhpcy5kYXRhLm1pblZhbHVlICsgKCh0aGlzLmRhdGEubWF4VmFsdWUgLSB0aGlzLmRhdGEubWluVmFsdWUpXG4gICAgICAgICAgLyAocXVhbnRpdHkgLSAxKSkpICogaSkgLyB0aGlzLmRhdGEuc3RlcCxcbiAgICAgICAgKSAqIHRoaXMuZGF0YS5zdGVwO1xuICAgICAgICBjb25zdCB0ZXh0OiBzdHJpbmcgPSByb3VuZCh0ZXh0VmFsdWUsIHRoaXMuZGF0YS5zdGVwKTtcbiAgICAgICAgdGhpcy5zY2FsZS5wdXNoKHRleHQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGFkZExpc3RlbmVyKCkge1xuICAgIHRoaXMub2JzZXJ2ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlVmFsdWUnLCAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5kYXRhLmlzQXJyYXkpIHtcbiAgICAgICAgdGhpcy5zZXRBcnJheVZhbHVlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRhYlRleHQubWluID0gcm91bmQodGhpcy52YWx1ZS5taW4sIHRoaXMuZGF0YS5zdGVwKTtcbiAgICAgICAgdGhpcy50YWJUZXh0Lm1heCA9IHJvdW5kKHRoaXMudmFsdWUubWF4LCB0aGlzLmRhdGEuc3RlcCk7XG4gICAgICB9XG4gICAgICB0aGlzLnNldElucHV0KCk7XG4gICAgICB0aGlzLm9ic2VydmVyLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdjaGFuZ2VUYWJUZXh0JykpO1xuICAgIH0pO1xuICB9XG5cbiAgY2hhbmdlSW5wdXQoKSB7XG4gICAgY29uc3Qgb25CbHVyID0gKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuZGF0YS5pc0FycmF5KSB7XG4gICAgICAgIGNvbnN0IGluQXJyYXkgPSAodmFsdWUsIGxpbWl0KSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMuZGF0YS5hcnJheS5pbmNsdWRlcyh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGxpbWl0O1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLm1pbklucHV0LnZhbHVlID0gaW5BcnJheSh0aGlzLm1pbklucHV0LnZhbHVlLCB0aGlzLmRhdGEuYXJyYXlbMF0pO1xuICAgICAgICB0aGlzLm1heElucHV0LnZhbHVlID0gaW5BcnJheShcbiAgICAgICAgICB0aGlzLm1heElucHV0LnZhbHVlLFxuICAgICAgICAgIHRoaXMuZGF0YS5hcnJheVt0aGlzLmRhdGEuYXJyYXkubGVuZ3RoIC0gMV0sXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMudmFsdWUubWluID0gdGhpcy5kYXRhLmFycmF5LmluZGV4T2YodGhpcy5taW5JbnB1dC52YWx1ZSk7XG4gICAgICAgIHRoaXMudmFsdWUubWF4ID0gdGhpcy5kYXRhLmFycmF5LmluZGV4T2YodGhpcy5tYXhJbnB1dC52YWx1ZSk7XG4gICAgICAgIGlmICh0aGlzLnZhbHVlLm1pbiA+IHRoaXMudmFsdWUubWF4KSB7XG4gICAgICAgICAgdGhpcy52YWx1ZS5taW4gPSB0aGlzLnZhbHVlLm1heDtcbiAgICAgICAgICB0aGlzLm1pbklucHV0LnZhbHVlID0gdGhpcy5tYXhJbnB1dC52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRhYlRleHQubWluID0gdGhpcy5taW5JbnB1dC52YWx1ZTtcbiAgICAgICAgdGhpcy50YWJUZXh0Lm1heCA9IHRoaXMubWF4SW5wdXQudmFsdWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnZhbHVlLm1pbiA9ICt0aGlzLm1pbklucHV0LnZhbHVlO1xuICAgICAgICB0aGlzLnZhbHVlLm1heCA9ICt0aGlzLm1heElucHV0LnZhbHVlO1xuICAgICAgICB0aGlzLnZhbHVlLm1pbiA9IHNldExpbWl0KHRoaXMudmFsdWUubWluLCB0aGlzLmRhdGEubWluVmFsdWUsIHRoaXMudmFsdWUubWF4KTtcbiAgICAgICAgdGhpcy52YWx1ZS5tYXggPSBzZXRMaW1pdCh0aGlzLnZhbHVlLm1heCwgdGhpcy52YWx1ZS5taW4sIHRoaXMuZGF0YS5tYXhWYWx1ZSk7XG4gICAgICAgIHRoaXMubWluSW5wdXQudmFsdWUgPSB0aGlzLnZhbHVlLm1pbi50b1N0cmluZygpO1xuICAgICAgICB0aGlzLm1heElucHV0LnZhbHVlID0gdGhpcy52YWx1ZS5tYXgudG9TdHJpbmcoKTtcbiAgICAgICAgdGhpcy50YWJUZXh0Lm1pbiA9IHJvdW5kKHRoaXMubWluSW5wdXQudmFsdWUsIHRoaXMuZGF0YS5zdGVwKTtcbiAgICAgICAgdGhpcy50YWJUZXh0Lm1heCA9IHJvdW5kKHRoaXMubWF4SW5wdXQudmFsdWUsIHRoaXMuZGF0YS5zdGVwKTtcbiAgICAgIH1cbiAgICAgIHRoaXMub2JzZXJ2ZXIuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2NoYW5nZUlucHV0JykpO1xuICAgIH07XG4gICAgdGhpcy5taW5JbnB1dC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgb25CbHVyKTtcbiAgICB0aGlzLm1heElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBvbkJsdXIpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vZGVsO1xuIiwiaW1wb3J0IFZpZXcgZnJvbSAnLi92aWV3LnRzJztcblxuaW1wb3J0IHtcbiAgRGF0YSxcbiAgVmFsdWUsXG4gIFRhYlRleHQsXG59IGZyb20gJy4vaW50ZXJmYWNlcy50cyc7XG5cbmltcG9ydCBNb2RlbCBmcm9tICcuL21vZGVsLnRzJztcblxuaW1wb3J0IHtcbiAgdG9QcmVjZW50LFxuICB0b1ZhbHVlLFxufSBmcm9tICcuL2Z1bmN0aW9ucy50cyc7XG5cbmltcG9ydCB7XG4gIGRlZmF1bHREYXRhLFxuICBzZXREYXRhTGltaXQsXG59IGZyb20gJy4vZGF0YS50cyc7XG5cbmNsYXNzIFByZXNlbnRlciB7XG4gIHdyYXA6IEhUTUxFbGVtZW50O1xuXG4gIGRhdGE6IERhdGE7XG5cbiAgb3B0aW9uczogYW55O1xuXG4gIHZpZXc6IFZpZXc7XG5cbiAgbW9kZWw6IE1vZGVsO1xuXG4gIHZhbHVlOiBWYWx1ZTtcblxuICBjb25zdHJ1Y3RvcihvcHRpb25zLCB3cmFwKSB7XG4gICAgdGhpcy53cmFwID0gd3JhcDtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIHRoaXMuY3JlYXRlRGF0YSgpO1xuICAgIHRoaXMuaW5pdCgpO1xuICAgIHRoaXMub25Nb3ZlVG9nZ2xlKCk7XG4gICAgdGhpcy5vbkNoYW5nZVRhYlRleHQoKTtcbiAgICB0aGlzLm9uQ2FuZ2VJbnB1dCgpO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH0pO1xuICB9XG5cbiAgc2V0VmFsdWUoKSB7XG4gICAgdGhpcy52YWx1ZSA9IHtcbiAgICAgIG1pbjogdGhpcy5kYXRhLm1pblRvZ2dsZVZhbHVlLFxuICAgICAgbWF4OiB0aGlzLmRhdGEubWF4VG9nZ2xlVmFsdWUsXG4gICAgfTtcbiAgfVxuXG4gIGNyZWF0ZURhdGEoKSB7XG4gICAgY29uc3QgZGF0YUNsb25lID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShkZWZhdWx0RGF0YSkpO1xuICAgIHRoaXMuZGF0YSA9IE9iamVjdC5hc3NpZ24oZGF0YUNsb25lLCB0aGlzLm9wdGlvbnMpO1xuICAgIHRoaXMuZGF0YSA9IHNldERhdGFMaW1pdCh0aGlzLmRhdGEpO1xuICAgIHRoaXMuc2V0VmFsdWUoKTtcbiAgfVxuXG4gIGNoYW5nZURhdGEoKSB7XG4gICAgdGhpcy5kYXRhID0gT2JqZWN0LmFzc2lnbih0aGlzLmRhdGEsIHRoaXMub3B0aW9ucyk7XG4gICAgdGhpcy5kYXRhID0gc2V0RGF0YUxpbWl0KHRoaXMuZGF0YSk7XG4gICAgdGhpcy5zZXRWYWx1ZSgpO1xuICAgIHRoaXMuaW5pdCgpO1xuICAgIHRoaXMub25Nb3ZlVG9nZ2xlKCk7XG4gICAgdGhpcy5vbkNoYW5nZVRhYlRleHQoKTtcbiAgICB0aGlzLm9uQ2FuZ2VJbnB1dCgpO1xuICB9XG5cbiAgc2V0VGFiVGV4dCgpIHtcbiAgICB0aGlzLnZpZXcudGFiVGV4dC5taW4gPSB0aGlzLm1vZGVsLnRhYlRleHQubWluO1xuICAgIHRoaXMudmlldy50YWJUZXh0Lm1heCA9IHRoaXMubW9kZWwudGFiVGV4dC5tYXg7XG4gIH1cblxuICBpbml0U2NhbGUoKSB7XG4gICAgdGhpcy52aWV3LnNjYWxlID0gdGhpcy5tb2RlbC5zY2FsZTtcbiAgICB0aGlzLnZpZXcuY29udGFpbmVyLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdpbml0U2NhbGUnKSk7XG4gIH1cblxuICBzZXRUb1ZpZXcoKSB7XG4gICAgdGhpcy52aWV3LnByZWNlbnQubWluID0gdG9QcmVjZW50KHRoaXMudmFsdWUubWluLCB0aGlzLmRhdGEubWluVmFsdWUsIHRoaXMuZGF0YS5tYXhWYWx1ZSk7XG4gICAgdGhpcy52aWV3LnByZWNlbnQubWF4ID0gdG9QcmVjZW50KHRoaXMudmFsdWUubWF4LCB0aGlzLmRhdGEubWluVmFsdWUsIHRoaXMuZGF0YS5tYXhWYWx1ZSk7XG4gIH1cblxuICBzZXRUb01vZGVsKCkge1xuICAgIHRoaXMubW9kZWwudmFsdWUubWluID0gdG9WYWx1ZSh0aGlzLnZpZXcucHJlY2VudC5taW4sIHRoaXMuZGF0YS5taW5WYWx1ZSwgdGhpcy5kYXRhLm1heFZhbHVlKTtcbiAgICB0aGlzLm1vZGVsLnZhbHVlLm1heCA9IHRvVmFsdWUodGhpcy52aWV3LnByZWNlbnQubWF4LCB0aGlzLmRhdGEubWluVmFsdWUsIHRoaXMuZGF0YS5tYXhWYWx1ZSk7XG4gIH1cblxuICBpbml0KCkge1xuICAgIGNvbnN0IHZpZXdEYXRhID0gdGhpcy5kYXRhO1xuICAgIGNvbnN0IG1vZGVsRGF0YSA9IHRoaXMuZGF0YTtcbiAgICB0aGlzLnZpZXcgPSBuZXcgVmlldyh2aWV3RGF0YSwgdGhpcy53cmFwKTtcbiAgICB0aGlzLm1vZGVsID0gbmV3IE1vZGVsKG1vZGVsRGF0YSk7XG4gICAgdGhpcy5pbml0U2NhbGUoKTtcbiAgICB0aGlzLnNldFRvVmlldygpO1xuICAgIHRoaXMubW9kZWwucHJlY2VudCA9IHRoaXMudmlldy5wcmVjZW50O1xuICAgIHRoaXMubW9kZWwub2JzZXJ2ZXIuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3NldFByZWNlbnQnKSk7XG4gICAgdGhpcy5zZXRUYWJUZXh0KCk7XG4gICAgdGhpcy52aWV3LnNldFRhYigpO1xuICAgIHRoaXMudmlldy5jb250YWluZXIuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2luaXRWYWx1ZScpKTtcblxuICAgIHRoaXMudmlldy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlVmFsdWUnLCAoKSA9PiB7XG4gICAgICB0aGlzLm1vZGVsLm9ic2VydmVyLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdjaGFuZ2VWYWx1ZScpKTtcbiAgICB9KTtcbiAgfVxuXG4gIG9uTW92ZVRvZ2dsZSgpIHtcbiAgICBjb25zdCBvbkNoYW5nZVZpZXcgPSAoKSA9PiB7XG4gICAgICB0aGlzLnNldFRvTW9kZWwoKTtcbiAgICAgIHRoaXMubW9kZWwub2JzZXJ2ZXIuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2NoYW5nZVZhbHVlJykpO1xuICAgIH07XG4gICAgdGhpcy52aWV3LmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdtb3ZlVG9nZ2xlJywgb25DaGFuZ2VWaWV3KTtcbiAgfVxuXG4gIG9uQ2hhbmdlVGFiVGV4dCgpIHtcbiAgICB0aGlzLm1vZGVsLm9ic2VydmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZVRhYlRleHQnLCAoKSA9PiB7XG4gICAgICB0aGlzLnNldFRhYlRleHQoKTtcbiAgICAgIHRoaXMudmlldy5jb250YWluZXIuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2NoYW5nZVRhYicpKTtcbiAgICB9KTtcbiAgfVxuXG4gIG9uQ2FuZ2VJbnB1dCgpIHtcbiAgICB0aGlzLm1vZGVsLm9ic2VydmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZUlucHV0JywgKCkgPT4ge1xuICAgICAgdGhpcy52aWV3LnRhYlRleHQgPSB0aGlzLm1vZGVsLnRhYlRleHQ7XG4gICAgICBpZiAodGhpcy5kYXRhLmlzQXJyYXkpIHtcbiAgICAgICAgdGhpcy52aWV3LnByZWNlbnQubWluID0gdGhpcy5tb2RlbC52YWx1ZS5taW4gLyAodGhpcy5kYXRhLmFycmF5Lmxlbmd0aCAtIDEpO1xuICAgICAgICB0aGlzLnZpZXcucHJlY2VudC5tYXggPSB0aGlzLm1vZGVsLnZhbHVlLm1heCAvICh0aGlzLmRhdGEuYXJyYXkubGVuZ3RoIC0gMSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnZhbHVlLm1pbiA9ICt0aGlzLm1vZGVsLnZhbHVlLm1pbjtcbiAgICAgICAgdGhpcy52YWx1ZS5tYXggPSArdGhpcy5tb2RlbC52YWx1ZS5tYXg7XG4gICAgICAgIHRoaXMuc2V0VG9WaWV3KCk7XG4gICAgICAgIHRoaXMuc2V0VG9Nb2RlbCgpO1xuICAgICAgfVxuICAgICAgdGhpcy52aWV3LmNvbnRhaW5lci5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnY2hhbmdlSW5wdXQnKSk7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJlc2VudGVyO1xuIiwiY2xhc3MgU2NhbGUge1xuICBzbGlkZXI6IEhUTUxFbGVtZW50O1xuXG4gIHNjYWxlOiBzdHJpbmdbXTtcblxuICBpc1ZlcnRpY2FsOiBib29sZWFuO1xuXG5cbiAgY29uc3RydWN0b3Ioc2xpZGVyLCBzY2FsZSwgaXNWZXJ0aWNhbCkge1xuICAgIHRoaXMuc2xpZGVyID0gc2xpZGVyO1xuICAgIHRoaXMuc2NhbGUgPSBzY2FsZTtcbiAgICB0aGlzLmlzVmVydGljYWwgPSBpc1ZlcnRpY2FsO1xuICAgIHRoaXMuY3JlYXRlSXRlbSgpO1xuICB9XG5cbiAgY3JlYXRlSXRlbSgpIHtcbiAgICBjb25zdCBiYXI6IEhUTUxFbGVtZW50ID0gdGhpcy5zbGlkZXIucXVlcnlTZWxlY3RvcignLnRzLXNsaWRlcl9fYmFyJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNjYWxlLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBzY2FsZUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHNjYWxlSXRlbS5jbGFzc0xpc3QuYWRkKCd0cy1zbGlkZXJfX3NjYWxlLWl0ZW0nKTtcbiAgICAgIHNjYWxlSXRlbS50ZXh0Q29udGVudCA9IHRoaXMuc2NhbGVbaV07XG4gICAgICBpZiAodGhpcy5pc1ZlcnRpY2FsKSB7XG4gICAgICAgIHNjYWxlSXRlbS5jbGFzc0xpc3QuYWRkKCd0cy1zbGlkZXJfX3NjYWxlLWl0ZW0tLXZlcnRpY2FsJyk7XG4gICAgICAgIHNjYWxlSXRlbS5zdHlsZS50b3AgPSBgJHsoYmFyLm9mZnNldEhlaWdodCAvICh0aGlzLnNjYWxlLmxlbmd0aCAtIDEpKSAqIGl9cHhgO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2NhbGVJdGVtLnN0eWxlLmxlZnQgPSBgJHsoYmFyLm9mZnNldFdpZHRoIC8gKHRoaXMuc2NhbGUubGVuZ3RoIC0gMSkpICogaX1weGA7XG4gICAgICB9XG4gICAgICBiYXIuYXBwZW5kKHNjYWxlSXRlbSk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNjYWxlO1xuIiwiaW1wb3J0IHsgc2V0TGltaXQgfSBmcm9tICcuL2Z1bmN0aW9ucy50cyc7XG5cbmNvbnN0IHNldFRvZ2dsZVN0eWxlID0gKHRvZ2dsZUVsZW06IEhUTUxFbGVtZW50LCBwaXhlbDogbnVtYmVyLCBpc1ZlcnRpY2FsOiBib29sZWFuKSA9PiB7XG4gIGNvbnN0IHRvZ2dsZSA9IHRvZ2dsZUVsZW07XG4gIGlmIChpc1ZlcnRpY2FsKSB7XG4gICAgdG9nZ2xlLnN0eWxlLnRvcCA9IGAke3BpeGVsfXB4YDtcbiAgfSBlbHNlIHtcbiAgICB0b2dnbGUuc3R5bGUubGVmdCA9IGAke3BpeGVsfXB4YDtcbiAgfVxuICByZXR1cm4gdG9nZ2xlO1xufTtcblxuY2xhc3MgVG9nZ2xlIHtcbiAgdG9nZ2xlOiBIVE1MRWxlbWVudDtcblxuICBtaW46IG51bWJlcjtcblxuICBtYXg6IG51bWJlcjtcblxuICBtb3VzZVBpeGVsOiBudW1iZXI7XG5cbiAgcGl4ZWw6IG51bWJlcjtcblxuICBwcmVjZW50OiBudW1iZXI7XG5cbiAgc2l6ZTogbnVtYmVyO1xuXG4gIGlzVmVydGljYWw6IGJvb2xlYW47XG5cbiAgaXNGaXhlZDogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3Rvcih0b2dnbGUsIHByZWNlbnQsIHNpemUsIGlzVmVydGljYWwpIHtcbiAgICB0aGlzLnRvZ2dsZSA9IHRvZ2dsZTtcbiAgICB0aGlzLnNpemUgPSBzaXplO1xuICAgIHRoaXMucHJlY2VudCA9IHByZWNlbnQ7XG4gICAgdGhpcy5tb3VzZVBpeGVsID0gdGhpcy5wcmVjZW50ICogdGhpcy5zaXplO1xuICAgIHRoaXMucGl4ZWwgPSB0aGlzLm1vdXNlUGl4ZWw7XG4gICAgdGhpcy5pc1ZlcnRpY2FsID0gaXNWZXJ0aWNhbDtcbiAgICB0aGlzLmlzRml4ZWQgPSBmYWxzZTtcbiAgICB0aGlzLnNldFN0eWxlKCk7XG4gICAgdGhpcy5vbk1vdmVUb2dnbGUoKTtcbiAgfVxuXG4gIHNldFN0eWxlKCkge1xuICAgIHRoaXMudG9nZ2xlID0gc2V0VG9nZ2xlU3R5bGUodGhpcy50b2dnbGUsIHRoaXMucGl4ZWwsIHRoaXMuaXNWZXJ0aWNhbCk7XG4gIH1cblxuICBjaGFuZ2VUb2dnbGUoKSB7XG4gICAgdGhpcy5tb3VzZVBpeGVsID0gdGhpcy5wcmVjZW50ICogdGhpcy5zaXplO1xuICAgIHRoaXMucGl4ZWwgPSB0aGlzLm1vdXNlUGl4ZWw7XG4gICAgdGhpcy5zZXRTdHlsZSgpO1xuICB9XG5cbiAgb25Nb3ZlVG9nZ2xlKCkge1xuICAgIGNvbnN0IG9uTW91c2VEb3duID0gKGV2dCkgPT4ge1xuICAgICAgY29uc3Qgc2hpZnRYOiBudW1iZXIgPSBldnQucGFnZVggLSB0aGlzLnRvZ2dsZS5vZmZzZXRMZWZ0O1xuICAgICAgY29uc3Qgc2hpZnRZOiBudW1iZXIgPSBldnQucGFnZVkgLSB0aGlzLnRvZ2dsZS5vZmZzZXRUb3A7XG4gICAgICBjb25zdCBzdGFydFBpeGVsOiBudW1iZXIgPSB0aGlzLm1vdXNlUGl4ZWw7XG4gICAgICBjb25zdCBtb3ZlQXQgPSAocGFnZVgsIHBhZ2VZKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmlzVmVydGljYWwpIHtcbiAgICAgICAgICB0aGlzLm1vdXNlUGl4ZWwgPSBwYWdlWSAtIHNoaWZ0WTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLm1vdXNlUGl4ZWwgPSBwYWdlWCAtIHNoaWZ0WDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBpeGVsID0gdGhpcy5tb3VzZVBpeGVsO1xuICAgICAgICB0aGlzLnBpeGVsID0gc2V0TGltaXQodGhpcy5waXhlbCwgdGhpcy5taW4gKiB0aGlzLnNpemUsIHRoaXMubWF4ICogdGhpcy5zaXplKTtcbiAgICAgICAgaWYgKHRoaXMuaXNGaXhlZCkge1xuICAgICAgICAgIHRoaXMucGl4ZWwgPSBzdGFydFBpeGVsO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U3R5bGUoKTtcbiAgICAgICAgdGhpcy5wcmVjZW50ID0gdGhpcy5waXhlbCAvIHRoaXMuc2l6ZTtcbiAgICAgIH07XG4gICAgICBtb3ZlQXQoZXZ0LnBhZ2VYLCBldnQucGFnZVkpO1xuXG4gICAgICBjb25zdCBvbk1vdXNlTW92ZSA9IChtb3ZlRXZ0KSA9PiB7XG4gICAgICAgIG1vdmVFdnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbW92ZUF0KG1vdmVFdnQucGFnZVgsIG1vdmVFdnQucGFnZVkpO1xuICAgICAgfTtcbiAgICAgIGNvbnN0IG9uTW91c2VVcCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5tb3VzZVBpeGVsID0gdGhpcy5waXhlbDtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uTW91c2VVcCk7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKTtcbiAgICAgIH07XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSk7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25Nb3VzZVVwKTtcbiAgICB9O1xuICAgIHRoaXMudG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIG9uTW91c2VEb3duKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUb2dnbGU7XG4iLCJpbXBvcnQge1xuICBpbml0Vmlld01hcmt1cCxcbiAgbWFya3VwLFxufSBmcm9tICcuL2luaXQtdmlldy1tYXJrdXAudHMnO1xuXG5pbXBvcnQgU2NhbGUgZnJvbSAnLi9zY2FsZS50cyc7XG5cbmltcG9ydCB7XG4gIERhdGEsXG4gIFZhbHVlLFxuICBUYWJUZXh0LFxufSBmcm9tICcuL2ludGVyZmFjZXMudHMnO1xuXG5pbXBvcnQgVG9nZ2xlIGZyb20gJy4vdG9nZ2xlLnRzJztcblxuaW1wb3J0IHtcbiAgc2V0TW91c2VIYW5kbGVyLFxuICB0b1ByZWNlbnQsXG4gIHNldFJhbmdlU3R5bGUsXG59IGZyb20gJy4vZnVuY3Rpb25zLnRzJztcblxuY2xhc3MgVmlldyB7XG4gIHdyYXA6IEhUTUxFbGVtZW50O1xuXG4gIGRhdGE6IERhdGE7XG5cbiAgcHJlY2VudDogVmFsdWU7XG5cbiAgdGFiVGV4dDogVGFiVGV4dDtcblxuICBjb250YWluZXI6IEhUTUxFbGVtZW50O1xuXG4gIG1pblRvZ2dsZUVsZW06IEhUTUxFbGVtZW50O1xuXG4gIG1heFRvZ2dsZUVsZW06IEhUTUxFbGVtZW50O1xuXG4gIG1pblRvZ2dsZTogVG9nZ2xlO1xuXG4gIG1heFRvZ2dsZTogVG9nZ2xlO1xuXG4gIG1pblRhYkVsZW06IEhUTUxFbGVtZW50O1xuXG4gIG1heFRhYkVsZW06IEhUTUxFbGVtZW50O1xuXG4gIHJhbmdlRWxlbTogSFRNTEVsZW1lbnQ7XG5cbiAgc2l6ZTogbnVtYmVyO1xuXG4gIHNjYWxlOiBzdHJpbmdbXTtcblxuICBjb25zdHJ1Y3RvcihkYXRhLCB3cmFwKSB7XG4gICAgdGhpcy53cmFwID0gd3JhcDtcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIHRoaXMucHJlY2VudCA9IHtcbiAgICAgIG1pbjogMCxcbiAgICAgIG1heDogMCxcbiAgICB9O1xuICAgIHRoaXMudGFiVGV4dCA9IHtcbiAgICAgIG1pbjogJycsXG4gICAgICBtYXg6ICcnLFxuICAgIH07XG4gICAgdGhpcy5zY2FsZSA9IFtdO1xuICAgIHRoaXMuaW5pdFZpZXcoKTtcbiAgICB0aGlzLmNyZWF0ZVRvZ2dsZSgpO1xuICAgIHRoaXMub25Ub2dnbGVDb2luY2lkZW5jZSgpO1xuICAgIHRoaXMuYWRkU2NhbGUoKTtcbiAgICB0aGlzLmNoYW5nZVRhYigpO1xuICAgIHRoaXMuY2hhbmdlSW5wdXQoKTtcbiAgfVxuXG4gIGluaXRWaWV3KCkge1xuICAgIGluaXRWaWV3TWFya3VwKHRoaXMud3JhcCwgdGhpcy5kYXRhLmlzVmVydGljYWwpO1xuICAgIHRoaXMuY29udGFpbmVyID0gdGhpcy53cmFwLnF1ZXJ5U2VsZWN0b3IoJy50cy1zbGlkZXJfX2NvbnRhaW5lcicpO1xuICAgIGlmICh0aGlzLmRhdGEuaXNWZXJ0aWNhbCkge1xuICAgICAgdGhpcy5zaXplID0gdGhpcy5jb250YWluZXIub2Zmc2V0SGVpZ2h0O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNpemUgPSB0aGlzLmNvbnRhaW5lci5vZmZzZXRXaWR0aDtcbiAgICB9XG4gICAgdGhpcy5taW5Ub2dnbGVFbGVtID0gbWFya3VwKHRoaXMuY29udGFpbmVyKS5taW47XG4gICAgdGhpcy5tYXhUb2dnbGVFbGVtID0gbWFya3VwKHRoaXMuY29udGFpbmVyKS5tYXg7XG4gICAgdGhpcy5taW5UYWJFbGVtID0gbWFya3VwKHRoaXMuY29udGFpbmVyKS5taW5UYWI7XG4gICAgdGhpcy5tYXhUYWJFbGVtID0gbWFya3VwKHRoaXMuY29udGFpbmVyKS5tYXhUYWI7XG4gICAgdGhpcy5yYW5nZUVsZW0gPSBtYXJrdXAodGhpcy5jb250YWluZXIpLnJhbmdlO1xuXG4gICAgaWYgKCF0aGlzLmRhdGEuaXNSYW5nZSkge1xuICAgICAgdGhpcy5taW5Ub2dnbGVFbGVtLmhpZGRlbiA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmRhdGEuaXNUYWIpIHtcbiAgICAgIHRoaXMubWluVGFiRWxlbS5oaWRkZW4gPSB0cnVlO1xuICAgICAgdGhpcy5tYXhUYWJFbGVtLmhpZGRlbiA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgc2V0VGFiKCkge1xuICAgIHRoaXMubWluVGFiRWxlbS50ZXh0Q29udGVudCA9IHRoaXMudGFiVGV4dC5taW47XG4gICAgdGhpcy5tYXhUYWJFbGVtLnRleHRDb250ZW50ID0gdGhpcy50YWJUZXh0Lm1heDtcbiAgfVxuXG4gIHNldFJhbmdlKCkge1xuICAgIHNldFJhbmdlU3R5bGUoXG4gICAgICB0aGlzLnJhbmdlRWxlbSxcbiAgICAgIHRoaXMubWluVG9nZ2xlLnByZWNlbnQgKiB0aGlzLnNpemUsXG4gICAgICB0aGlzLm1heFRvZ2dsZS5wcmVjZW50ICogdGhpcy5zaXplLFxuICAgICAgdGhpcy5kYXRhLmlzVmVydGljYWwsXG4gICAgKTtcbiAgfVxuXG4gIGNyZWF0ZVRvZ2dsZSgpIHtcbiAgICBjb25zdCBtaW5Ub2dnbGVQcmVjZW50ID0gdG9QcmVjZW50KFxuICAgICAgdGhpcy5kYXRhLm1pblRvZ2dsZVZhbHVlLFxuICAgICAgdGhpcy5kYXRhLm1pblZhbHVlLFxuICAgICAgdGhpcy5kYXRhLm1heFZhbHVlLFxuICAgICk7XG4gICAgY29uc3QgbWF4VG9nZ2xlUHJlY2VudCA9IHRvUHJlY2VudChcbiAgICAgIHRoaXMuZGF0YS5tYXhUb2dnbGVWYWx1ZSxcbiAgICAgIHRoaXMuZGF0YS5taW5WYWx1ZSxcbiAgICAgIHRoaXMuZGF0YS5tYXhWYWx1ZSxcbiAgICApO1xuICAgIHRoaXMubWluVG9nZ2xlID0gbmV3IFRvZ2dsZShcbiAgICAgIHRoaXMubWluVG9nZ2xlRWxlbSxcbiAgICAgIG1pblRvZ2dsZVByZWNlbnQsXG4gICAgICB0aGlzLnNpemUsXG4gICAgICB0aGlzLmRhdGEuaXNWZXJ0aWNhbCxcbiAgICApO1xuICAgIHRoaXMubWF4VG9nZ2xlID0gbmV3IFRvZ2dsZShcbiAgICAgIHRoaXMubWF4VG9nZ2xlRWxlbSxcbiAgICAgIG1heFRvZ2dsZVByZWNlbnQsXG4gICAgICB0aGlzLnNpemUsXG4gICAgICB0aGlzLmRhdGEuaXNWZXJ0aWNhbCxcbiAgICApO1xuICAgIHRoaXMubWluVG9nZ2xlLm1pbiA9IDA7XG4gICAgdGhpcy5tYXhUb2dnbGUubWF4ID0gMTtcbiAgICBpZiAoIXRoaXMuZGF0YS5pc1JhbmdlKSB7XG4gICAgICB0aGlzLm1pblRvZ2dsZS5wcmVjZW50ID0gMDtcbiAgICB9XG4gICAgdGhpcy5zZXRSYW5nZSgpO1xuXG4gICAgY29uc3Qgb25Nb3VzZU1vdmUgPSAoKSA9PiB7XG4gICAgICB0aGlzLm1pblRvZ2dsZS5tYXggPSB0aGlzLm1heFRvZ2dsZS5wcmVjZW50O1xuICAgICAgdGhpcy5tYXhUb2dnbGUubWluID0gdGhpcy5taW5Ub2dnbGUucHJlY2VudDtcbiAgICAgIHNldFJhbmdlU3R5bGUoXG4gICAgICAgIHRoaXMucmFuZ2VFbGVtLFxuICAgICAgICB0aGlzLm1pblRvZ2dsZS5wcmVjZW50ICogdGhpcy5zaXplLFxuICAgICAgICB0aGlzLm1heFRvZ2dsZS5wcmVjZW50ICogdGhpcy5zaXplLFxuICAgICAgICB0aGlzLmRhdGEuaXNWZXJ0aWNhbCxcbiAgICAgICk7XG4gICAgICB0aGlzLnByZWNlbnQubWluID0gdGhpcy5taW5Ub2dnbGUucHJlY2VudDtcbiAgICAgIHRoaXMucHJlY2VudC5tYXggPSB0aGlzLm1heFRvZ2dsZS5wcmVjZW50O1xuICAgICAgdGhpcy5zZXRUYWIoKTtcbiAgICAgIHRoaXMuY29udGFpbmVyLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdtb3ZlVG9nZ2xlJykpO1xuICAgIH07XG4gICAgc2V0TW91c2VIYW5kbGVyKGRvY3VtZW50LCBvbk1vdXNlTW92ZSk7XG4gICAgdGhpcy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKGV2dCkgPT4ge1xuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSk7XG4gIH1cblxuICBvblRvZ2dsZUNvaW5jaWRlbmNlKCkge1xuICAgIGNvbnN0IG9uTW91c2VEb3duQ29pbmNpZGVuY2UgPSAoZXZ0KSA9PiB7XG4gICAgICBsZXQgY29pbmNpZGVuY2VUb2dnbGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICAgIHRoaXMubWF4VG9nZ2xlRWxlbS5oaWRkZW4gPSB0cnVlO1xuICAgICAgY29pbmNpZGVuY2VUb2dnbGUgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KGV2dC5jbGllbnRYLCBldnQuY2xpZW50WSkuY2xhc3NMaXN0LmNvbnRhaW5zKCd0cy1zbGlkZXJfX3RvZ2dsZS0tbWluJyk7XG4gICAgICB0aGlzLm1heFRvZ2dsZUVsZW0uaGlkZGVuID0gZmFsc2U7XG4gICAgICBsZXQgc3RhcnRQaXhlbDogbnVtYmVyO1xuICAgICAgc3RhcnRQaXhlbCA9IHRoaXMubWF4VG9nZ2xlLnBpeGVsO1xuXG4gICAgICBjb25zdCBvbk1vdXNlTW92ZSA9ICgpID0+IHtcbiAgICAgICAgaWYgKGNvaW5jaWRlbmNlVG9nZ2xlKSB7XG4gICAgICAgICAgdGhpcy5taW5Ub2dnbGUubW91c2VQaXhlbCA9IHRoaXMubWF4VG9nZ2xlLm1vdXNlUGl4ZWw7XG4gICAgICAgICAgdGhpcy5tYXhUb2dnbGUuaXNGaXhlZCA9IHRydWU7XG4gICAgICAgICAgdGhpcy5taW5Ub2dnbGUuaXNGaXhlZCA9IHRydWU7XG4gICAgICAgICAgaWYgKHRoaXMubWF4VG9nZ2xlLm1vdXNlUGl4ZWwgPiBzdGFydFBpeGVsKSB7XG4gICAgICAgICAgICB0aGlzLm1heFRvZ2dsZS5pc0ZpeGVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLm1pblRvZ2dsZS5pc0ZpeGVkID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5tYXhUb2dnbGUuaXNGaXhlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLm1pblRvZ2dsZS5pc0ZpeGVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLm1pblRvZ2dsZS5tb3VzZVBpeGVsID0gdGhpcy5tYXhUb2dnbGUubW91c2VQaXhlbDtcbiAgICAgICAgICAgIHRoaXMubWluVG9nZ2xlLnBpeGVsID0gdGhpcy5tYXhUb2dnbGUubW91c2VQaXhlbDtcbiAgICAgICAgICAgIGlmICh0aGlzLm1pblRvZ2dsZS5waXhlbCA8IDApIHtcbiAgICAgICAgICAgICAgdGhpcy5taW5Ub2dnbGUucGl4ZWwgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5taW5Ub2dnbGUuc2V0U3R5bGUoKTtcbiAgICAgICAgICAgIHRoaXMubWluVG9nZ2xlLnByZWNlbnQgPSB0aGlzLm1pblRvZ2dsZS5waXhlbCAvIHRoaXMuc2l6ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5tYXhUb2dnbGUuaXNGaXhlZCA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMubWluVG9nZ2xlLmlzRml4ZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGNvbnN0IG9uTW91c2VVcCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5taW5Ub2dnbGUubW91c2VQaXhlbCA9IHRoaXMubWluVG9nZ2xlLnBpeGVsO1xuICAgICAgICB0aGlzLm1heFRvZ2dsZS5pc0ZpeGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMubWluVG9nZ2xlLmlzRml4ZWQgPSBmYWxzZTtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uTW91c2VVcCk7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKTtcbiAgICAgIH07XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSk7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25Nb3VzZVVwKTtcbiAgICB9O1xuXG4gICAgdGhpcy5tYXhUb2dnbGVFbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIG9uTW91c2VEb3duQ29pbmNpZGVuY2UpO1xuICB9XG5cbiAgYWRkU2NhbGUoKSB7XG4gICAgdGhpcy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignaW5pdFNjYWxlJywgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuZGF0YS5pc1NjYWxlKSB7XG4gICAgICAgIGNvbnN0IHNjYWxlID0gbmV3IFNjYWxlKHRoaXMuY29udGFpbmVyLCB0aGlzLnNjYWxlLCB0aGlzLmRhdGEuaXNWZXJ0aWNhbCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBjaGFuZ2VUYWIoKSB7XG4gICAgdGhpcy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlVGFiJywgKCkgPT4ge1xuICAgICAgdGhpcy5zZXRUYWIoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNoYW5nZUlucHV0KCkge1xuICAgIHRoaXMuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZUlucHV0JywgKCkgPT4ge1xuICAgICAgdGhpcy5taW5Ub2dnbGUucHJlY2VudCA9IHRoaXMucHJlY2VudC5taW47XG4gICAgICB0aGlzLm1heFRvZ2dsZS5wcmVjZW50ID0gdGhpcy5wcmVjZW50Lm1heDtcbiAgICAgIHRoaXMubWluVG9nZ2xlLmNoYW5nZVRvZ2dsZSgpO1xuICAgICAgdGhpcy5tYXhUb2dnbGUuY2hhbmdlVG9nZ2xlKCk7XG4gICAgICB0aGlzLnNldFRhYigpO1xuICAgICAgdGhpcy5zZXRSYW5nZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVtb3ZlTWFya3VwKCkge1xuICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZSgpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZpZXc7XG4iXSwic291cmNlUm9vdCI6IiJ9