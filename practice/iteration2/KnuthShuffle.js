
const knuthShuffle = (arr) => {
    for(let i = 1; i < arr.length; i++){
        let r = Math.floor(Math.random()*i);
        
        let oldi = arr[i];
        arr[i] = arr[r];
        arr[r] = oldi;
    };
};

/**
 * Example
 */
// let arr = [1, 2, 3, 4, 5];
// knuthShuffle(arr);
// console.log(arr);

