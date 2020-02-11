import {initViewMarkup} from './init-view-markup.ts';
import {Scale} from './scale.ts';
import {setViewValue} from './set-view-value.ts';
import {Data} from './data.ts';
import {setToggleStyle} from './toggle.ts';
import {setMouseHandler, round} from './functions.ts';

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
	viewValue: Value;
	viewTabText: TabText;
	container: HTMLElement;
	minToggleElem: HTMLElement;
	maxToggleElem: HTMLElement;
	minTabElem: HTMLElement;
	maxTabElem: HTMLElement;
	size: number;

	constructor(data) {
		this.data = data;
		this.viewTabText = {
			min: '',
			max: ''
		}
		this.initView();
		this.setToggle();
		this.onMoveToggle();
		this.addScale();
		this.changeTab();
	}

	initView() {
		initViewMarkup(this.data.wrapId, this.data.isVertical);
		this.container = document.querySelector(this.data.wrapId).querySelector('.ts-slider__container');
		if (this.data.isVertical) {
			this.size = this.container.offsetHeight;
		} else {
			this.size = this.container.offsetWidth;
		}
	}

	setTab() {
		this.minTabElem.textContent = this.viewTabText.min;
		this.maxTabElem.textContent = this.viewTabText.max;
	}

	setToggle() {
		this.minToggleElem = this.container.querySelector('.ts-slider__toggle--min');
		this.maxToggleElem = this.container.querySelector('.ts-slider__toggle--max');
		this.minTabElem = this.container.querySelector('.ts-slider__toggle-value--min');
		this.maxTabElem = this.container.querySelector('.ts-slider__toggle-value--max');

		this.container.addEventListener('initValue', () => {
			setToggleStyle(this.minToggleElem, this.viewValue.min * this.size, this.data.isVertical);
			setToggleStyle(this.maxToggleElem, this.viewValue.max * this.size, this.data.isVertical);
			this.setTab();
		});
	}

	onMoveToggle() {
		this.viewValue = setViewValue(this.container, this.data);
		const onMouseMove = (moveEvt) => {
			this.container.dispatchEvent(new CustomEvent('moveToggle'));
		}
		setMouseHandler(this.container, onMouseMove);
	}

	addScale() {
		if (this.data.isScale) {
			const scale = new Scale(this.container, this.data);
		}
	}

	changeTab() {
		this.container.addEventListener('changeTab', (evt) => {
			evt.preventDefault();
			this.setTab();
		});
	}
}

export {View, Value, TabText};
