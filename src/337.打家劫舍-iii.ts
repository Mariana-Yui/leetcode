/*
 * @lc app=leetcode.cn id=337 lang=typescript
 *
 * [337] 打家劫舍 III
 *
 * https://leetcode.cn/problems/house-robber-iii/description/
 *
 * algorithms
 * Medium (61.52%)
 * Likes:    1934
 * Dislikes: 0
 * Total Accepted:    328.2K
 * Total Submissions: 533.5K
 * Testcase Example:  '[3,2,3,null,3,null,1]'
 *
 * 小偷又发现了一个新的可行窃的地区。这个地区只有一个入口，我们称之为 root 。
 *
 * 除了 root 之外，每栋房子有且只有一个“父“房子与之相连。一番侦察之后，聪明的小偷意识到“这个地方的所有房屋的排列类似于一棵二叉树”。 如果
 * 两个直接相连的房子在同一天晚上被打劫 ，房屋将自动报警。
 *
 * 给定二叉树的 root 。返回 在不触动警报的情况下 ，小偷能够盗取的最高金额 。
 *
 *
 *
 * 示例 1:
 *
 *
 *
 *
 * 输入: root = [3,2,3,null,3,null,1]
 * 输出: 7
 * 解释: 小偷一晚能够盗取的最高金额 3 + 3 + 1 = 7
 *
 * 示例 2:
 *
 *
 *
 *
 * 输入: root = [3,4,5,1,3,null,1]
 * 输出: 9
 * 解释: 小偷一晚能够盗取的最高金额 4 + 5 = 9
 *
 *
 *
 *
 * 提示：
 *
 *
 *
 *
 * 树的节点数在 [1, 10^4] 范围内
 * 0 <= Node.val <= 10^4
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

function rob(root: TreeNode | null): number {
  // 树形DP dp+递归
  /**
   * 具体的处理逻辑和之前的打家劫舍是一致的
   * 围绕判断偷还是不偷第i家计算最大值
   * dp[i]通过递归的返回值表示, 这里返回值是长度为2的数组, 0是不偷, 1是偷
   * 后序遍历
   */
  function robTree(root: TreeNode | null): number[] {
    if (root === null) return [0, 0]; // dp[0]
    const left = robTree(root.left);
    const right = robTree(root.right);
    // 偷, 意味着不考虑偷左右子节点
    const val1 = root.val + left[0] + right[0];
    // 不偷, 意味着考虑偷左右子节点
    const val2 = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
    return [val2, val1];
  }
  const [val1, val2] = robTree(root);
  return Math.max(val1, val2);
}
// @lc code=end
