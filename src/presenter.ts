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
		this.init();
		this.onMoveToggle();
		this.onChangeTabText();
	}

	setTabText() {
		this.view.viewTabText.min = this.model.tabText.min;
		this.view.viewTabText.max = this.model.tabText.max;
	}

	init() {
		this.view = new View(this.data);
		this.model = new Model(this.data);

		this.view.viewValue.min = toView(this.value.min, this.data.minValue, this.data.maxValue);
		this.view.viewValue.max = toView(this.value.max, this.data.minValue, this.data.maxValue);
		this.setTabText();
		this.view.container.dispatchEvent(new CustomEvent('initValue'));

		this.view.container.addEventListener('changeValue', (evt) => {
			this.model.observer.dispatchEvent(new CustomEvent('changeValue'));
		});
	}

	onMoveToggle() {
		const onChangeView = (evt) => {
			evt.preventDefault();
			this.model.value.min = toModel(this.view.viewValue.min, this.data.minValue, this.data.maxValue);
			this.model.value.max = toModel(this.view.viewValue.max, this.data.minValue, this.data.maxValue);
			this.model.observer.dispatchEvent(new CustomEvent('changeValue'))

		}
		this.view.container.addEventListener('moveToggle', onChangeView);
	}

	onChangeTabText() {
		this.model.observer.addEventListener('changeTabText', (evt) => {
			evt.preventDefault();
			this.setTabText();
			this.view.container.dispatchEvent(new CustomEvent('changeTab'));
		});
	}
}

export {Presenter};