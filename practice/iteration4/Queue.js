
class ListQueue{
    constructor(){
        this.q = [];
    };

    enqueue(key){
        this.q.unshift(key);
    };

    dequeue(key){
        if(!this.isEmpty()){
            return this.q.pop()
        };
        return null;
    };

    isEmpty(){
        return this.q.length <= 0;
    };
};

module.exports = {
    ListQueue,
}