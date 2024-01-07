/*
 * @lc app=leetcode.cn id=93 lang=typescript
 *
 * [93] 复原 IP 地址
 *
 * https://leetcode.cn/problems/restore-ip-addresses/description/
 *
 * algorithms
 * Medium (58.74%)
 * Likes:    1375
 * Dislikes: 0
 * Total Accepted:    385.5K
 * Total Submissions: 655.5K
 * Testcase Example:  '"25525511135"'
 *
 * 有效 IP 地址 正好由四个整数（每个整数位于 0 到 255 之间组成，且不能含有前导 0），整数之间用 '.' 分隔。
 *
 *
 * 例如："0.1.2.201" 和 "192.168.1.1" 是 有效 IP 地址，但是 "0.011.255.245"、"192.168.1.312"
 * 和 "192.168@1.1" 是 无效 IP 地址。
 *
 *
 * 给定一个只包含数字的字符串 s ，用以表示一个 IP 地址，返回所有可能的有效 IP 地址，这些地址可以通过在 s 中插入 '.' 来形成。你 不能
 * 重新排序或删除 s 中的任何数字。你可以按 任何 顺序返回答案。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：s = "25525511135"
 * 输出：["255.255.11.135","255.255.111.35"]
 *
 *
 * 示例 2：
 *
 *
 * 输入：s = "0000"
 * 输出：["0.0.0.0"]
 *
 *
 * 示例 3：
 *
 *
 * 输入：s = "101023"
 * 输出：["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= s.length <= 20
 * s 仅由数字组成
 *
 *
 */

// @lc code=start
function restoreIpAddresses(s: string): string[] {
  // 回溯 可以看出来是切割问题, 处理方式和131回文串是一样的
  /**
   * 回溯限制如下:
   * 1. 需要分割为四段
   * 2. 每段都必须为[0, 255]区间的数字且不能为052这类以0开头的数字
   */
  function isValidIpSegment(str: string): boolean {
    if (isNaN(Number(str))) return false;
    if (str.length > 1 && str[0] === '0') return false;
    if (Number(str) < 0 || Number(str) > 255) return false;
    return true;
  }
  // 需要startIndex 因为分割一个集合
  function backtracking(s: string, startIndex: number, route: string[]): void {
    if (route.length === 4) {
      if (startIndex === s.length) result.push(route.join('.'));
      return;
    }
    // 注意一下边界条件Math.min()
    for (let i = startIndex; i < Math.min(startIndex + 3, s.length); i++) {
      const str = s.slice(startIndex, i + 1);
      if (isValidIpSegment(str)) {
        route.push(str);
      } else {
        continue;
      }
      backtracking(s, i + 1, route);
      route.pop();
    }
  }

  const result: string[] = [];
  backtracking(s, 0, []);
  return result;
}
// @lc code=end
