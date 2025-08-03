const LinkedList = require('./linkedList.js');

const list = LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log("Initial list:");
console.log(list.toString()); // ( dog ) -> ( cat ) -> ... -> null

// Additional test examples
list.insertAt("lizard", 2);
console.log("After insertAt(2, 'lizard'):");
console.log(list.toString());

list.removeAt(3);
console.log("After removeAt(3):");
console.log(list.toString());

console.log("Size:", list.size());
console.log("Head:", list.head());
console.log("Tail:", list.tail());
console.log("At index 2:", list.at(2));
console.log("Contains 'cat'?", list.contains("cat"));
console.log("Contains 'lion'?", list.contains("lion"));
console.log("Index of 'snake':", list.find("snake"));
console.log("Pop:", list.pop());
console.log("After pop:");
console.log(list.toString());
