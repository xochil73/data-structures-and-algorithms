'use strict'

const stacksAndQueues = require('../stacks-and-queues.js');

describe('Node', () => {
    const newNode = new stacksAndQueues.Node(9);
    it('has a value', () => {
        expect(newNode.value).toEqual(9);
    });
    it('has a next, and is null', () => {
        expect(newNode.next).toEqual(null);
    });
    it('node instance', () => {
        expect(newNode instanceof stacksAndQueues.Node).toBeTruthy();
    })

});

describe('Stack', () => {
    it('has a value', () => {
        const newStack = new stacksAndQueues.Stack();
        expect(newStack.top).toEqual(null);
    });
    it('can succesefully instantiate an empty stack', () => {
        let stack = new stacksAndQueues.Stack();
        expect(stack instanceof stacksAndQueues.Stack).toBeTruthy();
    });
    it('can successfully push onto a stack', () => {
        const newStack = new stacksAndQueues.Stack();
        newStack.push(1);
        expect(newStack.top.value).toEqual(1);
    });
    it('can successfully push multiple nodes onto a stack', () => {
        const newStack = new stacksAndQueues.Stack();
        newStack.push(1);
        newStack.push(2);
        newStack.push(3);
        newStack.push(4);
        expect(newStack.top.value).toEqual(4);
        expect(newStack.top.next.value).toEqual(3);
    });
    it('can successfully pop off the stack', () => {
        const newStack = new stacksAndQueues.Stack();
        newStack.push(1);
        newStack.push(2);
        newStack.push(3);
        newStack.pop();
        expect(newStack.top.value).toEqual(2);
        expect(newStack.top.next.value).toEqual(1);
        expect(newStack.pop()).toEqual(2);
    });
    it('can successfully empty a stack after multiple pops', () => {
        const newStack = new stacksAndQueues.Stack();
        newStack.push(1);
        newStack.push(2);
        newStack.push(3);
        newStack.pop();
        newStack.pop();
        newStack.pop();
        expect(newStack.top).toEqual(null);
    });
    it('can successfully peek the next item on the stack', () => {
        const newStack = new stacksAndQueues.Stack();
        newStack.push(1);
        newStack.push(2);
        newStack.push(3);
        newStack.pop();
        expect(newStack.peek()).toEqual(2);
    })
});
describe('Queue', () => {
    it('can successfully instantiate an empty queue', () => {
        let queue = new stacksAndQueues.Queue();
        expect(queue instanceof stacksAndQueues.Queue).toBeTruthy();
    });
    it('can successfully enqueue onto a queue', () => {
        let queue = new stacksAndQueues.Queue();
        queue.enqueue(1);
        expect(queue.front.value).toEqual(1);
        expect(queue.rear.value).toEqual(1);
    });
    it('can successfully enqueue multiple items into a queue', () => {
        let queue = new stacksAndQueues.Queue();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        queue.enqueue(4);
        expect(queue.front.value).toEqual(1);
        expect(queue.front.next.value).toEqual(2);
        expect(queue.front.next.next.value).toEqual(3);
        expect(queue.rear.value).toEqual(4);
    });
    it('can successfully dequeue off of a queue the expected value', () => {
        let queue = new stacksAndQueues.Queue();
        queue.enqueue(1);
        expect(queue.dequeue()).toEqual(1);
        expect(queue.rear).toEqual(null);
    });
    it('can successfully peek into a queue, seeing the expected value', () => {
        let queue = new stacksAndQueues.Queue();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        queue.enqueue(4);
        expect(queue.peek()).toEqual(1);

    });
    it('can successfully empty a queue after multiple dequeues', () => {
        let queue = new stacksAndQueues.Queue();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        queue.dequeue();
        queue.dequeue();
        queue.dequeue();
        expect(queue.front).toEqual(null);

    });
    it('can successfully return a peek() and dequeue() response from an empty queue', () => {
        let queue = new stacksAndQueues.Queue();
        expect (queue instanceof stacksAndQueues.Queue).toBeTruthy();
        expect(queue.dequeue()).toEqual(null);
        expect(queue.peek()).toEqual(null);

    })

});