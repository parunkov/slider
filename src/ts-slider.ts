import {View} from './view.ts';
import {Presenter} from './presenter.ts';
import {SliderData} from './data.ts';

class TsSlider {

	data: SliderData;
	presenter: any;
	view: any;

	constructor(data) {
		this.data = data;
		this.presenter = new Presenter(data);
		this.view = new View(this.presenter.presenterData);
		console.log(this.view.viewData);
		this.presenter.viewData = this.view.viewData;
		console.log(this.presenter.viewData);
	}

	init() {

	}
}

export {TsSlider};