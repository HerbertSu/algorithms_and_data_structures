class IndexedMinPQEdgeGraph{
    constructor(){
        this.pq = [null];
        this.keys = [null];
        this.pm = [null];
        this.N = this.pq.length - 1;
    };

    isEmpty(){
        return this.pq.length == 1;
    };

    insert(key){
        this.keys.push(key);
        this.N = this.keys.length - 1;
        let keyID = this.N;
        this.pm[keyID] = this.N;
        this.pq.push(keyID);
        this.swim(this.pm[keyID]);
    };

    greater(i, j){
        if(this.keys[this.pq[i]] != null && this.keys[this.pq[j]] != null){
            if(this.keys[this.pq[i]].weight > this.keys[this.pq[j]].weight){
                return true;
            }else{
                return false;
            };
        };
        return false;
    };

    swap(i, j){
        let oldKeyIDi = this.pq[i];
        let oldKeyIDj = this.pq[j];

        this.pq[i] = this.pq[j];
        this.pq[j] = oldKeyIDi;

        this.pm[oldKeyIDi] = j;
        this.pm[oldKeyIDj] = i;

    };

    swim(i){
        while(this.greater(Math.floor(i/2), i) && i > 1){
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
            }else{
                break;
            };
            i = j;
        };
    };

    delMin(){
        this.swap(1, this.N);
        let minKeyID = this.pq.pop();
        this.N = this.pq.length - 1;
        this.pm[minKeyID] = null;
        let min = this.keys[minKeyID];
        this.keys[minKeyID] = null;

        this.sink(1);
        return min;
    };

    decreaseKey(id, newKey){
        this.keys[id] = newKey;
        this.swim(this.pm[id]);
    };

};

const {Edge} = require('./EdgeWeightedGraph');
let e0_6 = new Edge(0, 6, 0.58);
let e0_2 = new Edge(0, 2, 0.26);
let e0_4 = new Edge(0, 4, 0.38);
let e0_7 = new Edge(0, 7, 0.16);
let e1_3 = new Edge(1, 3, 0.29);
let e1_2 = new Edge(1, 2, 0.36);
let e1_7 = new Edge(1, 7, 0.19);
let e1_5 = new Edge(1, 5, 0.32);
let e2_3 = new Edge(2, 3, 0.17);
let e2_6 = new Edge(2, 6, 0.40);
let e2_7 = new Edge(2, 7, 0.34);
let e3_6 = new Edge(3, 6, 0.52);
let e4_6 = new Edge(4, 6, 0.93);
let e4_7 = new Edge(4, 7, 0.37);
let e4_5 = new Edge(4, 5, 0.35);
let e5_7 = new Edge(5, 7, 0.28);
let e0_0 = new Edge(0, 0, 0.01);

let iminpq = new IndexedMinPQEdgeGraph();
iminpq.insert(e0_6);
// iminpq.insert(e0_2);
// iminpq.insert(e0_4);
// iminpq.insert(e0_7);
// iminpq.insert(e1_3);
// iminpq.insert(e1_2);
// iminpq.insert(e1_7);
// iminpq.insert(e1_5);


// while(!iminpq.isEmpty()){
//     console.log(iminpq.delMin(), iminpq)
// }
// console.log(iminpq)
// iminpq.decreaseKey(1, e0_0)
// console.log(iminpq)


class IndexedMinPQDijkstra{
    constructor(V){
        this.pq = [];
        this.keys = Array(V).fill(null);
        this.pm = Array(V).fill(null);
        this.endOfPQ = 0;
        this.V = V;
    };

    contains(keyID){
        return this.keys[keyID] != null;
    };

    isEmpty(){
        return this.pq.length <= 0;
    };

    insert(keyID, key){
        if(this.isEmpty()){
            this.endOfPQ = 0;
        }else{
            this.endOfPQ++;
        };
        this.keys[keyID] = key;
        this.pm[keyID] = this.endOfPQ;
        this.pq.push(keyID);
        this.swim(this.pm[keyID]);
    };

    greater(i, j){
        if(this.keys[this.pq[i]] != null && this.keys[this.pq[j]] != null){
            if(this.keys[this.pq[i]] > this.keys[this.pq[j]]){
                return true;
            }else{
                return false;
            };
        };
        return false;
    };

    swap(i, j){
        let oldKeyIDAti = this.pq[i];
        let oldKeyIDAtj = this.pq[j];

        this.pq[i] = this.pq[j];
        this.pq[j] = oldKeyIDAti;

        this.pm[oldKeyIDAti] = j;
        this.pm[oldKeyIDAtj] = i;

    };

    swim(i){
        let parent = Math.floor(i/2);
        if(i%2 == 0){
            parent = i / 2 - 1;
        };
        while(this.greater(parent, i) && i > 0){
            this.swap(i, parent);
            i = parent;
            parent = Math.floor(i/2);
            if(i%2 == 0){
                parent = i / 2 - 1;
            };
        };
    };

    sink(i){
        while(2*i + 1 <= this.endOfPQ){
            let j = 2*i + 1;
            if(j + 1 <= this.endOfPQ){
                if(this.greater(j, j+1)){
                    j++;
                };
            };
            if(this.greater(i, j)){
                this.swap(i, j);
            }else{
                break;
            };
            i = j;
        };
    };

    delMin(){
        this.swap(0, this.endOfPQ);
        let minKeyID = this.pq.pop();
        this.endOfPQ--;
        this.pm[minKeyID] = null;
        let min = this.keys[minKeyID];
        this.keys[minKeyID] = null;

        this.sink(0);
        return minKeyID;
    };

    decreaseKey(id, newKey){
        this.keys[id] = newKey;
        this.swim(this.pm[id]);
    };
};


let dpq = new IndexedMinPQDijkstra(5);
dpq.insert(3, 9);
dpq.delMin()
dpq.insert(4, 1);
dpq.insert(0, 5);
dpq.insert(1, 32);
dpq.insert(2, 58);
// console.log(dpq.delMin());
// console.log(dpq.contains(9));
// dpq.decreaseKey(0, 0);

module.exports = {
    IndexedMinPQEdgeGraph,
    IndexedMinPQDijkstra,
};

