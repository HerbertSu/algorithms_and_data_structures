class ListStack{
    constructor(){
        this.stack = [];
    };

    insert(v){
        this.stack.push(v);
    };

    remove(){
        if(!this.isEmpty()){
            return this.stack.pop();
        };
        return null;
    };

    isEmpty(){
        return this.stack.length < 1;
    };
};

module.exports = {
    ListStack
};