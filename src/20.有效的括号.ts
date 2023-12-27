/*
 * @lc app=leetcode.cn id=20 lang=typescript
 *
 * [20] 有效的括号
 *
 * https://leetcode.cn/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (43.87%)
 * Likes:    4302
 * Dislikes: 0
 * Total Accepted:    1.7M
 * Total Submissions: 3.8M
 * Testcase Example:  '"()"'
 *
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
 *
 * 有效字符串需满足：
 *
 *
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 * 每个右括号都有一个对应的相同类型的左括号。
 *
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：s = "()"
 * 输出：true
 *
 *
 * 示例 2：
 *
 *
 * 输入：s = "()[]{}"
 * 输出：true
 *
 *
 * 示例 3：
 *
 *
 * 输入：s = "(]"
 * 输出：false
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= s.length <= 10^4
 * s 仅由括号 '()[]{}' 组成
 *
 *
 */

// @lc code=start
function isValid(s: string): boolean {
  if (s.length % 2 !== 0) return false; // 奇数一定非法
  const stack: string[] = [];
  for (let i=0; i<s.length; i++) {
    if (s[i] === '(') stack.push(')');
    else if (s[i] === '[') stack.push(']');
    else if (s[i] === '{') stack.push('}');
    else if (s[i] !== stack[stack.length-1]) return false;
    else stack.pop();
  }
  return stack.length === 0;
}
// @lc code=end
