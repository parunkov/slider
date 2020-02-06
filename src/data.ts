interface SliderData {
	wrapId: string;
	minValue: number;
	maxValue: number;
	minToggleValue: number;
	maxToggleValue: number;
	isRange: boolean;
	isVertical: boolean;
	isTab: boolean;
	isScale: boolean;
	scaleQuantity: number;
}

const sliderData1: SliderData = {
	wrapId: '#ts-slider__wrap-1',
	minValue: 30,
	maxValue: 100,
	minToggleValue: 53,
	maxToggleValue: 77,
	isRange: true,
	isVertical: false,
	isTab: true,
	isScale: true,
	scaleQuantity: 4
}
const sliderData2: SliderData = {
	wrapId: '#ts-slider__wrap-2',
	minValue: 100,
	maxValue: 300,
	minToggleValue: 200,
	maxToggleValue: 250,
	isRange: true,
	isVertical: true,
	isTab: true,
	isScale: true,
	scaleQuantity: 4
}

export {SliderData, sliderData1, sliderData2};