//Making Queues more efficient. Based on previous solved kata @ https://www.codewars.com/kata/55a9c0994cb7e284d500005e/javascript Moves away from linear complexity that occurred before. Solution now occurs in constant time


class Queue {
    constructor() {
      this.storage = {}
      this.head = 0
      this.tail = 0
    }
  
    enqueue(element) {
      this.storage[this.tail] = element
      this.tail++
    }
    
    dequeue() {
      let removed = this.storage[this.head]
      delete this.storage[this.head]
      this.head++
      return removed
    }
  }
  
  const queue = new Queue()
  
  queue.enqueue('apple')
  queue.enqueue('banana')
  queue.enqueue('blueberry')

console.log(queue)