# Definition for a binary tree node.
from typing import List
class TreeNode:
  def __init__(self, x):
    self.val = x
    self.left = None
    self.right = None


class Solution:
  def sortedArrayToBST(self, nums: List[int]) -> TreeNode:
    def to_bst(nums, start, end):
      if start > end:
        return None
      mid = (start + end) // 2
      node = TreeNode(nums[mid])
