export class Toggle {

	toggle: HTMLElement;
	min: number;
	max: number;
	value: number;
	vertical: boolean;
	isFixed: boolean;

	constructor(toggle, min, max, value, vertical) {
		this.toggle = toggle;
		this.min = min;
		this.max = max;
		this.value = value;
		this.vertical = vertical;
		this.isFixed = false;
	}
	moveToggle() {
		const onMouseDown = (evt) => {
			evt.preventDefault();
			let startCoordX: number = evt.clientX;
			let startCoordY: number = evt.clientY;
			let toggleLeft: number;
			let toggleTop: number;
			// this.toggle.hidden = true;
			// console.log(document.elementFromPoint(evt.pageX, evt.pageY));
			// this.toggle.hidden = false;
			// console.log(evt.target);

			const onMouseMove = (moveEvt) => {
				// console.log(this.isFixed);
				if (this.vertical) {
					moveEvt.preventDefault();
					let shift: number = startCoordY - moveEvt.clientY;
					startCoordY = moveEvt.clientY;
					if (this.isFixed) {
						shift = 0;
					}
					toggleTop = this.toggle.offsetTop - shift;
					if (toggleTop < this.min) {
						toggleTop = this.min;
					} else if (toggleTop > this.max) {
						toggleTop = this.max;
					} 
					this.toggle.style.top = `${toggleTop}px`;
					this.value = toggleTop;
				} else {
					moveEvt.preventDefault();
					let shift: number = startCoordX - moveEvt.clientX;
					startCoordX = moveEvt.clientX;
					if (this.isFixed) {
						shift = 0;
					}
					toggleLeft = this.toggle.offsetLeft - shift;
					if (toggleLeft < this.min) {
						toggleLeft = this.min;
					} else if (toggleLeft > this.max) {
						toggleLeft = this.max;
					} 
					this.toggle.style.left = `${toggleLeft}px`;
					this.value = toggleLeft;
				}
			}
			const onMouseUp = (upEvt) => {
				upEvt.preventDefault();
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

