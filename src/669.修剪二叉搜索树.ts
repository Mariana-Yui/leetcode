/*
 * @lc app=leetcode.cn id=669 lang=typescript
 *
 * [669] 修剪二叉搜索树
 *
 * https://leetcode.cn/problems/trim-a-binary-search-tree/description/
 *
 * algorithms
 * Medium (67.19%)
 * Likes:    900
 * Dislikes: 0
 * Total Accepted:    146.1K
 * Total Submissions: 217.4K
 * Testcase Example:  '[1,0,2]\n1\n2'
 *
 * 给你二叉搜索树的根节点 root ，同时给定最小边界low 和最大边界 high。通过修剪二叉搜索树，使得所有节点的值在[low, high]中。修剪树
 * 不应该 改变保留在树中的元素的相对结构 (即，如果没有被移除，原有的父代子代关系都应当保留)。 可以证明，存在 唯一的答案 。
 *
 * 所以结果应当返回修剪好的二叉搜索树的新的根节点。注意，根节点可能会根据给定的边界发生改变。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：root = [1,0,2], low = 1, high = 2
 * 输出：[1,null,2]
 *
 *
 * 示例 2：
 *
 *
 * 输入：root = [3,0,4,null,2,null,null,1], low = 1, high = 3
 * 输出：[3,2,null,1]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 树中节点数在范围 [1, 10^4] 内
 * 0 <= Node.val <= 10^4
 * 树中每个节点的值都是 唯一 的
 * 题目数据保证输入是一棵有效的二叉搜索树
 * 0 <= low <= high <= 10^4
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

function trimBST(root: TreeNode | null, low: number, high: number): TreeNode | null {
  /** 递归法 */
  // function traversal(node: TreeNode | null, low: number, high: number): TreeNode | null {
  //   // 因为处理逻辑并不在终止条件, 所以遇到空节点直接返回
  //   if (node === null) return null;
  //   // 找到符合值区间的节点
  //   if (node.val < low) {
  //     const left = traversal(node.right, low, high);
  //     return left;
  //   }
  //   if (node.val > high) {
  //     const right = traversal(node.left, low, high);
  //     return right;
  //   }
  //   // 找到后赋值给上层的符合条件的节点
  //   node.left = traversal(node.left, low, high);
  //   node.right = traversal(node.right, low, high);
  //   return node;
  // }
  // return traversal(root, low, high);

  /** 迭代法 */
  // 1. 先找到符合值区间的根节点
  while (root !== null && (root.val < low || root.val > high)) {
    if (root.val < low) root = root.right;
    else if (root.val > high) root = root.left;
  }
  // 2. root.val已经在[low, high]中, 开始遍历左右子树
  let cur = root;
  // 左子树
  while (cur !== null && cur.left !== null) {
    if (cur.left.val < low) {
      cur.left = cur.left.right;
    } else {
      cur = cur.left;
    }
  }
  cur = root; // 重置
  // 右子树
  while (cur !== null && cur.right !== null) {
    if (cur.right.val > high) {
      cur.right = cur.right.left;
    } else {
      cur = cur.right;
    }
  }
  return root;
}
// @lc code=end
