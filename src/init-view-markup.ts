const initViewMarkup = (controlWrap: HTMLElement, vertical: boolean) => {
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
    for (let i = 0; i < div.length; i++) {
      const firstClass: string = div[i].classList[0];
      const verticalClass: string = firstClass + '--vertical';
      div[i].classList.add(verticalClass);
    }
  }
}

const markup = (slider: HTMLElement) => {
  interface Markup {
    min: HTMLElement;
    max: HTMLElement;
    range: HTMLElement;
    bar: HTMLElement;
    minTab: HTMLElement;
    maxTab: HTMLElement;
  }
  let markup: Markup = {  
     min: slider.querySelector('.ts-slider__toggle--min'),
     max: slider.querySelector('.ts-slider__toggle--max'),
     range: slider.querySelector('.ts-slider__range'),
     bar: slider.querySelector('.ts-slider__bar'),
     minTab: slider.querySelector('.ts-slider__toggle-value--min'),
     maxTab: slider.querySelector('.ts-slider__toggle-value--max')
  }
  return markup;
}

export {initViewMarkup, markup};