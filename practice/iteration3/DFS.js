const {ListStack} = require('./Stack');

class DFS{
    constructor(G, s){
        this.G = G;
        this.s = s;
        this.edgeTo = Array(G.V).fill(null);
        this.marked = Array(G.V).fill(false);

        this.dfs(G, s);
    };

    dfs(G, v){
        this.marked[v] = true;
        let adjacent = G.adjacent(v).bag;

        for(let i=0; i < adjacent.length; i++){
            let w = adjacent[i];
            if(!this.marked[w]){
                this.dfs(G, w);
                this.edgeTo[w] = v;
            };
        };
    };
};

class DFSPathTo{
    constructor(G, s){
        this.G = G;
        this.s = s;
        this.edgeTo = Array(G.V).fill(null);
        this.marked = Array(G.V).fill(false);

        this.dfs(G, s);
    };

    dfs(G, v){
        this.marked[v] = true;
        let adjacent = G.adjacent(v).bag;

        for(let i=0; i < adjacent.length; i++){
            let w = adjacent[i];
            if(!this.marked[w]){
                this.dfs(G, w);
                this.edgeTo[w] = v;
            };
        };
    };

    hasPathTo(v){
        return this.marked[v];
    };

    pathTo(v){
        if(!this.hasPathTo(v)){
            return null;
        };

        let path = new ListStack();

        while(this.edgeTo[v] != this.s){
            path.insert(v);
            v = this.edgeTo[v];
        };
        path.insert(this.s);
        return path;
    };

};


class DFSConnectedComponents{
    constructor(G, s){
        this.G = G;
        this.s = s;
        this.marked = Array(G.V).fill(false);
        this.connected = Array(G.V).fill(null);
        this.count = 0;

        for(let i=0; i < G.V; i++){
            if(!this.marked[i]){
                this.dfs(G, i);
                this.count++;
            };
        };
    };

    dfs(G, v){
        this.marked[v] = true;
        this.connected[v] = this.count;

        let adjacent = G.adjacent(v).bag;
        for(let i=0; i < adjacent.length; i++){
            let w = adjacent[i];
            if(!this.marked[w]){
                this.dfs(G, w);
            };
        };
    };
};