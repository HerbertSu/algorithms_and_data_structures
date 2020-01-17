const {ListStack} = require('./Stack');
class IndexMinPQ{
    constructor(V){
        this.pq = [];
        this.pm = Array(V).fill(null);
        this.keys = Array(V).fill(null);
        this.N = 0; //The position of the next open pq entry. ie this.pq.length
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
        let oldVertexAti = this.pq[i];
        let oldVertexAtj = this.pq[j];

        this.pq[i] = this.pq[j];
        this.pq[j] = oldVertexAti;

        this.pm[oldVertexAti] = j;
        this.pm[oldVertexAtj] = i;
    };

    swim(i){
        let parent = Math.floor(i/2);
        if(i%2 == 0){
            parent -= 1;
        };

        while(this.greater(parent, i) && i > 0){
            this.swap(parent, i);
            i = parent;
            parent = Math.floor(i/2);
            if(i%2 == 0){
                parent -= 1;
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
        if(this.isEmpty()){
            return;
        };

        while(2*i + 1 < this.N){
            let j = 2*i + 1;
            if(j+1 < this.N && this.greater(j, j+1)){
                j+=1;
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
        this.swap(0, this.N - 1);
        let minId = this.pq.pop();
        this.N = this.pq.length;
        
        this.pm[minId] = null;
        this.keys[minId] = null;

        this.sink(0);
        return minId;
    };

    decreaseKey(v, weight){
        this.keys[v] = weight;
        this.swim(this.pm[v]);
    };

    isEmpty(){
        return this.pq.length <= 0;
    };
}

class ShortestPath{
    constructor(G, s){
        this.G = G;
        this.s = s;
        this.distTo = Array(G.V).fill(Infinity);
        this.edgeTo = Array(G.V).fill(null); 
        this.pq = new IndexMinPQ(G.V)

        this.distTo[s] = 0;
        this.pq.insert(this.s, 0);

        while(!this.pq.isEmpty()){
            let v = this.pq.delMin();

            let adjacent = this.G.adjacent(v).bag;
            for(let i = 0; i < adjacent.length; i++){
                let e = adjacent[i];
                this.relax(e);
            };
        };

    };
    
    distanceTo(v){
        return this.distTo[v];
    };

    pathTo(v){
        let path = new ListStack();
        while(v != this.s){
            let e = this.edgeTo[v];
            path.insert(e);
            v = e.from();
        };
        path.insert(this.edgeTo[v]);
        return path;
    };

    relax(e){
        let v = e.from();
        let w = e.to();

        if(this.distTo[w] > this.distTo[v] + e.weight){
            this.distTo[w] = this.distTo[v] + e.weight;
            this.edgeTo[w] = e;

            if(this.pq.keys[w] != null){
                this.pq.decreaseKey(w, this.distTo[w]);
            }else{
                this.pq.insert(w, this.distTo[w]);
            };
        };
    };


}