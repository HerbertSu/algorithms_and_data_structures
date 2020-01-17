const {shuffle} = require('./KnuthShuffle');

class QuickSort{
    constructor(arr=[-12,8,7,6,5,4,3,2,1,93421,55,33,0]){
        this.arr = arr;
    };

    less(i, j, arr){
        if(arr[i] < arr[j]){
            return true;
        };
        return false;
    };

    swap(i, j, arr){
        let oldi = arr[i];
        arr[i] = arr[j];
        arr[j] = oldi;
    };

    partition(arr, lo, hi){
        if(lo >= hi){
            return;
        };

        let i = lo + 1;
        let j = hi;

        while(true){
            while(this.less(i, lo, arr)){
                i++;
                if(i > hi){
                    break;
                };
            };
            while(this.less(lo, j, arr)){
                j--;
                if(j <= lo){
                    break;
                };
            };
            if(i >= j){
                break;
            };
            this.swap(i, j, arr);
        };
        this.swap(lo, j, arr);
        return j;
    };

    sortR(arr, lo, hi){
        if(lo >= hi){
            return;
        };

        let j = this.partition(arr, lo, hi);
        this.sortR(arr, lo, j - 1);
        this.sortR(arr, j + 1, hi);
    };

    sort(){
        // shuffle(this.arr);
        this.sortR(this.arr, 0, this.arr.length - 1);
    };
};

let qs = new QuickSort();
qs.sort();
console.log(qs.arr);