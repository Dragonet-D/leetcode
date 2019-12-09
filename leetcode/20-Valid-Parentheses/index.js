function isValid(s) {
  const map = {
    '(': ')',
    '[': ']',
    '{': '}'
  };
  const arr = [];
  for (const value of s) {
    if (map[value]) {
      arr.push(value)
    } else if (!arr.length || map[arr.pop()] !== value) {
      return false
    }
  }
  return arr.length === 0
}