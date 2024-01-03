/*
 * @lc app=leetcode.cn id=222 lang=typescript
 *
 * [222] 完全二叉树的节点个数
 *
 * https://leetcode.cn/problems/count-complete-tree-nodes/description/
 *
 * algorithms
 * Easy (81.19%)
 * Likes:    1076
 * Dislikes: 0
 * Total Accepted:    344.8K
 * Total Submissions: 424.5K
 * Testcase Example:  '[1,2,3,4,5,6]'
 *
 * 给你一棵 完全二叉树 的根节点 root ，求出该树的节点个数。
 *
 * 完全二叉树
 * 的定义如下：在完全二叉树中，除了最底层节点可能没填满外，其余每层节点数都达到最大值，并且最下面一层的节点都集中在该层最左边的若干位置。若最底层为第 h
 * 层，则该层包含 1~ 2^h 个节点。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：root = [1,2,3,4,5,6]
 * 输出：6
 *
 *
 * 示例 2：
 *
 *
 * 输入：root = []
 * 输出：0
 *
 *
 * 示例 3：
 *
 *
 * 输入：root = [1]
 * 输出：1
 *
 *
 *
 *
 * 提示：
 *
 *
 * 树中节点的数目范围是[0, 5 * 10^4]
 * 0
 * 题目数据保证输入的树是 完全二叉树
 *
 *
 *
 *
 * 进阶：遍历树来统计节点是一种时间复杂度为 O(n) 的简单解决方案。你可以设计一个更快的算法吗？
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

function countNodes(root: TreeNode | null): number {
  /** 1. 普通二叉树的通用解法 */
  /** 递归法, 后序遍历为例 */
  // function count(node: TreeNode | null) {
  //   if (node === null) return 0;
  //   const leftTreeNodes = count(node.left);
  //   const rightTreeNodes = count(node.right);
  //   return leftTreeNodes + rightTreeNodes + 1;
  // }
  // return count(root);
  /** 迭代法, 层序(广度)遍历 */
  // const queue: TreeNode[] = [];
  // let count = 0;
  // root !== null && queue.push(root);
  // while (queue.length) {
  //   const size = queue.length;
  //   for (let i=0; i<size; i++) {
  //     count++;
  //     const cur = queue.shift();
  //     cur.left !== null && queue.push(cur.left);
  //     cur.right !== null && queue.push(cur.right);
  //   }
  // }
  // return count;

  /** 2. 完全二叉树的解法 */
  /** 满二叉树就是一种特殊的完全二叉树, 可以通过优化递归的终止条件减少递归的次数 */
  /** 后序遍历, 针对满二叉子树直接通过2^高度-1计算节点数 */
  function count(node: TreeNode | null) {
    if (node === null) return 0;
    let leftDepth = 1;
    let left = node.left;
    while (left) {
      left = left.left;
      leftDepth++;
    }
    let rightDepth = 1;
    let right = node.right;
    while (right) {
      right = right.right;
      rightDepth++;
    }
    // 满二叉树
    if (leftDepth === rightDepth) {
      return Math.pow(2, leftDepth) - 1;
    }

    // 后序遍历
    return count(node.left) + count(node.right) + 1;
  }
  return count(root);
}
// @lc code=end
