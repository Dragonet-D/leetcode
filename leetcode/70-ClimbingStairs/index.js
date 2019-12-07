const climbStairs = function (n) {
  let prev = 0, current = 1;
  for (let i = 0; i < n; i++) {
    [prev, current] = [current, prev + current]
    console.log(current)
  }
  return current
};

console.log(climbStairs(6));