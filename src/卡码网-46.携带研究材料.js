/**
 * 题目描述:
 * 小明是一位科学家，他需要参加一场重要的国际科学大会，以展示自己的最新研究成果。
 * 他需要带一些研究材料，但是他的行李箱空间有限。这些研究材料包括实验设备、文献资料和实验样本等等，它们各自占据不同的空间，并且具有不同的价值。 
 * 小明的行李空间为 N，问小明应该如何抉择，才能携带最大价值的研究材料，每种研究材料只能选择一次，并且只有选与不选两种选择，不能进行切割。
 * 
 * 输入描述:
 * 第一行包含两个正整数，第一个整数 M 代表研究材料的种类，第二个正整数 N，代表小明的行李空间。
 * 第二行包含 M 个正整数，代表每种研究材料的所占空间。
 * 第三行包含 M 个正整数，代表每种研究材料的价值。 
 * 
 * 输出描述:
 * 输出一个整数，代表小明能够携带的研究材料的最大价值。
 * 
 * 输入示例:
 * 6 1
 * 2 2 3 1 5 2
 * 2 3 1 5 4 3
 * 
 * 输出示例:
 * 5
 * 
 * 提示信息:
 * 小明能够携带 6 种研究材料，但是行李空间只有 1，而占用空间为 1 的研究材料价值为 5，所以最终答案输出 5。 
 * 数据范围：
 * 1 <= N <= 1000
 * 1 <= M <= 1000
 * 研究材料占用空间和价值都小于等于 1000
 */
const rl = require('readline').createInterface({ input: process.stdin });
const iter = rl[Symbol.asyncIterator]();
/**
 * @returns {Promise<string>}
 */
const readline = async () => ((await iter.next()).value);

bag01();

async function bag01() {
  // DP 经典01背包问题

  /**
   * 1. dp[i][j]及i, j下标的含义: dp[i][j]表示背包大小为j时可装入物品的最大价值, i为放入第i个物品, j为背包大小
   * 2. dp递推公式: 每个物品都有放入背包和不放入背包两种状态, 如果不放入背包, 那么当前背包的价值就是前一个状态即 dp[i-1][j];
   * 如果放入背包那么当前背包价值就是上一个状态中挪出可放入当前物品大小的空间后重新计算价值即 dp[i-1][j-weiget[i]] + values[i]
   * 可以推导出 dp[i][j] = Math.max(dp[i-1][j], dp[i-1][j-weiget[i]] + values[i])
   * 3. dp初始化: 先对所有元素初始化为0, 再计算第0个物品即第一行放入的价值
   * 4. 遍历: 先遍历物品, 再遍历背包 容易理解
   */

  // m->物品数量 n->背包大小
  // const [m, n] = [6, 1];
  // const weigets = [2, 2, 3, 1, 5, 2];
  // const values = [2, 3, 1, 5, 4, 3];
  const [m, n] = (await readline()).split(/\W/).map(v => +v);
  const weigets = (await readline()).split(/\W/).map(v => +v);
  const values = (await readline()).split(/\W/).map(v => +v);
  rl.close();
  // 初始化dp
  const dp = new Array(m);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(n + 1).fill(0);
  }
  // dp初始值
  for (let j = 0; j < dp[0].length; j++) {
    if (j >= weigets[0]) dp[0][j] = values[0];
  }
  // 先遍历物品, 再遍历背包大小
  for (let i = 1; i < m; i++) {
    for (let j = 1; j <= n; j++) {
      if (j < weigets[i]) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weigets[i]] + values[i]);
      }
    }
  }
  console.log(dp[m - 1][n]);
  return dp[m - 1][n];

  /** 滚动数组 用一维数组表示 */
  // const dp = new Array(n + 1).fill(0); // dp[j]还是表示背包大小为j时的最大价值
  // for (let i = 0; i < m; i++) {
  //   // !! 这里是和二维数组不同的地方, 二维数组之所以可以从前往后遍历, 因为行与行之间的值不会互相干扰
  //   // 降维后如果从前往后遍历会导致dp的值被使用多次, 因为dp递推公式是比较的j-weight[i], 如果是从后往前遍历则不会有问题
  //   for (let j = n; j >= weigets[i]; j--) {
  //     dp[j] = Math.max(dp[j], dp[j - weigets[i]] + values[i]);
  //   }
  // }
  // console.log(dp[n]);
  // return dp[n];
}