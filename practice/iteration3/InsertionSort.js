class InsertionSort{
    constructor(arr=[4,1,3,59,0,8,-1]){
        this.arr = arr;
    };

    less(i,j){
        if(this.arr[i] < this.arr[j]){
            return true;
        };
        return false;
    };

    swap(i,j){
        let oldi = this.arr[i];
        this.arr[i] = this.arr[j];
        this.arr[j] = oldi;
    };

    sort(){
        for(let i = 1; i < this.arr.length; i++){
            for(let j = i; j - 1 >= 0 && this.less(j, j - 1); j--){
                this.swap(j, j-1);
            };
        };
    };
};

// let is = new InsertionSort();
// is.sort();
// console.log(is.arr)

module.exports = {
    InsertionSort,
};