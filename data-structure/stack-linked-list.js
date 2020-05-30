/**
 * Stack - Linked List using Javascript *
 * Performing Peek, Push, Pop
 */
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  /**
   * Peek Operation
   */
  peek() {
    return this.top;
  }

  /**
   * Push Operation
   */
  push(value) {
    const newNode = new Node(value);
    if (this.length == 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const pointerHolder = this.top;
      this.top = newNode;
      this.top.next = pointerHolder;
    }
    this.length++;
    return this;
  }

  /**
   * Pop Operation
   */
  pop() {
    if (!this.top) {
      return null;
    }
    if(this.top == this.bottom){
      this.top = null;
      this.bottom = null;
    }
    this.top = this.top.next;
    this.length--;
    return this;
  }
}

const myStack = new Stack();
console.log("Processing...");
myStack.push("Google");
myStack.push("Twitter");
myStack.push("Facebook");
myStack.pop();

console.log(myStack);
