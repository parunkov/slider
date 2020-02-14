import {View, Value, TabText} from './view.ts';
import {Data} from './data.ts';
import {Model} from './model.ts';
import {setMouseHandler, round} from './functions.ts';

const toView = (value: number, min: number, max: number) => (value - min) / (max - min);
const toModel = (value: number, min: number, max: number) => (min + (max - min) * value);

class Presenter {

	data: Data;
	view: View;
	model: Model;
	max: number;
	min: number;
	value: Value;
	// viewValue: Value;
	// modelValue: Value;
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
		this.view.viewTabText.min = this.model.tabText.min;
		this.view.viewTabText.max = this.model.tabText.max;
	}

	initScale() {
		this.view.scale = this.model.scale;
		this.view.container.dispatchEvent(new CustomEvent('initScale'));
	}

	init() {
		this.view = new View(this.data);
		this.model = new Model(this.data);
		this.initScale();
		this.view.viewValue.min = toView(this.value.min, this.data.minValue, this.data.maxValue);
		this.view.viewValue.max = toView(this.value.max, this.data.minValue, this.data.maxValue);
		this.model.precent = this.view.viewValue;
		this.model.observer.dispatchEvent(new CustomEvent('setPrecent'));
		this.setTabText();
		this.view.container.dispatchEvent(new CustomEvent('initValue'));

		this.view.container.addEventListener('changeValue', () => {
			this.model.observer.dispatchEvent(new CustomEvent('changeValue'));
		});
	}

	onMoveToggle() {
		const onChangeView = () => {
			this.model.value.min = toModel(this.view.viewValue.min, this.data.minValue, this.data.maxValue);
			this.model.value.max = toModel(this.view.viewValue.max, this.data.minValue, this.data.maxValue);
			this.model.observer.dispatchEvent(new CustomEvent('changeValue'));
			// console.log(this.model.value);
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
			this.value.min = +this.model.value.min;
			this.value.max = +this.model.value.max;
			this.view.viewValue.min = toView(this.value.min, this.data.minValue, this.data.maxValue);
			this.view.viewValue.max = toView(this.value.max, this.data.minValue, this.data.maxValue);
			this.view.container.dispatchEvent(new CustomEvent('initValue'));
			this.view.onViewCange();
			this.view.setToggle();
			// this.view.minToggleElem.style.left = this.view.viewValue.min * this.view.size + 'px';
			// this.view.viewTabText.min = this.model.tabText.min;
			// console.log(this.view.viewValue.min);
		});
	}
}

export {toView, toModel, Presenter};