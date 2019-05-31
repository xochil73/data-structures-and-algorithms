'use strict'

let Node = require('./node.js');
let BinaryTree = require('./tree.js');


const fizzBuzzTree = (root) => {
    if (root === null){
        return;
    }
    //Xochil - 'post-order'
    if (root.value % 3 === 0 && root.value % 5 === 0){
        root.value = 'fizzbuzz';
    } else {
        if (root.value % 3 === 0){
            root.value = 'fizz';
        } else if (root.value % 5 === 0){
            root.value = 'buzz';
        }
    }

    fizzBuzzTree(root.left);
    fizzBuzzTree(root.right);

    return root;
    console.log (root, 'I am the root');
};

module.exports = fizzBuzzTree;
