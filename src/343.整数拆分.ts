/*
 * @lc app=leetcode.cn id=343 lang=typescript
 *
 * [343] 整数拆分
 *
 * https://leetcode.cn/problems/integer-break/description/
 *
 * algorithms
 * Medium (62.69%)
 * Likes:    1330
 * Dislikes: 0
 * Total Accepted:    300.7K
 * Total Submissions: 479.2K
 * Testcase Example:  '2'
 *
 * 给定一个正整数 n ，将其拆分为 k 个 正整数 的和（ k >= 2 ），并使这些整数的乘积最大化。
 *
 * 返回 你可以获得的最大乘积 。
 *
 *
 *
 * 示例 1:
 *
 *
 * 输入: n = 2
 * 输出: 1
 * 解释: 2 = 1 + 1, 1 × 1 = 1。
 *
 * 示例 2:
 *
 *
 * 输入: n = 10
 * 输出: 36
 * 解释: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36。
 *
 *
 *
 * 提示:
 *
 *
 * 2 <= n <= 58
 *
 *
 */

// @lc code=start
function integerBreak(n: number): number {
  // DP
  /**
   * 1. dp[i]的含义: n拆成多数累加->累乘得到的最大值
   * 2. dp的递推公式: 比较dp[i]当前值, 由两数j*(i-j)的积, 由>=2数相乘j*dp[i-j]得到的积 三者哪个值最大
   * 这里可能有疑惑为什么不是dp[j]*dp[i-j]?
   * 在不知道几个拆分数相乘能够得到最大值时, 所有的可能性一定是>=2个数相乘, 如果使用dp[j]*dp[i-j]则是>=4个数相乘, 缺失了部分情况
   * 反例: n = 8, j*d[i-j] -> 3*2*3 dp[j]*dp[i-j] -> (1*2)*(2*3)
   * 3. dp初始化: 明确dp[0]和dp[1]是没有意义的 所以输入值区间也规定>=2, dp[2] = (1*1) = 1
   * 4. 遍历: 从前往后
   */
  const dp: number[] = new Array(n + 1).fill(0);
  dp[2] = 1; // 1*1
  for (let i = 3; i <= n; i++) {
    // 可优化成 j<=Math.floor(i/2)
    /**
     * 一个数拆成多数累加, 再由多数累乘得到最大值一定多个近似数累乘得到的积最大
     * 例如 6 -> 3*3, 10 -> 3*3*4
     * 不给出数学推导了
     */
    for (let j = 1; j < i - 1; j++) {
      dp[i] = Math.max(dp[i], j * (i - j), j * dp[i - j]);
    }
  }
  return dp[n];
}
// @lc code=end
