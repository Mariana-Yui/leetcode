/*
 * @lc app=leetcode.cn id=216 lang=typescript
 *
 * [216] 组合总和 III
 *
 * https://leetcode.cn/problems/combination-sum-iii/description/
 *
 * algorithms
 * Medium (71.16%)
 * Likes:    796
 * Dislikes: 0
 * Total Accepted:    326.3K
 * Total Submissions: 458.6K
 * Testcase Example:  '3\n7'
 *
 * 找出所有相加之和为 n 的 k 个数的组合，且满足下列条件：
 *
 *
 * 只使用数字1到9
 * 每个数字 最多使用一次
 *
 *
 * 返回 所有可能的有效组合的列表 。该列表不能包含相同的组合两次，组合可以以任何顺序返回。
 *
 *
 *
 * 示例 1:
 *
 *
 * 输入: k = 3, n = 7
 * 输出: [[1,2,4]]
 * 解释:
 * 1 + 2 + 4 = 7
 * 没有其他符合的组合了。
 *
 * 示例 2:
 *
 *
 * 输入: k = 3, n = 9
 * 输出: [[1,2,6], [1,3,5], [2,3,4]]
 * 解释:
 * 1 + 2 + 6 = 9
 * 1 + 3 + 5 = 9
 * 2 + 3 + 4 = 9
 * 没有其他符合的组合了。
 *
 * 示例 3:
 *
 *
 * 输入: k = 4, n = 1
 * 输出: []
 * 解释: 不存在有效的组合。
 * 在[1,9]范围内使用4个不同的数字，我们可以得到的最小和是1+2+3+4 = 10，因为10 > 1，没有有效的组合。
 *
 *
 *
 *
 * 提示:
 *
 *
 * 2 <= k <= 9
 * 1 <= n <= 60
 *
 *
 */

// @lc code=start
function combinationSum3(k: number, n: number): number[][] {
  // 回溯问题 n选k
  const path: number[] = [];
  const result: number[][] = [];
  const size = n > 9 ? 9 : n;
  function backtracking(n: number, k: number, sum: number, startIndex: number): void {
    if (path.length === k) {
      if (sum === n) result.push([...path]);
      return;
    }
    for (let i = startIndex; i <= size; i++) {
      sum += i;
      path.push(i);
      // 剪枝
      if (sum > n) {
        sum -= i; // 局部变量 减不减都可以
        path.pop();
        return;
      }
      backtracking(n, k, sum, i + 1);
      path.pop();
      sum -= i;
    }
  }
  backtracking(n, k, 0, 1);
  return result;
}
// @lc code=end
