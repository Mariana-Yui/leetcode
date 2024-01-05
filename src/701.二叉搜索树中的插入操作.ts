/*
 * @lc app=leetcode.cn id=701 lang=typescript
 *
 * [701] 二叉搜索树中的插入操作
 *
 * https://leetcode.cn/problems/insert-into-a-binary-search-tree/description/
 *
 * algorithms
 * Medium (70.48%)
 * Likes:    542
 * Dislikes: 0
 * Total Accepted:    219.9K
 * Total Submissions: 312.1K
 * Testcase Example:  '[4,2,7,1,3]\n5'
 *
 * 给定二叉搜索树（BST）的根节点 root 和要插入树中的值 value ，将值插入二叉搜索树。 返回插入后二叉搜索树的根节点。 输入数据 保证
 * ，新值和原始二叉搜索树中的任意节点值都不同。
 *
 * 注意，可能存在多种有效的插入方式，只要树在插入后仍保持为二叉搜索树即可。 你可以返回 任意有效的结果 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：root = [4,2,7,1,3], val = 5
 * 输出：[4,2,7,1,3,5]
 * 解释：另一个满足题目要求可以通过的树是：
 *
 *
 *
 * 示例 2：
 *
 *
 * 输入：root = [40,20,60,10,30,50,70], val = 25
 * 输出：[40,20,60,10,30,50,70,null,null,25]
 *
 *
 * 示例 3：
 *
 *
 * 输入：root = [4,2,7,1,3,null,null,null,null,null,null], val = 5
 * 输出：[4,2,7,1,3,5]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 树中的节点数将在 [0, 10^4]的范围内。
 * -10^8 <= Node.val <= 10^8
 * 所有值 Node.val 是 独一无二 的。
 * -10^8 <= val <= 10^8
 * 保证 val 在原始BST中不存在。
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

function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
  /** 重构? 不重构捏 */
  /** 递归法 */
  // function traversal(node: TreeNode | null, val: number): TreeNode {
  //   if (node === null) return new TreeNode(val);
  //   if (val < node.val) {
  //     node.left = traversal(node.left, val);
  //   } else if (val > node.val) {
  //     node.right = traversal(node.right, val);
  //   }
  //   return node;
  // }
  // return traversal(root, val);

  /** 迭代法 */
  let pre: TreeNode | null = null;
  let cur: TreeNode | null = root;
  while (cur !== null) {
    pre = cur;
    if (val < cur.val) {
      cur = cur.left;
    } else if (val > cur.val) {
      cur = cur.right;
    }
  }
  const node = new TreeNode(val);
  if (pre === null) return node;
  if (val < pre.val) pre.left = node;
  else pre.right = node;
  return root;
}
// @lc code=end
