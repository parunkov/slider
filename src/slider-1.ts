import {Toggle} from './slider-move.ts';

export function slider1(slider, vertical) {
	window.addEventListener('load', (windowLoadEvt) => {
		windowLoadEvt.preventDefault();
		const toggle: HTMLElement = slider.querySelector('.ts-slider__toggle--max');
		// console.log(toggle);
		const range: HTMLElement = slider.querySelector('.ts-slider__range');
		const bar: HTMLElement = slider.querySelector('.ts-slider__bar');
		// const container: HTMLElement = document.querySelector('.ts-slider__container');
		const barWidth: number = bar.offsetWidth;
		const barHeight: number = bar.offsetHeight;
		// const vertical: boolean = false;
		let barMax;
		let toggleOffset;

		if (vertical) {
			barMax = barHeight;
			toggleOffset = toggle.offsetTop;
		} else {
			barMax =barWidth;
			toggleOffset = toggle.offsetLeft;
		}

		let toggleMax = new Toggle(toggle, 0, barMax, toggleOffset, vertical);
		toggleMax.moveToggle();
		document.addEventListener('mousemove', () => {
			if (vertical) {
				range.style.height = `${toggleMax.value}px`;
			} else {
				range.style.width = `${toggleMax.value}px`;
			}
		});

	});
}
