import{_ as p,r as c,o as d,c as _,a as t,b as n,d as e,w as s,f as h,e as m}from"./app-OX-nYmHS.js";const k={},g=t("h1",{id:"_198-打家劫舍",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_198-打家劫舍","aria-hidden":"true"},"#"),n(" 198. 打家劫舍")],-1),f=t("code",null,"数组",-1),b=t("code",null,"动态规划",-1),y={href:"https://leetcode.cn/problems/house-robber",target:"_blank",rel:"noopener noreferrer"},x=t("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/house-robber",target:"_blank",rel:"noopener noreferrer"},w=t("code",null,"LeetCode",-1),M=m('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and <strong>it will automatically contact the police if two adjacent houses were broken into on the same night</strong>.</p><p>Given an integer array <code>nums</code> representing the amount of money of each house, return <em>the maximum amount of money you can rob tonight <strong>without alerting the police</strong></em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [1,2,3,1]</p><p>Output: 4</p><p>Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).</p><p>Total amount you can rob = 1 + 3 = 4.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [2,7,9,3,1]</p><p>Output: 12</p><p>Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).</p><p>Total amount you can rob = 2 + 9 + 1 = 12.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 100</code></li><li><code>0 &lt;= nums[i] &lt;= 400</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，<strong>如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警</strong>。</p><p>给定一个代表每个房屋存放金额的非负整数数组，计算你 <strong>不触动警报装置的情况下</strong> ，一夜之内能够偷窃到的最高金额。</p><p><strong>示例 1：</strong></p><blockquote><p>输入：[1,2,3,1]</p><p>输出：4</p><p>解释：偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。</p><p>偷窃到的最高金额 = 1 + 3 = 4 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p>输入：[2,7,9,3,1]</p><p>输出：12</p><p>解释：偷窃 1 号房屋 (金额 = 2), 偷窃 3 号房屋 (金额 = 9)，接着偷窃 5 号房屋 (金额 = 1)。</p><p>偷窃到的最高金额 = 2 + 9 + 1 = 12 。</p></blockquote><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这是一个经典的动态规划问题。可以使用动态规划来解决，其中的关键是定义状态和状态转移方程。</p><ol start="2"><li><p><strong>状态定义</strong>：定义一个一维数组 <code>dp</code>，其中 <code>dp[i]</code> 表示在前 <code>i</code> 个房屋中能够打劫到的最大金额。</p></li><li><p><strong>状态转移方程</strong>：对于每个房屋，有两个选择：打劫或者不打劫。因此，状态转移方程为：<code>dp[i] = max(dp[i-1], dp[i-2] + nums[i])</code></p></li><li><p><strong>初始化</strong>：初始化前两个状态，即 <code>dp[0] = nums[0]</code> 和 <code>dp[1] = Math.max(nums[0], nums[1])</code>。</p></li><li><p><strong>遍历计算</strong>：从第三个房屋开始遍历，根据状态转移方程更新每个状态。</p></li><li><p><strong>结果</strong>：最终答案为 <code>dp[n - 1]</code>，表示在所有房屋中能够打劫到的最大金额。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>: <code>O(n)</code>，遍历整个数组。</li><li><strong>空间复杂度</strong>: <code>O(n)</code>，使用了一个数组来存储中间状态。可以优化为 <code>O(1)</code>，只保留前两个状态。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',22),I=t("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[t("pre",{class:"language-javascript"},[t("code",null,[t("span",{class:"token doc-comment comment"},[n(`/**
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
`)])]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"})])],-1),q=t("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[t("pre",{class:"language-javascript"},[t("code",null,[t("span",{class:"token doc-comment comment"},[n(`/**
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
`)])]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"})])],-1),j=t("h2",{id:"相关题目",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),n(" 相关题目")],-1),E=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"left"}},"难度")])],-1),C=t("td",{style:{"text-align":"center"}},"152",-1),V={style:{"text-align":"left"}},A={href:"https://leetcode.com/problems/maximum-product-subarray",target:"_blank",rel:"noopener noreferrer"},L={style:{"text-align":"center"}},N={style:{"text-align":"left"}},O=t("code",null,"数组",-1),T=t("code",null,"动态规划",-1),R={style:{"text-align":"left"}},B=t("td",{style:{"text-align":"center"}},"213",-1),H={style:{"text-align":"left"}},G={href:"https://leetcode.com/problems/house-robber-ii",target:"_blank",rel:"noopener noreferrer"},S=t("td",{style:{"text-align":"center"}},null,-1),Y={style:{"text-align":"left"}},z=t("code",null,"数组",-1),D=t("code",null,"动态规划",-1),F={style:{"text-align":"left"}},J=t("td",{style:{"text-align":"center"}},"256",-1),K={style:{"text-align":"left"}},P={href:"https://leetcode.com/problems/paint-house",target:"_blank",rel:"noopener noreferrer"},Q=t("td",{style:{"text-align":"center"}},null,-1),U={style:{"text-align":"left"}},W=t("code",null,"数组",-1),X=t("code",null,"动态规划",-1),Z={style:{"text-align":"left"}},$=t("td",{style:{"text-align":"center"}},"276",-1),tt={style:{"text-align":"left"}},nt={href:"https://leetcode.com/problems/paint-fence",target:"_blank",rel:"noopener noreferrer"},et=t("td",{style:{"text-align":"center"}},null,-1),st={style:{"text-align":"left"}},ot=t("code",null,"动态规划",-1),at={style:{"text-align":"left"}},lt=t("td",{style:{"text-align":"center"}},"337",-1),ct={style:{"text-align":"left"}},rt={href:"https://leetcode.com/problems/house-robber-iii",target:"_blank",rel:"noopener noreferrer"},it=t("td",{style:{"text-align":"center"}},null,-1),ut={style:{"text-align":"left"}},pt=t("code",null,"树",-1),dt=t("code",null,"深度优先搜索",-1),_t=t("code",null,"动态规划",-1),ht=t("code",null,"1+",-1),mt={style:{"text-align":"left"}},kt=t("td",{style:{"text-align":"center"}},"600",-1),gt={style:{"text-align":"left"}},ft={href:"https://leetcode.com/problems/non-negative-integers-without-consecutive-ones",target:"_blank",rel:"noopener noreferrer"},bt=t("td",{style:{"text-align":"center"}},null,-1),yt={style:{"text-align":"left"}},xt=t("code",null,"动态规划",-1),vt={style:{"text-align":"left"}},wt=t("td",{style:{"text-align":"center"}},"656",-1),Mt={style:{"text-align":"left"}},It={href:"https://leetcode.com/problems/coin-path",target:"_blank",rel:"noopener noreferrer"},qt=t("td",{style:{"text-align":"center"}},null,-1),jt={style:{"text-align":"left"}},Et=t("code",null,"数组",-1),Ct=t("code",null,"动态规划",-1),Vt={style:{"text-align":"left"}},At=t("td",{style:{"text-align":"center"}},"740",-1),Lt={style:{"text-align":"left"}},Nt={href:"https://leetcode.com/problems/delete-and-earn",target:"_blank",rel:"noopener noreferrer"},Ot=t("td",{style:{"text-align":"center"}},null,-1),Tt={style:{"text-align":"left"}},Rt=t("code",null,"数组",-1),Bt=t("code",null,"哈希表",-1),Ht=t("code",null,"动态规划",-1),Gt={style:{"text-align":"left"}},St=t("td",{style:{"text-align":"center"}},"2140",-1),Yt={style:{"text-align":"left"}},zt={href:"https://leetcode.com/problems/solving-questions-with-brainpower",target:"_blank",rel:"noopener noreferrer"},Dt=t("td",{style:{"text-align":"center"}},null,-1),Ft={style:{"text-align":"left"}},Jt=t("code",null,"数组",-1),Kt=t("code",null,"动态规划",-1),Pt={style:{"text-align":"left"}},Qt=t("td",{style:{"text-align":"center"}},"2320",-1),Ut={style:{"text-align":"left"}},Wt={href:"https://leetcode.com/problems/count-number-of-ways-to-place-houses",target:"_blank",rel:"noopener noreferrer"},Xt=t("td",{style:{"text-align":"center"}},null,-1),Zt={style:{"text-align":"left"}},$t=t("code",null,"动态规划",-1),tn={style:{"text-align":"left"}},nn=t("td",{style:{"text-align":"center"}},"2560",-1),en={style:{"text-align":"left"}},sn={href:"https://leetcode.com/problems/house-robber-iv",target:"_blank",rel:"noopener noreferrer"},on=t("td",{style:{"text-align":"center"}},null,-1),an={style:{"text-align":"left"}},ln=t("code",null,"数组",-1),cn=t("code",null,"二分查找",-1),rn={style:{"text-align":"left"}},un=t("td",{style:{"text-align":"center"}},"2611",-1),pn={style:{"text-align":"left"}},dn={href:"https://leetcode.com/problems/mice-and-cheese",target:"_blank",rel:"noopener noreferrer"},_n=t("td",{style:{"text-align":"center"}},null,-1),hn={style:{"text-align":"left"}},mn=t("code",null,"贪心",-1),kn=t("code",null,"数组",-1),gn=t("code",null,"排序",-1),fn=t("code",null,"1+",-1),bn={style:{"text-align":"left"}},yn=t("td",{style:{"text-align":"center"}},"2789",-1),xn={style:{"text-align":"left"}},vn={href:"https://leetcode.com/problems/largest-element-in-an-array-after-merge-operations",target:"_blank",rel:"noopener noreferrer"},wn=t("td",{style:{"text-align":"center"}},null,-1),Mn={style:{"text-align":"left"}},In=t("code",null,"贪心",-1),qn=t("code",null,"数组",-1),jn={style:{"text-align":"left"}};function En(Cn,Vn){const l=c("font"),o=c("RouterLink"),a=c("ExternalLinkIcon"),u=c("CodeTabs");return d(),_("div",null,[g,t("p",null,[n("🟠 "),e(l,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1}),n("  🔖  "),e(o,{to:"/tag/array.html"},{default:s(()=>[f]),_:1}),n(),e(o,{to:"/tag/dynamic-programming.html"},{default:s(()=>[b]),_:1}),n("  🔗 "),t("a",y,[x,e(a)]),n(),t("a",v,[w,e(a)])]),M,e(u,{id:"158",data:[{id:"动态规划"},{id:"动态规划-压缩状态"}]},{title0:s(({value:r,isActive:i})=>[n("动态规划")]),title1:s(({value:r,isActive:i})=>[n("动态规划-压缩状态")]),tab0:s(({value:r,isActive:i})=>[I]),tab1:s(({value:r,isActive:i})=>[q]),_:1}),j,h(" prettier-ignore "),t("table",null,[E,t("tbody",null,[t("tr",null,[C,t("td",V,[t("a",A,[n("乘积最大子数组"),e(a)])]),t("td",L,[e(o,{to:"/problem/0152.html"},{default:s(()=>[n("[✓]")]),_:1})]),t("td",N,[e(o,{to:"/tag/array.html"},{default:s(()=>[O]),_:1}),n(),e(o,{to:"/tag/dynamic-programming.html"},{default:s(()=>[T]),_:1})]),t("td",R,[e(l,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1})])]),t("tr",null,[B,t("td",H,[t("a",G,[n("打家劫舍 II"),e(a)])]),S,t("td",Y,[e(o,{to:"/tag/array.html"},{default:s(()=>[z]),_:1}),n(),e(o,{to:"/tag/dynamic-programming.html"},{default:s(()=>[D]),_:1})]),t("td",F,[e(l,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1})])]),t("tr",null,[J,t("td",K,[t("a",P,[n("粉刷房子 🔒"),e(a)])]),Q,t("td",U,[e(o,{to:"/tag/array.html"},{default:s(()=>[W]),_:1}),n(),e(o,{to:"/tag/dynamic-programming.html"},{default:s(()=>[X]),_:1})]),t("td",Z,[e(l,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1})])]),t("tr",null,[$,t("td",tt,[t("a",nt,[n("栅栏涂色 🔒"),e(a)])]),et,t("td",st,[e(o,{to:"/tag/dynamic-programming.html"},{default:s(()=>[ot]),_:1})]),t("td",at,[e(l,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1})])]),t("tr",null,[lt,t("td",ct,[t("a",rt,[n("打家劫舍 III"),e(a)])]),it,t("td",ut,[e(o,{to:"/tag/tree.html"},{default:s(()=>[pt]),_:1}),n(),e(o,{to:"/tag/depth-first-search.html"},{default:s(()=>[dt]),_:1}),n(),e(o,{to:"/tag/dynamic-programming.html"},{default:s(()=>[_t]),_:1}),n(),ht]),t("td",mt,[e(l,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1})])]),t("tr",null,[kt,t("td",gt,[t("a",ft,[n("不含连续1的非负整数"),e(a)])]),bt,t("td",yt,[e(o,{to:"/tag/dynamic-programming.html"},{default:s(()=>[xt]),_:1})]),t("td",vt,[e(l,{color:"#ff334b"},{default:s(()=>[n("Hard")]),_:1})])]),t("tr",null,[wt,t("td",Mt,[t("a",It,[n("成本最小路径 🔒"),e(a)])]),qt,t("td",jt,[e(o,{to:"/tag/array.html"},{default:s(()=>[Et]),_:1}),n(),e(o,{to:"/tag/dynamic-programming.html"},{default:s(()=>[Ct]),_:1})]),t("td",Vt,[e(l,{color:"#ff334b"},{default:s(()=>[n("Hard")]),_:1})])]),t("tr",null,[At,t("td",Lt,[t("a",Nt,[n("删除并获得点数"),e(a)])]),Ot,t("td",Tt,[e(o,{to:"/tag/array.html"},{default:s(()=>[Rt]),_:1}),n(),e(o,{to:"/tag/hash-table.html"},{default:s(()=>[Bt]),_:1}),n(),e(o,{to:"/tag/dynamic-programming.html"},{default:s(()=>[Ht]),_:1})]),t("td",Gt,[e(l,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1})])]),t("tr",null,[St,t("td",Yt,[t("a",zt,[n("解决智力问题"),e(a)])]),Dt,t("td",Ft,[e(o,{to:"/tag/array.html"},{default:s(()=>[Jt]),_:1}),n(),e(o,{to:"/tag/dynamic-programming.html"},{default:s(()=>[Kt]),_:1})]),t("td",Pt,[e(l,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1})])]),t("tr",null,[Qt,t("td",Ut,[t("a",Wt,[n("统计放置房子的方式数"),e(a)])]),Xt,t("td",Zt,[e(o,{to:"/tag/dynamic-programming.html"},{default:s(()=>[$t]),_:1})]),t("td",tn,[e(l,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1})])]),t("tr",null,[nn,t("td",en,[t("a",sn,[n("打家劫舍 IV"),e(a)])]),on,t("td",an,[e(o,{to:"/tag/array.html"},{default:s(()=>[ln]),_:1}),n(),e(o,{to:"/tag/binary-search.html"},{default:s(()=>[cn]),_:1})]),t("td",rn,[e(l,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1})])]),t("tr",null,[un,t("td",pn,[t("a",dn,[n("老鼠和奶酪"),e(a)])]),_n,t("td",hn,[e(o,{to:"/tag/greedy.html"},{default:s(()=>[mn]),_:1}),n(),e(o,{to:"/tag/array.html"},{default:s(()=>[kn]),_:1}),n(),e(o,{to:"/tag/sorting.html"},{default:s(()=>[gn]),_:1}),n(),fn]),t("td",bn,[e(l,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1})])]),t("tr",null,[yn,t("td",xn,[t("a",vn,[n("合并后数组中的最大元素"),e(a)])]),wn,t("td",Mn,[e(o,{to:"/tag/greedy.html"},{default:s(()=>[In]),_:1}),n(),e(o,{to:"/tag/array.html"},{default:s(()=>[qn]),_:1})]),t("td",jn,[e(l,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1})])])])])])}const Ln=p(k,[["render",En],["__file","0198.html.vue"]]);export{Ln as default};
