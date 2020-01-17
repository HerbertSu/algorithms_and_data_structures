const {TopologicalSort} = require('./TopologicalSort');
const {Digraph} = require('./Digraph');

class KosarajuShairSCC{
    constructor(G){
        this.G = G;
        this.scc = Array(G.V).fill(0);
        this.marked = Array(G.V).fill(false);
        this.count = 0;

        let Gr = G.reverse();
        let reversePost = new TopologicalSort(Gr).postOrder;
        while(!reversePost.isEmpty()){
            let v = reversePost.pop();

            if(!this.marked[v]){
                this.dfs(G, v);
                this.count++;
            };
        }
    };

    dfs(G,v){
        this.marked[v] = true;
        this.scc[v] = this.count;

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
G.addEdge(0, 2);
G.addEdge(2, 0);
G.addEdge(2, 3);
G.addEdge(3, 5);
G.addEdge(3, 2);
G.addEdge(4, 3);
G.addEdge(4, 2);
G.addEdge(5, 4);


let Gr = G.reverse();

let scc = new KosarajuShairSCC(G);
