import{_ as r,r as c,o as d,c as k,a as n,b as t,d as s,w as e,f as m,e as h}from"./app-5LzGvT4H.js";const b={},_=n("h1",{id:"_1143-最长公共子序列",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1143-最长公共子序列","aria-hidden":"true"},"#"),t(" 1143. 最长公共子序列")],-1),g=n("code",null,"字符串",-1),f=n("code",null,"动态规划",-1),x={href:"https://leetcode.cn/problems/longest-common-subsequence",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/longest-common-subsequence",target:"_blank",rel:"noopener noreferrer"},q=n("code",null,"LeetCode",-1),w=h('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given two strings <code>text1</code> and <code>text2</code>, return <em>the length of their longest <strong>common subsequence</strong>.</em> If there is no <strong>common subsequence</strong> , return <code>0</code>.</p><p>A <strong>subsequence</strong> of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.</p><ul><li>For example, <code>&quot;ace&quot;</code> is a subsequence of <code>&quot;abcde&quot;</code>.</li></ul><p>A <strong>common subsequence</strong> of two strings is a subsequence that is common to both strings.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: text1 = &quot;abcde&quot;, text2 = &quot;ace&quot;</p><p>Output: 3</p><p>Explanation: The longest common subsequence is &quot;ace&quot; and its length is 3.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: text1 = &quot;abc&quot;, text2 = &quot;abc&quot;</p><p>Output: 3</p><p>Explanation: The longest common subsequence is &quot;abc&quot; and its length is 3.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: text1 = &quot;abc&quot;, text2 = &quot;def&quot;</p><p>Output: 0</p><p>Explanation: There is no such common subsequence, so the result is 0.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= text1.length, text2.length &lt;= 1000</code></li><li><code>text1</code> and <code>text2</code> consist of only lowercase English characters.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定两个字符串 <code>text1</code> 和 <code>text2</code>，返回这两个字符串的最长 <strong>公共子序列</strong> 的长度。如果不存在 <strong>公共子序列</strong> ，返回 <code>0</code> 。</p><p>一个字符串的 <strong>子序列</strong> 是指这样一个新的字符串：它是由原字符串在不改变字符的相对顺序的情况下删除某些字符（也可以不删除任何字符）后组成的新字符串。</p><ul><li>例如，<code>&quot;ace&quot;</code> 是 <code>&quot;abcde&quot;</code> 的子序列，但 <code>&quot;aec&quot;</code> 不是 <code>&quot;abcde&quot;</code> 的子序列。</li></ul><p>两个字符串的 <strong>公共子序列</strong> 是这两个字符串所共同拥有的子序列。</p><p><code>text1</code> 和 <code>text2</code> 仅由小写英文字符组成。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-动态规划-递归" tabindex="-1"><a class="header-anchor" href="#思路一-动态规划-递归" aria-hidden="true">#</a> 思路一：动态规划-递归</h3><p>使用递归来解题的思路如下：</p><ul><li><p>定义一个递归函数 <code>helper(i, j)</code> ，<code>i</code> 和 <code>j</code> 代表两个字符串的下标，函数返回最长公共子序列的长度；</p></li><li><p>base case 是当 <code>i</code> 或 <code>j</code> 等于 <code>-1</code>，即其中一个字符串为空，最长公共子序列的长度为 <code>0</code> ;</p></li><li><p>用一个数组 <code>dp</code> 记录子问题的结果，避免重复计算；</p></li><li><p>如果 <code>dp[i][j]</code> 已经存在，则直接返回，否则就递归计算：</p><ul><li>若 <code>s1[i] == s2[j]</code>，说明当前字符相同，最长公共子序列的长度可以在之前的基础上加 <code>1</code>：<code>dp[i][j] = 1 + helper(i - 1, j - 1)</code>；</li><li>否则说明当前字符不同，最长公共子序列的长度为两个字符串中分别去掉当前字符后的最大值：<code>dp[i][j] = Math.max(helper(i, j - 1), helper(i - 1, j))</code>； <ul><li><code>dp[i-1][j]</code> 表示舍弃字符 <code>s1[i]</code> ；</li><li><code>dp[i][j-1]</code> 表示舍弃字符 <code>s2[j]</code>；</li><li>谁能让最长公共子序列最长，就选择谁；</li></ul></li></ul></li><li><p>最后调用递归函数即可。</p></li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(m * n)</code>，其中 <code>m</code> 是 <code>text1</code> 的长度，<code>n</code> 是 <code>text2</code> 的长度。在最坏情况下，函数 <code>helper</code> 可能会被调用 <code>m * n</code> 次</p></li><li><p><strong>空间复杂度</strong>：<code>O(m * n)</code>，使用了一个二维动态规划数组，动态规划数组的大小为 <code>(m+1) * (n+1)</code>；在最坏情况下，递归栈的深度可能达到 <code>m + n</code>（最坏情况下，递归每次只向左或下移动），栈的空间相对于 <code>dp</code> 的空间是可以忽略的。</p></li></ul><hr><h3 id="思路二-动态规划-dp-table" tabindex="-1"><a class="header-anchor" href="#思路二-动态规划-dp-table" aria-hidden="true">#</a> 思路二：动态规划-DP table</h3><p>定义一个二维数组 <code>dp</code> , 其中 <code>dp[i][j]</code> 表示 <code>text1[0...i-1]</code> 和 <code>text2[0...j-1]</code> 的最长公共子序列的长度。</p><p><code>dp[..][0]</code> 和 <code>dp[0][..]</code> 对应 base case，即任何一个字符串为空时，最长公共子序列长度为 <code>0</code>。</p><p>状态转移方程如下：</p><ul><li>当 <code>s1[i-1] === s2[j-1]</code>，那么这个字符一定在最长公共子序列中：<code>dp[i][j] = 1 + dp[i-1][j-1]</code></li><li>否则，这两个字符至少有一个不在最长公共子序列中，需要丢弃一个。取二者的最大值：<code>dp[i][j] = max(dp[i-1][j], dp[i][j-1])</code></li></ul><p>其中，<code>dp[i-1][j]</code> 表示舍弃字符 <code>s1[i]</code> ，<code>dp[i][j-1]</code> 表示舍弃字符 <code>s2[j]</code>，谁能让最长公共子序列最长，就选择谁。</p><p>DP table 和递归的思路大致相同，唯一不同的是，DP table 是自底向上求解，递归解法是自顶向下求解。递归函数的 base case 是 <code>i</code>, <code>j</code> 等于 <code>-1</code>，而 DP table 的数组索引至少是 <code>0</code>，所以 DP table 数组会偏移一位。</p><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(m * n)</code>，其中 <code>m</code> 是 <code>text1</code> 的长度，<code>n</code> 是 <code>text2</code> 的长度。</p></li><li><p><strong>空间复杂度</strong>：<code>O(m * n)</code>，使用了一个二维动态规划数组，动态规划数组的大小为 <code>(m+1) * (n+1)</code>。</p></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',36),j=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[t(`/**
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("string"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"text1"),t(`
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("string"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"text2"),t(`
 * `),n("span",{class:"token keyword"},"@return"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"}")]),t(`
 */`)]),t(`
`),n("span",{class:"token keyword"},"var"),t(),n("span",{class:"token function-variable function"},"longestCommonSubsequence"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("text1"),n("span",{class:"token punctuation"},","),t(" text2")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token keyword"},"const"),t(" m "),n("span",{class:"token operator"},"="),t(" text1"),n("span",{class:"token punctuation"},"."),t("length"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"const"),t(" n "),n("span",{class:"token operator"},"="),t(" text2"),n("span",{class:"token punctuation"},"."),t("length"),n("span",{class:"token punctuation"},";"),t(`

	`),n("span",{class:"token comment"},"// 记录子问题的计算结果，避免重复计算"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" dp "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"("),t("m"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fill"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"i"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"("),t("n"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fill"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

	`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"helper"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("i"),n("span",{class:"token punctuation"},","),t(" j")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token comment"},"// 递归的终止条件"),t(`
		`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("i "),n("span",{class:"token operator"},"=="),t(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),t(),n("span",{class:"token operator"},"||"),t(" j "),n("span",{class:"token operator"},"=="),t(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(`

		`),n("span",{class:"token comment"},"// 避免重复计算子问题"),t(`
		`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("dp"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),t("j"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"!="),t(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token keyword"},"return"),t(" dp"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),t("j"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`

		`),n("span",{class:"token comment"},"// 状态转移"),t(`
		`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("text1"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"charAt"),n("span",{class:"token punctuation"},"("),t("i"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=="),t(" text2"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"charAt"),n("span",{class:"token punctuation"},"("),t("j"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			dp`),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),t("j"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"1"),t(),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token function"},"helper"),n("span",{class:"token punctuation"},"("),t("i "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),t(" j "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"else"),t(),n("span",{class:"token punctuation"},"{"),t(`
			dp`),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),t("j"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"max"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"helper"),n("span",{class:"token punctuation"},"("),t("i"),n("span",{class:"token punctuation"},","),t(" j "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token function"},"helper"),n("span",{class:"token punctuation"},"("),t("i "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),t(" j"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`

		`),n("span",{class:"token keyword"},"return"),t(" dp"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),t("j"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

	`),n("span",{class:"token comment"},"// 调用递归函数"),t(`
	`),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token function"},"helper"),n("span",{class:"token punctuation"},"("),t("m "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),t(" n "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),A=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[t(`/**
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("string"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"text1"),t(`
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("string"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"text2"),t(`
 * `),n("span",{class:"token keyword"},"@return"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"}")]),t(`
 */`)]),t(`
`),n("span",{class:"token keyword"},"var"),t(),n("span",{class:"token function-variable function"},"longestCommonSubsequence"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("text1"),n("span",{class:"token punctuation"},","),t(" text2")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token keyword"},"const"),t(" m "),n("span",{class:"token operator"},"="),t(" text1"),n("span",{class:"token punctuation"},"."),t("length"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"const"),t(" n "),n("span",{class:"token operator"},"="),t(" text2"),n("span",{class:"token punctuation"},"."),t("length"),n("span",{class:"token punctuation"},";"),t(`

	`),n("span",{class:"token comment"},"// 初始化动态规划数组，多一行一列用于处理空字符串的情况"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" dp "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"("),t("m "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fill"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"i"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"("),t("n "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fill"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

	`),n("span",{class:"token comment"},"// 动态规划，计算最长公共子序列的长度"),t(`
	`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" i "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),t(" i "),n("span",{class:"token operator"},"<="),t(" m"),n("span",{class:"token punctuation"},";"),t(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" j "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),t(" j "),n("span",{class:"token operator"},"<="),t(" n"),n("span",{class:"token punctuation"},";"),t(" j"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("text1"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"charAt"),n("span",{class:"token punctuation"},"("),t("i "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=="),t(" text2"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"charAt"),n("span",{class:"token punctuation"},"("),t("j "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
				dp`),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),t("j"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"1"),t(),n("span",{class:"token operator"},"+"),t(" dp"),n("span",{class:"token punctuation"},"["),t("i "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),t("j "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
			`),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"else"),t(),n("span",{class:"token punctuation"},"{"),t(`
				dp`),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),t("j"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"max"),n("span",{class:"token punctuation"},"("),t("dp"),n("span",{class:"token punctuation"},"["),t("i "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),t("j"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(" dp"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),t("j "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
			`),n("span",{class:"token punctuation"},"}"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token keyword"},"return"),t(" dp"),n("span",{class:"token punctuation"},"["),t("m"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),t("n"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),E=n("h2",{id:"相关题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),t(" 相关题目")],-1),C=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),D=n("td",{style:{"text-align":"center"}},"516",-1),O=n("td",{style:{"text-align":"left"}},"最长回文子序列",-1),P={style:{"text-align":"center"}},I={style:{"text-align":"left"}},T=n("code",null,"字符串",-1),L=n("code",null,"动态规划",-1),N=n("td",{style:{"text-align":"left"}},"🟠",-1),V={style:{"text-align":"center"}},M={href:"https://leetcode.cn/problems/longest-palindromic-subsequence",target:"_blank",rel:"noopener noreferrer"},B={href:"https://leetcode.com/problems/longest-palindromic-subsequence",target:"_blank",rel:"noopener noreferrer"},S=n("td",{style:{"text-align":"center"}},"583",-1),z=n("td",{style:{"text-align":"left"}},"两个字符串的删除操作",-1),R={style:{"text-align":"center"}},F={style:{"text-align":"left"}},G=n("code",null,"字符串",-1),H=n("code",null,"动态规划",-1),J=n("td",{style:{"text-align":"left"}},"🟠",-1),K={style:{"text-align":"center"}},Q={href:"https://leetcode.cn/problems/delete-operation-for-two-strings",target:"_blank",rel:"noopener noreferrer"},U={href:"https://leetcode.com/problems/delete-operation-for-two-strings",target:"_blank",rel:"noopener noreferrer"},W=n("td",{style:{"text-align":"center"}},"1092",-1),X=n("td",{style:{"text-align":"left"}},"最短公共超序列",-1),Y=n("td",{style:{"text-align":"center"}},null,-1),Z={style:{"text-align":"left"}},$=n("code",null,"字符串",-1),nn=n("code",null,"动态规划",-1),tn=n("td",{style:{"text-align":"left"}},"🔴",-1),sn={style:{"text-align":"center"}},en={href:"https://leetcode.cn/problems/shortest-common-supersequence",target:"_blank",rel:"noopener noreferrer"},an={href:"https://leetcode.com/problems/shortest-common-supersequence",target:"_blank",rel:"noopener noreferrer"},on=n("td",{style:{"text-align":"center"}},"2207",-1),cn=n("td",{style:{"text-align":"left"}},"字符串中最多数目的子序列",-1),ln=n("td",{style:{"text-align":"center"}},null,-1),pn={style:{"text-align":"left"}},un=n("code",null,"贪心",-1),rn=n("code",null,"字符串",-1),dn=n("code",null,"前缀和",-1),kn=n("td",{style:{"text-align":"left"}},"🟠",-1),mn={style:{"text-align":"center"}},hn={href:"https://leetcode.cn/problems/maximize-number-of-subsequences-in-a-string",target:"_blank",rel:"noopener noreferrer"},bn={href:"https://leetcode.com/problems/maximize-number-of-subsequences-in-a-string",target:"_blank",rel:"noopener noreferrer"},_n=n("td",{style:{"text-align":"center"}},"2565",-1),gn=n("td",{style:{"text-align":"left"}},"最少得分子序列",-1),fn=n("td",{style:{"text-align":"center"}},null,-1),xn={style:{"text-align":"left"}},yn=n("code",null,"双指针",-1),vn=n("code",null,"字符串",-1),qn=n("code",null,"二分查找",-1),wn=n("td",{style:{"text-align":"left"}},"🔴",-1),jn={style:{"text-align":"center"}},An={href:"https://leetcode.cn/problems/subsequence-with-the-minimum-score",target:"_blank",rel:"noopener noreferrer"},En={href:"https://leetcode.com/problems/subsequence-with-the-minimum-score",target:"_blank",rel:"noopener noreferrer"};function Cn(Dn,On){const i=c("font"),a=c("RouterLink"),o=c("ExternalLinkIcon"),u=c("CodeTabs");return d(),k("div",null,[_,n("p",null,[t("🟠 "),s(i,{color:"#ffb800"},{default:e(()=>[t("Medium")]),_:1}),t("  🔖  "),s(a,{to:"/tag/string.html"},{default:e(()=>[g]),_:1}),t(),s(a,{to:"/tag/dynamic-programming.html"},{default:e(()=>[f]),_:1}),t("  🔗 "),n("a",x,[y,s(o)]),t(),n("a",v,[q,s(o)])]),w,s(u,{id:"233",data:[{id:"动态规划-递归"},{id:"动态规划-DP table"}]},{title0:e(({value:l,isActive:p})=>[t("动态规划-递归")]),title1:e(({value:l,isActive:p})=>[t("动态规划-DP table")]),tab0:e(({value:l,isActive:p})=>[j]),tab1:e(({value:l,isActive:p})=>[A]),_:1}),E,m(" prettier-ignore "),n("table",null,[C,n("tbody",null,[n("tr",null,[D,O,n("td",P,[s(a,{to:"/problem/0516.html"},{default:e(()=>[t("[✓]")]),_:1})]),n("td",I,[s(a,{to:"/tag/string.html"},{default:e(()=>[T]),_:1}),t(),s(a,{to:"/tag/dynamic-programming.html"},{default:e(()=>[L]),_:1})]),N,n("td",V,[n("a",M,[t("🀄️"),s(o)]),t(),n("a",B,[t("🔗"),s(o)])])]),n("tr",null,[S,z,n("td",R,[s(a,{to:"/problem/0583.html"},{default:e(()=>[t("[✓]")]),_:1})]),n("td",F,[s(a,{to:"/tag/string.html"},{default:e(()=>[G]),_:1}),t(),s(a,{to:"/tag/dynamic-programming.html"},{default:e(()=>[H]),_:1})]),J,n("td",K,[n("a",Q,[t("🀄️"),s(o)]),t(),n("a",U,[t("🔗"),s(o)])])]),n("tr",null,[W,X,Y,n("td",Z,[s(a,{to:"/tag/string.html"},{default:e(()=>[$]),_:1}),t(),s(a,{to:"/tag/dynamic-programming.html"},{default:e(()=>[nn]),_:1})]),tn,n("td",sn,[n("a",en,[t("🀄️"),s(o)]),t(),n("a",an,[t("🔗"),s(o)])])]),n("tr",null,[on,cn,ln,n("td",pn,[s(a,{to:"/tag/greedy.html"},{default:e(()=>[un]),_:1}),t(),s(a,{to:"/tag/string.html"},{default:e(()=>[rn]),_:1}),t(),s(a,{to:"/tag/prefix-sum.html"},{default:e(()=>[dn]),_:1})]),kn,n("td",mn,[n("a",hn,[t("🀄️"),s(o)]),t(),n("a",bn,[t("🔗"),s(o)])])]),n("tr",null,[_n,gn,fn,n("td",xn,[s(a,{to:"/tag/two-pointers.html"},{default:e(()=>[yn]),_:1}),t(),s(a,{to:"/tag/string.html"},{default:e(()=>[vn]),_:1}),t(),s(a,{to:"/tag/binary-search.html"},{default:e(()=>[qn]),_:1})]),wn,n("td",jn,[n("a",An,[t("🀄️"),s(o)]),t(),n("a",En,[t("🔗"),s(o)])])])])])])}const In=r(b,[["render",Cn],["__file","1143.html.vue"]]);export{In as default};
