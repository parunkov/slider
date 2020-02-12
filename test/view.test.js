import {$} from '../node_modules/jquery/dist/jquery.js';
import {View} from '../src/view.ts';

describe('Модуль View', function() {

	let sliderWrap;
	let view;
	const data = {
		wrapId: '#viewwrapid',
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
	const add = () => {
		sliderWrap = setFixtures()[0];
		sliderWrap.setAttribute('id','viewwrapid');
		sliderWrap.style.width = '100px';
		document.body.appendChild(sliderWrap);
		view = new View(data);
		// console.log(view);
	}
	
	it('Устанавливает view.data', function() {
		add();
		expect(view.data).toBe(data);
		sliderWrap.remove();
	});
	it('Устанавливает view.viewValue', function() {
		add();
		expect(view.viewValue).toEqual({min: 0, max: 0});
		sliderWrap.remove();
	});	
	it('Устанавливает view.viewTabText', function() {
		add();
		expect(view.viewTabText).toEqual({min: '', max: ''});
		sliderWrap.remove();
	});	
	it('vertical - добавляет модификатор', function() {
		add();
		view.viewValue = {min: 0.2, max: 0.8};
		view.container.dispatchEvent(new CustomEvent('initValue'));
		view.setToggle();
		console.log(view.minToggleElem.style.left);
		expect().to;
		sliderWrap.remove();
	});
	it('vertical - добавляет модификатор', function() {
		add();
		expect().to;
		sliderWrap.remove();
	});
});