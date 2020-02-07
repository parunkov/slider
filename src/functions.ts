const setMouseHandler = (elem, onMove, onDovn?, onUp?) => {

	const onMouseDown = (evt) => {
		evt.preventDefault();
		if (onDovn) {
			onDovn(evt);
		}
		
		const onMouseMove = (moveEvt) => {
			moveEvt.preventDefault();
			onMove(moveEvt);
		}
		const onMouseUp = (upEvt) => {
			upEvt.preventDefault();
			if (onUp) {
				onUp(upEvt);
			}
			document.removeEventListener('mouseup', onMouseUp);
			document.removeEventListener('mousemove', onMouseMove);
		}
		document.addEventListener('mousemove', onMouseMove);
		document.addEventListener('mouseup', onMouseUp);
	}

	document.addEventListener('mousedown', onMouseDown);

}

const round = (value: number, step: number) => {
	const precision = x => +( (x.toString().includes('.')) ? (x.toString().split('.').pop().length) : (0) );
	let rounded: string = (Math.round(value / step) * step).toFixed(precision(step));
	return rounded;
}

export {setMouseHandler, round};