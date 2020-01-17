class TwoSum{
    constructor(arr=[-1, 0, 1,4, 6, 7, 13]){
        this.arr = arr;
        this.indices = [];
    };

    twoSum(sum){
        for(let i = 0; i < this.arr.length; i++){
            for(let j = i + 1; j < this.arr.length; j++){
                if(this.arr[i] + this.arr[j] == sum){
                    this.indices.push([i, j]);
                };
            };
        };
        return this.indices;
    };
};

// let sum = new TwoSum();
// console.log(sum.twoSum(6));