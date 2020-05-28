function maxSubArray(nums: number[]): number {
  let pre: number = 0;
  let maxAns: number = nums[0]

  nums.forEach(x => {
    pre = Math.max(pre + x , x);
    maxAns = Math.max(maxAns, pre);
  })
  return maxAns
}

function Status(l, r, m, i) {
  this.lSum = l
  this.rSum = r
  this.mSum = m
  this.iSum = i
}

const pushUp = (l, r) => {
  const iSum = l.iSum + r.iSum
}