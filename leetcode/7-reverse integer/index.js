function reverse(x) {
  let num = 0;
  let a = Math.abs(x);
  const max = 2147483647;
  while (a !== 0) {
    const temp = a % 10;
    num = num * 10 + temp;
    a = Math.floor(a / 10);
  }
  if (x > 0 && num < max) {
    return num;
  } else if (x < 0 && num <= max) {
    return -num;
  } else {
    return 0;
  }
}