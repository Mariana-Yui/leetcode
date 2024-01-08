/*
 * @lc app=leetcode.cn id=47 lang=typescript
 *
 * [47] 全排列 II
 *
 * https://leetcode.cn/problems/permutations-ii/description/
 *
 * algorithms
 * Medium (65.61%)
 * Likes:    1516
 * Dislikes: 0
 * Total Accepted:    514.3K
 * Total Submissions: 783.7K
 * Testcase Example:  '[1,1,2]'
 *
 * 给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [1,1,2]
 * 输出：
 * [[1,1,2],
 * ⁠[1,2,1],
 * ⁠[2,1,1]]
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = [1,2,3]
 * 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= nums.length <= 8
 * -10 <= nums[i] <= 10
 *
 *
 */

// @lc code=start
function permuteUnique(nums: number[]): number[][] {
  /**
   * 回溯 排列问题+有重复数字
   * 排列问题: 因为{1,2}和{2,1}不一样 所以没有startIndex 遍历要从0开始 并且要排除自身
   * 重复数字: 需要对数组排序 并且在 同一树层 忽略相同数字
   * used数组的作用: 1. 排除自身 2. 同一树层忽略相同数字, 同一树枝可使用相同数字
   * ps: used数组对于组合不如直接使用startIndex, 但对于排列是必须的
   */
  function backtracking(nums: number[], used: boolean[]): void {
    if (path.length === nums.length) {
      result.push([...path]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      // 同一树层忽略相同数字
      if (i > 0 && nums[i - 1] === nums[i] && used[i - 1] === false) {
        continue;
      }
      // 忽略自身
      if (used[i] === false) {
        path.push(nums[i]);
        used[i] = true;
        backtracking(nums, used);
        used[i] = false;
        path.pop();
      }
    }
  }

  const result: number[][] = [];
  const path: number[] = [];
  nums.sort(); // 先排序
  backtracking(nums, new Array(nums.length).fill(false));
  return result;
}
// @lc code=end
