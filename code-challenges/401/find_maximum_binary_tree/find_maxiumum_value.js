'use strict'

import tree from './tree';
import node from './node';

function find_maximum_value (tree) {
  if (!tree.root) {
    return;
  }

  let highestValue = tree.root.value;

  if(tree.root.value > highestValue) {
    tree.root.value = highestValue;
  }
  find_maximum_value(tree.root.left);
  find_maximum_value(tree.root.right);
}

find_maximum_value((tree));