'use strict';

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor(root) {
        this.root=root;
    }
}

const preOrder = (root) => {
    if(root === null) {
        return;
    }
    console.log(root.value);
    preOrder(root.left);
    preOrder(root.right);
}
const postOrder = (root) => {
    if(root === null) {
        return;
    }
    postOrder(root.left);
    postOrder(root.right);
    console.log(root.value);
}
const inOrder = (root) => {
    if(root === null) {
        return;
    }
    inOrder(root.left);
    console.log(root.value);
    inOrder(root.right);
}


const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
const five = new Node(5);

one.left = two;
one.right = three;

three.left = four;
three.right = five;

const tree = new BinaryTree(one);

preOrder(tree.root);
postOrder(tree.root);
inOrder(tree.root);



module.exports = {Node, BinaryTree, preOrder, postOrder, inOrder};