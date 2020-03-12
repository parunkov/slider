import {$} from '../node_modules/jquery/dist/jquery.js';
import {Toggle} from '../src/toggle.ts';

let wrap;
let toggleDiv;
let toggle;
const add = () => {
	wrap = setFixtures()[0];
	toggleDiv = setFixtures()[0];
	toggle = new Toggle(toggleDiv, 0.5, 200, false);
	document.body.appendChild(wrap);
	wrap.appendChild(toggleDiv);
	console.log(1);
	alert(1);
	wrap.style.position = 'absolute';
	toggleDiv.style.position = 'absolute';
	toggleDiv.style.left = '0';
	toggleDiv.style.top = '0';
	toggleDiv.style.width = '20px';
	toggleDiv.style.height = '20px';
	toggleDiv.style.background = 'red';
	console.log(1);
	alert(1);
}
// const clearStyle = () => {
// 	toggleDiv.style.left = '0';
// 	toggleDiv.style.top = '0';
// }
const remove = () => {
	toggleDiv.remove();
	toggle = undefined;
}

describe('Модуль Toggle', function() {
	it('setStyle horizontal - устанавливает style.left', function() {
		add();
		// clearStyle();
		toggle.isVertical = false;
		toggle.setStyle();
		expect(toggleDiv.style.left).toBe('100px');
		expect(toggleDiv.style.top).toBe('0px');
		remove();
	});
	it('setStyle vertical - устанавливает style.top', function() {
		add();
		// clearStyle();
		toggle.isVertical = true;
		toggle.setStyle();
		expect(toggleDiv.style.left).toBe('0px');
		expect(toggleDiv.style.top).toBe('100px');
		remove();
	});
	it('!', function() {
		add();
		// clearStyle();
		toggle.isVertical = false;
		toggle.onMoveToggle();
		// const spy = spyOn(toggle, 'onMoveToggle');
		// const mousedown = new MouseEvent('mousedown');
		// toggle.mousePixel = 0;
		// console.log(toggle.clientX);
		let mousedown = new MouseEvent('mousedown', {clientX: 10, clientY: 10});
		let mousemove = new MouseEvent('mousemove', {clientX: 100, clientY: 100});
		let mouseup = new MouseEvent('mouseup');
		// console.log(mousemove.offsetLeft);
		toggleDiv.dispatchEvent(mousedown);
		// console.log(toggle.a);
		toggleDiv.dispatchEvent(mousemove);
		// console.log(toggle.a);
		toggleDiv.dispatchEvent(mouseup);
		expect(toggle.precent).toEqual(5);
		expect(toggleDiv.style.left).toBe('100px');
		expect(toggleDiv.style.top).toBe('100px');
		// expect(spy).toHaveBeenCalled();
		remove();
	});
});


