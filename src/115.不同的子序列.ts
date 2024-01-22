/*
 * @lc app=leetcode.cn id=115 lang=typescript
 *
 * [115] 不同的子序列
 *
 * https://leetcode.cn/problems/distinct-subsequences/description/
 *
 * algorithms
 * Hard (51.70%)
 * Likes:    1191
 * Dislikes: 0
 * Total Accepted:    162.4K
 * Total Submissions: 313.8K
 * Testcase Example:  '"rabbbit"\n"rabbit"'
 *
 * 给你两个字符串 s 和 t ，统计并返回在 s 的 子序列 中 t 出现的个数，结果需要对 10^9 + 7 取模。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：s = "rabbbit", t = "rabbit"
 * 输出：3
 * 解释：
 * 如下所示, 有 3 种可以从 s 中得到 "rabbit" 的方案。
 * rabbbit
 * rabbbit
 * rabbbit
 *
 * 示例 2：
 *
 *
 * 输入：s = "babgbag", t = "bag"
 * 输出：5
 * 解释：
 * 如下所示, 有 5 种可以从 s 中得到 "bag" 的方案。
 * babgbag
 * babgbag
 * babgbag
 * babgbag
 * babgbag
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= s.length, t.length <= 1000
 * s 和 t 由英文字母组成
 *
 *
 */

// @lc code=start
function numDistinct(s: string, t: string): number {
  // DP 求次数用双指针就做不了 如果不是子序列是连续序列可以考虑KMP
  /**
   * 1.dp[i][j]的定义, s[i-1]结尾的子序列中含有t[j-1]子序列的个数
   * 2.dp递推公式:
   * 一般这类问题分为两种情况
   * s[i-1]等于t[j-1]: 考虑s[i-1], dp[i][j] = dp[i-1][j-1]; 不考虑s[i-1], dp[i][j] = dp[i-1][j], 算上s中存在相同子串的情况
   * s[i-1]不等于t[j-1]: 这种就不用考虑s[i-1], 直接删掉s[i-1], dp[i][j] = dp[i-1][j]
   * 3.dp初始化: 因为涉及到s[i-1][j]就不得不初始化dp[0][j]
   * 空字符串中匹配不到t, dp[0][j] = 0
   * s中匹配空字符相当于删除i个字符匹配, dp[i][0] = 1
   * dp[0][0] = 1相当于空字符串删掉0个字符匹配到空字符串
   * 4.遍历: 从左上到右下
   */
  const dp: number[][] = new Array(s.length + 1);
  for (let i = 0; i <= s.length; i++) dp[i] = new Array(t.length + 1).fill(0);
  for (let i = 0; i <= s.length; i++) dp[i][0] = 1;
  for (let i = 1; i <= s.length; i++) {
    for (let j = 1; j <= t.length; j++) {
      if (s[i - 1] === t[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }
  return dp[s.length][t.length];
}
// @lc code=end
