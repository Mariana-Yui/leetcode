/*
 * @lc app=leetcode.cn id=1143 lang=typescript
 *
 * [1143] 最长公共子序列
 *
 * https://leetcode.cn/problems/longest-common-subsequence/description/
 *
 * algorithms
 * Medium (65.00%)
 * Likes:    1501
 * Dislikes: 0
 * Total Accepted:    406K
 * Total Submissions: 624.5K
 * Testcase Example:  '"abcde"\n"ace"'
 *
 * 给定两个字符串 text1 和 text2，返回这两个字符串的最长 公共子序列 的长度。如果不存在 公共子序列 ，返回 0 。
 *
 * 一个字符串的 子序列
 * 是指这样一个新的字符串：它是由原字符串在不改变字符的相对顺序的情况下删除某些字符（也可以不删除任何字符）后组成的新字符串。
 *
 *
 * 例如，"ace" 是 "abcde" 的子序列，但 "aec" 不是 "abcde" 的子序列。
 *
 *
 * 两个字符串的 公共子序列 是这两个字符串所共同拥有的子序列。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：text1 = "abcde", text2 = "ace"
 * 输出：3
 * 解释：最长公共子序列是 "ace" ，它的长度为 3 。
 *
 *
 * 示例 2：
 *
 *
 * 输入：text1 = "abc", text2 = "abc"
 * 输出：3
 * 解释：最长公共子序列是 "abc" ，它的长度为 3 。
 *
 *
 * 示例 3：
 *
 *
 * 输入：text1 = "abc", text2 = "def"
 * 输出：0
 * 解释：两个字符串没有公共子序列，返回 0 。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * text1 和 text2 仅由小写英文字符组成。
 *
 *
 */

// @lc code=start
function longestCommonSubsequence(text1: string, text2: string): number {
  // DP 和718.类似 区别是不局限于连续子序列 一定要明确dp[]的定义 然后不要想太多把自己绕进去
  /**
   * 1.dp[i][j]定义: 以text1[i-1]为结尾的子串和text[j-1]为结尾的子串可以得到的最长公共子序列
   * 和718.一样, 定义为i-1/j-1为了简化初始化操作
   * 2.dp递推公式:
   * 分为两种情况
   * 如果text1[i-1] 等于 text2[j-1], dp[i][j] = dp[i-1][j-1] + 1
   * 如果text1[i-1] 不等于 text2[j-1], 因为不要求连续, 那么dp可以继承之前的dp, dp[i][j] = max{dp[i-1][j], dp[i][j-1]}
   * 3.dp初始化: dp[0][0] = 0
   * 4.遍历: 从前往后
   */
  const dp: number[][] = new Array(text1.length + 1);
  let result = 0;
  for (let i = 0; i <= text1.length; i++) dp[i] = new Array(text2.length + 1).fill(0);
  dp[0][0] = 0;
  for (let i = 1; i <= text1.length; i++) {
    for (let j = 1; j <= text2.length; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
      }
      result = Math.max(result, dp[i][j]);
    }
  }
  return result;
}
// @lc code=end
