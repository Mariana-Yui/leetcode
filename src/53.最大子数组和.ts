/*
 * @lc app=leetcode.cn id=53 lang=typescript
 *
 * [53] 最大子数组和
 *
 * https://leetcode.cn/problems/maximum-subarray/description/
 *
 * algorithms
 * Medium (55.11%)
 * Likes:    6514
 * Dislikes: 0
 * Total Accepted:    1.6M
 * Total Submissions: 2.9M
 * Testcase Example:  '[-2,1,-3,4,-1,2,1,-5,4]'
 *
 * 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 *
 * 子数组 是数组中的一个连续部分。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
 * 输出：6
 * 解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = [1]
 * 输出：1
 *
 *
 * 示例 3：
 *
 *
 * 输入：nums = [5,4,-1,7,8]
 * 输出：23
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= nums.length <= 10^5
 * -10^4 <= nums[i] <= 10^4
 *
 *
 *
 *
 * 进阶：如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的 分治法 求解。
 *
 */

// @lc code=start
function maxSubArray(nums: number[]): number {
  // 贪心 局部最优: 累加到当前值不为负数, 负数则直接从新开始 整体最优: 取最大值
  // let count = 0;
  // let result = Number.MIN_SAFE_INTEGER;
  // for (let i = 0; i < nums.length; i++) {
  //   count += nums[i];
  //   if (result < count) result = count;
  //   if (count < 0) count = 0;
  // }
  // return result;

  // DP
  /**
   * 1.dp[i]定义: 以i结尾的最大子序列和
   * 2.dp递推公式: 如果dp[i-1]<0那么应该直接忽略, 所以 dp[i] = max{dp[i-1]+nums[i], nums[i]}
   * 3.dp初始化: dp[0] = nums[0]
   * 4. 遍历: 从前往后
   */
  const dp: number[] = new Array(nums.length).fill(0);
  dp[0] = nums[0];
  let result = dp[0];
  for (let i = 1; i < dp.length; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
    result = Math.max(result, dp[i]);
  }
  return result;
}
// @lc code=end
