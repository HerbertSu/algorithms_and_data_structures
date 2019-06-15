const {StackLinkedList} = require('./Stack');
const {QueueLinkedList} = require('./Queue');

let queue = new QueueLinkedList();
queue.insert(0, "hi")
queue.insert(1, "there")
queue.insert(2, "My")
queue.insert(3, "name")
queue.insert(4, "is")
queue.insert(5, "Herbert")


console.log(queue)

console.log(queue.remove().value)
console.log(queue.remove().value)
console.log(queue.remove().value)
console.log(queue.remove().value)

queue.insert(6, "Su")
console.log(queue.remove().value)
console.log(queue.remove())
console.log("hi",queue.remove())

console.log(queue.remove())

console.log(queue)