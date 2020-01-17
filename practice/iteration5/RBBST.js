const RED = true;
const BLACK = false;

class Node{
    constructor(key, value, color=BLACK){
        this.key = key;
        this.value = value;
        this.left = null;
        this.right = null;
        this.color = color;
        this.count = 0;
    };
};

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
        let x = node;
        node = x.right;
        x.right = node.left;
        node.left = x;
        node.color = x.color;
        x.color = RED;
        return node;
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

    colorFlip(node){
        node.left.color = BLACK;
        node.right.color = BLACK;
        node.color = RED;
    };

    getColor(node){
        if(node == null){
            return null;
        };
        return node.color;
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

        if(node.right.color == RED && node.left.color != RED){
            node = this.rotateLeft(node);
        };
        if(node.left.color == RED && node.left.left.color == RED){
            node = this.rotateRight(node);
        };
        if(node.left.color == RED && node.right.color == RED){
            this.colorFlip(node);
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