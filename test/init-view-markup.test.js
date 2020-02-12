import {$} from '../node_modules/jquery/dist/jquery.js';
import {initViewMarkup} from '../src/init-view-markup.ts';

describe('Функция initViewMarkup', function() {

	let sliderWrap;
	const add = () => {
		sliderWrap = setFixtures()[0];
		sliderWrap.setAttribute('id','wrapid');
		document.body.appendChild(sliderWrap);
	}
	
	it('horizontal - создает HTML разметку', function() {
		add();
		initViewMarkup('#wrapid', false);
		expect(sliderWrap.querySelector('div')).toHaveClass('ts-slider__container');
		sliderWrap.remove();
	});
	it('vertical - добавляет модификатор', function() {
		add();
		initViewMarkup('#wrapid', true);
		expect(sliderWrap.querySelector('div')).toHaveClass('ts-slider__container--vertical');
		sliderWrap.remove();
	});
});