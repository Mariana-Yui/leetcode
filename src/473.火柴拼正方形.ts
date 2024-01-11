/*
 * @lc app=leetcode.cn id=473 lang=typescript
 *
 * [473] 火柴拼正方形
 *
 * https://leetcode.cn/problems/matchsticks-to-square/description/
 *
 * algorithms
 * Medium (46.69%)
 * Likes:    520
 * Dislikes: 0
 * Total Accepted:    75.4K
 * Total Submissions: 161.4K
 * Testcase Example:  '[1,1,2,2,2]'
 *
 * 你将得到一个整数数组 matchsticks ，其中 matchsticks[i] 是第 i 个火柴棒的长度。你要用 所有的火柴棍 拼成一个正方形。你
 * 不能折断 任何一根火柴棒，但你可以把它们连在一起，而且每根火柴棒必须 使用一次 。
 *
 * 如果你能使这个正方形，则返回 true ，否则返回 false 。
 *
 *
 *
 * 示例 1:
 *
 *
 *
 *
 * 输入: matchsticks = [1,1,2,2,2]
 * 输出: true
 * 解释: 能拼成一个边长为2的正方形，每边两根火柴。
 *
 *
 * 示例 2:
 *
 *
 * 输入: matchsticks = [3,3,3,3,4]
 * 输出: false
 * 解释: 不能用所有火柴拼成一个正方形。
 *
 *
 *
 *
 * 提示:
 *
 *
 * 1 <= matchsticks.length <= 15
 * 1 <= matchsticks[i] <= 10^8
 *
 *
 */

// @lc code=start
function makesquare(matchsticks: number[]): boolean {
  // 回溯 和698.划分为k个相等子集相同的问题, 这里k=4
  function backtracking(matchsticks: number[], startIndex: number): boolean {
    if (startIndex === matchsticks.length) return true;
    for (let i = 0; i < 4; i++) {
      if (i > 0 && buckets[i] === buckets[i - 1]) continue;
      if (buckets[i] + matchsticks[startIndex] > target) continue;
      buckets[i] += matchsticks[startIndex];
      if (backtracking(matchsticks, startIndex + 1)) return true;
      buckets[i] -= matchsticks[startIndex];
    }
    return false;
  }

  // 计算出边长
  const target = matchsticks.reduce((p, c) => p + c, 0) / 4;
  if (~~target !== target) return false;
  const buckets: number[] = new Array(4).fill(0);
  matchsticks.sort((a, b) => b - a);
  return backtracking(matchsticks, 0);
}
// @lc code=end
