(function() {
	const form1 = document.querySelector('.page__form--1');
	const id1 = '#ts-slider__wrap-1';
	const data1 = window[id1].data;
	const setControl = (id, form, data) => {
		const minInput = form.querySelector('.page__input--1');
		const maxInput = form.querySelector('.page__input--2');
		const stepInput = form.querySelector('.page__input--3');
		const scaleInput = form.querySelector('.page__input--4');
		const rangeCheckbox = form.querySelector('.page__checkbox--1');
		const verticalCheckbox = form.querySelector('.page__checkbox--2');
		const tabCheckbox = form.querySelector('.page__checkbox--3');
		const scaleCheckbox = form.querySelector('.page__checkbox--4');
		const btn = form.querySelector('.page__button');

		minInput.value = data.minValue;
		maxInput.value = data.maxValue;
		stepInput.value = data.step;
		scaleInput.value = data.scaleQuantity;
		rangeCheckbox.checked = data.isRange;
		verticalCheckbox.checked = data.isVertical;
		tabCheckbox.checked = data.isTab;
		scaleCheckbox.checked = data.isScale;

		const onBtnClick = (evt) => {
			evt.preventDefault();
			// console.log(id);
			let data = new Object();
			data.minValue = +minInput.value;
			data.maxValue = +maxInput.value;
			data.step = +stepInput.value;
			data.scaleQuantity = +scaleInput.value;
			data.isRange = rangeCheckbox.checked;
			data.isVertical = verticalCheckbox.checked;
			data.isTab = tabCheckbox.checked;
			data.isScale =scaleCheckbox.checked;
			console.log(data);

			$(id).tsSlider(data, 'change');
		}

		btn.addEventListener('click', onBtnClick);

	}
	setControl(id1, form1, data1);
})();