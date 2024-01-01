/*
 * @lc app=leetcode.cn id=101 lang=typescript
 *
 * [101] 对称二叉树
 *
 * https://leetcode.cn/problems/symmetric-tree/description/
 *
 * algorithms
 * Easy (59.46%)
 * Likes:    2620
 * Dislikes: 0
 * Total Accepted:    952.2K
 * Total Submissions: 1.6M
 * Testcase Example:  '[1,2,2,3,4,4,3]'
 *
 * 给你一个二叉树的根节点 root ， 检查它是否轴对称。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：root = [1,2,2,3,4,4,3]
 * 输出：true
 *
 *
 * 示例 2：
 *
 *
 * 输入：root = [1,2,2,null,3,null,3]
 * 输出：false
 *
 *
 *
 *
 * 提示：
 *
 *
 * 树中节点数目在范围 [1, 1000] 内
 * -100 <= Node.val <= 100
 *
 *
 *
 *
 * 进阶：你可以运用递归和迭代两种方法解决这个问题吗？
 *
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isSymmetric(root: TreeNode | null): boolean {
  // 外侧比较 + 内侧比较
  function compare(left: TreeNode | null, right: TreeNode | null): boolean {
    if (left !== null && right === null) return false;
    else if (right !== null && left === null) return false;
    else if (left === null && right === null) return true;
    else if (left.val !== right.val) return false;

    const outside = compare(left.left, right.right);
    const inside = compare(left.right, right.left);
    return outside && inside;
  }

  return root !== null ? compare(root.left, root.right) : true;
}
// @lc code=end
