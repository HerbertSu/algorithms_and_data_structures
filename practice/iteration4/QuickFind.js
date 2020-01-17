class QuickFind{
    constructor(N){
        this.N = N;
        this.uf = Array(N).fill(null);
        
        for(let i = 0; i < N; i++){
            this.uf[i] = i;
        };
    };

    find(p, q){
        return this.uf[p] == this.uf[q];
    };

    union(p, q){
        for(let i = 0; i < this.N; i++){
            if(this.uf[i] == this.uf[p]){
                this.uf[i] == this.uf[q];
            };
        };
    };
};

module.exports = {
    QuickFind,
};