const form1 = document.querySelector('.page__form--1');
const id1 = '#' + $('#ts-slider__wrap-1').tsSlider(sliderData1).prop('id');
const data1 = window[id1].data;
const setControl = (form, data) => {
	const minInput = form.querySelector('.page__input--1');
	const maxInput = form.querySelector('.page__input--2');
	const stepInput = form.querySelector('.page__input--3');
	const scaleInput = form.querySelector('.page__input--4');
	const rangeCheckbox = form.querySelector('.page__checkbox--1');
	const verticalCheckbox = form.querySelector('.page__checkbox--2');
	const tabCheckbox = form.querySelector('.page__checkbox--3');
	const scaleCheckbox = form.querySelector('.page__checkbox--4');

	minInput.value = data.minValue;
	maxInput.value = data.maxValue;
	stepInput.value = data.step;
	scaleInput.value = data.scaleQuantity;
	rangeCheckbox.checked = data.isRange;
	verticalCheckbox.checked = data.isVertical;
	tabCheckbox.checked = data.isTab;
	scaleCheckbox.checked = data.isScale;

}
setControl(form1, data1);