const binarySearch = (key, array) => {
    let lo = 0;
    let hi = array.length - 1;

    while(lo <= hi){
        let mid = lo + Math.floor((hi - lo)/2);
        if(key > array[mid]){
            lo = mid + 1;
        }else if(key < array[mid]){
            hi = mid - 1;
        }else{
            return mid;
        };
    };
    return null;
};

/**
 * Example
 */
// let a = [1, 2, 3, 4, 5, 6];
// console.log(binarySearch(8, a))

module.exports = {
    binarySearch,
};