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
/*! exports provided: setMouseHandler, round, setLimit, toPrecent, setRangeStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMouseHandler", function() { return setMouseHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "round", function() { return round; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLimit", function() { return setLimit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toPrecent", function() { return toPrecent; });
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
const setRangeStyle = (range, min, max, isVertical) => {
    if (isVertical) {
        range.style.top = `${min}px`;
        range.style.height = `${(max - min)}px`;
    }
    else {
        range.style.left = `${min}px`;
        range.style.width = `${(max - min)}px`;
    }
    // console.log(min + ' ' + max);
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
            // console.log(333);
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
        this.view.tabText.min = this.model.tabText.min;
        this.view.tabText.max = this.model.tabText.max;
    }
    initScale() {
        this.view.scale = this.model.scale;
        this.view.container.dispatchEvent(new CustomEvent('initScale'));
    }
    setToView() {
        this.view.precent.min = toView(this.value.min, this.data.minValue, this.data.maxValue);
        this.view.precent.max = toView(this.value.max, this.data.minValue, this.data.maxValue);
        // console.log(this.view.precent);
    }
    setToModel() {
        this.model.value.min = toModel(this.view.precent.min, this.data.minValue, this.data.maxValue);
        this.model.value.max = toModel(this.view.precent.max, this.data.minValue, this.data.maxValue);
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
            // console.log(this.value.min + ' ' + this.value.max);
            this.setToView();
            this.setToModel();
            // console.log(111);
            // console.log(this.view.viewValue);
            // this.view.container.dispatchEvent(new CustomEvent('changeInput'));
            const range = Object(_init_view_markup_ts__WEBPACK_IMPORTED_MODULE_3__["markup"])(this.view.container).range;
            Object(_functions_ts__WEBPACK_IMPORTED_MODULE_2__["setRangeStyle"])(range, this.view.precent.min * this.view.size, this.view.precent.max * this.view.size, this.data.isVertical);
            // console.log(this.view.viewValue.min * this.view.size + ' ' + this.view.viewValue.max * this.view.size);
            this.view.container.dispatchEvent(new CustomEvent('changeInput'));
            // this.view.container.dispatchEvent(new CustomEvent('moveToggle'));
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
        // this.setToggle();
        // this.onMoveToggle();
        this.addScale();
        // this.changeTab();
        // this.changeInput();
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
    createToggle() {
        const minTogglePrecent = Object(_functions_ts__WEBPACK_IMPORTED_MODULE_3__["toPrecent"])(this.data.minToggleValue, this.data.minValue, this.data.maxValue);
        const maxTogglePrecent = Object(_functions_ts__WEBPACK_IMPORTED_MODULE_3__["toPrecent"])(this.data.maxToggleValue, this.data.minValue, this.data.maxValue);
        this.minToggle = new _toggle_ts__WEBPACK_IMPORTED_MODULE_2__["Toggle"](this.minToggleElem, minTogglePrecent, this.size, this.data.isVertical);
        this.maxToggle = new _toggle_ts__WEBPACK_IMPORTED_MODULE_2__["Toggle"](this.maxToggleElem, maxTogglePrecent, this.size, this.data.isVertical);
        // this.setTab();
        this.minToggle.min = 0;
        this.maxToggle.max = 1;
        if (!this.data.isRange) {
            this.minToggle.precent = 0;
        }
        Object(_functions_ts__WEBPACK_IMPORTED_MODULE_3__["setRangeStyle"])(this.rangeElem, this.minToggle.precent * this.size, this.maxToggle.precent * this.size, this.data.isVertical);
        const onMouseMove = () => {
            this.minToggle.max = this.maxToggle.precent;
            this.maxToggle.min = this.minToggle.precent;
            Object(_functions_ts__WEBPACK_IMPORTED_MODULE_3__["setRangeStyle"])(this.rangeElem, this.minToggle.precent * this.size, this.maxToggle.precent * this.size, this.data.isVertical);
            this.precent.min = this.minToggle.precent;
            this.precent.max = this.maxToggle.precent;
            // console.log(this.precent);
            this.setTab();
            this.container.dispatchEvent(new CustomEvent('moveToggle'));
        };
        Object(_functions_ts__WEBPACK_IMPORTED_MODULE_3__["setMouseHandler"])(document, onMouseMove);
        // this.setTab();
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
    addScale() {
        this.container.addEventListener('initScale', () => {
            if (this.data.isScale) {
                const scale = new _scale_ts__WEBPACK_IMPORTED_MODULE_1__["Scale"](this.container, this.scale, this.data.isVertical);
            }
        });
    }
}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Z1bmN0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luaXQtdmlldy1tYXJrdXAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9wcmVzZW50ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjYWxlLnRzIiwid2VicGFjazovLy8uL3NyYy90b2dnbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUF3QztBQW9CeEMsTUFBTSxXQUFXLEdBQVM7SUFDekIsTUFBTSxF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QUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN2RixrQ0FBa0M7SUFDbkMsQ0FBQztJQUVELFVBQVU7UUFDVCxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzlGLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDL0YsQ0FBQztJQUVELElBQUk7UUFDSCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksNkNBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLCtDQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDdkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxF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QzVELHNHQUFzRztBQUN0RyxnQ0FBZ0M7QUFDaEMsOENBQThDO0FBQzlDLGFBQWE7QUFDYiw2Q0FBNkM7QUFDN0MsTUFBTTtBQUNOLDhEQUE4RDtBQUM5RCxLQUFLO0FBRUwsY0FBYztBQUNkLHdEQUF3RDtBQUN4RCx3REFBd0Q7QUFDeEQsS0FBSztBQUVMLGlCQUFpQjtBQUNqQixxREFBcUQ7QUFDckQscURBQXFEO0FBQ3JELHFEQUFxRDtBQUNyRCxxREFBcUQ7QUFFckQseURBQXlEO0FBQ3pELCtGQUErRjtBQUMvRiwrRkFBK0Y7QUFDL0Ysb0JBQW9CO0FBQ3BCLFFBQVE7QUFDUixpRUFBaUU7QUFDakUsS0FBSztBQUVMLG9CQUFvQjtBQUNwQixpRUFBaUU7QUFDakUsdUNBQXVDO0FBQ3ZDLGtFQUFrRTtBQUNsRSxxQ0FBcUM7QUFDckMsTUFBTTtBQUNOLGtEQUFrRDtBQUNsRCxLQUFLO0FBRUwsZ0JBQWdCO0FBQ2hCLHlEQUF5RDtBQUN6RCw4QkFBOEI7QUFDOUIsaUZBQWlGO0FBQ2pGLE9BQU87QUFDUCxRQUFRO0FBQ1IsS0FBSztBQUVMLGlCQUFpQjtBQUNqQix5REFBeUQ7QUFDekQsb0JBQW9CO0FBQ3BCLFFBQVE7QUFDUixLQUFLO0FBQ0wsbUJBQW1CO0FBQ25CLDJEQUEyRDtBQUMzRCwwQkFBMEI7QUFDMUIscUNBQXFDO0FBQ3JDLCtGQUErRjtBQUMvRiwrRkFBK0Y7QUFDL0Ysb0JBQW9CO0FBQ3BCLFFBQVE7QUFDUixLQUFLO0FBQ0wsSUFBSTtBQUVKLGlDQUFpQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsImltcG9ydCB7c2V0TGltaXR9IGZyb20gJy4vZnVuY3Rpb25zLnRzJztcclxuXHJcbmludGVyZmFjZSBEYXRhIHtcclxuXHR3cmFwSWQ6IHN0cmluZztcclxuXHRtaW5JbnB1dElkOiBzdHJpbmc7XHJcblx0bWF4SW5wdXRJZDogc3RyaW5nO1xyXG5cdGlzQXJyYXk6IGJvb2xlYW47XHJcblx0YXJyYXk6IHN0cmluZ1tdO1xyXG5cdHN0ZXA6IG51bWJlcjtcclxuXHRtaW5WYWx1ZTogbnVtYmVyO1xyXG5cdG1heFZhbHVlOiBudW1iZXI7XHJcblx0bWluVG9nZ2xlVmFsdWU6IG51bWJlcjtcclxuXHRtYXhUb2dnbGVWYWx1ZTogbnVtYmVyO1xyXG5cdGlzUmFuZ2U6IGJvb2xlYW47XHJcblx0aXNWZXJ0aWNhbDogYm9vbGVhbjtcclxuXHRpc1RhYjogYm9vbGVhbjtcclxuXHRpc1NjYWxlOiBib29sZWFuO1xyXG5cdHNjYWxlUXVhbnRpdHk6IG51bWJlcjtcclxufVxyXG5cclxuY29uc3Qgc2xpZGVyRGF0YTE6IERhdGEgPSB7XHJcblx0d3JhcElkOiAnI3RzLXNsaWRlcl9fd3JhcC0xJyxcclxuXHRtaW5JbnB1dElkOiAncGFnZV9faW5wdXQtMTEnLFxyXG5cdG1heElucHV0SWQ6ICdwYWdlX19pbnB1dC0xMicsXHJcblx0aXNBcnJheTogZmFsc2UsXHJcblx0YXJyYXk6IFtdLFxyXG5cdHN0ZXA6IDEsXHJcblx0bWluVmFsdWU6IDAsXHJcblx0bWF4VmFsdWU6IDEwMCxcclxuXHRtaW5Ub2dnbGVWYWx1ZTogMjAsXHJcblx0bWF4VG9nZ2xlVmFsdWU6IDQwLFxyXG5cdGlzUmFuZ2U6IHRydWUsXHJcblx0aXNWZXJ0aWNhbDogZmFsc2UsXHJcblx0aXNUYWI6IHRydWUsXHJcblx0aXNTY2FsZTogdHJ1ZSxcclxuXHRzY2FsZVF1YW50aXR5OiA0XHJcbn1cclxuY29uc3Qgc2xpZGVyRGF0YTI6IERhdGEgPSB7XHJcblx0d3JhcElkOiAnI3RzLXNsaWRlcl9fd3JhcC0yJyxcclxuXHRtaW5JbnB1dElkOiAncGFnZV9faW5wdXQtMjEnLFxyXG5cdG1heElucHV0SWQ6ICdwYWdlX19pbnB1dC0yMicsXHJcblx0aXNBcnJheTogdHJ1ZSxcclxuXHRhcnJheTogWyfQvNCw0LvQvicsICfQvdC10LzQvdC+0LPQvicsICfRgdGA0LXQtNC90LUnLCAn0LHQvtC70YzRiNC1JywgJ9C80L3QvtCz0L4nXSxcclxuXHRzdGVwOiAxLFxyXG5cdG1pblZhbHVlOiAwLFxyXG5cdG1heFZhbHVlOiA0LFxyXG5cdG1pblRvZ2dsZVZhbHVlOiAyLFxyXG5cdG1heFRvZ2dsZVZhbHVlOiAzLFxyXG5cdGlzUmFuZ2U6IHRydWUsXHJcblx0aXNWZXJ0aWNhbDogdHJ1ZSxcclxuXHRpc1RhYjogdHJ1ZSxcclxuXHRpc1NjYWxlOiB0cnVlLFxyXG5cdHNjYWxlUXVhbnRpdHk6IDVcclxufVxyXG5cclxuY29uc3Qgc2V0RGF0YUxpbWl0ID0gKGRhdGE6IERhdGEpID0+IHtcclxuXHRkYXRhLm1pblRvZ2dsZVZhbHVlID0gc2V0TGltaXQoZGF0YS5taW5Ub2dnbGVWYWx1ZSwgZGF0YS5taW5WYWx1ZSwgZGF0YS5tYXhWYWx1ZSk7XHJcblx0ZGF0YS5tYXhUb2dnbGVWYWx1ZSA9IHNldExpbWl0KGRhdGEubWF4VG9nZ2xlVmFsdWUsIGRhdGEubWluVmFsdWUsIGRhdGEubWF4VmFsdWUpO1xyXG59XHJcblxyXG5zZXREYXRhTGltaXQoc2xpZGVyRGF0YTEpO1xyXG5zZXREYXRhTGltaXQoc2xpZGVyRGF0YTIpO1xyXG5cclxuZXhwb3J0IHtEYXRhLCBzbGlkZXJEYXRhMSwgc2xpZGVyRGF0YTJ9OyIsImNvbnN0IHNldE1vdXNlSGFuZGxlciA9IChlbGVtLCBvbk1vdmUsIG9uRG92bj8sIG9uVXA/KSA9PiB7XHJcblxyXG5cdGNvbnN0IG9uTW91c2VEb3duID0gKGV2dCkgPT4ge1xyXG5cdFx0aWYgKG9uRG92bikge1xyXG5cdFx0XHRvbkRvdm4oZXZ0KTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0Y29uc3Qgb25Nb3VzZU1vdmUgPSAobW92ZUV2dCkgPT4ge1xyXG5cdFx0XHRvbk1vdmUobW92ZUV2dCk7XHJcblx0XHR9XHJcblx0XHRjb25zdCBvbk1vdXNlVXAgPSAodXBFdnQpID0+IHtcclxuXHRcdFx0aWYgKG9uVXApIHtcclxuXHRcdFx0XHRvblVwKHVwRXZ0KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25Nb3VzZVVwKTtcclxuXHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUpO1xyXG5cdFx0fVxyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUpO1xyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uTW91c2VVcCk7XHJcblx0fVxyXG5cclxuXHRlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIG9uTW91c2VEb3duKTtcclxuXHJcbn1cclxuXHJcbmNvbnN0IHJvdW5kID0gKHZhbHVlOiBudW1iZXIsIHN0ZXA6IG51bWJlcikgPT4ge1xyXG5cdGNvbnN0IHByZWNpc2lvbiA9IHggPT4gKyggKHgudG9TdHJpbmcoKS5pbmNsdWRlcygnLicpKSA/ICh4LnRvU3RyaW5nKCkuc3BsaXQoJy4nKS5wb3AoKS5sZW5ndGgpIDogKDApICk7XHJcblx0bGV0IHJvdW5kZWQ6IHN0cmluZyA9IChNYXRoLnJvdW5kKHZhbHVlIC8gc3RlcCkgKiBzdGVwKS50b0ZpeGVkKHByZWNpc2lvbihzdGVwKSk7XHJcblx0cmV0dXJuIHJvdW5kZWQ7XHJcbn1cclxuXHJcbmNvbnN0IHNldExpbWl0ID0gKHZhbHVlOiBudW1iZXIsIG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcikgPT4ge1xyXG5cdGlmICh2YWx1ZSA+IG1heCkge1xyXG5cdFx0dmFsdWUgPSBtYXg7XHJcblx0fSBlbHNlIGlmICh2YWx1ZSA8IG1pbikge1xyXG5cdFx0dmFsdWUgPSBtaW47XHJcblx0fVxyXG5cdHJldHVybiB2YWx1ZTtcclxufVxyXG5cclxuY29uc3QgdG9QcmVjZW50ID0gKHZhbHVlOiBudW1iZXIsIG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcikgPT4gKHZhbHVlIC0gbWluKSAvIChtYXggLSBtaW4pO1xyXG5cclxuY29uc3Qgc2V0UmFuZ2VTdHlsZSA9IChyYW5nZTogSFRNTEVsZW1lbnQsIG1pbjogbnVtYmVyLCBtYXg6IG51bWJlciwgaXNWZXJ0aWNhbDogYm9vbGVhbikgPT4ge1xyXG5cdGlmIChpc1ZlcnRpY2FsKSB7XHJcblx0XHRyYW5nZS5zdHlsZS50b3AgPSBgJHttaW59cHhgO1xyXG5cdFx0cmFuZ2Uuc3R5bGUuaGVpZ2h0ID0gYCR7KG1heCAtIG1pbil9cHhgO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRyYW5nZS5zdHlsZS5sZWZ0ID0gYCR7bWlufXB4YDtcclxuXHRcdHJhbmdlLnN0eWxlLndpZHRoID0gYCR7KG1heCAtIG1pbil9cHhgO1xyXG5cdH1cclxuXHQvLyBjb25zb2xlLmxvZyhtaW4gKyAnICcgKyBtYXgpO1xyXG59XHJcblxyXG5leHBvcnQge3NldE1vdXNlSGFuZGxlciwgcm91bmQsIHNldExpbWl0LCB0b1ByZWNlbnQsIHNldFJhbmdlU3R5bGV9OyIsImltcG9ydCB7U2NhbGV9IGZyb20gJy4vc2NhbGUudHMnO1xyXG5pbXBvcnQge1ZpZXd9IGZyb20gJy4vdmlldy50cyc7XHJcbmltcG9ydCB7UHJlc2VudGVyfSBmcm9tICcuL3ByZXNlbnRlci50cyc7XHJcblxyXG5pbXBvcnQge3NsaWRlckRhdGExLCBzbGlkZXJEYXRhMn0gZnJvbSAnLi9kYXRhLnRzJztcclxuXHJcbmNvbnN0IHByZXNlbnRlcjEgPSBuZXcgUHJlc2VudGVyKHNsaWRlckRhdGExKTtcclxuLy8gY29uc3QgdmlldyA9IG5ldyBWaWV3KHNsaWRlckRhdGExKTtcclxuXHJcbmNvbnN0IHByZXNlbnRlcjIgPSBuZXcgUHJlc2VudGVyKHNsaWRlckRhdGEyKTtcclxuLy8gY29uc29sZS5sb2cocHJlc2VudGVyMSk7XHJcblxyXG4iLCJjb25zdCBpbml0Vmlld01hcmt1cCA9ICh3cmFwOiBzdHJpbmcsIHZlcnRpY2FsOiBib29sZWFuKSA9PiB7XHJcblx0Y29uc3QgY29udG9sTWFya3VwOiBzdHJpbmcgPSBgPGRpdiBjbGFzcz1cInRzLXNsaWRlcl9fY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidHMtc2xpZGVyX19iYXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRzLXNsaWRlcl9fdG9nZ2xlIHRzLXNsaWRlcl9fdG9nZ2xlLS1taW5cIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidHMtc2xpZGVyX190b2dnbGUtdmFsdWUgdHMtc2xpZGVyX190b2dnbGUtdmFsdWUtLW1pblwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRzLXNsaWRlcl9fdG9nZ2xlIHRzLXNsaWRlcl9fdG9nZ2xlLS1tYXhcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidHMtc2xpZGVyX190b2dnbGUtdmFsdWUgdHMtc2xpZGVyX190b2dnbGUtdmFsdWUtLW1heFwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRzLXNsaWRlcl9fcmFuZ2VcIj48L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PmA7XHJcblx0Y29uc3QgY29udHJvbFdyYXA6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih3cmFwKTtcclxuXHRjb250cm9sV3JhcC5pbm5lckhUTUwgPSBjb250b2xNYXJrdXA7XHJcbiAgY29uc3QgZGl2ID0gY29udHJvbFdyYXAucXVlcnlTZWxlY3RvckFsbCgnZGl2Jyk7XHJcbiAgaWYgKHZlcnRpY2FsKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRpdi5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBmaXJzdENsYXNzOiBzdHJpbmcgPSBkaXZbaV0uY2xhc3NMaXN0WzBdO1xyXG4gICAgICBjb25zdCB2ZXJ0aWNhbENsYXNzOiBzdHJpbmcgPSBmaXJzdENsYXNzICsgJy0tdmVydGljYWwnO1xyXG4gICAgICBkaXZbaV0uY2xhc3NMaXN0LmFkZCh2ZXJ0aWNhbENsYXNzKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcmt1cCA9IChzbGlkZXI6IEhUTUxFbGVtZW50KSA9PiB7XHJcbiAgaW50ZXJmYWNlIE1hcmt1cCB7XHJcbiAgICBtaW46IEhUTUxFbGVtZW50O1xyXG4gICAgbWF4OiBIVE1MRWxlbWVudDtcclxuICAgIHJhbmdlOiBIVE1MRWxlbWVudDtcclxuICAgIGJhcjogSFRNTEVsZW1lbnQ7XHJcbiAgICBtaW5UYWI6IEhUTUxFbGVtZW50O1xyXG4gICAgbWF4VGFiOiBIVE1MRWxlbWVudDtcclxuICB9XHJcbiAgbGV0IG1hcmt1cDogTWFya3VwID0geyAgXHJcbiAgICAgbWluOiBzbGlkZXIucXVlcnlTZWxlY3RvcignLnRzLXNsaWRlcl9fdG9nZ2xlLS1taW4nKSxcclxuICAgICBtYXg6IHNsaWRlci5xdWVyeVNlbGVjdG9yKCcudHMtc2xpZGVyX190b2dnbGUtLW1heCcpLFxyXG4gICAgIHJhbmdlOiBzbGlkZXIucXVlcnlTZWxlY3RvcignLnRzLXNsaWRlcl9fcmFuZ2UnKSxcclxuICAgICBiYXI6IHNsaWRlci5xdWVyeVNlbGVjdG9yKCcudHMtc2xpZGVyX19iYXInKSxcclxuICAgICBtaW5UYWI6IHNsaWRlci5xdWVyeVNlbGVjdG9yKCcudHMtc2xpZGVyX190b2dnbGUtdmFsdWUtLW1pbicpLFxyXG4gICAgIG1heFRhYjogc2xpZGVyLnF1ZXJ5U2VsZWN0b3IoJy50cy1zbGlkZXJfX3RvZ2dsZS12YWx1ZS0tbWF4JylcclxuICB9XHJcbiAgcmV0dXJuIG1hcmt1cDtcclxufVxyXG5cclxuZXhwb3J0IHtpbml0Vmlld01hcmt1cCwgbWFya3VwfTsiLCJpbXBvcnQge0RhdGF9IGZyb20gJy4vZGF0YS50cyc7XHJcbmltcG9ydCB7VmFsdWUsIFRhYlRleHR9IGZyb20gJy4vdmlldy50cyc7XHJcbmltcG9ydCB7c2V0TW91c2VIYW5kbGVyLCByb3VuZH0gZnJvbSAnLi9mdW5jdGlvbnMudHMnO1xyXG5cclxuXHJcbmNsYXNzIE1vZGVsIHtcclxuXHJcblx0ZGF0YTogRGF0YTtcclxuXHRtaW5JbnB1dDogYW55O1xyXG5cdG1heElucHV0OiBhbnk7XHJcblx0dmFsdWU6IFZhbHVlO1xyXG5cdHByZWNlbnQ6IFZhbHVlO1xyXG5cdHRhYlRleHQ6IFRhYlRleHQ7XHJcblx0b2JzZXJ2ZXI6IEhUTUxFbGVtZW50O1xyXG5cdG1pbjogbnVtYmVyO1xyXG5cdG1heDogbnVtYmVyO1xyXG5cdHNjYWxlOiBzdHJpbmdbXTtcclxuXHJcblx0Y29uc3RydWN0b3IoZGF0YSkge1xyXG5cdFx0dGhpcy5kYXRhID0gZGF0YTtcclxuXHRcdHRoaXMudGFiVGV4dCA9IHtcclxuXHRcdFx0bWluOiAnJyxcclxuXHRcdFx0bWF4OiAnJ1xyXG5cdFx0fVxyXG5cdFx0dGhpcy52YWx1ZSA9IHtcclxuXHRcdFx0bWluOiAwLFxyXG5cdFx0XHRtYXg6IDBcclxuXHRcdH1cclxuXHRcdHRoaXMucHJlY2VudCA9IHtcclxuXHRcdFx0bWluOiAwLFxyXG5cdFx0XHRtYXg6IDBcclxuXHRcdH1cclxuXHRcdHRoaXMuc2NhbGUgPSBbXTtcclxuXHRcdHRoaXMub2JzZXJ2ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdFdmVudCcpO1xyXG5cdFx0dGhpcy5pbml0KCk7XHJcblx0XHR0aGlzLnNldFNjYWxlKCk7XHJcblx0XHR0aGlzLmFkZExpc3RlbmVyKCk7XHJcblx0XHR0aGlzLmNoYW5nZUlucHV0KCk7XHJcblx0fVxyXG5cclxuXHRzZXRJbnB1dCgpIHtcclxuXHRcdHRoaXMubWluSW5wdXQudmFsdWUgPSB0aGlzLnRhYlRleHQubWluO1xyXG5cdFx0dGhpcy5tYXhJbnB1dC52YWx1ZSA9IHRoaXMudGFiVGV4dC5tYXg7XHJcblx0XHQvLyBjb25zb2xlLmxvZygnc2V0Jyk7XHJcblx0fVxyXG5cclxuXHRzZXRBcnJheVZhbHVlKCkge1xyXG5cdFx0bGV0IG1pbiA9IE1hdGgucm91bmQodGhpcy5wcmVjZW50Lm1pbiAqICh0aGlzLmRhdGEuYXJyYXkubGVuZ3RoIC0gMSkpO1xyXG5cdFx0bGV0IG1heCA9IE1hdGgucm91bmQodGhpcy5wcmVjZW50Lm1heCAqICh0aGlzLmRhdGEuYXJyYXkubGVuZ3RoIC0gMSkpO1xyXG5cdFx0dGhpcy50YWJUZXh0Lm1pbiA9IHRoaXMuZGF0YS5hcnJheVttaW5dO1xyXG5cdFx0dGhpcy50YWJUZXh0Lm1heCA9IHRoaXMuZGF0YS5hcnJheVttYXhdO1xyXG5cdFx0dGhpcy5zZXRJbnB1dCgpO1xyXG5cdH1cclxuXHJcblx0aW5pdCgpIHtcclxuXHRcdGlmICh0aGlzLmRhdGEuaXNBcnJheSkge1xyXG5cdFx0XHR0aGlzLm9ic2VydmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3NldFByZWNlbnQnLCAoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5zZXRBcnJheVZhbHVlKCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy50YWJUZXh0Lm1pbiA9IHJvdW5kKHRoaXMuZGF0YS5taW5Ub2dnbGVWYWx1ZSwgdGhpcy5kYXRhLnN0ZXApO1xyXG5cdFx0XHR0aGlzLnRhYlRleHQubWF4ID0gcm91bmQodGhpcy5kYXRhLm1heFRvZ2dsZVZhbHVlLCB0aGlzLmRhdGEuc3RlcCk7XHJcblx0XHR9XHJcblx0XHR0aGlzLm1pbklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyB0aGlzLmRhdGEubWluSW5wdXRJZCk7XHJcblx0XHR0aGlzLm1heElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyB0aGlzLmRhdGEubWF4SW5wdXRJZCk7XHJcblx0XHR0aGlzLnNldElucHV0KCk7XHJcblx0fVxyXG5cclxuXHRzZXRTY2FsZSgpIHtcclxuXHRcdGlmICh0aGlzLmRhdGEuaXNBcnJheSkge1xyXG5cdFx0XHRpZiAodGhpcy5kYXRhLmlzU2NhbGUpIHtcclxuXHRcdFx0XHR0aGlzLnNjYWxlID0gdGhpcy5kYXRhLmFycmF5O1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAodGhpcy5kYXRhLmlzU2NhbGUpIHtcclxuXHRcdFx0XHRsZXQgcXVhbnRpdHkgPSB0aGlzLmRhdGEuc2NhbGVRdWFudGl0eTtcclxuXHRcdFx0XHRpZiAocXVhbnRpdHkgPCAyKSB7XHJcblx0XHRcdFx0XHRxdWFudGl0eSA9IDI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgcXVhbnRpdHk7IGkrKykge1xyXG5cdFx0XHRcdFx0bGV0IHRleHRWYWx1ZTogbnVtYmVyID0gTWF0aC5yb3VuZCgodGhpcy5kYXRhLm1pblZhbHVlICsgKHRoaXMuZGF0YS5tYXhWYWx1ZSAtIHRoaXMuZGF0YS5taW5WYWx1ZSkgLyAocXVhbnRpdHkgLSAxKSAqIGkpIC8gdGhpcy5kYXRhLnN0ZXApICogdGhpcy5kYXRhLnN0ZXA7XHJcblx0XHRcdFx0XHRsZXQgdGV4dDogc3RyaW5nID0gcm91bmQodGV4dFZhbHVlLCB0aGlzLmRhdGEuc3RlcCk7XHJcblx0XHRcdFx0XHR0aGlzLnNjYWxlLnB1c2godGV4dCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRhZGRMaXN0ZW5lcigpIHtcclxuXHRcdHRoaXMub2JzZXJ2ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlVmFsdWUnLCAoKSA9PiB7XHJcblx0XHRcdGlmICh0aGlzLmRhdGEuaXNBcnJheSkge1xyXG5cdFx0XHRcdHRoaXMuc2V0QXJyYXlWYWx1ZSgpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMudGFiVGV4dC5taW4gPSByb3VuZCh0aGlzLnZhbHVlLm1pbiwgdGhpcy5kYXRhLnN0ZXApO1xyXG5cdFx0XHRcdHRoaXMudGFiVGV4dC5tYXggPSByb3VuZCh0aGlzLnZhbHVlLm1heCwgdGhpcy5kYXRhLnN0ZXApO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMuc2V0SW5wdXQoKTtcclxuXHRcdFx0Ly8gY29uc29sZS5sb2coMzMzKTtcclxuXHRcdFx0dGhpcy5vYnNlcnZlci5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnY2hhbmdlVGFiVGV4dCcpKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRjaGFuZ2VJbnB1dCgpIHtcclxuXHRcdGNvbnN0IG9uQmx1ciA9ICgpID0+IHtcclxuXHRcdFx0dGhpcy52YWx1ZS5taW4gPSArdGhpcy5taW5JbnB1dC52YWx1ZTtcclxuXHRcdFx0dGhpcy52YWx1ZS5tYXggPSArdGhpcy5tYXhJbnB1dC52YWx1ZTtcclxuXHRcdFx0dGhpcy50YWJUZXh0Lm1pbiA9IHJvdW5kKHRoaXMubWluSW5wdXQudmFsdWUsIHRoaXMuZGF0YS5zdGVwKTtcclxuXHRcdFx0dGhpcy50YWJUZXh0Lm1heCA9IHJvdW5kKHRoaXMubWF4SW5wdXQudmFsdWUsIHRoaXMuZGF0YS5zdGVwKTtcclxuXHRcdFx0dGhpcy5vYnNlcnZlci5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnY2hhbmdlSW5wdXQnKSk7XHJcblx0XHR9XHJcblx0XHR0aGlzLm1pbklucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBvbkJsdXIpO1xyXG5cdFx0dGhpcy5tYXhJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgb25CbHVyKTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCB7TW9kZWx9OyIsImltcG9ydCB7VmlldywgVmFsdWUsIFRhYlRleHR9IGZyb20gJy4vdmlldy50cyc7XHJcbmltcG9ydCB7RGF0YX0gZnJvbSAnLi9kYXRhLnRzJztcclxuaW1wb3J0IHtNb2RlbH0gZnJvbSAnLi9tb2RlbC50cyc7XHJcbmltcG9ydCB7c2V0TW91c2VIYW5kbGVyLCByb3VuZCwgc2V0UmFuZ2VTdHlsZX0gZnJvbSAnLi9mdW5jdGlvbnMudHMnO1xyXG5pbXBvcnQge21hcmt1cH0gZnJvbSAnLi9pbml0LXZpZXctbWFya3VwLnRzJztcclxuXHJcbmNvbnN0IHRvVmlldyA9ICh2YWx1ZTogbnVtYmVyLCBtaW46IG51bWJlciwgbWF4OiBudW1iZXIpID0+ICh2YWx1ZSAtIG1pbikgLyAobWF4IC0gbWluKTtcclxuY29uc3QgdG9Nb2RlbCA9ICh2YWx1ZTogbnVtYmVyLCBtaW46IG51bWJlciwgbWF4OiBudW1iZXIpID0+IChtaW4gKyAobWF4IC0gbWluKSAqIHZhbHVlKTtcclxuXHJcbmNsYXNzIFByZXNlbnRlciB7XHJcblxyXG5cdGRhdGE6IERhdGE7XHJcblx0dmlldzogVmlldztcclxuXHRtb2RlbDogTW9kZWw7XHJcblx0bWF4OiBudW1iZXI7XHJcblx0bWluOiBudW1iZXI7XHJcblx0dmFsdWU6IFZhbHVlO1xyXG5cdG1vZGVsVGFiVGV4dDogVGFiVGV4dDtcclxuXHJcblx0Y29uc3RydWN0b3IoZGF0YSkge1xyXG5cdFx0dGhpcy5kYXRhID0gZGF0YTtcclxuXHRcdHRoaXMudmFsdWUgPSB7XHJcblx0XHRcdG1pbjogdGhpcy5kYXRhLm1pblRvZ2dsZVZhbHVlLFxyXG5cdFx0XHRtYXg6IHRoaXMuZGF0YS5tYXhUb2dnbGVWYWx1ZVxyXG5cdFx0fVxyXG5cdFx0dGhpcy5pbml0KCk7XHJcblx0XHR0aGlzLm9uTW92ZVRvZ2dsZSgpO1xyXG5cdFx0dGhpcy5vbkNoYW5nZVRhYlRleHQoKTtcclxuXHRcdHRoaXMub25DYW5nZUlucHV0KCk7XHJcblx0fVxyXG5cclxuXHRzZXRUYWJUZXh0KCkge1xyXG5cdFx0dGhpcy52aWV3LnRhYlRleHQubWluID0gdGhpcy5tb2RlbC50YWJUZXh0Lm1pbjtcclxuXHRcdHRoaXMudmlldy50YWJUZXh0Lm1heCA9IHRoaXMubW9kZWwudGFiVGV4dC5tYXg7XHJcblx0fVxyXG5cclxuXHRpbml0U2NhbGUoKSB7XHJcblx0XHR0aGlzLnZpZXcuc2NhbGUgPSB0aGlzLm1vZGVsLnNjYWxlO1xyXG5cdFx0dGhpcy52aWV3LmNvbnRhaW5lci5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnaW5pdFNjYWxlJykpO1xyXG5cdH1cclxuXHJcblx0c2V0VG9WaWV3KCkge1xyXG5cdFx0dGhpcy52aWV3LnByZWNlbnQubWluID0gdG9WaWV3KHRoaXMudmFsdWUubWluLCB0aGlzLmRhdGEubWluVmFsdWUsIHRoaXMuZGF0YS5tYXhWYWx1ZSk7XHJcblx0XHR0aGlzLnZpZXcucHJlY2VudC5tYXggPSB0b1ZpZXcodGhpcy52YWx1ZS5tYXgsIHRoaXMuZGF0YS5taW5WYWx1ZSwgdGhpcy5kYXRhLm1heFZhbHVlKTtcclxuXHRcdC8vIGNvbnNvbGUubG9nKHRoaXMudmlldy5wcmVjZW50KTtcclxuXHR9XHJcblxyXG5cdHNldFRvTW9kZWwoKSB7XHJcblx0XHR0aGlzLm1vZGVsLnZhbHVlLm1pbiA9IHRvTW9kZWwodGhpcy52aWV3LnByZWNlbnQubWluLCB0aGlzLmRhdGEubWluVmFsdWUsIHRoaXMuZGF0YS5tYXhWYWx1ZSk7XHJcblx0XHR0aGlzLm1vZGVsLnZhbHVlLm1heCA9IHRvTW9kZWwodGhpcy52aWV3LnByZWNlbnQubWF4LCB0aGlzLmRhdGEubWluVmFsdWUsIHRoaXMuZGF0YS5tYXhWYWx1ZSk7XHJcblx0fVxyXG5cclxuXHRpbml0KCkge1xyXG5cdFx0dGhpcy52aWV3ID0gbmV3IFZpZXcodGhpcy5kYXRhKTtcclxuXHRcdHRoaXMubW9kZWwgPSBuZXcgTW9kZWwodGhpcy5kYXRhKTtcclxuXHRcdHRoaXMuaW5pdFNjYWxlKCk7XHJcblx0XHR0aGlzLnNldFRvVmlldygpO1xyXG5cdFx0dGhpcy5tb2RlbC5wcmVjZW50ID0gdGhpcy52aWV3LnByZWNlbnQ7XHJcblx0XHR0aGlzLm1vZGVsLm9ic2VydmVyLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdzZXRQcmVjZW50JykpO1xyXG5cdFx0dGhpcy5zZXRUYWJUZXh0KCk7XHJcblx0XHR0aGlzLnZpZXcuc2V0VGFiKCk7XHJcblx0XHR0aGlzLnZpZXcuY29udGFpbmVyLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdpbml0VmFsdWUnKSk7XHJcblxyXG5cdFx0dGhpcy52aWV3LmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2VWYWx1ZScsICgpID0+IHtcclxuXHRcdFx0dGhpcy5tb2RlbC5vYnNlcnZlci5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnY2hhbmdlVmFsdWUnKSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdG9uTW92ZVRvZ2dsZSgpIHtcclxuXHRcdGNvbnN0IG9uQ2hhbmdlVmlldyA9ICgpID0+IHtcclxuXHRcdFx0dGhpcy5zZXRUb01vZGVsKCk7XHJcblx0XHRcdHRoaXMubW9kZWwub2JzZXJ2ZXIuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2NoYW5nZVZhbHVlJykpO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy52aWV3LmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdtb3ZlVG9nZ2xlJywgb25DaGFuZ2VWaWV3KTtcclxuXHR9XHJcblxyXG5cdG9uQ2hhbmdlVGFiVGV4dCgpIHtcclxuXHRcdHRoaXMubW9kZWwub2JzZXJ2ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlVGFiVGV4dCcsICgpID0+IHtcclxuXHRcdFx0dGhpcy5zZXRUYWJUZXh0KCk7XHJcblx0XHRcdHRoaXMudmlldy5jb250YWluZXIuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2NoYW5nZVRhYicpKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRvbkNhbmdlSW5wdXQoKSB7XHJcblx0XHR0aGlzLm1vZGVsLm9ic2VydmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZUlucHV0JywgKCkgPT4ge1xyXG5cdFx0XHR0aGlzLnZpZXcudGFiVGV4dCA9IHRoaXMubW9kZWwudGFiVGV4dDtcclxuXHRcdFx0dGhpcy52YWx1ZS5taW4gPSArdGhpcy5tb2RlbC52YWx1ZS5taW47XHJcblx0XHRcdHRoaXMudmFsdWUubWF4ID0gK3RoaXMubW9kZWwudmFsdWUubWF4O1xyXG5cdFx0XHQvLyBjb25zb2xlLmxvZyh0aGlzLnZhbHVlLm1pbiArICcgJyArIHRoaXMudmFsdWUubWF4KTtcclxuXHRcdFx0dGhpcy5zZXRUb1ZpZXcoKTtcclxuXHRcdFx0dGhpcy5zZXRUb01vZGVsKCk7XHJcblx0XHRcdC8vIGNvbnNvbGUubG9nKDExMSk7XHJcblx0XHRcdC8vIGNvbnNvbGUubG9nKHRoaXMudmlldy52aWV3VmFsdWUpO1xyXG5cdFx0XHQvLyB0aGlzLnZpZXcuY29udGFpbmVyLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdjaGFuZ2VJbnB1dCcpKTtcclxuXHRcdFx0Y29uc3QgcmFuZ2U6IEhUTUxFbGVtZW50ID0gbWFya3VwKHRoaXMudmlldy5jb250YWluZXIpLnJhbmdlO1xyXG5cdFx0XHRzZXRSYW5nZVN0eWxlKHJhbmdlLCB0aGlzLnZpZXcucHJlY2VudC5taW4gKiB0aGlzLnZpZXcuc2l6ZSwgdGhpcy52aWV3LnByZWNlbnQubWF4ICogdGhpcy52aWV3LnNpemUsIHRoaXMuZGF0YS5pc1ZlcnRpY2FsKTtcclxuXHRcdFx0Ly8gY29uc29sZS5sb2codGhpcy52aWV3LnZpZXdWYWx1ZS5taW4gKiB0aGlzLnZpZXcuc2l6ZSArICcgJyArIHRoaXMudmlldy52aWV3VmFsdWUubWF4ICogdGhpcy52aWV3LnNpemUpO1xyXG5cdFx0XHR0aGlzLnZpZXcuY29udGFpbmVyLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdjaGFuZ2VJbnB1dCcpKTtcclxuXHRcdFx0Ly8gdGhpcy52aWV3LmNvbnRhaW5lci5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnbW92ZVRvZ2dsZScpKTtcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IHt0b1ZpZXcsIHRvTW9kZWwsIFByZXNlbnRlcn07IiwiaW1wb3J0IHtyb3VuZH0gZnJvbSAnLi9mdW5jdGlvbnMudHMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNjYWxlIHtcclxuXHJcblx0c2xpZGVyOiBIVE1MRWxlbWVudDtcclxuXHRzY2FsZTogc3RyaW5nW107XHJcblx0aXNWZXJ0aWNhbDogYm9vbGVhbjtcclxuXHJcblx0Y29uc3RydWN0b3Ioc2xpZGVyLCBzY2FsZSwgaXNWZXJ0aWNhbCkge1xyXG5cdFx0dGhpcy5zbGlkZXIgPSBzbGlkZXI7XHJcblx0XHR0aGlzLnNjYWxlID0gc2NhbGU7XHJcblx0XHR0aGlzLmlzVmVydGljYWwgPSBpc1ZlcnRpY2FsO1xyXG5cdFx0dGhpcy5jcmVhdGVJdGVtKCk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVJdGVtKCkge1xyXG5cdFx0Y29uc3QgYmFyOiBIVE1MRWxlbWVudCA9IHRoaXMuc2xpZGVyLnF1ZXJ5U2VsZWN0b3IoJy50cy1zbGlkZXJfX2JhcicpO1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNjYWxlLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGNvbnN0IHNjYWxlSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0XHRzY2FsZUl0ZW0uY2xhc3NMaXN0LmFkZCgndHMtc2xpZGVyX19zY2FsZS1pdGVtJyk7XHJcblx0XHRcdHNjYWxlSXRlbS50ZXh0Q29udGVudCA9IHRoaXMuc2NhbGVbaV07XHJcblx0XHRcdGlmICh0aGlzLmlzVmVydGljYWwpIHtcclxuXHRcdFx0XHRzY2FsZUl0ZW0uY2xhc3NMaXN0LmFkZCgndHMtc2xpZGVyX19zY2FsZS1pdGVtLS12ZXJ0aWNhbCcpO1xyXG5cdFx0XHRcdHNjYWxlSXRlbS5zdHlsZS50b3AgPSBgJHtiYXIub2Zmc2V0SGVpZ2h0IC8gKHRoaXMuc2NhbGUubGVuZ3RoIC0gMSkgKiBpfXB4YDtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzY2FsZUl0ZW0uc3R5bGUubGVmdCA9IGAke2Jhci5vZmZzZXRXaWR0aCAvICh0aGlzLnNjYWxlLmxlbmd0aCAtIDEpICogaX1weGA7XHJcblx0XHRcdH1cdFxyXG5cdFx0XHRiYXIuYXBwZW5kKHNjYWxlSXRlbSk7XHJcblx0XHR9XHJcblx0fVxyXG59IiwiaW1wb3J0IHtzZXRMaW1pdH0gZnJvbSAnLi9mdW5jdGlvbnMudHMnO1xyXG5cclxuY29uc3Qgc2V0VG9nZ2xlU3R5bGUgPSAodG9nZ2xlOiBIVE1MRWxlbWVudCwgcGl4ZWw6IG51bWJlciwgaXNWZXJ0aWNhbDogYm9vbGVhbikgPT4ge1xyXG5cdFx0aWYgKGlzVmVydGljYWwpIHtcclxuXHRcdFx0dG9nZ2xlLnN0eWxlLnRvcCA9IGAke3BpeGVsfXB4YDtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRvZ2dsZS5zdHlsZS5sZWZ0ID0gYCR7cGl4ZWx9cHhgO1xyXG5cdH1cclxufVxyXG5cclxuY2xhc3MgVG9nZ2xlIHtcclxuXHJcblx0dG9nZ2xlOiBIVE1MRWxlbWVudDtcclxuXHRtaW46IG51bWJlcjtcclxuXHRtYXg6IG51bWJlcjtcclxuXHRtb3VzZVBpeGVsOiBudW1iZXI7XHJcblx0cGl4ZWw6IG51bWJlcjtcclxuXHRwcmVjZW50OiBudW1iZXI7XHJcblx0c2l6ZTogbnVtYmVyO1xyXG5cdGlzVmVydGljYWw6IGJvb2xlYW47XHJcblx0aXNGaXhlZDogYm9vbGVhbjtcclxuXHJcblx0Y29uc3RydWN0b3IodG9nZ2xlLCBwcmVjZW50LCBzaXplLCBpc1ZlcnRpY2FsKSB7XHJcblx0XHR0aGlzLnRvZ2dsZSA9IHRvZ2dsZTtcclxuXHRcdHRoaXMuc2l6ZSA9IHNpemU7XHJcblx0XHR0aGlzLnByZWNlbnQgPSBwcmVjZW50O1xyXG5cdFx0dGhpcy5tb3VzZVBpeGVsID0gdGhpcy5wcmVjZW50ICogdGhpcy5zaXplO1xyXG5cdFx0dGhpcy5waXhlbCA9IHRoaXMubW91c2VQaXhlbDtcclxuXHRcdHRoaXMuaXNWZXJ0aWNhbCA9IGlzVmVydGljYWw7XHJcblx0XHR0aGlzLmlzRml4ZWQgPSBmYWxzZTtcclxuXHRcdHRoaXMuc2V0U3R5bGUoKTtcclxuXHRcdHRoaXMub25Nb3ZlVG9nZ2xlKCk7XHJcblx0fVxyXG5cdHNldFN0eWxlKCkge1xyXG5cdFx0c2V0VG9nZ2xlU3R5bGUodGhpcy50b2dnbGUsIHRoaXMucGl4ZWwsIHRoaXMuaXNWZXJ0aWNhbCk7XHJcblx0fVxyXG5cdG9uTW92ZVRvZ2dsZSgpIHtcclxuXHRcdGNvbnN0IG9uTW91c2VEb3duID0gKGV2dCkgPT4ge1xyXG5cdFx0XHRsZXQgc2hpZnRYOiBudW1iZXIgPSBldnQuY2xpZW50WCAtIHRoaXMudG9nZ2xlLm9mZnNldExlZnQ7XHJcblx0XHRcdGxldCBzaGlmdFk6IG51bWJlciA9IGV2dC5jbGllbnRZIC0gdGhpcy50b2dnbGUub2Zmc2V0VG9wO1xyXG5cdFx0XHRsZXQgc3RhcnRQaXhlbDogbnVtYmVyID0gdGhpcy5tb3VzZVBpeGVsO1xyXG5cdFx0XHRjb25zdCBtb3ZlQXQgPSAocGFnZVgsIHBhZ2VZKSA9PiB7XHJcblx0XHRcdFx0aWYgKHRoaXMuaXNWZXJ0aWNhbCkge1xyXG5cdFx0XHRcdFx0dGhpcy5tb3VzZVBpeGVsID0gcGFnZVkgLSBzaGlmdFk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHRoaXMubW91c2VQaXhlbCA9IHBhZ2VYIC0gc2hpZnRYO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGlzLnBpeGVsID0gdGhpcy5tb3VzZVBpeGVsO1xyXG5cdFx0XHRcdHRoaXMucGl4ZWwgPSBzZXRMaW1pdCh0aGlzLnBpeGVsLCB0aGlzLm1pbiAqIHRoaXMuc2l6ZSwgdGhpcy5tYXggKiB0aGlzLnNpemUpO1xyXG5cdFx0XHRcdGlmICh0aGlzLmlzRml4ZWQpIHtcclxuXHRcdFx0XHRcdHRoaXMucGl4ZWwgPSBzdGFydFBpeGVsO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGlzLnNldFN0eWxlKCk7XHJcblx0XHRcdFx0dGhpcy5wcmVjZW50ID0gdGhpcy5waXhlbCAvIHRoaXMuc2l6ZTtcclxuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyh0aGlzLnByZWNlbnQpO1xyXG5cdFx0XHR9XHJcblx0XHRcdG1vdmVBdChldnQucGFnZVgsIGV2dC5wYWdlWSk7XHJcblxyXG5cdFx0XHRjb25zdCBvbk1vdXNlTW92ZSA9IChtb3ZlRXZ0KSA9PiB7XHJcblx0XHRcdFx0bW92ZUF0KG1vdmVFdnQucGFnZVgsIG1vdmVFdnQuIHBhZ2VZKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRjb25zdCBvbk1vdXNlVXAgPSAodXBFdnQpID0+IHtcclxuXHRcdFx0XHR0aGlzLm1vdXNlUGl4ZWwgPSB0aGlzLnBpeGVsO1xyXG5cdFx0XHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbk1vdXNlVXApO1xyXG5cdFx0XHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSk7XHJcblx0XHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbk1vdXNlVXApO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy50b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgb25Nb3VzZURvd24pO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IHtzZXRUb2dnbGVTdHlsZSwgVG9nZ2xlfTtcclxuXHJcblxyXG4vLyAvL29sZFxyXG5cclxuLy8gaW1wb3J0IHtzZXRMaW1pdH0gZnJvbSAnLi9mdW5jdGlvbnMudHMnO1xyXG5cclxuLy8gY29uc3Qgc2V0VG9nZ2xlU3R5bGUgPSAodG9nZ2xlOiBIVE1MRWxlbWVudCwgdmFsdWU6IG51bWJlciwgdmVydGljYWw6IGJvb2xlYW4pID0+IHtcclxuLy8gXHRcdGlmICh2ZXJ0aWNhbCkge1xyXG4vLyBcdFx0XHR0b2dnbGUuc3R5bGUudG9wID0gYCR7dmFsdWV9cHhgO1xyXG4vLyBcdFx0fSBlbHNlIHtcclxuLy8gXHRcdFx0dG9nZ2xlLnN0eWxlLmxlZnQgPSBgJHt2YWx1ZX1weGA7XHJcbi8vIFx0fVxyXG4vLyB9XHJcblxyXG4vLyBjbGFzcyBUb2dnbGUge1xyXG5cclxuLy8gXHR0b2dnbGU6IEhUTUxFbGVtZW50O1xyXG4vLyBcdG1pbjogbnVtYmVyO1xyXG4vLyBcdG1heDogbnVtYmVyO1xyXG4vLyBcdG1vdXNlVmFsdWU6IG51bWJlcjtcclxuLy8gXHR2YWx1ZTogbnVtYmVyO1xyXG4vLyBcdHZlcnRpY2FsOiBib29sZWFuO1xyXG4vLyBcdGlzRml4ZWQ6IGJvb2xlYW47XHJcblxyXG4vLyBcdGNvbnN0cnVjdG9yKHRvZ2dsZSwgbWluLCBtYXgsIHZhbHVlLCB2ZXJ0aWNhbCkge1xyXG4vLyBcdFx0dGhpcy50b2dnbGUgPSB0b2dnbGU7XHJcbi8vIFx0XHR0aGlzLm1pbiA9IG1pbjtcclxuLy8gXHRcdHRoaXMubWF4ID0gbWF4O1xyXG4vLyBcdFx0dGhpcy5tb3VzZVZhbHVlID0gdmFsdWU7XHJcbi8vIFx0XHR0aGlzLnZhbHVlID0gdmFsdWU7XHJcbi8vIFx0XHR0aGlzLnZlcnRpY2FsID0gdmVydGljYWw7XHJcbi8vIFx0XHR0aGlzLmlzRml4ZWQgPSBmYWxzZTtcclxuLy8gXHRcdHRoaXMuc2V0U3R5bGUoKTtcclxuLy8gXHR9XHJcbi8vIFx0c2V0U3R5bGUoKSB7XHJcbi8vIFx0XHRzZXRUb2dnbGVTdHlsZSh0aGlzLnRvZ2dsZSwgdGhpcy52YWx1ZSwgdGhpcy52ZXJ0aWNhbCk7XHJcbi8vIFx0fVxyXG4vLyBcdG1vdmVUb2dnbGUoKSB7XHJcbi8vIFx0XHRjb25zdCBvbk1vdXNlRG93biA9IChldnQpID0+IHtcclxuLy8gXHRcdFx0ZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcbi8vIFx0XHRcdGxldCBzaGlmdFg6IG51bWJlciA9IGV2dC5jbGllbnRYIC0gdGhpcy50b2dnbGUub2Zmc2V0TGVmdDtcclxuLy8gXHRcdFx0bGV0IHNoaWZ0WTogbnVtYmVyID0gZXZ0LmNsaWVudFkgLSB0aGlzLnRvZ2dsZS5vZmZzZXRUb3A7XHJcbi8vIFx0XHRcdGxldCBzdGFydFZhbHVlOiBudW1iZXIgPSB0aGlzLm1vdXNlVmFsdWU7XHJcbi8vIFx0XHRcdGNvbnN0IG1vdmVBdCA9IChwYWdlWCwgcGFnZVkpID0+IHtcclxuLy8gXHRcdFx0XHRpZiAodGhpcy52ZXJ0aWNhbCkge1xyXG4vLyBcdFx0XHRcdFx0dGhpcy5tb3VzZVZhbHVlID0gcGFnZVkgLSBzaGlmdFk7XHJcbi8vIFx0XHRcdFx0fSBlbHNlIHtcclxuLy8gXHRcdFx0XHRcdHRoaXMubW91c2VWYWx1ZSA9IHBhZ2VYIC0gc2hpZnRYO1xyXG4vLyBcdFx0XHRcdH1cclxuLy8gXHRcdFx0XHR0aGlzLnZhbHVlID0gdGhpcy5tb3VzZVZhbHVlO1xyXG4vLyBcdFx0XHRcdHRoaXMudmFsdWUgPSBzZXRMaW1pdCh0aGlzLnZhbHVlLCB0aGlzLm1pbiwgdGhpcy5tYXgpO1xyXG4vLyBcdFx0XHRcdGlmICh0aGlzLmlzRml4ZWQpIHtcclxuLy8gXHRcdFx0XHRcdHRoaXMudmFsdWUgPSBzdGFydFZhbHVlO1xyXG4vLyBcdFx0XHRcdH1cclxuLy8gXHRcdFx0XHR0aGlzLnNldFN0eWxlKCk7XHJcbi8vIFx0XHRcdH1cclxuLy8gXHRcdFx0bW92ZUF0KGV2dC5wYWdlWCwgZXZ0LnBhZ2VZKTtcclxuXHJcbi8vIFx0XHRcdGNvbnN0IG9uTW91c2VNb3ZlID0gKG1vdmVFdnQpID0+IHtcclxuLy8gXHRcdFx0XHRtb3ZlQXQobW92ZUV2dC5wYWdlWCwgbW92ZUV2dC4gcGFnZVkpO1xyXG4vLyBcdFx0XHR9XHJcbi8vIFx0XHRcdGNvbnN0IG9uTW91c2VVcCA9ICh1cEV2dCkgPT4ge1xyXG4vLyBcdFx0XHRcdHVwRXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcbi8vIFx0XHRcdFx0dGhpcy5tb3VzZVZhbHVlID0gdGhpcy52YWx1ZTtcclxuLy8gXHRcdFx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25Nb3VzZVVwKTtcclxuLy8gXHRcdFx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSk7XHJcbi8vIFx0XHRcdH1cclxuLy8gXHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUpO1xyXG4vLyBcdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25Nb3VzZVVwKTtcclxuLy8gXHRcdH1cclxuLy8gXHRcdHRoaXMudG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIG9uTW91c2VEb3duKTtcclxuLy8gXHR9XHJcbi8vIH1cclxuXHJcbi8vIGV4cG9ydCB7c2V0VG9nZ2xlU3R5bGUsIFRvZ2dsZX07IiwiLy9vbGRcclxuXHJcbmltcG9ydCB7aW5pdFZpZXdNYXJrdXAsIG1hcmt1cH0gZnJvbSAnLi9pbml0LXZpZXctbWFya3VwLnRzJztcclxuaW1wb3J0IHtTY2FsZX0gZnJvbSAnLi9zY2FsZS50cyc7XHJcbi8vIGltcG9ydCB7c2V0Vmlld1ZhbHVlfSBmcm9tICcuL3NldC12aWV3LXZhbHVlLnRzJztcclxuaW1wb3J0IHtEYXRhfSBmcm9tICcuL2RhdGEudHMnO1xyXG5pbXBvcnQge3NldFRvZ2dsZVN0eWxlLCBUb2dnbGV9IGZyb20gJy4vdG9nZ2xlLnRzJztcclxuaW1wb3J0IHtzZXRNb3VzZUhhbmRsZXIsIHJvdW5kLCB0b1ByZWNlbnQsIHNldFJhbmdlU3R5bGV9IGZyb20gJy4vZnVuY3Rpb25zLnRzJztcclxuXHJcbmludGVyZmFjZSBWYWx1ZSB7XHJcblx0bWluOiBudW1iZXI7XHJcblx0bWF4OiBudW1iZXI7XHJcbn1cclxuaW50ZXJmYWNlIFRhYlRleHQge1xyXG5cdG1pbjogc3RyaW5nO1xyXG5cdG1heDogc3RyaW5nO1xyXG59XHJcblxyXG5jbGFzcyBWaWV3IHtcclxuXHJcblx0ZGF0YTogRGF0YTtcclxuXHRwcmVjZW50OiBWYWx1ZTtcclxuXHR0YWJUZXh0OiBUYWJUZXh0O1xyXG5cdGNvbnRhaW5lcjogSFRNTEVsZW1lbnQ7XHJcblx0bWluVG9nZ2xlRWxlbTogSFRNTEVsZW1lbnQ7XHJcblx0bWF4VG9nZ2xlRWxlbTogSFRNTEVsZW1lbnQ7XHJcblx0bWluVG9nZ2xlOiBUb2dnbGU7XHJcblx0bWF4VG9nZ2xlOiBUb2dnbGU7XHJcblx0bWluVGFiRWxlbTogSFRNTEVsZW1lbnQ7XHJcblx0bWF4VGFiRWxlbTogSFRNTEVsZW1lbnQ7XHJcblx0cmFuZ2VFbGVtOiBIVE1MRWxlbWVudDtcclxuXHRzaXplOiBudW1iZXI7XHJcblx0c2NhbGU6IHN0cmluZ1tdO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihkYXRhKSB7XHJcblx0XHR0aGlzLmRhdGEgPSBkYXRhO1xyXG5cdFx0dGhpcy5wcmVjZW50ID0ge1xyXG5cdFx0XHRtaW46IDAsXHJcblx0XHRcdG1heDogMFxyXG5cdFx0fVxyXG5cdFx0dGhpcy50YWJUZXh0ID0ge1xyXG5cdFx0XHRtaW46ICcnLFxyXG5cdFx0XHRtYXg6ICcnXHJcblx0XHR9XHJcblx0XHR0aGlzLnNjYWxlID0gW107XHJcblx0XHR0aGlzLmluaXRWaWV3KCk7XHJcblx0XHR0aGlzLmNyZWF0ZVRvZ2dsZSgpO1xyXG5cdFx0dGhpcy5vblRvZ2dsZUNvaW5jaWRlbmNlKCk7XHJcblx0XHQvLyB0aGlzLnNldFRvZ2dsZSgpO1xyXG5cdFx0Ly8gdGhpcy5vbk1vdmVUb2dnbGUoKTtcclxuXHRcdHRoaXMuYWRkU2NhbGUoKTtcclxuXHRcdC8vIHRoaXMuY2hhbmdlVGFiKCk7XHJcblx0XHQvLyB0aGlzLmNoYW5nZUlucHV0KCk7XHJcblx0fVxyXG5cclxuXHRpbml0VmlldygpIHtcclxuXHRcdGluaXRWaWV3TWFya3VwKHRoaXMuZGF0YS53cmFwSWQsIHRoaXMuZGF0YS5pc1ZlcnRpY2FsKTtcclxuXHRcdHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLmRhdGEud3JhcElkKS5xdWVyeVNlbGVjdG9yKCcudHMtc2xpZGVyX19jb250YWluZXInKTtcclxuXHRcdGlmICh0aGlzLmRhdGEuaXNWZXJ0aWNhbCkge1xyXG5cdFx0XHR0aGlzLnNpemUgPSB0aGlzLmNvbnRhaW5lci5vZmZzZXRIZWlnaHQ7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLnNpemUgPSB0aGlzLmNvbnRhaW5lci5vZmZzZXRXaWR0aDtcclxuXHRcdH1cclxuXHRcdHRoaXMubWluVG9nZ2xlRWxlbSA9IG1hcmt1cCh0aGlzLmNvbnRhaW5lcikubWluO1xyXG5cdFx0dGhpcy5tYXhUb2dnbGVFbGVtID0gbWFya3VwKHRoaXMuY29udGFpbmVyKS5tYXg7XHJcblx0XHR0aGlzLm1pblRhYkVsZW0gPSBtYXJrdXAodGhpcy5jb250YWluZXIpLm1pblRhYjtcclxuXHRcdHRoaXMubWF4VGFiRWxlbSA9IG1hcmt1cCh0aGlzLmNvbnRhaW5lcikubWF4VGFiO1xyXG5cdFx0dGhpcy5yYW5nZUVsZW0gPSBtYXJrdXAodGhpcy5jb250YWluZXIpLnJhbmdlO1xyXG5cclxuXHRcdGlmICghdGhpcy5kYXRhLmlzUmFuZ2UpIHtcclxuXHRcdFx0dGhpcy5taW5Ub2dnbGVFbGVtLmhpZGRlbiA9IHRydWU7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRzZXRUYWIoKSB7XHJcblx0XHR0aGlzLm1pblRhYkVsZW0udGV4dENvbnRlbnQgPSB0aGlzLnRhYlRleHQubWluO1xyXG5cdFx0dGhpcy5tYXhUYWJFbGVtLnRleHRDb250ZW50ID0gdGhpcy50YWJUZXh0Lm1heDtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZVRvZ2dsZSgpIHtcclxuXHRcdGNvbnN0IG1pblRvZ2dsZVByZWNlbnQgPSB0b1ByZWNlbnQodGhpcy5kYXRhLm1pblRvZ2dsZVZhbHVlLCB0aGlzLmRhdGEubWluVmFsdWUsIHRoaXMuZGF0YS5tYXhWYWx1ZSk7XHJcblx0XHRjb25zdCBtYXhUb2dnbGVQcmVjZW50ID0gdG9QcmVjZW50KHRoaXMuZGF0YS5tYXhUb2dnbGVWYWx1ZSwgdGhpcy5kYXRhLm1pblZhbHVlLCB0aGlzLmRhdGEubWF4VmFsdWUpO1xyXG5cdFx0dGhpcy5taW5Ub2dnbGUgPSBuZXcgVG9nZ2xlKHRoaXMubWluVG9nZ2xlRWxlbSwgbWluVG9nZ2xlUHJlY2VudCwgdGhpcy5zaXplLCB0aGlzLmRhdGEuaXNWZXJ0aWNhbCk7XHJcblx0XHR0aGlzLm1heFRvZ2dsZSA9IG5ldyBUb2dnbGUodGhpcy5tYXhUb2dnbGVFbGVtLCBtYXhUb2dnbGVQcmVjZW50LCB0aGlzLnNpemUsIHRoaXMuZGF0YS5pc1ZlcnRpY2FsKTtcclxuXHRcdC8vIHRoaXMuc2V0VGFiKCk7XHJcblx0XHR0aGlzLm1pblRvZ2dsZS5taW4gPSAwO1xyXG5cdFx0dGhpcy5tYXhUb2dnbGUubWF4ID0gMTtcclxuXHRcdGlmICghdGhpcy5kYXRhLmlzUmFuZ2UpIHtcclxuXHRcdFx0dGhpcy5taW5Ub2dnbGUucHJlY2VudCA9IDA7XHJcblx0XHR9XHJcblx0XHRzZXRSYW5nZVN0eWxlKHRoaXMucmFuZ2VFbGVtLCB0aGlzLm1pblRvZ2dsZS5wcmVjZW50ICogdGhpcy5zaXplLCB0aGlzLm1heFRvZ2dsZS5wcmVjZW50ICogdGhpcy5zaXplLCB0aGlzLmRhdGEuaXNWZXJ0aWNhbCk7XHJcblxyXG5cdFx0Y29uc3Qgb25Nb3VzZU1vdmUgPSAoKSA9PiB7XHJcblx0XHRcdHRoaXMubWluVG9nZ2xlLm1heCA9IHRoaXMubWF4VG9nZ2xlLnByZWNlbnQ7XHJcblx0XHRcdHRoaXMubWF4VG9nZ2xlLm1pbiA9IHRoaXMubWluVG9nZ2xlLnByZWNlbnQ7XHJcblx0XHRcdHNldFJhbmdlU3R5bGUodGhpcy5yYW5nZUVsZW0sIHRoaXMubWluVG9nZ2xlLnByZWNlbnQgKiB0aGlzLnNpemUsIHRoaXMubWF4VG9nZ2xlLnByZWNlbnQgKiB0aGlzLnNpemUsIHRoaXMuZGF0YS5pc1ZlcnRpY2FsKTtcclxuXHRcdFx0dGhpcy5wcmVjZW50Lm1pbiA9IHRoaXMubWluVG9nZ2xlLnByZWNlbnQ7XHJcblx0XHRcdHRoaXMucHJlY2VudC5tYXggPSB0aGlzLm1heFRvZ2dsZS5wcmVjZW50O1xyXG5cdFx0XHQvLyBjb25zb2xlLmxvZyh0aGlzLnByZWNlbnQpO1xyXG5cdFx0XHR0aGlzLnNldFRhYigpO1xyXG5cdFx0XHR0aGlzLmNvbnRhaW5lci5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnbW92ZVRvZ2dsZScpKTtcclxuXHRcdH1cclxuXHRcdHNldE1vdXNlSGFuZGxlcihkb2N1bWVudCwgb25Nb3VzZU1vdmUpO1xyXG5cdFx0Ly8gdGhpcy5zZXRUYWIoKTtcclxuXHR9XHJcblxyXG5cdG9uVG9nZ2xlQ29pbmNpZGVuY2UoKSB7XHJcblx0XHRjb25zdCBvbk1vdXNlRG93bkNvaW5jaWRlbmNlID0gKGV2dCkgPT4ge1xyXG5cdFx0XHRsZXQgY29pbmNpZGVuY2VUb2dnbGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHRcdFx0dGhpcy5tYXhUb2dnbGVFbGVtLmhpZGRlbiA9IHRydWU7XHJcblx0XHRcdGNvaW5jaWRlbmNlVG9nZ2xlID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludChldnQucGFnZVgsIGV2dC5wYWdlWSkuY2xhc3NMaXN0LmNvbnRhaW5zKCd0cy1zbGlkZXJfX3RvZ2dsZS0tbWluJyk7XHJcblx0XHRcdHRoaXMubWF4VG9nZ2xlRWxlbS5oaWRkZW4gPSBmYWxzZTtcclxuXHRcdFx0bGV0IHN0YXJ0UGl4ZWw6IG51bWJlcjtcclxuXHRcdFx0c3RhcnRQaXhlbCA9IHRoaXMubWF4VG9nZ2xlLnBpeGVsO1xyXG5cclxuXHRcdFx0Y29uc3Qgb25Nb3VzZU1vdmUgPSAobW92ZUV2dCkgPT4ge1xyXG5cdFx0XHRcdGlmIChjb2luY2lkZW5jZVRvZ2dsZSkge1xyXG5cdFx0XHRcdFx0dGhpcy5taW5Ub2dnbGUubW91c2VQaXhlbCA9IHRoaXMubWF4VG9nZ2xlLm1vdXNlUGl4ZWw7XHJcblx0XHRcdFx0XHR0aGlzLm1heFRvZ2dsZS5pc0ZpeGVkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdHRoaXMubWluVG9nZ2xlLmlzRml4ZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0aWYgKHRoaXMubWF4VG9nZ2xlLm1vdXNlUGl4ZWwgPiBzdGFydFBpeGVsKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMubWF4VG9nZ2xlLmlzRml4ZWQgPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0dGhpcy5taW5Ub2dnbGUuaXNGaXhlZCA9IHRydWU7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR0aGlzLm1heFRvZ2dsZS5pc0ZpeGVkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0dGhpcy5taW5Ub2dnbGUuaXNGaXhlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0XHR0aGlzLm1pblRvZ2dsZS5tb3VzZVBpeGVsID0gdGhpcy5tYXhUb2dnbGUubW91c2VQaXhlbDtcclxuXHRcdFx0XHRcdFx0dGhpcy5taW5Ub2dnbGUucGl4ZWwgPSB0aGlzLm1heFRvZ2dsZS5tb3VzZVBpeGVsO1xyXG5cdFx0XHRcdFx0XHRpZiAodGhpcy5taW5Ub2dnbGUucGl4ZWwgPCAwKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5taW5Ub2dnbGUucGl4ZWwgPSAwO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdHRoaXMubWluVG9nZ2xlLnNldFN0eWxlKCk7XHJcblx0XHRcdFx0XHRcdHRoaXMubWluVG9nZ2xlLnByZWNlbnQgPSB0aGlzLm1pblRvZ2dsZS5waXhlbCAvIHRoaXMuc2l6ZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy5tYXhUb2dnbGUuaXNGaXhlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0dGhpcy5taW5Ub2dnbGUuaXNGaXhlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRjb25zdCBvbk1vdXNlVXAgPSAodXBFdnQpID0+IHtcclxuXHRcdFx0XHR0aGlzLm1pblRvZ2dsZS5tb3VzZVBpeGVsID0gdGhpcy5taW5Ub2dnbGUucGl4ZWw7XHJcblx0XHRcdFx0dGhpcy5tYXhUb2dnbGUuaXNGaXhlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdHRoaXMubWluVG9nZ2xlLmlzRml4ZWQgPSBmYWxzZTtcclxuXHRcdFx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25Nb3VzZVVwKTtcclxuXHRcdFx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUpO1xyXG5cdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25Nb3VzZVVwKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLm1heFRvZ2dsZUVsZW0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgb25Nb3VzZURvd25Db2luY2lkZW5jZSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG4vLyBcdHNldFRvZ2dsZSgpIHtcclxuLy8gXHRcdHRoaXMubWluVG9nZ2xlRWxlbSA9IG1hcmt1cCh0aGlzLmNvbnRhaW5lcikubWluO1xyXG4vLyBcdFx0dGhpcy5tYXhUb2dnbGVFbGVtID0gbWFya3VwKHRoaXMuY29udGFpbmVyKS5tYXg7XHJcbi8vIFx0XHR0aGlzLm1pblRhYkVsZW0gPSBtYXJrdXAodGhpcy5jb250YWluZXIpLm1pblRhYjtcclxuLy8gXHRcdHRoaXMubWF4VGFiRWxlbSA9IG1hcmt1cCh0aGlzLmNvbnRhaW5lcikubWF4VGFiO1xyXG5cclxuLy8gXHRcdHRoaXMuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2luaXRWYWx1ZScsICgpID0+IHtcclxuLy8gXHRcdFx0c2V0VG9nZ2xlU3R5bGUodGhpcy5taW5Ub2dnbGVFbGVtLCB0aGlzLnZpZXdWYWx1ZS5taW4gKiB0aGlzLnNpemUsIHRoaXMuZGF0YS5pc1ZlcnRpY2FsKTtcclxuLy8gXHRcdFx0c2V0VG9nZ2xlU3R5bGUodGhpcy5tYXhUb2dnbGVFbGVtLCB0aGlzLnZpZXdWYWx1ZS5tYXggKiB0aGlzLnNpemUsIHRoaXMuZGF0YS5pc1ZlcnRpY2FsKTtcclxuLy8gXHRcdFx0dGhpcy5zZXRUYWIoKTtcclxuLy8gXHRcdH0pO1xyXG4vLyBcdFx0Ly8gdGhpcy52aWV3VmFsdWUgPSBzZXRWaWV3VmFsdWUodGhpcy5jb250YWluZXIsIHRoaXMuZGF0YSk7XHJcbi8vIFx0fVxyXG5cclxuLy8gXHRvbk1vdmVUb2dnbGUoKSB7XHJcbi8vIFx0XHQvLyB0aGlzLnZpZXdWYWx1ZSA9IHNldFZpZXdWYWx1ZSh0aGlzLmNvbnRhaW5lciwgdGhpcy5kYXRhKTtcclxuLy8gXHRcdGNvbnN0IG9uTW91c2VNb3ZlID0gKG1vdmVFdnQpID0+IHtcclxuLy8gXHRcdFx0dGhpcy5jb250YWluZXIuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ21vdmVUb2dnbGUnKSk7XHJcbi8vIFx0XHRcdC8vIGNvbnNvbGUubG9nKHRoaXMudmlld1ZhbHVlKTtcclxuLy8gXHRcdH1cclxuLy8gXHRcdHNldE1vdXNlSGFuZGxlcih0aGlzLmNvbnRhaW5lciwgb25Nb3VzZU1vdmUpO1xyXG4vLyBcdH1cclxuXHJcblx0YWRkU2NhbGUoKSB7XHJcblx0XHR0aGlzLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdpbml0U2NhbGUnLCAoKSA9PiB7XHJcblx0XHRcdGlmICh0aGlzLmRhdGEuaXNTY2FsZSkge1xyXG5cdFx0XHRcdGNvbnN0IHNjYWxlID0gbmV3IFNjYWxlKHRoaXMuY29udGFpbmVyLCB0aGlzLnNjYWxlLCB0aGlzLmRhdGEuaXNWZXJ0aWNhbCk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcbi8vIFx0Y2hhbmdlVGFiKCkge1xyXG4vLyBcdFx0dGhpcy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlVGFiJywgKCkgPT4ge1xyXG4vLyBcdFx0XHR0aGlzLnNldFRhYigpO1xyXG4vLyBcdFx0fSk7XHJcbi8vIFx0fVxyXG4vLyBcdGNoYW5nZUlucHV0KCkge1xyXG4vLyBcdFx0dGhpcy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlSW5wdXQnLCAoKSA9PiB7XHJcbi8vIFx0XHRcdC8vIGNvbnNvbGUubG9nKDIyMik7XHJcbi8vIFx0XHRcdC8vIGNvbnNvbGUubG9nKHRoaXMudmlld1ZhbHVlKTtcclxuLy8gXHRcdFx0c2V0VG9nZ2xlU3R5bGUodGhpcy5taW5Ub2dnbGVFbGVtLCB0aGlzLnZpZXdWYWx1ZS5taW4gKiB0aGlzLnNpemUsIHRoaXMuZGF0YS5pc1ZlcnRpY2FsKTtcclxuLy8gXHRcdFx0c2V0VG9nZ2xlU3R5bGUodGhpcy5tYXhUb2dnbGVFbGVtLCB0aGlzLnZpZXdWYWx1ZS5tYXggKiB0aGlzLnNpemUsIHRoaXMuZGF0YS5pc1ZlcnRpY2FsKTtcclxuLy8gXHRcdFx0dGhpcy5zZXRUYWIoKTtcclxuLy8gXHRcdH0pO1xyXG4vLyBcdH1cclxuLy8gfVxyXG5cclxuZXhwb3J0IHtWaWV3LCBWYWx1ZSwgVGFiVGV4dH07XHJcblxyXG5cclxuXHJcblxyXG4vLyAvL29sZFxyXG5cclxuLy8gaW1wb3J0IHtpbml0Vmlld01hcmt1cH0gZnJvbSAnLi9pbml0LXZpZXctbWFya3VwLnRzJztcclxuLy8gaW1wb3J0IHtTY2FsZX0gZnJvbSAnLi9zY2FsZS50cyc7XHJcbi8vIGltcG9ydCB7c2V0Vmlld1ZhbHVlfSBmcm9tICcuL3NldC12aWV3LXZhbHVlLnRzJztcclxuLy8gaW1wb3J0IHtEYXRhfSBmcm9tICcuL2RhdGEudHMnO1xyXG4vLyBpbXBvcnQge3NldFRvZ2dsZVN0eWxlfSBmcm9tICcuL3RvZ2dsZS50cyc7XHJcbi8vIGltcG9ydCB7c2V0TW91c2VIYW5kbGVyLCByb3VuZH0gZnJvbSAnLi9mdW5jdGlvbnMudHMnO1xyXG4vLyBpbXBvcnQge21hcmt1cH0gZnJvbSAnLi9pbml0LXZpZXctbWFya3VwLnRzJztcclxuXHJcbi8vIGludGVyZmFjZSBWYWx1ZSB7XHJcbi8vIFx0bWluOiBudW1iZXI7XHJcbi8vIFx0bWF4OiBudW1iZXI7XHJcbi8vIH1cclxuLy8gaW50ZXJmYWNlIFRhYlRleHQge1xyXG4vLyBcdG1pbjogc3RyaW5nO1xyXG4vLyBcdG1heDogc3RyaW5nO1xyXG4vLyB9XHJcblxyXG4vLyBjbGFzcyBWaWV3IHtcclxuXHJcbi8vIFx0ZGF0YTogRGF0YTtcclxuLy8gXHR2aWV3VmFsdWU6IFZhbHVlO1xyXG4vLyBcdHZpZXdUYWJUZXh0OiBUYWJUZXh0O1xyXG4vLyBcdGNvbnRhaW5lcjogSFRNTEVsZW1lbnQ7XHJcbi8vIFx0bWluVG9nZ2xlRWxlbTogSFRNTEVsZW1lbnQ7XHJcbi8vIFx0bWF4VG9nZ2xlRWxlbTogSFRNTEVsZW1lbnQ7XHJcbi8vIFx0bWluVGFiRWxlbTogSFRNTEVsZW1lbnQ7XHJcbi8vIFx0bWF4VGFiRWxlbTogSFRNTEVsZW1lbnQ7XHJcbi8vIFx0c2l6ZTogbnVtYmVyO1xyXG4vLyBcdHNjYWxlOiBzdHJpbmdbXTtcclxuXHJcbi8vIFx0Y29uc3RydWN0b3IoZGF0YSkge1xyXG4vLyBcdFx0dGhpcy5kYXRhID0gZGF0YTtcclxuLy8gXHRcdHRoaXMudmlld1RhYlRleHQgPSB7XHJcbi8vIFx0XHRcdG1pbjogJycsXHJcbi8vIFx0XHRcdG1heDogJydcclxuLy8gXHRcdH1cclxuLy8gXHRcdHRoaXMuc2NhbGUgPSBbXTtcclxuLy8gXHRcdHRoaXMuaW5pdFZpZXcoKTtcclxuLy8gXHRcdHRoaXMuc2V0VG9nZ2xlKCk7XHJcbi8vIFx0XHR0aGlzLm9uTW92ZVRvZ2dsZSgpO1xyXG4vLyBcdFx0dGhpcy5hZGRTY2FsZSgpO1xyXG4vLyBcdFx0dGhpcy5jaGFuZ2VUYWIoKTtcclxuLy8gXHRcdHRoaXMuY2hhbmdlSW5wdXQoKTtcclxuLy8gXHR9XHJcblxyXG4vLyBcdGluaXRWaWV3KCkge1xyXG4vLyBcdFx0aW5pdFZpZXdNYXJrdXAodGhpcy5kYXRhLndyYXBJZCwgdGhpcy5kYXRhLmlzVmVydGljYWwpO1xyXG4vLyBcdFx0dGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuZGF0YS53cmFwSWQpLnF1ZXJ5U2VsZWN0b3IoJy50cy1zbGlkZXJfX2NvbnRhaW5lcicpO1xyXG4vLyBcdFx0aWYgKHRoaXMuZGF0YS5pc1ZlcnRpY2FsKSB7XHJcbi8vIFx0XHRcdHRoaXMuc2l6ZSA9IHRoaXMuY29udGFpbmVyLm9mZnNldEhlaWdodDtcclxuLy8gXHRcdH0gZWxzZSB7XHJcbi8vIFx0XHRcdHRoaXMuc2l6ZSA9IHRoaXMuY29udGFpbmVyLm9mZnNldFdpZHRoO1xyXG4vLyBcdFx0fVxyXG4vLyBcdFx0dGhpcy52aWV3VmFsdWUgPSBzZXRWaWV3VmFsdWUodGhpcy5jb250YWluZXIsIHRoaXMuZGF0YSk7XHJcbi8vIFx0fVxyXG5cclxuLy8gXHRzZXRUYWIoKSB7XHJcbi8vIFx0XHR0aGlzLm1pblRhYkVsZW0udGV4dENvbnRlbnQgPSB0aGlzLnZpZXdUYWJUZXh0Lm1pbjtcclxuLy8gXHRcdHRoaXMubWF4VGFiRWxlbS50ZXh0Q29udGVudCA9IHRoaXMudmlld1RhYlRleHQubWF4O1xyXG4vLyBcdH1cclxuXHJcbi8vIFx0c2V0VG9nZ2xlKCkge1xyXG4vLyBcdFx0dGhpcy5taW5Ub2dnbGVFbGVtID0gbWFya3VwKHRoaXMuY29udGFpbmVyKS5taW47XHJcbi8vIFx0XHR0aGlzLm1heFRvZ2dsZUVsZW0gPSBtYXJrdXAodGhpcy5jb250YWluZXIpLm1heDtcclxuLy8gXHRcdHRoaXMubWluVGFiRWxlbSA9IG1hcmt1cCh0aGlzLmNvbnRhaW5lcikubWluVGFiO1xyXG4vLyBcdFx0dGhpcy5tYXhUYWJFbGVtID0gbWFya3VwKHRoaXMuY29udGFpbmVyKS5tYXhUYWI7XHJcblxyXG4vLyBcdFx0dGhpcy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignaW5pdFZhbHVlJywgKCkgPT4ge1xyXG4vLyBcdFx0XHRzZXRUb2dnbGVTdHlsZSh0aGlzLm1pblRvZ2dsZUVsZW0sIHRoaXMudmlld1ZhbHVlLm1pbiAqIHRoaXMuc2l6ZSwgdGhpcy5kYXRhLmlzVmVydGljYWwpO1xyXG4vLyBcdFx0XHRzZXRUb2dnbGVTdHlsZSh0aGlzLm1heFRvZ2dsZUVsZW0sIHRoaXMudmlld1ZhbHVlLm1heCAqIHRoaXMuc2l6ZSwgdGhpcy5kYXRhLmlzVmVydGljYWwpO1xyXG4vLyBcdFx0XHR0aGlzLnNldFRhYigpO1xyXG4vLyBcdFx0fSk7XHJcbi8vIFx0XHQvLyB0aGlzLnZpZXdWYWx1ZSA9IHNldFZpZXdWYWx1ZSh0aGlzLmNvbnRhaW5lciwgdGhpcy5kYXRhKTtcclxuLy8gXHR9XHJcblxyXG4vLyBcdG9uTW92ZVRvZ2dsZSgpIHtcclxuLy8gXHRcdC8vIHRoaXMudmlld1ZhbHVlID0gc2V0Vmlld1ZhbHVlKHRoaXMuY29udGFpbmVyLCB0aGlzLmRhdGEpO1xyXG4vLyBcdFx0Y29uc3Qgb25Nb3VzZU1vdmUgPSAobW92ZUV2dCkgPT4ge1xyXG4vLyBcdFx0XHR0aGlzLmNvbnRhaW5lci5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnbW92ZVRvZ2dsZScpKTtcclxuLy8gXHRcdFx0Ly8gY29uc29sZS5sb2codGhpcy52aWV3VmFsdWUpO1xyXG4vLyBcdFx0fVxyXG4vLyBcdFx0c2V0TW91c2VIYW5kbGVyKHRoaXMuY29udGFpbmVyLCBvbk1vdXNlTW92ZSk7XHJcbi8vIFx0fVxyXG5cclxuLy8gXHRhZGRTY2FsZSgpIHtcclxuLy8gXHRcdHRoaXMuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2luaXRTY2FsZScsICgpID0+IHtcclxuLy8gXHRcdFx0aWYgKHRoaXMuZGF0YS5pc1NjYWxlKSB7XHJcbi8vIFx0XHRcdFx0Y29uc3Qgc2NhbGUgPSBuZXcgU2NhbGUodGhpcy5jb250YWluZXIsIHRoaXMuc2NhbGUsIHRoaXMuZGF0YS5pc1ZlcnRpY2FsKTtcclxuLy8gXHRcdFx0fVxyXG4vLyBcdFx0fSk7XHJcbi8vIFx0fVxyXG5cclxuLy8gXHRjaGFuZ2VUYWIoKSB7XHJcbi8vIFx0XHR0aGlzLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2VUYWInLCAoKSA9PiB7XHJcbi8vIFx0XHRcdHRoaXMuc2V0VGFiKCk7XHJcbi8vIFx0XHR9KTtcclxuLy8gXHR9XHJcbi8vIFx0Y2hhbmdlSW5wdXQoKSB7XHJcbi8vIFx0XHR0aGlzLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2VJbnB1dCcsICgpID0+IHtcclxuLy8gXHRcdFx0Ly8gY29uc29sZS5sb2coMjIyKTtcclxuLy8gXHRcdFx0Ly8gY29uc29sZS5sb2codGhpcy52aWV3VmFsdWUpO1xyXG4vLyBcdFx0XHRzZXRUb2dnbGVTdHlsZSh0aGlzLm1pblRvZ2dsZUVsZW0sIHRoaXMudmlld1ZhbHVlLm1pbiAqIHRoaXMuc2l6ZSwgdGhpcy5kYXRhLmlzVmVydGljYWwpO1xyXG4vLyBcdFx0XHRzZXRUb2dnbGVTdHlsZSh0aGlzLm1heFRvZ2dsZUVsZW0sIHRoaXMudmlld1ZhbHVlLm1heCAqIHRoaXMuc2l6ZSwgdGhpcy5kYXRhLmlzVmVydGljYWwpO1xyXG4vLyBcdFx0XHR0aGlzLnNldFRhYigpO1xyXG4vLyBcdFx0fSk7XHJcbi8vIFx0fVxyXG4vLyB9XHJcblxyXG4vLyBleHBvcnQge1ZpZXcsIFZhbHVlLCBUYWJUZXh0fTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==