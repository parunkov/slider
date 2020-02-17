interface Data {
	wrapId: string;
	minInputId: string;
	maxInputId: string;
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

interface Value {
	min: number;
	max: number;
}

interface TabText {
	min: string;
	max: string;
}

export {Data, Value, TabText};