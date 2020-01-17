const {Edge, DigraphEdgeWeighted} = require('./DigraphEdgeWeighted');
const {IndexedMinPQ} = require('./IndexedMinPQ');

class Dijkstra{
    constructor(G, s=0){
        this.G = G;
        this.s = s;
        this.distTo = Array(G.V).fill(Infinity);
        this.edgeTo = Array(G.V).fill(null);
        this.pq = new IndexedMinPQ(G.V);

        this.distTo[s] = 0;
        this.pq.insert(s, 0);

        while(!this.pq.isEmpty()){
            let v = this.pq.delMin();
            
            let adjacent = G.adjacent(v).bag;
            for(let i = 0; i < adjacent.length; i++){
                let e = adjacent[i];
                this.relax(e);
            };
        };
    };

    relax(e){
        let v = e.from();
        let w = e.to();

        if(this.distTo[w] > this.distTo[v] + e.weight){
            this.distTo[w] = this.distTo[v] + e.weight;
            this.edgeTo[w] = e;

            if(this.pq.includes(w)){
                this.pq.decreaseKey(w, this.distTo[w]);
            }else{
                this.pq.insert(w, this.distTo[w]);
            };
        };
    };
};