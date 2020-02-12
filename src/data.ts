import {setLimit} from './functions.ts';

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
	minToggleValue: 39.67,
	maxToggleValue: 72.33,
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
	step: 1,
	minValue: 0,
	maxValue: 4,
	minToggleValue: 2,
	maxToggleValue: 3,
	isRange: true,
	isVertical: true,
	isTab: true,
	isScale: true,
	scaleQuantity: 5
}

const setDataLimit = (data: Data) => {
	data.minToggleValue = setLimit(data.minToggleValue, data.minValue, data.maxValue);
	data.maxToggleValue = setLimit(data.maxToggleValue, data.minValue, data.maxValue);
}

setDataLimit(sliderData1);
setDataLimit(sliderData2);

export {Data, sliderData1, sliderData2};