function twoSum(nums, target) {
  const dist = {};
  for (let i in nums) {
    const temp = target - nums[i];
    if (dist[temp] !== undefined) {
      return [dist[temp], i];
    }
    dist[nums[i]] = i;
  }
}
