/*
 * @lc app=leetcode.cn id=347 lang=typescript
 *
 * [347] 前 K 个高频元素
 *
 * https://leetcode.cn/problems/top-k-frequent-elements/description/
 *
 * algorithms
 * Medium (63.53%)
 * Likes:    1757
 * Dislikes: 0
 * Total Accepted:    493.2K
 * Total Submissions: 776.2K
 * Testcase Example:  '[1,1,1,2,2,3]\n2'
 *
 * 给你一个整数数组 nums 和一个整数 k ，请你返回其中出现频率前 k 高的元素。你可以按 任意顺序 返回答案。
 *
 *
 *
 * 示例 1:
 *
 *
 * 输入: nums = [1,1,1,2,2,3], k = 2
 * 输出: [1,2]
 *
 *
 * 示例 2:
 *
 *
 * 输入: nums = [1], k = 1
 * 输出: [1]
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * k 的取值范围是 [1, 数组中不相同的元素的个数]
 * 题目数据保证答案唯一，换句话说，数组中前 k 个高频元素的集合是唯一的
 *
 *
 *
 *
 * 进阶：你所设计算法的时间复杂度 必须 优于 O(n log n) ，其中 n 是数组大小。
 *
 */

// @lc code=start
// topK问题首先想到使用优先级队列即顶堆, 参考:https://zhuanlan.zhihu.com/p/63089552
// 文章中对建堆的时间复杂度描述有误, 自顶向下建堆时间复杂度O(nlogn), 自底向上时间复杂度O(n)
function topKFrequent(nums: number[], k: number): number[] {
  class Heap {
    private complete: number[][] = [[]]; // 完全二叉树的一维数组提现
    private compare: (n1: number[], n2: number[]) => number;
    constructor(compareFn: (n1: number[], n2: number[]) => number) {
      this.compare = (n1, n2) => {
        if (n2 == null) return -1;
        if (n1 == null) return 1;
        return compareFn(n1, n2);
      };
    }
    init(array: number[]) {
      // TODO
    }
    swap(i: number, j: number) {
      [this.complete[i], this.complete[j]] = [this.complete[j], this.complete[i]];
    }
    up(index: number) {
      let parentIdx = parseInt(String(index / 2));
      while (parentIdx >= 1 && this.compare(this.complete[parentIdx], this.complete[index]) > 0) {
        this.swap(parentIdx, index);
        index = parentIdx;
        parentIdx = parseInt(String(index / 2));
      }
    }
    down(index: number) {
      while (index < this.complete.length) {
        // 这里下沉应该找到两个子节点中值更小的那个, 容易出错
        // WRONG
        // if (this.complete[index * 2] != null && this.compare(this.complete[index * 2], this.complete[index]) < 0) {
        //   this.swap(index * 2, index);
        //   index = index * 2;
        // } else if (
        //   this.complete[index * 2 + 1] != null &&
        //   this.compare(this.complete[index * 2 + 1], this.complete[index]) < 0
        // ) {
        //   this.swap(index * 2 + 1, index);
        //   index = index * 2 + 1;
        // } else {
        //   break;
        // }
        // CORRECT
        const childIdx =
          this.compare(this.complete[index * 2], this.complete[index * 2 + 1]) > 0 ? index * 2 + 1 : index * 2;
        if (this.compare(this.complete[index], this.complete[childIdx]) > 0) {
          this.swap(index, childIdx);
          index = childIdx;
        } else {
          break;
        }
      }
    }
    push(element: number[]) {
      this.complete.push(element);
      this.up(this.complete.length - 1);
    }
    pop(): number[] {
      if (this.size() === 0) return [];
      this.swap(1, this.complete.length - 1);
      const res = this.complete.pop()!;
      this.down(1);
      return res;
    }
    top() {
      return this.complete[1];
    }
    size() {
      return this.complete.length - 1;
    }
    get heap() {
      return this.complete;
    }
  }

  const map = new Map();
  // hashmap记录频率
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
  }
  let i = 0;
  // topK 这里建立最小堆
  const heap = new Heap((a: number[], b: number[]) => a[1] - b[1]);
  for (const [key, v] of map.entries()) {
    // <K直接push
    if (i < k) {
      heap.push([key, v]);
    } else if (v > heap.top()[1]) {
      // >=K如果顶部小于v直接丢弃, 否则push
      heap.pop();
      heap.push([key, v]);
    }
    i++;
  }
  const result: number[] = [];
  // 小顶堆先弹出最小的, 所以倒序输出
  for (let i = k - 1; i >= 0; i--) {
    result[i] = heap.pop()[0];
  }

  return result;
}
// @lc code=end
