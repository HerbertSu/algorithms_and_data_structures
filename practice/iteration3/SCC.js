const {TopologicalSort} = require('./TopologicalSort');

//Kosaraju-Shair algorithm
class SCC{
    constructor(G){
        this.G = G;
        this.scc = Array(G.V).fill(null);
        this.count = 0;
        this.marked = Array(G.V).fill(false);

        let Gr = G.reverse();
        console.log(Gr.adj);
        let reversePost = new TopologicalSort(Gr).returnTopSort();

        for(let i=0; i<reversePost.length; i++){
            if(!this.marked[i]){
                this.dfs(reversePost[i]);
                this.count++;
            };
        };
    };

    dfs(G, v){
        this.marked[v] = true;
        this.scc[v] = this.count;

        let adjacent = G.adjacent(v);
        for(let i = 0; i < adjacent.length; i++){
            let w = adjacent[i];
            if(!this.marked[w]){
                this.dfs(G,w);
            };
        };
    };
};