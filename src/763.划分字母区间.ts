/*
 * @lc app=leetcode.cn id=763 lang=typescript
 *
 * [763] 划分字母区间
 *
 * https://leetcode.cn/problems/partition-labels/description/
 *
 * algorithms
 * Medium (76.79%)
 * Likes:    1090
 * Dislikes: 0
 * Total Accepted:    202.7K
 * Total Submissions: 263.9K
 * Testcase Example:  '"ababcbacadefegdehijhklij"'
 *
 * 给你一个字符串 s 。我们要把这个字符串划分为尽可能多的片段，同一字母最多出现在一个片段中。
 *
 * 注意，划分结果需要满足：将所有划分结果按顺序连接，得到的字符串仍然是 s 。
 *
 * 返回一个表示每个字符串片段的长度的列表。
 *
 *
 * 示例 1：
 *
 *
 * 输入：s = "ababcbacadefegdehijhklij"
 * 输出：[9,7,8]
 * 解释：
 * 划分结果为 "ababcbaca"、"defegde"、"hijhklij" 。
 * 每个字母最多出现在一个片段中。
 * 像 "ababcbacadefegde", "hijhklij" 这样的划分是错误的，因为划分的片段数较少。
 *
 * 示例 2：
 *
 *
 * 输入：s = "eccbbbbdec"
 * 输出：[10]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= s.length <= 500
 * s 仅由小写英文字母组成
 *
 *
 */

// @lc code=start
function partitionLabels(s: string): number[] {
  // 巧妙的思路 感觉和贪心关系不大
  /**
   * 第一次遍历 利用map记录每个字母最后出现的下标
   * 第二次遍历 实时更新最大下标 如果最大下标等于当前下标 说明可以划分一个片段
   */
  // const hash = new Map<string, number>();
  // for (let i = 0; i < s.length; i++) {
  //   hash.set(s[i], i);
  // }
  // let end = 0,
  //   start = 0;
  // let result: number[] = [];
  // for (let i = 0; i < s.length; i++) {
  //   end = Math.max(end, hash.get(s[i]));
  //   if (end === i) {
  //     result.push(end - start + 1);
  //     start = end + 1;
  //   }
  // }
  // return result;

  // 贪心 类似435.
  const intervals: { [prop: string]: number[] } = {};
  // 先遍历得到区间
  for (let i = 0; i < s.length; i++) {
    if (intervals[s[i]] === undefined) {
      intervals[s[i]] = new Array(2);
      intervals[s[i]][0] = i;
    }
    intervals[s[i]][1] = i;
  }
  const arr = Object.values(intervals);
  arr.sort((a, b) => a[0] - b[0]);
  let start = 0;
  const result: number[] = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i][0] > arr[i - 1][1]) {
      result.push(arr[i][0] - start);
      start = arr[i][0];
    } else {
      arr[i][1] = Math.max(arr[i][1], arr[i - 1][1]);
    }
  }
  result.push(s.length - start);
  return result;
}
// @lc code=end
