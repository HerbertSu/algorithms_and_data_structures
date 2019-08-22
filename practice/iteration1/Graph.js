const {ListBag} = require('./Bag');

class Graph{
    constructor(V){
        this.V = V;
        this.adj = Array(V).fill(null);
        this.E = 0;
        
        for(let i = 0; i < V; i++){
            this.adj[i] = new ListBag();
        };
    };

    addEdge(v, w){
        this.adj[v].add(w);
        this.adj[w].add(v);
        this.E++;
    };

    adjacent(v){
        return this.adj[v];
    };

    V(){
        return this.V;
    };
};

module.exports = {
    Graph,
};