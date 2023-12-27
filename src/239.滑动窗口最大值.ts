/*
 * @lc app=leetcode.cn id=239 lang=typescript
 *
 * [239] 滑动窗口最大值
 *
 * https://leetcode.cn/problems/sliding-window-maximum/description/
 *
 * algorithms
 * Hard (49.15%)
 * Likes:    2648
 * Dislikes: 0
 * Total Accepted:    527.5K
 * Total Submissions: 1.1M
 * Testcase Example:  '[1,3,-1,-3,5,3,6,7]\n3'
 *
 * 给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k
 * 个数字。滑动窗口每次只向右移动一位。
 * 
 * 返回 滑动窗口中的最大值 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [1,3,-1,-3,5,3,6,7], k = 3
 * 输出：[3,3,5,5,6,7]
 * 解释：
 * 滑动窗口的位置                最大值
 * ---------------               -----
 * [1  3  -1] -3  5  3  6  7       3
 * ⁠1 [3  -1  -3] 5  3  6  7       3
 * ⁠1  3 [-1  -3  5] 3  6  7       5
 * ⁠1  3  -1 [-3  5  3] 6  7       5
 * ⁠1  3  -1  -3 [5  3  6] 7       6
 * ⁠1  3  -1  -3  5 [3  6  7]      7
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [1], k = 1
 * 输出：[1]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= nums.length <= 10^5
 * -10^4 <= nums[i] <= 10^4
 * 1 <= k <= nums.length
 * 
 * 
 */

// @lc code=start
/** 这样写会超时 */
// function maxSlidingWindow(nums: number[], k: number): number[] {
//   // 实现单调队列, 本题为单调递减队列, 队列出口永远是最大值
//   class MyQueue {
//     private queue: number[] = [];
//     // pop方法当队列出口的值和传入值相等时, 将出口值推出队列, 保证没有重复元素, 不相等时就不处理
//     pop(val: number) {
//       if (this.queue.length && this.queue[0] === val) {
//         this.queue.shift();
//       }
//     }
//     // push方法将队列入口前所有比传入值小的元素全部删除
//     push(val: number) {
//       while (this.queue.length && this.queue[this.queue.length - 1] < val) {
//         this.queue.pop();
//       }
//       this.queue.push(val);
//     }
//     front() {
//       return this.queue[0];
//     }
//   }
  
//   const max: number[] = [];
//   const queue = new MyQueue();
//   for (let i=0; i<k; i++) {
//     queue.push(nums[i]);
//   }
//   max.push(queue.front());
//   for (let i=k; i<nums.length; i++) {
//     queue.pop(nums[i-k]);
//     queue.push(nums[i]);
//     max.push(queue.front());
//   }
//   return max;
// };
/** 记录下标的方式不会超时, 思路和上面是一致的 */
function maxSlidingWindow(nums: number[], k: number): number[] {
  const q: number[] = [];
  const max: number[] = [];
  for (let i=0; i<nums.length; i++) {
    // push
    while (q.length && nums[q[q.length-1]] <= nums[i]) {
      q.pop();
    }
    q.push(i); //这里是记录下标

    // pop 滑动窗口已离开q[0]的下标
    if (i - q[0] > k-1) {
      q.shift();
    }

    // 记录
    if (i >= k-1) {
      max.push(nums[q[0]]);
    }
  }

  return max;
}
// @lc code=end

