class Node{
  constructor(value, right = null, left = null){
    this.value = value;
    this.right = right;
    this.left = left;
  }
}

class BinarySearchTree{
  constructor(){
    this.root = null;
  }
  
  insert(value, node = this.root){
    if(this.root === null){
      this.root = new Node(value);
    }
    else if(value < node.value){
      if(node.left === null){
        node.left = new Node(value);
      }
      else{
        return this.insert(value, node.left);
      }
    }
    else if(node.value < value){
      if(node.right === null){
        node.right = new Node(value);
      }
      else{
        return this.insert(value, node.right);
      }
    }
    return this;
  }
  
  //depth first search
  findDFS(value, node = this.root){
    if(node === null) return false
    if(node.value < value) return this.findDFS(value, node.right)
    else if(value > node.value) return this.findDFS(value, node.left)
    else return true
  }
  
  DFSPreOrder(fn, node = this.root){
    if(node === null) return
    
    fn(node.value)
    this.DFSPreOrder(fn, node.left)
    this.DFSPreOrder(fn, node.right)
  }
  
  DFSInOrder(fn, node = this.root){
    if(node === null) return
    
    this.DFSInOrder(fn, node.left)
    fn(node.value)
    this.DFSInOrder(fn, node.right)
  }
  
  DFSPostOrder(fn, node = this.root){
    if(node === null) return
    
    this.DFSPostOrder(fn, node.left)
    this.DFSPostOrder(fn, node.right)
    fn(node.value)
  }
  
  breadthFirstSearch(fn, node = this.root){
    const q = []
    
    q.push(node)
    
    while(q.length){
      const n = q.shift()
      fn(n.value)
      if(n.left) q.push(n.left)
      if(n.right) q.push(n.right)
      
    }
  }
}


const bst = new BinarySearchTree();
[11, 16, 10, 4, 6, 5, 19, 18].reduce((acc, ele) => acc.insert(ele), bst)
console.log(bst.findDFS(4))   // false if tree is empty
console.log(bst.findDFS(11))  // true if found in tree
console.log(bst.findDFS(10))   // true if found in tree
console.log(bst.findDFS(24))  // false if not found in tree

const arr = []

bst.DFSPreOrder((value)=>{
  arr.push(value)
})

console.log(arr)

bst.DFSPreOrder(console.log)
bst.DFSInOrder(console.log)
bst.DFSPostOrder(console.log)
bst.breadthFirstSearch(console.log)


//can do it the same but push the root, its the same thing
  // breadthFirstSearch(fn, node){
  //   const q = []
    
  //   q.push(this.root)
    
  //   while(q.length){
  //     const n = q.shift()
  //     fn(n.value)
  //     if(n.left) q.push(n.left)
  //     if(n.right) q.push(n.right)
      
  //   }
  // }
