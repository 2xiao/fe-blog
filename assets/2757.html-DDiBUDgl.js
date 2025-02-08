import{_ as o,r as t,o as c,c as l,a as n,b as s,d as a,w as i,e as u}from"./app-totCBmv-.js";const r={},d=n("h1",{id:"_2757-生成循环数组的值-🔒",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2757-生成循环数组的值-🔒","aria-hidden":"true"},"#"),s(" 2757. 生成循环数组的值 🔒")],-1),k={href:"https://leetcode.cn/problems/generate-circular-array-values",target:"_blank",rel:"noopener noreferrer"},m=n("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/generate-circular-array-values",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),g=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a <strong>circular</strong> array <code>arr</code> and an integer <code>startIndex</code>, return a generator object <code>gen</code> that yields values from <code>arr</code>.</p><p>The first time <code>gen.next()</code> is called on the generator, it should should yield <code>arr[startIndex]</code>.</p><p>Each subsequent time <code>gen.next()</code> is called, an integer <code>jump</code> will be passed into the function (Ex: <code>gen.next(-3)</code>).</p><ul><li>If <code>jump</code> is positive, the index should increase by that value, however if the current index is the last index, it should instead jump to the first index.</li><li>If <code>jump</code> is negative, the index should decrease by the magnitude of that value, however if the current index is the first index, it should instead jump to the last index.</li></ul><p><strong>Example 1:</strong></p><blockquote><p>Input: arr = [1,2,3,4,5], steps = [1,2,6], startIndex = 0</p><p>Output: [1,2,4,5]</p><p>Explanation:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> gen <span class="token operator">=</span> <span class="token function">cycleGenerator</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> startIndex<span class="token punctuation">)</span><span class="token punctuation">;</span>
gen<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">;</span> <span class="token comment">// 1, index = startIndex = 0</span>
gen<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">;</span> <span class="token comment">// 2, index = 1, 0 -&gt; 1</span>
gen<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">;</span> <span class="token comment">// 4, index = 3, 1 -&gt; 2 -&gt; 3</span>
gen<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">;</span> <span class="token comment">// 5, index = 4, 3 -&gt; 4 -&gt; 0 -&gt; 1 -&gt; 2 -&gt; 3 -&gt; 4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: arr = [10,11,12,13,14,15], steps = [1,4,0,-1,-3], startIndex = 1</p><p>Output: [11,12,10,10,15,12]</p><p>Explanation:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> gen <span class="token operator">=</span> <span class="token function">cycleGenerator</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> startIndex<span class="token punctuation">)</span><span class="token punctuation">;</span>
gen<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">;</span> <span class="token comment">// 11, index = 1</span>
gen<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">;</span> <span class="token comment">// 12, index = 2</span>
gen<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">;</span> <span class="token comment">// 10, index = 0</span>
gen<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">;</span> <span class="token comment">// 10, index = 0</span>
gen<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">;</span> <span class="token comment">// 15, index = 5</span>
gen<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">;</span> <span class="token comment">// 12, index = 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: arr = [2,4,6,7,8,10], steps = [-4,5,-3,10], startIndex = 3</p><p>Output: [7,10,8,4,10]</p><p>Explanation:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> gen <span class="token operator">=</span> <span class="token function">cycleGenerator</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> startIndex<span class="token punctuation">)</span><span class="token punctuation">;</span>
gen<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">;</span> <span class="token comment">// 7, index = 3</span>
gen<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">;</span> <span class="token comment">// 10, index = 5</span>
gen<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">;</span> <span class="token comment">// 8, index = 4</span>
gen<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">;</span> <span class="token comment">// 4, index = 1</span>
gen<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">;</span> <span class="token comment">// 10, index = 5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= arr.length &lt;= 10^4</code></li><li><code>1 &lt;= steps.length &lt;= 100</code></li><li><code>-10^4 &lt;= steps[i], arr[i] &lt;= 10^4</code></li><li><code>0 &lt;= startIndex &lt; arr.length</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定你一个 <strong>循环</strong> 数组 <code>arr</code> 和一个整数 <code>startIndex</code> ，返回一个生成器对象 <code>gen</code> ，它从 <code>arr</code> 中生成值。第一次调用 <code>gen.next()</code> 时，它应该生成 <code>arr[startIndex]</code> 。每次调用 <code>gen.next()</code> 时，都会传入一个整数参数 <code>jump</code>（例如：<code>gen.next(-3)</code> ）。</p><ul><li>如果 <code>jump</code> 是正数，则索引应该增加该值，但如果当前索引是最后一个索引，则应跳转到第一个索引。</li><li>如果 <code>jump</code> 是负数，则索引应减去该值的绝对值，但如果当前索引是第一个索引，则应跳转到最后一个索引。</li></ul><p><strong>提示：</strong></p><ul><li><code>1 &lt;= arr.length &lt;= 10^4</code></li><li><code>1 &lt;= steps.length &lt;= 100</code></li><li><code>-10^4 &lt;= steps[i], arr[i] &lt;= 10^4</code></li><li><code>0 &lt;= startIndex &lt; arr.length</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>需要编写一个生成器函数 <code>cycleGenerator</code>，它接收一个数组 <code>arr</code> 和一个初始索引 <code>startIndex</code>，并返回一个生成器，这个生成器会根据传入的 <code>jump</code> 参数（每次通过 <code>next(jump)</code> 调用）来返回新的数组值。</p><ul><li>通过 <code>while (true)</code> 使得生成器无限循环，因为数组是循环的，且没有明确的终止条件。</li><li>生成器通过 <code>yield</code> 来返回当前索引的元素 <code>arr[startIndex]</code>。</li><li>每次调用 <code>next(jump)</code> 时，生成器会根据 <code>jump</code> 值来修改当前索引，并返回数组中对应的新值。</li><li>当 <code>startIndex</code> 超出数组范围时，可以利用模运算来确保索引始终在有效范围内： <ul><li><code>startIndex + jump</code>：计算新的索引。</li><li><code>(startIndex + jump) % n</code>：模运算确保索引不会超出数组边界。</li><li><code>((startIndex + jump) % n + n) % n</code>：如果模运算结果为负数（例如 <code>-1</code>），则加上 <code>n</code> 后再取模，确保索引非负。</li></ul></li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度：</strong> 每次调用 <code>next(jump)</code> 的操作是 <code>O(1)</code>，因为只是做了简单的索引计算和模运算。</li><li><strong>空间复杂度：</strong> <code>O(1)</code>，生成器只维护一个索引，没有额外的空间开销。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Array<span class="token punctuation">}</span></span> <span class="token parameter">arr</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">startIndex</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>Generator<span class="token punctuation">&lt;</span>number<span class="token punctuation">&gt;</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">cycleGenerator</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token operator">*</span> <span class="token punctuation">(</span>arr<span class="token punctuation">,</span> startIndex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> n <span class="token operator">=</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 返回当前索引的元素</span>
		<span class="token keyword">const</span> jump <span class="token operator">=</span> <span class="token keyword">yield</span> arr<span class="token punctuation">[</span>startIndex<span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token comment">// 根据 jump 更新索引，并使用模运算确保其在合法范围内</span>
		startIndex <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">(</span>startIndex <span class="token operator">+</span> jump<span class="token punctuation">)</span> <span class="token operator">%</span> n<span class="token punctuation">)</span> <span class="token operator">+</span> n<span class="token punctuation">)</span> <span class="token operator">%</span> n<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,25);function h(b,f){const p=t("font"),e=t("ExternalLinkIcon");return c(),l("div",null,[d,n("p",null,[s("🟠 "),a(p,{color:"#ffb800"},{default:i(()=>[s("Medium")]),_:1}),s("  🔗 "),n("a",k,[m,a(e)]),s(),n("a",v,[x,a(e)])]),g])}const j=o(r,[["render",h],["__file","2757.html.vue"]]);export{j as default};
