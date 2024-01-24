/*
 * @lc app=leetcode.cn id=516 lang=typescript
 *
 * [516] 最长回文子序列
 *
 * https://leetcode.cn/problems/longest-palindromic-subsequence/description/
 *
 * algorithms
 * Medium (67.13%)
 * Likes:    1158
 * Dislikes: 0
 * Total Accepted:    214.9K
 * Total Submissions: 320.2K
 * Testcase Example:  '"bbbab"'
 *
 * 给你一个字符串 s ，找出其中最长的回文子序列，并返回该序列的长度。
 *
 * 子序列定义为：不改变剩余字符顺序的情况下，删除某些字符或者不删除任何字符形成的一个序列。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：s = "bbbab"
 * 输出：4
 * 解释：一个可能的最长回文子序列为 "bbbb" 。
 *
 *
 * 示例 2：
 *
 *
 * 输入：s = "cbbd"
 * 输出：2
 * 解释：一个可能的最长回文子序列为 "bb" 。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * s 仅由小写英文字母组成
 *
 *
 */

// @lc code=start
function longestPalindromeSubseq(s: string): number {
  // s[i]==s[j] dp[i][j] = dp[i+1][j-1] + 2 s[i] != s[j] dp[i][j] = dp[i+1][j-1]
  const dp: number[][] = new Array(s.length);
  let result = 1;
  for (let i = 0; i < dp.length; i++) dp[i] = new Array(s.length).fill(0);
  for (let i = 0; i < dp.length; i++) dp[i][i] = 1;
  for (let i = s.length - 1; i >= 0; i--) {
    for (let j = i + 1; j < s.length; j++) {
      if (s[i] === s[j]) {
        dp[i][j] = dp[i + 1][j - 1] + 2;
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
      }
      result = Math.max(result, dp[i][j]);
    }
  }
  return result;
}
// @lc code=end
