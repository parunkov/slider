// import {Scale} from './scale.ts';
// import {View} from './view.ts';
import {Presenter} from './presenter.ts';

import {setDataLimit, defaultData} from './data.ts';

// import {jQuery} from '../node_modules/jquery/dist/jquery.js';

// const presenter1 = new Presenter(sliderData1);
// const view = new View(sliderData1);

// const presenter2 = new Presenter(sliderData2);
// console.log(presenter1);

// console.log($);

(function($) {
	$.fn.tsSlider = function(options) {
		const id: string = '#' + this.prop('id');
		const wrap = document.querySelector(id);
		const presenter = new Presenter(options, wrap);
		return this;
	}
})(jQuery);

// $('#ts-slider__wrap-1').tsSlider(sliderData1);
// $('#ts-slider__wrap-2').tsSlider(sliderData2);