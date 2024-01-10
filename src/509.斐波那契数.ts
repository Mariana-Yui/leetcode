/*
 * @lc app=leetcode.cn id=509 lang=typescript
 *
 * [509] 斐波那契数
 *
 * https://leetcode.cn/problems/fibonacci-number/description/
 *
 * algorithms
 * Easy (65.93%)
 * Likes:    731
 * Dislikes: 0
 * Total Accepted:    640.7K
 * Total Submissions: 971.9K
 * Testcase Example:  '2'
 *
 * 斐波那契数 （通常用 F(n) 表示）形成的序列称为 斐波那契数列 。该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。也就是：
 *
 *
 * F(0) = 0，F(1) = 1
 * F(n) = F(n - 1) + F(n - 2)，其中 n > 1
 *
 *
 * 给定 n ，请计算 F(n) 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：n = 2
 * 输出：1
 * 解释：F(2) = F(1) + F(0) = 1 + 0 = 1
 *
 *
 * 示例 2：
 *
 *
 * 输入：n = 3
 * 输出：2
 * 解释：F(3) = F(2) + F(1) = 1 + 1 = 2
 *
 *
 * 示例 3：
 *
 *
 * 输入：n = 4
 * 输出：3
 * 解释：F(4) = F(3) + F(2) = 2 + 1 = 3
 *
 *
 *
 *
 * 提示：
 *
 *
 * 0 <= n <= 30
 *
 *
 */

// @lc code=start
function fib(n: number): number {
  // DP 动态规划入门题目 因为dp数组含义, dp数组初始化内容以及dp递推公式题干中都告诉了
  const dp: number[] = [];
  dp[0] = 0;
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];

  /** 递归 */
  // if (n === 0 || n === 1) return n;
  // return fib(n - 1) + fib(n - 2);
}
// @lc code=end
