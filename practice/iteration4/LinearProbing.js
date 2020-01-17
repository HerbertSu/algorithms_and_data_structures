class LinearProbeHashingTable{
    constructor(M){
        this.M = M;
        this.keys = Array(M).fill(null);
        this.vals = Array(M).fill(null);
    };

    hashCode(key){
        let hash = 17;
        let chars = key.split("");
        chars.forEach((char, i) => {
            hash = hash + char.charCodeAt(0)*31**(chars.length - i);
        });
        return hash;
    };

    hash(key){
        return this.hashCode(key)%this.M;
    };

    insert(key, val){
        let h = this.hash(key);
        while(this.keys[h] != null){
            if(this.keys[h] == key){
                this.vals[h] = val;
                return;
            };
            h++;
            if(h == this.M){
                h = 0;
            };
        };
        this.keys[h] = key;
        this.vals[h] = val;
    };

    find(key){
        let h = this.hash(key);
        while(this.keys[h] != null){
            if(this.keys[h] == key){
                return this.vals[h];
            };
            h++;
            if(h >= this.M){
                h = 0;
            };
        };
        return null;
    };
};