import {Toggle} from './toggle.ts';
import {ViewValue} from './view.ts';
import {setMouseHandler} from './functions.ts';
import {SliderData} from './data.ts';

function setViewValue(slider: HTMLElement, data: SliderData) {

	let isVertical = data.isVertical;
	let isRange = data.isRange;
	let isTab = data.isTab;

	let precent: ViewValue = {
		min: 0,
		max: 0
	};

	window.addEventListener('load', (windowLoadEvt) => {
		windowLoadEvt.preventDefault();
		const minToggleElem: HTMLElement = slider.querySelector('.ts-slider__toggle--min');
		const maxToggleElem: HTMLElement = slider.querySelector('.ts-slider__toggle--max');
		const range: HTMLElement = slider.querySelector('.ts-slider__range');
		const barElem: HTMLElement = slider.querySelector('.ts-slider__bar');
		const barWidth: number = barElem.offsetWidth;
		const barHeight: number = barElem.offsetHeight;
		let barMax;
		let toggleMaxOffset;
		let toggleMinOffset;
		const setPrecent = (value) => value / barMax * 100;

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
		precent.min = setPrecent(toggleMin.value);
		precent.max = setPrecent(toggleMax.value);

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
		}
		setRanre();

		const onMouseDownCoincidence = (evt) => {
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

		maxToggleElem.addEventListener('mousedown', onMouseDownCoincidence);

		const onMouseMovePrecent = (moveEvt) => {
			setRanre();
			precent.min = setPrecent(toggleMin.value);
			precent.max = setPrecent(toggleMax.value);
			// slider.dispatchEvent(new CustomEvent('changeValue'));
		}
		setMouseHandler(maxToggleElem, onMouseMovePrecent);
		setMouseHandler(minToggleElem, onMouseMovePrecent);
	});
return precent;
}

export {setViewValue};