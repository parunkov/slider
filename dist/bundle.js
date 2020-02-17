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
    step: 1,
    minValue: 0,
    maxValue: 100,
    minToggleValue: 20,
    maxToggleValue: 40,
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
        console.log('больше');
    }
    else if (value < min) {
        value = min;
        console.log('меньше');
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
/* harmony import */ var _data_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.ts */ "./src/data.ts");


const presenter1 = new _presenter_ts__WEBPACK_IMPORTED_MODULE_0__["Presenter"](_data_ts__WEBPACK_IMPORTED_MODULE_1__["sliderData1"]);
// const view = new View(sliderData1);
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
            // console.log(this.value.min + ' ' + this.value.max + ' ' + this.data.minValue);
            this.value.min = Object(_functions_ts__WEBPACK_IMPORTED_MODULE_0__["setLimit"])(this.value.min, this.data.minValue, this.value.max);
            this.value.max = Object(_functions_ts__WEBPACK_IMPORTED_MODULE_0__["setLimit"])(this.value.max, this.value.min, this.data.maxValue);
            // console.log(this.value.min + ' ' + this.value.max);
            this.minInput.value = this.value.min.toString();
            this.maxInput.value = this.value.max.toString();
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
/*! exports provided: Presenter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Presenter", function() { return Presenter; });
/* harmony import */ var _view_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view.ts */ "./src/view.ts");
/* harmony import */ var _model_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model.ts */ "./src/model.ts");
/* harmony import */ var _functions_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions.ts */ "./src/functions.ts");



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
        // console.log(this.view.precent);
    }
    setToModel() {
        this.model.value.min = Object(_functions_ts__WEBPACK_IMPORTED_MODULE_2__["toValue"])(this.view.precent.min, this.data.minValue, this.data.maxValue);
        this.model.value.max = Object(_functions_ts__WEBPACK_IMPORTED_MODULE_2__["toValue"])(this.view.precent.max, this.data.minValue, this.data.maxValue);
    }
    init() {
        this.view = new _view_ts__WEBPACK_IMPORTED_MODULE_0__["View"](this.data);
        this.model = new _model_ts__WEBPACK_IMPORTED_MODULE_1__["Model"](this.data);
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
            this.value.min = +this.model.value.min;
            this.value.max = +this.model.value.max;
            this.setToView();
            this.setToModel();
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

// //old
// import {setLimit} from './functions.ts';
// const setToggleStyle = (toggle: HTMLElement, value: number, vertical: boolean) => {
// 		if (vertical) {
// 			toggle.style.top = `${value}px`;
// 		} else {
// 			toggle.style.left = `${value}px`;
// 	}
// }
// class Toggle {
// 	toggle: HTMLElement;
// 	min: number;
// 	max: number;
// 	mouseValue: number;
// 	value: number;
// 	vertical: boolean;
// 	isFixed: boolean;
// 	constructor(toggle, min, max, value, vertical) {
// 		this.toggle = toggle;
// 		this.min = min;
// 		this.max = max;
// 		this.mouseValue = value;
// 		this.value = value;
// 		this.vertical = vertical;
// 		this.isFixed = false;
// 		this.setStyle();
// 	}
// 	setStyle() {
// 		setToggleStyle(this.toggle, this.value, this.vertical);
// 	}
// 	moveToggle() {
// 		const onMouseDown = (evt) => {
// 			evt.preventDefault();
// 			let shiftX: number = evt.clientX - this.toggle.offsetLeft;
// 			let shiftY: number = evt.clientY - this.toggle.offsetTop;
// 			let startValue: number = this.mouseValue;
// 			const moveAt = (pageX, pageY) => {
// 				if (this.vertical) {
// 					this.mouseValue = pageY - shiftY;
// 				} else {
// 					this.mouseValue = pageX - shiftX;
// 				}
// 				this.value = this.mouseValue;
// 				this.value = setLimit(this.value, this.min, this.max);
// 				if (this.isFixed) {
// 					this.value = startValue;
// 				}
// 				this.setStyle();
// 			}
// 			moveAt(evt.pageX, evt.pageY);
// 			const onMouseMove = (moveEvt) => {
// 				moveAt(moveEvt.pageX, moveEvt. pageY);
// 			}
// 			const onMouseUp = (upEvt) => {
// 				upEvt.preventDefault();
// 				this.mouseValue = this.value;
// 				document.removeEventListener('mouseup', onMouseUp);
// 				document.removeEventListener('mousemove', onMouseMove);
// 			}
// 			document.addEventListener('mousemove', onMouseMove);
// 			document.addEventListener('mouseup', onMouseUp);
// 		}
// 		this.toggle.addEventListener('mousedown', onMouseDown);
// 	}
// }
// export {setToggleStyle, Toggle};


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
//old




class View {
    constructor(data) {
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
        Object(_init_view_markup_ts__WEBPACK_IMPORTED_MODULE_0__["initViewMarkup"])(this.data.wrapId, this.data.isVertical);
        this.container = document.querySelector(this.data.wrapId).querySelector('.ts-slider__container');
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
}

// //old
// import {initViewMarkup} from './init-view-markup.ts';
// import {Scale} from './scale.ts';
// import {setViewValue} from './set-view-value.ts';
// import {Data} from './data.ts';
// import {setToggleStyle} from './toggle.ts';
// import {setMouseHandler, round} from './functions.ts';
// import {markup} from './init-view-markup.ts';
// interface Value {
// 	min: number;
// 	max: number;
// }
// interface TabText {
// 	min: string;
// 	max: string;
// }
// class View {
// 	data: Data;
// 	viewValue: Value;
// 	viewTabText: TabText;
// 	container: HTMLElement;
// 	minToggleElem: HTMLElement;
// 	maxToggleElem: HTMLElement;
// 	minTabElem: HTMLElement;
// 	maxTabElem: HTMLElement;
// 	size: number;
// 	scale: string[];
// 	constructor(data) {
// 		this.data = data;
// 		this.viewTabText = {
// 			min: '',
// 			max: ''
// 		}
// 		this.scale = [];
// 		this.initView();
// 		this.setToggle();
// 		this.onMoveToggle();
// 		this.addScale();
// 		this.changeTab();
// 		this.changeInput();
// 	}
// 	initView() {
// 		initViewMarkup(this.data.wrapId, this.data.isVertical);
// 		this.container = document.querySelector(this.data.wrapId).querySelector('.ts-slider__container');
// 		if (this.data.isVertical) {
// 			this.size = this.container.offsetHeight;
// 		} else {
// 			this.size = this.container.offsetWidth;
// 		}
// 		this.viewValue = setViewValue(this.container, this.data);
// 	}
// 	setTab() {
// 		this.minTabElem.textContent = this.viewTabText.min;
// 		this.maxTabElem.textContent = this.viewTabText.max;
// 	}
// 	setToggle() {
// 		this.minToggleElem = markup(this.container).min;
// 		this.maxToggleElem = markup(this.container).max;
// 		this.minTabElem = markup(this.container).minTab;
// 		this.maxTabElem = markup(this.container).maxTab;
// 		this.container.addEventListener('initValue', () => {
// 			setToggleStyle(this.minToggleElem, this.viewValue.min * this.size, this.data.isVertical);
// 			setToggleStyle(this.maxToggleElem, this.viewValue.max * this.size, this.data.isVertical);
// 			this.setTab();
// 		});
// 		// this.viewValue = setViewValue(this.container, this.data);
// 	}
// 	onMoveToggle() {
// 		// this.viewValue = setViewValue(this.container, this.data);
// 		const onMouseMove = (moveEvt) => {
// 			this.container.dispatchEvent(new CustomEvent('moveToggle'));
// 			// console.log(this.viewValue);
// 		}
// 		setMouseHandler(this.container, onMouseMove);
// 	}
// 	addScale() {
// 		this.container.addEventListener('initScale', () => {
// 			if (this.data.isScale) {
// 				const scale = new Scale(this.container, this.scale, this.data.isVertical);
// 			}
// 		});
// 	}
// 	changeTab() {
// 		this.container.addEventListener('changeTab', () => {
// 			this.setTab();
// 		});
// 	}
// 	changeInput() {
// 		this.container.addEventListener('changeInput', () => {
// 			// console.log(222);
// 			// console.log(this.viewValue);
// 			setToggleStyle(this.minToggleElem, this.viewValue.min * this.size, this.data.isVertical);
// 			setToggleStyle(this.maxToggleElem, this.viewValue.max * this.size, this.data.isVertical);
// 			this.setTab();
// 		});
// 	}
// }
// export {View, Value, TabText};


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Z1bmN0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luaXQtdmlldy1tYXJrdXAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9wcmVzZW50ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjYWxlLnRzIiwid2VicGFjazovLy8uL3NyYy90b2dnbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUF3QztBQUd4QyxNQUFNLFdBQVcsR0FBUztJQUN6QixNQUFNLEVBQUUsb0JBQW9CO0lBQzVCLFVBQVUsRUFBRSxnQkFBZ0I7SUFDNUIsVUFBVSxFQUFFLGdCQUFnQjtJQUM1QixPQUFPLEVBQUUsS0FBSztJQUNkLEtBQUssRUFBRSxFQUFFO0lBQ1QsSUFBSSxFQUFFLENBQUM7SUFDUCxRQUFRLEVBQUUsQ0FBQztJQUNYLFFBQVEsRUFBRSxHQUFHO0lBQ2IsY0FBYyxFQUFFLEVBQUU7SUFDbEIsY0FBYyxFQUFFLEVBQUU7SUFDbEIsT0FBTyxFQUFFLElBQUk7SUFDYixVQUFVLEVBQUUsS0FBSztJQUNqQixLQUFLLEVBQUUsSUFBSTtJQUNYLE9BQU8sRUFBRSxJQUFJO0lBQ2IsYUFBYSxFQUFFLENBQUM7Q0FDaEI7QUFDRCxNQUFNLFdBQVcsR0FBUztJQUN6QixNQUFNLEVBQUUsb0JBQW9CO0lBQzVCLFVBQVUsRUFBRSxnQkFBZ0I7SUFDNUIsVUFBVSxFQUFFLGdCQUFnQjtJQUM1QixPQUFPLEVBQUUsSUFBSTtJQUNiLEtBQUssRUFBRSxDQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUM7SUFDdkQsSUFBSSxFQUFFLENBQUM7SUFDUCxRQUFRLEVBQUUsQ0FBQztJQUNYLFFBQVEsRUFBRSxDQUFDO0lBQ1gsY0FBYyxFQUFFLENBQUM7SUFDakIsY0FBYyxFQUFFLENBQUM7SUFDakIsT0FBTyxFQUFFLElBQUk7SUFDYixVQUFVLEVBQUUsSUFBSTtJQUNoQixLQUFLLEVBQUUsSUFBSTtJQUNYLE9BQU8sRUFBRSxJQUFJO0lBQ2IsYUFBYSxFQUFFLENBQUM7Q0FDaEI7QUFFRCxNQUFNLFlBQVksR0FBRyxDQUFDLElBQVUsRUFBRSxFQUFFO0lBQ25DLElBQUksQ0FBQyxjQUFjLEdBQUcsOERBQVEsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2xGLElBQUksQ0FBQyxjQUFjLEdBQUcsOERBQVEsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ25GLENBQUM7QUFFRCxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDMUIsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBRWM7Ozs7Ozs7Ozs7Ozs7QUM5Q3hDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBTSxlQUFlLEdBQUcsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLE1BQU8sRUFBRSxJQUFLLEVBQUUsRUFBRTtJQUV4RCxNQUFNLFdBQVcsR0FBRyxDQUFDLEdBQUcsRUFBRSxFQUFFO1FBQzNCLElBQUksTUFBTSxFQUFFO1lBQ1gsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ1o7UUFFRCxNQUFNLFdBQVcsR0FBRyxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQy9CLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNqQixDQUFDO1FBQ0QsTUFBTSxTQUFTLEdBQUcsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUMzQixJQUFJLElBQUksRUFBRTtnQkFDVCxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDWjtZQUNELFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDbkQsUUFBUSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUN4RCxDQUFDO1FBQ0QsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUNwRCxRQUFRLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0FBQ2pELENBQUM7QUFFRCxNQUFNLEtBQUssR0FBRyxDQUFDLEtBQWEsRUFBRSxJQUFZLEVBQUUsRUFBRTtJQUM3QyxNQUFNLFNBQVMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDeEcsSUFBSSxPQUFPLEdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDakYsT0FBTyxPQUFPLENBQUM7QUFDaEIsQ0FBQztBQUVELE1BQU0sUUFBUSxHQUFHLENBQUMsS0FBYSxFQUFFLEdBQVcsRUFBRSxHQUFXLEVBQUUsRUFBRTtJQUM1RCxJQUFJLEtBQUssR0FBRyxHQUFHLEVBQUU7UUFDaEIsS0FBSyxHQUFHLEdBQUcsQ0FBQztRQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7S0FDdEI7U0FBTSxJQUFJLEtBQUssR0FBRyxHQUFHLEVBQUU7UUFDdkIsS0FBSyxHQUFHLEdBQUcsQ0FBQztRQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7S0FDdEI7SUFDRCxPQUFPLEtBQUssQ0FBQztBQUNkLENBQUM7QUFFRCxNQUFNLFNBQVMsR0FBRyxDQUFDLEtBQWEsRUFBRSxHQUFXLEVBQUUsR0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztBQUUzRixNQUFNLE9BQU8sR0FBRyxDQUFDLEtBQWEsRUFBRSxHQUFXLEVBQUUsR0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FB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Q3pELG9CQUFvQjtBQUNwQixRQUFRO0FBQ1IsS0FBSztBQUNMLG1CQUFtQjtBQUNuQiwyREFBMkQ7QUFDM0QsMEJBQTBCO0FBQzFCLHFDQUFxQztBQUNyQywrRkFBK0Y7QUFDL0YsK0ZBQStGO0FBQy9GLG9CQUFvQjtBQUNwQixRQUFRO0FBQ1IsS0FBSztBQUNMLElBQUk7QUFFSixpQ0FBaUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJpbXBvcnQge3NldExpbWl0fSBmcm9tICcuL2Z1bmN0aW9ucy50cyc7XHJcbmltcG9ydCB7RGF0YX0gZnJvbSAnLi9pbnRlcmZhY2VzLnRzJztcclxuXHJcbmNvbnN0IHNsaWRlckRhdGExOiBEYXRhID0ge1xyXG5cdHdyYXBJZDogJyN0cy1zbGlkZXJfX3dyYXAtMScsXHJcblx0bWluSW5wdXRJZDogJ3BhZ2VfX2lucHV0LTExJyxcclxuXHRtYXhJbnB1dElkOiAncGFnZV9faW5wdXQtMTInLFxyXG5cdGlzQXJyYXk6IGZhbHNlLFxyXG5cdGFycmF5OiBbXSxcclxuXHRzdGVwOiAxLFxyXG5cdG1pblZhbHVlOiAwLFxyXG5cdG1heFZhbHVlOiAxMDAsXHJcblx0bWluVG9nZ2xlVmFsdWU6IDIwLFxyXG5cdG1heFRvZ2dsZVZhbHVlOiA0MCxcclxuXHRpc1JhbmdlOiB0cnVlLFxyXG5cdGlzVmVydGljYWw6IGZhbHNlLFxyXG5cdGlzVGFiOiB0cnVlLFxyXG5cdGlzU2NhbGU6IHRydWUsXHJcblx0c2NhbGVRdWFudGl0eTogNFxyXG59XHJcbmNvbnN0IHNsaWRlckRhdGEyOiBEYXRhID0ge1xyXG5cdHdyYXBJZDogJyN0cy1zbGlkZXJfX3dyYXAtMicsXHJcblx0bWluSW5wdXRJZDogJ3BhZ2VfX2lucHV0LTIxJyxcclxuXHRtYXhJbnB1dElkOiAncGFnZV9faW5wdXQtMjInLFxyXG5cdGlzQXJyYXk6IHRydWUsXHJcblx0YXJyYXk6IFsn0LzQsNC70L4nLCAn0L3QtdC80L3QvtCz0L4nLCAn0YHRgNC10LTQvdC1JywgJ9Cx0L7Qu9GM0YjQtScsICfQvNC90L7Qs9C+J10sXHJcblx0c3RlcDogMSxcclxuXHRtaW5WYWx1ZTogMCxcclxuXHRtYXhWYWx1ZTogNCxcclxuXHRtaW5Ub2dnbGVWYWx1ZTogMixcclxuXHRtYXhUb2dnbGVWYWx1ZTogMyxcclxuXHRpc1JhbmdlOiB0cnVlLFxyXG5cdGlzVmVydGljYWw6IHRydWUsXHJcblx0aXNUYWI6IHRydWUsXHJcblx0aXNTY2FsZTogdHJ1ZSxcclxuXHRzY2FsZVF1YW50aXR5OiA1XHJcbn1cclxuXHJcbmNvbnN0IHNldERhdGFMaW1pdCA9IChkYXRhOiBEYXRhKSA9PiB7XHJcblx0ZGF0YS5taW5Ub2dnbGVWYWx1ZSA9IHNldExpbWl0KGRhdGEubWluVG9nZ2xlVmFsdWUsIGRhdGEubWluVmFsdWUsIGRhdGEubWF4VmFsdWUpO1xyXG5cdGRhdGEubWF4VG9nZ2xlVmFsdWUgPSBzZXRMaW1pdChkYXRhLm1heFRvZ2dsZVZhbHVlLCBkYXRhLm1pblZhbHVlLCBkYXRhLm1heFZhbHVlKTtcclxufVxyXG5cclxuc2V0RGF0YUxpbWl0KHNsaWRlckRhdGExKTtcclxuc2V0RGF0YUxpbWl0KHNsaWRlckRhdGEyKTtcclxuXHJcbmV4cG9ydCB7RGF0YSwgc2xpZGVyRGF0YTEsIHNsaWRlckRhdGEyfTsiLCJjb25zdCBzZXRNb3VzZUhhbmRsZXIgPSAoZWxlbSwgb25Nb3ZlLCBvbkRvdm4/LCBvblVwPykgPT4ge1xyXG5cclxuXHRjb25zdCBvbk1vdXNlRG93biA9IChldnQpID0+IHtcclxuXHRcdGlmIChvbkRvdm4pIHtcclxuXHRcdFx0b25Eb3ZuKGV2dCk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdGNvbnN0IG9uTW91c2VNb3ZlID0gKG1vdmVFdnQpID0+IHtcclxuXHRcdFx0b25Nb3ZlKG1vdmVFdnQpO1xyXG5cdFx0fVxyXG5cdFx0Y29uc3Qgb25Nb3VzZVVwID0gKHVwRXZ0KSA9PiB7XHJcblx0XHRcdGlmIChvblVwKSB7XHJcblx0XHRcdFx0b25VcCh1cEV2dCk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uTW91c2VVcCk7XHJcblx0XHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKTtcclxuXHRcdH1cclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKTtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbk1vdXNlVXApO1xyXG5cdH1cclxuXHJcblx0ZWxlbS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBvbk1vdXNlRG93bik7XHJcbn1cclxuXHJcbmNvbnN0IHJvdW5kID0gKHZhbHVlOiBudW1iZXIsIHN0ZXA6IG51bWJlcikgPT4ge1xyXG5cdGNvbnN0IHByZWNpc2lvbiA9IHggPT4gKyggKHgudG9TdHJpbmcoKS5pbmNsdWRlcygnLicpKSA/ICh4LnRvU3RyaW5nKCkuc3BsaXQoJy4nKS5wb3AoKS5sZW5ndGgpIDogKDApICk7XHJcblx0bGV0IHJvdW5kZWQ6IHN0cmluZyA9IChNYXRoLnJvdW5kKHZhbHVlIC8gc3RlcCkgKiBzdGVwKS50b0ZpeGVkKHByZWNpc2lvbihzdGVwKSk7XHJcblx0cmV0dXJuIHJvdW5kZWQ7XHJcbn1cclxuXHJcbmNvbnN0IHNldExpbWl0ID0gKHZhbHVlOiBudW1iZXIsIG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcikgPT4ge1xyXG5cdGlmICh2YWx1ZSA+IG1heCkge1xyXG5cdFx0dmFsdWUgPSBtYXg7XHJcblx0XHRjb25zb2xlLmxvZygn0LHQvtC70YzRiNC1Jyk7XHJcblx0fSBlbHNlIGlmICh2YWx1ZSA8IG1pbikge1xyXG5cdFx0dmFsdWUgPSBtaW47XHJcblx0XHRjb25zb2xlLmxvZygn0LzQtdC90YzRiNC1Jyk7XHJcblx0fVxyXG5cdHJldHVybiB2YWx1ZTtcclxufVxyXG5cclxuY29uc3QgdG9QcmVjZW50ID0gKHZhbHVlOiBudW1iZXIsIG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcikgPT4gKHZhbHVlIC0gbWluKSAvIChtYXggLSBtaW4pO1xyXG5cclxuY29uc3QgdG9WYWx1ZSA9ICh2YWx1ZTogbnVtYmVyLCBtaW46IG51bWJlciwgbWF4OiBudW1iZXIpID0+IChtaW4gKyAobWF4IC0gbWluKSAqIHZhbHVlKTtcclxuXHJcbmNvbnN0IHNldFJhbmdlU3R5bGUgPSAocmFuZ2U6IEhUTUxFbGVtZW50LCBtaW46IG51bWJlciwgbWF4OiBudW1iZXIsIGlzVmVydGljYWw6IGJvb2xlYW4pID0+IHtcclxuXHRpZiAoaXNWZXJ0aWNhbCkge1xyXG5cdFx0cmFuZ2Uuc3R5bGUudG9wID0gYCR7bWlufXB4YDtcclxuXHRcdHJhbmdlLnN0eWxlLmhlaWdodCA9IGAkeyhtYXggLSBtaW4pfXB4YDtcclxuXHR9IGVsc2Uge1xyXG5cdFx0cmFuZ2Uuc3R5bGUubGVmdCA9IGAke21pbn1weGA7XHJcblx0XHRyYW5nZS5zdHlsZS53aWR0aCA9IGAkeyhtYXggLSBtaW4pfXB4YDtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCB7c2V0TW91c2VIYW5kbGVyLCByb3VuZCwgc2V0TGltaXQsIHRvUHJlY2VudCwgdG9WYWx1ZSwgc2V0UmFuZ2VTdHlsZX07IiwiaW1wb3J0IHtTY2FsZX0gZnJvbSAnLi9zY2FsZS50cyc7XHJcbmltcG9ydCB7Vmlld30gZnJvbSAnLi92aWV3LnRzJztcclxuaW1wb3J0IHtQcmVzZW50ZXJ9IGZyb20gJy4vcHJlc2VudGVyLnRzJztcclxuXHJcbmltcG9ydCB7c2xpZGVyRGF0YTEsIHNsaWRlckRhdGEyfSBmcm9tICcuL2RhdGEudHMnO1xyXG5cclxuY29uc3QgcHJlc2VudGVyMSA9IG5ldyBQcmVzZW50ZXIoc2xpZGVyRGF0YTEpO1xyXG4vLyBjb25zdCB2aWV3ID0gbmV3IFZpZXcoc2xpZGVyRGF0YTEpO1xyXG5cclxuY29uc3QgcHJlc2VudGVyMiA9IG5ldyBQcmVzZW50ZXIoc2xpZGVyRGF0YTIpO1xyXG4vLyBjb25zb2xlLmxvZyhwcmVzZW50ZXIxKTtcclxuXHJcbiIsImNvbnN0IGluaXRWaWV3TWFya3VwID0gKHdyYXA6IHN0cmluZywgdmVydGljYWw6IGJvb2xlYW4pID0+IHtcclxuXHRjb25zdCBjb250b2xNYXJrdXA6IHN0cmluZyA9IGA8ZGl2IGNsYXNzPVwidHMtc2xpZGVyX19jb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0cy1zbGlkZXJfX2JhclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidHMtc2xpZGVyX190b2dnbGUgdHMtc2xpZGVyX190b2dnbGUtLW1pblwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0cy1zbGlkZXJfX3RvZ2dsZS12YWx1ZSB0cy1zbGlkZXJfX3RvZ2dsZS12YWx1ZS0tbWluXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidHMtc2xpZGVyX190b2dnbGUgdHMtc2xpZGVyX190b2dnbGUtLW1heFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0cy1zbGlkZXJfX3RvZ2dsZS12YWx1ZSB0cy1zbGlkZXJfX3RvZ2dsZS12YWx1ZS0tbWF4XCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidHMtc2xpZGVyX19yYW5nZVwiPjwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+YDtcclxuXHRjb25zdCBjb250cm9sV3JhcDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHdyYXApO1xyXG5cdGNvbnRyb2xXcmFwLmlubmVySFRNTCA9IGNvbnRvbE1hcmt1cDtcclxuICBjb25zdCBkaXYgPSBjb250cm9sV3JhcC5xdWVyeVNlbGVjdG9yQWxsKCdkaXYnKTtcclxuICBpZiAodmVydGljYWwpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGl2Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGZpcnN0Q2xhc3M6IHN0cmluZyA9IGRpdltpXS5jbGFzc0xpc3RbMF07XHJcbiAgICAgIGNvbnN0IHZlcnRpY2FsQ2xhc3M6IHN0cmluZyA9IGZpcnN0Q2xhc3MgKyAnLS12ZXJ0aWNhbCc7XHJcbiAgICAgIGRpdltpXS5jbGFzc0xpc3QuYWRkKHZlcnRpY2FsQ2xhc3MpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgbWFya3VwID0gKHNsaWRlcjogSFRNTEVsZW1lbnQpID0+IHtcclxuICBpbnRlcmZhY2UgTWFya3VwIHtcclxuICAgIG1pbjogSFRNTEVsZW1lbnQ7XHJcbiAgICBtYXg6IEhUTUxFbGVtZW50O1xyXG4gICAgcmFuZ2U6IEhUTUxFbGVtZW50O1xyXG4gICAgYmFyOiBIVE1MRWxlbWVudDtcclxuICAgIG1pblRhYjogSFRNTEVsZW1lbnQ7XHJcbiAgICBtYXhUYWI6IEhUTUxFbGVtZW50O1xyXG4gIH1cclxuICBsZXQgbWFya3VwOiBNYXJrdXAgPSB7ICBcclxuICAgICBtaW46IHNsaWRlci5xdWVyeVNlbGVjdG9yKCcudHMtc2xpZGVyX190b2dnbGUtLW1pbicpLFxyXG4gICAgIG1heDogc2xpZGVyLnF1ZXJ5U2VsZWN0b3IoJy50cy1zbGlkZXJfX3RvZ2dsZS0tbWF4JyksXHJcbiAgICAgcmFuZ2U6IHNsaWRlci5xdWVyeVNlbGVjdG9yKCcudHMtc2xpZGVyX19yYW5nZScpLFxyXG4gICAgIGJhcjogc2xpZGVyLnF1ZXJ5U2VsZWN0b3IoJy50cy1zbGlkZXJfX2JhcicpLFxyXG4gICAgIG1pblRhYjogc2xpZGVyLnF1ZXJ5U2VsZWN0b3IoJy50cy1zbGlkZXJfX3RvZ2dsZS12YWx1ZS0tbWluJyksXHJcbiAgICAgbWF4VGFiOiBzbGlkZXIucXVlcnlTZWxlY3RvcignLnRzLXNsaWRlcl9fdG9nZ2xlLXZhbHVlLS1tYXgnKVxyXG4gIH1cclxuICByZXR1cm4gbWFya3VwO1xyXG59XHJcblxyXG5leHBvcnQge2luaXRWaWV3TWFya3VwLCBtYXJrdXB9OyIsImltcG9ydCB7RGF0YSwgVmFsdWUsIFRhYlRleHR9IGZyb20gJy4vaW50ZXJmYWNlcy50cyc7XHJcbmltcG9ydCB7c2V0TW91c2VIYW5kbGVyLCByb3VuZCwgc2V0TGltaXR9IGZyb20gJy4vZnVuY3Rpb25zLnRzJztcclxuXHJcblxyXG5jbGFzcyBNb2RlbCB7XHJcblxyXG5cdGRhdGE6IERhdGE7XHJcblx0bWluSW5wdXQ6IGFueTtcclxuXHRtYXhJbnB1dDogYW55O1xyXG5cdHZhbHVlOiBWYWx1ZTtcclxuXHRwcmVjZW50OiBWYWx1ZTtcclxuXHR0YWJUZXh0OiBUYWJUZXh0O1xyXG5cdG9ic2VydmVyOiBIVE1MRWxlbWVudDtcclxuXHRtaW46IG51bWJlcjtcclxuXHRtYXg6IG51bWJlcjtcclxuXHRzY2FsZTogc3RyaW5nW107XHJcblxyXG5cdGNvbnN0cnVjdG9yKGRhdGEpIHtcclxuXHRcdHRoaXMuZGF0YSA9IGRhdGE7XHJcblx0XHR0aGlzLnRhYlRleHQgPSB7XHJcblx0XHRcdG1pbjogJycsXHJcblx0XHRcdG1heDogJydcclxuXHRcdH1cclxuXHRcdHRoaXMudmFsdWUgPSB7XHJcblx0XHRcdG1pbjogMCxcclxuXHRcdFx0bWF4OiAwXHJcblx0XHR9XHJcblx0XHR0aGlzLnByZWNlbnQgPSB7XHJcblx0XHRcdG1pbjogMCxcclxuXHRcdFx0bWF4OiAwXHJcblx0XHR9XHJcblx0XHR0aGlzLnNjYWxlID0gW107XHJcblx0XHR0aGlzLm9ic2VydmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRXZlbnQnKTtcclxuXHRcdHRoaXMuaW5pdCgpO1xyXG5cdFx0dGhpcy5zZXRTY2FsZSgpO1xyXG5cdFx0dGhpcy5hZGRMaXN0ZW5lcigpO1xyXG5cdFx0dGhpcy5jaGFuZ2VJbnB1dCgpO1xyXG5cdH1cclxuXHJcblx0c2V0SW5wdXQoKSB7XHJcblx0XHR0aGlzLm1pbklucHV0LnZhbHVlID0gdGhpcy50YWJUZXh0Lm1pbjtcclxuXHRcdHRoaXMubWF4SW5wdXQudmFsdWUgPSB0aGlzLnRhYlRleHQubWF4O1xyXG5cdH1cclxuXHJcblx0c2V0QXJyYXlWYWx1ZSgpIHtcclxuXHRcdGxldCBtaW4gPSBNYXRoLnJvdW5kKHRoaXMucHJlY2VudC5taW4gKiAodGhpcy5kYXRhLmFycmF5Lmxlbmd0aCAtIDEpKTtcclxuXHRcdGxldCBtYXggPSBNYXRoLnJvdW5kKHRoaXMucHJlY2VudC5tYXggKiAodGhpcy5kYXRhLmFycmF5Lmxlbmd0aCAtIDEpKTtcclxuXHRcdHRoaXMudGFiVGV4dC5taW4gPSB0aGlzLmRhdGEuYXJyYXlbbWluXTtcclxuXHRcdHRoaXMudGFiVGV4dC5tYXggPSB0aGlzLmRhdGEuYXJyYXlbbWF4XTtcclxuXHRcdHRoaXMuc2V0SW5wdXQoKTtcclxuXHR9XHJcblxyXG5cdGluaXQoKSB7XHJcblx0XHRpZiAodGhpcy5kYXRhLmlzQXJyYXkpIHtcclxuXHRcdFx0dGhpcy5vYnNlcnZlci5hZGRFdmVudExpc3RlbmVyKCdzZXRQcmVjZW50JywgKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMuc2V0QXJyYXlWYWx1ZSgpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMudGFiVGV4dC5taW4gPSByb3VuZCh0aGlzLmRhdGEubWluVG9nZ2xlVmFsdWUsIHRoaXMuZGF0YS5zdGVwKTtcclxuXHRcdFx0dGhpcy50YWJUZXh0Lm1heCA9IHJvdW5kKHRoaXMuZGF0YS5tYXhUb2dnbGVWYWx1ZSwgdGhpcy5kYXRhLnN0ZXApO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5taW5JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgdGhpcy5kYXRhLm1pbklucHV0SWQpO1xyXG5cdFx0dGhpcy5tYXhJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgdGhpcy5kYXRhLm1heElucHV0SWQpO1xyXG5cdFx0dGhpcy5zZXRJbnB1dCgpO1xyXG5cdH1cclxuXHJcblx0c2V0U2NhbGUoKSB7XHJcblx0XHRpZiAodGhpcy5kYXRhLmlzQXJyYXkpIHtcclxuXHRcdFx0aWYgKHRoaXMuZGF0YS5pc1NjYWxlKSB7XHJcblx0XHRcdFx0dGhpcy5zY2FsZSA9IHRoaXMuZGF0YS5hcnJheTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKHRoaXMuZGF0YS5pc1NjYWxlKSB7XHJcblx0XHRcdFx0bGV0IHF1YW50aXR5ID0gdGhpcy5kYXRhLnNjYWxlUXVhbnRpdHk7XHJcblx0XHRcdFx0aWYgKHF1YW50aXR5IDwgMikge1xyXG5cdFx0XHRcdFx0cXVhbnRpdHkgPSAyO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHF1YW50aXR5OyBpKyspIHtcclxuXHRcdFx0XHRcdGxldCB0ZXh0VmFsdWU6IG51bWJlciA9IE1hdGgucm91bmQoKHRoaXMuZGF0YS5taW5WYWx1ZSArICh0aGlzLmRhdGEubWF4VmFsdWUgLSB0aGlzLmRhdGEubWluVmFsdWUpIC8gKHF1YW50aXR5IC0gMSkgKiBpKSAvIHRoaXMuZGF0YS5zdGVwKSAqIHRoaXMuZGF0YS5zdGVwO1xyXG5cdFx0XHRcdFx0bGV0IHRleHQ6IHN0cmluZyA9IHJvdW5kKHRleHRWYWx1ZSwgdGhpcy5kYXRhLnN0ZXApO1xyXG5cdFx0XHRcdFx0dGhpcy5zY2FsZS5wdXNoKHRleHQpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0YWRkTGlzdGVuZXIoKSB7XHJcblx0XHR0aGlzLm9ic2VydmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZVZhbHVlJywgKCkgPT4ge1xyXG5cdFx0XHRpZiAodGhpcy5kYXRhLmlzQXJyYXkpIHtcclxuXHRcdFx0XHR0aGlzLnNldEFycmF5VmFsdWUoKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aGlzLnRhYlRleHQubWluID0gcm91bmQodGhpcy52YWx1ZS5taW4sIHRoaXMuZGF0YS5zdGVwKTtcclxuXHRcdFx0XHR0aGlzLnRhYlRleHQubWF4ID0gcm91bmQodGhpcy52YWx1ZS5tYXgsIHRoaXMuZGF0YS5zdGVwKTtcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLnNldElucHV0KCk7XHJcblx0XHRcdHRoaXMub2JzZXJ2ZXIuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2NoYW5nZVRhYlRleHQnKSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0Y2hhbmdlSW5wdXQoKSB7XHJcblx0XHRjb25zdCBvbkJsdXIgPSAoKSA9PiB7XHJcblx0XHRcdHRoaXMudmFsdWUubWluID0gK3RoaXMubWluSW5wdXQudmFsdWU7XHJcblx0XHRcdHRoaXMudmFsdWUubWF4ID0gK3RoaXMubWF4SW5wdXQudmFsdWU7XHJcblx0XHRcdC8vIGNvbnNvbGUubG9nKHRoaXMudmFsdWUubWluICsgJyAnICsgdGhpcy52YWx1ZS5tYXggKyAnICcgKyB0aGlzLmRhdGEubWluVmFsdWUpO1xyXG5cdFx0XHR0aGlzLnZhbHVlLm1pbiA9IHNldExpbWl0KHRoaXMudmFsdWUubWluLCB0aGlzLmRhdGEubWluVmFsdWUsIHRoaXMudmFsdWUubWF4KTtcclxuXHRcdFx0dGhpcy52YWx1ZS5tYXggPSBzZXRMaW1pdCh0aGlzLnZhbHVlLm1heCwgdGhpcy52YWx1ZS5taW4sIHRoaXMuZGF0YS5tYXhWYWx1ZSk7XHJcblx0XHRcdC8vIGNvbnNvbGUubG9nKHRoaXMudmFsdWUubWluICsgJyAnICsgdGhpcy52YWx1ZS5tYXgpO1xyXG5cdFx0XHR0aGlzLm1pbklucHV0LnZhbHVlID0gdGhpcy52YWx1ZS5taW4udG9TdHJpbmcoKTtcclxuXHRcdFx0dGhpcy5tYXhJbnB1dC52YWx1ZSA9IHRoaXMudmFsdWUubWF4LnRvU3RyaW5nKCk7XHJcblx0XHRcdHRoaXMudGFiVGV4dC5taW4gPSByb3VuZCh0aGlzLm1pbklucHV0LnZhbHVlLCB0aGlzLmRhdGEuc3RlcCk7XHJcblx0XHRcdHRoaXMudGFiVGV4dC5tYXggPSByb3VuZCh0aGlzLm1heElucHV0LnZhbHVlLCB0aGlzLmRhdGEuc3RlcCk7XHJcblx0XHRcdHRoaXMub2JzZXJ2ZXIuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2NoYW5nZUlucHV0JykpO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5taW5JbnB1dC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgb25CbHVyKTtcclxuXHRcdHRoaXMubWF4SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIG9uQmx1cik7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQge01vZGVsfTsiLCJpbXBvcnQge1ZpZXd9IGZyb20gJy4vdmlldy50cyc7XHJcbmltcG9ydCB7RGF0YSwgVmFsdWUsIFRhYlRleHR9IGZyb20gJy4vaW50ZXJmYWNlcy50cyc7XHJcbmltcG9ydCB7TW9kZWx9IGZyb20gJy4vbW9kZWwudHMnO1xyXG5pbXBvcnQge3NldE1vdXNlSGFuZGxlciwgcm91bmQsIHNldFJhbmdlU3R5bGUsIHRvUHJlY2VudCwgdG9WYWx1ZX0gZnJvbSAnLi9mdW5jdGlvbnMudHMnO1xyXG5pbXBvcnQge21hcmt1cH0gZnJvbSAnLi9pbml0LXZpZXctbWFya3VwLnRzJztcclxuXHJcbmNsYXNzIFByZXNlbnRlciB7XHJcblxyXG5cdGRhdGE6IERhdGE7XHJcblx0dmlldzogVmlldztcclxuXHRtb2RlbDogTW9kZWw7XHJcblx0bWF4OiBudW1iZXI7XHJcblx0bWluOiBudW1iZXI7XHJcblx0dmFsdWU6IFZhbHVlO1xyXG5cdG1vZGVsVGFiVGV4dDogVGFiVGV4dDtcclxuXHJcblx0Y29uc3RydWN0b3IoZGF0YSkge1xyXG5cdFx0dGhpcy5kYXRhID0gZGF0YTtcclxuXHRcdHRoaXMudmFsdWUgPSB7XHJcblx0XHRcdG1pbjogdGhpcy5kYXRhLm1pblRvZ2dsZVZhbHVlLFxyXG5cdFx0XHRtYXg6IHRoaXMuZGF0YS5tYXhUb2dnbGVWYWx1ZVxyXG5cdFx0fVxyXG5cdFx0dGhpcy5pbml0KCk7XHJcblx0XHR0aGlzLm9uTW92ZVRvZ2dsZSgpO1xyXG5cdFx0dGhpcy5vbkNoYW5nZVRhYlRleHQoKTtcclxuXHRcdHRoaXMub25DYW5nZUlucHV0KCk7XHJcblx0fVxyXG5cclxuXHRzZXRUYWJUZXh0KCkge1xyXG5cdFx0dGhpcy52aWV3LnRhYlRleHQubWluID0gdGhpcy5tb2RlbC50YWJUZXh0Lm1pbjtcclxuXHRcdHRoaXMudmlldy50YWJUZXh0Lm1heCA9IHRoaXMubW9kZWwudGFiVGV4dC5tYXg7XHJcblx0fVxyXG5cclxuXHRpbml0U2NhbGUoKSB7XHJcblx0XHR0aGlzLnZpZXcuc2NhbGUgPSB0aGlzLm1vZGVsLnNjYWxlO1xyXG5cdFx0dGhpcy52aWV3LmNvbnRhaW5lci5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnaW5pdFNjYWxlJykpO1xyXG5cdH1cclxuXHJcblx0c2V0VG9WaWV3KCkge1xyXG5cdFx0dGhpcy52aWV3LnByZWNlbnQubWluID0gdG9QcmVjZW50KHRoaXMudmFsdWUubWluLCB0aGlzLmRhdGEubWluVmFsdWUsIHRoaXMuZGF0YS5tYXhWYWx1ZSk7XHJcblx0XHR0aGlzLnZpZXcucHJlY2VudC5tYXggPSB0b1ByZWNlbnQodGhpcy52YWx1ZS5tYXgsIHRoaXMuZGF0YS5taW5WYWx1ZSwgdGhpcy5kYXRhLm1heFZhbHVlKTtcclxuXHRcdC8vIGNvbnNvbGUubG9nKHRoaXMudmlldy5wcmVjZW50KTtcclxuXHR9XHJcblxyXG5cdHNldFRvTW9kZWwoKSB7XHJcblx0XHR0aGlzLm1vZGVsLnZhbHVlLm1pbiA9IHRvVmFsdWUodGhpcy52aWV3LnByZWNlbnQubWluLCB0aGlzLmRhdGEubWluVmFsdWUsIHRoaXMuZGF0YS5tYXhWYWx1ZSk7XHJcblx0XHR0aGlzLm1vZGVsLnZhbHVlLm1heCA9IHRvVmFsdWUodGhpcy52aWV3LnByZWNlbnQubWF4LCB0aGlzLmRhdGEubWluVmFsdWUsIHRoaXMuZGF0YS5tYXhWYWx1ZSk7XHJcblx0fVxyXG5cclxuXHRpbml0KCkge1xyXG5cdFx0dGhpcy52aWV3ID0gbmV3IFZpZXcodGhpcy5kYXRhKTtcclxuXHRcdHRoaXMubW9kZWwgPSBuZXcgTW9kZWwodGhpcy5kYXRhKTtcclxuXHRcdHRoaXMuaW5pdFNjYWxlKCk7XHJcblx0XHR0aGlzLnNldFRvVmlldygpO1xyXG5cdFx0dGhpcy5tb2RlbC5wcmVjZW50ID0gdGhpcy52aWV3LnByZWNlbnQ7XHJcblx0XHR0aGlzLm1vZGVsLm9ic2VydmVyLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdzZXRQcmVjZW50JykpO1xyXG5cdFx0dGhpcy5zZXRUYWJUZXh0KCk7XHJcblx0XHR0aGlzLnZpZXcuc2V0VGFiKCk7XHJcblx0XHR0aGlzLnZpZXcuY29udGFpbmVyLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdpbml0VmFsdWUnKSk7XHJcblxyXG5cdFx0dGhpcy52aWV3LmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2VWYWx1ZScsICgpID0+IHtcclxuXHRcdFx0dGhpcy5tb2RlbC5vYnNlcnZlci5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnY2hhbmdlVmFsdWUnKSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdG9uTW92ZVRvZ2dsZSgpIHtcclxuXHRcdGNvbnN0IG9uQ2hhbmdlVmlldyA9ICgpID0+IHtcclxuXHRcdFx0dGhpcy5zZXRUb01vZGVsKCk7XHJcblx0XHRcdHRoaXMubW9kZWwub2JzZXJ2ZXIuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2NoYW5nZVZhbHVlJykpO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy52aWV3LmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdtb3ZlVG9nZ2xlJywgb25DaGFuZ2VWaWV3KTtcclxuXHR9XHJcblxyXG5cdG9uQ2hhbmdlVGFiVGV4dCgpIHtcclxuXHRcdHRoaXMubW9kZWwub2JzZXJ2ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlVGFiVGV4dCcsICgpID0+IHtcclxuXHRcdFx0dGhpcy5zZXRUYWJUZXh0KCk7XHJcblx0XHRcdHRoaXMudmlldy5jb250YWluZXIuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2NoYW5nZVRhYicpKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRvbkNhbmdlSW5wdXQoKSB7XHJcblx0XHR0aGlzLm1vZGVsLm9ic2VydmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZUlucHV0JywgKCkgPT4ge1xyXG5cdFx0XHR0aGlzLnZpZXcudGFiVGV4dCA9IHRoaXMubW9kZWwudGFiVGV4dDtcclxuXHRcdFx0dGhpcy52YWx1ZS5taW4gPSArdGhpcy5tb2RlbC52YWx1ZS5taW47XHJcblx0XHRcdHRoaXMudmFsdWUubWF4ID0gK3RoaXMubW9kZWwudmFsdWUubWF4O1xyXG5cdFx0XHR0aGlzLnNldFRvVmlldygpO1xyXG5cdFx0XHR0aGlzLnNldFRvTW9kZWwoKTtcclxuXHRcdFx0dGhpcy52aWV3LmNvbnRhaW5lci5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnY2hhbmdlSW5wdXQnKSk7XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCB7UHJlc2VudGVyfTsiLCJpbXBvcnQge3JvdW5kfSBmcm9tICcuL2Z1bmN0aW9ucy50cyc7XHJcblxyXG5leHBvcnQgY2xhc3MgU2NhbGUge1xyXG5cclxuXHRzbGlkZXI6IEhUTUxFbGVtZW50O1xyXG5cdHNjYWxlOiBzdHJpbmdbXTtcclxuXHRpc1ZlcnRpY2FsOiBib29sZWFuO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihzbGlkZXIsIHNjYWxlLCBpc1ZlcnRpY2FsKSB7XHJcblx0XHR0aGlzLnNsaWRlciA9IHNsaWRlcjtcclxuXHRcdHRoaXMuc2NhbGUgPSBzY2FsZTtcclxuXHRcdHRoaXMuaXNWZXJ0aWNhbCA9IGlzVmVydGljYWw7XHJcblx0XHR0aGlzLmNyZWF0ZUl0ZW0oKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZUl0ZW0oKSB7XHJcblx0XHRjb25zdCBiYXI6IEhUTUxFbGVtZW50ID0gdGhpcy5zbGlkZXIucXVlcnlTZWxlY3RvcignLnRzLXNsaWRlcl9fYmFyJyk7XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2NhbGUubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0Y29uc3Qgc2NhbGVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0XHRcdHNjYWxlSXRlbS5jbGFzc0xpc3QuYWRkKCd0cy1zbGlkZXJfX3NjYWxlLWl0ZW0nKTtcclxuXHRcdFx0c2NhbGVJdGVtLnRleHRDb250ZW50ID0gdGhpcy5zY2FsZVtpXTtcclxuXHRcdFx0aWYgKHRoaXMuaXNWZXJ0aWNhbCkge1xyXG5cdFx0XHRcdHNjYWxlSXRlbS5jbGFzc0xpc3QuYWRkKCd0cy1zbGlkZXJfX3NjYWxlLWl0ZW0tLXZlcnRpY2FsJyk7XHJcblx0XHRcdFx0c2NhbGVJdGVtLnN0eWxlLnRvcCA9IGAke2Jhci5vZmZzZXRIZWlnaHQgLyAodGhpcy5zY2FsZS5sZW5ndGggLSAxKSAqIGl9cHhgO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNjYWxlSXRlbS5zdHlsZS5sZWZ0ID0gYCR7YmFyLm9mZnNldFdpZHRoIC8gKHRoaXMuc2NhbGUubGVuZ3RoIC0gMSkgKiBpfXB4YDtcclxuXHRcdFx0fVx0XHJcblx0XHRcdGJhci5hcHBlbmQoc2NhbGVJdGVtKTtcclxuXHRcdH1cclxuXHR9XHJcbn0iLCJpbXBvcnQge3NldExpbWl0fSBmcm9tICcuL2Z1bmN0aW9ucy50cyc7XHJcblxyXG5jb25zdCBzZXRUb2dnbGVTdHlsZSA9ICh0b2dnbGU6IEhUTUxFbGVtZW50LCBwaXhlbDogbnVtYmVyLCBpc1ZlcnRpY2FsOiBib29sZWFuKSA9PiB7XHJcblx0XHRpZiAoaXNWZXJ0aWNhbCkge1xyXG5cdFx0XHR0b2dnbGUuc3R5bGUudG9wID0gYCR7cGl4ZWx9cHhgO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dG9nZ2xlLnN0eWxlLmxlZnQgPSBgJHtwaXhlbH1weGA7XHJcblx0fVxyXG59XHJcblxyXG5jbGFzcyBUb2dnbGUge1xyXG5cclxuXHR0b2dnbGU6IEhUTUxFbGVtZW50O1xyXG5cdG1pbjogbnVtYmVyO1xyXG5cdG1heDogbnVtYmVyO1xyXG5cdG1vdXNlUGl4ZWw6IG51bWJlcjtcclxuXHRwaXhlbDogbnVtYmVyO1xyXG5cdHByZWNlbnQ6IG51bWJlcjtcclxuXHRzaXplOiBudW1iZXI7XHJcblx0aXNWZXJ0aWNhbDogYm9vbGVhbjtcclxuXHRpc0ZpeGVkOiBib29sZWFuO1xyXG5cclxuXHRjb25zdHJ1Y3Rvcih0b2dnbGUsIHByZWNlbnQsIHNpemUsIGlzVmVydGljYWwpIHtcclxuXHRcdHRoaXMudG9nZ2xlID0gdG9nZ2xlO1xyXG5cdFx0dGhpcy5zaXplID0gc2l6ZTtcclxuXHRcdHRoaXMucHJlY2VudCA9IHByZWNlbnQ7XHJcblx0XHR0aGlzLm1vdXNlUGl4ZWwgPSB0aGlzLnByZWNlbnQgKiB0aGlzLnNpemU7XHJcblx0XHR0aGlzLnBpeGVsID0gdGhpcy5tb3VzZVBpeGVsO1xyXG5cdFx0dGhpcy5pc1ZlcnRpY2FsID0gaXNWZXJ0aWNhbDtcclxuXHRcdHRoaXMuaXNGaXhlZCA9IGZhbHNlO1xyXG5cdFx0dGhpcy5zZXRTdHlsZSgpO1xyXG5cdFx0dGhpcy5vbk1vdmVUb2dnbGUoKTtcclxuXHR9XHJcblxyXG5cdHNldFN0eWxlKCkge1xyXG5cdFx0c2V0VG9nZ2xlU3R5bGUodGhpcy50b2dnbGUsIHRoaXMucGl4ZWwsIHRoaXMuaXNWZXJ0aWNhbCk7XHJcblx0fVxyXG5cclxuXHRjaGFuZ2VUb2dnbGUoKSB7XHJcblx0XHR0aGlzLm1vdXNlUGl4ZWwgPSB0aGlzLnByZWNlbnQgKiB0aGlzLnNpemU7XHJcblx0XHR0aGlzLnBpeGVsID0gdGhpcy5tb3VzZVBpeGVsO1xyXG5cdFx0dGhpcy5zZXRTdHlsZSgpO1xyXG5cdH1cclxuXHJcblx0b25Nb3ZlVG9nZ2xlKCkge1xyXG5cdFx0Y29uc3Qgb25Nb3VzZURvd24gPSAoZXZ0KSA9PiB7XHJcblx0XHRcdGxldCBzaGlmdFg6IG51bWJlciA9IGV2dC5jbGllbnRYIC0gdGhpcy50b2dnbGUub2Zmc2V0TGVmdDtcclxuXHRcdFx0bGV0IHNoaWZ0WTogbnVtYmVyID0gZXZ0LmNsaWVudFkgLSB0aGlzLnRvZ2dsZS5vZmZzZXRUb3A7XHJcblx0XHRcdGxldCBzdGFydFBpeGVsOiBudW1iZXIgPSB0aGlzLm1vdXNlUGl4ZWw7XHJcblx0XHRcdGNvbnN0IG1vdmVBdCA9IChwYWdlWCwgcGFnZVkpID0+IHtcclxuXHRcdFx0XHRpZiAodGhpcy5pc1ZlcnRpY2FsKSB7XHJcblx0XHRcdFx0XHR0aGlzLm1vdXNlUGl4ZWwgPSBwYWdlWSAtIHNoaWZ0WTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy5tb3VzZVBpeGVsID0gcGFnZVggLSBzaGlmdFg7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMucGl4ZWwgPSB0aGlzLm1vdXNlUGl4ZWw7XHJcblx0XHRcdFx0dGhpcy5waXhlbCA9IHNldExpbWl0KHRoaXMucGl4ZWwsIHRoaXMubWluICogdGhpcy5zaXplLCB0aGlzLm1heCAqIHRoaXMuc2l6ZSk7XHJcblx0XHRcdFx0aWYgKHRoaXMuaXNGaXhlZCkge1xyXG5cdFx0XHRcdFx0dGhpcy5waXhlbCA9IHN0YXJ0UGl4ZWw7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMuc2V0U3R5bGUoKTtcclxuXHRcdFx0XHR0aGlzLnByZWNlbnQgPSB0aGlzLnBpeGVsIC8gdGhpcy5zaXplO1xyXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKHRoaXMucHJlY2VudCk7XHJcblx0XHRcdH1cclxuXHRcdFx0bW92ZUF0KGV2dC5wYWdlWCwgZXZ0LnBhZ2VZKTtcclxuXHJcblx0XHRcdGNvbnN0IG9uTW91c2VNb3ZlID0gKG1vdmVFdnQpID0+IHtcclxuXHRcdFx0XHRtb3ZlQXQobW92ZUV2dC5wYWdlWCwgbW92ZUV2dC4gcGFnZVkpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNvbnN0IG9uTW91c2VVcCA9ICh1cEV2dCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMubW91c2VQaXhlbCA9IHRoaXMucGl4ZWw7XHJcblx0XHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uTW91c2VVcCk7XHJcblx0XHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKTtcclxuXHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uTW91c2VVcCk7XHJcblx0XHR9XHJcblx0XHR0aGlzLnRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBvbk1vdXNlRG93bik7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQge3NldFRvZ2dsZVN0eWxlLCBUb2dnbGV9O1xyXG5cclxuXHJcbi8vIC8vb2xkXHJcblxyXG4vLyBpbXBvcnQge3NldExpbWl0fSBmcm9tICcuL2Z1bmN0aW9ucy50cyc7XHJcblxyXG4vLyBjb25zdCBzZXRUb2dnbGVTdHlsZSA9ICh0b2dnbGU6IEhUTUxFbGVtZW50LCB2YWx1ZTogbnVtYmVyLCB2ZXJ0aWNhbDogYm9vbGVhbikgPT4ge1xyXG4vLyBcdFx0aWYgKHZlcnRpY2FsKSB7XHJcbi8vIFx0XHRcdHRvZ2dsZS5zdHlsZS50b3AgPSBgJHt2YWx1ZX1weGA7XHJcbi8vIFx0XHR9IGVsc2Uge1xyXG4vLyBcdFx0XHR0b2dnbGUuc3R5bGUubGVmdCA9IGAke3ZhbHVlfXB4YDtcclxuLy8gXHR9XHJcbi8vIH1cclxuXHJcbi8vIGNsYXNzIFRvZ2dsZSB7XHJcblxyXG4vLyBcdHRvZ2dsZTogSFRNTEVsZW1lbnQ7XHJcbi8vIFx0bWluOiBudW1iZXI7XHJcbi8vIFx0bWF4OiBudW1iZXI7XHJcbi8vIFx0bW91c2VWYWx1ZTogbnVtYmVyO1xyXG4vLyBcdHZhbHVlOiBudW1iZXI7XHJcbi8vIFx0dmVydGljYWw6IGJvb2xlYW47XHJcbi8vIFx0aXNGaXhlZDogYm9vbGVhbjtcclxuXHJcbi8vIFx0Y29uc3RydWN0b3IodG9nZ2xlLCBtaW4sIG1heCwgdmFsdWUsIHZlcnRpY2FsKSB7XHJcbi8vIFx0XHR0aGlzLnRvZ2dsZSA9IHRvZ2dsZTtcclxuLy8gXHRcdHRoaXMubWluID0gbWluO1xyXG4vLyBcdFx0dGhpcy5tYXggPSBtYXg7XHJcbi8vIFx0XHR0aGlzLm1vdXNlVmFsdWUgPSB2YWx1ZTtcclxuLy8gXHRcdHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuLy8gXHRcdHRoaXMudmVydGljYWwgPSB2ZXJ0aWNhbDtcclxuLy8gXHRcdHRoaXMuaXNGaXhlZCA9IGZhbHNlO1xyXG4vLyBcdFx0dGhpcy5zZXRTdHlsZSgpO1xyXG4vLyBcdH1cclxuLy8gXHRzZXRTdHlsZSgpIHtcclxuLy8gXHRcdHNldFRvZ2dsZVN0eWxlKHRoaXMudG9nZ2xlLCB0aGlzLnZhbHVlLCB0aGlzLnZlcnRpY2FsKTtcclxuLy8gXHR9XHJcbi8vIFx0bW92ZVRvZ2dsZSgpIHtcclxuLy8gXHRcdGNvbnN0IG9uTW91c2VEb3duID0gKGV2dCkgPT4ge1xyXG4vLyBcdFx0XHRldnQucHJldmVudERlZmF1bHQoKTtcclxuLy8gXHRcdFx0bGV0IHNoaWZ0WDogbnVtYmVyID0gZXZ0LmNsaWVudFggLSB0aGlzLnRvZ2dsZS5vZmZzZXRMZWZ0O1xyXG4vLyBcdFx0XHRsZXQgc2hpZnRZOiBudW1iZXIgPSBldnQuY2xpZW50WSAtIHRoaXMudG9nZ2xlLm9mZnNldFRvcDtcclxuLy8gXHRcdFx0bGV0IHN0YXJ0VmFsdWU6IG51bWJlciA9IHRoaXMubW91c2VWYWx1ZTtcclxuLy8gXHRcdFx0Y29uc3QgbW92ZUF0ID0gKHBhZ2VYLCBwYWdlWSkgPT4ge1xyXG4vLyBcdFx0XHRcdGlmICh0aGlzLnZlcnRpY2FsKSB7XHJcbi8vIFx0XHRcdFx0XHR0aGlzLm1vdXNlVmFsdWUgPSBwYWdlWSAtIHNoaWZ0WTtcclxuLy8gXHRcdFx0XHR9IGVsc2Uge1xyXG4vLyBcdFx0XHRcdFx0dGhpcy5tb3VzZVZhbHVlID0gcGFnZVggLSBzaGlmdFg7XHJcbi8vIFx0XHRcdFx0fVxyXG4vLyBcdFx0XHRcdHRoaXMudmFsdWUgPSB0aGlzLm1vdXNlVmFsdWU7XHJcbi8vIFx0XHRcdFx0dGhpcy52YWx1ZSA9IHNldExpbWl0KHRoaXMudmFsdWUsIHRoaXMubWluLCB0aGlzLm1heCk7XHJcbi8vIFx0XHRcdFx0aWYgKHRoaXMuaXNGaXhlZCkge1xyXG4vLyBcdFx0XHRcdFx0dGhpcy52YWx1ZSA9IHN0YXJ0VmFsdWU7XHJcbi8vIFx0XHRcdFx0fVxyXG4vLyBcdFx0XHRcdHRoaXMuc2V0U3R5bGUoKTtcclxuLy8gXHRcdFx0fVxyXG4vLyBcdFx0XHRtb3ZlQXQoZXZ0LnBhZ2VYLCBldnQucGFnZVkpO1xyXG5cclxuLy8gXHRcdFx0Y29uc3Qgb25Nb3VzZU1vdmUgPSAobW92ZUV2dCkgPT4ge1xyXG4vLyBcdFx0XHRcdG1vdmVBdChtb3ZlRXZ0LnBhZ2VYLCBtb3ZlRXZ0LiBwYWdlWSk7XHJcbi8vIFx0XHRcdH1cclxuLy8gXHRcdFx0Y29uc3Qgb25Nb3VzZVVwID0gKHVwRXZ0KSA9PiB7XHJcbi8vIFx0XHRcdFx0dXBFdnQucHJldmVudERlZmF1bHQoKTtcclxuLy8gXHRcdFx0XHR0aGlzLm1vdXNlVmFsdWUgPSB0aGlzLnZhbHVlO1xyXG4vLyBcdFx0XHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbk1vdXNlVXApO1xyXG4vLyBcdFx0XHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKTtcclxuLy8gXHRcdFx0fVxyXG4vLyBcdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSk7XHJcbi8vIFx0XHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbk1vdXNlVXApO1xyXG4vLyBcdFx0fVxyXG4vLyBcdFx0dGhpcy50b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgb25Nb3VzZURvd24pO1xyXG4vLyBcdH1cclxuLy8gfVxyXG5cclxuLy8gZXhwb3J0IHtzZXRUb2dnbGVTdHlsZSwgVG9nZ2xlfTsiLCIvL29sZFxyXG5cclxuaW1wb3J0IHtpbml0Vmlld01hcmt1cCwgbWFya3VwfSBmcm9tICcuL2luaXQtdmlldy1tYXJrdXAudHMnO1xyXG5pbXBvcnQge1NjYWxlfSBmcm9tICcuL3NjYWxlLnRzJztcclxuaW1wb3J0IHtEYXRhLCBWYWx1ZSwgVGFiVGV4dH0gZnJvbSAnLi9pbnRlcmZhY2VzLnRzJztcclxuaW1wb3J0IHtzZXRUb2dnbGVTdHlsZSwgVG9nZ2xlfSBmcm9tICcuL3RvZ2dsZS50cyc7XHJcbmltcG9ydCB7c2V0TW91c2VIYW5kbGVyLCByb3VuZCwgdG9QcmVjZW50LCBzZXRSYW5nZVN0eWxlfSBmcm9tICcuL2Z1bmN0aW9ucy50cyc7XHJcblxyXG5jbGFzcyBWaWV3IHtcclxuXHJcblx0ZGF0YTogRGF0YTtcclxuXHRwcmVjZW50OiBWYWx1ZTtcclxuXHR0YWJUZXh0OiBUYWJUZXh0O1xyXG5cdGNvbnRhaW5lcjogSFRNTEVsZW1lbnQ7XHJcblx0bWluVG9nZ2xlRWxlbTogSFRNTEVsZW1lbnQ7XHJcblx0bWF4VG9nZ2xlRWxlbTogSFRNTEVsZW1lbnQ7XHJcblx0bWluVG9nZ2xlOiBUb2dnbGU7XHJcblx0bWF4VG9nZ2xlOiBUb2dnbGU7XHJcblx0bWluVGFiRWxlbTogSFRNTEVsZW1lbnQ7XHJcblx0bWF4VGFiRWxlbTogSFRNTEVsZW1lbnQ7XHJcblx0cmFuZ2VFbGVtOiBIVE1MRWxlbWVudDtcclxuXHRzaXplOiBudW1iZXI7XHJcblx0c2NhbGU6IHN0cmluZ1tdO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihkYXRhKSB7XHJcblx0XHR0aGlzLmRhdGEgPSBkYXRhO1xyXG5cdFx0dGhpcy5wcmVjZW50ID0ge1xyXG5cdFx0XHRtaW46IDAsXHJcblx0XHRcdG1heDogMFxyXG5cdFx0fVxyXG5cdFx0dGhpcy50YWJUZXh0ID0ge1xyXG5cdFx0XHRtaW46ICcnLFxyXG5cdFx0XHRtYXg6ICcnXHJcblx0XHR9XHJcblx0XHR0aGlzLnNjYWxlID0gW107XHJcblx0XHR0aGlzLmluaXRWaWV3KCk7XHJcblx0XHR0aGlzLmNyZWF0ZVRvZ2dsZSgpO1xyXG5cdFx0dGhpcy5vblRvZ2dsZUNvaW5jaWRlbmNlKCk7XHJcblx0XHR0aGlzLmFkZFNjYWxlKCk7XHJcblx0XHR0aGlzLmNoYW5nZVRhYigpO1xyXG5cdFx0dGhpcy5jaGFuZ2VJbnB1dCgpO1xyXG5cdH1cclxuXHJcblx0aW5pdFZpZXcoKSB7XHJcblx0XHRpbml0Vmlld01hcmt1cCh0aGlzLmRhdGEud3JhcElkLCB0aGlzLmRhdGEuaXNWZXJ0aWNhbCk7XHJcblx0XHR0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5kYXRhLndyYXBJZCkucXVlcnlTZWxlY3RvcignLnRzLXNsaWRlcl9fY29udGFpbmVyJyk7XHJcblx0XHRpZiAodGhpcy5kYXRhLmlzVmVydGljYWwpIHtcclxuXHRcdFx0dGhpcy5zaXplID0gdGhpcy5jb250YWluZXIub2Zmc2V0SGVpZ2h0O1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5zaXplID0gdGhpcy5jb250YWluZXIub2Zmc2V0V2lkdGg7XHJcblx0XHR9XHJcblx0XHR0aGlzLm1pblRvZ2dsZUVsZW0gPSBtYXJrdXAodGhpcy5jb250YWluZXIpLm1pbjtcclxuXHRcdHRoaXMubWF4VG9nZ2xlRWxlbSA9IG1hcmt1cCh0aGlzLmNvbnRhaW5lcikubWF4O1xyXG5cdFx0dGhpcy5taW5UYWJFbGVtID0gbWFya3VwKHRoaXMuY29udGFpbmVyKS5taW5UYWI7XHJcblx0XHR0aGlzLm1heFRhYkVsZW0gPSBtYXJrdXAodGhpcy5jb250YWluZXIpLm1heFRhYjtcclxuXHRcdHRoaXMucmFuZ2VFbGVtID0gbWFya3VwKHRoaXMuY29udGFpbmVyKS5yYW5nZTtcclxuXHJcblx0XHRpZiAoIXRoaXMuZGF0YS5pc1JhbmdlKSB7XHJcblx0XHRcdHRoaXMubWluVG9nZ2xlRWxlbS5oaWRkZW4gPSB0cnVlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0c2V0VGFiKCkge1xyXG5cdFx0dGhpcy5taW5UYWJFbGVtLnRleHRDb250ZW50ID0gdGhpcy50YWJUZXh0Lm1pbjtcclxuXHRcdHRoaXMubWF4VGFiRWxlbS50ZXh0Q29udGVudCA9IHRoaXMudGFiVGV4dC5tYXg7XHJcblx0fVxyXG5cclxuXHRzZXRSYW5nZSgpIHtcclxuXHRcdHNldFJhbmdlU3R5bGUodGhpcy5yYW5nZUVsZW0sIHRoaXMubWluVG9nZ2xlLnByZWNlbnQgKiB0aGlzLnNpemUsIHRoaXMubWF4VG9nZ2xlLnByZWNlbnQgKiB0aGlzLnNpemUsIHRoaXMuZGF0YS5pc1ZlcnRpY2FsKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZVRvZ2dsZSgpIHtcclxuXHRcdGNvbnN0IG1pblRvZ2dsZVByZWNlbnQgPSB0b1ByZWNlbnQodGhpcy5kYXRhLm1pblRvZ2dsZVZhbHVlLCB0aGlzLmRhdGEubWluVmFsdWUsIHRoaXMuZGF0YS5tYXhWYWx1ZSk7XHJcblx0XHRjb25zdCBtYXhUb2dnbGVQcmVjZW50ID0gdG9QcmVjZW50KHRoaXMuZGF0YS5tYXhUb2dnbGVWYWx1ZSwgdGhpcy5kYXRhLm1pblZhbHVlLCB0aGlzLmRhdGEubWF4VmFsdWUpO1xyXG5cdFx0dGhpcy5taW5Ub2dnbGUgPSBuZXcgVG9nZ2xlKHRoaXMubWluVG9nZ2xlRWxlbSwgbWluVG9nZ2xlUHJlY2VudCwgdGhpcy5zaXplLCB0aGlzLmRhdGEuaXNWZXJ0aWNhbCk7XHJcblx0XHR0aGlzLm1heFRvZ2dsZSA9IG5ldyBUb2dnbGUodGhpcy5tYXhUb2dnbGVFbGVtLCBtYXhUb2dnbGVQcmVjZW50LCB0aGlzLnNpemUsIHRoaXMuZGF0YS5pc1ZlcnRpY2FsKTtcclxuXHRcdHRoaXMubWluVG9nZ2xlLm1pbiA9IDA7XHJcblx0XHR0aGlzLm1heFRvZ2dsZS5tYXggPSAxO1xyXG5cdFx0aWYgKCF0aGlzLmRhdGEuaXNSYW5nZSkge1xyXG5cdFx0XHR0aGlzLm1pblRvZ2dsZS5wcmVjZW50ID0gMDtcclxuXHRcdH1cclxuXHRcdHRoaXMuc2V0UmFuZ2UoKTtcclxuXHJcblx0XHRjb25zdCBvbk1vdXNlTW92ZSA9IChtb3ZlRXZ0KSA9PiB7XHJcblx0XHRcdHRoaXMubWluVG9nZ2xlLm1heCA9IHRoaXMubWF4VG9nZ2xlLnByZWNlbnQ7XHJcblx0XHRcdHRoaXMubWF4VG9nZ2xlLm1pbiA9IHRoaXMubWluVG9nZ2xlLnByZWNlbnQ7XHJcblx0XHRcdHNldFJhbmdlU3R5bGUodGhpcy5yYW5nZUVsZW0sIHRoaXMubWluVG9nZ2xlLnByZWNlbnQgKiB0aGlzLnNpemUsIHRoaXMubWF4VG9nZ2xlLnByZWNlbnQgKiB0aGlzLnNpemUsIHRoaXMuZGF0YS5pc1ZlcnRpY2FsKTtcclxuXHRcdFx0dGhpcy5wcmVjZW50Lm1pbiA9IHRoaXMubWluVG9nZ2xlLnByZWNlbnQ7XHJcblx0XHRcdHRoaXMucHJlY2VudC5tYXggPSB0aGlzLm1heFRvZ2dsZS5wcmVjZW50O1xyXG5cdFx0XHR0aGlzLnNldFRhYigpO1xyXG5cdFx0XHR0aGlzLmNvbnRhaW5lci5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnbW92ZVRvZ2dsZScpKTtcclxuXHRcdH1cclxuXHRcdHNldE1vdXNlSGFuZGxlcihkb2N1bWVudCwgb25Nb3VzZU1vdmUpO1xyXG5cdFx0dGhpcy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKGV2dCkgPT4ge1xyXG5cdFx0XHRldnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0b25Ub2dnbGVDb2luY2lkZW5jZSgpIHtcclxuXHRcdGNvbnN0IG9uTW91c2VEb3duQ29pbmNpZGVuY2UgPSAoZXZ0KSA9PiB7XHJcblx0XHRcdGxldCBjb2luY2lkZW5jZVRvZ2dsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cdFx0XHR0aGlzLm1heFRvZ2dsZUVsZW0uaGlkZGVuID0gdHJ1ZTtcclxuXHRcdFx0Y29pbmNpZGVuY2VUb2dnbGUgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KGV2dC5wYWdlWCwgZXZ0LnBhZ2VZKS5jbGFzc0xpc3QuY29udGFpbnMoJ3RzLXNsaWRlcl9fdG9nZ2xlLS1taW4nKTtcclxuXHRcdFx0dGhpcy5tYXhUb2dnbGVFbGVtLmhpZGRlbiA9IGZhbHNlO1xyXG5cdFx0XHRsZXQgc3RhcnRQaXhlbDogbnVtYmVyO1xyXG5cdFx0XHRzdGFydFBpeGVsID0gdGhpcy5tYXhUb2dnbGUucGl4ZWw7XHJcblxyXG5cdFx0XHRjb25zdCBvbk1vdXNlTW92ZSA9IChtb3ZlRXZ0KSA9PiB7XHJcblx0XHRcdFx0aWYgKGNvaW5jaWRlbmNlVG9nZ2xlKSB7XHJcblx0XHRcdFx0XHR0aGlzLm1pblRvZ2dsZS5tb3VzZVBpeGVsID0gdGhpcy5tYXhUb2dnbGUubW91c2VQaXhlbDtcclxuXHRcdFx0XHRcdHRoaXMubWF4VG9nZ2xlLmlzRml4ZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0dGhpcy5taW5Ub2dnbGUuaXNGaXhlZCA9IHRydWU7XHJcblx0XHRcdFx0XHRpZiAodGhpcy5tYXhUb2dnbGUubW91c2VQaXhlbCA+IHN0YXJ0UGl4ZWwpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5tYXhUb2dnbGUuaXNGaXhlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0XHR0aGlzLm1pblRvZ2dsZS5pc0ZpeGVkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHRoaXMubWF4VG9nZ2xlLmlzRml4ZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHR0aGlzLm1pblRvZ2dsZS5pc0ZpeGVkID0gZmFsc2U7XHJcblx0XHRcdFx0XHRcdHRoaXMubWluVG9nZ2xlLm1vdXNlUGl4ZWwgPSB0aGlzLm1heFRvZ2dsZS5tb3VzZVBpeGVsO1xyXG5cdFx0XHRcdFx0XHR0aGlzLm1pblRvZ2dsZS5waXhlbCA9IHRoaXMubWF4VG9nZ2xlLm1vdXNlUGl4ZWw7XHJcblx0XHRcdFx0XHRcdGlmICh0aGlzLm1pblRvZ2dsZS5waXhlbCA8IDApIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLm1pblRvZ2dsZS5waXhlbCA9IDA7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0dGhpcy5taW5Ub2dnbGUuc2V0U3R5bGUoKTtcclxuXHRcdFx0XHRcdFx0dGhpcy5taW5Ub2dnbGUucHJlY2VudCA9IHRoaXMubWluVG9nZ2xlLnBpeGVsIC8gdGhpcy5zaXplO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0aGlzLm1heFRvZ2dsZS5pc0ZpeGVkID0gZmFsc2U7XHJcblx0XHRcdFx0XHR0aGlzLm1pblRvZ2dsZS5pc0ZpeGVkID0gZmFsc2U7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGNvbnN0IG9uTW91c2VVcCA9ICh1cEV2dCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMubWluVG9nZ2xlLm1vdXNlUGl4ZWwgPSB0aGlzLm1pblRvZ2dsZS5waXhlbDtcclxuXHRcdFx0XHR0aGlzLm1heFRvZ2dsZS5pc0ZpeGVkID0gZmFsc2U7XHJcblx0XHRcdFx0dGhpcy5taW5Ub2dnbGUuaXNGaXhlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbk1vdXNlVXApO1xyXG5cdFx0XHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSk7XHJcblx0XHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbk1vdXNlVXApO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMubWF4VG9nZ2xlRWxlbS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBvbk1vdXNlRG93bkNvaW5jaWRlbmNlKTtcclxuXHR9XHJcblxyXG5cdGFkZFNjYWxlKCkge1xyXG5cdFx0dGhpcy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignaW5pdFNjYWxlJywgKCkgPT4ge1xyXG5cdFx0XHRpZiAodGhpcy5kYXRhLmlzU2NhbGUpIHtcclxuXHRcdFx0XHRjb25zdCBzY2FsZSA9IG5ldyBTY2FsZSh0aGlzLmNvbnRhaW5lciwgdGhpcy5zY2FsZSwgdGhpcy5kYXRhLmlzVmVydGljYWwpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGNoYW5nZVRhYigpIHtcclxuXHRcdHRoaXMuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZVRhYicsICgpID0+IHtcclxuXHRcdFx0dGhpcy5zZXRUYWIoKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0Y2hhbmdlSW5wdXQoKSB7XHJcblx0XHR0aGlzLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2VJbnB1dCcsICgpID0+IHtcclxuXHRcdFx0dGhpcy5taW5Ub2dnbGUucHJlY2VudCA9IHRoaXMucHJlY2VudC5taW47XHJcblx0XHRcdHRoaXMubWF4VG9nZ2xlLnByZWNlbnQgPSB0aGlzLnByZWNlbnQubWF4O1xyXG5cdFx0XHR0aGlzLm1pblRvZ2dsZS5jaGFuZ2VUb2dnbGUoKTtcclxuXHRcdFx0dGhpcy5tYXhUb2dnbGUuY2hhbmdlVG9nZ2xlKCk7XHJcblx0XHRcdHRoaXMuc2V0VGFiKCk7XHJcblx0XHRcdHRoaXMuc2V0UmFuZ2UoKTtcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IHtWaWV3fTtcclxuXHJcblxyXG5cclxuXHJcbi8vIC8vb2xkXHJcblxyXG4vLyBpbXBvcnQge2luaXRWaWV3TWFya3VwfSBmcm9tICcuL2luaXQtdmlldy1tYXJrdXAudHMnO1xyXG4vLyBpbXBvcnQge1NjYWxlfSBmcm9tICcuL3NjYWxlLnRzJztcclxuLy8gaW1wb3J0IHtzZXRWaWV3VmFsdWV9IGZyb20gJy4vc2V0LXZpZXctdmFsdWUudHMnO1xyXG4vLyBpbXBvcnQge0RhdGF9IGZyb20gJy4vZGF0YS50cyc7XHJcbi8vIGltcG9ydCB7c2V0VG9nZ2xlU3R5bGV9IGZyb20gJy4vdG9nZ2xlLnRzJztcclxuLy8gaW1wb3J0IHtzZXRNb3VzZUhhbmRsZXIsIHJvdW5kfSBmcm9tICcuL2Z1bmN0aW9ucy50cyc7XHJcbi8vIGltcG9ydCB7bWFya3VwfSBmcm9tICcuL2luaXQtdmlldy1tYXJrdXAudHMnO1xyXG5cclxuLy8gaW50ZXJmYWNlIFZhbHVlIHtcclxuLy8gXHRtaW46IG51bWJlcjtcclxuLy8gXHRtYXg6IG51bWJlcjtcclxuLy8gfVxyXG4vLyBpbnRlcmZhY2UgVGFiVGV4dCB7XHJcbi8vIFx0bWluOiBzdHJpbmc7XHJcbi8vIFx0bWF4OiBzdHJpbmc7XHJcbi8vIH1cclxuXHJcbi8vIGNsYXNzIFZpZXcge1xyXG5cclxuLy8gXHRkYXRhOiBEYXRhO1xyXG4vLyBcdHZpZXdWYWx1ZTogVmFsdWU7XHJcbi8vIFx0dmlld1RhYlRleHQ6IFRhYlRleHQ7XHJcbi8vIFx0Y29udGFpbmVyOiBIVE1MRWxlbWVudDtcclxuLy8gXHRtaW5Ub2dnbGVFbGVtOiBIVE1MRWxlbWVudDtcclxuLy8gXHRtYXhUb2dnbGVFbGVtOiBIVE1MRWxlbWVudDtcclxuLy8gXHRtaW5UYWJFbGVtOiBIVE1MRWxlbWVudDtcclxuLy8gXHRtYXhUYWJFbGVtOiBIVE1MRWxlbWVudDtcclxuLy8gXHRzaXplOiBudW1iZXI7XHJcbi8vIFx0c2NhbGU6IHN0cmluZ1tdO1xyXG5cclxuLy8gXHRjb25zdHJ1Y3RvcihkYXRhKSB7XHJcbi8vIFx0XHR0aGlzLmRhdGEgPSBkYXRhO1xyXG4vLyBcdFx0dGhpcy52aWV3VGFiVGV4dCA9IHtcclxuLy8gXHRcdFx0bWluOiAnJyxcclxuLy8gXHRcdFx0bWF4OiAnJ1xyXG4vLyBcdFx0fVxyXG4vLyBcdFx0dGhpcy5zY2FsZSA9IFtdO1xyXG4vLyBcdFx0dGhpcy5pbml0VmlldygpO1xyXG4vLyBcdFx0dGhpcy5zZXRUb2dnbGUoKTtcclxuLy8gXHRcdHRoaXMub25Nb3ZlVG9nZ2xlKCk7XHJcbi8vIFx0XHR0aGlzLmFkZFNjYWxlKCk7XHJcbi8vIFx0XHR0aGlzLmNoYW5nZVRhYigpO1xyXG4vLyBcdFx0dGhpcy5jaGFuZ2VJbnB1dCgpO1xyXG4vLyBcdH1cclxuXHJcbi8vIFx0aW5pdFZpZXcoKSB7XHJcbi8vIFx0XHRpbml0Vmlld01hcmt1cCh0aGlzLmRhdGEud3JhcElkLCB0aGlzLmRhdGEuaXNWZXJ0aWNhbCk7XHJcbi8vIFx0XHR0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5kYXRhLndyYXBJZCkucXVlcnlTZWxlY3RvcignLnRzLXNsaWRlcl9fY29udGFpbmVyJyk7XHJcbi8vIFx0XHRpZiAodGhpcy5kYXRhLmlzVmVydGljYWwpIHtcclxuLy8gXHRcdFx0dGhpcy5zaXplID0gdGhpcy5jb250YWluZXIub2Zmc2V0SGVpZ2h0O1xyXG4vLyBcdFx0fSBlbHNlIHtcclxuLy8gXHRcdFx0dGhpcy5zaXplID0gdGhpcy5jb250YWluZXIub2Zmc2V0V2lkdGg7XHJcbi8vIFx0XHR9XHJcbi8vIFx0XHR0aGlzLnZpZXdWYWx1ZSA9IHNldFZpZXdWYWx1ZSh0aGlzLmNvbnRhaW5lciwgdGhpcy5kYXRhKTtcclxuLy8gXHR9XHJcblxyXG4vLyBcdHNldFRhYigpIHtcclxuLy8gXHRcdHRoaXMubWluVGFiRWxlbS50ZXh0Q29udGVudCA9IHRoaXMudmlld1RhYlRleHQubWluO1xyXG4vLyBcdFx0dGhpcy5tYXhUYWJFbGVtLnRleHRDb250ZW50ID0gdGhpcy52aWV3VGFiVGV4dC5tYXg7XHJcbi8vIFx0fVxyXG5cclxuLy8gXHRzZXRUb2dnbGUoKSB7XHJcbi8vIFx0XHR0aGlzLm1pblRvZ2dsZUVsZW0gPSBtYXJrdXAodGhpcy5jb250YWluZXIpLm1pbjtcclxuLy8gXHRcdHRoaXMubWF4VG9nZ2xlRWxlbSA9IG1hcmt1cCh0aGlzLmNvbnRhaW5lcikubWF4O1xyXG4vLyBcdFx0dGhpcy5taW5UYWJFbGVtID0gbWFya3VwKHRoaXMuY29udGFpbmVyKS5taW5UYWI7XHJcbi8vIFx0XHR0aGlzLm1heFRhYkVsZW0gPSBtYXJrdXAodGhpcy5jb250YWluZXIpLm1heFRhYjtcclxuXHJcbi8vIFx0XHR0aGlzLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdpbml0VmFsdWUnLCAoKSA9PiB7XHJcbi8vIFx0XHRcdHNldFRvZ2dsZVN0eWxlKHRoaXMubWluVG9nZ2xlRWxlbSwgdGhpcy52aWV3VmFsdWUubWluICogdGhpcy5zaXplLCB0aGlzLmRhdGEuaXNWZXJ0aWNhbCk7XHJcbi8vIFx0XHRcdHNldFRvZ2dsZVN0eWxlKHRoaXMubWF4VG9nZ2xlRWxlbSwgdGhpcy52aWV3VmFsdWUubWF4ICogdGhpcy5zaXplLCB0aGlzLmRhdGEuaXNWZXJ0aWNhbCk7XHJcbi8vIFx0XHRcdHRoaXMuc2V0VGFiKCk7XHJcbi8vIFx0XHR9KTtcclxuLy8gXHRcdC8vIHRoaXMudmlld1ZhbHVlID0gc2V0Vmlld1ZhbHVlKHRoaXMuY29udGFpbmVyLCB0aGlzLmRhdGEpO1xyXG4vLyBcdH1cclxuXHJcbi8vIFx0b25Nb3ZlVG9nZ2xlKCkge1xyXG4vLyBcdFx0Ly8gdGhpcy52aWV3VmFsdWUgPSBzZXRWaWV3VmFsdWUodGhpcy5jb250YWluZXIsIHRoaXMuZGF0YSk7XHJcbi8vIFx0XHRjb25zdCBvbk1vdXNlTW92ZSA9IChtb3ZlRXZ0KSA9PiB7XHJcbi8vIFx0XHRcdHRoaXMuY29udGFpbmVyLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdtb3ZlVG9nZ2xlJykpO1xyXG4vLyBcdFx0XHQvLyBjb25zb2xlLmxvZyh0aGlzLnZpZXdWYWx1ZSk7XHJcbi8vIFx0XHR9XHJcbi8vIFx0XHRzZXRNb3VzZUhhbmRsZXIodGhpcy5jb250YWluZXIsIG9uTW91c2VNb3ZlKTtcclxuLy8gXHR9XHJcblxyXG4vLyBcdGFkZFNjYWxlKCkge1xyXG4vLyBcdFx0dGhpcy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignaW5pdFNjYWxlJywgKCkgPT4ge1xyXG4vLyBcdFx0XHRpZiAodGhpcy5kYXRhLmlzU2NhbGUpIHtcclxuLy8gXHRcdFx0XHRjb25zdCBzY2FsZSA9IG5ldyBTY2FsZSh0aGlzLmNvbnRhaW5lciwgdGhpcy5zY2FsZSwgdGhpcy5kYXRhLmlzVmVydGljYWwpO1xyXG4vLyBcdFx0XHR9XHJcbi8vIFx0XHR9KTtcclxuLy8gXHR9XHJcblxyXG4vLyBcdGNoYW5nZVRhYigpIHtcclxuLy8gXHRcdHRoaXMuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZVRhYicsICgpID0+IHtcclxuLy8gXHRcdFx0dGhpcy5zZXRUYWIoKTtcclxuLy8gXHRcdH0pO1xyXG4vLyBcdH1cclxuLy8gXHRjaGFuZ2VJbnB1dCgpIHtcclxuLy8gXHRcdHRoaXMuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZUlucHV0JywgKCkgPT4ge1xyXG4vLyBcdFx0XHQvLyBjb25zb2xlLmxvZygyMjIpO1xyXG4vLyBcdFx0XHQvLyBjb25zb2xlLmxvZyh0aGlzLnZpZXdWYWx1ZSk7XHJcbi8vIFx0XHRcdHNldFRvZ2dsZVN0eWxlKHRoaXMubWluVG9nZ2xlRWxlbSwgdGhpcy52aWV3VmFsdWUubWluICogdGhpcy5zaXplLCB0aGlzLmRhdGEuaXNWZXJ0aWNhbCk7XHJcbi8vIFx0XHRcdHNldFRvZ2dsZVN0eWxlKHRoaXMubWF4VG9nZ2xlRWxlbSwgdGhpcy52aWV3VmFsdWUubWF4ICogdGhpcy5zaXplLCB0aGlzLmRhdGEuaXNWZXJ0aWNhbCk7XHJcbi8vIFx0XHRcdHRoaXMuc2V0VGFiKCk7XHJcbi8vIFx0XHR9KTtcclxuLy8gXHR9XHJcbi8vIH1cclxuXHJcbi8vIGV4cG9ydCB7VmlldywgVmFsdWUsIFRhYlRleHR9O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9