// import {sliderData} from './data.ts';
import {initControl} from './init-control.ts';
import {Scale} from './scale.ts';
// import {View} from './view.ts';
import {addControlListener} from './add-control-listener.ts';

export class View {

	sliderData: any;
	sliderContainer: HTMLElement;

	constructor(data) {
		this.sliderData = data;
		this.initView();
		this.addListener();
		this.addScale();
	}

	initView() {
		initControl(this.sliderData.wrapId, this.sliderData.isVertical);
		this.sliderContainer = document.querySelector(this.sliderData.wrapId).querySelector('.ts-slider__container');
	}
	addListener() {
		addControlListener(this.sliderContainer, this.sliderData.isVertical, this.sliderData.isRange, this.sliderData.isTab);
	}
	addScale() {
		if (this.sliderData.isScale) {
			const scale = new Scale(this.sliderContainer, this.sliderData.scaleQuantity, this.sliderData.isVertical);
		}
	}
	data() {
		console.log(this.sliderData);
	}
}
