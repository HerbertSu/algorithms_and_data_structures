
class InsertionSort{
    constructor(arr=[4,3,1,5,6,44,32,0]){
        this.arr=arr;
    };

    less(i, j){
        if(this.arr[i] < this.arr[j]){
            return true;
        };
        return false;
    };

    swap(i, j){
        let oldi = this.arr[i];
        this.arr[i] = this.arr[j];
        this.arr[j] = oldi;
    };

    sort(){
        for(let i = 1; i < this.arr.length; i++){
            for(let j = i; j > 0 && this.less(j, j -1); j--){
                this.swap(j, j-1);
            };
        };
    };
};

module.exports = {
    InsertionSort,
};