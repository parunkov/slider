import {$} from '../node_modules/jquery/dist/jquery.js';
import {setViewValue} from '../src/set-view-value.ts';


describe('Функция setViewValue', function() {
	let slider;
	// let bar;
	let sliderData1;
	const add = () => {
		slider = setFixtures()[0];
		document.body.appendChild(slider);
		sliderData1 = {
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
	}
	it('Возвращает min = 0 и max = 0', function() {
		add();
		expect(setViewValue(slider, sliderData1).min).toEqual(0);
		expect(setViewValue(slider, sliderData1).max).toEqual(0);
	});
});