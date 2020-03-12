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
	beforeEach(function() {
		sliderWrap = setFixtures()[0];
		sliderWrap.setAttribute('id','viewwrapid');
		document.body.style.position = 'absolute';
		sliderWrap.style.position = 'absolute';
		sliderWrap.style.left = '0';
		sliderWrap.style.top = '0';
		sliderWrap.style.width = '100px';
		document.body.appendChild(sliderWrap);
		// document.body.style.position = 'absolute';
		view = new View(data, sliderWrap);
	});
	afterEach(function() {
		sliderWrap.remove();
		view = undefined;
	});
	
	it('Устанавливает view.data', function() {
		expect(view.data).toBe(data);
	});
	it('Создает view', function() {
		expect(view.minToggleElem).toBeDefined();
		expect(view.maxToggleElem).toBeDefined();
		expect(view.minTabElem).toBeDefined();
		expect(view.maxTabElem).toBeDefined();
		expect(view.rangeElem).toBeDefined();
	});
	it('Скрывает minToggle', function() {
		expect(view.minToggleElem.hidden).toBe(false);
		view.data.isRange = false;
		view.initView();
		expect(view.minToggleElem.hidden).toBe(true);
	});
	it('Устанавливает view.tabText', function() {
		expect(view.tabText).toEqual({min: '', max: ''});
	});	
	it('Устанавливает view.precent', function() {
		expect(view.precent).toEqual({min: 0, max: 0});
	});	
	it('Устанавливает стиль бегунков', function() {
		view.createToggle();
		expect(view.minToggleElem.style.left).toEqual('30px');
		expect(view.maxToggleElem.style.left).toEqual('50px');
	});
	it('Создает шкалу', function() {
		expect(view.scale).toBeDefined;
	});
	it('Меняет текст tab', function() {
		view.tabText.min = 'aaa';
		view.tabText.max = 'sss';
		view.container.dispatchEvent(new CustomEvent('changeTab'));
		expect(view.minTabElem.textContent).toEqual('aaa');
		expect(view.maxTabElem.textContent).toEqual('sss');
	});
	it('Разделяет бегунки при совпадении', function() {
		// view.precent = {
		// 	min: 0.5,
		// 	max: 0.5
		// }
		// view.changeInput();
		// console.log(view.minToggleElem.style.left);
		// console.log(view.maxToggleElem.style.left);
		view.minToggleElem.style.left = '50px';
		view.maxToggleElem.style.left = '50px';
		view.minToggleElem.style.width = '20px';
		view.minToggleElem.style.height = '20px';
		view.maxToggleElem.style.width = '20px';
		view.maxToggleElem.style.height = '20px';
		view.minToggleElem.style.position = 'absolute';
		view.maxToggleElem.style.position = 'absolute';
		// console.log(document.elementFromPoint(60, 10));
		// view.maxToggleElem.hidden = true;
		// console.log(document.elementFromPoint(60, 10));
		view.onToggleCoincidence();
		console.log(view.minToggleElem.style.left);
		console.log(view.maxToggleElem.style.left);
		// console.log(document.elementFromPoint(60, 10));
		// view.maxToggleElem.hidden = true;
		// console.log(document.elementFromPoint(60, 10));
		let mousedown = new MouseEvent('mousedown', {clientX: 60, clientY: 10});
		let mousemove = new MouseEvent('mousemove', {clientX: 60, clientY: 10});
		let mouseup = new MouseEvent('mouseup');
		view.maxToggleElem.dispatchEvent(mousedown);
		document.dispatchEvent(mousemove);
		document.dispatchEvent(mouseup);
		console.log(view.maxToggleElem.style.left);
		console.log(view.minToggleElem.style.left);
		console.log(document.elementFromPoint(60, 10));
		view.maxToggleElem.hidden = true;
		console.log(document.elementFromPoint(60, 10));
		// mousemove = new MouseEvent('mousemove', {clientX: 20, clientY: 10});
		// view.maxToggleElem.dispatchEvent(mousedown);
		// document.dispatchEvent(mousemove);
		// document.dispatchEvent(mouseup);
		expect(view.maxToggleElem.style.left).toEqual('70px');

	});
});