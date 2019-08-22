class QuickSort{
    constructor(arr){
        this.arr = arr;
    };

    less(i, j){
        if(i < j){
            return true;
        };
        return false;
    };

    swap(a, i, j){
        let oldi = a[i];
        a[i] = a[j];
        a[j] = oldi;
    };

    knuthShuffle(){
        for(let i = 1; i < this.arr.length; i++){
            let r = Math.floor(Math.random()*i);
            
            this.swap(this.arr, i, r);
        };
    };

    partition(a, lo, hi){

        let i = lo + 1;
        let j = hi;

        while(true){
            while(this.less(a[i], a[lo])){
                i++;
                if(i == hi){
                    break;
                };
            };
            while(this.less(a[lo], a[j])){
                j--;
                if(j == lo){
                    break;
                };
            };
            if(i >= j){
                break;
            };
            this.swap(a, i, j);
        };
        this.swap(a, lo, j);
        return j;
    };

    sortR(a, lo, hi){
        if(lo >= hi){
            return;
        };

        let j = this.partition(a, lo, hi);
        this.sortR(a, lo, j - 1);
        this.sortR(a, j+1, hi);
    };

    sort(){
        this.knuthShuffle();
        this.sortR(this.arr, 0, this.arr.length - 1);
    };
};

/**
 * Example
 */
// let qs = new QuickSort([94, 55, 5, 3, 1, -1, 0, 19, 200, 31, 38, 59, 199])
// qs.sort();
// console.log(qs.arr)