/*
 * @lc app=leetcode.cn id=404 lang=typescript
 *
 * [404] 左叶子之和
 *
 * https://leetcode.cn/problems/sum-of-left-leaves/description/
 *
 * algorithms
 * Easy (62.50%)
 * Likes:    688
 * Dislikes: 0
 * Total Accepted:    276K
 * Total Submissions: 441.5K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定二叉树的根节点 root ，返回所有左叶子之和。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 
 * 
 * 输入: root = [3,9,20,null,null,15,7] 
 * 输出: 24 
 * 解释: 在这个二叉树中，有两个左叶子，分别是 9 和 15，所以返回 24
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: root = [1]
 * 输出: 0
 * 
 * 
 * 
 * 
 * 提示:
 * 
 * 
 * 节点数在 [1, 1000] 范围内
 * -1000 <= Node.val <= 1000
 * 
 * 
 * 
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

function sumOfLeftLeaves(root: TreeNode | null): number {
  function traversal(node: TreeNode | null): number {
    if (node === null) return 0;
    // 这里需要通过父结点判断
    let leftVal = 0;
    if (node.left !== null && node.left.left === null && node.left.right === null) {
      leftVal = node.left.val;
    }
    /** 后序遍历, 左右中, 计算左子树的sum, 计算右子树的sum, 在中节点结束该层递归 */
    const leftSum = traversal(node.left);
    const rightSum = traversal(node.right);
    return leftVal + leftSum + rightSum;
  }
  return traversal(root);
};
// @lc code=end

