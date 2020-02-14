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
    step: 0.01,
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
    document.addEventListener('mousedown', onMouseDown);
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
        // for (let key in this.minInput) {
        // 	console.log(key + ':' + this.minInput[key]);
        // }
        // this.minInput.value = '!!!!';
        // console.log(this.minInput.value);
        // this.minInput.addEventListener('unfocus', () => {
        // 	console.log(222);
        // });
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
            // console.log(this.minInput.readonly);
            this.observer.dispatchEvent(new CustomEvent('changeTabText'));
        });
    }
    changeInput() {
        this.minInput.addEventListener('blur', () => {
            this.value.min = +this.minInput.value;
            this.observer.dispatchEvent(new CustomEvent('changeInput'));
        });
        this.maxInput.addEventListener('blur', () => {
            this.value.max = +this.maxInput.value;
            this.observer.dispatchEvent(new CustomEvent('changeInput'));
        });
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
    init() {
        this.view = new _view_ts__WEBPACK_IMPORTED_MODULE_0__["View"](this.data);
        this.model = new _model_ts__WEBPACK_IMPORTED_MODULE_1__["Model"](this.data);
        this.initScale();
        this.view.viewValue.min = toView(this.value.min, this.data.minValue, this.data.maxValue);
        this.view.viewValue.max = toView(this.value.max, this.data.minValue, this.data.maxValue);
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
            this.model.value.min = toModel(this.view.viewValue.min, this.data.minValue, this.data.maxValue);
            this.model.value.max = toModel(this.view.viewValue.max, this.data.minValue, this.data.maxValue);
            this.model.observer.dispatchEvent(new CustomEvent('changeValue'));
            // console.log(this.model.value);
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
            this.value.min = +this.model.value.min;
            this.value.max = +this.model.value.max;
            this.view.viewValue.min = toView(this.value.min, this.data.minValue, this.data.maxValue);
            this.view.viewValue.max = toView(this.value.max, this.data.minValue, this.data.maxValue);
            this.view.container.dispatchEvent(new CustomEvent('initValue'));
            this.view.onViewCange();
            this.view.setToggle();
            // this.view.minToggleElem.style.left = this.view.viewValue.min * this.view.size + 'px';
            // this.view.viewTabText.min = this.model.tabText.min;
            // console.log(this.view.viewValue.min);
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
            evt.preventDefault();
            let coincidenceToggle = false;
            maxToggleElem.hidden = true;
            coincidenceToggle = document.elementFromPoint(evt.pageX, evt.pageY).classList.contains('ts-slider__toggle--min');
            maxToggleElem.hidden = false;
            let startValue;
            startValue = toggleMax.value;
            const onMouseMove = (moveEvt) => {
                moveEvt.preventDefault();
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
        // this.onViewCange();
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
    onViewCange() {
        // this.viewValue = setViewValue(this.container, this.data);
    }
    onMoveToggle() {
        this.viewValue = Object(_set_view_value_ts__WEBPACK_IMPORTED_MODULE_2__["setViewValue"])(this.container, this.data);
        this.onViewCange();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Z1bmN0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luaXQtdmlldy1tYXJrdXAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9wcmVzZW50ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjYWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXQtdmlldy12YWx1ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdG9nZ2xlLnRzIiwid2VicGFjazovLy8uL3NyYy92aWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFB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QUFHLEVBQUU7WUFDakQsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDdEIsTUFBTSxLQUFLLEdBQUcsSUFBSSwrQ0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQzFFO1FBQ0YsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBRUQsU0FBUztRQUNSLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLEdBQUcsRUFBRTtZQUNqRCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDZixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7Q0FDRDtBQUU2QiIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsImltcG9ydCB7c2V0TGltaXR9IGZyb20gJy4vZnVuY3Rpb25zLnRzJztcclxuXHJcbmludGVyZmFjZSBEYXRhIHtcclxuXHR3cmFwSWQ6IHN0cmluZztcclxuXHRtaW5JbnB1dElkOiBzdHJpbmc7XHJcblx0bWF4SW5wdXRJZDogc3RyaW5nO1xyXG5cdGlzQXJyYXk6IGJvb2xlYW47XHJcblx0YXJyYXk6IHN0cmluZ1tdO1xyXG5cdHN0ZXA6IG51bWJlcjtcclxuXHRtaW5WYWx1ZTogbnVtYmVyO1xyXG5cdG1heFZhbHVlOiBudW1iZXI7XHJcblx0bWluVG9nZ2xlVmFsdWU6IG51bWJlcjtcclxuXHRtYXhUb2dnbGVWYWx1ZTogbnVtYmVyO1xyXG5cdGlzUmFuZ2U6IGJvb2xlYW47XHJcblx0aXNWZXJ0aWNhbDogYm9vbGVhbjtcclxuXHRpc1RhYjogYm9vbGVhbjtcclxuXHRpc1NjYWxlOiBib29sZWFuO1xyXG5cdHNjYWxlUXVhbnRpdHk6IG51bWJlcjtcclxufVxyXG5cclxuY29uc3Qgc2xpZGVyRGF0YTE6IERhdGEgPSB7XHJcblx0d3JhcElkOiAnI3RzLXNsaWRlcl9fd3JhcC0xJyxcclxuXHRtaW5JbnB1dElkOiAncGFnZV9faW5wdXQtMTEnLFxyXG5cdG1heElucHV0SWQ6ICdwYWdlX19pbnB1dC0xMicsXHJcblx0aXNBcnJheTogZmFsc2UsXHJcblx0YXJyYXk6IFtdLFxyXG5cdHN0ZXA6IDAuMDEsXHJcblx0bWluVmFsdWU6IDcsXHJcblx0bWF4VmFsdWU6IDEwNSxcclxuXHRtaW5Ub2dnbGVWYWx1ZTogMzkuNjcsXHJcblx0bWF4VG9nZ2xlVmFsdWU6IDcyLjMzLFxyXG5cdGlzUmFuZ2U6IHRydWUsXHJcblx0aXNWZXJ0aWNhbDogZmFsc2UsXHJcblx0aXNUYWI6IHRydWUsXHJcblx0aXNTY2FsZTogdHJ1ZSxcclxuXHRzY2FsZVF1YW50aXR5OiA0XHJcbn1cclxuY29uc3Qgc2xpZGVyRGF0YTI6IERhdGEgPSB7XHJcblx0d3JhcElkOiAnI3RzLXNsaWRlcl9fd3JhcC0yJyxcclxuXHRtaW5JbnB1dElkOiAncGFnZV9faW5wdXQtMjEnLFxyXG5cdG1heElucHV0SWQ6ICdwYWdlX19pbnB1dC0yMicsXHJcblx0aXNBcnJheTogdHJ1ZSxcclxuXHRhcnJheTogWyfQvNCw0LvQvicsICfQvdC10LzQvdC+0LPQvicsICfRgdGA0LXQtNC90LUnLCAn0LHQvtC70YzRiNC1JywgJ9C80L3QvtCz0L4nXSxcclxuXHRzdGVwOiAxLFxyXG5cdG1pblZhbHVlOiAwLFxyXG5cdG1heFZhbHVlOiA0LFxyXG5cdG1pblRvZ2dsZVZhbHVlOiAyLFxyXG5cdG1heFRvZ2dsZVZhbHVlOiAzLFxyXG5cdGlzUmFuZ2U6IHRydWUsXHJcblx0aXNWZXJ0aWNhbDogdHJ1ZSxcclxuXHRpc1RhYjogdHJ1ZSxcclxuXHRpc1NjYWxlOiB0cnVlLFxyXG5cdHNjYWxlUXVhbnRpdHk6IDVcclxufVxyXG5cclxuY29uc3Qgc2V0RGF0YUxpbWl0ID0gKGRhdGE6IERhdGEpID0+IHtcclxuXHRkYXRhLm1pblRvZ2dsZVZhbHVlID0gc2V0TGltaXQoZGF0YS5taW5Ub2dnbGVWYWx1ZSwgZGF0YS5taW5WYWx1ZSwgZGF0YS5tYXhWYWx1ZSk7XHJcblx0ZGF0YS5tYXhUb2dnbGVWYWx1ZSA9IHNldExpbWl0KGRhdGEubWF4VG9nZ2xlVmFsdWUsIGRhdGEubWluVmFsdWUsIGRhdGEubWF4VmFsdWUpO1xyXG59XHJcblxyXG5zZXREYXRhTGltaXQoc2xpZGVyRGF0YTEpO1xyXG5zZXREYXRhTGltaXQoc2xpZGVyRGF0YTIpO1xyXG5cclxuZXhwb3J0IHtEYXRhLCBzbGlkZXJEYXRhMSwgc2xpZGVyRGF0YTJ9OyIsImNvbnN0IHNldE1vdXNlSGFuZGxlciA9IChlbGVtLCBvbk1vdmUsIG9uRG92bj8sIG9uVXA/KSA9PiB7XHJcblxyXG5cdGNvbnN0IG9uTW91c2VEb3duID0gKGV2dCkgPT4ge1xyXG5cdFx0aWYgKG9uRG92bikge1xyXG5cdFx0XHRvbkRvdm4oZXZ0KTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0Y29uc3Qgb25Nb3VzZU1vdmUgPSAobW92ZUV2dCkgPT4ge1xyXG5cdFx0XHRvbk1vdmUobW92ZUV2dCk7XHJcblx0XHR9XHJcblx0XHRjb25zdCBvbk1vdXNlVXAgPSAodXBFdnQpID0+IHtcclxuXHRcdFx0aWYgKG9uVXApIHtcclxuXHRcdFx0XHRvblVwKHVwRXZ0KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25Nb3VzZVVwKTtcclxuXHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUpO1xyXG5cdFx0fVxyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUpO1xyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uTW91c2VVcCk7XHJcblx0fVxyXG5cclxuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBvbk1vdXNlRG93bik7XHJcblxyXG59XHJcblxyXG5jb25zdCByb3VuZCA9ICh2YWx1ZTogbnVtYmVyLCBzdGVwOiBudW1iZXIpID0+IHtcclxuXHRjb25zdCBwcmVjaXNpb24gPSB4ID0+ICsoICh4LnRvU3RyaW5nKCkuaW5jbHVkZXMoJy4nKSkgPyAoeC50b1N0cmluZygpLnNwbGl0KCcuJykucG9wKCkubGVuZ3RoKSA6ICgwKSApO1xyXG5cdGxldCByb3VuZGVkOiBzdHJpbmcgPSAoTWF0aC5yb3VuZCh2YWx1ZSAvIHN0ZXApICogc3RlcCkudG9GaXhlZChwcmVjaXNpb24oc3RlcCkpO1xyXG5cdHJldHVybiByb3VuZGVkO1xyXG59XHJcblxyXG5jb25zdCBzZXRMaW1pdCA9ICh2YWx1ZTogbnVtYmVyLCBtaW46IG51bWJlciwgbWF4OiBudW1iZXIpID0+IHtcclxuXHRpZiAodmFsdWUgPiBtYXgpIHtcclxuXHRcdHZhbHVlID0gbWF4O1xyXG5cdH0gZWxzZSBpZiAodmFsdWUgPCBtaW4pIHtcclxuXHRcdHZhbHVlID0gbWluO1xyXG5cdH1cclxuXHRyZXR1cm4gdmFsdWU7XHJcbn1cclxuXHJcbmNvbnN0IHNldFJhbmdlU3R5bGUgPSAocmFuZ2U6IEhUTUxFbGVtZW50LCBtaW46IG51bWJlciwgbWF4OiBudW1iZXIsIGlzVmVydGljYWw6IGJvb2xlYW4pID0+IHtcclxuXHRpZiAoaXNWZXJ0aWNhbCkge1xyXG5cdFx0cmFuZ2Uuc3R5bGUudG9wID0gYCR7bWlufXB4YDtcclxuXHRcdHJhbmdlLnN0eWxlLmhlaWdodCA9IGAkeyhtYXggLSBtaW4pfXB4YDtcclxuXHR9IGVsc2Uge1xyXG5cdFx0cmFuZ2Uuc3R5bGUubGVmdCA9IGAke21pbn1weGA7XHJcblx0XHRyYW5nZS5zdHlsZS53aWR0aCA9IGAkeyhtYXggLSBtaW4pfXB4YDtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCB7c2V0TW91c2VIYW5kbGVyLCByb3VuZCwgc2V0TGltaXQsIHNldFJhbmdlU3R5bGV9OyIsImltcG9ydCB7U2NhbGV9IGZyb20gJy4vc2NhbGUudHMnO1xyXG5pbXBvcnQge1ZpZXd9IGZyb20gJy4vdmlldy50cyc7XHJcbmltcG9ydCB7UHJlc2VudGVyfSBmcm9tICcuL3ByZXNlbnRlci50cyc7XHJcblxyXG5pbXBvcnQge3NsaWRlckRhdGExLCBzbGlkZXJEYXRhMn0gZnJvbSAnLi9kYXRhLnRzJztcclxuXHJcbmNvbnN0IHByZXNlbnRlcjEgPSBuZXcgUHJlc2VudGVyKHNsaWRlckRhdGExKTtcclxuY29uc3QgcHJlc2VudGVyMiA9IG5ldyBQcmVzZW50ZXIoc2xpZGVyRGF0YTIpO1xyXG4vLyBjb25zb2xlLmxvZyhwcmVzZW50ZXIxKTtcclxuXHJcbiIsImNvbnN0IGluaXRWaWV3TWFya3VwID0gKHdyYXA6IHN0cmluZywgdmVydGljYWw6IGJvb2xlYW4pID0+IHtcclxuXHRjb25zdCBjb250b2xNYXJrdXA6IHN0cmluZyA9IGA8ZGl2IGNsYXNzPVwidHMtc2xpZGVyX19jb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0cy1zbGlkZXJfX2JhclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidHMtc2xpZGVyX190b2dnbGUgdHMtc2xpZGVyX190b2dnbGUtLW1pblwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0cy1zbGlkZXJfX3RvZ2dsZS12YWx1ZSB0cy1zbGlkZXJfX3RvZ2dsZS12YWx1ZS0tbWluXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidHMtc2xpZGVyX190b2dnbGUgdHMtc2xpZGVyX190b2dnbGUtLW1heFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0cy1zbGlkZXJfX3RvZ2dsZS12YWx1ZSB0cy1zbGlkZXJfX3RvZ2dsZS12YWx1ZS0tbWF4XCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidHMtc2xpZGVyX19yYW5nZVwiPjwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+YDtcclxuXHRjb25zdCBjb250cm9sV3JhcDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHdyYXApO1xyXG5cdGNvbnRyb2xXcmFwLmlubmVySFRNTCA9IGNvbnRvbE1hcmt1cDtcclxuICBjb25zdCBkaXYgPSBjb250cm9sV3JhcC5xdWVyeVNlbGVjdG9yQWxsKCdkaXYnKTtcclxuICBpZiAodmVydGljYWwpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGl2Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGZpcnN0Q2xhc3M6IHN0cmluZyA9IGRpdltpXS5jbGFzc0xpc3RbMF07XHJcbiAgICAgIGNvbnN0IHZlcnRpY2FsQ2xhc3M6IHN0cmluZyA9IGZpcnN0Q2xhc3MgKyAnLS12ZXJ0aWNhbCc7XHJcbiAgICAgIGRpdltpXS5jbGFzc0xpc3QuYWRkKHZlcnRpY2FsQ2xhc3MpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgbWFya3VwID0gKHNsaWRlcjogSFRNTEVsZW1lbnQpID0+IHtcclxuICBpbnRlcmZhY2UgTWFya3VwIHtcclxuICAgIG1pbjogSFRNTEVsZW1lbnQ7XHJcbiAgICBtYXg6IEhUTUxFbGVtZW50O1xyXG4gICAgcmFuZ2U6IEhUTUxFbGVtZW50O1xyXG4gICAgYmFyOiBIVE1MRWxlbWVudDtcclxuICAgIG1pblRhYjogSFRNTEVsZW1lbnQ7XHJcbiAgICBtYXhUYWI6IEhUTUxFbGVtZW50O1xyXG4gIH1cclxuICBsZXQgbWFya3VwOiBNYXJrdXAgPSB7ICBcclxuICAgICBtaW46IHNsaWRlci5xdWVyeVNlbGVjdG9yKCcudHMtc2xpZGVyX190b2dnbGUtLW1pbicpLFxyXG4gICAgIG1heDogc2xpZGVyLnF1ZXJ5U2VsZWN0b3IoJy50cy1zbGlkZXJfX3RvZ2dsZS0tbWF4JyksXHJcbiAgICAgcmFuZ2U6IHNsaWRlci5xdWVyeVNlbGVjdG9yKCcudHMtc2xpZGVyX19yYW5nZScpLFxyXG4gICAgIGJhcjogc2xpZGVyLnF1ZXJ5U2VsZWN0b3IoJy50cy1zbGlkZXJfX2JhcicpLFxyXG4gICAgIG1pblRhYjogc2xpZGVyLnF1ZXJ5U2VsZWN0b3IoJy50cy1zbGlkZXJfX3RvZ2dsZS12YWx1ZS0tbWluJyksXHJcbiAgICAgbWF4VGFiOiBzbGlkZXIucXVlcnlTZWxlY3RvcignLnRzLXNsaWRlcl9fdG9nZ2xlLXZhbHVlLS1tYXgnKVxyXG4gIH1cclxuICByZXR1cm4gbWFya3VwO1xyXG59XHJcblxyXG5leHBvcnQge2luaXRWaWV3TWFya3VwLCBtYXJrdXB9OyIsImltcG9ydCB7RGF0YX0gZnJvbSAnLi9kYXRhLnRzJztcclxuaW1wb3J0IHtWYWx1ZSwgVGFiVGV4dH0gZnJvbSAnLi92aWV3LnRzJztcclxuaW1wb3J0IHtzZXRNb3VzZUhhbmRsZXIsIHJvdW5kfSBmcm9tICcuL2Z1bmN0aW9ucy50cyc7XHJcblxyXG5cclxuY2xhc3MgTW9kZWwge1xyXG5cclxuXHRkYXRhOiBEYXRhO1xyXG5cdG1pbklucHV0OiBhbnk7XHJcblx0bWF4SW5wdXQ6IGFueTtcclxuXHR2YWx1ZTogVmFsdWU7XHJcblx0cHJlY2VudDogVmFsdWU7XHJcblx0dGFiVGV4dDogVGFiVGV4dDtcclxuXHRvYnNlcnZlcjogSFRNTEVsZW1lbnQ7XHJcblx0bWluOiBudW1iZXI7XHJcblx0bWF4OiBudW1iZXI7XHJcblx0c2NhbGU6IHN0cmluZ1tdO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihkYXRhKSB7XHJcblx0XHR0aGlzLmRhdGEgPSBkYXRhO1xyXG5cdFx0dGhpcy50YWJUZXh0ID0ge1xyXG5cdFx0XHRtaW46ICcnLFxyXG5cdFx0XHRtYXg6ICcnXHJcblx0XHR9XHJcblx0XHR0aGlzLnZhbHVlID0ge1xyXG5cdFx0XHRtaW46IDAsXHJcblx0XHRcdG1heDogMFxyXG5cdFx0fVxyXG5cdFx0dGhpcy5wcmVjZW50ID0ge1xyXG5cdFx0XHRtaW46IDAsXHJcblx0XHRcdG1heDogMFxyXG5cdFx0fVxyXG5cdFx0dGhpcy5zY2FsZSA9IFtdO1xyXG5cdFx0dGhpcy5vYnNlcnZlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0V2ZW50Jyk7XHJcblx0XHR0aGlzLmluaXQoKTtcclxuXHRcdHRoaXMuc2V0U2NhbGUoKTtcclxuXHRcdHRoaXMuYWRkTGlzdGVuZXIoKTtcclxuXHRcdHRoaXMuY2hhbmdlSW5wdXQoKTtcclxuXHR9XHJcblxyXG5cdHNldElucHV0KCkge1xyXG5cdFx0dGhpcy5taW5JbnB1dC52YWx1ZSA9IHRoaXMudGFiVGV4dC5taW47XHJcblx0XHR0aGlzLm1heElucHV0LnZhbHVlID0gdGhpcy50YWJUZXh0Lm1heDtcclxuXHRcdC8vIGNvbnNvbGUubG9nKCdzZXQnKTtcclxuXHR9XHJcblxyXG5cdHNldEFycmF5VmFsdWUoKSB7XHJcblx0XHRsZXQgbWluID0gTWF0aC5yb3VuZCh0aGlzLnByZWNlbnQubWluICogKHRoaXMuZGF0YS5hcnJheS5sZW5ndGggLSAxKSk7XHJcblx0XHRsZXQgbWF4ID0gTWF0aC5yb3VuZCh0aGlzLnByZWNlbnQubWF4ICogKHRoaXMuZGF0YS5hcnJheS5sZW5ndGggLSAxKSk7XHJcblx0XHR0aGlzLnRhYlRleHQubWluID0gdGhpcy5kYXRhLmFycmF5W21pbl07XHJcblx0XHR0aGlzLnRhYlRleHQubWF4ID0gdGhpcy5kYXRhLmFycmF5W21heF07XHJcblx0XHR0aGlzLnNldElucHV0KCk7XHJcblx0fVxyXG5cclxuXHRpbml0KCkge1xyXG5cdFx0aWYgKHRoaXMuZGF0YS5pc0FycmF5KSB7XHJcblx0XHRcdHRoaXMub2JzZXJ2ZXIuYWRkRXZlbnRMaXN0ZW5lcignc2V0UHJlY2VudCcsICgpID0+IHtcclxuXHRcdFx0XHR0aGlzLnNldEFycmF5VmFsdWUoKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLnRhYlRleHQubWluID0gcm91bmQodGhpcy5kYXRhLm1pblRvZ2dsZVZhbHVlLCB0aGlzLmRhdGEuc3RlcCk7XHJcblx0XHRcdHRoaXMudGFiVGV4dC5tYXggPSByb3VuZCh0aGlzLmRhdGEubWF4VG9nZ2xlVmFsdWUsIHRoaXMuZGF0YS5zdGVwKTtcclxuXHRcdH1cclxuXHRcdHRoaXMubWluSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIHRoaXMuZGF0YS5taW5JbnB1dElkKTtcclxuXHRcdHRoaXMubWF4SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIHRoaXMuZGF0YS5tYXhJbnB1dElkKTtcclxuXHRcdHRoaXMuc2V0SW5wdXQoKTtcclxuXHRcdC8vIGZvciAobGV0IGtleSBpbiB0aGlzLm1pbklucHV0KSB7XHJcblx0XHQvLyBcdGNvbnNvbGUubG9nKGtleSArICc6JyArIHRoaXMubWluSW5wdXRba2V5XSk7XHJcblx0XHQvLyB9XHJcblx0XHQvLyB0aGlzLm1pbklucHV0LnZhbHVlID0gJyEhISEnO1xyXG5cdFx0Ly8gY29uc29sZS5sb2codGhpcy5taW5JbnB1dC52YWx1ZSk7XHJcblx0XHQvLyB0aGlzLm1pbklucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ3VuZm9jdXMnLCAoKSA9PiB7XHJcblx0XHQvLyBcdGNvbnNvbGUubG9nKDIyMik7XHJcblx0XHQvLyB9KTtcclxuXHR9XHJcblxyXG5cdHNldFNjYWxlKCkge1xyXG5cdFx0aWYgKHRoaXMuZGF0YS5pc0FycmF5KSB7XHJcblx0XHRcdGlmICh0aGlzLmRhdGEuaXNTY2FsZSkge1xyXG5cdFx0XHRcdHRoaXMuc2NhbGUgPSB0aGlzLmRhdGEuYXJyYXk7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmICh0aGlzLmRhdGEuaXNTY2FsZSkge1xyXG5cdFx0XHRcdGxldCBxdWFudGl0eSA9IHRoaXMuZGF0YS5zY2FsZVF1YW50aXR5O1xyXG5cdFx0XHRcdGlmIChxdWFudGl0eSA8IDIpIHtcclxuXHRcdFx0XHRcdHF1YW50aXR5ID0gMjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBxdWFudGl0eTsgaSsrKSB7XHJcblx0XHRcdFx0XHRsZXQgdGV4dFZhbHVlOiBudW1iZXIgPSBNYXRoLnJvdW5kKCh0aGlzLmRhdGEubWluVmFsdWUgKyAodGhpcy5kYXRhLm1heFZhbHVlIC0gdGhpcy5kYXRhLm1pblZhbHVlKSAvIChxdWFudGl0eSAtIDEpICogaSkgLyB0aGlzLmRhdGEuc3RlcCkgKiB0aGlzLmRhdGEuc3RlcDtcclxuXHRcdFx0XHRcdGxldCB0ZXh0OiBzdHJpbmcgPSByb3VuZCh0ZXh0VmFsdWUsIHRoaXMuZGF0YS5zdGVwKTtcclxuXHRcdFx0XHRcdHRoaXMuc2NhbGUucHVzaCh0ZXh0KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGFkZExpc3RlbmVyKCkge1xyXG5cdFx0dGhpcy5vYnNlcnZlci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2VWYWx1ZScsICgpID0+IHtcclxuXHRcdFx0aWYgKHRoaXMuZGF0YS5pc0FycmF5KSB7XHJcblx0XHRcdFx0dGhpcy5zZXRBcnJheVZhbHVlKCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy50YWJUZXh0Lm1pbiA9IHJvdW5kKHRoaXMudmFsdWUubWluLCB0aGlzLmRhdGEuc3RlcCk7XHJcblx0XHRcdFx0dGhpcy50YWJUZXh0Lm1heCA9IHJvdW5kKHRoaXMudmFsdWUubWF4LCB0aGlzLmRhdGEuc3RlcCk7XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5zZXRJbnB1dCgpO1xyXG5cdFx0XHQvLyBjb25zb2xlLmxvZyh0aGlzLm1pbklucHV0LnJlYWRvbmx5KTtcclxuXHRcdFx0dGhpcy5vYnNlcnZlci5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnY2hhbmdlVGFiVGV4dCcpKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRjaGFuZ2VJbnB1dCgpIHtcclxuXHRcdHRoaXMubWluSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHtcclxuXHRcdFx0dGhpcy52YWx1ZS5taW4gPSArdGhpcy5taW5JbnB1dC52YWx1ZTtcclxuXHRcdFx0dGhpcy5vYnNlcnZlci5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnY2hhbmdlSW5wdXQnKSk7XHJcblx0XHR9KTtcclxuXHRcdHRoaXMubWF4SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHtcclxuXHRcdFx0dGhpcy52YWx1ZS5tYXggPSArdGhpcy5tYXhJbnB1dC52YWx1ZTtcclxuXHRcdFx0dGhpcy5vYnNlcnZlci5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnY2hhbmdlSW5wdXQnKSk7XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCB7TW9kZWx9OyIsImltcG9ydCB7VmlldywgVmFsdWUsIFRhYlRleHR9IGZyb20gJy4vdmlldy50cyc7XHJcbmltcG9ydCB7RGF0YX0gZnJvbSAnLi9kYXRhLnRzJztcclxuaW1wb3J0IHtNb2RlbH0gZnJvbSAnLi9tb2RlbC50cyc7XHJcbmltcG9ydCB7c2V0TW91c2VIYW5kbGVyLCByb3VuZH0gZnJvbSAnLi9mdW5jdGlvbnMudHMnO1xyXG5cclxuY29uc3QgdG9WaWV3ID0gKHZhbHVlOiBudW1iZXIsIG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcikgPT4gKHZhbHVlIC0gbWluKSAvIChtYXggLSBtaW4pO1xyXG5jb25zdCB0b01vZGVsID0gKHZhbHVlOiBudW1iZXIsIG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcikgPT4gKG1pbiArIChtYXggLSBtaW4pICogdmFsdWUpO1xyXG5cclxuY2xhc3MgUHJlc2VudGVyIHtcclxuXHJcblx0ZGF0YTogRGF0YTtcclxuXHR2aWV3OiBWaWV3O1xyXG5cdG1vZGVsOiBNb2RlbDtcclxuXHRtYXg6IG51bWJlcjtcclxuXHRtaW46IG51bWJlcjtcclxuXHR2YWx1ZTogVmFsdWU7XHJcblx0Ly8gdmlld1ZhbHVlOiBWYWx1ZTtcclxuXHQvLyBtb2RlbFZhbHVlOiBWYWx1ZTtcclxuXHRtb2RlbFRhYlRleHQ6IFRhYlRleHQ7XHJcblxyXG5cdGNvbnN0cnVjdG9yKGRhdGEpIHtcclxuXHRcdHRoaXMuZGF0YSA9IGRhdGE7XHJcblx0XHR0aGlzLnZhbHVlID0ge1xyXG5cdFx0XHRtaW46IHRoaXMuZGF0YS5taW5Ub2dnbGVWYWx1ZSxcclxuXHRcdFx0bWF4OiB0aGlzLmRhdGEubWF4VG9nZ2xlVmFsdWVcclxuXHRcdH1cclxuXHRcdHRoaXMuaW5pdCgpO1xyXG5cdFx0dGhpcy5vbk1vdmVUb2dnbGUoKTtcclxuXHRcdHRoaXMub25DaGFuZ2VUYWJUZXh0KCk7XHJcblx0XHR0aGlzLm9uQ2FuZ2VJbnB1dCgpO1xyXG5cdH1cclxuXHJcblx0c2V0VGFiVGV4dCgpIHtcclxuXHRcdHRoaXMudmlldy52aWV3VGFiVGV4dC5taW4gPSB0aGlzLm1vZGVsLnRhYlRleHQubWluO1xyXG5cdFx0dGhpcy52aWV3LnZpZXdUYWJUZXh0Lm1heCA9IHRoaXMubW9kZWwudGFiVGV4dC5tYXg7XHJcblx0fVxyXG5cclxuXHRpbml0U2NhbGUoKSB7XHJcblx0XHR0aGlzLnZpZXcuc2NhbGUgPSB0aGlzLm1vZGVsLnNjYWxlO1xyXG5cdFx0dGhpcy52aWV3LmNvbnRhaW5lci5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnaW5pdFNjYWxlJykpO1xyXG5cdH1cclxuXHJcblx0aW5pdCgpIHtcclxuXHRcdHRoaXMudmlldyA9IG5ldyBWaWV3KHRoaXMuZGF0YSk7XHJcblx0XHR0aGlzLm1vZGVsID0gbmV3IE1vZGVsKHRoaXMuZGF0YSk7XHJcblx0XHR0aGlzLmluaXRTY2FsZSgpO1xyXG5cdFx0dGhpcy52aWV3LnZpZXdWYWx1ZS5taW4gPSB0b1ZpZXcodGhpcy52YWx1ZS5taW4sIHRoaXMuZGF0YS5taW5WYWx1ZSwgdGhpcy5kYXRhLm1heFZhbHVlKTtcclxuXHRcdHRoaXMudmlldy52aWV3VmFsdWUubWF4ID0gdG9WaWV3KHRoaXMudmFsdWUubWF4LCB0aGlzLmRhdGEubWluVmFsdWUsIHRoaXMuZGF0YS5tYXhWYWx1ZSk7XHJcblx0XHR0aGlzLm1vZGVsLnByZWNlbnQgPSB0aGlzLnZpZXcudmlld1ZhbHVlO1xyXG5cdFx0dGhpcy5tb2RlbC5vYnNlcnZlci5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnc2V0UHJlY2VudCcpKTtcclxuXHRcdHRoaXMuc2V0VGFiVGV4dCgpO1xyXG5cdFx0dGhpcy52aWV3LmNvbnRhaW5lci5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnaW5pdFZhbHVlJykpO1xyXG5cclxuXHRcdHRoaXMudmlldy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlVmFsdWUnLCAoKSA9PiB7XHJcblx0XHRcdHRoaXMubW9kZWwub2JzZXJ2ZXIuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2NoYW5nZVZhbHVlJykpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRvbk1vdmVUb2dnbGUoKSB7XHJcblx0XHRjb25zdCBvbkNoYW5nZVZpZXcgPSAoKSA9PiB7XHJcblx0XHRcdHRoaXMubW9kZWwudmFsdWUubWluID0gdG9Nb2RlbCh0aGlzLnZpZXcudmlld1ZhbHVlLm1pbiwgdGhpcy5kYXRhLm1pblZhbHVlLCB0aGlzLmRhdGEubWF4VmFsdWUpO1xyXG5cdFx0XHR0aGlzLm1vZGVsLnZhbHVlLm1heCA9IHRvTW9kZWwodGhpcy52aWV3LnZpZXdWYWx1ZS5tYXgsIHRoaXMuZGF0YS5taW5WYWx1ZSwgdGhpcy5kYXRhLm1heFZhbHVlKTtcclxuXHRcdFx0dGhpcy5tb2RlbC5vYnNlcnZlci5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnY2hhbmdlVmFsdWUnKSk7XHJcblx0XHRcdC8vIGNvbnNvbGUubG9nKHRoaXMubW9kZWwudmFsdWUpO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy52aWV3LmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdtb3ZlVG9nZ2xlJywgb25DaGFuZ2VWaWV3KTtcclxuXHR9XHJcblxyXG5cdG9uQ2hhbmdlVGFiVGV4dCgpIHtcclxuXHRcdHRoaXMubW9kZWwub2JzZXJ2ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlVGFiVGV4dCcsICgpID0+IHtcclxuXHRcdFx0dGhpcy5zZXRUYWJUZXh0KCk7XHJcblx0XHRcdHRoaXMudmlldy5jb250YWluZXIuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2NoYW5nZVRhYicpKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRvbkNhbmdlSW5wdXQoKSB7XHJcblx0XHR0aGlzLm1vZGVsLm9ic2VydmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZUlucHV0JywgKCkgPT4ge1xyXG5cdFx0XHR0aGlzLnZhbHVlLm1pbiA9ICt0aGlzLm1vZGVsLnZhbHVlLm1pbjtcclxuXHRcdFx0dGhpcy52YWx1ZS5tYXggPSArdGhpcy5tb2RlbC52YWx1ZS5tYXg7XHJcblx0XHRcdHRoaXMudmlldy52aWV3VmFsdWUubWluID0gdG9WaWV3KHRoaXMudmFsdWUubWluLCB0aGlzLmRhdGEubWluVmFsdWUsIHRoaXMuZGF0YS5tYXhWYWx1ZSk7XHJcblx0XHRcdHRoaXMudmlldy52aWV3VmFsdWUubWF4ID0gdG9WaWV3KHRoaXMudmFsdWUubWF4LCB0aGlzLmRhdGEubWluVmFsdWUsIHRoaXMuZGF0YS5tYXhWYWx1ZSk7XHJcblx0XHRcdHRoaXMudmlldy5jb250YWluZXIuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2luaXRWYWx1ZScpKTtcclxuXHRcdFx0dGhpcy52aWV3Lm9uVmlld0NhbmdlKCk7XHJcblx0XHRcdHRoaXMudmlldy5zZXRUb2dnbGUoKTtcclxuXHRcdFx0Ly8gdGhpcy52aWV3Lm1pblRvZ2dsZUVsZW0uc3R5bGUubGVmdCA9IHRoaXMudmlldy52aWV3VmFsdWUubWluICogdGhpcy52aWV3LnNpemUgKyAncHgnO1xyXG5cdFx0XHQvLyB0aGlzLnZpZXcudmlld1RhYlRleHQubWluID0gdGhpcy5tb2RlbC50YWJUZXh0Lm1pbjtcclxuXHRcdFx0Ly8gY29uc29sZS5sb2codGhpcy52aWV3LnZpZXdWYWx1ZS5taW4pO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQge3RvVmlldywgdG9Nb2RlbCwgUHJlc2VudGVyfTsiLCJpbXBvcnQge3JvdW5kfSBmcm9tICcuL2Z1bmN0aW9ucy50cyc7XHJcblxyXG5leHBvcnQgY2xhc3MgU2NhbGUge1xyXG5cclxuXHRzbGlkZXI6IEhUTUxFbGVtZW50O1xyXG5cdHNjYWxlOiBzdHJpbmdbXTtcclxuXHRpc1ZlcnRpY2FsOiBib29sZWFuO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihzbGlkZXIsIHNjYWxlLCBpc1ZlcnRpY2FsKSB7XHJcblx0XHR0aGlzLnNsaWRlciA9IHNsaWRlcjtcclxuXHRcdHRoaXMuc2NhbGUgPSBzY2FsZTtcclxuXHRcdHRoaXMuaXNWZXJ0aWNhbCA9IGlzVmVydGljYWw7XHJcblx0XHR0aGlzLmNyZWF0ZUl0ZW0oKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZUl0ZW0oKSB7XHJcblx0XHRjb25zdCBiYXI6IEhUTUxFbGVtZW50ID0gdGhpcy5zbGlkZXIucXVlcnlTZWxlY3RvcignLnRzLXNsaWRlcl9fYmFyJyk7XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2NhbGUubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0Y29uc3Qgc2NhbGVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0XHRcdHNjYWxlSXRlbS5jbGFzc0xpc3QuYWRkKCd0cy1zbGlkZXJfX3NjYWxlLWl0ZW0nKTtcclxuXHRcdFx0c2NhbGVJdGVtLnRleHRDb250ZW50ID0gdGhpcy5zY2FsZVtpXTtcclxuXHRcdFx0aWYgKHRoaXMuaXNWZXJ0aWNhbCkge1xyXG5cdFx0XHRcdHNjYWxlSXRlbS5jbGFzc0xpc3QuYWRkKCd0cy1zbGlkZXJfX3NjYWxlLWl0ZW0tLXZlcnRpY2FsJyk7XHJcblx0XHRcdFx0c2NhbGVJdGVtLnN0eWxlLnRvcCA9IGAke2Jhci5vZmZzZXRIZWlnaHQgLyAodGhpcy5zY2FsZS5sZW5ndGggLSAxKSAqIGl9cHhgO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNjYWxlSXRlbS5zdHlsZS5sZWZ0ID0gYCR7YmFyLm9mZnNldFdpZHRoIC8gKHRoaXMuc2NhbGUubGVuZ3RoIC0gMSkgKiBpfXB4YDtcclxuXHRcdFx0fVx0XHJcblx0XHRcdGJhci5hcHBlbmQoc2NhbGVJdGVtKTtcclxuXHRcdH1cclxuXHR9XHJcbn0iLCJpbXBvcnQge1RvZ2dsZX0gZnJvbSAnLi90b2dnbGUudHMnO1xyXG5pbXBvcnQge1ZhbHVlfSBmcm9tICcuL3ZpZXcudHMnO1xyXG5pbXBvcnQge3NldE1vdXNlSGFuZGxlciwgc2V0UmFuZ2VTdHlsZX0gZnJvbSAnLi9mdW5jdGlvbnMudHMnO1xyXG5pbXBvcnQge0RhdGF9IGZyb20gJy4vZGF0YS50cyc7XHJcbmltcG9ydCB7bWFya3VwfSBmcm9tICcuL2luaXQtdmlldy1tYXJrdXAudHMnO1xyXG5cclxuZnVuY3Rpb24gc2V0Vmlld1ZhbHVlKHNsaWRlcjogSFRNTEVsZW1lbnQsIGRhdGE6IERhdGEpIHtcclxuXHJcblx0bGV0IGlzVmVydGljYWwgPSBkYXRhLmlzVmVydGljYWw7XHJcblx0bGV0IGlzUmFuZ2UgPSBkYXRhLmlzUmFuZ2U7XHJcblx0bGV0IGlzVGFiID0gZGF0YS5pc1RhYjtcclxuXHJcblx0bGV0IHByZWNlbnQ6IFZhbHVlID0ge1xyXG5cdFx0bWluOiAwLFxyXG5cdFx0bWF4OiAwXHJcblx0fTtcclxuXHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XHJcblx0XHRjb25zdCBtaW5Ub2dnbGVFbGVtOiBIVE1MRWxlbWVudCA9IG1hcmt1cChzbGlkZXIpLm1pbjtcclxuXHRcdGNvbnN0IG1heFRvZ2dsZUVsZW06IEhUTUxFbGVtZW50ID0gbWFya3VwKHNsaWRlcikubWF4O1xyXG5cdFx0Y29uc3QgcmFuZ2U6IEhUTUxFbGVtZW50ID0gbWFya3VwKHNsaWRlcikucmFuZ2U7XHJcblx0XHRjb25zdCBiYXJFbGVtOiBIVE1MRWxlbWVudCA9IG1hcmt1cChzbGlkZXIpLmJhcjtcclxuXHRcdGNvbnN0IGJhcldpZHRoOiBudW1iZXIgPSBiYXJFbGVtLm9mZnNldFdpZHRoO1xyXG5cdFx0Y29uc3QgYmFySGVpZ2h0OiBudW1iZXIgPSBiYXJFbGVtLm9mZnNldEhlaWdodDtcclxuXHRcdGxldCBiYXJNYXg7XHJcblx0XHRsZXQgdG9nZ2xlTWF4T2Zmc2V0O1xyXG5cdFx0bGV0IHRvZ2dsZU1pbk9mZnNldDtcclxuXHRcdGNvbnN0IHNldFByZWNlbnQgPSAodmFsdWUpID0+IHZhbHVlIC8gYmFyTWF4O1xyXG5cclxuXHRcdGlmICghaXNSYW5nZSkge1xyXG5cdFx0XHRtaW5Ub2dnbGVFbGVtLmhpZGRlbiA9IHRydWU7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKGlzVmVydGljYWwpIHtcclxuXHRcdFx0YmFyTWF4ID0gYmFySGVpZ2h0O1xyXG5cdFx0XHR0b2dnbGVNYXhPZmZzZXQgPSBtYXhUb2dnbGVFbGVtLm9mZnNldFRvcDtcclxuXHRcdFx0dG9nZ2xlTWluT2Zmc2V0ID0gbWluVG9nZ2xlRWxlbS5vZmZzZXRUb3A7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRiYXJNYXggPSBiYXJXaWR0aDtcclxuXHRcdFx0dG9nZ2xlTWF4T2Zmc2V0ID0gbWF4VG9nZ2xlRWxlbS5vZmZzZXRMZWZ0O1xyXG5cdFx0XHR0b2dnbGVNaW5PZmZzZXQgPSBtaW5Ub2dnbGVFbGVtLm9mZnNldExlZnQ7XHJcblx0XHR9XHJcblxyXG5cdFx0bGV0IHRvZ2dsZU1heCA9IG5ldyBUb2dnbGUobWF4VG9nZ2xlRWxlbSwgdG9nZ2xlTWluT2Zmc2V0LCBiYXJNYXgsIHRvZ2dsZU1heE9mZnNldCwgaXNWZXJ0aWNhbCk7XHJcblx0XHRsZXQgdG9nZ2xlTWluID0gbmV3IFRvZ2dsZShtaW5Ub2dnbGVFbGVtLCAwLCB0b2dnbGVNYXhPZmZzZXQsIHRvZ2dsZU1pbk9mZnNldCwgaXNWZXJ0aWNhbCk7XHJcblx0XHR0b2dnbGVNYXgubW92ZVRvZ2dsZSgpO1xyXG5cdFx0dG9nZ2xlTWluLm1vdmVUb2dnbGUoKTtcclxuXHRcdHByZWNlbnQubWluID0gc2V0UHJlY2VudCh0b2dnbGVNaW4udmFsdWUpO1xyXG5cdFx0cHJlY2VudC5tYXggPSBzZXRQcmVjZW50KHRvZ2dsZU1heC52YWx1ZSk7XHJcblxyXG5cdFx0aWYgKCFpc1JhbmdlKSB7XHJcblx0XHRcdHRvZ2dsZU1pbi52YWx1ZSA9IDA7XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3Qgc2V0UmFuZ2UgPSAoKSA9PiB7XHJcblx0XHRcdHRvZ2dsZU1heC5taW4gPSB0b2dnbGVNaW4udmFsdWU7XHJcblx0XHRcdHRvZ2dsZU1pbi5tYXggPSB0b2dnbGVNYXgudmFsdWU7XHJcblx0XHRcdHNldFJhbmdlU3R5bGUocmFuZ2UsIHRvZ2dsZU1pbi52YWx1ZSwgdG9nZ2xlTWF4LnZhbHVlLCBpc1ZlcnRpY2FsKTtcclxuXHRcdH1cclxuXHRcdHNldFJhbmdlKCk7XHJcblxyXG5cdFx0Y29uc3Qgb25Nb3VzZURvd25Db2luY2lkZW5jZSA9IChldnQpID0+IHtcclxuXHRcdFx0ZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdGxldCBjb2luY2lkZW5jZVRvZ2dsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cdFx0XHRtYXhUb2dnbGVFbGVtLmhpZGRlbiA9IHRydWU7XHJcblx0XHRcdGNvaW5jaWRlbmNlVG9nZ2xlID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludChldnQucGFnZVgsIGV2dC5wYWdlWSkuY2xhc3NMaXN0LmNvbnRhaW5zKCd0cy1zbGlkZXJfX3RvZ2dsZS0tbWluJyk7XHJcblx0XHRcdG1heFRvZ2dsZUVsZW0uaGlkZGVuID0gZmFsc2U7XHJcblx0XHRcdGxldCBzdGFydFZhbHVlOiBudW1iZXI7XHJcblx0XHRcdHN0YXJ0VmFsdWUgPSB0b2dnbGVNYXgudmFsdWU7XHJcblxyXG5cdFx0XHRjb25zdCBvbk1vdXNlTW92ZSA9IChtb3ZlRXZ0KSA9PiB7XHJcblx0XHRcdFx0bW92ZUV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdGlmIChjb2luY2lkZW5jZVRvZ2dsZSkge1xyXG5cdFx0XHRcdFx0dG9nZ2xlTWluLm1vdXNlVmFsdWUgPSB0b2dnbGVNYXgubW91c2VWYWx1ZTtcclxuXHRcdFx0XHRcdHRvZ2dsZU1heC5pc0ZpeGVkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdHRvZ2dsZU1pbi5pc0ZpeGVkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdGlmICh0b2dnbGVNYXgubW91c2VWYWx1ZSA+IHN0YXJ0VmFsdWUpIHtcclxuXHRcdFx0XHRcdFx0dG9nZ2xlTWF4LmlzRml4ZWQgPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0dG9nZ2xlTWluLmlzRml4ZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0dG9nZ2xlTWF4LmlzRml4ZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHR0b2dnbGVNaW4uaXNGaXhlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0XHR0b2dnbGVNaW4ubW91c2VWYWx1ZSA9IHRvZ2dsZU1heC5tb3VzZVZhbHVlO1xyXG5cdFx0XHRcdFx0XHR0b2dnbGVNaW4udmFsdWUgPSB0b2dnbGVNYXgubW91c2VWYWx1ZTtcclxuXHRcdFx0XHRcdFx0aWYgKHRvZ2dsZU1pbi52YWx1ZSA8IDApIHtcclxuXHRcdFx0XHRcdFx0XHR0b2dnbGVNaW4udmFsdWUgPSAwO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdHRvZ2dsZU1pbi5zZXRTdHlsZSgpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0b2dnbGVNYXguaXNGaXhlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0dG9nZ2xlTWluLmlzRml4ZWQgPSBmYWxzZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0Y29uc3Qgb25Nb3VzZVVwID0gKHVwRXZ0KSA9PiB7XHJcblx0XHRcdFx0dXBFdnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHR0b2dnbGVNaW4ubW91c2VWYWx1ZSA9IHRvZ2dsZU1pbi52YWx1ZTtcclxuXHRcdFx0XHR0b2dnbGVNYXguaXNGaXhlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdHRvZ2dsZU1pbi5pc0ZpeGVkID0gZmFsc2U7XHJcblx0XHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uTW91c2VVcCk7XHJcblx0XHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKTtcclxuXHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uTW91c2VVcCk7XHJcblx0XHR9XHJcblxyXG5cdFx0bWF4VG9nZ2xlRWxlbS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBvbk1vdXNlRG93bkNvaW5jaWRlbmNlKTtcclxuXHJcblx0XHRjb25zdCBvbk1vdXNlTW92ZVByZWNlbnQgPSAobW92ZUV2dCkgPT4ge1xyXG5cdFx0XHRzZXRSYW5nZSgpO1xyXG5cdFx0XHRwcmVjZW50Lm1pbiA9IHNldFByZWNlbnQodG9nZ2xlTWluLnZhbHVlKTtcclxuXHRcdFx0cHJlY2VudC5tYXggPSBzZXRQcmVjZW50KHRvZ2dsZU1heC52YWx1ZSk7XHJcblx0XHR9XHJcblx0XHRzZXRNb3VzZUhhbmRsZXIobWF4VG9nZ2xlRWxlbSwgb25Nb3VzZU1vdmVQcmVjZW50KTtcclxuXHRcdHNldE1vdXNlSGFuZGxlcihtaW5Ub2dnbGVFbGVtLCBvbk1vdXNlTW92ZVByZWNlbnQpO1xyXG5cdH0pO1xyXG5yZXR1cm4gcHJlY2VudDtcclxufVxyXG5cclxuZXhwb3J0IHtzZXRWaWV3VmFsdWV9OyIsImltcG9ydCB7c2V0TGltaXR9IGZyb20gJy4vZnVuY3Rpb25zLnRzJztcclxuXHJcbmNvbnN0IHNldFRvZ2dsZVN0eWxlID0gKHRvZ2dsZTogSFRNTEVsZW1lbnQsIHZhbHVlOiBudW1iZXIsIHZlcnRpY2FsOiBib29sZWFuKSA9PiB7XHJcblx0XHRpZiAodmVydGljYWwpIHtcclxuXHRcdFx0dG9nZ2xlLnN0eWxlLnRvcCA9IGAke3ZhbHVlfXB4YDtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRvZ2dsZS5zdHlsZS5sZWZ0ID0gYCR7dmFsdWV9cHhgO1xyXG5cdH1cclxufVxyXG5cclxuY2xhc3MgVG9nZ2xlIHtcclxuXHJcblx0dG9nZ2xlOiBIVE1MRWxlbWVudDtcclxuXHRtaW46IG51bWJlcjtcclxuXHRtYXg6IG51bWJlcjtcclxuXHRtb3VzZVZhbHVlOiBudW1iZXI7XHJcblx0dmFsdWU6IG51bWJlcjtcclxuXHR2ZXJ0aWNhbDogYm9vbGVhbjtcclxuXHRpc0ZpeGVkOiBib29sZWFuO1xyXG5cclxuXHRjb25zdHJ1Y3Rvcih0b2dnbGUsIG1pbiwgbWF4LCB2YWx1ZSwgdmVydGljYWwpIHtcclxuXHRcdHRoaXMudG9nZ2xlID0gdG9nZ2xlO1xyXG5cdFx0dGhpcy5taW4gPSBtaW47XHJcblx0XHR0aGlzLm1heCA9IG1heDtcclxuXHRcdHRoaXMubW91c2VWYWx1ZSA9IHZhbHVlO1xyXG5cdFx0dGhpcy52YWx1ZSA9IHZhbHVlO1xyXG5cdFx0dGhpcy52ZXJ0aWNhbCA9IHZlcnRpY2FsO1xyXG5cdFx0dGhpcy5pc0ZpeGVkID0gZmFsc2U7XHJcblx0XHR0aGlzLnNldFN0eWxlKCk7XHJcblx0fVxyXG5cdHNldFN0eWxlKCkge1xyXG5cdFx0c2V0VG9nZ2xlU3R5bGUodGhpcy50b2dnbGUsIHRoaXMudmFsdWUsIHRoaXMudmVydGljYWwpO1xyXG5cdH1cclxuXHRtb3ZlVG9nZ2xlKCkge1xyXG5cdFx0Y29uc3Qgb25Nb3VzZURvd24gPSAoZXZ0KSA9PiB7XHJcblx0XHRcdGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRsZXQgc2hpZnRYOiBudW1iZXIgPSBldnQuY2xpZW50WCAtIHRoaXMudG9nZ2xlLm9mZnNldExlZnQ7XHJcblx0XHRcdGxldCBzaGlmdFk6IG51bWJlciA9IGV2dC5jbGllbnRZIC0gdGhpcy50b2dnbGUub2Zmc2V0VG9wO1xyXG5cdFx0XHRsZXQgc3RhcnRWYWx1ZTogbnVtYmVyID0gdGhpcy5tb3VzZVZhbHVlO1xyXG5cdFx0XHRjb25zdCBtb3ZlQXQgPSAocGFnZVgsIHBhZ2VZKSA9PiB7XHJcblx0XHRcdFx0aWYgKHRoaXMudmVydGljYWwpIHtcclxuXHRcdFx0XHRcdHRoaXMubW91c2VWYWx1ZSA9IHBhZ2VZIC0gc2hpZnRZO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0aGlzLm1vdXNlVmFsdWUgPSBwYWdlWCAtIHNoaWZ0WDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy52YWx1ZSA9IHRoaXMubW91c2VWYWx1ZTtcclxuXHRcdFx0XHR0aGlzLnZhbHVlID0gc2V0TGltaXQodGhpcy52YWx1ZSwgdGhpcy5taW4sIHRoaXMubWF4KTtcclxuXHRcdFx0XHRpZiAodGhpcy5pc0ZpeGVkKSB7XHJcblx0XHRcdFx0XHR0aGlzLnZhbHVlID0gc3RhcnRWYWx1ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy5zZXRTdHlsZSgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdG1vdmVBdChldnQucGFnZVgsIGV2dC5wYWdlWSk7XHJcblxyXG5cdFx0XHRjb25zdCBvbk1vdXNlTW92ZSA9IChtb3ZlRXZ0KSA9PiB7XHJcblx0XHRcdFx0bW92ZUF0KG1vdmVFdnQucGFnZVgsIG1vdmVFdnQuIHBhZ2VZKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRjb25zdCBvbk1vdXNlVXAgPSAodXBFdnQpID0+IHtcclxuXHRcdFx0XHR1cEV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdHRoaXMubW91c2VWYWx1ZSA9IHRoaXMudmFsdWU7XHJcblx0XHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uTW91c2VVcCk7XHJcblx0XHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKTtcclxuXHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uTW91c2VVcCk7XHJcblx0XHR9XHJcblx0XHR0aGlzLnRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBvbk1vdXNlRG93bik7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQge3NldFRvZ2dsZVN0eWxlLCBUb2dnbGV9OyIsImltcG9ydCB7aW5pdFZpZXdNYXJrdXB9IGZyb20gJy4vaW5pdC12aWV3LW1hcmt1cC50cyc7XHJcbmltcG9ydCB7U2NhbGV9IGZyb20gJy4vc2NhbGUudHMnO1xyXG5pbXBvcnQge3NldFZpZXdWYWx1ZX0gZnJvbSAnLi9zZXQtdmlldy12YWx1ZS50cyc7XHJcbmltcG9ydCB7RGF0YX0gZnJvbSAnLi9kYXRhLnRzJztcclxuaW1wb3J0IHtzZXRUb2dnbGVTdHlsZX0gZnJvbSAnLi90b2dnbGUudHMnO1xyXG5pbXBvcnQge3NldE1vdXNlSGFuZGxlciwgcm91bmR9IGZyb20gJy4vZnVuY3Rpb25zLnRzJztcclxuaW1wb3J0IHttYXJrdXB9IGZyb20gJy4vaW5pdC12aWV3LW1hcmt1cC50cyc7XHJcblxyXG5pbnRlcmZhY2UgVmFsdWUge1xyXG5cdG1pbjogbnVtYmVyO1xyXG5cdG1heDogbnVtYmVyO1xyXG59XHJcbmludGVyZmFjZSBUYWJUZXh0IHtcclxuXHRtaW46IHN0cmluZztcclxuXHRtYXg6IHN0cmluZztcclxufVxyXG5cclxuY2xhc3MgVmlldyB7XHJcblxyXG5cdGRhdGE6IERhdGE7XHJcblx0dmlld1ZhbHVlOiBWYWx1ZTtcclxuXHR2aWV3VGFiVGV4dDogVGFiVGV4dDtcclxuXHRjb250YWluZXI6IEhUTUxFbGVtZW50O1xyXG5cdG1pblRvZ2dsZUVsZW06IEhUTUxFbGVtZW50O1xyXG5cdG1heFRvZ2dsZUVsZW06IEhUTUxFbGVtZW50O1xyXG5cdG1pblRhYkVsZW06IEhUTUxFbGVtZW50O1xyXG5cdG1heFRhYkVsZW06IEhUTUxFbGVtZW50O1xyXG5cdHNpemU6IG51bWJlcjtcclxuXHRzY2FsZTogc3RyaW5nW107XHJcblxyXG5cdGNvbnN0cnVjdG9yKGRhdGEpIHtcclxuXHRcdHRoaXMuZGF0YSA9IGRhdGE7XHJcblx0XHR0aGlzLnZpZXdUYWJUZXh0ID0ge1xyXG5cdFx0XHRtaW46ICcnLFxyXG5cdFx0XHRtYXg6ICcnXHJcblx0XHR9XHJcblx0XHR0aGlzLnNjYWxlID0gW107XHJcblx0XHR0aGlzLmluaXRWaWV3KCk7XHJcblx0XHQvLyB0aGlzLm9uVmlld0NhbmdlKCk7XHJcblx0XHR0aGlzLnNldFRvZ2dsZSgpO1xyXG5cdFx0dGhpcy5vbk1vdmVUb2dnbGUoKTtcclxuXHRcdHRoaXMuYWRkU2NhbGUoKTtcclxuXHRcdHRoaXMuY2hhbmdlVGFiKCk7XHJcblx0fVxyXG5cclxuXHRpbml0VmlldygpIHtcclxuXHRcdGluaXRWaWV3TWFya3VwKHRoaXMuZGF0YS53cmFwSWQsIHRoaXMuZGF0YS5pc1ZlcnRpY2FsKTtcclxuXHRcdHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLmRhdGEud3JhcElkKS5xdWVyeVNlbGVjdG9yKCcudHMtc2xpZGVyX19jb250YWluZXInKTtcclxuXHRcdGlmICh0aGlzLmRhdGEuaXNWZXJ0aWNhbCkge1xyXG5cdFx0XHR0aGlzLnNpemUgPSB0aGlzLmNvbnRhaW5lci5vZmZzZXRIZWlnaHQ7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLnNpemUgPSB0aGlzLmNvbnRhaW5lci5vZmZzZXRXaWR0aDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHNldFRhYigpIHtcclxuXHRcdHRoaXMubWluVGFiRWxlbS50ZXh0Q29udGVudCA9IHRoaXMudmlld1RhYlRleHQubWluO1xyXG5cdFx0dGhpcy5tYXhUYWJFbGVtLnRleHRDb250ZW50ID0gdGhpcy52aWV3VGFiVGV4dC5tYXg7XHJcblx0fVxyXG5cclxuXHRzZXRUb2dnbGUoKSB7XHJcblx0XHR0aGlzLm1pblRvZ2dsZUVsZW0gPSBtYXJrdXAodGhpcy5jb250YWluZXIpLm1pbjtcclxuXHRcdHRoaXMubWF4VG9nZ2xlRWxlbSA9IG1hcmt1cCh0aGlzLmNvbnRhaW5lcikubWF4O1xyXG5cdFx0dGhpcy5taW5UYWJFbGVtID0gbWFya3VwKHRoaXMuY29udGFpbmVyKS5taW5UYWI7XHJcblx0XHR0aGlzLm1heFRhYkVsZW0gPSBtYXJrdXAodGhpcy5jb250YWluZXIpLm1heFRhYjtcclxuXHJcblx0XHR0aGlzLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdpbml0VmFsdWUnLCAoKSA9PiB7XHJcblx0XHRcdHNldFRvZ2dsZVN0eWxlKHRoaXMubWluVG9nZ2xlRWxlbSwgdGhpcy52aWV3VmFsdWUubWluICogdGhpcy5zaXplLCB0aGlzLmRhdGEuaXNWZXJ0aWNhbCk7XHJcblx0XHRcdHNldFRvZ2dsZVN0eWxlKHRoaXMubWF4VG9nZ2xlRWxlbSwgdGhpcy52aWV3VmFsdWUubWF4ICogdGhpcy5zaXplLCB0aGlzLmRhdGEuaXNWZXJ0aWNhbCk7XHJcblx0XHRcdHRoaXMuc2V0VGFiKCk7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0b25WaWV3Q2FuZ2UoKSB7XHJcblx0XHQvLyB0aGlzLnZpZXdWYWx1ZSA9IHNldFZpZXdWYWx1ZSh0aGlzLmNvbnRhaW5lciwgdGhpcy5kYXRhKTtcclxuXHR9XHJcblx0b25Nb3ZlVG9nZ2xlKCkge1xyXG5cdFx0dGhpcy52aWV3VmFsdWUgPSBzZXRWaWV3VmFsdWUodGhpcy5jb250YWluZXIsIHRoaXMuZGF0YSk7XHJcblx0XHR0aGlzLm9uVmlld0NhbmdlKCk7XHJcblx0XHRjb25zdCBvbk1vdXNlTW92ZSA9IChtb3ZlRXZ0KSA9PiB7XHJcblx0XHRcdHRoaXMuY29udGFpbmVyLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdtb3ZlVG9nZ2xlJykpO1xyXG5cdFx0fVxyXG5cdFx0c2V0TW91c2VIYW5kbGVyKHRoaXMuY29udGFpbmVyLCBvbk1vdXNlTW92ZSk7XHJcblx0fVxyXG5cclxuXHRhZGRTY2FsZSgpIHtcclxuXHRcdHRoaXMuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2luaXRTY2FsZScsICgpID0+IHtcclxuXHRcdFx0aWYgKHRoaXMuZGF0YS5pc1NjYWxlKSB7XHJcblx0XHRcdFx0Y29uc3Qgc2NhbGUgPSBuZXcgU2NhbGUodGhpcy5jb250YWluZXIsIHRoaXMuc2NhbGUsIHRoaXMuZGF0YS5pc1ZlcnRpY2FsKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRjaGFuZ2VUYWIoKSB7XHJcblx0XHR0aGlzLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2VUYWInLCAoKSA9PiB7XHJcblx0XHRcdHRoaXMuc2V0VGFiKCk7XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCB7VmlldywgVmFsdWUsIFRhYlRleHR9O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9