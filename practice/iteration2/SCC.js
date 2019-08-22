const {TopologicalSort} = require('./TopologicalSort');

class KosarajuShair{
    constructor(G){
        this.G = G;
        this.marked = Array(G.V).fill(false);
        this.count = 0;
        this.scc = Array(G.V).fill(null);
        
        let Gr = G.reverseG()
        let tp = new TopologicalSort(Gr);
        let reversePost = tp.returnPostOrder();

        while(!reversePost.isEmpty()){
            let i = reversePost.remove();
            if(!this.marked[i]){
                this.dfs(i, G);
                this.count++;
            }
        }
    };

    dfs(v, G){
        this.marked[v] = true;
        this.scc[v] = this.count;

        let adjacent = G.adjacent(v).bag;
        for(let i = 0; i < adjacent.length; i++){
            let w = adjacent[i];
            if(!this.marked[w]){
                this.dfs(w, G);
            };
        };
    };
}
