import {initControl} from './init-control.ts';
import {Scale} from './scale.ts';
import {setViewData} from './set-view-data.ts';
import {SliderData} from './data.ts';
import {setToggleStyle} from './toggle.ts';
import {setMouseHandler, round} from './functions.ts';

interface ViewData {
	min: number;
	max: number;
}

class View {

	data: SliderData;
	viewData: ViewData;
	container: HTMLElement;
	minToggleElem: HTMLElement;
	maxToggleElem: HTMLElement;
	minTabElem: HTMLElement;
	maxTabElem: HTMLElement;
	size: number;

	constructor(data) {
		this.data = data;
		this.initView();
		this.addListener();
		this.addScale();
	}

	initView() {
		initControl(this.data.wrapId, this.data.isVertical);
		this.container = document.querySelector(this.data.wrapId).querySelector('.ts-slider__container');
		if (this.data.isVertical) {
			this.size = this.container.offsetHeight;
		} else {
			this.size = this.container.offsetWidth;
		}
		this.minToggleElem = this.container.querySelector('.ts-slider__toggle--min');
		this.maxToggleElem = this.container.querySelector('.ts-slider__toggle--max');
		const setStyleValue = (value) => (value - this.data.minValue) / (this.data.maxValue - this.data.minValue) * this.size;
		setToggleStyle(this.minToggleElem, setStyleValue(this.data.minToggleValue), this.data.isVertical);
		setToggleStyle(this.maxToggleElem, setStyleValue(this.data.maxToggleValue), this.data.isVertical);
		this.minTabElem = this.container.querySelector('.ts-slider__toggle-value--min');
		this.maxTabElem = this.container.querySelector('.ts-slider__toggle-value--max');
		// round(10.01, this.data.step);
		// const setToggleValue = (value) => Math.round(value / this.data.step) * this.data.step;
		this.minTabElem.textContent = `${round(this.data.minToggleValue, this.data.step)}`;
		this.maxTabElem.textContent = `${round(this.data.maxToggleValue, this.data.step)}`;
	}

	addListener() {
		this.viewData = setViewData(this.container, this.data.isVertical, this.data.isRange, this.data.isTab);
		const onMouseMove = (moveEvt) => {
			const setTabValue = (value) => Math.round((this.data.minValue + (this.data.maxValue - this.data.minValue) * value / 100) / this.data.step) * this.data.step;
			this.minTabElem.textContent = `${round(setTabValue(this.viewData.min), this.data.step)}`;
			this.maxTabElem.textContent = `${round(setTabValue(this.viewData.max), this.data.step)}`;
			// console.log(this.viewData);
		}
		setMouseHandler(document, onMouseMove);
	}

	addScale() {
		if (this.data.isScale) {
			const scale = new Scale(this.container, this.data);
		}
	}
}

export {View, ViewData};
