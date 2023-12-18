/*
 * @lc app=leetcode.cn id=541 lang=typescript
 *
 * [541] 反转字符串 II
 *
 * https://leetcode.cn/problems/reverse-string-ii/description/
 *
 * algorithms
 * Easy (57.58%)
 * Likes:    560
 * Dislikes: 0
 * Total Accepted:    243K
 * Total Submissions: 422K
 * Testcase Example:  '"abcdefg"\n2'
 *
 * 给定一个字符串 s 和一个整数 k，从字符串开头算起，每计数至 2k 个字符，就反转这 2k 字符中的前 k 个字符。
 * 
 * 
 * 如果剩余字符少于 k 个，则将剩余字符全部反转。
 * 如果剩余字符小于 2k 但大于或等于 k 个，则反转前 k 个字符，其余字符保持原样。
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "abcdefg", k = 2
 * 输出："bacdfeg"
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = "abcd", k = 2
 * 输出："bacd"
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= s.length <= 10^4
 * s 仅由小写英文组成
 * 1 <= k <= 10^4
 * 
 * 
 */

// @lc code=start
function reverseStr(s: string, k: number): string {
  function reverse(arr: string[], start: number, end: number) {
    for (let i=start, j=end; i<j; i++, j--) {
      let tmp = arr[i];
      arr[i] = arr[j];
      arr[j] = tmp;
    }
  }

  const array = s.split('');

  // 1. 每2k反转前k个
  // 2. 少于k个全部反转
  for (let i=0; i<array.length; i+=2*k) {
    if (i + k >= array.length) {
      reverse(array, i, i+array.length-1);
      break;
    }
    reverse(array, i, i+k-1);
  }

  return array.join('');
};
// @lc code=end

