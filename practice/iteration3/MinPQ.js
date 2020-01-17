class MinPQ{
    constructor(pq=[null]){
        this.pq = pq;
        this.N = pq.length;
    };

    greater(i, j){
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
        while(this.greater(Math.floor(i/2), i) && i > 1){
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
            let j =2*i;
            if(j + 1 <= this.N){
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

    delMin(){
        this.swap(1, this.N);
        let min = this.pq.pop();
        this.N = this.pq.length - 1;
        this.sink(1);
        return min;
    };

    order(){
        let k = Math.floor(this.N/2);

        for(k; k >= 1; k--){
            this.sink(k);
        };
    };

    isEmpty(){
        return this.pq.length == 1;
    };

    sort(){
        while(!this.isEmpty()){
            this.swap(1, this.N);
            this.N--;
            this.sink(1);
        };
    };
};

class MinPQFromZero{
    constructor(pq=[]){
        this.pq = pq;
        this.N = pq.length;
    };

    greater(i, j){
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
        let parent = Math.floor(i/2);
        if(i%2==0 && i>0){
            parent-=1;
        };

        while(this.greater(parent, i) && i > 0){
            this.swap(parent, i);
            i = parent;
            parent = Math.floor(i/2);
            if(i%2==0 && i>0){
                parent-=1;
            };
        };
    };

    insert(key){
        this.pq.push(key);
        this.N = this.pq.length - 1;
        this.swim(this.N);
    };

    sink(i){
        while(2*i+1 <= this.N){
            let j =2*i+1;
            if(j + 1 <= this.N){
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

    delMin(){
        this.swap(0, this.N);
        let min = this.pq.pop();
        this.N = this.pq.length - 1;
        this.sink(0);
        return min;
    };

};

class MinPQEdgeWeightedGraph{
    constructor(pq=[null]){
        this.pq = pq;
        this.N = pq.length;
    };

    greater(i, j){
        if(this.pq[i] != null && this.pq[j] != null){
            if(this.pq[i].weight > this.pq[j].weight){
                return true;
            };
        };
        return false;
    };

    swap(i, j){
        let oldi = this.pq[i];
        this.pq[i] = this.pq[j];
        this.pq[j] = oldi;
    };

    swim(i){
        while(this.greater(Math.floor(i/2), i) && i > 1){
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
            let j =2*i;
            if(j + 1 <= this.N){
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

    delMin(){
        this.swap(1, this.N);
        let min = this.pq.pop();
        this.N = this.pq.length - 1;
        this.sink(1);
        return min;
    };

    order(){
        let k = Math.floor(this.N/2);

        for(k; k >= 1; k--){
            this.sink(k);
        };
    };

    isEmpty(){
        return this.pq.length == 1;
    };

    sort(){
        while(!this.isEmpty()){
            this.swap(1, this.N);
            this.N--;
            this.sink(1);
        };
    };
};

module.exports = {
    MinPQEdgeWeightedGraph,
};