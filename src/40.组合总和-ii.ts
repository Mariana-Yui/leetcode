/*
 * @lc app=leetcode.cn id=40 lang=typescript
 *
 * [40] 组合总和 II
 *
 * https://leetcode.cn/problems/combination-sum-ii/description/
 *
 * algorithms
 * Medium (59.50%)
 * Likes:    1503
 * Dislikes: 0
 * Total Accepted:    487.3K
 * Total Submissions: 818.9K
 * Testcase Example:  '[10,1,2,7,6,1,5]\n8'
 *
 * 给定一个候选人编号的集合 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
 *
 * candidates 中的每个数字在每个组合中只能使用 一次 。
 *
 * 注意：解集不能包含重复的组合。
 *
 *
 *
 * 示例 1:
 *
 *
 * 输入: candidates = [10,1,2,7,6,1,5], target = 8,
 * 输出:
 * [
 * [1,1,6],
 * [1,2,5],
 * [1,7],
 * [2,6]
 * ]
 *
 * 示例 2:
 *
 *
 * 输入: candidates = [2,5,2,1,2], target = 5,
 * 输出:
 * [
 * [1,2,2],
 * [5]
 * ]
 *
 *
 *
 * 提示:
 *
 *
 * 1 <= candidates.length <= 100
 * 1 <= candidates[i] <= 50
 * 1 <= target <= 30
 *
 *
 */

// @lc code=start
function combinationSum2(candidates: number[], target: number): number[][] {
  // 回溯算法, 和39类似, 区别是需要去除重复的组合
  function backtracking(n: number[], sum: number, startIndex: number): void {
    if (sum === target) {
      result.push([...path]);
      return;
    }
    for (let i = startIndex; i < n.length; i++) {
      // 去除排序后重复数字
      if (i > startIndex && n[i] === n[i - 1]) continue;
      sum += n[i];
      path.push(n[i]);
      // 剪枝
      if (sum > target) {
        sum -= n[i];
        path.pop();
        continue;
      }
      backtracking(n, sum, i + 1); // 纵向
      sum -= n[i];
      path.pop();
    }
  }
  const result: number[][] = [];
  const path: number[] = [];
  // 先对数组排序
  candidates.sort((a, b) => a - b);
  backtracking(candidates, 0, 0);
  return result;
}
// @lc code=end
