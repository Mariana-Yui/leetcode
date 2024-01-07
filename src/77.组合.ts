/*
 * @lc app=leetcode.cn id=77 lang=typescript
 *
 * [77] 组合
 *
 * https://leetcode.cn/problems/combinations/description/
 *
 * algorithms
 * Medium (77.04%)
 * Likes:    1567
 * Dislikes: 0
 * Total Accepted:    637.9K
 * Total Submissions: 827.8K
 * Testcase Example:  '4\n2'
 *
 * 给定两个整数 n 和 k，返回范围 [1, n] 中所有可能的 k 个数的组合。
 *
 * 你可以按 任何顺序 返回答案。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：n = 4, k = 2
 * 输出：
 * [
 * ⁠ [2,4],
 * ⁠ [3,4],
 * ⁠ [2,3],
 * ⁠ [1,2],
 * ⁠ [1,3],
 * ⁠ [1,4],
 * ]
 *
 * 示例 2：
 *
 *
 * 输入：n = 1, k = 1
 * 输出：[[1]]
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
function combine(n: number, k: number): number[][] {
  // 回溯算法 N选k
  const result: number[][] = [];
  const path: number[] = [];
  function backtracking(n: number, k: number, startIndex: number): void {
    if (path.length === k) {
      result.push([...path]);
      return;
    }
    // n - (k - path.length) + 1为剪枝操作, 忽略那些不符合条件的分支
    for (let i = startIndex; i <= n - (k - path.length) + 1; i++) {
      path.push(i);
      backtracking(n, k, i + 1);
      path.pop(); // 回溯
    }
  }
  backtracking(n, k, 1);
  return result;
}
// @lc code=end
