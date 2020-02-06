import {initControl} from './init-control.ts';
import {Scale} from './scale.ts';
import {setViewData} from './set-view-data.ts';
import {SliderData} from './data.ts';
import {setToggleStyle} from './toggle.ts';

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
		this.minTabElem.textContent = `${this.data.minToggleValue}`;
		this.maxTabElem.textContent = `${this.data.maxToggleValue}`;
	}

	addListener() {
		this.viewData = setViewData(this.container, this.data.isVertical, this.data.isRange, this.data.isTab);
		const onMouseDown = (evt) => {
			evt.preventDefault();
			
			const onMouseMove = (moveEvt) => {
				const setTabValue = (value) => this.data.minValue + (this.data.maxValue - this.data.minValue) * value / 100;
				this.minTabElem.textContent = `${Math.round(setTabValue(this.viewData.min))}`;
				this.maxTabElem.textContent = `${Math.round(setTabValue(this.viewData.max))}`;
				// console.log(this.viewData);
			}
			const onMouseUp = (upEvt) => {
				upEvt.preventDefault();
				document.removeEventListener('mouseup', onMouseUp);
				document.removeEventListener('mousemove', onMouseMove);
			}
			document.addEventListener('mousemove', onMouseMove);
			document.addEventListener('mouseup', onMouseUp);
		}

		document.addEventListener('mousedown', onMouseDown);
	}

	addScale() {
		if (this.data.isScale) {
			const scale = new Scale(this.container, this.data.minValue, this.data.maxValue, this.data.scaleQuantity, this.data.isVertical);
		}
	}
}

export {View, ViewData};
