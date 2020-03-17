
const setMouseHandler = (elem, onMove, onDovn?, onUp?) => {
  const onMouseDown = (evt) => {
    if (onDovn) {
      onDovn(evt);
    }

    const onMouseMove = (moveEvt) => {
      onMove(moveEvt);
    };
    const onMouseUp = (upEvt) => {
      if (onUp) {
        onUp(upEvt);
      }
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mousemove', onMouseMove);
    };
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };

  elem.addEventListener('mousedown', onMouseDown);
};

const round = (value: number, step: number) => {
  const precision = (x) => +((x.toString().includes('.')) ? (x.toString().split('.').pop().length) : (0));
  const rounded: string = (Math.round(value / step) * step).toFixed(precision(step));
  return rounded;
};

const setLimit = (valueParam: number, min: number, max: number) => {
  let value = valueParam;
  if (value > max) {
    value = max;
  } else if (value < min) {
    value = min;
  }
  return value;
};

const toPrecent = (value: number, min: number, max: number) => (value - min) / (max - min);

const toValue = (value: number, min: number, max: number) => (min + (max - min) * value);

const setRangeStyle = (rangeElem: HTMLElement, min: number, max: number, isVertical: boolean) => {
  const range = rangeElem;
  if (isVertical) {
    range.style.top = `${min}px`;
    range.style.height = `${(max - min)}px`;
  } else {
    range.style.left = `${min}px`;
    range.style.width = `${(max - min)}px`;
  }
  return range;
};

export {
  setMouseHandler,
  round,
  setLimit,
  toPrecent,
  toValue,
  setRangeStyle,
};
