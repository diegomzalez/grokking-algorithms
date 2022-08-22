import Node from "./Node.js";
export default class LinkedNode extends Node {
  constructor(value) {
    super(value);
    this.prev = null;
    this.next = null;
  }
  getPrev() {
    return this.prev;
  }

  getNext() {
    return this.next;
  }
  setPrev(linkedNode) {
    linkedNode.prev = this.prev;
    linkedNode.next = this;
    this.prev = linkedNode;
  }

  setNext(linkedNode) {
    linkedNode.prev = this;
    linkedNode.next = this.next;
    this.next = linkedNode;
  }
}
