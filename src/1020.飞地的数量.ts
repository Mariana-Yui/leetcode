/*
 * @lc app=leetcode.cn id=1020 lang=typescript
 *
 * [1020] 飞地的数量
 *
 * https://leetcode.cn/problems/number-of-enclaves/description/
 *
 * algorithms
 * Medium (61.91%)
 * Likes:    257
 * Dislikes: 0
 * Total Accepted:    71.7K
 * Total Submissions: 115.9K
 * Testcase Example:  '[[0,0,0,0],[1,0,1,0],[0,1,1,0],[0,0,0,0]]'
 *
 * 给你一个大小为 m x n 的二进制矩阵 grid ，其中 0 表示一个海洋单元格、1 表示一个陆地单元格。
 *
 * 一次 移动 是指从一个陆地单元格走到另一个相邻（上、下、左、右）的陆地单元格或跨过 grid 的边界。
 *
 * 返回网格中 无法 在任意次数的移动中离开网格边界的陆地单元格的数量。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：grid = [[0,0,0,0],[1,0,1,0],[0,1,1,0],[0,0,0,0]]
 * 输出：3
 * 解释：有三个 1 被 0 包围。一个 1 没有被包围，因为它在边界上。
 *
 *
 * 示例 2：
 *
 *
 * 输入：grid = [[0,1,1,0],[0,0,1,0],[0,0,1,0],[0,0,0,0]]
 * 输出：0
 * 解释：所有 1 都在边界上或可以到达边界。
 *
 *
 *
 *
 * 提示：
 *
 *
 * m == grid.length
 * n == grid[i].length
 * 1 <= m, n <= 500
 * grid[i][j] 的值为 0 或 1
 *
 *
 */

// @lc code=start
function numEnclaves(grid: number[][]): number {
  // 遍历四边的陆地全部转化为海洋, 最后计算剩余还存在的陆地数量
  const dir: number[][] = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0]
  ];
  function dfs(grid: number[][], x: number, y: number): void {
    if (grid[x][y] === 0) return;
    count++;
    grid[x][y] = 0; // 陆地变海洋 和visited作用相同
    for (let i = 0; i < 4; i++) {
      const nextx = x + dir[i][0];
      const nexty = y + dir[i][1];
      if (nextx < 0 || nextx >= grid.length || nexty < 0 || nexty >= grid[0].length) continue;
      dfs(grid, nextx, nexty);
    }
  }

  const m = grid[0].length;
  const n = grid.length;
  let count = 0;
  // 左右两边
  for (let i = 0; i < n; i++) {
    if (grid[i][0] === 1) dfs(grid, i, 0);
    if (grid[i][m - 1] === 1) dfs(grid, i, m - 1);
  }
  // 上下两边
  for (let i = 0; i < m; i++) {
    if (grid[0][i] === 1) dfs(grid, 0, i);
    if (grid[n - 1][i] === 1) dfs(grid, n - 1, i);
  }
  count = 0;
  // 计算剩下的陆地
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === 1) dfs(grid, i, j);
    }
  }
  return count;
}
// @lc code=end
