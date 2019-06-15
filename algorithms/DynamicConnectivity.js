class QuickFind {
    constructor(N){
        this.N = N;
        this.id = new Array(N).fill(null);

        this.id = this.id.map((entry, i) => {
            return i;
        });
    };

    union(p, q){
        const pID = this.id[p];
        const qID = this.id[q];
        this.id = this.id.map((entry) => {
            if(entry == pID){
                return qID;
            };
            return entry;
        });
    };

    find(p, q){
        return this.id[p] == this.id[q];
    };

    returnID(){
        return this.id;
    };
};


class QuickUnion {
    constructor(N){
        this.N = N;
        this.id = new Array(N).fill(null);

        this.id = this.id.map((entry, i) => {
            return i;
        });
    };

    root(i){
        while(this.id[i] != this.id[this.id[i]]){
            i = this.id[i]
        };
        return this.id[i];
    };

    union(p, q){
        if(!this.find(p,q)){
            this.id[this.root(p)] = this.id[this.root(q)];
        };
    };

    find(p, q){
        return this.root(p) == this.root(q);
    };

    returnID(){
        return this.id;
    };
};






module.exports = {
    QuickFind,
    QuickUnion,
};

