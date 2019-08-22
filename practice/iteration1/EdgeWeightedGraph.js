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

    other(vertex){
        if(vertex == this.v){
            return this.w;
        };
        return this.v;
    };

    weight(){
        return this.weight;
    };
};

class EdgeWeightedGraph{
    constructor(V){
        this.V = V;
        this.E = 0;
        this.edges = [];
        this.adj = Array(V).fill(null);

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
        this.E++;
    };

    adjacent(v){
        return this.adj[v];
    };

    getEdges(){
        return this.edges;
    };
};

module.exports = {
    EdgeWeightedGraph,
    Edge,
};