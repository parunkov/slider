import {Toggle} from './slider-move.ts';

export function slider1(slider, isVertical: boolean, isRange: boolean) {
	window.addEventListener('load', (windowLoadEvt) => {
		windowLoadEvt.preventDefault();
		const minToggle: HTMLElement = slider.querySelector('.ts-slider__toggle--min');
		const maxToggle: HTMLElement = slider.querySelector('.ts-slider__toggle--max');
		// console.log(maxToggle);
		const range: HTMLElement = slider.querySelector('.ts-slider__range');
		const bar: HTMLElement = slider.querySelector('.ts-slider__bar');
		// const container: HTMLElement = document.querySelector('.ts-slider__container');
		const barWidth: number = bar.offsetWidth;
		const barHeight: number = bar.offsetHeight;
		// const isVertical: boolean = false;
		let barMax;
		let toggleMaxOffset;
		let toggleMinOffset;

		if (!isRange) {
			minToggle.hidden = true;
		}

		if (isVertical) {
			barMax = barHeight;
			toggleMaxOffset = maxToggle.offsetTop;
			toggleMinOffset = minToggle.offsetTop;
		} else {
			barMax =barWidth;
			toggleMaxOffset = maxToggle.offsetLeft;
			toggleMinOffset = minToggle.offsetLeft;
		}

		let toggleMax = new Toggle(maxToggle, toggleMinOffset, barMax, toggleMaxOffset, isVertical);
		let toggleMin = new Toggle(minToggle, 0, toggleMaxOffset, toggleMinOffset, isVertical);
		toggleMax.moveToggle();
		toggleMin.moveToggle();
		document.addEventListener('mousemove', () => {
			toggleMax.min = toggleMin.value;
			toggleMin.max = toggleMax.value;
			if (isVertical) {
				range.style.top = `${toggleMin.value}px`;
				range.style.height = `${(toggleMax.value - toggleMin.value)}px`;
			} else {
				range.style.left = `${toggleMin.value}px`;
				range.style.width = `${(toggleMax.value - toggleMin.value)}px`;
			}
		});

	});
}
