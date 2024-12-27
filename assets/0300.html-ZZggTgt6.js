import{_ as u,r as l,o as p,c as _,a as t,b as e,d as n,w as s,f as h,e as m}from"./app-fqckLmln.js";const g={},k=t("h1",{id:"_300-最长递增子序列",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_300-最长递增子序列","aria-hidden":"true"},"#"),e(" 300. 最长递增子序列")],-1),f=t("code",null,"数组",-1),b=t("code",null,"二分查找",-1),y=t("code",null,"动态规划",-1),x={href:"https://leetcode.cn/problems/longest-increasing-subsequence",target:"_blank",rel:"noopener noreferrer"},v=t("code",null,"力扣",-1),w={href:"https://leetcode.com/problems/longest-increasing-subsequence",target:"_blank",rel:"noopener noreferrer"},q=t("code",null,"LeetCode",-1),I=m('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an integer array <code>nums</code>, return <em>the length of the longest <strong>strictly increasing</strong></em> _ <strong>subsequence</strong>_.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [10,9,2,5,3,7,101,18]</p><p>Output: 4</p><p>Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [0,1,0,3,2,3]</p><p>Output: 4</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: nums = [7,7,7,7,7,7,7]</p><p>Output: 1</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 2500</code></li><li><code>-10^4 &lt;= nums[i] &lt;= 10^4</code></li></ul><p><strong>Follow up:</strong> Can you come up with an algorithm that runs in <code>O(n log(n))</code> time complexity?</p><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个整数数组 <code>nums</code> ，找到其中最长严格递增子序列的长度。</p><p><strong>子序列</strong> 是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，<code>[3,6,2,7]</code> 是数组 <code>[0,3,1,6,2,2,7]</code> 的子序列。</p><p><strong>进阶：</strong></p><p>你能将算法的时间复杂度降低到 <code>O(n logn)</code> 吗?</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-动态规划" tabindex="-1"><a class="header-anchor" href="#思路一-动态规划" aria-hidden="true">#</a> 思路一：动态规划</h3><p>可以使用动态规划来解决:</p><ul><li>创建一个长度为 <code>n</code> 的数组 <code>dp</code>，其中 <code>dp[i]</code> 表示以第 <code>i</code> 个元素为结尾的最长递增子序列的长度。</li><li>初始化 <code>dp</code> 数组的所有元素为 1，因为每个元素自身也是一个长度为 1 的递增子序列。</li><li>对于每个位置 <code>i</code>，遍历 <code>0</code> 到 <code>i-1</code> 的所有位置，如果 <code>nums[i] &gt; nums[j]</code>，说明 <code>nums[i]</code> 可以接在 <code>nums[j]</code> 后面构成一个更长的递增子序列，更新 <code>dp[i] = Math.max(dp[i], dp[j] + 1)</code>。</li><li>最终，<code>dp</code> 数组中的最大值即为所求的最长递增子序列的长度。</li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>: <code>O(n^2)</code> ，其中 <code>n</code> 是数组 <code>nums</code> 的长度。主要的时间复杂度来自于两层嵌套的循环，外层循环遍历数组中的每个元素，而内层循环在每次外层循环中都遍历了之前的所有元素。</li><li><strong>空间复杂度</strong>: <code>O(n)</code>，使用了一个长度为 <code>n</code> 的数组来存储中间状态。</li></ul><hr><h3 id="思路二-二分查找" tabindex="-1"><a class="header-anchor" href="#思路二-二分查找" aria-hidden="true">#</a> 思路二：二分查找</h3><p>使用二分查找优化最长递增子序列问题，主要利用了一个辅助数组 <code>tails</code>。这个数组在遍历过程中，始终保持递增的状态。辅助数组 <code>tails</code> 的长度 <code>len</code> 表示当前已经找到的最长递增子序列的长度。二分查找的过程如下：</p><ol><li><p><strong>初始化左右指针：</strong></p><ul><li>初始时，<code>left</code> 指向 0，<code>right</code> 指向 <code>len</code>。</li></ul></li><li><p><strong>开始二分查找：</strong></p><ul><li>在当前的辅助数组 <code>tails</code> 中进行二分查找，找到第一个大于等于 <code>nums[i]</code> 的位置。用 <code>mid</code> 表示二分查找中间位置。</li><li>如果 <code>tails[mid] &lt; nums[i]</code>，说明当前的递增子序列可以继续延长，因此更新 <code>left = mid + 1</code>。</li><li>否则，说明当前递增子序列需要进行调整，因此更新 <code>right = mid</code>。</li></ul></li><li><p><strong>更新辅助数组：</strong></p><ul><li>如果 <code>left === len</code>，说明 <code>nums[i]</code> 大于当前递增子序列的所有元素，将 <code>nums[i]</code> 添加到辅助数组的末尾，并且递增子序列的长度 <code>len++</code>。</li><li>否则，将 <code>nums[i]</code> 替换掉辅助数组中第一个大于等于 <code>nums[i]</code> 的元素。</li></ul></li><li><p><strong>迭代下一个元素：</strong></p><ul><li>重复上述过程，直到遍历完整个数组 <code>nums</code>。</li></ul></li><li><p><strong>最终结果：</strong></p><ul><li>辅助数组的长度 <code>len</code> 即为最长递增子序列的长度。</li></ul></li></ol><p>举一个具体的示例来说明：</p><p>假设 <code>nums = [10, 9, 2, 5, 3, 7, 101, 18]</code>。</p><ul><li>初始化时，辅助数组 <code>tails</code> 为空，<code>len = 0</code>。</li><li>当处理元素 <code>nums[0] = 10</code> 时，<code>tails</code> 为空，将 <code>10</code> 加入到 <code>tails</code>，<code>len</code> 变为 <code>1</code>。</li><li>当处理元素 <code>nums[1] = 9</code> 时，通过二分查找在 <code>tails</code> 中找到第一个大于等于 <code>9</code> 的位置，将 <code>tails[0]</code> 替换为 <code>9</code>。</li><li>依此类推，处理完整个数组后，<code>tails</code> 为 <code>[2, 3, 7, 18]</code>，<code>len = 4</code>，最终结果为 <code>4</code>。</li></ul><p>这种方法的核心在于通过二分查找，高效地维护了一个递增的辅助数组，从而在保证正确性的同时降低时间复杂度到 <code>O(n logn)</code>。</p><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>: <code>O(n logn)</code> ，其中 <code>n</code> 是数组 <code>nums</code> 的长度。</li><li><strong>空间复杂度</strong>: <code>O(len)</code>，其中 <code>len</code> 是最长递增子序列的长度，使用了一个长度最长为 <code>len</code> 的辅助数组。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',33),j=t("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[t("pre",{class:"language-javascript"},[t("code",null,[t("span",{class:"token doc-comment comment"},[e(`/**
 * `),t("span",{class:"token keyword"},"@param"),e(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),e("number"),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},"}")]),e(),t("span",{class:"token parameter"},"nums"),e(`
 * `),t("span",{class:"token keyword"},"@return"),e(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),e("number"),t("span",{class:"token punctuation"},"}")]),e(`
 */`)]),e(`
`),t("span",{class:"token keyword"},"var"),e(),t("span",{class:"token function-variable function"},"lengthOfLIS"),e(),t("span",{class:"token operator"},"="),e(),t("span",{class:"token keyword"},"function"),e(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"nums"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token punctuation"},"{"),e(`
	`),t("span",{class:"token keyword"},"let"),e(" dp "),t("span",{class:"token operator"},"="),e(),t("span",{class:"token keyword"},"new"),e(),t("span",{class:"token class-name"},"Array"),t("span",{class:"token punctuation"},"("),e("nums"),t("span",{class:"token punctuation"},"."),e("length"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"fill"),t("span",{class:"token punctuation"},"("),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),e(`
	`),t("span",{class:"token keyword"},"for"),e(),t("span",{class:"token punctuation"},"("),t("span",{class:"token keyword"},"let"),e(" i "),t("span",{class:"token operator"},"="),e(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},";"),e(" i "),t("span",{class:"token operator"},"<"),e(" nums"),t("span",{class:"token punctuation"},"."),e("length"),t("span",{class:"token punctuation"},";"),e(" i"),t("span",{class:"token operator"},"++"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token punctuation"},"{"),e(`
		`),t("span",{class:"token keyword"},"for"),e(),t("span",{class:"token punctuation"},"("),t("span",{class:"token keyword"},"let"),e(" j "),t("span",{class:"token operator"},"="),e(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},";"),e(" j "),t("span",{class:"token operator"},"<"),e(" i"),t("span",{class:"token punctuation"},";"),e(" j"),t("span",{class:"token operator"},"++"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token punctuation"},"{"),e(`
			`),t("span",{class:"token keyword"},"if"),e(),t("span",{class:"token punctuation"},"("),e("nums"),t("span",{class:"token punctuation"},"["),e("i"),t("span",{class:"token punctuation"},"]"),e(),t("span",{class:"token operator"},">"),e(" nums"),t("span",{class:"token punctuation"},"["),e("j"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token punctuation"},"{"),e(`
				dp`),t("span",{class:"token punctuation"},"["),e("i"),t("span",{class:"token punctuation"},"]"),e(),t("span",{class:"token operator"},"="),e(" Math"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"max"),t("span",{class:"token punctuation"},"("),e("dp"),t("span",{class:"token punctuation"},"["),e("i"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),e(" dp"),t("span",{class:"token punctuation"},"["),e("j"),t("span",{class:"token punctuation"},"]"),e(),t("span",{class:"token operator"},"+"),e(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),e(`
			`),t("span",{class:"token punctuation"},"}"),e(`
		`),t("span",{class:"token punctuation"},"}"),e(`
	`),t("span",{class:"token punctuation"},"}"),e(`

	`),t("span",{class:"token keyword"},"return"),e(" Math"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"max"),t("span",{class:"token punctuation"},"("),t("span",{class:"token operator"},"..."),e("dp"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),e(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),e(`
`)])]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"})])],-1),O=t("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[t("pre",{class:"language-javascript"},[t("code",null,[t("span",{class:"token doc-comment comment"},[e(`/**
 * `),t("span",{class:"token keyword"},"@param"),e(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),e("number"),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},"}")]),e(),t("span",{class:"token parameter"},"nums"),e(`
 * `),t("span",{class:"token keyword"},"@return"),e(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),e("number"),t("span",{class:"token punctuation"},"}")]),e(`
 */`)]),e(`
`),t("span",{class:"token keyword"},"function"),e(),t("span",{class:"token function"},"lengthOfLIS"),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"nums"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token punctuation"},"{"),e(`
	`),t("span",{class:"token keyword"},"if"),e(),t("span",{class:"token punctuation"},"("),t("span",{class:"token operator"},"!"),e("nums "),t("span",{class:"token operator"},"||"),e(" nums"),t("span",{class:"token punctuation"},"."),e("length "),t("span",{class:"token operator"},"==="),e(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token punctuation"},"{"),e(`
		`),t("span",{class:"token keyword"},"return"),e(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},";"),e(`
	`),t("span",{class:"token punctuation"},"}"),e(`

	`),t("span",{class:"token keyword"},"const"),e(" n "),t("span",{class:"token operator"},"="),e(" nums"),t("span",{class:"token punctuation"},"."),e("length"),t("span",{class:"token punctuation"},";"),e(`
	`),t("span",{class:"token keyword"},"const"),e(" tails "),t("span",{class:"token operator"},"="),e(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";"),e(`
	`),t("span",{class:"token keyword"},"let"),e(" len "),t("span",{class:"token operator"},"="),e(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},";"),e(`

	`),t("span",{class:"token keyword"},"for"),e(),t("span",{class:"token punctuation"},"("),t("span",{class:"token keyword"},"let"),e(" i "),t("span",{class:"token operator"},"="),e(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},";"),e(" i "),t("span",{class:"token operator"},"<"),e(" n"),t("span",{class:"token punctuation"},";"),e(" i"),t("span",{class:"token operator"},"++"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token punctuation"},"{"),e(`
		`),t("span",{class:"token keyword"},"let"),e(" left "),t("span",{class:"token operator"},"="),e(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},";"),e(`
		`),t("span",{class:"token keyword"},"let"),e(" right "),t("span",{class:"token operator"},"="),e(" len"),t("span",{class:"token punctuation"},";"),e(`

		`),t("span",{class:"token keyword"},"while"),e(),t("span",{class:"token punctuation"},"("),e("left "),t("span",{class:"token operator"},"<"),e(" right"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token punctuation"},"{"),e(`
			`),t("span",{class:"token keyword"},"const"),e(" mid "),t("span",{class:"token operator"},"="),e(" Math"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"floor"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"("),e("left "),t("span",{class:"token operator"},"+"),e(" right"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token operator"},"/"),e(),t("span",{class:"token number"},"2"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),e(`
			`),t("span",{class:"token keyword"},"if"),e(),t("span",{class:"token punctuation"},"("),e("tails"),t("span",{class:"token punctuation"},"["),e("mid"),t("span",{class:"token punctuation"},"]"),e(),t("span",{class:"token operator"},"<"),e(" nums"),t("span",{class:"token punctuation"},"["),e("i"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token punctuation"},"{"),e(`
				left `),t("span",{class:"token operator"},"="),e(" mid "),t("span",{class:"token operator"},"+"),e(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},";"),e(`
			`),t("span",{class:"token punctuation"},"}"),e(),t("span",{class:"token keyword"},"else"),e(),t("span",{class:"token punctuation"},"{"),e(`
				right `),t("span",{class:"token operator"},"="),e(" mid"),t("span",{class:"token punctuation"},";"),e(`
			`),t("span",{class:"token punctuation"},"}"),e(`
		`),t("span",{class:"token punctuation"},"}"),e(`

		`),t("span",{class:"token keyword"},"if"),e(),t("span",{class:"token punctuation"},"("),e("left "),t("span",{class:"token operator"},"==="),e(" len"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token punctuation"},"{"),e(`
			tails`),t("span",{class:"token punctuation"},"["),e("len"),t("span",{class:"token operator"},"++"),t("span",{class:"token punctuation"},"]"),e(),t("span",{class:"token operator"},"="),e(" nums"),t("span",{class:"token punctuation"},"["),e("i"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";"),e(`
		`),t("span",{class:"token punctuation"},"}"),e(),t("span",{class:"token keyword"},"else"),e(),t("span",{class:"token punctuation"},"{"),e(`
			tails`),t("span",{class:"token punctuation"},"["),e("left"),t("span",{class:"token punctuation"},"]"),e(),t("span",{class:"token operator"},"="),e(" nums"),t("span",{class:"token punctuation"},"["),e("i"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";"),e(`
		`),t("span",{class:"token punctuation"},"}"),e(`
	`),t("span",{class:"token punctuation"},"}"),e(`

	`),t("span",{class:"token keyword"},"return"),e(" len"),t("span",{class:"token punctuation"},";"),e(`
`),t("span",{class:"token punctuation"},"}"),e(`
`)])]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"})])],-1),C=t("h2",{id:"相关题目",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),e(" 相关题目")],-1),E=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),L=t("td",{style:{"text-align":"center"}},"334",-1),A=t("td",{style:{"text-align":"left"}},"递增的三元子序列",-1),M={style:{"text-align":"center"}},N={style:{"text-align":"left"}},V=t("code",null,"贪心",-1),S=t("code",null,"数组",-1),T=t("td",{style:{"text-align":"center"}},"🟠",-1),B={style:{"text-align":"center"}},R={href:"https://leetcode.cn/problems/increasing-triplet-subsequence",target:"_blank",rel:"noopener noreferrer"},F={href:"https://leetcode.com/problems/increasing-triplet-subsequence",target:"_blank",rel:"noopener noreferrer"},G=t("td",{style:{"text-align":"center"}},"354",-1),K=t("td",{style:{"text-align":"left"}},"俄罗斯套娃信封问题",-1),z={style:{"text-align":"center"}},D={style:{"text-align":"left"}},H=t("code",null,"数组",-1),J=t("code",null,"二分查找",-1),P=t("code",null,"动态规划",-1),Q=t("code",null,"1+",-1),U=t("td",{style:{"text-align":"center"}},"🔴",-1),W={style:{"text-align":"center"}},X={href:"https://leetcode.cn/problems/russian-doll-envelopes",target:"_blank",rel:"noopener noreferrer"},Y={href:"https://leetcode.com/problems/russian-doll-envelopes",target:"_blank",rel:"noopener noreferrer"},Z=t("td",{style:{"text-align":"center"}},"646",-1),$=t("td",{style:{"text-align":"left"}},"最长数对链",-1),tt=t("td",{style:{"text-align":"center"}},null,-1),et={style:{"text-align":"left"}},nt=t("code",null,"贪心",-1),st=t("code",null,"数组",-1),ot=t("code",null,"动态规划",-1),at=t("code",null,"1+",-1),lt=t("td",{style:{"text-align":"center"}},"🟠",-1),ct={style:{"text-align":"center"}},it={href:"https://leetcode.cn/problems/maximum-length-of-pair-chain",target:"_blank",rel:"noopener noreferrer"},rt={href:"https://leetcode.com/problems/maximum-length-of-pair-chain",target:"_blank",rel:"noopener noreferrer"},dt=t("td",{style:{"text-align":"center"}},"673",-1),ut=t("td",{style:{"text-align":"left"}},"最长递增子序列的个数",-1),pt=t("td",{style:{"text-align":"center"}},null,-1),_t={style:{"text-align":"left"}},ht=t("code",null,"树状数组",-1),mt=t("code",null,"线段树",-1),gt=t("code",null,"数组",-1),kt=t("code",null,"1+",-1),ft=t("td",{style:{"text-align":"center"}},"🟠",-1),bt={style:{"text-align":"center"}},yt={href:"https://leetcode.cn/problems/number-of-longest-increasing-subsequence",target:"_blank",rel:"noopener noreferrer"},xt={href:"https://leetcode.com/problems/number-of-longest-increasing-subsequence",target:"_blank",rel:"noopener noreferrer"},vt=t("td",{style:{"text-align":"center"}},"712",-1),wt=t("td",{style:{"text-align":"left"}},"两个字符串的最小ASCII删除和",-1),qt={style:{"text-align":"center"}},It={style:{"text-align":"left"}},jt=t("code",null,"字符串",-1),Ot=t("code",null,"动态规划",-1),Ct=t("td",{style:{"text-align":"center"}},"🟠",-1),Et={style:{"text-align":"center"}},Lt={href:"https://leetcode.cn/problems/minimum-ascii-delete-sum-for-two-strings",target:"_blank",rel:"noopener noreferrer"},At={href:"https://leetcode.com/problems/minimum-ascii-delete-sum-for-two-strings",target:"_blank",rel:"noopener noreferrer"},Mt=t("td",{style:{"text-align":"center"}},"1671",-1),Nt=t("td",{style:{"text-align":"left"}},"得到山形数组的最少删除次数",-1),Vt={style:{"text-align":"center"}},St={style:{"text-align":"left"}},Tt=t("code",null,"贪心",-1),Bt=t("code",null,"数组",-1),Rt=t("code",null,"二分查找",-1),Ft=t("code",null,"1+",-1),Gt=t("td",{style:{"text-align":"center"}},"🔴",-1),Kt={style:{"text-align":"center"}},zt={href:"https://leetcode.cn/problems/minimum-number-of-removals-to-make-mountain-array",target:"_blank",rel:"noopener noreferrer"},Dt={href:"https://leetcode.com/problems/minimum-number-of-removals-to-make-mountain-array",target:"_blank",rel:"noopener noreferrer"},Ht=t("td",{style:{"text-align":"center"}},"1964",-1),Jt=t("td",{style:{"text-align":"left"}},"找出到每个位置为止最长的有效障碍赛跑路线",-1),Pt=t("td",{style:{"text-align":"center"}},null,-1),Qt={style:{"text-align":"left"}},Ut=t("code",null,"树状数组",-1),Wt=t("code",null,"数组",-1),Xt=t("code",null,"二分查找",-1),Yt=t("td",{style:{"text-align":"center"}},"🔴",-1),Zt={style:{"text-align":"center"}},$t={href:"https://leetcode.cn/problems/find-the-longest-valid-obstacle-course-at-each-position",target:"_blank",rel:"noopener noreferrer"},te={href:"https://leetcode.com/problems/find-the-longest-valid-obstacle-course-at-each-position",target:"_blank",rel:"noopener noreferrer"},ee=t("td",{style:{"text-align":"center"}},"2111",-1),ne=t("td",{style:{"text-align":"left"}},"使数组 K 递增的最少操作次数",-1),se=t("td",{style:{"text-align":"center"}},null,-1),oe={style:{"text-align":"left"}},ae=t("code",null,"数组",-1),le=t("code",null,"二分查找",-1),ce=t("td",{style:{"text-align":"center"}},"🔴",-1),ie={style:{"text-align":"center"}},re={href:"https://leetcode.cn/problems/minimum-operations-to-make-the-array-k-increasing",target:"_blank",rel:"noopener noreferrer"},de={href:"https://leetcode.com/problems/minimum-operations-to-make-the-array-k-increasing",target:"_blank",rel:"noopener noreferrer"},ue=t("td",{style:{"text-align":"center"}},"2355",-1),pe=t("td",{style:{"text-align":"left"}},"你能拿走的最大图书数量 🔒",-1),_e=t("td",{style:{"text-align":"center"}},null,-1),he={style:{"text-align":"left"}},me=t("code",null,"栈",-1),ge=t("code",null,"数组",-1),ke=t("code",null,"动态规划",-1),fe=t("code",null,"1+",-1),be=t("td",{style:{"text-align":"center"}},"🔴",-1),ye={style:{"text-align":"center"}},xe={href:"https://leetcode.cn/problems/maximum-number-of-books-you-can-take",target:"_blank",rel:"noopener noreferrer"},ve={href:"https://leetcode.com/problems/maximum-number-of-books-you-can-take",target:"_blank",rel:"noopener noreferrer"},we=t("td",{style:{"text-align":"center"}},"2370",-1),qe=t("td",{style:{"text-align":"left"}},"最长理想子序列",-1),Ie=t("td",{style:{"text-align":"center"}},null,-1),je={style:{"text-align":"left"}},Oe=t("code",null,"哈希表",-1),Ce=t("code",null,"字符串",-1),Ee=t("code",null,"动态规划",-1),Le=t("td",{style:{"text-align":"center"}},"🟠",-1),Ae={style:{"text-align":"center"}},Me={href:"https://leetcode.cn/problems/longest-ideal-subsequence",target:"_blank",rel:"noopener noreferrer"},Ne={href:"https://leetcode.com/problems/longest-ideal-subsequence",target:"_blank",rel:"noopener noreferrer"},Ve=t("td",{style:{"text-align":"center"}},"2407",-1),Se=t("td",{style:{"text-align":"left"}},"最长递增子序列 II",-1),Te=t("td",{style:{"text-align":"center"}},null,-1),Be={style:{"text-align":"left"}},Re=t("code",null,"树状数组",-1),Fe=t("code",null,"线段树",-1),Ge=t("code",null,"队列",-1),Ke=t("code",null,"4+",-1),ze=t("td",{style:{"text-align":"center"}},"🔴",-1),De={style:{"text-align":"center"}},He={href:"https://leetcode.cn/problems/longest-increasing-subsequence-ii",target:"_blank",rel:"noopener noreferrer"},Je={href:"https://leetcode.com/problems/longest-increasing-subsequence-ii",target:"_blank",rel:"noopener noreferrer"},Pe=t("td",{style:{"text-align":"center"}},"3176",-1),Qe=t("td",{style:{"text-align":"left"}},"求出最长好子序列 I",-1),Ue=t("td",{style:{"text-align":"center"}},null,-1),We={style:{"text-align":"left"}},Xe=t("code",null,"数组",-1),Ye=t("code",null,"哈希表",-1),Ze=t("code",null,"动态规划",-1),$e=t("td",{style:{"text-align":"center"}},"🟠",-1),tn={style:{"text-align":"center"}},en={href:"https://leetcode.cn/problems/find-the-maximum-length-of-a-good-subsequence-i",target:"_blank",rel:"noopener noreferrer"},nn={href:"https://leetcode.com/problems/find-the-maximum-length-of-a-good-subsequence-i",target:"_blank",rel:"noopener noreferrer"},sn=t("td",{style:{"text-align":"center"}},"3177",-1),on=t("td",{style:{"text-align":"left"}},"求出最长好子序列 II",-1),an=t("td",{style:{"text-align":"center"}},null,-1),ln={style:{"text-align":"left"}},cn=t("code",null,"数组",-1),rn=t("code",null,"哈希表",-1),dn=t("code",null,"动态规划",-1),un=t("td",{style:{"text-align":"center"}},"🔴",-1),pn={style:{"text-align":"center"}},_n={href:"https://leetcode.cn/problems/find-the-maximum-length-of-a-good-subsequence-ii",target:"_blank",rel:"noopener noreferrer"},hn={href:"https://leetcode.com/problems/find-the-maximum-length-of-a-good-subsequence-ii",target:"_blank",rel:"noopener noreferrer"},mn=t("td",{style:{"text-align":"center"}},"3201",-1),gn=t("td",{style:{"text-align":"left"}},"找出有效子序列的最大长度 I",-1),kn=t("td",{style:{"text-align":"center"}},null,-1),fn={style:{"text-align":"left"}},bn=t("code",null,"数组",-1),yn=t("code",null,"动态规划",-1),xn=t("td",{style:{"text-align":"center"}},"🟠",-1),vn={style:{"text-align":"center"}},wn={href:"https://leetcode.cn/problems/find-the-maximum-length-of-valid-subsequence-i",target:"_blank",rel:"noopener noreferrer"},qn={href:"https://leetcode.com/problems/find-the-maximum-length-of-valid-subsequence-i",target:"_blank",rel:"noopener noreferrer"},In=t("td",{style:{"text-align":"center"}},"3202",-1),jn=t("td",{style:{"text-align":"left"}},"找出有效子序列的最大长度 II",-1),On=t("td",{style:{"text-align":"center"}},null,-1),Cn={style:{"text-align":"left"}},En=t("code",null,"数组",-1),Ln=t("code",null,"动态规划",-1),An=t("td",{style:{"text-align":"center"}},"🟠",-1),Mn={style:{"text-align":"center"}},Nn={href:"https://leetcode.cn/problems/find-the-maximum-length-of-valid-subsequence-ii",target:"_blank",rel:"noopener noreferrer"},Vn={href:"https://leetcode.com/problems/find-the-maximum-length-of-valid-subsequence-ii",target:"_blank",rel:"noopener noreferrer"};function Sn(Tn,Bn){const r=l("font"),o=l("RouterLink"),a=l("ExternalLinkIcon"),d=l("CodeTabs");return p(),_("div",null,[k,t("p",null,[e("🟠 "),n(r,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1}),e("  🔖  "),n(o,{to:"/tag/array.html"},{default:s(()=>[f]),_:1}),e(),n(o,{to:"/tag/binary-search.html"},{default:s(()=>[b]),_:1}),e(),n(o,{to:"/tag/dynamic-programming.html"},{default:s(()=>[y]),_:1}),e("  🔗 "),t("a",x,[v,n(a)]),e(),t("a",w,[q,n(a)])]),I,n(d,{id:"260",data:[{id:"动态规划"},{id:"二分查找"}]},{title0:s(({value:c,isActive:i})=>[e("动态规划")]),title1:s(({value:c,isActive:i})=>[e("二分查找")]),tab0:s(({value:c,isActive:i})=>[j]),tab1:s(({value:c,isActive:i})=>[O]),_:1}),C,h(" prettier-ignore "),t("table",null,[E,t("tbody",null,[t("tr",null,[L,A,t("td",M,[n(o,{to:"/problem/0334.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",N,[n(o,{to:"/tag/greedy.html"},{default:s(()=>[V]),_:1}),e(),n(o,{to:"/tag/array.html"},{default:s(()=>[S]),_:1})]),T,t("td",B,[t("a",R,[e("🀄️"),n(a)]),e(),t("a",F,[e("🔗"),n(a)])])]),t("tr",null,[G,K,t("td",z,[n(o,{to:"/problem/0354.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",D,[n(o,{to:"/tag/array.html"},{default:s(()=>[H]),_:1}),e(),n(o,{to:"/tag/binary-search.html"},{default:s(()=>[J]),_:1}),e(),n(o,{to:"/tag/dynamic-programming.html"},{default:s(()=>[P]),_:1}),e(),Q]),U,t("td",W,[t("a",X,[e("🀄️"),n(a)]),e(),t("a",Y,[e("🔗"),n(a)])])]),t("tr",null,[Z,$,tt,t("td",et,[n(o,{to:"/tag/greedy.html"},{default:s(()=>[nt]),_:1}),e(),n(o,{to:"/tag/array.html"},{default:s(()=>[st]),_:1}),e(),n(o,{to:"/tag/dynamic-programming.html"},{default:s(()=>[ot]),_:1}),e(),at]),lt,t("td",ct,[t("a",it,[e("🀄️"),n(a)]),e(),t("a",rt,[e("🔗"),n(a)])])]),t("tr",null,[dt,ut,pt,t("td",_t,[n(o,{to:"/tag/binary-indexed-tree.html"},{default:s(()=>[ht]),_:1}),e(),n(o,{to:"/tag/segment-tree.html"},{default:s(()=>[mt]),_:1}),e(),n(o,{to:"/tag/array.html"},{default:s(()=>[gt]),_:1}),e(),kt]),ft,t("td",bt,[t("a",yt,[e("🀄️"),n(a)]),e(),t("a",xt,[e("🔗"),n(a)])])]),t("tr",null,[vt,wt,t("td",qt,[n(o,{to:"/problem/0712.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",It,[n(o,{to:"/tag/string.html"},{default:s(()=>[jt]),_:1}),e(),n(o,{to:"/tag/dynamic-programming.html"},{default:s(()=>[Ot]),_:1})]),Ct,t("td",Et,[t("a",Lt,[e("🀄️"),n(a)]),e(),t("a",At,[e("🔗"),n(a)])])]),t("tr",null,[Mt,Nt,t("td",Vt,[n(o,{to:"/problem/1671.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",St,[n(o,{to:"/tag/greedy.html"},{default:s(()=>[Tt]),_:1}),e(),n(o,{to:"/tag/array.html"},{default:s(()=>[Bt]),_:1}),e(),n(o,{to:"/tag/binary-search.html"},{default:s(()=>[Rt]),_:1}),e(),Ft]),Gt,t("td",Kt,[t("a",zt,[e("🀄️"),n(a)]),e(),t("a",Dt,[e("🔗"),n(a)])])]),t("tr",null,[Ht,Jt,Pt,t("td",Qt,[n(o,{to:"/tag/binary-indexed-tree.html"},{default:s(()=>[Ut]),_:1}),e(),n(o,{to:"/tag/array.html"},{default:s(()=>[Wt]),_:1}),e(),n(o,{to:"/tag/binary-search.html"},{default:s(()=>[Xt]),_:1})]),Yt,t("td",Zt,[t("a",$t,[e("🀄️"),n(a)]),e(),t("a",te,[e("🔗"),n(a)])])]),t("tr",null,[ee,ne,se,t("td",oe,[n(o,{to:"/tag/array.html"},{default:s(()=>[ae]),_:1}),e(),n(o,{to:"/tag/binary-search.html"},{default:s(()=>[le]),_:1})]),ce,t("td",ie,[t("a",re,[e("🀄️"),n(a)]),e(),t("a",de,[e("🔗"),n(a)])])]),t("tr",null,[ue,pe,_e,t("td",he,[n(o,{to:"/tag/stack.html"},{default:s(()=>[me]),_:1}),e(),n(o,{to:"/tag/array.html"},{default:s(()=>[ge]),_:1}),e(),n(o,{to:"/tag/dynamic-programming.html"},{default:s(()=>[ke]),_:1}),e(),fe]),be,t("td",ye,[t("a",xe,[e("🀄️"),n(a)]),e(),t("a",ve,[e("🔗"),n(a)])])]),t("tr",null,[we,qe,Ie,t("td",je,[n(o,{to:"/tag/hash-table.html"},{default:s(()=>[Oe]),_:1}),e(),n(o,{to:"/tag/string.html"},{default:s(()=>[Ce]),_:1}),e(),n(o,{to:"/tag/dynamic-programming.html"},{default:s(()=>[Ee]),_:1})]),Le,t("td",Ae,[t("a",Me,[e("🀄️"),n(a)]),e(),t("a",Ne,[e("🔗"),n(a)])])]),t("tr",null,[Ve,Se,Te,t("td",Be,[n(o,{to:"/tag/binary-indexed-tree.html"},{default:s(()=>[Re]),_:1}),e(),n(o,{to:"/tag/segment-tree.html"},{default:s(()=>[Fe]),_:1}),e(),n(o,{to:"/tag/queue.html"},{default:s(()=>[Ge]),_:1}),e(),Ke]),ze,t("td",De,[t("a",He,[e("🀄️"),n(a)]),e(),t("a",Je,[e("🔗"),n(a)])])]),t("tr",null,[Pe,Qe,Ue,t("td",We,[n(o,{to:"/tag/array.html"},{default:s(()=>[Xe]),_:1}),e(),n(o,{to:"/tag/hash-table.html"},{default:s(()=>[Ye]),_:1}),e(),n(o,{to:"/tag/dynamic-programming.html"},{default:s(()=>[Ze]),_:1})]),$e,t("td",tn,[t("a",en,[e("🀄️"),n(a)]),e(),t("a",nn,[e("🔗"),n(a)])])]),t("tr",null,[sn,on,an,t("td",ln,[n(o,{to:"/tag/array.html"},{default:s(()=>[cn]),_:1}),e(),n(o,{to:"/tag/hash-table.html"},{default:s(()=>[rn]),_:1}),e(),n(o,{to:"/tag/dynamic-programming.html"},{default:s(()=>[dn]),_:1})]),un,t("td",pn,[t("a",_n,[e("🀄️"),n(a)]),e(),t("a",hn,[e("🔗"),n(a)])])]),t("tr",null,[mn,gn,kn,t("td",fn,[n(o,{to:"/tag/array.html"},{default:s(()=>[bn]),_:1}),e(),n(o,{to:"/tag/dynamic-programming.html"},{default:s(()=>[yn]),_:1})]),xn,t("td",vn,[t("a",wn,[e("🀄️"),n(a)]),e(),t("a",qn,[e("🔗"),n(a)])])]),t("tr",null,[In,jn,On,t("td",Cn,[n(o,{to:"/tag/array.html"},{default:s(()=>[En]),_:1}),e(),n(o,{to:"/tag/dynamic-programming.html"},{default:s(()=>[Ln]),_:1})]),An,t("td",Mn,[t("a",Nn,[e("🀄️"),n(a)]),e(),t("a",Vn,[e("🔗"),n(a)])])])])])])}const Fn=u(g,[["render",Sn],["__file","0300.html.vue"]]);export{Fn as default};
