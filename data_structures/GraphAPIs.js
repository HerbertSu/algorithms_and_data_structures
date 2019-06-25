class ComponentConnectivity{
    constructor(G){
        this.G = G;
        this.marked = Array(G.getV()).fill(false);
        this.id = Array(G.getV()).fill(null);
        this.count = 0;
        
        for(let v = 0; v < this.G.getV(); v++){
            if(!this.marked[v]){
                this.dfs(G, v);
                this.count++;
            };
        };
    };

    connected(v, w){
        return this.id[v] == this.id[w];
    };

    componentId(v){
        return this.id[v];
    };

    componentCount(){
        return this.count;
    };

    dfs(G, key){
        this.marked[key] = true;
        this.id[key] = this.count;

        for(let i = 0; i < G.adjacent(key).arr.length; i++){
            if(!this.marked[G.adjacent(key).arr[i]]){
                this.dfs(G, G.adjacent(key).arr[i]);
            };
        };
    };
};

module.exports = {
    ComponentConnectivity,
};