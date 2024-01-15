/*
 * @lc app=leetcode.cn id=494 lang=typescript
 *
 * [494] 目标和
 *
 * https://leetcode.cn/problems/target-sum/description/
 *
 * algorithms
 * Medium (48.42%)
 * Likes:    1838
 * Dislikes: 0
 * Total Accepted:    404.2K
 * Total Submissions: 834.8K
 * Testcase Example:  '[1,1,1,1,1]\n3'
 *
 * 给你一个非负整数数组 nums 和一个整数 target 。
 *
 * 向数组中的每个整数前添加 '+' 或 '-' ，然后串联起所有整数，可以构造一个 表达式 ：
 *
 *
 * 例如，nums = [2, 1] ，可以在 2 之前添加 '+' ，在 1 之前添加 '-' ，然后串联起来得到表达式 "+2-1" 。
 *
 *
 * 返回可以通过上述方法构造的、运算结果等于 target 的不同 表达式 的数目。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [1,1,1,1,1], target = 3
 * 输出：5
 * 解释：一共有 5 种方法让最终目标和为 3 。
 * -1 + 1 + 1 + 1 + 1 = 3
 * +1 - 1 + 1 + 1 + 1 = 3
 * +1 + 1 - 1 + 1 + 1 = 3
 * +1 + 1 + 1 - 1 + 1 = 3
 * +1 + 1 + 1 + 1 - 1 = 3
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = [1], target = 1
 * 输出：1
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= nums.length <= 20
 * 0 <= nums[i] <= 1000
 * 0 <= sum(nums[i]) <= 1000
 * -1000 <= target <= 1000
 *
 *
 */

// @lc code=start
function findTargetSumWays(nums: number[], target: number): number {
  // 回溯 会超时:P (不对居然没有超时😨
  /**
   * 其实这题能转化成组合求和的问题从而通过回溯处理
   * 首先提取关键信息
   * 1. nums.length个数, n个数累加 - (nums.length-n)个数累加 = target
   * 2. 令nums.length个数全部累加即 n个数累加 + (nums.length-n)个数累加 = S
   * 3. 可以得到 S + target = n个数累加 * 2
   * 也就是说如果有组合能满足1. 一定有组合求和 = (S+target)/2
   */
  // function backtracking(nums: number[], target: number, sum: number, startIndex: number): void {
  //   if (sum === target) {
  //     result++;
  //   }
  //   // 因为要排序所以判断条件直接写开头
  //   for (let i = startIndex; i < nums.length && sum + nums[i] <= target; i++) {
  //     backtracking(nums, target, sum + nums[i], i + 1);
  //   }
  // }
  // let result = 0;
  // const sum = nums.reduce((p, c) => p + c, 0);
  // if (Math.abs(target) > sum) return 0;
  // if ((sum + target) % 2) return 0;
  // const n = (sum + target) / 2;
  // nums.sort((a, b) => a - b);
  // backtracking(nums, n, 0, 0);
  // return result;

  // DP 组合求个数可以通过dp梳理
  /**
   * 01背包问题用一维数组表示
   * 1. dp[j]及下标含义: dp[j]为装满重量为j的背包有几种方法
   * 2. dp递推公式: dp[j] += dp[j-nums[j]]
   * 3. dp初始化: 其实不好初始化, 不知dp[0]是0还是1, 但是根据递推公式只能初始为1, 否则递推结果永远是0
   * 4. dp遍历: 外层i正序, 内层j倒序
   */
  const sum = nums.reduce((p, c) => p + c, 0);
  if (Math.abs(target) > sum) return 0;
  if ((sum + target) % 2) return 0;
  const bagSize = (sum + target) / 2;
  const dp: number[] = new Array(bagSize + 1).fill(0);
  dp[0] = 1; // 初始化
  for (let i = 0; i < nums.length; i++) {
    for (let j = bagSize; j >= nums[i]; j--) {
      dp[j] += dp[j - nums[i]];
    }
  }
  return dp[bagSize];
}
// @lc code=end
