function longestCommonPrefix(strs) {
  for(const i in strs[0]) {
    for (const string of strs.slice(1)) {
      if (i >= string.length || string[i] !== strs[0][i]) {
        return strs[0].substring(0, i)
      }
    }
  }
  return strs[0] || ''
}
