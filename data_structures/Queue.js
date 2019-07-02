class Node{
    constructor(key, value){
        this.key = key;
        this.value = value;
        this.next = null;
    };
};

class QueueLinkedList{
    constructor(){
        this.earliestNode = null;
        this.mostRecentNode = null;
        this.count = 0;
    };

    isEmpty(){
        return this.mostRecentNode == null;
    };

    insert(key, value){
        let newNode = new Node(key, value);

        if(!this.isEmpty()){
            let oldNode = this.mostRecentNode
            this.mostRecentNode = newNode
            oldNode.next = newNode
        } else {
            this.earliestNode = newNode;
            this.mostRecentNode = newNode;
        };

        this.count++;
    };

    remove(){
        if(!this.isEmpty()){
            let pop = this.earliestNode;
            if(this.earliestNode.next != null){
                this.earliestNode = pop.next;
            }else{
                this.earliestNode = null;
                this.mostRecentNode = null;
            };
            this.count--;
            return pop;
        };
    };

    size(){
        return this.count;
    };

};

module.exports = {
    QueueLinkedList,
};