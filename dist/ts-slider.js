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
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
    const: setDataLimit = (data) => {
        data.minToggleValue = Object(_functions_ts__WEBPACK_IMPORTED_MODULE_0__["setLimit"])(data.minToggleValue, data.minValue, data.maxValue);
        data.maxToggleValue = Object(_functions_ts__WEBPACK_IMPORTED_MODULE_0__["setLimit"])(data.maxToggleValue, data.minValue, data.maxValue);
    },
    export: { setDataLimit, defaultData }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Z1bmN0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luaXQtdmlldy1tYXJrdXAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9wcmVzZW50ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjYWxlLnRzIiwid2VicGFjazovLy8uL3NyYy90b2dnbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQXdDO0FBR3hDLE1BQU0sV0FBVyxHQUFTO0lBQ3pCLFVBQVUsRUFBRSxzQkFBc0I7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QUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7Z0JBQ3ZDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO2FBQ3ZDO2lCQUFNO2dCQUNOLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7Z0JBQ3RDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7Z0JBQ3RDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLDhEQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDOUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsOERBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUM5RSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDaEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ2hELElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHLDJEQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDOUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsMkRBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxJQUFJ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RTtnQkFDdEIsTUFBTSxLQUFLLEdBQUcsSUFBSSwrQ0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQzFFO1FBQ0YsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBRUQsU0FBUztRQUNSLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLEdBQUcsRUFBRTtZQUNqRCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDZixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRCxXQUFXO1FBQ1YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLEVBQUUsR0FBRyxFQUFFO1lBQ25ELElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO1lBQzFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO1lBQzFDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDOUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUM5QixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDZCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDakIsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBRUQsWUFBWTtRQUNYLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDekIsQ0FBQztDQUNEO0FBRWEiLCJmaWxlIjoidHMtc2xpZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJpbXBvcnQge3NldExpbWl0fSBmcm9tICcuL2Z1bmN0aW9ucy50cyc7XHJcbmltcG9ydCB7RGF0YX0gZnJvbSAnLi9pbnRlcmZhY2VzLnRzJztcclxuXHJcbmNvbnN0IGRlZmF1bHREYXRhOiBEYXRhID0ge1xyXG5cdG1pbklucHV0SWQ6ICd0cy1zbGlkZXJfX21pbi1pbnB1dCcsXHJcblx0bWF4SW5wdXRJZDogJ3RzLXNsaWRlcl9fbWF4LWlucHV0JyxcclxuXHRpc0FycmF5OiBmYWxzZSxcclxuXHRhcnJheTogW10sXHJcblx0c3RlcDogMSxcclxuXHRtaW5WYWx1ZTogMCxcclxuXHRtYXhWYWx1ZTogMTAwLFxyXG5cdG1pblRvZ2dsZVZhbHVlOiAyNSxcclxuXHRtYXhUb2dnbGVWYWx1ZTogNzUsXHJcblx0aXNSYW5nZTogdHJ1ZSxcclxuXHRpc1ZlcnRpY2FsOiBmYWxzZSxcclxuXHRpc1RhYjogdHJ1ZSxcclxuXHRpc1NjYWxlOiB0cnVlLFxyXG5cdHNjYWxlUXVhbnRpdHk6IDRcclxuXHJcbmNvbnN0IHNldERhdGFMaW1pdCA9IChkYXRhOiBEYXRhKSA9PiB7XHJcblx0ZGF0YS5taW5Ub2dnbGVWYWx1ZSA9IHNldExpbWl0KGRhdGEubWluVG9nZ2xlVmFsdWUsIGRhdGEubWluVmFsdWUsIGRhdGEubWF4VmFsdWUpO1xyXG5cdGRhdGEubWF4VG9nZ2xlVmFsdWUgPSBzZXRMaW1pdChkYXRhLm1heFRvZ2dsZVZhbHVlLCBkYXRhLm1pblZhbHVlLCBkYXRhLm1heFZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IHtzZXREYXRhTGltaXQsIGRlZmF1bHREYXRhfTsiLCJjb25zdCBzZXRNb3VzZUhhbmRsZXIgPSAoZWxlbSwgb25Nb3ZlLCBvbkRvdm4/LCBvblVwPykgPT4ge1xyXG5cclxuXHRjb25zdCBvbk1vdXNlRG93biA9IChldnQpID0+IHtcclxuXHRcdGlmIChvbkRvdm4pIHtcclxuXHRcdFx0b25Eb3ZuKGV2dCk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdGNvbnN0IG9uTW91c2VNb3ZlID0gKG1vdmVFdnQpID0+IHtcclxuXHRcdFx0b25Nb3ZlKG1vdmVFdnQpO1xyXG5cdFx0fVxyXG5cdFx0Y29uc3Qgb25Nb3VzZVVwID0gKHVwRXZ0KSA9PiB7XHJcblx0XHRcdGlmIChvblVwKSB7XHJcblx0XHRcdFx0b25VcCh1cEV2dCk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uTW91c2VVcCk7XHJcblx0XHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKTtcclxuXHRcdH1cclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKTtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbk1vdXNlVXApO1xyXG5cdH1cclxuXHJcblx0ZWxlbS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBvbk1vdXNlRG93bik7XHJcbn1cclxuXHJcbmNvbnN0IHJvdW5kID0gKHZhbHVlOiBudW1iZXIsIHN0ZXA6IG51bWJlcikgPT4ge1xyXG5cdGNvbnN0IHByZWNpc2lvbiA9IHggPT4gKyggKHgudG9TdHJpbmcoKS5pbmNsdWRlcygnLicpKSA/ICh4LnRvU3RyaW5nKCkuc3BsaXQoJy4nKS5wb3AoKS5sZW5ndGgpIDogKDApICk7XHJcblx0bGV0IHJvdW5kZWQ6IHN0cmluZyA9IChNYXRoLnJvdW5kKHZhbHVlIC8gc3RlcCkgKiBzdGVwKS50b0ZpeGVkKHByZWNpc2lvbihzdGVwKSk7XHJcblx0cmV0dXJuIHJvdW5kZWQ7XHJcbn1cclxuXHJcbmNvbnN0IHNldExpbWl0ID0gKHZhbHVlOiBudW1iZXIsIG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcikgPT4ge1xyXG5cdGlmICh2YWx1ZSA+IG1heCkge1xyXG5cdFx0dmFsdWUgPSBtYXg7XHJcblx0fSBlbHNlIGlmICh2YWx1ZSA8IG1pbikge1xyXG5cdFx0dmFsdWUgPSBtaW47XHJcblx0fVxyXG5cdHJldHVybiB2YWx1ZTtcclxufVxyXG5cclxuY29uc3QgdG9QcmVjZW50ID0gKHZhbHVlOiBudW1iZXIsIG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcikgPT4gKHZhbHVlIC0gbWluKSAvIChtYXggLSBtaW4pO1xyXG5cclxuY29uc3QgdG9WYWx1ZSA9ICh2YWx1ZTogbnVtYmVyLCBtaW46IG51bWJlciwgbWF4OiBudW1iZXIpID0+IChtaW4gKyAobWF4IC0gbWluKSAqIHZhbHVlKTtcclxuXHJcbmNvbnN0IHNldFJhbmdlU3R5bGUgPSAocmFuZ2U6IEhUTUxFbGVtZW50LCBtaW46IG51bWJlciwgbWF4OiBudW1iZXIsIGlzVmVydGljYWw6IGJvb2xlYW4pID0+IHtcclxuXHRpZiAoaXNWZXJ0aWNhbCkge1xyXG5cdFx0cmFuZ2Uuc3R5bGUudG9wID0gYCR7bWlufXB4YDtcclxuXHRcdHJhbmdlLnN0eWxlLmhlaWdodCA9IGAkeyhtYXggLSBtaW4pfXB4YDtcclxuXHR9IGVsc2Uge1xyXG5cdFx0cmFuZ2Uuc3R5bGUubGVmdCA9IGAke21pbn1weGA7XHJcblx0XHRyYW5nZS5zdHlsZS53aWR0aCA9IGAkeyhtYXggLSBtaW4pfXB4YDtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCB7c2V0TW91c2VIYW5kbGVyLCByb3VuZCwgc2V0TGltaXQsIHRvUHJlY2VudCwgdG9WYWx1ZSwgc2V0UmFuZ2VTdHlsZX07IiwiaW1wb3J0IHtQcmVzZW50ZXJ9IGZyb20gJy4vcHJlc2VudGVyLnRzJztcclxuXHJcbihmdW5jdGlvbigkKSB7XHJcblx0Y29uc3QgbWV0aG9kcyA9IHtcclxuXHRcdGluaXQ6IGZ1bmN0aW9uKG9wdGlvbnMpIHtcclxuXHRcdFx0Y29uc3QgaWQ6IHN0cmluZyA9ICcjJyArIHRoaXMucHJvcCgnaWQnKTtcclxuXHRcdFx0Y29uc3Qgd3JhcDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGlkKTtcclxuXHRcdFx0Y29uc3QgcHJlc2VudGVyID0gbmV3IFByZXNlbnRlcihvcHRpb25zLCB3cmFwKTtcclxuXHRcdFx0d2luZG93W2lkXSA9IHByZXNlbnRlcjtcclxuXHRcdH0sXHJcblx0XHRjaGFuZ2U6IGZ1bmN0aW9uKG9wdGlvbnMpIHtcclxuXHRcdFx0Y29uc3QgaWQ6IHN0cmluZyA9ICcjJyArIHRoaXMucHJvcCgnaWQnKTtcclxuXHRcdFx0Y29uc3QgcHJlc2VudGVyID0gd2luZG93W2lkXTtcclxuXHRcdFx0cHJlc2VudGVyLm9wdGlvbnMgPSBvcHRpb25zO1xyXG5cdFx0XHRwcmVzZW50ZXIuY2hhbmdlRGF0YSgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0JC5mbi50c1NsaWRlciA9IGZ1bmN0aW9uKG9wdGlvbnMsIG1ldGhvZD8pIHtcclxuXHRcdGNvbnN0IGlkOiBzdHJpbmcgPSAnIycgKyB0aGlzLnByb3AoJ2lkJyk7XHJcblx0XHRpZiAoIG1ldGhvZCA9PT0gJ2NoYW5nZScgJiYgd2luZG93W2lkXSApIHtcclxuXHRcdFx0Y29uc3QgY2hhbmdlID0gbWV0aG9kcy5jaGFuZ2UuYXBwbHkoIHRoaXMsIGFyZ3VtZW50cyApO1xyXG5cdFx0fSBlbHNlIGlmICggdHlwZW9mIG1ldGhvZCA9PT0gJ29iamVjdCcgfHwgISBtZXRob2QgfHwgISB3aW5kb3dbaWRdICkge1xyXG5cdFx0XHRjb25zdCBpbml0ID0gbWV0aG9kcy5pbml0LmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdCQuZXJyb3IoICfQnNC10YLQvtC0INGBINC40LzQtdC90LXQvCAnICsgIG1ldGhvZCArICcg0L3QtSDRgdGD0YnQtdGB0YLQstGD0LXRgiDQtNC70Y8galF1ZXJ5LnRzU2xpZGVyJyApO1xyXG5cdFx0fSBcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxufSkoalF1ZXJ5KTtcclxuXHJcbiIsImNvbnN0IGluaXRWaWV3TWFya3VwID0gKGNvbnRyb2xXcmFwOiBIVE1MRWxlbWVudCwgdmVydGljYWw6IGJvb2xlYW4pID0+IHtcclxuXHRjb25zdCBjb250b2xNYXJrdXA6IHN0cmluZyA9IGA8ZGl2IGNsYXNzPVwidHMtc2xpZGVyX19jb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0cy1zbGlkZXJfX2JhclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidHMtc2xpZGVyX190b2dnbGUgdHMtc2xpZGVyX190b2dnbGUtLW1pblwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0cy1zbGlkZXJfX3RvZ2dsZS12YWx1ZSB0cy1zbGlkZXJfX3RvZ2dsZS12YWx1ZS0tbWluXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidHMtc2xpZGVyX190b2dnbGUgdHMtc2xpZGVyX190b2dnbGUtLW1heFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0cy1zbGlkZXJfX3RvZ2dsZS12YWx1ZSB0cy1zbGlkZXJfX3RvZ2dsZS12YWx1ZS0tbWF4XCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidHMtc2xpZGVyX19yYW5nZVwiPjwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+YDtcclxuXHRjb250cm9sV3JhcC5pbm5lckhUTUwgPSBjb250b2xNYXJrdXA7XHJcbiAgY29uc3QgZGl2ID0gY29udHJvbFdyYXAucXVlcnlTZWxlY3RvckFsbCgnZGl2Jyk7XHJcbiAgaWYgKHZlcnRpY2FsKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRpdi5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBmaXJzdENsYXNzOiBzdHJpbmcgPSBkaXZbaV0uY2xhc3NMaXN0WzBdO1xyXG4gICAgICBjb25zdCB2ZXJ0aWNhbENsYXNzOiBzdHJpbmcgPSBmaXJzdENsYXNzICsgJy0tdmVydGljYWwnO1xyXG4gICAgICBkaXZbaV0uY2xhc3NMaXN0LmFkZCh2ZXJ0aWNhbENsYXNzKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcmt1cCA9IChzbGlkZXI6IEhUTUxFbGVtZW50KSA9PiB7XHJcbiAgaW50ZXJmYWNlIE1hcmt1cCB7XHJcbiAgICBtaW46IEhUTUxFbGVtZW50O1xyXG4gICAgbWF4OiBIVE1MRWxlbWVudDtcclxuICAgIHJhbmdlOiBIVE1MRWxlbWVudDtcclxuICAgIGJhcjogSFRNTEVsZW1lbnQ7XHJcbiAgICBtaW5UYWI6IEhUTUxFbGVtZW50O1xyXG4gICAgbWF4VGFiOiBIVE1MRWxlbWVudDtcclxuICB9XHJcbiAgbGV0IG1hcmt1cDogTWFya3VwID0geyAgXHJcbiAgICAgbWluOiBzbGlkZXIucXVlcnlTZWxlY3RvcignLnRzLXNsaWRlcl9fdG9nZ2xlLS1taW4nKSxcclxuICAgICBtYXg6IHNsaWRlci5xdWVyeVNlbGVjdG9yKCcudHMtc2xpZGVyX190b2dnbGUtLW1heCcpLFxyXG4gICAgIHJhbmdlOiBzbGlkZXIucXVlcnlTZWxlY3RvcignLnRzLXNsaWRlcl9fcmFuZ2UnKSxcclxuICAgICBiYXI6IHNsaWRlci5xdWVyeVNlbGVjdG9yKCcudHMtc2xpZGVyX19iYXInKSxcclxuICAgICBtaW5UYWI6IHNsaWRlci5xdWVyeVNlbGVjdG9yKCcudHMtc2xpZGVyX190b2dnbGUtdmFsdWUtLW1pbicpLFxyXG4gICAgIG1heFRhYjogc2xpZGVyLnF1ZXJ5U2VsZWN0b3IoJy50cy1zbGlkZXJfX3RvZ2dsZS12YWx1ZS0tbWF4JylcclxuICB9XHJcbiAgcmV0dXJuIG1hcmt1cDtcclxufVxyXG5cclxuZXhwb3J0IHtpbml0Vmlld01hcmt1cCwgbWFya3VwfTsiLCJpbXBvcnQge0RhdGEsIFZhbHVlLCBUYWJUZXh0fSBmcm9tICcuL2ludGVyZmFjZXMudHMnO1xyXG5pbXBvcnQge3NldE1vdXNlSGFuZGxlciwgcm91bmQsIHNldExpbWl0fSBmcm9tICcuL2Z1bmN0aW9ucy50cyc7XHJcblxyXG5jbGFzcyBNb2RlbCB7XHJcblxyXG5cdGRhdGE6IERhdGE7XHJcblx0bWluSW5wdXQ6IGFueTtcclxuXHRtYXhJbnB1dDogYW55O1xyXG5cdHZhbHVlOiBWYWx1ZTtcclxuXHRwcmVjZW50OiBWYWx1ZTtcclxuXHR0YWJUZXh0OiBUYWJUZXh0O1xyXG5cdG9ic2VydmVyOiBIVE1MRWxlbWVudDtcclxuXHRtaW46IG51bWJlcjtcclxuXHRtYXg6IG51bWJlcjtcclxuXHRzY2FsZTogc3RyaW5nW107XHJcblxyXG5cdGNvbnN0cnVjdG9yKGRhdGEpIHtcdFx0XHJcblx0XHR0aGlzLmRhdGEgPSBkYXRhO1xyXG5cdFx0dGhpcy50YWJUZXh0ID0ge1xyXG5cdFx0XHRtaW46ICcnLFxyXG5cdFx0XHRtYXg6ICcnXHJcblx0XHR9XHJcblx0XHR0aGlzLnZhbHVlID0ge1xyXG5cdFx0XHRtaW46IDAsXHJcblx0XHRcdG1heDogMFxyXG5cdFx0fVxyXG5cdFx0dGhpcy5wcmVjZW50ID0ge1xyXG5cdFx0XHRtaW46IDAsXHJcblx0XHRcdG1heDogMFxyXG5cdFx0fVxyXG5cdFx0dGhpcy5zY2FsZSA9IFtdO1xyXG5cdFx0dGhpcy5vYnNlcnZlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0V2ZW50Jyk7XHJcblx0XHR0aGlzLmluaXQoKTtcclxuXHRcdHRoaXMuc2V0U2NhbGUoKTtcclxuXHRcdHRoaXMuYWRkTGlzdGVuZXIoKTtcclxuXHRcdHRoaXMuY2hhbmdlSW5wdXQoKTtcclxuXHR9XHJcblxyXG5cdHNldElucHV0KCkge1xyXG5cdFx0dGhpcy5taW5JbnB1dC52YWx1ZSA9IHRoaXMudGFiVGV4dC5taW47XHJcblx0XHR0aGlzLm1heElucHV0LnZhbHVlID0gdGhpcy50YWJUZXh0Lm1heDtcclxuXHRcdGlmICghdGhpcy5kYXRhLmlzUmFuZ2UpIHtcclxuXHRcdFx0aWYgKHRoaXMuZGF0YS5pc0FycmF5KSB7XHJcblx0XHRcdFx0dGhpcy5taW5JbnB1dC52YWx1ZSA9IHRoaXMuZGF0YS5hcnJheVswXTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aGlzLm1pbklucHV0LnZhbHVlID0gdGhpcy5kYXRhLm1pblZhbHVlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRzZXRBcnJheVZhbHVlKCkge1xyXG5cdFx0bGV0IG1pbiA9IE1hdGgucm91bmQodGhpcy5wcmVjZW50Lm1pbiAqICh0aGlzLmRhdGEuYXJyYXkubGVuZ3RoIC0gMSkpO1xyXG5cdFx0bGV0IG1heCA9IE1hdGgucm91bmQodGhpcy5wcmVjZW50Lm1heCAqICh0aGlzLmRhdGEuYXJyYXkubGVuZ3RoIC0gMSkpO1xyXG5cdFx0dGhpcy50YWJUZXh0Lm1pbiA9IHRoaXMuZGF0YS5hcnJheVttaW5dO1xyXG5cdFx0dGhpcy50YWJUZXh0Lm1heCA9IHRoaXMuZGF0YS5hcnJheVttYXhdO1xyXG5cdFx0dGhpcy5zZXRJbnB1dCgpO1xyXG5cdH1cclxuXHJcblx0aW5pdCgpIHtcclxuXHRcdGlmICh0aGlzLmRhdGEuaXNBcnJheSkge1xyXG5cdFx0XHR0aGlzLm9ic2VydmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3NldFByZWNlbnQnLCAoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5zZXRBcnJheVZhbHVlKCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy50YWJUZXh0Lm1pbiA9IHJvdW5kKHRoaXMuZGF0YS5taW5Ub2dnbGVWYWx1ZSwgdGhpcy5kYXRhLnN0ZXApO1xyXG5cdFx0XHR0aGlzLnRhYlRleHQubWF4ID0gcm91bmQodGhpcy5kYXRhLm1heFRvZ2dsZVZhbHVlLCB0aGlzLmRhdGEuc3RlcCk7XHJcblx0XHR9XHJcblx0XHR0aGlzLm1pbklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyB0aGlzLmRhdGEubWluSW5wdXRJZCk7XHJcblx0XHR0aGlzLm1heElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyB0aGlzLmRhdGEubWF4SW5wdXRJZCk7XHJcblx0XHR0aGlzLnNldElucHV0KCk7XHJcblx0fVxyXG5cclxuXHRzZXRTY2FsZSgpIHtcclxuXHRcdGlmICh0aGlzLmRhdGEuaXNBcnJheSkge1xyXG5cdFx0XHRpZiAodGhpcy5kYXRhLmlzU2NhbGUpIHtcclxuXHRcdFx0XHR0aGlzLnNjYWxlID0gdGhpcy5kYXRhLmFycmF5O1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAodGhpcy5kYXRhLmlzU2NhbGUpIHtcclxuXHRcdFx0XHRsZXQgcXVhbnRpdHkgPSB0aGlzLmRhdGEuc2NhbGVRdWFudGl0eTtcclxuXHRcdFx0XHRpZiAocXVhbnRpdHkgPCAyKSB7XHJcblx0XHRcdFx0XHRxdWFudGl0eSA9IDI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgcXVhbnRpdHk7IGkrKykge1xyXG5cdFx0XHRcdFx0bGV0IHRleHRWYWx1ZTogbnVtYmVyID0gTWF0aC5yb3VuZCgodGhpcy5kYXRhLm1pblZhbHVlICsgKHRoaXMuZGF0YS5tYXhWYWx1ZSAtIHRoaXMuZGF0YS5taW5WYWx1ZSkgLyAocXVhbnRpdHkgLSAxKSAqIGkpIC8gdGhpcy5kYXRhLnN0ZXApICogdGhpcy5kYXRhLnN0ZXA7XHJcblx0XHRcdFx0XHRsZXQgdGV4dDogc3RyaW5nID0gcm91bmQodGV4dFZhbHVlLCB0aGlzLmRhdGEuc3RlcCk7XHJcblx0XHRcdFx0XHR0aGlzLnNjYWxlLnB1c2godGV4dCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRhZGRMaXN0ZW5lcigpIHtcclxuXHRcdHRoaXMub2JzZXJ2ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlVmFsdWUnLCAoKSA9PiB7XHJcblx0XHRcdGlmICh0aGlzLmRhdGEuaXNBcnJheSkge1xyXG5cdFx0XHRcdHRoaXMuc2V0QXJyYXlWYWx1ZSgpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMudGFiVGV4dC5taW4gPSByb3VuZCh0aGlzLnZhbHVlLm1pbiwgdGhpcy5kYXRhLnN0ZXApO1xyXG5cdFx0XHRcdHRoaXMudGFiVGV4dC5tYXggPSByb3VuZCh0aGlzLnZhbHVlLm1heCwgdGhpcy5kYXRhLnN0ZXApO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMuc2V0SW5wdXQoKTtcclxuXHRcdFx0dGhpcy5vYnNlcnZlci5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnY2hhbmdlVGFiVGV4dCcpKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRjaGFuZ2VJbnB1dCgpIHtcclxuXHRcdGNvbnN0IG9uQmx1ciA9ICgpID0+IHtcclxuXHRcdFx0aWYgKHRoaXMuZGF0YS5pc0FycmF5KSB7XHJcblx0XHRcdFx0Y29uc3QgaW5BcnJheSA9ICh2YWx1ZSwgbGltaXQpID0+IHtcclxuXHRcdFx0XHRcdGlmICh0aGlzLmRhdGEuYXJyYXkuaW5jbHVkZXModmFsdWUpKSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiB2YWx1ZTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiBsaW1pdDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy5taW5JbnB1dC52YWx1ZSA9IGluQXJyYXkodGhpcy5taW5JbnB1dC52YWx1ZSwgdGhpcy5kYXRhLmFycmF5WzBdKTtcclxuXHRcdFx0XHR0aGlzLm1heElucHV0LnZhbHVlID0gaW5BcnJheSh0aGlzLm1heElucHV0LnZhbHVlLCB0aGlzLmRhdGEuYXJyYXlbdGhpcy5kYXRhLmFycmF5Lmxlbmd0aCAtIDFdKTtcclxuXHRcdFx0XHR0aGlzLnZhbHVlLm1pbiA9IHRoaXMuZGF0YS5hcnJheS5pbmRleE9mKHRoaXMubWluSW5wdXQudmFsdWUpO1xyXG5cdFx0XHRcdHRoaXMudmFsdWUubWF4ID0gdGhpcy5kYXRhLmFycmF5LmluZGV4T2YodGhpcy5tYXhJbnB1dC52YWx1ZSk7XHJcblx0XHRcdFx0aWYgKHRoaXMudmFsdWUubWluID4gdGhpcy52YWx1ZS5tYXgpIHtcclxuXHRcdFx0XHRcdHRoaXMudmFsdWUubWluID0gdGhpcy52YWx1ZS5tYXg7XHJcblx0XHRcdFx0XHR0aGlzLm1pbklucHV0LnZhbHVlID0gdGhpcy5tYXhJbnB1dC52YWx1ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy50YWJUZXh0Lm1pbiA9IHRoaXMubWluSW5wdXQudmFsdWU7XHJcblx0XHRcdFx0dGhpcy50YWJUZXh0Lm1heCA9IHRoaXMubWF4SW5wdXQudmFsdWU7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy52YWx1ZS5taW4gPSArdGhpcy5taW5JbnB1dC52YWx1ZTtcclxuXHRcdFx0XHR0aGlzLnZhbHVlLm1heCA9ICt0aGlzLm1heElucHV0LnZhbHVlO1xyXG5cdFx0XHRcdHRoaXMudmFsdWUubWluID0gc2V0TGltaXQodGhpcy52YWx1ZS5taW4sIHRoaXMuZGF0YS5taW5WYWx1ZSwgdGhpcy52YWx1ZS5tYXgpO1xyXG5cdFx0XHRcdHRoaXMudmFsdWUubWF4ID0gc2V0TGltaXQodGhpcy52YWx1ZS5tYXgsIHRoaXMudmFsdWUubWluLCB0aGlzLmRhdGEubWF4VmFsdWUpO1xyXG5cdFx0XHRcdHRoaXMubWluSW5wdXQudmFsdWUgPSB0aGlzLnZhbHVlLm1pbi50b1N0cmluZygpO1xyXG5cdFx0XHRcdHRoaXMubWF4SW5wdXQudmFsdWUgPSB0aGlzLnZhbHVlLm1heC50b1N0cmluZygpO1xyXG5cdFx0XHRcdHRoaXMudGFiVGV4dC5taW4gPSByb3VuZCh0aGlzLm1pbklucHV0LnZhbHVlLCB0aGlzLmRhdGEuc3RlcCk7XHJcblx0XHRcdFx0dGhpcy50YWJUZXh0Lm1heCA9IHJvdW5kKHRoaXMubWF4SW5wdXQudmFsdWUsIHRoaXMuZGF0YS5zdGVwKTtcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLm9ic2VydmVyLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdjaGFuZ2VJbnB1dCcpKTtcclxuXHRcdH1cclxuXHRcdHRoaXMubWluSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIG9uQmx1cik7XHJcblx0XHR0aGlzLm1heElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBvbkJsdXIpO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IHtNb2RlbH07IiwiaW1wb3J0IHtWaWV3fSBmcm9tICcuL3ZpZXcudHMnO1xyXG5pbXBvcnQge0RhdGEsIFZhbHVlLCBUYWJUZXh0fSBmcm9tICcuL2ludGVyZmFjZXMudHMnO1xyXG5pbXBvcnQge01vZGVsfSBmcm9tICcuL21vZGVsLnRzJztcclxuaW1wb3J0IHtzZXRNb3VzZUhhbmRsZXIsIHJvdW5kLCBzZXRSYW5nZVN0eWxlLCB0b1ByZWNlbnQsIHRvVmFsdWV9IGZyb20gJy4vZnVuY3Rpb25zLnRzJztcclxuaW1wb3J0IHttYXJrdXB9IGZyb20gJy4vaW5pdC12aWV3LW1hcmt1cC50cyc7XHJcbmltcG9ydCB7ZGVmYXVsdERhdGEsIHNldERhdGFMaW1pdH0gZnJvbSAnLi9kYXRhLnRzJztcclxuXHJcbmNsYXNzIFByZXNlbnRlciB7XHJcblxyXG5cdHdyYXA6IEhUTUxFbGVtZW50O1xyXG5cdGRhdGE6IERhdGE7XHJcblx0b3B0aW9uczogYW55O1xyXG5cdHZpZXc6IFZpZXc7XHJcblx0bW9kZWw6IE1vZGVsO1xyXG5cdG1heDogbnVtYmVyO1xyXG5cdG1pbjogbnVtYmVyO1xyXG5cdHZhbHVlOiBWYWx1ZTtcclxuXHRtb2RlbFRhYlRleHQ6IFRhYlRleHQ7XHJcblxyXG5cdGNvbnN0cnVjdG9yKG9wdGlvbnMsIHdyYXApIHtcclxuXHRcdFxyXG5cdFx0dGhpcy53cmFwID0gd3JhcDtcclxuXHRcdHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XHJcblx0XHR0aGlzLmNyZWF0ZURhdGEoKTtcclxuXHRcdHRoaXMuaW5pdCgpO1xyXG5cdFx0dGhpcy5vbk1vdmVUb2dnbGUoKTtcclxuXHRcdHRoaXMub25DaGFuZ2VUYWJUZXh0KCk7XHJcblx0XHR0aGlzLm9uQ2FuZ2VJbnB1dCgpO1xyXG5cclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XHJcblx0XHRcdHRoaXMuaW5pdCgpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRzZXRWYWx1ZSgpIHtcclxuXHRcdHRoaXMudmFsdWUgPSB7XHJcblx0XHRcdG1pbjogdGhpcy5kYXRhLm1pblRvZ2dsZVZhbHVlLFxyXG5cdFx0XHRtYXg6IHRoaXMuZGF0YS5tYXhUb2dnbGVWYWx1ZVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Y3JlYXRlRGF0YSgpIHtcclxuXHRcdGZ1bmN0aW9uIGRlZXBDbG9uZShvYmopIHtcclxuXHRcdCAgY29uc3QgY2xPYmogPSB7fTtcclxuXHRcdCAgZm9yKGNvbnN0IGkgaW4gb2JqKSB7XHJcblx0XHQgICAgaWYgKG9ialtpXSBpbnN0YW5jZW9mIE9iamVjdCkge1xyXG5cdFx0ICAgICAgY2xPYmpbaV0gPSBkZWVwQ2xvbmUob2JqW2ldKTtcclxuXHRcdCAgICAgIGNvbnRpbnVlO1xyXG5cdFx0ICAgIH1cclxuXHRcdCAgICBjbE9ialtpXSA9IG9ialtpXTtcclxuXHRcdCAgfVxyXG5cdFx0ICByZXR1cm4gY2xPYmo7XHJcblx0XHR9XHJcblx0XHRjb25zdCBkYXRhQ2xvbmUgPSBkZWVwQ2xvbmUoZGVmYXVsdERhdGEpO1xyXG5cdFx0dGhpcy5kYXRhID0gT2JqZWN0LmFzc2lnbihkYXRhQ2xvbmUsIHRoaXMub3B0aW9ucyk7XHJcblx0XHRzZXREYXRhTGltaXQodGhpcy5kYXRhKTtcclxuXHRcdHRoaXMuc2V0VmFsdWUoKTtcclxuXHR9XHJcblxyXG5cdGNoYW5nZURhdGEoKSB7XHJcblx0XHR0aGlzLmRhdGEgPSBPYmplY3QuYXNzaWduKHRoaXMuZGF0YSwgdGhpcy5vcHRpb25zKTtcclxuXHRcdHNldERhdGFMaW1pdCh0aGlzLmRhdGEpO1xyXG5cdFx0dGhpcy5zZXRWYWx1ZSgpO1xyXG5cdFx0dGhpcy5pbml0KCk7XHJcblx0XHR0aGlzLm9uTW92ZVRvZ2dsZSgpO1xyXG5cdFx0dGhpcy5vbkNoYW5nZVRhYlRleHQoKTtcclxuXHRcdHRoaXMub25DYW5nZUlucHV0KCk7XHJcblx0fVxyXG5cclxuXHRzZXRUYWJUZXh0KCkge1xyXG5cdFx0dGhpcy52aWV3LnRhYlRleHQubWluID0gdGhpcy5tb2RlbC50YWJUZXh0Lm1pbjtcclxuXHRcdHRoaXMudmlldy50YWJUZXh0Lm1heCA9IHRoaXMubW9kZWwudGFiVGV4dC5tYXg7XHJcblx0fVxyXG5cclxuXHRpbml0U2NhbGUoKSB7XHJcblx0XHR0aGlzLnZpZXcuc2NhbGUgPSB0aGlzLm1vZGVsLnNjYWxlO1xyXG5cdFx0dGhpcy52aWV3LmNvbnRhaW5lci5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnaW5pdFNjYWxlJykpO1xyXG5cdH1cclxuXHJcblx0c2V0VG9WaWV3KCkge1xyXG5cdFx0dGhpcy52aWV3LnByZWNlbnQubWluID0gdG9QcmVjZW50KHRoaXMudmFsdWUubWluLCB0aGlzLmRhdGEubWluVmFsdWUsIHRoaXMuZGF0YS5tYXhWYWx1ZSk7XHJcblx0XHR0aGlzLnZpZXcucHJlY2VudC5tYXggPSB0b1ByZWNlbnQodGhpcy52YWx1ZS5tYXgsIHRoaXMuZGF0YS5taW5WYWx1ZSwgdGhpcy5kYXRhLm1heFZhbHVlKTtcclxuXHR9XHJcblxyXG5cdHNldFRvTW9kZWwoKSB7XHJcblx0XHR0aGlzLm1vZGVsLnZhbHVlLm1pbiA9IHRvVmFsdWUodGhpcy52aWV3LnByZWNlbnQubWluLCB0aGlzLmRhdGEubWluVmFsdWUsIHRoaXMuZGF0YS5tYXhWYWx1ZSk7XHJcblx0XHR0aGlzLm1vZGVsLnZhbHVlLm1heCA9IHRvVmFsdWUodGhpcy52aWV3LnByZWNlbnQubWF4LCB0aGlzLmRhdGEubWluVmFsdWUsIHRoaXMuZGF0YS5tYXhWYWx1ZSk7XHJcblx0fVxyXG5cclxuXHRpbml0KCkge1xyXG5cdFx0Y29uc3Qgdmlld0RhdGEgPSB0aGlzLmRhdGE7XHJcblx0XHRjb25zdCBtb2RlbERhdGEgPSB0aGlzLmRhdGE7XHJcblx0XHR0aGlzLnZpZXcgPSBuZXcgVmlldyh2aWV3RGF0YSwgdGhpcy53cmFwKTtcclxuXHRcdHRoaXMubW9kZWwgPSBuZXcgTW9kZWwobW9kZWxEYXRhKTtcclxuXHRcdHRoaXMuaW5pdFNjYWxlKCk7XHJcblx0XHR0aGlzLnNldFRvVmlldygpO1xyXG5cdFx0dGhpcy5tb2RlbC5wcmVjZW50ID0gdGhpcy52aWV3LnByZWNlbnQ7XHJcblx0XHR0aGlzLm1vZGVsLm9ic2VydmVyLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdzZXRQcmVjZW50JykpO1xyXG5cdFx0dGhpcy5zZXRUYWJUZXh0KCk7XHJcblx0XHR0aGlzLnZpZXcuc2V0VGFiKCk7XHJcblx0XHR0aGlzLnZpZXcuY29udGFpbmVyLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdpbml0VmFsdWUnKSk7XHJcblxyXG5cdFx0dGhpcy52aWV3LmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2VWYWx1ZScsICgpID0+IHtcclxuXHRcdFx0dGhpcy5tb2RlbC5vYnNlcnZlci5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnY2hhbmdlVmFsdWUnKSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdG9uTW92ZVRvZ2dsZSgpIHtcclxuXHRcdGNvbnN0IG9uQ2hhbmdlVmlldyA9ICgpID0+IHtcclxuXHRcdFx0dGhpcy5zZXRUb01vZGVsKCk7XHJcblx0XHRcdHRoaXMubW9kZWwub2JzZXJ2ZXIuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2NoYW5nZVZhbHVlJykpO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy52aWV3LmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdtb3ZlVG9nZ2xlJywgb25DaGFuZ2VWaWV3KTtcclxuXHR9XHJcblxyXG5cdG9uQ2hhbmdlVGFiVGV4dCgpIHtcclxuXHRcdHRoaXMubW9kZWwub2JzZXJ2ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlVGFiVGV4dCcsICgpID0+IHtcclxuXHRcdFx0dGhpcy5zZXRUYWJUZXh0KCk7XHJcblx0XHRcdHRoaXMudmlldy5jb250YWluZXIuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2NoYW5nZVRhYicpKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRvbkNhbmdlSW5wdXQoKSB7XHJcblx0XHR0aGlzLm1vZGVsLm9ic2VydmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZUlucHV0JywgKCkgPT4ge1xyXG5cdFx0XHR0aGlzLnZpZXcudGFiVGV4dCA9IHRoaXMubW9kZWwudGFiVGV4dDtcclxuXHRcdFx0aWYgKHRoaXMuZGF0YS5pc0FycmF5KSB7XHJcblx0XHRcdFx0dGhpcy52aWV3LnByZWNlbnQubWluID0gdGhpcy5tb2RlbC52YWx1ZS5taW4gLyAodGhpcy5kYXRhLmFycmF5Lmxlbmd0aCAtIDEpO1xyXG5cdFx0XHRcdHRoaXMudmlldy5wcmVjZW50Lm1heCA9IHRoaXMubW9kZWwudmFsdWUubWF4IC8gKHRoaXMuZGF0YS5hcnJheS5sZW5ndGggLTEpO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHRoaXMudmlldy5wcmVjZW50KTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aGlzLnZhbHVlLm1pbiA9ICt0aGlzLm1vZGVsLnZhbHVlLm1pbjtcclxuXHRcdFx0XHR0aGlzLnZhbHVlLm1heCA9ICt0aGlzLm1vZGVsLnZhbHVlLm1heDtcclxuXHRcdFx0XHR0aGlzLnNldFRvVmlldygpO1xyXG5cdFx0XHRcdHRoaXMuc2V0VG9Nb2RlbCgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMudmlldy5jb250YWluZXIuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2NoYW5nZUlucHV0JykpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQge1ByZXNlbnRlcn07IiwiaW1wb3J0IHtyb3VuZH0gZnJvbSAnLi9mdW5jdGlvbnMudHMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNjYWxlIHtcclxuXHJcblx0c2xpZGVyOiBIVE1MRWxlbWVudDtcclxuXHRzY2FsZTogc3RyaW5nW107XHJcblx0aXNWZXJ0aWNhbDogYm9vbGVhbjtcclxuXHJcblx0Y29uc3RydWN0b3Ioc2xpZGVyLCBzY2FsZSwgaXNWZXJ0aWNhbCkge1xyXG5cdFx0dGhpcy5zbGlkZXIgPSBzbGlkZXI7XHJcblx0XHR0aGlzLnNjYWxlID0gc2NhbGU7XHJcblx0XHR0aGlzLmlzVmVydGljYWwgPSBpc1ZlcnRpY2FsO1xyXG5cdFx0dGhpcy5jcmVhdGVJdGVtKCk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVJdGVtKCkge1xyXG5cdFx0Y29uc3QgYmFyOiBIVE1MRWxlbWVudCA9IHRoaXMuc2xpZGVyLnF1ZXJ5U2VsZWN0b3IoJy50cy1zbGlkZXJfX2JhcicpO1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNjYWxlLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGNvbnN0IHNjYWxlSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0XHRzY2FsZUl0ZW0uY2xhc3NMaXN0LmFkZCgndHMtc2xpZGVyX19zY2FsZS1pdGVtJyk7XHJcblx0XHRcdHNjYWxlSXRlbS50ZXh0Q29udGVudCA9IHRoaXMuc2NhbGVbaV07XHJcblx0XHRcdGlmICh0aGlzLmlzVmVydGljYWwpIHtcclxuXHRcdFx0XHRzY2FsZUl0ZW0uY2xhc3NMaXN0LmFkZCgndHMtc2xpZGVyX19zY2FsZS1pdGVtLS12ZXJ0aWNhbCcpO1xyXG5cdFx0XHRcdHNjYWxlSXRlbS5zdHlsZS50b3AgPSBgJHtiYXIub2Zmc2V0SGVpZ2h0IC8gKHRoaXMuc2NhbGUubGVuZ3RoIC0gMSkgKiBpfXB4YDtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzY2FsZUl0ZW0uc3R5bGUubGVmdCA9IGAke2Jhci5vZmZzZXRXaWR0aCAvICh0aGlzLnNjYWxlLmxlbmd0aCAtIDEpICogaX1weGA7XHJcblx0XHRcdH1cdFxyXG5cdFx0XHRiYXIuYXBwZW5kKHNjYWxlSXRlbSk7XHJcblx0XHR9XHJcblx0fVxyXG59IiwiaW1wb3J0IHtzZXRMaW1pdH0gZnJvbSAnLi9mdW5jdGlvbnMudHMnO1xyXG5cclxuY29uc3Qgc2V0VG9nZ2xlU3R5bGUgPSAodG9nZ2xlOiBIVE1MRWxlbWVudCwgcGl4ZWw6IG51bWJlciwgaXNWZXJ0aWNhbDogYm9vbGVhbikgPT4ge1xyXG5cdFx0aWYgKGlzVmVydGljYWwpIHtcclxuXHRcdFx0dG9nZ2xlLnN0eWxlLnRvcCA9IGAke3BpeGVsfXB4YDtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRvZ2dsZS5zdHlsZS5sZWZ0ID0gYCR7cGl4ZWx9cHhgO1xyXG5cdH1cclxufVxyXG5cclxuY2xhc3MgVG9nZ2xlIHtcclxuXHJcblx0dG9nZ2xlOiBIVE1MRWxlbWVudDtcclxuXHRtaW46IG51bWJlcjtcclxuXHRtYXg6IG51bWJlcjtcclxuXHRtb3VzZVBpeGVsOiBudW1iZXI7XHJcblx0cGl4ZWw6IG51bWJlcjtcclxuXHRwcmVjZW50OiBudW1iZXI7XHJcblx0c2l6ZTogbnVtYmVyO1xyXG5cdGlzVmVydGljYWw6IGJvb2xlYW47XHJcblx0aXNGaXhlZDogYm9vbGVhbjtcclxuXHJcblx0Y29uc3RydWN0b3IodG9nZ2xlLCBwcmVjZW50LCBzaXplLCBpc1ZlcnRpY2FsKSB7XHJcblx0XHR0aGlzLnRvZ2dsZSA9IHRvZ2dsZTtcclxuXHRcdHRoaXMuc2l6ZSA9IHNpemU7XHJcblx0XHR0aGlzLnByZWNlbnQgPSBwcmVjZW50O1xyXG5cdFx0dGhpcy5tb3VzZVBpeGVsID0gdGhpcy5wcmVjZW50ICogdGhpcy5zaXplO1xyXG5cdFx0dGhpcy5waXhlbCA9IHRoaXMubW91c2VQaXhlbDtcclxuXHRcdHRoaXMuaXNWZXJ0aWNhbCA9IGlzVmVydGljYWw7XHJcblx0XHR0aGlzLmlzRml4ZWQgPSBmYWxzZTtcclxuXHRcdHRoaXMuc2V0U3R5bGUoKTtcclxuXHRcdHRoaXMub25Nb3ZlVG9nZ2xlKCk7XHJcblx0fVxyXG5cclxuXHRzZXRTdHlsZSgpIHtcclxuXHRcdHNldFRvZ2dsZVN0eWxlKHRoaXMudG9nZ2xlLCB0aGlzLnBpeGVsLCB0aGlzLmlzVmVydGljYWwpO1xyXG5cdH1cclxuXHJcblx0Y2hhbmdlVG9nZ2xlKCkge1xyXG5cdFx0dGhpcy5tb3VzZVBpeGVsID0gdGhpcy5wcmVjZW50ICogdGhpcy5zaXplO1xyXG5cdFx0dGhpcy5waXhlbCA9IHRoaXMubW91c2VQaXhlbDtcclxuXHRcdHRoaXMuc2V0U3R5bGUoKTtcclxuXHR9XHJcblxyXG5cdG9uTW92ZVRvZ2dsZSgpIHtcclxuXHRcdGNvbnN0IG9uTW91c2VEb3duID0gKGV2dCkgPT4ge1xyXG5cdFx0XHRsZXQgc2hpZnRYOiBudW1iZXIgPSBldnQucGFnZVggLSB0aGlzLnRvZ2dsZS5vZmZzZXRMZWZ0O1xyXG5cdFx0XHRsZXQgc2hpZnRZOiBudW1iZXIgPSBldnQucGFnZVkgLSB0aGlzLnRvZ2dsZS5vZmZzZXRUb3A7XHJcblx0XHRcdGxldCBzdGFydFBpeGVsOiBudW1iZXIgPSB0aGlzLm1vdXNlUGl4ZWw7XHJcblx0XHRcdGNvbnN0IG1vdmVBdCA9IChwYWdlWCwgcGFnZVkpID0+IHtcclxuXHRcdFx0XHRpZiAodGhpcy5pc1ZlcnRpY2FsKSB7XHJcblx0XHRcdFx0XHR0aGlzLm1vdXNlUGl4ZWwgPSBwYWdlWSAtIHNoaWZ0WTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy5tb3VzZVBpeGVsID0gcGFnZVggLSBzaGlmdFg7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMucGl4ZWwgPSB0aGlzLm1vdXNlUGl4ZWw7XHJcblx0XHRcdFx0dGhpcy5waXhlbCA9IHNldExpbWl0KHRoaXMucGl4ZWwsIHRoaXMubWluICogdGhpcy5zaXplLCB0aGlzLm1heCAqIHRoaXMuc2l6ZSk7XHJcblx0XHRcdFx0aWYgKHRoaXMuaXNGaXhlZCkge1xyXG5cdFx0XHRcdFx0dGhpcy5waXhlbCA9IHN0YXJ0UGl4ZWw7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMuc2V0U3R5bGUoKTtcclxuXHRcdFx0XHR0aGlzLnByZWNlbnQgPSB0aGlzLnBpeGVsIC8gdGhpcy5zaXplO1xyXG5cdFx0XHR9XHJcblx0XHRcdG1vdmVBdChldnQucGFnZVgsIGV2dC5wYWdlWSk7XHJcblxyXG5cdFx0XHRjb25zdCBvbk1vdXNlTW92ZSA9IChtb3ZlRXZ0KSA9PiB7XHJcblx0XHRcdFx0bW92ZUV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdG1vdmVBdChtb3ZlRXZ0LnBhZ2VYLCBtb3ZlRXZ0LiBwYWdlWSk7XHJcblx0XHRcdH1cclxuXHRcdFx0Y29uc3Qgb25Nb3VzZVVwID0gKHVwRXZ0KSA9PiB7XHJcblx0XHRcdFx0dGhpcy5tb3VzZVBpeGVsID0gdGhpcy5waXhlbDtcclxuXHRcdFx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25Nb3VzZVVwKTtcclxuXHRcdFx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUpO1xyXG5cdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25Nb3VzZVVwKTtcclxuXHRcdH1cclxuXHRcdHRoaXMudG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIG9uTW91c2VEb3duKTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCB7c2V0VG9nZ2xlU3R5bGUsIFRvZ2dsZX07XHJcbiIsImltcG9ydCB7aW5pdFZpZXdNYXJrdXAsIG1hcmt1cH0gZnJvbSAnLi9pbml0LXZpZXctbWFya3VwLnRzJztcclxuaW1wb3J0IHtTY2FsZX0gZnJvbSAnLi9zY2FsZS50cyc7XHJcbmltcG9ydCB7RGF0YSwgVmFsdWUsIFRhYlRleHR9IGZyb20gJy4vaW50ZXJmYWNlcy50cyc7XHJcbmltcG9ydCB7c2V0VG9nZ2xlU3R5bGUsIFRvZ2dsZX0gZnJvbSAnLi90b2dnbGUudHMnO1xyXG5pbXBvcnQge3NldE1vdXNlSGFuZGxlciwgcm91bmQsIHRvUHJlY2VudCwgc2V0UmFuZ2VTdHlsZX0gZnJvbSAnLi9mdW5jdGlvbnMudHMnO1xyXG5cclxuY2xhc3MgVmlldyB7XHJcblxyXG5cdHdyYXA6IEhUTUxFbGVtZW50O1xyXG5cdGRhdGE6IERhdGE7XHJcblx0cHJlY2VudDogVmFsdWU7XHJcblx0dGFiVGV4dDogVGFiVGV4dDtcclxuXHRjb250YWluZXI6IEhUTUxFbGVtZW50O1xyXG5cdG1pblRvZ2dsZUVsZW06IEhUTUxFbGVtZW50O1xyXG5cdG1heFRvZ2dsZUVsZW06IEhUTUxFbGVtZW50O1xyXG5cdG1pblRvZ2dsZTogVG9nZ2xlO1xyXG5cdG1heFRvZ2dsZTogVG9nZ2xlO1xyXG5cdG1pblRhYkVsZW06IEhUTUxFbGVtZW50O1xyXG5cdG1heFRhYkVsZW06IEhUTUxFbGVtZW50O1xyXG5cdHJhbmdlRWxlbTogSFRNTEVsZW1lbnQ7XHJcblx0c2l6ZTogbnVtYmVyO1xyXG5cdHNjYWxlOiBzdHJpbmdbXTtcclxuXHJcblx0Y29uc3RydWN0b3IoZGF0YSwgd3JhcCkge1xyXG5cclxuXHRcdHRoaXMud3JhcCA9IHdyYXA7XHJcblx0XHR0aGlzLmRhdGEgPSBkYXRhO1xyXG5cdFx0dGhpcy5wcmVjZW50ID0ge1xyXG5cdFx0XHRtaW46IDAsXHJcblx0XHRcdG1heDogMFxyXG5cdFx0fVxyXG5cdFx0dGhpcy50YWJUZXh0ID0ge1xyXG5cdFx0XHRtaW46ICcnLFxyXG5cdFx0XHRtYXg6ICcnXHJcblx0XHR9XHJcblx0XHR0aGlzLnNjYWxlID0gW107XHJcblx0XHR0aGlzLmluaXRWaWV3KCk7XHJcblx0XHR0aGlzLmNyZWF0ZVRvZ2dsZSgpO1xyXG5cdFx0dGhpcy5vblRvZ2dsZUNvaW5jaWRlbmNlKCk7XHJcblx0XHR0aGlzLmFkZFNjYWxlKCk7XHJcblx0XHR0aGlzLmNoYW5nZVRhYigpO1xyXG5cdFx0dGhpcy5jaGFuZ2VJbnB1dCgpO1xyXG5cdH1cclxuXHJcblx0aW5pdFZpZXcoKSB7XHJcblx0XHRpbml0Vmlld01hcmt1cCh0aGlzLndyYXAsIHRoaXMuZGF0YS5pc1ZlcnRpY2FsKTtcclxuXHRcdHRoaXMuY29udGFpbmVyID0gdGhpcy53cmFwLnF1ZXJ5U2VsZWN0b3IoJy50cy1zbGlkZXJfX2NvbnRhaW5lcicpO1xyXG5cdFx0aWYgKHRoaXMuZGF0YS5pc1ZlcnRpY2FsKSB7XHJcblx0XHRcdHRoaXMuc2l6ZSA9IHRoaXMuY29udGFpbmVyLm9mZnNldEhlaWdodDtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuc2l6ZSA9IHRoaXMuY29udGFpbmVyLm9mZnNldFdpZHRoO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5taW5Ub2dnbGVFbGVtID0gbWFya3VwKHRoaXMuY29udGFpbmVyKS5taW47XHJcblx0XHR0aGlzLm1heFRvZ2dsZUVsZW0gPSBtYXJrdXAodGhpcy5jb250YWluZXIpLm1heDtcclxuXHRcdHRoaXMubWluVGFiRWxlbSA9IG1hcmt1cCh0aGlzLmNvbnRhaW5lcikubWluVGFiO1xyXG5cdFx0dGhpcy5tYXhUYWJFbGVtID0gbWFya3VwKHRoaXMuY29udGFpbmVyKS5tYXhUYWI7XHJcblx0XHR0aGlzLnJhbmdlRWxlbSA9IG1hcmt1cCh0aGlzLmNvbnRhaW5lcikucmFuZ2U7XHJcblxyXG5cdFx0aWYgKCF0aGlzLmRhdGEuaXNSYW5nZSkge1xyXG5cdFx0XHR0aGlzLm1pblRvZ2dsZUVsZW0uaGlkZGVuID0gdHJ1ZTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoIXRoaXMuZGF0YS5pc1RhYikge1xyXG5cdFx0XHR0aGlzLm1pblRhYkVsZW0uaGlkZGVuID0gdHJ1ZTtcclxuXHRcdFx0dGhpcy5tYXhUYWJFbGVtLmhpZGRlbiA9IHRydWU7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRzZXRUYWIoKSB7XHJcblx0XHR0aGlzLm1pblRhYkVsZW0udGV4dENvbnRlbnQgPSB0aGlzLnRhYlRleHQubWluO1xyXG5cdFx0dGhpcy5tYXhUYWJFbGVtLnRleHRDb250ZW50ID0gdGhpcy50YWJUZXh0Lm1heDtcclxuXHR9XHJcblxyXG5cdHNldFJhbmdlKCkge1xyXG5cdFx0c2V0UmFuZ2VTdHlsZSh0aGlzLnJhbmdlRWxlbSwgdGhpcy5taW5Ub2dnbGUucHJlY2VudCAqIHRoaXMuc2l6ZSwgdGhpcy5tYXhUb2dnbGUucHJlY2VudCAqIHRoaXMuc2l6ZSwgdGhpcy5kYXRhLmlzVmVydGljYWwpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlVG9nZ2xlKCkge1xyXG5cdFx0Y29uc3QgbWluVG9nZ2xlUHJlY2VudCA9IHRvUHJlY2VudCh0aGlzLmRhdGEubWluVG9nZ2xlVmFsdWUsIHRoaXMuZGF0YS5taW5WYWx1ZSwgdGhpcy5kYXRhLm1heFZhbHVlKTtcclxuXHRcdGNvbnN0IG1heFRvZ2dsZVByZWNlbnQgPSB0b1ByZWNlbnQodGhpcy5kYXRhLm1heFRvZ2dsZVZhbHVlLCB0aGlzLmRhdGEubWluVmFsdWUsIHRoaXMuZGF0YS5tYXhWYWx1ZSk7XHJcblx0XHR0aGlzLm1pblRvZ2dsZSA9IG5ldyBUb2dnbGUodGhpcy5taW5Ub2dnbGVFbGVtLCBtaW5Ub2dnbGVQcmVjZW50LCB0aGlzLnNpemUsIHRoaXMuZGF0YS5pc1ZlcnRpY2FsKTtcclxuXHRcdHRoaXMubWF4VG9nZ2xlID0gbmV3IFRvZ2dsZSh0aGlzLm1heFRvZ2dsZUVsZW0sIG1heFRvZ2dsZVByZWNlbnQsIHRoaXMuc2l6ZSwgdGhpcy5kYXRhLmlzVmVydGljYWwpO1xyXG5cdFx0dGhpcy5taW5Ub2dnbGUubWluID0gMDtcclxuXHRcdHRoaXMubWF4VG9nZ2xlLm1heCA9IDE7XHJcblx0XHRpZiAoIXRoaXMuZGF0YS5pc1JhbmdlKSB7XHJcblx0XHRcdHRoaXMubWluVG9nZ2xlLnByZWNlbnQgPSAwO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5zZXRSYW5nZSgpO1xyXG5cclxuXHRcdGNvbnN0IG9uTW91c2VNb3ZlID0gKG1vdmVFdnQpID0+IHtcclxuXHRcdFx0dGhpcy5taW5Ub2dnbGUubWF4ID0gdGhpcy5tYXhUb2dnbGUucHJlY2VudDtcclxuXHRcdFx0dGhpcy5tYXhUb2dnbGUubWluID0gdGhpcy5taW5Ub2dnbGUucHJlY2VudDtcclxuXHRcdFx0c2V0UmFuZ2VTdHlsZSh0aGlzLnJhbmdlRWxlbSwgdGhpcy5taW5Ub2dnbGUucHJlY2VudCAqIHRoaXMuc2l6ZSwgdGhpcy5tYXhUb2dnbGUucHJlY2VudCAqIHRoaXMuc2l6ZSwgdGhpcy5kYXRhLmlzVmVydGljYWwpO1xyXG5cdFx0XHR0aGlzLnByZWNlbnQubWluID0gdGhpcy5taW5Ub2dnbGUucHJlY2VudDtcclxuXHRcdFx0dGhpcy5wcmVjZW50Lm1heCA9IHRoaXMubWF4VG9nZ2xlLnByZWNlbnQ7XHJcblx0XHRcdHRoaXMuc2V0VGFiKCk7XHJcblx0XHRcdHRoaXMuY29udGFpbmVyLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdtb3ZlVG9nZ2xlJykpO1xyXG5cdFx0fVxyXG5cdFx0c2V0TW91c2VIYW5kbGVyKGRvY3VtZW50LCBvbk1vdXNlTW92ZSk7XHJcblx0XHR0aGlzLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZXZ0KSA9PiB7XHJcblx0XHRcdGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRvblRvZ2dsZUNvaW5jaWRlbmNlKCkge1xyXG5cdFx0Y29uc3Qgb25Nb3VzZURvd25Db2luY2lkZW5jZSA9IChldnQpID0+IHtcclxuXHRcdFx0bGV0IGNvaW5jaWRlbmNlVG9nZ2xlOiBib29sZWFuID0gZmFsc2U7XHJcblx0XHRcdHRoaXMubWF4VG9nZ2xlRWxlbS5oaWRkZW4gPSB0cnVlO1xyXG5cdFx0XHRjb2luY2lkZW5jZVRvZ2dsZSA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQoZXZ0LmNsaWVudFgsIGV2dC5jbGllbnRZKS5jbGFzc0xpc3QuY29udGFpbnMoJ3RzLXNsaWRlcl9fdG9nZ2xlLS1taW4nKTtcclxuXHRcdFx0dGhpcy5tYXhUb2dnbGVFbGVtLmhpZGRlbiA9IGZhbHNlO1xyXG5cdFx0XHRsZXQgc3RhcnRQaXhlbDogbnVtYmVyO1xyXG5cdFx0XHRzdGFydFBpeGVsID0gdGhpcy5tYXhUb2dnbGUucGl4ZWw7XHJcblxyXG5cdFx0XHRjb25zdCBvbk1vdXNlTW92ZSA9IChtb3ZlRXZ0KSA9PiB7XHJcblx0XHRcdFx0aWYgKGNvaW5jaWRlbmNlVG9nZ2xlKSB7XHJcblx0XHRcdFx0XHR0aGlzLm1pblRvZ2dsZS5tb3VzZVBpeGVsID0gdGhpcy5tYXhUb2dnbGUubW91c2VQaXhlbDtcclxuXHRcdFx0XHRcdHRoaXMubWF4VG9nZ2xlLmlzRml4ZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0dGhpcy5taW5Ub2dnbGUuaXNGaXhlZCA9IHRydWU7XHJcblx0XHRcdFx0XHRpZiAodGhpcy5tYXhUb2dnbGUubW91c2VQaXhlbCA+IHN0YXJ0UGl4ZWwpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5tYXhUb2dnbGUuaXNGaXhlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0XHR0aGlzLm1pblRvZ2dsZS5pc0ZpeGVkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHRoaXMubWF4VG9nZ2xlLmlzRml4ZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHR0aGlzLm1pblRvZ2dsZS5pc0ZpeGVkID0gZmFsc2U7XHJcblx0XHRcdFx0XHRcdHRoaXMubWluVG9nZ2xlLm1vdXNlUGl4ZWwgPSB0aGlzLm1heFRvZ2dsZS5tb3VzZVBpeGVsO1xyXG5cdFx0XHRcdFx0XHR0aGlzLm1pblRvZ2dsZS5waXhlbCA9IHRoaXMubWF4VG9nZ2xlLm1vdXNlUGl4ZWw7XHJcblx0XHRcdFx0XHRcdGlmICh0aGlzLm1pblRvZ2dsZS5waXhlbCA8IDApIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLm1pblRvZ2dsZS5waXhlbCA9IDA7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0dGhpcy5taW5Ub2dnbGUuc2V0U3R5bGUoKTtcclxuXHRcdFx0XHRcdFx0dGhpcy5taW5Ub2dnbGUucHJlY2VudCA9IHRoaXMubWluVG9nZ2xlLnBpeGVsIC8gdGhpcy5zaXplO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0aGlzLm1heFRvZ2dsZS5pc0ZpeGVkID0gZmFsc2U7XHJcblx0XHRcdFx0XHR0aGlzLm1pblRvZ2dsZS5pc0ZpeGVkID0gZmFsc2U7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGNvbnN0IG9uTW91c2VVcCA9ICh1cEV2dCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMubWluVG9nZ2xlLm1vdXNlUGl4ZWwgPSB0aGlzLm1pblRvZ2dsZS5waXhlbDtcclxuXHRcdFx0XHR0aGlzLm1heFRvZ2dsZS5pc0ZpeGVkID0gZmFsc2U7XHJcblx0XHRcdFx0dGhpcy5taW5Ub2dnbGUuaXNGaXhlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbk1vdXNlVXApO1xyXG5cdFx0XHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSk7XHJcblx0XHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbk1vdXNlVXApO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMubWF4VG9nZ2xlRWxlbS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBvbk1vdXNlRG93bkNvaW5jaWRlbmNlKTtcclxuXHR9XHJcblxyXG5cdGFkZFNjYWxlKCkge1xyXG5cdFx0dGhpcy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignaW5pdFNjYWxlJywgKCkgPT4ge1xyXG5cdFx0XHRpZiAodGhpcy5kYXRhLmlzU2NhbGUpIHtcclxuXHRcdFx0XHRjb25zdCBzY2FsZSA9IG5ldyBTY2FsZSh0aGlzLmNvbnRhaW5lciwgdGhpcy5zY2FsZSwgdGhpcy5kYXRhLmlzVmVydGljYWwpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGNoYW5nZVRhYigpIHtcclxuXHRcdHRoaXMuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZVRhYicsICgpID0+IHtcclxuXHRcdFx0dGhpcy5zZXRUYWIoKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0Y2hhbmdlSW5wdXQoKSB7XHJcblx0XHR0aGlzLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2VJbnB1dCcsICgpID0+IHtcclxuXHRcdFx0dGhpcy5taW5Ub2dnbGUucHJlY2VudCA9IHRoaXMucHJlY2VudC5taW47XHJcblx0XHRcdHRoaXMubWF4VG9nZ2xlLnByZWNlbnQgPSB0aGlzLnByZWNlbnQubWF4O1xyXG5cdFx0XHR0aGlzLm1pblRvZ2dsZS5jaGFuZ2VUb2dnbGUoKTtcclxuXHRcdFx0dGhpcy5tYXhUb2dnbGUuY2hhbmdlVG9nZ2xlKCk7XHJcblx0XHRcdHRoaXMuc2V0VGFiKCk7XHJcblx0XHRcdHRoaXMuc2V0UmFuZ2UoKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0cmVtb3ZlTWFya3VwKCkge1xyXG5cdFx0dGhpcy5jb250YWluZXIucmVtb3ZlKCk7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQge1ZpZXd9O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9