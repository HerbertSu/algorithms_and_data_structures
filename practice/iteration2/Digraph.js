const {ListBag} = require('./Bag');

class Digraph{
    constructor(V){
        this.V = V;
        this.adj = Array(V).fill(null);
        this.edges = 0;

        for(let i = 0; i < V; i++){
            this.adj[i] = new ListBag();
        };
    };

    addEdge(v, w){
        this.adj[v].add(w);
        this.edges++;
    };

    adjacent(v){
        return this.adj[v];
    };

    reverseG(){
        let Gr = new Digraph(this.V);
        for(let v = 0; v < this.V; v++){
            let adjacentList = this.adjacent(v).bag;
            for(let i = 0; i < adjacentList.length; i++){
                let w = adjacentList[i];
                Gr.addEdge(w, v);
            };
        };
        return Gr;
    };
};