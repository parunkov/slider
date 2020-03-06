import {$} from '../node_modules/jquery/dist/jquery.js';
import {toView, toModel, Presenter} from '../src/presenter.ts';

describe('Модуль Presenter', function() {

	let sliderWrap;
	let presenter;
	let input1;
	let input2;
	const data = {
		minInputId: 'page__input-11',
		maxInputId: 'page__input-12',
		step: 2,
		minValue: 0,
		maxValue: 10,
		minToggleValue: 3,
		maxToggleValue: 5,
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

		presenter = new Presenter(data, sliderWrap);
	}
	const remove = () => {
		sliderWrap.remove();
		presenter = undefined;
	}

	it('Создает data', function() {
		add();
		expect(presenter.data).toBeDefined;
		expect(presenter.data.isScale).toEqual(true);
		expect(presenter.data.scaleQuantity).toEqual(5);
		sliderWrap.remove();
	});
	it('Изменяет data', function() {
		add();
		expect(presenter.data.isRange).toEqual(true);
		presenter.options.isRange = false;
		presenter.changeData();
		expect(presenter.data.isRange).toEqual(false);
		remove();
	});
	it('Создает view', function() {''
		add();
		expect(presenter.view).toBeDefined;
		remove();
	});
	it('Создает model', function() {
		add();
		expect(presenter.model).toBeDefined;
		remove();
	});
	it('Задает текст для Tab в виде', function() {
		add();
		expect(presenter.view.tabText).toEqual({min: '4', max: '6'});
		remove();
	});
	it('Устанавливает presenter.value', function() {
		add();
		expect(presenter.value).toEqual({min: 3, max: 5});
		remove();
	});
	it('Устанавливает шкалу в виде', function() {
		add();
		expect(presenter.view.scale.length).toEqual(5);
		remove();
	});	
	it('Пересчитывает значение в проценты для view', function() {
		add();
		presenter.setToView();
		expect(presenter.view.precent.min).toEqual(0.3);
		expect(presenter.view.precent.max).toEqual(0.5);
		remove();
	});
	it('Пересчитывает значение для model', function() {
		add();
		presenter.view.precent.min = 0.2;
		presenter.view.precent.max = 0.6;
		presenter.setToModel();
		expect(presenter.model.value.min).toEqual(2);
		expect(presenter.model.value.max).toEqual(6);
		remove();
	});
	it('Отслеживает move toggle', function() {
		add();
		presenter.view.precent.max = 0.8;
		presenter.view.container.dispatchEvent(new CustomEvent('moveToggle'));
		expect(presenter.model.value.max).toEqual(8);
		remove();
	});
	it('Отслеживает change tab text', function() {
		add();
		presenter.model.tabText.min = '4';
		presenter.model.observer.dispatchEvent(new CustomEvent('changeTabText'));
		expect(presenter.view.tabText.min).toEqual('4');
		remove();
	});	
	it('Отслеживает change input', function() {
		add();
		presenter.model.value.max = '4';
		presenter.model.observer.dispatchEvent(new CustomEvent('changeInput'));
		expect(presenter.view.precent.max).toEqual(0.4);
		sliderWrap.remove();
	});
});