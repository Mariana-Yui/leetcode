/*
 * @lc app=leetcode.cn id=583 lang=typescript
 *
 * [583] 两个字符串的删除操作
 *
 * https://leetcode.cn/problems/delete-operation-for-two-strings/description/
 *
 * algorithms
 * Medium (66.97%)
 * Likes:    656
 * Dislikes: 0
 * Total Accepted:    145.1K
 * Total Submissions: 216.6K
 * Testcase Example:  '"sea"\n"eat"'
 *
 * 给定两个单词 word1 和 word2 ，返回使得 word1 和  word2 相同所需的最小步数。
 *
 * 每步 可以删除任意一个字符串中的一个字符。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入: word1 = "sea", word2 = "eat"
 * 输出: 2
 * 解释: 第一步将 "sea" 变为 "ea" ，第二步将 "eat "变为 "ea"
 *
 *
 * 示例  2:
 *
 *
 * 输入：word1 = "leetcode", word2 = "etco"
 * 输出：4
 *
 *
 *
 *
 * 提示：
 *
 *
 *
 * 1 <= word1.length, word2.length <= 500
 * word1 和 word2 只包含小写英文字母
 *
 *
 */

// @lc code=start
function minDistance(word1: string, word2: string): number {
  // DP 和115.思路类似 区别是只能删一个字符串变为两个字符串都可以删
  /**
   * 1. dp[i][j]定义: 以word1[i]和word2[j]结尾的子序列相等需要删除的最小步数
   * 2. dp递推公式:
   * 同样地, 分为两种情况讨论:
   * word1[i] 等于 word2[j] 那就不用考虑自身, dp[i][j] = dp[i-1][j-1]
   * word1[i] 不等于 word2[j] 分三种情况讨论:
   * 删除i, 不删除j -> dp[i][j] = dp[i-1][j] + 1;
   * 删除j, 不删除i -> dp[i][j] = dp[i][j-1] + 1;
   * 删除i和j -> dp[i][j] = dp[i-1][j-1] + 2;
   * 三者取最小值: min{dp[i-1][j]+1, dp[i][j-1]+1, dp[i-1][j-1]+2}
   * 3. dp初始化: 从递推公式可以看出dp[i][0]和dp[0][j]都需要初始化 从dp的定义可以得出dp[i][0]=i dp[0][j]=j
   */
  const dp: number[][] = new Array(word1.length + 1);
  for (let i = 0; i <= word1.length; i++) dp[i] = new Array(word2.length + 1);
  for (let i = 0; i <= word1.length; i++) dp[i][0] = i;
  for (let j = 0; j <= word2.length; j++) dp[0][j] = j;
  for (let i = 1; i <= word1.length; i++) {
    for (let j = 1; j <= word2.length; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + 2);
      }
    }
  }
  return dp[word1.length][word2.length];
}
// @lc code=end
