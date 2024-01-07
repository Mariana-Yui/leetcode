/*
 * @lc app=leetcode.cn id=131 lang=typescript
 *
 * [131] 分割回文串
 *
 * https://leetcode.cn/problems/palindrome-partitioning/description/
 *
 * algorithms
 * Medium (73.42%)
 * Likes:    1709
 * Dislikes: 0
 * Total Accepted:    350.2K
 * Total Submissions: 476.7K
 * Testcase Example:  '"aab"'
 *
 * 给你一个字符串 s，请你将 s 分割成一些子串，使每个子串都是 回文串 。返回 s 所有可能的分割方案。
 *
 * 回文串 是正着读和反着读都一样的字符串。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：s = "aab"
 * 输出：[["a","a","b"],["aa","b"]]
 *
 *
 * 示例 2：
 *
 *
 * 输入：s = "a"
 * 输出：[["a"]]
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
function partition(s: string): string[][] {
  /**
   * 树状表示
   *      aab
   *    /  |  \
   *   a   aa  aab
   *  ...
   */
  // 判断回文
  function isPalindromes(s: string): boolean {
    for (let i = 0, j = s.length - 1; i < j; i++, j--) {
      if (s[i] !== s[j]) {
        return false;
      }
    }
    return true;
  }
  // 回溯算法
  function backtracking(s: string, startIndex: number): void {
    if (startIndex === s.length) {
      result.push([...path]);
      return;
    }
    for (let i = startIndex; i < s.length; i++) {
      const str = s.slice(startIndex, i + 1);
      if (isPalindromes(str)) {
        path.push(str);
      } else {
        continue;
      }
      backtracking(s, i + 1);
      path.pop();
    }
  }

  const result: string[][] = [];
  const path: string[] = [];
  backtracking(s, 0);
  return result;
}
// @lc code=end
