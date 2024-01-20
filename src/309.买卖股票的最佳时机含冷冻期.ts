/*
 * @lc app=leetcode.cn id=309 lang=typescript
 *
 * [309] 买卖股票的最佳时机含冷冻期
 *
 * https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-with-cooldown/description/
 *
 * algorithms
 * Medium (64.71%)
 * Likes:    1690
 * Dislikes: 0
 * Total Accepted:    302.5K
 * Total Submissions: 467.4K
 * Testcase Example:  '[1,2,3,0,2]'
 *
 * 给定一个整数数组prices，其中第  prices[i] 表示第 i 天的股票价格 。​
 *
 * 设计一个算法计算出最大利润。在满足以下约束条件下，你可以尽可能地完成更多的交易（多次买卖一支股票）:
 *
 *
 * 卖出股票后，你无法在第二天买入股票 (即冷冻期为 1 天)。
 *
 *
 * 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
 *
 *
 *
 * 示例 1:
 *
 *
 * 输入: prices = [1,2,3,0,2]
 * 输出: 3
 * 解释: 对应的交易状态为: [买入, 卖出, 冷冻期, 买入, 卖出]
 *
 * 示例 2:
 *
 *
 * 输入: prices = [1]
 * 输出: 0
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= prices.length <= 5000
 * 0 <= prices[i] <= 1000
 *
 *
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  // DP
  /**
   * 引入冷冻期的概念, 列出所有状态
   * 1. 持有中 当天买入 or 一直持有
   * // 正常不持有是不需要分开讨论的, 由于引入的冷冻期所以分开讨论
   * 2. 不持有 前一天就不持有 or 前一天是冷冻期
   * 3. 不持有 当天卖出
   * 4. 冷冻期
   */
  const days = prices.length;
  const dp: number[][] = new Array(days);
  for (let i = 0; i < dp.length; i++) dp[i] = new Array(4).fill(0);
  dp[0] = [-prices[0], 0, 0, 0];
  for (let i = 1; i < dp.length; i++) {
    // 一直持有 or 前一天不持有当天买入 or 前一天冷冻期当天买入
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] - prices[i], dp[i - 1][3] - prices[i]);
    // 前一天不持有 or 前一天你冷冻期
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][3]);
    // 当天卖出
    dp[i][2] = dp[i - 1][0] + prices[i];
    // 冷冻期
    dp[i][3] = dp[i - 1][2];
  }
  return Math.max(dp[days - 1][1], dp[days - 1][2], dp[days - 1][3]);

  // 另一种解题思路
  /**
   * 二维数组
   * 第一维第i天 第二维持有/不持有
   * 首先看不持有的情况:
   * 不持有不用管冷冻期: 保持昨天不持有 or 当天卖出
   * 持有的情况:
   * 昨天就持有保持 dp[i-1][0]
   * 当天买入 如果昨天是冷冻期 那么应该用前天的不持有 dp[i-2][1] - prices[i]
   * 当天买入 如果昨天不是冷冻期 那么按理说可以用昨天的不持有 但是既然今天可以买入说明今天不是冷冻期 可以推出昨天并没有卖出股票
   * 分析不持有的情况可以得出如果当天没有卖出则保持昨天不持有 即 dp[i-1][1] == dp[i-2][1]
   */
  // const dp: number[][] = new Array(prices.length);
  // for (let i = 0; i < dp.length; i++) dp[i] = new Array(2);
  // dp[0] = [-prices[0], 0];
  // dp[1] = [Math.max(dp[0][0], dp[0][1] - prices[1]), Math.max(dp[0][1], dp[0][0] + prices[1])];
  // for (let i = 2; i < dp.length; i++) {
  //   dp[i][0] = Math.max(dp[i - 1][0], dp[i - 2][1] - prices[i]);
  //   dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i]);
  // }
  // return dp[prices.length - 1][1];
}
// @lc code=end
