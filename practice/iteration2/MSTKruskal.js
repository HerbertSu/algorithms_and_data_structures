const {QuickUnion} = require('../UnionFind');
const {MinPQEdgeGraph} = require('../MinPQ');
const {ListQueue} = require('../Queue');

class MSTKruskal{
    constructor(G){
        this.G = G;
        this.uf = new QuickUnion(G.V);
        this.pq = new MinPQEdgeGraph([null]);
        this.mst = new ListQueue();

        G.edges().forEach(edge => {
            this.pq.insert(edge);
        });

        while(!this.pq.isEmpty() && this.mst.q.length < G.V - 1){
            let e = this.pq.delMin();
            let v = e.either();
            let w = e.other(v);

            if(this.uf.connected(v, w)){
                continue;
            };

            this.mst.enqueue(e);
            this.uf.union(v, w);
        };
    };
};