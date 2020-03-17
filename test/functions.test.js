import {
  round,
  setLimit,
  toPrecent,
  toValue,
  setRangeStyle,
} from '../src/functions.ts';

describe('Функция round', () => {
  it('Округляет до шага', () => {
    expect(round(8, 10)).toBe('10');
    expect(round(2, 10)).toBe('0');
  });
});

describe('Функция setLimit', () => {
  it('Устанавливает граничные значения', () => {
    expect(setLimit(5, 10, 15)).toEqual(10);
    expect(setLimit(20, 10, 15)).toEqual(15);
    expect(setLimit(12, 10, 15)).toEqual(12);
  });
});

describe('Функция toPrecent', () => {
  it('Пересчитывает значение в процент', () => {
    expect(toPrecent(30, 0, 100)).toEqual(0.3);
  });
});

describe('Функция toValue', () => {
  it('Пересчитывает процент в значение', () => {
    expect(toValue(0.3, 0, 100)).toEqual(30);
    expect(toValue(0.5, 100, 200)).toEqual(150);
  });
});

describe('Функция setRangeStyle', () => {
  const div = setFixtures()[0];
  it('Устанавливает стиль range для вертикального слайдера', () => {
    setRangeStyle(div, 10, 100, true);
    expect(div.style.top).toEqual('10px');
    expect(div.style.height).toEqual('90px');
  });
  it('Устанавливает стиль range для горизонтального слайдера', () => {
    setRangeStyle(div, 10, 100, false);
    expect(div.style.left).toEqual('10px');
    expect(div.style.width).toEqual('90px');
  });
});
