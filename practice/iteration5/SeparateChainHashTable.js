class Node{
    constructor(key, value, next=null){
        this.key = key;
        this.value = value;
        this.next = next;
    };
};

class SeparateChainHashTable{
    constructor(M){
        this.M = M;
        this.st = Array(M).fill(null);
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

        let node = this.st[hash];
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
}