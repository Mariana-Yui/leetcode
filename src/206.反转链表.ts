/*
 * @lc app=leetcode.cn id=206 lang=typescript
 *
 * [206] 反转链表
 *
 * https://leetcode.cn/problems/reverse-linked-list/description/
 *
 * algorithms
 * Easy (73.69%)
 * Likes:    3417
 * Dislikes: 0
 * Total Accepted:    1.7M
 * Total Submissions: 2.3M
 * Testcase Example:  '[1,2,3,4,5]'
 *
 * 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：head = [1,2,3,4,5]
 * 输出：[5,4,3,2,1]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：head = [1,2]
 * 输出：[2,1]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：head = []
 * 输出：[]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 链表中节点的数目范围是 [0, 5000]
 * -5000 
 * 
 * 
 * 
 * 
 * 进阶：链表可以选用迭代或递归方式完成反转。你能否用两种方法解决这道题？
 * 
 * 
 * 
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

/** 双指针法 */
function reverseList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head;
  let prev: ListNode|null = null;
  let cur = head;
  let temp: ListNode|null = null;

  while (cur !== null) {
    temp = cur;
    cur = cur.next;
    temp.next = prev;
    prev = temp;
  }
  
  return prev;
};
/** 递归法 */
// function reverseList(head: ListNode | null): ListNode | null {
//   function reverse(prev: ListNode|null, head: ListNode|null) {
//     if (!head) return prev;
//     const temp = head.next;
//     head.next = prev;
//     prev = head;
//     return reverse(prev, temp);
//   }

//   return reverse(null, head);
// };
// @lc code=end

