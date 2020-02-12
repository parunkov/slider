import {$} from '../node_modules/jquery/dist/jquery.js';
import {Toggle} from '../src/toggle.ts';

let toggleDiv = setFixtures()[0];
let toggle = new Toggle(toggleDiv, 0, 300, 200, false);
const clearStyle = () => {
	toggleDiv.style.left = '';
	toggleDiv.style.top = '';
}

describe('Модуль Toggle', function() {
	it('setStyle horizontal - устанавливает style.left', function() {
		clearStyle();
		toggle.vertical = false;
		toggle.setStyle();
		// console.log(toggle);
		expect(toggleDiv.style.left).toBe('200px');
		expect(toggleDiv.style.top).toBe('');
	});
	it('setStyle vertical - устанавливает style.top', function() {
		clearStyle();
		toggle.vertical = true;
		toggle.setStyle();
		expect(toggleDiv.style.left).toBe('');
		expect(toggleDiv.style.top).toBe('200px');
	});
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


