import {$} from '../node_modules/jquery/dist/jquery.js';
import {Scale} from '../src/scale.ts';


describe('Модуль Scale', function() {

	const slider = setFixtures()[0];
	slider.style.width = '100px';
	document.body.appendChild(slider);
	const bar = document.createElement('div');
	bar.classList.add('ts-slider__bar');
	slider.append(bar);

	it('horizontal - добавляет класс ts-slider__scale-item', function() {
		const scale = new Scale(slider, ['10', '20'], false);
		expect(bar.querySelector('div')).toHaveClass('ts-slider__scale-item');
	});
	it('vertical - добавляет класс ts-slider__scale-item--vertical', function() {
		const scale = new Scale(slider, ['10', '20'], true);
		expect(bar.querySelector('div')).toHaveClass('ts-slider__scale-item--vertical');
	});
	it('vertical - добавляет класс ts-slider__scale-item--vertical', function() {
		const scale = new Scale(slider, ['10', '20', '30', '40'], false);
		console.log(bar.querySelectorAll('.ts-slider__scale-item').length);
		expect(bar.querySelector('div')).toHaveClass('ts-slider__scale-item');
	});	
});