/*
 * @lc app=leetcode.cn id=518 lang=typescript
 *
 * [518] 零钱兑换 II
 *
 * https://leetcode.cn/problems/coin-change-ii/description/
 *
 * algorithms
 * Medium (70.89%)
 * Likes:    1213
 * Dislikes: 0
 * Total Accepted:    281.3K
 * Total Submissions: 396.7K
 * Testcase Example:  '5\n[1,2,5]'
 *
 * 给你一个整数数组 coins 表示不同面额的硬币，另给一个整数 amount 表示总金额。
 *
 * 请你计算并返回可以凑成总金额的硬币组合数。如果任何硬币组合都无法凑出总金额，返回 0 。
 *
 * 假设每一种面额的硬币有无限个。
 *
 * 题目数据保证结果符合 32 位带符号整数。
 *
 *
 *
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：amount = 5, coins = [1, 2, 5]
 * 输出：4
 * 解释：有四种方式可以凑成总金额：
 * 5=5
 * 5=2+2+1
 * 5=2+1+1+1
 * 5=1+1+1+1+1
 *
 *
 * 示例 2：
 *
 *
 * 输入：amount = 3, coins = [2]
 * 输出：0
 * 解释：只用面额 2 的硬币不能凑成总金额 3 。
 *
 *
 * 示例 3：
 *
 *
 * 输入：amount = 10, coins = [10]
 * 输出：1
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * 1
 * coins 中的所有值 互不相同
 * 0
 *
 *
 */

// @lc code=start
function change(amount: number, coins: number[]): number {
  // DP 完全背包问题
  /**
   * 看到题干关键词 无限 就知道是经典完全背包问题
   */
  const dp: number[] = new Array(amount + 1).fill(0);
  dp[0] = 1;
  for (let i = 0; i < coins.length; i++) {
    for (let j = coins[i]; j < dp.length; j++) {
      dp[j] += dp[j - coins[i]];
    }
  }
  /** 排列数 */
  // for (let j = 0; j < dp.length; j++) {
  //   for (let i = 0; i < coins.length; i++) {
  //     if (j - coins[i] >= 0) {
  //       dp[j] += dp[j - coins[i]];
  //       console.log(`dp: ${dp}, i: ${i}, j: ${j}, dp[j]: ${dp[j]}, coins[i]: ${coins[i]}`);
  //     }
  //   }
  // }
  return dp[amount];
}
// @lc code=end
