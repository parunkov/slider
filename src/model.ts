import {Data} from './data.ts';
import {Value, TabText} from './view.ts';
import {setMouseHandler, round} from './functions.ts';


class Model {

	data: Data;
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
		this.precent {
			min: 0,
			max: 0
		}
		this.scale = [];
		this.observer = document.createElement('Event');
		this.init();
		this.setScale();
		this.addListener();
	}

	init() {
		if (this.data.isArray) {
			this.tabText.min = '!!!';
			this.tabText.max = '&&&';
		} else {
			this.tabText.min = round(this.data.minToggleValue, this.data.step);
			this.tabText.max = round(this.data.maxToggleValue, this.data.step);
		}
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
					// console.log(text);
					this.scale.push(text);
				}
				// console.log(this.scale);
			}
		}
	}

	addListener() {
		this.observer.addEventListener('changeValue', (evt) => {
			this.tabText.min = round(this.value.min, this.data.step);
			this.tabText.max = round(this.value.max, this.data.step);
			this.observer.dispatchEvent(new CustomEvent('changeTabText'));
		});
	}
}

export {Model};