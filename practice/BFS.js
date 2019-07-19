const {Graph} = require('./Graph');
const {ListQueue} = require('./Queue');

class BFSGraph{
    constructor(G, s){

        this.marked = Array(G.V).fill(false);
        this.edgeTo = Array(G.V).fill(null);
        this.distTo = Array(G.V).fill(0);
        this.q = new ListQueue();

        this.q.enqueue(s);
        this.marked[s] = true;
        this.bfs(G);
        
    };

    bfs(G){
        while(!this.q.isEmpty()){
            let v = this.q.dequeue();
            for(let i = 0; i < G.adjacent(v).bag.length; i++){
                let w = G.adjacent(v).bag[i];
                if(!this.marked[w]){
                    this.q.enqueue(w);
                    this.marked[w] = true;
                    this.edgeTo[w] = v;
                    this.distTo[w] = this.distTo[v] + 1;
                };
            }
        }
    };
};

let g = new Graph(7);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(0, 6);
g.addEdge(0, 5);
g.addEdge(3, 4);
g.addEdge(5, 3);
g.addEdge(5, 4);
g.addEdge(4, 6);

let bfs = new BFSGraph(g, 0);

console.log(bfs.marked)