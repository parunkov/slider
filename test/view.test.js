import {$} from '../node_modules/jquery/dist/jquery.js';
import {View} from '../src/view.ts';

describe('Модуль View', function() {

	let sliderWrap;
	let view;
	const data = {
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
		view = new View(data, sliderWrap);
	}
	
	it('Устанавливает view.data', function() {
		add();
		expect(view.data).toBe(data);
		sliderWrap.remove();
	});
	it('Создает view', function() {
		add();
		expect(view.minToggleElem).toBeDefined();
		expect(view.maxToggleElem).toBeDefined();
		expect(view.minTabElem).toBeDefined();
		expect(view.maxTabElem).toBeDefined();
		expect(view.rangeElem).toBeDefined();
		sliderWrap.remove();
	});
	it('Скрывает minToggle', function() {
		add();
		expect(view.minToggleElem.hidden).toBe(false);
		view.data.isRange = false;
		view.initView();
		expect(view.minToggleElem.hidden).toBe(true);
		sliderWrap.remove();
	});
	it('Устанавливает view.tabText', function() {
		add();
		expect(view.tabText).toEqual({min: '', max: ''});
		sliderWrap.remove();
	});	
	it('Устанавливает view.precent', function() {
		add();
		expect(view.precent).toEqual({min: 0, max: 0});
		sliderWrap.remove();
	});	
	it('Устанавливает стиль бегунков', function() {
		add();
		view.createToggle();
		expect(view.minToggleElem.style.left).toEqual('30px');
		expect(view.maxToggleElem.style.left).toEqual('50px');
		sliderWrap.remove();
	});
	it('Создает шкалу', function() {
		add();
		expect(view.scale).toBeDefined;
		sliderWrap.remove();
	});
	it('Меняет текст tab', function() {
		add();
		view.tabText.min = 'aaa';
		view.tabText.max = 'sss';
		view.container.dispatchEvent(new CustomEvent('changeTab'));
		expect(view.minTabElem.textContent).toEqual('aaa');
		expect(view.maxTabElem.textContent).toEqual('sss');
		sliderWrap.remove();
	});
	// it('Отображает изменение input', function() {
	// 	// add();
	// 	const minIput = setFixtures()[0];
	// 	const maxIput = setFixtures()[0];
	// 	minIput.setAttribute('id','page__input-1');
	// 	minIput.setAttribute('id','page__input-2');
	// 	document.body.appendChild(minIput);
	// 	document.body.appendChild(maxIput);
	// 	add();
	// 	// minIput.value = '2';
	// 	// maxIput.value = '4';
	// 	view.precent.min = 0.2;
	// 	view.changeInput();
	// 	view.container.dispatchEvent(new CustomEvent('changeInput'));
	// 	console.log(view.minToggle.precent);
	// 	expect(view.minToggleElem.textContent).toEqual('2');
	// 	sliderWrap.remove();
	// });
});