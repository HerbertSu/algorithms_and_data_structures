class ListQueue{
    constructor(){
        this.q = [];
    };

    enqueue(key){
        this.q.push(key);
    };

    isEmpty(){
        return this.q.length <= 0;
    };

    dequeue(){
        if(!this.isEmpty()){
            return this.q.shift();
        };
        return null;
    };
};

module.exports = {
    ListQueue,
};