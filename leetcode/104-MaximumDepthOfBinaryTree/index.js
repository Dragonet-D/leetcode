const maxDepth = root => {
  if (!root) return 0
  else {
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
  }
}

const maxDepth1 = root => {
  if (!root) {
    return 0
  } else {
    const left = maxDepth1(root.left)
    const right = maxDepth1(root.right)

    return Math.max(left, right) + 1
  }
}

function treeNode(value) {

}