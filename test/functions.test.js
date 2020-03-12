import {round, setLimit, toPrecent, toValue, setRangeStyle} from '../src/functions.ts';

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

describe('Функция toPrecent', function() {
	it('Пересчитывает значение в процент', function() {
		expect(toPrecent(30, 0, 100)).toEqual(0.3);
	});
});

describe('Функция toValue', function() {
	it('Пересчитывает процент в значение', function() {
		expect(toValue(0.3, 0, 100)).toEqual(30);
		expect(toValue(0.5, 100, 200)).toEqual(150);
	});
});

describe('Функция setRangeStyle', function() {
	const div = setFixtures()[0];
	it('Устанавливает стиль range для вертикального слайдера', function() {
		setRangeStyle(div, 10, 100, true);
		expect(div.style.top).toEqual('10px');
		expect(div.style.height).toEqual('90px');
	});
	it('Устанавливает стиль range для горизонтального слайдера', function() {
		setRangeStyle(div, 10, 100, false);
		expect(div.style.left).toEqual('10px');
		expect(div.style.width).toEqual('90px');
	});
});