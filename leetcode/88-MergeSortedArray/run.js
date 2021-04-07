const nums1 = [0]
const nums2 = [1]

function test(num1, m, num2, n) {
  let p1 = m - 1;
  let p2 = n - 1;
  let p = m + n - 1;

  while (p1 >= 0 && p2 >= 0) {
    if (num1[p1] > num2[p2]) {
      num1[p] = num1[p1]
      p--
      p1--
    } else {
      num1[p] = num2[p2]
      p--
      p2--
    }
  }

  if (p2 >= 0) {
    num1.splice(0, p2 + 1, ...nums2.slice(0, p2 + 1))
  }
}

test(nums1, 1, nums2, 1)