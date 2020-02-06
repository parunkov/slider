import {initControl} from './init-control.ts';
import {Scale} from './scale.ts';
import {precent, setControlPrecent} from './set-control-precent.ts';
import {valueTab} from './value-tab.ts';
import {SliderData} from './data.ts';
import {Toggle} from './toggle.ts';

interface ViewData {
	min: number;
	max: number;
}

export class View {

	data: SliderData;
	viewData: ViewData;
	container: HTMLElement;
	minTabElem: HTMLElement;
	maxTabElem: HTMLElement;

	constructor(data) {
		this.data = data;
		this.initView();
		this.addListener();
		this.addScale();
	}

	initView() {
		initControl(this.data.wrapId, this.data.isVertical);
		this.container = document.querySelector(this.data.wrapId).querySelector('.ts-slider__container');
		this.minTabElem = this.container.querySelector('.ts-slider__toggle-value--min');
		this.maxTabElem = this.container.querySelector('.ts-slider__toggle-value--max');
	}
	addListener() {
		setControlPrecent(this.container, this.data.isVertical, this.data.isRange, this.data.isTab);
		const onMouseDown = (evt) => {
			evt.preventDefault();
			
			const onMouseMove = (moveEvt) => {
				this.viewData = precent;
				console.log(this.viewData);
			}
			const onMouseUp = (upEvt) => {
				upEvt.preventDefault();
				document.removeEventListener('mouseup', onMouseUp);
				document.removeEventListener('mousemove', onMouseMove);
			}
			document.addEventListener('mousemove', onMouseMove);
			document.addEventListener('mouseup', onMouseUp);
		}

		document.addEventListener('mousedown', onMouseDown);
	}
	addScale() {
		if (this.data.isScale) {
			const scale = new Scale(this.container, this.data.minValue, this.data.maxValue, this.data.scaleQuantity, this.data.isVertical);
		}
	}
}
