/*
 * @lc app=leetcode.cn id=188 lang=typescript
 *
 * [188] 买卖股票的最佳时机 IV
 *
 * https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-iv/description/
 *
 * algorithms
 * Hard (48.49%)
 * Likes:    1130
 * Dislikes: 0
 * Total Accepted:    235.3K
 * Total Submissions: 484.4K
 * Testcase Example:  '2\n[2,4,1]'
 *
 * 给你一个整数数组 prices 和一个整数 k ，其中 prices[i] 是某支给定的股票在第 i 天的价格。
 *
 * 设计一个算法来计算你所能获取的最大利润。你最多可以完成 k 笔交易。也就是说，你最多可以买 k 次，卖 k 次。
 *
 * 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：k = 2, prices = [2,4,1]
 * 输出：2
 * 解释：在第 1 天 (股票价格 = 2) 的时候买入，在第 2 天 (股票价格 = 4) 的时候卖出，这笔交易所能获得利润 = 4-2 = 2 。
 *
 * 示例 2：
 *
 *
 * 输入：k = 2, prices = [3,2,6,5,0,3]
 * 输出：7
 * 解释：在第 2 天 (股票价格 = 2) 的时候买入，在第 3 天 (股票价格 = 6) 的时候卖出, 这笔交易所能获得利润 = 6-2 = 4 。
 * ⁠    随后，在第 5 天 (股票价格 = 0) 的时候买入，在第 6 天 (股票价格 = 3) 的时候卖出, 这笔交易所能获得利润 = 3-0 =
 * 3 。
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= k <= 100
 * 1 <= prices.length <= 1000
 * 0 <= prices[i] <= 1000
 *
 *
 */

// @lc code=start
function maxProfit(k: number, prices: number[]): number {
  // DP 和123.是一样的思路, 123.题干是最多2次, 本题为最多k次, 区别只是不指定次数
  // 三维数组 第1维第i天 第2维第j次 第三维持有/不持有
  // const dp: number[][][] = new Array(prices.length);
  // for (let i = 0; i < dp.length; i++) {
  //   dp[i] = new Array(k + 1);
  //   // 三维数组一定要设置误操作这个状态j=0
  //   for (let j = 0; j <= k; j++) dp[i][j] = [0, 0];
  // }
  // for (let j = 1; j <= k; j++) dp[0][j][0] = -prices[0];
  // for (let i = 1; i < dp.length; i++) {
  //   for (let j = 1; j <= k; j++) {
  //     // 注意第i天第j次买入是第i-1天第j-1次不持有+当天金额
  //     dp[i][j][0] = Math.max(dp[i - 1][j][0], dp[i - 1][j - 1][1] - prices[i]);
  //     dp[i][j][1] = Math.max(dp[i - 1][j][1], dp[i - 1][j][0] + prices[i]);
  //   }
  // }
  // return dp[prices.length - 1][k][1];

  // 二维数组
  /**
   * 无操作
   * 第一次持有
   * 第一次不持有
   * 第二次持有
   * 第二次不持有
   * ...
   * 定义二维数组 第一维第i天 第二维奇数下标持有 偶数下标不持有
   * 和123.一样的逻辑
   */
  const dp: number[][] = new Array(prices.length);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(2 * k + 1).fill(0);
  }
  for (let j = 1; j < 2 * k + 1; j += 2) dp[0][j] = -prices[0];
  for (let i = 1; i < dp.length; i++) {
    for (let j = 1; j < 2 * k + 1; j += 2) {
      dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - 1] - prices[i]);
      dp[i][j + 1] = Math.max(dp[i - 1][j + 1], dp[i - 1][j] + prices[i]);
    }
  }
  return dp[prices.length - 1][2 * k];
}
// @lc code=end
