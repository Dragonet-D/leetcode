class Solution:
  def isValid(self, s: str) -> bool:
    lookup = {
      '(': ')',
      '[': ']',
      '{': '}'
    }
    stack = []
    for parenthese in s:
      if parenthese in lookup:
        stack.append(parenthese)
      elif len(stack) == 0 or lookup[stack.pop()] != parenthese:
        return False
    return len(stack) == 0
