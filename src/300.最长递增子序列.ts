/*
 * @lc app=leetcode.cn id=300 lang=typescript
 *
 * [300] 最长递增子序列
 *
 * https://leetcode.cn/problems/longest-increasing-subsequence/description/
 *
 * algorithms
 * Medium (55.34%)
 * Likes:    3534
 * Dislikes: 0
 * Total Accepted:    853.4K
 * Total Submissions: 1.5M
 * Testcase Example:  '[10,9,2,5,3,7,101,18]'
 *
 * 给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。
 *
 * 子序列 是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7]
 * 的子序列。
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [10,9,2,5,3,7,101,18]
 * 输出：4
 * 解释：最长递增子序列是 [2,3,7,101]，因此长度为 4 。
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = [0,1,0,3,2,3]
 * 输出：4
 *
 *
 * 示例 3：
 *
 *
 * 输入：nums = [7,7,7,7,7,7,7]
 * 输出：1
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= nums.length <= 2500
 * -10^4 <= nums[i] <= 10^4
 *
 *
 *
 *
 * 进阶：
 *
 *
 * 你能将算法的时间复杂度降低到 O(n log(n)) 吗?
 *
 *
 */

// @lc code=start
function lengthOfLIS(nums: number[]): number {
  // DP 动态规划经典问题 子序列问题
  /**
   * 1. dp[i]及下标定义: nums[i]之前的最长子序列长度
   * 2. dp递推公式
   * 定义下标j遍历从0->i-1, 如果nums[j] < nums[i], 那么此时dp[i] = dp[j] + 1
   * 每次j++都回得到一个dp[i], 可以得出递推公式: dp[i] = max{dp[i], dp[j] + 1}
   * 3. dp初始化: dp[0] = 1
   * 4. 遍历: i从前往后, j从0->i-1 或 i-1->0都可以
   */
  const dp: number[] = new Array(nums.length).fill(1);
  let result = 1; // 需要注意的是最长子序列的结尾nums[i]并不一定是最后一个元素, 所以还需要遍历整个dp[i]
  for (let i = 1; i < dp.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) dp[i] = Math.max(dp[i], dp[j] + 1);
    }
    result = Math.max(result, dp[i]);
  }
  return result;
}
// @lc code=end
