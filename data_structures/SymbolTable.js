const {QueueLinkedList} = require('./Queue');

class OrderedSymbolTable{
    constructor(keys = [], vals = []){
        this.keys = keys;
        this.vals = vals;
        this.N = keys.length;
    };

    isEmpty(){
        return this.keys.length == 0;
    };

    get(key){
        if(this.isEmpty()){
            return null;
        };

        let k = this.rank(key);

        if(key == this.keys[k] && k < this.N){
            return this.vals[k];
        }else{
            return null;
        };

    };

    rank(key){
        let lo = 0;
        let hi = this.N - 1;

        while(lo <= hi){
            let mid = lo + Math.floor((hi - lo)/2);

            if(key < this.keys[mid]){
                hi = mid - 1;
            }else if( key > this.keys[mid] ){
                lo = mid + 1;
            }else{
                return mid;
            };
        };

        return lo;
    };

};

class Node{
    constructor(key, value){
        this.key = key;
        this.value = value;
        this.leftNode = null;
        this.rightNode = null;
        this.count = 1;
    };
};

class BinarySearchTree{
    constructor(){
        this.root = null;
    };

    get(key){
        let next = this.root;

        while(next != null){
            if(key < next.key){
                next = next.leftNode;
            }else if(key > next.key){
                next = next.rightNode;
            } else {
                return next.value;
            };
        }
        return null;
    };

    size(node){
        if(node == null){
            return null;
        };
        return node.count;
    };

    sizeWholeTree(){
        return this.size(this.root);
    };

    putRecursive(key, value, node){
        if(node == null){
            node = new Node(key, value);
            return node;
        };

        if(key < node.key){
            node.leftNode = this.putRecursive(key, value, node.leftNode);
        } else if (key > node.key){
            node.rightNode = this.putRecursive(key, value, node.rightNode);
        } else {
            node.value = value;
        };

        if(node.leftNode != null && node.rightNode != null){
            node.count = 1 + node.leftNode.count + node.rightNode.count;
        }else if(node.leftNode == null){    
            node.count = 1 + node.rightNode.count;
        }else{
            node.count = 1 + node.leftNode.count;
        };
        
        return node;
    };

    put(key, value){
        this.root = this.putRecursive(key, value, this.root);
    };
    
    floorRecursive(key, node){
        if(node == null){
            return null;
        };

        if(key == node.key){
            return node;
        };

        if(key < node.key){
            return this.floorRecursive(key, node.leftNode);
        };
        let t = this.floorRecursive(key, node.rightNode);
        if( t != null){
            return t;
        }else{
            return node;
        };  
    };

    floor(key){
        let node = this.floorRecursive(key, this.root);
        if(node == null){
            return null;
        };
        return node.key;
    };

    ceilingRecursive(key, node){
        if(node == null){
            return null;
        };

        if(key == node.key){
            return node;
        };

        if(key > node.key){
            return this.ceilingRecursive(key, node.rightNode);
        };

        let t = this.ceilingRecursive(key, node.leftNode);
        if(t != null){
            return t;
        }else{
            return node;
        };
    };

    ceiling(key){
        let node = this.ceilingRecursive(key, this.root);
        if(node == null){
            return null;
        };
        return node.key;
    };

    rankRecursive(key, node){
        if(node == null){
            return 0;
        };

        if(key < node.key){
            return this.rankRecursive(key, node.leftNode)
        }else if (key > node.key){
            return 1 + this.size(node.leftNode) + this.rankRecursive(key, node.rightNode);
        }else{
            return this.size(node.leftNode);
        };
    };

    rank(key){
        let count = this.rankRecursive(key, this.root);
        if(count != null){
            return count;
        };
        return 0;
    };

    inOrder(node, queue){
        if(node == null){
            return;
        };

        this.inOrder(node.leftNode, queue);
        queue.insert(node.key, node.value);
        this.inOrder(node.rightNode, queue);
    };

    keys(){
        let q = new QueueLinkedList;
        this.inOrder(this.root, q);
        return q;
    };

    
    deleteMinRecursive(node){
        if(node.leftNode == null){
            return node.rightNode;
        };
        
        node.leftNode = this.deleteMinRecursive(node.leftNode);
        if(node.leftNode != null && node.rightNode != null){
            node.count = 1 + node.leftNode.count + node.rightNode.count;
        }else if(node.leftNode == null){    
            node.count = 1 + node.rightNode.count;
        }else{
            node.count = 1 + node.leftNode.count;
        };
        return node;
    };

    deleteMin(){
        this.root = this.deleteMinRecursive(this.root);
    };

    deleteMinFromNode(node){
        return this.deleteMinRecursive(node);
    };


    min(node){
        while(node.leftNode != null){
            node = node.leftNode;
        };
        return node;
    };

    deleteRecursive(key, node){
        if(node == null){
            return null;
        };
        if(key < node.key){
            node.leftNode = this.deleteRecursive(key, node.leftNode);
        }else if(key > node.key){
            node.rightNode = this.deleteRecursive(key, node.rightNode);
        }else{
            if(node.rightNode == null){
                return node.leftNode;
            }
            if(node.leftNode == null){
                return node.rightNode;
            };
            let t = node;
            node = this.min(t.rightNode);
            node.rightNode = this.deleteMinFromNode(t.rightNode);
            node.leftNode = t.leftNode;
        };

        node.count = 1 + this.size(node.leftNode) + this.size(node.rightNode);
        return node;
    };

    delete(key){
        this.deleteRecursive(key, this.root);
    };
};


const BLACK = false;
const RED = true;
class RedBlackNode{
    constructor(key, value, color=BLACK){
        this.key = key;
        this.value = value;
        this.leftNode = null;
        this.rightNode = null;
        this.count = 1;
        this.color = color;
    };
};


class RedBlackBST{
    constructor(){
        this.root = null;
    };
    
    isRed(node){
        if(node == null){
            return false;
        };
        return node.color;
    };

    ceilingRecursive(key, node){
        if(node == null){
            return null;
        };

        if(key == node.key){
            return node;
        };

        if(key > node.key){
            return this.ceilingRecursive(key, node.rightNode);
        };

        let t = this.ceilingRecursive(key, node.leftNode);
        if(t != null){
            return t;
        }else{
            return node;
        };
    };

    ceiling(key){
        let node = this.ceilingRecursive(key, this.root);
        if(node == null){
            return null;
        };
        return node.key;
    };
    
    floorRecursive(key, node){
        if(node == null){
            return null;
        };

        if(key == node.key){
            return node;
        };

        if(key < node.key){
            return this.floorRecursive(key, node.leftNode);
        };
        let t = this.floorRecursive(key, node.rightNode);
        if( t != null){
            return t;
        }else{
            return node;
        };  
    };

    floor(key){
        let node = this.floorRecursive(key, this.root);
        if(node == null){
            return null;
        };
        return node.key;
    };

    get(key){
        let next = this.root;

        while(next != null){
            if(key < next.key){
                next = next.leftNode;
            }else if(key > next.key){
                next = next.rightNode;
            } else {
                return next.value;
            };
        }
        return null;
    };

    rotateLeft(node){
        let x = node.rightNode;
        node.rightNode = x.leftNode;
        x.leftNode = node;
        x.color = node.color;
        node.color = RED;
        return x;
    };

    rotateRight(node){
        let x = node.leftNode;
        node.leftNode = x.rightNode;
        x.rightNode = node;
        x.color = node.color;
        node.color = RED;
        return x;
    };

    flip(node){
        node.color = RED;
        node.leftNode.color = BLACK;
        node.rightNode.color = BLACK;
    };

    putRecursive(key, value, node){
        if(node == null){
            node = new RedBlackNode(key, value, RED);
            return node;
        };

        if(key < node.key){
            node.leftNode = this.putRecursive(key, value, node.leftNode);
        } else if (key > node.key){
            node.rightNode = this.putRecursive(key, value, node.rightNode);
        } else {
            node.value = value;
        };

        if(this.isRed(node.rightNode) && !this.isRed(node.leftNode)){
            node = this.rotateLeft(node);
        };

        if(this.isRed(node.leftNode) && this.isRed(node.leftNode.leftNode)){
            node = this.rotateRight(node);
        };

        if(this.isRed(node.leftNode) && this.isRed(node.rightNode)){
            ;this.flip(node);
        };


        if(node.leftNode != null && node.rightNode != null){
            node.count = 1 + node.leftNode.count + node.rightNode.count;
        }else if(node.leftNode == null){    
            node.count = 1 + node.rightNode.count;
        }else{
            node.count = 1 + node.leftNode.count;
        };
        
        return node;
    };

    put(key, value){
        this.root = this.putRecursive(key, value, this.root);
    };
    
    rank(key){
        let count = this.rankRecursive(key, this.root);
        if(count != null){
            return count;
        };
        return 0;
    };

    inOrder(node, queue){
        if(node == null){
            return;
        };

        this.inOrder(node.leftNode, queue);
        queue.insert(node.key, node.value);
        this.inOrder(node.rightNode, queue);
    };

    keys(){
        let q = new QueueLinkedList;
        this.inOrder(this.root, q);
        return q;
    };
};

module.exports = {
    OrderedSymbolTable,
    BinarySearchTree,
    RedBlackBST,
};