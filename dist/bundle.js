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
/*! exports provided: sliderData1, sliderData2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sliderData1", function() { return sliderData1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sliderData2", function() { return sliderData2; });
/* harmony import */ var _functions_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions.ts */ "./src/functions.ts");

const sliderData1 = {
    wrapId: '#ts-slider__wrap-1',
    minInputId: 'page__input-11',
    maxInputId: 'page__input-12',
    isArray: false,
    array: [],
    step: 10,
    minValue: 7,
    maxValue: 105,
    minToggleValue: 39.67,
    maxToggleValue: 72.33,
    isRange: true,
    isVertical: false,
    isTab: true,
    isScale: true,
    scaleQuantity: 4
};
const sliderData2 = {
    wrapId: '#ts-slider__wrap-2',
    minInputId: 'page__input-21',
    maxInputId: 'page__input-22',
    isArray: true,
    array: ['мало', 'немного', 'средне', 'больше', 'много'],
    step: 1,
    minValue: 0,
    maxValue: 4,
    minToggleValue: 2,
    maxToggleValue: 3,
    isRange: true,
    isVertical: true,
    isTab: true,
    isScale: true,
    scaleQuantity: 5
};
const setDataLimit = (data) => {
    data.minToggleValue = Object(_functions_ts__WEBPACK_IMPORTED_MODULE_0__["setLimit"])(data.minToggleValue, data.minValue, data.maxValue);
    data.maxToggleValue = Object(_functions_ts__WEBPACK_IMPORTED_MODULE_0__["setLimit"])(data.maxToggleValue, data.minValue, data.maxValue);
};
setDataLimit(sliderData1);
setDataLimit(sliderData2);



/***/ }),

/***/ "./src/functions.ts":
/*!**************************!*\
  !*** ./src/functions.ts ***!
  \**************************/
/*! exports provided: setMouseHandler, round, setLimit, setRangeStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMouseHandler", function() { return setMouseHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "round", function() { return round; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLimit", function() { return setLimit; });
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
/* harmony import */ var _data_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.ts */ "./src/data.ts");


const presenter1 = new _presenter_ts__WEBPACK_IMPORTED_MODULE_0__["Presenter"](_data_ts__WEBPACK_IMPORTED_MODULE_1__["sliderData1"]);
const presenter2 = new _presenter_ts__WEBPACK_IMPORTED_MODULE_0__["Presenter"](_data_ts__WEBPACK_IMPORTED_MODULE_1__["sliderData2"]);
// console.log(presenter1);


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
    const controlWrap = document.querySelector(wrap);
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
        // console.log('set');
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
            this.value.min = +this.minInput.value;
            this.value.max = +this.maxInput.value;
            this.tabText.min = Object(_functions_ts__WEBPACK_IMPORTED_MODULE_0__["round"])(this.minInput.value, this.data.step);
            this.tabText.max = Object(_functions_ts__WEBPACK_IMPORTED_MODULE_0__["round"])(this.maxInput.value, this.data.step);
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
/*! exports provided: toView, toModel, Presenter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toView", function() { return toView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toModel", function() { return toModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Presenter", function() { return Presenter; });
/* harmony import */ var _view_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view.ts */ "./src/view.ts");
/* harmony import */ var _model_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model.ts */ "./src/model.ts");
/* harmony import */ var _functions_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions.ts */ "./src/functions.ts");
/* harmony import */ var _init_view_markup_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./init-view-markup.ts */ "./src/init-view-markup.ts");




const toView = (value, min, max) => (value - min) / (max - min);
const toModel = (value, min, max) => (min + (max - min) * value);
class Presenter {
    constructor(data) {
        this.data = data;
        this.value = {
            min: this.data.minToggleValue,
            max: this.data.maxToggleValue
        };
        this.init();
        this.onMoveToggle();
        this.onChangeTabText();
        this.onCangeInput();
    }
    setTabText() {
        this.view.viewTabText.min = this.model.tabText.min;
        this.view.viewTabText.max = this.model.tabText.max;
    }
    initScale() {
        this.view.scale = this.model.scale;
        this.view.container.dispatchEvent(new CustomEvent('initScale'));
    }
    setToView() {
        this.view.viewValue.min = toView(this.value.min, this.data.minValue, this.data.maxValue);
        this.view.viewValue.max = toView(this.value.max, this.data.minValue, this.data.maxValue);
    }
    setToModel() {
        this.model.value.min = toModel(this.view.viewValue.min, this.data.minValue, this.data.maxValue);
        this.model.value.max = toModel(this.view.viewValue.max, this.data.minValue, this.data.maxValue);
    }
    init() {
        this.view = new _view_ts__WEBPACK_IMPORTED_MODULE_0__["View"](this.data);
        this.model = new _model_ts__WEBPACK_IMPORTED_MODULE_1__["Model"](this.data);
        this.initScale();
        this.setToView();
        this.model.precent = this.view.viewValue;
        this.model.observer.dispatchEvent(new CustomEvent('setPrecent'));
        this.setTabText();
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
            this.view.viewTabText = this.model.tabText;
            this.value.min = +this.model.value.min;
            this.value.max = +this.model.value.max;
            this.setToView();
            this.view.container.dispatchEvent(new CustomEvent('initValue'));
            const range = Object(_init_view_markup_ts__WEBPACK_IMPORTED_MODULE_3__["markup"])(this.view.container).range;
            Object(_functions_ts__WEBPACK_IMPORTED_MODULE_2__["setRangeStyle"])(range, this.view.viewValue.min * this.view.size, this.view.viewValue.max * this.view.size, this.data.isVertical);
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

/***/ "./src/set-view-value.ts":
/*!*******************************!*\
  !*** ./src/set-view-value.ts ***!
  \*******************************/
/*! exports provided: setViewValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setViewValue", function() { return setViewValue; });
/* harmony import */ var _toggle_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toggle.ts */ "./src/toggle.ts");
/* harmony import */ var _functions_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions.ts */ "./src/functions.ts");
/* harmony import */ var _init_view_markup_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./init-view-markup.ts */ "./src/init-view-markup.ts");



function setViewValue(slider, data) {
    let isVertical = data.isVertical;
    let isRange = data.isRange;
    let isTab = data.isTab;
    let precent = {
        min: 0,
        max: 0
    };
    window.addEventListener('load', () => {
        const minToggleElem = Object(_init_view_markup_ts__WEBPACK_IMPORTED_MODULE_2__["markup"])(slider).min;
        const maxToggleElem = Object(_init_view_markup_ts__WEBPACK_IMPORTED_MODULE_2__["markup"])(slider).max;
        const range = Object(_init_view_markup_ts__WEBPACK_IMPORTED_MODULE_2__["markup"])(slider).range;
        const barElem = Object(_init_view_markup_ts__WEBPACK_IMPORTED_MODULE_2__["markup"])(slider).bar;
        const barWidth = barElem.offsetWidth;
        const barHeight = barElem.offsetHeight;
        let barMax;
        let toggleMaxOffset;
        let toggleMinOffset;
        const setPrecent = (value) => value / barMax;
        if (!isRange) {
            minToggleElem.hidden = true;
        }
        if (isVertical) {
            barMax = barHeight;
            toggleMaxOffset = maxToggleElem.offsetTop;
            toggleMinOffset = minToggleElem.offsetTop;
        }
        else {
            barMax = barWidth;
            toggleMaxOffset = maxToggleElem.offsetLeft;
            toggleMinOffset = minToggleElem.offsetLeft;
        }
        let toggleMax = new _toggle_ts__WEBPACK_IMPORTED_MODULE_0__["Toggle"](maxToggleElem, toggleMinOffset, barMax, toggleMaxOffset, isVertical);
        let toggleMin = new _toggle_ts__WEBPACK_IMPORTED_MODULE_0__["Toggle"](minToggleElem, 0, toggleMaxOffset, toggleMinOffset, isVertical);
        toggleMax.moveToggle();
        toggleMin.moveToggle();
        precent.min = setPrecent(toggleMin.value);
        precent.max = setPrecent(toggleMax.value);
        if (!isRange) {
            toggleMin.value = 0;
        }
        const setRange = () => {
            toggleMax.min = toggleMin.value;
            toggleMin.max = toggleMax.value;
            Object(_functions_ts__WEBPACK_IMPORTED_MODULE_1__["setRangeStyle"])(range, toggleMin.value, toggleMax.value, isVertical);
        };
        setRange();
        const onMouseDownCoincidence = (evt) => {
            let coincidenceToggle = false;
            maxToggleElem.hidden = true;
            coincidenceToggle = document.elementFromPoint(evt.pageX, evt.pageY).classList.contains('ts-slider__toggle--min');
            maxToggleElem.hidden = false;
            let startValue;
            startValue = toggleMax.value;
            const onMouseMove = (moveEvt) => {
                if (coincidenceToggle) {
                    toggleMin.mouseValue = toggleMax.mouseValue;
                    toggleMax.isFixed = true;
                    toggleMin.isFixed = true;
                    if (toggleMax.mouseValue > startValue) {
                        toggleMax.isFixed = false;
                        toggleMin.isFixed = true;
                    }
                    else {
                        toggleMax.isFixed = true;
                        toggleMin.isFixed = false;
                        toggleMin.mouseValue = toggleMax.mouseValue;
                        toggleMin.value = toggleMax.mouseValue;
                        if (toggleMin.value < 0) {
                            toggleMin.value = 0;
                        }
                        toggleMin.setStyle();
                    }
                }
                else {
                    toggleMax.isFixed = false;
                    toggleMin.isFixed = false;
                }
            };
            const onMouseUp = (upEvt) => {
                upEvt.preventDefault();
                toggleMin.mouseValue = toggleMin.value;
                toggleMax.isFixed = false;
                toggleMin.isFixed = false;
                document.removeEventListener('mouseup', onMouseUp);
                document.removeEventListener('mousemove', onMouseMove);
            };
            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);
        };
        maxToggleElem.addEventListener('mousedown', onMouseDownCoincidence);
        const onMouseMovePrecent = (moveEvt) => {
            setRange();
            precent.min = setPrecent(toggleMin.value);
            precent.max = setPrecent(toggleMax.value);
        };
        Object(_functions_ts__WEBPACK_IMPORTED_MODULE_1__["setMouseHandler"])(maxToggleElem, onMouseMovePrecent);
        Object(_functions_ts__WEBPACK_IMPORTED_MODULE_1__["setMouseHandler"])(minToggleElem, onMouseMovePrecent);
    });
    return precent;
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

const setToggleStyle = (toggle, value, vertical) => {
    if (vertical) {
        toggle.style.top = `${value}px`;
    }
    else {
        toggle.style.left = `${value}px`;
    }
};
class Toggle {
    constructor(toggle, min, max, value, vertical) {
        this.toggle = toggle;
        this.min = min;
        this.max = max;
        this.mouseValue = value;
        this.value = value;
        this.vertical = vertical;
        this.isFixed = false;
        this.setStyle();
    }
    setStyle() {
        setToggleStyle(this.toggle, this.value, this.vertical);
    }
    moveToggle() {
        const onMouseDown = (evt) => {
            evt.preventDefault();
            let shiftX = evt.clientX - this.toggle.offsetLeft;
            let shiftY = evt.clientY - this.toggle.offsetTop;
            let startValue = this.mouseValue;
            const moveAt = (pageX, pageY) => {
                if (this.vertical) {
                    this.mouseValue = pageY - shiftY;
                }
                else {
                    this.mouseValue = pageX - shiftX;
                }
                this.value = this.mouseValue;
                this.value = Object(_functions_ts__WEBPACK_IMPORTED_MODULE_0__["setLimit"])(this.value, this.min, this.max);
                if (this.isFixed) {
                    this.value = startValue;
                }
                this.setStyle();
            };
            moveAt(evt.pageX, evt.pageY);
            const onMouseMove = (moveEvt) => {
                moveAt(moveEvt.pageX, moveEvt.pageY);
            };
            const onMouseUp = (upEvt) => {
                upEvt.preventDefault();
                this.mouseValue = this.value;
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
/* harmony import */ var _set_view_value_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./set-view-value.ts */ "./src/set-view-value.ts");
/* harmony import */ var _toggle_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toggle.ts */ "./src/toggle.ts");
/* harmony import */ var _functions_ts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./functions.ts */ "./src/functions.ts");






class View {
    constructor(data) {
        this.data = data;
        this.viewTabText = {
            min: '',
            max: ''
        };
        this.scale = [];
        this.initView();
        this.setToggle();
        this.onMoveToggle();
        this.addScale();
        this.changeTab();
    }
    initView() {
        Object(_init_view_markup_ts__WEBPACK_IMPORTED_MODULE_0__["initViewMarkup"])(this.data.wrapId, this.data.isVertical);
        this.container = document.querySelector(this.data.wrapId).querySelector('.ts-slider__container');
        if (this.data.isVertical) {
            this.size = this.container.offsetHeight;
        }
        else {
            this.size = this.container.offsetWidth;
        }
    }
    setTab() {
        this.minTabElem.textContent = this.viewTabText.min;
        this.maxTabElem.textContent = this.viewTabText.max;
    }
    setToggle() {
        this.minToggleElem = Object(_init_view_markup_ts__WEBPACK_IMPORTED_MODULE_0__["markup"])(this.container).min;
        this.maxToggleElem = Object(_init_view_markup_ts__WEBPACK_IMPORTED_MODULE_0__["markup"])(this.container).max;
        this.minTabElem = Object(_init_view_markup_ts__WEBPACK_IMPORTED_MODULE_0__["markup"])(this.container).minTab;
        this.maxTabElem = Object(_init_view_markup_ts__WEBPACK_IMPORTED_MODULE_0__["markup"])(this.container).maxTab;
        this.container.addEventListener('initValue', () => {
            Object(_toggle_ts__WEBPACK_IMPORTED_MODULE_3__["setToggleStyle"])(this.minToggleElem, this.viewValue.min * this.size, this.data.isVertical);
            Object(_toggle_ts__WEBPACK_IMPORTED_MODULE_3__["setToggleStyle"])(this.maxToggleElem, this.viewValue.max * this.size, this.data.isVertical);
            this.setTab();
        });
    }
    onMoveToggle() {
        this.viewValue = Object(_set_view_value_ts__WEBPACK_IMPORTED_MODULE_2__["setViewValue"])(this.container, this.data);
        const onMouseMove = (moveEvt) => {
            this.container.dispatchEvent(new CustomEvent('moveToggle'));
        };
        Object(_functions_ts__WEBPACK_IMPORTED_MODULE_4__["setMouseHandler"])(this.container, onMouseMove);
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
}



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Z1bmN0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luaXQtdmlldy1tYXJrdXAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9wcmVzZW50ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjYWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXQtdmlldy12YWx1ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdG9nZ2xlLnRzIiwid2VicGFjazovLy8uL3NyYy92aWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFB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QUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUN0QixNQUFNLEtBQUssR0FBRyxJQUFJLCtDQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7YUFDMUU7UUFDRixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRCxTQUFTO1FBQ1IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsR0FBRyxFQUFFO1lBQ2pELElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNmLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztDQUNEO0FBRTZCIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiaW1wb3J0IHtzZXRMaW1pdH0gZnJvbSAnLi9mdW5jdGlvbnMudHMnO1xyXG5cclxuaW50ZXJmYWNlIERhdGEge1xyXG5cdHdyYXBJZDogc3RyaW5nO1xyXG5cdG1pbklucHV0SWQ6IHN0cmluZztcclxuXHRtYXhJbnB1dElkOiBzdHJpbmc7XHJcblx0aXNBcnJheTogYm9vbGVhbjtcclxuXHRhcnJheTogc3RyaW5nW107XHJcblx0c3RlcDogbnVtYmVyO1xyXG5cdG1pblZhbHVlOiBudW1iZXI7XHJcblx0bWF4VmFsdWU6IG51bWJlcjtcclxuXHRtaW5Ub2dnbGVWYWx1ZTogbnVtYmVyO1xyXG5cdG1heFRvZ2dsZVZhbHVlOiBudW1iZXI7XHJcblx0aXNSYW5nZTogYm9vbGVhbjtcclxuXHRpc1ZlcnRpY2FsOiBib29sZWFuO1xyXG5cdGlzVGFiOiBib29sZWFuO1xyXG5cdGlzU2NhbGU6IGJvb2xlYW47XHJcblx0c2NhbGVRdWFudGl0eTogbnVtYmVyO1xyXG59XHJcblxyXG5jb25zdCBzbGlkZXJEYXRhMTogRGF0YSA9IHtcclxuXHR3cmFwSWQ6ICcjdHMtc2xpZGVyX193cmFwLTEnLFxyXG5cdG1pbklucHV0SWQ6ICdwYWdlX19pbnB1dC0xMScsXHJcblx0bWF4SW5wdXRJZDogJ3BhZ2VfX2lucHV0LTEyJyxcclxuXHRpc0FycmF5OiBmYWxzZSxcclxuXHRhcnJheTogW10sXHJcblx0c3RlcDogMTAsXHJcblx0bWluVmFsdWU6IDcsXHJcblx0bWF4VmFsdWU6IDEwNSxcclxuXHRtaW5Ub2dnbGVWYWx1ZTogMzkuNjcsXHJcblx0bWF4VG9nZ2xlVmFsdWU6IDcyLjMzLFxyXG5cdGlzUmFuZ2U6IHRydWUsXHJcblx0aXNWZXJ0aWNhbDogZmFsc2UsXHJcblx0aXNUYWI6IHRydWUsXHJcblx0aXNTY2FsZTogdHJ1ZSxcclxuXHRzY2FsZVF1YW50aXR5OiA0XHJcbn1cclxuY29uc3Qgc2xpZGVyRGF0YTI6IERhdGEgPSB7XHJcblx0d3JhcElkOiAnI3RzLXNsaWRlcl9fd3JhcC0yJyxcclxuXHRtaW5JbnB1dElkOiAncGFnZV9faW5wdXQtMjEnLFxyXG5cdG1heElucHV0SWQ6ICdwYWdlX19pbnB1dC0yMicsXHJcblx0aXNBcnJheTogdHJ1ZSxcclxuXHRhcnJheTogWyfQvNCw0LvQvicsICfQvdC10LzQvdC+0LPQvicsICfRgdGA0LXQtNC90LUnLCAn0LHQvtC70YzRiNC1JywgJ9C80L3QvtCz0L4nXSxcclxuXHRzdGVwOiAxLFxyXG5cdG1pblZhbHVlOiAwLFxyXG5cdG1heFZhbHVlOiA0LFxyXG5cdG1pblRvZ2dsZVZhbHVlOiAyLFxyXG5cdG1heFRvZ2dsZVZhbHVlOiAzLFxyXG5cdGlzUmFuZ2U6IHRydWUsXHJcblx0aXNWZXJ0aWNhbDogdHJ1ZSxcclxuXHRpc1RhYjogdHJ1ZSxcclxuXHRpc1NjYWxlOiB0cnVlLFxyXG5cdHNjYWxlUXVhbnRpdHk6IDVcclxufVxyXG5cclxuY29uc3Qgc2V0RGF0YUxpbWl0ID0gKGRhdGE6IERhdGEpID0+IHtcclxuXHRkYXRhLm1pblRvZ2dsZVZhbHVlID0gc2V0TGltaXQoZGF0YS5taW5Ub2dnbGVWYWx1ZSwgZGF0YS5taW5WYWx1ZSwgZGF0YS5tYXhWYWx1ZSk7XHJcblx0ZGF0YS5tYXhUb2dnbGVWYWx1ZSA9IHNldExpbWl0KGRhdGEubWF4VG9nZ2xlVmFsdWUsIGRhdGEubWluVmFsdWUsIGRhdGEubWF4VmFsdWUpO1xyXG59XHJcblxyXG5zZXREYXRhTGltaXQoc2xpZGVyRGF0YTEpO1xyXG5zZXREYXRhTGltaXQoc2xpZGVyRGF0YTIpO1xyXG5cclxuZXhwb3J0IHtEYXRhLCBzbGlkZXJEYXRhMSwgc2xpZGVyRGF0YTJ9OyIsImNvbnN0IHNldE1vdXNlSGFuZGxlciA9IChlbGVtLCBvbk1vdmUsIG9uRG92bj8sIG9uVXA/KSA9PiB7XHJcblxyXG5cdGNvbnN0IG9uTW91c2VEb3duID0gKGV2dCkgPT4ge1xyXG5cdFx0aWYgKG9uRG92bikge1xyXG5cdFx0XHRvbkRvdm4oZXZ0KTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0Y29uc3Qgb25Nb3VzZU1vdmUgPSAobW92ZUV2dCkgPT4ge1xyXG5cdFx0XHRvbk1vdmUobW92ZUV2dCk7XHJcblx0XHR9XHJcblx0XHRjb25zdCBvbk1vdXNlVXAgPSAodXBFdnQpID0+IHtcclxuXHRcdFx0aWYgKG9uVXApIHtcclxuXHRcdFx0XHRvblVwKHVwRXZ0KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25Nb3VzZVVwKTtcclxuXHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUpO1xyXG5cdFx0fVxyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUpO1xyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uTW91c2VVcCk7XHJcblx0fVxyXG5cclxuXHRlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIG9uTW91c2VEb3duKTtcclxuXHJcbn1cclxuXHJcbmNvbnN0IHJvdW5kID0gKHZhbHVlOiBudW1iZXIsIHN0ZXA6IG51bWJlcikgPT4ge1xyXG5cdGNvbnN0IHByZWNpc2lvbiA9IHggPT4gKyggKHgudG9TdHJpbmcoKS5pbmNsdWRlcygnLicpKSA/ICh4LnRvU3RyaW5nKCkuc3BsaXQoJy4nKS5wb3AoKS5sZW5ndGgpIDogKDApICk7XHJcblx0bGV0IHJvdW5kZWQ6IHN0cmluZyA9IChNYXRoLnJvdW5kKHZhbHVlIC8gc3RlcCkgKiBzdGVwKS50b0ZpeGVkKHByZWNpc2lvbihzdGVwKSk7XHJcblx0cmV0dXJuIHJvdW5kZWQ7XHJcbn1cclxuXHJcbmNvbnN0IHNldExpbWl0ID0gKHZhbHVlOiBudW1iZXIsIG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcikgPT4ge1xyXG5cdGlmICh2YWx1ZSA+IG1heCkge1xyXG5cdFx0dmFsdWUgPSBtYXg7XHJcblx0fSBlbHNlIGlmICh2YWx1ZSA8IG1pbikge1xyXG5cdFx0dmFsdWUgPSBtaW47XHJcblx0fVxyXG5cdHJldHVybiB2YWx1ZTtcclxufVxyXG5cclxuY29uc3Qgc2V0UmFuZ2VTdHlsZSA9IChyYW5nZTogSFRNTEVsZW1lbnQsIG1pbjogbnVtYmVyLCBtYXg6IG51bWJlciwgaXNWZXJ0aWNhbDogYm9vbGVhbikgPT4ge1xyXG5cdGlmIChpc1ZlcnRpY2FsKSB7XHJcblx0XHRyYW5nZS5zdHlsZS50b3AgPSBgJHttaW59cHhgO1xyXG5cdFx0cmFuZ2Uuc3R5bGUuaGVpZ2h0ID0gYCR7KG1heCAtIG1pbil9cHhgO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRyYW5nZS5zdHlsZS5sZWZ0ID0gYCR7bWlufXB4YDtcclxuXHRcdHJhbmdlLnN0eWxlLndpZHRoID0gYCR7KG1heCAtIG1pbil9cHhgO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IHtzZXRNb3VzZUhhbmRsZXIsIHJvdW5kLCBzZXRMaW1pdCwgc2V0UmFuZ2VTdHlsZX07IiwiaW1wb3J0IHtTY2FsZX0gZnJvbSAnLi9zY2FsZS50cyc7XHJcbmltcG9ydCB7Vmlld30gZnJvbSAnLi92aWV3LnRzJztcclxuaW1wb3J0IHtQcmVzZW50ZXJ9IGZyb20gJy4vcHJlc2VudGVyLnRzJztcclxuXHJcbmltcG9ydCB7c2xpZGVyRGF0YTEsIHNsaWRlckRhdGEyfSBmcm9tICcuL2RhdGEudHMnO1xyXG5cclxuY29uc3QgcHJlc2VudGVyMSA9IG5ldyBQcmVzZW50ZXIoc2xpZGVyRGF0YTEpO1xyXG5jb25zdCBwcmVzZW50ZXIyID0gbmV3IFByZXNlbnRlcihzbGlkZXJEYXRhMik7XHJcbi8vIGNvbnNvbGUubG9nKHByZXNlbnRlcjEpO1xyXG5cclxuIiwiY29uc3QgaW5pdFZpZXdNYXJrdXAgPSAod3JhcDogc3RyaW5nLCB2ZXJ0aWNhbDogYm9vbGVhbikgPT4ge1xyXG5cdGNvbnN0IGNvbnRvbE1hcmt1cDogc3RyaW5nID0gYDxkaXYgY2xhc3M9XCJ0cy1zbGlkZXJfX2NvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRzLXNsaWRlcl9fYmFyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0cy1zbGlkZXJfX3RvZ2dsZSB0cy1zbGlkZXJfX3RvZ2dsZS0tbWluXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRzLXNsaWRlcl9fdG9nZ2xlLXZhbHVlIHRzLXNsaWRlcl9fdG9nZ2xlLXZhbHVlLS1taW5cIj48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0cy1zbGlkZXJfX3RvZ2dsZSB0cy1zbGlkZXJfX3RvZ2dsZS0tbWF4XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRzLXNsaWRlcl9fdG9nZ2xlLXZhbHVlIHRzLXNsaWRlcl9fdG9nZ2xlLXZhbHVlLS1tYXhcIj48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0cy1zbGlkZXJfX3JhbmdlXCI+PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5gO1xyXG5cdGNvbnN0IGNvbnRyb2xXcmFwOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iod3JhcCk7XHJcblx0Y29udHJvbFdyYXAuaW5uZXJIVE1MID0gY29udG9sTWFya3VwO1xyXG4gIGNvbnN0IGRpdiA9IGNvbnRyb2xXcmFwLnF1ZXJ5U2VsZWN0b3JBbGwoJ2RpdicpO1xyXG4gIGlmICh2ZXJ0aWNhbCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaXYubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgZmlyc3RDbGFzczogc3RyaW5nID0gZGl2W2ldLmNsYXNzTGlzdFswXTtcclxuICAgICAgY29uc3QgdmVydGljYWxDbGFzczogc3RyaW5nID0gZmlyc3RDbGFzcyArICctLXZlcnRpY2FsJztcclxuICAgICAgZGl2W2ldLmNsYXNzTGlzdC5hZGQodmVydGljYWxDbGFzcyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBtYXJrdXAgPSAoc2xpZGVyOiBIVE1MRWxlbWVudCkgPT4ge1xyXG4gIGludGVyZmFjZSBNYXJrdXAge1xyXG4gICAgbWluOiBIVE1MRWxlbWVudDtcclxuICAgIG1heDogSFRNTEVsZW1lbnQ7XHJcbiAgICByYW5nZTogSFRNTEVsZW1lbnQ7XHJcbiAgICBiYXI6IEhUTUxFbGVtZW50O1xyXG4gICAgbWluVGFiOiBIVE1MRWxlbWVudDtcclxuICAgIG1heFRhYjogSFRNTEVsZW1lbnQ7XHJcbiAgfVxyXG4gIGxldCBtYXJrdXA6IE1hcmt1cCA9IHsgIFxyXG4gICAgIG1pbjogc2xpZGVyLnF1ZXJ5U2VsZWN0b3IoJy50cy1zbGlkZXJfX3RvZ2dsZS0tbWluJyksXHJcbiAgICAgbWF4OiBzbGlkZXIucXVlcnlTZWxlY3RvcignLnRzLXNsaWRlcl9fdG9nZ2xlLS1tYXgnKSxcclxuICAgICByYW5nZTogc2xpZGVyLnF1ZXJ5U2VsZWN0b3IoJy50cy1zbGlkZXJfX3JhbmdlJyksXHJcbiAgICAgYmFyOiBzbGlkZXIucXVlcnlTZWxlY3RvcignLnRzLXNsaWRlcl9fYmFyJyksXHJcbiAgICAgbWluVGFiOiBzbGlkZXIucXVlcnlTZWxlY3RvcignLnRzLXNsaWRlcl9fdG9nZ2xlLXZhbHVlLS1taW4nKSxcclxuICAgICBtYXhUYWI6IHNsaWRlci5xdWVyeVNlbGVjdG9yKCcudHMtc2xpZGVyX190b2dnbGUtdmFsdWUtLW1heCcpXHJcbiAgfVxyXG4gIHJldHVybiBtYXJrdXA7XHJcbn1cclxuXHJcbmV4cG9ydCB7aW5pdFZpZXdNYXJrdXAsIG1hcmt1cH07IiwiaW1wb3J0IHtEYXRhfSBmcm9tICcuL2RhdGEudHMnO1xyXG5pbXBvcnQge1ZhbHVlLCBUYWJUZXh0fSBmcm9tICcuL3ZpZXcudHMnO1xyXG5pbXBvcnQge3NldE1vdXNlSGFuZGxlciwgcm91bmR9IGZyb20gJy4vZnVuY3Rpb25zLnRzJztcclxuXHJcblxyXG5jbGFzcyBNb2RlbCB7XHJcblxyXG5cdGRhdGE6IERhdGE7XHJcblx0bWluSW5wdXQ6IGFueTtcclxuXHRtYXhJbnB1dDogYW55O1xyXG5cdHZhbHVlOiBWYWx1ZTtcclxuXHRwcmVjZW50OiBWYWx1ZTtcclxuXHR0YWJUZXh0OiBUYWJUZXh0O1xyXG5cdG9ic2VydmVyOiBIVE1MRWxlbWVudDtcclxuXHRtaW46IG51bWJlcjtcclxuXHRtYXg6IG51bWJlcjtcclxuXHRzY2FsZTogc3RyaW5nW107XHJcblxyXG5cdGNvbnN0cnVjdG9yKGRhdGEpIHtcclxuXHRcdHRoaXMuZGF0YSA9IGRhdGE7XHJcblx0XHR0aGlzLnRhYlRleHQgPSB7XHJcblx0XHRcdG1pbjogJycsXHJcblx0XHRcdG1heDogJydcclxuXHRcdH1cclxuXHRcdHRoaXMudmFsdWUgPSB7XHJcblx0XHRcdG1pbjogMCxcclxuXHRcdFx0bWF4OiAwXHJcblx0XHR9XHJcblx0XHR0aGlzLnByZWNlbnQgPSB7XHJcblx0XHRcdG1pbjogMCxcclxuXHRcdFx0bWF4OiAwXHJcblx0XHR9XHJcblx0XHR0aGlzLnNjYWxlID0gW107XHJcblx0XHR0aGlzLm9ic2VydmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRXZlbnQnKTtcclxuXHRcdHRoaXMuaW5pdCgpO1xyXG5cdFx0dGhpcy5zZXRTY2FsZSgpO1xyXG5cdFx0dGhpcy5hZGRMaXN0ZW5lcigpO1xyXG5cdFx0dGhpcy5jaGFuZ2VJbnB1dCgpO1xyXG5cdH1cclxuXHJcblx0c2V0SW5wdXQoKSB7XHJcblx0XHR0aGlzLm1pbklucHV0LnZhbHVlID0gdGhpcy50YWJUZXh0Lm1pbjtcclxuXHRcdHRoaXMubWF4SW5wdXQudmFsdWUgPSB0aGlzLnRhYlRleHQubWF4O1xyXG5cdFx0Ly8gY29uc29sZS5sb2coJ3NldCcpO1xyXG5cdH1cclxuXHJcblx0c2V0QXJyYXlWYWx1ZSgpIHtcclxuXHRcdGxldCBtaW4gPSBNYXRoLnJvdW5kKHRoaXMucHJlY2VudC5taW4gKiAodGhpcy5kYXRhLmFycmF5Lmxlbmd0aCAtIDEpKTtcclxuXHRcdGxldCBtYXggPSBNYXRoLnJvdW5kKHRoaXMucHJlY2VudC5tYXggKiAodGhpcy5kYXRhLmFycmF5Lmxlbmd0aCAtIDEpKTtcclxuXHRcdHRoaXMudGFiVGV4dC5taW4gPSB0aGlzLmRhdGEuYXJyYXlbbWluXTtcclxuXHRcdHRoaXMudGFiVGV4dC5tYXggPSB0aGlzLmRhdGEuYXJyYXlbbWF4XTtcclxuXHRcdHRoaXMuc2V0SW5wdXQoKTtcclxuXHR9XHJcblxyXG5cdGluaXQoKSB7XHJcblx0XHRpZiAodGhpcy5kYXRhLmlzQXJyYXkpIHtcclxuXHRcdFx0dGhpcy5vYnNlcnZlci5hZGRFdmVudExpc3RlbmVyKCdzZXRQcmVjZW50JywgKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMuc2V0QXJyYXlWYWx1ZSgpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMudGFiVGV4dC5taW4gPSByb3VuZCh0aGlzLmRhdGEubWluVG9nZ2xlVmFsdWUsIHRoaXMuZGF0YS5zdGVwKTtcclxuXHRcdFx0dGhpcy50YWJUZXh0Lm1heCA9IHJvdW5kKHRoaXMuZGF0YS5tYXhUb2dnbGVWYWx1ZSwgdGhpcy5kYXRhLnN0ZXApO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5taW5JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgdGhpcy5kYXRhLm1pbklucHV0SWQpO1xyXG5cdFx0dGhpcy5tYXhJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgdGhpcy5kYXRhLm1heElucHV0SWQpO1xyXG5cdFx0dGhpcy5zZXRJbnB1dCgpO1xyXG5cdH1cclxuXHJcblx0c2V0U2NhbGUoKSB7XHJcblx0XHRpZiAodGhpcy5kYXRhLmlzQXJyYXkpIHtcclxuXHRcdFx0aWYgKHRoaXMuZGF0YS5pc1NjYWxlKSB7XHJcblx0XHRcdFx0dGhpcy5zY2FsZSA9IHRoaXMuZGF0YS5hcnJheTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKHRoaXMuZGF0YS5pc1NjYWxlKSB7XHJcblx0XHRcdFx0bGV0IHF1YW50aXR5ID0gdGhpcy5kYXRhLnNjYWxlUXVhbnRpdHk7XHJcblx0XHRcdFx0aWYgKHF1YW50aXR5IDwgMikge1xyXG5cdFx0XHRcdFx0cXVhbnRpdHkgPSAyO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHF1YW50aXR5OyBpKyspIHtcclxuXHRcdFx0XHRcdGxldCB0ZXh0VmFsdWU6IG51bWJlciA9IE1hdGgucm91bmQoKHRoaXMuZGF0YS5taW5WYWx1ZSArICh0aGlzLmRhdGEubWF4VmFsdWUgLSB0aGlzLmRhdGEubWluVmFsdWUpIC8gKHF1YW50aXR5IC0gMSkgKiBpKSAvIHRoaXMuZGF0YS5zdGVwKSAqIHRoaXMuZGF0YS5zdGVwO1xyXG5cdFx0XHRcdFx0bGV0IHRleHQ6IHN0cmluZyA9IHJvdW5kKHRleHRWYWx1ZSwgdGhpcy5kYXRhLnN0ZXApO1xyXG5cdFx0XHRcdFx0dGhpcy5zY2FsZS5wdXNoKHRleHQpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0YWRkTGlzdGVuZXIoKSB7XHJcblx0XHR0aGlzLm9ic2VydmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZVZhbHVlJywgKCkgPT4ge1xyXG5cdFx0XHRpZiAodGhpcy5kYXRhLmlzQXJyYXkpIHtcclxuXHRcdFx0XHR0aGlzLnNldEFycmF5VmFsdWUoKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aGlzLnRhYlRleHQubWluID0gcm91bmQodGhpcy52YWx1ZS5taW4sIHRoaXMuZGF0YS5zdGVwKTtcclxuXHRcdFx0XHR0aGlzLnRhYlRleHQubWF4ID0gcm91bmQodGhpcy52YWx1ZS5tYXgsIHRoaXMuZGF0YS5zdGVwKTtcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLnNldElucHV0KCk7XHJcblx0XHRcdHRoaXMub2JzZXJ2ZXIuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2NoYW5nZVRhYlRleHQnKSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0Y2hhbmdlSW5wdXQoKSB7XHJcblx0XHRjb25zdCBvbkJsdXIgPSAoKSA9PiB7XHJcblx0XHRcdHRoaXMudmFsdWUubWluID0gK3RoaXMubWluSW5wdXQudmFsdWU7XHJcblx0XHRcdHRoaXMudmFsdWUubWF4ID0gK3RoaXMubWF4SW5wdXQudmFsdWU7XHJcblx0XHRcdHRoaXMudGFiVGV4dC5taW4gPSByb3VuZCh0aGlzLm1pbklucHV0LnZhbHVlLCB0aGlzLmRhdGEuc3RlcCk7XHJcblx0XHRcdHRoaXMudGFiVGV4dC5tYXggPSByb3VuZCh0aGlzLm1heElucHV0LnZhbHVlLCB0aGlzLmRhdGEuc3RlcCk7XHJcblx0XHRcdHRoaXMub2JzZXJ2ZXIuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2NoYW5nZUlucHV0JykpO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5taW5JbnB1dC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgb25CbHVyKTtcclxuXHRcdHRoaXMubWF4SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIG9uQmx1cik7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQge01vZGVsfTsiLCJpbXBvcnQge1ZpZXcsIFZhbHVlLCBUYWJUZXh0fSBmcm9tICcuL3ZpZXcudHMnO1xyXG5pbXBvcnQge0RhdGF9IGZyb20gJy4vZGF0YS50cyc7XHJcbmltcG9ydCB7TW9kZWx9IGZyb20gJy4vbW9kZWwudHMnO1xyXG5pbXBvcnQge3NldE1vdXNlSGFuZGxlciwgcm91bmQsIHNldFJhbmdlU3R5bGV9IGZyb20gJy4vZnVuY3Rpb25zLnRzJztcclxuaW1wb3J0IHttYXJrdXB9IGZyb20gJy4vaW5pdC12aWV3LW1hcmt1cC50cyc7XHJcblxyXG5jb25zdCB0b1ZpZXcgPSAodmFsdWU6IG51bWJlciwgbWluOiBudW1iZXIsIG1heDogbnVtYmVyKSA9PiAodmFsdWUgLSBtaW4pIC8gKG1heCAtIG1pbik7XHJcbmNvbnN0IHRvTW9kZWwgPSAodmFsdWU6IG51bWJlciwgbWluOiBudW1iZXIsIG1heDogbnVtYmVyKSA9PiAobWluICsgKG1heCAtIG1pbikgKiB2YWx1ZSk7XHJcblxyXG5jbGFzcyBQcmVzZW50ZXIge1xyXG5cclxuXHRkYXRhOiBEYXRhO1xyXG5cdHZpZXc6IFZpZXc7XHJcblx0bW9kZWw6IE1vZGVsO1xyXG5cdG1heDogbnVtYmVyO1xyXG5cdG1pbjogbnVtYmVyO1xyXG5cdHZhbHVlOiBWYWx1ZTtcclxuXHRtb2RlbFRhYlRleHQ6IFRhYlRleHQ7XHJcblxyXG5cdGNvbnN0cnVjdG9yKGRhdGEpIHtcclxuXHRcdHRoaXMuZGF0YSA9IGRhdGE7XHJcblx0XHR0aGlzLnZhbHVlID0ge1xyXG5cdFx0XHRtaW46IHRoaXMuZGF0YS5taW5Ub2dnbGVWYWx1ZSxcclxuXHRcdFx0bWF4OiB0aGlzLmRhdGEubWF4VG9nZ2xlVmFsdWVcclxuXHRcdH1cclxuXHRcdHRoaXMuaW5pdCgpO1xyXG5cdFx0dGhpcy5vbk1vdmVUb2dnbGUoKTtcclxuXHRcdHRoaXMub25DaGFuZ2VUYWJUZXh0KCk7XHJcblx0XHR0aGlzLm9uQ2FuZ2VJbnB1dCgpO1xyXG5cdH1cclxuXHJcblx0c2V0VGFiVGV4dCgpIHtcclxuXHRcdHRoaXMudmlldy52aWV3VGFiVGV4dC5taW4gPSB0aGlzLm1vZGVsLnRhYlRleHQubWluO1xyXG5cdFx0dGhpcy52aWV3LnZpZXdUYWJUZXh0Lm1heCA9IHRoaXMubW9kZWwudGFiVGV4dC5tYXg7XHJcblx0fVxyXG5cclxuXHRpbml0U2NhbGUoKSB7XHJcblx0XHR0aGlzLnZpZXcuc2NhbGUgPSB0aGlzLm1vZGVsLnNjYWxlO1xyXG5cdFx0dGhpcy52aWV3LmNvbnRhaW5lci5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnaW5pdFNjYWxlJykpO1xyXG5cdH1cclxuXHJcblx0c2V0VG9WaWV3KCkge1xyXG5cdFx0dGhpcy52aWV3LnZpZXdWYWx1ZS5taW4gPSB0b1ZpZXcodGhpcy52YWx1ZS5taW4sIHRoaXMuZGF0YS5taW5WYWx1ZSwgdGhpcy5kYXRhLm1heFZhbHVlKTtcclxuXHRcdHRoaXMudmlldy52aWV3VmFsdWUubWF4ID0gdG9WaWV3KHRoaXMudmFsdWUubWF4LCB0aGlzLmRhdGEubWluVmFsdWUsIHRoaXMuZGF0YS5tYXhWYWx1ZSk7XHJcblx0fVxyXG5cclxuXHRzZXRUb01vZGVsKCkge1xyXG5cdFx0dGhpcy5tb2RlbC52YWx1ZS5taW4gPSB0b01vZGVsKHRoaXMudmlldy52aWV3VmFsdWUubWluLCB0aGlzLmRhdGEubWluVmFsdWUsIHRoaXMuZGF0YS5tYXhWYWx1ZSk7XHJcblx0XHR0aGlzLm1vZGVsLnZhbHVlLm1heCA9IHRvTW9kZWwodGhpcy52aWV3LnZpZXdWYWx1ZS5tYXgsIHRoaXMuZGF0YS5taW5WYWx1ZSwgdGhpcy5kYXRhLm1heFZhbHVlKTtcclxuXHR9XHJcblxyXG5cdGluaXQoKSB7XHJcblx0XHR0aGlzLnZpZXcgPSBuZXcgVmlldyh0aGlzLmRhdGEpO1xyXG5cdFx0dGhpcy5tb2RlbCA9IG5ldyBNb2RlbCh0aGlzLmRhdGEpO1xyXG5cdFx0dGhpcy5pbml0U2NhbGUoKTtcclxuXHRcdHRoaXMuc2V0VG9WaWV3KCk7XHJcblx0XHR0aGlzLm1vZGVsLnByZWNlbnQgPSB0aGlzLnZpZXcudmlld1ZhbHVlO1xyXG5cdFx0dGhpcy5tb2RlbC5vYnNlcnZlci5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnc2V0UHJlY2VudCcpKTtcclxuXHRcdHRoaXMuc2V0VGFiVGV4dCgpO1xyXG5cdFx0dGhpcy52aWV3LmNvbnRhaW5lci5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnaW5pdFZhbHVlJykpO1xyXG5cclxuXHRcdHRoaXMudmlldy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlVmFsdWUnLCAoKSA9PiB7XHJcblx0XHRcdHRoaXMubW9kZWwub2JzZXJ2ZXIuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2NoYW5nZVZhbHVlJykpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRvbk1vdmVUb2dnbGUoKSB7XHJcblx0XHRjb25zdCBvbkNoYW5nZVZpZXcgPSAoKSA9PiB7XHJcblx0XHRcdHRoaXMuc2V0VG9Nb2RlbCgpO1xyXG5cdFx0XHR0aGlzLm1vZGVsLm9ic2VydmVyLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdjaGFuZ2VWYWx1ZScpKTtcclxuXHRcdH1cclxuXHRcdHRoaXMudmlldy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignbW92ZVRvZ2dsZScsIG9uQ2hhbmdlVmlldyk7XHJcblx0fVxyXG5cclxuXHRvbkNoYW5nZVRhYlRleHQoKSB7XHJcblx0XHR0aGlzLm1vZGVsLm9ic2VydmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZVRhYlRleHQnLCAoKSA9PiB7XHJcblx0XHRcdHRoaXMuc2V0VGFiVGV4dCgpO1xyXG5cdFx0XHR0aGlzLnZpZXcuY29udGFpbmVyLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdjaGFuZ2VUYWInKSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0b25DYW5nZUlucHV0KCkge1xyXG5cdFx0dGhpcy5tb2RlbC5vYnNlcnZlci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2VJbnB1dCcsICgpID0+IHtcclxuXHRcdFx0dGhpcy52aWV3LnZpZXdUYWJUZXh0ID0gdGhpcy5tb2RlbC50YWJUZXh0O1xyXG5cdFx0XHR0aGlzLnZhbHVlLm1pbiA9ICt0aGlzLm1vZGVsLnZhbHVlLm1pbjtcclxuXHRcdFx0dGhpcy52YWx1ZS5tYXggPSArdGhpcy5tb2RlbC52YWx1ZS5tYXg7XHJcblx0XHRcdHRoaXMuc2V0VG9WaWV3KCk7XHJcblx0XHRcdHRoaXMudmlldy5jb250YWluZXIuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2luaXRWYWx1ZScpKTtcclxuXHRcdFx0Y29uc3QgcmFuZ2U6IEhUTUxFbGVtZW50ID0gbWFya3VwKHRoaXMudmlldy5jb250YWluZXIpLnJhbmdlO1xyXG5cdFx0XHRzZXRSYW5nZVN0eWxlKHJhbmdlLCB0aGlzLnZpZXcudmlld1ZhbHVlLm1pbiAqIHRoaXMudmlldy5zaXplLCB0aGlzLnZpZXcudmlld1ZhbHVlLm1heCAqIHRoaXMudmlldy5zaXplLCB0aGlzLmRhdGEuaXNWZXJ0aWNhbCk7XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCB7dG9WaWV3LCB0b01vZGVsLCBQcmVzZW50ZXJ9OyIsImltcG9ydCB7cm91bmR9IGZyb20gJy4vZnVuY3Rpb25zLnRzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTY2FsZSB7XHJcblxyXG5cdHNsaWRlcjogSFRNTEVsZW1lbnQ7XHJcblx0c2NhbGU6IHN0cmluZ1tdO1xyXG5cdGlzVmVydGljYWw6IGJvb2xlYW47XHJcblxyXG5cdGNvbnN0cnVjdG9yKHNsaWRlciwgc2NhbGUsIGlzVmVydGljYWwpIHtcclxuXHRcdHRoaXMuc2xpZGVyID0gc2xpZGVyO1xyXG5cdFx0dGhpcy5zY2FsZSA9IHNjYWxlO1xyXG5cdFx0dGhpcy5pc1ZlcnRpY2FsID0gaXNWZXJ0aWNhbDtcclxuXHRcdHRoaXMuY3JlYXRlSXRlbSgpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlSXRlbSgpIHtcclxuXHRcdGNvbnN0IGJhcjogSFRNTEVsZW1lbnQgPSB0aGlzLnNsaWRlci5xdWVyeVNlbGVjdG9yKCcudHMtc2xpZGVyX19iYXInKTtcclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zY2FsZS5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRjb25zdCBzY2FsZUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdFx0c2NhbGVJdGVtLmNsYXNzTGlzdC5hZGQoJ3RzLXNsaWRlcl9fc2NhbGUtaXRlbScpO1xyXG5cdFx0XHRzY2FsZUl0ZW0udGV4dENvbnRlbnQgPSB0aGlzLnNjYWxlW2ldO1xyXG5cdFx0XHRpZiAodGhpcy5pc1ZlcnRpY2FsKSB7XHJcblx0XHRcdFx0c2NhbGVJdGVtLmNsYXNzTGlzdC5hZGQoJ3RzLXNsaWRlcl9fc2NhbGUtaXRlbS0tdmVydGljYWwnKTtcclxuXHRcdFx0XHRzY2FsZUl0ZW0uc3R5bGUudG9wID0gYCR7YmFyLm9mZnNldEhlaWdodCAvICh0aGlzLnNjYWxlLmxlbmd0aCAtIDEpICogaX1weGA7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2NhbGVJdGVtLnN0eWxlLmxlZnQgPSBgJHtiYXIub2Zmc2V0V2lkdGggLyAodGhpcy5zY2FsZS5sZW5ndGggLSAxKSAqIGl9cHhgO1xyXG5cdFx0XHR9XHRcclxuXHRcdFx0YmFyLmFwcGVuZChzY2FsZUl0ZW0pO1xyXG5cdFx0fVxyXG5cdH1cclxufSIsImltcG9ydCB7VG9nZ2xlfSBmcm9tICcuL3RvZ2dsZS50cyc7XHJcbmltcG9ydCB7VmFsdWV9IGZyb20gJy4vdmlldy50cyc7XHJcbmltcG9ydCB7c2V0TW91c2VIYW5kbGVyLCBzZXRSYW5nZVN0eWxlfSBmcm9tICcuL2Z1bmN0aW9ucy50cyc7XHJcbmltcG9ydCB7RGF0YX0gZnJvbSAnLi9kYXRhLnRzJztcclxuaW1wb3J0IHttYXJrdXB9IGZyb20gJy4vaW5pdC12aWV3LW1hcmt1cC50cyc7XHJcblxyXG5mdW5jdGlvbiBzZXRWaWV3VmFsdWUoc2xpZGVyOiBIVE1MRWxlbWVudCwgZGF0YTogRGF0YSkge1xyXG5cclxuXHRsZXQgaXNWZXJ0aWNhbDogYm9vbGVhbiA9IGRhdGEuaXNWZXJ0aWNhbDtcclxuXHRsZXQgaXNSYW5nZTogYm9vbGVhbiA9IGRhdGEuaXNSYW5nZTtcclxuXHRsZXQgaXNUYWI6IGJvb2xlYW4gPSBkYXRhLmlzVGFiO1xyXG5cclxuXHRsZXQgcHJlY2VudDogVmFsdWUgPSB7XHJcblx0XHRtaW46IDAsXHJcblx0XHRtYXg6IDBcclxuXHR9O1xyXG5cclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcclxuXHRcdGNvbnN0IG1pblRvZ2dsZUVsZW06IEhUTUxFbGVtZW50ID0gbWFya3VwKHNsaWRlcikubWluO1xyXG5cdFx0Y29uc3QgbWF4VG9nZ2xlRWxlbTogSFRNTEVsZW1lbnQgPSBtYXJrdXAoc2xpZGVyKS5tYXg7XHJcblx0XHRjb25zdCByYW5nZTogSFRNTEVsZW1lbnQgPSBtYXJrdXAoc2xpZGVyKS5yYW5nZTtcclxuXHRcdGNvbnN0IGJhckVsZW06IEhUTUxFbGVtZW50ID0gbWFya3VwKHNsaWRlcikuYmFyO1xyXG5cdFx0Y29uc3QgYmFyV2lkdGg6IG51bWJlciA9IGJhckVsZW0ub2Zmc2V0V2lkdGg7XHJcblx0XHRjb25zdCBiYXJIZWlnaHQ6IG51bWJlciA9IGJhckVsZW0ub2Zmc2V0SGVpZ2h0O1xyXG5cdFx0bGV0IGJhck1heDtcclxuXHRcdGxldCB0b2dnbGVNYXhPZmZzZXQ7XHJcblx0XHRsZXQgdG9nZ2xlTWluT2Zmc2V0O1xyXG5cdFx0Y29uc3Qgc2V0UHJlY2VudCA9ICh2YWx1ZSkgPT4gdmFsdWUgLyBiYXJNYXg7XHJcblxyXG5cdFx0aWYgKCFpc1JhbmdlKSB7XHJcblx0XHRcdG1pblRvZ2dsZUVsZW0uaGlkZGVuID0gdHJ1ZTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoaXNWZXJ0aWNhbCkge1xyXG5cdFx0XHRiYXJNYXggPSBiYXJIZWlnaHQ7XHJcblx0XHRcdHRvZ2dsZU1heE9mZnNldCA9IG1heFRvZ2dsZUVsZW0ub2Zmc2V0VG9wO1xyXG5cdFx0XHR0b2dnbGVNaW5PZmZzZXQgPSBtaW5Ub2dnbGVFbGVtLm9mZnNldFRvcDtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGJhck1heCA9IGJhcldpZHRoO1xyXG5cdFx0XHR0b2dnbGVNYXhPZmZzZXQgPSBtYXhUb2dnbGVFbGVtLm9mZnNldExlZnQ7XHJcblx0XHRcdHRvZ2dsZU1pbk9mZnNldCA9IG1pblRvZ2dsZUVsZW0ub2Zmc2V0TGVmdDtcclxuXHRcdH1cclxuXHJcblx0XHRsZXQgdG9nZ2xlTWF4ID0gbmV3IFRvZ2dsZShtYXhUb2dnbGVFbGVtLCB0b2dnbGVNaW5PZmZzZXQsIGJhck1heCwgdG9nZ2xlTWF4T2Zmc2V0LCBpc1ZlcnRpY2FsKTtcclxuXHRcdGxldCB0b2dnbGVNaW4gPSBuZXcgVG9nZ2xlKG1pblRvZ2dsZUVsZW0sIDAsIHRvZ2dsZU1heE9mZnNldCwgdG9nZ2xlTWluT2Zmc2V0LCBpc1ZlcnRpY2FsKTtcclxuXHRcdHRvZ2dsZU1heC5tb3ZlVG9nZ2xlKCk7XHJcblx0XHR0b2dnbGVNaW4ubW92ZVRvZ2dsZSgpO1xyXG5cdFx0cHJlY2VudC5taW4gPSBzZXRQcmVjZW50KHRvZ2dsZU1pbi52YWx1ZSk7XHJcblx0XHRwcmVjZW50Lm1heCA9IHNldFByZWNlbnQodG9nZ2xlTWF4LnZhbHVlKTtcclxuXHJcblx0XHRpZiAoIWlzUmFuZ2UpIHtcclxuXHRcdFx0dG9nZ2xlTWluLnZhbHVlID0gMDtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBzZXRSYW5nZSA9ICgpID0+IHtcclxuXHRcdFx0dG9nZ2xlTWF4Lm1pbiA9IHRvZ2dsZU1pbi52YWx1ZTtcclxuXHRcdFx0dG9nZ2xlTWluLm1heCA9IHRvZ2dsZU1heC52YWx1ZTtcclxuXHRcdFx0c2V0UmFuZ2VTdHlsZShyYW5nZSwgdG9nZ2xlTWluLnZhbHVlLCB0b2dnbGVNYXgudmFsdWUsIGlzVmVydGljYWwpO1xyXG5cdFx0fVxyXG5cdFx0c2V0UmFuZ2UoKTtcclxuXHJcblx0XHRjb25zdCBvbk1vdXNlRG93bkNvaW5jaWRlbmNlID0gKGV2dCkgPT4ge1xyXG5cdFx0XHRsZXQgY29pbmNpZGVuY2VUb2dnbGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHRcdFx0bWF4VG9nZ2xlRWxlbS5oaWRkZW4gPSB0cnVlO1xyXG5cdFx0XHRjb2luY2lkZW5jZVRvZ2dsZSA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQoZXZ0LnBhZ2VYLCBldnQucGFnZVkpLmNsYXNzTGlzdC5jb250YWlucygndHMtc2xpZGVyX190b2dnbGUtLW1pbicpO1xyXG5cdFx0XHRtYXhUb2dnbGVFbGVtLmhpZGRlbiA9IGZhbHNlO1xyXG5cdFx0XHRsZXQgc3RhcnRWYWx1ZTogbnVtYmVyO1xyXG5cdFx0XHRzdGFydFZhbHVlID0gdG9nZ2xlTWF4LnZhbHVlO1xyXG5cclxuXHRcdFx0Y29uc3Qgb25Nb3VzZU1vdmUgPSAobW92ZUV2dCkgPT4ge1xyXG5cdFx0XHRcdGlmIChjb2luY2lkZW5jZVRvZ2dsZSkge1xyXG5cdFx0XHRcdFx0dG9nZ2xlTWluLm1vdXNlVmFsdWUgPSB0b2dnbGVNYXgubW91c2VWYWx1ZTtcclxuXHRcdFx0XHRcdHRvZ2dsZU1heC5pc0ZpeGVkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdHRvZ2dsZU1pbi5pc0ZpeGVkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdGlmICh0b2dnbGVNYXgubW91c2VWYWx1ZSA+IHN0YXJ0VmFsdWUpIHtcclxuXHRcdFx0XHRcdFx0dG9nZ2xlTWF4LmlzRml4ZWQgPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0dG9nZ2xlTWluLmlzRml4ZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0dG9nZ2xlTWF4LmlzRml4ZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHR0b2dnbGVNaW4uaXNGaXhlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0XHR0b2dnbGVNaW4ubW91c2VWYWx1ZSA9IHRvZ2dsZU1heC5tb3VzZVZhbHVlO1xyXG5cdFx0XHRcdFx0XHR0b2dnbGVNaW4udmFsdWUgPSB0b2dnbGVNYXgubW91c2VWYWx1ZTtcclxuXHRcdFx0XHRcdFx0aWYgKHRvZ2dsZU1pbi52YWx1ZSA8IDApIHtcclxuXHRcdFx0XHRcdFx0XHR0b2dnbGVNaW4udmFsdWUgPSAwO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdHRvZ2dsZU1pbi5zZXRTdHlsZSgpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0b2dnbGVNYXguaXNGaXhlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0dG9nZ2xlTWluLmlzRml4ZWQgPSBmYWxzZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0Y29uc3Qgb25Nb3VzZVVwID0gKHVwRXZ0KSA9PiB7XHJcblx0XHRcdFx0dXBFdnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHR0b2dnbGVNaW4ubW91c2VWYWx1ZSA9IHRvZ2dsZU1pbi52YWx1ZTtcclxuXHRcdFx0XHR0b2dnbGVNYXguaXNGaXhlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdHRvZ2dsZU1pbi5pc0ZpeGVkID0gZmFsc2U7XHJcblx0XHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uTW91c2VVcCk7XHJcblx0XHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKTtcclxuXHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uTW91c2VVcCk7XHJcblx0XHR9XHJcblxyXG5cdFx0bWF4VG9nZ2xlRWxlbS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBvbk1vdXNlRG93bkNvaW5jaWRlbmNlKTtcclxuXHJcblx0XHRjb25zdCBvbk1vdXNlTW92ZVByZWNlbnQgPSAobW92ZUV2dCkgPT4ge1xyXG5cdFx0XHRzZXRSYW5nZSgpO1xyXG5cdFx0XHRwcmVjZW50Lm1pbiA9IHNldFByZWNlbnQodG9nZ2xlTWluLnZhbHVlKTtcclxuXHRcdFx0cHJlY2VudC5tYXggPSBzZXRQcmVjZW50KHRvZ2dsZU1heC52YWx1ZSk7XHJcblx0XHR9XHJcblx0XHRzZXRNb3VzZUhhbmRsZXIobWF4VG9nZ2xlRWxlbSwgb25Nb3VzZU1vdmVQcmVjZW50KTtcclxuXHRcdHNldE1vdXNlSGFuZGxlcihtaW5Ub2dnbGVFbGVtLCBvbk1vdXNlTW92ZVByZWNlbnQpO1xyXG5cdH0pO1xyXG5yZXR1cm4gcHJlY2VudDtcclxufVxyXG5cclxuZXhwb3J0IHtzZXRWaWV3VmFsdWV9OyIsImltcG9ydCB7c2V0TGltaXR9IGZyb20gJy4vZnVuY3Rpb25zLnRzJztcclxuXHJcbmNvbnN0IHNldFRvZ2dsZVN0eWxlID0gKHRvZ2dsZTogSFRNTEVsZW1lbnQsIHZhbHVlOiBudW1iZXIsIHZlcnRpY2FsOiBib29sZWFuKSA9PiB7XHJcblx0XHRpZiAodmVydGljYWwpIHtcclxuXHRcdFx0dG9nZ2xlLnN0eWxlLnRvcCA9IGAke3ZhbHVlfXB4YDtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRvZ2dsZS5zdHlsZS5sZWZ0ID0gYCR7dmFsdWV9cHhgO1xyXG5cdH1cclxufVxyXG5cclxuY2xhc3MgVG9nZ2xlIHtcclxuXHJcblx0dG9nZ2xlOiBIVE1MRWxlbWVudDtcclxuXHRtaW46IG51bWJlcjtcclxuXHRtYXg6IG51bWJlcjtcclxuXHRtb3VzZVZhbHVlOiBudW1iZXI7XHJcblx0dmFsdWU6IG51bWJlcjtcclxuXHR2ZXJ0aWNhbDogYm9vbGVhbjtcclxuXHRpc0ZpeGVkOiBib29sZWFuO1xyXG5cclxuXHRjb25zdHJ1Y3Rvcih0b2dnbGUsIG1pbiwgbWF4LCB2YWx1ZSwgdmVydGljYWwpIHtcclxuXHRcdHRoaXMudG9nZ2xlID0gdG9nZ2xlO1xyXG5cdFx0dGhpcy5taW4gPSBtaW47XHJcblx0XHR0aGlzLm1heCA9IG1heDtcclxuXHRcdHRoaXMubW91c2VWYWx1ZSA9IHZhbHVlO1xyXG5cdFx0dGhpcy52YWx1ZSA9IHZhbHVlO1xyXG5cdFx0dGhpcy52ZXJ0aWNhbCA9IHZlcnRpY2FsO1xyXG5cdFx0dGhpcy5pc0ZpeGVkID0gZmFsc2U7XHJcblx0XHR0aGlzLnNldFN0eWxlKCk7XHJcblx0fVxyXG5cdHNldFN0eWxlKCkge1xyXG5cdFx0c2V0VG9nZ2xlU3R5bGUodGhpcy50b2dnbGUsIHRoaXMudmFsdWUsIHRoaXMudmVydGljYWwpO1xyXG5cdH1cclxuXHRtb3ZlVG9nZ2xlKCkge1xyXG5cdFx0Y29uc3Qgb25Nb3VzZURvd24gPSAoZXZ0KSA9PiB7XHJcblx0XHRcdGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRsZXQgc2hpZnRYOiBudW1iZXIgPSBldnQuY2xpZW50WCAtIHRoaXMudG9nZ2xlLm9mZnNldExlZnQ7XHJcblx0XHRcdGxldCBzaGlmdFk6IG51bWJlciA9IGV2dC5jbGllbnRZIC0gdGhpcy50b2dnbGUub2Zmc2V0VG9wO1xyXG5cdFx0XHRsZXQgc3RhcnRWYWx1ZTogbnVtYmVyID0gdGhpcy5tb3VzZVZhbHVlO1xyXG5cdFx0XHRjb25zdCBtb3ZlQXQgPSAocGFnZVgsIHBhZ2VZKSA9PiB7XHJcblx0XHRcdFx0aWYgKHRoaXMudmVydGljYWwpIHtcclxuXHRcdFx0XHRcdHRoaXMubW91c2VWYWx1ZSA9IHBhZ2VZIC0gc2hpZnRZO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0aGlzLm1vdXNlVmFsdWUgPSBwYWdlWCAtIHNoaWZ0WDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy52YWx1ZSA9IHRoaXMubW91c2VWYWx1ZTtcclxuXHRcdFx0XHR0aGlzLnZhbHVlID0gc2V0TGltaXQodGhpcy52YWx1ZSwgdGhpcy5taW4sIHRoaXMubWF4KTtcclxuXHRcdFx0XHRpZiAodGhpcy5pc0ZpeGVkKSB7XHJcblx0XHRcdFx0XHR0aGlzLnZhbHVlID0gc3RhcnRWYWx1ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy5zZXRTdHlsZSgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdG1vdmVBdChldnQucGFnZVgsIGV2dC5wYWdlWSk7XHJcblxyXG5cdFx0XHRjb25zdCBvbk1vdXNlTW92ZSA9IChtb3ZlRXZ0KSA9PiB7XHJcblx0XHRcdFx0bW92ZUF0KG1vdmVFdnQucGFnZVgsIG1vdmVFdnQuIHBhZ2VZKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRjb25zdCBvbk1vdXNlVXAgPSAodXBFdnQpID0+IHtcclxuXHRcdFx0XHR1cEV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdHRoaXMubW91c2VWYWx1ZSA9IHRoaXMudmFsdWU7XHJcblx0XHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uTW91c2VVcCk7XHJcblx0XHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKTtcclxuXHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uTW91c2VVcCk7XHJcblx0XHR9XHJcblx0XHR0aGlzLnRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBvbk1vdXNlRG93bik7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQge3NldFRvZ2dsZVN0eWxlLCBUb2dnbGV9OyIsImltcG9ydCB7aW5pdFZpZXdNYXJrdXB9IGZyb20gJy4vaW5pdC12aWV3LW1hcmt1cC50cyc7XHJcbmltcG9ydCB7U2NhbGV9IGZyb20gJy4vc2NhbGUudHMnO1xyXG5pbXBvcnQge3NldFZpZXdWYWx1ZX0gZnJvbSAnLi9zZXQtdmlldy12YWx1ZS50cyc7XHJcbmltcG9ydCB7RGF0YX0gZnJvbSAnLi9kYXRhLnRzJztcclxuaW1wb3J0IHtzZXRUb2dnbGVTdHlsZX0gZnJvbSAnLi90b2dnbGUudHMnO1xyXG5pbXBvcnQge3NldE1vdXNlSGFuZGxlciwgcm91bmR9IGZyb20gJy4vZnVuY3Rpb25zLnRzJztcclxuaW1wb3J0IHttYXJrdXB9IGZyb20gJy4vaW5pdC12aWV3LW1hcmt1cC50cyc7XHJcblxyXG5pbnRlcmZhY2UgVmFsdWUge1xyXG5cdG1pbjogbnVtYmVyO1xyXG5cdG1heDogbnVtYmVyO1xyXG59XHJcbmludGVyZmFjZSBUYWJUZXh0IHtcclxuXHRtaW46IHN0cmluZztcclxuXHRtYXg6IHN0cmluZztcclxufVxyXG5cclxuY2xhc3MgVmlldyB7XHJcblxyXG5cdGRhdGE6IERhdGE7XHJcblx0dmlld1ZhbHVlOiBWYWx1ZTtcclxuXHR2aWV3VGFiVGV4dDogVGFiVGV4dDtcclxuXHRjb250YWluZXI6IEhUTUxFbGVtZW50O1xyXG5cdG1pblRvZ2dsZUVsZW06IEhUTUxFbGVtZW50O1xyXG5cdG1heFRvZ2dsZUVsZW06IEhUTUxFbGVtZW50O1xyXG5cdG1pblRhYkVsZW06IEhUTUxFbGVtZW50O1xyXG5cdG1heFRhYkVsZW06IEhUTUxFbGVtZW50O1xyXG5cdHNpemU6IG51bWJlcjtcclxuXHRzY2FsZTogc3RyaW5nW107XHJcblxyXG5cdGNvbnN0cnVjdG9yKGRhdGEpIHtcclxuXHRcdHRoaXMuZGF0YSA9IGRhdGE7XHJcblx0XHR0aGlzLnZpZXdUYWJUZXh0ID0ge1xyXG5cdFx0XHRtaW46ICcnLFxyXG5cdFx0XHRtYXg6ICcnXHJcblx0XHR9XHJcblx0XHR0aGlzLnNjYWxlID0gW107XHJcblx0XHR0aGlzLmluaXRWaWV3KCk7XHJcblx0XHR0aGlzLnNldFRvZ2dsZSgpO1xyXG5cdFx0dGhpcy5vbk1vdmVUb2dnbGUoKTtcclxuXHRcdHRoaXMuYWRkU2NhbGUoKTtcclxuXHRcdHRoaXMuY2hhbmdlVGFiKCk7XHJcblx0fVxyXG5cclxuXHRpbml0VmlldygpIHtcclxuXHRcdGluaXRWaWV3TWFya3VwKHRoaXMuZGF0YS53cmFwSWQsIHRoaXMuZGF0YS5pc1ZlcnRpY2FsKTtcclxuXHRcdHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLmRhdGEud3JhcElkKS5xdWVyeVNlbGVjdG9yKCcudHMtc2xpZGVyX19jb250YWluZXInKTtcclxuXHRcdGlmICh0aGlzLmRhdGEuaXNWZXJ0aWNhbCkge1xyXG5cdFx0XHR0aGlzLnNpemUgPSB0aGlzLmNvbnRhaW5lci5vZmZzZXRIZWlnaHQ7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLnNpemUgPSB0aGlzLmNvbnRhaW5lci5vZmZzZXRXaWR0aDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHNldFRhYigpIHtcclxuXHRcdHRoaXMubWluVGFiRWxlbS50ZXh0Q29udGVudCA9IHRoaXMudmlld1RhYlRleHQubWluO1xyXG5cdFx0dGhpcy5tYXhUYWJFbGVtLnRleHRDb250ZW50ID0gdGhpcy52aWV3VGFiVGV4dC5tYXg7XHJcblx0fVxyXG5cclxuXHRzZXRUb2dnbGUoKSB7XHJcblx0XHR0aGlzLm1pblRvZ2dsZUVsZW0gPSBtYXJrdXAodGhpcy5jb250YWluZXIpLm1pbjtcclxuXHRcdHRoaXMubWF4VG9nZ2xlRWxlbSA9IG1hcmt1cCh0aGlzLmNvbnRhaW5lcikubWF4O1xyXG5cdFx0dGhpcy5taW5UYWJFbGVtID0gbWFya3VwKHRoaXMuY29udGFpbmVyKS5taW5UYWI7XHJcblx0XHR0aGlzLm1heFRhYkVsZW0gPSBtYXJrdXAodGhpcy5jb250YWluZXIpLm1heFRhYjtcclxuXHJcblx0XHR0aGlzLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdpbml0VmFsdWUnLCAoKSA9PiB7XHJcblx0XHRcdHNldFRvZ2dsZVN0eWxlKHRoaXMubWluVG9nZ2xlRWxlbSwgdGhpcy52aWV3VmFsdWUubWluICogdGhpcy5zaXplLCB0aGlzLmRhdGEuaXNWZXJ0aWNhbCk7XHJcblx0XHRcdHNldFRvZ2dsZVN0eWxlKHRoaXMubWF4VG9nZ2xlRWxlbSwgdGhpcy52aWV3VmFsdWUubWF4ICogdGhpcy5zaXplLCB0aGlzLmRhdGEuaXNWZXJ0aWNhbCk7XHJcblx0XHRcdHRoaXMuc2V0VGFiKCk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdG9uTW92ZVRvZ2dsZSgpIHtcclxuXHRcdHRoaXMudmlld1ZhbHVlID0gc2V0Vmlld1ZhbHVlKHRoaXMuY29udGFpbmVyLCB0aGlzLmRhdGEpO1xyXG5cdFx0Y29uc3Qgb25Nb3VzZU1vdmUgPSAobW92ZUV2dCkgPT4ge1xyXG5cdFx0XHR0aGlzLmNvbnRhaW5lci5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnbW92ZVRvZ2dsZScpKTtcclxuXHRcdH1cclxuXHRcdHNldE1vdXNlSGFuZGxlcih0aGlzLmNvbnRhaW5lciwgb25Nb3VzZU1vdmUpO1xyXG5cdH1cclxuXHJcblx0YWRkU2NhbGUoKSB7XHJcblx0XHR0aGlzLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdpbml0U2NhbGUnLCAoKSA9PiB7XHJcblx0XHRcdGlmICh0aGlzLmRhdGEuaXNTY2FsZSkge1xyXG5cdFx0XHRcdGNvbnN0IHNjYWxlID0gbmV3IFNjYWxlKHRoaXMuY29udGFpbmVyLCB0aGlzLnNjYWxlLCB0aGlzLmRhdGEuaXNWZXJ0aWNhbCk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0Y2hhbmdlVGFiKCkge1xyXG5cdFx0dGhpcy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlVGFiJywgKCkgPT4ge1xyXG5cdFx0XHR0aGlzLnNldFRhYigpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQge1ZpZXcsIFZhbHVlLCBUYWJUZXh0fTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==