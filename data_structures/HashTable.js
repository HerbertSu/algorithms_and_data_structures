class Node{
    constructor(key, value, next = null){
        this.key = key;
        this.value = value;
        this.next = next;
    };
};

class SeparateChainingHashTable{
    constructor(M, keys=[]){
        this.M = M;
        this.N = null;
        this.st = Array(M).fill(null);
        this.keys = keys;
    };

    hashString(str){
        let hash = 17;
        let charArray = null;
        if(str.length > 1){            
            charArray = str.split("");
        }else{
            charArray = [str];
        };

        for(let i = 0; i < charArray.length; i++){
            hash = hash + String(charArray[i]).charCodeAt(0)*Math.pow(31, charArray.length - 1 - i);
        };
        
        return hash;
    };

    hash(key){
        return Math.abs(
            Math.floor(this.hashString(key)%this.M)
        );
    };

    get(key){
        let i = this.hash(key);

        let node = this.st[i];
        
        while(node != null){
            if(node.key == key){
                return node.value;
            }
            node = node.next;
        };
        return null;
    };

    put(key, value){
        let i = this.hash(key);
        let node = this.st[i];

        while(node != null){
            if(node.key == key){
                node.value = value;
                return;
            };
            node = node.next;
        };

        this.st[i] = new Node(key, value, this.st[i]);
    };
};


class LinearProbingHashTable{
    constructor(M){
        this.M = M;
        this.st = Array(M).fill(null);
    };

    hashString(str){
        let hash = 17;
        let charArray = null;
        if(str.length > 1){            
            charArray = str.split("");
        }else{
            charArray = [str];
        };

        for(let i = 0; i < charArray.length; i++){
            hash = hash + String(charArray[i]).charCodeAt(0)*Math.pow(31, charArray.length - 1 - i);
        };
        
        return hash;
    };

    hash(key){
        return Math.abs(
            Math.floor(this.hashString(key)%this.M)
        );
    };

    get(key){
        let i = this.hash(key);
        while(this.st[i] != null){
            if(this.st[i].key == key){
                return this.st[i].value;
            };
            if(i == this.st.length - 1){
                i = 0;
            }else{
                i++;
            }
        };
        return null;
    };

    put(key, value){
        let i = this.hash(key);

        while(this.st[i] != null){
            if(this.st[i].key == key){
                this.st[i].value = value;
                return;
            };
            if(i == this.st.length - 1){
                i = 0;
            }else{
                i++;
            };
        };

        this.st[i] = new Node(key, value);
        return;
    };
};


module.exports = {
    SeparateChainingHashTable,
    LinearProbingHashTable,
};