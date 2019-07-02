class IndexMinPQ{
    constructor(N){
        this.N = N;
        this.keys = Array(N).fill(null);
        this.pm = Array(N).fill(-1); //qp
        this.im = Array(N).fill(0); //pq

        this.index = 0;
    };

    greater(i, j){
        if(this.keys[this.im[i]] != null && this.keys[this.im[j]] != null){
            if(this.keys[this.im[i]] > this.keys[this.im[j]]){
                return true;
            }else{
                return false;
            };
        };
        return false;
    };

    swap(i, j){
        let old = this.im[i];
        this.im[i] = this.im[j];
        this.im[j] = old;
        
        this.pm[this.im[i]] = i;
        this.pm[this.im[j]] = j;
    };

    swim(i){
        while( this.greater(Math.floor(i/2), i) && i > 1 ){
            this.swap(i, Math.floor(i/2));
            i = Math.floor(i/2);
        };
    };

    sink(i){
        while(2*i <= this.index){
            let j = 2*i;
            if(j + 1 < this.index){
                if(this.greater(j, j+1)){
                    j++;
                };
            };
            if(this.greater(i, j)){
                this.swap(i, j);
                i = j;
            }else{
                break;
            };
        };
    };

    insert(i, value){
        if(this.contains(i)){
            console.log("Priority queue already contains this key ", i);
            return;
        };

        this.pm[i] = this.index;
        this.im[this.index] = i;
        this.keys[i] = value;
        
        this.swim(this.index);
        this.index++;
    };

    delMin(){
        if(this.index >= 0){
            let min = this.im[1];
            this.swap(1, this.index);
            this.im.pop();
            this.sink(1);
            this.N = this.im.length - 1;
            this.index--;
            this.pm[min] = -1;
            this.keys[min] = null;

            return min;
        };
        return null;        
    };


    isEmpty(){
        return this.index == 0;
    };

    decreaseKey(i, key){
        this.keys[i] = key;
        this.swim(this.pm[i]);
    };

    size(){
        return this.index;
    };

    contains(i){
        return this.pm[i] != -1;
    };

};

module.exports = {
    IndexMinPQ,
};