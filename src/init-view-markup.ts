const initViewMarkup = (wrap: HTMLElement, vertical: boolean) => {
  const controlWrap = wrap;
  const contolMarkup: string = `<div class="ts-slider__container">
  <div class="ts-slider__bar">
  <div class="ts-slider__toggle ts-slider__toggle--min">
  <div class="ts-slider__toggle-value ts-slider__toggle-value--min"></div>
  </div>
  <div class="ts-slider__toggle ts-slider__toggle--max">
  <div class="ts-slider__toggle-value ts-slider__toggle-value--max"></div>
  </div>
  <div class="ts-slider__range"></div>
  </div>
  </div>`;
  controlWrap.innerHTML = contolMarkup;
  const div = controlWrap.querySelectorAll('div');
  if (vertical) {
    div.forEach((item) => {
      const firstClass: string = item.classList[0];
      const verticalClass: string = `${firstClass}--vertical`;
      item.classList.add(verticalClass);
    });
  }
  return controlWrap;
};

const markup = (slider: HTMLElement) => {
  interface Markup {
    min: HTMLElement;
    max: HTMLElement;
    range: HTMLElement;
    bar: HTMLElement;
    minTab: HTMLElement;
    maxTab: HTMLElement;
  }
  const markupSlider: Markup = {
    min: slider.querySelector('.ts-slider__toggle--min'),
    max: slider.querySelector('.ts-slider__toggle--max'),
    range: slider.querySelector('.ts-slider__range'),
    bar: slider.querySelector('.ts-slider__bar'),
    minTab: slider.querySelector('.ts-slider__toggle-value--min'),
    maxTab: slider.querySelector('.ts-slider__toggle-value--max'),
  };
  return markupSlider;
};

export {
  initViewMarkup,
  markup,
};
