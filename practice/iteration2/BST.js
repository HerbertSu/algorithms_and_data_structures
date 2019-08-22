const {ListQueue} = require('./Queue');

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

    get(key){
        let node = this.root;
        while(node != null){
            if(key > node.key){
                node = node.right;
            }else if(key < node.key){
                node = node.left;
            }else{
                return node.value;
            };
        };
        return null;
    };

    size(node){
        if(node!=null){
            return node.count;
        };
        return 0;
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
        }else{
            return node;
        };
    };

    floor(key){
        let node = this.floorR(key, this.root);
        if(node != null){
            return node.key;
        };
        return null;
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
        }else{
            return node;
        };
    };

    ceiling(key){
        let node = this.ceilingR(key, this.root);
        if(node != null){
            return node.key;
        };
        return null;
    };

    rankR(key, node){
        if(node == null){
            return 0;
        };
        if(key < node.key){
            return this.rankR(key, node.left);
        }else if(key == node.key){
            return this.size(node.left);
        }else{
            return 1 + this.size(node.left) + this.rankR(node.right);
        };
    };

    rank(key){
        return this.rankR(key, this.root);
    };

    inorder(q, node){
        if(node == null){
            return;
        };
        this.inorder(q, node.left);
        q.enqueue(node);
        this.inorder(q, node.right);
    };

    keys(){
        let q = new ListQueue();
        this.inorder(q, this.root);
        return q;
    };

    min(node){
        let min = node;
        while(node.left != null){
            min = node.left;
            node = node.left;
        };
        return node;
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
    
    delMinFromRoot(){
        return this.delMinR(this.root);
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
    }


};

let bst = new BST();

bst.put(2, 'b')
bst.put(1, 'a')
bst.put(3, 'c')
bst.put(5, 'e')
console.log(bst.keys())