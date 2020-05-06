const findKthLargest = function (nums, k) {
  let mindIndex = Math.floor(nums.length / 2)
  let mid = nums.splice(mindIndex, 1)[0]
  let left = []
  let right = []

  nums.forEach(i => {
    if (i > mid) {
      right.push(i)
    } else {
      left.push(i)
    }
  })

  if (k === right.length + 1) {
    return mid
  }

  if (k < right.length + 1) {
    return findKthLargest(right, k)
  }

  return findKthLargest(left, k - right.length - 1)
}