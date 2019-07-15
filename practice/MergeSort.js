class MergeSort{
    constructor(a){
        this.a = a;
    };

    less(v, w){
        if(v < w){
            return true;
        };
        return false;
    };

    swap(i, j){
        let old = this.a[i];
        this.a[i] = this.a[j];
        this.a[j] = old;
    };

    isSorted(array){
        for(let i = 0; i < array.length - 1; i++){
            if(array[i] > array[i + 1]){
                return false;
            };
        };
        return true;
    };

    merge(a, aux, lo, mid, hi){
        if(!this.isSorted(a.slice(lo, mid+1))){
            return;
        };
        if(!this.isSorted(a.slice(mid+1, hi+1))){
            return;
        };

        let k = lo;
        for(k; k < a.length; k++){
            aux[k] = a[k];
        };
        
        k = lo;
        let i = lo;
        let j = mid+1;

        while(k <= hi){
            if(i > mid){
                a[k] = aux[j];
                j++;
            }else if( j > hi){
                a[k] = aux[i];
                i++;
            }else if(aux[j] < aux[i]){
                a[k] = aux[j];
                j++;
            }else{
                a[k] = aux[i];
                i++;
            };
            k++;
        };
    };

    sortRecursive(a, aux, lo, hi){
        if(lo >= hi){
            return;
        };

        let mid = lo + Math.floor((hi - lo)/2);

        this.sortRecursive(a, aux, lo, mid);
        this.sortRecursive(a, aux, mid + 1, hi);
        this.merge(a, aux, lo, mid, hi);
    };

    sort(){
        let aux = Array(this.a.length).fill(null);
        for(let i = 0; i < this.a.length; i++){
            aux[i] = this.a[i];
        };
        this.sortRecursive(this.a, aux, 0, this.a.length - 1);
    };
};

let mergeSort = new MergeSort([2, 1, 5, 3, 6, 9, 4]);
mergeSort.sort();
console.log(mergeSort.a)