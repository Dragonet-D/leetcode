var firstUniqChar = function(s) {
    const frequency = {}
    for (const val of s) {
      if (frequency[val]) {
        frequency[val] = ++frequency[val]
      } else {
        frequency[val] = 1
      }
    }
    for (const i in s) {
      if (frequency[s[i]] === 1) {
            return i;
        }
    }
    return -1;
};

console.log(firstUniqChar("asdasdasd"))
