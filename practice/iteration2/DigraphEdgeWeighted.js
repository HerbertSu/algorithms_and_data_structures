const {ListBag} = require('../Bag');

class DirectedEdge{
    constructor(v, w, weight){
        this.v = v;
        this.w = w;
        this.weight = weight;
    };

    to(){
        return this.w;
    };

    from(){
        return this.v;
    };
};

class DigraphEdgeWeighted{
    constructor(V){
        this.V = V;
        this.adj = Array(V).fill(null);

        for(let i = 0; i < V; i++){
            this.adj[i] = new ListBag();
        };
    };

    addEdge(e){
        let v = e.from();
        this.adj[v].add(e);
    };

    adjacent(v){
        return this.adj[v];
    };
};

module.exports = {
    DirectedEdge,
    DigraphEdgeWeighted,
};