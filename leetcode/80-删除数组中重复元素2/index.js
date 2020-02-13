var removeDuplicates = function (nums) {
  let len = 0

  for (let i = 0; i < nums.length;) {
    const cur = nums[i]

    for (let j = 0; j < 2 && i < nums.length && nums[i] === cur; j++ , i++) {
      nums[len++] = cur
    }

    while (i < nums.length && nums[i] === cur) {
      i++
    }
  }
  return len
};

function removeDuplicates2(nums) {
  let i = 0, j = 1;
  while (j < nums.length) {
    if (i >= 1 && nums[j] == nums[i] && nums[j] == nums[i - 1]) {
      j++
    }
    else {
      nums[++i] = nums[j++]
    }
  }
  nums.length -= j - i - 1
}