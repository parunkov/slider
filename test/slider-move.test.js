import {$} from '../node_modules/jquery/dist/jquery.js';
// import {moveToggle, left} from '../src/slider-move.ts';

// let left;
// function moveToggle(toggle, min, max) {
// 	const onMouseDown = (evt) => {
// 		evt.preventDefault();
// 		let startCoordX = evt.clientX;
// 		let toggleLeft;

// 		const onMouseMove = (moveEvt) => {
// 			moveEvt.preventDefault();
// 			let shift = startCoordX - moveEvt.clientX;
// 			startCoordX = moveEvt.clientX;
// 			toggleLeft = toggle.offsetLeft - shift;
// 			if (toggleLeft < min) {
// 				toggleLeft = min;
// 			} else if (toggleLeft > max) {
// 				toggleLeft = max;
// 			} 
// 			toggle.style.left = `${toggleLeft}px`;
// 			left = toggleLeft;
// 			console.log(left);
// 		}
// 		const onMouseUp = (upEvt) => {
// 			upEvt.preventDefault();
// 			document.removeEventListener('mouseup', onMouseUp);
// 			document.removeEventListener('mousemove', onMouseMove);
// 		}
// 		document.addEventListener('mousemove', onMouseMove);
// 		document.addEventListener('mouseup', onMouseUp);
// 	}
// 	toggle.addEventListener('mousedown', onMouseDown);
// }

let toggle = setFixtures();
toggle.offsetLeft = 0;
toggle.pageX = 0;
const addMethodAddEventListener = (obj) => {
	obj.addEventListener = (evt, arg) => {
		if (evt === 'mousedown') {
			return obj.mousedown(arg);
		} else if (evt === 'mousemove') {
			return obj.mousemove(arg);
		} else if (evt === 'mouseup') {
			return obj.mouseup(arg);
		}
	}
}
addMethodAddEventListener(toggle);

// toggle.addEventListener('mousedown', function() {
// 	console.log('addEventListener добавлен');
// });

const min = 0;
const max = 100;

// moveToggle(toggle, 0, 100);
// console.log(moveToggle);
// console.log(left);
// console.log(toggle.pageX);
console.log(toggle.mousemove.pageX);
toggle.trigger('mousemove', toggle.pageX = 100);
// console.log(toggle.trigger('mousemove'));
// console.log(toggle.pageX);

describe('Toggle', function() {
	it('mousedown', function() {
		spyOnEvent(toggle, 'mousedown');
		toggle.addEventListener('mousedown', (evt) => {
			evt.preventDefault;
			// console.log('!!!');
			// console.log(evt.clientX);
			// for (let key in evt) {
			// 	console.log(key);
			// }
			let startCoordX = evt.clientX;
			console.log(startCoordX);
			let toggleLeft;
		});
		toggle.trigger('mousedown');
		expect('mousedown').toHaveBeenTriggeredOn(toggle);
	});
	it('mousemove', function() {
		spyOnEvent(toggle, 'mousemove');
		toggle.trigger('mousemove');
		expect('mousemove').toHaveBeenTriggeredOn(toggle);
	});
	// it('mousemove', function() {
	// 	spyOnEvent(toggle, 'mousedown');
	// 	spyOnEvent(toggle, 'mousemove');
	// 	moveToggle(toggle, 0, 100);
	// 	toggle.trigger('mousedown');
	// 	toggle.trigger('mousemove', toggle.pageX = 50);
	// 	expect(toggle.pageX).toEqual(50);
	// 	// moveToggle(toggle, 0, 100);
	// 	console.log(left);
	// 	console.log(moveToggle(toggle, 0, 100));
	// 	// expect(left).toEqual(50);
	// });
});

