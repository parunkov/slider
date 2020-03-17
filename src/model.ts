import {
  Data,
  Value,
  TabText,
} from './interfaces.ts';

import {
  round,
  setLimit,
} from './functions.ts';

class Model {
  data: Data;

  minInput: any;

  maxInput: any;

  value: Value;

  precent: Value;

  tabText: TabText;

  observer: HTMLElement;

  scale: string[];

  constructor(data) {
    this.data = data;
    this.tabText = {
      min: '',
      max: '',
    };
    this.value = {
      min: 0,
      max: 0,
    };
    this.precent = {
      min: 0,
      max: 0,
    };
    this.scale = [];
    this.observer = document.createElement('Event');
    this.init();
    this.setScale();
    this.addListener();
    this.changeInput();
  }

  setInput() {
    this.minInput.value = this.tabText.min;
    this.maxInput.value = this.tabText.max;
    if (!this.data.isRange) {
      if (this.data.isArray) {
        [this.minInput.value] = this.data.array;
      } else {
        this.minInput.value = this.data.minValue;
      }
    }
  }

  setArrayValue() {
    const min = Math.round(this.precent.min * (this.data.array.length - 1));
    const max = Math.round(this.precent.max * (this.data.array.length - 1));
    this.tabText.min = this.data.array[min];
    this.tabText.max = this.data.array[max];
    this.setInput();
  }

  init() {
    if (this.data.isArray) {
      this.observer.addEventListener('setPrecent', () => {
        this.setArrayValue();
      });
    } else {
      this.tabText.min = round(this.data.minToggleValue, this.data.step);
      this.tabText.max = round(this.data.maxToggleValue, this.data.step);
    }
    this.minInput = document.querySelector(`#${this.data.minInputId}`);
    this.maxInput = document.querySelector(`#${this.data.maxInputId}`);
    this.setInput();
  }

  setScale() {
    if (this.data.isArray) {
      if (this.data.isScale) {
        this.scale = this.data.array;
      }
    } else if (this.data.isScale) {
      let quantity = this.data.scaleQuantity;
      quantity = (quantity < 2) ? 2 : quantity;
      for (let i = 0; i < quantity; i += 1) {
        const textValue: number = Math.round(
          ((this.data.minValue + ((this.data.maxValue - this.data.minValue)
          / (quantity - 1))) * i) / this.data.step,
        ) * this.data.step;
        const text: string = round(textValue, this.data.step);
        this.scale.push(text);
      }
    }
  }

  addListener() {
    const onChangeValue = () => {
      if (this.data.isArray) {
        this.setArrayValue();
      } else {
        this.tabText.min = round(this.value.min, this.data.step);
        this.tabText.max = round(this.value.max, this.data.step);
      }
      this.setInput();
      this.observer.dispatchEvent(new CustomEvent('changeTabText'));
    };
    this.observer.addEventListener('changeValue', onChangeValue);
  }

  changeInput() {
    const onBlur = () => {
      if (this.data.isArray) {
        const inArray = (value, limit) => {
          if (this.data.array.includes(value)) {
            return value;
          }
          return limit;
        };
        this.minInput.value = inArray(this.minInput.value, this.data.array[0]);
        this.maxInput.value = inArray(
          this.maxInput.value,
          this.data.array[this.data.array.length - 1],
        );
        this.value.min = this.data.array.indexOf(this.minInput.value);
        this.value.max = this.data.array.indexOf(this.maxInput.value);
        if (this.value.min > this.value.max) {
          this.value.min = this.value.max;
          this.minInput.value = this.maxInput.value;
        }
        this.tabText.min = this.minInput.value;
        this.tabText.max = this.maxInput.value;
      } else {
        this.value.min = +this.minInput.value;
        this.value.max = +this.maxInput.value;
        this.value.min = setLimit(this.value.min, this.data.minValue, this.value.max);
        this.value.max = setLimit(this.value.max, this.value.min, this.data.maxValue);
        this.minInput.value = this.value.min.toString();
        this.maxInput.value = this.value.max.toString();
        this.tabText.min = round(this.minInput.value, this.data.step);
        this.tabText.max = round(this.maxInput.value, this.data.step);
      }
      this.observer.dispatchEvent(new CustomEvent('changeInput'));
    };
    this.minInput.addEventListener('blur', onBlur);
    this.maxInput.addEventListener('blur', onBlur);
  }
}

export default Model;
