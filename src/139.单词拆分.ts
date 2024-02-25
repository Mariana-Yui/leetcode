/*
 * @lc app=leetcode.cn id=139 lang=typescript
 *
 * [139] 单词拆分
 *
 * https://leetcode.cn/problems/word-break/description/
 *
 * algorithms
 * Medium (54.78%)
 * Likes:    2396
 * Dislikes: 0
 * Total Accepted:    520.1K
 * Total Submissions: 949.3K
 * Testcase Example:  '"leetcode"\n["leet","code"]'
 *
 * 给你一个字符串 s 和一个字符串列表 wordDict 作为字典。请你判断是否可以利用字典中出现的单词拼接出 s 。
 *
 * 注意：不要求字典中出现的单词全部都使用，并且字典中的单词可以重复使用。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入: s = "leetcode", wordDict = ["leet", "code"]
 * 输出: true
 * 解释: 返回 true 因为 "leetcode" 可以由 "leet" 和 "code" 拼接成。
 *
 *
 * 示例 2：
 *
 *
 * 输入: s = "applepenapple", wordDict = ["apple", "pen"]
 * 输出: true
 * 解释: 返回 true 因为 "applepenapple" 可以由 "apple" "pen" "apple" 拼接成。
 * 注意，你可以重复使用字典中的单词。
 *
 *
 * 示例 3：
 *
 *
 * 输入: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
 * 输出: false
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= s.length <= 300
 * 1 <= wordDict.length <= 1000
 * 1 <= wordDict[i].length <= 20
 * s 和 wordDict[i] 仅由小写英文字母组成
 * wordDict 中的所有字符串 互不相同
 *
 *
 */

// @lc code=start
function wordBreak(s: string, wordDict: string[]): boolean {
  // 回溯 参考93.切割回文串
  /**
   * 求N叉树唯一路径找到直接返回
   * 不做任何剪枝操作是会超时的
   * 回溯中会有很多重复操作 使用记忆下标的递归, 遇到已经处理过的下标直接返回
   */
  // function backtracking(startIndex: number): boolean {
  //   if (startIndex >= s.length) {
  //     return true;
  //   }
  //   if (!memory[startIndex]) return false;
  //   for (let i = startIndex; i < s.length; i++) {
  //     const word = s.slice(startIndex, i + 1);
  //     if (~wordDict.indexOf(word) && backtracking(i + 1)) {
  //       return true;
  //     }
  //     memory[startIndex] = false;
  //   }
  //   return false;
  // }
  // const memory: boolean[] = new Array(s.length).fill(true);
  // return backtracking(0);

  // DP
  /**
   * 抽象问题 -> wordDict的单词能否拼成s字符串 -> 完全背包问题
   * 背包大小s 物品列表wordDict
   * 1. dp[i]及下标i含义: s长度为j时能否由wordDict拼接而成
   * 2. dp递推公式: 如果 dp[j] = true, [j,i]区间的子串在wordDict中, 可以得到dp[i] = true
   * 3. dp初始化: dp[0] = true 没有具体含义仅是为了推导公式
   * 4. 遍历: s字符串是有顺序的, 所以是求排列, 先遍历背包i 再遍历物品j, 这里遍历物品并不是遍历wordDict! 而还是遍历j从0->i判断子串是否在wordDict中
   */
  const dp: boolean[] = new Array(s.length + 1).fill(false);
  dp[0] = true;
  for (let i = 1; i < dp.length; i++) {
    for (let j = 0; j < i && !dp[i]; j++) {
      // 这里注意一下闭合区间, 背包大小是从1开始的对应的s[0], 所以应该是左闭右开的
      const word = s.slice(j, i);
      dp[i] = !!~wordDict.indexOf(word) && dp[j];
    }
  }
  return dp[s.length];
}
// @lc code=end
