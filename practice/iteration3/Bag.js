class ListBag{
    constructor(){
        this.bag = [];
    };
    
    insert(key){
        this.bag.push(key);
    };

    remove(){
        if(!this.isEmpty()){
            return this.bag.pop();
        };
        return null;
    };

    isEmpty(){
        return this.bag.length <= 0;
    };
};

module.exports = {
    ListBag,
};