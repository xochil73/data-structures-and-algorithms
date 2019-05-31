'use strict'

const Node = require('./node.js');
const Stack = require('./stack.js');
// implement stacks using plain arrays with push and pop functions

class PseudoQueue {
    constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
}

    enqueue(value) {
        stack1.push(value);
    }


    dequeue() {
        if (stack1.length === 0) {
            if (stack1.length === 0) {
                return 'Cannot dequeue because queue is empty';
            }
            while (Stack1.length > 0) {
                let p = Stack1.pop();
                Stack2.push(p);
            }
        }
        return Stack2.pop();
        console.log(stack2, 'I am stack 2');
    }
}

new PseudoQueue();

module.export = PseudoQueue;