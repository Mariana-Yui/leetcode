/*
 * @lc app=leetcode.cn id=104 lang=typescript
 *
 * [104] 二叉树的最大深度
 *
 * https://leetcode.cn/problems/maximum-depth-of-binary-tree/description/
 *
 * algorithms
 * Easy (77.23%)
 * Likes:    1761
 * Dislikes: 0
 * Total Accepted:    1.2M
 * Total Submissions: 1.5M
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树 root ，返回其最大深度。
 *
 * 二叉树的 最大深度 是指从根节点到最远叶子节点的最长路径上的节点数。
 *
 *
 *
 * 示例 1：
 *
 *
 *
 *
 *
 *
 * 输入：root = [3,9,20,null,null,15,7]
 * 输出：3
 *
 *
 * 示例 2：
 *
 *
 * 输入：root = [1,null,2]
 * 输出：2
 *
 *
 *
 *
 * 提示：
 *
 *
 * 树中节点的数量在 [0, 10^4] 区间内。
 * -100 <= Node.val <= 100
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

function maxDepth(root: TreeNode | null): number {
  /** 层序遍历 */
  // const queue: TreeNode[] = [];
  // root !== null && queue.push(root);
  // let depth = 0;
  // while (queue.length) {
  //   const size = queue.length;
  //   for (let i = 0; i < size; i++) {
  //     const cur = queue.shift()!;
  //     cur.left !== null && queue.push(cur.left);
  //     cur.right !== null && queue.push(cur.right);
  //   }
  //   depth++;
  // }

  /** 递归, 后序遍历求高度, 自底向上, 所以终止条件返回值是0, 向上累加 */
  // function getDepth(node: TreeNode | null) {
  //   if (node === null) return 0;
  //   const leftDepth = getDepth(node.left); // 左
  //   const rightDepth = getDepth(node.right); // 右
  //   const depth = 1 + Math.max(leftDepth, rightDepth); // 中
  //   return depth;
  // }
  // const depth = getDepth(root);

  /** 递归, 前序遍历, 自顶向下求深度 */
  let depth = 0;
  function getDepth(node: TreeNode | null, curDepth: number): void {
    if (node === null) return;
    depth = depth < curDepth ? curDepth : depth;
    getDepth(node.left, curDepth + 1);
    getDepth(node.right, curDepth + 1);
  }
  getDepth(root, 1);

  return depth;
}
// @lc code=end
