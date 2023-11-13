/*
 * @lc app=leetcode.cn id=844 lang=typescript
 *
 * [844] 比较含退格的字符串
 *
 * https://leetcode.cn/problems/backspace-string-compare/description/
 *
 * algorithms
 * Easy (47.79%)
 * Likes:    688
 * Dislikes: 0
 * Total Accepted:    219K
 * Total Submissions: 458.1K
 * Testcase Example:  '"ab#c"\n"ad#c"'
 *
 * 给定 s 和 t 两个字符串，当它们分别被输入到空白的文本编辑器后，如果两者相等，返回 true 。# 代表退格字符。
 * 
 * 注意：如果对空文本输入退格字符，文本继续为空。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "ab#c", t = "ad#c"
 * 输出：true
 * 解释：s 和 t 都会变成 "ac"。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = "ab##", t = "c#d#"
 * 输出：true
 * 解释：s 和 t 都会变成 ""。
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：s = "a#c", t = "b"
 * 输出：false
 * 解释：s 会变成 "c"，但 t 仍然是 "b"。
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= s.length, t.length <= 200
 * s 和 t 只含有小写字母以及字符 '#'
 * 
 * 
 * 
 * 
 * 进阶：
 * 
 * 
 * 你可以用 O(n) 的时间复杂度和 O(1) 的空间复杂度解决该问题吗？
 * 
 * 
 */

// @lc code=start
function backspaceCompare(s: string, t: string): boolean {
  let sIndex = s.length-1, tIndex = t.length-1;
  // 从右往左遍历
  while (sIndex >= 0 || tIndex >= 0) {
    // 找到退格的无关字符
    if (s.charAt(sIndex) === '#') {
      let characterToSkip = 1;
      while (characterToSkip >= 0) {
        sIndex--;
        if (s.charAt(sIndex) === '#') {
          characterToSkip++;
        } else {
          characterToSkip--;
        }
      }
    }
    if (t.charAt(tIndex) === '#') {
      let characterToSkip = 1;
      while(characterToSkip >= 0) {
        tIndex--;
        if (t.charAt(tIndex) === '#') {
          characterToSkip++;
        } else {
          characterToSkip--;
        }
      }
    }

    if (s.charAt(sIndex) !== t.charAt(tIndex)) return false;
    sIndex--;
    tIndex--;
  }

  return true;
};
// @lc code=end

