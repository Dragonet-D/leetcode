var mySqrt = function(x) {
  if (x === 1) return x;
  let left = 1;
  let right = Math.floor(x / 2);
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (mid * mid > x) {
      right = mid - 1;
    } else {
      left = mid + 1
    }
  }
  return left - 1;
};