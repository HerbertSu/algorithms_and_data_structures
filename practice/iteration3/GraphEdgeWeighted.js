const {ListBag} = require('./Bag');

class Edge{
    constructor(v, w, weight){
        this.v = v;
        this.w = w;
        this.weight = weight;
    };

    either(){
        return this.v;
    };

    other(v){
        if(v == this.v){
            return this.w;
        };
        return this.v;
    };
};

class GraphEdgeWeighted{
    constructor(V){
        this.V = V;
        this.adj = Array(V).fill(null);
        this.E = 0;
        this.edges = [];

        for(let i = 0; i < V; i++){
            this.adj[i] = new ListBag();
        };
    };

    addEdge(e){
        this.edges.push(e);
        let v = e.either();
        let w = e.other(v);
        this.adj[v].insert(e);
        this.adj[w].insert(e);
    };

    adjacent(v){
        return this.adj[v];
    };
};

module.exports = {
    Edge,
    GraphEdgeWeighted,
};