import{_ as r,r as o,o as i,c as u,a as n,b as s,d as a,w as e,e as p}from"./app-BBnmDgJV.js";const d={},k=n("h1",{id:"_16-数值的整数次方",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_16-数值的整数次方","aria-hidden":"true"},"#"),s(" 16. 数值的整数次方")],-1),m=n("code",null,"递归",-1),h=n("code",null,"数学",-1),v={href:"https://leetcode.cn/problems/shu-zhi-de-zheng-shu-ci-fang-lcof",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),_=p('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>实现 <code>pow(x, n)</code> ，即计算 <code>x</code> 的 <code>n</code> 次幂函数（即，<code>x^n</code>）。</p><p><strong>Example 1:</strong></p><blockquote><p>输入：x = 2.00000, n = 10</p><p>输出：1024.00000</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>输入：x = 2.10000, n = 3</p><p>输出：9.26100</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>输入：x = 2.00000, n = -2</p><p>输出：0.25000</p><p>解释：2-2 = 1/22 = 1/4 = 0.25</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>-100.0 &lt; x &lt; 100.0</code></li><li><code>-2^31 &lt;= n &lt;= 2^31-1</code></li><li><code>-10^4 &lt;= x^n &lt;= 10^4</code></li></ul>',10),f={class:"hint-container warning"},x=n("p",{class:"hint-container-title"},"注意",-1),g=p(`<h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>用递归的方式，不断的将 <code>n</code> 二分下去，注意 <code>n</code> 的正负、奇偶。</p><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>: <code>O(log n)</code>，二分法。</li><li><strong>空间复杂度</strong>: <code>O(1)</code>。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">x</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">n</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">myPow</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> x<span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		x <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">/</span> x<span class="token punctuation">;</span>
		n <span class="token operator">=</span> <span class="token operator">-</span>n<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">let</span> temp <span class="token operator">=</span> <span class="token function">myPow</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>n <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> temp <span class="token operator">*</span> temp <span class="token operator">*</span> x<span class="token punctuation">;</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> temp <span class="token operator">*</span> temp<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function w(y,q){const c=o("font"),t=o("RouterLink"),l=o("ExternalLinkIcon");return i(),u("div",null,[k,n("p",null,[s("🟠 "),a(c,{color:"#ffb800"},{default:e(()=>[s("Medium")]),_:1}),s("  🔖  "),a(t,{to:"/tag/recursion.html"},{default:e(()=>[m]),_:1}),s(),a(t,{to:"/tag/math.html"},{default:e(()=>[h]),_:1}),s("  🔗 "),n("a",v,[b,a(l)])]),_,n("div",f,[x,n("p",null,[s("本题与 LeetCode "),a(t,{to:"/problem/0050.html"},{default:e(()=>[s("第 50 题")]),_:1}),s(" 相同。")])]),g])}const j=r(d,[["render",w],["__file","jz_offer_16_1.html.vue"]]);export{j as default};
