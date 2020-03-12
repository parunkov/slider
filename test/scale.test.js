import {Scale} from '../src/scale.ts';


describe('Модуль Scale', function() {

	let slider;
	let bar;
	const add = () => {
		slider = setFixtures()[0];
		slider.style.width = '100px';
		document.body.appendChild(slider);
		bar = document.createElement('div');
		bar.classList.add('ts-slider__bar');
		slider.append(bar);
	}

	it('horizontal - добавляет класс ts-slider__scale-item', function() {
		add();
		const scale = new Scale(slider, ['10', '20'], false);
		expect(bar.querySelector('div')).toHaveClass('ts-slider__scale-item');
	});
	it('vertical - добавляет класс ts-slider__scale-item--vertical', function() {
		add();
		const scale = new Scale(slider, ['10', '20'], true);
		expect(bar.querySelector('div')).toHaveClass('ts-slider__scale-item--vertical');
	});
	it('scale-item - добавляет нужное количество делений', function() {
		add();
		const scale = new Scale(slider, ['10', '20', '30', '40'], false);
		expect(bar.querySelectorAll('.ts-slider__scale-item').length).toEqual(4);
	});	
});