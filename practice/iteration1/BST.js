const {Queue} = require('./Queue');

class Node{
    constructor(key, value){
        this.key = key;
        this.value = value;
        this.left = null;
        this.right = null;
        this.count = 1;
    };
};

class BST{
    constructor(){
        this.root = null;
    };

    size(node){
        if(node != null){
            return node.count;
        };
        return 0;
    };

    putR(key, value, node){
        if(node == null){
            return new Node(key, value);
        };

        if(key > node.key){
            node.right = this.putR(key, value, node.right);
        }else if(key < node.key){
            node.left = this.putR(key, value, node.left);
        }else{
            node.value = value;
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

let bst = new BST();

bst.put("S");
bst.put("E");
bst.put("X");
bst.put("A");
bst.put("R");
bst.put("C");
bst.put("H");
bst.put("M");

bst.delete("E");

console.log(bst.root.left)