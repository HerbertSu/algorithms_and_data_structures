const {ListQueue} = require('./Queue');

const RED = true;
const BLACK = false;

class Node{
    constructor(key, value, color=BLACK){
        this.key = key;
        this.value = value;
        this.left = null;
        this.right = null;
        this.count = 0;
        this.color = color;
    };
}

class RBBST{
    constructor(){
        this.root = null;
    };

    size(node){
        if(node == null){
            return 0;
        };
        return node.count;
    };

    rotateLeft(node){
        let h = node;
        node = h.right;
        h.right = node.left;
        node.left = h;
        node.color = h.color;
        h.color = RED;
        return node;
    };

    rotateRight(node){
        let h = node;
        node = h.left;
        h.left = node.right;
        node.right = h;
        node.color = h.color;
        h.color = RED;
        return node;
    };

    colorFlip(node){
        node.left.color = BLACK;
        node.right.color = BLACK;
        node.color = RED;
    };

    putR(key, value, node){
        if(node == null){
            return new Node(key, value, RED);
        };
        if(key < node.key){
            node.left = this.putR(key, value, node.left);
        }else if(key > node.key){
            node.right = this.putR(key, value, node.right);
        }else{
            node.value = value;
        };

        if(node.right.color == RED && node.left.color == BLACK){
            node = this.rotateLeft(node);
        };
        if(node.left.color == RED && node.left.left.color == RED){
            node = this.rotateRight(node);
        };
        if(node.right.color == RED && node.left.color == RED){
            this.colorFlip(node);
        };

        node.count = this.size(node.left) + this.size(node.right) + 1;
        return node;
    };

    put(key, value){
        this.root = this.putR(key, value, this.root);
    };

    floorR(key, node){
        if(node == null){
            return null;
        }else if(key == node.key){
            return node;
        };
        if(key < node.key){
            return this.floorR(key, node.left);
        };
        let right = this.floorR(key, node.right);
        if(right != null){
            return right;
        };
        return node;
    };

    floor(key){
        return this.floorR(key, this.root);
    };

    ceilingR(key, node){
        if(node == null){
            return null;
        };
        if(node.key == key){
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
        return this.ceilingR(key, this.root);
    };

    rankR(key, node){
        if(node == null){
            return 0;
        };
        if(key < node.key){
            return this.rankR(key, node.left);
        }else if(key > node.key){
            return 1 + this.size(node.left) + this.rankR(node.right);
        }else{
            return this.size(node.left);
        };
    };

    rank(key){
        return this.rankR(key, this.root);
    };

    inorder(node, queue){
        if(node == null){
            return;
        };
        this.inorder(node.left, queue);
        queue.enqueue(node);
        this.inorder(node.right, queue);
    };
}