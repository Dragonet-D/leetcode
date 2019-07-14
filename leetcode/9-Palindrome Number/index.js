function isPalindrome(x) {
  let num = 0;
  let tempX = Math.abs(x);
  while (tempX !== 0) {
    const temp = tempX % 10;
    num = num * 10 + temp;
    tempX = Math.floor(tempX / 10);
  }
  return x === num && x >= 0;
}