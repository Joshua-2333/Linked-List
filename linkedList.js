const Node = require('./node.js');

function LinkedList() {
  let headNode = null;

  function append(value) {
    const newNode = Node(value);
    if (!headNode) {
      headNode = newNode;
      return;
    }
    let current = headNode;
    while (current.nextNode) {
      current = current.nextNode;
    }
    current.nextNode = newNode;
  }

  function prepend(value) {
    const newNode = Node(value, headNode);
    headNode = newNode;
  }

  function size() {
    let count = 0;
    let current = headNode;
    while (current) {
      count++;
      current = current.nextNode;
    }
    return count;
  }

  function head() {
    return headNode;
  }

  function tail() {
    if (!headNode) return null;
    let current = headNode;
    while (current.nextNode) {
      current = current.nextNode;
    }
    return current;
  }

  function at(index) {
    let current = headNode;
    let i = 0;
    while (current) {
      if (i === index) return current;
      current = current.nextNode;
      i++;
    }
    return null;
  }

  function pop() {
    if (!headNode) return null;
    if (!headNode.nextNode) {
      const removed = headNode;
      headNode = null;
      return removed;
    }
    let current = headNode;
    while (current.nextNode.nextNode) {
      current = current.nextNode;
    }
    const removed = current.nextNode;
    current.nextNode = null;
    return removed;
  }

  function contains(value) {
    let current = headNode;
    while (current) {
      if (current.value === value) return true;
      current = current.nextNode;
    }
    return false;
  }

  function find(value) {
    let index = 0;
    let current = headNode;
    while (current) {
      if (current.value === value) return index;
      current = current.nextNode;
      index++;
    }
    return null;
  }

  function toString() {
    let current = headNode;
    let str = '';
    while (current) {
      str += `( ${current.value} ) -> `;
      current = current.nextNode;
    }
    return str + 'null';
  }

  function insertAt(value, index) {
    if (index === 0) {
      prepend(value);
      return;
    }
    const prev = at(index - 1);
    if (!prev) return;
    const newNode = Node(value, prev.nextNode);
    prev.nextNode = newNode;
  }

  function removeAt(index) {
    if (index === 0 && headNode) {
      headNode = headNode.nextNode;
      return;
    }
    const prev = at(index - 1);
    if (!prev || !prev.nextNode) return;
    prev.nextNode = prev.nextNode.nextNode;
  }

  return {
    append,
    prepend,
    size,
    head,
    tail,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt
  };
}

module.exports = LinkedList;
