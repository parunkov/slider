import {View, ViewData} from './view.ts';
import {SliderData} from './data.ts';
import {round} from './functions.ts';

class Presenter {

	data: SliderData;
	view: any;
	presenterData: SliderData;
	viewData: ViewData;
	modelData: ViewData;

	constructor(data) {
		this.data = data;
		// this.setPresenterData();
		this.init();
		// this.setPresenterData();
		this.modelData = new Object;
	}

	init() {
		this.presenterData = this.data;
		this.view = new View(this.presenterData);
		this.setPresenterData();
		this.view.data = this.presenterData;
		let viewData: ViewData = this.view.viewData;
		// let modelData: ViewData = new Object;
		const setTabValue = (value) => Math.round((this.data.minValue + (this.data.maxValue - this.data.minValue) * value / 100) / this.data.step) * this.data.step;
		this.view.container.addEventListener('changeValue', (evt) => {
			const setTabValue = (value) => Math.round((this.data.minValue + (this.data.maxValue - this.data.minValue) * value / 100) / this.data.step) * this.data.step;
			this.modelData.min = +round(setTabValue(viewData.min), this.data.step);
			this.modelData.max = +round(setTabValue(viewData.max), this.data.step);
			console.log(this.modelData);
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