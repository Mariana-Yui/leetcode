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
  return dp[prices.length - 1][1];

  // 优化 滚动数组 因为第i天只依赖第i-1天 所以只需要2*2的二维数组
  // const dp: number[][] = [
  //   [-prices[0], 0],
  //   [0, 0]
  // ];
  // for (let i = 1; i < prices.length; i++) {
  //   dp[i % 2][0] = Math.max(dp[(i - 1) % 2][0], -prices[i]);
  //   dp[i % 2][1] = Math.max(dp[(i - 1) % 2][0] + prices[i], dp[(i - 1) % 2][1]);
  // }
  // return dp[(prices.length - 1) % 2][1];

  // 再优化 一维滚动数组 这里非常难理解 真要是写还是推荐上面两种写法..
  /**
   * 首先dp是长度为2的一维数组表示[持有时的最大金额, 不持有时的最大金额]
   * dp[0]很好理解 保持前一天持有和当天买入的最大值
   * dp[1] = max{dp[0] + price[i], dp[1]}用到了当天的dp[0]
   * 分两种情况讨论:
   * 1. dp[0]为保持前一天持有即 dp[0], 那么dp[0]+price[i]表示当天卖出, dp[1]则和定义的相同 保持前一天卖出和当天卖出的最大值
   * 2. dp[0]为当天买入即 -prices[i], 那么dp[0]+price[i]表示当天买入再卖出, 即没有操作;
   * 既然是当天买入的, 那么dp[1]就必不可能操作, 不然没挣钱啊所以这时候dp[1]保持前一天不持有的状态
   * 理解的关键: 当天买入处于持有状态时, 不持有状态一定是前一天的不持有状态
   */
  // const dp = [-prices[0], 0];
  // for (let i = 1; i < prices.length; i++) {
  //   dp[0] = Math.max(-prices[i], dp[0]);
  //   dp[1] = Math.max(dp[0] + prices[i], dp[1]);
  // }
  // return dp[1];
}
// @lc code=end
