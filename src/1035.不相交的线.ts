/*
 * @lc app=leetcode.cn id=1035 lang=typescript
 *
 * [1035] 不相交的线
 *
 * https://leetcode.cn/problems/uncrossed-lines/description/
 *
 * algorithms
 * Medium (71.51%)
 * Likes:    526
 * Dislikes: 0
 * Total Accepted:    96K
 * Total Submissions: 134.2K
 * Testcase Example:  '[1,4,2]\n[1,2,4]'
 *
 * 在两条独立的水平线上按给定的顺序写下 nums1 和 nums2 中的整数。
 *
 * 现在，可以绘制一些连接两个数字 nums1[i] 和 nums2[j] 的直线，这些直线需要同时满足满足：
 *
 *
 * nums1[i] == nums2[j]
 * 且绘制的直线不与任何其他连线（非水平线）相交。
 *
 *
 * 请注意，连线即使在端点也不能相交：每个数字只能属于一条连线。
 *
 * 以这种方法绘制线条，并返回可以绘制的最大连线数。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums1 = [1,4,2], nums2 = [1,2,4]
 * 输出：2
 * 解释：可以画出两条不交叉的线，如上图所示。
 * 但无法画出第三条不相交的直线，因为从 nums1[1]=4 到 nums2[2]=4 的直线将与从 nums1[2]=2 到 nums2[1]=2
 * 的直线相交。
 *
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums1 = [2,5,1,2,5], nums2 = [10,5,2,1,5,2]
 * 输出：3
 *
 *
 *
 * 示例 3：
 *
 *
 * 输入：nums1 = [1,3,7,1,7,5], nums2 = [1,9,2,5,1]
 * 输出：2
 *
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= nums1.length, nums2.length <= 500
 * 1 <= nums1[i], nums2[j] <= 2000
 *
 *
 *
 *
 */

// @lc code=start
function maxUncrossedLines(nums1: number[], nums2: number[]): number {
  // DP
  /**
   * 抽象问题
   * 两个数组的连线不能相交 说明B数组中和A数组存在公共子序列(不一定连续) -> 转化为求最长公共子序列问题
   * 和1143.完全一致
   */
  const dp: number[][] = new Array(nums1.length + 1);
  let result = 0;
  for (let i = 0; i <= nums1.length; i++) dp[i] = new Array(nums2.length + 1).fill(0);
  dp[0][0] = 0;
  for (let i = 1; i <= nums1.length; i++) {
    for (let j = 1; j <= nums2.length; j++) {
      if (nums1[i - 1] === nums2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
      result = Math.max(result, dp[i][j]);
    }
  }
  return result;
}
// @lc code=end
