import{_ as k,r as p,o as d,c as m,a as n,b as s,d as t,w as a,e as l}from"./app-r0ql_Osa.js";const b={},v=n("h1",{id:"_102-加减的目标值",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_102-加减的目标值","aria-hidden":"true"},"#"),s(" 102. 加减的目标值")],-1),h=n("code",null,"数组",-1),g=n("code",null,"动态规划",-1),f=n("code",null,"回溯",-1),y={href:"https://leetcode.cn/problems/YaVDxD",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"力扣",-1),w=l('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>给定一个正整数数组 <code>nums</code> 和一个整数 <code>target</code> 。</p><p>向数组中的每个整数前添加 <code>&#39;+&#39;</code> 或 <code>&#39;-&#39;</code> ，然后串联起所有整数，可以构造一个 <strong>表达式</strong> ：</p><ul><li>例如，<code>nums = [2, 1]</code> ，可以在 <code>2</code> 之前添加 <code>&#39;+&#39;</code> ，在 <code>1</code> 之前添加 <code>&#39;-&#39;</code> ，然后串联起来得到表达式 <code>&quot;+2-1&quot;</code> 。</li></ul><p>返回可以通过上述方法构造的、运算结果等于 <code>target</code> 的不同 <strong>表达式</strong> 的数目。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> nums = [1,1,1,1,1], target = 3</p><p><strong>输出：</strong> 5</p><p><strong>解释：</strong> 一共有 5 种方法让最终目标和为 3 。</p><p>-1 + 1 + 1 + 1 + 1 = 3</p><p>+1 - 1 + 1 + 1 + 1 = 3</p><p>+1 + 1 - 1 + 1 + 1 = 3</p><p>+1 + 1 + 1 - 1 + 1 = 3</p><p>+1 + 1 + 1 + 1 - 1 = 3</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> nums = [1], target = 1</p><p><strong>输出：</strong> 1</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 20</code></li><li><code>1 &lt;= nums[i] &lt;= 1000</code></li><li><code>0 &lt;= sum(nums[i]) &lt;= 1000</code></li><li><code>-1000 &lt;= target &lt;= 1000</code></li></ul>',11),j={class:"hint-container warning"},x=n("p",{class:"hint-container-title"},"注意",-1),A=l('<h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个非负整数数组 <code>nums</code> 和一个整数 <code>target</code> 。</p><p>向数组中的每个整数前添加 <code>&#39;+&#39;</code> 或 <code>&#39;-&#39;</code> ，然后串联起所有整数，可以构造一个 <strong>表达式</strong> ：</p><ul><li>例如，<code>nums = [2, 1]</code> ，可以在 <code>2</code> 之前添加 <code>&#39;+&#39;</code> ，在 <code>1</code> 之前添加 <code>&#39;-&#39;</code> ，然后串联起来得到表达式 <code>&quot;+2-1&quot;</code> 。</li></ul><p>返回可以通过上述方法构造的、运算结果等于 <code>target</code> 的不同 <strong>表达式</strong> 的数目。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-回溯" tabindex="-1"><a class="header-anchor" href="#思路一-回溯" aria-hidden="true">#</a> 思路一：回溯</h3>',7),q=l(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">backtrack</span><span class="token punctuation">(</span><span class="token parameter">路径<span class="token punctuation">,</span> 选择列表</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>满足结束条件<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		result<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>路径<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span>选择 <span class="token keyword">in</span> 选择列表<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		做选择<span class="token punctuation">;</span>
		<span class="token function">backtrack</span><span class="token punctuation">(</span>路径<span class="token punctuation">,</span> 选择列表<span class="token punctuation">)</span><span class="token punctuation">;</span>
		撤销选择<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>根据模版框架，可以使用回溯算法，尝试每一种可能的组合；</li><li>递归函数 <code>backtrack</code> 中，对于当前数字，分别考虑添加正负号，然后递归到下一层；</li><li>如果遍历完所有数字后，目标值为 0，则说明找到一种组合；</li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(2^n)</code>，其中 <code>n</code> 是数组 <code>nums</code> 的长度，每个数字都有两种选择，加或者减。重复计算较多，非常低效。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，递归栈的深度。</li></ul><hr><h3 id="思路二-动态规划-递归" tabindex="-1"><a class="header-anchor" href="#思路二-动态规划-递归" aria-hidden="true">#</a> 思路二：动态规划 - 递归</h3><p>动态规划之所以比暴力算法快，是因为动态规划技巧消除了重叠子问题。使用动态规划和递归结合的思路，使用哈希表 <code>dp</code> 存储中间结果，可以避免重复计算。</p><p>递归函数 <code>helper</code> 中，对于每个数字，分别考虑添加正负号，然后递归到下一层。</p><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n * target)</code>，其中 <code>n</code> 是数组 <code>nums</code> 的长度，每个数字都有两种选择，加或者减。</li><li><strong>空间复杂度</strong>：<code>O(n * target)</code>，存储中间结果的哈希表。</li></ul><hr><h3 id="思路三-动态规划-背包" tabindex="-1"><a class="header-anchor" href="#思路三-动态规划-背包" aria-hidden="true">#</a> 思路三：动态规划 - 背包</h3><p>这个问题还可以转化为一个子集划分问题，而子集划分问题又是一个典型的背包问题。</p><p>首先，如果把 <code>nums</code> 划分成两个子集 <code>A</code> 和 <code>B</code>，分别代表分配 <code>+</code> 的数和分配 <code>-</code> 的数，那么他们和 <code>target</code> 存在如下关系：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sum(A) - sum(B) = target
sum(A) = target + sum(B)
sum(A) + sum(A) = target + sum(B) + sum(A)
2 * sum(A) = target + sum(nums)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>综上，可以推出 <code>sum(A) = (target + sum(nums)) / 2</code>，也就把原问题转化成了一个典型的背包问题：<code>nums</code> 中存在几个子集 <code>A</code>，使得 <strong>A</strong> 中元素的和为 <code>(target + sum(nums)) / 2</code>？</p><ul><li>使用动态规划数组 <code>dp[i][j]</code> 表示在前 <code>i</code> 个物品中选择，容量为 <code>j</code> 的背包有多少种装法。</li><li>根据状态转移方程 <code>dp[i][j] = dp[i-1][j] + dp[i-1][j-nums[i-1]]</code>，实现动态规划。</li><li>又由于 <code>dp[i][j]</code> 只和 <code>dp[i - 1][...]</code> 有关，所以可以对动态规划数组进行状态压缩，仅使用一位数组储存当前行的计算结果，唯一注意的是，<code>j</code> 需要从后往前遍历。 <ul><li>因为二维压缩到一维的根本原理是，<code>dp[j]</code> 和 <code>dp[j-nums[i-1]]</code> 还没被新结果覆盖的时候，相当于二维 <code>dp</code> 中的 <code>dp[i-1][j]</code> 和 <code>dp[i-1][j-nums[i-1]]</code>。</li><li>那么就要做到：在计算新的 <code>dp[j]</code> 的时候，<code>dp[j]</code> 和 <code>dp[j-nums[i-1]]</code> 还是上一轮外层 <code>for</code> 循环的结果。</li><li>如果你从前往后遍历一维 <code>dp</code> 数组，<code>dp[j]</code> 显然是没问题的，但是 <code>dp[j-nums[i-1]]</code> 已经不是上一轮外层 <code>for</code> 循环的结果了，这里就会使用错误的状态，当然得不到正确的答案。</li></ul></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>`,18),B=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"nums"),s(`
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"target"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"findTargetSumWays"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("nums"),n("span",{class:"token punctuation"},","),s(" target")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" res "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("nums"),n("span",{class:"token punctuation"},"."),s("length "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(" res"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"backtrack"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("i"),n("span",{class:"token punctuation"},","),s(" rest")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token comment"},"// base case"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("i "),n("span",{class:"token operator"},"=="),s(" nums"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token comment"},"// 说明恰好凑出 target"),s(`
			`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("rest "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
				res`),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},";"),s(`
			`),n("span",{class:"token punctuation"},"}"),s(`
			`),n("span",{class:"token keyword"},"return"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`

		`),n("span",{class:"token comment"},"// 给 nums[i] 选择 - 号"),s(`
		rest `),n("span",{class:"token operator"},"-="),s(" nums"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token function"},"backtrack"),n("span",{class:"token punctuation"},"("),s("i "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(" rest"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
		rest `),n("span",{class:"token operator"},"+="),s(" nums"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`

		`),n("span",{class:"token comment"},"// 给 nums[i] 选择 + 号"),s(`
		rest `),n("span",{class:"token operator"},"+="),s(" nums"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token function"},"backtrack"),n("span",{class:"token punctuation"},"("),s("i "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(" rest"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
		rest `),n("span",{class:"token operator"},"-="),s(" nums"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

	`),n("span",{class:"token function"},"backtrack"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(" target"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"return"),s(" res"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),I=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"nums"),s(`
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"target"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"findTargetSumWays"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("nums"),n("span",{class:"token punctuation"},","),s(" target")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("nums"),n("span",{class:"token punctuation"},"."),s("length "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"const"),s(" dp "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"helper"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("i"),n("span",{class:"token punctuation"},","),s(" rest")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token comment"},"// base case"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("i "),n("span",{class:"token operator"},"=="),s(" nums"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("rest "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
			`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`

		`),n("span",{class:"token comment"},"// 转成字符串作为哈希表的键"),s(`
		`),n("span",{class:"token keyword"},"const"),s(" key "),n("span",{class:"token operator"},"="),s(" i "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token string"},"'_'"),s(),n("span",{class:"token operator"},"+"),s(" rest"),n("span",{class:"token punctuation"},";"),s(`

		`),n("span",{class:"token comment"},"// 避免重复计算"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("dp"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"has"),n("span",{class:"token punctuation"},"("),s("key"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token comment"},"// 记入哈希表"),s(`
			dp`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"set"),n("span",{class:"token punctuation"},"("),s(`
				key`),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token function"},"helper"),n("span",{class:"token punctuation"},"("),s("i "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(" rest "),n("span",{class:"token operator"},"-"),s(" nums"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token function"},"helper"),n("span",{class:"token punctuation"},"("),s("i "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(" rest "),n("span",{class:"token operator"},"+"),s(" nums"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// 还是穷举"),s(`
			`),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token keyword"},"return"),s(" dp"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"get"),n("span",{class:"token punctuation"},"("),s("key"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token function"},"helper"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(" target"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),T=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"nums"),s(`
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"target"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"findTargetSumWays"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("nums"),n("span",{class:"token punctuation"},","),s(" target")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"const"),s(" sum "),n("span",{class:"token operator"},"="),s(" nums"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"reduce"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("num"),n("span",{class:"token punctuation"},","),s(" acc")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" num "),n("span",{class:"token operator"},"+"),s(" acc"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("sum "),n("span",{class:"token operator"},"<"),s(" target "),n("span",{class:"token operator"},"||"),s(),n("span",{class:"token operator"},"-"),s("sum "),n("span",{class:"token operator"},">"),s(" target "),n("span",{class:"token operator"},"||"),s(),n("span",{class:"token punctuation"},"("),s("sum "),n("span",{class:"token operator"},"+"),s(" target"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"%"),s(),n("span",{class:"token number"},"2"),s(),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`

	`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"subset"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("nums"),n("span",{class:"token punctuation"},","),s(" sum")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"const"),s(" dp "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"("),s("sum "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fill"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
		dp`),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" num "),n("span",{class:"token keyword"},"of"),s(" nums"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" j "),n("span",{class:"token operator"},"="),s(" sum"),n("span",{class:"token punctuation"},";"),s(" j "),n("span",{class:"token operator"},">="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" j"),n("span",{class:"token operator"},"--"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("j "),n("span",{class:"token operator"},">="),s(" num"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
					dp`),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(" dp"),n("span",{class:"token punctuation"},"["),s("j "),n("span",{class:"token operator"},"-"),s(" num"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"+"),s(" dp"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
				`),n("span",{class:"token punctuation"},"}"),s(`
			`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token keyword"},"return"),s(" dp"),n("span",{class:"token punctuation"},"["),s("sum"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token function"},"subset"),n("span",{class:"token punctuation"},"("),s("nums"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),s("sum "),n("span",{class:"token operator"},"+"),s(" target"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"/"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function C(L,V){const u=p("font"),e=p("RouterLink"),i=p("ExternalLinkIcon"),r=p("CodeTabs");return d(),m("div",null,[v,n("p",null,[s("🟠 "),t(u,{color:"#ffb800"},{default:a(()=>[s("Medium")]),_:1}),s("  🔖  "),t(e,{to:"/tag/array.html"},{default:a(()=>[h]),_:1}),s(),t(e,{to:"/tag/dynamic-programming.html"},{default:a(()=>[g]),_:1}),s(),t(e,{to:"/tag/backtracking.html"},{default:a(()=>[f]),_:1}),s("  🔗 "),n("a",y,[_,t(i)])]),w,n("div",j,[x,n("p",null,[s("本题与 LeetCode "),t(e,{to:"/problem/0494.html"},{default:a(()=>[s("第 494 题")]),_:1}),s(" 相同。")])]),A,n("p",null,[s("任何算法的核心都是穷举，回溯算法就是一个暴力穷举算法，在 "),t(e,{to:"/book/backtracking.html"},{default:a(()=>[s("《3.4 回溯算法》")]),_:1}),s(" 中讲了回溯算法框架：")]),q,t(r,{id:"232",data:[{id:"回溯"},{id:"动态规划 - 递归"},{id:"动态规划 - 背包"}]},{title0:a(({value:o,isActive:c})=>[s("回溯")]),title1:a(({value:o,isActive:c})=>[s("动态规划 - 递归")]),title2:a(({value:o,isActive:c})=>[s("动态规划 - 背包")]),tab0:a(({value:o,isActive:c})=>[B]),tab1:a(({value:o,isActive:c})=>[I]),tab2:a(({value:o,isActive:c})=>[T]),_:1})])}const O=k(b,[["render",C],["__file","jz_offer_II_102.html.vue"]]);export{O as default};
