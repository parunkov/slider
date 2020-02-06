import {Toggle} from './toggle.ts';
import {valueTab} from './value-tab.ts';

export function setControlPrecent(slider, isVertical: boolean, isRange: boolean, isTab: boolean) {
	interface Precent {
		min: number;
		max: number;
	}
	let precent: Precent = {
		min: 0,
		max: 0
	};
	window.addEventListener('load', (windowLoadEvt) => {
		windowLoadEvt.preventDefault();
		const minToggleElem: HTMLElement = slider.querySelector('.ts-slider__toggle--min');
		const maxToggleElem: HTMLElement = slider.querySelector('.ts-slider__toggle--max');
		// const minTabElem: HTMLElement = slider.querySelector('.ts-slider__toggle-value--min');
		// const maxTabElem: HTMLElement = slider.querySelector('.ts-slider__toggle-value--max');
		const range: HTMLElement = slider.querySelector('.ts-slider__range');
		const barElem: HTMLElement = slider.querySelector('.ts-slider__bar');
		const barWidth: number = barElem.offsetWidth;
		const barHeight: number = barElem.offsetHeight;
		let barMax;
		let toggleMaxOffset;
		let toggleMinOffset;
		const setPrecent = (value) => value / barMax * 100;
		// interface Precent {
		// 	minToggleElem: number;
		// 	maxToggleElem: number;
		// }
		// let precent: Precent;

		// if (!isTab) {
		// 	minTabElem.hidden = true;
		// 	maxTabElem.hidden = true;
		// }

		if (!isRange) {
			minToggleElem.hidden = true;
		}

		if (isVertical) {
			barMax = barHeight;
			toggleMaxOffset = maxToggleElem.offsetTop;
			toggleMinOffset = minToggleElem.offsetTop;
		} else {
			barMax = barWidth;
			toggleMaxOffset = maxToggleElem.offsetLeft;
			toggleMinOffset = minToggleElem.offsetLeft;
		}

		let toggleMax = new Toggle(maxToggleElem, toggleMinOffset, barMax, toggleMaxOffset, isVertical);
		let toggleMin = new Toggle(minToggleElem, 0, toggleMaxOffset, toggleMinOffset, isVertical);
		toggleMax.moveToggle();
		toggleMin.moveToggle();
		// let minValueTab = new valueTab(minTabElem, toggleMin.value);
		// let maxValueTab = new valueTab(maxTabElem, toggleMax.value);

		if (!isRange) {
			toggleMin.value = 0;
		}

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
			// minValueTab.value = toggleMin.value;
			// maxValueTab.value = toggleMax.value;
			// minValueTab.setValue();
			// maxValueTab.setValue();
		}
		setRanre();

		const onMouseDown = (evt) => {
			evt.preventDefault();
			let coincidenceToggle: boolean = false;
			maxToggleElem.hidden = true;
			coincidenceToggle = document.elementFromPoint(evt.pageX, evt.pageY).classList.contains('ts-slider__toggle--min');
			maxToggleElem.hidden = false;
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

		maxToggleElem.addEventListener('mousedown', onMouseDown);
		// minToggleElem.addEventListener('mousedown', onMouseDown);
		// document.addEventListener('mousedown', () => {
		// });


		document.addEventListener('mousemove', () => {
			setRanre();
			precent.min = setPrecent(toggleMin.value);
			precent.max = setPrecent(toggleMax.value);
			console.log(precent);
		});

	});
// console.log(precent);
// return precent;
}

