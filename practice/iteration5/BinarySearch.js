const binarySearch = (k, arr) => {
    let lo = 0;
    let hi = arr.length - 1;

    while(hi >= lo){
        
        let mid = lo + Math.floor((hi - lo)/ 2);
        if(k > arr[mid]){
            lo = mid + 1;
        }else if(k < arr[mid]){
            hi = mid - 1;
        }else{
            return mid;
        };
    };
    return null;
};

module.exports = {
    binarySearch,
};