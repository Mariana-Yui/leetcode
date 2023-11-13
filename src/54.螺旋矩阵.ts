/*
 * @lc app=leetcode.cn id=54 lang=typescript
 *
 * [54] 螺旋矩阵
 *
 * https://leetcode.cn/problems/spiral-matrix/description/
 *
 * algorithms
 * Medium (49.81%)
 * Likes:    1531
 * Dislikes: 0
 * Total Accepted:    425.2K
 * Total Submissions: 853.3K
 * Testcase Example:  '[[1,2,3],[4,5,6],[7,8,9]]'
 *
 * 给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
 * 输出：[1,2,3,6,9,8,7,4,5]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
 * 输出：[1,2,3,4,8,12,11,10,9,5,6,7]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * m == matrix.length
 * n == matrix[i].length
 * 1 
 * -100 
 * 
 * 
 */

// @lc code=start
https://cloud.tencent.com/developer/article/1606804
function spiralOrder(matrix: number[][]): number[] {
  let left = 0;
  let right = matrix[0].length-1;
  let up = 0;
  let down = matrix.length-1;
  let x = 0;
  let y = 0;
  const result: number[] = [];
  
  function condition() {
    return up <= down && left <= right;
  }

  while (condition()) {
    for (y=left; condition() && y<=right; y++) {
      result.push(matrix[x][y]);
    }
    y--;
    up++;
    for (x=up; condition() && x<=down; x++) {
      result.push(matrix[x][y]);
    }
    x--;
    right--;
    for (y=right; condition() && y>=left; y--) {
      result.push(matrix[x][y]);
    }
    y++;
    down--;
    for (x=down; condition() && x>=up; x--) {
      result.push(matrix[x][y]);
    }
    left++;
    x++;
  }

  return result;
};
// @lc code=end

