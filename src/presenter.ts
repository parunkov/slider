import {View, ViewData} from './view.ts';
import {SliderData} from './data.ts';

class Presenter {

	data: SliderData;
	view: any;
	presenterData: SliderData;
	viewData: ViewData;

	constructor(data) {
		this.data = data;
		// this.setPresenterData();
		this.init();
		// this.setPresenterData();
	}

	init() {
		this.presenterData = this.data;
		// this.setPresenterData();
		// console.log(this.view.size);
		this.view = new View(this.presenterData);

		this.setPresenterData();

		this.view.data = this.presenterData;
		// console.log(this.view.viewData);
		// console.log(this.view.size);
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