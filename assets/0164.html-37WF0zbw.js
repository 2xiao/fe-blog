import{_ as r,r as p,o as k,c as d,a as n,b as s,d as a,w as t,f as m,e as b}from"./app-KDJRKGep.js";const h={},v=n("h1",{id:"_164-最大间距",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_164-最大间距","aria-hidden":"true"},"#"),s(" 164. 最大间距")],-1),f=n("code",null,"数组",-1),_=n("code",null,"桶排序",-1),y=n("code",null,"基数排序",-1),x=n("code",null,"排序",-1),g={href:"https://leetcode.cn/problems/maximum-gap",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"力扣",-1),M={href:"https://leetcode.com/problems/maximum-gap",target:"_blank",rel:"noopener noreferrer"},O=n("code",null,"LeetCode",-1),j=b('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an integer array <code>nums</code>, return <em>the maximum difference between two successive elements in its sorted form</em>. If the array contains less than two elements, return <code>0</code>.</p><p>You must write an algorithm that runs in linear time and uses linear extra space.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [3,6,9,1]</p><p>Output: 3</p><p>Explanation: The sorted form of the array is [1,3,6,9], either (3,6) or (6,9) has the maximum difference 3.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [10]</p><p>Output: 0</p><p>Explanation: The array contains less than 2 elements, therefore return 0.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 10^5</code></li><li><code>0 &lt;= nums[i] &lt;= 10^9</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个无序的数组 <code>nums</code>，返回 <em>数组在排序之后，相邻元素之间最大的差值</em> 。如果数组元素个数小于 2，则返回 <code>0</code> 。</p><p>您必须编写一个在「线性时间」内运行并使用「线性额外空间」的算法。</p><p><strong>示例 1:</strong></p><blockquote><p><strong>输入:</strong> nums = [3,6,9,1]</p><p><strong>输出:</strong> 3</p><p><strong>解释:</strong> 排序后的数组是 [1,3,6,9]<strong><em>,</em></strong> 其中相邻元素 (3,6) 和 (6,9) 之间都存在最大差值 3。</p></blockquote><p><strong>示例 2:</strong></p><blockquote><p><strong>输入:</strong> nums = [10]</p><p><strong>输出:</strong> 0</p><p><strong>解释:</strong> 数组元素个数小于 2，因此返回 0。</p></blockquote><p><strong>提示:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 10^5</code></li><li><code>0 &lt;= nums[i] &lt;= 10^9</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-基数排序-radix-sort" tabindex="-1"><a class="header-anchor" href="#思路一-基数排序-radix-sort" aria-hidden="true">#</a> 思路一: 基数排序（Radix Sort）</h3><p>基数排序是一种线性时间的排序算法，适合用来排序正整数。利用基数排序，可以先对数组进行排序，然后直接遍历排序后的数组计算最大差值。</p><ol><li>使用基数排序对数组进行排序。</li><li>遍历排序后的数组，计算相邻元素之间的差值，记录最大差值。</li><li>返回最大差值。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>: <code>O(n)</code></p><ul><li>基数排序：<code>O(n)</code>。</li><li>计算最大差值：<code>O(n)</code>。</li><li>总时间复杂度为 <code>O(n)</code>。</li></ul></li><li><p><strong>空间复杂度</strong>: <code>O(n)</code>，需要额外的缓冲区存储排序结果。</p></li></ul><hr><h3 id="思路二-桶排序-bucket-sort" tabindex="-1"><a class="header-anchor" href="#思路二-桶排序-bucket-sort" aria-hidden="true">#</a> 思路二: 桶排序（Bucket Sort）</h3><ol><li>找到数组的最小值和最大值 <code>min</code> 和 <code>max</code>。</li><li>计算桶的大小 <code>bucketSize</code> 和数量 <code>bucketCount</code>。</li><li>将每个数字分配到桶中，并记录每个桶的最小值和最大值。</li><li>遍历所有桶，计算相邻桶之间的差值，记录最大差值。</li><li>返回最大差值。</li></ol><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>: <code>O(n)</code></p><ul><li>遍历数组分配到桶：<code>O(n)</code>。</li><li>遍历桶计算差值：<code>O(k)</code>，其中 <code>k</code> 是桶的数量，最坏情况下 <code>k &lt;= n</code>。</li><li>总时间复杂度为 <code>O(n)</code>。</li></ul></li><li><p><strong>空间复杂度</strong>: <code>O(n)</code></p><ul><li>使用了 <code>O(k)</code> 的桶存储，最坏情况下 <code>k &lt;= n</code>。</li></ul></li></ul><hr><h3 id="思路三-利用对象的键排序" tabindex="-1"><a class="header-anchor" href="#思路三-利用对象的键排序" aria-hidden="true">#</a> 思路三: 利用对象的键排序</h3><ol><li><p>特殊情况处理：如果数组长度小于 2，则无法计算差值，直接返回 <code>0</code>。</p></li><li><p>使用对象 <code>obj</code> 去重</p></li></ol><ul><li>遍历数组，将每个数字作为对象 <code>obj</code> 的键，以实现数字去重。</li><li>由于对象的键在 JavaScript 中默认会按照数值顺序排序（对于纯数值键），因此无需显式排序。</li><li>虽然代码利用了 JavaScript 对象键的特性，但在实现过程中，键值的自动排序并不一定具有线性时间复杂度，因此无法完全保证满足题目对线性时间复杂度的要求。</li></ul><ol start="3"><li>遍历对象的键，计算最大差值</li></ol><ul><li>初始化 <code>prev</code> 变量用于记录前一个键值，初始值为 <code>-1</code>（表示尚未遍历任何键）。</li><li>遍历对象中的键（按数值顺序自动排序），如果 <code>prev</code> 不为 <code>-1</code>，计算当前键与 <code>prev</code> 的差值并更新 <code>maxDiff</code>。</li><li>遍历完成后，<code>maxDiff</code> 即为相邻数之间的最大差值。</li></ul><ol start="4"><li>返回计算出的 <code>maxDiff</code>。</li></ol><h4 id="复杂度分析-2" tabindex="-1"><a class="header-anchor" href="#复杂度分析-2" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>: <code>O(n)</code></p><ul><li>遍历数组创建对象的时间复杂度为 <code>O(n)</code>。</li><li>遍历对象的键计算最大差值的时间复杂度为 <code>O(k)</code>，其中 <code>k</code> 是对象键的数量。</li><li>最坏情况下，键的数量与数组长度相同，因此时间复杂度为 <code>O(n)</code>。</li></ul></li><li><p><strong>空间复杂度</strong>: <code>O(n)</code>，需要额外的对象 <code>obj</code> 来存储数组中的唯一元素。</p></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',39),G=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"nums"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"maximumGap"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"nums"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("nums"),n("span",{class:"token punctuation"},"."),s("length "),n("span",{class:"token operator"},"<"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`

	`),n("span",{class:"token comment"},"// 基数排序"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" max "),n("span",{class:"token operator"},"="),s(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"max"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"..."),s("nums"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
		exp `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"const"),s(" n "),n("span",{class:"token operator"},"="),s(" nums"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},","),s(`
		buffer `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"("),s("n"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"floor"),n("span",{class:"token punctuation"},"("),s("max "),n("span",{class:"token operator"},"/"),s(" exp"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},">"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"let"),s(" count "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fill"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

		`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" num "),n("span",{class:"token keyword"},"of"),s(" nums"),n("span",{class:"token punctuation"},")"),s(" count"),n("span",{class:"token punctuation"},"["),s("Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"floor"),n("span",{class:"token punctuation"},"("),s("num "),n("span",{class:"token operator"},"/"),s(" exp"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"%"),s(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(" count"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"+="),s(" count"),n("span",{class:"token punctuation"},"["),s("i "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(" n "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},">="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"--"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token keyword"},"const"),s(" digit "),n("span",{class:"token operator"},"="),s(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"floor"),n("span",{class:"token punctuation"},"("),s("nums"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"/"),s(" exp"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"%"),s(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},";"),s(`
			buffer`),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"--"),s("count"),n("span",{class:"token punctuation"},"["),s("digit"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(" nums"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
		nums `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"..."),s("buffer"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
		exp `),n("span",{class:"token operator"},"*="),s(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token comment"},"// 计算最大间距"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" maxGap "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" nums"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		maxGap `),n("span",{class:"token operator"},"="),s(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"max"),n("span",{class:"token punctuation"},"("),s("maxGap"),n("span",{class:"token punctuation"},","),s(" nums"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"-"),s(" nums"),n("span",{class:"token punctuation"},"["),s("i "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"return"),s(" maxGap"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),C=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"nums"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"maximumGap"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"nums"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("nums"),n("span",{class:"token punctuation"},"."),s("length "),n("span",{class:"token operator"},"<"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`

	`),n("span",{class:"token keyword"},"let"),s(" min "),n("span",{class:"token operator"},"="),s(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"min"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"..."),s("nums"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
		max `),n("span",{class:"token operator"},"="),s(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"max"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"..."),s("nums"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("min "),n("span",{class:"token operator"},"==="),s(" max"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`

	`),n("span",{class:"token keyword"},"let"),s(" n "),n("span",{class:"token operator"},"="),s(" nums"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" bucketSize "),n("span",{class:"token operator"},"="),s(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"max"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"floor"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),s("max "),n("span",{class:"token operator"},"-"),s(" min"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"/"),s(),n("span",{class:"token punctuation"},"("),s("n "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" bucketCount "),n("span",{class:"token operator"},"="),s(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"floor"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),s("max "),n("span",{class:"token operator"},"-"),s(" min"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"/"),s(" bucketSize"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" buckets "),n("span",{class:"token operator"},"="),s(" Array"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"from"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"length"),n("span",{class:"token operator"},":"),s(" bucketCount "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token literal-property property"},"min"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"Infinity"),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token literal-property property"},"max"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"Infinity"),s(`
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

	`),n("span",{class:"token comment"},"// 将数字放入桶中"),s(`
	`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" num "),n("span",{class:"token keyword"},"of"),s(" nums"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"let"),s(" idx "),n("span",{class:"token operator"},"="),s(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"floor"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),s("num "),n("span",{class:"token operator"},"-"),s(" min"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"/"),s(" bucketSize"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
		buckets`),n("span",{class:"token punctuation"},"["),s("idx"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),s("min "),n("span",{class:"token operator"},"="),s(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"min"),n("span",{class:"token punctuation"},"("),s("buckets"),n("span",{class:"token punctuation"},"["),s("idx"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),s("min"),n("span",{class:"token punctuation"},","),s(" num"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
		buckets`),n("span",{class:"token punctuation"},"["),s("idx"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),s("max "),n("span",{class:"token operator"},"="),s(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"max"),n("span",{class:"token punctuation"},"("),s("buckets"),n("span",{class:"token punctuation"},"["),s("idx"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),s("max"),n("span",{class:"token punctuation"},","),s(" num"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token comment"},"// 计算最大间距"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" maxGap "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
		prevMax `),n("span",{class:"token operator"},"="),s(" min"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" bucket "),n("span",{class:"token keyword"},"of"),s(" buckets"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("bucket"),n("span",{class:"token punctuation"},"."),s("min "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token number"},"Infinity"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"continue"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// Skip empty buckets"),s(`
		maxGap `),n("span",{class:"token operator"},"="),s(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"max"),n("span",{class:"token punctuation"},"("),s("maxGap"),n("span",{class:"token punctuation"},","),s(" bucket"),n("span",{class:"token punctuation"},"."),s("min "),n("span",{class:"token operator"},"-"),s(" prevMax"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
		prevMax `),n("span",{class:"token operator"},"="),s(" bucket"),n("span",{class:"token punctuation"},"."),s("max"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token keyword"},"return"),s(" maxGap"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),S=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"nums"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"maximumGap"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"nums"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("nums"),n("span",{class:"token punctuation"},"."),s("length "),n("span",{class:"token operator"},"<"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" obj "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" num "),n("span",{class:"token keyword"},"of"),s(" nums"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		obj`),n("span",{class:"token punctuation"},"["),s("num"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(" num"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token keyword"},"let"),s(" maxDiff "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
		prev `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`

	`),n("span",{class:"token comment"},"// 计算最大间距"),s(`
	`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" key "),n("span",{class:"token keyword"},"in"),s(" obj"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("prev "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			prev `),n("span",{class:"token operator"},"="),s(" key"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
			maxDiff `),n("span",{class:"token operator"},"="),s(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"max"),n("span",{class:"token punctuation"},"("),s("maxDiff"),n("span",{class:"token punctuation"},","),s(" key "),n("span",{class:"token operator"},"-"),s(" prev"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
			prev `),n("span",{class:"token operator"},"="),s(" key"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"return"),s(" maxDiff"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),A=n("h2",{id:"相关题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),s(" 相关题目")],-1),q=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),I=n("td",{style:{"text-align":"center"}},"1637",-1),D=n("td",{style:{"text-align":"left"}},"两点之间不包含任何点的最宽垂直区域",-1),E={style:{"text-align":"center"}},L={style:{"text-align":"left"}},N=n("code",null,"数组",-1),T=n("code",null,"排序",-1),V=n("td",{style:{"text-align":"center"}},"🟢",-1),z={style:{"text-align":"center"}},B={href:"https://leetcode.cn/problems/widest-vertical-area-between-two-points-containing-no-points",target:"_blank",rel:"noopener noreferrer"},R={href:"https://leetcode.com/problems/widest-vertical-area-between-two-points-containing-no-points",target:"_blank",rel:"noopener noreferrer"},J=n("td",{style:{"text-align":"center"}},"2274",-1),Y=n("td",{style:{"text-align":"left"}},"不含特殊楼层的最大连续楼层数",-1),F=n("td",{style:{"text-align":"center"}},null,-1),H={style:{"text-align":"left"}},K=n("code",null,"数组",-1),P=n("code",null,"排序",-1),Q=n("td",{style:{"text-align":"center"}},"🟠",-1),U={style:{"text-align":"center"}},W={href:"https://leetcode.cn/problems/maximum-consecutive-floors-without-special-floors",target:"_blank",rel:"noopener noreferrer"},X={href:"https://leetcode.com/problems/maximum-consecutive-floors-without-special-floors",target:"_blank",rel:"noopener noreferrer"};function Z($,nn){const u=p("font"),e=p("RouterLink"),o=p("ExternalLinkIcon"),i=p("CodeTabs");return k(),d("div",null,[v,n("p",null,[s("🟠 "),a(u,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(e,{to:"/tag/array.html"},{default:t(()=>[f]),_:1}),s(),a(e,{to:"/tag/bucket-sort.html"},{default:t(()=>[_]),_:1}),s(),a(e,{to:"/tag/radix-sort.html"},{default:t(()=>[y]),_:1}),s(),a(e,{to:"/tag/sorting.html"},{default:t(()=>[x]),_:1}),s("  🔗 "),n("a",g,[w,a(o)]),s(),n("a",M,[O,a(o)])]),j,a(i,{id:"337",data:[{id:"基数排序"},{id:"桶排序"},{id:"利用对象的键排序"}]},{title0:t(({value:c,isActive:l})=>[s("基数排序")]),title1:t(({value:c,isActive:l})=>[s("桶排序")]),title2:t(({value:c,isActive:l})=>[s("利用对象的键排序")]),tab0:t(({value:c,isActive:l})=>[G]),tab1:t(({value:c,isActive:l})=>[C]),tab2:t(({value:c,isActive:l})=>[S]),_:1}),A,m(" prettier-ignore "),n("table",null,[q,n("tbody",null,[n("tr",null,[I,D,n("td",E,[a(e,{to:"/problem/1637.html"},{default:t(()=>[s("[✓]")]),_:1})]),n("td",L,[a(e,{to:"/tag/array.html"},{default:t(()=>[N]),_:1}),s(),a(e,{to:"/tag/sorting.html"},{default:t(()=>[T]),_:1})]),V,n("td",z,[n("a",B,[s("🀄️"),a(o)]),s(),n("a",R,[s("🔗"),a(o)])])]),n("tr",null,[J,Y,F,n("td",H,[a(e,{to:"/tag/array.html"},{default:t(()=>[K]),_:1}),s(),a(e,{to:"/tag/sorting.html"},{default:t(()=>[P]),_:1})]),Q,n("td",U,[n("a",W,[s("🀄️"),a(o)]),s(),n("a",X,[s("🔗"),a(o)])])])])])])}const an=r(h,[["render",Z],["__file","0164.html.vue"]]);export{an as default};
