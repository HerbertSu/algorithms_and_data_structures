
class QuickSelect{
    constructor(arr=[-12,8,7,6,5,4,3,2,1,93421,55,33,0]){
        this.arr = arr;
    };

    less(arr, i, j){
        if(arr[i] < arr[j]){
            return true;
        };
        return false;
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
            while(this.less(arr, i, lo)){
                i++;
                if(i > hi){
                    break;
                };
            };
            while(this.less(arr, lo, j)){
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
        this.swap(arr, lo, j);
        return j;
    };

    select(k){
        if(k > this.arr.length - 1){
            return null;
        }else if(k < 0){
            return null;
        };

        let lo = 0;
        let hi = this.arr.length - 1;
        
        while(lo <= hi){
            let j = this.partition(this.arr, lo, hi);
            if(j < k){
                lo = j + 1;
            }else if(j > k){
                hi = j - 1;
            }else{
                return this.arr[j];
            };
        };
        return this.arr[lo];
    }
};

// let qs = new QuickSelect();
// console.log(qs.select(-1))