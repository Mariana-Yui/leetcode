/*
 * @lc app=leetcode.cn id=63 lang=typescript
 *
 * [63] 不同路径 II
 *
 * https://leetcode.cn/problems/unique-paths-ii/description/
 *
 * algorithms
 * Medium (41.19%)
 * Likes:    1197
 * Dislikes: 0
 * Total Accepted:    439.4K
 * Total Submissions: 1.1M
 * Testcase Example:  '[[0,0,0],[0,1,0],[0,0,0]]'
 *
 * 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。
 *
 * 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish”）。
 *
 * 现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？
 *
 * 网格中的障碍物和空位置分别用 1 和 0 来表示。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
 * 输出：2
 * 解释：3x3 网格的正中间有一个障碍物。
 * 从左上角到右下角一共有 2 条不同的路径：
 * 1. 向右 -> 向右 -> 向下 -> 向下
 * 2. 向下 -> 向下 -> 向右 -> 向右
 *
 *
 * 示例 2：
 *
 *
 * 输入：obstacleGrid = [[0,1],[0,0]]
 * 输出：1
 *
 *
 *
 *
 * 提示：
 *
 *
 * m == m
 * n == obstacleGrid[i].length
 * 1 <= m, n <= 100
 * obstacleGrid[i][j] 为 0 或 1
 *
 *
 */

// @lc code=start
function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  // DP
  /**
   * 实现和62差不多, 区别在于多了障碍物, 需要去除部分边界条件
   * 第0行和第0列如果有障碍物, 障碍物前的dp[i][j]都是1, 之后的dp[i][j]都是0
   * dp中障碍物位置dp[i][j]都是0, 在遍历时需要跳过
   */
  // 初始化dp
  const [m, n] = [obstacleGrid.length, obstacleGrid[0].length];
  const dp: number[][] = new Array(m);
  for (let i = 0; i < m; i++) {
    dp[i] = new Array(n).fill(0);
  }
  // 处理第0行和第0列
  for (let i = 0; i < m && obstacleGrid[i][0] !== 1; i++) dp[i][0] = 1;
  for (let j = 0; j < n && obstacleGrid[0][j] !== 1; j++) dp[0][j] = 1;

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (obstacleGrid[i][j] === 1) continue;
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  return dp[m - 1][n - 1];
}
// @lc code=end
