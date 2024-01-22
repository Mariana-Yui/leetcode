/*
 * @lc app=leetcode.cn id=392 lang=typescript
 *
 * [392] 判断子序列
 *
 * https://leetcode.cn/problems/is-subsequence/description/
 *
 * algorithms
 * Easy (52.30%)
 * Likes:    993
 * Dislikes: 0
 * Total Accepted:    378.6K
 * Total Submissions: 723.6K
 * Testcase Example:  '"abc"\n"ahbgdc"'
 *
 * 给定字符串 s 和 t ，判断 s 是否为 t 的子序列。
 *
 *
 * 字符串的一个子序列是原始字符串删除一些（也可以不删除）字符而不改变剩余字符相对位置形成的新字符串。（例如，"ace"是"abcde"的一个子序列，而"aec"不是）。
 *
 * 进阶：
 *
 * 如果有大量输入的 S，称作 S1, S2, ... , Sk 其中 k >= 10亿，你需要依次检查它们是否为 T
 * 的子序列。在这种情况下，你会怎样改变代码？
 *
 * 致谢：
 *
 * 特别感谢 @pbrother 添加此问题并且创建所有测试用例。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：s = "abc", t = "ahbgdc"
 * 输出：true
 *
 *
 * 示例 2：
 *
 *
 * 输入：s = "axc", t = "ahbgdc"
 * 输出：false
 *
 *
 *
 *
 * 提示：
 *
 *
 * 0
 * 0
 * 两个字符串都只由小写字符组成。
 *
 *
 */

// @lc code=start
function isSubsequence(s: string, t: string): boolean {
  // 双指针法
  // if (!s.length && !t.length) return true;
  // for (let i = 0, j = 0; i < t.length; i++) {
  //   if (s[j] === t[i]) j++;
  //   if (j === s.length) return true;
  // }
  // return false;

  // DP 和1143.类似 其中一个子串是连续序列不能删除
  const dp: number[][] = new Array(t.length + 1);
  let result = 0;
  for (let i = 0; i <= t.length; i++) dp[i] = new Array(s.length + 1).fill(0);
  dp[0][0] = 0;
  for (let i = 1; i <= t.length; i++) {
    for (let j = 1; j <= s.length; j++) {
      if (t[i - 1] === s[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = dp[i - 1][j]; // 因为问的是t的子序列能否匹配到s, 所以s是不能继承的, 否则这里就是Math.max(dp[i-1][j], dp[i][j-1])
      }
      result = Math.max(result, dp[i][j]);
    }
  }
  return result === s.length;
}
// @lc code=end
