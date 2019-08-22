class QuickSelect {
    constructor(arr){
        this.arr = arr;
    };

    swap(a, i, j){
        let oldi = a[i];
        a[i] = a[j];
        a[j] = oldi;
    };

    partition(a, lo, hi){
        let i = lo + 1;
        let j = hi;

        while(true){
            while(a[i] < a[lo]){
                i++;
                if(i >= hi){
                    break;
                };
            };
            while(a[j] > a[lo]){
                j--;
                if(j <= lo){
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

    select(k){
        let lo = 0;
        let hi = this.arr.length - 1;

        while(hi > lo){
            let j = this.partition(this.arr, lo, hi);
            if(k > j){
                lo = j + 1;
            }else if(k < j){
                hi = j - 1;
            }else{
                return this.arr[k];
            };
        };
        return this.arr[k];
    };
};

/**
 * Example
 */
// let a = [94, 55, 5, 3, 1, -1, 0, 19, 200, 38, 59, 199];
// let select = new QuickSelect(a);
// for(let i = 0; i < a.length; i++){
//     console.log(select.select(i))
// };