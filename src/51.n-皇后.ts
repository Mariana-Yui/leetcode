/*
 * @lc app=leetcode.cn id=51 lang=typescript
 *
 * [51] N 皇后
 *
 * https://leetcode.cn/problems/n-queens/description/
 *
 * algorithms
 * Hard (73.96%)
 * Likes:    2003
 * Dislikes: 0
 * Total Accepted:    357.9K
 * Total Submissions: 484K
 * Testcase Example:  '4'
 *
 * 按照国际象棋的规则，皇后可以攻击与之处在同一行或同一列或同一斜线上的棋子。
 *
 * n 皇后问题 研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。
 *
 * 给你一个整数 n ，返回所有不同的 n 皇后问题 的解决方案。
 *
 *
 *
 * 每一种解法包含一个不同的 n 皇后问题 的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：n = 4
 * 输出：[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
 * 解释：如上图所示，4 皇后问题存在两个不同的解法。
 *
 *
 * 示例 2：
 *
 *
 * 输入：n = 1
 * 输出：[["Q"]]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= n <= 9
 *
 *
 *
 *
 */

// @lc code=start
function solveNQueens(n: number): string[][] {
  // N皇后 经典回溯问题
  /**
   * N皇后: N个棋子不能 同行 同列 斜线(45°/135°)
   * 二维数组 回溯 遍历列 递归行
   */
  // i -> 行  j -> 列
  function backtracking(n: number, row: number, chessboard: string[][]): void {
    if (row === n) {
      result.push(chessboard.map((v) => v.join('')));
      return;
    }
    for (let j = 0; j < n; j++) {
      // valid才递归就能保证row === n时chessboard一定是符合条件的
      if (isValid(row, j, chessboard)) {
        chessboard[row][j] = 'Q';
        backtracking(n, row + 1, chessboard);
        chessboard[row][j] = '.'; // 回溯
      }
    }
  }
  function isValid(row: number, col: number, chessboard: string[][]): boolean {
    /** 同行不用校验, 因为遍历的就是列, 每行只会有一个Queen */
    //同列
    for (let i = row - 1; i >= 0; i--) {
      if (chessboard[i][col] === 'Q') {
        return false;
      }
    }
    // 斜线 45°
    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
      if (chessboard[i][j] === 'Q') {
        return false;
      }
    }
    // 斜线 135°
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (chessboard[i][j] === 'Q') {
        return false;
      }
    }
    return true;
  }

  const result: string[][] = [];
  // 先构造个棋盘
  const chessboard = new Array(n);
  for (let i = 0; i < n; i++) {
    chessboard[i] = new Array(n).fill('.');
  }
  backtracking(n, 0, chessboard);
  return result;
}
solveNQueens(4);
// @lc code=end
