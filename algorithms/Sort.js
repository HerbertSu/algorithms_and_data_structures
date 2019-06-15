class SelectionSort{
    constructor(array){
        this.array = array
    };

    swap(i, j){
        let iVal = this.array[i];
        this.array[i] = this.array[j];
        this.array[j] = iVal;
    };

    sort(){
        for(let i = 0; i < this.array.length; i++){
            let min = i;
            for(let j = i+1; j < this.array.length; j++){
                if(this.array[j] < this.array[min]){
                    min = j;
                };
            };
            
            this.swap(i, min);

        };
    };
};


class InsertionSort{
    constructor(array){
        this.array = array;
    };

    swap(i, j){
        let iVal = this.array[i];
        this.array[i] = this.array[j];
        this.array[j] = iVal;
    };

    sort(){
        for(let i = 0; i < this.array.length; i++){
            // let j = i;
            // while(this.array[j] < this.array[j-1] && j > 0){
            //     this.swap(j, j-1);
            //     j -= 1;
            // }
            let k = i;
            for(let j = i; j >= 0; j--){
                if(this.array[j] > this.array[k]){
                    this.swap(k, j);
                    k = j;
                };
            };
        };
    };
};

module.exports = {
    SelectionSort,
    InsertionSort,
}