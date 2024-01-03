/*
 * @lc app=leetcode.cn id=257 lang=typescript
 *
 * [257] 二叉树的所有路径
 *
 * https://leetcode.cn/problems/binary-tree-paths/description/
 *
 * algorithms
 * Easy (70.69%)
 * Likes:    1081
 * Dislikes: 0
 * Total Accepted:    360.8K
 * Total Submissions: 510.3K
 * Testcase Example:  '[1,2,3,null,5]'
 *
 * 给你一个二叉树的根节点 root ，按 任意顺序 ，返回所有从根节点到叶子节点的路径。
 * 
 * 叶子节点 是指没有子节点的节点。
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：root = [1,2,3,null,5]
 * 输出：["1->2->5","1->3"]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：root = [1]
 * 输出：["1"]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 树中节点的数目在范围 [1, 100] 内
 * -100 <= Node.val <= 100
 * 
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

function binaryTreePaths(root: TreeNode | null): string[] {
  /** 
   * 递归, 因为自顶向下 所以前序遍历
   * 涉及回溯, 需要维护一个栈存储路径信息
   */
  /**
   * 
   * @param node 当前节点
   * @param paths 路径栈, 用于存储及回溯
   * @param results 输出
   */
  function traversal(node: TreeNode | null, paths: number[], results: string[]): string[] {
    paths.push(node.val); // 入栈
    // 不是有node === null, 否则难以回溯
    if (node.left === null && node.right === null) {
      let sPath: string = '';
      for (let i=0; i<paths.length; i++) {
        sPath += paths[i];
        if (i+1 !== paths.length) {
          sPath += '->'
        }
      }
      results.push(sPath);
      return;
    }
    if (node.left !== null) {
      traversal(node.left, paths, results);
      paths.pop(); // 回溯
    }
    if (node.right !== null) {
      traversal(node.right, paths, results);
      paths.pop();
    }
  }

  const results: string[] = [];
  traversal(root, [], results);
  return results;
};
// @lc code=end

