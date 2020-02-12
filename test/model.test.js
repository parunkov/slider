import {$} from '../node_modules/jquery/dist/jquery.js';
import {Model} from '../src/model.ts';

describe('Модуль Model', function() {

	let sliderWrap;
	let model;
	const data = {
		wrapId: '#modelwrapid',
		isArray: false,
		array: [],
		step: 1,
		minValue: 0,
		maxValue: 10,
		minToggleValue: 3,
		maxToggleValue: 5,
		isRange: true,
		isVertical: false,
		isTab: true,
		isScale: true,
		scaleQuantity: 4
	}
	const add = () => {
		sliderWrap = setFixtures()[0];
		sliderWrap.setAttribute('id','modelwrapid');
		document.body.appendChild(sliderWrap);
		model = new Model(data);
	}
	
	it('Устанавливает model.data', function() {
		add();
		expect(model.data).toBe(data);
		sliderWrap.remove();
	});
	it('Устанавливает model.value', function() {
		add();
		expect(model.value).toEqual({min: 0, max: 0});
		sliderWrap.remove();
	});	
	it('Устанавливает model.TabText', function() {
		add();
		model.value = {min: 10, max: 20};
		model.observer.dispatchEvent(new CustomEvent('changeValue'));
		expect(model.tabText).toEqual({min: '10', max: '20'});
		sliderWrap.remove();
	});	
	// it('', function() {
	// 	add();
	// 	expect().to;
	// 	sliderWrap.remove();
	// });
});