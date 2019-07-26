const {Edge, EdgeWeightedDigraph} = require('./EdgeWeightedDigraph');
const {ListStack} = require('./Stack');
const {IndexedMinPQDijkstra} = require('./IndexedMinPQ');

class DijkstraSP{
    constructor(G, s){
        this.distTo = Array(G.V).fill(Infinity);
        this.edgeTo = Array(G.V).fill(null);
        this.pq = new IndexedMinPQDijkstra(G.V);

        this.distTo[s] = 0;
        this.pq.insert(s, 0);
        while(!this.pq.isEmpty()){
            let v = this.pq.delMin();
            console.log(v)
            let adjacent = G.adjacent(v).bag;

            for(let i = 0; i < adjacent.length; i++){
                let e = adjacent[i];
                this.relax(e);
            };
        };
    };

    distanceTo(v){
        return this.distTo[v];
    };

    pathTo(v){
        let path = new ListStack();
        let e = this.edgeTo[v];
        
        while(e != null){
            path.insert(e);
            e = this.edgeTo[e.from()];
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
                console.log(v,w)
                this.pq.decreaseKey(w, this.distTo[w]);
            }else{
                this.pq.insert(w, this.distTo[w]);
            }
        };
    };
};

let size = 8;
let ewd = new EdgeWeightedDigraph(size);

let de0_1 = new Edge(0, 1, 5);
let de0_4 = new Edge(0, 4, 9);
let de0_7 = new Edge(0, 7, 8);
let de1_2 = new Edge(1, 2, 12);
let de1_3 = new Edge(1, 3, 15);
let de1_7 = new Edge(1, 7, 4);
let de2_3 = new Edge(2, 3, 3);
let de2_6 = new Edge(2, 6, 11);
let de3_6 = new Edge(3, 6, 9);
let de4_5 = new Edge(4, 5, 4);
let de4_6 = new Edge(4, 6, 20);
let de4_7 = new Edge(4, 7, 5);
let de5_2 = new Edge(5, 2, 1);
let de5_6 = new Edge(5, 6, 13);
let de7_5 = new Edge(7, 5, 6);
let de7_2 = new Edge(7, 2, 7);

ewd.addEdge(de0_1);
ewd.addEdge(de0_4);
ewd.addEdge(de0_7);
ewd.addEdge(de1_2);
ewd.addEdge(de1_3);
ewd.addEdge(de1_7);
ewd.addEdge(de2_3);
ewd.addEdge(de2_6);
ewd.addEdge(de3_6);
ewd.addEdge(de4_5);
ewd.addEdge(de4_6);
ewd.addEdge(de4_7);
ewd.addEdge(de5_2);
ewd.addEdge(de5_6);
ewd.addEdge(de7_5);
ewd.addEdge(de7_2);

let sp = new DijkstraSP(ewd, 0);
console.log(sp)