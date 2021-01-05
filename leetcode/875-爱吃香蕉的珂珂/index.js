var minEatingSpeed = function(piles, H) {
  let l = 0,
      r = Math.max(...piles),
      mid = 0,
      res = 0;

  while (l <= r) {
    mid = ((r + l) / 2) << 0

    if (isPossible(piles, H, mid)) {
      res = mid
      r = mid - 1
    } else {
      l = mid + 1
    }
  }

  return res;

  function isPossible(piles, H, K) {
    let time = 0
    piles.forEach(item => {
      time += Math.ceil(item / K)
    })

    return time <= H
  }
};

console.log(minEatingSpeed([3, 6, 7, 11], 8));