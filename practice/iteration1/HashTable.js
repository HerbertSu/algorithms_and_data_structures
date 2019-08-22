class Node{
    constructor(key, value){
        this.key = key;
        this.value = value;
        this.next = null;
    };
};

class SeparateChainingHashTable{

    constructor(M){
        this.st = Array(M).fill(null);
        this.M = M; 
        this.N = null;
    };

    hashString(string){
        let h = 31;
        let charList = string.split('');
        for(let i = 0; i < charList.length; i++){
            let char = charList[i];
            h = h + (charList.length - 1 - i)*char.charCodeAt(0);
        };
        return h;
    };

    hash(string){
        return this.hashString(string)%this.M;
    };

    insert(key, value){
        let i = this.hash(key);
        let node = this.st[i];

        while(node != null){
            if(node.key == key){
                node.value = value;
                break;
            }else{
                if(node.next == null){
                    node.next = new Node(key, value);
                    break;
                }else{
                    node = node.next;
                };
            };
        };
        if(node == null){
            this.st[i] = new Node(key, value);
        };
    };

    get(key){
        let hash = this.hash(key);
        let x = this.st[hash];

        while(x != null){
            if(x.key == key){
                return x.value;
            };
            x = x.next;
        };
        return null;
    };
};


class LinearProbingHashTable{
    constructor(){
        this.M = 31;
        this.st = Array(97).fill(null);
        this.val = Array(97).fill(null);
    };

    hashString(string){
        let h = 31;
        let charList = string.split('');
        for(let i = 0; i < charList.length; i++){
            let char = charList[i];
            h = h + (charList.length - 1 - i)*char.charCodeAt(0);
        };
        return h;
    };

    hash(string){
        return this.hashString(string)%this.M;
    };

    insert(key, value){
        let i = this.hash(key);
        let x = this.st[i];

        while(true){
            if(x == key){
                this.val[i] = value;
                break;
            }else if(x == null){
                this.st[i] = key;
                this.val[i] = value;
                break;
            }
            i++;
            if(i > this.st.length - 1){
                i = 0;
            };
            x = this.st[i];
        };
    };

    get(key){
        let i = this.hash(key);
        let x = this.st[i];

        while(true){
            if(x == key){
                return this.val[i];
            }else if(x == null){
                return null;
            };
            i++;
            if(i > this.st.length - 1){
                i = 0;
            };
            x = this.st[i];
        };
    }

}

let st = new LinearProbingHashTable();
st.insert("a", 1)
st.insert("b", 2)
st.insert("basdfasdas", 24)
console.log(st.get("c"))