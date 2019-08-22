
class IndexedMinPQ{
    constructor(V){
        this.keys = Array(V).fill(null);
        this.pm = Array(V).fill(null);
        this.pq = [];
        this.N = this.pq.length - 1;
    };

    greater(i, j){
        if(this.keys[this.pq[i]] != null && this.keys[this.pq[j]] != null){
            if(this.keys[this.pq[i]] > this.keys[this.pq[j]]){
                return true;
            };
        };
        return false;
    };

    swap(i, j){
        let v = this.pq[i];
        let w = this.pq[j];

        this.pq[i] = this.pq[j];
        this.pq[j] = v;

        this.pm[v] = j;
        this.pm[w] = i;
    };

    swim(i){
        let parent = Math.floor(i/2);
        if(i%2 == 0){
            parent--;
        };

        while(this.greater(parent, i) && i > 0){
            this.swap(parent, i);
            i = parent;
            let parent = Math.floor(i/2);
            if(i%2 == 0){
                parent--;
            };
        };
    };

    insert(v, priority){
        this.keys[v] = priority;
        this.pq.push(v);
        this.N++;
        this.pm[v] = this.N;
        this.swim(this.pm[v]);
    };

    sink(i){
        let j = 2*i + 1;
        while(j <= this.N){
            if(j + 1 <= this.N){
                if(this.greater(j, j+1)){
                    j++;
                };
            };
            if(this.greater(i, j)){
                this.swap(i, j);
                i = j;
                j = 2*i + 1;
            }else{
                break;
            };
        };
    };
    
    delMin(){
        this.swap(0, this.N);
        let minId = this.pq.pop();
        this.N--;
        this.pm[minId] = null;
        this.keys[minId] = null;
        this.sink(0);
        return minId;
    };

    decreaseKey(v, newPriority){
        this.keys[v] = newPriority;
        this.swim(this.pm[v]);
    };

    contains(v){
        return this.keys[v] != null;
    };

    isEmpty(){
        return this.pq.length <= 0;
    };
};

module.exports = {
    IndexedMinPQ,
};