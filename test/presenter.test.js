import {$} from '../node_modules/jquery/dist/jquery.js';
import {toView, toModel, Presenter} from '../src/presenter.ts';

describe('Модуль Presenter', function() {

	let sliderWrap;
	let presenter;
	let input1;
	let input2;
	const data = {
		wrapId: '#presenterwrapid',
		minInputId: 'page__input-11',
		maxInputId: 'page__input-12',
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

		input1 = setFixtures()[0];
		input1.setAttribute('id','page__input-11');
		document.body.appendChild(input1);

		input2 = setFixtures()[0];
		input2.setAttribute('id','page__input-12');
		document.body.appendChild(input2);

		presenter = new Presenter(data);
	}

	// it('Функция toPrecent пересчитывает value', function() {
	// 	add();
	// 	expect(toPrecent(30, 0, 100)).toEqual(0.3);
	// 	sliderWrap.remove();
	// });
	// it('Функция toModel пересчитывает value', function() {
	// 	add();
	// 	expect(toModel(0.3, 0, 100)).toEqual(30);
	// 	sliderWrap.remove();
	// });
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
		expect(presenter.view.tabText).toEqual({min: '3', max: '5'});
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