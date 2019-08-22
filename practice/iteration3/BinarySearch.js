class BinarySearch{
    constructor(arr){
        this.arr = arr;
    };

    search(key){
        let lo = 0;
        let hi = this.arr.length - 1;

        while(lo <= hi){
            let mid = lo + Math.floor((hi - lo)/2);

            if(key > this.arr[mid]){
                lo = mid + 1;
            }else if(key < this.arr[mid]){
                hi = mid - 1;
            }else{
                return this.arr[mid];
            };
        };
        return null;
    };
};

module.exports = {
    BinarySearch,
};