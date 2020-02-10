import {View, ViewValue, ViewTabText} from './view.ts';
import {SliderData} from './data.ts';
// import {round} from './functions.ts';
import {Model} from './model.ts';

// import {setViewValue} from './set-view-value.ts';
import {setMouseHandler, round} from './functions.ts';

class Presenter {

	data: SliderData;
	view: any;
	model: any;
	presenterData: SliderData;
	viewValue: ViewValue;
	modelValue: ViewValue;

	constructor(data) {
		this.data = data;
		this.init();
		this.addListener();
	}

	init() {
		this.presenterData = this.data;
		this.view = new View(this.presenterData);
		this.model = new Model(this.presenterData);
		this.view.data = this.presenterData;
		this.viewValue = this.view.viewValue;
		this.modelValue = this.view.viewValue;
		const setTabValue = (value) => Math.round((this.data.minValue + (this.data.maxValue - this.data.minValue) * value / 100) / this.data.step) * this.data.step;
		this.view.container.addEventListener('changeValue', (evt) => {
			this.modelValue.min = +round(setTabValue(this.viewValue.min), this.data.step);
			this.modelValue.max = +round(setTabValue(this.viewValue.max), this.data.step);
			// this.model.modelValue = modelValue;
			this.model.observer.dispatchEvent(new CustomEvent('changeValue'));
		});
	}

	addListener() {
		// this.view.viewValue = setViewValue(this.view.container, this.view.data);
		const onMouseMove = (moveEvt) => {
			const setTabValue = (value) => Math.round((this.data.minValue + (this.data.maxValue - this.data.minValue) * value / 100) / this.data.step) * this.data.step;
			this.view.viewTabText.min = round(setTabValue(this.view.viewValue.min), this.view.data.step);
			this.view.viewTabText.max = round(setTabValue(this.view.viewValue.max), this.view.data.step);
			console.log(this.viewValue);
			// console.log(this.view.viewTabText);
			// // console.log(this.view.viewValue);
			// this.view.container.dispatchEvent(new CustomEvent('changeValue'));
		}
		setMouseHandler(document, onMouseMove);
	}

	setPresenterData() {
		
	}
}

export {Presenter};