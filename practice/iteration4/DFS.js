
class DFS{
    constructor(G){
        this.G = G;
        this.marked = Array(G.V).fill(false);
    };

    dfs = (G, v) => {
        this.marked[v] = true;

        let adjacent = G.adjacent(v).bag;
        for(let i = 0; i < adjacent.length; i++){
            let w = adjacent[i];
            
            if(!this.marked[w]){
                this.dfs(G, w);
            };
        };
    };
};