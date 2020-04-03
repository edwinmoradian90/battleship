const generator = (start, end) => {
  const newArray = [];
  for (let i = start; i < end; i += 1) {
    newArray.push(i);
  }
  return newArray;
};

const match = (arrayOne, arrayTwo) => {
  if (arrayOne.length !== arrayTwo.length) return false;
  for (let i = 0; i < arrayOne.length; i += 1) {
    if (arrayOne[i] !== arrayTwo[i]) return false;
  }
  return true;
};

const range = (start, end) => Array.apply(0, Array(end))
  .map((element, index) => index + start);

const rangeGenerator = (array, length, position) => {
  const newArray = [];
  for (let i = 0; i < length; i += 1) {
    if (position === 'horizontal') {
      newArray.push([array[0] + i, array[1]]);
    } else
    if (position === 'vertical') {
      newArray.push([array[0], array[1] + i]);
    }
  }
  return newArray;
};

const rng = (number) => Math.round(Math.random() * (number || 9));

module.exports = {
  rangeGenerator,
  generator,
  match,
  range,
  rng,
};
