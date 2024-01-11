/*
 * @lc app=leetcode.cn id=698 lang=typescript
 *
 * [698] 划分为k个相等的子集
 *
 * https://leetcode.cn/problems/partition-to-k-equal-sum-subsets/description/
 *
 * algorithms
 * Medium (41.89%)
 * Likes:    1008
 * Dislikes: 0
 * Total Accepted:    110.8K
 * Total Submissions: 264.4K
 * Testcase Example:  '[4,3,2,3,5,2,1]\n4'
 *
 * 给定一个整数数组  nums 和一个正整数 k，找出是否有可能把这个数组分成 k 个非空子集，其总和都相等。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入： nums = [4, 3, 2, 3, 5, 2, 1], k = 4
 * 输出： True
 * 说明： 有可能将其分成 4 个子集（5），（1,4），（2,3），（2,3）等于总和。
 *
 * 示例 2:
 *
 *
 * 输入: nums = [1,2,3,4], k = 3
 * 输出: false
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= k <= len(nums) <= 16
 * 0 < nums[i] < 10000
 * 每个元素的频率在 [1,4] 范围内
 *
 *
 */

// @lc code=start
function canPartitionKSubsets(nums: number[], k: number): boolean {
  /** 回溯法如果剪枝不够精确会超时, 看题解说用状态压缩+动态规划, 看不懂..先做个标记 */
  /**
   * 把问题抽象为将nums.length个球放入k个桶中
   * 每个球都能选择放入任意一个桶, 就转化为k叉树查找路径问题
   * 存在三个剪枝操作:
   * 1. 当第k个桶里的值+要放进去的球值>target时可以跳过
   * 2. 先将nums降序排序, 这要能保证更快地触发1.的剪枝
   * 3. 如果两个桶的值相同可以直接跳过, 直接放到第i-1个桶 !!这是非常关键的剪枝操作, 否则会超时
   */

  function backtracking(nums: number[], startIndex: number): boolean {
    // !! 很巧妙的结束条件
    if (startIndex === nums.length) return true;
    for (let i = 0; i < k; i++) {
      if (i > 0 && bucket[i] === bucket[i - 1]) continue; // 剪枝3
      if (bucket[i] + nums[startIndex] > target) continue; // 剪枝1
      bucket[i] += nums[startIndex];
      if (backtracking(nums, startIndex + 1)) return true;
      bucket[i] -= nums[startIndex];
    }
    return false;
  }
  const target = nums.reduce((p, c) => p + c, 0) / k;
  if (~~target !== target) return false;
  nums.sort((a, b) => b - a); // 剪枝2
  const bucket = new Array(k).fill(0);
  return backtracking(nums, 0);
}
// @lc code=end
