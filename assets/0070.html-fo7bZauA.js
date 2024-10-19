import{_ as i,r as c,o as d,c as r,a as t,d as n,b as e,w as s,f as p,e as u}from"./app-ynO5B_DP.js";const _={},h={id:"_70-爬楼梯",tabindex:"-1"},m=t("a",{class:"header-anchor",href:"#_70-爬楼梯","aria-hidden":"true"},"#",-1),f={href:"https://leetcode.com/problems/climbing-stairs",target:"_blank",rel:"noopener noreferrer"},g=t("code",null,"记忆化搜索",-1),k=t("code",null,"数学",-1),b=t("code",null,"动态规划",-1),y={href:"https://leetcode.com/problems/climbing-stairs",target:"_blank",rel:"noopener noreferrer"},x=t("code",null,"LeetCode",-1),v=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are climbing a staircase. It takes <code>n</code> steps to reach the top.</p><p>Each time you can either climb <code>1</code> or <code>2</code> steps. In how many distinct ways can you climb to the top?</p><p><strong>Example 1:</strong></p><blockquote><p>Input: n = 2</p><p>Output: 2</p><p>Explanation: There are two ways to climb to the top.</p><ol><li><p>1 step + 1 step</p></li><li><p>2 steps</p></li></ol></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: n = 3</p><p>Output: 3</p><p>Explanation: There are three ways to climb to the top.</p><ol><li><p>1 step + 1 step + 1 step</p></li><li><p>1 step + 2 steps</p></li><li><p>2 steps + 1 step</p></li></ol></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= n &lt;= 45</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>假设你正在爬楼梯。需要 n 阶你才能到达楼顶。每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？注意：给定 n 是一个正整数</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这是一个经典的动态规划问题，通常被称为「爬楼梯问题」。假设你要爬上第 n 阶楼梯，你可以从第 n-1 阶爬一步上来，也可以从第 n-2 阶爬两步上来，因此到达第 n 阶楼梯的方法数等于到达第 n-1 阶和第 n-2 阶的方法数之和。这样，我们可以得到以下的递推关系：</p><p><code>dp(n) = dp(n - 1) + dp(n - 2)</code></p><p>其中，<code>dp(n)</code> 表示到达第 n 阶楼梯的方法数。</p><p>接下来，我们需要初始化边界条件。当 <code>n = 1</code> 时，只有一种方法爬到楼顶；当 <code>n = 2</code> 时，有两种方法爬到楼顶（一步一步或直接两步）。因此，我们可以初始化 <code>dp(1) = 1</code> 和 <code>dp(2) = 2</code>。</p><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是到达楼顶的台阶数量。虽然使用了递归，但通过使用哈希表 <code>map</code> 存储已经计算过的结果，确保每个状态只计算一次。因此，最多会计算 <code>n</code> 次，整体时间复杂度为 <code>O(n)</code>。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，主要的空间消耗来自于哈希表 <code>map</code>，其存储了从 <code>1</code> 到 <code>n</code> 的所有计算结果。此外，递归调用栈的深度也可能达到 <code>O(n)</code>，但主要的空间复杂度来源于 <code>map</code>。因此，整体空间复杂度为 <code>O(n)</code>。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">n</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">climbStairs</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> <span class="token function-variable function">helper</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;=</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token keyword">return</span> n<span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>map<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span> <span class="token function">helper</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">helper</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token function">helper</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,21),w=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"left"}},"难度")])],-1),E=t("td",{style:{"text-align":"center"}},"509",-1),I={style:{"text-align":"left"}},M={href:"https://leetcode.com/problems/fibonacci-number",target:"_blank",rel:"noopener noreferrer"},O={style:{"text-align":"center"}},N={href:"/problem/0509",target:"_blank",rel:"noopener noreferrer"},C={style:{"text-align":"left"}},L=t("code",null,"递归",-1),V=t("code",null,"记忆化搜索",-1),j=t("code",null,"数学",-1),q=t("code",null,"1+",-1),z={style:{"text-align":"left"}},B=t("td",{style:{"text-align":"center"}},"746",-1),T={style:{"text-align":"left"}},R={href:"https://leetcode.com/problems/min-cost-climbing-stairs",target:"_blank",rel:"noopener noreferrer"},S=t("td",{style:{"text-align":"center"}},null,-1),H={style:{"text-align":"left"}},K=t("code",null,"数组",-1),Y=t("code",null,"动态规划",-1),A={style:{"text-align":"left"}},D=t("td",{style:{"text-align":"center"}},"1137",-1),F={style:{"text-align":"left"}},G={href:"https://leetcode.com/problems/n-th-tribonacci-number",target:"_blank",rel:"noopener noreferrer"},J={style:{"text-align":"center"}},P={href:"/problem/1137",target:"_blank",rel:"noopener noreferrer"},Q={style:{"text-align":"left"}},U=t("code",null,"记忆化搜索",-1),W=t("code",null,"数学",-1),X=t("code",null,"动态规划",-1),Z={style:{"text-align":"left"}},$=t("td",{style:{"text-align":"center"}},"2244",-1),tt={style:{"text-align":"left"}},et={href:"https://leetcode.com/problems/minimum-rounds-to-complete-all-tasks",target:"_blank",rel:"noopener noreferrer"},nt=t("td",{style:{"text-align":"center"}},null,-1),st={style:{"text-align":"left"}},ot=t("code",null,"贪心",-1),at=t("code",null,"数组",-1),lt=t("code",null,"哈希表",-1),ct=t("code",null,"1+",-1),it={style:{"text-align":"left"}},dt=t("td",{style:{"text-align":"center"}},"2320",-1),rt={style:{"text-align":"left"}},pt={href:"https://leetcode.com/problems/count-number-of-ways-to-place-houses",target:"_blank",rel:"noopener noreferrer"},ut=t("td",{style:{"text-align":"center"}},null,-1),_t={style:{"text-align":"left"}},ht=t("code",null,"动态规划",-1),mt={style:{"text-align":"left"}},ft=t("td",{style:{"text-align":"center"}},"2400",-1),gt={style:{"text-align":"left"}},kt={href:"https://leetcode.com/problems/number-of-ways-to-reach-a-position-after-exactly-k-steps",target:"_blank",rel:"noopener noreferrer"},bt=t("td",{style:{"text-align":"center"}},null,-1),yt={style:{"text-align":"left"}},xt=t("code",null,"数学",-1),vt=t("code",null,"动态规划",-1),wt=t("code",null,"组合数学",-1),Et={style:{"text-align":"left"}},It=t("td",{style:{"text-align":"center"}},"2466",-1),Mt={style:{"text-align":"left"}},Ot={href:"https://leetcode.com/problems/count-ways-to-build-good-strings",target:"_blank",rel:"noopener noreferrer"},Nt=t("td",{style:{"text-align":"center"}},null,-1),Ct={style:{"text-align":"left"}},Lt=t("code",null,"动态规划",-1),Vt={style:{"text-align":"left"}},jt=t("td",{style:{"text-align":"center"}},"2498",-1),qt={style:{"text-align":"left"}},zt={href:"https://leetcode.com/problems/frog-jump-ii",target:"_blank",rel:"noopener noreferrer"},Bt=t("td",{style:{"text-align":"center"}},null,-1),Tt={style:{"text-align":"left"}},Rt=t("code",null,"贪心",-1),St=t("code",null,"数组",-1),Ht=t("code",null,"二分查找",-1),Kt={style:{"text-align":"left"}},Yt=t("td",{style:{"text-align":"center"}},"3154",-1),At={style:{"text-align":"left"}},Dt={href:"https://leetcode.com/problems/find-number-of-ways-to-reach-the-k-th-stair",target:"_blank",rel:"noopener noreferrer"},Ft=t("td",{style:{"text-align":"center"}},null,-1),Gt={style:{"text-align":"left"}},Jt=t("code",null,"位运算",-1),Pt=t("code",null,"记忆化搜索",-1),Qt=t("code",null,"数学",-1),Ut=t("code",null,"2+",-1),Wt={style:{"text-align":"left"}},Xt=t("td",{style:{"text-align":"center"}},"3183",-1),Zt={style:{"text-align":"left"}},$t={href:"https://leetcode.com/problems/the-number-of-ways-to-make-the-sum",target:"_blank",rel:"noopener noreferrer"},te=t("td",{style:{"text-align":"center"}},null,-1),ee={style:{"text-align":"left"}},ne=t("code",null,"数组",-1),se=t("code",null,"动态规划",-1),oe={style:{"text-align":"left"}};function ae(le,ce){const a=c("ExternalLinkIcon"),l=c("font"),o=c("RouterLink");return d(),r("div",null,[t("h1",h,[m,n(),t("a",f,[n("70. 爬楼梯"),e(a)])]),t("p",null,[n("🟢 "),e(l,{color:"#15bd66"},{default:s(()=>[n("Easy")]),_:1}),n("  🔖  "),e(o,{to:"/outline/tag/memoization.html"},{default:s(()=>[g]),_:1}),n(),e(o,{to:"/outline/tag/math.html"},{default:s(()=>[k]),_:1}),n(),e(o,{to:"/outline/tag/dynamic-programming.html"},{default:s(()=>[b]),_:1}),n("  🔗 "),t("a",y,[x,e(a)])]),v,p(" prettier-ignore "),t("table",null,[w,t("tbody",null,[t("tr",null,[E,t("td",I,[t("a",M,[n("斐波那契数"),e(a)])]),t("td",O,[t("a",N,[n("[✓]"),e(a)])]),t("td",C,[e(o,{to:"/outline/tag/recursion.html"},{default:s(()=>[L]),_:1}),n(),e(o,{to:"/outline/tag/memoization.html"},{default:s(()=>[V]),_:1}),n(),e(o,{to:"/outline/tag/math.html"},{default:s(()=>[j]),_:1}),n(),q]),t("td",z,[e(l,{color:"#15bd66"},{default:s(()=>[n("Easy")]),_:1})])]),t("tr",null,[B,t("td",T,[t("a",R,[n("使用最小花费爬楼梯"),e(a)])]),S,t("td",H,[e(o,{to:"/outline/tag/array.html"},{default:s(()=>[K]),_:1}),n(),e(o,{to:"/outline/tag/dynamic-programming.html"},{default:s(()=>[Y]),_:1})]),t("td",A,[e(l,{color:"#15bd66"},{default:s(()=>[n("Easy")]),_:1})])]),t("tr",null,[D,t("td",F,[t("a",G,[n("第 N 个泰波那契数"),e(a)])]),t("td",J,[t("a",P,[n("[✓]"),e(a)])]),t("td",Q,[e(o,{to:"/outline/tag/memoization.html"},{default:s(()=>[U]),_:1}),n(),e(o,{to:"/outline/tag/math.html"},{default:s(()=>[W]),_:1}),n(),e(o,{to:"/outline/tag/dynamic-programming.html"},{default:s(()=>[X]),_:1})]),t("td",Z,[e(l,{color:"#15bd66"},{default:s(()=>[n("Easy")]),_:1})])]),t("tr",null,[$,t("td",tt,[t("a",et,[n("完成所有任务需要的最少轮数"),e(a)])]),nt,t("td",st,[e(o,{to:"/outline/tag/greedy.html"},{default:s(()=>[ot]),_:1}),n(),e(o,{to:"/outline/tag/array.html"},{default:s(()=>[at]),_:1}),n(),e(o,{to:"/outline/tag/hash-table.html"},{default:s(()=>[lt]),_:1}),n(),ct]),t("td",it,[e(l,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1})])]),t("tr",null,[dt,t("td",rt,[t("a",pt,[n("统计放置房子的方式数"),e(a)])]),ut,t("td",_t,[e(o,{to:"/outline/tag/dynamic-programming.html"},{default:s(()=>[ht]),_:1})]),t("td",mt,[e(l,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1})])]),t("tr",null,[ft,t("td",gt,[t("a",kt,[n("恰好移动 k 步到达某一位置的方法数目"),e(a)])]),bt,t("td",yt,[e(o,{to:"/outline/tag/math.html"},{default:s(()=>[xt]),_:1}),n(),e(o,{to:"/outline/tag/dynamic-programming.html"},{default:s(()=>[vt]),_:1}),n(),e(o,{to:"/outline/tag/combinatorics.html"},{default:s(()=>[wt]),_:1})]),t("td",Et,[e(l,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1})])]),t("tr",null,[It,t("td",Mt,[t("a",Ot,[n("统计构造好字符串的方案数"),e(a)])]),Nt,t("td",Ct,[e(o,{to:"/outline/tag/dynamic-programming.html"},{default:s(()=>[Lt]),_:1})]),t("td",Vt,[e(l,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1})])]),t("tr",null,[jt,t("td",qt,[t("a",zt,[n("青蛙过河 II"),e(a)])]),Bt,t("td",Tt,[e(o,{to:"/outline/tag/greedy.html"},{default:s(()=>[Rt]),_:1}),n(),e(o,{to:"/outline/tag/array.html"},{default:s(()=>[St]),_:1}),n(),e(o,{to:"/outline/tag/binary-search.html"},{default:s(()=>[Ht]),_:1})]),t("td",Kt,[e(l,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1})])]),t("tr",null,[Yt,t("td",At,[t("a",Dt,[n("到达第 K 级台阶的方案数"),e(a)])]),Ft,t("td",Gt,[e(o,{to:"/outline/tag/bit-manipulation.html"},{default:s(()=>[Jt]),_:1}),n(),e(o,{to:"/outline/tag/memoization.html"},{default:s(()=>[Pt]),_:1}),n(),e(o,{to:"/outline/tag/math.html"},{default:s(()=>[Qt]),_:1}),n(),Ut]),t("td",Wt,[e(l,{color:"#ff334b"},{default:s(()=>[n("Hard")]),_:1})])]),t("tr",null,[Xt,t("td",Zt,[t("a",$t,[n("达到总和的方法数量"),e(a)])]),te,t("td",ee,[e(o,{to:"/outline/tag/array.html"},{default:s(()=>[ne]),_:1}),n(),e(o,{to:"/outline/tag/dynamic-programming.html"},{default:s(()=>[se]),_:1})]),t("td",oe,[e(l,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1})])])])])])}const de=i(_,[["render",ae],["__file","0070.html.vue"]]);export{de as default};
