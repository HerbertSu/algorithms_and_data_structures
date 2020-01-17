const {binarySearch} = require('./BinarySearch');

const twoSum = (arr, sum=0) => {
    let sums = [];
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] + arr[j] == sum){
                sums.push({
                    i,
                    j,
                });
            };
        };
    };
    return sums;
};

const threeSum = (arr, sum=0) => {
    let sums = [];
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            let k = binarySearch(sum - arr[i] - arr[j], arr);
            if(k !== false && i < j && j < k){
                sums.push({
                    i,
                    j,
                    k
                });
            };
        };
    };
    return sums;
};