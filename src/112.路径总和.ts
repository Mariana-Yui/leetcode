/*
 * @lc app=leetcode.cn id=112 lang=typescript
 *
 * [112] 路径总和
 *
 * https://leetcode.cn/problems/path-sum/description/
 *
 * algorithms
 * Easy (53.83%)
 * Likes:    1306
 * Dislikes: 0
 * Total Accepted:    621.3K
 * Total Submissions: 1.2M
 * Testcase Example:  '[5,4,8,11,null,13,4,7,2,null,null,null,1]\n22'
 *
 * 给你二叉树的根节点 root 和一个表示目标和的整数 tarhasSum 。判断该树中是否存在 根节点到叶子节点
 * 的路径，这条路径上所有节点值相加等于目标和 tarhasSum 。如果存在，返回 true ；否则，返回 false 。
 *
 * 叶子节点 是指没有子节点的节点。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：root = [5,4,8,11,null,13,4,7,2,null,null,null,1], tarhasSum = 22
 * 输出：true
 * 解释：等于目标和的根节点到叶节点路径如上图所示。
 *
 *
 * 示例 2：
 *
 *
 * 输入：root = [1,2,3], tarhasSum = 5
 * 输出：false
 * 解释：树中存在两条根节点到叶子节点的路径：
 * (1 --> 2): 和为 3
 * (1 --> 3): 和为 4
 * 不存在 sum = 5 的根节点到叶子节点的路径。
 *
 * 示例 3：
 *
 *
 * 输入：root = [], tarhasSum = 0
 * 输出：false
 * 解释：由于树是空的，所以不存在根节点到叶子节点的路径。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 树中节点的数目在范围 [0, 5000] 内
 * -1000 <= Node.val <= 1000
 * -1000 <= tarhasSum <= 1000
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

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  const paths: number[] = [];
  function hasSum(node: TreeNode | null): boolean {
    if (node === null) return false;
    paths.push(node.val);
    if (node.left === null && node.right === null) {
      let sum = 0;
      for (let i = 0; i < paths.length; i++) {
        sum += paths[i];
      }
      return targetSum === sum;
    }
    let leftHasSum: boolean = false, rightHasSum: boolean = false;
    if (node.left) {
      leftHasSum = hasSum(node.left);
      paths.pop();
    }
    if (node.right) {
      rightHasSum = hasSum(node.right);
      paths.pop();
    }
    return leftHasSum || rightHasSum;
  }
  return hasSum(root);
}
// @lc code=end
