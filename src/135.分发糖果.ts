/*
 * @lc app=leetcode.cn id=135 lang=typescript
 *
 * [135] 分发糖果
 *
 * https://leetcode.cn/problems/candy/description/
 *
 * algorithms
 * Hard (49.43%)
 * Likes:    1436
 * Dislikes: 0
 * Total Accepted:    277.7K
 * Total Submissions: 562.3K
 * Testcase Example:  '[1,0,2]'
 *
 * n 个孩子站成一排。给你一个整数数组 ratings 表示每个孩子的评分。
 *
 * 你需要按照以下要求，给这些孩子分发糖果：
 *
 *
 * 每个孩子至少分配到 1 个糖果。
 * 相邻两个孩子评分更高的孩子会获得更多的糖果。
 *
 *
 * 请你给每个孩子分发糖果，计算并返回需要准备的 最少糖果数目 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：ratings = [1,0,2]
 * 输出：5
 * 解释：你可以分别给第一个、第二个、第三个孩子分发 2、1、2 颗糖果。
 *
 *
 * 示例 2：
 *
 *
 * 输入：ratings = [1,2,2]
 * 输出：4
 * 解释：你可以分别给第一个、第二个、第三个孩子分发 1、2、1 颗糖果。
 * ⁠    第三个孩子只得到 1 颗糖果，这满足题面中的两个条件。
 *
 *
 *
 * 提示：
 *
 *
 * n == ratings.length
 * 1 <= n <= 2 * 10^4
 * 0 <= ratings[i] <= 2 * 10^4
 *
 *
 */

// @lc code=start
function candy(ratings: number[]): number {
  // 贪心
  /**
   * 如果贪心涉及两个维度一定要先考虑一个维度, 再考虑另外一个维度
   * 如果两个维度一起考虑一定会顾此失彼。
   * 贪心解法:
   * 先从左向右遍历 保证相邻的右边分到的糖果大于左边
   * 再从后向前遍历 保证相邻的左边分到的糖果大于右边
   */
  const candy: number[] = new Array(ratings.length).fill(1);
  for (let i = 1; i < ratings.length; i++) {
    if (ratings[i] > ratings[i - 1]) candy[i] = candy[i - 1] + 1;
  }
  for (let i = ratings.length - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) candy[i] = Math.max(candy[i], candy[i + 1] + 1);
  }
  return candy.reduce((p, c) => p + c, 0);
}
// @lc code=end
