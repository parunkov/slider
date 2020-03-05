import {initViewMarkup, markup} from './init-view-markup.ts';
import {Scale} from './scale.ts';
import {Data, Value, TabText} from './interfaces.ts';
import {setToggleStyle, Toggle} from './toggle.ts';
import {setMouseHandler, round, toPrecent, setRangeStyle} from './functions.ts';

class View {

	wrap: HTMLElement;
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

	constructor(data, wrap) {

		this.wrap = wrap;
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
		this.addScale();
		this.changeTab();
		this.changeInput();

		// window.addEventListener('resize', (evt) => {
		// 	this.initView();
		// 	this.createToggle();
		// 	this.onToggleCoincidence();
		// 	this.addScale();
		// 	this.changeTab();
		// 	this.changeInput();
		// });
	}

	initView() {
		initViewMarkup(this.wrap, this.data.isVertical);
		this.container = this.wrap.querySelector('.ts-slider__container');
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

		if (!this.data.isTab) {
			this.minTabElem.hidden = true;
			this.maxTabElem.hidden = true;
		}
	}

	setTab() {
		this.minTabElem.textContent = this.tabText.min;
		this.maxTabElem.textContent = this.tabText.max;
	}

	setRange() {
		setRangeStyle(this.rangeElem, this.minToggle.precent * this.size, this.maxToggle.precent * this.size, this.data.isVertical);
	}

	createToggle() {
		const minTogglePrecent = toPrecent(this.data.minToggleValue, this.data.minValue, this.data.maxValue);
		const maxTogglePrecent = toPrecent(this.data.maxToggleValue, this.data.minValue, this.data.maxValue);
		this.minToggle = new Toggle(this.minToggleElem, minTogglePrecent, this.size, this.data.isVertical);
		this.maxToggle = new Toggle(this.maxToggleElem, maxTogglePrecent, this.size, this.data.isVertical);
		this.minToggle.min = 0;
		this.maxToggle.max = 1;
		if (!this.data.isRange) {
			this.minToggle.precent = 0;
		}
		this.setRange();

		const onMouseMove = (moveEvt) => {
			this.minToggle.max = this.maxToggle.precent;
			this.maxToggle.min = this.minToggle.precent;
			setRangeStyle(this.rangeElem, this.minToggle.precent * this.size, this.maxToggle.precent * this.size, this.data.isVertical);
			this.precent.min = this.minToggle.precent;
			this.precent.max = this.maxToggle.precent;
			this.setTab();
			this.container.dispatchEvent(new CustomEvent('moveToggle'));
		}
		setMouseHandler(document, onMouseMove);
		this.container.addEventListener('mousemove', (evt) => {
			evt.preventDefault();
		});
	}

	onToggleCoincidence() {
		const onMouseDownCoincidence = (evt) => {
			console.log('!!!');
			let coincidenceToggle: boolean = false;
			this.maxToggleElem.hidden = true;
			console.log(document.elementFromPoint(evt.pageX, evt.pageY));
			coincidenceToggle = document.elementFromPoint(evt.pageX, evt.pageY).classList.contains('ts-slider__toggle--min');
			console.log(coincidenceToggle);
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

	addScale() {
		this.container.addEventListener('initScale', () => {
			if (this.data.isScale) {
				const scale = new Scale(this.container, this.scale, this.data.isVertical);
			}
		});
	}

	changeTab() {
		this.container.addEventListener('changeTab', () => {
			this.setTab();
		});
	}

	changeInput() {
		this.container.addEventListener('changeInput', () => {
			this.minToggle.precent = this.precent.min;
			this.maxToggle.precent = this.precent.max;
			this.minToggle.changeToggle();
			this.maxToggle.changeToggle();
			this.setTab();
			this.setRange();
		});
	}

	removeMarkup() {
		this.container.remove();
	}
}

export {View};
