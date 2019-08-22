class ListStack{
    constructor(){
        this.stack = [];
    };

    add(key){
        this.stack.push(key);
    };

    isEmpty(){
        return this.stack.length <= 0;
    };

    remove(){
        if(!this.isEmpty()){
            return this.stack.pop();
        };
        return null;
    };
};

module.exports = {
    ListStack,
};