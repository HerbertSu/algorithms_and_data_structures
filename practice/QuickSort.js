const {knuthShuffle} = require('./KnuthShuffle');

class QuickSort{
    constructor(a){
        this.a = a;
        this.N = a.length; 
    };

    less(i, j){
        if(this.a[i] < this.a[j]){
            return true;
        };
        return false;
    };

    swap(i, j){
        let old = this.a[i];
        this.a[i] = this.a[j];
        this.a[j] = old;
    };

    partition(a, lo, hi){
        let i = lo + 1;
        let j = hi;

        while(true){
            while(i <= hi){
                if(this.less(lo, i)){
                    break;
                };
                i++;
            };

            while(j > lo){
                if(this.less(j, lo)){
                    break;
                };
                j--;
            };
            if(i >= j){
                break;
            };

            this.swap(i, j);
        };
        this.swap(lo, j);
        return j;
    };

    sortRecursive(a, lo, hi){
        if(lo >= hi){
            return;
        };

        let j = this.partition(a, lo, hi);
        this.sortRecursive(a, lo, j);
        this.sortRecursive(a, j+1, hi);
    };

    sort(){
        knuthShuffle(this.a);
        this.sortRecursive(this.a, 0, this.a.length - 1);
    };

    
};


class QuickSelect{

    less(v, w){
        if(v < w){
            return true;
        };
        return false;
    };

    swap(a, i, j){
        let old = a[i];
        a[i] = a[j];
        a[j] = old;
    };

    partition(a, lo, hi){
        let i = lo + 1;
        let j = hi;

        while(true){
            while(i <= hi){
                if(this.less(a[lo], a[i])){
                    break;
                };
                i++;
            };

            while(j > lo){
                if(this.less(a[j], a[lo])){
                    break;
                };
                j--;
            };
            if(i >= j){
                break;
            };

            this.swap(a, i, j);
        };
        this.swap(a, lo, j);
        return j;
    };

    partition2(array, lo, hi){
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

    quickSelect(a, k){
        knuthShuffle(a);

        let lo = 0;
        let hi = a.length - 1;

        while(hi > lo){
            let j = this.partition(a, lo, hi);
            
            if(k > j){
                lo = j + 1;
                
            }else if(k < j){
                hi = j - 1;
            }else{
                return a[k];
            };
        };
        return a[k];
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
}

let a = [4, 1, 60 , 3, 5, 13 , 431, 975, 953, 665, 31, 499 , 43, 7];
let quickSort = new QuickSort(a);

let quickSelect = new QuickSelect();
console.log(quickSelect.quickSelect(a, 2));
// quickSort.sort(a);
// console.log(quickSort.a)
