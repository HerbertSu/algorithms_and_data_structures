class Node{
    constructor(key, value){
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
        if(node == null){
            return 0;
        };
        return node.count;
    };

    putR(key, value, node){
        if(node == null){
            return new Node(key, value);
        };

        if(key < node.key){
            node.left = this.putR(key, value, node.left);
        }else if(key > node.key){
            node.right = this.putR(key, value, node.right);
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
            return null;
        };
        if(node.key == key){
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
        let node = this.floorR(key, this.root);
        if(node == null){
            return node;
        };
        return node.key;
    };

    ceilingR(key, node){
        if(node == null){
            return null;
        };
        if(node.key == key){
            return node;
        };

        if(key > node.key){
            return this.floorR(key, node.right);
        };

        let left = this.floorR(key, node.left);
        if(left != null){
            return left;
        };
        return node;
    };

    ceiling(key){
        let node = this.ceilingR(key, this.root);
        if(node == null){
            return null;
        };
        return node.key;
    };

    rankR(key, node){
        if(node == null){
            return 0;
        };

        if(key < node.key){
            return this.rankR(node.left);
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

    delMin(node){
        if(node.left == null){
            return node.right;
        };

        node = this.delMin(node.left);
        node.count = 1 + this.size(node.left) + this.size(node.right);
        return node;
    };

    delMinFromNode(node){
        return this.delMin(node);
    };

    min(node){
        while(node.left != null){
            node = node.left;
        };
        return node;
    };

    deleteR(key, node){
        if(node == null){
            return null;
        };

        if(key < node.key){
            node = this.deleteR(key, node.left);
        }else if(key > node.key){
            node = this.deleteR(key, node.right);
        }else{
            if(node.right == null){
                return node.left;
            };
            if(node.left == null){
                return node.right;
            };

            let t = node;
            node = this.min(t.right);
            node.right = this.delMinFromNode(t.right);
            node.left = t.left;
        };
        node.count = 1 + this.size(node.left) + this.size(node.right);
        return node;
    };

    delete(key){
        this.root = this.deleteR(key, this.root);
    };
};