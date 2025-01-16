import{_ as r,r as l,o as d,c as i,a as t,b as e,d as n,w as s,f as p,e as _}from"./app-KDJRKGep.js";const h={},u=t("h1",{id:"_70-爬楼梯",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_70-爬楼梯","aria-hidden":"true"},"#"),e(" 70. 爬楼梯")],-1),m=t("code",null,"记忆化搜索",-1),g=t("code",null,"数学",-1),f=t("code",null,"动态规划",-1),k={href:"https://leetcode.cn/problems/climbing-stairs",target:"_blank",rel:"noopener noreferrer"},b=t("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/climbing-stairs",target:"_blank",rel:"noopener noreferrer"},x=t("code",null,"LeetCode",-1),v=_(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are climbing a staircase. It takes <code>n</code> steps to reach the top.</p><p>Each time you can either climb <code>1</code> or <code>2</code> steps. In how many distinct ways can you climb to the top?</p><p><strong>Example 1:</strong></p><blockquote><p>Input: n = 2</p><p>Output: 2</p><p>Explanation: There are two ways to climb to the top.</p><ol><li><p>1 step + 1 step</p></li><li><p>2 steps</p></li></ol></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: n = 3</p><p>Output: 3</p><p>Explanation: There are three ways to climb to the top.</p><ol><li><p>1 step + 1 step + 1 step</p></li><li><p>1 step + 2 steps</p></li><li><p>2 steps + 1 step</p></li></ol></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= n &lt;= 45</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>假设你正在爬楼梯。需要 n 阶你才能到达楼顶。每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？注意：给定 n 是一个正整数</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这是一个经典的动态规划问题，通常被称为「爬楼梯问题」。</p><p>假设你要爬上第 <code>n</code> 阶楼梯，你可以从第 <code>n-1</code> 阶爬一步上来，也可以从第 <code>n-2</code> 阶爬两步上来，因此到达第 n 阶楼梯的方法数等于到达第 <code>n-1</code> 阶和第 <code>n-2</code> 阶的方法数之和。</p><p>可以得到以下的递推关系：</p><p><code>dp(n) = dp(n - 1) + dp(n - 2)</code></p><p>其中，<code>dp(n)</code> 表示到达第 n 阶楼梯的方法数。</p><p>接下来，需要初始化边界条件。当 <code>n = 1</code> 时，只有一种方法爬到楼顶；当 <code>n = 2</code> 时，有两种方法爬到楼顶（一步一步或直接两步）。因此，可以初始化 <code>dp(1) = 1</code> 和 <code>dp(2) = 2</code>。</p><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是到达楼顶的台阶数量。虽然使用了递归，但通过使用哈希表 <code>map</code> 存储已经计算过的结果，确保每个状态只计算一次。因此，最多会计算 <code>n</code> 次，整体时间复杂度为 <code>O(n)</code>。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，主要的空间消耗来自于哈希表 <code>map</code>，其存储了从 <code>1</code> 到 <code>n</code> 的所有计算结果。此外，递归调用栈的深度也可能达到 <code>O(n)</code>，但主要的空间复杂度来源于 <code>map</code>。因此，整体空间复杂度为 <code>O(n)</code>。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,23),w=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),E=t("td",{style:{"text-align":"center"}},"509",-1),I=t("td",{style:{"text-align":"left"}},"斐波那契数",-1),O={style:{"text-align":"center"}},N={style:{"text-align":"left"}},j=t("code",null,"递归",-1),C=t("code",null,"记忆化搜索",-1),L=t("code",null,"数学",-1),V=t("code",null,"1+",-1),q=t("td",{style:{"text-align":"center"}},"🟢",-1),z={style:{"text-align":"center"}},B={href:"https://leetcode.cn/problems/fibonacci-number",target:"_blank",rel:"noopener noreferrer"},T={href:"https://leetcode.com/problems/fibonacci-number",target:"_blank",rel:"noopener noreferrer"},R=t("td",{style:{"text-align":"center"}},"746",-1),S=t("td",{style:{"text-align":"left"}},"使用最小花费爬楼梯",-1),K={style:{"text-align":"center"}},M={style:{"text-align":"left"}},Y=t("code",null,"数组",-1),A=t("code",null,"动态规划",-1),D=t("td",{style:{"text-align":"center"}},"🟢",-1),F={style:{"text-align":"center"}},G={href:"https://leetcode.cn/problems/min-cost-climbing-stairs",target:"_blank",rel:"noopener noreferrer"},H={href:"https://leetcode.com/problems/min-cost-climbing-stairs",target:"_blank",rel:"noopener noreferrer"},J=t("td",{style:{"text-align":"center"}},"1137",-1),P=t("td",{style:{"text-align":"left"}},"第 N 个泰波那契数",-1),Q={style:{"text-align":"center"}},U={style:{"text-align":"left"}},W=t("code",null,"记忆化搜索",-1),X=t("code",null,"数学",-1),Z=t("code",null,"动态规划",-1),$=t("td",{style:{"text-align":"center"}},"🟢",-1),tt={style:{"text-align":"center"}},et={href:"https://leetcode.cn/problems/n-th-tribonacci-number",target:"_blank",rel:"noopener noreferrer"},nt={href:"https://leetcode.com/problems/n-th-tribonacci-number",target:"_blank",rel:"noopener noreferrer"},st=t("td",{style:{"text-align":"center"}},"2244",-1),ot=t("td",{style:{"text-align":"left"}},"完成所有任务需要的最少轮数",-1),at=t("td",{style:{"text-align":"center"}},null,-1),lt={style:{"text-align":"left"}},ct=t("code",null,"贪心",-1),rt=t("code",null,"数组",-1),dt=t("code",null,"哈希表",-1),it=t("code",null,"1+",-1),pt=t("td",{style:{"text-align":"center"}},"🟠",-1),_t={style:{"text-align":"center"}},ht={href:"https://leetcode.cn/problems/minimum-rounds-to-complete-all-tasks",target:"_blank",rel:"noopener noreferrer"},ut={href:"https://leetcode.com/problems/minimum-rounds-to-complete-all-tasks",target:"_blank",rel:"noopener noreferrer"},mt=t("td",{style:{"text-align":"center"}},"2320",-1),gt=t("td",{style:{"text-align":"left"}},"统计放置房子的方式数",-1),ft=t("td",{style:{"text-align":"center"}},null,-1),kt={style:{"text-align":"left"}},bt=t("code",null,"动态规划",-1),yt=t("td",{style:{"text-align":"center"}},"🟠",-1),xt={style:{"text-align":"center"}},vt={href:"https://leetcode.cn/problems/count-number-of-ways-to-place-houses",target:"_blank",rel:"noopener noreferrer"},wt={href:"https://leetcode.com/problems/count-number-of-ways-to-place-houses",target:"_blank",rel:"noopener noreferrer"},Et=t("td",{style:{"text-align":"center"}},"2400",-1),It=t("td",{style:{"text-align":"left"}},"恰好移动 k 步到达某一位置的方法数目",-1),Ot=t("td",{style:{"text-align":"center"}},null,-1),Nt={style:{"text-align":"left"}},jt=t("code",null,"数学",-1),Ct=t("code",null,"动态规划",-1),Lt=t("code",null,"组合数学",-1),Vt=t("td",{style:{"text-align":"center"}},"🟠",-1),qt={style:{"text-align":"center"}},zt={href:"https://leetcode.cn/problems/number-of-ways-to-reach-a-position-after-exactly-k-steps",target:"_blank",rel:"noopener noreferrer"},Bt={href:"https://leetcode.com/problems/number-of-ways-to-reach-a-position-after-exactly-k-steps",target:"_blank",rel:"noopener noreferrer"},Tt=t("td",{style:{"text-align":"center"}},"2466",-1),Rt=t("td",{style:{"text-align":"left"}},"统计构造好字符串的方案数",-1),St={style:{"text-align":"center"}},Kt={style:{"text-align":"left"}},Mt=t("code",null,"动态规划",-1),Yt=t("td",{style:{"text-align":"center"}},"🟠",-1),At={style:{"text-align":"center"}},Dt={href:"https://leetcode.cn/problems/count-ways-to-build-good-strings",target:"_blank",rel:"noopener noreferrer"},Ft={href:"https://leetcode.com/problems/count-ways-to-build-good-strings",target:"_blank",rel:"noopener noreferrer"},Gt=t("td",{style:{"text-align":"center"}},"2498",-1),Ht=t("td",{style:{"text-align":"left"}},"青蛙过河 II",-1),Jt=t("td",{style:{"text-align":"center"}},null,-1),Pt={style:{"text-align":"left"}},Qt=t("code",null,"贪心",-1),Ut=t("code",null,"数组",-1),Wt=t("code",null,"二分查找",-1),Xt=t("td",{style:{"text-align":"center"}},"🟠",-1),Zt={style:{"text-align":"center"}},$t={href:"https://leetcode.cn/problems/frog-jump-ii",target:"_blank",rel:"noopener noreferrer"},te={href:"https://leetcode.com/problems/frog-jump-ii",target:"_blank",rel:"noopener noreferrer"},ee=t("td",{style:{"text-align":"center"}},"3154",-1),ne=t("td",{style:{"text-align":"left"}},"到达第 K 级台阶的方案数",-1),se=t("td",{style:{"text-align":"center"}},null,-1),oe={style:{"text-align":"left"}},ae=t("code",null,"位运算",-1),le=t("code",null,"记忆化搜索",-1),ce=t("code",null,"数学",-1),re=t("code",null,"2+",-1),de=t("td",{style:{"text-align":"center"}},"🔴",-1),ie={style:{"text-align":"center"}},pe={href:"https://leetcode.cn/problems/find-number-of-ways-to-reach-the-k-th-stair",target:"_blank",rel:"noopener noreferrer"},_e={href:"https://leetcode.com/problems/find-number-of-ways-to-reach-the-k-th-stair",target:"_blank",rel:"noopener noreferrer"},he=t("td",{style:{"text-align":"center"}},"3183",-1),ue=t("td",{style:{"text-align":"left"}},"达到总和的方法数量 🔒",-1),me=t("td",{style:{"text-align":"center"}},null,-1),ge={style:{"text-align":"left"}},fe=t("code",null,"数组",-1),ke=t("code",null,"动态规划",-1),be=t("td",{style:{"text-align":"center"}},"🟠",-1),ye={style:{"text-align":"center"}},xe={href:"https://leetcode.cn/problems/the-number-of-ways-to-make-the-sum",target:"_blank",rel:"noopener noreferrer"},ve={href:"https://leetcode.com/problems/the-number-of-ways-to-make-the-sum",target:"_blank",rel:"noopener noreferrer"};function we(Ee,Ie){const c=l("font"),o=l("RouterLink"),a=l("ExternalLinkIcon");return d(),i("div",null,[u,t("p",null,[e("🟢 "),n(c,{color:"#15bd66"},{default:s(()=>[e("Easy")]),_:1}),e("  🔖  "),n(o,{to:"/tag/memoization.html"},{default:s(()=>[m]),_:1}),e(),n(o,{to:"/tag/math.html"},{default:s(()=>[g]),_:1}),e(),n(o,{to:"/tag/dynamic-programming.html"},{default:s(()=>[f]),_:1}),e("  🔗 "),t("a",k,[b,n(a)]),e(),t("a",y,[x,n(a)])]),v,p(" prettier-ignore "),t("table",null,[w,t("tbody",null,[t("tr",null,[E,I,t("td",O,[n(o,{to:"/problem/0509.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",N,[n(o,{to:"/tag/recursion.html"},{default:s(()=>[j]),_:1}),e(),n(o,{to:"/tag/memoization.html"},{default:s(()=>[C]),_:1}),e(),n(o,{to:"/tag/math.html"},{default:s(()=>[L]),_:1}),e(),V]),q,t("td",z,[t("a",B,[e("🀄️"),n(a)]),e(),t("a",T,[e("🔗"),n(a)])])]),t("tr",null,[R,S,t("td",K,[n(o,{to:"/problem/0746.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",M,[n(o,{to:"/tag/array.html"},{default:s(()=>[Y]),_:1}),e(),n(o,{to:"/tag/dynamic-programming.html"},{default:s(()=>[A]),_:1})]),D,t("td",F,[t("a",G,[e("🀄️"),n(a)]),e(),t("a",H,[e("🔗"),n(a)])])]),t("tr",null,[J,P,t("td",Q,[n(o,{to:"/problem/1137.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",U,[n(o,{to:"/tag/memoization.html"},{default:s(()=>[W]),_:1}),e(),n(o,{to:"/tag/math.html"},{default:s(()=>[X]),_:1}),e(),n(o,{to:"/tag/dynamic-programming.html"},{default:s(()=>[Z]),_:1})]),$,t("td",tt,[t("a",et,[e("🀄️"),n(a)]),e(),t("a",nt,[e("🔗"),n(a)])])]),t("tr",null,[st,ot,at,t("td",lt,[n(o,{to:"/tag/greedy.html"},{default:s(()=>[ct]),_:1}),e(),n(o,{to:"/tag/array.html"},{default:s(()=>[rt]),_:1}),e(),n(o,{to:"/tag/hash-table.html"},{default:s(()=>[dt]),_:1}),e(),it]),pt,t("td",_t,[t("a",ht,[e("🀄️"),n(a)]),e(),t("a",ut,[e("🔗"),n(a)])])]),t("tr",null,[mt,gt,ft,t("td",kt,[n(o,{to:"/tag/dynamic-programming.html"},{default:s(()=>[bt]),_:1})]),yt,t("td",xt,[t("a",vt,[e("🀄️"),n(a)]),e(),t("a",wt,[e("🔗"),n(a)])])]),t("tr",null,[Et,It,Ot,t("td",Nt,[n(o,{to:"/tag/math.html"},{default:s(()=>[jt]),_:1}),e(),n(o,{to:"/tag/dynamic-programming.html"},{default:s(()=>[Ct]),_:1}),e(),n(o,{to:"/tag/combinatorics.html"},{default:s(()=>[Lt]),_:1})]),Vt,t("td",qt,[t("a",zt,[e("🀄️"),n(a)]),e(),t("a",Bt,[e("🔗"),n(a)])])]),t("tr",null,[Tt,Rt,t("td",St,[n(o,{to:"/problem/2466.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",Kt,[n(o,{to:"/tag/dynamic-programming.html"},{default:s(()=>[Mt]),_:1})]),Yt,t("td",At,[t("a",Dt,[e("🀄️"),n(a)]),e(),t("a",Ft,[e("🔗"),n(a)])])]),t("tr",null,[Gt,Ht,Jt,t("td",Pt,[n(o,{to:"/tag/greedy.html"},{default:s(()=>[Qt]),_:1}),e(),n(o,{to:"/tag/array.html"},{default:s(()=>[Ut]),_:1}),e(),n(o,{to:"/tag/binary-search.html"},{default:s(()=>[Wt]),_:1})]),Xt,t("td",Zt,[t("a",$t,[e("🀄️"),n(a)]),e(),t("a",te,[e("🔗"),n(a)])])]),t("tr",null,[ee,ne,se,t("td",oe,[n(o,{to:"/tag/bit-manipulation.html"},{default:s(()=>[ae]),_:1}),e(),n(o,{to:"/tag/memoization.html"},{default:s(()=>[le]),_:1}),e(),n(o,{to:"/tag/math.html"},{default:s(()=>[ce]),_:1}),e(),re]),de,t("td",ie,[t("a",pe,[e("🀄️"),n(a)]),e(),t("a",_e,[e("🔗"),n(a)])])]),t("tr",null,[he,ue,me,t("td",ge,[n(o,{to:"/tag/array.html"},{default:s(()=>[fe]),_:1}),e(),n(o,{to:"/tag/dynamic-programming.html"},{default:s(()=>[ke]),_:1})]),be,t("td",ye,[t("a",xe,[e("🀄️"),n(a)]),e(),t("a",ve,[e("🔗"),n(a)])])])])])])}const Ne=r(h,[["render",we],["__file","0070.html.vue"]]);export{Ne as default};
