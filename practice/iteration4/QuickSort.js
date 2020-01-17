const {shuffle} = require('./KnuthShuffle');

class QuickSort{
    constructor(arr=[0,3,5,-1,99,32,321,55]){
        this.arr=arr;
    };

    swap(arr, i, j){
        let oldi = arr[i];
        arr[i] = arr[j];
        arr[j] = oldi;
    };

    partition(arr, lo, hi){
        let i = lo + 1;
        let j = hi;

        while(true){
            while(arr[lo] > arr[i]){
                i++;
                if(i > hi){
                    break;
                };
            };

            while(arr[lo] < arr[j]){
                j--;
                if(j <= lo){
                    break;
                };
            };

            if(i >= j){
                break;
            };

            this.swap(arr, i, j);
        };    
        this.swap(arr,j,lo);
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
        this.arr = shuffle(this.arr);
        sortR(this.arr, 0, this.arr.length - 1);
    };
};

class QuickSelect{
    constructor(arr=[0,3,5,-1,99,32,321,55]){
        this.arr=arr;
    };
    partition(arr, lo, hi){
        let i = lo + 1;
        let j = hi;

        while(true){
            while(arr[lo] > arr[i]){
                i++;
                if(i > hi){
                    break;
                };
            };

            while(arr[lo] < arr[j]){
                j--;
                if(j <= lo){
                    break;
                };
            };

            if(i >= j){
                break;
            };

            this.swap(arr, i, j);
        };    
        this.swap(arr,j,lo);
        return j;
    };
    select(k){
        let lo = 0;
        let hi = this.arr.length - 1;
        while(lo < hi){
            let j = this.partition(this.arr, lo, hi);
            if(k > j){
                lo = j + 1;
            }else if(k < j){
                hi = j - 1;
            }else{
                return this.arr[j];
            };
        };
        return this.arr[k];
    };
};

module.exports={
    QuickSelect,
    QuickSort
};