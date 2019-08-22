const {MinPQEdgeGraph} = require('../MinPQ');
const {ListQueue} = require('../Queue');

class MSTLazyPrim{
    constructor(G, s=0){
        this.G = G;
        this.s = s;
        this.mst = new ListQueue();
        this.pq = new MinPQEdgeGraph([null]);
        this.marked = Array(G.V).fill(false);

        this.visit(s, G);

        while(!this.pq.isEmpty() && this.mst.q.length < G.V - 1){
            let e = this.pq.delMin();
            let v = e.either();
            let w = e.other(v);

            if(this.marked[v] && this.marked[w]){
                continue;
            };

            this.mst.enqueue(e);

            if(!this.marked[v]){
                this.visit(v, G);
            };
            if(!this.marked[w]){
                this.visit(w, G);
            };
        };

    }

    visit(v, G){
        this.marked[v] = true;
        
        let adjacent = G.adjacent(V).bag;
        for(let i = 0; i < adjacent.length; i++){
            let e = adjacent[i];
            let w = e.other(v);
            if(!this.marked[w]){
                this.pq.insert(e);
            };
        };
    };
};