class KnuthShuffle{
    constructor(arr){
        this.arr=arr;

        this.shuffle();
    };

    swap(i, j){
        let oldi = this.arr[i];
        this.arr[i] = this.arr[j];
        this.arr[j] = oldi;
    };

    shuffle(){
        for(let i = 1; i < this.arr.length; i++){
            let r = Math.floor(Math.random()*i);
            this.swap(i, r);
        };
    };
};

// let ks = new KnuthShuffle([0,1,2,3,4,5,6,7,8,9]);
// console.log(ks.arr);

module.exports = {
    KnuthShuffle,
};