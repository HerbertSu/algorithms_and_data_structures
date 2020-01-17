
const {GraphEdgeWeighted} = require('./GraphEdgeWeighted');
const {QuickUnion} = require('./QuickUnion');
const {MinPQMST} = require('./MinPQ');

class KruskalMST{
    constructor(G){
        this.G = G;
        this.pq = new MinPQMST();
        this.uf = new QuickUnion(G.V);
        this.mst = [];

        for(let i = 0; i < G.edges.length; i++){
            let e = G.edges[i];
            this.pq.insert(e);
        };

        while(!this.pq.isEmpty() && this.mst.length < G.V - 1){
            let e = this.pq.delMin();
            let v = e.either();
            let w = e.other(v);
            
            if(!this.uf.find(v, w)){
                this.mst.push(e);
                this.uf.union(v, w);
            };
        };
    };

};