const generator = (start, end) => {
    let newArray = [];
    for(let i=start; i<end; i++) {
        newArray.push(i);
    };
    return newArray;
};

const match = (arrayOne, arrayTwo) => {
    // Checks array length first
    if(arrayOne.length !== arrayTwo.length) return false;
    // Compares arrays
    for(let i=0; i<arrayOne.length; i++) {
        if(arrayOne[i] !== arrayTwo[i]) return false;
    };
    // Returns two if tests above do not pass;
    return true;
};

const range = (start, end) => {
    return Array.apply(0, Array(end))
        .map((element, index) => index + start);
};

const rangeGenerator = (array, length, position) => {
    let newArray = [];
	for( let i = 0; i<length; i++) {
  	if(position == 'horizontal') {
    	newArray.push([array[0] + i, array[1]]);
    } else 
    if(position == 'vertical') {
    	newArray.push([array[0], array[1] + i]);
    };
  };
 return newArray;
};

const rng = (number) => Math.round(Math.random() * (number || 9 ));

module.exports = {
    rangeGenerator,
    generator,
    match,
    range,
    rng,
};
