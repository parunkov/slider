import {slider1} from './slider-1.ts';

const sliders = document.querySelectorAll('.ts-slider__container');
// console.log(typeof sliders);
slider1(sliders[0], false, true, true);
slider1(sliders[1], true, true, false);

