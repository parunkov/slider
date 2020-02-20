import {Presenter} from './presenter.ts';

(function($) {
	let presenter;
	const methods = {
		init: function(options) {
			// console.log('init');
			const id: string = '#' + this.prop('id');
			const wrap = document.querySelector(id);
			presenter = new Presenter(options, wrap);
		},
		change: function(options) {
			// console.log(presenter);
			presenter.options = options;
			console.log(presenter.options);
			presenter.changeData();
			console.log(presenter.data);
			presenter.init()

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
		 	console.log(method);
		 	methods[method](options);
		      // return methods[ method ].apply(Array.prototype.slice.call( arguments, 1 ));
		    } else if ( typeof method === 'object' || ! method ) {
		      return methods.init.apply( this, arguments );
		    } else {
		      $.error( 'Метод с именем ' +  method + ' не существует для jQuery.tsSlider' );
		    } 

		return this;
	}
})(jQuery);

