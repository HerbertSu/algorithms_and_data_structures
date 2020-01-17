
class ShellSort{
    constructor(arr=[19,8,7,44,6,5,0,4,3]){
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
        let h = 1;
        while(3*h + 1 < this.arr.length){
            h = 3*h + 1;
        };

        while(h > 0){
            for(let i = h; i < this.arr.length; i++){
                for(let j = i; j - h >= 0 && this.less(j, j - h); j -= h){
                    this.swap(j, j-h);
                };
            };
            h = (h - 1)/3;
        };
    };




    ssort(){
        let h = 1;
        while(3*h + 1 < this.arr.length){
            h = 3*h + 1;
        };

        while(h > 0){
            for(let i = h; i < this.arr.length; i++){
                for(let j = i; j - h >= 0 && this.less(j, j-h); j-=h){
                    this.swap(j, j-h);
                };
            };
            h = (h-1)/3;
        };
    };
};

// let shs = new ShellSort();
// shs.sort();
// console.log(shs.arr)

module.exports = {
    ShellSort,
};