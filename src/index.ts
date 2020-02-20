import {Presenter} from './presenter.ts';

(function($) {
	const methods = {
		init: function(options) {
			// console.log('init');
			const id: string = '#' + this.prop('id');
			const wrap = document.querySelector(id);
			const presenter = new Presenter(options, wrap);
		},
		change: function(options) {
			console.log('change');
		},
		arrayChange: function(options) {
			console.log('arrayChange');
		}
	}

	$.fn.tsSlider = function(options, method?) {
		// const id: string = '#' + this.prop('id');
		// const wrap = document.querySelector(id);
		// const presenter = new Presenter(options, wrap);
		 if ( methods[method] ) {
		      return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
		    } else if ( typeof method === 'object' || ! method ) {
		      return methods.init.apply( this, arguments );
		    } else {
		      $.error( 'Метод с именем ' +  method + ' не существует для jQuery.tsSlider' );
		    } 

		return this;
	}
})(jQuery);

