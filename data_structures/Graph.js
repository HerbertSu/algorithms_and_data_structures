const {ListBag} = require('./Bag');

class Graph{
    constructor(V){
        this.V = V;
        this.E = 0;
        this.adj = Array(V).fill(null);

        for(let i = 0; i < this.adj.length; i++){
            this.adj[i] = new ListBag();
        };
    };

    addEdge(v, w){
        this.adj[v].add(w);
        this.adj[w].add(v);
        this.E++;
    };

    getV(){
        return this.V;
    };

    adjacent(v){
        return this.adj[v];
    };

};

module.exports = {
    Graph,
};