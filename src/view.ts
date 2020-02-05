import {initControl} from './init-control.ts';
import {Scale} from './scale.ts';
import {setControlPrecent} from './set-control-precent.ts';
import {valueTab} from './value-tab.ts';
import {SliderData} from './data.ts';

export class View {

	data: SliderData;
	sliderContainer: HTMLElement;
	minTab: HTMLElement;
	maxTab: HTMLElement;

	constructor(data) {
		this.data = data;
		this.initView();
		this.addListener();
		this.addScale();
	}

	initView() {
		initControl(this.data.wrapId, this.data.isVertical);
		this.sliderContainer = document.querySelector(this.data.wrapId).querySelector('.ts-slider__container');
		this.minTab = this.sliderContainer.querySelector('.ts-slider__toggle-value--min');
		this.maxTab = this.sliderContainer.querySelector('.ts-slider__toggle-value--max');
	}
	addListener() {
		let precent = setControlPrecent(this.sliderContainer, this.data.isVertical, this.data.isRange, this.data.isTab);
		// let minValueTab = new valueTab(this.minTab, this.data.minToggleValue);
		// let maxValueTab = new valueTab(this.maxTab, this.data.maxToggleValue);
		document.addEventListener('mousemove', () => {
			// minValueTab.value = precent.minToggle;
			// maxValueTab.value = precent.maxToggle;
			// minValueTab.setValue();
			// maxValueTab.setValue();
			// console.log(precent);
		}) ;
	}
	addScale() {
		if (this.data.isScale) {
			const scale = new Scale(this.sliderContainer, this.data.minValue, this.data.maxValue, this.data.scaleQuantity, this.data.isVertical);
		}
	}
	// data() {
	// 	console.log(this.data);
	// }
}
