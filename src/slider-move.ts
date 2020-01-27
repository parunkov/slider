export let left

// left = 0;

export function moveToggle(toggle, min, max) {
	const onMouseDown = (evt) => {
		// console.log(evt);
		// for (let key in evt) {
		// 	console.log(key);
		// }
		evt.preventDefault();
		let startCoordX: number = evt.clientX;
		let toggleLeft: number;

		const onMouseMove = (moveEvt) => {
			moveEvt.preventDefault();
			let shift: number = startCoordX - moveEvt.clientX;
			startCoordX = moveEvt.clientX;
			toggleLeft = toggle.offsetLeft - shift;
			if (toggleLeft < min) {
				toggleLeft = min;
			} else if (toggleLeft > max) {
				toggleLeft = max;
			} 
			toggle.style.left = `${toggleLeft}px`;
			left = toggleLeft;
		}
		const onMouseUp = (upEvt) => {
			upEvt.preventDefault();
			document.removeEventListener('mouseup', onMouseUp);
			document.removeEventListener('mousemove', onMouseMove);
		}
		document.addEventListener('mousemove', onMouseMove);
		document.addEventListener('mouseup', onMouseUp);
	}
	toggle.addEventListener('mousedown', onMouseDown);
}