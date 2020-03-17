import {
  initViewMarkup,
  markup,
} from '../src/init-view-markup.ts';

let sliderWrap;
const add = () => {
  sliderWrap = setFixtures()[0];
  sliderWrap.setAttribute('id', 'wrapid');
  document.body.appendChild(sliderWrap);
};

describe('Функция initViewMarkup', () => {
  it('horizontal - создает HTML разметку', () => {
    add();
    initViewMarkup(sliderWrap, false);
    expect(sliderWrap.querySelector('div')).toHaveClass('ts-slider__container');
    sliderWrap.remove();
  });
  it('vertical - добавляет модификатор', () => {
    add();
    initViewMarkup(sliderWrap, true);
    expect(sliderWrap.querySelector('div')).toHaveClass('ts-slider__container--vertical');
    sliderWrap.remove();
  });
});

describe('Функция markup', () => {
  it('Находит элементы HTML', () => {
    add();
    initViewMarkup(sliderWrap, false);
    expect(markup(sliderWrap).min).toBeDefined();
    expect(markup(sliderWrap).max).toBeDefined();
    expect(markup(sliderWrap).range).toBeDefined();
    expect(markup(sliderWrap).bar).toBeDefined();
    expect(markup(sliderWrap).minTab).toBeDefined();
    expect(markup(sliderWrap).maxTab).toBeDefined();
    sliderWrap.remove();
  });
});
