class InsertionSort{

    less(v, w){
        if( v < w){
            return true;
        };
        return false;
    }

    swap(a, i, j){
        let old = a[i];
        a[i] = a[j];
        a[j] = old;
    };

    sort(a){
        for(let i = 1; i < a.length; i++){
            for(let j = i; this.less(a[j], a[j - 1]) && j >= 1; j--){
                this.swap(a, j, j-1)
            };
        };
    };
};

let a = [4, 1, 60 , 3, 499 , 43, 7];
let insertionSort = new InsertionSort();
insertionSort.sort(a);
console.log(a);
