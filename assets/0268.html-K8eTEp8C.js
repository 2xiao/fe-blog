import{_ as u,r as i,o as d,c as k,a as n,b as s,d as t,w as e,f as m,e as h}from"./app-3dvbhwow.js";const _={},b=n("h1",{id:"_268-丢失的数字",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_268-丢失的数字","aria-hidden":"true"},"#"),s(" 268. 丢失的数字")],-1),g=n("code",null,"位运算",-1),f=n("code",null,"数组",-1),v=n("code",null,"哈希表",-1),y=n("code",null,"数学",-1),x=n("code",null,"二分查找",-1),w=n("code",null,"排序",-1),O={href:"https://leetcode.cn/problems/missing-number",target:"_blank",rel:"noopener noreferrer"},j=n("code",null,"力扣",-1),A={href:"https://leetcode.com/problems/missing-number",target:"_blank",rel:"noopener noreferrer"},E=n("code",null,"LeetCode",-1),q=h('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an array <code>nums</code> containing <code>n</code> distinct numbers in the range <code>[0, n]</code>, return <em>the only number in the range that is missing from the array.</em></p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [3,0,1]</p><p>Output: 2</p><p>Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [0,1]</p><p>Output: 2</p><p>Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: nums = [9,6,4,2,3,5,7,0,1]</p><p>Output: 8</p><p>Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>n == nums.length</code></li><li><code>1 &lt;= n &lt;= 10^4</code></li><li><code>0 &lt;= nums[i] &lt;= n</code></li><li>All the numbers of <code>nums</code> are <strong>unique</strong>.</li></ul><p><strong>Follow up:</strong> Could you implement a solution using only <code>O(1)</code> extra space complexity and <code>O(n)</code> runtime complexity?</p><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个包含 <code>[0, n]</code> 中 <code>n</code> 个数的数组 <code>nums</code> ，找出 <code>[0, n]</code> 这个范围内没有出现在数组中的那个数。<code>nums</code> 中的所有数字都 <strong>独一无二</strong>。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-数学运算" tabindex="-1"><a class="header-anchor" href="#思路一-数学运算" aria-hidden="true">#</a> 思路一：数学运算</h3><p>这个问题可以通过数学运算来解决。由于序列包含的是从 <code>0</code> 到 <code>n</code> 的连续整数，可以计算序列的期望和实际和的差值，即缺失的数字。</p><ol><li>计算期望和：根据等差数列的求和公式，期望和为 <code>(n * (n + 1)) / 2</code>。</li><li>计算实际和：遍历给定的数组，累加得到实际的和。</li><li>返回期望和与实际和的差值，即为缺失的数字。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是数组的长度。遍历数组一次。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只使用了常数个额外变量。</li></ul><hr><h3 id="思路二-位运算" tabindex="-1"><a class="header-anchor" href="#思路二-位运算" aria-hidden="true">#</a> 思路二：位运算</h3><p>在这个思路中，我们可以利用异或运算的性质来解决问题。异或运算有一个很有用的性质：任何数和自身做异或运算结果都为 0。因此，如果我们将数组中的所有数字和它们的索引进行异或运算，那么相同的数字将会互相抵消，最终剩下的结果就是缺失的数字。</p><ol><li>初始化一个变量 <code>res</code>，将其赋值为数组的长度 <code>n</code>，因为缺失的数字肯定在 <code>[0, n]</code> 这个范围内。</li><li>遍历数组，对 <code>res</code> 和数组元素以及它们的索引进行异或运算。</li><li>返回 <code>res</code>，即为缺失的数字。</li></ol><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是数组的长度。遍历数组一次。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只使用了常数个额外变量。</li></ul><hr><h3 id="思路三-负数标记" tabindex="-1"><a class="header-anchor" href="#思路三-负数标记" aria-hidden="true">#</a> 思路三：负数标记</h3><p>这个思路的核心思想是利用数组的索引来标记数字的存在。具体步骤如下：</p><ol><li>初始化一个长度为 <code>n+1</code> 的布尔数组 <code>arr</code>，初始值为 <code>false</code>。</li><li>遍历给定数组 <code>nums</code>，将 <code>arr</code> 中对应的索引位置置为 <code>true</code>。</li><li>再次遍历数组 <code>arr</code>，找到第一个值为 <code>false</code> 的索引，该索引即为缺失的数字。</li></ol><h4 id="复杂度分析-2" tabindex="-1"><a class="header-anchor" href="#复杂度分析-2" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是数组的长度。需要遍历数组两次。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，需要额外的布尔数组存储数字的存在情况。</li></ul><hr><h3 id="思路四-压缩状态的负数标记" tabindex="-1"><a class="header-anchor" href="#思路四-压缩状态的负数标记" aria-hidden="true">#</a> 思路四：压缩状态的负数标记</h3><p>这个思路在思路三的基础上进行了一些优化。由于题目已经明确说明了数组中的数字范围在 <code>0</code> 到 <code>n</code> 之间，我们可以利用数组中的元素符号来标记数字的存在。具体步骤如下：</p><ol><li>遍历数组 <code>nums</code>，将每个元素对应索引位置的元素置为负数，表示该索引对应的数字存在。</li><li>再次遍历数组，找到第一个非负数的索引，该索引即为缺失的数字。</li><li>如果数组中存在 <code>0</code>，则标记下来，因为 <code>0</code> 在这种方法下无法通过负数标记。</li></ol><h4 id="复杂度分析-3" tabindex="-1"><a class="header-anchor" href="#复杂度分析-3" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是数组的长度。需要遍历数组两次。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只使用了常数个额外变量。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',38),N=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"nums"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"missingNumber"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"nums"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"const"),s(" n "),n("span",{class:"token operator"},"="),s(" nums"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"const"),s(" expect "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),s("n "),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token punctuation"},"("),s("n "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"/"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"const"),s(" sum "),n("span",{class:"token operator"},"="),s(" nums"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"reduce"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("acc"),n("span",{class:"token punctuation"},","),s(" num")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" acc "),n("span",{class:"token operator"},"+"),s(" num"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"return"),s(" expect "),n("span",{class:"token operator"},"-"),s(" sum"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),C=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"nums"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"missingNumber"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"nums"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"const"),s(" n "),n("span",{class:"token operator"},"="),s(" nums"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" res "),n("span",{class:"token operator"},"="),s(" n"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" n"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		res `),n("span",{class:"token operator"},"^="),s(" nums"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"^"),s(" i"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"return"),s(" res"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),I=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"nums"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"missingNumber"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"nums"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"const"),s(" n "),n("span",{class:"token operator"},"="),s(" nums"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" arr "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"("),s("n "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fill"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" n"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		arr`),n("span",{class:"token punctuation"},"["),s("nums"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" res"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<="),s(" n"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("arr"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			res `),n("span",{class:"token operator"},"="),s(" i"),n("span",{class:"token punctuation"},";"),s(`
			`),n("span",{class:"token keyword"},"break"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"return"),s(" res"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),L=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"nums"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"missingNumber"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"nums"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" res"),n("span",{class:"token punctuation"},","),s(" res_0"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"const"),s(" n "),n("span",{class:"token operator"},"="),s(" nums"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" n"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"let"),s(" index "),n("span",{class:"token operator"},"="),s(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"abs"),n("span",{class:"token punctuation"},"("),s("nums"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("index "),n("span",{class:"token operator"},"=="),s(" n"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			nums`),n("span",{class:"token punctuation"},"["),s("index"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token operator"},"-"),s("n"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
			nums`),n("span",{class:"token punctuation"},"["),s("index"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token operator"},"-"),s("nums"),n("span",{class:"token punctuation"},"["),s("index"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<="),s(" n"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("nums"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},">"),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token operator"},"||"),s(" nums"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"undefined"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			res `),n("span",{class:"token operator"},"="),s(" i"),n("span",{class:"token punctuation"},";"),s(`
			`),n("span",{class:"token keyword"},"break"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("nums"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			res_0 `),n("span",{class:"token operator"},"="),s(" i"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"return"),s(" res "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"undefined"),s(),n("span",{class:"token operator"},"?"),s(" res_0 "),n("span",{class:"token operator"},":"),s(" res"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),V=n("h2",{id:"相关题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),s(" 相关题目")],-1),B=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),T=n("td",{style:{"text-align":"center"}},"41",-1),R=n("td",{style:{"text-align":"left"}},"缺失的第一个正数",-1),F={style:{"text-align":"center"}},G={style:{"text-align":"left"}},M=n("code",null,"数组",-1),S=n("code",null,"哈希表",-1),z=n("td",{style:{"text-align":"center"}},"🔴",-1),D={style:{"text-align":"center"}},H={href:"https://leetcode.cn/problems/first-missing-positive",target:"_blank",rel:"noopener noreferrer"},J={href:"https://leetcode.com/problems/first-missing-positive",target:"_blank",rel:"noopener noreferrer"},K=n("td",{style:{"text-align":"center"}},"136",-1),P=n("td",{style:{"text-align":"left"}},"只出现一次的数字",-1),Q={style:{"text-align":"center"}},U={style:{"text-align":"left"}},W=n("code",null,"位运算",-1),X=n("code",null,"数组",-1),Y=n("td",{style:{"text-align":"center"}},"🟢",-1),Z={style:{"text-align":"center"}},$={href:"https://leetcode.cn/problems/single-number",target:"_blank",rel:"noopener noreferrer"},nn={href:"https://leetcode.com/problems/single-number",target:"_blank",rel:"noopener noreferrer"},sn=n("td",{style:{"text-align":"center"}},"287",-1),tn=n("td",{style:{"text-align":"left"}},"寻找重复数",-1),en={style:{"text-align":"center"}},an={style:{"text-align":"left"}},on=n("code",null,"位运算",-1),cn=n("code",null,"数组",-1),ln=n("code",null,"双指针",-1),rn=n("code",null,"1+",-1),pn=n("td",{style:{"text-align":"center"}},"🟠",-1),un={style:{"text-align":"center"}},dn={href:"https://leetcode.cn/problems/find-the-duplicate-number",target:"_blank",rel:"noopener noreferrer"},kn={href:"https://leetcode.com/problems/find-the-duplicate-number",target:"_blank",rel:"noopener noreferrer"},mn=n("td",{style:{"text-align":"center"}},"765",-1),hn=n("td",{style:{"text-align":"left"}},"情侣牵手",-1),_n=n("td",{style:{"text-align":"center"}},null,-1),bn={style:{"text-align":"left"}},gn=n("code",null,"贪心",-1),fn=n("code",null,"深度优先搜索",-1),vn=n("code",null,"广度优先搜索",-1),yn=n("code",null,"2+",-1),xn=n("td",{style:{"text-align":"center"}},"🔴",-1),wn={style:{"text-align":"center"}},On={href:"https://leetcode.cn/problems/couples-holding-hands",target:"_blank",rel:"noopener noreferrer"},jn={href:"https://leetcode.com/problems/couples-holding-hands",target:"_blank",rel:"noopener noreferrer"},An=n("td",{style:{"text-align":"center"}},"1980",-1),En=n("td",{style:{"text-align":"left"}},"找出不同的二进制字符串",-1),qn=n("td",{style:{"text-align":"center"}},null,-1),Nn={style:{"text-align":"left"}},Cn=n("code",null,"数组",-1),In=n("code",null,"哈希表",-1),Ln=n("code",null,"字符串",-1),Vn=n("code",null,"1+",-1),Bn=n("td",{style:{"text-align":"center"}},"🟠",-1),Tn={style:{"text-align":"center"}},Rn={href:"https://leetcode.cn/problems/find-unique-binary-string",target:"_blank",rel:"noopener noreferrer"},Fn={href:"https://leetcode.com/problems/find-unique-binary-string",target:"_blank",rel:"noopener noreferrer"};function Gn(Mn,Sn){const r=i("font"),a=i("RouterLink"),o=i("ExternalLinkIcon"),p=i("CodeTabs");return d(),k("div",null,[b,n("p",null,[s("🟢 "),t(r,{color:"#15bd66"},{default:e(()=>[s("Easy")]),_:1}),s("  🔖  "),t(a,{to:"/tag/bit-manipulation.html"},{default:e(()=>[g]),_:1}),s(),t(a,{to:"/tag/array.html"},{default:e(()=>[f]),_:1}),s(),t(a,{to:"/tag/hash-table.html"},{default:e(()=>[v]),_:1}),s(),t(a,{to:"/tag/math.html"},{default:e(()=>[y]),_:1}),s(),t(a,{to:"/tag/binary-search.html"},{default:e(()=>[x]),_:1}),s(),t(a,{to:"/tag/sorting.html"},{default:e(()=>[w]),_:1}),s("  🔗 "),n("a",O,[j,t(o)]),s(),n("a",A,[E,t(o)])]),q,t(p,{id:"249",data:[{id:"数学运算"},{id:"位运算"},{id:"负数标记"},{id:"压缩状态的负数标记"}]},{title0:e(({value:c,isActive:l})=>[s("数学运算")]),title1:e(({value:c,isActive:l})=>[s("位运算")]),title2:e(({value:c,isActive:l})=>[s("负数标记")]),title3:e(({value:c,isActive:l})=>[s("压缩状态的负数标记")]),tab0:e(({value:c,isActive:l})=>[N]),tab1:e(({value:c,isActive:l})=>[C]),tab2:e(({value:c,isActive:l})=>[I]),tab3:e(({value:c,isActive:l})=>[L]),_:1}),V,m(" prettier-ignore "),n("table",null,[B,n("tbody",null,[n("tr",null,[T,R,n("td",F,[t(a,{to:"/problem/0041.html"},{default:e(()=>[s("[✓]")]),_:1})]),n("td",G,[t(a,{to:"/tag/array.html"},{default:e(()=>[M]),_:1}),s(),t(a,{to:"/tag/hash-table.html"},{default:e(()=>[S]),_:1})]),z,n("td",D,[n("a",H,[s("🀄️"),t(o)]),s(),n("a",J,[s("🔗"),t(o)])])]),n("tr",null,[K,P,n("td",Q,[t(a,{to:"/problem/0136.html"},{default:e(()=>[s("[✓]")]),_:1})]),n("td",U,[t(a,{to:"/tag/bit-manipulation.html"},{default:e(()=>[W]),_:1}),s(),t(a,{to:"/tag/array.html"},{default:e(()=>[X]),_:1})]),Y,n("td",Z,[n("a",$,[s("🀄️"),t(o)]),s(),n("a",nn,[s("🔗"),t(o)])])]),n("tr",null,[sn,tn,n("td",en,[t(a,{to:"/problem/0287.html"},{default:e(()=>[s("[✓]")]),_:1})]),n("td",an,[t(a,{to:"/tag/bit-manipulation.html"},{default:e(()=>[on]),_:1}),s(),t(a,{to:"/tag/array.html"},{default:e(()=>[cn]),_:1}),s(),t(a,{to:"/tag/two-pointers.html"},{default:e(()=>[ln]),_:1}),s(),rn]),pn,n("td",un,[n("a",dn,[s("🀄️"),t(o)]),s(),n("a",kn,[s("🔗"),t(o)])])]),n("tr",null,[mn,hn,_n,n("td",bn,[t(a,{to:"/tag/greedy.html"},{default:e(()=>[gn]),_:1}),s(),t(a,{to:"/tag/depth-first-search.html"},{default:e(()=>[fn]),_:1}),s(),t(a,{to:"/tag/breadth-first-search.html"},{default:e(()=>[vn]),_:1}),s(),yn]),xn,n("td",wn,[n("a",On,[s("🀄️"),t(o)]),s(),n("a",jn,[s("🔗"),t(o)])])]),n("tr",null,[An,En,qn,n("td",Nn,[t(a,{to:"/tag/array.html"},{default:e(()=>[Cn]),_:1}),s(),t(a,{to:"/tag/hash-table.html"},{default:e(()=>[In]),_:1}),s(),t(a,{to:"/tag/string.html"},{default:e(()=>[Ln]),_:1}),s(),Vn]),Bn,n("td",Tn,[n("a",Rn,[s("🀄️"),t(o)]),s(),n("a",Fn,[s("🔗"),t(o)])])])])])])}const Dn=u(_,[["render",Gn],["__file","0268.html.vue"]]);export{Dn as default};
