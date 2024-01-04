/*
 * @lc app=leetcode.cn id=98 lang=typescript
 *
 * [98] 验证二叉搜索树
 *
 * https://leetcode.cn/problems/validate-binary-search-tree/description/
 *
 * algorithms
 * Medium (37.42%)
 * Likes:    2246
 * Dislikes: 0
 * Total Accepted:    824.3K
 * Total Submissions: 2.2M
 * Testcase Example:  '[2,1,3]'
 *
 * 给你一个二叉树的根节点 root ，判断其是否是一个有效的二叉搜索树。
 *
 * 有效 二叉搜索树定义如下：
 *
 *
 * 节点的左子树只包含 小于 当前节点的数。
 * 节点的右子树只包含 大于 当前节点的数。
 * 所有左子树和右子树自身必须也是二叉搜索树。
 *
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：root = [2,1,3]
 * 输出：true
 *
 *
 * 示例 2：
 *
 *
 * 输入：root = [5,1,4,null,null,3,6]
 * 输出：false
 * 解释：根节点的值是 5 ，但是右子节点的值是 4 。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 树中节点数目范围在[1, 10^4] 内
 * -2^31 <= Node.val <= 2^31 - 1
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

function isValidBST(root: TreeNode | null): boolean {
  /** 递归法, 这里演示错误写法哈哈 */
  /** 这种递归写法只判断了父子两层是二叉搜索树, 不能保证全局, 例如[5,4,6,null,null,3,7], 虽然每个父子节点都是二叉搜索树,但是整体并不是 */
  // function traversal(node: TreeNode | null): boolean {
  //   if (node === null) return true;
  //   if (node.left === null && node.right === null) return true;
  //   const leftBST = traversal(node.left);
  //   const rightBST = traversal(node.right);
  //   return (
  //     leftBST && rightBST && (!node.left || node.val > node.left.val) && (!node.right || node.val < node.right.val)
  //   );
  // }
  // return traversal(root);

  /** 转换思路 二叉搜索树的中序遍历输出是递增有序的, 可以转成数组 */
  const vector: number[] = [];
  function traversal(node: TreeNode | null): boolean {
    if (node === null) return;
    traversal(node.left);
    vector.push(node.val);
    traversal(node.right);
  }
  traversal(root);
  for (let i = 1; i < vector.length; i++) {
    if (vector[i] <= vector[i - 1]) {
      return false;
    }
  }
  return true;
}
// @lc code=end
