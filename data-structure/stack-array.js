/**
 * Stack - Array using Javascript *
 * Performing Peek, Push, Pop
 */
class Stack {
  constructor() {
    this.array = [];
  }

  /**
   * Peek Operation
   */
  peek() {
    return this.array[this.array.length - 1];
  }

  /**
   * Push Operation
   */
  push(value) {
    this.array.push(value);
    return this;
  }

  /**
   * Pop Operation
   */
  pop() {
    this.array.pop();
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
