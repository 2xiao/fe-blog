import{_ as p,r as c,o as u,c as m,a as n,b as t,d as e,w as s,f as k,e as h}from"./app-XFeYdzZv.js";const _={},g=n("h1",{id:"_45-跳跃游戏-ii",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_45-跳跃游戏-ii","aria-hidden":"true"},"#"),t(" 45. 跳跃游戏 II")],-1),b=n("code",null,"贪心",-1),f=n("code",null,"数组",-1),y=n("code",null,"动态规划",-1),x={href:"https://leetcode.cn/problems/jump-game-ii",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"力扣",-1),j={href:"https://leetcode.com/problems/jump-game-ii",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"LeetCode",-1),I=h('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given a <strong>0-indexed</strong> array of integers <code>nums</code> of length <code>n</code>. You are initially positioned at <code>nums[0]</code>.</p><p>Each element <code>nums[i]</code> represents the maximum length of a forward jump from index <code>i</code>. In other words, if you are at <code>nums[i]</code>, you can jump to any <code>nums[i + j]</code> where:</p><ul><li><code>0 &lt;= j &lt;= nums[i]</code> and</li><li><code>i + j &lt; n</code></li></ul><p>Return <em>the minimum number of jumps to reach</em><code>nums[n - 1]</code>. The test cases are generated such that you can reach <code>nums[n - 1]</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [2,3,1,1,4]</p><p>Output: 2</p><p>Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [2,3,0,1,4]</p><p>Output: 2</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 10^4</code></li><li><code>0 &lt;= nums[i] &lt;= 1000</code></li><li>It&#39;s guaranteed that you can reach <code>nums[n - 1]</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个长度为 <code>n</code> 的 <code>0</code> 索引整数数组 <code>nums</code>。初始位置为 <code>nums[0]</code>。</p><p>每个元素 <code>nums[i]</code> 表示从索引 <code>i</code> 向前跳转的最大长度。换句话说，如果你在 <code>nums[i]</code> 处，你可以跳转到任意 <code>nums[i + j]</code> 处:</p><ul><li><code>0 &lt;= j &lt;= nums[i]</code></li><li><code>i + j &lt; n</code></li></ul><p>返回到达 <code>nums[n - 1]</code> 的最小跳跃次数。生成的测试用例可以到达 <code>nums[n - 1]</code>。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-贪心算法" tabindex="-1"><a class="header-anchor" href="#思路一-贪心算法" aria-hidden="true">#</a> 思路一：贪心算法</h3><p>贪心算法是一种通过在每一步选择中都采取当前状态下最优（即最有利）的选择，从而希望最终能够达到全局最优解的方法。</p><ol><li><p><strong>初始化</strong>：</p><ul><li>初始化两个变量 <code>maxPosition</code> 和 <code>end</code>，分别表示当前能够到达的最远位置和当前一步跳跃的结束位置，初始都为 0。</li><li>初始化变量 <code>steps</code> 用来记录跳跃次数，初始为 0。</li></ul></li><li><p><strong>贪心策略</strong>：</p><ul><li>在遍历数组的过程中，对于每个位置，更新 <code>maxPosition</code> 为当前位置能够到达的最远位置。</li><li>当遍历到达 <code>end</code> 位置时，表示当前一步跳跃已经结束，将步数 <code>steps</code> 加一，并且更新 <code>end</code> 为 <code>maxPosition</code>。</li><li>如果遍历完数组时已经到达或超过了最后一个位置，返回当前步数 <code>steps</code> 即可。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是数组的长度，只需要遍历数组一遍。</p></li><li><p><strong>空间复杂度</strong>：<code>O(1)</code>，使用了常数个变量才存储中间状态。</p></li></ul><hr><h3 id="思路二-动态规划" tabindex="-1"><a class="header-anchor" href="#思路二-动态规划" aria-hidden="true">#</a> 思路二：动态规划</h3><ol><li><p><strong>定义状态</strong>：<code>dp[i]</code> 表示从位置 <code>nums[i]</code> 跳到目标位置 <code>nums[n - 1]</code> 的最小跳跃次数。</p></li><li><p><strong>状态转移方程</strong>：</p><ul><li>对于每个位置 <code>nums[i]</code>，我们需要考虑从当前位置跳跃到下一个位置 <code>nums[i + j]</code> 的所有可能性，其中 <code>1 &lt;= j &lt;= nums[i]</code>。</li><li>对于每个可能的跳跃步数 <code>j</code>，我们更新 <code>dp[i]</code> 为 <code>1 + dp[i + j]</code>，表示从当前位置跳跃一次，加上从下一位置 <code>nums[i + j]</code> 跳到目标位置 <code>nums[n - 1]</code> 的最小跳跃次数。</li><li>最终，<code>dp[0]</code> 即为从起始位置 <code>nums[0]</code> 跳到目标位置 <code>nums[n - 1]</code> 的最小跳跃次数。</li></ul></li><li><p><strong>初始化</strong>：初始化数组 <code>dp</code>，长度为 <code>n</code>，初始值为 <code>n</code>，表示从任意位置跳到目标位置的最大跳跃次数为 <code>n</code>。最后一个位置到目标位置的距离为 0，所以 <code>dp[n - 1] = 0</code>。</p></li><li><p><strong>遍历求解</strong>：从数组倒数第二个位置开始向前遍历，更新 <code>dp[i]</code> 的值。</p></li><li><p><strong>返回结果</strong>：返回 <code>dp[0]</code>，即起始位置到目标位置的最小跳跃次数。</p></li></ol><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(n^2)</code>，其中 <code>n</code> 是数组的长度。这是因为在每个位置 <code>i</code>，我们需要考虑从当前位置跳跃到下一个位置的所有可能性，这可能需要遍历该位置能够跳跃的所有可能步数，这一过程的时间复杂度为 <code>O(nums[i])</code>，而数组共有 <code>n</code> 个位置，因此总的时间复杂度为 <code>O(n^2)</code>。</p></li><li><p><strong>空间复杂度</strong>：<code>O(n)</code>，因为我们使用了一个长度为 <code>n</code> 的数组 <code>dp</code> 来存储每个位置的最小跳跃次数。</p></li></ul><p>动态规划解法在时间复杂度上可能较高，因为对于每个位置都需要遍历其能够跳跃的所有可能步数，但它能够有效地求解问题并给出正确答案。</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',29),O=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[t(`/**
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"nums"),t(`
 * `),n("span",{class:"token keyword"},"@return"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"}")]),t(`
 */`)]),t(`
`),n("span",{class:"token keyword"},"var"),t(),n("span",{class:"token function-variable function"},"jump"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"nums"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("nums"),n("span",{class:"token punctuation"},"."),t("length "),n("span",{class:"token operator"},"==="),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`

	`),n("span",{class:"token keyword"},"let"),t(" steps "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" maxPosition "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" end "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(`

	`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" i "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(" i "),n("span",{class:"token operator"},"<"),t(" nums"),n("span",{class:"token punctuation"},"."),t("length "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),t(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		maxPosition `),n("span",{class:"token operator"},"="),t(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"max"),n("span",{class:"token punctuation"},"("),t("maxPosition"),n("span",{class:"token punctuation"},","),t(" i "),n("span",{class:"token operator"},"+"),t(" nums"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("i "),n("span",{class:"token operator"},"==="),t(" end"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			steps`),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},";"),t(`
			end `),n("span",{class:"token operator"},"="),t(" maxPosition"),n("span",{class:"token punctuation"},";"),t(`
			`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("end "),n("span",{class:"token operator"},">="),t(" nums"),n("span",{class:"token punctuation"},"."),t("length "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
				`),n("span",{class:"token keyword"},"break"),n("span",{class:"token punctuation"},";"),t(`
			`),n("span",{class:"token punctuation"},"}"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`

	`),n("span",{class:"token keyword"},"return"),t(" steps"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),C=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[t(`/**
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"nums"),t(`
 * `),n("span",{class:"token keyword"},"@return"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"}")]),t(`
 */`)]),t(`
`),n("span",{class:"token keyword"},"var"),t(),n("span",{class:"token function-variable function"},"jump"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"nums"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token keyword"},"const"),t(" n "),n("span",{class:"token operator"},"="),t(" nums"),n("span",{class:"token punctuation"},"."),t("length"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token comment"},"// dp[i] 代表从 nums[i] 跳到 nums[n - 1] 的最小跳跃次数"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" dp "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"("),t("n"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fill"),n("span",{class:"token punctuation"},"("),t("n"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
	dp`),n("span",{class:"token punctuation"},"["),t("n "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" i "),n("span",{class:"token operator"},"="),t(" n "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},";"),t(" i "),n("span",{class:"token operator"},">="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(" i"),n("span",{class:"token operator"},"--"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"let"),t(" num "),n("span",{class:"token operator"},"="),t(" nums"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" j "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),t(" j "),n("span",{class:"token operator"},"<="),t(" num"),n("span",{class:"token punctuation"},";"),t(" j"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("i "),n("span",{class:"token operator"},"+"),t(" j "),n("span",{class:"token operator"},"<="),t(" n "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
				dp`),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"min"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),t(),n("span",{class:"token operator"},"+"),t(" dp"),n("span",{class:"token punctuation"},"["),t("i "),n("span",{class:"token operator"},"+"),t(" j"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(" dp"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
			`),n("span",{class:"token punctuation"},"}"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token keyword"},"return"),t(" dp"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),E=n("h2",{id:"相关题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),t(" 相关题目")],-1),P=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),V=n("td",{style:{"text-align":"center"}},"55",-1),A=n("td",{style:{"text-align":"left"}},"跳跃游戏",-1),L={style:{"text-align":"center"}},N={style:{"text-align":"left"}},T=n("code",null,"贪心",-1),q=n("code",null,"数组",-1),B=n("code",null,"动态规划",-1),M=n("td",{style:{"text-align":"center"}},"🟠",-1),R={style:{"text-align":"center"}},z={href:"https://leetcode.cn/problems/jump-game",target:"_blank",rel:"noopener noreferrer"},Y={href:"https://leetcode.com/problems/jump-game",target:"_blank",rel:"noopener noreferrer"},J=n("td",{style:{"text-align":"center"}},"1306",-1),S=n("td",{style:{"text-align":"left"}},"跳跃游戏 III",-1),D=n("td",{style:{"text-align":"center"}},null,-1),F={style:{"text-align":"left"}},G=n("code",null,"深度优先搜索",-1),H=n("code",null,"广度优先搜索",-1),K=n("code",null,"数组",-1),Q=n("td",{style:{"text-align":"center"}},"🟠",-1),U={style:{"text-align":"center"}},W={href:"https://leetcode.cn/problems/jump-game-iii",target:"_blank",rel:"noopener noreferrer"},X={href:"https://leetcode.com/problems/jump-game-iii",target:"_blank",rel:"noopener noreferrer"},Z=n("td",{style:{"text-align":"center"}},"1871",-1),$=n("td",{style:{"text-align":"left"}},"跳跃游戏 VII",-1),nn=n("td",{style:{"text-align":"center"}},null,-1),tn={style:{"text-align":"left"}},en=n("code",null,"字符串",-1),sn=n("code",null,"动态规划",-1),on=n("code",null,"前缀和",-1),an=n("code",null,"1+",-1),cn=n("td",{style:{"text-align":"center"}},"🟠",-1),ln={style:{"text-align":"center"}},rn={href:"https://leetcode.cn/problems/jump-game-vii",target:"_blank",rel:"noopener noreferrer"},dn={href:"https://leetcode.com/problems/jump-game-vii",target:"_blank",rel:"noopener noreferrer"},pn=n("td",{style:{"text-align":"center"}},"2297",-1),un=n("td",{style:{"text-align":"left"}},"跳跃游戏 VIII 🔒",-1),mn=n("td",{style:{"text-align":"center"}},null,-1),kn={style:{"text-align":"left"}},hn=n("code",null,"栈",-1),_n=n("code",null,"图",-1),gn=n("code",null,"数组",-1),bn=n("code",null,"3+",-1),fn=n("td",{style:{"text-align":"center"}},"🟠",-1),yn={style:{"text-align":"center"}},xn={href:"https://leetcode.cn/problems/jump-game-viii",target:"_blank",rel:"noopener noreferrer"},vn={href:"https://leetcode.com/problems/jump-game-viii",target:"_blank",rel:"noopener noreferrer"},jn=n("td",{style:{"text-align":"center"}},"2617",-1),wn=n("td",{style:{"text-align":"left"}},"网格图中最少访问的格子数",-1),In=n("td",{style:{"text-align":"center"}},null,-1),On={style:{"text-align":"left"}},Cn=n("code",null,"栈",-1),En=n("code",null,"广度优先搜索",-1),Pn=n("code",null,"并查集",-1),Vn=n("code",null,"5+",-1),An=n("td",{style:{"text-align":"center"}},"🔴",-1),Ln={style:{"text-align":"center"}},Nn={href:"https://leetcode.cn/problems/minimum-number-of-visited-cells-in-a-grid",target:"_blank",rel:"noopener noreferrer"},Tn={href:"https://leetcode.com/problems/minimum-number-of-visited-cells-in-a-grid",target:"_blank",rel:"noopener noreferrer"},qn=n("td",{style:{"text-align":"center"}},"2770",-1),Bn=n("td",{style:{"text-align":"left"}},"达到末尾下标所需的最大跳跃次数",-1),Mn=n("td",{style:{"text-align":"center"}},null,-1),Rn={style:{"text-align":"left"}},zn=n("code",null,"数组",-1),Yn=n("code",null,"动态规划",-1),Jn=n("td",{style:{"text-align":"center"}},"🟠",-1),Sn={style:{"text-align":"center"}},Dn={href:"https://leetcode.cn/problems/maximum-number-of-jumps-to-reach-the-last-index",target:"_blank",rel:"noopener noreferrer"},Fn={href:"https://leetcode.com/problems/maximum-number-of-jumps-to-reach-the-last-index",target:"_blank",rel:"noopener noreferrer"},Gn=n("td",{style:{"text-align":"center"}},"2786",-1),Hn=n("td",{style:{"text-align":"left"}},"访问数组中的位置使分数最大",-1),Kn=n("td",{style:{"text-align":"center"}},null,-1),Qn={style:{"text-align":"left"}},Un=n("code",null,"数组",-1),Wn=n("code",null,"动态规划",-1),Xn=n("td",{style:{"text-align":"center"}},"🟠",-1),Zn={style:{"text-align":"center"}},$n={href:"https://leetcode.cn/problems/visit-array-positions-to-maximize-score",target:"_blank",rel:"noopener noreferrer"},nt={href:"https://leetcode.com/problems/visit-array-positions-to-maximize-score",target:"_blank",rel:"noopener noreferrer"};function tt(et,st){const r=c("font"),o=c("RouterLink"),a=c("ExternalLinkIcon"),d=c("CodeTabs");return u(),m("div",null,[g,n("p",null,[t("🟠 "),e(r,{color:"#ffb800"},{default:s(()=>[t("Medium")]),_:1}),t("  🔖  "),e(o,{to:"/tag/greedy.html"},{default:s(()=>[b]),_:1}),t(),e(o,{to:"/tag/array.html"},{default:s(()=>[f]),_:1}),t(),e(o,{to:"/tag/dynamic-programming.html"},{default:s(()=>[y]),_:1}),t("  🔗 "),n("a",x,[v,e(a)]),t(),n("a",j,[w,e(a)])]),I,e(d,{id:"233",data:[{id:"贪心算法"},{id:"动态规划"}]},{title0:s(({value:l,isActive:i})=>[t("贪心算法")]),title1:s(({value:l,isActive:i})=>[t("动态规划")]),tab0:s(({value:l,isActive:i})=>[O]),tab1:s(({value:l,isActive:i})=>[C]),_:1}),E,k(" prettier-ignore "),n("table",null,[P,n("tbody",null,[n("tr",null,[V,A,n("td",L,[e(o,{to:"/problem/0055.html"},{default:s(()=>[t("[✓]")]),_:1})]),n("td",N,[e(o,{to:"/tag/greedy.html"},{default:s(()=>[T]),_:1}),t(),e(o,{to:"/tag/array.html"},{default:s(()=>[q]),_:1}),t(),e(o,{to:"/tag/dynamic-programming.html"},{default:s(()=>[B]),_:1})]),M,n("td",R,[n("a",z,[t("🀄️"),e(a)]),t(),n("a",Y,[t("🔗"),e(a)])])]),n("tr",null,[J,S,D,n("td",F,[e(o,{to:"/tag/depth-first-search.html"},{default:s(()=>[G]),_:1}),t(),e(o,{to:"/tag/breadth-first-search.html"},{default:s(()=>[H]),_:1}),t(),e(o,{to:"/tag/array.html"},{default:s(()=>[K]),_:1})]),Q,n("td",U,[n("a",W,[t("🀄️"),e(a)]),t(),n("a",X,[t("🔗"),e(a)])])]),n("tr",null,[Z,$,nn,n("td",tn,[e(o,{to:"/tag/string.html"},{default:s(()=>[en]),_:1}),t(),e(o,{to:"/tag/dynamic-programming.html"},{default:s(()=>[sn]),_:1}),t(),e(o,{to:"/tag/prefix-sum.html"},{default:s(()=>[on]),_:1}),t(),an]),cn,n("td",ln,[n("a",rn,[t("🀄️"),e(a)]),t(),n("a",dn,[t("🔗"),e(a)])])]),n("tr",null,[pn,un,mn,n("td",kn,[e(o,{to:"/tag/stack.html"},{default:s(()=>[hn]),_:1}),t(),e(o,{to:"/tag/graph.html"},{default:s(()=>[_n]),_:1}),t(),e(o,{to:"/tag/array.html"},{default:s(()=>[gn]),_:1}),t(),bn]),fn,n("td",yn,[n("a",xn,[t("🀄️"),e(a)]),t(),n("a",vn,[t("🔗"),e(a)])])]),n("tr",null,[jn,wn,In,n("td",On,[e(o,{to:"/tag/stack.html"},{default:s(()=>[Cn]),_:1}),t(),e(o,{to:"/tag/breadth-first-search.html"},{default:s(()=>[En]),_:1}),t(),e(o,{to:"/tag/union-find.html"},{default:s(()=>[Pn]),_:1}),t(),Vn]),An,n("td",Ln,[n("a",Nn,[t("🀄️"),e(a)]),t(),n("a",Tn,[t("🔗"),e(a)])])]),n("tr",null,[qn,Bn,Mn,n("td",Rn,[e(o,{to:"/tag/array.html"},{default:s(()=>[zn]),_:1}),t(),e(o,{to:"/tag/dynamic-programming.html"},{default:s(()=>[Yn]),_:1})]),Jn,n("td",Sn,[n("a",Dn,[t("🀄️"),e(a)]),t(),n("a",Fn,[t("🔗"),e(a)])])]),n("tr",null,[Gn,Hn,Kn,n("td",Qn,[e(o,{to:"/tag/array.html"},{default:s(()=>[Un]),_:1}),t(),e(o,{to:"/tag/dynamic-programming.html"},{default:s(()=>[Wn]),_:1})]),Xn,n("td",Zn,[n("a",$n,[t("🀄️"),e(a)]),t(),n("a",nt,[t("🔗"),e(a)])])])])])])}const at=p(_,[["render",tt],["__file","0045.html.vue"]]);export{at as default};
