import {Presenter} from './presenter.ts';

(function($) {
	let presenter;
	const methods = {
		init: function(options) {
			const id: string = '#' + this.prop('id');
			const wrap = document.querySelector(id);
			presenter = new Presenter(options, wrap);
			this.presenter = presenter;
		},
		change: function(options) {
			presenter.options = options;
			presenter.changeData();
		},
		arrayChange: function(options) {
			console.log('arrayChange');
		}
	}

	$.fn.tsSlider = function(options, method?) {
		if ( methods[method] ) {
			methods[method](options);
		} else if ( typeof method === 'object' || ! method ) {
			return methods.init.apply( this, arguments );
		} else {
			$.error( 'Метод с именем ' +  method + ' не существует для jQuery.tsSlider' );
		} 

		return this;
	}
})(jQuery);

