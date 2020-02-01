const matchingArrays = (arrayOne, arrayTwo) => {
    // Checks array length first
    if(arrayOne.length !== arrayTwo.length) return false;
    // Compares arrays
    for(let i=0; i<arrayOne.length; i++) {
        if(arrayOne[i] !== arrayTwo[i]) return false;
    };
    // Returns two if tests above do not pass;
    return true;
};

module.exports = matchingArrays;
