var addBinary = function(a, b) {
  const { length: aLength } = a;
  const { length: bLength } = b;
  let result = '';
  let curry = 0;
  let value = 0;
  for (let i = 0; i < Math.max(aLength, bLength); i++) {
    value = curry;
    if (i < aLength) {
      value += Number(a[aLength - (i + 1)])
    }
    if (i < bLength) {
      value += Number(b[bLength - (i + 1)])
    }
    [curry, value] = [Math.floor(value / 2), value % 2];
    result += value.toString()
  }
  if (curry) {
    result += '1'
  }
  return result.split('').reverse().join('');
};
console.log(addBinary('11', '1'));