const {QueueLinkedList} = require('../data_structures/Queue');

class BreadthFirstSearch{
    constructor(G, source){
        this.G = G;
        this.source = source;
        this.marked = Array(G.getV()).fill(false);
        this.edgeTo = Array(G.getV()).fill(null);
        // this.distTo = Array(G.getV()).fill(0);
        
        this.bfs(this.G, this.source)
    };

    bfs(G, source){
        let q = new QueueLinkedList;
        q.insert(source);
        this.marked[source] = true;
        
        
        while(!q.isEmpty()){
            let v = q.remove();
            let adj = G.adjacent(v.key).arr;
            for(let i = 0; i < adj.length; i++){
                if(!this.marked[adj[i]]){
                    q.insert(adj[i]);
                    this.marked[adj[i]] = true;
                    this.edgeTo[adj[i]] = v.key;
                };
            };
        };

        // for(let j = 0; j < G.getV(); j++){
        //     let k = j;
        //     while(k != source){
        //         if(k == null){
        //             break;
        //         };
        //         this.distTo[j]++;
        //         k = this.edgeTo[k];
        //     };
        // };

    };
};

module.exports = {
    BreadthFirstSearch,
};