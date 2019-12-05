# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution:
  def deleteDuplicates(self, head: ListNode) -> ListNode:
    current = head
    while current:
      runner = current.next
      while runner and current.val == runner.val:
        runner = runner.next
      current.next = runner
      current = runner
    return head