class Node{
    constructor(key, value=null, next=null){
        this.key = key;
        this.value = value;
        this.next = next;
    };
};

class SeparateChainHT{
    constructor(M){
        this.M = M;
        this.st = Array(M).fill(null);
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
        let node = this.st[this.hash(key)];
        while(node != null){
            if(node.key == key){
                node.value = value;
                return;
            };
            node = node.next;
        };
        this.st[hash] = new Node(key, value, this.st[hash]);
    };

    find(key){
        let h = this.hashCode(key);
        let node = this.st[h];

        while(node != null){
            if(node.key == key){
                return node.value;
            };
            node = node.next;
        };
        return null;
    };
};