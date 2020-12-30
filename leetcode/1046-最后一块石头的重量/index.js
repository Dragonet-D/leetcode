var lastStoneWeight = function(stones) {
  const pq = new MaxPriorityQueue()
  for (const val of stones) {
    pq.add(val)
  }

  while (pq.size() > 1) {
    const a = pq.del()
    const b = pq.del()

    if (b - a) {
      pq.add(b - a)
    }
  }

  return pq.size() === 0 ? 0 : pq.values()[0]

};

function MaxPriorityQueue() {
  this.queues = []
}

MaxPriorityQueue.prototype.add = function (val) {
  let i = 0
  while(val < this.queues[i]) {
    i++
  }
  this.queues.splice(i, 0, val)
}

MaxPriorityQueue.prototype.values = function () {
  return this.queues
}

MaxPriorityQueue.prototype.del = function () {
  return this.queues.shift()
}

MaxPriorityQueue.prototype.size = function () {
  return this.queues.length
}
const a = new MaxPriorityQueue()

a.add(1)
a.add(2)
a.add(22)
a.add(12)

console.log(a.get());