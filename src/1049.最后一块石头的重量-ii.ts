/*
 * @lc app=leetcode.cn id=1049 lang=typescript
 *
 * [1049] 最后一块石头的重量 II
 *
 * https://leetcode.cn/problems/last-stone-weight-ii/description/
 *
 * algorithms
 * Medium (69.85%)
 * Likes:    808
 * Dislikes: 0
 * Total Accepted:    154.2K
 * Total Submissions: 220.8K
 * Testcase Example:  '[2,7,4,1,8,1]'
 *
 * 有一堆石头，用整数数组 stones 表示。其中 stones[i] 表示第 i 块石头的重量。
 *
 * 每一回合，从中选出任意两块石头，然后将它们一起粉碎。假设石头的重量分别为 x 和 y，且 x <= y。那么粉碎的可能结果如下：
 *
 *
 * 如果 x == y，那么两块石头都会被完全粉碎；
 * 如果 x != y，那么重量为 x 的石头将会完全粉碎，而重量为 y 的石头新重量为 y-x。
 *
 *
 * 最后，最多只会剩下一块 石头。返回此石头 最小的可能重量 。如果没有石头剩下，就返回 0。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：stones = [2,7,4,1,8,1]
 * 输出：1
 * 解释：
 * 组合 2 和 4，得到 2，所以数组转化为 [2,7,1,8,1]，
 * 组合 7 和 8，得到 1，所以数组转化为 [2,1,1,1]，
 * 组合 2 和 1，得到 1，所以数组转化为 [1,1,1]，
 * 组合 1 和 1，得到 0，所以数组转化为 [1]，这就是最优值。
 *
 *
 * 示例 2：
 *
 *
 * 输入：stones = [31,26,33,21,40]
 * 输出：5
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= stones.length <= 30
 * 1 <= stones[i] <= 100
 *
 *
 */

// @lc code=start
function lastStoneWeightII(stones: number[]): number {
  // DP 01背包问题
  /**
   * 分析题干 抽象问题
   * 求最小的重量, 把石头的重量尽可能的二等分整体相减得到的便是最小值
   * 这就抽象成了分割等和子集的问题使用01背包动态规划解法
   */
  const sum = stones.reduce((p, c) => p + c, 0);
  const half = Math.floor(sum / 2);
  const dp: number[] = new Array(half + 1).fill(0);
  const weigets = stones;
  const values = stones;
  for (let i = 0; i < stones.length; i++) {
    for (let j = half; j >= weigets[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j - weigets[i]] + values[i]);
    }
  }
  return sum - 2 * dp[half];
}
// @lc code=end
