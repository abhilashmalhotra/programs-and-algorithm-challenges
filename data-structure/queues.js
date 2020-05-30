/**
 * Queues - Javascript *
 * Performing Enqueue, Dequeue, Peek
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  /**
   * Peek Operation
   */
  peek() {
    return this.first;
  }

  /**
   * Enqueue Operation
   */
  enqueue(value) {
    const newNode = new Node(value);
    if (this.length == 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
  }

  /**
   * Dequeue Operation
   */
  dequeue() {
    if (!this.first) {
      return null;
    }
    if (this.first == this.last) {
      this.first = null;
      this.last = null;
    }
    this.first = this.first.next;
    this.length--;
  }
}

const myQueue = new Queue();
myQueue.enqueue("Abhi");
myQueue.enqueue("Nitin");
myQueue.enqueue("Shaina");
myQueue.dequeue();
console.log("Processing...");
console.log(myQueue);
