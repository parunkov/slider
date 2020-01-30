export class Toggle {

	toggle: HTMLElement;
	min: number;
	max: number;
	mouseValue: number;
	value: number;
	vertical: boolean;
	isFixed: boolean;

	constructor(toggle, min, max, mouseValue, vertical) {
		this.toggle = toggle;
		this.min = min;
		this.max = max;
		this.mouseValue = mouseValue;
		this.value = mouseValue;
		this.vertical = vertical;
		this.isFixed = false;
	}
	moveToggle() {
		const onMouseDown = (evt) => {
			evt.preventDefault();
			// console.log(this.toggle.classList + ' down');
			// let startCoordX: number = evt.clientX;
			// let startCoordY: number = evt.clientY;
			// let toggleLeft: number;
			// let toggleTop: number;
			let shiftX = evt.clientX - this.toggle.offsetLeft;
			let shiftY = evt.clientY - this.toggle.offsetTop;
			const moveAt = (pageX, pageY) => {
				if (this.vertical) {
					this.toggle.style.top = `${pageY- shiftY}px`;
				} else {
					this.toggle.style.left = `${pageX - shiftX}px`;
				}
				// this.toggle.style.left = `${pageX - shiftX}px`;
				// this.toggle.style.top = `${pageY- shiftY}px`;
			}
			moveAt(evt.pageX, evt.pageY);

			const onMouseMove = (moveEvt) => {
				moveAt(moveEvt.pageX, moveEvt. pageY);
				// if (this.vertical) {
				// 	moveEvt.preventDefault();
				// 	let shift: number = startCoordY - moveEvt.clientY;
				// 	startCoordY = moveEvt.clientY;
				// 	this.mouseValue = this.toggle.offsetTop - shift;
				// } else {
				// 	moveEvt.preventDefault();
				// 	let shift: number = startCoordX - moveEvt.clientX;
				// 	startCoordX = moveEvt.clientX;
				// 	this.mouseValue = this.toggle.offsetLeft - shift;
				// }
				// console.log(this.mouseValue);
				// this.value = this.mouseValue;
				// if (this.value < this.min) {
				// 	this.value = this.min;
				// } else if (this.value > this.max) {
				// 	this.value = this.max;
				// }
				// if (this.vertical) {
				// 	this.toggle.style.top = `${this.value}px`;
				// } else {
				// 	this.toggle.style.left = `${this.value}px`;
				// }
			}
			const onMouseUp = (upEvt) => {
				upEvt.preventDefault();
				console.log(this.toggle.classList + ' up');
				this.isFixed = false;
				document.removeEventListener('mouseup', onMouseUp);
				document.removeEventListener('mousemove', onMouseMove);
			}
			document.addEventListener('mousemove', onMouseMove);
			document.addEventListener('mouseup', onMouseUp);
		}
		this.toggle.addEventListener('mousedown', onMouseDown);
	}
}

