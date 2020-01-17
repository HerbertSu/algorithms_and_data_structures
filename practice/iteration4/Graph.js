const {ListBag} = require('./Bag');

class Edge{
    constructor(v, w){
        this.v = v;
        this.w = w;
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

class Graph{
    constructor(V){
        this.V = V;
        this.adj = Array(V).fill(null);

        for(let i = 0; i < V; i++){
            this.adj[i] = new ListBag();
        };
    };

    addEdge(v, w){
        this.adj[v].insert(w);
        this.adj[w].insert(v);
    };

    adjacent(v){
        return this.adj[v];
    };
};