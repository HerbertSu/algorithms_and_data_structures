const binarySearch = (x, arr) => {
    let lo = 0;
    let hi = arr.length - 1;

    while(lo <= hi){
        let mid = lo + Math.floor((hi - lo)/2);
        if(x > arr[mid]){
            lo = mid + 1;
        }else if(x < arr[mid]){
            hi = mid - 1;
        }else{
            return mid;
        };
    };
    return false;
};

module.exports = {
    binarySearch,
};