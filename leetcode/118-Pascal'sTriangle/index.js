var generate = function(numRows) {
  const res = []

  for (let i = 0; i < numRows; i++) {
    if (i === 0) {
      res[i] = [1]
    } else {
      const a = res[i - 1].slice(0)
      a.unshift(0)
      res[i] = a.map((item, index) => item + (res[i - 1][index] || 0))
    }
  }
  return res
};

console.log(generate(34))