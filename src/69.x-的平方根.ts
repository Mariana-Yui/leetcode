/*
 * @lc app=leetcode.cn id=69 lang=typescript
 *
 * [69] x 的平方根 
 *
 * https://leetcode.cn/problems/sqrtx/description/
 *
 * algorithms
 * Easy (38.43%)
 * Likes:    1468
 * Dislikes: 0
 * Total Accepted:    810.2K
 * Total Submissions: 2.1M
 * Testcase Example:  '4'
 *
 * 给你一个非负整数 x ，计算并返回 x 的 算术平方根 。
 * 
 * 由于返回类型是整数，结果只保留 整数部分 ，小数部分将被 舍去 。
 * 
 * 注意：不允许使用任何内置指数函数和算符，例如 pow(x, 0.5) 或者 x ** 0.5 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：x = 4
 * 输出：2
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：x = 8
 * 输出：2
 * 解释：8 的算术平方根是 2.82842..., 由于返回类型是整数，小数部分将被舍去。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 <= x <= 2^31 - 1
 * 
 * 
 */

// @lc code=start
// function mySqrt(x: number): number {
//   let left = 1, right = x;
//   while (left <= right) {
//     const middle = Math.floor((left + right) / 2);
//     if ((middle+1) * (middle+1) < x) {
//       left = middle + 1;
//     } else if (middle * middle > x) {
//       right = middle - 1;
//     } else if ((middle+1) * (middle+1) === x) {
//       return middle + 1;
//     } else {
//       return middle;
//     }
//   }
//   return 0;
// };
/**
 * 牛顿迭代法
 * Xn+1 = Xn - f(Xn)/f'(Xn)
 * f(x) = x^2 - n
 */
function mySqrt(n: number): number {
  let x = n, y = (x + n / x) / 2;
  let precision = 1e-15;
  while (Math.abs(x - y) > precision) {
    x = y;
    y = (x + n / x) / 2;
  }

  return Math.floor(x);
};
// @lc code=end

