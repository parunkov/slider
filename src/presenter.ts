import {View, ViewData} from './view.ts';
import {SliderData} from './data.ts';

class Presenter {

	data: SliderData;
	view: any;
	presenterData: SliderData;
	viewData: ViewData;

	constructor(data) {
		this.data = data;
		this.setPresenterData();
		this.init();
	}

	init() {
		this.view = new View(this.presenterData);
		console.log(this.view.viewData);
	}

	setPresenterData() {
		// console.log(this.data);
		this.presenterData = this.data;
		// console.log(this.presenterData);
		// this.presenterData.maxToggleValue = 60;
		
	}
}

export {Presenter};