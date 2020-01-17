

class BFS{
    constructor(G, s){
        this.G = G;
        this.s = s;
        this.marked = Array(G.V).fill(false);
        this.q = new Queue();
        
        this.q.enqueue(s);
        this.marked[s] = true;
        
        while(!this.q.isEmpty()){
            let v = this.q.dequeue();
            
        }
    };

    visit(G, v){
        this.marked[v] = true;
        let adjacent = G.adjacent(v).bag;
        for(let i = 0; i < adjacent.length; i++){
            let w = adjacent[i];
            if(!this.marked[w]){
                this.q.enqueue(w);
            };
        };
    }
}

const {ListQueue} = require('./Queue');
class BFS{
    constructor(G){
        this.G = G;
        this.q = new ListQueue();
        this.marked = Array(G.V).fill(false);
        this.distTo = Array(G.V).fill(null);
        this.edgeTo = Array(G.V).fill(null);

        let s = 0;
        this.distTo[s] = 0;
        this.q.enqueue(s);

        this.bfs(G);
    };

    bfs = (G) => {
        while(!this.q.isEmpty()){
            let v = this.q.dequeue();
            this.marked[v] = true;

            let adjacent = G.adjacent(v).bag;
            for(let i = 0; i < adjacent.length; i++){
                let w = adjacent[i];
                if(!this.marked[w]){
                    this.q.enqueue(w);
                    this.edgeTo[w] = v;
                    this.distTo[w] = this.distTo[v] + 1;
                };
            };
        };
    };
};