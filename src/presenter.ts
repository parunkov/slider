import {View} from './view.ts';
import {Data, Value, TabText} from './interfaces.ts';
import {Model} from './model.ts';
import {setMouseHandler, round, setRangeStyle} from './functions.ts';
import {markup} from './init-view-markup.ts';

const toView = (value: number, min: number, max: number) => (value - min) / (max - min);
const toModel = (value: number, min: number, max: number) => (min + (max - min) * value);

class Presenter {

	data: Data;
	view: View;
	model: Model;
	max: number;
	min: number;
	value: Value;
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
		this.onCangeInput();
	}

	setTabText() {
		this.view.tabText.min = this.model.tabText.min;
		this.view.tabText.max = this.model.tabText.max;
	}

	initScale() {
		this.view.scale = this.model.scale;
		this.view.container.dispatchEvent(new CustomEvent('initScale'));
	}

	setToView() {
		this.view.precent.min = toView(this.value.min, this.data.minValue, this.data.maxValue);
		this.view.precent.max = toView(this.value.max, this.data.minValue, this.data.maxValue);
		// console.log(this.view.precent);
	}

	setToModel() {
		this.model.value.min = toModel(this.view.precent.min, this.data.minValue, this.data.maxValue);
		this.model.value.max = toModel(this.view.precent.max, this.data.minValue, this.data.maxValue);
	}

	init() {
		this.view = new View(this.data);
		this.model = new Model(this.data);
		this.initScale();
		this.setToView();
		this.model.precent = this.view.precent;
		this.model.observer.dispatchEvent(new CustomEvent('setPrecent'));
		this.setTabText();
		this.view.setTab();
		this.view.container.dispatchEvent(new CustomEvent('initValue'));

		this.view.container.addEventListener('changeValue', () => {
			this.model.observer.dispatchEvent(new CustomEvent('changeValue'));
		});
	}

	onMoveToggle() {
		const onChangeView = () => {
			this.setToModel();
			this.model.observer.dispatchEvent(new CustomEvent('changeValue'));
		}
		this.view.container.addEventListener('moveToggle', onChangeView);
	}

	onChangeTabText() {
		this.model.observer.addEventListener('changeTabText', () => {
			this.setTabText();
			this.view.container.dispatchEvent(new CustomEvent('changeTab'));
		});
	}
	onCangeInput() {
		this.model.observer.addEventListener('changeInput', () => {
			this.view.tabText = this.model.tabText;
			this.value.min = +this.model.value.min;
			this.value.max = +this.model.value.max;
			// console.log(this.value.min + ' ' + this.value.max);
			this.setToView();
			this.setToModel();
			// console.log(111);
			// console.log(this.view.viewValue);
			// this.view.container.dispatchEvent(new CustomEvent('changeInput'));
			const range: HTMLElement = markup(this.view.container).range;
			setRangeStyle(range, this.view.precent.min * this.view.size, this.view.precent.max * this.view.size, this.data.isVertical);
			// console.log(this.view.viewValue.min * this.view.size + ' ' + this.view.viewValue.max * this.view.size);
			this.view.container.dispatchEvent(new CustomEvent('changeInput'));
			// this.view.container.dispatchEvent(new CustomEvent('moveToggle'));
		});
	}
}

export {toView, toModel, Presenter};