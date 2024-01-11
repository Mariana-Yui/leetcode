/*
 * @lc app=leetcode.cn id=698 lang=typescript
 *
 * [698] 划分为k个相等的子集
 *
 * https://leetcode.cn/problems/partition-to-k-equal-sum-subsets/description/
 *
 * algorithms
 * Medium (41.89%)
 * Likes:    1008
 * Dislikes: 0
 * Total Accepted:    110.8K
 * Total Submissions: 264.4K
 * Testcase Example:  '[4,3,2,3,5,2,1]\n4'
 *
 * 给定一个整数数组  nums 和一个正整数 k，找出是否有可能把这个数组分成 k 个非空子集，其总和都相等。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入： nums = [4, 3, 2, 3, 5, 2, 1], k = 4
 * 输出： True
 * 说明： 有可能将其分成 4 个子集（5），（1,4），（2,3），（2,3）等于总和。
 *
 * 示例 2:
 *
 *
 * 输入: nums = [1,2,3,4], k = 3
 * 输出: false
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= k <= len(nums) <= 16
 * 0 < nums[i] < 10000
 * 每个元素的频率在 [1,4] 范围内
 *
 *
 */

// @lc code=start
function canPartitionKSubsets(nums: number[], k: number): boolean {
  // 回溯 回溯本质是暴力穷举所以不适用数量过大的集合, 例如416.分割等和子集
  // 题干的区间用回溯是合适的
  function backtracking(nums: number[], sum: number, startIndex: number): boolean {
    if (sum === quarterSum) return true;
    for (let i = 0; i < nums.length; i++) {
      if (backtracking(nums, sum + nums[i], i + 1)) return true;
    }
    return false;
  }
  const quarterSum = nums.reduce((p, c) => p + c, 0);
  return backtracking(nums, 0, 0);
}
// @lc code=end
