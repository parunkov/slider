import { Presenter } from './presenter.ts';

(function ($) {
  const methods = {
    init(options) {
      const id: string = `#${this.prop('id')}`;
      const wrap: HTMLElement = document.querySelector(id);
      const presenter = new Presenter(options, wrap);
      window[id] = presenter;
    },
    change(options) {
      const id: string = `#${this.prop('id')}`;
      const presenter = window[id];
      presenter.options = options;
      presenter.changeData();
    },
  };

  $.fn.tsSlider = function (options, method?) {
    const id: string = `#${this.prop('id')}`;
    if (method === 'change' && window[id]) {
      const change = methods.change.apply(this, arguments);
    } else if (typeof method === 'object' || !method || !window[id]) {
      const init = methods.init.apply(this, arguments);
    } else {
      $.error(`Метод с именем ${method} не существует для jQuery.tsSlider`);
    }
    return this;
  };
}(jQuery));
