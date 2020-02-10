import {initViewMarkup} from './init-view-markup.ts';
import {Scale} from './scale.ts';
import {setViewValue} from './set-view-value.ts';
import {SliderData} from './data.ts';
import {setToggleStyle} from './toggle.ts';
import {setMouseHandler, round} from './functions.ts';

interface ViewValue {
	min: number;
	max: number;
}
interface ViewTabText {
	min: string;
	max: string;
}

class View {

	data: SliderData;
	viewValue: ViewValue;
	viewTabText: ViewTabText;
	container: HTMLElement;
	minToggleElem: HTMLElement;
	maxToggleElem: HTMLElement;
	minTabElem: HTMLElement;
	maxTabElem: HTMLElement;
	size: number;

	constructor(data) {
		this.data = data;
		this.viewTabText = {
			min: '',
			max: ''
		}
		this.initView();
		this.setToggle();
		this.addListener();
		this.addScale();
	}

	initView() {
		initViewMarkup(this.data.wrapId, this.data.isVertical);
		this.container = document.querySelector(this.data.wrapId).querySelector('.ts-slider__container');
		if (this.data.isVertical) {
			this.size = this.container.offsetHeight;
		} else {
			this.size = this.container.offsetWidth;
		}
	}

	setToggle() {
		this.minToggleElem = this.container.querySelector('.ts-slider__toggle--min');
		this.maxToggleElem = this.container.querySelector('.ts-slider__toggle--max');
		// const setStyleValue = (value) => (value - this.data.minValue) / (this.data.maxValue - this.data.minValue) * this.size;
		// setToggleStyle(this.minToggleElem, setStyleValue(this.data.minToggleValue), this.data.isVertical);
		// setToggleStyle(this.maxToggleElem, setStyleValue(this.data.maxToggleValue), this.data.isVertical);
		this.minTabElem = this.container.querySelector('.ts-slider__toggle-value--min');
		this.maxTabElem = this.container.querySelector('.ts-slider__toggle-value--max');
		// this.minTabElem.textContent = `${round(this.data.minToggleValue, this.data.step)}`;
		// this.maxTabElem.textContent = `${round(this.data.maxToggleValue, this.data.step)}`;
	}

	addListener() {
		this.viewValue = setViewValue(this.container, this.data);
		const onMouseMove = (moveEvt) => {
			// const setTabValue = (value) => Math.round((this.data.minValue + (this.data.maxValue - this.data.minValue) * value / 100) / this.data.step) * this.data.step;
			// this.minTabElem.textContent = `${round(setTabValue(this.viewValue.min), this.data.step)}`;
			// this.maxTabElem.textContent = `${round(setTabValue(this.viewValue.max), this.data.step)}`;
			
			this.container.dispatchEvent(new CustomEvent('changeValue'));
		}
		setMouseHandler(document, onMouseMove);
	}

	addScale() {
		if (this.data.isScale) {
			const scale = new Scale(this.container, this.data);
		}
	}
}

export {View, ViewValue, ViewTabText};
