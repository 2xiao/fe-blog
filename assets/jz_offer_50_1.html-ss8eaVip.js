import{_ as l,r as o,o as i,c as u,a as n,b as s,d as a,w as t,e as r}from"./app-Kkp_66uf.js";const d={},k=n("h1",{id:"_50-第一个只出现一次的字符",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_50-第一个只出现一次的字符","aria-hidden":"true"},"#"),s(" 50. 第一个只出现一次的字符")],-1),m=n("code",null,"队列",-1),h=n("code",null,"哈希表",-1),_=n("code",null,"字符串",-1),v=n("code",null,"计数",-1),f={href:"https://leetcode.cn/problems/di-yi-ge-zhi-chu-xian-yi-ci-de-zi-fu-lcof",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),g=r(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>某套连招动作记作仅由小写字母组成的序列 <code>arr</code>，其中 <code>arr[i]</code> 第 <code>i</code> 个招式的名字。请返回第一个只出现一次的招式名称，如不存在请返回空格。</p><p><strong>示例 1：</strong></p><blockquote><p>输入：arr = &quot;abbccdeff&quot;</p><p>输出：&#39;a&#39;</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p>输入：arr = &quot;ccdd&quot;</p><p>输出：&#39; &#39;</p></blockquote><p><strong>限制：</strong></p><ul><li><code>0 &lt;= arr.length &lt;= 50000</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>使用哈希表统计每个字符出现的频率，然后再遍历一遍，返回第一个频率为 <code>1</code> 的字符即可，如果没有则返回空格。</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">arr</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>character<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">dismantlingAction</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">of</span> arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>count<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			count<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> count<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> count<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">of</span> arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>count<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> i<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token string">&#39; &#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12);function w(y,x){const p=o("font"),e=o("RouterLink"),c=o("ExternalLinkIcon");return i(),u("div",null,[k,n("p",null,[s("🟢 "),a(p,{color:"#15bd66"},{default:t(()=>[s("Easy")]),_:1}),s("  🔖  "),a(e,{to:"/tag/queue.html"},{default:t(()=>[m]),_:1}),s(),a(e,{to:"/tag/hash-table.html"},{default:t(()=>[h]),_:1}),s(),a(e,{to:"/tag/string.html"},{default:t(()=>[_]),_:1}),s(),a(e,{to:"/tag/counting.html"},{default:t(()=>[v]),_:1}),s("  🔗 "),n("a",f,[b,a(c)])]),g])}const j=l(d,[["render",w],["__file","jz_offer_50_1.html.vue"]]);export{j as default};
