const {MinPQEdgeGraph} = require('./MinPQ')
const {ListQueue} = require('./Queue');
const {EdgeWeightedGraph, Edge} = require('./EdgeWeightedGraph');
 
class LazyPrim{
    constructor(G){
        this.marked = Array(G.V).fill(false);
        this.mst = new ListQueue();
        this.pq = new MinPQEdgeGraph([null]);
        
        this.marked[0] = true;
        this.visit(G, 0);

        while(!this.pq.isEmpty()){
            let e = this.pq.delMin();
            let v = e.either();
            let w = e.other(v);

            if(this.marked[v] && this.marked[w]){
                continue;
            };

            this.mst.enqueue(e);

            if(!this.mst.contains(v)){
                this.visit(G, v);
            };
            if(!this.mst.contains(w)){
                this.visit(G, w);
            };
        };
    };

    visit(G, v){
        this.marked[v] = true;
        G.adjacent(v).bag.forEach((e)=>{
            let w = e.other(v);
            if(!this.marked[w]){
                this.pq.insert(e);
            };
        });
    };
};

let e0_6 = new Edge(0, 6, 0.58);
let e0_2 = new Edge(0, 2, 0.26);
let e0_4 = new Edge(0, 4, 0.38);
let e0_7 = new Edge(0, 7, 0.16);
let e1_3 = new Edge(1, 3, 0.29);
let e1_2 = new Edge(1, 2, 0.36);
let e1_7 = new Edge(1, 7, 0.19);
let e1_5 = new Edge(1, 5, 0.32);
let e2_3 = new Edge(2, 3, 0.17);
let e2_6 = new Edge(2, 6, 0.40);
let e2_7 = new Edge(2, 7, 0.34);
let e3_6 = new Edge(3, 6, 0.52);
let e4_6 = new Edge(4, 6, 0.93);
let e4_7 = new Edge(4, 7, 0.37);
let e4_5 = new Edge(4, 5, 0.35);
let e5_7 = new Edge(5, 7, 0.28);

let weightedG = new EdgeWeightedGraph(8);
weightedG.addEdge(e0_6);
weightedG.addEdge(e0_2);
weightedG.addEdge(e0_4);
weightedG.addEdge(e0_7);
weightedG.addEdge(e1_3);
weightedG.addEdge(e1_2);
weightedG.addEdge(e1_7);
weightedG.addEdge(e1_5);
weightedG.addEdge(e2_3);
weightedG.addEdge(e2_6);
weightedG.addEdge(e2_7);
weightedG.addEdge(e3_6);
weightedG.addEdge(e4_6);
weightedG.addEdge(e4_7);
weightedG.addEdge(e4_5);
weightedG.addEdge(e5_7);

let prim = new LazyPrim(weightedG);
console.log(prim.mst)