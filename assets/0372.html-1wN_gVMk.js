import{_ as l,r as p,o as r,c as i,a as n,b as s,d as a,w as t,f as u,e as d}from"./app-MXSjQbID.js";const k={},m=n("h1",{id:"_372-超级次方",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_372-超级次方","aria-hidden":"true"},"#"),s(" 372. 超级次方")],-1),b=n("code",null,"数学",-1),h=n("code",null,"分治",-1),g={href:"https://leetcode.cn/problems/super-pow",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"力扣",-1),_={href:"https://leetcode.com/problems/super-pow",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"LeetCode",-1),x=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Your task is to calculate <code>ab</code> mod <code>1337</code> where <code>a</code> is a positive integer and <code>b</code> is an extremely large positive integer given in the form of an array.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: a = 2, b = [3]</p><p>Output: 8</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: a = 2, b = [1,0]</p><p>Output: 1024</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: a = 1, b = [4,3,3,8,5,2]</p><p>Output: 1</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= a &lt;= 2^31 - 1</code></li><li><code>1 &lt;= b.length &lt;= 2000</code></li><li><code>0 &lt;= b[i] &lt;= 9</code></li><li><code>b</code> does not contain leading zeros.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>你的任务是计算 <code>ab</code> 对 <code>1337</code> 取模，<code>a</code> 是一个正整数，<code>b</code> 是一个非常大的正整数且会以数组形式给出。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> a = 2, b = [3]</p><p><strong>输出：</strong> 8</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> a = 2, b = [1,0]</p><p><strong>输出：</strong> 1024</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> a = 1, b = [4,3,3,8,5,2]</p><p><strong>输出：</strong> 1</p></blockquote><p><strong>示例 4：</strong></p><blockquote><p><strong>输入：</strong> a = 2147483647, b = [2,0,0]</p><p><strong>输出：</strong> 1198</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= a &lt;= 2^31 - 1</code></li><li><code>1 &lt;= b.length &lt;= 2000</code></li><li><code>0 &lt;= b[i] &lt;= 9</code></li><li><code>b</code> 不含前导 0</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li>利用 <strong>指数运算的分解性质</strong>：</li></ol><ul><li><code>(x^m * x^n) % mod = ((x^m) % mod * (x^n) % mod) % mod</code></li><li>设 <code>b = [d1, d2, ..., dn]</code>，可表示为 <code>b = d1 * 10^(n-1) + d2 * 10^(n-2) + ... + dn</code>。</li></ul><p>可以通过递归计算：</p><p><code>a^b = a^(d1 * 10^(n-1)) * a^(d2 * 10^(n-2)) * ... * a^dn</code></p><ol start="2"><li>使用快速幂来计算 <code>(x^y) % mod</code>：</li></ol><ul><li>将 <code>y</code> 按位分解。 <ul><li>若 <code>y</code> 为奇数，则结果乘以 <code>x</code>；</li><li>否则只计算平方部分。</li></ul></li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n log 10)</code>，<code>n</code> 是数组 <code>b</code> 的长度，每次递归需要计算一个快速幂。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，递归栈空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">a</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">b</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">superPow</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>b<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> mod <span class="token operator">=</span> <span class="token number">1337</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> num <span class="token operator">=</span> b<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">// 递归</span>
	<span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token function">modPow</span><span class="token punctuation">(</span><span class="token function">superPow</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token function">modPow</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> num<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">%</span> mod<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 快速幂计算 (x^y) % mod</span>
<span class="token keyword">var</span> <span class="token function-variable function">modPow</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> mod <span class="token operator">=</span> <span class="token number">1337</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
	x <span class="token operator">%=</span> mod<span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>y <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>y <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			res <span class="token operator">=</span> <span class="token punctuation">(</span>res <span class="token operator">*</span> x<span class="token punctuation">)</span> <span class="token operator">%</span> mod<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		x <span class="token operator">=</span> <span class="token punctuation">(</span>x <span class="token operator">*</span> x<span class="token punctuation">)</span> <span class="token operator">%</span> mod<span class="token punctuation">;</span>
		y <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>y <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,34),y=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),w=n("td",{style:{"text-align":"center"}},"50",-1),q=n("td",{style:{"text-align":"left"}},"Pow(x, n)",-1),E={style:{"text-align":"center"}},P={style:{"text-align":"left"}},C=n("code",null,"递归",-1),I=n("code",null,"数学",-1),L=n("td",{style:{"text-align":"center"}},"🟠",-1),N={style:{"text-align":"center"}},O={href:"https://leetcode.cn/problems/powx-n",target:"_blank",rel:"noopener noreferrer"},V={href:"https://leetcode.com/problems/powx-n",target:"_blank",rel:"noopener noreferrer"};function j(B,M){const c=p("font"),e=p("RouterLink"),o=p("ExternalLinkIcon");return r(),i("div",null,[m,n("p",null,[s("🟠 "),a(c,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(e,{to:"/tag/math.html"},{default:t(()=>[b]),_:1}),s(),a(e,{to:"/tag/divide-and-conquer.html"},{default:t(()=>[h]),_:1}),s("  🔗 "),n("a",g,[v,a(o)]),s(),n("a",_,[f,a(o)])]),x,u(" prettier-ignore "),n("table",null,[y,n("tbody",null,[n("tr",null,[w,q,n("td",E,[a(e,{to:"/problem/0050.html"},{default:t(()=>[s("[✓]")]),_:1})]),n("td",P,[a(e,{to:"/tag/recursion.html"},{default:t(()=>[C]),_:1}),s(),a(e,{to:"/tag/math.html"},{default:t(()=>[I]),_:1})]),L,n("td",N,[n("a",O,[s("🀄️"),a(o)]),s(),n("a",V,[s("🔗"),a(o)])])])])])])}const z=l(k,[["render",j],["__file","0372.html.vue"]]);export{z as default};
