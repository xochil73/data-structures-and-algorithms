'use strict';


class Node  {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = [];
    }
    push(value) {
        return this.top.push (new Node(value));
    }
    pop(){
        const pop = this.top.value;
        this.top = this.top.next;
        return pop;
    }
    peek() {
        return this.top.value;
    }
}

module.export = Stack;
