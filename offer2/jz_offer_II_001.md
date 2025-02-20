---
title: 1. 整数除法
description: LeetCode 1. 整数除法题解，整数除法，包含解题思路、复杂度分析以及完整的 JavaScript 代码实现。
keywords:
  - LeetCode
  - 1. 整数除法
  - 整数除法
  - 整数除法
  - 解题思路
  - 数学
---

# 1. 整数除法

🟢 <font color=#15bd66>Easy</font>&emsp; 🔖&ensp; [`数学`](/tag/math.md)&emsp; 🔗&ensp;[`力扣`](https://leetcode.cn/problems/xoh6Oh)

## 题目

给定两个整数 `a` 和 `b` ，求它们的除法的商 `a/b` ，要求不得使用乘号 `'*'`、除号 `'/'` 以及求余符号 `'%'` 。

**注意：**

- 整数除法的结果应当截去（`truncate`）其小数部分，例如：`truncate(8.345) = 8` 以及 `truncate(-2.7335) = -2`
- 假设我们的环境只能存储 32 位有符号整数，其数值范围是 `[−231, 231−1]`。本题中，如果除法结果溢出，则返回 `2^31 − 1`

**示例 1：**

> **输入：** a = 15, b = 2
>
> **输出：** 7
>
> **解释：** 15/2 = truncate(7.5) = 7

**示例 2：**

> **输入：** a = 7, b = -3
>
> **输出：** -2
>
> **解释：** 7/-3 = truncate(-2.33333..) = -2

**示例 3：**

> **输入：** a = 0, b = 1
>
> **输出：** 0

**示例 4：**

> **输入：** a = 1, b = 1
>
> **输出：** 1

**提示:**

- `-2^31 <= a, b <= 2^31 - 1`
- `b != 0`

::: warning
本题与 LeetCode [第 29 题](../problem/0029.md) 相同。
:::

## 解题思路

1. **处理符号问题**：

   - 首先判断结果的符号：如果 `a` 和 `b` 中只有一个是负数，结果是负的，否则结果为正的。
   - 可以通过将 `a` 和 `b` 取绝对值来处理后续的无符号整数运算。

2. **倍增法**：

   - 为了模拟除法，我们可以用**减法**模拟。直接进行减法会超时，因此采用**倍增法**提高效率。
   - 基本思想是将除数（`b`）不断翻倍（即乘以 2），直到超过被除数（`a`）。这相当于不断减去更大的除数倍数（2 的幂次）来逼近结果。
   - 每次当倍增的除数能从被除数中减去时，记录下对应的倍数（即商的部分），直到被除数小于除数为止。

3. **处理边界情况**：

   - 如果 `b == 0`，不能除零，直接返回。
   - 如果 `a == -2^31` 且 `b == -1`，会导致溢出，这种情况下直接返回 `2^31 - 1`（即 `2147483647`）。

4. **返回结果**：
   - 根据之前判断的符号情况，返回商的正负值。

#### 复杂度分析

- **时间复杂度**：`O(log n)`，其中 n 是 `a` 的大小。每次倍增都将被除数缩小到原来的一半，故时间复杂度为对数级别。
- **空间复杂度**：`O(1)`，除了存储变量外，所需的额外空间是常数级的。

## 代码

```javascript
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var divide = function (a, b) {
	// 处理特殊情况
	if (b == 0) return Infinity; // 除数为 0
	if (a == -Math.pow(2, 31) && b == -1) return Math.pow(2, 31) - 1; // 溢出情况

	// 判断结果符号
	let isNegative = a > 0 !== b > 0;
	// 取绝对值，处理负数问题
	a = Math.abs(a);
	b = Math.abs(b);

	let res = 0;
	// 倍增法
	while (a >= b) {
		let temp = b,
			multi = 1;
		while (a >= 2 * temp) {
			temp *= 2; // 除数翻倍
			multi *= 2; // 倍数也翻倍
		}
		a -= temp; // 减去翻倍后的除数
		res += multi; // 商加上相应的倍数
	}

	// 返回结果，处理符号
	return isNegative ? -res : res;
};
```
