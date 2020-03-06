import {$} from '../node_modules/jquery/dist/jquery.js';
import {initViewMarkup, markup} from '../src/init-view-markup.ts';

let sliderWrap;
	const add = () => {
		sliderWrap = setFixtures()[0];
		sliderWrap.setAttribute('id','wrapid');
		document.body.appendChild(sliderWrap);
	}

describe('Функция initViewMarkup', function() {

	it('horizontal - создает HTML разметку', function() {
		add();
		initViewMarkup(sliderWrap, false);
		expect(sliderWrap.querySelector('div')).toHaveClass('ts-slider__container');
		sliderWrap.remove();
	});
	it('vertical - добавляет модификатор', function() {
		add();
		initViewMarkup(sliderWrap, true);
		expect(sliderWrap.querySelector('div')).toHaveClass('ts-slider__container--vertical');
		sliderWrap.remove();
	});
});

describe('Функция markup', function() {
	it('Находит элементы HTML', function() {
		add();
		initViewMarkup(sliderWrap, false);
		expect(markup(sliderWrap).min).toBeDefined();
		expect(markup(sliderWrap).max).toBeDefined();
		expect(markup(sliderWrap).range).toBeDefined();
		expect(markup(sliderWrap).bar).toBeDefined();
		expect(markup(sliderWrap).minTab).toBeDefined();
		expect(markup(sliderWrap).maxTab).toBeDefined();
		sliderWrap.remove();
	});
});
