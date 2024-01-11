/*
 * @lc app=leetcode.cn id=416 lang=typescript
 *
 * [416] 分割等和子集
 *
 * https://leetcode.cn/problems/partition-equal-subset-sum/description/
 *
 * algorithms
 * Medium (52.29%)
 * Likes:    1969
 * Dislikes: 0
 * Total Accepted:    487K
 * Total Submissions: 930.9K
 * Testcase Example:  '[1,5,11,5]'
 *
 * 给你一个 只包含正整数 的 非空 数组 nums 。请你判断是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [1,5,11,5]
 * 输出：true
 * 解释：数组可以分割成 [1, 5, 5] 和 [11] 。
 *
 * 示例 2：
 *
 *
 * 输入：nums = [1,2,3,5]
 * 输出：false
 * 解释：数组不能分割成两个元素和相等的子集。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * 1
 *
 *
 */

// @lc code=start
function canPartition(nums: number[]): boolean {
  /** 回溯 暴力穷举找到一个子集之和为sum/2即可判断存在 */
  /** 可以是可以 但是会超时:P */
  // function backtracking(nums: number[], startIndex: number): boolean {
  //   if (startIndex === nums.length) return true;
  //   for (let i = 0; i < 2; i++) {
  //     if (i > 0 && buckets[i] === buckets[i - 1]) continue;
  //     if (buckets[i] + nums[startIndex] > target) continue;
  //     buckets[i] += nums[startIndex];
  //     if (backtracking(nums, startIndex + 1)) return true;
  //     buckets[i] -= nums[startIndex];
  //   }
  //   return false;
  // }

  // // 计算出边长
  // const target = nums.reduce((p, c) => p + c, 0) / 2;
  // if (~~target !== target) return false;
  // const buckets: number[] = new Array(2).fill(0);
  // nums.sort((a, b) => b - a);
  // return backtracking(nums, 0);
}
// @lc code=end
