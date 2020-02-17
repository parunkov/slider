import {setLimit} from './functions.ts';

const setToggleStyle = (toggle: HTMLElement, pixel: number, isVertical: boolean) => {
		if (isVertical) {
			toggle.style.top = `${pixel}px`;
		} else {
			toggle.style.left = `${pixel}px`;
	}
}

class Toggle {

	toggle: HTMLElement;
	min: number;
	max: number;
	mousePixel: number;
	pixel: number;
	precent: number;
	size: number;
	isVertical: boolean;
	isFixed: boolean;

	constructor(toggle, precent, size, isVertical) {
		this.toggle = toggle;
		this.size = size;
		this.precent = precent;
		this.mousePixel = this.precent * this.size;
		this.pixel = this.mousePixel;
		this.isVertical = isVertical;
		this.isFixed = false;
		this.setStyle();
		this.onMoveToggle();
	}
	setStyle() {
		setToggleStyle(this.toggle, this.pixel, this.isVertical);
	}
	onMoveToggle() {
		const onMouseDown = (evt) => {
			let shiftX: number = evt.clientX - this.toggle.offsetLeft;
			let shiftY: number = evt.clientY - this.toggle.offsetTop;
			let startPixel: number = this.mousePixel;
			const moveAt = (pageX, pageY) => {
				if (this.isVertical) {
					this.mousePixel = pageY - shiftY;
				} else {
					this.mousePixel = pageX - shiftX;
				}
				this.pixel = this.mousePixel;
				this.pixel = setLimit(this.pixel, this.min * this.size, this.max * this.size);
				if (this.isFixed) {
					this.pixel = startPixel;
				}
				this.setStyle();
				this.precent = this.pixel / this.size;
				console.log(this.precent);
			}
			moveAt(evt.pageX, evt.pageY);

			const onMouseMove = (moveEvt) => {
				moveAt(moveEvt.pageX, moveEvt. pageY);
			}
			const onMouseUp = (upEvt) => {
				this.mousePixel = this.pixel;
				document.removeEventListener('mouseup', onMouseUp);
				document.removeEventListener('mousemove', onMouseMove);
			}
			document.addEventListener('mousemove', onMouseMove);
			document.addEventListener('mouseup', onMouseUp);
		}
		this.toggle.addEventListener('mousedown', onMouseDown);
	}
}

export {setToggleStyle, Toggle};


// //old

// import {setLimit} from './functions.ts';

// const setToggleStyle = (toggle: HTMLElement, value: number, vertical: boolean) => {
// 		if (vertical) {
// 			toggle.style.top = `${value}px`;
// 		} else {
// 			toggle.style.left = `${value}px`;
// 	}
// }

// class Toggle {

// 	toggle: HTMLElement;
// 	min: number;
// 	max: number;
// 	mouseValue: number;
// 	value: number;
// 	vertical: boolean;
// 	isFixed: boolean;

// 	constructor(toggle, min, max, value, vertical) {
// 		this.toggle = toggle;
// 		this.min = min;
// 		this.max = max;
// 		this.mouseValue = value;
// 		this.value = value;
// 		this.vertical = vertical;
// 		this.isFixed = false;
// 		this.setStyle();
// 	}
// 	setStyle() {
// 		setToggleStyle(this.toggle, this.value, this.vertical);
// 	}
// 	moveToggle() {
// 		const onMouseDown = (evt) => {
// 			evt.preventDefault();
// 			let shiftX: number = evt.clientX - this.toggle.offsetLeft;
// 			let shiftY: number = evt.clientY - this.toggle.offsetTop;
// 			let startValue: number = this.mouseValue;
// 			const moveAt = (pageX, pageY) => {
// 				if (this.vertical) {
// 					this.mouseValue = pageY - shiftY;
// 				} else {
// 					this.mouseValue = pageX - shiftX;
// 				}
// 				this.value = this.mouseValue;
// 				this.value = setLimit(this.value, this.min, this.max);
// 				if (this.isFixed) {
// 					this.value = startValue;
// 				}
// 				this.setStyle();
// 			}
// 			moveAt(evt.pageX, evt.pageY);

// 			const onMouseMove = (moveEvt) => {
// 				moveAt(moveEvt.pageX, moveEvt. pageY);
// 			}
// 			const onMouseUp = (upEvt) => {
// 				upEvt.preventDefault();
// 				this.mouseValue = this.value;
// 				document.removeEventListener('mouseup', onMouseUp);
// 				document.removeEventListener('mousemove', onMouseMove);
// 			}
// 			document.addEventListener('mousemove', onMouseMove);
// 			document.addEventListener('mouseup', onMouseUp);
// 		}
// 		this.toggle.addEventListener('mousedown', onMouseDown);
// 	}
// }

// export {setToggleStyle, Toggle};