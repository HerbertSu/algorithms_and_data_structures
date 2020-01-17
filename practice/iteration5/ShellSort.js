
class ShellSort{
    constructor(arr=[0, 100, 40, -10, 3, 5, 1, 4, 2, 44, 56, 9]){
        this.arr = arr;
        this.N = arr.length;
        
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
        let h = 0;
        while(3*h + 1 <= this.N){
            h = 3*h + 1;
        };

        while(h > 0){

            for(let i = h; i < this.N; i++){
                for(let j = i; j - h >= 0 && this.less(j, j - h); j = j - h){
                    this.swap(j, j-h);
                };
            };

            h = (h - 1)/3;
        };
    }
};

let ss = new ShellSort();
console.log(ss.arr)