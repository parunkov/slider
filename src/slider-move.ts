export class Toggle {

	toggle: HTMLElement;
	min: number;
	max: number;
	value: number;

	constructor(toggle: HTMLElement, min: number, max: number, value: number) {
		this.toggle = toggle;
		this.min = min;
		this.max = max;
		this.value = value;
	}
	moveToggle() {
		const onMouseDown = (evt) => {
			evt.preventDefault();
			let startCoordX: number = evt.clientX;
			let toggleLeft: number;

			const onMouseMove = (moveEvt) => {
				moveEvt.preventDefault();
				let shift: number = startCoordX - moveEvt.clientX;
				startCoordX = moveEvt.clientX;
				toggleLeft = this.toggle.offsetLeft - shift;
				if (toggleLeft < this.min) {
					toggleLeft = this.min;
				} else if (toggleLeft > this.max) {
					toggleLeft = this.max;
				} 
				this.toggle.style.left = `${toggleLeft}px`;
				this.value = toggleLeft;
			}
			const onMouseUp = (upEvt) => {
				upEvt.preventDefault();
				document.removeEventListener('mouseup', onMouseUp);
				document.removeEventListener('mousemove', onMouseMove);
			}
			document.addEventListener('mousemove', onMouseMove);
			document.addEventListener('mouseup', onMouseUp);
		}
		this.toggle.addEventListener('mousedown', onMouseDown);
	}
}

