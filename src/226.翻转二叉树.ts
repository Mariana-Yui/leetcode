/*
 * @lc app=leetcode.cn id=226 lang=typescript
 *
 * [226] 翻转二叉树
 *
 * https://leetcode.cn/problems/invert-binary-tree/description/
 *
 * algorithms
 * Easy (79.86%)
 * Likes:    1752
 * Dislikes: 0
 * Total Accepted:    785.7K
 * Total Submissions: 983.4K
 * Testcase Example:  '[4,2,7,1,3,6,9]'
 *
 * 给你一棵二叉树的根节点 root ，翻转这棵二叉树，并返回其根节点。
 *
 *
 *
 * 示例 1：
 *
 *
 *
 *
 * 输入：root = [4,2,7,1,3,6,9]
 * 输出：[4,7,2,9,6,3,1]
 *
 *
 * 示例 2：
 *
 *
 *
 *
 * 输入：root = [2,1,3]
 * 输出：[2,3,1]
 *
 *
 * 示例 3：
 *
 *
 * 输入：root = []
 * 输出：[]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 树中节点数目范围在 [0, 100] 内
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

function invertTree(root: TreeNode | null): TreeNode | null {
  function swap(node: TreeNode): void {
    const temporary = node.left;
    node.left = node.right;
    node.right = temporary;
  }
  /** 递归法 */
  // function traversal(root: TreeNode | null): void {
  //   if (root === null) return;
  //   swap(root!);
  //   traversal(root.left);
  //   traversal(root.right);
  // }
  // traversal(root);

  /** 深度遍历 */
  // const stack: Array<TreeNode | null> = [];
  // root !== null && stack.push(root);
  // while (stack.length) {
  //   let cur = stack.pop();
  //   if (cur !== null) {
  //     cur.right !== null && stack.push(cur.right);
  //     cur.left !== null && stack.push(cur.left);
  //     stack.push(cur);
  //     stack.push(null);
  //   } else {
  //     cur = stack.pop();
  //     swap(cur);
  //   }
  // }

  /** 广度遍历/层序遍历 */
  const queue: TreeNode[] = [];
  root !== null && queue.push(root);
  while (queue.length) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      swap(node);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }

  return root;
}
// @lc code=end
