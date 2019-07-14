class Solution:
  def romanToInt(self, s: str) -> int:
    numeralMap = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}
    result = 0
    for i in range(len(s)):
      current = numeralMap[s[i]]
      previous = numeralMap[s[i - 1]]
      if i > 0 and current > previous:
        result += current - 2 * previous
      else:
        result += current
    return result