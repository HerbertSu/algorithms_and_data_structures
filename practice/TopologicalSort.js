const {Digraph} = require('./Digraph');
const {ListStack} = require('./Stack');

class TopologicalSort{
    constructor(G){
        this.marked = Array(G.V).fill(false);
        this.postOrder = new ListStack();

        for(let i = 0; i < G.V; i++){
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

    returnPostOrder(){
        return this.postOrder;
    };
};

let G = new Digraph(7);
G.addEdge(0, 1);
G.addEdge(0, 2);
G.addEdge(0, 5);
G.addEdge(1, 4);
G.addEdge(3, 2);
G.addEdge(3, 4);
G.addEdge(3, 5);
G.addEdge(3, 6);
G.addEdge(5, 2);
G.addEdge(6, 4);
G.addEdge(6, 0);

let tsort = new TopologicalSort(G);
// console.log(tsort.returnPostOrder())

module.exports = {
    TopologicalSort,
};