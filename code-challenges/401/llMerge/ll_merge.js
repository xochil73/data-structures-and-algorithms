'use strict';

const Node = require('./node.js');
const LinkedList = require('./linked_list.js');


  const  mergedLists =(a, b) => {

        let currentListA = a.head;
        let currentListB = b.head;
        let tempA = currentListA.next;
        let tempB = currentListB.next;


        while (currentListA && currentListB) {
            tempA = currentListA.next;
            tempB = currentListB.next;
            currentListA = currentListB;
            currentListA = currentListA.next;
            currentListA= tempB.next;
            currentListB=currentListA.next;
            currentListA=currentListA.next;



        }
  };

  const linkedList1= new LinkedList();
  linkedList1.insertAtHead(1);
  linkedList1.insertAtHead(3);
  linkedList1.insertAtHead(5);
  const linkedList2= new LinkedList ();
  linkedList2.insertAtHead(2);
  linkedList2.insertAtHead(4);
  linkedList2.insertAtHead(6);

  mergedLists(linkedList1, linkedList2);







  module.exports = mergedLists();