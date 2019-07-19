const {Queue} = require('./Queue');

const RED = true;
const BLACK = false;

class Node{
    constructor(key, value, color){
        this.key = key;
        this.value = value;
        this.left = null;
        this.right = null;
        this.count = 1;
        this.color = color;
    };
};

class RBBST{
    constructor(){
        this.root = null;
    };

    rotateLeft(h){
        let x = h.right;
        h.right = x.left;
        x.left = h;
        x.color = h.color;
        h.color = RED;
        return x;
    };

    rotateRight(node){
        let x = node;
        node = x.left;
        x.left = node.right;
        node.right = x;
        node.color = x.color;
        x.color = RED;
        return node;
    };

    flipColors(node){
        node.right.color = BLACK;
        node.left.color = BLACK;
        node.color = RED;
    };

    isRed(node){
        if(node != null){
            return node.color == RED;
        };
        return false;
    };

    size(node){
        if(node != null){
            return node.count;
        };
        return 0;
    };

    putR(key, value, node){
        if(node == null){
            return new Node(key, value, RED);
        };

        if(key > node.key){
            node.right = this.putR(key, value, node.right);
        }else if(key < node.key){
            node.left = this.putR(key, value, node.left);
        }else{
            node.value = value;
        };

        if(this.isRed(node.right) && !this.isRed(node.left)){
            node = this.rotateLeft(node);
        };
        if(this.isRed(node.left) && this.isRed(node.left.left)){
            node = this.rotateRight(node);
        };
        if(this.isRed(node.left) && this.isRed(node.right)){
            this.flipColors(node);
        };

        node.count = 1 + this.size(node.left) + this.size(node.right);

        return node;
    };

    put(key, value){
        this.root = this.putR(key, value, this.root);
    };

    floorR(key, node){
        if(node == null){
            return;
        };

        if(key == node.key){
            return node;
        };

        if(key < node.key){
            return this.floorR(key, node.left);
        };

        let right = this.floorR(key, node.right);

        if(right != null){
            return right;
        }
        return node;
    };

    floor(key){
        return this.floorR(key, this.root)
    };

    ceilingR(key, node){
        if(node == null){
            return;
        };

        if(key == node.key){
            return node;
        };

        if(key > node.key){
            return this.ceilingR(key, node.right);
        };

        let left = this.ceilingR(key, node.left);

        if(left != null){
            return left;
        };
        return node;
    };

    ceiling(key){
        return this.ceilingR(key, this.root)
    };

    rankR(key, node){
        if(node == null){
            return 0;
        };

        if(key < node.key){
            return this.rankR(key, node.left);
        } else if(key > node.key){
            return 1 + this.size(node.left) + this.rankR(key, node.right);
        } else {
            return this.size(node.left);
        };
    };

    rank(key){
        return this.rankR(key, this.root);
    };

    inorderR(queue, node){
        if(node == null){
            return;
        };
        this.inorderR(queue, node.left);
        queue.enqueue(node);
        this.inorderR(queue, node.right);
    };

    keys(){
        let queue = new Queue();
        this.inorderR(queue, this.root);
        return queue;
    };

    min(node){
        let min = node;
        while(node.left != null){
            min = node.left;
            node = node.left;
        };
        return min;
    };

    delMinR(node){
        if(node.left == null){
            return node.right;
        };
        node.left = this.delMinR(node.left);
        node.count = 1 + this.size(node.left) + this.size(node.right);
        return node;
    };

    deleteR(key, node){
        if(node == null){
            return null;
        }; 
        if(key < node.key){
            node.left = this.deleteR(key, node.left);
        }else if(key > node.key){
            node.right = this.deleteR(key, node.right);
        }else{
            if(node.right == null){
                return node.left;
            };
            if(node.left == null){
                return node.right;
            };
            let min = this.min(node.right);
            let t = node;
            node = min;
            node.right = this.delMinR(t.right);
            node.left = t.left;
        };
        node.count = 1 + this.size(node.left) + this.size(node.right);
        return node;
    };

    delete(key){
        this.root = this.deleteR(key, this.root);
    };


};


let node1 = new Node("S")
let node2 = new Node("E")
let node3 = new Node("X")
let node4 = new Node("Q")
let node5 = new Node("Y")

let rbbst = new RBBST();
rbbst.put("S");
rbbst.put("E");
rbbst.put("X");
rbbst.put("Q");
rbbst.put("Y");

console.log(rbbst.root);