import {$} from '../node_modules/jquery/dist/jquery.js';
import {initViewMarkup, markup} from '../src/init-view-markup.ts';

describe('Функция initViewMarkup', function() {

	let sliderWrap;
	const add = () => {
		sliderWrap = setFixtures()[0];
		sliderWrap.setAttribute('id','wrapid');
		document.body.appendChild(sliderWrap);
	}

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

	// console.log(markup(sliderWrap.querySelector('div')));
	add();
	initViewMarkup(sliderWrap, false);
	console.log(sliderWrap.querySelector('.ts-slider__toggle--min'));
});