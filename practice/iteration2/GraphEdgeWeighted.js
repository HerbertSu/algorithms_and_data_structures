const {ListBag} = require('../Bag');

class Edge{
    constructor(v, w, weight){
        this.v = v;
        this.w = w;
        this.weight = weight;
    };

    either(v){
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
        this.edges = [];

        for(let i = 0; i < V; i++){
            this.adj[i] = new ListBag();
        };
    };

    addEdge(e){
        let v = e.either();
        let w = e.other(v);

        this.adj[v].add(e);
        this.adj[w].add(e);
        this.edges.push(e);
    };

    adjacent(v){
        return this.adj[v];
    };
};

module.exports = {
    Edge,
    GraphEdgeWeighted,
};