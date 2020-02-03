import {$} from '../node_modules/jquery/dist/jquery.js';
import {Toggle} from '../src/slider-move.ts';

let toggleDiv = setFixtures()[0];

let toggle = new Toggle(toggleDiv, 0, 300, 200, false);

describe('setStyle', function() {
	it('horizontal', function() {
		toggleDiv.style.left = '';
		toggleDiv.style.top = '';
		toggle.vertical = false;
		toggle.setStyle();
		expect(toggleDiv.style.left).toBe('200px');
		expect(toggleDiv.style.top).toBe('');
	});
	it('vertical', function() {
		toggleDiv.style.left = '';
		toggleDiv.style.top = '';
		toggle.vertical = true;
		toggle.setStyle();
		expect(toggleDiv.style.left).toBe('');
		expect(toggleDiv.style.top).toBe('200px');
	});
});


// console.log(toggleDiv);
// toggleDiv.pageX = 100;
// toggleDiv.pageY = 100;
// const addMethodAddEventListener = (obj) => {
// 	obj.addEventListener = (evt, arg) => {
// 		if (evt === 'mousedown') {
// 			return obj.mousedown(arg);
// 		} else if (evt === 'mousemove') {
// 			return obj.mousemove(arg);
// 		} else if (evt === 'mouseup') {
// 			return obj.mouseup(arg);
// 		}
// 	}
// }
// addMethodAddEventListener(toggleDiv);


// toggleDiv.trigger('mousemove', toggleDiv.pageX = 200,  toggleDiv.pageY = 200);

// // import {moveToggle, left} from '../src/slider-move.ts';

// // let left;
// // function moveToggle(toggle, min, max) {
// // 	const onMouseDown = (evt) => {
// // 		evt.preventDefault();
// // 		let startCoordX = evt.clientX;
// // 		let toggleLeft;

// // 		const onMouseMove = (moveEvt) => {
// // 			moveEvt.preventDefault();
// // 			let shift = startCoordX - moveEvt.clientX;
// // 			startCoordX = moveEvt.clientX;
// // 			toggleLeft = toggle.offsetLeft - shift;
// // 			if (toggleLeft < min) {
// // 				toggleLeft = min;
// // 			} else if (toggleLeft > max) {
// // 				toggleLeft = max;
// // 			} 
// // 			toggle.style.left = `${toggleLeft}px`;
// // 			left = toggleLeft;
// // 			console.log(left);
// // 		}
// // 		const onMouseUp = (upEvt) => {
// // 			upEvt.preventDefault();
// // 			document.removeEventListener('mouseup', onMouseUp);
// // 			document.removeEventListener('mousemove', onMouseMove);
// // 		}
// // 		document.addEventListener('mousemove', onMouseMove);
// // 		document.addEventListener('mouseup', onMouseUp);
// // 	}
// // 	toggle.addEventListener('mousedown', onMouseDown);
// // }


// // toggle.addEventListener('mousedown', function() {
// // 	console.log('addEventListener добавлен');
// // });

// // const min = 0;
// // const max = 100;

// // moveToggle(toggle, 0, 100);
// // console.log(moveToggle);
// // console.log(left);
// // console.log(toggle.pageX);
// // console.log(toggleDiv[0].mousemove.pageX);
// toggleDiv.trigger('mousemove', toggleDiv.pageX = 100);
// // console.log(toggle.trigger('mousemove'));
// // console.log(toggle.pageX);

// describe('Toggle', function() {
// 	it('mousedown', function() {
// 		spyOnEvent(toggleDiv, 'mousedown');
// 		toggleDiv.addEventListener('mousedown', (evt) => {
// 			evt.preventDefault;
// 			// console.log('!!!');
// 			// console.log(evt.clientX);
// 			// for (let key in evt) {
// 			// 	console.log(key);
// 			// }
// 			let startCoordX = evt.clientX;
// 			// console.log(startCoordX);
// 			let toggleLeft;
// 		});
// 		toggleDiv.trigger('mousedown');
// 		expect('mousedown').toHaveBeenTriggeredOn(toggleDiv);
// 	});
// 	it('mousemove', function() {
// 		spyOnEvent(toggleDiv, 'mousemove');
// 		toggleDiv.trigger('mousemove');
// 		expect('mousemove').toHaveBeenTriggeredOn(toggleDiv);
// 	});
// 	// it('mousemove', function() {
// 	// 	spyOnEvent(toggle, 'mousedown');
// 	// 	spyOnEvent(toggle, 'mousemove');
// 	// 	moveToggle(toggle, 0, 100);
// 	// 	toggle.trigger('mousedown');
// 	// 	toggle.trigger('mousemove', toggle.pageX = 50);
// 	// 	expect(toggle.pageX).toEqual(50);
// 	// 	// moveToggle(toggle, 0, 100);
// 	// 	console.log(left);
// 	// 	console.log(moveToggle(toggle, 0, 100));
// 	// 	// expect(left).toEqual(50);
// 	// });
// });

