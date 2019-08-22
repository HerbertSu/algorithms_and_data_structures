const {ListStack} = require('../Stack');
const {IndexedMinPQ} = require('./IndexedMinPQ');

class SPT{
    constructor(G, s){
        this.s = s;
        this.distTo = Array(G.V).fill(Infinity);
        this.edgeTo = Array(G.V).fill(null);
        this.pq = new IndexedMinPQ(G.V);

        this.distTo[s] = 0;
        this.pq.insert(s, 0);
        
        while(!this.pq.isEmpty()){
            let v = this.pq.delMin();
            let adjacent = G.adjacent(v).bag;
            for(let i = 0; i < adjacent.lengt; i++){
                let e = adjacent[i];
                this.relax(e);
            };
        };
    };

    distTo(v){
        return this.distTo[v];
    };

    pathTo(v){
        let path = new ListStack();
        while(v != this.s){
            path.insert(this.edgeTo[v]);
            v = this.edgeTo[v].from();
        };
        return path;
    };

    relax(e){
        let v = e.from();
        let w = e.to();

        if(this.distTo[w] > this.distTo[v] + e.weight){
            this.distTo[w] = this.distTo[v] + e.weight;
            this.edgeTo[w] = e;

            if(this.pq.contains(w)){
                this.pq.decreaseKey(w, this.distTo[w]);
            }else{
                this.pq.insert(w, this.distTo[w]);
            };

        };
    };
};
