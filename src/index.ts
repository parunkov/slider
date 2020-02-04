import {slider1} from './slider-1.ts';
import {initControl} from './init-control.ts';
import {Scale} from './scale.ts';

initControl('#ts-slider__wrap-1',false);
initControl('#ts-slider__wrap-2',true);

const sliders = document.querySelectorAll('.ts-slider__container');
// console.log(typeof sliders);
slider1(sliders[0], false, true, true);
slider1(sliders[1], true, true, true);
// slider1(sliders[2], false, true, true);
const scale = new Scale(sliders[0], 6, false);

