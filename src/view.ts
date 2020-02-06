import {initControl} from './init-control.ts';
import {Scale} from './scale.ts';
import {precent, setControlPrecent} from './set-control-precent.ts';
import {valueTab} from './value-tab.ts';
import {SliderData} from './data.ts';
import {setToggleStyle} from './toggle.ts';

interface ViewData {
	min: number;
	max: number;
}

export class View {

	data: SliderData;
	viewData: ViewData;
	container: HTMLElement;
	minToggleElem: HTMLElement;
	maxToggleElem: HTMLElement;
	minTabElem: HTMLElement;
	maxTabElem: HTMLElement;
	size: number;

	constructor(data) {
		this.data = data;
		this.initView();
		// this.setTabValue();
		this.addListener();
		this.addScale();
	}

	initView() {
		initControl(this.data.wrapId, this.data.isVertical);
		this.container = document.querySelector(this.data.wrapId).querySelector('.ts-slider__container');
		if (this.data.isVertical) {
			this.size = this.container.offsetHeight;
		} else {
			this.size = this.container.offsetWidth;
		}
		this.minToggleElem = this.container.querySelector('.ts-slider__toggle--min');
		this.maxToggleElem = this.container.querySelector('.ts-slider__toggle--max');
		setToggleStyle(this.minToggleElem, this.data.minToggleValue * this.size / 100, this.data.isVertical);
		setToggleStyle(this.maxToggleElem, this.data.maxToggleValue * this.size / 100, this.data.isVertical);
		this.minTabElem = this.container.querySelector('.ts-slider__toggle-value--min');
		this.maxTabElem = this.container.querySelector('.ts-slider__toggle-value--max');
		this.minTabElem.textContent = `${this.data.minToggleValue}`;
		this.maxTabElem.textContent = `${this.data.maxToggleValue}`;
	}

	// setTabValue() {
	// 	this.minTabElem.textContent = `${this.data.minToggleValue}`;
	// 	this.maxTabElem.textContent = `${this.data.maxToggleValue}`;
	// }

	addListener() {
		setControlPrecent(this.container, this.data.isVertical, this.data.isRange, this.data.isTab);
		const onMouseDown = (evt) => {
			evt.preventDefault();
			
			const onMouseMove = (moveEvt) => {
				this.viewData = precent;
				// console.log(this.viewData);
				this.minTabElem.textContent = `${Math.round(this.viewData.min)}`;
				this.maxTabElem.textContent = `${Math.round(this.viewData.max)}`;
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
