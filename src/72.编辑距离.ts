/*
 * @lc app=leetcode.cn id=72 lang=typescript
 *
 * [72] 编辑距离
 *
 * https://leetcode.cn/problems/edit-distance/description/
 *
 * algorithms
 * Medium (62.80%)
 * Likes:    3269
 * Dislikes: 0
 * Total Accepted:    433.7K
 * Total Submissions: 690.5K
 * Testcase Example:  '"horse"\n"ros"'
 *
 * 给你两个单词 word1 和 word2， 请返回将 word1 转换成 word2 所使用的最少操作数  。
 *
 * 你可以对一个单词进行如下三种操作：
 *
 *
 * 插入一个字符
 * 删除一个字符
 * 替换一个字符
 *
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：word1 = "horse", word2 = "ros"
 * 输出：3
 * 解释：
 * horse -> rorse (将 'h' 替换为 'r')
 * rorse -> rose (删除 'r')
 * rose -> ros (删除 'e')
 *
 *
 * 示例 2：
 *
 *
 * 输入：word1 = "intention", word2 = "execution"
 * 输出：5
 * 解释：
 * intention -> inention (删除 't')
 * inention -> enention (将 'i' 替换为 'e')
 * enention -> exention (将 'n' 替换为 'x')
 * exention -> exection (将 'n' 替换为 'c')
 * exection -> execution (插入 'u')
 *
 *
 *
 *
 * 提示：
 *
 *
 * 0 <= word1.length, word2.length <= 500
 * word1 和 word2 由小写英文字母组成
 *
 *
 */

// @lc code=start
function minDistance(word1: string, word2: string): number {
  // DP 感觉好难啊QAQ
  /**
   * 推导递归公式的时候需要牢记dp的定义, 在此基础上思考
   * 1.dp[i][j]定义: 以word1[i-1]和word[j-1]结尾的子序列需要编辑的最近距离
   * 2.dp递推公式:
   * 分两种情况:
   * word1[i-1] 等于 word2[j-1] 此时说明最后一位不用更改, dp[i][j] = dp[i-1][j-1]
   * word1[i-1]不等于 word2[j-1] 根据题干又分为三种情况:
   * word1[i-1]删除 这是一个操作, 此时dp[i][j] = dp[i-1][j] + 1
   * word2[j-1]删除 相当于word1[i-1]增加 这是一个操作, 此时dp[i][j] = dp[i][j-1] + 1;
   * word1[i-1]替换成word2[j-1], 这是一个操作, 然后就回到等于的情况, 此时 dp[i][j] = dp[i-1][j-1] + 1;
   * dp[i][j] = max{dp[i-1][j], dp[i][j-1], dp[i-1][j-1]} + 1
   * 3.dp初始化: 由dp的定义很好得到 dp[i][0] = i(word1删掉i个元素) dp[0][j] = j(word1增加j个元素) dp[0][0] = 0(无操作)
   * 4.遍历: 从前到后
   */
  const dp: number[][] = new Array(word1.length + 1);
  for (let i = 0; i < dp.length; i++) dp[i] = new Array(word2.length + 1).fill(0);
  for (let i = 0; i <= word1.length; i++) dp[i][0] = i;
  for (let j = 0; j <= word2.length; j++) dp[0][j] = j;
  for (let i = 1; i <= word1.length; i++) {
    for (let j = 1; j <= word2.length; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
      }
    }
  }
  return dp[word1.length][word2.length];
}
// @lc code=end
