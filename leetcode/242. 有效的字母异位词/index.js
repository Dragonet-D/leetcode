var isAnagram = function(s, t) {
  const obj = {}
  s.split('').forEach(i => {
    obj[i] = obj[i] ? ++obj[i] : 1
  })
  t.split('').forEach(i => {
    obj[i] = obj[i] ? --obj[i]: -1
  })
  return Object.values(obj).every(i => i === 0)
};

console.log(isAnagram('anagram', 'nagaram'))