/*
 * @lc app=leetcode.cn id=450 lang=typescript
 *
 * [450] 删除二叉搜索树中的节点
 *
 * https://leetcode.cn/problems/delete-node-in-a-bst/description/
 *
 * algorithms
 * Medium (52.30%)
 * Likes:    1292
 * Dislikes: 0
 * Total Accepted:    240.3K
 * Total Submissions: 459.7K
 * Testcase Example:  '[5,3,6,2,4,null,7]\n3'
 *
 * 给定一个二叉搜索树的根节点 root 和一个值 key，删除二叉搜索树中的 key
 * 对应的节点，并保证二叉搜索树的性质不变。返回二叉搜索树（有可能被更新）的根节点的引用。
 *
 * 一般来说，删除节点可分为两个步骤：
 *
 *
 * 首先找到需要删除的节点；
 * 如果找到了，删除它。
 *
 *
 *
 *
 * 示例 1:
 *
 *
 *
 *
 * 输入：root = [5,3,6,2,4,null,7], key = 3
 * 输出：[5,4,6,2,null,null,7]
 * 解释：给定需要删除的节点值是 3，所以我们首先找到 3 这个节点，然后删除它。
 * 一个正确的答案是 [5,4,6,2,null,null,7], 如下图所示。
 * 另一个正确答案是 [5,2,6,null,4,null,7]。
 *
 *
 *
 *
 * 示例 2:
 *
 *
 * 输入: root = [5,3,6,2,4,null,7], key = 0
 * 输出: [5,3,6,2,4,null,7]
 * 解释: 二叉树不包含值为 0 的节点
 *
 *
 * 示例 3:
 *
 *
 * 输入: root = [], key = 0
 * 输出: []
 *
 *
 *
 * 提示:
 *
 *
 * 节点数的范围 [0, 10^4].
 * -10^5 <= Node.val <= 10^5
 * 节点值唯一
 * root 是合法的二叉搜索树
 * -10^5 <= key <= 10^5
 *
 *
 *
 *
 * 进阶： 要求算法时间复杂度为 O(h)，h 为树的高度。
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

function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
  /**
   * 删除节点分为以下五种情况
   * 1. 没有找到要删除的节点, 不做任何处理
   * 2. 找到节点, 节点为叶子节点, 直接删除
   * 3. 找到节点, 节点没有左节点, 用右节点替代当前节点
   * 4. 找到节点, 节点没有右节点, 用左节点替代当前节点
   * 5. 找到节点, 节点有左右节点, 用右节点替代当前节点, 将左节点作为右节点的左子树的最左边左节点的左节点
   */
  // 前四种情况很好理解, 第五种情况我们知道二叉搜索树中序遍历结果是递增的, 那么删除中间的节点后, 左节点的移动位置就如上所述
  // function traversal(node: TreeNode | null, key: number): TreeNode | null {
  //   if (node === null) return null;
  //   if (node.val === key) {
  //     if (node.left === null && node.right === null) return null;
  //     if (node.left === null && node.right !== null) return node.right;
  //     if (node.left !== null && node.right === null) return node.left;
  //     if (node.left !== null && node.right !== null) {
  //       let cur = node.right;
  //       while (cur.left !== null) {
  //         // 找到最左的左节点
  //         cur = cur.left;
  //       }
  //       cur.left = node.left;
  //       return node.right;
  //     }
  //   }
  //   node.left = traversal(node.left, key);
  //   node.right = traversal(node.right, key);
  //   return node;
  // }
  // return traversal(root, key);

  /** 迭代法, 思路一致 */
  function deleteOneNode(pre: TreeNode) {}
  let pre: TreeNode|null = null;
  let cur: TreeNode|null = root;
  while (cur !== null) {
    pre = cur;
    if (key < cur.val) {
      cur = cur.left;
    } else if (key > cur.val) {
      cur = cur.right;
    } else {
      break;
    }
  }
}
// @lc code=end
