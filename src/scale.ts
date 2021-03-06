class Scale {
  slider: HTMLElement;

  scale: string[];

  isVertical: boolean;


  constructor(slider, scale, isVertical) {
    this.slider = slider;
    this.scale = scale;
    this.isVertical = isVertical;
    this.createItem();
  }

  createItem() {
    const bar: HTMLElement = this.slider.querySelector('.ts-slider__bar');
    this.scale.forEach((item, i) => {
      const scaleItem = document.createElement('div');
      scaleItem.classList.add('ts-slider__scale-item');
      scaleItem.textContent = item;
      if (this.isVertical) {
        scaleItem.classList.add('ts-slider__scale-item--vertical');
        scaleItem.style.top = `${(bar.offsetHeight / (this.scale.length - 1)) * i}px`;
      } else {
        scaleItem.style.left = `${(bar.offsetWidth / (this.scale.length - 1)) * i}px`;
      }
      bar.append(scaleItem);
    });
  }
}

export default Scale;
