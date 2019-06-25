const {ListBag} = require('./Bag');

class Digraph{
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
        this.E++;
    };

    getV(){
        return this.V;
    };

    adjacent(v){
        return this.adj[v];
    };

    reverse(){
        let reverseG = new Digraph(this.V);
        for(let i = 0; i < this.V; i++){
            let adjNodes = this.adjacent(i).arr;
            
            for(let j = 0; j < adjNodes.length; j++){
                reverseG.addEdge(j, i);
            };
        };

        return reverseG;
    };

};

module.exports = {
    Digraph,
};