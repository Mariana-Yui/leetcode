/*
 * @lc app=leetcode.cn id=76 lang=typescript
 *
 * [76] 最小覆盖子串
 *
 * https://leetcode.cn/problems/minimum-window-substring/description/
 *
 * algorithms
 * Hard (45.39%)
 * Likes:    2736
 * Dislikes: 0
 * Total Accepted:    481.7K
 * Total Submissions: 1.1M
 * Testcase Example:  '"ADOBECODEBANC"\n"ABC"'
 *
 * 给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 ""
 * 。
 * 
 * 
 * 
 * 注意：
 * 
 * 
 * 对于 t 中重复字符，我们寻找的子字符串中该字符数量必须不少于 t 中该字符数量。
 * 如果 s 中存在这样的子串，我们保证它是唯一的答案。
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "ADOBECODEBANC", t = "ABC"
 * 输出："BANC"
 * 解释：最小覆盖子串 "BANC" 包含来自字符串 t 的 'A'、'B' 和 'C'。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = "a", t = "a"
 * 输出："a"
 * 解释：整个字符串 s 是最小覆盖子串。
 * 
 * 
 * 示例 3:
 * 
 * 
 * 输入: s = "a", t = "aa"
 * 输出: ""
 * 解释: t 中两个字符 'a' 均应包含在 s 的子串中，
 * 因此没有符合条件的子字符串，返回空字符串。
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * ^m == s.length
 * ^n == t.length
 * 1 <= m, n <= 10^5
 * s 和 t 由英文字母组成
 * 
 * 
 * 
 * 进阶：你能设计一个在 o(m+n) 时间内解决此问题的算法吗？
 */

// @lc code=start
function minWindow(s: string, t: string): string {
  const map: Record<string, number> = {};
  let unique = 0; // 用于判断map的字符是否全部匹配完
  let result = "";

  // 遍历子串每个字符计算hashmap
  for (let i=0; i<t.length; i++) {
    const v = t[i];
    map[v] = (map[v] || 0) + 1; // 存储每个字符需要匹配的次数
    if (map[v] === 1) unique++;
  }

  let left = 0, right = 0;
  while (right < s.length) {
    const r = s[right];
    // 右指针先一直往后遍历, 直到子串hashmap全部匹配完
    if (map[r] != undefined) {
      map[r]--;
      if (map[r] === 0) unique--;
    }

    // 右指针停止移动, 开始移动左指针缩短长度
    if (unique === 0) {
      let l = s[left];
      // 干扰字符 || 超出匹配数量的字符 可以直接丢弃
      while (map[l] == undefined || map[l] < 0) {
        if (map[l] < 0) map[l]++;
        left++;
        l = s[left];
      }
      
      // 得到当前的最小子串
      const subStr = s.slice(left, right+1);
      if (result.length === 0 || subStr.length < result.length) {
        result = subStr;
      }
    }

    right++;
  }

  return result;
};
// @lc code=end

