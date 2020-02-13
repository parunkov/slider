const setMouseHandler = (elem, onMove, onDovn?, onUp?) => {

	const onMouseDown = (evt) => {
		if (onDovn) {
			onDovn(evt);
		}
		
		const onMouseMove = (moveEvt) => {
			onMove(moveEvt);
		}
		const onMouseUp = (upEvt) => {
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

const setLimit = (value: number, min: number, max: number) => {
	if (value > max) {
		value = max;
	} else if (value < min) {
		value = min;
	}
	return value;
}

export {setMouseHandler, round, setLimit};