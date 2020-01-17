const {ListStack} = require('./Stack');

class TopologicalSort{
    constructor(G){
        this.G = G;
        this.marked = Array(G.V).fill(false);
        this.postOrder = new ListStack();

        for(let i = 0; i < this.G.V; i++){
            if(!this.marked[i]){
                this.dfs(G, i);
            };
        };
    };

    dfs(G, v){
        this.marked[v] = true;

        let adjacent = G.adjacent(v).bag;
        for(let i = 0; i < adjacent.length; i++){
            let w = adjacent[i];
            if(!this.marked[w]){
                this.dfs(G, w);
            };
        };
        this.postOrder.insert(v);
    };

    returnTopSort(){
        let topSort = [];
        while(!this.postOrder.isEmpty()){
            topSort.push(this.postOrder.remove());
        };
        return topSort;
    };
};

module.exports = {
    TopologicalSort,
};