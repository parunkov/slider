import {SliderData} from './data.ts';
import {ViewData} from './view.ts';
import {setMouseHandler} from './functions.ts';


class Model {

	data: SliderData;
	modelData: ViewData;
	observer: HTMLElement;

	constructor(data) {
		this.data = data;
		this.observer = document.createElement('Event');
		this.addListener();
	}

	addListener() {
		// const onMouseMove = (evt) => {
		// 	console.log(this.modelData);
		// }
		// setMouseHandler(document, onMouseMove);
		console.log(this.observer);
		this.observer.addEventListener('changeValue', (evt) => {
			console.log(this.modelData);
		});
	}
}

export {Model};