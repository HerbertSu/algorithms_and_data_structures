const {ListStack} = require('./Stack');
class TopologicalSort{
    constructor(G){
        this.G = G;
        this.marked = Array(G.V).fill(false);
        this.reversePostOrder = new ListStack();

        for(let i = 0; i < G.V; i++){
            if(!this.marked[i]){
                this.dfs(i, G);
            };
        };
    };

    dfs(v, G){
        this.marked[v] = true;

        let adjacent = G.adjacent(v).bag;
        for(let i = 0; i < adjacent.length; i++){
            let w = adjacent[i];
            if(!this.marked[w]){
                this.dfs(w, G);
            };
        };
        this.reversePostOrder.add(v);        
    };

    returnPostOrder(){
        return this.reversePostOrder;
    };
};

module.exports = {
    TopologicalSort,
};