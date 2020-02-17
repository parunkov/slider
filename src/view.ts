//old

import {initViewMarkup, markup} from './init-view-markup.ts';
import {Scale} from './scale.ts';
// import {setViewValue} from './set-view-value.ts';
import {Data} from './data.ts';
import {setToggleStyle, Toggle} from './toggle.ts';
import {setMouseHandler, round, toPrecent, setRangeStyle} from './functions.ts';

interface Value {
	min: number;
	max: number;
}
interface TabText {
	min: string;
	max: string;
}

class View {

	data: Data;
	precent: Value;
	tabText: TabText;
	container: HTMLElement;
	minToggleElem: HTMLElement;
	maxToggleElem: HTMLElement;
	minToggle: Toggle;
	maxToggle: Toggle;
	minTabElem: HTMLElement;
	maxTabElem: HTMLElement;
	rangeElem: HTMLElement;
	size: number;
	scale: string[];

	constructor(data) {
		this.data = data;
		this.precent = {
			min: 0,
			max: 0
		}
		this.tabText = {
			min: '',
			max: ''
		}
		this.scale = [];
		this.initView();
		this.createToggle();
		this.onToggleCoincidence();
		// this.setToggle();
		// this.onMoveToggle();
		this.addScale();
		// this.changeTab();
		// this.changeInput();
	}

	initView() {
		initViewMarkup(this.data.wrapId, this.data.isVertical);
		this.container = document.querySelector(this.data.wrapId).querySelector('.ts-slider__container');
		if (this.data.isVertical) {
			this.size = this.container.offsetHeight;
		} else {
			this.size = this.container.offsetWidth;
		}
		this.minToggleElem = markup(this.container).min;
		this.maxToggleElem = markup(this.container).max;
		this.minTabElem = markup(this.container).minTab;
		this.maxTabElem = markup(this.container).maxTab;
		this.rangeElem = markup(this.container).range;

		if (!this.data.isRange) {
			this.minToggleElem.hidden = true;
		}
	}

	setTab() {
		this.minTabElem.textContent = this.tabText.min;
		this.maxTabElem.textContent = this.tabText.max;
	}

	createToggle() {
		const minTogglePrecent = toPrecent(this.data.minToggleValue, this.data.minValue, this.data.maxValue);
		const maxTogglePrecent = toPrecent(this.data.maxToggleValue, this.data.minValue, this.data.maxValue);
		this.minToggle = new Toggle(this.minToggleElem, minTogglePrecent, this.size, this.data.isVertical);
		this.maxToggle = new Toggle(this.maxToggleElem, maxTogglePrecent, this.size, this.data.isVertical);
		// this.setTab();
		this.minToggle.min = 0;
		this.maxToggle.max = 1;
		if (!this.data.isRange) {
			this.minToggle.precent = 0;
		}
		setRangeStyle(this.rangeElem, this.minToggle.precent * this.size, this.maxToggle.precent * this.size, this.data.isVertical);

		const onMouseMove = () => {
			this.minToggle.max = this.maxToggle.precent;
			this.maxToggle.min = this.minToggle.precent;
			setRangeStyle(this.rangeElem, this.minToggle.precent * this.size, this.maxToggle.precent * this.size, this.data.isVertical);
			this.precent.min = this.minToggle.precent;
			this.precent.max = this.maxToggle.precent;
			// console.log(this.precent);
			this.setTab();
			this.container.dispatchEvent(new CustomEvent('moveToggle'));
		}
		setMouseHandler(document, onMouseMove);
		// this.setTab();
	}

	onToggleCoincidence() {
		const onMouseDownCoincidence = (evt) => {
			let coincidenceToggle: boolean = false;
			this.maxToggleElem.hidden = true;
			coincidenceToggle = document.elementFromPoint(evt.pageX, evt.pageY).classList.contains('ts-slider__toggle--min');
			this.maxToggleElem.hidden = false;
			let startPixel: number;
			startPixel = this.maxToggle.pixel;

			const onMouseMove = (moveEvt) => {
				if (coincidenceToggle) {
					this.minToggle.mousePixel = this.maxToggle.mousePixel;
					this.maxToggle.isFixed = true;
					this.minToggle.isFixed = true;
					if (this.maxToggle.mousePixel > startPixel) {
						this.maxToggle.isFixed = false;
						this.minToggle.isFixed = true;
					} else {
						this.maxToggle.isFixed = true;
						this.minToggle.isFixed = false;
						this.minToggle.mousePixel = this.maxToggle.mousePixel;
						this.minToggle.pixel = this.maxToggle.mousePixel;
						if (this.minToggle.pixel < 0) {
							this.minToggle.pixel = 0;
						}
						this.minToggle.setStyle();
						this.minToggle.precent = this.minToggle.pixel / this.size;
					}
				} else {
					this.maxToggle.isFixed = false;
					this.minToggle.isFixed = false;
				}
			}
			const onMouseUp = (upEvt) => {
				this.minToggle.mousePixel = this.minToggle.pixel;
				this.maxToggle.isFixed = false;
				this.minToggle.isFixed = false;
				document.removeEventListener('mouseup', onMouseUp);
				document.removeEventListener('mousemove', onMouseMove);
			}
			document.addEventListener('mousemove', onMouseMove);
			document.addEventListener('mouseup', onMouseUp);
		}

		this.maxToggleElem.addEventListener('mousedown', onMouseDownCoincidence);
	}



// 	setToggle() {
// 		this.minToggleElem = markup(this.container).min;
// 		this.maxToggleElem = markup(this.container).max;
// 		this.minTabElem = markup(this.container).minTab;
// 		this.maxTabElem = markup(this.container).maxTab;

// 		this.container.addEventListener('initValue', () => {
// 			setToggleStyle(this.minToggleElem, this.viewValue.min * this.size, this.data.isVertical);
// 			setToggleStyle(this.maxToggleElem, this.viewValue.max * this.size, this.data.isVertical);
// 			this.setTab();
// 		});
// 		// this.viewValue = setViewValue(this.container, this.data);
// 	}

// 	onMoveToggle() {
// 		// this.viewValue = setViewValue(this.container, this.data);
// 		const onMouseMove = (moveEvt) => {
// 			this.container.dispatchEvent(new CustomEvent('moveToggle'));
// 			// console.log(this.viewValue);
// 		}
// 		setMouseHandler(this.container, onMouseMove);
// 	}

	addScale() {
		this.container.addEventListener('initScale', () => {
			if (this.data.isScale) {
				const scale = new Scale(this.container, this.scale, this.data.isVertical);
			}
		});
	}

// 	changeTab() {
// 		this.container.addEventListener('changeTab', () => {
// 			this.setTab();
// 		});
// 	}
// 	changeInput() {
// 		this.container.addEventListener('changeInput', () => {
// 			// console.log(222);
// 			// console.log(this.viewValue);
// 			setToggleStyle(this.minToggleElem, this.viewValue.min * this.size, this.data.isVertical);
// 			setToggleStyle(this.maxToggleElem, this.viewValue.max * this.size, this.data.isVertical);
// 			this.setTab();
// 		});
// 	}
// }

export {View, Value, TabText};




// //old

// import {initViewMarkup} from './init-view-markup.ts';
// import {Scale} from './scale.ts';
// import {setViewValue} from './set-view-value.ts';
// import {Data} from './data.ts';
// import {setToggleStyle} from './toggle.ts';
// import {setMouseHandler, round} from './functions.ts';
// import {markup} from './init-view-markup.ts';

// interface Value {
// 	min: number;
// 	max: number;
// }
// interface TabText {
// 	min: string;
// 	max: string;
// }

// class View {

// 	data: Data;
// 	viewValue: Value;
// 	viewTabText: TabText;
// 	container: HTMLElement;
// 	minToggleElem: HTMLElement;
// 	maxToggleElem: HTMLElement;
// 	minTabElem: HTMLElement;
// 	maxTabElem: HTMLElement;
// 	size: number;
// 	scale: string[];

// 	constructor(data) {
// 		this.data = data;
// 		this.viewTabText = {
// 			min: '',
// 			max: ''
// 		}
// 		this.scale = [];
// 		this.initView();
// 		this.setToggle();
// 		this.onMoveToggle();
// 		this.addScale();
// 		this.changeTab();
// 		this.changeInput();
// 	}

// 	initView() {
// 		initViewMarkup(this.data.wrapId, this.data.isVertical);
// 		this.container = document.querySelector(this.data.wrapId).querySelector('.ts-slider__container');
// 		if (this.data.isVertical) {
// 			this.size = this.container.offsetHeight;
// 		} else {
// 			this.size = this.container.offsetWidth;
// 		}
// 		this.viewValue = setViewValue(this.container, this.data);
// 	}

// 	setTab() {
// 		this.minTabElem.textContent = this.viewTabText.min;
// 		this.maxTabElem.textContent = this.viewTabText.max;
// 	}

// 	setToggle() {
// 		this.minToggleElem = markup(this.container).min;
// 		this.maxToggleElem = markup(this.container).max;
// 		this.minTabElem = markup(this.container).minTab;
// 		this.maxTabElem = markup(this.container).maxTab;

// 		this.container.addEventListener('initValue', () => {
// 			setToggleStyle(this.minToggleElem, this.viewValue.min * this.size, this.data.isVertical);
// 			setToggleStyle(this.maxToggleElem, this.viewValue.max * this.size, this.data.isVertical);
// 			this.setTab();
// 		});
// 		// this.viewValue = setViewValue(this.container, this.data);
// 	}

// 	onMoveToggle() {
// 		// this.viewValue = setViewValue(this.container, this.data);
// 		const onMouseMove = (moveEvt) => {
// 			this.container.dispatchEvent(new CustomEvent('moveToggle'));
// 			// console.log(this.viewValue);
// 		}
// 		setMouseHandler(this.container, onMouseMove);
// 	}

// 	addScale() {
// 		this.container.addEventListener('initScale', () => {
// 			if (this.data.isScale) {
// 				const scale = new Scale(this.container, this.scale, this.data.isVertical);
// 			}
// 		});
// 	}

// 	changeTab() {
// 		this.container.addEventListener('changeTab', () => {
// 			this.setTab();
// 		});
// 	}
// 	changeInput() {
// 		this.container.addEventListener('changeInput', () => {
// 			// console.log(222);
// 			// console.log(this.viewValue);
// 			setToggleStyle(this.minToggleElem, this.viewValue.min * this.size, this.data.isVertical);
// 			setToggleStyle(this.maxToggleElem, this.viewValue.max * this.size, this.data.isVertical);
// 			this.setTab();
// 		});
// 	}
// }

// export {View, Value, TabText};
