/*
 * @lc app=leetcode.cn id=242 lang=typescript
 *
 * [242] 有效的字母异位词
 *
 * https://leetcode.cn/problems/valid-anagram/description/
 *
 * algorithms
 * Easy (66.02%)
 * Likes:    860
 * Dislikes: 0
 * Total Accepted:    679.8K
 * Total Submissions: 1M
 * Testcase Example:  '"anagram"\n"nagaram"'
 *
 * 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
 * 
 * 注意：若 s 和 t 中每个字符出现的次数都相同，则称 s 和 t 互为字母异位词。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 
 * 输入: s = "anagram", t = "nagaram"
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: s = "rat", t = "car"
 * 输出: false
 * 
 * 
 * 
 * 提示:
 * 
 * 
 * 1 
 * s 和 t 仅包含小写字母
 * 
 * 
 * 
 * 
 * 进阶: 如果输入字符串包含 unicode 字符怎么办？你能否调整你的解法来应对这种情况？
 * 
 */

// @lc code=start
function isAnagram(s: string, t: string): boolean {
  const record = new Array(26).fill(0);
  const code = 'a'.charCodeAt(0);
  for (let i=0; i<s.length || i<t.length; i++) {
    if (s[i]) {
      let index = s.charCodeAt(i) - code;
      record[index]++;
    }
    if (t[i]) {
      let index = t.charCodeAt(i) - code;
      record[index]--;
    }
  }
  return record.every(v => v === 0);
};
// @lc code=end

