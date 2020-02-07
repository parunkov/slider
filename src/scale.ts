import {round} from './functions.ts';

export class Scale {

	slider: HTMLElement;
	step: number;
	quantity: number;
	isVertical: boolean;
	min: number;
	max: number;

	constructor(slider, data) {
		this.slider = slider;
		this.step = data.step;
		this.min = data.minValue;
		this.max = data.maxValue;
		this.quantity = data.scaleQuantity;
		if (this.quantity < 2) {
			this.quantity = 2;
		}
		this.isVertical = data.isVertical;
		this.createItem();
	}

	createItem() {
		const bar: HTMLElement = this.slider.querySelector('.ts-slider__bar');
		for (let i = 0; i < this.quantity; i++) {
			const scaleItem = document.createElement('div');
			scaleItem.classList.add('ts-slider__scale-item');
			scaleItem.textContent = `${round((this.min + (this.max - this.min) / (this.quantity - 1) * i), this.step)}`;
			if (this.isVertical) {
				scaleItem.classList.add('ts-slider__scale-item--vertical');
				scaleItem.style.top = `${bar.offsetHeight / (this.quantity - 1) * i}px`;
				// scaleItem.textContent = `${bar.offsetHeight / (this.quantity - 1) * i}`;
			} else {
				scaleItem.style.left = `${bar.offsetWidth / (this.quantity - 1) * i}px`;
				// scaleItem.textContent = `${bar.offsetWidth / (this.quantity - 1) * i}`;
			}			
			bar.append(scaleItem);
		}
	}

}