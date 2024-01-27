/*
 * @lc app=leetcode.cn id=738 lang=typescript
 *
 * [738] 单调递增的数字
 *
 * https://leetcode.cn/problems/monotone-increasing-digits/description/
 *
 * algorithms
 * Medium (50.61%)
 * Likes:    447
 * Dislikes: 0
 * Total Accepted:    108.5K
 * Total Submissions: 214.1K
 * Testcase Example:  '10'
 *
 * 当且仅当每个相邻位数上的数字 x 和 y 满足 x <= y 时，我们称这个整数是单调递增的。
 *
 * 给定一个整数 n ，返回 小于或等于 n 的最大数字，且数字呈 单调递增 。
 *
 *
 *
 * 示例 1:
 *
 *
 * 输入: n = 10
 * 输出: 9
 *
 *
 * 示例 2:
 *
 *
 * 输入: n = 1234
 * 输出: 1234
 *
 *
 * 示例 3:
 *
 *
 * 输入: n = 332
 * 输出: 299
 *
 *
 *
 *
 * 提示:
 *
 *
 * 0 <= n <= 10^9
 *
 *
 */

// @lc code=start
function monotoneIncreasingDigits(n: number): number {
  // 贪心
  /**
   * 局部最优: 前面的数大于后面的数, 前面的数-1, 后面的数变成9
   * 全局最优: 得到小于n的最大单调递增数
   */
  const ns = String(n).split('');
  let flag = ns.length;
  // 从后往前遍历
  for (let i = ns.length - 1; i > 0; i--) {
    if (ns[i - 1] > ns[i]) {
      flag = i;
      ns[i - 1] = String(Number(ns[i - 1]) - 1);
    }
  }
  for (let i = flag; i < ns.length; i++) {
    ns[i] = '9';
  }
  return Number(ns.join(''));
}
monotoneIncreasingDigits(10);
// @lc code=end
