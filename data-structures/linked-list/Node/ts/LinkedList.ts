import NodeType from "./NodeType";
import Node from "./Node";

export default class LinkedList {
  private first: NodeType;
  private last: NodeType;
  private length: number;
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  getFirst(): NodeType {
    return this.first;
  }
  getLast(): NodeType {
    return this.last;
  }
  getLength(): number {
    return this.length;
  }
  setFirst(node: NodeType) {
    this.first = node;
  }
  setLast(node: NodeType) {
    this.last = node;
  }
  append(value: number) {
    const node = new Node(value);
    if (this.getLength() === 0) {
      this.setFirst(node);
      this.setLast(node);
    }
    this.length++;
    return this.last;
  }
}
