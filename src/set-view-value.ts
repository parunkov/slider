// import {Toggle} from './toggle.ts';
// import {Value} from './view.ts';
// import {setMouseHandler, setRangeStyle} from './functions.ts';
// import {Data} from './data.ts';
// import {markup} from './init-view-markup.ts';

// function setViewValue(slider: HTMLElement, data: Data) {

// 	let isVertical: boolean = data.isVertical;
// 	let isRange: boolean = data.isRange;
// 	let isTab: boolean = data.isTab;

// 	let precent: Value = {
// 		min: 0,
// 		max: 0
// 	};

// 	window.addEventListener('load', () => {
// 		const minToggleElem: HTMLElement = markup(slider).min;
// 		const maxToggleElem: HTMLElement = markup(slider).max;
// 		const range: HTMLElement = markup(slider).range;
// 		const barElem: HTMLElement = markup(slider).bar;
// 		const barWidth: number = barElem.offsetWidth;
// 		const barHeight: number = barElem.offsetHeight;
// 		let barMax;
// 		let toggleMaxOffset;
// 		let toggleMinOffset;
// 		const setPrecent = (value) => value / barMax;

// 		if (!isRange) {
// 			minToggleElem.hidden = true;
// 		}

// 		if (isVertical) {
// 			barMax = barHeight;
// 			toggleMaxOffset = maxToggleElem.offsetTop;
// 			toggleMinOffset = minToggleElem.offsetTop;
// 		} else {
// 			barMax = barWidth;
// 			toggleMaxOffset = maxToggleElem.offsetLeft;
// 			toggleMinOffset = minToggleElem.offsetLeft;
// 		}

// 		let toggleMax = new Toggle(maxToggleElem, toggleMinOffset, barMax, toggleMaxOffset, isVertical);
// 		let toggleMin = new Toggle(minToggleElem, 0, toggleMaxOffset, toggleMinOffset, isVertical);
// 		toggleMax.moveToggle();
// 		toggleMin.moveToggle();
// 		precent.min = setPrecent(toggleMin.value);
// 		precent.max = setPrecent(toggleMax.value);

// 		if (!isRange) {
// 			toggleMin.value = 0;
// 		}

// 		const setRange = () => {
// 			toggleMax.min = toggleMin.value;
// 			toggleMin.max = toggleMax.value;
// 			setRangeStyle(range, toggleMin.value, toggleMax.value, isVertical);
// 		}
// 		setRange();

// 		const onMouseDownCoincidence = (evt) => {
// 			let coincidenceToggle: boolean = false;
// 			maxToggleElem.hidden = true;
// 			coincidenceToggle = document.elementFromPoint(evt.pageX, evt.pageY).classList.contains('ts-slider__toggle--min');
// 			maxToggleElem.hidden = false;
// 			let startValue: number;
// 			startValue = toggleMax.value;

// 			const onMouseMove = (moveEvt) => {
// 				if (coincidenceToggle) {
// 					toggleMin.mouseValue = toggleMax.mouseValue;
// 					toggleMax.isFixed = true;
// 					toggleMin.isFixed = true;
// 					if (toggleMax.mouseValue > startValue) {
// 						toggleMax.isFixed = false;
// 						toggleMin.isFixed = true;
// 					} else {
// 						toggleMax.isFixed = true;
// 						toggleMin.isFixed = false;
// 						toggleMin.mouseValue = toggleMax.mouseValue;
// 						toggleMin.value = toggleMax.mouseValue;
// 						if (toggleMin.value < 0) {
// 							toggleMin.value = 0;
// 						}
// 						toggleMin.setStyle();
// 					}
// 				} else {
// 					toggleMax.isFixed = false;
// 					toggleMin.isFixed = false;
// 				}
// 			}
// 			const onMouseUp = (upEvt) => {
// 				// upEvt.preventDefault();
// 				toggleMin.mouseValue = toggleMin.value;
// 				toggleMax.isFixed = false;
// 				toggleMin.isFixed = false;
// 				document.removeEventListener('mouseup', onMouseUp);
// 				document.removeEventListener('mousemove', onMouseMove);
// 			}
// 			document.addEventListener('mousemove', onMouseMove);
// 			document.addEventListener('mouseup', onMouseUp);
// 		}

// 		maxToggleElem.addEventListener('mousedown', onMouseDownCoincidence);

// 		const onMouseMovePrecent = (moveEvt) => {
// 			setRange();
// 			precent.min = setPrecent(toggleMin.value);
// 			precent.max = setPrecent(toggleMax.value);
// 		}
// 		setMouseHandler(maxToggleElem, onMouseMovePrecent);
// 		setMouseHandler(minToggleElem, onMouseMovePrecent);
// 	});
// return precent;
// }

// export {setViewValue};