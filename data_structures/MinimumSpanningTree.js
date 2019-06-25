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

    other(node){
        if(node == this.v){
            return this.w;
        };
        return this.w;
    };

    compareTo(that){
        if(this.weight > that.weight){
            return 1;
        }else if(this.weight < that.weight){
            return -1;
        }else{
            return 0;
        };
    };
};

class EdgeWeightedGraph{
    constructor(V){
        this.V = V;
        this.adj = Array(V).fill(null);
        
        for(let i = 0; i < V; i++){
            this.adj[i] = new ListBag;
        };
    };

    addEdge(e){
        let v = e.either();
        let w = e.other(v);

        this.adj[v].add(e);
        this.adj[w].add(e);
    };

    adjacentEdge(v){
        return this.adj[v];
    };
};