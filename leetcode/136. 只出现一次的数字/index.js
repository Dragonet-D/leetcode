function singleNumber(nums) {
  return nums.reduce((a, b) => a ^ b)
}

console.log(singleNumber([4,1,2,1,2]));