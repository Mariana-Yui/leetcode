/*
 * @lc app=leetcode.cn id=647 lang=typescript
 *
 * [647] 回文子串
 *
 * https://leetcode.cn/problems/palindromic-substrings/description/
 *
 * algorithms
 * Medium (67.12%)
 * Likes:    1282
 * Dislikes: 0
 * Total Accepted:    313.6K
 * Total Submissions: 467K
 * Testcase Example:  '"abc"'
 *
 * 给你一个字符串 s ，请你统计并返回这个字符串中 回文子串 的数目。
 *
 * 回文字符串 是正着读和倒过来读一样的字符串。
 *
 * 子字符串 是字符串中的由连续字符组成的一个序列。
 *
 * 具有不同开始位置或结束位置的子串，即使是由相同的字符组成，也会被视作不同的子串。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：s = "abc"
 * 输出：3
 * 解释：三个回文子串: "a", "b", "c"
 *
 *
 * 示例 2：
 *
 *
 * 输入：s = "aaa"
 * 输出：6
 * 解释：6个回文子串: "a", "a", "a", "aa", "aa", "aaa"
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= s.length <= 1000
 * s 由小写英文字母组成
 *
 *
 */

// @lc code=start
function countSubstrings(s: string): number {
  // DP
  /**
   * 从回文的定义出发, 如果在[i,j](左闭右闭)区间内, 左右两侧的值都是相等的
   * 1.dp[i][j]定义: 布尔值 s在[i,j]区间内的子序列为回文
   * 2.dp递推公式:
   * 如果s[i]不等于s[j]那肯定不是回文
   * 如果s[i] 等于 s[j] 分情况讨论: i==j 是回文, i和j相邻 是回文, i和j离得更远, dp[i][j] = dp[i+1][j-1] 收拢区间
   * 3.dp初始化: dp[i][i]和dp[i][j(相邻)] = true
   * 4.遍历: 从递推公式可以看出, dp[i+1][j-1]在dp[i][j]的左下角, 所以遍历应该是从下往上, 从左往右的
   */
  const dp: boolean[][] = new Array(s.length);
  let result = 0;
  for (let i = 0; i < dp.length; i++) dp[i] = new Array(s.length).fill(false);
  for (let i = s.length - 1; i >= 0; i--) {
    for (let j = i; j < s.length; j++) {
      if (s[i] === s[j]) {
        if (j - i <= 1) {
          result++;
          dp[i][j] = true;
        } else {
          dp[i][j] = dp[i + 1][j - 1];
          if (dp[i][j]) result++;
        }
      }
    }
  }
  return result;
}
// @lc code=end
