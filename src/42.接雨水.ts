/*
 * @lc app=leetcode.cn id=42 lang=typescript
 *
 * [42] 接雨水
 *
 * https://leetcode.cn/problems/trapping-rain-water/description/
 *
 * algorithms
 * Hard (63.22%)
 * Likes:    4980
 * Dislikes: 0
 * Total Accepted:    849.3K
 * Total Submissions: 1.3M
 * Testcase Example:  '[0,1,0,2,1,0,1,3,2,1,2,1]'
 *
 * 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
 *
 *
 *
 * 示例 1：
 *
 *
 *
 *
 * 输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
 * 输出：6
 * 解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。
 *
 *
 * 示例 2：
 *
 *
 * 输入：height = [4,2,0,3,2,5]
 * 输出：9
 *
 *
 *
 *
 * 提示：
 *
 *
 * n == height.length
 * 1 <= n <= 2 * 10^4
 * 0 <= height[i] <= 10^5
 *
 *
 */

// @lc code=start
function trap(height: number[]): number {
  // 高频考点 双指针法 或者 单调栈
  // 双指针法 按列方向遍历 每一列能装的雨水: min{该列左边的最大高度, 该列右边的最大高度} - 该列高度
  // const maxLeft: number[] = new Array(height.length); // 第i列左侧最大高度 包括自身
  // const maxRight: number[] = new Array(height.length); // 第i列右侧最大高度 包括自身
  // maxLeft[0] = height[0];
  // for (let i = 1; i < maxLeft.length; i++) {
  //   maxLeft[i] = Math.max(height[i], maxLeft[i - 1]);
  // }
  // maxRight[height.length - 1] = height[height.length - 1];
  // for (let i = height.length - 2; i >= 0; i--) {
  //   maxRight[i] = Math.max(height[i], maxRight[i + 1]);
  // }
  // let sum = 0;
  // for (let i = 0; i < height.length; i++) {
  //   const h = Math.min(maxLeft[i], maxRight[i]) - height[i];
  //   if (h > 0) sum += h; // 按列方向遍历宽度就是1, 即 h*1
  // }
  // return sum;

  // 单调栈法 按行方向遍历 这是关键 如果栈顶高度 < 当前高度 且 栈顶高度 < 栈第二个元素高度 就能形成凹槽
  // 所以栈顶到栈底 是 递增序列
  const s: number[] = [];
  let sum = 0;
  s.push(0);
  for (let i = 1; i < height.length; i++) {
    if (height[i] < height[s[s.length - 1]]) {
      s.push(i);
    } else if (height[i] === height[s[s.length - 1]]) {
      // 如果相邻的高度相同, 用最新的, 高度相同装不了一点
      s.pop();
      s.push(i);
    } else {
      while (s.length && height[i] > height[s[s.length - 1]]) {
        const mid = height[s[s.length - 1]];
        s.pop();
        if (s.length) {
          // 保持单调递增栈的同时计算凹槽需要保证栈里至少2个元素
          const h = Math.min(height[i], height[s[s.length - 1]]) - mid;
          const w = i - s[s.length - 1] - 1;
          sum += h * w;
        }
      }
      s.push(i);
    }
  }
  return sum;
}
// @lc code=end
