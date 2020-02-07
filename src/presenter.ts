import {View, ViewData} from './view.ts';
import {SliderData} from './data.ts';
import {round} from './functions.ts';
import {Model} from './model.ts';

class Presenter {

	data: SliderData;
	view: any;
	model: any;
	presenterData: SliderData;
	viewData: ViewData;
	modelData: ViewData;

	constructor(data) {
		this.data = data;
		// this.modelData = this.viewData;
		// this.setPresenterData();
		this.init();
		// this.setPresenterData();
		// this.modelData = this.viewData;
	}

	init() {
		this.presenterData = this.data;
		this.view = new View(this.presenterData);
		this.model = new Model(this.presenterData);
		this.setPresenterData();
		this.view.data = this.presenterData;
		let viewData: ViewData = this.view.viewData;
		let modelData: ViewData = this.view.viewData;
		const setTabValue = (value) => Math.round((this.data.minValue + (this.data.maxValue - this.data.minValue) * value / 100) / this.data.step) * this.data.step;
		this.view.container.addEventListener('changeValue', (evt) => {
			const setTabValue = (value) => Math.round((this.data.minValue + (this.data.maxValue - this.data.minValue) * value / 100) / this.data.step) * this.data.step;
			modelData.min = +round(setTabValue(viewData.min), this.data.step);
			modelData.max = +round(setTabValue(viewData.max), this.data.step);
			// console.log(modelData);
			this.model.modelData = modelData;
			// console.log(this.model.data);
			this.model.observer.dispatchEvent(new CustomEvent('changeValue'));
		});
	}

	setPresenterData() {
		// this.presenterData.maxToggleValue = 60;

		// const setTogglePosition = (value) => {
		// 	let position = (value - this.data.minValue) / (this.data.maxValue - this.data.minValue) * this.view.size;
		// 	return position;
		// }
		// this.presenterData.minToggleValue = setTogglePosition(this.data.minToggleValue);
		// this.presenterData.maxToggleValue = setTogglePosition(this.data.maxToggleValue);
		// console.log(this.presenterData.minToggleValue);
		// console.log(this.presenterData.maxToggleValue);
		
	}
}

export {Presenter};