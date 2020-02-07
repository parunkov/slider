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
		this.init();
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
			this.model.modelData = modelData;
			this.model.observer.dispatchEvent(new CustomEvent('changeValue'));
		});
	}

	setPresenterData() {
		
	}
}

export {Presenter};