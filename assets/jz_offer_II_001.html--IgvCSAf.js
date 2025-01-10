import{_ as r,r as t,o as i,c as u,a as n,b as s,d as a,w as e,e as p}from"./app-XFeYdzZv.js";const d={},k=n("h1",{id:"_1-整数除法",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-整数除法","aria-hidden":"true"},"#"),s(" 1. 整数除法")],-1),m=n("code",null,"数学",-1),b={href:"https://leetcode.cn/problems/xoh6Oh",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"力扣",-1),g=p('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>给定两个整数 <code>a</code> 和 <code>b</code> ，求它们的除法的商 <code>a/b</code> ，要求不得使用乘号 <code>&#39;*&#39;</code>、除号 <code>&#39;/&#39;</code> 以及求余符号 <code>&#39;%&#39;</code> 。</p><p><strong>注意：</strong></p><ul><li>整数除法的结果应当截去（<code>truncate</code>）其小数部分，例如：<code>truncate(8.345) = 8</code> 以及 <code>truncate(-2.7335) = -2</code></li><li>假设我们的环境只能存储 32 位有符号整数，其数值范围是 <code>[−231, 231−1]</code>。本题中，如果除法结果溢出，则返回 <code>2^31 − 1</code></li></ul><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> a = 15, b = 2</p><p><strong>输出：</strong> 7</p><p><strong>解释：</strong> 15/2 = truncate(7.5) = 7</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> a = 7, b = -3</p><p><strong>输出：</strong> -2</p><p><strong>解释：</strong> 7/-3 = truncate(-2.33333..) = -2</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> a = 0, b = 1</p><p><strong>输出：</strong> 0</p></blockquote><p><strong>示例 4：</strong></p><blockquote><p><strong>输入：</strong> a = 1, b = 1</p><p><strong>输出：</strong> 1</p></blockquote><p><strong>提示:</strong></p><ul><li><code>-2^31 &lt;= a, b &lt;= 2^31 - 1</code></li><li><code>b != 0</code></li></ul>',14),h={class:"hint-container warning"},_=n("p",{class:"hint-container-title"},"注意",-1),f=p(`<h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>处理符号问题</strong>：</p><ul><li>首先判断结果的符号：如果 <code>a</code> 和 <code>b</code> 中只有一个是负数，结果是负的，否则结果为正的。</li><li>可以通过将 <code>a</code> 和 <code>b</code> 取绝对值来处理后续的无符号整数运算。</li></ul></li><li><p><strong>倍增法</strong>：</p><ul><li>为了模拟除法，我们可以用<strong>减法</strong>模拟。直接进行减法会超时，因此采用<strong>倍增法</strong>提高效率。</li><li>基本思想是将除数（<code>b</code>）不断翻倍（即乘以 2），直到超过被除数（<code>a</code>）。这相当于不断减去更大的除数倍数（2 的幂次）来逼近结果。</li><li>每次当倍增的除数能从被除数中减去时，记录下对应的倍数（即商的部分），直到被除数小于除数为止。</li></ul></li><li><p><strong>处理边界情况</strong>：</p><ul><li>如果 <code>b == 0</code>，不能除零，直接返回。</li><li>如果 <code>a == -2^31</code> 且 <code>b == -1</code>，会导致溢出，这种情况下直接返回 <code>2^31 - 1</code>（即 <code>2147483647</code>）。</li></ul></li><li><p><strong>返回结果</strong>：</p><ul><li>根据之前判断的符号情况，返回商的正负值。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(log n)</code>，其中 n 是 <code>a</code> 的大小。每次倍增都将被除数缩小到原来的一半，故时间复杂度为对数级别。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，除了存储变量外，所需的额外空间是常数级的。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">a</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">b</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">divide</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 处理特殊情况</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>b <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">Infinity</span><span class="token punctuation">;</span> <span class="token comment">// 除数为 0</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">==</span> <span class="token operator">-</span>Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">31</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> b <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">31</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 溢出情况</span>

	<span class="token comment">// 判断结果符号</span>
	<span class="token keyword">let</span> isNegative <span class="token operator">=</span> a <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">!==</span> b <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token comment">// 取绝对值，处理负数问题</span>
	a <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
	b <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token comment">// 倍增法</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>a <span class="token operator">&gt;=</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> temp <span class="token operator">=</span> b<span class="token punctuation">,</span>
			multi <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>a <span class="token operator">&gt;=</span> <span class="token number">2</span> <span class="token operator">*</span> temp<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			temp <span class="token operator">*=</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">// 除数翻倍</span>
			multi <span class="token operator">*=</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">// 倍数也翻倍</span>
		<span class="token punctuation">}</span>
		a <span class="token operator">-=</span> temp<span class="token punctuation">;</span> <span class="token comment">// 减去翻倍后的除数</span>
		res <span class="token operator">+=</span> multi<span class="token punctuation">;</span> <span class="token comment">// 商加上相应的倍数</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 返回结果，处理符号</span>
	<span class="token keyword">return</span> isNegative <span class="token operator">?</span> <span class="token operator">-</span>res <span class="token operator">:</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function w(y,x){const c=t("font"),o=t("RouterLink"),l=t("ExternalLinkIcon");return i(),u("div",null,[k,n("p",null,[s("🟢 "),a(c,{color:"#15bd66"},{default:e(()=>[s("Easy")]),_:1}),s("  🔖  "),a(o,{to:"/tag/math.html"},{default:e(()=>[m]),_:1}),s("  🔗 "),n("a",b,[v,a(l)])]),g,n("div",h,[_,n("p",null,[s("本题与 LeetCode "),a(o,{to:"/problem/0029.html"},{default:e(()=>[s("第 29 题")]),_:1}),s(" 相同。")])]),f])}const I=r(d,[["render",w],["__file","jz_offer_II_001.html.vue"]]);export{I as default};
