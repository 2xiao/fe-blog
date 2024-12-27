import{_ as l,r as p,o as i,c as r,a as n,b as s,d as a,w as t,f as d,e as u}from"./app-fqckLmln.js";const k={},m=n("h1",{id:"_343-整数拆分",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_343-整数拆分","aria-hidden":"true"},"#"),s(" 343. 整数拆分")],-1),h=n("code",null,"数学",-1),_=n("code",null,"动态规划",-1),b={href:"https://leetcode.cn/problems/integer-break",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/integer-break",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"LeetCode",-1),x=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an integer <code>n</code>, break it into the sum of <code>k</code> <strong>positive integers</strong> , where <code>k &gt;= 2</code>, and maximize the product of those integers.</p><p>Return <em>the maximum product you can get</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: n = 2</p><p>Output: 1</p><p>Explanation: 2 = 1 + 1, 1 × 1 = 1.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: n = 10</p><p>Output: 36</p><p>Explanation: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>2 &lt;= n &lt;= 58</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个正整数 <code>n</code> ，将其拆分为 <code>k</code> 个 <strong>正整数</strong> 的和（ <code>k &gt;= 2</code> ），并使这些整数的乘积最大化。</p><p>返回 <strong>你可以获得的最大乘积</strong> 。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>可以使用动态规划来解决：</p><ol><li><p><strong>定义状态：</strong> 设 <code>dp[i]</code> 表示整数 <code>i</code> 拆分后的最大乘积。</p></li><li><p><strong>状态转移方程：</strong> 对于整数 i，其拆分成两个数 <code>j</code> 和 <code>i - j</code>。dp[i] 的值取决于这两个数拆分后的最大乘积，即 <code>dp[i] = max(j * (i - j), j * dp[i - j])</code>。需要遍历所有可能的 <code>j</code> 来找到最大的乘积。</p></li><li><p><strong>初始状态：</strong> dp[2] = 1，因为数字 2 只能拆分成 <code>1 + 1</code>，乘积为 <code>1</code>。</p></li><li><p><strong>计算顺序：</strong> 从小到大计算 <code>dp</code> 数组的值，直到计算出 dp[n]。</p></li></ol><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">n</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">integerBreak</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 定义状态数组</span>
	<span class="token keyword">const</span> dp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 初始状态</span>
	dp<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

	<span class="token comment">// 计算状态转移</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> i<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> j <span class="token operator">*</span> <span class="token punctuation">(</span>i <span class="token operator">-</span> j<span class="token punctuation">)</span><span class="token punctuation">,</span> j <span class="token operator">*</span> dp<span class="token punctuation">[</span>i <span class="token operator">-</span> j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> dp<span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,18),y=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),j=n("td",{style:{"text-align":"center"}},"1808",-1),w=n("td",{style:{"text-align":"left"}},"好因子的最大数目",-1),E=n("td",{style:{"text-align":"center"}},null,-1),C={style:{"text-align":"left"}},L=n("code",null,"递归",-1),N=n("code",null,"数学",-1),V=n("code",null,"数论",-1),q=n("td",{style:{"text-align":"center"}},"🔴",-1),B={style:{"text-align":"center"}},I={href:"https://leetcode.cn/problems/maximize-number-of-nice-divisors",target:"_blank",rel:"noopener noreferrer"},z={href:"https://leetcode.com/problems/maximize-number-of-nice-divisors",target:"_blank",rel:"noopener noreferrer"};function R(M,O){const c=p("font"),e=p("RouterLink"),o=p("ExternalLinkIcon");return i(),r("div",null,[m,n("p",null,[s("🟠 "),a(c,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(e,{to:"/tag/math.html"},{default:t(()=>[h]),_:1}),s(),a(e,{to:"/tag/dynamic-programming.html"},{default:t(()=>[_]),_:1}),s("  🔗 "),n("a",b,[g,a(o)]),s(),n("a",v,[f,a(o)])]),x,d(" prettier-ignore "),n("table",null,[y,n("tbody",null,[n("tr",null,[j,w,E,n("td",C,[a(e,{to:"/tag/recursion.html"},{default:t(()=>[L]),_:1}),s(),a(e,{to:"/tag/math.html"},{default:t(()=>[N]),_:1}),s(),a(e,{to:"/tag/number-theory.html"},{default:t(()=>[V]),_:1})]),q,n("td",B,[n("a",I,[s("🀄️"),a(o)]),s(),n("a",z,[s("🔗"),a(o)])])])])])])}const G=l(k,[["render",R],["__file","0343.html.vue"]]);export{G as default};
