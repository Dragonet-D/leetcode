function grayCode(n) {
  function make(n) {
    if (0 === n) {
      return ["0"];
    } else if (1 === n) {
      return ["0", "1"];
    } else {
      const prev = make(n - 1);
      let result = [];
      let max = Math.pow(2, n) - 1;
      for (let i = 0, len = prev.length; i < len; i++) {
        result[i] = `0${prev[i]}`;
        result[max - i] = `1${prev[i]}`;
      }
      return result;
    }
  }
  return make(n).map(item => parseInt(item, 2));
}

function grayCode1(n) {
  const len = Math.pow(2, n);
  const result = [];
  for (let i = 0; i < len; i++) {
    result.push(i ^ (i >> 1));
  }
  return result;
}

console.log(grayCode1(0));
console.log(grayCode(2));