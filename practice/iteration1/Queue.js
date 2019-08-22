class Node{
    constructor(key, value=null){
        this.key = key;
        this.value = value;
        this.next = null;
    };
};

class Queue{
    constructor(){
        this.first = null;
        this.mostRecent = null;
    };
    
    dequeue(){
        let oldest = this.first;
        this.first = this.first.next;
        if(this.first == null){
            this.mostRecent == null;
        };
        return oldest;
    };

    enqueue(key, value=null){
        let newNode = new Node(key, value);
        if(this.first == null){
            this.first = newNode;
            this.mostRecent = newNode;
        }else{
            let oldRecent = this.mostRecent;
            this.mostRecent = newNode;
            oldRecent.next = newNode;
        };
    };

    isEmpty(){
        return this.first == null;
    };

    iterate(){
        let items = [];
        while(!this.isEmpty()){
            items.push(this.dequeue())
        };
        return items;
    };
};

class ListQueue{
    constructor(){
        this.q = [];
    };

    enqueue(key){
        this.q.push(key);
    };

    dequeue(key){
        let first = this.q[0];
        this.q = this.q.slice(1, this.q.length);
        return first;
    };

    isEmpty(){
        return this.q.length < 1;
    };

    contains(v){
        for(let i = 0; i < this.q.length; i++){
            if(this.q[i] == v){
                return true;
            };
        };
        return false;
    };
};


module.exports = {
    Queue,
    ListQueue,
};

let q = new ListQueue();
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
q.enqueue(4)

