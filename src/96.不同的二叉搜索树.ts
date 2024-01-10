/*
 * @lc app=leetcode.cn id=96 lang=typescript
 *
 * [96] 不同的二叉搜索树
 *
 * https://leetcode.cn/problems/unique-binary-search-trees/description/
 *
 * algorithms
 * Medium (70.93%)
 * Likes:    2433
 * Dislikes: 0
 * Total Accepted:    412.9K
 * Total Submissions: 582K
 * Testcase Example:  '3'
 *
 * 给你一个整数 n ，求恰由 n 个节点组成且节点值从 1 到 n 互不相同的 二叉搜索树 有多少种？返回满足题意的二叉搜索树的种数。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：n = 3
 * 输出：5
 *
 *
 * 示例 2：
 *
 *
 * 输入：n = 1
 * 输出：1
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1
 *
 *
 */

// @lc code=start
function numTrees(n: number): number {
  // DP
  /**
   * 1. dp[i]的定义: i个节点组成的二叉搜索树集合
   * 2. dp的递推公式: 首先明确这是个二叉搜索树, 根节点可以说1->n的任何值, 当根节点值确定时, 左右子树的节点数量也是确定的
   * 例如 根节点值为1时, 左子树0个节点, 右子树n-1个节点; 根节点值为2时, 左子树1个节点, 右子树n-2个节点...以此类推
   * 得到 dp[i] += (dp[j-1] * dp[i-j]) (j从1 -> i)
   * 3. dp的初始化: dp[0] = 1(空树也算棵树) dp[1] = 1 dp[2] = 2
   * 4. 遍历: 都可以, i从小到大,j就从小到大; 反之亦然
   */
  const dp: number[] = [];
  dp[0] = 1;
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    dp[i] = 0;
    for (let j = 0; j <= i - 1; j++) {
      dp[i] += dp[j] * dp[i - j - 1];
    }
  }
  return dp[n];
}
// @lc code=end
