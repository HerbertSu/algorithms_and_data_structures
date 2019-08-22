class Node{
    constructor(key, value){
        this.key = key;
        this.value = value;
        this.next = null;
    };
};


class SeparateChainingHT{
    constructor(M){
        this.M = M;
        this.st = Array(M).fill(null);
    };

    hashCode(key){
        let keyArr = key.split("");
        let h = 31;
        keyArr.forEach((element, i) => {
            h = h + element.charCodeAt(0)*31**(keyArr.length - 1 - i);
        });
        return h;
    };

    hash(key){
        return this.hashCode(key)%this.M;
    };

    insert(key, value){
        let hash = this.hash(key);
        let node = this.st[hash];
        while(node != null){
            if(node.key == key){
                node.value = value;
                return;
            };
            node = node.next;
        };
        let newNode = new Node(key, value);
        newNode.next = this.st[hash];
        this.st[hash] = newNode;
    };

    get(key){
        let hash = this.hash(key);
        
        let node = this.st[hash];
        while(node != null){
            if(node.key == key){
                return node.value;
            };
            node = node.next;
        };
        return null;
    };
};

/**
 * Example
 */
// let spt = new SeparateChainingHT(31);
// spt.insert("z", 1);
// spt.insert("zd", 1);
// spt.insert("bbbbbb", 32);
// spt.insert("bbbabb", 33);
// spt.insert("bbbabb", 8008);
// console.log(spt.st)
// console.log(spt.get("bbbabb"))


class LinearProbingST{
    constructor(M){
        this.M = M;
        this.st = Array(M).fill(null);
        this.value = Array(M).fill(null);
    };

    hashCode(key){
        let keyArr = key.split("");
        let h = 31;
        keyArr.forEach((element, i) => {
            h = h + element.charCodeAt(0)*31**(keyArr.length - 1 - i);
        });
        return h;
    };

    hash(key){
        return this.hashCode(key)%this.M;
    };

    insert(key, value){
        let i = this.hash(key);
        
        while(this.st[i] != null){
            if(this.st[i] == key){
                this.value[i] = value;
                return;
            };
            i++;
            if(i >= this.M){
                i = 0;
            };
        };
        this.st[i] = key;
        this.value[i] = value;
    };

    get(key){
        let i = this.hash(key);
        while(this.st[i] != null){
            if(this.st[i] == key){
                break;
            };
            i++;
            if(i >= this.M){
                i = 0;
            };
        };
        return this.value[i];
    };

};


/**
 * Example
 */
// let lp = new LinearProbingST(11);
// lp.insert("a", 1);
// lp.insert("b", 2);
// lp.insert("bbbbb", 2);
// lp.insert("bbbbb", 3);
// lp.insert("bbabb", 4);
// lp.insert("bbbbc", 5);
// lp.insert("bbbbd", 800);
// lp.insert("bbbbe", 392);

// console.log(lp.get("bbbbf"))
// console.log(lp.st)
// console.log(lp.value);