/*
 * @lc app=leetcode.cn id=46 lang=typescript
 *
 * [46] 全排列
 *
 * https://leetcode.cn/problems/permutations/description/
 *
 * algorithms
 * Medium (78.96%)
 * Likes:    2789
 * Dislikes: 0
 * Total Accepted:    983.2K
 * Total Submissions: 1.2M
 * Testcase Example:  '[1,2,3]'
 *
 * 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [1,2,3]
 * 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = [0,1]
 * 输出：[[0,1],[1,0]]
 *
 *
 * 示例 3：
 *
 *
 * 输入：nums = [1]
 * 输出：[[1]]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= nums.length <= 6
 * -10 <= nums[i] <= 10
 * nums 中的所有整数 互不相同
 *
 *
 */

// @lc code=start
function permute(nums: number[]): number[][] {
  // 回溯 排列和组合不一样 {1,2}和{2,1}是不一样的 需要用到used数组记录
  function backtracking(nums: number[], used: boolean[]): void {
    if (path.length === nums.length) {
      result.push([...path]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (used[i]) {
        continue;
      }
      path.push(nums[i]);
      // 置为true 纵向递归就会忽略该值
      used[i] = true;
      backtracking(nums, used);
      path.pop();
      used[i] = false;
    }
  }

  const result: number[][] = [];
  const path: number[] = [];
  backtracking(nums, new Array(nums.length).fill(false));
  return result;
}
// @lc code=end
