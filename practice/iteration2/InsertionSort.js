class InsertionSort{
    constructor(arr){
        this.arr = arr;
    };

    swap(i, j){
        let oldi = this.arr[i];
        this.arr[i] = this.arr[j];
        this.arr[j] = oldi;
    };

    less(i, j){
        if(this.arr[i] < this.arr[j]){
            return true;
        };
        return false;
    };

    sort(){
        for(let i = 0; i < this.arr.length; i++){
            for(let j = i + 1; j > 0 && this.less(j, j-1); j--){
                this.swap(j, j-1);
            };
        };
    };
};

/**
 * Example
 */
// let is = new InsertionSort([94, 55, 5, 3, 1, -1]);
// is.sort()
// console.log(is.arr)