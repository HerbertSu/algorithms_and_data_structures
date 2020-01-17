
class IndexedMinPQ{
    constructor(V){
        this.V = V;
        this.keys = Array(G.V).fill(null);
        this.pm = Array(G.V).fill(null);
        this.pq = [];
        
        // Marks the index for the next available position in pq
        this.N = this.pq.length;
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
        let oldi = this.pq[i];
        this.pq[i] = this.pq[j];
        this.pq[j] = oldi;

        this.pm[this.pq[i]] = j;
        this.pm[this.pq[j]] = i;
    };

    swim(i){
        let parent = Math.floor(i/2);
        if(i%2 == 0){
            parent--;
        };

        while(this.greater(parent, i) && i > 0){
            this.swap(parent, i);
            i = parent;
            parent = Math.floor(i/2);
            if(i%2 == 0){
                parent--;
            };
        };
    };

    insert(v, weight){
        this.keys[v] = weight;
        this.pm[v] = this.N;
        this.pq.push(v);
        this.swim(this.N);
        this.N = this.pq.length;
    };

    sink(i){
        while(2*i + 1 < this.N && this.greater(i, 2*i + 1)){
            let j = 2*i + 1;
            if(j + 1 < this.N - 1 && this.greater(j, j + 1)){
                j++;
            };
            this.swap(i, j);
            i = j;
        };
    };

    delMin(){
        this.swap(0, this.N - 1);
        let minIndex = this.pq.pop();
        this.N = this.pq.length;

        this.pm[minIndex] = null;
        this.keys[minIndex] = null;

        this.sink(0);
        return minIndex;
    };

    decreaseKey(v, weight){
        if(weight > this.keys[v]){
            return;
        };
        this.keys[v] = weight;
        this.swim(this.pm[v]);
    };

    isEmpty(){
        return this.pq.length <= 0;
    };
};

module.exports = {
    IndexedMinPQ,
};