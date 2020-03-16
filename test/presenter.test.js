import Presenter from '../src/presenter.ts';

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
	beforeEach(function() {
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
	});
	afterEach(function() {
		sliderWrap.remove();
		presenter = undefined;
	});

	it('Создает data', function() {
		expect(presenter.data).toBeDefined;
		expect(presenter.data.isScale).toEqual(true);
		expect(presenter.data.scaleQuantity).toEqual(5);
	});
	it('Изменяет data', function() {
		expect(presenter.data.isRange).toEqual(true);
		presenter.options.isRange = false;
		presenter.changeData();
		expect(presenter.data.isRange).toEqual(false);
	});
	it('Создает view', function() {''
		expect(presenter.view).toBeDefined;
	});
	it('Создает model', function() {
		expect(presenter.model).toBeDefined;
	});
	it('Задает текст для Tab в виде', function() {
		expect(presenter.view.tabText).toEqual({min: '4', max: '6'});
	});
	it('Устанавливает presenter.value', function() {
		expect(presenter.value).toEqual({min: 3, max: 5});
	});
	it('Устанавливает шкалу в виде', function() {
		expect(presenter.view.scale.length).toEqual(5);
	});	
	it('Пересчитывает значение в проценты для view', function() {
		presenter.setToView();
		expect(presenter.view.precent.min).toEqual(0.3);
		expect(presenter.view.precent.max).toEqual(0.5);
	});
	it('Пересчитывает значение для model', function() {
		presenter.view.precent.min = 0.2;
		presenter.view.precent.max = 0.6;
		presenter.setToModel();
		expect(presenter.model.value.min).toEqual(2);
		expect(presenter.model.value.max).toEqual(6);
	});
	it('Отслеживает move toggle', function() {
		presenter.view.precent.max = 0.8;
		presenter.view.container.dispatchEvent(new CustomEvent('moveToggle'));
		expect(presenter.model.value.max).toEqual(8);
	});
	it('Отслеживает change tab text', function() {
		presenter.model.tabText.min = '4';
		presenter.model.observer.dispatchEvent(new CustomEvent('changeTabText'));
		expect(presenter.view.tabText.min).toEqual('4');
	});	
	it('Отслеживает change input', function() {
		presenter.model.value.max = '4';
		presenter.model.observer.dispatchEvent(new CustomEvent('changeInput'));
		expect(presenter.view.precent.max).toEqual(0.4);
	});
});