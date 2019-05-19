'use strict'


class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}


class BinaryTree {
  constructor(root) {
    this.root = root;
  }


  findHeigth(root) {
    if (root === null) {
      return 'root is empty';
    }
    let left = findHeigth(value.left);
    let right = findHeigth(value.right);

    if (left > right) {
      return left + 1;
    }
    else {
      return right + 1;
    }
  }

}

