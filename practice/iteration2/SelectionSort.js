class SelectionSort{
    constructor(arr){
        this.arr = arr;
    };

    swap(i, j){
        let oldi = this.arr[i];
        this.arr[i] = this.arr[j];
        this.arr[j] = oldi;
    };

    sort(){
        for(let i = 0; i < this.arr.length; i++){
            let min = i;
            for(let j = i + 1; j < this.arr.length; j++){
                if(this.arr[j] < this.arr[min]){
                    min = j;
                };
            };
            this.swap(i, min);
        };
    };
};

/**
 * Example
 */
// let ss = new SelectionSort([5, 1, 3, 55, 94, -1]);
// ss.sort()
// console.log(ss.arr)