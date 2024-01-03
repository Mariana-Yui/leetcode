/*
 * @lc app=leetcode.cn id=113 lang=typescript
 *
 * [113] 路径总和 II
 *
 * https://leetcode.cn/problems/path-sum-ii/description/
 *
 * algorithms
 * Medium (63.21%)
 * Likes:    1076
 * Dislikes: 0
 * Total Accepted:    383.1K
 * Total Submissions: 605.9K
 * Testcase Example:  '[5,4,8,11,null,13,4,7,2,null,null,5,1]\n22'
 *
 * 给你二叉树的根节点 root 和一个整数目标和 targetSum ，找出所有 从根节点到叶子节点 路径总和等于给定目标和的路径。
 *
 * 叶子节点 是指没有子节点的节点。
 *
 *
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
 * 输出：[[5,4,11,2],[5,8,4,5]]
 *
 *
 * 示例 2：
 *
 *
 * 输入：root = [1,2,3], targetSum = 5
 * 输出：[]
 *
 *
 * 示例 3：
 *
 *
 * 输入：root = [1,2], targetSum = 0
 * 输出：[]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 树中节点总数在范围 [0, 5000] 内
 * -1000
 * -1000
 *
 *
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

function pathSum(root: TreeNode | null, targetSum: number): number[][] {
  /** 递归法 和112.思路一致, 累减为例 */
  const sPath: number[][] = [];
  function getPath(node: TreeNode, path: number[], count: number): void {
    if (node.left === null && node.right === null && count === 0) {
      sPath.push([...path]); // 深拷贝, 不能直接传path, 这样传的是引用, 递归结束会变回最初传进的数组
      return;
    }
    if (node.left === null && node.right === null) return;
    if (node.left !== null) {
      path.push(node.left.val);
      getPath(node.left, path, count - node.left.val);
      path.pop();
    }
    if (node.right !== null) {
      path.push(node.right.val);
      getPath(node.right, path, count - node.right.val);
      path.pop();
    }
  }
  if (root !== null) {
    getPath(root, [root.val], targetSum - root.val);
  }
  return sPath;
}
// @lc code=end
