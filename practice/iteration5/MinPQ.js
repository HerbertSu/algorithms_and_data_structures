
class MinPQ{
    constructor(arr=[null]){
        this.arr = arr;
        this.N = arr.length;
    };

    greater(i, j){
        if(i <= 0 || j <= 0){
            throw console.error("Invalid entry to greater()");
        };
        if(this.arr[i] > this.arr[j]){
            return true;
        };
        return false;
    };

    swap(i, j){
        let oldi = this.arr[i];
        this.arr[i] = this.arr[j];
        this.arr[j] = oldi;
    };

    swim(i){
        while(i > 0 && this.greater(Math.floor(i/2), i)){
            this.swap(i, Math.floor(i/2));
            i = Math.floor(i/2);
        };
    };

    insert(i){
        this.arr.push(i);
        this.swim(this.N);
        this.N = this.arr.length;
    };

    sink(i){
        while(2*i < this.N && this.greater(i, 2*i)){
            let j = 2*i;
            if(j+1 < this.N && this.greater(j, j + 1)){
                j++;
            };
            this.swap(i, j);
            i = j;
        };
    };

    delMin(){
        this.swap(1, this.N - 1);
        let min = this.arr.pop();
        this.N = this.arr.length;
        this.sink(1);
        return min;
    };

    isEmpty(){
        return this.arr.length <= 1;
    };

    order(){
        let i = Math.floor(this.arr.length/2);
        while(i > 0){
            this.sink(i);
            i--;
        };
    };

    heapSort(){
        while(!this.isEmpty()){    
            this.swap(1, this.N - 1);
            this.N--;
            this.sink(1);
        };
    };
};