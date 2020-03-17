import { setLimit } from './functions.ts';

const setToggleStyle = (toggleElem: HTMLElement, pixel: number, isVertical: boolean) => {
  const toggle = toggleElem;
  if (isVertical) {
    toggle.style.top = `${pixel}px`;
  } else {
    toggle.style.left = `${pixel}px`;
  }
  return toggle;
};

class Toggle {
  toggle: HTMLElement;

  min: number;

  max: number;

  mousePixel: number;

  pixel: number;

  precent: number;

  size: number;

  isVertical: boolean;

  isFixed: boolean;

  constructor(toggle, precent, size, isVertical) {
    this.toggle = toggle;
    this.size = size;
    this.precent = precent;
    this.mousePixel = this.precent * this.size;
    this.pixel = this.mousePixel;
    this.isVertical = isVertical;
    this.isFixed = false;
    this.setStyle();
    this.onMoveToggle();
  }

  setStyle() {
    this.toggle = setToggleStyle(this.toggle, this.pixel, this.isVertical);
  }

  changeToggle() {
    this.mousePixel = this.precent * this.size;
    this.pixel = this.mousePixel;
    this.setStyle();
  }

  onMoveToggle() {
    const onMouseDown = (evt) => {
      const shiftX: number = evt.pageX - this.toggle.offsetLeft;
      const shiftY: number = evt.pageY - this.toggle.offsetTop;
      const startPixel: number = this.mousePixel;
      const moveAt = (pageX, pageY) => {
        if (this.isVertical) {
          this.mousePixel = pageY - shiftY;
        } else {
          this.mousePixel = pageX - shiftX;
        }
        this.pixel = this.mousePixel;
        this.pixel = setLimit(this.pixel, this.min * this.size, this.max * this.size);
        if (this.isFixed) {
          this.pixel = startPixel;
        }
        this.setStyle();
        this.precent = this.pixel / this.size;
      };
      moveAt(evt.pageX, evt.pageY);

      const onMouseMove = (moveEvt) => {
        moveEvt.preventDefault();
        moveAt(moveEvt.pageX, moveEvt.pageY);
      };
      const onMouseUp = () => {
        this.mousePixel = this.pixel;
        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mousemove', onMouseMove);
      };
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    };
    this.toggle.addEventListener('mousedown', onMouseDown);
  }
}

export default Toggle;
