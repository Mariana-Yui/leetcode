/*
 * @lc app=leetcode.cn id=977 lang=typescript
 *
 * [977] 有序数组的平方
 *
 * https://leetcode.cn/problems/squares-of-a-sorted-array/description/
 *
 * algorithms
 * Easy (67.78%)
 * Likes:    914
 * Dislikes: 0
 * Total Accepted:    597.4K
 * Total Submissions: 881.5K
 * Testcase Example:  '[-4,-1,0,3,10]'
 *
 * 给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。
 * 
 * 
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [-4,-1,0,3,10]
 * 输出：[0,1,9,16,100]
 * 解释：平方后，数组变为 [16,1,0,9,100]
 * 排序后，数组变为 [0,1,9,16,100]
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [-7,-3,2,3,11]
 * 输出：[4,9,9,49,121]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 10^4
 * -10^4 
 * nums 已按 非递减顺序 排序
 * 
 * 
 * 
 * 
 * 进阶：
 * 
 * 
 * 请你设计时间复杂度为 O(n) 的算法解决本问题
 * 
 * 
 */

// @lc code=start
// 因为传入的数组已经事先排好序, 考虑双指针法
function sortedSquares(nums: number[]): number[] {
  const result = new Array(nums.length);
  // 这里<=, = 考虑最后一个数
  for (let head=0, tail=nums.length-1, k=nums.length-1; head<=tail;) {
    if (nums[head]*nums[head] < nums[tail]*nums[tail]) {
      result[k--] = nums[tail] * nums[tail];
      tail--;
    } else {
      result[k--] = nums[head] * nums[head];
      head++;
    }
  }
  return result;
};
// @lc code=end

