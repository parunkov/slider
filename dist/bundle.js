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
/*! exports provided: setMouseHandler, round, setLimit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMouseHandler", function() { return setMouseHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "round", function() { return round; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLimit", function() { return setLimit; });
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
const setRange = (range, min, max, isVertical) => {
    // console.log('Set Range');
    // toggleMax.min = toggleMin.value;
    // toggleMin.max = toggleMax.value;
    if (isVertical) {
        range.style.top = `${toggleMin.value}px`;
        range.style.height = `${(toggleMax.value - toggleMin.value)}px`;
    }
    else {
        range.style.left = `${toggleMin.value}px`;
        range.style.width = `${(toggleMax.value - toggleMin.value)}px`;
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
/*! exports provided: initViewMarkup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initViewMarkup", function() { return initViewMarkup; });
function initViewMarkup(wrap, vertical) {
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
}


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
            // console.log(this.minInput.value);
            this.value.min = +this.minInput.value;
            // console.log(this.value.min);
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
            // console.log('cvb');
            this.value.min = +this.model.value.min;
            // console.log(this.model.value);
            this.view.viewValue.min = toView(this.value.min, this.data.minValue, this.data.maxValue);
            this.view.container.dispatchEvent(new CustomEvent('initValue'));
            this.view.onViewCange();
            // this.view.setToggle();
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


function setViewValue(slider, data) {
    let isVertical = data.isVertical;
    let isRange = data.isRange;
    let isTab = data.isTab;
    let precent = {
        min: 0,
        max: 0
    };
    window.addEventListener('load', () => {
        const minToggleElem = slider.querySelector('.ts-slider__toggle--min');
        const maxToggleElem = slider.querySelector('.ts-slider__toggle--max');
        const range = slider.querySelector('.ts-slider__range');
        const barElem = slider.querySelector('.ts-slider__bar');
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
            console.log('Set Range');
            toggleMax.min = toggleMin.value;
            toggleMin.max = toggleMax.value;
            if (isVertical) {
                range.style.top = `${toggleMin.value}px`;
                range.style.height = `${(toggleMax.value - toggleMin.value)}px`;
            }
            else {
                range.style.left = `${toggleMin.value}px`;
                range.style.width = `${(toggleMax.value - toggleMin.value)}px`;
            }
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
        this.minToggleElem = this.container.querySelector('.ts-slider__toggle--min');
        this.maxToggleElem = this.container.querySelector('.ts-slider__toggle--max');
        this.minTabElem = this.container.querySelector('.ts-slider__toggle-value--min');
        this.maxTabElem = this.container.querySelector('.ts-slider__toggle-value--max');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Z1bmN0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luaXQtdmlldy1tYXJrdXAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9wcmVzZW50ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjYWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXQtdmlldy12YWx1ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdG9nZ2xlLnRzIiwid2VicGFjazovLy8uL3NyYy92aWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFB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QyxDQUFDO1lBQ3pGLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNmLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUNELFdBQVc7UUFDViw0REFBNEQ7SUFDN0QsQ0FBQztJQUNELFlBQVk7UUFDWCxJQUFJLENBQUMsU0FBUyxHQUFHLHVFQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLE1BQU0sV0FBVyxHQUFHLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDL0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsSUFBSSxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztRQUM3RCxDQUFDO1FBQ0QscUVBQWUsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCxRQUFRO1FBQ1AsSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsR0FBRyxFQUFFO1lBQ2pELElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ3RCLE1BQU0sS0FBSyxHQUFHLElBQUksK0NBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUMxRTtRQUNGLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELFNBQVM7UUFDUixJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxHQUFHLEVBQUU7WUFDakQsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2YsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0NBQ0Q7QUFFNkIiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJpbXBvcnQge3NldExpbWl0fSBmcm9tICcuL2Z1bmN0aW9ucy50cyc7XHJcblxyXG5pbnRlcmZhY2UgRGF0YSB7XHJcblx0d3JhcElkOiBzdHJpbmc7XHJcblx0bWluSW5wdXRJZDogc3RyaW5nO1xyXG5cdG1heElucHV0SWQ6IHN0cmluZztcclxuXHRpc0FycmF5OiBib29sZWFuO1xyXG5cdGFycmF5OiBzdHJpbmdbXTtcclxuXHRzdGVwOiBudW1iZXI7XHJcblx0bWluVmFsdWU6IG51bWJlcjtcclxuXHRtYXhWYWx1ZTogbnVtYmVyO1xyXG5cdG1pblRvZ2dsZVZhbHVlOiBudW1iZXI7XHJcblx0bWF4VG9nZ2xlVmFsdWU6IG51bWJlcjtcclxuXHRpc1JhbmdlOiBib29sZWFuO1xyXG5cdGlzVmVydGljYWw6IGJvb2xlYW47XHJcblx0aXNUYWI6IGJvb2xlYW47XHJcblx0aXNTY2FsZTogYm9vbGVhbjtcclxuXHRzY2FsZVF1YW50aXR5OiBudW1iZXI7XHJcbn1cclxuXHJcbmNvbnN0IHNsaWRlckRhdGExOiBEYXRhID0ge1xyXG5cdHdyYXBJZDogJyN0cy1zbGlkZXJfX3dyYXAtMScsXHJcblx0bWluSW5wdXRJZDogJ3BhZ2VfX2lucHV0LTExJyxcclxuXHRtYXhJbnB1dElkOiAncGFnZV9faW5wdXQtMTInLFxyXG5cdGlzQXJyYXk6IGZhbHNlLFxyXG5cdGFycmF5OiBbXSxcclxuXHRzdGVwOiAwLjAxLFxyXG5cdG1pblZhbHVlOiA3LFxyXG5cdG1heFZhbHVlOiAxMDUsXHJcblx0bWluVG9nZ2xlVmFsdWU6IDM5LjY3LFxyXG5cdG1heFRvZ2dsZVZhbHVlOiA3Mi4zMyxcclxuXHRpc1JhbmdlOiB0cnVlLFxyXG5cdGlzVmVydGljYWw6IGZhbHNlLFxyXG5cdGlzVGFiOiB0cnVlLFxyXG5cdGlzU2NhbGU6IHRydWUsXHJcblx0c2NhbGVRdWFudGl0eTogNFxyXG59XHJcbmNvbnN0IHNsaWRlckRhdGEyOiBEYXRhID0ge1xyXG5cdHdyYXBJZDogJyN0cy1zbGlkZXJfX3dyYXAtMicsXHJcblx0bWluSW5wdXRJZDogJ3BhZ2VfX2lucHV0LTIxJyxcclxuXHRtYXhJbnB1dElkOiAncGFnZV9faW5wdXQtMjInLFxyXG5cdGlzQXJyYXk6IHRydWUsXHJcblx0YXJyYXk6IFsn0LzQsNC70L4nLCAn0L3QtdC80L3QvtCz0L4nLCAn0YHRgNC10LTQvdC1JywgJ9Cx0L7Qu9GM0YjQtScsICfQvNC90L7Qs9C+J10sXHJcblx0c3RlcDogMSxcclxuXHRtaW5WYWx1ZTogMCxcclxuXHRtYXhWYWx1ZTogNCxcclxuXHRtaW5Ub2dnbGVWYWx1ZTogMixcclxuXHRtYXhUb2dnbGVWYWx1ZTogMyxcclxuXHRpc1JhbmdlOiB0cnVlLFxyXG5cdGlzVmVydGljYWw6IHRydWUsXHJcblx0aXNUYWI6IHRydWUsXHJcblx0aXNTY2FsZTogdHJ1ZSxcclxuXHRzY2FsZVF1YW50aXR5OiA1XHJcbn1cclxuXHJcbmNvbnN0IHNldERhdGFMaW1pdCA9IChkYXRhOiBEYXRhKSA9PiB7XHJcblx0ZGF0YS5taW5Ub2dnbGVWYWx1ZSA9IHNldExpbWl0KGRhdGEubWluVG9nZ2xlVmFsdWUsIGRhdGEubWluVmFsdWUsIGRhdGEubWF4VmFsdWUpO1xyXG5cdGRhdGEubWF4VG9nZ2xlVmFsdWUgPSBzZXRMaW1pdChkYXRhLm1heFRvZ2dsZVZhbHVlLCBkYXRhLm1pblZhbHVlLCBkYXRhLm1heFZhbHVlKTtcclxufVxyXG5cclxuc2V0RGF0YUxpbWl0KHNsaWRlckRhdGExKTtcclxuc2V0RGF0YUxpbWl0KHNsaWRlckRhdGEyKTtcclxuXHJcbmV4cG9ydCB7RGF0YSwgc2xpZGVyRGF0YTEsIHNsaWRlckRhdGEyfTsiLCJjb25zdCBzZXRNb3VzZUhhbmRsZXIgPSAoZWxlbSwgb25Nb3ZlLCBvbkRvdm4/LCBvblVwPykgPT4ge1xyXG5cclxuXHRjb25zdCBvbk1vdXNlRG93biA9IChldnQpID0+IHtcclxuXHRcdGlmIChvbkRvdm4pIHtcclxuXHRcdFx0b25Eb3ZuKGV2dCk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdGNvbnN0IG9uTW91c2VNb3ZlID0gKG1vdmVFdnQpID0+IHtcclxuXHRcdFx0b25Nb3ZlKG1vdmVFdnQpO1xyXG5cdFx0fVxyXG5cdFx0Y29uc3Qgb25Nb3VzZVVwID0gKHVwRXZ0KSA9PiB7XHJcblx0XHRcdGlmIChvblVwKSB7XHJcblx0XHRcdFx0b25VcCh1cEV2dCk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uTW91c2VVcCk7XHJcblx0XHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKTtcclxuXHRcdH1cclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKTtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbk1vdXNlVXApO1xyXG5cdH1cclxuXHJcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgb25Nb3VzZURvd24pO1xyXG5cclxufVxyXG5cclxuY29uc3Qgcm91bmQgPSAodmFsdWU6IG51bWJlciwgc3RlcDogbnVtYmVyKSA9PiB7XHJcblx0Y29uc3QgcHJlY2lzaW9uID0geCA9PiArKCAoeC50b1N0cmluZygpLmluY2x1ZGVzKCcuJykpID8gKHgudG9TdHJpbmcoKS5zcGxpdCgnLicpLnBvcCgpLmxlbmd0aCkgOiAoMCkgKTtcclxuXHRsZXQgcm91bmRlZDogc3RyaW5nID0gKE1hdGgucm91bmQodmFsdWUgLyBzdGVwKSAqIHN0ZXApLnRvRml4ZWQocHJlY2lzaW9uKHN0ZXApKTtcclxuXHRyZXR1cm4gcm91bmRlZDtcclxufVxyXG5cclxuY29uc3Qgc2V0TGltaXQgPSAodmFsdWU6IG51bWJlciwgbWluOiBudW1iZXIsIG1heDogbnVtYmVyKSA9PiB7XHJcblx0aWYgKHZhbHVlID4gbWF4KSB7XHJcblx0XHR2YWx1ZSA9IG1heDtcclxuXHR9IGVsc2UgaWYgKHZhbHVlIDwgbWluKSB7XHJcblx0XHR2YWx1ZSA9IG1pbjtcclxuXHR9XHJcblx0cmV0dXJuIHZhbHVlO1xyXG59XHJcblxyXG5jb25zdCBzZXRSYW5nZSA9IChyYW5nZTogSFRNTEVsZW1lbnQsIG1pbjogbnVtYmVyLCBtYXg6IG51bWJlciwgaXNWZXJ0aWNhbDogYm9vbGVhbikgPT4ge1xyXG5cdC8vIGNvbnNvbGUubG9nKCdTZXQgUmFuZ2UnKTtcclxuXHQvLyB0b2dnbGVNYXgubWluID0gdG9nZ2xlTWluLnZhbHVlO1xyXG5cdC8vIHRvZ2dsZU1pbi5tYXggPSB0b2dnbGVNYXgudmFsdWU7XHJcblx0aWYgKGlzVmVydGljYWwpIHtcclxuXHRcdHJhbmdlLnN0eWxlLnRvcCA9IGAke3RvZ2dsZU1pbi52YWx1ZX1weGA7XHJcblx0XHRyYW5nZS5zdHlsZS5oZWlnaHQgPSBgJHsodG9nZ2xlTWF4LnZhbHVlIC0gdG9nZ2xlTWluLnZhbHVlKX1weGA7XHJcblx0fSBlbHNlIHtcclxuXHRcdHJhbmdlLnN0eWxlLmxlZnQgPSBgJHt0b2dnbGVNaW4udmFsdWV9cHhgO1xyXG5cdFx0cmFuZ2Uuc3R5bGUud2lkdGggPSBgJHsodG9nZ2xlTWF4LnZhbHVlIC0gdG9nZ2xlTWluLnZhbHVlKX1weGA7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQge3NldE1vdXNlSGFuZGxlciwgcm91bmQsIHNldExpbWl0fTsiLCJpbXBvcnQge1NjYWxlfSBmcm9tICcuL3NjYWxlLnRzJztcclxuaW1wb3J0IHtWaWV3fSBmcm9tICcuL3ZpZXcudHMnO1xyXG5pbXBvcnQge1ByZXNlbnRlcn0gZnJvbSAnLi9wcmVzZW50ZXIudHMnO1xyXG5cclxuaW1wb3J0IHtzbGlkZXJEYXRhMSwgc2xpZGVyRGF0YTJ9IGZyb20gJy4vZGF0YS50cyc7XHJcblxyXG5jb25zdCBwcmVzZW50ZXIxID0gbmV3IFByZXNlbnRlcihzbGlkZXJEYXRhMSk7XHJcbmNvbnN0IHByZXNlbnRlcjIgPSBuZXcgUHJlc2VudGVyKHNsaWRlckRhdGEyKTtcclxuLy8gY29uc29sZS5sb2cocHJlc2VudGVyMSk7XHJcblxyXG4iLCJleHBvcnQgZnVuY3Rpb24gaW5pdFZpZXdNYXJrdXAod3JhcDogc3RyaW5nLCB2ZXJ0aWNhbDogYm9vbGVhbikge1xyXG5cdGNvbnN0IGNvbnRvbE1hcmt1cDogc3RyaW5nID0gYDxkaXYgY2xhc3M9XCJ0cy1zbGlkZXJfX2NvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRzLXNsaWRlcl9fYmFyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0cy1zbGlkZXJfX3RvZ2dsZSB0cy1zbGlkZXJfX3RvZ2dsZS0tbWluXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRzLXNsaWRlcl9fdG9nZ2xlLXZhbHVlIHRzLXNsaWRlcl9fdG9nZ2xlLXZhbHVlLS1taW5cIj48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0cy1zbGlkZXJfX3RvZ2dsZSB0cy1zbGlkZXJfX3RvZ2dsZS0tbWF4XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRzLXNsaWRlcl9fdG9nZ2xlLXZhbHVlIHRzLXNsaWRlcl9fdG9nZ2xlLXZhbHVlLS1tYXhcIj48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0cy1zbGlkZXJfX3JhbmdlXCI+PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5gO1xyXG5cdGNvbnN0IGNvbnRyb2xXcmFwOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iod3JhcCk7XHJcblx0Y29udHJvbFdyYXAuaW5uZXJIVE1MID0gY29udG9sTWFya3VwO1xyXG4gIGNvbnN0IGRpdiA9IGNvbnRyb2xXcmFwLnF1ZXJ5U2VsZWN0b3JBbGwoJ2RpdicpO1xyXG4gIGlmICh2ZXJ0aWNhbCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaXYubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgZmlyc3RDbGFzczogc3RyaW5nID0gZGl2W2ldLmNsYXNzTGlzdFswXTtcclxuICAgICAgY29uc3QgdmVydGljYWxDbGFzczogc3RyaW5nID0gZmlyc3RDbGFzcyArICctLXZlcnRpY2FsJztcclxuICAgICAgZGl2W2ldLmNsYXNzTGlzdC5hZGQodmVydGljYWxDbGFzcyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7RGF0YX0gZnJvbSAnLi9kYXRhLnRzJztcclxuaW1wb3J0IHtWYWx1ZSwgVGFiVGV4dH0gZnJvbSAnLi92aWV3LnRzJztcclxuaW1wb3J0IHtzZXRNb3VzZUhhbmRsZXIsIHJvdW5kfSBmcm9tICcuL2Z1bmN0aW9ucy50cyc7XHJcblxyXG5cclxuY2xhc3MgTW9kZWwge1xyXG5cclxuXHRkYXRhOiBEYXRhO1xyXG5cdG1pbklucHV0OiBhbnk7XHJcblx0bWF4SW5wdXQ6IGFueTtcclxuXHR2YWx1ZTogVmFsdWU7XHJcblx0cHJlY2VudDogVmFsdWU7XHJcblx0dGFiVGV4dDogVGFiVGV4dDtcclxuXHRvYnNlcnZlcjogSFRNTEVsZW1lbnQ7XHJcblx0bWluOiBudW1iZXI7XHJcblx0bWF4OiBudW1iZXI7XHJcblx0c2NhbGU6IHN0cmluZ1tdO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihkYXRhKSB7XHJcblx0XHR0aGlzLmRhdGEgPSBkYXRhO1xyXG5cdFx0dGhpcy50YWJUZXh0ID0ge1xyXG5cdFx0XHRtaW46ICcnLFxyXG5cdFx0XHRtYXg6ICcnXHJcblx0XHR9XHJcblx0XHR0aGlzLnZhbHVlID0ge1xyXG5cdFx0XHRtaW46IDAsXHJcblx0XHRcdG1heDogMFxyXG5cdFx0fVxyXG5cdFx0dGhpcy5wcmVjZW50ID0ge1xyXG5cdFx0XHRtaW46IDAsXHJcblx0XHRcdG1heDogMFxyXG5cdFx0fVxyXG5cdFx0dGhpcy5zY2FsZSA9IFtdO1xyXG5cdFx0dGhpcy5vYnNlcnZlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0V2ZW50Jyk7XHJcblx0XHR0aGlzLmluaXQoKTtcclxuXHRcdHRoaXMuc2V0U2NhbGUoKTtcclxuXHRcdHRoaXMuYWRkTGlzdGVuZXIoKTtcclxuXHRcdHRoaXMuY2hhbmdlSW5wdXQoKTtcclxuXHR9XHJcblxyXG5cdHNldElucHV0KCkge1xyXG5cdFx0dGhpcy5taW5JbnB1dC52YWx1ZSA9IHRoaXMudGFiVGV4dC5taW47XHJcblx0XHR0aGlzLm1heElucHV0LnZhbHVlID0gdGhpcy50YWJUZXh0Lm1heDtcclxuXHRcdC8vIGNvbnNvbGUubG9nKCdzZXQnKTtcclxuXHR9XHJcblxyXG5cdHNldEFycmF5VmFsdWUoKSB7XHJcblx0XHRsZXQgbWluID0gTWF0aC5yb3VuZCh0aGlzLnByZWNlbnQubWluICogKHRoaXMuZGF0YS5hcnJheS5sZW5ndGggLSAxKSk7XHJcblx0XHRsZXQgbWF4ID0gTWF0aC5yb3VuZCh0aGlzLnByZWNlbnQubWF4ICogKHRoaXMuZGF0YS5hcnJheS5sZW5ndGggLSAxKSk7XHJcblx0XHR0aGlzLnRhYlRleHQubWluID0gdGhpcy5kYXRhLmFycmF5W21pbl07XHJcblx0XHR0aGlzLnRhYlRleHQubWF4ID0gdGhpcy5kYXRhLmFycmF5W21heF07XHJcblx0XHR0aGlzLnNldElucHV0KCk7XHJcblx0fVxyXG5cclxuXHRpbml0KCkge1xyXG5cdFx0aWYgKHRoaXMuZGF0YS5pc0FycmF5KSB7XHJcblx0XHRcdHRoaXMub2JzZXJ2ZXIuYWRkRXZlbnRMaXN0ZW5lcignc2V0UHJlY2VudCcsICgpID0+IHtcclxuXHRcdFx0XHR0aGlzLnNldEFycmF5VmFsdWUoKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLnRhYlRleHQubWluID0gcm91bmQodGhpcy5kYXRhLm1pblRvZ2dsZVZhbHVlLCB0aGlzLmRhdGEuc3RlcCk7XHJcblx0XHRcdHRoaXMudGFiVGV4dC5tYXggPSByb3VuZCh0aGlzLmRhdGEubWF4VG9nZ2xlVmFsdWUsIHRoaXMuZGF0YS5zdGVwKTtcclxuXHRcdH1cclxuXHRcdHRoaXMubWluSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIHRoaXMuZGF0YS5taW5JbnB1dElkKTtcclxuXHRcdHRoaXMubWF4SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIHRoaXMuZGF0YS5tYXhJbnB1dElkKTtcclxuXHRcdHRoaXMuc2V0SW5wdXQoKTtcclxuXHRcdC8vIGZvciAobGV0IGtleSBpbiB0aGlzLm1pbklucHV0KSB7XHJcblx0XHQvLyBcdGNvbnNvbGUubG9nKGtleSArICc6JyArIHRoaXMubWluSW5wdXRba2V5XSk7XHJcblx0XHQvLyB9XHJcblx0XHQvLyB0aGlzLm1pbklucHV0LnZhbHVlID0gJyEhISEnO1xyXG5cdFx0Ly8gY29uc29sZS5sb2codGhpcy5taW5JbnB1dC52YWx1ZSk7XHJcblx0XHQvLyB0aGlzLm1pbklucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ3VuZm9jdXMnLCAoKSA9PiB7XHJcblx0XHQvLyBcdGNvbnNvbGUubG9nKDIyMik7XHJcblx0XHQvLyB9KTtcclxuXHR9XHJcblxyXG5cdHNldFNjYWxlKCkge1xyXG5cdFx0aWYgKHRoaXMuZGF0YS5pc0FycmF5KSB7XHJcblx0XHRcdGlmICh0aGlzLmRhdGEuaXNTY2FsZSkge1xyXG5cdFx0XHRcdHRoaXMuc2NhbGUgPSB0aGlzLmRhdGEuYXJyYXk7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmICh0aGlzLmRhdGEuaXNTY2FsZSkge1xyXG5cdFx0XHRcdGxldCBxdWFudGl0eSA9IHRoaXMuZGF0YS5zY2FsZVF1YW50aXR5O1xyXG5cdFx0XHRcdGlmIChxdWFudGl0eSA8IDIpIHtcclxuXHRcdFx0XHRcdHF1YW50aXR5ID0gMjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBxdWFudGl0eTsgaSsrKSB7XHJcblx0XHRcdFx0XHRsZXQgdGV4dFZhbHVlOiBudW1iZXIgPSBNYXRoLnJvdW5kKCh0aGlzLmRhdGEubWluVmFsdWUgKyAodGhpcy5kYXRhLm1heFZhbHVlIC0gdGhpcy5kYXRhLm1pblZhbHVlKSAvIChxdWFudGl0eSAtIDEpICogaSkgLyB0aGlzLmRhdGEuc3RlcCkgKiB0aGlzLmRhdGEuc3RlcDtcclxuXHRcdFx0XHRcdGxldCB0ZXh0OiBzdHJpbmcgPSByb3VuZCh0ZXh0VmFsdWUsIHRoaXMuZGF0YS5zdGVwKTtcclxuXHRcdFx0XHRcdHRoaXMuc2NhbGUucHVzaCh0ZXh0KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGFkZExpc3RlbmVyKCkge1xyXG5cdFx0dGhpcy5vYnNlcnZlci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2VWYWx1ZScsICgpID0+IHtcclxuXHRcdFx0aWYgKHRoaXMuZGF0YS5pc0FycmF5KSB7XHJcblx0XHRcdFx0dGhpcy5zZXRBcnJheVZhbHVlKCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy50YWJUZXh0Lm1pbiA9IHJvdW5kKHRoaXMudmFsdWUubWluLCB0aGlzLmRhdGEuc3RlcCk7XHJcblx0XHRcdFx0dGhpcy50YWJUZXh0Lm1heCA9IHJvdW5kKHRoaXMudmFsdWUubWF4LCB0aGlzLmRhdGEuc3RlcCk7XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5zZXRJbnB1dCgpO1xyXG5cdFx0XHQvLyBjb25zb2xlLmxvZyh0aGlzLm1pbklucHV0LnJlYWRvbmx5KTtcclxuXHRcdFx0dGhpcy5vYnNlcnZlci5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnY2hhbmdlVGFiVGV4dCcpKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRjaGFuZ2VJbnB1dCgpIHtcclxuXHRcdHRoaXMubWluSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHtcclxuXHRcdFx0Ly8gY29uc29sZS5sb2codGhpcy5taW5JbnB1dC52YWx1ZSk7XHJcblx0XHRcdHRoaXMudmFsdWUubWluID0gK3RoaXMubWluSW5wdXQudmFsdWU7XHJcblx0XHRcdC8vIGNvbnNvbGUubG9nKHRoaXMudmFsdWUubWluKTtcclxuXHJcblx0XHRcdHRoaXMub2JzZXJ2ZXIuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2NoYW5nZUlucHV0JykpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQge01vZGVsfTsiLCJpbXBvcnQge1ZpZXcsIFZhbHVlLCBUYWJUZXh0fSBmcm9tICcuL3ZpZXcudHMnO1xyXG5pbXBvcnQge0RhdGF9IGZyb20gJy4vZGF0YS50cyc7XHJcbmltcG9ydCB7TW9kZWx9IGZyb20gJy4vbW9kZWwudHMnO1xyXG5cclxuaW1wb3J0IHtzZXRNb3VzZUhhbmRsZXIsIHJvdW5kfSBmcm9tICcuL2Z1bmN0aW9ucy50cyc7XHJcblxyXG5jb25zdCB0b1ZpZXcgPSAodmFsdWU6IG51bWJlciwgbWluOiBudW1iZXIsIG1heDogbnVtYmVyKSA9PiAodmFsdWUgLSBtaW4pIC8gKG1heCAtIG1pbik7XHJcbmNvbnN0IHRvTW9kZWwgPSAodmFsdWU6IG51bWJlciwgbWluOiBudW1iZXIsIG1heDogbnVtYmVyKSA9PiAobWluICsgKG1heCAtIG1pbikgKiB2YWx1ZSk7XHJcblxyXG5jbGFzcyBQcmVzZW50ZXIge1xyXG5cclxuXHRkYXRhOiBEYXRhO1xyXG5cdHZpZXc6IFZpZXc7XHJcblx0bW9kZWw6IE1vZGVsO1xyXG5cdG1heDogbnVtYmVyO1xyXG5cdG1pbjogbnVtYmVyO1xyXG5cdHZhbHVlOiBWYWx1ZTtcclxuXHQvLyB2aWV3VmFsdWU6IFZhbHVlO1xyXG5cdC8vIG1vZGVsVmFsdWU6IFZhbHVlO1xyXG5cdG1vZGVsVGFiVGV4dDogVGFiVGV4dDtcclxuXHJcblx0Y29uc3RydWN0b3IoZGF0YSkge1xyXG5cdFx0dGhpcy5kYXRhID0gZGF0YTtcclxuXHRcdHRoaXMudmFsdWUgPSB7XHJcblx0XHRcdG1pbjogdGhpcy5kYXRhLm1pblRvZ2dsZVZhbHVlLFxyXG5cdFx0XHRtYXg6IHRoaXMuZGF0YS5tYXhUb2dnbGVWYWx1ZVxyXG5cdFx0fVxyXG5cdFx0dGhpcy5pbml0KCk7XHJcblx0XHR0aGlzLm9uTW92ZVRvZ2dsZSgpO1xyXG5cdFx0dGhpcy5vbkNoYW5nZVRhYlRleHQoKTtcclxuXHRcdHRoaXMub25DYW5nZUlucHV0KCk7XHJcblx0fVxyXG5cclxuXHRzZXRUYWJUZXh0KCkge1xyXG5cdFx0dGhpcy52aWV3LnZpZXdUYWJUZXh0Lm1pbiA9IHRoaXMubW9kZWwudGFiVGV4dC5taW47XHJcblx0XHR0aGlzLnZpZXcudmlld1RhYlRleHQubWF4ID0gdGhpcy5tb2RlbC50YWJUZXh0Lm1heDtcclxuXHR9XHJcblxyXG5cdGluaXRTY2FsZSgpIHtcclxuXHRcdHRoaXMudmlldy5zY2FsZSA9IHRoaXMubW9kZWwuc2NhbGU7XHJcblx0XHR0aGlzLnZpZXcuY29udGFpbmVyLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdpbml0U2NhbGUnKSk7XHJcblx0fVxyXG5cclxuXHRpbml0KCkge1xyXG5cdFx0dGhpcy52aWV3ID0gbmV3IFZpZXcodGhpcy5kYXRhKTtcclxuXHRcdHRoaXMubW9kZWwgPSBuZXcgTW9kZWwodGhpcy5kYXRhKTtcclxuXHRcdHRoaXMuaW5pdFNjYWxlKCk7XHJcblx0XHR0aGlzLnZpZXcudmlld1ZhbHVlLm1pbiA9IHRvVmlldyh0aGlzLnZhbHVlLm1pbiwgdGhpcy5kYXRhLm1pblZhbHVlLCB0aGlzLmRhdGEubWF4VmFsdWUpO1xyXG5cdFx0dGhpcy52aWV3LnZpZXdWYWx1ZS5tYXggPSB0b1ZpZXcodGhpcy52YWx1ZS5tYXgsIHRoaXMuZGF0YS5taW5WYWx1ZSwgdGhpcy5kYXRhLm1heFZhbHVlKTtcclxuXHRcdHRoaXMubW9kZWwucHJlY2VudCA9IHRoaXMudmlldy52aWV3VmFsdWU7XHJcblx0XHR0aGlzLm1vZGVsLm9ic2VydmVyLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdzZXRQcmVjZW50JykpO1xyXG5cdFx0dGhpcy5zZXRUYWJUZXh0KCk7XHJcblx0XHR0aGlzLnZpZXcuY29udGFpbmVyLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdpbml0VmFsdWUnKSk7XHJcblxyXG5cdFx0dGhpcy52aWV3LmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2VWYWx1ZScsICgpID0+IHtcclxuXHRcdFx0dGhpcy5tb2RlbC5vYnNlcnZlci5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnY2hhbmdlVmFsdWUnKSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdG9uTW92ZVRvZ2dsZSgpIHtcclxuXHRcdGNvbnN0IG9uQ2hhbmdlVmlldyA9ICgpID0+IHtcclxuXHRcdFx0dGhpcy5tb2RlbC52YWx1ZS5taW4gPSB0b01vZGVsKHRoaXMudmlldy52aWV3VmFsdWUubWluLCB0aGlzLmRhdGEubWluVmFsdWUsIHRoaXMuZGF0YS5tYXhWYWx1ZSk7XHJcblx0XHRcdHRoaXMubW9kZWwudmFsdWUubWF4ID0gdG9Nb2RlbCh0aGlzLnZpZXcudmlld1ZhbHVlLm1heCwgdGhpcy5kYXRhLm1pblZhbHVlLCB0aGlzLmRhdGEubWF4VmFsdWUpO1xyXG5cdFx0XHR0aGlzLm1vZGVsLm9ic2VydmVyLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdjaGFuZ2VWYWx1ZScpKTtcclxuXHRcdFx0Ly8gY29uc29sZS5sb2codGhpcy5tb2RlbC52YWx1ZSk7XHJcblx0XHR9XHJcblx0XHR0aGlzLnZpZXcuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdmVUb2dnbGUnLCBvbkNoYW5nZVZpZXcpO1xyXG5cdH1cclxuXHJcblx0b25DaGFuZ2VUYWJUZXh0KCkge1xyXG5cdFx0dGhpcy5tb2RlbC5vYnNlcnZlci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2VUYWJUZXh0JywgKCkgPT4ge1xyXG5cdFx0XHR0aGlzLnNldFRhYlRleHQoKTtcclxuXHRcdFx0dGhpcy52aWV3LmNvbnRhaW5lci5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnY2hhbmdlVGFiJykpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdG9uQ2FuZ2VJbnB1dCgpIHtcclxuXHRcdHRoaXMubW9kZWwub2JzZXJ2ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlSW5wdXQnLCAoKSA9PiB7XHJcblx0XHRcdC8vIGNvbnNvbGUubG9nKCdjdmInKTtcclxuXHRcdFx0dGhpcy52YWx1ZS5taW4gPSArdGhpcy5tb2RlbC52YWx1ZS5taW47XHJcblx0XHRcdC8vIGNvbnNvbGUubG9nKHRoaXMubW9kZWwudmFsdWUpO1xyXG5cdFx0XHR0aGlzLnZpZXcudmlld1ZhbHVlLm1pbiA9IHRvVmlldyh0aGlzLnZhbHVlLm1pbiwgdGhpcy5kYXRhLm1pblZhbHVlLCB0aGlzLmRhdGEubWF4VmFsdWUpO1xyXG5cdFx0XHR0aGlzLnZpZXcuY29udGFpbmVyLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdpbml0VmFsdWUnKSk7XHJcblx0XHRcdHRoaXMudmlldy5vblZpZXdDYW5nZSgpO1xyXG5cdFx0XHQvLyB0aGlzLnZpZXcuc2V0VG9nZ2xlKCk7XHJcblx0XHRcdC8vIHRoaXMudmlldy5taW5Ub2dnbGVFbGVtLnN0eWxlLmxlZnQgPSB0aGlzLnZpZXcudmlld1ZhbHVlLm1pbiAqIHRoaXMudmlldy5zaXplICsgJ3B4JztcclxuXHRcdFx0Ly8gdGhpcy52aWV3LnZpZXdUYWJUZXh0Lm1pbiA9IHRoaXMubW9kZWwudGFiVGV4dC5taW47XHJcblx0XHRcdC8vIGNvbnNvbGUubG9nKHRoaXMudmlldy52aWV3VmFsdWUubWluKTtcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IHt0b1ZpZXcsIHRvTW9kZWwsIFByZXNlbnRlcn07IiwiaW1wb3J0IHtyb3VuZH0gZnJvbSAnLi9mdW5jdGlvbnMudHMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNjYWxlIHtcclxuXHJcblx0c2xpZGVyOiBIVE1MRWxlbWVudDtcclxuXHRzY2FsZTogc3RyaW5nW107XHJcblx0aXNWZXJ0aWNhbDogYm9vbGVhbjtcclxuXHJcblx0Y29uc3RydWN0b3Ioc2xpZGVyLCBzY2FsZSwgaXNWZXJ0aWNhbCkge1xyXG5cdFx0dGhpcy5zbGlkZXIgPSBzbGlkZXI7XHJcblx0XHR0aGlzLnNjYWxlID0gc2NhbGU7XHJcblx0XHR0aGlzLmlzVmVydGljYWwgPSBpc1ZlcnRpY2FsO1xyXG5cdFx0dGhpcy5jcmVhdGVJdGVtKCk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVJdGVtKCkge1xyXG5cdFx0Y29uc3QgYmFyOiBIVE1MRWxlbWVudCA9IHRoaXMuc2xpZGVyLnF1ZXJ5U2VsZWN0b3IoJy50cy1zbGlkZXJfX2JhcicpO1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNjYWxlLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGNvbnN0IHNjYWxlSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0XHRzY2FsZUl0ZW0uY2xhc3NMaXN0LmFkZCgndHMtc2xpZGVyX19zY2FsZS1pdGVtJyk7XHJcblx0XHRcdHNjYWxlSXRlbS50ZXh0Q29udGVudCA9IHRoaXMuc2NhbGVbaV07XHJcblx0XHRcdGlmICh0aGlzLmlzVmVydGljYWwpIHtcclxuXHRcdFx0XHRzY2FsZUl0ZW0uY2xhc3NMaXN0LmFkZCgndHMtc2xpZGVyX19zY2FsZS1pdGVtLS12ZXJ0aWNhbCcpO1xyXG5cdFx0XHRcdHNjYWxlSXRlbS5zdHlsZS50b3AgPSBgJHtiYXIub2Zmc2V0SGVpZ2h0IC8gKHRoaXMuc2NhbGUubGVuZ3RoIC0gMSkgKiBpfXB4YDtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzY2FsZUl0ZW0uc3R5bGUubGVmdCA9IGAke2Jhci5vZmZzZXRXaWR0aCAvICh0aGlzLnNjYWxlLmxlbmd0aCAtIDEpICogaX1weGA7XHJcblx0XHRcdH1cdFxyXG5cdFx0XHRiYXIuYXBwZW5kKHNjYWxlSXRlbSk7XHJcblx0XHR9XHJcblx0fVxyXG59IiwiaW1wb3J0IHtUb2dnbGV9IGZyb20gJy4vdG9nZ2xlLnRzJztcclxuaW1wb3J0IHtWYWx1ZX0gZnJvbSAnLi92aWV3LnRzJztcclxuaW1wb3J0IHtzZXRNb3VzZUhhbmRsZXJ9IGZyb20gJy4vZnVuY3Rpb25zLnRzJztcclxuaW1wb3J0IHtEYXRhfSBmcm9tICcuL2RhdGEudHMnO1xyXG5cclxuZnVuY3Rpb24gc2V0Vmlld1ZhbHVlKHNsaWRlcjogSFRNTEVsZW1lbnQsIGRhdGE6IERhdGEpIHtcclxuXHJcblx0bGV0IGlzVmVydGljYWwgPSBkYXRhLmlzVmVydGljYWw7XHJcblx0bGV0IGlzUmFuZ2UgPSBkYXRhLmlzUmFuZ2U7XHJcblx0bGV0IGlzVGFiID0gZGF0YS5pc1RhYjtcclxuXHJcblx0bGV0IHByZWNlbnQ6IFZhbHVlID0ge1xyXG5cdFx0bWluOiAwLFxyXG5cdFx0bWF4OiAwXHJcblx0fTtcclxuXHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XHJcblx0XHRjb25zdCBtaW5Ub2dnbGVFbGVtOiBIVE1MRWxlbWVudCA9IHNsaWRlci5xdWVyeVNlbGVjdG9yKCcudHMtc2xpZGVyX190b2dnbGUtLW1pbicpO1xyXG5cdFx0Y29uc3QgbWF4VG9nZ2xlRWxlbTogSFRNTEVsZW1lbnQgPSBzbGlkZXIucXVlcnlTZWxlY3RvcignLnRzLXNsaWRlcl9fdG9nZ2xlLS1tYXgnKTtcclxuXHRcdGNvbnN0IHJhbmdlOiBIVE1MRWxlbWVudCA9IHNsaWRlci5xdWVyeVNlbGVjdG9yKCcudHMtc2xpZGVyX19yYW5nZScpO1xyXG5cdFx0Y29uc3QgYmFyRWxlbTogSFRNTEVsZW1lbnQgPSBzbGlkZXIucXVlcnlTZWxlY3RvcignLnRzLXNsaWRlcl9fYmFyJyk7XHJcblx0XHRjb25zdCBiYXJXaWR0aDogbnVtYmVyID0gYmFyRWxlbS5vZmZzZXRXaWR0aDtcclxuXHRcdGNvbnN0IGJhckhlaWdodDogbnVtYmVyID0gYmFyRWxlbS5vZmZzZXRIZWlnaHQ7XHJcblx0XHRsZXQgYmFyTWF4O1xyXG5cdFx0bGV0IHRvZ2dsZU1heE9mZnNldDtcclxuXHRcdGxldCB0b2dnbGVNaW5PZmZzZXQ7XHJcblx0XHRjb25zdCBzZXRQcmVjZW50ID0gKHZhbHVlKSA9PiB2YWx1ZSAvIGJhck1heDtcclxuXHJcblx0XHRpZiAoIWlzUmFuZ2UpIHtcclxuXHRcdFx0bWluVG9nZ2xlRWxlbS5oaWRkZW4gPSB0cnVlO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChpc1ZlcnRpY2FsKSB7XHJcblx0XHRcdGJhck1heCA9IGJhckhlaWdodDtcclxuXHRcdFx0dG9nZ2xlTWF4T2Zmc2V0ID0gbWF4VG9nZ2xlRWxlbS5vZmZzZXRUb3A7XHJcblx0XHRcdHRvZ2dsZU1pbk9mZnNldCA9IG1pblRvZ2dsZUVsZW0ub2Zmc2V0VG9wO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0YmFyTWF4ID0gYmFyV2lkdGg7XHJcblx0XHRcdHRvZ2dsZU1heE9mZnNldCA9IG1heFRvZ2dsZUVsZW0ub2Zmc2V0TGVmdDtcclxuXHRcdFx0dG9nZ2xlTWluT2Zmc2V0ID0gbWluVG9nZ2xlRWxlbS5vZmZzZXRMZWZ0O1xyXG5cdFx0fVxyXG5cclxuXHRcdGxldCB0b2dnbGVNYXggPSBuZXcgVG9nZ2xlKG1heFRvZ2dsZUVsZW0sIHRvZ2dsZU1pbk9mZnNldCwgYmFyTWF4LCB0b2dnbGVNYXhPZmZzZXQsIGlzVmVydGljYWwpO1xyXG5cdFx0bGV0IHRvZ2dsZU1pbiA9IG5ldyBUb2dnbGUobWluVG9nZ2xlRWxlbSwgMCwgdG9nZ2xlTWF4T2Zmc2V0LCB0b2dnbGVNaW5PZmZzZXQsIGlzVmVydGljYWwpO1xyXG5cdFx0dG9nZ2xlTWF4Lm1vdmVUb2dnbGUoKTtcclxuXHRcdHRvZ2dsZU1pbi5tb3ZlVG9nZ2xlKCk7XHJcblx0XHRwcmVjZW50Lm1pbiA9IHNldFByZWNlbnQodG9nZ2xlTWluLnZhbHVlKTtcclxuXHRcdHByZWNlbnQubWF4ID0gc2V0UHJlY2VudCh0b2dnbGVNYXgudmFsdWUpO1xyXG5cclxuXHRcdGlmICghaXNSYW5nZSkge1xyXG5cdFx0XHR0b2dnbGVNaW4udmFsdWUgPSAwO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IHNldFJhbmdlID0gKCkgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZygnU2V0IFJhbmdlJyk7XHJcblx0XHRcdHRvZ2dsZU1heC5taW4gPSB0b2dnbGVNaW4udmFsdWU7XHJcblx0XHRcdHRvZ2dsZU1pbi5tYXggPSB0b2dnbGVNYXgudmFsdWU7XHJcblx0XHRcdGlmIChpc1ZlcnRpY2FsKSB7XHJcblx0XHRcdFx0cmFuZ2Uuc3R5bGUudG9wID0gYCR7dG9nZ2xlTWluLnZhbHVlfXB4YDtcclxuXHRcdFx0XHRyYW5nZS5zdHlsZS5oZWlnaHQgPSBgJHsodG9nZ2xlTWF4LnZhbHVlIC0gdG9nZ2xlTWluLnZhbHVlKX1weGA7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmFuZ2Uuc3R5bGUubGVmdCA9IGAke3RvZ2dsZU1pbi52YWx1ZX1weGA7XHJcblx0XHRcdFx0cmFuZ2Uuc3R5bGUud2lkdGggPSBgJHsodG9nZ2xlTWF4LnZhbHVlIC0gdG9nZ2xlTWluLnZhbHVlKX1weGA7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHNldFJhbmdlKCk7XHJcblxyXG5cdFx0Y29uc3Qgb25Nb3VzZURvd25Db2luY2lkZW5jZSA9IChldnQpID0+IHtcclxuXHRcdFx0ZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdGxldCBjb2luY2lkZW5jZVRvZ2dsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cdFx0XHRtYXhUb2dnbGVFbGVtLmhpZGRlbiA9IHRydWU7XHJcblx0XHRcdGNvaW5jaWRlbmNlVG9nZ2xlID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludChldnQucGFnZVgsIGV2dC5wYWdlWSkuY2xhc3NMaXN0LmNvbnRhaW5zKCd0cy1zbGlkZXJfX3RvZ2dsZS0tbWluJyk7XHJcblx0XHRcdG1heFRvZ2dsZUVsZW0uaGlkZGVuID0gZmFsc2U7XHJcblx0XHRcdGxldCBzdGFydFZhbHVlOiBudW1iZXI7XHJcblx0XHRcdHN0YXJ0VmFsdWUgPSB0b2dnbGVNYXgudmFsdWU7XHJcblxyXG5cdFx0XHRjb25zdCBvbk1vdXNlTW92ZSA9IChtb3ZlRXZ0KSA9PiB7XHJcblx0XHRcdFx0bW92ZUV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdGlmIChjb2luY2lkZW5jZVRvZ2dsZSkge1xyXG5cdFx0XHRcdFx0dG9nZ2xlTWluLm1vdXNlVmFsdWUgPSB0b2dnbGVNYXgubW91c2VWYWx1ZTtcclxuXHRcdFx0XHRcdHRvZ2dsZU1heC5pc0ZpeGVkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdHRvZ2dsZU1pbi5pc0ZpeGVkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdGlmICh0b2dnbGVNYXgubW91c2VWYWx1ZSA+IHN0YXJ0VmFsdWUpIHtcclxuXHRcdFx0XHRcdFx0dG9nZ2xlTWF4LmlzRml4ZWQgPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0dG9nZ2xlTWluLmlzRml4ZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0dG9nZ2xlTWF4LmlzRml4ZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHR0b2dnbGVNaW4uaXNGaXhlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0XHR0b2dnbGVNaW4ubW91c2VWYWx1ZSA9IHRvZ2dsZU1heC5tb3VzZVZhbHVlO1xyXG5cdFx0XHRcdFx0XHR0b2dnbGVNaW4udmFsdWUgPSB0b2dnbGVNYXgubW91c2VWYWx1ZTtcclxuXHRcdFx0XHRcdFx0aWYgKHRvZ2dsZU1pbi52YWx1ZSA8IDApIHtcclxuXHRcdFx0XHRcdFx0XHR0b2dnbGVNaW4udmFsdWUgPSAwO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdHRvZ2dsZU1pbi5zZXRTdHlsZSgpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0b2dnbGVNYXguaXNGaXhlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0dG9nZ2xlTWluLmlzRml4ZWQgPSBmYWxzZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0Y29uc3Qgb25Nb3VzZVVwID0gKHVwRXZ0KSA9PiB7XHJcblx0XHRcdFx0dXBFdnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHR0b2dnbGVNaW4ubW91c2VWYWx1ZSA9IHRvZ2dsZU1pbi52YWx1ZTtcclxuXHRcdFx0XHR0b2dnbGVNYXguaXNGaXhlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdHRvZ2dsZU1pbi5pc0ZpeGVkID0gZmFsc2U7XHJcblx0XHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uTW91c2VVcCk7XHJcblx0XHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKTtcclxuXHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uTW91c2VVcCk7XHJcblx0XHR9XHJcblxyXG5cdFx0bWF4VG9nZ2xlRWxlbS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBvbk1vdXNlRG93bkNvaW5jaWRlbmNlKTtcclxuXHJcblx0XHRjb25zdCBvbk1vdXNlTW92ZVByZWNlbnQgPSAobW92ZUV2dCkgPT4ge1xyXG5cdFx0XHRzZXRSYW5nZSgpO1xyXG5cdFx0XHRwcmVjZW50Lm1pbiA9IHNldFByZWNlbnQodG9nZ2xlTWluLnZhbHVlKTtcclxuXHRcdFx0cHJlY2VudC5tYXggPSBzZXRQcmVjZW50KHRvZ2dsZU1heC52YWx1ZSk7XHJcblx0XHR9XHJcblx0XHRzZXRNb3VzZUhhbmRsZXIobWF4VG9nZ2xlRWxlbSwgb25Nb3VzZU1vdmVQcmVjZW50KTtcclxuXHRcdHNldE1vdXNlSGFuZGxlcihtaW5Ub2dnbGVFbGVtLCBvbk1vdXNlTW92ZVByZWNlbnQpO1xyXG5cdH0pO1xyXG5yZXR1cm4gcHJlY2VudDtcclxufVxyXG5cclxuZXhwb3J0IHtzZXRWaWV3VmFsdWV9OyIsImltcG9ydCB7c2V0TGltaXR9IGZyb20gJy4vZnVuY3Rpb25zLnRzJztcclxuXHJcbmNvbnN0IHNldFRvZ2dsZVN0eWxlID0gKHRvZ2dsZTogSFRNTEVsZW1lbnQsIHZhbHVlOiBudW1iZXIsIHZlcnRpY2FsOiBib29sZWFuKSA9PiB7XHJcblx0XHRpZiAodmVydGljYWwpIHtcclxuXHRcdFx0dG9nZ2xlLnN0eWxlLnRvcCA9IGAke3ZhbHVlfXB4YDtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRvZ2dsZS5zdHlsZS5sZWZ0ID0gYCR7dmFsdWV9cHhgO1xyXG5cdH1cclxufVxyXG5cclxuY2xhc3MgVG9nZ2xlIHtcclxuXHJcblx0dG9nZ2xlOiBIVE1MRWxlbWVudDtcclxuXHRtaW46IG51bWJlcjtcclxuXHRtYXg6IG51bWJlcjtcclxuXHRtb3VzZVZhbHVlOiBudW1iZXI7XHJcblx0dmFsdWU6IG51bWJlcjtcclxuXHR2ZXJ0aWNhbDogYm9vbGVhbjtcclxuXHRpc0ZpeGVkOiBib29sZWFuO1xyXG5cclxuXHRjb25zdHJ1Y3Rvcih0b2dnbGUsIG1pbiwgbWF4LCB2YWx1ZSwgdmVydGljYWwpIHtcclxuXHRcdHRoaXMudG9nZ2xlID0gdG9nZ2xlO1xyXG5cdFx0dGhpcy5taW4gPSBtaW47XHJcblx0XHR0aGlzLm1heCA9IG1heDtcclxuXHRcdHRoaXMubW91c2VWYWx1ZSA9IHZhbHVlO1xyXG5cdFx0dGhpcy52YWx1ZSA9IHZhbHVlO1xyXG5cdFx0dGhpcy52ZXJ0aWNhbCA9IHZlcnRpY2FsO1xyXG5cdFx0dGhpcy5pc0ZpeGVkID0gZmFsc2U7XHJcblx0XHR0aGlzLnNldFN0eWxlKCk7XHJcblx0fVxyXG5cdHNldFN0eWxlKCkge1xyXG5cdFx0c2V0VG9nZ2xlU3R5bGUodGhpcy50b2dnbGUsIHRoaXMudmFsdWUsIHRoaXMudmVydGljYWwpO1xyXG5cdH1cclxuXHRtb3ZlVG9nZ2xlKCkge1xyXG5cdFx0Y29uc3Qgb25Nb3VzZURvd24gPSAoZXZ0KSA9PiB7XHJcblx0XHRcdGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRsZXQgc2hpZnRYOiBudW1iZXIgPSBldnQuY2xpZW50WCAtIHRoaXMudG9nZ2xlLm9mZnNldExlZnQ7XHJcblx0XHRcdGxldCBzaGlmdFk6IG51bWJlciA9IGV2dC5jbGllbnRZIC0gdGhpcy50b2dnbGUub2Zmc2V0VG9wO1xyXG5cdFx0XHRsZXQgc3RhcnRWYWx1ZTogbnVtYmVyID0gdGhpcy5tb3VzZVZhbHVlO1xyXG5cdFx0XHRjb25zdCBtb3ZlQXQgPSAocGFnZVgsIHBhZ2VZKSA9PiB7XHJcblx0XHRcdFx0aWYgKHRoaXMudmVydGljYWwpIHtcclxuXHRcdFx0XHRcdHRoaXMubW91c2VWYWx1ZSA9IHBhZ2VZIC0gc2hpZnRZO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0aGlzLm1vdXNlVmFsdWUgPSBwYWdlWCAtIHNoaWZ0WDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy52YWx1ZSA9IHRoaXMubW91c2VWYWx1ZTtcclxuXHRcdFx0XHR0aGlzLnZhbHVlID0gc2V0TGltaXQodGhpcy52YWx1ZSwgdGhpcy5taW4sIHRoaXMubWF4KTtcclxuXHRcdFx0XHRpZiAodGhpcy5pc0ZpeGVkKSB7XHJcblx0XHRcdFx0XHR0aGlzLnZhbHVlID0gc3RhcnRWYWx1ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy5zZXRTdHlsZSgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdG1vdmVBdChldnQucGFnZVgsIGV2dC5wYWdlWSk7XHJcblxyXG5cdFx0XHRjb25zdCBvbk1vdXNlTW92ZSA9IChtb3ZlRXZ0KSA9PiB7XHJcblx0XHRcdFx0bW92ZUF0KG1vdmVFdnQucGFnZVgsIG1vdmVFdnQuIHBhZ2VZKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRjb25zdCBvbk1vdXNlVXAgPSAodXBFdnQpID0+IHtcclxuXHRcdFx0XHR1cEV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdHRoaXMubW91c2VWYWx1ZSA9IHRoaXMudmFsdWU7XHJcblx0XHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uTW91c2VVcCk7XHJcblx0XHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKTtcclxuXHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uTW91c2VVcCk7XHJcblx0XHR9XHJcblx0XHR0aGlzLnRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBvbk1vdXNlRG93bik7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQge3NldFRvZ2dsZVN0eWxlLCBUb2dnbGV9OyIsImltcG9ydCB7aW5pdFZpZXdNYXJrdXB9IGZyb20gJy4vaW5pdC12aWV3LW1hcmt1cC50cyc7XHJcbmltcG9ydCB7U2NhbGV9IGZyb20gJy4vc2NhbGUudHMnO1xyXG5pbXBvcnQge3NldFZpZXdWYWx1ZX0gZnJvbSAnLi9zZXQtdmlldy12YWx1ZS50cyc7XHJcbmltcG9ydCB7RGF0YX0gZnJvbSAnLi9kYXRhLnRzJztcclxuaW1wb3J0IHtzZXRUb2dnbGVTdHlsZX0gZnJvbSAnLi90b2dnbGUudHMnO1xyXG5pbXBvcnQge3NldE1vdXNlSGFuZGxlciwgcm91bmR9IGZyb20gJy4vZnVuY3Rpb25zLnRzJztcclxuXHJcbmludGVyZmFjZSBWYWx1ZSB7XHJcblx0bWluOiBudW1iZXI7XHJcblx0bWF4OiBudW1iZXI7XHJcbn1cclxuaW50ZXJmYWNlIFRhYlRleHQge1xyXG5cdG1pbjogc3RyaW5nO1xyXG5cdG1heDogc3RyaW5nO1xyXG59XHJcblxyXG5jbGFzcyBWaWV3IHtcclxuXHJcblx0ZGF0YTogRGF0YTtcclxuXHR2aWV3VmFsdWU6IFZhbHVlO1xyXG5cdHZpZXdUYWJUZXh0OiBUYWJUZXh0O1xyXG5cdGNvbnRhaW5lcjogSFRNTEVsZW1lbnQ7XHJcblx0bWluVG9nZ2xlRWxlbTogSFRNTEVsZW1lbnQ7XHJcblx0bWF4VG9nZ2xlRWxlbTogSFRNTEVsZW1lbnQ7XHJcblx0bWluVGFiRWxlbTogSFRNTEVsZW1lbnQ7XHJcblx0bWF4VGFiRWxlbTogSFRNTEVsZW1lbnQ7XHJcblx0c2l6ZTogbnVtYmVyO1xyXG5cdHNjYWxlOiBzdHJpbmdbXTtcclxuXHJcblx0Y29uc3RydWN0b3IoZGF0YSkge1xyXG5cdFx0dGhpcy5kYXRhID0gZGF0YTtcclxuXHRcdHRoaXMudmlld1RhYlRleHQgPSB7XHJcblx0XHRcdG1pbjogJycsXHJcblx0XHRcdG1heDogJydcclxuXHRcdH1cclxuXHRcdHRoaXMuc2NhbGUgPSBbXTtcclxuXHRcdHRoaXMuaW5pdFZpZXcoKTtcclxuXHRcdC8vIHRoaXMub25WaWV3Q2FuZ2UoKTtcclxuXHRcdHRoaXMuc2V0VG9nZ2xlKCk7XHJcblx0XHR0aGlzLm9uTW92ZVRvZ2dsZSgpO1xyXG5cdFx0dGhpcy5hZGRTY2FsZSgpO1xyXG5cdFx0dGhpcy5jaGFuZ2VUYWIoKTtcclxuXHR9XHJcblxyXG5cdGluaXRWaWV3KCkge1xyXG5cdFx0aW5pdFZpZXdNYXJrdXAodGhpcy5kYXRhLndyYXBJZCwgdGhpcy5kYXRhLmlzVmVydGljYWwpO1xyXG5cdFx0dGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuZGF0YS53cmFwSWQpLnF1ZXJ5U2VsZWN0b3IoJy50cy1zbGlkZXJfX2NvbnRhaW5lcicpO1xyXG5cdFx0aWYgKHRoaXMuZGF0YS5pc1ZlcnRpY2FsKSB7XHJcblx0XHRcdHRoaXMuc2l6ZSA9IHRoaXMuY29udGFpbmVyLm9mZnNldEhlaWdodDtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuc2l6ZSA9IHRoaXMuY29udGFpbmVyLm9mZnNldFdpZHRoO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0c2V0VGFiKCkge1xyXG5cdFx0dGhpcy5taW5UYWJFbGVtLnRleHRDb250ZW50ID0gdGhpcy52aWV3VGFiVGV4dC5taW47XHJcblx0XHR0aGlzLm1heFRhYkVsZW0udGV4dENvbnRlbnQgPSB0aGlzLnZpZXdUYWJUZXh0Lm1heDtcclxuXHR9XHJcblxyXG5cdHNldFRvZ2dsZSgpIHtcclxuXHRcdHRoaXMubWluVG9nZ2xlRWxlbSA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy50cy1zbGlkZXJfX3RvZ2dsZS0tbWluJyk7XHJcblx0XHR0aGlzLm1heFRvZ2dsZUVsZW0gPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcudHMtc2xpZGVyX190b2dnbGUtLW1heCcpO1xyXG5cdFx0dGhpcy5taW5UYWJFbGVtID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvcignLnRzLXNsaWRlcl9fdG9nZ2xlLXZhbHVlLS1taW4nKTtcclxuXHRcdHRoaXMubWF4VGFiRWxlbSA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy50cy1zbGlkZXJfX3RvZ2dsZS12YWx1ZS0tbWF4Jyk7XHJcblxyXG5cdFx0dGhpcy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignaW5pdFZhbHVlJywgKCkgPT4ge1xyXG5cdFx0XHRzZXRUb2dnbGVTdHlsZSh0aGlzLm1pblRvZ2dsZUVsZW0sIHRoaXMudmlld1ZhbHVlLm1pbiAqIHRoaXMuc2l6ZSwgdGhpcy5kYXRhLmlzVmVydGljYWwpO1xyXG5cdFx0XHRzZXRUb2dnbGVTdHlsZSh0aGlzLm1heFRvZ2dsZUVsZW0sIHRoaXMudmlld1ZhbHVlLm1heCAqIHRoaXMuc2l6ZSwgdGhpcy5kYXRhLmlzVmVydGljYWwpO1xyXG5cdFx0XHR0aGlzLnNldFRhYigpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdG9uVmlld0NhbmdlKCkge1xyXG5cdFx0Ly8gdGhpcy52aWV3VmFsdWUgPSBzZXRWaWV3VmFsdWUodGhpcy5jb250YWluZXIsIHRoaXMuZGF0YSk7XHJcblx0fVxyXG5cdG9uTW92ZVRvZ2dsZSgpIHtcclxuXHRcdHRoaXMudmlld1ZhbHVlID0gc2V0Vmlld1ZhbHVlKHRoaXMuY29udGFpbmVyLCB0aGlzLmRhdGEpO1xyXG5cdFx0dGhpcy5vblZpZXdDYW5nZSgpO1xyXG5cdFx0Y29uc3Qgb25Nb3VzZU1vdmUgPSAobW92ZUV2dCkgPT4ge1xyXG5cdFx0XHR0aGlzLmNvbnRhaW5lci5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnbW92ZVRvZ2dsZScpKTtcclxuXHRcdH1cclxuXHRcdHNldE1vdXNlSGFuZGxlcih0aGlzLmNvbnRhaW5lciwgb25Nb3VzZU1vdmUpO1xyXG5cdH1cclxuXHJcblx0YWRkU2NhbGUoKSB7XHJcblx0XHR0aGlzLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdpbml0U2NhbGUnLCAoKSA9PiB7XHJcblx0XHRcdGlmICh0aGlzLmRhdGEuaXNTY2FsZSkge1xyXG5cdFx0XHRcdGNvbnN0IHNjYWxlID0gbmV3IFNjYWxlKHRoaXMuY29udGFpbmVyLCB0aGlzLnNjYWxlLCB0aGlzLmRhdGEuaXNWZXJ0aWNhbCk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0Y2hhbmdlVGFiKCkge1xyXG5cdFx0dGhpcy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlVGFiJywgKCkgPT4ge1xyXG5cdFx0XHR0aGlzLnNldFRhYigpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQge1ZpZXcsIFZhbHVlLCBUYWJUZXh0fTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==