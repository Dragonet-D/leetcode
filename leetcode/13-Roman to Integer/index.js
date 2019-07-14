function romanToInt(s) {
  const map = { I : 1,  V : 5,  X : 10,  L : 50,  C : 100,  D : 500,  M : 1000};
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    const current = map[s[i]];
    const previous = map[s[i - 1]];
    if (i > 0 && current > previous) {
      result += current - 2 * previous;
    } else {
      result += current;
    }
  }
  return result;
}