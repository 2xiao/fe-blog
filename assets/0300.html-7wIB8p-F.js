import{_ as u,r as c,o as p,c as _,a as t,b as e,d as n,w as s,f as h,e as m}from"./app-OX-nYmHS.js";const k={},g=t("h1",{id:"_300-最长递增子序列",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_300-最长递增子序列","aria-hidden":"true"},"#"),e(" 300. 最长递增子序列")],-1),f=t("code",null,"数组",-1),b=t("code",null,"二分查找",-1),y=t("code",null,"动态规划",-1),x={href:"https://leetcode.cn/problems/longest-increasing-subsequence",target:"_blank",rel:"noopener noreferrer"},v=t("code",null,"力扣",-1),w={href:"https://leetcode.com/problems/longest-increasing-subsequence",target:"_blank",rel:"noopener noreferrer"},q=t("code",null,"LeetCode",-1),I=m('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an integer array <code>nums</code>, return <em>the length of the longest <strong>strictly increasing</strong></em> _ <strong>subsequence</strong>_.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [10,9,2,5,3,7,101,18]</p><p>Output: 4</p><p>Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [0,1,0,3,2,3]</p><p>Output: 4</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: nums = [7,7,7,7,7,7,7]</p><p>Output: 1</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 2500</code></li><li><code>-10^4 &lt;= nums[i] &lt;= 10^4</code></li></ul><p><strong>Follow up:</strong> Can you come up with an algorithm that runs in <code>O(n log(n))</code> time complexity?</p><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个整数数组 <code>nums</code> ，找到其中最长严格递增子序列的长度。</p><p><strong>子序列</strong> 是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，<code>[3,6,2,7]</code> 是数组 <code>[0,3,1,6,2,2,7]</code> 的子序列。</p><p><strong>进阶：</strong></p><p>你能将算法的时间复杂度降低到 <code>O(n logn)</code> 吗?</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-动态规划" tabindex="-1"><a class="header-anchor" href="#思路一-动态规划" aria-hidden="true">#</a> 思路一：动态规划</h3><p>可以使用动态规划来解决:</p><ul><li>创建一个长度为 <code>n</code> 的数组 <code>dp</code>，其中 <code>dp[i]</code> 表示以第 <code>i</code> 个元素为结尾的最长递增子序列的长度。</li><li>初始化 <code>dp</code> 数组的所有元素为 1，因为每个元素自身也是一个长度为 1 的递增子序列。</li><li>对于每个位置 <code>i</code>，遍历 <code>0</code> 到 <code>i-1</code> 的所有位置，如果 <code>nums[i] &gt; nums[j]</code>，说明 <code>nums[i]</code> 可以接在 <code>nums[j]</code> 后面构成一个更长的递增子序列，更新 <code>dp[i] = Math.max(dp[i], dp[j] + 1)</code>。</li><li>最终，<code>dp</code> 数组中的最大值即为所求的最长递增子序列的长度。</li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>: <code>O(n^2)</code> ，其中 <code>n</code> 是数组 <code>nums</code> 的长度。主要的时间复杂度来自于两层嵌套的循环，外层循环遍历数组中的每个元素，而内层循环在每次外层循环中都遍历了之前的所有元素。</li><li><strong>空间复杂度</strong>: <code>O(n)</code>，使用了一个长度为 <code>n</code> 的数组来存储中间状态。</li></ul><hr><h3 id="思路二-二分查找" tabindex="-1"><a class="header-anchor" href="#思路二-二分查找" aria-hidden="true">#</a> 思路二：二分查找</h3><p>使用二分查找优化最长递增子序列问题，主要利用了一个辅助数组 <code>tails</code>。这个数组在遍历过程中，始终保持递增的状态。辅助数组 <code>tails</code> 的长度 <code>len</code> 表示当前已经找到的最长递增子序列的长度。二分查找的过程如下：</p><ol><li><p><strong>初始化左右指针：</strong></p><ul><li>初始时，<code>left</code> 指向 0，<code>right</code> 指向 <code>len</code>。</li></ul></li><li><p><strong>开始二分查找：</strong></p><ul><li>在当前的辅助数组 <code>tails</code> 中进行二分查找，找到第一个大于等于 <code>nums[i]</code> 的位置。用 <code>mid</code> 表示二分查找中间位置。</li><li>如果 <code>tails[mid] &lt; nums[i]</code>，说明当前的递增子序列可以继续延长，因此更新 <code>left = mid + 1</code>。</li><li>否则，说明当前递增子序列需要进行调整，因此更新 <code>right = mid</code>。</li></ul></li><li><p><strong>更新辅助数组：</strong></p><ul><li>如果 <code>left === len</code>，说明 <code>nums[i]</code> 大于当前递增子序列的所有元素，将 <code>nums[i]</code> 添加到辅助数组的末尾，并且递增子序列的长度 <code>len++</code>。</li><li>否则，将 <code>nums[i]</code> 替换掉辅助数组中第一个大于等于 <code>nums[i]</code> 的元素。</li></ul></li><li><p><strong>迭代下一个元素：</strong></p><ul><li>重复上述过程，直到遍历完整个数组 <code>nums</code>。</li></ul></li><li><p><strong>最终结果：</strong></p><ul><li>辅助数组的长度 <code>len</code> 即为最长递增子序列的长度。</li></ul></li></ol><p>举一个具体的示例来说明：</p><p>假设 <code>nums = [10, 9, 2, 5, 3, 7, 101, 18]</code>。</p><ul><li>初始化时，辅助数组 <code>tails</code> 为空，<code>len = 0</code>。</li><li>当处理元素 <code>nums[0] = 10</code> 时，<code>tails</code> 为空，将 <code>10</code> 加入到 <code>tails</code>，<code>len</code> 变为 <code>1</code>。</li><li>当处理元素 <code>nums[1] = 9</code> 时，通过二分查找在 <code>tails</code> 中找到第一个大于等于 <code>9</code> 的位置，将 <code>tails[0]</code> 替换为 <code>9</code>。</li><li>依此类推，处理完整个数组后，<code>tails</code> 为 <code>[2, 3, 7, 18]</code>，<code>len = 4</code>，最终结果为 <code>4</code>。</li></ul><p>这种方法的核心在于通过二分查找，高效地维护了一个递增的辅助数组，从而在保证正确性的同时降低时间复杂度到 <code>O(n logn)</code>。</p><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>: <code>O(n logn)</code> ，其中 <code>n</code> 是数组 <code>nums</code> 的长度。</li><li><strong>空间复杂度</strong>: <code>O(len)</code>，其中 <code>len</code> 是最长递增子序列的长度，使用了一个长度最长为 <code>len</code> 的辅助数组。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',33),j=t("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[t("pre",{class:"language-javascript"},[t("code",null,[t("span",{class:"token doc-comment comment"},[e(`/**
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
`)])]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"})])],-1),M=t("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[t("pre",{class:"language-javascript"},[t("code",null,[t("span",{class:"token doc-comment comment"},[e(`/**
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
`)])]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"})])],-1),O=t("h2",{id:"相关题目",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),e(" 相关题目")],-1),C=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"left"}},"难度")])],-1),E=t("td",{style:{"text-align":"center"}},"334",-1),H={style:{"text-align":"left"}},L={href:"https://leetcode.com/problems/increasing-triplet-subsequence",target:"_blank",rel:"noopener noreferrer"},A={style:{"text-align":"center"}},N={style:{"text-align":"left"}},V=t("code",null,"贪心",-1),S=t("code",null,"数组",-1),T={style:{"text-align":"left"}},B=t("td",{style:{"text-align":"center"}},"354",-1),R={style:{"text-align":"left"}},F={href:"https://leetcode.com/problems/russian-doll-envelopes",target:"_blank",rel:"noopener noreferrer"},G={style:{"text-align":"center"}},K={style:{"text-align":"left"}},z=t("code",null,"数组",-1),D=t("code",null,"二分查找",-1),J=t("code",null,"动态规划",-1),P=t("code",null,"1+",-1),Q={style:{"text-align":"left"}},U=t("td",{style:{"text-align":"center"}},"646",-1),W={style:{"text-align":"left"}},X={href:"https://leetcode.com/problems/maximum-length-of-pair-chain",target:"_blank",rel:"noopener noreferrer"},Y=t("td",{style:{"text-align":"center"}},null,-1),Z={style:{"text-align":"left"}},$=t("code",null,"贪心",-1),tt=t("code",null,"数组",-1),et=t("code",null,"动态规划",-1),nt=t("code",null,"1+",-1),st={style:{"text-align":"left"}},ot=t("td",{style:{"text-align":"center"}},"673",-1),at={style:{"text-align":"left"}},lt={href:"https://leetcode.com/problems/number-of-longest-increasing-subsequence",target:"_blank",rel:"noopener noreferrer"},ct=t("td",{style:{"text-align":"center"}},null,-1),it={style:{"text-align":"left"}},dt=t("code",null,"树状数组",-1),rt=t("code",null,"线段树",-1),ut=t("code",null,"数组",-1),pt=t("code",null,"1+",-1),_t={style:{"text-align":"left"}},ht=t("td",{style:{"text-align":"center"}},"712",-1),mt={style:{"text-align":"left"}},kt={href:"https://leetcode.com/problems/minimum-ascii-delete-sum-for-two-strings",target:"_blank",rel:"noopener noreferrer"},gt={style:{"text-align":"center"}},ft={style:{"text-align":"left"}},bt=t("code",null,"字符串",-1),yt=t("code",null,"动态规划",-1),xt={style:{"text-align":"left"}},vt=t("td",{style:{"text-align":"center"}},"1671",-1),wt={style:{"text-align":"left"}},qt={href:"https://leetcode.com/problems/minimum-number-of-removals-to-make-mountain-array",target:"_blank",rel:"noopener noreferrer"},It={style:{"text-align":"center"}},jt={style:{"text-align":"left"}},Mt=t("code",null,"贪心",-1),Ot=t("code",null,"数组",-1),Ct=t("code",null,"二分查找",-1),Et=t("code",null,"1+",-1),Ht={style:{"text-align":"left"}},Lt=t("td",{style:{"text-align":"center"}},"1964",-1),At={style:{"text-align":"left"}},Nt={href:"https://leetcode.com/problems/find-the-longest-valid-obstacle-course-at-each-position",target:"_blank",rel:"noopener noreferrer"},Vt=t("td",{style:{"text-align":"center"}},null,-1),St={style:{"text-align":"left"}},Tt=t("code",null,"树状数组",-1),Bt=t("code",null,"数组",-1),Rt=t("code",null,"二分查找",-1),Ft={style:{"text-align":"left"}},Gt=t("td",{style:{"text-align":"center"}},"2111",-1),Kt={style:{"text-align":"left"}},zt={href:"https://leetcode.com/problems/minimum-operations-to-make-the-array-k-increasing",target:"_blank",rel:"noopener noreferrer"},Dt=t("td",{style:{"text-align":"center"}},null,-1),Jt={style:{"text-align":"left"}},Pt=t("code",null,"数组",-1),Qt=t("code",null,"二分查找",-1),Ut={style:{"text-align":"left"}},Wt=t("td",{style:{"text-align":"center"}},"2355",-1),Xt={style:{"text-align":"left"}},Yt={href:"https://leetcode.com/problems/maximum-number-of-books-you-can-take",target:"_blank",rel:"noopener noreferrer"},Zt=t("td",{style:{"text-align":"center"}},null,-1),$t={style:{"text-align":"left"}},te=t("code",null,"栈",-1),ee=t("code",null,"数组",-1),ne=t("code",null,"动态规划",-1),se=t("code",null,"1+",-1),oe={style:{"text-align":"left"}},ae=t("td",{style:{"text-align":"center"}},"2370",-1),le={style:{"text-align":"left"}},ce={href:"https://leetcode.com/problems/longest-ideal-subsequence",target:"_blank",rel:"noopener noreferrer"},ie=t("td",{style:{"text-align":"center"}},null,-1),de={style:{"text-align":"left"}},re=t("code",null,"哈希表",-1),ue=t("code",null,"字符串",-1),pe=t("code",null,"动态规划",-1),_e={style:{"text-align":"left"}},he=t("td",{style:{"text-align":"center"}},"2407",-1),me={style:{"text-align":"left"}},ke={href:"https://leetcode.com/problems/longest-increasing-subsequence-ii",target:"_blank",rel:"noopener noreferrer"},ge=t("td",{style:{"text-align":"center"}},null,-1),fe={style:{"text-align":"left"}},be=t("code",null,"树状数组",-1),ye=t("code",null,"线段树",-1),xe=t("code",null,"队列",-1),ve=t("code",null,"4+",-1),we={style:{"text-align":"left"}},qe=t("td",{style:{"text-align":"center"}},"3176",-1),Ie={style:{"text-align":"left"}},je={href:"https://leetcode.com/problems/find-the-maximum-length-of-a-good-subsequence-i",target:"_blank",rel:"noopener noreferrer"},Me=t("td",{style:{"text-align":"center"}},null,-1),Oe={style:{"text-align":"left"}},Ce=t("code",null,"数组",-1),Ee=t("code",null,"哈希表",-1),He=t("code",null,"动态规划",-1),Le={style:{"text-align":"left"}},Ae=t("td",{style:{"text-align":"center"}},"3177",-1),Ne={style:{"text-align":"left"}},Ve={href:"https://leetcode.com/problems/find-the-maximum-length-of-a-good-subsequence-ii",target:"_blank",rel:"noopener noreferrer"},Se=t("td",{style:{"text-align":"center"}},null,-1),Te={style:{"text-align":"left"}},Be=t("code",null,"数组",-1),Re=t("code",null,"哈希表",-1),Fe=t("code",null,"动态规划",-1),Ge={style:{"text-align":"left"}},Ke=t("td",{style:{"text-align":"center"}},"3201",-1),ze={style:{"text-align":"left"}},De={href:"https://leetcode.com/problems/find-the-maximum-length-of-valid-subsequence-i",target:"_blank",rel:"noopener noreferrer"},Je=t("td",{style:{"text-align":"center"}},null,-1),Pe={style:{"text-align":"left"}},Qe=t("code",null,"数组",-1),Ue=t("code",null,"动态规划",-1),We={style:{"text-align":"left"}},Xe=t("td",{style:{"text-align":"center"}},"3202",-1),Ye={style:{"text-align":"left"}},Ze={href:"https://leetcode.com/problems/find-the-maximum-length-of-valid-subsequence-ii",target:"_blank",rel:"noopener noreferrer"},$e=t("td",{style:{"text-align":"center"}},null,-1),tn={style:{"text-align":"left"}},en=t("code",null,"数组",-1),nn=t("code",null,"动态规划",-1),sn={style:{"text-align":"left"}};function on(an,ln){const l=c("font"),o=c("RouterLink"),a=c("ExternalLinkIcon"),r=c("CodeTabs");return p(),_("div",null,[g,t("p",null,[e("🟠 "),n(l,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1}),e("  🔖  "),n(o,{to:"/tag/array.html"},{default:s(()=>[f]),_:1}),e(),n(o,{to:"/tag/binary-search.html"},{default:s(()=>[b]),_:1}),e(),n(o,{to:"/tag/dynamic-programming.html"},{default:s(()=>[y]),_:1}),e("  🔗 "),t("a",x,[v,n(a)]),e(),t("a",w,[q,n(a)])]),I,n(r,{id:"260",data:[{id:"动态规划"},{id:"二分查找"}]},{title0:s(({value:i,isActive:d})=>[e("动态规划")]),title1:s(({value:i,isActive:d})=>[e("二分查找")]),tab0:s(({value:i,isActive:d})=>[j]),tab1:s(({value:i,isActive:d})=>[M]),_:1}),O,h(" prettier-ignore "),t("table",null,[C,t("tbody",null,[t("tr",null,[E,t("td",H,[t("a",L,[e("递增的三元子序列"),n(a)])]),t("td",A,[n(o,{to:"/problem/0334.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",N,[n(o,{to:"/tag/greedy.html"},{default:s(()=>[V]),_:1}),e(),n(o,{to:"/tag/array.html"},{default:s(()=>[S]),_:1})]),t("td",T,[n(l,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1})])]),t("tr",null,[B,t("td",R,[t("a",F,[e("俄罗斯套娃信封问题"),n(a)])]),t("td",G,[n(o,{to:"/problem/0354.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",K,[n(o,{to:"/tag/array.html"},{default:s(()=>[z]),_:1}),e(),n(o,{to:"/tag/binary-search.html"},{default:s(()=>[D]),_:1}),e(),n(o,{to:"/tag/dynamic-programming.html"},{default:s(()=>[J]),_:1}),e(),P]),t("td",Q,[n(l,{color:"#ff334b"},{default:s(()=>[e("Hard")]),_:1})])]),t("tr",null,[U,t("td",W,[t("a",X,[e("最长数对链"),n(a)])]),Y,t("td",Z,[n(o,{to:"/tag/greedy.html"},{default:s(()=>[$]),_:1}),e(),n(o,{to:"/tag/array.html"},{default:s(()=>[tt]),_:1}),e(),n(o,{to:"/tag/dynamic-programming.html"},{default:s(()=>[et]),_:1}),e(),nt]),t("td",st,[n(l,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1})])]),t("tr",null,[ot,t("td",at,[t("a",lt,[e("最长递增子序列的个数"),n(a)])]),ct,t("td",it,[n(o,{to:"/tag/binary-indexed-tree.html"},{default:s(()=>[dt]),_:1}),e(),n(o,{to:"/tag/segment-tree.html"},{default:s(()=>[rt]),_:1}),e(),n(o,{to:"/tag/array.html"},{default:s(()=>[ut]),_:1}),e(),pt]),t("td",_t,[n(l,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1})])]),t("tr",null,[ht,t("td",mt,[t("a",kt,[e("两个字符串的最小ASCII删除和"),n(a)])]),t("td",gt,[n(o,{to:"/problem/0712.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",ft,[n(o,{to:"/tag/string.html"},{default:s(()=>[bt]),_:1}),e(),n(o,{to:"/tag/dynamic-programming.html"},{default:s(()=>[yt]),_:1})]),t("td",xt,[n(l,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1})])]),t("tr",null,[vt,t("td",wt,[t("a",qt,[e("得到山形数组的最少删除次数"),n(a)])]),t("td",It,[n(o,{to:"/problem/1671.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",jt,[n(o,{to:"/tag/greedy.html"},{default:s(()=>[Mt]),_:1}),e(),n(o,{to:"/tag/array.html"},{default:s(()=>[Ot]),_:1}),e(),n(o,{to:"/tag/binary-search.html"},{default:s(()=>[Ct]),_:1}),e(),Et]),t("td",Ht,[n(l,{color:"#ff334b"},{default:s(()=>[e("Hard")]),_:1})])]),t("tr",null,[Lt,t("td",At,[t("a",Nt,[e("找出到每个位置为止最长的有效障碍赛跑路线"),n(a)])]),Vt,t("td",St,[n(o,{to:"/tag/binary-indexed-tree.html"},{default:s(()=>[Tt]),_:1}),e(),n(o,{to:"/tag/array.html"},{default:s(()=>[Bt]),_:1}),e(),n(o,{to:"/tag/binary-search.html"},{default:s(()=>[Rt]),_:1})]),t("td",Ft,[n(l,{color:"#ff334b"},{default:s(()=>[e("Hard")]),_:1})])]),t("tr",null,[Gt,t("td",Kt,[t("a",zt,[e("使数组 K 递增的最少操作次数"),n(a)])]),Dt,t("td",Jt,[n(o,{to:"/tag/array.html"},{default:s(()=>[Pt]),_:1}),e(),n(o,{to:"/tag/binary-search.html"},{default:s(()=>[Qt]),_:1})]),t("td",Ut,[n(l,{color:"#ff334b"},{default:s(()=>[e("Hard")]),_:1})])]),t("tr",null,[Wt,t("td",Xt,[t("a",Yt,[e("你能拿走的最大图书数量 🔒"),n(a)])]),Zt,t("td",$t,[n(o,{to:"/tag/stack.html"},{default:s(()=>[te]),_:1}),e(),n(o,{to:"/tag/array.html"},{default:s(()=>[ee]),_:1}),e(),n(o,{to:"/tag/dynamic-programming.html"},{default:s(()=>[ne]),_:1}),e(),se]),t("td",oe,[n(l,{color:"#ff334b"},{default:s(()=>[e("Hard")]),_:1})])]),t("tr",null,[ae,t("td",le,[t("a",ce,[e("最长理想子序列"),n(a)])]),ie,t("td",de,[n(o,{to:"/tag/hash-table.html"},{default:s(()=>[re]),_:1}),e(),n(o,{to:"/tag/string.html"},{default:s(()=>[ue]),_:1}),e(),n(o,{to:"/tag/dynamic-programming.html"},{default:s(()=>[pe]),_:1})]),t("td",_e,[n(l,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1})])]),t("tr",null,[he,t("td",me,[t("a",ke,[e("最长递增子序列 II"),n(a)])]),ge,t("td",fe,[n(o,{to:"/tag/binary-indexed-tree.html"},{default:s(()=>[be]),_:1}),e(),n(o,{to:"/tag/segment-tree.html"},{default:s(()=>[ye]),_:1}),e(),n(o,{to:"/tag/queue.html"},{default:s(()=>[xe]),_:1}),e(),ve]),t("td",we,[n(l,{color:"#ff334b"},{default:s(()=>[e("Hard")]),_:1})])]),t("tr",null,[qe,t("td",Ie,[t("a",je,[e("求出最长好子序列 I"),n(a)])]),Me,t("td",Oe,[n(o,{to:"/tag/array.html"},{default:s(()=>[Ce]),_:1}),e(),n(o,{to:"/tag/hash-table.html"},{default:s(()=>[Ee]),_:1}),e(),n(o,{to:"/tag/dynamic-programming.html"},{default:s(()=>[He]),_:1})]),t("td",Le,[n(l,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1})])]),t("tr",null,[Ae,t("td",Ne,[t("a",Ve,[e("求出最长好子序列 II"),n(a)])]),Se,t("td",Te,[n(o,{to:"/tag/array.html"},{default:s(()=>[Be]),_:1}),e(),n(o,{to:"/tag/hash-table.html"},{default:s(()=>[Re]),_:1}),e(),n(o,{to:"/tag/dynamic-programming.html"},{default:s(()=>[Fe]),_:1})]),t("td",Ge,[n(l,{color:"#ff334b"},{default:s(()=>[e("Hard")]),_:1})])]),t("tr",null,[Ke,t("td",ze,[t("a",De,[e("找出有效子序列的最大长度 I"),n(a)])]),Je,t("td",Pe,[n(o,{to:"/tag/array.html"},{default:s(()=>[Qe]),_:1}),e(),n(o,{to:"/tag/dynamic-programming.html"},{default:s(()=>[Ue]),_:1})]),t("td",We,[n(l,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1})])]),t("tr",null,[Xe,t("td",Ye,[t("a",Ze,[e("找出有效子序列的最大长度 II"),n(a)])]),$e,t("td",tn,[n(o,{to:"/tag/array.html"},{default:s(()=>[en]),_:1}),e(),n(o,{to:"/tag/dynamic-programming.html"},{default:s(()=>[nn]),_:1})]),t("td",sn,[n(l,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1})])])])])])}const dn=u(k,[["render",on],["__file","0300.html.vue"]]);export{dn as default};
