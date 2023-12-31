**2024 目标 跑路 涨薪 减少内耗**

# 刷题笔记

## 二叉树
前中后序遍历(广度遍历)
递归写法
迭代写法 栈

深度遍历(层序遍历)
迭代写法 队列

二叉搜索树
通过中序遍历转化为有序数组

关于二叉树递归是否有返回值, 如何处理返回值, 遍历一边还是一整颗树, 需要好好理解这篇文章
[二叉树的最近公共祖先](https://programmercarl.com/0236.%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E6%9C%80%E8%BF%91%E5%85%AC%E5%85%B1%E7%A5%96%E5%85%88.html)

递归切忌去模拟完整链路, 入栈出栈过程会晕的
三部曲: 1. 确定递归函数的参数以及返回值 2. 确定终止条件 3. 确定单层递归

二叉树总结
![](https://code-thinking-1253855093.file.myqcloud.com/pics/20211030125421.png)

## 回溯算法
回溯本质是穷举, 可以抽象成树状结构
回溯三部曲: 
1. 确定参数和返回值, 回溯比较难确定参数, 一般是边写边加, 缺啥参数加啥; 回溯一般没有返回值
2. 确定终止条件
3. 单层递归逻辑
```
void backtracking(参数) {
    if (终止条件) {
        存放结果;
        return;
    }

    for (选择：本层集合中元素（树中节点孩子的数量就是集合的大小）) {
        处理节点;
        backtracking(路径，选择列表); // 递归
        回溯，撤销处理结果
    }
}
```

组合问题
先把完整逻辑写完, 然后再进行剪枝操作

什么时候用到`startIndex`?
一个集合取组合用`startIndex`
多个集合互不干扰取组合不用`startIndex`