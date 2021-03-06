class MaxPQ{
    constructor(a){
        this.a = a;
        this.N = a.length - 1;
    };

    insert(key){
        this.a.push(key);
        this.N = this.a.length - 1;
        this.swim(this.N);
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

    swim(i){
        while(this.less(Math.floor(i/2), i) && i > 1){
            this.swap(i, Math.floor(i/2));
            i = Math.floor(i/2);
        };
    };

    sink(i){
        while(2*i <= this.N){
            let j = 2*i;
            if(j + 1 < this.N){
                if(this.less(j, j+1)){
                    j++;
                };
            };
            if(this.less(i, j)){
                this.swap(i, j);
            }else{
                break;
            };
            i = j;
        };
    };

    delMax(){
        this.swap(1, this.N);
        let max = this.a.pop();
        this.N = this.a.length - 1;
        this.sink(1);
        return max;
    };

    heapOrder(){
        let k = 0;
        while(2*k <= this.N){
            k++;
        };

        while(k >= 1){
            this.sink(k);
            k--;
        };
    };

    sort(){
        while(this.N > 1){
            this.swap(1, this.N);
            this.N--;
            this.sink(1);
        };
    };
};



let pq = new MaxPQ([null]);
pq.insert(1);
pq.insert(2);
pq.insert(3);
pq.insert(6);
pq.insert(4);
pq.insert(19);
pq.insert(5);

let str = "SORTEXAMPLE";
let arr = str.split('');
arr.unshift(null);

let pqsort = new MaxPQ(arr);
pqsort.heapOrder()
pqsort.sort()
console.log(arr)