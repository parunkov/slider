import {$} from '../node_modules/jquery/dist/jquery.js';
import {Toggle} from '../src/toggle.ts';

let toggleDiv;
let toggle;
const add = () => {
	toggleDiv = setFixtures()[0];
	toggle = new Toggle(toggleDiv, 0.5, 200, false);
	document.body.appendChild(toggleDiv);
}
const clearStyle = () => {
	toggleDiv.style.left = '';
	toggleDiv.style.top = '';
}
const remove = () => {
	toggleDiv.remove();
	toggle = undefined;
}

describe('Модуль Toggle', function() {
	it('setStyle horizontal - устанавливает style.left', function() {
		add();
		clearStyle();
		toggle.isVertical = false;
		toggle.setStyle();
		expect(toggleDiv.style.left).toBe('100px');
		expect(toggleDiv.style.top).toBe('');
		remove();
	});
	it('setStyle vertical - устанавливает style.top', function() {
		add();
		clearStyle();
		toggle.isVertical = true;
		toggle.setStyle();
		expect(toggleDiv.style.left).toBe('');
		expect(toggleDiv.style.top).toBe('100px');
		remove();
	});
	// it('!', function() {
	// 	add();
	// 	clearStyle();
	// 	toggle.isVertical = true;
	// 	const spy = spyOn(toggle, 'onMoveToggle');
	// 	// const mousedown = new MouseEvent('mousedown');
	// 	// toggle.mousePixel = 0;
	// 	// console.log(toggle.clientX);
	// 	let mousedown = new MouseEvent('mousedown', {clientX: 0, clientY: 0});
	// 	let mousemove = new MouseEvent('mousemove', {clientX: 100, clientY: 100});
	// 	let mouseup = new MouseEvent('mouseup');
	// 	// console.log(mousemove.offsetLeft);
	// 	toggleDiv.dispatchEvent(mousedown);
	// 	console.log(toggle.a);
	// 	// toggleDiv.dispatchEvent(mousemove);
	// 	console.log(toggle.a);
	// 	// toggleDiv.dispatchEvent(mouseup);
	// 	expect(toggle.precent).toEqual(5);
	// 	expect(toggleDiv.style.left).toBe('100px');
	// 	expect(toggleDiv.style.top).toBe('100px');
	// 	expect(spy).toHaveBeenCalled();
	// });
});


// console.log(toggleDiv);
// toggleDiv.clientX = 100;
// toggleDiv.clientY = 100;
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
// const mousedown = new MouseEvent('mousedown');
// const mousemove = new MouseEvent('mousemove', {
//   clientX: 200,
//   clientY: 200
// });

// const mouseup = new MouseEvent('mouseup');
// toggleDiv.dispatchEvent(mousedown);
// toggleDiv.dispatchEvent(mousemove);
// // toggleDiv.clientX = 200;
// // toggleDiv.clientY = 200;
// toggleDiv.dispatchEvent(mouseup);
// console.log(toggleDiv);


