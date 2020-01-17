class ListStack{
    constructor(){
        this.stack = [];
    };

    insert(key){
        this.stack.push(key);
    };

    remove(key){
        if(!this.isEmpty()){
            return this.stack.pop();
        };
        return null;
    };

    isEmpty(){
        return this.stack.length <= 0;
    };
};

module.exports = {
    ListStack,
};