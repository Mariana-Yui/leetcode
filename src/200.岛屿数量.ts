/*
 * @lc app=leetcode.cn id=200 lang=typescript
 *
 * [200] 岛屿数量
 *
 * https://leetcode.cn/problems/number-of-islands/description/
 *
 * algorithms
 * Medium (59.98%)
 * Likes:    2414
 * Dislikes: 0
 * Total Accepted:    758.8K
 * Total Submissions: 1.3M
 * Testcase Example:  '[["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]'
 *
 * 给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。
 *
 * 岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。
 *
 * 此外，你可以假设该网格的四条边均被水包围。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：grid = [
 * ⁠ ["1","1","1","1","0"],
 * ⁠ ["1","1","0","1","0"],
 * ⁠ ["1","1","0","0","0"],
 * ⁠ ["0","0","0","0","0"]
 * ]
 * 输出：1
 *
 *
 * 示例 2：
 *
 *
 * 输入：grid = [
 * ⁠ ["1","1","0","0","0"],
 * ⁠ ["1","1","0","0","0"],
 * ⁠ ["0","0","1","0","0"],
 * ⁠ ["0","0","0","1","1"]
 * ]
 * 输出：3
 *
 *
 *
 *
 * 提示：
 *
 *
 * m == grid.length
 * n == grid[i].length
 * 1
 * grid[i][j] 的值为 '0' 或 '1'
 *
 *
 */

// @lc code=start
function numIslands(grid: string[][]): number {
  // deep - first search
  // function dfs(grid: string[][], x: number, y: number): void {
  //   const dir = [
  //     [0, 1],
  //     [1, 0],
  //     [0, -1],
  //     [-1, 0]
  //   ]; // 四个方向
  //   for (let i = 0; i < dir.length; i++) {
  //     const nextx = x + dir[i][0];
  //     const nexty = y + dir[i][1];
  //     // 处理边界条件
  //     if (nextx < 0 || nextx >= grid.length || nexty < 0 || nexty >= grid[0].length) continue;
  //     if (!visited[nextx][nexty] && grid[nextx][nexty] === '1') {
  //       visited[nextx][nexty] = true;
  //       dfs(grid, nextx, nexty);
  //     }
  //   }
  // }

  // breadth - first search
  function bfs(grid: string[][]): void {
    const dir = [
      [0, 1],
      [1, 0],
      [0, -1],
      [-1, 0]
    ];
    while (queue.length) {
      const [x, y] = queue.shift()!;
      for (let i = 0; i < 4; i++) {
        const nextx = x + dir[i][0];
        const nexty = y + dir[i][1];
        if (nextx < 0 || nextx >= grid.length || nexty < 0 || nexty >= grid[0].length) continue;
        if (!visited[nextx][nexty] && grid[nextx][nexty] === '1') {
          // 加入队列的时候就应该更新visited 而不是queue取出时更新
          visited[nextx][nexty] = true;
          queue.push([nextx, nexty]);
        }
      }
    }
  }
  let result = 0;
  const queue: number[][] = [];
  const visited = Array.from(new Array(grid.length), () => new Array(grid[0].length).fill(false));
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (!visited[i][j] && grid[i][j] === '1') {
        result++;
        visited[i][j] = true;
        // 每次dfs都是把一整块岛屿搜索完
        // dfs(grid, i, j);

        // bfs
        queue.push([i, j]);
        bfs(grid);
      }
    }
  }
  return result;
}
// @lc code=end
