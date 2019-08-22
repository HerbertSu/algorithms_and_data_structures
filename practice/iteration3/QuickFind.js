class QuickFind{
    constructor(N){
        this.uf = Array(N).fill(null);
        this.N = N;
        
        for(let i = 0; i < N; i++){
            this.uf[i] = i;
        };
    };

    union(p, q){
        for(let i = 0; i < this.N; i++){
            if(this.uf[i] == this.uf[p]){
                this.uf[i] = this.uf[q];
            };
        };
    };

    connected(p, q){
        return this.uf[p] == this.uf[q];
    };
};

module.exports = {
    QuickFind,
};