import {$} from '../node_modules/jquery/dist/jquery.js';
import {valueTab} from '../src/value-tab.ts';

let tabDiv = setFixtures()[0];

let tab = new valueTab(tabDiv, 0);
describe('valueTab', function() {
	it('setValue', function() {
		tab.value = 100;
		tab.setValue();
		expect(tabDiv.textContent).toBe('100');
	});
});