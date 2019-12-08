# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Solution:
  def isBalanced(self, root: TreeNode) -> bool:
    def getHeight(root):
      if root is None:
        return 0
      leftHeight, rightHeight = getHeight(root.left), getHeight(root.right)
      if leftHeight < 0 or rightHeight < 0 or abs(leftHeight - rightHeight) > 1:
        return  -1
      return max(leftHeight - rightHeight) + 1
    return getHeight(root) >= 0