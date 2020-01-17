class InsertionSort{
    constructor(arr=[11,40,32,39,-10,100,0]){
        this.arr = arr;
        this.sort();
    };

    swap(i, j){
        let oldi = this.arr[i];
        this.arr[i] = this.arr[j];
        this.arr[j] = oldi;
    };

    less(i, j){
        return this.arr[i] < this.arr[j];
    };

    sort(){
        for(let i = 0; i < this.arr.length; i++){
            for(let j = i; j > 0 && this.less(j, j - 1); j-- ){
                this.swap(j, j-1);
            };
        };
    };
};

// let is = new InsertionSort();
// console.log(is.arr);