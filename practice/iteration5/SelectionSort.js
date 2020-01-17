
class SelectionSort{
    constructor(arr=[100,3,5,13,85,-5,0]){
        this.arr = arr;
        
        this.sort();
    };

    swap(i, j){
        let oldi = this.arr[i];
        this.arr[i] = this.arr[j];
        this.arr[j] = oldi;
    };

    less(i, j){
        return this.arr[i] < this.arr[j];
    };

    sort(){
        for(let i = 0; i < this.arr.length; i++){
            let min = i;
            for(let j = i + 1; j < this.arr.length; j++){
                if(this.less(j, min)){
                    min = j;
                };
            };
            this.swap(min, i);
        };
    };
};