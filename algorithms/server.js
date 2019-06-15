const {
    QuickFind,
    QuickUnion
    } = require('./DynamicConnectivity');

const { 
    BinarySearchArray,
    } = require('./Search');

const {
    solveTwoSum,
    solveThreeSum,
} = require('./NSum');

const { 
    SelectionSort,
    InsertionSort,
} = require('./Sort');

let arrayA = [100, 32, 65, -10 ,7, 324, 74, 4, 3, 2];
let arrayB = [1, 2, 3, 4, 5, 6, 7, 8];

let insertionSort = new InsertionSort(arrayB);

insertionSort.sort()
console.log(insertionSort.array)
