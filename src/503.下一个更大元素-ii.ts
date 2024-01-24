/*
 * @lc app=leetcode.cn id=503 lang=typescript
 *
 * [503] 下一个更大元素 II
 *
 * https://leetcode.cn/problems/next-greater-element-ii/description/
 *
 * algorithms
 * Medium (67.23%)
 * Likes:    907
 * Dislikes: 0
 * Total Accepted:    227K
 * Total Submissions: 337.5K
 * Testcase Example:  '[1,2,1]'
 *
 * 给定一个循环数组 nums （ nums[nums.length - 1] 的下一个元素是 nums[0] ），返回 nums 中每个元素的
 * 下一个更大元素 。
 *
 * 数字 x 的 下一个更大的元素 是按数组遍历顺序，这个数字之后的第一个比它更大的数，这意味着你应该循环地搜索它的下一个更大的数。如果不存在，则输出 -1
 * 。
 *
 *
 *
 * 示例 1:
 *
 *
 * 输入: nums = [1,2,1]
 * 输出: [2,-1,2]
 * 解释: 第一个 1 的下一个更大的数是 2；
 * 数字 2 找不到下一个更大的数；
 * 第二个 1 的下一个最大的数需要循环搜索，结果也是 2。
 *
 *
 * 示例 2:
 *
 *
 * 输入: nums = [1,2,3,4,3]
 * 输出: [2,3,4,-1,4]
 *
 *
 *
 *
 * 提示:
 *
 *
 * 1 <= nums.length <= 10^4
 * -10^9 <= nums[i] <= 10^9
 *
 *
 */

// @lc code=start
function nextGreaterElements(nums: number[]): number[] {
  // 单调栈 循环数组 可以把数组的副本拼在当前数组后面, 也可以用余数模拟遍历两遍数组
  // 这里用余数模拟首尾相连
  const result: number[] = new Array(nums.length).fill(-1);
  const s: number[] = []; // stack
  s.push(0);
  for (let i = 1; i < nums.length * 2; i++) {
    if (nums[i % nums.length] <= nums[s[s.length - 1] % nums.length]) {
      s.push(i);
    } else {
      while (s.length && nums[i % nums.length] > nums[s[s.length - 1] % nums.length]) {
        result[s[s.length - 1] % nums.length] = nums[i % nums.length];
        s.pop();
      }
      s.push(i);
    }
  }
  return result;
}
// @lc code=end
