function intersect(nums1, nums2 ) {
    const hash = {}

    for (const value of nums1) {
        hash[value] = hash[value] === undefined ? 1 : hash[value]++
    }

    const res = []

    for (const value of nums2) {
        if (hash[value]) {
            res.push(value)
            hash[value]--
        }
    }

    return res
}