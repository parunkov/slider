import {$} from '../node_modules/jquery/dist/jquery.js';
import {Scale} from '../src/scale.ts';


describe('Scale', function() {
	it('horizontal', function() {
		const slider = setFixtures()[0];
		slider.style.width = '100px';
		document.body.appendChild(slider);
		const bar = document.createElement('div');
		bar.classList.add('ts-slider__bar');
		slider.append(bar);
		const scale = new Scale(slider, 4, false);
		expect(bar.querySelector('div')).toHaveClass('ts-slider__scale-item');
	});
	it('vertical', function() {
		const slider = setFixtures()[0];
		slider.style.height = '100px';
		document.body.appendChild(slider);
		const bar = document.createElement('div');
		bar.classList.add('ts-slider__bar');
		slider.append(bar);
		const scale = new Scale(slider, 4, true);
		expect(bar.querySelector('div')).toHaveClass('ts-slider__scale-item--vertical');
	});	
	it('quantity', function() {
		const slider = setFixtures()[0];
		slider.style.height = '100px';
		document.body.appendChild(slider);
		const bar = document.createElement('div');
		bar.classList.add('ts-slider__bar');
		slider.append(bar);
		const scale1 = new Scale(slider, -1, true);
		expect(scale1.quantity).toEqual(2);
		const scale2 = new Scale(slider, 3, true);
		expect(scale2.quantity).toEqual(3);
	});	
});