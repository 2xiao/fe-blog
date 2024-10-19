import{_ as p,r as u,o as d,c as k,a as n,d as t,b as s,w as e,f as m,e as h}from"./app-ynO5B_DP.js";const _={},g={id:"_53-最大子数组和",tabindex:"-1"},b=n("a",{class:"header-anchor",href:"#_53-最大子数组和","aria-hidden":"true"},"#",-1),f={href:"https://leetcode.com/problems/maximum-subarray",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"数组",-1),x=n("code",null,"分治",-1),v=n("code",null,"动态规划",-1),w={href:"https://leetcode.com/problems/maximum-subarray",target:"_blank",rel:"noopener noreferrer"},A=n("code",null,"LeetCode",-1),E=h('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an integer array <code>nums</code>, find the subarray with the largest sum, and return <em>its sum</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [-2,1,-3,4,-1,2,1,-5,4]</p><p>Output: 6</p><p>Explanation: The subarray [4,-1,2,1] has the largest sum 6.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [1]</p><p>Output: 1</p><p>Explanation: The subarray [1] has the largest sum 1.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: nums = [5,4,-1,7,8]</p><p>Output: 23</p><p>Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 10^5</code></li><li><code>-10^4 &lt;= nums[i] &lt;= 10^4</code></li></ul><p><strong>Follow up:</strong> If you have figured out the <code>O(n)</code> solution, try coding another solution using the <strong>divide and conquer</strong> approach, which is more subtle.</p><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个整数数组 <code>nums</code> ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。</p><p><strong>子数组</strong> 是数组中的一个连续部分。</p><p><strong>进阶</strong>：如果你已经实现复杂度为 <code>O(n)</code> 的解法，尝试使用更为精妙的 <strong>分治法</strong> 求解。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-动态规划" tabindex="-1"><a class="header-anchor" href="#思路一-动态规划" aria-hidden="true">#</a> 思路一：动态规划</h3><ul><li>设 <code>dp[i]</code> 表示以第 <code>i</code> 个元素结尾的最大子序和</li><li>状态转移方程为：<code>dp[i] = max(dp[i-1] + nums[i], nums[i])</code><ul><li>如果 <code>dp[i-1]</code> 为正数，表示前面的子序和对当前元素有积极的贡献，可以继续累加；</li><li>如果 <code>dp[i-1]</code> 为负数，表示前面的子序和对当前元素无积极的贡献，因此当前元素成为新的起点。</li></ul></li><li>最终，最大子序和即为所有 <code>dp[i]</code> 中的最大值。</li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(n)</code>，遍历一次数组。</p></li><li><p><strong>空间复杂度</strong>：<code>O(n)</code>，使用长度为 <code>n</code> 的数组记录子问题状态。</p></li></ul><hr><h3 id="思路二-压缩状态的动态规划" tabindex="-1"><a class="header-anchor" href="#思路二-压缩状态的动态规划" aria-hidden="true">#</a> 思路二：压缩状态的动态规划</h3><p>注意到 <code>dp[i]</code> 仅仅和 <code>dp[i-1]</code> 的状态有关，那么可以进行状态压缩，进一步优化空间复杂度：</p><ul><li>用 <code>pre</code> 和 <code>cur</code> 分别表示以第 <code>i - 1</code> 个和第 <code>i</code> 个元素结尾的最大子序和；用 <code>res</code> 表示最终求得的最大值；</li><li>状态转移方程为：<code>cur = max(pre + nums[i], nums[i])</code></li><li>并更新 <code>pre</code> 和 <code>res</code> 两个参数： <ul><li><code>pre = cur</code>;</li><li><code>res = Math.max(res, cur)</code>;</li></ul></li><li>最终，最大子序和即为 <code>res</code>。</li></ul><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(n)</code>，遍历一次数组。</p></li><li><p><strong>空间复杂度</strong>：<code>O(1)</code>，使用常数个额外变量。</p></li></ul><hr><h3 id="思路三-分治" tabindex="-1"><a class="header-anchor" href="#思路三-分治" aria-hidden="true">#</a> 思路三：分治</h3><p>使用分治法解决最大子序和问题，可以将问题划分为三个部分：左半部分的最大子序和、右半部分的最大子序和以及跨越中点的最大子序和。</p><ol><li><p><strong>递归的终止条件：</strong></p><ul><li>当划分到只有一个元素时，最大子序和就是这个元素本身。</li></ul></li><li><p><strong>左半部分的最大子序和（递归计算）：</strong></p><ul><li>递归计算左半部分的最大子序和，即调用 <code>maxSubArray(nums, low, mid)</code>。</li></ul></li><li><p><strong>右半部分的最大子序和（递归计算）：</strong></p><ul><li>递归计算右半部分的最大子序和，即调用 <code>maxSubArray(nums, mid+1, high)</code>。</li></ul></li><li><p><strong>跨越中点的最大子序和：</strong></p><ul><li>从中点向左、向右分别计算最大子序和，然后相加。</li><li>从中点向左计算时，从 <code>mid</code> 开始向左累加，取累加和的最大值。</li><li>从中点向右计算时，从 <code>mid+1</code> 开始向右累加，取累加和的最大值。</li></ul></li><li><p><strong>返回最大值：</strong></p><ul><li>最终，取左半部分最大子序和、右半部分最大子序和和跨越中点的最大子序和中的最大值作为整个数组的最大子序和。</li></ul></li></ol><h4 id="复杂度分析-2" tabindex="-1"><a class="header-anchor" href="#复杂度分析-2" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(n log n)</code>，递归调用的次数是对数级别。</p></li><li><p><strong>空间复杂度</strong>：<code>O(log n)</code>，递归调用的深度。</p></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',33),M=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[t(`/**
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"nums"),t(`
 * `),n("span",{class:"token keyword"},"@return"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"}")]),t(`
 */`)]),t(`
`),n("span",{class:"token keyword"},"var"),t(),n("span",{class:"token function-variable function"},"maxSubArray"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"nums"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" dp "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"("),t("nums"),n("span",{class:"token punctuation"},"."),t("length"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
	dp`),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(" nums"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" i "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),t(" i "),n("span",{class:"token operator"},"<"),t(" nums"),n("span",{class:"token punctuation"},"."),t("length"),n("span",{class:"token punctuation"},";"),t(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		dp`),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"max"),n("span",{class:"token punctuation"},"("),t("nums"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(" nums"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"+"),t(" dp"),n("span",{class:"token punctuation"},"["),t("i "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token keyword"},"return"),t(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"max"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"..."),t("dp"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),S=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[t(`/**
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"nums"),t(`
 * `),n("span",{class:"token keyword"},"@return"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"}")]),t(`
 */`)]),t(`
`),n("span",{class:"token keyword"},"var"),t(),n("span",{class:"token function-variable function"},"maxSubArray"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"nums"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" pre "),n("span",{class:"token operator"},"="),t(" nums"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" cur "),n("span",{class:"token operator"},"="),t(" pre"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" res "),n("span",{class:"token operator"},"="),t(" pre"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" i "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),t(" i "),n("span",{class:"token operator"},"<"),t(" nums"),n("span",{class:"token punctuation"},"."),t("length"),n("span",{class:"token punctuation"},";"),t(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		cur `),n("span",{class:"token operator"},"="),t(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"max"),n("span",{class:"token punctuation"},"("),t("pre "),n("span",{class:"token operator"},"+"),t(" nums"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(" nums"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
		pre `),n("span",{class:"token operator"},"="),t(" cur"),n("span",{class:"token punctuation"},";"),t(`
		res `),n("span",{class:"token operator"},"="),t(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"max"),n("span",{class:"token punctuation"},"("),t("res"),n("span",{class:"token punctuation"},","),t(" cur"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token keyword"},"return"),t(" res"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),C=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[t(`/**
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"nums"),t(`
 * `),n("span",{class:"token keyword"},"@return"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"}")]),t(`
 */`)]),t(`
`),n("span",{class:"token keyword"},"var"),t(),n("span",{class:"token function-variable function"},"maxSubArray"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"nums"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),t("nums "),n("span",{class:"token operator"},"||"),t(" nums"),n("span",{class:"token punctuation"},"."),t("length "),n("span",{class:"token operator"},"==="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`

	`),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token function"},"divideAndConquer"),n("span",{class:"token punctuation"},"("),t("nums"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),t(" nums"),n("span",{class:"token punctuation"},"."),t("length "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"divideAndConquer"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("nums"),n("span",{class:"token punctuation"},","),t(" low"),n("span",{class:"token punctuation"},","),t(" high")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token comment"},"// 递归终止条件"),t(`
	`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("low "),n("span",{class:"token operator"},"==="),t(" high"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"return"),t(" nums"),n("span",{class:"token punctuation"},"["),t("low"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`

	`),n("span",{class:"token comment"},"// 计算中点"),t(`
	`),n("span",{class:"token keyword"},"const"),t(" mid "),n("span",{class:"token operator"},"="),t(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"floor"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),t("low "),n("span",{class:"token operator"},"+"),t(" high"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"/"),t(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

	`),n("span",{class:"token comment"},"// 递归计算左半部分的最大子序和"),t(`
	`),n("span",{class:"token keyword"},"const"),t(" maxLeft "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"divideAndConquer"),n("span",{class:"token punctuation"},"("),t("nums"),n("span",{class:"token punctuation"},","),t(" low"),n("span",{class:"token punctuation"},","),t(" mid"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

	`),n("span",{class:"token comment"},"// 递归计算右半部分的最大子序和"),t(`
	`),n("span",{class:"token keyword"},"const"),t(" maxRight "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"divideAndConquer"),n("span",{class:"token punctuation"},"("),t("nums"),n("span",{class:"token punctuation"},","),t(" mid "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),t(" high"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

	`),n("span",{class:"token comment"},"// 计算跨越中点的最大子序和"),t(`
	`),n("span",{class:"token keyword"},"const"),t(" maxCross "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"maxCrossingSum"),n("span",{class:"token punctuation"},"("),t("nums"),n("span",{class:"token punctuation"},","),t(" low"),n("span",{class:"token punctuation"},","),t(" mid"),n("span",{class:"token punctuation"},","),t(" high"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

	`),n("span",{class:"token comment"},"// 返回三者中的最大值"),t(`
	`),n("span",{class:"token keyword"},"return"),t(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"max"),n("span",{class:"token punctuation"},"("),t("maxLeft"),n("span",{class:"token punctuation"},","),t(" maxRight"),n("span",{class:"token punctuation"},","),t(" maxCross"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"maxCrossingSum"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("nums"),n("span",{class:"token punctuation"},","),t(" low"),n("span",{class:"token punctuation"},","),t(" mid"),n("span",{class:"token punctuation"},","),t(" high")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" leftSum "),n("span",{class:"token operator"},"="),t(" Number"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"NEGATIVE_INFINITY"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" sum "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(`

	`),n("span",{class:"token comment"},"// 从中点向左计算最大子序和"),t(`
	`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" i "),n("span",{class:"token operator"},"="),t(" mid"),n("span",{class:"token punctuation"},";"),t(" i "),n("span",{class:"token operator"},">="),t(" low"),n("span",{class:"token punctuation"},";"),t(" i"),n("span",{class:"token operator"},"--"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		sum `),n("span",{class:"token operator"},"+="),t(" nums"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
		leftSum `),n("span",{class:"token operator"},"="),t(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"max"),n("span",{class:"token punctuation"},"("),t("leftSum"),n("span",{class:"token punctuation"},","),t(" sum"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`

	`),n("span",{class:"token keyword"},"let"),t(" rightSum "),n("span",{class:"token operator"},"="),t(" Number"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"NEGATIVE_INFINITY"),n("span",{class:"token punctuation"},";"),t(`
	sum `),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(`

	`),n("span",{class:"token comment"},"// 从中点向右计算最大子序和"),t(`
	`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" i "),n("span",{class:"token operator"},"="),t(" mid "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),t(" i "),n("span",{class:"token operator"},"<="),t(" high"),n("span",{class:"token punctuation"},";"),t(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		sum `),n("span",{class:"token operator"},"+="),t(" nums"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
		rightSum `),n("span",{class:"token operator"},"="),t(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"max"),n("span",{class:"token punctuation"},"("),t("rightSum"),n("span",{class:"token punctuation"},","),t(" sum"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`

	`),n("span",{class:"token comment"},"// 返回跨越中点的最大子序和"),t(`
	`),n("span",{class:"token keyword"},"return"),t(" leftSum "),n("span",{class:"token operator"},"+"),t(" rightSum"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),I=n("h2",{id:"相关题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),t(" 相关题目")],-1),N=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度")])],-1),q=n("td",{style:{"text-align":"center"}},"121",-1),O={style:{"text-align":"left"}},T={href:"https://leetcode.com/problems/best-time-to-buy-and-sell-stock",target:"_blank",rel:"noopener noreferrer"},j={style:{"text-align":"center"}},L={href:"/problem/0121",target:"_blank",rel:"noopener noreferrer"},V={style:{"text-align":"left"}},R=n("code",null,"数组",-1),B=n("code",null,"动态规划",-1),F={style:{"text-align":"left"}},G=n("td",{style:{"text-align":"center"}},"152",-1),H={style:{"text-align":"left"}},K={href:"https://leetcode.com/problems/maximum-product-subarray",target:"_blank",rel:"noopener noreferrer"},Y={style:{"text-align":"center"}},z={href:"/problem/0152",target:"_blank",rel:"noopener noreferrer"},D={style:{"text-align":"left"}},J=n("code",null,"数组",-1),P=n("code",null,"动态规划",-1),Q={style:{"text-align":"left"}},U=n("td",{style:{"text-align":"center"}},"697",-1),W={style:{"text-align":"left"}},X={href:"https://leetcode.com/problems/degree-of-an-array",target:"_blank",rel:"noopener noreferrer"},Z=n("td",{style:{"text-align":"center"}},null,-1),$={style:{"text-align":"left"}},nn=n("code",null,"数组",-1),tn=n("code",null,"哈希表",-1),sn={style:{"text-align":"left"}},en=n("td",{style:{"text-align":"center"}},"978",-1),an={style:{"text-align":"left"}},on={href:"https://leetcode.com/problems/longest-turbulent-subarray",target:"_blank",rel:"noopener noreferrer"},ln=n("td",{style:{"text-align":"center"}},null,-1),cn={style:{"text-align":"left"}},un=n("code",null,"数组",-1),rn=n("code",null,"动态规划",-1),pn=n("code",null,"滑动窗口",-1),dn={style:{"text-align":"left"}},kn=n("td",{style:{"text-align":"center"}},"1746",-1),mn={style:{"text-align":"left"}},hn={href:"https://leetcode.com/problems/maximum-subarray-sum-after-one-operation",target:"_blank",rel:"noopener noreferrer"},_n=n("td",{style:{"text-align":"center"}},null,-1),gn={style:{"text-align":"left"}},bn=n("code",null,"数组",-1),fn=n("code",null,"动态规划",-1),yn={style:{"text-align":"left"}},xn=n("td",{style:{"text-align":"center"}},"1749",-1),vn={style:{"text-align":"left"}},wn={href:"https://leetcode.com/problems/maximum-absolute-sum-of-any-subarray",target:"_blank",rel:"noopener noreferrer"},An=n("td",{style:{"text-align":"center"}},null,-1),En={style:{"text-align":"left"}},Mn=n("code",null,"数组",-1),Sn=n("code",null,"动态规划",-1),Cn={style:{"text-align":"left"}},In=n("td",{style:{"text-align":"center"}},"2272",-1),Nn={style:{"text-align":"left"}},qn={href:"https://leetcode.com/problems/substring-with-largest-variance",target:"_blank",rel:"noopener noreferrer"},On=n("td",{style:{"text-align":"center"}},null,-1),Tn={style:{"text-align":"left"}},jn=n("code",null,"数组",-1),Ln=n("code",null,"动态规划",-1),Vn={style:{"text-align":"left"}},Rn=n("td",{style:{"text-align":"center"}},"2302",-1),Bn={style:{"text-align":"left"}},Fn={href:"https://leetcode.com/problems/count-subarrays-with-score-less-than-k",target:"_blank",rel:"noopener noreferrer"},Gn=n("td",{style:{"text-align":"center"}},null,-1),Hn={style:{"text-align":"left"}},Kn=n("code",null,"数组",-1),Yn=n("code",null,"二分查找",-1),zn=n("code",null,"前缀和",-1),Dn=n("code",null,"1+",-1),Jn={style:{"text-align":"left"}},Pn=n("td",{style:{"text-align":"center"}},"2321",-1),Qn={style:{"text-align":"left"}},Un={href:"https://leetcode.com/problems/maximum-score-of-spliced-array",target:"_blank",rel:"noopener noreferrer"},Wn=n("td",{style:{"text-align":"center"}},null,-1),Xn={style:{"text-align":"left"}},Zn=n("code",null,"数组",-1),$n=n("code",null,"动态规划",-1),nt={style:{"text-align":"left"}},tt=n("td",{style:{"text-align":"center"}},"2496",-1),st={style:{"text-align":"left"}},et={href:"https://leetcode.com/problems/maximum-value-of-a-string-in-an-array",target:"_blank",rel:"noopener noreferrer"},at=n("td",{style:{"text-align":"center"}},null,-1),ot={style:{"text-align":"left"}},lt=n("code",null,"数组",-1),ct=n("code",null,"字符串",-1),it={style:{"text-align":"left"}},ut=n("td",{style:{"text-align":"center"}},"2600",-1),rt={style:{"text-align":"left"}},pt={href:"https://leetcode.com/problems/k-items-with-the-maximum-sum",target:"_blank",rel:"noopener noreferrer"},dt=n("td",{style:{"text-align":"center"}},null,-1),kt={style:{"text-align":"left"}},mt=n("code",null,"贪心",-1),ht=n("code",null,"数学",-1),_t={style:{"text-align":"left"}},gt=n("td",{style:{"text-align":"center"}},"2606",-1),bt={style:{"text-align":"left"}},ft={href:"https://leetcode.com/problems/find-the-substring-with-maximum-cost",target:"_blank",rel:"noopener noreferrer"},yt=n("td",{style:{"text-align":"center"}},null,-1),xt={style:{"text-align":"left"}},vt=n("code",null,"数组",-1),wt=n("code",null,"哈希表",-1),At=n("code",null,"字符串",-1),Et=n("code",null,"1+",-1),Mt={style:{"text-align":"left"}},St=n("td",{style:{"text-align":"center"}},"3026",-1),Ct={style:{"text-align":"left"}},It={href:"https://leetcode.com/problems/maximum-good-subarray-sum",target:"_blank",rel:"noopener noreferrer"},Nt=n("td",{style:{"text-align":"center"}},null,-1),qt={style:{"text-align":"left"}},Ot=n("code",null,"数组",-1),Tt=n("code",null,"哈希表",-1),jt=n("code",null,"前缀和",-1),Lt={style:{"text-align":"left"}};function Vt(Rt,Bt){const o=u("ExternalLinkIcon"),l=u("font"),a=u("RouterLink"),r=u("CodeTabs");return d(),k("div",null,[n("h1",g,[b,t(),n("a",f,[t("53. 最大子数组和"),s(o)])]),n("p",null,[t("🟠 "),s(l,{color:"#ffb800"},{default:e(()=>[t("Medium")]),_:1}),t("  🔖  "),s(a,{to:"/outline/tag/array.html"},{default:e(()=>[y]),_:1}),t(),s(a,{to:"/outline/tag/divide-and-conquer.html"},{default:e(()=>[x]),_:1}),t(),s(a,{to:"/outline/tag/dynamic-programming.html"},{default:e(()=>[v]),_:1}),t("  🔗 "),n("a",w,[A,s(o)])]),E,s(r,{id:"287",data:[{id:"动态规划"},{id:"压缩状态的动态规划"},{id:"分治"}]},{title0:e(({value:c,isActive:i})=>[t("动态规划")]),title1:e(({value:c,isActive:i})=>[t("压缩状态的动态规划")]),title2:e(({value:c,isActive:i})=>[t("分治")]),tab0:e(({value:c,isActive:i})=>[M]),tab1:e(({value:c,isActive:i})=>[S]),tab2:e(({value:c,isActive:i})=>[C]),_:1}),I,m(" prettier-ignore "),n("table",null,[N,n("tbody",null,[n("tr",null,[q,n("td",O,[n("a",T,[t("买卖股票的最佳时机"),s(o)])]),n("td",j,[n("a",L,[t("[✓]"),s(o)])]),n("td",V,[s(a,{to:"/outline/tag/array.html"},{default:e(()=>[R]),_:1}),t(),s(a,{to:"/outline/tag/dynamic-programming.html"},{default:e(()=>[B]),_:1})]),n("td",F,[s(l,{color:"#15bd66"},{default:e(()=>[t("Easy")]),_:1})])]),n("tr",null,[G,n("td",H,[n("a",K,[t("乘积最大子数组"),s(o)])]),n("td",Y,[n("a",z,[t("[✓]"),s(o)])]),n("td",D,[s(a,{to:"/outline/tag/array.html"},{default:e(()=>[J]),_:1}),t(),s(a,{to:"/outline/tag/dynamic-programming.html"},{default:e(()=>[P]),_:1})]),n("td",Q,[s(l,{color:"#ffb800"},{default:e(()=>[t("Medium")]),_:1})])]),n("tr",null,[U,n("td",W,[n("a",X,[t("数组的度"),s(o)])]),Z,n("td",$,[s(a,{to:"/outline/tag/array.html"},{default:e(()=>[nn]),_:1}),t(),s(a,{to:"/outline/tag/hash-table.html"},{default:e(()=>[tn]),_:1})]),n("td",sn,[s(l,{color:"#15bd66"},{default:e(()=>[t("Easy")]),_:1})])]),n("tr",null,[en,n("td",an,[n("a",on,[t("最长湍流子数组"),s(o)])]),ln,n("td",cn,[s(a,{to:"/outline/tag/array.html"},{default:e(()=>[un]),_:1}),t(),s(a,{to:"/outline/tag/dynamic-programming.html"},{default:e(()=>[rn]),_:1}),t(),s(a,{to:"/outline/tag/sliding-window.html"},{default:e(()=>[pn]),_:1})]),n("td",dn,[s(l,{color:"#ffb800"},{default:e(()=>[t("Medium")]),_:1})])]),n("tr",null,[kn,n("td",mn,[n("a",hn,[t("经过一次操作后的最大子数组和"),s(o)])]),_n,n("td",gn,[s(a,{to:"/outline/tag/array.html"},{default:e(()=>[bn]),_:1}),t(),s(a,{to:"/outline/tag/dynamic-programming.html"},{default:e(()=>[fn]),_:1})]),n("td",yn,[s(l,{color:"#ffb800"},{default:e(()=>[t("Medium")]),_:1})])]),n("tr",null,[xn,n("td",vn,[n("a",wn,[t("任意子数组和的绝对值的最大值"),s(o)])]),An,n("td",En,[s(a,{to:"/outline/tag/array.html"},{default:e(()=>[Mn]),_:1}),t(),s(a,{to:"/outline/tag/dynamic-programming.html"},{default:e(()=>[Sn]),_:1})]),n("td",Cn,[s(l,{color:"#ffb800"},{default:e(()=>[t("Medium")]),_:1})])]),n("tr",null,[In,n("td",Nn,[n("a",qn,[t("最大波动的子字符串"),s(o)])]),On,n("td",Tn,[s(a,{to:"/outline/tag/array.html"},{default:e(()=>[jn]),_:1}),t(),s(a,{to:"/outline/tag/dynamic-programming.html"},{default:e(()=>[Ln]),_:1})]),n("td",Vn,[s(l,{color:"#ff334b"},{default:e(()=>[t("Hard")]),_:1})])]),n("tr",null,[Rn,n("td",Bn,[n("a",Fn,[t("统计得分小于 K 的子数组数目"),s(o)])]),Gn,n("td",Hn,[s(a,{to:"/outline/tag/array.html"},{default:e(()=>[Kn]),_:1}),t(),s(a,{to:"/outline/tag/binary-search.html"},{default:e(()=>[Yn]),_:1}),t(),s(a,{to:"/outline/tag/prefix-sum.html"},{default:e(()=>[zn]),_:1}),t(),Dn]),n("td",Jn,[s(l,{color:"#ff334b"},{default:e(()=>[t("Hard")]),_:1})])]),n("tr",null,[Pn,n("td",Qn,[n("a",Un,[t("拼接数组的最大分数"),s(o)])]),Wn,n("td",Xn,[s(a,{to:"/outline/tag/array.html"},{default:e(()=>[Zn]),_:1}),t(),s(a,{to:"/outline/tag/dynamic-programming.html"},{default:e(()=>[$n]),_:1})]),n("td",nt,[s(l,{color:"#ff334b"},{default:e(()=>[t("Hard")]),_:1})])]),n("tr",null,[tt,n("td",st,[n("a",et,[t("数组中字符串的最大值"),s(o)])]),at,n("td",ot,[s(a,{to:"/outline/tag/array.html"},{default:e(()=>[lt]),_:1}),t(),s(a,{to:"/outline/tag/string.html"},{default:e(()=>[ct]),_:1})]),n("td",it,[s(l,{color:"#15bd66"},{default:e(()=>[t("Easy")]),_:1})])]),n("tr",null,[ut,n("td",rt,[n("a",pt,[t("K 件物品的最大和"),s(o)])]),dt,n("td",kt,[s(a,{to:"/outline/tag/greedy.html"},{default:e(()=>[mt]),_:1}),t(),s(a,{to:"/outline/tag/math.html"},{default:e(()=>[ht]),_:1})]),n("td",_t,[s(l,{color:"#15bd66"},{default:e(()=>[t("Easy")]),_:1})])]),n("tr",null,[gt,n("td",bt,[n("a",ft,[t("找到最大开销的子字符串"),s(o)])]),yt,n("td",xt,[s(a,{to:"/outline/tag/array.html"},{default:e(()=>[vt]),_:1}),t(),s(a,{to:"/outline/tag/hash-table.html"},{default:e(()=>[wt]),_:1}),t(),s(a,{to:"/outline/tag/string.html"},{default:e(()=>[At]),_:1}),t(),Et]),n("td",Mt,[s(l,{color:"#ffb800"},{default:e(()=>[t("Medium")]),_:1})])]),n("tr",null,[St,n("td",Ct,[n("a",It,[t("最大好子数组和"),s(o)])]),Nt,n("td",qt,[s(a,{to:"/outline/tag/array.html"},{default:e(()=>[Ot]),_:1}),t(),s(a,{to:"/outline/tag/hash-table.html"},{default:e(()=>[Tt]),_:1}),t(),s(a,{to:"/outline/tag/prefix-sum.html"},{default:e(()=>[jt]),_:1})]),n("td",Lt,[s(l,{color:"#ffb800"},{default:e(()=>[t("Medium")]),_:1})])])])])])}const Gt=p(_,[["render",Vt],["__file","0053.html.vue"]]);export{Gt as default};
