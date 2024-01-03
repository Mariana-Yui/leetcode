/*
 * @lc app=leetcode.cn id=513 lang=typescript
 *
 * [513] 找树左下角的值
 *
 * https://leetcode.cn/problems/find-bottom-left-tree-value/description/
 *
 * algorithms
 * Medium (73.28%)
 * Likes:    554
 * Dislikes: 0
 * Total Accepted:    221.1K
 * Total Submissions: 301.8K
 * Testcase Example:  '[2,1,3]'
 *
 * 给定一个二叉树的 根节点 root，请找出该二叉树的 最底层 最左边 节点的值。
 *
 * 假设二叉树中至少有一个节点。
 *
 *
 *
 * 示例 1:
 *
 *
 *
 *
 * 输入: root = [2,1,3]
 * 输出: 1
 *
 *
 * 示例 2:
 *
 * ⁠
 *
 *
 * 输入: [1,2,3,4,null,5,6,null,null,7]
 * 输出: 7
 *
 *
 *
 *
 * 提示:
 *
 *
 * 二叉树的节点个数的范围是 [1,10^4]
 * -2^31
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

function findBottomLeftValue(root: TreeNode | null): number {
  /** 迭代法, 层序遍历, 这题用层序遍历非常简单 */
  // const queue: TreeNode[] = [];
  // let result: number = 0;
  // root !== null && queue.push(root);
  // while (queue.length) {
  //   const size = queue.length;
  //   for (let i = 0; i < size; i++) {
  //     const cur = queue.shift();
  //     if (i === 0) {
  //       result = cur.val;
  //     }
  //     cur.left && queue.push(cur.left);
  //     cur.right && queue.push(cur.right);
  //   }
  // }
  // return result;

  /** 递归法, 因为访问的是最左节点, 采用前序遍历(中序后序当然也可以), 比较麻烦 */
  /** 定义全局变量维护最大深度 */
  let maxDepth = 0,
    result = 0;
  function traversal(node: TreeNode | null, depth: number) {
    if (node === null) return;
    if (maxDepth < depth) {
      // 前序遍历递归每层访问到的第一个节点一定是最左节点
      maxDepth = depth;
      result = node.val;
    }
    traversal(node.left, depth + 1);
    traversal(node.right, depth + 1);
  }
  traversal(root, 1);
  return result;
}
// @lc code=end
