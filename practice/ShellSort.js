class ShellSort{
    less(v, w){
        if(v < w){
            return true;
        };
        return false;
    };

    swap(a, i, j){
        let old = a[i];
        a[i] = a[j];
        a[j] = old;
    };

    sort(a){
        let h = 0;
        while(3*h + 1 < a.length){
            h = 3*h + 1;
        };

        
        while(h >= 1){
            for(let i = h; i < a.length; i++){
                for(let j = i; this.less(a[j], a[j - 1]) && j >= h; j -= h){
                    this.swap(a, j, j - 1);
                };
            }
            h = (h - 1)/3;
        };
    };
};

let a = [4, 1, 60 , 3, 5, 13 , 431, 975, 953, 665, 31, 499 , 43, 7];
new ShellSort().sort(a);
console.log(a);