import {$} from '../node_modules/jquery/dist/jquery.js';
import {initControl} from '../src/init-control.ts';


describe('initControl', function() {
	it('horizontal', function() {
		const wrap = setFixtures()[0];
		wrap.classList.add('wrap');
		document.body.appendChild(wrap);
		initControl('.wrap', false);
		expect(wrap.querySelector('div')).toHaveClass('ts-slider__container');
	});
	it('vertical', function() {
		const wrap = setFixtures()[0];
		wrap.classList.add('wrap');
		document.body.appendChild(wrap);
		initControl('.wrap', true);
		expect(wrap.querySelector('div')).toHaveClass('ts-slider__container--vertical');
	});
});