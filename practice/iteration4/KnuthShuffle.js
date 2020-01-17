const shuffle = (arr) => {
    for(let i = 1; i < arr.length; i++){
        let r = Math.floor(Math.random()*(i+1));
        let oldi = arr[i];
        arr[i] = arr[r];
        arr[r] = oldi;
    };
    return arr;
};

module.exports = {
    shuffle,
};