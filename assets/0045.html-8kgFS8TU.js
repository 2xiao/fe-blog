import{_ as p,r as l,o as u,c as m,a as t,b as n,d as e,w as s,f as k,e as h}from"./app-5LzGvT4H.js";const _={},g=t("h1",{id:"_45-跳跃游戏-ii",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_45-跳跃游戏-ii","aria-hidden":"true"},"#"),n(" 45. 跳跃游戏 II")],-1),f=t("code",null,"贪心",-1),b=t("code",null,"数组",-1),y=t("code",null,"动态规划",-1),x={href:"https://leetcode.cn/problems/jump-game-ii",target:"_blank",rel:"noopener noreferrer"},v=t("code",null,"力扣",-1),j={href:"https://leetcode.com/problems/jump-game-ii",target:"_blank",rel:"noopener noreferrer"},w=t("code",null,"LeetCode",-1),I=h('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given a <strong>0-indexed</strong> array of integers <code>nums</code> of length <code>n</code>. You are initially positioned at <code>nums[0]</code>.</p><p>Each element <code>nums[i]</code> represents the maximum length of a forward jump from index <code>i</code>. In other words, if you are at <code>nums[i]</code>, you can jump to any <code>nums[i + j]</code> where:</p><ul><li><code>0 &lt;= j &lt;= nums[i]</code> and</li><li><code>i + j &lt; n</code></li></ul><p>Return <em>the minimum number of jumps to reach</em><code>nums[n - 1]</code>. The test cases are generated such that you can reach <code>nums[n - 1]</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [2,3,1,1,4]</p><p>Output: 2</p><p>Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [2,3,0,1,4]</p><p>Output: 2</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 10^4</code></li><li><code>0 &lt;= nums[i] &lt;= 1000</code></li><li>It&#39;s guaranteed that you can reach <code>nums[n - 1]</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个长度为 <code>n</code> 的 <code>0</code> 索引整数数组 <code>nums</code>。初始位置为 <code>nums[0]</code>。</p><p>每个元素 <code>nums[i]</code> 表示从索引 <code>i</code> 向前跳转的最大长度。换句话说，如果你在 <code>nums[i]</code> 处，你可以跳转到任意 <code>nums[i + j]</code> 处:</p><ul><li><code>0 &lt;= j &lt;= nums[i]</code></li><li><code>i + j &lt; n</code></li></ul><p>返回到达 <code>nums[n - 1]</code> 的最小跳跃次数。生成的测试用例可以到达 <code>nums[n - 1]</code>。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-贪心算法" tabindex="-1"><a class="header-anchor" href="#思路一-贪心算法" aria-hidden="true">#</a> 思路一：贪心算法</h3><p>贪心算法是一种通过在每一步选择中都采取当前状态下最优（即最有利）的选择，从而希望最终能够达到全局最优解的方法。</p><ol><li><p><strong>初始化</strong>：</p><ul><li>初始化两个变量 <code>maxPosition</code> 和 <code>end</code>，分别表示当前能够到达的最远位置和当前一步跳跃的结束位置，初始都为 0。</li><li>初始化变量 <code>steps</code> 用来记录跳跃次数，初始为 0。</li></ul></li><li><p><strong>贪心策略</strong>：</p><ul><li>在遍历数组的过程中，对于每个位置，更新 <code>maxPosition</code> 为当前位置能够到达的最远位置。</li><li>当遍历到达 <code>end</code> 位置时，表示当前一步跳跃已经结束，将步数 <code>steps</code> 加一，并且更新 <code>end</code> 为 <code>maxPosition</code>。</li><li>如果遍历完数组时已经到达或超过了最后一个位置，返回当前步数 <code>steps</code> 即可。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是数组的长度，只需要遍历数组一遍。</p></li><li><p><strong>空间复杂度</strong>：<code>O(1)</code>，使用了常数个变量才存储中间状态。</p></li></ul><hr><h3 id="思路二-动态规划" tabindex="-1"><a class="header-anchor" href="#思路二-动态规划" aria-hidden="true">#</a> 思路二：动态规划</h3><ol><li><p><strong>定义状态</strong>：<code>dp[i]</code> 表示从位置 <code>nums[i]</code> 跳到目标位置 <code>nums[n - 1]</code> 的最小跳跃次数。</p></li><li><p><strong>状态转移方程</strong>：</p><ul><li>对于每个位置 <code>nums[i]</code>，我们需要考虑从当前位置跳跃到下一个位置 <code>nums[i + j]</code> 的所有可能性，其中 <code>1 &lt;= j &lt;= nums[i]</code>。</li><li>对于每个可能的跳跃步数 <code>j</code>，我们更新 <code>dp[i]</code> 为 <code>1 + dp[i + j]</code>，表示从当前位置跳跃一次，加上从下一位置 <code>nums[i + j]</code> 跳到目标位置 <code>nums[n - 1]</code> 的最小跳跃次数。</li><li>最终，<code>dp[0]</code> 即为从起始位置 <code>nums[0]</code> 跳到目标位置 <code>nums[n - 1]</code> 的最小跳跃次数。</li></ul></li><li><p><strong>初始化</strong>：初始化数组 <code>dp</code>，长度为 <code>n</code>，初始值为 <code>n</code>，表示从任意位置跳到目标位置的最大跳跃次数为 <code>n</code>。最后一个位置到目标位置的距离为 0，所以 <code>dp[n - 1] = 0</code>。</p></li><li><p><strong>遍历求解</strong>：从数组倒数第二个位置开始向前遍历，更新 <code>dp[i]</code> 的值。</p></li><li><p><strong>返回结果</strong>：返回 <code>dp[0]</code>，即起始位置到目标位置的最小跳跃次数。</p></li></ol><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(n^2)</code>，其中 <code>n</code> 是数组的长度。这是因为在每个位置 <code>i</code>，我们需要考虑从当前位置跳跃到下一个位置的所有可能性，这可能需要遍历该位置能够跳跃的所有可能步数，这一过程的时间复杂度为 <code>O(nums[i])</code>，而数组共有 <code>n</code> 个位置，因此总的时间复杂度为 <code>O(n^2)</code>。</p></li><li><p><strong>空间复杂度</strong>：<code>O(n)</code>，因为我们使用了一个长度为 <code>n</code> 的数组 <code>dp</code> 来存储每个位置的最小跳跃次数。</p></li></ul><p>动态规划解法在时间复杂度上可能较高，因为对于每个位置都需要遍历其能够跳跃的所有可能步数，但它能够有效地求解问题并给出正确答案。</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',29),O=t("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[t("pre",{class:"language-javascript"},[t("code",null,[t("span",{class:"token doc-comment comment"},[n(`/**
 * `),t("span",{class:"token keyword"},"@param"),n(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),n("number"),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},"}")]),n(),t("span",{class:"token parameter"},"nums"),n(`
 * `),t("span",{class:"token keyword"},"@return"),n(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),n("number"),t("span",{class:"token punctuation"},"}")]),n(`
 */`)]),n(`
`),t("span",{class:"token keyword"},"var"),n(),t("span",{class:"token function-variable function"},"jump"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token keyword"},"function"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"nums"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
	`),t("span",{class:"token keyword"},"if"),n(),t("span",{class:"token punctuation"},"("),n("nums"),t("span",{class:"token punctuation"},"."),n("length "),t("span",{class:"token operator"},"==="),n(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
		`),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},";"),n(`
	`),t("span",{class:"token punctuation"},"}"),n(`

	`),t("span",{class:"token keyword"},"let"),n(" steps "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},";"),n(`
	`),t("span",{class:"token keyword"},"let"),n(" maxPosition "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},";"),n(`
	`),t("span",{class:"token keyword"},"let"),n(" end "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},";"),n(`

	`),t("span",{class:"token keyword"},"for"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token keyword"},"let"),n(" i "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},";"),n(" i "),t("span",{class:"token operator"},"<"),n(" nums"),t("span",{class:"token punctuation"},"."),n("length "),t("span",{class:"token operator"},"-"),n(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},";"),n(" i"),t("span",{class:"token operator"},"++"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
		maxPosition `),t("span",{class:"token operator"},"="),n(" Math"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"max"),t("span",{class:"token punctuation"},"("),n("maxPosition"),t("span",{class:"token punctuation"},","),n(" i "),t("span",{class:"token operator"},"+"),n(" nums"),t("span",{class:"token punctuation"},"["),n("i"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
		`),t("span",{class:"token keyword"},"if"),n(),t("span",{class:"token punctuation"},"("),n("i "),t("span",{class:"token operator"},"==="),n(" end"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
			steps`),t("span",{class:"token operator"},"++"),t("span",{class:"token punctuation"},";"),n(`
			end `),t("span",{class:"token operator"},"="),n(" maxPosition"),t("span",{class:"token punctuation"},";"),n(`
			`),t("span",{class:"token keyword"},"if"),n(),t("span",{class:"token punctuation"},"("),n("end "),t("span",{class:"token operator"},">="),n(" nums"),t("span",{class:"token punctuation"},"."),n("length "),t("span",{class:"token operator"},"-"),n(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
				`),t("span",{class:"token keyword"},"break"),t("span",{class:"token punctuation"},";"),n(`
			`),t("span",{class:"token punctuation"},"}"),n(`
		`),t("span",{class:"token punctuation"},"}"),n(`
	`),t("span",{class:"token punctuation"},"}"),n(`

	`),t("span",{class:"token keyword"},"return"),n(" steps"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"})])],-1),C=t("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[t("pre",{class:"language-javascript"},[t("code",null,[t("span",{class:"token doc-comment comment"},[n(`/**
 * `),t("span",{class:"token keyword"},"@param"),n(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),n("number"),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},"}")]),n(),t("span",{class:"token parameter"},"nums"),n(`
 * `),t("span",{class:"token keyword"},"@return"),n(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),n("number"),t("span",{class:"token punctuation"},"}")]),n(`
 */`)]),n(`
`),t("span",{class:"token keyword"},"var"),n(),t("span",{class:"token function-variable function"},"jump"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token keyword"},"function"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"nums"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
	`),t("span",{class:"token keyword"},"const"),n(" n "),t("span",{class:"token operator"},"="),n(" nums"),t("span",{class:"token punctuation"},"."),n("length"),t("span",{class:"token punctuation"},";"),n(`
	`),t("span",{class:"token comment"},"// dp[i] 代表从 nums[i] 跳到 nums[n - 1] 的最小跳跃次数"),n(`
	`),t("span",{class:"token keyword"},"let"),n(" dp "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token keyword"},"new"),n(),t("span",{class:"token class-name"},"Array"),t("span",{class:"token punctuation"},"("),n("n"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"fill"),t("span",{class:"token punctuation"},"("),n("n"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
	dp`),t("span",{class:"token punctuation"},"["),n("n "),t("span",{class:"token operator"},"-"),n(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},"]"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},";"),n(`
	`),t("span",{class:"token keyword"},"for"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token keyword"},"let"),n(" i "),t("span",{class:"token operator"},"="),n(" n "),t("span",{class:"token operator"},"-"),n(),t("span",{class:"token number"},"2"),t("span",{class:"token punctuation"},";"),n(" i "),t("span",{class:"token operator"},">="),n(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},";"),n(" i"),t("span",{class:"token operator"},"--"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
		`),t("span",{class:"token keyword"},"let"),n(" num "),t("span",{class:"token operator"},"="),n(" nums"),t("span",{class:"token punctuation"},"["),n("i"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";"),n(`
		`),t("span",{class:"token keyword"},"for"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token keyword"},"let"),n(" j "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},";"),n(" j "),t("span",{class:"token operator"},"<="),n(" num"),t("span",{class:"token punctuation"},";"),n(" j"),t("span",{class:"token operator"},"++"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token keyword"},"if"),n(),t("span",{class:"token punctuation"},"("),n("i "),t("span",{class:"token operator"},"+"),n(" j "),t("span",{class:"token operator"},"<="),n(" n "),t("span",{class:"token operator"},"-"),n(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
				dp`),t("span",{class:"token punctuation"},"["),n("i"),t("span",{class:"token punctuation"},"]"),n(),t("span",{class:"token operator"},"="),n(" Math"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"min"),t("span",{class:"token punctuation"},"("),t("span",{class:"token number"},"1"),n(),t("span",{class:"token operator"},"+"),n(" dp"),t("span",{class:"token punctuation"},"["),n("i "),t("span",{class:"token operator"},"+"),n(" j"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),n(" dp"),t("span",{class:"token punctuation"},"["),n("i"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
			`),t("span",{class:"token punctuation"},"}"),n(`
		`),t("span",{class:"token punctuation"},"}"),n(`
	`),t("span",{class:"token punctuation"},"}"),n(`
	`),t("span",{class:"token keyword"},"return"),n(" dp"),t("span",{class:"token punctuation"},"["),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"})])],-1),E=t("h2",{id:"相关题目",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),n(" 相关题目")],-1),P=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"left"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),V=t("td",{style:{"text-align":"center"}},"55",-1),A=t("td",{style:{"text-align":"left"}},"跳跃游戏",-1),L={style:{"text-align":"center"}},N={style:{"text-align":"left"}},T=t("code",null,"贪心",-1),q=t("code",null,"数组",-1),B=t("code",null,"动态规划",-1),M=t("td",{style:{"text-align":"left"}},"🟠",-1),R={style:{"text-align":"center"}},z={href:"https://leetcode.cn/problems/jump-game",target:"_blank",rel:"noopener noreferrer"},Y={href:"https://leetcode.com/problems/jump-game",target:"_blank",rel:"noopener noreferrer"},J=t("td",{style:{"text-align":"center"}},"1306",-1),S=t("td",{style:{"text-align":"left"}},"跳跃游戏 III",-1),D=t("td",{style:{"text-align":"center"}},null,-1),F={style:{"text-align":"left"}},G=t("code",null,"深度优先搜索",-1),H=t("code",null,"广度优先搜索",-1),K=t("code",null,"数组",-1),Q=t("td",{style:{"text-align":"left"}},"🟠",-1),U={style:{"text-align":"center"}},W={href:"https://leetcode.cn/problems/jump-game-iii",target:"_blank",rel:"noopener noreferrer"},X={href:"https://leetcode.com/problems/jump-game-iii",target:"_blank",rel:"noopener noreferrer"},Z=t("td",{style:{"text-align":"center"}},"1871",-1),$=t("td",{style:{"text-align":"left"}},"跳跃游戏 VII",-1),tt=t("td",{style:{"text-align":"center"}},null,-1),nt={style:{"text-align":"left"}},et=t("code",null,"字符串",-1),st=t("code",null,"动态规划",-1),ot=t("code",null,"前缀和",-1),at=t("code",null,"1+",-1),lt=t("td",{style:{"text-align":"left"}},"🟠",-1),ct={style:{"text-align":"center"}},it={href:"https://leetcode.cn/problems/jump-game-vii",target:"_blank",rel:"noopener noreferrer"},rt={href:"https://leetcode.com/problems/jump-game-vii",target:"_blank",rel:"noopener noreferrer"},dt=t("td",{style:{"text-align":"center"}},"2297",-1),pt=t("td",{style:{"text-align":"left"}},"跳跃游戏 VIII 🔒",-1),ut=t("td",{style:{"text-align":"center"}},null,-1),mt={style:{"text-align":"left"}},kt=t("code",null,"栈",-1),ht=t("code",null,"图",-1),_t=t("code",null,"数组",-1),gt=t("code",null,"3+",-1),ft=t("td",{style:{"text-align":"left"}},"🟠",-1),bt={style:{"text-align":"center"}},yt={href:"https://leetcode.cn/problems/jump-game-viii",target:"_blank",rel:"noopener noreferrer"},xt={href:"https://leetcode.com/problems/jump-game-viii",target:"_blank",rel:"noopener noreferrer"},vt=t("td",{style:{"text-align":"center"}},"2617",-1),jt=t("td",{style:{"text-align":"left"}},"网格图中最少访问的格子数",-1),wt=t("td",{style:{"text-align":"center"}},null,-1),It={style:{"text-align":"left"}},Ot=t("code",null,"栈",-1),Ct=t("code",null,"广度优先搜索",-1),Et=t("code",null,"并查集",-1),Pt=t("code",null,"5+",-1),Vt=t("td",{style:{"text-align":"left"}},"🔴",-1),At={style:{"text-align":"center"}},Lt={href:"https://leetcode.cn/problems/minimum-number-of-visited-cells-in-a-grid",target:"_blank",rel:"noopener noreferrer"},Nt={href:"https://leetcode.com/problems/minimum-number-of-visited-cells-in-a-grid",target:"_blank",rel:"noopener noreferrer"},Tt=t("td",{style:{"text-align":"center"}},"2770",-1),qt=t("td",{style:{"text-align":"left"}},"达到末尾下标所需的最大跳跃次数",-1),Bt=t("td",{style:{"text-align":"center"}},null,-1),Mt={style:{"text-align":"left"}},Rt=t("code",null,"数组",-1),zt=t("code",null,"动态规划",-1),Yt=t("td",{style:{"text-align":"left"}},"🟠",-1),Jt={style:{"text-align":"center"}},St={href:"https://leetcode.cn/problems/maximum-number-of-jumps-to-reach-the-last-index",target:"_blank",rel:"noopener noreferrer"},Dt={href:"https://leetcode.com/problems/maximum-number-of-jumps-to-reach-the-last-index",target:"_blank",rel:"noopener noreferrer"},Ft=t("td",{style:{"text-align":"center"}},"2786",-1),Gt=t("td",{style:{"text-align":"left"}},"访问数组中的位置使分数最大",-1),Ht=t("td",{style:{"text-align":"center"}},null,-1),Kt={style:{"text-align":"left"}},Qt=t("code",null,"数组",-1),Ut=t("code",null,"动态规划",-1),Wt=t("td",{style:{"text-align":"left"}},"🟠",-1),Xt={style:{"text-align":"center"}},Zt={href:"https://leetcode.cn/problems/visit-array-positions-to-maximize-score",target:"_blank",rel:"noopener noreferrer"},$t={href:"https://leetcode.com/problems/visit-array-positions-to-maximize-score",target:"_blank",rel:"noopener noreferrer"};function tn(nn,en){const r=l("font"),o=l("RouterLink"),a=l("ExternalLinkIcon"),d=l("CodeTabs");return u(),m("div",null,[g,t("p",null,[n("🟠 "),e(r,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1}),n("  🔖  "),e(o,{to:"/tag/greedy.html"},{default:s(()=>[f]),_:1}),n(),e(o,{to:"/tag/array.html"},{default:s(()=>[b]),_:1}),n(),e(o,{to:"/tag/dynamic-programming.html"},{default:s(()=>[y]),_:1}),n("  🔗 "),t("a",x,[v,e(a)]),n(),t("a",j,[w,e(a)])]),I,e(d,{id:"233",data:[{id:"贪心算法"},{id:"动态规划"}]},{title0:s(({value:c,isActive:i})=>[n("贪心算法")]),title1:s(({value:c,isActive:i})=>[n("动态规划")]),tab0:s(({value:c,isActive:i})=>[O]),tab1:s(({value:c,isActive:i})=>[C]),_:1}),E,k(" prettier-ignore "),t("table",null,[P,t("tbody",null,[t("tr",null,[V,A,t("td",L,[e(o,{to:"/problem/0055.html"},{default:s(()=>[n("[✓]")]),_:1})]),t("td",N,[e(o,{to:"/tag/greedy.html"},{default:s(()=>[T]),_:1}),n(),e(o,{to:"/tag/array.html"},{default:s(()=>[q]),_:1}),n(),e(o,{to:"/tag/dynamic-programming.html"},{default:s(()=>[B]),_:1})]),M,t("td",R,[t("a",z,[n("🀄️"),e(a)]),n(),t("a",Y,[n("🔗"),e(a)])])]),t("tr",null,[J,S,D,t("td",F,[e(o,{to:"/tag/depth-first-search.html"},{default:s(()=>[G]),_:1}),n(),e(o,{to:"/tag/breadth-first-search.html"},{default:s(()=>[H]),_:1}),n(),e(o,{to:"/tag/array.html"},{default:s(()=>[K]),_:1})]),Q,t("td",U,[t("a",W,[n("🀄️"),e(a)]),n(),t("a",X,[n("🔗"),e(a)])])]),t("tr",null,[Z,$,tt,t("td",nt,[e(o,{to:"/tag/string.html"},{default:s(()=>[et]),_:1}),n(),e(o,{to:"/tag/dynamic-programming.html"},{default:s(()=>[st]),_:1}),n(),e(o,{to:"/tag/prefix-sum.html"},{default:s(()=>[ot]),_:1}),n(),at]),lt,t("td",ct,[t("a",it,[n("🀄️"),e(a)]),n(),t("a",rt,[n("🔗"),e(a)])])]),t("tr",null,[dt,pt,ut,t("td",mt,[e(o,{to:"/tag/stack.html"},{default:s(()=>[kt]),_:1}),n(),e(o,{to:"/tag/graph.html"},{default:s(()=>[ht]),_:1}),n(),e(o,{to:"/tag/array.html"},{default:s(()=>[_t]),_:1}),n(),gt]),ft,t("td",bt,[t("a",yt,[n("🀄️"),e(a)]),n(),t("a",xt,[n("🔗"),e(a)])])]),t("tr",null,[vt,jt,wt,t("td",It,[e(o,{to:"/tag/stack.html"},{default:s(()=>[Ot]),_:1}),n(),e(o,{to:"/tag/breadth-first-search.html"},{default:s(()=>[Ct]),_:1}),n(),e(o,{to:"/tag/union-find.html"},{default:s(()=>[Et]),_:1}),n(),Pt]),Vt,t("td",At,[t("a",Lt,[n("🀄️"),e(a)]),n(),t("a",Nt,[n("🔗"),e(a)])])]),t("tr",null,[Tt,qt,Bt,t("td",Mt,[e(o,{to:"/tag/array.html"},{default:s(()=>[Rt]),_:1}),n(),e(o,{to:"/tag/dynamic-programming.html"},{default:s(()=>[zt]),_:1})]),Yt,t("td",Jt,[t("a",St,[n("🀄️"),e(a)]),n(),t("a",Dt,[n("🔗"),e(a)])])]),t("tr",null,[Ft,Gt,Ht,t("td",Kt,[e(o,{to:"/tag/array.html"},{default:s(()=>[Qt]),_:1}),n(),e(o,{to:"/tag/dynamic-programming.html"},{default:s(()=>[Ut]),_:1})]),Wt,t("td",Xt,[t("a",Zt,[n("🀄️"),e(a)]),n(),t("a",$t,[n("🔗"),e(a)])])])])])])}const on=p(_,[["render",tn],["__file","0045.html.vue"]]);export{on as default};
