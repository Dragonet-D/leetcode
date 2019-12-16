from typing import List

class Solution:
  def maxProfit(self, prices: List[int]) -> int:
    maxProft, minPrice = 0, float('inf')

    for price in prices:
      minPrice = min(price, minPrice)
      maxProft = max(maxProft, price - minPrice)

    return maxProft



