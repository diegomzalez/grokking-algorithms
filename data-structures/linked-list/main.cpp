#include <iostream>

using namespace std;
class Node {
	private:
		int value;
	public:
		Node(int value) {
			this->value = value;
		}
		int getValue() {
			return this->value;
		}
		void setValue(int value) {
			this->value = value;
		}
};
class LinkedNode : public Node {
	private:
		LinkedNode *next;
		LinkedNode *previous;
	public:
		LinkedNode(int value) : Node(value) {
			this->next = NULL;
			this->previous = NULL;
		}
		LinkedNode *getNext() {
			return this->next;
		}
		LinkedNode *getPrevious() {
			return this->previous;
		}
		void setNext(LinkedNode *next) {
			next->previous = this;
			next->next = this->next;
			this->next = next;
		}
		void setPrevious(LinkedNode *previous) {
			previous->next = this;
			previous->previous = this->previous;
			this->previous = previous;
		}
};
class LinkedList {
	private:
		LinkedNode *head;
		LinkedNode *tail;
		int length;
		void setHead(LinkedNode *head) {
			this->head = head;
		}
		void setTail(LinkedNode *tail) {
			this->tail = tail;
		}
		void SetBoth(LinkedNode *node) {
			this->setHead(node);
			this->setTail(node);
		}
		void setLength() {
			this->length++;
		}
	public:
		LinkedList() {
			this->head = NULL;
			this->tail = NULL;
			this->length = 0;
		}
		LinkedNode *getHead() {
			return this->head;
		}
		LinkedNode *getTail() {
			return this->tail;
		}
		int getLength() {
			return this->length;
		}
		void add(int value) {
			LinkedNode node(value);
			if (this->getLength() == 0) {
				this->SetBoth(&node);
			} else {
				this->getTail()->setNext(&node);
				this->setTail(&node);
			}
			this->length++;
		}

};
int main() {
	LinkedList linkedList;
	linkedList.add(1);
	linkedList.add(2);
	cout << linkedList.getHead()->getValue() << " " << linkedList.getTail()->getValue() << endl;
	cout << linkedList.getLength() << endl;

	return 0;
}
