function isPalindrome(s) {
  s = s.toLowerCase()
  let str = ''
  console.log(s)
  for (let i = 0; i < s.length; i++) {
    if (/[0-9a-z]/.test(s[i])) {
      str += s[i]
    }
  }
  console.log(str)
  let left = 0
  let right = str.length - 1

  while (left < right) {
    if (str[left] !== str[right]) {
      return false
    }
    left += 1
    right -= 1
  }
  return true
}

console.log(isPalindrome('race a car'))