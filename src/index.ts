import {Presenter} from './presenter.ts';

(function($) {
	const methods = {
		init: function(options) {
			const id: string = '#' + this.prop('id');
			const wrap: HTMLElement = document.querySelector(id);
			const presenter = new Presenter(options, wrap);
			window[id] = presenter;
		},
		change: function(options) {
			const id: string = '#' + this.prop('id');
			const presenter = window[id];
			presenter.options = options;
			presenter.changeData();
		}
	}

	$.fn.tsSlider = function(options, method?) {
		if ( method === 'change' ) {
			methods.change.apply( this, arguments );
		} else if ( typeof method === 'object' || ! method ) {
			methods.init.apply( this, arguments );
			return methods.init;
		} else {
			$.error( 'Метод с именем ' +  method + ' не существует для jQuery.tsSlider' );
		} 
	}
})(jQuery);

