import {SliderData} from './data.ts';
import {ViewValue, ViewTabText} from './view.ts';
import {setMouseHandler, round} from './functions.ts';


class Model {

	data: SliderData;
	value: ViewValue;
	tabText: ViewTabText;
	observer: HTMLElement;
	min: number;
	max: number;

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
		this.observer = document.createElement('Event');
		this.init();
		this.addListener();
	}

	init() {
		this.tabText.min = round(this.data.minToggleValue, this.data.step);
		this.tabText.max = round(this.data.maxToggleValue, this.data.step);
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