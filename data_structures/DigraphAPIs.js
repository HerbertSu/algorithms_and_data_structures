const {StackLinkedList} = require('./Stack');

class TopologicalSort{
    constructor(G){
        this.G = G;
        this.marked = Array(G.getV()).fill(false);
        this.reversePost = new StackLinkedList;

        for(let i = 0; i < this.G.getV(); i++){
            if(!this.marked[i]){
                this.dfs(this.G, i);
            };
        }; 
        
    };

    dfs(G, key){
        this.marked[key] = true;

        for(let i = 0; i < G.adjacent(key).arr.length; i++){
            if(!this.marked[G.adjacent(key).arr[i]]){
                this.dfs(G, G.adjacent(key).arr[i]);
            };
        };
        this.reversePost.insert(key);
    };
};

class KosarajuShairSCC{
    constructor(G){
        this.G = G;
        this.marked = Array(G.getV()).fill(false);
        this.scc = Array(G.getV()).fill(null);
        this.count = 0;

        let dfo = new TopologicalSort(this.G.reverse());

        while(dfo.reversePost.mostRecentNode != null){
            let v = dfo.reversePost.remove().key;
            if(!this.marked[v]){
                this.dfs(this.G, v);
                this.count++;
            };
        };
    };

    dfs(G, key){
        this.marked[key] = true;
        this.scc[key] = this.count;

        for(let i = 0; i < G.adjacent(key).arr.length; i++){
            if(!this.marked[G.adjacent(key).arr[i]]){
                this.dfs(G, G.adjacent(key).arr[i]);
            };
        };
    };

    stronglyConnected(v, w){
        return this.scc[v] == this.scc[w];
    };
};



module.exports = {
    TopologicalSort,
    KosarajuShairSCC,
};