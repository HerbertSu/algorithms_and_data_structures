const {MinPQMST} = require('./MinPQ');

class LazyPrimsMST{
    constructor(G){
        this.G = G;
        this.pq = new MinPQMST();
        this.s = 0;
        this.marked = Array(G.V).fill(false);
        this.mst = [];

        this.visit(G, this.s);

        while(!this.pq.isEmpty() && this.mst.length < G.V - 1){
            let e = this.pq.delMin();
            let v = e.either();
            let w = e.other(v);

            if(this.marked[v] && this.marked[w]){
                continue;
            };
            this.mst.push(e);
            if(!this.marked[v]){
                this.visit(G, v);
            };
            if(!this.marked[w]){
                this.visit(G, v);
            };
        };

    };

    visit(G, v){
        this.marked[v] = true;

        let adjacent = G.adjacent(v).bag;
        for(let i = 0; i < adjacent.length; i++){
            let e = adjacent[i];
            let w = e.other(v);

            if(!this.marked[w]){
                this.pq.insert(e);
            };
        };
    };
};