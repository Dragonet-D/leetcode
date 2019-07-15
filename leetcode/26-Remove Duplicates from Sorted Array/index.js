function removeDuplicates(nums) {
  if (!nums) {
    return 0
  }
  let count = 0;
  for(const i in nums) {
    if (nums[count] !== nums[i]) {
      count += 1;
      nums[count] = nums[i]
    }
  }
  return count + 1;
}