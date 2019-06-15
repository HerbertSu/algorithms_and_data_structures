const {BinarySearchArray} = require('./Search');

const solveTwoSum = (array, sumToMe) => {
    let weSum = [];
    for(let i = 0; i < array.length; i++){
        for(let j = i+1; j < array.length; j++){
            if(array[i] + array[j] == sumToMe){
                weSum.push({item1: array[i], index: i}, {item2: array[j], index: j});
            };
        };
    };
    return weSum;
};


const solveThreeSum = (array, sumToMe) => {
    let weSum = [];


    for(let i = 0; i < array.length; i++){
        for(let j = i+1; j < array.length; j++){
            let bs = new BinarySearchArray(array);
            let searchResult = bs.binarySearch( sumToMe - (array[i] + array[j]));
            if(searchResult && i < j && j < searchResult){
                weSum.push([{
                    item1: array[i],
                    index: i
                },
                {
                    item2: array[j],
                    index: j
                },
                {
                    item3: array[searchResult],
                    index: searchResult
                }])
            };
        };
    };

    return weSum;
};

module.exports = {
    solveTwoSum,
    solveThreeSum,
};