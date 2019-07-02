const {MinHeapMST} = require('../data_structures/Heap');
const {QueueLinkedList} = require('../data_structures/Queue');
const {QuickUnion} = require('../algorithms/DynamicConnectivity');

class KruskalMST{
    constructor(G){
        this.G = G;
        this.mst = new QueueLinkedList;
        this.pq = new MinHeapMST([null]);
        this.uf = new QuickUnion(G.V);

        for(let e of this.G.getEdges()){
            if(e != null){
                this.pq.insert(e);
            };
        };
        
        while(!this.pq.isEmpty() && this.mst.size() < G.V - 1){
            let e = this.pq.delMin();
             
            let v = e.either();
            let w = e.other(v);

            if(!this.uf.find(v, w)){
                this.uf.union(v, w);
                this.mst.insert(e, e.weight);
            };
        };

    };

    edges(){
            return this.mst;
        };


};

module.exports = {
    KruskalMST,
}