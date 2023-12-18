/*
 * @lc app=leetcode.cn id=383 lang=typescript
 *
 * [383] 赎金信
 *
 * https://leetcode.cn/problems/ransom-note/description/
 *
 * algorithms
 * Easy (62.02%)
 * Likes:    821
 * Dislikes: 0
 * Total Accepted:    404.5K
 * Total Submissions: 652.2K
 * Testcase Example:  '"a"\n"b"'
 *
 * 给你两个字符串：ransomNote 和 magazine ，判断 ransomNote 能不能由 magazine 里面的字符构成。
 * 
 * 如果可以，返回 true ；否则返回 false 。
 * 
 * magazine 中的每个字符只能在 ransomNote 中使用一次。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：ransomNote = "a", magazine = "b"
 * 输出：false
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：ransomNote = "aa", magazine = "ab"
 * 输出：false
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：ransomNote = "aa", magazine = "aab"
 * 输出：true
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= ransomNote.length, magazine.length <= 10^5
 * ransomNote 和 magazine 由小写英文字母组成
 * 
 * 
 */

// @lc code=start
function canConstruct(ransomNote: string, magazine: string): boolean {
  const array = new Array(26).fill(0); // 空间换时间
  const acd = 'a'.charCodeAt(0);
  for (const s of ransomNote) {
    array[s.charCodeAt(0) - acd]++;
  }
  for (const s of magazine) {
    array[s.charCodeAt(0) - acd]--;
  }
  for (const e of array) {
    if (e > 0) {
      return false;
    }
  }
  return true;
};
// @lc code=end

