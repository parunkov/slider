import {View, ViewValue, ViewTabText} from './view.ts';
import {SliderData} from './data.ts';
import {Model} from './model.ts';

import {setMouseHandler, round} from './functions.ts';

const toView = (value, min, max) => (value - min) / (max - min);
const toModel = (value, min, max) => (min + (max - min) * value);

class Presenter {

	data: SliderData;
	view: any;
	model: any;
	// presenterData: SliderData;
	max: number;
	min: number;
	value: ViewValue;
	viewValue: ViewValue;
	modelValue: ViewValue;
	modelTabText: ViewTabText;

	constructor(data) {
		this.data = data;
		this.value = {
			min: this.data.minToggleValue,
			max: this.data.maxToggleValue
		}
		// console.log(this.value);
		this.init();
		this.onMoveToggle();
		this.onChangeTabText();
	}

	setTabText() {
		this.view.viewTabText.min = this.model.tabText.min;
		this.view.viewTabText.max = this.model.tabText.max;
	}

	init() {
		// this.presenterData = this.data;
		// this.view = new View(this.presenterData);
		// this.model = new Model(this.presenterData);
		this.view = new View(this.data);
		this.model = new Model(this.data);
		// this.view.data = this.presenterData;
		// this.viewValue = this.view.viewValue;
		// this.modelValue = this.view.viewValue;
		// const setTabValue = (value) => Math.round((this.data.minValue + (this.data.maxValue - this.data.minValue) * value / 100) / this.data.step) * this.data.step;

		this.view.viewValue.min = toView(this.value.min, this.data.minValue, this.data.maxValue);
		this.view.viewValue.max = toView(this.value.max, this.data.minValue, this.data.maxValue);
		// console.log(this.view.viewValue.min);
		// this.view.viewTabText.min = this.model.tabText.min;
		// this.view.viewTabText.max = this.model.tabText.max;
		this.setTabText();

		this.view.container.dispatchEvent(new CustomEvent('initValue'));

		this.view.container.addEventListener('changeValue', (evt) => {
			// this.modelValue.min = +round(setTabValue(this.viewValue.min), this.data.step);
			// this.modelValue.max = +round(setTabValue(this.viewValue.max), this.data.step);
			this.model.observer.dispatchEvent(new CustomEvent('changeValue'));
		});
	}

	onMoveToggle() {
		// const onMouseMove = (moveEvt) => {
		// 	// const setTabValue = (value) => Math.round((this.data.minValue + (this.data.maxValue - this.data.minValue) * value / 100) / this.data.step) * this.data.step;
		// 	// this.view.viewTabText.min = round(setTabValue(this.view.viewValue.min), this.view.data.step);
		// 	// this.view.viewTabText.max = round(setTabValue(this.view.viewValue.max), this.view.data.step);
		// 	// console.log(this.viewValue);
		// }
		// setMouseHandler(document, onMouseMove);
		const onChangeView = (evt) => {
			evt.preventDefault();
			// console.log(this.view.viewValue);
			// console.log(this.data.maxValue);
			// console.log(this.data.maxValue);
			this.model.value.min = toModel(this.view.viewValue.min, this.data.minValue, this.data.maxValue);
			this.model.value.max = toModel(this.view.viewValue.max, this.data.minValue, this.data.maxValue);
			// console.log(this.value.min + ' ' + this.value.max);
			this.model.observer.dispatchEvent(new CustomEvent('changeValue'))

		}
		this.view.container.addEventListener('moveToggle', onChangeView);
	}

	onChangeTabText() {
		this.model.observer.addEventListener('changeTabText', (evt) => {
			evt.preventDefault();
			this.setTabText();
			// console.log(this.view.viewTabText.min);
			this.view.container.dispatchEvent(new CustomEvent('changeTab'));
		});
	}

	setPresenterData() {
		
	}
}

export {Presenter};