import {$} from '../node_modules/jquery/dist/jquery.js';
import {toView, toModel, Presenter} from '../src/presenter.ts';

describe('Модуль Presenter', function() {

	let sliderWrap;
	let presenter;
	const data = {
		wrapId: '#presenterwrapid',
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
		scaleQuantity: 5
	}
	const add = () => {
		sliderWrap = setFixtures()[0];
		sliderWrap.setAttribute('id','presenterwrapid');
		document.body.appendChild(sliderWrap);
		presenter = new Presenter(data);
	}

	it('Функция toView пересчитывает value', function() {
		add();
		expect(toView(30, 0, 100)).toEqual(0.3);
		sliderWrap.remove();
	});
	it('Функция toModel пересчитывает value', function() {
		add();
		expect(toModel(0.3, 0, 100)).toEqual(30);
		sliderWrap.remove();
	});
	it('Создает view', function() {
		add();
		expect(presenter.view).toBeDefined;
		sliderWrap.remove();
	});
	it('Создает model', function() {
		add();
		expect(presenter.model).toBeDefined;
		sliderWrap.remove();
	});
	it('Задает текст для Tab в виде', function() {
		add();
		expect(presenter.view.viewTabText).toEqual({min: '3', max: '5'});
		sliderWrap.remove();
	});
	
	it('Устанавливает presenter.data', function() {
		add();
		expect(presenter.data).toBe(data);
		sliderWrap.remove();
	});
	it('Устанавливает presenter.value', function() {
		add();
		expect(presenter.value).toEqual({min: 3, max: 5});
		sliderWrap.remove();
	});
	it('Устанавливает шкалу в виде', function() {
		add();
		expect(presenter.view.scale.length).toEqual(5);
		sliderWrap.remove();
	});	
	// it('', function() {
	// 	add();
	// 	expect().to;
	// 	sliderWrap.remove();
	// });
});