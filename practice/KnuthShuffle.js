const knuthShuffle = (a) => {
    for(let i = 0; i < a.length; i++){
        let j = Math.floor(i*Math.random());
        let old = a[i];
        a[i] = a[j];
        a[j] = old;
    };
};

// let a = [4, 1, 60 , 3, 499 , 43, 7];
// knuthShuffle(a);
// console.log(a);

module.exports = {
    knuthShuffle
};