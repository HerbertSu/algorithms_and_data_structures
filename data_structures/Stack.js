class Node{
    constructor(key, value){
        this.key = key;
        this.value = value;
        this.next = null;
    };
};

class StackLinkedList{
    
    constructor(){
        this.earliestNode = null;
        this.mostRecentNode = null;
    };

    isEmpty(){
        if(this.earliestNode == null || this.mostRecentNode == null){
            return true;
        };
        return false;
    };

    insert(key, value){
        let newNode = new Node(key, value);

        if(!this.isEmpty()){
            let oldNode = this.mostRecentNode;
            this.mostRecentNode = newNode;
            this.mostRecentNode.next = oldNode;
        }else{
            this.earliestNode = newNode;
            this.mostRecentNode = newNode;
        };
    };

    remove(){
        if(!this.isEmpty()){
            let pop = this.mostRecentNode;
            if(this.mostRecentNode.next != null){                
                this.mostRecentNode = this.mostRecentNode.next;
            }else{
                this.mostRecentNode = null;
                this.earliestNode = null;                
            };
            return pop;
        };
    };
};

module.exports = {
    StackLinkedList,
};