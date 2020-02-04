export class Scale {

	slider: HTMLElement;
	quantity: number;
	isVertical: boolean;

	constructor(slider, quantity, isVertical) {
		this.slider = slider;
		this.quantity = quantity;
		if (this.quantity < 2) {
			this.quantity = 2;
		}
		this.isVertical = isVertical;
		this.createItem();
	}

	createItem() {
		const bar: HTMLElement = this.slider.querySelector('.ts-slider__bar');
		console.log(bar.offsetWidth);
		for (let i = 0; i < this.quantity; i++) {
			console.log(bar.offsetWidth / (i + 1));
			const scaleItem = document.createElement('div');
			scaleItem.classList.add('ts-slider__scale-item');
			scaleItem.style.left = `${bar.offsetWidth / (this.quantity - 1) * i}px`;
			scaleItem.textContent = `${bar.offsetWidth / (this.quantity - 1) * i}`;
			bar.append(scaleItem);
		}
	}

}