import {View} from './view.ts';
import {Data, Value, TabText} from './interfaces.ts';
import {Model} from './model.ts';
import {setMouseHandler, round, setRangeStyle, toPrecent, toValue} from './functions.ts';
import {markup} from './init-view-markup.ts';

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
		this.view.precent.min = toPrecent(this.value.min, this.data.minValue, this.data.maxValue);
		this.view.precent.max = toPrecent(this.value.max, this.data.minValue, this.data.maxValue);
		// console.log(this.view.precent);
	}

	setToModel() {
		this.model.value.min = toValue(this.view.precent.min, this.data.minValue, this.data.maxValue);
		this.model.value.max = toValue(this.view.precent.max, this.data.minValue, this.data.maxValue);
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
			this.setToView();
			this.setToModel();
			this.view.container.dispatchEvent(new CustomEvent('changeInput'));
		});
	}
}

export {Presenter};