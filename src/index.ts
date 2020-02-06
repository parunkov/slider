// import {slider1} from './slider-1.ts';
import {initControl} from './init-control.ts';
import {Scale} from './scale.ts';
import {View} from './view.ts';
import {Presenter} from './presenter.ts';
import {TsSlider} from './ts-slider.ts';

import {sliderData1, sliderData2} from './data.ts';
// console.log(sliderData1);

// initControl('#ts-slider__wrap-1',false);
// initControl('#ts-slider__wrap-2',true);

// const sliders = document.querySelectorAll('.ts-slider__container');
// slider1(sliders[0], false, true, true);
// slider1(sliders[1], true, true, true);
// const scale1 = new Scale(sliders[0], 4, false);
// const scale2 = new Scale(sliders[1], 5, true);

const presenter1 = new Presenter(sliderData1);
const presenter2 = new Presenter(sliderData2);

// const view1 = new View(presenter1.presenterData);
// const view2 = new View(presenter2.presenterData);

// const slider1 = new TsSlider(sliderData1);
// const slider2 = new TsSlider(sliderData2);