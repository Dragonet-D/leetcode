class Solution:
  def isPalindrome(self, x: int) -> bool:
    num = 0
    tempX = abs(x)
    while(tempX != 0):
      temp = tempX % 10
      num = num * 10 + temp
      tempX = int(tempX / 10)
    return x >= 0 and x == num
