/*
 * @lc app=leetcode.cn id=151 lang=typescript
 *
 * [151] 反转字符串中的单词
 *
 * https://leetcode.cn/problems/reverse-words-in-a-string/description/
 *
 * algorithms
 * Medium (53.49%)
 * Likes:    1081
 * Dislikes: 0
 * Total Accepted:    486.5K
 * Total Submissions: 909.4K
 * Testcase Example:  '"the sky is blue"'
 *
 * 给你一个字符串 s ，请你反转字符串中 单词 的顺序。
 *
 * 单词 是由非空格字符组成的字符串。s 中使用至少一个空格将字符串中的 单词 分隔开。
 *
 * 返回 单词 顺序颠倒且 单词 之间用单个空格连接的结果字符串。
 *
 * 注意：输入字符串 s中可能会存在前导空格、尾随空格或者单词间的多个空格。返回的结果字符串中，单词间应当仅用单个空格分隔，且不包含任何额外的空格。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：s = "the sky is blue"
 * 输出："blue is sky the"
 *
 *
 * 示例 2：
 *
 *
 * 输入：s = "  hello world  "
 * 输出："world hello"
 * 解释：反转后的字符串中不能存在前导空格和尾随空格。
 *
 *
 * 示例 3：
 *
 *
 * 输入：s = "a good   example"
 * 输出："example good a"
 * 解释：如果两个单词间有多余的空格，反转后的字符串需要将单词间的空格减少到仅有一个。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= s.length <= 10^4
 * s 包含英文大小写字母、数字和空格 ' '
 * s 中 至少存在一个 单词
 *
 *
 *
 *
 *
 *
 *
 * 进阶：如果字符串在你使用的编程语言中是一种可变数据类型，请尝试使用 O(1) 额外空间复杂度的 原地 解法。
 *
 */

// @lc code=start
/**
 * 空间复杂度O(1)就只能编辑原有字符串了, 但是ts的字符串是不可变的, 所以需要先转为数组
 * 解题步骤
 * 1. 去除多余空格
 * 2. 反转字符串
 * 3. 再反转其中的单词
 * 时间复杂度O(n)
 */
function reverseWords(s: string): string {
  // 快慢指针
  function removeExtraSpaces(arr: string[]): void {
    let slow = 0,
      fast = 0;
    for (; fast < arr.length; fast++) {
      if (arr[fast] !== ' ') {
        if (slow !== 0) arr[slow++] = ' '; // 放前面防止末尾空格·
        while (fast < arr.length && arr[fast] !== ' ') {
          arr[slow++] = arr[fast++];
        }
      }
    }
    arr.length = slow;
  }

  function reverse(arr: string[], start: number, end: number): void {
    for (let i = start, j = end; i < j; i++, j--) {
      let tmp = arr[i];
      arr[i] = arr[j];
      arr[j] = tmp;
    }
  }

  const arr = s.split('');
  // 移除空格
  removeExtraSpaces(arr);
  // 反转字符串
  reverse(arr, 0, arr.length - 1);
  // 反转单词
  for (let i = 0, j = 0; j < arr.length; ) {
    while (j < arr.length && arr[j] !== ' ') {
      j++;
    }
    reverse(arr, i, j-1);
    j++
    i = j;
  }

  return arr.join('');
}
// @lc code=end
