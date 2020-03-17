import View from '../src/view.ts';

describe('Модуль View', () => {
  let sliderWrap;
  let view;
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
    sliderWrap.setAttribute('id', 'viewwrapid');
    document.body.style.position = 'absolute';
    sliderWrap.style.position = 'absolute';
    sliderWrap.style.left = '0';
    sliderWrap.style.top = '0';
    sliderWrap.style.width = '100px';
    document.body.appendChild(sliderWrap);
    // document.body.style.position = 'absolute';
    view = new View(data, sliderWrap);
  });
  afterEach(() => {
    sliderWrap.remove();
    view = undefined;
  });
  it('Устанавливает view.data', () => {
    expect(view.data).toBe(data);
  });
  it('Создает view', () => {
    expect(view.minToggleElem).toBeDefined();
    expect(view.maxToggleElem).toBeDefined();
    expect(view.minTabElem).toBeDefined();
    expect(view.maxTabElem).toBeDefined();
    expect(view.rangeElem).toBeDefined();
  });
  it('Скрывает minToggle', () => {
    expect(view.minToggleElem.hidden).toBe(false);
    view.data.isRange = false;
    view.initView();
    expect(view.minToggleElem.hidden).toBe(true);
  });
  it('Устанавливает view.tabText', () => {
    expect(view.tabText).toEqual({ min: '', max: '' });
  });
  it('Устанавливает view.precent', () => {
    expect(view.precent).toEqual({ min: 0, max: 0 });
  });
  it('Устанавливает стиль бегунков', () => {
    view.createToggle();
    expect(view.minToggleElem.style.left).toEqual('30px');
    expect(view.maxToggleElem.style.left).toEqual('50px');
  });
  it('Создает шкалу', () => {
    expect(view.scale).toBeDefined();
  });
  it('Меняет текст tab', () => {
    view.tabText.min = 'aaa';
    view.tabText.max = 'sss';
    view.container.dispatchEvent(new CustomEvent('changeTab'));
    expect(view.minTabElem.textContent).toEqual('aaa');
    expect(view.maxTabElem.textContent).toEqual('sss');
  });
});
