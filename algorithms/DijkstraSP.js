const {IndexMinPQ} = require('../data_structures/IndexedPriorityQueue');

class DijkstraSP{
    constructor(G, source){
        this.edgeTo = Array(G.V).fill(null);
        this.distTo = Array(G.V).fill(Infinity);
        this.pq = new IndexMinPQ(G.V);

        this.distTo[source] = 0;
        this.pq.insert(source, 0);

        while(!this.pq.isEmpty()){
            let v = this.pq.delMin();
            // console.log("PQ", this.pq)
            // console.log("HERE", v, " ", G.adjacent(v))
            if(v != undefined){
                for(let i = 0; i < G.adjacent(v).arr.length; i++){
                    let e = G.adjacent(v).arr[i];
                    this.relax(e);
                };
            };
        };
    };

    relax(e){
        let v = e.from();
        let w = e.to();

        if(this.distTo[w] > this.distTo[v] + e.weight){
            this.distTo[w] = this.distTo[v] = e.weight
            this.edgeTo[w] = e;
        };

        if(this.pq.contains(w)){
            this.pq.decreaseKey(w, this.distTo[w]);
        }else{
            this.pq.insert(w, this.distTo[w]);
        };
    };
};

module.exports = {
    DijkstraSP,
};