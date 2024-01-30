/*
 * @lc app=leetcode.cn id=695 lang=typescript
 *
 * [695] 岛屿的最大面积
 *
 * https://leetcode.cn/problems/max-area-of-island/description/
 *
 * algorithms
 * Medium (68.11%)
 * Likes:    1047
 * Dislikes: 0
 * Total Accepted:    312.3K
 * Total Submissions: 458.4K
 * Testcase Example:  '[[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]'
 *
 * 给你一个大小为 m x n 的二进制矩阵 grid 。
 *
 * 岛屿 是由一些相邻的 1 (代表土地) 构成的组合，这里的「相邻」要求两个 1 必须在 水平或者竖直的四个方向上 相邻。你可以假设 grid
 * 的四个边缘都被 0（代表水）包围着。
 *
 * 岛屿的面积是岛上值为 1 的单元格的数目。
 *
 * 计算并返回 grid 中最大的岛屿面积。如果没有岛屿，则返回面积为 0 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：grid =
 * [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]
 * 输出：6
 * 解释：答案不应该是 11 ，因为岛屿只能包含水平或垂直这四个方向上的 1 。
 *
 *
 * 示例 2：
 *
 *
 * 输入：grid = [[0,0,0,0,0,0,0,0]]
 * 输出：0
 *
 *
 *
 *
 * 提示：
 *
 *
 * m == grid.length
 * n == grid[i].length
 * 1 <= m, n <= 50
 * grid[i][j] 为 0 或 1
 *
 *
 */

// @lc code=start

function maxAreaOfIsland(grid: number[][]): number {
  const dir = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0]
  ];
  // // deep - first search
  // function dfs(grid: number[][], x: number, y: number): void {
  //   if (visited[x][y] || grid[x][y] === 0) return;
  //   visited[x][y] = true;
  //   count++;
  //   for (let i = 0; i < 4; i++) {
  //     const nextx = x + dir[i][0];
  //     const nexty = y + dir[i][1];
  //     if (nextx < 0 || nextx >= grid.length || nexty < 0 || nexty >= grid[0].length) continue;
  //     dfs(grid, nextx, nexty);
  //   }
  // }
  // let result = 0;
  // let count = 0;
  // const visited = Array.from({ length: grid.length }, () => new Array(grid[0].length).fill(false));
  // for (let i = 0; i < grid.length; i++) {
  //   for (let j = 0; j < grid[0].length; j++) {
  //     if (!visited[i][j] && grid[i][j] === 1) {
  //       count = 0;
  //       dfs(grid, i, j);
  //       result = Math.max(result, count);
  //     }
  //   }
  // }
  // return result;

  // breadth - first search
}
// @lc code=end
