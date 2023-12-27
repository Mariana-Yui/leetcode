/*
 * @lc app=leetcode.cn id=28 lang=typescript
 *
 * [28] 找出字符串中第一个匹配项的下标
 *
 * https://leetcode.cn/problems/find-the-index-of-the-first-occurrence-in-a-string/description/
 *
 * algorithms
 * Easy (43.06%)
 * Likes:    2106
 * Dislikes: 0
 * Total Accepted:    965K
 * Total Submissions: 2.2M
 * Testcase Example:  '"sadbutsad"\n"sad"'
 *
 * 给你两个字符串 haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串的第一个匹配项的下标（下标从 0
 * 开始）。如果 needle 不是 haystack 的一部分，则返回  -1 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：haystack = "sadbutsad", needle = "sad"
 * 输出：0
 * 解释："sad" 在下标 0 和 6 处匹配。
 * 第一个匹配项的下标是 0 ，所以返回 0 。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：haystack = "leetcode", needle = "leeto"
 * 输出：-1
 * 解释："leeto" 没有在 "leetcode" 中出现，所以返回 -1 。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= haystack.length, needle.length <= 10^4
 * haystack 和 needle 仅由小写英文字符组成
 * 
 * 
 */

// @lc code=start
function strStr(haystack: string, needle: string): number {
    function getNext(needle: string) {
      const next = new Array(needle.length);
      let j=0;
      next[0] = 0;
      for (let i=1; i<needle.length; i++) {
        while (j > 0 && needle[i] !== needle[j]) {
          j = next[j-1];
        }
        if (needle[i] === needle[j]) {
          j++;
        }
        next[i] = j;
      }
      return next;
    }

    let j = 0;
    const next = getNext(needle);
    console.log(next);
    for (let i=0; i<haystack.length; i++) {
      while (j > 0 && haystack[i] !== needle[j]) {
        j = next[j-1];
      }
      if (haystack[i] === needle[j]) {
        j++;
      }
      if (j === needle.length) {
        // 父串的下标
        return (i - needle.length + 1);
      }
    }
    return -1;
};
// @lc code=end

