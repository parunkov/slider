export const moveToggleFunc = (toggle: HTMLElement, min: number, max: number, vertical: boolean, isFixed: boolean, moveEvt) => {
	let toggleLeft: number;
	let toggleTop: number;
	let startCoordX: number = 0;
	let startCoordY: number = 0;
	let value: number;
	if (vertical) {
		moveEvt.preventDefault();
		let shift: number = startCoordY - moveEvt.clientY;
		startCoordY = moveEvt.clientY;
		if (isFixed) {
			shift = 0;
		}
		toggleTop = toggle.offsetTop - shift;
		if (toggleTop < min) {
			toggleTop = min;
		} else if (toggleTop > max) {
			toggleTop = max;
		} 
		toggle.style.top = `${toggleTop}px`;
		value = toggleTop;
	} else {
		moveEvt.preventDefault();
		let shift: number = startCoordX - moveEvt.clientX;
		startCoordX = moveEvt.clientX;
		if (isFixed) {
			shift = 0;
		}
		toggleLeft = toggle.offsetLeft - shift;
		if (toggleLeft < min) {
			toggleLeft = min;
		} else if (toggleLeft > max) {
			toggleLeft = max;
		} 
		toggle.style.left = `${toggleLeft}px`;
		value = toggleLeft;
	}
	return value;
}


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
			console.log(this.toggle.classList + ' down');
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
				// if (this.vertical) {
				// 	moveEvt.preventDefault();
				// 	let shift: number = startCoordY - moveEvt.clientY;
				// 	startCoordY = moveEvt.clientY;
				// 	if (this.isFixed) {
				// 		shift = 0;
				// 	}
				// 	toggleTop = this.toggle.offsetTop - shift;
				// 	if (toggleTop < this.min) {
				// 		toggleTop = this.min;
				// 	} else if (toggleTop > this.max) {
				// 		toggleTop = this.max;
				// 	} 
				// 	this.toggle.style.top = `${toggleTop}px`;
				// 	this.value = toggleTop;
				// } else {
				// 	moveEvt.preventDefault();
				// 	let shift: number = startCoordX - moveEvt.clientX;
				// 	startCoordX = moveEvt.clientX;
				// 	if (this.isFixed) {
				// 		shift = 0;
				// 	}
				// 	toggleLeft = this.toggle.offsetLeft - shift;
				// 	if (toggleLeft < this.min) {
				// 		toggleLeft = this.min;
				// 	} else if (toggleLeft > this.max) {
				// 		toggleLeft = this.max;
				// 	} 
				// 	this.toggle.style.left = `${toggleLeft}px`;
				// 	this.value = toggleLeft;
				// }

				value = moveToggleFunc(this.toggle, this.min, this.max, this.vertical, this.isFixed, this.moveEvt);
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

