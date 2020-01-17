const {Edge, DigraphEdgeWeighted} = require('./DigraphEdgeWeighted');

class DigraphSingleSourceShortestPath{
    constructor(G, s){
        this.G = G;
        this.s = s;
        this.distTo = Array(G.V).fill(Infinity);
        this.edgeTo = Array(G.V).fill(null);
    };

    distanceTo(v){
        return this.distTo[v];
    };

    pathTo(w){
        let e = this.edgeTo[w];
        let v = e.from();
        let path = [];

        while(v != this.s){
            path.push(e);
            e = this.edgeTo[v];
            v = e.from();
        };
        path.push(e);
        return path;
    };

    relax(e){
        let v = e.from();
        let w = e.to();

        if(this.distTo[w] > this.distTo[v] + e.weight){
            this.distTo[w] = this.distTo[v] + e.weight;
            this.edgeTo[w] = e;
        };
    };
};