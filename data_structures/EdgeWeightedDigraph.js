const {ListBag} = require('./Bag');
const {StackLinkedList} = require('./Stack');

class DirectedEdge{
    constructor(v, w, weight){
        this.v = v;
        this.w = w;
        this.weight = weight;
    };

    from(){
        return this.v;
    };

    to(){
        return this.w;
    };

    weight(){
        return this.weight;
    };
};

class EdgeWeightedDigraph{
    constructor(V){
        this.V = V;
        this.adj = Array(V).fill(null);
        this.edges = 0;

        for(let i = 0; i < this.adj.length; i++){
            this.adj[i] = new ListBag;
        };
    };

    addEdge(e){
        let v = e.from();
        this.adj[v].add(e);
        this.edges++;
    };

    adjacent(v){
        return this.adj[v];
    };
};

class SPT{
    constructor(G, source){
        this.G = G;
        this.source = source;
        this.distTo = Array(G.V).fill(0);
        this.edgeTo = Array(G.V).fill(null);

        for(let i = 1; i < G.V; i++){
            this.distTo[i] == Infinity;
        };
    };

    relax(e){
        let v = e.from();
        let w = e.to();

        if(this.distTo[v] + e.weight() < this.distTo[w]){
            this.distTo[w] = this.distTo[v] + e.weight();
            this.edgeTo[w] = e;
        };
    };

    distanceTo(v){
        return this.distTo[v];
    };

    pathTo(v){
        let path = new StackLinkedList;
        let e = this.edgeTo[v];

        while(e != null){
            path.insert(e);
            e = this.edgeTo[e.from()];
        };
        return path;
    };
};

module.exports = {
    EdgeWeightedDigraph,
    SPT,
    DirectedEdge,
};