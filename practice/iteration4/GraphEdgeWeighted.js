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
        if(this.v == v){
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

    adjacent(v){
        return this.adj[v];
    };

    addEdge(e){
        let v = e.either();
        let w = e.other(v);
        this.adj[v].insert(e);
        this.adj[w].insert(e);
        this.edges.push(e);
    };

};

module.exports = {
    Edge,
    GraphEdgeWeighted,
};