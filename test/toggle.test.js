import Toggle from '../src/toggle.ts';

let wrap;
let toggleDiv;
let toggle;
beforeEach(function() {
	wrap = setFixtures()[0];
	toggleDiv = setFixtures()[0];
	toggle = new Toggle(toggleDiv, 0.5, 200, false);
	document.body.appendChild(wrap);
	wrap.appendChild(toggleDiv);
	wrap.style.position = 'absolute';
	wrap.style.left = '0';
	wrap.style.top = '0';
	wrap.style.width = '100px';
	wrap.style.height = '100px';
	toggleDiv.style.position = 'absolute';
	toggleDiv.style.left = '0';
	toggleDiv.style.top = '0';
	toggleDiv.style.width = '20px';
	toggleDiv.style.height = '20px';
});
const move = () => {
	let mousedown = new MouseEvent('mousedown', {clientX: 0, clientY: 0});
	let mousemove = new MouseEvent('mousemove', {clientX: 100, clientY: 100});
	let mouseup = new MouseEvent('mouseup');
	toggleDiv.dispatchEvent(mousedown);
	document.dispatchEvent(mousemove);
	document.dispatchEvent(mouseup);
}
afterEach(function() {
	toggleDiv.remove();
	toggle = undefined;
});

describe('Модуль Toggle', function() {
	it('setStyle horizontal - устанавливает style.left', function() {
		toggle.isVertical = false;
		toggle.setStyle();
		expect(toggleDiv.style.left).toBe('100px');
		expect(toggleDiv.style.top).toBe('0px');
	});
	it('setStyle vertical - устанавливает style.top', function() {
		toggle.isVertical = true;
		toggle.setStyle();
		expect(toggleDiv.style.left).toBe('0px');
		expect(toggleDiv.style.top).toBe('100px');
	});
	it('Бегунок перетаскивается по горизонтали при isVertical = false', function() {
		toggle.isVertical = false;
		move();
		expect(toggleDiv.style.left).toEqual('100px');
		expect(toggleDiv.style.top).toEqual('0px');
		expect(toggle.precent).toEqual(0.5);
	});
	it('Бегунок перетаскивается по вертикали при isVertical = true', function() {
		toggle.isVertical = true;
		move();
		expect(toggleDiv.style.left).toEqual('0px');
		expect(toggleDiv.style.top).toEqual('100px');
		expect(toggle.precent).toEqual(0.5);
	});
});


