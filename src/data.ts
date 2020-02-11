interface Data {
	wrapId: string;
	isArray: boolean;
	array: string[];
	step: number;
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

const sliderData1: Data = {
	wrapId: '#ts-slider__wrap-1',
	isArray: false,
	array: [],
	step: 0.01,
	minValue: 7,
	maxValue: 105,
	minToggleValue: 30,
	maxToggleValue: 60,
	isRange: true,
	isVertical: false,
	isTab: true,
	isScale: true,
	scaleQuantity: 4
}
const sliderData2: Data = {
	wrapId: '#ts-slider__wrap-2',
	isArray: true,
	array: ['мало', 'немного', 'средне', 'больше', 'много'],
	step: 10,
	minValue: 102,
	maxValue: 308,
	minToggleValue: 200,
	maxToggleValue: 250,
	isRange: true,
	isVertical: true,
	isTab: true,
	isScale: true,
	scaleQuantity: 5
}

export {Data, sliderData1, sliderData2};