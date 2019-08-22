class ListBag{
    constructor(){
        this.bag = [];
    };

    add(key){
        this.bag.push(key);
    };

    isEmpty(){
        return this.bag.length <= 0;
    };

    remove(){
        if(!this.isEmpty()){
            return this.bag.pop();
        };
        return null;
    };
};

module.exports = {
    ListBag,
};