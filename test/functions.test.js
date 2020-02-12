import {$} from '../node_modules/jquery/dist/jquery.js';
import {round, setLimit} from '../src/functions.ts';

describe('Функция round', function() {
	it('Округляет до шага', function() {
		expect(round(8, 10)).toBe('10');
		expect(round(2, 10)).toBe('0');
	});
});

describe('Функция setLimit', function() {
	it('Устанавливает граничные значения', function() {
		expect(setLimit(5, 10, 15)).toEqual(10);
		expect(setLimit(20, 10, 15)).toEqual(15);
		expect(setLimit(12, 10, 15)).toEqual(12);
	});
});