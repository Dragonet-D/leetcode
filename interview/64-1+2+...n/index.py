class Solution:
  def sumNums(self, n: int) -> int:
    m = n
    m += self.sumNums(m - 1)
    return n