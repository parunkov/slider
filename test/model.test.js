import Model from '../src/model.ts';

describe('Модуль Model', () => {
  let sliderWrap;
  let model;
  let input1;
  let input2;
  const data = {
    minInputId: 'page__input-1',
    maxInputId: 'page__input-2',
    isArray: false,
    array: [],
    step: 1,
    minValue: 0,
    maxValue: 10,
    minToggleValue: 3,
    maxToggleValue: 5,
    isRange: true,
    isVertical: false,
    isTab: true,
    isScale: true,
    scaleQuantity: 4,
  };

  beforeEach(() => {
    sliderWrap = setFixtures()[0];
    sliderWrap.setAttribute('id', 'modelwrapid');
    document.body.appendChild(sliderWrap);

    input1 = setFixtures()[0];
    input1.setAttribute('id', 'page__input-1');
    document.body.appendChild(input1);

    input2 = setFixtures()[0];
    input2.setAttribute('id', 'page__input-2');
    document.body.appendChild(input2);

    model = new Model(data);
  });

  afterEach(() => {
    sliderWrap.remove();
    model = undefined;
  });
  it('Устанавливает model.data', () => {
    expect(model.data).toBe(data);
  });
  it('Устанавливает model.value', () => {
    expect(model.value).toEqual({ min: 0, max: 0 });
  });
  it('Устанавливает model.TabText', () => {
    model.value = { min: 10, max: 20 };
    model.observer.dispatchEvent(new CustomEvent('changeValue'));
    expect(model.tabText).toEqual({ min: '10', max: '20' });
  });
  it('Изменяет input', () => {
    model.tabText.min = 'aaa';
    model.tabText.max = 'sss';
    model.setInput();
    expect(model.minInput.value).toEqual('aaa');
    expect(model.maxInput.value).toEqual('sss');
    model.data.isRange = false;
    model.init();
    expect(model.minInput.value).toEqual(0);
  });
  it('Создает массив значений шкалы', () => {
    expect(model.scale).toEqual(['0', '3', '7', '10']);
  });
  it('Отслеживает изменение значения', () => {
    model.value.min = 2;
    model.observer.dispatchEvent(new CustomEvent('changeValue'));
    expect(model.tabText.min).toEqual('2');
  });
});
