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
        this.adj[v].insert(w);
        this.adj[w].insert(v);
        this.E++;
    };

    adjacent(){
        return this.adj;
    };
};

module.exports = {
    Graph,
};