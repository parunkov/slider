import View from './view.ts';

import {
  Data,
  Value,
  TabText,
} from './interfaces.ts';

import Model from './model.ts';

import {
  toPrecent,
  toValue,
} from './functions.ts';

import {
  defaultData,
  setDataLimit,
} from './data.ts';

class Presenter {
  wrap: HTMLElement;

  data: Data;

  options: any;

  view: View;

  model: Model;

  value: Value;

  constructor(options, wrap) {
    this.wrap = wrap;
    this.options = options;
    this.createData();
    this.init();
    this.onMoveToggle();
    this.onChangeTabText();
    this.onCangeInput();
    this.onWindowResize();
  }

  onWindowResize() {
    const onResize = () => {
      this.init();
    };
    window.addEventListener('resize', onResize);
  }

  setValue() {
    this.value = {
      min: this.data.minToggleValue,
      max: this.data.maxToggleValue,
    };
  }

  createData() {
    const dataClone = JSON.parse(JSON.stringify(defaultData));
    this.data = Object.assign(dataClone, this.options);
    this.data = setDataLimit(this.data);
    this.setValue();
  }

  changeData() {
    this.data = Object.assign(this.data, this.options);
    this.data = setDataLimit(this.data);
    this.setValue();
    this.init();
    this.onMoveToggle();
    this.onChangeTabText();
    this.onCangeInput();
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
    this.initScale();
    this.setToView();
    this.model.precent = this.view.precent;
    this.model.observer.dispatchEvent(new CustomEvent('setPrecent'));
    this.setTabText();
    this.view.setTab();
    this.view.container.dispatchEvent(new CustomEvent('initValue'));

    const onChangeValue = () => {
      this.model.observer.dispatchEvent(new CustomEvent('changeValue'));
    };
    this.view.container.addEventListener('changeValue', onChangeValue);
  }

  onMoveToggle() {
    const onChangeView = () => {
      this.setToModel();
      this.model.observer.dispatchEvent(new CustomEvent('changeValue'));
    };
    this.view.container.addEventListener('moveToggle', onChangeView);
  }

  onChangeTabText() {
    const onChangeTab = () => {
      this.setTabText();
      this.view.container.dispatchEvent(new CustomEvent('changeTab'));
    };
    this.model.observer.addEventListener('changeTabText', onChangeTab);
  }

  onCangeInput() {
    const onCangeInputText = () => {
      this.view.tabText = this.model.tabText;
      if (this.data.isArray) {
        this.view.precent.min = this.model.value.min / (this.data.array.length - 1);
        this.view.precent.max = this.model.value.max / (this.data.array.length - 1);
      } else {
        this.value.min = +this.model.value.min;
        this.value.max = +this.model.value.max;
        this.setToView();
        this.setToModel();
      }
      this.view.container.dispatchEvent(new CustomEvent('changeInput'));
    };
    this.model.observer.addEventListener('changeInput', onCangeInputText);
  }
}

export default Presenter;
