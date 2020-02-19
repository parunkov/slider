import {setLimit} from './functions.ts';
import {Data} from './interfaces.ts';

const defaultData: Data = {
	// wrapId: '#ts-slider__wrap-1',
	minInputId: 'ts-slider__min-input',
	maxInputId: 'ts-slider__max-input',
	isArray: false,
	array: [],
	step: 1,
	minValue: 0,
	maxValue: 100,
	minToggleValue: 25,
	maxToggleValue: 75,
	isRange: true,
	isVertical: false,
	isTab: true,
	isScale: true,
	scaleQuantity: 4
}
// const sliderData2: Data = {
// 	// wrapId: '#ts-slider__wrap-2',
// 	minInputId: 'page__input-21',
// 	maxInputId: 'page__input-22',
// 	isArray: true,
// 	array: ['мало', 'немного', 'средне', 'больше', 'много'],
// 	step: 1,
// 	minValue: 0,
// 	maxValue: 10,
// 	minToggleValue: 2,
// 	maxToggleValue: 8,
// 	isRange: true,
// 	isVertical: true,
// 	isTab: true,
// 	isScale: true,
// 	scaleQuantity: 5
// }

const setDataLimit = (data: Data) => {
	data.minToggleValue = setLimit(data.minToggleValue, data.minValue, data.maxValue);
	data.maxToggleValue = setLimit(data.maxToggleValue, data.minValue, data.maxValue);
}

// setDataLimit(sliderData1);
// setDataLimit(sliderData2);

export {setDataLimit, defaultData};