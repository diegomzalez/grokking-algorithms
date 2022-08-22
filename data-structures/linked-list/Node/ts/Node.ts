import NodeType from "./NodeType";

export default class Node {
  private prev: NodeType;
  private value: number;
  private next: NodeType;
  constructor(value: number) {
    this.prev = null;
    this.value = value;
    this.next = null;
  }
  getPrev(): NodeType {
    return this.prev;
  }
  getValue(): number {
    return this.value;
  }
  getNext(): NodeType {
    return this.next;
  }
  setPrev(node: NodeType) {
    this.prev = node;
  }
  setValue(value: number) {
    this.value = value;
  }
  setNext(node: NodeType) {
    this.next = node;
  }
}
