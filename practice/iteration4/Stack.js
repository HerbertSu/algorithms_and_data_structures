class ListStack{
    constructor(){
        this.stack = [];
    };

    push(v){
        this.stack.push(v);
    };

    pop(){
        if(this.stack.length > 0){
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