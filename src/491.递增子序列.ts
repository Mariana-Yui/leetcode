/*
 * @lc app=leetcode.cn id=491 lang=typescript
 *
 * [491] 递增子序列
 *
 * https://leetcode.cn/problems/non-decreasing-subsequences/description/
 *
 * algorithms
 * Medium (51.84%)
 * Likes:    758
 * Dislikes: 0
 * Total Accepted:    162.4K
 * Total Submissions: 313.3K
 * Testcase Example:  '[4,6,7,7]'
 *
 * 给你一个整数数组 nums ，找出并返回所有该数组中不同的递增子序列，递增子序列中 至少有两个元素 。你可以按 任意顺序 返回答案。
 *
 * 数组中可能含有重复元素，如出现两个整数相等，也可以视作递增序列的一种特殊情况。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [4,6,7,7]
 * 输出：[[4,6],[4,6,7],[4,6,7,7],[4,7],[4,7,7],[6,7],[6,7,7],[7,7]]
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = [4,4,3,2,1]
 * 输出：[[4,4]]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= nums.length <= 15
 * -100 <= nums[i] <= 100
 *
 *
 */

// @lc code=start
function findSubsequences(nums: number[]): number[][] {
  // 回溯 思路都是一样的 🥚4️⃣有陷阱 因为求的是递增集合 不能先排序了 因为排序完都是递增的
  function backtracking(nums: number[], startIndex: number): void {
    // 题干要求两个元素及以上
    if (path.length >= 2) result.push([...path]);
    if (startIndex === nums.length) {
      return;
    }
    // 纵向递归重新定义used
    const used = new Array(201).fill(0);
    for (let i = startIndex; i < nums.length; i++) {
      // 记录是否已使用, 已使用直接忽略 使用used数组记录, Set也可以只是hash查找会增加耗时
      // 因为值区间是[-100, 100], 直接使用数组记录减少耗时, 如果区间很大就用Set
      if (used[nums[i] + 100] === 1 || (path.length > 0 && nums[i] < path[path.length - 1])) {
        continue;
      }
      // 横向遍历处理过的置为1
      used[nums[i] + 100] = 1;
      path.push(nums[i]);
      backtracking(nums, i + 1);
      path.pop();
    }
  }

  const result: number[][] = [];
  const path: number[] = [];
  backtracking(nums, 0);
  return result;
}
// @lc code=end
