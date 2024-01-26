/*
 * @lc app=leetcode.cn id=860 lang=typescript
 *
 * [860] 柠檬水找零
 *
 * https://leetcode.cn/problems/lemonade-change/description/
 *
 * algorithms
 * Easy (58.94%)
 * Likes:    585
 * Dislikes: 0
 * Total Accepted:    217.4K
 * Total Submissions: 368.7K
 * Testcase Example:  '[5,5,5,10,20]'
 *
 * 在柠檬水摊上，每一杯柠檬水的售价为 5 美元。顾客排队购买你的产品，（按账单 bills 支付的顺序）一次购买一杯。
 *
 * 每位顾客只买一杯柠檬水，然后向你付 5 美元、10 美元或 20 美元。你必须给每个顾客正确找零，也就是说净交易是每位顾客向你支付 5 美元。
 *
 * 注意，一开始你手头没有任何零钱。
 *
 * 给你一个整数数组 bills ，其中 bills[i] 是第 i 位顾客付的账。如果你能给每位顾客正确找零，返回 true ，否则返回 false
 * 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：bills = [5,5,5,10,20]
 * 输出：true
 * 解释：
 * 前 3 位顾客那里，我们按顺序收取 3 张 5 美元的钞票。
 * 第 4 位顾客那里，我们收取一张 10 美元的钞票，并返还 5 美元。
 * 第 5 位顾客那里，我们找还一张 10 美元的钞票和一张 5 美元的钞票。
 * 由于所有客户都得到了正确的找零，所以我们输出 true。
 *
 *
 * 示例 2：
 *
 *
 * 输入：bills = [5,5,10,10,20]
 * 输出：false
 * 解释：
 * 前 2 位顾客那里，我们按顺序收取 2 张 5 美元的钞票。
 * 对于接下来的 2 位顾客，我们收取一张 10 美元的钞票，然后返还 5 美元。
 * 对于最后一位顾客，我们无法退回 15 美元，因为我们现在只有两张 10 美元的钞票。
 * 由于不是每位顾客都得到了正确的找零，所以答案是 false。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= bills.length <= 10^5
 * bills[i] 不是 5 就是 10 或是 20
 *
 *
 */

// @lc code=start
function lemonadeChange(bills: number[]): boolean {
  // 贪心
  /**
   * 三种情况:
   * 1. 5元直接收走, 不用找零
   * 2. 10元找零1个五元
   * 3. 20元优先找1个10元+1个5元, 没有10元再找3个5元
   * 第三种情况做贪心 优先找10元, 因为10元只适用第三种情况; 5元更通用, 适用第二种和第三种情况
   */
  let five = 0;
  let ten = 0;
  for (let i = 0; i < bills.length; i++) {
    if (bills[i] === 5) {
      five++;
    } else if (bills[i] === 10) {
      if (five > 0) {
        five--;
        ten++;
      } else {
        return false;
      }
    } else if (bills[i] === 20) {
      if (ten > 0 && five > 0) {
        ten--;
        five--;
      } else if (ten === 0 && five >= 3) {
        five -= 3;
      } else {
        return false;
      }
    }
  }
  return true;
}
// @lc code=end
