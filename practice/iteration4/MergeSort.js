
class MergeSort{
    constructor(arr=[9,4,2,6,5,3,88,31,0]){
        this.arr=arr;
    };

    less(arr, i, j){
        if(arr[i] < arr[j]){
            return true;
        };
        return false;
    };

    isSorted(arr){
        for(let i = 0; i + 1 < arr.length; i++){
            if(this.less(arr, i + 1, i)){
                return false;
            };
        };
        return true;
    };

    merge(arr, aux, lo, mid, hi){
        if(!this.isSorted(arr.slice(lo, mid+1))){
            return;
        };
        if(!this.isSorted(arr.slice(mid+1, hi+1))){
            return;
        };

        let k = lo;
        while(k <= hi){
            aux[k] = arr[k];
            k++;
        };
        k=lo;
        let i = lo;
        let j = mid + 1;

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

    sortR(arr, aux, lo, hi){
        if(lo >= hi){
            return;
        };

        let mid = lo + Math.floor((hi - lo)/2);
        this.sortR(arr, aux, lo, mid);
        this.sortR(arr, aux, mid + 1, hi);
        this.merge(arr, aux, lo, mid, hi);
    };

    sort(){
        let aux = Array(this.arr.length).fill(null);
        for(let i = 0; i < aux.length; i++){
            aux[i] = this.arr[i];
        };
        sortR(this.arr, aux, 0, this.arr.length - 1);
    };
};

module.exports = {
    MergeSort,
};