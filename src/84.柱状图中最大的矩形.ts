/*
 * @lc app=leetcode.cn id=84 lang=typescript
 *
 * [84] 柱状图中最大的矩形
 *
 * https://leetcode.cn/problems/largest-rectangle-in-histogram/description/
 *
 * algorithms
 * Hard (45.38%)
 * Likes:    2651
 * Dislikes: 0
 * Total Accepted:    386.6K
 * Total Submissions: 851.4K
 * Testcase Example:  '[2,1,5,6,2,3]'
 *
 * 给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。
 *
 * 求在该柱状图中，能够勾勒出来的矩形的最大面积。
 *
 *
 *
 * 示例 1:
 *
 *
 *
 *
 * 输入：heights = [2,1,5,6,2,3]
 * 输出：10
 * 解释：最大的矩形为图中红色区域，面积为 10
 *
 *
 * 示例 2：
 *
 *
 *
 *
 * 输入： heights = [2,4]
 * 输出： 4
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * 0
 *
 *
 */

// @lc code=start
function largestRectangleArea(heights: number[]): number {
  // 单调栈 和42.类似, 该题是构造单调递减栈
  /**
   * 为什么是单调递减栈?
   * 因为每次算的是栈顶元素下标对应的高度参与构建矩形能够形成的面积, 然后取最大值
   */
  let result = 0;
  const s: number[] = [];
  const height = [0, ...heights, 0]; // 因为首尾元素参与计算 所以要在首尾添加最小值保证宽度能正常计算
  s.push(0);
  for (let i = 1; i < height.length; i++) {
    if (height[i] > height[s[s.length - 1]]) {
      s.push(i);
    } else if (height[i] === height[s[s.length - 1]]) {
      s.pop();
      s.push(i);
    } else {
      while (s.length && height[i] < height[s[s.length - 1]]) {
        const h = height[s[s.length - 1]];
        s.pop();
        const w = i - s[s.length - 1] - 1;
        result = Math.max(result, h * w);
      }
      s.push(i);
    }
  }
  return result;
}
// @lc code=end
