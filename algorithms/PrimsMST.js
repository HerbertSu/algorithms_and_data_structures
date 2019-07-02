const {MinHeapMST} = require('../data_structures/Heap');
const {QueueLinkedList} = require('../data_structures/Queue');

class LazyPrimMST{
    constructor(G){
        this.G = G;
        this.pq = new MinHeapMST([null]);
        this.mst = new QueueLinkedList;
        this.marked = Array(G.V).fill(false);
        this.visit(G, 0);
        

        while(!this.pq.isEmpty()){
            let e = this.pq.delMin();
            // console.log(this.pq)
            
            let v = e.either();
            let w = e.other(v);
            // console.log(e)
            if(this.marked[v] && this.marked[w]){
                continue;
            };

            this.mst.insert(e);
            // console.log(this.marked)
            if(!this.marked[v]){
                this.visit(this.G, v);
                // console.log("v v vv v v v v v v v v v v v v", v)
            }
            if(!this.marked[w]){
                // console.log("wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww", w)
                
                this.visit(this.G, w);
            };
        };

    };

    returnMST(){
        return this.mst;
    };

    visit(G, v){
        this.marked[v] = true;
        console.log(G.adjacentEdge(v).arr)
        for(let e of G.adjacentEdge(v).arr){
            if(!this.marked[e.other(v)]){
                this.pq.insert(e);
            };
        };
    };
};

module.exports = {
    LazyPrimMST,
};