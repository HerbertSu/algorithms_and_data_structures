const {ListQueue} = require('./Queue');
const {MinPQEdgeWeightedGraph} = require('./MinPQ');

class MST{
    constructor(G, s=0){
        this.mst = new ListQueue();
        this.pq = new MinPQEdgeWeightedGraph();
        this.marked = Array(G.V).fill(false);

        this.visit(G, s);

        while(!this.pq.isEmpty() && this.mst.q.length < G.V - 1){
            let e = this.pq.delMin();
            let v = e.either();
            let w = e.other(v);

            if(this.marked[v] && this.marked[w]){
                continue;
            };

            this.mst.enqueue(e);

            if(!this.marked[v]){
                this.visit(G,v);
            };
            
            if(!this.marked[w]){
                this.visit(G, w);
            };
        };
    };

    visit(G, v){
        this.marked[v] = true;

        let adjacent = G.adjacent(v);
        for(let i = 0; i < adjacent.length; i++){
            let e = adjacent[i];
            let w = e.other(v);
            if(!this.marked[w]){
                this.pq.insert(e);
            };
        };
    };


};