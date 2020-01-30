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

		let coincidenceToggle: boolean;
		let startValue: number;

		const onMouseDown = (evt) => {
			evt.preventDefault();
			maxToggle.hidden = true;
			coincidenceToggle = document.elementFromPoint(evt.pageX, evt.pageY).classList.contains('ts-slider__toggle--min');
			console.log(coincidenceToggle);
			maxToggle.hidden = false;
			startValue = toggleMin.value;

			const onMouseMove = (moveEvt) => {
				moveEvt.preventDefault();

				if (coincidenceToggle) {
					if (toggleMax.value > startValue) {
						// console.log('forward');
					} else {
						// toggleMin.min = 0;
						// minToggle.style.zIndex = '150';
						// // console.log('back');
						// let mousedown = new MouseEvent('mousedown');
						// let mousemove = new MouseEvent('mousemove');
						// let mouseup = new MouseEvent('mouseup');
						// maxToggle.dispatchEvent(mouseup);
						// minToggle.dispatchEvent(mousedown);
						// // toggleMin.min = 0;
						// minToggle.dispatchEvent(mousemove);
					}
				} else {

				}
			}
			const onMouseUp = (upEvt) => {
				upEvt.preventDefault();
				document.removeEventListener('mouseup', onMouseUp);
				document.removeEventListener('mousemove', onMouseMove);
			}
			document.addEventListener('mousemove', onMouseMove);
			document.addEventListener('mouseup', onMouseUp);
		}

		maxToggle.addEventListener('mousedown', onMouseDown);


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


