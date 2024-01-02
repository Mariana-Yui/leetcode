/*
 * @lc app=leetcode.cn id=145 lang=typescript
 *
 * [145] 二叉树的后序遍历
 *
 * https://leetcode.cn/problems/binary-tree-postorder-traversal/description/
 *
 * algorithms
 * Easy (76.33%)
 * Likes:    1131
 * Dislikes: 0
 * Total Accepted:    707.6K
 * Total Submissions: 926.9K
 * Testcase Example:  '[1,null,2,3]'
 *
 * 给你一棵二叉树的根节点 root ，返回其节点值的 后序遍历 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：root = [1,null,2,3]
 * 输出：[3,2,1]
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
 * 树中节点的数目在范围 [0, 100] 内
 * -100 <= Node.val <= 100
 * 
 * 
 * 
 * 
 * 进阶：递归算法很简单，你可以通过迭代算法完成吗？
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

function postorderTraversal(root: TreeNode | null): number[] {
  /** 递归法 */
  // function traversal(root: TreeNode | null, vec: number[]): void {
  //   if (root === null) return;
  //   traversal(root.left, vec);
  //   traversal(root.right, vec);
  //   vec.push(root.val);
  // }
  // const vec: number[] = [];
  // traversal(root, vec);
  // return vec;

  /** 迭代法 */
  // 后序遍历实际上就是前序遍历的变种: 前序遍历为 中左右, 后序遍历可通过前序遍历调整左右顺序 -> 中右左 -> 数组反转 左右中 即后序遍历
  const stack: TreeNode[] = [];
  const result: number[] = [];
  let cur = root;
  while (cur !== null || stack.length) {
    if (cur !== null) {
      result.push(cur.val);
      stack.push(cur.left);
      cur = cur.right;
    } else {
      cur = stack.pop();
    }
  }
  return result.reverse();
};
// @lc code=end

