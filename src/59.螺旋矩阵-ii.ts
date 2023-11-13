/*
 * @lc app=leetcode.cn id=59 lang=typescript
 *
 * [59] 螺旋矩阵 II
 *
 * https://leetcode.cn/problems/spiral-matrix-ii/description/
 *
 * algorithms
 * Medium (71.81%)
 * Likes:    1203
 * Dislikes: 0
 * Total Accepted:    366.2K
 * Total Submissions: 510.2K
 * Testcase Example:  '3'
 *
 * 给你一个正整数 n ，生成一个包含 1 到 n^2 所有元素，且元素按顺时针顺序螺旋排列的 n x n 正方形矩阵 matrix 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：n = 3
 * 输出：[[1,2,3],[8,9,4],[7,6,5]]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：n = 1
 * 输出：[[1]]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * 
 * 
 */

// @lc code=start
function generateMatrix(n: number): number[][] {
  const arr = new Array(n).fill(0).map(_ => new Array(n).fill(0));
  let i = 0;
  let j = 0; 
  let loop = 0; // 循环轮数
  let start = 0; // 每轮循环的起始点 (start, start)
  let count = 1;
  // 每个螺旋矩阵都有n/2的循环
  while (loop++ < Math.floor(n/2)) {
    // 每次都是n - start - 1次
    // left to right
    for (i = start, j = start; j < n-start-1; j++) {
      arr[i][j] = count++;
    }
    // up to down
    for (; i < n-start-1; i++) {
      arr[i][j] = count++;
    }
    // right to left
    for (; j >= loop; j--) {
      arr[i][j] = count++;
    }
    // down to up
    for (; i >= loop; i--) {
      arr[i][j] = count++;
    }

    start++;
  }
  if (n % 2 === 1) {
    arr[start][start] = count;
  }

  return arr;
};
// @lc code=end

