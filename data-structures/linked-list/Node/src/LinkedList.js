import LinkedNode from "./LinkedNode.js";

export default class LinkedList {
  constructor(value) {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  getFirst() {
    return this.first;
  }
  getLast() {
    return this.last;
  }
  getLength() {
    return this.length;
  }
  setFirst(linkedNode) {
    this.first = linkedNode;
  }
  setLast(linkedNode) {
    this.last = linkedNode;
  }
  setBoth(linkedNode) {
    this.setFirst(linkedNode);
    this.setLast(linkedNode);
  }
  append(value) {
    const linkedNode = new LinkedNode(value);
    if (this.getLength() === 0) {
      this.setBoth(linkedNode);
    } else {
      this.getLast().setNext(linkedNode);
      this.setLast(this.getLast().getNext());
    }
    this.length++;
    return this.last;
  }
}
