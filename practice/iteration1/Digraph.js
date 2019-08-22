const {ListBag} = require('./Bag');
const {ListQueue} = require('./Queue');

class Digraph{
    constructor(V){
        this.V = V;
        this.adj = Array(V).fill(null);
        this.E = 0;

        for(let i = 0; i < V; i++){
            this.adj[i] = new ListBag();
        };
    };

    addEdge(v, w){
        this.adj[v].add(w);
        this.E++;
    };

    adjacent(v){
        return this.adj[v];
    };

    V(){
        return this.V;
    };

    reverseG(){
        let Gr = new Digraph(this.V);
        
        for(let i = 0; i < this.V; i++){
            this.adj[i].bag.forEach((to)=>{
                Gr.addEdge(to, i);
            });
        };
        return Gr;
    };
};

class BFSDigraph{
    constructor(G, s){
        this.marked = Array(G.V).fill(false);
        this.distTo = Array(G.V).fill(0);
        this.count = 0;
        this.edgeTo = Array(G.V).fill(null);
        this.q = new ListQueue();

        this.marked[s] = true;
        this.q.enqueue(s);
        this.BFS(G);
        
    };

    BFS(G){
        while(!this.q.isEmpty()){
            let v = this.q.dequeue();

            let adjacent = G.adjacent(v).bag;
            for(let i = 0; i < adjacent.length; i++){
                let w = adjacent[i];
                if(!this.marked[w]){
                    this.marked[w] = true;
                    this.q.enqueue(w);
                    this.edgeTo[w] = v;
                    this.distTo[w] = this.distTo[v] + 1;
                };
            };
        };   
    };
}

let G = new Digraph(6);
G.addEdge(0, 1);
G.addEdge(0, 5);
G.addEdge(5, 3);
G.addEdge(3, 2);
G.addEdge(2, 3);
G.addEdge(2, 0);
G.addEdge(5, 4);
G.addEdge(4, 3);
G.addEdge(4, 2);

let shortest = new BFSDigraph(G, 0)
// console.log(shortest.edgeTo)

module.exports = {
    Digraph,
};