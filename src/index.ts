import {Presenter} from './presenter.ts';

(function($) {
	// let presenter;
	const methods = {
		presenter: undefined;
		init: function(options) {
			// console.log('init');
			const id: string = '#' + this.prop('id');
			const wrap = document.querySelector(id);
			const presenter = new Presenter(options, wrap);
			// console.log(presenter);
			this.presenter = presenter;
			// console.log(this.presenter);
		},
		change: function(options) {
			console.log(this);
			// this.init();
			console.log(this.presenter);
			// console.log(presenter);
			// presenter.options = options;
			// console.log(presenter.options);
			// presenter.changeData();
			// console.log(presenter.data);
			// presenter.view.removeMarkup();
			// presenter.init();
			// presenter.onMoveToggle();
			// presenter.onChangeTabText();
			// presenter.onCangeInput();

		},
		arrayChange: function(options) {
			console.log('arrayChange');
		}
	}

	$.fn.tsSlider = function(options, method?) {
		 if ( methods[method] ) {
		 	// console.log(method);
		 	console.log(arguments);
		 	// methods.init.apply( this, arguments );
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

