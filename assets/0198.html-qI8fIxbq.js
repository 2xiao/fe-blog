import{_ as u,r as l,o as d,c as _,a as t,b as n,d as e,w as s,f as h,e as m}from"./app-fqckLmln.js";const k={},g=t("h1",{id:"_198-打家劫舍",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_198-打家劫舍","aria-hidden":"true"},"#"),n(" 198. 打家劫舍")],-1),b=t("code",null,"数组",-1),f=t("code",null,"动态规划",-1),y={href:"https://leetcode.cn/problems/house-robber",target:"_blank",rel:"noopener noreferrer"},x=t("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/house-robber",target:"_blank",rel:"noopener noreferrer"},w=t("code",null,"LeetCode",-1),q=m('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and <strong>it will automatically contact the police if two adjacent houses were broken into on the same night</strong>.</p><p>Given an integer array <code>nums</code> representing the amount of money of each house, return <em>the maximum amount of money you can rob tonight <strong>without alerting the police</strong></em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [1,2,3,1]</p><p>Output: 4</p><p>Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).</p><p>Total amount you can rob = 1 + 3 = 4.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [2,7,9,3,1]</p><p>Output: 12</p><p>Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).</p><p>Total amount you can rob = 2 + 9 + 1 = 12.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 100</code></li><li><code>0 &lt;= nums[i] &lt;= 400</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，<strong>如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警</strong>。</p><p>给定一个代表每个房屋存放金额的非负整数数组，计算你 <strong>不触动警报装置的情况下</strong> ，一夜之内能够偷窃到的最高金额。</p><p><strong>示例 1：</strong></p><blockquote><p>输入：[1,2,3,1]</p><p>输出：4</p><p>解释：偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。</p><p>偷窃到的最高金额 = 1 + 3 = 4 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p>输入：[2,7,9,3,1]</p><p>输出：12</p><p>解释：偷窃 1 号房屋 (金额 = 2), 偷窃 3 号房屋 (金额 = 9)，接着偷窃 5 号房屋 (金额 = 1)。</p><p>偷窃到的最高金额 = 2 + 9 + 1 = 12 。</p></blockquote><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这是一个经典的动态规划问题。可以使用动态规划来解决，其中的关键是定义状态和状态转移方程。</p><ol start="2"><li><p><strong>状态定义</strong>：定义一个一维数组 <code>dp</code>，其中 <code>dp[i]</code> 表示在前 <code>i</code> 个房屋中能够打劫到的最大金额。</p></li><li><p><strong>状态转移方程</strong>：对于每个房屋，有两个选择：打劫或者不打劫。因此，状态转移方程为：<code>dp[i] = max(dp[i-1], dp[i-2] + nums[i])</code></p></li><li><p><strong>初始化</strong>：初始化前两个状态，即 <code>dp[0] = nums[0]</code> 和 <code>dp[1] = Math.max(nums[0], nums[1])</code>。</p></li><li><p><strong>遍历计算</strong>：从第三个房屋开始遍历，根据状态转移方程更新每个状态。</p></li><li><p><strong>结果</strong>：最终答案为 <code>dp[n - 1]</code>，表示在所有房屋中能够打劫到的最大金额。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>: <code>O(n)</code>，遍历整个数组。</li><li><strong>空间复杂度</strong>: <code>O(n)</code>，使用了一个数组来存储中间状态。可以优化为 <code>O(1)</code>，只保留前两个状态。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',22),I=t("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[t("pre",{class:"language-javascript"},[t("code",null,[t("span",{class:"token doc-comment comment"},[n(`/**
 * `),t("span",{class:"token keyword"},"@param"),n(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),n("number"),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},"}")]),n(),t("span",{class:"token parameter"},"nums"),n(`
 * `),t("span",{class:"token keyword"},"@return"),n(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),n("number"),t("span",{class:"token punctuation"},"}")]),n(`
 */`)]),n(`
`),t("span",{class:"token keyword"},"var"),n(),t("span",{class:"token function-variable function"},"rob"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token keyword"},"function"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"nums"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
	`),t("span",{class:"token keyword"},"const"),n(" n "),t("span",{class:"token operator"},"="),n(" nums"),t("span",{class:"token punctuation"},"."),n("length"),t("span",{class:"token punctuation"},";"),n(`
	`),t("span",{class:"token keyword"},"if"),n(),t("span",{class:"token punctuation"},"("),n("n "),t("span",{class:"token operator"},"=="),n(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},";"),n(`
	`),t("span",{class:"token keyword"},"if"),n(),t("span",{class:"token punctuation"},"("),n("n "),t("span",{class:"token operator"},"=="),n(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token keyword"},"return"),n(" nums"),t("span",{class:"token punctuation"},"["),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";"),n(`
	`),t("span",{class:"token keyword"},"const"),n(" dp "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token keyword"},"new"),n(),t("span",{class:"token class-name"},"Array"),t("span",{class:"token punctuation"},"("),n("n"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"fill"),t("span",{class:"token punctuation"},"("),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`

	`),t("span",{class:"token comment"},"// 初始化前两个状态"),n(`
	dp`),t("span",{class:"token punctuation"},"["),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},"]"),n(),t("span",{class:"token operator"},"="),n(" nums"),t("span",{class:"token punctuation"},"["),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";"),n(`
	dp`),t("span",{class:"token punctuation"},"["),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},"]"),n(),t("span",{class:"token operator"},"="),n(" Math"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"max"),t("span",{class:"token punctuation"},"("),n("nums"),t("span",{class:"token punctuation"},"["),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),n(" nums"),t("span",{class:"token punctuation"},"["),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`

	`),t("span",{class:"token comment"},"// 遍历计算"),n(`
	`),t("span",{class:"token keyword"},"for"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token keyword"},"let"),n(" i "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token number"},"2"),t("span",{class:"token punctuation"},";"),n(" i "),t("span",{class:"token operator"},"<"),n(" n"),t("span",{class:"token punctuation"},";"),n(" i"),t("span",{class:"token operator"},"++"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
		dp`),t("span",{class:"token punctuation"},"["),n("i"),t("span",{class:"token punctuation"},"]"),n(),t("span",{class:"token operator"},"="),n(" Math"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"max"),t("span",{class:"token punctuation"},"("),n("dp"),t("span",{class:"token punctuation"},"["),n("i "),t("span",{class:"token operator"},"-"),n(),t("span",{class:"token number"},"2"),t("span",{class:"token punctuation"},"]"),n(),t("span",{class:"token operator"},"+"),n(" nums"),t("span",{class:"token punctuation"},"["),n("i"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),n(" dp"),t("span",{class:"token punctuation"},"["),n("i "),t("span",{class:"token operator"},"-"),n(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
	`),t("span",{class:"token punctuation"},"}"),n(`

	`),t("span",{class:"token comment"},"// 返回结果"),n(`
	`),t("span",{class:"token keyword"},"return"),n(" dp"),t("span",{class:"token punctuation"},"["),n("n "),t("span",{class:"token operator"},"-"),n(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"})])],-1),j=t("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[t("pre",{class:"language-javascript"},[t("code",null,[t("span",{class:"token doc-comment comment"},[n(`/**
 * `),t("span",{class:"token keyword"},"@param"),n(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),n("number"),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},"}")]),n(),t("span",{class:"token parameter"},"nums"),n(`
 * `),t("span",{class:"token keyword"},"@return"),n(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),n("number"),t("span",{class:"token punctuation"},"}")]),n(`
 */`)]),n(`
`),t("span",{class:"token keyword"},"var"),n(),t("span",{class:"token function-variable function"},"rob"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token keyword"},"function"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"nums"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
	`),t("span",{class:"token keyword"},"const"),n(" n "),t("span",{class:"token operator"},"="),n(" nums"),t("span",{class:"token punctuation"},"."),n("length"),t("span",{class:"token punctuation"},";"),n(`
	`),t("span",{class:"token keyword"},"if"),n(),t("span",{class:"token punctuation"},"("),n("n "),t("span",{class:"token operator"},"=="),n(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},";"),n(`
	`),t("span",{class:"token keyword"},"if"),n(),t("span",{class:"token punctuation"},"("),n("n "),t("span",{class:"token operator"},"=="),n(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token keyword"},"return"),n(" nums"),t("span",{class:"token punctuation"},"["),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";"),n(`
	`),t("span",{class:"token keyword"},"let"),n(" first "),t("span",{class:"token operator"},"="),n(" nums"),t("span",{class:"token punctuation"},"["),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";"),n(`
	`),t("span",{class:"token keyword"},"let"),n(" second "),t("span",{class:"token operator"},"="),n(" Math"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"max"),t("span",{class:"token punctuation"},"("),n("nums"),t("span",{class:"token punctuation"},"["),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),n(" nums"),t("span",{class:"token punctuation"},"["),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
	`),t("span",{class:"token keyword"},"for"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token keyword"},"let"),n(" i "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token number"},"2"),t("span",{class:"token punctuation"},";"),n(" i "),t("span",{class:"token operator"},"<"),n(" n"),t("span",{class:"token punctuation"},";"),n(" i"),t("span",{class:"token operator"},"++"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
		`),t("span",{class:"token keyword"},"let"),n(" temp "),t("span",{class:"token operator"},"="),n(" Math"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"max"),t("span",{class:"token punctuation"},"("),n("first "),t("span",{class:"token operator"},"+"),n(" nums"),t("span",{class:"token punctuation"},"["),n("i"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),n(" second"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
		first `),t("span",{class:"token operator"},"="),n(" second"),t("span",{class:"token punctuation"},";"),n(`
		second `),t("span",{class:"token operator"},"="),n(" temp"),t("span",{class:"token punctuation"},";"),n(`
	`),t("span",{class:"token punctuation"},"}"),n(`
	`),t("span",{class:"token keyword"},"return"),n(" second"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"})])],-1),E=t("h2",{id:"相关题目",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),n(" 相关题目")],-1),C=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),M=t("td",{style:{"text-align":"center"}},"152",-1),V=t("td",{style:{"text-align":"left"}},"乘积最大子数组",-1),A={style:{"text-align":"center"}},L={style:{"text-align":"left"}},N=t("code",null,"数组",-1),O=t("code",null,"动态规划",-1),T=t("td",{style:{"text-align":"center"}},"🟠",-1),R={style:{"text-align":"center"}},B={href:"https://leetcode.cn/problems/maximum-product-subarray",target:"_blank",rel:"noopener noreferrer"},G={href:"https://leetcode.com/problems/maximum-product-subarray",target:"_blank",rel:"noopener noreferrer"},S=t("td",{style:{"text-align":"center"}},"213",-1),Y=t("td",{style:{"text-align":"left"}},"打家劫舍 II",-1),z=t("td",{style:{"text-align":"center"}},null,-1),D={style:{"text-align":"left"}},F=t("code",null,"数组",-1),H=t("code",null,"动态规划",-1),J=t("td",{style:{"text-align":"center"}},"🟠",-1),K={style:{"text-align":"center"}},P={href:"https://leetcode.cn/problems/house-robber-ii",target:"_blank",rel:"noopener noreferrer"},Q={href:"https://leetcode.com/problems/house-robber-ii",target:"_blank",rel:"noopener noreferrer"},U=t("td",{style:{"text-align":"center"}},"256",-1),W=t("td",{style:{"text-align":"left"}},"粉刷房子 🔒",-1),X=t("td",{style:{"text-align":"center"}},null,-1),Z={style:{"text-align":"left"}},$=t("code",null,"数组",-1),tt=t("code",null,"动态规划",-1),nt=t("td",{style:{"text-align":"center"}},"🟠",-1),et={style:{"text-align":"center"}},st={href:"https://leetcode.cn/problems/paint-house",target:"_blank",rel:"noopener noreferrer"},ot={href:"https://leetcode.com/problems/paint-house",target:"_blank",rel:"noopener noreferrer"},at=t("td",{style:{"text-align":"center"}},"276",-1),lt=t("td",{style:{"text-align":"left"}},"栅栏涂色 🔒",-1),ct=t("td",{style:{"text-align":"center"}},null,-1),rt={style:{"text-align":"left"}},it=t("code",null,"动态规划",-1),pt=t("td",{style:{"text-align":"center"}},"🟠",-1),ut={style:{"text-align":"center"}},dt={href:"https://leetcode.cn/problems/paint-fence",target:"_blank",rel:"noopener noreferrer"},_t={href:"https://leetcode.com/problems/paint-fence",target:"_blank",rel:"noopener noreferrer"},ht=t("td",{style:{"text-align":"center"}},"337",-1),mt=t("td",{style:{"text-align":"left"}},"打家劫舍 III",-1),kt=t("td",{style:{"text-align":"center"}},null,-1),gt={style:{"text-align":"left"}},bt=t("code",null,"树",-1),ft=t("code",null,"深度优先搜索",-1),yt=t("code",null,"动态规划",-1),xt=t("code",null,"1+",-1),vt=t("td",{style:{"text-align":"center"}},"🟠",-1),wt={style:{"text-align":"center"}},qt={href:"https://leetcode.cn/problems/house-robber-iii",target:"_blank",rel:"noopener noreferrer"},It={href:"https://leetcode.com/problems/house-robber-iii",target:"_blank",rel:"noopener noreferrer"},jt=t("td",{style:{"text-align":"center"}},"600",-1),Et=t("td",{style:{"text-align":"left"}},"不含连续1的非负整数",-1),Ct=t("td",{style:{"text-align":"center"}},null,-1),Mt={style:{"text-align":"left"}},Vt=t("code",null,"动态规划",-1),At=t("td",{style:{"text-align":"center"}},"🔴",-1),Lt={style:{"text-align":"center"}},Nt={href:"https://leetcode.cn/problems/non-negative-integers-without-consecutive-ones",target:"_blank",rel:"noopener noreferrer"},Ot={href:"https://leetcode.com/problems/non-negative-integers-without-consecutive-ones",target:"_blank",rel:"noopener noreferrer"},Tt=t("td",{style:{"text-align":"center"}},"656",-1),Rt=t("td",{style:{"text-align":"left"}},"成本最小路径 🔒",-1),Bt=t("td",{style:{"text-align":"center"}},null,-1),Gt={style:{"text-align":"left"}},St=t("code",null,"数组",-1),Yt=t("code",null,"动态规划",-1),zt=t("td",{style:{"text-align":"center"}},"🔴",-1),Dt={style:{"text-align":"center"}},Ft={href:"https://leetcode.cn/problems/coin-path",target:"_blank",rel:"noopener noreferrer"},Ht={href:"https://leetcode.com/problems/coin-path",target:"_blank",rel:"noopener noreferrer"},Jt=t("td",{style:{"text-align":"center"}},"740",-1),Kt=t("td",{style:{"text-align":"left"}},"删除并获得点数",-1),Pt=t("td",{style:{"text-align":"center"}},null,-1),Qt={style:{"text-align":"left"}},Ut=t("code",null,"数组",-1),Wt=t("code",null,"哈希表",-1),Xt=t("code",null,"动态规划",-1),Zt=t("td",{style:{"text-align":"center"}},"🟠",-1),$t={style:{"text-align":"center"}},tn={href:"https://leetcode.cn/problems/delete-and-earn",target:"_blank",rel:"noopener noreferrer"},nn={href:"https://leetcode.com/problems/delete-and-earn",target:"_blank",rel:"noopener noreferrer"},en=t("td",{style:{"text-align":"center"}},"2140",-1),sn=t("td",{style:{"text-align":"left"}},"解决智力问题",-1),on=t("td",{style:{"text-align":"center"}},null,-1),an={style:{"text-align":"left"}},ln=t("code",null,"数组",-1),cn=t("code",null,"动态规划",-1),rn=t("td",{style:{"text-align":"center"}},"🟠",-1),pn={style:{"text-align":"center"}},un={href:"https://leetcode.cn/problems/solving-questions-with-brainpower",target:"_blank",rel:"noopener noreferrer"},dn={href:"https://leetcode.com/problems/solving-questions-with-brainpower",target:"_blank",rel:"noopener noreferrer"},_n=t("td",{style:{"text-align":"center"}},"2320",-1),hn=t("td",{style:{"text-align":"left"}},"统计放置房子的方式数",-1),mn=t("td",{style:{"text-align":"center"}},null,-1),kn={style:{"text-align":"left"}},gn=t("code",null,"动态规划",-1),bn=t("td",{style:{"text-align":"center"}},"🟠",-1),fn={style:{"text-align":"center"}},yn={href:"https://leetcode.cn/problems/count-number-of-ways-to-place-houses",target:"_blank",rel:"noopener noreferrer"},xn={href:"https://leetcode.com/problems/count-number-of-ways-to-place-houses",target:"_blank",rel:"noopener noreferrer"},vn=t("td",{style:{"text-align":"center"}},"2560",-1),wn=t("td",{style:{"text-align":"left"}},"打家劫舍 IV",-1),qn=t("td",{style:{"text-align":"center"}},null,-1),In={style:{"text-align":"left"}},jn=t("code",null,"数组",-1),En=t("code",null,"二分查找",-1),Cn=t("td",{style:{"text-align":"center"}},"🟠",-1),Mn={style:{"text-align":"center"}},Vn={href:"https://leetcode.cn/problems/house-robber-iv",target:"_blank",rel:"noopener noreferrer"},An={href:"https://leetcode.com/problems/house-robber-iv",target:"_blank",rel:"noopener noreferrer"},Ln=t("td",{style:{"text-align":"center"}},"2611",-1),Nn=t("td",{style:{"text-align":"left"}},"老鼠和奶酪",-1),On=t("td",{style:{"text-align":"center"}},null,-1),Tn={style:{"text-align":"left"}},Rn=t("code",null,"贪心",-1),Bn=t("code",null,"数组",-1),Gn=t("code",null,"排序",-1),Sn=t("code",null,"1+",-1),Yn=t("td",{style:{"text-align":"center"}},"🟠",-1),zn={style:{"text-align":"center"}},Dn={href:"https://leetcode.cn/problems/mice-and-cheese",target:"_blank",rel:"noopener noreferrer"},Fn={href:"https://leetcode.com/problems/mice-and-cheese",target:"_blank",rel:"noopener noreferrer"},Hn=t("td",{style:{"text-align":"center"}},"2789",-1),Jn=t("td",{style:{"text-align":"left"}},"合并后数组中的最大元素",-1),Kn=t("td",{style:{"text-align":"center"}},null,-1),Pn={style:{"text-align":"left"}},Qn=t("code",null,"贪心",-1),Un=t("code",null,"数组",-1),Wn=t("td",{style:{"text-align":"center"}},"🟠",-1),Xn={style:{"text-align":"center"}},Zn={href:"https://leetcode.cn/problems/largest-element-in-an-array-after-merge-operations",target:"_blank",rel:"noopener noreferrer"},$n={href:"https://leetcode.com/problems/largest-element-in-an-array-after-merge-operations",target:"_blank",rel:"noopener noreferrer"};function te(ne,ee){const i=l("font"),o=l("RouterLink"),a=l("ExternalLinkIcon"),p=l("CodeTabs");return d(),_("div",null,[g,t("p",null,[n("🟠 "),e(i,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1}),n("  🔖  "),e(o,{to:"/tag/array.html"},{default:s(()=>[b]),_:1}),n(),e(o,{to:"/tag/dynamic-programming.html"},{default:s(()=>[f]),_:1}),n("  🔗 "),t("a",y,[x,e(a)]),n(),t("a",v,[w,e(a)])]),q,e(p,{id:"158",data:[{id:"动态规划"},{id:"动态规划-压缩状态"}]},{title0:s(({value:c,isActive:r})=>[n("动态规划")]),title1:s(({value:c,isActive:r})=>[n("动态规划-压缩状态")]),tab0:s(({value:c,isActive:r})=>[I]),tab1:s(({value:c,isActive:r})=>[j]),_:1}),E,h(" prettier-ignore "),t("table",null,[C,t("tbody",null,[t("tr",null,[M,V,t("td",A,[e(o,{to:"/problem/0152.html"},{default:s(()=>[n("[✓]")]),_:1})]),t("td",L,[e(o,{to:"/tag/array.html"},{default:s(()=>[N]),_:1}),n(),e(o,{to:"/tag/dynamic-programming.html"},{default:s(()=>[O]),_:1})]),T,t("td",R,[t("a",B,[n("🀄️"),e(a)]),n(),t("a",G,[n("🔗"),e(a)])])]),t("tr",null,[S,Y,z,t("td",D,[e(o,{to:"/tag/array.html"},{default:s(()=>[F]),_:1}),n(),e(o,{to:"/tag/dynamic-programming.html"},{default:s(()=>[H]),_:1})]),J,t("td",K,[t("a",P,[n("🀄️"),e(a)]),n(),t("a",Q,[n("🔗"),e(a)])])]),t("tr",null,[U,W,X,t("td",Z,[e(o,{to:"/tag/array.html"},{default:s(()=>[$]),_:1}),n(),e(o,{to:"/tag/dynamic-programming.html"},{default:s(()=>[tt]),_:1})]),nt,t("td",et,[t("a",st,[n("🀄️"),e(a)]),n(),t("a",ot,[n("🔗"),e(a)])])]),t("tr",null,[at,lt,ct,t("td",rt,[e(o,{to:"/tag/dynamic-programming.html"},{default:s(()=>[it]),_:1})]),pt,t("td",ut,[t("a",dt,[n("🀄️"),e(a)]),n(),t("a",_t,[n("🔗"),e(a)])])]),t("tr",null,[ht,mt,kt,t("td",gt,[e(o,{to:"/tag/tree.html"},{default:s(()=>[bt]),_:1}),n(),e(o,{to:"/tag/depth-first-search.html"},{default:s(()=>[ft]),_:1}),n(),e(o,{to:"/tag/dynamic-programming.html"},{default:s(()=>[yt]),_:1}),n(),xt]),vt,t("td",wt,[t("a",qt,[n("🀄️"),e(a)]),n(),t("a",It,[n("🔗"),e(a)])])]),t("tr",null,[jt,Et,Ct,t("td",Mt,[e(o,{to:"/tag/dynamic-programming.html"},{default:s(()=>[Vt]),_:1})]),At,t("td",Lt,[t("a",Nt,[n("🀄️"),e(a)]),n(),t("a",Ot,[n("🔗"),e(a)])])]),t("tr",null,[Tt,Rt,Bt,t("td",Gt,[e(o,{to:"/tag/array.html"},{default:s(()=>[St]),_:1}),n(),e(o,{to:"/tag/dynamic-programming.html"},{default:s(()=>[Yt]),_:1})]),zt,t("td",Dt,[t("a",Ft,[n("🀄️"),e(a)]),n(),t("a",Ht,[n("🔗"),e(a)])])]),t("tr",null,[Jt,Kt,Pt,t("td",Qt,[e(o,{to:"/tag/array.html"},{default:s(()=>[Ut]),_:1}),n(),e(o,{to:"/tag/hash-table.html"},{default:s(()=>[Wt]),_:1}),n(),e(o,{to:"/tag/dynamic-programming.html"},{default:s(()=>[Xt]),_:1})]),Zt,t("td",$t,[t("a",tn,[n("🀄️"),e(a)]),n(),t("a",nn,[n("🔗"),e(a)])])]),t("tr",null,[en,sn,on,t("td",an,[e(o,{to:"/tag/array.html"},{default:s(()=>[ln]),_:1}),n(),e(o,{to:"/tag/dynamic-programming.html"},{default:s(()=>[cn]),_:1})]),rn,t("td",pn,[t("a",un,[n("🀄️"),e(a)]),n(),t("a",dn,[n("🔗"),e(a)])])]),t("tr",null,[_n,hn,mn,t("td",kn,[e(o,{to:"/tag/dynamic-programming.html"},{default:s(()=>[gn]),_:1})]),bn,t("td",fn,[t("a",yn,[n("🀄️"),e(a)]),n(),t("a",xn,[n("🔗"),e(a)])])]),t("tr",null,[vn,wn,qn,t("td",In,[e(o,{to:"/tag/array.html"},{default:s(()=>[jn]),_:1}),n(),e(o,{to:"/tag/binary-search.html"},{default:s(()=>[En]),_:1})]),Cn,t("td",Mn,[t("a",Vn,[n("🀄️"),e(a)]),n(),t("a",An,[n("🔗"),e(a)])])]),t("tr",null,[Ln,Nn,On,t("td",Tn,[e(o,{to:"/tag/greedy.html"},{default:s(()=>[Rn]),_:1}),n(),e(o,{to:"/tag/array.html"},{default:s(()=>[Bn]),_:1}),n(),e(o,{to:"/tag/sorting.html"},{default:s(()=>[Gn]),_:1}),n(),Sn]),Yn,t("td",zn,[t("a",Dn,[n("🀄️"),e(a)]),n(),t("a",Fn,[n("🔗"),e(a)])])]),t("tr",null,[Hn,Jn,Kn,t("td",Pn,[e(o,{to:"/tag/greedy.html"},{default:s(()=>[Qn]),_:1}),n(),e(o,{to:"/tag/array.html"},{default:s(()=>[Un]),_:1})]),Wn,t("td",Xn,[t("a",Zn,[n("🀄️"),e(a)]),n(),t("a",$n,[n("🔗"),e(a)])])])])])])}const oe=u(k,[["render",te],["__file","0198.html.vue"]]);export{oe as default};
