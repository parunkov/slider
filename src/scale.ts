import {round} from './functions.ts';

export class Scale {

	slider: HTMLElement;
	scale: string[];
	isVertical: boolean;

	constructor(slider, scale, isVertical) {
		this.slider = slider;
		this.scale = scale;
		this.isVertical = isVertical;
		this.createItem();
	}

	createItem() {
		// console.log(this.slider);
		// console.log(this.slider.offsetWidth);
		const bar: HTMLElement = this.slider.querySelector('.ts-slider__bar');
		// console.log(bar.offsetWidth + ' ' + bar.offsetHeight);
		// document.addEventListener('load', () => {
		// 	console.log(bar.offsetWidth + ' ' + bar.offsetHeight);
		// });
		for (let i = 0; i < this.scale.length; i++) {
			const scaleItem = document.createElement('div');
			scaleItem.classList.add('ts-slider__scale-item');
			scaleItem.textContent = this.scale[i];
			if (this.isVertical) {
				scaleItem.classList.add('ts-slider__scale-item--vertical');
				scaleItem.style.top = `${bar.offsetHeight / (this.scale.length - 1) * i}px`;
			} else {
				scaleItem.style.left = `${bar.offsetWidth / (this.scale.length - 1) * i}px`;
				// console.log(bar.offsetWidth);
			}	
			bar.append(scaleItem);
		}
	}
}