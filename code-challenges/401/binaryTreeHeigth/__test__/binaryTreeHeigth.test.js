'use strict';

const Node= require ('../binaryTreeHeight');
const BinaryTree= require('../binaryTreeHeight');



const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
const five = new Node(5);
const six = new Node(6);

const tree = new BinaryTree(one);

one.left = two;
one.right = three;
three.left = four;
three.right = five;
five.right = six;

describe('Testing to get the value', () => {
  test('count tree levels', () => {
    tree.binaryTreeHeigth(tree.root);
    expect(tree.root).toEqual(4);
  })
});