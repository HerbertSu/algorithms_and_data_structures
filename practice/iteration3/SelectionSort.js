class SelectionSort{
    constructor(arr=[4,1,3,59,0,8,-1]){
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
            for(let j = i; j < this.arr.length; j++){
                if(this.less(j, min)){
                    min = j;
                };
            };
            this.swap(min, i);
        };
    };
};

// let ss = new SelectionSort();
// ss.sort();
// console.log(ss.arr);

module.exports = {
    SelectionSort,
};