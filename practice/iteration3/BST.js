class Node{
    constructor(key, value = null){
        this.key = key;
        this.value = value;
        this.left = null;
        this.right = null;
        this.count = 0;
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

    putR(node, key, value){
        if(node == null){
            return new Node(key, value);
        };
        if(key < node.key){
            node.left = this.putR(node.left, key, value);
        }else if(key > node.key){
            node.right = this.putR(node.right, key, value);
        }else{
            node.value = value;
        };
        node.count = 1 + this.size(node.left) + this.size(node.right);
        return node;
    };

    put(key, value){
        this.root = this.putR(this.root, key, value);
    };

    floorR(node, key){
        if(node == null){
            return null;
        };
        if(node.key == key){
            return node;
        };

        if(key < node.key){
            return this.floorR(node.left, key);
        };
        let right = this.floorR(node.right, key);
        if(right != null){
            return right;
        }else{
            return node;
        };
    };

    floor(key){
        let node = this.floorR(this.root, key);
        if(node != null){
            return node.key;
        };
        return null;
    };

    ceilingR(node, key){
        if(node == null){
            return null;
        };
        if(node.key == key){
            return node;
        };
        if(key > node.key){
            return this.ceilingR(node.right, key);
        };
        let left = this.ceilingR(node.left, key);
        if(left != null){
            return left;
        }else{
            return node;
        };
    };

    ceiling(key){
        let node = this.ceilingR(this.root, key);
        if(node != null){
            return node;
        };
        return null;
    };

    rankR(node, key){
        if(node == null){
            return 0;
        };
        if(key < node.key){
            return this.rankR(node.left, key);
        }else if(key > node.key){
            return 1 + this.size(node.left) + this.rankR(node.right);
        }else{
            return this.size(node.left);
        };
    };

    rank(key){
        return this.rankR(this.root, key);
    };

    inOrder(node, q){
        if(node == null){
            return;
        };
        this.inOrder(node.left);
        q.enqueue(node);
        this.inOrder(node.right);
    };

    delMinR(node){
        if(node.left == null){
            return node.right;
        };
        node.left = this.delMinR(node.left);
        node.count = 1 + this.size(node.left) + this.size(node.right);
        return node;
    };

    delMinFromNode(node){
        return this.delMinR(node);
    };

    min(node){
        while(node.left != null){
            node = node.left;
        };
        return node;
    };

    deleteR(node, key){
        if(node == null){
            return null;
        };
        if(key < node.key){
            node.left = this.deleteR(node.left, key);
        }else if(key > node.key){
            node.right = this.deleteR(node.right, key);
        }else{
            if(node.right == null){
                return node.left;
            };
            if(node.left == null){
                return node.right;
            };
            let h = node; 
            node = this.min(h.right);
            node.left = h.left;
            node.right = this.delMinFromNode(h.right);
        };
        
        node.count = 1 + this.size(node.left) + this.size(node.right);
        return node;
    };

    delete(key){
        this.root = this.deleteR(this.root, key);
    };
};