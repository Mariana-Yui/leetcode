/*
 * @lc app=leetcode.cn id=70 lang=typescript
 *
 * [70] 爬楼梯
 *
 * https://leetcode.cn/problems/climbing-stairs/description/
 *
 * algorithms
 * Easy (54.31%)
 * Likes:    3412
 * Dislikes: 0
 * Total Accepted:    1.3M
 * Total Submissions: 2.5M
 * Testcase Example:  '2'
 *
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
 *
 * 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：n = 2
 * 输出：2
 * 解释：有两种方法可以爬到楼顶。
 * 1. 1 阶 + 1 阶
 * 2. 2 阶
 *
 * 示例 2：
 *
 *
 * 输入：n = 3
 * 输出：3
 * 解释：有三种方法可以爬到楼顶。
 * 1. 1 阶 + 1 阶 + 1 阶
 * 2. 1 阶 + 2 阶
 * 3. 2 阶 + 1 阶
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= n <= 45
 *
 *
 */

// @lc code=start
function climbStairs(n: number): number {
  // DP
  /**
   * 1. dp数组及其下标含义: i第i阶楼梯 dp[i]到达第i阶楼梯的走法
   * 2. dp递推公式: 第N阶楼梯的走法 = 走到第N-1阶楼梯再走1阶 + 走到第N-2阶楼梯再走2阶 dp[i] = dp[i-1] + dp[i-2]
   * 3. dp初始化: 第1阶走法有1种, 第2阶走法有2种(1+1, 2)
   * 4. 确定遍历顺序: 自底向上走楼梯, 所以是从前往后
   * 分析完发现其实就是没有dp[0]的斐波那契数列
   */
  const dp: number[] = [];
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}
// @lc code=end
