const {ListBag} = require('./Bag');

class Edge{
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
        this.adj[v].insert(e);
    };

    adjacent(v){
        return this.adj[v];
    };
};

module.exports = {
    DigraphEdgeWeighted,
    Edge,
};

