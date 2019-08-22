class QuickFind{
    constructor(N){
        this.N = N;
        this.uf = Array(N).fill(null);

        for(let i = 0; i < N; i++){
            this.uf[i] = i;
        };
    };

    connected(p, q){
        return this.uf[p] == this.uf[q];
    };

    union(p, q){
        for(let i = 0; i < this.uf.length; i++){
            if(this.uf[i] == this.uf[p]){
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

    connected(p, q){
        return this.root(p) == this.root(q);
    };

    union(p, q){
        this.uf[this.root(p)] = this.root(q)
    };
};

/**
 * Example
 */
// let qu = new QuickUnion(10);
// console.log(qu.connected(1, 2));
// qu.union(1, 2);
// qu.union(1, 3);
// qu.union(5, 6);
// qu.union(5, 7);
// console.log(qu.connected(1, 7));
// qu.union(1, 7);
// console.log(qu.connected(1, 7));
// console.log(qu.uf)


