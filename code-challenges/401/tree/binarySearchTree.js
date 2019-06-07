'use strict'

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  insert(nodeToInsert) {
    if (!nodeToInsert) {
      throw new Error('Cannot insert a null value');
    }
    if (!this.root) {
      this.root = nodeToInsert;
      return;
    }
    let current = this.root;

    while (true) {
      if (nodeToInsert.value > current.value) {
        if (!current.right) {
          current.right = nodeToInsert;
          return;
        }
        current = current.right; //line is moving down the tree
      } else {
        if (!current.left) {
          current.left = nodeToInsert;
          return;
        }
        current = current.left;
      }
    }
  }


  find(valueToFind) {
    console.log(valueToFind, 'here is a value');
    if (!valueToFind) {
      throw new Error('Cannot find a null value');
    }
    if (!this.root) {
      throw new Error('Value to find does not exist');
    }
    if (valueToFind.value === this.root) {
      return true;
    }
    let found = false;
    let current = this.root;
    while (!found) {
      console.log(valueToFind, 'here I am!');
      if (valueToFind > current.value) {
        current = current.right;
        console.log(current, 'this is the current value');
      }if (valueToFind < current.value) {
        current = current.left;
      } else if (valueToFind === current.value) {
        found = true;
        console.log(found, 'I am found');


      }else  {
        return 'sorry, no value matched your number';
      }
    }
  }
}


const BST = new BinarySearchTree();
BST.insert(new Node(10));
BST.insert(new Node(15));
BST.insert(new Node(5));
BST.insert(new Node(7));
console.log(BST);

BST.find(15);

module.exports  = BinarySearchTree;