/*
 * @lc app=leetcode.cn id=94 lang=typescript
 *
 * [94] 二叉树的中序遍历
 *
 * https://leetcode.cn/problems/binary-tree-inorder-traversal/description/
 *
 * algorithms
 * Easy (76.34%)
 * Likes:    1992
 * Dislikes: 0
 * Total Accepted:    1.3M
 * Total Submissions: 1.7M
 * Testcase Example:  '[1,null,2,3]'
 *
 * 给定一个二叉树的根节点 root ，返回 它的 中序 遍历 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：root = [1,null,2,3]
 * 输出：[1,3,2]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：root = []
 * 输出：[]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：root = [1]
 * 输出：[1]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 树中节点数目在范围 [0, 100] 内
 * -100 <= Node.val <= 100
 * 
 * 
 * 
 * 
 * 进阶: 递归算法很简单，你可以通过迭代算法完成吗？
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

function inorderTraversal(root: TreeNode | null): number[] {
  /** 递归法 */
  // function traversal(root: TreeNode | null, vec: number[]): void {
  //   if (root === null) return;
  //   traversal(root.left, vec);
  //   vec.push(root.val);
  //   traversal(root.right, vec);
  // }
  // const vec: number[] = [];
  // traversal(root, vec);
  // return vec;

  /** 迭代法 */
  // const stack: TreeNode[] = [];
  // const result: number[] = [];
  // let cur = root;
  // while (cur !== null || stack.length) {
  //   if (cur !== null) {
  //     stack.push(cur);
  //     cur = cur.left;
  //   } else {
  //     cur = stack.pop();
  //     result.push(cur.val);
  //     cur = cur.right;
  //   }
  // }
  // return result;
  const stack: Array<TreeNode|null> = [];
  const result: number[] = [];
  if (root !== null) stack.push(root);
  while (stack.length) {
    let cur = stack.pop();
    if (cur !== null) {
      if (cur.right !== null) stack.push(cur.right);
      stack.push(cur);
      stack.push(null);
      if (cur.left !== null) stack.push(cur.left);
    } else {
      cur = stack.pop();
      result.push(cur.val);
    }
  }
  return result;
};
// @lc code=end

