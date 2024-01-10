/*
 * @lc app=leetcode.cn id=62 lang=typescript
 *
 * [62] 不同路径
 *
 * https://leetcode.cn/problems/unique-paths/description/
 *
 * algorithms
 * Medium (67.91%)
 * Likes:    1966
 * Dislikes: 0
 * Total Accepted:    715K
 * Total Submissions: 1.1M
 * Testcase Example:  '3\n7'
 *
 * 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。
 *
 * 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。
 *
 * 问总共有多少条不同的路径？
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：m = 3, n = 7
 * 输出：28
 *
 * 示例 2：
 *
 *
 * 输入：m = 3, n = 2
 * 输出：3
 * 解释：
 * 从左上角开始，总共有 3 条路径可以到达右下角。
 * 1. 向右 -> 向下 -> 向下
 * 2. 向下 -> 向下 -> 向右
 * 3. 向下 -> 向右 -> 向下
 *
 *
 * 示例 3：
 *
 *
 * 输入：m = 7, n = 3
 * 输出：28
 *
 *
 * 示例 4：
 *
 *
 * 输入：m = 3, n = 3
 * 输出：6
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= m, n <= 100
 * 题目数据保证答案小于等于 2 * 10^9
 *
 *
 */

// @lc code=start m->行 n->列
function uniquePaths(m: number, n: number): number {
  // DP
  /**
   * 题干解析: robot移动方向只能向右和向下 第0列的和第0行上所有位置的走法都是1种
   * 1. dp[i][j]含义: robot走到第i行第j列的走法数量
   * 2. dp递推公式: 由题干可知, dp[i][j] = dp[i-1][j] + dp[i][j-1]
   * 3. dp初始化: 由题干可知, dp[i][0] = 1; dp[0][j] = 0;
   * 4. 遍历: 由题干可知, 从左上到右下, 所以i,j都是从前往后遍历
   */
  // 先初始化dp
  const dp: number[][] = new Array(m);
  for (let i = 0; i < m; i++) {
    dp[i] = new Array(n).fill(i === 0 ? 1 : 0);
    dp[i][0] = 1;
  }
  dp[0][0] = 1;
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  return dp[m - 1][n - 1];
}
// @lc code=end
