const {binarySearch} = require('./BinarySearch');
class ThreeSum{
    constructor(arr=[-5, -4, -1, 0, 1, 2, 5, 9,  10]){
        this.arr = arr;
        this.res = [];
    };

    threeSum(sum){
        for(let i = 0; i < this.arr.length; i++){
            for(let j = i+1; j < this.arr.length; j++){
                let res = binarySearch(-(this.arr[i] + this.arr[j]), this.arr);
                if(res != null && i < j && j < res){
                    this.res.push([i, j, res]);
                };
            };
        };
        return this.res;
    };
};

// let three = new ThreeSum();
// console.log(three.threeSum(0))