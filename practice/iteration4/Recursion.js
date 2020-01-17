const printArrayElems = (arr) => {
    if(arr.length <= 1){
        return arr[0];
    };
    
    return String(arr[0]) + " " + printArrayElems(arr.slice(1, arr.length));
};

const palindrome = (string) => {
    if(string.length <= 1){
        return true;
    };

    return (string[0] == string[string.length - 1]) && palindrome(string.slice(1, string.length - 1));
};

const power = (a,b) => {
    if(b == 1){
        return a;
    }else if(b <= 0){
        return 1;
    };

    return a*power(a, b - 1);
};

function BinaryTreeNode(value){
    this.value = value;
    this.left = null;
    this.right = null;
};

BinaryTreeNode.prototype.add = function(value){
    if(value < this.value){
        if(this.left == null){
            this.left = new BinaryTreeNode(value);
        }else{
            this.left.add(value);
        };
    };
    if(value > this.value){
        if(this.right == null){
            this.right = new BinaryTreeNode(value);
        }else{
            this.right.add(value);
        };
    };
};

// console.log(power(2,6))

// console.log(palindrome("racecar"))
// console.log(printArrayElems([1,2,3,4]))

const posArry = (arr, size) => {
    let sum = 0;
    for(let i = 0; i < size; i++){
        if(arr[i] > 0){
            sum += arr[i];
        };
    };
    return sum;
};

let arrPos = [0, -2, 1, 2, 2, -9, 5];

const dispatcherPosArr = (arr, size) => {
    if(size == 0){
        return 0;
    };

    if(size == 1){
        if(arr[size - 1] > 0){
            return arr[size - 1];
        };
    };

    let sum = 0;
    if(arr[size - 1] > 0){
        sum += arr[size - 1];
    };

    return sum + dispatcherPosArr(arr, size - 1);

};

// console.log(dispatcherPosArr(arrPos, arrPos.length))

const bool = (arr, size) => {
    let oddCount = 0;
    for(let i = 0; i < size; i++){
        if(arr[i] == 1){
            oddCount++;
        };
    };
    return oddCount;
};

let arrBool = [0, 1, 1, 1, 0];

const dispatcherBool = (arr, size) => {
    if(size == 0){
        return false;
    };
    if(size == 1){
        return arr[size - 1];
    };

    let last = 0;
    last = arr[size-1] + dispatcherBool(arr, size - 1);
    return last % 2 != 0;
};

// console.log(dispatcherBool(arrBool,arrBool.length))

const occur = (target, arr, size) => {
    let count = 0; 
    for(let i = 0; i < size; i++){
        if(arr[i] == target) count++;
    };
    return count;
};

let arrOcc = [0,1,2,2,2,2,3,4,5,5,5];

const dispatcherOcc = (target, arr, size) => {
    if(size == 0){
        return 0;
    };
    if(size == 1){
        if(arr[size - 1] == target) return 1
        else return 0;
    };

    let count = 0;
    if(arr[size - 1] == target) count++;
    return count + dispatcherOcc(target, arr, size - 1);
};
// console.log(dispatcherOcc(2, arrOcc, arrOcc.length));

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    };
};

const populateLinkedListWithArray = (arr, size) => {
    let root = new Node(arr[0]);
    for(let i = 1; i < size; i++){
        let oldNode = root;
        root = new Node(arr[i]);
        root.next = oldNode;
    };
    return root;
};

const dispatcherPopLLFromArr = (arr, size) => {
    if(size == 0){
        return;
    };
    if(size == 1){
        return arr[size - 1];
    };

    let root = new Node(arr[size - 1]);
    root.next = dispatcherPopLLFromArr(arr, size - 1 );
    return root;
};

// let arrPos = [0, -2, 1, 2, 2, -9, 5];
let llPos = dispatcherPopLLFromArr(arrPos, arrPos.length);

const dispatcherPosLL = (root) => {
    if(root == null){
        return 0;
    };

    let positives_sum = dispatcherPosLL(root.next);
    if(root.val > 0) positives_sum += root.val;
    return positives_sum;
};

// console.log(dispatcherPosLL(llPos))


// let arrBool = [0, 1, 1];
arrBool = [1,0,1,1,1,0,1]
let llBool = populateLinkedListWithArray(arrBool, arrBool.length);

const boolLL = (root) => {
    let oddCount = 0;
    while(root != null){
        if(root.val == 1) oddCount++;
        root = root.next;
    };
    return oddCount%2 != 0;
};

const dispatcherBoolLL = (root) => {
    if(root == null) return 0;

    let oddCount = dispatcherBoolLL(root.next);
    if(root.val == 1) oddCount++;
    return oddCount%2 != 0;
};

// console.log(dispatcherBoolLL(llBool));

// let arrOcc = [0,1,2,2,2,2,3,4,5,5,5];
let llOcc = populateLinkedListWithArray(arrOcc, arrOcc.length);

const dispatcherOccLL = (root, target) => {
    if(root == null){
        return 0;
    };

    let occur = dispatcherOccLL(root.next, target);
    if(root.val == target){
        occur++;
    };
    return occur;
};

console.log(dispatcherOccLL(llOcc,2));