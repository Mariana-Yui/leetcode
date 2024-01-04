/*
 * @lc app=leetcode.cn id=530 lang=typescript
 *
 * [530] 二叉搜索树的最小绝对差
 *
 * https://leetcode.cn/problems/minimum-absolute-difference-in-bst/description/
 *
 * algorithms
 * Easy (63.08%)
 * Likes:    532
 * Dislikes: 0
 * Total Accepted:    214.7K
 * Total Submissions: 340.5K
 * Testcase Example:  '[4,2,6,1,3]'
 *
 * 给你一个二叉搜索树的根节点 root ，返回 树中任意两不同节点值之间的最小差值 。
 *
 * 差值是一个正数，其数值等于两值之差的绝对值。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：root = [4,2,6,1,3]
 * 输出：1
 *
 *
 * 示例 2：
 *
 *
 * 输入：root = [1,0,48,null,null,12,49]
 * 输出：1
 *
 *
 *
 *
 * 提示：
 *
 *
 * 树中节点的数目范围是 [2, 10^4]
 * 0 <= Node.val <= 10^5
 *
 *
 *
 *
 * 注意：本题与 783
 * https://leetcode-cn.com/problems/minimum-distance-between-bst-nodes/ 相同
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

function getMinimumDifference(root: TreeNode | null): number {
  /** 二叉搜索树 -> 中序遍历有序数组 -> 相邻两数差值 = 送分题 */
  // const vec: number[] = [];
  // function traversal(node: TreeNode | null): void {
  //   if (node === null) return;
  //   traversal(node.left);
  //   vec.push(node.val);
  //   traversal(node.right);
  // }
  // traversal(root);
  // let min = Number.MAX_SAFE_INTEGER;
  // for (let i = 1; i < vec.length; i++) {
  //   min = Math.min(Math.abs(vec[i] - vec[i - 1]), min);
  // }
  // return min;

  /** 直接在递归中比较, 使用前后指针, 就不用申请额外控件递归完再遍历 */
  // let pre: TreeNode | null = null,
  //   min: number | null = Number.MAX_SAFE_INTEGER;
  // function traversal(node: TreeNode | null) {
  //   if (node === null) return;
  //   traversal(node.left);
  //   if (pre !== null) min = Math.min(min, Math.abs(pre.val - node.val));
  //   pre = node; // 指针往前移动
  //   traversal(node.right);
  // }
  // traversal(root);
  // return min;

  /** 中序遍历迭代 模拟递归 */
  const stack: Array<TreeNode | null> = [];
  root !== null && stack.push(root);
  let pre: TreeNode | null = null,
    min: number = Number.MAX_SAFE_INTEGER;
  while (stack.length) {
    let cur = stack.pop();
    if (cur !== null) {
      // 中序遍历
      cur.right && stack.push(cur.right);
      stack.push(cur);
      stack.push(null);
      cur.left && stack.push(cur.left);
    } else {
      cur = stack.pop();
      if (pre !== null) min = Math.min(min, Math.abs(pre.val - cur.val));
      pre = cur;
    }
  }
  return min;
}
// @lc code=end
