import{_ as p,r as l,o as r,c as i,a as t,b as n,d as e,w as s,f as d,e as u}from"./app-XFeYdzZv.js";const _={},h=t("h1",{id:"_322-零钱兑换",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_322-零钱兑换","aria-hidden":"true"},"#"),n(" 322. 零钱兑换")],-1),m=t("code",null,"广度优先搜索",-1),k=t("code",null,"数组",-1),g=t("code",null,"动态规划",-1),f={href:"https://leetcode.cn/problems/coin-change",target:"_blank",rel:"noopener noreferrer"},b=t("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/coin-change",target:"_blank",rel:"noopener noreferrer"},x=t("code",null,"LeetCode",-1),v=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given an integer array <code>coins</code> representing coins of different denominations and an integer <code>amount</code> representing a total amount of money.</p><p>Return <em>the fewest number of coins that you need to make up that amount</em>. If that amount of money cannot be made up by any combination of the coins, return <code>-1</code>.</p><p>You may assume that you have an infinite number of each kind of coin.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: coins = [1,2,5], amount = 11</p><p>Output: 3</p><p>Explanation: 11 = 5 + 5 + 1</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: coins = [2], amount = 3</p><p>Output: -1</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: coins = [1], amount = 0</p><p>Output: 0</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= coins.length &lt;= 12</code></li><li><code>1 &lt;= coins[i] &lt;= 2^31 - 1</code></li><li><code>0 &lt;= amount &lt;= 10^4</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个整数数组 <code>coins</code> ，表示不同面额的硬币；以及一个整数 <code>amount</code> ，表示总金额。</p><p>计算并返回可以凑成总金额所需的 <strong>最少的硬币个数</strong> 。如果没有任何一种硬币组合能组成总金额，返回 <code>-1</code> 。</p><p>你可以认为每种硬币的数量是无限的。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>可以使用动态规化，定义一个数组<code>dp</code>，其中<code>dp[i]</code>表示凑齐金额<code>i</code>所需的最少硬币数。</p><ul><li>初始化数组 <code>dp</code> 为 <code>-666</code>，便于后续取最小值。</li><li>将 base case <code>dp[0]</code> 设置为 <code>0</code>，表示凑齐金额 <code>0</code> 不需要任何硬币。</li><li>对于每个金额 <code>i</code>，遍历硬币的面额，计算凑齐金额 <code>i</code> 所需的最少硬币数。</li><li>状态转移方程为：<code>dp[i] = min(dp[i], dp[i - coin] + 1)</code>，其中 <code>coin</code> 为硬币的面额。</li><li>最终，<code>dp[amount]</code> 即为凑齐总金额所需的最少硬币数。</li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n * amount)</code>，其中 <code>n</code> 是硬币的数量，<code>amount</code> 是目标金额。对于每个金额尝试使用每种硬币，因此在最坏情况下，可能对 <code>amount</code> 种金额进行 <code>O(n)</code> 次递归调用。</li><li><strong>空间复杂度</strong>：<code>O(amount)</code><ul><li>使用了一个长度为 <code>amount + 1</code> 的数组 <code>dp</code>；</li><li>递归调用的深度在最坏情况下可能达到 <code>amount</code>。</li></ul></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">coins</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">amount</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">coinChange</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">coins<span class="token punctuation">,</span> amount</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> dp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>amount <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">666</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> <span class="token function-variable function">helper</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>dp<span class="token punctuation">[</span>num<span class="token punctuation">]</span> <span class="token operator">!==</span> <span class="token operator">-</span><span class="token number">666</span><span class="token punctuation">)</span> <span class="token keyword">return</span> dp<span class="token punctuation">[</span>num<span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token number">Infinity</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> coin <span class="token keyword">of</span> coins<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">let</span> sub <span class="token operator">=</span> <span class="token function">helper</span><span class="token punctuation">(</span>num <span class="token operator">-</span> coin<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>sub <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">continue</span><span class="token punctuation">;</span>
			res <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> sub <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		dp<span class="token punctuation">[</span>num<span class="token punctuation">]</span> <span class="token operator">=</span> res <span class="token operator">==</span> <span class="token number">Infinity</span> <span class="token operator">?</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">:</span> res<span class="token punctuation">;</span>
		<span class="token keyword">return</span> dp<span class="token punctuation">[</span>num<span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token function">helper</span><span class="token punctuation">(</span>amount<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,24),w=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),q=t("td",{style:{"text-align":"center"}},"983",-1),I=t("td",{style:{"text-align":"left"}},"最低票价",-1),E={style:{"text-align":"center"}},C={style:{"text-align":"left"}},O=t("code",null,"数组",-1),L=t("code",null,"动态规划",-1),N=t("td",{style:{"text-align":"center"}},"🟠",-1),V={style:{"text-align":"center"}},j={href:"https://leetcode.cn/problems/minimum-cost-for-tickets",target:"_blank",rel:"noopener noreferrer"},B={href:"https://leetcode.com/problems/minimum-cost-for-tickets",target:"_blank",rel:"noopener noreferrer"},R=t("td",{style:{"text-align":"center"}},"2218",-1),M=t("td",{style:{"text-align":"left"}},"从栈中取出 K 个硬币的最大面值和",-1),Y=t("td",{style:{"text-align":"center"}},null,-1),A={style:{"text-align":"left"}},K=t("code",null,"数组",-1),S=t("code",null,"动态规划",-1),T=t("code",null,"前缀和",-1),z=t("td",{style:{"text-align":"center"}},"🔴",-1),D={style:{"text-align":"center"}},F={href:"https://leetcode.cn/problems/maximum-value-of-k-coins-from-piles",target:"_blank",rel:"noopener noreferrer"},G={href:"https://leetcode.com/problems/maximum-value-of-k-coins-from-piles",target:"_blank",rel:"noopener noreferrer"},H=t("td",{style:{"text-align":"center"}},"2224",-1),J=t("td",{style:{"text-align":"left"}},"转化时间需要的最少操作数",-1),P={style:{"text-align":"center"}},Q={style:{"text-align":"left"}},U=t("code",null,"贪心",-1),W=t("code",null,"字符串",-1),X=t("td",{style:{"text-align":"center"}},"🟢",-1),Z={style:{"text-align":"center"}},$={href:"https://leetcode.cn/problems/minimum-number-of-operations-to-convert-time",target:"_blank",rel:"noopener noreferrer"},tt={href:"https://leetcode.com/problems/minimum-number-of-operations-to-convert-time",target:"_blank",rel:"noopener noreferrer"},nt=t("td",{style:{"text-align":"center"}},"2547",-1),et=t("td",{style:{"text-align":"left"}},"拆分数组的最小代价",-1),st=t("td",{style:{"text-align":"center"}},null,-1),at={style:{"text-align":"left"}},ot=t("code",null,"数组",-1),lt=t("code",null,"哈希表",-1),ct=t("code",null,"动态规划",-1),pt=t("code",null,"1+",-1),rt=t("td",{style:{"text-align":"center"}},"🔴",-1),it={style:{"text-align":"center"}},dt={href:"https://leetcode.cn/problems/minimum-cost-to-split-an-array",target:"_blank",rel:"noopener noreferrer"},ut={href:"https://leetcode.com/problems/minimum-cost-to-split-an-array",target:"_blank",rel:"noopener noreferrer"},_t=t("td",{style:{"text-align":"center"}},"2902",-1),ht=t("td",{style:{"text-align":"left"}},"和带限制的子多重集合的数目",-1),mt=t("td",{style:{"text-align":"center"}},null,-1),kt={style:{"text-align":"left"}},gt=t("code",null,"数组",-1),ft=t("code",null,"哈希表",-1),bt=t("code",null,"动态规划",-1),yt=t("code",null,"1+",-1),xt=t("td",{style:{"text-align":"center"}},"🔴",-1),vt={style:{"text-align":"center"}},wt={href:"https://leetcode.cn/problems/count-of-sub-multisets-with-bounded-sum",target:"_blank",rel:"noopener noreferrer"},qt={href:"https://leetcode.com/problems/count-of-sub-multisets-with-bounded-sum",target:"_blank",rel:"noopener noreferrer"},It=t("td",{style:{"text-align":"center"}},"2915",-1),Et=t("td",{style:{"text-align":"left"}},"和为目标值的最长子序列的长度",-1),Ct=t("td",{style:{"text-align":"center"}},null,-1),Ot={style:{"text-align":"left"}},Lt=t("code",null,"数组",-1),Nt=t("code",null,"动态规划",-1),Vt=t("td",{style:{"text-align":"center"}},"🟠",-1),jt={style:{"text-align":"center"}},Bt={href:"https://leetcode.cn/problems/length-of-the-longest-subsequence-that-sums-to-target",target:"_blank",rel:"noopener noreferrer"},Rt={href:"https://leetcode.com/problems/length-of-the-longest-subsequence-that-sums-to-target",target:"_blank",rel:"noopener noreferrer"},Mt=t("td",{style:{"text-align":"center"}},"2952",-1),Yt=t("td",{style:{"text-align":"left"}},"需要添加的硬币的最小数量",-1),At=t("td",{style:{"text-align":"center"}},null,-1),Kt={style:{"text-align":"left"}},St=t("code",null,"贪心",-1),Tt=t("code",null,"数组",-1),zt=t("code",null,"排序",-1),Dt=t("td",{style:{"text-align":"center"}},"🟠",-1),Ft={style:{"text-align":"center"}},Gt={href:"https://leetcode.cn/problems/minimum-number-of-coins-to-be-added",target:"_blank",rel:"noopener noreferrer"},Ht={href:"https://leetcode.com/problems/minimum-number-of-coins-to-be-added",target:"_blank",rel:"noopener noreferrer"},Jt=t("td",{style:{"text-align":"center"}},"2979",-1),Pt=t("td",{style:{"text-align":"left"}},"最贵的无法购买的商品 🔒",-1),Qt=t("td",{style:{"text-align":"center"}},null,-1),Ut={style:{"text-align":"left"}},Wt=t("code",null,"数学",-1),Xt=t("code",null,"动态规划",-1),Zt=t("code",null,"数论",-1),$t=t("td",{style:{"text-align":"center"}},"🟠",-1),tn={style:{"text-align":"center"}},nn={href:"https://leetcode.cn/problems/most-expensive-item-that-can-not-be-bought",target:"_blank",rel:"noopener noreferrer"},en={href:"https://leetcode.com/problems/most-expensive-item-that-can-not-be-bought",target:"_blank",rel:"noopener noreferrer"};function sn(an,on){const c=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return r(),i("div",null,[h,t("p",null,[n("🟠 "),e(c,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1}),n("  🔖  "),e(a,{to:"/tag/breadth-first-search.html"},{default:s(()=>[m]),_:1}),n(),e(a,{to:"/tag/array.html"},{default:s(()=>[k]),_:1}),n(),e(a,{to:"/tag/dynamic-programming.html"},{default:s(()=>[g]),_:1}),n("  🔗 "),t("a",f,[b,e(o)]),n(),t("a",y,[x,e(o)])]),v,d(" prettier-ignore "),t("table",null,[w,t("tbody",null,[t("tr",null,[q,I,t("td",E,[e(a,{to:"/problem/0983.html"},{default:s(()=>[n("[✓]")]),_:1})]),t("td",C,[e(a,{to:"/tag/array.html"},{default:s(()=>[O]),_:1}),n(),e(a,{to:"/tag/dynamic-programming.html"},{default:s(()=>[L]),_:1})]),N,t("td",V,[t("a",j,[n("🀄️"),e(o)]),n(),t("a",B,[n("🔗"),e(o)])])]),t("tr",null,[R,M,Y,t("td",A,[e(a,{to:"/tag/array.html"},{default:s(()=>[K]),_:1}),n(),e(a,{to:"/tag/dynamic-programming.html"},{default:s(()=>[S]),_:1}),n(),e(a,{to:"/tag/prefix-sum.html"},{default:s(()=>[T]),_:1})]),z,t("td",D,[t("a",F,[n("🀄️"),e(o)]),n(),t("a",G,[n("🔗"),e(o)])])]),t("tr",null,[H,J,t("td",P,[e(a,{to:"/problem/2224.html"},{default:s(()=>[n("[✓]")]),_:1})]),t("td",Q,[e(a,{to:"/tag/greedy.html"},{default:s(()=>[U]),_:1}),n(),e(a,{to:"/tag/string.html"},{default:s(()=>[W]),_:1})]),X,t("td",Z,[t("a",$,[n("🀄️"),e(o)]),n(),t("a",tt,[n("🔗"),e(o)])])]),t("tr",null,[nt,et,st,t("td",at,[e(a,{to:"/tag/array.html"},{default:s(()=>[ot]),_:1}),n(),e(a,{to:"/tag/hash-table.html"},{default:s(()=>[lt]),_:1}),n(),e(a,{to:"/tag/dynamic-programming.html"},{default:s(()=>[ct]),_:1}),n(),pt]),rt,t("td",it,[t("a",dt,[n("🀄️"),e(o)]),n(),t("a",ut,[n("🔗"),e(o)])])]),t("tr",null,[_t,ht,mt,t("td",kt,[e(a,{to:"/tag/array.html"},{default:s(()=>[gt]),_:1}),n(),e(a,{to:"/tag/hash-table.html"},{default:s(()=>[ft]),_:1}),n(),e(a,{to:"/tag/dynamic-programming.html"},{default:s(()=>[bt]),_:1}),n(),yt]),xt,t("td",vt,[t("a",wt,[n("🀄️"),e(o)]),n(),t("a",qt,[n("🔗"),e(o)])])]),t("tr",null,[It,Et,Ct,t("td",Ot,[e(a,{to:"/tag/array.html"},{default:s(()=>[Lt]),_:1}),n(),e(a,{to:"/tag/dynamic-programming.html"},{default:s(()=>[Nt]),_:1})]),Vt,t("td",jt,[t("a",Bt,[n("🀄️"),e(o)]),n(),t("a",Rt,[n("🔗"),e(o)])])]),t("tr",null,[Mt,Yt,At,t("td",Kt,[e(a,{to:"/tag/greedy.html"},{default:s(()=>[St]),_:1}),n(),e(a,{to:"/tag/array.html"},{default:s(()=>[Tt]),_:1}),n(),e(a,{to:"/tag/sorting.html"},{default:s(()=>[zt]),_:1})]),Dt,t("td",Ft,[t("a",Gt,[n("🀄️"),e(o)]),n(),t("a",Ht,[n("🔗"),e(o)])])]),t("tr",null,[Jt,Pt,Qt,t("td",Ut,[e(a,{to:"/tag/math.html"},{default:s(()=>[Wt]),_:1}),n(),e(a,{to:"/tag/dynamic-programming.html"},{default:s(()=>[Xt]),_:1}),n(),e(a,{to:"/tag/number-theory.html"},{default:s(()=>[Zt]),_:1})]),$t,t("td",tn,[t("a",nn,[n("🀄️"),e(o)]),n(),t("a",en,[n("🔗"),e(o)])])])])])])}const cn=p(_,[["render",sn],["__file","0322.html.vue"]]);export{cn as default};
