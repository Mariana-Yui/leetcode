/*
 * @lc app=leetcode.cn id=718 lang=typescript
 *
 * [718] 最长重复子数组
 *
 * https://leetcode.cn/problems/maximum-length-of-repeated-subarray/description/
 *
 * algorithms
 * Medium (56.75%)
 * Likes:    1045
 * Dislikes: 0
 * Total Accepted:    222.1K
 * Total Submissions: 391.3K
 * Testcase Example:  '[1,2,3,2,1]\n[3,2,1,4,7]'
 *
 * 给两个整数数组 nums1 和 nums2 ，返回 两个数组中 公共的 、长度最长的子数组的长度 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums1 = [1,2,3,2,1], nums2 = [3,2,1,4,7]
 * 输出：3
 * 解释：长度最长的公共子数组是 [3,2,1] 。
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums1 = [0,0,0,0,0], nums2 = [0,0,0,0,0]
 * 输出：5
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= nums1.length, nums2.length <= 1000
 * 0 <= nums1[i], nums2[i] <= 100
 *
 *
 */

// @lc code=start
function findLength(nums1: number[], nums2: number[]): number {
  // DP 定义二维数组, 第一维表示nums1的子序列 第二维表示nums2的子序列
  /**
   * 1. dp[i][j]定义: 以nums1[i-1]结尾的子数组和nums2[j-1]结尾的子数组得到的最长子序列
   * 这里不以定义为nums1[i]和nums2[j]为结尾其实就是为了简化dp[0][j]和dp[i][0]的初始化逻辑
   * 2. dp递推公式: dp[i][j] = dp[i-1][j-1] + 1
   * 3. dp初始化: 基于定义我们知道i和j都应该从1开始, 那么初始化只需要定义dp[0][0], 又如果相等的话dp[1][1] = 1
   * 所以这里dp[0][0] = 0
   * 4. 遍历: 从前往后 如果是滚动数组j从后往前
   */
  const dp: number[][] = new Array(nums1.length + 1);
  let result = 0;
  for (let i = 0; i <= nums1.length; i++) dp[i] = new Array(nums2.length + 1).fill(0);
  dp[0][0] = 0;
  for (let i = 1; i <= nums1.length; i++) {
    for (let j = 1; j <= nums2.length; j++) {
      if (nums1[i - 1] === nums2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      }
      result = Math.max(dp[i][j], result);
    }
  }
  console.log(dp);
  return result;
}
// @lc code=end
