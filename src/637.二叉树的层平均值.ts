/*
 * @lc app=leetcode.cn id=637 lang=typescript
 *
 * [637] 二叉树的层平均值
 *
 * https://leetcode.cn/problems/average-of-levels-in-binary-tree/description/
 *
 * algorithms
 * Easy (70.05%)
 * Likes:    470
 * Dislikes: 0
 * Total Accepted:    168.1K
 * Total Submissions: 239.8K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个非空二叉树的根节点 root , 以数组的形式返回每一层节点的平均值。与实际答案相差 10^-5 以内的答案可以被接受。
 *
 *
 *
 * 示例 1：
 *
 *
 *
 *
 * 输入：root = [3,9,20,null,null,15,7]
 * 输出：[3.00000,14.50000,11.00000]
 * 解释：第 0 层的平均值为 3,第 1 层的平均值为 14.5,第 2 层的平均值为 11 。
 * 因此返回 [3, 14.5, 11] 。
 *
 *
 * 示例 2:
 *
 *
 *
 *
 * 输入：root = [3,9,20,15,7]
 * 输出：[3.00000,14.50000,11.00000]
 *
 *
 *
 *
 * 提示：
 *
 *
 *
 *
 * 树中节点数量在 [1, 10^4] 范围内
 * -2^31 <= Node.val <= 2^31 - 1
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

function averageOfLevels(root: TreeNode | null): number[] {
  const result: number[] = [];
  const queue: TreeNode[] = [];
  root && queue.push(root);
  while (queue.length) {
    let sum = 0;
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const node = queue.shift()!;
      sum += node.val;
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    result.push(sum / size);
  }
  return result;
}
// @lc code=end
