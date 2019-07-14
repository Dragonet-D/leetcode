class Solution:
  def twoSum(self, nums: list[int], target: int) -> list[int]:
    dist = {}
    for i in range(len(nums)):
      if target - nums[i] in dist:
        return [dist[target - nums[i]], i]
      else:
        dist[nums[i]] = i
