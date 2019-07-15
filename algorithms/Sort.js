const {knuthShuffle} = require('./Shuffle');

class SelectionSort{
    constructor(array){
        this.array = array
    };

    swap(i, j){
        let iVal = this.array[i];
        this.array[i] = this.array[j];
        this.array[j] = iVal;
    };

    sort(){
        for(let i = 0; i < this.array.length; i++){
            let min = i;
            for(let j = i+1; j < this.array.length; j++){
                if(this.array[j] < this.array[min]){
                    min = j;
                };
            };
            
            this.swap(i, min);

        };
    };
};


class InsertionSort{
    constructor(array){
        this.array = array;
    };

    swap(i, j){
        let iVal = this.array[i];
        this.array[i] = this.array[j];
        this.array[j] = iVal;
    };

    sort(){
        for(let i = 0; i < this.array.length; i++){
            // let j = i;
            // while(this.array[j] < this.array[j-1] && j > 0){
            //     this.swap(j, j-1);
            //     j -= 1;
            // }
            let k = i;
            for(let j = i; j >= 0; j--){
                if(this.array[j] > this.array[k]){
                    this.swap(k, j);
                    k = j;
                };
            };
        };
    };
};

class ShellSort{
    constructor(array){
        this.array = array;
    };

    swap(i, j){
        let iVal = this.array[i];
        this.array[i] = this.array[j];
        this.array[j] = iVal;
    };

    sort(){
        let h = 0;
        while(h < this.array.length){
            if(3*h + 1 < this.array.length){
                h = 3*h + 1;
            }else{
                break;
            };
        };
        
        while(h >= 1){
            for(let i = h; i < this.array.length; i++){
                let j = i;
                while(j >= h && this.array[j - h] > this.array[j]){
                    this.swap(j, j - h);
                    j = j - h;
                };
            };
            h = (h - 1)/3;
        };
    };
};

class MergeSort{
    constructor(array){
        this.array = array;
    };

    isSorted(arr){
        let sorted = true;

        for(let i = 0; i + 1 < arr.length; i++){
            
            if(arr[i] > arr[i + 1]){
                sorted = false;
                break;
            };
        };
        return sorted;
    };

    merge(a, aux, lo, mid, hi){
       
        if(!this.isSorted(a.slice(lo, mid + 1))){
            return false;
        };
        if(!this.isSorted(a.slice(mid + 1, hi + 1))){
            return false;
        };

        let k = lo;
        while( k <= hi ){
            aux[k] = a[k];
            k+=1;
        };
        
        let i = lo;
        let j = mid + 1;
        k = lo;

        while(k <= hi){
            if( i > mid ){
                a[k] = aux[j];
                j+=1;
            }else if( j > hi ){
                a[k] = aux[i];
                i+=1;
            }else if( aux[j] < aux[i] ){
                a[k] = aux[j];
                j+=1;
            }else{
                a[k] = aux[i];
                i+=1;
            };
            k+=1;
        };
        return a;
    };

    sortRecursive(a, aux, lo, hi){
        if( hi <= lo){
            return;
        };
        
        let mid = lo + Math.floor((hi - lo)/2);
        this.sortRecursive(a, aux, lo, mid);
        this.sortRecursive(a, aux, mid+1, hi);
        this.merge(a, aux, lo, mid, hi);
    };

    sort(){
        let aux = new Array(this.array.length).fill(null);
        this.sortRecursive(this.array, aux, 0, this.array.length - 1)
    };
};


class QuickSort{
    constructor(array){
        this.array = array;
    };

    swap(array, i, j){
        let iVal = array[i];
        array[i] = array[j];
        array[j] = iVal;
    };

    partition(array, lo, hi){
        let i = lo + 1;
        let j = hi;

        while(i < j){
            while(array[i] < array[lo]){
                i++;
                if(i == j){
                    break;
                };
            };

            while(array[lo] < array[j]){
                j--;
                if(j == i){
                    break;
                };
            };
            if(i >= j){

                if(array[j] > array[lo]){
                    j--;
                };

                break;
                
            };
            this.swap(array, i, j);
        };
        this.swap(array, j, lo);
        return j;



        // let i = lo + 1;
        // let j = hi;
        // while(true){
        //     while(array[i] < array[lo]){
        //         i += 1;
        //         if(i == hi){
        //             break;
        //         };
        //     };
        //     while(array[lo] < array[j]){
        //         j -= 1;
        //         if(j == lo){
        //             break;
        //         };
        //     };
        //     if(i >= j){
        //         break;
        //     };
        //     this.swap(array, i, j);
        // };
        // this.swap(array, lo, j);
        // return j;
    };

    sortRecursive(array, lo, hi){
        if(hi <= lo){
            return;
        };
        let j = this.partition(array, lo, hi);
        this.sortRecursive(array, lo, j - 1);
        this.sortRecursive(array, j + 1, hi);
    };

    sort(){
        knuthShuffle(this.array);
        this.sortRecursive(this.array, 0, this.array.length - 1);
    }


};


class QuickSelect{
    constructor(array){
        this.array = array;
    };

    swap(array, i, j){
        let iVal = array[i];
        array[i] = array[j];
        array[j] = iVal;
    };

    partition(array, lo, hi){
        let i = lo + 1;
        let j = hi;
        while(true){
            while(array[i] < array[lo]){
                i += 1;
                if(i == hi){
                    break;
                };
            };
            while(array[lo] < array[j]){
                j -= 1;
                if(j == lo){
                    break;
                };
            };
            if(i >= j){
                break;
            };
            this.swap(array, i, j);
        };
        this.swap(array, lo, j);
        return j;
    };

    select(array, k){
        knuthShuffle(array);

        let lo = 0; 
        let hi = array.length - 1;

        while(hi > lo){
            let j = this.partition(array, lo, hi);
            if( k < j){
                hi = j - 1;
            }else if( k > j){
                lo = j + 1;
            }else{
                return array[k];
            };
        };
        
        return array[k];
    };
    
};

const max = (a) => {
    let max = 0;
    for(let i = 0; i < a.length; i++){
        if(a[i] > a[max]){
            max = i;
        };
    };
    return max;
};

module.exports = {
    SelectionSort,
    InsertionSort,
    ShellSort,
    MergeSort,
    QuickSort,
    QuickSelect,
    max,
};