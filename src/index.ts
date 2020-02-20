import {Presenter} from './presenter.ts';

(function($) {
	$.fn.tsSlider = function(options) {
		const id: string = '#' + this.prop('id');
		const wrap = document.querySelector(id);
		const presenter = new Presenter(options, wrap);
		return this;
	}
})(jQuery);

