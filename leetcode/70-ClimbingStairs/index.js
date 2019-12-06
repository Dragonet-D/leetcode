/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  let prev = 0,current = 1
  for (let i = 0; i < n; i++) {
    [prev, current] = [current, prev + current]
  }
  return current
};