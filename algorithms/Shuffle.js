const knuthShuffle = (array) => {
    let N = array.length;
    for(let i = 0; i < N; i++){
        let r = Math.floor(Math.random() * i);
        
        let iVal = array[i];
        array[i] = array[r];
        array[r] = iVal;
    };
};

module.exports = {
    knuthShuffle,
};