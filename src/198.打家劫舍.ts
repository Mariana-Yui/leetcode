/*
 * @lc app=leetcode.cn id=198 lang=typescript
 *
 * [198] 打家劫舍
 *
 * https://leetcode.cn/problems/house-robber/description/
 *
 * algorithms
 * Medium (54.84%)
 * Likes:    2895
 * Dislikes: 0
 * Total Accepted:    891.6K
 * Total Submissions: 1.6M
 * Testcase Example:  '[1,2,3,1]'
 *
 *
 * 你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。
 *
 * 给定一个代表每个房屋存放金额的非负整数数组，计算你 不触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：[1,2,3,1]
 * 输出：4
 * 解释：偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。
 * 偷窃到的最高金额 = 1 + 3 = 4 。
 *
 * 示例 2：
 *
 *
 * 输入：[2,7,9,3,1]
 * 输出：12
 * 解释：偷窃 1 号房屋 (金额 = 2), 偷窃 3 号房屋 (金额 = 9)，接着偷窃 5 号房屋 (金额 = 1)。
 * 偷窃到的最高金额 = 2 + 9 + 1 = 12 。
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
function rob(nums: number[]): number {
  // DP 偷不偷第i家取决于是否偷了前面两家, 联想到使用DP
  /**
   * 1.dp[i]及下标含义: 抢劫到第i家能够得到的最多金额
   * 2.dp的递推公式: 如果偷第i家那么dp[i]=dp[i-2]+nums[i], 如果不偷第i家那么dp[i]=dp[i-1]
   * 需要注意的是dp[i]是考虑偷第i家不代表一定要偷第i家
   * 3.dp初始化: dp[0]=nums[0](如果只有1家肯定要偷的:P) dp[1]=max{nums[0], nums[1]}(相邻两家最大的那个)
   * 4.遍历: 从前往后
   */
  const dp: number[] = new Array(nums.length).fill(0);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);
  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
  }
  return dp[nums.length - 1];
}
// @lc code=end
