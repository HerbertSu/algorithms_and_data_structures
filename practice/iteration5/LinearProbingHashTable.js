
class LinearProbingHashTable{
    constructor(M){
        this.M = M;
        this.st = Array(M).fill(null);
        this.values = Array(M).fill(null);
    };

    hashCode(key){
        let hash = 17;
        let chars = key.split("");
        chars.forEach((c, i) => {
            hash = hash + c.charCodeAt(0)*31**(chars.length - i);
        });
        return hash;
    };

    hash(key){
        return this.hashCode(key)%this.M;
    };

    insert(key, value){
        let hash = this.hash(key);

        while(true){
            if(this.st[hash] != null){
                hash++;
                if(hash == this.M){
                    hash = 0;
                };
            }else{
                this.st[hash] = key;
                this.values[hash] = value;
                break;
            };
        };
    };
    
    find(key){
        let hash = this.hash(key);

        while(true){
            if(this.st[hash] != null){
                if(this.st[hash] == key){
                    return this.values[hash];
                };
                hash++;
                if(hash == this.M){
                    hash = 0;
                };
            }else{
                return null;
            };
        };
    };
};