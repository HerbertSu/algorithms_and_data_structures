class QuickUnion{
    constructor(N){
        this.N = N;
        this.uf = Array(N).fill(null);

        for(let i = 0; i < N; i++){
            this.uf[i] = i;
        };
    };

    root(p){
        while(this.uf[p] != p){
            p = this.uf[p];
        };
        return p;
    };

    union(p, q){
        if(this.root(p) == this.root(q)){
            return;
        };

        this.uf[this.root(p)] = this.root(q);
    };

    find(p, q){
        return this.root(p) == this.root(q);
    };
};

module.exports = {
    QuickUnion,
};