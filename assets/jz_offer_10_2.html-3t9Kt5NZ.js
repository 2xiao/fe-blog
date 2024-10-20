import{_ as i,r as o,o as r,c as u,a as n,d as s,b as a,w as t,e as c}from"./app-Fucr7yuT.js";const d={},k={id:"剑指-offer-10-ii-青蛙跳台阶问题",tabindex:"-1"},m=n("a",{class:"header-anchor",href:"#剑指-offer-10-ii-青蛙跳台阶问题","aria-hidden":"true"},"#",-1),h={href:"https://leetcode.cn/problems/qing-wa-tiao-tai-jie-wen-ti-lcof",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"记忆化搜索",-1),f=n("code",null,"数学",-1),v=n("code",null,"动态规划",-1),b={href:"https://leetcode.cn/problems/qing-wa-tiao-tai-jie-wen-ti-lcof",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"LeetCode",-1),w=c('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>假设你正在爬楼梯。需要 n 阶你才能到达楼顶。每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？</p><p>答案需要取模 <code>1e9+7(1000000007)</code> ，如计算初始结果为：<code>1000000008</code>，请返回 <code>1</code>。</p><p><strong>示例 1：</strong></p><blockquote><p>输入：n = 2</p><p>输出：2</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p>输入：n = 5</p><p>输出：8</p></blockquote><p><strong>提示：</strong></p><p><code>0 &lt;= n &lt;= 100</code></p>',9),y={class:"hint-container warning"},x=n("p",{class:"hint-container-title"},"注意",-1),j=c(`<h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这是一个经典的动态规划问题，通常被称为「爬楼梯问题」。假设你要爬上第 n 阶楼梯，你可以从第 n-1 阶爬一步上来，也可以从第 n-2 阶爬两步上来，因此到达第 n 阶楼梯的方法数等于到达第 n-1 阶和第 n-2 阶的方法数之和。这样，我们可以得到以下的递推关系：</p><p><code>dp(n) = dp(n - 1) + dp(n - 2)</code></p><p>其中，<code>dp(n)</code> 表示到达第 n 阶楼梯的方法数。</p><p>接下来，我们需要初始化边界条件。当 <code>n = 1</code> 时，只有一种方法爬到楼顶；当 <code>n = 2</code> 时，有两种方法爬到楼顶（一步一步或直接两步）。因此，我们可以初始化 <code>dp(1) = 1</code> 和 <code>dp(2) = 2</code>。</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">num</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">trainWays</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> <span class="token function-variable function">helper</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">2</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>map<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token function">helper</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">helper</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token number">1000000007</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token function">helper</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function q(L,C){const p=o("ExternalLinkIcon"),l=o("font"),e=o("RouterLink");return r(),u("div",null,[n("h1",k,[m,s(),n("a",h,[s("剑指 Offer 10 - II. 青蛙跳台阶问题"),a(p)])]),n("p",null,[s("🟢 "),a(l,{color:"#15bd66"},{default:t(()=>[s("Easy")]),_:1}),s("  🔖  "),a(e,{to:"/tag/memoization.html"},{default:t(()=>[_]),_:1}),s(),a(e,{to:"/tag/math.html"},{default:t(()=>[f]),_:1}),s(),a(e,{to:"/tag/dynamic-programming.html"},{default:t(()=>[v]),_:1}),s("  🔗 "),n("a",b,[g,a(p)])]),w,n("div",y,[x,n("p",null,[s("本题与 LeetCode "),a(e,{to:"/problem/0070.html"},{default:t(()=>[s("第 70 题")]),_:1}),s(" 相同。")])]),j])}const I=i(d,[["render",q],["__file","jz_offer_10_2.html.vue"]]);export{I as default};
