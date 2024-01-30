/*
 * @lc app=leetcode.cn id=968 lang=typescript
 *
 * [968] 监控二叉树
 *
 * https://leetcode.cn/problems/binary-tree-cameras/description/
 *
 * algorithms
 * Hard (52.38%)
 * Likes:    696
 * Dislikes: 0
 * Total Accepted:    71.9K
 * Total Submissions: 137.1K
 * Testcase Example:  '[0,0,null,0,0]'
 *
 * 给定一个二叉树，我们在树的节点上安装摄像头。
 *
 * 节点上的每个摄影头都可以监视其父对象、自身及其直接子对象。
 *
 * 计算监控树的所有节点所需的最小摄像头数量。
 *
 *
 *
 * 示例 1：
 *
 *
 *
 * 输入：[0,0,null,0,0]
 * 输出：1
 * 解释：如图所示，一台摄像头足以监控所有节点。
 *
 *
 * 示例 2：
 *
 *
 *
 * 输入：[0,0,null,0,null,0,null,null,0]
 * 输出：2
 * 解释：需要至少两个摄像头来监视树的所有节点。 上图显示了摄像头放置的有效位置之一。
 *
 *
 *
 * 提示：
 *
 *
 * 给定树的节点数的范围是 [1, 1000]。
 * 每个节点的值都是 0。
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

function minCameraCover(root: TreeNode | null): number {
  // 贪心
  /**
   * 局部最优: 不在根节点安装摄像头需要安装的最少
   * 全局最优: 整棵树安装的摄像头最小
   *
   * 每个节点的状态:
   * 0: 摄像头无覆盖
   * 1: 安装有摄像头
   * 2: 摄像头有覆盖
   *
   * 终止条件:
   * 遇到空节点, 由于叶子节点不安装摄像头, 所以空节点返回2(有覆盖)
   *
   * 遍历:
   * 因为是从根节点向上判断, 所以选择后序遍历
   *
   * 情况分支:
   * 1. 左右节点都有覆盖
   * 2. 左右节点有一个没覆盖
   * 3. 左右节点至少有一个有摄像头
   * 4. 如果头节点没覆盖, 最后结果需要+1
   */
  function traversal(root: TreeNode | null): number {
    if (root === null) return 2;
    const left = traversal(root.left);
    const right = traversal(root.right);

    // 情况1
    if (left === 2 && right === 2) return 0;
    // 情况2
    if (left === 0 || right === 0) {
      result++;
      return 1;
    }
    // 情况3
    if (left === 1 || right === 1) return 2;
    return -1;
  }

  let result = 0;
  // 情况4 对应情况1
  if (traversal(root) === 0) result++;
  return result;
}
// @lc code=end
