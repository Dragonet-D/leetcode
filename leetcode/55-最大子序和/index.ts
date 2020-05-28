function maxSubArray(nums: number[]): number {
  let pre: number = 0;
  let maxAns: number = nums[0]

  nums.forEach(x => {
    pre = Math.max(pre + x , x);
    maxAns = Math.max(maxAns, pre);
  })
  return maxAns
}