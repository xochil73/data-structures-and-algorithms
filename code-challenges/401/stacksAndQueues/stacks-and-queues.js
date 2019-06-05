'use strict'


const stacksAndQueues = {};
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

stacksAndQueues.Node = Node;

class Stack {
    constructor() {
        this.top = null;
    }

    push(value) {
        let node = new Node(value);
        node.next = this.top;
        this.top = node;
    }

    pop() {
        const pop = this.top.value;
        this.top = this.top.next;
        return pop;

    }

    peek() {

        return this.top.value;
    }
}

stacksAndQueues.Stack = Stack;

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
    }

    enqueue(value) {
        // new Node = this.rear;
        let node = new Node(value);
        if(this.front) {
            this.rear.next = node;
            this.rear = node;
        }
        else {
            this.front = node;
            this.rear = node;
        }
    }

    dequeue() {
        const frontNode = this.front.value;
        this.front = this.front.next;
        return frontNode;

    }

    peek() {
        return this.front.value;
    }
}
stacksAndQueues.Queue = Queue;

module.exports = stacksAndQueues;