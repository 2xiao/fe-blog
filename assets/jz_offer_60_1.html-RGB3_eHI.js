import{_ as l,r as o,o as u,c as i,a as n,b as s,d as a,w as t,e as r}from"./app-BBnmDgJV.js";const k={},d=n("h1",{id:"_60-n个骰子的点数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_60-n个骰子的点数","aria-hidden":"true"},"#"),s(" 60. n个骰子的点数")],-1),m=n("code",null,"数学",-1),v=n("code",null,"动态规划",-1),b=n("code",null,"概率与统计",-1),h={href:"https://leetcode.cn/problems/nge-tou-zi-de-dian-shu-lcof",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"力扣",-1),f=r(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>你选择掷出 <code>num</code> 个色子，请返回所有点数总和的概率。</p><p>你需要用一个浮点数数组返回答案，其中第 <code>i</code> 个元素代表这 <code>num</code> 个骰子所能掷出的点数集合中第 <code>i</code> 小的那个的概率。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> num = 3</p><p><strong>输出：</strong>[0.00463,0.01389,0.02778,0.04630,0.06944,0.09722,0.11574,0.12500,0.12500,0.11574,0.09722,0.06944,0.04630,0.02778,0.01389,0.00463]</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> num = 5</p><p><strong>输出:</strong>[0.00013,0.00064,0.00193,0.00450,0.00900,0.01620,0.02636,0.03922,0.05401,0.06944,0.08372,0.09452,0.10031,0.10031,0.09452,0.08372,0.06944,0.05401,0.03922,0.02636,0.01620,0.00900,0.00450,0.00193,0.00064,0.00013]</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= num &lt;= 11</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这个问题可以用动态规划来求解。</p><p>题目要求计算 <code>num</code> 个骰子掷出后，各个点数总和出现的概率。每个骰子有 6 个面，因此掷出 <code>num</code> 个骰子后的点数总和可能从 <code>num</code> 到 <code>6*num</code>。</p><ul><li>使用一个二维的动态规划表 <code>dp[i][j]</code> 来表示前 <code>i</code> 个骰子掷出点数总和为 <code>j</code> 的方法数。</li><li>初始化 <code>dp[1][1]</code> 到 <code>dp[1][6]</code> 为 1，因为第一个骰子掷出的点数只能是 1 到 6，每个点数只有一种可能的方式。</li><li>对于每个骰子，其可能的点数是 1 到 6，所以可以通过之前的 <code>dp[i-1][j-k]</code>（<code>k</code> 是 1 到 6 的骰子点数，<code>j-k</code> 必须大于 0））来推导出当前 <code>dp[i][j]</code> 的值。</li></ul><p><code>dp[i][j] = dp[i-1][j-1] + dp[i-1][j-2] + dp[i-1][j-3] + dp[i-1][j-4] + dp[i-1][j-5] + dp[i-1][j-6]</code></p><ul><li>最终，可以通过动态规划表中的值来计算每个点数总和的出现次数。出现某个点数的概率就是该点数出现的次数除以所有可能点数出现的总次数，即 <code>6^num</code>。</li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(num^2)</code>，因为需要遍历骰子的数量以及所有可能的点数总和。</li><li><strong>空间复杂度</strong>：<code>O(num^2)</code>，用于存储动态规划表。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">num</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">statisticsProbability</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> dp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>num <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">6</span> <span class="token operator">*</span> num <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">// 初始化第一个骰子</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">6</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		dp<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 逐步增加骰子数量</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> num<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> i<span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> <span class="token number">6</span> <span class="token operator">*</span> num<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> k <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> k <span class="token operator">&lt;=</span> <span class="token number">6</span><span class="token punctuation">;</span> k<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token comment">// 前 i - 1 个骰子最少也有 i - 1 个点数</span>
				<span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">-</span> k <span class="token operator">&gt;=</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
					dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">+=</span> dp<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">-</span> k<span class="token punctuation">]</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 计算总数</span>
	<span class="token keyword">const</span> total <span class="token operator">=</span> <span class="token number">6</span> <span class="token operator">**</span> num<span class="token punctuation">;</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> num<span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">6</span> <span class="token operator">*</span> num<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>dp<span class="token punctuation">[</span>num<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">/</span> total<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19);function g(y,w){const e=o("font"),p=o("RouterLink"),c=o("ExternalLinkIcon");return u(),i("div",null,[d,n("p",null,[s("🟠 "),a(e,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(p,{to:"/tag/math.html"},{default:t(()=>[m]),_:1}),s(),a(p,{to:"/tag/dynamic-programming.html"},{default:t(()=>[v]),_:1}),s(),a(p,{to:"/tag/probability-and-statistics.html"},{default:t(()=>[b]),_:1}),s("  🔗 "),n("a",h,[_,a(c)])]),f])}const x=l(k,[["render",g],["__file","jz_offer_60_1.html.vue"]]);export{x as default};
