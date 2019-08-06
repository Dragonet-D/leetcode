class ListNode:
  def __init__(self, x):
    self.val = x
    self.next = None

class Solution:
  def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
    if l1 == None:
      return l2
    if l2 == None:
      return l1

    curry = 0
    dummy = ListNode(0)
    p = dummy

    while l1 and l2:
      temp = l1.val + l2.val + curry
      p.next = ListNode(temp % 10)
      curry = temp // 10
      l1 = l1.next
      l2 = l2.next
      p = p.next

    if l2:
      while l2:
        temp = l2.val + curry
        p.next = ListNode(temp % 10)
        curry = temp // 10
        l2 = l2.next
        p = p.next

    if l1:
      while l1:
        temp = l1.val + curry
        p.next = ListNode(temp % 10)
        curry = temp // 10
        l1 = l1.next
        p = p.next

    if curry == 1:
      p.next = ListNode(1)

    return dummy.next