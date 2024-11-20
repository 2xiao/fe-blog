import{_ as c,r as e,o as p,c as l,a as n,b as t,d as a,w as r,e as d}from"./app-BBnmDgJV.js";const i={},u=n("h1",{id:"_2758-下一天-🔒",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2758-下一天-🔒","aria-hidden":"true"},"#"),t(" 2758. 下一天 🔒")],-1),k={href:"https://leetcode.cn/problems/next-day",target:"_blank",rel:"noopener noreferrer"},h=n("code",null,"力扣",-1),g={href:"https://leetcode.com/problems/next-day",target:"_blank",rel:"noopener noreferrer"},m=n("code",null,"LeetCode",-1),D=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Write code that enhances all date objects such that you can call the <code>date.nextDay()</code> method on any date object and it will return the next day in the format <em>YYYY-MM-DD</em> as a string.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: date = &quot;2014-06-20&quot;</p><p>Output: &quot;2014-06-21&quot;</p><p>Explanation:</p><p>const date = new Date(&quot;2014-06-20&quot;);</p><p>date.nextDay(); // &quot;2014-06-21&quot;</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: date = &quot;2017-10-31&quot;</p><p>Output: &quot;2017-11-01&quot;</p><p>Explanation: The day after 2017-10-31 is 2017-11-01.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>new Date(date)</code> is a valid date object</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>请你编写一个有关日期对象的方法，使得任何日期对象都可以调用 <code>date.nextDay()</code> 方法，然后返回调用日期对象的下一天，格式为 YYYY-MM-DD 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> date = &quot;2014-06-20&quot;</p><p><strong>输出：</strong> &quot;2014-06-21&quot;</p><p><strong>解释：</strong></p><p>const date = new Date(&quot;2014-06-20&quot;);</p><p>date.nextDay(); // &quot;2014-06-21&quot;</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> date = &quot;2017-10-31&quot;</p><p><strong>输出：</strong> &quot;2017-11-01&quot;</p><p><strong>解释：</strong> 日期 2017-10-31 的下一天是 2017-11-01.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>new Date(date)</code> 是一个有效的日期对象</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><strong>扩展 Date 对象</strong>：通过 <code>Date.prototype</code> 向 <code>Date</code> 对象的原型添加了一个新的方法 <code>nextDay</code>，使得所有的 <code>Date</code> 实例都可以调用该方法。</li><li><strong>创建新的日期对象</strong>：通过 <code>new Date(this)</code> 创建一个新的日期对象，确保不会修改原始的日期对象 <code>this</code>，而是返回一个新的日期实例。</li><li><strong>获取当前日期的下一天</strong>：可以使用 <code>Date</code> 对象的内置方法 <code>getDate()</code> 方法获取当前日期的日（1-31），然后通过 <code>setDate()</code> 设置为当前日期加 1，从而获取下一天的日期。</li><li><strong>格式化输出为 <code>YYYY-MM-DD</code></strong>：使用 <code>toISOString()</code> 方法来获取标准的 ISO 格式日期（例如：<code>2024-11-04T00:00:00.000Z</code>），然后从中提取 <code>YYYY-MM-DD</code> 部分。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度：</strong> 每次调用 <code>nextDay()</code> 是 <code>O(1)</code>，只修改日期并格式化输出。</li><li><strong>空间复杂度：</strong> <code>O(1)</code>，没有使用额外的空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 扩展 Date.prototype，添加 nextDay 方法</span>
<span class="token class-name">Date</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">nextDay</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 创建一个新的 Date 实例，避免修改原始日期对象</span>
	<span class="token keyword">const</span> nextDay <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 设置为下一天</span>
	nextDay<span class="token punctuation">.</span><span class="token function">setDate</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 返回格式化的 YYYY-MM-DD 格式的日期</span>
	<span class="token keyword">return</span> nextDay<span class="token punctuation">.</span><span class="token function">toISOString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;T&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 只提取 YYYY-MM-DD 部分</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22);function b(_,v){const o=e("font"),s=e("ExternalLinkIcon");return p(),l("div",null,[u,n("p",null,[t("🟢 "),a(o,{color:"#15bd66"},{default:r(()=>[t("Easy")]),_:1}),t("  🔗 "),n("a",k,[h,a(s)]),t(),n("a",g,[m,a(s)])]),D])}const x=c(i,[["render",b],["__file","2758.html.vue"]]);export{x as default};
