class Node{
    constructor(key, value){
        this.key = key;
        this.value = value;
        this.next = null;
    };
};

class Iterator{
    constructor(){
        this.current = null;
    };

    hasNext(){
        return this.current.next != null;
    };

    listIterate(first){
        this.current = first;
        let bagContents = [];
        while(this.hasNext()){
            let oldCurrent = this.current;
            this.current = this.current.next;
            bagContents.push(oldCurrent.value);
        };
        return bagContents;
    }
}

class Bag{
    constructor(){
        this.firstNode = null;
        this.size = 0;
    };

    add(key, value=null){
        let oldNode = this.firstNode;
        this.firstNode = new Node(key, value);
        this.firstNode.next = oldNode;
        this.size++;
    };

    isEmpty(){
        return this.firstNode == null;
    };

    size(){
        return this.size;
    };

    iterate(){
        if(!this.isEmpty()){
            let iterateMe = new Iterator;
            let contents = iterateMe.listIterate(this.firstNode);
            return contents;
        };
    };

};

class ListBag{
    constructor(){
        this.arr = [];
        this.size = 0;
    };

    add(key){
        this.arr.push(key);
        this.size++;
    };

    size(){
        return this.size;
    };
};
module.exports = {
    Bag,
    ListBag,
};