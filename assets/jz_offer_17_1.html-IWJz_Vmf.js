import{_ as l,r as e,o as i,c as u,a as n,b as s,d as a,w as t,e as r}from"./app-9CeBk-uV.js";const d={},k=n("h1",{id:"_17-打印从1到最大的n位数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_17-打印从1到最大的n位数","aria-hidden":"true"},"#"),s(" 17. 打印从1到最大的n位数")],-1),m=n("code",null,"数组",-1),h=n("code",null,"数学",-1),_={href:"https://leetcode.cn/problems/da-yin-cong-1dao-zui-da-de-nwei-shu-lcof",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"力扣",-1),b=r(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>输入数字 <code>n</code>，按顺序打印出从 <code>1</code> 到最大的 <code>n</code> 位十进制数。比如输入 <code>3</code>，则打印出 <code>1、2、3</code> 一直到最大的 <code>3</code> 位数 <code>999</code>。</p><p><strong>Example 1:</strong></p><blockquote><p>输入：n = 1</p><p>输出：[1,2,3,4,5,6,7,8,9]</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>输入：n = 2</p><p>输出：[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>n</code> 为正整数，<code>0 &lt; n &lt;= 5</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>先计算出最大的 <code>n</code> 位十进制数 <code>max</code> ，比如 <code>99</code> 或 <code>999</code> ，再将 <code>1 ~ max</code> 之间的所有整数放入数组内。</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">cnt</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">countNumbers</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">cnt</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> max <span class="token operator">=</span> <span class="token function">Number</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>cnt<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>i<span class="token operator">++</span> <span class="token operator">&lt;</span> max<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12);function f(x,g){const c=e("font"),o=e("RouterLink"),p=e("ExternalLinkIcon");return i(),u("div",null,[k,n("p",null,[s("🟢 "),a(c,{color:"#15bd66"},{default:t(()=>[s("Easy")]),_:1}),s("  🔖  "),a(o,{to:"/tag/array.html"},{default:t(()=>[m]),_:1}),s(),a(o,{to:"/tag/math.html"},{default:t(()=>[h]),_:1}),s("  🔗 "),n("a",_,[v,a(p)])]),b])}const y=l(d,[["render",f],["__file","jz_offer_17_1.html.vue"]]);export{y as default};
