/*
 * @lc app=leetcode.cn id=90 lang=typescript
 *
 * [90] 子集 II
 *
 * https://leetcode.cn/problems/subsets-ii/description/
 *
 * algorithms
 * Medium (63.47%)
 * Likes:    1181
 * Dislikes: 0
 * Total Accepted:    341K
 * Total Submissions: 537.1K
 * Testcase Example:  '[1,2,2]'
 *
 * 给你一个整数数组 nums ，其中可能包含重复元素，请你返回该数组所有可能的子集（幂集）。
 *
 * 解集 不能 包含重复的子集。返回的解集中，子集可以按 任意顺序 排列。
 *
 *
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [1,2,2]
 * 输出：[[],[1],[1,2],[1,2,2],[2],[2,2]]
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = [0]
 * 输出：[[],[0]]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * -10
 *
 *
 *
 *
 */

// @lc code=start
function subsetsWithDup(nums: number[]): number[][] {
  // 回溯 和78一样 区别是有重复数字 排序后+去重操作 感觉used没啥用..不如startIndex
  function backtracking(nums: number[], startIndex: number): void {
    result.push([...path]);
    if (startIndex === nums.length) {
      return;
    }
    for (let i = startIndex; i < nums.length; i++) {
      if (i > startIndex && nums[i] === nums[i - 1]) {
        continue;
      }
      path.push(nums[i]);
      backtracking(nums, i + 1);
      path.pop();
    }
  }

  const result: number[][] = [];
  const path: number[] = [];
  nums.sort((a, b) => a - b);
  backtracking(nums, 0);
  return result;
}
// @lc code=end
