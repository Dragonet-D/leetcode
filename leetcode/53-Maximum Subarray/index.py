from typing import List
class Solution:
  def maxSubArray(self, nums: List[int]) -> int:
    if max(nums) < 0:
      return max(nums)

    localMax, globalMax = 0, 0
    for num in nums:
      localMax = max(0, localMax + num)
      globalMax = max(globalMax, localMax)

    return globalMax