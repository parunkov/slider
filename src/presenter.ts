import {View, Value, TabText} from './view.ts';
import {Data} from './data.ts';
import {Model} from './model.ts';

import {setMouseHandler, round} from './functions.ts';

const toView = (value, min, max) => (value - min) / (max - min);
const toModel = (value, min, max) => (min + (max - min) * value);

class Presenter {

	data: Data;
	view: View;
	model: Model;
	max: number;
	min: number;
	value: Value;
	viewValue: Value;
	modelValue: Value;
	modelTabText: TabText;

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

	initScale() {
		console.log(this.model.scale);
		this.view.scale = this.model.scale;
		this.view.container.dispatchEvent(new CustomEvent('initScale'));
	}

	init() {
		this.view = new View(this.data);
		this.model = new Model(this.data);

		this.initScale();

		this.view.viewValue.min = toView(this.value.min, this.data.minValue, this.data.maxValue);
		this.view.viewValue.max = toView(this.value.max, this.data.minValue, this.data.maxValue);

		console.log(this.view.viewValue);

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