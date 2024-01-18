/*
 * @lc app=leetcode.cn id=121 lang=typescript
 *
 * [121] 买卖股票的最佳时机
 *
 * https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/description/
 *
 * algorithms
 * Easy (57.71%)
 * Likes:    3363
 * Dislikes: 0
 * Total Accepted:    1.3M
 * Total Submissions: 2.2M
 * Testcase Example:  '[7,1,5,3,6,4]'
 *
 * 给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。
 *
 * 你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。
 *
 * 返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：[7,1,5,3,6,4]
 * 输出：5
 * 解释：在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
 * ⁠    注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。
 *
 *
 * 示例 2：
 *
 *
 * 输入：prices = [7,6,4,3,1]
 * 输出：0
 * 解释：在这种情况下, 没有交易完成, 所以最大利润为 0。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * 0
 *
 *
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  // 贪心 左边取最小右边取最大
  // let result = 0; // 初始化最小值
  // let min = Number.MAX_SAFE_INTEGER;
  // for (let i = 0; i < prices.length; i++) {
  //   min = Math.min(min, prices[i]);
  //   result = Math.max(result, prices[i] - min);
  // }
  // return result;
  // DP
  /**
   * 1. dp[i]及下标定义: 第i天拥有的金额, 长度为2的数组, 下标0为持有, 下标1为不持有
   * 2. dp递推公式:
   * 分两种情况讨论: 第i天持有股票 or 第i天不持有股票
   * 持有股票又分为第i天买入 or 第i天之前就已买入 -> max{-price[i], dp[i-1]}
   * 不持有股票又分为第i天卖出 or 第i天之前就已卖出 -> max{dp[i-1]+price[i], dp[i-1]}
   * dp[i] = [Math.max(-price[i], dp[i-1]), Math.max(dp[i-1]+price[i], dp[i])]
   * 3. dp初始化: 第0天如果持有只能是买入, 如果不持有就是0
   * 4. 遍历: 从前往后
   */
  const dp: number[][] = new Array(prices.length);
  for (let i = 0; i < dp.length; i++) dp[i] = [0, 0];
  dp[0] = [-prices[0], 0];
  for (let i = 1; i < prices.length; i++) {
    dp[i][0] = Math.max(-prices[i], dp[i - 1][0]);
    dp[i][1] = Math.max(dp[i - 1][0] + prices[i], dp[i - 1][1]);
  }
  return dp[prices.length-1][1];
}
maxProfit([7, 1, 5, 3, 6, 4]);
// @lc code=end
