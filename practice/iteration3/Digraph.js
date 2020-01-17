const {ListBag} = require('./Bag');

class Digraph{
    constructor(V){
        this.V = V;
        this.E = 0;
        this.adj = Array(V).fill(null);

        for(let i=0; i<V; i++){
            this.adj[i] = new ListBag();
        };
    };

    addEdge(v, w){
        this.adj[v].insert(w);
        this.E++;
    };

    adjacent(v){
        return this.adj[v];
    };

    reverse(){
        let Gr = new Digraph(this.V);

        for(let v = 0; v < this.V; v++){
            let adjacent = this.adjacent(v);

            for(let i = 0; i < adjacent.length; i++){
                let w = adjacent[i];
                Gr.addEdge(w, v);
            };
        };
        return Gr;
    };
}