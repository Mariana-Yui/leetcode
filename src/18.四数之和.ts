/*
 * @lc app=leetcode.cn id=18 lang=typescript
 *
 * [18] 四数之和
 *
 * https://leetcode.cn/problems/4sum/description/
 *
 * algorithms
 * Medium (36.68%)
 * Likes:    1825
 * Dislikes: 0
 * Total Accepted:    534.8K
 * Total Submissions: 1.5M
 * Testcase Example:  '[1,0,-1,0,-2,2]\n0'
 *
 * 给你一个由 n 个整数组成的数组 nums ，和一个目标值 target 。请你找出并返回满足下述全部条件且不重复的四元组 [nums[a],
 * nums[b], nums[c], nums[d]] （若两个四元组元素一一对应，则认为两个四元组重复）：
 * 
 * 
 * 0 <= a, b, c, d < n
 * a、b、c 和 d 互不相同
 * nums[a] + nums[b] + nums[c] + nums[d] == target
 * 
 * 
 * 你可以按 任意顺序 返回答案 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [1,0,-1,0,-2,2], target = 0
 * 输出：[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [2,2,2,2,2], target = 8
 * 输出：[[2,2,2,2]]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= nums.length <= 200
 * -10^9 <= nums[i] <= 10^9
 * -10^9 <= target <= 10^9
 * 
 * 
 */

// @lc code=start
// 和三数相加一样使用双指针法, 同样地, 五数相加, 六数相加也是一个道理
// 设置target意味着可能有负数, 不能判断nums[i] > target
function fourSum(nums: number[], target: number): number[][] {
  const result: number[][] = [];
  nums.sort((a, b) => a - b);
  for (let i=0; i<nums.length; i++) {
    if (i > 0 && nums[i] === nums[i-1]) continue;
    for (let j=i+1; j<nums.length; j++) {
      if (j > i+1 && nums[j] === nums[j-1]) continue;
      
      let left = j+1;
      let right = nums.length-1;
      while (left < right) {
        if (nums[i] + nums[j] + nums[left] + nums[right] > target) right--;
        else if (nums[i] + nums[j] + nums[left] + nums[right] < target) left++;
        else {
          result.push([nums[i], nums[j], nums[left], nums[right]]);
          while (left < right && nums[right] === nums[right-1]) right--;
          while (left < right && nums[left] === nums[left+1]) left++;
          right--;
          left++;
        }
      }
    }
  }

  return result;
};
console.log(fourSum([1,-2,-5,-4,-3,3,3,5], -11));
// @lc code=end

