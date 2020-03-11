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
});


