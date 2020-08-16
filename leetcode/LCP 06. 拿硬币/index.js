function minCoins(coins) {
  let res = 0;
  for (const value of coins) {
    res += Math.ceil(value / 2);
  }

  return res;
}
