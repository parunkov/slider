import {View} from './view.ts';
import {Data, Value, TabText} from './interfaces.ts';
import {Model} from './model.ts';
import {setMouseHandler, round, setRangeStyle, toPrecent, toValue} from './functions.ts';
import {markup} from './init-view-markup.ts';
import {defaultData} from './data.ts';

class Presenter {

	wrap: HTMLElement;
	data: Data;
	options: any;
	view: View;
	model: Model;
	max: number;
	min: number;
	value: Value;
	modelTabText: TabText;

	constructor(options, wrap) {
		
		this.wrap = wrap;
		this.options = options;
		this.createData();
		this.init();
		this.onMoveToggle();
		this.onChangeTabText();
		this.onCangeInput();
	}

	setValue() {
		this.value = {
			min: this.data.minToggleValue,
			max: this.data.maxToggleValue
		}
	}

	createData() {
		function deepClone(obj) {
		  const clObj = {};
		  for(const i in obj) {
		    if (obj[i] instanceof Object) {
		      clObj[i] = deepClone(obj[i]);
		      continue;
		    }
		    clObj[i] = obj[i];
		  }
		  return clObj;
		}
		const dataClone = deepClone(defaultData);
		this.data = Object.assign(dataClone, this.options);
		this.setValue();		
	}

	changeData() {
		this.data = Object.assign(this.data, this.options);
		this.setValue();
		this.init();
		this.onMoveToggle();
		this.onChangeTabText();
		this.onCangeInput();
		// this.model.changeInput();
	}

	setTabText() {
		this.view.tabText.min = this.model.tabText.min;
		this.view.tabText.max = this.model.tabText.max;
	}

	initScale() {
		this.view.scale = this.model.scale;
		this.view.container.dispatchEvent(new CustomEvent('initScale'));
	}

	setToView() {
		this.view.precent.min = toPrecent(this.value.min, this.data.minValue, this.data.maxValue);
		this.view.precent.max = toPrecent(this.value.max, this.data.minValue, this.data.maxValue);
	}

	setToModel() {
		this.model.value.min = toValue(this.view.precent.min, this.data.minValue, this.data.maxValue);
		this.model.value.max = toValue(this.view.precent.max, this.data.minValue, this.data.maxValue);
	}

	init() {
		const viewData = this.data;
		const modelData = this.data;
		this.view = new View(viewData, this.wrap);
		this.model = new Model(modelData);
		this.setValueLimit();
		this.initScale();
		this.setToView();
		this.model.precent = this.view.precent;
		this.model.observer.dispatchEvent(new CustomEvent('setPrecent'));
		this.setTabText();
		this.view.setTab();
		// this.setValueLimit();
		this.view.container.dispatchEvent(new CustomEvent('initValue'));

		this.view.container.addEventListener('changeValue', () => {
			this.model.observer.dispatchEvent(new CustomEvent('changeValue'));
		});
	}

	onMoveToggle() {
		const onChangeView = () => {
			this.setToModel();
			this.model.observer.dispatchEvent(new CustomEvent('changeValue'));
		}
		this.view.container.addEventListener('moveToggle', onChangeView);
	}

	onChangeTabText() {
		this.model.observer.addEventListener('changeTabText', () => {
			this.setTabText();
			this.view.container.dispatchEvent(new CustomEvent('changeTab'));
		});
	}
	onCangeInput() {
		this.model.observer.addEventListener('changeInput', () => {
			this.view.tabText = this.model.tabText;
			if (this.data.isArray) {
				this.view.precent.min = this.model.value.min / (this.data.array.length - 1);
				this.view.precent.max = this.model.value.max / (this.data.array.length -1);
				console.log(this.view.precent);
			} else {
				// this.value.min = +this.model.value.min;
				// this.value.max = +this.model.value.max;
				// this.setToView();
				// this.setToModel();
				this.setValueLimit();
			}
			this.view.container.dispatchEvent(new CustomEvent('changeInput'));
		});
	}
	setValueLimit() {
		this.value.min = +this.model.value.min;
		this.value.max = +this.model.value.max;
		this.setToView();
		this.setToModel();
		// this.view.container.dispatchEvent(new CustomEvent('changeInput'));
	}
}

export {Presenter};