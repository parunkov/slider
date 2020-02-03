import {Toggle} from './toggle.ts';

export function slider1(slider, isVertical: boolean, isRange: boolean) {
	window.addEventListener('load', (windowLoadEvt) => {
		windowLoadEvt.preventDefault();
		const minToggle: HTMLElement = slider.querySelector('.ts-slider__toggle--min');
		const maxToggle: HTMLElement = slider.querySelector('.ts-slider__toggle--max');
		const range: HTMLElement = slider.querySelector('.ts-slider__range');
		const bar: HTMLElement = slider.querySelector('.ts-slider__bar');
		const barWidth: number = bar.offsetWidth;
		const barHeight: number = bar.offsetHeight;
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
			barMax = barWidth;
			toggleMaxOffset = maxToggle.offsetLeft;
			toggleMinOffset = minToggle.offsetLeft;
		}

		let toggleMax = new Toggle(maxToggle, toggleMinOffset, barMax, toggleMaxOffset, isVertical);
		let toggleMin = new Toggle(minToggle, 0, toggleMaxOffset, toggleMinOffset, isVertical);
		toggleMax.moveToggle();
		toggleMin.moveToggle();

		const setRanre = () => {
			toggleMax.min = toggleMin.value;
			toggleMin.max = toggleMax.value;
			if (isVertical) {
				range.style.top = `${toggleMin.value}px`;
				range.style.height = `${(toggleMax.value - toggleMin.value)}px`;
			} else {
				range.style.left = `${toggleMin.value}px`;
				range.style.width = `${(toggleMax.value - toggleMin.value)}px`;
			}
		}
		setRanre();

		const onMouseDown = (evt) => {
			evt.preventDefault();
			let coincidenceToggle: boolean = false;
			maxToggle.hidden = true;
			coincidenceToggle = document.elementFromPoint(evt.pageX, evt.pageY).classList.contains('ts-slider__toggle--min');
			maxToggle.hidden = false;
			let startValue: number;
			startValue = toggleMax.value;

			const onMouseMove = (moveEvt) => {
				moveEvt.preventDefault();
				if (coincidenceToggle) {
					toggleMin.mouseValue = toggleMax.mouseValue;
					toggleMax.isFixed = true;
					toggleMin.isFixed = true;
					if (toggleMax.mouseValue > startValue) {
						toggleMax.isFixed = false;
						toggleMin.isFixed = true;
					} else {
						toggleMax.isFixed = true;
						toggleMin.isFixed = false;
						toggleMin.mouseValue = toggleMax.mouseValue;
						toggleMin.value = toggleMax.mouseValue;
						if (toggleMin.value < 0) {
							toggleMin.value = 0;
						}
						toggleMin.setStyle();
					}
				} else {
					toggleMax.isFixed = false;
					toggleMin.isFixed = false;
				}
			}
			const onMouseUp = (upEvt) => {
				upEvt.preventDefault();
				toggleMin.mouseValue = toggleMin.value;
				toggleMax.isFixed = false;
				toggleMin.isFixed = false;
				document.removeEventListener('mouseup', onMouseUp);
				document.removeEventListener('mousemove', onMouseMove);
			}
			document.addEventListener('mousemove', onMouseMove);
			document.addEventListener('mouseup', onMouseUp);
		}

		maxToggle.addEventListener('mousedown', onMouseDown);
		document.addEventListener('mousedown', () => {
		});


		document.addEventListener('mousemove', () => {
			setRanre();
		});

	});
}

