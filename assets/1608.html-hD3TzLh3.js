import{_ as i,r as t,o as d,c as k,a as n,b as s,d as a,w as e,e as m}from"./app-r0ql_Osa.js";const b={},g=n("h1",{id:"_1608-特殊数组的特征值",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1608-特殊数组的特征值","aria-hidden":"true"},"#"),s(" 1608. 特殊数组的特征值")],-1),h=n("code",null,"数组",-1),v=n("code",null,"二分查找",-1),x=n("code",null,"排序",-1),f={href:"https://leetcode.cn/problems/special-array-with-x-elements-greater-than-or-equal-x",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/special-array-with-x-elements-greater-than-or-equal-x",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"LeetCode",-1),q=m('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given an array <code>nums</code> of non-negative integers. <code>nums</code> is considered <strong>special</strong> if there exists a number <code>x</code> such that there are <strong>exactly</strong> <code>x</code> numbers in <code>nums</code> that are <strong>greater than or equal to</strong> <code>x</code>.</p><p>Notice that <code>x</code> <strong>does not</strong> have to be an element in <code>nums</code>.</p><p>Return <code>x</code> _if the array is <strong>special</strong> , otherwise, return _<code>-1</code>. It can be proven that if <code>nums</code> is special, the value for <code>x</code> is <strong>unique</strong>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [3,5]</p><p>Output: 2</p><p>Explanation: There are 2 values (3 and 5) that are greater than or equal to 2.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [0,0]</p><p>Output: -1</p><p>Explanation: No numbers fit the criteria for x.</p><p>If x = 0, there should be 0 numbers &gt;= x, but there are 2.</p><p>If x = 1, there should be 1 number &gt;= x, but there are 0.</p><p>If x = 2, there should be 2 numbers &gt;= x, but there are 0.</p><p>x cannot be greater since there are only 2 numbers in nums.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: nums = [0,4,3,0,4]</p><p>Output: 3</p><p>Explanation: There are 3 values that are greater than or equal to 3.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 100</code></li><li><code>0 &lt;= nums[i] &lt;= 1000</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个非负整数数组 <code>nums</code> 。如果存在一个数 <code>x</code> ，使得 <code>nums</code> 中恰好有 <code>x</code> 个元素 <strong>大于或者等于</strong> <code>x</code> ，那么就称 <code>nums</code> 是一个 <strong>特殊数组</strong> ，而 <code>x</code> 是该数组的 <strong>特征值</strong> 。</p><p>注意： <code>x</code> <strong>不必</strong> 是 <code>nums</code> 的中的元素。</p><p>如果数组 <code>nums</code> 是一个 <strong>特殊数组</strong> ，请返回它的特征值 <code>x</code> 。否则，返回 <code>-1</code> 。可以证明的是，如果 <code>nums</code> 是特殊数组，那么其特征值 <code>x</code> 是 <strong>唯一的</strong> 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> nums = [3,5]</p><p><strong>输出：</strong> 2</p><p><strong>解释：</strong> 有 2 个元素（3 和 5）大于或等于 2 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> nums = [0,0]</p><p><strong>输出：</strong> -1</p><p><strong>解释：</strong> 没有满足题目要求的特殊数组，故而也不存在特征值 x 。</p><p>如果 x = 0，应该有 0 个元素 &gt;= x，但实际有 2 个。</p><p>如果 x = 1，应该有 1 个元素 &gt;= x，但实际有 0 个。</p><p>如果 x = 2，应该有 2 个元素 &gt;= x，但实际有 0 个。</p><p>x 不能取更大的值，因为 nums 中只有两个元素。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> nums = [0,4,3,0,4]</p><p><strong>输出：</strong> 3</p><p><strong>解释：</strong> 有 3 个元素大于或等于 3 。</p></blockquote><p><strong>示例 4：</strong></p><blockquote><p><strong>输入：</strong> nums = [3,6,7,7,0]</p><p><strong>输出：</strong> -1</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 100</code></li><li><code>0 &lt;= nums[i] &lt;= 1000</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-前缀数组" tabindex="-1"><a class="header-anchor" href="#思路一-前缀数组" aria-hidden="true">#</a> 思路一：前缀数组</h3><p>可以通过<strong>前缀数组</strong>统计每个数值的出现频率，再从后向前累积计算大于等于当前值的数字个数，这样避免了直接对数组进行排序，提升效率。</p><ol><li><p><strong>统计频率：</strong></p><p>创建一个大小为 <code>n + 1</code> 的频次数组 <code>freq</code>，其中 <code>freq[i]</code> 表示值为 <code>i</code> 的数字在数组中出现的次数。</p><p>如果某个数字大于数组长度 <code>n</code>，我们将它归入 <code>freq[n]</code>，因为超过 <code>n</code> 的数字对结果的判断没有影响。</p></li><li><p><strong>累积计数：</strong></p><p>从后往前开始遍历频次数组 <code>freq</code>，累积计算大于等于当前值的数字个数。</p><p>如果累积个数与当前值相等，则找到了满足条件的 <code>x</code>，直接返回。</p></li><li><p><strong>返回结果：</strong></p><p>如果遍历结束仍未找到满足条件的值，返回 <code>-1</code>。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度：</strong> <code>O(n)</code><ul><li>频率统计：<code>O(n)</code>，遍历数组一次。</li><li>累积计数：<code>O(n)</code>，遍历频次数组一次。</li><li>总体复杂度为 <code>O(n)</code>。</li></ul></li><li><strong>空间复杂度：</strong> <code>O(n)</code><ul><li>使用一个大小为 <code>n + 1</code> 的频次数组 <code>freq</code> 。</li></ul></li></ul><hr><h3 id="思路二-二分查找" tabindex="-1"><a class="header-anchor" href="#思路二-二分查找" aria-hidden="true">#</a> 思路二：二分查找</h3><ol><li><p><strong>排序数组</strong>：<br> 首先对数组 <code>nums</code> 排序，以便可以利用其有序性。</p></li><li><p><strong>二分查找</strong>：<br> 在 <code>[0, n]</code> 范围内进行二分查找，因为大于等于 <code>x</code> 的元素个数不可能超过数组长度：</p><ul><li>对于中间值 <code>mid</code>，计算数组中大于等于 <code>mid</code> 的元素个数 <code>count</code>。</li><li>如果 <code>count</code> 恰好等于 <code>mid</code>，返回结果。</li><li>如果 <code>count</code> 大于 <code>mid</code>，搜索右半部分；否则搜索左半部分。</li></ul></li><li><p><strong>计算大于等于 <code>x</code> 的元素个数</strong>：</p><ul><li>定义一个辅助函数 <code>getGreaterOrEqualCount</code>，用来计算，数组中大于等于 <code>x</code> 的元素个数。</li><li>依然可以通过 <strong>二分查找</strong> 来快速找到数组中第一个大于等于 <code>x</code> 的位置 <code>index</code>。</li><li>返回大于等于 <code>x</code> 的元素个数：<code>n - index</code>。</li></ul></li><li><p><strong>验证 <code>x</code> 是否满足条件</strong>：<br> 如果 <code>x == n - index</code>，则 <code>x</code> 是特殊值；否则继续调整 <code>x</code> 的范围。</p></li></ol><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(n log n)</code>，</p><ol><li><p>排序：<code>O(n log n)</code>。</p></li><li><p>二分查找：<code>O(log n) * O(log n)</code></p><ul><li>主函数中，<code>x</code> 的范围是 <code>[0, n]</code>，进行二分查找需要 <code>O(log n)</code>。</li><li>每次验证候选值 <code>x</code>，需要通过 <code>getGreaterOrEqualCount</code> 计算大于等于 <code>x</code> 的元素个数，也用二分查找实现，复杂度为 <code>O(log n)</code>。</li><li>总共需要 <code>O(log n) * O(log n) = O(log^2 n)</code> 的复杂度。</li></ul></li><li><p>总复杂度：<code>O(n log n) + O(log^2 n)</code>，排序是主导因素，整体复杂度为 <code>O(n log n)</code>。</p></li></ol></li><li><p><strong>空间复杂度</strong>：<code>O(1)</code>，没有使用额外的空间。</p></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',38),O=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"nums"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"specialArray"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"nums"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"const"),s(" n "),n("span",{class:"token operator"},"="),s(" nums"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" freq "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"("),s("n "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fill"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

	`),n("span",{class:"token comment"},"// 统计频率"),s(`
	`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" num "),n("span",{class:"token keyword"},"of"),s(" nums"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		freq`),n("span",{class:"token punctuation"},"["),s("Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"min"),n("span",{class:"token punctuation"},"("),s("n"),n("span",{class:"token punctuation"},","),s(" num"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token comment"},"// 从后向前累积计数"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" count "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(" n"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},">="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"--"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		count `),n("span",{class:"token operator"},"+="),s(" freq"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("i "),n("span",{class:"token operator"},"==="),s(" count"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(" i"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 找到满足条件的 x"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 没有找到符合条件的值"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),E=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"nums"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"specialArray"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"nums"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	nums`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"sort"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("a"),n("span",{class:"token punctuation"},","),s(" b")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" a "),n("span",{class:"token operator"},"-"),s(" b"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 排序数组"),s(`
	`),n("span",{class:"token keyword"},"const"),s(" n "),n("span",{class:"token operator"},"="),s(" nums"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(`

	`),n("span",{class:"token keyword"},"let"),s(" left "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
		right `),n("span",{class:"token operator"},"="),s(" n"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 二分查找的范围 [0, n]"),s(`

	`),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("left "),n("span",{class:"token operator"},"<="),s(" right"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"const"),s(" mid "),n("span",{class:"token operator"},"="),s(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"floor"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),s("left "),n("span",{class:"token operator"},"+"),s(" right"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"/"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token keyword"},"const"),s(" count "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"getGreaterOrEqualCount"),n("span",{class:"token punctuation"},"("),s("nums"),n("span",{class:"token punctuation"},","),s(" mid"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 计算大于等于 mid 的元素个数"),s(`

		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("count "),n("span",{class:"token operator"},"==="),s(" mid"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token keyword"},"return"),s(" mid"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 找到满足条件的特殊值"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("count "),n("span",{class:"token operator"},">"),s(" mid"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			left `),n("span",{class:"token operator"},"="),s(" mid "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 说明 mid 太小，继续向右找"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
			right `),n("span",{class:"token operator"},"="),s(" mid "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 说明 mid 太大，继续向左找"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 如果找不到特殊值，返回 -1"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token doc-comment comment"},[s(`/**
 * 计算数组中大于等于 x 的元素个数
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"nums"),s(`
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"x"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"getGreaterOrEqualCount"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("nums"),n("span",{class:"token punctuation"},","),s(" x")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" left "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
		right `),n("span",{class:"token operator"},"="),s(" nums"),n("span",{class:"token punctuation"},"."),s("length "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`

	`),n("span",{class:"token comment"},"// 找到第一个大于等于 x 的位置"),s(`
	`),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("left "),n("span",{class:"token operator"},"<="),s(" right"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"const"),s(" mid "),n("span",{class:"token operator"},"="),s(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"floor"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),s("left "),n("span",{class:"token operator"},"+"),s(" right"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"/"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("nums"),n("span",{class:"token punctuation"},"["),s("mid"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},">="),s(" x"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			right `),n("span",{class:"token operator"},"="),s(" mid "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 向左缩小范围"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
			left `),n("span",{class:"token operator"},"="),s(" mid "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 向右缩小范围"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token comment"},"// 大于等于 x 的元素个数为 n - left"),s(`
	`),n("span",{class:"token keyword"},"return"),s(" nums"),n("span",{class:"token punctuation"},"."),s("length "),n("span",{class:"token operator"},"-"),s(" left"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function C(I,A){const r=t("font"),o=t("RouterLink"),p=t("ExternalLinkIcon"),u=t("CodeTabs");return d(),k("div",null,[g,n("p",null,[s("🟢 "),a(r,{color:"#15bd66"},{default:e(()=>[s("Easy")]),_:1}),s("  🔖  "),a(o,{to:"/tag/array.html"},{default:e(()=>[h]),_:1}),s(),a(o,{to:"/tag/binary-search.html"},{default:e(()=>[v]),_:1}),s(),a(o,{to:"/tag/sorting.html"},{default:e(()=>[x]),_:1}),s("  🔗 "),n("a",f,[_,a(p)]),s(),n("a",y,[w,a(p)])]),q,a(u,{id:"371",data:[{id:"前缀数组"},{id:"二分查找"}]},{title0:e(({value:c,isActive:l})=>[s("前缀数组")]),title1:e(({value:c,isActive:l})=>[s("二分查找")]),tab0:e(({value:c,isActive:l})=>[O]),tab1:e(({value:c,isActive:l})=>[E]),_:1})])}const N=i(b,[["render",C],["__file","1608.html.vue"]]);export{N as default};
