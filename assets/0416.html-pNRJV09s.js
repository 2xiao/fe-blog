import{_ as r,r as l,o as d,c as k,a as n,d as t,b as s,w as e,f as m,e as _}from"./app-ynO5B_DP.js";const h={},b={id:"_416-分割等和子集",tabindex:"-1"},f=n("a",{class:"header-anchor",href:"#_416-分割等和子集","aria-hidden":"true"},"#",-1),g={href:"https://leetcode.com/problems/partition-equal-subset-sum",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"数组",-1),v=n("code",null,"动态规划",-1),x={href:"https://leetcode.com/problems/partition-equal-subset-sum",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"LeetCode",-1),j=_('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an integer array <code>nums</code>, return <code>true</code> <em>if you can partition the array into two subsets such that the sum of the elements in both subsets is equal or</em><code>false</code> <em>otherwise</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [1,5,11,5]</p><p>Output: true</p><p>Explanation: The array can be partitioned as [1, 5, 5] and [11].</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [1,2,3,5]</p><p>Output: false</p><p>Explanation: The array cannot be partitioned into equal sum subsets.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 200</code></li><li><code>1 &lt;= nums[i] &lt;= 100</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个 <strong>只包含正整数</strong> 的 <strong>非空</strong> 数组 <code>nums</code> 。请你判断是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-动态规划" tabindex="-1"><a class="header-anchor" href="#思路一-动态规划" aria-hidden="true">#</a> 思路一：动态规划</h3><p>这是一个典型的动态规划问题，可以通过状态转移方程来解决。问题可以转化为背包问题，即是否存在一组元素，使得它们的和恰好为数组元素和的一半。</p><p>定义一个二维数组 <code>dp</code>，其中 <code>dp[i][j]</code> 表示在前 <code>i</code> 个元素中是否存在一组元素的和等于 <code>j</code>。状态转移方程如下：</p><p><code>dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i - 1]]</code></p><ul><li><code>dp[i-1][j]</code> 表示不选取第 <code>i</code> 个元素。</li><li><code>dp[i-1][j-nums[i-1]]</code> 表示选取第 <code>i</code> 个元素。</li></ul><p>初始化状态：<code>dp[i][0] = true</code>，即对于前 <code>i</code> 个元素，总是可以找到一组元素的和为 0（即不选取任何元素）。</p><p>最终结果为 <code>dp[n][target]</code>，其中 <code>n</code> 为数组长度，<code>target</code> 为数组元素和的一半。</p><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n * target)</code>，其中 <code>n</code> 是数组长度，<code>target</code> 是数组元素和的一半。</li><li><strong>空间复杂度</strong>：<code>O(n * target)</code>，使用了一个二维动态规划数组。</li></ul><hr><h3 id="思路二-压缩状态的动态规划" tabindex="-1"><a class="header-anchor" href="#思路二-压缩状态的动态规划" aria-hidden="true">#</a> 思路二：压缩状态的动态规划</h3><p>注意到 <code>dp[i][j]</code> 都是通过上一行 <code>dp[i-1][..]</code> 转移过来的，再之前所有行的数据都不会再使用了。所以，我们可以对动态规划进行状态压缩，将二维 <code>dp</code> 数组压缩为一维，节约空间复杂度：</p><ul><li><code>dp[j]</code> 表示是否可以使用当前元素得到和为 <code>j</code> 的子集。</li><li>遍历 <code>nums</code> 数组中的每个数字 <code>num</code>，并更新 <code>dp</code> 数组。需要注意的是 <code>j</code> 应该从后往前反向遍历，确保了我们在更新当前状态时所依赖的状态已经被正确计算。</li><li>对于每个 <code>j</code> 从 <code>target</code> 到 <code>num</code>，根据 <code>dp[j]</code> 和 <code>dp[j - num]</code> 的值来更新 <code>dp[j]</code>。</li><li>最终结果存储在 <code>dp[target]</code> 中。如果为 <code>true</code>，表示存在一个和为 <code>target</code> 的子集，即数组可以被分割成两个和相等的子集。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',25),q=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[t(`/**
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"nums"),t(`
 * `),n("span",{class:"token keyword"},"@return"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("boolean"),n("span",{class:"token punctuation"},"}")]),t(`
 */`)]),t(`
`),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"canPartition"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"nums"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token keyword"},"const"),t(" n "),n("span",{class:"token operator"},"="),t(" nums"),n("span",{class:"token punctuation"},"."),t("length"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"const"),t(" sum "),n("span",{class:"token operator"},"="),t(" nums"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"reduce"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("acc"),n("span",{class:"token punctuation"},","),t(" num")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(" acc "),n("span",{class:"token operator"},"+"),t(" num"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

	`),n("span",{class:"token comment"},"// 如果数组元素和为奇数，不可能分割成两个和相等的子集"),t(`
	`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("sum "),n("span",{class:"token operator"},"%"),t(),n("span",{class:"token number"},"2"),t(),n("span",{class:"token operator"},"!=="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`

	`),n("span",{class:"token keyword"},"const"),t(" target "),n("span",{class:"token operator"},"="),t(" sum "),n("span",{class:"token operator"},"/"),t(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"const"),t(" dp "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"("),t("n "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),t(`
		`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fill"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),t(`
		`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"("),t("target "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fill"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

	`),n("span",{class:"token comment"},"// 初始化状态"),t(`
	`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" i "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(" i "),n("span",{class:"token operator"},"<="),t(" n"),n("span",{class:"token punctuation"},";"),t(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		dp`),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`

	`),n("span",{class:"token comment"},"// 动态规划计算"),t(`
	`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" i "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),t(" i "),n("span",{class:"token operator"},"<="),t(" n"),n("span",{class:"token punctuation"},";"),t(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" j "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),t(" j "),n("span",{class:"token operator"},"<="),t(" target"),n("span",{class:"token punctuation"},";"),t(" j"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("j "),n("span",{class:"token operator"},"<"),t(" nums"),n("span",{class:"token punctuation"},"["),t("i "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
				`),n("span",{class:"token comment"},"// 背包容量不足，不能装入第 i 个物品"),t(`
				dp`),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),t("j"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(" dp"),n("span",{class:"token punctuation"},"["),t("i "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),t("j"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
			`),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"else"),t(),n("span",{class:"token punctuation"},"{"),t(`
				`),n("span",{class:"token comment"},"// 装入或不装入背包"),t(`
				dp`),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),t("j"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(" dp"),n("span",{class:"token punctuation"},"["),t("i "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),t("j"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"||"),t(" dp"),n("span",{class:"token punctuation"},"["),t("i "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),t("j "),n("span",{class:"token operator"},"-"),t(" nums"),n("span",{class:"token punctuation"},"["),t("i "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
			`),n("span",{class:"token punctuation"},"}"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`

	`),n("span",{class:"token keyword"},"return"),t(" dp"),n("span",{class:"token punctuation"},"["),t("n"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),t("target"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),E=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[t(`/**
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"nums"),t(`
 * `),n("span",{class:"token keyword"},"@return"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("boolean"),n("span",{class:"token punctuation"},"}")]),t(`
 */`)]),t(`
`),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"canPartition"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"nums"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token keyword"},"const"),t(" n "),n("span",{class:"token operator"},"="),t(" nums"),n("span",{class:"token punctuation"},"."),t("length"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"const"),t(" sum "),n("span",{class:"token operator"},"="),t(" nums"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"reduce"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("acc"),n("span",{class:"token punctuation"},","),t(" num")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(" acc "),n("span",{class:"token operator"},"+"),t(" num"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

	`),n("span",{class:"token comment"},"// 如果数组元素和为奇数，不可能分割成两个和相等的子集"),t(`
	`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("sum "),n("span",{class:"token operator"},"%"),t(),n("span",{class:"token number"},"2"),t(),n("span",{class:"token operator"},"!=="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`

	`),n("span",{class:"token keyword"},"const"),t(" target "),n("span",{class:"token operator"},"="),t(" sum "),n("span",{class:"token operator"},"/"),t(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"const"),t(" dp "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"("),t("target "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fill"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

	`),n("span",{class:"token comment"},"// 初始状态：空子集的和为 0"),t(`
	dp`),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),t(`

	`),n("span",{class:"token comment"},"// 动态规划计算"),t(`
	`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" num "),n("span",{class:"token keyword"},"of"),t(" nums"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" j "),n("span",{class:"token operator"},"="),t(" target"),n("span",{class:"token punctuation"},";"),t(" j "),n("span",{class:"token operator"},">="),t(" num"),n("span",{class:"token punctuation"},";"),t(" j"),n("span",{class:"token operator"},"--"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			dp`),n("span",{class:"token punctuation"},"["),t("j"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(" dp"),n("span",{class:"token punctuation"},"["),t("j"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"||"),t(" dp"),n("span",{class:"token punctuation"},"["),t("j "),n("span",{class:"token operator"},"-"),t(" num"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`

	`),n("span",{class:"token keyword"},"return"),t(" dp"),n("span",{class:"token punctuation"},"["),t("target"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),A=n("h2",{id:"相关题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),t(" 相关题目")],-1),C=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度")])],-1),L=n("td",{style:{"text-align":"center"}},"698",-1),N={style:{"text-align":"left"}},T={href:"https://leetcode.com/problems/partition-to-k-equal-sum-subsets",target:"_blank",rel:"noopener noreferrer"},V=n("td",{style:{"text-align":"center"}},null,-1),I={style:{"text-align":"left"}},O=n("code",null,"位运算",-1),z=n("code",null,"记忆化搜索",-1),B=n("code",null,"数组",-1),H=n("code",null,"3+",-1),M={style:{"text-align":"left"}},P=n("td",{style:{"text-align":"center"}},"1981",-1),R={style:{"text-align":"left"}},G={href:"https://leetcode.com/problems/minimize-the-difference-between-target-and-chosen-elements",target:"_blank",rel:"noopener noreferrer"},S=n("td",{style:{"text-align":"center"}},null,-1),D={style:{"text-align":"left"}},F=n("code",null,"数组",-1),J=n("code",null,"动态规划",-1),K=n("code",null,"矩阵",-1),Q={style:{"text-align":"left"}},U=n("td",{style:{"text-align":"center"}},"2025",-1),W={style:{"text-align":"left"}},X={href:"https://leetcode.com/problems/maximum-number-of-ways-to-partition-an-array",target:"_blank",rel:"noopener noreferrer"},Y=n("td",{style:{"text-align":"center"}},null,-1),Z={style:{"text-align":"left"}},$=n("code",null,"数组",-1),nn=n("code",null,"哈希表",-1),tn=n("code",null,"计数",-1),sn=n("code",null,"2+",-1),en={style:{"text-align":"left"}},an=n("td",{style:{"text-align":"center"}},"2035",-1),on={style:{"text-align":"left"}},cn={href:"https://leetcode.com/problems/partition-array-into-two-arrays-to-minimize-sum-difference",target:"_blank",rel:"noopener noreferrer"},ln=n("td",{style:{"text-align":"center"}},null,-1),pn={style:{"text-align":"left"}},un=n("code",null,"位运算",-1),rn=n("code",null,"数组",-1),dn=n("code",null,"双指针",-1),kn=n("code",null,"4+",-1),mn={style:{"text-align":"left"}},_n=n("td",{style:{"text-align":"center"}},"2395",-1),hn={style:{"text-align":"left"}},bn={href:"https://leetcode.com/problems/find-subarrays-with-equal-sum",target:"_blank",rel:"noopener noreferrer"},fn=n("td",{style:{"text-align":"center"}},null,-1),gn={style:{"text-align":"left"}},yn=n("code",null,"数组",-1),vn=n("code",null,"哈希表",-1),xn={style:{"text-align":"left"}},wn=n("td",{style:{"text-align":"center"}},"2518",-1),jn={style:{"text-align":"left"}},qn={href:"https://leetcode.com/problems/number-of-great-partitions",target:"_blank",rel:"noopener noreferrer"},En=n("td",{style:{"text-align":"center"}},null,-1),An={style:{"text-align":"left"}},Cn=n("code",null,"数组",-1),Ln=n("code",null,"动态规划",-1),Nn={style:{"text-align":"left"}},Tn=n("td",{style:{"text-align":"center"}},"2578",-1),Vn={style:{"text-align":"left"}},In={href:"https://leetcode.com/problems/split-with-minimum-sum",target:"_blank",rel:"noopener noreferrer"},On=n("td",{style:{"text-align":"center"}},null,-1),zn={style:{"text-align":"left"}},Bn=n("code",null,"贪心",-1),Hn=n("code",null,"数学",-1),Mn=n("code",null,"排序",-1),Pn={style:{"text-align":"left"}};function Rn(Gn,Sn){const o=l("ExternalLinkIcon"),c=l("font"),a=l("RouterLink"),u=l("CodeTabs");return d(),k("div",null,[n("h1",b,[f,t(),n("a",g,[t("416. 分割等和子集"),s(o)])]),n("p",null,[t("🟠 "),s(c,{color:"#ffb800"},{default:e(()=>[t("Medium")]),_:1}),t("  🔖  "),s(a,{to:"/outline/tag/array.html"},{default:e(()=>[y]),_:1}),t(),s(a,{to:"/outline/tag/dynamic-programming.html"},{default:e(()=>[v]),_:1}),t("  🔗 "),n("a",x,[w,s(o)])]),j,s(u,{id:"141",data:[{id:"动态规划"},{id:"压缩状态的动态规划"}]},{title0:e(({value:p,isActive:i})=>[t("动态规划")]),title1:e(({value:p,isActive:i})=>[t("压缩状态的动态规划")]),tab0:e(({value:p,isActive:i})=>[q]),tab1:e(({value:p,isActive:i})=>[E]),_:1}),A,m(" prettier-ignore "),n("table",null,[C,n("tbody",null,[n("tr",null,[L,n("td",N,[n("a",T,[t("划分为k个相等的子集"),s(o)])]),V,n("td",I,[s(a,{to:"/outline/tag/bit-manipulation.html"},{default:e(()=>[O]),_:1}),t(),s(a,{to:"/outline/tag/memoization.html"},{default:e(()=>[z]),_:1}),t(),s(a,{to:"/outline/tag/array.html"},{default:e(()=>[B]),_:1}),t(),H]),n("td",M,[s(c,{color:"#ffb800"},{default:e(()=>[t("Medium")]),_:1})])]),n("tr",null,[P,n("td",R,[n("a",G,[t("最小化目标值与所选元素的差"),s(o)])]),S,n("td",D,[s(a,{to:"/outline/tag/array.html"},{default:e(()=>[F]),_:1}),t(),s(a,{to:"/outline/tag/dynamic-programming.html"},{default:e(()=>[J]),_:1}),t(),s(a,{to:"/outline/tag/matrix.html"},{default:e(()=>[K]),_:1})]),n("td",Q,[s(c,{color:"#ffb800"},{default:e(()=>[t("Medium")]),_:1})])]),n("tr",null,[U,n("td",W,[n("a",X,[t("分割数组的最多方案数"),s(o)])]),Y,n("td",Z,[s(a,{to:"/outline/tag/array.html"},{default:e(()=>[$]),_:1}),t(),s(a,{to:"/outline/tag/hash-table.html"},{default:e(()=>[nn]),_:1}),t(),s(a,{to:"/outline/tag/counting.html"},{default:e(()=>[tn]),_:1}),t(),sn]),n("td",en,[s(c,{color:"#ff334b"},{default:e(()=>[t("Hard")]),_:1})])]),n("tr",null,[an,n("td",on,[n("a",cn,[t("将数组分成两个数组并最小化数组和的差"),s(o)])]),ln,n("td",pn,[s(a,{to:"/outline/tag/bit-manipulation.html"},{default:e(()=>[un]),_:1}),t(),s(a,{to:"/outline/tag/array.html"},{default:e(()=>[rn]),_:1}),t(),s(a,{to:"/outline/tag/two-pointers.html"},{default:e(()=>[dn]),_:1}),t(),kn]),n("td",mn,[s(c,{color:"#ff334b"},{default:e(()=>[t("Hard")]),_:1})])]),n("tr",null,[_n,n("td",hn,[n("a",bn,[t("和相等的子数组"),s(o)])]),fn,n("td",gn,[s(a,{to:"/outline/tag/array.html"},{default:e(()=>[yn]),_:1}),t(),s(a,{to:"/outline/tag/hash-table.html"},{default:e(()=>[vn]),_:1})]),n("td",xn,[s(c,{color:"#15bd66"},{default:e(()=>[t("Easy")]),_:1})])]),n("tr",null,[wn,n("td",jn,[n("a",qn,[t("好分区的数目"),s(o)])]),En,n("td",An,[s(a,{to:"/outline/tag/array.html"},{default:e(()=>[Cn]),_:1}),t(),s(a,{to:"/outline/tag/dynamic-programming.html"},{default:e(()=>[Ln]),_:1})]),n("td",Nn,[s(c,{color:"#ff334b"},{default:e(()=>[t("Hard")]),_:1})])]),n("tr",null,[Tn,n("td",Vn,[n("a",In,[t("最小和分割"),s(o)])]),On,n("td",zn,[s(a,{to:"/outline/tag/greedy.html"},{default:e(()=>[Bn]),_:1}),t(),s(a,{to:"/outline/tag/math.html"},{default:e(()=>[Hn]),_:1}),t(),s(a,{to:"/outline/tag/sorting.html"},{default:e(()=>[Mn]),_:1})]),n("td",Pn,[s(c,{color:"#15bd66"},{default:e(()=>[t("Easy")]),_:1})])])])])])}const Fn=r(h,[["render",Rn],["__file","0416.html.vue"]]);export{Fn as default};
