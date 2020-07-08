function intersect(nums1: number[], nums2: number[]): number[] {
  const len1 = nums1.length
  const len2 = nums2.length
  const res = []
  if (len1 >= len2) {
    for (const value of nums2) {
      if (nums1.incudes(value)) {
        res.push(value)
        nums1.splice(nums1.indexOf(value), 1)
      }
    }
  } else {
    for (const value of nums1) {
      if (nums2.includes(value)) {
        res.push(value)
        nums2.splice(nums2.indexOf(value), 1)
      }
    }
  }

  return res
}