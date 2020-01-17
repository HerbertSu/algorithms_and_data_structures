const {Edge, GraphEdgeWeighted} = require('./GraphEdgeWeighted');
const {MinPQEdgeWeightedGraph} = require('./MinPQ');
const {QuickUnion} = require('./QuickUnion');
const {ListQueue} = require('./Queue');

class MST{
    constructor(G){
        this.G = G;
        this.uf = new QuickUnion(G.V);
        this.pq = new MinPQEdgeWeightedGraph();
        this.mst = new ListQueue();
        
        G.edges.forEach(e=>{
            this.pq.insert(e);
        });

        while(!this.pq.isEmpty() && this.mst.q.length < G.V - 1){
            let e = this.pq.delMin();
            let v = e.either();
            let w = e.other(v);

            if(!this.uf.connected(v, w)){
                this.mst.enqueue(e);
                this.uf.union(v, w);
            };
        };
    };
};