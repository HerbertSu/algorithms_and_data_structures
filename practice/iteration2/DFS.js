const {ListStack} = require('./Stack');

class DFS{
    constructor(G){
        this.G = G;
        this.marked = Array(G.V).fill(false);
    };

    dfs(v, G){
        this.marked[v] = true;
        
        let adjacentList = G.adjacent(v).bag;
        for(let i = 0; i < adjacentList; i++){
            let w = adjacentList[i];
            if(!this.marked[w]){
                this.dfs(w, G);
            };
        };
    };
};

class DFSPathTo{
    constructor(s, G){
        this.G = G;
        this.s = s;
        this.marked = Array(G.V).fill(false);
        this.edgeTo = Array(G.V).fill(null);

        this.marked[s] = true;
        this.dfs(G, s);
    };

    dfs(v, G){
        this.marked[v] = true;
        
        let adjacentList = G.adjacent(v).bag;
        for(let i = 0; i < adjacentList; i++){
            let w = adjacentList[i];
            if(!this.marked[w]){
                this.dfs(w, G);
                this.edgeTo[w] = v;
            };
        };
    };

    hasPathTo(v){
        return this.marked[v];
    };

    pathTo(v){
        if(!this.hasPathTo()){
            return null;
        };

        let path = new ListStack();
        path.add(v);
        while(this.edgeTo[v] != this.s){
            path.add(this.edgeTo[v]);
            v = this.edgeTo[v];
        };
        path.add(this.s);
        return path;
    };
};

class DFSConnectedComponents{
    constructor(G){
        this.G = G;
        this.id = 0;
        this.marked = Array(G.V).fill(false);
        this.connected = Array(G.V).fill(null);

        for(let i = 0; i < G.V; i++){
            if(!this.marked[v]){
                this.dfs(i, G);
                this.id++;
            };
        };
    };

    dfs(v, G){
        this.marked[v] = true;
        this.connected[v] = this.id;
        
        let adjacentList = G.adjacent(v).bag;
        for(let i = 0; i < adjacentList; i++){
            let w = adjacentList[i];
            if(!this.marked[w]){
                this.dfs(w, G);
            };
        };
    };
};