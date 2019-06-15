class BinarySearchArray{
    constructor(sortedArray){
        this.sortedArray = sortedArray;
        this.N = sortedArray.length;
    };

    binarySearch(key){
        let lo = 0;
        let hi = this.N - 1;

        while( hi >= lo){
            let mid = lo + Math.floor((hi - lo)/2);

            if(key > this.sortedArray[mid]){
                lo = mid + 1;
            }else if(key < this.sortedArray[mid]){
                hi = mid - 1;
            }else{
                return mid;
            };
            // console.log('-------------')
            // console.log('lo ', lo)
            // console.log('mid ', mid)
            // console.log('hi ', hi)
            // console.log('^^^^^^^^^^^^^')
            
        }
        return false;
    };
};

module.exports = {
    BinarySearchArray,
};