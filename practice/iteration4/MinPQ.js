
/**
 * PQ begins at 1;
 */
class MinPQ{
    constructor(pq=[null]){
        this.pq = pq;
        this.N = this.pq.length;
    };

    greater(i, j){
        if(i < this.N && j < this.N){
            if(this.pq[i] > this.pq[j]){
                return true;
            };
            return false;
        };
        return false;
    };

    swap(i, j){
        let oldi = this.pq[i];
        this.pq[i] = this.pq[j];
        this.pq[j] = oldi;
    };

    swim(i){
        while(i > 1 && this.greater(Math.floor(i/2), i)){
            this.swap(i, Math.floor(i/2));
        };
    };

    insert(i){
        this.pq.push(i);
        this.swim(this.N);
        this.N = this.pq.length;
    }

    sink(i){
        while(2*i < this.N){
            let j = 2*i;
            if(j + 1 < this.N){
                if(this.greater(j, j+1)){
                    j++;
                };
            };
            if(this.greater(i, j)){
                this.swap(i,j);
                i = j;
            }else{
                break;
            };
        };
    };

    delMin(){
        this.swap(1, this.N - 1);
        let min = this.pq.pop();
        this.N = this.pq.length;
        this.sink(1);
        return min;
    };

    order(){
        let i = Math.floor(this.arr.length/2);
        while(i >= 1){
            this.sink(i);
            i--;
        };
    };

    isEmpty(){
        return this.N <= 1;
    };

    sort(){
        while(!this.isEmpty()){
            this.swap(1, this.N - 1);
            this.N--;
            this.sink(1);
        };
    };
};


class MinPQMST{
    constructor(pq=[]){
        this.pq = pq;
        this.N = this.pq.length;
    };

    greater(i, j){
        if(i < this.N && j < this.N){
            if(this.pq[i].weight > this.pq[j].weight){
                return true;
            };
            return false;
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
        while(i > 0 && this.greater(parent, i)){
            this.swap(parent, i);
            i = parent;
            parent = Math.floor(i/2);
            if(i%2 == 0){
                parent--;
            };
        };
    };

    insert(i){
        this.pq.push(i);
        this.swim(this.N);
        this.N = this.pq.length;
    };

    sink(i){
        while(2*i+1 < this.N){
            let j = 2*i+1;
            if(j + 1 < this.N){
                if(this.greater(j, j+1)){
                    j++;
                };
            };
            if(this.greater(i, j)){
                this.swap(i,j);
                i = j;
            }else{
                break;
            };
        };
    };

    delMin(){
        this.swap(0, this.N - 1);
        let min = this.pq.pop();
        this.N = this.pq.length;
        this.sink(0);
        return min;
    };

    isEmpty(){
        return this.N <= 0;
    };

};

module.exports = {
    MinPQ,
    MinPQMST,
};