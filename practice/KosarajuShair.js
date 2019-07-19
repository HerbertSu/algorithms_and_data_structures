const {TopologicalSort} = require('./TopologicalSort');
const {Digraph} = require('./Digraph');

class KosarajuShairDigraph{
    constructor(G){
        this.marked = Array(G.V).fill(false);
        this.scc = Array(G.V).fill(null);
        this.id = 0;

        let topSort = new TopologicalSort(G.reverseG());
        let reversePost = topSort.returnPostOrder();
        while(!reversePost.isEmpty()){
            let v = reversePost.remove();
            if(!this.marked[v]){
                this.dfs(G, v);
                this.id++;
            };
        };

    };

    dfs(G, v){
        this.marked[v] = true;
        this.scc[v] = this.id;

        let adjacent = G.adjacent(v).bag;
        for(let i = 0; i < adjacent.length; i++){
            let w = adjacent[i];

            if(!this.marked[w]){
                this.dfs(G, w);
            };
        };
    };
};

let G = new Digraph(6);
G.addEdge(0, 1);
G.addEdge(0, 5);
G.addEdge(2, 0);
G.addEdge(2, 3);
G.addEdge(3, 2);
G.addEdge(3, 5);
G.addEdge(4, 3);
G.addEdge(4, 2);
G.addEdge(5, 4);

let ks = new KosarajuShairDigraph(G);
console.log(ks.scc)
