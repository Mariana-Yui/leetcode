/*
 * @lc app=leetcode.cn id=797 lang=typescript
 *
 * [797] 所有可能的路径
 *
 * https://leetcode.cn/problems/all-paths-from-source-to-target/description/
 *
 * algorithms
 * Medium (78.78%)
 * Likes:    459
 * Dislikes: 0
 * Total Accepted:    122.5K
 * Total Submissions: 155.5K
 * Testcase Example:  '[[1,2],[3],[3],[]]'
 *
 * 给你一个有 n 个节点的 有向无环图（DAG），请你找出所有从节点 0 到节点 n-1 的路径并输出（不要求按特定顺序）
 *
 * graph[i] 是一个从节点 i 可以访问的所有节点的列表（即从节点 i 到节点 graph[i][j]存在一条有向边）。
 *
 *
 *
 * 示例 1：
 *
 *
 *
 *
 * 输入：graph = [[1,2],[3],[3],[]]
 * 输出：[[0,1,3],[0,2,3]]
 * 解释：有两条路径 0 -> 1 -> 3 和 0 -> 2 -> 3
 *
 *
 * 示例 2：
 *
 *
 *
 *
 * 输入：graph = [[4,3,1],[3,2,4],[3],[4],[]]
 * 输出：[[0,4],[0,3,4],[0,1,3,4],[0,1,2,3,4],[0,1,4]]
 *
 *
 *
 *
 * 提示：
 *
 *
 * n == graph.length
 * 2 <= n <= 15
 * 0 <= graph[i][j] < n
 * graph[i][j] != i（即不存在自环）
 * graph[i] 中的所有元素 互不相同
 * 保证输入为 有向无环图（DAG）
 *
 *
 *
 *
 */

// @lc code=start
function allPathsSourceTarget(graph: number[][]): number[][] {
  /** 适用场景 所有路径 深度搜索就是回溯, 停不下来的 */
  // deep - first search
  function dfs(graph, start: number) {
    // 终止条件 到达最后一个节点
    if (path[path.length - 1] === graph.length - 1) {
      result.push([...path]);
      return;
    }
    for (let i = 0; i < graph[start].length; i++) {
      path.push(graph[start][i]);
      dfs(graph, graph[start][i]);
      path.pop();
    }
  }

  const result: number[][] = []; // 所有路径集合
  const path: number[] = []; // 单一路径
  path.push(0);
  dfs(graph, 0);
  return result;
}
// @lc code=end
