const {ListQueue} = require('./Queue');

class BFS{
    constructor(s, G){
        this.G = G;
        this.s = s;
        this.marked = Array(G.V).fill(false);
        this.distTo = Array(G.V).fill(0);
        this.edgeTo = Array(G.V).fill(null);
        this.q = new ListQueue();

        this.q.enqueue(s);
        this.marked[s] = true;

        this.bfs(G);
    }

    bfs(G){
        while(!this.q.isEmpty()){
            let v = this.q.dequeue();

            let adjacentList = G.adjacent(v).bag;
            for(let i = 0; i < adjacentList.length; i++){
                let w = adjacentList[i];
                if(!this.marked[w]){
                    this.q.enqueue(w);
                    this.marked[w] = true;
                    this.distTo[w] = this.distTo[v] + 1;
                    this.edgeTo[w] = v;
                };
            };
        };
    };

    pathTo(v){

    }
}