const {Graph} = require('./Graph');
const {ListStack} = require('./Stack');

class DFSGraph{
    constructor(G, s){
        this.s = s;

        this.marked = Array(G.V).fill(false);
        this.edgeTo = Array(G.V).fill(null);

        this.dfs(G, s)
    };

    dfs(G, v){
        this.marked[v] = true;
        for(let i = 0; i < G.adjacent(v).bag.length; i++){
            let w = G.adjacent(v).bag[i];
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
        let w = this.edgeTo[v];
        let path = new ListStack();
        path.insert(v);

        while(w != this.s){  
            path.insert(w);
            w = this.edgeTo[w];
        };
        path.insert(this.s);
        return path;
    };
};

let g = new Graph(5);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(0, 3);
g.addEdge(3, 4);

let dfs = new DFSGraph(g, 0);

// console.log(dfs.pathTo(4))


class DFSConnected{
    constructor(G){
        this.connected = Array(G.V).fill(null);
        this.id = 0;
        this.marked = Array(G.V).fill(false);

        for(let i = 0; i < G.V; i++){
            if(!this.marked[i]){
                this.dfs(G, i);
                this.connected[i] = this.id;
                this.id++;
            };
        };
    };

    dfs(G, v){
        this.marked[v] = true;
        this.connected[v] = this.id;

        for(let i = 0; i < G.adjacent(v).bag.length; i++){
            let w = G.adjacent(v).bag[i];
            if(!this.marked[w]){
                this.dfs(G, w);
            };
        };
    };
};

let g2 = new Graph(7);
g2.addEdge(0, 1);
g2.addEdge(0, 2);
g2.addEdge(0, 3);
g2.addEdge(3, 4);
g2.addEdge(5, 6);

let dfs2 = new DFSConnected(g2);
// console.log(g2.adj[0])
console.log(dfs2.connected)
