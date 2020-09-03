function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var isBalanced = function (root) {
    const height = (root) => {
        if (!root) {
            return 0
        }
        const leftHeight = height(root.left)
        const rightHeight = height(root.right)

        if (leftHeight < 0 || rightHeight < 0 || Math.abs(leftHeight - rightHeight) > 1) {
            return -1
        }

        return Math.max(leftHeight, rightHeight) + 1
    }

    return height(root) >= 0
};