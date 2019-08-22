class MergeSort{
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

    isSorted(arr){
        for(let i = 0; i + 1 < arr.length; i++){
            if(arr[i] > arr[i + 1]){
                return false;
            };
        };
        return true;
    };

    merge(arr, aux, lo, mid, hi){
        if(!this.isSorted(arr.slice(lo, mid + 1))){
            return false;
        };
        if(!this.isSorted(arr.slice(mid + 1, hi + 1))){
            return false;
        };

        let k = lo;
        for(k; k <= hi; k++){
            aux[k] = arr[k];
        };
        k = lo;
        let i = lo;
        let j = mid+1;

        while(k <= hi){
            if(i > mid){
                arr[k] = aux[j];
                j++;
                k++;
            }else if(j > hi){
                arr[k] = aux[i];
                i++;
                k++;
            }else if(aux[j] < aux[i]){
                arr[k] = aux[j];
                j++;
                k++;
            }else{
                arr[k] = aux[i];
                i++;
                k++;
            };
        };
    };

    sortR(a, aux, lo, hi){
        if(lo >= hi){
            return;
        };
        let mid = lo + Math.floor((hi - lo)/2);
        this.sortR(a, aux, lo, mid);
        this.sortR(a, aux, mid+1, hi);
        this.merge(a, aux, lo, mid, hi);
    };

    sort(){
        let aux = Array(this.arr.length).fill(null);
        for(let k = 0; k < this.arr.length; k++){
            aux[k] = this.arr[k];
        };

        this.sortR(this.arr, aux, 0, this.arr.length - 1);
    };
};

/**
 * Example
 */
// let ms = new MergeSort([94, 55, 5, 3, 1, -1, 0, 19, 200, 31, 38, 59, 199])
// ms.sort();
// console.log(ms.arr)