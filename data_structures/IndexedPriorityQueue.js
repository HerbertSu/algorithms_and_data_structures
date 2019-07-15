class IndexMinPQ{
    constructor(N){
        this.N = N;
        this.keys = Array(N).fill(null);
        this.pm = Array(N).fill(-1); //qp
        this.pq = Array(N).fill(0); //pq

        this.index = 0;
    };

    greater(i, j){
        if(this.keys[this.pq[i]] != null && this.keys[this.pq[j]] != null){
            if(this.keys[this.pq[i]] > this.keys[this.pq[j]]){
                return true;
            }else{
                return false;
            };
        };
        return false;
    };

    swap(i, j){
        let old = this.pq[i];
        this.pq[i] = this.pq[j];
        this.pq[j] = old;
        
        this.pm[this.pq[i]] = i;
        this.pm[this.pq[j]] = j;
    };

    swim(i){
        while( this.greater(Math.floor(i/2), i) && i > 1 ){
            this.swap(i, Math.floor(i/2));
            i = Math.floor(i/2);
        };
    };

    sink(i){
        while(2*i <= this.index){
            let j = 2*i;
            if(j + 1 < this.index){
                if(this.greater(j, j+1)){
                    j++;
                };
            };
            if(this.greater(i, j)){
                this.swap(i, j);
                i = j;
            }else{
                break;
            };
        };
    };

    insert(i, value){
        if(this.contains(i)){
            console.log("Priority queue already contains this key ", i);
            return;
        };

        this.pm[i] = this.index;
        this.pq[this.index] = i;
        this.keys[i] = value;
        
        this.swim(this.index);
        this.index++;
    };

    delMin(){
        if(this.index >= 0){
            let min = this.pq[1];
            this.swap(1, this.index);
            this.pq.pop();
            this.sink(1);
            this.N = this.pq.length - 1;
            this.index--;
            this.pm[min] = -1;
            this.keys[min] = null;

            return min;
        };
        return null;        
    };


    isEmpty(){
        return this.index == 0;
    };

    decreaseKey(i, key){
        this.keys[i] = key;
        this.swim(this.pm[i]);
    };

    size(){
        return this.index;
    };

    contains(i){
        return this.pm[i] != -1;
    };

};


class MinHeap{
    constructor(a){
        this.a = a;
        this.N = this.a.length - 1;
    };
    
    greater(i, j){
        if(this.a[i] > this.a[j]){
            return true;
        }else{
            return false;
        };
    };

    less(i, j){
        if(this.a[i] < this.a[j]){
            return true;
        }else{
            return false;
        };
    };
    swap(i, j){
        let old = this.a[j];
        this.a[j] = this.a[i];
        this.a[i] = old;
    };

    swim(i){
        while( this.greater(Math.floor(i/2), i) && i > 1 ){
            this.swap(i, Math.floor(i/2));
            i = Math.floor(i/2);
            
        };
    };

    sink(i){
        while(2*i <= this.N){
            let j = 2*i;
            if(j + 1 < this.N){
                if(this.greater(j, j+1)){
                    j++;
                };
            };
            if(this.greater(i, j)){
                this.swap(i, j);
                i = j;
            }else{
                break;
            };
        };
    };

    insert(key){
        this.a.push(key);
        this.N = this.a.length - 1;
        this.swim(this.N);
    };

    delMin(){
        let min = this.a[1];
        this.swap(1, this.N);
        this.a.pop();
        this.sink(1);
        this.N = this.a.length - 1;
        return min;
    };

    heapOrder(){
        let k = Math.floor(this.N/2);
        while(k > 0){
            this.sink(k);
            k--;
        };
    };

    sort(){
        this.heapOrder();
        while(this.N > 1){
            this.swap(1, this.N);
            this.N--;
            this.sink(1);
        };
    };
};


module.exports = {
    IndexMinPQ,
};