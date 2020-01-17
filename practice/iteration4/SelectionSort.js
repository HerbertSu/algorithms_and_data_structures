
class SelectionSort{
    constructor(arr=[3,2,1,4,6,8]){
        this.arr = arr;
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
        for(let i = 0; i < this.arr.length; i++){
            let min = i;
            for(let j = i + 1; j < this.arr.length; j++){
                if(this.less(j, min)){
                    min = j;
                };
            };
            this.swap(i, min);
        };
    };
};

module.exports = {
    SelectionSort,
};