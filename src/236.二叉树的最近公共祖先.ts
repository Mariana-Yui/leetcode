/*
 * @lc app=leetcode.cn id=236 lang=typescript
 *
 * [236] 二叉树的最近公共祖先
 *
 * https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree/description/
 *
 * algorithms
 * Medium (70.07%)
 * Likes:    2559
 * Dislikes: 0
 * Total Accepted:    629.3K
 * Total Submissions: 896.9K
 * Testcase Example:  '[3,5,1,6,2,0,8,null,null,7,4]\n5\n1'
 *
 * 给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。
 *
 * 百度百科中最近公共祖先的定义为：“对于有根树 T 的两个节点 p、q，最近公共祖先表示为一个节点 x，满足 x 是 p、q 的祖先且 x
 * 的深度尽可能大（一个节点也可以是它自己的祖先）。”
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
 * 输出：3
 * 解释：节点 5 和节点 1 的最近公共祖先是节点 3 。
 *
 *
 * 示例 2：
 *
 *
 * 输入：root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
 * 输出：5
 * 解释：节点 5 和节点 4 的最近公共祖先是节点 5 。因为根据定义最近公共祖先节点可以为节点本身。
 *
 *
 * 示例 3：
 *
 *
 * 输入：root = [1,2], p = 1, q = 2
 * 输出：1
 *
 *
 *
 *
 * 提示：
 *
 *
 * 树中节点数目在范围 [2, 10^5] 内。
 * -10^9
 * 所有 Node.val 互不相同 。
 * p != q
 * p 和 q 均存在于给定的二叉树中。
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

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  /**
   * 首先审题, 二叉树中节点值不重复且必定含有p, q
   * 分为两种情况: 1. p,q分别位于公共祖先的左右子树 2. p为q的祖先 or q为p的祖先
   */
  function traversal(node: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode {
    // 终止条件, 遇到p,q就返回
    // 当时看的时候有疑问🤔, 如果是第二种情况, 如果p是q的祖先, 遇到p返回那不是不会遍历到q吗?
    // 是这样的, 第二种情况其实不需要遍历到q, 因为结合题干可知(不重复+必定存在), 如果遍历完都不见q那不就代表q是p的子节点.
    if (node === p || node === q || node === null) return node;
    // 后序遍历 公共祖先需要自底向上找
    const left = traversal(node.left, p, q);
    const right = traversal(node.right, p, q);

    // 第一种情况
    if (left !== null && right !== null) {
      return node;
    } else if (left === null && right !== null) {
      return right;
    } else if (left !== null && right === null) {
      return left;
    } else {
      return null;
    }
  }

  return traversal(root, p, q);
}
// @lc code=end
