import{_ as p,r as l,o as i,c as r,a as t,b as n,d as s,w as e,f as d,e as u}from"./app-5LzGvT4H.js";const _={},h=t("h1",{id:"_64-最小路径和",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_64-最小路径和","aria-hidden":"true"},"#"),n(" 64. 最小路径和")],-1),m=t("code",null,"数组",-1),k=t("code",null,"动态规划",-1),g=t("code",null,"矩阵",-1),f={href:"https://leetcode.cn/problems/minimum-path-sum",target:"_blank",rel:"noopener noreferrer"},b=t("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/minimum-path-sum",target:"_blank",rel:"noopener noreferrer"},x=t("code",null,"LeetCode",-1),v=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a <code>m x n</code> <code>grid</code> filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.</p><p><strong>Note:</strong> You can only move either down or right at any point in time.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/11/05/minpath.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: grid = [[1,3,1],[1,5,1],[4,2,1]]</p><p>Output: 7</p><p>Explanation: Because the path 1 -&gt; 3 -&gt; 1 -&gt; 1 -&gt; 1 minimizes the sum.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: grid = [[1,2,3],[4,5,6]]</p><p>Output: 12</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>m == grid.length</code></li><li><code>n == grid[i].length</code></li><li><code>1 &lt;= m, n &lt;= 200</code></li><li><code>0 &lt;= grid[i][j] &lt;= 200</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个包含非负整数的 <code>m x n</code> 网格 <code>grid</code> ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。</p><p><strong>说明</strong>：每次只能向下或者向右移动一步。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>动态规划</strong>：使用动态规划来解决问题。定义一个二维数组 <code>dp</code>，其中 <code>dp[i][j]</code> 表示从 <code>(0, 0)</code> 到 <code>(i, j)</code> 的最小路径和。</p></li><li><p><strong>状态转移方程</strong>：可以从左上角到达 <code>(i, j)</code> 的路径有两条：从 <code>(i-1, j)</code> 向下移动和从 <code>(i, j-1)</code> 向右移动。因此，状态转移方程为 <code>dp[i][j] = grid[i][j] + min(dp[i-1][j], dp[i][j-1])</code>。</p></li><li><p><strong>边界条件</strong>：对于第一行和第一列，由于它们只能从上方或左侧移动到达，所以路径和等于前一个格子的路径和加上当前格子的值。即 <code>dp[0][j] = dp[0][j-1] + grid[0][j]</code> 和 <code>dp[i][0] = dp[i-1][0] + grid[i][0]</code>。</p></li><li><p><strong>初始化</strong>：初始化第一行和第一列的路径和。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>: <code>O(m * n)</code>，遍历整个二维数组。</li><li><strong>空间复杂度</strong>: <code>O(1)</code>，由于<code>dp[i][j]</code> 只与 <code>dp[i-1][j]</code> 及 <code>dp[i][j-1]</code> 有关，所以可以直接原地修改 <code>grid</code> 数组。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">grid</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">minPathSum</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">grid</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> m <span class="token operator">=</span> grid<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">const</span> n <span class="token operator">=</span> grid<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> m<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> j <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token comment">// 处理左上角的边界情况</span>
				<span class="token keyword">continue</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token comment">// 处理第一行的边界情况</span>
				grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token comment">// 处理第一列的边界情况</span>
				grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> grid<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">+</span> grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
				grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>grid<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span> grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">+</span> grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> grid<span class="token punctuation">[</span>m <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,20),j=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"left"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),w=t("td",{style:{"text-align":"center"}},"62",-1),q=t("td",{style:{"text-align":"left"}},"不同路径",-1),E={style:{"text-align":"center"}},N={style:{"text-align":"left"}},C=t("code",null,"数学",-1),L=t("code",null,"动态规划",-1),V=t("code",null,"组合数学",-1),B=t("td",{style:{"text-align":"left"}},"🟠",-1),I={style:{"text-align":"center"}},O={href:"https://leetcode.cn/problems/unique-paths",target:"_blank",rel:"noopener noreferrer"},z={href:"https://leetcode.com/problems/unique-paths",target:"_blank",rel:"noopener noreferrer"},M=t("td",{style:{"text-align":"center"}},"174",-1),R=t("td",{style:{"text-align":"left"}},"地下城游戏",-1),S={style:{"text-align":"center"}},G={style:{"text-align":"left"}},K=t("code",null,"数组",-1),P=t("code",null,"动态规划",-1),T=t("code",null,"矩阵",-1),Y=t("td",{style:{"text-align":"left"}},"🔴",-1),A={style:{"text-align":"center"}},D={href:"https://leetcode.cn/problems/dungeon-game",target:"_blank",rel:"noopener noreferrer"},F={href:"https://leetcode.com/problems/dungeon-game",target:"_blank",rel:"noopener noreferrer"},H=t("td",{style:{"text-align":"center"}},"741",-1),J=t("td",{style:{"text-align":"left"}},"摘樱桃",-1),Q=t("td",{style:{"text-align":"center"}},null,-1),U={style:{"text-align":"left"}},W=t("code",null,"数组",-1),X=t("code",null,"动态规划",-1),Z=t("code",null,"矩阵",-1),$=t("td",{style:{"text-align":"left"}},"🔴",-1),tt={style:{"text-align":"center"}},nt={href:"https://leetcode.cn/problems/cherry-pickup",target:"_blank",rel:"noopener noreferrer"},st={href:"https://leetcode.com/problems/cherry-pickup",target:"_blank",rel:"noopener noreferrer"},et=t("td",{style:{"text-align":"center"}},"1937",-1),at=t("td",{style:{"text-align":"left"}},"扣分后的最大得分",-1),ot=t("td",{style:{"text-align":"center"}},null,-1),lt={style:{"text-align":"left"}},ct=t("code",null,"数组",-1),pt=t("code",null,"动态规划",-1),it=t("code",null,"矩阵",-1),rt=t("td",{style:{"text-align":"left"}},"🟠",-1),dt={style:{"text-align":"center"}},ut={href:"https://leetcode.cn/problems/maximum-number-of-points-with-cost",target:"_blank",rel:"noopener noreferrer"},_t={href:"https://leetcode.com/problems/maximum-number-of-points-with-cost",target:"_blank",rel:"noopener noreferrer"},ht=t("td",{style:{"text-align":"center"}},"2087",-1),mt=t("td",{style:{"text-align":"left"}},"网格图中机器人回家的最小代价",-1),kt=t("td",{style:{"text-align":"center"}},null,-1),gt={style:{"text-align":"left"}},ft=t("code",null,"贪心",-1),bt=t("code",null,"数组",-1),yt=t("td",{style:{"text-align":"left"}},"🟠",-1),xt={style:{"text-align":"center"}},vt={href:"https://leetcode.cn/problems/minimum-cost-homecoming-of-a-robot-in-a-grid",target:"_blank",rel:"noopener noreferrer"},jt={href:"https://leetcode.com/problems/minimum-cost-homecoming-of-a-robot-in-a-grid",target:"_blank",rel:"noopener noreferrer"},wt=t("td",{style:{"text-align":"center"}},"2304",-1),qt=t("td",{style:{"text-align":"left"}},"网格中的最小路径代价",-1),Et=t("td",{style:{"text-align":"center"}},null,-1),Nt={style:{"text-align":"left"}},Ct=t("code",null,"数组",-1),Lt=t("code",null,"动态规划",-1),Vt=t("code",null,"矩阵",-1),Bt=t("td",{style:{"text-align":"left"}},"🟠",-1),It={style:{"text-align":"center"}},Ot={href:"https://leetcode.cn/problems/minimum-path-cost-in-a-grid",target:"_blank",rel:"noopener noreferrer"},zt={href:"https://leetcode.com/problems/minimum-path-cost-in-a-grid",target:"_blank",rel:"noopener noreferrer"},Mt=t("td",{style:{"text-align":"center"}},"2435",-1),Rt=t("td",{style:{"text-align":"left"}},"矩阵中和能被 K 整除的路径",-1),St=t("td",{style:{"text-align":"center"}},null,-1),Gt={style:{"text-align":"left"}},Kt=t("code",null,"数组",-1),Pt=t("code",null,"动态规划",-1),Tt=t("code",null,"矩阵",-1),Yt=t("td",{style:{"text-align":"left"}},"🔴",-1),At={style:{"text-align":"center"}},Dt={href:"https://leetcode.cn/problems/paths-in-matrix-whose-sum-is-divisible-by-k",target:"_blank",rel:"noopener noreferrer"},Ft={href:"https://leetcode.com/problems/paths-in-matrix-whose-sum-is-divisible-by-k",target:"_blank",rel:"noopener noreferrer"},Ht=t("td",{style:{"text-align":"center"}},"2510",-1),Jt=t("td",{style:{"text-align":"left"}},"检查是否有路径经过相同数量的 0 和 1 🔒",-1),Qt=t("td",{style:{"text-align":"center"}},null,-1),Ut={style:{"text-align":"left"}},Wt=t("code",null,"数组",-1),Xt=t("code",null,"动态规划",-1),Zt=t("code",null,"矩阵",-1),$t=t("td",{style:{"text-align":"left"}},"🟠",-1),tn={style:{"text-align":"center"}},nn={href:"https://leetcode.cn/problems/check-if-there-is-a-path-with-equal-number-of-0s-and-1s",target:"_blank",rel:"noopener noreferrer"},sn={href:"https://leetcode.com/problems/check-if-there-is-a-path-with-equal-number-of-0s-and-1s",target:"_blank",rel:"noopener noreferrer"},en=t("td",{style:{"text-align":"center"}},"2662",-1),an=t("td",{style:{"text-align":"left"}},"前往目标的最小代价",-1),on=t("td",{style:{"text-align":"center"}},null,-1),ln={style:{"text-align":"left"}},cn=t("code",null,"图",-1),pn=t("code",null,"数组",-1),rn=t("code",null,"最短路",-1),dn=t("code",null,"1+",-1),un=t("td",{style:{"text-align":"left"}},"🟠",-1),_n={style:{"text-align":"center"}},hn={href:"https://leetcode.cn/problems/minimum-cost-of-a-path-with-special-roads",target:"_blank",rel:"noopener noreferrer"},mn={href:"https://leetcode.com/problems/minimum-cost-of-a-path-with-special-roads",target:"_blank",rel:"noopener noreferrer"};function kn(gn,fn){const c=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return i(),r("div",null,[h,t("p",null,[n("🟠 "),s(c,{color:"#ffb800"},{default:e(()=>[n("Medium")]),_:1}),n("  🔖  "),s(a,{to:"/tag/array.html"},{default:e(()=>[m]),_:1}),n(),s(a,{to:"/tag/dynamic-programming.html"},{default:e(()=>[k]),_:1}),n(),s(a,{to:"/tag/matrix.html"},{default:e(()=>[g]),_:1}),n("  🔗 "),t("a",f,[b,s(o)]),n(),t("a",y,[x,s(o)])]),v,d(" prettier-ignore "),t("table",null,[j,t("tbody",null,[t("tr",null,[w,q,t("td",E,[s(a,{to:"/problem/0062.html"},{default:e(()=>[n("[✓]")]),_:1})]),t("td",N,[s(a,{to:"/tag/math.html"},{default:e(()=>[C]),_:1}),n(),s(a,{to:"/tag/dynamic-programming.html"},{default:e(()=>[L]),_:1}),n(),s(a,{to:"/tag/combinatorics.html"},{default:e(()=>[V]),_:1})]),B,t("td",I,[t("a",O,[n("🀄️"),s(o)]),n(),t("a",z,[n("🔗"),s(o)])])]),t("tr",null,[M,R,t("td",S,[s(a,{to:"/problem/0174.html"},{default:e(()=>[n("[✓]")]),_:1})]),t("td",G,[s(a,{to:"/tag/array.html"},{default:e(()=>[K]),_:1}),n(),s(a,{to:"/tag/dynamic-programming.html"},{default:e(()=>[P]),_:1}),n(),s(a,{to:"/tag/matrix.html"},{default:e(()=>[T]),_:1})]),Y,t("td",A,[t("a",D,[n("🀄️"),s(o)]),n(),t("a",F,[n("🔗"),s(o)])])]),t("tr",null,[H,J,Q,t("td",U,[s(a,{to:"/tag/array.html"},{default:e(()=>[W]),_:1}),n(),s(a,{to:"/tag/dynamic-programming.html"},{default:e(()=>[X]),_:1}),n(),s(a,{to:"/tag/matrix.html"},{default:e(()=>[Z]),_:1})]),$,t("td",tt,[t("a",nt,[n("🀄️"),s(o)]),n(),t("a",st,[n("🔗"),s(o)])])]),t("tr",null,[et,at,ot,t("td",lt,[s(a,{to:"/tag/array.html"},{default:e(()=>[ct]),_:1}),n(),s(a,{to:"/tag/dynamic-programming.html"},{default:e(()=>[pt]),_:1}),n(),s(a,{to:"/tag/matrix.html"},{default:e(()=>[it]),_:1})]),rt,t("td",dt,[t("a",ut,[n("🀄️"),s(o)]),n(),t("a",_t,[n("🔗"),s(o)])])]),t("tr",null,[ht,mt,kt,t("td",gt,[s(a,{to:"/tag/greedy.html"},{default:e(()=>[ft]),_:1}),n(),s(a,{to:"/tag/array.html"},{default:e(()=>[bt]),_:1})]),yt,t("td",xt,[t("a",vt,[n("🀄️"),s(o)]),n(),t("a",jt,[n("🔗"),s(o)])])]),t("tr",null,[wt,qt,Et,t("td",Nt,[s(a,{to:"/tag/array.html"},{default:e(()=>[Ct]),_:1}),n(),s(a,{to:"/tag/dynamic-programming.html"},{default:e(()=>[Lt]),_:1}),n(),s(a,{to:"/tag/matrix.html"},{default:e(()=>[Vt]),_:1})]),Bt,t("td",It,[t("a",Ot,[n("🀄️"),s(o)]),n(),t("a",zt,[n("🔗"),s(o)])])]),t("tr",null,[Mt,Rt,St,t("td",Gt,[s(a,{to:"/tag/array.html"},{default:e(()=>[Kt]),_:1}),n(),s(a,{to:"/tag/dynamic-programming.html"},{default:e(()=>[Pt]),_:1}),n(),s(a,{to:"/tag/matrix.html"},{default:e(()=>[Tt]),_:1})]),Yt,t("td",At,[t("a",Dt,[n("🀄️"),s(o)]),n(),t("a",Ft,[n("🔗"),s(o)])])]),t("tr",null,[Ht,Jt,Qt,t("td",Ut,[s(a,{to:"/tag/array.html"},{default:e(()=>[Wt]),_:1}),n(),s(a,{to:"/tag/dynamic-programming.html"},{default:e(()=>[Xt]),_:1}),n(),s(a,{to:"/tag/matrix.html"},{default:e(()=>[Zt]),_:1})]),$t,t("td",tn,[t("a",nn,[n("🀄️"),s(o)]),n(),t("a",sn,[n("🔗"),s(o)])])]),t("tr",null,[en,an,on,t("td",ln,[s(a,{to:"/tag/graph.html"},{default:e(()=>[cn]),_:1}),n(),s(a,{to:"/tag/array.html"},{default:e(()=>[pn]),_:1}),n(),s(a,{to:"/tag/shortest-path.html"},{default:e(()=>[rn]),_:1}),n(),dn]),un,t("td",_n,[t("a",hn,[n("🀄️"),s(o)]),n(),t("a",mn,[n("🔗"),s(o)])])])])])])}const yn=p(_,[["render",kn],["__file","0064.html.vue"]]);export{yn as default};
