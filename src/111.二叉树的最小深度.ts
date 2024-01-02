/*
 * @lc app=leetcode.cn id=111 lang=typescript
 *
 * [111] 二叉树的最小深度
 *
 * https://leetcode.cn/problems/minimum-depth-of-binary-tree/description/
 *
 * algorithms
 * Easy (53.15%)
 * Likes:    1143
 * Dislikes: 0
 * Total Accepted:    635.2K
 * Total Submissions: 1.2M
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，找出其最小深度。
 *
 * 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。
 *
 * 说明：叶子节点是指没有子节点的节点。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：root = [3,9,20,null,null,15,7]
 * 输出：2
 *
 *
 * 示例 2：
 *
 *
 * 输入：root = [2,null,3,null,4,null,5,null,6]
 * 输出：5
 *
 *
 *
 *
 * 提示：
 *
 *
 * 树中节点数的范围在 [0, 10^5] 内
 * -1000
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

function minDepth(root: TreeNode | null): number {
  /** 迭代法, 层序遍历 */
  // const queue: TreeNode[] = [];
  // let depth = 0;
  // root !== null && queue.push(root);
  // while (queue.length) {
  //   depth++;
  //   const size = queue.length;
  //   for (let i=0; i<size; i++) {
  //     const cur = queue.shift();
  //     if (cur.left === null && cur.right === null) return depth;
  //     cur.left !== null && queue.push(cur.left);
  //     cur.right !== null && queue.push(cur.right);
  //   }
  // }

  /** 递归, 后序遍历 */
  /** 需要注意的是最小深度指的是叶子节点到根节点的深度, 如果一个节点没有左子树或者没有右子树是不算的, 因为不算叶子节点 */
  // function getDepth(node: TreeNode | null): number {
  //   if (node === null) return 0;
  //   const leftDepth = getDepth(node.left);
  //   const rightDepth = getDepth(node.right);
  //   if (node.left === null && node.right !== null) {
  //     return 1 + rightDepth;
  //   }
  //   if (node.right === null && node.left !== null) {
  //     return 1 + leftDepth;
  //   }
  //   return 1 + Math.min(leftDepth, rightDepth);
  // }
  // const depth = getDepth(root);

  /** 递归, 前序遍历 */
  let depth = 0;
  function getDepth(node: TreeNode | null, curDepth: number): void {
    if (node === null) return;
    if (node.left === null && node.right === null) {
      depth = (depth > curDepth || depth === 0) ? curDepth : depth;
    }
    getDepth(node.left, curDepth + 1);
    getDepth(node.right, curDepth + 1);
  }
  getDepth(root, 1);

  return depth;
}
// @lc code=end
