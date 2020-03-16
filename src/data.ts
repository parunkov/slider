import { setLimit } from './functions.ts';
import { Data } from './interfaces.ts';

const defaultData: Data = {
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
  scaleQuantity: 4,
};

const setDataLimit = (data: Data) => {
  const dataCopy = data;
  dataCopy.minToggleValue = setLimit(data.minToggleValue, data.minValue, data.maxValue);
  dataCopy.maxToggleValue = setLimit(data.maxToggleValue, data.minValue, data.maxValue);
  return dataCopy;
};

export {
  setDataLimit,
  defaultData,
};
