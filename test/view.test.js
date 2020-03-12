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
	const remove = () => {
		sliderWrap.remove();
		view = undefined;
	}
	
	it('Устанавливает view.data', function() {
		add();
		expect(view.data).toBe(data);
		remove();
	});
	it('Создает view', function() {
		add();
		expect(view.minToggleElem).toBeDefined();
		expect(view.maxToggleElem).toBeDefined();
		expect(view.minTabElem).toBeDefined();
		expect(view.maxTabElem).toBeDefined();
		expect(view.rangeElem).toBeDefined();
		remove();
	});
	it('Скрывает minToggle', function() {
		add();
		expect(view.minToggleElem.hidden).toBe(false);
		view.data.isRange = false;
		view.initView();
		expect(view.minToggleElem.hidden).toBe(true);
		remove();
	});
	it('Устанавливает view.tabText', function() {
		add();
		expect(view.tabText).toEqual({min: '', max: ''});
		remove();
	});	
	it('Устанавливает view.precent', function() {
		add();
		expect(view.precent).toEqual({min: 0, max: 0});
		remove();
	});	
	it('Устанавливает стиль бегунков', function() {
		add();
		view.createToggle();
		expect(view.minToggleElem.style.left).toEqual('30px');
		expect(view.maxToggleElem.style.left).toEqual('50px');
		remove();
	});
	it('Создает шкалу', function() {
		add();
		expect(view.scale).toBeDefined;
		remove();
	});
	it('Меняет текст tab', function() {
		add();
		view.tabText.min = 'aaa';
		view.tabText.max = 'sss';
		view.container.dispatchEvent(new CustomEvent('changeTab'));
		expect(view.minTabElem.textContent).toEqual('aaa');
		expect(view.maxTabElem.textContent).toEqual('sss');
		remove();
	});
});