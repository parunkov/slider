import {initControl} from './init-control.ts';
import {Scale} from './scale.ts';
import {setControlPrecent} from './set-control-precent.ts';
import {valueTab} from './value-tab.ts';
import {SliderData} from './data.ts';
import {Toggle} from './toggle.ts';

interface ViewData {
	min: number;
	max: number;
}

// export class View {

// 	data: SliderData;
// 	container: HTMLElement;
// 	minToggleElem: HTMLElement;
// 	maxToggleElem: HTMLElement;
// 	minTabElem: HTMLElement;
// 	maxTabElem: HTMLElement;
// 	rangeElem: HTMLElement;
// 	barElem: HTMLElement;
// 	viewData: ViewData;

// 	constructor(data) {
// 		this.data = data;
// 		this.initView();
// 		this.addListener();
// 		this.addScale();
// 		console.log(this);
// 	}

// 	createElements() {
// 		this.container = document.querySelector(this.data.wrapId).querySelector('.ts-slider__container');
// 		// this.minTab = this.sliderContainer.querySelector('.ts-slider__toggle-value--min');
// 		// this.maxTab = this.sliderContainer.querySelector('.ts-slider__toggle-value--max');

// 		this.minToggleElem = this.container.querySelector('.ts-slider__toggle--min');
// 		this.maxToggleElem = this.container.querySelector('.ts-slider__toggle--max');
// 		this.rangeElem = this.container.querySelector('.ts-slider__range');
// 		this.barElem = this.container.querySelector('.ts-slider__bar');

// 		if (!this.data.isTab) {
// 			this.minTabElem.hidden = true;
// 			this.maxTabElem.hidden = true;
// 		}

// 		if (!this.data.isRange) {
// 			this.minToggleElem.hidden = true;
// 		}
// 	}

// 	initView() {
// 		initControl(this.data.wrapId, this.data.isVertical);
// 		this.createElements();

// 		const barWidth: number = this.barElem.offsetWidth;
// 		const barHeight: number = this.barElem.offsetHeight;
// 		let barMax;
// 		let toggleMaxOffset;
// 		let toggleMinOffset;
// 		const setPrecent = (value) => value / barMax * 100;

// 		if (this.data.isVertical) {
// 			barMax = barHeight;
// 			toggleMaxOffset = this.maxToggleElem.offsetTop;
// 			toggleMinOffset = this.minToggleElem.offsetTop;
// 		} else {
// 			barMax = barWidth;
// 			toggleMaxOffset = this.maxToggleElem.offsetLeft;
// 			toggleMinOffset = this.minToggleElem.offsetLeft;
// 		}

// 		let toggleMax = new Toggle(this.maxToggleElem, toggleMinOffset, barMax, toggleMaxOffset, this.data.isVertical);
// 		let toggleMin = new Toggle(this.minToggleElem, 0, toggleMaxOffset, toggleMinOffset, this.data.isVertical);
// 		toggleMax.moveToggle();
// 		toggleMin.moveToggle();
// 		// let minValueTab = new valueTab(this.minTabElem, toggleMin.value);
// 		// let maxValueTab = new valueTab(this.maxTabElem, toggleMax.value);

// 		if (!this.data.isRange) {
// 			toggleMin.value = 0;
// 		}

// 		const setRanre = () => {
// 			toggleMax.min = toggleMin.value;
// 			toggleMin.max = toggleMax.value;
// 			if (this.data.isVertical) {
// 				this.rangeElem.style.top = `${toggleMin.value}px`;
// 				this.rangeElem.style.height = `${(toggleMax.value - toggleMin.value)}px`;
// 			} else {
// 				this.rangeElem.style.left = `${toggleMin.value}px`;
// 				this.rangeElem.style.width = `${(toggleMax.value - toggleMin.value)}px`;
// 			}
// 			// minValueTab.value = toggleMin.value;
// 			// maxValueTab.value = toggleMax.value;
// 			// minValueTab.setValue();
// 			// maxValueTab.setValue();
// 		}
// 		setRanre();

// 	}
// 	addListener() {
// 		// let precent = setControlPrecent(this.container, this.data.isVertical, this.data.isRange, this.data.isTab);


// 		// let minValueTab = new valueTab(this.minTab, this.data.minToggleValue);
// 		// let maxValueTab = new valueTab(this.maxTab, this.data.maxToggleValue);
// 		document.addEventListener('mousemove', () => {
// 			// minValueTab.value = precent.minToggle;
// 			// maxValueTab.value = precent.maxToggle;
// 			// minValueTab.setValue();
// 			// maxValueTab.setValue();
// 			// console.log(precent);
// 		}) ;
// 	}
// 	addScale() {
// 		if (this.data.isScale) {
// 			const scale = new Scale(this.container, this.data.minValue, this.data.maxValue, this.data.scaleQuantity, this.data.isVertical);
// 		}
// 	}
// 	// data() {
// 	// 	console.log(this.data);
// 	// }
// }



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
