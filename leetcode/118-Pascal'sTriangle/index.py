from typing import List


class Solution:
  def generate(self, numRows: int) -> List[List[int]]:
    res = []
    for i in range(numRows):
      res.append([])
      for j in range(i + 1):
        if j in (0, i):
          res[i].append(1)
        else:
          res[i].append(res[i - 1][j - 1] + res[i - 1][j])
    return res