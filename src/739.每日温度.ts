/*
 * @lc app=leetcode.cn id=739 lang=typescript
 *
 * [739] 每日温度
 *
 * https://leetcode.cn/problems/daily-temperatures/description/
 *
 * algorithms
 * Medium (68.78%)
 * Likes:    1691
 * Dislikes: 0
 * Total Accepted:    501.9K
 * Total Submissions: 729.7K
 * Testcase Example:  '[73,74,75,71,69,72,76,73]'
 *
 * 给定一个整数数组 temperatures ，表示每天的温度，返回一个数组 answer ，其中 answer[i] 是指对于第 i
 * 天，下一个更高温度出现在几天后。如果气温在这之后都不会升高，请在该位置用 0 来代替。
 *
 *
 *
 * 示例 1:
 *
 *
 * 输入: temperatures = [73,74,75,71,69,72,76,73]
 * 输出: [1,1,4,2,1,1,0,0]
 *
 *
 * 示例 2:
 *
 *
 * 输入: temperatures = [30,40,50,60]
 * 输出: [1,1,1,0]
 *
 *
 * 示例 3:
 *
 *
 * 输入: temperatures = [30,60,90]
 * 输出: [1,1,0]
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= temperatures.length <= 10^5
 * 30 <= temperatures[i] <= 100
 *
 *
 */

// @lc code=start
function dailyTemperatures(temperatures: number[]): number[] {
  // 单调栈
  // 适用场景 通常是一维数组，要寻找任一个元素的右边或者左边第一个比自己大或者小的元素的位置，此时我们就要想到可以用单调栈了
  const result: number[] = new Array(temperatures.length).fill(0);
  const stack: number[] = [];
  stack.push(0);
  for (let i = 1; i < temperatures.length; i++) {
    let top = stack[stack.length - 1];
    if (temperatures[i] <= temperatures[top]) {
      stack.push(i);
    } else {
      while (stack.length && temperatures[i] > temperatures[top]) {
        result[top] = i - top;
        stack.pop();
        top = stack[stack.length - 1];
      }
      stack.push(i);
    }
  }
  return result;
}
// @lc code=end
