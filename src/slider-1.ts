import {moveToggle, left} from './slider-move.ts';

export function slider1() {
	window.addEventListener('load', (windowLoadEvt) => {
		windowLoadEvt.preventDefault();
		const toggle: HTMLElement = document.querySelector('.ts-slider__toggle');
		const range: HTMLElement = document.querySelector('.ts-slider__range');
		const bar: HTMLElement = document.querySelector('.ts-slider__bar');
		const container: HTMLElement = document.querySelector('.ts-slider__container');
		const barWidth: number = bar.offsetWidth;

		moveToggle(toggle, 0, barWidth);
		document.addEventListener('mousemove', () => {
			range.style.width = `${left}px`;
		});

	});
}
