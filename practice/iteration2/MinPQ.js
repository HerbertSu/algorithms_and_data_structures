class MinHeapFromOne{
    constructor(pq=[null]){
        this.pq = pq;
        this.N = this.pq.length - 1;
    }

    greater(i,j){
        if(this.pq[i] > this.pq[j]){
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
        while(this.greater(Math.floor(i/2) , i) && i > 1){
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
                if(this.greater(j, j+1)){
                    j++;
                };
            };
            if(this.greater(i, j)){
                this.swap(i, j);
            }else{
                break;
            };
            i = j;
        };
    };

    delMin(){
        this.swap(1, this.N);
        let min = this.pq.pop()
        this.N = this.pq.length - 1;
        this.sink(1);
        return min;
    };
};

/**
 * Example
 */
// let minpq = new MinHeapFromOne();
// minpq.insert(3)
// minpq.insert(2)
// minpq.insert(1)
// console.log(minpq.pq);
// console.log(minpq.delMin())
// console.log(minpq.pq)