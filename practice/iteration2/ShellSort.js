class ShellSort{
    constructor(arr){
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
        let h = 1;
        while(3*h + 1 <= this.arr.length){
            h = 3*h + 1
        };

        while(h >= 1){
            let i = h;

            for(let j = i; j < this.arr.length; j++){
                for(j; j - h >= 0 && this.less(j, j - h); j = j -h){
                    this.swap(j, j - h);
                };
            };
            h = (h - 1) / 3;
        };
    };
};

/**
 * Example
 */
// let shs = new ShellSort([94, 55, 5, 3, 1, -1, 0, 19, 200, 31, 38, 59, 199, 39])
// shs.sort();
// console.log(shs.arr)