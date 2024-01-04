/*
 * @lc app=leetcode.cn id=106 lang=typescript
 *
 * [106] 从中序与后序遍历序列构造二叉树
 *
 * https://leetcode.cn/problems/construct-binary-tree-from-inorder-and-postorder-traversal/description/
 *
 * algorithms
 * Medium (71.77%)
 * Likes:    1159
 * Dislikes: 0
 * Total Accepted:    329.8K
 * Total Submissions: 459.4K
 * Testcase Example:  '[9,3,15,20,7]\n[9,15,7,20,3]'
 *
 * 给定两个整数数组 inorder 和 postorder ，其中 inorder 是二叉树的中序遍历， postorder
 * 是同一棵树的后序遍历，请你构造并返回这颗 二叉树 。
 *
 *
 *
 * 示例 1:
 *
 *
 * 输入：inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
 * 输出：[3,9,20,null,null,15,7]
 *
 *
 * 示例 2:
 *
 *
 * 输入：inorder = [-1], postorder = [-1]
 * 输出：[-1]
 *
 *
 *
 *
 * 提示:
 *
 *
 * 1 <= inorder.length <= 3000
 * postorder.length == inorder.length
 * -3000 <= inorder[i], postorder[i] <= 3000
 * inorder 和 postorder 都由 不同 的值组成
 * postorder 中每一个值都在 inorder 中
 * inorder 保证是树的中序遍历
 * postorder 保证是树的后序遍历
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

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
  function getRootNode(inorder: number[], postorder: number[]): TreeNode | null {
    if (!inorder.length && !postorder.length) return null;
    const root = new TreeNode(postorder[postorder.length - 1]);
    // if (postorder.length === 1) return root;
    let delimiter = 0;
    for (; delimiter < inorder.length; delimiter++) {
      if (inorder[delimiter] === root.val) break;
    }
    /** 难点在于处理好每个子树的中序列表和后续列表的边界条件 */
    const leftInorder = inorder.slice(0, delimiter);
    const rightInorder = inorder.slice(delimiter + 1);

    const leftPostorder = postorder.slice(0, leftInorder.length);
    const rightPostorder = postorder.slice(leftInorder.length, postorder.length - 1);

    root.left = getRootNode(leftInorder, leftPostorder);
    root.right = getRootNode(rightInorder, rightPostorder);
    return root;
  }

  return getRootNode(inorder, postorder);
}
// @lc code=end
