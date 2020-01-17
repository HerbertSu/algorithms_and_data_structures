
class LinearProbeHT{
    constructor(M){
        this.M = M;
        this.st = Array(M).fill(null);
        this.value = Array(M).fill(null);
    };

    hashCode(string){
        let char = string.split("");
        let h = 17;
        char.forEach((c,i) => {
            h = h + c.charCodeAt(0)*31**(char.length - i);
        });
        return h;
    };

    hash(string){
        return this.hashCode(string)%this.M;
    };

    insert(key, value){
        let h = this.hash(key);
        while(this.st[h] != null){
            if(this.st[h] == key){
                this.value[h] = value;
                return;
            };
            h++;
            if(h >= this.M){
                h = 0;
            };
        };
        this.st[h] = key;
        this.value[h] = value;
    };

    get(key){
        let h = this.hash(key);
        while(this.st[h] != null){
            if(this.st[h] == key){
                return this.value[h];
            };
            h++;
            if(h >= this.M){
                h = 0;
            };
        };
        return null;
    };
};