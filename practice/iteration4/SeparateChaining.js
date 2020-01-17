
class Node{
    constructor(key, val, next=null){
        this.key = key;
        this.val = val;
        this.next = next;
    };
};

class SeparateChainingHashTable{
    constructor(M){
        this.M = M;
        this.st = Array(M).fill(null);
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
        let node = this.st[h];
        while(node != null){
            if(node.key == key){
                node.val = val;
                return;
            };
            node = node.next;
        };
        this.st[h] = new Node(key, val, this.st[h]);
    };

    find(key){
        let h = this.hash(key);
        let node = this.st[h];
        while(node != null){
            if(node.key == key){
                return node.val;
            };
            node = node.next;
        };
        return null;
    };
};