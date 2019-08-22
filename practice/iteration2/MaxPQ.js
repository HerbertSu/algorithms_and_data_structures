class MaxHeapFromOne{
    constructor(pq=[null]){
        this.pq = pq;
        this.N = this.pq.length - 1;
    }

    less(i,j){
        if(this.pq[i] < this.pq[j]){
            return true;
        };
        return false;
    };

    swap(i, j){
        let oldi = this.pq[i];
        this.pq[i] = this.pq[j];
        this.pq[j] = oldi;
    };

    swim(i){
        while(this.less(Math.floor(i/2) , i) && i > 1){
            this.swap(Math.floor(i/2), i);
            i = Math.floor(i/2);
        };
    };

    insert(key){
        this.pq.push(key);
        this.N = this.pq.length - 1;
        this.swim(this.N);
    };

    sink(i){
        while(2*i <= this.N){
            let j = 2*i;
            if(2*i + 1 <= this.N){
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
        let max = this.pq.pop()
        this.N = this.pq.length - 1;
        this.sink(1);
        return max;
    };

    heapOrder(){
        let k = Math.floor(this.N/2);
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

/**
 * Example
 */
// let string = "SORTEXAMPLE";
// let arr = string.split("");
// arr.unshift(null);
// let maxpq = new MaxHeapFromOne(arr);

// maxpq.heapOrder()
// // console.log(maxpq.delMax())
// maxpq.sort();
// console.log(maxpq.pq)

class MaxHeapFromZero{
    constructor(){
        this.pq = [];
        this.N = 0;
    };

    less(i, j){
        if(this.pq[i] < this.pq[j]){
            return true;
        };
        return false;
    };

    swap(i, j){
        let oldi = this.pq[i];
        this.pq[i] = this.pq[j];
        this.pq[j] = oldi;
    };

    swim(i){
        let parent = Math.floor(i/2);
        if(i%2 == 0){
            parent--;
        };
        while(this.less(parent,i) && i > 0){
            this.swap(parent, i);
            i = parent;
            parent = Math.floor(i/2);
            if(i%2 == 0){
                parent--;
            };
        };
    };

    insert(key){
        this.pq.push(key);
        this.N = this.pq.length - 1;
        this.swim(this.N);
    };

    sink(i){
        while(2*i + 1 <= this.N){
            let j = 2*i + 1;
            if(j + 1 <= this.N){
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
        this.swap(0, this.N);
        let max = this.pq.pop();
        this.N = this.pq.length - 1;
        this.sink(this.N);
        return max;
    };
};

/**
 * Example
 */
// let maxpq0 = new MaxHeapFromZero();
// maxpq0.insert(1)
// maxpq0.insert(2)
// maxpq0.insert(3)
// console.log(maxpq0.delMax())
// console.log(maxpq0.pq)