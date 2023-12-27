/*
 * @lc app=leetcode.cn id=459 lang=typescript
 *
 * [459] 重复的子字符串
 *
 * https://leetcode.cn/problems/repeated-substring-pattern/description/
 *
 * algorithms
 * Easy (51.41%)
 * Likes:    1106
 * Dislikes: 0
 * Total Accepted:    225.5K
 * Total Submissions: 438.5K
 * Testcase Example:  '"abab"'
 *
 * 给定一个非空的字符串 s ，检查是否可以通过由它的一个子串重复多次构成。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 
 * 输入: s = "abab"
 * 输出: true
 * 解释: 可由子串 "ab" 重复两次构成。
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: s = "aba"
 * 输出: false
 * 
 * 
 * 示例 3:
 * 
 * 
 * 输入: s = "abcabcabcabc"
 * 输出: true
 * 解释: 可由子串 "abc" 重复四次构成。 (或子串 "abcabc" 重复两次构成。)
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 
 * 
 * 1 <= s.length <= 10^4
 * s 由小写英文字母组成
 * 
 * 
 */

// @lc code=start
/**
 * 关键思路: 如果一个字符串由重复子串组成, 那么该字符串的最长相等前后缀不包含的部分就是最小重复子串
 * 同样地, 如果一个字符串由重复子串组成, 那么该字符串能被最小重复子串整除
 * 所以得到以下结论: next[len-1] !== 0 && len % (len - (next[len-1])) === 0 那么该字符串为重复子串组成
 */
function repeatedSubstringPattern(s: string): boolean {
  function getNext(s: string): Array<number> {
    const next = new Array(s.length);
    let j = 0
    next[j] = 0;
    for (let i=1; i<s.length; i++) {
      while (j > 0 && s[i] !== s[j]) {
        j = next[j-1];
      }
      if (s[i] === s[j]) {
        j++;
      }
      next[i] = j;
    }

    return next;
  }
  
  const next = getNext(s);
  const len = s.length;
  if (next[len-1] !== 0 && len % (len - (next[len-1])) === 0) {
    return true;
  }
  return false;
};
// @lc code=end

