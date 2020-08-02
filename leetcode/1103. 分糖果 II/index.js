function distributeCandies(candies, num_people) {
  const res = Array(num_people).fill(0)
  let i = 0

  while (candies !== 0) {
    res[i % num_people] += Math.min(i + 1, candies)
    candies -= Math.min(i + 1, candies)
    i++
  }

  return res
}