class QuickUnion{
    constructor(N){
        this.uf = Array(N).fill(null);
        this.N = N;

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
        this.uf[this.root(p)] = this.root(q);
    };

    connected(p, q){
        return this.root(p) == this.root(q);
    };
};