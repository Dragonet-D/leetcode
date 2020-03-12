from math import gcd


class Solution:
  def gcdOfStrings(self, str1: str, str2: str) -> str:
    a = gcd(len(str1), len(str2))
    b = str1[:a]
    if str1 + str2 == str2 + str1:
      return b
    return ''
