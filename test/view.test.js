import {$} from '../node_modules/jquery/dist/jquery.js';
import {View} from '../src/view.ts';

describe('Модуль View', function() {

	let sliderWrap;
	let view;
	const data = {
		wrapId: '#viewwrapid',
		minInputId: 'page__input-1',
		maxInputId: 'page__input-2',
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
		sliderWrap.setAttribute('id','viewwrapid');
		sliderWrap.style.width = '100px';
		document.body.appendChild(sliderWrap);
		view = new View(data);
		// console.log(view);
	}
	
	// it('Устанавливает view.data', function() {
	// 	add();
	// 	expect(view.data).toBe(data);
	// 	sliderWrap.remove();
	// });
	// it('Устанавливает view.precent', function() {
	// 	add();
	// 	expect(view.precent).toEqual({min: 0, max: 0});
	// 	sliderWrap.remove();
	// });	
	// it('Устанавливает view.tabText', function() {
	// 	add();
	// 	expect(view.tabText).toEqual({min: '', max: ''});
	// 	sliderWrap.remove();
	// });	
	// it('Устанавливает стиль бегунков', function() {
	// 	add();
	// 	view.createToggle();
	// 	expect(view.minToggleElem.style.left).toEqual('30px');
	// 	expect(view.maxToggleElem.style.left).toEqual('50px');
	// 	sliderWrap.remove();
	// });
	// it('Создает шкалу', function() {
	// 	add();
	// 	expect(view.scale).toBeDefined;
	// 	sliderWrap.remove();
	// });
});