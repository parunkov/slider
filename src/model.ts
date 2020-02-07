import {SliderData} from './data.ts';
import {ViewData} from './view.ts';
import {setMouseHandler} from './functions.ts';


class Model {

	data: SliderData;
	modelData: ViewData;

	constructor(data) {
		this.data = data;
		this.addListener();
	}

	addListener() {
		const onMouseMove = (evt) => {
			console.log(this.modelData);
		}
		setMouseHandler(document, onMouseMove);
	}
}

export {Model};