export class Toggle {

	toggle: HTMLElement;
	min: number;
	max: number;
	mouseValue: number;
	value: number;
	vertical: boolean;
	isFixed: boolean;

	constructor(toggle, min, max, value, vertical) {
		this.toggle = toggle;
		this.min = min;
		this.max = max;
		this.mouseValue = value;
		this.value = value;
		this.vertical = vertical;
		this.isFixed = false;
		this.setStyle();
	}
	setStyle() {
		if (this.vertical) {
			this.toggle.style.top = `${this.value}px`;
		} else {
			this.toggle.style.left = `${this.value}px`;
		}
	}
	moveToggle() {
		const onMouseDown = (evt) => {
			evt.preventDefault();
			let shiftX = evt.clientX - this.toggle.offsetLeft;
			let shiftY = evt.clientY - this.toggle.offsetTop;
			let startValue = this.mouseValue;
			const moveAt = (pageX, pageY) => {
				if (this.vertical) {
					this.mouseValue = pageY - shiftY;
				} else {
					this.mouseValue = pageX - shiftX;
				}
				this.value = this.mouseValue;
				if (this.value > this.max) {
					this.value = this.max;
				} else if (this.value < this.min) {
					this.value = this.min;
				}
				if (this.isFixed) {
					this.value = startValue;
				}
				this.setStyle();
			}
			moveAt(evt.pageX, evt.pageY);

			const onMouseMove = (moveEvt) => {
				moveAt(moveEvt.pageX, moveEvt. pageY);
			}
			const onMouseUp = (upEvt) => {
				upEvt.preventDefault();
				this.mouseValue = this.value;
				document.removeEventListener('mouseup', onMouseUp);
				document.removeEventListener('mousemove', onMouseMove);
			}
			document.addEventListener('mousemove', onMouseMove);
			document.addEventListener('mouseup', onMouseUp);
		}
		this.toggle.addEventListener('mousedown', onMouseDown);
	}
}

