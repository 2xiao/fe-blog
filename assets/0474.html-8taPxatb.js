import{_ as r,r as c,o as k,c as d,a as n,b as s,d as t,w as a,f as m,e as h}from"./app-MXSjQbID.js";const b={},_=n("h1",{id:"_474-一和零",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_474-一和零","aria-hidden":"true"},"#"),s(" 474. 一和零")],-1),g=n("code",null,"数组",-1),f=n("code",null,"字符串",-1),y=n("code",null,"动态规划",-1),q={href:"https://leetcode.cn/problems/ones-and-zeroes",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"力扣",-1),w={href:"https://leetcode.com/problems/ones-and-zeroes",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),j=h('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given an array of binary strings <code>strs</code> and two integers <code>m</code> and <code>n</code>.</p><p>Return _the size of the largest subset of<code>strs</code> such that there are <strong>at most</strong> _<code>m</code> **<code>0</code> _&#39; s and _<code>n</code> **<code>1</code> <em>&#39; s in the subset</em>.</p><p>A set <code>x</code> is a <strong>subset</strong> of a set <code>y</code> if all elements of <code>x</code> are also elements of <code>y</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: strs = [&quot;10&quot;,&quot;0001&quot;,&quot;111001&quot;,&quot;1&quot;,&quot;0&quot;], m = 5, n = 3</p><p>Output: 4</p><p>Explanation: The largest subset with at most 5 0&#39;s and 3 1&#39;s is {&quot;10&quot;, &quot;0001&quot;, &quot;1&quot;, &quot;0&quot;}, so the answer is 4.</p><p>Other valid but smaller subsets include {&quot;0001&quot;, &quot;1&quot;} and {&quot;10&quot;, &quot;1&quot;, &quot;0&quot;}.</p><p>{&quot;111001&quot;} is an invalid subset because it contains 4 1&#39;s, greater than the maximum of 3.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: strs = [&quot;10&quot;,&quot;0&quot;,&quot;1&quot;], m = 1, n = 1</p><p>Output: 2</p><p>Explanation: The largest subset is {&quot;0&quot;, &quot;1&quot;}, so the answer is 2.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= strs.length &lt;= 600</code></li><li><code>1 &lt;= strs[i].length &lt;= 100</code></li><li><code>strs[i]</code> consists only of digits <code>&#39;0&#39;</code> and <code>&#39;1&#39;</code>.</li><li><code>1 &lt;= m, n &lt;= 100</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个二进制字符串数组 <code>strs</code> 和两个整数 <code>m</code> 和 <code>n</code> 。</p><p>请你找出并返回 <code>strs</code> 的最大子集的长度，该子集中 <strong>最多</strong> 有 <code>m</code> 个 <code>0</code> 和 <code>n</code> 个 <code>1</code> 。</p><p>如果 <code>x</code> 的所有元素也是 <code>y</code> 的元素，集合 <code>x</code> 是集合 <code>y</code> 的 子集 。</p><p><strong>示例 1：</strong></p><blockquote><p>输入：strs = [&quot;10&quot;, &quot;0001&quot;, &quot;111001&quot;, &quot;1&quot;, &quot;0&quot;], m = 5, n = 3</p><p>输出：4</p><p>解释：最多有 5 个 0 和 3 个 1 的最大子集是 {&quot;10&quot;,&quot;0001&quot;,&quot;1&quot;,&quot;0&quot;} ，因此答案是 4 。</p><p>其他满足题意但较小的子集包括 {&quot;0001&quot;,&quot;1&quot;} 和 {&quot;10&quot;,&quot;1&quot;,&quot;0&quot;} 。{&quot;111001&quot;} 不满足题意，因为它含 4 个 1 ，大于 n 的值 3 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p>输入：strs = [&quot;10&quot;, &quot;0&quot;, &quot;1&quot;], m = 1, n = 1</p><p>输出：2</p><p>解释：最大的子集是 {&quot;0&quot;, &quot;1&quot;} ，所以答案是 2 。</p></blockquote><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-动态规划" tabindex="-1"><a class="header-anchor" href="#思路一-动态规划" aria-hidden="true">#</a> 思路一：动态规划</h3><p>这个问题可以使用动态规划来解决，与 0-1 背包问题有一些相似之处。</p><p>可以定义一个三维动态规划数组 <code>dp</code>，其中 <code>dp[i][j][k]</code> 表示在前 <code>i</code> 个字符串中使用 <code>j</code> 个 &#39;0&#39; 和 <code>k</code> 个 &#39;1&#39; 的条件下，最大子集的长度。</p><p>动态规划的状态转移方程如下：</p><p><code>dp[i][j][k] = max(dp[i-1][j][k], dp[i-1][j-zeros][k-ones] + 1)</code></p><p>其中，<code>zeros</code> 表示第 <code>i</code> 个字符串中 &#39;0&#39; 的个数，<code>ones</code> 表示第 <code>i</code> 个字符串中 &#39;1&#39; 的个数。</p><p>接下来，遍历每个字符串，更新动态规划数组，最后返回 <code>dp[len][m][n]</code>，表示使用最多 <code>m</code> 个 &#39;0&#39; 和 <code>n</code> 个 &#39;1&#39; 条件下得到的最大字符串数目。</p><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(len * m * n)</code>，其中 <code>len</code> 是字符串数组的长度。</li><li><strong>空间复杂度</strong>：<code>O(len * m * n)</code>。</li></ul><hr><h3 id="思路二-压缩状态的动态规划" tabindex="-1"><a class="header-anchor" href="#思路二-压缩状态的动态规划" aria-hidden="true">#</a> 思路二：压缩状态的动态规划</h3><p>注意到 <code>dp[i][j][k]</code> 都是通过上一行 <code>dp[i-1][..][..]</code> 转移过来的，再之前所有行的数据都不会再使用了。所以，我们可以对动态规划进行状态压缩，将三维 <code>dp</code> 数组压缩为二维，节约空间复杂度：</p><ul><li><code>dp[j][k]</code> 表示在当前元素中，使用 <code>j</code> 个 &#39;0&#39; 和 <code>k</code> 个 &#39;1&#39; 的条件下，最大子集的长度；</li><li>遍历 <code>strs</code> 数组中的每个字符串 <code>str</code>，并更新 <code>dp</code> 数组。需要注意的是 <code>j</code> 和 <code>k</code> 应该从后往前反向遍历，确保了我们在更新当前状态时所依赖的状态已经被正确计算；</li><li>状态转移方程：<code>dp[j][k] = max(dp[j][k], dp[j - zeros][k - ones] + 1)</code>；</li><li>最终结果存储在 <code>dp[m][n]</code> 中；</li></ul><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(len * m * n)</code>，其中 <code>len</code> 是字符串数组的长度。</li><li><strong>空间复杂度</strong>：<code>O(m * n)</code>。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',35),z=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"strs"),s(`
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"m"),s(`
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"n"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"findMaxForm"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("strs"),n("span",{class:"token punctuation"},","),s(" m"),n("span",{class:"token punctuation"},","),s(" n")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"const"),s(" len "),n("span",{class:"token operator"},"="),s(" strs"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"const"),s(" dp "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"("),s("len "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(`
		`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fill"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(`
		`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"("),s("m "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fill"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"("),s("n "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fill"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

	`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<="),s(" len"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"const"),s(" zeros "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"..."),s("strs"),n("span",{class:"token punctuation"},"["),s("i "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"filter"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"i"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" i "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token string"},"'0'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token keyword"},"const"),s(" ones "),n("span",{class:"token operator"},"="),s(" strs"),n("span",{class:"token punctuation"},"["),s("i "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),s("length "),n("span",{class:"token operator"},"-"),s(" zeros"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" j "),n("span",{class:"token operator"},"="),s(" m"),n("span",{class:"token punctuation"},";"),s(" j "),n("span",{class:"token operator"},">="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" j"),n("span",{class:"token operator"},"--"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" k "),n("span",{class:"token operator"},"="),s(" n"),n("span",{class:"token punctuation"},";"),s(" k "),n("span",{class:"token operator"},">="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" k"),n("span",{class:"token operator"},"--"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("zeros "),n("span",{class:"token operator"},">"),s(" j "),n("span",{class:"token operator"},"||"),s(" ones "),n("span",{class:"token operator"},">"),s(" k"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
					dp`),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("k"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(" dp"),n("span",{class:"token punctuation"},"["),s("i "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("k"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
				`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
					dp`),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("k"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"max"),n("span",{class:"token punctuation"},"("),s(`
						dp`),n("span",{class:"token punctuation"},"["),s("i "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("k"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
						dp`),n("span",{class:"token punctuation"},"["),s("i "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("j "),n("span",{class:"token operator"},"-"),s(" zeros"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("k "),n("span",{class:"token operator"},"-"),s(" ones"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),s(`
					`),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
				`),n("span",{class:"token punctuation"},"}"),s(`
			`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"return"),s(" dp"),n("span",{class:"token punctuation"},"["),s("len"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("m"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("n"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),A=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"strs"),s(`
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"m"),s(`
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"n"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"findMaxForm"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("strs"),n("span",{class:"token punctuation"},","),s(" m"),n("span",{class:"token punctuation"},","),s(" n")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"const"),s(" len "),n("span",{class:"token operator"},"="),s(" strs"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"const"),s(" dp "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"("),s("m "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fill"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"("),s("n "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fill"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" str "),n("span",{class:"token keyword"},"of"),s(" strs"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"const"),s(" zeros "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"..."),s("str"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"filter"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"i"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" i "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token string"},"'0'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token keyword"},"const"),s(" ones "),n("span",{class:"token operator"},"="),s(" str"),n("span",{class:"token punctuation"},"."),s("length "),n("span",{class:"token operator"},"-"),s(" zeros"),n("span",{class:"token punctuation"},";"),s(`

		`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" j "),n("span",{class:"token operator"},"="),s(" m"),n("span",{class:"token punctuation"},";"),s(" j "),n("span",{class:"token operator"},">="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" j"),n("span",{class:"token operator"},"--"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" k "),n("span",{class:"token operator"},"="),s(" n"),n("span",{class:"token punctuation"},";"),s(" k "),n("span",{class:"token operator"},">="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" k"),n("span",{class:"token operator"},"--"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("j "),n("span",{class:"token operator"},">="),s(" zeros "),n("span",{class:"token operator"},"&&"),s(" k "),n("span",{class:"token operator"},">="),s(" ones"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
					dp`),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("k"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"max"),n("span",{class:"token punctuation"},"("),s("dp"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("k"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(" dp"),n("span",{class:"token punctuation"},"["),s("j "),n("span",{class:"token operator"},"-"),s(" zeros"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("k "),n("span",{class:"token operator"},"-"),s(" ones"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
				`),n("span",{class:"token punctuation"},"}"),s(`
			`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"return"),s(" dp"),n("span",{class:"token punctuation"},"["),s("m"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("n"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),C=n("h2",{id:"相关题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),s(" 相关题目")],-1),E=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),O=n("td",{style:{"text-align":"center"}},"600",-1),L=n("td",{style:{"text-align":"left"}},"不含连续1的非负整数",-1),M=n("td",{style:{"text-align":"center"}},null,-1),N={style:{"text-align":"left"}},T=n("code",null,"动态规划",-1),V=n("td",{style:{"text-align":"center"}},"🔴",-1),I={style:{"text-align":"center"}},B={href:"https://leetcode.cn/problems/non-negative-integers-without-consecutive-ones",target:"_blank",rel:"noopener noreferrer"},R={href:"https://leetcode.com/problems/non-negative-integers-without-consecutive-ones",target:"_blank",rel:"noopener noreferrer"},F=n("td",{style:{"text-align":"center"}},"2031",-1),S=n("td",{style:{"text-align":"left"}},"1 比 0 多的子数组个数 🔒",-1),Y=n("td",{style:{"text-align":"center"}},null,-1),D={style:{"text-align":"left"}},G=n("code",null,"树状数组",-1),H=n("code",null,"线段树",-1),J=n("code",null,"数组",-1),K=n("code",null,"4+",-1),P=n("td",{style:{"text-align":"center"}},"🟠",-1),Q={style:{"text-align":"center"}},U={href:"https://leetcode.cn/problems/count-subarrays-with-more-ones-than-zeros",target:"_blank",rel:"noopener noreferrer"},W={href:"https://leetcode.com/problems/count-subarrays-with-more-ones-than-zeros",target:"_blank",rel:"noopener noreferrer"},X=n("td",{style:{"text-align":"center"}},"2155",-1),Z=n("td",{style:{"text-align":"left"}},"分组得分最高的所有下标",-1),$=n("td",{style:{"text-align":"center"}},null,-1),nn={style:{"text-align":"left"}},sn=n("code",null,"数组",-1),tn=n("td",{style:{"text-align":"center"}},"🟠",-1),an={style:{"text-align":"center"}},en={href:"https://leetcode.cn/problems/all-divisions-with-the-highest-score-of-a-binary-array",target:"_blank",rel:"noopener noreferrer"},on={href:"https://leetcode.com/problems/all-divisions-with-the-highest-score-of-a-binary-array",target:"_blank",rel:"noopener noreferrer"};function cn(pn,ln){const u=c("font"),e=c("RouterLink"),o=c("ExternalLinkIcon"),i=c("CodeTabs");return k(),d("div",null,[_,n("p",null,[s("🟠 "),t(u,{color:"#ffb800"},{default:a(()=>[s("Medium")]),_:1}),s("  🔖  "),t(e,{to:"/tag/array.html"},{default:a(()=>[g]),_:1}),s(),t(e,{to:"/tag/string.html"},{default:a(()=>[f]),_:1}),s(),t(e,{to:"/tag/dynamic-programming.html"},{default:a(()=>[y]),_:1}),s("  🔗 "),n("a",q,[v,t(o)]),s(),n("a",w,[x,t(o)])]),j,t(i,{id:"206",data:[{id:"动态规划"},{id:"压缩状态的动态规划"}]},{title0:a(({value:p,isActive:l})=>[s("动态规划")]),title1:a(({value:p,isActive:l})=>[s("压缩状态的动态规划")]),tab0:a(({value:p,isActive:l})=>[z]),tab1:a(({value:p,isActive:l})=>[A]),_:1}),C,m(" prettier-ignore "),n("table",null,[E,n("tbody",null,[n("tr",null,[O,L,M,n("td",N,[t(e,{to:"/tag/dynamic-programming.html"},{default:a(()=>[T]),_:1})]),V,n("td",I,[n("a",B,[s("🀄️"),t(o)]),s(),n("a",R,[s("🔗"),t(o)])])]),n("tr",null,[F,S,Y,n("td",D,[t(e,{to:"/tag/binary-indexed-tree.html"},{default:a(()=>[G]),_:1}),s(),t(e,{to:"/tag/segment-tree.html"},{default:a(()=>[H]),_:1}),s(),t(e,{to:"/tag/array.html"},{default:a(()=>[J]),_:1}),s(),K]),P,n("td",Q,[n("a",U,[s("🀄️"),t(o)]),s(),n("a",W,[s("🔗"),t(o)])])]),n("tr",null,[X,Z,$,n("td",nn,[t(e,{to:"/tag/array.html"},{default:a(()=>[sn]),_:1})]),tn,n("td",an,[n("a",en,[s("🀄️"),t(o)]),s(),n("a",on,[s("🔗"),t(o)])])])])])])}const rn=r(b,[["render",cn],["__file","0474.html.vue"]]);export{rn as default};
