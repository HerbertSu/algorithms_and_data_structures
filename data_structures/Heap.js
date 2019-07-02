class MaxHeap{
    constructor(a){
        this.a = a;
        this.N = this.a.length - 1;
    };
    
    less(i, j){
        if(this.a[i] < this.a[j]){
            return true;
        }else{
            return false;
        };
    };

    swap(i, j){
        let old = this.a[j];
        this.a[j] = this.a[i];
        this.a[i] = old;
    };

    swim(i){
        while( this.less(Math.floor(i/2), i) && i > 1 ){
            this.swap(i, Math.floor(i/2));
            i = Math.floor(i/2);
            
        };
    };

    sink(i){
        while(2*i <= this.N){
            let j = 2*i;
            if(j + 1 < this.N){
                if(this.less(j, j+1)){
                    j++;
                };
            };
            if(this.less(i, j)){
                this.swap(i, j);
                i = j;
            }else{
                break;
            };
        };
    };

    insert(key){
        this.a.push(key);
        this.N = this.a.length - 1;
        this.swim(this.N);
    };

    delMax(){
        let max = this.a[1];
        this.swap(1, this.N);
        this.a.pop();
        this.sink(1);
        this.N = this.a.length - 1;
        return max;
    };

    heapOrder(){
        let k = Math.floor(this.N/2);
        while(k > 0){
            this.sink(k);
            k--;
        };
    };

    sort(){
        this.heapOrder();
        while(this.N > 1){
            this.swap(1, this.N);
            this.N--;
            this.sink(1);
        };
    };
};


class MinHeap{
    constructor(a){
        this.a = a;
        this.N = this.a.length - 1;
    };
    
    greater(i, j){
        if(this.a[i] > this.a[j]){
            return true;
        }else{
            return false;
        };
    };

    less(i, j){
        if(this.a[i] < this.a[j]){
            return true;
        }else{
            return false;
        };
    };
    swap(i, j){
        let old = this.a[j];
        this.a[j] = this.a[i];
        this.a[i] = old;
    };

    swim(i){
        while( this.greater(Math.floor(i/2), i) && i > 1 ){
            this.swap(i, Math.floor(i/2));
            i = Math.floor(i/2);
            
        };
    };

    sink(i){
        while(2*i <= this.N){
            let j = 2*i;
            if(j + 1 < this.N){
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

    insert(key){
        this.a.push(key);
        this.N = this.a.length - 1;
        this.swim(this.N);
    };

    delMin(){
        let min = this.a[1];
        this.swap(1, this.N);
        this.a.pop();
        this.sink(1);
        this.N = this.a.length - 1;
        return min;
    };

    heapOrder(){
        let k = Math.floor(this.N/2);
        while(k > 0){
            this.sink(k);
            k--;
        };
    };

    sort(){
        this.heapOrder();
        while(this.N > 1){
            this.swap(1, this.N);
            this.N--;
            this.sink(1);
        };
    };
};

class MinHeapMST{
    constructor(a){
        this.a = a;
        this.N = this.a.length - 1;
    };
    
    greater(i, j){
        if(this.a[i] != null && this.a[j] != null){
            if(this.a[i].weight > this.a[j].weight){
                return true;
            }else{
                return false;
            };
        };
        return false;
    };

    swap(i, j){
        let old = this.a[j];
        this.a[j] = this.a[i];
        this.a[i] = old;
    };

    swim(i){
        while( this.greater(Math.floor(i/2), i) && i > 1 ){
            this.swap(i, Math.floor(i/2));
            i = Math.floor(i/2);
        };
    };

    sink(i){
        while(2*i <= this.N){
            let j = 2*i;
            if(j + 1 < this.N){
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

    insert(node){
        this.a.push(node);
        this.N = this.a.length - 1;
        this.swim(this.N);
    };

    delMin(){
        if(this.N > 1){
            let min = this.a[1];
            this.swap(1, this.N);
            this.a.pop();
            this.sink(1);
            this.N = this.a.length - 1;
            return min;
        };
        return null;        
    };

    heapOrder(){
        let k = Math.floor(this.N/2);
        while(k > 0){
            this.sink(k);
            k--;
        };
    };

    isEmpty(){
        return this.N <= 1;
    };

    sort(){
        this.heapOrder();
        while(this.N > 1){
            this.swap(1, this.N);
            this.N--;
            this.sink(1);
        };
    };
};


module.exports = {
    MaxHeap,
    MinHeap,
    MinHeapMST,
};