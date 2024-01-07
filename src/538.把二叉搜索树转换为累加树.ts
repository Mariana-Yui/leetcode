/*
 * @lc app=leetcode.cn id=538 lang=typescript
 *
 * [538] 把二叉搜索树转换为累加树
 *
 * https://leetcode.cn/problems/convert-bst-to-greater-tree/description/
 *
 * algorithms
 * Medium (77.02%)
 * Likes:    973
 * Dislikes: 0
 * Total Accepted:    261.2K
 * Total Submissions: 338.9K
 * Testcase Example:  '[4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]'
 *
 * 给出二叉 搜索 树的根节点，该树的节点值各不相同，请你将其转换为累加树（Greater Sum Tree），使每个节点 node
 * 的新值等于原树中大于或等于 node.val 的值之和。
 *
 * 提醒一下，二叉搜索树满足下列约束条件：
 *
 *
 * 节点的左子树仅包含键 小于 节点键的节点。
 * 节点的右子树仅包含键 大于 节点键的节点。
 * 左右子树也必须是二叉搜索树。
 *
 *
 * 注意：本题和 1038:
 * https://leetcode-cn.com/problems/binary-search-tree-to-greater-sum-tree/
 * 相同
 *
 *
 *
 * 示例 1：
 *
 *
 *
 * 输入：[4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]
 * 输出：[30,36,21,36,35,26,15,null,null,null,33,null,null,null,8]
 *
 *
 * 示例 2：
 *
 * 输入：root = [0,null,1]
 * 输出：[1,null,1]
 *
 *
 * 示例 3：
 *
 * 输入：root = [1,0,2]
 * 输出：[3,3,2]
 *
 *
 * 示例 4：
 *
 * 输入：root = [3,2,4,1]
 * 输出：[7,9,4,10]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 树中的节点数介于 0 和 10^4^ 之间。
 * 每个节点的值介于 -10^4 和 10^4 之间。
 * 树中的所有值 互不相同 。
 * 给定的树为二叉搜索树。
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

function convertBST(root: TreeNode | null): TreeNode | null {
  // 题目挺唬人, 其实就是反中序遍历, 右中左, 每个节点的值累加之前遍历所有值之和
  /** 递归法 */
  // let sum: number = 0;
  // function traversal(root: TreeNode | null): TreeNode {
  //   if (root === null) return null;
  //   traversal(root.right);
  //   sum += root.val;
  //   root.val = sum;
  //   traversal(root.left);
  //   return root;
  // }
  // return traversal(root);

  /** 迭代法 */
  const stack: Array<TreeNode | null> = [];
  root !== null && stack.push(root);
  let sum = 0;
  while (stack.length) {
    let cur = stack.pop();
    if (cur !== null) {
      cur.left !== null && stack.push(cur.left);
      stack.push(cur);
      stack.push(null);
      cur.right !== null && stack.push(cur.right);
    } else {
      cur = stack.pop();
      sum += cur.val;
      cur.val = sum;
    }
  }
  return root;
}
// @lc code=end
