import {Data} from './data.ts';
import {Value, TabText} from './view.ts';
import {setMouseHandler, round} from './functions.ts';


class Model {

	data: Data;
	minInput: any;
	maxInput: any;
	value: Value;
	precent: Value;
	tabText: TabText;
	observer: HTMLElement;
	min: number;
	max: number;
	scale: string[];

	constructor(data) {
		this.data = data;
		this.tabText = {
			min: '',
			max: ''
		}
		this.value = {
			min: 0,
			max: 0
		}
		this.precent = {
			min: 0,
			max: 0
		}
		this.scale = [];
		this.observer = document.createElement('Event');
		this.init();
		this.setScale();
		this.addListener();
		this.changeInput();
	}

	setInput() {
		this.minInput.value = this.tabText.min;
		this.maxInput.value = this.tabText.max;
		// console.log('set');
	}

	setArrayValue() {
		let min = Math.round(this.precent.min * (this.data.array.length - 1));
		let max = Math.round(this.precent.max * (this.data.array.length - 1));
		this.tabText.min = this.data.array[min];
		this.tabText.max = this.data.array[max];
		this.setInput();
	}

	init() {
		if (this.data.isArray) {
			this.observer.addEventListener('setPrecent', () => {
				this.setArrayValue();
			});
		} else {
			this.tabText.min = round(this.data.minToggleValue, this.data.step);
			this.tabText.max = round(this.data.maxToggleValue, this.data.step);
		}
		this.minInput = document.querySelector('#' + this.data.minInputId);
		this.maxInput = document.querySelector('#' + this.data.maxInputId);
		this.setInput();
	}

	setScale() {
		if (this.data.isArray) {
			if (this.data.isScale) {
				this.scale = this.data.array;
			}
		} else {
			if (this.data.isScale) {
				let quantity = this.data.scaleQuantity;
				if (quantity < 2) {
					quantity = 2;
				}
				for (let i = 0; i < quantity; i++) {
					let textValue: number = Math.round((this.data.minValue + (this.data.maxValue - this.data.minValue) / (quantity - 1) * i) / this.data.step) * this.data.step;
					let text: string = round(textValue, this.data.step);
					this.scale.push(text);
				}
			}
		}
	}

	addListener() {
		this.observer.addEventListener('changeValue', () => {
			if (this.data.isArray) {
				this.setArrayValue();
			} else {
				this.tabText.min = round(this.value.min, this.data.step);
				this.tabText.max = round(this.value.max, this.data.step);
			}
			this.setInput();
			this.observer.dispatchEvent(new CustomEvent('changeTabText'));
		});
	}
	changeInput() {
		const onBlur = () => {
			this.value.min = +this.minInput.value;
			this.value.max = +this.maxInput.value;
			this.tabText.min = round(this.minInput.value, this.data.step);
			this.tabText.max = round(this.maxInput.value, this.data.step);
			this.observer.dispatchEvent(new CustomEvent('changeInput'));
		}
		this.minInput.addEventListener('blur', onBlur);
		this.maxInput.addEventListener('blur', onBlur);
	}
}

export {Model};