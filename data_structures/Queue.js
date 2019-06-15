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
            return pop;
        };
    };
};

module.exports = {
    QueueLinkedList,
};