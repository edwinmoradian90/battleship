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

const rng = () => Math.round(Math.random() * 9);

module.exports = {
    generator,
    match,
    rng,
};
