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



export {setMouseHandler};