const {binarySearch} = require('./BinarySearch')

class TwoSum{
    constructor(arr){
        this.arr = arr;
    };

    TwoSum(target){
        let entries = [];
        for(let i = 0; i < this.arr.length; i++){
            for(let j = i + 1; j < this.arr.length; j++){
                if(this.arr[i] + this.arr[j] == target){
                    entries.push({i, j});
                };
            };
        };
        return entries;
    };
};

/**
 * Example
 */
// let ts = new TwoSum([1, 2, 3, 4, 0, 6, -1, 7]);
// console.log(ts.TwoSum(6))

class ThreeSum{
    constructor(arr){
        this.arr = arr;
    };

    bruteForce(target){
        let entries = [];
        for(let i = 0; i < this.arr.length; i++){
            for(let j = i + 1; j < this.arr.length; j++){
                for(let k = j + 1; k < this.arr.length; k++){
                    if(this.arr[k] + this.arr[j] + this.arr[i] == target && i < j && j < k){
                        entries.push({i, j, k});
                    };
                };
            };
        };
        return entries;
    };

    binarySum(target){
        let entries = [];
        for(let i = 0; i < this.arr.length; i++){
            for(let j = i + 1; j < this.arr.length; j++){
                let bs = binarySearch(target - this.arr[i] - this.arr[j], this.arr);
                if(bs != null && i < j && j < bs){
                    entries.push({i, j, bs});
                };
            };
        };
        return entries;
    };
};

/**
 * Example
 */
// let threeSum = new ThreeSum([-1, 0, 1, 2, 3, 4, 5, 7])
// console.log(threeSum.bruteForce(6))
// console.log(threeSum.binarySum(6))