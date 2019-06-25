const {StackLinkedList} = require('../data_structures/Stack');

class DepthFirstSearch{
    constructor(G, key){
        this.G = G;
        this.key = key;
        this.marked = Array(G.getV()).fill(false);
        this.edgeTo = Array(G.getV()).fill(null);

        this.dfs(G, key);
    };

    dfs(G, key){
        this.marked[key] = true;

        for(let i = 0; i < G.adjacent(key).arr.length; i++){
            if(!this.marked[G.adjacent(key).arr[i]]){
                this.dfs(G, G.adjacent(key).arr[i]);
                this.edgeTo[G.adjacent(key).arr[i]] = key;
            };
        };
    };

    hasPathTo(key){
        return this.marked[key];
    };

    pathTo(key){
        if(this.hasPathTo(key)){
            let path = new StackLinkedList;
            while(key != this.key){
                path.insert(key, this.edgeTo[key]);
                key = this.edgeTo[key];
            };
            path.insert(key, key);
            return path;
        }else{
            return null;
        };
    };

};

module.exports = {
    DepthFirstSearch,
};