class Solution:
  def lengthOfLastWord(self, s: str) -> int:
    count = 0
    local_count = 0
    for i in range(len(s)):
      if i == ' ':
        local_count = 0
      else:
        local_count += 1
        count = local_count
      return count