const {ListQueue} = require('./Queue');

class BFS{
    constructor(G, s=0){
        this.G = G;
        this.s = s;
        this.distTo = Array(G.V).fill(null);
        this.marked = Array(G.V).fill(false);
        this.edgeTo = Array(G.V).fill(null);
        this.q = new ListQueue();
        
        this.distTo[s] = 0;
        this.marked[s] = true;
        this.q.enqueue(s);

        while(!this.q.isEmpty()){
            this.bfs(G,this.q);
        }
    };

    bfs(G, q){
        let v = q.dequeue();
        let adjacent = G.adjacent(v).bag;
        
        for(let i = 0; i < adjacent.length; i++){
            let w = adjacent[i];
            if(!this.marked[w]){
                this.marked[w] = true;
                this.edgeTo[w] = v;
                this.q.enqueue(w);
                this.distTo[w] = this.distTo[v] + 1;
            };
        };
    };
};