function removeElement(nums, val) {
  let i = 0;
  let last =  nums.length - 1;
  while (i <= last) {
    if (nums[i] === val) {
      [nums[i], nums[last]] = [nums[last], nums[i]];
      last -= 1;
    } else {
      i += 1;
    }
  }
  console.log(nums)
  return last + 1;
}

removeElement([1,2,3,1,2,3,1,2,3], 2)
