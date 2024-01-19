/*
 * @lc app=leetcode.cn id=122 lang=typescript
 *
 * [122] 买卖股票的最佳时机 II
 *
 * https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-ii/description/
 *
 * algorithms
 * Medium (72.94%)
 * Likes:    2396
 * Dislikes: 0
 * Total Accepted:    1M
 * Total Submissions: 1.4M
 * Testcase Example:  '[7,1,5,3,6,4]'
 *
 * 给你一个整数数组 prices ，其中 prices[i] 表示某支股票第 i 天的价格。
 *
 * 在每一天，你可以决定是否购买和/或出售股票。你在任何时候 最多 只能持有 一股 股票。你也可以先购买，然后在 同一天 出售。
 *
 * 返回 你能获得的 最大 利润 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：prices = [7,1,5,3,6,4]
 * 输出：7
 * 解释：在第 2 天（股票价格 = 1）的时候买入，在第 3 天（股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5 - 1 = 4
 * 。
 * 随后，在第 4 天（股票价格 = 3）的时候买入，在第 5 天（股票价格 = 6）的时候卖出, 这笔交易所能获得利润 = 6 - 3 = 3 。
 * ⁠    总利润为 4 + 3 = 7 。
 *
 * 示例 2：
 *
 *
 * 输入：prices = [1,2,3,4,5]
 * 输出：4
 * 解释：在第 1 天（股票价格 = 1）的时候买入，在第 5 天 （股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5 - 1 = 4
 * 。
 * 总利润为 4 。
 *
 * 示例 3：
 *
 *
 * 输入：prices = [7,6,4,3,1]
 * 输出：0
 * 解释：在这种情况下, 交易无法获得正利润，所以不参与交易可以获得最大利润，最大利润为 0 。
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= prices.length <= 3 * 10^4
 * 0 <= prices[i] <= 10^4
 *
 *
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  // 贪心 局部最优第i天买入第i+1天正收益 全局最优收集所有正收益获得最大利润
  // let result = 0;
  // for (let i = 1; i < prices.length; i++) {
  //   result += Math.max(prices[i] - prices[i - 1], 0); // 负收益直接忽略因为不会买入
  // }
  // return result;

  // DP 和121.唯一的区别是多次买入
  /**
   * 实现上不同体现在递推公式上, 第i天买入的金额初始金额不再是0, 是第i-1天不持有的最大金额
   */
  const dp: number[][] = new Array(prices.length);
  for (let i = 0; i < dp.length; i++) dp[i] = [0, 0];
  dp[0] = [-prices[0], 0];
  for (let i = 1; i < dp.length; i++) {
    dp[i][0] = Math.max(dp[i - 1][1] - prices[i], dp[i - 1][0]);
    dp[i][1] = Math.max(dp[i - 1][0] + prices[i], dp[i - 1][1]);
  }
  return dp[dp.length - 1][1];

  // 优化 滚动数组
  // const dp: number[][] = [
  //   [-prices[0], 0],
  //   [0, 0]
  // ];
  // for (let i = 1; i < prices.length; i++) {
  //   dp[i % 2][0] = Math.max(dp[(i - 1) % 2][0], dp[(i - 1) % 2][1] - prices[i]);
  //   dp[i % 2][1] = Math.max(dp[(i - 1) % 2][1], dp[(i - 1) % 2][0] + prices[i]);
  // }
  // return dp[(prices.length - 1) % 2][1];
}
// @lc code=end
