class Node:
    def __init__(self, value):
        self.value = value

    def getValue(self):
        return self.value

    def setValue(self, value):
        self.value = value


class LinkedNode(Node):
    def __init__(self, value):
        self.prev = None
        Node.__init__(self, value)
        self.prev = None

    def getPrev(self):
        return self.prev

    def setPrev(self, node):
        node.prev = self.getPrev()
        node.next = self
        self.prev = node

    def getNext(self):
        return self.next;

    def setNext(self, node):
        node.setPrev(self)
        node.next = self.next
        self.next = node


def main():
    linked_node = LinkedNode(5)
    print(linked_node.getValue())


if __name__ == '__main__':
    main()
