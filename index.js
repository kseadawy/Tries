//Node Class
class TrieNode{
  
  constructor(){
    this.children = {};
    this.eow = false;//means end of word
  }
}

//This class is for trie data structure which is works well with spell checker or autocomplete
class Trie{
  
  constructor(){
    this.root = new TrieNode();
  }

  insert(word){
    let curNode = this.root;
    
    for(let c of word){
      if(!curNode.children[c])
          curNode.children[c] = new TrieNode();
      curNode = curNode.children[c];
    }
    curNode.eow = true;
  }

  search(word){
    let curNode = this.root;

    for(let c of word){
      if(!curNode.children[c])
          return false;
      curNode = curNode.children[c];
    }
    return curNode.eow;
  }

  startsWith(word){
    let curNode = this.root;

    for(let c of word){
      if(!curNode.children[c])
          return false;
      curNode = curNode.children[c];
    }
    return true;
  }
}


let tree = new Trie();
tree.insert("apple"); console.log("Inserted: apple ");
console.log("Searched: apple " + tree.search("apple"));
console.log("Searched: app " + tree.search("app"));
console.log("started with : app " + tree.startsWith("app"));
