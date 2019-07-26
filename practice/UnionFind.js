class QuickFind{
    constructor(N){
        this.uf = Array(N).fill(null);
        this.N = N;

        for(let i = 0; i < N; i++){
            this.uf[i] = i;
        };
    };

    connected(p, q){
        return this.uf[p] == this.uf[q];
    };

    union(p, q){
        let p_val = this.uf[p];
        for(let i = 0; i < this.N; i++){
            if(this.uf[i] == p_val){
                this.uf[i] = this.uf[q];
            };
        };
    };
};

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
        this.uf[this.root(p)] = this.root(q);
    };

    connected(p, q){
        return this.root(p) == this.root(q);
    }
}

// let uf = new QuickFind(5);
let uf = new QuickUnion(5);
uf.union(1, 4);
uf.union(0, 3);
// console.log(uf.uf)
uf.union(1, 3);
// console.log(uf.uf)
// console.log(uf.connected(2, 3))

module.exports = {
    QuickUnion,
};