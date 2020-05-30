/**
 * Linked List using Javascript *
 * Performing Append, Prepend, Add, Remove
 */
// "Linked List" [10,5,6]
// const linkedlist = {
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       next: {
//         value: 6,
//         next: null,
//       },
//     },
//   },
// };
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor(value) {
    // Head of List
    this.head = {
      value: value,
      next: null,
    };
    // Tail of List
    this.tail = this.head;
    this.length = 1;
  }

  /**
   * Print Node in List
   */
  printValue() {
    const array = [];
    let currentNode = this.head;
    while (currentNode != null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  /**
   * Append Node in List
   */
  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  /**
   * Prepend Node in List
   */
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  /**
   * Remove Node from begining
   */
  removeStart() {
    if (this.length !== 0) {
      let temp = this.head;
      this.head = temp.next;
      this.length--;
      return this;
    }
  }

  /**
   * Insert at index
   */
  insert(index, value) {
    if (this.length <= index) {
      return this.append(value);
    }
    const newNode = new Node(value);
    const leader = this.traveseToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    index++;
    // *-*
    //  *
  }

  traveseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter != index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  remove(index) {
    if (this.length < index) {
      return "No Item Found for Delete";
    }
    const leader = this.traveseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this
    // *-__*__-*
    //
  }
}

const myList = new LinkedList(10);
// console.log(myList);
console.log("Processing...");
myList.append(5);
myList.append(2);
myList.append(1);
myList.prepend(7);
myList.removeStart();
myList.insert(2, 34);
myList.remove(1);
console.log(myList.printValue());
