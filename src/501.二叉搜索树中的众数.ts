/*
 * @lc app=leetcode.cn id=501 lang=typescript
 *
 * [501] 二叉搜索树中的众数
 *
 * https://leetcode.cn/problems/find-mode-in-binary-search-tree/description/
 *
 * algorithms
 * Easy (54.88%)
 * Likes:    723
 * Dislikes: 0
 * Total Accepted:    187.3K
 * Total Submissions: 341K
 * Testcase Example:  '[1,null,2,2]'
 *
 * 给你一个含重复值的二叉搜索树（BST）的根节点 root ，找出并返回 BST 中的所有 众数（即，出现频率最高的元素）。
 *
 * 如果树中有不止一个众数，可以按 任意顺序 返回。
 *
 * 假定 BST 满足如下定义：
 *
 *
 * 结点左子树中所含节点的值 小于等于 当前节点的值
 * 结点右子树中所含节点的值 大于等于 当前节点的值
 * 左子树和右子树都是二叉搜索树
 *
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：root = [1,null,2,2]
 * 输出：[2]
 *
 *
 * 示例 2：
 *
 *
 * 输入：root = [0]
 * 输出：[0]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 树中节点的数目在范围 [1, 10^4] 内
 * -10^5 <= Node.val <= 10^5
 *
 *
 *
 *
 * 进阶：你可以不使用额外的空间吗？（假设由递归产生的隐式调用栈的开销不被计算在内）
 *
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function findMode(root: TreeNode | null): number[] {
  /** 针对普通二叉树的做法: 遍历 -> 记录Map -> 排序输出最大频率 */
  /** 通过双指针递归二叉搜索树计算众数 */
  const result: number[] = [];
  let count: number = 1,
    maxCount = 1,
    pre: TreeNode | null = null;
  function traversal(node: TreeNode | null) {
    if (node === null) return;
    traversal(node.left); // 左
    /** 中 */
    if (pre !== null) {
      // 有序 可以直接相邻对比
      if (pre.val === node.val) {
        count++;
      } else {
        count = 1;
      }
    }
    if (count === maxCount) {
      result.push(node.val); // 多个频率相同
    }
    if (count > maxCount) {
      maxCount = count;
      result.length = 0; // 先清空
      result.push(node.val);
    }
    pre = node;
    /** 中 */
    traversal(node.right); // 右
  }
  traversal(root);
  return result;
}
// @lc code=end
