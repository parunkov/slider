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
    // modelTabText: TabText;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Z1bmN0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luaXQtdmlldy1tYXJrdXAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9wcmVzZW50ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjYWxlLnRzIiwid2VicGFjazovLy8uL3NyYy90b2dnbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUF3QztBQUd4QyxNQUFNLFdBQVcsR0FBUztJQUN6QixVQUFVLEVB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QUFDO2dCQUN2QyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQzthQUN2QztpQkFBTTtnQkFDTixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO2dCQUN0QyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO2dCQUN0QyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyw4REFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzlFLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLDhEQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDOUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ2hELElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNoRCxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsR0FBRywyREFBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzlELElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHLDJEQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FB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QUssR0FBRyxJQUFJLCtDQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7YUFDMUU7UUFDRixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRCxTQUFTO1FBQ1IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsR0FBRyxFQUFFO1lBQ2pELElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNmLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELFdBQVc7UUFDVixJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLGFBQWEsRUFBRSxHQUFHLEVBQUU7WUFDbkQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7WUFDMUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7WUFDMUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUM5QixJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQzlCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNkLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNqQixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRCxZQUFZO1FBQ1gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUN6QixDQUFDO0NBQ0Q7QUFFYSIsImZpbGUiOiJ0cy1zbGlkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsImltcG9ydCB7c2V0TGltaXR9IGZyb20gJy4vZnVuY3Rpb25zLnRzJztcclxuaW1wb3J0IHtEYXRhfSBmcm9tICcuL2ludGVyZmFjZXMudHMnO1xyXG5cclxuY29uc3QgZGVmYXVsdERhdGE6IERhdGEgPSB7XHJcblx0bWluSW5wdXRJZDogJ3RzLXNsaWRlcl9fbWluLWlucHV0JyxcclxuXHRtYXhJbnB1dElkOiAndHMtc2xpZGVyX19tYXgtaW5wdXQnLFxyXG5cdGlzQXJyYXk6IGZhbHNlLFxyXG5cdGFycmF5OiBbXSxcclxuXHRzdGVwOiAxLFxyXG5cdG1pblZhbHVlOiAwLFxyXG5cdG1heFZhbHVlOiAxMDAsXHJcblx0bWluVG9nZ2xlVmFsdWU6IDI1LFxyXG5cdG1heFRvZ2dsZVZhbHVlOiA3NSxcclxuXHRpc1JhbmdlOiB0cnVlLFxyXG5cdGlzVmVydGljYWw6IGZhbHNlLFxyXG5cdGlzVGFiOiB0cnVlLFxyXG5cdGlzU2NhbGU6IHRydWUsXHJcblx0c2NhbGVRdWFudGl0eTogNFxyXG59XHJcblxyXG5jb25zdCBzZXREYXRhTGltaXQgPSAoZGF0YTogRGF0YSkgPT4ge1xyXG5cdGRhdGEubWluVG9nZ2xlVmFsdWUgPSBzZXRMaW1pdChkYXRhLm1pblRvZ2dsZVZhbHVlLCBkYXRhLm1pblZhbHVlLCBkYXRhLm1heFZhbHVlKTtcclxuXHRkYXRhLm1heFRvZ2dsZVZhbHVlID0gc2V0TGltaXQoZGF0YS5tYXhUb2dnbGVWYWx1ZSwgZGF0YS5taW5WYWx1ZSwgZGF0YS5tYXhWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7c2V0RGF0YUxpbWl0LCBkZWZhdWx0RGF0YX07IiwiY29uc3Qgc2V0TW91c2VIYW5kbGVyID0gKGVsZW0sIG9uTW92ZSwgb25Eb3ZuPywgb25VcD8pID0+IHtcclxuXHJcblx0Y29uc3Qgb25Nb3VzZURvd24gPSAoZXZ0KSA9PiB7XHJcblx0XHRpZiAob25Eb3ZuKSB7XHJcblx0XHRcdG9uRG92bihldnQpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRjb25zdCBvbk1vdXNlTW92ZSA9IChtb3ZlRXZ0KSA9PiB7XHJcblx0XHRcdG9uTW92ZShtb3ZlRXZ0KTtcclxuXHRcdH1cclxuXHRcdGNvbnN0IG9uTW91c2VVcCA9ICh1cEV2dCkgPT4ge1xyXG5cdFx0XHRpZiAob25VcCkge1xyXG5cdFx0XHRcdG9uVXAodXBFdnQpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbk1vdXNlVXApO1xyXG5cdFx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSk7XHJcblx0XHR9XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSk7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25Nb3VzZVVwKTtcclxuXHR9XHJcblxyXG5cdGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgb25Nb3VzZURvd24pO1xyXG59XHJcblxyXG5jb25zdCByb3VuZCA9ICh2YWx1ZTogbnVtYmVyLCBzdGVwOiBudW1iZXIpID0+IHtcclxuXHRjb25zdCBwcmVjaXNpb24gPSB4ID0+ICsoICh4LnRvU3RyaW5nKCkuaW5jbHVkZXMoJy4nKSkgPyAoeC50b1N0cmluZygpLnNwbGl0KCcuJykucG9wKCkubGVuZ3RoKSA6ICgwKSApO1xyXG5cdGxldCByb3VuZGVkOiBzdHJpbmcgPSAoTWF0aC5yb3VuZCh2YWx1ZSAvIHN0ZXApICogc3RlcCkudG9GaXhlZChwcmVjaXNpb24oc3RlcCkpO1xyXG5cdHJldHVybiByb3VuZGVkO1xyXG59XHJcblxyXG5jb25zdCBzZXRMaW1pdCA9ICh2YWx1ZTogbnVtYmVyLCBtaW46IG51bWJlciwgbWF4OiBudW1iZXIpID0+IHtcclxuXHRpZiAodmFsdWUgPiBtYXgpIHtcclxuXHRcdHZhbHVlID0gbWF4O1xyXG5cdH0gZWxzZSBpZiAodmFsdWUgPCBtaW4pIHtcclxuXHRcdHZhbHVlID0gbWluO1xyXG5cdH1cclxuXHRyZXR1cm4gdmFsdWU7XHJcbn1cclxuXHJcbmNvbnN0IHRvUHJlY2VudCA9ICh2YWx1ZTogbnVtYmVyLCBtaW46IG51bWJlciwgbWF4OiBudW1iZXIpID0+ICh2YWx1ZSAtIG1pbikgLyAobWF4IC0gbWluKTtcclxuXHJcbmNvbnN0IHRvVmFsdWUgPSAodmFsdWU6IG51bWJlciwgbWluOiBudW1iZXIsIG1heDogbnVtYmVyKSA9PiAobWluICsgKG1heCAtIG1pbikgKiB2YWx1ZSk7XHJcblxyXG5jb25zdCBzZXRSYW5nZVN0eWxlID0gKHJhbmdlOiBIVE1MRWxlbWVudCwgbWluOiBudW1iZXIsIG1heDogbnVtYmVyLCBpc1ZlcnRpY2FsOiBib29sZWFuKSA9PiB7XHJcblx0aWYgKGlzVmVydGljYWwpIHtcclxuXHRcdHJhbmdlLnN0eWxlLnRvcCA9IGAke21pbn1weGA7XHJcblx0XHRyYW5nZS5zdHlsZS5oZWlnaHQgPSBgJHsobWF4IC0gbWluKX1weGA7XHJcblx0fSBlbHNlIHtcclxuXHRcdHJhbmdlLnN0eWxlLmxlZnQgPSBgJHttaW59cHhgO1xyXG5cdFx0cmFuZ2Uuc3R5bGUud2lkdGggPSBgJHsobWF4IC0gbWluKX1weGA7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQge3NldE1vdXNlSGFuZGxlciwgcm91bmQsIHNldExpbWl0LCB0b1ByZWNlbnQsIHRvVmFsdWUsIHNldFJhbmdlU3R5bGV9OyIsImltcG9ydCB7UHJlc2VudGVyfSBmcm9tICcuL3ByZXNlbnRlci50cyc7XHJcblxyXG4oZnVuY3Rpb24oJCkge1xyXG5cdGNvbnN0IG1ldGhvZHMgPSB7XHJcblx0XHRpbml0OiBmdW5jdGlvbihvcHRpb25zKSB7XHJcblx0XHRcdGNvbnN0IGlkOiBzdHJpbmcgPSAnIycgKyB0aGlzLnByb3AoJ2lkJyk7XHJcblx0XHRcdGNvbnN0IHdyYXA6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihpZCk7XHJcblx0XHRcdGNvbnN0IHByZXNlbnRlciA9IG5ldyBQcmVzZW50ZXIob3B0aW9ucywgd3JhcCk7XHJcblx0XHRcdHdpbmRvd1tpZF0gPSBwcmVzZW50ZXI7XHJcblx0XHR9LFxyXG5cdFx0Y2hhbmdlOiBmdW5jdGlvbihvcHRpb25zKSB7XHJcblx0XHRcdGNvbnN0IGlkOiBzdHJpbmcgPSAnIycgKyB0aGlzLnByb3AoJ2lkJyk7XHJcblx0XHRcdGNvbnN0IHByZXNlbnRlciA9IHdpbmRvd1tpZF07XHJcblx0XHRcdHByZXNlbnRlci5vcHRpb25zID0gb3B0aW9ucztcclxuXHRcdFx0cHJlc2VudGVyLmNoYW5nZURhdGEoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdCQuZm4udHNTbGlkZXIgPSBmdW5jdGlvbihvcHRpb25zLCBtZXRob2Q/KSB7XHJcblx0XHRjb25zdCBpZDogc3RyaW5nID0gJyMnICsgdGhpcy5wcm9wKCdpZCcpO1xyXG5cdFx0aWYgKCBtZXRob2QgPT09ICdjaGFuZ2UnICYmIHdpbmRvd1tpZF0gKSB7XHJcblx0XHRcdGNvbnN0IGNoYW5nZSA9IG1ldGhvZHMuY2hhbmdlLmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKTtcclxuXHRcdH0gZWxzZSBpZiAoIHR5cGVvZiBtZXRob2QgPT09ICdvYmplY3QnIHx8ICEgbWV0aG9kIHx8ICEgd2luZG93W2lkXSApIHtcclxuXHRcdFx0Y29uc3QgaW5pdCA9IG1ldGhvZHMuaW5pdC5hcHBseSggdGhpcywgYXJndW1lbnRzICk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHQkLmVycm9yKCAn0JzQtdGC0L7QtCDRgSDQuNC80LXQvdC10LwgJyArICBtZXRob2QgKyAnINC90LUg0YHRg9GJ0LXRgdGC0LLRg9C10YIg0LTQu9GPIGpRdWVyeS50c1NsaWRlcicgKTtcclxuXHRcdH0gXHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcbn0pKGpRdWVyeSk7XHJcblxyXG4iLCJjb25zdCBpbml0Vmlld01hcmt1cCA9IChjb250cm9sV3JhcDogSFRNTEVsZW1lbnQsIHZlcnRpY2FsOiBib29sZWFuKSA9PiB7XHJcblx0Y29uc3QgY29udG9sTWFya3VwOiBzdHJpbmcgPSBgPGRpdiBjbGFzcz1cInRzLXNsaWRlcl9fY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidHMtc2xpZGVyX19iYXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRzLXNsaWRlcl9fdG9nZ2xlIHRzLXNsaWRlcl9fdG9nZ2xlLS1taW5cIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidHMtc2xpZGVyX190b2dnbGUtdmFsdWUgdHMtc2xpZGVyX190b2dnbGUtdmFsdWUtLW1pblwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRzLXNsaWRlcl9fdG9nZ2xlIHRzLXNsaWRlcl9fdG9nZ2xlLS1tYXhcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidHMtc2xpZGVyX190b2dnbGUtdmFsdWUgdHMtc2xpZGVyX190b2dnbGUtdmFsdWUtLW1heFwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRzLXNsaWRlcl9fcmFuZ2VcIj48L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PmA7XHJcblx0Y29udHJvbFdyYXAuaW5uZXJIVE1MID0gY29udG9sTWFya3VwO1xyXG4gIGNvbnN0IGRpdiA9IGNvbnRyb2xXcmFwLnF1ZXJ5U2VsZWN0b3JBbGwoJ2RpdicpO1xyXG4gIGlmICh2ZXJ0aWNhbCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaXYubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgZmlyc3RDbGFzczogc3RyaW5nID0gZGl2W2ldLmNsYXNzTGlzdFswXTtcclxuICAgICAgY29uc3QgdmVydGljYWxDbGFzczogc3RyaW5nID0gZmlyc3RDbGFzcyArICctLXZlcnRpY2FsJztcclxuICAgICAgZGl2W2ldLmNsYXNzTGlzdC5hZGQodmVydGljYWxDbGFzcyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBtYXJrdXAgPSAoc2xpZGVyOiBIVE1MRWxlbWVudCkgPT4ge1xyXG4gIGludGVyZmFjZSBNYXJrdXAge1xyXG4gICAgbWluOiBIVE1MRWxlbWVudDtcclxuICAgIG1heDogSFRNTEVsZW1lbnQ7XHJcbiAgICByYW5nZTogSFRNTEVsZW1lbnQ7XHJcbiAgICBiYXI6IEhUTUxFbGVtZW50O1xyXG4gICAgbWluVGFiOiBIVE1MRWxlbWVudDtcclxuICAgIG1heFRhYjogSFRNTEVsZW1lbnQ7XHJcbiAgfVxyXG4gIGxldCBtYXJrdXA6IE1hcmt1cCA9IHsgIFxyXG4gICAgIG1pbjogc2xpZGVyLnF1ZXJ5U2VsZWN0b3IoJy50cy1zbGlkZXJfX3RvZ2dsZS0tbWluJyksXHJcbiAgICAgbWF4OiBzbGlkZXIucXVlcnlTZWxlY3RvcignLnRzLXNsaWRlcl9fdG9nZ2xlLS1tYXgnKSxcclxuICAgICByYW5nZTogc2xpZGVyLnF1ZXJ5U2VsZWN0b3IoJy50cy1zbGlkZXJfX3JhbmdlJyksXHJcbiAgICAgYmFyOiBzbGlkZXIucXVlcnlTZWxlY3RvcignLnRzLXNsaWRlcl9fYmFyJyksXHJcbiAgICAgbWluVGFiOiBzbGlkZXIucXVlcnlTZWxlY3RvcignLnRzLXNsaWRlcl9fdG9nZ2xlLXZhbHVlLS1taW4nKSxcclxuICAgICBtYXhUYWI6IHNsaWRlci5xdWVyeVNlbGVjdG9yKCcudHMtc2xpZGVyX190b2dnbGUtdmFsdWUtLW1heCcpXHJcbiAgfVxyXG4gIHJldHVybiBtYXJrdXA7XHJcbn1cclxuXHJcbmV4cG9ydCB7aW5pdFZpZXdNYXJrdXAsIG1hcmt1cH07IiwiaW1wb3J0IHtEYXRhLCBWYWx1ZSwgVGFiVGV4dH0gZnJvbSAnLi9pbnRlcmZhY2VzLnRzJztcclxuaW1wb3J0IHtzZXRNb3VzZUhhbmRsZXIsIHJvdW5kLCBzZXRMaW1pdH0gZnJvbSAnLi9mdW5jdGlvbnMudHMnO1xyXG5cclxuY2xhc3MgTW9kZWwge1xyXG5cclxuXHRkYXRhOiBEYXRhO1xyXG5cdG1pbklucHV0OiBhbnk7XHJcblx0bWF4SW5wdXQ6IGFueTtcclxuXHR2YWx1ZTogVmFsdWU7XHJcblx0cHJlY2VudDogVmFsdWU7XHJcblx0dGFiVGV4dDogVGFiVGV4dDtcclxuXHRvYnNlcnZlcjogSFRNTEVsZW1lbnQ7XHJcblx0bWluOiBudW1iZXI7XHJcblx0bWF4OiBudW1iZXI7XHJcblx0c2NhbGU6IHN0cmluZ1tdO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihkYXRhKSB7XHRcdFxyXG5cdFx0dGhpcy5kYXRhID0gZGF0YTtcclxuXHRcdHRoaXMudGFiVGV4dCA9IHtcclxuXHRcdFx0bWluOiAnJyxcclxuXHRcdFx0bWF4OiAnJ1xyXG5cdFx0fVxyXG5cdFx0dGhpcy52YWx1ZSA9IHtcclxuXHRcdFx0bWluOiAwLFxyXG5cdFx0XHRtYXg6IDBcclxuXHRcdH1cclxuXHRcdHRoaXMucHJlY2VudCA9IHtcclxuXHRcdFx0bWluOiAwLFxyXG5cdFx0XHRtYXg6IDBcclxuXHRcdH1cclxuXHRcdHRoaXMuc2NhbGUgPSBbXTtcclxuXHRcdHRoaXMub2JzZXJ2ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdFdmVudCcpO1xyXG5cdFx0dGhpcy5pbml0KCk7XHJcblx0XHR0aGlzLnNldFNjYWxlKCk7XHJcblx0XHR0aGlzLmFkZExpc3RlbmVyKCk7XHJcblx0XHR0aGlzLmNoYW5nZUlucHV0KCk7XHJcblx0fVxyXG5cclxuXHRzZXRJbnB1dCgpIHtcclxuXHRcdHRoaXMubWluSW5wdXQudmFsdWUgPSB0aGlzLnRhYlRleHQubWluO1xyXG5cdFx0dGhpcy5tYXhJbnB1dC52YWx1ZSA9IHRoaXMudGFiVGV4dC5tYXg7XHJcblx0XHRpZiAoIXRoaXMuZGF0YS5pc1JhbmdlKSB7XHJcblx0XHRcdGlmICh0aGlzLmRhdGEuaXNBcnJheSkge1xyXG5cdFx0XHRcdHRoaXMubWluSW5wdXQudmFsdWUgPSB0aGlzLmRhdGEuYXJyYXlbMF07XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5taW5JbnB1dC52YWx1ZSA9IHRoaXMuZGF0YS5taW5WYWx1ZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0c2V0QXJyYXlWYWx1ZSgpIHtcclxuXHRcdGxldCBtaW4gPSBNYXRoLnJvdW5kKHRoaXMucHJlY2VudC5taW4gKiAodGhpcy5kYXRhLmFycmF5Lmxlbmd0aCAtIDEpKTtcclxuXHRcdGxldCBtYXggPSBNYXRoLnJvdW5kKHRoaXMucHJlY2VudC5tYXggKiAodGhpcy5kYXRhLmFycmF5Lmxlbmd0aCAtIDEpKTtcclxuXHRcdHRoaXMudGFiVGV4dC5taW4gPSB0aGlzLmRhdGEuYXJyYXlbbWluXTtcclxuXHRcdHRoaXMudGFiVGV4dC5tYXggPSB0aGlzLmRhdGEuYXJyYXlbbWF4XTtcclxuXHRcdHRoaXMuc2V0SW5wdXQoKTtcclxuXHR9XHJcblxyXG5cdGluaXQoKSB7XHJcblx0XHRpZiAodGhpcy5kYXRhLmlzQXJyYXkpIHtcclxuXHRcdFx0dGhpcy5vYnNlcnZlci5hZGRFdmVudExpc3RlbmVyKCdzZXRQcmVjZW50JywgKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMuc2V0QXJyYXlWYWx1ZSgpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMudGFiVGV4dC5taW4gPSByb3VuZCh0aGlzLmRhdGEubWluVG9nZ2xlVmFsdWUsIHRoaXMuZGF0YS5zdGVwKTtcclxuXHRcdFx0dGhpcy50YWJUZXh0Lm1heCA9IHJvdW5kKHRoaXMuZGF0YS5tYXhUb2dnbGVWYWx1ZSwgdGhpcy5kYXRhLnN0ZXApO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5taW5JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgdGhpcy5kYXRhLm1pbklucHV0SWQpO1xyXG5cdFx0dGhpcy5tYXhJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgdGhpcy5kYXRhLm1heElucHV0SWQpO1xyXG5cdFx0dGhpcy5zZXRJbnB1dCgpO1xyXG5cdH1cclxuXHJcblx0c2V0U2NhbGUoKSB7XHJcblx0XHRpZiAodGhpcy5kYXRhLmlzQXJyYXkpIHtcclxuXHRcdFx0aWYgKHRoaXMuZGF0YS5pc1NjYWxlKSB7XHJcblx0XHRcdFx0dGhpcy5zY2FsZSA9IHRoaXMuZGF0YS5hcnJheTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKHRoaXMuZGF0YS5pc1NjYWxlKSB7XHJcblx0XHRcdFx0bGV0IHF1YW50aXR5ID0gdGhpcy5kYXRhLnNjYWxlUXVhbnRpdHk7XHJcblx0XHRcdFx0aWYgKHF1YW50aXR5IDwgMikge1xyXG5cdFx0XHRcdFx0cXVhbnRpdHkgPSAyO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHF1YW50aXR5OyBpKyspIHtcclxuXHRcdFx0XHRcdGxldCB0ZXh0VmFsdWU6IG51bWJlciA9IE1hdGgucm91bmQoKHRoaXMuZGF0YS5taW5WYWx1ZSArICh0aGlzLmRhdGEubWF4VmFsdWUgLSB0aGlzLmRhdGEubWluVmFsdWUpIC8gKHF1YW50aXR5IC0gMSkgKiBpKSAvIHRoaXMuZGF0YS5zdGVwKSAqIHRoaXMuZGF0YS5zdGVwO1xyXG5cdFx0XHRcdFx0bGV0IHRleHQ6IHN0cmluZyA9IHJvdW5kKHRleHRWYWx1ZSwgdGhpcy5kYXRhLnN0ZXApO1xyXG5cdFx0XHRcdFx0dGhpcy5zY2FsZS5wdXNoKHRleHQpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0YWRkTGlzdGVuZXIoKSB7XHJcblx0XHR0aGlzLm9ic2VydmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZVZhbHVlJywgKCkgPT4ge1xyXG5cdFx0XHRpZiAodGhpcy5kYXRhLmlzQXJyYXkpIHtcclxuXHRcdFx0XHR0aGlzLnNldEFycmF5VmFsdWUoKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aGlzLnRhYlRleHQubWluID0gcm91bmQodGhpcy52YWx1ZS5taW4sIHRoaXMuZGF0YS5zdGVwKTtcclxuXHRcdFx0XHR0aGlzLnRhYlRleHQubWF4ID0gcm91bmQodGhpcy52YWx1ZS5tYXgsIHRoaXMuZGF0YS5zdGVwKTtcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLnNldElucHV0KCk7XHJcblx0XHRcdHRoaXMub2JzZXJ2ZXIuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2NoYW5nZVRhYlRleHQnKSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0Y2hhbmdlSW5wdXQoKSB7XHJcblx0XHRjb25zdCBvbkJsdXIgPSAoKSA9PiB7XHJcblx0XHRcdGlmICh0aGlzLmRhdGEuaXNBcnJheSkge1xyXG5cdFx0XHRcdGNvbnN0IGluQXJyYXkgPSAodmFsdWUsIGxpbWl0KSA9PiB7XHJcblx0XHRcdFx0XHRpZiAodGhpcy5kYXRhLmFycmF5LmluY2x1ZGVzKHZhbHVlKSkge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gdmFsdWU7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gbGltaXQ7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMubWluSW5wdXQudmFsdWUgPSBpbkFycmF5KHRoaXMubWluSW5wdXQudmFsdWUsIHRoaXMuZGF0YS5hcnJheVswXSk7XHJcblx0XHRcdFx0dGhpcy5tYXhJbnB1dC52YWx1ZSA9IGluQXJyYXkodGhpcy5tYXhJbnB1dC52YWx1ZSwgdGhpcy5kYXRhLmFycmF5W3RoaXMuZGF0YS5hcnJheS5sZW5ndGggLSAxXSk7XHJcblx0XHRcdFx0dGhpcy52YWx1ZS5taW4gPSB0aGlzLmRhdGEuYXJyYXkuaW5kZXhPZih0aGlzLm1pbklucHV0LnZhbHVlKTtcclxuXHRcdFx0XHR0aGlzLnZhbHVlLm1heCA9IHRoaXMuZGF0YS5hcnJheS5pbmRleE9mKHRoaXMubWF4SW5wdXQudmFsdWUpO1xyXG5cdFx0XHRcdGlmICh0aGlzLnZhbHVlLm1pbiA+IHRoaXMudmFsdWUubWF4KSB7XHJcblx0XHRcdFx0XHR0aGlzLnZhbHVlLm1pbiA9IHRoaXMudmFsdWUubWF4O1xyXG5cdFx0XHRcdFx0dGhpcy5taW5JbnB1dC52YWx1ZSA9IHRoaXMubWF4SW5wdXQudmFsdWU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMudGFiVGV4dC5taW4gPSB0aGlzLm1pbklucHV0LnZhbHVlO1xyXG5cdFx0XHRcdHRoaXMudGFiVGV4dC5tYXggPSB0aGlzLm1heElucHV0LnZhbHVlO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMudmFsdWUubWluID0gK3RoaXMubWluSW5wdXQudmFsdWU7XHJcblx0XHRcdFx0dGhpcy52YWx1ZS5tYXggPSArdGhpcy5tYXhJbnB1dC52YWx1ZTtcclxuXHRcdFx0XHR0aGlzLnZhbHVlLm1pbiA9IHNldExpbWl0KHRoaXMudmFsdWUubWluLCB0aGlzLmRhdGEubWluVmFsdWUsIHRoaXMudmFsdWUubWF4KTtcclxuXHRcdFx0XHR0aGlzLnZhbHVlLm1heCA9IHNldExpbWl0KHRoaXMudmFsdWUubWF4LCB0aGlzLnZhbHVlLm1pbiwgdGhpcy5kYXRhLm1heFZhbHVlKTtcclxuXHRcdFx0XHR0aGlzLm1pbklucHV0LnZhbHVlID0gdGhpcy52YWx1ZS5taW4udG9TdHJpbmcoKTtcclxuXHRcdFx0XHR0aGlzLm1heElucHV0LnZhbHVlID0gdGhpcy52YWx1ZS5tYXgudG9TdHJpbmcoKTtcclxuXHRcdFx0XHR0aGlzLnRhYlRleHQubWluID0gcm91bmQodGhpcy5taW5JbnB1dC52YWx1ZSwgdGhpcy5kYXRhLnN0ZXApO1xyXG5cdFx0XHRcdHRoaXMudGFiVGV4dC5tYXggPSByb3VuZCh0aGlzLm1heElucHV0LnZhbHVlLCB0aGlzLmRhdGEuc3RlcCk7XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5vYnNlcnZlci5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnY2hhbmdlSW5wdXQnKSk7XHJcblx0XHR9XHJcblx0XHR0aGlzLm1pbklucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBvbkJsdXIpO1xyXG5cdFx0dGhpcy5tYXhJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgb25CbHVyKTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCB7TW9kZWx9OyIsImltcG9ydCB7Vmlld30gZnJvbSAnLi92aWV3LnRzJztcclxuaW1wb3J0IHtEYXRhLCBWYWx1ZSwgVGFiVGV4dH0gZnJvbSAnLi9pbnRlcmZhY2VzLnRzJztcclxuaW1wb3J0IHtNb2RlbH0gZnJvbSAnLi9tb2RlbC50cyc7XHJcbmltcG9ydCB7c2V0TW91c2VIYW5kbGVyLCByb3VuZCwgc2V0UmFuZ2VTdHlsZSwgdG9QcmVjZW50LCB0b1ZhbHVlfSBmcm9tICcuL2Z1bmN0aW9ucy50cyc7XHJcbmltcG9ydCB7bWFya3VwfSBmcm9tICcuL2luaXQtdmlldy1tYXJrdXAudHMnO1xyXG5pbXBvcnQge2RlZmF1bHREYXRhLCBzZXREYXRhTGltaXR9IGZyb20gJy4vZGF0YS50cyc7XHJcblxyXG5jbGFzcyBQcmVzZW50ZXIge1xyXG5cclxuXHR3cmFwOiBIVE1MRWxlbWVudDtcclxuXHRkYXRhOiBEYXRhO1xyXG5cdG9wdGlvbnM6IGFueTtcclxuXHR2aWV3OiBWaWV3O1xyXG5cdG1vZGVsOiBNb2RlbDtcclxuXHQvLyBtYXg6IG51bWJlcjtcclxuXHQvLyBtaW46IG51bWJlcjtcclxuXHR2YWx1ZTogVmFsdWU7XHJcblx0Ly8gbW9kZWxUYWJUZXh0OiBUYWJUZXh0O1xyXG5cclxuXHRjb25zdHJ1Y3RvcihvcHRpb25zLCB3cmFwKSB7XHJcblx0XHRcclxuXHRcdHRoaXMud3JhcCA9IHdyYXA7XHJcblx0XHR0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xyXG5cdFx0dGhpcy5jcmVhdGVEYXRhKCk7XHJcblx0XHR0aGlzLmluaXQoKTtcclxuXHRcdHRoaXMub25Nb3ZlVG9nZ2xlKCk7XHJcblx0XHR0aGlzLm9uQ2hhbmdlVGFiVGV4dCgpO1xyXG5cdFx0dGhpcy5vbkNhbmdlSW5wdXQoKTtcclxuXHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xyXG5cdFx0XHR0aGlzLmluaXQoKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0c2V0VmFsdWUoKSB7XHJcblx0XHR0aGlzLnZhbHVlID0ge1xyXG5cdFx0XHRtaW46IHRoaXMuZGF0YS5taW5Ub2dnbGVWYWx1ZSxcclxuXHRcdFx0bWF4OiB0aGlzLmRhdGEubWF4VG9nZ2xlVmFsdWVcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGNyZWF0ZURhdGEoKSB7XHJcblx0XHRmdW5jdGlvbiBkZWVwQ2xvbmUob2JqKSB7XHJcblx0XHQgIGNvbnN0IGNsT2JqID0ge307XHJcblx0XHQgIGZvcihjb25zdCBpIGluIG9iaikge1xyXG5cdFx0ICAgIGlmIChvYmpbaV0gaW5zdGFuY2VvZiBPYmplY3QpIHtcclxuXHRcdCAgICAgIGNsT2JqW2ldID0gZGVlcENsb25lKG9ialtpXSk7XHJcblx0XHQgICAgICBjb250aW51ZTtcclxuXHRcdCAgICB9XHJcblx0XHQgICAgY2xPYmpbaV0gPSBvYmpbaV07XHJcblx0XHQgIH1cclxuXHRcdCAgcmV0dXJuIGNsT2JqO1xyXG5cdFx0fVxyXG5cdFx0Y29uc3QgZGF0YUNsb25lID0gZGVlcENsb25lKGRlZmF1bHREYXRhKTtcclxuXHRcdHRoaXMuZGF0YSA9IE9iamVjdC5hc3NpZ24oZGF0YUNsb25lLCB0aGlzLm9wdGlvbnMpO1xyXG5cdFx0c2V0RGF0YUxpbWl0KHRoaXMuZGF0YSk7XHJcblx0XHR0aGlzLnNldFZhbHVlKCk7XHJcblx0fVxyXG5cclxuXHRjaGFuZ2VEYXRhKCkge1xyXG5cdFx0dGhpcy5kYXRhID0gT2JqZWN0LmFzc2lnbih0aGlzLmRhdGEsIHRoaXMub3B0aW9ucyk7XHJcblx0XHRzZXREYXRhTGltaXQodGhpcy5kYXRhKTtcclxuXHRcdHRoaXMuc2V0VmFsdWUoKTtcclxuXHRcdHRoaXMuaW5pdCgpO1xyXG5cdFx0dGhpcy5vbk1vdmVUb2dnbGUoKTtcclxuXHRcdHRoaXMub25DaGFuZ2VUYWJUZXh0KCk7XHJcblx0XHR0aGlzLm9uQ2FuZ2VJbnB1dCgpO1xyXG5cdH1cclxuXHJcblx0c2V0VGFiVGV4dCgpIHtcclxuXHRcdHRoaXMudmlldy50YWJUZXh0Lm1pbiA9IHRoaXMubW9kZWwudGFiVGV4dC5taW47XHJcblx0XHR0aGlzLnZpZXcudGFiVGV4dC5tYXggPSB0aGlzLm1vZGVsLnRhYlRleHQubWF4O1xyXG5cdH1cclxuXHJcblx0aW5pdFNjYWxlKCkge1xyXG5cdFx0dGhpcy52aWV3LnNjYWxlID0gdGhpcy5tb2RlbC5zY2FsZTtcclxuXHRcdHRoaXMudmlldy5jb250YWluZXIuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2luaXRTY2FsZScpKTtcclxuXHR9XHJcblxyXG5cdHNldFRvVmlldygpIHtcclxuXHRcdHRoaXMudmlldy5wcmVjZW50Lm1pbiA9IHRvUHJlY2VudCh0aGlzLnZhbHVlLm1pbiwgdGhpcy5kYXRhLm1pblZhbHVlLCB0aGlzLmRhdGEubWF4VmFsdWUpO1xyXG5cdFx0dGhpcy52aWV3LnByZWNlbnQubWF4ID0gdG9QcmVjZW50KHRoaXMudmFsdWUubWF4LCB0aGlzLmRhdGEubWluVmFsdWUsIHRoaXMuZGF0YS5tYXhWYWx1ZSk7XHJcblx0fVxyXG5cclxuXHRzZXRUb01vZGVsKCkge1xyXG5cdFx0dGhpcy5tb2RlbC52YWx1ZS5taW4gPSB0b1ZhbHVlKHRoaXMudmlldy5wcmVjZW50Lm1pbiwgdGhpcy5kYXRhLm1pblZhbHVlLCB0aGlzLmRhdGEubWF4VmFsdWUpO1xyXG5cdFx0dGhpcy5tb2RlbC52YWx1ZS5tYXggPSB0b1ZhbHVlKHRoaXMudmlldy5wcmVjZW50Lm1heCwgdGhpcy5kYXRhLm1pblZhbHVlLCB0aGlzLmRhdGEubWF4VmFsdWUpO1xyXG5cdH1cclxuXHJcblx0aW5pdCgpIHtcclxuXHRcdGNvbnN0IHZpZXdEYXRhID0gdGhpcy5kYXRhO1xyXG5cdFx0Y29uc3QgbW9kZWxEYXRhID0gdGhpcy5kYXRhO1xyXG5cdFx0dGhpcy52aWV3ID0gbmV3IFZpZXcodmlld0RhdGEsIHRoaXMud3JhcCk7XHJcblx0XHR0aGlzLm1vZGVsID0gbmV3IE1vZGVsKG1vZGVsRGF0YSk7XHJcblx0XHR0aGlzLmluaXRTY2FsZSgpO1xyXG5cdFx0dGhpcy5zZXRUb1ZpZXcoKTtcclxuXHRcdHRoaXMubW9kZWwucHJlY2VudCA9IHRoaXMudmlldy5wcmVjZW50O1xyXG5cdFx0dGhpcy5tb2RlbC5vYnNlcnZlci5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnc2V0UHJlY2VudCcpKTtcclxuXHRcdHRoaXMuc2V0VGFiVGV4dCgpO1xyXG5cdFx0dGhpcy52aWV3LnNldFRhYigpO1xyXG5cdFx0dGhpcy52aWV3LmNvbnRhaW5lci5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnaW5pdFZhbHVlJykpO1xyXG5cclxuXHRcdHRoaXMudmlldy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlVmFsdWUnLCAoKSA9PiB7XHJcblx0XHRcdHRoaXMubW9kZWwub2JzZXJ2ZXIuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2NoYW5nZVZhbHVlJykpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRvbk1vdmVUb2dnbGUoKSB7XHJcblx0XHRjb25zdCBvbkNoYW5nZVZpZXcgPSAoKSA9PiB7XHJcblx0XHRcdHRoaXMuc2V0VG9Nb2RlbCgpO1xyXG5cdFx0XHR0aGlzLm1vZGVsLm9ic2VydmVyLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdjaGFuZ2VWYWx1ZScpKTtcclxuXHRcdH1cclxuXHRcdHRoaXMudmlldy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignbW92ZVRvZ2dsZScsIG9uQ2hhbmdlVmlldyk7XHJcblx0fVxyXG5cclxuXHRvbkNoYW5nZVRhYlRleHQoKSB7XHJcblx0XHR0aGlzLm1vZGVsLm9ic2VydmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZVRhYlRleHQnLCAoKSA9PiB7XHJcblx0XHRcdHRoaXMuc2V0VGFiVGV4dCgpO1xyXG5cdFx0XHR0aGlzLnZpZXcuY29udGFpbmVyLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdjaGFuZ2VUYWInKSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0b25DYW5nZUlucHV0KCkge1xyXG5cdFx0dGhpcy5tb2RlbC5vYnNlcnZlci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2VJbnB1dCcsICgpID0+IHtcclxuXHRcdFx0dGhpcy52aWV3LnRhYlRleHQgPSB0aGlzLm1vZGVsLnRhYlRleHQ7XHJcblx0XHRcdGlmICh0aGlzLmRhdGEuaXNBcnJheSkge1xyXG5cdFx0XHRcdHRoaXMudmlldy5wcmVjZW50Lm1pbiA9IHRoaXMubW9kZWwudmFsdWUubWluIC8gKHRoaXMuZGF0YS5hcnJheS5sZW5ndGggLSAxKTtcclxuXHRcdFx0XHR0aGlzLnZpZXcucHJlY2VudC5tYXggPSB0aGlzLm1vZGVsLnZhbHVlLm1heCAvICh0aGlzLmRhdGEuYXJyYXkubGVuZ3RoIC0xKTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyh0aGlzLnZpZXcucHJlY2VudCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy52YWx1ZS5taW4gPSArdGhpcy5tb2RlbC52YWx1ZS5taW47XHJcblx0XHRcdFx0dGhpcy52YWx1ZS5tYXggPSArdGhpcy5tb2RlbC52YWx1ZS5tYXg7XHJcblx0XHRcdFx0dGhpcy5zZXRUb1ZpZXcoKTtcclxuXHRcdFx0XHR0aGlzLnNldFRvTW9kZWwoKTtcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLnZpZXcuY29udGFpbmVyLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdjaGFuZ2VJbnB1dCcpKTtcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IHtQcmVzZW50ZXJ9OyIsImltcG9ydCB7cm91bmR9IGZyb20gJy4vZnVuY3Rpb25zLnRzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTY2FsZSB7XHJcblxyXG5cdHNsaWRlcjogSFRNTEVsZW1lbnQ7XHJcblx0c2NhbGU6IHN0cmluZ1tdO1xyXG5cdGlzVmVydGljYWw6IGJvb2xlYW47XHJcblxyXG5cdGNvbnN0cnVjdG9yKHNsaWRlciwgc2NhbGUsIGlzVmVydGljYWwpIHtcclxuXHRcdHRoaXMuc2xpZGVyID0gc2xpZGVyO1xyXG5cdFx0dGhpcy5zY2FsZSA9IHNjYWxlO1xyXG5cdFx0dGhpcy5pc1ZlcnRpY2FsID0gaXNWZXJ0aWNhbDtcclxuXHRcdHRoaXMuY3JlYXRlSXRlbSgpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlSXRlbSgpIHtcclxuXHRcdGNvbnN0IGJhcjogSFRNTEVsZW1lbnQgPSB0aGlzLnNsaWRlci5xdWVyeVNlbGVjdG9yKCcudHMtc2xpZGVyX19iYXInKTtcclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zY2FsZS5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRjb25zdCBzY2FsZUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdFx0c2NhbGVJdGVtLmNsYXNzTGlzdC5hZGQoJ3RzLXNsaWRlcl9fc2NhbGUtaXRlbScpO1xyXG5cdFx0XHRzY2FsZUl0ZW0udGV4dENvbnRlbnQgPSB0aGlzLnNjYWxlW2ldO1xyXG5cdFx0XHRpZiAodGhpcy5pc1ZlcnRpY2FsKSB7XHJcblx0XHRcdFx0c2NhbGVJdGVtLmNsYXNzTGlzdC5hZGQoJ3RzLXNsaWRlcl9fc2NhbGUtaXRlbS0tdmVydGljYWwnKTtcclxuXHRcdFx0XHRzY2FsZUl0ZW0uc3R5bGUudG9wID0gYCR7YmFyLm9mZnNldEhlaWdodCAvICh0aGlzLnNjYWxlLmxlbmd0aCAtIDEpICogaX1weGA7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2NhbGVJdGVtLnN0eWxlLmxlZnQgPSBgJHtiYXIub2Zmc2V0V2lkdGggLyAodGhpcy5zY2FsZS5sZW5ndGggLSAxKSAqIGl9cHhgO1xyXG5cdFx0XHR9XHRcclxuXHRcdFx0YmFyLmFwcGVuZChzY2FsZUl0ZW0pO1xyXG5cdFx0fVxyXG5cdH1cclxufSIsImltcG9ydCB7c2V0TGltaXR9IGZyb20gJy4vZnVuY3Rpb25zLnRzJztcclxuXHJcbmNvbnN0IHNldFRvZ2dsZVN0eWxlID0gKHRvZ2dsZTogSFRNTEVsZW1lbnQsIHBpeGVsOiBudW1iZXIsIGlzVmVydGljYWw6IGJvb2xlYW4pID0+IHtcclxuXHRcdGlmIChpc1ZlcnRpY2FsKSB7XHJcblx0XHRcdHRvZ2dsZS5zdHlsZS50b3AgPSBgJHtwaXhlbH1weGA7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0b2dnbGUuc3R5bGUubGVmdCA9IGAke3BpeGVsfXB4YDtcclxuXHR9XHJcbn1cclxuXHJcbmNsYXNzIFRvZ2dsZSB7XHJcblxyXG5cdHRvZ2dsZTogSFRNTEVsZW1lbnQ7XHJcblx0bWluOiBudW1iZXI7XHJcblx0bWF4OiBudW1iZXI7XHJcblx0bW91c2VQaXhlbDogbnVtYmVyO1xyXG5cdHBpeGVsOiBudW1iZXI7XHJcblx0cHJlY2VudDogbnVtYmVyO1xyXG5cdHNpemU6IG51bWJlcjtcclxuXHRpc1ZlcnRpY2FsOiBib29sZWFuO1xyXG5cdGlzRml4ZWQ6IGJvb2xlYW47XHJcblxyXG5cdGNvbnN0cnVjdG9yKHRvZ2dsZSwgcHJlY2VudCwgc2l6ZSwgaXNWZXJ0aWNhbCkge1xyXG5cdFx0dGhpcy50b2dnbGUgPSB0b2dnbGU7XHJcblx0XHR0aGlzLnNpemUgPSBzaXplO1xyXG5cdFx0dGhpcy5wcmVjZW50ID0gcHJlY2VudDtcclxuXHRcdHRoaXMubW91c2VQaXhlbCA9IHRoaXMucHJlY2VudCAqIHRoaXMuc2l6ZTtcclxuXHRcdHRoaXMucGl4ZWwgPSB0aGlzLm1vdXNlUGl4ZWw7XHJcblx0XHR0aGlzLmlzVmVydGljYWwgPSBpc1ZlcnRpY2FsO1xyXG5cdFx0dGhpcy5pc0ZpeGVkID0gZmFsc2U7XHJcblx0XHR0aGlzLnNldFN0eWxlKCk7XHJcblx0XHR0aGlzLm9uTW92ZVRvZ2dsZSgpO1xyXG5cdH1cclxuXHJcblx0c2V0U3R5bGUoKSB7XHJcblx0XHRzZXRUb2dnbGVTdHlsZSh0aGlzLnRvZ2dsZSwgdGhpcy5waXhlbCwgdGhpcy5pc1ZlcnRpY2FsKTtcclxuXHR9XHJcblxyXG5cdGNoYW5nZVRvZ2dsZSgpIHtcclxuXHRcdHRoaXMubW91c2VQaXhlbCA9IHRoaXMucHJlY2VudCAqIHRoaXMuc2l6ZTtcclxuXHRcdHRoaXMucGl4ZWwgPSB0aGlzLm1vdXNlUGl4ZWw7XHJcblx0XHR0aGlzLnNldFN0eWxlKCk7XHJcblx0fVxyXG5cclxuXHRvbk1vdmVUb2dnbGUoKSB7XHJcblx0XHRjb25zdCBvbk1vdXNlRG93biA9IChldnQpID0+IHtcclxuXHRcdFx0bGV0IHNoaWZ0WDogbnVtYmVyID0gZXZ0LnBhZ2VYIC0gdGhpcy50b2dnbGUub2Zmc2V0TGVmdDtcclxuXHRcdFx0bGV0IHNoaWZ0WTogbnVtYmVyID0gZXZ0LnBhZ2VZIC0gdGhpcy50b2dnbGUub2Zmc2V0VG9wO1xyXG5cdFx0XHRsZXQgc3RhcnRQaXhlbDogbnVtYmVyID0gdGhpcy5tb3VzZVBpeGVsO1xyXG5cdFx0XHRjb25zdCBtb3ZlQXQgPSAocGFnZVgsIHBhZ2VZKSA9PiB7XHJcblx0XHRcdFx0aWYgKHRoaXMuaXNWZXJ0aWNhbCkge1xyXG5cdFx0XHRcdFx0dGhpcy5tb3VzZVBpeGVsID0gcGFnZVkgLSBzaGlmdFk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHRoaXMubW91c2VQaXhlbCA9IHBhZ2VYIC0gc2hpZnRYO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGlzLnBpeGVsID0gdGhpcy5tb3VzZVBpeGVsO1xyXG5cdFx0XHRcdHRoaXMucGl4ZWwgPSBzZXRMaW1pdCh0aGlzLnBpeGVsLCB0aGlzLm1pbiAqIHRoaXMuc2l6ZSwgdGhpcy5tYXggKiB0aGlzLnNpemUpO1xyXG5cdFx0XHRcdGlmICh0aGlzLmlzRml4ZWQpIHtcclxuXHRcdFx0XHRcdHRoaXMucGl4ZWwgPSBzdGFydFBpeGVsO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGlzLnNldFN0eWxlKCk7XHJcblx0XHRcdFx0dGhpcy5wcmVjZW50ID0gdGhpcy5waXhlbCAvIHRoaXMuc2l6ZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRtb3ZlQXQoZXZ0LnBhZ2VYLCBldnQucGFnZVkpO1xyXG5cclxuXHRcdFx0Y29uc3Qgb25Nb3VzZU1vdmUgPSAobW92ZUV2dCkgPT4ge1xyXG5cdFx0XHRcdG1vdmVFdnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHRtb3ZlQXQobW92ZUV2dC5wYWdlWCwgbW92ZUV2dC4gcGFnZVkpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNvbnN0IG9uTW91c2VVcCA9ICh1cEV2dCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMubW91c2VQaXhlbCA9IHRoaXMucGl4ZWw7XHJcblx0XHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uTW91c2VVcCk7XHJcblx0XHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKTtcclxuXHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uTW91c2VVcCk7XHJcblx0XHR9XHJcblx0XHR0aGlzLnRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBvbk1vdXNlRG93bik7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQge3NldFRvZ2dsZVN0eWxlLCBUb2dnbGV9O1xyXG4iLCJpbXBvcnQge2luaXRWaWV3TWFya3VwLCBtYXJrdXB9IGZyb20gJy4vaW5pdC12aWV3LW1hcmt1cC50cyc7XHJcbmltcG9ydCB7U2NhbGV9IGZyb20gJy4vc2NhbGUudHMnO1xyXG5pbXBvcnQge0RhdGEsIFZhbHVlLCBUYWJUZXh0fSBmcm9tICcuL2ludGVyZmFjZXMudHMnO1xyXG5pbXBvcnQge3NldFRvZ2dsZVN0eWxlLCBUb2dnbGV9IGZyb20gJy4vdG9nZ2xlLnRzJztcclxuaW1wb3J0IHtzZXRNb3VzZUhhbmRsZXIsIHJvdW5kLCB0b1ByZWNlbnQsIHNldFJhbmdlU3R5bGV9IGZyb20gJy4vZnVuY3Rpb25zLnRzJztcclxuXHJcbmNsYXNzIFZpZXcge1xyXG5cclxuXHR3cmFwOiBIVE1MRWxlbWVudDtcclxuXHRkYXRhOiBEYXRhO1xyXG5cdHByZWNlbnQ6IFZhbHVlO1xyXG5cdHRhYlRleHQ6IFRhYlRleHQ7XHJcblx0Y29udGFpbmVyOiBIVE1MRWxlbWVudDtcclxuXHRtaW5Ub2dnbGVFbGVtOiBIVE1MRWxlbWVudDtcclxuXHRtYXhUb2dnbGVFbGVtOiBIVE1MRWxlbWVudDtcclxuXHRtaW5Ub2dnbGU6IFRvZ2dsZTtcclxuXHRtYXhUb2dnbGU6IFRvZ2dsZTtcclxuXHRtaW5UYWJFbGVtOiBIVE1MRWxlbWVudDtcclxuXHRtYXhUYWJFbGVtOiBIVE1MRWxlbWVudDtcclxuXHRyYW5nZUVsZW06IEhUTUxFbGVtZW50O1xyXG5cdHNpemU6IG51bWJlcjtcclxuXHRzY2FsZTogc3RyaW5nW107XHJcblxyXG5cdGNvbnN0cnVjdG9yKGRhdGEsIHdyYXApIHtcclxuXHJcblx0XHR0aGlzLndyYXAgPSB3cmFwO1xyXG5cdFx0dGhpcy5kYXRhID0gZGF0YTtcclxuXHRcdHRoaXMucHJlY2VudCA9IHtcclxuXHRcdFx0bWluOiAwLFxyXG5cdFx0XHRtYXg6IDBcclxuXHRcdH1cclxuXHRcdHRoaXMudGFiVGV4dCA9IHtcclxuXHRcdFx0bWluOiAnJyxcclxuXHRcdFx0bWF4OiAnJ1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5zY2FsZSA9IFtdO1xyXG5cdFx0dGhpcy5pbml0VmlldygpO1xyXG5cdFx0dGhpcy5jcmVhdGVUb2dnbGUoKTtcclxuXHRcdHRoaXMub25Ub2dnbGVDb2luY2lkZW5jZSgpO1xyXG5cdFx0dGhpcy5hZGRTY2FsZSgpO1xyXG5cdFx0dGhpcy5jaGFuZ2VUYWIoKTtcclxuXHRcdHRoaXMuY2hhbmdlSW5wdXQoKTtcclxuXHR9XHJcblxyXG5cdGluaXRWaWV3KCkge1xyXG5cdFx0aW5pdFZpZXdNYXJrdXAodGhpcy53cmFwLCB0aGlzLmRhdGEuaXNWZXJ0aWNhbCk7XHJcblx0XHR0aGlzLmNvbnRhaW5lciA9IHRoaXMud3JhcC5xdWVyeVNlbGVjdG9yKCcudHMtc2xpZGVyX19jb250YWluZXInKTtcclxuXHRcdGlmICh0aGlzLmRhdGEuaXNWZXJ0aWNhbCkge1xyXG5cdFx0XHR0aGlzLnNpemUgPSB0aGlzLmNvbnRhaW5lci5vZmZzZXRIZWlnaHQ7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLnNpemUgPSB0aGlzLmNvbnRhaW5lci5vZmZzZXRXaWR0aDtcclxuXHRcdH1cclxuXHRcdHRoaXMubWluVG9nZ2xlRWxlbSA9IG1hcmt1cCh0aGlzLmNvbnRhaW5lcikubWluO1xyXG5cdFx0dGhpcy5tYXhUb2dnbGVFbGVtID0gbWFya3VwKHRoaXMuY29udGFpbmVyKS5tYXg7XHJcblx0XHR0aGlzLm1pblRhYkVsZW0gPSBtYXJrdXAodGhpcy5jb250YWluZXIpLm1pblRhYjtcclxuXHRcdHRoaXMubWF4VGFiRWxlbSA9IG1hcmt1cCh0aGlzLmNvbnRhaW5lcikubWF4VGFiO1xyXG5cdFx0dGhpcy5yYW5nZUVsZW0gPSBtYXJrdXAodGhpcy5jb250YWluZXIpLnJhbmdlO1xyXG5cclxuXHRcdGlmICghdGhpcy5kYXRhLmlzUmFuZ2UpIHtcclxuXHRcdFx0dGhpcy5taW5Ub2dnbGVFbGVtLmhpZGRlbiA9IHRydWU7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCF0aGlzLmRhdGEuaXNUYWIpIHtcclxuXHRcdFx0dGhpcy5taW5UYWJFbGVtLmhpZGRlbiA9IHRydWU7XHJcblx0XHRcdHRoaXMubWF4VGFiRWxlbS5oaWRkZW4gPSB0cnVlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0c2V0VGFiKCkge1xyXG5cdFx0dGhpcy5taW5UYWJFbGVtLnRleHRDb250ZW50ID0gdGhpcy50YWJUZXh0Lm1pbjtcclxuXHRcdHRoaXMubWF4VGFiRWxlbS50ZXh0Q29udGVudCA9IHRoaXMudGFiVGV4dC5tYXg7XHJcblx0fVxyXG5cclxuXHRzZXRSYW5nZSgpIHtcclxuXHRcdHNldFJhbmdlU3R5bGUodGhpcy5yYW5nZUVsZW0sIHRoaXMubWluVG9nZ2xlLnByZWNlbnQgKiB0aGlzLnNpemUsIHRoaXMubWF4VG9nZ2xlLnByZWNlbnQgKiB0aGlzLnNpemUsIHRoaXMuZGF0YS5pc1ZlcnRpY2FsKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZVRvZ2dsZSgpIHtcclxuXHRcdGNvbnN0IG1pblRvZ2dsZVByZWNlbnQgPSB0b1ByZWNlbnQodGhpcy5kYXRhLm1pblRvZ2dsZVZhbHVlLCB0aGlzLmRhdGEubWluVmFsdWUsIHRoaXMuZGF0YS5tYXhWYWx1ZSk7XHJcblx0XHRjb25zdCBtYXhUb2dnbGVQcmVjZW50ID0gdG9QcmVjZW50KHRoaXMuZGF0YS5tYXhUb2dnbGVWYWx1ZSwgdGhpcy5kYXRhLm1pblZhbHVlLCB0aGlzLmRhdGEubWF4VmFsdWUpO1xyXG5cdFx0dGhpcy5taW5Ub2dnbGUgPSBuZXcgVG9nZ2xlKHRoaXMubWluVG9nZ2xlRWxlbSwgbWluVG9nZ2xlUHJlY2VudCwgdGhpcy5zaXplLCB0aGlzLmRhdGEuaXNWZXJ0aWNhbCk7XHJcblx0XHR0aGlzLm1heFRvZ2dsZSA9IG5ldyBUb2dnbGUodGhpcy5tYXhUb2dnbGVFbGVtLCBtYXhUb2dnbGVQcmVjZW50LCB0aGlzLnNpemUsIHRoaXMuZGF0YS5pc1ZlcnRpY2FsKTtcclxuXHRcdHRoaXMubWluVG9nZ2xlLm1pbiA9IDA7XHJcblx0XHR0aGlzLm1heFRvZ2dsZS5tYXggPSAxO1xyXG5cdFx0aWYgKCF0aGlzLmRhdGEuaXNSYW5nZSkge1xyXG5cdFx0XHR0aGlzLm1pblRvZ2dsZS5wcmVjZW50ID0gMDtcclxuXHRcdH1cclxuXHRcdHRoaXMuc2V0UmFuZ2UoKTtcclxuXHJcblx0XHRjb25zdCBvbk1vdXNlTW92ZSA9IChtb3ZlRXZ0KSA9PiB7XHJcblx0XHRcdHRoaXMubWluVG9nZ2xlLm1heCA9IHRoaXMubWF4VG9nZ2xlLnByZWNlbnQ7XHJcblx0XHRcdHRoaXMubWF4VG9nZ2xlLm1pbiA9IHRoaXMubWluVG9nZ2xlLnByZWNlbnQ7XHJcblx0XHRcdHNldFJhbmdlU3R5bGUodGhpcy5yYW5nZUVsZW0sIHRoaXMubWluVG9nZ2xlLnByZWNlbnQgKiB0aGlzLnNpemUsIHRoaXMubWF4VG9nZ2xlLnByZWNlbnQgKiB0aGlzLnNpemUsIHRoaXMuZGF0YS5pc1ZlcnRpY2FsKTtcclxuXHRcdFx0dGhpcy5wcmVjZW50Lm1pbiA9IHRoaXMubWluVG9nZ2xlLnByZWNlbnQ7XHJcblx0XHRcdHRoaXMucHJlY2VudC5tYXggPSB0aGlzLm1heFRvZ2dsZS5wcmVjZW50O1xyXG5cdFx0XHR0aGlzLnNldFRhYigpO1xyXG5cdFx0XHR0aGlzLmNvbnRhaW5lci5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnbW92ZVRvZ2dsZScpKTtcclxuXHRcdH1cclxuXHRcdHNldE1vdXNlSGFuZGxlcihkb2N1bWVudCwgb25Nb3VzZU1vdmUpO1xyXG5cdFx0dGhpcy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKGV2dCkgPT4ge1xyXG5cdFx0XHRldnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0b25Ub2dnbGVDb2luY2lkZW5jZSgpIHtcclxuXHRcdGNvbnN0IG9uTW91c2VEb3duQ29pbmNpZGVuY2UgPSAoZXZ0KSA9PiB7XHJcblx0XHRcdGxldCBjb2luY2lkZW5jZVRvZ2dsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cdFx0XHR0aGlzLm1heFRvZ2dsZUVsZW0uaGlkZGVuID0gdHJ1ZTtcclxuXHRcdFx0Y29pbmNpZGVuY2VUb2dnbGUgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KGV2dC5jbGllbnRYLCBldnQuY2xpZW50WSkuY2xhc3NMaXN0LmNvbnRhaW5zKCd0cy1zbGlkZXJfX3RvZ2dsZS0tbWluJyk7XHJcblx0XHRcdHRoaXMubWF4VG9nZ2xlRWxlbS5oaWRkZW4gPSBmYWxzZTtcclxuXHRcdFx0bGV0IHN0YXJ0UGl4ZWw6IG51bWJlcjtcclxuXHRcdFx0c3RhcnRQaXhlbCA9IHRoaXMubWF4VG9nZ2xlLnBpeGVsO1xyXG5cclxuXHRcdFx0Y29uc3Qgb25Nb3VzZU1vdmUgPSAobW92ZUV2dCkgPT4ge1xyXG5cdFx0XHRcdGlmIChjb2luY2lkZW5jZVRvZ2dsZSkge1xyXG5cdFx0XHRcdFx0dGhpcy5taW5Ub2dnbGUubW91c2VQaXhlbCA9IHRoaXMubWF4VG9nZ2xlLm1vdXNlUGl4ZWw7XHJcblx0XHRcdFx0XHR0aGlzLm1heFRvZ2dsZS5pc0ZpeGVkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdHRoaXMubWluVG9nZ2xlLmlzRml4ZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0aWYgKHRoaXMubWF4VG9nZ2xlLm1vdXNlUGl4ZWwgPiBzdGFydFBpeGVsKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMubWF4VG9nZ2xlLmlzRml4ZWQgPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0dGhpcy5taW5Ub2dnbGUuaXNGaXhlZCA9IHRydWU7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR0aGlzLm1heFRvZ2dsZS5pc0ZpeGVkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0dGhpcy5taW5Ub2dnbGUuaXNGaXhlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0XHR0aGlzLm1pblRvZ2dsZS5tb3VzZVBpeGVsID0gdGhpcy5tYXhUb2dnbGUubW91c2VQaXhlbDtcclxuXHRcdFx0XHRcdFx0dGhpcy5taW5Ub2dnbGUucGl4ZWwgPSB0aGlzLm1heFRvZ2dsZS5tb3VzZVBpeGVsO1xyXG5cdFx0XHRcdFx0XHRpZiAodGhpcy5taW5Ub2dnbGUucGl4ZWwgPCAwKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5taW5Ub2dnbGUucGl4ZWwgPSAwO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdHRoaXMubWluVG9nZ2xlLnNldFN0eWxlKCk7XHJcblx0XHRcdFx0XHRcdHRoaXMubWluVG9nZ2xlLnByZWNlbnQgPSB0aGlzLm1pblRvZ2dsZS5waXhlbCAvIHRoaXMuc2l6ZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy5tYXhUb2dnbGUuaXNGaXhlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0dGhpcy5taW5Ub2dnbGUuaXNGaXhlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRjb25zdCBvbk1vdXNlVXAgPSAodXBFdnQpID0+IHtcclxuXHRcdFx0XHR0aGlzLm1pblRvZ2dsZS5tb3VzZVBpeGVsID0gdGhpcy5taW5Ub2dnbGUucGl4ZWw7XHJcblx0XHRcdFx0dGhpcy5tYXhUb2dnbGUuaXNGaXhlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdHRoaXMubWluVG9nZ2xlLmlzRml4ZWQgPSBmYWxzZTtcclxuXHRcdFx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25Nb3VzZVVwKTtcclxuXHRcdFx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUpO1xyXG5cdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25Nb3VzZVVwKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLm1heFRvZ2dsZUVsZW0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgb25Nb3VzZURvd25Db2luY2lkZW5jZSk7XHJcblx0fVxyXG5cclxuXHRhZGRTY2FsZSgpIHtcclxuXHRcdHRoaXMuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2luaXRTY2FsZScsICgpID0+IHtcclxuXHRcdFx0aWYgKHRoaXMuZGF0YS5pc1NjYWxlKSB7XHJcblx0XHRcdFx0Y29uc3Qgc2NhbGUgPSBuZXcgU2NhbGUodGhpcy5jb250YWluZXIsIHRoaXMuc2NhbGUsIHRoaXMuZGF0YS5pc1ZlcnRpY2FsKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRjaGFuZ2VUYWIoKSB7XHJcblx0XHR0aGlzLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2VUYWInLCAoKSA9PiB7XHJcblx0XHRcdHRoaXMuc2V0VGFiKCk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGNoYW5nZUlucHV0KCkge1xyXG5cdFx0dGhpcy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlSW5wdXQnLCAoKSA9PiB7XHJcblx0XHRcdHRoaXMubWluVG9nZ2xlLnByZWNlbnQgPSB0aGlzLnByZWNlbnQubWluO1xyXG5cdFx0XHR0aGlzLm1heFRvZ2dsZS5wcmVjZW50ID0gdGhpcy5wcmVjZW50Lm1heDtcclxuXHRcdFx0dGhpcy5taW5Ub2dnbGUuY2hhbmdlVG9nZ2xlKCk7XHJcblx0XHRcdHRoaXMubWF4VG9nZ2xlLmNoYW5nZVRvZ2dsZSgpO1xyXG5cdFx0XHR0aGlzLnNldFRhYigpO1xyXG5cdFx0XHR0aGlzLnNldFJhbmdlKCk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHJlbW92ZU1hcmt1cCgpIHtcclxuXHRcdHRoaXMuY29udGFpbmVyLnJlbW92ZSgpO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IHtWaWV3fTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==