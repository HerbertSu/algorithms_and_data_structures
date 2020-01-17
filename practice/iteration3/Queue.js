class ListQueue{
    constructor(){
        this.q = [];
    };

    enqueue(key){
        this.q.push(key);
    };

    dequeue(){
        if(!this.isEmpty()){
            return this.q.shift();
        };
        return null;
    };

    isEmpty(){
        return this.q.length <= 0;
    };
};

module.exports = {
    ListQueue,
};