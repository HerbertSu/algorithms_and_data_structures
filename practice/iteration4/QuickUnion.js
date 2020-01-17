class QuickUnion{
    constructor(N){
        this.N = N;
        this.uf = Array(N).fill(null);

        for(let i = 0; i < N; i++){
            this.uf[i] = i;
        };
    };

    root(p){
        while(p != this.uf[p]){
            p = this.uf[p];
        };
        return p;
    };

    find(p, q){
        return this.root(p) == this.root(q);
    };

    union(p, q){
        if(!this.find(p, q)){
            this.uf[this.root(p)] = this.root(q);
        };
    };
};

module.exports = {
    QuickUnion,
};