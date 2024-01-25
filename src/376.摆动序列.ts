/*
 * @lc app=leetcode.cn id=376 lang=typescript
 *
 * [376] 摆动序列
 *
 * https://leetcode.cn/problems/wiggle-subsequence/description/
 *
 * algorithms
 * Medium (46.65%)
 * Likes:    1077
 * Dislikes: 0
 * Total Accepted:    213.1K
 * Total Submissions: 456.9K
 * Testcase Example:  '[1,7,4,9,2,5]'
 *
 * 如果连续数字之间的差严格地在正数和负数之间交替，则数字序列称为 摆动序列
 * 。第一个差（如果存在的话）可能是正数或负数。仅有一个元素或者含两个不等元素的序列也视作摆动序列。
 *
 *
 *
 * 例如， [1, 7, 4, 9, 2, 5] 是一个 摆动序列 ，因为差值 (6, -3, 5, -7, 3) 是正负交替出现的。
 *
 * 相反，[1, 4, 7, 2, 5] 和 [1, 7, 4, 5, 5]
 * 不是摆动序列，第一个序列是因为它的前两个差值都是正数，第二个序列是因为它的最后一个差值为零。
 *
 *
 * 子序列 可以通过从原始序列中删除一些（也可以不删除）元素来获得，剩下的元素保持其原始顺序。
 *
 * 给你一个整数数组 nums ，返回 nums 中作为 摆动序列 的 最长子序列的长度 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [1,7,4,9,2,5]
 * 输出：6
 * 解释：整个序列均为摆动序列，各元素之间的差值为 (6, -3, 5, -7, 3) 。
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = [1,17,5,10,13,15,10,5,16,8]
 * 输出：7
 * 解释：这个序列包含几个长度为 7 摆动序列。
 * 其中一个是 [1, 17, 10, 13, 10, 16, 8] ，各元素之间的差值为 (16, -7, 3, -3, 6, -8) 。
 *
 *
 * 示例 3：
 *
 *
 * 输入：nums = [1,2,3,4,5,6,7,8,9]
 * 输出：2
 *
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
 *
 *
 * 进阶：你能否用 O(n) 时间复杂度完成此题?
 *
 */

// @lc code=start
function wiggleMaxLength(nums: number[]): number {
  // 局部最优: 删除单调区间中的所有节点, 得到两个峰值; 整体最优: 整个序列有最多的局部峰值从而得到最长摆动序列
  /**
   * 所有情况(反转也包含)
   * 1. 单调上坡+单调下坡 (preDiff > 0 && curDiff < 0) || (preDiff < 0 && curDiff > 0)
   * 2. 单调上坡+平坡+单调下坡 preDiff >= 0 && curDiff < 0 单调下坡+平坡+单调上坡 preDiff <= 0 && curDiff > 0
   * 3. 单调上坡+平坡+单调上坡
   * 4. 首尾两端统计 初始化result=1记录尾节点, 因为遍历到最后一个节点时就没有i+1能够计算curDiff
   * 初始化preDiff=0相当于将[2,5]扩展为[2,2,5], 就能够进入判断分支, 否则需要三个节点才能判断
   */
  // let preDiff = 0;
  // let curDiff = 0;
  // let result = 1; // 默认记录尾节点为峰值, 遍历完摆动序列都不满足条件结果也就是1个峰值
  // for (let i = 0; i < nums.length; i++) {
  //   curDiff = nums[i + 1] - nums[i];
  //   // situation 1,2,4 平坡时curDiff=0不会进入分支
  //   if ((preDiff >= 0 && curDiff < 0) || (preDiff <= 0 && curDiff > 0)) {
  //     result++;
  //     preDiff = curDiff; // situaion 3
  //   }
  //   // preDiff = curDiff; 不符合situation 3
  // }

  // return result;

  // DP
  /**
   * dp[i][0] 第i个数作为波峰的最长摆动序列
   * dp[i][1] 第i个数作为波谷的最长摆动序列
   */
  const dp: number[][] = new Array(nums.length);
  for (let i = 0; i < dp.length; i++) dp[i] = new Array(2).fill(0);
  dp[0][0] = dp[0][1] = 1;
  for (let i = 0; i < nums.length; i++) {
    dp[i][0] = dp[i][1] = 1;
    for (let j = 0; j < i; j++) {
      if (nums[j] > nums[i]) dp[i][1] = Math.max(dp[i][1], dp[j][0] + 1);
      else if (nums[j] < nums[i]) dp[i][0] = Math.max(dp[i][0], dp[j][1] + 1);
    }
  }
  return Math.max(dp[nums.length - 1][0], dp[nums.length - 1][1]);
}
// @lc code=end
