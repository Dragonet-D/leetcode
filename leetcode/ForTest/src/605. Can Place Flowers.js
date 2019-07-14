function canPlaceFlowers(flowerbed, n) {
  let i = 0,
    count = 0,
    len = flowerbed.length;
  while (i < len) {
    if (flowerbed[i] === 0) {
      if (i === 0) {
        if (flowerbed[i + 1] === 0 || i === len - 1) {
          flowerbed[i++] = 1;
          count++;
        }
      } else if (flowerbed[i - 1] === 0 && !flowerbed[i + 1]) {
        flowerbed[i++] = 1;
        count++;
      }
    }
    i++;
    if (count >= n) {
      return true;
    }
  }
  return false;
}

// module.exports = canPlaceFlowers;
