class ListBag{
    constructor(){
        this.bag = [];
        this.size = 0;
    };

    add(key){
        this.bag.push(key);
        this.size++;
    };

    size(){
        return this.size;
    };
};

module.exports = {
    ListBag,
};
